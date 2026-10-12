/**
 * TARA USA ASMR - WHO WILL WIN THIS GAME? (X VS Y DICE BATTLE)
 * Engine: 3D Dice Simulation, Web Audio Synthesizer, Turn Manager & Confetti
 */

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
const gameState = {
  targetScore: 1000,
  scoreX: 0,
  scoreY: 0,
  currentTurn: 'X', // 'X' or 'Y'
  isAutoPlaying: false,
  isRolling: false,
  autoTimer: null,
  speed: 900,
  diceMultiplier: 1,
  round: 1,
  totalRolls: { X: 0, Y: 0 },
  streaks: { X: 0, Y: 0 },
  activeEvent: null,
  eventCooldown: 6,
  soundEnabled: true,
  asmrAmbienceEnabled: false,
  theme: 'neon',
  playerX: {
    name: 'PLAYER X',
    photo: '',
  },
  playerY: {
    name: 'PLAYER Y',
    photo: '',
  }
};

// ==========================================================================
// PROCEDURAL ASMR WEB AUDIO ENGINE (Works 100% offline without assets)
// ==========================================================================
class SoundFXEngine {
  constructor() {
    this.ctx = null;
    this.ambienceNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Realistic wooden/acrylic dice clatter sound
  playDiceRoll() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    const clatterCount = 5 + Math.floor(Math.random() * 3);

    for (let i = 0; i < clatterCount; i++) {
      const timeOffset = i * 0.07 + Math.random() * 0.04;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Bandpass noise simulation
      osc.type = i % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(320 + Math.random() * 380, now + timeOffset);
      osc.frequency.exponentialRampToValueAtTime(140 + Math.random() * 60, now + timeOffset + 0.04);

      gain.gain.setValueAtTime(0.18 / (i + 1), now + timeOffset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + 0.045);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + timeOffset);
      osc.stop(now + timeOffset + 0.05);
    }
  }

  // Satisfying ASMR pop / score tick sound
  playScoreTick(pitch = 520) {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, now);
    osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, now + 0.06);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // Lucky 6 bell / chime
  playLuckyChime() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    const chords = [587.33, 739.99, 880, 1174.66]; // D-maj chime

    chords.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.03);

      gain.gain.setValueAtTime(0.15, now + idx * 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.03 + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.03);
      osc.stop(now + idx * 0.03 + 0.65);
    });
  }

  // Comedic cartoon fail sound for rolling a 1 (Spring / Sad Bonk)
  playCartoonFail() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    // Comedic downward slide with wobble
    osc.frequency.setValueAtTime(360, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.28);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);

    // Follow-up soft comic "wah" tone
    setTimeout(() => {
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(160, t);
      osc2.frequency.exponentialRampToValueAtTime(95, t + 0.22);
      gain2.gain.setValueAtTime(0.18, t);
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(t);
      osc2.stop(t + 0.26);
    }, 180);
  }

  // Epic Jackpot Bass Drop + Bells for rolling a 6
  playJackpotBoom() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;

    // Sub-bass impact
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(120, now);
    subOsc.frequency.exponentialRampToValueAtTime(38, now + 0.4);
    subGain.gain.setValueAtTime(0.35, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);
    subOsc.start(now);
    subOsc.stop(now + 0.5);

    // High shimmer jackpot chords
    this.playLuckyChime();
  }

  // Crowd cheer / party whistle sound
  playCheerSound() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    [650, 820, 1050].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.3, now + idx * 0.05 + 0.18);
      gain.gain.setValueAtTime(0.15, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
    });
  }

  // Crisp Sword / Blade Clash on turn switches
  playSwordClash() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.12);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.16);
  }

  // Laser Combat Projectile Blast
  playLaserShot() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(920, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.14);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  }

  // Thunder Strike for Critical Attacks
  playThunderStrike() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;

    // Sub rumble
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(180, now);
    subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.38);

    subGain.gain.setValueAtTime(0.35, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);
    subOsc.start(now);
    subOsc.stop(now + 0.45);
  }

  // Mystery Battle Power-Up Jingle
  playEventSound() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    [440, 554, 659, 880].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.16, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.32);
    });
  }

  // Fanfare for winner
  playFanfare() {
    if (!gameState.soundEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    const notes = [
      { f: 523.25, t: 0.0 },  // C5
      { f: 659.25, t: 0.15 }, // E5
      { f: 783.99, t: 0.3 },  // G5
      { f: 1046.50, t: 0.5 }, // C6
      { f: 1318.51, t: 0.75 } // E6
    ];

    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, now + n.t);

      gain.gain.setValueAtTime(0.22, now + n.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + 0.55);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + n.t);
      osc.stop(now + n.t + 0.6);
    });
  }

  // Subtle ASMR Pink Noise / Gentle Ambience stream
  toggleAsmrAmbience() {
    this.init();
    if (this.ambienceNode) {
      this.ambienceNode.stop();
      this.ambienceNode.disconnect();
      this.ambienceNode = null;
      gameState.asmrAmbienceEnabled = false;
      return false;
    }

    // Generate gentle noise buffer
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start();
    this.ambienceNode = whiteNoise;
    gameState.asmrAmbienceEnabled = true;
    return true;
  }
}

const soundEngine = new SoundFXEngine();

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================
const DOM = {
  wrapper: document.getElementById('gameWrapper'),
  gameTitle: document.getElementById('gameTitle'),
  brandingBadge: document.getElementById('brandingBadge'),
  targetDisplay: document.getElementById('targetDisplay'),
  
  // Player X
  cardX: document.getElementById('cardX'),
  nameX: document.getElementById('nameX'),
  photoX: document.getElementById('photoX'),
  fallbackX: document.getElementById('fallbackX'),
  uploadInputX: document.getElementById('uploadInputX'),
  scoreX: document.getElementById('scoreX'),
  gainX: document.getElementById('gainX'),
  progressFillX: document.getElementById('progressFillX'),
  percentX: document.getElementById('percentX'),
  remainX: document.getElementById('remainX'),
  tagX: document.getElementById('tagX'),
  statusBadgeX: document.getElementById('statusBadgeX'),
  
  // Player Y
  cardY: document.getElementById('cardY'),
  nameY: document.getElementById('nameY'),
  photoY: document.getElementById('photoY'),
  fallbackY: document.getElementById('fallbackY'),
  uploadInputY: document.getElementById('uploadInputY'),
  scoreY: document.getElementById('scoreY'),
  gainY: document.getElementById('gainY'),
  progressFillY: document.getElementById('progressFillY'),
  percentY: document.getElementById('percentY'),
  remainY: document.getElementById('remainY'),
  tagY: document.getElementById('tagY'),
  statusBadgeY: document.getElementById('statusBadgeY'),

  // Dice & Turn
  diceCube: document.getElementById('diceCube'),
  diceGlow: document.getElementById('diceGlow'),
  rollResultBadge: document.getElementById('rollResultBadge'),
  badgeNum: document.getElementById('badgeNum'),
  turnAnnouncer: document.getElementById('turnAnnouncer'),
  turnText: document.getElementById('turnText'),

  // Controls
  btnAutoPlay: document.getElementById('btnAutoPlay'),
  playIcon: document.getElementById('playIcon'),
  playLabel: document.getElementById('playLabel'),
  btnRollOnce: document.getElementById('btnRollOnce'),
  speedSelect: document.getElementById('speedSelect'),
  diceMultiplier: document.getElementById('diceMultiplier') || null,
  btnResetGame: document.getElementById('btnResetGame'),
  btnPresetAvatars: document.getElementById('btnPresetAvatars'),
  btnAsmrAudio: document.getElementById('btnAsmrAudio'),
  asmrStateDot: document.getElementById('asmrStateDot'),

  // Header / View Controls
  btnLayoutToggle: document.getElementById('btnLayoutToggle'),
  btnSoundToggle: document.getElementById('btnSoundToggle'),
  soundIcon: document.getElementById('soundIcon'),
  btnSettings: document.getElementById('btnSettings'),
  btnFullscreen: document.getElementById('btnFullscreen'),

  // Stats Footer
  roundCounter: document.getElementById('roundCounter'),
  leaderDisplay: document.getElementById('leaderDisplay'),
  leadGapDisplay: document.getElementById('leadGapDisplay'),
  maxDisplays: document.querySelectorAll('.max-display'),

  // Win Modal
  winModal: document.getElementById('winModal'),
  winnerName: document.getElementById('winnerName'),
  winnerPhoto: document.getElementById('winnerPhoto'),
  winnerFallback: document.getElementById('winnerFallback'),
  winnerFinalScore: document.getElementById('winnerFinalScore'),
  winnerTotalRolls: document.getElementById('winnerTotalRolls'),
  winnerMargin: document.getElementById('winnerMargin'),
  btnRematch: document.getElementById('btnRematch'),
  btnCloseWinModal: document.getElementById('btnCloseWinModal'),

  // Settings Modal
  settingsModal: document.getElementById('settingsModal'),
  btnCloseSettings: document.getElementById('btnCloseSettings'),
  btnSaveSettings: document.getElementById('btnSaveSettings'),
  cfgTargetScore: document.getElementById('cfgTargetScore'),
  cfgChannelName: document.getElementById('cfgChannelName'),
  cfgGameTitle: document.getElementById('cfgGameTitle'),
  cfgNameX: document.getElementById('cfgNameX'),
  cfgNameY: document.getElementById('cfgNameY'),
  themeChips: document.querySelectorAll('.theme-chip'),

  // Presets Modal
  presetsModal: document.getElementById('presetsModal'),
  btnClosePresets: document.getElementById('btnClosePresets'),
  presetGrid: document.getElementById('presetGrid'),

  // Particle Canvas
  particleCanvas: document.getElementById('particleCanvas'),

  // YouTube Engagement & Animatic Banter
  voteNameX: document.getElementById('voteNameX'),
  voteNameY: document.getElementById('voteNameY'),
  bubbleX: document.getElementById('bubbleX'),
  bubbleEmojiX: document.getElementById('bubbleEmojiX'),
  bubbleTextX: document.getElementById('bubbleTextX'),
  bubbleY: document.getElementById('bubbleY'),
  bubbleEmojiY: document.getElementById('bubbleEmojiY'),
  bubbleTextY: document.getElementById('bubbleTextY'),
  commentaryText: document.getElementById('commentaryText'),
  commentaryBar: document.getElementById('commentaryBar'),
  reactionsContainer: document.getElementById('reactionsContainer'),
  btnCheer: document.getElementById('btnCheer'),

  // Energy Beam Clash & Battle FX
  beamClashContainer: document.getElementById('beamClashContainer'),
  beamFillX: document.getElementById('beamFillX'),
  beamFillY: document.getElementById('beamFillY'),
  beamSparkClash: document.getElementById('beamSparkClash'),
  beamLabelX: document.getElementById('beamLabelX'),
  beamLabelY: document.getElementById('beamLabelY'),
  battleEventAlert: document.getElementById('battleEventAlert'),
  eventIcon: document.getElementById('eventIcon'),
  eventText: document.getElementById('eventText'),
  attackLaser: document.getElementById('attackLaser'),
  hitPopupX: document.getElementById('hitPopupX'),
  hitPopupY: document.getElementById('hitPopupY'),
  comboBadgeX: document.getElementById('comboBadgeX'),
  comboBadgeY: document.getElementById('comboBadgeY'),
  rageAuraX: document.getElementById('rageAuraX'),
  rageAuraY: document.getElementById('rageAuraY'),
};

// ==========================================================================
// 3D DICE ROTATION MATRIX
// Maps standard dice faces 1-6 to CSS 3D transform rotations
// ==========================================================================
const DICE_ROTATIONS = {
  1: { x: 0, y: 0 },
  2: { x: 0, y: -90 },
  3: { x: -90, y: 0 },
  4: { x: 90, y: 0 },
  5: { x: 0, y: 90 },
  6: { x: 0, y: 180 }
};

let currentDiceRotation = { x: -24, y: 32 };

// ==========================================================================
// PRESETS LIST (Fun YouTube Content Pairs)
// ==========================================================================
const PRESET_PAIRS = [
  {
    title: 'ASMR Food Battle',
    nameX: '🍕 CRISPY PIZZA',
    nameY: '🍔 JUICY BURGER',
    emojiX: '🍕',
    emojiY: '🍔',
    theme: 'gold'
  },
  {
    title: 'Super Hero Showdown',
    nameX: '🦇 BATMAN',
    nameY: '🕷️ SPIDER-MAN',
    emojiX: '🦇',
    emojiY: '🕷️',
    theme: 'midnight'
  },
  {
    title: 'Elemental Clash',
    nameX: '🔥 FIRE DRAGON',
    nameY: '❄️ ICE PHOENIX',
    emojiX: '🔥',
    emojiY: '❄️',
    theme: 'neon'
  },
  {
    title: 'Pets Royale',
    nameX: '🐱 CUTE CAT',
    nameY: '🐶 LOYAL DOG',
    emojiX: '🐱',
    emojiY: '🐶',
    theme: 'cotton'
  },
  {
    title: 'Tech Giants',
    nameX: '🍎 APPLE IPHONE',
    nameY: '🤖 ANDROID GALAXY',
    emojiX: '🍎',
    emojiY: '🤖',
    theme: 'neon'
  },
  {
    title: 'Speed Racers',
    nameX: '⚡ THE FLASH',
    nameY: '🦔 SONIC THE HEDGEHOG',
    emojiX: '⚡',
    emojiY: '🦔',
    theme: 'gold'
  }
];

// ==========================================================================
// INITIALIZATION
// ==========================================================================
function initApp() {
  if (window.innerWidth <= 768) {
    DOM.wrapper.classList.add('shorts-mode');
  }
  const isShorts = DOM.wrapper.classList.contains('shorts-mode');
  const textSpan = DOM.btnLayoutToggle ? DOM.btnLayoutToggle.querySelector('.btn-text') : null;
  if (textSpan) {
    textSpan.textContent = isShorts ? '16:9 Mode' : 'Shorts Mode';
  }

  loadSavedData();
  setupEventListeners();
  setupParticleSystem();
  renderPresets();
  updateUI();
  updateTurnDisplay();
}

function loadSavedData() {
  const saved = localStorage.getItem('tara_asmr_game_data');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.targetScore) gameState.targetScore = data.targetScore;
      if (data.playerX) gameState.playerX = data.playerX;
      if (data.playerY) gameState.playerY = data.playerY;
      if (data.theme) gameState.theme = data.theme;
      if (data.gameTitle) DOM.gameTitle.textContent = data.gameTitle;
      
      document.body.dataset.theme = gameState.theme;
      DOM.cfgTargetScore.value = gameState.targetScore;
      DOM.targetDisplay.textContent = gameState.targetScore;
      DOM.maxDisplays.forEach(el => el.textContent = gameState.targetScore);
    } catch (e) {
      console.warn('Could not parse saved storage:', e);
    }
  }

  // Apply names
  if (gameState.playerX.name) DOM.nameX.textContent = gameState.playerX.name;
  if (gameState.playerY.name) DOM.nameY.textContent = gameState.playerY.name;

  // Apply photos
  applyPlayerPhoto('X', gameState.playerX.photo);
  applyPlayerPhoto('Y', gameState.playerY.photo);
}

function saveData() {
  const data = {
    targetScore: gameState.targetScore,
    playerX: gameState.playerX,
    playerY: gameState.playerY,
    theme: gameState.theme,
    gameTitle: DOM.gameTitle.textContent.trim()
  };
  localStorage.setItem('tara_asmr_game_data', JSON.stringify(data));
}

// ==========================================================================
// PLAYER PHOTO HANDLERS
// ==========================================================================
function handlePhotoUpload(player, file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    if (player === 'X') {
      gameState.playerX.photo = dataUrl;
      applyPlayerPhoto('X', dataUrl);
    } else {
      gameState.playerY.photo = dataUrl;
      applyPlayerPhoto('Y', dataUrl);
    }
    saveData();
  };
  reader.readAsDataURL(file);
}

function applyPlayerPhoto(player, dataUrl) {
  const photoEl = player === 'X' ? DOM.photoX : DOM.photoY;
  const fallbackEl = player === 'X' ? DOM.fallbackX : DOM.fallbackY;

  if (dataUrl) {
    photoEl.src = dataUrl;
    photoEl.style.display = 'block';
    fallbackEl.style.display = 'none';
  } else {
    photoEl.style.display = 'none';
    fallbackEl.style.display = 'flex';
  }
}


// ==========================================================================
// FUNNY & ANIMATIC BANTER DATASETS (Tailored for YouTube ASMR)
// ==========================================================================
const COMEDY_BANTER = {
  rollOne: {
    active: [
      { text: "BRUH... 💀", emoji: "💀" },
      { text: "Is this rigged?! 😭", emoji: "😭" },
      { text: "Emotional damage! 📉", emoji: "📉" },
      { text: "Why does the dice hate me?! 🤡", emoji: "🤡" },
      { text: "Pain... just pure pain 😩", emoji: "😩" }
    ],
    opponent: [
      { text: "Hahaha unlucky! 😂", emoji: "😂" },
      { text: "I'll take the free lead! 🍿", emoji: "🍿" },
      { text: "Thank you dice gods! 🙏", emoji: "🙏" },
      { text: "Skill issue bro! 😎", emoji: "😎" }
    ],
    commentary: [
      "💀 OOF! {name} rolled a 1! The dice showed ZERO mercy!",
      "😭 Emotional damage! A tragic 1 for {name}!",
      "🤡 Dice gods just humbled {name} with a cold 1!",
      "📉 Disastrous roll! {name} is questioning their life choices!"
    ],
    reactions: ['💀', '😭', '🤡', '📉', '🤣']
  },
  rollSix: {
    active: [
      { text: "JACKPOT!! 🚀", emoji: "🚀" },
      { text: "MAX ROLL 6! 🔥", emoji: "🔥" },
      { text: "BOOM! UNSTOPPABLE! 👑", emoji: "👑" },
      { text: "EZ GAME! 😎", emoji: "😎" },
      { text: "SHEESH! THAT'S HUGE! 💥", emoji: "💥" }
    ],
    opponent: [
      { text: "NO WAY! 😱", emoji: "😱" },
      { text: "Stop him! He's hacking! 🤖", emoji: "🤖" },
      { text: "I am officially cooked... 🍳", emoji: "🍳" },
      { text: "How is he so lucky?! 🛑", emoji: "🛑" }
    ],
    commentary: [
      "🔥 BOOM! {name} hits a MAXIMUM 6! Absolute monster roll!",
      "🚀 JACKPOT! {name} is on fire and blazing towards 1000 points!",
      "⚡ Critical hit! 6 huge points scored by {name}!",
      "👑 UNSTOPPABLE! {name} just shook the entire arena with a 6!"
    ],
    reactions: ['🔥', '🚀', '👑', '💥', '🎉', '⚡']
  },
  rollMid: {
    active: [
      { text: "Slow and steady! 🐢", emoji: "⚡" },
      { text: "Solid points! 👍", emoji: "📈" },
      { text: "Getting closer to 1000! 🎯", emoji: "🎯" },
      { text: "Every point counts! 💰", emoji: "💰" }
    ],
    opponent: [
      { text: "My turn to roll bigger! 🎲", emoji: "👀" },
      { text: "Watch me beat that! 🚀", emoji: "🔥" },
      { text: "The battle is super tight! ⚔️", emoji: "⚔️" }
    ],
    commentary: [
      "🎲 {name} rolls a {points} and marches onward!",
      "📈 Clean roll! {name} moves closer to the 1000 trophy!",
      "⚔️ The pressure builds! {name} claims another {points} points!"
    ],
    reactions: ['👍', '✨', '🎲', '🍿']
  }
};

// ==========================================================================
// 3D DICE ROLLING LOGIC WITH ANIMATICS
// ==========================================================================
function rollDice(callback) {
  if (gameState.isRolling) return;
  gameState.isRolling = true;

  soundEngine.playDiceRoll();

  // Strictly authentic 1 to 6
  const face = Math.floor(Math.random() * 6) + 1;
  const targetFace = DICE_ROTATIONS[face];

  // Random multi-spins for realistic 3D tumble physics
  const spinsX = (Math.floor(Math.random() * 3) + 2) * 360;
  const spinsY = (Math.floor(Math.random() * 3) + 2) * 360;

  const newRotX = spinsX + targetFace.x;
  const newRotY = spinsY + targetFace.y;

  currentDiceRotation = { x: newRotX, y: newRotY };

  DOM.diceCube.classList.remove('rolling');
  void DOM.diceCube.offsetWidth;
  DOM.diceCube.classList.add('rolling');
  DOM.diceCube.style.transform = `rotateX(${newRotX}deg) rotateY(${newRotY}deg)`;

  const rollDuration = Math.min(650, gameState.speed * 0.75);

  setTimeout(() => {
    DOM.diceCube.classList.remove('rolling');
    gameState.isRolling = false;

    // Output is strictly 1 to 6 points
    const finalPoints = face;
    DOM.badgeNum.textContent = `+${face}`;
    DOM.rollResultBadge.classList.add('show');

    // Comedic & Dramatic Audio / Screen FX
    if (face === 1) {
      soundEngine.playCartoonFail();
    } else if (face === 6) {
      soundEngine.playJackpotBoom();
      triggerScreenShake();
    } else {
      soundEngine.playScoreTick(480 + face * 60);
    }

    setTimeout(() => {
      DOM.rollResultBadge.classList.remove('show');
    }, Math.max(700, gameState.speed * 0.8));

    if (callback) callback(face, finalPoints);
  }, rollDuration);
}

// ==========================================================================
// ANIMATIC REACTION TRIGGERS (SPEECH BUBBLES & COMMENTARY)
// ==========================================================================
function triggerAnimaticReaction(activePlayer, face) {
  const otherPlayer = activePlayer === 'X' ? 'Y' : 'X';
  const activeName = (activePlayer === 'X' ? gameState.playerX.name : gameState.playerY.name) || `PLAYER ${activePlayer}`;
  const otherName = (otherPlayer === 'X' ? gameState.playerX.name : gameState.playerY.name) || `PLAYER ${otherPlayer}`;

  let category = 'rollMid';
  if (face === 1) category = 'rollOne';
  else if (face === 6) category = 'rollSix';

  const data = COMEDY_BANTER[category];

  // Pick random speech for active and opponent
  const activeMsg = data.active[Math.floor(Math.random() * data.active.length)];
  const opponentMsg = data.opponent[Math.floor(Math.random() * data.opponent.length)];

  // Set active player bubble
  const activeBubbleText = activePlayer === 'X' ? DOM.bubbleTextX : DOM.bubbleTextY;
  const activeBubbleEmoji = activePlayer === 'X' ? DOM.bubbleEmojiX : DOM.bubbleEmojiY;
  const activeBubbleEl = activePlayer === 'X' ? DOM.bubbleX : DOM.bubbleY;
  const activeCard = activePlayer === 'X' ? DOM.cardX : DOM.cardY;

  activeBubbleText.textContent = activeMsg.text;
  activeBubbleEmoji.textContent = activeMsg.emoji;
  activeBubbleEl.classList.remove('pop-anim');
  void activeBubbleEl.offsetWidth;
  activeBubbleEl.classList.add('pop-anim');

  // Set opponent bubble
  const otherBubbleText = otherPlayer === 'X' ? DOM.bubbleTextX : DOM.bubbleTextY;
  const otherBubbleEmoji = otherPlayer === 'X' ? DOM.bubbleEmojiX : DOM.bubbleEmojiY;
  const otherBubbleEl = otherPlayer === 'X' ? DOM.bubbleX : DOM.bubbleY;

  otherBubbleText.textContent = opponentMsg.text;
  otherBubbleEmoji.textContent = opponentMsg.emoji;
  otherBubbleEl.classList.remove('pop-anim');
  void otherBubbleEl.offsetWidth;
  otherBubbleEl.classList.add('pop-anim');

  // Comedic Wobble Card on 1
  if (face === 1) {
    activeCard.classList.remove('wobble-fail');
    void activeCard.offsetWidth;
    activeCard.classList.add('wobble-fail');
    setTimeout(() => activeCard.classList.remove('wobble-fail'), 700);
  }

  // Update commentary marquee
  const rawComm = data.commentary[Math.floor(Math.random() * data.commentary.length)];
  const commText = rawComm.replace('{name}', activeName).replace('{points}', face);
  updateCommentary(commText);

  // Spawn floating reactions
  const reactEmoji = data.reactions[Math.floor(Math.random() * data.reactions.length)];
  spawnStreamReaction(reactEmoji);
  if (face === 6 || face === 1) {
    setTimeout(() => spawnStreamReaction(reactEmoji), 160);
    setTimeout(() => spawnStreamReaction(reactEmoji), 320);
  }
}

function updateCommentary(text) {
  if (!DOM.commentaryText) return;
  DOM.commentaryText.style.opacity = '0';
  setTimeout(() => {
    DOM.commentaryText.textContent = text;
    DOM.commentaryText.style.opacity = '1';
  }, 180);
}

function triggerScreenShake() {
  if (!DOM.wrapper) return;
  DOM.wrapper.classList.remove('shake-arena');
  void DOM.wrapper.offsetWidth;
  DOM.wrapper.classList.add('shake-arena');
  setTimeout(() => DOM.wrapper.classList.remove('shake-arena'), 450);
}

function spawnStreamReaction(emoji = '🔥') {
  if (!DOM.reactionsContainer) return;
  const item = document.createElement('div');
  item.className = 'stream-reaction-item';
  item.textContent = emoji;

  // Random horizontal position across arena
  const leftPercent = 15 + Math.random() * 70;
  item.style.left = `${leftPercent}%`;
  item.style.bottom = `${20 + Math.random() * 40}px`;

  DOM.reactionsContainer.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 2200);
}

// ==========================================================================
// REAL BATTLE COMBAT & ATTACK ENGINE
// ==========================================================================
function triggerCombatAttack(activePlayer, face, points) {
  const targetPlayer = activePlayer === 'X' ? 'Y' : 'X';
  const targetCard = targetPlayer === 'X' ? DOM.cardX : DOM.cardY;
  const targetPopup = targetPlayer === 'X' ? DOM.hitPopupX : DOM.hitPopupY;

  // 1. Fire Laser Projectile
  if (DOM.attackLaser) {
    DOM.attackLaser.className = 'attack-laser-projectile';
    void DOM.attackLaser.offsetWidth;
    DOM.attackLaser.classList.add(activePlayer === 'X' ? 'laser-x-to-y' : 'laser-y-to-x');
  }

  // 2. Play attack audio
  if (face === 6) {
    soundEngine.playThunderStrike();
  } else if (face >= 2) {
    soundEngine.playLaserShot();
  }

  // 3. Impact Flash & Damage Popup on Target Card
  setTimeout(() => {
    if (face === 1) {
      if (targetPopup) {
        targetPopup.textContent = '🛡️ BLOCKED!';
        targetPopup.style.color = '#38ef7d';
        targetPopup.style.borderColor = '#38ef7d';
        targetPopup.classList.add('show');
        setTimeout(() => targetPopup.classList.remove('show'), 650);
      }
    } else {
      targetCard.classList.remove('damage-flash');
      void targetCard.offsetWidth;
      targetCard.classList.add('damage-flash');
      setTimeout(() => targetCard.classList.remove('damage-flash'), 450);

      if (targetPopup) {
        targetPopup.textContent = face === 6 ? `💥 CRITICAL -6 HP!` : `⚡ -${points} HP`;
        targetPopup.style.color = face === 6 ? '#ff0055' : '#ffd700';
        targetPopup.style.borderColor = face === 6 ? '#ff0055' : '#ffd700';
        targetPopup.classList.add('show');
        setTimeout(() => targetPopup.classList.remove('show'), 700);
      }
    }
  }, 220);
}

function updateBeamClash() {
  if (!DOM.beamFillX || !DOM.beamFillY || !DOM.beamSparkClash) return;

  const total = gameState.scoreX + gameState.scoreY;
  let ratioX = 50;

  if (total > 0) {
    ratioX = (gameState.scoreX / total) * 100;
    ratioX = Math.min(88, Math.max(12, ratioX));
  }

  DOM.beamFillX.style.width = `${ratioX}%`;
  DOM.beamFillY.style.width = `${100 - ratioX}%`;
  DOM.beamSparkClash.style.left = `${ratioX}%`;

  if (DOM.beamLabelX) DOM.beamLabelX.textContent = `⚡ ${Math.round(ratioX)}%`;
  if (DOM.beamLabelY) DOM.beamLabelY.textContent = `${100 - Math.round(ratioX)}% ⚡`;
}

function updateCombosAndRage(activePlayer, face) {
  // Streak counter for high rolls (5 or 6)
  if (face >= 5) {
    gameState.streaks[activePlayer]++;
  } else {
    gameState.streaks[activePlayer] = 0;
  }

  if (DOM.comboBadgeX) {
    if (gameState.streaks.X >= 2) {
      DOM.comboBadgeX.textContent = `COMBO x${gameState.streaks.X} 🔥`;
      DOM.comboBadgeX.classList.add('show');
    } else {
      DOM.comboBadgeX.classList.remove('show');
    }
  }

  if (DOM.comboBadgeY) {
    if (gameState.streaks.Y >= 2) {
      DOM.comboBadgeY.textContent = `COMBO x${gameState.streaks.Y} ⚡`;
      DOM.comboBadgeY.classList.add('show');
    } else {
      DOM.comboBadgeY.classList.remove('show');
    }
  }

  // Comeback Rage Mode (Trailing by 25+ points)
  const diffX = gameState.scoreY - gameState.scoreX;
  const diffY = gameState.scoreX - gameState.scoreY;

  if (DOM.rageAuraX) {
    if (diffX >= 25) DOM.rageAuraX.classList.add('active');
    else DOM.rageAuraX.classList.remove('active');
  }

  if (DOM.rageAuraY) {
    if (diffY >= 25) DOM.rageAuraY.classList.add('active');
    else DOM.rageAuraY.classList.remove('active');
  }
}

const MYSTERY_EVENTS = [
  {
    type: 'BERSERK',
    icon: '🔥',
    title: 'BERSERK STRIKE: Next roll deals 2X Critical Points!',
    action: (player) => {
      gameState.activeEvent = { type: 'BERSERK', player };
    }
  },
  {
    type: 'SHIELD',
    icon: '🛡️',
    title: 'TITAN SHIELD: Absorbs opponent attack next turn!',
    action: (player) => {
      gameState.activeEvent = { type: 'SHIELD', player };
    }
  },
  {
    type: 'STEAL',
    icon: '🥷',
    title: 'SHADOW STEAL: Snatched 3 points from opponent!',
    action: (player) => {
      const opp = player === 'X' ? 'Y' : 'X';
      const stolen = Math.min(3, opp === 'X' ? gameState.scoreX : gameState.scoreY);
      if (opp === 'X') gameState.scoreX -= stolen;
      else gameState.scoreY -= stolen;

      if (player === 'X') gameState.scoreX += stolen;
      else gameState.scoreY += stolen;
    }
  }
];

function checkMysteryBattleEvent(activePlayer) {
  gameState.eventCooldown--;
  if (gameState.eventCooldown <= 0) {
    gameState.eventCooldown = 7 + Math.floor(Math.random() * 5); // 7-11 turns cooldown

    const ev = MYSTERY_EVENTS[Math.floor(Math.random() * MYSTERY_EVENTS.length)];
    ev.action(activePlayer);

    soundEngine.playEventSound();
    if (DOM.eventIcon) DOM.eventIcon.textContent = ev.icon;
    if (DOM.eventText) DOM.eventText.textContent = ev.title;
    if (DOM.battleEventAlert) {
      DOM.battleEventAlert.classList.add('show');
      setTimeout(() => DOM.battleEventAlert.classList.remove('show'), 2600);
    }
    updateCommentary(`⚡ BATTLE EVENT: ${ev.title}`);
    spawnStreamReaction('⚡');
    spawnStreamReaction('💥');
  }
}

// ==========================================================================
// TURN & SCORE MANAGEMENT
// ==========================================================================
let previousLeader = 'TIED';

function playNextTurn() {
  if (isGameOver()) return;

  const activePlayer = gameState.currentTurn;
  const otherPlayer = activePlayer === 'X' ? 'Y' : 'X';

  rollDice((face, points) => {
    let effectivePoints = points;

    // Check Active Modifiers (Berserk / Shield)
    if (gameState.activeEvent) {
      if (gameState.activeEvent.type === 'BERSERK' && gameState.activeEvent.player === activePlayer) {
        effectivePoints = points * 2;
        updateCommentary("🔥 BERSERK EXPLOSION! 2X Points inflicted!");
        gameState.activeEvent = null;
      } else if (gameState.activeEvent.type === 'SHIELD' && gameState.activeEvent.player === otherPlayer) {
        effectivePoints = 0;
        updateCommentary("🛡️ TITAN SHIELD BLOCKED THE ATTACK! 0 points scored!");
        gameState.activeEvent = null;
      }
    }

    // Add points to active player
    if (activePlayer === 'X') {
      gameState.scoreX += effectivePoints;
      gameState.totalRolls.X++;
      showRecentGain('X', effectivePoints);
    } else {
      gameState.scoreY += effectivePoints;
      gameState.totalRolls.Y++;
      showRecentGain('Y', effectivePoints);
      gameState.round++;
    }

    // Trigger Combat Attack & Animations
    triggerCombatAttack(activePlayer, face, effectivePoints);
    updateCombosAndRage(activePlayer, face);
    checkMysteryBattleEvent(activePlayer);

    // Trigger Animatic Banter & Comedy Reactions
    triggerAnimaticReaction(activePlayer, face);

    // Detect Dramatic Lead Changes
    const currentLeader = gameState.scoreX > gameState.scoreY ? 'X' : (gameState.scoreY > gameState.scoreX ? 'Y' : 'TIED');
    if (currentLeader !== 'TIED' && currentLeader !== previousLeader && previousLeader !== 'TIED') {
      const leaderName = currentLeader === 'X' ? gameState.playerX.name : gameState.playerY.name;
      soundEngine.playCheerSound();
      updateCommentary(`🚨 OVERTAKE! ${leaderName} just snatched the LEAD! The race is heating up! 🔥`);
      spawnStreamReaction('👑');
      spawnStreamReaction('🔥');
    }
    previousLeader = currentLeader;

    updateUI();

    // Check Win Condition
    if (isGameOver()) {
      handleVictory();
      return;
    }

    // Switch Turn with sound
    gameState.currentTurn = otherPlayer;
    soundEngine.playSwordClash();
    updateTurnDisplay();

    // If Auto-Play is active, schedule next roll
    if (gameState.isAutoPlaying) {
      gameState.autoTimer = setTimeout(() => {
        playNextTurn();
      }, gameState.speed);
    }
  });
}

function showRecentGain(player, points) {
  const gainEl = player === 'X' ? DOM.gainX : DOM.gainY;
  const scoreValEl = player === 'X' ? DOM.scoreX : DOM.scoreY;

  gainEl.textContent = `+${points}`;
  gainEl.classList.add('show');
  scoreValEl.classList.add('bump');

  setTimeout(() => {
    gainEl.classList.remove('show');
    scoreValEl.classList.remove('bump');
  }, 700);
}

function updateTurnDisplay() {
  const isX = gameState.currentTurn === 'X';
  const nameX = gameState.playerX.name || 'PLAYER X';
  const nameY = gameState.playerY.name || 'PLAYER Y';

  if (isX) {
    DOM.cardX.classList.add('active-turn');
    DOM.cardY.classList.remove('active-turn');
    DOM.tagX.textContent = 'CURRENT TURN ⚡';
    DOM.tagY.textContent = 'WAITING...';
    DOM.statusBadgeX.textContent = 'Rolling Next...';
    DOM.statusBadgeY.textContent = 'Waiting Turn';
    DOM.turnText.textContent = `${nameX}'S TURN`;
    DOM.diceGlow.className = 'dice-glow glow-turn-x';
  } else {
    DOM.cardY.classList.add('active-turn');
    DOM.cardX.classList.remove('active-turn');
    DOM.tagY.textContent = 'CURRENT TURN ⚡';
    DOM.tagX.textContent = 'WAITING...';
    DOM.statusBadgeY.textContent = 'Rolling Next...';
    DOM.statusBadgeX.textContent = 'Waiting Turn';
    DOM.turnText.textContent = `${nameY}'S TURN`;
    DOM.diceGlow.className = 'dice-glow glow-turn-y';
  }
}

function updateUI() {
  const max = gameState.targetScore;

  // Player X Score & Progress
  DOM.scoreX.textContent = gameState.scoreX;
  const pctX = Math.min(100, (gameState.scoreX / max) * 100);
  DOM.progressFillX.style.width = `${pctX}%`;
  DOM.percentX.textContent = `${pctX.toFixed(1)}%`;
  const remainX = Math.max(0, max - gameState.scoreX);
  DOM.remainX.textContent = remainX === 0 ? 'WINNER!' : `${remainX} to win`;

  // Player Y Score & Progress
  DOM.scoreY.textContent = gameState.scoreY;
  const pctY = Math.min(100, (gameState.scoreY / max) * 100);
  DOM.progressFillY.style.width = `${pctY}%`;
  DOM.percentY.textContent = `${pctY.toFixed(1)}%`;
  const remainY = Math.max(0, max - gameState.scoreY);
  DOM.remainY.textContent = remainY === 0 ? 'WINNER!' : `${remainY} to win`;

  // Update YouTube vote banner names
  if (DOM.voteNameX) DOM.voteNameX.textContent = gameState.playerX.name;
  if (DOM.voteNameY) DOM.voteNameY.textContent = gameState.playerY.name;

  // Round & Leaderboard
  DOM.roundCounter.textContent = gameState.round;
  const diff = Math.abs(gameState.scoreX - gameState.scoreY);
  
  if (gameState.scoreX > gameState.scoreY) {
    DOM.leaderDisplay.textContent = gameState.playerX.name;
    DOM.leadGapDisplay.textContent = `+${diff} pts`;
  } else if (gameState.scoreY > gameState.scoreX) {
    DOM.leaderDisplay.textContent = gameState.playerY.name;
    DOM.leadGapDisplay.textContent = `+${diff} pts`;
  } else {
    DOM.leaderDisplay.textContent = 'TIED';
    DOM.leadGapDisplay.textContent = '0 pts';
  }

  // Update Real-Time Energy Beam Clash
  updateBeamClash();
}

function isGameOver() {
  return gameState.scoreX >= gameState.targetScore || gameState.scoreY >= gameState.targetScore;
}

// ==========================================================================
// VICTORY HANDLING & CELEBRATION
// ==========================================================================
function handleVictory() {
  stopAutoPlay();
  soundEngine.playFanfare();

  const winner = gameState.scoreX >= gameState.targetScore ? 'X' : 'Y';
  const winnerObj = winner === 'X' ? gameState.playerX : gameState.playerY;
  const winnerScore = winner === 'X' ? gameState.scoreX : gameState.scoreY;
  const loserScore = winner === 'X' ? gameState.scoreY : gameState.scoreX;
  const totalRolls = winner === 'X' ? gameState.totalRolls.X : gameState.totalRolls.Y;

  // Set modal details
  DOM.winnerName.textContent = winnerObj.name || (winner === 'X' ? 'PLAYER X' : 'PLAYER Y');
  DOM.winnerFinalScore.textContent = winnerScore;
  DOM.winnerTotalRolls.textContent = totalRolls;
  DOM.winnerMargin.textContent = `+${winnerScore - loserScore}`;

  if (winnerObj.photo) {
    DOM.winnerPhoto.src = winnerObj.photo;
    DOM.winnerPhoto.style.display = 'block';
    DOM.winnerFallback.style.display = 'none';
  } else {
    DOM.winnerFallback.textContent = winner;
    DOM.winnerFallback.style.display = 'flex';
    DOM.winnerPhoto.style.display = 'none';
  }

  // Trigger high-intensity confetti explosion
  launchVictoryConfetti();

  setTimeout(() => {
    DOM.winModal.classList.add('show');
  }, 400);
}

// ==========================================================================
// AUTO PLAY CONTROLS
// ==========================================================================
function toggleAutoPlay() {
  if (gameState.isAutoPlaying) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
}

function startAutoPlay() {
  if (isGameOver()) resetMatch();
  gameState.isAutoPlaying = true;
  DOM.btnAutoPlay.classList.add('active');
  DOM.playIcon.textContent = '⏸';
  DOM.playLabel.textContent = 'PAUSE BATTLE';
  playNextTurn();
}

function stopAutoPlay() {
  gameState.isAutoPlaying = false;
  clearTimeout(gameState.autoTimer);
  DOM.btnAutoPlay.classList.remove('active');
  DOM.playIcon.textContent = '▶';
  DOM.playLabel.textContent = 'START AUTO BATTLE';
}

function resetMatch() {
  stopAutoPlay();
  gameState.scoreX = 0;
  gameState.scoreY = 0;
  gameState.round = 1;
  gameState.totalRolls = { X: 0, Y: 0 };
  gameState.streaks = { X: 0, Y: 0 };
  gameState.activeEvent = null;
  gameState.eventCooldown = 6;
  gameState.currentTurn = 'X';

  if (DOM.comboBadgeX) DOM.comboBadgeX.classList.remove('show');
  if (DOM.comboBadgeY) DOM.comboBadgeY.classList.remove('show');
  if (DOM.rageAuraX) DOM.rageAuraX.classList.remove('active');
  if (DOM.rageAuraY) DOM.rageAuraY.classList.remove('active');

  updateUI();
  updateTurnDisplay();
  DOM.winModal.classList.remove('show');
}

// ==========================================================================
// EVENT LISTENERS SETUP
// ==========================================================================
function setupEventListeners() {
  // Auto Battle
  DOM.btnAutoPlay.addEventListener('click', toggleAutoPlay);

  // Roll Once
  DOM.btnRollOnce.addEventListener('click', () => {
    if (gameState.isAutoPlaying) stopAutoPlay();
    playNextTurn();
  });

  // Speed & Multiplier
  DOM.speedSelect.addEventListener('change', (e) => {
    gameState.speed = parseInt(e.target.value, 10);
  });

  if (DOM.diceMultiplier) {
    DOM.diceMultiplier.addEventListener('change', (e) => {
      gameState.diceMultiplier = parseInt(e.target.value, 10);
    });
  }

  // Reset
  DOM.btnResetGame.addEventListener('click', resetMatch);
  DOM.btnRematch.addEventListener('click', resetMatch);
  DOM.btnCloseWinModal.addEventListener('click', () => {
    DOM.winModal.classList.remove('show');
  });

  // Photo Uploads
  DOM.uploadInputX.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handlePhotoUpload('X', e.target.files[0]);
    }
  });

  DOM.uploadInputY.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handlePhotoUpload('Y', e.target.files[0]);
    }
  });

  // ContentEditable Inline Edits
  DOM.nameX.addEventListener('blur', () => {
    gameState.playerX.name = DOM.nameX.textContent.trim() || 'PLAYER X';
    updateTurnDisplay();
    saveData();
  });

  DOM.nameY.addEventListener('blur', () => {
    gameState.playerY.name = DOM.nameY.textContent.trim() || 'PLAYER Y';
    updateTurnDisplay();
    saveData();
  });

  DOM.gameTitle.addEventListener('blur', () => {
    saveData();
  });

  // Sound Toggle
  DOM.btnSoundToggle.addEventListener('click', () => {
    gameState.soundEnabled = !gameState.soundEnabled;
    DOM.btnSoundToggle.style.opacity = gameState.soundEnabled ? '1' : '0.4';
    if (gameState.soundEnabled) {
      soundEngine.playScoreTick(600);
    }
  });

  // ASMR Ambience Toggle
  DOM.btnAsmrAudio.addEventListener('click', () => {
    const active = soundEngine.toggleAsmrAmbience();
    if (active) {
      DOM.asmrStateDot.classList.add('active');
    } else {
      DOM.asmrStateDot.classList.remove('active');
    }
  });

  // Crowd Cheer Button
  if (DOM.btnCheer) {
    DOM.btnCheer.addEventListener('click', () => {
      soundEngine.playCheerSound();
      spawnStreamReaction('🎉');
      spawnStreamReaction('🔥');
      spawnStreamReaction('❤️');
      spawnStreamReaction('🍿');
      updateCommentary("🎉 The audience is going wild! Keep cheerin' for your champion!");
    });
  }

  // YouTube Team Votes
  const voteX = document.querySelector('.team-x-vote');
  if (voteX) {
    voteX.addEventListener('click', () => {
      soundEngine.playScoreTick(720);
      spawnStreamReaction('👍');
      spawnStreamReaction('🔥');
      updateCommentary(`👍 Huge love for ${gameState.playerX.name}! Smash that LIKE button!`);
    });
  }

  const voteY = document.querySelector('.team-y-vote');
  if (voteY) {
    voteY.addEventListener('click', () => {
      soundEngine.playScoreTick(840);
      spawnStreamReaction('🔔');
      spawnStreamReaction('⚡');
      updateCommentary(`🔔 Team ${gameState.playerY.name} coming through! Don't forget to SUBSCRIBE!`);
    });
  }

  // Layout Toggle: Standard 16:9 vs YouTube Shorts 9:16
  DOM.btnLayoutToggle.addEventListener('click', () => {
    const isShorts = DOM.wrapper.classList.toggle('shorts-mode');
    const textSpan = DOM.btnLayoutToggle.querySelector('.btn-text');
    if (textSpan) {
      textSpan.textContent = isShorts ? '16:9 Mode' : 'Shorts Mode';
    }
  });

  // Fullscreen Toggle
  DOM.btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // Settings Modal
  DOM.btnSettings.addEventListener('click', () => {
    DOM.cfgTargetScore.value = gameState.targetScore;
    DOM.cfgNameX.value = gameState.playerX.name;
    DOM.cfgNameY.value = gameState.playerY.name;
    DOM.cfgGameTitle.value = DOM.gameTitle.textContent.trim();
    DOM.settingsModal.classList.add('show');
  });

  DOM.btnCloseSettings.addEventListener('click', () => {
    DOM.settingsModal.classList.remove('show');
  });

  DOM.btnSaveSettings.addEventListener('click', () => {
    const newTarget = parseInt(DOM.cfgTargetScore.value, 10);
    if (!isNaN(newTarget) && newTarget >= 50) {
      gameState.targetScore = newTarget;
      DOM.targetDisplay.textContent = newTarget;
      DOM.maxDisplays.forEach(el => el.textContent = newTarget);
    }

    const newNameX = DOM.cfgNameX.value.trim();
    if (newNameX) {
      gameState.playerX.name = newNameX;
      DOM.nameX.textContent = newNameX;
    }

    const newNameY = DOM.cfgNameY.value.trim();
    if (newNameY) {
      gameState.playerY.name = newNameY;
      DOM.nameY.textContent = newNameY;
    }

    const newTitle = DOM.cfgGameTitle.value.trim();
    if (newTitle) {
      DOM.gameTitle.textContent = newTitle;
    }

    saveData();
    updateUI();
    updateTurnDisplay();
    DOM.settingsModal.classList.remove('show');
  });

  // Theme Chips
  DOM.themeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      DOM.themeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const theme = chip.dataset.theme;
      gameState.theme = theme;
      document.body.dataset.theme = theme;
      saveData();
    });
  });

  // Presets Modal
  DOM.btnPresetAvatars.addEventListener('click', () => {
    DOM.presetsModal.classList.add('show');
  });

  DOM.btnClosePresets.addEventListener('click', () => {
    DOM.presetsModal.classList.remove('show');
  });
}

// ==========================================================================
// PRESETS RENDERING & APPLICATION
// ==========================================================================
function renderPresets() {
  DOM.presetGrid.innerHTML = '';
  PRESET_PAIRS.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'preset-item';
    card.innerHTML = `
      <div class="preset-emojis">${item.emojiX} vs ${item.emojiY}</div>
      <div class="preset-details">
        <span class="preset-title">${item.title}</span>
        <span class="preset-pair">${item.nameX} vs ${item.nameY}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      applyPreset(item);
      DOM.presetsModal.classList.remove('show');
    });

    DOM.presetGrid.appendChild(card);
  });
}

function applyPreset(item) {
  gameState.playerX.name = item.nameX;
  gameState.playerY.name = item.nameY;
  DOM.nameX.textContent = item.nameX;
  DOM.nameY.textContent = item.nameY;

  // Clear photos so aesthetic emoji fallback takes over
  gameState.playerX.photo = '';
  gameState.playerY.photo = '';
  DOM.fallbackX.textContent = item.emojiX;
  DOM.fallbackY.textContent = item.emojiY;
  applyPlayerPhoto('X', '');
  applyPlayerPhoto('Y', '');

  // Theme
  if (item.theme) {
    gameState.theme = item.theme;
    document.body.dataset.theme = item.theme;
    DOM.themeChips.forEach(c => {
      c.classList.toggle('active', c.dataset.theme === item.theme);
    });
  }

  resetMatch();
  saveData();
}

// ==========================================================================
// AMBIENT PARTICLES & CONFETTI ENGINE
// ==========================================================================
let particles = [];
let confettiPieces = [];

function setupParticleSystem() {
  const canvas = DOM.particleCanvas;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Create subtle floating dust / ASMR bokeh particles
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.5 - 0.1,
      alpha: Math.random() * 0.4 + 0.1
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Floating particles
    ctx.fillStyle = '#ffffff';
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    // Confetti particles
    if (confettiPieces.length > 0) {
      for (let i = confettiPieces.length - 1; i >= 0; i--) {
        const c = confettiPieces[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += c.gravity;
        c.rot += c.rotSpeed;
        c.alpha -= 0.006;

        ctx.save();
        ctx.globalAlpha = Math.max(0, c.alpha);
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rot);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
        ctx.restore();

        if (c.alpha <= 0 || c.y > canvas.height + 50) {
          confettiPieces.splice(i, 1);
        }
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

function launchVictoryConfetti() {
  const canvas = DOM.particleCanvas;
  const colors = ['#ffd700', '#ff0077', '#00f0ff', '#10b981', '#ffffff', '#a855f7'];

  for (let i = 0; i < 160; i++) {
    confettiPieces.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.4,
      size: Math.random() * 10 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 14 - 6,
      gravity: 0.35,
      rot: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.25,
      alpha: 1
    });
  }
}

// Run on page load
window.addEventListener('DOMContentLoaded', initApp);

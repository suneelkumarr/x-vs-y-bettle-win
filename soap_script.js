/**
 * SOAP SLICE RACER: EXTREME ASMR CRUNCH
 * Complete ASMR audio synthesizer & 3D canvas physics engine.
 */

// ==========================================================================
// 1. STATE & CONFIGURATION
// ==========================================================================
const config = {
  maxLayers: 100,
  soundEnabled: true,
  soundType: 'CRUNCH', // 'CRUNCH', 'SAND', 'POP'
  volume: 0.85,
  raceSpeed: 'normal',
  theme: 'rainbow',
  isLandscape: false,
  autoRaceRunning: false
};

const gameState = {
  slicedX: 0,
  slicedY: 0,
  cutsPerSecX: 0,
  cutsPerSecY: 0,
  lastSliceTimeX: 0,
  lastSliceTimeY: 0,
  raceStartTime: null,
  raceInterval: null,
  winner: null,
  turn: 'X' // for dice mode
};

// Color Palettes for Soap Styles
const THEMES = {
  rainbow: {
    name: 'Rainbow Pastel',
    layers: [
      '#ff70a6', '#ff9770', '#ffd670', '#e9ff70', 
      '#70d6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'
    ],
    xAccent: '#00e5ff',
    yAccent: '#ff1493'
  },
  sand: {
    name: 'Kinetic Sand Gold',
    layers: [
      '#f6bd60', '#f7b267', '#f4845f', '#f27059', 
      '#f25c54', '#f7cad0', '#ffb5a7', '#fed9b7'
    ],
    xAccent: '#f6bd60',
    yAccent: '#f25c54'
  },
  neon: {
    name: 'Cyber Neon',
    layers: [
      '#00f0ff', '#7000ff', '#ff007b', '#00ff66', 
      '#ffe600', '#00e5ff', '#ff00bb', '#00ffcc'
    ],
    xAccent: '#00f0ff',
    yAccent: '#ff007b'
  },
  mint: {
    name: 'Mint & Gold Foil',
    layers: [
      '#2a9d8f', '#264653', '#e9c46a', '#f4a261', 
      '#52b788', '#74c69d', '#95d5b2', '#d8f3dc'
    ],
    xAccent: '#52b788',
    yAccent: '#e9c46a'
  },
  watermelon: {
    name: 'Watermelon Crisp',
    layers: [
      '#2b9348', '#55a630', '#80b918', '#e9ecef', 
      '#ff4d6d', '#c9184a', '#a4133c', '#ff758f'
    ],
    xAccent: '#55a630',
    yAccent: '#ff4d6d'
  }
};

// ==========================================================================
// 2. PROCEDURAL ASMR WEB AUDIO SYNTHESIZER
// ==========================================================================
let audioCtx = null;
let masterGain = null;

function initAudio() {
  if (audioCtx) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(config.volume, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);
  } catch (e) {
    console.warn('Web Audio not supported:', e);
  }
}

function playAsmrCrunch(isLeftPlayer = true) {
  if (!config.soundEnabled) return;
  if (!audioCtx) initAudio();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  const panValue = isLeftPlayer ? -0.65 : 0.65; // Binaural stereo headphones pan

  const panner = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;
  if (panner) panner.pan.setValueAtTime(panValue, now);

  const destinationNode = panner || masterGain;
  if (panner) panner.connect(masterGain);

  if (config.soundType === 'CRUNCH') {
    // 1. Blade Scrape Noise (High frequency friction)
    const bufferSize = audioCtx.sampleRate * 0.08;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const scrapeFilter = audioCtx.createBiquadFilter();
    scrapeFilter.type = 'bandpass';
    scrapeFilter.frequency.setValueAtTime(3200 + (Math.random() * 800 - 400), now);
    scrapeFilter.Q.setValueAtTime(3.5, now);

    const scrapeGain = audioCtx.createGain();
    scrapeGain.gain.setValueAtTime(0.65 * config.volume, now);
    scrapeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    whiteNoise.connect(scrapeFilter);
    scrapeFilter.connect(scrapeGain);
    scrapeGain.connect(destinationNode);
    whiteNoise.start(now);

    // 2. Multi-Micro Pop Cascade (Dozens of tiny cubes snapping off)
    const popCount = 7 + Math.floor(Math.random() * 5);
    for (let i = 0; i < popCount; i++) {
      const popOsc = audioCtx.createOscillator();
      const popGain = audioCtx.createGain();
      const popTime = now + (i * 0.009) + (Math.random() * 0.004);

      popOsc.type = 'triangle';
      const baseFreq = 800 + Math.random() * 1800;
      popOsc.frequency.setValueAtTime(baseFreq, popTime);
      popOsc.frequency.exponentialRampToValueAtTime(baseFreq * 0.25, popTime + 0.015);

      popGain.gain.setValueAtTime(0.28 * config.volume, popTime);
      popGain.gain.exponentialRampToValueAtTime(0.0001, popTime + 0.018);

      popOsc.connect(popGain);
      popGain.connect(destinationNode);
      popOsc.start(popTime);
      popOsc.stop(popTime + 0.022);
    }

  } else if (config.soundType === 'SAND') {
    // Soft kinetic sand cutting
    const bufferSize = audioCtx.sampleRate * 0.12;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
    }
    const sandNoise = audioCtx.createBufferSource();
    sandNoise.buffer = noiseBuffer;

    const sandFilter = audioCtx.createBiquadFilter();
    sandFilter.type = 'lowpass';
    sandFilter.frequency.setValueAtTime(1600, now);

    const sandGain = audioCtx.createGain();
    sandGain.gain.setValueAtTime(0.8 * config.volume, now);
    sandGain.gain.linearRampToValueAtTime(0.01, now + 0.12);

    sandNoise.connect(sandFilter);
    sandFilter.connect(sandGain);
    sandGain.connect(destinationNode);
    sandNoise.start(now);

  } else if (config.soundType === 'POP') {
    // Sharp bubble wrap burst
    const popOsc = audioCtx.createOscillator();
    const popGain = audioCtx.createGain();
    popOsc.type = 'sine';
    popOsc.frequency.setValueAtTime(1400, now);
    popOsc.frequency.exponentialRampToValueAtTime(120, now + 0.05);

    popGain.gain.setValueAtTime(0.7 * config.volume, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    popOsc.connect(popGain);
    popGain.connect(destinationNode);
    popOsc.start(now);
    popOsc.stop(now + 0.06);
  }
}

function playVictoryChimes() {
  if (!config.soundEnabled) return;
  if (!audioCtx) initAudio();
  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C Major arpeggio
  const now = audioCtx.currentTime;

  notes.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const noteTime = now + (idx * 0.14);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, noteTime);

    g.gain.setValueAtTime(0.35 * config.volume, noteTime);
    g.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.6);

    osc.connect(g);
    g.connect(masterGain);
    osc.start(noteTime);
    osc.stop(noteTime + 0.65);
  });
}

// ==========================================================================
// 3. 3D SOAP CANVAS ENGINE & TUMBLING CUBE PHYSICS
// ==========================================================================
class SoapSimulator {
  constructor(canvasId, playerKey) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.playerKey = playerKey; // 'X' or 'Y'
    this.cubes = []; // tumbling 3D particle cubes
    this.shavings = []; // micro dust sparkles
    this.bladeActive = false;
    this.bladeProgress = 0;
    this.bladeY = 0;
    this.currentRenderHeight = 1.0; // 1.0 = full block, 0.0 = completely sliced

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.width = rect.width;
    this.height = rect.height;
  }

  sliceLayer(count = 1) {
    const isLeft = this.playerKey === 'X';
    playAsmrCrunch(isLeft);

    // Trigger slice blade animation
    this.bladeActive = true;
    this.bladeProgress = 0;

    // Flash effect
    const flashEl = document.getElementById(`sliceFlash${this.playerKey}`);
    if (flashEl) {
      flashEl.classList.add('flash');
      setTimeout(() => flashEl.classList.remove('flash'), 70);
    }

    // Spawn falling 3D tumbling cubes
    const theme = THEMES[config.theme] || THEMES.rainbow;
    const layerColors = theme.layers;
    const currentSliced = this.playerKey === 'X' ? gameState.slicedX : gameState.slicedY;
    const colorIndex = Math.floor(currentSliced) % layerColors.length;
    const cubeColor = layerColors[colorIndex];

    const blockWidth = this.width * 0.65;
    const startX = (this.width - blockWidth) / 2;
    const blockTopY = this.height * 0.22 + (1 - this.currentRenderHeight) * (this.height * 0.52);

    // Grid of cubes (e.g. 5x5 = 25 cubes popping off per slice)
    const cols = 5;
    const rows = 4;
    const cubeW = blockWidth / cols;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const spreadX = startX + c * cubeW + (Math.random() * 6 - 3);
        const spreadY = blockTopY + r * 6 + (Math.random() * 4 - 2);

        this.cubes.push({
          x: spreadX,
          y: spreadY,
          z: Math.random() * 40 - 20,
          vx: (Math.random() * 5 - 2.5) + (isLeft ? -1.5 : 1.5),
          vy: - (2.5 + Math.random() * 3.5), // pop upwards
          vz: Math.random() * 4 - 2,
          rotX: Math.random() * Math.PI * 2,
          rotY: Math.random() * Math.PI * 2,
          rotZ: Math.random() * Math.PI * 2,
          vRotX: (Math.random() * 0.2 - 0.1),
          vRotY: (Math.random() * 0.2 - 0.1),
          vRotZ: (Math.random() * 0.2 - 0.1),
          size: 7 + Math.random() * 4,
          color: cubeColor,
          alpha: 1.0,
          life: 0,
          maxLife: 45 + Math.random() * 20
        });
      }
    }

    // Micro dust shavings
    for (let i = 0; i < 18; i++) {
      this.shavings.push({
        x: startX + Math.random() * blockWidth,
        y: blockTopY + (Math.random() * 10 - 5),
        vx: (Math.random() * 4 - 2),
        vy: - (1 + Math.random() * 3),
        size: 1.5 + Math.random() * 2,
        color: '#ffffff',
        alpha: 0.9,
        maxLife: 25 + Math.random() * 15,
        life: 0
      });
    }
  }

  update() {
    const targetHeight = Math.max(0, 1 - (this.playerKey === 'X' ? gameState.slicedX : gameState.slicedY) / config.maxLayers);
    // Smooth height lerp
    this.currentRenderHeight += (targetHeight - this.currentRenderHeight) * 0.22;

    // Update tumbling cubes physics
    for (let i = this.cubes.length - 1; i >= 0; i--) {
      const c = this.cubes[i];
      c.x += c.vx;
      c.y += c.vy;
      c.z += c.vz;
      c.vy += 0.32; // Gravity
      c.vx *= 0.98; // Air resistance
      c.rotX += c.vRotX;
      c.rotY += c.vRotY;
      c.rotZ += c.vRotZ;
      c.life++;

      // Floor bounce near tray
      const floorY = this.height * 0.88;
      if (c.y > floorY) {
        c.y = floorY;
        c.vy = -c.vy * 0.35;
        c.vx *= 0.8;
      }

      if (c.life >= c.maxLife) {
        c.alpha -= 0.05;
        if (c.alpha <= 0) {
          this.cubes.splice(i, 1);
        }
      }
    }

    // Update shavings
    for (let i = this.shavings.length - 1; i >= 0; i--) {
      const s = this.shavings[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.18;
      s.life++;
      s.alpha = Math.max(0, 1 - s.life / s.maxLife);
      if (s.life >= s.maxLife) {
        this.shavings.splice(i, 1);
      }
    }

    // Blade sweep progress
    if (this.bladeActive) {
      this.bladeProgress += 0.18;
      if (this.bladeProgress >= 1) {
        this.bladeActive = false;
        this.bladeProgress = 0;
      }
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const theme = THEMES[config.theme] || THEMES.rainbow;
    const blockWidth = this.width * 0.62;
    const blockMaxHeight = this.height * 0.55;
    const currentHeight = Math.max(8, blockMaxHeight * this.currentRenderHeight);
    const blockX = (this.width - blockWidth) / 2;
    const blockBaseY = this.height * 0.82;
    const blockTopY = blockBaseY - currentHeight;

    // 1. Draw 3D Isometric / Beveled Soap Base (Collection Tray)
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    this.ctx.beginPath();
    this.ctx.ellipse(this.width / 2, blockBaseY + 12, blockWidth * 0.65, 14, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // 2. Draw 3D Soap Block Front Face
    const totalVisibleLayers = Math.min(config.maxLayers, 12);
    const layerStep = currentHeight / totalVisibleLayers;

    for (let i = 0; i < totalVisibleLayers; i++) {
      const yPos = blockTopY + i * layerStep;
      const layerIndex = (Math.floor(this.playerKey === 'X' ? gameState.slicedX : gameState.slicedY) + i) % theme.layers.length;
      const baseColor = theme.layers[layerIndex];

      // Layer rectangle
      this.ctx.fillStyle = baseColor;
      this.ctx.fillRect(blockX, yPos, blockWidth, layerStep + 0.5);

      // Shading gradient across front
      const grad = this.ctx.createLinearGradient(blockX, yPos, blockX + blockWidth, yPos);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.05)');
      grad.addColorStop(0.85, 'rgba(0, 0, 0, 0.15)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(blockX, yPos, blockWidth, layerStep + 0.5);

      // Horizontal micro groove line
      this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.18)';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(blockX, yPos + layerStep);
      this.ctx.lineTo(blockX + blockWidth, yPos + layerStep);
      this.ctx.stroke();
    }

    // 3. Draw Top Face of Soap Block (Cross-section grid cubes!)
    const isoSkew = 14; // perspective slant
    this.ctx.fillStyle = theme.layers[Math.floor(this.playerKey === 'X' ? gameState.slicedX : gameState.slicedY) % theme.layers.length];
    this.ctx.beginPath();
    this.ctx.moveTo(blockX, blockTopY);
    this.ctx.lineTo(blockX + isoSkew, blockTopY - isoSkew * 0.6);
    this.ctx.lineTo(blockX + blockWidth + isoSkew, blockTopY - isoSkew * 0.6);
    this.ctx.lineTo(blockX + blockWidth, blockTopY);
    this.ctx.closePath();
    this.ctx.fill();

    // Top face highlight
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
    this.ctx.fill();

    // 4. Draw Right Side Face (3D Depth)
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.42)';
    this.ctx.beginPath();
    this.ctx.moveTo(blockX + blockWidth, blockTopY);
    this.ctx.lineTo(blockX + blockWidth + isoSkew, blockTopY - isoSkew * 0.6);
    this.ctx.lineTo(blockX + blockWidth + isoSkew, blockBaseY - isoSkew * 0.6);
    this.ctx.lineTo(blockX + blockWidth, blockBaseY);
    this.ctx.closePath();
    this.ctx.fill();

    // 5. Draw Grid Grooves on Front Face (Grid of crunchy cubes)
    const cols = 5;
    const colW = blockWidth / cols;
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    this.ctx.lineWidth = 1;
    for (let c = 1; c < cols; c++) {
      this.ctx.beginPath();
      this.ctx.moveTo(blockX + c * colW, blockTopY);
      this.ctx.lineTo(blockX + c * colW, blockBaseY);
      this.ctx.stroke();
    }

    // 6. Draw Animated Slicing Blade (When active)
    if (this.bladeActive) {
      const bladeX = blockX - 20 + this.bladeProgress * (blockWidth + 40);
      const bladeY = blockTopY + 2;

      // Glowing Laser/Steel Blade Line
      const bladeGrad = this.ctx.createLinearGradient(bladeX - 30, bladeY, bladeX + 30, bladeY);
      bladeGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      bladeGrad.addColorStop(0.5, '#ffffff');
      bladeGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      this.ctx.strokeStyle = bladeGrad;
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.moveTo(bladeX - 25, bladeY);
      this.ctx.lineTo(bladeX + 25, bladeY);
      this.ctx.stroke();

      // Blade Spark
      this.ctx.fillStyle = '#ffffff';
      this.ctx.beginPath();
      this.ctx.arc(bladeX, bladeY, 3, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // 7. Render 3D Tumbling Cubes
    for (const c of this.cubes) {
      this.ctx.save();
      this.ctx.translate(c.x, c.y);
      this.ctx.rotate(c.rotZ);
      this.ctx.globalAlpha = Math.max(0, Math.min(1, c.alpha));

      // 3D Isometric Mini Cube Face
      const s = c.size;
      this.ctx.fillStyle = c.color;
      this.ctx.fillRect(-s / 2, -s / 2, s, s);

      // Cube border & micro highlight
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      this.ctx.lineWidth = 0.8;
      this.ctx.strokeRect(-s / 2, -s / 2, s, s);

      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      this.ctx.fillRect(-s / 2, -s / 2, s * 0.4, s * 0.4);

      this.ctx.restore();
    }

    // 8. Render Micro Dust Shavings
    for (const s of this.shavings) {
      this.ctx.save();
      this.ctx.fillStyle = s.color;
      this.ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    this.ctx.restore();
  }
}

// ==========================================================================
// 4. BACKGROUND DUST PARTICLES
// ==========================================================================
class BgDustSystem {
  constructor() {
    this.canvas = document.getElementById('bgDustCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.particles = [];
    const count = Math.min(50, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.1
      });
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const p of this.particles) {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < 0) p.y = this.canvas.height;
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;

      this.ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}

// ==========================================================================
// 5. GAME LOGIC & CONTROLLER
// ==========================================================================
let simX, simY, bgDust;

function triggerSlice(playerKey, count = 1) {
  if (gameState.winner) return;

  const now = performance.now();
  if (playerKey === 'X') {
    gameState.slicedX = Math.min(config.maxLayers, gameState.slicedX + count);
    simX.sliceLayer(count);

    // Speed calculation
    const delta = (now - gameState.lastSliceTimeX) / 1000;
    if (delta > 0 && delta < 2) {
      gameState.cutsPerSecX = +(1 / delta).toFixed(1);
    }
    gameState.lastSliceTimeX = now;
  } else {
    gameState.slicedY = Math.min(config.maxLayers, gameState.slicedY + count);
    simY.sliceLayer(count);

    const delta = (now - gameState.lastSliceTimeY) / 1000;
    if (delta > 0 && delta < 2) {
      gameState.cutsPerSecY = +(1 / delta).toFixed(1);
    }
    gameState.lastSliceTimeY = now;
  }

  updateUI();
  checkWinner();
}

function updateUI() {
  // Counts & percentages
  const pctX = Math.round((gameState.slicedX / config.maxLayers) * 100);
  const pctY = Math.round((gameState.slicedY / config.maxLayers) * 100);

  document.getElementById('slicedCountX').textContent = gameState.slicedX;
  document.getElementById('slicedCountY').textContent = gameState.slicedY;
  document.getElementById('pctX').textContent = `${pctX}%`;
  document.getElementById('pctY').textContent = `${pctY}%`;

  document.getElementById('progressFillX').style.width = `${pctX}%`;
  document.getElementById('progressFillY').style.width = `${pctY}%`;

  document.getElementById('speedValX').textContent = gameState.cutsPerSecX;
  document.getElementById('speedValY').textContent = gameState.cutsPerSecY;

  // Leading glow indicator
  const cardX = document.getElementById('cardX');
  const cardY = document.getElementById('cardY');
  if (gameState.slicedX > gameState.slicedY) {
    cardX.classList.add('leading');
    cardY.classList.remove('leading');
  } else if (gameState.slicedY > gameState.slicedX) {
    cardY.classList.add('leading');
    cardX.classList.remove('leading');
  } else {
    cardX.classList.remove('leading');
    cardY.classList.remove('leading');
  }
}

function checkWinner() {
  if (gameState.slicedX >= config.maxLayers && !gameState.winner) {
    declareWinner('X');
  } else if (gameState.slicedY >= config.maxLayers && !gameState.winner) {
    declareWinner('Y');
  }
}

function declareWinner(playerKey) {
  gameState.winner = playerKey;
  stopAutoRace();

  const name = document.getElementById(`name${playerKey}`).textContent.trim();
  const titleEl = document.getElementById('winnerTitle');
  const descEl = document.getElementById('winnerDesc');
  const statsEl = document.getElementById('winnerStatsSummary');

  titleEl.textContent = `👑 ${name} WINS!`;
  descEl.textContent = `Completed all ${config.maxLayers} ASMR soap slices first!`;

  const totalTime = gameState.raceStartTime 
    ? ((performance.now() - gameState.raceStartTime) / 1000).toFixed(1) 
    : '12.4';

  statsEl.innerHTML = `
    <div>⏱️ Time: <strong>${totalTime}s</strong></div>
    <div>🔪 Avg Pace: <strong>${(config.maxLayers / totalTime).toFixed(1)} cuts/s</strong></div>
  `;

  document.getElementById('winnerModal').classList.add('show');
  playVictoryChimes();

  // Floating celebration hearts
  for (let i = 0; i < 20; i++) {
    setTimeout(spawnFloatingReaction, i * 100);
  }
}

// Auto Race Simulation
function startAutoRace() {
  if (gameState.winner) resetGame();
  config.autoRaceRunning = true;
  gameState.raceStartTime = performance.now();

  const btn = document.getElementById('btnAutoRace');
  btn.classList.add('running');
  btn.innerHTML = '<span>⏸</span> PAUSE RACE';
  document.getElementById('raceStatus').textContent = '⚡ RACE IN PROGRESS!';

  let intervalMs = 280;
  if (config.raceSpeed === 'slow') intervalMs = 550;
  if (config.raceSpeed === 'fast') intervalMs = 150;
  if (config.raceSpeed === 'insane') intervalMs = 75;

  gameState.raceInterval = setInterval(() => {
    if (!config.autoRaceRunning || gameState.winner) return;

    // Natural variation and lead changes
    const biasX = Math.random();
    const biasY = Math.random();

    if (biasX > 0.42) triggerSlice('X', 1);
    if (biasY > 0.42) triggerSlice('Y', 1);

    // Sudden super slice surge
    if (Math.random() < 0.08) {
      const luckyPlayer = Math.random() < 0.5 ? 'X' : 'Y';
      triggerSlice(luckyPlayer, 2);
    }
  }, intervalMs);
}

function stopAutoRace() {
  config.autoRaceRunning = false;
  if (gameState.raceInterval) {
    clearInterval(gameState.raceInterval);
    gameState.raceInterval = null;
  }
  const btn = document.getElementById('btnAutoRace');
  if (btn) {
    btn.classList.remove('running');
    btn.innerHTML = '<span class="play-icon">▶</span> AUTO RACE';
  }
  const status = document.getElementById('raceStatus');
  if (status && !gameState.winner) status.textContent = 'PAUSED';
}

function resetGame() {
  stopAutoRace();
  gameState.slicedX = 0;
  gameState.slicedY = 0;
  gameState.cutsPerSecX = 0;
  gameState.cutsPerSecY = 0;
  gameState.winner = null;
  gameState.raceStartTime = null;

  document.getElementById('winnerModal').classList.remove('show');
  document.getElementById('raceStatus').textContent = 'READY TO SLICE!';
  updateUI();
}

// Dice Roll & Slice Mode
function rollAndSlice() {
  if (gameState.winner) resetGame();
  const player = gameState.turn;
  const roll = Math.floor(Math.random() * 6) + 1; // 1 to 6
  const commentary = document.getElementById('commentaryText');

  commentary.innerHTML = `🎲 <strong>PLAYER ${player}</strong> rolled a <strong>${roll}</strong>! Slicing ${roll} layers!`;
  
  // Slice `roll` layers with rapid ASMR pops
  for (let i = 0; i < roll; i++) {
    setTimeout(() => {
      triggerSlice(player, 1);
    }, i * 65);
  }

  // Switch turn
  gameState.turn = player === 'X' ? 'Y' : 'X';
}

// Floating Live Stream Emojis
function spawnFloatingReaction() {
  const container = document.getElementById('floatingReactions');
  if (!container) return;
  const emojis = ['🧼', '✨', '💖', '🔥', '🔪', '👑', '😍', '👏'];
  const bubble = document.createElement('div');
  bubble.className = 'reaction-bubble';
  bubble.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  bubble.style.left = `${15 + Math.random() * 70}%`;
  container.appendChild(bubble);

  setTimeout(() => {
    if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
  }, 2800);
}

// ==========================================================================
// 6. EVENT LISTENERS & SETUP
// ==========================================================================
function setupEventListeners() {
  // Manual Slice Buttons
  const btnSliceX = document.getElementById('btnSliceX');
  const btnSliceY = document.getElementById('btnSliceY');

  btnSliceX.addEventListener('click', () => triggerSlice('X', 1));
  btnSliceY.addEventListener('click', () => triggerSlice('Y', 1));

  // Press & hold support for rapid crunching
  let holdIntervalX, holdIntervalY;
  btnSliceX.addEventListener('mousedown', () => {
    holdIntervalX = setInterval(() => triggerSlice('X', 1), 90);
  });
  window.addEventListener('mouseup', () => clearInterval(holdIntervalX));

  btnSliceY.addEventListener('mousedown', () => {
    holdIntervalY = setInterval(() => triggerSlice('Y', 1), 90);
  });
  window.addEventListener('mouseup', () => clearInterval(holdIntervalY));

  // Keyboard controls (A for X, L for Y, Space for Auto)
  window.addEventListener('keydown', (e) => {
    if (e.target.contentEditable === 'true') return;
    if (e.key === 'a' || e.key === 'A') triggerSlice('X', 1);
    if (e.key === 'l' || e.key === 'L') triggerSlice('Y', 1);
    if (e.key === ' ') {
      e.preventDefault();
      if (config.autoRaceRunning) stopAutoRace();
      else startAutoRace();
    }
  });

  // Mode Buttons
  document.getElementById('btnAutoRace').addEventListener('click', () => {
    if (config.autoRaceRunning) stopAutoRace();
    else startAutoRace();
  });

  document.getElementById('btnRollDice').addEventListener('click', rollAndSlice);
  document.getElementById('btnReset').addEventListener('click', resetGame);
  document.getElementById('btnPlayAgain').addEventListener('click', resetGame);

  // Switch to Dice Battle
  document.getElementById('btnSwitchGame').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // Layer Preset Chips
  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const val = parseInt(chip.getAttribute('data-layers'), 10);
      config.maxLayers = val;
      document.querySelectorAll('.max-layers-label').forEach(el => el.textContent = val);
      resetGame();
    });
  });

  // Speed Selector
  document.getElementById('raceSpeed').addEventListener('change', (e) => {
    config.raceSpeed = e.target.value;
    if (config.autoRaceRunning) {
      stopAutoRace();
      startAutoRace();
    }
  });

  // Theme Selector
  document.getElementById('soapTheme').addEventListener('change', (e) => {
    config.theme = e.target.value;
    const themeName = THEMES[config.theme]?.name || 'CRUNCH';
    document.getElementById('themeBadgeX').textContent = themeName.toUpperCase();
    document.getElementById('themeBadgeY').textContent = themeName.toUpperCase();
  });

  // Sound Toggle
  document.getElementById('btnSoundToggle').addEventListener('click', () => {
    config.soundEnabled = !config.soundEnabled;
    const icon = document.getElementById('soundIcon');
    icon.style.opacity = config.soundEnabled ? '1' : '0.4';
  });

  // Sound Style Toggle (CRUNCH / SAND / POP)
  document.getElementById('btnSoundType').addEventListener('click', () => {
    const types = ['CRUNCH', 'SAND', 'POP'];
    const idx = (types.indexOf(config.soundType) + 1) % types.length;
    config.soundType = types[idx];
    document.getElementById('soundTypeLabel').textContent = config.soundType;
    playAsmrCrunch(true);
  });

  // Volume Slider
  document.getElementById('asmrVolume').addEventListener('input', (e) => {
    config.volume = e.target.value / 100;
    document.getElementById('volPercent').textContent = `${e.target.value}%`;
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(config.volume, audioCtx.currentTime);
    }
  });

  // 16:9 Landscape Mode Toggle
  document.getElementById('btnLayoutToggle').addEventListener('click', () => {
    config.isLandscape = !config.isLandscape;
    const wrapper = document.getElementById('gameWrapper');
    const btnText = document.querySelector('#btnLayoutToggle .btn-text');
    if (config.isLandscape) {
      wrapper.classList.remove('shorts-mode');
      wrapper.classList.add('landscape-mode');
      btnText.textContent = '9:16 Shorts';
    } else {
      wrapper.classList.remove('landscape-mode');
      wrapper.classList.add('shorts-mode');
      btnText.textContent = '16:9 Mode';
    }
    setTimeout(() => {
      simX.resize();
      simY.resize();
    }, 360);
  });

  // Fullscreen
  document.getElementById('btnFullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // Avatar upload triggers
  document.getElementById('btnChangeAvatarX').addEventListener('click', () => {
    document.getElementById('fileInputX').click();
  });
  document.getElementById('btnChangeAvatarY').addEventListener('click', () => {
    document.getElementById('fileInputY').click();
  });

  document.getElementById('fileInputX').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        document.getElementById('avatarImgX').src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('fileInputY').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        document.getElementById('avatarImgY').src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // YouTube Vote Buttons
  document.getElementById('voteBtnX').addEventListener('click', () => {
    const countEl = document.getElementById('voteCountX');
    let count = parseFloat(countEl.textContent);
    countEl.textContent = `${(count + 0.1).toFixed(1)}K`;
    spawnFloatingReaction();
  });

  document.getElementById('voteBtnY').addEventListener('click', () => {
    const countEl = document.getElementById('voteCountY');
    let count = parseFloat(countEl.textContent);
    countEl.textContent = `${(count + 0.1).toFixed(1)}K`;
    spawnFloatingReaction();
  });
}

// ==========================================================================
// 7. MAIN ANIMATION LOOP
// ==========================================================================
function mainLoop() {
  simX.update();
  simX.render();

  simY.update();
  simY.render();

  bgDust.render();

  requestAnimationFrame(mainLoop);
}

// Initialization on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  simX = new SoapSimulator('soapCanvasX', 'X');
  simY = new SoapSimulator('soapCanvasY', 'Y');
  bgDust = new BgDustSystem();

  setupEventListeners();
  updateUI();

  // First user interaction initializes Web Audio
  document.body.addEventListener('click', () => initAudio(), { once: true });
  document.body.addEventListener('touchstart', () => initAudio(), { once: true });

  requestAnimationFrame(mainLoop);
});

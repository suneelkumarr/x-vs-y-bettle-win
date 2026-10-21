# Browser Game Collection

This repository hosts several browser games, including **Flags War Arena**, **Nations Grand Prix**, **Soap Racer**, and **Dice Battle**.

## Flags War Arena quick reference

Open `flags.html` in a browser or serve the repository with a local static HTTP server.

- **Implemented modes:** Center Elimination and the four-stage Survival Gauntlet.
- **Coming soon:** Center Qualifying and Vortex Storm are intentionally disabled until their game logic is implemented.
- **Controls:** Play/Pause, Reset, Agitate, Sound, 9:16/16:9 layout, and Settings.
- **Settings:** roster size, obstacle speeds, bounciness, gravity, auto-cycle, voice announcements, fake comments, and Live HUD Cluster visibility.
- **Demo counters:** viewer and like counters are simulated examples, not live YouTube analytics. Fake chat is generated locally and is not real viewer chat.
- **Assets:** the game uses local assets under `assets/` and FlagCDN for flag images.

A static smoke-test workflow checks JavaScript syntax, HTML/JS ID consistency, local resources, the 201-country roster, voice files, mode availability, and selected settings behavior. Browser physics, mobile layout, and OBS capture still need manual testing.

---

# 🎲 Who Will Win This Game? - X vs Y ASMR Dice Battle
**Created for YouTube Channel: Tara USA ASMR**

---

## ✨ Features Included:
1. **Custom Title**:
   - Default: `WHO WILL WIN THIS GAME?`
   - Fully editable directly by clicking on screen or via Settings.
2. **Custom Player Names**:
   - `Player X` vs `Player Y` (Click to edit inline anytime, saved automatically).
3. **Custom Player Photos**:
   - Upload any photo for Player X & Player Y from your computer (auto-cropped to circular avatar).
   - Instant emoji presets (Pizza vs Burger, Cat vs Dog, Batman vs Spider-Man, etc.).
4. **Custom Player Scorecard & Max 1000**:
   - Target goal: **1000 Points** (adjustable to 500, 1000, 2000, etc. in Settings).
   - Real-time animated percentage progress bars and score counters.
   - Leader tracking ("+X pts lead" and current leader highlight).
5. **3D Dice with Auto-Rotate (Turn System)**:
   - Realistic 3D rotating dice with physical tumble animation.
   - First rolls for **Player X**, points are added, then rolls for **Player Y**, points are added.
   - **Auto Battle Mode**: Plays continuously until someone reaches 1000 points.
   - **Speed Control**: Relaxed ASMR, Normal YouTube, Fast, Ultra Speedrun.
   - **Dice Range**: Strictly **1 to 6** numbers per roll (Max: 6).
6. **ASMR Procedural Audio**:
   - 100% offline Web Audio synthesizer:
     - Dice rattle & wooden tumble sounds.
     - ASMR bubble pops when points tick up.
     - Lucky chime fanfare on rolling a 6.
     - Comedic cartoon fail/bonk sound on rolling a 1.
     - Sub-bass boom & crowd cheers.
     - Optional soothing ASMR pink noise ambience toggle.
     - Grand victory fanfare & confetti explosion upon winning!
7. **🎭 Animatic & Funny Reactions (Viral YouTube Formula)**:
   - **Comic Speech Bubbles**:
     - Rolling a **1**: "BRUH... 💀", "Is this rigged?! 😭", "Emotional damage! 📉"
     - Rolling a **6**: "JACKPOT! 🚀", "UNSTOPPABLE! 👑", "BOOM! 💥"
   - **Screen Shake & Comical Wobble**:
     - Screen shake on **6**.
     - Funny wobble animation on **1**.
   - **🎙️ Live Comedy Commentary Ticker**:
     - Real-time TV marquee ticker with dynamic memes & match commentary.
   - **❤️ Floating Livestream Reactions**:
     - Animated emojis (🔥, 💀, 🤣, 🍿, 🚀, 👑) float up like YouTube Live & TikTok!
     - Interactive **"🎉 Cheer!"** button for instant crowd energy.
   - **⚔️ YouTube Viewer Engagement Banner**:
     - *"👍 LIKE FOR PLAYER X vs 🔔 SUBSCRIBE FOR PLAYER Y"* to drive channel engagement!
8. **⚔️ Real Battle Combat Engine (Anime & RPG Mechanics)**:
   - **⚡ Dragon Ball Style Energy Beam Clash**:
     - Real-time dynamic tug-of-war electric beam clash between Player X & Player Y showing live battle dominance!
   - **💥 RPG Laser Projectiles & Critical Hit Damage**:
     - Laser beams shoot across from the active player to opponent!
     - Opponent card flashes red damage with floating popups: `💥 CRITICAL -6 HP!` or `🛡️ BLOCKED!`
   - **🔥 Combo Streaks & Comeback Rage Mode**:
     - Consecutive high rolls trigger `COMBO x2 🔥 / x3 ⚡`!
     - A player trailing by 25+ points enters glowing **Comeback Rage Mode**!
   - **🎴 Mystery Battle Power-Up Events**:
     - Random surprise events like `🔥 BERSERK STRIKE` (2x points!), `🛡️ TITAN SHIELD` (blocks attack), and `🥷 SHADOW STEAL` (steals 3 points)!
   - **⚔️ Combat Sound FX**:
     - Sword clashes on turn switch, electric laser blasts, thunder strikes, and mystery power-up chimes.
9. **YouTube Creator & OBS Friendly**:
   - **Shorts Mode (9:16)** toggle for YouTube Shorts / TikTok.
   - **Landscape Mode (16:9)** for standard YouTube videos & livestreams.
   - **Fullscreen Mode** for clean OBS / screen recording.

---

## 🏳️ Flags War Arena: 195 Flags Battle Royale LIVE (MATCHING YOUTUBE STREAM!)
**Exact 1-to-1 match to YouTube Live Stream: `https://www.youtube.com/watch?v=k5bvVtdEIJ0` and Screenshots!**

### ✨ Features Included:
1. **Accurate YouTube Live HUD & Layout (Matches Screenshot)**:
   - **Header**: Metallic gold `FLAGS WAR ARENA` branding.
   - **Live Counters**: Dark navy pills with `COUNTRIES 64` and glowing yellow `REMAINING 64`.
   - **Round Countdown Circle**: Circular yellow SVG progress timer with number `3` inside!
   - **Subtitle**: `CYCLE 2 • LIVE` with pulsing red dot, and large bold yellow `WHERE ARE YOU FROM?`.
2. **Dynamic Arena & Spoke Obstacle Physics**:
   - Glowing neon cyan outer circle boundary.
   - **6 Purple Spoke Obstacles**: Radial dividing paddles that rotate and churn country marbles through 6 arena sectors.
   - **Yellow Center Elimination Chamber**: Rotating gate slot; when a country marble enters the center, it gets trapped, spotlighted, and eliminated with explosive particle shockwaves!
   - **Realistic 3D Spherical Marble Shading**: Real national flags textured onto 3D spheres with specular highlight and ambient shadow.
3. **Bottom Elimination Status & Live Engagement**:
   - `ALL ELIMINATED` headline announcing each eliminated country (`INDIA ELIMINATED!`, etc.).
   - Glowing cyan progress bar: `0 / 64 ELIMINATED` updating dynamically.
   - `👍 LIKE IF YOU SEE YOUR COUNTRY FLAG` interactive banner with live like counter and flying emoji fountains!
4. **24/7 Continuous Live Stream Cycles**:
   - Automatic cycle transitions (`CYCLE 2`, `CYCLE 3`, etc.) with 3-second countdown between matches.
   - Selectable country pool (64 default matching screenshot, 32 blitz, 100, 173, or all 195 nations).
   - Viewer country search & pinning with a golden crown!
5. **🗣️ Live Voice Announcer ("Country is out!")**:
   - Realistic voice announcement calling out **"[Country Name] is out!"** (e.g. *"India is out!"*, *"Brazil is out!"*, *"Germany is out!"*) whenever a country falls into the center elimination hole.
   - Grand champion voice announcement: **"[Country Name] is the champion!"** upon winning.
   - Works 100% offline using the native browser Web Speech Synthesis API.
   - Can be toggled on/off in the Settings drawer (⚙️).
6. **Procedural Web Audio API Sound FX**:
   - Realistic marble clack sounds with dynamic pitch.
   - Sub-bass boom & electric shockwave when a flag is eliminated in the center.
   - Victory fanfare upon crowning the champion.


---

## 🚀 How to Run:
- **Flags Battle**: Double-click [run_flags_battle.bat](file:///d:/x-vs-y-win/run_flags_battle.bat) or open [flags.html](file:///d:/x-vs-y-win/flags.html)
- **Dice Battle**: Double-click [run_game.bat](file:///d:/x-vs-y-win/run_game.bat) or open [index.html](file:///d:/x-vs-y-win/index.html)
- **Soap Racer**: Open [soap.html](file:///d:/x-vs-y-win/soap.html)

# Flags War Arena & Mini Games

This repository contains browser-based games designed for gameplay videos, YouTube Shorts, and livestream capture.

## Games

- **Flags War Arena** — country-flag marble battle royale with collision physics, elimination tracking, country pinning, simulated demo engagement counters, and a four-stage Survival Gauntlet.
- **Nations Grand Prix** — top-down country racing game.
- **Soap Racer** — soap-racing mini game.
- **Dice Battle** — X-vs-Y dice battle game.

## Flags War Arena

Open `flags.html` in a browser or serve the repository with a local static HTTP server.

### Available modes

- **Center Elimination** — active flags compete until one remains.
- **Survival Gauntlet** — four-stage elimination challenge.

Center Qualifying and Vortex Storm are shown as coming soon because their game logic is not currently implemented.

### Controls

- **Play/Pause** — pause or resume the simulation.
- **Reset** — restart the current match.
- **⚡ Agitate** — add a burst of motion to the flags.
- **Sound** — toggle sound effects and voice announcements.
- **9:16 / 16:9** — switch between portrait Shorts and landscape layouts.
- **Settings** — change roster size, obstacle speeds, bounciness, gravity, auto-cycle, voice announcements, fake chat, and Live HUD Cluster visibility.

### Notes

- Viewer and like counters are simulated demo values, not live YouTube analytics.
- Fake chat is generated locally; it is not real viewer chat.
- The game uses local assets under `assets/` and FlagCDN for country-flag images.
- Browser runtime, mobile sizing, and OBS capture should be tested on the target device before a livestream.

## Local development

This is a static HTML/CSS/JavaScript project; no package installation is required to run the games. A local HTTP server is recommended for consistent asset loading.

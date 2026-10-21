const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "flags.html"), "utf8");
const js = fs.readFileSync(path.join(root, "flags_script.js"), "utf8");
const css = fs.readFileSync(path.join(root, "flags_style.css"), "utf8");

test("Flags War Arena JavaScript parses", () => {
  assert.doesNotThrow(() => new vm.Script(js, { filename: "flags_script.js" }));
});

test("HTML IDs are unique and every literal JS ID lookup exists", () => {
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, "duplicate HTML id found");
  const idSet = new Set(ids);
  const refs = [...js.matchAll(/getElementById\(["']([^"']+)["']\)/g)].map((match) => match[1]);
  const missing = [...new Set(refs.filter((id) => !idSet.has(id)))];
  assert.deepEqual(missing, [], "JS references missing HTML IDs");
});

test("All local script and stylesheet references resolve", () => {
  const refs = [
    ...html.matchAll(/<(?:script|link)\b[^>]*?(?:src|href)=["']([^"']+)["'][^>]*>/g),
  ].map((match) => match[1]).filter((url) => !/^https?:\/\//i.test(url));
  for (const ref of refs) {
    const localPath = ref.split("?")[0];
    assert.ok(fs.existsSync(path.join(root, localPath)), `missing local resource: ${localPath}`);
  }
});

test("Country roster contains 201 unique countries and every country voice asset", () => {
  const match = js.match(/const COUNTRIES_DB\s*=\s*(\[[\s\S]*?\n\]);/);
  assert.ok(match, "COUNTRIES_DB declaration not found");
  const countries = vm.runInNewContext(`(${match[1]})`);
  assert.equal(countries.length, 201);
  const codes = countries.map((country) => country.code.toLowerCase());
  assert.equal(new Set(codes).size, codes.length, "duplicate country code found");
  for (const code of codes) {
    assert.ok(fs.existsSync(path.join(root, "assets", "voices", `${code}.mp3`)), `missing voice asset: ${code}.mp3`);
  }
});

test("Only implemented battle modes are enabled", () => {
  const cards = [...html.matchAll(/<button\b([^>]*data-mode=["']([^"']+)["'][^>]*)>/g)]
    .map((match) => ({ attrs: match[1], mode: match[2] }));
  assert.ok(cards.some((card) => card.mode === "elimination" && !/\bdisabled\b/.test(card.attrs)));
  assert.ok(cards.some((card) => card.mode === "gauntlet" && !/\bdisabled\b/.test(card.attrs)));
  for (const mode of ["qualifying", "vortex"]) {
    const card = cards.find((item) => item.mode === mode);
    assert.ok(card, `missing ${mode} card`);
    assert.match(card.attrs, /\bdisabled\b/, `${mode} must not look playable before its logic exists`);
  }
});

test("Settings preserve explicit zero values and controls have visible focus states", () => {
  assert.match(js, /gameConfig\.spokeSpeed = 0\.005 \* readRange\("spokeSpeedInput", 1, 0, 3\)/);
  assert.match(js, /gameConfig\.gravity = readRange\("gravityInput", 0\.06, 0, 0\.3\)/);
  assert.match(js, /gameConfig\.soundVolume = readRange\("soundVolumeInput", 0\.75, 0, 1\)/);
  assert.match(css, /\.tool-btn:focus-visible/);
  assert.match(css, /\.mode-card:focus-visible/);
});

test("Demo engagement counters are clearly labelled as simulated", () => {
  assert.match(html, /Simulated demo counter/);
  assert.match(html, /Simulated demo likes/);
});

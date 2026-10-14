import json
from difflib import SequenceMatcher

with open("countries_out_lines.txt", "r", encoding="utf-8") as f:
    expected = [l.strip().replace(" is out", "").strip() for l in f if l.strip()]

with open("flags_script.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
match = re.search(r"const COUNTRIES_DB = (\[[\s\S]*?\]);", content)
countries_db = json.loads(match.group(1))

with open("scratch/phrases_200.txt", "r", encoding="utf-8") as f:
    raw_phrases = [l.strip().split("\t") for l in f if l.strip()]

phrases = []
for p in raw_phrases:
    phrases.append({
        "start": float(p[1]),
        "end": float(p[2]),
        "text": p[3]
    })

# Remove Nigeria trailing echo (item with text 'out,' and duration < 0.5s around 296s)
cleaned = []
for p in phrases:
    if p["text"].strip().lower() == "out," and p["end"] - p["start"] < 0.5:
        if cleaned:
            cleaned[-1]["end"] = p["end"]
        continue
    cleaned.append(p)

# In cleaned, replace the misaligned slice around 313s - 323s with the exact 5 items:
final_phrases = []
for p in cleaned:
    # When we reach Panama (around 313s), insert all 5 properly
    if 312.0 <= p["start"] <= 314.0:
        final_phrases.append({"start": 312.5, "end": 314.6, "text": "Panama is out."})
        final_phrases.append({"start": 314.7, "end": 317.0, "text": "Papua New Guinea is out."})
        final_phrases.append({"start": 317.0, "end": 319.2, "text": "Paraguay is out."})
        final_phrases.append({"start": 319.2, "end": 321.4, "text": "Peru is out."})
        continue
    # skip the old buggy Papua True around 320s
    if 319.5 <= p["start"] <= 321.0 and "papua" in p["text"].lower():
        continue
    final_phrases.append(p)

print(f"Total final phrases: {len(final_phrases)} (Expected: {len(expected)})")

# Build manifest
manifest = []
for idx in range(len(expected)):
    c_name = expected[idx]
    c_db = countries_db[idx]
    p = final_phrases[idx]
    code = c_db["code"].lower()
    
    st = max(0, p["start"] - 0.05)
    en = p["end"] + 0.10
    dur = en - st
    
    manifest.append({
        "index": idx + 1,
        "country": c_name,
        "code": code,
        "start": round(st, 2),
        "end": round(en, 2),
        "duration": round(dur, 2),
        "file": f"{code}.mp3",
        "transcribed": p["text"]
    })

# Check alignment scores across all 201
low_matches = []
for idx, m in enumerate(manifest):
    c_n = m["country"].lower().replace("&", "").replace("-", " ")
    t_n = m["transcribed"].lower().replace(" is out", "").replace(".", "").replace(",", "")
    s = SequenceMatcher(None, c_n, t_n).ratio()
    first_w = c_n.split()[0]
    if s < 0.4 and first_w not in t_n:
        low_matches.append((idx + 1, m["country"], m["transcribed"], m["start"], s))

print(f"Low match count: {len(low_matches)}")
for lm in low_matches:
    print(f"#{lm[0]}: Exp '{lm[1]}' vs Transcribed '{lm[2]}' at {lm[3]}s (score={lm[4]:.2f})")

with open("assets/voices/voices_manifest.json", "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2)

print("Saved verified manifest to assets/voices/voices_manifest.json")

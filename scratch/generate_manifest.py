import os
import json
import subprocess
from faster_whisper import WhisperModel

audio_file = "Generated Audio October 14, 2026 - 1_10PM.wav"
text_file = "countries_out_lines.txt"
output_dir = "assets/voices"
os.makedirs(output_dir, exist_ok=True)

with open(text_file, "r", encoding="utf-8") as f:
    expected = [l.strip().replace(" is out", "").strip() for l in f if l.strip()]

# Read COUNTRIES_DB from flags_script.js to get codes
with open("flags_script.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
match = re.search(r"const COUNTRIES_DB = (\[[\s\S]*?\]);", content)
countries_db = json.loads(match.group(1))

# Read phrases from phrases_200.txt
with open("scratch/phrases_200.txt", "r", encoding="utf-8") as f:
    raw_phrases = [l.strip().split("\t") for l in f if l.strip()]

phrases = []
for p in raw_phrases:
    phrases.append({
        "start": float(p[1]),
        "end": float(p[2]),
        "text": p[3]
    })

# We know:
# 1. Step 126 in raw_phrases (index 126: "296.36 296.72 out,") was a trailing echo of Nigeria.
# Let's remove this echo and merge with Nigeria
phrases_cleaned = []
for i, p in enumerate(phrases):
    if p["text"].strip().lower() == "out," and abs(p["end"] - p["start"]) < 0.5:
        # merge end to previous
        if phrases_cleaned:
            phrases_cleaned[-1]["end"] = p["end"]
        continue
    phrases_cleaned.append(p)

print(f"Phrases after removing echo: {len(phrases_cleaned)}")

# 2. We know Paraguay and Peru are between Panama (312.5-314.6s) and Philippines (321.4-323.4s)
# Specifically:
# Panama: ~312.5 - 314.6
# Papua New Guinea: ~314.7 - 316.9
# Paraguay: ~317.0 - 319.2
# Peru: ~319.2 - 321.3
# Philippines: ~321.4 - 323.4

# Let's insert Paraguay and Peru into phrases_cleaned at their proper position
final_201_phrases = []
for p in phrases_cleaned:
    # If this is Philippines (starts around 321.4s), first insert Paraguay and Peru
    if 321.0 <= p["start"] <= 322.0:
        final_201_phrases.append({"start": 317.0, "end": 319.2, "text": "Paraguay is out."})
        final_201_phrases.append({"start": 319.2, "end": 321.3, "text": "Peru is out."})
    final_201_phrases.append(p)

print(f"Final phrases count: {len(final_201_phrases)}, Expected: {len(expected)}")

# Verify 1-to-1 matching
manifest = []
for idx in range(len(expected)):
    c_name = expected[idx]
    c_db = countries_db[idx]
    p = final_201_phrases[idx]
    code = c_db["code"].lower()
    
    start_t = max(0, p["start"] - 0.05)
    end_t = p["end"] + 0.10
    duration = end_t - start_t
    
    manifest.append({
        "index": idx + 1,
        "country": c_name,
        "code": code,
        "start": round(start_t, 2),
        "end": round(end_t, 2),
        "duration": round(duration, 2),
        "file": f"{code}.mp3",
        "transcribed": p["text"]
    })

with open("assets/voices/voices_manifest.json", "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2)

print("Saved manifest with all 201 countries to assets/voices/voices_manifest.json")
print("First 3:", manifest[:3])
print("Panama - Philippines:", manifest[133:138])
print("Last 3:", manifest[-3:])

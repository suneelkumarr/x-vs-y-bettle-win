import os
import json
import subprocess
import time

audio_file = "Generated Audio October 14, 2026 - 1_10PM.wav"
text_file = "countries_out_lines.txt"
output_dir = "assets/voices"
os.makedirs(output_dir, exist_ok=True)

with open(text_file, "r", encoding="utf-8") as f:
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

# Remove Nigeria trailing echo (around 296s)
cleaned = []
for p in phrases:
    if p["text"].strip().lower() == "out," and p["end"] - p["start"] < 0.5:
        if cleaned:
            cleaned[-1]["end"] = p["end"]
        continue
    cleaned.append(p)

# Insert the exact validated slice for Panama, Papua New Guinea, Paraguay, Peru
final_phrases = []
for p in cleaned:
    if 312.0 <= p["start"] <= 314.0:
        final_phrases.append({"start": 312.5, "end": 314.6, "text": "Panama is out."})
        final_phrases.append({"start": 314.7, "end": 317.0, "text": "Papua New Guinea is out."})
        final_phrases.append({"start": 317.0, "end": 319.2, "text": "Paraguay is out."})
        final_phrases.append({"start": 319.2, "end": 321.4, "text": "Peru is out."})
        continue
    if 319.5 <= p["start"] <= 321.0 and "papua" in p["text"].lower():
        continue
    final_phrases.append(p)

# Fix Honduras (#73, index 72)
final_phrases[72] = {"start": 158.45, "end": 160.18, "text": "Honduras is out."}

assert len(final_phrases) == 201, f"Expected 201, got {len(final_phrases)}"

manifest = []
for idx in range(len(expected)):
    c_name = expected[idx]
    c_db = countries_db[idx]
    p = final_phrases[idx]
    code = c_db["code"].lower()
    
    st = max(0, p["start"] - 0.04)
    en = p["end"] + 0.08
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

with open(os.path.join(output_dir, "voices_manifest.json"), "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2)

print(f"Manifest written for {len(manifest)} countries.")
print("Now slicing all 201 countries into assets/voices/<code.mp3>...")

t0 = time.time()
sliced_count = 0

for item in manifest:
    code = item["code"]
    st = item["start"]
    dur = item["duration"]
    out_path = os.path.join(output_dir, f"{code}.mp3")
    
    # Fast ffmpeg slice to high-quality lightweight mp3
    cmd = [
        "ffmpeg", "-y",
        "-ss", str(st),
        "-i", audio_file,
        "-t", str(dur),
        "-c:a", "libmp3lame",
        "-b:a", "96k",
        "-ar", "24000",
        "-ac", "1",
        out_path
    ]
    res = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if res.returncode == 0 and os.path.exists(out_path):
        sliced_count += 1
    else:
        print(f"Failed to slice: {item['country']} ({code})")

print(f"Successfully sliced {sliced_count} of {len(manifest)} voice files in {time.time()-t0:.2f}s!")

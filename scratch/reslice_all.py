import os
import json
import subprocess
import time

audio_file = "Generated Audio October 14, 2026 - 1_10PM.wav"
manifest_path = "assets/voices/voices_manifest.json"
output_dir = "assets/voices"

with open(manifest_path, "r", encoding="utf-8") as f:
    manifest = json.load(f)

print(f"Loaded manifest with {len(manifest)} countries.")
t0 = time.time()
success = 0
failed = []

for item in manifest:
    code = item["code"]
    st = item["start"]
    dur = item["duration"]
    out_path = os.path.join(output_dir, f"{code}.mp3")
    
    cmd = [
        "ffmpeg", "-y",
        "-i", audio_file,
        "-ss", str(st),
        "-t", str(dur),
        "-c:a", "libmp3lame",
        "-b:a", "96k",
        "-ar", "24000",
        "-ac", "1",
        out_path
    ]
    res = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if res.returncode == 0 and os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
        success += 1
    else:
        sz = os.path.getsize(out_path) if os.path.exists(out_path) else 0
        failed.append((item["country"], code, sz))

print(f"Sliced {success} of {len(manifest)} in {time.time()-t0:.2f}s!")
if failed:
    print(f"Failed count: {len(failed)}")
    for f_item in failed:
        print(f"Failed: {f_item[0]} ({f_item[1]}) size={f_item[2]} bytes")
else:
    print("ALL 201 AUDIO FILES SLICED AND VALIDATED (> 1KB) SUCCESSFULLY!")

import re
from faster_whisper import WhisperModel

audio_file = "Generated Audio October 14, 2026 - 1_10PM.wav"
with open("countries_out_lines.txt", "r", encoding="utf-8") as f:
    expected = [l.strip() for l in f if l.strip()]

model = WhisperModel("base.en", device="cpu", compute_type="int8")
segments, _ = model.transcribe(audio_file, word_timestamps=True, beam_size=5)

all_words = []
for s in segments:
    for w in s.words:
        all_words.append(w)

print(f"Total words transcribed: {len(all_words)}")
out_words = [w for w in all_words if "out" in w.word.lower()]
print(f"Words containing 'out': {len(out_words)}")

# Look for 'is' not followed by 'out'
for idx, w in enumerate(all_words):
    if w.word.strip().lower() in ["is", "it's"]:
        following = " ".join([all_words[j].word.strip() for j in range(idx+1, min(idx+4, len(all_words)))])
        if "out" not in following.lower():
            print(f"At {w.start:.2f}s: '{w.word.strip()}' followed by: {following}")

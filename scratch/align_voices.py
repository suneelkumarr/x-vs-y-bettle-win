import os
import re
from faster_whisper import WhisperModel

audio_file = "Generated Audio October 14, 2026 - 1_10PM.wav"
text_file = "countries_out_lines.txt"

with open(text_file, "r", encoding="utf-8") as f:
    expected_lines = [l.strip() for l in f if l.strip()]

print(f"Loaded {len(expected_lines)} expected country lines.")

print("Loading Whisper model...")
model = WhisperModel("base.en", device="cpu", compute_type="int8")

print("Transcribing with word timestamps...")
segments, info = model.transcribe(audio_file, word_timestamps=True, beam_size=5)

phrases = []
current_words = []
start_t = None

for s in segments:
    for w in s.words:
        if start_t is None:
            start_t = w.start
        current_words.append(w.word)
        w_clean = re.sub(r"[^\w]", "", w.word).lower()
        if w_clean == "out":
            text = "".join(current_words).strip()
            end_t = w.end
            phrases.append({
                "start": start_t,
                "end": end_t,
                "text": text
            })
            current_words = []
            start_t = None

print(f"Detected {len(phrases)} phrases ending in 'out'. Expected: {len(expected_lines)}")
if len(phrases) != len(expected_lines):
    print("Warning: phrase count does not match expected lines exactly! Examining...")
    for idx, p in enumerate(phrases[:20]):
        print(f"#{idx+1:03d} [{p['start']:.2f}s - {p['end']:.2f}s]: {p['text']}")
else:
    print("SUCCESS: EXACT 201 PHRASES DETECTED!")
    for idx in [0, 1, 2, 99, 100, 199, 200]:
        p = phrases[idx]
        print(f"#{idx+1:03d} [{p['start']:.2f}s - {p['end']:.2f}s] Expected: '{expected_lines[idx]}' -> Transcribed: '{p['text']}'")

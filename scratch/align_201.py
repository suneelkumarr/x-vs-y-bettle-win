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

phrases = []
curr_words = []
start_t = None

for w in all_words:
    if start_t is None:
        start_t = w.start
    curr_words.append(w)
    clean = re.sub(r"[^\w]", "", w.word).lower()
    if clean in ["out", "outs", "doubt"]:
        phrase_text = " ".join([cw.word.strip() for cw in curr_words])
        phrases.append({
            "start": start_t,
            "end": w.end,
            "text": phrase_text
        })
        curr_words = []
        start_t = None

if curr_words and start_t is not None:
    phrase_text = " ".join([cw.word.strip() for cw in curr_words])
    phrases.append({
        "start": start_t,
        "end": curr_words[-1].end,
        "text": phrase_text
    })

print(f"Total phrases found: {len(phrases)}")

with open("scratch/phrases_found.txt", "w", encoding="utf-8") as out_f:
    for i, p in enumerate(phrases):
        out_f.write(f"{i+1}\t{p['start']:.2f}\t{p['end']:.2f}\t{p['text']}\n")

print("Written to scratch/phrases_found.txt")

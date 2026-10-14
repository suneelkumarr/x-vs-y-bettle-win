import re
from faster_whisper import WhisperModel

audio_file = "Generated Audio October 14, 2026 - 1_10PM.wav"
with open("countries_out_lines.txt", "r", encoding="utf-8") as f:
    expected = [l.strip() for l in f if l.strip()]

model = WhisperModel("base.en", device="cpu", compute_type="int8")
segments, _ = model.transcribe(audio_file, word_timestamps=True, beam_size=5, condition_on_previous_text=False)

all_words = []
for s in segments:
    for w in s.words:
        all_words.append(w)

phrases = []
curr = []
start_t = None
for w in all_words:
    if start_t is None:
        start_t = w.start
    curr.append(w)
    clean = re.sub(r"[^\w]", "", w.word).lower()
    if clean in ["out", "outs"]:
        p_text = " ".join([cw.word.strip() for cw in curr])
        phrases.append({
            "start": start_t,
            "end": w.end,
            "text": p_text
        })
        curr = []
        start_t = None

print(f"Total phrases found: {len(phrases)}")

with open("scratch/phrases_200.txt", "w", encoding="utf-8") as out:
    for i, p in enumerate(phrases):
        out.write(f"{i+1}\t{p['start']:.2f}\t{p['end']:.2f}\t{p['text']}\n")

# Match with expected
from difflib import SequenceMatcher
def sim(a, b): return SequenceMatcher(None, a.lower(), b.lower()).ratio()

exp_i = 0
found_i = 0
while exp_i < len(expected) and found_i < len(phrases):
    exp_c = expected[exp_i].replace(" is out", "")
    f_c = phrases[found_i]["text"].replace(" is out", "").replace(",", "").strip()
    s = sim(exp_c, f_c)
    if s > 0.4:
        exp_i += 1
        found_i += 1
    else:
        # Check next in found or next in expected
        s_next_f = sim(exp_c, phrases[min(found_i+1, len(phrases)-1)]["text"].replace(" is out", ""))
        s_next_e = sim(expected[min(exp_i+1, len(expected)-1)].replace(" is out", ""), f_c)
        if s_next_e > s_next_f:
            print(f"MISSING in audio: exp #{exp_i+1} '{expected[exp_i]}' (found: '{phrases[found_i]['text']}' at {phrases[found_i]['start']:.2f}s)")
            exp_i += 1
        else:
            print(f"EXTRA in audio: found #{found_i+1} '{phrases[found_i]['text']}' (exp: '{expected[exp_i]}')")
            found_i += 1

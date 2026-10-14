with open('countries_out_lines.txt', 'r', encoding='utf-8') as f:
    expected = [l.strip().replace(' is out', '').lower() for l in f if l.strip()]

with open('scratch/phrases_200.txt', 'r', encoding='utf-8') as f:
    raw_found = [l.strip().split('\t') for l in f if l.strip()]
    found = [r[3].replace(' is out', '').replace('.', '').replace(',', '').strip().lower() for r in raw_found]

from difflib import SequenceMatcher

print(f"Expected: {len(expected)}, Found: {len(found)}")

i = 0
j = 0
while i < len(expected) and j < len(found):
    e = expected[i]
    f = found[j]
    sim = SequenceMatcher(None, e, f).ratio()
    if sim > 0.45 or e in f or f in e:
        i += 1
        j += 1
    else:
        sim_skip_e = SequenceMatcher(None, expected[min(i+1, len(expected)-1)], f).ratio()
        sim_skip_f = SequenceMatcher(None, e, found[min(j+1, len(found)-1)]).ratio()
        if sim_skip_e > sim_skip_f:
            print(f"MISSING in audio at index {i+1}: expected '{expected[i]}' but found '{f}' [t={raw_found[j][1]}s]")
            i += 1
        else:
            print(f"EXTRA in audio at found index {j+1}: found '{f}' but expected '{e}' [t={raw_found[j][1]}s]")
            j += 1

if i < len(expected):
    for idx in range(i, len(expected)):
        print(f"MISSING at end: {idx+1} '{expected[idx]}'")

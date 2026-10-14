from difflib import SequenceMatcher

with open('countries_out_lines.txt', 'r', encoding='utf-8') as f:
    expected = [l.strip().replace(' is out', '').lower() for l in f if l.strip()]

with open('scratch/phrases_found.txt', 'r', encoding='utf-8') as f:
    found = [l.strip().split('\t') for l in f if l.strip()]

def sim(a, b):
    return SequenceMatcher(None, a, b).ratio()

# Match each expected to the best matching found phrase in order
exp_i = 0
found_i = 0
matches = []

while exp_i < len(expected) and found_i < len(found):
    exp_c = expected[exp_i]
    best_j = -1
    best_score = 0
    # Search within the next 4 phrases
    for j in range(found_i, min(found_i + 5, len(found))):
        f_text = found[j][3].lower().replace(' is out', '').replace(',', '').strip()
        s = sim(exp_c, f_text)
        if s > best_score:
            best_score = s
            best_j = j
    
    if best_score > 0.45:
        f = found[best_j]
        matches.append((exp_i, best_j, expected[exp_i], f[3], f[1], f[2]))
        found_i = best_j + 1
        exp_i += 1
    else:
        print(f"COULD NOT MATCH: exp #{exp_i+1} '{expected[exp_i]}' around found #{found_i+1}")
        exp_i += 1

print(f"Matched {len(matches)} out of {len(expected)} expected countries!")
matched_exp_indices = set(m[0] for m in matches)
missing = [expected[i] for i in range(len(expected)) if i not in matched_exp_indices]
print(f"Missing from matches ({len(missing)}): {missing}")

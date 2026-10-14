with open('countries_out_lines.txt', 'r', encoding='utf-8') as f:
    expected = [l.strip() for l in f if l.strip()]

with open('scratch/phrases_200.txt', 'r', encoding='utf-8') as f:
    found = [l.strip().split('\t') for l in f if l.strip()]

print(f"Expected: {len(expected)}")
print(f"Found: {len(found)}")

# Let's write a simple dynamic programming / needleman-wunsch alignment based on text similarity
from difflib import SequenceMatcher

def score(exp, fnd):
    e = exp.replace(" is out", "").lower()
    f = fnd.replace(" is out", "").replace(".", "").replace(",", "").lower()
    # bonus if first 4 letters match
    if len(e) >= 4 and len(f) >= 4 and e[:4] == f[:4]:
        return 1.0 + SequenceMatcher(None, e, f).ratio()
    return SequenceMatcher(None, e, f).ratio()

# DP Alignment
N = len(expected)
M = len(found)

dp = [[0]*(M+1) for _ in range(N+1)]
back = [[(0,0)]*(M+1) for _ in range(N+1)]

GAP = -0.3

for i in range(1, N+1):
    dp[i][0] = i * GAP
    back[i][0] = (i-1, 0)
for j in range(1, M+1):
    dp[0][j] = j * GAP
    back[0][j] = (0, j-1)

for i in range(1, N+1):
    for j in range(1, M+1):
        s_match = score(expected[i-1], found[j-1][3])
        cand1 = dp[i-1][j-1] + (s_match if s_match > 0.4 else -0.5)
        cand2 = dp[i-1][j] + GAP
        cand3 = dp[i][j-1] + GAP
        
        best = max(cand1, cand2, cand3)
        dp[i][j] = best
        if best == cand1:
            back[i][j] = (i-1, j-1)
        elif best == cand2:
            back[i][j] = (i-1, j)
        else:
            back[i][j] = (i, j-1)

# Backtrack
cur_i, cur_j = N, M
alignment = []
while cur_i > 0 or cur_j > 0:
    prev_i, prev_j = back[cur_i][cur_j]
    alignment.append((cur_i, cur_j, prev_i, prev_j))
    cur_i, cur_j = prev_i, prev_j

alignment.reverse()

print(f"Alignment steps: {len(alignment)}")
aligned_pairs = []
for cur_i, cur_j, prev_i, prev_j in alignment:
    if cur_i > prev_i and cur_j > prev_j:
        # Match
        exp_txt = expected[prev_i]
        fnd_item = found[prev_j]
        aligned_pairs.append({
            "exp_idx": prev_i,
            "country": exp_txt.replace(" is out", "").strip(),
            "found_idx": prev_j,
            "transcription": fnd_item[3],
            "start": float(fnd_item[1]),
            "end": float(fnd_item[2]),
            "status": "matched"
        })
    elif cur_i > prev_i:
        # Expected skipped
        aligned_pairs.append({
            "exp_idx": prev_i,
            "country": expected[prev_i].replace(" is out", "").strip(),
            "found_idx": None,
            "transcription": "",
            "start": None,
            "end": None,
            "status": "missing_in_whisper"
        })
    else:
        # Extra found
        aligned_pairs.append({
            "exp_idx": None,
            "country": "",
            "found_idx": prev_j,
            "transcription": found[prev_j][3],
            "start": float(found[prev_j][1]),
            "end": float(found[prev_j][2]),
            "status": "extra_in_whisper"
        })

print("\n=== Alignment Result Summary ===")
missing_count = sum(1 for p in aligned_pairs if p["status"] == "missing_in_whisper")
extra_count = sum(1 for p in aligned_pairs if p["status"] == "extra_in_whisper")
matched_count = sum(1 for p in aligned_pairs if p["status"] == "matched")

print(f"Matched: {matched_count}, Missing in Whisper: {missing_count}, Extra in Whisper: {extra_count}")

for idx, p in enumerate(aligned_pairs):
    if p["status"] != "matched":
        print(f"Step {idx}: {p['status']} -> exp: '{p['country']}' fnd: '{p['transcription']}'")

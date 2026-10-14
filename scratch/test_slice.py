from faster_whisper import WhisperModel
import subprocess

windows = [
    ('panama', 312.5, 314.6),
    ('papua_new_guinea', 314.7, 317.0),
    ('paraguay', 317.1, 319.3),
    ('peru', 319.3, 321.4)
]

model = WhisperModel('base.en', device='cpu', compute_type='int8')

for name, st, en in windows:
    subprocess.run(['ffmpeg', '-y', '-ss', str(st), '-to', str(en), '-i', 'Generated Audio October 14, 2026 - 1_10PM.wav', f'scratch/{name}.wav'], capture_output=True)
    segs, _ = model.transcribe(f'scratch/{name}.wav')
    text = ' '.join([s.text for s in segs]).strip()
    print(f"{name} ({st}s-{en}s): '{text}'")

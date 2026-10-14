from faster_whisper import WhisperModel

model = WhisperModel('base.en', device='cpu', compute_type='int8')

samples = ['af', 'in', 'us', 'br', 'hk', 'gb', 'de', 'jp']

for c in samples:
    p = f'assets/voices/{c}.mp3'
    segs, _ = model.transcribe(p)
    text = ' '.join([s.text for s in segs]).strip()
    print(f"{c}.mp3 -> '{text}'")

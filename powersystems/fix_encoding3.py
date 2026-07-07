import sys

sequences = {
    b'\xc3\xa2\xe2\x80\xa2\xc2\x90': '═'.encode('utf-8'),
    b'\xc3\xb0\xc5\xb8\xe2\x80\x9d\xc2\x8d': '🔍'.encode('utf-8'),
    b'\xc3\xa2\xc5\xa1\xc2\xa0\xc3\xaf\xc2\xb8\xc2\x8f': '⚠️'.encode('utf-8'),
    b'\xc3\xb0\xc5\xb8\xe2\x80\x9c\xc2\x90': '📌'.encode('utf-8'),
    b'\xc3\xa2\xc5\xbe\xc2\xa1\xc3\xaf\xc2\xb8\xc2\x8f': '➡️'.encode('utf-8'),
    b'\xc3\xa2\xe2\x80\xa0\xc2\x90': '←'.encode('utf-8')
}

with open('powersystem74-86_fixed.html', 'rb') as f:
    content = f.read()

count = 0
for seq, replacement in sequences.items():
    if seq in content:
        n = content.count(seq)
        content = content.replace(seq, replacement)
        count += n
        print(f'Replaced {n} occurrences of {seq}')

if count > 0:
    with open('powersystem74-86_fixed.html', 'wb') as f:
        f.write(content)
    print(f'Fixed {count} remaining mojibake sequences.')
else:
    print('No remaining mojibake sequences found.')

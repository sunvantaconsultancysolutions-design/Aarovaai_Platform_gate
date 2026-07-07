import sys

sys.stdout.reconfigure(encoding='utf-8')

replacements = {
    'â• ': '═',
    'â”€': '─',
    'âˆ’': '−',
    'â–¸': '▸',
    'ðŸ’¡': '💡',
    'âš ï¸ ': '⚠️',
    'ðŸ” ': '🔍',
    'ðŸ§ ': '🧠',
    'ðŸ”‘': '🔑',
    'Â·': '·',
    'Â§': '§',
    'âœ•': '✕',
    'â‰¤': '≤',
    'â‰ª': '≪',
    'â‰ˆ': '≈',
    'Â²': '²',
    'â€™': '’',
    'â€œ': '“',
    'â€ ': '”',
    'â†’': '→',
    'âˆ': '−', 
    'âˆN': '−N' 
}

with open('e:/powersystems/powersystem74-86.html', 'r', encoding='utf-8') as f:
    text = f.read()

count = 0
for k, v in replacements.items():
    if k in text:
        n = text.count(k)
        text = text.replace(k, v)
        print(f'Replaced {n} occurrences of {k.encode("utf-8")} -> {v.encode("utf-8")}')
        count += n

if count > 0:
    with open('e:/powersystems/powersystem74-86_fixed.html', 'w', encoding='utf-8') as f:
        f.write(text)
    print(f'Total replacements: {count}')
else:
    print('No mojibake found to replace.')

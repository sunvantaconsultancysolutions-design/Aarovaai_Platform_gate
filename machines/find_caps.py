with open('e:/machines/ch24.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'svg-cap' in line and 'Fig ' in line:
        print(f'{i+1}: {line.encode("ascii", "ignore").decode("ascii").strip()[:150]}')

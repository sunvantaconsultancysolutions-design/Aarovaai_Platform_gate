import re

filepath = 'e:/powersystems/powersystem74-86.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Chapter References
content = content.replace('<span class="hbadge">Ch.3</span>', '<span class="hbadge">Ch.7</span>')
content = content.replace('Chapter 3 of 8', 'Chapter 7 of 8')
content = content.replace('<span class="pp">3 / 8</span>', '<span class="pp">7 / 8</span>')

# 2. Update TOC items: <span class="toc-n">§1</span> -> <span class="toc-n">§7.1</span>
def replace_toc(match):
    num = match.group(1)
    return f'<span class="toc-n">§7.{num}</span>'

content, toc_count = re.subn(r'<span class="toc-n">§(\d+)</span>', replace_toc, content)
print(f'Replaced {toc_count} TOC items.')

# 3. Update Section Headers: <span class="sec-num">§ 01</span> -> <span class="sec-num">§ 7.1</span>
def replace_header(match):
    num = int(match.group(1)) # This parses '01' to 1
    return f'<span class="sec-num">§ 7.{num}</span>'

content, header_count = re.subn(r'<span class="sec-num">§ (\d{2})</span>', replace_header, content)
print(f'Replaced {header_count} section headers.')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done.')

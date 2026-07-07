import re
import codecs
import os

filepath = r'e:\powersystems\powersystem28-36.html'

with open(filepath, 'rb') as f:
    raw = f.read()

enc = 'utf-16' if b'\x00' in raw else 'utf-8'

with open(filepath, 'r', encoding=enc) as f:
    content = f.read()

svgs = re.findall(r'<svg.*?</svg>', content, re.DOTALL)
print(f'Found {len(svgs)} SVGs')

if len(svgs) == 6:
    for i, svg in enumerate(svgs):
        img_tag = f'<img src="images/ch3/fig3.{i+1}.png" alt="Fig 3.{i+1}" style="width:100%; height:auto;">'
        content = content.replace(svg, img_tag)
    
    with open(filepath, 'w', encoding=enc) as f:
        f.write(content)
    print('Successfully replaced all 6 SVGs')
else:
    print('Not replacing because I did not find exactly 6 SVGs')

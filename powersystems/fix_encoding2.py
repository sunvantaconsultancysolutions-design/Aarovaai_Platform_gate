import re
import sys

def fix_mojibake_file(filepath):
    with open(filepath, 'rb') as f:
        content = f.read()
        
    # Find all fragments that look like mojibake starting with \xc3\xa2 (â) or \xc3\xb0 (ð) or \xc3\x82 (Â)
    # The regex matches \xc3 followed by \xa2, \xb0, or \x82, and then a sequence of non-ascii bytes.
    # We will use re.sub with a replacement function.
    
    def replacer(match):
        raw_bytes = match.group(0)
        try:
            # Decode to get the mojibake string like "â• "
            mojibake_str = raw_bytes.decode('utf-8')
            # Encode as cp1252 to recover original bytes
            orig_bytes = mojibake_str.encode('cp1252')
            # Decode as utf-8 to get the proper string like "═"
            fixed_str = orig_bytes.decode('utf-8')
            return fixed_str.encode('utf-8')
        except Exception:
            # If any step fails, return original bytes
            return raw_bytes
            
    # We match \xc3 followed by \xa2 or \xb0 or \x82, and then one or more bytes > 127
    # Note: re on bytes requires byte patterns.
    # A single utf-8 continuation byte is [\x80-\xbf], but it could be multiple characters.
    # Let's just find the exact sequences we identified earlier and fix them.

    sequences_to_fix = [
        b'\xc3\xa2\xe2\x80\xa2\xc2\x90', # â• 
        b'\xc3\xb0\xc5\xb8\xe2\x80\x9d\xc2\x8d', # ðŸ” 
        b'\xc3\xa2\xc5\xa1\xc2\xa0\xc3\xaf\xc2\xb8\xc2\x8f', # âš ï¸ 
        b'\xc3\xa2\xc5\x93\xe2\x80\xa6', # âœ…
        b'\xc3\xb0\xc5\xb8\xe2\x80\x9c\xc2\x90', # ðŸ“ 
        b'\xc3\xa2\xc5\xa1\xc2\xa1', # âš¡
        b'\xc3\xa2\xc5\x93\xe2\x80\x9c', # âœ“
        b'\xc3\xb0\xc5\xb8\xc2\xa4\xe2\x80\x93', # ðŸ¤–
        b'\xc3\xa2\xe2\x82\xac\xc2\xa6', # â€¦
        b'\xc3\xa2\xc5\xbe\xc2\xa1\xc3\xaf\xc2\xb8\xc2\x8f', # âž¡ï¸ 
        b'\xc3\xa2\xe2\x80\xa0\xc2\x90' # â† 
    ]
    
    count = 0
    for seq in sequences_to_fix:
        if seq in content:
            # fix it
            try:
                fixed_bytes = seq.decode('utf-8').encode('cp1252').decode('utf-8').encode('utf-8')
                n = content.count(seq)
                content = content.replace(seq, fixed_bytes)
                count += n
            except Exception as e:
                print(f"Failed on {seq}: {e}")

    if count > 0:
        with open('powersystem74-86_fixed.html', 'wb') as f:
            f.write(content)
        print(f"Fixed {count} remaining mojibake sequences.")
    else:
        print("No matches found.")

fix_mojibake_file('powersystem74-86_fixed.html')

import os
# pyrefly: ignore [missing-import]
from PyPDF2 import PdfReader, PdfWriter

SOURCE = r"E:\measurements\Measurements by ACE ACADEMY.pdf"

CHAPTERS = [
   
   ("Measurement of Flow and Viscosity",157,170),
   ("Intermediate Quantity Measurements",174,176)
    
]

reader = PdfReader(SOURCE)

output_folder = r"E:\measurements\output"
os.makedirs(output_folder, exist_ok=True)

for idx, (title, start, end) in enumerate(CHAPTERS, start=1):
    writer = PdfWriter()

    for p in range(start - 1, end):
        writer.add_page(reader.pages[p])

    filename = os.path.join(
        output_folder,
        f"Chapter_{idx:02d}_{title.replace(' ', '_')}.pdf"
    )

    with open(filename, "wb") as f:
        writer.write(f)

    print("Saved:", filename)
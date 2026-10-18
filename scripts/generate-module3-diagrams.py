"""Draw Module 3's instructional diagrams as standalone SVG files (stdlib only)."""
from html import escape
from pathlib import Path
import json
import xml.etree.ElementTree as ET

OUT = Path(__file__).resolve().parents[1] / 'public/notes/cse/s1/python/module-3/assets'
OUT.mkdir(parents=True, exist_ok=True)
STROKE, FILL, INK = '#28765a', '#edf6f0', '#173f35'

def label(x, y, value, size=19):
    return f'<text x="{x}" y="{y}" text-anchor="middle" font-size="{size}" fill="{INK}">{escape(str(value))}</text>'

def box(x, y, value, width=250, kind='process'):
    left, top, height = x-width/2, y-30, 60
    style = f'fill="{FILL}" stroke="{STROKE}" stroke-width="2.5"'
    if kind == 'decision':
        body = f'<polygon points="{x},{y-50} {x+width/2},{y} {x},{y+50} {left},{y}" {style}/>'
    elif kind == 'io':
        body = f'<polygon points="{left+20},{top} {left+width},{top} {left+width-20},{top+height} {left},{top+height}" {style}/>'
    else:
        body = f'<rect x="{left}" y="{top}" width="{width}" height="{height}" rx="{30 if kind=="terminal" else 0}" {style}/>'
        if kind == 'module':
            body += f'<path d="M{left+15},{top}v60 M{left+width-15},{top}v60" stroke="{STROKE}" stroke-width="2.5"/>'
    return body + label(x, y+6, value)

def arrow(points, caption='', caption_position=None):
    body = f'<polyline points="{" ".join(f"{x},{y}" for x,y in points)}" fill="none" stroke="{STROKE}" stroke-width="2.3" marker-end="url(#arrow)"/>'
    if caption_position:
        body += label(*caption_position, caption, 16)
    return body

def save(name, title, description, body, height):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="720" height="{height}" viewBox="0 0 720 {height}" role="img" aria-labelledby="title desc">
<title id="title">{escape(title)}</title><desc id="desc">{escape(description)}</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="{STROKE}"/></marker></defs>
<rect width="720" height="{height}" rx="16" fill="white"/>
<g font-family="Arial, Helvetica, sans-serif">{label(360,38,title,24)}{body}</g></svg>'''
    (OUT / f'{name}.svg').write_text(svg+'\n')

body = box(360,95,'Start',kind='terminal') + box(360,195,'Read age',kind='io') + box(360,325,'age >= 18?',kind='decision')
body += arrow([(360,125),(360,163)]) + arrow([(360,225),(360,273)])
body += box(175,465,'Print Adult',260,'io') + box(545,465,'Print Minor',260,'io')
body += arrow([(235,325),(175,325),(175,433)],'True',(180,305)) + arrow([(485,325),(545,325),(545,433)],'False',(540,305))
body += box(360,600,'Continue / stop',kind='terminal')
body += arrow([(175,495),(175,540),(360,540),(360,568)]) + arrow([(545,495),(545,540),(360,540),(360,568)])
save('selection','Two-way selection','If age is at least 18, print Adult; otherwise print Minor. The two branches rejoin after their actions.',body,665)

body = label(180,95,'Caller',21)+label(540,95,'Function',21)
body += box(180,155,'a = 6; b = 8',270)+box(180,265,'add_numbers(a, b)',270,'module')
body += box(540,155,'first = 6; second = 8',290)+box(540,265,'total = first + second',290)+box(540,375,'return total',290)
body += box(180,375,'answer = 14',270)+box(180,470,'print(answer)',270,'io')
body += arrow([(180,185),(180,233)])+arrow([(315,265),(350,265),(350,155),(393,155)],'Arguments',(356,128))
body += arrow([(540,185),(540,233)])+arrow([(540,295),(540,343)])
body += arrow([(395,375),(317,375)],'Result',(356,355))+arrow([(180,405),(180,438)])
save('function-call','Arguments, call, and return','The caller supplies 6 and 8 to add_numbers. The function computes 14, returns it, and the caller prints the received answer.',body,535)

body=label(360,76,'Each cell is one indexed character, not a byte.',17)
for i,char in enumerate('Hello World'):
    x=52+i*56
    body+=label(x+28,112,i,17)
    body+=f'<rect x="{x}" y="128" width="56" height="62" fill="{FILL}" stroke="{STROKE}"/>'
    body+=label(x+28,166,char if char!=' ' else 'space',15 if char==' ' else 22)
    body+=label(x+28,222,i-11,17)
body+=label(360,267,'Positive indices above · negative indices below',17)
save('string-indices','Indexing "Hello World"','The eleven characters are indexed from zero to ten or from minus eleven to minus one. The space is index five. There is no extra null terminator cell.',body,300)

body=label(150,112,'values',22)+label(150,192,'alias',22)+label(150,317,'copy',22)
body+=box(490,155,'[10, 20, 30]',310)+box(490,310,'[10, 20, 30]',310)
body+=arrow([(205,105),(270,105),(270,155),(333,155)])+arrow([(205,185),(270,185),(270,155),(333,155)])+arrow([(205,310),(333,310)])
body+=label(490,217,'One shared list',17)+label(490,372,'A separate outer list from values[:]',17)
body+=label(360,428,'Nested objects can still be shared by a shallow copy.',17)
save('list-alias-copy','Assignment versus a list slice','values and alias refer to one list. copy refers to a separate outer list created by slicing. A shallow copy can still share nested objects.',body,465)

body=label(360,83,'Column index',17)
for col in range(3):body+=label(230+col*125,115,col,18)
for row in range(2):
    body+=label(105,166+row*75,f'Row {row}',17)
    for col in range(3):
        x=167+col*125;y=130+row*75
        body+=f'<rect x="{x}" y="{y}" width="125" height="75" fill="{FILL}" stroke="{STROKE}"/>'
        body+=label(x+62.5,y+46,row*3+col+1,23)
body+=label(360,320,'shape = (2, 3) · ndim = 2 · size = 6',21)
save('array-shape','A two-dimensional NumPy array','Two rows and three columns contain six values. The value at row zero, column two is three.',body,355)
# Reserve the image dimensions in the reader so lazy loading cannot shift topic links.
sizes = {}
for path in sorted(OUT.glob('*.svg')):
    root = ET.parse(path).getroot()
    sizes[f'/notes/cse/s1/python/module-3/assets/{path.name}'] = {
        'width': int(root.attrib['width']), 'height': int(root.attrib['height'])
    }
# Resolve from the repository root rather than relying on the asset directory depth.
metadata = Path(__file__).resolve().parents[1] / 'src/features/notes/python-module-3/diagramDimensions.ts'
metadata.write_text('// Generated by scripts/generate-module3-diagrams.py.\n'
    + 'export const module3DiagramDimensions: Record<string, { width: number; height: number }> = '
    + json.dumps(sizes, indent=2) + ';\n')
print('Generated 5 Module 3 SVG diagrams and their reader dimensions.')

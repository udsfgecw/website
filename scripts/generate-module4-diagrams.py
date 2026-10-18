"""Draw Module 4's instructional diagrams as standalone SVG files (stdlib only)."""
from html import escape
from pathlib import Path
import json
import random
import xml.etree.ElementTree as ET

OUT = Path(__file__).resolve().parents[1] / 'public/notes/cse/s1/python/module-4/assets'
OUT.mkdir(parents=True, exist_ok=True)
STROKE, FILL, INK = '#28765a', '#edf6f0', '#173f35'
ACCENT, ACCENT_FILL = '#b4561f', '#fbeee3'

def label(x, y, value, size=19, anchor='middle', fill=INK, weight='normal'):
    return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-size="{size}" font-weight="{weight}" fill="{fill}">{escape(str(value))}</text>'

def box(x, y, value, width=250, height=60, fill=FILL, stroke=STROKE, size=19, rx=8):
    return (f'<rect x="{x-width/2}" y="{y-height/2}" width="{width}" height="{height}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="2.5"/>'
            + label(x, y+size*0.33, value, size))

def arrow(points, color=STROKE, dash=False):
    d = ' stroke-dasharray="6 5"' if dash else ''
    return (f'<polyline points="{" ".join(f"{x},{y}" for x,y in points)}" fill="none" stroke="{color}" stroke-width="2.3"{d} '
            f'marker-end="url(#{"arrow-accent" if color == ACCENT else "arrow"})"/>')

def save(name, title, description, body, height):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="720" height="{height}" viewBox="0 0 720 {height}" role="img" aria-labelledby="title desc">
<title id="title">{escape(title)}</title><desc id="desc">{escape(description)}</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="{STROKE}"/></marker><marker id="arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="{ACCENT}"/></marker></defs>
<rect width="720" height="{height}" rx="16" fill="white"/>
<g font-family="Arial, Helvetica, sans-serif">{label(360,38,title,24)}{body}</g></svg>'''
    (OUT / f'{name}.svg').write_text(svg + '\n')

# 1. Brute force on a padlock -------------------------------------------------
body = label(360, 78, 'Try every candidate in order until the lock opens.', 17)
for i, (text, accent) in enumerate([('0000', 0), ('0001', 0), ('0002', 0), ('…', 0), ('9998', 0), ('9999', 1)]):
    x = 70 + i * 116
    body += box(x, 150, text, 90, 56, ACCENT_FILL if accent else FILL, ACCENT if accent else STROKE)
    if i < 5:
        body += arrow([(x+47, 150), (x+69, 150)])
body += label(70, 208, 'first try', 16) + label(650, 208, 'worst case: last try', 16, fill=ACCENT)
body += box(360, 285, 'n digits  →  10ⁿ candidates', 360, 60, size=21)
body += label(360, 350, 'A 4-digit lock has 10⁴ = 10,000 combinations; each extra digit multiplies the work by 10.', 16)
save('brute-force-padlock', 'Brute force on a 4-digit padlock',
     'Combinations from 0000 to 9999 are tried one after another. In the worst case the correct combination is the last, and an n-digit lock has ten to the n candidates.', body, 380)

# 2. Divide, conquer, combine -------------------------------------------------
body = box(360, 100, 'Problem of size n', 260)
body += box(180, 220, 'Sub-problem 1', 230) + box(540, 220, 'Sub-problem 2', 230)
body += arrow([(300, 130), (180, 190)]) + arrow([(420, 130), (540, 190)])
body += label(215, 160, 'Divide', 18, 'end', ACCENT, 'bold')
body += box(180, 340, 'Solved 1', 230) + box(540, 340, 'Solved 2', 230)
body += arrow([(180, 250), (180, 310)]) + arrow([(540, 250), (540, 310)])
body += label(195, 285, 'Conquer (recurse;', 15, 'start') + label(195, 303, 'base case stops)', 15, 'start')
body += box(360, 460, 'Combined answer', 260)
body += arrow([(180, 370), (300, 432)]) + arrow([(540, 370), (420, 432)])
body += label(215, 425, 'Combine', 18, 'end', ACCENT, 'bold')
save('divide-conquer', 'Divide, conquer, combine',
     'A problem is divided into smaller sub-problems, each is solved recursively until a base case, and the sub-solutions are combined into the final answer.', body, 510)

# 3. Merge sort on 7 6 1 5 4 3 ------------------------------------------------
CELL = 38
def group(x, y, values, fill):
    left = x - len(values) * CELL / 2
    out = ''
    for k, v in enumerate(values):
        out += f'<rect x="{left+k*CELL}" y="{y-CELL/2}" width="{CELL}" height="{CELL}" fill="{fill}" stroke="{STROKE}" stroke-width="2"/>'
        out += label(left + k*CELL + CELL/2, y+7, v, 19)
    return out
xs = [80 + i * 112 for i in range(6)]
rows = [
    [(360, [7, 6, 1, 5, 4, 3])],
    [(192, [7, 6, 1]), (528, [5, 4, 3])],
    [(136, [7, 6]), (304, [1]), (472, [5, 4]), (640, [3])],
    [(xs[0], [7]), (xs[1], [6]), (xs[2], [1]), (xs[3], [5]), (xs[4], [4]), (xs[5], [3])],
    [(136, [6, 7]), (304, [1]), (472, [4, 5]), (640, [3])],
    [(192, [1, 6, 7]), (528, [3, 4, 5])],
    [(360, [1, 3, 4, 5, 6, 7])],
]
links = [  # parent index -> child indices for each step between rows
    [[0, 1]], [[0, 1], [2, 3]], [[0, 1], [2], [3, 4], [5]], [[0, 1], [2], [3, 4], [5]], [[0, 1], [2, 3]], [[0, 1]],
]
body = label(360, 72, 'Top: divide down to single elements. Bottom: merge sorted halves back up.', 16)
y0, step = 118, 70
for r, row in enumerate(rows):
    y = y0 + r * step
    for x, values in row:
        body += group(x, y, values, FILL if r <= 3 else ACCENT_FILL)
for r, groups in enumerate(links):
    y1, y2 = y0 + r * step + CELL/2 + 2, y0 + (r+1) * step - CELL/2 - 4
    for p, kids in enumerate(groups):
        if r < 3:   # dividing: one parent, several children
            px = rows[r][p][0]
            for k in kids:
                body += arrow([(px, y1), (rows[r+1][k][0], y2)])
        else:       # merging: several children feed one parent
            cx = rows[r+1][p][0]
            for k in kids:
                body += arrow([(rows[r][k][0], y1), (cx, y2)])
body += f'<rect x="150" y="{y0+7*step-10}" width="18" height="18" fill="{FILL}" stroke="{STROKE}" stroke-width="2"/>' + label(176, y0+7*step+5, 'divide', 16, 'start')
body += f'<rect x="270" y="{y0+7*step-10}" width="18" height="18" fill="{ACCENT_FILL}" stroke="{STROKE}" stroke-width="2"/>' + label(296, y0+7*step+5, 'merge (sorted)', 16, 'start')
save('merge-sort-tree', 'Merge sort on [7, 6, 1, 5, 4, 3]',
     'The six-element list is split into halves until single elements remain, then the sorted pieces are merged back into 1, 3, 4, 5, 6, 7.', body, y0 + 7*step + 40)

# 4. Fibonacci: repeated work versus a table ----------------------------------
def fnode(x, y, text, repeated=False):
    return box(x, y, text, 74, 34, ACCENT_FILL if repeated else FILL, ACCENT if repeated else STROKE, 16, 17)
body = label(360, 76, 'Plain recursion for F(4) repeats work (highlighted)', 17)
tree = {'F4': (360, 115), 'F3': (230, 190), 'F2b': (510, 190), 'F2a': (150, 265), 'F1a': (310, 265), 'F1b': (440, 265), 'F0b': (580, 265), 'F1c': (100, 340), 'F0a': (200, 340)}
text = {'F4': 'F(4)', 'F3': 'F(3)', 'F2a': 'F(2)', 'F2b': 'F(2)', 'F1a': 'F(1)', 'F1b': 'F(1)', 'F1c': 'F(1)', 'F0a': 'F(0)', 'F0b': 'F(0)'}
edges = [('F4', 'F3'), ('F4', 'F2b'), ('F3', 'F2a'), ('F3', 'F1a'), ('F2b', 'F1b'), ('F2b', 'F0b'), ('F2a', 'F1c'), ('F2a', 'F0a')]
for a, b in edges:
    (ax, ay), (bx, by) = tree[a], tree[b]
    body += arrow([(ax, ay+19), (bx, by-21)])
for key, (x, y) in tree.items():
    body += fnode(x, y, text[key], key in ('F2a', 'F2b'))
body += label(360, 385, 'Dynamic programming: compute each value once and store it', 17)
for i, value in enumerate([0, 1, 1, 2, 3]):
    x = 120 + i * 120
    body += box(x, 490, str(value), 80, 50, size=21)
    body += label(x, 535, f'F({i})', 16)
for i in range(2, 5):
    x, p1, p2 = 120 + i * 120, 120 + (i-1) * 120, 120 + (i-2) * 120
    body += f'<path d="M{p1+25},465 Q{(p1+x)/2},440 {x-22},463" fill="none" stroke="{STROKE}" stroke-width="2" marker-end="url(#arrow)"/>'
    body += f'<path d="M{p2},465 Q{(p2+x)/2},413 {x},463" fill="none" stroke="{STROKE}" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow)"/>'
body += label(360, 568, 'Each cell is the sum of the two cells before it.', 16)
save('fibonacci-dp', 'Fibonacci: repeated work versus a table',
     'The recursion tree for F(4) computes F(2) twice. A dynamic programming table computes F(0) to F(4) once each by adding the two previous cells.', body, 595)

# 5. Greedy fails for coins {1, 3, 4} making 6 --------------------------------
def coin(x, y, value, color, fill):
    return f'<circle cx="{x}" cy="{y}" r="24" fill="{fill}" stroke="{color}" stroke-width="2.5"/>' + label(x, y+7, value, 20)
body = label(360, 80, 'Make 6 from coins of value 1, 3 and 4', 18)
body += label(40, 150, 'Greedy', 21, 'start', ACCENT, 'bold') + label(40, 176, 'always take the largest coin that fits', 15, 'start')
for i, v in enumerate([4, 1, 1]):
    body += coin(120 + i * 70, 235, v, ACCENT, ACCENT_FILL)
body += label(420, 242, '3 coins', 20, 'start', ACCENT, 'bold')
body += label(40, 330, 'Optimal', 21, 'start', STROKE, 'bold') + label(40, 356, 'consider the combinations (dynamic programming)', 15, 'start')
for i, v in enumerate([3, 3]):
    body += coin(120 + i * 70, 415, v, STROKE, FILL)
body += label(420, 422, '2 coins', 20, 'start', STROKE, 'bold')
body += label(360, 480, 'A locally best choice does not always give the globally best answer.', 16)
save('greedy-vs-optimal', 'When greedy is not optimal',
     'For coins of value 1, 3 and 4, the greedy choice for 6 uses 4, 1, 1 which is three coins, while 3 and 3 needs only two.', body, 505)

# 6. Randomised estimate converging -------------------------------------------
def coupons(rng, n=10):
    seen, bought = set(), 0
    while len(seen) < n:
        seen.add(rng.randint(1, n)); bought += 1
    return bought
rng = random.Random(4)
trials = 300
total, means = 0, []
for t in range(1, trials + 1):
    total += coupons(rng); means.append(total / t)
left, right, top, bottom = 90, 670, 90, 330
lo, hi = 20, 40
px = lambda t: left + (right-left) * (t-1) / (trials-1)
py = lambda v: bottom - (bottom-top) * (v-lo) / (hi-lo)
body = f'<line x1="{left}" y1="{bottom}" x2="{right}" y2="{bottom}" stroke="{INK}"/><line x1="{left}" y1="{top}" x2="{left}" y2="{bottom}" stroke="{INK}"/>'
for v in (20, 25, 30, 35, 40):
    body += f'<line x1="{left}" y1="{py(v)}" x2="{right}" y2="{py(v)}" stroke="#d6e6dc"/>' + label(left-10, py(v)+5, v, 14, 'end')
for t in (1, 100, 200, 300):
    body += label(px(t), bottom+22, t, 14)
body += f'<line x1="{left}" y1="{py(29.29)}" x2="{right}" y2="{py(29.29)}" stroke="{ACCENT}" stroke-width="2" stroke-dasharray="7 5"/>'
body += label(right, py(29.29)-8, 'expected value ≈ 29.29', 15, 'end', ACCENT)
body += f'<polyline points="{" ".join(f"{px(t):.1f},{py(min(max(m, lo), hi)):.1f}" for t, m in enumerate(means, 1))}" fill="none" stroke="{STROKE}" stroke-width="2.4"/>'
body += label(380, bottom+48, 'number of simulated trials', 16) + label(24, 210, 'average jeans', 15, 'middle').replace('<text', '<text transform="rotate(-90 24 210)"', 1)
body += label(360, 418, 'Single runs vary a lot, but the running average settles near the true value.', 16)
save('randomized-convergence', 'A randomised estimate settles down',
     'The running average of simulated coupon-collector trials for ten coupon types starts erratic and approaches the expected value of about 29.29 as the number of trials grows.', body, 445)

# Reserve image dimensions in the reader so lazy loading cannot shift the layout.
sizes = {}
for path in sorted(OUT.glob('*.svg')):
    root = ET.parse(path).getroot()
    sizes[f'/notes/cse/s1/python/module-4/assets/{path.name}'] = {'width': int(root.attrib['width']), 'height': int(root.attrib['height'])}
metadata = Path(__file__).resolve().parents[1] / 'src/features/notes/python-module-4/diagramDimensions.ts'
metadata.write_text('// Generated by scripts/generate-module4-diagrams.py.\n'
    + 'export const module4DiagramDimensions: Record<string, { width: number; height: number }> = '
    + json.dumps(sizes, indent=2) + ';\n')
print(f'Generated {len(sizes)} Module 4 SVG diagrams; final running mean {means[-1]:.2f}.')

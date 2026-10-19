import math
from html import escape
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / 'public/notes/cse/s1/chemistry/module-3/assets'
OUT.mkdir(parents=True, exist_ok=True)

INK = '#172b42'
DARK = '#243e57'
TEAL = '#1d7068'
PURPLE = '#6b3ba6'
BLUE = '#1a5fb4'
ACCENT_BG = '#edf5ff'
MUTED = '#5e7185'
LINE_COL = '#9bb5c9'
BORDER = '#d0e0ed'
GREEN = '#28765a'
LIGHT_GREEN = '#e8f5ed'
RED = '#b02a37'
LIGHT_RED = '#fdf2f2'

def svg_wrap(width, height, content, title='Diagram'):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="{escape(title)}">
<defs>
  <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0 1 L7 4 L0 7 Z" fill="{DARK}"/>
  </marker>
  <marker id="arr-teal" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0 1 L7 4 L0 7 Z" fill="{TEAL}"/>
  </marker>
  <marker id="arr-purple" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0 1 L7 4 L0 7 Z" fill="{PURPLE}"/>
  </marker>
  <marker id="arr-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0 1 L7 4 L0 7 Z" fill="{BLUE}"/>
  </marker>
  <marker id="arr-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0 1 L7 4 L0 7 Z" fill="{GREEN}"/>
  </marker>
</defs>
<rect width="100%" height="100%" rx="16" fill="#ffffff" stroke="{BORDER}" stroke-width="1.5"/>
<g font-family="DejaVu Sans, Arial, Helvetica, sans-serif">
{content}
</g>
</svg>'''

def save_svg(filename, width, height, content, title=''):
    s = svg_wrap(width, height, content, title)
    (OUT / filename).write_text(s + '\n', encoding='utf-8')

def gen_electronic_transitions_overview():
    w, h = 800, 430
    c = f'''
  <text x="400" y="38" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">Different Types of Electronic Transitions</text>
  <text x="400" y="65" text-anchor="middle" font-size="14" fill="{MUTED}">Transitions between bonding, non-bonding, and anti-bonding molecular orbitals</text>
  
  <line x1="70" y1="380" x2="70" y2="100" stroke="{DARK}" stroke-width="2.5" marker-end="url(#arr)"/>
  <text x="50" y="240" text-anchor="middle" font-size="15" font-weight="bold" fill="{DARK}" transform="rotate(-90 50 240)">Energy (E)</text>
  
  <g stroke="{LINE_COL}" stroke-width="2">
    <line x1="120" y1="110" x2="660" y2="110"/>
    <line x1="120" y1="180" x2="660" y2="180"/>
    <line x1="120" y1="240" x2="660" y2="240"/>
    <line x1="120" y1="300" x2="660" y2="300"/>
    <line x1="120" y1="360" x2="660" y2="360"/>
  </g>
  
  <text x="675" y="116" font-size="17" font-weight="bold" fill="{INK}">σ* <tspan font-size="14" font-weight="normal" fill="{MUTED}">(antibonding)</tspan></text>
  <text x="675" y="186" font-size="17" font-weight="bold" fill="{INK}">π* <tspan font-size="14" font-weight="normal" fill="{MUTED}">(antibonding)</tspan></text>
  <text x="675" y="246" font-size="17" font-weight="bold" fill="{INK}">n <tspan font-size="14" font-weight="normal" fill="{MUTED}">(non-bonding)</tspan></text>
  <text x="675" y="306" font-size="17" font-weight="bold" fill="{INK}">π <tspan font-size="14" font-weight="normal" fill="{MUTED}">(bonding)</tspan></text>
  <text x="675" y="366" font-size="17" font-weight="bold" fill="{INK}">σ <tspan font-size="14" font-weight="normal" fill="{MUTED}">(bonding)</tspan></text>
  
  <g stroke-width="3">
    <line x1="200" y1="355" x2="200" y2="120" stroke="{TEAL}" marker-end="url(#arr-teal)"/>
    <line x1="320" y1="235" x2="320" y2="120" stroke="{TEAL}" marker-end="url(#arr-teal)"/>
    <line x1="440" y1="295" x2="440" y2="190" stroke="{BLUE}" marker-end="url(#arr-blue)"/>
    <line x1="560" y1="235" x2="560" y2="190" stroke="{PURPLE}" marker-end="url(#arr-purple)"/>
  </g>
  
  <g font-size="14" text-anchor="middle" font-weight="bold">
    <text x="200" y="98" fill="{TEAL}">σ → σ*</text>
    <text x="200" y="395" font-size="12" fill="{MUTED}">&lt; 150 nm</text>
    <text x="200" y="412" font-size="11" font-weight="normal" fill="{RED}">UV-inactive</text>
    
    <text x="320" y="98" fill="{TEAL}">n → σ*</text>
    <text x="320" y="395" font-size="12" fill="{MUTED}">&lt; 200 nm</text>
    <text x="320" y="412" font-size="11" font-weight="normal" fill="{RED}">UV-inactive</text>
    
    <text x="440" y="168" fill="{BLUE}">π → π*</text>
    <text x="440" y="395" font-size="12" fill="{MUTED}">200–800 nm</text>
    <text x="440" y="412" font-size="11" font-weight="bold" fill="{GREEN}">UV-active (allowed)</text>
    
    <text x="560" y="168" fill="{PURPLE}">n → π*</text>
    <text x="560" y="395" font-size="12" fill="{MUTED}">200–800 nm</text>
    <text x="560" y="412" font-size="11" font-weight="normal" fill="{PURPLE}">UV-active (forbidden)</text>
  </g>
'''
    save_svg('page-010-image-2-clean.svg', w, h, c, 'Electronic transitions diagram')
    save_svg('page-036-image-2-clean.svg', w, h, c, 'Electronic transitions energy levels')

def make_molecule_orbital_diagram(filename, title, formula, structure_svg, transitions, is_active, note):
    w, h = 760, 390
    levels = {'s_star': 105, 'p_star': 160, 'n': 210, 'p': 260, 's': 310}
    arrow_colors = {
        's_s_star': (TEAL, 'arr-teal'),
        'p_p_star': (BLUE, 'arr-blue'),
        'n_p_star': (PURPLE, 'arr-purple'),
        'n_s_star': (TEAL, 'arr-teal'),
    }
    
    trans_svg = ''
    total = len(transitions)
    spacing = 70
    start_x = 420 - ((total - 1) * spacing) / 2
    
    for idx, t in enumerate(transitions):
        x = start_x + idx * spacing
        col, arr_id = arrow_colors.get(t, (DARK, 'arr'))
        if t == 's_s_star':
            trans_svg += f'''
      <line x1="{x}" y1="{levels['s']-5}" x2="{x}" y2="{levels['s_star']+10}" stroke="{col}" stroke-width="3" marker-end="url(#{arr_id})"/>
      <text x="{x}" y="{levels['s_star']-8}" text-anchor="middle" font-size="12" font-weight="bold" fill="{col}">σ→σ*</text>
'''
        elif t == 'p_p_star':
            trans_svg += f'''
      <line x1="{x}" y1="{levels['p']-5}" x2="{x}" y2="{levels['p_star']+10}" stroke="{col}" stroke-width="3" marker-end="url(#{arr_id})"/>
      <text x="{x}" y="{levels['p_star']-8}" text-anchor="middle" font-size="12" font-weight="bold" fill="{col}">π→π*</text>
'''
        elif t == 'n_p_star':
            trans_svg += f'''
      <line x1="{x}" y1="{levels['n']-5}" x2="{x}" y2="{levels['p_star']+10}" stroke="{col}" stroke-width="3" marker-end="url(#{arr_id})"/>
      <text x="{x}" y="{levels['p_star']-8}" text-anchor="middle" font-size="12" font-weight="bold" fill="{col}">n→π*</text>
'''
        elif t == 'n_s_star':
            trans_svg += f'''
      <line x1="{x}" y1="{levels['n']-5}" x2="{x}" y2="{levels['s_star']+10}" stroke="{col}" stroke-width="3" marker-end="url(#{arr_id})"/>
      <text x="{x}" y="{levels['s_star']-8}" text-anchor="middle" font-size="12" font-weight="bold" fill="{col}">n→σ*</text>
'''

    badge_bg = LIGHT_GREEN if is_active else LIGHT_RED
    badge_fg = GREEN if is_active else RED
    badge_txt = 'UV-VISIBLE ACTIVE' if is_active else 'UV-VISIBLE INACTIVE'
    
    c = f'''
  <rect x="25" y="18" width="710" height="48" rx="8" fill="{ACCENT_BG}"/>
  <text x="45" y="48" font-size="19" font-weight="bold" fill="{INK}">{escape(title)}</text>
  <text x="360" y="48" font-size="16" fill="{MUTED}">{escape(formula)}</text>
  <rect x="580" y="27" width="145" height="30" rx="15" fill="{badge_bg}"/>
  <text x="652" y="47" text-anchor="middle" font-size="11" font-weight="bold" fill="{badge_fg}">{badge_txt}</text>

  <g transform="translate(45, 100)">
    <rect width="180" height="200" rx="12" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
    <text x="90" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="{MUTED}">Structure</text>
    {structure_svg}
  </g>

  <g transform="translate(260, 0)">
    <g stroke="{LINE_COL}" stroke-width="2">
      <line x1="20" y1="{levels['s_star']}" x2="350" y2="{levels['s_star']}"/>
      <line x1="20" y1="{levels['p_star']}" x2="350" y2="{levels['p_star']}"/>
      <line x1="20" y1="{levels['n']}" x2="350" y2="{levels['n']}"/>
      <line x1="20" y1="{levels['p']}" x2="350" y2="{levels['p']}"/>
      <line x1="20" y1="{levels['s']}" x2="350" y2="{levels['s']}"/>
    </g>

    <text x="365" y="{levels['s_star']+5}" font-size="15" font-weight="bold" fill="{INK}">σ*</text>
    <text x="365" y="{levels['p_star']+5}" font-size="15" font-weight="bold" fill="{INK}">π*</text>
    <text x="365" y="{levels['n']+5}" font-size="15" font-weight="bold" fill="{INK}">n</text>
    <text x="365" y="{levels['p']+5}" font-size="15" font-weight="bold" fill="{INK}">π</text>
    <text x="365" y="{levels['s']+5}" font-size="15" font-weight="bold" fill="{INK}">σ</text>

    {trans_svg}
  </g>

  <rect x="45" y="335" width="670" height="36" rx="8" fill="#f8fafc" stroke="{BORDER}" stroke-width="1"/>
  <text x="380" y="358" text-anchor="middle" font-size="13" fill="{INK}">Key note: {escape(note)}</text>
'''
    save_svg(filename, w, h, c, title)

def benzene_ring(cx, cy, r=32):
    pts = []
    for i in range(6):
        a = math.pi / 3 * i - math.pi / 6
        pts.append(f'{cx + r * math.cos(a):.1f},{cy + r * math.sin(a):.1f}')
    poly = ' '.join(pts)
    return f'''
    <polygon points="{poly}" fill="none" stroke="{DARK}" stroke-width="2.5"/>
    <circle cx="{cx}" cy="{cy}" r="{r*0.55:.1f}" fill="none" stroke="{DARK}" stroke-width="1.8"/>
'''

def gen_molecule_diagrams():
    struct_ethane = '''
    <g transform="translate(25, 80)" font-size="17" font-weight="bold" fill="#172b42">
      <text x="30" y="30">H₃C — CH₃</text>
      <text x="25" y="65" font-size="12" font-weight="normal" fill="#5e7185">Single σ bonds only</text>
    </g>
    '''
    make_molecule_orbital_diagram(
        'page-011-image-1-clean.svg',
        'Ethane: Electronic Transitions',
        'CH₃—CH₃',
        struct_ethane,
        ['s_s_star'],
        False,
        'Contains only σ bonds. σ → σ* transition occurs below 150 nm, hence UV-visible inactive.'
    )

    struct_butadiene = '''
    <g transform="translate(10, 75)" font-size="13" font-weight="bold" fill="#172b42">
      <text x="0" y="20">CH₂=CH—CH=CH₂</text>
      <text x="10" y="55" font-size="12" font-weight="normal" fill="#5e7185">Conjugated diene</text>
    </g>
    '''
    make_molecule_orbital_diagram(
        'page-011-image-2-clean.svg',
        '1,3-Butadiene: Electronic Transitions',
        'CH₂=CH—CH=CH₂',
        struct_butadiene,
        ['s_s_star', 'p_p_star'],
        True,
        'Conjugated π system allows π → π* absorption at 217 nm (high intensity, allowed).'
    )

    struct_benzene = f'''
    <g transform="translate(0, 45)">
      {benzene_ring(90, 70, 32)}
      <text x="90" y="130" text-anchor="middle" font-size="12" fill="#5e7185">Aromatic ring</text>
    </g>
    '''
    make_molecule_orbital_diagram(
        'page-011-image-3-clean.svg',
        'Benzene: Electronic Transitions',
        'C₆H₆',
        struct_benzene,
        ['s_s_star', 'p_p_star'],
        True,
        'Aromatic π system undergoes intense π → π* transitions (bands at 184, 204, and 255 nm).'
    )

    struct_benzoic = f'''
    <g transform="translate(0, 35)">
      {benzene_ring(70, 70, 28)}
      <line x1="98" y1="70" x2="115" y2="70" stroke="{DARK}" stroke-width="2"/>
      <text x="118" y="75" font-size="13" font-weight="bold" fill="{INK}">COOH</text>
      <text x="90" y="135" text-anchor="middle" font-size="11" fill="{MUTED}">Carbonyl + lone pairs</text>
    </g>
    '''
    make_molecule_orbital_diagram(
        'page-011-image-4-clean.svg',
        'Benzoic Acid: Electronic Transitions',
        'C₆H₅COOH',
        struct_benzoic,
        ['s_s_star', 'p_p_star', 'n_p_star', 'n_s_star'],
        True,
        'Contains π bonds in ring and C=O group, plus non-bonding n electrons on oxygens.'
    )

    struct_salicylic = f'''
    <g transform="translate(0, 35)">
      {benzene_ring(70, 70, 28)}
      <line x1="98" y1="58" x2="115" y2="52" stroke="{DARK}" stroke-width="2"/>
      <text x="117" y="56" font-size="12" font-weight="bold" fill="{INK}">COOH</text>
      <line x1="98" y1="82" x2="115" y2="88" stroke="{DARK}" stroke-width="2"/>
      <text x="117" y="93" font-size="12" font-weight="bold" fill="{INK}">OH</text>
      <text x="90" y="135" text-anchor="middle" font-size="11" fill="{MUTED}">-OH &amp; -COOH groups</text>
    </g>
    '''
    make_molecule_orbital_diagram(
        'page-011-image-5-clean.svg',
        'Salicylic Acid: Electronic Transitions',
        'o-HOC₆H₄COOH',
        struct_salicylic,
        ['s_s_star', 'p_p_star', 'n_p_star', 'n_s_star'],
        True,
        'Aromatic system with conjugated -COOH and auxochromic -OH showing bathochromic shift.'
    )

    struct_benzaldehyde = f'''
    <g transform="translate(0, 35)">
      {benzene_ring(70, 70, 28)}
      <line x1="98" y1="70" x2="115" y2="70" stroke="{DARK}" stroke-width="2"/>
      <text x="118" y="75" font-size="13" font-weight="bold" fill="{INK}">CHO</text>
      <text x="90" y="135" text-anchor="middle" font-size="11" fill="{MUTED}">Aromatic aldehyde</text>
    </g>
    '''
    make_molecule_orbital_diagram(
        'page-012-image-1-clean.svg',
        'Benzaldehyde: Electronic Transitions',
        'C₆H₅CHO',
        struct_benzaldehyde,
        ['s_s_star', 'p_p_star', 'n_p_star', 'n_s_star'],
        True,
        'Carbonyl group conjugated with phenyl ring; exhibits both π → π* and forbidden n → π* bands.'
    )

    struct_ethanol = '''
    <g transform="translate(15, 75)" font-size="14" font-weight="bold" fill="#172b42">
      <text x="10" y="25">CH₃—CH₂—OH</text>
      <text x="15" y="60" font-size="11" font-weight="normal" fill="#5e7185">σ bonds + O lone pairs</text>
    </g>
    '''
    make_molecule_orbital_diagram(
        'page-012-image-2-clean.svg',
        'Ethanol: Electronic Transitions',
        'CH₃CH₂OH',
        struct_ethanol,
        ['s_s_star', 'n_s_star'],
        False,
        'Has σ bonds and oxygen lone pairs (n). n → σ* occurs at 185 nm (< 200 nm), hence UV-inactive.'
    )

    struct_acetone = '''
    <g transform="translate(15, 65)" font-size="13" font-weight="bold" fill="#172b42">
      <text x="20" y="20">CH₃—CO—CH₃</text>
      <line x1="57" y1="26" x2="57" y2="46" stroke="#243e57" stroke-width="2"/>
      <line x1="61" y1="26" x2="61" y2="46" stroke="#243e57" stroke-width="2"/>
      <text x="52" y="62" font-size="14">O</text>
      <text x="15" y="90" font-size="11" font-weight="normal" fill="#5e7185">Carbonyl ketone</text>
    </g>
    '''
    make_molecule_orbital_diagram(
        'page-012-image-3-clean.svg',
        'Propanone (Acetone): Electronic Transitions',
        'CH₃COCH₃',
        struct_acetone,
        ['s_s_star', 'p_p_star', 'n_p_star', 'n_s_star'],
        True,
        'Carbonyl C=O contains π and n electrons; weak forbidden n → π* absorption band at 280 nm.'
    )

def gen_uv_vis_spectrum():
    w, h = 760, 400
    pts = []
    for x_val in range(120, 680, 5):
        lam = 200 + (x_val - 120) * (600 / 560)
        a_val = 0.08 + 1.25 * math.exp(-((lam - 320) ** 2) / (2 * 45 ** 2)) + 0.15 * math.exp(-((lam - 240) ** 2) / (2 * 25 ** 2))
        y_val = 330 - a_val * 180
        pts.append(f'{x_val:.1f},{y_val:.1f}')
    curve = ' '.join(pts)
    
    peak_x = 120 + (320 - 200) * (560 / 600)
    peak_y = 330 - 1.33 * 180
    
    c = f'''
  <text x="380" y="38" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">UV-Visible Absorption Spectrum</text>
  <text x="380" y="65" text-anchor="middle" font-size="14" fill="{MUTED}">Plot of Absorbance (A) versus Wavelength (λ in nm)</text>
  
  <line x1="120" y1="330" x2="680" y2="330" stroke="{DARK}" stroke-width="2.5" marker-end="url(#arr)"/>
  <line x1="120" y1="330" x2="120" y2="85" stroke="{DARK}" stroke-width="2.5" marker-end="url(#arr)"/>
  
  <text x="400" y="368" text-anchor="middle" font-size="15" font-weight="bold" fill="{DARK}">Wavelength λ (nm)</text>
  <text x="50" y="200" text-anchor="middle" font-size="15" font-weight="bold" fill="{DARK}" transform="rotate(-90 50 200)">Absorbance (A)</text>
  
  <g font-size="12" fill="{MUTED}" text-anchor="middle">
    <line x1="120" y1="330" x2="120" y2="336" stroke="{DARK}"/>
    <text x="120" y="348">200</text>
    <line x1="213" y1="330" x2="213" y2="336" stroke="{DARK}"/>
    <text x="213" y="348">300</text>
    <line x1="307" y1="330" x2="307" y2="336" stroke="{DARK}"/>
    <text x="307" y="348">400</text>
    <line x1="400" y1="330" x2="400" y2="336" stroke="{DARK}"/>
    <text x="400" y="348">500</text>
    <line x1="493" y1="330" x2="493" y2="336" stroke="{DARK}"/>
    <text x="493" y="348">600</text>
    <line x1="587" y1="330" x2="587" y2="336" stroke="{DARK}"/>
    <text x="587" y="348">700</text>
    <line x1="680" y1="330" x2="680" y2="336" stroke="{DARK}"/>
    <text x="680" y="348">800</text>
  </g>
  
  <polyline points="{curve}" fill="none" stroke="{TEAL}" stroke-width="3"/>
  <line x1="{peak_x:.1f}" y1="{peak_y:.1f}" x2="{peak_x:.1f}" y2="330" stroke="{MUTED}" stroke-dasharray="4,4" stroke-width="1.5"/>
  <circle cx="{peak_x:.1f}" cy="{peak_y:.1f}" r="5" fill="{TEAL}"/>
  
  <g transform="translate({peak_x+15:.1f}, {peak_y-15:.1f})">
    <rect width="130" height="42" rx="6" fill="{ACCENT_BG}" stroke="{TEAL}" stroke-width="1.5"/>
    <text x="65" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="{TEAL}">λ_max = 320 nm</text>
    <text x="65" y="34" text-anchor="middle" font-size="11" fill="{MUTED}">Maximum Absorbance</text>
  </g>
'''
    save_svg('page-013-image-1-clean.svg', w, h, c, 'UV-Visible Absorption Spectrum')

def gen_uv_vis_transition_principle():
    w, h = 800, 390
    c = f'''
  <text x="400" y="38" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">Principle of UV-Visible Spectroscopy</text>
  <text x="400" y="65" text-anchor="middle" font-size="14" fill="{MUTED}">Absorption of UV-visible radiation induces transitions between electronic energy levels</text>
  
  <g transform="translate(60, 95)">
    <rect width="310" height="250" rx="12" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
    <text x="155" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="{INK}">1. Electronic Transition</text>
    
    <line x1="40" y1="90" x2="270" y2="90" stroke="{DARK}" stroke-width="2.5"/>
    <line x1="40" y1="180" x2="270" y2="180" stroke="{DARK}" stroke-width="2.5"/>
    
    <text x="278" y="95" font-size="15" font-weight="bold" fill="{DARK}">E_e <tspan font-size="12" font-weight="normal" fill="{MUTED}">(excited)</tspan></text>
    <text x="278" y="185" font-size="15" font-weight="bold" fill="{DARK}">E_g <tspan font-size="12" font-weight="normal" fill="{MUTED}">(ground)</tspan></text>
    
    <line x1="155" y1="175" x2="155" y2="98" stroke="{TEAL}" stroke-width="3" marker-end="url(#arr-teal)"/>
    
    <path d="M 60 140 Q 80 120 100 140 T 140 140" fill="none" stroke="{PURPLE}" stroke-width="2.5"/>
    <polygon points="140,140 132,135 132,145" fill="{PURPLE}"/>
    <text x="100" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="{PURPLE}">hν</text>
    <text x="155" y="225" text-anchor="middle" font-size="12" fill="{MUTED}">ΔE = E_e − E_g = hν</text>
  </g>
  
  <g transform="translate(430, 95)">
    <rect width="310" height="250" rx="12" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
    <text x="155" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="{INK}">2. Resulting Spectrum</text>
    
    <line x1="40" y1="190" x2="270" y2="190" stroke="{DARK}" stroke-width="2"/>
    <line x1="40" y1="190" x2="40" y2="70" stroke="{DARK}" stroke-width="2"/>
    
    <path d="M 50 185 Q 120 180 140 130 T 170 100 T 200 140 T 260 185" fill="none" stroke="{BLUE}" stroke-width="2.5"/>
    <line x1="170" y1="100" x2="170" y2="190" stroke="{MUTED}" stroke-dasharray="3,3"/>
    <circle cx="170" cy="100" r="4" fill="{BLUE}"/>
    <text x="170" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="{BLUE}">λ_max</text>
    
    <text x="155" y="215" text-anchor="middle" font-size="12" font-weight="bold" fill="{DARK}">Wavelength λ (nm)</text>
    <text x="30" y="125" text-anchor="middle" font-size="11" fill="{DARK}" transform="rotate(-90 30 125)">Absorbance</text>
    <text x="155" y="235" text-anchor="middle" font-size="11" fill="{MUTED}">Broad band with characteristic peak</text>
  </g>
'''
    save_svg('page-036-image-1-clean.svg', w, h, c, 'Principle of UV-Visible Spectroscopy')

def gen_h_bonding_diagrams():
    w, h = 800, 390
    c_inter = f'''
  <text x="400" y="38" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">Intermolecular Hydrogen Bonding in p-Hydroxyphenol</text>
  <text x="400" y="65" text-anchor="middle" font-size="14" fill="{MUTED}">Hydrogen bonds form between separate hydroquinone molecules (quinol)</text>
  
  <g transform="translate(60, 110)">
    {benzene_ring(120, 90, 35)}
    <line x1="120" y1="55" x2="120" y2="35" stroke="{DARK}" stroke-width="2.5"/>
    <text x="120" y="28" text-anchor="middle" font-size="16" font-weight="bold" fill="{INK}">HO</text>
    
    <line x1="120" y1="125" x2="120" y2="145" stroke="{DARK}" stroke-width="2.5"/>
    <text x="120" y="165" text-anchor="middle" font-size="16" font-weight="bold" fill="{INK}">O — H</text>
    
    <line x1="150" y1="160" x2="220" y2="160" stroke="{TEAL}" stroke-dasharray="5,5" stroke-width="3"/>
    <text x="185" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="{TEAL}">H-bond</text>
    
    <text x="245" y="165" font-size="16" font-weight="bold" fill="{INK}">O</text>
    <line x1="250" y1="170" x2="250" y2="190" stroke="{DARK}" stroke-width="2"/>
    <text x="250" y="205" text-anchor="middle" font-size="14" font-weight="bold" fill="{INK}">H</text>
    
    <line x1="265" y1="160" x2="310" y2="160" stroke="{DARK}" stroke-width="2.5"/>
    {benzene_ring(350, 160, 35)}
    
    <line x1="385" y1="160" x2="425" y2="160" stroke="{DARK}" stroke-width="2.5"/>
    <text x="445" y="165" font-size="16" font-weight="bold" fill="{INK}">O — H</text>
    
    <line x1="495" y1="160" x2="540" y2="160" stroke="{TEAL}" stroke-dasharray="5,5" stroke-width="3"/>
    <text x="518" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="{TEAL}">H-bond</text>
    <text x="560" y="165" font-size="16" fill="{MUTED}">···</text>
  </g>
  
  <rect x="50" y="315" width="700" height="52" rx="8" fill="{LIGHT_GREEN}" stroke="{BORDER}" stroke-width="1"/>
  <text x="400" y="337" text-anchor="middle" font-size="13" font-weight="bold" fill="{GREEN}">Effect of Dilution on IR Absorption</text>
  <text x="400" y="355" text-anchor="middle" font-size="12" fill="{INK}">Upon dilution, molecules move apart → intermolecular H-bonds break → O–H stretching frequency shifts to higher wavenumber.</text>
'''
    save_svg('page-019-image-1-clean.svg', w, h, c_inter, 'Intermolecular Hydrogen Bonding')
    save_svg('page-053-image-1-clean.svg', w, h, c_inter, 'Intermolecular Hydrogen Bonding in Para-hydroxy Phenol')

    c_intra = f'''
  <text x="400" y="38" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">Intramolecular Hydrogen Bonding in o-Hydroxyphenol</text>
  <text x="400" y="65" text-anchor="middle" font-size="14" fill="{MUTED}">Hydrogen bonds form internally between adjacent hydroxyl groups (catechol)</text>
  
  <g transform="translate(180, 100)">
    <rect width="440" height="195" rx="12" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
    
    {benzene_ring(150, 95, 42)}
    
    <line x1="187" y1="75" x2="230" y2="60" stroke="{DARK}" stroke-width="2.5"/>
    <text x="245" y="66" font-size="18" font-weight="bold" fill="{INK}">O — H</text>
    
    <line x1="187" y1="115" x2="230" y2="130" stroke="{DARK}" stroke-width="2.5"/>
    <text x="245" y="136" font-size="18" font-weight="bold" fill="{INK}">O — H</text>
    
    <path d="M 285 70 Q 300 95 270 120" fill="none" stroke="{TEAL}" stroke-dasharray="5,5" stroke-width="3"/>
    
    <g transform="translate(320, 80)">
      <rect width="105" height="35" rx="6" fill="{ACCENT_BG}" stroke="{TEAL}" stroke-width="1"/>
      <text x="52" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="{TEAL}">Internal Ring</text>
      <text x="52" y="30" text-anchor="middle" font-size="10" fill="{MUTED}">(chelate ring)</text>
    </g>
  </g>
  
  <rect x="50" y="315" width="700" height="52" rx="8" fill="{LIGHT_GREEN}" stroke="{BORDER}" stroke-width="1"/>
  <text x="400" y="337" text-anchor="middle" font-size="13" font-weight="bold" fill="{GREEN}">Effect of Dilution on IR Absorption</text>
  <text x="400" y="355" text-anchor="middle" font-size="12" fill="{INK}">Intramolecular H-bonding is internal to the molecule and is NOT affected by dilution → O–H stretching frequency remains unchanged.</text>
'''
    save_svg('page-019-image-2-clean.svg', w, h, c_intra, 'Intramolecular Hydrogen Bonding')
    save_svg('page-052-image-1-clean.svg', w, h, c_intra, 'Intramolecular Hydrogen Bonding in Ortho-hydroxy Phenol')
    save_svg('page-053-image-2-clean.svg', w, h, c_intra, 'Intramolecular Hydrogen Bonding Chelate Ring')

def gen_born_oppenheimer_levels():
    w, h = 820, 500
    c = f'''
  <text x="410" y="36" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">Different Energy Levels in a Molecule</text>
  <text x="410" y="60" text-anchor="middle" font-size="14" fill="{MUTED}">Born-Oppenheimer approximation: E_total = E_electronic + E_vibrational + E_rotational</text>
  
  <line x1="80" y1="440" x2="80" y2="85" stroke="{DARK}" stroke-width="2.5" marker-end="url(#arr)"/>
  <text x="55" y="260" text-anchor="middle" font-size="15" font-weight="bold" fill="{DARK}" transform="rotate(-90 55 260)">Energy (E)</text>
  
  <g transform="translate(130, 0)">
    <g stroke="{BORDER}" stroke-width="1" fill="#f8fafc">
      <rect x="0" y="95" width="560" height="110" rx="6"/>
      <rect x="0" y="295" width="560" height="110" rx="6"/>
    </g>
    
    <text x="15" y="115" font-size="14" font-weight="bold" fill="{DARK}">Electronic Excited Level (E₂)</text>
    <text x="15" y="315" font-size="14" font-weight="bold" fill="{DARK}">Electronic Ground Level (E₁)</text>
    
    <g stroke="{DARK}" stroke-width="1.8">
      <line x1="20" y1="130" x2="480" y2="130"/>
      <line x1="20" y1="165" x2="480" y2="165"/>
      <line x1="20" y1="195" x2="480" y2="195"/>
      
      <line x1="20" y1="330" x2="480" y2="330"/>
      <line x1="20" y1="365" x2="480" y2="365"/>
      <line x1="20" y1="395" x2="480" y2="395"/>
    </g>
    
    <text x="495" y="134" font-size="13" font-weight="bold" fill="{TEAL}">v = 2</text>
    <text x="495" y="169" font-size="13" font-weight="bold" fill="{TEAL}">v = 1</text>
    <text x="495" y="199" font-size="13" font-weight="bold" fill="{TEAL}">v = 0</text>
    
    <text x="495" y="334" font-size="13" font-weight="bold" fill="{TEAL}">v = 2</text>
    <text x="495" y="369" font-size="13" font-weight="bold" fill="{TEAL}">v = 1</text>
    <text x="495" y="399" font-size="13" font-weight="bold" fill="{TEAL}">v = 0</text>
    
    <g stroke="{MUTED}" stroke-width="0.8">
      <line x1="60" y1="137" x2="220" y2="137"/>
      <line x1="60" y1="144" x2="220" y2="144"/>
      <line x1="60" y1="151" x2="220" y2="151"/>
      
      <line x1="60" y1="172" x2="220" y2="172"/>
      <line x1="60" y1="179" x2="220" y2="179"/>
      <line x1="60" y1="186" x2="220" y2="186"/>
      
      <line x1="60" y1="337" x2="220" y2="337"/>
      <line x1="60" y1="344" x2="220" y2="344"/>
      <line x1="60" y1="351" x2="220" y2="351"/>
      
      <line x1="60" y1="372" x2="220" y2="372"/>
      <line x1="60" y1="379" x2="220" y2="379"/>
      <line x1="60" y1="386" x2="220" y2="386"/>
    </g>
    <text x="140" y="275" text-anchor="middle" font-size="11" fill="{MUTED}">Rotational sublevels (J)</text>
    
    <line x1="280" y1="395" x2="280" y2="197" stroke="{PURPLE}" stroke-width="2.5" marker-end="url(#arr-purple)"/>
    <text x="280" y="245" text-anchor="end" font-size="12" font-weight="bold" fill="{PURPLE}">Electronic transition (UV-Vis) </text>
    
    <line x1="380" y1="395" x2="380" y2="367" stroke="{TEAL}" stroke-width="2.5" marker-end="url(#arr-teal)"/>
    <text x="390" y="383" font-size="12" font-weight="bold" fill="{TEAL}">Vibrational (IR)</text>
  </g>
  
  <rect x="50" y="430" width="720" height="48" rx="8" fill="{ACCENT_BG}" stroke="{BORDER}" stroke-width="1"/>
  <text x="410" y="452" text-anchor="middle" font-size="14" font-weight="bold" fill="{DARK}">ΔE_electronic (1–10 eV) &gt;&gt; ΔE_vibrational (0.1 eV) &gt;&gt; ΔE_rotational (0.001 eV)</text>
  <text x="410" y="468" text-anchor="middle" font-size="12" fill="{MUTED}">UV-Visible: Electronic transitions · Infrared (IR): Vibrational transitions · Microwave: Rotational transitions</text>
'''
    save_svg('page-028-image-1-clean.svg', w, h, c, 'Molecular Energy Levels')

def gen_atomic_vs_molecular_spectra():
    w, h = 420, 320
    c_atomic = f'''
  <text x="210" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="{INK}">Atomic Spectra</text>
  <text x="210" y="50" text-anchor="middle" font-size="12" fill="{MUTED}">Electronic transitions between sharp atomic levels</text>
  
  <g stroke="{DARK}" stroke-width="2">
    <line x1="60" y1="90" x2="360" y2="90"/>
    <line x1="60" y1="150" x2="360" y2="150"/>
    <line x1="60" y1="210" x2="360" y2="210"/>
  </g>
  <text x="375" y="95" font-size="13" font-weight="bold" fill="{DARK}">E₃</text>
  <text x="375" y="155" font-size="13" font-weight="bold" fill="{DARK}">E₂</text>
  <text x="375" y="215" font-size="13" font-weight="bold" fill="{DARK}">E₁</text>
  
  <line x1="160" y1="205" x2="160" y2="95" stroke="{TEAL}" stroke-width="2.5" marker-end="url(#arr-teal)"/>
  <line x1="260" y1="205" x2="260" y2="155" stroke="{BLUE}" stroke-width="2.5" marker-end="url(#arr-blue)"/>
  
  <rect x="40" y="245" width="340" height="55" rx="8" fill="{ACCENT_BG}" stroke="{BORDER}" stroke-width="1"/>
  <text x="210" y="268" text-anchor="middle" font-size="13" font-weight="bold" fill="{DARK}">Sharp Line Spectrum</text>
  <text x="210" y="286" text-anchor="middle" font-size="11" fill="{MUTED}">Discrete energy transitions produce distinct, isolated lines.</text>
'''
    save_svg('page-030-image-3-clean.svg', w, h, c_atomic, 'Atomic Spectra Diagram')

    c_molecular = f'''
  <text x="210" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="{INK}">Molecular Spectra</text>
  <text x="210" y="50" text-anchor="middle" font-size="12" fill="{MUTED}">Transitions with vibrational &amp; rotational sublevels</text>
  
  <g stroke="{DARK}" stroke-width="2">
    <line x1="60" y1="90" x2="360" y2="90"/>
    <line x1="60" y1="210" x2="360" y2="210"/>
  </g>
  <text x="375" y="95" font-size="13" font-weight="bold" fill="{DARK}">E₂</text>
  <text x="375" y="215" font-size="13" font-weight="bold" fill="{DARK}">E₁</text>
  
  <g stroke="{MUTED}" stroke-width="1">
    <line x1="80" y1="102" x2="340" y2="102"/>
    <line x1="80" y1="112" x2="340" y2="112"/>
    <line x1="80" y1="122" x2="340" y2="122"/>
    
    <line x1="80" y1="222" x2="340" y2="222"/>
    <line x1="80" y1="232" x2="340" y2="232"/>
    <line x1="80" y1="242" x2="340" y2="242"/>
  </g>
  
  <line x1="160" y1="205" x2="160" y2="95" stroke="{PURPLE}" stroke-width="2.5" marker-end="url(#arr-purple)"/>
  <line x1="180" y1="205" x2="180" y2="105" stroke="{PURPLE}" stroke-width="2" marker-end="url(#arr-purple)"/>
  <line x1="200" y1="205" x2="200" y2="115" stroke="{PURPLE}" stroke-width="1.8" marker-end="url(#arr-purple)"/>
  
  <rect x="40" y="255" width="340" height="52" rx="8" fill="{ACCENT_BG}" stroke="{BORDER}" stroke-width="1"/>
  <text x="210" y="275" text-anchor="middle" font-size="13" font-weight="bold" fill="{DARK}">Broad Band Spectrum</text>
  <text x="210" y="293" text-anchor="middle" font-size="11" fill="{MUTED}">Superimposed rotational/vibrational lines form bands.</text>
'''
    save_svg('page-030-image-4-clean.svg', w, h, c_molecular, 'Molecular Spectra Diagram')

def gen_conjugated_systems_comparison():
    w, h = 860, 360
    
    def fused_naphthalene(cx, cy, r=26):
        dx = r * 1.5
        b1 = benzene_ring(cx - dx/2, cy, r)
        b2 = benzene_ring(cx + dx/2, cy, r)
        return b1 + b2

    def fused_anthracene(cx, cy, r=24):
        dx = r * 1.5
        b1 = benzene_ring(cx - dx, cy, r)
        b2 = benzene_ring(cx, cy, r)
        b3 = benzene_ring(cx + dx, cy, r)
        return b1 + b2 + b3

    c = f'''
  <text x="430" y="38" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">Increasing Order of UV-Visible Absorption (λ_max)</text>
  <text x="430" y="65" text-anchor="middle" font-size="14" fill="{MUTED}">Extended conjugation decreases the HOMO–LUMO energy gap (ΔE), shifting absorption to longer wavelengths</text>
  
  <g transform="translate(30, 90)">
    <rect width="180" height="170" rx="10" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
    <g transform="translate(0, 5)">
      {benzene_ring(90, 60, 30)}
    </g>
    <text x="90" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="{INK}">1,3-Cyclohexadiene</text>
    <text x="90" y="135" text-anchor="middle" font-size="12" fill="{MUTED}">2 conjugated C=C</text>
    <text x="90" y="153" text-anchor="middle" font-size="12" font-weight="bold" fill="{TEAL}">λ_max = 256 nm</text>
  </g>
  
  <text x="225" y="190" text-anchor="middle" font-size="28" font-weight="bold" fill="{DARK}">&lt;</text>
  
  <g transform="translate(240, 90)">
    <rect width="170" height="170" rx="10" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
    <g transform="translate(0, 5)">
      {benzene_ring(85, 60, 30)}
    </g>
    <text x="85" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="{INK}">Benzene</text>
    <text x="85" y="135" text-anchor="middle" font-size="12" fill="{MUTED}">Aromatic ring</text>
    <text x="85" y="153" text-anchor="middle" font-size="12" font-weight="bold" fill="{TEAL}">λ_max = 255 nm</text>
  </g>
  
  <text x="425" y="190" text-anchor="middle" font-size="28" font-weight="bold" fill="{DARK}">&lt;</text>
  
  <g transform="translate(440, 90)">
    <rect width="180" height="170" rx="10" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
    <g transform="translate(0, 5)">
      {fused_naphthalene(90, 60, 24)}
    </g>
    <text x="90" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="{INK}">Naphthalene</text>
    <text x="90" y="135" text-anchor="middle" font-size="12" fill="{MUTED}">2 fused rings (5 C=C)</text>
    <text x="90" y="153" text-anchor="middle" font-size="12" font-weight="bold" fill="{TEAL}">λ_max = 312 nm</text>
  </g>
  
  <text x="635" y="190" text-anchor="middle" font-size="28" font-weight="bold" fill="{DARK}">&lt;</text>
  
  <g transform="translate(650, 90)">
    <rect width="180" height="170" rx="10" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
    <g transform="translate(0, 5)">
      {fused_anthracene(90, 60, 20)}
    </g>
    <text x="90" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="{INK}">Anthracene</text>
    <text x="90" y="135" text-anchor="middle" font-size="12" fill="{MUTED}">3 fused rings (7 C=C)</text>
    <text x="90" y="153" text-anchor="middle" font-size="12" font-weight="bold" fill="{TEAL}">λ_max = 375 nm</text>
  </g>
  
  <rect x="30" y="280" width="800" height="55" rx="8" fill="{ACCENT_BG}" stroke="{BORDER}" stroke-width="1"/>
  <line x1="60" y1="300" x2="800" y2="300" stroke="{TEAL}" stroke-width="2" marker-end="url(#arr-teal)"/>
  <text x="430" y="322" text-anchor="middle" font-size="13" font-weight="bold" fill="{DARK}">Increasing Conjugation → Decreasing HOMO–LUMO Gap (ΔE) → Longer Wavelength λ_max (Red / Bathochromic Shift)</text>
'''
    save_svg('page-039-image-4-clean.svg', w, h, c, 'Extended Conjugation Comparison')

def gen_compounds_transitions_summary():
    w, h = 800, 360
    rows = [
        ('Acetone', 'C=O (carbonyl)', 'n → π*,  π → π*,  σ → σ*'),
        ('Aniline', '-NH₂ (aromatic ring)', 'π → π*,  n → π*,  σ → σ*'),
        ('Phenol', '-OH (aromatic ring)', 'π → π*,  n → π*,  σ → σ*'),
        ('1-Butyne', 'C≡C (alkyne)', 'π → π*,  σ → σ*'),
        ('Pentane', 'C-C (alkane)', 'σ → σ*'),
        ('Ethanol', '-OH (alcohol)', 'n → σ*,  σ → σ*'),
        ('Methoxymethane', 'C-O-C (ether)', 'n → σ*,  σ → σ*')
    ]
    rows_svg = ''
    for i, (comp, grp, trans) in enumerate(rows):
        y = 115 + i * 32
        bg = '#f8fafc' if i % 2 == 0 else '#ffffff'
        rows_svg += f'''
    <rect x="40" y="{y-20}" width="720" height="32" fill="{bg}"/>
    <text x="60" y="{y}" font-size="13" font-weight="bold" fill="{INK}">{comp}</text>
    <text x="230" y="{y}" font-size="13" fill="{DARK}">{grp}</text>
    <text x="460" y="{y}" font-size="13" font-weight="bold" fill="{TEAL}">{trans}</text>
'''
    c = f'''
  <text x="400" y="36" text-anchor="middle" font-size="20" font-weight="bold" fill="{INK}">Allowed Electronic Transitions by Functional Group</text>
  <text x="400" y="60" text-anchor="middle" font-size="13" fill="{MUTED}">Summary of representative organic molecules and their observed transitions</text>
  
  <rect x="40" y="70" width="720" height="265" rx="8" fill="#ffffff" stroke="{BORDER}" stroke-width="1.5"/>
  <rect x="40" y="70" width="720" height="30" rx="8" fill="{ACCENT_BG}"/>
  
  <text x="60" y="90" font-size="13" font-weight="bold" fill="{DARK}">Compound</text>
  <text x="230" y="90" font-size="13" font-weight="bold" fill="{DARK}">Main Functional Group</text>
  <text x="460" y="90" font-size="13" font-weight="bold" fill="{DARK}">Allowed Transitions</text>
  
  {rows_svg}
'''
    save_svg('page-040-image-7-clean.svg', w, h, c, 'Compounds and Allowed Transitions')

def gen_ir_spectrum():
    w, h = 820, 420
    
    pts = []
    for x_pix in range(120, 720, 4):
        wn = 4000 - (x_pix - 120) * (3600 / 600)
        t = 88.0
        t -= 55.0 * math.exp(-((wn - 3350) ** 2) / (2 * 110 ** 2))
        t -= 40.0 * math.exp(-((wn - 2960) ** 2) / (2 * 45 ** 2))
        t -= 72.0 * math.exp(-((wn - 1715) ** 2) / (2 * 35 ** 2))
        t -= 35.0 * math.exp(-((wn - 1450) ** 2) / (2 * 40 ** 2))
        t -= 45.0 * math.exp(-((wn - 1200) ** 2) / (2 * 50 ** 2))
        t -= 50.0 * math.exp(-((wn - 1050) ** 2) / (2 * 40 ** 2))
        y_pix = 340 - (t / 100) * 230
        pts.append(f'{x_pix:.1f},{y_pix:.1f}')
    curve = ' '.join(pts)
    
    c = f'''
  <text x="410" y="38" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">Infrared (IR) Spectrum</text>
  <text x="410" y="65" text-anchor="middle" font-size="14" fill="{MUTED}">Plot of % Transmittance versus Wavenumber (ν̄ in cm⁻¹)</text>
  
  <rect x="120" y="90" width="350" height="250" fill="#f4f8fc" opacity="0.6"/>
  <rect x="470" y="90" width="250" height="250" fill="#fcf8f4" opacity="0.6"/>
  
  <text x="295" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="{BLUE}">Functional Group Region (4000–1500 cm⁻¹)</text>
  <text x="595" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="{TEAL}">Fingerprint Region (1500–400 cm⁻¹)</text>
  
  <line x1="120" y1="340" x2="720" y2="340" stroke="{DARK}" stroke-width="2.5"/>
  <line x1="120" y1="340" x2="120" y2="90" stroke="{DARK}" stroke-width="2.5" marker-end="url(#arr)"/>
  
  <text x="420" y="380" text-anchor="middle" font-size="15" font-weight="bold" fill="{DARK}">Wavenumber ν̄ (cm⁻¹)</text>
  <text x="45" y="215" text-anchor="middle" font-size="15" font-weight="bold" fill="{DARK}" transform="rotate(-90 45 215)">% Transmittance</text>
  
  <g font-size="12" fill="{MUTED}" text-anchor="middle">
    <line x1="120" y1="340" x2="120" y2="346" stroke="{DARK}"/>
    <text x="120" y="360">4000</text>
    <line x1="203" y1="340" x2="203" y2="346" stroke="{DARK}"/>
    <text x="203" y="360">3500</text>
    <line x1="287" y1="340" x2="287" y2="346" stroke="{DARK}"/>
    <text x="287" y="360">3000</text>
    <line x1="370" y1="340" x2="370" y2="346" stroke="{DARK}"/>
    <text x="370" y="360">2500</text>
    <line x1="453" y1="340" x2="453" y2="346" stroke="{DARK}"/>
    <text x="453" y="360">2000</text>
    <line x1="537" y1="340" x2="537" y2="346" stroke="{DARK}"/>
    <text x="537" y="360">1500</text>
    <line x1="620" y1="340" x2="620" y2="346" stroke="{DARK}"/>
    <text x="620" y="360">1000</text>
    <line x1="720" y1="340" x2="720" y2="346" stroke="{DARK}"/>
    <text x="720" y="360">400</text>
  </g>
  
  <g font-size="11" fill="{MUTED}" text-anchor="end">
    <text x="110" y="344">0%</text>
    <text x="110" y="284">25%</text>
    <text x="110" y="226">50%</text>
    <text x="110" y="169">75%</text>
    <text x="110" y="114">100%</text>
  </g>
  
  <polyline points="{curve}" fill="none" stroke="{DARK}" stroke-width="2.5"/>
  
  <g font-size="11" fill="{DARK}" text-anchor="middle">
    <text x="228" y="250">O–H / N–H</text>
    <line x1="228" y1="235" x2="228" y2="205" stroke="{MUTED}" stroke-dasharray="2,2"/>
    <text x="293" y="240">C–H</text>
    <text x="500" y="225">C=O</text>
    <line x1="500" y1="210" x2="500" y2="175" stroke="{MUTED}" stroke-dasharray="2,2"/>
  </g>
'''
    save_svg('page-044-image-1-clean.svg', w, h, c, 'Infrared (IR) Spectrum Graph')

def gen_molecular_vibrations_flowchart():
    w, h = 920, 680
    
    def molecule_vibration(cx, cy, mode):
        res = f'''
        <circle cx="{cx}" cy="{cy}" r="12" fill="{DARK}"/>
        <text x="{cx}" y="{cy+4}" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">C</text>
        <circle cx="{cx-30}" cy="{cy+28}" r="8" fill="{TEAL}"/>
        <text x="{cx-30}" y="{cy+31}" text-anchor="middle" font-size="9" fill="#ffffff">H</text>
        <circle cx="{cx+30}" cy="{cy+28}" r="8" fill="{TEAL}"/>
        <text x="{cx+30}" y="{cy+31}" text-anchor="middle" font-size="9" fill="#ffffff">H</text>
        <line x1="{cx-9}" y1="{cy+9}" x2="{cx-23}" y2="{cy+22}" stroke="{DARK}" stroke-width="2.5"/>
        <line x1="{cx+9}" y1="{cy+9}" x2="{cx+23}" y2="{cy+22}" stroke="{DARK}" stroke-width="2.5"/>
'''
        if mode == 'sym_stretch':
            res += f'''
        <line x1="{cx-36}" y1="{cy+34}" x2="{cx-48}" y2="{cy+45}" stroke="{BLUE}" stroke-width="2" marker-end="url(#arr-blue)"/>
        <line x1="{cx+36}" y1="{cy+34}" x2="{cx+48}" y2="{cy+45}" stroke="{BLUE}" stroke-width="2" marker-end="url(#arr-blue)"/>
'''
        elif mode == 'asym_stretch':
            res += f'''
        <line x1="{cx-36}" y1="{cy+34}" x2="{cx-48}" y2="{cy+45}" stroke="{BLUE}" stroke-width="2" marker-end="url(#arr-blue)"/>
        <line x1="{cx+44}" y1="{cy+40}" x2="{cx+34}" y2="{cy+30}" stroke="{BLUE}" stroke-width="2" marker-end="url(#arr-blue)"/>
'''
        elif mode == 'scissoring':
            res += f'''
        <path d="M {cx-40} {cy+28} Q {cx-35} {cy+15} {cx-15} {cy+20}" fill="none" stroke="{GREEN}" stroke-width="2" marker-end="url(#arr-green)"/>
        <path d="M {cx+40} {cy+28} Q {cx+35} {cy+15} {cx+15} {cy+20}" fill="none" stroke="{GREEN}" stroke-width="2" marker-end="url(#arr-green)"/>
'''
        elif mode == 'rocking':
            res += f'''
        <path d="M {cx-40} {cy+25} Q {cx-25} {cy+15} {cx-15} {cy+25}" fill="none" stroke="{GREEN}" stroke-width="2" marker-end="url(#arr-green)"/>
        <path d="M {cx+20} {cy+25} Q {cx+35} {cy+15} {cx+45} {cy+25}" fill="none" stroke="{GREEN}" stroke-width="2" marker-end="url(#arr-green)"/>
'''
        elif mode == 'wagging':
            res += f'''
        <circle cx="{cx-30}" cy="{cy+45}" r="6" fill="#f0fdf4" stroke="{TEAL}" stroke-width="1.5"/>
        <text x="{cx-30}" y="{cy+48}" text-anchor="middle" font-size="10" font-weight="bold" fill="{TEAL}">+</text>
        <circle cx="{cx+30}" cy="{cy+45}" r="6" fill="#f0fdf4" stroke="{TEAL}" stroke-width="1.5"/>
        <text x="{cx+30}" y="{cy+48}" text-anchor="middle" font-size="10" font-weight="bold" fill="{TEAL}">+</text>
        <text x="{cx}" y="{cy+55}" text-anchor="middle" font-size="9" fill="{MUTED}">both up (+)</text>
'''
        elif mode == 'twisting':
            res += f'''
        <circle cx="{cx-30}" cy="{cy+45}" r="6" fill="#f0fdf4" stroke="{TEAL}" stroke-width="1.5"/>
        <text x="{cx-30}" y="{cy+48}" text-anchor="middle" font-size="10" font-weight="bold" fill="{TEAL}">+</text>
        <circle cx="{cx+30}" cy="{cy+45}" r="6" fill="#fef2f2" stroke="{RED}" stroke-width="1.5"/>
        <text x="{cx+30}" y="{cy+48}" text-anchor="middle" font-size="10" font-weight="bold" fill="{RED}">−</text>
        <text x="{cx}" y="{cy+55}" text-anchor="middle" font-size="9" fill="{MUTED}">one up / one down</text>
'''
        return res

    c = f'''
  <text x="460" y="38" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">Classification of Molecular Vibrations in IR Spectroscopy</text>
  <text x="460" y="62" text-anchor="middle" font-size="13" fill="{MUTED}">Absorption of infrared radiation changes dipole moments via stretching and bending vibrations</text>
  
  <rect x="335" y="80" width="250" height="45" rx="8" fill="{DARK}"/>
  <text x="460" y="108" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">Molecular Vibrations</text>
  
  <path d="M 410 125 L 410 150 L 220 150 L 220 175" fill="none" stroke="{DARK}" stroke-width="2.5" marker-end="url(#arr)"/>
  <path d="M 510 125 L 510 150 L 680 150 L 680 175" fill="none" stroke="{DARK}" stroke-width="2.5" marker-end="url(#arr)"/>
  
  <g transform="translate(60, 180)">
    <rect width="320" height="70" rx="10" fill="{ACCENT_BG}" stroke="{BLUE}" stroke-width="2"/>
    <text x="160" y="28" text-anchor="middle" font-size="16" font-weight="bold" fill="{BLUE}">1. Stretching Vibrations</text>
    <text x="160" y="48" text-anchor="middle" font-size="12" fill="{INK}">Bond length changes · Bond angle unchanged</text>
    <text x="160" y="62" text-anchor="middle" font-size="11" fill="{MUTED}">Higher energy (higher wavenumber)</text>
    
    <path d="M 90 70 L 90 100" fill="none" stroke="{DARK}" stroke-width="2" marker-end="url(#arr)"/>
    <path d="M 230 70 L 230 100" fill="none" stroke="{DARK}" stroke-width="2" marker-end="url(#arr)"/>
    
    <g transform="translate(10, 105)">
      <rect width="140" height="150" rx="8" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
      <text x="70" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="{INK}">Symmetric</text>
      <text x="70" y="40" text-anchor="middle" font-size="10" fill="{MUTED}">Bonds extend together</text>
      {molecule_vibration(70, 75, 'sym_stretch')}
    </g>
    
    <g transform="translate(170, 105)">
      <rect width="140" height="150" rx="8" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
      <text x="70" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="{INK}">Asymmetric</text>
      <text x="70" y="40" text-anchor="middle" font-size="10" fill="{MUTED}">One extends, one compresses</text>
      {molecule_vibration(70, 75, 'asym_stretch')}
    </g>
  </g>
  
  <g transform="translate(420, 180)">
    <rect width="460" height="70" rx="10" fill="{LIGHT_GREEN}" stroke="{GREEN}" stroke-width="2"/>
    <text x="230" y="28" text-anchor="middle" font-size="16" font-weight="bold" fill="{GREEN}">2. Bending Vibrations (Deformation)</text>
    <text x="230" y="48" text-anchor="middle" font-size="12" fill="{INK}">Bond length unchanged · Bond angle changes</text>
    <text x="230" y="62" text-anchor="middle" font-size="11" fill="{MUTED}">Lower energy (lower wavenumber)</text>
    
    <path d="M 120 70 L 120 95" fill="none" stroke="{DARK}" stroke-width="2" marker-end="url(#arr)"/>
    <path d="M 340 70 L 340 95" fill="none" stroke="{DARK}" stroke-width="2" marker-end="url(#arr)"/>
    
    <g transform="translate(10, 100)">
      <rect width="210" height="30" rx="6" fill="#e2ece9"/>
      <text x="105" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="{DARK}">In-Plane Bending</text>
      
      <path d="M 55 30 L 55 50" fill="none" stroke="{DARK}" stroke-width="1.5" marker-end="url(#arr)"/>
      <path d="M 155 30 L 155 50" fill="none" stroke="{DARK}" stroke-width="1.5" marker-end="url(#arr)"/>
      
      <g transform="translate(0, 55)">
        <rect width="100" height="150" rx="8" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
        <text x="50" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="{INK}">Scissoring</text>
        <text x="50" y="36" text-anchor="middle" font-size="9" fill="{MUTED}">Move together</text>
        {molecule_vibration(50, 72, 'scissoring')}
      </g>
      
      <g transform="translate(110, 55)">
        <rect width="100" height="150" rx="8" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
        <text x="50" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="{INK}">Rocking</text>
        <text x="50" y="36" text-anchor="middle" font-size="9" fill="{MUTED}">Swing same side</text>
        {molecule_vibration(50, 72, 'rocking')}
      </g>
    </g>
    
    <g transform="translate(240, 100)">
      <rect width="210" height="30" rx="6" fill="#e2ece9"/>
      <text x="105" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="{DARK}">Out-of-Plane Bending</text>
      
      <path d="M 55 30 L 55 50" fill="none" stroke="{DARK}" stroke-width="1.5" marker-end="url(#arr)"/>
      <path d="M 155 30 L 155 50" fill="none" stroke="{DARK}" stroke-width="1.5" marker-end="url(#arr)"/>
      
      <g transform="translate(0, 55)">
        <rect width="100" height="150" rx="8" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
        <text x="50" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="{INK}">Wagging</text>
        <text x="50" y="36" text-anchor="middle" font-size="9" fill="{MUTED}">Up &amp; down together</text>
        {molecule_vibration(50, 72, 'wagging')}
      </g>
      
      <g transform="translate(110, 55)">
        <rect width="100" height="150" rx="8" fill="#fafbfc" stroke="{BORDER}" stroke-width="1.5"/>
        <text x="50" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="{INK}">Twisting</text>
        <text x="50" y="36" text-anchor="middle" font-size="9" fill="{MUTED}">Opposite sides</text>
        {molecule_vibration(50, 72, 'twisting')}
      </g>
    </g>
  </g>
  
  <rect x="60" y="615" width="820" height="42" rx="8" fill="#f8fafc" stroke="{BORDER}" stroke-width="1"/>
  <text x="470" y="641" text-anchor="middle" font-size="13" fill="{INK}">Hooke\'s Law for stretching frequency: ν̄ = (1 / 2πc) · √(K / μ)  where K = force constant, μ = reduced mass (m₁m₂ / (m₁+m₂))</text>
'''
    save_svg('page-045-image-1-clean.svg', w, h, c, 'Classification of Molecular Vibrations')

def gen_dielectric_analysis_furnace():
    w, h = 800, 460
    c = f'''
  <text x="400" y="36" text-anchor="middle" font-size="22" font-weight="bold" fill="{INK}">Dielectric Analysis (DEA) Instrumentation</text>
  <text x="400" y="62" text-anchor="middle" font-size="14" fill="{MUTED}">Furnace chamber and parallel-plate electrode sample holder assembly</text>
  
  <g transform="translate(220, 90)">
    <rect x="0" y="0" width="360" height="270" rx="16" fill="#f1f5f9" stroke="{DARK}" stroke-width="3"/>
    <text x="180" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="{DARK}">Programmable Thermal Chamber (Furnace)</text>
    
    <g stroke="{RED}" stroke-width="2.5" fill="none">
      <path d="M 20 45 Q 28 55 20 65 T 20 85 T 20 105 T 20 125 T 20 145 T 20 165 T 20 185 T 20 205 T 20 225"/>
      <path d="M 340 45 Q 348 55 340 65 T 340 85 T 340 105 T 340 125 T 340 145 T 340 165 T 340 185 T 340 205 T 340 225"/>
    </g>
    <text x="35" y="245" font-size="10" fill="{RED}">Heating coils</text>
    
    <rect x="65" y="45" width="230" height="195" rx="8" fill="#ffffff" stroke="{LINE_COL}" stroke-width="1.5"/>
    
    <rect x="110" y="90" width="140" height="18" rx="4" fill="#cbd5e1" stroke="{DARK}" stroke-width="2"/>
    <text x="180" y="104" text-anchor="middle" font-size="11" font-weight="bold" fill="{DARK}">Upper Electrode</text>
    
    <rect x="120" y="118" width="120" height="24" rx="4" fill="{TEAL}" stroke="{TEAL}" stroke-width="1.5"/>
    <text x="180" y="134" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Sample Disk</text>
    
    <rect x="110" y="152" width="140" height="18" rx="4" fill="#cbd5e1" stroke="{DARK}" stroke-width="2"/>
    <text x="180" y="166" text-anchor="middle" font-size="11" font-weight="bold" fill="{DARK}">Lower Electrode</text>
    
    <line x1="180" y1="90" x2="180" y2="45" stroke="{BLUE}" stroke-width="2.5"/>
    <circle cx="180" cy="45" r="4" fill="{BLUE}"/>
    
    <line x1="180" y1="170" x2="180" y2="215" stroke="{BLUE}" stroke-width="2.5"/>
    <circle cx="180" cy="215" r="4" fill="{BLUE}"/>
    
    <line x1="245" y1="130" x2="280" y2="130" stroke="{GREEN}" stroke-width="2"/>
    <circle cx="245" cy="130" r="3" fill="{GREEN}"/>
    <text x="285" y="134" font-size="10" font-weight="bold" fill="{GREEN}">Thermocouple</text>
  </g>
  
  <g transform="translate(30, 110)">
    <rect width="150" height="85" rx="8" fill="{ACCENT_BG}" stroke="{BLUE}" stroke-width="1.5"/>
    <text x="75" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="{BLUE}">AC Frequency</text>
    <text x="75" y="46" text-anchor="middle" font-size="13" font-weight="bold" fill="{BLUE}">Generator</text>
    <text x="75" y="68" text-anchor="middle" font-size="11" fill="{MUTED}">(10⁻³ to 10⁶ Hz)</text>
    
    <path d="M 150 152 L 220 152 L 220 135 L 400 135" fill="none" stroke="{BLUE}" stroke-width="2" marker-end="url(#arr-blue)"/>
  </g>
  
  <g transform="translate(30, 240)">
    <rect width="150" height="85" rx="8" fill="{ACCENT_BG}" stroke="{DARK}" stroke-width="1.5"/>
    <text x="75" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="{DARK}">Dielectric</text>
    <text x="75" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="{DARK}">Analyzer (DEA)</text>
    <text x="75" y="70" text-anchor="middle" font-size="10" fill="{MUTED}">Measures ε\' and ε\'\'</text>
  </g>
  
  <g transform="translate(615, 175)">
    <rect width="155" height="85" rx="8" fill="{LIGHT_GREEN}" stroke="{GREEN}" stroke-width="1.5"/>
    <text x="77" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="{GREEN}">Temperature</text>
    <text x="77" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="{GREEN}">Controller</text>
    <text x="77" y="70" text-anchor="middle" font-size="10" fill="{MUTED}">Programmable ramp</text>
    
    <path d="M 0 42 L -35 42" fill="none" stroke="{GREEN}" stroke-width="2" marker-end="url(#arr-green)"/>
  </g>
  
  <rect x="50" y="390" width="700" height="52" rx="8" fill="#f8fafc" stroke="{BORDER}" stroke-width="1"/>
  <text x="400" y="412" text-anchor="middle" font-size="13" font-weight="bold" fill="{INK}">DEA measures dielectric permittivity (ε\') and dielectric loss factor (ε\'\')</text>
  <text x="400" y="430" text-anchor="middle" font-size="12" fill="{MUTED}">Monitors molecular dipole mobility, glass transitions (Tg), and curing kinetics as a function of temperature and frequency.</text>
'''
    save_svg('page-058-image-1-clean.svg', w, h, c, 'Dielectric Analysis (DEA) Setup')

gen_electronic_transitions_overview()
gen_molecule_diagrams()
gen_uv_vis_spectrum()
gen_uv_vis_transition_principle()
gen_h_bonding_diagrams()
gen_born_oppenheimer_levels()
gen_atomic_vs_molecular_spectra()
gen_conjugated_systems_comparison()
gen_compounds_transitions_summary()
gen_ir_spectrum()
gen_molecular_vibrations_flowchart()
gen_dielectric_analysis_furnace()

print('All Module 3 chemistry SVGs generated successfully.')

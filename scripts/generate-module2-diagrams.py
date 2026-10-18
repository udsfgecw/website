"""Generate Module 2's accessible, standalone SVG teaching diagrams (stdlib only)."""
from pathlib import Path
from html import escape

OUT = Path(__file__).resolve().parents[1] / 'public/notes/cse/s1/python/module-2/assets'
OUT.mkdir(parents=True, exist_ok=True)
INK, GREEN, FILL = '#173f35', '#28765a', '#edf6f0'

def text(x,y,label,size=19):
    lines=label.split('\n')
    return f'<text x="{x}" y="{y-(len(lines)-1)*12}" text-anchor="middle" fill="{INK}" font-size="{size}">' + ''.join(f'<tspan x="{x}" dy="{0 if i==0 else 25}">{escape(line)}</tspan>' for i,line in enumerate(lines))+'</text>'

def shape(kind,x,y,label,w=250,h=64):
    left,top=x-w/2,y-h/2
    attrs=f'fill="{FILL}" stroke="{GREEN}" stroke-width="2.5"'
    if kind=='decision':
        h=104; top=y-h/2
        body=f'<polygon points="{x},{top} {x+w/2},{y} {x},{y+h/2} {left},{y}" {attrs}/>'
    elif kind=='io':
        body=f'<polygon points="{left+24},{top} {left+w},{top} {left+w-24},{top+h} {left},{top+h}" {attrs}/>'
    elif kind=='loop':
        body=f'<polygon points="{left+28},{top} {left+w-28},{top} {left+w},{y} {left+w-28},{top+h} {left+28},{top+h} {left},{y}" {attrs}/>'
    elif kind=='circle': body=f'<circle cx="{x}" cy="{y}" r="32" {attrs}/>'
    elif kind=='offpage': body=f'<polygon points="{x-48},{y-32} {x+48},{y-32} {x+48},{y+12} {x},{y+42} {x-48},{y+12}" {attrs}/>'
    else:
        body=f'<rect x="{left}" y="{top}" width="{w}" height="{h}" rx="{h/2 if kind=="terminal" else 0}" {attrs}/>'
        if kind=='module': body+=f'<path d="M{left+17},{top}v{h} M{left+w-17},{top}v{h}" fill="none" stroke="{GREEN}" stroke-width="2.5"/>'
    return body+text(x,y+6,label)

def arrow(points,label='',lx=None,ly=None):
    result=f'<polyline points="{" ".join(f"{x},{y}" for x,y in points)}" fill="none" stroke="{GREEN}" stroke-width="2.3" marker-end="url(#arrow)"/>'
    if label:
        x,y=points[0]
        result+=text(lx if lx is not None else x+27,ly if ly is not None else y+28,label,16)
    return result

def svg(name,title,description,body,height=250,width=720):
    display_width = min(width, 720)
    display_height = height * display_width / width
    doc=f'''<svg xmlns="http://www.w3.org/2000/svg" width="{display_width}" height="{display_height:g}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title desc">
<title id="title">{escape(title)}</title><desc id="desc">{escape(description)}</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="{GREEN}"/></marker></defs>
<rect width="100%" height="100%" rx="16" fill="#fff"/>
<g font-family="Arial, Helvetica, sans-serif">{body}</g></svg>'''
    (OUT/f'{name}.svg').write_text(doc+'\n')
    return body

symbols=[]
def symbol(name,title,description,body):
    svg(name,title,description,text(360,38,title,22)+body+text(360,222,description,16))
    symbols.append((title,body,description))
symbol('symbol-terminator','Start / stop','A rounded terminator marks the beginning or end.',shape('terminal',200,125,'START',220)+shape('terminal',520,125,'STOP',220))
symbol('symbol-flow-lines','Flow lines','Arrowheads show which step is followed next.',shape('process',165,125,'Step 1',180)+shape('process',555,125,'Step 2',180)+arrow([(255,125),(465,125)]))
symbol('symbol-process','Process','Use a rectangle for calculations and assignments.',shape('process',360,125,'total = price × quantity',350))
symbol('symbol-input-output','Input / output','A parallelogram represents reading or displaying data.',shape('io',360,125,'READ age / PRINT fare',350))
symbol('symbol-decision','Decision','Label each outgoing branch with its outcome.',shape('decision',360,125,'age >= 18?',250)+arrow([(235,125),(135,125)],'No',175,110)+arrow([(485,125),(585,125)],'Yes',540,110))
symbol('symbol-connectors','On-page / off-page connectors','Matching labels show where the flow continues.',shape('circle',220,125,'A')+shape('offpage',500,125,'B')+text(220,187,'Same page',16)+text(500,187,'Another page',16))
symbol('symbol-module','Predefined process / module','Double vertical edges mark a named subroutine call.',shape('module',360,125,'CALL calculate_average',350))
symbol('symbol-loop','Counter-loop notation','Course convention: show the counter, bounds, and step.',shape('loop',360,125,'i = 1 TO n, STEP 1',350))
# One SVG sheet gives a native preview of the complete symbol set.
body=text(400,45,'Flowchart symbols · Module 2',28)
for i,(title,inner,desc) in enumerate(symbols):
    x=20+(i%2)*390; y=75+(i//2)*200
    body+=f'<g transform="translate({x},{y})"><rect width="370" height="184" rx="12" fill="#f7faf8" stroke="#dce9df"/>'
    body+=text(185,30,title,17)+f'<g transform="translate(5,8) scale(0.5)">{inner}</g></g>'
svg('flowchart-symbols-preview','Flowchart symbol reference','Eight flowchart symbols: terminator, flow lines, process, input/output, decision, connectors, module, and counter loop.',body,900,800)

# Charts have explicit positions and routes so loops and branches retain their meaning.
def chain(name,title,items):
    b=text(360,35,title,23)
    for i,(kind,label) in enumerate(items):
        y=100+i*110
        b+=shape(kind,360,y,label,390)
        if i: b+=arrow([(360,y-78),(360,y-34)])
    svg(name,title,'Follow the arrows from start to stop.',b,160+(len(items)-1)*110)
chain('flow-simple-interest','Calculate simple interest',[('terminal','Start'),('io','READ principal, rate, years'),('process','interest = principal × rate × years / 100'),('io','PRINT interest'),('terminal','Stop')])
chain('flow-algorithm-to-code','From an idea to a program',[('process','Describe the algorithm'),('process','Write pseudocode'),('process','Implement and check the program')])

def two_way(name,title,read,condition,yes,no,output):
    b=text(360,35,title,23)+shape('terminal',360,90,'Start')+shape('io',360,195,read)+shape('decision',360,320,condition)
    b+=arrow([(360,122),(360,161)])+arrow([(360,227),(360,266)])
    b+=shape('process',180,465,yes,275)+shape('process',540,465,no,275)
    b+=arrow([(235,320),(180,320),(180,431)],'Yes',200,300)+arrow([(485,320),(540,320),(540,431)],'No',520,300)
    b+=shape('io',360,590,output,340)+shape('terminal',360,700,'Stop')
    b+=arrow([(180,497),(180,535),(360,535),(360,556)])+arrow([(540,497),(540,535),(360,535),(360,556)])+arrow([(360,622),(360,666)])
    svg(name,title,'Read the input, evaluate the decision, follow the labelled branch, then display the result.',b,765)
two_way('flow-larger-two','Larger of two numbers','READ a, b','a >= b?','largest = a','largest = b','PRINT largest')
two_way('flow-parity','Odd or even?','READ number','number MOD 2 = 0?','result = Even','result = Odd','PRINT result')

def ladder(name,title,read,conditions,values,output):
    b=text(360,35,title,23)+shape('terminal',260,90,'Start',220)+shape('io',260,195,read,280)+arrow([(260,122),(260,161)])
    for i,cond in enumerate(conditions):
        y=330+i*175
        b+=shape('decision',260,y,cond,290)+arrow([(260,227 if i==0 else y-123),(260,y-54)])
        b+=shape('process',560,y,values[i],230)+arrow([(405,y),(443,y)],'Yes',423,y-15)
        b+=arrow([(675,y),(700,y),(700,330+len(conditions)*175+115)],'',0,0)
        b+=text(285,y+80,'No',16)
    y=330+len(conditions)*175
    b+=shape('process',260,y,values[-1],280)+arrow([(260,y-123),(260,y-34)])
    out_y=y+150
    b+=shape('io',360,out_y,output,350)+arrow([(260,y+32),(260,out_y-65),(360,out_y-65),(360,out_y-34)])
    b+=arrow([(700,out_y-35),(700,out_y),(537,out_y)])
    b+=shape('terminal',360,out_y+110,'Stop')+arrow([(360,out_y+32),(360,out_y+76)])
    svg(name,title,'Check conditions in order. A matching branch joins the output directly; it does not test later conditions.',b,out_y+175)
ladder('flow-zoo-fare','Zoo ticket fare','READ age',['age < 10?','age < 60?'],['fare = 7','fare = 10','fare = 5'],'PRINT fare')
ladder('flow-concert-fare','Concert ticket fare','READ age',['age < 16?','age >= 65?'],['fare = 7','fare = 5','fare = 10'],'PRINT fare')
ladder('flow-colour','Colour-code selection','READ code',['code = R?','code = G?','code = B?'],['result = Red','result = Green','result = Blue','result = Wrong code'],'PRINT result')
ladder('flow-commission','Select a commission rate','READ sales',['sales <= 2000?','sales <= 4000?','sales <= 6000?'],['rate = 0.02','rate = 0.04','rate = 0.07','rate = 0.06'],'PRINT rate')

def factorial(name,descending=False):
    title='Factorial · '+('descending counter' if descending else 'ascending counter')
    b=text(360,35,title,23)+shape('terminal',360,90,'Start')+shape('io',360,190,'READ n; n is an integer >= 0',380)
    b+=shape('process',360,290,'fact = 1; i = '+('n' if descending else '1'),340)+shape('decision',360,420,'i >= 1?' if descending else 'i <= n?',280)
    for a,z in [(122,156),(222,256),(322,366)]:b+=arrow([(360,a),(360,z)])
    b+=shape('process',360,555,'fact = fact × i',340)+shape('process',360,665,'i = i - 1' if descending else 'i = i + 1',340)
    b+=arrow([(360,472),(360,521)],'Yes',390,500)+arrow([(360,587),(360,631)])+arrow([(360,697),(120,697),(120,420),(218,420)])
    b+=shape('io',360,795,'PRINT fact',340)+shape('terminal',360,900,'Stop')
    b+=arrow([(500,420),(650,420),(650,740),(360,740),(360,761)],'No',555,402)+arrow([(360,827),(360,866)])
    svg(name,title,'Initialize the product to one. Multiply by each counter value while the condition holds. When the loop finishes, print the factorial.',b,965)
factorial('flow-factorial-up'); factorial('flow-factorial-down',True)
# Minimum: update the candidate twice; both paths continue to the next comparison.
b=text(360,35,'Smallest of three numbers',23)
for kind,x,y,label,w in [('terminal',360,90,'Start',250),('io',360,195,'READ a, b, c',300),('process',360,300,'smallest = a',300),('decision',360,430,'b < smallest?',300),('process',585,540,'smallest = b',230),('decision',360,670,'c < smallest?',300),('process',585,780,'smallest = c',230),('io',360,910,'PRINT smallest',320),('terminal',360,1020,'Stop',250)]: b+=shape(kind,x,y,label,w)
for a,z in [(122,161),(227,266),(332,376)]:b+=arrow([(360,a),(360,z)])
for y in [430,670]:
    b+=arrow([(510,y),(585,y),(585,y+76)],'Yes',555,y-15)
    b+=arrow([(585,y+142),(585,y+185),(360,y+185),(360,y+186)])
    b+=arrow([(360,y+52),(360,y+186)],'No',390,y+110)
b+=arrow([(360,942),(360,986)])
svg('flow-smallest-three','Smallest of three numbers','Start with a as the minimum. Compare b, then c, updating the minimum only when a smaller value is found. Equal values are handled.',b,1085)
two_way('flow-group-average','Calculate one group average','Use validated total and count','count > 0?','result = total / count','result = No data','PRINT result')
print(f'Generated {len(list(OUT.glob("*.svg")))} Module 2 SVG diagrams.')

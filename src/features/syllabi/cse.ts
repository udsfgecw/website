import type { Branch, Semester, SubjectNotes } from "@/data/notes";
import type { Chapter, NotesModule, NotesPage } from "@/features/notes/types";

type Topic = { title: string; subtopics: string[] };
type Module = { title: string; hours: number; topics: Topic[] };
type Course = {
  objectives: string[];
  modules: Module[];
  outcomes: string[];
  cie: string[];
};

const courses: Record<string, Course> = {
  GAMAT101: {
    objectives: ["Use calculus to study functions of several variables, identify extrema, and solve optimization problems."],
    modules: [
      { title: "Differential calculus", hours: 9, topics: [
        { title: "Limits and continuity", subtopics: ["Limits of function values", "Continuity at a point and continuity of functions"] },
        { title: "Rates of change and derivatives", subtopics: ["Derivative at a point and as a function", "Second and higher-order derivatives", "Instantaneous rates of change", "Chain rule and implicit differentiation"] },
        { title: "Applications of derivatives", subtopics: ["Tangents and normal lines", "Linearization", "Concavity and the second-derivative test for concavity"] },
      ] },
      { title: "Functions of several variables", hours: 9, topics: [
        { title: "Functions of two or more variables", subtopics: ["Domains and ranges", "Level curves", "Limits and continuity"] },
        { title: "Partial derivatives", subtopics: ["Partial derivatives of functions of two or more variables", "Partial derivatives and continuity", "Second-order partial derivatives", "Mixed derivative theorem"] },
        { title: "Multivariable chain rule", subtopics: ["Chain rule for functions of two variables"] },
      ] },
      { title: "Directional derivatives and extrema", hours: 9, topics: [
        { title: "Directional derivatives and gradient", subtopics: ["Chain rule for functions of three variables", "Directional derivatives in the plane", "Interpretation and properties of the directional derivative", "Gradient"] },
        { title: "Local extreme values", subtopics: ["Relative extrema and critical points", "Saddle points", "First- and second-derivative tests for local extrema"] },
        { title: "Absolute extrema", subtopics: ["Absolute maxima and minima on closed, bounded regions"] },
      ] },
      { title: "Optimization and linear programming", hours: 9, topics: [
        { title: "Constrained optimization", subtopics: ["Constrained maxima and minima", "Lagrange multipliers with one constraint", "Lagrange multipliers with two constraints"] },
        { title: "Further methods", subtopics: ["Steepest descent for two variables"] },
        { title: "Linear programming", subtopics: ["Formulation of a linear programming problem", "Graphical solution method"] },
      ] },
    ],
    outcomes: ["Linearize functions and analyze concavity.", "Find limits and partial derivatives of multivariable functions.", "Interpret directional derivatives and solve multivariable maxima and minima.", "Solve constrained optimization and graphical linear programming problems."],
    cie: ["Attendance — 5 marks", "Assignment or microproject — 15 marks", "Two written internal examinations — 10 marks each"],
  },
  GAPHT121: {
    objectives: ["Build a foundation in physics relevant to information science and engineering.", "Connect theory with practical work and engineering applications."],
    modules: [
      { title: "Electrical conductivity and superconductivity", hours: 9, topics: [
        { title: "Free-electron theory", subtopics: ["Classical free-electron theory", "Electrical conductivity in metals", "Fermi–Dirac distribution and its variation with temperature", "Fermi energy"] },
        { title: "Energy bands and materials", subtopics: ["Energy bands", "Conductors, semiconductors and insulators"] },
        { title: "Superconductivity", subtopics: ["Transition temperature and critical field", "Meissner effect", "Type I and Type II superconductors", "BCS theory and applications"] },
      ] },
      { title: "Quantum mechanics", hours: 9, topics: [
        { title: "Foundations", subtopics: ["Uncertainty and conjugate observables (qualitative)", "Uncertainty principle (statement)", "Applications: absence of electrons inside the nucleus and natural line broadening"] },
        { title: "Wave functions and Schrödinger equations", subtopics: ["Properties and physical interpretation of the wave function", "Time-dependent and time-independent Schrödinger equations"] },
        { title: "Quantum models", subtopics: ["Particle in a one-dimensional box: energy eigenvalues and normalized wave function", "Quantum-mechanical tunnelling (qualitative)"] },
      ] },
      { title: "Semiconductor physics", hours: 9, topics: [
        { title: "Charge carriers", subtopics: ["Intrinsic semiconductors", "Electron and hole densities in the conduction and valence bands", "Intrinsic carrier concentration and its temperature dependence", "Extrinsic semiconductors (qualitative)"] },
        { title: "The p–n junction", subtopics: ["Junction formation and Fermi levels", "Energy-band diagram", "Charge flow across a junction", "Forward and reverse bias", "Diode equation and I–V characteristics"] },
      ] },
      { title: "Semiconductor and photonic devices", hours: 9, topics: [
        { title: "Semiconductor devices", subtopics: ["Half-wave and full-wave rectifiers", "Zener and tunnel diode I–V characteristics", "Semiconductor laser: construction, working and applications"] },
        { title: "Photonic devices", subtopics: ["Junction and PIN photodetectors (qualitative)", "Solar-cell I–V characteristics and efficiency", "Connecting solar cells into a panel", "LEDs and applications"] },
      ] },
    ],
    outcomes: ["Explain electrical conductivity and superconductivity.", "Explain matter at atomic and subatomic scales using quantum mechanics.", "Apply semiconductor physics in engineering.", "Describe semiconductor materials and devices.", "Use physics principles to carry out experiments."],
    cie: ["Attendance — 5 marks", "Continuous assessment — 10 marks", "Two written internal examinations — 10 marks each", "Laboratory examination — 5 marks"],
  },
  GXCYT122: {
    objectives: ["Understand chemistry concepts used in engineering.", "Learn applied topics in spectroscopy, electrochemistry and analytical methods.", "Understand environmental issues, pollution and waste management."],
    modules: [
      { title: "Electrochemistry and corrosion science", hours: 9, topics: [
        { title: "Electrochemical cells", subtopics: ["Electrode potential and the Nernst equation for a single electrode and a cell", "Standard hydrogen and calomel reference electrodes: construction and working", "Electrochemical series and applications", "Glass electrode and pH measurement", "Conductivity measurement using a digital meter"] },
        { title: "Batteries and fuel cells", subtopics: ["Lithium-ion battery: construction and working", "Hydrogen–oxygen fuel cell with acid electrolyte: construction and working"] },
        { title: "Corrosion and protection", subtopics: ["Electrochemical corrosion in acidic and alkaline media", "Galvanic series and corrosion control", "Cathodic protection: sacrificial-anode and impressed-current methods", "Copper electroplating and electroless plating"] },
      ] },
      { title: "Materials for electronic applications", hours: 9, topics: [
        { title: "Nanomaterials", subtopics: ["Classification by dimension and material", "Sol–gel and chemical-reduction synthesis", "Applications", "Carbon nanotubes, fullerenes, graphene and carbon quantum dots: structure, properties and applications"] },
        { title: "Polymers", subtopics: ["Halogenated and non-halogenated fire-retardant polymers (examples)", "Conducting polymers: classification", "Polyaniline and polypyrrole: synthesis, properties and applications"] },
        { title: "Electronic materials and devices", subtopics: ["OLEDs and dye-sensitized solar cells: construction, working and applications", "Materials used in quantum-computing technology", "Supercapacitors and spintronics"] },
      ] },
      { title: "Molecular spectroscopy and analytical techniques", hours: 9, topics: [
        { title: "Spectroscopy", subtopics: ["Types of spectra and molecular energy levels", "Beer–Lambert law and numerical problems", "Electronic spectroscopy: principle, transitions, conjugation, instrumentation and applications", "Vibrational spectroscopy: principle, vibrational modes of CO₂ and H₂O, and applications"] },
        { title: "Thermal analysis", subtopics: ["Dielectric thermal analysis of polymers: working and applications"] },
        { title: "Electron microscopy", subtopics: ["Scanning electron microscopy: principle, instrumentation and applications"] },
      ] },
      { title: "Environmental chemistry", hours: 9, topics: [
        { title: "Water quality and treatment", subtopics: ["Water characteristics and hardness: types, disadvantages and degree of hardness", "Ion-exchange softening: principle, process and advantages", "Reverse osmosis: principle, process and advantages", "Disinfection by chlorination, breakpoint chlorination, ozone and UV", "Dissolved oxygen, BOD and COD: definitions and significance"] },
        { title: "Waste and sustainability", subtopics: ["Sewage treatment: primary, secondary and tertiary stages", "Trickling filter and UASB processes", "E-waste disposal: recycling, recovery and reuse", "Greenhouse gases and ozone depletion", "Sustainable development and the Sustainable Development Goals"] },
      ] },
    ],
    outcomes: ["Explain core electrochemical and corrosion concepts.", "Describe engineering materials and their applications.", "Use analytical techniques to characterize materials.", "Outline water treatment and waste-management methods."],
    cie: ["Attendance — 5 marks", "Continuous assessment — 10 marks", "Two written internal examinations — 10 marks each", "Laboratory examination — 5 marks"],
  },
  GXEST104: {
    objectives: ["Apply circuit laws to basic DC and AC circuits.", "Understand magnetic circuits and three-phase systems.", "Describe electronic devices, communication systems and modern electronics."],
    modules: [
      { title: "DC circuits and magnetic circuits", hours: 11, topics: [
        { title: "DC circuit fundamentals", subtopics: ["Current and voltage division; relative potential", "Capacitor and inductor voltage–current relations and stored energy", "Ohm’s law and Kirchhoff’s laws", "Star–delta conversion for resistive networks", "Mesh-current and node-voltage methods using matrix representation"] },
        { title: "Magnetic circuits", subtopics: ["MMF, field strength, flux density and reluctance", "Comparison of electric and magnetic circuits", "Series and parallel magnetic circuits with composite materials"] },
      ] },
      { title: "Electromagnetic induction and AC circuits", hours: 11, topics: [
        { title: "Electromagnetic induction", subtopics: ["Faraday’s and Lenz’s laws", "Statically and dynamically induced EMF", "Self-inductance, mutual inductance and coefficient of coupling"] },
        { title: "AC fundamentals", subtopics: ["Generation and representation of sinusoidal voltages", "Frequency, period, average value, RMS value and form factor", "Phasor representation in trigonometric, rectangular, polar and complex forms"] },
        { title: "AC circuit analysis", subtopics: ["Purely resistive, inductive and capacitive circuits", "Reactance and impedance", "Series RL, RC and RLC circuits; power factor and power", "Balanced three-phase systems: star and delta connections and line/phase relationships"] },
      ] },
      { title: "Electronic devices", hours: 13, topics: [
        { title: "Diodes and power supplies", subtopics: ["Passive and active electronic components", "PN-junction diode operation and I–V characteristics", "Zener and avalanche breakdown; Zener regulator", "Half-wave, full-wave and bridge rectifiers; ripple factor and filters"] },
        { title: "Transistors", subtopics: ["BJT construction and characteristics", "Common-emitter input/output characteristics; comparison of CE, CB and CC", "Biasing and load line", "Transistor as a switch and amplifier", "RC-coupled amplifier and frequency response"] },
        { title: "Field-effect transistors", subtopics: ["Introduction to FETs", "N-channel and P-channel MOSFET construction and working"] },
      ] },
      { title: "Modern electronics and applications", hours: 9, topics: [
        { title: "Communication systems", subtopics: ["Communication-system and fibre-optic communication block diagrams", "AM and FM concepts; superheterodyne receiver block diagrams", "Wired and wireless communication; GSM block diagram", "Comparison of 3G, 4G, 5G and 6G technologies"] },
        { title: "Electronic instrumentation", subtopics: ["Instrumentation-system block diagram", "Digital multimeter and function generator", "CRO and Lissajous patterns"] },
        { title: "Applications", subtopics: ["IoT-based smart homes, healthcare and agriculture (case studies)"] },
      ] },
    ],
    outcomes: ["Solve basic DC and AC circuits using circuit laws.", "Classify series and parallel magnetic circuits.", "Analyze three-phase AC systems.", "Explain electronic components and devices.", "Outline communication principles.", "Identify applications of modern electronics."],
    cie: ["Attendance — 5 marks", "Assignment or microproject — 15 marks", "Two written internal examinations — 10 marks each"],
  },
  UCEST105: {
    objectives: ["Develop algorithmic thinking and apply it to practical problems.", "Explore problem-solving strategies and algorithmic approaches."],
    modules: [
      { title: "Problem-solving and Python fundamentals", hours: 7, topics: [
        { title: "Problem-solving strategies", subtopics: ["Trial and error", "Heuristics", "Means–ends analysis", "Backtracking (working backward)"] },
        { title: "Problem-solving process", subtopics: ["Computer as a model of computation", "Understand the problem and formulate a model", "Develop an algorithm and write a program", "Test the program and evaluate the solution"] },
        { title: "Python essentials", subtopics: ["Variables and numeric/string data types", "Math module and standard-library basics", "Input and output with `input` and `print`", "Operators and precedence"] },
      ] },
      { title: "Algorithms, flowcharts and control flow", hours: 9, topics: [
        { title: "Algorithms and pseudocode", subtopics: ["Meaning and purpose of pseudocode", "Sequence, selection (`if–else`, `case`) and repetition (`for`, `while`, `repeat–until`)", "Practice problems: expressions, interest, comparisons, grades, loops, factorial and largest value"] },
        { title: "Flowcharts", subtopics: ["Start/end, calculation, input/output and decision symbols", "Module calls, loops, flow lines and page connectors", "Use flowcharts to visualize algorithm control flow"] },
        { title: "Selection, iteration and collections", subtopics: ["`if`, `elif`, `for`, `range` and `while`", "Lists, tuples, sets, strings and dictionaries", "Arrays using NumPy"] },
      ] },
      { title: "Decomposition, functions and recursion", hours: 10, topics: [
        { title: "Decomposition and modularization", subtopics: ["Break complex problems into smaller parts", "Motivation for modular design", "Demonstrations using merge sort and finding the top three values"] },
        { title: "Functions", subtopics: ["Define and use functions", "Functions with multiple return values"] },
        { title: "Recursion", subtopics: ["Recursive calls and the call stack", "Avoid circularity", "Examples: Fibonacci numbers, GCD, factorial, addition and sum of digits"] },
      ] },
      { title: "Computational approaches to problem-solving", hours: 10, topics: [
        { title: "Brute force", subtopics: ["Examples: padlocks and password guessing"] },
        { title: "Divide and conquer", subtopics: ["Merge sort", "Advantages and disadvantages"] },
        { title: "Dynamic programming", subtopics: ["Fibonacci series", "Recursion compared with dynamic programming"] },
        { title: "Greedy algorithms", subtopics: ["Task scheduling by completion time", "Motivation and characteristics", "Greedy methods compared with dynamic programming"] },
        { title: "Randomized algorithms", subtopics: ["Coupon-collector example", "Random hat-check example", "Motivation for randomized approaches"] },
      ] },
    ],
    outcomes: ["Use computing as a model for real-world problems.", "Describe a problem and form a clear model.", "Develop algorithms and implement them as programs.", "Apply problem-solving strategies and essential Python skills."],
    cie: ["Attendance — 5 marks", "Programming-task continuous assessment — 5 marks", "Two written internal examinations — 10 marks each", "Laboratory examination — 10 marks"],
  },
};

const markdownList = (items: string[]) => items.map((item, index) => `${index + 1}. ${item}`).join("\n");

function moduleMarkdown(module: Module, index: number) {
  const topics = module.topics.map((topic, topicIndex) => [
    `${topicIndex + 1}. **${topic.title}**`,
    ...topic.subtopics.map((subtopic) => `   - ${subtopic}`),
  ].join("\n")).join("\n\n");
  return `# Module ${index + 1}: ${module.title}\n\n**Contact hours:** ${module.hours}\n\n${topics}`;
}

function closingMarkdown(course: Course) {
  return [
    "## Course objectives",
    markdownList(course.objectives),
    "## Course outcomes",
    markdownList(course.outcomes),
    "## Assessment",
    "**Continuous Internal Evaluation (CIE): 40 marks**",
    ...course.cie.map((item) => `- ${item}`),
    "**End-Semester Examination (ESE): 60 marks**",
    "- Part A: Eight questions, two from each module, carrying 3 marks each (24 marks). Answer all.",
    "- Part B: Two questions from each module; answer one full question from each module. Each carries 9 marks (36 marks).",
    "- Examination duration: 2 hours 30 minutes.",
  ].join("\n\n");
}

export function cseSyllabusModule(subject: SubjectNotes, branch: Branch, semester: Semester): NotesModule {
  const course = courses[subject.code];
  const pages: NotesPage[] = course
    ? [
        ...course.modules.map((module, index) => ({ number: index + 1, content: moduleMarkdown(module, index) })),
        { number: course.modules.length + 1, content: closingMarkdown(course) },
      ]
    : [];
  const chapters: Chapter[] = [
    ...(course?.modules.map((module, index) => ({ page: index + 1, title: `Module ${index + 1}: ${module.title}` })) ?? []),
    ...(course ? [{ page: pages.length, title: "Course outcomes and assessment" }] : []),
  ];
  return {
    basePath: subject.syllabusHref!,
    storageKey: `udsf:syllabus:${branch.id}:${semester.id}:${subject.code}:v2`,
    title: `${branch.short} ${semester.id.toUpperCase()} ${subject.code} · ${subject.course} syllabus`,
    displayHeading: `Syllabus for ${subject.course}`,
    displayDescription: `${branch.name}, ${semester.name}: KTU 2024 syllabus for ${subject.course} (${subject.code}), including module topics, course outcomes and assessment details.`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branch.short, href: `/notes/${branch.id}` },
      { label: semester.id.toUpperCase(), href: `/notes/${branch.id}/${semester.id}` },
      { label: subject.name.toUpperCase(), href: subject.href },
      { label: "SYLLABUS" },
    ],
    module: "Syllabus",
    course: subject.course,
    code: subject.code,
    summary: "module topics and subtopics",
    source: "KTU 2024 Scheme syllabus. The topics are reorganized into a clearer outline from the source syllabus.",
    pages,
    chapters,
  };
}

<!-- page 1 | Problem-solving strategies: definition, elements, and problem classification -->

## Problem-solving strategies: definition, elements, and problem classification

**Syllabus Overview**

Problem-solving strategies defined, importance of understanding multiple problem-solving strategies, trial and error, heuristics, means-ends analysis, and backtracking (working backward).

### Introduction to Problem Solving

A computer performs tasks by following instructions. To achieve the desired result, one must first understand the problem and then describe the required steps clearly. A problem is a situation whose solution is not immediately obvious.

A problem can be described using four core elements:

- Initial situation
- Goal
- Set of resources
- Commitment

When these elements are clear, a problem is well-defined; when one or more elements are unclear, the problem is ill-defined.

**Well-Defined Problems**

Well-defined problems have specific goals, clear constraints, and definite criteria for recognizing a solution.

**Ill-Defined Problems**

Ill-defined problems have unclear goals or constraints and may allow several reasonable solutions.

### Strategy Fundamentals

**Problem-Solving Strategy**

A problem-solving strategy is a planned approach for finding a solution. It helps define the problem, choose suitable steps, evaluate results, and adjust the approach when needed.

**Importance of Strategy Selection**

Knowing several problem-solving strategies allows practitioners to select the approach best suited to the task. Trial and error works when options are limited; an algorithm is preferred when steps are deterministic and known; heuristics assist when time or data is constrained. The ability to compare and pivot between strategies improves reasoning, flexibility, and overall solution quality.

Key benefits include:

- Adaptability
- Efficiency
- Improved outcomes
- Skill development

Commonly used problem-solving strategies include:

1. Trial and Error
2. Algorithm
3. Heuristics
4. Means-Ends Analysis
5. Backtracking

**Trial and Error**

Trial and error is an empirical problem-solving approach that involves testing a succession of different solutions and ruling out those that do not work. It is practical when the number of candidate solutions is very small.

Operational steps:

1. Identify the problem by clearly specifying the failure or issue.
2. Try a candidate solution.
3. Evaluate the outcome to determine if the solution succeeded.
4. Repeat with a different alternative if the attempt failed.

Examples:

1. Troubleshooting a non-functioning printer by sequentially checking ink levels, verifying that the paper tray is clear, and checking laptop connectivity.
2. Diagnosing phone malfunctions by consecutively restarting the device, toggling Wi-Fi, and resetting Bluetooth.

Although not the most time-efficient technique, trial and error remains widely applied for straightforward diagnostics.

### Core Value of Problem-Solving Strategies

- **Improves Critical Thinking:** Facilitates objective analysis and root-cause identification.
- **Systematic Approach:** Promotes structured methodologies over unsystematic guessing.
- **Saves Time and Effort:** Reduces unguided trial-and-error by applying targeted procedures.
- **Enhances Creativity:** Fosters exploration of alternate perspectives and representations.
- **Better Decision Making:** Supports reasoned evaluation of trade-offs among options.
- **Builds Confidence:** Provides repeatable frameworks for unfamiliar or difficult challenges.
- **Transferable Skill:** Applies uniformly across academic, technical, and professional domains.
- **Collaboration and Communication:** Establishes shared analytical vocabulary for teams.
- **Prepares for Challenges:** Equips individuals to navigate unexpected hurdles methodically.
- **Supports Continuous Learning:** Strengthens analytical reasoning with each resolved problem.

---

<!-- page 2 | Core problem-solving techniques: Trial and error, Heuristics, MEA, and Backtracking -->

## Core problem-solving techniques: Trial and error, Heuristics, MEA, and Backtracking

### Problem-Solving Strategies Overview

Commonly used problem-solving strategies include:

1. Trial and Error
2. Algorithm
3. Heuristics
4. Means-Ends Analysis
5. Backtracking

**Algorithm**

An algorithm is a finite, ordered set of unambiguous steps for solving a problem. A correct algorithm produces the required result for inputs within its stated assumptions; not every algorithm guarantees a solution for every possible input.

*Example: Algorithm for Baking a Cake*

1. Gather ingredients
2. Preheat Oven
3. Mix Ingredients
4. Prepare baking Pan
5. Pour Batter
6. Bake
7. Check for Doneness
8. Cool and Serve

When you run a search on the Internet, search engines like Google use algorithms to decide which entries will appear first in your list of results. Facebook also uses algorithms to decide which posts to display on your newsfeed.

**Heuristics**

Heuristics are practical shortcuts or rules of thumb that help us make decisions quickly, especially when time or information is limited. Unlike a complete algorithm, a heuristic does not guarantee the best or a correct answer; it offers a useful way to make progress. The impulse to use a heuristic typically occurs under one of five conditions:

- When one is faced with too much information
- When the time to make a decision is limited
- When the decision to be made is unimportant
- When there is access to very little information to use in making the decision
- When an appropriate heuristic happens to come to mind in the same moment

### Common Heuristic Strategies

**Breaking into Sub-Tasks**

Breaking a large goal or task into a series of smaller steps makes complex work manageable. For example, when completing a large research project, students typically follow these steps:

1. Brainstorm and develop a thesis or main topic.
2. Research the chosen topic and organize information into an outline.
3. Write a rough draft.
4. Revise and edit the rough draft.
5. Develop a final draft and organize the references list.
6. Proofread the work before turning in the project.

**Guess and Check**

Guess and check is a method that involves making an initial guess, checking if it solves the problem, and refining the guess based on outcomes. This method is particularly useful when a problem lacks an obvious direct solution and different possibilities can be tested.

The process follows four steps:

1. **Make an Initial Guess:** Start by guessing a possible solution based on current knowledge.
2. **Check the Guess:** Determine if the guess solves the problem.
3. **Refine the Guess:** If incorrect, use the feedback to make a better guess.
4. **Repeat:** Continue guessing, checking, and refining until reaching the correct solution.

*Example: Find the number that when added to 15, gives 32.*

1. Initial guess: 20.
2. Check: 15 + 20 = 35 (too large; refine downward).
3. Refined guess: 18.
4. Check: 15 + 18 = 33 (close, but still too large).
5. Refined guess: 17.
6. Check: 15 + 17 = 32 (correct solution).

**Working Backwards**

Working backwards is a heuristic where problem-solving begins by focusing on the desired end result and working in reverse order to determine the required starting point.

For example, to arrive at an important meeting by 3:00 PM:
- Travel time is 30 minutes, requiring departure by 2:30 PM.
- Preparation takes 1 hour, requiring getting ready by 1:30 PM.
- A prior task takes 1 hour, requiring that task to start by 12:30 PM.

### Means-Ends Analysis (MEA)

**Means-Ends Analysis**

Means-ends analysis compares the current state with the goal state, identifies differences between them, and chooses sub-goals (means) that progressively reduce those differences.

#### Example 1: The Tower of Hanoi Puzzle

The Tower of Hanoi consists of three rods: Source (A), Auxiliary (B), and Destination (C). Rod A contains disks stacked by size with the largest at the bottom. The objective is to transfer all disks from Rod A to Rod C while maintaining the proper size ordering.

Rules:
1. Only one disk can be transferred at a time.
2. Each move transfers only the uppermost disk from one rod to another.
3. A larger disk may never be placed on top of a smaller disk.

![Tower of Hanoi initial state with three disks on rod A](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-008-image-1-code.webp)

**Fig 1: Initial State**

The recursive procedure to solve the problem for $N$ disks is:

1. Move the top $N-1$ disks from rod A to rod B, using rod C as the auxiliary rod.
2. Move the largest disk from rod A to rod C.
3. Move the $N-1$ disks from rod B to rod C, using rod A as the auxiliary rod.

The minimum number of moves required to solve the puzzle is $2^N - 1$, where $N$ is the number of disks. For example, with 14 disks, the minimum number of moves is $(2^{14}) - 1 = 16383$.

The steps for $N$ disks, in order:

1. Put $N$ disks on the source peg.
2. Move the top $N-1$ disks recursively to the auxiliary peg.
3. Move the largest disk from the source peg to the destination peg.
4. Move the $N-1$ disks recursively from the auxiliary peg to the destination peg.

*Tower of Hanoi for $n = 3$:*

![Example of Tower of Hanoi for n=3 showing 8 states from 0 to 7](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-009-image-2-code.webp)

Minimum number of moves with 3 disks = $2^n-1 = 2^3-1 = 7$.

*Tower of Hanoi for $n = 4$:*

![Diagram showing the sequence of moves for the Tower of Hanoi problem with 4 disks, steps 0 to 15 in a grid.](/assets/notes/cse/s1/python/module-1/tower-of-hanoi-n4-grid.svg)

Minimum number of moves with 4 disks = $ 2^n - 1 = 2^4 - 1 = 15$.

#### Example 2: Road Trip from Trivandrum to Kashmir

Using means-ends analysis for long-distance travel planning:

1. **Define the Goal:** Drive from Trivandrum to Kashmir.
2. **Analyze Current State:** In Trivandrum with a vehicle ready.
3. **Identify Differences:** Total road distance is approximately 3,700 kilometers.
4. **Set Sub-Goals (Means):**
   - Determine fuel and rest stops.
   - Set daily driving targets of 500–600 km.
   - Select the optimal highway route.
5. **Implement Daily Segment Plan:**
   - Day 1: Trivandrum to Bangalore (~720 km), refuel in Madurai.
   - Day 2: Bangalore to Hyderabad (~570 km), refuel in Anantapur.
   - Day 3: Hyderabad to Nagpur (~500 km), refuel in Adilabad.
   - Day 4: Nagpur to Jhansi (~580 km), refuel in Sagar.
   - Day 5: Jhansi to Agra (~290 km), refuel in Gwalior; visit Taj Mahal.
   - Day 6: Agra to Chandigarh (~450 km), refuel in Karnal.
   - Day 7: Chandigarh to Jammu (~350 km), refuel in Pathankot.
   - Day 8: Jammu to Srinagar, Kashmir (~270 km).
6. **Adjust as Needed:** Monitor traffic, weather, and road conditions along the route.

**Backtracking**

Backtracking is a problem-solving technique that builds candidates incrementally and abandons ("backtracks" from) any candidate path as soon as it determines the path cannot lead to a valid solution.

```mermaid
flowchart TD
X["X · Start node"] --> A["A"]
X --> D["D"]
A --> B["B · Dead end"]
A --> C["C · Dead end"]
D --> E["E · Dead end"]
D --> F["F"]
F --> G["G · Success node"]
```

In the path search problem above, the start node is X and the destination is G:

1. Path X-A-B hits a dead end; backtrack to node A.
2. Path X-A-C hits a dead end; backtrack to root X.
3. Path X-D-E hits a dead end; backtrack to node D.
4. Path X-D-F-G successfully reaches the destination node G.

When a path reaches a dead end, return to the most recent choice point and try an untested option. Continue until a solution is found or all possibilities are exhausted. Standard examples include maze solving and Sudoku. (Repeatedly guessing a device PIN is not a practical example because devices lock after fixed unsuccessful attempts.)

### The Problem-Solving Process and Model of Computation

**Basic Model of a Computer**

Computer science solves real-world and abstract problems using computational models. To solve problems effectively with computers, we utilize the standard information processing model established by the Von Neumann architecture.

```mermaid
flowchart LR
IN["INPUT DEVICE"] --> MEM["Main memory"]
SUB["Secondary memory"] <--> CPU["CPU"]
MEM <--> CPU
CPU --> CU["CU"]
CPU --> ALU["ALU"]
CPU --> OUT["OUT PUT DEVICE"]
```

**BLOCK DIAGRAM OF A DIGITAL COMPUTER**

### Detailed Problem-Solving Techniques

**Trial and Error**

Trial and error is a fundamental problem-solving technique where various candidate solutions are attempted and discarded if unsuccessful until an acceptable solution is discovered. It is suitable when available solution options are few and well-bounded.

Steps in trial and error:

1. **Identify the problem:** Clearly define the issue.
2. **Try a solution:** Attempt a candidate option.
3. **Evaluate the outcome:** Determine if the problem is resolved.
4. **Repeat:** If the attempt failed, select and test another option.

*Everyday Examples:*
- Troubleshooting a malfunctioning printer by testing ink levels, checking for paper jams, and verifying cable or wireless connections.
- Diagnosing a phone issue by restarting the device, toggling Wi-Fi, or cycling Bluetooth.

*Password Recovery Example:*
1. **Initial Attempts:** Try standard passwords ("password123", "Qwerty2024").
2. **Learning from Mistakes:** When common passwords fail, try personal combinations (birthdates, pet names).
3. **Refinement:** Recall formatting patterns (e.g., favorite quote with special characters such as "ToBeOrNotToBe!").
4. **Success:** Systematically reach the valid password: "ToBeOrNotToBe!2024".

**Algorithm (Formal Definition)**

An algorithm is a finite, ordered set of unambiguous steps for solving a problem that terminates with a solution for valid inputs within its specification.

**Heuristics (Revisited)**

Heuristics serve as cognitive strategies that reduce decision complexity when complete information is unavailable. Conditions favoring heuristic decisions include information overload, severe time constraints, low-stakes decisions, or limited data availability.

*Guess and Check Worked Example:*

To find the number that produces 32 when added to 15:
- Initial guess: 20 -> $15+20=35$ (too large).
- Refined guess: 18 -> $15+18=33$ (close, but too large).
- Refined guess: 17 -> $15+17=32$ (exact match).

**Tower of Hanoi (Formal Recurrence)**

![Tower of Hanoi initial state with three vertical rods on a base plate and three stacked disks on the leftmost rod.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-010-image-1.webp)

**Fig 1: Initial State**

The recurrence procedure for $N$ disks requires:

1. Move top $N-1$ disks from rod A to rod B via auxiliary rod C.
2. Move largest disk from rod A to rod C.
3. Move $N-1$ disks from rod B to rod C via auxiliary rod A.

The minimal move sequence is governed by $2^N - 1$, where $N$ represents disk count; for 14 disks, the total is $(2^{14}) - 1 = 16383$ moves.

The step-by-step recursive breakdown for $N=4$ disks is illustrated below:

![Pictorial representation of the recursive procedure for N=4 disks in Tower of Hanoi](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-011-image-1-Imagen.webp)

Tower of Hanoi solutions for small disk sets:

![Tower of Hanoi solution steps for n=3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-012-image-1-Imagen.webp)

Minimum moves for 3 disks = $2^n-1= 2^3-1=7$.

![Tower of Hanoi solution steps for n=4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-012-image-2-Imagen.webp)

Minimum moves for 4 disks = $2^n-1= 2^4-1=15$.

**Road Trip Segment Distances (MEA Route Details)**

- Segment 2: Bangalore to Hyderabad (approx. $570\text{ km}$).
- Segment 3: Hyderabad to Nagpur (approx. $500\text{ km}$).
- Segment 4: Nagpur to Jhansi (approx. $580\text{ km}$).
- Segment 5: Jhansi to Agra (approx. $290\text{ km}$).
- Segment 6: Agra to Chandigarh (approx. $450\text{ km}$).
- Segment 7: Chandigarh to Jammu (approx. $350\text{ km}$).
- Segment 8: Jammu to Srinagar, Kashmir (approx. $270\text{ km}$).

**State-Space Search Backtracking**

![Backtracking search tree diagram showing start node X branching to A and D, A branching to B and C (both dead ends), D branching to E (dead end) and F, and F branching to G (Success node).](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-014-image-1-Imagen.webp)

In systematic state-space exploration, whenever a path hits a dead end, execution rolls back to the most recent decision point to test alternative branches.

### Strategic Importance and Evaluation

**Benefits of Multiple Problem-Solving Strategies**

- **Adaptability:** Different problem classes demand different tools; familiarity with multiple strategies enables dynamic switching when an approach stalls.
- **Efficiency:** Matching the correct strategy to the domain reduces operational time and computational overhead.
- **Improved Outcomes:** Exploring diverse analytical paths increases the likelihood of finding optimal solutions.
- **Skill Development:** Practicing multiple paradigms sharpens algorithmic reasoning, critical thinking, and design fluency.

---

<!-- page 3 | Computer as a model of computation -->

## Computer as a model of computation

The model assumes a single CPU (Central Processing Unit). Many computers today have multiple CPUs, allowing this model to be duplicated multiple times within a single system.

**Instruction Execution Cycle**

An instruction execution cycle (fetch–decode–execute cycle) is the process by which a computer retrieves a program instruction from memory, determines what actions to perform, and carries out those actions to produce meaningful output.

The cycle is summarized in sequential steps:

1. **Fetch** the next instruction from memory.
2. **Decode** the instruction to determine the required operation.
3. **Execute** the operation.
4. **Store** the result in a register or memory, when needed.

This cycle repeats for each subsequent instruction.

```mermaid
flowchart TD
    F[FETCH Instruction] --> D[DECODE instruction]
    D --> E[EXECUTE instruction]
    E --> F
```

A typical computer architecture comprises three main components:

1. **Input/Output (I/O) Unit**
2. **Central Processing Unit (CPU)**
3. **Memory Unit**

The I/O unit consists of input and output devices. Input devices accept data from the user for the CPU to process. Output devices transfer processed data (information) to the user. The memory unit stores input data, instructions required for processing, and output information.

### Computer as a Model of Computation

**Problem Solving**

Problem solving is the sequential process of analyzing information related to a given situation and generating appropriate response options.

Complex computations iterate through input, processing, and output phases. Problem solving follows six defined stages:

1. **Understanding the problem**
2. **Formulating a model**
3. **Developing an algorithm**
4. **Writing the program**
5. **Testing the program**
6. **Evaluating the solution**

#### Understanding the Problem

The initial phase focuses on determining input requirements, output goals, and processing operations.

**Example 1: Finding the sum of two numbers**

- **Input requirements**: Two numeric values of any valid type (integer, real, or whole number).

### Problem-Solving Framework

Problem solving follows six standard stages:

1. Understanding the problem
2. Formulating a model
3. Developing an algorithm
4. Writing the program
5. Testing the program
6. Evaluating the solution

**Understanding the Problem**

Analyzing a computational problem requires defining input requirements, necessary processing, and expected output.

- **Example 1**: Finding the sum of two numbers requires two numerical inputs across real, integer, or whole number domains.

---

<!-- page 4 | The six-step problem-solving process and algorithm development -->

## The six-step problem-solving process and algorithm development

### Understanding the Problem

**Output Requirements**

Output requirements define the expected results corresponding to given inputs. If real numbers are supplied as input, the obtained output will be real; if integers are supplied, the output will be integer.

**Processing Considerations**

Processing considerations define the computational path needed to reach the solution from the given inputs.

### Formulating a Model

The formulation step focuses on the processing mechanism of the problem. A computational model or formula must be identified or developed to transform input data into the desired result. Assuming the input data consists of two integers, `Number1` and `Number2`:

$$
\text{Sum} = \text{Number1} + \text{Number2}
$$

This step determines how available data is utilized to compute the final answer.

### Developing an Algorithm

**Algorithm**

An algorithm is a precise sequence of instructions or steps for solving a particular problem.

To develop an algorithm, instructions must be expressed in a form understandable to anyone analyzing the process. Two standard representations are:

1. **Pseudocode**: An informal representation of an algorithm without strict programming syntax.
2. **Flowchart**: A diagrammatic or graphical representation of an algorithm.

#### Algorithm: Addition of Two Numbers

1. Start
2. Input the first number
3. Input the second number
4. Add the two numbers
5. Display the result
6. End

#### Pseudocode: Addition of Two Numbers

1. Start
2. Input Number1
3. Input Number2
4. Sum = Number1 + Number2
5. Output Sum
6. End

#### Flowchart

```mermaid
flowchart TD
A([Start]) --> B[/Input Number1,
Number2/] --> C[Sum=Number1+Number2] --> D[/Print Sum/] --> E([Stop])
```

### Writing the Program

Writing a program, also known as coding or implementing an algorithm, is the process of converting an algorithm into instructions that a computer can execute.

Python implementation:

- $\text{n1} = 21$
- $\text{n2} = 7$
- $\text{sum} = \text{n1} + \text{n2}$
- `print('Sum =', sum)`

After writing code, test it with diverse inputs. Debug and compile the program to resolve issues discovered during testing.

**Debugging**

Debugging is the method of finding and fixing errors in a program.

**Compiling**

Compiling is the process of converting a program into instructions that can be understood by the computer.

### Testing the Program

Testing verifies whether the written and compiled program performs its intended task accurately across various inputs.

- Running a program directs the computer to evaluate the compiled instructions.
- If the program runs correctly, the expected output is produced.
- If output is incorrect, the issue may stem from an incorrect implementation or a flaw in the underlying algorithm.

**Bugs**

Bugs are errors in a program that cause it to produce incorrect or undesirable results.

### Evaluating the Solution

Once the program executes, evaluate the output against the original problem requirements:

1. Ensure the output is formatted appropriately as a solution.
2. Examine whether the result aligns with the original intent.
3. Determine whether all problem specifications are satisfied.

### Example 2: Class Average Grade Calculation

#### Understanding the Problem

- **Input Requirements**: Collect all grades (e.g., entered via keyboard). Identify the format (numerical ranges 0–100 or letter grades A–F), type (integers or floating-point values), and how missing data or absences are handled.
- **Output Requirements**: Present results to the monitor or printer in a specified format (number, letter grade, or chart).
- **Processing Considerations**: Sum all valid grades and divide by the total student count.

#### Formulating a Model

When grades are provided as integers or real numbers $x1, x2, \dots, xn$ representing percentage marks, the computational model is:

$Average 1 = (x1 + x2 + x3 + \dots + xn) / n$ where the output ranges from 0 to 100.

Letter grades cannot be averaged directly; they must first map to numeric values:

$$
\begin{matrix}
A + = 12 & A = 11 & A- = 10 & B + = 9 \\
B = 8 & B- = 7 & C + = 6 & C = 5 \\
C- = 4 & D + = 3 & D = 2 & D- = 1 & F = 0
\end{matrix}
$$

If the assigned numeric values are $y1, y2, \dots, yn$, the corresponding computational model is:

$Average 2 = (y1 + y2 + y3 + \dots + yn) / n$ where the result ranges from 0 to 12.

To express this result as a percentage:

$$
\text{Percentage} = \frac{\text{Average on the 0--12 scale}}{12} \times 100
$$

#### Developing an Algorithm

**Step-by-Step Algorithm**:

1. Start
2. Read number of students, `n`
3. Read the marks of `n` students
4. Compute average using the formula
5. Display Average
6. Stop

**Pseudocode**:

1. Start
2. Input `n`
3. Input marks `x1, x2, x3, ..., xn`
4. `Average = (x1 + x2 + x3 + ... + xn) / n`
5. Output `Average`
6. End

#### Flowchart

```mermaid
flowchart TD
A([Start]) --> B[x1, x2, ..., xn, Average]
B --> C[/Read x1, x2, ..., xn/]
C --> D[Average = (x1 + x2 + ... + xn) / n]
D --> E[/Print Average/]
E --> F([Stop])
```

#### Implementation and Testing

```python
# Program in Python

n = int(input("Enter the number of students: "))
total = 0
for student in range(n):
    mark = float(input(f"Enter mark for student {student + 1}: "))
    total += mark
average = total / n
print(f"Average mark: {average:.2f}")
```

Testing involves validating outputs against a suite of sample student scores.

### Example 3: Case Study — Discriminant Calculator

1. **Understanding the Problem**: Input the coefficients `a`, `b`, and `c` of a quadratic equation. Output the discriminant `d`.
2. **Formulating a Model**:

$$
D = b^2 - 4ac
$$

3. **Developing an Algorithm**:
   1. Start
   2. Read `(a, b, c)`
   3. `d = b*b - 4*a*c`
   4. Print `(d)`
   5. Stop

4. **Writing the Program**:

   ```python
   #Input the coefficients
   a = int(input("Enter the value of first coefficient"))
   b = int(input("Enter the value of second coefficient"))
   c = int(input("Enter the value of third coefficient"))
   ```

```python
#Find the discriminant
d = (b**2) - (4*a*c)
#Print the discriminant
print(d)
```

5. **Testing the Program**: Compare actual outputs against expected results using a test suite:

| Sl No | a | b | c | d |
|---:|---:|---:|---:|---:|
| 1 | 10 | 2 | 5 | -196 |
| 2 | 5 | 7 | 1 | 29 |
| 3 | 2 | 4 | 2 | 0 |
| 4 | 1 | 1 | 1 | -3 |
| 5 | 3 | 2 | 5 | -56 |
| 6 | 2 | 8 | 2 | 48 |

<!-- page 5 | Running a Python script -->

## Running a Python script



**Example**

Suppose you have written a script `sample.py` to display the message “My first Python program!”. This is how you run it (the second line shows the output):

_user@Ubuntu2204LTS:~$ python3 First.py_

**My first Python program!**

```python
# This is single line comment
print("Hello Python")
```

**Output**

```
Hello Python
```

**Multi-Line Comments**

Multi-line comments can be specified inside triple quotes (`'''` or `"""`).

**Example**

```python
"""This is
   Multiline
   Comment"""
print("Hello Python")
```

**Output**

```
Hello Python
```

<!-- page 6 | Variables, dynamic typing, and type conversion -->

## Variables, dynamic typing, and type conversion

**Identifier Rules**

An identifier must begin with a letter or an underscore (`_`).

- It cannot start with any other character.
- Except for letters and underscores, digits can be part of an identifier but cannot be the first character.
- Any other special characters or whitespaces are strictly prohibited.
- An identifier cannot be a keyword.

### Valid and Invalid Identifiers

| IDENTIFIER | VALID? | REASON IF INVALID |
| :--- | :---: | :--- |
| `totalSales` | Yes | |
| `total_Sales` | Yes | |
| `total.Sales` | No | Cannot contain period |
| `4thQtrSales` | No | Cannot begin with digit |
| `totalSale$` | No | Cannot contain $ |

### Variable Declaration and Initialization

**Variables**

A variable is a named memory location in which we can store values for a particular program. In other words, a variable is a name used to refer to a memory location. A variable is also known as an identifier and is used to hold a value. In Python, when a value is assigned to a variable, that variable is declared automatically without requiring an explicit data type specification.

```mermaid
flowchart LR
R["Rules to declare a variable in Python"] --> A["Use letters, numbers, and underscore (_)"]
R --> B["Start with a letter or underscore"]
R --> C["Do not start with a number"]
R --> D["Variable names are case-sensitive"]
```

### Naming Conventions and Rules

Rules for forming identifiers:

- An identifier can begin with a letter or an underscore (`_`).
- It cannot start with any other character.
- Except for letters and underscores, digits can be part of an identifier but cannot be the first character.
- Any other special characters or whitespaces are strictly prohibited.
- An identifier cannot be a keyword.

![Table of Valid and Invalid Identifiers](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-037-image-1.webp)

### Memory and Variable Concept

**Variable**

A variable is a named memory location used to store program values. It serves as an identifier referring to a specific memory location. In Python, assigning any value automatically declares the variable without needing explicit type declarations.

![Diagram showing rules to declare a variable in python](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-037-image-2.webp)

### Variable Demonstration

**Example: Vardemo.py**

```python
a=10 #integer
b="StudyGlance" #string
c=12.5 #float

print(a)
print(b)
print(c)
```

Output:

```
$python3 Vardemo.py
10
StudyGlance
12.5
```

### Multiple Assignment

Python allows assigning a single value to multiple variables, or multiple values to multiple variables in a single statement.

#### Assigning a Single Value to Multiple Variables

**Example: Vardemo1.py**

```python
x=y=z=50
print(x)
print(y)
print(z)
```

Output:

```
$python3 Vardemo1.py
50
50
50
```

#### Assigning Multiple Values to Multiple Variables

**Example: Vardemo2.py**

```python
a,b,c=5,10,15
print(a)
print(b)
print(c)
```

Output:

```
$python3 Vardemo2.py
5
10
15
```

**Literals**

Literals are constants that represent fixed values in Python programs and can hold various data types. The syntax and usage of a literal depend on its specific category.

Categories of literals in Python include:
- String literals
- Numeric literals (integer, float, complex)

### Data Types and Dynamic Typing

**Data Types**

Data types specify the kind of data stored in variables. Python is dynamically typed, meaning variable types are not explicitly declared.

The interpreter implicitly binds each value with its data type at runtime. Python provides the built-in `type()` function to inspect the data type of any variable.

```mermaid
flowchart LR
A[Data types emphasized in Module 1] --> B[Numeric]
A --> C[String]
B --> B1[Int\n20]
B --> B2[Float\n35.75]
B --> B3[Complex\n1+3j]
C --> C1[String\n'Jessa']
```

Lists, tuples, sets, and dictionaries are introduced with sequence and collection processing in Module 3.

**Numeric Data Types**

Numeric data types represent values that contain numeric quantities. A numeric value can be an integer, a floating-point number, or a complex number.

Python provides three numeric data types:
1. `int`
2. `float`
3. `complex`

![Table explaining int, float, and complex numeric datatypes with examples](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-039-image-2.webp)

**Example Program**

```python
num1 = 5
print(num1, 'is of type', type(num1))
num2 = 2.0
print(num2, 'is of type', type(num2))
num3 = 1 + 2j
print(num3, 'is of type', type(num3))
```

Output:

```text
5 is of type <class 'int'>
2.0 is of type <class 'float'>
(1+2j) is of type <class 'complex'>
```

### Type Conversion

**Implicit Type Conversion**

Implicit type conversion (coercion) occurs automatically when Python converts one data type to another without explicit user instructions. This typically happens during operations involving mixed data types to prevent type errors and preserve precision.

```python
x = 5
# int
y = 2.5
# float
z = x + y # x is implicitly converted to float
print(z) # Output: 7.5
print(type(z)) # <class 'float'>
```

**Explicit Type Conversion**

Explicit type conversion (type casting) occurs when the programmer manually converts a value from one data type to another using built-in conversion functions. Functions used include `int()`, `float()`, `str()`, `complex()`, and `bool()`.

```python
x = "15"
y = int(x)
print(y + 5) # Output: 20
print(type(y)) # <class 'int'>

z = float(y)
print(z) # Output: 15.0
print(type(z)) # <class 'float'>
```

---

<!-- page 7 | Data types: numeric, sequence, mapping, set, and boolean -->

## Data types: numeric, sequence, mapping, set, and boolean

**Example: Vardemo.py**

```python
a=10 #integer
b="StudyGlance" #string
c=12.5 #float
print(a)
print(b)
print(c)
```

**Output:**

```
$python3 Vardemo.py
10
StudyGlance
12.5
```

**Multiple Assignment**

Python allows us to assign a value to multiple variables and multiple values to multiple variables in a single statement, which is also known as multiple assignment.

### Multiple Assignment Examples

**Assign single value to multiple variables:**

**Example: Vardemo1.py**

```python
x=y=z=50
print(x)
print(y)
print(z)
```

**Output:**

```
$python3 Vardemo1.py
50
50
50
```

**Assign multiple values to multiple variables:**

**Example: Vardemo2.py**

```python
a,b,c=5,10,15
print(a)
print(b)
print(c)
```

**Output:**

```
$python3 Vardemo2.py
5
10
15
```

**Literals**

Python literals are representations of values. This module focuses on numeric and string literals; collection literals are studied in Module 3.

Literal forms used here include string literals and numeric literals (integer, floating-point, and complex). Comparisons produce the Boolean values `True` and `False`; collection literals are covered in Module 3.

**Data Types**

Data types specify what type of data is stored in variables. Variables can hold values of different data types. Python is dynamically typed, so the variable type does not need to be declared explicitly.

The interpreter implicitly binds the value with its data type. Python provides the `type()` function to check the type of any variable.

```mermaid
flowchart TB
P["Module 1 data types"] --> N["Numeric"]
P --> S["String"]
N --> I["int: 20"]
N --> F["float: 35.75"]
N --> C["complex: 1+3j"]
S --> ST["String: Jessa"]
```

### Numeric Data Types

**Numeric Types**

The numeric data type in Python represents values that have numerical magnitude. A numeric value can be an integer, a floating-point number, or a complex number.

Python supports three numeric types:

1. **int**
2. **float**
3. **complex**

| Type | Description | Example |
| --- | --- | --- |
| **int** | Whole number, positive or negative, without decimals, of unlimited length. | `a = 10`<br>`b = -12`<br>`c = 123456789` |
| **float** | Floating-point number, positive or negative, containing one or more decimals. | `X = 1.0`<br>`Y = 12.3`<br>`Z = -13.4` |
| **complex** | Complex numbers written with a `j` as the imaginary component. | `A = 2+5j`<br>`B = -3+4j`<br>`C = -6j` |

**Program**

```python
num1 = 5
print(num1, 'is of type', type(num1))
num2 = 2.0
print(num2, 'is of type', type(num2))
num3 = 1 + 2j
print(num3, 'is of type', type(num3))
```

**Output**

```
5 is of type <class 'int'>
2.0 is of type <class 'float'>
(1+2j) is of type <class 'complex'>
```

### Type Conversion

**Type Casting**

Python provides explicit type conversion functions to directly convert one data type to another, a process referred to as type casting.

Python supports the following conversion functions:

1. `int()`: Converts compatible data types to an integer.
2. `float()`: Converts compatible data types to a floating-point number.
3. `str()`: Converts any data type to a string representation.

```python
#convert from int to float:
x = float(1)

#convert from float to int:
y = int(2.8)

#convert from int to complex:
z = complex(1)

print(x)
print(y)
print(z)

print(type(x))
print(type(y))
print(type(z))
```

Output:

```
1.0
2
(1+0j)
<class 'float'>
<class 'int'>
<class 'complex'>
```

**Escape Sequence**

An escape sequence is a sequence of characters treated specially when encountered inside a string literal. It begins with a backslash (`\`) and represents a special character.

| Code | Result |
| --- | --- |
| `\'` | Single Quote |
| `\\` | Backslash |
| `\n` | New Line |
| `\r` | Carriage Return |
| `\t` | Tab |
| `\b` | Backspace |
| `\f` | Form Feed |

**Example**

```python
1 print("Hello\nWorld")
2 print("Hello\tWorld")
3 print("This is a backslash: \\")
4 print('It\'s a beautiful day')
5 print("She said, \"Hello!\"")
```

```
Output
Hello
World
Hello   World
This is a backslash: \
It's a beautiful day
She said, "Hello!"
```

### String Data Type

A string is an immutable sequence of characters represented using single, double, or triple quotes. Strings support indexing and slicing; list, tuple, set, and dictionary processing belongs to Module 3.

**String**

```python
# Creating a String
# with single Quotes
String1 = 'Welcome to the Geeks World'
print('String with the use of Single Quotes: ')
print(String1)

# with double Quotes
String1 = "I'm a Geek"
print("\nString with the use of Double Quotes: ")
print(String1)

# with triple Quotes
String1 = '''I'm a Geek and I live in a world of "Geeks"'''
print("\nString with the use of Triple Quotes: ")
print(String1)
```

**Output:**

```
String with the use of Single Quotes:
Welcome to the Geeks World

String with the use of Double Quotes:
I'm a Geek

String with the use of Triple Quotes:
I'm a Geek and I live in a world of "Geeks"

=== Code Execution Successful ===
```

### Boolean Type

**Boolean**

A boolean data type holds one of two possible values, `True` or `False`, representing truth values in Boolean algebra.

```text
Input: 1==1
Output: True
Input: 2<1
Output: False
```

```python
# Returns False as x is not equal to y
x = 5
y = 10
print(bool(x==y))
```

**Output**

```text
False
```

### The Math Module

**Module**

A module provides logical organization for Python code by grouping related functions and variables together. The `math` module is an in-built library designed to simplify mathematical operations.

To access its functions, import the module using:

$$
\textbf{import math}
$$

**math.sqrt()**

The `math.sqrt()` function calculates and returns the square root of a given number.

   ```text
   >>> math.sqrt(100)
   10.0
   >>> math.sqrt(3)
   1.7320508075688772
   ```

### Advanced Escape Sequence Handling

**Escape Sequences in Detail**

An escape sequence begins with a backslash (`\`) followed by a character to produce a non-standard interpretation. For example, `\r` moves the cursor to the beginning of the line without advancing downward; `\b` moves the cursor back one space to overwrite the preceding character; and `\f` advances to a form feed or page break in supporting consoles.

![Table of escape sequence codes and their results](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/python/module-1/assets/page-041-image-1.webp)

**Example**

```python
print("Hello\nWorld")
print("Hello\tWorld")
print("This is a backslash: \\")
print('It\'s a beautiful day')
print("She said, \"Hello!\"")
```

**Output**

```text
Hello
World
Hello   World
This is a backslash: \
It's a beautiful day
She said, "Hello!"
```

### Mathematical Calculations

The `math` module provides standard mathematical functions and constants.

$$
\mathbf{\textit{import math}}
$$

**Square Root Method**

The `math.sqrt()` method computes the square root of a numeric argument.

    ```
    >>> math.sqrt(100)
    10.0
    >>> math.sqrt(3)
    1.7320508075688772
    ```

---

<!-- page 8 | Standard library math module and basic I/O operations -->

## Standard library math module and basic I/O operations

### Standard Math Functions

**math.ceil()**

math.ceil() approximates the given number to the smallest integer, greater than or equal to the given floating point number.

```python
>>> math.ceil(4.5867)
5
```

**math.floor()**

math.floor() returns the greatest integer less than or equal to the input.

```python
>>> math.floor(4.5687)
4
```

**math.fabs()**

math.fabs() returns the absolute value of x.

```python
>>> math.fabs(-5.5)
5.5
```

**math.pi**

math.pi is a constant containing the value of PI (3.14...).

```python
>>> x = math.pi
>>> print(x)
3.14...
```

**math.factorial()**

math.factorial() is used for finding the factorial of a given number in a single line.

```python
>>> a = 5
>>> print("The factorial of", a, "is", math.factorial(a))
The factorial of 5 is 120
```

**math.gcd()**

math.gcd() is used to find the greatest common divisor of two numbers.

```python
>>> a = 15
>>> b = 5
>>> print ("The gcd of 5 and 15 is : ")
>>> print (math.gcd(b, a))
The gcd of 5 and 15 is : 5
```

### Logarithmic and Power Functions

**math.exp()**

math.exp() is used to calculate the power of e.

```python
>>> test = 4
>>> print (math.exp(test))
54.598150033144236
```

**math.pow()**

math.pow() receives two float arguments, raises the first to the second, and returns the result. In other words, pow(2,3) is equivalent to 2**3.

```python
>>> math.pow(2,4)
16.0
```

**math.log()**

math.log() is used to calculate the logarithmic value of a with base b.

```python
>>> print ("The value of log 2 with base 3 is : ")
>>> print (math.log(2,3))
The value of log 2 with base 3 is : 0.6309297535714574
```

### Trigonometric and Angular Functions

**Trigonometric Functions**

sin(), cos(), and tan() return the sine, cosine, and tangent of the value passed as the argument.

PROGRAM

```python
import math
a = math.pi/6
print ("The value of sine of pi/6 is : ", end="")
print (math.sin(a))
print ("The value of cosine of pi/6 is : ", end="")
print (math.cos(a))
print ("The value of tangent of pi/6 is : ", end="")
print (math.tan(a))
```

OUTPUT

The value of sine of pi/6 is : 0.49999999999999994
The value of cosine of pi/6 is : 0.8660254037844387
The value of tangent of pi/6 is : 0.5773502691896257

### Basic I/O: input() and print()

Python offers several built-in functions that make it easy to create a program quickly. Two of the most commonly used built-in functions are the input() and print() functions, used for frequent input and output operations, respectively.

**Python Input**

Python input enables programmers to obtain data from a user. The simplest method is the input() function, which pauses program execution to let the user type a line of information from the keyboard. When the user hits "Enter", the input is read and returned as a string.

Syntax:

$$
\text{input}([\langle\textit{prompt}\rangle])
$$

where the prompt is an optional string displayed for the user.

EXAMPLE

```python
>>> name = input ('What is your name? - ')
>>> print ('Hello,', name)
```

What is your name? - John
Hello, John

The input() function always returns a string. Convert it with int() or float() when the program needs a number.

EXAMPLE

```python
>>> number = input ('What is your number? ')
```

What is your number? 45

```python
>>> number
```

'45'

```python
>>> int(number)
```

45

```python
>>> float(number)
```

45.0

Or:

```python
>>> price = float(input("Enter the price of each item"))
>>> print(price)
Enter the price of each item 50
50.0
```

For taking multiple inputs from the user in a single line, use the split() function.

EXAMPLE

```python
>>> x, y = input("Enter two numbers: ").split()
>>> print("No. of boys: ", x)
>>> print("No. of girls: ", y)
Enter two numbers: 23 22
No. of boys: 23
No. of girls: 22
```

**Python Output**

Python output presents data back to the user once the program accepts and processes it. You can display output data directly to the console or show it on a screen using the print() function.

Syntax:

$$
\text{print}(\text{<obj>},...,\text{<obj>})
$$

Using the above syntax, multiple objects can be passed into print() separated by commas.

EXAMPLE

```python
>>> print(100)
100
```

```python
>>> num = 65
>>> print ('The value of the number is', num)
The value of the number is 65
```

Another Syntax:

```python
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```

EXAMPLE

```python
# Python program to illustrate print()
# Passing sep and end parameters
>>> num = 7
>>> print('James Bond ', num, sep = '--> 00', end = '\n\n\n')
>>> a = 2
>>> print('Value of a: ', a, sep = '000', end = '\n')
>>> print('Car', 'Bike', 'Train', 'Plane', sep = ' | ', end = '\n\n')
```

OUTPUT

James Bond --> 007

Value of a: 0002

Car | Bike | Train | Plane

### Python Operators and Precedence

**Python Operators**

Python operators are special symbols or keywords that carry out operations on values and variables. They serve as a basis for expressions used to modify data and execute computations.

A simple example is given by the expression $4 + 5$ is equal to 9. Here, 4 and 5 are called operands and $+$ is called operator.

**Types of Python Operators**

Python language supports various types of operators:

1. Arithmetic Operators
2. Comparison (Relational) Operators

### Worked trigonometric example

**Trigonometric Evaluation**

sin(), cos(), and tan() return the sine, cosine, and tangent of the value passed as argument.

PROGRAM

import math
a = math.pi/6
print ("The value of sine of pi/6 is : ", end="")
print (math.sin(a))
print ("The value of cosine of pi/6 is : ", end="")
print (math.cos(a))
print ("The value of tangent of pi/6 is : ", end="")
print (math.tan(a))

OUTPUT

The value of sine of pi/6 is : 0.49999999999999994
The value of cosine of pi/6 is : 0.8660254037844387
The value of tangent of pi/6 is : 0.5773502691896257

<!-- page 9 | Python operators: arithmetic, relational, and assignment -->

## Python operators: arithmetic, relational, and assignment

3. Assignment Operators
4. Logical Operators

```mermaid
flowchart TD
Root[Python Operators] --> A[Arithmetic Operators]
Root --> B[Comparison Operators]
Root --> C[Assignment Operators]
Root --> D[Logical Operators]
```

### Arithmetic Operators

**Python Arithmetic Operators**

Python arithmetic operators are commonly used to carry out mathematical operations including addition, subtraction, multiplication, and division.

* They are compatible with integers, variables, and expressions.
* In addition to the standard arithmetic operators, there are operators for modulus, exponentiation, and floor division.

| Operator | Name | Example |
| :--- | :--- | :--- |
| + | Addition | $10 + 20 = 30$ |
| - | Subtraction | $20 - 10 = 10$ |
| * | Multiplication | $10 * 20 = 200$ |
| / | Division | $20 / 10 = 2$ |
| % | Modulus | $22 \% 10 = 2$ |
| ** | Exponent | $4**2 = 16$ |
| // | Floor Division | $9 // 2 = 4$ |

### Arithmetic Operators Demonstration

```python
a = 21
b = 10
# Addition
print ("a + b :", a + b)
# Subtraction
print ("a - b :", a - b)
# Multiplication
print ("a * b :", a * b)
# Division
print ("a / b :", a / b)
# Modulus
print ("a % b :", a % b)
# Exponent
print ("a ** b :", a ** b)
# Floor Division
print ("a // b :", a // b)
```

This code defines the two variables "a" and "b." It then applies several arithmetic operations to them (including addition, subtraction, multiplication, division, modulus, exponentiation, and floor division) and outputs the results.

**Output**

a + b : 31\
a - b : 11\
a * b : 210\
a / b : 2.1\
a % b : 1\
a ** b : 16679880978201\
a // b : 2

### Comparison Operators

**Python Comparison Operators**

Python comparison operators are used to compare two values. Based on the comparison, they produce a Boolean value (True or False).

### Assignment Operators

**Python Assignment Operators**

Python assignment operators are used to assign values to variables in Python. The single equal symbol ($=$) is the most fundamental assignment operator. It assigns the value on the operator's right side to the variable on the operator's left side.

| Operator | Name | Example |
| :--- | :--- | :--- |
| $=$ | Assignment Operator | $a = 10$ |
| $+=$ | Addition Assignment | $a += 5$ (Same as $a = a + 5$) |
| $-=$ | Subtraction Assignment | $a -= 5$ (Same as $a = a - 5$) |
| $*=$ | Multiplication Assignment | $a *= 5$ (Same as $a = a * 5$) |
| $/=$ | Division Assignment | $a /= 5$ (Same as $a = a / 5$) |
| $\%=$ | Remainder Assignment | $a \%= 5$ (Same as $a = a \% 5$) |
| $* *=$ | Exponent Assignment | $a **= 2$ (Same as $a = a ** 2$) |
| $//=$ | Floor Division Assignment | $a //= 3$ (Same as $a = a // 3$) |

**Assignment Operators Execution**

```python
# Assignment Operator
a = 10

# Addition Assignment
a += 5
print ("a += 5 :", a)

# Subtraction Assignment
a -= 5
print ("a -= 5 :", a)

# Multiplication Assignment
a *= 5
print ("a *= 5 :", a)

# Division Assignment
a /= 5
print ("a /= 5 :", a)

# Remainder Assignment
a %= 3
print ("a %= 3 :", a)

# Exponent Assignment
a **= 2
print ("a **= 2 :", a)

# Floor Division Assignment
a //= 3
print ("a //= 3 :", a)
```

The Python assignment operators are shown in this code in the Python Editor. It begins with the value of 'a' equal to 10, and then goes through the steps of addition, subtraction, multiplication, division, remainder, exponentiation, and floor division, updating 'a' as necessary and outputting the results.

**Output**

```
a += 5 : 15

a -= 5 : 10

a *= 5 : 50

a /= 5 : 10.0

a %= 3 : 1.0

a **= 2 : 1.0

a //= 3 : 0.0
```

### Comparison Operations Reference

**Comparison Operators**

To compare two values, Python comparison operators are needed. Based on the comparison, they produce a Boolean value (True or False).

| Operator | Meaning | Example |
| :--- | :--- | :--- |
| `==` | Equal to | `4 == 4` gives `True` |
| `!=` | Not equal to | `4 != 5` gives `True` |
| `>` | Greater than | `7 > 5` gives `True` |
| `<` | Less than | `4 < 5` gives `True` |
| `>=` | Greater than or equal to | `5 >= 5` gives `True` |
| `<=` | Less than or equal to | `4 <= 5` gives `True` |

**Comparison Example Script**

```python
a = 4
b = 5
print("a == b:", a == b)
print("a != b:", a != b)
print("a > b:", a > b)
print("a < b:", a < b)
print("a >= b:", a >= b)
print("a <= b:", a <= b)
```

This code compares the values of python variables 'a' and 'b' and prints if they are equal, not equal, greater than, less than, more than or equal to, and less than or equal to each other.

**Output**

```
a == b : False
a != b : True
a > b : False
a < b : True
a >= b : False
a <= b : True
```

---

<!-- page 10 | Logical operators -->

## Logical operators


### Logical Operators

**Python Logical Operators**

Python logical operators are used to compose Boolean expressions and evaluate their truth values. They are required for the creation of conditional statements as well as for managing the flow of execution in programs.

Python provides three basic logical operators:

1. AND
2. OR
3. NOT

| Operator | Description | Example |
| :--- | :--- | :--- |
| and Logical AND | If both of the operands are true then the condition becomes true. | (a and b) is true. |
| or Logical OR | If any of the two operands is non-zero then the condition becomes true. | (a or b) is true. |
| not Logical NOT | Used to reverse the logical state of its operand | Not(a and b) is false. |

**Example: Logical Operators**

```python
x = 5
y = 10
if x > 3 and y < 15:
    print("Both x and y are within the specified range")
```

The code assigns the values 5 and 10 to variables x and y. It determines whether x is larger than 3 and y is less than 15. If both conditions are met, it writes "Both x and y are within the specified range."

**Output**

Both x and y are within the specified range

### Operator Precedence

When an expression or statement involves multiple operators, it is resolved using standard operator precedence:

| Precedence | Operator sign | Operator name |
| :--- | :--- | :--- |
| Highest | `**` | Exponentiation |
| | `+X`, `-X` | Unary positive, unary negative |
| | `*`, `/`, `//`, `%` | Multiplication, division, floor division, modulus |
| | `+`, `-` | Addition, subtraction |
| | `==`, `!=`, `<`, `<=`, `>`, `>=` | Comparison |
| | `not` | Boolean NOT |
| | `and` | Boolean AND |
| Lowest | `or` | Boolean OR |

Example 5.4. Consider the assignment statement

$R = A + 3 < B * 1 \text{ or } C \text{ and } D$

Let the values of the variables be $A = 1, B = 5, C = -1, \text{ and } D = \text{ True}$. Figure 5.1 shows the structure of the evaluation. The numbers shown in the circle denote the order in which the various operators are applied. The final result is 1, which is assigned to R.

<!-- page 11 | Operator precedence and associativity -->

## Operator precedence and associativity


### Evaluation of an Arithmetic Expression

| Order | Operation | Resultant |
|---:|---|---:|
| 1 | `B*1` | 5 |
| 2 | `A+3` | 4 |
| 3 | `A + 3 < B * 1` | `True` |
| 4 | `C and D` | `True` |
| 5 | `A + 3 < B * 1 or C and D` | `True` |
| 6 | `R = A + 3 < B * 1 or C and D` | `True` |

---

$$
R = A + 3 < B * 1 \text{ or } C \text{ and } D
$$


| Order | Operation | Resultant |
| :---: | :---: | :---: |
| 1 | $B * 1$ | 5 |
| 2 | $A + 3$ | 4 |
| 3 | $A + 3 < B * 1$ | `True` |
| 4 | $C \text{ and } D$ | `True` |
| 5 | $A + 3 < B * 1 \text{ or } C \text{ and } D$ | `True` |
| 6 | $R = A + 3 < B * 1 \text{ or } C \text{ and } D$ | `True` |

Evaluation of an arithmetic expression

53

---

---

<!-- page 12 | Worked practice problems and university examination questions -->

## Worked practice problems and university examination questions

### Short Answer Questions (Part A)

#### 1. Jigsaw Puzzle via Trial and Error

**Trial and Error Method**

Trial and error is a problem-solving technique where different possibilities are tried, and errors are eliminated until the correct solution is found.

Steps to solve a jigsaw puzzle:

1. Sort the pieces by edges, corners, and colors.
2. Assemble the border frame using edge and corner pieces.
3. Work on distinct sections by grouping similar colors or patterns.
4. Test and fit pieces through systematic trial and error.
5. Combine assembled clusters and fill the remaining gaps.

#### 2. Checking Numeric String Input

To verify whether a string consists entirely of numeric characters, use string methods such as `isdigit()` or `isnumeric()`.

```python
# Input string
input_string = "12345"

# Check if the input is numeric
if input_string.isdigit():
    print(f"The input '{input_string}' is numeric.")
else:
    print(f"The input '{input_string}' is not numeric.")
```

#### 3. Problem-Solving Strategy Selection

**Sudoku Puzzle (Final Cells)**

Backtracking is the most suitable strategy. It is effective for problems involving complex constraints. You can systematically try placing candidate numbers in empty cells and backtrack whenever a conflict arises, exploring valid branches efficiently.

**Family Trip Planning**

Means-ends analysis is the most suitable strategy. This approach breaks down the overarching goal into manageable subproblems (destination, flights, accommodation) and resolves difference reductions while honoring budget constraints.

#### 4. Python Expression Evaluation

Evaluate the following expressions:

1. `(50 - 5 * 6) // 4`
2. not $(10 < 5)$ or $(5 == 5)$
3. `True and 5`

**Evaluation Steps:**

- **Expression 1:** $(50-5*6)//4$
  1. Inside parentheses: $5*6=30$
  2. Subtraction: $50-30=20$
  3. Floor division: $20//4=5$ (Result: `5`)

- **Expression 2:** The comparison $(10 < 5)$ evaluates to `False`, so `not False` evaluates to `True`. The second comparison $(5 == 5)$ is also `True`; therefore `True or True` evaluates to `True`.

- **Expression 3:** In a logical `and` operation, if the first operand is truthy, Python evaluates and returns the second operand. Since `True` is truthy $\rightarrow$, the expression evaluates to `5`.

### Long Answer Questions (Part B)

#### 1(a). Backtracking Applied to Sudoku

**Backtracking**

Backtracking is a problem-solving strategy in which a solution is constructed incrementally. Whenever the current path violates a constraint and cannot lead to a valid solution, the algorithm backtracks to undo the previous step and attempt the next available alternative.

**Backtracking Procedure for Sudoku:**

1. **Choose an empty cell:** Select the next unassigned cell in the grid.
2. **Try candidate numbers:** For numbers 1 through 9, check whether placing the candidate satisfies row, column, and 3x3 subgrid constraints.
3. **Assign and recurse:** If valid, assign the candidate number and recursively attempt to fill the remaining cells.
4. **Backtrack:** If no valid number can be placed in the current cell, clear the cell and return to the previous cell to try its next candidate.
5. **Termination:** The process terminates when all cells are filled (success) or all candidates are exhausted without a solution.

#### 1(b). Heuristic Approach to Restaurant Selection

**Heuristics**

Heuristics are rule-of-thumb strategies or shortcuts used to make rapid, satisfactory decisions without exhaustively evaluating every possibility.

1. **Define Key Criteria:** Determine the critical decision factors, such as price range, proximity, cuisine type, and customer ratings.
2. **Gather Data:** Collect relevant information from food delivery apps, online review portals, and recommendations from peers.
3. **Apply Heuristic Rules:** Apply practical decision rules to prune alternatives rapidly:
   - Rule 1: "Filter only restaurants with aggregate ratings of 4.0 stars or higher."
   - Rule 2: "Limit selection to venues within a 3 km radius to minimize transit time."
4. **Make the Final Decision:** Select the top-ranked option matching all heuristic thresholds.

#### 2(a). Means-Ends Analysis for Software Development

**Means-Ends Analysis**

Means-ends analysis reduces the difference between the current state and the goal state by establishing intermediate subgoals and selecting operators to achieve them.

1. **Identify the Goal:** Build a fully functional, integrated campus management system.
2. **Decompose into Subproblems (Means):**
   - *Student Management Module:* Maintain enrollment and student profile records.
   - *Attendance Module:* Record, calculate, and report attendance metrics.
   - *Examination Module:* Process course schedules, marks, and grade sheets.
   - *Library Module:* Track book cataloging, issues, and returns.
   - *Administration Module:* Handle staff records, circulars, and notifications.
3. **Execution Plan:**
   - *Requirement Analysis:* Elicit specifications from administrative staff, faculty, and students.
   - *System Design:* Define architecture, data models, and module interfaces.
   - *Iterative Implementation:* Code and unit-test modules in priority order.
   - *Integration:* Connect modules into a unified database and interface.
   - *Testing and Verification:* Validate system consistency against edge cases.
   - *Deployment and Maintenance:* Roll out the system into production with user training.

#### 2(b). Radius Calculation from Circle Area

Given the area of a circle, the radius is calculated using the formula $r = \sqrt{\frac{\text{area}}{\pi}}$ using Python's `math` module.

```python
import math
area = float(input("Enter the area:"))
if area > 0:
    radius = math.sqrt(area/math.pi)
    print("The radius is", radius)
else:
    print("Error: the area must be positive")
```

#### 3(a). Six Problem-Solving Steps: Area of a Circle

| Step | Description |
|---|---|
| 1 | Understand the problem (find area, radius given) |
| 2 | Identify inputs/outputs (radius $\to$ area) |
| 3 | Plan / formula ($A = \pi \times r^2$) |
| 4 | Sub-problems (input $\to$ square $\to$ multiply $\to$ output) |
| 5 | Implement (calculate area using program or formula) |
| 6 | Review / verify (check result correctness) |

1. **Understand the Problem:** Read requirements to identify given parameters and expected results. Here, calculate the area of a circle given its radius.
2. **Identify Inputs and Outputs:**
   - Input: Radius ($r$)
   - Output: Area ($A$)
3. **Devise a Plan:** Apply the geometric formula $\text{Area} = \pi \times r^2$.
4. **Decompose into Subproblems:**
   - Read radius value from user.
   - Compute radius squared.
   - Multiply result by $\pi$.
   - Display calculated area.
5. **Implement the Plan:** Execute the computation programmatically.

```python
import math
r = float(input("Enter radius of the circle: "))
area = math.pi * r**2
print(f"Area of the circle is: {area}")
```

6. **Review and Verify:** Validate output against known test values. For instance, if radius $= 5$, then $\text{area} \approx 78.54$, verifying formula accuracy.

#### 3(b). Basic Python Data Types

**Integer (`int`)**

Whole numbers, positive or negative, without fractional parts.

$$
\begin{aligned}
  \text{age} &= 25 \\
  \text{year} &= -2025
  \end{aligned}
$$

**Floating-Point (`float`)**

Real numbers containing a decimal point.

$$
\begin{aligned}
\text{price} &= 99.99 \\
\text{temperature} &= -4.5
\end{aligned}
$$

**String (`str`)**

An ordered sequence of characters enclosed within single or double quotation marks.

$$
\begin{aligned}
\text{name} &= "\text{Alice}" \\
\text{greeting} &= '\text{Hello, World!}'
\end{aligned}
$$

#### 4(a). Algorithms vs. Heuristics

**Algorithm**

An algorithm is an unambiguous, step-by-step procedure that guarantees a correct solution to a problem when carried out.

- Follows deterministic rules.
- Guarantees precision and correctness.
- May be computationally expensive or slow for large search spaces.

**Heuristic**

A heuristic is a rule-of-thumb strategy that finds a good-enough solution quickly without guaranteeing theoretical optimality.

- Uses shortcuts or informed approximations.
- Drastically reduces search time.
- Suitable for complex, large, or NP-hard problem domains.

**Comparison Example:**

- *Problem:* Selecting a dinner restaurant in an unfamiliar city.
- *Algorithmic Approach:* Scrape and inspect every restaurant menu, price listing, and review across the city $\rightarrow$ select the absolute optimal choice (accurate but prohibitive).
- *Heuristic Approach:* Ask a local resident for their favorite nearby spot $\rightarrow$ dine there (rapid, practical, and satisfactory).

#### 4(b). Converting Minutes to Hours and Minutes

Given an integer representing total minutes, integer division `//` extracts total hours, while the modulus operator `%` extracts the remaining minutes.

```python
minutes = int(input("Enter time in minutes:"))
hours = minutes // 60
remaining_minutes = minutes % 60
print(f"{hours} hour(s) and {remaining_minutes} minute(s)")
```

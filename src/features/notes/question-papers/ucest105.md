# UCEST105 · Algorithmic Thinking with Python

KTU 2024 Scheme · CSE · Semester 1. Questions are grouped by module and year, with a solution immediately after each question.

**Original paper:** [2024 PDF](/notes/cse/s1/question-papers/assets/UCEST105_2024.pdf) · [KTU Notes archive](https://ktunotes.in/ktu-algorithmic-thinking-with-python-question-papers-2024-scheme/)

<!-- page 1 | Module 1 -->

## Module 1 · Problem solving and heuristics

### 2024 · Q1

**Question.** Describe how to solve a jigsaw puzzle without a reference picture using trial and error.

**Solution.** Sort pieces by edge/colour/pattern, form the border and likely clusters, then test candidate fits. Keep a fit only if adjoining shapes and picture fragments agree; undo failed placements and use the new evidence to narrow later choices.

### 2024 · Q2

**Question.** Write Python to check whether the input string `" 12345 "` is numeric.

**Solution.** Strip surrounding whitespace, then use `str.isdigit()`:

```python
s = input().strip()
print(s.isdigit())
```

For the given input the output is `True`.

### 2024 · Q9(a)

**Question.** Explain how backtracking solves Sudoku.

**Solution.** Find an empty cell and try digits 1–9 that do not already occur in its row, column or 3×3 box. Recurse after each legal choice. If a later cell has no legal value, erase the last choice and try the next digit. Reaching a full valid grid is the base case.

### 2024 · Q9(b)

**Question.** Explain how heuristics can help choose a restaurant in a new city.

**Solution.** Use practical rules such as distance, budget, cuisine, ratings, opening hours and dietary needs to rank a manageable set. A heuristic quickly finds a good option; it does not guarantee the mathematically best restaurant.

### 2024 · Q10(a)

**Question.** Apply Means–Ends Analysis to develop campus-management software.

**Solution.** Define the goal state (for example, reliable course registration and attendance reporting), compare it with the current process, identify the largest gaps, and select operators that reduce them. Decompose into modules such as identity, course data, enrollment, attendance and reporting. Implement and test each gap-reducing step, then repeat until requirements and validation criteria are met.

### 2024 · Q10(b)

**Question.** Given a circle’s area, write Python to calculate its radius using `math`.

**Solution.** From $A=\pi r^2$, $r=\sqrt{A/\pi}$.

```python
import math
area = float(input("Area: "))
radius = math.sqrt(area / math.pi)
print(radius)
```

<!-- page 2 | Module 2 -->

## Module 2 · Algorithms, pseudocode and control flow

### 2024 · Q3

**Question.** Give a flowchart to generate the first $n$ Fibonacci numbers.

**Solution.** Initialize `a=0, b=1, i=0`; while `i<n`, output `a`, set `(a,b)=(b,a+b)`, and increment `i`. The loop’s false branch ends. This produces `0, 1, 1, 2, …`.

### 2024 · Q4

**Question.** Write an algorithm to test whether an integer is a palindrome.

**Solution.** Save the original value, reverse its digits using repeated remainder/division, then compare the reversed value with the original. For non-negative inputs:

```text
original ← n; reversed ← 0
while n > 0:
    reversed ← 10 × reversed + (n mod 10)
    n ← floor(n / 10)
return reversed = original
```

### 2024 · Q11(a)

**Question.** Write pseudocode for the specified grading system.

**Solution.** First assign the base grade: A≥90, B=80–89, C=71–79, D=60–70, E=50–59, otherwise F. The printed ranges in the paper overlap at 60–70 and 50–69; resolving them as contiguous non-overlapping bands is necessary. For marks ≥50, let `d = 10 - (marks mod 10)`; when `d<3`, advance one grade, capped at A. Do not promote marks below 50.

```text
if marks >= 90: grade = A
elif marks >= 80: grade = B
elif marks >= 71: grade = C
elif marks >= 60: grade = D
elif marks >= 50: grade = E
else: grade = F
if marks >= 50 and marks mod 10 >= 8 and grade != A:
    grade = previous_letter(grade)
```

### 2024 · Q11(b)

**Question.** Print delivery times divisible by 6 but not by 4.

**Solution.** Test both divisibility conditions for each value:

```text
for t in times:
    if t mod 6 = 0 and t mod 4 ≠ 0:
        print(t)
```

### 2024 · Q12(a)

**Question.** Give efficient pseudocode to find the largest and smallest numbers in a list.

**Solution.** Initialize both extrema to the first element, then scan the rest once, updating each as needed. This takes $O(N)$ time and $O(1)$ extra space.

```text
smallest = largest = A[0]
for x in A[1:]:
    if x < smallest: smallest = x
    if x > largest:  largest = x
```

### 2024 · Q12(b)

**Question.** Give pseudocode for factorial using a `for` loop.

**Solution.** For integer $n\ge0$, initialize `fact=1`; multiply by each integer from 2 through $n$. The result is $n!$; $0!=1$.

<!-- page 3 | Module 3 -->

## Module 3 · Python programming, recursion and number problems

### 2024 · Q5

**Question.** Find the outputs of two `range` loops and `2*3**2**2`.

**Solution.** The first loop prints `-10 -12 -14 -16 -18 `. The second prints `10`, `8`, `6`, `4`, `2`, `0` on separate lines. Exponentiation associates right-to-left, so $2\cdot3^{(2^2)}=162$.

### 2024 · Q6

**Question.** Write a Python program to sum the even numbers among $N$ inputs.

**Solution.**

```python
n = int(input())
total = 0
for _ in range(n):
    value = int(input())
    if value % 2 == 0:
        total += value
print(total)
```

### 2024 · Q13(a)

**Question.** Generate the first $n$ Fibonacci numbers recursively.

**Solution.** Define $F(0)=0$, $F(1)=1$, and $F(n)=F(n-1)+F(n-2)$. A direct recursive version is clear but exponential; memoization or the loop below avoids repeated work.

```python
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print([fib(i) for i in range(n)])
```

### 2024 · Q13(b)

**Question.** Test whether three side lengths form a right triangle.

**Solution.** Sort sides $a\le b\le c$. A valid triangle must satisfy $a>0$ and $a+b>c$; it is right-angled exactly when $a^2+b^2=c^2$ (allow a numeric tolerance for floating-point input).

```python
a, b, c = sorted(map(float, input().split()))
print(a > 0 and a + b > c and abs(a*a + b*b - c*c) < 1e-9)
```

### 2024 · Q14(a)

**Question.** Use recursion and the GCD–LCM relation to find the LCM of positive integers $a,b$.

**Solution.** Compute the GCD recursively with Euclid’s algorithm, then use $\operatorname{lcm}(a,b)=ab/\gcd(a,b)$.

```python
def gcd(a, b):
    return a if b == 0 else gcd(b, a % b)

def lcm(a, b):
    return a * b // gcd(a, b)
```

### 2024 · Q14(b)

**Question.** Reorder a string as uppercase letters, lowercase letters, digits, then special characters.

**Solution.** Stable grouping keeps the original relative order within each class.

```python
s = input()
result = (''.join(c for c in s if c.isupper()) +
          ''.join(c for c in s if c.islower()) +
          ''.join(c for c in s if c.isdigit()) +
          ''.join(c for c in s if not c.isalnum()))
print(result)
```

<!-- page 4 | Module 4 -->

## Module 4 · Divide and conquer, greedy methods and dynamic programming

### 2024 · Q7

**Question.** Why use randomized approaches in problem solving?

**Solution.** Random choices can avoid adversarial worst cases, explore a large search space, and produce a useful approximate answer when exhaustive search is expensive. Their quality or runtime is probabilistic and must be assessed over repeated trials or with a suitable guarantee.

### 2024 · Q8

**Question.** The paper asks for an algorithm to recover a forgotten four-digit numeric password, but the scan’s question text ends after “due to a system error”.

**Solution.** The prompt is incomplete in the source transcript, and a password recovery procedure cannot be inferred safely from that fragment. Check the linked original PDF for the full requirements before solving this question.

### 2024 · Q15(a)

**Question.** Use divide and conquer to find the sum of the two smallest positive integers in an array.

**Solution.** For each half, return its two smallest values; merge the two results and select the smallest two of the four candidates. The merge is constant work, giving $T(N)=2T(N/2)+O(1)=O(N)$. Example: `[8,3,6,1,5]` has two smallest values 1 and 3, so the sum is 4.

### 2024 · Q15(b)

**Question.** Compare greedy and dynamic programming.

**Solution.** A greedy algorithm commits to the locally best available choice and is usually simpler and cheaper; it is correct only when the problem has the greedy-choice property. Dynamic programming stores overlapping subproblem results and combines them to guarantee an optimum when optimal substructure holds, usually using more time or memory.

### 2024 · Q16(a)

**Question.** Explain memoization and tabulation for Fibonacci numbers.

**Solution.** Memoization is top-down recursion that caches each computed $F(k)$, so each value is calculated once. Tabulation is bottom-up: store $F(0),F(1)$ and iteratively form later values. Both take $O(n)$ time; tabulation can use $O(1)$ extra space by retaining only the last two values.

### 2024 · Q16(b)

**Question.** Greedily maximize the number of tasks completed before a time limit, given task durations.

**Solution.** Assuming every task has equal value and tasks are independent, sort durations from shortest to longest. Add each duration while the cumulative total remains within the limit, stopping when the next one does not fit. This is optimal for maximizing the count because replacing any selected longer task with a shorter available one cannot reduce the count. If tasks have different values or precedence constraints, this greedy rule needs revision.

> **Source note:** The 2024 paper’s Q8 statement is cut off in the scan transcription; its original PDF is linked above. No 2025 UCEST105 regular paper was listed in the KTU Notes archive when collected.

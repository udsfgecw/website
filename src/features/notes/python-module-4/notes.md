<!-- page 1 | Module 4 · source page 1 -->

[Non-content page]

---

---

<!-- page 2 | Module 4 · source page 2 -->

[Non-content page]

---

---

<!-- page 3 | Module 4 · source page 3 -->

# INTRODUCTION

The **problem needs to be clearly defined** -- this means that one should be able to identify the current situation, the end goal, the possible means of reaching the end goal, and the potential obstacles. The problem needs to be **computable** -- one should consider what type of calculations are required, and if these are feasible within a reasonable time frame and processing capacity. The **data requirements** of the problem need to be examined, such as what types of data the problem involves, and the storage capacity required to keep this data. One should be able to determine if the problem can be approached using **decomposition** and **abstraction**, as these methods are key for tackling complex problems.

---

---

<!-- page 4 | Module 4 · source page 4 -->

# BRUTE-FORCE APPROACH

- **Lack of Sophistication**
  - The brute-force strategy is characterized by simplicity and a lack of complexity in its approach.
  - It typically follows the most direct or obvious route without optimizing for fewer operations.
- **Direct and Obvious Route**
  - The approach doesn't attempt to minimize the number of operations required to find the solution.
- **Common in Searching Problems**
  - Brute-force is commonly used in search problems, where the goal is to find a specific object from a list of candidates.
- **Problem Structure Allows Optimization** (Avoiding Unnecessary Searches)
  - Often, the structure of a problem may allow us to eliminate many candidates before searching through them.
  - Example: In an unfamiliar grocery store, one would go directly to the frozen food aisle without searching other aisles.



![Laptop displaying source code on screen with a person's hand resting near the keyboard](/notes/cse/s1/python/module-4/assets/page-004-image-1.png)

---

---

<!-- page 5 | Module 4 · source page 5 -->

# BRUTE-FORCE APPROACH

**Brute-Force Ignores Optimization**
- Unlike intelligent search methods, brute-force ignores potential optimizations and proceeds to search through all candidates, even when some could be eliminated.

**Exhaustive Search**
- This approach is also known as exhaustive search, where every possibility is checked until the desired object is found.

**Drawback of Brute-Force**
- Brute-force can be inefficient and time-consuming as it checks each candidate without reducing the search space, especially in large problems



![A laptop displaying code on its screen with a wooden desk background](/notes/cse/s1/python/module-4/assets/page-005-image-1.png)

---

---

<!-- page 6 | Module 4 · source page 6 -->

# EXAMPLE

# PADLOCK COMBINATION PROBLEM

* **Problem:** You are trying to unlock a padlock with a combination. The combination is a 4-digit number, and you need to try every possible combination to find the correct one.
* **Brute-Force Approach:** Start from 0000 and try each combination incrementally until the correct one is found.
* **Steps:**
  * Try 0000
  * Try 0001
  * Try 0002
  * Continue until 9999.

Time Complexity: If the lock has $n$ digits, there are $10^n$ possible combinations. In the case of a 4-digit lock, there are 10,000 combinations (0000 to 9999).

---

---

<!-- page 7 | Module 4 · source page 7 -->

[Non-content page]

---

---

<!-- page 8 | Module 4 · source page 8 -->

STEP 1

# DIVIDE

Divide the problem into **smaller sub-problems**.

The problem is **recursively divided** until the sub-problems are small enough to be solved directly.

Each sub-problem represents part of the original problem, but is simpler and more manageable.

This step often involves finding the "recursive case," where the problem is reduced into smaller sub-problems.

---

---

<!-- page 9 | Module 4 · source page 9 -->

# STEP 2
CONQUER

- **Conquer** the sub-problems by solving them directly.
- Once the problem is divided into smaller parts, these smaller parts are **solved individually**.
- The conquer step usually involves **recursion** and often includes **a base case**—when the sub-problems are small enough that they no longer need to be divided.
- When the base case is reached, the sub-problem is solved with basic operations.

---

---

<!-- page 10 | Module 4 · source page 10 -->

[Non-content page]

---

---

<!-- page 11 | Module 4 · source page 11 -->

# RECURSION IN DIVIDE-AND-CONQUER

- **Recursion** is a key feature of the divide-and-conquer approach.
- A recursive function calls itself with smaller inputs, breaking down the problem progressively until the base case is reached.
- Once the base case is solved, the function returns values that help solve larger sub-problems.

---

---

<!-- page 12 | Module 4 · source page 12 -->

EXAMPLE

# THE MERGE SORT ALGORITHM

The merge sort algorithm closely follows the divide and conquer paradigm.

In the merge sort algorithm, we divide the n-element sequence to be sorted into two subsequences of $n = 2$ elements each.

Next, we sort the two subsequences recursively using merge sort.

Finally, we combine the two sorted subsequences to produce the sorted answer.



![Colored blocks on a blue background](/notes/cse/s1/python/module-4/assets/imagen-merge-sort-example.png)



12

---

---

<!-- page 13 | Module 4 · source page 13 -->

# EXAMPLE
# THE MERGE SORT ALGORITHM



![Unsorted array representation showing values 7, 6, 1, 5, 4, 3](/notes/cse/s1/python/module-4/assets/imagen-input-array.png)





![Tree structure illustrating the divide phase of merge sort](/notes/cse/s1/python/module-4/assets/imagen-merge-sort-split-tree.png)

---

---

<!-- page 14 | Module 4 · source page 14 -->

[Non-content page]

---

---

<!-- page 15 | Module 4 · source page 15 -->

# ADVANTAGES

- **Simplifies Difficult Problems**
  - The divide and conquer approach reduces complex problems into smaller, easily solvable sub-problems.
  - It helps break down difficult tasks, making them more manageable and less intimidating.
- **Helps Discover Efficient Algorithms**
  - Divide and conquer has been central in the development of efficient algorithms like Quick Sort and Merge Sort.
  - It plays a critical role in finding optimized solutions to various computational problems.
- **Effective Memory Cache Usage**
  - Once sub-problems are broken down to smaller units, they can often be solved within memory caches, reducing the need to access slower main memory.
  - This makes the algorithm more efficient in terms of speed and time.
- **Improves Computational Precision**
  - Divide and conquer algorithms may lead to more accurate results in cases where rounded arithmetic is involved, outperforming iterative methods.
- **Parallel Execution**
  - The sub-problems generated in divide and conquer can often be solved independently.
  - This makes the approach ideal for parallel execution, improving performance in multi-core processors or distributed systems

---

---

<!-- page 16 | Module 4 · source page 16 -->

# DISADVANTAGES

* **Recursion Overhead**
  * Recursion can be slow and might add significant overhead, especially if not properly optimized.
  * In some cases, this overhead can outweigh the benefits of the divide and conquer approach, making it less efficient than other methods.

* **Complexity for Large Problems**
  * For problems with large n, divide and conquer can become more complex than simpler iterative methods.
  * The additional complexity of recursion, combined with the need for multiple recursive calls, can lead to more complicated solutions.

* **Inefficiency for Simple Tasks**
  * For simple problems (e.g., adding large numbers), a straightforward iterative solution (like a simple loop) is often simpler and more efficient than a divide and conquer approach.
  * In such cases, dividing the problem into sub-problems and solving them recursively might introduce unnecessary complexity and overhead.

---

---

<!-- page 17 | Module 4 · source page 17 -->

[Non-content page]

---

---

<!-- page 18 | Module 4 · source page 18 -->

# DYNAMIC PROGRAMMING APPROACH

## When to Use Dynamic Programming

* **Overlap in Sub-Problems:** Justified only if sub-problems overlap, avoiding redundant calculations.
* **Memoization:** Results are stored in a table (or array) for reuse.
* **Efficiency:** Retrieving a stored result takes $\Theta(1)$ time.

---

---

<!-- page 19 | Module 4 · source page 19 -->

# DYNAMIC PROGRAMMING APPROACH

**Applications of Dynamic Programming**

* Commonly used in optimization problems.
* **Characteristics:**
  * Multiple possible solutions, each with an associated cost.
  * Goal: Find the solution with the smallest cost (optimal solution).

**Advantages of Dynamic Programming**

* Avoids redundant calculations, increasing efficiency.
* Guarantees optimal solutions for problems with overlapping sub-problems.

---

---

<!-- page 20 | Module 4 · source page 20 -->

Programming in C

# EXAMPLE
# FIBONACCI SERIES

Let's find the Fibonacci sequence up to the 5th term. A Fibonacci series is the sequence of numbers in which each number is the sum of the two preceding ones. For example, 0, 1, 1, 2, 3.

Here, each number is the sum of the two preceding numbers.

## Algorithm

Let $n$ be the number of terms.

1. If $n \le 1$, return $1$.
2. Else return the sum of two preceding numbers.



![Fibonacci series infographic](/notes/cse/s1/python/module-4/assets/imagen-fibonacci-series.png)

---

---

<!-- page 21 | Module 4 · source page 21 -->

EXAMPLE
FIBONACCI SERIES

We are calculating the Fibonacci sequence up to the **5th** term.
1. The first term is 0.
2. The second term is 1.
3. The third term is sum of 0 (from step 1) and 1 (from step 2), which is 1.
4. The fourth term is the sum of the third term (from step 3) and second term (from step 2) i.e. $1 + 1 = 2$.
5. The fifth term is the sum of the fourth term (from step 4) and third term (from step 3) i.e. $2 + 1 = 3$.

Hence, we have the sequence $0, 1, 1, 2, 3$. Here, we have used the results of the previous steps as shown below. This is called a **dynamic programming approach**.

$$egin{aligned}
F(0) &= 0 	hickspace F(1) = 1 
\
F(2) &= F(1) + F(0) 
\
F(3) &= F(2) + F(1) 
\
F(4) &= F(3) + F(2)

dend{aligned}$$

---

---

<!-- page 22 | Module 4 · source page 22 -->

Programming in C

# RECURSION VS DYNAMIC PROGRAMMING

- Dynamic programming is mostly applied to **recursive** algorithms.
- This is not a coincidence, most optimization problems require recursion and dynamic programming is used for **optimization**.
- But not all problems that use recursion can use Dynamic Programming.
- Unless there is a presence of **overlapping sub-problems** like in the Fibonacci sequence problem, a recursion can only reach the solution using a divide and conquer approach.
- This is the reason why a recursive algorithm like Merge Sort cannot use Dynamic Programming, because the subproblems are not overlapping in any way.



![Abstract digital wave and data visualization illustration](/notes/cse/s1/python/module-4/assets/page-022-image-1.png)





![Photograph of a long hotel corridor with doors and lights](/notes/cse/s1/python/module-4/assets/page-022-image-2.png)

---

---

<!-- page 23 | Module 4 · source page 23 -->

# INTRODUCTION TO GREEDY ALGORITHM

Makes decisions by choosing the option with the smallest immediate (local) cost. Does not consider the broader (global) solution. **Local Optimality:**- Decisions are based on a small portion of the problem's total information. **Simplicity:**- Straightforward approach to problem-solving. **Efficiency:**- Requires minimal effort to compute each local decision. **Global Optimality Not Guaranteed:**- May not always produce the best overall solution for general optimization problems. But **Guaranteed Optimality:**- Certain optimization problems are solvable with a greedy strategy that ensures a globally optimal solution. Greedy algorithms are efficient but not universally optimal. Best suited for problems where **local decisions align with global optimal solutions.**

---

---

<!-- page 24 | Module 4 · source page 24 -->

# CHARACTERISTICS OF GREEDY ALGORITHM

1. There is **an ordered list of resources**, with costs or value attributions. These quantify constraints on a system.
2. Take the maximum quantity of resources in the time a constraint applies.
3. For **example**, in an activity scheduling problem, the resource costs are in hours, and the activities need to be performed in serial order.

---

---

<!-- page 25 | Module 4 · source page 25 -->

## MOTIVATIONS FOR GREEDY APPROACH

The greedy approach has a few trade-offs, which may make it suitable for optimization.

One prominent reason is to achieve the most feasible solution immediately. In the activity selection problem, if more activities can be done before finishing the current activity, these activities can be performed within the same time.

Another reason is to divide a problem recursively based on a condition, with no need to combine all the solutions.

In the activity selection problem, the "recursive division" step is achieved by scanning a list of items only once and considering certain activities.

---

---

<!-- page 26 | Module 4 · source page 26 -->

# GREEDY ALGORITHMS VS DYNAMIC PROGRAMMING

- Greedy algorithms are similar to dynamic programming in the sense that they are both tools for optimization.
- However, greedy algorithms look for locally optimum solutions or in other words, a greedy choice, in the hopes of finding a global optimum. Hence greedy algorithms can make a guess that looks optimum at the time but becomes costly down the line and do not guarantee a globally optimum.
- Dynamic programming, on the other hand, finds the optimal solution to sub-problems and then makes an informed choice to combine the results of those sub-problems to find the most optimum solution.

---

---

<!-- page 27 | Module 4 · source page 27 -->

[Non-content page]

---

---

<!-- page 28 | Module 4 · source page 28 -->

Programming in C

# INTRODUCTION TO RANDOMIZED APPROACH

- **Definition:** Relies on input data and random number generation.
- Decisions involve random choices when determining the optimal option is challenging.
- **Key Feature:** Effective when there are many alternatives, most of which are "good."
- **Avoids Worst-Case Consistency:** Reduces the likelihood of consistent worst-case behavior for specific inputs.
- **Unpredictable Behavior:** Successive runs with the same input data typically yield different outcomes.



![Photo showing a dark surface with chalk-drawn arrows pointing in random directions](/notes/cse/s1/python/module-4/assets/page-028-image-1.png)

---

---

<!-- page 29 | Module 4 · source page 29 -->

# INTRODUCTION TO RANDOMIZED APPROACH

Applications

* **Game-Theoretic Scenarios:** Ensures fairness in adversarial or competitive environments.
* **Computer and Information Security:** Enhances unpredictability and fairness in security protocols.
* **Computer-Based Games:** Introduces variability and unpredictability in gameplay.

Limitations

* **No Worst-Case Running Time Improvement:-** Worst-case time complexity remains unaffected.

Randomized algorithms are versatile and promote fairness and unpredictability.

Most effective when exact optimization is unnecessary or impractical.



![Randomized algorithm arrows on a chalkboard](/notes/cse/s1/python/module-4/assets/imagen-randomized-arrows.png)

---

---

<!-- page 30 | Module 4 · source page 30 -->

# MOTIVATION FOR RANDOMIZED APPROACH

- **Simplicity in Complex Scenarios**
  - For problems where finding an exact or deterministic solution is complex or computationally expensive, randomized algorithms provide a simpler way to approximate results.
- **Handling Large Problem Spaces**
  - In scenarios involving a large number of possibilities (e.g., permutations, combinations), randomized approaches efficiently explore the solution space without exhaustively enumerating every possibility.
- **Fairness in Game-Theoretic and Competitive Situations**
  - Randomized approaches are useful in game theory, auctions, or competitive environments where fairness is a priority, as they prevent predictable outcomes.
- **Robustness Against Input Specificity**
  - Unlike deterministic approaches, randomized algorithms are not biased toward specific types of input, making them versatile and adaptable.
- **Mathematical Basis and Guarantees**
  - Theoretical foundations (e.g., probability theory, expectation values) ensure that randomized approaches yield accurate approximations in the long run, even if individual runs are unpredictable.
- **Real-World Alignment**



![A blackboard filled with chalk-drawn arrows pointing in various random directions.](/notes/cse/s1/python/module-4/assets/imagen-randomized-arrows-page30.png)

---

---

<!-- page 31 | Module 4 · source page 31 -->

# EXAMPLE

1) A company selling jeans gives a coupon for each pair of jeans. There are $n$ different coupons. Collecting $n$ different coupons would give you free jeans. How many jeans do you expect to buy before getting a free one?

```python
import random
def simulate_coupon_collector(n, trials):
    total_jeans = 0
    
    for _ in range(trials):
        collected_coupons = set()
        jeans_bought = 0
        
        while len(collected_coupons) < n:
            # Buy a pair of jeans and get a random coupon
            coupon = random.randint(1, n)
            collected_coupons.add(coupon)
            jeans_bought += 1
            
        total_jeans += jeans_bought
        
    return total_jeans / trials

# Example usage:
n = 10 # Number of coupon types
trials = 10000 # Number of trials for accuracy
expected_jeans = simulate_coupon_collector(n, trials)
print(f"Expected number of jeans to buy: {expected_jeans}")
```

**Initialization:**
* Define $n$, the total number of coupon types.
* Keep track of the coupons collected so far.

**Simulating the Process:**
* Repeatedly "buy jeans" (randomly select a coupon type) until all $n$ coupons are collected.
* Count the number of jeans bought in this trial.

**Repeat the Simulation:**
* Run the process for a large number of trials to minimize randomness in the results.
* Compute the average number of jeans purchased across all trials.

**Output:**
* The computed average approximates the expected value.

---

---

<!-- page 32 | Module 4 · source page 32 -->

# EXAMPLE

2) $n$ people go to a party and drop off their hats to a hat-check person. When the party is over, a different hat-check person is on duty and returns the $n$ hats randomly back to each person. What is the expected number of people who get back their hats?

```python
import random

def simulate_hat_problem(n, trials):
    total_matches = 0 # Total number of people who got their hats back
    
    for _ in range(trials):
        # Generate a random permutation of hats
        hats = list(range(1, n + 1)) # Original hat order
        random.shuffle(hats)         # Randomize hat order
        
        # Count the number of people who got their own hat back
        matches = sum(1 for i in range(n) if hats[i] == i + 1)
        total_matches += matches
        
    # Compute the average number of matches
    return total_matches / trials

# Example usage:
n = 10 # Number of people
trials = 10000 # Number of trials for accuracy
expected_matches = simulate_hat_problem(n, trials)
print(f"Expected number of people getting their hats back: {expected_matches}")
```

**Initialization:**
* Define $n$, the number of people at the party.
* Generate a random permutation of hats for each trial.

**Simulate Random Hat Assignments:**
* In each trial, assign hats randomly to $n$ people.
* Count how many people get their original hat back.

**Repeat the Simulation:**
* Run the process for a large number of trials to ensure accurate results.
* Compute the average number of people who get their hats back.

**Output the Result:**
* The computed average approximates the expected value.

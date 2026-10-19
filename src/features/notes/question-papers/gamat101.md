# GAMAT101 · Mathematics for Information Science 1

KTU 2024 Scheme · CSE · Semester 1. Questions are grouped by module; each year’s question is followed by a worked answer. The original PDFs preserve the complete paper layout.

**Original papers:** [2024 PDF](/notes/cse/s1/question-papers/assets/GAMAT101_2024.pdf) · [2025 PDF](/notes/cse/s1/question-papers/assets/GAMAT101_2025.pdf) · [KTU Notes archive](https://ktunotes.in/ktu-mathematics-for-information-science-1-question-papers-2024-scheme/)

<!-- page 1 | Module 1 -->

## Module 1 · Limits, continuity and derivatives

### 2024 · Q1

**Question.** Find where $g(x)=\begin{cases}(x^2-x-6)/(x-3),&x\ne3\\5,&x=3\end{cases}$ is continuous.

**Solution.** For $x\ne3$, factor $x^2-x-6=(x-3)(x+2)$, so $g(x)=x+2$. Its limit at $3$ is $5=g(3)$. Thus the removable discontinuity is filled, and $g$ is continuous for every real $x$.

### 2024 · Q2

**Question.** Find the first and second derivatives of $(x^3+7)/x$.

**Solution.** Write $f=x^2+7x^{-1}$. Then $f'=2x-7x^{-2}$ and $f''=2+14x^{-3}$, for $x\ne0$.

### 2024 · Q9(a)

**Question.** Evaluate $\lim_{x\to0}\left(\frac1{x-1}+\frac1{x+1}\right)/x$.

**Solution.** The numerator is $2x/(x^2-1)$, so the quotient is $2/(x^2-1)$. The limit is $-2$.

### 2024 · Q9(b)

**Question.** Find the linearization of $f(x)=\cos x$ at $x=\pi/2$.

**Solution.** $f(a)=0$ and $f'(a)=-1$ at $a=\pi/2$. Hence $L(x)=-(x-\pi/2)=\pi/2-x$.

### 2024 · Q9(c)

**Question.** Determine the concavity of $x^3-6x^2+9x+1$.

**Solution.** $f''(x)=6x-12$. The graph is concave down for $x<2$, concave up for $x>2$, with inflection point $(2,3)$.

### 2024 · Q10(a)

**Question.** Show $y=|x|$ is differentiable on either side of zero but not at zero.

**Solution.** For $x<0$, $|x|=-x$ and $y'=-1$; for $x>0$, $|x|=x$ and $y'=1$. At zero, the left and right derivatives differ, so $y'(0)$ does not exist.

### 2024 · Q10(b)

**Question.** If $A=\pi D^2/4$, find $dA/dD$ at $D=10\,\mathrm m$.

**Solution.** $dA/dD=\pi D/2$; at $D=10$, the area changes at $5\pi\,\mathrm m^2/\mathrm m$ per metre increase in diameter.

### 2025 · Q9(b)

**Question.** Determine the concavity and inflection point(s) of $f(x)=x^3-3x^2+2$.

**Solution.** $f''=6x-6$ changes sign at $x=1$, from negative to positive. The inflection point is $(1,0)$; the graph is concave down for $x<1$ and up for $x>1$.

### 2025 · Q9(c)

**Question.** Find $dy/dx$ if $x^2+xy+y^2=1.2$.

**Solution.** Differentiate implicitly: $2x+y+x y'+2y y'=0$. Therefore $\displaystyle y'=-\frac{2x+y}{x+2y}$ when $x+2y\ne0$.

<!-- page 2 | Module 2 -->

## Module 2 · Partial derivatives and multivariable limits

### 2024 · Q3

**Question.** Evaluate $\lim_{(x,y)\to(0,0)}(1-\cos(xy))/(xy)$.

**Solution.** Let $t=xy\to0$. Since $1-\cos t\sim t^2/2$, the ratio is asymptotic to $t/2$ and tends to $0$.

### 2024 · Q4

**Question.** Show $w_{xy}=w_{yx}$ for $w=e^x+x\ln y+y\ln x$.

**Solution.** $w_x=e^x+\ln y+y/x$, so $w_{xy}=1/y+1/x$. Also $w_y=x/y+\ln x$, so $w_{yx}=1/y+1/x$.

### 2024 · Q11(a)

**Question.** Find $w_{xy}$ for $w=xy+e^y/(y^2+1)$.

**Solution.** $w_x=y$; differentiating with respect to $y$ gives $w_{xy}=1$.

### 2024 · Q11(b)

**Question.** Evaluate $\lim_{(x,y)\to(0,0)}(x^2-xy)/(\sqrt{x}-\sqrt{y})$.

**Solution.** On the real domain $x,y\ge0$, factor the numerator as $x(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})$. The quotient is $x(\sqrt{x}+\sqrt{y})\to0$; the limit is $0$.

### 2024 · Q11(c)

**Question.** Find the first partial derivatives of $f=e^{x/y}+e^{z/y}$.

**Solution.** $f_x=e^{x/y}/y$, $f_z=e^{z/y}/y$, and $\displaystyle f_y=-\frac{x e^{x/y}+z e^{z/y}}{y^2}$, for $y\ne0$.

### 2024 · Q12(a)

**Question.** Find the domain and range of $g(x,y)=\ln(x^2+y^2)$.

**Solution.** The logarithm requires $x^2+y^2>0$, so the domain is $\mathbb R^2\setminus\{(0,0)\}$. Since $x^2+y^2$ can be any positive real number, the range is $\mathbb R$.

### 2024 · Q12(b)

**Question.** If $w=e^{x^2y}$, $x=\sqrt{uv}$, $y=1/v$, find $w_u,w_v$ at $(u,v)=(2,2)$.

**Solution.** $x^2y=(uv)(1/v)=u$, hence $w=e^u$. Thus $(w_u,w_v)=(e^u,0)$ and at $(2,2)$ the answer is $(e^2,0)$.

### 2025 · Q11(a)

**Question.** For $f=x\cos y+ye^x$, find $f_{xx},f_{xy},f_{yx},f_{yy}$.

**Solution.** $f_x=\cos y+ye^x$ and $f_y=-x\sin y+e^x$. Therefore $f_{xx}=ye^x$, $f_{xy}=e^x-\sin y$, $f_{yx}=e^x-\sin y$, and $f_{yy}=-x\cos y$.

### 2025 · Q11(b)

**Question.** Show $f=xy^3/(x^2+y^6)$ has no limit at $(0,0)$.

**Solution.** Along $x=0$, $f=0$. Along $x=y^3$, $f=1/2$ for $y\ne0$. Since these path limits differ, the limit does not exist.

### 2025 · Q12(a)

**Question.** For $w=4e^x\ln y$, $x=\ln(r\cos\theta)$, $y=r\sin\theta$, find $w_r,w_\theta$.

**Solution.** Substitute to get $w=4r\cos\theta\ln(r\sin\theta)$. Hence $\displaystyle w_r=4\cos\theta[\ln(r\sin\theta)+1]$ and $\displaystyle w_\theta=4r[-\sin\theta\ln(r\sin\theta)+\cos\theta\cot\theta]$.

### 2025 · Q12(b)

**Question.** Find the partial derivatives of $f=x^3y+2xy^3$ and verify the mixed-derivative theorem.

**Solution.** $f_x=3x^2y+2y^3$, $f_y=x^3+6xy^2$. Then $f_{xy}=3x^2+6y^2=f_{yx}$.

<!-- page 3 | Module 3 -->

## Module 3 · Gradients and extrema

### 2024 · Q5

**Question.** Find the directions of zero change in $f=(x^2+y^2)/2$ at $(1,1)$.

**Solution.** $\nabla f=(x,y)$, so at $(1,1)$ a direction $\mathbf u$ has zero directional derivative when $(1,1)\cdot\mathbf u=0$. The unit directions are $\pm(1,-1)/\sqrt2$.

### 2024 · Q6

**Question.** Find the critical point(s) of $f=5xy-7x^2+3x-6y+2$.

**Solution.** Set $f_x=5y-14x+3=0$ and $f_y=5x-6=0$. This gives $(x,y)=(6/5,69/25)$, the only critical point.

### 2024 · Q13(a)

**Question.** For $w=f(x-y,y-z,z-x)$, show $w_x+w_y+w_z=0$.

**Solution.** Let the three arguments be $u,v,t$. By the chain rule, $w_x=f_u-f_t$, $w_y=-f_u+f_v$, and $w_z=-f_v+f_t$. Their sum is zero.

### 2024 · Q13(b)

**Question.** Find the directional derivative of $g=(x-y)/(xy+2)$ at $(1,-1)$ in the direction $12\mathbf i+5\mathbf j$.

**Solution.** At $(1,-1)$, $\nabla g=(3,-3)$. Normalize the direction to $(12/13,5/13)$. The directional derivative is $\nabla g\cdot\mathbf u=21/13$.

### 2024 · Q14(a)

**Question.** Find the local extrema of $f=10xy e^{-(x^2+y^2)}$.

**Solution.** $f_x=10y e^{-r^2}(1-2x^2)$ and $f_y=10x e^{-r^2}(1-2y^2)$. Critical points are $(0,0)$ and $x^2=y^2=1/2$. The origin is a saddle. At $(\pm1/\sqrt2,\pm1/\sqrt2)$ with equal signs, $f=5/e$ (local maxima); with opposite signs, $f=-5/e$ (local minima).

### 2024 · Q14(b)

**Question.** Find $\nabla f$ for $f=x^2-xy+y^2-y$ at $(1,-1)$.

**Solution.** $\nabla f=(2x-y,-x+2y-1)$, so $\nabla f(1,-1)=(3,-4)$.

### 2025 · Q13(a)

**Question.** Locate the relative extrema and saddle points of $f=x^3+3xy^2-15x^2-15y^2+72x$.

**Solution.** The critical points from $f_x=3x^2+3y^2-30x+72=0$, $f_y=6y(x-5)=0$ are $(4,0),(6,0),(5,1),(5,-1)$. The Hessian determinant is positive with negative diagonal at $(4,0)$: local maximum $f=112$. It is positive with positive diagonal at $(6,0)$: local minimum $f=108$. At $(5,\pm1)$ the determinant is negative: saddle points.

### 2025 · Q13(b)

**Question.** Find the absolute extrema of $f=2x^2-4x+y^2-4y+1$ on the triangle bounded by $x=0$, $y=2$, and $y=2x$ in the first quadrant.

**Solution.** The vertices are $(0,0),(0,2),(1,2)$. Since $f=2(x-1)^2+(y-2)^2-5$, the minimum is $-5$ at $(1,2)$. Vertex values are $1,-3,-5$, so the absolute maximum is $1$ at $(0,0)$.

### 2025 · Q14(a)

**Question.** Find the directional derivative of $f=xe^y$ in direction $\mathbf i-\mathbf j$.

**Solution.** $\nabla f=(e^y,xe^y)$. The unit direction is $(1,-1)/\sqrt2$, so $D_{\mathbf u}f=e^y(1-x)/\sqrt2$ at the point of evaluation.

### 2025 · Q14(b)

**Question.** Find $z_x,z_y$ at the origin if $x^3+z^2+ye^{xz}+z\cos y=0$.

**Solution.** Let $F(x,y,z)=0$. Then $z_x=-F_x/F_z$ and $z_y=-F_y/F_z$. At the origin, $F_x=0$, $F_y=1$, and $F_z=1$, so $z_x=0$ and $z_y=-1$.

<!-- page 4 | Module 4 -->

## Module 4 · Constrained optimization and linear programming

### 2024 · Q7

**Question.** Find the extreme values of $xy$ subject to $x+y=16$.

**Solution.** Substitute $y=16-x$: $f=x(16-x)=64-(x-8)^2$. The maximum is $64$ at $(8,8)$; there is no minimum over the real line because $f\to-\infty$ as $|x|\to\infty$.

### 2024 · Q8

**Question.** Form an LPP for normal and super painkiller bottles with profits $11,15$ and resource limits A:1400, B:800, C:1800.

**Solution.** Let $x,y$ be weekly normal and super bottles. Maximize $Z=11x+15y$ subject to $2x+y\le1400$, $x+y\le800$, $x+3y\le1800$, $x,y\ge0$.

### 2024 · Q15(a)

**Question.** Find the point on $2x+y-z=5$ nearest the origin.

**Solution.** The nearest point lies along the plane’s normal $(2,1,-1)$. Projecting onto the plane gives $P=\frac5{2^2+1^2+(-1)^2}(2,1,-1)=(5/3,5/6,-5/6)$.

### 2024 · Q15(b)

**Question.** Run two steepest-descent steps for $f=x^2+y^2$ from $(1,1)$ with fixed step $\alpha=0.1$.

**Solution.** $\nabla f=(2x,2y)$, so each step multiplies both coordinates by $1-2\alpha=0.8$. The iterates are $(0.8,0.8)$ then $(0.64,0.64)$.

### 2024 · Q16(a)

**Question.** Find the largest and smallest $xy$ on $x^2/8+y^2/2=1$.

**Solution.** Let $x=\sqrt8\cos t$, $y=\sqrt2\sin t$. Then $xy=2\sin(2t)$; maximum $2$, minimum $-2$.

### 2024 · Q16(b)

**Question.** Maximize $z=6x_1+11x_2$ subject to $2x_1+x_2\le104$, $x_1+2x_2\le76$, $x_1,x_2\ge0$.

**Solution.** Feasible vertices are $(0,0),(52,0),(44,16),(0,38)$. Their objective values are $0,312,440,418$. The maximum is $440$ at $(44,16)$.

### 2025 · Q15(a)

**Question.** Minimize $z=20x+10y$ subject to $x+2y\le40$, $3x+y\ge30$, $4x+3y\ge60$, $x,y\ge0$.

**Solution.** Feasible corner points are $(15,0),(40,0),(6,12),(4,18)$. Their costs are $300,800,240,260$, so the minimum is $240$ at $(6,12)$.

### 2025 · Q15(b)

**Question.** Find the extreme values of $x^2+y^2+z^2$ subject to $x+y+z=1$, $x-y=0$.

**Solution.** Set $x=y=t$, $z=1-2t$. Then $f=6t^2-4t+1$, minimized at $t=1/3$, giving $(1/3,1/3,1/3)$ and $f=1/3$. There is no maximum because the constraint line is unbounded and $f\to\infty$.

### 2025 · Q16(a)

**Question.** Take three steepest-descent steps for $f=3x^2+4y^2$ from $(1,1)$ with fixed $\alpha=0.01$.

**Solution.** The update is $(x,y)\mapsto(0.94x,0.92y)$. The iterates are $(0.94,0.92)$, $(0.8836,0.8464)$, and $(0.830584,0.778688)$; the final value is approximately $f=4.4950$.

### 2025 · Q16(b)

**Question.** Formulate the three-product production LPP. Profits A,B,C are Rs.3,2,4; machine times are $(4,3,5)$ and $(2,2,4)$ minutes, with capacities 2000 and 2500. Produce at least 100 A, 200 B, 50 C, and no more than 150 A.

**Solution.** Let $a,b,c$ be production quantities. Maximize $Z=3a+2b+4c$ subject to $4a+3b+5c\le2000$, $2a+2b+4c\le2500$, $100\le a\le150$, $b\ge200$, $c\ge50$.

> **Source note:** The 2025 scan’s first page was marked non-content by transcription, so Q9(a) and any text on that page are not reconstructed here. See the original PDF above.

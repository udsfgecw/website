<!-- page 1 | Page 1 -->

<!-- page 2 | THERMODYNAMICS -->

## THERMODYNAMICS

- The science that deals with conversion of energy in terms of heat and work and their relationship along with properties of the system.
- The engineer's objective in studying thermodynamics is the analysis and design of large-scale systems such as automotive engines, turbines, compressors, refrigerators etc.

### System, Surrounding and Boundar

- **System:** It is a quantity of matter or a region in space on which attention is focused in the analysis of a thermodynamic problem.
- **Surrounding:** The space outside the system boundaries is known as surrounding.
- **Boundary:** The boundary separates system from the surrounding.
  - The boundary may be fixed or movable.
  - The boundary may be real or imaginary in nature.
- **Universe:** Systems and surrounding together is known as universe.

![Diagram illustrating System, Surroundings, Boundary, and Universe](/assets/notes/me/s1/ime-ice/module-1/system-surroundings-boundary.svg)

### Types of Systems

- Based on the types of energy and matter exchange, systems can be classified as:
  - **Open systems:** Exchange of both matter and energy.
  - **Closed systems:** No exchange of matter but exchange of energy.
  - **Isolated systems:** No exchange of matter and energy (e.g., Universe).
  - **Adiabatic Systems:** No exchange of heat energy

### Thermodynamic State

- The condition of a system at any instant of time is called its thermodynamic state.
- The thermodynamic state of the system can be described by properties of the system. For example, temperature (T), pressure (p), volume (v) and entropy (s).

### Thermodynamic Process

- When any property of a system changes there is a change in state, and the system undergoes a process. So, a change of state is called a process (or thermodynamics process).

<!-- page 3 | Thermodynamic Cycle -->

- A thermodynamic process is the evolution of a thermodynamic system proceeding from an initial state to a final state.
- The thermodynamic processes may be reversible or irreversible.
- **Reversible Process:** A process is said to be reversible if it should trace the same path in the reverse direction when the process is reversed.
- **Irreversible Process:** A process is said to be irreversible if it should not trace the same path in the reverse direction when the process is reversed.

![Diagram showing 1-2: Reversible process and 3-4: Irreversible process on property coordinates.](/assets/notes/me/s1/ime-ice/module-1/reversible-irreversible-process.svg)

### Thermodynamic Cycle

- When a system undergoes a series of processes and return to its initial condition, it is known as a cycle (or thermodynamics cycle)
- Any process or series of processes whose end states are identical is known as cycle.
- The cycle may be of imaginary engine or actual engine. The former is called ideal cycle and the latter actual cycle.

![Thermodynamic cycle diagram labeled 1-2-3-4-1: Cycle.](/assets/notes/me/s1/ime-ice/module-1/cycle-1-2-3-4.svg)

- Thermodynamic cycles- some examples:
  - Carnot Cycle
  - Otto Cycle
  - Diesel Cycle

<!-- page 4 | CARNOT CYCLE -->

## CARNOT CYCLE

- A Carnot cycle is an ideal thermodynamic cycle and it consists of two isothermal processes and two adiabatic processes.
- Both these processes are reversible and therefore It is the most efficient cycle, as it involves no losses.
- The working fluid in a Carnot's cycle is an ideal gas.
- A Carnot engine is a theoretical engine that operates on the Carnot cycle. Nicolas Carnot developed the basic model for this engine in 1824.
- This Carnot cycle consists of four processes namely,
  - 1-2: Isothermal expansion
  - 2-3: Adiabatic expansion
  - 3-4: Isothermal compression
  - 4-1: Adiabatic compression
- The Pressure -Volume (P-V) and Temperature -Entropy (T-s) diagram of Carnot cycle is given below:

![P-V and T-s diagrams of the Carnot cycle](/assets/notes/me/s1/ime-ice/module-1/carnot-pv-ts.svg)

![Cylinder and Piston diagram corresponding to Carnot cycle states](/assets/notes/me/s1/ime-ice/module-1/cylinder-carnot-states.svg)

<!-- page 5 | Page 5 -->

- **Isothermal expansion (1-2):** The gas expands isothermally from the state 1 to state 2. In this process, the heat is absorbed by the ideal gas from higher temperature.
- **Adiabatic expansion (2-3):** The gas expands adiabatically from the state 2 to state 3. Here, the system is thermally insulated.
- **Isothermal compression (3-4):** The gas compressed isothermally from the state 3 to state 4. Here, the heat loss occurs to lower temperature.
- **Adiabatic compression (4-1):** The gas compressed adiabatically from the state 4 to state 1. Here, the system is thermally insulated.

**<u>Derivation of efficiency of the Carnot Cycle</u>**

For the adiabatic expansion process 2-3,

$$\frac{V_3}{V_2} = \left\{\frac{T_2}{T_3}\right\}^{\frac{1}{\gamma-1}} \text{.....................(i)}$$

For the adiabatic compression process 4-1,

$$\frac{V_4}{V_1} = \left\{\frac{T_1}{T_4}\right\}^{\frac{1}{\gamma-1}}$$

Since $T_1 = T_2$ and $T_4 = T_3$

$$\frac{V_4}{V_1} = \left\{\frac{T_2}{T_3}\right\}^{\frac{1}{\gamma-1}} \text{.....................(ii)}$$

From (i) and (ii)

$$\frac{V_3}{V_2} = \frac{V_4}{V_1}$$

ie., adiabatic expansion ratio = adiabatic compression ratio

$$\text{and } \frac{V_2}{V_1} = \frac{V_3}{V_4}$$

i.e., isothermal expansion ratio = isothermal compression ratio.

During the entire cycle, the heat is supplied during 1-2 and rejected during 3-4

$$\text{Heat supplied} = p_1 V_1 \ln\left\{\frac{V_2}{V_1}\right\}$$

$$= m R T_1 \ln\left\{\frac{V_2}{V_1}\right\}$$

$$\text{Heat rejected} = p_3 V_3 \ln\left\{\frac{V_3}{V_4}\right\}$$

$$= m R T_3 \ln\left\{\frac{V_3}{V_4}\right\}$$

<!-- page 6 | Page 6 -->

Air standard efficiency, $$\eta = \frac{\text{Heat supplied} - \text{Heat rejected}}{\text{Heat supplied}}$$

$$= \frac{mRT_1 \ln\left\{\frac{V_2}{V_1}\right\} - mRT_3 \ln\left\{\frac{V_3}{V_4}\right\}}{mRT_1 \ln\left\{\frac{V_2}{V_1}\right\}}$$

$$\eta = \frac{mRT_1 \ln\left\{\frac{V_2}{V_1}\right\} - mRT_3 \ln\left\{\frac{V_2}{V_1}\right\}}{mRT_1 \ln\left\{\frac{V_2}{V_1}\right\}}$$

$$= \frac{mR \ln\left\{\frac{V_2}{V_1}\right\} (T_1 - T_3)}{mR \ln\left\{\frac{V_2}{V_1}\right\} \times T_1}$$

$$= \frac{(T_1 - T_3)}{T_1}$$

$$\text{or } \eta = 1 - \frac{T_3}{T_1} = 1 - \frac{\text{Temperature of cold body}}{\text{Temperature of hot body}}$$

* Efficiency of Carnot heat engine cycle is given by:

$$\eta_{\text{Carnot HE}} = \left( \frac{\text{Heat supplied} - \text{Heat rejected}}{\text{Heat supplied}} \right) = \left( \frac{Q_s - Q_R}{Q_s} \right)$$

$$\boxed{\eta_{\text{Carnot HE}} = \left( 1 - \frac{Q_R}{Q_s} \right) = \left( 1 - \frac{T_{\text{min}}}{T_{\text{max}}} \right)}$$

Note: Temperature in **Kelvin scale (K)**

<!-- page 7 | Page 7 -->

- Carnot cycle efficiency is 100 % when the minimum temperature is 0°K or maximum temperature is infinity.

$$\begin{aligned}
\lim_{T_{\text{min}} \to 0} \eta &= 1 \\
\lim_{T_{\text{max}} \to \infty} \eta &= 1
\end{aligned}$$

- Two alternative methods by which the efficiency of a Carnot cycle can be increased
  (i) Efficiency can be increased as the higher temperature increases.
  (ii) Efficiency can be increased as the lower temperature decreases.

<u>**Assumptions of Carnot cycle**</u>

- Working substances is a perfect gas
- There is no friction between the cylinder and piston.
- Walls of cylinder and piston are considered as perfect heat insulator.
- Transfer of heat does not affect the temperature of source or sink.

<!-- page 8 | OTTO CYCLE -->

## OTTO CYCLE

- The Otto cycle is the ideal cycle for spark ignition (SI) engine or Petrol Engine.
- Otto cycle is also known as Constant Volume Cycle, since heat addition take place at constant volume.
- The Otto cycle is named after its inventor Nikolaus Otto
- The four processes in the Otto cycle are:
  - 1-2: Adiabatic compression
  - 2-3: Constant Volume Heat Addition
  - 3-4: Adiabatic expansion
  - 4-1: Constant Volume Heat Rejection
- The Pressure -Volume (P-V) and Temperature -Entropy (T-s) diagram of Otto cycle is given below:

![P-V and T-S diagrams of the Otto cycle along with a cylinder-piston diagram](/assets/notes/me/s1/ime-ice/module-1/otto-pv-ts-cylinder.svg)

Consider a cylinder containing ‘m’ kg of air. Let $p_1$, $V_1$ and $T_1$ be the pressure, volume and temperature of air inside the cylinder, at state 1. This air is compressed adiabatically to state 2, doing work on the air. Curve 1-2 in the p-V diagram and the line 1-2 in the T-S diagram represents this process. Now heat is supplied to this compressed air at constant volume from an external hot body till state 3 is reached.

This process is represented by a vertical line 2-3 in the p-V diagram and curve 2-3 in the T-S diagram. At state 3 the hot body is removed and the air is allowed to expand adiabatically to state 4, doing external work. This process is represented by curve 3-4 in the p-V diagram and a vertical line 3-4 in the T-S diagram. Heat is rejected at constant volume to an external cold body till state 1 is reached . This process is represented by vertical line 4-1 in the p-V diagram and curve 4-1 in the T-S diagram. Thus the air finally returns to its original state after completing a cycle.

<!-- page 9 | Page 9 -->

**DIESEL CYCLE**

- The Diesel cycle is the ideal cycle for combustion ignition (CI) engine or Diesel Engine.
- Diesel cycle is also known as Constant Pressure Cycle, since heat addition take place at constant pressure.
- The four processes in the Diesel cycle are:
  - 1-2: Adiabatic compression
  - 2-3: Constant Pressure Heat Addition
  - 3-4: Adiabatic expansion
  - 4-1: Constant Volume Heat Rejection
- The Pressure -Volume (P-V) and Temperature -Entropy (T-s) diagram of Diesel cycle is given below:

![P-V and T-S diagrams of Diesel cycle](/assets/notes/me/s1/ime-ice/module-1/diesel-pv-ts.svg)

![Diagram of a cylinder and piston](/assets/notes/me/s1/ime-ice/module-1/cylinder-piston-horizontal.svg)

Consider a cylinder containing ‘m’ kg of air. Let $p_1$, $V_1$ and $T_1$ be the pressure, volume and temperature of air inside the cylinder at state 1. This air is compressed adiabatically to state 2, doing work on the air. Curve 1-2 in the p-V diagram and line 1-2 in the T-S diagram represents this process. Now heat is supplied to the air at constant pressure from an external hot body till state 3 is reached. This process is represented by a horizontal line 2-3 in the p-V diagram and a curve 2-3 in the T-S diagram . At state 3, the hot body is removed and the air is allowed to expand adiabatically to state 4, doing external work. This process is represented by curve 3-4 in the p-V diagram and a vertical line 3-4 in the T-S diagram. Heat is rejected at constant volume to an external cold body till state 1 is reached. This process is represented by a vertical line 4-1 in the p-V diagram and curve 4-1 in the T-S diagram. Thus the air finally returns to its original state after completing a cycle.

<!-- page 10 | INTERNAL COMBUSTION ENGINE -->

## INTERNAL COMBUSTION ENGINE

* Internal combustion engine (I.C. Engine) is a heat engine, which converts chemical energy of fuel into mechanical work.
* Chemical energy of the fuel is first converted in to thermal energy by means of combustion inside the engine and then convert into mechanical work.

### Classification of internal combustion engines

Internal combustion engines can be classified in following different ways:

* **According to the type of thermodynamic working cycles.**
  * Otto cycle engine
  * Diesel cycle engine
  * Dual cycle engine
* **According to the type of the fuel used.**
  * Petrol engine
  * Diesel engine
  * Gas engine
* **According to the number of strokes.**
  * Four stroke engine
  * Two stroke engine
* **According to the method of ignition.**
  * Spark ignition engine (S.I. engine)
  * Compression ignition engine (C.I. engine)
* **According to the number of cylinders.**
  * Single cylinder engine
  * Multi cylinder engine
* **According to the method of cooling.**
  * Air cooled engine
  * Water cooled engine
  * Oil cooled engine

<!-- page 11 | Application of internal combustion engines -->

## Application of internal combustion engines

The I.C. engines are generally used for:

(i) Automobiles

(ii) Aircraft

(iii) Locomotives

(iv) Ships

(v) Pumping sets

## Parts of internal combustion engines

The principal parts of an internal combustion engine are:

1. Cylinder
2. Cylinder head
3. Valves
4. Piston
5. Piston ring
6. Connecting rod
7. Crankshaft
8. Crankcase
9. Spark plug or Fuel Injector

![Diagram of principal parts of an internal combustion engine](/assets/notes/me/s1/ime-ice/module-1/ic-engine-principal-parts.svg)

<!-- page 12 | Page 12 -->

**Cylinder:**

- It is a hollow cylindrical structure closed at one end with the cylinder head.
- The combustion of the fuel takes place inside the cylinder.
- Normally It is made of cast iron or steel alloy.

**Cylinder Head:**

- It covers one end of the cylinder and consists of valves/ports and spark plug/fuel injector.
- The cylinder head is normally made of cast iron.

**Valves:**

- Valves are provided either on the cylinder head or on the side of the cylinder.
- The inlet valve is used for supplying air and fuel coming into the cylinder.
- The exhaust valve is used for discharging the products of combustion

**Piston:**

- Piston is a cylindrical component which is fitted perfectly inside the cylinder.
- The main function of the piston is to transfer the power produced by combustion of the fuel to the crankshaft.
- Generally, pistons are made up of aluminium alloy.

**Piston Rings:**

- These are circular rings fitted in the circumferential grooves of the piston.
- The upper ring is known as compression ring and the lower rings are known as oil rings.
- Piston rings are made up of special steel alloys to retain elastic properties at high temperature.

**Connecting Rod:**

- Connecting rod connects the piston and the crankshaft.
- It used to transfer the reciprocating motion of the piston into rotary motion of the crankshaft.
- Normally, it is made of forged steel or alloy steel.

**Crankshaft:**

- It is the principal rotating part of the engine from which we obtain the rotary power
- It consists of several bearings and crank pins.

**Crankcase:**

- This is the main housing at the bottom of the engine, providing support for the cylinder.
- The crankcase provides protection to the parts from dirt and it acts as a lubricant sump.

**Spark plug or Fuel Injector:**

- In S.I engine, a spark plug is located near the top of the cylinder and initiates the combustion of the fuel.
- In C.I. engines, the fuel injector is used to supply the fuel to cylinder under pressure.

<!-- page 13 | Basic Terminologies of Internal Combustion Engine -->

## Basic Terminologies of Internal Combustion Engine

![Diagram of an internal combustion engine cylinder showing terminology such as bore, stroke, T.D.C., B.D.C., swept volume, clearance volume, connecting rod, and crank.](/assets/notes/me/s1/ime-ice/module-1/ic-engine-terminology.svg)

- **Cylinder bore (D):** It is the nominal inner diameter of the engine cylinder.

- **Piston area (A):** It is the circular area corresponding to cylinder bore.

  $$A = \left(\frac{\pi}{4}\right) D^2$$

- **Top Dead Centre (T.D.C.):** It is the extreme position of the piston at the top of the cylinder. For horizontal engines it is known as the Outer Dead Centre (O.D.C.).

- **Bottom Dead Centre (B.D.C.):** It is the extreme position of the piston at the bottom of the cylinder. For horizontal engine it is known as the Inner Dead Centre (I.D.C.).

- **Stroke (L):** It is the distance between T.D.C. and B.D.C.

  $$L = 2 \cdot r$$

- **Swept volume ($V_s$):** It is the volume swept through which the piston in moving between T.D.C. and B.D.C.

  $$V_s = \frac{\pi}{4} \cdot D^2 \cdot L$$

- **Clearance volume ($V_c$):** It is the volume above the piston head at the TDC.

- **Volume of the cylinder (V):** It is the total volume inside the cylinder.

  $$V = V_s + V_c$$

- **Compression ratio(r):** It is the ratio of total volume of the cylinder to clearance volume.

  $$r = \frac{V}{V_c} = \frac{V_s + V_c}{V_c} = \left(\frac{V_s}{V_c}\right) + 1$$

<!-- page 14 | The working principle of an I.C. Engine -->

## The working principle of an I.C. Engine

- The working principle of an I.C. engine consists of thermodynamic cycle involved to generate the power and thermodynamic processes such as suction, compression, heat addition expansion, and heat rejection.
- In this session, we will study the operating principle and working of:
  - Four strokes spark ignition engine (Petrol Engine)
  - Four strokes compression ignition engine (Diesel Engine)
  - Two strokes spark ignition engine (Petrol Engine)
  - Two strokes compression ignition engine (Diesel Engine)

### Four-Stroke Petrol Engine (SI Engine)

- The four-stroke petrol engine is working on Otto cycle.
- In four stroke engines entire working cycle is completed in four strokes of the piston or two revolutions of the crank shaft. Each stroke consists of $180^\circ$ rotation of crank shaft.
- In this engine, the cycle of operations is completed in 4-strokes of the piston or two revolutions of the crankshaft.
- During the 4-strokes, there are five processes to be completed, viz., suction, compression, combustion, expansion, and exhaust.
- The compression ratio of S.I. Engine varies from 6 to 10.

The P-V diagram and the working diagram are shown in Figures below:

![P-V diagram for an Otto cycle showing processes 1-2, 2-3, 3-4, and 4-1 with isentropic processes indicated.](/assets/notes/me/s1/ime-ice/module-1/otto-pv-processes.svg)

<!-- page 15 | Sequence of operations four stroke petrol engine -->

![Sequence of operations in a four-stroke petrol engine showing Suction, Compression, Power, and Exhaust strokes.](/assets/notes/me/s1/ime-ice/module-1/four-stroke-petrol-sequence.svg)

TDC = Top Dead Centre  
BDC = Bottom Dead Centre

### Sequence of operations four stroke petrol engine

The sequence of operations of the S.I. Engine can be explained as:

**Suction Stroke:** It starts when the piston is at TDC and about to move downward, the inlet valve is open, and the exhaust valve is closed. Due to suction, air-fuel mixture enters the cylinder, and the suction ends when the piston reaches the BDC.

**Compression Stroke:** At the end of the suction stroke, the inlet valve is closed and the piston moves towards TDC. In this stroke, compression of the air-fuel mixture in the cylinder take place. At the end of compression and at constant volume, sparking starts at the spark plug and burning takes place. In this stroke, both the valves are closed.

**Power Stroke or Working Stroke:** The high pressure developed due to combustion of fuel forces the piston towards BDC. The power is transferred to the crankshaft. In this stroke, both the valves are closed.

**Exhaust Stroke:** At the end of expansion or power stroke, the exhaust valve opens and the inlet valve remains closed. Piston moves towards TDC and exhaust gas is forced to escape into the atmosphere through the exhaust valve.

<!-- page 16 | Four-Stroke Diesel Engine (CI Engine) -->

## Four-Stroke Diesel Engine (CI Engine)

- The four-stroke diesel engine is working on Diesel cycle.
- The four-stroke compression ignition (C.I. Engine) is very similar to the four-stroke spark ignition engine, but it operates at a much higher compression ratio.
- The compression ratio of S.I. Engine varies from 6 to 10 whereas in C.I. Engines it ranges from 16 to 20.
- In this engine, a fuel pump and injector are used to inject the fuel at high pressure.
- The various strokes of a four-stroke petrol engine are: suction stroke, compression stroke, working stroke and exhaust stroke.

The P-V diagram and the working diagram are shown in Figures below:

![P-V diagram of the Diesel cycle](/assets/notes/me/s1/ime-ice/module-1/diesel-pv-processes.svg)

![Working diagram of four-stroke engine showing Suction, Compression, Power, and Exhaust strokes](/assets/notes/me/s1/ime-ice/module-1/four-stroke-working-diagram.svg)

**TDC = Top Dead Centre**  
**BDC = Bottom Dead Centre**

Sequence of operations four stroke diesel engine

<!-- page 17 | Page 17 -->

The sequence of operations of the C.I. Engine can be explained as:

**Suction Stroke:** In this stroke, the piston moves from TDC to BDC and air is sucked alone as the vacuum is created inside the cylinder. During suction inlet valve is open and exhaust valve remains closed,

**Compression Stroke:** Both the valves are closed during the stroke and air is compressed by the piston movement from BDC to TDC. At the end of compression at constant pressure fuel is injected and fuel starts to ignite automatically.

**Power Stroke or Working Stroke:** After the injection of the fuel is completed (after cut-off) the combustion products expand. Both valves remain closed during the expansion stroke.

**Exhaust Stroke:** The exhaust valve is open and the inlet valve is closed during the stroke. The movement of the piston from BDC to TDC pushes the product of combustion and disposed into the atmosphere through the exhaust valve.

<!-- page 18 | Page 18 -->

**Two-Stroke Petrol Engine (SI Engine)**

- The two-stroke petrol engine is working on Otto cycle.
- In two stroke engine entire working cycle is completed in two strokes of the piston or one revolution of the crank shaft. Each stroke consists of $180^\circ$ rotation of crank shaft.
- The three ports in two stroke engine are intake port, transfer port and exhaust port.
- In this engine air-fuel mixture (charge) is compressed in the crankcase by the bottom of the piston during the expansion stroke.
- The compressed charge passes through the transfer port into the engine cylinder.
- At the end of compression, sparking starts at the spark plug and burning takes place.
- Further downward movement of the piston uncovers transfer port and it causes the flow of charge in to the engine cylinder.
- The top of piston is provided with a deflector to avoid direct flow of fresh charge towards the exhaust port.
- During the upward motion of the piston, the transfer port is closed first and then the exhaust port is closed when compression of charge begins and the cycle is repeated in the same way.

The working diagram are shown in Figures below:

![Working diagram of two stroke petrol engine showing two states](/assets/notes/me/s1/ime-ice/module-1/two-stroke-petrol-states.svg)

Working of two stroke petrol engine

<!-- page 19 | Two-Stroke Diesel Engine (CI Engine) -->

## Two-Stroke Diesel Engine (CI Engine)

* The two-stroke diesel engine is working on diesel cycle.
* In two stroke engine entire working cycle is completed in two strokes of the piston or one revolution of the crank shaft. Each stroke consists of $180^\circ$ rotation of crank shaft.
* The three ports in two stroke engine are intake port, transfer port and exhaust port.
* The working of two-stroke C.I. engine is very similar to two-stroke S.I. engine. The main difference is that in C.I. engine supercharged air is supplied through the inlet port instead of air-fuel mixture (charge).
* The compressed air passes through the transfer port into the engine cylinder.
* At the end of compression, fuel is injected into the cylinder, then ignites and burning takes place.
* Further downward movement of the piston uncovers transfer port and it causes the flow of air in to the engine cylinder.
* The top of piston is provided with a deflector to avoid direct flow of fresh air towards the exhaust port.
* During the upward motion of the piston, the transfer port is closed first and then the exhaust port is closed when compression of air begins and the cycle is repeated in the same way.

The working diagram are shown in Figures below:

![Working of two stroke diesel engine diagrams showing two different piston and port configurations](/assets/notes/me/s1/ime-ice/module-1/two-stroke-diesel-configs.svg)

Working of two stroke diesel engine

<!-- page 20 | Comparison between S.I. and C.I. Engines (Petrol and Diesel Engines) -->

## Comparison between S.I. and C.I. Engines (Petrol and Diesel Engines)

| Description | SI Engine | CI Engine |
| --- | --- | --- |
| - Ignition type | - Spark | - Compression |
| - Working Cycle | - Otto (Energy supplied and rejected at constant volume) | - Diesel (Energy addition occurs at constant pressure but energy rejection at constant volume.) |
| - Processes in cycle | - Otto cycle consist of two adiabatic and two constant volume process. | - Diesel cycle consists of two adiabatic, one constant volume and one constant pressure processes |
| - Compression ratio and expansion ratio relation | - Compression ratio is equal to expansion ratio | - Compression ratio is greater than expansion ratio. |
| - Fuel | - Petrol (self-ignition temperature is high) | - Diesel (self-ignition temperature is low) |
| - Introduction of fuel | - Mixture of air and fuel | - Air and fuel separately pumped |
| - Load control | - Throttle controls the quantity of mixture | - Quantity of fuel regulated by pump. Air quantity not controlled. |
| - Compression ratio | - 6 to 10 | - 16 to 20 |
| - Speed | - High speed engine | - Low speed engine |
| - Thermal efficiency | - Due to lower compression ratio thermal efficiency is less | - Thermal efficiency is high |
| - Weight | - Less - lighter due to lower peak pressure | - High -due to heavier peak pressure |
| - Maintenance cost | - Low | - High |
| - Running cost | - High | - Low |

<!-- page 21 | Comparison between 4 – stroke and 2 stroke Engines -->

## Comparison between 4 – stroke and 2 stroke Engines

| 4 –Stroke Engine | 2 –Stroke Engine |
| --- | --- |
| • Thermodynamic cycle is completed in 4-stroke of piston | • Thermodynamic cycle is completed in 2-stroke of piston |
| • Turning moment is not uniform and so heavier flywheel id required | • Turning moment is more uniform and so lighter flywheel is used. |
| • Power produced by same size of engine is less (i.e. heavier engine) | • Power produced by same size of engine is high (i.e. lighter engine) |
| • Heavier engine | • Lighter engine |
| • Less cooling and lubrication required | • More cooling and lubrication required |
| • Valves are provided for intake and exit of working medium | • Ports are provided for intake and exit of working medium |
| • Thermal efficiency is more | • Thermal efficiency is less |
| • High initial cost | • Low initial cost |
| • Commonly used in cars, buses, trucks, etc. | • Commonly used in scooter, motor cycle, etc. |

## EFFICIENCIES OF IC ENGINE

- Some the IC Engine efficiencies are:

  1. **Mechanical efficiency:** It is the ratio of brake power (B.P.) to the indicated power (I.P.).
  2. **Overall efficiency:** It is the ratio of the work obtained at the crankshaft in a given time to the energy supplied by the fuel during the same time.
  3. **Indicated thermal efficiency:** It is the ratio of the heat equivalent to one kW hour to the heat in the fuel per I.P. hour
  4. **Brake thermal efficiency:** It is the ratio of the heat equivalent to one kW hour to the heat in the fuel per B.P. hour.
  5. **Volumetric efficiency:** It is the ratio of the actual volume of charge admitted during the suction stroke to the swept volume of the piston

<!-- page 22 | MPFI engines -->

## MPFI engines

Multi Point Fuel Injection [MPFI] system has one injector for each engine cylinder. Fuel is injected in more than one location. This system injects fuel into individual cylinders based on commands from the on board engine management system computer popularly known as Engine Control Unit. [ECU]. The ECU primarily controls the ignition timing and quantity of fuel to be injected.

![Block diagram of an MPFI system showing engine, injector, ECU, speed sensor, and intake manifold connections.](/assets/notes/me/s1/ime-ice/module-1/mpfi-block-diagram.svg)

The ECU is controlled by the data input from a set of sensors located all over the engine and its auxillaries. These sensors detect the various operating conditions of the engine and the performance required out of it. Such sensors constantly monitor, ambient temprature, engine coolant temperature, exhaust gas temperature, oxygen content of exhaust, engine speed, vehicle road speed etc. Based on a programme interpretation of all these input data the ECU gives the various commands to the engines fuel and a spark ignition timing system.

Fig shows the block diagram of an MPFI system. air enters into the intake manifold. The manifold pressure sensor detects the intake manifold vaccum and sends the information to the ECU. The speed sensors also sends information about the rpm of the engine to the ECU. The ECU in turn sends commands to the injector to control the amount of gasoline supply for injection. When the injectors spray fuel into the intake manifold the gasoline mixes with the air and the mixture enters the cylinder of the engine.

**Advantages of MPFI**

1. The difference in power developed in each cylinder is minimum.
2. Vibration of engine equipped with the system is less.
3. Immediate response to sudden acceleration and deceleration
4. Since the engine is controlled by ECM [Engine Control Module] more accurate amount of air fuel mixture will be supplied and as a result complete combustion takes place. This leads to effective utilization of fuel supplied and hence low emission level.
5. The mileage of the vehicle is more.

<!-- page 23 | Common Rail Direct Injection System - CRDI Engine -->

## Common Rail Direct Injection System - CRDI Engine

- Common rail direct injection (CRDI) system is mostly used in modern diesel engines.
- In this type of injection system, the fuel is supplied to the injectors with the required pressure and further supplied to the cylinders for the combustion process.
- This system injects diesel five times more accurately than the normal injection system by high response injectors with electronic control.
- It results the greater reduction of particulate matter and NOx thereby improving the fuel efficiency and increasing its torque. So, they lead to reduce engine noise and vibration.

### Components of CRDI System

1. High Pressure Fuel Pump
2. Common Fuel Rail
3. Injectors
4. Engine Control Unit (ECU)

![Schematic diagram of a Common Rail Direct Injection (CRDI) System](/assets/notes/me/s1/ime-ice/module-1/crdi-block-diagram.svg)

### Working of CRDI

The engine works on CRDI system is known as CRDI engines. In common rail direct injection system, the fuel is collected from the tank and further supplied into the pressure pump through the fuel filters, the pressure pump used to increase the pressure of the fuel and supplied to the fuel rail, in fuel rail section the pressurized fuel is supplied into the injectors with same quantity

<!-- page 24 | <u>HYBRID VEHICLES</u> -->

and same pressure in all injectors and further the fuel in the injectors is supplied into the cylinders for combustion process.

By using a common rail direct injection system, the required pressure can be obtained in all the injectors and the same energy obtained from all the cylinders. this process increases the efficiency, decreases the fuel supply, etc.

<u>Advantages of CRDI</u>
- It delivers more power and torque.
- It maintains lower levels of noise and vibration.
- Higher mileage is obtained.
- Emissions are low.
- Fuel consumption is less.

<u>Disadvantages of CRDI</u>
- Many parts involve the complicated design.
- Production cost is high.
- High degree of engine maintenance is required.

## <u>**HYBRID VEHICLES**</u>

- A hybrid vehicle combines any two power (energy) sources.
- Hybrid vehicle technology is a combination of an internal combustion engine and an electric battery-operated motor.
- Since power can come from both the battery and the engine, acceleration is faster and the vehicle is efficient.
- These two power sources may be paired in series, meaning that the gas engine charges the batteries of an electric motor that powers the car, or in parallel, with both mechanisms driving the car directly.

**Advantages of hybrid vehicle technology:**
- Fuel consumption is less due to electric batteries.
- Less emission of carbon dioxide makes it eco-friendly.
- Gives better mileage than a conventional engine vehicle, thus is cost effective.
- Less dependence on fossil fuels.

<!-- page 25 | REFRIGERATION -->

# REFRIGERATION

- Refrigeration is the process of providing and maintaining temperature of the region below that of its surrounding atmosphere. Refrigeration deals with the transfer of heat from a lower temperature region to a higher temperature region.

- In other words, the refrigeration means a continuous extraction of heat from a space whose temperature is below the temperature of its surroundings.

- The system maintained at the lower temperature is known as **refrigerated system** and the equipment used to maintain this lower temperature is known as **refrigerator**. The region which is maintained at a temperature lower than its surroundings is called **refrigerated space**.

### Applications of Refrigeration System:

- Preservation and transportation of food products.
- Preservation and transportation of medicines.
- Air conditioning purpose.
- Used for making ice and ice products.
- Used for low temperature research applications.

### Unit of Refrigeration

- The standard unit of refrigeration is **ton of refrigeration (TR)**.

- Ton of refrigeration is defined as the quantity of heat required to be removed to produce one ton (1000kg) of ice within 24 hours when the initial condition of water is 0°C.

- **One Ton of refrigeration = 3.5 kW = 3.5 kJ/s = 210 kJ/min.**

<!-- page 26 | REVERSED CARNOT CYCLE -->

## REVERSED CARNOT CYCLE

- Reversed Carnot cycle (Carnot refrigeration cycle) is an ideal cycle for refrigerator.
- A heat engine working on Carnot cycle has the highest efficiency. Similarly, a refrigerator working on the reversed Carnot cycle has the maximum coefficient of performance.
- The p-v diagram and T-s diagram of reversed Carnot cycle is given below.

![p-v and T-s diagrams for a Reversed Carnot Cycle](/assets/notes/me/s1/ime-ice/module-1/reversed-carnot-pv-ts.svg)

- The four processes in the Reversed Carnot cycle (Carnot refrigeration cycle) are:
  - 1-2: Isentropic Compression
  - 2-3: Constant Temperature Heat Rejection
  - 3-4: Isentropic Expansion
  - 4-1: Constant Temperature Heat addition

- **Isentropic Compression (1-2):** The air is compressed isentropically (i.e. at constant entropy) from the state 1 to state 2. Here, the system is thermally insulated.

- **Constant Temperature Heat Rejection (2-3):** Heat rejection take place under constant temperature, from the state 2 to state 3.

- **Isentropic Expansion (3-4):** The air is expanded isentropically (i.e. at constant entropy) from the state 3 to state 4. Here, the system is thermally insulated.

- **Constant Temperature Heat addition (4-1):** Heat addition take place under constant temperature, from the state 4 to state 1.

### Coefficient of performance (COP) of Carnot refrigerator

- Coefficient of performance (COP) of refrigerator is given by the expression

$$\begin{aligned}
\text{COP}_{\text{Carnot R}} &= \left( \frac{\text{Heat absorbed}}{\text{Heat rejected} - \text{Heat absorbed}} \right) \\
&= \left( \frac{Q_A}{Q_R - Q_A} \right) = \left( \frac{T_{\text{max}}}{T_{\text{max}} - T_{\text{min}}} \right)
\end{aligned}$$

![Block diagram of a Refrigerator](/assets/notes/me/s1/ime-ice/module-1/refrigerator-block-diagram.svg)

<!-- page 27 | VAPOUR COMPRESSION REFRIGERATION SYSTEM -->

# VAPOUR COMPRESSION REFRIGERATION SYSTEM

- The vapour compression refrigeration system works on the vapour compression cycle.
- In a vapour compression refrigerator, the working fluid is a refrigerant.
- In this system, a refrigerant is used which alternately evaporates and condenses.
- During the evaporation process, the refrigerant absorbs heat and gets converted from liquid to vapour.
- During the condensation process, the refrigerant rejects heat and gets condensed from vapour to liquid.
- In this system the refrigerant does not leave the system, but is circulated throughout the system.

- The schematic diagram of vapour compression refrigeration system is shown in figure.

![Schematic diagram of Vapour Compression Refrigeration System](/assets/notes/me/s1/ime-ice/module-1/vapour-compression-schematic.svg)

- It consists of following four essential units.
  - Compressor
  - Condenser
  - Expansion device
  - Evaporator

**Compressor:** It draws the low-temperature low-pressure vapour refrigerant from the evaporator and compresses it to a high-pressure high-temperature vapour refrigerant.

**Condenser:** It condenses the high-pressure high-temperature vapour refrigerant from the compressor and convert it to a high-pressure high-temperature liquid refrigerant.

<!-- page 28 | Page 28 -->

**Expansion Valve:** It draws the high-pressure high-temperature liquid refrigerant from the condenser and convert it to a low-pressure low-temperature liquid refrigerant. It also regulates the flow of liquid refrigerant to the evaporator.

**Evaporator:** To evaporate the low-pressure low-temperature liquid refrigerant to low-temperature low-pressure vapour refrigerant by absorbing the heat from the cold refrigerated space.

<u>**p-h diagram and T-s diagram of vapour compression cycle**</u>

The pressure -enthalpy (p-h) and temperature -entropy (T-s) diagrams of the vapour compression cycle is given below.

![T-s diagram and p-h diagram of vapour compression cycle](/assets/notes/me/s1/ime-ice/module-1/vapour-compression-ts-ph.svg)

<u>This cycle consists of four processes</u>

- **Process 1-2: Isentropic Compression**
  - The refrigerant leaving the evaporator enters a compressor, where it is compressed isentropically to higher pressure and temperature.
- **Process 2-3: Constant Pressure Heat Rejection**
  - The high pressure, high temperature refrigerant, then enters a condenser where it is condensed at constant pressure.
- **Process 3-4: Isenthalpic Expansion**
  - The high-pressure refrigerant is then expanded Isenthalpically in an expansion device to lower pressure and temperature.
- **Process 4-1: Constant Pressure Heat addition**
  - The low temperature refrigerant is then passed through the evaporator coils where it absorbs latent heat from the space to be cooled.

<!-- page 29 | AIR CONDITIONING -->

## AIR CONDITIONING

- The air conditioning deals with the behavior and the conditioning of moist air.
- Air conditioning refers to the simultaneous control of temperature, humidity, cleanliness and air motion within a confined region or space.
- The properties of moist air in connection with air conditioning are called psychrometric properties.

### PSYCHROMETRIC PROPERTIES

**Dry Air**
- The dry air is a mixture of gases such as nitrogen, oxygen, carbon dioxide, hydrogen, helium etc.

**Moist air**
- It is a mixture of dry air and water vapour.

**Saturated air**
- It is a mixture of dry air and water vapour, when the air contains the maximum amount of water vapour into it.

**Humidity**
- It is the mass of water vapour present in 1 kg of dry air.
- It is also called **specific humidity**.

**Relative humidity**
- It is the ratio of actual mass of water vapour in a given volume of moist air to the mass of water vapour in the same volume of saturated air.

**Dry bulb temperature**
- It is the temperature of air recorded by a thermometer, when it is not affected by the moisture present in the air.
- Such a thermometer is called dry bulb thermometer.

**Wet bulb temperature**
- It is the temperature of air recorded by a thermometer, when its bulb is surrounded by a wet cloth exposed to the air.
- Such a thermometer is called wet bulb thermometer.

**Dew Point Temperature**
- It is the temperature of air recorded by a thermometer, when the moisture present in it begins to condense.

<!-- page 30 | PSYCHROMETRIC PROCESSES -->

## PSYCHROMETRIC PROCESSES

Various psychrometric or air-conditioning processes are shown in psychrometric chart are shown below.

![Psychrometric processes chart](/assets/notes/me/s1/ime-ice/module-1/psychrometric-processes.svg)

### Psychrometric Processes

1. Sensible Heating
2. Sensible Cooling
3. Humidification
4. Dehumidification
5. Heating and Humidification
6. Cooling and Dehumidification
7. Cooling and Humidification
8. Heating and Dehumidification

### COOLING & DEHUMIDIFICATION

- The process of sensibly cooling the air while simultaneously removing moisture from it is referred to as the cooling and dehumidification process.
- In other words, it is the process of decreasing both dry bulb temperature and specific humidity of air.
- In such a process the humidity of air decreases and the dry bulb temperature of air also decreases.
- Cooling can be attained by passing the air over evaporator coils of a refrigerating system and the dehumidification can be accomplished using vapour absorbents.
- Cooling and dehumidification process is used in summer A/C system.
- The cooling and dehumidification set-up is shown below:

![Cooling and dehumidification set-up diagram](/assets/notes/me/s1/ime-ice/module-1/cooling-dehumidification-setup.svg)

![Psychrometric representation of cooling and dehumidification](/assets/notes/me/s1/ime-ice/module-1/psychrometric-cooling-dehumidification.svg)

<!-- page 31 | LAYOUT OF UNIT AND CENTRAL AIR CONDITIONERS -->

## **LAYOUT OF UNIT AND CENTRAL AIR CONDITIONERS**

Two common types of air conditioners are unit air conditioner and the central air conditioner.

### **UNIT AIR CONDITIONER**

The layout of a unit air conditioner is given below.

![Layout diagram of a unit air conditioner showing compressor, evaporator, condenser, and expansion valve](/assets/notes/me/s1/ime-ice/module-1/unit-air-conditioner-layout.svg)

- A window air conditioner which is a unit air conditioner consists of four main parts namely, compressor, condenser, expansion valve and evaporator.
- The unit is divided into two parts;
  1. The indoor part
  2. The outdoor part.
- Window air conditioner is mounted on windows or walls, such that the indoor part is inside the room and the outdoor part is outside the room.
- The indoor unit mainly consists of evaporator and an expansion valve.
- The outdoor part consists of a compressor and condenser.
- The evaporator side is located facing the room for cooling and the condenser side outdoor for heat rejection.

<!-- page 32 | Page 32 -->


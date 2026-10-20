# GXEST104 · Introduction to Electrical and Electronics Engineering

KTU 2024 Scheme · CSE · Semester 1. Questions are grouped by module, year and question number. Worked answers are placed directly after each item; use the PDFs for original circuit diagrams.

**Original papers:** [December 2024 PDF](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/question-papers/assets/GXEST104_2024.pdf) · [December 2025 PDF](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/question-papers/assets/GXEST104_2025.pdf) · [KTU Notes archive](https://ktunotes.in/ktu-introduction-to-electrical-electronics-engineering-question-papers-2024-scheme/)

**Paper total:** 60 marks. Marks beside each listed question or part are copied from the linked original paper.

<!-- page 1 | Module 1 -->

## Module 1 · DC circuits and magnetic circuits

### 2024 · Q5 (circuit in Figure 2) · 6 marks

**Question.** Find the equivalent resistance between A and B in the Figure 2 network.

**Solution.** The transcription preserves the resistor labels but not enough node connections to determine the bridge topology uniquely. Redraw the original figure, combine any unbridged series/parallel arms first, then use a Δ–Y conversion or nodal test-source method for the remaining bridge. With a 1 V test source across A–B, solve node voltages and compute $R_{eq}=1/I_{in}$. Do not treat a bridge as series/parallel unless its junctions actually match.

### 2024 · Q6(a) · 3 marks

**Question.** Derive the coupling coefficient for coils with self-inductances $L_1,L_2$ and mutual inductance $M$.

**Solution.** If fluxes linking coil 1 and coil 2 are $\Phi_1,\Phi_2$, the fractions linking the other coil define $k$. From $M=N_2\Phi_{12}/I_1$ and $L_1=N_1\Phi_1/I_1$ (similarly for coil 2), $M^2\le L_1L_2$. Thus $\displaystyle k=\frac{M}{\sqrt{L_1L_2}}$, with $0\le k\le1$ for the magnitude.

### 2024 · Q6(b) · 6 marks

**Question.** Use nodal analysis to find $V_{AB},V_{BC},V_{CA}$ in Figure 3, taking D as reference.

**Solution.** The source polarities and exact resistor/source junctions are required for unique numerical node voltages; the text-only figure description is insufficient. Set $V_D=0$, write KCL at independent nodes A, B and C, and model each voltage source with its indicated polarity and series resistance. Solve for $V_A,V_B,V_C$, then calculate $V_{AB}=V_A-V_B$, $V_{BC}=V_B-V_C$, $V_{CA}=V_C-V_A$. Verify their sum is zero.

### 2025 · Q6(b) · 3 marks

**Question.** Define magnetic reluctance and list the factors affecting it.

**Solution.** Reluctance opposes magnetic flux, analogously to electrical resistance. For a uniform magnetic path, $\mathcal R=l/(\mu A)$, so it increases with path length $l$ and decreases with cross-sectional area $A$ and permeability $\mu$; air gaps strongly raise reluctance.

### 2025 · Q6(a) · 6 marks

**Question.** Find the equivalent resistance between A and B in Figure 2.

**Solution.** Use the exact connectivity in the PDF. Start at the outer A–B nodes; reduce clear series/parallel branches and then use Δ–Y or a 1 V nodal test source for any bridge. The extracted figure description does not specify every junction unambiguously, so a numeric value here would be a guess.

<!-- page 2 | Module 2 -->

## Module 2 · AC circuits and three-phase systems

### 2024 · Q7(a) · 4 marks

**Question.** Derive RMS value, average value, form factor and peak factor for $v=V_m\sin\omega t$.

**Solution.** Over a cycle, $V_{rms}=\sqrt{(1/2\pi)\int_0^{2\pi}V_m^2\sin^2\theta\,d\theta}=V_m/\sqrt2$. The full-cycle average is zero; the rectified average is $V_{avg}=V_m/\pi$ (half-cycle average $2V_m/\pi$). Thus the sine-wave form factor using rectified average is $V_{rms}/V_{avg}=\pi/(2\sqrt2)=1.11$ and peak factor is $V_m/V_{rms}=\sqrt2$.

### 2024 · Q7(b) · 5 marks

**Question.** A series RLC circuit has $R=5\,\Omega$, $L=0.1$ H, $C=5$ mF, $f=10$ Hz, and supply 100 V rms. Find impedance, power factor, current and powers.

**Solution.** $X_L=2\pi fL=6.283\,\Omega$, $X_C=1/(2\pi fC)=3.183\,\Omega$. So $Z=5+j3.100\,\Omega$, $|Z|=5.883\,\Omega$, and $I=100/5.883=17.00$ A. Power factor $=R/|Z|=0.850$ lagging. $P=I^2R\approx1.445$ kW; $Q=I^2(X_L-X_C)\approx0.896$ kvar inductive; $S=VI\approx1.700$ kVA.

### 2024 · Q8(a) · 4 marks

**Question.** Show that an ideal inductor consumes zero average power for sinusoidal input voltage.

**Solution.** In an ideal inductor, current lags voltage by $90°$. Average real power is $P=VI\cos\phi=VI\cos90°=0$; energy is stored in and returned from the magnetic field each cycle.

### 2024 · Q8(b) · 5 marks

**Question.** A balanced three-phase 100 V supply feeds a balanced load of $R=3\,\Omega$, $X_L=4\,\Omega$ per phase. Find supply current for star and delta connections.

**Solution.** $|Z_{ph}|=5\,\Omega$. Assuming 100 V is line-to-line: star has $V_{ph}=100/\sqrt3$, hence $I_L=I_{ph}=100/(5\sqrt3)=11.55$ A. Delta has $V_{ph}=100$ V, $I_{ph}=20$ A, and $I_L=\sqrt3 I_{ph}=34.64$ A. If the paper means 100 V phase voltage, the values change; confirm the convention in the original.

### 2025 · Q7(a) · 6 marks

**Question.** Define self-inductance and derive its expression.

**Solution.** Self-inductance is flux linkage per current: $L=N\Phi/I$. For a long uniform solenoid with $N$ turns, length $l$, area $A$, and permeability $\mu$, $B=\mu NI/l$, $\Phi=BA$, hence $L=N\Phi/I=\mu N^2A/l$.

### 2025 · Q7(b) · 3 marks

**Question.** A series circuit has $R=12\,\Omega$, $X_L=25\,\Omega$, $X_C=41\,\Omega$, and 230 V rms. Find impedance, current and power.

**Solution.** $Z=R+j(X_L-X_C)=12-j16\,\Omega$, $|Z|=20\,\Omega$. Current is $230/20=11.5$ A and leads the supply. $P=I^2R=1.587$ kW; power factor is $12/20=0.6$ leading.

### 2025 · Q8(a) · 3 marks

**Question.** A 400 V, 50 Hz three-phase supply feeds a delta load with each phase $R=25\,\Omega$, $L=0.15$ H, $C=120\,\mu$F in series. Find impedance, PF and powers/currents.

**Solution.** $X_L=2\pi(50)(0.15)=47.12\,\Omega$, $X_C=1/[2\pi(50)(120\times10^{-6})]=26.53\,\Omega$. Thus $Z_{ph}=25+j20.60\,\Omega$, $|Z|=32.39\,\Omega$, PF $=25/32.39=0.772$ lagging. For delta, $V_{ph}=V_L=400$ V, $I_{ph}=12.35$ A, $I_L=\sqrt3I_{ph}=21.39$ A. Total $S=\sqrt3V_LI_L\approx14.82$ kVA, $P=S\,PF\approx11.44$ kW, $Q\approx9.42$ kvar.

### 2025 · Q8(b) · 6 marks

**Question.** Give three advantages of three-phase over single-phase systems.

**Solution.** For balanced loads, instantaneous power is nearly constant; three-phase motors are self-starting and generally provide smoother torque; and three-phase transmission delivers more power for a given conductor material. The exact comparison depends on voltage, load and conductor assumptions.

<!-- page 3 | Module 3 -->

## Module 3 · Electronic devices and amplifiers

### 2024 · Q1 · 3 marks

**Question.** Distinguish active and passive components with examples.

**Solution.** Active components can control current or provide power gain when correctly biased (transistors, op-amps). Passive components do not provide power gain (resistors, capacitors, inductors). A diode controls current direction but is not a power-gain element.

### 2024 · Q2 · 3 marks

**Question.** Sketch and explain a PN diode V–I characteristic.

**Solution.** Forward current is small below the knee and rises rapidly after it (roughly 0.7 V for silicon). Reverse current is small until breakdown, where it rises sharply. Label forward/reverse axes, knee and breakdown voltage.

### 2024 · Q5(a) · 6 marks

**Question.** Explain an RC-coupled amplifier.

**Solution.** A common-emitter transistor stage amplifies the input; a coupling capacitor passes AC to the next stage while blocking DC, and an emitter-bypass capacitor increases AC gain while retaining DC bias stability. The collector resistor converts collector-current variation into output voltage. Interstage coupling capacitors isolate the bias of adjacent stages. The midband gain is approximately flat; low-frequency capacitive reactance and high-frequency transistor/parasitic capacitances reduce gain.

### 2024 · Q5(b) · 3 marks

**Question.** For $\alpha=0.99$ and $I_C=20$ mA, find base and emitter currents.

**Solution.** $\alpha=I_C/I_E$, so $I_E=20/0.99=20.202$ mA. $I_B=I_E-I_C=0.202$ mA.

### 2024 · Q6 · 9 marks

**Question.** Explain a bridge full-wave rectifier and give average, rms, ripple and efficiency equations.

**Solution.** Four diodes form a bridge; two conduct on each half-cycle so current through the load has the same direction. For ideal sinusoidal output, $I_{dc}=2I_m/\pi$, $I_{rms}=I_m/\sqrt2$, ripple factor $r=\sqrt{(I_{rms}/I_{dc})^2-1}=0.482$, and maximum rectification efficiency $\eta=8/\pi^2=81.2$%. Two conducting diode drops reduce practical output.

### 2025 · Q1 (Part 2) · 3 marks

**Question.** Draw and explain a DC power-supply block diagram.

**Solution.** `AC mains → transformer → rectifier → filter → voltage regulator → load`. The transformer sets/isolates voltage, rectifier converts AC to pulsating DC, filter reduces ripple, and regulator stabilizes the output.

### 2025 · Q2 (Part 2) · 3 marks

**Question.** Differentiate Zener and avalanche breakdown.

**Solution.** Zener breakdown occurs in a heavily doped, thin depletion region at relatively low reverse voltage by strong-field tunnelling; its temperature coefficient is usually negative. Avalanche breakdown occurs in a wider, lightly doped region at higher voltage by impact ionization; its temperature coefficient is usually positive. Both can be nondestructive if current is limited.

### 2025 · Q5(a) (Part 2) · 7 marks

**Question.** Explain an n-channel enhancement MOSFET.

**Solution.** It has n+ source/drain diffusions in a p-type body, insulated gate over a thin oxide, and body contact. At $V_{GS}=0$ there is no inversion channel. A positive gate voltage attracts electrons; above threshold $V_T$ an n-channel forms. With $V_{DS}$, electrons flow source-to-drain (conventional current drain-to-source); gate current is ideally negligible. Draw the cross-section and label gate oxide, channel, source, drain and body.

### 2025 · Q5(b) (Part 2) · 2 marks

**Question.** Relate common-base current gain $\alpha$ and common-emitter gain $\beta$.

**Solution.** From $I_E=I_C+I_B$, $\alpha=I_C/I_E=\beta/(1+\beta)$. Therefore $\beta=\alpha/(1-\alpha)$.

### 2025 · Q6(a) (Part 2) · 5 marks

**Question.** Sketch the frequency response of an RC-coupled amplifier and explain low/high-frequency gain reduction.

**Solution.** Plot gain versus log frequency: rising low-frequency region, flat midband and falling high-frequency region. At low frequency, coupling and bypass capacitor reactances are large, reducing signal transfer/emitter bypass. At high frequency, transistor junction capacitances, Miller effect and wiring capacitance shunt signal and reduce gain.

### 2025 · Q6(b) (Part 2) · 4 marks

**Question.** Explain a forward-biased PN diode.

**Solution.** Connect p to positive and n to negative. The applied field lowers the built-in barrier and narrows the depletion zone; majority carriers cross and recombine, so current rises approximately exponentially with voltage.

<!-- page 4 | Module 4 -->

## Module 4 · Communication, instrumentation and display systems

### 2024 · Q3 (Part 2) · 3 marks

**Question.** Explain the blocks of a fiber-optic communication system.

**Solution.** `Information source → encoder/driver → LED or laser → optical fiber/channel → photodetector → amplifier/decoder → destination`. The transmitter converts information to modulated light; the fiber guides it; the receiver converts received light back to an electrical signal.

### 2024 · Q4 (Part 2) · 3 marks

**Question.** Draw the function-generator block diagram.

**Solution.** A typical diagram is `frequency-control/timing circuit → integrator → triangle output`, with the integrator also feeding a Schmitt trigger/comparator that creates a square wave; a sine shaper converts the triangle to a sine output. Include output buffers/attenuators and amplitude control. Architectures vary by instrument.

### 2024 · Q7(a) (Part 2) · 6 marks

**Question.** Explain amplitude and frequency modulation.

**Solution.** AM varies carrier amplitude in proportion to the message while carrier frequency stays fixed: $s(t)=A_c[1+m\cos(\omega_mt)]\cos(\omega_ct)$. FM varies instantaneous carrier frequency with the message while amplitude stays constant. Sketch AM with changing envelope and FM with changing cycle spacing.

### 2024 · Q7(b) (Part 2) · 3 marks

**Question.** What are CRO Lissajous patterns? Sketch equal-frequency sine inputs with 90° phase difference.

**Solution.** Lissajous figures appear when two signals drive the horizontal and vertical plates in X–Y mode. For equal frequencies and 90° phase difference, $x=A\sin\omega t$, $y=B\cos\omega t$, giving $x^2/A^2+y^2/B^2=1$: an ellipse, a circle when $A=B$.

### 2024 · Q8(a) (Part 2) · 6 marks

**Question.** Explain the principle of GSM.

**Solution.** A mobile station communicates by radio with a base transceiver station. The BSC manages radio resources and handover; the MSC switches calls and connects to other networks. HLR/VLR store subscriber/location data; AuC authenticates users and EIR checks equipment. Voice/data are digitized, channel-coded, interleaved and modulated over assigned time/frequency slots.

### 2024 · Q8(b) (Part 2) · 3 marks

**Question.** Draw a digital multimeter block diagram.

**Solution.** `input terminals → protection → function/range selector → signal conditioning (divider/shunt/AC converter) → A/D converter → digital display`. Add reference/clock/control circuitry. Different ranges route the input through appropriate conditioning.

### 2025 · Q3 (Part 2) · 3 marks

**Question.** Explain a basic communication-system block diagram.

**Solution.** `information source → input transducer → transmitter/encoder/modulator → channel (+ noise) → receiver/demodulator/decoder → output transducer → destination`. The transmitter adapts the signal to the channel; the receiver recovers the message.

### 2025 · Q4 (Part 2) · 3 marks

**Question.** Why is modulation needed?

**Solution.** Modulation shifts a baseband signal to a carrier frequency, enabling practical antenna size, longer-range radiation, frequency-division sharing, and improved channel/noise management. The modulation type and bandwidth determine tradeoffs.

### 2025 · Q7(a) (Part 2) · 6 marks

**Question.** Explain a superheterodyne FM receiver.

**Solution.** `antenna → RF amplifier → mixer + local oscillator → fixed IF filter/amplifier → limiter → FM discriminator → de-emphasis/audio amplifier`. Mixing converts the tuned station to a constant intermediate frequency; the discriminator recovers the message from frequency deviation.

### 2025 · Q7(b) (Part 2) · 3 marks

**Question.** State advantages of optical communication.

**Solution.** High bandwidth, low attenuation over long distances, immunity to electromagnetic interference, electrical isolation, small/light cable and difficult signal tapping. Installation cost, bends, connectors and specialized equipment remain practical considerations.

### 2025 · Q8(a) (Part 2) · 3 marks

**Question.** List essential CRO components.

**Solution.** Cathode-ray tube (electron gun, deflection plates, fluorescent screen), vertical amplifier, time-base/sweep generator, trigger/synchronization circuit, horizontal amplifier, power supplies and input controls/probes.

### 2025 · Q8(b) (Part 2) · 6 marks

**Question.** Explain an electronic instrumentation system.

**Solution.** `measurand → sensor/transducer → signal conditioning → transmission/conversion → display/recording or controller`. The sensor converts the physical quantity to an electrical signal; conditioning amplifies, filters, linearizes or isolates it; the output stage displays, records or acts on the measurement. Include reference/calibration and power where appropriate.

> **Source note:** The first page of each paper was marked non-content during transcription, so some early electrical questions are unavailable in this text. Circuit questions whose node connectivity or polarity is only visible in the PDF are left as method answers rather than guessed numerical results.

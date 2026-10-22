<!-- page 1 | Communication systems and the course map -->

## Modern Electronics: Communication, Instrumentation, and Applications

This module introduces communication-system blocks, analog modulation, wired and wireless channels, fiber-optic links, mobile-network generations, electronic instruments, and selected Internet of Things (IoT) applications. The communication topics are qualitative; modulation derivations are not required.

### Basic communication system

A communication system carries information from a source to a destination. A typical chain is:

```text
Information source → input transducer → transmitter → communication channel → receiver → output transducer → destination
                                                     ↑
                                                   noise
```

The transmitter prepares the signal for the channel; the receiver selects and recovers the message. A channel may be a wire, free space, or an optical fiber. Noise is an unwanted disturbance added during transmission.

For an exam block-diagram answer, explain the chain in signal order: the **information source** creates the message; an **input transducer** converts a sound, image, or other physical message into an electrical signal; the **transmitter** encodes or modulates it and raises it to a suitable level; the **channel** carries it; the **receiver** selects, amplifies, and demodulates it; and the **output transducer** converts the recovered signal into a form the destination can use. Noise enters through the channel and may be reduced by filtering or other receiver processing.

### Amplitude and frequency modulation

A high-frequency carrier is varied to carry a lower-frequency message.

| Method | Carrier quantity varied by the message | Carrier quantity ideally held constant |
|---|---|---|
| **Amplitude modulation (AM)** | Amplitude | Frequency |
| **Frequency modulation (FM)** | Frequency | Amplitude |

AM has a simpler receiver but is more affected by amplitude noise. FM is less sensitive to amplitude noise, but uses more bandwidth and requires a different detector. The syllabus requires the concepts and waveforms, not mathematical derivations.

```text
Message:       ____/‾‾‾\____          ____/‾‾‾\____
AM carrier:    /\/\/\/\/\/\/\        /\/\/\/\/\/\/\
Envelope:     /              \______/              \

FM carrier:   /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
              wide spacing     tight spacing    wide spacing
              (lower f_i)      (higher f_i)     (lower f_i)
```

In AM, the upper and lower envelopes follow the message, while carrier-cycle spacing stays fixed. For a single-tone message, the conventional expression is $s_{AM}(t)=A_c[1+m_a\cos(2\pi f_m t)]\cos(2\pi f_c t)$, where $m_a=A_m/A_c$ is the modulation index. For undistorted conventional AM, keep $0\le m_a\le1$; overmodulation distorts the envelope. Its approximate bandwidth is $2f_m$.

In FM, carrier amplitude stays approximately fixed while instantaneous frequency varies around $f_c$. A single-tone form is $s_{FM}(t)=A_c\cos[2\pi f_ct+\beta\sin(2\pi f_mt)]$, where $\beta=\Delta f/f_m$ is the modulation index and $\Delta f$ is peak frequency deviation. These expressions identify the quantities being varied; derivations are not required by the syllabus.

| Exam point | AM | FM |
|---|---|---|
| Quantity varied | Carrier amplitude | Instantaneous carrier frequency |
| Carrier amplitude | Changes with the message | Ideally constant |
| Noise response | Amplitude noise directly affects the envelope | Limiting can remove amplitude noise before demodulation |
| Bandwidth | Approximately $2f_m$ for a single-tone message | Depends on peak deviation and message frequency |
| Demodulator | Envelope detector for conventional AM | Frequency discriminator or another FM detector |

### Superheterodyne radio receiver

A superheterodyne receiver converts a selected radio-frequency signal to a fixed intermediate frequency (IF), where amplification and filtering are easier.

```text
Antenna → RF tuner/amplifier → mixer ← local oscillator
                                      ↓
          loudspeaker ← audio amplifier ← detector/demodulator ← IF amplifier/filter
```

The tuner selects the desired station. The mixer combines it with the local-oscillator signal; the selected difference frequency is $f_{IF}=|f_{LO}-f_{RF}|$. The local oscillator tracks the tuned station so the IF remains fixed. The IF stage provides most of the receiver's gain and selectivity. The detector recovers the audio message: an envelope detector is commonly used for AM, while an FM discriminator or detector is used for FM. The audio amplifier drives the output transducer.

#### AM superheterodyne receiver

```text
Antenna → RF tuned amplifier → Mixer → IF filter/amplifier → Envelope detector → Audio amplifier → Speaker
                                  ↑                                  │
                           Local oscillator                         └── AGC feedback to RF/IF gain stages
```

The envelope detector follows the AM carrier's envelope to recover the message. Automatic gain control (AGC) uses a slowly varying detector output to reduce RF/IF gain when a strong station is received, helping keep the output level more uniform.

#### FM superheterodyne receiver

```text
Antenna → RF tuned amplifier → Mixer → IF filter/amplifier → Limiter → FM discriminator → De-emphasis → Audio amplifier → Speaker
                                  ↑
                           Local oscillator
```

The limiter removes unwanted amplitude variations before frequency demodulation. The discriminator converts the FM frequency deviation back to the message signal. De-emphasis restores the audio frequency balance after the matching transmitter pre-emphasis. The AM envelope detector and FM discriminator are different demodulators; do not interchange them.

<!-- page 2 | Wired and wireless communication -->

## Wired and Wireless Communication

In **wired communication**, a guided medium such as twisted-pair cable, coaxial cable, or optical fiber confines the signal. It can provide predictable links and physical security, but installation requires a path for the cable.

In **wireless communication**, an antenna radiates and receives electromagnetic waves through free space. It supports mobility and broad-area access, but propagation loss, interference, obstacles, and shared spectrum affect performance.

| Comparison | Guided (wired) link | Wireless link |
|---|---|---|
| Medium | Copper cable or optical fiber | Free space, using radio or optical waves |
| Mobility | Endpoint usually tied to the cable route | Supports mobile endpoints within coverage |
| Interference | Shielding and medium choice can limit interference | Susceptible to co-channel interference, fading, and obstacles |
| Installation | Requires cable, connectors, and a physical route | Requires antennas, access points/base stations, and spectrum planning |
| Examples | Ethernet over twisted pair; fiber backbone | Wi-Fi, cellular radio, Bluetooth |

### Fiber-optic communication system

A fiber-optic link converts an electrical message to light, guides the light through an optical fiber, then converts it back to an electrical signal.

```text
Electrical input → driver/modulator → LED or laser → optical fiber → photodetector → receiver/amplifier → electrical output
```

The transmitter drives the LED or laser. The fiber guides the optical signal; connectors, splices, and repeaters may be used along a long link. A photodiode at the receiver converts received light to current, which is amplified and recovered. Optical links offer high bandwidth and are not affected by electromagnetic interference in the same way as copper conductors. Attenuation reduces received optical power, while dispersion spreads pulses in time; link length and data rate therefore influence whether repeaters or optical amplifiers are needed.

### GSM architecture

The Global System for Mobile Communications (GSM) separates the mobile radio access network from its switching and subscriber databases.

```text
Mobile Station (MS) ⇄ BTS ⇄ BSC ── Base Station Subsystem (BSS) ── MSC/GMSC ── other networks
                                      │                                  │
                                      └──────────────────────────────────┤
                                      HLR · VLR · AuC · EIR               OSS
```

- **MS:** handset and SIM used by the subscriber.
- **BTS:** radio equipment that communicates with mobiles in a cell.
- **BSC:** controls a group of BTSs and radio-channel allocation; together BTS and BSC form the **BSS**.
- **MSC/GMSC:** switches calls and connects the mobile network to other networks.
- **HLR/VLR:** hold permanent and currently visited subscriber and location records.
- **AuC/EIR:** support authentication and equipment-identity checks.
- **OSS:** supports operation, maintenance, and network management.

In a simplified mobile-originated call, the **MS** requests a radio channel through its serving **BTS**. The **BSC** assigns and manages radio resources, then the **MSC** routes the call; the **VLR/HLR** provide subscriber and location information, and the **AuC** supports authentication. For a call to another network, the **GMSC** provides the gateway connection. When a subscriber moves, location updates let the network route later calls through the subscriber's current serving area. In an exam diagram, show the MS–BTS–BSC radio path, the MSC/GMSC switching path, and the subscriber databases as support blocks.

### Mobile-network generations

| Generation | Main development | Typical capabilities emphasized in an introductory comparison |
|---|---|---|
| **3G** | Digital mobile broadband beyond voice and basic data | Mobile internet, video calling, and packet data |
| **4G** | All-IP broadband (for example, LTE) | Higher data rates, lower latency than 3G, and multimedia services |
| **5G** | New radio and a flexible core network | Enhanced mobile broadband, low-latency services, and support for many connected devices |
| **6G** | Research and future development beyond 5G | Candidate goals include integrated sensing, AI-assisted networks, and further improvements in capacity and latency; capabilities remain under development |

Examples often used to distinguish the generations are UMTS/HSPA for 3G, LTE for 4G, and 5G New Radio (NR) for 5G. 3G emphasizes mobile packet data and multimedia; 4G uses an all-IP broadband architecture; 5G adds flexible radio deployments and service classes for broadband, low-latency, and large-scale device connectivity. 6G remains a research and standardization direction rather than a deployed commercial generation in this syllabus overview.

These labels describe broad technology generations; actual performance depends on the deployment, spectrum, device, and network configuration.

<!-- page 3 | Electronic instruments -->

## Electronic Instrumentation

An electronic instrument converts a physical quantity into a readable measurement. A general measurement chain is:

```text
Measurand → sensor/transducer → signal conditioning → conversion/processing → display or storage
```

The sensor responds to the quantity being measured. Signal conditioning may amplify, filter, linearize, or isolate the signal; a converter or processor then scales the result into useful units. The output stage displays, records, or transmits the measurement. Calibration, range, resolution, accuracy, response time, and loading effects matter when interpreting a reading. For example, a high-resistance voltmeter input reduces loading on the circuit under measurement.

### Digital multimeter (DMM)

A DMM measures quantities such as voltage, current, and resistance. For voltage, a divider scales the input; for current, a shunt converts current to a small voltage; for resistance, the meter applies a known test current and measures the resulting voltage. Input protection and range selection condition the signal, and an analog-to-digital converter (ADC) produces a digital value for the display. Select the correct function and range, observe the meter's input terminals, and connect a current range in series with the circuit. Never place a current input directly across a voltage source.

```text
Input terminals → protection/range selection → signal conditioning → ADC → display
```

### Function generator

A function generator produces test waveforms such as sine, square, and triangular waves. A waveform source or oscillator establishes shape and frequency; amplitude and offset controls set the output level, and an output stage drives the load. A sine wave is useful for frequency-response measurements, a square wave reveals transient response, and a triangle wave provides a linearly changing test signal. The specified amplitude may depend on whether the output is terminated in the stated load.

```text
Waveform source/oscillator → shape and frequency controls → amplitude/offset → output amplifier → output
```

Check the selected waveform, frequency, amplitude, DC offset, and load before connecting it to a circuit.

### Cathode-ray oscilloscope (CRO)

A CRO displays voltage against time. The vertical system conditions the input signal; the time-base and horizontal system sweep the trace across the screen; the trigger stabilizes a repeating waveform. The display lets an observer compare amplitude, period, phase, and waveform shape. With vertical scale $S_V$ in volts per division and a measured peak-to-peak height of $n_V$ divisions, $V_{pp}=n_VS_V$ (adjust for probe attenuation). With a time-base scale $S_T$ in seconds per division and $n_T$ divisions per cycle, $T=n_TS_T$ and $f=1/T$. A two-channel time delay $\Delta t$ gives phase difference $\phi=360^\circ\Delta t/T$ for same-frequency sinusoids.

```text
Input → attenuator/vertical amplifier → vertical deflection
Trigger circuit → time-base generator → horizontal amplifier → horizontal deflection
```

In **X-Y mode**, one periodic signal drives the horizontal input and another drives the vertical input. The resulting Lissajous pattern can compare their frequencies and phase. For a stable pattern, if $N_h$ and $N_v$ are the numbers of horizontal and vertical tangencies to the bounding box, respectively, then $f_y/f_x=N_h/N_v$ (with $x$ driven by $f_x$ and $y$ by $f_y$). Use the instrument's axis convention when counting. For equal frequencies, the trace is a straight line or ellipse; its intercept and direction of travel indicate the phase difference. If the ellipse is centered and $y_0$ is its vertical intercept at $x=0$, then $|\sin\phi|=|y_0|/B$, where $B$ is the peak vertical amplitude; the direction of rotation resolves the sign/quadrant.

```text
Equal frequencies, same phase      90° phase difference       180° phase difference
          y                              y                            y
          ↑                              ↑                            ↑
          │       /                      │      .---.                 │      /
          │     /                        │    /       \               │    /
          │   /                          │    \       /               │  /
          │ /                            │      '---'                 │/
          └────────→ x                   └────────→ x                 └────────→ x
           rising line                  circle or ellipse                falling line
```

For equal amplitudes, the 90° pattern is a circle; unequal amplitudes produce an ellipse. These shapes assume stable sinusoidal inputs of equal frequency.

<!-- page 4 | IoT applications -->

## IoT Applications: Case Studies

An Internet of Things system connects sensors and actuators to a local controller or network service. A simple architecture is:

```text
Sensors/actuators → device controller → network/gateway → data service → user interface
```

The design must consider power, connectivity, data privacy, security, and what happens when the network is unavailable.

For each case study, identify the **measurand**, sensor, controller or gateway, communication/data service, decision rule, and actuator or user alert. Then state one practical limitation and one safeguard; this shows both the IoT block flow and how the system behaves in use.

### Smart home

**Case:** A temperature sensor reports room conditions to a controller. If the measured temperature crosses a configured threshold, the controller signals a relay to switch heating or cooling. Door sensors, lighting, and energy meters can send status to a local hub or user interface. The design needs authenticated access, protected device updates, and a local override so essential controls still work during a network outage.

### Healthcare

**Case:** A wearable or bedside sensor measures a quantity such as pulse rate and sends time-stamped readings to a nearby monitor or authorized clinical system. A threshold can flag a reading for review, but a sensor reading alone is not a diagnosis. The system must handle sensor detachment, poor contact, connectivity loss, false alarms, and privacy of health data; alerts should be reviewed by qualified staff.

### Agriculture

**Case:** Soil-moisture sensors and a weather or temperature input report field conditions to a controller. When moisture falls below a chosen threshold, the controller can operate a pump or valve; readings and water use can be shown to a farmer remotely. Sensor placement, calibration, power and network availability, water limits, and a safe manual override determine whether the system is useful.

These are case studies of sensing, communication, and control; they do not replace professional medical or agricultural judgment.

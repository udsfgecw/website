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

### Amplitude and frequency modulation

A high-frequency carrier is varied to carry a lower-frequency message.

| Method | Carrier quantity varied by the message | Carrier quantity ideally held constant |
|---|---|---|
| **Amplitude modulation (AM)** | Amplitude | Frequency |
| **Frequency modulation (FM)** | Frequency | Amplitude |

AM has a simpler receiver but is more affected by amplitude noise. FM is less sensitive to amplitude noise, but uses more bandwidth and requires a different detector. The syllabus requires the concepts and waveforms, not mathematical derivations.

### Superheterodyne radio receiver

A superheterodyne receiver converts a selected radio-frequency signal to a fixed intermediate frequency (IF), where amplification and filtering are easier.

```text
Antenna → RF tuner/amplifier → mixer ← local oscillator
                                      ↓
          loudspeaker ← audio amplifier ← detector/demodulator ← IF amplifier/filter
```

The tuner selects the desired station. The mixer combines it with the local-oscillator signal to produce the IF. The IF stage provides most of the receiver's gain and selectivity. The detector recovers the audio message: an envelope detector is commonly used for AM, while an FM discriminator or detector is used for FM. The audio amplifier drives the output transducer.

<!-- page 2 | Wired and wireless communication -->

## Wired and Wireless Communication

In **wired communication**, a guided medium such as twisted-pair cable, coaxial cable, or optical fiber confines the signal. It can provide predictable links and physical security, but installation requires a path for the cable.

In **wireless communication**, an antenna radiates and receives electromagnetic waves through free space. It supports mobility and broad-area access, but propagation loss, interference, obstacles, and shared spectrum affect performance.

### Fiber-optic communication system

A fiber-optic link converts an electrical message to light, guides the light through an optical fiber, then converts it back to an electrical signal.

```text
Electrical input → driver/modulator → LED or laser → optical fiber → photodetector → receiver/amplifier → electrical output
```

The transmitter drives the LED or laser. The fiber guides the optical signal; connectors, splices, and repeaters may be used along a long link. A photodiode at the receiver converts received light to current, which is amplified and recovered. Optical links offer high bandwidth and are not affected by electromagnetic interference in the same way as copper conductors.

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

### Mobile-network generations

| Generation | Main development | Typical capabilities emphasized in an introductory comparison |
|---|---|---|
| **3G** | Digital mobile broadband beyond voice and basic data | Mobile internet, video calling, and packet data |
| **4G** | All-IP broadband (for example, LTE) | Higher data rates, lower latency than 3G, and multimedia services |
| **5G** | New radio and a flexible core network | Enhanced mobile broadband, low-latency services, and support for many connected devices |
| **6G** | Research and future development beyond 5G | Candidate goals include integrated sensing, AI-assisted networks, and further improvements in capacity and latency; capabilities remain under development |

These labels describe broad technology generations; actual performance depends on the deployment, spectrum, device, and network configuration.

<!-- page 3 | Electronic instruments -->

## Electronic Instrumentation

An electronic instrument converts a physical quantity into a readable measurement. A general measurement chain is:

```text
Measurand → sensor/transducer → signal conditioning → conversion/processing → display or storage
```

The sensor responds to the quantity being measured. Signal conditioning may amplify, filter, or isolate the signal. The final stage presents or stores a value. Calibration, range, resolution, accuracy, and loading effects matter when interpreting a reading.

### Digital multimeter (DMM)

A DMM measures quantities such as voltage, current, and resistance. Its input protection and range-selection stage condition the signal; an analog-to-digital converter (ADC) produces a digital value for the display. Select the correct function and range, observe the meter's input terminals, and connect a current range in series with the circuit. Never place a current input directly across a voltage source.

```text
Input terminals → protection/range selection → signal conditioning → ADC → display
```

### Function generator

A function generator produces test waveforms such as sine, square, and triangular waves. A waveform source or oscillator establishes the shape and frequency; amplitude and offset controls set the output level, and an output stage drives the load.

```text
Waveform source/oscillator → shape and frequency controls → amplitude/offset → output amplifier → output
```

Check the selected waveform, frequency, amplitude, DC offset, and load before connecting it to a circuit.

### Cathode-ray oscilloscope (CRO)

A CRO displays voltage against time. The vertical system conditions the input signal; the time-base and horizontal system sweep the trace across the screen; the trigger stabilizes a repeating waveform. The display lets an observer compare amplitude, period, phase, and waveform shape.

```text
Input → attenuator/vertical amplifier → vertical deflection
Trigger circuit → time-base generator → horizontal amplifier → horizontal deflection
```

In **X-Y mode**, one periodic signal drives the horizontal input and another drives the vertical input. The resulting Lissajous pattern can compare their frequencies and phase. For a stable pattern, the frequency ratio is found by counting the pattern's tangencies to horizontal and vertical reference lines; for equal frequencies, the ellipse's shape gives the phase relationship. Use the instrument's stated axis convention when counting.

<!-- page 4 | IoT applications -->

## IoT Applications: Case Studies

An Internet of Things system connects sensors and actuators to a local controller or network service. A simple architecture is:

```text
Sensors/actuators → device controller → network/gateway → data service → user interface
```

The design must consider power, connectivity, data privacy, security, and what happens when the network is unavailable.

### Smart home

A temperature sensor can report room conditions to a controller that switches heating or cooling. Door sensors, lighting, and energy meters can send status to a local hub or user interface. Authentication and local fallback controls help prevent unauthorized access and preserve basic operation during an outage.

### Healthcare

A wearable or bedside sensor can measure a quantity such as pulse rate and send readings to a nearby monitor or authorized clinical system. Alerts should be reviewed by qualified staff; connectivity loss, sensor error, and privacy of health data must be considered.

### Agriculture

Soil-moisture and temperature sensors can inform irrigation decisions. A controller may operate a pump or valve when readings meet a configured condition. Sensor placement, calibration, water availability, and safe manual override affect whether the system is useful.

These are case studies of sensing, communication, and control; they do not replace professional medical or agricultural judgment.

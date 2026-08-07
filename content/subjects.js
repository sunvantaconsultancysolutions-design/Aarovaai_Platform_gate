const AarovaData = {
  subjects: [
    {
      id: "controlsystems",
      title: "Control Systems",
      icon: "🎛️",
      description: "Comprehensive coverage of time response, root locus, and frequency domains.",
      exam_tags: ["GATE EE", "GATE EC", "IES"],
      accent: "teal",
      available: true,
      total_chapters: 8,
      chapters: [
        { num: 1, title: "Chapter 1", description: "Basics of Control Systems", file: "controlsystems/ch1.html", available: true },
        { num: 2, title: "Chapter 2", description: "Signal Flow Graph &Block Diagram", file: "controlsystems/ch2.html", available: true },
        { num: 3, title: "Chapter 3", description: "Time Response Analysis", file: "controlsystems/ch3.html", available: true },
        { num: 4, title: "Chapter 4", description: "Stability Analysis", file: "controlsystems/ch4.html", available: true },
        { num: 5, title: "Chapter 5", description: "Root Locus Technique", file: "controlsystems/ch5.html", available: true },
        { num: 6, title: "Chapter 6", description: "Frequency Response Analysis", file: "controlsystems/ch6.html", available: true },
        { num: 7, title: "Chapter 7", description: "Compensators & Controllers", file: "controlsystems/ch7.html", available: true },
        { num: 8, title: "Chapter 8", description: "State Space Analysis", file: "controlsystems/ch8.html", available: true }
      ]
    },
    {
      id: "measurements",
      title: "Electrical Measurements",
      icon: "📐",
      description: "Bridges, potentiometers, instrument transformers, and error analysis.",
      exam_tags: ["GATE EE", "IES"],
      accent: "orange",
      available: true,
      total_chapters: 16,
      chapters: [
        { num: 1, title: "Chapter 1", description: "Electrical Measurements Fundamental OF Electrical Measurements", file: "measurements/chapter1.html", available: true },
        { num: 2, title: "Chapter 2", description: "Analog Measuring Instruments", file: "measurements/chapter2.html", available: true },
        { num: 3, title: "Chapter 3", description: "Instrument Errors and Performance Characteristics", file: "measurements/chapter3.html", available: true },
        { num: 4, title: "Chapter 4", description: "Electrical Power and Energy Measurement", file: "measurements/chapter4.html", available: true },
        { num: 5, title: "Chapter 5", description: "Bridge-Based Measurement Techniques", file: "measurements/chapter5.html", available: true },
        { num: 6, title: "Chapter 6", description: "Measurement Errors & Their Analysis", file: "measurements/chapter6.html", available: true },
        { num: 7, title: "Chapter 7", description: "Precision Measurement UsingPotentiometers & Transformers", file: "measurements/chapter7.html", available: true },
        { num: 8, title: "Chapter 8", description: "Digital Voltmeters", file: "measurements/chapter8.html", available: true },
        { num: 9, title: "Chapter 9", description: "Cathode Ray Oscilloscopy", file: "measurements/chapter9.html", available: true },
        { num: 10, title: "Chapter 10", description: "Q-Meter — Measurement ofQuality Factor & RF Impedance", file: "measurements/chapter10.html", available: true },
        { num: 11, title: "Chapter 11", description: "Fundamentals of Transducers", file: "measurements/chapter11.html", available: true },
        { num: 12, title: "Chapter 12", description: "Piezo Electric Transducers", file: "measurements/chapter12.html", available: true },
        { num: 13, title: "Chapter 13", description: "Measurement of Temperature", file: "measurements/chapter13.html", available: true },
        { num: 14, title: "Chapter 14", description: "Measurement of Flow & Viscosity", file: "measurements/chapter14.html", available: true },
        { num: 15, title: "Chapter 15", description: "Intermediate Quantity Measurements", file: "measurements/chapter15.html", available: true },
        { num: 16, title: "Chapter 16", description: "Resistive, Inductive & Capacitive Transducers", file: "measurements/chapter16.html", available: true }
      ]
    },
    {
      id: "machines",
      title: "Electrical Machines",
      icon: "⚙️",
      description: "Transformers, DC Machines, Synchronous Machines and Induction Motors.",
      exam_tags: ["GATE EE", "IES"],
      accent: "amber",
      available: true,
      total_chapters: 22,
      chapters: [
        { num: 1, title: "Chapter 1", description: "Armature Winding", file: "machines/ch1.html", available: true },
        { num: 2, title: "Chapter 2", description: "Armature Reaction in DC Machines", file: "machines/ch2.html", available: true },
        { num: 3, title: "Chapter 3", description: "DC Motors", file: "machines/ch3.html", available: true },
        { num: 4, title: "Chapter 4", description: "Induction Machine", file: "machines/ch4.html", available: true },
        { num: 5, title: "Chapter 5", description: "DC Generators", file: "machines/ch5.html", available: true },
        { num: 6, title: "Chapter 6", description: "Armature Reaction & Commutation", file: "machines/ch6.html", available: true },
        { num: 7, title: "Chapter 7", description: "Speed Control of DC Motors", file: "machines/ch7.html", available: true },
        { num: 8, title: "Chapter 8", description: "DC Motor Starters,Speed Control & Braking", file: "machines/ch8.html", available: true },
        { num: 9, title: "Chapter 9", description: "Transformers", file: "machines/ch9.html", available: true },
        { num: 10, title: "Chapter 10", description: "Open Circuit & Short Circuit Tests", file: "machines/ch10.html", available: true },
        { num: 11, title: "Chapter 11", description: "Voltage Regulation & Efficiency of Transformers", file: "machines/ch11.html", available: true },
        { num: 12, title: "Chapter 12", description: "Auto Transformer & Special Windings", file: "machines/ch12.html", available: true },
        { num: 13, title: "Chapter 13", description: "Three-Phase Transformers", file: "machines/ch13.html", available: true },
        { num: 14, title: "Chapter 14", description: "Parallel Operation of Transformers", file: "machines/ch14.html", available: true },
        { num: 15, title: "Chapter 15", description: "Synchronous Machines", file: "machines/ch15.html", available: true },
        { num: 16, title: "Chapter 16", description: "Synchronous Machines", file: "machines/ch16.html", available: true },
        { num: 17, title: "Chapter 17", description: "Synchronous Motor", file: "machines/ch17.html", available: true },
        { num: 18, title: "Chapter 18", description: "Induction Motor — Equivalent Circuit", file: "machines/ch18.html", available: true },
        { num: 19, title: "Chapter 19", description: "Starting, Speed Control & Braking", file: "machines/ch19.html", available: true },
        { num: 20, title: "Chapter 20", description: "Induction Machine Special Topics", file: "machines/ch20.html", available: true },
        { num: 21, title: "Chapter 21", description: "Single Phase Induction Motors", file: "machines/ch21.html", available: true },
        { num: 22, title: "Chapter 22", description: "Special Motors", file: "machines/ch22.html", available: true }
      ]
    },
    {
      id: "powersystems",
      title: "Power Systems",
      icon: "⚡",
      description: "Generation, transmission lines, load flow, and fault analysis.",
      exam_tags: ["GATE EE", "IES"],
      accent: "green",
      available: true,
      total_chapters: 13,
      chapters: [
        { num: 1, title: "Chapter 1", description: "Generating Stations", file: "powersystems/chapter1.html", available: true },
        { num: 2, title: "Chapter 2", description: "Transmission & Distribution", file: "powersystems/chapter2.html", available: true },
        { num: 3, title: "Chapter 3", description: "Travelling Waves on Transmission Lines", file: "powersystems/chapter3.html", available: true },
        { num: 4, title: "Chapter 4", description: "Transmission Lines & Travelling Waves", file: "powersystems/chapter4.html", available: true },
        { num: 5, title: "Chapter 5", description: "Reactive Power Control & Underground Cables", file: "powersystems/chapter5.html", available: true },
        { num: 6, title: "Chapter 6", description: "Insulators, Corona & Distribution Systems", file: "powersystems/chapter6.html", available: true },
        { num: 7, title: "Chapter 7", description: "Per-Unit System, Symmetrical Components& Fault Analysis", file: "powersystems/chapter7.html", available: true },
        { num: 8, title: "Chapter 8", description: "Symmetrical Components& Fault Analysis", file: "powersystems/chapter8.html", available: true },
        { num: 9, title: "Chapter 9", description: "Power System Stability", file: "powersystems/chapter9.html", available: true },
        { num: 10, title: "Chapter 10", description: "Load Flow Studies", file: "powersystems/chapter10.html", available: true },
        { num: 11, title: "Chapter 11", description: "Economics of Power Generation", file: "powersystems/chapter11.html", available: true },
        { num: 12, title: "Chapter 12", description: "Circuit Breakers", file: "powersystems/chapter12.html", available: true },
        { num: 13, title: "Chapter 13", description: "Protective Relays", file: "powersystems/chapter13.html", available: true }
      ]
    },
    {
      id: "powerelectronics",
      title: "Power Electronics",
      icon: "🔌",
      description: "Inverters, rectifiers, choppers and switching devices.",
      exam_tags: ["GATE EE", "IES"],
      accent: "orange",
      available: true,
      total_chapters: 6,
      chapters: [
        { num: 1, title: "Chapter 1", description: "Basics & Power Semiconductor Devices", file: "powerelectronics/powerelec5-32.html", available: true },
        { num: 2, title: "Chapter 2", description: "AC – DC ConvertersControlled Rectifiers", file: "powerelectronics/powerelec33-55.html", available: true },
        { num: 3, title: "Chapter 3", description: "DC – DC Converters& Choppers", file: "powerelectronics/powerelec63-72.html", available: true },
        { num: 4, title: "Chapter 4", description: "DC–AC ConvertersInverters", file: "powerelectronics/powerelec78-89.html", available: true },
        { num: 5, title: "Chapter 5", description: "Commutation Circuits", file: "powerelectronics/powerelec96-101.html", available: true },
        { num: 6, title: "Chapter 6", description: "Fundamentals of Drives", file: "powerelectronics/powerelec102-110.html", available: true }
      ]
    }
  ]
};
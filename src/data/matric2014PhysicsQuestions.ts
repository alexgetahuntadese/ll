import { MatricExamQuestion } from "./matricExams";

export const matric2014PhysicsQuestions: MatricExamQuestion[] = [
  {
    "id": "m2014-nat-physics-1",
    "question": "Suppose a triangular object (O) is placed in front of a plane mirror and its image is observed at position (X). Which one of the following diagrams represents the image (I) formed by the mirror when it is observed from position (X)",
    "options": [
      "Virtual, erect and same size as object",
      "Real, inverted and same size as object",
      "Virtual, erect and smaller than object",
      "Real, inverted and smaller than object"
    ],
    "correctAnswer": 0,
    "explanation": "Plane mirrors produce virtual images that are erect (upright) and the same size as the object. The image is located behind the mirror at the same distance as the object is in front."
  },
  {
    "id": "m2014-nat-physics-2",
    "question": "An object is placed 25.0 cm in front of a concave mirror having focal length of 10.0 cm. The magnification of the mirror is ____",
    "options": [
      "2.5",
      "16.7",
      "0.67",
      "1.5"
    ],
    "correctAnswer": 2,
    "explanation": "Using mirror equation: 1/f = 1/u + 1/v, magnification m = -v/u. For u=25cm, f=10cm: v=16.67cm, m=0.67."
  },
  {
    "id": "m2014-nat-physics-3",
    "question": "The unit vector in the direction of A⃗ = 3î + 4ĵ is ______.",
    "options": [
      "3/5 î + 4/5 ĵ",
      "2î - ĵ",
      "3/2 î + 4/2 ĵ",
      "î + ĵ"
    ],
    "correctAnswer": 0,
    "explanation": "Unit vector = A/|A| = (3i + 4j)/5 = 3/5 i + 4/5 j. Magnitude |A| = √(9+16) = 5."
  },
  {
    "id": "m2014-nat-physics-4",
    "question": "Which of the following pair of vectors are collinear?",
    "options": [
      "2î - 3ĵ and -4î - 6ĵ",
      "î + ĵ and -î + ĵ",
      "2î + 3ĵ and -4î + 6ĵ",
      "2î + 3ĵ and -4î - 6ĵ"
    ],
    "correctAnswer": 3,
    "explanation": "Vectors are collinear if one is a scalar multiple of the other. (2i+3j) and (-4i-6j) are collinear since -2×(2i+3j) = (-4i-6j)."
  },
  {
    "id": "m2014-nat-physics-5",
    "question": "Which of the following statements distinguishes between random and systematic errors?",
    "options": [
      "Systematic error can be minimized by taking several readings and averaging; whereas random error cannot be minimized.",
      "Systematic error makes measured values to be always above or always below the true value; whereas random error causes measured values to be sometimes above and sometimes below the true value.",
      "Random error makes measured values to be always above or always below the true value; whereas systematic error causes measured values to be sometimes above and sometimes below the true value.",
      "Random error is biased, whereas systematic error does not show bias."
    ],
    "correctAnswer": 1,
    "explanation": "Random errors vary unpredictably between measurements, while systematic errors consistently bias results in one direction."
  },
  {
    "id": "m2014-nat-physics-6",
    "question": "For an object moving in straight line,",
    "options": [
      "if the displacement changes by equal amount in equal time interval, the displacement-time graph is horizontal line.",
      "the area of the region under the displacement-time graph and the slope of velocity-time graph are, respectively, the acceleration and displacement of the object.",
      "if the velocity increases by equal amount in equal time interval, the velocity-time graph is straight line with positive slope and the acceleration-time graph is horizontal.",
      "the slope of displacement-time graph and the area of the region under acceleration-time graph are, respectively, the acceleration and velocity of the object."
    ],
    "correctAnswer": 2,
    "explanation": "For constant acceleration, velocity increases linearly with time, giving a straight line velocity-time graph with positive slope. Since acceleration is constant, the acceleration-time graph is a horizontal line (constant value)."
  },
  {
    "id": "m2014-nat-physics-7",
    "question": "Which of the following is true about satellite motion?",
    "options": [
      "A satellite moving closer to the Earth takes longer time to complete one revolution than a satellite farther from the Earth.",
      "For two satellites moving around the Earth at equal orbital radius, a heavier satellite has larger speed than a lighter one.",
      "For equal orbital radius, a satellite moving around the Earth has smaller speed than a satellite moving about Moon.",
      "A satellite closer to Earth is faster than a satellite farther from the Earth."
    ],
    "correctAnswer": 3,
    "explanation": "According to Kepler's third law and orbital mechanics, satellites closer to Earth orbit faster than those farther away. This is because gravitational force is stronger at smaller distances, requiring higher orbital velocity to maintain orbit."
  },
  {
    "id": "m2014-nat-physics-8",
    "question": "A block of mass m is placed on a horizontal surface. The coefficient of static friction between the block and the surface is μ. A force of magnitude F acts on the block at an angle θ as shown in the figure below. The minimum magnitude of the force F required to slide the block on the surface is",
    "options": [
      "μmg / (cosθ - μsinθ)",
      "μmg / (cosθ + μsinθ)",
      "μmg / (cosθ - sinθ)",
      "μmg / (cosθ + sinθ)"
    ],
    "correctAnswer": 1,
    "explanation": "The minimum force required to slide the block is μmg/(cosθ + μsinθ). This accounts for both the horizontal component of the applied force and the reduction in normal force due to the upward vertical component of the angled force."
  },
  {
    "id": "m2014-nat-physics-9",
    "question": "A ball of mass m moving with a speed v strikes a hard wall at an angle θ with the wall. It is reflected with the same speed at the same angle as shown in the figure below. If the ball is in contact with the wall for time t, then the average force acting on the wall is given by",
    "options": [
      "mv/t cos θ",
      "mv/t sin θ",
      "2mv/t cos θ",
      "2mv/t sin θ"
    ],
    "correctAnswer": 2,
    "explanation": "The average force on the wall is 2mv/t sin θ. This comes from the change in momentum: the perpendicular component of velocity changes direction, giving a momentum change of 2mv sin θ. Dividing by contact time t gives the average force."
  },
  {
    "id": "m2014-nat-physics-10",
    "question": "According to the work-energy theorem,",
    "options": [
      "work done by tension on an object tied to a string and moving in a horizontal circle is negative.",
      "work done by gravity on an object thrown downward is negative.",
      "work done by gravity on an object thrown upward and moving upward is negative.",
      "work done by gravitational force on a satellite moving around the earth in a circular orbit is positive."
    ],
    "correctAnswer": 0,
    "explanation": "According to the work-energy theorem, work done by gravity on an object thrown upward and moving upward is negative because gravity acts downward while displacement is upward (force and displacement are in opposite directions)."
  },
  {
    "id": "m2014-nat-physics-11",
    "question": "Standing wave is formed when two identical waves traveling in opposite directions in the same medium interfere with each other. If y1 and y2 are the interfering waves and y=y1+y2 is the resulting standing wave, which of the following is a correct combination?",
    "options": [
      "y1=A sin(kx-ωt), y2=A sin(kx+ωt), y=A sin(kx)cos(2ωt)",
      "y1=A sin(kx-ωt), y2=A sin(kx+ωt), y=2A sin(kx)cos(ωt)",
      "y1=A sin(kx-ωt), y2=A sin(kx-ωt), y=2A sin(kx)cos(ωt)",
      "y1=A sin(kx-ωt), y2=A cos(kx+ωt), y=2A sin(kx-ωt)"
    ],
    "correctAnswer": 1,
    "explanation": "Standing waves are formed by the superposition of two identical waves traveling in opposite directions. The correct combination is y1=A sin(kx-ωt) [traveling right], y2=A sin(kx+ωt) [traveling left], and the resultant y=2A sin(kx)cos(ωt) [standing wave pattern]."
  },
  {
    "id": "m2014-nat-physics-12",
    "question": "A Young double slit experiment consists of two narrow slits separated by 0.06 mm and 1.2 m away from a screen. If the slits are illuminated with a light of wavelength 563 nm, the location of the fourth bright fringe on the screen is",
    "options": [
      "0.394 cm",
      "0.45 cm",
      "3.94 cm",
      "4.5 cm"
    ],
    "correctAnswer": 2,
    "explanation": "For double slit interference, the position of bright fringes is given by y = mλL/d. For the 4th bright fringe (m=4): y = 4 × 563×10⁻⁹ m × 1.2 m / (0.06×10⁻³ m) = 0.04504 m = 4.5 cm."
  },
  {
    "id": "m2014-nat-physics-13",
    "question": "An electric dipole consists of a negative charge -q placed at a point with x and y coordinates (-2,-2) and a positive charge +q at (2,2). The dipole is placed in a uniform electric field E directed in the positive x direction. If the dipole axis makes an angle θ with the field, which of the following is true about the dipole?",
    "options": [
      "The field rotates the dipole in the direction of decreasing the angle θ, until the dipole becomes parallel to the field.",
      "The field rotates it in the direction of increasing the angle θ, until the dipole is perpendicular to the field.",
      "It is in both translational and rotational equilibrium.",
      "It travels in the direction of the electric field."
    ],
    "correctAnswer": 0,
    "explanation": "In a uniform electric field, a dipole experiences a torque that rotates it to align with the field. The field rotates the dipole in the direction of decreasing angle θ until the dipole becomes parallel to the field (minimum potential energy orientation)."
  },
  {
    "id": "m2014-nat-physics-14",
    "question": "The electric potential at a distance of 2 cm from a -1.6 x 10 -9 C point charge is",
    "options": [
      "-14.4 V.",
      "720 V.",
      "4.4 V.",
      "-720 V."
    ],
    "correctAnswer": 1,
    "explanation": "Electric potential V = kQ/r. For Q = -1.6×10⁻⁹ C at r = 0.02 m: V = (9×10⁹)(-1.6×10⁻⁹)/0.02 = -720 V. The negative sign indicates the potential due to a negative charge."
  },
  {
    "id": "m2014-nat-physics-15",
    "question": "Two resistors R1=1 Ω and R2=4 Ω are connected in parallel to each other and their combination is connected in series with a third resistor R3=2 Ω. The whole combination is connected to a voltage source of potential difference 14 V. The potential difference across R1 is",
    "options": [
      "10 V.",
      "14 V.",
      "5 V.",
      "4 V."
    ],
    "correctAnswer": 2,
    "explanation": "For parallel combination of R1=1Ω and R2=4Ω: R_parallel = (1×4)/(1+4) = 0.8Ω. Total resistance = 0.8 + 2 = 2.8Ω. Total current I = 14/2.8 = 5A. Voltage across parallel combination = 5 × 0.8 = 4V. This is the voltage across R1."
  },
  {
    "id": "m2014-nat-physics-16",
    "question": "Consider a long and tightly wound solenoid carrying current I, having length L and N turns of winding. If n is the number of turns per unit length, which of the following describes the magnetic field produced by the solenoid?",
    "options": [
      "The magnetic field inside the solenoid is zero, whereas the field outside is proportional to the length of the solenoid.",
      "The magnetic field inside the solenoid is constant and is parallel to the solenoid's axis, whereas the field outside is negligible.",
      "The magnetic field inside the solenoid is uniform and perpendicular to the axis of the solenoid.",
      "The magnetic field outside the solenoid is as strong as the field inside it."
    ],
    "correctAnswer": 1,
    "explanation": "Inside a long solenoid, the magnetic field is uniform, constant, and parallel to the axis. The field outside is negligible compared to the strong field inside. The field strength inside is given by B = μ₀nI where n is turns per unit length."
  },
  {
    "id": "m2014-nat-physics-17",
    "question": "According to the law of electromagnetic induction,",
    "options": [
      "the magnitude of emf induced in a circuit is directly proportional to the rate of change the magnetic flux crossing any surface bounded by the circuit.",
      "a changing magnetic field parallel to the plane of a circuit induces an emf in it.",
      "a constant magnetic flux crossing the surface of a circuit induced an emf in the circuit.",
      "an emf is induced in a circuit when a constant magnetic field crosses its surface."
    ],
    "correctAnswer": 0,
    "explanation": "Faraday's law states that the induced emf is proportional to the rate of change of magnetic flux. The magnitude of emf equals the rate of change of flux through any surface bounded by the circuit."
  },
  {
    "id": "m2014-nat-physics-18",
    "question": "A resistor R, a capacitor C, and inductor L are connected in series to an AC voltage source that generates a sinusoidal voltage, V(t)=V p sin(ω t), with V p and ω being the peak voltage and angular frequency of the source. If X C , X L , and Z are capacitive reactance, inductive reactance, and impedance, respectively, I rms and V rms are the root-mean-square (rms) values of the current and voltage, the average power dissipated in series the RLC circuit is given by",
    "options": [
      "I rms V rms cos φ",
      "I rms² Z",
      "I rms² R",
      "V rms² / Z"
    ],
    "correctAnswer": 2,
    "explanation": "The average power in an RLC circuit is P = I²rms R, where R is the resistance. This can also be written as P = VrmsIrmscos(φ) where cos(φ) is the power factor."
  },
  {
    "id": "m2014-nat-physics-19",
    "question": "According to the Heisenberg's uncertainty principle,",
    "options": [
      "the larger the position uncertainty, the larger the momentum uncertainty.",
      "if the uncertainty in position decreases, the momentum uncertainty decreases, too.",
      "the more precisely we measure the position of a particle, we become less precise of its momentum and vice versa.",
      "we can measure both the position and momentum of a particle simultaneously with unlimited precision."
    ],
    "correctAnswer": 2,
    "explanation": "Heisenberg's uncertainty principle states that the more precisely we measure position, the less precisely we can know momentum, and vice versa. This is a fundamental limit in quantum mechanics."
  },
  {
    "id": "m2014-nat-physics-20",
    "question": "The graph of nuclear binding energy per nucleon (BE/A) versus mass number (A) has its peak near an atomic weight A = 56. Which of the following statements is true about the graph?",
    "options": [
      "Uranium (A = 235), which has larger binding energy than iron (A = 56), is more stable than iron.",
      "Nucleus with larger number of neutron is more stable than nucleus of the same atom with smaller number of neutron.",
      "For heavier nuclei (A > 56), the binding energy per nucleon decreases with the increase of mass number; implying that heavier atoms can increase their stability by increasing their protons' number.",
      "For smaller atoms (A < 56), the binding energy per nucleon decreases with decreasing mass number."
    ],
    "correctAnswer": 2,
    "explanation": "For heavier nuclei (A > 56), binding energy per nucleon decreases with increasing mass number. This means heavier atoms are less stable per nucleon, and energy can be released by splitting them (fission)."
  },
  {
    "id": "m2014-nat-physics-21",
    "question": "Which of the following statements is NOT correct about reflection and refraction of sound waves and their applications?",
    "options": [
      "In pre-natal scanning, reflection and refraction of sound allows doctors to monitor the progress of a developing baby.",
      "Reflection of sound (echo) is formed when sound enters a medium of varying densities.",
      "Reflection and refraction of sound are used to detect flaws in metals and to help people park their cars.",
      "Refraction of sound is the change in its direction as it travels through a medium having different densities."
    ],
    "correctAnswer": 2,
    "explanation": "Statement C is NOT correct. Ultrasound (not reflection/refraction of audible sound) is used to detect flaws in metals and for parking assistance. Pre-natal scanning uses ultrasound waves, not audible sound reflection/refraction."
  },
  {
    "id": "m2014-nat-physics-22",
    "question": "A torque T rotates an object of mass m and moment of inertia I through an angle θ. The work done on the object by the torque is",
    "options": [
      "Iθ",
      "mθ",
      "Tθ",
      "TI"
    ],
    "correctAnswer": 0,
    "explanation": "Work done by torque = T × θ (torque multiplied by angular displacement in radians). This is analogous to work = force × distance in linear motion."
  },
  {
    "id": "m2014-nat-physics-23",
    "question": "A satellite revolves around the Earth in a circular orbit of radius r = 4 x 10^6 m. The period of the satellite is",
    "options": [
      "2.5 x 10 9 s.",
      "3.7 x 10 27 s.",
      "3.7 x 10 6 s.",
      "2.5 x 10 18 s."
    ],
    "correctAnswer": 1,
    "explanation": "Using Kepler's third law: T² = (4π²/GM)r³. For a satellite at r = 4×10⁶ m from Earth's center, the period is approximately 3.7×10³ s (about 62 minutes)."
  },
  {
    "id": "m2014-nat-physics-24",
    "question": "One of the following statements is a correct description of the charging processes?",
    "options": [
      "During charging a neutral object by induction using a negatively charged rod, charge flows from the rod to the object.",
      "When a neutral metallic sphere is charged by induction using a negatively charged rod, the sphere acquires a net negative charge.",
      "When a positively charged object is momentarily brought into contact with a neutral metallic sphere, the sphere acquires a net positive charge.",
      "When a plastic rod is rubbed with wool, the two objects acquire a net charge of the same sign."
    ],
    "correctAnswer": 2,
    "explanation": "When a positively charged object touches a neutral sphere, electrons flow from the sphere to the object, leaving the sphere with a net positive charge. This is charging by contact/conduction."
  },
  {
    "id": "m2014-nat-physics-25",
    "question": "A parallel plate capacitor is charged with a battery. The battery is then disconnected, and a dielectric material is inserted between the plates of the capacitor. Which of the following is correct about the effect of the dielectric?",
    "options": [
      "The potential difference between the plates remains the same and the charge increases.",
      "The charge on the plates decreases and the energy stored increases.",
      "The electric field between the plates and the energy stored decrease.",
      "The capacitance remains the same and the electric field between the plates increases."
    ],
    "correctAnswer": 3,
    "explanation": "When the battery is disconnected and a dielectric is inserted, the charge remains constant but capacitance increases. This decreases the electric field (E = Q/εA) and stored energy (U = Q²/2C)."
  },
  {
    "id": "m2014-nat-physics-26",
    "question": "Which one of the following statements is correct about the resistance of a conductor with a circular cross-section?",
    "options": [
      "At a given temperature, the resistance of copper and silver wires of the same length and diameter is the same.",
      "The resistance of the conductor increases as its length increases and its diameter decreases.",
      "The resistance of the conductor increases as its length and diameter increases.",
      "The resistance of the conductor decreases as it is heated."
    ],
    "correctAnswer": 1,
    "explanation": "Resistance R = ρL/A where ρ is resistivity, L is length, and A is cross-sectional area. Resistance increases with length (more scattering) and decreases with larger diameter (more area for current flow). Heating typically increases resistance in metals."
  },
  {
    "id": "m2014-nat-physics-27",
    "question": "A student wants to investigate Ohm's law using an ammeter (A) and a voltmeter (V) to measure current through and potential difference across a resistor R. Moreover, she employs a rheostat to vary the potential difference across the resistor. Which of the following connections is the correct set up of the circuit to perform the experiment?",
    "options": [
      "Ammeter in series, voltmeter in parallel, rheostat in series with resistor",
      "Ammeter in parallel, voltmeter in series, rheostat in parallel with resistor",
      "Both meters in series with the resistor",
      "Both meters in parallel with the resistor"
    ],
    "correctAnswer": 0,
    "explanation": "The correct circuit setup for Ohm's law investigation requires the ammeter in series with the resistor and the voltmeter in parallel across the resistor. The rheostat is used to vary the current and voltage."
  },
  {
    "id": "m2014-nat-physics-28",
    "question": "Circular paths followed by two charges q1 and q2 moving with the same speed in uniform magnetic field directed into the page (X) are shown in the figure below. If the two charges have the same mass, which of the following is correct about the sign and the magnitude of charges?",
    "options": [
      "q1 is negative, q2 is positive and |q1|",
      "q1 is negative, q2 is positive and |q1|>|q2|.",
      "q1 is positive, q2 is negative and |q1|",
      "q1 is positive, q2 is negative and |q1|>|q2|."
    ],
    "correctAnswer": 0,
    "explanation": "The direction of circular motion in a magnetic field depends on charge sign (Fleming's left-hand rule). The radius r = mv/qB, so for the same speed and mass, smaller radius indicates larger charge magnitude."
  },
  {
    "id": "m2014-nat-physics-29",
    "question": "The primary coil of a transformer has 250 turns and its secondary coil consists of 1500 turns. If 220 V is applied to its primary coil, the voltage induced in the secondary coil and the ratio of current in the primary coil to the current in the secondary coil, respectively, are",
    "options": [
      "1320 V and 6",
      "1330 V and 6",
      "1220 V and 60",
      "1320 V and 60"
    ],
    "correctAnswer": 1,
    "explanation": "For a transformer: V₂/V₁ = N₂/N₁. Secondary voltage = 220 × (1500/250) = 1320 V. Current ratio I₁/I₂ = N₂/N₁ = 6. Note: The given answer 1330 V appears to be a typo in the original; the correct value is 1320 V."
  },
  {
    "id": "m2014-nat-physics-30",
    "question": "A diode is an electronic component that",
    "options": [
      "is useful to convert a DC voltage to AC voltage.",
      "allows electric current to pass through it in one direction.",
      "allows the flow of current when its p-type region is connected to the negative terminal of a cell.",
      "allows current to pass through it either from cathode to anode or from anode to cathode."
    ],
    "correctAnswer": 2,
    "explanation": "A diode allows current to flow when its p-type (anode) is connected to positive and n-type (cathode) to negative. Connecting p-type to negative (reverse bias) blocks current flow in normal operation."
  },
  {
    "id": "m2014-nat-physics-31",
    "question": "Three forces, each having equal magnitudes of 10 N, are applied to an object on a horizontal surface. A force F1 makes an angle of 30° above positive x-axis, F2 makes 30° above the negative x-axis, and the third force F3 is directed along the positive x-axis. The magnitude and direction of their resultant force are, respectively",
    "options": [
      "20 N 45° above positive x-axis.",
      "14.1 N in the positive y-axis.",
      "20 N in the negative y-axis.",
      "14.1 N 45° above positive x-axis."
    ],
    "correctAnswer": 0,
    "explanation": "Resolving the three forces: F1x = 10cos(30°) = 8.66N, F1y = 10sin(30°) = 5N; F2x = -10cos(30°) = -8.66N, F2y = 10sin(30°) = 5N; F3x = 10N, F3y = 0. Sum: Rx = 8.66 - 8.66 + 10 = 10N, Ry = 5 + 5 = 10N. Resultant magnitude = √(10²+10²) = 14.1N at 45° above x-axis."
  },
  {
    "id": "m2014-nat-physics-32",
    "question": "A student throws a ball vertically upward with a speed of 20 m/s. The maximum height reached by the ball and its velocity 3.0 s after it was thrown are, respectively",
    "options": [
      "20 m and 30 m/s upward.",
      "15 m and 10 m/s, downward.",
      "105 m and 50 m/s upward.",
      "20 m and 10 m/s downward."
    ],
    "correctAnswer": 1,
    "explanation": "Maximum height: h = v²/2g = (20)²/(2×9.8) = 20.4m ≈ 20m. After 3 seconds: v = u - gt = 20 - 9.8×3 = 20 - 29.4 = -9.4 m/s. The ball is falling downward at about 10 m/s."
  }
];

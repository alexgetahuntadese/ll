import { MatricExamQuestion } from "./matricExams";

const raw2015PhysicsQuestions = [
  {
    sectionDirection: "Choose the correct answer.",
    question: "Which one of the following units is NOT a possible unit of electric field strength?",
    options: [
      "Newton/Coulomb",
      "Joule/Coulomb",
      "Volt/meter",
      "Joule/(Coulomb×meter)",
    ],
  },
  {
    question: "Which one of the following statements does NOT describe magnetic nature of a material?",
    options: [
      "There is no a single magnetic North or magnetic South Pole.",
      "Magnetic dipoles of a material aligned parallel when the magnetic material is placed in external magnetic field.",
      "Magnetic molecules in a magnet will align when they are heated or hammered.",
      "Magnetic molecules (dipoles) are oriented randomly when a material lose its magnetism.",
    ],
  },
  {
    question: "Which one of the following statements is correct about conduction in semiconductors?",
    options: [
      "N-type semiconductor is made from half-filled shell atoms doped with accepter atoms.",
      "P-type semiconductors have holes as minority charge carriers in the crystal lattice of the material.",
      "The majority charge carriers in N-type semiconductors are electrons due to doping.",
      "When atoms with half-filled electrons are doped with atoms of five valance electrons, the majority charge carriers are holes.",
    ],
  },
  {
    question: "What is the acceleration due to gravity at an altitude twice the radius of the Earth? ($g_E$ is the gravitational acceleration on the surface of the Earth).",
    options: [
      "$$\\frac{g_E}{3}$$",
      "$$\\frac{g_E}{9}$$",
      "$3g_E$",
      "$$\\frac{g_E}{4}$$",
    ],
  },
  {
    question: "Four capacitors are connected in a capacitor network as shown in the figure below. The equivalent capacitance between terminals a and b in μF is [Image: exam question image]",
    options: [
      "$\\frac{3}{4}$",
      "12",
      "4",
      "$\\frac{1}{4}$",
    ],
  },
  {
    question: "A 64 V battery is connected to a series combination of 3 kΩ bulb and 4 kΩ electric iron. If the total current in the circuit is 8 mA, what is the internal resistance of the battery?",
    options: [
      "1 kΩ",
      "7 kΩ",
      "8 kΩ",
      "15 kΩ",
    ],
  },
  {
    question: "A solenoid with 5000 turns and length 1m carries 15A of current. If no iron core is inserted in the solenoid, what is the magnetic field strength at the center of the solenoid?",
    options: [
      "$20π\\times10^{-2}$ T",
      "$6π\\times10^{-2}$ T",
      "$3π\\times10^{-2}$ T",
      "$4π\\times10^{-2}$ T",
    ],
  },
  {
    question: "A small source emits sound waves which are spherical. The intensity of the sound wave measures at a distance r = 3.0 m from the source is 1.5 W/m². At what distance from the source would the intensity be one-fourth as much as it is at r = 3.0 m?",
    options: [
      "$12.0$ m",
      "$9.0$ m",
      "$4.5$ m",
      "$6.0$ m",
    ],
  },
  {
    question: "Consider a system of two point masses M1 and M2 with M1 = 0.5 M2. The two masses are located on the x-y plane as shown in the figure below. Which one of the following alternatives indicates the position of center of mass of the system? [Image: exam question image]",
    options: [
      "$$\\left(5,4\\right) cm$$",
      "$$\\left(\\frac{5}{7},\\frac{7}{3}\\right) cm$$",
      "$$\\left(\\frac{16}{3},\\frac{11}{3}\\right) cm$$",
      "$$\\left(\\frac{11}{3},\\frac{16}{3}\\right) cm$$",
    ],
  },
  {
    question: "Light ray is allowed to enter from air medium $(n_{air}=1)$ into water medium (index of refraction $n_w=\\frac{4}{3})$ at an angle of $30^\\circ$ with the normal to air-water interface (boundary). Which one of the following is correct about the ray of light?",
    options: [
      "The sine of the angle of refraction of the light ray in water is equal to 0.5.",
      "The sine of the angle of refraction of the light ray in water is equal to 0.38.",
      "The speed of the light ray in water is $1.33$ times that of its speed in air.",
      "The speed of the light ray in water is $0.9$ times that of its speed in air.",
    ],
  },
  {
    question: "A fluid travelling over an object's surface exerts less pressure than if the fluid was static. This is a statement of",
    options: [
      "Bernoulli's principle.",
      "principle of continuity.",
      "Pascal's principle.",
      "Archimedes' principle.",
    ],
  },
  {
    question: "Which one of the following activities of experiment is NOT necessary to determine the specific latent heat of vaporization of water?",
    options: [
      "Measuring temperature",
      "Measuring volume",
      "Measuring time",
      "Measuring mass",
    ],
  },
  {
    question: "Which one of the following statements is correct about critical and boiling points of a substance?",
    options: [
      "The critical point and the boiling point of a substance occur at the same specific temperature and pressure.",
      "Both critical temperature and boiling point of a substance can be increased or decreased based on the pressure of the surrounding.",
      "The boiling point of a substance can be different based on the pressure of the surrounding whereas critical point occurs at one specific pressure and temperature.",
      "The critical temperature of a substance can be increased or decreased based on the pressure of the surrounding whereas boiling point does not vary with the pressure of the surrounding.",
    ],
  },
  {
    question: "A 30 kg rigid object has a moment of inertia 45 kg⋅m 2 about its center of mass. What is the object's moment of inertia when it rotates through an axis 2 m away and parallel to the axis through its center of mass?",
    options: [
      "90 kg⋅m 2",
      "165 kg⋅m 2",
      "180 kg⋅m 2",
      "105 kg⋅m 2",
    ],
  },
  {
    question: "Two coplanar forces acts on a uniform beam as shown in the figure below. The moment of force on the beam is [Image: exam question image]",
    options: [
      "48.0 Nm.",
      "12.0 Nm.",
      "30.0 Nm.",
      "24.0 Nm.",
    ],
  },
  {
    question: "Water flows at the rate of 500.0 cm³/s at small cross-section 5 cm². The larger cross-section is 25 cm². What is the ratio of the speed of the water at A₁ to A₂. [Image: exam question image]",
    options: [
      "5",
      "100",
      "0.2",
      "20",
    ],
  },
  {
    question: "An ideal monoatomic gas expands adiabatically from an initial volume of 2 liters at a temperature of 300 K to 16 liters of volume. What is the final temperature of the gas? (Use the ratio of specific heat capacity at constant pressure to that at constant volume to be 5/3.)",
    options: [
      "37.5 K",
      "75 K",
      "2400 K",
      "1200 K",
    ],
  },
  {
    question: "Consider a particle performing a circular motion around a circle of radius r with an angular velocity $\\omega$ and the particle's projection on the horizontal diameter of the circle (between points Q and R) as shown in the figure below? Which one of the following statements is correct about the motion of the particle and its projection on $\\overline{QR}$ [Image: exam question image]",
    options: [
      "The projection of the particle on $\\overline{QR}$ swings between points Q and R with constant speed.",
      "The circular motion of the particle can be taken as a simple harmonic motion.",
      "The projection of the particle on $\\overline{QR}$ demonstrates simple harmonic motion.",
      "The projection of the particle on $\\overline{QR}$ demonstrates motion with constant acceleration.",
    ],
  },
  {
    question: "Air molecules vibrate in a pipe of length L closed at one end but open at the other. If the speed of sound through the pipe is $V$ , which one of the following statements is correct about the resonance effects of vibration of air molecules in the pipe?",
    options: [
      "The fundamental resonance frequency is ${\\frac{V}{4L}}$.",
      "The fundamental wave length of resonance is equal to $2L$.",
      "The resonance frequency of the first harmonics is ${\\frac{V}{L}}$.",
      "The wavelength of the third harmonic is equal to $L$.",
    ],
  },
  {
    question: "A monochromatic light of wave length $\\lambda$ passes through double slits separated by a distance d . If the path difference between the lights is a and being an integer (0, 1, 2, 3, ...). Which one of the following would be observed on screen behind the slits?",
    options: [
      "constructive interference if $p = (n + 1/2) \\lambda$.",
      "constructive interference if $p = n \\lambda$.",
      "destructive interference if $p = 2 n \\lambda$.",
      "destructive interference if $p = 0$",
    ],
  },
  {
    question: "Suppose you are standing on a horizontal floor, in a room, with one of your feet and leaning the wall of the room with the other foot. The number of action reaction pair of forces you experience is",
    options: [
      "1.",
      "3.",
      "2.",
      "4.",
    ],
  },
  {
    question: "The amount of heat energy required to change a substance from a liquid to a gaseous state is known as",
    options: [
      "specific heat capacity.",
      "quantity of heat.",
      "latent heat of fusion.",
      "latent heat of vaporization.",
    ],
  },
  {
    question: "Which one of the following is correct about mechanical waves?",
    options: [
      "The maximum height in a transverse wave is known as the trough of the wave.",
      "The time taken for one complete wave to pass a given point is called the frequency of the wave.",
      "The distance between two identical points on adjacent waves is known as the wavelength of the wave.",
      "The number of complete waves that passes a given point per time is called the period of the wave.",
    ],
  },
  {
    question: "A car of mass 1.50 × 10³ kg collides with a wall and rebounds. The initial and final velocities of the car are $v_1 = -15.0$ m/s and $v_2 = 2.60$ m/s respectively. If the collision lasts for 0.15 s, what is the magnitude of the average force exerted on the car?",
    options: [
      "2.60 × 10⁴ N",
      "3.96 × 10³ N",
      "2.64 × 10⁴ N",
      "1.76 × 10⁵ N",
    ],
  },
  {
    question: "Starting from rest, a block of mass 5.0 kg slides 2.5 m down a rough 37° incline. The coefficient of kinetic friction between the block and the incline is $µ_k = 0.44$ . What is the work done by the friction force on the block?",
    options: [
      "-75.00 J",
      "-18.92 J",
      "-44.00 J",
      "-59.00 J",
    ],
  },
  {
    question: "An inclined plane is 20 m long and is inclined at an angle of 15° to the horizontal. If the effort required to push a block of weight 3,000 N up the slope is 900 N, what is the efficiency of the inclined plane?",
    options: [
      "100 %",
      "86.7 %",
      "25.9 %",
      "30.0 %",
    ],
  },
  {
    question: "A wooden block of volume 5.00 × 10⁻⁴ m³ floats partially submerged in water, and a small steel object of mass m is placed on top of the block. When m = 0.25 kg, the system is in equilibrium and the top of the wooden block is at the level of the water. What is the density of the wood?",
    options: [
      "1000 kg.m⁻³",
      "1500 kg.m⁻³",
      "500 kg.m⁻³",
      "800 kg.m⁻³",
    ],
  },
  {
    question: "A boy in a journey covers his route by travelling 3.0 km east and 4.0 km north. What is the magnitude of his resultant displacement?",
    options: [
      "5.0 km",
      "1.0 km",
      "7.0 km",
      "2.7 km",
    ],
  },
  {
    question: "The graph given below shows the velocity of a man travelling on a motorcycle as a function of time. Which one of the following statements is correct about the velocity-time graph? [Image: exam question image]",
    options: [
      "The displacement during the time interval from t = 6 s to t = 14 s is equal to the area of region II minus the area of region III.",
      "The displacement during the time intervals t = 0 to t = 6 s is equal to the area under the velocity-time graph in the given interval.",
      "The acceleration during the time interval from t = 6 s to t = 10 s is equal to the gradient of the curve in the given interval and it is negative.",
      "The acceleration in the first 6 s is equal to the gradient of the curve in the given interval and it is positive.",
    ],
  },
  {
    question: "A bimetallic strip made up of iron and brass bonded together is used in a thermostat. The coefficient of linear expansions for iron and brass are 1.1 × 10⁻⁵/K and 1.9 × 10⁻⁵/K, respectively. Which of one the following phenomena occurs when the temperature changes?",
    options: [
      "When the temperature decreases, the brass section of the bimetallic strip contracts slowly than the iron and the strip bends towards the brass section.",
      "When the temperature increases, the iron section of the bimetallic strip expands faster than the brass and the strip bends towards the brass section.",
      "When the temperature increases, the brass section of the bimetallic strip expands faster than the iron and the strip bends towards the iron section.",
      "When the temperature decreases, the iron section of the bimetallic strip contracts faster than the brass and the strip bends towards the iron section.",
    ],
  },
  {
    question: "Which one of the following statements does NOT describe coherent light or interference of coherent light?",
    options: [
      "Two waves which maintain constant phase relationship can produce sustained interference.",
      "Sustainable interference pattern can be formed by two waves with variable phase difference.",
      "In order for two waves to be coherent, they must be the same type of wave.",
      "Coherent light waves have the same frequency and wavelength.",
    ],
  },
  {
    question: "Kirchhoff's junction rule is a consequence of conservation of",
    options: [
      "momentum.",
      "mass.",
      "charge.",
      "electrical energy.",
    ],
  },
  {
    question: "Which one of the following statements describes the photoelectric effect interaction of radiation with matter?",
    options: [
      "When radiation of certain frequency f, interact with atoms of a material, electrons will be emitted with energies proportional to the radiation energy.",
      "Any value of photons (radiations) is capable of producing photoelectrons from a metal.",
      "In photoelectric effect, the photoelectron energy is directly proportional to the wavelength of incident radiation.",
      "The intensity of radiation incident on a material can affect the energy of photoelectrons emitted from the metal surface.",
    ],
  },
  {
    question: "A positive point charge of 2 μC is placed on the x-axis at the origin and a positive charge of 6 μC and a negative point charge of -4 μC are placed, respectively at x=-3cm and x=+3cm on the x-axis. What is the net electric force on the 2 μC charge?",
    options: [
      "200 N toward the negative x-axis",
      "200 N toward the positive x-axis",
      "40 N toward the positive x-axis",
      "40 N toward the negative x-axis",
    ],
  },
  {
    question: "Consider a point charge Q in an electrostatic field and a point mass m in a gravitational field. Which one of the following statements is correct about the potential energy of the objects?",
    options: [
      "The electric potential decreases as a positive charge moves opposite to the electric field while the gravitational potential of the mass increases when it moves along the gravitational field.",
      "The potential energy of the point charge and that of the point mass changes as they move over equipotential surfaces in their respective fields.",
      "The potential energies at distance r, from the field sources for both Q and m vary inversely with r².",
      "The gravitational force on mass m is in the same direction of the gravitational field while the electric force on Q in the same or opposite directions depending the sign of the charge.",
    ],
  },
  {
    question: "Four resistors are connected to a voltage source as shown in the circuit diagram shown below. What are the current through the 3 Ω resistor and the voltage drop across the 4 Ω resistor, respectively? [Image: exam question image]",
    options: [
      "$\\frac{2}{3}$ A and 4 V",
      "2 A and ¾ V",
      "$\\frac{4}{3}$ A and 8 V",
      "$\\frac{3}{4}$ A and 8 V",
    ],
  },
  {
    question: "An electron moving with a speed of 2.2×10⁷m/s east enters the region of a magnetic field strength of 5×10⁻⁴ T directed north. What is the magnetic force experienced by the electron?",
    options: [
      "1.76×10⁻¹⁵ N, perpendicular to north and east directions",
      "8×10⁻¹⁵ N, perpendicular to north and east directions",
      "3.64×10⁻³⁰ N, towards east direction",
      "1.76×10⁻¹⁵ N towards north direction",
    ],
  },
  {
    question: "A magnetic field intensity of 4x10⁻⁴ T crosses a coil having face area 100 cm² and 5x10⁴ turns perpendicular to the face of the coil. If the magnetic flux in the coil set to zero within 2 ms. What is the magnitude of the induced emf in the coil?",
    options: [
      "4x10⁻³ V",
      "100 V",
      "10 V",
      "2x10⁻⁵ V",
    ],
  },
  {
    question: "In a simple a.c circuit, an inductor of 4μH and a capacitor of 9 pf are connected in series to each other and the combination is connected to an a.c source. What is the angular frequency at resonance of the circuit?",
    options: [
      "3.8x10⁸ rad/s",
      "2.7x10⁵ rad/s",
      "3.6x10⁷ rad/s",
      "1.67x10⁸ rad/s",
    ],
  },
  {
    question: "Electrons in a Sodium atom emit radiation when they move from a higher energy level of -0.81eV to a lower energy level of -2.21eV. What is the frequency of radiation emitted in the process?",
    options: [
      "3.38x10 14 Hz",
      "1.40x10 15 Hz",
      "8.10x10 15 Hz",
      "2.21x10 14 Hz",
    ],
  },
  {
    question: "Which one of the following statements is NOT correct about power of a lens?",
    options: [
      "The power of a lens decreases as the focal length of the lens increases.",
      "The larger the focal length of the lens, the greater is the power of the lens.",
      "The power of a lens is the measure of the strength of the lens.",
      "Optician gives the name diopters for the unit of power of a lens.",
    ],
  },
  {
    question: "Which one of the following groups of physical quantities contains only vectors?",
    options: [
      "Work, Electric field, Displacement and Force",
      "Acceleration, Speed, Force and Electric field",
      "Momentum, Energy, Magnetic field and Force",
      "Displacement, Velocity, Magnetic field and Momentum",
    ],
  },
  {
    question: "Which rule about the number of significant figures is correct? Zeros in the number",
    options: [
      "450.0 are significant figures.",
      "0.0023 are significant figures.",
      "1.1000 are not significant figures.",
      "2.70018 are not significant figures.",
    ],
  },
  {
    question: "Given two vectors v₁ = 10 units along the positive y-axis and v₂ = 6 units at an angle of 37° above the positive x-axis. What is the scalar product of the vectors in square of units?",
    options: [
      "45",
      "36",
      "48",
      "60",
    ],
  },
  {
    question: "An airplane takes-off at airport A and travels 500 km due east within one hour and then turning to south it flies for 20 minutes to land on airport B which is 100 km away from the turning point. The magnitude average velocity of the plane during its flight between the two airports is",
    options: [
      "$\\sqrt{24}$ km/h",
      "100$\\sqrt{34}$ km/h",
      "450 km/h",
      "$75\\sqrt{26}$ km/h",
    ],
  },
  {
    question: "A bullet is fired with an initial speed v at an angle θ with the horizontal. It takes a time T to reach its maximum vertical displacement hmax. It hits the target point a distance R away and exactly in the horizontal level to the point where it was fired. Which one of the following statement is NOT correct about the motion of the bullet?",
    options: [
      "The bullet hits the target at a time 2T after it was fired.",
      "hmax is directly proportional to the initial speed v.",
      "R will be maximum if cos θ = $\\sqrt{2}/2$.",
      "θ should be different from 90° to hit the target at a distance R.",
    ],
  },
  {
    question: "A man pushes a 25.0 kg object by 250 N force along an inclined plane inclined at an angle of 37° to the horizontal. If the object moves with constant speed, the friction force exerts on the block is",
    options: [
      "250.0 N, up the inclined plane.",
      "100.0 N, up the inclined plane.",
      "100.0 N, down the inclined plane.",
      "250.0 N, down the inclined plane.",
    ],
  },
  {
    question: "The following three collisions occur in different systems. I. A billiard ball A collides with an identical ball B and comes to rest after collision, while ball B moves with the same velocity as ball A was moving before. II. A bullet moving with speed v hits a suspended mass and is embedded in it and the combination moves with common velocity. III. Two cars moving in opposite direction become at rest after collision. Which of the following statements is correct about these collisions?",
    options: [
      "If and III are inelastic collisions.",
      "I and II are elastic collisions.",
      "I, II and III are inelastic collisions.",
      "I and III are elastic collisions.",
    ],
  },
  {
    question: "An object of mass M is attached to a spring of spring constant K, as shown in the figure below. If the mass is pulled to a point P, which is at distance A from equilibrium position O, and released, Which one of the following statements is correct about energy of the system? (assume the surface is frictionless) [Image: exam question image]",
    options: [
      "At point O, the system has both kinetic and potential energy.",
      "At point P, the system has both kinetic energy and potential energy.",
      "At point P, the mass attain its maximum velocity.",
      "At point Q the system has both kinetic energy and potential energy.",
    ],
  },
  {
    question: "A force $\\vec{F} = (\\overline{i} - 3\\overline{j}) \\, N$ acts on a wooden bar and drags the bar through a displacement of $\\vec{r} = 4\\overline{i}m$. What is the torque due to the force in N.m?",
    options: [
      "$4 \\,\\overline{i} \\, + \\, 12 \\,\\overline{j}$",
      "$-12 \\, \\overline{j}$",
      "$12 \\, \\overline{j}$",
      "$12 \\,\\overline{k}$",
    ],
  },
] as const;

const raw2015PhysicsAnswerKey = [
  { correctAnswer: 1, explanation: "Joule per coulomb is a volt, so it is a unit of electric potential, not electric field strength. Electric field can be written as N/C or V/m." },
  { correctAnswer: 2, explanation: "Heating or hammering a magnet tends to randomize domains and weaken magnetism rather than align the dipoles." },
  { correctAnswer: 2, explanation: "In an N-type semiconductor, donor doping provides extra electrons, making electrons the majority charge carriers." },
  { correctAnswer: 1, explanation: "At altitude 2R above Earth, the distance from Earth's center is 3R, so g' = g_E / 3^2 = g_E / 9." },
  { correctAnswer: -1, explanation: "This item depends on the circuit diagram in the source image, so the answer key is left unset." },
  { correctAnswer: 0, explanation: "The total resistance is V/I = 64/0.008 = 8 kΩ. The external resistance is 3 kΩ + 4 kΩ = 7 kΩ, so the internal resistance is 1 kΩ." },
  { correctAnswer: 2, explanation: "For a long solenoid, B = μ0 n I = (4π × 10^-7)(5000)(15) = 3π × 10^-2 T." },
  { correctAnswer: 3, explanation: "Sound intensity is inversely proportional to r^2. Reducing intensity to one-fourth requires doubling the distance from 3 m to 6 m." },
  { correctAnswer: -1, explanation: "This item depends on the coordinate diagram in the source image, so the answer key is left unset." },
  { correctAnswer: 1, explanation: "Snell's law gives sin r = (n_air / n_w) sin 30° = (1 / (4/3))(0.5) = 0.375, which rounds to 0.38." },
  { correctAnswer: 0, explanation: "Lower pressure in a faster-moving fluid is the key statement of Bernoulli's principle." },
  { correctAnswer: 1, explanation: "To find specific latent heat of vaporization electrically, the needed measurements are energy input and mass evaporated. Measuring volume is not necessary." },
  { correctAnswer: 2, explanation: "Boiling point changes with external pressure, but the critical point is a specific combination of temperature and pressure for a substance." },
  { correctAnswer: 1, explanation: "By the parallel-axis theorem, I = I_cm + Md^2 = 45 + 30(2^2) = 165 kg·m^2." },
  { correctAnswer: -1, explanation: "This item depends on the beam diagram in the source image, so the answer key is left unset." },
  { correctAnswer: 0, explanation: "From continuity, A1v1 = A2v2, so v1/v2 = A2/A1 = 25/5 = 5." },
  { correctAnswer: 1, explanation: "For an adiabatic process, TV^(γ-1) is constant. T2 = 300(2/16)^(2/3) = 300(1/8)^(2/3) = 75 K." },
  { correctAnswer: 2, explanation: "Uniform circular motion projects onto a diameter as simple harmonic motion, but the circular motion itself is not SHM." },
  { correctAnswer: 0, explanation: "A pipe closed at one end has fundamental frequency f1 = V / 4L." },
  { correctAnswer: 1, explanation: "In Young's double-slit experiment, constructive interference occurs when the path difference p = nλ." },
  { correctAnswer: 1, explanation: "You experience action-reaction pairs with the floor, the wall, and Earth's gravity, giving three interaction pairs." },
  { correctAnswer: 3, explanation: "The heat needed for change from liquid to gas without temperature change is latent heat of vaporization." },
  { correctAnswer: 2, explanation: "Wavelength is the distance between identical points on successive waves, such as crest-to-crest or trough-to-trough." },
  { correctAnswer: 3, explanation: "Average force magnitude is m|Δv|/Δt = 1.50 × 10^3 × 17.6 / 0.15 = 1.76 × 10^5 N." },
  { correctAnswer: 2, explanation: "The friction work is W = -μ_k mg cos 37° × s = -0.44 × 5 × 10 × 0.8 × 2.5 = -44 J." },
  { correctAnswer: 1, explanation: "Efficiency = MA / VR. Here MA = 3000/900 and VR = 20/(20 sin 15°) = 1/sin 15°, giving about 86.7%." },
  { correctAnswer: 2, explanation: "When fully submerged, the displaced water has mass ρV = 1000 × 5.00 × 10^-4 = 0.50 kg. So the wood mass is 0.50 - 0.25 = 0.25 kg, and its density is 0.25 / 5.00 × 10^-4 = 500 kg·m^-3." },
  { correctAnswer: 0, explanation: "The displacement is the hypotenuse of a 3-4-5 triangle, so its magnitude is 5.0 km." },
  { correctAnswer: -1, explanation: "This item depends on the velocity-time graph in the source image, so the answer key is left unset." },
  { correctAnswer: 2, explanation: "Brass has the larger expansion coefficient, so on heating it expands more than iron and the strip bends toward the iron side." },
  { correctAnswer: 1, explanation: "Sustained interference requires a constant phase difference. Variable phase difference does not produce a stable interference pattern." },
  { correctAnswer: 2, explanation: "Kirchhoff's junction rule comes from conservation of charge: charge cannot accumulate at a junction in steady current." },
  { correctAnswer: 0, explanation: "Photoelectric emission occurs only above threshold frequency, and higher photon energy gives higher photoelectron kinetic energy." },
  { correctAnswer: 1, explanation: "The +6 μC charge repels the +2 μC charge toward +x with 120 N, and the -4 μC charge attracts it toward +x with 80 N, so the net force is 200 N toward +x." },
  { correctAnswer: 3, explanation: "Gravitational force is always in the direction of the gravitational field, while electric force depends on the sign of the charge." },
  { correctAnswer: -1, explanation: "This item depends on the circuit diagram in the source image, so the answer key is left unset." },
  { correctAnswer: 0, explanation: "The magnetic force magnitude is qvB = (1.6 × 10^-19)(2.2 × 10^7)(5 × 10^-4) = 1.76 × 10^-15 N, perpendicular to both velocity and field." },
  { correctAnswer: 1, explanation: "The induced emf is NΔΦ/Δt = (5 × 10^4)(4 × 10^-4 × 100 cm^2)/(2 ms) = (5 × 10^4)(4 × 10^-6)/(2 × 10^-3) = 100 V." },
  { correctAnswer: 3, explanation: "At resonance, ω = 1/√(LC) = 1/√((4 × 10^-6)(9 × 10^-12)) = 1.67 × 10^8 rad/s." },
  { correctAnswer: 0, explanation: "The emitted photon energy is 2.21 - 0.81 = 1.40 eV. Using f = ΔE/h gives about 3.38 × 10^14 Hz." },
  { correctAnswer: 1, explanation: "Lens power is P = 1/f, so larger focal length means smaller power, not greater power." },
  { correctAnswer: 3, explanation: "Displacement, velocity, magnetic field, and momentum are all vectors. The other options include scalar quantities like work, speed, or energy." },
  { correctAnswer: 0, explanation: "Trailing zeros in a decimal number like 450.0 are significant. Leading zeros such as in 0.0023 are not." },
  { correctAnswer: 1, explanation: "The second vector has y-component 6 sin 37°, so v1·v2 = 10 × 6 sin 37° ≈ 10 × 3.6 = 36." },
  { correctAnswer: 3, explanation: "Displacement magnitude is √(500^2 + 100^2) = 100√26 km. Total time is 1 h 20 min = 4/3 h, so average velocity magnitude is 75√26 km/h." },
  { correctAnswer: 1, explanation: "Maximum height is proportional to v^2 sin^2 θ, so it is not directly proportional to the initial speed v." },
  { correctAnswer: 2, explanation: "Along the slope, 250 N upward balances mg sin 37° = 25 × 10 × 0.6 = 150 N downward plus friction. So friction is 100 N down the plane." },
  { correctAnswer: 0, explanation: "Collision I is elastic, while II is perfectly inelastic. III ends with the cars at rest after impact, so it is also inelastic." },
  { correctAnswer: 3, explanation: "At an intermediate point like Q in frictionless SHM, the mass has both kinetic and elastic potential energy. At the extreme point P, speed is zero." },
  { correctAnswer: -1, explanation: "Using τ = r × F gives -12k N·m, but the available options do not include that result, so the answer key is left unset." },
] as const;

export const matric2015PhysicsQuestions: MatricExamQuestion[] = raw2015PhysicsQuestions.map((item, index) => ({
  id: `m2015-phys-${index + 1}`,
  question: item.question,
  options: [...item.options],
  correctAnswer: raw2015PhysicsAnswerKey[index].correctAnswer,
  explanation: raw2015PhysicsAnswerKey[index].explanation,
}));

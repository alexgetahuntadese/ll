export interface PhysicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12PhysicsQuestions: { [chapter: string]: PhysicsQuestion[] } = {
  "Unit 1: Application of physics in other fields": [
    // Easy Questions
    {
      id: "phy12_app_e1",
      question: "What is medical physics?",
      options: ["Application of physics principles in medicine", "Study of medicine only", "Study of chemistry in medicine", "Biology in medicine"],
      correct: "Application of physics principles in medicine",
      explanation: "Medical physics applies physics concepts and methods to healthcare, including imaging, radiation therapy, and diagnostic equipment.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e2",
      question: "Which imaging technique uses X-rays?",
      options: ["MRI", "Ultrasound", "CT scan", "PET scan"],
      correct: "CT scan",
      explanation: "CT (Computed Tomography) scans use X-rays to create detailed cross-sectional images of the body.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e3",
      question: "What physics principle is used in ultrasound imaging?",
      options: ["Sound waves", "Light waves", "Radio waves", "Gamma rays"],
      correct: "Sound waves",
      explanation: "Ultrasound imaging uses high-frequency sound waves that reflect off tissues to create images.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e4",
      question: "In agriculture, physics is applied in:",
      options: ["Irrigation systems", "Plant breeding", "Soil chemistry", "Fertilizer composition"],
      correct: "Irrigation systems",
      explanation: "Physics principles like fluid mechanics and pressure are applied in designing efficient irrigation systems.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e5",
      question: "What is biophysics?",
      options: ["Physics applied to biological systems", "Pure biology", "Chemistry of life", "Genetics study"],
      correct: "Physics applied to biological systems",
      explanation: "Biophysics uses physics methods and theories to study biological systems and phenomena.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e6",
      question: "Which radiation is used in radiotherapy?",
      options: ["Ionizing radiation", "Visible light", "Infrared radiation", "Sound waves"],
      correct: "Ionizing radiation",
      explanation: "Ionizing radiation such as gamma rays and X-rays are used in radiotherapy to treat cancer.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e7",
      question: "What does GPS stand for?",
      options: ["Global Positioning System", "General Physics System", "Global Physics Standard", "General Positioning Standard"],
      correct: "Global Positioning System",
      explanation: "GPS uses physics principles including relativity and electromagnetic waves for precise positioning.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e8",
      question: "In sports physics, what affects the trajectory of a ball?",
      options: ["Gravity and air resistance", "Only gravity", "Only air resistance", "Weight only"],
      correct: "Gravity and air resistance",
      explanation: "Both gravity and air resistance affect the motion and trajectory of projectiles in sports.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e9",
      question: "What principle is used in optical fibers for communication?",
      options: ["Total internal reflection", "Refraction", "Diffraction", "Polarization"],
      correct: "Total internal reflection",
      explanation: "Optical fibers use total internal reflection to guide light signals over long distances.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e10",
      question: "Which physics concept is important in architecture?",
      options: ["Structural mechanics", "Nuclear physics", "Quantum mechanics", "Particle physics"],
      correct: "Structural mechanics",
      explanation: "Structural mechanics applies physics principles to ensure buildings and structures are safe and stable.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_app_m1",
      question: "Which physics principle explains how MRI works?",
      options: ["Nuclear magnetic resonance", "X-ray absorption", "Sound reflection", "Light refraction"],
      correct: "Nuclear magnetic resonance",
      explanation: "MRI uses nuclear magnetic resonance where hydrogen nuclei in the body respond to magnetic fields and radio waves.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m2",
      question: "In radiation therapy, what type of radiation is commonly used?",
      options: ["Alpha particles", "Beta particles", "Gamma rays", "Visible light"],
      correct: "Gamma rays",
      explanation: "Gamma rays are high-energy electromagnetic radiation used in radiation therapy to destroy cancer cells.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m3",
      question: "The Doppler effect in medical ultrasound is used to measure:",
      options: ["Blood flow velocity", "Tissue density", "Temperature", "Pressure"],
      correct: "Blood flow velocity",
      explanation: "Doppler ultrasound measures the change in frequency of reflected sound waves to determine blood flow velocity.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m4",
      question: "In agricultural remote sensing, which electromagnetic spectrum is primarily used?",
      options: ["Visible and infrared", "X-rays", "Gamma rays", "Radio waves only"],
      correct: "Visible and infrared",
      explanation: "Remote sensing in agriculture uses visible and infrared light to monitor crop health and soil conditions.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m5",
      question: "What physics concept is crucial in understanding biomechanics?",
      options: ["Force and motion", "Electromagnetic induction", "Nuclear decay", "Wave interference"],
      correct: "Force and motion",
      explanation: "Biomechanics applies principles of force, motion, and mechanics to understand how organisms move and function.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m6",
      question: "What type of imaging provides functional information about organs?",
      options: ["Nuclear medicine imaging", "X-ray imaging", "Ultrasound imaging", "Optical imaging"],
      correct: "Nuclear medicine imaging",
      explanation: "Nuclear medicine imaging uses radioactive tracers to provide functional information about organ systems.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m7",
      question: "In laser surgery, what property of laser light is most important?",
      options: ["High intensity and precision", "Low frequency", "Random polarization", "Long wavelength"],
      correct: "High intensity and precision",
      explanation: "Laser surgery utilizes the high intensity and precise focusing capability of laser light for accurate tissue cutting.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m8",
      question: "What physics principle explains GPS accuracy requirements?",
      options: ["Relativistic time corrections", "Classical mechanics only", "Electromagnetic induction", "Quantum tunneling"],
      correct: "Relativistic time corrections",
      explanation: "GPS requires relativistic corrections due to time dilation effects from satellite motion and gravitational differences.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m9",
      question: "In environmental monitoring, what electromagnetic radiation is used to detect pollutants?",
      options: ["Infrared and ultraviolet", "Only visible light", "Only radio waves", "Only X-rays"],
      correct: "Infrared and ultraviolet",
      explanation: "Infrared and ultraviolet spectroscopy are used to identify and quantify various atmospheric pollutants.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m10",
      question: "What physics concept is applied in earthquake-resistant building design?",
      options: ["Resonance and damping", "Only static equilibrium", "Electromagnetic forces", "Nuclear stability"],
      correct: "Resonance and damping",
      explanation: "Buildings are designed to avoid resonance with earthquake frequencies and include damping systems to reduce oscillations.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_app_h1",
      question: "The specific absorption rate (SAR) in medical procedures measures:",
      options: ["Rate of energy absorption by tissue", "Rate of drug absorption", "Rate of oxygen absorption", "Rate of nutrient absorption"],
      correct: "Rate of energy absorption by tissue",
      explanation: "SAR measures the rate at which energy is absorbed by human tissue when exposed to electromagnetic fields, important in MRI safety.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h2",
      question: "In positron emission tomography (PET), what happens when a positron meets an electron?",
      options: ["Annihilation producing gamma rays", "Nuclear fusion", "Chemical reaction", "Elastic collision"],
      correct: "Annihilation producing gamma rays",
      explanation: "In PET scans, positrons annihilate with electrons, producing two gamma rays that travel in opposite directions, which are detected to create images.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h3",
      question: "What quantum mechanical effect is utilized in electron microscopy?",
      options: ["Wave-particle duality of electrons", "Photoelectric effect", "Compton scattering", "Pair production"],
      correct: "Wave-particle duality of electrons",
      explanation: "Electron microscopy uses the wave nature of electrons to achieve much higher resolution than optical microscopes.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h4",
      question: "In magnetic resonance imaging, what determines the contrast between different tissues?",
      options: ["Different relaxation times", "Different densities only", "Different temperatures", "Different electrical conductivity"],
      correct: "Different relaxation times",
      explanation: "MRI contrast depends on different T1 and T2 relaxation times of hydrogen nuclei in various tissues.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h5",
      question: "What physics principle enables laser cooling of atoms?",
      options: ["Doppler effect and radiation pressure", "Magnetic confinement", "Electric field trapping", "Gravitational effects"],
      correct: "Doppler effect and radiation pressure",
      explanation: "Laser cooling uses the Doppler effect to selectively absorb photons that oppose atomic motion, creating radiation pressure that slows atoms.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h6",
      question: "In computed tomography, what mathematical technique reconstructs 3D images?",
      options: ["Radon transform", "Fourier transform only", "Laplace transform", "Z-transform"],
      correct: "Radon transform",
      explanation: "CT reconstruction uses the inverse Radon transform to convert X-ray projection data into cross-sectional images.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h7",
      question: "What relativistic effect must be considered in particle therapy?",
      options: ["Mass-energy equivalence", "Length contraction", "Time dilation only", "Simultaneity"],
      correct: "Mass-energy equivalence",
      explanation: "High-energy particle therapy requires consideration of relativistic mass-energy relationships for accurate dose calculations.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h8",
      question: "In optical coherence tomography, what property of light enables high-resolution imaging?",
      options: ["Coherence length", "Wavelength only", "Amplitude only", "Polarization only"],
      correct: "Coherence length",
      explanation: "OCT uses the short coherence length of broadband light sources to achieve micrometer-scale depth resolution.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h9",
      question: "What quantum effect is exploited in scanning tunneling microscopy?",
      options: ["Quantum tunneling", "Photoelectric effect", "Compton effect", "Pair production"],
      correct: "Quantum tunneling",
      explanation: "STM relies on quantum tunneling of electrons between the probe tip and sample surface to map atomic-scale topography.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h10",
      question: "In hyperthermia cancer treatment, what physics principle determines heating efficiency?",
      options: ["Electromagnetic absorption and thermal diffusion", "Only electromagnetic absorption", "Only thermal conduction", "Mechanical vibration"],
      correct: "Electromagnetic absorption and thermal diffusion",
      explanation: "Hyperthermia treatment depends on both electromagnetic energy absorption by tissues and thermal diffusion to achieve therapeutic temperatures.",
      difficulty: "Hard"
    },
  ],

  "Unit 2: Two-dimensional motion": [
    // Easy Questions
    {
      id: "phy12_2d_e1",
      question: "What is projectile motion?",
      options: ["Motion under gravity only", "Circular motion", "Linear motion", "Random motion"],
      correct: "Motion under gravity only",
      explanation: "Projectile motion is the motion of objects under the influence of gravity alone, following a parabolic path.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e2",
      question: "In projectile motion, the horizontal component of velocity:",
      options: ["Remains constant", "Increases", "Decreases", "Becomes zero"],
      correct: "Remains constant",
      explanation: "In the absence of air resistance, the horizontal component of velocity remains constant throughout projectile motion.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e3",
      question: "At the highest point of projectile motion, the vertical velocity is:",
      options: ["Zero", "Maximum", "Minimum but not zero", "Equal to horizontal velocity"],
      correct: "Zero",
      explanation: "At the highest point, the vertical component of velocity becomes zero before the object starts falling back down.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e4",
      question: "What is the path of a projectile called?",
      options: ["Parabola", "Circle", "Ellipse", "Straight line"],
      correct: "Parabola",
      explanation: "The trajectory of a projectile forms a parabolic curve due to the constant horizontal velocity and uniformly accelerated vertical motion.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e5",
      question: "In circular motion, what direction does centripetal acceleration point?",
      options: ["Toward the center", "Away from center", "Tangent to circle", "Perpendicular to plane"],
      correct: "Toward the center",
      explanation: "Centripetal acceleration always points toward the center of the circular path, providing the force needed for circular motion.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e6",
      question: "What is angular velocity?",
      options: ["Rate of change of angular displacement", "Linear velocity", "Tangential velocity", "Radial velocity"],
      correct: "Rate of change of angular displacement",
      explanation: "Angular velocity is the rate at which an object rotates, measured in radians per second.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e7",
      question: "In projectile motion, which component of acceleration is zero?",
      options: ["Horizontal", "Vertical", "Both components", "Neither component"],
      correct: "Horizontal",
      explanation: "In projectile motion (neglecting air resistance), horizontal acceleration is zero while vertical acceleration equals gravity.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e8",
      question: "What is the range of a projectile?",
      options: ["Horizontal distance traveled", "Maximum height reached", "Time of flight", "Initial velocity"],
      correct: "Horizontal distance traveled",
      explanation: "Range is the total horizontal distance a projectile travels from launch to landing.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e9",
      question: "In uniform circular motion, what is constant?",
      options: ["Speed", "Velocity", "Acceleration", "Direction"],
      correct: "Speed",
      explanation: "In uniform circular motion, the speed (magnitude of velocity) remains constant, but direction changes continuously.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e10",
      question: "What force keeps a satellite in orbit?",
      options: ["Gravitational force", "Magnetic force", "Electric force", "Nuclear force"],
      correct: "Gravitational force",
      explanation: "Gravitational force provides the centripetal force needed to keep satellites in circular or elliptical orbits.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_2d_m1",
      question: "For maximum range in projectile motion, the launch angle should be:",
      options: ["45 degrees", "30 degrees", "60 degrees", "90 degrees"],
      correct: "45 degrees",
      explanation: "Maximum range occurs at a launch angle of 45° when air resistance is neglected and launch and landing heights are equal.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m2",
      question: "The time of flight for a projectile depends on:",
      options: ["Initial vertical velocity and gravity", "Initial horizontal velocity only", "Mass of projectile", "Air density"],
      correct: "Initial vertical velocity and gravity",
      explanation: "Time of flight depends on the vertical component of initial velocity and gravitational acceleration, not on horizontal velocity or mass.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m3",
      question: "In uniform circular motion, which quantity remains constant?",
      options: ["Speed", "Velocity", "Acceleration", "Angular displacement"],
      correct: "Speed",
      explanation: "In uniform circular motion, the speed (magnitude of velocity) remains constant, but velocity and acceleration directions change continuously.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m4",
      question: "The centripetal force for circular motion is provided by:",
      options: ["Any force directed toward center", "Gravity only", "Friction only", "Normal force only"],
      correct: "Any force directed toward center",
      explanation: "Centripetal force can be provided by any force or combination of forces that acts toward the center of the circular path.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m5",
      question: "If the radius of circular motion doubles while speed remains constant, centripetal acceleration:",
      options: ["Becomes half", "Doubles", "Becomes quarter", "Remains same"],
      correct: "Becomes half",
      explanation: "Centripetal acceleration = v²/r, so if radius doubles and speed is constant, acceleration becomes half.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m6",
      question: "A projectile's velocity at any point makes angle φ with horizontal. If launch angle is θ, at maximum height:",
      options: ["φ = 0°", "φ = θ", "φ = 90°", "φ = 45°"],
      correct: "φ = 0°",
      explanation: "At maximum height, vertical velocity is zero, so velocity is purely horizontal (φ = 0°).",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m7",
      question: "The angular velocity of Earth's rotation is approximately:",
      options: ["7.3 × 10⁻⁵ rad/s", "1 rad/s", "0.1 rad/s", "100 rad/s"],
      correct: "7.3 × 10⁻⁵ rad/s",
      explanation: "Earth rotates 2π radians in 24 hours: ω = 2π/(24×3600) ≈ 7.3 × 10⁻⁵ rad/s.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m8",
      question: "For a projectile launched horizontally from height h, the time of flight is:",
      options: ["√(2h/g)", "h/g", "2h/g", "√(h/g)"],
      correct: "√(2h/g)",
      explanation: "For horizontal launch, using h = ½gt², we get t = √(2h/g).",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m9",
      question: "In banking of roads, the angle of banking depends on:",
      options: ["Speed and radius of curvature", "Only speed", "Only radius", "Weight of vehicle"],
      correct: "Speed and radius of curvature",
      explanation: "Banking angle is determined by tanθ = v²/(rg), depending on speed v and radius r.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m10",
      question: "The relationship between linear velocity v and angular velocity ω is:",
      options: ["v = ωr", "v = ω/r", "v = ω + r", "v = ω - r"],
      correct: "v = ωr",
      explanation: "Linear velocity equals angular velocity times radius: v = ωr.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_2d_h1",
      question: "A projectile is launched at angle θ with initial velocity v₀. The maximum height reached is:",
      options: ["v₀²sin²θ/(2g)", "v₀²cos²θ/(2g)", "v₀²/(2g)", "v₀²sinθ/(2g)"],
      correct: "v₀²sin²θ/(2g)",
      explanation: "Maximum height = (v₀sinθ)²/(2g) = v₀²sin²θ/(2g), derived from kinematic equations for vertical motion.",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h2",
      question: "In non-uniform circular motion, the total acceleration is:",
      options: ["Vector sum of tangential and centripetal accelerations", "Only centripetal acceleration", "Only tangential acceleration", "Difference of tangential and centripetal accelerations"],
      correct: "Vector sum of tangential and centripetal accelerations",
      explanation: "Non-uniform circular motion has both tangential acceleration (changing speed) and centripetal acceleration (changing direction).",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h3",
      question: "The range of a projectile on an inclined plane (angle α) is maximum when launched at angle:",
      options: ["45° - α/2", "45° + α/2", "45°", "90° - α"],
      correct: "45° - α/2",
      explanation: "For maximum range on an inclined plane, the optimal launch angle is 45° - α/2 where α is the inclination angle.",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h4",
      question: "The Coriolis effect on Earth is due to:",
      options: ["Earth's rotation", "Earth's revolution", "Gravity variation", "Magnetic field"],
      correct: "Earth's rotation",
      explanation: "The Coriolis effect is a deflection of moving objects caused by Earth's rotation, affecting projectile motion over large distances.",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h5",
      question: "In a banked curve, if there's no friction, the banking angle θ for speed v is:",
      options: ["tan θ = v²/(rg)", "sin θ = v²/(rg)", "cos θ = v²/(rg)", "tan θ = rg/v²"],
      correct: "tan θ = v²/(rg)",
      explanation: "For frictionless banked curves, the banking angle satisfies tan θ = v²/(rg) for circular motion.",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h6",
      question: "A satellite in geostationary orbit has a period of:",
      options: ["24 hours", "12 hours", "6 hours", "48 hours"],
      correct: "24 hours",
      explanation: "Geostationary satellites have a 24-hour orbital period, matching Earth's rotation to remain above the same point.",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h7",
      question: "The trajectory of a charged particle in uniform electric and magnetic fields is:",
      options: ["Cycloid", "Circle", "Parabola", "Straight line"],
      correct: "Cycloid",
      explanation: "A charged particle in crossed uniform E and B fields follows a cycloid path due to the combined forces.",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h8",
      question: "For a projectile with air resistance, the optimum angle for maximum range is:",
      options: ["Less than 45°", "Exactly 45°", "Greater than 45°", "90°"],
      correct: "Less than 45°",
      explanation: "Air resistance reduces the optimal launch angle below 45° because drag affects the trajectory.",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h9",
      question: "The escape velocity from Earth's surface is approximately:",
      options: ["11.2 km/s", "7.9 km/s", "5.5 km/s", "15.0 km/s"],
      correct: "11.2 km/s",
      explanation: "Earth's escape velocity is about 11.2 km/s, the minimum speed needed to escape Earth's gravitational field.",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h10",
      question: "The period of a conical pendulum depends on:",
      options: ["Length and vertical height", "Only length", "Only mass", "Only angle"],
      correct: "Length and vertical height",
      explanation: "A conical pendulum's period depends on the length of the string and the vertical height of the cone.",
      difficulty: "Hard"
    }
  ],

  "Unit 3: Fluid Mechanics": [
    // Easy Questions
    {
      id: "phy12_fluid_e1",
      question: "What is pressure?",
      options: ["Force per unit area", "Force times area", "Area per unit force", "Volume per unit force"],
      correct: "Force per unit area",
      explanation: "Pressure is defined as the force applied perpendicular to a surface per unit area of that surface.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e2",
      question: "What is the SI unit of pressure?",
      options: ["Pascal", "Newton", "Joule", "Watt"],
      correct: "Pascal",
      explanation: "The SI unit of pressure is Pascal (Pa), which equals one Newton per square meter (N/m²).",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e3",
      question: "Atmospheric pressure at sea level is approximately:",
      options: ["101,325 Pa", "1,000 Pa", "10,000 Pa", "1,000,000 Pa"],
      correct: "101,325 Pa",
      explanation: "Standard atmospheric pressure at sea level is 101,325 Pa or 1 atmosphere.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e4",
      question: "What is buoyancy?",
      options: ["Upward force on submerged objects", "Downward force on floating objects", "Sideways force in fluids", "Force that sinks objects"],
      correct: "Upward force on submerged objects",
      explanation: "Buoyancy is the upward force exerted by a fluid on any object that is wholly or partially submerged in it.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e5",
      question: "Which principle explains why ships float?",
      options: ["Archimedes' principle", "Newton's first law", "Conservation of energy", "Pascal's principle"],
      correct: "Archimedes' principle",
      explanation: "Archimedes' principle states that the buoyant force equals the weight of displaced fluid, explaining why ships float.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e6",
      question: "What is viscosity?",
      options: ["Resistance to flow in fluids", "Density of fluids", "Temperature of fluids", "Volume of fluids"],
      correct: "Resistance to flow in fluids",
      explanation: "Viscosity is a measure of a fluid's resistance to flow or deformation.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e7",
      question: "In which direction does atmospheric pressure act?",
      options: ["All directions", "Only downward", "Only upward", "Only sideways"],
      correct: "All directions",
      explanation: "Atmospheric pressure acts equally in all directions due to the random motion of air molecules.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e8",
      question: "What happens to pressure in a fluid as depth increases?",
      options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      correct: "Increases",
      explanation: "Pressure in a fluid increases with depth due to the weight of the fluid column above.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e9",
      question: "What is streamline flow?",
      options: ["Smooth, orderly fluid motion", "Turbulent motion", "Random motion", "Circular motion"],
      correct: "Smooth, orderly fluid motion",
      explanation: "Streamline flow is smooth fluid motion where particles follow regular paths without mixing.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e10",
      question: "Which instrument measures atmospheric pressure?",
      options: ["Barometer", "Thermometer", "Hydrometer", "Manometer"],
      correct: "Barometer",
      explanation: "A barometer is an instrument used to measure atmospheric pressure.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_fluid_m1",
      question: "According to Pascal's principle, pressure applied to a confined fluid:",
      options: ["Is transmitted equally in all directions", "Only acts downward", "Only acts upward", "Decreases with depth"],
      correct: "Is transmitted equally in all directions",
      explanation: "Pascal's principle states that pressure applied to a confined fluid is transmitted undiminished in all directions.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m2",
      question: "The pressure at depth h in a fluid of density ρ is given by:",
      options: ["P₀ + ρgh", "P₀ - ρgh", "ρgh", "P₀/ρgh"],
      correct: "P₀ + ρgh",
      explanation: "Pressure at depth h below the surface is P = P₀ + ρgh, where P₀ is atmospheric pressure.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m3",
      question: "For an object to float in equilibrium, the buoyant force must:",
      options: ["Equal the object's weight", "Be greater than object's weight", "Be less than object's weight", "Be zero"],
      correct: "Equal the object's weight",
      explanation: "For floating equilibrium, the upward buoyant force must exactly balance the downward weight of the object.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m4",
      question: "Bernoulli's equation relates:",
      options: ["Pressure, velocity, and height in flowing fluids", "Only pressure and velocity", "Only pressure and height", "Mass and velocity"],
      correct: "Pressure, velocity, and height in flowing fluids",
      explanation: "Bernoulli's equation shows the relationship between pressure, kinetic energy per unit volume, and potential energy per unit volume in flowing fluids.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m5",
      question: "Surface tension is caused by:",
      options: ["Cohesive forces between liquid molecules", "Adhesive forces only", "Gravity", "Air pressure"],
      correct: "Cohesive forces between liquid molecules",
      explanation: "Surface tension results from the net inward cohesive forces experienced by molecules at the liquid's surface.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m6",
      question: "The continuity equation for fluid flow states that:",
      options: ["A₁v₁ = A₂v₂", "A₁/v₁ = A₂/v₂", "A₁ + v₁ = A₂ + v₂", "A₁ - v₁ = A₂ - v₂"],
      correct: "A₁v₁ = A₂v₂",
      explanation: "The continuity equation shows that the product of cross-sectional area and velocity is constant for incompressible flow.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m7",
      question: "Hydraulic machines work on the principle of:",
      options: ["Pascal's law", "Archimedes' principle", "Bernoulli's principle", "Torricelli's law"],
      correct: "Pascal's law",
      explanation: "Hydraulic machines amplify force using Pascal's principle of pressure transmission in confined fluids.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m8",
      question: "The Reynolds number determines:",
      options: ["Flow regime (laminar or turbulent)", "Fluid density", "Pressure difference", "Temperature change"],
      correct: "Flow regime (laminar or turbulent)",
      explanation: "Reynolds number is a dimensionless quantity that predicts whether fluid flow will be laminar or turbulent.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m9",
      question: "For a floating object, the center of buoyancy is:",
      options: ["Center of displaced fluid volume", "Center of object's mass", "Highest point of object", "Lowest point of object"],
      correct: "Center of displaced fluid volume",
      explanation: "The center of buoyancy is the center of gravity of the displaced fluid volume.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m10",
      question: "Capillary action is due to:",
      options: ["Surface tension and adhesion", "Only surface tension", "Only adhesion", "Gravity only"],
      correct: "Surface tension and adhesion",
      explanation: "Capillary action results from the combination of surface tension and adhesive forces between liquid and container walls.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_fluid_h1",
      question: "According to Bernoulli's equation, if the speed of a fluid increases, its pressure:",
      options: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
      correct: "Decreases",
      explanation: "Bernoulli's principle shows that for streamline flow, higher fluid velocity corresponds to lower pressure (inverse relationship).",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h2",
      question: "The terminal velocity of a falling object in a fluid occurs when:",
      options: ["Drag force equals gravitational force", "Drag force is zero", "Gravitational force is zero", "Buoyant force equals gravitational force"],
      correct: "Drag force equals gravitational force",
      explanation: "Terminal velocity occurs when the upward drag force balances the net downward force (weight minus buoyancy).",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h3",
      question: "The Venturi effect demonstrates:",
      options: ["Pressure decrease with increased velocity", "Pressure increase with increased velocity", "No relationship between pressure and velocity", "Constant pressure at all velocities"],
      correct: "Pressure decrease with increased velocity",
      explanation: "The Venturi effect shows that fluid pressure decreases when flow velocity increases, as described by Bernoulli's principle.",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h4",
      question: "In laminar flow through a pipe, the velocity profile is:",
      options: ["Parabolic", "Linear", "Uniform", "Exponential"],
      correct: "Parabolic",
      explanation: "Laminar flow in a pipe exhibits a parabolic velocity profile with maximum velocity at the center and zero at the walls.",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h5",
      question: "The Magnus effect on a spinning sphere in fluid flow is due to:",
      options: ["Asymmetric flow pattern", "Gravitational force", "Electric charge", "Temperature difference"],
      correct: "Asymmetric flow pattern",
      explanation: "The Magnus effect creates a force perpendicular to motion due to asymmetric flow patterns around a spinning object.",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h6",
      question: "Cavitation in fluids occurs when:",
      options: ["Pressure drops below vapor pressure", "Temperature exceeds boiling point", "Velocity becomes zero", "Density increases significantly"],
      correct: "Pressure drops below vapor pressure",
      explanation: "Cavitation occurs when local pressure in a flowing liquid drops below its vapor pressure, causing vapor bubbles to form.",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h7",
      question: "The coefficient of viscosity has units of:",
      options: ["Pa·s", "Pa·m", "N·s", "N·m"],
      correct: "Pa·s",
      explanation: "Dynamic viscosity is measured in Pascal-seconds (Pa·s) or equivalently Newton-seconds per square meter (N·s/m²).",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h8",
      question: "For critical flow in open channels, the Froude number equals:",
      options: ["1", "0", "∞", "0.5"],
      correct: "1",
      explanation: "Critical flow occurs when the Froude number (Fr = v/√(gh)) equals 1, representing the transition between subcritical and supercritical flow.",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h9",
      question: "The boundary layer thickness in fluid flow depends on:",
      options: ["Viscosity and velocity", "Only viscosity", "Only velocity", "Only pressure"],
      correct: "Viscosity and velocity",
      explanation: "Boundary layer thickness depends on fluid viscosity, flow velocity, and distance from the leading edge of the surface.",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h10",
      question: "In compressible flow, the speed of sound in a gas is proportional to:",
      options: ["√T", "T", "1/T", "T²"],
      correct: "√T",
      explanation: "The speed of sound in an ideal gas is proportional to the square root of absolute temperature: c ∝ √T.",
      difficulty: "Hard"
    }
  ],

  "Unit 4: Electromagnetism": [
    // Easy Questions
    {
      id: "phy12_em_e1",
      question: "What is electric charge?",
      options: ["A fundamental property of matter", "A type of energy", "A magnetic field", "A gravitational force"],
      correct: "A fundamental property of matter",
      explanation: "Electric charge is a fundamental property of matter that causes objects to experience electromagnetic forces.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e2",
      question: "Like charges:",
      options: ["Repel each other", "Attract each other", "Have no effect", "Cancel each other"],
      correct: "Repel each other",
      explanation: "According to Coulomb's law, like charges (both positive or both negative) repel each other.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e3",
      question: "The SI unit of electric current is:",
      options: ["Ampere", "Volt", "Ohm", "Coulomb"],
      correct: "Ampere",
      explanation: "The ampere (A) is the SI base unit of electric current, defined as one coulomb of charge per second.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e4",
      question: "What is Ohm's law?",
      options: ["V = IR", "V = I/R", "V = I + R", "V = I - R"],
      correct: "V = IR",
      explanation: "Ohm's law states that voltage (V) equals current (I) times resistance (R): V = IR.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e5",
      question: "A magnetic field around a current-carrying wire forms:",
      options: ["Circular loops", "Straight lines", "Ellipses", "Random patterns"],
      correct: "Circular loops",
      explanation: "The magnetic field around a straight current-carrying wire forms concentric circular loops centered on the wire.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e6",
      question: "What is electromagnetic induction?",
      options: ["Generation of EMF by changing magnetic field", "Static electric charge", "Constant magnetic field", "Steady current flow"],
      correct: "Generation of EMF by changing magnetic field",
      explanation: "Electromagnetic induction is the process of generating an electromotive force (EMF) by changing magnetic fields.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e7",
      question: "The right-hand rule is used to determine:",
      options: ["Direction of magnetic field", "Magnitude of current", "Resistance value", "Power consumption"],
      correct: "Direction of magnetic field",
      explanation: "The right-hand rule helps determine the direction of magnetic field around a current-carrying conductor.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e8",
      question: "What is mutual induction?",
      options: ["EMF induced in one coil by current change in another", "Self-induced EMF", "Static magnetic field", "Constant current"],
      correct: "EMF induced in one coil by current change in another",
      explanation: "Mutual induction occurs when changing current in one coil induces EMF in a nearby coil.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e9",
      question: "Which device converts mechanical energy to electrical energy?",
      options: ["Generator", "Motor", "Transformer", "Capacitor"],
      correct: "Generator",
      explanation: "A generator converts mechanical energy into electrical energy using electromagnetic induction.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e10",
      question: "What is the unit of magnetic flux?",
      options: ["Weber", "Tesla", "Ampere", "Henry"],
      correct: "Weber",
      explanation: "Magnetic flux is measured in webers (Wb), where 1 Wb = 1 T⋅m².",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_em_m1",
      question: "Electric potential difference is measured in:",
      options: ["Volts", "Amperes", "Ohms", "Watts"],
      correct: "Volts",
      explanation: "Electric potential difference (voltage) is measured in volts (V), representing energy per unit charge.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m2",
      question: "Faraday's law of electromagnetic induction states that induced EMF is proportional to:",
      options: ["Rate of change of magnetic flux", "Magnetic field strength", "Current magnitude", "Resistance value"],
      correct: "Rate of change of magnetic flux",
      explanation: "Faraday's law states that the induced EMF equals the negative rate of change of magnetic flux through a circuit.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m3",
      question: "The direction of induced current is given by:",
      options: ["Lenz's law", "Ohm's law", "Coulomb's law", "Newton's law"],
      correct: "Lenz's law",
      explanation: "Lenz's law determines the direction of induced current: it opposes the change in magnetic flux that caused it.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m4",
      question: "In a transformer, the voltage ratio is equal to:",
      options: ["Turns ratio", "Current ratio", "Power ratio", "Resistance ratio"],
      correct: "Turns ratio",
      explanation: "In an ideal transformer, the voltage ratio equals the turns ratio: V₁/V₂ = N₁/N₂.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m5",
      question: "The magnetic force on a current-carrying conductor is given by:",
      options: ["F = BIL sinθ", "F = BIL cosθ", "F = BIL", "F = BIL tanθ"],
      correct: "F = BIL sinθ",
      explanation: "The magnetic force on a current-carrying conductor is F = BIL sinθ, where θ is the angle between B and I.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m6",
      question: "Self-inductance of a coil depends on:",
      options: ["Number of turns and geometry", "Only current", "Only voltage", "Only resistance"],
      correct: "Number of turns and geometry",
      explanation: "Self-inductance depends on the square of the number of turns and the geometric properties of the coil.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m7",
      question: "The unit of magnetic field strength is:",
      options: ["Tesla", "Weber", "Henry", "Gauss"],
      correct: "Tesla",
      explanation: "Magnetic field strength (magnetic flux density) is measured in Tesla (T) in the SI system.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m8",
      question: "AC generators work on the principle of:",
      options: ["Electromagnetic induction", "Electrostatic induction", "Thermal emission", "Photoelectric effect"],
      correct: "Electromagnetic induction",
      explanation: "AC generators convert mechanical energy to electrical energy using Faraday's law of electromagnetic induction.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m9",
      question: "The impedance of an AC circuit containing only resistance is:",
      options: ["Equal to resistance", "Greater than resistance", "Less than resistance", "Zero"],
      correct: "Equal to resistance",
      explanation: "For a purely resistive AC circuit, impedance Z = R, where R is the resistance.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m10",
      question: "Eddy currents are produced by:",
      options: ["Changing magnetic flux in conductors", "Static magnetic fields", "Electric charges at rest", "Constant current"],
      correct: "Changing magnetic flux in conductors",
      explanation: "Eddy currents are circular currents induced in conductors by changing magnetic flux, according to Faraday's law.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_em_h1",
      question: "The energy stored in a magnetic field is proportional to:",
      options: ["B²", "B", "1/B", "√B"],
      correct: "B²",
      explanation: "The energy density in a magnetic field is proportional to B²/2μ, where μ is the permeability of the medium.",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h2",
      question: "Maxwell's equations describe the relationship between:",
      options: ["Electric and magnetic fields", "Force and acceleration", "Energy and momentum", "Charge and mass"],
      correct: "Electric and magnetic fields",
      explanation: "Maxwell's four equations mathematically describe how electric and magnetic fields are generated and interact with each other and with charges and currents.",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h3",
      question: "The displacement current in Maxwell's theory is:",
      options: ["∂D/∂t", "∂B/∂t", "∂E/∂t", "∂H/∂t"],
      correct: "∂D/∂t",
      explanation: "Maxwell's displacement current is ∂D/∂t, where D is the electric displacement field, completing Ampère's law.",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h4",
      question: "The energy density in an electromagnetic field is proportional to:",
      options: ["E² + B²", "E² - B²", "E × B", "E/B"],
      correct: "E² + B²",
      explanation: "The energy density in electromagnetic fields is u = ½(ε₀E² + B²/μ₀), proportional to E² + B².",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h5",
      question: "The speed of electromagnetic waves in vacuum is:",
      options: ["1/√(ε₀μ₀)", "√(ε₀μ₀)", "ε₀μ₀", "1/(ε₀μ₀)"],
      correct: "1/√(ε₀μ₀)",
      explanation: "The speed of light in vacuum is c = 1/√(ε₀μ₀), where ε₀ and μ₀ are permittivity and permeability of free space.",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h6",
      question: "Poynting vector represents:",
      options: ["Electromagnetic energy flow", "Electric field strength", "Magnetic field strength", "Charge density"],
      correct: "Electromagnetic energy flow",
      explanation: "The Poynting vector S = E × H represents the direction and magnitude of electromagnetic energy flow.",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h7",
      question: "In electromagnetic wave, E and B are:",
      options: ["Perpendicular to each other and propagation direction", "Parallel to each other", "Parallel to propagation direction", "At 45° to propagation direction"],
      correct: "Perpendicular to each other and propagation direction",
      explanation: "In electromagnetic waves, E and B fields are perpendicular to each other and to the direction of propagation.",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h8",
      question: "The Hall effect is used to measure:",
      options: ["Magnetic field strength", "Electric field strength", "Current density", "Voltage"],
      correct: "Magnetic field strength",
      explanation: "The Hall effect produces a voltage perpendicular to current and magnetic field, used to measure magnetic field strength.",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h9",
      question: "LC oscillations have angular frequency:",
      options: ["1/√(LC)", "√(LC)", "LC", "1/(LC)"],
      correct: "1/√(LC)",
      explanation: "LC circuits oscillate with angular frequency ω = 1/√(LC), where L is inductance and C is capacitance.",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h10",
      question: "The magnetic flux quantum in superconductors is:",
      options: ["h/2e", "h/e", "2h/e", "h/(4e)"],
      correct: "h/2e",
      explanation: "The magnetic flux quantum Φ₀ = h/2e is the smallest possible change in magnetic flux in superconducting loops.",
      difficulty: "Hard"
    }
  ],

  "Unit 5: Basics of electronics": [
    // Easy Questions
    {
      id: "phy12_elec_e1",
      question: "What is a semiconductor?",
      options: ["Material with conductivity between conductor and insulator", "Perfect conductor", "Perfect insulator", "Magnetic material"],
      correct: "Material with conductivity between conductor and insulator",
      explanation: "Semiconductors have electrical conductivity between that of conductors and insulators, and their conductivity can be controlled.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e2",
      question: "Which element is commonly used to make semiconductors?",
      options: ["Silicon", "Copper", "Iron", "Gold"],
      correct: "Silicon",
      explanation: "Silicon is the most widely used semiconductor material in electronic devices due to its excellent properties and abundance.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e3",
      question: "What is a diode?",
      options: ["Device that allows current in one direction only", "Device that amplifies signals", "Device that stores charge", "Device that generates electricity"],
      correct: "Device that allows current in one direction only",
      explanation: "A diode is a semiconductor device that allows current to flow in only one direction, acting as an electrical one-way valve.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e4",
      question: "What does LED stand for?",
      options: ["Light Emitting Diode", "Low Energy Device", "Linear Electronic Device", "Light Enhancing Diode"],
      correct: "Light Emitting Diode",
      explanation: "LED stands for Light Emitting Diode, a semiconductor device that emits light when current flows through it.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e5",
      question: "What is the main function of a transistor?",
      options: ["Amplification and switching", "Energy storage", "Light emission", "Magnetic field generation"],
      correct: "Amplification and switching",
      explanation: "Transistors can amplify electrical signals and act as electronic switches, making them fundamental components in electronic devices.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e6",
      question: "What is an integrated circuit (IC)?",
      options: ["Multiple electronic components on a single chip", "Single resistor", "Single capacitor", "Single wire"],
      correct: "Multiple electronic components on a single chip",
      explanation: "An integrated circuit contains multiple electronic components (transistors, resistors, capacitors) fabricated on a single semiconductor chip.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e7",
      question: "In binary logic, how many possible states are there?",
      options: ["2", "3", "4", "10"],
      correct: "2",
      explanation: "Binary logic has two possible states: 0 (low/false) and 1 (high/true).",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e8",
      question: "What does PCB stand for?",
      options: ["Printed Circuit Board", "Personal Computer Board", "Power Control Board", "Programmable Circuit Board"],
      correct: "Printed Circuit Board",
      explanation: "PCB stands for Printed Circuit Board, which mechanically supports and electrically connects electronic components.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e9",
      question: "Which material is commonly used for making resistors?",
      options: ["Carbon", "Silver", "Gold", "Aluminum"],
      correct: "Carbon",
      explanation: "Carbon is commonly used in resistors due to its controllable resistance properties and stability.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e10",
      question: "What is the purpose of a capacitor in electronic circuits?",
      options: ["Store electrical energy", "Amplify signals", "Generate current", "Measure voltage"],
      correct: "Store electrical energy",
      explanation: "Capacitors store electrical energy in an electric field between two conducting plates.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_elec_m1",
      question: "In a p-n junction diode, current flows when:",
      options: ["Forward biased", "Reverse biased", "No bias applied", "Any bias condition"],
      correct: "Forward biased",
      explanation: "Current flows through a p-n junction diode when it is forward biased (positive terminal connected to p-side).",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m2",
      question: "The process of adding impurities to pure semiconductor is called:",
      options: ["Doping", "Mixing", "Alloying", "Coating"],
      correct: "Doping",
      explanation: "Doping is the process of adding small amounts of impurities to pure semiconductors to control their electrical properties.",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m3",
      question: "A bipolar junction transistor (BJT) has:",
      options: ["Three terminals: emitter, base, collector", "Two terminals only", "Four terminals", "Five terminals"],
      correct: "Three terminals: emitter, base, collector",
      explanation: "A BJT has three terminals: the emitter, base, and collector, which control the flow of current through the device.",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m4",
      question: "The breakdown voltage of a Zener diode is used for:",
      options: ["Voltage regulation", "Current amplification", "Signal generation", "Power storage"],
      correct: "Voltage regulation",
      explanation: "Zener diodes are designed to operate in reverse breakdown and maintain a constant voltage, making them useful for voltage regulation.",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m5",
      question: "In digital electronics, binary digit 1 typically represents:",
      options: ["High voltage level", "Low voltage level", "No voltage", "Negative voltage"],
      correct: "High voltage level",
      explanation: "In positive logic digital systems, binary 1 is represented by a high voltage level (typically 3.3V or 5V).",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m6",
      question: "What is the bandwidth of an amplifier?",
      options: ["Range of frequencies it can amplify", "Maximum voltage it can handle", "Power consumption", "Number of input channels"],
      correct: "Range of frequencies it can amplify",
      explanation: "Bandwidth refers to the range of frequencies over which an amplifier can provide useful amplification.",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m7",
      question: "In a common emitter amplifier configuration, the input is applied to:",
      options: ["Base terminal", "Emitter terminal", "Collector terminal", "All terminals"],
      correct: "Base terminal",
      explanation: "In common emitter configuration, the input signal is applied to the base terminal while emitter is common to input and output.",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m8",
      question: "What type of feedback reduces distortion in amplifiers?",
      options: ["Negative feedback", "Positive feedback", "No feedback", "Random feedback"],
      correct: "Negative feedback",
      explanation: "Negative feedback reduces distortion, improves stability, and increases bandwidth in amplifier circuits.",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m9",
      question: "The cut-off frequency of a filter is the frequency at which output power is:",
      options: ["Half of maximum power", "Maximum power", "Zero power", "Quarter of maximum power"],
      correct: "Half of maximum power",
      explanation: "Cut-off frequency is where the output power drops to half its maximum value (3 dB down point).",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m10",
      question: "What is the typical forward voltage drop across a silicon diode?",
      options: ["0.7V", "0.3V", "1.2V", "2.0V"],
      correct: "0.7V",
      explanation: "A silicon diode typically has a forward voltage drop of approximately 0.7V when conducting.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_elec_h1",
      question: "The current gain (β) of a transistor is defined as:",
      options: ["Ic/Ib", "Ie/Ib", "Ic/Ie", "Ib/Ic"],
      correct: "Ic/Ib",
      explanation: "The current gain β (beta) of a BJT is the ratio of collector current to base current: β = Ic/Ib.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h2",
      question: "In a MOSFET, the current is controlled by:",
      options: ["Gate voltage", "Drain voltage", "Source voltage", "Substrate voltage"],
      correct: "Gate voltage",
      explanation: "In a MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor), the current between drain and source is controlled by the voltage applied to the gate.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h3",
      question: "The transconductance of a transistor is defined as:",
      options: ["∂Ic/∂Vbe", "∂Vbe/∂Ic", "Ic/Vbe", "Vbe/Ic"],
      correct: "∂Ic/∂Vbe",
      explanation: "Transconductance gm = ∂Ic/∂Vbe is the rate of change of collector current with respect to base-emitter voltage.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h4",
      question: "In operational amplifiers, the input offset voltage is:",
      options: ["Voltage needed to make output zero", "Maximum input voltage", "Supply voltage", "Output voltage"],
      correct: "Voltage needed to make output zero",
      explanation: "Input offset voltage is the differential voltage required between inputs to make the output voltage zero.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h5",
      question: "The slew rate of an op-amp is limited by:",
      options: ["Internal capacitances and bias currents", "Supply voltage only", "Temperature only", "Frequency only"],
      correct: "Internal capacitances and bias currents",
      explanation: "Slew rate is limited by the charging/discharging of internal capacitances by the bias currents.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h6",
      question: "In a Class B amplifier, the theoretical maximum efficiency is:",
      options: ["78.5%", "50%", "25%", "100%"],
      correct: "78.5%",
      explanation: "Class B amplifiers have a theoretical maximum efficiency of π/4 ≈ 78.5% due to their push-pull operation.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h7",
      question: "The noise figure of an amplifier is defined as:",
      options: ["SNR_in/SNR_out", "SNR_out/SNR_in", "SNR_in + SNR_out", "SNR_in - SNR_out"],
      correct: "SNR_in/SNR_out",
      explanation: "Noise figure NF = SNR_in/SNR_out measures how much an amplifier degrades the signal-to-noise ratio.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h8",
      question: "The Early effect in transistors causes:",
      options: ["Base width modulation", "Emitter degeneration", "Collector saturation", "Base recombination"],
      correct: "Base width modulation",
      explanation: "The Early effect is the variation of base width with collector-base voltage, affecting transistor characteristics.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h9",
      question: "In digital circuits, setup time is:",
      options: ["Minimum time data must be stable before clock edge", "Maximum propagation delay", "Clock period", "Hold time"],
      correct: "Minimum time data must be stable before clock edge",
      explanation: "Setup time is the minimum time that input data must be stable before the active clock edge.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h10",
      question: "The channel length modulation parameter λ in MOSFET models accounts for:",
      options: ["Output resistance variation", "Threshold voltage shift", "Gate capacitance", "Mobility degradation"],
      correct: "Output resistance variation",
      explanation: "Channel length modulation parameter λ models the finite output resistance due to channel length variation with drain voltage.",
      difficulty: "Hard"
    }
  ]
};

// Function to get questions by unit and difficulty
export const getGrade12PhysicsQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10) => {
  const unitQuestions = grade12PhysicsQuestions[unit] || [];
  const filteredQuestions = unitQuestions.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
  
  console.log(`Getting Grade 12 Physics questions for:`, { unit, difficulty, count });
  console.log(`Found ${filteredQuestions.length} ${difficulty} questions for ${unit}`);
  
  // Shuffle and return requested number of questions
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Function to get all units for Grade 12 Physics
export const getGrade12PhysicsUnits = () => {
  return Object.keys(grade12PhysicsQuestions);
};
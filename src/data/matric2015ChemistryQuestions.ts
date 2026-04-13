import { MatricExamQuestion } from "./matricExams";

const raw2015ChemistryQuestions = [
  {
    sectionDirection: "Choose the correct answer.",
    question: "In a kinetic experiment, a student placed crystals of iodine in a closed reaction vessel, introduced a given quantity of hydrogen gas, and collected data to calculate the rate of formation of hydrogen iodide. What would be the effect obtained on the rate of the reaction, if the student takes more amount of iodine from that used in the first experiment?",
    options: [
      "It speeds up the rate of the reaction.",
      "It lowers the rate of the reaction.",
      "The formation of hydrogen iodide will be decreased.",
      "The rate of the reaction will be constant.",
    ],
  },
  {
    question: "Which of the following CORRECTLY relates the vapor pressure of a liquid with its boiling point? Boiling point is",
    options: [
      "the temperature at which all the three physical state co-exist.",
      "the temperature at which the vapor pressure becomes equal to the external pressure.",
      "the temperature at which molecules present in the vapor phase go back to the liquid state.",
      "the temperature at which the kinetic energy of molecules is much less than the intermolecular force.",
    ],
  },
  {
    question: "Consider this equilibrium system: CO (g) + Fe 3 O 4 (s) ⇌ CO 2 (g) + 3FeO(s) Which of the following disturbances shift the equilibrium position to the right?",
    options: [
      "Removing CO 2 (g)",
      "Removing CO (g)",
      "Removing FeO (s)",
      "Adding Fe 3 O 4 (s)",
    ],
  },
  {
    question: "Which one of the following resulted from interaction of the atomic orbitals of bonding atoms to produce new electron distribution associated with the entire molecule?",
    options: [
      "Hybrid orbital",
      "Molecular orbital",
      "Electron orbit",
      "Bohr orbit",
    ],
  },
  {
    question: "Which type of organic substances would be produced by heating a mixture of a carboxylic acid and an alcohol in the presence of H 2 SO 4 ?",
    options: [
      "Ketones",
      "Aldehydes",
      "Esters",
      "Ethers",
    ],
  },
  {
    question: "Which one of the following is the reducing agent in the following reaction? 8NH 3 (g) + 6NO 2 (g) → 7N 2 (g) + 12H 2 O (l)",
    options: [
      "NO 2",
      "NH 3",
      "H 2 O",
      "N 2",
    ],
  },
  {
    question: "Carbon forms two stable compounds with oxygen, namely, carbon monoxide and carbon dioxide. For a fixed mass of carbon, the ratio of oxygen in carbon monoxide to oxygen in carbon dioxide is 1:2. This result is consistent with the law of",
    options: [
      "definite proportion",
      "conservation of mass",
      "constant composition",
      "multiple proportion",
    ],
  },
  {
    question: "When a system at equilibrium is disturbed by a change of variable, the system shifts the equilibrium position in a way that tends to counteract this change of variable. This is a statement for",
    options: [
      "Pauli's exclusion principle",
      "Aufbau principle",
      "Heisenberg uncertainty principle",
      "Le Chatelier Principle",
    ],
  },
  {
    question: "Which one of the following graphs illustrates the rate change in terms of a change in reactant concentration with time?",
    options: [
      " [Image: exam choice image]",
      " [Image: exam choice image]",
      " [Image: exam choice image]",
      " [Image: exam choice image]",
    ],
  },
  {
    question: "The pH of a 0.1 M solution of formic acid (HCOOH) is 3. What is the Ka of the acid?",
    options: [
      "1.01 x 10 -5",
      "1.01 x 10 -7",
      "9.99 x 10 -4",
      "9.99 x 10 -5",
    ],
  },
  {
    question: "A system does 15 J of work and no other changes take place. Which of the following function has fallen by 15 J?",
    options: [
      "Internal energy",
      "Specific heat",
      "Enthalpy",
      "Entropy",
    ],
  },
  {
    question: "Which one of the following gas laws states the volume of a fixed amount of gas maintained at constant pressure is directly proportional to the absolute temperature of the gas?",
    options: [
      "Charles' law",
      "Boyle's law",
      "Avogadro's law",
      "Combined gas law",
    ],
  },
  {
    question: "Which of the following is CORRECTLY stated about the spontaneity of a reaction?",
    options: [
      "For an endothermic reaction with negative reaction entropy, the reaction is spontaneous at all temperature.",
      "For an exothermic reaction with positive reaction entropy, the reaction is non-spontaneous at all temperature.",
      "For an endothermic reaction with positive reaction entropy, the reaction is non-spontaneous at low temperature.",
      "For an exothermic reaction with negative reaction entropy, the reaction is spontaneous at high temperature.",
    ],
  },
  {
    question: "In thermodynamics: solutions in a beaker, a gas in a cylinder, a reaction vessel, a biological cell are examples of a",
    options: [
      "thermodynamic variables",
      "state function",
      "path function",
      "thermodynamic system",
    ],
  },
  {
    question: "Given the following: bond energies (kJ/mol) H-H 436 N-N 193 N=N 409 N≡N 942 and the enthalpy for the reaction 1 / 2 N 2 (g) + 3 / 2 H 2 (g) →NH 3 (g); ΔH=-45 kJ/mol What is the bond energy for NH 3 ?",
    options: [
      "1125",
      "1170",
      "960",
      "1080",
    ],
  },
  {
    question: "The rate law for: (CH 3 )-C-Br (aq) + H 2 O (l) → (CH 3 )-C-OH (aq) + H + + Br¯ (aq) is rate= k [(CH 3 )-C-Br (aq) + H 2 O (l)]. The accepted mechanism for the reaction is: I. (CH 3 )-C-Br(aq) → (CH 3 )-C¯(aq) + Br¯(aq) [slow] II. (CH 3 )-C¯(aq) + H 2 O(l) → (CH 3 )-C-OH¯(aq) [fast] III. (CH 3 )-C-OH¯(aq) → (CH 3 )-C-OH(aq) + H¯ [fast] Why DOES NOT H 2 O appear in the rate law? Because",
    options: [
      "water is a catalyst in the reaction.",
      "water is an intermediate species.",
      "water exists in the liquid state in the reaction.",
      "water is missing in the rate determining step.",
    ],
  },
  {
    question: "Which type of substances has the following general formula? (R 1 , R 2 and R 3 are hydrocarbon groups.) [Image: exam question image]",
    options: [
      "Carboxylic acids",
      "Fats",
      "Alcohols",
      "Fatty acids",
    ],
  },
  {
    question: "The rate law for this reaction CO (g) + NO 2 (g) → CO 2 (g) + NO (g) is rate = k [NO 2 ] p [CO] q . Which one of the following could be a plausible mechanism for the reaction?",
    options: [
      "NO 2 (g) + NO 2 (g) -> NO 3 (g) + NO(g) [slow] NO 3 (g) + CO(g) -> NO 2 (g) + CO 2 (g) [fast]",
      "NO 3 (g) + NO(g) -> NO 2 (g) + NO 2 (g) [slow] NO 2 (g) + CO 2 (g) -> NO 3 (g) + CO(g) [fast]",
      "NO 2 (g) + NO(g) -> NO 3 (g) + NO 2 (g) [slow] NO 3 (g) + CO(g) -> NO 2 (g) + CO 2 (g) [fast]",
      "NO 2 (g) + NO 2 (g) -> NO 3 (g) + NO(g) [fast] NO 3 (g) + CO(g) -> NO 2 (g) + CO 2 (g) [slow]",
    ],
  },
  {
    question: "The speed with which a solute goes into solution is",
    options: [
      "degree of solvation",
      "heat of solution",
      "rate of dissolution",
      "extent of dissolution",
    ],
  },
  {
    question: "Which one of the following explains how 2 L of 1 M NaOH aqueous stock solution is converted into a 0.25 M NaOH solution?",
    options: [
      "Adding 6 L water to the stock solution",
      "Adding 8 L water to the stock solution",
      "Evaporating 0.25 L of water from the stock solution",
      "Evaporating 1 L of water from the stock solution",
    ],
  },
  {
    question: "Which one of the following IS TRUE about isotopes?",
    options: [
      "Isotopes of an element are atoms that have different number of electrons and protons.",
      "Isotopes of an element are identical in mass number.",
      "Isotopes of the same elements contain the same number of neutrons.",
      "Isotopes of an element have the same chemical properties.",
    ],
  },
  {
    question: "Which one of the following describes the quantum mechanical model?",
    options: [
      "The locations of electrons in an atom are described in terms of probability.",
      "An atom is represented by a solid indestructible sphere.",
      "An atom is a sphere with a positively charged matter, in which electrons are embedded.",
      "Electrons moved around the nucleus of an atom in circular orbits.",
    ],
  },
  {
    question: "Which one of the following is the diagrammatic representation of 35 31 Cl?",
    options: [
      " [Image: exam choice image]",
      " [Image: exam choice image]",
      " [Image: exam choice image]",
      " [Image: exam choice image]",
    ],
  },
  {
    question: "Which one of the following is an ionic compound?",
    options: [
      "CaCl 2",
      "CO 2",
      "PCl 3",
      "H 2 O 3",
    ],
  },
  {
    question: "An element is located in Group VIIA and 3 rd period of the modern periodic table. On the basis of this the element:",
    options: [
      "generally forms an ion with -2 charges.",
      "has very low ionization energy.",
      "forms an acidic oxide.",
      "has extremely low electron affinity.",
    ],
  },
  {
    question: "Which of the properties of solvents WOULD NOT be affected by the formation of a solution with a non-volatile solute?",
    options: [
      "Boiling Point",
      "Chemical potential",
      "Chemical identity",
      "Freezing Point",
    ],
  },
  {
    question: "The partial pressure of acetylene, C 2 H 2 , in a container is 10 atm at 25°C. What is the solubility in molarity of C 2 H 2 , assume that C 2 H 2 obeys Henry's law? (K H = 1.04 mol/L atm)",
    options: [
      "9.62",
      "0.104",
      "104",
      "10.4",
    ],
  },
  {
    question: "What is the normality of a solution that contains 19.6 g of H 2 SO 4 in 20 mL of the solution?",
    options: [
      "0.02",
      "0.01",
      "20",
      "10",
    ],
  },
  {
    question: "Which one of the following illustrates an extensive property?",
    options: [
      "The electrode potential at standard condition for the half-reaction 2Cu 2+ + 4e − →2Cu is the same as for Cu 2+ + 2e − →Cu.",
      "If a system is divided into parts and it is found that the property of the composite system has a value that is the sum of the values of the property of all the parts.",
      "Doubling the volume of a sample also doubles the mass; so the ratio of mass to volume remains the same.",
      "If water in two beakers at the same temperature are mixed to make a single quantity of water and the temperature of the combined quantity of water is the same as it was in the two separate beakers.",
    ],
  },
  {
    question: "The point in a titration at which the number of moles of OH - ions added to a solution is equal to the number of moles of H + ions originally present is",
    options: [
      "Zero point",
      "End point",
      "Triple point",
      "Equivalence point",
    ],
  },
  {
    question: "Which one of the following is TRUE about the electrolysis of a molten hypothetical electrolyte, MX?",
    options: [
      "X is produced at the negative electrode.",
      "M is produced at the anode.",
      "Electrons are not transferred from one species to the other.",
      "The overall reaction is redox reaction.",
    ],
  },
  {
    question: "During the extraction of an unknown metal, the metallic discharge was fused with NaOH in air and then dissolved in water to obtain the soluble unknown metal containing species. Reduction with carbon is followed as the solution is treated with HCl. Finally the obtained oxide is reduced to its metallic form by aluminum. The most probable unknown metal would be",
    options: [
      "Ca",
      "Zn",
      "Cr",
      "Pb",
    ],
  },
  {
    question: "Why tin does NOT react with cold water but calcium reacts with cold water quite readily?",
    options: [
      "Due to its less reactive nature.",
      "Due to the formation of a thin oxide layer.",
      "Due to its physical state.",
      "Due to the pH of water.",
    ],
  },
  {
    question: "Why is vulcanization performed in natural rubber?",
    options: [
      "To convert the monomer unit in natural rubber in to polymer.",
      "To establish cross-links between polymer chain in the natural rubber.",
      "To decrease the number of monomer unit in the natural rubber.",
      "To increase the number of monomer unit in the natural rubber.",
    ],
  },
  {
    question: "Which one of the following explains the determination of the cell potential of Zn-Cu cell using voltmeter?",
    options: [
      "In the Cu half-cell, Cu metal will be dipped in ZnSO4 solution.",
      "In the Zn half-cell, Zn metal will be dipped in CuSO4 solution.",
      "Each U-tube served as a salt bridge that can be filled with saturated KCl.",
      "After the experiment the mass of zinc is increased.",
    ],
  },
  {
    question: "Which one of the following is an example of molecular crystals?",
    options: [
      "Diamond",
      "Sodium Chloride",
      "Solid carbon dioxide",
      "Magnesium",
    ],
  },
  {
    question: "Which one of the following COULD NOT be considered as factor influencing the rate of chemical reaction?",
    options: [
      "Presence of catalyst",
      "Surface area of reactants",
      "The rate constant of the reaction",
      "Temperature of reactants",
    ],
  },
  {
    question: "Which one of the following shows the hybridization scheme of the central atom in H 2 O?",
    options: [
      " [Image: exam choice image]",
      " [Image: exam choice image]",
      " [Image: exam choice image]",
      " [Image: exam choice image]",
    ],
  },
  {
    question: "In which of the following order of a reaction, a plot of ln [A] t versus time is a straight line whose slope is -k?",
    options: [
      "First",
      "Zero",
      "Third",
      "Second",
    ],
  },
  {
    question: "A forward and reverse reaction continues to take place at equal rate in microscopic level. This statement is the definition of",
    options: [
      "Chemical kinetics",
      "Dynamic equilibrium",
      "Degree of freedom",
      "The law of mass action",
    ],
  },
  {
    question: "The heat change at constant pressure that results when 1 mole of a compound is formed from its elements in their standard states is",
    options: [
      "standard entropy of reaction",
      "standard enthalpy of reaction",
      "standard reduction potential",
      "standard enthalpy of formation",
    ],
  },
  {
    question: "What is a redox reaction? It is a reaction in which",
    options: [
      "two insoluble ions in compounds form an insoluble products.",
      "electrons are transferred between species.",
      "atoms or ions of two compound exchange bonding partners.",
      "an acid and a base neutralize each other.",
    ],
  },
  {
    question: "Which one of the following explains how electroplating takes place?",
    options: [
      "The electrolyte is an aqueous solution of a salt of the plated metal.",
      "The object to be electroplated either metal or graphite-coated plastic constitutes the anode.",
      "The cations in the electrolyte are supplied either by the added salt or from oxidation of the anode.",
      "Metal is deposited on the anode by reduction of ions in the electrolyte solution.",
    ],
  },
  {
    question: "Which of the following statements describes chemical industries? It is",
    options: [
      "an area of chemistry concerned with the speeds, or rates, at which chemical reactions occur.",
      "an expression for the chemical composition of a compound in terms of the symbols of the atoms of the elements involved.",
      "a process in which dissolved solute comes out of solution and forms crystals.",
      "a firm that involves usage of raw material to produce desired products by using chemical reactions and refining methods.",
    ],
  },
  {
    question: "What will be the product if phosphorus reacts with excess amount of oxygen?",
    options: [
      "H 3 PO 3",
      "H 3 PO 4",
      "P 4 O 10",
      "P 3 O 6",
    ],
  },
  {
    question: "One of the basic differences between metallic conduction and electrolytic conduction is:",
    options: [
      "The conduction of electricity is due to the movement of ions in an electrolytic conduction while the flow of mobile electrons in metallic conduction.",
      "The charge carriers in metals are cations and anions while mobile electrons are in electrolytic conduction.",
      "The charge carriers in metals are localized electrons while strongly held mobile electrons are in electrolytic conduction.",
      "The conduction of electricity is due to the movement of ions in metallic conduction while the flow of mobile electrons in electrolytic conduction.",
    ],
  },
  {
    question: "Which one of the following gases is released from combustion of a fuel in an industrial machinery causing global warming?",
    options: [
      "CO",
      "CO 2",
      "NO",
      "SO 2",
    ],
  },
  {
    question: "The number of digits to the right of the decimal point denotes:",
    options: [
      "Significant figures",
      "Decimal places",
      "Conversion factor",
      "Scientific notation",
    ],
  },
  {
    question: "Which of the following would occur during the formation of ions?",
    options: [
      "Inner most shell electrons are involved.",
      "Valence electrons are shared between atoms.",
      "The electronic configuration of an atom forming the ion remains unaffected.",
      "Valence electrons are transferred from one atom to another.",
    ],
  },
  {
    question: "In order to illustrate the structure and properties of a solid, a student put hundred marble balls in to a box that representing metal cations and the empty space between and around the marble representing the electron sea. Which one of the following bonding is represented by this model?",
    options: [
      "Covalent bonding",
      "Ionic bonding",
      "Metallic bonding",
      "Dative bonding",
    ],
  },
  {
    question: "Which one of the following explains dipole-dipole force?",
    options: [
      "A type of intermolecular force that exists between non-polar molecules.",
      "The intermolecular attraction between oppositely charged poles of nearby polar molecules.",
      "An attractive force resulting from temporary dipoles induced in molecules.",
      "An electrostatic attraction between metal ions and valence electrons.",
    ],
  },
  {
    question: "Which one of the following reactions creates energy in our bodies during respiration?",
    options: [
      "C 6 H 12 O 6 (s) + 6O 2 (g) → 6CO 2 (g) + 6H 2 O (l)",
      "6CO 2 (g) + 6H 2 O (l) → C 6 H 12 O 6 (s) + 6O 2 (g)",
      "C 6 H 12 O 6 (s) → 2C 2 H 5 OH (l) + 2CO 2 (g)",
      "N 2 H 4 CO (g) + H 2 O (g) → 2NH 3 (l) +CO 2 (g)",
    ],
  },
  {
    question: "\"A reaction that involves the exchange of positive and negative ions of each reactant\". This is a definition of a",
    options: [
      "Decomposition reaction",
      "Combination reaction",
      "Double displacement reaction",
      "Single displacement reaction",
    ],
  },
  {
    question: "What are the four quantum numbers for an electron in a 2s orbital?",
    options: [
      "2, 1, 0, + 1/2",
      "2, 1, 1, + 1/2",
      "2, 0, 0, + 1/2",
      "2, 0, 1, + 1/2",
    ],
  },
  {
    question: "A student uses a digital balance (±0.02), a thermometer (±0.1), a measuring cylinder (±0.05), and a beaker (±0.5) during an experiment. Which of the above instrument is more precise?",
    options: [
      "The thermometer",
      "The digital balance",
      "The Beaker",
      "The measuring cylinder",
    ],
  },
  {
    question: "Which one of the following explains that light has BOTH wave and particle nature?",
    options: [
      "A beam of light is a stream of particles of electromagnetic energy, with energy proportional to the observed frequency of the light.",
      "An electron that is bound to the nucleus behaves like a standing wave and its position is given in terms of probability.",
      "Microscopic systems, such as atoms and molecules can possess wave properties.",
      "Light consists of electromagnetic waves which have an oscillating electric and magnetic disturbance that spreads electromagnetic radiation.",
    ],
  },
  {
    question: "A nuclear breakdown in which particles or electromagnetic radiation is emitted is __________.",
    options: [
      "Radioactive isotopes",
      "Radioactivity",
      "Radio wave",
      "Radioactive decay",
    ],
  },
  {
    question: "Which statement describes valence shell electron pair repulsion (VSEPR) theory?",
    options: [
      "Each degenerate orbitals are occupied by a single electron before the second electrons of opposite spin enters the orbitals.",
      "Electron pairs will be as far apart from each other in three dimensional spaces as possible.",
      "Atomic orbitals are capable of combining to produce new electron distribution.",
      "A covalent bond is formed when orbitals of two atoms overlap and the overlap region is occupied by a pair of electrons.",
    ],
  },
  {
    question: "Which one of the following is a colorless, flammable volatile liquid and miscible with non-polar solvents?",
    options: [
      "Benzene",
      "Ethanol",
      "Methanol",
      "Methane",
    ],
  },
  {
    question: "The IUPAC name of the compound with the following structure is: [Image: exam question image]",
    options: [
      "3, 4, 5-Trimethylhexane",
      "2-Ethyl-3, 4-dimethylpentane",
      "4-Ethyl-2, 3-dimethylpentane",
      "2, 3, 4-Trimethylhexane",
    ],
  },
  {
    question: "Which one of the following petroleum products is used as a solvent and in dry cleaning?",
    options: [
      "kerosene",
      "Petroleum ether",
      "Paraffin wax",
      "Diesel oil",
    ],
  },
  {
    question: "Which one of the following is NOT TRUE about laboratory preparation of ethylene by dehydration of ethanol?",
    options: [
      "The collected ethylene gas in the experiment decolorizes Br₂ in CCl₄.",
      "Concentrated sulphuric acid is used as a dehydrating agent.",
      "Combustion of ethylene produces a non-luminous flame.",
      "The collected ethylene gas in the experiment decolorizes alkaline KMnO₄.",
    ],
  },
  {
    question: "Which one of the following is an essential nutrient of plants?",
    options: [
      "Aluminum",
      "Lead",
      "Sodium",
      "Potassium",
    ],
  },
  {
    question: "Which one of the following is the main reason for the large difference in dipole-moment between the triatomic molecules water (H₂O) and carbon dioxide (CO₂)?",
    options: [
      "The presence of lone pairs of electrons in water (H₂O) partially reinforces bond polarities.",
      "The higher electronegativity difference among atoms in water (H₂O) than in carbon dioxide (CO₂).",
      "The presence of multiple bonds in carbon dioxide (CO₂) while single bonds in water.",
      "The bonds in carbon dioxide (CO₂) are directed 180° and bond polarity reinforces each other.",
    ],
  },
  {
    question: "How many non-bonding pairs of electrons are present in the valence shell of the central atom in ClF₃?",
    options: [
      "1",
      "0",
      "3",
      "2",
    ],
  },
  {
    question: "Which one would be observed in a laboratory activity that is applied on naphthalene?",
    options: [
      "It is soluble in benzene.",
      "It conducts electricity in molten state.",
      "It shows relatively high melting point.",
      "It is soluble in water.",
    ],
  },
  {
    question: "Which one of the following statements is CORRECT?",
    options: [
      "Valence bond model simply shows the linkage between atoms and the presence of lone pairs.",
      "Lewis model predicts the shapes of molecules based on electron-pair repulsions around a central atom.",
      "In Lewis model, electrons repel one another and a pair of bonding electrons lies far apart as possible.",
      "Valence bond model explain molecular shape from the interaction of atomic orbitals.",
    ],
  },
  {
    question: "The energy required to completely separate one mole of a solid ionic compound into gaseous ions is an",
    options: [
      "Ionization energy",
      "Activation energy",
      "Lattice energy",
      "Bond energy",
    ],
  },
  {
    question: "Which of the following compounds reacts with basic oxide to form salt and water?",
    options: [
      "Acid",
      "Acidic oxide",
      "Base",
      "Neutral oxide",
    ],
  },
  {
    question: "Which one of the following reaction represents formation of an acid from its salt?",
    options: [
      "CH 3 COOH (aq) + CH 3 OH (aq) → CH 3 CO 2 CH 3 (aq) +H 2 O (l)",
      "P 2 O 5 (s) + 6NaOH (aq) → 2Na 3 PO 4 (s) + 3H 2 O (l)",
      "NaNO 2 (s) + H 2 SO 4 (l) → NaHSO 4 (s) + HNO 3 (l)",
      "AgNO 3 (aq) + NaCl (aq) → NaNO 3 (aq) + AgCl (s)",
    ],
  },
  {
    question: "The negative logarithm of the molar concentration of hydrogen ion to the base ten is known as",
    options: [
      "pH",
      "K w",
      "K a",
      "pOH",
    ],
  },
  {
    question: "Which one of the following galvanic cell is an example of secondary cell?",
    options: [
      "Daniel's cell",
      "Lead storage cell",
      "Leclanche dry cell",
      "Zinc-carbon dry cell",
    ],
  },
  {
    question: "Which one of the following is responsible for electrolytic conductivity?",
    options: [
      "Ions strongly held in a fixed position.",
      "Free electrons.",
      "Electrons held in a fixed position.",
      "Movement of ions.",
    ],
  },
  {
    question: "Which one of the following statement is TRUE about gases?",
    options: [
      "The particles of gases are closely packed together.",
      "The volume of a gas is kept constant as pressure increases.",
      "When a gas sample is heated at constant pressure, its volume decreases.",
      "The volume of a gas is equal to the volume of its container.",
    ],
  },
  {
    question: "Which one of the following mathematical expressions is derived from the combination of Boyle's law, Charles' law and Avogadro's law?",
    options: [
      "V α nP",
      "V α T",
      "V α nP",
      "V α P",
    ],
  },
  {
    question: "180 g of calcium carbonate (CaCO₃) is allowed to react with 156 gram of hydrochloric acid (HCl), according to the following reaction. Which of the following substances is the limiting reagent? (Atomic masses; Ca=40, Cl=35.5, O=16, C=12, H=1) CaCO 3 + 2HCl → CaCl 2 + CO 2 + H 2 O",
    options: [
      "HCl",
      "CaCO₃",
      "H₂O",
      "CO₂",
    ],
  },
  {
    question: "Which one of the following isomers differs in the arrangement of carbon atoms in the longest continuous carbon chain?",
    options: [
      "Geometric",
      "Position",
      "Cis-trans",
      "Structural",
    ],
  },
  {
    question: "Which one of the following methods can be used in the laboratory for the preparation of alkynes?",
    options: [
      "Dehydration of alcohols with concentrated sulphuric acid.",
      "Heating of sodium salt of an organic acid with soda lime.",
      "Dehydrohalogenation of adjacent dihalides with sodium hydroxide.",
      "Hydrogenation of alkenes with a metal catalyst.",
    ],
  },
] as const;

const raw2015ChemistryAnswerKey = [
  { correctAnswer: 3, explanation: "The rate of a heterogeneous reaction is not changed by adding more of a pure solid reactant once the reacting surface conditions are unchanged in the setup." },
  { correctAnswer: 1, explanation: "A liquid boils when its vapor pressure becomes equal to the external pressure." },
  { correctAnswer: 0, explanation: "Removing the gaseous product CO2 shifts the equilibrium to the right to replace it, according to Le Chatelier's principle." },
  { correctAnswer: 1, explanation: "Molecular orbitals arise from combination of atomic orbitals and describe electron distribution over the whole molecule." },
  { correctAnswer: 2, explanation: "Heating a carboxylic acid with an alcohol in the presence of concentrated sulfuric acid produces an ester." },
  { correctAnswer: 1, explanation: "Nitrogen in NH3 is oxidized from -3 to 0, so NH3 acts as the reducing agent." },
  { correctAnswer: 3, explanation: "The two oxides show that one element combines with another in different simple whole-number ratios, which is the law of multiple proportions." },
  { correctAnswer: 3, explanation: "This statement is Le Chatelier's principle." },
  { correctAnswer: 1, explanation: "As reactant concentration decreases with time, the reaction rate also decreases, so the correct graph is the downward-curving one." },
  { correctAnswer: 0, explanation: "For 0.1 M HCOOH with pH 3, [H+] = 10^-3 M. Ka = x^2/(0.1 - x) ≈ 10^-6/0.099 ≈ 1.01 × 10^-5." },
  { correctAnswer: 0, explanation: "If the system does 15 J of work and no other energy transfer occurs, the internal energy decreases by 15 J." },
  { correctAnswer: 0, explanation: "Charles' law states that at constant pressure, gas volume is directly proportional to absolute temperature." },
  { correctAnswer: 2, explanation: "An endothermic reaction with positive entropy becomes spontaneous only at sufficiently high temperature, so it is non-spontaneous at low temperature." },
  { correctAnswer: 3, explanation: "A solution in a beaker, a gas in a cylinder, and a cell are all examples of thermodynamic systems." },
  { correctAnswer: 1, explanation: "Bonds broken: 1/2 N≡N + 3/2 H-H = 471 + 654 = 1125 kJ/mol. Since ΔH = broken - formed = -45, the total N-H bond energy formed is 1170 kJ/mol." },
  { correctAnswer: 2, explanation: "Pure liquid water is omitted from the rate law because its concentration is effectively constant." },
  { correctAnswer: 1, explanation: "The formula with three hydrocarbon groups attached through ester linkages represents a fat or triglyceride." },
  { correctAnswer: 0, explanation: "A slow first step involving two NO2 molecules gives rate proportional to [NO2]^2, which matches the known mechanism for this reaction." },
  { correctAnswer: 2, explanation: "The speed at which a solute dissolves is called the rate of dissolution." },
  { correctAnswer: 0, explanation: "Using C1V1 = C2V2 gives 1 × 2 = 0.25 × V2, so V2 = 8 L. Therefore 6 L of water must be added." },
  { correctAnswer: 3, explanation: "Isotopes have the same atomic number and therefore the same chemical properties, though they differ in mass number." },
  { correctAnswer: 0, explanation: "The quantum mechanical model describes electron locations in terms of probability distributions." },
  { correctAnswer: -1, explanation: "This item depends on the source diagram image, so the answer key is left unset." },
  { correctAnswer: 0, explanation: "Calcium chloride is ionic because it is formed from a metal cation and nonmetal anions." },
  { correctAnswer: 2, explanation: "Group VIIA period 3 corresponds to chlorine, which forms acidic oxides such as Cl2O7." },
  { correctAnswer: 2, explanation: "Adding a nonvolatile solute changes colligative properties such as boiling and freezing points, but it does not change the chemical identity of the solvent." },
  { correctAnswer: 3, explanation: "By Henry's law, solubility = kH × P = 1.04 mol L^-1 atm^-1 × 10 atm = 10.4 M." },
  { correctAnswer: 2, explanation: "Moles of H2SO4 = 19.6/98 = 0.2 mol in 0.02 L, so molarity is 10 M. Because sulfuric acid supplies 2 equivalents per mole, normality is 20 N." },
  { correctAnswer: 1, explanation: "An extensive property is additive over the parts of a system, which is exactly what option B describes." },
  { correctAnswer: 3, explanation: "The point where moles of added OH- equal the initial moles of H+ is the equivalence point." },
  { correctAnswer: 3, explanation: "Electrolysis of molten MX involves oxidation at one electrode and reduction at the other, so the overall process is a redox reaction." },
  { correctAnswer: 2, explanation: "Fusion with NaOH in air to form a soluble species, followed by reduction to the oxide and aluminothermic reduction, is characteristic of chromium extraction." },
  { correctAnswer: 1, explanation: "Tin is protected by a thin oxide layer, so it does not readily react with cold water." },
  { correctAnswer: 1, explanation: "Vulcanization introduces sulfur cross-links between polymer chains in natural rubber." },
  { correctAnswer: 2, explanation: "A Zn-Cu galvanic cell uses a salt bridge, commonly containing an inert electrolyte such as KCl, to complete the circuit." },
  { correctAnswer: 2, explanation: "Solid carbon dioxide consists of discrete molecules held together by intermolecular forces, so it is a molecular crystal." },
  { correctAnswer: 2, explanation: "Catalyst, surface area, and temperature influence reaction rate. The rate constant is not treated as an independent experimental factor in this context." },
  { correctAnswer: 3, explanation: "The central oxygen atom in H2O is sp3 hybridized, giving four sp3 orbitals arranged as two lone pairs and two singly occupied orbitals for bonding." },
  { correctAnswer: 0, explanation: "A first-order reaction gives a straight line when ln[A]t is plotted against time, with slope -k." },
  { correctAnswer: 1, explanation: "Equal forward and reverse rates at the microscopic level define dynamic equilibrium." },
  { correctAnswer: 3, explanation: "The enthalpy change for forming 1 mole of a compound from its elements in their standard states is the standard enthalpy of formation." },
  { correctAnswer: 1, explanation: "A redox reaction is one in which electrons are transferred between species." },
  { correctAnswer: 2, explanation: "In electroplating, cations of the plating metal are supplied from the electrolyte or from dissolution of the anode and are reduced onto the cathode." },
  { correctAnswer: 3, explanation: "A chemical industry uses raw materials and chemical processes to produce useful products." },
  { correctAnswer: 2, explanation: "Phosphorus burns in excess oxygen to form phosphorus(V) oxide, commonly written as P4O10." },
  { correctAnswer: 0, explanation: "Metallic conduction is due to mobile electrons, whereas electrolytic conduction is due to movement of ions." },
  { correctAnswer: 1, explanation: "Combustion of fuels releases carbon dioxide, which is a major greenhouse gas contributing to global warming." },
  { correctAnswer: 1, explanation: "Digits to the right of the decimal point are called decimal places." },
  { correctAnswer: 3, explanation: "Ion formation involves transfer of valence electrons from one atom to another." },
  { correctAnswer: 2, explanation: "The marble-and-electron-sea model represents metallic bonding." },
  { correctAnswer: 1, explanation: "Dipole-dipole forces are attractions between oppositely charged ends of nearby polar molecules." },
  { correctAnswer: 0, explanation: "Cellular respiration releases energy through oxidation of glucose to carbon dioxide and water." },
  { correctAnswer: 2, explanation: "Exchange of positive and negative ions between reactants is a double displacement reaction." },
  { correctAnswer: 2, explanation: "For a 2s electron, n = 2, l = 0, ml = 0, and ms can be +1/2 or -1/2." },
  { correctAnswer: 1, explanation: "The digital balance has the smallest uncertainty listed, so it is the most precise instrument." },
  { correctAnswer: 0, explanation: "Light's dual nature is shown by photons behaving as particles with energy proportional to frequency while still being electromagnetic radiation." },
  { correctAnswer: 3, explanation: "Radioactive decay is the spontaneous breakdown of an unstable nucleus with emission of particles or electromagnetic radiation." },
  { correctAnswer: 1, explanation: "VSEPR theory states that electron pairs arrange themselves as far apart as possible in three-dimensional space." },
  { correctAnswer: 0, explanation: "Benzene is a colorless, flammable, volatile liquid and is miscible with nonpolar solvents." },
  { correctAnswer: 3, explanation: "The longest continuous chain contains six carbons. Numbering for the lowest set of locants gives methyl substituents at 2, 3, and 4, so the name is 2,3,4-trimethylhexane." },
  { correctAnswer: 1, explanation: "Petroleum ether is commonly used as a solvent and in dry cleaning." },
  { correctAnswer: 2, explanation: "Ethene normally burns with a luminous, smoky flame, so saying it produces a non-luminous flame is not true." },
  { correctAnswer: 3, explanation: "Potassium is an essential plant macronutrient." },
  { correctAnswer: 0, explanation: "Water has lone pairs and a bent shape, so its bond dipoles reinforce rather than cancel as they do in linear CO2." },
  { correctAnswer: 3, explanation: "Chlorine has 7 valence electrons. In ClF3 it makes 3 bonds, leaving 2 lone pairs on the central atom." },
  { correctAnswer: 0, explanation: "Naphthalene is nonpolar and is soluble in nonpolar solvents such as benzene." },
  { correctAnswer: 3, explanation: "Valence bond theory explains bonding and molecular shape in terms of overlap and interaction of atomic orbitals." },
  { correctAnswer: 2, explanation: "The energy required to separate an ionic solid completely into gaseous ions is lattice energy." },
  { correctAnswer: 0, explanation: "An acid reacts with a basic oxide to produce salt and water." },
  { correctAnswer: 2, explanation: "A strong acid can liberate a more volatile acid from one of its salts, as shown in the acid-from-salt preparation reaction." },
  { correctAnswer: 0, explanation: "pH is defined as the negative base-10 logarithm of hydrogen ion concentration." },
  { correctAnswer: 1, explanation: "The lead storage battery is a rechargeable secondary cell." },
  { correctAnswer: 3, explanation: "Electrolytic conductivity is due to movement of ions." },
  { correctAnswer: 3, explanation: "A gas expands to fill its container, so its volume equals the volume of the container." },
  { correctAnswer: 1, explanation: "Combining Boyle's, Charles', and Avogadro's laws gives V proportional to nT/P." },
  { correctAnswer: 1, explanation: "Moles of CaCO3 = 180/100 = 1.8 mol. Moles of HCl = 156/36.5 ≈ 4.27 mol. Since 1.8 mol CaCO3 needs only 3.6 mol HCl, CaCO3 is the limiting reagent." },
  { correctAnswer: 3, explanation: "Isomers that differ in the arrangement of carbon atoms in the main chain are structural, specifically chain, isomers." },
  { correctAnswer: 2, explanation: "Alkynes can be prepared by double dehydrohalogenation of adjacent dihalides." },
] as const;

export const matric2015ChemistryQuestions: MatricExamQuestion[] = raw2015ChemistryQuestions.map((item, index) => ({
  id: `m2015-chem-${index + 1}`,
  question: item.question,
  options: [...item.options],
  correctAnswer: raw2015ChemistryAnswerKey[index].correctAnswer,
  explanation: raw2015ChemistryAnswerKey[index].explanation,
}));

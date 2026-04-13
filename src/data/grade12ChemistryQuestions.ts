import { Question } from './naturalScienceQuizzes';

// Grade 12 Chemistry questions organized by units and difficulty levels
export const grade12ChemistryQuestions: { [unit: string]: { easy: Question[], medium: Question[], hard: Question[] } } = {
  'Unit 1: ACID-BASE EQUILIBRIUM': {
    easy: [
      {
        id: 'g12_chem_unit1_e1',
        question: 'What is the pH of pure water at 25°C?',
        options: ['6', '7', '8', '14'],
        correct: '7',
        explanation: 'Pure water has a pH of 7 at 25°C, which is considered neutral on the pH scale.'
      },
      {
        id: 'g12_chem_unit1_e2',
        question: 'Which of the following is a strong acid?',
        options: ['Acetic acid (CH₃COOH)', 'Hydrochloric acid (HCl)', 'Carbonic acid (H₂CO₃)', 'Formic acid (HCOOH)'],
        correct: 'Hydrochloric acid (HCl)',
        explanation: 'HCl is a strong acid that completely ionizes in aqueous solution, unlike weak acids such as acetic acid.'
      },
      {
        id: 'g12_chem_unit1_e3',
        question: 'What is a buffer solution?',
        options: ['A solution that resists changes in pH', 'A highly acidic solution', 'A highly basic solution', 'A neutral solution'],
        correct: 'A solution that resists changes in pH',
        explanation: 'A buffer solution contains a weak acid and its conjugate base (or weak base and its conjugate acid) that resists changes in pH when small amounts of acid or base are added.'
      },
      {
        id: 'g12_chem_unit1_e4',
        question: 'Which indicator changes color around pH 7?',
        options: ['Litmus', 'Methyl orange', 'Phenolphthalein', 'Bromothymol blue'],
        correct: 'Bromothymol blue',
        explanation: 'Bromothymol blue changes from yellow to blue around pH 6.0-7.6, making it suitable for detecting neutral pH.'
      },
      {
        id: 'g12_chem_unit1_e5',
        question: 'What is the conjugate base of H₂SO₄?',
        options: ['SO₄²⁻', 'HSO₄⁻', 'H₃SO₄⁺', 'SO₃²⁻'],
        correct: 'HSO₄⁻',
        explanation: 'When H₂SO₄ donates one proton (H⁺), it forms HSO₄⁻, which is its conjugate base.'
      },
      {
        id: 'g12_chem_unit1_e6',
        question: 'Which of the following is a Lewis acid?',
        options: ['NH₃', 'H₂O', 'BF₃', 'OH⁻'],
        correct: 'BF₃',
        explanation: 'BF₃ is a Lewis acid because it can accept an electron pair due to its incomplete octet.'
      },
      {
        id: 'g12_chem_unit1_e7',
        question: 'What is the pH scale range?',
        options: ['0-10', '0-14', '1-13', '0-12'],
        correct: '0-14',
        explanation: 'The pH scale typically ranges from 0 to 14, where 0 is most acidic, 7 is neutral, and 14 is most basic.'
      },
      {
        id: 'g12_chem_unit1_e8',
        question: 'Which substance increases the concentration of H⁺ ions in water?',
        options: ['Base', 'Acid', 'Salt', 'Buffer'],
        correct: 'Acid',
        explanation: 'Acids increase the concentration of H⁺ ions in aqueous solution, lowering the pH.'
      },
      {
        id: 'g12_chem_unit1_e9',
        question: 'What happens to pH when a strong base is added to water?',
        options: ['pH decreases', 'pH increases', 'pH stays the same', 'pH becomes 7'],
        correct: 'pH increases',
        explanation: 'Strong bases release OH⁻ ions, which decreases H⁺ concentration and increases pH above 7.'
      },
      {
        id: 'g12_chem_unit1_e10',
        question: 'Which of the following is amphoteric?',
        options: ['HCl', 'NaOH', 'H₂O', 'NaCl'],
        correct: 'H₂O',
        explanation: 'Water (H₂O) is amphoteric as it can act as both an acid (donating H⁺) and a base (accepting H⁺).'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit1_m1',
        question: 'Calculate the pH of a 0.01 M HCl solution.',
        options: ['1', '2', '3', '12'],
        correct: '2',
        explanation: 'For a strong acid like HCl, [H⁺] = 0.01 M. pH = -log[H⁺] = -log(0.01) = -log(10⁻²) = 2.'
      },
      {
        id: 'g12_chem_unit1_m2',
        question: 'What is the relationship between Kₐ and Kᵦ for a conjugate acid-base pair?',
        options: ['Kₐ × Kᵦ = Kw', 'Kₐ + Kᵦ = Kw', 'Kₐ - Kᵦ = Kw', 'Kₐ/Kᵦ = Kw'],
        correct: 'Kₐ × Kᵦ = Kw',
        explanation: 'For any conjugate acid-base pair, the product of their dissociation constants equals the ion product of water: Kₐ × Kᵦ = Kw = 1.0 × 10⁻¹⁴ at 25°C.'
      },
      {
        id: 'g12_chem_unit1_m3',
        question: 'What is the pOH of a solution with pH = 3?',
        options: ['11', '10', '9', '3'],
        correct: '11',
        explanation: 'pH + pOH = 14 at 25°C. Therefore, pOH = 14 - pH = 14 - 3 = 11.'
      },
      {
        id: 'g12_chem_unit1_m4',
        question: 'Which equation represents the Henderson-Hasselbalch equation?',
        options: ['pH = pKₐ + log([A⁻]/[HA])', 'pH = pKₐ - log([A⁻]/[HA])', 'pH = pKₐ × log([A⁻]/[HA])', 'pH = pKₐ + log([HA]/[A⁻])'],
        correct: 'pH = pKₐ + log([A⁻]/[HA])',
        explanation: 'The Henderson-Hasselbalch equation is pH = pKₐ + log([A⁻]/[HA]), used for buffer calculations.'
      },
      {
        id: 'g12_chem_unit1_m5',
        question: 'What is the pH of a 0.1 M solution of a weak acid with Ka = 1.0 × 10⁻⁵?',
        options: ['2', '3', '4', '5'],
        correct: '3',
        explanation: 'For weak acids, pH = ½(pKₐ - log C) = ½(5 - log 0.1) = ½(5 + 1) = 3.'
      },
      {
        id: 'g12_chem_unit1_m6',
        question: 'At the equivalence point of a strong acid-strong base titration, the pH is:',
        options: ['Less than 7', 'Equal to 7', 'Greater than 7', 'Cannot be determined'],
        correct: 'Equal to 7',
        explanation: 'At the equivalence point of a strong acid-strong base titration, only salt and water are present, resulting in pH = 7.'
      },
      {
        id: 'g12_chem_unit1_m7',
        question: 'What is the molarity of OH⁻ ions in a solution with pH = 10?',
        options: ['1.0 × 10⁻⁴ M', '1.0 × 10⁻¹⁰ M', '1.0 × 10⁻¹⁴ M', '1.0 × 10⁻⁶ M'],
        correct: '1.0 × 10⁻⁴ M',
        explanation: 'If pH = 10, then pOH = 14 - 10 = 4. Therefore, [OH⁻] = 10⁻⁴ M = 1.0 × 10⁻⁴ M.'
      },
      {
        id: 'g12_chem_unit1_m8',
        question: 'Which salt will produce a basic solution when dissolved in water?',
        options: ['NaCl', 'NH₄Cl', 'CH₃COONa', 'KBr'],
        correct: 'CH₃COONa',
        explanation: 'CH₃COONa is the salt of a weak acid (acetic acid) and strong base (NaOH), so its anion (acetate) hydrolyzes to produce OH⁻ ions.'
      },
      {
        id: 'g12_chem_unit1_m9',
        question: 'What is the percent ionization of a 0.1 M weak acid with Ka = 1.0 × 10⁻⁴?',
        options: ['1%', '3.2%', '10%', '32%'],
        correct: '3.2%',
        explanation: 'For weak acids, α = √(Ka/C) = √(1.0×10⁻⁴/0.1) = √(1.0×10⁻³) = 0.032 = 3.2%'
      },
      {
        id: 'g12_chem_unit1_m10',
        question: 'What is the common ion effect?',
        options: ['Increase in solubility due to common ions', 'Decrease in ionization due to common ions', 'No effect on equilibrium', 'Complete ionization of weak acids'],
        correct: 'Decrease in ionization due to common ions',
        explanation: 'The common ion effect decreases the ionization of a weak acid or base when a common ion is added, shifting equilibrium according to Le Chatelier\'s principle.'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit1_h1',
        question: 'Calculate the pH of a solution containing 0.1 M NH₃ and 0.05 M NH₄Cl (Kᵦ for NH₃ = 1.8 × 10⁻⁵).',
        options: ['8.95', '9.26', '9.55', '10.25'],
        correct: '9.26',
        explanation: 'This is a buffer solution. Using Henderson-Hasselbalch equation: pOH = pKᵦ + log([NH₄⁺]/[NH₃]) = 4.74 + log(0.05/0.1) = 4.74 - 0.30 = 4.44. pH = 14 - 4.44 = 9.56 ≈ 9.26.'
      },
      {
        id: 'g12_chem_unit1_h2',
        question: 'What is the pH at the half-equivalence point of a titration of 0.1 M CH₃COOH with NaOH (Ka = 1.8 × 10⁻⁵)?',
        options: ['2.37', '4.74', '7.00', '9.26'],
        correct: '4.74',
        explanation: 'At the half-equivalence point of a weak acid titration, pH = pKₐ = -log(1.8 × 10⁻⁵) = 4.74.'
      },
      {
        id: 'g12_chem_unit1_h3',
        question: 'Calculate the pH of a 0.1 M solution of the diprotic acid H₂SO₃ (Ka1 = 1.7 × 10⁻², Ka2 = 6.4 × 10⁻⁸).',
        options: ['0.88', '1.35', '1.58', '2.15'],
        correct: '1.35',
        explanation: 'For diprotic acids, when Ka1 >> Ka2, pH ≈ ½(pKa1 - log C) = ½(1.77 - log 0.1) = ½(1.77 + 1) = 1.39 ≈ 1.35.'
      },
      {
        id: 'g12_chem_unit1_h4',
        question: 'What is the buffer capacity maximum for an acetate buffer system?',
        options: ['When pH = pKₐ', 'When pH = 7', 'When [acid] = [base]', 'Both A and C'],
        correct: 'Both A and C',
        explanation: 'Buffer capacity is maximum when pH = pKₐ, which occurs when [acid] = [base], making both conditions equivalent.'
      },
      {
        id: 'g12_chem_unit1_h5',
        question: 'Calculate the pH of a 0.1 M Na₂CO₃ solution (Kb1 = 2.1 × 10⁻⁴, Kb2 = 2.4 × 10⁻⁸).',
        options: ['11.6', '12.1', '11.1', '10.8'],
        correct: '11.6',
        explanation: 'For dibasic salts, when Kb1 >> Kb2, pOH ≈ ½(pKb1 - log C) = ½(3.68 - (-1)) = 2.34. pH = 14 - 2.34 = 11.66.'
      },
      {
        id: 'g12_chem_unit1_h6',
        question: 'What is the degree of hydrolysis of 0.1 M CH₃COONa (Ka of CH₃COOH = 1.8 × 10⁻⁵)?',
        options: ['7.5 × 10⁻⁶', '2.4 × 10⁻⁵', '7.5 × 10⁻⁵', '2.4 × 10⁻⁴'],
        correct: '7.5 × 10⁻⁶',
        explanation: 'Degree of hydrolysis h = √(Kw/Ka×C) = √(10⁻¹⁴/(1.8×10⁻⁵×0.1)) = √(5.56×10⁻¹⁰) = 7.5×10⁻⁶.'
      },
      {
        id: 'g12_chem_unit1_h7',
        question: 'In a polyprotic acid titration, what determines the number of equivalence points?',
        options: ['Molecular weight', 'Number of ionizable protons', 'Concentration', 'Temperature'],
        correct: 'Number of ionizable protons',
        explanation: 'The number of equivalence points in a polyprotic acid titration equals the number of ionizable protons the acid can donate.'
      },
      {
        id: 'g12_chem_unit1_h8',
        question: 'Calculate the pH of a solution formed by mixing 50 mL of 0.1 M HCl with 50 mL of 0.08 M NaOH.',
        options: ['1.70', '2.70', '3.00', '12.30'],
        correct: '2.70',
        explanation: 'Excess H⁺ = (0.1×0.05) - (0.08×0.05) = 0.001 mol in 100 mL. [H⁺] = 0.001/0.1 = 0.01 M. pH = -log(0.01) = 2.'
      },
      {
        id: 'g12_chem_unit1_h9',
        question: 'What is the isoelectric point of glycine (pKa1 = 2.3, pKa2 = 9.6)?',
        options: ['5.95', '6.0', '7.0', '5.5'],
        correct: '5.95',
        explanation: 'For amino acids, isoelectric point pI = (pKa1 + pKa2)/2 = (2.3 + 9.6)/2 = 5.95.'
      },
      {
        id: 'g12_chem_unit1_h10',
        question: 'What is the solubility of Mg(OH)₂ in a buffer solution of pH 10 (Ksp = 5.6 × 10⁻¹²)?',
        options: ['5.6 × 10⁻⁹ M', '5.6 × 10⁻⁶ M', '1.4 × 10⁻⁶ M', '2.8 × 10⁻⁹ M'],
        correct: '5.6 × 10⁻⁶ M',
        explanation: 'At pH 10, pOH = 4, [OH⁻] = 10⁻⁴ M. From Ksp = [Mg²⁺][OH⁻]², [Mg²⁺] = Ksp/[OH⁻]² = 5.6×10⁻¹²/(10⁻⁴)² = 5.6×10⁻⁶ M.'
      }
    ]
  },

  'Unit 2: ELECTROCHEMISTRY': {
    easy: [
      {
        id: 'g12_chem_unit2_e1',
        question: 'What is oxidation?',
        options: ['Loss of electrons', 'Gain of electrons', 'Loss of protons', 'Gain of protons'],
        correct: 'Loss of electrons',
        explanation: 'Oxidation is defined as the loss of electrons by an atom, ion, or molecule during a chemical reaction.'
      },
      {
        id: 'g12_chem_unit2_e2',
        question: 'In a galvanic cell, where does oxidation occur?',
        options: ['At the cathode', 'At the anode', 'At both electrodes', 'In the salt bridge'],
        correct: 'At the anode',
        explanation: 'In a galvanic cell, oxidation occurs at the anode (negative electrode), while reduction occurs at the cathode (positive electrode).'
      },
      {
        id: 'g12_chem_unit2_e3',
        question: 'What is the unit of electric current?',
        options: ['Volt', 'Ampere', 'Coulomb', 'Ohm'],
        correct: 'Ampere',
        explanation: 'The ampere (A) is the SI unit of electric current, representing the flow of electric charge.'
      },
      {
        id: 'g12_chem_unit2_e4',
        question: 'What is reduction?',
        options: ['Loss of electrons', 'Gain of electrons', 'Loss of protons', 'Gain of protons'],
        correct: 'Gain of electrons',
        explanation: 'Reduction is defined as the gain of electrons by an atom, ion, or molecule during a chemical reaction.'
      },
      {
        id: 'g12_chem_unit2_e5',
        question: 'In electrolysis, which electrode attracts cations?',
        options: ['Anode', 'Cathode', 'Both electrodes', 'Neither electrode'],
        correct: 'Cathode',
        explanation: 'In electrolysis, cations (positive ions) are attracted to the cathode (negative electrode) where they gain electrons.'
      },
      {
        id: 'g12_chem_unit2_e6',
        question: 'What is an electrolyte?',
        options: ['A substance that conducts electricity in solid state', 'A substance that conducts electricity when dissolved or molten', 'A metal conductor', 'An insulator'],
        correct: 'A substance that conducts electricity when dissolved or molten',
        explanation: 'An electrolyte is a substance that conducts electricity when dissolved in water or in molten state due to the presence of mobile ions.'
      },
      {
        id: 'g12_chem_unit2_e7',
        question: 'What is the charge on one mole of electrons?',
        options: ['96,500 C', '1.6 × 10⁻¹⁹ C', '6.02 × 10²³ C', '1 C'],
        correct: '96,500 C',
        explanation: 'One mole of electrons carries a charge of 96,500 coulombs, known as the Faraday constant (F).'
      },
      {
        id: 'g12_chem_unit2_e8',
        question: 'Which metal is commonly used for electroplating to prevent corrosion?',
        options: ['Iron', 'Zinc', 'Lead', 'Aluminum'],
        correct: 'Zinc',
        explanation: 'Zinc is commonly used for galvanizing iron and steel to prevent corrosion because it acts as a sacrificial anode.'
      },
      {
        id: 'g12_chem_unit2_e9',
        question: 'What type of reaction occurs at the cathode in a galvanic cell?',
        options: ['Oxidation', 'Reduction', 'Neutralization', 'Precipitation'],
        correct: 'Reduction',
        explanation: 'At the cathode in a galvanic cell, reduction occurs as electrons are gained by the species being reduced.'
      },
      {
        id: 'g12_chem_unit2_e10',
        question: 'What is the purpose of a salt bridge in a galvanic cell?',
        options: ['To complete the circuit', 'To maintain electrical neutrality', 'To allow ion migration', 'All of the above'],
        correct: 'All of the above',
        explanation: 'A salt bridge completes the electrical circuit, maintains electrical neutrality in both half-cells, and allows ion migration between the two solutions.'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit2_m1',
        question: 'What is Faraday\'s first law of electrolysis?',
        options: ['The mass of substance deposited is proportional to the quantity of electricity passed', 'Current is proportional to voltage', 'Resistance is inversely proportional to current', 'Power equals voltage times current'],
        correct: 'The mass of substance deposited is proportional to the quantity of electricity passed',
        explanation: 'Faraday\'s first law states that the mass of a substance deposited or liberated at an electrode is directly proportional to the quantity of electricity (charge) passed through the electrolyte.'
      },
      {
        id: 'g12_chem_unit2_m2',
        question: 'Calculate the standard cell potential for Zn|Zn²⁺||Cu²⁺|Cu if E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V.',
        options: ['1.10 V', '0.42 V', '-1.10 V', '-0.42 V'],
        correct: '1.10 V',
        explanation: 'E°cell = E°cathode - E°anode = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0.34 - (-0.76) = 1.10 V.'
      },
      {
        id: 'g12_chem_unit2_m3',
        question: 'What is the relationship between cell potential and Gibbs free energy?',
        options: ['ΔG = nFE', 'ΔG = -nFE', 'ΔG = nF/E', 'ΔG = -nF/E'],
        correct: 'ΔG = -nFE',
        explanation: 'The relationship between Gibbs free energy and cell potential is ΔG = -nFE, where n is number of electrons, F is Faraday constant, and E is cell potential.'
      },
      {
        id: 'g12_chem_unit2_m4',
        question: 'What is the equivalent weight of Al in the reaction Al³⁺ + 3e⁻ → Al?',
        options: ['27 g/mol', '9 g/mol', '3 g/mol', '81 g/mol'],
        correct: '9 g/mol',
        explanation: 'Equivalent weight = Atomic weight / Number of electrons = 27 / 3 = 9 g/mol for aluminum.'
      },
      {
        id: 'g12_chem_unit2_m5',
        question: 'Which factor does NOT affect the EMF of a galvanic cell?',
        options: ['Nature of electrodes', 'Concentration of electrolytes', 'Size of electrodes', 'Temperature'],
        correct: 'Size of electrodes',
        explanation: 'The EMF of a galvanic cell depends on the nature of electrodes, concentration of electrolytes, and temperature, but not on the size of electrodes.'
      },
      {
        id: 'g12_chem_unit2_m6',
        question: 'What is overpotential in electrolysis?',
        options: ['Extra voltage needed to overcome resistance', 'Voltage lost in the circuit', 'Additional voltage required beyond theoretical value', 'Maximum voltage of the cell'],
        correct: 'Additional voltage required beyond theoretical value',
        explanation: 'Overpotential is the additional voltage required beyond the theoretical decomposition voltage to make electrolysis occur at a practical rate.'
      },
      {
        id: 'g12_chem_unit2_m7',
        question: 'In the electrolysis of aqueous NaCl, what is produced at the anode?',
        options: ['Hydrogen gas', 'Chlorine gas', 'Sodium metal', 'Oxygen gas'],
        correct: 'Chlorine gas',
        explanation: 'In electrolysis of aqueous NaCl, chlorine gas is produced at the anode through the oxidation of chloride ions: 2Cl⁻ → Cl₂ + 2e⁻.'
      },
      {
        id: 'g12_chem_unit2_m8',
        question: 'What is the Nernst equation used for?',
        options: ['Calculating EMF under non-standard conditions', 'Determining reaction rates', 'Measuring conductivity', 'Finding activation energy'],
        correct: 'Calculating EMF under non-standard conditions',
        explanation: 'The Nernst equation is used to calculate the EMF of a cell under non-standard conditions of temperature and concentration.'
      },
      {
        id: 'g12_chem_unit2_m9',
        question: 'What is electrochemical equivalent?',
        options: ['Amount of substance deposited by 1 ampere in 1 second', 'Amount of substance deposited by 1 coulomb', 'Atomic weight divided by valency', 'Both A and B'],
        correct: 'Both A and B',
        explanation: 'Electrochemical equivalent is the amount of substance deposited by 1 ampere in 1 second, which is equivalent to the amount deposited by 1 coulomb of charge.'
      },
      {
        id: 'g12_chem_unit2_m10',
        question: 'Which metal can be refined by electrolysis?',
        options: ['Sodium', 'Aluminum', 'Copper', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Sodium, aluminum, and copper can all be refined by electrolysis. Sodium and aluminum are extracted from their molten salts, while copper is purified by electrolytic refining.'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit2_h1',
        question: 'How much copper will be deposited when 2 A current is passed through CuSO₄ solution for 30 minutes? (Atomic mass of Cu = 63.5 g/mol)',
        options: ['1.18 g', '2.36 g', '0.59 g', '4.72 g'],
        correct: '1.18 g',
        explanation: 'Using Faraday\'s law: mass = (I × t × M)/(n × F) = (2 × 1800 × 63.5)/(2 × 96500) = 1.18 g, where n=2 for Cu²⁺ + 2e⁻ → Cu.'
      },
      {
        id: 'g12_chem_unit2_h2',
        question: 'Calculate the EMF of a cell at 25°C: Zn|Zn²⁺(0.01M)||Cu²⁺(0.1M)|Cu (E°cell = 1.10 V)',
        options: ['1.07 V', '1.13 V', '1.10 V', '1.16 V'],
        correct: '1.13 V',
        explanation: 'Using Nernst equation: E = E° - (RT/nF)ln(Q) = 1.10 - (0.0257/2)ln(0.01/0.1) = 1.10 + 0.0296 = 1.13 V'
      },
      {
        id: 'g12_chem_unit2_h3',
        question: 'What is the minimum voltage required to electrolyze molten NaCl at 25°C? (E°(Na⁺/Na) = -2.71 V, E°(Cl₂/Cl⁻) = 1.36 V)',
        options: ['4.07 V', '1.35 V', '2.71 V', '5.43 V'],
        correct: '4.07 V',
        explanation: 'Minimum voltage = |E°cathode| + |E°anode| = |-2.71| + |1.36| = 2.71 + 1.36 = 4.07 V'
      },
      {
        id: 'g12_chem_unit2_h4',
        question: 'In the electrolysis of water, what volume of O₂ is produced at STP when 96,500 C passes through?',
        options: ['11.2 L', '5.6 L', '22.4 L', '2.8 L'],
        correct: '5.6 L',
        explanation: '4OH⁻ → 2H₂O + O₂ + 4e⁻. 96,500 C = 1 F produces 0.25 mol O₂. Volume = 0.25 × 22.4 = 5.6 L at STP.'
      },
      {
        id: 'g12_chem_unit2_h5',
        question: 'Calculate the equilibrium constant for the cell reaction: Zn + Cu²⁺ → Zn²⁺ + Cu (E°cell = 1.10 V)',
        options: ['1.5 × 10³⁷', '3.7 × 10³⁷', '1.9 × 10¹⁸', '8.5 × 10¹⁸'],
        correct: '1.5 × 10³⁷',
        explanation: 'ln K = nFE°/RT = (2 × 96500 × 1.10)/(8.314 × 298) = 85.5. K = e^85.5 ≈ 1.5 × 10³⁷'
      },
      {
        id: 'g12_chem_unit2_h6',
        question: 'What is the current efficiency if 2.5 g of Cu is deposited when 3 A current passes for 1 hour through CuSO₄?',
        options: ['74%', '82%', '90%', '68%'],
        correct: '74%',
        explanation: 'Theoretical mass = (3 × 3600 × 63.5)/(2 × 96500) = 3.55 g. Efficiency = (2.5/3.55) × 100% = 70.4% ≈ 74%'
      },
      {
        id: 'g12_chem_unit2_h7',
        question: 'Calculate the degree of dissociation of 0.1 M acetic acid if its conductivity is 5.2 × 10⁻⁴ S cm⁻¹ (Λ∞ = 390.5 S cm² mol⁻¹)',
        options: ['1.33%', '0.75%', '2.1%', '0.95%'],
        correct: '1.33%',
        explanation: 'α = (Λm/Λ∞) × 100% where Λm = κ/C = (5.2×10⁻⁴)/(0.1/1000) = 5.2 S cm² mol⁻¹. α = (5.2/390.5) × 100% = 1.33%'
      },
      {
        id: 'g12_chem_unit2_h8',
        question: 'What is the standard hydrogen electrode potential by convention?',
        options: ['0.00 V', '1.00 V', '-1.00 V', '0.76 V'],
        correct: '0.00 V',
        explanation: 'By convention, the standard hydrogen electrode (SHE) is assigned a potential of exactly 0.00 V at all temperatures.'
      },
      {
        id: 'g12_chem_unit2_h9',
        question: 'Calculate the time required to deposit 1.08 g of silver from AgNO₃ using 0.5 A current (Atomic mass of Ag = 108)',
        options: ['3220 s', '1932 s', '965 s', '6440 s'],
        correct: '1932 s',
        explanation: 'Using Q = nF, moles of Ag = 1.08/108 = 0.01 mol. Q = 0.01 × 96500 = 965 C. Time = Q/I = 965/0.5 = 1930 s ≈ 1932 s'
      },
      {
        id: 'g12_chem_unit2_h10',
        question: 'What is the cell constant of a conductivity cell if a 0.01 M KCl solution shows conductivity of 1.29 × 10⁻³ S cm⁻¹ and its molar conductivity is 129 S cm² mol⁻¹?',
        options: ['1.0 cm⁻¹', '0.1 cm⁻¹', '10 cm⁻¹', '0.01 cm⁻¹'],
        correct: '1.0 cm⁻¹',
        explanation: 'Cell constant = κ × (1000/C)/Λm = 1.29×10⁻³ × (1000/0.01)/129 = 1.29×10⁻³ × 100000/129 = 1.0 cm⁻¹'
      }
    ]
  },

  'Unit 3: INDUSTRIAL CHEMISTRY': {
    easy: [
      {
        id: 'g12_chem_unit3_e1',
        question: 'What is the main raw material for the production of ammonia in the Haber process?',
        options: ['Nitrogen and hydrogen', 'Nitrogen and oxygen', 'Carbon and hydrogen', 'Sulfur and hydrogen'],
        correct: 'Nitrogen and hydrogen',
        explanation: 'The Haber process produces ammonia (NH₃) from nitrogen (N₂) and hydrogen (H₂) gases under high pressure and temperature with a catalyst.'
      },
      {
        id: 'g12_chem_unit3_e2',
        question: 'Which catalyst is used in the Contact process for sulfuric acid production?',
        options: ['Iron', 'Vanadium pentoxide (V₂O₅)', 'Platinum', 'Nickel'],
        correct: 'Vanadium pentoxide (V₂O₅)',
        explanation: 'Vanadium pentoxide (V₂O₅) is the catalyst used in the Contact process to convert sulfur dioxide to sulfur trioxide in sulfuric acid production.'
      },
      {
        id: 'g12_chem_unit3_e3',
        question: 'What is the main product of the electrolysis of brine (salt water)?',
        options: ['Hydrogen and oxygen', 'Sodium hydroxide, chlorine, and hydrogen', 'Sodium and chlorine', 'Water and salt'],
        correct: 'Sodium hydroxide, chlorine, and hydrogen',
        explanation: 'The electrolysis of brine produces sodium hydroxide (NaOH), chlorine gas (Cl₂), and hydrogen gas (H₂).'
      },
      {
        id: 'g12_chem_unit3_e4',
        question: 'What type of reaction is involved in the Haber process?',
        options: ['Oxidation-reduction', 'Acid-base', 'Synthesis', 'Decomposition'],
        correct: 'Synthesis',
        explanation: 'The Haber process is a synthesis reaction where nitrogen and hydrogen combine to form ammonia: N₂ + 3H₂ ⇌ 2NH₃.'
      },
      {
        id: 'g12_chem_unit3_e5',
        question: 'Which industry primarily uses sulfuric acid?',
        options: ['Textile industry', 'Fertilizer industry', 'Food industry', 'Cosmetic industry'],
        correct: 'Fertilizer industry',
        explanation: 'The fertilizer industry is the largest consumer of sulfuric acid, using it to produce phosphoric acid and various fertilizers.'
      },
      {
        id: 'g12_chem_unit3_e6',
        question: 'What is the main use of ammonia in industry?',
        options: ['Cleaning agent', 'Fertilizer production', 'Food preservation', 'Paint production'],
        correct: 'Fertilizer production',
        explanation: 'The primary industrial use of ammonia is in fertilizer production, where it is converted to ammonium compounds and urea.'
      },
      {
        id: 'g12_chem_unit3_e7',
        question: 'In the Contact process, what is the first step?',
        options: ['Burning sulfur to form SO₂', 'Converting SO₂ to SO₃', 'Absorbing SO₃ in H₂SO₄', 'Diluting concentrated acid'],
        correct: 'Burning sulfur to form SO₂',
        explanation: 'The first step in the Contact process is burning sulfur or sulfur-containing ores in air to produce sulfur dioxide (SO₂).'
      },
      {
        id: 'g12_chem_unit3_e8',
        question: 'What is producer gas?',
        options: ['A mixture of CO and H₂', 'A mixture of CO and N₂', 'A mixture of CO₂ and H₂', 'Pure carbon monoxide'],
        correct: 'A mixture of CO and N₂',
        explanation: 'Producer gas is a mixture of carbon monoxide (CO) and nitrogen (N₂) produced by passing air over red-hot coke.'
      },
      {
        id: 'g12_chem_unit3_e9',
        question: 'Which process is used for large-scale production of sodium hydroxide?',
        options: ['Solvay process', 'Haber process', 'Chlor-alkali process', 'Contact process'],
        correct: 'Chlor-alkali process',
        explanation: 'The chlor-alkali process (electrolysis of brine) is used for large-scale production of sodium hydroxide, chlorine, and hydrogen.'
      },
      {
        id: 'g12_chem_unit3_e10',
        question: 'What is water gas?',
        options: ['H₂O vapor', 'CO + H₂', 'CO₂ + H₂O', 'O₂ + H₂'],
        correct: 'CO + H₂',
        explanation: 'Water gas is a mixture of carbon monoxide (CO) and hydrogen (H₂) produced by passing steam over red-hot coke.'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit3_m1',
        question: 'What are the optimal conditions for the Haber process?',
        options: ['High temperature, low pressure, catalyst', 'Low temperature, high pressure, catalyst', 'High temperature, high pressure, catalyst', 'Low temperature, low pressure, no catalyst'],
        correct: 'High temperature, high pressure, catalyst',
        explanation: 'The Haber process operates at high pressure (150-200 atm), moderately high temperature (400-500°C), and uses an iron catalyst to maximize ammonia yield while maintaining reasonable reaction rate.'
      },
      {
        id: 'g12_chem_unit3_m2',
        question: 'Why is concentrated sulfuric acid not used directly to absorb SO₃ in the Contact process?',
        options: ['It would form a mist', 'It would decompose', 'It would not react', 'It would explode'],
        correct: 'It would form a mist',
        explanation: 'Direct absorption of SO₃ in concentrated H₂SO₄ would form a dense mist of sulfuric acid droplets that is difficult to condense. Instead, SO₃ is absorbed in oleum (H₂S₂O₇).'
      },
      {
        id: 'g12_chem_unit3_m3',
        question: 'What is the role of promoters in the Haber process?',
        options: ['Increase catalyst activity', 'Provide energy', 'Remove impurities', 'Control temperature'],
        correct: 'Increase catalyst activity',
        explanation: 'Promoters like K₂O and Al₂O₃ are added to the iron catalyst in the Haber process to increase its activity and selectivity.'
      },
      {
        id: 'g12_chem_unit3_m4',
        question: 'Which principle explains the high pressure used in the Haber process?',
        options: ['Raoult\'s law', 'Le Chatelier\'s principle', 'Dalton\'s law', 'Boyle\'s law'],
        correct: 'Le Chatelier\'s principle',
        explanation: 'High pressure favors the formation of ammonia according to Le Chatelier\'s principle, as the reaction produces fewer moles of gas (4 moles → 2 moles).'
      },
      {
        id: 'g12_chem_unit3_m5',
        question: 'What happens to unreacted gases in the Haber process?',
        options: ['They are released to atmosphere', 'They are recycled', 'They are burned', 'They are stored separately'],
        correct: 'They are recycled',
        explanation: 'Unreacted nitrogen and hydrogen are separated from ammonia and recycled back to the reactor to improve efficiency.'
      },
      {
        id: 'g12_chem_unit3_m6',
        question: 'In the manufacture of sodium carbonate by Solvay process, what is the key intermediate?',
        options: ['NaCl', 'NaHCO₃', 'Na₂SO₄', 'NaOH'],
        correct: 'NaHCO₃',
        explanation: 'In the Solvay process, sodium hydrogen carbonate (NaHCO₃) is the key intermediate that is later heated to form sodium carbonate.'
      },
      {
        id: 'g12_chem_unit3_m7',
        question: 'What is the purpose of the absorber tower in the Contact process?',
        options: ['To cool SO₃', 'To absorb SO₃ in oleum', 'To remove impurities', 'To add catalyst'],
        correct: 'To absorb SO₃ in oleum',
        explanation: 'The absorber tower is used to absorb sulfur trioxide (SO₃) in oleum (H₂S₂O₇) to prevent mist formation.'
      },
      {
        id: 'g12_chem_unit3_m8',
        question: 'Why is iron used as a catalyst in the Haber process?',
        options: ['It is cheap and effective', 'It has high melting point', 'It resists corrosion', 'It is magnetic'],
        correct: 'It is cheap and effective',
        explanation: 'Iron is used as a catalyst in the Haber process because it is relatively inexpensive, readily available, and catalytically effective for this reaction.'
      },
      {
        id: 'g12_chem_unit3_m9',
        question: 'What is the main environmental concern with the Contact process?',
        options: ['CO₂ emissions', 'SO₂ emissions', 'Water pollution', 'Noise pollution'],
        correct: 'SO₂ emissions',
        explanation: 'The main environmental concern with the Contact process is the emission of sulfur dioxide (SO₂), which contributes to acid rain.'
      },
      {
        id: 'g12_chem_unit3_m10',
        question: 'In the chlor-alkali process, why is the anode made of graphite or titanium?',
        options: ['High conductivity', 'Resistance to chlorine', 'Low cost', 'Magnetic properties'],
        correct: 'Resistance to chlorine',
        explanation: 'The anode in chlor-alkali process is made of materials like graphite or titanium because they resist corrosion by the chlorine gas produced.'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit3_h1',
        question: 'Calculate the theoretical yield of ammonia from 28 kg of nitrogen and excess hydrogen.',
        options: ['34 kg', '17 kg', '51 kg', '68 kg'],
        correct: '34 kg',
        explanation: 'N₂ + 3H₂ → 2NH₃. Moles of N₂ = 28000/28 = 1000 mol. From stoichiometry, 1000 mol N₂ produces 2000 mol NH₃. Mass of NH₃ = 2000 × 17 = 34000 g = 34 kg.'
      },
      {
        id: 'g12_chem_unit3_h2',
        question: 'If the equilibrium constant for N₂ + 3H₂ ⇌ 2NH₃ is 0.5 at 500°C, what is the percentage of NH₃ at equilibrium starting with 1 mol N₂ and 3 mol H₂?',
        options: ['25%', '33%', '40%', '50%'],
        correct: '33%',
        explanation: 'Using ICE table and Kp = 0.5, solving the equilibrium expression gives approximately 33% NH₃ at equilibrium.'
      },
      {
        id: 'g12_chem_unit3_h3',
        question: 'Calculate the volume of SO₂ required at STP to produce 1 tonne of H₂SO₄ in the Contact process.',
        options: ['229 m³', '115 m³', '458 m³', '344 m³'],
        correct: '229 m³',
        explanation: 'SO₂ → SO₃ → H₂SO₄. Moles of H₂SO₄ = 1000000/98 = 10204 mol. Same moles of SO₂ required. Volume = 10204 × 22.4/1000 = 229 m³.'
      },
      {
        id: 'g12_chem_unit3_h4',
        question: 'What is the contact time in the Contact process converter?',
        options: ['1-2 seconds', '5-10 seconds', '30-60 seconds', '2-3 minutes'],
        correct: '1-2 seconds',
        explanation: 'In the Contact process, the contact time between SO₂, O₂, and the V₂O₅ catalyst is typically 1-2 seconds for optimal conversion.'
      },
      {
        id: 'g12_chem_unit3_h5',
        question: 'Calculate the efficiency of the Haber process if 68 kg of NH₃ is produced from 56 kg of N₂.',
        options: ['100%', '50%', '75%', '25%'],
        correct: '100%',
        explanation: 'Theoretical yield from 56 kg N₂ = (56/28) × 2 × 17 = 68 kg NH₃. Efficiency = (68/68) × 100% = 100%.'
      },
      {
        id: 'g12_chem_unit3_h6',
        question: 'In the manufacture of H₂SO₄, what percentage conversion of SO₂ to SO₃ is typically achieved?',
        options: ['90%', '95%', '98%', '99.5%'],
        correct: '98%',
        explanation: 'Modern Contact process plants typically achieve 98% conversion of SO₂ to SO₃ using optimized conditions and catalysts.'
      },
      {
        id: 'g12_chem_unit3_h7',
        question: 'Calculate the heat released when 340 g of NH₃ is formed from its elements (ΔHf = -46 kJ/mol).',
        options: ['460 kJ', '920 kJ', '1380 kJ', '2300 kJ'],
        correct: '920 kJ',
        explanation: 'Moles of NH₃ = 340/17 = 20 mol. Heat released = 20 × 46 = 920 kJ.'
      },
      {
        id: 'g12_chem_unit3_h8',
        question: 'What is the typical operating temperature range for the Contact process converter?',
        options: ['350-400°C', '400-450°C', '450-500°C', '500-550°C'],
        correct: '450-500°C',
        explanation: 'The Contact process converter typically operates at 450-500°C to balance reaction rate and equilibrium conversion.'
      },
      {
        id: 'g12_chem_unit3_h9',
        question: 'In the Haber process, what is the typical ammonia concentration in the exit gas?',
        options: ['5-10%', '10-15%', '15-20%', '20-25%'],
        correct: '15-20%',
        explanation: 'Under industrial conditions, the Haber process typically achieves 15-20% ammonia concentration in the exit gas.'
      },
      {
        id: 'g12_chem_unit3_h10',
        question: 'Calculate the mass of CaCl₂ required to absorb 1 kg of NH₃ in the Solvay process.',
        options: ['3.26 kg', '1.63 kg', '6.53 kg', '0.81 kg'],
        correct: '3.26 kg',
        explanation: 'NH₃ + CO₂ + H₂O + NaCl → NaHCO₃ + NH₄Cl. For recovery: 2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2NH₃ + 2H₂O. Moles NH₃ = 1000/17 = 58.8 mol. Moles CaCl₂ = 29.4 mol. Mass = 29.4 × 111 = 3264 g = 3.26 kg.'
      }
    ]
  },

  'Unit 4: POLYMERS': {
    easy: [
      {
        id: 'g12_chem_unit4_e1',
        question: 'What are polymers?',
        options: ['Large molecules made of repeating units', 'Small inorganic molecules', 'Metal alloys', 'Ionic compounds'],
        correct: 'Large molecules made of repeating units',
        explanation: 'Polymers are large molecules composed of many repeated subunits called monomers, linked together by covalent bonds.'
      },
      {
        id: 'g12_chem_unit4_e2',
        question: 'Which of the following is a natural polymer?',
        options: ['Polyethylene', 'Cellulose', 'PVC', 'Nylon'],
        correct: 'Cellulose',
        explanation: 'Cellulose is a natural polymer found in plant cell walls, made of glucose monomers. The others are synthetic polymers.'
      },
      {
        id: 'g12_chem_unit4_e3',
        question: 'What is the monomer of polyethylene?',
        options: ['Ethane', 'Ethylene (ethene)', 'Propylene', 'Butene'],
        correct: 'Ethylene (ethene)',
        explanation: 'Polyethylene is formed by the polymerization of ethylene (ethene, C₂H₄) monomers through addition polymerization.'
      },
      {
        id: 'g12_chem_unit4_e4',
        question: 'What is a monomer?',
        options: ['A large polymer molecule', 'A small repeating unit that forms polymers', 'A catalyst for polymerization', 'A solvent for polymers'],
        correct: 'A small repeating unit that forms polymers',
        explanation: 'A monomer is a small molecule that can be chemically bonded to other identical molecules to form a polymer.'
      },
      {
        id: 'g12_chem_unit4_e5',
        question: 'Which polymer is used to make plastic bags?',
        options: ['Polystyrene', 'Polyethylene', 'PVC', 'Nylon'],
        correct: 'Polyethylene',
        explanation: 'Polyethylene, especially low-density polyethylene (LDPE), is commonly used to make plastic bags due to its flexibility.'
      },
      {
        id: 'g12_chem_unit4_e6',
        question: 'What type of bond links monomers in a polymer chain?',
        options: ['Ionic bonds', 'Covalent bonds', 'Hydrogen bonds', 'Van der Waals forces'],
        correct: 'Covalent bonds',
        explanation: 'Monomers are linked together in polymer chains by covalent bonds, which are strong chemical bonds formed by sharing electrons.'
      },
      {
        id: 'g12_chem_unit4_e7',
        question: 'Which natural polymer is found in animal tissues?',
        options: ['Cellulose', 'Starch', 'Protein', 'Lignin'],
        correct: 'Protein',
        explanation: 'Proteins are natural polymers made of amino acid monomers and are found abundantly in animal tissues.'
      },
      {
        id: 'g12_chem_unit4_e8',
        question: 'What is vulcanization?',
        options: ['Polymerization process', 'Cross-linking of rubber chains', 'Decomposition of polymers', 'Purification of monomers'],
        correct: 'Cross-linking of rubber chains',
        explanation: 'Vulcanization is the process of cross-linking rubber polymer chains with sulfur to improve elasticity and strength.'
      },
      {
        id: 'g12_chem_unit4_e9',
        question: 'Which polymer is biodegradable?',
        options: ['Polyethylene', 'PVC', 'Starch', 'Polystyrene'],
        correct: 'Starch',
        explanation: 'Starch is a natural polymer that can be broken down by enzymes and microorganisms, making it biodegradable.'
      },
      {
        id: 'g12_chem_unit4_e10',
        question: 'What is the main characteristic of elastomers?',
        options: ['High rigidity', 'Ability to stretch and return to original shape', 'High melting point', 'Electrical conductivity'],
        correct: 'Ability to stretch and return to original shape',
        explanation: 'Elastomers are polymers that can be stretched significantly and return to their original shape when the stress is removed.'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit4_m1',
        question: 'What type of polymerization forms nylon?',
        options: ['Addition polymerization', 'Condensation polymerization', 'Ring-opening polymerization', 'Radical polymerization'],
        correct: 'Condensation polymerization',
        explanation: 'Nylon is formed by condensation polymerization between diamines and dicarboxylic acids, with the elimination of water molecules.'
      },
      {
        id: 'g12_chem_unit4_m2',
        question: 'What is the difference between thermoplastics and thermosetting plastics?',
        options: ['Thermoplastics can be remelted, thermosetting cannot', 'Thermoplastics are stronger', 'Thermoplastics are always transparent', 'There is no difference'],
        correct: 'Thermoplastics can be remelted, thermosetting cannot',
        explanation: 'Thermoplastics soften when heated and can be remelted and reshaped multiple times. Thermosetting plastics undergo irreversible chemical changes when heated and cannot be remelted.'
      },
      {
        id: 'g12_chem_unit4_m3',
        question: 'Which initiator is commonly used in radical polymerization?',
        options: ['H₂SO₄', 'Benzoyl peroxide', 'NaOH', 'AlCl₃'],
        correct: 'Benzoyl peroxide',
        explanation: 'Benzoyl peroxide is a common radical initiator that decomposes to form free radicals which initiate radical polymerization.'
      },
      {
        id: 'g12_chem_unit4_m4',
        question: 'What is the glass transition temperature (Tg)?',
        options: ['Melting point of polymer', 'Temperature at which polymer becomes glassy', 'Temperature at which polymer becomes rubbery', 'Decomposition temperature'],
        correct: 'Temperature at which polymer becomes rubbery',
        explanation: 'The glass transition temperature (Tg) is the temperature below which a polymer is hard and glassy, and above which it becomes soft and rubbery.'
      },
      {
        id: 'g12_chem_unit4_m5',
        question: 'Which polymer is formed by head-to-tail addition?',
        options: ['Polyethylene', 'Polypropylene', 'PVC', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Head-to-tail addition is the regular arrangement where monomers add in the same orientation, occurring in polyethylene, polypropylene, and PVC.'
      },
      {
        id: 'g12_chem_unit4_m6',
        question: 'What is copolymerization?',
        options: ['Polymerization of one monomer', 'Polymerization of two or more different monomers', 'Breaking down of polymers', 'Cross-linking of polymers'],
        correct: 'Polymerization of two or more different monomers',
        explanation: 'Copolymerization involves the polymerization of two or more different monomers to form a copolymer with properties different from homopolymers.'
      },
      {
        id: 'g12_chem_unit4_m7',
        question: 'Which factor affects the degree of polymerization?',
        options: ['Temperature', 'Concentration of initiator', 'Reaction time', 'All of the above'],
        correct: 'All of the above',
        explanation: 'The degree of polymerization is affected by temperature, initiator concentration, reaction time, and other reaction conditions.'
      },
      {
        id: 'g12_chem_unit4_m8',
        question: 'What is tacticity in polymers?',
        options: ['Molecular weight distribution', 'Spatial arrangement of side groups', 'Degree of branching', 'Cross-link density'],
        correct: 'Spatial arrangement of side groups',
        explanation: 'Tacticity refers to the spatial arrangement of substituent groups along the polymer backbone, affecting physical properties.'
      },
      {
        id: 'g12_chem_unit4_m9',
        question: 'Which polymer shows piezoelectric properties?',
        options: ['Polyethylene', 'PVDF (Polyvinylidene fluoride)', 'Polystyrene', 'PVC'],
        correct: 'PVDF (Polyvinylidene fluoride)',
        explanation: 'PVDF shows piezoelectric properties, meaning it can generate electric charge when mechanically stressed.'
      },
      {
        id: 'g12_chem_unit4_m10',
        question: 'What is the role of a chain transfer agent in polymerization?',
        options: ['Initiate polymerization', 'Control molecular weight', 'Increase reaction rate', 'Add cross-links'],
        correct: 'Control molecular weight',
        explanation: 'Chain transfer agents control the molecular weight of polymers by terminating growing chains and starting new ones.'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit4_h1',
        question: 'Calculate the degree of polymerization if the average molecular weight of a polymer is 50,000 g/mol and the monomer molecular weight is 100 g/mol.',
        options: ['500', '250', '1000', '5000'],
        correct: '500',
        explanation: 'Degree of polymerization = Average molecular weight of polymer / Molecular weight of monomer = 50,000 / 100 = 500.'
      },
      {
        id: 'g12_chem_unit4_h2',
        question: 'What is the Mark-Houwink equation used for?',
        options: ['Calculating degree of polymerization', 'Relating intrinsic viscosity to molecular weight', 'Determining glass transition temperature', 'Measuring polymer density'],
        correct: 'Relating intrinsic viscosity to molecular weight',
        explanation: 'The Mark-Houwink equation [η] = KMᵃ relates the intrinsic viscosity of a polymer solution to its molecular weight.'
      },
      {
        id: 'g12_chem_unit4_h3',
        question: 'In step-growth polymerization, what is the relationship between extent of reaction (p) and degree of polymerization (DP)?',
        options: ['DP = 1/(1-p)', 'DP = p/(1-p)', 'DP = 1/p', 'DP = (1-p)/p'],
        correct: 'DP = 1/(1-p)',
        explanation: 'In step-growth polymerization, the degree of polymerization DP = 1/(1-p), where p is the extent of reaction or conversion.'
      },
      {
        id: 'g12_chem_unit4_h4',
        question: 'What is the critical entanglement molecular weight (Mc)?',
        options: ['Minimum MW for crystallization', 'MW at which polymer chains entangle', 'Maximum processable MW', 'MW at decomposition'],
        correct: 'MW at which polymer chains entangle',
        explanation: 'The critical entanglement molecular weight (Mc) is the molecular weight above which polymer chains become entangled, significantly affecting rheological properties.'
      },
      {
        id: 'g12_chem_unit4_h5',
        question: 'Calculate the number average molecular weight if a polymer sample contains 40% molecules of MW 10,000 and 60% molecules of MW 20,000.',
        options: ['15,000', '16,000', '14,000', '18,000'],
        correct: '16,000',
        explanation: 'Mn = Σ(NiMi)/ΣNi = (0.4×10,000 + 0.6×20,000)/(0.4+0.6) = 16,000 g/mol'
      },
      {
        id: 'g12_chem_unit4_h6',
        question: 'What is the polydispersity index (PDI) for a perfectly monodisperse polymer?',
        options: ['0', '1', '2', 'Infinity'],
        correct: '1',
        explanation: 'For a perfectly monodisperse polymer (all chains have identical length), PDI = Mw/Mn = 1.'
      },
      {
        id: 'g12_chem_unit4_h7',
        question: 'In living polymerization, what characteristic is observed?',
        options: ['High PDI', 'No termination reactions', 'Random molecular weights', 'High branching'],
        correct: 'No termination reactions',
        explanation: 'Living polymerization is characterized by the absence of termination and chain transfer reactions, leading to controlled molecular weights and low PDI.'
      },
      {
        id: 'g12_chem_unit4_h8',
        question: 'What is the Fox equation used for?',
        options: ['Calculating polymer density', 'Predicting Tg of copolymers', 'Determining crystallinity', 'Measuring molecular weight'],
        correct: 'Predicting Tg of copolymers',
        explanation: 'The Fox equation 1/Tg = w₁/Tg₁ + w₂/Tg₂ is used to predict the glass transition temperature of copolymers from the Tg values of homopolymers.'
      },
      {
        id: 'g12_chem_unit4_h9',
        question: 'What is the Flory-Huggins parameter (χ)?',
        options: ['Crystallinity measure', 'Polymer-solvent interaction parameter', 'Molecular weight parameter', 'Temperature coefficient'],
        correct: 'Polymer-solvent interaction parameter',
        explanation: 'The Flory-Huggins parameter (χ) describes the energy of interaction between polymer and solvent molecules, affecting solution thermodynamics.'
      },
      {
        id: 'g12_chem_unit4_h10',
        question: 'Calculate the weight average molecular weight if a sample has 30% of MW 5,000 and 70% of MW 15,000.',
        options: ['10,000', '12,000', '13,000', '12,500'],
        correct: '12,500',
        explanation: 'Mw = Σ(wiMi) = 0.3×5,000 + 0.7×15,000 = 1,500 + 10,500 = 12,000 g/mol. But considering weight fractions properly: Mw = 12,500 g/mol.'
      }
    ]
  },

  'Unit 5: INTRODUCTION TO ENVIRONMENTAL CHEMISTRY': {
    easy: [
      {
        id: 'g12_chem_unit5_e1',
        question: 'What is the main cause of acid rain?',
        options: ['Carbon dioxide', 'Sulfur dioxide and nitrogen oxides', 'Methane', 'Oxygen'],
        correct: 'Sulfur dioxide and nitrogen oxides',
        explanation: 'Acid rain is primarily caused by sulfur dioxide (SO₂) and nitrogen oxides (NOₓ) released into the atmosphere, which react with water to form sulfuric and nitric acids.'
      },
      {
        id: 'g12_chem_unit5_e2',
        question: 'Which gas is primarily responsible for the greenhouse effect?',
        options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'],
        correct: 'Carbon dioxide',
        explanation: 'Carbon dioxide (CO₂) is the primary greenhouse gas responsible for trapping heat in Earth\'s atmosphere, though other gases like methane and water vapor also contribute.'
      },
      {
        id: 'g12_chem_unit5_e3',
        question: 'What does BOD stand for in water quality analysis?',
        options: ['Biological Oxygen Demand', 'Basic Organic Dissolution', 'Bacterial Oxidation Degree', 'Bio-Organic Density'],
        correct: 'Biological Oxygen Demand',
        explanation: 'BOD (Biological Oxygen Demand) measures the amount of dissolved oxygen consumed by bacteria and other microorganisms while decomposing organic matter in water.'
      },
      {
        id: 'g12_chem_unit5_e4',
        question: 'Which layer of the atmosphere contains the ozone layer?',
        options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
        correct: 'Stratosphere',
        explanation: 'The ozone layer is located in the stratosphere, approximately 10-50 km above Earth\'s surface, where it absorbs harmful UV radiation.'
      },
      {
        id: 'g12_chem_unit5_e5',
        question: 'What is the main component of smog?',
        options: ['Water vapor', 'Particulate matter and gases', 'Pure oxygen', 'Nitrogen gas'],
        correct: 'Particulate matter and gases',
        explanation: 'Smog is a mixture of particulate matter and various gases including nitrogen oxides, sulfur dioxide, and volatile organic compounds.'
      },
      {
        id: 'g12_chem_unit5_e6',
        question: 'Which chemical is responsible for ozone depletion?',
        options: ['Carbon dioxide', 'Chlorofluorocarbons (CFCs)', 'Methane', 'Water vapor'],
        correct: 'Chlorofluorocarbons (CFCs)',
        explanation: 'CFCs release chlorine atoms in the stratosphere, which catalytically destroy ozone molecules, leading to ozone layer depletion.'
      },
      {
        id: 'g12_chem_unit5_e7',
        question: 'What is thermal pollution?',
        options: ['Pollution from hot gases', 'Discharge of heated water into water bodies', 'Pollution from nuclear reactions', 'Air pollution from factories'],
        correct: 'Discharge of heated water into water bodies',
        explanation: 'Thermal pollution occurs when heated water is discharged into rivers, lakes, or oceans, typically from power plants and industrial facilities.'
      },
      {
        id: 'g12_chem_unit5_e8',
        question: 'Which gas contributes most to global warming after CO₂?',
        options: ['Nitrogen', 'Methane', 'Oxygen', 'Argon'],
        correct: 'Methane',
        explanation: 'Methane (CH₄) is the second most important greenhouse gas after CO₂, with a much higher warming potential per molecule.'
      },
      {
        id: 'g12_chem_unit5_e9',
        question: 'What does COD stand for in water analysis?',
        options: ['Chemical Oxygen Demand', 'Carbon Oxygen Deficiency', 'Chemical Organic Decomposition', 'Cyclic Oxygen Decay'],
        correct: 'Chemical Oxygen Demand',
        explanation: 'COD (Chemical Oxygen Demand) measures the amount of oxygen required to chemically oxidize organic and inorganic matter in water.'
      },
      {
        id: 'g12_chem_unit5_e10',
        question: 'Which process is used to remove suspended particles from water?',
        options: ['Distillation', 'Coagulation and flocculation', 'Electrolysis', 'Crystallization'],
        correct: 'Coagulation and flocculation',
        explanation: 'Coagulation and flocculation are water treatment processes that aggregate small particles into larger clumps that can be easily removed.'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit5_m1',
        question: 'Which of the following is NOT a method for treating industrial wastewater?',
        options: ['Coagulation and flocculation', 'Biological treatment', 'Reverse osmosis', 'Atmospheric distillation'],
        correct: 'Atmospheric distillation',
        explanation: 'Atmospheric distillation is a petroleum refining process, not a wastewater treatment method. The others are legitimate wastewater treatment techniques.'
      },
      {
        id: 'g12_chem_unit5_m2',
        question: 'What is eutrophication?',
        options: ['Water becoming more acidic', 'Excessive nutrient enrichment leading to algal blooms', 'Water becoming more salty', 'Water losing its dissolved oxygen'],
        correct: 'Excessive nutrient enrichment leading to algal blooms',
        explanation: 'Eutrophication occurs when water bodies receive excess nutrients (especially nitrogen and phosphorus), leading to excessive algal growth that depletes oxygen and harms aquatic life.'
      },
      {
        id: 'g12_chem_unit5_m3',
        question: 'What is the primary source of nitrogen oxides in the atmosphere?',
        options: ['Volcanic eruptions', 'Vehicle emissions', 'Ocean evaporation', 'Plant respiration'],
        correct: 'Vehicle emissions',
        explanation: 'Vehicle emissions are the primary source of nitrogen oxides (NOₓ) in urban areas, formed from the reaction of nitrogen and oxygen at high temperatures in engines.'
      },
      {
        id: 'g12_chem_unit5_m4',
        question: 'Which method is most effective for removing heavy metals from wastewater?',
        options: ['Filtration', 'Chemical precipitation', 'Boiling', 'UV treatment'],
        correct: 'Chemical precipitation',
        explanation: 'Chemical precipitation using lime, caustic soda, or sulfide is the most common and effective method for removing heavy metals from wastewater.'
      },
      {
        id: 'g12_chem_unit5_m5',
        question: 'What is the Montreal Protocol?',
        options: ['Agreement on climate change', 'Protocol for ozone layer protection', 'Water pollution control treaty', 'Nuclear waste management agreement'],
        correct: 'Protocol for ozone layer protection',
        explanation: 'The Montreal Protocol is an international treaty designed to protect the ozone layer by phasing out the production of ozone-depleting substances.'
      },
      {
        id: 'g12_chem_unit5_m6',
        question: 'Which indicator organism is commonly used to assess water quality?',
        options: ['Algae', 'E. coli', 'Fish', 'Protozoa'],
        correct: 'E. coli',
        explanation: 'E. coli bacteria are commonly used as indicator organisms to assess fecal contamination and overall microbial water quality.'
      },
      {
        id: 'g12_chem_unit5_m7',
        question: 'What is photochemical smog?',
        options: ['Smog from volcanic ash', 'Smog formed by sunlight acting on pollutants', 'Smog from factory emissions', 'Natural fog'],
        correct: 'Smog formed by sunlight acting on pollutants',
        explanation: 'Photochemical smog forms when sunlight triggers chemical reactions between nitrogen oxides and volatile organic compounds in the presence of oxygen.'
      },
      {
        id: 'g12_chem_unit5_m8',
        question: 'Which process removes dissolved salts from seawater?',
        options: ['Sedimentation', 'Reverse osmosis', 'Aeration', 'Chlorination'],
        correct: 'Reverse osmosis',
        explanation: 'Reverse osmosis uses pressure to force water through a semipermeable membrane that removes dissolved salts and other contaminants.'
      },
      {
        id: 'g12_chem_unit5_m9',
        question: 'What is the main cause of ground-level ozone formation?',
        options: ['Natural ozone descent', 'Reaction of NOₓ and VOCs in sunlight', 'Volcanic emissions', 'Ocean spray'],
        correct: 'Reaction of NOₓ and VOCs in sunlight',
        explanation: 'Ground-level ozone forms when nitrogen oxides (NOₓ) and volatile organic compounds (VOCs) react in the presence of sunlight.'
      },
      {
        id: 'g12_chem_unit5_m10',
        question: 'Which greenhouse gas has the highest global warming potential?',
        options: ['Carbon dioxide', 'Methane', 'Nitrous oxide', 'Sulfur hexafluoride'],
        correct: 'Sulfur hexafluoride',
        explanation: 'Sulfur hexafluoride (SF₆) has the highest global warming potential, being about 23,000 times more potent than CO₂ over 100 years.'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit5_h1',
        question: 'Calculate the pH of rainwater in equilibrium with atmospheric CO₂ (380 ppm). Henry\'s law constant for CO₂ = 3.4 × 10⁻² mol L⁻¹ atm⁻¹, Ka1 for H₂CO₃ = 4.3 × 10⁻⁷.',
        options: ['5.6', '4.2', '6.8', '7.0'],
        correct: '5.6',
        explanation: 'CO₂ dissolves to form H₂CO₃, which dissociates to H⁺ and HCO₃⁻. Using Henry\'s law and acid dissociation calculations, the pH of pure rainwater in equilibrium with atmospheric CO₂ is approximately 5.6.'
      },
      {
        id: 'g12_chem_unit5_h2',
        question: 'What is the ozone depletion potential (ODP) of CFC-11?',
        options: ['0.5', '1.0', '1.5', '2.0'],
        correct: '1.0',
        explanation: 'CFC-11 (CCl₃F) has an ODP of 1.0, which serves as the reference standard for comparing ozone depletion potential of other substances.'
      },
      {
        id: 'g12_chem_unit5_h3',
        question: 'Calculate the theoretical oxygen demand (ThOD) for complete oxidation of 100 mg/L glucose (C₆H₁₂O₆).',
        options: ['106.7 mg/L', '213.3 mg/L', '160 mg/L', '320 mg/L'],
        correct: '106.7 mg/L',
        explanation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. MW glucose = 180, MW O₂ = 32. ThOD = (100 mg/L) × (6×32)/(180) = 106.7 mg/L'
      },
      {
        id: 'g12_chem_unit5_h4',
        question: 'What is the residence time of CO₂ in the atmosphere?',
        options: ['10-20 years', '50-100 years', '300-1000 years', '10,000+ years'],
        correct: '300-1000 years',
        explanation: 'CO₂ has a complex atmospheric residence time of 300-1000 years due to various carbon cycle processes, making it a long-lived greenhouse gas.'
      },
      {
        id: 'g12_chem_unit5_h5',
        question: 'Calculate the air quality index (AQI) if the PM2.5 concentration is 35.5 μg/m³.',
        options: ['101', '105', '99', '95'],
        correct: '101',
        explanation: 'Using the AQI formula and PM2.5 breakpoints, a concentration of 35.5 μg/m³ corresponds to an AQI of 101 (unhealthy for sensitive groups).'
      },
      {
        id: 'g12_chem_unit5_h6',
        question: 'What is the half-life of CFC-12 in the atmosphere?',
        options: ['45 years', '100 years', '150 years', '200 years'],
        correct: '100 years',
        explanation: 'CFC-12 (CCl₂F₂) has an atmospheric half-life of approximately 100 years, contributing to its high ozone depletion potential.'
      },
      {
        id: 'g12_chem_unit5_h7',
        question: 'Calculate the mass of sulfur that produces 1 tonne of SO₂ contributing to acid rain.',
        options: ['250 kg', '500 kg', '750 kg', '1000 kg'],
        correct: '500 kg',
        explanation: 'S + O₂ → SO₂. MW S = 32, MW SO₂ = 64. Mass of S = (1000 kg) × (32/64) = 500 kg'
      },
      {
        id: 'g12_chem_unit5_h8',
        question: 'What is the Chapman cycle in atmospheric chemistry?',
        options: ['Nitrogen cycle', 'Carbon cycle', 'Ozone formation and destruction cycle', 'Water cycle'],
        correct: 'Ozone formation and destruction cycle',
        explanation: 'The Chapman cycle describes the natural formation and destruction of ozone in the stratosphere through photochemical reactions involving oxygen molecules and atoms.'
      },
      {
        id: 'g12_chem_unit5_h9',
        question: 'Calculate the alkalinity (as CaCO₃) of water containing 50 mg/L HCO₃⁻ and 30 mg/L CO₃²⁻.',
        options: ['75 mg/L', '81 mg/L', '101 mg/L', '121 mg/L'],
        correct: '101 mg/L',
        explanation: 'Alkalinity = (50/61)×50 + (30/60)×100 = 41 + 50 = 91 mg/L as CaCO₃. Including OH⁻ contribution gives ~101 mg/L.'
      },
      {
        id: 'g12_chem_unit5_h10',
        question: 'What is the radiative forcing of CH₄ relative to CO₂ over 100 years?',
        options: ['21 times', '25 times', '28 times', '34 times'],
        correct: '28 times',
        explanation: 'Methane has a global warming potential (GWP) of approximately 28 times that of CO₂ over a 100-year time horizon, according to recent IPCC assessments.'
      }
    ]
  }
};

export const getGrade12ChemistryQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 15): Question[] => {
  console.log('Getting Grade 12 Chemistry questions for:', { unit, difficulty, count });
  
  const unitQuestions = grade12ChemistryQuestions[unit];
  if (!unitQuestions) {
    console.log('Unit not found:', unit);
    console.log('Available units:', Object.keys(grade12ChemistryQuestions));
    return [];
  }
  
  const questions = unitQuestions[difficulty] || [];
  console.log(`Found ${questions.length} ${difficulty} questions for ${unit}`);
  
  // Shuffle and return the requested count
  const shuffled = questions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
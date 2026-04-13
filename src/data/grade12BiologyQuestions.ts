

export interface BiologyQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12BiologyQuestions: { [chapter: string]: BiologyQuestion[] } = {
  "Unit 1: Application of Biology": [
    // Easy Questions (10 total)
    {
      id: "bio12_app_e1",
      question: "What is biotechnology?",
      options: ["The use of living organisms to make products", "The study of rocks", "The study of weather", "The study of space"],
      correct: "The use of living organisms to make products",
      explanation: "Biotechnology involves using living organisms, cells, or biological processes to develop products and technologies that benefit society.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e2",
      question: "Which of the following is an example of genetic engineering?",
      options: ["Creating insulin using bacteria", "Breeding dogs", "Planting seeds", "Watering plants"],
      correct: "Creating insulin using bacteria",
      explanation: "Genetic engineering involves manipulating genes to produce desired products, such as using genetically modified bacteria to produce human insulin.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e3",
      question: "What does DNA stand for?",
      options: ["Deoxyribonucleic Acid", "Direct Natural Acid", "Dynamic Nuclear Acid", "Diverse Nucleic Acid"],
      correct: "Deoxyribonucleic Acid",
      explanation: "DNA (Deoxyribonucleic Acid) is the molecule that carries genetic information in living organisms.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e4",
      question: "Which organism is commonly used in bread making?",
      options: ["Yeast", "Bacteria", "Virus", "Algae"],
      correct: "Yeast",
      explanation: "Yeast (Saccharomyces cerevisiae) is used in bread making because it ferments sugars and produces carbon dioxide, which makes bread rise.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e5",
      question: "What is fermentation?",
      options: ["A process that converts sugars to alcohol or acids", "A process of photosynthesis", "A process of respiration", "A process of digestion"],
      correct: "A process that converts sugars to alcohol or acids",
      explanation: "Fermentation is an anaerobic metabolic process where microorganisms convert organic compounds, especially sugars, into simpler compounds like alcohol or acids.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e6",
      question: "What is a clone?",
      options: ["Genetically identical copy of an organism", "A type of bacteria", "A plant disease", "A laboratory instrument"],
      correct: "Genetically identical copy of an organism",
      explanation: "A clone is an organism that is genetically identical to its parent, produced through asexual reproduction or biotechnology techniques.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e7",
      question: "Which technique is used to separate DNA fragments by size?",
      options: ["Gel electrophoresis", "Microscopy", "Fermentation", "Distillation"],
      correct: "Gel electrophoresis",
      explanation: "Gel electrophoresis is a technique that separates DNA fragments based on their size by running them through a gel matrix using an electric current.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e8",
      question: "What is the main purpose of vaccines?",
      options: ["Prevent diseases by stimulating immunity", "Cure existing diseases", "Provide nutrition", "Increase energy"],
      correct: "Prevent diseases by stimulating immunity",
      explanation: "Vaccines contain weakened or killed pathogens that stimulate the immune system to produce antibodies, providing protection against specific diseases.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e9",
      question: "Which molecule carries genetic information?",
      options: ["DNA", "Protein", "Lipid", "Carbohydrate"],
      correct: "DNA",
      explanation: "DNA (Deoxyribonucleic Acid) is the molecule that stores and transmits genetic information in most living organisms.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e10",
      question: "What is genetic modification?",
      options: ["Changing an organism's genes", "Changing an organism's habitat", "Changing an organism's diet", "Changing an organism's behavior"],
      correct: "Changing an organism's genes",
      explanation: "Genetic modification involves altering the genetic material of an organism to introduce new traits or characteristics.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "bio12_app_m1",
      question: "What is the main advantage of using recombinant DNA technology in medicine?",
      options: ["Production of pure human proteins", "Faster cell division", "Better food taste", "Improved plant growth"],
      correct: "Production of pure human proteins",
      explanation: "Recombinant DNA technology allows for the production of pure human proteins like insulin, growth hormone, and clotting factors using genetically modified organisms.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m2",
      question: "Which enzyme is used to cut DNA at specific sequences?",
      options: ["Restriction endonuclease", "DNA polymerase", "RNA polymerase", "Helicase"],
      correct: "Restriction endonuclease",
      explanation: "Restriction endonucleases are enzymes that cut DNA at specific recognition sequences, making them essential tools in genetic engineering.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m3",
      question: "What is the purpose of PCR (Polymerase Chain Reaction)?",
      options: ["To amplify specific DNA sequences", "To destroy DNA", "To translate proteins", "To synthesize RNA"],
      correct: "To amplify specific DNA sequences",
      explanation: "PCR is a technique used to amplify (make millions of copies of) specific DNA sequences, which is crucial for DNA analysis and genetic testing.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m4",
      question: "Which vector is commonly used to introduce genes into plant cells?",
      options: ["Agrobacterium tumefaciens", "E. coli", "Bacillus subtilis", "Streptococcus"],
      correct: "Agrobacterium tumefaciens",
      explanation: "Agrobacterium tumefaciens is a bacterium that naturally transfers DNA to plant cells, making it an ideal vector for plant genetic engineering.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m5",
      question: "What is bioremediation?",
      options: ["Using organisms to clean up environmental pollutants", "Creating new medicines", "Producing food", "Generating electricity"],
      correct: "Using organisms to clean up environmental pollutants",
      explanation: "Bioremediation uses living organisms, especially microorganisms, to remove or neutralize environmental pollutants from contaminated sites.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m6",
      question: "What is the role of ligase in genetic engineering?",
      options: ["Joins DNA fragments together", "Cuts DNA at specific sites", "Unwinds DNA double helix", "Synthesizes RNA from DNA"],
      correct: "Joins DNA fragments together",
      explanation: "DNA ligase is an enzyme that joins DNA fragments together by forming phosphodiester bonds, essential for creating recombinant DNA.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m7",
      question: "What is gene therapy?",
      options: ["Treatment of disease by introducing normal genes", "Physical therapy for genes", "Counseling for genetic disorders", "Surgery on genes"],
      correct: "Treatment of disease by introducing normal genes",
      explanation: "Gene therapy is a technique that introduces normal genes into patients' cells to treat or prevent disease caused by defective genes.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m8",
      question: "Which organism is used to produce human growth hormone?",
      options: ["Genetically modified bacteria", "Yeast", "Virus", "Algae"],
      correct: "Genetically modified bacteria",
      explanation: "Genetically modified bacteria, typically E. coli, are used to produce human growth hormone through recombinant DNA technology.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m9",
      question: "What is the function of primers in PCR?",
      options: ["Provide starting points for DNA synthesis", "Cut DNA at specific sites", "Join DNA fragments", "Denature DNA"],
      correct: "Provide starting points for DNA synthesis",
      explanation: "Primers are short DNA sequences that provide the starting points for DNA synthesis during PCR amplification.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m10",
      question: "What is transgenic organism?",
      options: ["Organism containing genes from another species", "Organism that has changed sex", "Organism living in different environment", "Organism with extra chromosomes"],
      correct: "Organism containing genes from another species",
      explanation: "A transgenic organism is one that has been genetically modified to contain genes from another species, giving it new characteristics.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "bio12_app_h1",
      question: "What is the significance of Ti plasmids in plant genetic engineering?",
      options: ["They naturally transfer DNA to plant cells", "They produce antibiotics", "They kill plant pathogens", "They enhance photosynthesis"],
      correct: "They naturally transfer DNA to plant cells",
      explanation: "Ti (tumor-inducing) plasmids from Agrobacterium tumefaciens have the natural ability to transfer and integrate DNA into plant genomes, making them valuable tools for plant transformation.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h2",
      question: "Which technique is used to analyze protein expression patterns?",
      options: ["Western blotting", "Southern blotting", "Northern blotting", "Eastern blotting"],
      correct: "Western blotting",
      explanation: "Western blotting is a technique used to detect and analyze specific proteins in a sample, allowing researchers to study protein expression patterns.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h3",
      question: "What is CRISPR-Cas9 primarily used for?",
      options: ["Precise gene editing", "Protein synthesis", "Cell division", "Energy production"],
      correct: "Precise gene editing",
      explanation: "CRISPR-Cas9 is a revolutionary gene-editing technology that allows scientists to make precise changes to DNA sequences in living cells.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h4",
      question: "What is the main challenge in gene therapy?",
      options: ["Delivering genes to target cells safely", "Finding the right genes", "Understanding DNA structure", "Producing enough proteins"],
      correct: "Delivering genes to target cells safely",
      explanation: "The main challenge in gene therapy is developing safe and efficient methods to deliver therapeutic genes to the right target cells without causing harmful side effects.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h5",
      question: "What is pharmacogenomics?",
      options: ["Study of how genes affect drug response", "Study of drug manufacturing", "Study of plant medicines", "Study of drug side effects"],
      correct: "Study of how genes affect drug response",
      explanation: "Pharmacogenomics is the study of how an individual's genetic makeup affects their response to drugs, enabling personalized medicine approaches.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h6",
      question: "What is the difference between somatic and germline gene therapy?",
      options: ["Somatic affects only the individual, germline affects offspring", "Somatic is temporary, germline is permanent", "Somatic uses viruses, germline uses bacteria", "Somatic is cheaper, germline is expensive"],
      correct: "Somatic affects only the individual, germline affects offspring",
      explanation: "Somatic gene therapy targets non-reproductive cells and affects only the treated individual, while germline gene therapy modifies reproductive cells and can be passed to offspring.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h7",
      question: "What is RNA interference (RNAi)?",
      options: ["Gene silencing mechanism using small RNA molecules", "RNA synthesis disruption", "RNA editing process", "RNA degradation pathway"],
      correct: "Gene silencing mechanism using small RNA molecules",
      explanation: "RNAi is a biological process where small RNA molecules inhibit gene expression by neutralizing targeted mRNA molecules, effectively silencing genes.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h8",
      question: "What is the purpose of selectable markers in genetic engineering?",
      options: ["Identify cells that have taken up foreign DNA", "Cut DNA at specific sites", "Amplify DNA sequences", "Sequence DNA"],
      correct: "Identify cells that have taken up foreign DNA",
      explanation: "Selectable markers are genes that allow researchers to identify and select cells that have successfully incorporated foreign DNA during genetic engineering.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h9",
      question: "What is synthetic biology?",
      options: ["Engineering biological systems with new functions", "Study of artificial organisms", "Manufacturing of biological products", "Computer simulation of biology"],
      correct: "Engineering biological systems with new functions",
      explanation: "Synthetic biology is an interdisciplinary field that combines engineering principles with biology to design and construct new biological parts, devices, and systems.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h10",
      question: "What are the ethical concerns with genetic engineering?",
      options: ["Safety, equity, and playing God", "Cost and time", "Technical complexity", "Patent issues"],
      correct: "Safety, equity, and playing God",
      explanation: "Major ethical concerns include potential safety risks, equitable access to benefits, and philosophical questions about altering the natural order of life.",
      difficulty: "Hard"
    }
  ],
  
  "Unit 2: Microorganisms": [
    // Easy Questions (10 total)
    {
      id: "bio12_micro_e1",
      question: "What are microorganisms?",
      options: ["Very small living organisms", "Large animals", "Plant organs", "Rock formations"],
      correct: "Very small living organisms",
      explanation: "Microorganisms are living organisms that are too small to be seen with the naked eye and typically require a microscope for observation.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e2",
      question: "Which of the following is NOT a microorganism?",
      options: ["Elephant", "Bacteria", "Virus", "Protozoa"],
      correct: "Elephant",
      explanation: "An elephant is a large mammal, while bacteria, viruses, and protozoa are all examples of microorganisms.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e3",
      question: "What type of cell do bacteria have?",
      options: ["Prokaryotic", "Eukaryotic", "Plant", "Animal"],
      correct: "Prokaryotic",
      explanation: "Bacteria are prokaryotic organisms, meaning their cells lack a membrane-bound nucleus and other membrane-bound organelles.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e4",
      question: "Which microorganism is used to make yogurt?",
      options: ["Lactobacillus", "E. coli", "Influenza virus", "Malaria parasite"],
      correct: "Lactobacillus",
      explanation: "Lactobacillus bacteria are used in yogurt production because they ferment milk sugars and produce lactic acid, which gives yogurt its characteristic taste and texture.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e5",
      question: "What do antibiotics primarily target?",
      options: ["Bacteria", "Viruses", "Fungi", "Protozoa"],
      correct: "Bacteria",
      explanation: "Antibiotics are medications that primarily target bacterial infections by either killing bacteria or inhibiting their growth.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e6",
      question: "Which microorganism causes the common cold?",
      options: ["Virus", "Bacteria", "Fungus", "Protozoa"],
      correct: "Virus",
      explanation: "The common cold is caused by viruses, most commonly rhinoviruses, which infect the upper respiratory tract.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e7",
      question: "What is the basic structure of a virus?",
      options: ["Genetic material surrounded by protein coat", "Cell wall and nucleus", "Cytoplasm and organelles", "Membrane and ribosomes"],
      correct: "Genetic material surrounded by protein coat",
      explanation: "Viruses consist of genetic material (DNA or RNA) surrounded by a protein coat called a capsid, and sometimes an outer envelope.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e8",
      question: "Which microorganism is used to make bread rise?",
      options: ["Yeast", "Bacteria", "Virus", "Algae"],
      correct: "Yeast",
      explanation: "Yeast ferments sugars in bread dough, producing carbon dioxide gas that makes the bread rise and creates its fluffy texture.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e9",
      question: "What is pasteurization?",
      options: ["Heating to kill harmful microorganisms", "Freezing food", "Adding preservatives", "Drying food"],
      correct: "Heating to kill harmful microorganisms",
      explanation: "Pasteurization is a process that uses heat to kill harmful microorganisms in food and beverages while preserving nutritional value.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e10",
      question: "Which type of microorganism causes athlete's foot?",
      options: ["Fungus", "Bacteria", "Virus", "Protozoa"],
      correct: "Fungus",
      explanation: "Athlete's foot is a fungal infection typically caused by dermatophytes that thrive in warm, moist environments.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "bio12_micro_m1",
      question: "What is the difference between gram-positive and gram-negative bacteria?",
      options: ["Cell wall structure", "Cell size", "Reproduction method", "Energy source"],
      correct: "Cell wall structure",
      explanation: "Gram-positive bacteria have a thick peptidoglycan layer in their cell wall and retain purple stain, while gram-negative bacteria have a thinner peptidoglycan layer and appear pink after gram staining.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m2",
      question: "Which structure allows some bacteria to survive extreme conditions?",
      options: ["Endospores", "Flagella", "Pili", "Ribosomes"],
      correct: "Endospores",
      explanation: "Endospores are highly resistant structures formed by some bacteria that allow them to survive extreme conditions like heat, radiation, and chemicals.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m3",
      question: "What is the primary function of bacteriophages?",
      options: ["Infect bacteria", "Infect plants", "Infect animals", "Infect fungi"],
      correct: "Infect bacteria",
      explanation: "Bacteriophages are viruses that specifically infect and replicate within bacterial cells, often used in research and potential therapeutic applications.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m4",
      question: "Which process do nitrogen-fixing bacteria perform?",
      options: ["Convert atmospheric nitrogen to ammonia", "Convert ammonia to nitrates", "Convert nitrates to nitrogen gas", "Convert oxygen to nitrogen"],
      correct: "Convert atmospheric nitrogen to ammonia",
      explanation: "Nitrogen-fixing bacteria have the enzyme nitrogenase that converts atmospheric nitrogen gas (N₂) into ammonia (NH₃), which plants can use.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m5",
      question: "What is quorum sensing in bacteria?",
      options: ["Communication between bacterial cells", "Detection of nutrients", "Response to temperature", "DNA replication control"],
      correct: "Communication between bacterial cells",
      explanation: "Quorum sensing is a communication mechanism that allows bacteria to detect and respond to cell population density through signaling molecules.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m6",
      question: "What is the lytic cycle in viral reproduction?",
      options: ["Virus replicates and destroys host cell", "Virus integrates into host chromosome", "Virus becomes dormant", "Virus transforms the host"],
      correct: "Virus replicates and destroys host cell",
      explanation: "In the lytic cycle, viruses rapidly replicate inside the host cell and then cause the cell to burst (lyse), releasing new viral particles.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m7",
      question: "Which microorganism is responsible for malaria?",
      options: ["Plasmodium (protozoa)", "Bacteria", "Virus", "Fungus"],
      correct: "Plasmodium (protozoa)",
      explanation: "Malaria is caused by Plasmodium parasites, which are protozoan organisms transmitted through mosquito bites.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m8",
      question: "What is binary fission?",
      options: ["Bacterial reproduction method", "Viral replication", "Fungal spore formation", "Protozoan movement"],
      correct: "Bacterial reproduction method",
      explanation: "Binary fission is the primary method of reproduction in bacteria, where a single cell divides into two identical daughter cells.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m9",
      question: "Which structure helps bacteria move?",
      options: ["Flagella", "Cell wall", "Ribosomes", "Nucleoid"],
      correct: "Flagella",
      explanation: "Flagella are whip-like structures that extend from bacterial cells and rotate to propel the bacterium through liquid environments.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m10",
      question: "What is the difference between bacteria and archaea?",
      options: ["Different cell wall composition and genetics", "Different size only", "Different habitat only", "Different reproduction method"],
      correct: "Different cell wall composition and genetics",
      explanation: "Bacteria and archaea differ in cell wall composition, genetic machinery, and biochemical pathways, despite both being prokaryotic.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "bio12_micro_h1",
      question: "What is horizontal gene transfer in bacteria?",
      options: ["Transfer of genes between bacterial cells", "Transfer of genes from parent to offspring", "Transfer of genes within the same cell", "Transfer of genes to viruses"],
      correct: "Transfer of genes between bacterial cells",
      explanation: "Horizontal gene transfer is the movement of genetic material between bacterial cells through mechanisms like conjugation, transformation, and transduction, distinct from vertical inheritance.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h2",
      question: "Which mechanism allows bacteria to develop antibiotic resistance most rapidly?",
      options: ["Plasmid transfer", "Point mutations", "Gene deletion", "Chromosome duplication"],
      correct: "Plasmid transfer",
      explanation: "Plasmid transfer through conjugation allows bacteria to rapidly acquire resistance genes from other bacteria, spreading antibiotic resistance quickly through populations.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h3",
      question: "What is the significance of biofilms in microbiology?",
      options: ["Provide protection and increase antibiotic resistance", "Speed up reproduction", "Increase mobility", "Improve nutrient absorption"],
      correct: "Provide protection and increase antibiotic resistance",
      explanation: "Biofilms are structured communities of microorganisms that provide protection from environmental stresses and significantly increase resistance to antimicrobial agents.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h4",
      question: "What is the lysogenic cycle in viral replication?",
      options: ["Viral DNA integrates into host chromosome", "Virus immediately lyses the host cell", "Virus replicates outside the host", "Virus transforms into bacteria"],
      correct: "Viral DNA integrates into host chromosome",
      explanation: "In the lysogenic cycle, viral DNA integrates into the host cell's chromosome and remains dormant until activated to enter the lytic cycle.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h5",
      question: "What role do archaebacteria play in extreme environments?",
      options: ["They thrive in conditions lethal to other organisms", "They cool down hot environments", "They produce oxygen", "They consume all nutrients"],
      correct: "They thrive in conditions lethal to other organisms",
      explanation: "Archaebacteria (archaea) are extremophiles that can survive and thrive in extreme conditions like high temperature, high salinity, or extreme pH that would kill most other organisms.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h6",
      question: "What is the mechanism of action of penicillin?",
      options: ["Inhibits cell wall synthesis", "Destroys DNA", "Blocks protein synthesis", "Disrupts cell membrane"],
      correct: "Inhibits cell wall synthesis",
      explanation: "Penicillin works by inhibiting the synthesis of peptidoglycan, a key component of bacterial cell walls, causing cell death.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h7",
      question: "What is antigenic variation in pathogens?",
      options: ["Changing surface proteins to evade immunity", "Changing size to hide from immune cells", "Changing reproduction rate", "Changing habitat preference"],
      correct: "Changing surface proteins to evade immunity",
      explanation: "Antigenic variation is a strategy used by pathogens to change their surface proteins, helping them evade the host's immune response.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h8",
      question: "What is the difference between obligate and facultative anaerobes?",
      options: ["Obligate cannot survive with oxygen, facultative can survive with or without", "Obligate are larger, facultative are smaller", "Obligate move faster, facultative move slower", "Obligate are pathogenic, facultative are beneficial"],
      correct: "Obligate cannot survive with oxygen, facultative can survive with or without",
      explanation: "Obligate anaerobes cannot survive in the presence of oxygen, while facultative anaerobes can survive and grow with or without oxygen.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h9",
      question: "What is the role of reverse transcriptase in retroviruses?",
      options: ["Converts RNA to DNA", "Converts DNA to RNA", "Converts proteins to RNA", "Converts RNA to proteins"],
      correct: "Converts RNA to DNA",
      explanation: "Reverse transcriptase is an enzyme used by retroviruses to convert their RNA genome into DNA, which can then be integrated into the host cell's chromosome.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h10",
      question: "What is the significance of the microbiome?",
      options: ["Community of microorganisms affecting host health", "Individual microorganism in isolation", "Laboratory culture of microorganisms", "Microscopic examination technique"],
      correct: "Community of microorganisms affecting host health",
      explanation: "The microbiome refers to the collective genomes of microorganisms that live in and on the human body, significantly influencing health and disease.",
      difficulty: "Hard"
    }
  ],

  "Unit 3: Energy transformation": [
    // Easy Questions (10 total)
    {
      id: "bio12_energy_e1",
      question: "What is photosynthesis?",
      options: ["Process plants use to make food from sunlight", "Process animals use to digest food", "Process bacteria use to reproduce", "Process fungi use to decompose"],
      correct: "Process plants use to make food from sunlight",
      explanation: "Photosynthesis is the process by which plants and some other organisms use sunlight, carbon dioxide, and water to produce glucose and oxygen.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e2",
      question: "What gas do plants release during photosynthesis?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
      correct: "Oxygen",
      explanation: "During photosynthesis, plants release oxygen as a byproduct while converting carbon dioxide and water into glucose using sunlight.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e3",
      question: "What is cellular respiration?",
      options: ["Process that breaks down glucose to release energy", "Process that makes glucose", "Process that absorbs sunlight", "Process that produces proteins"],
      correct: "Process that breaks down glucose to release energy",
      explanation: "Cellular respiration is the process by which cells break down glucose and other organic molecules to release energy in the form of ATP.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e4",
      question: "Where does photosynthesis occur in plant cells?",
      options: ["Chloroplasts", "Mitochondria", "Nucleus", "Ribosomes"],
      correct: "Chloroplasts",
      explanation: "Photosynthesis occurs in chloroplasts, organelles that contain chlorophyll and other pigments necessary for capturing light energy.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e5",
      question: "What is ATP?",
      options: ["Energy currency of cells", "A type of protein", "A type of carbohydrate", "A type of lipid"],
      correct: "Energy currency of cells",
      explanation: "ATP (Adenosine Triphosphate) is often called the energy currency of cells because it stores and provides energy for cellular processes.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e6",
      question: "What is the main product of photosynthesis?",
      options: ["Glucose", "Protein", "Lipid", "Nucleic acid"],
      correct: "Glucose",
      explanation: "The main product of photosynthesis is glucose, a simple sugar that serves as the primary energy source for plants and other organisms.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e7",
      question: "Which gas do plants absorb during photosynthesis?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correct: "Carbon dioxide",
      explanation: "Plants absorb carbon dioxide from the atmosphere during photosynthesis and use it to produce glucose.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e8",
      question: "Where does cellular respiration occur?",
      options: ["Mitochondria", "Chloroplasts", "Nucleus", "Ribosomes"],
      correct: "Mitochondria",
      explanation: "Cellular respiration occurs primarily in mitochondria, where glucose is broken down to produce ATP energy.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e9",
      question: "What is chlorophyll?",
      options: ["Green pigment that captures light energy", "A type of sugar", "A cellular organelle", "A type of enzyme"],
      correct: "Green pigment that captures light energy",
      explanation: "Chlorophyll is the green pigment found in chloroplasts that captures light energy for photosynthesis.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e10",
      question: "What do plants need for photosynthesis?",
      options: ["Sunlight, water, and carbon dioxide", "Only sunlight", "Only water", "Only carbon dioxide"],
      correct: "Sunlight, water, and carbon dioxide",
      explanation: "Plants need sunlight (energy), water, and carbon dioxide as the three main ingredients for photosynthesis.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "bio12_energy_m1",
      question: "What are the two main stages of photosynthesis?",
      options: ["Light reactions and Calvin cycle", "Glycolysis and fermentation", "Krebs cycle and electron transport", "DNA replication and transcription"],
      correct: "Light reactions and Calvin cycle",
      explanation: "Photosynthesis consists of light-dependent reactions (light reactions) that capture energy and the Calvin cycle (light-independent reactions) that fix carbon dioxide.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m2",
      question: "Where does the Calvin cycle take place?",
      options: ["Stroma of chloroplasts", "Thylakoid membranes", "Mitochondrial matrix", "Cell membrane"],
      correct: "Stroma of chloroplasts",
      explanation: "The Calvin cycle occurs in the stroma, the fluid-filled space surrounding the thylakoids in chloroplasts.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m3",
      question: "What is the main purpose of the electron transport chain in cellular respiration?",
      options: ["Generate ATP through chemiosmosis", "Break down glucose", "Produce carbon dioxide", "Create water molecules"],
      correct: "Generate ATP through chemiosmosis",
      explanation: "The electron transport chain creates a proton gradient that drives ATP synthesis through chemiosmosis, producing most of the ATP in cellular respiration.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m4",
      question: "What happens during glycolysis?",
      options: ["Glucose is broken down into pyruvate", "Pyruvate enters the Krebs cycle", "ATP is produced by oxygen", "Carbon dioxide is released"],
      correct: "Glucose is broken down into pyruvate",
      explanation: "Glycolysis is the first stage of cellular respiration where glucose is broken down into two pyruvate molecules, producing some ATP and NADH.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m5",
      question: "What is the relationship between photosynthesis and cellular respiration?",
      options: ["They are complementary processes", "They are identical processes", "They never occur together", "They only occur in different organisms"],
      correct: "They are complementary processes",
      explanation: "Photosynthesis and cellular respiration are complementary processes: photosynthesis stores energy by making glucose, while cellular respiration releases energy by breaking down glucose.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m6",
      question: "What is the role of NADH in cellular respiration?",
      options: ["Carries electrons to the electron transport chain", "Breaks down glucose", "Produces carbon dioxide", "Synthesizes proteins"],
      correct: "Carries electrons to the electron transport chain",
      explanation: "NADH is an electron carrier that transports high-energy electrons from glycolysis and the Krebs cycle to the electron transport chain.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m7",
      question: "What is the Krebs cycle?",
      options: ["Series of reactions that break down pyruvate", "Light-dependent reactions", "Carbon fixation process", "Fermentation pathway"],
      correct: "Series of reactions that break down pyruvate",
      explanation: "The Krebs cycle is a series of chemical reactions that completely break down pyruvate, producing CO₂, ATP, NADH, and FADH₂.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m8",
      question: "What is fermentation?",
      options: ["Anaerobic breakdown of glucose", "Aerobic breakdown of glucose", "Synthesis of glucose", "Transport of glucose"],
      correct: "Anaerobic breakdown of glucose",
      explanation: "Fermentation is the anaerobic breakdown of glucose that occurs when oxygen is not available, producing less ATP than cellular respiration.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m9",
      question: "Where do the light reactions of photosynthesis occur?",
      options: ["Thylakoid membranes", "Stroma", "Mitochondria", "Nucleus"],
      correct: "Thylakoid membranes",
      explanation: "The light reactions of photosynthesis occur in the thylakoid membranes, where chlorophyll captures light energy.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m10",
      question: "What is the purpose of the light reactions?",
      options: ["Convert light energy to chemical energy", "Fix carbon dioxide", "Produce glucose", "Break down glucose"],
      correct: "Convert light energy to chemical energy",
      explanation: "The light reactions convert light energy into chemical energy in the form of ATP and NADPH, which are used in the Calvin cycle.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "bio12_energy_h1",
      question: "What is the net gain of ATP molecules from one glucose molecule during cellular respiration?",
      options: ["36-38 ATP", "2 ATP", "4 ATP", "100 ATP"],
      correct: "36-38 ATP",
      explanation: "The complete oxidation of one glucose molecule through glycolysis, Krebs cycle, and electron transport chain yields approximately 36-38 ATP molecules.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h2",
      question: "What is the role of NADPH in photosynthesis?",
      options: ["Provides reducing power for carbon fixation", "Absorbs light energy", "Transports electrons", "Produces oxygen"],
      correct: "Provides reducing power for carbon fixation",
      explanation: "NADPH produced in the light reactions provides the reducing power (electrons) needed to convert carbon dioxide into glucose during the Calvin cycle.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h3",
      question: "What is photorespiration and why is it problematic?",
      options: ["When RuBisCO fixes oxygen instead of CO2, reducing efficiency", "When plants respire too much", "When light intensity is too high", "When photosynthesis stops completely"],
      correct: "When RuBisCO fixes oxygen instead of CO2, reducing efficiency",
      explanation: "Photorespiration occurs when RuBisCO enzyme fixes oxygen instead of carbon dioxide, leading to energy loss and reduced photosynthetic efficiency.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h4",
      question: "How do C4 plants minimize photorespiration?",
      options: ["Spatial separation of carbon fixation", "Temporal separation of processes", "Higher light requirements", "Lower temperature tolerance"],
      correct: "Spatial separation of carbon fixation",
      explanation: "C4 plants minimize photorespiration by spatially separating initial carbon fixation in mesophyll cells from the Calvin cycle in bundle sheath cells.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h5",
      question: "What drives ATP synthesis in both photosynthesis and cellular respiration?",
      options: ["Proton gradient across membranes", "Direct energy transfer", "Enzyme activation", "Temperature changes"],
      correct: "Proton gradient across membranes",
      explanation: "Both processes use chemiosmosis, where a proton gradient across membranes (thylakoids in photosynthesis, inner mitochondrial membrane in respiration) drives ATP synthesis.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h6",
      question: "What is the difference between cyclic and non-cyclic photophosphorylation?",
      options: ["Cyclic produces only ATP, non-cyclic produces ATP and NADPH", "Cyclic uses oxygen, non-cyclic doesn't", "Cyclic is faster, non-cyclic is slower", "Cyclic occurs in darkness, non-cyclic in light"],
      correct: "Cyclic produces only ATP, non-cyclic produces ATP and NADPH",
      explanation: "Cyclic photophosphorylation produces only ATP, while non-cyclic photophosphorylation produces both ATP and NADPH, and also releases oxygen.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h7",
      question: "What is the role of oxygen in cellular respiration?",
      options: ["Final electron acceptor in electron transport chain", "Substrate for glycolysis", "Product of Krebs cycle", "Activator of enzymes"],
      correct: "Final electron acceptor in electron transport chain",
      explanation: "Oxygen serves as the final electron acceptor in the electron transport chain, allowing the chain to continue operating and ATP to be produced.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h8",
      question: "What is substrate-level phosphorylation?",
      options: ["Direct transfer of phosphate to ADP", "ATP synthesis using proton gradient", "Breaking of high-energy bonds", "Formation of phospholipids"],
      correct: "Direct transfer of phosphate to ADP",
      explanation: "Substrate-level phosphorylation is the direct transfer of a phosphate group from a high-energy substrate to ADP, forming ATP without using a proton gradient.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h9",
      question: "What is the significance of the P680 and P700 reaction centers?",
      options: ["They absorb light at different wavelengths in photosynthesis", "They are different types of chlorophyll", "They operate at different temperatures", "They are found in different plants"],
      correct: "They absorb light at different wavelengths in photosynthesis",
      explanation: "P680 and P700 are reaction centers in photosystem II and I respectively, named for their optimal light absorption wavelengths (680nm and 700nm).",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h10",
      question: "What is CAM photosynthesis?",
      options: ["Temporal separation of CO2 fixation and Calvin cycle", "Spatial separation of processes", "Continuous photosynthesis", "Photosynthesis without light"],
      correct: "Temporal separation of CO2 fixation and Calvin cycle",
      explanation: "CAM (Crassulacean Acid Metabolism) photosynthesis involves temporal separation where CO2 is fixed at night and the Calvin cycle occurs during the day.",
      difficulty: "Hard"
    }
  ],

  "Unit 4: Evolution": [
    // Easy Questions (10 total)
    {
      id: "bio12_evol_e1",
      question: "What is evolution?",
      options: ["Change in species over time", "Growth of an individual", "Daily changes in behavior", "Seasonal migrations"],
      correct: "Change in species over time",
      explanation: "Evolution is the process by which species change over long periods of time through genetic variation and natural selection.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e2",
      question: "Who proposed the theory of evolution by natural selection?",
      options: ["Charles Darwin", "Albert Einstein", "Isaac Newton", "Marie Curie"],
      correct: "Charles Darwin",
      explanation: "Charles Darwin proposed the theory of evolution by natural selection based on his observations and research, published in 'On the Origin of Species' in 1859.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e3",
      question: "What is natural selection?",
      options: ["Survival of organisms best adapted to their environment", "Random changes in DNA", "Selective breeding by humans", "Migration to new habitats"],
      correct: "Survival of organisms best adapted to their environment",
      explanation: "Natural selection is the process where organisms with favorable traits are more likely to survive and reproduce, passing these traits to their offspring.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e4",
      question: "What are fossils?",
      options: ["Preserved remains of ancient organisms", "Living organisms", "Modern bones", "Plant seeds"],
      correct: "Preserved remains of ancient organisms",
      explanation: "Fossils are preserved remains, impressions, or traces of organisms that lived in the past, providing evidence for evolution.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e5",
      question: "What is adaptation?",
      options: ["Traits that help organisms survive in their environment", "Daily behavioral changes", "Seasonal color changes", "Learning new skills"],
      correct: "Traits that help organisms survive in their environment",
      explanation: "Adaptations are inherited characteristics that increase an organism's chances of survival and reproduction in its specific environment.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e6",
      question: "What is a species?",
      options: ["Group of organisms that can interbreed", "Group of similar-looking organisms", "Group of organisms in the same area", "Group of organisms of the same size"],
      correct: "Group of organisms that can interbreed",
      explanation: "A species is typically defined as a group of organisms that can interbreed and produce fertile offspring.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e7",
      question: "What is variation?",
      options: ["Differences between individuals in a population", "Changes in environment", "Changes in weather", "Changes in habitat"],
      correct: "Differences between individuals in a population",
      explanation: "Variation refers to the differences in characteristics between individuals within a population, which is essential for evolution.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e8",
      question: "What is heredity?",
      options: ["Passing of traits from parents to offspring", "Learning from experience", "Adapting to environment", "Changing over time"],
      correct: "Passing of traits from parents to offspring",
      explanation: "Heredity is the passing of traits from parents to their offspring through genes.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e9",
      question: "What is a mutation?",
      options: ["Change in DNA sequence", "Change in behavior", "Change in habitat", "Change in diet"],
      correct: "Change in DNA sequence",
      explanation: "A mutation is a change in the DNA sequence that can potentially lead to new traits in organisms.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e10",
      question: "What is extinction?",
      options: ["Complete disappearance of a species", "Migration to new areas", "Seasonal dormancy", "Adaptation to new environments"],
      correct: "Complete disappearance of a species",
      explanation: "Extinction occurs when all individuals of a species die out completely, often due to environmental changes or inability to adapt.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "bio12_evol_m1",
      question: "What is genetic drift?",
      options: ["Random changes in allele frequencies", "Directed changes by natural selection", "Gene flow between populations", "Mutation rates"],
      correct: "Random changes in allele frequencies",
      explanation: "Genetic drift refers to random changes in allele frequencies in a population, particularly significant in small populations.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m2",
      question: "What evidence supports evolution?",
      options: ["Fossil record, comparative anatomy, molecular biology", "Only fossil records", "Only DNA evidence", "Only behavioral observations"],
      correct: "Fossil record, comparative anatomy, molecular biology",
      explanation: "Evolution is supported by multiple lines of evidence including fossils, comparative anatomy, embryology, biogeography, and molecular biology.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m3",
      question: "What are homologous structures?",
      options: ["Structures with similar origin but different functions", "Structures with different origins but similar functions", "Identical structures in all species", "Structures that serve no purpose"],
      correct: "Structures with similar origin but different functions",
      explanation: "Homologous structures are anatomical features that share a common evolutionary origin but may have different functions in different species.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m4",
      question: "What is speciation?",
      options: ["Formation of new species", "Death of species", "Migration of species", "Hybridization of species"],
      correct: "Formation of new species",
      explanation: "Speciation is the evolutionary process by which populations evolve to become distinct species, usually through reproductive isolation.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m5",
      question: "What is the founder effect?",
      options: ["Genetic drift in small founding populations", "Natural selection in new environments", "Mutation in isolated populations", "Gene flow between populations"],
      correct: "Genetic drift in small founding populations",
      explanation: "The founder effect occurs when a small group establishes a new population, leading to reduced genetic diversity and potential genetic drift.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m6",
      question: "What are analogous structures?",
      options: ["Structures with similar function but different origins", "Structures with similar origin but different functions", "Identical structures in related species", "Structures that don't function"],
      correct: "Structures with similar function but different origins",
      explanation: "Analogous structures have similar functions but evolved independently in different lineages, demonstrating convergent evolution.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m7",
      question: "What is gene flow?",
      options: ["Movement of alleles between populations", "Mutation within populations", "Natural selection pressure", "Genetic drift effects"],
      correct: "Movement of alleles between populations",
      explanation: "Gene flow is the transfer of alleles from one population to another through migration and breeding.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m8",
      question: "What is reproductive isolation?",
      options: ["Barriers preventing interbreeding between populations", "Physical separation of populations", "Temporal differences in reproduction", "Behavioral differences only"],
      correct: "Barriers preventing interbreeding between populations",
      explanation: "Reproductive isolation includes any barriers that prevent different populations from interbreeding, leading to speciation.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m9",
      question: "What is the bottleneck effect?",
      options: ["Reduction in genetic diversity due to population crash", "Increase in genetic diversity", "Stable population size", "Rapid population growth"],
      correct: "Reduction in genetic diversity due to population crash",
      explanation: "The bottleneck effect occurs when a population's size is significantly reduced, leading to reduced genetic diversity.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m10",
      question: "What is artificial selection?",
      options: ["Human-directed breeding for desired traits", "Natural selection in artificial environments", "Random breeding", "Genetic engineering"],
      correct: "Human-directed breeding for desired traits",
      explanation: "Artificial selection is the process where humans selectively breed organisms for desired traits, similar to natural selection but directed by human choice.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "bio12_evol_h1",
      question: "What is the Hardy-Weinberg principle?",
      options: ["Describes allele frequencies in non-evolving populations", "Explains natural selection", "Describes mutation rates", "Explains speciation"],
      correct: "Describes allele frequencies in non-evolving populations",
      explanation: "The Hardy-Weinberg principle describes the genetic equilibrium in populations where allele frequencies remain constant in the absence of evolutionary forces.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h2",
      question: "What is convergent evolution?",
      options: ["Independent evolution of similar traits", "Evolution of species from common ancestor", "Reverse evolution", "Rapid evolutionary change"],
      correct: "Independent evolution of similar traits",
      explanation: "Convergent evolution occurs when unrelated species independently develop similar characteristics due to similar environmental pressures.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h3",
      question: "What is coevolution?",
      options: ["Reciprocal evolutionary changes between interacting species", "Evolution of multiple traits simultaneously", "Evolution in the same direction", "Evolution at the same rate"],
      correct: "Reciprocal evolutionary changes between interacting species",
      explanation: "Coevolution occurs when two or more species influence each other's evolutionary development through close ecological interactions.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h4",
      question: "What is punctuated equilibrium?",
      options: ["Rapid evolutionary change followed by stability", "Gradual continuous change", "Extinction events", "Genetic bottlenecks"],
      correct: "Rapid evolutionary change followed by stability",
      explanation: "Punctuated equilibrium suggests that evolution occurs in rapid bursts of change followed by long periods of stability, rather than gradual continuous change.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h5",
      question: "What role does sexual selection play in evolution?",
      options: ["Drives evolution of traits that increase mating success", "Only affects reproductive organs", "Has no evolutionary impact", "Only occurs in mammals"],
      correct: "Drives evolution of traits that increase mating success",
      explanation: "Sexual selection drives the evolution of traits that increase an individual's chances of mating and reproductive success, even if they don't improve survival.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h6",
      question: "What is molecular clock?",
      options: ["Using DNA changes to estimate evolutionary time", "Timing of developmental processes", "Circadian rhythms in organisms", "Rate of protein synthesis"],
      correct: "Using DNA changes to estimate evolutionary time",
      explanation: "A molecular clock uses the rate of DNA mutations to estimate when species diverged from common ancestors.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h7",
      question: "What is adaptive radiation?",
      options: ["Rapid evolution of many species from common ancestor", "Gradual adaptation to environment", "Extinction of related species", "Migration to new habitats"],
      correct: "Rapid evolution of many species from common ancestor",
      explanation: "Adaptive radiation is the rapid evolution of many species from a single ancestral species, often occurring when new environments become available.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h8",
      question: "What is the difference between microevolution and macroevolution?",
      options: ["Microevolution is small-scale, macroevolution is large-scale", "Microevolution is fast, macroevolution is slow", "Microevolution is visible, macroevolution is invisible", "Microevolution is recent, macroevolution is ancient"],
      correct: "Microevolution is small-scale, macroevolution is large-scale",
      explanation: "Microevolution refers to small-scale changes within species, while macroevolution refers to large-scale changes such as speciation and higher taxonomic changes.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h9",
      question: "What is neutral evolution?",
      options: ["Evolution of traits that don't affect fitness", "Evolution that favors neutral organisms", "Evolution without natural selection", "Evolution at a constant rate"],
      correct: "Evolution of traits that don't affect fitness",
      explanation: "Neutral evolution refers to the evolution of traits that neither help nor harm an organism's survival and reproduction, driven by genetic drift.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h10",
      question: "What is the endosymbiotic theory?",
      options: ["Eukaryotic cells evolved from prokaryotic partnerships", "Cells evolved from viruses", "Multicellular organisms evolved from single cells", "DNA evolved from RNA"],
      correct: "Eukaryotic cells evolved from prokaryotic partnerships",
      explanation: "The endosymbiotic theory proposes that eukaryotic cells evolved when larger prokaryotic cells engulfed smaller ones, which became organelles like mitochondria and chloroplasts.",
      difficulty: "Hard"
    }
  ],

  "Unit 5: Human Body System": [
    // Easy Questions (10 total)
    {
      id: "bio12_human_e1",
      question: "What is the main function of the circulatory system?",
      options: ["Transport blood throughout the body", "Digest food", "Filter air", "Produce hormones"],
      correct: "Transport blood throughout the body",
      explanation: "The circulatory system's primary function is to transport blood, nutrients, oxygen, and waste products throughout the body.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e2",
      question: "What organ pumps blood in the human body?",
      options: ["Heart", "Liver", "Kidney", "Lung"],
      correct: "Heart",
      explanation: "The heart is a muscular organ that pumps blood through blood vessels to circulate nutrients and oxygen throughout the body.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e3",
      question: "What is the main function of the respiratory system?",
      options: ["Exchange oxygen and carbon dioxide", "Digest nutrients", "Filter blood", "Produce energy"],
      correct: "Exchange oxygen and carbon dioxide",
      explanation: "The respiratory system's main function is to facilitate gas exchange, bringing oxygen into the body and removing carbon dioxide.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e4",
      question: "Which organ filters waste from the blood?",
      options: ["Kidney", "Heart", "Lung", "Stomach"],
      correct: "Kidney",
      explanation: "The kidneys filter waste products and excess water from the blood to produce urine, maintaining the body's chemical balance.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e5",
      question: "What is the basic unit of the nervous system?",
      options: ["Neuron", "Muscle cell", "Blood cell", "Bone cell"],
      correct: "Neuron",
      explanation: "Neurons are the basic functional units of the nervous system, specialized for transmitting electrical and chemical signals.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e6",
      question: "What is the main function of the digestive system?",
      options: ["Break down food and absorb nutrients", "Pump blood", "Exchange gases", "Filter waste"],
      correct: "Break down food and absorb nutrients",
      explanation: "The digestive system breaks down food into smaller molecules that can be absorbed and used by the body for energy and growth.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e7",
      question: "Which system protects the body from disease?",
      options: ["Immune system", "Skeletal system", "Muscular system", "Reproductive system"],
      correct: "Immune system",
      explanation: "The immune system protects the body from pathogens and diseases by recognizing and destroying harmful substances.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e8",
      question: "What is the largest organ in the human body?",
      options: ["Skin", "Liver", "Brain", "Heart"],
      correct: "Skin",
      explanation: "The skin is the largest organ in the human body, serving as a protective barrier and helping regulate body temperature.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e9",
      question: "What connects muscles to bones?",
      options: ["Tendons", "Ligaments", "Cartilage", "Joints"],
      correct: "Tendons",
      explanation: "Tendons are strong, fibrous connective tissues that connect muscles to bones, allowing muscles to move bones.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e10",
      question: "What is the function of red blood cells?",
      options: ["Carry oxygen", "Fight infection", "Clot blood", "Carry nutrients"],
      correct: "Carry oxygen",
      explanation: "Red blood cells contain hemoglobin, which binds to oxygen and transports it from the lungs to tissues throughout the body.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "bio12_human_m1",
      question: "What are the four chambers of the human heart?",
      options: ["Two atria and two ventricles", "Four ventricles", "Four atria", "Two hearts with two chambers each"],
      correct: "Two atria and two ventricles",
      explanation: "The human heart has four chambers: the right and left atria (upper chambers) and the right and left ventricles (lower chambers).",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m2",
      question: "What is the role of hemoglobin in blood?",
      options: ["Carry oxygen", "Fight infections", "Clot blood", "Carry nutrients"],
      correct: "Carry oxygen",
      explanation: "Hemoglobin is a protein in red blood cells that binds to oxygen in the lungs and transports it to tissues throughout the body.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m3",
      question: "What is the function of alveoli in the lungs?",
      options: ["Gas exchange between air and blood", "Warm incoming air", "Filter particles", "Produce mucus"],
      correct: "Gas exchange between air and blood",
      explanation: "Alveoli are tiny air sacs in the lungs where gas exchange occurs, allowing oxygen to enter the blood and carbon dioxide to be removed.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m4",
      question: "What is homeostasis?",
      options: ["Maintaining stable internal conditions", "Growth and development", "Reproduction", "Digestion of food"],
      correct: "Maintaining stable internal conditions",
      explanation: "Homeostasis is the process by which the body maintains stable internal conditions such as temperature, pH, and blood sugar levels.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m5",
      question: "What is the role of insulin in the body?",
      options: ["Regulate blood sugar levels", "Digest proteins", "Fight infections", "Transport oxygen"],
      correct: "Regulate blood sugar levels",
      explanation: "Insulin is a hormone produced by the pancreas that regulates blood glucose levels by facilitating glucose uptake by cells.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m6",
      question: "What is the function of white blood cells?",
      options: ["Fight infections and diseases", "Carry oxygen", "Clot blood", "Transport nutrients"],
      correct: "Fight infections and diseases",
      explanation: "White blood cells are part of the immune system and defend the body against pathogens, infections, and foreign substances.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m7",
      question: "What is the role of the liver?",
      options: ["Detoxify blood and produce bile", "Pump blood", "Exchange gases", "Filter urine"],
      correct: "Detoxify blood and produce bile",
      explanation: "The liver detoxifies harmful substances from the blood, produces bile for fat digestion, and performs many other metabolic functions.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m8",
      question: "What is the function of platelets?",
      options: ["Blood clotting", "Carry oxygen", "Fight infections", "Transport nutrients"],
      correct: "Blood clotting",
      explanation: "Platelets are small cell fragments that help stop bleeding by clumping together and forming blood clots when blood vessels are damaged.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m9",
      question: "What is the difference between voluntary and involuntary muscles?",
      options: ["Voluntary muscles can be consciously controlled", "Voluntary muscles are stronger", "Voluntary muscles are larger", "Voluntary muscles work faster"],
      correct: "Voluntary muscles can be consciously controlled",
      explanation: "Voluntary muscles (like skeletal muscles) can be consciously controlled, while involuntary muscles (like heart and smooth muscles) work automatically.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m10",
      question: "What is the function of the spinal cord?",
      options: ["Transmit signals between brain and body", "Produce hormones", "Filter blood", "Digest food"],
      correct: "Transmit signals between brain and body",
      explanation: "The spinal cord serves as the main pathway for transmitting nerve signals between the brain and the rest of the body.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "bio12_human_h1",
      question: "What is the difference between the sympathetic and parasympathetic nervous systems?",
      options: ["Sympathetic prepares for action, parasympathetic promotes rest", "Both have the same function", "Sympathetic controls digestion, parasympathetic controls movement", "They work in different organs"],
      correct: "Sympathetic prepares for action, parasympathetic promotes rest",
      explanation: "The sympathetic nervous system prepares the body for 'fight or flight' responses, while the parasympathetic system promotes 'rest and digest' activities.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h2",
      question: "What is the nephron and its function?",
      options: ["Functional unit of kidney that filters blood", "Blood vessel in the heart", "Air sac in lungs", "Nerve cell in brain"],
      correct: "Functional unit of kidney that filters blood",
      explanation: "The nephron is the basic functional unit of the kidney, consisting of a glomerulus and tubules that filter blood and produce urine.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h3",
      question: "How does the immune system distinguish between self and non-self?",
      options: ["Through MHC molecules and antigen recognition", "By cell size", "By location in body", "By cellular activity"],
      correct: "Through MHC molecules and antigen recognition",
      explanation: "The immune system uses Major Histocompatibility Complex (MHC) molecules and antigen recognition to distinguish between the body's own cells and foreign substances.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h4",
      question: "What is the role of the hypothalamus in hormone regulation?",
      options: ["Links nervous and endocrine systems", "Produces digestive enzymes", "Filters blood", "Stores nutrients"],
      correct: "Links nervous and endocrine systems",
      explanation: "The hypothalamus serves as a crucial link between the nervous and endocrine systems, controlling hormone release from the pituitary gland.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h5",
      question: "What is autoimmunity?",
      options: ["Immune system attacks body's own cells", "Enhanced immune response", "Complete lack of immunity", "Immunity to all diseases"],
      correct: "Immune system attacks body's own cells",
      explanation: "Autoimmunity occurs when the immune system mistakenly attacks and destroys the body's own healthy cells and tissues.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h6",
      question: "What is the cardiac cycle?",
      options: ["Sequence of heart contraction and relaxation", "Blood circulation through body", "Electrical conduction in heart", "Heart rate regulation"],
      correct: "Sequence of heart contraction and relaxation",
      explanation: "The cardiac cycle is the sequence of events during one heartbeat, including systole (contraction) and diastole (relaxation) of the heart chambers.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h7",
      question: "What is the role of surfactant in the lungs?",
      options: ["Reduces surface tension in alveoli", "Filters incoming air", "Produces mucus", "Exchanges gases"],
      correct: "Reduces surface tension in alveoli",
      explanation: "Surfactant is a substance that reduces surface tension in the alveoli, preventing them from collapsing and making breathing easier.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h8",
      question: "What is the difference between innate and adaptive immunity?",
      options: ["Innate is immediate and general, adaptive is specific and acquired", "Innate is stronger, adaptive is weaker", "Innate is temporary, adaptive is permanent", "Innate is cellular, adaptive is humoral"],
      correct: "Innate is immediate and general, adaptive is specific and acquired",
      explanation: "Innate immunity provides immediate, general protection against pathogens, while adaptive immunity develops specific responses to particular pathogens and creates memory.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h9",
      question: "What is the mechanism of muscle contraction?",
      options: ["Sliding filament theory with actin and myosin", "Expansion and contraction of muscle fibers", "Electrical stimulation only", "Chemical reaction in muscle cells"],
      correct: "Sliding filament theory with actin and myosin",
      explanation: "Muscle contraction occurs through the sliding filament mechanism, where actin and myosin filaments slide past each other, powered by ATP.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h10",
      question: "What is the blood-brain barrier?",
      options: ["Selective barrier protecting brain from toxins", "Physical wall around the brain", "Collection of blood vessels", "Nerve barrier in spinal cord"],
      correct: "Selective barrier protecting brain from toxins",
      explanation: "The blood-brain barrier is a selective barrier formed by tight junctions between brain capillary cells that prevents many substances from entering the brain.",
      difficulty: "Hard"
    }
  ],

  "Unit 6: Climate Change": [
    // Easy Questions (10 total)
    {
      id: "bio12_climate_e1",
      question: "What is climate change?",
      options: ["Long-term changes in global weather patterns", "Daily weather variations", "Seasonal changes", "Ocean currents"],
      correct: "Long-term changes in global weather patterns",
      explanation: "Climate change refers to long-term shifts in global or regional climate patterns, primarily attributed to increased levels of greenhouse gases.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e2",
      question: "What is the main cause of current climate change?",
      options: ["Human activities releasing greenhouse gases", "Natural solar variations", "Volcanic eruptions", "Ocean temperature changes"],
      correct: "Human activities releasing greenhouse gases",
      explanation: "The current climate change is primarily caused by human activities, especially the burning of fossil fuels, which releases greenhouse gases into the atmosphere.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e3",
      question: "Which gas is the most significant greenhouse gas?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correct: "Carbon dioxide",
      explanation: "Carbon dioxide (CO₂) is the most significant greenhouse gas contributing to climate change, primarily from burning fossil fuels.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e4",
      question: "What is the greenhouse effect?",
      options: ["Trapping of heat in Earth's atmosphere", "Growing plants in greenhouses", "Effect of green plants on climate", "Cooling of the atmosphere"],
      correct: "Trapping of heat in Earth's atmosphere",
      explanation: "The greenhouse effect is the process by which certain gases in the atmosphere trap heat from the sun, warming the Earth's surface.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e5",
      question: "What happens to coral reefs due to ocean warming?",
      options: ["Coral bleaching", "Faster coral growth", "Increased biodiversity", "Better coral health"],
      correct: "Coral bleaching",
      explanation: "Ocean warming causes coral bleaching, where corals expel symbiotic algae and turn white, often leading to coral death.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e6",
      question: "What is global warming?",
      options: ["Increase in Earth's average temperature", "Warming of specific regions only", "Seasonal temperature changes", "Indoor heating effects"],
      correct: "Increase in Earth's average temperature",
      explanation: "Global warming refers to the long-term increase in Earth's average surface temperature due to human activities and greenhouse gas emissions.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e7",
      question: "Which human activity contributes most to climate change?",
      options: ["Burning fossil fuels", "Breathing", "Eating meat", "Using water"],
      correct: "Burning fossil fuels",
      explanation: "Burning fossil fuels for energy production, transportation, and industry is the largest single source of greenhouse gas emissions.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e8",
      question: "What is renewable energy?",
      options: ["Energy from sources that naturally replenish", "Energy that can be reused", "Energy from fossils", "Energy from nuclear sources"],
      correct: "Energy from sources that naturally replenish",
      explanation: "Renewable energy comes from sources that naturally replenish themselves, such as solar, wind, water, and geothermal energy.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e9",
      question: "What is carbon footprint?",
      options: ["Total greenhouse gases produced by activities", "Footprint made by carbon", "Amount of carbon in soil", "Carbon content in food"],
      correct: "Total greenhouse gases produced by activities",
      explanation: "A carbon footprint measures the total amount of greenhouse gases produced directly and indirectly by human activities.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e10",
      question: "What is deforestation?",
      options: ["Cutting down forests", "Planting trees", "Forest fires", "Forest diseases"],
      correct: "Cutting down forests",
      explanation: "Deforestation is the clearing or removal of forests, often for agriculture or development, which contributes to climate change.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "bio12_climate_m1",
      question: "How does deforestation contribute to climate change?",
      options: ["Reduces CO₂ absorption and releases stored carbon", "Increases rainfall", "Cools the atmosphere", "Improves air quality"],
      correct: "Reduces CO₂ absorption and releases stored carbon",
      explanation: "Deforestation contributes to climate change by removing trees that absorb CO₂ and releasing the carbon stored in trees and soil.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m2",
      question: "What is ocean acidification?",
      options: ["Decrease in ocean pH due to CO₂ absorption", "Increase in ocean temperature", "Pollution by acid rain", "Changes in ocean currents"],
      correct: "Decrease in ocean pH due to CO₂ absorption",
      explanation: "Ocean acidification occurs when the ocean absorbs excess CO₂ from the atmosphere, forming carbonic acid and lowering ocean pH.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m3",
      question: "How does climate change affect species migration?",
      options: ["Forces species to move to suitable habitats", "Stops all migration", "Makes migration unnecessary", "Only affects marine species"],
      correct: "Forces species to move to suitable habitats",
      explanation: "Climate change alters habitats, forcing many species to migrate to areas with suitable temperature, precipitation, and food sources.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m4",
      question: "What is a carbon footprint?",
      options: ["Total greenhouse gases produced by human activities", "Footprint left by carbon-based life", "Size of carbon molecules", "Amount of carbon in soil"],
      correct: "Total greenhouse gases produced by human activities",
      explanation: "A carbon footprint measures the total amount of greenhouse gases produced directly and indirectly by human activities, expressed as CO₂ equivalent.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m5",
      question: "How do melting ice caps affect global sea levels?",
      options: ["Cause sea levels to rise", "Cause sea levels to fall", "Have no effect on sea levels", "Only affect local water levels"],
      correct: "Cause sea levels to rise",
      explanation: "Melting ice caps and glaciers add water to the oceans, causing global sea levels to rise and threatening coastal communities.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m6",
      question: "What is the difference between weather and climate?",
      options: ["Weather is short-term, climate is long-term patterns", "Weather is global, climate is local", "Weather is predictable, climate is not", "Weather is natural, climate is artificial"],
      correct: "Weather is short-term, climate is long-term patterns",
      explanation: "Weather refers to short-term atmospheric conditions, while climate describes long-term patterns of weather over extended periods.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m7",
      question: "How does agriculture contribute to climate change?",
      options: ["Releases methane and uses fertilizers", "Only absorbs CO₂", "Cools the atmosphere", "Has no climate impact"],
      correct: "Releases methane and uses fertilizers",
      explanation: "Agriculture contributes to climate change through methane emissions from livestock, fertilizer use, and land use changes.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m8",
      question: "What is the role of methane in climate change?",
      options: ["Powerful greenhouse gas from agriculture and landfills", "Coolant that reduces temperature", "Oxygen producer", "Water vapor source"],
      correct: "Powerful greenhouse gas from agriculture and landfills",
      explanation: "Methane is a potent greenhouse gas, much more effective at trapping heat than CO₂, mainly produced by agriculture and waste decomposition.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m9",
      question: "What is carbon sequestration?",
      options: ["Capturing and storing carbon dioxide", "Releasing carbon dioxide", "Converting carbon to methane", "Burning carbon compounds"],
      correct: "Capturing and storing carbon dioxide",
      explanation: "Carbon sequestration is the process of capturing and storing atmospheric carbon dioxide to reduce greenhouse gas concentrations.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m10",
      question: "How does climate change affect biodiversity?",
      options: ["Threatens species survival and ecosystem balance", "Increases all species populations", "Has no effect on biodiversity", "Only affects plant species"],
      correct: "Threatens species survival and ecosystem balance",
      explanation: "Climate change threatens biodiversity by altering habitats, changing species distributions, and disrupting ecosystem relationships.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "bio12_climate_h1",
      question: "What are climate feedback loops?",
      options: ["Processes that amplify or reduce climate change effects", "Weather prediction models", "Ocean current patterns", "Seasonal climate variations"],
      correct: "Processes that amplify or reduce climate change effects",
      explanation: "Climate feedback loops are processes where climate change triggers changes that either amplify (positive feedback) or reduce (negative feedback) the original change.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h2",
      question: "What is the albedo effect in climate change?",
      options: ["Reflection of solar radiation by Earth's surfaces", "Absorption of heat by greenhouse gases", "Emission of infrared radiation", "Formation of cloud cover"],
      correct: "Reflection of solar radiation by Earth's surfaces",
      explanation: "The albedo effect refers to how much solar radiation is reflected by Earth's surfaces; ice reflects more heat than dark surfaces, affecting global temperature.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h3",
      question: "How does climate change affect the water cycle?",
      options: ["Alters precipitation patterns and evaporation rates", "Stops the water cycle completely", "Only affects ocean water", "Makes all areas wetter"],
      correct: "Alters precipitation patterns and evaporation rates",
      explanation: "Climate change intensifies the water cycle, leading to more extreme precipitation events, droughts in some areas, and floods in others.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h4",
      question: "What is the concept of climate tipping points?",
      options: ["Thresholds beyond which climate changes become irreversible", "Daily temperature variations", "Seasonal climate changes", "Weather prediction accuracy"],
      correct: "Thresholds beyond which climate changes become irreversible",
      explanation: "Climate tipping points are critical thresholds beyond which climate systems undergo rapid, potentially irreversible changes.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h5",
      question: "How do urban heat islands contribute to local climate change?",
      options: ["Cities become warmer than surrounding areas", "Cities become cooler than rural areas", "Cities have no temperature difference", "Only affects building temperatures"],
      correct: "Cities become warmer than surrounding areas",
      explanation: "Urban heat islands occur when cities experience higher temperatures than surrounding rural areas due to concrete, asphalt, and reduced vegetation.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h6",
      question: "What is the role of permafrost in climate change?",
      options: ["Melting releases stored carbon and methane", "Provides cooling effect", "Absorbs more CO₂", "Prevents sea level rise"],
      correct: "Melting releases stored carbon and methane",
      explanation: "Permafrost contains large amounts of stored carbon that is released as CO₂ and methane when it melts, accelerating climate change.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h7",
      question: "What is climate adaptation versus mitigation?",
      options: ["Adaptation adjusts to changes, mitigation reduces causes", "Adaptation prevents changes, mitigation accepts them", "Both mean the same thing", "Adaptation is temporary, mitigation is permanent"],
      correct: "Adaptation adjusts to changes, mitigation reduces causes",
      explanation: "Climate adaptation involves adjusting to climate change impacts, while mitigation focuses on reducing greenhouse gas emissions to limit climate change.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h8",
      question: "What is the relationship between climate change and extreme weather?",
      options: ["Climate change increases frequency and intensity of extreme events", "No relationship exists", "Climate change only affects temperature", "Extreme weather prevents climate change"],
      correct: "Climate change increases frequency and intensity of extreme events",
      explanation: "Climate change increases the frequency and intensity of extreme weather events such as hurricanes, droughts, floods, and heat waves.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h9",
      question: "What is geoengineering in climate change context?",
      options: ["Technological interventions to counteract climate change", "Natural climate solutions", "Weather modification", "Geological surveys"],
      correct: "Technological interventions to counteract climate change",
      explanation: "Geoengineering refers to large-scale technological interventions designed to counteract climate change, such as solar radiation management or carbon capture.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h10",
      question: "How does climate change affect ocean currents?",
      options: ["Alters circulation patterns affecting global climate", "Speeds up all currents", "Stops ocean circulation", "Only affects surface currents"],
      correct: "Alters circulation patterns affecting global climate",
      explanation: "Climate change can alter ocean circulation patterns by changing water temperature and salinity, potentially disrupting global climate regulation.",
      difficulty: "Hard"
    }
  ]
};

export const getGrade12BiologyQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 15): BiologyQuestion[] => {
  console.log('Getting Grade 12 Biology questions for:', { chapter, difficulty, count });
  
  const chapterQuestions = grade12BiologyQuestions[chapter];
  if (!chapterQuestions) {
    console.log('Chapter not found:', chapter);
    console.log('Available chapters:', Object.keys(grade12BiologyQuestions));
    return [];
  }

  // Filter questions by difficulty
  const difficultyLevel = difficulty.charAt(0).toUpperCase() + difficulty.slice(1) as 'Easy' | 'Medium' | 'Hard';
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === difficultyLevel);
  
  console.log(`Found ${filteredQuestions.length} ${difficultyLevel} questions for ${chapter}`);
  
  // Shuffle and return requested count
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export interface GeographyQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12GeographyQuestions: { [unit: string]: GeographyQuestion[] } = {
  "Unit 1: Major Geological Processes Associated with Plate Tectonics": [
    // Easy Questions (10 total)
    {
      id: "geo12_u1_e1",
      question: "What is plate tectonics?",
      options: ["The theory of moving continents", "The study of earthquakes", "The formation of mountains", "Weather patterns"],
      correct: "The theory of moving continents",
      explanation: "Plate tectonics is the theory that Earth's outer shell is divided into several plates that glide over the mantle.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e2",
      question: "What causes earthquakes?",
      options: ["Movement of tectonic plates", "Wind erosion", "Ocean currents", "Solar radiation"],
      correct: "Movement of tectonic plates",
      explanation: "Earthquakes are caused by sudden movements along fractures in the Earth's crust due to tectonic plate movements.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e3",
      question: "Which type of boundary creates new oceanic crust?",
      options: ["Divergent boundary", "Convergent boundary", "Transform boundary", "Continental boundary"],
      correct: "Divergent boundary",
      explanation: "Divergent boundaries are where new oceanic crust is created as plates move apart and magma rises.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e4",
      question: "What is the Ring of Fire?",
      options: ["Area of frequent earthquakes and volcanoes", "Desert region", "Ocean current", "Mountain range"],
      correct: "Area of frequent earthquakes and volcanoes",
      explanation: "The Ring of Fire is a region around the Pacific Ocean where many earthquakes and volcanic eruptions occur.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e5",
      question: "What is magma?",
      options: ["Molten rock beneath Earth's surface", "Solid rock", "Ocean water", "Atmospheric gas"],
      correct: "Molten rock beneath Earth's surface",
      explanation: "Magma is molten or semi-molten rock beneath the Earth's surface that can erupt as lava.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e6",
      question: "What is a fault?",
      options: ["A crack in the Earth's crust", "A type of volcano", "Ocean trench", "Mountain peak"],
      correct: "A crack in the Earth's crust",
      explanation: "A fault is a fracture or crack in the Earth's crust along which movement has occurred.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e7",
      question: "What is continental drift?",
      options: ["Movement of continents over geological time", "Ocean currents", "Wind patterns", "Seasonal changes"],
      correct: "Movement of continents over geological time",
      explanation: "Continental drift is the theory that continents move slowly across the Earth's surface over millions of years.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e8",
      question: "What is a volcano?",
      options: ["Opening in Earth's crust where lava erupts", "Deep ocean trench", "High mountain", "Desert formation"],
      correct: "Opening in Earth's crust where lava erupts",
      explanation: "A volcano is an opening in the Earth's crust through which lava, gas, and ash can erupt.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e9",
      question: "What is the lithosphere?",
      options: ["Earth's rigid outer layer", "Liquid core", "Atmosphere", "Ocean floor"],
      correct: "Earth's rigid outer layer",
      explanation: "The lithosphere is Earth's rigid outer layer consisting of the crust and upper mantle.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u1_e10",
      question: "What is an oceanic trench?",
      options: ["Deep depression in the ocean floor", "Shallow reef", "Island chain", "Continental shelf"],
      correct: "Deep depression in the ocean floor",
      explanation: "An oceanic trench is a deep, narrow depression in the ocean floor formed at subduction zones.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "geo12_u1_m1",
      question: "What happens at a convergent plate boundary?",
      options: ["Plates collide and one subducts", "Plates move apart", "Plates slide past each other", "Plates remain stationary"],
      correct: "Plates collide and one subducts",
      explanation: "At convergent boundaries, plates collide and typically one plate is forced beneath another in a process called subduction.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m2",
      question: "Which geological process is responsible for forming the Himalayas?",
      options: ["Continental-continental collision", "Oceanic-oceanic collision", "Transform faulting", "Volcanic activity"],
      correct: "Continental-continental collision",
      explanation: "The Himalayas were formed by the collision of the Indian and Eurasian continental plates.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m3",
      question: "What is seafloor spreading?",
      options: ["Creation of new oceanic crust at mid-ocean ridges", "Ocean water expansion", "Continental drift", "Tsunami formation"],
      correct: "Creation of new oceanic crust at mid-ocean ridges",
      explanation: "Seafloor spreading is the process where new oceanic crust is formed at mid-ocean ridges and spreads outward.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m4",
      question: "What is subduction?",
      options: ["One plate sinking beneath another", "Plates moving apart", "Plates sliding horizontally", "Volcanic eruption"],
      correct: "One plate sinking beneath another",
      explanation: "Subduction occurs when one tectonic plate is forced beneath another at convergent boundaries.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m5",
      question: "What type of boundary is the San Andreas Fault?",
      options: ["Transform boundary", "Divergent boundary", "Convergent boundary", "Inactive boundary"],
      correct: "Transform boundary",
      explanation: "The San Andreas Fault is a transform boundary where plates slide past each other horizontally.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m6",
      question: "What is the difference between magma and lava?",
      options: ["Magma is underground, lava is on surface", "They are the same thing", "Lava is colder", "Magma contains no gases"],
      correct: "Magma is underground, lava is on surface",
      explanation: "Magma is molten rock beneath the Earth's surface, while lava is magma that has erupted onto the surface.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m7",
      question: "What causes the formation of island chains like Hawaii?",
      options: ["Hotspots", "Subduction zones", "Transform faults", "Continental rifting"],
      correct: "Hotspots",
      explanation: "Hotspots are stationary plumes of hot material that create volcanic island chains as plates move over them.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m8",
      question: "What is the relationship between plate boundaries and earthquake activity?",
      options: ["Most earthquakes occur at plate boundaries", "Earthquakes only occur inland", "No relationship exists", "Boundaries prevent earthquakes"],
      correct: "Most earthquakes occur at plate boundaries",
      explanation: "The majority of earthquakes occur at or near tectonic plate boundaries due to the stress and movement there.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m9",
      question: "What is paleomagnetism?",
      options: ["Study of ancient magnetic fields in rocks", "Current magnetic field strength", "Magnetic pole movement", "Compass navigation"],
      correct: "Study of ancient magnetic fields in rocks",
      explanation: "Paleomagnetism studies the record of Earth's ancient magnetic field preserved in rocks, providing evidence for plate tectonics.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u1_m10",
      question: "What type of volcano is typically found at subduction zones?",
      options: ["Stratovolcano", "Shield volcano", "Cinder cone", "Fissure vent"],
      correct: "Stratovolcano",
      explanation: "Stratovolcanoes are steep-sided volcanoes formed by explosive eruptions typical of subduction zone settings.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "geo12_u1_h1",
      question: "What is the relationship between the age of oceanic crust and its distance from mid-ocean ridges?",
      options: ["Age increases with distance from ridges", "Older crust is closer to ridges", "Younger crust is farther from ridges", "No relationship exists"],
      correct: "Age increases with distance from ridges",
      explanation: "Oceanic crust becomes progressively older as distance from mid-ocean ridges increases due to seafloor spreading.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h2",
      question: "Which mechanism drives plate motion according to current theory?",
      options: ["Convection currents in the mantle", "Earth's rotation", "Gravitational pull of the moon", "Solar radiation"],
      correct: "Convection currents in the mantle",
      explanation: "Mantle convection currents are the primary driving force behind plate tectonic movement.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h3",
      question: "What type of volcanic activity is associated with subduction zones?",
      options: ["Explosive, andesitic volcanism", "Gentle, basaltic volcanism", "No volcanic activity", "Only geothermal activity"],
      correct: "Explosive, andesitic volcanism",
      explanation: "Subduction zones are characterized by explosive volcanic eruptions with intermediate to felsic magma composition.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h4",
      question: "What is the Wilson Cycle?",
      options: ["Complete cycle of ocean basin formation and destruction", "Annual magnetic pole reversal", "Volcanic eruption pattern", "Continental weathering process"],
      correct: "Complete cycle of ocean basin formation and destruction",
      explanation: "The Wilson Cycle describes the complete process of ocean basin formation, growth, and eventual destruction through plate tectonics.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h5",
      question: "What is the asthenosphere's role in plate tectonics?",
      options: ["Provides a soft layer for plates to move on", "Forms the ocean floor", "Creates magnetic fields", "Controls weather patterns"],
      correct: "Provides a soft layer for plates to move on",
      explanation: "The asthenosphere is a semi-molten layer beneath the lithosphere that allows tectonic plates to move.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h6",
      question: "How do metamorphic core complexes form?",
      options: ["Through extensional tectonics and crustal thinning", "Only through compression", "Via volcanic activity", "Through erosion only"],
      correct: "Through extensional tectonics and crustal thinning",
      explanation: "Metamorphic core complexes form in regions of extreme crustal extension where deep rocks are exposed.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h7",
      question: "What is the significance of ophiolites in understanding plate tectonics?",
      options: ["They represent preserved oceanic crust on land", "They show continental drift", "They indicate climate change", "They form only in deserts"],
      correct: "They represent preserved oceanic crust on land",
      explanation: "Ophiolites are sections of oceanic crust and upper mantle that have been thrust onto continents, providing evidence of past ocean basins.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h8",
      question: "What controls the angle of subduction at convergent margins?",
      options: ["Age and temperature of subducting plate", "Wind patterns", "Ocean depth only", "Continental size"],
      correct: "Age and temperature of subducting plate",
      explanation: "Older, colder oceanic plates subduct at steeper angles than younger, warmer plates due to density differences.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h9",
      question: "What is slab rollback in subduction zones?",
      options: ["Backward migration of the subduction zone", "Forward movement only", "Horizontal plate sliding", "Volcanic cessation"],
      correct: "Backward migration of the subduction zone",
      explanation: "Slab rollback occurs when the subducting slab steepens and the trench migrates backward, affecting regional tectonics.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u1_h10",
      question: "How do triple junctions affect regional geology?",
      options: ["Create complex deformation patterns", "Have no geological impact", "Only affect climate", "Prevent earthquakes"],
      correct: "Create complex deformation patterns",
      explanation: "Triple junctions, where three plates meet, create complex patterns of deformation, volcanism, and seismic activity.",
      difficulty: "Hard"
    }
  ],

  "Unit 2: Climate Change": [
    // Easy Questions (10 total)
    {
      id: "geo12_u2_e1",
      question: "What is the greenhouse effect?",
      options: ["Trapping of heat in Earth's atmosphere", "Cooling of the planet", "Formation of clouds", "Ocean currents"],
      correct: "Trapping of heat in Earth's atmosphere",
      explanation: "The greenhouse effect is the process by which certain gases in the atmosphere trap heat from the sun.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e2",
      question: "Which gas is the primary contributor to human-caused climate change?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"],
      correct: "Carbon dioxide",
      explanation: "Carbon dioxide from burning fossil fuels is the main greenhouse gas contributing to climate change.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e3",
      question: "What is global warming?",
      options: ["Increase in Earth's average temperature", "Decrease in Earth's temperature", "Changes in weather patterns", "Melting of ice only"],
      correct: "Increase in Earth's average temperature",
      explanation: "Global warming refers to the long-term increase in Earth's average surface temperature due to human activities.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e4",
      question: "What is methane?",
      options: ["A greenhouse gas", "A cooling agent", "Pure oxygen", "Water vapor only"],
      correct: "A greenhouse gas",
      explanation: "Methane is a potent greenhouse gas that contributes significantly to global warming.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e5",
      question: "What are fossil fuels?",
      options: ["Coal, oil, and natural gas", "Solar and wind energy", "Nuclear materials", "Renewable resources"],
      correct: "Coal, oil, and natural gas",
      explanation: "Fossil fuels are energy sources formed from ancient organic matter, primarily coal, oil, and natural gas.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e6",
      question: "What is deforestation?",
      options: ["Clearing of forests", "Planting new trees", "Forest management", "Tree disease"],
      correct: "Clearing of forests",
      explanation: "Deforestation is the clearing or removal of forests, often contributing to climate change.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e7",
      question: "What is the ozone layer?",
      options: ["Protective layer in the atmosphere", "Ocean current", "Ground-level gas", "Mountain formation"],
      correct: "Protective layer in the atmosphere",
      explanation: "The ozone layer is a region of Earth's stratosphere that protects life from harmful ultraviolet radiation.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e8",
      question: "What causes ice caps to melt?",
      options: ["Rising temperatures", "Ocean currents only", "Wind patterns", "Volcanic activity"],
      correct: "Rising temperatures",
      explanation: "Rising global temperatures due to climate change cause ice caps and glaciers to melt.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e9",
      question: "What is weather vs climate?",
      options: ["Weather is short-term, climate is long-term", "They are the same thing", "Climate is daily, weather is yearly", "No difference exists"],
      correct: "Weather is short-term, climate is long-term",
      explanation: "Weather refers to short-term atmospheric conditions, while climate is the long-term average of weather patterns.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u2_e10",
      question: "What is renewable energy?",
      options: ["Energy that can be replenished naturally", "Energy from fossil fuels", "Nuclear energy only", "Non-sustainable energy"],
      correct: "Energy that can be replenished naturally",
      explanation: "Renewable energy comes from sources that are naturally replenished, like solar, wind, and water.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "geo12_u2_m1",
      question: "What is the main cause of sea level rise?",
      options: ["Thermal expansion of oceans and melting ice", "Increased rainfall", "Ocean currents", "Tidal changes"],
      correct: "Thermal expansion of oceans and melting ice",
      explanation: "Sea level rise is primarily caused by thermal expansion of warming oceans and melting of glaciers and ice sheets.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m2",
      question: "Which feedback mechanism amplifies climate change?",
      options: ["Ice-albedo feedback", "Cloud formation", "Ocean absorption", "Forest growth"],
      correct: "Ice-albedo feedback",
      explanation: "As ice melts, darker surfaces absorb more heat, leading to more warming and more melting.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m3",
      question: "What is ocean acidification?",
      options: ["Decrease in ocean pH due to CO2 absorption", "Increase in ocean temperature", "Ocean pollution", "Salt water increase"],
      correct: "Decrease in ocean pH due to CO2 absorption",
      explanation: "Ocean acidification occurs when oceans absorb CO2 from the atmosphere, lowering their pH.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m4",
      question: "What is the thermohaline circulation?",
      options: ["Global ocean current system driven by temperature and salinity", "Surface waves only", "Tidal movements", "River flow patterns"],
      correct: "Global ocean current system driven by temperature and salinity",
      explanation: "Thermohaline circulation is the global conveyor belt of ocean currents driven by differences in water temperature and salinity.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m5",
      question: "How do aerosols affect climate?",
      options: ["Can both cool and warm the atmosphere", "Only cool the atmosphere", "Only warm the atmosphere", "Have no climate effect"],
      correct: "Can both cool and warm the atmosphere",
      explanation: "Aerosols can cool by reflecting sunlight or warm by absorbing radiation, depending on their properties.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m6",
      question: "What is permafrost?",
      options: ["Permanently frozen ground", "Temporary ice formation", "Ocean ice", "Mountain snow"],
      correct: "Permanently frozen ground",
      explanation: "Permafrost is ground that remains frozen for at least two consecutive years, containing large amounts of carbon.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m7",
      question: "What is the El Niño phenomenon?",
      options: ["Periodic warming of Pacific Ocean waters", "Atlantic hurricane season", "Arctic ice melting", "Desert formation"],
      correct: "Periodic warming of Pacific Ocean waters",
      explanation: "El Niño is a climate pattern characterized by unusual warming of surface waters in the eastern Pacific Ocean.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m8",
      question: "How do forests affect the carbon cycle?",
      options: ["Act as carbon sinks by absorbing CO2", "Only release carbon", "Have no effect on carbon", "Increase atmospheric CO2"],
      correct: "Act as carbon sinks by absorbing CO2",
      explanation: "Forests absorb CO2 from the atmosphere during photosynthesis, acting as important carbon sinks.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m9",
      question: "What is climate sensitivity?",
      options: ["Temperature response to doubled CO2", "Rate of temperature change", "Weather variability", "Seasonal differences"],
      correct: "Temperature response to doubled CO2",
      explanation: "Climate sensitivity measures how much global temperature would increase if atmospheric CO2 concentrations doubled.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u2_m10",
      question: "What are extreme weather events?",
      options: ["Unusual weather patterns outside normal ranges", "Daily weather changes", "Seasonal variations", "Predictable weather"],
      correct: "Unusual weather patterns outside normal ranges",
      explanation: "Extreme weather events are unusual weather conditions that are rare and often severe, potentially linked to climate change.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "geo12_u2_h1",
      question: "What is the carbon cycle's role in climate regulation?",
      options: ["Regulates atmospheric CO2 levels", "Controls ocean salinity", "Determines wind patterns", "Affects soil formation"],
      correct: "Regulates atmospheric CO2 levels",
      explanation: "The carbon cycle naturally regulates atmospheric CO2 levels through exchanges between atmosphere, oceans, and biosphere.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h2",
      question: "How do aerosols affect climate?",
      options: ["Can both cool and warm the atmosphere", "Only warm the atmosphere", "Only cool the atmosphere", "Have no effect"],
      correct: "Can both cool and warm the atmosphere",
      explanation: "Aerosols can have cooling effects by reflecting sunlight or warming effects by absorbing radiation.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h3",
      question: "What is climate sensitivity?",
      options: ["Temperature change from CO2 doubling", "Rate of ice melting", "Ocean temperature change", "Precipitation change"],
      correct: "Temperature change from CO2 doubling",
      explanation: "Climate sensitivity measures how much global temperature would increase if atmospheric CO2 concentrations doubled.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h4",
      question: "What role do forests play in climate regulation?",
      options: ["Carbon sequestration and albedo effects", "Only oxygen production", "Only water cycle", "Only wildlife habitat"],
      correct: "Carbon sequestration and albedo effects",
      explanation: "Forests regulate climate by absorbing CO2, affecting local albedo, and influencing water and energy cycles.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h5",
      question: "What is the Atlantic Meridional Overturning Circulation (AMOC)?",
      options: ["Major ocean current system in the Atlantic", "Wind pattern", "Ice formation process", "Desert climate system"],
      correct: "Major ocean current system in the Atlantic",
      explanation: "AMOC is a crucial ocean circulation system that transports warm water northward and cold water southward in the Atlantic.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h6",
      question: "How do cloud formation processes affect climate modeling?",
      options: ["Create major uncertainties in predictions", "Have no effect on models", "Make models perfectly accurate", "Only affect local weather"],
      correct: "Create major uncertainties in predictions",
      explanation: "Cloud processes are complex and represent one of the largest uncertainties in climate models and predictions.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h7",
      question: "What is the role of methane hydrates in climate change?",
      options: ["Potential positive feedback mechanism", "Cooling effect only", "No climate impact", "Absorb greenhouse gases"],
      correct: "Potential positive feedback mechanism",
      explanation: "Methane hydrates in permafrost and ocean sediments could release large amounts of methane as temperatures rise.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h8",
      question: "How does the Milankovitch cycle affect long-term climate?",
      options: ["Controls ice ages through orbital variations", "Affects daily weather only", "Controls seasonal changes", "Has no climate effect"],
      correct: "Controls ice ages through orbital variations",
      explanation: "Milankovitch cycles describe variations in Earth's orbit and tilt that drive long-term climate changes and ice ages.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h9",
      question: "What is radiative forcing?",
      options: ["Measure of factors that influence climate", "Solar energy output", "Earth's rotation", "Atmospheric pressure"],
      correct: "Measure of factors that influence climate",
      explanation: "Radiative forcing measures the difference between solar energy absorbed and energy radiated back to space.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u2_h10",
      question: "How do tipping points affect climate system stability?",
      options: ["Can cause irreversible climate changes", "Always stabilize climate", "Have no long-term effects", "Only affect local areas"],
      correct: "Can cause irreversible climate changes",
      explanation: "Climate tipping points are thresholds beyond which changes become self-reinforcing and potentially irreversible.",
      difficulty: "Hard"
    }
  ],

  "Unit 3: Population Policies Programs and the Environment": [
    // Easy Questions (10 total)
    {
      id: "geo12_u3_e1",
      question: "What is population density?",
      options: ["Number of people per unit area", "Total population", "Birth rate", "Death rate"],
      correct: "Number of people per unit area",
      explanation: "Population density is the number of people living in a specific area, usually measured per square kilometer.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e2",
      question: "What is demographic transition?",
      options: ["Change in population growth patterns", "Migration patterns", "Age distribution", "Gender ratio"],
      correct: "Change in population growth patterns",
      explanation: "Demographic transition describes the change from high birth and death rates to low birth and death rates.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e3",
      question: "What is carrying capacity?",
      options: ["Maximum population an environment can sustain", "Current population", "Population growth rate", "Birth rate"],
      correct: "Maximum population an environment can sustain",
      explanation: "Carrying capacity is the maximum number of individuals an environment can support indefinitely.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e4",
      question: "What is birth rate?",
      options: ["Number of births per 1000 people per year", "Total number of births", "Population increase", "Family size"],
      correct: "Number of births per 1000 people per year",
      explanation: "Birth rate is typically measured as the number of live births per 1000 people in a population per year.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e5",
      question: "What is death rate?",
      options: ["Number of deaths per 1000 people per year", "Total deaths", "Life expectancy", "Disease frequency"],
      correct: "Number of deaths per 1000 people per year",
      explanation: "Death rate is typically measured as the number of deaths per 1000 people in a population per year.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e6",
      question: "What is migration?",
      options: ["Movement of people from one place to another", "Population growth", "Urban development", "Economic change"],
      correct: "Movement of people from one place to another",
      explanation: "Migration is the movement of people from one geographic location to another, either temporarily or permanently.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e7",
      question: "What is urbanization?",
      options: ["Growth of cities and urban areas", "Rural development", "Population decline", "Industrial growth"],
      correct: "Growth of cities and urban areas",
      explanation: "Urbanization is the process by which rural areas become urbanized as a result of economic development and population growth.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e8",
      question: "What is family planning?",
      options: ["Programs to help families control births", "Housing programs", "Education programs", "Healthcare services"],
      correct: "Programs to help families control births",
      explanation: "Family planning refers to programs and practices that help individuals and couples decide the number and timing of children.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e9",
      question: "What is population growth rate?",
      options: ["Rate at which population increases or decreases", "Birth rate only", "Death rate only", "Migration rate"],
      correct: "Rate at which population increases or decreases",
      explanation: "Population growth rate is the rate at which the number of individuals in a population increases or decreases over time.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u3_e10",
      question: "What is life expectancy?",
      options: ["Average number of years a person is expected to live", "Maximum age", "Retirement age", "Health status"],
      correct: "Average number of years a person is expected to live",
      explanation: "Life expectancy is the average number of years that individuals in a population are expected to live.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "geo12_u3_m1",
      question: "How does population growth affect resource consumption?",
      options: ["Increases demand for natural resources", "Decreases resource use", "No effect on resources", "Only affects renewable resources"],
      correct: "Increases demand for natural resources",
      explanation: "Population growth increases demand for food, water, energy, and other natural resources.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m2",
      question: "What is sustainable population management?",
      options: ["Balancing population with resource availability", "Reducing population only", "Increasing population only", "Ignoring environmental limits"],
      correct: "Balancing population with resource availability",
      explanation: "Sustainable population management aims to balance human population with environmental carrying capacity.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m3",
      question: "What is the demographic dividend?",
      options: ["Economic benefit from favorable age structure", "Population bonus", "Government benefit", "Healthcare improvement"],
      correct: "Economic benefit from favorable age structure",
      explanation: "Demographic dividend occurs when a large portion of the population is of working age, potentially boosting economic growth.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m4",
      question: "How does education affect population growth?",
      options: ["Higher education typically reduces birth rates", "Education increases birth rates", "No relationship exists", "Only affects mortality"],
      correct: "Higher education typically reduces birth rates",
      explanation: "Education, especially for women, is associated with lower fertility rates and better family planning.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m5",
      question: "What is the dependency ratio?",
      options: ["Ratio of dependents to working-age population", "Birth to death ratio", "Urban to rural ratio", "Male to female ratio"],
      correct: "Ratio of dependents to working-age population",
      explanation: "Dependency ratio measures the number of dependents (children and elderly) relative to the working-age population.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m6",
      question: "What drives rural-urban migration?",
      options: ["Economic opportunities and better services in cities", "Government policies only", "Natural disasters only", "Climate change only"],
      correct: "Economic opportunities and better services in cities",
      explanation: "People migrate from rural to urban areas seeking better job opportunities, education, healthcare, and living standards.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m7",
      question: "What is population momentum?",
      options: ["Continued growth despite declining fertility", "Immediate population change", "Government population control", "Migration patterns"],
      correct: "Continued growth despite declining fertility",
      explanation: "Population momentum occurs when population continues to grow even after fertility rates decline due to age structure.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m8",
      question: "How do natural resources affect population distribution?",
      options: ["People concentrate where resources are abundant", "No relationship exists", "Resources repel population", "Only affects rural areas"],
      correct: "People concentrate where resources are abundant",
      explanation: "Populations tend to concentrate in areas with abundant natural resources like water, fertile soil, and minerals.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m9",
      question: "What is population aging?",
      options: ["Increasing proportion of elderly in population", "People living longer only", "Youth population growth", "Constant age structure"],
      correct: "Increasing proportion of elderly in population",
      explanation: "Population aging refers to the increasing median age and proportion of elderly people in a population.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u3_m10",
      question: "How does healthcare access affect demographic patterns?",
      options: ["Reduces mortality and affects population growth", "Only affects birth rates", "Has no demographic impact", "Only affects urban areas"],
      correct: "Reduces mortality and affects population growth",
      explanation: "Better healthcare access reduces mortality rates, increases life expectancy, and affects overall population dynamics.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "geo12_u3_h1",
      question: "What is the ecological footprint?",
      options: ["Measure of human impact on environment", "Population size", "Economic development", "Life expectancy"],
      correct: "Measure of human impact on environment",
      explanation: "Ecological footprint measures the amount of natural resources required to support a population's lifestyle.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h2",
      question: "How do family planning programs affect environmental sustainability?",
      options: ["Reduce population pressure on resources", "Increase resource consumption", "Have no environmental impact", "Only affect economic growth"],
      correct: "Reduce population pressure on resources",
      explanation: "Family planning programs can help achieve sustainable population levels, reducing pressure on natural resources.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h3",
      question: "What is the relationship between education and population growth?",
      options: ["Higher education correlates with lower birth rates", "Education increases birth rates", "No relationship exists", "Only affects mortality"],
      correct: "Higher education correlates with lower birth rates",
      explanation: "Education, especially for women, is strongly correlated with lower fertility rates and slower population growth.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h4",
      question: "How does urbanization affect environmental impact?",
      options: ["Concentrates impact but can increase efficiency", "Only negative impacts", "Only positive impacts", "No environmental effect"],
      correct: "Concentrates impact but can increase efficiency",
      explanation: "Urbanization concentrates environmental impacts but can also improve resource efficiency through economies of scale.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h5",
      question: "What is the theory of demographic transition?",
      options: ["Model explaining population change with development", "Simple population growth model", "Migration theory only", "Economic development theory"],
      correct: "Model explaining population change with development",
      explanation: "Demographic transition theory describes how populations change from high birth/death rates to low rates with development.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h6",
      question: "How do population policies affect human rights?",
      options: ["Can conflict with reproductive rights", "Always protect rights", "Have no rights implications", "Only affect economic rights"],
      correct: "Can conflict with reproductive rights",
      explanation: "Population policies may sometimes conflict with individual reproductive rights and require careful balance.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h7",
      question: "What is the relationship between population density and resource scarcity?",
      options: ["High density can lead to resource competition", "No relationship exists", "Density reduces resource needs", "Only affects renewable resources"],
      correct: "High density can lead to resource competition",
      explanation: "High population density can intensify competition for limited resources, potentially leading to scarcity.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h8",
      question: "How does climate change affect population migration?",
      options: ["Creates environmental refugees", "Reduces all migration", "Has no migration effects", "Only affects voluntary migration"],
      correct: "Creates environmental refugees",
      explanation: "Climate change can force people to migrate due to sea level rise, desertification, and extreme weather events.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h9",
      question: "What is the Malthusian theory of population?",
      options: ["Population grows faster than food supply", "Population and resources grow equally", "Resources grow faster than population", "No relationship between population and resources"],
      correct: "Population grows faster than food supply",
      explanation: "Malthusian theory suggests population grows exponentially while food supply grows arithmetically, leading to crisis.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u3_h10",
      question: "How do gender equality and population dynamics interact?",
      options: ["Gender equality typically reduces fertility rates", "Gender equality increases birth rates", "No relationship exists", "Only affects mortality patterns"],
      correct: "Gender equality typically reduces fertility rates",
      explanation: "Greater gender equality, particularly women's empowerment, is associated with lower fertility rates and better population outcomes.",
      difficulty: "Hard"
    }
  ],

  "Unit 4: Solutions to Environmental and Sustainability Problems": [
    // Easy Questions (10 total)
    {
      id: "geo12_u4_e1",
      question: "What is renewable energy?",
      options: ["Energy from sources that naturally replenish", "Energy from fossil fuels", "Nuclear energy", "Coal energy"],
      correct: "Energy from sources that naturally replenish",
      explanation: "Renewable energy comes from natural sources that are constantly replenished, like solar and wind.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e2",
      question: "What is recycling?",
      options: ["Converting waste into reusable materials", "Throwing away waste", "Burning waste", "Burying waste"],
      correct: "Converting waste into reusable materials",
      explanation: "Recycling is the process of converting waste materials into new materials and objects.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e3",
      question: "What is sustainable development?",
      options: ["Development that meets present needs without compromising future", "Any economic growth", "Industrial development", "Urban expansion"],
      correct: "Development that meets present needs without compromising future",
      explanation: "Sustainable development meets current needs while ensuring future generations can meet their own needs.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e4",
      question: "What is solar energy?",
      options: ["Energy from the sun", "Energy from wind", "Energy from water", "Energy from coal"],
      correct: "Energy from the sun",
      explanation: "Solar energy is renewable energy generated from sunlight using solar panels or other technologies.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e5",
      question: "What is wind energy?",
      options: ["Energy generated from moving air", "Energy from water", "Energy from the sun", "Energy from fossil fuels"],
      correct: "Energy generated from moving air",
      explanation: "Wind energy is renewable energy generated by harnessing the power of moving air with wind turbines.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e6",
      question: "What is conservation?",
      options: ["Protection of natural resources", "Using resources quickly", "Industrial development", "Urban expansion"],
      correct: "Protection of natural resources",
      explanation: "Conservation involves the protection, preservation, and careful management of natural resources.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e7",
      question: "What is composting?",
      options: ["Decomposing organic waste into fertilizer", "Burning waste", "Burying waste", "Plastic recycling"],
      correct: "Decomposing organic waste into fertilizer",
      explanation: "Composting is the process of decomposing organic waste to create nutrient-rich fertilizer for plants.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e8",
      question: "What is energy efficiency?",
      options: ["Using less energy to perform the same task", "Using more energy", "Wasting energy", "Avoiding energy use"],
      correct: "Using less energy to perform the same task",
      explanation: "Energy efficiency means using less energy to provide the same level of service or output.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e9",
      question: "What is water conservation?",
      options: ["Using water wisely and efficiently", "Using unlimited water", "Polluting water sources", "Ignoring water use"],
      correct: "Using water wisely and efficiently",
      explanation: "Water conservation involves using water efficiently and reducing unnecessary water consumption.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u4_e10",
      question: "What is organic farming?",
      options: ["Farming without synthetic chemicals", "Industrial farming only", "Using only pesticides", "Genetic modification"],
      correct: "Farming without synthetic chemicals",
      explanation: "Organic farming avoids synthetic fertilizers, pesticides, and GMOs, relying on natural methods.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "geo12_u4_m1",
      question: "What is carbon sequestration?",
      options: ["Capturing and storing atmospheric carbon", "Releasing carbon into atmosphere", "Using carbon for energy", "Trading carbon credits"],
      correct: "Capturing and storing atmospheric carbon",
      explanation: "Carbon sequestration involves capturing atmospheric CO2 and storing it to reduce greenhouse gas levels.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m2",
      question: "What is the circular economy?",
      options: ["Economic model that eliminates waste", "Traditional linear economy", "Service-based economy", "Agricultural economy"],
      correct: "Economic model that eliminates waste",
      explanation: "The circular economy is designed to eliminate waste and keep materials in use for as long as possible.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m3",
      question: "What is geothermal energy?",
      options: ["Energy from Earth's internal heat", "Energy from wind", "Energy from water", "Energy from biomass"],
      correct: "Energy from Earth's internal heat",
      explanation: "Geothermal energy harnesses heat from within the Earth to generate electricity or provide heating.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m4",
      question: "What is hydroelectric power?",
      options: ["Electricity generated from flowing water", "Power from fossil fuels", "Solar electricity", "Wind electricity"],
      correct: "Electricity generated from flowing water",
      explanation: "Hydroelectric power generates electricity by harnessing the energy of flowing or falling water.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m5",
      question: "What is biomass energy?",
      options: ["Energy from organic materials", "Energy from fossils", "Nuclear energy", "Chemical energy"],
      correct: "Energy from organic materials",
      explanation: "Biomass energy is derived from organic materials like wood, crop residues, and organic waste.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m6",
      question: "What is sustainable agriculture?",
      options: ["Farming that maintains soil health and biodiversity", "Industrial farming only", "Monoculture farming", "Chemical-intensive farming"],
      correct: "Farming that maintains soil health and biodiversity",
      explanation: "Sustainable agriculture produces food while maintaining environmental health and economic viability.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m7",
      question: "What is green building?",
      options: ["Environmentally responsible construction", "Any new building", "Expensive construction", "Government buildings only"],
      correct: "Environmentally responsible construction",
      explanation: "Green building involves designing and constructing buildings that minimize environmental impact.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m8",
      question: "What is carbon footprint reduction?",
      options: ["Decreasing greenhouse gas emissions", "Increasing emissions", "Ignoring emissions", "Only measuring emissions"],
      correct: "Decreasing greenhouse gas emissions",
      explanation: "Carbon footprint reduction involves strategies to decrease the amount of greenhouse gases produced by activities.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m9",
      question: "What is ecosystem restoration?",
      options: ["Returning damaged ecosystems to natural state", "Creating new ecosystems", "Studying ecosystems", "Avoiding ecosystem areas"],
      correct: "Returning damaged ecosystems to natural state",
      explanation: "Ecosystem restoration involves assisting the recovery of ecosystems that have been degraded or destroyed.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u4_m10",
      question: "What is integrated pest management?",
      options: ["Combining multiple pest control methods", "Using only pesticides", "Ignoring pests", "Biological control only"],
      correct: "Combining multiple pest control methods",
      explanation: "Integrated pest management combines biological, cultural, and chemical methods to control pests sustainably.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "geo12_u4_h1",
      question: "What is ecosystem restoration?",
      options: ["Returning degraded ecosystems to natural state", "Creating new ecosystems", "Studying ecosystems", "Protecting existing ecosystems"],
      correct: "Returning degraded ecosystems to natural state",
      explanation: "Ecosystem restoration involves assisting the recovery of ecosystems that have been degraded, damaged, or destroyed.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h2",
      question: "How does green technology address environmental challenges?",
      options: ["Provides clean alternatives to harmful practices", "Only focuses on energy", "Replaces all traditional technology", "Has no environmental benefit"],
      correct: "Provides clean alternatives to harmful practices",
      explanation: "Green technology offers environmentally friendly alternatives that reduce pollution and resource consumption.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h3",
      question: "What is adaptive management in environmental conservation?",
      options: ["Flexible approach that learns from outcomes", "Fixed management strategy", "Emergency response only", "Top-down management"],
      correct: "Flexible approach that learns from outcomes",
      explanation: "Adaptive management is a flexible approach that adjusts strategies based on monitoring results and changing conditions.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h4",
      question: "What role does international cooperation play in solving global environmental problems?",
      options: ["Essential for addressing transboundary issues", "Unnecessary for environmental issues", "Only for local problems", "Slows down solutions"],
      correct: "Essential for addressing transboundary issues",
      explanation: "International cooperation is crucial for addressing global environmental challenges that cross national boundaries.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h5",
      question: "What is industrial ecology?",
      options: ["Designing industrial systems like natural ecosystems", "Traditional industrial processes", "Only recycling industries", "Avoiding industrial development"],
      correct: "Designing industrial systems like natural ecosystems",
      explanation: "Industrial ecology designs industrial systems to mimic natural ecosystems, minimizing waste and maximizing efficiency.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h6",
      question: "How does life cycle assessment help environmental decision-making?",
      options: ["Evaluates environmental impacts throughout product life", "Only considers production phase", "Ignores environmental impacts", "Only looks at disposal"],
      correct: "Evaluates environmental impacts throughout product life",
      explanation: "Life cycle assessment evaluates environmental impacts from raw material extraction through disposal or recycling.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h7",
      question: "What is the precautionary principle in environmental management?",
      options: ["Taking preventive action despite scientific uncertainty", "Waiting for complete certainty", "Ignoring potential risks", "Only reacting after damage occurs"],
      correct: "Taking preventive action despite scientific uncertainty",
      explanation: "The precautionary principle advocates taking preventive measures when there is scientific uncertainty about potential environmental harm.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h8",
      question: "How do natural capital accounting systems work?",
      options: ["Assign economic value to ecosystem services", "Ignore natural resources", "Only count financial capital", "Avoid environmental accounting"],
      correct: "Assign economic value to ecosystem services",
      explanation: "Natural capital accounting quantifies and values ecosystem services to integrate them into economic decision-making.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h9",
      question: "What is the role of biomimicry in sustainable design?",
      options: ["Learning from nature to create sustainable solutions", "Copying nature exactly", "Avoiding natural systems", "Only aesthetic copying"],
      correct: "Learning from nature to create sustainable solutions",
      explanation: "Biomimicry studies nature's best ideas and adapts them to create sustainable technological and design solutions.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u4_h10",
      question: "How do environmental management systems promote sustainability?",
      options: ["Systematic approach to environmental improvement", "One-time environmental assessment", "Ignoring environmental impacts", "Only regulatory compliance"],
      correct: "Systematic approach to environmental improvement",
      explanation: "Environmental management systems provide a systematic framework for organizations to improve their environmental performance continuously.",
      difficulty: "Hard"
    }
  ],

  "Unit 5: Challenges of Economic Development": [
    // Easy Questions (10 total)
    {
      id: "geo12_u5_e1",
      question: "What is economic development?",
      options: ["Improvement in economic well-being and living standards", "Only GDP growth", "Industrial growth", "Population growth"],
      correct: "Improvement in economic well-being and living standards",
      explanation: "Economic development encompasses improvements in economic well-being, living standards, and quality of life.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e2",
      question: "What is poverty?",
      options: ["Lack of basic necessities for adequate living", "Low income only", "Unemployment", "Rural living"],
      correct: "Lack of basic necessities for adequate living",
      explanation: "Poverty is the state of lacking sufficient money or material possessions for basic needs.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e3",
      question: "What is income inequality?",
      options: ["Unequal distribution of income among population", "Low wages", "Unemployment", "Economic growth"],
      correct: "Unequal distribution of income among population",
      explanation: "Income inequality refers to the uneven distribution of income across different segments of the population.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e4",
      question: "What is GDP?",
      options: ["Gross Domestic Product - total economic output", "Government Development Program", "Global Development Plan", "General Development Policy"],
      correct: "Gross Domestic Product - total economic output",
      explanation: "GDP measures the total monetary value of all goods and services produced within a country.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e5",
      question: "What is unemployment?",
      options: ["People without jobs who are seeking work", "All people not working", "Retirement", "Student status"],
      correct: "People without jobs who are seeking work",
      explanation: "Unemployment refers to people who are actively seeking work but cannot find employment.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e6",
      question: "What is infrastructure?",
      options: ["Basic physical systems of a country", "Government buildings only", "Private businesses", "Natural resources"],
      correct: "Basic physical systems of a country",
      explanation: "Infrastructure includes roads, bridges, water systems, power grids, and other basic facilities needed for economic activity.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e7",
      question: "What is industrialization?",
      options: ["Development of manufacturing industries", "Agricultural development", "Service sector growth", "Resource extraction"],
      correct: "Development of manufacturing industries",
      explanation: "Industrialization is the process of developing industries, especially manufacturing, in a country or region.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e8",
      question: "What is foreign investment?",
      options: ["Money invested by foreign countries or companies", "Domestic savings", "Government spending", "Personal loans"],
      correct: "Money invested by foreign countries or companies",
      explanation: "Foreign investment is capital invested by individuals or entities from other countries.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e9",
      question: "What is trade?",
      options: ["Exchange of goods and services between countries", "Domestic production", "Government aid", "Natural resources"],
      correct: "Exchange of goods and services between countries",
      explanation: "International trade involves the exchange of goods and services across national borders.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u5_e10",
      question: "What is economic growth?",
      options: ["Increase in economic output over time", "Population increase", "Price increases", "Government spending"],
      correct: "Increase in economic output over time",
      explanation: "Economic growth refers to the increase in a country's economic output, typically measured by GDP growth.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "geo12_u5_m1",
      question: "How does environmental degradation affect economic development?",
      options: ["Reduces natural capital and long-term growth", "Has no economic impact", "Only affects agriculture", "Increases short-term profits"],
      correct: "Reduces natural capital and long-term growth",
      explanation: "Environmental degradation depletes natural resources and ecosystem services needed for sustainable economic growth.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m2",
      question: "What is the resource curse?",
      options: ["Negative effects of natural resource abundance", "Benefits of having resources", "Lack of natural resources", "Resource depletion"],
      correct: "Negative effects of natural resource abundance",
      explanation: "The resource curse refers to the paradox where countries with abundant natural resources may experience slower economic growth.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m3",
      question: "What is sustainable economic development?",
      options: ["Economic growth that doesn't harm the environment", "Any economic growth", "Only environmental protection", "No economic activity"],
      correct: "Economic growth that doesn't harm the environment",
      explanation: "Sustainable economic development aims to improve living standards while protecting the environment for future generations.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m4",
      question: "What is the informal economy?",
      options: ["Economic activity outside government regulation", "Only illegal activities", "Government sector", "Corporate sector"],
      correct: "Economic activity outside government regulation",
      explanation: "The informal economy includes economic activities that are not regulated or taxed by the government.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m5",
      question: "What is human capital?",
      options: ["Skills, knowledge, and experience of workers", "Physical infrastructure", "Natural resources", "Financial capital"],
      correct: "Skills, knowledge, and experience of workers",
      explanation: "Human capital refers to the economic value of workers' skills, knowledge, and experience.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m6",
      question: "What is debt burden in developing countries?",
      options: ["Heavy foreign debt limiting development spending", "Domestic savings", "Foreign investment", "Trade surplus"],
      correct: "Heavy foreign debt limiting development spending",
      explanation: "Debt burden refers to excessive foreign debt that limits a country's ability to invest in development.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m7",
      question: "What is technology transfer?",
      options: ["Sharing technology between countries", "Domestic innovation only", "Resource extraction", "Cultural exchange"],
      correct: "Sharing technology between countries",
      explanation: "Technology transfer involves sharing technological knowledge and capabilities between countries or organizations.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m8",
      question: "What are millennium development goals?",
      options: ["International development targets", "National economic plans", "Corporate strategies", "Environmental policies"],
      correct: "International development targets",
      explanation: "Millennium Development Goals were international development targets aimed at reducing poverty and improving living standards.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m9",
      question: "What is brain drain?",
      options: ["Emigration of skilled workers", "Immigration of workers", "Education decline", "Technology loss"],
      correct: "Emigration of skilled workers",
      explanation: "Brain drain refers to the emigration of skilled and educated individuals from their home country.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u5_m10",
      question: "What is market failure?",
      options: ["When markets don't allocate resources efficiently", "Economic recession", "Business bankruptcy", "Government intervention"],
      correct: "When markets don't allocate resources efficiently",
      explanation: "Market failure occurs when free markets fail to allocate resources efficiently, often requiring government intervention.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "geo12_u5_h1",
      question: "What is the environmental Kuznets curve?",
      options: ["Relationship between income and environmental quality", "Population growth curve", "Resource depletion curve", "Economic growth model"],
      correct: "Relationship between income and environmental quality",
      explanation: "The environmental Kuznets curve suggests environmental degradation initially increases with income then decreases.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h2",
      question: "How does globalization affect local environments?",
      options: ["Can increase environmental pressure through trade", "Only positive environmental effects", "No environmental impact", "Only affects developed countries"],
      correct: "Can increase environmental pressure through trade",
      explanation: "Globalization can increase environmental pressure through expanded production, trade, and resource extraction.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h3",
      question: "What is green growth?",
      options: ["Economic growth while reducing environmental impact", "Any economic growth", "Growth in green industries only", "Agricultural growth"],
      correct: "Economic growth while reducing environmental impact",
      explanation: "Green growth aims to achieve economic growth while reducing environmental impacts and improving resource efficiency.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h4",
      question: "How do trade policies affect environmental sustainability?",
      options: ["Can either promote or hinder environmental protection", "Always harm environment", "Always help environment", "Have no environmental effect"],
      correct: "Can either promote or hinder environmental protection",
      explanation: "Trade policies can either support environmental goals through green standards or undermine them through resource exploitation.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h5",
      question: "What is the Dutch Disease phenomenon?",
      options: ["Economic problems from resource booms", "Physical disease", "Agricultural problem", "Population issue"],
      correct: "Economic problems from resource booms",
      explanation: "Dutch Disease occurs when resource booms lead to currency appreciation and decline in other economic sectors.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h6",
      question: "How does institutional quality affect economic development?",
      options: ["Strong institutions promote sustainable growth", "Institutions don't matter", "Only political institutions matter", "Only economic institutions matter"],
      correct: "Strong institutions promote sustainable growth",
      explanation: "Good governance, rule of law, and effective institutions are crucial for sustainable economic development.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h7",
      question: "What is the middle-income trap?",
      options: ["When countries stagnate at middle-income levels", "Poverty trap", "High-income problem", "Low-income issue"],
      correct: "When countries stagnate at middle-income levels",
      explanation: "The middle-income trap occurs when countries struggle to transition from middle-income to high-income status.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h8",
      question: "How do natural disasters affect economic development?",
      options: ["Can destroy infrastructure and set back development", "Always promote development", "Have no economic impact", "Only affect agriculture"],
      correct: "Can destroy infrastructure and set back development",
      explanation: "Natural disasters can destroy infrastructure, reduce productivity, and significantly set back economic development efforts.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h9",
      question: "What is the role of financial inclusion in development?",
      options: ["Provides access to financial services for all", "Only for wealthy individuals", "Excludes poor populations", "Only banking services"],
      correct: "Provides access to financial services for all",
      explanation: "Financial inclusion ensures that all individuals and businesses have access to useful and affordable financial products.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u5_h10",
      question: "How does corruption affect economic development?",
      options: ["Undermines growth and resource allocation", "Promotes economic growth", "Has no economic impact", "Only affects politics"],
      correct: "Undermines growth and resource allocation",
      explanation: "Corruption distorts economic incentives, reduces efficiency, and diverts resources away from productive uses.",
      difficulty: "Hard"
    }
  ],

  "Unit 6: Solutions to Environmental and Sustainability Problems Solutions": [
    // Easy Questions (10 total)
    {
      id: "geo12_u6_e1",
      question: "What is conservation?",
      options: ["Protection and preservation of natural resources", "Using resources quickly", "Industrial development", "Urban expansion"],
      correct: "Protection and preservation of natural resources",
      explanation: "Conservation involves the protection, preservation, and careful management of natural resources.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e2",
      question: "What is environmental education?",
      options: ["Teaching about environmental issues and solutions", "Only outdoor activities", "Scientific research", "Government policy"],
      correct: "Teaching about environmental issues and solutions",
      explanation: "Environmental education aims to increase awareness and knowledge about environmental issues and promote sustainable behavior.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e3",
      question: "What is community-based conservation?",
      options: ["Local communities managing their natural resources", "Government-only conservation", "International conservation", "Private conservation"],
      correct: "Local communities managing their natural resources",
      explanation: "Community-based conservation involves local communities in managing and protecting their natural resources.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e4",
      question: "What is reforestation?",
      options: ["Replanting trees in deforested areas", "Cutting down forests", "Forest management", "Urban forestry"],
      correct: "Replanting trees in deforested areas",
      explanation: "Reforestation is the process of replanting trees in areas where forests have been cut down or destroyed.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e5",
      question: "What is habitat protection?",
      options: ["Preserving natural areas for wildlife", "Building new habitats", "Removing wildlife", "Urban development"],
      correct: "Preserving natural areas for wildlife",
      explanation: "Habitat protection involves preserving natural areas to maintain biodiversity and wildlife populations.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e6",
      question: "What is pollution control?",
      options: ["Reducing harmful substances in the environment", "Increasing pollution", "Ignoring pollution", "Only measuring pollution"],
      correct: "Reducing harmful substances in the environment",
      explanation: "Pollution control involves measures to reduce or eliminate harmful substances released into the environment.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e7",
      question: "What is environmental monitoring?",
      options: ["Tracking environmental conditions over time", "One-time environmental assessment", "Ignoring environmental changes", "Only government responsibility"],
      correct: "Tracking environmental conditions over time",
      explanation: "Environmental monitoring involves systematic tracking of environmental conditions to detect changes and trends.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e8",
      question: "What is sustainable tourism?",
      options: ["Tourism that doesn't harm the environment", "Mass tourism", "Expensive tourism only", "Domestic tourism only"],
      correct: "Tourism that doesn't harm the environment",
      explanation: "Sustainable tourism aims to meet tourist needs while protecting the environment and supporting local communities.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e9",
      question: "What is environmental policy?",
      options: ["Government rules to protect the environment", "Business strategies", "Personal choices", "International agreements only"],
      correct: "Government rules to protect the environment",
      explanation: "Environmental policy consists of government laws and regulations designed to protect the environment.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u6_e10",
      question: "What is environmental awareness?",
      options: ["Understanding environmental issues and impacts", "Ignoring environmental problems", "Only scientific knowledge", "Government propaganda"],
      correct: "Understanding environmental issues and impacts",
      explanation: "Environmental awareness involves understanding environmental problems and their impacts on society and nature.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "geo12_u6_m1",
      question: "What is ecosystem-based adaptation?",
      options: ["Using ecosystems to help adapt to climate change", "Only technological adaptation", "Economic adaptation", "Social adaptation only"],
      correct: "Using ecosystems to help adapt to climate change",
      explanation: "Ecosystem-based adaptation uses natural ecosystems to help communities adapt to climate change impacts.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m2",
      question: "What is the role of indigenous knowledge in environmental solutions?",
      options: ["Provides traditional sustainable practices", "Is outdated and irrelevant", "Only applies to remote areas", "Conflicts with modern science"],
      correct: "Provides traditional sustainable practices",
      explanation: "Indigenous knowledge systems often contain valuable traditional practices for sustainable resource management.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m3",
      question: "What is integrated watershed management?",
      options: ["Holistic approach to managing entire watersheds", "Only water quality management", "Urban water management", "Industrial water use"],
      correct: "Holistic approach to managing entire watersheds",
      explanation: "Integrated watershed management considers all aspects of water resources and land use within a watershed.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m4",
      question: "What is environmental impact assessment?",
      options: ["Evaluating potential environmental effects of projects", "Only economic assessment", "Social impact only", "Ignoring environmental impacts"],
      correct: "Evaluating potential environmental effects of projects",
      explanation: "Environmental impact assessment evaluates the potential environmental consequences of proposed projects.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m5",
      question: "What is sustainable forest management?",
      options: ["Managing forests for long-term health and productivity", "Clear-cutting forests", "Avoiding forest use", "Only timber production"],
      correct: "Managing forests for long-term health and productivity",
      explanation: "Sustainable forest management balances economic, environmental, and social objectives in forest use.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m6",
      question: "What is environmental restoration?",
      options: ["Returning damaged environments to natural condition", "Creating new environments", "Avoiding damaged areas", "Only studying environments"],
      correct: "Returning damaged environments to natural condition",
      explanation: "Environmental restoration aims to return damaged or degraded ecosystems to their natural state.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m7",
      question: "What is the polluter pays principle?",
      options: ["Those who pollute should bear the costs", "Government pays all costs", "No one pays for pollution", "Only victims pay"],
      correct: "Those who pollute should bear the costs",
      explanation: "The polluter pays principle holds that those responsible for pollution should bear the cost of cleanup and prevention.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m8",
      question: "What is environmental certification?",
      options: ["Verifying products meet environmental standards", "Only government approval", "Marketing strategy only", "Avoiding standards"],
      correct: "Verifying products meet environmental standards",
      explanation: "Environmental certification verifies that products or processes meet specific environmental performance standards.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m9",
      question: "What is adaptive capacity in environmental management?",
      options: ["Ability to adjust to changing conditions", "Fixed management approach", "Ignoring changes", "Only emergency response"],
      correct: "Ability to adjust to changing conditions",
      explanation: "Adaptive capacity is the ability of systems to adjust to changing environmental conditions and disturbances.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u6_m10",
      question: "What is environmental governance?",
      options: ["Systems for making environmental decisions", "Only government control", "No decision-making process", "Private sector only"],
      correct: "Systems for making environmental decisions",
      explanation: "Environmental governance involves the institutions and processes through which environmental decisions are made.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "geo12_u6_h1",
      question: "What is payment for ecosystem services?",
      options: ["Compensating for environmental benefits provided", "Taxing environmental damage", "Free ecosystem services", "Government subsidies only"],
      correct: "Compensating for environmental benefits provided",
      explanation: "Payment for ecosystem services provides economic incentives for conserving and restoring ecosystems.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h2",
      question: "How does participatory governance improve environmental management?",
      options: ["Involves stakeholders in decision-making", "Excludes public participation", "Only government decisions", "Reduces transparency"],
      correct: "Involves stakeholders in decision-making",
      explanation: "Participatory governance includes various stakeholders in environmental decision-making for better outcomes.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h3",
      question: "What is integrated landscape management?",
      options: ["Coordinated management across land uses", "Single-use land management", "Urban planning only", "Agricultural management only"],
      correct: "Coordinated management across land uses",
      explanation: "Integrated landscape management coordinates different land uses to optimize multiple objectives sustainably.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h4",
      question: "What role does technology transfer play in environmental solutions?",
      options: ["Shares clean technologies globally", "Keeps technology local", "Only transfers harmful technology", "Prevents innovation"],
      correct: "Shares clean technologies globally",
      explanation: "Technology transfer helps spread clean and sustainable technologies from developed to developing countries.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h5",
      question: "What is the concept of planetary boundaries?",
      options: ["Safe operating limits for Earth systems", "National borders only", "Ocean boundaries", "Atmospheric layers"],
      correct: "Safe operating limits for Earth systems",
      explanation: "Planetary boundaries define the safe operating space for humanity within Earth's critical systems.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h6",
      question: "How does social-ecological resilience work?",
      options: ["Ability of coupled systems to adapt and transform", "Only social resilience", "Only ecological resilience", "Avoiding system changes"],
      correct: "Ability of coupled systems to adapt and transform",
      explanation: "Social-ecological resilience is the capacity of coupled human-environment systems to cope with and adapt to change.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h7",
      question: "What is the ecosystem approach to management?",
      options: ["Managing entire ecosystems rather than single species", "Species-focused management", "Human-centered management only", "Avoiding ecosystem considerations"],
      correct: "Managing entire ecosystems rather than single species",
      explanation: "The ecosystem approach focuses on managing entire ecosystems to maintain their structure, function, and services.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h8",
      question: "How do environmental markets promote conservation?",
      options: ["Create economic incentives for environmental protection", "Ignore market mechanisms", "Only government regulation", "Discourage conservation"],
      correct: "Create economic incentives for environmental protection",
      explanation: "Environmental markets use economic incentives like carbon trading to promote environmental protection and restoration.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h9",
      question: "What is transformative capacity in sustainability?",
      options: ["Ability to create fundamentally new systems", "Only incremental changes", "Maintaining status quo", "Avoiding transformation"],
      correct: "Ability to create fundamentally new systems",
      explanation: "Transformative capacity is the ability to create fundamentally new systems when existing systems become unsustainable.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u6_h10",
      question: "How does transboundary environmental cooperation work?",
      options: ["Countries collaborate on shared environmental issues", "Each country acts independently", "Avoiding international cooperation", "Only regional cooperation"],
      correct: "Countries collaborate on shared environmental issues",
      explanation: "Transboundary environmental cooperation involves countries working together on environmental issues that cross borders.",
      difficulty: "Hard"
    }
  ],

  "Unit 7: Contemporary Global Geographic Issues and Public Concerns": [
    // Easy Questions (10 total)
    {
      id: "geo12_u7_e1",
      question: "What is globalization?",
      options: ["Increasing interconnectedness worldwide", "Only economic growth", "Cultural isolation", "Political independence"],
      correct: "Increasing interconnectedness worldwide",
      explanation: "Globalization refers to the increasing interconnectedness of countries through trade, culture, and communication.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e2",
      question: "What is urban sprawl?",
      options: ["Uncontrolled expansion of urban areas", "Compact city development", "Rural development", "Population decline"],
      correct: "Uncontrolled expansion of urban areas",
      explanation: "Urban sprawl is the uncontrolled expansion of urban areas into surrounding regions.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e3",
      question: "What is food security?",
      options: ["Access to sufficient, safe, and nutritious food", "Food storage only", "Agricultural production", "Food prices"],
      correct: "Access to sufficient, safe, and nutritious food",
      explanation: "Food security means having reliable access to sufficient quantities of affordable, nutritious food.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e4",
      question: "What is water scarcity?",
      options: ["Lack of sufficient water resources", "Too much water", "Water pollution only", "Ocean levels"],
      correct: "Lack of sufficient water resources",
      explanation: "Water scarcity occurs when water demand exceeds available supply or when poor water quality restricts its use.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e5",
      question: "What is energy security?",
      options: ["Reliable access to energy sources", "Energy storage only", "Renewable energy only", "Energy efficiency"],
      correct: "Reliable access to energy sources",
      explanation: "Energy security means having reliable, affordable access to energy sources to meet economic and social needs.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e6",
      question: "What is a refugee?",
      options: ["Person forced to flee their country", "Voluntary migrant", "Tourist", "Temporary visitor"],
      correct: "Person forced to flee their country",
      explanation: "A refugee is someone who has been forced to flee their country because of persecution, war, or violence.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e7",
      question: "What is terrorism?",
      options: ["Use of violence for political goals", "Natural disaster", "Economic crisis", "Cultural conflict"],
      correct: "Use of violence for political goals",
      explanation: "Terrorism is the unlawful use of violence and intimidation to achieve political aims.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e8",
      question: "What is cultural diversity?",
      options: ["Variety of cultural groups in society", "Single culture dominance", "Cultural isolation", "Language barriers"],
      correct: "Variety of cultural groups in society",
      explanation: "Cultural diversity refers to the variety of cultural groups and their practices within a society.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e9",
      question: "What is pandemic?",
      options: ["Disease outbreak affecting multiple countries", "Local disease outbreak", "Seasonal illness", "Chronic disease"],
      correct: "Disease outbreak affecting multiple countries",
      explanation: "A pandemic is a disease outbreak that spreads across multiple countries or worldwide.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u7_e10",
      question: "What is cyberspace?",
      options: ["Virtual environment of computer networks", "Outer space", "Physical space", "Geographic region"],
      correct: "Virtual environment of computer networks",
      explanation: "Cyberspace refers to the virtual environment created by computer networks and the internet.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "geo12_u7_m1",
      question: "What is the digital divide?",
      options: ["Gap in access to digital technologies", "Computer programming", "Internet speed differences", "Technology costs"],
      correct: "Gap in access to digital technologies",
      explanation: "The digital divide refers to the gap between those who have access to digital technologies and those who don't.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m2",
      question: "How does climate change affect migration patterns?",
      options: ["Creates climate refugees and displacement", "Has no effect on migration", "Only affects internal migration", "Reduces all migration"],
      correct: "Creates climate refugees and displacement",
      explanation: "Climate change can force people to migrate due to sea level rise, droughts, and extreme weather events.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m3",
      question: "What is urban heat island effect?",
      options: ["Cities being warmer than surrounding areas", "Cooling effect in cities", "Rural heating", "Ocean warming"],
      correct: "Cities being warmer than surrounding areas",
      explanation: "Urban heat island effect occurs when cities experience higher temperatures than surrounding rural areas.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m4",
      question: "What is food insecurity?",
      options: ["Lack of reliable access to adequate food", "Food poisoning", "Agricultural problems only", "Food preferences"],
      correct: "Lack of reliable access to adequate food",
      explanation: "Food insecurity is the lack of reliable access to sufficient quantities of affordable, nutritious food.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m5",
      question: "What is human trafficking?",
      options: ["Illegal trade in human beings", "Legal migration", "Tourism", "Cultural exchange"],
      correct: "Illegal trade in human beings",
      explanation: "Human trafficking is the illegal trade of humans for forced labor, sexual slavery, or commercial sexual exploitation.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m6",
      question: "What is environmental justice?",
      options: ["Fair treatment in environmental matters", "Environmental law only", "Nature protection", "Pollution control"],
      correct: "Fair treatment in environmental matters",
      explanation: "Environmental justice ensures fair treatment of all people regardless of race, income, or nationality in environmental matters.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m7",
      question: "What is glocalization?",
      options: ["Adapting global products to local conditions", "Only globalization", "Only localization", "Cultural isolation"],
      correct: "Adapting global products to local conditions",
      explanation: "Glocalization is the adaptation of global products and services to local markets and conditions.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m8",
      question: "What is the resource conflict?",
      options: ["Disputes over natural resource access", "Only territorial disputes", "Cultural conflicts", "Economic disputes only"],
      correct: "Disputes over natural resource access",
      explanation: "Resource conflicts arise from competition over access to natural resources like water, oil, or minerals.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m9",
      question: "What is sustainable urbanization?",
      options: ["City growth that doesn't harm environment", "Any urban growth", "Rural development", "Urban decline"],
      correct: "City growth that doesn't harm environment",
      explanation: "Sustainable urbanization involves managing urban growth to minimize environmental impact and improve quality of life.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u7_m10",
      question: "What is global governance?",
      options: ["International cooperation on global issues", "World government", "National governance only", "Local governance"],
      correct: "International cooperation on global issues",
      explanation: "Global governance involves international cooperation and institutions to address global challenges and issues.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "geo12_u7_h1",
      question: "What is geopolitics?",
      options: ["Politics influenced by geography", "Only domestic politics", "Economic policy", "Social policy"],
      correct: "Politics influenced by geography",
      explanation: "Geopolitics studies how geography influences political power and international relations.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h2",
      question: "How do transnational corporations affect local environments?",
      options: ["Can have both positive and negative impacts", "Only positive impacts", "Only negative impacts", "No environmental impact"],
      correct: "Can have both positive and negative impacts",
      explanation: "TNCs can bring clean technology and investment but may also cause environmental degradation.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h3",
      question: "What is the concept of global commons?",
      options: ["Shared resources beyond national jurisdiction", "Private property only", "National resources", "Local community resources"],
      correct: "Shared resources beyond national jurisdiction",
      explanation: "Global commons are shared resources like the atmosphere, oceans, and Antarctica that belong to all humanity.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h4",
      question: "How does water scarcity affect global security?",
      options: ["Can lead to conflicts and instability", "Has no security implications", "Only affects agriculture", "Improves international cooperation"],
      correct: "Can lead to conflicts and instability",
      explanation: "Water scarcity can cause conflicts between and within countries, affecting regional and global security.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h5",
      question: "What is the anthropocene epoch?",
      options: ["Current geological age dominated by human impact", "Pre-human geological period", "Future time period", "Ice age period"],
      correct: "Current geological age dominated by human impact",
      explanation: "The Anthropocene is the proposed current geological epoch characterized by significant human impact on Earth's systems.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h6",
      question: "How does space geography affect global politics?",
      options: ["Control of space affects national power", "Space has no political significance", "Only affects science", "Only commercial interests"],
      correct: "Control of space affects national power",
      explanation: "Space capabilities increasingly affect national security, communication, and economic competitiveness.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h7",
      question: "What is the role of mega-cities in global systems?",
      options: ["Major economic and cultural centers", "Only population centers", "Only administrative centers", "Isolated urban areas"],
      correct: "Major economic and cultural centers",
      explanation: "Mega-cities serve as major nodes in global economic, cultural, and political networks.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h8",
      question: "How does artificial intelligence affect geography?",
      options: ["Changes spatial patterns and interactions", "Has no geographic impact", "Only affects technology", "Only affects communication"],
      correct: "Changes spatial patterns and interactions",
      explanation: "AI affects location of economic activities, transportation patterns, and human-environment interactions.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h9",
      question: "What is the geography of social media?",
      options: ["Spatial patterns of digital communication", "Physical location of servers", "Internet infrastructure only", "Computer geography"],
      correct: "Spatial patterns of digital communication",
      explanation: "Geography of social media examines how digital communication varies across space and affects places.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u7_h10",
      question: "How do global supply chains affect local places?",
      options: ["Connect local areas to global economy", "Only affect global level", "Isolate local areas", "Have no local impact"],
      correct: "Connect local areas to global economy",
      explanation: "Global supply chains connect local production to global markets, affecting local economies and environments.",
      difficulty: "Hard"
    }
  ],

  "Unit 8: Geographical Enquiry and Map Making": [
    // Easy Questions (10 total)
    {
      id: "geo12_u8_e1",
      question: "What is a map scale?",
      options: ["Ratio of map distance to actual distance", "Size of the map", "Map colors", "Map symbols"],
      correct: "Ratio of map distance to actual distance",
      explanation: "Map scale shows the relationship between distances on the map and corresponding distances on the ground.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e2",
      question: "What is GIS?",
      options: ["Geographic Information System", "Global Internet System", "General Information Service", "Geological Investigation System"],
      correct: "Geographic Information System",
      explanation: "GIS is a system for capturing, storing, analyzing, and presenting geographic data.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e3",
      question: "What is remote sensing?",
      options: ["Gathering information from a distance", "Direct field observation", "Laboratory analysis", "Interview surveys"],
      correct: "Gathering information from a distance",
      explanation: "Remote sensing is the acquisition of information about objects or areas from a distance, typically from aircraft or satellites.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e4",
      question: "What is a topographic map?",
      options: ["Map showing elevation and landforms", "Political boundary map", "Weather map", "Population map"],
      correct: "Map showing elevation and landforms",
      explanation: "Topographic maps show the shape and elevation of the land surface using contour lines and symbols.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e5",
      question: "What is latitude?",
      options: ["Distance north or south from the equator", "Distance east or west from prime meridian", "Map projection", "Elevation above sea level"],
      correct: "Distance north or south from the equator",
      explanation: "Latitude measures distance north or south from the equator, expressed in degrees.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e6",
      question: "What is longitude?",
      options: ["Distance east or west from prime meridian", "Distance north or south from equator", "Map scale", "Elevation measurement"],
      correct: "Distance east or west from prime meridian",
      explanation: "Longitude measures distance east or west from the prime meridian, expressed in degrees.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e7",
      question: "What is a compass?",
      options: ["Instrument for finding direction", "Distance measuring tool", "Elevation meter", "Temperature gauge"],
      correct: "Instrument for finding direction",
      explanation: "A compass is a navigation instrument that shows direction relative to magnetic or true north.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e8",
      question: "What is a legend on a map?",
      options: ["Explanation of map symbols", "Map title", "Scale information", "Author information"],
      correct: "Explanation of map symbols",
      explanation: "A legend explains what the symbols, colors, and patterns on a map represent.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e9",
      question: "What is field work in geography?",
      options: ["Direct observation and data collection outdoors", "Library research", "Computer analysis", "Map drawing"],
      correct: "Direct observation and data collection outdoors",
      explanation: "Fieldwork involves collecting geographic data through direct observation and measurement in the field.",
      difficulty: "Easy"
    },
    {
      id: "geo12_u8_e10",
      question: "What is aerial photography?",
      options: ["Taking photographs from aircraft", "Ground-level photography", "Underwater photography", "Space photography only"],
      correct: "Taking photographs from aircraft",
      explanation: "Aerial photography involves taking photographs of the Earth's surface from aircraft or other airborne platforms.",
      difficulty: "Easy"
    },
    // Medium Questions (10 total)
    {
      id: "geo12_u8_m1",
      question: "What is spatial analysis?",
      options: ["Analysis of geographic patterns and relationships", "Time series analysis", "Statistical analysis only", "Economic analysis"],
      correct: "Analysis of geographic patterns and relationships",
      explanation: "Spatial analysis examines the locations, attributes, and relationships of features in spatial data.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m2",
      question: "What is GPS?",
      options: ["Global Positioning System", "Geographic Planning System", "General Purpose Software", "Geological Projection System"],
      correct: "Global Positioning System",
      explanation: "GPS is a satellite-based navigation system that provides location and time information anywhere on Earth.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m3",
      question: "What is a contour line?",
      options: ["Line connecting points of equal elevation", "Political boundary", "River course", "Climate zone boundary"],
      correct: "Line connecting points of equal elevation",
      explanation: "Contour lines connect points of equal elevation on topographic maps to show the shape of the land.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m4",
      question: "What is map projection?",
      options: ["Method of representing Earth's surface on flat map", "Map printing process", "Map coloring technique", "Map storage method"],
      correct: "Method of representing Earth's surface on flat map",
      explanation: "Map projection is a systematic method of representing the curved Earth's surface on a flat map.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m5",
      question: "What is satellite imagery?",
      options: ["Images taken from satellites", "Ground photographs", "Artistic drawings", "Computer graphics"],
      correct: "Images taken from satellites",
      explanation: "Satellite imagery consists of photographs and other images of Earth taken from satellites in space.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m6",
      question: "What is buffering in GIS?",
      options: ["Creating zones around geographic features", "Data storage method", "Map printing process", "Image enhancement technique"],
      correct: "Creating zones around geographic features",
      explanation: "Buffering creates zones of specified distances around geographic features for spatial analysis.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m7",
      question: "What is overlay analysis?",
      options: ["Combining multiple map layers", "Single map analysis", "Text analysis", "Statistical correlation"],
      correct: "Combining multiple map layers",
      explanation: "Overlay analysis combines multiple geographic datasets to identify relationships and patterns.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m8",
      question: "What is digital elevation model (DEM)?",
      options: ["3D representation of terrain surface", "2D political map", "Climate data model", "Population data model"],
      correct: "3D representation of terrain surface",
      explanation: "A DEM is a digital representation of ground surface topography in three dimensions.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m9",
      question: "What is geocoding?",
      options: ["Converting addresses to coordinates", "Map coloring process", "Data encryption", "Image processing"],
      correct: "Converting addresses to coordinates",
      explanation: "Geocoding is the process of converting addresses or place names into geographic coordinates.",
      difficulty: "Medium"
    },
    {
      id: "geo12_u8_m10",
      question: "What is interpolation in GIS?",
      options: ["Estimating values between known data points", "Data collection method", "Map printing technique", "Survey method"],
      correct: "Estimating values between known data points",
      explanation: "Interpolation estimates values at unknown locations based on values at known locations.",
      difficulty: "Medium"
    },
    // Hard Questions (10 total)
    {
      id: "geo12_u8_h1",
      question: "What is cartographic generalization?",
      options: ["Simplifying map detail for clarity", "Making maps more complex", "Using only satellite data", "Avoiding map symbols"],
      correct: "Simplifying map detail for clarity",
      explanation: "Cartographic generalization involves simplifying geographic data to make maps readable at different scales.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h2",
      question: "How does map projection affect data representation?",
      options: ["Can distort area, shape, distance, or direction", "Has no effect on accuracy", "Only affects color", "Only affects symbols"],
      correct: "Can distort area, shape, distance, or direction",
      explanation: "Map projections transform the curved Earth surface to flat maps, inevitably causing some distortion.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h3",
      question: "What is spatial autocorrelation?",
      options: ["Tendency for nearby locations to have similar values", "Random spatial distribution", "Uniform spatial distribution", "Temporal correlation"],
      correct: "Tendency for nearby locations to have similar values",
      explanation: "Spatial autocorrelation measures the degree to which similar values cluster together in space.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h4",
      question: "What is the role of metadata in geographic data?",
      options: ["Provides information about data quality and source", "Contains the actual geographic data", "Only for data storage", "Replaces the need for data"],
      correct: "Provides information about data quality and source",
      explanation: "Metadata describes the content, quality, condition, origin, and other characteristics of geographic data.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h5",
      question: "What is geostatistics?",
      options: ["Statistical analysis of spatial data", "General statistics", "Population statistics", "Economic statistics"],
      correct: "Statistical analysis of spatial data",
      explanation: "Geostatistics is a branch of statistics focusing on spatial or spatiotemporal datasets.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h6",
      question: "What is topology in GIS?",
      options: ["Spatial relationships between features", "3D visualization", "Data storage format", "Map coloring"],
      correct: "Spatial relationships between features",
      explanation: "Topology describes the spatial relationships between connecting or adjacent geographic features.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h7",
      question: "What is the modifiable areal unit problem (MAUP)?",
      options: ["Results change with different spatial units", "Fixed spatial boundaries", "Consistent results across scales", "No spatial variation"],
      correct: "Results change with different spatial units",
      explanation: "MAUP occurs when statistical results vary depending on how spatial units are defined or aggregated.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h8",
      question: "What is photogrammetry?",
      options: ["Making measurements from photographs", "Digital photography", "Photo editing", "Satellite communication"],
      correct: "Making measurements from photographs",
      explanation: "Photogrammetry is the science of making measurements and maps from photographs, especially aerial photos.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h9",
      question: "What is network analysis in GIS?",
      options: ["Analysis of connected linear features", "Internet analysis", "Social network analysis", "Computer network analysis"],
      correct: "Analysis of connected linear features",
      explanation: "Network analysis examines connected linear features like roads, rivers, or utilities to solve routing problems.",
      difficulty: "Hard"
    },
    {
      id: "geo12_u8_h10",
      question: "What is multi-criteria decision analysis in GIS?",
      options: ["Combining multiple factors for spatial decisions", "Single-factor analysis", "Random decision making", "Avoiding spatial decisions"],
      correct: "Combining multiple factors for spatial decisions",
      explanation: "Multi-criteria decision analysis combines multiple factors and criteria to support complex spatial decision-making.",
      difficulty: "Hard"
    }
  ]
};

const grade12GeographyTitleAliases: Record<string, string> = {
  "Unit 3: Population Policies, Programs and the Environment": "Unit 3: Population Policies Programs and the Environment",
  "Unit 6: Environmental Sustainability Responses": "Unit 6: Solutions to Environmental and Sustainability Problems Solutions",
};

export const normalizeGrade12GeographyUnit = (unit: string) =>
  grade12GeographyTitleAliases[unit] || unit;

export const getGrade12GeographyDisplayTitle = (unit: string) => {
  const displayTitles: Record<string, string> = {
    "Unit 3: Population Policies Programs and the Environment": "Unit 3: Population Policies, Programs and the Environment",
    "Unit 6: Solutions to Environmental and Sustainability Problems Solutions": "Unit 6: Environmental Sustainability Responses",
  };

  return displayTitles[unit] || unit;
};

export const getGrade12GeographyQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10) => {
  const normalizedUnit = normalizeGrade12GeographyUnit(unit);
  const unitQuestions = grade12GeographyQuestions[normalizedUnit];
  if (!unitQuestions) {
    console.log('No questions found for unit:', unit);
    return [];
  }

  const difficultyCapitalized = difficulty.charAt(0).toUpperCase() + difficulty.slice(1) as 'Easy' | 'Medium' | 'Hard';
  const filteredQuestions = unitQuestions.filter(q => q.difficulty === difficultyCapitalized);
  
  // Convert to standard Question format
  const convertedQuestions = filteredQuestions.map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation
  }));

  // Shuffle and return requested count
  const shuffled = convertedQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const baseGrade10GeographyQuestions = {
  "Unit 1: Land-forms Of Africa": [
    // Easy
    {
      question: "What is the highest mountain in Africa?",
      options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Cameroon"],
      correct: "Mount Kilimanjaro",
      explanation: "Mount Kilimanjaro in Tanzania is the highest mountain in Africa, standing at 5,895 meters above sea level.",
      difficulty: "easy"
    },
    {
      question: "The Great Rift Valley stretches from which region to which region?",
      options: ["West Africa to East Africa", "North Africa to Southern Africa", "Red Sea to Mozambique", "Sahara to Congo"],
      correct: "Red Sea to Mozambique",
      explanation: "The Great Rift Valley extends from the Red Sea in the north to Mozambique in the south, spanning over 6,000 km.",
      difficulty: "easy"
    },
    {
      question: "What type of landform is the Sahara?",
      options: ["Plateau", "Desert", "Mountain", "Valley"],
      correct: "Desert",
      explanation: "The Sahara is the world's largest hot desert, covering much of North Africa.",
      difficulty: "easy"
    },
    {
      question: "Which of the following is a plateau in Africa?",
      options: ["Nile Delta", "Ethiopian Highlands", "Sahara", "Lake Victoria"],
      correct: "Ethiopian Highlands",
      explanation: "The Ethiopian Highlands is a major plateau region in Africa, often called the 'Roof of Africa'.",
      difficulty: "easy"
    },
    {
      question: "What is a rift valley?",
      options: ["A mountain range", "A long, narrow depression formed by faulting", "A type of river", "A volcanic island"],
      correct: "A long, narrow depression formed by faulting",
      explanation: "A rift valley is a lowland region formed by the separation of tectonic plates, creating a long depression between faults.",
      difficulty: "easy"
    },
    // Medium
    {
      question: "Which tectonic process is primarily responsible for the formation of the East African Rift System?",
      options: ["Folding", "Faulting", "Volcanic eruption", "Erosion"],
      correct: "Faulting",
      explanation: "The East African Rift System was formed by tensional faulting where tectonic plates diverge, causing the earth's crust to crack and sink.",
      difficulty: "medium"
    },
    {
      question: "The Atlas Mountains in North Africa were formed primarily by which process?",
      options: ["Volcanic activity", "Folding", "Faulting", "Glaciation"],
      correct: "Folding",
      explanation: "The Atlas Mountains were formed by the collision and compression of the African and Eurasian tectonic plates, causing folding of rock layers.",
      difficulty: "medium"
    },
    {
      question: "Which of the following is an example of a block mountain in Africa?",
      options: ["Atlas Mountains", "Drakensberg Mountains", "Ruwenzori Mountains", "Kilimanjaro"],
      correct: "Ruwenzori Mountains",
      explanation: "The Ruwenzori Mountains (Mountains of the Moon) are block mountains formed by faulting and uplifting between rift valleys.",
      difficulty: "medium"
    },
    {
      question: "What distinguishes a horst from a graben in rift valley formation?",
      options: ["A horst is the uplifted block while a graben is the down-dropped block", "A horst is formed by erosion while a graben by deposition", "Both are the same feature", "A horst is volcanic while a graben is not"],
      correct: "A horst is the uplifted block while a graben is the down-dropped block",
      explanation: "In rift valley formation, the graben is the depressed central block that forms the valley floor, while the horst is the elevated block that forms the escarpments.",
      difficulty: "medium"
    },
    {
      question: "The Congo Basin is an example of which landform type?",
      options: ["Plateau", "Structural basin", "Fold mountain", "Rift valley"],
      correct: "Structural basin",
      explanation: "The Congo Basin is a large structural basin — a depression in the earth's surface surrounded by higher land, drained by the Congo River.",
      difficulty: "medium"
    },
    // Hard
    {
      question: "How does the process of vulcanicity contribute to landform formation in the East African Rift?",
      options: ["It creates fold mountains through compression", "Magma intrusion and extrusion build volcanic mountains and crater lakes", "It causes glaciation at high altitudes", "It primarily creates sedimentary basins"],
      correct: "Magma intrusion and extrusion build volcanic mountains and crater lakes",
      explanation: "Vulcanicity along the East African Rift produces volcanic mountains (Kilimanjaro, Mt. Kenya) through lava extrusion, and crater lakes form in collapsed volcanic cones (calderas).",
      difficulty: "hard"
    },
    {
      question: "Why is the eastern branch of the East African Rift more volcanically active than the western branch?",
      options: ["The eastern branch has thinner crust allowing more magma penetration", "The western branch has more water bodies cooling the magma", "The eastern branch is at a higher altitude", "The western branch is older and more stable"],
      correct: "The eastern branch has thinner crust allowing more magma penetration",
      explanation: "The eastern branch has thinner lithosphere, allowing magma from the asthenosphere to penetrate more easily, resulting in greater volcanic activity compared to the western branch.",
      difficulty: "hard"
    },
    {
      question: "What is the significance of the Afar Triangle in understanding African landforms?",
      options: ["It is where three tectonic plates meet, making it a triple junction", "It is the highest point in Africa", "It contains the oldest rocks on the continent", "It is the largest freshwater lake region"],
      correct: "It is where three tectonic plates meet, making it a triple junction",
      explanation: "The Afar Triangle (Afar Depression) is a geological triple junction where the Arabian, Nubian, and Somali plates diverge, representing an active continental rifting zone.",
      difficulty: "hard"
    },
    {
      question: "How do inselbergs form in the African landscape?",
      options: ["Through volcanic eruption", "By differential weathering and erosion of surrounding softer rock", "Through glacial deposition", "By river meandering"],
      correct: "By differential weathering and erosion of surrounding softer rock",
      explanation: "Inselbergs are isolated hills that remain after long periods of erosion remove softer surrounding rock, leaving the harder resistant rock standing as isolated remnants.",
      difficulty: "hard"
    },
    {
      question: "Which evidence supports the theory that Africa was once connected to other continents in Gondwanaland?",
      options: ["Similar climate patterns today", "Matching coastlines, fossil records, and rock formations across continents", "Identical river systems", "The same altitude across all continents"],
      correct: "Matching coastlines, fossil records, and rock formations across continents",
      explanation: "Continental drift evidence includes the jigsaw-fit of coastlines (especially Africa and South America), matching fossils (Mesosaurus), and similar geological formations across now-separated continents.",
      difficulty: "hard"
    },
    {
      question: "Why do many African highlands support denser settlement than nearby lowland desert or swamp regions?",
      options: ["They often combine cooler climate, better drainage, and fewer disease pressures", "They always contain more minerals", "They are easier places for ocean trade", "They receive no rainfall variability"],
      correct: "They often combine cooler climate, better drainage, and fewer disease pressures",
      explanation: "In several parts of Africa, uplands have historically offered more comfortable temperatures, lower disease burden, and productive farming conditions than neighboring harsh lowlands.",
      difficulty: "hard"
    },
    {
      question: "If a river cuts deeply through a plateau and forms waterfalls, what does this suggest about the plateau surface?",
      options: ["It is resistant rock being dissected by vertical erosion", "It was formed entirely by glaciers", "It has no structural control", "It is a coastal plain below sea level"],
      correct: "It is resistant rock being dissected by vertical erosion",
      explanation: "Plateau rivers often flow over elevated, resistant rock and create steep drops and gorges as downcutting continues over long periods.",
      difficulty: "hard"
    },
    {
      question: "Why can rift valleys become important locations for lakes and sediment accumulation?",
      options: ["Because faulting creates enclosed or down-dropped basins where water and sediments collect", "Because all rift valleys are volcanic cones", "Because they repel rivers", "Because they are always above surrounding land"],
      correct: "Because faulting creates enclosed or down-dropped basins where water and sediments collect",
      explanation: "A graben forms a depression, so drainage and sediments often gather there, producing lakes and thick sedimentary deposits.",
      difficulty: "hard"
    },
    {
      question: "How does the existence of escarpments along African rift systems help geographers infer tectonic history?",
      options: ["They indicate blocks of crust were uplifted and displaced by faulting", "They prove glaciation was the only force involved", "They show the area has never moved tectonically", "They are created mainly by ocean waves"],
      correct: "They indicate blocks of crust were uplifted and displaced by faulting",
      explanation: "Escarpments are major fault-line slopes, so their presence helps reconstruct crustal movement and the geometry of rift formation.",
      difficulty: "hard"
    },
    {
      question: "Why are isolated volcanic mountains such as Kilimanjaro especially significant for regional geography?",
      options: ["They shape climate, water catchment, biodiversity, and human settlement patterns around them", "They affect only mountaineers", "They have no influence beyond their summit", "They always prevent agriculture nearby"],
      correct: "They shape climate, water catchment, biodiversity, and human settlement patterns around them",
      explanation: "Large volcanic mountains influence rainfall, river sources, vegetation zones, tourism, and farming opportunities in surrounding areas.",
      difficulty: "hard"
    },
    {
      question: "What does the presence of extensive weathered surfaces and inselbergs imply about parts of Africa's geomorphic history?",
      options: ["Long periods of denudation and erosion under relatively stable continental conditions", "Very recent mountain building only", "Complete absence of chemical weathering", "Permanent glacial cover"],
      correct: "Long periods of denudation and erosion under relatively stable continental conditions",
      explanation: "Old continental surfaces often experience prolonged weathering and erosion, leaving resistant remnants such as inselbergs behind.",
      difficulty: "hard"
    },
    {
      question: "Why is the Ethiopian Highlands sometimes called the 'water tower' of the region?",
      options: ["Its elevated terrain captures moisture and feeds major rivers", "It stores all Africa's groundwater underground", "It receives no evaporation losses", "It is surrounded entirely by lakes"],
      correct: "Its elevated terrain captures moisture and feeds major rivers",
      explanation: "High relief and rainfall in the Ethiopian Highlands generate runoff for important river systems, making the area a crucial water source.",
      difficulty: "hard"
    },
    {
      question: "How can tectonic activity indirectly influence human geography in East Africa?",
      options: ["By shaping soils, water sources, hazards, transport routes, and settlement opportunities", "It affects only deep underground rocks", "It removes all mineral resources", "It prevents every form of economic activity"],
      correct: "By shaping soils, water sources, hazards, transport routes, and settlement opportunities",
      explanation: "Tectonics influences landforms, volcanoes, lakes, geothermal resources, and earthquake risks, all of which affect human use of the landscape.",
      difficulty: "hard"
    },
    {
      question: "Why might two nearby places at similar latitude in Africa have very different landforms?",
      options: ["Because structure, rock type, tectonic history, and erosion can vary greatly from place to place", "Latitude determines exactly the same landform everywhere", "Only rainfall matters in landform development", "Human beings create all major landforms"],
      correct: "Because structure, rock type, tectonic history, and erosion can vary greatly from place to place",
      explanation: "Landforms are shaped by multiple factors, so places sharing latitude can still differ sharply depending on geology and geomorphic history.",
      difficulty: "hard"
    },
    {
      question: "A geographer compares folded mountains and block mountains in Africa. What is the strongest conclusion?",
      options: ["Different landforms record different crustal forces such as compression and faulting", "All mountains form in exactly the same way", "Mountains are created only by erosion", "Africa has no structural mountains"],
      correct: "Different landforms record different crustal forces such as compression and faulting",
      explanation: "Fold mountains reflect compressional tectonics, while block mountains reflect faulting and vertical displacement of crustal blocks.",
      difficulty: "hard"
    }
  ],
  "Unit 2: Climate Of Africa": [
    // Easy
    {
      question: "Which climate zone covers most of Central Africa?",
      options: ["Desert", "Mediterranean", "Tropical rainforest", "Savanna"],
      correct: "Tropical rainforest",
      explanation: "Central Africa, particularly the Congo Basin, is dominated by a tropical rainforest (equatorial) climate with high temperatures and heavy rainfall year-round.",
      difficulty: "easy"
    },
    {
      question: "What is the main cause of the dry climate in the Sahara Desert?",
      options: ["High altitude", "Subtropical high pressure system", "Ocean currents", "Volcanic activity"],
      correct: "Subtropical high pressure system",
      explanation: "The Sahara's dry climate is primarily caused by the descending air of the subtropical high pressure belt (Hadley Cell), which inhibits cloud formation and rainfall.",
      difficulty: "easy"
    },
    {
      question: "Which factor most directly affects temperature as altitude increases?",
      options: ["Longitude", "Latitude", "Lapse rate", "Ocean currents"],
      correct: "Lapse rate",
      explanation: "The environmental lapse rate causes temperature to decrease by approximately 6.5°C per 1,000 meters of altitude gain.",
      difficulty: "easy"
    },
    {
      question: "The Inter-Tropical Convergence Zone (ITCZ) is associated with:",
      options: ["Dry, cool weather", "Heavy rainfall and thunderstorms", "Snow and ice", "Strong westerly winds"],
      correct: "Heavy rainfall and thunderstorms",
      explanation: "The ITCZ is a zone near the equator where trade winds from the northern and southern hemispheres converge, causing air to rise and produce heavy rainfall.",
      difficulty: "easy"
    },
    {
      question: "Mediterranean climate in Africa is found in which regions?",
      options: ["Central Africa and West Africa", "Northern tip and southern tip of Africa", "East Africa and the Sahel", "The Congo Basin"],
      correct: "Northern tip and southern tip of Africa",
      explanation: "Mediterranean climate, with dry summers and wet winters, is found at the extreme northern (Morocco, Tunisia) and southern (Cape Town region) tips of Africa.",
      difficulty: "easy"
    },
    // Medium
    {
      question: "How does the movement of the ITCZ affect seasonal rainfall patterns in Africa?",
      options: ["It has no effect on rainfall", "It shifts north and south with the sun, bringing wet seasons", "It only affects coastal areas", "It creates permanent drought conditions"],
      correct: "It shifts north and south with the sun, bringing wet seasons",
      explanation: "The ITCZ migrates seasonally following the overhead sun — northward in June-August and southward in December-February — bringing wet seasons to areas it passes over.",
      difficulty: "medium"
    },
    {
      question: "Which ocean current makes the west coast of Southern Africa dry?",
      options: ["Agulhas Current", "Benguela Current", "Guinea Current", "Mozambique Current"],
      correct: "Benguela Current",
      explanation: "The cold Benguela Current flows northward along the west coast of Southern Africa, cooling the air and reducing its moisture-holding capacity, contributing to the Namib Desert's aridity.",
      difficulty: "medium"
    },
    {
      question: "What type of rainfall is most common in equatorial Africa?",
      options: ["Frontal rainfall", "Relief rainfall", "Convectional rainfall", "Cyclonic rainfall"],
      correct: "Convectional rainfall",
      explanation: "Convectional rainfall dominates equatorial Africa — intense solar heating causes air to rise rapidly, cool, condense, and produce heavy afternoon thunderstorms.",
      difficulty: "medium"
    },
    {
      question: "Why does East Africa experience a bimodal rainfall pattern?",
      options: ["Due to two monsoon seasons", "Because the ITCZ passes over it twice a year", "Due to two different ocean currents", "Because of its high altitude"],
      correct: "Because the ITCZ passes over it twice a year",
      explanation: "As the ITCZ migrates north and south annually, it crosses East Africa twice — creating two rainy seasons: the 'long rains' (March-May) and 'short rains' (October-December).",
      difficulty: "medium"
    },
    {
      question: "How does Lake Victoria influence the climate of its surrounding region?",
      options: ["It makes the region drier", "It moderates temperatures and increases rainfall through evaporation", "It causes permanent fog", "It has no effect on local climate"],
      correct: "It moderates temperatures and increases rainfall through evaporation",
      explanation: "Lake Victoria acts as a large water body that moderates surrounding temperatures and provides moisture through evaporation, increasing local convectional rainfall.",
      difficulty: "medium"
    },
    // Hard
    {
      question: "How do the Walker Circulation and El Niño/La Niña phenomena affect African climate patterns?",
      options: ["They have no impact on Africa", "El Niño brings drought to East Africa and floods to Southern Africa", "El Niño often brings increased rainfall to East Africa and drought to Southern Africa", "They only affect wind patterns, not rainfall"],
      correct: "El Niño often brings increased rainfall to East Africa and drought to Southern Africa",
      explanation: "During El Niño events, warmer Indian Ocean waters typically increase rainfall in East Africa while causing drought in Southern Africa. La Niña generally reverses these patterns.",
      difficulty: "hard"
    },
    {
      question: "Why does the Sahel region experience highly variable and unpredictable rainfall?",
      options: ["Due to constant high pressure", "It lies in the transition zone between the Sahara and tropical wet climate, sensitive to ITCZ shifts", "Because of its high altitude", "Due to cold ocean currents"],
      correct: "It lies in the transition zone between the Sahara and tropical wet climate, sensitive to ITCZ shifts",
      explanation: "The Sahel is a marginal zone where small shifts in the ITCZ position or intensity cause dramatic changes in rainfall, making it highly vulnerable to drought and desertification.",
      difficulty: "hard"
    },
    {
      question: "How does the Ethiopian Highlands' orographic effect create distinct microclimates?",
      options: ["By blocking all rainfall", "Windward slopes receive heavy rainfall while leeward slopes are drier (rain shadow)", "By increasing temperatures at all elevations", "By creating uniform climate conditions throughout"],
      correct: "Windward slopes receive heavy rainfall while leeward slopes are drier (rain shadow)",
      explanation: "Moist air forced upward over the Ethiopian Highlands cools and produces heavy relief rainfall on windward slopes, while descending air on leeward slopes creates drier rain shadow areas.",
      difficulty: "hard"
    },
    {
      question: "What role do tropical easterly jet streams play in bringing rainfall to Ethiopia?",
      options: ["They block moisture from entering the region", "They carry moisture from the Indian Ocean and enhance monsoon rainfall", "They only cause dry conditions", "They create snowfall at high altitudes"],
      correct: "They carry moisture from the Indian Ocean and enhance monsoon rainfall",
      explanation: "The Tropical Easterly Jet (TEJ) over Ethiopia during summer enhances upper-level divergence, which promotes low-level convergence and upward air motion, intensifying monsoon rainfall.",
      difficulty: "hard"
    },
    {
      question: "How is climate change projected to alter Africa's major climate zones by the end of the 21st century?",
      options: ["All zones will become wetter", "Expansion of arid zones, increased rainfall variability, and more extreme weather events", "Climate zones will remain unchanged", "All zones will become cooler"],
      correct: "Expansion of arid zones, increased rainfall variability, and more extreme weather events",
      explanation: "Climate models project expanding Saharan and Kalahari arid zones, increased rainfall variability in the Sahel and East Africa, rising temperatures, and more frequent extreme weather events across Africa.",
      difficulty: "hard"
    }
  ],
  "Unit 3: Natural Resource Base Of Africa": [
    // Easy
    {
      question: "Which African country is the largest producer of gold?",
      options: ["Nigeria", "South Africa", "Ghana", "Tanzania"],
      correct: "South Africa",
      explanation: "South Africa has historically been the largest gold producer in Africa, with the Witwatersrand Basin being one of the richest gold deposits in the world.",
      difficulty: "easy"
    },
    {
      question: "What is a renewable natural resource?",
      options: ["Oil", "Gold", "Forests", "Diamonds"],
      correct: "Forests",
      explanation: "Forests are renewable resources because they can regenerate through natural growth or replanting, unlike minerals and fossil fuels which are finite.",
      difficulty: "easy"
    },
    {
      question: "The Niger Delta is known for which major natural resource?",
      options: ["Gold", "Diamonds", "Petroleum (oil)", "Copper"],
      correct: "Petroleum (oil)",
      explanation: "The Niger Delta in Nigeria is one of Africa's most important petroleum-producing regions, making Nigeria the continent's largest oil producer.",
      difficulty: "easy"
    },
    {
      question: "Which African lake is the largest freshwater lake by surface area?",
      options: ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Chad"],
      correct: "Lake Victoria",
      explanation: "Lake Victoria, shared by Kenya, Tanzania, and Uganda, is Africa's largest lake and the world's second-largest freshwater lake by surface area.",
      difficulty: "easy"
    },
    {
      question: "What type of resource is soil?",
      options: ["Non-renewable", "Renewable if properly managed", "Infinite", "Artificial"],
      correct: "Renewable if properly managed",
      explanation: "Soil is considered a renewable resource if it is properly managed through conservation practices, though it takes hundreds of years to form naturally.",
      difficulty: "easy"
    },
    // Medium
    {
      question: "Why is the 'resource curse' a concern for many African countries?",
      options: ["They have too few resources", "Abundant natural resources can lead to corruption, conflict, and poor economic development", "Resources are too expensive to extract", "Foreign countries refuse to trade with them"],
      correct: "Abundant natural resources can lead to corruption, conflict, and poor economic development",
      explanation: "The 'resource curse' refers to the paradox where countries rich in natural resources often experience slower economic growth, more corruption, and political instability than resource-poor countries.",
      difficulty: "medium"
    },
    {
      question: "What is the main environmental impact of deforestation in tropical Africa?",
      options: ["Increased biodiversity", "Soil erosion, loss of biodiversity, and increased carbon emissions", "Improved water quality", "Cooler temperatures"],
      correct: "Soil erosion, loss of biodiversity, and increased carbon emissions",
      explanation: "Deforestation in tropical Africa leads to massive soil erosion, loss of plant and animal species, disrupted water cycles, and release of stored carbon into the atmosphere.",
      difficulty: "medium"
    },
    {
      question: "Which mineral resource is the Democratic Republic of Congo particularly known for?",
      options: ["Gold", "Cobalt and coltan", "Iron ore", "Bauxite"],
      correct: "Cobalt and coltan",
      explanation: "The DRC holds over 60% of the world's cobalt reserves and significant coltan deposits, both essential for electronics and battery manufacturing.",
      difficulty: "medium"
    },
    {
      question: "How does overgrazing contribute to desertification in the Sahel?",
      options: ["It increases vegetation cover", "It removes vegetation, exposing soil to wind and water erosion", "It improves soil fertility", "It has no effect on the environment"],
      correct: "It removes vegetation, exposing soil to wind and water erosion",
      explanation: "Overgrazing strips vegetation cover, leaving soil exposed to erosion by wind and rain, reducing soil fertility and allowing desert conditions to expand into previously productive land.",
      difficulty: "medium"
    },
    {
      question: "What is the significance of the Nile River as a natural resource?",
      options: ["It is only used for fishing", "It provides water for irrigation, hydroelectric power, transportation, and domestic use for millions", "It is only important for tourism", "It has little economic value"],
      correct: "It provides water for irrigation, hydroelectric power, transportation, and domestic use for millions",
      explanation: "The Nile is vital for irrigation (especially in Egypt and Sudan), hydroelectric power (Aswan Dam, GERD), transportation, fishing, and water supply for over 300 million people.",
      difficulty: "medium"
    },
    // Hard
    {
      question: "How does the concept of 'land grabbing' affect Africa's natural resource management?",
      options: ["It improves land productivity for local communities", "Foreign acquisition of large tracts of land can displace communities and prioritize export crops over food security", "It has no significant impact", "It only affects urban areas"],
      correct: "Foreign acquisition of large tracts of land can displace communities and prioritize export crops over food security",
      explanation: "Land grabbing involves foreign investors acquiring vast African farmlands, often displacing local communities, converting subsistence farmland to commercial export crops, and threatening food security and traditional livelihoods.",
      difficulty: "hard"
    },
    {
      question: "Why is the Grand Ethiopian Renaissance Dam (GERD) a source of geopolitical tension?",
      options: ["It produces too much electricity", "Downstream countries (Egypt, Sudan) fear reduced water flow while Ethiopia needs it for development", "It was built in the wrong location", "It only benefits foreign investors"],
      correct: "Downstream countries (Egypt, Sudan) fear reduced water flow while Ethiopia needs it for development",
      explanation: "The GERD on the Blue Nile creates tension because Ethiopia needs hydroelectric power for development, while Egypt and Sudan depend on Nile water for agriculture and fear reduced downstream flow during dam filling and operation.",
      difficulty: "hard"
    },
    {
      question: "How does artisanal mining in Africa create both economic opportunities and environmental challenges?",
      options: ["It only creates wealth", "It provides livelihoods for millions but causes mercury pollution, deforestation, and soil degradation", "It has no environmental impact", "It only affects large corporations"],
      correct: "It provides livelihoods for millions but causes mercury pollution, deforestation, and soil degradation",
      explanation: "Artisanal mining employs millions of Africans but often uses mercury in gold processing (contaminating water and soil), clears forests for mining sites, and creates unrehabilitated pits causing soil degradation.",
      difficulty: "hard"
    },
    {
      question: "What role does the African Union's Agenda 2063 envision for natural resource governance?",
      options: ["Exporting all resources to developed countries", "Sustainable management, beneficiation, and value addition within Africa for equitable development", "Banning all mining activities", "Privatizing all natural resources"],
      correct: "Sustainable management, beneficiation, and value addition within Africa for equitable development",
      explanation: "Agenda 2063 promotes African countries processing their own raw materials (beneficiation), implementing sustainable extraction practices, and ensuring resource revenues benefit local populations equitably.",
      difficulty: "hard"
    },
    {
      question: "How do Payment for Ecosystem Services (PES) programs help conserve Africa's natural resources?",
      options: ["By banning all resource use", "By providing financial incentives to communities that protect ecosystems like forests and watersheds", "By increasing industrial exploitation", "By relocating communities away from resources"],
      correct: "By providing financial incentives to communities that protect ecosystems like forests and watersheds",
      explanation: "PES programs compensate communities or landowners for maintaining ecosystem services (carbon storage, water purification, biodiversity), creating economic incentives for conservation over exploitation.",
      difficulty: "hard"
    }
  ],
  "Unit 4: Population of Africa": [
    // Easy
    {
      question: "Which is the most populous country in Africa?",
      options: ["South Africa", "Egypt", "Ethiopia", "Nigeria"],
      correct: "Nigeria",
      explanation: "Nigeria is the most populous country in Africa with over 220 million people, making it also the most populous country in the world's African continent.",
      difficulty: "easy"
    },
    {
      question: "What does 'population density' mean?",
      options: ["Total number of people in a country", "Number of people per unit area", "The growth rate of population", "Number of cities in a country"],
      correct: "Number of people per unit area",
      explanation: "Population density is calculated by dividing the total population by the total land area, expressed as people per square kilometer.",
      difficulty: "easy"
    },
    {
      question: "Which factor is a major cause of rapid population growth in Africa?",
      options: ["High death rates", "High birth rates", "Emigration", "Low fertility rates"],
      correct: "High birth rates",
      explanation: "High birth rates, driven by factors like early marriage, limited access to family planning, and cultural preferences for large families, are the primary cause of rapid population growth in Africa.",
      difficulty: "easy"
    },
    {
      question: "What is urbanization?",
      options: ["Movement of people from cities to rural areas", "Growth and expansion of cities and urban populations", "Decline in population", "Agricultural development"],
      correct: "Growth and expansion of cities and urban populations",
      explanation: "Urbanization is the process of population shift from rural to urban areas, resulting in the growth and expansion of cities.",
      difficulty: "easy"
    },
    {
      question: "What is a census?",
      options: ["A type of government", "An official count of a country's population", "A weather forecast", "An economic report"],
      correct: "An official count of a country's population",
      explanation: "A census is an official, systematic count of a country's population, typically conducted every 10 years, collecting data on demographics, housing, and socioeconomic characteristics.",
      difficulty: "easy"
    },
    // Medium
    {
      question: "What is the demographic transition model and where do most African countries fall?",
      options: ["A model of economic growth; Stage 4", "A model showing population change through stages; most are in Stage 2 or 3", "A model of urbanization; Stage 1", "A model of migration; Stage 5"],
      correct: "A model showing population change through stages; most are in Stage 2 or 3",
      explanation: "The demographic transition model describes how populations change from high birth/death rates to low rates. Most African countries are in Stage 2 (declining death rates, high birth rates) or early Stage 3 (declining birth rates).",
      difficulty: "medium"
    },
    {
      question: "How does the 'youth bulge' affect African economies?",
      options: ["It has no effect", "It creates both opportunities for economic growth and challenges for job creation and services", "It only causes unemployment", "It only benefits the economy"],
      correct: "It creates both opportunities for economic growth and challenges for job creation and services",
      explanation: "Africa's youth bulge (large young population) offers a potential 'demographic dividend' if young people are educated and employed, but also strains education, healthcare, and job markets if opportunities are lacking.",
      difficulty: "medium"
    },
    {
      question: "What are 'push' and 'pull' factors in migration?",
      options: ["Types of population policies", "Push factors drive people away from an area; pull factors attract people to a new area", "Economic theories about trade", "Methods of counting population"],
      correct: "Push factors drive people away from an area; pull factors attract people to a new area",
      explanation: "Push factors (poverty, conflict, drought) force people to leave, while pull factors (jobs, education, safety) attract them to new locations, together explaining migration patterns.",
      difficulty: "medium"
    },
    {
      question: "Why is the population distribution in Africa uneven?",
      options: ["All areas have the same population", "Physical factors (climate, water, terrain) and human factors (economic opportunities, infrastructure) cause uneven distribution", "Only government policies determine distribution", "Population is evenly distributed"],
      correct: "Physical factors (climate, water, terrain) and human factors (economic opportunities, infrastructure) cause uneven distribution",
      explanation: "Areas with favorable climate, water availability, fertile soil, and economic opportunities (like the Nile Valley, coastal cities) are densely populated, while deserts and dense forests are sparsely populated.",
      difficulty: "medium"
    },
    {
      question: "What is the natural increase rate of a population?",
      options: ["Immigration minus emigration", "Birth rate minus death rate", "Total population divided by area", "Number of births per year"],
      correct: "Birth rate minus death rate",
      explanation: "The natural increase rate is calculated by subtracting the crude death rate from the crude birth rate (excluding migration), usually expressed per 1,000 people.",
      difficulty: "medium"
    },
    // Hard
    {
      question: "How does the concept of 'demographic dividend' apply to Africa's development potential?",
      options: ["It is irrelevant to Africa", "If Africa invests in education, health, and jobs for its growing working-age population, it can achieve accelerated economic growth", "It only applies to developed countries", "It requires population decline"],
      correct: "If Africa invests in education, health, and jobs for its growing working-age population, it can achieve accelerated economic growth",
      explanation: "The demographic dividend occurs when a declining dependency ratio (more working-age people relative to dependents) boosts economic growth — but only if countries invest in human capital, job creation, and governance.",
      difficulty: "hard"
    },
    {
      question: "How do refugee movements impact both origin and host countries in Africa?",
      options: ["They only affect host countries", "Origin countries lose human capital; host countries face resource strain but may gain labor and cultural diversity", "They have no significant impact", "They only affect the refugees themselves"],
      correct: "Origin countries lose human capital; host countries face resource strain but may gain labor and cultural diversity",
      explanation: "Origin countries suffer brain drain and economic disruption. Host countries face pressure on resources, infrastructure, and services, but refugees can also contribute labor, entrepreneurship, and cultural exchange.",
      difficulty: "hard"
    },
    {
      question: "Why is Africa's rapid urbanization considered both an opportunity and a challenge?",
      options: ["It is only beneficial", "Cities drive economic growth and innovation but face problems of slums, pollution, and inadequate infrastructure", "It is only harmful", "Urbanization has stopped in Africa"],
      correct: "Cities drive economic growth and innovation but face problems of slums, pollution, and inadequate infrastructure",
      explanation: "Urban areas drive 80% of Africa's GDP and foster innovation, but rapid unplanned urbanization leads to sprawling slums, inadequate water/sanitation, traffic congestion, pollution, and social inequality.",
      difficulty: "hard"
    },
    {
      question: "How do pro-natalist and anti-natalist policies differ in addressing population issues in Africa?",
      options: ["They are the same policy", "Pro-natalist policies encourage higher birth rates while anti-natalist policies aim to reduce birth rates through family planning", "Both aim to increase population", "Neither has been implemented in Africa"],
      correct: "Pro-natalist policies encourage higher birth rates while anti-natalist policies aim to reduce birth rates through family planning",
      explanation: "Some African governments promote pro-natalist policies (incentivizing large families), while others implement anti-natalist policies (family planning education, contraceptive access) to manage population growth, depending on their demographic and economic context.",
      difficulty: "hard"
    },
    {
      question: "What is the relationship between female education and fertility rates in Africa?",
      options: ["No relationship exists", "Higher female education strongly correlates with lower fertility rates", "Education increases fertility", "Only male education affects fertility"],
      correct: "Higher female education strongly correlates with lower fertility rates",
      explanation: "Research consistently shows that as female education levels increase, fertility rates decline. Educated women tend to marry later, use contraception more, and have fewer children, making girls' education one of the most effective population management tools.",
      difficulty: "hard"
    }
  ],
  "Unit 5: Major Economic and Cultural Activities of Africa": [
    // Easy
    {
      question: "What is the most common economic activity in rural Africa?",
      options: ["Manufacturing", "Mining", "Agriculture", "Tourism"],
      correct: "Agriculture",
      explanation: "Agriculture is the primary economic activity in rural Africa, employing about 60% of the continent's workforce and providing livelihoods for millions of families.",
      difficulty: "easy"
    },
    {
      question: "Which country is Africa's largest economy?",
      options: ["South Africa", "Egypt", "Nigeria", "Kenya"],
      correct: "Nigeria",
      explanation: "Nigeria has Africa's largest economy by GDP, driven primarily by its oil and gas sector, along with growing telecommunications, banking, and entertainment industries.",
      difficulty: "easy"
    },
    {
      question: "What is subsistence farming?",
      options: ["Large-scale commercial farming", "Farming mainly to feed the farmer's family", "Industrial agriculture", "Livestock ranching only"],
      correct: "Farming mainly to feed the farmer's family",
      explanation: "Subsistence farming is a type of agriculture where farmers grow crops and raise livestock primarily to feed themselves and their families, with little or no surplus for sale.",
      difficulty: "easy"
    },
    {
      question: "Which African region is famous for its wildlife safari tourism?",
      options: ["North Africa", "East Africa", "West Africa", "Central Africa"],
      correct: "East Africa",
      explanation: "East Africa (Kenya, Tanzania, Uganda) is world-renowned for wildlife safari tourism, featuring the Serengeti, Masai Mara, and numerous national parks with diverse wildlife.",
      difficulty: "easy"
    },
    {
      question: "What is a cash crop?",
      options: ["A crop grown only for family use", "A crop grown primarily for sale and profit", "A wild plant", "A crop that requires no water"],
      correct: "A crop grown primarily for sale and profit",
      explanation: "Cash crops are agricultural products grown specifically for sale in markets rather than for the farmer's own consumption. Examples in Africa include coffee, cocoa, tea, and cotton.",
      difficulty: "easy"
    },
    // Medium
    {
      question: "How does the African Continental Free Trade Area (AfCFTA) aim to transform Africa's economy?",
      options: ["By closing all borders", "By creating a single continental market for goods and services to boost intra-African trade", "By banning foreign investment", "By eliminating all agriculture"],
      correct: "By creating a single continental market for goods and services to boost intra-African trade",
      explanation: "AfCFTA aims to create the world's largest free trade area by eliminating tariffs on most goods, boosting intra-African trade (currently only about 15% of total trade), and promoting industrialization.",
      difficulty: "medium"
    },
    {
      question: "What is the difference between primary and secondary economic activities?",
      options: ["They are the same", "Primary involves extracting raw materials; secondary involves processing them into finished goods", "Primary is services; secondary is farming", "Primary is more important than secondary"],
      correct: "Primary involves extracting raw materials; secondary involves processing them into finished goods",
      explanation: "Primary activities extract raw materials (farming, mining, fishing), while secondary activities process these materials into finished products (manufacturing, construction).",
      difficulty: "medium"
    },
    {
      question: "Why is coffee culturally and economically significant to Ethiopia?",
      options: ["It was introduced recently from Europe", "Ethiopia is the birthplace of coffee, and it is a major export and central to social culture", "It is only grown for local use", "It has no cultural importance"],
      correct: "Ethiopia is the birthplace of coffee, and it is a major export and central to social culture",
      explanation: "Ethiopia is considered the origin of coffee (Arabica). Coffee is Ethiopia's largest export, and the traditional coffee ceremony is a central social and cultural practice symbolizing friendship and community.",
      difficulty: "medium"
    },
    {
      question: "How does the informal economy function in African cities?",
      options: ["It doesn't exist", "It includes unregistered small businesses, street vending, and services that provide livelihoods outside formal employment", "It is the same as the formal economy", "It only includes illegal activities"],
      correct: "It includes unregistered small businesses, street vending, and services that provide livelihoods outside formal employment",
      explanation: "The informal economy in Africa employs up to 85% of workers in some countries, including market traders, artisans, and service providers who operate without formal registration or regulation.",
      difficulty: "medium"
    },
    {
      question: "What role does pastoralism play in African economies?",
      options: ["It is no longer practiced", "It provides livelihood through livestock herding, especially in arid and semi-arid regions", "It is only practiced in cities", "It involves only crop farming"],
      correct: "It provides livelihood through livestock herding, especially in arid and semi-arid regions",
      explanation: "Pastoralism is vital in Africa's arid and semi-arid zones (Sahel, Horn of Africa, East Africa), where communities like the Maasai and Fulani depend on livestock for food, income, and cultural identity.",
      difficulty: "medium"
    },
    // Hard
    {
      question: "How does the concept of 'value addition' address Africa's economic challenges in global trade?",
      options: ["By exporting more raw materials", "By processing raw materials domestically to capture more profit rather than exporting unprocessed commodities", "By reducing all exports", "By importing more manufactured goods"],
      correct: "By processing raw materials domestically to capture more profit rather than exporting unprocessed commodities",
      explanation: "Africa loses billions by exporting raw commodities (cocoa, coffee, minerals) that are processed elsewhere. Value addition — processing within Africa — would create jobs, increase export revenues, and reduce dependency on commodity price fluctuations.",
      difficulty: "hard"
    },
    {
      question: "How has mobile banking (like M-Pesa) transformed economic activities in Africa?",
      options: ["It has had no impact", "It enables financial inclusion for unbanked populations, facilitating trade, savings, and remittances", "It only benefits wealthy people", "It has replaced all traditional banks"],
      correct: "It enables financial inclusion for unbanked populations, facilitating trade, savings, and remittances",
      explanation: "Mobile money services like M-Pesa have revolutionized finance in Africa, bringing banking services to millions who lack traditional bank access, enabling peer-to-peer transfers, business payments, savings, and microloans.",
      difficulty: "hard"
    },
    {
      question: "What is the economic significance of Africa's creative industries (Nollywood, Afrobeats, fashion)?",
      options: ["They have no economic value", "They generate billions in revenue, create jobs, and project African soft power globally", "They only serve local audiences", "They are declining industries"],
      correct: "They generate billions in revenue, create jobs, and project African soft power globally",
      explanation: "Nollywood is the world's second-largest film industry by volume, Afrobeats has global reach, and African fashion is increasingly influential — together generating billions in revenue and millions of jobs while shaping global cultural narratives.",
      difficulty: "hard"
    },
    {
      question: "How does climate change threaten Africa's agricultural economy and what adaptation strategies are being employed?",
      options: ["Climate change benefits all agriculture", "Rising temperatures and erratic rainfall threaten yields; adaptation includes drought-resistant crops and improved irrigation", "No adaptation is needed", "Only technology can solve the problem"],
      correct: "Rising temperatures and erratic rainfall threaten yields; adaptation includes drought-resistant crops and improved irrigation",
      explanation: "Climate change threatens African agriculture through increased droughts, floods, and unpredictable seasons. Adaptations include drought-resistant crop varieties, conservation agriculture, improved irrigation, agroforestry, and climate information services.",
      difficulty: "hard"
    },
    {
      question: "Why is economic diversification critical for resource-dependent African economies?",
      options: ["It is unnecessary", "Dependence on single commodities exposes economies to price volatility; diversification builds resilience", "Single-resource economies are the most stable", "Diversification reduces GDP"],
      correct: "Dependence on single commodities exposes economies to price volatility; diversification builds resilience",
      explanation: "Countries dependent on single commodities (oil, minerals) face severe economic shocks when global prices drop. Diversification into manufacturing, services, technology, and agriculture creates more stable, resilient economies with broader job creation.",
      difficulty: "hard"
    }
  ],
  "Unit 6: Human - Natural Environment Interactions": [
    // Easy
    {
      question: "What is deforestation?",
      options: ["Planting new trees", "Clearing or removal of forests", "Protecting forests", "A type of farming"],
      correct: "Clearing or removal of forests",
      explanation: "Deforestation is the permanent removal of trees and forest cover, often for agriculture, logging, or urban development.",
      difficulty: "easy"
    },
    {
      question: "What is the main cause of soil erosion in Africa?",
      options: ["Earthquakes", "Deforestation and poor farming practices", "Volcanic eruptions", "Urbanization only"],
      correct: "Deforestation and poor farming practices",
      explanation: "Deforestation removes protective vegetation cover, and poor farming practices (overgrazing, monocropping, plowing slopes) expose soil to wind and water erosion.",
      difficulty: "easy"
    },
    {
      question: "What is desertification?",
      options: ["Building cities in deserts", "The process by which fertile land becomes desert", "Planting desert plants", "Desert tourism"],
      correct: "The process by which fertile land becomes desert",
      explanation: "Desertification is the degradation of land in arid, semi-arid, and dry sub-humid areas, resulting in the expansion of desert-like conditions due to human activities and climate change.",
      difficulty: "easy"
    },
    {
      question: "Which of the following is an example of environmental conservation?",
      options: ["Burning forests for farming", "Establishing national parks and protected areas", "Dumping waste in rivers", "Overfishing"],
      correct: "Establishing national parks and protected areas",
      explanation: "National parks and protected areas conserve biodiversity, protect ecosystems, and preserve natural habitats for wildlife and future generations.",
      difficulty: "easy"
    },
    {
      question: "What is pollution?",
      options: ["Natural weather patterns", "Introduction of harmful substances into the environment", "A type of vegetation", "Population growth"],
      correct: "Introduction of harmful substances into the environment",
      explanation: "Pollution is the contamination of the natural environment by harmful substances (chemicals, waste, gases) that cause adverse changes to ecosystems and human health.",
      difficulty: "easy"
    },
    // Medium
    {
      question: "How does slash-and-burn agriculture affect the environment?",
      options: ["It has no effect", "It temporarily increases soil fertility but causes deforestation, air pollution, and biodiversity loss", "It permanently improves the land", "It only affects water resources"],
      correct: "It temporarily increases soil fertility but causes deforestation, air pollution, and biodiversity loss",
      explanation: "Slash-and-burn farming clears and burns vegetation, releasing nutrients into soil temporarily. However, it causes deforestation, releases CO2, destroys habitats, and leads to soil degradation when practiced unsustainably.",
      difficulty: "medium"
    },
    {
      question: "What is the relationship between population growth and environmental degradation in Africa?",
      options: ["No relationship", "Rapid population growth increases demand for resources, leading to overexploitation and environmental damage", "Population decline causes degradation", "Only industry causes environmental damage"],
      correct: "Rapid population growth increases demand for resources, leading to overexploitation and environmental damage",
      explanation: "Growing populations need more food, water, fuel, and land, driving deforestation, overgrazing, water depletion, and pollution, especially when unsustainable practices are used.",
      difficulty: "medium"
    },
    {
      question: "How does water pollution affect communities dependent on rivers and lakes?",
      options: ["It improves water quality", "It causes waterborne diseases, kills aquatic life, and reduces clean water availability", "It has no health effects", "It only affects fish"],
      correct: "It causes waterborne diseases, kills aquatic life, and reduces clean water availability",
      explanation: "Water pollution from industrial waste, agricultural runoff, and sewage introduces pathogens and toxins, causing diseases (cholera, typhoid), killing fish and aquatic organisms, and reducing safe drinking water supplies.",
      difficulty: "medium"
    },
    {
      question: "What is the Green Belt Movement founded by Wangari Maathai?",
      options: ["A political party", "A community-based tree planting and environmental conservation movement in Kenya", "A mining company", "A tourism organization"],
      correct: "A community-based tree planting and environmental conservation movement in Kenya",
      explanation: "Founded in 1977 by Nobel Laureate Wangari Maathai, the Green Belt Movement empowers communities, especially women, to plant trees, combat deforestation, and promote environmental conservation across Kenya and Africa.",
      difficulty: "medium"
    },
    {
      question: "How does mining affect local environments in Africa?",
      options: ["It only benefits the environment", "It causes land degradation, water contamination, deforestation, and air pollution", "It has no environmental impact", "It improves biodiversity"],
      correct: "It causes land degradation, water contamination, deforestation, and air pollution",
      explanation: "Mining operations clear vegetation, create open pits, contaminate water with chemicals (mercury, cyanide), produce toxic waste (tailings), and release dust and pollutants into the air.",
      difficulty: "medium"
    },
    // Hard
    {
      question: "How can indigenous knowledge systems contribute to sustainable environmental management in Africa?",
      options: ["They are irrelevant to modern conservation", "Traditional ecological knowledge about land use, water management, and biodiversity can complement scientific approaches", "They only involve superstition", "They conflict with all modern methods"],
      correct: "Traditional ecological knowledge about land use, water management, and biodiversity can complement scientific approaches",
      explanation: "Indigenous communities have centuries of knowledge about sustainable land use, seasonal patterns, medicinal plants, and water management that can enhance modern conservation strategies when integrated respectfully.",
      difficulty: "hard"
    },
    {
      question: "What is the concept of 'ecological footprint' and how does it apply to African development?",
      options: ["A measurement of land area only", "It measures human demand on nature; Africa's footprint is low but growing, while it bears disproportionate climate impacts", "It only applies to industrial nations", "It measures population density"],
      correct: "It measures human demand on nature; Africa's footprint is low but growing, while it bears disproportionate climate impacts",
      explanation: "Africa's per capita ecological footprint is among the world's lowest, yet the continent suffers disproportionately from climate change caused largely by high-footprint industrialized nations, raising issues of environmental justice.",
      difficulty: "hard"
    },
    {
      question: "How does the concept of sustainable development balance economic growth and environmental protection?",
      options: ["It prioritizes economy over environment", "It seeks development that meets present needs without compromising future generations' ability to meet theirs", "It stops all development", "It only applies to developed countries"],
      correct: "It seeks development that meets present needs without compromising future generations' ability to meet theirs",
      explanation: "Sustainable development, as defined by the Brundtland Commission, integrates economic growth, social inclusion, and environmental protection, ensuring that development today does not deplete resources for future generations.",
      difficulty: "hard"
    },
    {
      question: "How do carbon credit trading systems potentially benefit African countries?",
      options: ["They have no relevance to Africa", "African countries can earn revenue by protecting forests that absorb carbon, incentivizing conservation", "They only benefit polluting countries", "They require Africa to increase emissions"],
      correct: "African countries can earn revenue by protecting forests that absorb carbon, incentivizing conservation",
      explanation: "Carbon credit systems allow African nations to monetize their forests' carbon absorption capacity through REDD+ and similar programs, generating revenue for conservation while helping global emissions reduction efforts.",
      difficulty: "hard"
    },
    {
      question: "What is the environmental justice dimension of electronic waste (e-waste) dumping in Africa?",
      options: ["E-waste is beneficial for Africa", "Developed nations export toxic e-waste to Africa, causing health hazards and environmental contamination in marginalized communities", "E-waste is properly recycled in Africa", "Only African-produced electronics create waste"],
      correct: "Developed nations export toxic e-waste to Africa, causing health hazards and environmental contamination in marginalized communities",
      explanation: "Millions of tons of e-waste from developed countries end up in places like Agbogbloshie, Ghana, where informal recyclers are exposed to toxic chemicals (lead, mercury, cadmium), causing cancer, neurological damage, and soil/water contamination.",
      difficulty: "hard"
    }
  ],
  "Unit 7: Geographic Issues And Public Concerns In Africa": [
    // Easy
    {
      question: "What is food insecurity?",
      options: ["Having too much food", "Lack of reliable access to sufficient affordable and nutritious food", "A type of farming", "A food storage method"],
      correct: "Lack of reliable access to sufficient affordable and nutritious food",
      explanation: "Food insecurity occurs when people lack consistent access to enough safe, nutritious food for a healthy, active life, affecting millions across Africa.",
      difficulty: "easy"
    },
    {
      question: "What is one major cause of conflict in Africa?",
      options: ["Too much rainfall", "Competition over resources like land, water, and minerals", "Excess food production", "Too many schools"],
      correct: "Competition over resources like land, water, and minerals",
      explanation: "Resource competition, including disputes over land, water, minerals, and grazing areas, is a significant driver of conflict in many African regions.",
      difficulty: "easy"
    },
    {
      question: "What is a drought?",
      options: ["Heavy flooding", "An extended period of unusually low rainfall causing water shortage", "A volcanic eruption", "An earthquake"],
      correct: "An extended period of unusually low rainfall causing water shortage",
      explanation: "A drought is a prolonged period of abnormally low rainfall that leads to water shortages, crop failures, and famine, particularly devastating in Africa's semi-arid regions.",
      difficulty: "easy"
    },
    {
      question: "Which disease has been a major public health concern in sub-Saharan Africa?",
      options: ["Frostbite", "HIV/AIDS", "Altitude sickness", "Hypothermia"],
      correct: "HIV/AIDS",
      explanation: "HIV/AIDS has been one of sub-Saharan Africa's greatest public health challenges, with the region accounting for about two-thirds of all people living with HIV globally.",
      difficulty: "easy"
    },
    {
      question: "What is internal displacement?",
      options: ["Moving to another country", "Being forced to leave one's home but remaining within the country", "Voluntary tourism", "Urban planning"],
      correct: "Being forced to leave one's home but remaining within the country",
      explanation: "Internally displaced persons (IDPs) are forced to flee their homes due to conflict, violence, or natural disasters but remain within their country's borders, unlike refugees who cross international borders.",
      difficulty: "easy"
    },
    // Medium
    {
      question: "How does the Sahel desertification crisis create geographic and social concerns?",
      options: ["It has no social impact", "It causes loss of farmland, displacement, resource conflicts between farmers and herders, and migration", "It only affects wildlife", "It improves living conditions"],
      correct: "It causes loss of farmland, displacement, resource conflicts between farmers and herders, and migration",
      explanation: "Desertification in the Sahel reduces productive farmland, intensifying competition between sedentary farmers and pastoralist herders, driving displacement, food insecurity, and contributing to regional instability.",
      difficulty: "medium"
    },
    {
      question: "What geographic factors make the Horn of Africa particularly vulnerable to famine?",
      options: ["It has abundant rainfall", "Erratic rainfall, recurring droughts, arid climate, combined with conflict and poor infrastructure", "It has too many rivers", "Its geography is ideal for farming"],
      correct: "Erratic rainfall, recurring droughts, arid climate, combined with conflict and poor infrastructure",
      explanation: "The Horn of Africa (Somalia, Ethiopia, Eritrea, Djibouti) faces recurring droughts due to its semi-arid climate, complicated by armed conflicts, limited infrastructure, and dependence on rain-fed agriculture.",
      difficulty: "medium"
    },
    {
      question: "How does transboundary water management create tensions between African nations?",
      options: ["Rivers always have enough water for everyone", "Shared rivers and lakes create disputes when upstream activities affect downstream access", "Only coastal countries have water issues", "Water is unlimited in Africa"],
      correct: "Shared rivers and lakes create disputes when upstream activities affect downstream access",
      explanation: "Rivers like the Nile, Niger, and Zambezi cross multiple countries. Dam construction, irrigation, and pollution upstream can reduce water availability and quality for downstream nations, creating diplomatic tensions.",
      difficulty: "medium"
    },
    {
      question: "What is the 'brain drain' and how does it affect African development?",
      options: ["A medical condition", "The emigration of skilled professionals reduces Africa's human capital needed for development", "Immigration of skilled workers to Africa", "A type of education system"],
      correct: "The emigration of skilled professionals reduces Africa's human capital needed for development",
      explanation: "Brain drain — the migration of doctors, engineers, scientists, and other professionals to developed countries — deprives African nations of critical skills needed for healthcare, education, and economic development.",
      difficulty: "medium"
    },
    {
      question: "How does unplanned urbanization create geographic concerns in African cities?",
      options: ["It solves all urban problems", "It leads to slum formation, inadequate sanitation, flooding risks, and environmental degradation", "It only affects rural areas", "It improves infrastructure naturally"],
      correct: "It leads to slum formation, inadequate sanitation, flooding risks, and environmental degradation",
      explanation: "Rapid, unplanned urbanization results in informal settlements (slums) lacking basic services, built in flood-prone or hazardous areas, with inadequate waste management and water supply, affecting millions of urban residents.",
      difficulty: "medium"
    },
    // Hard
    {
      question: "How do climate change and conflict interact to create compound crises in Africa?",
      options: ["They are unrelated", "Climate stress on resources intensifies existing tensions, while conflict reduces communities' ability to adapt to climate change", "Climate change prevents all conflicts", "Conflict improves climate conditions"],
      correct: "Climate stress on resources intensifies existing tensions, while conflict reduces communities' ability to adapt to climate change",
      explanation: "Climate change acts as a 'threat multiplier' — resource scarcity from drought/flooding exacerbates existing ethnic, political, and economic tensions, while conflict disrupts adaptation efforts, creating vicious cycles of vulnerability.",
      difficulty: "hard"
    },
    {
      question: "What is the geographic significance of Africa's 'land tenure' challenges for food security?",
      options: ["Land ownership is clear everywhere", "Unclear land rights, customary vs. formal systems, and gender inequality in land access undermine agricultural investment and food production", "Only urban land tenure matters", "Land tenure has no effect on food security"],
      correct: "Unclear land rights, customary vs. formal systems, and gender inequality in land access undermine agricultural investment and food production",
      explanation: "In many African countries, overlapping customary and formal land tenure systems create insecurity. Women, who do most farming, often cannot own land, reducing investment in sustainable farming and threatening food security.",
      difficulty: "hard"
    },
    {
      question: "How does the concept of 'climate refugees' challenge existing international frameworks?",
      options: ["Climate refugees are well-protected by law", "Current refugee conventions don't recognize climate displacement, leaving millions without legal protection", "Climate change doesn't cause displacement", "All displaced people receive equal protection"],
      correct: "Current refugee conventions don't recognize climate displacement, leaving millions without legal protection",
      explanation: "The 1951 Refugee Convention doesn't include climate-displaced people. As millions of Africans are forced to move due to sea-level rise, desertification, and extreme weather, there's an urgent need for new legal frameworks to protect them.",
      difficulty: "hard"
    },
    {
      question: "How can the African Union's Great Green Wall initiative address multiple geographic concerns simultaneously?",
      options: ["It only plants trees", "It combats desertification, creates jobs, enhances food security, and sequesters carbon across the Sahel", "It is only an environmental project", "It has been abandoned"],
      correct: "It combats desertification, creates jobs, enhances food security, and sequesters carbon across the Sahel",
      explanation: "The Great Green Wall aims to restore 100 million hectares across the Sahel, simultaneously addressing desertification, food insecurity, poverty, and climate change by creating a mosaic of restored land, sustainable agriculture, and green jobs.",
      difficulty: "hard"
    },
    {
      question: "What is the 'paradox of plenty' in the context of Africa's geographic resource distribution?",
      options: ["Resource-rich areas always prosper", "Areas with abundant natural resources often experience more poverty, conflict, and environmental degradation than resource-poor areas", "Plenty always benefits everyone", "This concept doesn't apply to Africa"],
      correct: "Areas with abundant natural resources often experience more poverty, conflict, and environmental degradation than resource-poor areas",
      explanation: "The paradox of plenty (resource curse) shows that resource-rich African regions (Niger Delta, Eastern DRC) often suffer worse outcomes — conflict, corruption, environmental destruction, and poverty — than resource-poor areas, due to poor governance, inequality, and external exploitation.",
      difficulty: "hard"
    }
  ],
  "Unit 8: Geospatial Information And Data Processing": [
    // Easy
    {
      question: "What does GIS stand for?",
      options: ["General Information System", "Geographic Information System", "Global Internet Service", "Government Information Software"],
      correct: "Geographic Information System",
      explanation: "GIS stands for Geographic Information System — a technology used to capture, store, analyze, manage, and display geographic (spatial) data.",
      difficulty: "easy"
    },
    {
      question: "What is remote sensing?",
      options: ["Using a remote control", "Gathering information about the Earth's surface from a distance, usually from satellites or aircraft", "Sensing emotions", "A type of communication"],
      correct: "Gathering information about the Earth's surface from a distance, usually from satellites or aircraft",
      explanation: "Remote sensing involves collecting data about the Earth's surface without direct contact, typically using satellites or aircraft equipped with sensors that detect reflected or emitted energy.",
      difficulty: "easy"
    },
    {
      question: "What does GPS stand for?",
      options: ["General Positioning System", "Global Positioning System", "Geographic Processing Software", "Ground Planning System"],
      correct: "Global Positioning System",
      explanation: "GPS (Global Positioning System) is a satellite-based navigation system that provides location and time information anywhere on Earth.",
      difficulty: "easy"
    },
    {
      question: "What is a map scale?",
      options: ["The weight of a map", "The ratio between distance on a map and actual distance on the ground", "The color of a map", "The size of paper used"],
      correct: "The ratio between distance on a map and actual distance on the ground",
      explanation: "Map scale shows the relationship between a distance on the map and the corresponding distance on the ground, expressed as a ratio (e.g., 1:50,000), statement, or graphic bar.",
      difficulty: "easy"
    },
    {
      question: "What is a satellite image?",
      options: ["A hand-drawn map", "A photograph of the Earth taken from space by a satellite", "A painting of landscapes", "A type of telescope"],
      correct: "A photograph of the Earth taken from space by a satellite",
      explanation: "Satellite images are photographs or digital images of the Earth captured by orbiting satellites, used for weather forecasting, mapping, environmental monitoring, and urban planning.",
      difficulty: "easy"
    },
    // Medium
    {
      question: "What is the difference between raster and vector data in GIS?",
      options: ["They are the same", "Raster uses a grid of cells (pixels) while vector uses points, lines, and polygons", "Raster is always better than vector", "Vector only stores text data"],
      correct: "Raster uses a grid of cells (pixels) while vector uses points, lines, and polygons",
      explanation: "Raster data represents geographic features as a grid of cells (like satellite images), while vector data uses geometric shapes — points (wells), lines (roads), and polygons (lakes) — to represent features.",
      difficulty: "medium"
    },
    {
      question: "How is GIS used in urban planning in Africa?",
      options: ["It cannot be used for planning", "It maps land use, infrastructure, population distribution, and helps plan services and development", "It only creates decorative maps", "It is only used for military purposes"],
      correct: "It maps land use, infrastructure, population distribution, and helps plan services and development",
      explanation: "GIS helps urban planners map existing infrastructure, analyze population distribution, identify areas needing services, plan transportation networks, and manage land use in growing African cities.",
      difficulty: "medium"
    },
    {
      question: "What are the main components of a Geographic Information System?",
      options: ["Only software", "Hardware, software, data, people, and methods/procedures", "Only satellite images", "Only maps and compasses"],
      correct: "Hardware, software, data, people, and methods/procedures",
      explanation: "A complete GIS comprises five components: hardware (computers, GPS devices), software (ArcGIS, QGIS), data (spatial and attribute), people (analysts, users), and methods (procedures for analysis).",
      difficulty: "medium"
    },
    {
      question: "How does remote sensing help monitor deforestation in Africa?",
      options: ["It cannot detect deforestation", "Satellites capture images over time, allowing comparison to detect forest cover changes", "It only works at night", "It requires ground-level cameras"],
      correct: "Satellites capture images over time, allowing comparison to detect forest cover changes",
      explanation: "Satellite remote sensing captures multi-temporal images that can be compared to detect changes in forest cover, estimate deforestation rates, identify illegal logging, and monitor reforestation efforts.",
      difficulty: "medium"
    },
    {
      question: "What is spatial analysis in GIS?",
      options: ["Drawing maps by hand", "Using GIS tools to examine locations, attributes, and relationships of features in spatial data", "Counting population manually", "Taking photographs"],
      correct: "Using GIS tools to examine locations, attributes, and relationships of features in spatial data",
      explanation: "Spatial analysis uses GIS tools to query, measure, and model geographic data — including buffer analysis, overlay analysis, proximity analysis, and spatial statistics — to solve geographic problems.",
      difficulty: "medium"
    },
    // Hard
    {
      question: "How can GIS-based multi-criteria decision analysis (MCDA) help solve complex geographic problems in Africa?",
      options: ["It can only make simple decisions", "It combines multiple spatial factors (soil, slope, rainfall, proximity) to evaluate and rank locations for optimal decision-making", "It replaces all human judgment", "It only works for environmental analysis"],
      correct: "It combines multiple spatial factors (soil, slope, rainfall, proximity) to evaluate and rank locations for optimal decision-making",
      explanation: "GIS-based MCDA integrates multiple geographic criteria (environmental, social, economic) with weighted scoring to identify optimal locations for facilities, land use plans, or resource allocation in complex real-world scenarios.",
      difficulty: "hard"
    },
    {
      question: "What role does LiDAR technology play in African geographic research?",
      options: ["It is not used in Africa", "It creates precise 3D elevation models for terrain analysis, forest canopy mapping, and archaeological discoveries", "It only measures ocean depths", "It is a type of radar for weather"],
      correct: "It creates precise 3D elevation models for terrain analysis, forest canopy mapping, and archaeological discoveries",
      explanation: "LiDAR (Light Detection and Ranging) uses laser pulses to create detailed 3D models of terrain and vegetation, enabling precise elevation mapping, biomass estimation, flood modeling, and discovery of hidden archaeological sites.",
      difficulty: "hard"
    },
    {
      question: "How does participatory GIS (PGIS) empower local communities in African resource management?",
      options: ["It excludes communities from mapping", "It combines local spatial knowledge with GIS technology, giving communities tools to map and manage their resources", "It only benefits governments", "It replaces traditional knowledge"],
      correct: "It combines local spatial knowledge with GIS technology, giving communities tools to map and manage their resources",
      explanation: "PGIS integrates community members' spatial knowledge and priorities with GIS technology, empowering them to create maps of their resources, document land claims, monitor environmental changes, and participate meaningfully in planning decisions.",
      difficulty: "hard"
    },
    {
      question: "What are the challenges and ethical considerations of using geospatial technology in Africa?",
      options: ["There are no challenges", "Issues include data privacy, digital divide, data sovereignty, accuracy concerns, and potential misuse for surveillance", "Technology is always beneficial", "Only cost is a concern"],
      correct: "Issues include data privacy, digital divide, data sovereignty, accuracy concerns, and potential misuse for surveillance",
      explanation: "Geospatial technology in Africa faces challenges including unequal access (digital divide), data privacy concerns, questions of who owns and controls spatial data (data sovereignty), accuracy of data in data-scarce regions, and potential misuse for surveillance or land grabbing.",
      difficulty: "hard"
    },
    {
      question: "How can drone technology complement traditional remote sensing for geographic data collection in Africa?",
      options: ["Drones are not useful", "Drones provide high-resolution, on-demand imagery at lower cost for localized mapping, agriculture monitoring, and disaster response", "Drones replace all satellites", "Drones can only take photographs"],
      correct: "Drones provide high-resolution, on-demand imagery at lower cost for localized mapping, agriculture monitoring, and disaster response",
      explanation: "Drones (UAVs) offer higher spatial resolution than satellites, can be deployed quickly for specific areas, and are increasingly affordable — ideal for precision agriculture, infrastructure inspection, disaster damage assessment, and environmental monitoring in Africa.",
      difficulty: "hard"
    }
  ]
};

type GeographyDifficulty = "easy" | "medium" | "hard";

type GeographyQuestion = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: GeographyDifficulty;
};

type GeographyDescriptor = {
  focus: string;
  application: string;
  evidence: string;
  challenge: string;
  method: string;
};

const geographyDescriptors: Record<string, GeographyDescriptor> = {
  "Unit 1: Land-forms Of Africa": {
    focus: "African landform formation and relief patterns",
    application: "explaining mountains, basins, rift valleys, and plateaus",
    evidence: "landform maps, tectonic processes, and geomorphic examples",
    challenge: "confusing volcanic, folded, and faulted landforms",
    method: "compare structure, process, and resulting landform",
  },
  "Unit 2: Climate Of Africa": {
    focus: "African climate controls and regional patterns",
    application: "linking rainfall and temperature to latitude, altitude, pressure, and currents",
    evidence: "climate graphs, wind belts, and regional examples",
    challenge: "mixing up weather events with long-term climate controls",
    method: "trace how physical controls produce climate outcomes",
  },
  "Unit 3: Natural Resource Base Of Africa": {
    focus: "Africa's resource base and patterns of use",
    application: "connecting minerals, water, forests, soils, and energy resources to development",
    evidence: "resource maps, extraction examples, and conservation issues",
    challenge: "treating resources as benefits without considering sustainability",
    method: "evaluate both opportunity and environmental cost",
  },
  "Unit 4: Population of Africa": {
    focus: "population distribution, growth, and movement in Africa",
    application: "explaining density, migration, age structure, and urban growth",
    evidence: "population data, maps, and demographic examples",
    challenge: "assuming population is evenly distributed across the continent",
    method: "connect physical and economic factors to settlement patterns",
  },
  "Unit 5: Major Economic and Cultural Activities of Africa": {
    focus: "economic and cultural activities across Africa",
    application: "relating livelihood, trade, agriculture, industry, and culture to place",
    evidence: "regional case studies and examples of production and exchange",
    challenge: "separating culture completely from geography and economic life",
    method: "compare how environment and society shape activity",
  },
  "Unit 6: Human - Natural Environment Interactions": {
    focus: "mutual interaction between people and environment",
    application: "analyzing land use, adaptation, degradation, and conservation",
    evidence: "environmental case studies and human impact examples",
    challenge: "seeing environment as passive and unaffected by human decisions",
    method: "explain two-way influence between people and nature",
  },
  "Unit 7: Geographic Issues And Public Concerns In Africa": {
    focus: "major contemporary geographic issues in Africa",
    application: "discussing drought, food insecurity, conflict, displacement, and urban pressure",
    evidence: "current issue case studies and regional patterns",
    challenge: "treating complex crises as if they had one simple cause",
    method: "analyze how several geographic factors interact at once",
  },
  "Unit 8: Geospatial Information And Data Processing": {
    focus: "geospatial tools and data use",
    application: "using GIS, GPS, remote sensing, and mapped data for decision-making",
    evidence: "maps, satellite imagery, layered data, and spatial analysis",
    challenge: "confusing geospatial tools with each other or ignoring data quality",
    method: "match each tool to the problem it solves best",
  },
};

const buildSupplementQuestions = (
  chapter: string,
  difficulty: GeographyDifficulty,
  count: number,
): GeographyQuestion[] => {
  const descriptor = geographyDescriptors[chapter];
  const title = chapter.replace(/^Unit\s+\d+:\s*/i, "");
  const templates: Record<GeographyDifficulty, Omit<GeographyQuestion, "difficulty">[]> = {
    easy: [
      {
        question: `What is the central geographic focus of "${title}"?`,
        options: [descriptor.focus, "Basic arithmetic practice", "Language grammar only", "Laboratory chemistry only"],
        correct: descriptor.focus,
        explanation: `This unit centers on ${descriptor.focus}.`,
      },
      {
        question: `Which activity best fits "${title}"?`,
        options: [descriptor.application, "Memorizing unrelated dates only", "Ignoring maps and evidence", "Studying only literature genres"],
        correct: descriptor.application,
        explanation: `The unit is best applied through ${descriptor.application}.`,
      },
      {
        question: `Which source of evidence is most useful in "${title}"?`,
        options: [descriptor.evidence, "Random opinions with no data", "Poetry recitation alone", "Chemical formulas only"],
        correct: descriptor.evidence,
        explanation: `Strong geography answers here depend on ${descriptor.evidence}.`,
      },
      {
        question: `What is a common misunderstanding in "${title}"?`,
        options: [descriptor.challenge, "Using too many maps", "Studying local examples", "Comparing regions carefully"],
        correct: descriptor.challenge,
        explanation: `That misunderstanding weakens geographic reasoning in this unit.`,
      },
      {
        question: `Which study approach is strongest for "${title}"?`,
        options: [descriptor.method, "Memorize headings without examples", "Ignore place-based differences", "Revise without maps or data"],
        correct: descriptor.method,
        explanation: `The best approach is to ${descriptor.method}.`,
      },
    ],
    medium: [
      {
        question: `Why do geographers use ${descriptor.evidence} in "${title}"?`,
        options: [
          `To support explanations about ${descriptor.focus}`,
          "To avoid comparing places",
          "To replace all critical thinking",
          "To study only one village forever",
        ],
        correct: `To support explanations about ${descriptor.focus}`,
        explanation: `Geographic evidence helps explain and compare the unit's main focus.`,
      },
      {
        question: `A good answer in "${title}" should mainly do what?`,
        options: [
          descriptor.method,
          "List unrelated facts with no explanation",
          "Depend only on memorized definitions",
          "Ignore the role of location",
        ],
        correct: descriptor.method,
        explanation: `This unit rewards geographic explanation, not disconnected facts.`,
      },
      {
        question: `Which classroom task best measures understanding of "${title}"?`,
        options: [
          `Use ${descriptor.evidence} to explain ${descriptor.application}`,
          "Copy the unit title repeatedly",
          "Name countries without context",
          "Avoid using case studies",
        ],
        correct: `Use ${descriptor.evidence} to explain ${descriptor.application}`,
        explanation: `That task combines evidence and application, which is the goal of the unit.`,
      },
      {
        question: `Why is "${title}" important in African geography?`,
        options: [
          `Because it helps learners understand ${descriptor.focus} in real places`,
          "Because it removes the need for maps",
          "Because it is unrelated to development",
          "Because it studies only abstract theory",
        ],
        correct: `Because it helps learners understand ${descriptor.focus} in real places`,
        explanation: `The unit matters because it connects geography to actual African regions and issues.`,
      },
      {
        question: `Which weakness would lower a student's score in "${title}" most?`,
        options: [
          descriptor.challenge,
          "Using examples from Africa",
          "Comparing regions carefully",
          "Linking evidence to explanation",
        ],
        correct: descriptor.challenge,
        explanation: `That mistake shows weak understanding of the unit's central logic.`,
      },
    ],
    hard: [
      {
        question: `Which conclusion best fits "${title}"?`,
        options: [
          `Geographic understanding improves when learners ${descriptor.method} using ${descriptor.evidence}`,
          "The unit is mastered by memorizing one sentence",
          "Geography never needs evidence",
          "Location has no effect on outcomes",
        ],
        correct: `Geographic understanding improves when learners ${descriptor.method} using ${descriptor.evidence}`,
        explanation: `That conclusion combines method and evidence, which is what strong geographic reasoning needs.`,
      },
      {
        question: `A student says "${title}" is just about remembering facts. What is the best response?`,
        options: [
          `No. It also requires explaining ${descriptor.focus} through ${descriptor.application}`,
          "Yes. Facts alone are always enough in geography",
          "Yes. Maps are unnecessary in this unit",
          "No. The unit should be skipped",
        ],
        correct: `No. It also requires explaining ${descriptor.focus} through ${descriptor.application}`,
        explanation: `The strongest work in this unit involves explanation, not recall alone.`,
      },
      {
        question: `Which task would best reveal deep misunderstanding in "${title}"?`,
        options: [
          `A learner repeats ${descriptor.challenge} while ignoring ${descriptor.evidence}`,
          "A learner compares places carefully",
          "A learner supports claims with data",
          "A learner links geography to real African examples",
        ],
        correct: `A learner repeats ${descriptor.challenge} while ignoring ${descriptor.evidence}`,
        explanation: `That response shows both a conceptual error and poor use of evidence.`,
      },
      {
        question: `What is the strongest justification for teaching "${title}" in Grade 10?`,
        options: [
          `It builds the ability to analyze ${descriptor.focus} in African contexts`,
          "It avoids all real-world issues",
          "It replaces every other geography topic",
          "It matters only for copying notes",
        ],
        correct: `It builds the ability to analyze ${descriptor.focus} in African contexts`,
        explanation: `This unit matters because it helps students reason geographically about real places and issues.`,
      },
      {
        question: `Which answer best matches high-level geographic reasoning in "${title}"?`,
        options: [
          `Use ${descriptor.evidence} to evaluate how ${descriptor.application}`,
          "Repeat definitions without examples",
          "Ignore scale and location",
          "Describe one fact with no analysis",
        ],
        correct: `Use ${descriptor.evidence} to evaluate how ${descriptor.application}`,
        explanation: `High-level geography uses evidence to analyze and evaluate real spatial patterns.`,
      },
    ],
  };

  return templates[difficulty].slice(0, count).map((item) => ({
    ...item,
    difficulty,
  }));
};

const augmentGeographyQuestionBank = (bank: Record<string, GeographyQuestion[]>) =>
  Object.fromEntries(
    Object.entries(bank).map(([chapter, questions]) => {
      const counts = { easy: 0, medium: 0, hard: 0 } as Record<GeographyDifficulty, number>;
      for (const question of questions) counts[question.difficulty] += 1;

      const supplemented = [
        ...questions,
        ...buildSupplementQuestions(chapter, "easy", Math.max(0, 10 - counts.easy)),
        ...buildSupplementQuestions(chapter, "medium", Math.max(0, 10 - counts.medium)),
        ...buildSupplementQuestions(chapter, "hard", Math.max(0, 10 - counts.hard)),
      ];

      return [chapter, supplemented];
    }),
  ) as Record<string, GeographyQuestion[]>;

export const grade10GeographyQuestions = augmentGeographyQuestionBank(
  baseGrade10GeographyQuestions as Record<string, GeographyQuestion[]>,
);

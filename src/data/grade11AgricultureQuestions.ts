
export interface AgricultureQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade11AgricultureQuestions: { [chapter: string]: AgricultureQuestion[] } = {
  'Chapter 1: Introduction to Crop Production': [
    // Easy Questions
    {
      id: 'agr11_intro_e1',
      question: 'What is crop production?',
      options: ['The cultivation of plants for food and other uses', 'Animal breeding', 'Soil testing', 'Water management'],
      correct: 'The cultivation of plants for food and other uses',
      explanation: 'Crop production is the practice of growing plants for food, fiber, fuel, and other agricultural products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e2',
      question: 'Which of the following is a primary crop?',
      options: ['Wheat', 'Furniture', 'Clothing', 'Paper'],
      correct: 'Wheat',
      explanation: 'Wheat is a cereal grain that is a primary crop grown for food production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e3',
      question: 'What is the main purpose of agriculture?',
      options: ['To produce food and raw materials', 'To build houses', 'To create entertainment', 'To generate electricity'],
      correct: 'To produce food and raw materials',
      explanation: 'Agriculture primarily aims to produce food for human consumption and raw materials for various industries.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e4',
      question: 'Which season is typically best for planting most crops?',
      options: ['Spring', 'Winter', 'Late autumn', 'Mid-winter'],
      correct: 'Spring',
      explanation: 'Spring provides optimal conditions with moderate temperatures and adequate moisture for seed germination.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e5',
      question: 'What do plants need to grow?',
      options: ['Sunlight, water, and nutrients', 'Only water', 'Only sunlight', 'Only soil'],
      correct: 'Sunlight, water, and nutrients',
      explanation: 'Plants require sunlight for photosynthesis, water for transport and metabolism, and nutrients for growth.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e6',
      question: 'What is a seed?',
      options: ['A plant embryo with stored food', 'A type of soil', 'A farming tool', 'A type of fertilizer'],
      correct: 'A plant embryo with stored food',
      explanation: 'A seed contains a plant embryo along with stored nutrients needed for initial growth.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e7',
      question: 'Which of these is a root crop?',
      options: ['Carrot', 'Tomato', 'Apple', 'Wheat'],
      correct: 'Carrot',
      explanation: 'Carrots are root vegetables where the edible part grows underground.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e8',
      question: 'What is harvesting?',
      options: ['Collecting mature crops', 'Planting seeds', 'Watering plants', 'Preparing soil'],
      correct: 'Collecting mature crops',
      explanation: 'Harvesting is the process of gathering mature crops from the field.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e9',
      question: 'Which tool is commonly used for digging soil?',
      options: ['Hoe', 'Scissors', 'Hammer', 'Screwdriver'],
      correct: 'Hoe',
      explanation: 'A hoe is an agricultural tool designed for digging and cultivating soil.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e10',
      question: 'What is irrigation?',
      options: ['Supplying water to crops', 'Removing weeds', 'Adding fertilizer', 'Harvesting crops'],
      correct: 'Supplying water to crops',
      explanation: 'Irrigation is the artificial application of water to crops to support growth.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_intro_m1',
      question: 'Which factors are essential for successful crop production?',
      options: ['Climate, soil, water, and seeds', 'Only water and soil', 'Only climate', 'Only good seeds'],
      correct: 'Climate, soil, water, and seeds',
      explanation: 'Successful crop production requires optimal climate conditions, fertile soil, adequate water supply, and quality seeds.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m2',
      question: 'What is the difference between annual and perennial crops?',
      options: ['Annual crops complete their life cycle in one year, perennial crops live for multiple years', 'No difference', 'Annual crops are bigger', 'Perennial crops grow faster'],
      correct: 'Annual crops complete their life cycle in one year, perennial crops live for multiple years',
      explanation: 'Annual crops like wheat complete their entire life cycle in one growing season, while perennial crops like fruit trees live for many years.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m3',
      question: 'What is crop rotation?',
      options: ['Growing different crops in sequence on the same land', 'Turning plants around', 'Moving crops to different fields', 'Harvesting at different times'],
      correct: 'Growing different crops in sequence on the same land',
      explanation: 'Crop rotation involves systematically changing the type of crops grown on the same land to maintain soil health.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m4',
      question: 'Which of these is a cash crop?',
      options: ['Cotton', 'Potatoes for home use', 'Backyard vegetables', 'Herbs for cooking'],
      correct: 'Cotton',
      explanation: 'Cash crops like cotton are grown primarily for sale and profit rather than personal consumption.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m5',
      question: 'What is soil pH and why is it important?',
      options: ['Soil acidity/alkalinity level that affects nutrient availability', 'Soil temperature', 'Soil color', 'Soil texture'],
      correct: 'Soil acidity/alkalinity level that affects nutrient availability',
      explanation: 'Soil pH measures acidity or alkalinity and determines how well plants can absorb nutrients from the soil.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m6',
      question: 'What are the main types of fertilizers?',
      options: ['Organic and inorganic', 'Liquid and solid', 'Expensive and cheap', 'Local and imported'],
      correct: 'Organic and inorganic',
      explanation: 'Fertilizers are classified as organic (from living materials) or inorganic (synthetic chemicals).',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m7',
      question: 'What is intercropping?',
      options: ['Growing two or more crops together in the same field', 'Growing crops in sequence', 'Growing crops in greenhouses', 'Growing crops without soil'],
      correct: 'Growing two or more crops together in the same field',
      explanation: 'Intercropping involves cultivating multiple crop species simultaneously in the same area.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m8',
      question: 'Which pest control method is most environmentally friendly?',
      options: ['Biological control', 'Chemical pesticides', 'Burning fields', 'Ignoring pests'],
      correct: 'Biological control',
      explanation: 'Biological control uses natural predators and organisms to control pests without harmful chemicals.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m9',
      question: 'What is soil erosion?',
      options: ['Loss of topsoil due to wind or water', 'Soil becoming too wet', 'Soil becoming too dry', 'Soil changing color'],
      correct: 'Loss of topsoil due to wind or water',
      explanation: 'Soil erosion is the removal of fertile topsoil by natural forces like wind and water.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m10',
      question: 'What is the purpose of soil testing?',
      options: ['To determine soil fertility and nutrient content', 'To check soil color', 'To measure soil weight', 'To determine soil age'],
      correct: 'To determine soil fertility and nutrient content',
      explanation: 'Soil testing analyzes the chemical composition and fertility status to guide fertilization decisions.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_intro_h1',
      question: 'What is the difference between subsistence and commercial farming?',
      options: ['Subsistence is for family consumption, commercial is for market sale', 'No difference', 'Commercial uses more water', 'Subsistence uses modern technology'],
      correct: 'Subsistence is for family consumption, commercial is for market sale',
      explanation: 'Subsistence farming is primarily for family consumption while commercial farming focuses on producing crops for market sale and profit.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h2',
      question: 'How does climate change affect crop production?',
      options: ['Alters rainfall patterns, temperatures, and growing seasons', 'Has no effect', 'Only affects temperature', 'Only affects rainfall'],
      correct: 'Alters rainfall patterns, temperatures, and growing seasons',
      explanation: 'Climate change disrupts traditional weather patterns, affecting when and how crops can be grown successfully.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h3',
      question: 'What is precision agriculture?',
      options: ['Using technology to optimize crop production with minimal inputs', 'Farming very small areas', 'Using only hand tools', 'Growing only one type of crop'],
      correct: 'Using technology to optimize crop production with minimal inputs',
      explanation: 'Precision agriculture uses GPS, sensors, and data analysis to apply inputs precisely where and when needed.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h4',
      question: 'What is integrated pest management (IPM)?',
      options: ['Combining multiple pest control methods sustainably', 'Using only chemical pesticides', 'Ignoring all pests', 'Using only biological control'],
      correct: 'Combining multiple pest control methods sustainably',
      explanation: 'IPM combines biological, cultural, physical, and chemical methods to manage pests in an environmentally responsible way.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h5',
      question: 'How does soil organic matter affect crop production?',
      options: ['Improves soil structure, water retention, and nutrient availability', 'Only affects soil color', 'Makes soil too heavy', 'Reduces crop yields'],
      correct: 'Improves soil structure, water retention, and nutrient availability',
      explanation: 'Organic matter enhances soil physical properties and provides slow-release nutrients for sustained crop growth.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h6',
      question: 'What is sustainable agriculture?',
      options: ['Farming practices that maintain productivity while protecting the environment', 'Farming without any inputs', 'Farming only organic crops', 'Farming for short-term profits'],
      correct: 'Farming practices that maintain productivity while protecting the environment',
      explanation: 'Sustainable agriculture balances productive farming with environmental stewardship and economic viability.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h7',
      question: 'What role do cover crops play in crop production?',
      options: ['Protect soil, improve fertility, and suppress weeds', 'Only provide decoration', 'Compete with main crops', 'Reduce soil fertility'],
      correct: 'Protect soil, improve fertility, and suppress weeds',
      explanation: 'Cover crops protect soil from erosion, add organic matter, and help manage weeds and pests.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h8',
      question: 'How does crop breeding improve production?',
      options: ['Develops varieties with better yield, disease resistance, and quality traits', 'Only changes crop appearance', 'Makes crops grow faster', 'Reduces crop diversity'],
      correct: 'Develops varieties with better yield, disease resistance, and quality traits',
      explanation: 'Plant breeding systematically improves crop characteristics to enhance productivity and adaptability.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h9',
      question: 'What is water use efficiency in agriculture?',
      options: ['Maximizing crop yield per unit of water used', 'Using as much water as possible', 'Watering crops daily', 'Using only rainwater'],
      correct: 'Maximizing crop yield per unit of water used',
      explanation: 'Water use efficiency focuses on getting the maximum agricultural output from each unit of water applied.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h10',
      question: 'What is agroecology?',
      options: ['Applying ecological principles to agricultural systems', 'Farming without any technology', 'Growing only native plants', 'Farming in forests'],
      correct: 'Applying ecological principles to agricultural systems',
      explanation: 'Agroecology integrates ecological concepts and principles into the design and management of agricultural systems.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 2: Field Crops Production and Management': [
    // Easy Questions
    {
      id: 'agr11_field_e1',
      question: 'What are field crops?',
      options: ['Crops grown in large fields like cereals and legumes', 'Garden vegetables', 'Fruit trees', 'Flowers'],
      correct: 'Crops grown in large fields like cereals and legumes',
      explanation: 'Field crops are plants grown extensively in large fields, including cereals like wheat, maize, and legumes like beans.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e2',
      question: 'Which of these is a cereal crop?',
      options: ['Maize', 'Beans', 'Potatoes', 'Carrots'],
      correct: 'Maize',
      explanation: 'Maize (corn) is a cereal grain crop that belongs to the grass family.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e3',
      question: 'What is plowing?',
      options: ['Breaking and turning over soil before planting', 'Harvesting crops', 'Watering plants', 'Applying fertilizer'],
      correct: 'Breaking and turning over soil before planting',
      explanation: 'Plowing is the process of breaking up and turning over soil to prepare it for planting.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e4',
      question: 'Which tool is used for plowing?',
      options: ['Plow', 'Sickle', 'Watering can', 'Basket'],
      correct: 'Plow',
      explanation: 'A plow is a farming tool used to break up and turn over soil.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e5',
      question: 'What is weeding?',
      options: ['Removing unwanted plants from crops', 'Planting seeds', 'Harvesting crops', 'Applying water'],
      correct: 'Removing unwanted plants from crops',
      explanation: 'Weeding involves removing weeds (unwanted plants) that compete with crops for resources.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e6',
      question: 'Which of these is a legume crop?',
      options: ['Beans', 'Wheat', 'Maize', 'Rice'],
      correct: 'Beans',
      explanation: 'Beans are leguminous crops that can fix nitrogen from the atmosphere.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e7',
      question: 'What is thinning?',
      options: ['Removing excess seedlings to give space to others', 'Adding more seeds', 'Cutting mature crops', 'Watering less'],
      correct: 'Removing excess seedlings to give space to others',
      explanation: 'Thinning involves removing some seedlings to reduce competition and allow remaining plants to grow better.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e8',
      question: 'When should field crops be harvested?',
      options: ['When they are fully mature', 'Immediately after planting', 'When they are still green', 'Before they flower'],
      correct: 'When they are fully mature',
      explanation: 'Field crops should be harvested when they reach full maturity for maximum yield and quality.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e9',
      question: 'What is broadcasting?',
      options: ['Scattering seeds evenly over a field', 'Planting in rows', 'Harvesting crops', 'Applying pesticides'],
      correct: 'Scattering seeds evenly over a field',
      explanation: 'Broadcasting is a seeding method where seeds are scattered uniformly over the field surface.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e10',
      question: 'Which season is best for planting cereal crops?',
      options: ['Rainy season', 'Dry season', 'Winter', 'Any season'],
      correct: 'Rainy season',
      explanation: 'Most cereal crops are planted at the beginning of the rainy season when moisture is adequate.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_field_m1',
      question: 'What is crop rotation?',
      options: ['Growing different crops in sequence on the same land', 'Turning crops upside down', 'Moving crops to different locations', 'Harvesting at different times'],
      correct: 'Growing different crops in sequence on the same land',
      explanation: 'Crop rotation involves growing different types of crops in a planned sequence on the same land to maintain soil fertility and reduce pest problems.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m2',
      question: 'What is the recommended plant spacing for optimal growth?',
      options: ['Adequate space to minimize competition for resources', 'Very close together', 'Very far apart', 'Random spacing'],
      correct: 'Adequate space to minimize competition for resources',
      explanation: 'Proper plant spacing ensures plants have adequate access to light, water, and nutrients without excessive competition.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m3',
      question: 'What is minimum tillage?',
      options: ['Reducing soil disturbance during land preparation', 'Tilling as much as possible', 'Never tilling the soil', 'Tilling only with hand tools'],
      correct: 'Reducing soil disturbance during land preparation',
      explanation: 'Minimum tillage involves minimal soil disturbance to preserve soil structure and reduce erosion.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m4',
      question: 'Which method is best for controlling weeds in field crops?',
      options: ['Integrated weed management', 'Only chemical herbicides', 'Only manual weeding', 'Ignoring weeds'],
      correct: 'Integrated weed management',
      explanation: 'Integrated weed management combines multiple control methods for effective and sustainable weed control.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m5',
      question: 'What is the purpose of field leveling?',
      options: ['Ensure uniform water distribution and drainage', 'Make fields look neat', 'Reduce field size', 'Increase soil depth'],
      correct: 'Ensure uniform water distribution and drainage',
      explanation: 'Field leveling creates uniform slopes for proper water distribution and prevents waterlogging.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m6',
      question: 'What is seed rate?',
      options: ['Amount of seed used per unit area', 'Speed of planting', 'Cost of seeds', 'Quality of seeds'],
      correct: 'Amount of seed used per unit area',
      explanation: 'Seed rate refers to the quantity of seeds planted per unit area to achieve optimal plant population.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m7',
      question: 'What is the advantage of line sowing over broadcasting?',
      options: ['Better plant spacing and easier field operations', 'Uses less seed', 'Requires less water', 'Grows faster'],
      correct: 'Better plant spacing and easier field operations',
      explanation: 'Line sowing allows for uniform plant spacing and makes cultivation practices like weeding easier.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m8',
      question: 'What is topdressing?',
      options: ['Applying fertilizer to growing crops', 'Removing top soil', 'Covering seeds with soil', 'Pruning plant tops'],
      correct: 'Applying fertilizer to growing crops',
      explanation: 'Topdressing is the application of fertilizer to crops during their growing period.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m9',
      question: 'What is the main purpose of earthing up?',
      options: ['Supporting plant stems and covering roots', 'Removing soil from plants', 'Planting deeper', 'Harvesting roots'],
      correct: 'Supporting plant stems and covering roots',
      explanation: 'Earthing up involves mounding soil around plant stems for support and to cover exposed roots.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m10',
      question: 'What is green manuring?',
      options: ['Growing crops specifically to be plowed into soil for nutrients', 'Using only green fertilizers', 'Composting green waste', 'Planting green vegetables'],
      correct: 'Growing crops specifically to be plowed into soil for nutrients',
      explanation: 'Green manuring involves growing crops that are then incorporated into the soil to improve fertility.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_field_h1',
      question: 'Why is nitrogen fixation important in legume crops?',
      options: ['It enriches soil with nitrogen naturally', 'It makes crops grow faster', 'It prevents diseases', 'It increases water retention'],
      correct: 'It enriches soil with nitrogen naturally',
      explanation: 'Legumes have symbiotic bacteria in their root nodules that fix atmospheric nitrogen, enriching the soil naturally and reducing the need for nitrogen fertilizers.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h2',
      question: 'What is the C:N ratio and why is it important in crop residue management?',
      options: ['Carbon to nitrogen ratio that affects decomposition rate', 'Crop to nitrogen ratio', 'Cost to nutrition ratio', 'Climate to nitrogen ratio'],
      correct: 'Carbon to nitrogen ratio that affects decomposition rate',
      explanation: 'C:N ratio determines how quickly organic matter decomposes and releases nutrients to plants.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h3',
      question: 'How does no-till farming benefit field crop production?',
      options: ['Reduces soil erosion, conserves moisture, and improves soil structure', 'Increases tillage costs', 'Requires more fertilizer', 'Reduces crop yields'],
      correct: 'Reduces soil erosion, conserves moisture, and improves soil structure',
      explanation: 'No-till farming maintains soil structure, reduces erosion, and conserves soil moisture and organic matter.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h4',
      question: 'What is allelopathy in crop production?',
      options: ['Chemical interactions between plants that affect growth', 'Physical support between plants', 'Nutrient sharing between plants', 'Water sharing between plants'],
      correct: 'Chemical interactions between plants that affect growth',
      explanation: 'Allelopathy involves the release of chemicals by plants that can inhibit or promote the growth of other plants.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h5',
      question: 'How does crop canopy management affect yield?',
      options: ['Optimizes light interception and reduces disease pressure', 'Only affects plant height', 'Reduces water usage', 'Increases fertilizer needs'],
      correct: 'Optimizes light interception and reduces disease pressure',
      explanation: 'Proper canopy management maximizes light capture while improving air circulation to reduce disease risks.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h6',
      question: 'What is the critical period for weed control?',
      options: ['Early growth stage when crops are most vulnerable to weed competition', 'Just before harvest', 'During flowering', 'After crop maturity'],
      correct: 'Early growth stage when crops are most vulnerable to weed competition',
      explanation: 'The critical period is when crops are most sensitive to weed competition, typically during early growth stages.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h7',
      question: 'How does soil compaction affect field crop production?',
      options: ['Reduces root penetration, water infiltration, and nutrient uptake', 'Improves soil structure', 'Increases crop yields', 'Reduces pest problems'],
      correct: 'Reduces root penetration, water infiltration, and nutrient uptake',
      explanation: 'Soil compaction restricts root growth, reduces water and air movement, and limits nutrient availability.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h8',
      question: 'What is precision seeding and what are its advantages?',
      options: ['Accurate seed placement for optimal plant population and resource use', 'Planting many seeds closely', 'Planting only expensive seeds', 'Planting without measuring'],
      correct: 'Accurate seed placement for optimal plant population and resource use',
      explanation: 'Precision seeding ensures optimal plant spacing and population density for maximum resource efficiency.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h9',
      question: 'How does photosynthetically active radiation (PAR) affect crop yields?',
      options: ['Determines the amount of light energy available for photosynthesis', 'Affects soil temperature only', 'Influences water uptake only', 'Controls pest populations'],
      correct: 'Determines the amount of light energy available for photosynthesis',
      explanation: 'PAR is the portion of solar radiation that plants can use for photosynthesis, directly affecting yield potential.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h10',
      question: 'What is the harvest index and why is it important?',
      options: ['Ratio of grain yield to total plant biomass', 'Speed of harvesting', 'Quality of harvest', 'Cost of harvesting'],
      correct: 'Ratio of grain yield to total plant biomass',
      explanation: 'Harvest index measures the efficiency of converting total plant growth into harvestable yield.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 3: Industrial Crops Production and Management': [
    // Easy Questions
    {
      id: 'agr11_industrial_e1',
      question: 'What are industrial crops?',
      options: ['Crops grown for industrial purposes like cotton and sugarcane', 'Crops grown in factories', 'Crops for home use', 'Wild plants'],
      correct: 'Crops grown for industrial purposes like cotton and sugarcane',
      explanation: 'Industrial crops are grown primarily for industrial processing rather than direct consumption, including cotton, sugarcane, and oil seeds.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e2',
      question: 'Which of these is an industrial crop?',
      options: ['Cotton', 'Lettuce', 'Carrots', 'Tomatoes'],
      correct: 'Cotton',
      explanation: 'Cotton is grown primarily for textile production, making it an industrial crop.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e3',
      question: 'What is cotton used for?',
      options: ['Making textiles and clothing', 'Food production', 'Building materials', 'Fuel'],
      correct: 'Making textiles and clothing',
      explanation: 'Cotton fibers are primarily used in the textile industry to make fabrics and clothing.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e4',
      question: 'Which crop is used to make sugar?',
      options: ['Sugarcane', 'Wheat', 'Maize', 'Barley'],
      correct: 'Sugarcane',
      explanation: 'Sugarcane is processed to extract sugar for various industrial and food applications.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e5',
      question: 'What are oil seeds used for?',
      options: ['Producing cooking oil and industrial oils', 'Making bread', 'Animal feed only', 'Decoration'],
      correct: 'Producing cooking oil and industrial oils',
      explanation: 'Oil seeds like sunflower and sesame are processed to extract oils for cooking and industrial uses.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e6',
      question: 'Which of these is an oil seed crop?',
      options: ['Sunflower', 'Rice', 'Wheat', 'Potato'],
      correct: 'Sunflower',
      explanation: 'Sunflower seeds contain oil that can be extracted for various uses.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e7',
      question: 'What is tobacco used for?',
      options: ['Cigarettes and other tobacco products', 'Food flavoring', 'Medicine', 'Building materials'],
      correct: 'Cigarettes and other tobacco products',
      explanation: 'Tobacco is primarily grown for the production of cigarettes and other tobacco products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e8',
      question: 'Which crop is used to make rubber?',
      options: ['Rubber tree', 'Cotton', 'Wheat', 'Maize'],
      correct: 'Rubber tree',
      explanation: 'Rubber trees produce latex that is processed into rubber products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e9',
      question: 'What is jute used for?',
      options: ['Making ropes and sacks', 'Food production', 'Medicine', 'Fuel'],
      correct: 'Making ropes and sacks',
      explanation: 'Jute fibers are used to make ropes, sacks, and other coarse textiles.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e10',
      question: 'Which climate is best for growing cotton?',
      options: ['Warm and humid', 'Cold and dry', 'Very cold', 'Desert conditions'],
      correct: 'Warm and humid',
      explanation: 'Cotton grows best in warm temperatures with adequate moisture during the growing season.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_industrial_m1',
      question: 'Which of these is an example of an industrial crop in Ethiopia?',
      options: ['Cotton', 'Tomato', 'Lettuce', 'Apple'],
      correct: 'Cotton',
      explanation: 'Cotton is a major industrial crop in Ethiopia, grown for textile production and export.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m2',
      question: 'What is the difference between food crops and industrial crops?',
      options: ['Food crops are for consumption, industrial crops are for processing', 'No difference', 'Industrial crops are bigger', 'Food crops grow faster'],
      correct: 'Food crops are for consumption, industrial crops are for processing',
      explanation: 'Food crops are grown primarily for human consumption, while industrial crops are grown for processing into other products.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m3',
      question: 'What processing is required for cotton after harvest?',
      options: ['Ginning to separate fibers from seeds', 'Grinding into flour', 'Fermenting', 'Drying only'],
      correct: 'Ginning to separate fibers from seeds',
      explanation: 'Cotton ginning removes seeds from cotton fibers, preparing them for textile processing.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m4',
      question: 'Which factor is most important for sugarcane production?',
      options: ['Adequate water supply', 'Cold temperatures', 'Sandy soil only', 'Shade conditions'],
      correct: 'Adequate water supply',
      explanation: 'Sugarcane requires abundant water throughout its growing period for optimal sugar production.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m5',
      question: 'What is the main challenge in industrial crop storage?',
      options: ['Maintaining quality for processing', 'Keeping crops fresh for eating', 'Preventing spoilage for immediate consumption', 'Maintaining appearance'],
      correct: 'Maintaining quality for processing',
      explanation: 'Industrial crops must maintain specific quality standards required for industrial processing.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m6',
      question: 'Which oil seed crop is drought tolerant?',
      options: ['Sesame', 'Sunflower', 'Soybean', 'Groundnut'],
      correct: 'Sesame',
      explanation: 'Sesame is known for its ability to grow in semi-arid conditions with limited water.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m7',
      question: 'What is the harvesting indicator for cotton?',
      options: ['When bolls are fully opened and dry', 'When plants are green', 'Immediately after flowering', 'When leaves fall'],
      correct: 'When bolls are fully opened and dry',
      explanation: 'Cotton is harvested when the bolls split open and the fiber is dry and white.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m8',
      question: 'Which part of the sugarcane plant contains the most sugar?',
      options: ['The stem', 'The leaves', 'The roots', 'The flowers'],
      correct: 'The stem',
      explanation: 'Sugarcane stems accumulate the highest concentration of sugar and are the part that is processed.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m9',
      question: 'What is the primary pest problem in cotton production?',
      options: ['Bollworm', 'Aphids', 'Grasshoppers', 'Snails'],
      correct: 'Bollworm',
      explanation: 'Bollworms are major pests that attack cotton bolls, causing significant yield losses.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m10',
      question: 'Which processing step is first for oil seed crops?',
      options: ['Cleaning and drying', 'Oil extraction', 'Grinding', 'Packaging'],
      correct: 'Cleaning and drying',
      explanation: 'Oil seeds must be cleaned of impurities and properly dried before oil extraction.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_industrial_h1',
      question: 'What are the main challenges in industrial crop production?',
      options: ['Market fluctuations, processing requirements, and quality standards', 'Only weather problems', 'Only soil issues', 'Only pest problems'],
      correct: 'Market fluctuations, processing requirements, and quality standards',
      explanation: 'Industrial crops face complex challenges including volatile market prices, specific processing requirements, and strict quality standards for industrial use.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h2',
      question: 'How does fiber quality affect cotton marketing?',
      options: ['Determines price and end-use applications', 'Has no effect on marketing', 'Only affects color', 'Only affects quantity'],
      correct: 'Determines price and end-use applications',
      explanation: 'Cotton fiber quality parameters like length, strength, and fineness directly influence market value and industrial applications.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h3',
      question: 'What is the relationship between sugar content and harvesting time in sugarcane?',
      options: ['Sugar content peaks at optimal maturity', 'Sugar content decreases over time', 'Sugar content remains constant', 'Sugar content increases indefinitely'],
      correct: 'Sugar content peaks at optimal maturity',
      explanation: 'Sugarcane reaches maximum sugar content at physiological maturity, after which it may decline.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h4',
      question: 'How does oil content vary in different oil seed crops?',
      options: ['Ranges from 20-50% depending on crop species and variety', 'All oil seeds have the same oil content', 'Oil content is always 50%', 'Oil content depends only on soil'],
      correct: 'Ranges from 20-50% depending on crop species and variety',
      explanation: 'Oil content varies significantly among oil seed crops, with sunflower containing 35-45% oil and sesame containing 45-55% oil.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h5',
      question: 'What is integrated pest management in cotton production?',
      options: ['Combining biological, cultural, and chemical control methods', 'Using only chemical pesticides', 'Using only biological control', 'Ignoring pest problems'],
      correct: 'Combining biological, cultural, and chemical control methods',
      explanation: 'IPM in cotton involves using multiple control strategies to manage pests while minimizing environmental impact.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h6',
      question: 'How does processing affect the value addition of industrial crops?',
      options: ['Transforms raw materials into higher-value products', 'Reduces crop value', 'Has no effect on value', 'Only changes appearance'],
      correct: 'Transforms raw materials into higher-value products',
      explanation: 'Processing adds value by converting raw industrial crops into finished products with higher market prices.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h7',
      question: 'What role does mechanization play in industrial crop production?',
      options: ['Increases efficiency and reduces labor costs', 'Only increases costs', 'Reduces crop quality', 'Has no significant impact'],
      correct: 'Increases efficiency and reduces labor costs',
      explanation: 'Mechanization improves operational efficiency, reduces labor requirements, and enables timely field operations.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h8',
      question: 'How do climate conditions affect industrial crop quality?',
      options: ['Temperature and humidity during growth and harvest affect final product quality', 'Climate has no effect on quality', 'Only rainfall affects quality', 'Only temperature affects quality'],
      correct: 'Temperature and humidity during growth and harvest affect final product quality',
      explanation: 'Climate conditions throughout the growing season and at harvest significantly influence the quality characteristics of industrial crops.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h9',
      question: 'What is contract farming and how does it benefit industrial crop production?',
      options: ['Predetermined agreements ensuring market access and price stability', 'Farming without contracts', 'Only large-scale farming', 'Government-controlled farming'],
      correct: 'Predetermined agreements ensuring market access and price stability',
      explanation: 'Contract farming provides farmers with guaranteed markets and processors with reliable supply of quality raw materials.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h10',
      question: 'How does post-harvest handling affect industrial crop quality?',
      options: ['Proper handling maintains quality required for processing', 'Post-harvest handling is not important', 'Only affects appearance', 'Only affects quantity'],
      correct: 'Proper handling maintains quality required for processing',
      explanation: 'Appropriate post-harvest handling preserves the quality characteristics essential for industrial processing and market value.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 4: Introduction to Farm Animals': [
    // Easy Questions
    {
      id: 'agr11_animals_e1',
      question: 'What are farm animals?',
      options: ['Domesticated animals raised for agricultural purposes', 'Wild animals', 'Pet animals only', 'Zoo animals'],
      correct: 'Domesticated animals raised for agricultural purposes',
      explanation: 'Farm animals are domesticated animals raised specifically for agricultural production including meat, milk, eggs, and other products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e2',
      question: 'Which of these is a farm animal?',
      options: ['Cow', 'Lion', 'Elephant', 'Tiger'],
      correct: 'Cow',
      explanation: 'Cows are domesticated animals commonly raised on farms for milk and meat production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e3',
      question: 'What do cattle produce?',
      options: ['Milk and meat', 'Only milk', 'Only meat', 'Eggs'],
      correct: 'Milk and meat',
      explanation: 'Cattle are raised for both milk production (dairy cattle) and meat production (beef cattle).',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e4',
      question: 'Which animal produces eggs?',
      options: ['Chicken', 'Cow', 'Sheep', 'Goat'],
      correct: 'Chicken',
      explanation: 'Chickens are the primary source of eggs in agricultural production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e5',
      question: 'What is animal husbandry?',
      options: ['The care and management of farm animals', 'Building animal shelters', 'Buying animals', 'Selling animals'],
      correct: 'The care and management of farm animals',
      explanation: 'Animal husbandry involves the breeding, feeding, and general care of domestic animals.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e6',
      question: 'Which animal is known for producing wool?',
      options: ['Sheep', 'Chicken', 'Pig', 'Cow'],
      correct: 'Sheep',
      explanation: 'Sheep are raised for their wool, which is used to make clothing and textiles.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e7',
      question: 'What is the main purpose of raising pigs?',
      options: ['Meat production', 'Milk production', 'Egg production', 'Wool production'],
      correct: 'Meat production',
      explanation: 'Pigs are primarily raised for pork production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e8',
      question: 'Which animal is smallest among common farm animals?',
      options: ['Chicken', 'Cow', 'Horse', 'Sheep'],
      correct: 'Chicken',
      explanation: 'Chickens are typically the smallest among common farm animals.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e9',
      question: 'What do goats provide?',
      options: ['Milk, meat, and hide', 'Only milk', 'Only meat', 'Only hide'],
      correct: 'Milk, meat, and hide',
      explanation: 'Goats are versatile animals that provide milk, meat, and hides for various uses.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e10',
      question: 'Which animal is used for transportation in some areas?',
      options: ['Horse', 'Chicken', 'Pig', 'Rabbit'],
      correct: 'Horse',
      explanation: 'Horses have been traditionally used for transportation and are still used in some agricultural areas.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_animals_m1',
      question: 'Which animals are commonly raised in Ethiopian agriculture?',
      options: ['Cattle, sheep, goats, and chickens', 'Only cattle', 'Only chickens', 'Tigers and lions'],
      correct: 'Cattle, sheep, goats, and chickens',
      explanation: 'Ethiopia has diverse livestock including cattle, sheep, goats, chickens, and other animals that contribute significantly to agriculture.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m2',
      question: 'What is the difference between ruminants and non-ruminants?',
      options: ['Ruminants have multi-chambered stomachs, non-ruminants have simple stomachs', 'No difference', 'Ruminants are bigger', 'Non-ruminants eat more'],
      correct: 'Ruminants have multi-chambered stomachs, non-ruminants have simple stomachs',
      explanation: 'Ruminants like cattle and sheep have complex, multi-chambered stomachs that allow them to digest fibrous plant material.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m3',
      question: 'What is selective breeding in animals?',
      options: ['Choosing animals with desirable traits for reproduction', 'Random breeding', 'Breeding only one type of animal', 'Avoiding breeding'],
      correct: 'Choosing animals with desirable traits for reproduction',
      explanation: 'Selective breeding involves choosing parent animals with desired characteristics to improve offspring quality.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m4',
      question: 'Which animals are considered monogastric?',
      options: ['Pigs and chickens', 'Cattle and sheep', 'Goats and cattle', 'Sheep and chickens'],
      correct: 'Pigs and chickens',
      explanation: 'Monogastric animals like pigs and chickens have single-chambered stomachs similar to humans.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m5',
      question: 'What is the gestation period of cattle?',
      options: ['About 9 months', 'About 3 months', 'About 12 months', 'About 6 months'],
      correct: 'About 9 months',
      explanation: 'Cattle have a gestation period of approximately 9 months (280 days).',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m6',
      question: 'What is the main difference between dairy and beef cattle?',
      options: ['Dairy cattle are bred for milk production, beef cattle for meat', 'No difference', 'Dairy cattle are smaller', 'Beef cattle produce more milk'],
      correct: 'Dairy cattle are bred for milk production, beef cattle for meat',
      explanation: 'Dairy cattle are selected for high milk production, while beef cattle are bred for meat quality and quantity.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m7',
      question: 'What is animal welfare?',
      options: ['Ensuring animals are healthy, comfortable, and free from distress', 'Only providing food', 'Only providing shelter', 'Only providing water'],
      correct: 'Ensuring animals are healthy, comfortable, and free from distress',
      explanation: 'Animal welfare encompasses the physical and mental well-being of animals in human care.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m8',
      question: 'Which factor is most important for animal reproduction?',
      options: ['Proper nutrition and health management', 'Only good shelter', 'Only clean water', 'Only adequate space'],
      correct: 'Proper nutrition and health management',
      explanation: 'Adequate nutrition and health care are essential for successful animal reproduction.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m9',
      question: 'What is the purpose of animal identification?',
      options: ['Track individual animals for health and production records', 'Make animals look different', 'Prevent theft only', 'For decoration'],
      correct: 'Track individual animals for health and production records',
      explanation: 'Animal identification helps farmers track health, breeding, and production records of individual animals.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m10',
      question: 'What is the lactation period in dairy cows?',
      options: ['About 10 months', 'About 3 months', 'About 24 months', 'About 1 month'],
      correct: 'About 10 months',
      explanation: 'Dairy cows typically lactate for about 10 months after giving birth.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_animals_h1',
      question: 'What is the importance of livestock in mixed farming systems?',
      options: ['Provides manure, income diversification, and soil fertility', 'Only for meat production', 'Only for transportation', 'Only for companionship'],
      correct: 'Provides manure, income diversification, and soil fertility',
      explanation: 'In mixed farming systems, livestock provides multiple benefits including organic manure for crops, income diversification, and improved soil fertility through integrated management.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h2',
      question: 'How does genetic diversity affect livestock production?',
      options: ['Maintains breed resilience and adaptation to environmental changes', 'Has no effect', 'Only affects appearance', 'Reduces production'],
      correct: 'Maintains breed resilience and adaptation to environmental changes',
      explanation: 'Genetic diversity ensures livestock populations can adapt to changing environmental conditions and resist diseases.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h3',
      question: 'What is the role of indigenous livestock breeds in sustainable agriculture?',
      options: ['Adapted to local conditions with low input requirements', 'Only for traditional purposes', 'Less productive than exotic breeds', 'Difficult to manage'],
      correct: 'Adapted to local conditions with low input requirements',
      explanation: 'Indigenous breeds are naturally adapted to local climates and conditions, requiring fewer external inputs.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h4',
      question: 'How does livestock contribute to food security?',
      options: ['Provides protein, micronutrients, and income for food purchase', 'Only provides meat', 'Reduces food security', 'Only provides income'],
      correct: 'Provides protein, micronutrients, and income for food purchase',
      explanation: 'Livestock contributes to food security through direct food production and income generation for purchasing other foods.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h5',
      question: 'What is the concept of carbon footprint in livestock production?',
      options: ['Greenhouse gas emissions from animal agriculture', 'Animal footprint size', 'Cost of production', 'Land area used'],
      correct: 'Greenhouse gas emissions from animal agriculture',
      explanation: 'Carbon footprint measures the total greenhouse gas emissions associated with livestock production.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h6',
      question: 'How does stress affect animal productivity?',
      options: ['Reduces growth, reproduction, and immune function', 'Improves productivity', 'Has no effect', 'Only affects behavior'],
      correct: 'Reduces growth, reproduction, and immune function',
      explanation: 'Stress negatively impacts animal health and productivity by suppressing immune function and reducing growth rates.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h7',
      question: 'What is the relationship between animal nutrition and environmental impact?',
      options: ['Efficient nutrition reduces waste and environmental pollution', 'No relationship', 'Better nutrition increases pollution', 'Only affects animal health'],
      correct: 'Efficient nutrition reduces waste and environmental pollution',
      explanation: 'Proper nutrition improves feed efficiency and reduces nutrient excretion, minimizing environmental impact.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h8',
      question: 'How does climate change affect livestock production?',
      options: ['Alters temperature, rainfall patterns, and disease pressure', 'Has no effect', 'Only affects temperature', 'Only affects rainfall'],
      correct: 'Alters temperature, rainfall patterns, and disease pressure',
      explanation: 'Climate change affects livestock through heat stress, altered feed availability, and changing disease patterns.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h9',
      question: 'What is precision livestock farming?',
      options: ['Using technology to monitor and manage individual animals', 'Traditional farming methods', 'Large-scale farming only', 'Manual record keeping'],
      correct: 'Using technology to monitor and manage individual animals',
      explanation: 'Precision livestock farming uses sensors and data analytics to monitor individual animal health and productivity.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h10',
      question: 'How does livestock production integrate with crop production in sustainable systems?',
      options: ['Animals provide manure while crops provide feed, creating nutrient cycling', 'They compete for resources', 'No integration possible', 'Only through separate management'],
      correct: 'Animals provide manure while crops provide feed, creating nutrient cycling',
      explanation: 'Integrated systems create synergies where livestock manure fertilizes crops, and crop residues feed animals.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 5: Animal Feeds and Feeding Practices': [
    // Easy Questions
    {
      id: 'agr11_feeds_e1',
      question: 'What is animal feed?',
      options: ['Food given to animals for nutrition', 'Water for animals', 'Medicine for animals', 'Shelter for animals'],
      correct: 'Food given to animals for nutrition',
      explanation: 'Animal feed is any nutritious substance provided to animals to meet their dietary requirements for growth, maintenance, and production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e2',
      question: 'Which of these is a common animal feed?',
      options: ['Grass', 'Stones', 'Plastic', 'Metal'],
      correct: 'Grass',
      explanation: 'Grass is a natural feed that provides nutrients for grazing animals.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e3',
      question: 'What do animals need from their feed?',
      options: ['Energy, protein, vitamins, and minerals', 'Only energy', 'Only protein', 'Only water'],
      correct: 'Energy, protein, vitamins, and minerals',
      explanation: 'Animals require a balanced diet containing energy, protein, vitamins, minerals, and water for optimal health and production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e4',
      question: 'Which animal eats grass?',
      options: ['Cow', 'Dog', 'Cat', 'Fish'],
      correct: 'Cow',
      explanation: 'Cows are herbivores that primarily eat grass and other plant materials.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e5',
      question: 'What is grazing?',
      options: ['Animals eating grass in the field', 'Animals sleeping', 'Animals drinking water', 'Animals playing'],
      correct: 'Animals eating grass in the field',
      explanation: 'Grazing is when animals feed on grass and other plants directly in pastures or fields.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e6',
      question: 'Which grain is commonly fed to chickens?',
      options: ['Maize', 'Stones', 'Leaves', 'Bark'],
      correct: 'Maize',
      explanation: 'Maize (corn) is a common grain feed for chickens, providing energy and some protein.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e7',
      question: 'What is hay?',
      options: ['Dried grass used as animal feed', 'Fresh grass', 'Animal medicine', 'Building material'],
      correct: 'Dried grass used as animal feed',
      explanation: 'Hay is grass that has been cut and dried for preservation and later use as animal feed.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e8',
      question: 'Why do animals need clean water?',
      options: ['For digestion and body functions', 'Only for drinking', 'Only for cooling', 'Only for cleaning'],
      correct: 'For digestion and body functions',
      explanation: 'Clean water is essential for digestion, nutrient transport, temperature regulation, and all body functions.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e9',
      question: 'Which feed is high in protein?',
      options: ['Legumes', 'Straw', 'Sand', 'Wood'],
      correct: 'Legumes',
      explanation: 'Legumes like beans and peas are high in protein and are valuable feed sources.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e10',
      question: 'What happens if animals don\'t get enough food?',
      options: ['They become weak and sick', 'They become stronger', 'Nothing happens', 'They grow faster'],
      correct: 'They become weak and sick',
      explanation: 'Insufficient food leads to malnutrition, weakness, poor health, and reduced productivity.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_feeds_m1',
      question: 'What are the main types of animal feeds?',
      options: ['Roughages, concentrates, and supplements', 'Only grass', 'Only grain', 'Only water'],
      correct: 'Roughages, concentrates, and supplements',
      explanation: 'Animal feeds are classified into roughages (high fiber feeds like hay), concentrates (high energy feeds like grains), and supplements (vitamins and minerals).',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m2',
      question: 'What is the difference between roughages and concentrates?',
      options: ['Roughages are high in fiber, concentrates are high in energy', 'No difference', 'Roughages are more expensive', 'Concentrates have more water'],
      correct: 'Roughages are high in fiber, concentrates are high in energy',
      explanation: 'Roughages like hay and straw are high in fiber and low in energy, while concentrates like grains are high in energy and low in fiber.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m3',
      question: 'Which animals require more concentrates in their diet?',
      options: ['High-producing animals like dairy cows', 'Animals that only graze', 'Old animals', 'Young animals only'],
      correct: 'High-producing animals like dairy cows',
      explanation: 'High-producing animals like dairy cows need energy-dense concentrates to meet their increased nutritional requirements.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m4',
      question: 'What is silage?',
      options: ['Fermented feed preserved in anaerobic conditions', 'Dried feed', 'Fresh feed', 'Cooked feed'],
      correct: 'Fermented feed preserved in anaerobic conditions',
      explanation: 'Silage is feed that has been fermented and stored in oxygen-free conditions to preserve nutrients.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m5',
      question: 'Why is feed storage important?',
      options: ['To preserve nutritional value and prevent spoilage', 'To save space only', 'To make feed look better', 'To reduce costs only'],
      correct: 'To preserve nutritional value and prevent spoilage',
      explanation: 'Proper feed storage maintains nutritional quality and prevents contamination and spoilage.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m6',
      question: 'What is a feed ration?',
      options: ['The amount and type of feed given to an animal per day', 'Any feed given to animals', 'Feed given once a week', 'Feed given randomly'],
      correct: 'The amount and type of feed given to an animal per day',
      explanation: 'A feed ration is the planned combination and quantity of feeds provided to meet an animal\'s daily nutritional needs.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m7',
      question: 'Which vitamin is produced by ruminants through microbial synthesis?',
      options: ['Vitamin B12', 'Vitamin A', 'Vitamin C', 'Vitamin D'],
      correct: 'Vitamin B12',
      explanation: 'Ruminants can synthesize vitamin B12 through microbial fermentation in their rumen.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m8',
      question: 'What is the purpose of feed additives?',
      options: ['To improve feed quality and animal performance', 'To change feed color', 'To reduce feed costs', 'To increase feed volume'],
      correct: 'To improve feed quality and animal performance',
      explanation: 'Feed additives are substances added to feeds to enhance nutritional value, preserve quality, or improve animal health.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m9',
      question: 'Which mineral is essential for bone formation?',
      options: ['Calcium', 'Iron', 'Copper', 'Zinc'],
      correct: 'Calcium',
      explanation: 'Calcium is crucial for bone and teeth formation, muscle function, and other physiological processes.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m10',
      question: 'What is the function of fiber in ruminant diets?',
      options: ['Maintains rumen health and stimulates chewing', 'Provides energy only', 'Provides protein only', 'Provides vitamins only'],
      correct: 'Maintains rumen health and stimulates chewing',
      explanation: 'Fiber is essential for proper rumen function, stimulates saliva production, and maintains digestive health.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_feeds_h1',
      question: 'How does balanced nutrition affect animal productivity?',
      options: ['Improves growth, reproduction, and disease resistance', 'Only affects growth', 'Has no effect', 'Only affects appetite'],
      correct: 'Improves growth, reproduction, and disease resistance',
      explanation: 'Balanced nutrition is crucial for optimal animal performance, affecting growth rates, reproductive efficiency, milk production, and immune system function.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h2',
      question: 'What is the concept of feed conversion efficiency?',
      options: ['Amount of feed required to produce a unit of animal product', 'Speed of feeding', 'Cost of feed', 'Quality of feed'],
      correct: 'Amount of feed required to produce a unit of animal product',
      explanation: 'Feed conversion efficiency measures how effectively animals convert feed into products like meat, milk, or eggs.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h3',
      question: 'How does rumen microbiology affect feed utilization?',
      options: ['Microbes break down fiber and synthesize nutrients', 'Microbes reduce feed quality', 'Microbes have no effect', 'Microbes only cause disease'],
      correct: 'Microbes break down fiber and synthesize nutrients',
      explanation: 'Rumen microorganisms ferment fiber and synthesize amino acids and vitamins, enabling ruminants to utilize fibrous feeds.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h4',
      question: 'What is the relationship between feed protein quality and amino acid profile?',
      options: ['Protein quality depends on essential amino acid composition', 'All proteins have the same quality', 'Protein quality depends only on quantity', 'Amino acids are not related to protein quality'],
      correct: 'Protein quality depends on essential amino acid composition',
      explanation: 'Protein quality is determined by the availability and balance of essential amino acids that animals cannot synthesize.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h5',
      question: 'How does feed processing affect nutritional value?',
      options: ['Can improve digestibility but may reduce some nutrients', 'Always improves nutritional value', 'Always reduces nutritional value', 'Has no effect on nutrition'],
      correct: 'Can improve digestibility but may reduce some nutrients',
      explanation: 'Feed processing can enhance digestibility and availability of nutrients but may also destroy heat-sensitive vitamins.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h6',
      question: 'What is the role of anti-nutritional factors in feed?',
      options: ['Compounds that reduce nutrient availability or cause toxicity', 'Compounds that improve nutrition', 'Compounds that add flavor', 'Compounds that preserve feed'],
      correct: 'Compounds that reduce nutrient availability or cause toxicity',
      explanation: 'Anti-nutritional factors are natural or artificial compounds that interfere with nutrient utilization or cause harmful effects.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h7',
      question: 'How does body condition scoring relate to feeding management?',
      options: ['Assesses energy reserves to adjust feeding programs', 'Only measures animal weight', 'Determines feed costs', 'Measures feed intake'],
      correct: 'Assesses energy reserves to adjust feeding programs',
      explanation: 'Body condition scoring evaluates energy reserves to determine if animals are receiving adequate nutrition.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h8',
      question: 'What is the significance of metabolizable energy in feed formulation?',
      options: ['Energy available for productive functions after digestion and metabolism', 'Total energy in feed', 'Energy lost in feces', 'Energy used for maintenance only'],
      correct: 'Energy available for productive functions after digestion and metabolism',
      explanation: 'Metabolizable energy represents the energy available for maintenance, growth, and production after accounting for losses.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h9',
      question: 'How does feed particle size affect ruminant digestion?',
      options: ['Affects rumen pH, microbial activity, and passage rate', 'Has no effect on digestion', 'Only affects feed intake', 'Only affects feed storage'],
      correct: 'Affects rumen pH, microbial activity, and passage rate',
      explanation: 'Feed particle size influences rumen fermentation patterns, pH stability, and the rate of passage through the digestive system.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h10',
      question: 'What is precision feeding in livestock nutrition?',
      options: ['Tailoring feed formulations to individual animal requirements', 'Feeding at precise times', 'Using expensive feeds', 'Feeding in small quantities'],
      correct: 'Tailoring feed formulations to individual animal requirements',
      explanation: 'Precision feeding involves customizing diets based on individual animal needs, production stage, and performance goals.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 6: Animal Genetics and Breeding Practices': [
    // Easy Questions
    {
      id: 'agr11_genetics_e1',
      question: 'What is genetics?',
      options: ['The study of heredity and variation', 'The study of animal behavior', 'The study of animal nutrition', 'The study of soil science'],
      correct: 'The study of heredity and variation',
      explanation: 'Genetics is the branch of biology that studies how traits are passed from parents to offspring.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_genetics_e2',
      question: 'What is a gene?',
      options: ['A unit of heredity on a chromosome', 'A type of animal feed', 'A breeding tool', 'A type of cell'],
      correct: 'A unit of heredity on a chromosome',
      explanation: 'Genes are segments of DNA that carry instructions for specific traits.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_genetics_e3',
      question: 'What is breeding in animal production?',
      options: ['Mating selected animals to improve offspring', 'Feeding animals properly', 'Housing animals together', 'Treating animal diseases'],
      correct: 'Mating selected animals to improve offspring',
      explanation: 'Breeding involves selecting and mating animals with desirable traits to produce improved offspring.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_genetics_e4',
      question: 'What does "offspring" mean?',
      options: ['The young produced by animals', 'Adult animals', 'Animal feed', 'A type of breed'],
      correct: 'The young produced by animals',
      explanation: 'Offspring are the young animals produced as a result of reproduction.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_genetics_e5',
      question: 'What is a breed?',
      options: ['A group of animals with similar characteristics', 'Any group of animals', 'A single animal', 'A type of farm'],
      correct: 'A group of animals with similar characteristics',
      explanation: 'A breed is a group of animals within a species that share distinctive inherited characteristics.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_genetics_e6',
      question: 'What is natural mating?',
      options: ['Allowing animals to breed naturally', 'Artificial insemination', 'Feeding animals together', 'Keeping animals in groups'],
      correct: 'Allowing animals to breed naturally',
      explanation: 'Natural mating is the process where male and female animals breed without human intervention.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_genetics_e7',
      question: 'Which trait can be inherited by offspring?',
      options: ['Body color', 'Name of the animal', 'Location of the farm', 'Owner of the animal'],
      correct: 'Body color',
      explanation: 'Physical traits like body color are genetically inherited from parents.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_genetics_e8',
      question: 'What is a purebred animal?',
      options: ['An animal from parents of the same breed', 'Any farm animal', 'A wild animal', 'A crossbred animal'],
      correct: 'An animal from parents of the same breed',
      explanation: 'Purebred animals come from parents that belong to the same breed.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_genetics_e9',
      question: 'What is crossbreeding?',
      options: ['Mating animals of different breeds', 'Mating animals of the same breed', 'Feeding different animals together', 'Keeping animals apart'],
      correct: 'Mating animals of different breeds',
      explanation: 'Crossbreeding involves mating animals from two different breeds to combine desirable traits.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_genetics_e10',
      question: 'Why do farmers select animals for breeding?',
      options: ['To improve the quality of offspring', 'To reduce animal numbers', 'To save feed costs', 'To keep animals busy'],
      correct: 'To improve the quality of offspring',
      explanation: 'Farmers select the best animals for breeding to produce offspring with improved traits.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_genetics_m1',
      question: 'What is artificial insemination (AI)?',
      options: ['Introducing semen into a female animal artificially', 'Natural mating', 'Feeding animals artificially', 'Cloning animals'],
      correct: 'Introducing semen into a female animal artificially',
      explanation: 'AI is a reproductive technique where semen is collected from a male and placed into a female\'s reproductive tract.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_genetics_m2',
      question: 'What is the advantage of artificial insemination over natural mating?',
      options: ['Allows use of superior sires for many females', 'It is cheaper', 'It requires no skill', 'It always produces twins'],
      correct: 'Allows use of superior sires for many females',
      explanation: 'AI allows one superior male to breed many females, spreading good genetics widely.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_genetics_m3',
      question: 'What is hybrid vigor (heterosis)?',
      options: ['Improved performance of crossbred offspring', 'Weakness in crossbred animals', 'A disease in animals', 'A type of feed'],
      correct: 'Improved performance of crossbred offspring',
      explanation: 'Hybrid vigor occurs when crossbred animals perform better than the average of their parents.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_genetics_m4',
      question: 'What is selection in animal breeding?',
      options: ['Choosing the best animals as parents for the next generation', 'Randomly picking animals', 'Removing sick animals', 'Counting animals'],
      correct: 'Choosing the best animals as parents for the next generation',
      explanation: 'Selection involves identifying and choosing animals with superior traits for breeding.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_genetics_m5',
      question: 'What are dominant and recessive traits?',
      options: ['Dominant traits are expressed over recessive ones', 'They are the same', 'Recessive traits are always expressed', 'Dominant traits are rare'],
      correct: 'Dominant traits are expressed over recessive ones',
      explanation: 'Dominant traits mask recessive traits when both are present in an organism.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_genetics_m6',
      question: 'What is inbreeding?',
      options: ['Mating closely related animals', 'Mating unrelated animals', 'Crossbreeding', 'Natural selection'],
      correct: 'Mating closely related animals',
      explanation: 'Inbreeding involves mating animals that are closely related, such as siblings or parent-offspring.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_genetics_m7',
      question: 'What is the main risk of inbreeding?',
      options: ['Increased expression of harmful recessive traits', 'Improved growth rate', 'Better disease resistance', 'Higher milk production'],
      correct: 'Increased expression of harmful recessive traits',
      explanation: 'Inbreeding increases the chance that offspring inherit two copies of harmful recessive genes.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_genetics_m8',
      question: 'What is a phenotype?',
      options: ['The observable physical characteristics of an animal', 'The genetic makeup of an animal', 'The diet of an animal', 'The age of an animal'],
      correct: 'The observable physical characteristics of an animal',
      explanation: 'Phenotype refers to the visible traits of an organism resulting from gene-environment interaction.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_genetics_m9',
      question: 'What is a genotype?',
      options: ['The genetic makeup of an organism', 'The physical appearance', 'The environment', 'The feed type'],
      correct: 'The genetic makeup of an organism',
      explanation: 'Genotype is the complete set of genes an organism carries.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_genetics_m10',
      question: 'Why is record keeping important in animal breeding?',
      options: ['To track parentage, performance, and genetic progress', 'To count animals only', 'For decoration', 'To satisfy regulations only'],
      correct: 'To track parentage, performance, and genetic progress',
      explanation: 'Breeding records help farmers make informed selection decisions and track genetic improvement.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_genetics_h1',
      question: 'What is genomic selection in modern animal breeding?',
      options: ['Using DNA markers to predict breeding value', 'Selecting animals by appearance only', 'Random mating', 'Selecting the largest animals'],
      correct: 'Using DNA markers to predict breeding value',
      explanation: 'Genomic selection uses DNA information to predict an animal\'s genetic merit more accurately than traditional methods.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_genetics_h2',
      question: 'What is the difference between qualitative and quantitative traits?',
      options: ['Qualitative traits are discrete categories, quantitative are continuous and measurable', 'They are the same', 'Qualitative traits are more important', 'Quantitative traits cannot be measured'],
      correct: 'Qualitative traits are discrete categories, quantitative are continuous and measurable',
      explanation: 'Qualitative traits like color fall into categories, while quantitative traits like milk yield vary along a continuous scale.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_genetics_h3',
      question: 'What is heritability and why is it important in breeding?',
      options: ['The proportion of variation due to genetics; determines response to selection', 'The number of offspring produced', 'The age at which animals breed', 'The cost of breeding'],
      correct: 'The proportion of variation due to genetics; determines response to selection',
      explanation: 'Heritability indicates how much of the variation in a trait is due to genetics, guiding breeding decisions.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_genetics_h4',
      question: 'What is embryo transfer technology?',
      options: ['Collecting embryos from superior females and implanting in surrogates', 'Transferring feed between animals', 'Moving animals between farms', 'A vaccination technique'],
      correct: 'Collecting embryos from superior females and implanting in surrogates',
      explanation: 'Embryo transfer allows superior females to produce many more offspring through surrogate mothers.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_genetics_h5',
      question: 'How does genetic drift affect small livestock populations?',
      options: ['Random changes in gene frequency leading to loss of genetic diversity', 'Improved productivity', 'No effect', 'Increased disease resistance'],
      correct: 'Random changes in gene frequency leading to loss of genetic diversity',
      explanation: 'In small populations, random events can cause significant changes in genetic composition over generations.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_genetics_h6',
      question: 'What is progeny testing?',
      options: ['Evaluating a parent animal based on offspring performance', 'Testing animal feed', 'Counting offspring', 'Testing for diseases'],
      correct: 'Evaluating a parent animal based on offspring performance',
      explanation: 'Progeny testing assesses the breeding value of a parent by measuring the performance of its offspring.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_genetics_h7',
      question: 'What is the role of marker-assisted selection (MAS) in breeding programs?',
      options: ['Using genetic markers linked to desirable traits for faster selection', 'Marking animals with paint', 'Selecting animals by ear tags', 'Random selection'],
      correct: 'Using genetic markers linked to desirable traits for faster selection',
      explanation: 'MAS uses DNA markers associated with important traits to select animals at a young age.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_genetics_h8',
      question: 'What is inbreeding depression?',
      options: ['Reduced fitness and performance due to inbreeding', 'Improved performance from inbreeding', 'A type of animal disease', 'Loss of appetite'],
      correct: 'Reduced fitness and performance due to inbreeding',
      explanation: 'Inbreeding depression results in reduced reproductive fitness, growth, and survival in inbred populations.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_genetics_h9',
      question: 'How do breeding objectives differ between subsistence and commercial farming?',
      options: ['Subsistence focuses on adaptability, commercial on maximizing production', 'No difference', 'Subsistence focuses on production only', 'Commercial ignores genetics'],
      correct: 'Subsistence focuses on adaptability, commercial on maximizing production',
      explanation: 'Subsistence farmers prioritize hardiness and adaptability, while commercial operations focus on maximizing output.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_genetics_h10',
      question: 'What is the significance of conservation of indigenous animal genetic resources?',
      options: ['Preserves unique adaptations and genetic diversity for future needs', 'Has no importance', 'Only for museums', 'Reduces farming costs'],
      correct: 'Preserves unique adaptations and genetic diversity for future needs',
      explanation: 'Indigenous breeds carry unique genes for disease resistance and adaptation that may be crucial for future challenges.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 7: Farm Animals Housing': [
    // Easy Questions
    {
      id: 'agr11_housing_e1',
      question: 'Why do farm animals need housing?',
      options: ['To protect them from weather and predators', 'For decoration', 'To hide them', 'To make them sleep all day'],
      correct: 'To protect them from weather and predators',
      explanation: 'Animal housing provides shelter from extreme weather conditions and protection from predators.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_housing_e2',
      question: 'What material is commonly used for building animal shelters?',
      options: ['Wood and corrugated iron sheets', 'Glass only', 'Paper', 'Plastic bags'],
      correct: 'Wood and corrugated iron sheets',
      explanation: 'Wood and corrugated iron are affordable and durable materials commonly used for farm animal shelters.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_housing_e3',
      question: 'What is a poultry house?',
      options: ['A shelter designed for chickens and other birds', 'A house for cattle', 'A pig pen', 'A storage room'],
      correct: 'A shelter designed for chickens and other birds',
      explanation: 'A poultry house is specifically designed to house chickens, ducks, or other poultry birds.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_housing_e4',
      question: 'Why is ventilation important in animal housing?',
      options: ['To provide fresh air and remove harmful gases', 'To make buildings look nice', 'To reduce construction costs', 'It is not important'],
      correct: 'To provide fresh air and remove harmful gases',
      explanation: 'Good ventilation ensures fresh air circulation and removes ammonia and other harmful gases.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_housing_e5',
      question: 'What is bedding in animal housing?',
      options: ['Material placed on the floor for animal comfort', 'Animal feed', 'A type of roof', 'A wall material'],
      correct: 'Material placed on the floor for animal comfort',
      explanation: 'Bedding materials like straw provide comfort, warmth, and absorb moisture in animal housing.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_housing_e6',
      question: 'Which animal typically needs a barn?',
      options: ['Cattle', 'Fish', 'Bees', 'Silkworms'],
      correct: 'Cattle',
      explanation: 'Barns are large structures commonly used to house cattle and store feed.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_housing_e7',
      question: 'What is a pig pen?',
      options: ['An enclosed area for keeping pigs', 'A writing tool', 'A chicken house', 'A cattle barn'],
      correct: 'An enclosed area for keeping pigs',
      explanation: 'A pig pen (or pigsty) is a fenced or enclosed area designed to house pigs.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_housing_e8',
      question: 'Why should animal houses be kept clean?',
      options: ['To prevent disease and maintain animal health', 'To look attractive', 'Animals prefer clean spaces only', 'It saves feed'],
      correct: 'To prevent disease and maintain animal health',
      explanation: 'Clean housing reduces disease-causing organisms and promotes better animal health.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_housing_e9',
      question: 'What should animal housing protect against?',
      options: ['Rain, wind, extreme heat, and cold', 'Only rain', 'Only wind', 'Nothing specific'],
      correct: 'Rain, wind, extreme heat, and cold',
      explanation: 'Good animal housing protects against all adverse weather conditions.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_housing_e10',
      question: 'Where should an animal house be located?',
      options: ['On well-drained elevated ground', 'In a swampy area', 'In a flood zone', 'Underground'],
      correct: 'On well-drained elevated ground',
      explanation: 'Animal houses should be on elevated, well-drained sites to prevent waterlogging and flooding.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_housing_m1',
      question: 'What is the recommended floor space per dairy cow in a barn?',
      options: ['About 5-6 square meters', 'About 1 square meter', 'About 20 square meters', 'About 0.5 square meters'],
      correct: 'About 5-6 square meters',
      explanation: 'Dairy cows require approximately 5-6 square meters of floor space for comfort and productivity.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_housing_m2',
      question: 'What is the deep litter system in poultry housing?',
      options: ['Allowing litter material to accumulate on the floor over time', 'Removing litter daily', 'Using no litter', 'Using only sand'],
      correct: 'Allowing litter material to accumulate on the floor over time',
      explanation: 'The deep litter system allows bedding to build up, generating heat through decomposition.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_housing_m3',
      question: 'What type of flooring is best for cattle housing?',
      options: ['Concrete with a rough surface for grip', 'Smooth glass', 'Bare earth only', 'Metal sheets'],
      correct: 'Concrete with a rough surface for grip',
      explanation: 'Rough concrete flooring provides durability, easy cleaning, and prevents animals from slipping.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_housing_m4',
      question: 'What is a free-range housing system?',
      options: ['Animals have access to outdoor areas during the day', 'Animals are always confined', 'Animals are tied individually', 'Animals live underground'],
      correct: 'Animals have access to outdoor areas during the day',
      explanation: 'Free-range systems allow animals to roam outdoors, promoting natural behaviors and exercise.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_housing_m5',
      question: 'Why is proper drainage important in animal housing?',
      options: ['To remove waste water and prevent disease', 'For aesthetic purposes', 'To increase building costs', 'It is not important'],
      correct: 'To remove waste water and prevent disease',
      explanation: 'Proper drainage removes urine and wash water, preventing dampness and disease-causing conditions.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_housing_m6',
      question: 'What is the battery cage system in poultry?',
      options: ['Small individual cages arranged in rows for laying hens', 'Free-range system', 'Large open barn', 'Outdoor grazing'],
      correct: 'Small individual cages arranged in rows for laying hens',
      explanation: 'Battery cages house individual hens in small wire cages stacked in rows for intensive egg production.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_housing_m7',
      question: 'What is the ideal orientation of animal houses in tropical regions?',
      options: ['East-west to minimize direct sunlight on walls', 'North-south', 'Any direction', 'Diagonal'],
      correct: 'East-west to minimize direct sunlight on walls',
      explanation: 'East-west orientation reduces heat buildup by minimizing sun exposure on the long sides of the building.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_housing_m8',
      question: 'What is a feed trough?',
      options: ['A container for providing feed to animals', 'A drainage channel', 'A type of fence', 'A water tank'],
      correct: 'A container for providing feed to animals',
      explanation: 'Feed troughs are containers placed in animal housing for efficient feed delivery.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_housing_m9',
      question: 'What factors should be considered when designing animal housing?',
      options: ['Climate, animal type, number of animals, and available resources', 'Only cost', 'Only appearance', 'Only location'],
      correct: 'Climate, animal type, number of animals, and available resources',
      explanation: 'Housing design must consider multiple factors to meet the specific needs of the animals and local conditions.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_housing_m10',
      question: 'What is the purpose of a milking parlor?',
      options: ['A dedicated area designed for milking dairy cows efficiently', 'A storage room', 'An animal clinic', 'A feed storage area'],
      correct: 'A dedicated area designed for milking dairy cows efficiently',
      explanation: 'Milking parlors are specially designed facilities that enable efficient and hygienic milking.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_housing_h1',
      question: 'How does housing design affect animal welfare and productivity?',
      options: ['Proper design reduces stress, disease, and improves production efficiency', 'Housing has no effect', 'Only affects appearance', 'Only affects feed consumption'],
      correct: 'Proper design reduces stress, disease, and improves production efficiency',
      explanation: 'Well-designed housing minimizes stress, promotes natural behavior, and creates optimal conditions for production.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_housing_h2',
      question: 'What is the relationship between stocking density and animal performance?',
      options: ['Overcrowding reduces performance through stress and competition', 'Higher density always improves performance', 'Density has no effect', 'Animals prefer overcrowding'],
      correct: 'Overcrowding reduces performance through stress and competition',
      explanation: 'Excessive stocking density leads to stress, increased disease, and reduced feed intake and production.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_housing_h3',
      question: 'How do environmental control systems work in modern livestock housing?',
      options: ['Automated fans, heaters, and sensors regulate temperature and humidity', 'Only opening windows', 'No control is possible', 'Only using paint colors'],
      correct: 'Automated fans, heaters, and sensors regulate temperature and humidity',
      explanation: 'Modern housing uses technology to maintain optimal environmental conditions automatically.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_housing_h4',
      question: 'What is the thermoneutral zone and why is it important in housing design?',
      options: ['Temperature range where animals expend minimal energy for thermoregulation', 'The hottest temperature animals can survive', 'The coldest temperature', 'Room temperature only'],
      correct: 'Temperature range where animals expend minimal energy for thermoregulation',
      explanation: 'Within the thermoneutral zone, animals can maintain body temperature without extra energy expenditure.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_housing_h5',
      question: 'How does ammonia buildup in poorly ventilated housing affect animals?',
      options: ['Causes respiratory problems, eye irritation, and reduced immunity', 'Has no effect', 'Improves growth', 'Only affects smell'],
      correct: 'Causes respiratory problems, eye irritation, and reduced immunity',
      explanation: 'High ammonia levels damage respiratory tissues and suppress immune function in confined animals.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_housing_h6',
      question: 'What are the principles of sustainable animal housing design?',
      options: ['Energy efficiency, waste management, and use of local materials', 'Maximum cost', 'Using only imported materials', 'Ignoring environmental impact'],
      correct: 'Energy efficiency, waste management, and use of local materials',
      explanation: 'Sustainable housing minimizes environmental impact while maintaining animal welfare and productivity.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_housing_h7',
      question: 'How does lighting management affect poultry production?',
      options: ['Photoperiod influences egg production, growth, and behavior', 'Light has no effect', 'Only affects visibility', 'Only affects feed consumption'],
      correct: 'Photoperiod influences egg production, growth, and behavior',
      explanation: 'Light duration and intensity regulate hormones that control egg laying and growth in poultry.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_housing_h8',
      question: 'What is a zero-grazing unit?',
      options: ['A housing system where animals are fully confined and feed is brought to them', 'An empty field', 'A grazing pasture', 'A feed store'],
      correct: 'A housing system where animals are fully confined and feed is brought to them',
      explanation: 'Zero-grazing (cut-and-carry) systems keep animals housed permanently with all feed provided.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_housing_h9',
      question: 'How do biosecurity measures in housing design prevent disease outbreaks?',
      options: ['Controlling access, sanitation protocols, and isolation facilities', 'Only using antibiotics', 'No measures are needed', 'Only vaccination'],
      correct: 'Controlling access, sanitation protocols, and isolation facilities',
      explanation: 'Biosecurity in housing design includes physical barriers, disinfection points, and quarantine areas.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_housing_h10',
      question: 'What is the impact of flooring type on animal health and welfare?',
      options: ['Affects hoof health, comfort, injury rates, and hygiene', 'Only affects appearance', 'Has no impact', 'Only affects cleaning ease'],
      correct: 'Affects hoof health, comfort, injury rates, and hygiene',
      explanation: 'Floor type directly influences lameness, joint health, lying comfort, and overall hygiene.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 8: Basic Animal Health and Disease Control': [
    // Easy Questions
    {
      id: 'agr11_health_e1',
      question: 'What is animal health?',
      options: ['The physical and mental well-being of animals', 'Only the absence of disease', 'The weight of animals', 'The age of animals'],
      correct: 'The physical and mental well-being of animals',
      explanation: 'Animal health encompasses complete physical and mental well-being, not just the absence of disease.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_health_e2',
      question: 'What is a disease?',
      options: ['An abnormal condition that affects body functions', 'Normal growth', 'A type of feed', 'An animal breed'],
      correct: 'An abnormal condition that affects body functions',
      explanation: 'Disease is any abnormal condition that impairs normal body functions and structure.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_health_e3',
      question: 'What is vaccination?',
      options: ['Giving animals a substance to protect against disease', 'Feeding animals vitamins', 'Treating sick animals', 'Cleaning animal houses'],
      correct: 'Giving animals a substance to protect against disease',
      explanation: 'Vaccination introduces a weakened or killed pathogen to stimulate immune protection.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_health_e4',
      question: 'Which of these is a sign of a sick animal?',
      options: ['Loss of appetite and dull coat', 'Active and alert behavior', 'Good appetite', 'Shiny coat'],
      correct: 'Loss of appetite and dull coat',
      explanation: 'Sick animals often show reduced feed intake, dull coats, and lethargy.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_health_e5',
      question: 'What causes infectious diseases?',
      options: ['Bacteria, viruses, and parasites', 'Only poor nutrition', 'Only bad weather', 'Only old age'],
      correct: 'Bacteria, viruses, and parasites',
      explanation: 'Infectious diseases are caused by pathogenic microorganisms like bacteria, viruses, and parasites.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_health_e6',
      question: 'What is a parasite?',
      options: ['An organism that lives on or in another organism and causes harm', 'A type of feed', 'A beneficial organism', 'A farm tool'],
      correct: 'An organism that lives on or in another organism and causes harm',
      explanation: 'Parasites depend on host animals for nutrition, causing damage in the process.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_health_e7',
      question: 'What is deworming?',
      options: ['Treating animals to remove internal parasites', 'Feeding worms to animals', 'Removing external parasites', 'Cleaning the barn'],
      correct: 'Treating animals to remove internal parasites',
      explanation: 'Deworming involves administering anti-parasitic drugs to eliminate internal worms.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_health_e8',
      question: 'What is a veterinarian?',
      options: ['A doctor who treats animals', 'A farmer', 'An animal trader', 'A feed supplier'],
      correct: 'A doctor who treats animals',
      explanation: 'Veterinarians are trained professionals who diagnose and treat animal diseases.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_health_e9',
      question: 'How can diseases spread between animals?',
      options: ['Through direct contact, contaminated water, and air', 'Only through feed', 'Only through water', 'Diseases cannot spread'],
      correct: 'Through direct contact, contaminated water, and air',
      explanation: 'Diseases can spread through multiple routes including contact, water, air, and vectors.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_health_e10',
      question: 'What is quarantine?',
      options: ['Isolating sick or new animals from the herd', 'Mixing sick and healthy animals', 'Selling sick animals', 'Ignoring sick animals'],
      correct: 'Isolating sick or new animals from the herd',
      explanation: 'Quarantine separates potentially infected animals to prevent disease spread.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_health_m1',
      question: 'What is the difference between infectious and non-infectious diseases?',
      options: ['Infectious diseases are caused by pathogens and can spread; non-infectious cannot', 'No difference', 'Non-infectious diseases are more serious', 'Infectious diseases cannot be treated'],
      correct: 'Infectious diseases are caused by pathogens and can spread; non-infectious cannot',
      explanation: 'Infectious diseases are caused by microorganisms and can transmit between animals, unlike non-infectious diseases.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_health_m2',
      question: 'What are ectoparasites?',
      options: ['Parasites that live on the outside of the animal body', 'Internal parasites', 'Beneficial organisms', 'A type of bacteria'],
      correct: 'Parasites that live on the outside of the animal body',
      explanation: 'Ectoparasites like ticks, lice, and fleas live on the skin or fur of animals.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_health_m3',
      question: 'What is a zoonotic disease?',
      options: ['A disease that can transfer between animals and humans', 'A disease only in zoo animals', 'A disease only in wild animals', 'A disease that only affects plants'],
      correct: 'A disease that can transfer between animals and humans',
      explanation: 'Zoonotic diseases can be transmitted from animals to humans, posing public health risks.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_health_m4',
      question: 'What is the role of hygiene in disease prevention?',
      options: ['Reduces pathogen load and breaks disease transmission cycles', 'Has no effect on disease', 'Only makes farms look clean', 'Only required for poultry'],
      correct: 'Reduces pathogen load and breaks disease transmission cycles',
      explanation: 'Good hygiene practices eliminate pathogens and prevent disease spread in animal populations.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_health_m5',
      question: 'What are the common symptoms of foot-and-mouth disease?',
      options: ['Blisters in the mouth and on feet, drooling, and lameness', 'Only coughing', 'Only weight loss', 'No visible symptoms'],
      correct: 'Blisters in the mouth and on feet, drooling, and lameness',
      explanation: 'FMD causes painful blisters on the tongue, gums, and hooves, leading to drooling and difficulty walking.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_health_m6',
      question: 'What is a vaccination schedule?',
      options: ['A planned timeline for administering vaccines at specific ages', 'Random vaccination', 'Vaccinating only when animals are sick', 'Never vaccinating'],
      correct: 'A planned timeline for administering vaccines at specific ages',
      explanation: 'Vaccination schedules ensure animals receive proper immunization at optimal times.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_health_m7',
      question: 'What are antibiotics used for in animal health?',
      options: ['Treating bacterial infections', 'Preventing all diseases', 'Treating viral infections', 'Improving growth only'],
      correct: 'Treating bacterial infections',
      explanation: 'Antibiotics are effective against bacterial infections but not against viruses or parasites.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_health_m8',
      question: 'What is dipping in animal health management?',
      options: ['Immersing animals in chemical solutions to control external parasites', 'Giving animals water', 'Bathing animals for cleanliness', 'Feeding animals supplements'],
      correct: 'Immersing animals in chemical solutions to control external parasites',
      explanation: 'Dipping involves submerging animals in acaricide solutions to kill ticks and other external parasites.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_health_m9',
      question: 'What is mastitis in dairy cows?',
      options: ['Inflammation of the udder usually caused by bacterial infection', 'A skin disease', 'A foot disease', 'A respiratory disease'],
      correct: 'Inflammation of the udder usually caused by bacterial infection',
      explanation: 'Mastitis is an infection of the mammary gland that reduces milk quality and quantity.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_health_m10',
      question: 'Why is early detection of disease important?',
      options: ['Allows prompt treatment and prevents spread to other animals', 'It is not important', 'Only to save money', 'Only for record keeping'],
      correct: 'Allows prompt treatment and prevents spread to other animals',
      explanation: 'Early detection enables quick treatment, reducing severity and preventing disease spread.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_health_h1',
      question: 'What is antimicrobial resistance and how does it affect animal health?',
      options: ['Pathogens becoming resistant to drugs, making treatment ineffective', 'Animals becoming stronger', 'Improved drug efficacy', 'A new type of vaccine'],
      correct: 'Pathogens becoming resistant to drugs, making treatment ineffective',
      explanation: 'Overuse of antibiotics leads to resistant bacteria, making infections harder to treat.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_health_h2',
      question: 'What is epidemiology in animal health?',
      options: ['The study of disease distribution, causes, and control in populations', 'Treatment of individual animals', 'A type of medication', 'Surgery on animals'],
      correct: 'The study of disease distribution, causes, and control in populations',
      explanation: 'Epidemiology analyzes disease patterns in populations to develop effective control strategies.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_health_h3',
      question: 'How does climate change influence animal disease patterns?',
      options: ['Alters vector distribution, pathogen survival, and host susceptibility', 'Has no effect', 'Only affects temperature', 'Eliminates all diseases'],
      correct: 'Alters vector distribution, pathogen survival, and host susceptibility',
      explanation: 'Climate change expands disease vector ranges, alters pathogen ecology, and affects animal immunity.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_health_h4',
      question: 'What is the One Health approach?',
      options: ['Integrating human, animal, and environmental health for better outcomes', 'Treating only one animal at a time', 'Using only one medicine', 'One vaccination for all diseases'],
      correct: 'Integrating human, animal, and environmental health for better outcomes',
      explanation: 'One Health recognizes the interconnection between human, animal, and environmental health.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_health_h5',
      question: 'What is the difference between endemic and epidemic diseases?',
      options: ['Endemic diseases are constantly present; epidemic diseases occur in sudden outbreaks', 'They are the same', 'Endemic are more severe', 'Epidemic are always fatal'],
      correct: 'Endemic diseases are constantly present; epidemic diseases occur in sudden outbreaks',
      explanation: 'Endemic diseases are regularly found in a population, while epidemics are unusual increases in disease occurrence.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_health_h6',
      question: 'How do vector-borne diseases differ from directly transmitted diseases?',
      options: ['Vector-borne diseases require an intermediate host like ticks or mosquitoes', 'No difference', 'Vector-borne diseases are less serious', 'Direct diseases need vectors'],
      correct: 'Vector-borne diseases require an intermediate host like ticks or mosquitoes',
      explanation: 'Vector-borne diseases are transmitted through arthropod vectors, unlike directly transmitted diseases.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_health_h7',
      question: 'What is the role of immunity in disease prevention?',
      options: ['The immune system recognizes and destroys pathogens, providing protection', 'Immunity has no role', 'Only vaccines provide protection', 'Only antibiotics provide immunity'],
      correct: 'The immune system recognizes and destroys pathogens, providing protection',
      explanation: 'The immune system provides defense through innate and adaptive responses against pathogens.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_health_h8',
      question: 'What is integrated disease management in livestock?',
      options: ['Combining prevention, surveillance, and treatment strategies', 'Using only one control method', 'Only vaccination', 'Only quarantine'],
      correct: 'Combining prevention, surveillance, and treatment strategies',
      explanation: 'Integrated management uses multiple strategies for comprehensive disease control.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_health_h9',
      question: 'How does nutrition affect disease resistance in animals?',
      options: ['Proper nutrition strengthens immune function and disease resistance', 'Nutrition has no effect on disease', 'Overfed animals are healthier', 'Only protein affects immunity'],
      correct: 'Proper nutrition strengthens immune function and disease resistance',
      explanation: 'Adequate nutrition provides the building blocks for a strong immune system.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_health_h10',
      question: 'What are the economic impacts of animal diseases?',
      options: ['Production losses, treatment costs, trade restrictions, and food security impacts', 'Only treatment costs', 'No economic impact', 'Only affects large farms'],
      correct: 'Production losses, treatment costs, trade restrictions, and food security impacts',
      explanation: 'Animal diseases cause direct production losses and indirect costs through market disruptions and trade bans.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 9: Dairy Cattle Production and Management': [
    {
      id: 'agr11_dairy_e1',
      question: 'What is a dairy cow?',
      options: ['A cow raised primarily for milk production', 'A cow raised for meat', 'A wild cow', 'A young calf'],
      correct: 'A cow raised primarily for milk production',
      explanation: 'Dairy cows are specifically bred and managed for high milk production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_e2',
      question: 'What is milk?',
      options: ['A nutritious white liquid produced by mammals', 'A type of water', 'A plant product', 'An artificial drink'],
      correct: 'A nutritious white liquid produced by mammals',
      explanation: 'Milk is a nutrient-rich fluid secreted by the mammary glands of female mammals.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_e3',
      question: 'How often are dairy cows typically milked?',
      options: ['Twice a day', 'Once a week', 'Once a month', 'Once a year'],
      correct: 'Twice a day',
      explanation: 'Most dairy cows are milked twice daily, morning and evening.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_e4',
      question: 'Which dairy breed is known for high milk production?',
      options: ['Holstein-Friesian', 'Angus', 'Brahman', 'Hereford'],
      correct: 'Holstein-Friesian',
      explanation: 'Holstein-Friesian cattle are the world\'s highest milk-producing dairy breed.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_e5',
      question: 'What is colostrum?',
      options: ['The first milk produced after giving birth', 'Regular milk', 'Spoiled milk', 'Powdered milk'],
      correct: 'The first milk produced after giving birth',
      explanation: 'Colostrum is the first milk rich in antibodies and nutrients essential for newborn calves.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_e6',
      question: 'What is a calf?',
      options: ['A young cow or bull', 'An adult cow', 'A type of milk', 'A dairy product'],
      correct: 'A young cow or bull',
      explanation: 'A calf is a young bovine animal, either male or female.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_e7',
      question: 'What is pasteurization?',
      options: ['Heating milk to kill harmful bacteria', 'Cooling milk', 'Adding chemicals to milk', 'Diluting milk with water'],
      correct: 'Heating milk to kill harmful bacteria',
      explanation: 'Pasteurization involves heating milk to a specific temperature to destroy disease-causing organisms.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_e8',
      question: 'What products can be made from milk?',
      options: ['Butter, cheese, and yogurt', 'Only butter', 'Only cheese', 'No other products'],
      correct: 'Butter, cheese, and yogurt',
      explanation: 'Milk can be processed into various products including butter, cheese, yogurt, and cream.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_e9',
      question: 'Why is clean water important for dairy cows?',
      options: ['Cows need large amounts of clean water for milk production', 'Water is not important', 'Cows do not drink water', 'Only for cleaning'],
      correct: 'Cows need large amounts of clean water for milk production',
      explanation: 'Dairy cows consume 50-100 liters of water daily, and water quality directly affects milk production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_e10',
      question: 'What is milking hygiene?',
      options: ['Keeping the milking process clean to ensure safe milk', 'Milking quickly', 'Milking once a day', 'Using only machines'],
      correct: 'Keeping the milking process clean to ensure safe milk',
      explanation: 'Milking hygiene involves clean hands, equipment, and udders to produce safe, high-quality milk.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_dairy_m1',
      question: 'What is the dry period in dairy cattle management?',
      options: ['A rest period before calving when the cow is not milked', 'A period without water', 'A season with no rain', 'When milk production increases'],
      correct: 'A rest period before calving when the cow is not milked',
      explanation: 'The dry period (6-8 weeks before calving) allows the udder to rest and regenerate.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_m2',
      question: 'What factors affect milk composition?',
      options: ['Breed, nutrition, stage of lactation, and season', 'Only breed', 'Only feed', 'Only season'],
      correct: 'Breed, nutrition, stage of lactation, and season',
      explanation: 'Milk composition is influenced by genetic, nutritional, physiological, and environmental factors.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_m3',
      question: 'What is a lactation curve?',
      options: ['A graph showing milk production changes over the lactation period', 'A type of feeding schedule', 'A breeding plan', 'A disease chart'],
      correct: 'A graph showing milk production changes over the lactation period',
      explanation: 'The lactation curve shows milk yield rising to peak production then gradually declining.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_m4',
      question: 'What is the calving interval?',
      options: ['The time between two successive calvings', 'The time of milking', 'The age of first calving', 'The weaning period'],
      correct: 'The time between two successive calvings',
      explanation: 'An optimal calving interval of 12-13 months ensures efficient reproductive management.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_m5',
      question: 'Why is feed quality important for dairy cows?',
      options: ['It directly affects milk yield and quality', 'It only affects body weight', 'It has no effect on production', 'Only hay matters'],
      correct: 'It directly affects milk yield and quality',
      explanation: 'High-quality feed provides the nutrients needed for maximum milk production and good milk composition.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_m6',
      question: 'What is somatic cell count (SCC) in milk?',
      options: ['A measure of white blood cells indicating udder health', 'A milk volume measurement', 'A fat content test', 'A protein test'],
      correct: 'A measure of white blood cells indicating udder health',
      explanation: 'High SCC indicates udder infection (mastitis) and reduced milk quality.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_m7',
      question: 'What is the advantage of crossbreeding local cattle with exotic dairy breeds?',
      options: ['Combines local adaptability with higher milk production', 'Reduces milk production', 'Has no benefit', 'Only changes coat color'],
      correct: 'Combines local adaptability with higher milk production',
      explanation: 'Crossbreeding aims to produce animals that are productive yet adapted to local conditions.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_m8',
      question: 'What is heat detection in dairy management?',
      options: ['Identifying when a cow is ready for breeding', 'Checking barn temperature', 'Measuring milk temperature', 'Testing for fever'],
      correct: 'Identifying when a cow is ready for breeding',
      explanation: 'Heat detection identifies cows in estrus for timely breeding to maintain reproductive efficiency.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_m9',
      question: 'What is calf rearing?',
      options: ['The management and feeding of young calves from birth', 'Selling calves at birth', 'Separating calves permanently', 'Ignoring young calves'],
      correct: 'The management and feeding of young calves from birth',
      explanation: 'Proper calf rearing ensures healthy growth and development of replacement heifers.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_m10',
      question: 'What is the importance of record keeping in dairy farming?',
      options: ['Tracks production, health, and breeding for informed management decisions', 'Not important', 'Only for tax purposes', 'Only required by law'],
      correct: 'Tracks production, health, and breeding for informed management decisions',
      explanation: 'Records enable farmers to monitor performance, identify problems, and make profitable decisions.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_dairy_h1',
      question: 'How does negative energy balance affect dairy cow health and reproduction?',
      options: ['Causes metabolic disorders, reduced immunity, and delayed conception', 'Improves reproduction', 'Has no effect', 'Only affects milk color'],
      correct: 'Causes metabolic disorders, reduced immunity, and delayed conception',
      explanation: 'High-producing cows in early lactation often cannot consume enough energy, leading to health issues.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_dairy_h2',
      question: 'What is total mixed ration (TMR) and its advantages?',
      options: ['A balanced mixture of all feed ingredients ensuring consistent nutrition', 'Feeding one ingredient at a time', 'Grazing only', 'Feeding concentrates only'],
      correct: 'A balanced mixture of all feed ingredients ensuring consistent nutrition',
      explanation: 'TMR provides a uniform diet that prevents selective eating and ensures balanced nutrient intake.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_dairy_h3',
      question: 'How does milk cooling and cold chain management affect dairy quality?',
      options: ['Rapid cooling inhibits bacterial growth and maintains freshness', 'Cooling reduces milk volume', 'Cooling changes milk taste', 'Temperature does not affect quality'],
      correct: 'Rapid cooling inhibits bacterial growth and maintains freshness',
      explanation: 'Cooling milk to 4°C within 2 hours of milking prevents bacterial multiplication and preserves quality.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_dairy_h4',
      question: 'What is the genetic merit of a dairy cow and how is it measured?',
      options: ['The estimated breeding value based on production records and pedigree', 'The price of the cow', 'The age of the cow', 'The color of the cow'],
      correct: 'The estimated breeding value based on production records and pedigree',
      explanation: 'Genetic merit is estimated through statistical analysis of production data from the cow and its relatives.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_dairy_h5',
      question: 'What is precision dairy farming?',
      options: ['Using sensors and data analytics to manage individual cow performance', 'Traditional farming methods', 'Small-scale farming', 'Organic farming only'],
      correct: 'Using sensors and data analytics to manage individual cow performance',
      explanation: 'Precision dairy farming uses technology to monitor health, reproduction, and production of each cow.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_dairy_h6',
      question: 'How does heat stress affect dairy cattle productivity?',
      options: ['Reduces feed intake, milk yield, reproduction, and immune function', 'Improves milk production', 'No effect', 'Only affects behavior'],
      correct: 'Reduces feed intake, milk yield, reproduction, and immune function',
      explanation: 'Heat stress causes cows to eat less and divert energy to cooling, reducing overall productivity.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_dairy_h7',
      question: 'What is the role of rumen microorganisms in dairy cow nutrition?',
      options: ['Ferment fiber and produce volatile fatty acids for energy', 'They cause disease', 'They have no role', 'They reduce milk production'],
      correct: 'Ferment fiber and produce volatile fatty acids for energy',
      explanation: 'Rumen microbes break down fibrous feeds into usable energy sources and synthesize vitamins and protein.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_dairy_h8',
      question: 'What are the key performance indicators (KPIs) in dairy farming?',
      options: ['Milk yield per cow, calving interval, SCC, and feed conversion efficiency', 'Only total milk sold', 'Only number of cows', 'Only farm size'],
      correct: 'Milk yield per cow, calving interval, SCC, and feed conversion efficiency',
      explanation: 'KPIs help farmers benchmark performance and identify areas for improvement.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_dairy_h9',
      question: 'How does transition cow management affect lactation performance?',
      options: ['Proper management 3 weeks before and after calving prevents metabolic diseases', 'Has no effect on lactation', 'Only affects calf health', 'Only requires extra water'],
      correct: 'Proper management 3 weeks before and after calving prevents metabolic diseases',
      explanation: 'The transition period is critical for metabolic health and determines subsequent lactation performance.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_dairy_h10',
      question: 'What is the environmental footprint of dairy production and how can it be reduced?',
      options: ['Greenhouse gas emissions and resource use that can be reduced through improved efficiency', 'Dairy has no environmental impact', 'Only water use matters', 'Cannot be reduced'],
      correct: 'Greenhouse gas emissions and resource use that can be reduced through improved efficiency',
      explanation: 'Improving feed efficiency, genetics, and management reduces emissions per unit of milk produced.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 10: Introduction to Natural Resources': [
    {
      id: 'agr11_natres_e1',
      question: 'What are natural resources?',
      options: ['Materials from nature used by humans', 'Man-made products', 'Factory goods', 'Artificial materials'],
      correct: 'Materials from nature used by humans',
      explanation: 'Natural resources are materials occurring in nature that are useful to humans.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_e2',
      question: 'Which of the following is a natural resource?',
      options: ['Water', 'Plastic', 'Nylon', 'Concrete'],
      correct: 'Water',
      explanation: 'Water is a vital natural resource essential for all life.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_e3',
      question: 'What is a renewable natural resource?',
      options: ['A resource that can be replenished naturally', 'A resource that cannot be replaced', 'A man-made resource', 'A factory product'],
      correct: 'A resource that can be replenished naturally',
      explanation: 'Renewable resources like sunlight and forests can regenerate over time.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_e4',
      question: 'Which is a non-renewable resource?',
      options: ['Petroleum', 'Solar energy', 'Wind', 'Forests'],
      correct: 'Petroleum',
      explanation: 'Petroleum takes millions of years to form and is considered non-renewable.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_e5',
      question: 'Why is soil important in agriculture?',
      options: ['It provides nutrients, water, and support for plant growth', 'It has no importance', 'Only for building', 'Only for decoration'],
      correct: 'It provides nutrients, water, and support for plant growth',
      explanation: 'Soil is the foundation of agriculture, providing essential support for crop production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_e6',
      question: 'What is a forest?',
      options: ['A large area covered with trees', 'A desert', 'A lake', 'A farm'],
      correct: 'A large area covered with trees',
      explanation: 'Forests are ecosystems dominated by trees and other woody vegetation.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_e7',
      question: 'What is the main source of freshwater?',
      options: ['Rivers, lakes, and underground water', 'Oceans only', 'Rain only', 'Snow only'],
      correct: 'Rivers, lakes, and underground water',
      explanation: 'Freshwater comes from surface water (rivers, lakes) and groundwater sources.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_e8',
      question: 'What is air pollution?',
      options: ['Contamination of air with harmful substances', 'Clean air', 'Normal weather', 'Wind'],
      correct: 'Contamination of air with harmful substances',
      explanation: 'Air pollution occurs when harmful gases or particles contaminate the atmosphere.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_e9',
      question: 'Which natural resource is needed for breathing?',
      options: ['Air (oxygen)', 'Soil', 'Minerals', 'Petroleum'],
      correct: 'Air (oxygen)',
      explanation: 'Oxygen in the air is essential for respiration in humans and animals.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_e10',
      question: 'What is conservation?',
      options: ['Protecting and managing natural resources wisely', 'Destroying resources', 'Ignoring resources', 'Wasting resources'],
      correct: 'Protecting and managing natural resources wisely',
      explanation: 'Conservation involves sustainable use and protection of natural resources.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_natres_m1',
      question: 'What is the difference between renewable and non-renewable resources?',
      options: ['Renewable can regenerate, non-renewable are finite and depletable', 'No difference', 'Non-renewable are more common', 'Renewable are man-made'],
      correct: 'Renewable can regenerate, non-renewable are finite and depletable',
      explanation: 'Renewable resources can be naturally replenished, while non-renewable resources exist in fixed quantities.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_m2',
      question: 'What is desertification?',
      options: ['The process by which fertile land becomes desert', 'Creating new forests', 'Flooding of land', 'Urbanization'],
      correct: 'The process by which fertile land becomes desert',
      explanation: 'Desertification occurs when productive land degrades due to climate change and human activities.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_m3',
      question: 'How does deforestation affect the environment?',
      options: ['Causes soil erosion, biodiversity loss, and climate change', 'Improves the environment', 'Has no effect', 'Only affects trees'],
      correct: 'Causes soil erosion, biodiversity loss, and climate change',
      explanation: 'Removing forests destroys habitats, increases erosion, and releases stored carbon.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_m4',
      question: 'What is watershed management?',
      options: ['Managing land and water resources in a drainage basin', 'Managing a single well', 'Building dams only', 'Irrigation only'],
      correct: 'Managing land and water resources in a drainage basin',
      explanation: 'Watershed management takes a comprehensive approach to managing all resources within a catchment area.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_m5',
      question: 'What are the main causes of soil degradation?',
      options: ['Overgrazing, deforestation, and poor farming practices', 'Only natural disasters', 'Only rainfall', 'Only wind'],
      correct: 'Overgrazing, deforestation, and poor farming practices',
      explanation: 'Human activities are the primary drivers of soil degradation in most regions.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_m6',
      question: 'What is groundwater?',
      options: ['Water stored in underground rock formations', 'Surface water', 'Rainwater', 'Ocean water'],
      correct: 'Water stored in underground rock formations',
      explanation: 'Groundwater is stored in aquifers - permeable rock layers below the earth\'s surface.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_m7',
      question: 'Why are wetlands important natural resources?',
      options: ['They filter water, control floods, and support biodiversity', 'They are useless', 'Only for fishing', 'Only for irrigation'],
      correct: 'They filter water, control floods, and support biodiversity',
      explanation: 'Wetlands provide crucial ecosystem services including water purification and flood control.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_m8',
      question: 'What is sustainable development?',
      options: ['Meeting present needs without compromising future generations', 'Rapid industrialization', 'Using all resources now', 'Ignoring environmental concerns'],
      correct: 'Meeting present needs without compromising future generations',
      explanation: 'Sustainable development balances economic growth with environmental protection for long-term viability.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_m9',
      question: 'What is the role of minerals in agriculture?',
      options: ['Provide essential nutrients for plant and animal growth', 'Only for construction', 'Not related to agriculture', 'Only for decoration'],
      correct: 'Provide essential nutrients for plant and animal growth',
      explanation: 'Minerals supply essential macro and micronutrients needed for crop and livestock production.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_m10',
      question: 'What is an ecosystem?',
      options: ['A community of living organisms interacting with their environment', 'Only plants', 'Only animals', 'Only soil'],
      correct: 'A community of living organisms interacting with their environment',
      explanation: 'Ecosystems include all living organisms and their physical environment functioning as a unit.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_natres_h1',
      question: 'How does overexploitation of natural resources affect agricultural sustainability?',
      options: ['Depletes resource base, reducing long-term agricultural productivity', 'Improves productivity', 'Has no effect', 'Only affects industry'],
      correct: 'Depletes resource base, reducing long-term agricultural productivity',
      explanation: 'Unsustainable resource use undermines the natural capital that agriculture depends upon.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_natres_h2',
      question: 'What is the concept of ecosystem services?',
      options: ['Benefits that natural ecosystems provide to humans', 'Services provided by governments', 'Industrial services', 'Commercial services'],
      correct: 'Benefits that natural ecosystems provide to humans',
      explanation: 'Ecosystem services include pollination, water purification, climate regulation, and soil formation.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_natres_h3',
      question: 'How does land use change affect natural resource availability?',
      options: ['Alters water cycles, soil quality, and biodiversity', 'Has no effect', 'Only affects urban areas', 'Improves all resources'],
      correct: 'Alters water cycles, soil quality, and biodiversity',
      explanation: 'Converting natural ecosystems to farmland or urban areas disrupts ecological processes.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_natres_h4',
      question: 'What is the tragedy of the commons?',
      options: ['Overuse of shared resources when individuals act in self-interest', 'Sharing resources equally', 'Government control of resources', 'Private ownership of resources'],
      correct: 'Overuse of shared resources when individuals act in self-interest',
      explanation: 'The tragedy of the commons describes how shared resources are overexploited when users prioritize personal gain.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_natres_h5',
      question: 'How does population growth impact natural resources in Ethiopia?',
      options: ['Increases demand for land, water, and forests leading to degradation', 'No impact', 'Improves resource management', 'Reduces resource use'],
      correct: 'Increases demand for land, water, and forests leading to degradation',
      explanation: 'Growing populations put increasing pressure on finite natural resources.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_natres_h6',
      question: 'What is environmental impact assessment (EIA)?',
      options: ['A process to evaluate environmental effects of proposed projects', 'A soil test', 'A weather forecast', 'An economic analysis only'],
      correct: 'A process to evaluate environmental effects of proposed projects',
      explanation: 'EIA identifies, predicts, and evaluates potential environmental impacts before project implementation.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_natres_h7',
      question: 'How do payment for ecosystem services (PES) programs work?',
      options: ['Resource users compensate land managers for maintaining ecosystem functions', 'Government pays for all resources', 'Resources are free', 'Only industries pay'],
      correct: 'Resource users compensate land managers for maintaining ecosystem functions',
      explanation: 'PES creates financial incentives for conservation by compensating those who maintain ecosystem services.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_natres_h8',
      question: 'What is the water-energy-food nexus?',
      options: ['The interconnected relationships between water, energy, and food systems', 'Three separate unrelated sectors', 'Only about water use', 'Only about energy production'],
      correct: 'The interconnected relationships between water, energy, and food systems',
      explanation: 'The nexus approach recognizes that water, energy, and food security are interdependent.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_natres_h9',
      question: 'How does indigenous knowledge contribute to natural resource management?',
      options: ['Provides time-tested sustainable practices adapted to local conditions', 'Has no value', 'Only useful historically', 'Contradicts science'],
      correct: 'Provides time-tested sustainable practices adapted to local conditions',
      explanation: 'Indigenous knowledge systems offer valuable insights for sustainable resource management.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_natres_h10',
      question: 'What is the role of policy and governance in natural resource management?',
      options: ['Establishes regulations and incentives for sustainable resource use', 'Has no role', 'Only restricts use', 'Only benefits government'],
      correct: 'Establishes regulations and incentives for sustainable resource use',
      explanation: 'Effective policies create frameworks for equitable and sustainable natural resource management.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 11: Management of Natural Resources': [
    {
      id: 'agr11_mgtres_e1', question: 'What is soil conservation?', options: ['Protecting soil from erosion and degradation', 'Removing soil', 'Selling soil', 'Ignoring soil problems'], correct: 'Protecting soil from erosion and degradation', explanation: 'Soil conservation practices prevent loss of fertile topsoil.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_e2', question: 'What is terracing?', options: ['Creating steps on hillsides to reduce erosion', 'Flattening mountains', 'Building walls', 'Digging wells'], correct: 'Creating steps on hillsides to reduce erosion', explanation: 'Terracing creates level steps on slopes to slow water flow and prevent erosion.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_e3', question: 'What is afforestation?', options: ['Planting trees on land that was not previously forested', 'Cutting down forests', 'Burning forests', 'Moving forests'], correct: 'Planting trees on land that was not previously forested', explanation: 'Afforestation increases forest cover by planting trees on non-forest land.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_e4', question: 'What is water harvesting?', options: ['Collecting and storing rainwater for future use', 'Wasting water', 'Polluting water', 'Draining wetlands'], correct: 'Collecting and storing rainwater for future use', explanation: 'Water harvesting captures rainwater for agricultural and domestic use.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_e5', question: 'Why should we plant trees?', options: ['To prevent erosion, provide shade, and produce oxygen', 'For decoration only', 'To block roads', 'No reason'], correct: 'To prevent erosion, provide shade, and produce oxygen', explanation: 'Trees provide multiple environmental and economic benefits.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_e6', question: 'What is composting?', options: ['Decomposing organic waste to make fertilizer', 'Burning waste', 'Burying plastic', 'Dumping chemicals'], correct: 'Decomposing organic waste to make fertilizer', explanation: 'Composting converts organic materials into nutrient-rich soil amendment.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_e7', question: 'What is mulching?', options: ['Covering soil with material to conserve moisture', 'Removing soil cover', 'Digging soil deeply', 'Burning crop residues'], correct: 'Covering soil with material to conserve moisture', explanation: 'Mulching reduces evaporation, controls weeds, and moderates soil temperature.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_e8', question: 'What is reforestation?', options: ['Replanting trees in areas where forests were removed', 'Cutting more trees', 'Building on forest land', 'Mining in forests'], correct: 'Replanting trees in areas where forests were removed', explanation: 'Reforestation restores forest cover on previously deforested land.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_e9', question: 'What is contour plowing?', options: ['Plowing along the contour lines of a slope', 'Plowing up and down hills', 'Not plowing at all', 'Deep plowing only'], correct: 'Plowing along the contour lines of a slope', explanation: 'Contour plowing follows the natural contours to reduce water runoff and soil erosion.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_e10', question: 'Why is it important to manage natural resources?', options: ['To ensure they are available for future generations', 'Resources are unlimited', 'Management is unnecessary', 'Only for profit'], correct: 'To ensure they are available for future generations', explanation: 'Proper management ensures sustainable use of resources for current and future needs.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mgtres_m1', question: 'What is integrated watershed management?', options: ['Coordinated management of land, water, and vegetation in a catchment area', 'Managing only water', 'Managing only soil', 'Managing only forests'], correct: 'Coordinated management of land, water, and vegetation in a catchment area', explanation: 'Integrated watershed management addresses all resources within a drainage basin holistically.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_m2', question: 'What is agroforestry?', options: ['Integrating trees with crops and/or livestock on the same land', 'Farming without trees', 'Only growing trees', 'Cutting all trees for farming'], correct: 'Integrating trees with crops and/or livestock on the same land', explanation: 'Agroforestry combines agriculture and forestry for diversified and sustainable production.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_m3', question: 'What are check dams?', options: ['Small barriers built across waterways to slow water flow', 'Large hydroelectric dams', 'Animal shelters', 'Road barriers'], correct: 'Small barriers built across waterways to slow water flow', explanation: 'Check dams reduce water velocity, decrease erosion, and promote groundwater recharge.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_m4', question: 'What is strip cropping?', options: ['Growing different crops in alternating strips along contours', 'Growing one crop everywhere', 'Not growing any crops', 'Growing crops in circles'], correct: 'Growing different crops in alternating strips along contours', explanation: 'Strip cropping alternates soil-depleting crops with soil-conserving crops to reduce erosion.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_m5', question: 'What is rotational grazing?', options: ['Moving livestock between pastures to allow recovery', 'Keeping animals in one place always', 'Not allowing any grazing', 'Overgrazing all land'], correct: 'Moving livestock between pastures to allow recovery', explanation: 'Rotational grazing prevents overgrazing by allowing pastures time to regenerate.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_m6', question: 'What is the role of community participation in resource management?', options: ['Ensures local ownership and sustainable management practices', 'Communities should not participate', 'Only government should manage', 'Only experts should manage'], correct: 'Ensures local ownership and sustainable management practices', explanation: 'Community involvement improves adoption and sustainability of resource management programs.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_m7', question: 'What is soil and water conservation (SWC)?', options: ['Practices that protect soil and water resources from degradation', 'Using maximum water', 'Removing soil cover', 'Draining wetlands'], correct: 'Practices that protect soil and water resources from degradation', explanation: 'SWC includes physical and biological measures to prevent soil and water loss.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_m8', question: 'What are windbreaks?', options: ['Rows of trees planted to reduce wind speed and erosion', 'Walls to block wind', 'Types of storms', 'Broken wind turbines'], correct: 'Rows of trees planted to reduce wind speed and erosion', explanation: 'Windbreaks protect crops, soil, and livestock from damaging winds.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_m9', question: 'What is drip irrigation?', options: ['Delivering water directly to plant roots through tubes', 'Flooding entire fields', 'Spraying water in the air', 'Not watering at all'], correct: 'Delivering water directly to plant roots through tubes', explanation: 'Drip irrigation is the most water-efficient method, delivering water precisely where needed.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_m10', question: 'What is the Green Legacy initiative in Ethiopia?', options: ['A national tree planting program to restore degraded landscapes', 'A farm subsidy program', 'An urban development program', 'An industrial program'], correct: 'A national tree planting program to restore degraded landscapes', explanation: 'The Green Legacy initiative aims to plant billions of trees to combat environmental degradation.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mgtres_h1', question: 'How do payment for ecosystem services (PES) incentivize resource conservation?', options: ['Compensate land managers financially for maintaining ecosystem functions', 'Force people to conserve', 'Tax resource users only', 'Have no incentive effect'], correct: 'Compensate land managers financially for maintaining ecosystem functions', explanation: 'PES creates economic incentives for conservation by paying for environmental stewardship.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mgtres_h2', question: 'What is the concept of carrying capacity in range management?', options: ['Maximum livestock number an area can sustainably support', 'Maximum crop yield', 'Maximum water storage', 'Maximum tree density'], correct: 'Maximum livestock number an area can sustainably support', explanation: 'Carrying capacity determines sustainable stocking rates to prevent rangeland degradation.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mgtres_h3', question: 'How does participatory forest management improve outcomes?', options: ['Engages communities in decision-making, improving compliance and sustainability', 'Excludes communities', 'Only involves government', 'Reduces forest cover'], correct: 'Engages communities in decision-making, improving compliance and sustainability', explanation: 'Participatory approaches give communities ownership and responsibility for forest resources.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mgtres_h4', question: 'What is the role of GIS and remote sensing in resource management?', options: ['Mapping, monitoring, and analyzing resource changes over time', 'Only for making maps', 'Has no practical use', 'Only for military purposes'], correct: 'Mapping, monitoring, and analyzing resource changes over time', explanation: 'GIS and remote sensing provide spatial data for informed resource management decisions.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mgtres_h5', question: 'How does climate-smart agriculture integrate resource management?', options: ['Increases productivity while adapting to and mitigating climate change', 'Ignores climate change', 'Only focuses on productivity', 'Only reduces emissions'], correct: 'Increases productivity while adapting to and mitigating climate change', explanation: 'Climate-smart agriculture addresses productivity, adaptation, and mitigation simultaneously.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mgtres_h6', question: 'What is integrated natural resource management (INRM)?', options: ['Holistic approach managing multiple resources considering their interactions', 'Managing one resource at a time', 'Ignoring resource interactions', 'Only managing water'], correct: 'Holistic approach managing multiple resources considering their interactions', explanation: 'INRM recognizes that natural resources are interconnected and must be managed together.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mgtres_h7', question: 'How do land tenure systems affect natural resource management?', options: ['Secure tenure encourages long-term investment in conservation', 'Tenure has no effect', 'Insecure tenure improves management', 'Only private ownership works'], correct: 'Secure tenure encourages long-term investment in conservation', explanation: 'When people have secure rights to land, they invest more in sustainable management.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mgtres_h8', question: 'What is the concept of ecological restoration?', options: ['Assisting recovery of degraded ecosystems to their natural state', 'Replacing nature with artificial systems', 'Leaving degraded areas unchanged', 'Complete reconstruction of ecosystems'], correct: 'Assisting recovery of degraded ecosystems to their natural state', explanation: 'Ecological restoration aims to return ecosystems to their historical trajectory of development.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mgtres_h9', question: 'How does carbon sequestration in soils contribute to climate mitigation?', options: ['Captures atmospheric CO2 in soil organic matter, reducing greenhouse gases', 'Releases carbon into atmosphere', 'Has no climate effect', 'Only works in forests'], correct: 'Captures atmospheric CO2 in soil organic matter, reducing greenhouse gases', explanation: 'Improved land management can increase soil carbon storage, helping mitigate climate change.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mgtres_h10', question: 'What are the challenges of balancing conservation with agricultural development?', options: ['Competing demands for land, resources, and economic priorities', 'No challenges exist', 'Agriculture and conservation are unrelated', 'Only economic challenges'], correct: 'Competing demands for land, resources, and economic priorities', explanation: 'Finding balance requires addressing trade-offs between food production and environmental protection.', difficulty: 'Hard'
    }
  ],
  'Chapter 12: Concepts of Biodiversity': [
    {
      id: 'agr11_biodiv_e1', question: 'What is biodiversity?', options: ['The variety of life on Earth', 'Only animal species', 'Only plant species', 'Only microorganisms'], correct: 'The variety of life on Earth', explanation: 'Biodiversity encompasses all living organisms and the ecological systems they form.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_e2', question: 'What is a species?', options: ['A group of organisms that can breed together', 'Any group of animals', 'A single organism', 'A type of habitat'], correct: 'A group of organisms that can breed together', explanation: 'A species is a group of similar organisms capable of interbreeding and producing fertile offspring.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_e3', question: 'What is an endangered species?', options: ['A species at risk of extinction', 'A common species', 'A domestic species', 'A pest species'], correct: 'A species at risk of extinction', explanation: 'Endangered species have declining populations and face the risk of disappearing completely.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_e4', question: 'What is a habitat?', options: ['The natural environment where an organism lives', 'A man-made structure', 'A type of food', 'A farming method'], correct: 'The natural environment where an organism lives', explanation: 'A habitat provides the food, water, shelter, and space organisms need to survive.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_e5', question: 'Why is biodiversity important?', options: ['Provides food, medicine, and maintains ecosystem balance', 'It is not important', 'Only for scientists', 'Only for tourism'], correct: 'Provides food, medicine, and maintains ecosystem balance', explanation: 'Biodiversity supports essential ecosystem functions and human well-being.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_e6', question: 'What is extinction?', options: ['The complete disappearance of a species', 'Migration of animals', 'Seasonal hibernation', 'Population growth'], correct: 'The complete disappearance of a species', explanation: 'Extinction occurs when the last individual of a species dies.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_e7', question: 'What is a national park?', options: ['A protected area for conserving wildlife and ecosystems', 'A city park', 'A farm', 'A playground'], correct: 'A protected area for conserving wildlife and ecosystems', explanation: 'National parks are designated areas for conserving biodiversity and natural heritage.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_e8', question: 'Which human activity threatens biodiversity?', options: ['Deforestation', 'Planting trees', 'Creating nature reserves', 'Recycling'], correct: 'Deforestation', explanation: 'Deforestation destroys habitats and is a major threat to biodiversity.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_e9', question: 'What is a food chain?', options: ['A sequence showing how organisms feed on each other', 'A chain of restaurants', 'A food processing method', 'A type of farming'], correct: 'A sequence showing how organisms feed on each other', explanation: 'Food chains show the transfer of energy from one organism to another through feeding.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_e10', question: 'What is wildlife?', options: ['Animals and plants living in their natural habitat', 'Only dangerous animals', 'Farm animals', 'Pet animals'], correct: 'Animals and plants living in their natural habitat', explanation: 'Wildlife includes all non-domesticated organisms in their natural environments.', difficulty: 'Easy'
    },
    {
      id: 'agr11_biodiv_m1', question: 'What are the three levels of biodiversity?', options: ['Genetic, species, and ecosystem diversity', 'Only species diversity', 'Only genetic diversity', 'Only ecosystem diversity'], correct: 'Genetic, species, and ecosystem diversity', explanation: 'Biodiversity exists at genetic, species, and ecosystem levels, each crucial for resilience.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_m2', question: 'Why is Ethiopia considered a center of biodiversity?', options: ['Diverse ecosystems from lowlands to highlands support unique species', 'It has only one ecosystem', 'Low species diversity', 'No unique species'], correct: 'Diverse ecosystems from lowlands to highlands support unique species', explanation: 'Ethiopia\'s varied topography and climate create diverse habitats supporting rich biodiversity.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_m3', question: 'What is in-situ conservation?', options: ['Protecting species in their natural habitat', 'Protecting species in zoos', 'Moving species to new locations', 'Ignoring conservation'], correct: 'Protecting species in their natural habitat', explanation: 'In-situ conservation maintains species within their natural ecosystems.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_m4', question: 'What is ex-situ conservation?', options: ['Conserving species outside their natural habitat', 'Conservation in the wild', 'No conservation', 'Only planting trees'], correct: 'Conserving species outside their natural habitat', explanation: 'Ex-situ conservation includes zoos, botanical gardens, and gene banks.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_m5', question: 'What is genetic diversity?', options: ['Variation in genes within a species', 'Number of species in an area', 'Types of ecosystems', 'Number of individuals'], correct: 'Variation in genes within a species', explanation: 'Genetic diversity is the variation in DNA among individuals of the same species.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_m6', question: 'What is a biodiversity hotspot?', options: ['An area with high species richness that is under threat', 'Any tropical area', 'A desert', 'An urban area'], correct: 'An area with high species richness that is under threat', explanation: 'Biodiversity hotspots are areas with exceptional species diversity facing significant habitat loss.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_m7', question: 'What is the role of pollinators in biodiversity?', options: ['Essential for reproduction of many flowering plants', 'They destroy plants', 'No role', 'Only produce honey'], correct: 'Essential for reproduction of many flowering plants', explanation: 'Pollinators enable plant reproduction and are critical for food production and ecosystem health.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_m8', question: 'How does habitat fragmentation affect biodiversity?', options: ['Isolates populations and reduces genetic exchange', 'Improves biodiversity', 'Has no effect', 'Creates new species'], correct: 'Isolates populations and reduces genetic exchange', explanation: 'Fragmentation breaks habitats into smaller isolated patches, threatening population viability.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_m9', question: 'What are invasive species?', options: ['Non-native species that harm local ecosystems', 'All foreign species', 'Endangered species', 'Domestic animals'], correct: 'Non-native species that harm local ecosystems', explanation: 'Invasive species outcompete native organisms and disrupt ecological balance.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_m10', question: 'What is agrobiodiversity?', options: ['The diversity of species used in agriculture', 'Only crop varieties', 'Only livestock breeds', 'Industrial products'], correct: 'The diversity of species used in agriculture', explanation: 'Agrobiodiversity includes all crop varieties, livestock breeds, and associated wild species.', difficulty: 'Medium'
    },
    {
      id: 'agr11_biodiv_h1', question: 'How does biodiversity loss affect ecosystem resilience?', options: ['Reduces ability to recover from disturbances and provide services', 'Improves resilience', 'No effect', 'Only affects appearance'], correct: 'Reduces ability to recover from disturbances and provide services', explanation: 'Less diverse ecosystems are more vulnerable to shocks and less able to maintain functions.', difficulty: 'Hard'
    },
    {
      id: 'agr11_biodiv_h2', question: 'What is the Convention on Biological Diversity (CBD)?', options: ['An international treaty for conservation and sustainable use of biodiversity', 'A local law', 'A trade agreement', 'A farming regulation'], correct: 'An international treaty for conservation and sustainable use of biodiversity', explanation: 'The CBD is a global agreement addressing biodiversity conservation and benefit sharing.', difficulty: 'Hard'
    },
    {
      id: 'agr11_biodiv_h3', question: 'How does crop genetic diversity contribute to food security?', options: ['Provides varieties adapted to different conditions and resistant to threats', 'Reduces food production', 'Has no effect', 'Only for research'], correct: 'Provides varieties adapted to different conditions and resistant to threats', explanation: 'Diverse crop genetics allow adaptation to changing conditions and resistance to pests.', difficulty: 'Hard'
    },
    {
      id: 'agr11_biodiv_h4', question: 'What is the relationship between biodiversity and climate change?', options: ['Biodiversity helps ecosystems adapt while climate change threatens biodiversity', 'No relationship', 'Climate change improves biodiversity', 'Biodiversity causes climate change'], correct: 'Biodiversity helps ecosystems adapt while climate change threatens biodiversity', explanation: 'The relationship is bidirectional: biodiversity aids adaptation but is threatened by changing climates.', difficulty: 'Hard'
    },
    {
      id: 'agr11_biodiv_h5', question: 'What is the economic value of biodiversity?', options: ['Provides ecosystem services worth trillions of dollars globally', 'Has no economic value', 'Only valuable to scientists', 'Only for tourism revenue'], correct: 'Provides ecosystem services worth trillions of dollars globally', explanation: 'Biodiversity underpins economic activities through ecosystem services and genetic resources.', difficulty: 'Hard'
    },
    {
      id: 'agr11_biodiv_h6', question: 'How does the loss of keystone species affect ecosystems?', options: ['Causes cascading effects that dramatically alter ecosystem structure', 'No effect', 'Only affects that species', 'Improves ecosystem balance'], correct: 'Causes cascading effects that dramatically alter ecosystem structure', explanation: 'Keystone species have disproportionate effects on ecosystem function relative to their abundance.', difficulty: 'Hard'
    },
    {
      id: 'agr11_biodiv_h7', question: 'What is access and benefit sharing (ABS) in biodiversity?', options: ['Fair sharing of benefits from using genetic resources with source countries', 'Free access to all resources', 'No sharing required', 'Only monetary benefits'], correct: 'Fair sharing of benefits from using genetic resources with source countries', explanation: 'ABS ensures that countries providing genetic resources receive fair benefits from their use.', difficulty: 'Hard'
    },
    {
      id: 'agr11_biodiv_h8', question: 'How does monoculture farming threaten biodiversity?', options: ['Reduces species diversity, degrades habitats, and increases vulnerability', 'Improves biodiversity', 'Has no effect', 'Only affects crop yields'], correct: 'Reduces species diversity, degrades habitats, and increases vulnerability', explanation: 'Monoculture replaces diverse ecosystems with single-species cultivation.', difficulty: 'Hard'
    },
    {
      id: 'agr11_biodiv_h9', question: 'What role do gene banks play in biodiversity conservation?', options: ['Store genetic material for future use in breeding and restoration', 'Only store money', 'Have no conservation role', 'Only for research museums'], correct: 'Store genetic material for future use in breeding and restoration', explanation: 'Gene banks preserve seeds, tissues, and DNA to safeguard genetic diversity for future generations.', difficulty: 'Hard'
    },
    {
      id: 'agr11_biodiv_h10', question: 'How can sustainable agriculture support biodiversity conservation?', options: ['Maintains habitat diversity, reduces chemical use, and integrates wildlife corridors', 'Cannot support conservation', 'Only through organic farming', 'Only through reducing production'], correct: 'Maintains habitat diversity, reduces chemical use, and integrates wildlife corridors', explanation: 'Sustainable farming practices can coexist with and actively support biodiversity.', difficulty: 'Hard'
    }
  ],
  'Chapter 13: Climate Change Adaptation and Mitigation': [
    {
      id: 'agr11_climate_e1', question: 'What is climate change?', options: ['Long-term changes in temperature and weather patterns', 'Daily weather changes', 'Seasonal changes', 'Only temperature increases'], correct: 'Long-term changes in temperature and weather patterns', explanation: 'Climate change refers to significant lasting changes in global climate patterns.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_e2', question: 'What is a greenhouse gas?', options: ['A gas that traps heat in the atmosphere', 'A gas used in greenhouses', 'Oxygen', 'Nitrogen'], correct: 'A gas that traps heat in the atmosphere', explanation: 'Greenhouse gases like CO2 and methane trap heat, warming the planet.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_e3', question: 'What is global warming?', options: ['The increase in Earth\'s average temperature', 'Warming in one country', 'Summer heat', 'Volcanic activity'], correct: 'The increase in Earth\'s average temperature', explanation: 'Global warming is the gradual increase in Earth\'s average surface temperature.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_e4', question: 'Which gas is the main cause of global warming?', options: ['Carbon dioxide (CO2)', 'Oxygen', 'Nitrogen', 'Helium'], correct: 'Carbon dioxide (CO2)', explanation: 'CO2 from burning fossil fuels is the primary driver of human-caused global warming.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_e5', question: 'How does climate change affect farming?', options: ['Changes rainfall patterns and growing seasons', 'Has no effect on farming', 'Only affects cities', 'Only affects oceans'], correct: 'Changes rainfall patterns and growing seasons', explanation: 'Climate change disrupts agricultural systems through altered weather patterns.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_e6', question: 'What is drought?', options: ['A prolonged period without adequate rainfall', 'Heavy rain', 'A flood', 'Normal weather'], correct: 'A prolonged period without adequate rainfall', explanation: 'Droughts are extended dry periods that can devastate agriculture.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_e7', question: 'What is adaptation to climate change?', options: ['Adjusting practices to cope with changing conditions', 'Ignoring climate change', 'Stopping all farming', 'Moving to another country'], correct: 'Adjusting practices to cope with changing conditions', explanation: 'Adaptation involves modifying activities to reduce vulnerability to climate impacts.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_e8', question: 'What is mitigation of climate change?', options: ['Reducing greenhouse gas emissions', 'Adapting to changes', 'Ignoring the problem', 'Increasing emissions'], correct: 'Reducing greenhouse gas emissions', explanation: 'Mitigation focuses on reducing the causes of climate change.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_e9', question: 'How can planting trees help with climate change?', options: ['Trees absorb CO2 from the atmosphere', 'Trees release CO2', 'Trees have no effect', 'Trees increase warming'], correct: 'Trees absorb CO2 from the atmosphere', explanation: 'Trees act as carbon sinks, absorbing and storing atmospheric CO2.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_e10', question: 'What is a flood?', options: ['An overflow of water onto normally dry land', 'A drought', 'Normal rain', 'Low water level'], correct: 'An overflow of water onto normally dry land', explanation: 'Floods occur when water overflows onto land that is typically dry, often worsened by climate change.', difficulty: 'Easy'
    },
    {
      id: 'agr11_climate_m1', question: 'What are climate-smart agricultural practices?', options: ['Practices that increase productivity while adapting to and mitigating climate change', 'Traditional farming only', 'Using more chemicals', 'Ignoring weather changes'], correct: 'Practices that increase productivity while adapting to and mitigating climate change', explanation: 'Climate-smart agriculture addresses productivity, adaptation, and mitigation simultaneously.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_m2', question: 'How does methane from livestock contribute to climate change?', options: ['Methane is a potent greenhouse gas released during digestion', 'It does not contribute', 'It cools the atmosphere', 'It only affects local areas'], correct: 'Methane is a potent greenhouse gas released during digestion', explanation: 'Ruminant animals produce methane during digestion, contributing significantly to greenhouse emissions.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_m3', question: 'What is carbon sequestration in agriculture?', options: ['Capturing and storing carbon in soil and vegetation', 'Releasing carbon into the air', 'Burning crop residues', 'Using more fossil fuels'], correct: 'Capturing and storing carbon in soil and vegetation', explanation: 'Agricultural practices can increase carbon storage in soils and biomass.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_m4', question: 'What are drought-resistant crop varieties?', options: ['Crops bred to survive with less water', 'Crops that need lots of water', 'Wild plants only', 'Imported crops only'], correct: 'Crops bred to survive with less water', explanation: 'Drought-resistant varieties can maintain production under water-limited conditions.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_m5', question: 'How does conservation agriculture help with climate adaptation?', options: ['Improves soil health, water retention, and crop resilience', 'Increases erosion', 'Uses more water', 'Reduces soil quality'], correct: 'Improves soil health, water retention, and crop resilience', explanation: 'Conservation agriculture builds soil organic matter and improves water management.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_m6', question: 'What is the role of early warning systems in climate adaptation?', options: ['Provide advance information about weather extremes for preparedness', 'Predict earthquakes', 'Monitor animal diseases only', 'Track market prices'], correct: 'Provide advance information about weather extremes for preparedness', explanation: 'Early warning systems help farmers prepare for droughts, floods, and other climate extremes.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_m7', question: 'How does crop diversification help adapt to climate change?', options: ['Reduces risk by not depending on a single crop', 'Increases risk', 'Has no effect', 'Only works in good weather'], correct: 'Reduces risk by not depending on a single crop', explanation: 'Growing multiple crops spreads risk so failure of one crop doesn\'t cause total loss.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_m8', question: 'What is the greenhouse effect?', options: ['Natural warming of Earth by atmospheric gases trapping heat', 'Cooling of the Earth', 'Effect of glass greenhouses only', 'A type of pollution'], correct: 'Natural warming of Earth by atmospheric gases trapping heat', explanation: 'The greenhouse effect is a natural process that warms the Earth but is intensified by human activities.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_m9', question: 'What is renewable energy and how does it help mitigate climate change?', options: ['Energy from natural sources like sun and wind that reduces fossil fuel use', 'Energy from coal', 'Energy from petroleum', 'Nuclear energy only'], correct: 'Energy from natural sources like sun and wind that reduces fossil fuel use', explanation: 'Renewable energy produces little or no greenhouse gas emissions during operation.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_m10', question: 'How does water management help in climate change adaptation?', options: ['Efficient water use ensures crop survival during variable rainfall', 'Water management is unrelated', 'More water always helps', 'Only large dams help'], correct: 'Efficient water use ensures crop survival during variable rainfall', explanation: 'Improved water management helps farmers cope with increasingly unpredictable rainfall.', difficulty: 'Medium'
    },
    {
      id: 'agr11_climate_h1', question: 'What is Ethiopia\'s Climate Resilient Green Economy (CRGE) strategy?', options: ['A national plan to achieve middle-income status while limiting emissions', 'A foreign policy', 'A trade agreement', 'A tourism strategy'], correct: 'A national plan to achieve middle-income status while limiting emissions', explanation: 'CRGE aims for economic development while keeping greenhouse gas emissions low.', difficulty: 'Hard'
    },
    {
      id: 'agr11_climate_h2', question: 'How do Nationally Determined Contributions (NDCs) guide climate action?', options: ['Countries pledge specific emission reductions under the Paris Agreement', 'They are voluntary suggestions only', 'They apply only to developed countries', 'They have no legal framework'], correct: 'Countries pledge specific emission reductions under the Paris Agreement', explanation: 'NDCs are national climate action plans submitted under the Paris Agreement framework.', difficulty: 'Hard'
    },
    {
      id: 'agr11_climate_h3', question: 'What is the relationship between deforestation and climate change?', options: ['Deforestation releases stored carbon and reduces carbon absorption capacity', 'Deforestation helps climate', 'No relationship', 'Deforestation cools the planet'], correct: 'Deforestation releases stored carbon and reduces carbon absorption capacity', explanation: 'Forests store carbon; their removal releases CO2 and eliminates future carbon absorption.', difficulty: 'Hard'
    },
    {
      id: 'agr11_climate_h4', question: 'How can agroforestry contribute to climate change mitigation?', options: ['Trees sequester carbon while providing agricultural products', 'Agroforestry increases emissions', 'Has no climate benefit', 'Only benefits farmers financially'], correct: 'Trees sequester carbon while providing agricultural products', explanation: 'Agroforestry systems store significant carbon in tree biomass while maintaining food production.', difficulty: 'Hard'
    },
    {
      id: 'agr11_climate_h5', question: 'What is climate vulnerability assessment?', options: ['Evaluating how susceptible communities are to climate change impacts', 'A weather forecast', 'A soil test', 'An economic analysis'], correct: 'Evaluating how susceptible communities are to climate change impacts', explanation: 'Vulnerability assessments identify who and what is most at risk from climate change.', difficulty: 'Hard'
    },
    {
      id: 'agr11_climate_h6', question: 'How does soil organic carbon management mitigate climate change?', options: ['Increasing soil carbon stores removes CO2 from atmosphere', 'Soil carbon has no climate effect', 'More tillage helps', 'Burning residues helps'], correct: 'Increasing soil carbon stores removes CO2 from atmosphere', explanation: 'Building soil organic matter sequesters atmospheric carbon and improves soil health.', difficulty: 'Hard'
    },
    {
      id: 'agr11_climate_h7', question: 'What is the role of indigenous knowledge in climate change adaptation?', options: ['Provides locally relevant strategies developed over generations', 'Has no value', 'Only modern science helps', 'Indigenous knowledge is outdated'], correct: 'Provides locally relevant strategies developed over generations', explanation: 'Traditional knowledge systems offer proven adaptive strategies for local climate variability.', difficulty: 'Hard'
    },
    {
      id: 'agr11_climate_h8', question: 'How does climate change affect food security in developing countries?', options: ['Reduces crop yields, increases food prices, and worsens malnutrition', 'Improves food security', 'Has no effect', 'Only affects developed countries'], correct: 'Reduces crop yields, increases food prices, and worsens malnutrition', explanation: 'Developing countries are most vulnerable to climate impacts on agriculture and food systems.', difficulty: 'Hard'
    },
    {
      id: 'agr11_climate_h9', question: 'What is the concept of climate justice?', options: ['Ensuring climate action is fair to those least responsible but most affected', 'Everyone is equally affected', 'Only rich countries should act', 'Justice is not relevant to climate'], correct: 'Ensuring climate action is fair to those least responsible but most affected', explanation: 'Climate justice addresses the disproportionate impacts on vulnerable populations and developing nations.', difficulty: 'Hard'
    },
    {
      id: 'agr11_climate_h10', question: 'How can integrated landscape approaches address both adaptation and mitigation?', options: ['Managing land at landscape scale balances production, conservation, and climate goals', 'Only farm-level action works', 'Landscape approaches are too complex', 'Government action alone is sufficient'], correct: 'Managing land at landscape scale balances production, conservation, and climate goals', explanation: 'Landscape approaches integrate multiple objectives across interconnected land uses.', difficulty: 'Hard'
    }
  ],
  'Chapter 14: Mechanized Farming': [
    {
      id: 'agr11_mech_e1', question: 'What is mechanized farming?', options: ['Using machines for agricultural operations', 'Farming by hand only', 'Animal-powered farming', 'Organic farming'], correct: 'Using machines for agricultural operations', explanation: 'Mechanized farming uses machinery to perform agricultural tasks more efficiently.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_e2', question: 'What is a tractor?', options: ['A powerful vehicle used to pull farm equipment', 'A type of car', 'A hand tool', 'A storage building'], correct: 'A powerful vehicle used to pull farm equipment', explanation: 'Tractors are the primary power source for modern farm operations.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_e3', question: 'What is a combine harvester?', options: ['A machine that harvests, threshes, and cleans grain', 'A planting machine', 'A watering machine', 'A weeding tool'], correct: 'A machine that harvests, threshes, and cleans grain', explanation: 'Combine harvesters perform multiple harvest operations in a single pass through the field.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_e4', question: 'Why do farmers use machines?', options: ['To save time and labor', 'To waste resources', 'For entertainment', 'To make noise'], correct: 'To save time and labor', explanation: 'Machines increase efficiency by completing tasks faster and with less human labor.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_e5', question: 'What is a seed drill?', options: ['A machine that plants seeds at uniform depth and spacing', 'A drill for making holes', 'A watering device', 'A harvesting tool'], correct: 'A machine that plants seeds at uniform depth and spacing', explanation: 'Seed drills ensure precise seed placement for optimal crop establishment.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_e6', question: 'What is a plow used for?', options: ['Breaking and turning over soil', 'Harvesting crops', 'Transporting goods', 'Storing grain'], correct: 'Breaking and turning over soil', explanation: 'Plows break up soil and turn it over to prepare land for planting.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_e7', question: 'What fuel do most farm machines use?', options: ['Diesel', 'Water', 'Milk', 'Cooking oil'], correct: 'Diesel', explanation: 'Most farm machinery runs on diesel fuel due to its efficiency and power.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_e8', question: 'What is a sprayer used for?', options: ['Applying pesticides or fertilizers to crops', 'Watering gardens', 'Painting buildings', 'Cleaning animals'], correct: 'Applying pesticides or fertilizers to crops', explanation: 'Sprayers distribute crop protection products and liquid fertilizers evenly over fields.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_e9', question: 'What is irrigation equipment?', options: ['Machines and tools used to supply water to crops', 'Harvesting tools', 'Storage equipment', 'Transportation vehicles'], correct: 'Machines and tools used to supply water to crops', explanation: 'Irrigation equipment delivers water to crops in controlled amounts.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_e10', question: 'What is a trailer used for on a farm?', options: ['Transporting crops, supplies, and materials', 'Plowing fields', 'Planting seeds', 'Milking cows'], correct: 'Transporting crops, supplies, and materials', explanation: 'Farm trailers are pulled by tractors to move various agricultural materials.', difficulty: 'Easy'
    },
    {
      id: 'agr11_mech_m1', question: 'What are the advantages of mechanized farming over manual farming?', options: ['Higher efficiency, larger area coverage, and reduced labor costs', 'Only faster work', 'Only cheaper', 'No advantages'], correct: 'Higher efficiency, larger area coverage, and reduced labor costs', explanation: 'Mechanization enables farmers to cultivate more land more efficiently.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_m2', question: 'What are the challenges of farm mechanization in Ethiopia?', options: ['High costs, lack of spare parts, and need for trained operators', 'No challenges', 'Too many machines available', 'Machines work perfectly always'], correct: 'High costs, lack of spare parts, and need for trained operators', explanation: 'Ethiopian farmers face financial, technical, and infrastructure barriers to mechanization.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_m3', question: 'What is the difference between primary and secondary tillage?', options: ['Primary breaks raw soil; secondary prepares a fine seedbed', 'No difference', 'Primary is lighter', 'Secondary is deeper'], correct: 'Primary breaks raw soil; secondary prepares a fine seedbed', explanation: 'Primary tillage is deep soil breaking while secondary creates refined seedbeds.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_m4', question: 'What is post-harvest mechanization?', options: ['Using machines for threshing, cleaning, drying, and storage', 'Only planting with machines', 'Only plowing with machines', 'No machines after harvest'], correct: 'Using machines for threshing, cleaning, drying, and storage', explanation: 'Post-harvest mechanization reduces losses and improves crop quality after harvest.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_m5', question: 'What is the role of animal draft power in Ethiopian agriculture?', options: ['Provides affordable power for plowing and transport in smallholder farming', 'Not used anymore', 'Only for large farms', 'Only for transportation'], correct: 'Provides affordable power for plowing and transport in smallholder farming', explanation: 'Draft animals remain important for smallholder farmers who cannot afford tractors.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_m6', question: 'What safety precautions should be taken when using farm machinery?', options: ['Proper training, protective equipment, and regular maintenance', 'No precautions needed', 'Only wear gloves', 'Only read the manual'], correct: 'Proper training, protective equipment, and regular maintenance', explanation: 'Farm machinery safety requires training, PPE, and well-maintained equipment.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_m7', question: 'What is a disc harrow?', options: ['A tillage implement with rotating discs to break soil clods', 'A harvesting tool', 'A planting machine', 'A spraying device'], correct: 'A tillage implement with rotating discs to break soil clods', explanation: 'Disc harrows pulverize soil and incorporate crop residues as secondary tillage tools.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_m8', question: 'Why is regular maintenance of farm machinery important?', options: ['Extends lifespan, prevents breakdowns, and ensures safety', 'It wastes time', 'Not necessary', 'Only for new machines'], correct: 'Extends lifespan, prevents breakdowns, and ensures safety', explanation: 'Regular maintenance keeps equipment functional, safe, and cost-effective.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_m9', question: 'What is cooperative machinery sharing?', options: ['Farmers pooling resources to purchase and share equipment', 'Each farmer buying all machines', 'Government providing free machines', 'Renting machines from abroad'], correct: 'Farmers pooling resources to purchase and share equipment', explanation: 'Cooperative sharing makes mechanization affordable for smallholder farmers.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_m10', question: 'What is precision agriculture technology?', options: ['Using GPS, sensors, and data to optimize farming inputs', 'Traditional farming methods', 'Only large farm technology', 'Only for developed countries'], correct: 'Using GPS, sensors, and data to optimize farming inputs', explanation: 'Precision agriculture applies inputs precisely where needed using technology.', difficulty: 'Medium'
    },
    {
      id: 'agr11_mech_h1', question: 'How does appropriate mechanization differ from full mechanization?', options: ['Appropriate matches technology to local conditions; full replaces all manual labor', 'No difference', 'Appropriate is always better', 'Full is always better'], correct: 'Appropriate matches technology to local conditions; full replaces all manual labor', explanation: 'Appropriate mechanization considers farm size, economics, and local conditions.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mech_h2', question: 'What is the impact of mechanization on rural employment?', options: ['Displaces some labor but creates new skilled jobs and increases productivity', 'Only creates unemployment', 'Has no effect on employment', 'Increases all types of employment'], correct: 'Displaces some labor but creates new skilled jobs and increases productivity', explanation: 'Mechanization transforms rather than simply eliminates agricultural employment.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mech_h3', question: 'How do drones contribute to modern farming?', options: ['Crop monitoring, precision spraying, and field mapping', 'Only for photography', 'No agricultural use', 'Only for large farms in developed countries'], correct: 'Crop monitoring, precision spraying, and field mapping', explanation: 'Agricultural drones provide aerial data for informed field management decisions.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mech_h4', question: 'What is the concept of agricultural mechanization value chain?', options: ['The complete chain from manufacturing to after-sales support of farm machinery', 'Only selling machines', 'Only using machines', 'Only repairing machines'], correct: 'The complete chain from manufacturing to after-sales support of farm machinery', explanation: 'The mechanization value chain includes manufacturing, distribution, training, and maintenance.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mech_h5', question: 'How does mechanization affect soil health?', options: ['Can cause compaction but proper management minimizes negative effects', 'Always improves soil', 'Has no effect on soil', 'Always damages soil'], correct: 'Can cause compaction but proper management minimizes negative effects', explanation: 'Heavy machinery can compact soil, but controlled traffic and timing minimize damage.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mech_h6', question: 'What is the role of two-wheel tractors in smallholder mechanization?', options: ['Provide affordable power for small farms in developing countries', 'Only for large farms', 'Too weak for farming', 'Not suitable for Africa'], correct: 'Provide affordable power for small farms in developing countries', explanation: 'Two-wheel tractors offer an affordable entry point for smallholder mechanization.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mech_h7', question: 'How does solar-powered agricultural technology work?', options: ['Uses photovoltaic panels to power irrigation pumps and equipment', 'Only works in deserts', 'Too expensive to be practical', 'Cannot power farm equipment'], correct: 'Uses photovoltaic panels to power irrigation pumps and equipment', explanation: 'Solar technology provides clean energy for water pumping, processing, and lighting.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mech_h8', question: 'What is the economic analysis of farm mechanization investments?', options: ['Comparing costs of machinery with benefits of increased productivity and reduced labor', 'Only counting purchase price', 'Ignoring operating costs', 'Only considering fuel costs'], correct: 'Comparing costs of machinery with benefits of increased productivity and reduced labor', explanation: 'Economic analysis must consider all costs and benefits over the machine\'s useful life.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mech_h9', question: 'How can mechanization reduce post-harvest losses?', options: ['Timely harvesting and proper processing reduce spoilage and waste', 'Mechanization increases losses', 'No effect on losses', 'Only storage reduces losses'], correct: 'Timely harvesting and proper processing reduce spoilage and waste', explanation: 'Mechanical harvesting and processing are faster and more efficient, reducing crop losses.', difficulty: 'Hard'
    },
    {
      id: 'agr11_mech_h10', question: 'What is the future of smart farming and automation in agriculture?', options: ['AI, robotics, and IoT will transform farming efficiency and sustainability', 'Technology will not change farming', 'Only for wealthy countries', 'Robots will replace all farmers'], correct: 'AI, robotics, and IoT will transform farming efficiency and sustainability', explanation: 'Smart farming technologies promise greater precision, efficiency, and sustainability.', difficulty: 'Hard'
    }
  ],
  'Chapter 15: Introduction to Human Nutrition': [
    {
      id: 'agr11_nutri_e1', question: 'What is nutrition?', options: ['The process of obtaining and using food for growth and health', 'Only eating food', 'Cooking food', 'Buying food'], correct: 'The process of obtaining and using food for growth and health', explanation: 'Nutrition involves the intake and utilization of nutrients for body functions.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_e2', question: 'What are nutrients?', options: ['Substances in food that the body needs', 'Only vitamins', 'Only water', 'Only minerals'], correct: 'Substances in food that the body needs', explanation: 'Nutrients include carbohydrates, proteins, fats, vitamins, minerals, and water.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_e3', question: 'What are carbohydrates?', options: ['Energy-providing nutrients found in grains and fruits', 'Body-building nutrients', 'Protective nutrients', 'Water-soluble gases'], correct: 'Energy-providing nutrients found in grains and fruits', explanation: 'Carbohydrates are the body\'s primary source of energy.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_e4', question: 'What are proteins needed for?', options: ['Growth and repair of body tissues', 'Only energy', 'Only taste', 'Only digestion'], correct: 'Growth and repair of body tissues', explanation: 'Proteins are essential for building and repairing muscles, organs, and other body tissues.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_e5', question: 'Which food group provides the most protein?', options: ['Meat, fish, eggs, and legumes', 'Fruits only', 'Vegetables only', 'Grains only'], correct: 'Meat, fish, eggs, and legumes', explanation: 'Animal products and legumes are rich sources of dietary protein.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_e6', question: 'What is a balanced diet?', options: ['A diet containing all essential nutrients in proper proportions', 'Eating only one type of food', 'Eating as much as possible', 'Eating only vegetables'], correct: 'A diet containing all essential nutrients in proper proportions', explanation: 'A balanced diet provides the right amounts of all nutrients needed for health.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_e7', question: 'Why is water important for the body?', options: ['Essential for all body functions including digestion and temperature regulation', 'Only for drinking when thirsty', 'Only for cooking', 'Not important'], correct: 'Essential for all body functions including digestion and temperature regulation', explanation: 'Water is vital for digestion, nutrient transport, temperature control, and waste removal.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_e8', question: 'What are vitamins?', options: ['Essential nutrients needed in small amounts for body functions', 'Energy sources', 'Building materials', 'Types of protein'], correct: 'Essential nutrients needed in small amounts for body functions', explanation: 'Vitamins regulate body processes and protect against disease.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_e9', question: 'Which vitamin do we get from sunlight?', options: ['Vitamin D', 'Vitamin A', 'Vitamin C', 'Vitamin B12'], correct: 'Vitamin D', explanation: 'The skin produces Vitamin D when exposed to sunlight.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_e10', question: 'What is malnutrition?', options: ['A condition caused by inadequate or unbalanced nutrition', 'Eating too much', 'Normal health', 'A type of food'], correct: 'A condition caused by inadequate or unbalanced nutrition', explanation: 'Malnutrition results from deficiencies, excesses, or imbalances in nutrient intake.', difficulty: 'Easy'
    },
    {
      id: 'agr11_nutri_m1', question: 'What is the difference between macronutrients and micronutrients?', options: ['Macronutrients are needed in large amounts, micronutrients in small amounts', 'No difference', 'Micronutrients are more important', 'Macronutrients are only vitamins'], correct: 'Macronutrients are needed in large amounts, micronutrients in small amounts', explanation: 'Macronutrients (carbs, proteins, fats) provide energy; micronutrients (vitamins, minerals) regulate processes.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_m2', question: 'What is food security?', options: ['Having reliable access to sufficient, safe, and nutritious food', 'Having a lot of food stored', 'Only growing your own food', 'Importing all food'], correct: 'Having reliable access to sufficient, safe, and nutritious food', explanation: 'Food security means all people always have access to adequate and nutritious food.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_m3', question: 'What is iron deficiency and how does it affect health?', options: ['Lack of iron causing anemia, fatigue, and impaired cognitive function', 'Too much iron', 'A vitamin deficiency', 'A carbohydrate problem'], correct: 'Lack of iron causing anemia, fatigue, and impaired cognitive function', explanation: 'Iron deficiency is the most common nutrient deficiency worldwide, causing anemia.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_m4', question: 'What is the role of dietary fiber?', options: ['Aids digestion, prevents constipation, and supports gut health', 'Provides energy only', 'Not needed by the body', 'Only found in supplements'], correct: 'Aids digestion, prevents constipation, and supports gut health', explanation: 'Fiber promotes digestive health and helps prevent various diseases.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_m5', question: 'What is food fortification?', options: ['Adding essential nutrients to commonly consumed foods', 'Making food taste better', 'Preserving food longer', 'Making food more expensive'], correct: 'Adding essential nutrients to commonly consumed foods', explanation: 'Fortification addresses nutrient deficiencies by enriching staple foods with vitamins and minerals.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_m6', question: 'What are the consequences of protein-energy malnutrition?', options: ['Stunted growth, weakened immunity, and impaired development', 'Only weight loss', 'No serious consequences', 'Only affects adults'], correct: 'Stunted growth, weakened immunity, and impaired development', explanation: 'Protein-energy malnutrition has severe effects especially on children\'s growth and development.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_m7', question: 'What is the importance of calcium in the diet?', options: ['Essential for strong bones and teeth, nerve function, and muscle contraction', 'Only for bones', 'Not essential', 'Only needed by children'], correct: 'Essential for strong bones and teeth, nerve function, and muscle contraction', explanation: 'Calcium plays vital roles in skeletal health, nerve signaling, and muscle function.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_m8', question: 'What is Vitamin A deficiency?', options: ['A condition causing night blindness and weakened immunity', 'Too much Vitamin A', 'A type of food allergy', 'Only affects eyesight'], correct: 'A condition causing night blindness and weakened immunity', explanation: 'Vitamin A deficiency is a major public health issue causing blindness and increased infections.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_m9', question: 'What is the food pyramid?', options: ['A visual guide showing recommended proportions of food groups', 'A type of cooking method', 'A storage structure', 'A type of food processing'], correct: 'A visual guide showing recommended proportions of food groups', explanation: 'The food pyramid illustrates recommended daily food intake from each food group.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_m10', question: 'How does breastfeeding contribute to infant nutrition?', options: ['Provides complete nutrition, antibodies, and promotes bonding', 'Only provides water', 'Is not nutritious', 'Only useful for the first week'], correct: 'Provides complete nutrition, antibodies, and promotes bonding', explanation: 'Breast milk provides optimal nutrition and immune protection for infants.', difficulty: 'Medium'
    },
    {
      id: 'agr11_nutri_h1', question: 'How does the double burden of malnutrition affect developing countries?', options: ['Coexistence of undernutrition and obesity/diet-related diseases', 'Only undernutrition exists', 'Only obesity exists', 'Not a real problem'], correct: 'Coexistence of undernutrition and obesity/diet-related diseases', explanation: 'Many developing countries now face both undernutrition and rising rates of overweight.', difficulty: 'Hard'
    },
    {
      id: 'agr11_nutri_h2', question: 'What is biofortification?', options: ['Breeding crops to increase their nutritional content', 'Adding supplements to food', 'Genetic modification only', 'Using fertilizers'], correct: 'Breeding crops to increase their nutritional content', explanation: 'Biofortification uses conventional breeding to develop more nutritious crop varieties.', difficulty: 'Hard'
    },
    {
      id: 'agr11_nutri_h3', question: 'How does the first 1000 days concept relate to nutrition?', options: ['Nutrition from conception to age 2 determines lifelong health and development', 'Only applies to adults', 'Nutrition timing does not matter', 'Only relevant for the first month'], correct: 'Nutrition from conception to age 2 determines lifelong health and development', explanation: 'The first 1000 days is a critical window when nutrition has the greatest impact on development.', difficulty: 'Hard'
    },
    {
      id: 'agr11_nutri_h4', question: 'What is the role of gut microbiome in human nutrition?', options: ['Aids digestion, nutrient absorption, and immune function', 'Has no role in nutrition', 'Only causes disease', 'Only affects taste preferences'], correct: 'Aids digestion, nutrient absorption, and immune function', explanation: 'The gut microbiome is essential for proper nutrient metabolism and overall health.', difficulty: 'Hard'
    },
    {
      id: 'agr11_nutri_h5', question: 'How does nutrition-sensitive agriculture work?', options: ['Designing agricultural interventions to improve nutritional outcomes', 'Only increasing crop yield', 'Only growing cash crops', 'Ignoring nutrition in farming'], correct: 'Designing agricultural interventions to improve nutritional outcomes', explanation: 'Nutrition-sensitive agriculture aligns food production with nutritional needs.', difficulty: 'Hard'
    },
    {
      id: 'agr11_nutri_h6', question: 'What is the concept of hidden hunger?', options: ['Micronutrient deficiencies without obvious hunger symptoms', 'Eating in secret', 'Not feeling hungry', 'Eating too much'], correct: 'Micronutrient deficiencies without obvious hunger symptoms', explanation: 'Hidden hunger affects billions who eat enough calories but lack essential vitamins and minerals.', difficulty: 'Hard'
    },
    {
      id: 'agr11_nutri_h7', question: 'How do food systems influence dietary patterns?', options: ['Production, processing, distribution, and marketing shape what people eat', 'Food systems have no influence', 'Only price matters', 'Only culture determines diet'], correct: 'Production, processing, distribution, and marketing shape what people eat', explanation: 'Food systems determine the availability, affordability, and desirability of foods.', difficulty: 'Hard'
    },
    {
      id: 'agr11_nutri_h8', question: 'What is the relationship between poverty and malnutrition?', options: ['Poverty limits food access, dietary diversity, and healthcare', 'No relationship', 'Only rich people are malnourished', 'Poverty improves nutrition'], correct: 'Poverty limits food access, dietary diversity, and healthcare', explanation: 'Poverty is a root cause of malnutrition through limited food access and health services.', difficulty: 'Hard'
    },
    {
      id: 'agr11_nutri_h9', question: 'What are the nutritional challenges during adolescence?', options: ['Increased nutrient needs for rapid growth, often unmet by poor diets', 'No special needs', 'Adolescents need less food', 'Only protein needs increase'], correct: 'Increased nutrient needs for rapid growth, often unmet by poor diets', explanation: 'Adolescents have high nutrient requirements that are often not met, affecting lifelong health.', difficulty: 'Hard'
    },
    {
      id: 'agr11_nutri_h10', question: 'How can school feeding programs improve nutrition and education?', options: ['Provide nutritious meals that improve attendance, concentration, and learning', 'Only improve attendance', 'Have no nutritional benefit', 'Only benefit wealthy students'], correct: 'Provide nutritious meals that improve attendance, concentration, and learning', explanation: 'School feeding programs address hunger while supporting educational outcomes.', difficulty: 'Hard'
    }
  ],
  'Chapter 16: Diversified Food Production and Consumption': [
    {
      id: 'agr11_divfood_e1', question: 'What is food diversification?', options: ['Producing and eating a variety of different foods', 'Eating only one type of food', 'Only buying imported food', 'Eating less food'], correct: 'Producing and eating a variety of different foods', explanation: 'Food diversification means including many different foods in production and diet.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_e2', question: 'Why should we eat different types of food?', options: ['To get all the nutrients our body needs', 'One food provides everything', 'Variety does not matter', 'Only for taste'], correct: 'To get all the nutrients our body needs', explanation: 'No single food provides all needed nutrients; diversity ensures complete nutrition.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_e3', question: 'What is a home garden?', options: ['A small garden near the house for growing food', 'A flower garden only', 'A large commercial farm', 'A public park'], correct: 'A small garden near the house for growing food', explanation: 'Home gardens provide families with fresh vegetables, fruits, and herbs.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_e4', question: 'What is food processing?', options: ['Changing raw food into different forms for consumption or storage', 'Only cooking food', 'Only eating raw food', 'Throwing away food'], correct: 'Changing raw food into different forms for consumption or storage', explanation: 'Food processing includes methods like drying, fermenting, and canning.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_e5', question: 'What is food preservation?', options: ['Methods to prevent food from spoiling', 'Making food spoil faster', 'Only refrigeration', 'Only canning'], correct: 'Methods to prevent food from spoiling', explanation: 'Food preservation extends shelf life through drying, smoking, salting, or other methods.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_e6', question: 'Which is an example of a traditional Ethiopian food?', options: ['Injera', 'Pizza', 'Sushi', 'Hamburger'], correct: 'Injera', explanation: 'Injera is a traditional Ethiopian flatbread made from teff flour.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_e7', question: 'What are legumes?', options: ['Plants that produce seeds in pods, like beans and lentils', 'Root vegetables', 'Fruits', 'Cereals'], correct: 'Plants that produce seeds in pods, like beans and lentils', explanation: 'Legumes are protein-rich plants including beans, lentils, and peas.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_e8', question: 'What is poultry farming?', options: ['Raising chickens and other birds for eggs and meat', 'Growing vegetables', 'Raising cattle', 'Growing grains'], correct: 'Raising chickens and other birds for eggs and meat', explanation: 'Poultry farming produces eggs and meat from domesticated birds.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_e9', question: 'What is beekeeping?', options: ['Managing bee colonies for honey production', 'Catching wild bees', 'Killing bees', 'Buying honey from stores'], correct: 'Managing bee colonies for honey production', explanation: 'Beekeeping (apiculture) involves managing hives for honey and beeswax production.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_e10', question: 'What is fish farming?', options: ['Raising fish in controlled environments', 'Catching wild fish', 'Cooking fish', 'Selling fish at market'], correct: 'Raising fish in controlled environments', explanation: 'Fish farming (aquaculture) raises fish in ponds, tanks, or cages for food.', difficulty: 'Easy'
    },
    {
      id: 'agr11_divfood_m1', question: 'How does crop diversification improve food security?', options: ['Reduces risk, improves nutrition, and increases income sources', 'Increases risk', 'Has no effect', 'Only benefits large farmers'], correct: 'Reduces risk, improves nutrition, and increases income sources', explanation: 'Growing diverse crops provides dietary variety and reduces vulnerability to crop failure.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_m2', question: 'What is value addition in food production?', options: ['Processing raw products to increase their market value', 'Selling raw produce only', 'Reducing food quality', 'Throwing away by-products'], correct: 'Processing raw products to increase their market value', explanation: 'Value addition transforms raw agricultural products into higher-value processed goods.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_m3', question: 'What is integrated farming?', options: ['Combining crop and animal production on the same farm', 'Growing only one crop', 'Raising only animals', 'Using only machines'], correct: 'Combining crop and animal production on the same farm', explanation: 'Integrated farming creates synergies between crop and livestock production.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_m4', question: 'What is food safety?', options: ['Ensuring food is free from harmful contaminants', 'Making food taste good', 'Making food look attractive', 'Storing food anywhere'], correct: 'Ensuring food is free from harmful contaminants', explanation: 'Food safety practices prevent contamination and foodborne illness.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_m5', question: 'How does mushroom cultivation contribute to food diversification?', options: ['Provides nutritious protein-rich food from agricultural waste', 'Has no nutritional value', 'Requires large farms', 'Only for export'], correct: 'Provides nutritious protein-rich food from agricultural waste', explanation: 'Mushrooms can be grown on crop residues, providing an additional nutritious food source.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_m6', question: 'What is the role of indigenous crops in food diversification?', options: ['Provide adapted, nutritious, and culturally appropriate food options', 'Are less nutritious', 'Should be replaced by exotic crops', 'Have no market value'], correct: 'Provide adapted, nutritious, and culturally appropriate food options', explanation: 'Indigenous crops like teff and enset are well-adapted and nutritionally valuable.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_m7', question: 'What is food waste and why is it a problem?', options: ['Discarded edible food that wastes resources and contributes to hunger', 'Not a problem', 'Only a rich country problem', 'Waste is unavoidable'], correct: 'Discarded edible food that wastes resources and contributes to hunger', explanation: 'Food waste represents lost resources and missed opportunities to feed people.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_m8', question: 'How can small-scale irrigation support diversified food production?', options: ['Enables year-round production of vegetables and fruits', 'Only for large farms', 'Too expensive for small farms', 'Not effective for vegetables'], correct: 'Enables year-round production of vegetables and fruits', explanation: 'Small-scale irrigation allows farmers to grow diverse crops beyond the rainy season.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_m9', question: 'What is a school garden?', options: ['A garden at school where students learn to grow food', 'A commercial farm', 'A decorative garden only', 'A teacher\'s private garden'], correct: 'A garden at school where students learn to grow food', explanation: 'School gardens teach agriculture and nutrition while providing fresh food.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_m10', question: 'What are the benefits of consuming locally produced food?', options: ['Fresher, supports local economy, and reduces transportation impacts', 'No benefits', 'Always more expensive', 'Lower quality than imported food'], correct: 'Fresher, supports local economy, and reduces transportation impacts', explanation: 'Local food systems provide economic, environmental, and nutritional benefits.', difficulty: 'Medium'
    },
    {
      id: 'agr11_divfood_h1', question: 'How do food systems transformation contribute to sustainable development?', options: ['Improve nutrition, livelihoods, and environmental sustainability simultaneously', 'Only improve economics', 'Have no impact on sustainability', 'Only benefit urban areas'], correct: 'Improve nutrition, livelihoods, and environmental sustainability simultaneously', explanation: 'Transforming food systems can address multiple sustainable development goals.', difficulty: 'Hard'
    },
    {
      id: 'agr11_divfood_h2', question: 'What is the role of agro-processing in economic development?', options: ['Creates jobs, adds value, and connects farmers to markets', 'Only benefits processors', 'Reduces food quality', 'Has no economic impact'], correct: 'Creates jobs, adds value, and connects farmers to markets', explanation: 'Agro-processing is a key driver of rural economic development and industrialization.', difficulty: 'Hard'
    },
    {
      id: 'agr11_divfood_h3', question: 'How does urbanization affect food production and consumption patterns?', options: ['Shifts demand toward processed foods and challenges supply chains', 'Has no effect', 'Improves all food systems', 'Only reduces consumption'], correct: 'Shifts demand toward processed foods and challenges supply chains', explanation: 'Urban growth creates new demands on food systems and changes dietary patterns.', difficulty: 'Hard'
    },
    {
      id: 'agr11_divfood_h4', question: 'What is the concept of nutrition-sensitive value chains?', options: ['Designing food supply chains to maximize nutritional outcomes', 'Only maximizing profit', 'Ignoring nutrition in business', 'Only about food safety'], correct: 'Designing food supply chains to maximize nutritional outcomes', explanation: 'Nutrition-sensitive value chains consider nutritional impact at every stage from production to consumption.', difficulty: 'Hard'
    },
    {
      id: 'agr11_divfood_h5', question: 'How can traditional food knowledge be integrated with modern nutrition science?', options: ['Combining indigenous food practices with scientific evidence for better outcomes', 'Traditional knowledge is obsolete', 'Only modern science matters', 'They cannot be combined'], correct: 'Combining indigenous food practices with scientific evidence for better outcomes', explanation: 'Integrating traditional and modern knowledge creates more effective and culturally appropriate nutrition strategies.', difficulty: 'Hard'
    },
    {
      id: 'agr11_divfood_h6', question: 'What is the circular economy approach in food systems?', options: ['Minimizing waste by reusing, recycling, and recovering resources', 'Linear production and disposal', 'Producing more waste', 'Only about recycling packaging'], correct: 'Minimizing waste by reusing, recycling, and recovering resources', explanation: 'Circular food systems design out waste and keep resources in productive use.', difficulty: 'Hard'
    },
    {
      id: 'agr11_divfood_h7', question: 'How does gender equality affect food production and nutrition?', options: ['Women\'s empowerment improves agricultural productivity and family nutrition', 'Gender has no effect', 'Only men contribute to food production', 'Only affects developed countries'], correct: 'Women\'s empowerment improves agricultural productivity and family nutrition', explanation: 'Women play crucial roles in food production and are key to improving household nutrition.', difficulty: 'Hard'
    },
    {
      id: 'agr11_divfood_h8', question: 'What is the role of digital technology in diversified food systems?', options: ['Connects farmers to markets, provides information, and improves efficiency', 'Technology is irrelevant to food', 'Only for large companies', 'Increases food waste'], correct: 'Connects farmers to markets, provides information, and improves efficiency', explanation: 'Digital platforms enable market access, extension services, and supply chain efficiency.', difficulty: 'Hard'
    },
    {
      id: 'agr11_divfood_h9', question: 'How can climate-resilient food production be achieved through diversification?', options: ['Multiple crops and livestock spread risk and maintain production under stress', 'Only one resilient crop is needed', 'Diversification increases vulnerability', 'Climate does not affect food production'], correct: 'Multiple crops and livestock spread risk and maintain production under stress', explanation: 'Diversified systems are more resilient to climate shocks than monoculture systems.', difficulty: 'Hard'
    },
    {
      id: 'agr11_divfood_h10', question: 'What is the concept of food sovereignty?', options: ['The right of peoples to define their own food and agriculture systems', 'Government control of all food', 'Free market food systems only', 'Importing all food from abroad'], correct: 'The right of peoples to define their own food and agriculture systems', explanation: 'Food sovereignty prioritizes local food production, cultural food practices, and community control.', difficulty: 'Hard'
    }
  ]
};

export const getGrade11AgricultureQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): AgricultureQuestion[] => {
  const chapterQuestions = grade11AgricultureQuestions[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  
  // Shuffle and return requested count
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

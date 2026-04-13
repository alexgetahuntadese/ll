export interface EnglishQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12EnglishQuestions: { [chapter: string]: EnglishQuestion[] } = {
  "Unit 1: Sustainable Development": [
    // Easy Questions
    {
      id: "eng12_sus_e1",
      question: "What does sustainable development mean?",
      options: ["Development that meets present needs without compromising future generations", "Fast economic growth", "Industrial expansion only", "Population growth"],
      correct: "Development that meets present needs without compromising future generations",
      explanation: "Sustainable development balances economic, social, and environmental needs to ensure future generations can meet their needs.",
      difficulty: "Easy"
    },
    {
      id: "eng12_sus_e2",
      question: "Which of the following is an example of renewable energy?",
      options: ["Coal", "Solar power", "Oil", "Natural gas"],
      correct: "Solar power",
      explanation: "Solar power is renewable because the sun provides a continuous source of energy that doesn't deplete over time.",
      difficulty: "Easy"
    },
    {
      id: "eng12_sus_e3",
      question: "What are the three pillars of sustainable development?",
      options: ["Economic, social, environmental", "Political, economic, cultural", "Education, health, economy", "Technology, science, industry"],
      correct: "Economic, social, environmental",
      explanation: "The three pillars of sustainable development are economic prosperity, social equity, and environmental protection.",
      difficulty: "Easy"
    },
    {
      id: "eng12_sus_e4",
      question: "Which activity helps reduce carbon footprint?",
      options: ["Using more plastic", "Recycling materials", "Burning fossil fuels", "Cutting down forests"],
      correct: "Recycling materials",
      explanation: "Recycling reduces waste and energy consumption, thereby lowering carbon emissions.",
      difficulty: "Easy"
    },
    {
      id: "eng12_sus_e5",
      question: "What does 'going green' typically refer to?",
      options: ["Painting everything green", "Adopting environmentally friendly practices", "Growing more plants", "Using green technology only"],
      correct: "Adopting environmentally friendly practices",
      explanation: "'Going green' means adopting practices that are environmentally responsible and sustainable.",
      difficulty: "Easy"
    },
    {
      id: "eng12_sus_e6",
      question: "Which is a major threat to sustainable development?",
      options: ["Climate change", "Education", "Healthcare", "Communication"],
      correct: "Climate change",
      explanation: "Climate change poses significant threats to economic, social, and environmental sustainability.",
      difficulty: "Easy"
    },
    {
      id: "eng12_sus_e7",
      question: "What is biodiversity?",
      options: ["Variety of life forms in an ecosystem", "Number of people in an area", "Types of buildings", "Different languages"],
      correct: "Variety of life forms in an ecosystem",
      explanation: "Biodiversity refers to the variety of plants, animals, and microorganisms in an ecosystem.",
      difficulty: "Easy"
    },
    {
      id: "eng12_sus_e8",
      question: "Which practice supports sustainable agriculture?",
      options: ["Crop rotation", "Excessive pesticide use", "Monoculture farming", "Soil depletion"],
      correct: "Crop rotation",
      explanation: "Crop rotation helps maintain soil fertility and reduces pest problems naturally.",
      difficulty: "Easy"
    },
    {
      id: "eng12_sus_e9",
      question: "What is the main goal of the UN Sustainable Development Goals?",
      options: ["Economic growth only", "Global peace and prosperity", "Technology advancement", "Space exploration"],
      correct: "Global peace and prosperity",
      explanation: "The UN SDGs aim to achieve peace, prosperity, and environmental protection for all by 2030.",
      difficulty: "Easy"
    },
    {
      id: "eng12_sus_e10",
      question: "Which resource is considered non-renewable?",
      options: ["Wind", "Water", "Coal", "Solar energy"],
      correct: "Coal",
      explanation: "Coal is a fossil fuel that takes millions of years to form and cannot be replenished on human timescales.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_sus_m1",
      question: "How does sustainable development address the concept of intergenerational equity?",
      options: ["By ensuring future generations have equal access to resources", "By focusing only on present needs", "By prioritizing economic growth", "By limiting population growth"],
      correct: "By ensuring future generations have equal access to resources",
      explanation: "Intergenerational equity in sustainable development means ensuring that future generations have the same opportunities and resources as the present generation.",
      difficulty: "Medium"
    },
    {
      id: "eng12_sus_m2",
      question: "What is the relationship between poverty and environmental degradation?",
      options: ["They are unrelated", "Poverty often leads to environmental degradation", "Rich countries cause all environmental problems", "Environmental protection reduces poverty"],
      correct: "Poverty often leads to environmental degradation",
      explanation: "Poverty can force people to overexploit natural resources for survival, leading to environmental degradation.",
      difficulty: "Medium"
    },
    {
      id: "eng12_sus_m3",
      question: "Which approach best describes sustainable consumption?",
      options: ["Buying more products", "Meeting needs while minimizing environmental impact", "Consuming only organic products", "Avoiding all consumption"],
      correct: "Meeting needs while minimizing environmental impact",
      explanation: "Sustainable consumption involves meeting our needs while reducing waste and environmental impact.",
      difficulty: "Medium"
    },
    {
      id: "eng12_sus_m4",
      question: "How does urbanization impact sustainable development?",
      options: ["It always helps sustainability", "It creates both opportunities and challenges", "It has no impact", "It only creates problems"],
      correct: "It creates both opportunities and challenges",
      explanation: "Urbanization can improve efficiency and services but also increases resource consumption and environmental pressures.",
      difficulty: "Medium"
    },
    {
      id: "eng12_sus_m5",
      question: "What role does education play in sustainable development?",
      options: ["It's not important", "It empowers people to make informed decisions", "It only focuses on technology", "It slows development"],
      correct: "It empowers people to make informed decisions",
      explanation: "Education enables people to understand sustainability issues and make informed choices for sustainable living.",
      difficulty: "Medium"
    },
    {
      id: "eng12_sus_m6",
      question: "How does the circular economy differ from the linear economy?",
      options: ["It focuses on reuse and recycling", "It uses more resources", "It creates more waste", "It's the same as linear economy"],
      correct: "It focuses on reuse and recycling",
      explanation: "The circular economy minimizes waste by keeping materials in use through reuse, recycling, and regeneration.",
      difficulty: "Medium"
    },
    {
      id: "eng12_sus_m7",
      question: "What is meant by 'ecological footprint'?",
      options: ["The size of your feet", "The amount of land needed to sustain a lifestyle", "Walking in nature", "Building eco-friendly houses"],
      correct: "The amount of land needed to sustain a lifestyle",
      explanation: "Ecological footprint measures the land and water area required to sustain a person's or population's lifestyle.",
      difficulty: "Medium"
    },
    {
      id: "eng12_sus_m8",
      question: "How does gender equality contribute to sustainable development?",
      options: ["It doesn't contribute", "It ensures all people can participate in development", "It only benefits women", "It slows economic growth"],
      correct: "It ensures all people can participate in development",
      explanation: "Gender equality enables full participation of all people in sustainable development processes and decision-making.",
      difficulty: "Medium"
    },
    {
      id: "eng12_sus_m9",
      question: "What is the precautionary principle in environmental policy?",
      options: ["Taking action only after damage occurs", "Acting to prevent harm even without complete scientific certainty", "Avoiding all risks", "Waiting for perfect information"],
      correct: "Acting to prevent harm even without complete scientific certainty",
      explanation: "The precautionary principle suggests taking preventive action against potential environmental harm even when scientific evidence is incomplete.",
      difficulty: "Medium"
    },
    {
      id: "eng12_sus_m10",
      question: "How does sustainable development address global inequality?",
      options: ["It ignores inequality", "It promotes equitable distribution of benefits", "It increases inequality", "It only helps rich countries"],
      correct: "It promotes equitable distribution of benefits",
      explanation: "Sustainable development aims to reduce inequality by ensuring fair distribution of development benefits and opportunities.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_sus_h1",
      question: "Analyze the paradox between economic growth and environmental sustainability in developing countries.",
      options: ["They are always compatible", "Growth is necessary but can conflict with sustainability goals", "Sustainability prevents all growth", "There is no paradox"],
      correct: "Growth is necessary but can conflict with sustainability goals",
      explanation: "Developing countries need economic growth to reduce poverty, but traditional growth models can harm the environment, creating a complex challenge for sustainable development.",
      difficulty: "Hard"
    },
    {
      id: "eng12_sus_h2",
      question: "How do multinational corporations impact sustainable development in developing countries?",
      options: ["They always help", "They can bring benefits but also create challenges", "They always harm development", "They have no impact"],
      correct: "They can bring benefits but also create challenges",
      explanation: "Multinational corporations can bring investment and technology but may also exploit resources, create dependency, or ignore local sustainability concerns.",
      difficulty: "Hard"
    },
    {
      id: "eng12_sus_h3",
      question: "Evaluate the effectiveness of international climate agreements in achieving sustainable development.",
      options: ["They are completely effective", "They provide frameworks but face implementation challenges", "They are completely ineffective", "They are unnecessary"],
      correct: "They provide frameworks but face implementation challenges",
      explanation: "International climate agreements like the Paris Agreement create important frameworks, but their effectiveness depends on national implementation and enforcement.",
      difficulty: "Hard"
    },
    {
      id: "eng12_sus_h4",
      question: "How does the concept of 'planetary boundaries' relate to sustainable development?",
      options: ["It's unrelated to sustainability", "It defines safe operating spaces for humanity", "It limits economic growth completely", "It only applies to developed countries"],
      correct: "It defines safe operating spaces for humanity",
      explanation: "Planetary boundaries identify nine Earth system processes within which humanity can operate safely, providing a scientific foundation for sustainable development.",
      difficulty: "Hard"
    },
    {
      id: "eng12_sus_h5",
      question: "What are the implications of the 'tragedy of the commons' for sustainable resource management?",
      options: ["Individual rational behavior always leads to collective benefit", "Shared resources may be overexploited without proper governance", "Private ownership solves all problems", "Government control is always best"],
      correct: "Shared resources may be overexploited without proper governance",
      explanation: "The tragedy of the commons shows how shared resources can be depleted when individuals act in self-interest without considering collective consequences.",
      difficulty: "Hard"
    },
    {
      id: "eng12_sus_h6",
      question: "How does the transition to a low-carbon economy challenge traditional economic models?",
      options: ["It doesn't challenge them", "It requires fundamental changes in production and consumption", "It only affects energy sectors", "It makes economics simpler"],
      correct: "It requires fundamental changes in production and consumption",
      explanation: "Transitioning to a low-carbon economy requires rethinking economic models, pricing carbon externalities, and developing new sustainable industries.",
      difficulty: "Hard"
    },
    {
      id: "eng12_sus_h7",
      question: "Analyze the role of technology transfer in achieving global sustainable development.",
      options: ["It's not important", "It's crucial but faces barriers in implementation", "It automatically solves all problems", "It only benefits rich countries"],
      correct: "It's crucial but faces barriers in implementation",
      explanation: "Technology transfer is essential for sustainable development but faces challenges including intellectual property rights, capacity building, and adaptation to local contexts.",
      difficulty: "Hard"
    },
    {
      id: "eng12_sus_h8",
      question: "How do cultural values and traditional knowledge systems contribute to sustainable development?",
      options: ["They are obstacles to development", "They provide valuable insights for sustainability", "They are irrelevant in modern times", "They only apply to rural areas"],
      correct: "They provide valuable insights for sustainability",
      explanation: "Traditional knowledge systems often contain sustainable practices developed over centuries and can inform modern sustainability approaches.",
      difficulty: "Hard"
    },
    {
      id: "eng12_sus_h9",
      question: "What are the systemic barriers to implementing sustainable development at scale?",
      options: ["There are no barriers", "Political, economic, and social structures resist change", "Only technical barriers exist", "Individual attitudes are the only barrier"],
      correct: "Political, economic, and social structures resist change",
      explanation: "Implementing sustainable development faces systemic barriers including entrenched interests, institutional inertia, and conflicting short-term versus long-term incentives.",
      difficulty: "Hard"
    },
    {
      id: "eng12_sus_h10",
      question: "How does the financialization of nature through ecosystem services impact sustainable development?",
      options: ["It has no impact", "It can help conservation but may commodify nature", "It always benefits the environment", "It only creates problems"],
      correct: "It can help conservation but may commodify nature",
      explanation: "Putting economic value on ecosystem services can incentivize conservation but raises concerns about commodifying nature and potentially excluding local communities.",
      difficulty: "Hard"
    }
  ],

  "Unit 2: Time Management": [
    // Easy Questions
    {
      id: "eng12_time_e1",
      question: "What is time management?",
      options: ["Wasting time effectively", "The process of planning and controlling time spent on activities", "Working without breaks", "Doing everything at once"],
      correct: "The process of planning and controlling time spent on activities",
      explanation: "Time management involves organizing and planning how to divide time between specific activities to maximize efficiency and productivity.",
      difficulty: "Easy"
    },
    {
      id: "eng12_time_e2",
      question: "Which tool is commonly used for time management?",
      options: ["Calendar", "Television", "Video games", "Social media"],
      correct: "Calendar",
      explanation: "Calendars help organize and schedule activities, making them essential tools for effective time management.",
      difficulty: "Easy"
    },
    {
      id: "eng12_time_e3",
      question: "What does prioritizing tasks mean?",
      options: ["Doing tasks randomly", "Arranging tasks in order of importance", "Avoiding all tasks", "Doing easy tasks only"],
      correct: "Arranging tasks in order of importance",
      explanation: "Prioritizing involves ranking tasks based on their importance and urgency to ensure the most critical work gets done first.",
      difficulty: "Easy"
    },
    {
      id: "eng12_time_e4",
      question: "What is procrastination?",
      options: ["Completing tasks early", "Delaying or postponing tasks", "Working efficiently", "Planning ahead"],
      correct: "Delaying or postponing tasks",
      explanation: "Procrastination is the habit of delaying important tasks, often leading to stress and reduced productivity.",
      difficulty: "Easy"
    },
    {
      id: "eng12_time_e5",
      question: "Why is setting goals important for time management?",
      options: ["It wastes time", "It provides direction and focus", "It creates confusion", "It's not important"],
      correct: "It provides direction and focus",
      explanation: "Setting clear goals helps prioritize activities and ensures time is spent on tasks that contribute to desired outcomes.",
      difficulty: "Easy"
    },
    {
      id: "eng12_time_e6",
      question: "What is a deadline?",
      options: ["The start of a project", "A specific time by which something must be completed", "A break time", "An optional suggestion"],
      correct: "A specific time by which something must be completed",
      explanation: "A deadline is a fixed point in time by which a task or project must be finished.",
      difficulty: "Easy"
    },
    {
      id: "eng12_time_e7",
      question: "Which activity is a time waster?",
      options: ["Planning your day", "Excessive social media browsing", "Studying for exams", "Exercising"],
      correct: "Excessive social media browsing",
      explanation: "While social media has its place, excessive browsing can consume large amounts of time without productive outcomes.",
      difficulty: "Easy"
    },
    {
      id: "eng12_time_e8",
      question: "What does 'work-life balance' mean?",
      options: ["Working all the time", "Balancing professional and personal activities", "Never working", "Only focusing on life"],
      correct: "Balancing professional and personal activities",
      explanation: "Work-life balance involves managing time to ensure both professional responsibilities and personal well-being are addressed.",
      difficulty: "Easy"
    },
    {
      id: "eng12_time_e9",
      question: "What is multitasking?",
      options: ["Doing one task at a time", "Attempting to do multiple tasks simultaneously", "Avoiding all tasks", "Completing tasks slowly"],
      correct: "Attempting to do multiple tasks simultaneously",
      explanation: "Multitasking involves trying to handle multiple tasks at the same time, though research shows it can reduce efficiency.",
      difficulty: "Easy"
    },
    {
      id: "eng12_time_e10",
      question: "Why should you schedule breaks in your daily routine?",
      options: ["To waste time", "To maintain energy and focus", "To avoid work", "Breaks are unnecessary"],
      correct: "To maintain energy and focus",
      explanation: "Regular breaks help prevent burnout, maintain concentration, and improve overall productivity.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_time_m1",
      question: "How does the Eisenhower Matrix help with time management?",
      options: ["It creates more tasks", "It categorizes tasks by urgency and importance", "It eliminates all tasks", "It makes decisions harder"],
      correct: "It categorizes tasks by urgency and importance",
      explanation: "The Eisenhower Matrix divides tasks into four quadrants based on urgency and importance, helping prioritize what to do first.",
      difficulty: "Medium"
    },
    {
      id: "eng12_time_m2",
      question: "What is the Pomodoro Technique?",
      options: ["A cooking method", "Working in focused 25-minute intervals with breaks", "A type of calendar", "A procrastination strategy"],
      correct: "Working in focused 25-minute intervals with breaks",
      explanation: "The Pomodoro Technique involves working for 25 minutes, then taking a 5-minute break, to maintain focus and prevent burnout.",
      difficulty: "Medium"
    },
    {
      id: "eng12_time_m3",
      question: "How does poor time management affect academic performance?",
      options: ["It improves grades", "It leads to stress, missed deadlines, and lower quality work", "It has no effect", "It only affects social life"],
      correct: "It leads to stress, missed deadlines, and lower quality work",
      explanation: "Poor time management results in rushed work, missed assignments, increased stress, and ultimately lower academic achievement.",
      difficulty: "Medium"
    },
    {
      id: "eng12_time_m4",
      question: "What is the relationship between time management and stress?",
      options: ["Good time management increases stress", "Effective time management reduces stress", "There's no relationship", "Stress improves time management"],
      correct: "Effective time management reduces stress",
      explanation: "Proper time management reduces the pressure of last-minute rushes and helps maintain a sense of control, thereby reducing stress.",
      difficulty: "Medium"
    },
    {
      id: "eng12_time_m5",
      question: "How can technology both help and hinder time management?",
      options: ["Technology only helps", "It can organize tasks but also create distractions", "Technology only hinders", "Technology has no impact"],
      correct: "It can organize tasks but also create distractions",
      explanation: "Technology provides useful tools like calendars and apps, but can also be a source of distraction through social media and entertainment.",
      difficulty: "Medium"
    },
    {
      id: "eng12_time_m6",
      question: "What is time blocking and how does it work?",
      options: ["Ignoring time completely", "Allocating specific time periods for different activities", "Working without schedules", "Blocking access to clocks"],
      correct: "Allocating specific time periods for different activities",
      explanation: "Time blocking involves dedicating specific blocks of time to particular tasks or activities, helping maintain focus and structure.",
      difficulty: "Medium"
    },
    {
      id: "eng12_time_m7",
      question: "How does delegation help with time management?",
      options: ["It wastes time", "It allows focus on high-priority tasks by assigning others appropriate work", "It creates more work", "Delegation is impossible"],
      correct: "It allows focus on high-priority tasks by assigning others appropriate work",
      explanation: "Delegation frees up time for important tasks by distributing work to others who can handle specific responsibilities effectively.",
      difficulty: "Medium"
    },
    {
      id: "eng12_time_m8",
      question: "What role does energy management play in time management?",
      options: ["Energy and time are unrelated", "Managing energy levels helps optimize productive time", "Energy management wastes time", "Only time matters"],
      correct: "Managing energy levels helps optimize productive time",
      explanation: "Understanding your energy patterns helps schedule demanding tasks when you're most alert and reserve low-energy times for routine work.",
      difficulty: "Medium"
    },
    {
      id: "eng12_time_m9",
      question: "How can saying 'no' improve time management?",
      options: ["It creates enemies", "It protects time for important priorities", "It's always rude", "It doesn't help"],
      correct: "It protects time for important priorities",
      explanation: "Learning to decline non-essential requests helps protect time for high-priority activities and prevents overcommitment.",
      difficulty: "Medium"
    },
    {
      id: "eng12_time_m10",
      question: "What is the difference between being busy and being productive?",
      options: ["They're the same thing", "Being busy means doing many things; being productive means accomplishing meaningful goals", "Busy is better than productive", "Productive means working slowly"],
      correct: "Being busy means doing many things; being productive means accomplishing meaningful goals",
      explanation: "Being busy involves activity without necessarily achieving important outcomes, while productivity focuses on meaningful accomplishments aligned with goals.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_time_h1",
      question: "Analyze how cultural differences in time perception affect international business and academic collaboration.",
      options: ["Culture doesn't affect time perception", "Different cultures have varying approaches to time that can impact collaboration", "All cultures view time the same way", "Only Western time concepts matter"],
      correct: "Different cultures have varying approaches to time that can impact collaboration",
      explanation: "Cultures vary in their orientation toward time (monochronic vs. polychronic), affecting punctuality, scheduling, and collaborative work styles in international settings.",
      difficulty: "Hard"
    },
    {
      id: "eng12_time_h2",
      question: "How does the paradox of choice affect time management decisions?",
      options: ["More choices always improve decisions", "Too many options can lead to decision paralysis and time waste", "Choices don't affect time management", "Fewer choices are always better"],
      correct: "Too many options can lead to decision paralysis and time waste",
      explanation: "Having too many choices can overwhelm decision-making processes, leading to procrastination and inefficient use of time in selecting among options.",
      difficulty: "Hard"
    },
    {
      id: "eng12_time_h3",
      question: "Evaluate the psychological factors that contribute to chronic procrastination and their impact on time management.",
      options: ["Procrastination is just laziness", "Complex psychological factors including fear, perfectionism, and anxiety drive procrastination", "Procrastination is easily overcome", "Only lack of skills causes procrastination"],
      correct: "Complex psychological factors including fear, perfectionism, and anxiety drive procrastination",
      explanation: "Chronic procrastination often stems from psychological factors like fear of failure, perfectionism, anxiety, and low self-esteem, requiring deeper understanding to address effectively.",
      difficulty: "Hard"
    },
    {
      id: "eng12_time_h4",
      question: "How does the concept of 'flow state' relate to optimal time management and productivity?",
      options: ["Flow state wastes time", "Flow state represents optimal engagement where time perception changes and productivity peaks", "Flow state is a myth", "Flow state only applies to sports"],
      correct: "Flow state represents optimal engagement where time perception changes and productivity peaks",
      explanation: "Flow state occurs when challenge and skill levels are optimally matched, leading to deep engagement, altered time perception, and peak performance.",
      difficulty: "Hard"
    },
    {
      id: "eng12_time_h5",
      question: "Analyze the long-term consequences of poor time management on career development and life satisfaction.",
      options: ["Poor time management has no long-term effects", "It can lead to missed opportunities, chronic stress, and reduced life satisfaction", "It only affects work life", "Time management skills can't be improved"],
      correct: "It can lead to missed opportunities, chronic stress, and reduced life satisfaction",
      explanation: "Chronic poor time management can result in missed career opportunities, relationship strain, health problems from stress, and overall reduced quality of life.",
      difficulty: "Hard"
    },
    {
      id: "eng12_time_h6",
      question: "How do cognitive biases affect time estimation and planning accuracy?",
      options: ["Biases don't affect time planning", "Biases like planning fallacy and optimism bias lead to unrealistic time estimates", "People always estimate time accurately", "Only experience affects time estimation"],
      correct: "Biases like planning fallacy and optimism bias lead to unrealistic time estimates",
      explanation: "Cognitive biases systematically distort time perception and planning, with people typically underestimating time needed (planning fallacy) and being overly optimistic about completion times.",
      difficulty: "Hard"
    },
    {
      id: "eng12_time_h7",
      question: "Evaluate the role of intrinsic vs. extrinsic motivation in sustainable time management practices.",
      options: ["Only extrinsic motivation works", "Intrinsic motivation leads to more sustainable time management behaviors", "Motivation type doesn't matter", "External rewards are always better"],
      correct: "Intrinsic motivation leads to more sustainable time management behaviors",
      explanation: "While external rewards can drive short-term behavior, intrinsic motivation (personal satisfaction, values alignment) creates more sustainable and self-directed time management practices.",
      difficulty: "Hard"
    },
    {
      id: "eng12_time_h8",
      question: "How does the digital age's 'always-on' culture challenge traditional time management approaches?",
      options: ["Digital technology makes time management easier", "Constant connectivity blurs work-life boundaries and requires new management strategies", "Traditional approaches still work perfectly", "Technology has no impact on time management"],
      correct: "Constant connectivity blurs work-life boundaries and requires new management strategies",
      explanation: "The digital age creates expectations of constant availability, information overload, and blurred boundaries that require evolved time management strategies beyond traditional approaches.",
      difficulty: "Hard"
    },
    {
      id: "eng12_time_h9",
      question: "Analyze how individual chronotypes (natural time preferences) should influence personalized time management strategies.",
      options: ["Everyone should follow the same schedule", "Individual biological rhythms should guide personalized time management approaches", "Chronotypes are not real", "Social expectations override biological preferences"],
      correct: "Individual biological rhythms should guide personalized time management approaches",
      explanation: "Understanding personal chronotypes (morning lark vs. night owl) allows for optimized scheduling that aligns demanding tasks with peak biological performance times.",
      difficulty: "Hard"
    },
    {
      id: "eng12_time_h10",
      question: "How does the concept of 'temporal discounting' affect long-term goal achievement and time allocation decisions?",
      options: ["People always prioritize long-term goals", "Humans tend to overvalue immediate rewards compared to future benefits", "Time doesn't affect decision-making", "Long-term thinking is natural"],
      correct: "Humans tend to overvalue immediate rewards compared to future benefits",
      explanation: "Temporal discounting describes the tendency to value immediate rewards more highly than future ones, which can undermine long-term goal achievement and requires specific strategies to overcome.",
      difficulty: "Hard"
    }
  ],

  "Unit 3: Evidence on Traffic Accident": [
    // Easy Questions
    {
      id: "eng12_traffic_e1",
      question: "What is traffic accident evidence?",
      options: ["Information and materials that help understand how an accident occurred", "Only witness statements", "Police reports only", "Insurance claims"],
      correct: "Information and materials that help understand how an accident occurred",
      explanation: "Traffic accident evidence includes all physical, documentary, and testimonial information that helps reconstruct and understand the circumstances of an accident.",
      difficulty: "Easy"
    },
    {
      id: "eng12_traffic_e2",
      question: "Which of the following is physical evidence from a traffic accident?",
      options: ["Witness testimony", "Skid marks", "Police interview", "Insurance policy"],
      correct: "Skid marks",
      explanation: "Skid marks are physical traces left on the road surface that provide evidence about vehicle speed, braking, and direction before impact.",
      difficulty: "Easy"
    },
    {
      id: "eng12_traffic_e3",
      question: "Who typically investigates serious traffic accidents?",
      options: ["Insurance agents only", "Police officers", "Journalists", "Mechanics"],
      correct: "Police officers",
      explanation: "Police officers are trained to investigate traffic accidents, collect evidence, and determine the cause and responsibility for the incident.",
      difficulty: "Easy"
    },
    {
      id: "eng12_traffic_e4",
      question: "What should you do first at the scene of a traffic accident?",
      options: ["Take photos", "Ensure safety and call emergency services", "Exchange insurance information", "Move the vehicles"],
      correct: "Ensure safety and call emergency services",
      explanation: "Safety is the top priority at any accident scene. Ensuring everyone is safe and calling for medical help if needed comes before collecting evidence.",
      difficulty: "Easy"
    },
    {
      id: "eng12_traffic_e5",
      question: "What is a traffic accident report?",
      options: ["A newspaper article", "An official document recording accident details", "A repair estimate", "A witness statement"],
      correct: "An official document recording accident details",
      explanation: "A traffic accident report is an official document prepared by police that records the facts, circumstances, and findings of a traffic accident investigation.",
      difficulty: "Easy"
    },
    {
      id: "eng12_traffic_e6",
      question: "Why are photographs important evidence in traffic accidents?",
      options: ["They're not important", "They provide visual documentation of the scene and damage", "Only for insurance purposes", "They replace police reports"],
      correct: "They provide visual documentation of the scene and damage",
      explanation: "Photographs capture the accident scene, vehicle positions, damage, and road conditions, providing objective visual evidence that supports accident reconstruction.",
      difficulty: "Easy"
    },
    {
      id: "eng12_traffic_e7",
      question: "What information should be exchanged between drivers after an accident?",
      options: ["Only names", "Insurance information, contact details, and license numbers", "Nothing until police arrive", "Only insurance companies"],
      correct: "Insurance information, contact details, and license numbers",
      explanation: "Drivers should exchange essential information including insurance details, contact information, and driver's license numbers for proper claim processing.",
      difficulty: "Easy"
    },
    {
      id: "eng12_traffic_e8",
      question: "What is a witness in a traffic accident?",
      options: ["Someone who caused the accident", "A person who saw the accident happen", "A police officer", "An insurance agent"],
      correct: "A person who saw the accident happen",
      explanation: "A witness is someone who observed the accident occur and can provide testimony about what they saw, heard, or experienced.",
      difficulty: "Easy"
    },
    {
      id: "eng12_traffic_e9",
      question: "Which weather condition often contributes to traffic accidents?",
      options: ["Sunny weather", "Rain and wet roads", "Mild temperatures", "Clear skies"],
      correct: "Rain and wet roads",
      explanation: "Rain reduces tire traction and visibility, making roads slippery and increasing the likelihood of accidents due to longer stopping distances.",
      difficulty: "Easy"
    },
    {
      id: "eng12_traffic_e10",
      question: "What does 'reconstruction' mean in traffic accident investigation?",
      options: ["Repairing damaged vehicles", "Rebuilding the road", "Determining how the accident happened", "Writing a report"],
      correct: "Determining how the accident happened",
      explanation: "Accident reconstruction involves analyzing evidence to determine the sequence of events, causes, and circumstances that led to the accident.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_traffic_m1",
      question: "How do investigators use skid marks to determine vehicle speed before impact?",
      options: ["Skid marks don't indicate speed", "By measuring length and applying physics formulas considering road conditions", "By guessing based on damage", "Speed cannot be determined"],
      correct: "By measuring length and applying physics formulas considering road conditions",
      explanation: "Investigators measure skid mark length and apply physics principles, considering factors like road surface and tire condition, to calculate pre-impact speed.",
      difficulty: "Medium"
    },
    {
      id: "eng12_traffic_m2",
      question: "What role does human error play in traffic accidents according to research?",
      options: ["Human error is rarely a factor", "Human error contributes to the majority of traffic accidents", "Only mechanical failures cause accidents", "Weather is the main cause"],
      correct: "Human error contributes to the majority of traffic accidents",
      explanation: "Studies show that human error, including distracted driving, speeding, and poor judgment, is a contributing factor in approximately 90% of traffic accidents.",
      difficulty: "Medium"
    },
    {
      id: "eng12_traffic_m3",
      question: "How does the chain of custody affect evidence in traffic accident cases?",
      options: ["It's not important", "It ensures evidence integrity and admissibility in legal proceedings", "It only applies to criminal cases", "It complicates investigations"],
      correct: "It ensures evidence integrity and admissibility in legal proceedings",
      explanation: "Chain of custody documents who handled evidence and when, ensuring its integrity and making it admissible in court proceedings.",
      difficulty: "Medium"
    },
    {
      id: "eng12_traffic_m4",
      question: "What is the difference between contributory and comparative negligence in accident cases?",
      options: ["They're the same thing", "Contributory negligence can bar recovery while comparative negligence reduces damages proportionally", "Only one applies to traffic accidents", "They don't affect legal outcomes"],
      correct: "Contributory negligence can bar recovery while comparative negligence reduces damages proportionally",
      explanation: "Contributory negligence can completely prevent compensation if the plaintiff contributed to the accident, while comparative negligence reduces compensation proportionally to fault percentage.",
      difficulty: "Medium"
    },
    {
      id: "eng12_traffic_m5",
      question: "How do event data recorders (black boxes) in vehicles assist accident investigation?",
      options: ["They record conversations", "They capture vehicle data like speed, braking, and impact forces", "They don't help investigations", "They only work in airplanes"],
      correct: "They capture vehicle data like speed, braking, and impact forces",
      explanation: "Event data recorders capture crucial pre-crash data including vehicle speed, brake application, throttle position, and impact forces, providing objective evidence.",
      difficulty: "Medium"
    },
    {
      id: "eng12_traffic_m6",
      question: "What challenges do investigators face when accident scenes are not preserved?",
      options: ["No challenges exist", "Loss of physical evidence and difficulty in accurate reconstruction", "Investigations become easier", "Only witness testimony is affected"],
      correct: "Loss of physical evidence and difficulty in accurate reconstruction",
      explanation: "When scenes are disturbed, investigators lose crucial physical evidence like vehicle positions, debris patterns, and road markings that are essential for accurate reconstruction.",
      difficulty: "Medium"
    },
    {
      id: "eng12_traffic_m7",
      question: "How does alcohol impairment affect driving ability and accident evidence?",
      options: ["Alcohol doesn't affect driving", "It impairs judgment, reaction time, and coordination, leaving detectable evidence", "Only affects vision", "Evidence can't be detected"],
      correct: "It impairs judgment, reaction time, and coordination, leaving detectable evidence",
      explanation: "Alcohol impairs multiple driving abilities and can be detected through blood, breath, or field sobriety tests, providing strong evidence in accident cases.",
      difficulty: "Medium"
    },
    {
      id: "eng12_traffic_m8",
      question: "What is the importance of accurate time documentation in accident investigation?",
      options: ["Time is not important", "It helps establish sequence of events and correlate with other evidence", "Only for police reports", "Time cannot be determined"],
      correct: "It helps establish sequence of events and correlate with other evidence",
      explanation: "Accurate timing helps investigators establish the sequence of events, correlate witness statements, and link physical evidence to specific moments.",
      difficulty: "Medium"
    },
    {
      id: "eng12_traffic_m9",
      question: "How do cell phone records contribute to traffic accident investigations?",
      options: ["They're not relevant", "They can show if a driver was distracted by phone use at the time of the accident", "Only for insurance purposes", "They always prove guilt"],
      correct: "They can show if a driver was distracted by phone use at the time of the accident",
      explanation: "Cell phone records can reveal if a driver was making calls, texting, or using apps around the time of the accident, indicating potential distraction.",
      difficulty: "Medium"
    },
    {
      id: "eng12_traffic_m10",
      question: "What role do traffic cameras play in accident investigation?",
      options: ["No role at all", "They provide objective visual evidence of the accident occurrence", "Only for traffic enforcement", "They replace all other evidence"],
      correct: "They provide objective visual evidence of the accident occurrence",
      explanation: "Traffic cameras can capture the actual accident as it happens, providing objective visual evidence of vehicle movements, traffic signals, and other crucial details.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_traffic_h1",
      question: "Analyze the admissibility challenges of digital evidence in traffic accident litigation.",
      options: ["Digital evidence is always admissible", "Digital evidence faces authentication, chain of custody, and technical reliability challenges", "Digital evidence is never admissible", "Only physical evidence matters in court"],
      correct: "Digital evidence faces authentication, chain of custody, and technical reliability challenges",
      explanation: "Digital evidence must meet legal standards for authentication, demonstrate unbroken chain of custody, and establish technical reliability, which can be complex with technology systems.",
      difficulty: "Hard"
    },
    {
      id: "eng12_traffic_h2",
      question: "Evaluate the psychological factors that affect eyewitness reliability in traffic accident cases.",
      options: ["Eyewitnesses are always accurate", "Memory can be distorted by stress, time passage, and suggestion, affecting reliability", "Psychological factors don't matter", "Only physical evidence is reliable"],
      correct: "Memory can be distorted by stress, time passage, and suggestion, affecting reliability",
      explanation: "Research shows that stress, time delay, leading questions, and other psychological factors can significantly distort eyewitness memory, making such testimony less reliable than often assumed.",
      difficulty: "Hard"
    },
    {
      id: "eng12_traffic_h3",
      question: "How do biomechanical analysis and injury patterns contribute to accident reconstruction?",
      options: ["Injuries don't provide useful information", "Injury patterns can indicate impact direction, force, and occupant positioning", "Only vehicle damage matters", "Medical evidence is irrelevant"],
      correct: "Injury patterns can indicate impact direction, force, and occupant positioning",
      explanation: "Biomechanical analysis of injury patterns can reveal impact angles, collision forces, seatbelt use, and occupant positions, providing crucial reconstruction information.",
      difficulty: "Hard"
    },
    {
      id: "eng12_traffic_h4",
      question: "Assess the role of emerging technologies like LiDAR and 3D scanning in modern accident investigation.",
      options: ["New technologies are unnecessary", "Advanced technologies provide precise measurements and detailed scene documentation", "Traditional methods are always better", "Technology complicates investigations"],
      correct: "Advanced technologies provide precise measurements and detailed scene documentation",
      explanation: "LiDAR and 3D scanning technologies allow investigators to capture precise measurements and create detailed digital recreations of accident scenes, improving accuracy and analysis capabilities.",
      difficulty: "Hard"
    },
    {
      id: "eng12_traffic_h5",
      question: "How do expert witnesses in accident reconstruction establish credibility and present complex technical evidence?",
      options: ["Anyone can be an expert witness", "Expert witnesses must demonstrate qualifications and present technical information in understandable terms", "Expert witnesses are not needed", "Technical evidence cannot be explained"],
      correct: "Expert witnesses must demonstrate qualifications and present technical information in understandable terms",
      explanation: "Expert witnesses must establish their credentials, explain complex technical concepts clearly to lay audiences, and base opinions on accepted scientific principles and methodologies.",
      difficulty: "Hard"
    },
    {
      id: "eng12_traffic_h6",
      question: "Analyze the impact of autonomous vehicle technology on traditional accident investigation methods.",
      options: ["Autonomous vehicles don't affect investigations", "Autonomous vehicles generate new types of data but require updated investigation approaches", "Traditional methods work unchanged", "Autonomous vehicles eliminate accidents"],
      correct: "Autonomous vehicles generate new types of data but require updated investigation approaches",
      explanation: "Autonomous vehicles create new data sources (sensor logs, software decisions) but also require investigators to understand complex technological systems and algorithm decision-making processes.",
      difficulty: "Hard"
    },
    {
      id: "eng12_traffic_h7",
      question: "Evaluate the challenges of international accident investigation when multiple jurisdictions are involved.",
      options: ["Jurisdiction doesn't matter", "Different legal systems, evidence standards, and procedures can complicate investigations", "International cases are simple", "Only local laws apply"],
      correct: "Different legal systems, evidence standards, and procedures can complicate investigations",
      explanation: "International cases involve varying legal systems, evidence admissibility standards, investigation procedures, and diplomatic considerations that complicate the investigation process.",
      difficulty: "Hard"
    },
    {
      id: "eng12_traffic_h8",
      question: "How do statistical analysis and big data approaches enhance understanding of traffic accident patterns?",
      options: ["Statistics are not useful", "Large datasets reveal patterns, risk factors, and predictive insights not visible in individual cases", "Only individual cases matter", "Data analysis complicates understanding"],
      correct: "Large datasets reveal patterns, risk factors, and predictive insights not visible in individual cases",
      explanation: "Big data analysis can identify trends, high-risk locations, contributing factors, and patterns across thousands of accidents, enabling better prevention strategies and policy decisions.",
      difficulty: "Hard"
    },
    {
      id: "eng12_traffic_h9",
      question: "Assess the ethical considerations in accident investigation, particularly regarding privacy and data use.",
      options: ["Ethics don't apply to investigations", "Investigators must balance public safety needs with privacy rights and data protection", "All data should be public", "Privacy always takes precedence"],
      correct: "Investigators must balance public safety needs with privacy rights and data protection",
      explanation: "Accident investigations involve sensitive personal data, requiring careful balance between public safety interests, individual privacy rights, and appropriate data use and sharing protocols.",
      difficulty: "Hard"
    },
    {
      id: "eng12_traffic_h10",
      question: "How do socioeconomic factors influence traffic accident patterns and investigation resources?",
      options: ["Socioeconomic factors are irrelevant", "Income levels, infrastructure quality, and resource availability affect both accident rates and investigation quality", "All areas have equal accident rates", "Investigation quality is always uniform"],
      correct: "Income levels, infrastructure quality, and resource availability affect both accident rates and investigation quality",
      explanation: "Socioeconomic disparities affect road infrastructure quality, vehicle safety features, emergency response capabilities, and investigation resources, creating inequalities in both accident risk and investigation thoroughness.",
      difficulty: "Hard"
    }
  ],

  "Unit 4: Natural Resource Management": [
    // Easy Questions
    {
      id: "eng12_resource_e1",
      question: "What are natural resources?",
      options: ["Man-made materials", "Materials and substances that occur naturally in the environment", "Processed goods", "Artificial products"],
      correct: "Materials and substances that occur naturally in the environment",
      explanation: "Natural resources are materials and energy sources that exist in nature and can be used by humans, including water, minerals, forests, and fossil fuels.",
      difficulty: "Easy"
    },
    {
      id: "eng12_resource_e2",
      question: "Which of the following is a renewable resource?",
      options: ["Coal", "Oil", "Solar energy", "Natural gas"],
      correct: "Solar energy",
      explanation: "Solar energy is renewable because the sun continuously provides energy that doesn't get depleted through use.",
      difficulty: "Easy"
    },
    {
      id: "eng12_resource_e3",
      question: "What does conservation mean in resource management?",
      options: ["Using resources quickly", "Protecting and preserving resources for future use", "Wasting resources", "Ignoring resources"],
      correct: "Protecting and preserving resources for future use",
      explanation: "Conservation involves the careful management and protection of natural resources to ensure they remain available for future generations.",
      difficulty: "Easy"
    },
    {
      id: "eng12_resource_e4",
      question: "Which resource is essential for all life on Earth?",
      options: ["Gold", "Water", "Diamonds", "Silver"],
      correct: "Water",
      explanation: "Water is fundamental for all living organisms and essential for drinking, agriculture, industry, and maintaining ecosystems.",
      difficulty: "Easy"
    },
    {
      id: "eng12_resource_e5",
      question: "What is deforestation?",
      options: ["Planting new trees", "The clearing of forests for other land uses", "Forest conservation", "Tree disease"],
      correct: "The clearing of forests for other land uses",
      explanation: "Deforestation is the permanent removal of forests to make way for agriculture, urban development, or other human activities.",
      difficulty: "Easy"
    },
    {
      id: "eng12_resource_e6",
      question: "Which activity helps preserve soil quality?",
      options: ["Intensive farming", "Crop rotation", "Overgrazing", "Chemical pollution"],
      correct: "Crop rotation",
      explanation: "Crop rotation helps maintain soil fertility by varying the nutrients that plants take from and add to the soil.",
      difficulty: "Easy"
    },
    {
      id: "eng12_resource_e7",
      question: "What is overfishing?",
      options: ["Catching the right amount of fish", "Catching too many fish, depleting fish populations", "Fish farming", "Fish conservation"],
      correct: "Catching too many fish, depleting fish populations",
      explanation: "Overfishing occurs when fish are caught faster than they can reproduce, leading to declining fish populations and ecosystem damage.",
      difficulty: "Easy"
    },
    {
      id: "eng12_resource_e8",
      question: "Which is an example of a non-renewable resource?",
      options: ["Wind", "Sunlight", "Petroleum", "Tidal energy"],
      correct: "Petroleum",
      explanation: "Petroleum (oil) is non-renewable because it takes millions of years to form and cannot be replenished on human timescales.",
      difficulty: "Easy"
    },
    {
      id: "eng12_resource_e9",
      question: "What is recycling?",
      options: ["Throwing things away", "Converting waste materials into new products", "Burning waste", "Burying waste"],
      correct: "Converting waste materials into new products",
      explanation: "Recycling involves processing used materials to create new products, reducing the need for raw materials and waste.",
      difficulty: "Easy"
    },
    {
      id: "eng12_resource_e10",
      question: "Why are protected areas important for natural resource management?",
      options: ["They're not important", "They preserve ecosystems and biodiversity", "They prevent all human activity", "They're too expensive"],
      correct: "They preserve ecosystems and biodiversity",
      explanation: "Protected areas conserve important ecosystems, wildlife habitats, and biodiversity while allowing for sustainable human activities.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_resource_m1",
      question: "How does the concept of carrying capacity apply to natural resource management?",
      options: ["It doesn't apply", "It determines the maximum population an environment can sustain", "It only applies to animals", "It measures resource quality"],
      correct: "It determines the maximum population an environment can sustain",
      explanation: "Carrying capacity is the maximum number of individuals an environment can support indefinitely without degrading the resource base.",
      difficulty: "Medium"
    },
    {
      id: "eng12_resource_m2",
      question: "What is the tragedy of the commons and how does it relate to resource management?",
      options: ["A historical event", "When shared resources are overexploited due to individual self-interest", "A type of land ownership", "A conservation success story"],
      correct: "When shared resources are overexploited due to individual self-interest",
      explanation: "The tragedy of the commons occurs when individuals acting in their own interest collectively deplete shared resources, highlighting the need for management systems.",
      difficulty: "Medium"
    },
    {
      id: "eng12_resource_m3",
      question: "How do indigenous communities contribute to natural resource management?",
      options: ["They don't contribute", "They provide traditional knowledge and sustainable practices", "They only cause problems", "They avoid resource use"],
      correct: "They provide traditional knowledge and sustainable practices",
      explanation: "Indigenous communities often possess generations of traditional ecological knowledge and sustainable resource management practices that inform modern conservation efforts.",
      difficulty: "Medium"
    },
    {
      id: "eng12_resource_m4",
      question: "What is adaptive management in natural resource contexts?",
      options: ["Never changing management approaches", "Adjusting management strategies based on monitoring and learning", "Only using traditional methods", "Avoiding all management"],
      correct: "Adjusting management strategies based on monitoring and learning",
      explanation: "Adaptive management involves continuously learning from outcomes and adjusting strategies based on new information and changing conditions.",
      difficulty: "Medium"
    },
    {
      id: "eng12_resource_m5",
      question: "How does climate change affect natural resource management strategies?",
      options: ["It has no effect", "It requires adaptation of management practices to changing environmental conditions", "It makes management easier", "It only affects temperature"],
      correct: "It requires adaptation of management practices to changing environmental conditions",
      explanation: "Climate change alters precipitation patterns, temperatures, and ecosystem dynamics, requiring resource managers to adapt their strategies accordingly.",
      difficulty: "Medium"
    },
    {
      id: "eng12_resource_m6",
      question: "What is ecosystem services valuation and why is it important?",
      options: ["It's not important", "It assigns economic value to benefits ecosystems provide to humans", "It only counts trees", "It measures ecosystem size"],
      correct: "It assigns economic value to benefits ecosystems provide to humans",
      explanation: "Ecosystem services valuation quantifies the economic benefits ecosystems provide, such as clean water, carbon storage, and pollination, to inform decision-making.",
      difficulty: "Medium"
    },
    {
      id: "eng12_resource_m7",
      question: "How do certification systems like FSC help in resource management?",
      options: ["They don't help", "They ensure products come from sustainably managed sources", "They increase resource consumption", "They're only for show"],
      correct: "They ensure products come from sustainably managed sources",
      explanation: "Certification systems like the Forest Stewardship Council (FSC) verify that products come from responsibly managed forests and supply chains.",
      difficulty: "Medium"
    },
    {
      id: "eng12_resource_m8",
      question: "What role does technology play in modern resource management?",
      options: ["Technology is harmful", "It enables better monitoring, efficiency, and sustainable practices", "It's not needed", "It only complicates things"],
      correct: "It enables better monitoring, efficiency, and sustainable practices",
      explanation: "Technology such as satellite monitoring, GPS tracking, and data analysis tools help managers make informed decisions and improve resource efficiency.",
      difficulty: "Medium"
    },
    {
      id: "eng12_resource_m9",
      question: "How does international trade affect natural resource management?",
      options: ["Trade has no impact", "It can drive both conservation and exploitation depending on market demands", "It always helps conservation", "It always harms the environment"],
      correct: "It can drive both conservation and exploitation depending on market demands",
      explanation: "International trade can incentivize sustainable practices when consumers demand certified products, but can also drive overexploitation when markets reward quantity over sustainability.",
      difficulty: "Medium"
    },
    {
      id: "eng12_resource_m10",
      question: "What is the precautionary principle in resource management?",
      options: ["Taking no action", "Acting to prevent environmental harm even without complete scientific certainty", "Waiting for disasters", "Ignoring scientific advice"],
      correct: "Acting to prevent environmental harm even without complete scientific certainty",
      explanation: "The precautionary principle suggests taking preventive action against potential environmental damage even when scientific evidence is incomplete.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_resource_h1",
      question: "Analyze the complex relationship between economic development and natural resource depletion in developing countries.",
      options: ["Development always protects resources", "Countries face difficult tradeoffs between immediate economic needs and long-term sustainability", "Resource depletion is not related to development", "Only rich countries deplete resources"],
      correct: "Countries face difficult tradeoffs between immediate economic needs and long-term sustainability",
      explanation: "Developing countries often face pressure to exploit natural resources for immediate economic gain and poverty reduction, while needing to consider long-term environmental sustainability and future generations.",
      difficulty: "Hard"
    },
    {
      id: "eng12_resource_h2",
      question: "Evaluate the effectiveness of market-based mechanisms versus regulatory approaches in natural resource management.",
      options: ["Market mechanisms are always better", "Both approaches have strengths and limitations requiring careful application", "Regulation is always superior", "Neither approach works"],
      correct: "Both approaches have strengths and limitations requiring careful application",
      explanation: "Market-based mechanisms can provide efficiency and innovation incentives, while regulations can address market failures and ensure minimum standards, often requiring hybrid approaches for optimal outcomes.",
      difficulty: "Hard"
    },
    {
      id: "eng12_resource_h3",
      question: "How do global supply chains complicate natural resource management and accountability?",
      options: ["Supply chains simplify management", "Complex supply chains obscure resource origins and make accountability difficult", "Global trade has no impact", "Local management is always sufficient"],
      correct: "Complex supply chains obscure resource origins and make accountability difficult",
      explanation: "Global supply chains can mask the true environmental and social costs of resource extraction, making it difficult to trace impacts and ensure responsible sourcing.",
      difficulty: "Hard"
    },
    {
      id: "eng12_resource_h4",
      question: "Assess the role of traditional ecological knowledge in addressing contemporary resource management challenges.",
      options: ["Traditional knowledge is outdated", "Traditional knowledge provides valuable insights that complement scientific approaches", "Only modern science works", "Traditional and scientific knowledge cannot be combined"],
      correct: "Traditional knowledge provides valuable insights that complement scientific approaches",
      explanation: "Traditional ecological knowledge, developed over generations, often provides valuable insights into sustainable practices and ecosystem understanding that can enhance scientific management approaches.",
      difficulty: "Hard"
    },
    {
      id: "eng12_resource_h5",
      question: "How do conflicting stakeholder interests complicate natural resource management decisions?",
      options: ["Stakeholders always agree", "Different groups have competing interests requiring careful negotiation and compromise", "Only one stakeholder group matters", "Conflicts are easily resolved"],
      correct: "Different groups have competing interests requiring careful negotiation and compromise",
      explanation: "Resource management involves balancing interests of local communities, conservation groups, industry, government, and other stakeholders who may have conflicting priorities and values.",
      difficulty: "Hard"
    },
    {
      id: "eng12_resource_h6",
      question: "Analyze the impact of technological disruption on traditional resource-based economies.",
      options: ["Technology has no impact", "Technological change can rapidly alter resource demand and economic structures", "Traditional economies never change", "Technology always helps traditional industries"],
      correct: "Technological change can rapidly alter resource demand and economic structures",
      explanation: "Technological disruptions can quickly shift demand for resources, create substitutes, or change extraction methods, forcing rapid adaptation in resource-dependent communities and economies.",
      difficulty: "Hard"
    },
    {
      id: "eng12_resource_h7",
      question: "Evaluate the challenges of managing transboundary natural resources.",
      options: ["Boundaries don't affect resources", "Shared resources require international cooperation and coordination mechanisms", "Each country can manage independently", "Transboundary management is impossible"],
      correct: "Shared resources require international cooperation and coordination mechanisms",
      explanation: "Resources that cross political boundaries, such as rivers, migratory species, and airsheds, require coordinated management approaches that address sovereignty issues and shared responsibilities.",
      difficulty: "Hard"
    },
    {
      id: "eng12_resource_h8",
      question: "How does the financialization of natural resources affect conservation outcomes?",
      options: ["Financialization always helps conservation", "Financial mechanisms can both incentivize and commodify nature with mixed results", "Finance has no role in conservation", "Only public funding works for conservation"],
      correct: "Financial mechanisms can both incentivize and commodify nature with mixed results",
      explanation: "Financial tools like payment for ecosystem services can incentivize conservation, but treating nature as a commodity may also lead to unintended consequences and exclusion of local communities.",
      difficulty: "Hard"
    },
    {
      id: "eng12_resource_h9",
      question: "Assess the long-term implications of current resource extraction patterns for global sustainability.",
      options: ["Current patterns are sustainable", "Current extraction rates and methods threaten long-term planetary sustainability", "Resources are infinite", "Technology will solve all problems"],
      correct: "Current extraction rates and methods threaten long-term planetary sustainability",
      explanation: "Current rates of resource extraction exceed planetary boundaries in many cases, threatening ecosystem stability and the resource base needed for future human well-being.",
      difficulty: "Hard"
    },
    {
      id: "eng12_resource_h10",
      question: "How do power dynamics and environmental justice issues affect natural resource management outcomes?",
      options: ["Power doesn't affect resource management", "Unequal power relations often lead to inequitable resource access and environmental burdens", "All communities have equal influence", "Environmental justice is not relevant"],
      correct: "Unequal power relations often lead to inequitable resource access and environmental burdens",
      explanation: "Resource management decisions are often influenced by power imbalances, leading to situations where marginalized communities bear environmental costs while more powerful groups capture benefits.",
      difficulty: "Hard"
    }
  ],

  "Unit 5: Mechanized Agriculture": [
    // Easy Questions
    {
      id: "eng12_mech_e1",
      question: "What is mechanized agriculture?",
      options: ["Farming by hand only", "Using machines and technology in farming operations", "Growing only organic crops", "Small-scale farming"],
      correct: "Using machines and technology in farming operations",
      explanation: "Mechanized agriculture involves using machinery, equipment, and technology to increase efficiency and productivity in farming operations.",
      difficulty: "Easy"
    },
    {
      id: "eng12_mech_e2",
      question: "Which is a common farm machine used for planting seeds?",
      options: ["Harvester", "Seeder", "Thresher", "Mower"],
      correct: "Seeder",
      explanation: "A seeder is a machine specifically designed to plant seeds at appropriate depths and spacing in the soil.",
      difficulty: "Easy"
    },
    {
      id: "eng12_mech_e3",
      question: "What is the primary purpose of using tractors in farming?",
      options: ["Entertainment", "Providing power for various farming operations", "Transportation only", "Decoration"],
      correct: "Providing power for various farming operations",
      explanation: "Tractors provide mechanical power to operate various farm implements and equipment for different agricultural tasks.",
      difficulty: "Easy"
    },
    {
      id: "eng12_mech_e4",
      question: "Which farming operation involves removing crops from the field?",
      options: ["Planting", "Irrigation", "Harvesting", "Fertilizing"],
      correct: "Harvesting",
      explanation: "Harvesting is the process of gathering mature crops from the field, often done using combine harvesters or other mechanized equipment.",
      difficulty: "Easy"
    },
    {
      id: "eng12_mech_e5",
      question: "What does GPS technology help farmers with?",
      options: ["Cooking food", "Precise field navigation and mapping", "Entertainment", "Communication only"],
      correct: "Precise field navigation and mapping",
      explanation: "GPS technology enables precise field navigation, accurate mapping, and precision farming techniques for better resource management.",
      difficulty: "Easy"
    },
    {
      id: "eng12_mech_e6",
      question: "What is irrigation in agriculture?",
      options: ["Removing weeds", "Supplying water to crops", "Harvesting crops", "Storing grain"],
      correct: "Supplying water to crops",
      explanation: "Irrigation is the artificial application of water to crops and soil to support plant growth when natural rainfall is insufficient.",
      difficulty: "Easy"
    },
    {
      id: "eng12_mech_e7",
      question: "Which benefit does mechanized agriculture provide?",
      options: ["Decreased productivity", "Increased efficiency and productivity", "Higher labor costs", "More crop diseases"],
      correct: "Increased efficiency and productivity",
      explanation: "Mechanized agriculture increases efficiency by reducing labor requirements and time needed for farming operations while often improving productivity.",
      difficulty: "Easy"
    },
    {
      id: "eng12_mech_e8",
      question: "What is precision agriculture?",
      options: ["Rough farming methods", "Using technology to optimize field-level management", "Manual farming only", "Guessing about crop needs"],
      correct: "Using technology to optimize field-level management",
      explanation: "Precision agriculture uses technology like GPS, sensors, and data analysis to optimize field-level management and improve crop yields while reducing inputs.",
      difficulty: "Easy"
    },
    {
      id: "eng12_mech_e9",
      question: "Which machine is used to prepare soil for planting?",
      options: ["Combine harvester", "Plow", "Sprayer", "Thresher"],
      correct: "Plow",
      explanation: "A plow is used to break up and turn over soil to prepare it for planting by creating a suitable seedbed.",
      difficulty: "Easy"
    },
    {
      id: "eng12_mech_e10",
      question: "What does a combine harvester do?",
      options: ["Plants seeds only", "Cuts, threshes, and cleans grain crops in one operation", "Waters crops", "Applies fertilizer"],
      correct: "Cuts, threshes, and cleans grain crops in one operation",
      explanation: "A combine harvester performs multiple operations simultaneously: cutting the crop, separating grain from stalks, and cleaning the grain.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_mech_m1",
      question: "How does mechanized agriculture impact labor requirements in farming?",
      options: ["Increases labor needs significantly", "Reduces manual labor needs but may require skilled operators", "Has no impact on labor", "Only affects seasonal workers"],
      correct: "Reduces manual labor needs but may require skilled operators",
      explanation: "While mechanization reduces the need for manual labor, it often requires workers with technical skills to operate and maintain sophisticated equipment.",
      difficulty: "Medium"
    },
    {
      id: "eng12_mech_m2",
      question: "What are the environmental considerations of mechanized agriculture?",
      options: ["No environmental impact", "Can cause soil compaction and fuel emissions but also enables precision applications", "Only positive environmental effects", "Completely eliminates environmental concerns"],
      correct: "Can cause soil compaction and fuel emissions but also enables precision applications",
      explanation: "Mechanized agriculture can have both negative impacts (soil compaction, emissions) and positive effects (precision application reducing chemical use).",
      difficulty: "Medium"
    },
    {
      id: "eng12_mech_m3",
      question: "How do variable rate technologies benefit farming operations?",
      options: ["They don't provide benefits", "They apply inputs based on field variability to optimize resource use", "They increase costs without benefits", "They only work in small fields"],
      correct: "They apply inputs based on field variability to optimize resource use",
      explanation: "Variable rate technologies adjust the application of seeds, fertilizers, and pesticides based on field conditions to optimize resource use and crop yields.",
      difficulty: "Medium"
    },
    {
      id: "eng12_mech_m4",
      question: "What role does data management play in modern mechanized agriculture?",
      options: ["Data is not important", "Data helps optimize operations and improve decision-making", "Data only complicates farming", "Traditional farming doesn't use data"],
      correct: "Data helps optimize operations and improve decision-making",
      explanation: "Modern agriculture relies on data from sensors, GPS, and yield monitors to make informed decisions about crop management and resource allocation.",
      difficulty: "Medium"
    },
    {
      id: "eng12_mech_m5",
      question: "How does mechanization affect crop yield and quality?",
      options: ["Always decreases both", "Can improve both through precise operations and timing", "Only affects quantity, not quality", "Has no measurable impact"],
      correct: "Can improve both through precise operations and timing",
      explanation: "Mechanization can improve yields through timely operations and precision applications, while also maintaining or improving quality through consistent handling.",
      difficulty: "Medium"
    },
    {
      id: "eng12_mech_m6",
      question: "What are the economic barriers to adopting mechanized agriculture?",
      options: ["No barriers exist", "High initial investment costs and maintenance expenses", "Equipment is always free", "Only small farms face barriers"],
      correct: "High initial investment costs and maintenance expenses",
      explanation: "The high cost of purchasing and maintaining agricultural machinery can be a significant barrier, especially for small-scale farmers.",
      difficulty: "Medium"
    },
    {
      id: "eng12_mech_m7",
      question: "How do weather conditions affect mechanized farming operations?",
      options: ["Weather has no impact", "Weather determines timing and feasibility of mechanized operations", "Machines work in all conditions", "Weather only affects manual labor"],
      correct: "Weather determines timing and feasibility of mechanized operations",
      explanation: "Weather conditions significantly impact when mechanized operations can be performed, affecting soil conditions, crop readiness, and equipment operability.",
      difficulty: "Medium"
    },
    {
      id: "eng12_mech_m8",
      question: "What is the relationship between farm size and mechanization benefits?",
      options: ["Size doesn't matter", "Larger farms typically see greater economic benefits from mechanization", "Only small farms benefit", "Benefits are inversely related to size"],
      correct: "Larger farms typically see greater economic benefits from mechanization",
      explanation: "Larger farms can better spread the fixed costs of machinery over more acres, making mechanization more economically viable.",
      difficulty: "Medium"
    },
    {
      id: "eng12_mech_m9",
      question: "How does mechanized agriculture contribute to food security?",
      options: ["It reduces food security", "It increases production efficiency and food availability", "It has no impact on food security", "It only affects wealthy countries"],
      correct: "It increases production efficiency and food availability",
      explanation: "Mechanized agriculture can increase crop yields and production efficiency, contributing to greater food availability and security.",
      difficulty: "Medium"
    },
    {
      id: "eng12_mech_m10",
      question: "What maintenance considerations are important for agricultural machinery?",
      options: ["Machines need no maintenance", "Regular maintenance is crucial for performance and longevity", "Maintenance is only cosmetic", "New machines never need maintenance"],
      correct: "Regular maintenance is crucial for performance and longevity",
      explanation: "Proper maintenance of agricultural machinery is essential to ensure optimal performance, prevent breakdowns, and extend equipment life.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_mech_h1",
      question: "Analyze the social implications of mechanized agriculture on rural communities and traditional farming practices.",
      options: ["No social implications exist", "Mechanization can displace workers while creating new opportunities, affecting community structures", "Social impacts are always positive", "Mechanization only affects individuals"],
      correct: "Mechanization can displace workers while creating new opportunities, affecting community structures",
      explanation: "Mechanization can lead to rural unemployment and community changes while also creating new technical jobs and improving productivity, requiring careful social adaptation strategies.",
      difficulty: "Hard"
    },
    {
      id: "eng12_mech_h2",
      question: "Evaluate the role of artificial intelligence and machine learning in advancing mechanized agriculture.",
      options: ["AI has no role in agriculture", "AI enables autonomous decision-making and predictive analytics for optimized farming", "AI only complicates farming", "Traditional methods are always better"],
      correct: "AI enables autonomous decision-making and predictive analytics for optimized farming",
      explanation: "AI and machine learning are increasingly used for autonomous equipment operation, crop monitoring, predictive maintenance, and data-driven farming decisions.",
      difficulty: "Hard"
    },
    {
      id: "eng12_mech_h3",
      question: "How does the integration of renewable energy sources impact mechanized agricultural systems?",
      options: ["Renewable energy cannot be used", "Integration can reduce operating costs and environmental impact while improving sustainability", "Renewable energy always increases costs", "Traditional fuel is always better"],
      correct: "Integration can reduce operating costs and environmental impact while improving sustainability",
      explanation: "Renewable energy integration in mechanized agriculture can reduce fuel costs, lower carbon emissions, and improve long-term sustainability of farming operations.",
      difficulty: "Hard"
    },
    {
      id: "eng12_mech_h4",
      question: "Assess the challenges of implementing mechanized agriculture in developing countries.",
      options: ["No challenges exist", "Multiple barriers including cost, infrastructure, skills, and market access need addressing", "Challenges are easily overcome", "Developed country solutions always transfer directly"],
      correct: "Multiple barriers including cost, infrastructure, skills, and market access need addressing",
      explanation: "Developing countries face complex challenges including high equipment costs, inadequate infrastructure, limited technical skills, and market access issues that require comprehensive solutions.",
      difficulty: "Hard"
    },
    {
      id: "eng12_mech_h5",
      question: "How does mechanized agriculture interact with climate change adaptation and mitigation strategies?",
      options: ["No interaction exists", "Mechanization can both contribute to and help address climate challenges", "Mechanization always worsens climate change", "Climate change doesn't affect agriculture"],
      correct: "Mechanization can both contribute to and help address climate challenges",
      explanation: "While mechanization can increase emissions, it also enables precision practices that reduce inputs, supports climate-resilient crops, and improves adaptation to changing conditions.",
      difficulty: "Hard"
    },
    {
      id: "eng12_mech_h6",
      question: "Analyze the impact of autonomous agricultural systems on future farming practices.",
      options: ["Autonomous systems are impossible", "Autonomous systems will transform farming through increased precision and efficiency", "Human operators will always be needed", "Autonomous systems only work in theory"],
      correct: "Autonomous systems will transform farming through increased precision and efficiency",
      explanation: "Autonomous agricultural systems promise to revolutionize farming through 24/7 operations, precise applications, reduced labor needs, and data-driven optimization.",
      difficulty: "Hard"
    },
    {
      id: "eng12_mech_h7",
      question: "Evaluate the sustainability trade-offs in mechanized agriculture systems.",
      options: ["Mechanization is always sustainable", "Complex trade-offs exist between efficiency gains and resource consumption", "Mechanization is never sustainable", "Sustainability is not relevant"],
      correct: "Complex trade-offs exist between efficiency gains and resource consumption",
      explanation: "Mechanized agriculture involves balancing increased efficiency and productivity gains against higher energy consumption, emissions, and resource requirements.",
      difficulty: "Hard"
    },
    {
      id: "eng12_mech_h8",
      question: "How do intellectual property rights and technology access affect global mechanized agriculture development?",
      options: ["IP rights don't affect agriculture", "Patent restrictions can limit technology access while innovation incentives promote development", "All technology should be free", "IP rights only benefit inventors"],
      correct: "Patent restrictions can limit technology access while innovation incentives promote development",
      explanation: "Intellectual property rights create tension between protecting innovation incentives and ensuring broad access to agricultural technologies, especially in developing countries.",
      difficulty: "Hard"
    },
    {
      id: "eng12_mech_h9",
      question: "Assess the role of big data and Internet of Things (IoT) in transforming mechanized agriculture.",
      options: ["Big data has no agricultural applications", "IoT and big data enable comprehensive farm monitoring and optimization", "Data collection is not useful", "Traditional observation is always sufficient"],
      correct: "IoT and big data enable comprehensive farm monitoring and optimization",
      explanation: "IoT sensors and big data analytics provide real-time monitoring of soil, weather, equipment, and crops, enabling unprecedented optimization of mechanized farming operations.",
      difficulty: "Hard"
    },
    {
      id: "eng12_mech_h10",
      question: "How does mechanized agriculture influence global food systems and supply chain dynamics?",
      options: ["No influence on global systems", "Mechanization enables large-scale production that shapes global food markets and trade", "Local systems are unaffected", "Global systems are independent of production methods"],
      correct: "Mechanization enables large-scale production that shapes global food markets and trade",
      explanation: "Mechanized agriculture enables the large-scale, efficient production that underpins global food systems, affecting everything from commodity prices to international trade patterns.",
      difficulty: "Hard"
    }
  ],

  "Unit 6: Green Economies": [
    // Easy Questions
    {
      id: "eng12_green_e1",
      question: "What is a green economy?",
      options: ["An economy focused only on agriculture", "An economy that improves human well-being while reducing environmental risks", "An economy that uses only green colors", "A traditional economy"],
      correct: "An economy that improves human well-being while reducing environmental risks",
      explanation: "A green economy aims to improve human well-being and social equity while significantly reducing environmental risks and ecological scarcities.",
      difficulty: "Easy"
    },
    {
      id: "eng12_green_e2",
      question: "Which is an example of a green job?",
      options: ["Coal mining", "Solar panel installation", "Oil drilling", "Plastic manufacturing"],
      correct: "Solar panel installation",
      explanation: "Solar panel installation is a green job as it contributes to renewable energy development and environmental sustainability.",
      difficulty: "Easy"
    },
    {
      id: "eng12_green_e3",
      question: "What does 'green energy' refer to?",
      options: ["Energy that is colored green", "Renewable energy sources with minimal environmental impact", "Expensive energy", "Nuclear energy only"],
      correct: "Renewable energy sources with minimal environmental impact",
      explanation: "Green energy refers to renewable energy sources like solar, wind, and hydroelectric power that have minimal environmental impact.",
      difficulty: "Easy"
    },
    {
      id: "eng12_green_e4",
      question: "Which practice supports a green economy?",
      options: ["Waste reduction and recycling", "Increased pollution", "Deforestation", "Fossil fuel expansion"],
      correct: "Waste reduction and recycling",
      explanation: "Waste reduction and recycling support a green economy by conserving resources and reducing environmental impact.",
      difficulty: "Easy"
    },
    {
      id: "eng12_green_e5",
      question: "What is sustainable transportation?",
      options: ["Using private cars only", "Transportation methods that minimize environmental impact", "Flying everywhere", "Traditional transportation"],
      correct: "Transportation methods that minimize environmental impact",
      explanation: "Sustainable transportation includes methods like electric vehicles, public transit, and cycling that reduce environmental impact.",
      difficulty: "Easy"
    },
    {
      id: "eng12_green_e6",
      question: "Which building feature promotes green construction?",
      options: ["Energy-efficient systems", "Excessive energy consumption", "Non-renewable materials", "Poor insulation"],
      correct: "Energy-efficient systems",
      explanation: "Energy-efficient systems in buildings reduce energy consumption and environmental impact, supporting green construction practices.",
      difficulty: "Easy"
    },
    {
      id: "eng12_green_e7",
      question: "What is eco-tourism?",
      options: ["Mass tourism", "Responsible travel that conserves environment and improves local welfare", "Expensive tourism", "Urban tourism only"],
      correct: "Responsible travel that conserves environment and improves local welfare",
      explanation: "Eco-tourism involves responsible travel to natural areas that conserves the environment and improves the well-being of local people.",
      difficulty: "Easy"
    },
    {
      id: "eng12_green_e8",
      question: "Which is a benefit of green economies?",
      options: ["Increased pollution", "Job creation in sustainable sectors", "Resource depletion", "Environmental degradation"],
      correct: "Job creation in sustainable sectors",
      explanation: "Green economies create jobs in sustainable sectors like renewable energy, efficiency improvements, and environmental restoration.",
      difficulty: "Easy"
    },
    {
      id: "eng12_green_e9",
      question: "What does 'carbon footprint' measure?",
      options: ["The size of your feet", "Greenhouse gas emissions from activities", "Distance traveled", "Amount of carbon in soil"],
      correct: "Greenhouse gas emissions from activities",
      explanation: "Carbon footprint measures the total greenhouse gas emissions caused by an individual, organization, event, or product.",
      difficulty: "Easy"
    },
    {
      id: "eng12_green_e10",
      question: "Which technology supports green economies?",
      options: ["Coal power plants", "Smart grid systems", "Diesel generators", "Single-use plastics"],
      correct: "Smart grid systems",
      explanation: "Smart grid systems optimize energy distribution and integrate renewable energy sources, supporting green economy development.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_green_m1",
      question: "How does the circular economy model differ from the traditional linear economy?",
      options: ["They are the same", "Circular economy focuses on reuse and recycling while linear follows take-make-dispose", "Circular is always more expensive", "Linear economy is more sustainable"],
      correct: "Circular economy focuses on reuse and recycling while linear follows take-make-dispose",
      explanation: "The circular economy minimizes waste through reuse, recycling, and regeneration, contrasting with the linear 'take-make-dispose' model.",
      difficulty: "Medium"
    },
    {
      id: "eng12_green_m2",
      question: "What role do green bonds play in financing green economies?",
      options: ["They have no role", "They provide dedicated funding for environmental and climate projects", "They only fund traditional projects", "They are always risky investments"],
      correct: "They provide dedicated funding for environmental and climate projects",
      explanation: "Green bonds are debt securities specifically designed to fund projects that have environmental and climate benefits.",
      difficulty: "Medium"
    },
    {
      id: "eng12_green_m3",
      question: "How does green innovation contribute to economic competitiveness?",
      options: ["It reduces competitiveness", "It can create new markets and improve efficiency", "Innovation has no economic impact", "Only traditional methods work"],
      correct: "It can create new markets and improve efficiency",
      explanation: "Green innovation can lead to new products, services, and markets while improving resource efficiency and reducing costs.",
      difficulty: "Medium"
    },
    {
      id: "eng12_green_m4",
      question: "What challenges do developing countries face in transitioning to green economies?",
      options: ["No challenges exist", "Limited resources, technology access, and competing development priorities", "Challenges are easily overcome", "Only developed countries face challenges"],
      correct: "Limited resources, technology access, and competing development priorities",
      explanation: "Developing countries often face constraints in financing, technology, and institutional capacity while balancing immediate development needs.",
      difficulty: "Medium"
    },
    {
      id: "eng12_green_m5",
      question: "How do government policies influence green economy development?",
      options: ["Policies have no influence", "Policies can create incentives and frameworks for green investments", "Only market forces matter", "Policies always hinder development"],
      correct: "Policies can create incentives and frameworks for green investments",
      explanation: "Government policies through regulations, incentives, and investments can significantly shape the direction and pace of green economy transition.",
      difficulty: "Medium"
    },
    {
      id: "eng12_green_m6",
      question: "What is the relationship between green economies and social equity?",
      options: ["No relationship exists", "Green economies should ensure fair distribution of benefits and opportunities", "Green economies reduce equity", "Equity is not relevant"],
      correct: "Green economies should ensure fair distribution of benefits and opportunities",
      explanation: "Green economies aim to improve social equity by ensuring that environmental improvements and economic benefits are shared fairly across society.",
      difficulty: "Medium"
    },
    {
      id: "eng12_green_m7",
      question: "How does consumer behavior influence green economy development?",
      options: ["Consumer behavior doesn't matter", "Consumer demand for sustainable products drives green market growth", "Only producers influence markets", "Consumers always make green choices"],
      correct: "Consumer demand for sustainable products drives green market growth",
      explanation: "Consumer preferences and purchasing decisions significantly influence market demand for green products and services, driving business innovation.",
      difficulty: "Medium"
    },
    {
      id: "eng12_green_m8",
      question: "What is the role of education in promoting green economies?",
      options: ["Education is not important", "Education builds awareness and skills needed for green transitions", "Only technical training matters", "Green skills cannot be taught"],
      correct: "Education builds awareness and skills needed for green transitions",
      explanation: "Education and training are crucial for developing the skills, knowledge, and awareness needed to support green economy transitions.",
      difficulty: "Medium"
    },
    {
      id: "eng12_green_m9",
      question: "How do green economies address resource scarcity?",
      options: ["They ignore resource scarcity", "They promote efficiency and alternative resources to reduce scarcity", "Scarcity is not a real problem", "Only new extraction solves scarcity"],
      correct: "They promote efficiency and alternative resources to reduce scarcity",
      explanation: "Green economies address resource scarcity through improved efficiency, recycling, and developing alternative materials and energy sources.",
      difficulty: "Medium"
    },
    {
      id: "eng12_green_m10",
      question: "What is green accounting and why is it important?",
      options: ["It's not important", "It measures environmental costs and benefits in economic decisions", "It only counts money", "Traditional accounting is sufficient"],
      correct: "It measures environmental costs and benefits in economic decisions",
      explanation: "Green accounting includes environmental costs and benefits in economic calculations, providing a more complete picture of true economic value.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_green_h1",
      question: "Analyze the potential conflicts between rapid economic growth and green economy principles.",
      options: ["No conflicts exist", "Growth pressures can conflict with environmental limits requiring careful balance", "Green principles always align with growth", "Economic growth is unnecessary"],
      correct: "Growth pressures can conflict with environmental limits requiring careful balance",
      explanation: "Rapid economic growth can conflict with environmental sustainability, requiring new models that decouple economic growth from environmental degradation.",
      difficulty: "Hard"
    },
    {
      id: "eng12_green_h2",
      question: "Evaluate the role of international cooperation in scaling green economy transitions globally.",
      options: ["International cooperation is unnecessary", "Global challenges require coordinated policies and technology transfer", "Countries should act independently", "Cooperation always fails"],
      correct: "Global challenges require coordinated policies and technology transfer",
      explanation: "Climate change and environmental challenges require international cooperation for technology sharing, financing, and coordinated policy responses.",
      difficulty: "Hard"
    },
    {
      id: "eng12_green_h3",
      question: "How do stranded assets in fossil fuel industries complicate green economy transitions?",
      options: ["Stranded assets don't exist", "Valuable fossil fuel assets may become worthless, creating economic and political resistance", "Transitions are always smooth", "Asset values don't matter"],
      correct: "Valuable fossil fuel assets may become worthless, creating economic and political resistance",
      explanation: "Stranded assets in fossil fuel industries can create significant economic losses and political resistance to green transitions, requiring careful management strategies.",
      difficulty: "Hard"
    },
    {
      id: "eng12_green_h4",
      question: "Assess the challenges of measuring progress toward green economy goals.",
      options: ["Progress is easy to measure", "Multiple indicators and complex interactions make measurement challenging", "Traditional GDP is sufficient", "Measurement is impossible"],
      correct: "Multiple indicators and complex interactions make measurement challenging",
      explanation: "Green economy progress requires multiple environmental, social, and economic indicators that can interact in complex ways, making measurement and evaluation challenging.",
      difficulty: "Hard"
    },
    {
      id: "eng12_green_h5",
      question: "How does the concept of planetary boundaries relate to green economy development?",
      options: ["No relationship exists", "Planetary boundaries define safe operating spaces that should guide green economy policies", "Boundaries are not relevant", "Economic growth has no limits"],
      correct: "Planetary boundaries define safe operating spaces that should guide green economy policies",
      explanation: "Planetary boundaries identify critical Earth system thresholds that green economies must respect to ensure long-term sustainability and human well-being.",
      difficulty: "Hard"
    },
    {
      id: "eng12_green_h6",
      question: "Analyze the distributional impacts of green economy transitions on different social groups.",
      options: ["All groups benefit equally", "Transitions can have uneven impacts requiring targeted policies for equity", "Only wealthy groups benefit", "Social groups are not affected"],
      correct: "Transitions can have uneven impacts requiring targeted policies for equity",
      explanation: "Green transitions can affect different groups differently, potentially disadvantaging some while benefiting others, requiring careful attention to social equity and justice.",
      difficulty: "Hard"
    },
    {
      id: "eng12_green_h7",
      question: "Evaluate the role of behavioral economics in promoting green economy transitions.",
      options: ["Behavioral factors don't matter", "Understanding behavioral biases can inform policies that promote green choices", "Only rational decision-making matters", "Behavior cannot be influenced"],
      correct: "Understanding behavioral biases can inform policies that promote green choices",
      explanation: "Behavioral economics insights about decision-making biases and motivations can help design more effective policies and interventions for green economy transitions.",
      difficulty: "Hard"
    },
    {
      id: "eng12_green_h8",
      question: "How does the financialization of nature through ecosystem services impact green economy development?",
      options: ["Financialization has no impact", "Can mobilize resources for conservation but risks commodifying nature", "Always benefits the environment", "Only creates problems"],
      correct: "Can mobilize resources for conservation but risks commodifying nature",
      explanation: "Putting economic value on ecosystem services can attract investment for conservation but raises concerns about commodifying nature and potentially excluding local communities.",
      difficulty: "Hard"
    },
    {
      id: "eng12_green_h9",
      question: "Assess the implications of artificial intelligence and automation for green economy job transitions.",
      options: ["AI has no relevance", "AI can both eliminate and create green jobs, requiring workforce adaptation strategies", "AI only eliminates jobs", "Green jobs are AI-proof"],
      correct: "AI can both eliminate and create green jobs, requiring workforce adaptation strategies",
      explanation: "AI and automation may displace some green jobs while creating others, requiring proactive workforce development and transition support policies.",
      difficulty: "Hard"
    },
    {
      id: "eng12_green_h10",
      question: "How do geopolitical factors influence global green economy transitions?",
      options: ["Geopolitics don't affect green transitions", "Resource dependencies and power dynamics can shape transition pathways", "All countries have equal influence", "Politics are separate from economics"],
      correct: "Resource dependencies and power dynamics can shape transition pathways",
      explanation: "Geopolitical factors including resource control, trade relationships, and power dynamics significantly influence how green economy transitions unfold globally.",
      difficulty: "Hard"
    }
  ],

  "Unit 7: National Pride": [
    // Easy Questions
    {
      id: "eng12_pride_e1",
      question: "What is national pride?",
      options: ["Disliking other countries", "A positive feeling of attachment and loyalty to one's country", "Ignoring national problems", "Superiority over other nations"],
      correct: "A positive feeling of attachment and loyalty to one's country",
      explanation: "National pride is a positive emotional connection to one's country, involving appreciation for its culture, history, and achievements.",
      difficulty: "Easy"
    },
    {
      id: "eng12_pride_e2",
      question: "Which is a healthy expression of national pride?",
      options: ["Celebrating cultural heritage", "Hatred of other nations", "Ignoring national problems", "Rejecting foreign ideas"],
      correct: "Celebrating cultural heritage",
      explanation: "Celebrating cultural heritage is a positive way to express national pride that appreciates one's own culture without diminishing others.",
      difficulty: "Easy"
    },
    {
      id: "eng12_pride_e3",
      question: "What is patriotism?",
      options: ["Blind loyalty to government", "Love for and devotion to one's country", "Military service only", "Political extremism"],
      correct: "Love for and devotion to one's country",
      explanation: "Patriotism is love for and devotion to one's country, including its values, institutions, and fellow citizens.",
      difficulty: "Easy"
    },
    {
      id: "eng12_pride_e4",
      question: "How can national symbols contribute to national pride?",
      options: ["They create division", "They represent shared identity and values", "They are meaningless", "They only represent government"],
      correct: "They represent shared identity and values",
      explanation: "National symbols like flags, anthems, and emblems represent shared identity and values that can unite citizens and foster pride.",
      difficulty: "Easy"
    },
    {
      id: "eng12_pride_e5",
      question: "What role does history play in national pride?",
      options: ["History is not important", "It provides shared experiences and achievements to take pride in", "Only recent history matters", "History should be forgotten"],
      correct: "It provides shared experiences and achievements to take pride in",
      explanation: "National history provides a foundation of shared experiences, struggles, and achievements that can inspire pride and unity.",
      difficulty: "Easy"
    },
    {
      id: "eng12_pride_e6",
      question: "Which is a positive aspect of national identity?",
      options: ["Exclusion of others", "Cultural diversity within unity", "Uniformity of thought", "Isolation from the world"],
      correct: "Cultural diversity within unity",
      explanation: "A healthy national identity can embrace cultural diversity while maintaining unity around shared values and citizenship.",
      difficulty: "Easy"
    },
    {
      id: "eng12_pride_e7",
      question: "How can sports contribute to national pride?",
      options: ["Sports divide people", "Athletes representing the country can unite citizens in support", "Sports are not important", "Only winning matters"],
      correct: "Athletes representing the country can unite citizens in support",
      explanation: "Sports can bring people together in support of national teams and athletes, creating shared experiences and pride in achievements.",
      difficulty: "Easy"
    },
    {
      id: "eng12_pride_e8",
      question: "What is civic duty?",
      options: ["Avoiding responsibility", "The responsibility to participate in civic life", "Only voting", "Government obligation only"],
      correct: "The responsibility to participate in civic life",
      explanation: "Civic duty involves citizens' responsibility to participate in the political and civic life of their community and country.",
      difficulty: "Easy"
    },
    {
      id: "eng12_pride_e9",
      question: "How can education promote national pride?",
      options: ["By ignoring national achievements", "By teaching national history and civic values", "By promoting only foreign ideas", "Education has no role"],
      correct: "By teaching national history and civic values",
      explanation: "Education can foster national pride by teaching students about their country's history, achievements, and civic values.",
      difficulty: "Easy"
    },
    {
      id: "eng12_pride_e10",
      question: "What is the difference between patriotism and nationalism?",
      options: ["They are identical", "Patriotism is love of country; nationalism can involve superiority over others", "Nationalism is always better", "Patriotism is negative"],
      correct: "Patriotism is love of country; nationalism can involve superiority over others",
      explanation: "Patriotism involves healthy love for one's country, while nationalism can involve excessive favoritism and feelings of superiority over other nations.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_pride_m1",
      question: "How can national pride be balanced with global citizenship?",
      options: ["They are incompatible", "Pride in one's country can coexist with respect for global community", "Global citizenship is not important", "National pride should be abandoned"],
      correct: "Pride in one's country can coexist with respect for global community",
      explanation: "Healthy national pride can coexist with global citizenship, allowing people to love their country while respecting and cooperating with others globally.",
      difficulty: "Medium"
    },
    {
      id: "eng12_pride_m2",
      question: "What role does cultural achievement play in fostering national pride?",
      options: ["Culture is not important", "Cultural achievements create positive national narratives and shared pride", "Only political achievements matter", "Culture divides people"],
      correct: "Cultural achievements create positive national narratives and shared pride",
      explanation: "Cultural achievements in art, literature, music, and other areas provide positive sources of national pride and shared identity.",
      difficulty: "Medium"
    },
    {
      id: "eng12_pride_m3",
      question: "How can countries address negative aspects of their history while maintaining national pride?",
      options: ["Ignore negative history", "Acknowledge past wrongs while celebrating positive achievements and progress", "Focus only on negative aspects", "Rewrite history"],
      correct: "Acknowledge past wrongs while celebrating positive achievements and progress",
      explanation: "Healthy national pride involves honestly acknowledging historical mistakes while celebrating achievements and progress toward better values.",
      difficulty: "Medium"
    },
    {
      id: "eng12_pride_m4",
      question: "What is the relationship between national pride and social cohesion?",
      options: ["No relationship exists", "Shared national pride can strengthen social bonds and unity", "Pride always creates division", "Social cohesion is unrelated to identity"],
      correct: "Shared national pride can strengthen social bonds and unity",
      explanation: "Shared national pride can contribute to social cohesion by providing common identity and values that bind diverse groups together.",
      difficulty: "Medium"
    },
    {
      id: "eng12_pride_m5",
      question: "How do national holidays and celebrations contribute to national identity?",
      options: ["They waste time and money", "They create shared experiences and reinforce national values", "Only government benefits", "Celebrations are meaningless"],
      correct: "They create shared experiences and reinforce national values",
      explanation: "National holidays and celebrations provide opportunities for citizens to come together, share experiences, and reinforce common values and identity.",
      difficulty: "Medium"
    },
    {
      id: "eng12_pride_m6",
      question: "What challenges do multicultural societies face in building national pride?",
      options: ["No challenges exist", "Balancing diverse cultural identities with shared national identity", "Multiculturalism prevents national pride", "Only homogeneous societies can have pride"],
      correct: "Balancing diverse cultural identities with shared national identity",
      explanation: "Multicultural societies must find ways to honor diverse cultural backgrounds while building shared national identity and values.",
      difficulty: "Medium"
    },
    {
      id: "eng12_pride_m7",
      question: "How does economic success influence national pride?",
      options: ["Economics don't affect pride", "Economic achievements can enhance national confidence and pride", "Only culture matters for pride", "Economic failure helps pride"],
      correct: "Economic achievements can enhance national confidence and pride",
      explanation: "Economic success and achievements can contribute to national pride by demonstrating national capability and improving citizens' quality of life.",
      difficulty: "Medium"
    },
    {
      id: "eng12_pride_m8",
      question: "What role do national leaders play in shaping national pride?",
      options: ["Leaders have no influence", "Leaders can inspire pride through vision and achievements", "Only historical leaders matter", "Leaders always diminish pride"],
      correct: "Leaders can inspire pride through vision and achievements",
      explanation: "National leaders can significantly influence national pride through their vision, achievements, and ability to inspire citizens toward common goals.",
      difficulty: "Medium"
    },
    {
      id: "eng12_pride_m9",
      question: "How can criticism of one's country coexist with national pride?",
      options: ["Criticism destroys pride", "Constructive criticism can stem from love of country and desire for improvement", "Pride prevents all criticism", "Criticism is always unpatriotic"],
      correct: "Constructive criticism can stem from love of country and desire for improvement",
      explanation: "Healthy national pride can include constructive criticism motivated by love for the country and desire to see it improve and live up to its ideals.",
      difficulty: "Medium"
    },
    {
      id: "eng12_pride_m10",
      question: "What is the impact of media on national pride?",
      options: ["Media has no impact", "Media can shape perceptions and narratives about national identity", "Media only creates negative views", "Pride is independent of media"],
      correct: "Media can shape perceptions and narratives about national identity",
      explanation: "Media plays a significant role in shaping how citizens view their country by selecting and framing stories about national achievements and challenges.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_pride_h1",
      question: "Analyze the potential dangers of extreme nationalism and how they differ from healthy patriotism.",
      options: ["Extreme nationalism is always good", "Extreme nationalism can lead to xenophobia and conflict while patriotism promotes positive values", "Patriotism is more dangerous", "No differences exist"],
      correct: "Extreme nationalism can lead to xenophobia and conflict while patriotism promotes positive values",
      explanation: "Extreme nationalism can become xenophobic and aggressive toward other nations, while healthy patriotism promotes positive values and responsible citizenship without hostility toward others.",
      difficulty: "Hard"
    },
    {
      id: "eng12_pride_h2",
      question: "Evaluate how globalization challenges traditional concepts of national identity and pride.",
      options: ["Globalization has no effect", "Globalization creates tension between local identity and global connections", "Globalization eliminates all national identity", "National identity prevents globalization"],
      correct: "Globalization creates tension between local identity and global connections",
      explanation: "Globalization can challenge traditional national identity by increasing cultural exchange and economic interdependence, requiring new ways to balance local and global identities.",
      difficulty: "Hard"
    },
    {
      id: "eng12_pride_h3",
      question: "How do immigrant populations navigate between pride in their heritage and adoption of new national identity?",
      options: ["Impossible to balance both", "Immigrants can maintain heritage pride while developing new national attachments", "Must choose only one identity", "Heritage always takes precedence"],
      correct: "Immigrants can maintain heritage pride while developing new national attachments",
      explanation: "Immigrants often successfully maintain pride in their cultural heritage while developing genuine attachment to their new country, creating multiple layers of identity.",
      difficulty: "Hard"
    },
    {
      id: "eng12_pride_h4",
      question: "Assess the role of collective memory in constructing and maintaining national pride.",
      options: ["Memory is not important", "Collective memory shapes national narratives and identity through selective emphasis", "All memories are equally important", "Memory should be ignored"],
      correct: "Collective memory shapes national narratives and identity through selective emphasis",
      explanation: "Collective memory involves the selective remembering and emphasis of certain historical events and narratives that shape national identity and pride.",
      difficulty: "Hard"
    },
    {
      id: "eng12_pride_h5",
      question: "How does the concept of 'imagined community' relate to national pride and identity formation?",
      options: ["Communities are not imagined", "Nations exist as imagined communities united by shared symbols and narratives", "Only real communities matter", "Imagination has no role"],
      correct: "Nations exist as imagined communities united by shared symbols and narratives",
      explanation: "Benedict Anderson's concept explains how nations exist as imagined communities where people feel connected to others they'll never meet through shared symbols, stories, and rituals.",
      difficulty: "Hard"
    },
    {
      id: "eng12_pride_h6",
      question: "Analyze the ethical implications of using national pride for political mobilization.",
      options: ["No ethical concerns exist", "Using pride for political purposes raises questions about manipulation and democratic values", "Political use is always appropriate", "Pride should never involve politics"],
      correct: "Using pride for political purposes raises questions about manipulation and democratic values",
      explanation: "Political mobilization of national pride can be problematic when it involves manipulation of emotions, suppression of criticism, or undermining democratic deliberation.",
      difficulty: "Hard"
    },
    {
      id: "eng12_pride_h7",
      question: "Evaluate the tension between national sovereignty and international cooperation in the modern world.",
      options: ["No tension exists", "Countries must balance maintaining sovereignty with participating in global governance", "Sovereignty always takes precedence", "International cooperation eliminates sovereignty"],
      correct: "Countries must balance maintaining sovereignty with participating in global governance",
      explanation: "Modern countries face complex challenges in maintaining national sovereignty while participating in international institutions and agreements necessary for addressing global issues.",
      difficulty: "Hard"
    },
    {
      id: "eng12_pride_h8",
      question: "How do social movements within countries challenge or reshape concepts of national pride?",
      options: ["Social movements don't affect national pride", "Movements can expose contradictions and push for more inclusive national identities", "Movements always destroy pride", "National pride prevents social movements"],
      correct: "Movements can expose contradictions and push for more inclusive national identities",
      explanation: "Social movements can challenge exclusive or problematic aspects of national identity while pushing for more inclusive and just concepts of national pride.",
      difficulty: "Hard"
    },
    {
      id: "eng12_pride_h9",
      question: "Assess the impact of transnational identities and loyalties on traditional national pride.",
      options: ["Transnational identities don't exist", "Multiple loyalties can coexist but may complicate simple national identity", "National pride eliminates other loyalties", "Only one identity is possible"],
      correct: "Multiple loyalties can coexist but may complicate simple national identity",
      explanation: "People can maintain multiple identities and loyalties (regional, religious, ethnic, professional) that interact with and sometimes complicate simple national identity.",
      difficulty: "Hard"
    },
    {
      id: "eng12_pride_h10",
      question: "How does the construction of national narratives reflect power relations within society?",
      options: ["Power doesn't affect narratives", "Dominant groups often shape national narratives to reflect their perspectives and interests", "All groups contribute equally", "Narratives are objective facts"],
      correct: "Dominant groups often shape national narratives to reflect their perspectives and interests",
      explanation: "National narratives are often constructed by dominant groups in society and may reflect their perspectives while marginalizing other voices and experiences.",
      difficulty: "Hard"
    }
  ],

  "Unit 8: Telemedicine": [
    // Easy Questions
    {
      id: "eng12_tele_e1",
      question: "What is telemedicine?",
      options: ["Medicine from television", "Providing healthcare services remotely using technology", "Traditional in-person medicine", "Emergency medicine only"],
      correct: "Providing healthcare services remotely using technology",
      explanation: "Telemedicine involves delivering healthcare services and clinical information using telecommunications technology when distance separates patients and providers.",
      difficulty: "Easy"
    },
    {
      id: "eng12_tele_e2",
      question: "Which technology is commonly used in telemedicine?",
      options: ["Video conferencing", "Typewriters", "Telegrams", "Smoke signals"],
      correct: "Video conferencing",
      explanation: "Video conferencing allows real-time visual and audio communication between healthcare providers and patients in telemedicine consultations.",
      difficulty: "Easy"
    },
    {
      id: "eng12_tele_e3",
      question: "What is a major benefit of telemedicine?",
      options: ["Higher costs", "Improved access to healthcare", "Longer waiting times", "More travel required"],
      correct: "Improved access to healthcare",
      explanation: "Telemedicine improves healthcare access, especially for patients in remote areas or with mobility limitations.",
      difficulty: "Easy"
    },
    {
      id: "eng12_tele_e4",
      question: "Which patients particularly benefit from telemedicine?",
      options: ["Only healthy patients", "Patients in rural or remote areas", "Only elderly patients", "Patients who dislike technology"],
      correct: "Patients in rural or remote areas",
      explanation: "Patients in rural or remote areas often have limited access to healthcare providers, making telemedicine particularly valuable for them.",
      difficulty: "Easy"
    },
    {
      id: "eng12_tele_e5",
      question: "What is required for a basic telemedicine consultation?",
      options: ["Hospital equipment", "Internet connection and communication device", "Surgical tools", "Laboratory equipment"],
      correct: "Internet connection and communication device",
      explanation: "Basic telemedicine consultations require an internet connection and a device capable of audio/video communication, such as a smartphone or computer.",
      difficulty: "Easy"
    },
    {
      id: "eng12_tele_e6",
      question: "Which medical activities can be done through telemedicine?",
      options: ["Surgery only", "Consultations and follow-up visits", "Emergency procedures", "Physical examinations only"],
      correct: "Consultations and follow-up visits",
      explanation: "Telemedicine is well-suited for consultations, follow-up visits, medication reviews, and ongoing care management.",
      difficulty: "Easy"
    },
    {
      id: "eng12_tele_e7",
      question: "What does 'teleconsultation' mean?",
      options: ["In-person meeting", "Remote consultation using communication technology", "Written correspondence", "Phone calls only"],
      correct: "Remote consultation using communication technology",
      explanation: "Teleconsultation is a remote consultation between healthcare provider and patient using communication technologies like video calls.",
      difficulty: "Easy"
    },
    {
      id: "eng12_tele_e8",
      question: "Which is a limitation of telemedicine?",
      options: ["Too fast", "Cannot perform physical examinations", "Too cheap", "Too convenient"],
      correct: "Cannot perform physical examinations",
      explanation: "Telemedicine has limitations in performing hands-on physical examinations and procedures that require direct patient contact.",
      difficulty: "Easy"
    },
    {
      id: "eng12_tele_e9",
      question: "What is remote monitoring in telemedicine?",
      options: ["Watching TV", "Tracking patient health data from a distance", "Monitoring hospital staff", "Watching medical shows"],
      correct: "Tracking patient health data from a distance",
      explanation: "Remote monitoring involves using devices to track patient health data (like blood pressure, heart rate) from a distance.",
      difficulty: "Easy"
    },
    {
      id: "eng12_tele_e10",
      question: "When did telemedicine become more widely used?",
      options: ["1800s only", "Significantly expanded during COVID-19 pandemic", "Only in the future", "Never became popular"],
      correct: "Significantly expanded during COVID-19 pandemic",
      explanation: "While telemedicine existed before, it expanded dramatically during the COVID-19 pandemic due to social distancing requirements.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_tele_m1",
      question: "How does telemedicine impact healthcare costs?",
      options: ["Always increases costs", "Can reduce costs by eliminating travel and reducing facility needs", "Has no impact on costs", "Only increases administrative costs"],
      correct: "Can reduce costs by eliminating travel and reducing facility needs",
      explanation: "Telemedicine can reduce costs by eliminating patient travel, reducing need for physical facilities, and improving efficiency in healthcare delivery.",
      difficulty: "Medium"
    },
    {
      id: "eng12_tele_m2",
      question: "What are the main technical requirements for effective telemedicine?",
      options: ["No technical requirements", "Reliable internet, quality devices, and secure platforms", "Only smartphones needed", "Traditional phone lines sufficient"],
      correct: "Reliable internet, quality devices, and secure platforms",
      explanation: "Effective telemedicine requires reliable high-speed internet, quality audio/video devices, and secure, HIPAA-compliant communication platforms.",
      difficulty: "Medium"
    },
    {
      id: "eng12_tele_m3",
      question: "How does telemedicine address healthcare disparities?",
      options: ["It increases disparities", "It can reduce disparities by improving access for underserved populations", "It has no effect on disparities", "Only benefits wealthy patients"],
      correct: "It can reduce disparities by improving access for underserved populations",
      explanation: "Telemedicine can help reduce healthcare disparities by providing access to specialist care for rural and underserved populations.",
      difficulty: "Medium"
    },
    {
      id: "eng12_tele_m4",
      question: "What privacy and security concerns exist with telemedicine?",
      options: ["No privacy concerns", "Patient data transmission and storage require secure protocols", "Privacy is automatically protected", "Security is not important"],
      correct: "Patient data transmission and storage require secure protocols",
      explanation: "Telemedicine raises privacy concerns about secure transmission and storage of patient data, requiring compliance with healthcare privacy regulations.",
      difficulty: "Medium"
    },
    {
      id: "eng12_tele_m5",
      question: "How do regulatory issues affect telemedicine practice?",
      options: ["No regulations apply", "Licensing across state/country boundaries and prescription rules create complexity", "Regulations are the same everywhere", "Only local laws matter"],
      correct: "Licensing across state/country boundaries and prescription rules create complexity",
      explanation: "Telemedicine faces regulatory challenges including physician licensing across jurisdictions and varying rules about prescribing medications remotely.",
      difficulty: "Medium"
    },
    {
      id: "eng12_tele_m6",
      question: "What role does artificial intelligence play in telemedicine?",
      options: ["AI has no role", "AI can assist with diagnosis, triage, and monitoring", "AI replaces all doctors", "AI only handles billing"],
      correct: "AI can assist with diagnosis, triage, and monitoring",
      explanation: "AI can enhance telemedicine by assisting with symptom assessment, patient triage, image analysis, and continuous monitoring.",
      difficulty: "Medium"
    },
    {
      id: "eng12_tele_m7",
      question: "How does telemedicine affect the doctor-patient relationship?",
      options: ["No effect on relationships", "Can both enhance and challenge traditional relationships", "Always improves relationships", "Always damages relationships"],
      correct: "Can both enhance and challenge traditional relationships",
      explanation: "Telemedicine can improve access and convenience but may also challenge traditional aspects of the doctor-patient relationship like physical presence.",
      difficulty: "Medium"
    },
    {
      id: "eng12_tele_m8",
      question: "What is the role of mobile health (mHealth) in telemedicine?",
      options: ["mHealth is unrelated", "Mobile devices enable telemedicine access and monitoring", "Only computers can be used", "Mobile health is obsolete"],
      correct: "Mobile devices enable telemedicine access and monitoring",
      explanation: "Mobile health (mHealth) uses smartphones and tablets to provide telemedicine access and enable continuous health monitoring.",
      difficulty: "Medium"
    },
    {
      id: "eng12_tele_m9",
      question: "How does telemedicine integration with electronic health records benefit patient care?",
      options: ["No benefits exist", "Improves care coordination and access to patient history", "Creates more paperwork", "Only complicates treatment"],
      correct: "Improves care coordination and access to patient history",
      explanation: "Integration with electronic health records allows telemedicine providers to access complete patient history and coordinate care effectively.",
      difficulty: "Medium"
    },
    {
      id: "eng12_tele_m10",
      question: "What training do healthcare providers need for telemedicine?",
      options: ["No special training needed", "Technical skills and communication adaptations for remote care", "Only computer skills", "Traditional training is sufficient"],
      correct: "Technical skills and communication adaptations for remote care",
      explanation: "Healthcare providers need training in telemedicine technology, remote communication skills, and adaptations for virtual patient care.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_tele_h1",
      question: "Analyze the long-term implications of widespread telemedicine adoption on healthcare system structure.",
      options: ["No structural changes", "Could fundamentally reshape healthcare delivery models and infrastructure", "Only affects technology", "Maintains current structures"],
      correct: "Could fundamentally reshape healthcare delivery models and infrastructure",
      explanation: "Widespread telemedicine adoption could transform healthcare by changing how services are delivered, reducing need for physical facilities, and creating new care models.",
      difficulty: "Hard"
    },
    {
      id: "eng12_tele_h2",
      question: "Evaluate the ethical considerations of using AI-powered diagnostic tools in telemedicine.",
      options: ["No ethical issues exist", "Raises concerns about accuracy, bias, liability, and human oversight", "Ethics don't apply to technology", "AI is always ethical"],
      correct: "Raises concerns about accuracy, bias, liability, and human oversight",
      explanation: "AI in telemedicine raises ethical questions about diagnostic accuracy, algorithmic bias, professional liability, and the appropriate level of human oversight.",
      difficulty: "Hard"
    },
    {
      id: "eng12_tele_h3",
      question: "How does the digital divide impact equitable access to telemedicine services?",
      options: ["Digital divide doesn't affect healthcare", "Unequal technology access can worsen healthcare disparities", "Everyone has equal access", "Technology automatically creates equity"],
      correct: "Unequal technology access can worsen healthcare disparities",
      explanation: "The digital divide in internet access, device availability, and digital literacy can exacerbate existing healthcare disparities if not addressed.",
      difficulty: "Hard"
    },
    {
      id: "eng12_tele_h4",
      question: "Assess the challenges of maintaining quality of care standards in telemedicine across different jurisdictions.",
      options: ["Quality standards are uniform", "Varying regulations and standards across jurisdictions create complexity", "Standards don't matter in telemedicine", "Quality is automatically maintained"],
      correct: "Varying regulations and standards across jurisdictions create complexity",
      explanation: "Different jurisdictions have varying quality standards, licensing requirements, and regulations that create challenges for telemedicine practice across boundaries.",
      difficulty: "Hard"
    },
    {
      id: "eng12_tele_h5",
      question: "How does telemedicine impact medical education and training paradigms?",
      options: ["No impact on education", "Requires integration of virtual care skills and remote learning methods", "Traditional education is unchanged", "Medical education becomes obsolete"],
      correct: "Requires integration of virtual care skills and remote learning methods",
      explanation: "Telemedicine necessitates changes in medical education to include virtual care competencies, remote communication skills, and technology integration.",
      difficulty: "Hard"
    },
    {
      id: "eng12_tele_h6",
      question: "Analyze the potential for telemedicine to create new forms of healthcare inequality.",
      options: ["Telemedicine eliminates all inequality", "Could create new disparities based on technology access and digital literacy", "Inequality is impossible with technology", "Only reduces inequality"],
      correct: "Could create new disparities based on technology access and digital literacy",
      explanation: "While telemedicine can reduce some disparities, it may create new ones based on technology access, digital literacy, and quality of internet connectivity.",
      difficulty: "Hard"
    },
    {
      id: "eng12_tele_h7",
      question: "Evaluate the implications of cross-border telemedicine for healthcare sovereignty and regulation.",
      options: ["No sovereignty issues", "Challenges national healthcare regulation and professional licensing systems", "Sovereignty is enhanced", "Regulations become simpler"],
      correct: "Challenges national healthcare regulation and professional licensing systems",
      explanation: "Cross-border telemedicine challenges traditional notions of healthcare sovereignty and creates complex regulatory issues regarding licensing and oversight.",
      difficulty: "Hard"
    },
    {
      id: "eng12_tele_h8",
      question: "How does the commodification of healthcare through telemedicine platforms affect patient care?",
      options: ["No effect on care", "May prioritize efficiency over comprehensive care and therapeutic relationships", "Always improves care quality", "Commodification is beneficial"],
      correct: "May prioritize efficiency over comprehensive care and therapeutic relationships",
      explanation: "Commercial telemedicine platforms may emphasize efficiency and volume over comprehensive care and may affect the depth of therapeutic relationships.",
      difficulty: "Hard"
    },
    {
      id: "eng12_tele_h9",
      question: "Assess the role of patient autonomy and informed consent in telemedicine environments.",
      options: ["Autonomy is not relevant", "Remote settings create new challenges for meaningful consent and shared decision-making", "Consent is automatic", "Technology improves autonomy"],
      correct: "Remote settings create new challenges for meaningful consent and shared decision-making",
      explanation: "Telemedicine environments may complicate informed consent processes and shared decision-making due to technology barriers and communication limitations.",
      difficulty: "Hard"
    },
    {
      id: "eng12_tele_h10",
      question: "How might telemedicine evolution affect the future geography of healthcare expertise and specialization?",
      options: ["Geography becomes irrelevant", "Could redistribute access to expertise but may also concentrate it differently", "Specialization will disappear", "Geography has no impact"],
      correct: "Could redistribute access to expertise but may also concentrate it differently",
      explanation: "Telemedicine could democratize access to specialists but might also lead to new forms of concentration where the best providers serve global markets.",
      difficulty: "Hard"
    }
  ],

  "Unit 9: Conflict Management": [
    // Easy Questions
    {
      id: "eng12_conflict_e1",
      question: "What is conflict?",
      options: ["Agreement between parties", "A disagreement or clash between opposing forces or ideas", "Peaceful cooperation", "Ignoring differences"],
      correct: "A disagreement or clash between opposing forces or ideas",
      explanation: "Conflict is a disagreement or clash that occurs when people have incompatible goals, interests, or values.",
      difficulty: "Easy"
    },
    {
      id: "eng12_conflict_e2",
      question: "Which is a constructive way to handle conflict?",
      options: ["Avoiding the issue completely", "Open communication and listening", "Aggressive confrontation", "Ignoring the other party"],
      correct: "Open communication and listening",
      explanation: "Open communication and active listening help parties understand each other's perspectives and work toward resolution.",
      difficulty: "Easy"
    },
    {
      id: "eng12_conflict_e3",
      question: "What is mediation?",
      options: ["Taking sides in a conflict", "A neutral third party helping disputants reach agreement", "Forcing a solution", "Avoiding conflict"],
      correct: "A neutral third party helping disputants reach agreement",
      explanation: "Mediation involves a neutral third party facilitating communication and negotiation between conflicting parties to reach mutual agreement.",
      difficulty: "Easy"
    },
    {
      id: "eng12_conflict_e4",
      question: "Which emotion often fuels conflict escalation?",
      options: ["Empathy", "Anger", "Compassion", "Understanding"],
      correct: "Anger",
      explanation: "Anger can cloud judgment and lead to aggressive behavior that escalates conflicts rather than resolving them.",
      difficulty: "Easy"
    },
    {
      id: "eng12_conflict_e5",
      question: "What does 'win-win' mean in conflict resolution?",
      options: ["One party wins twice", "Both parties benefit from the solution", "Nobody wins", "Winning is not important"],
      correct: "Both parties benefit from the solution",
      explanation: "A win-win solution means finding outcomes that satisfy the important needs and interests of all parties involved.",
      difficulty: "Easy"
    },
    {
      id: "eng12_conflict_e6",
      question: "Which is an example of interpersonal conflict?",
      options: ["War between countries", "Disagreement between friends", "Natural disaster", "Economic recession"],
      correct: "Disagreement between friends",
      explanation: "Interpersonal conflict occurs between individuals, such as friends, family members, or colleagues in direct relationships.",
      difficulty: "Easy"
    },
    {
      id: "eng12_conflict_e7",
      question: "What is the first step in resolving conflict?",
      options: ["Choose a winner", "Identify and understand the problem", "Punish someone", "Ignore the situation"],
      correct: "Identify and understand the problem",
      explanation: "The first step in conflict resolution is to clearly identify and understand what the conflict is about and why it exists.",
      difficulty: "Easy"
    },
    {
      id: "eng12_conflict_e8",
      question: "Which communication style helps reduce conflict?",
      options: ["Aggressive communication", "Assertive communication", "Passive-aggressive communication", "Silent treatment"],
      correct: "Assertive communication",
      explanation: "Assertive communication involves expressing needs and feelings clearly and respectfully, which helps prevent and resolve conflicts.",
      difficulty: "Easy"
    },
    {
      id: "eng12_conflict_e9",
      question: "What is arbitration?",
      options: ["Informal discussion", "A binding decision made by a neutral third party", "Avoiding the conflict", "Self-resolution"],
      correct: "A binding decision made by a neutral third party",
      explanation: "Arbitration involves a neutral third party (arbitrator) making a binding decision to resolve the conflict after hearing all sides.",
      difficulty: "Easy"
    },
    {
      id: "eng12_conflict_e10",
      question: "Why is empathy important in conflict resolution?",
      options: ["It's not important", "It helps understand other perspectives", "It shows weakness", "It prolongs conflict"],
      correct: "It helps understand other perspectives",
      explanation: "Empathy allows people to understand others' feelings and viewpoints, which is crucial for finding mutually acceptable solutions.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_conflict_m1",
      question: "How do cultural differences impact conflict and its resolution?",
      options: ["Culture has no impact", "Different cultures have varying communication styles and conflict approaches", "All cultures handle conflict identically", "Cultural differences always worsen conflict"],
      correct: "Different cultures have varying communication styles and conflict approaches",
      explanation: "Cultural backgrounds influence how people perceive, express, and resolve conflicts, requiring cultural sensitivity in conflict management.",
      difficulty: "Medium"
    },
    {
      id: "eng12_conflict_m2",
      question: "What is the difference between conflict resolution and conflict management?",
      options: ["They are identical", "Resolution aims to eliminate conflict; management aims to handle it constructively", "Management is always better", "Resolution is impossible"],
      correct: "Resolution aims to eliminate conflict; management aims to handle it constructively",
      explanation: "Conflict resolution seeks to address and eliminate the sources of conflict, while conflict management focuses on handling conflicts constructively when they arise.",
      difficulty: "Medium"
    },
    {
      id: "eng12_conflict_m3",
      question: "How does power imbalance affect conflict dynamics?",
      options: ["Power doesn't affect conflict", "Power imbalances can make resolution more difficult and less fair", "Equal power always exists", "Power imbalance helps resolution"],
      correct: "Power imbalances can make resolution more difficult and less fair",
      explanation: "When parties have unequal power, the stronger party may dominate, making fair resolution difficult and potentially leading to unsatisfactory outcomes.",
      difficulty: "Medium"
    },
    {
      id: "eng12_conflict_m4",
      question: "What role do emotions play in conflict escalation and de-escalation?",
      options: ["Emotions are irrelevant", "Strong emotions can escalate conflict, while emotional regulation helps de-escalation", "Only logic matters", "Emotions always help"],
      correct: "Strong emotions can escalate conflict, while emotional regulation helps de-escalation",
      explanation: "Intense emotions like anger and fear can escalate conflicts, while managing emotions and showing empathy can help de-escalate situations.",
      difficulty: "Medium"
    },
    {
      id: "eng12_conflict_m5",
      question: "How can active listening contribute to conflict resolution?",
      options: ["Listening wastes time", "It helps parties feel heard and understand each other better", "Only speaking matters", "Listening shows weakness"],
      correct: "It helps parties feel heard and understand each other better",
      explanation: "Active listening demonstrates respect, helps clarify misunderstandings, and allows parties to feel heard and understood, facilitating resolution.",
      difficulty: "Medium"
    },
    {
      id: "eng12_conflict_m6",
      question: "What are the potential negative consequences of avoiding conflict?",
      options: ["No negative consequences", "Problems may worsen and resentment may build", "Avoidance always works", "Conflict naturally disappears"],
      correct: "Problems may worsen and resentment may build",
      explanation: "Avoiding conflict can allow problems to escalate, create resentment, and prevent the resolution of underlying issues.",
      difficulty: "Medium"
    },
    {
      id: "eng12_conflict_m7",
      question: "How do interests differ from positions in conflict resolution?",
      options: ["They are the same", "Positions are stated demands; interests are underlying needs and concerns", "Positions are more important", "Interests don't matter"],
      correct: "Positions are stated demands; interests are underlying needs and concerns",
      explanation: "Positions are what people say they want, while interests are the underlying needs, concerns, and motivations driving those positions.",
      difficulty: "Medium"
    },
    {
      id: "eng12_conflict_m8",
      question: "What is the role of trust in conflict resolution?",
      options: ["Trust is not important", "Trust facilitates communication and willingness to compromise", "Trust makes resolution impossible", "Distrust always helps"],
      correct: "Trust facilitates communication and willingness to compromise",
      explanation: "Trust between parties facilitates open communication, honest sharing of concerns, and willingness to make compromises for resolution.",
      difficulty: "Medium"
    },
    {
      id: "eng12_conflict_m9",
      question: "How can time pressure affect conflict resolution processes?",
      options: ["Time pressure helps", "It can lead to hasty decisions and inadequate solutions", "Time doesn't matter", "Pressure always improves outcomes"],
      correct: "It can lead to hasty decisions and inadequate solutions",
      explanation: "Time pressure can force quick decisions that don't adequately address underlying issues, potentially leading to unsatisfactory or temporary solutions.",
      difficulty: "Medium"
    },
    {
      id: "eng12_conflict_m10",
      question: "What is restorative justice and how does it differ from punitive approaches?",
      options: ["They are identical", "Restorative focuses on healing and repair; punitive focuses on punishment", "Punitive is always better", "Restorative ignores accountability"],
      correct: "Restorative focuses on healing and repair; punitive focuses on punishment",
      explanation: "Restorative justice emphasizes healing, repair of harm, and rehabilitation, while punitive approaches focus primarily on punishment for wrongdoing.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_conflict_h1",
      question: "Analyze how systemic inequalities and structural violence contribute to social conflicts.",
      options: ["Systemic factors don't cause conflict", "Structural inequalities create conditions for conflict by denying access and opportunities", "Only individual factors matter", "Inequality prevents conflict"],
      correct: "Structural inequalities create conditions for conflict by denying access and opportunities",
      explanation: "Systemic inequalities in access to resources, opportunities, and power create conditions that can lead to social conflicts and movements for change.",
      difficulty: "Hard"
    },
    {
      id: "eng12_conflict_h2",
      question: "Evaluate the challenges of managing intractable conflicts that involve deep-rooted identity issues.",
      options: ["Identity conflicts are easily resolved", "Deep identity conflicts are particularly difficult due to fundamental values and group belonging", "Identity doesn't affect conflict", "All conflicts are the same"],
      correct: "Deep identity conflicts are particularly difficult due to fundamental values and group belonging",
      explanation: "Conflicts involving identity, religion, ethnicity, or core values are particularly challenging because they touch on fundamental aspects of who people are.",
      difficulty: "Hard"
    },
    {
      id: "eng12_conflict_h3",
      question: "How does the concept of 'ripeness' apply to conflict resolution timing and intervention strategies?",
      options: ["Timing doesn't matter", "Conflicts may have optimal moments when parties are ready for resolution", "Intervention should always be immediate", "Ripeness is not relevant"],
      correct: "Conflicts may have optimal moments when parties are ready for resolution",
      explanation: "Conflict ripeness theory suggests that there are optimal moments when parties are motivated to seek resolution due to mutual hurting stalemates or other factors.",
      difficulty: "Hard"
    },
    {
      id: "eng12_conflict_h4",
      question: "Assess the role of third-party intervention in complex multi-party conflicts.",
      options: ["Third parties make conflicts worse", "Third parties can provide neutrality and facilitate communication but face complex challenges", "Third parties are always successful", "Multi-party conflicts don't need intervention"],
      correct: "Third parties can provide neutrality and facilitate communication but face complex challenges",
      explanation: "Third-party intervention in multi-party conflicts can be valuable but faces challenges in managing multiple relationships, interests, and power dynamics.",
      difficulty: "Hard"
    },
    {
      id: "eng12_conflict_h5",
      question: "How do cognitive biases and psychological factors affect conflict perception and resolution?",
      options: ["Psychology doesn't affect conflict", "Biases like attribution errors and confirmation bias can distort conflict understanding", "People always perceive conflicts accurately", "Cognitive factors don't matter"],
      correct: "Biases like attribution errors and confirmation bias can distort conflict understanding",
      explanation: "Cognitive biases can distort how people perceive conflicts, attribute blame, and process information, affecting their willingness and ability to resolve disputes.",
      difficulty: "Hard"
    },
    {
      id: "eng12_conflict_h6",
      question: "Analyze the relationship between conflict transformation and sustainable peacebuilding.",
      options: ["They are unrelated", "Transformation addresses root causes while peacebuilding creates sustainable structures", "Transformation is sufficient alone", "Peacebuilding is unnecessary"],
      correct: "Transformation addresses root causes while peacebuilding creates sustainable structures",
      explanation: "Conflict transformation focuses on changing underlying relationships and structures, while peacebuilding creates institutions and processes for sustainable peace.",
      difficulty: "Hard"
    },
    {
      id: "eng12_conflict_h7",
      question: "Evaluate the effectiveness of traditional versus modern conflict resolution mechanisms.",
      options: ["Modern methods are always better", "Both traditional and modern approaches have strengths and can complement each other", "Traditional methods are obsolete", "Effectiveness doesn't vary"],
      correct: "Both traditional and modern approaches have strengths and can complement each other",
      explanation: "Traditional conflict resolution mechanisms may have cultural legitimacy and community acceptance, while modern approaches offer systematic frameworks that can work together.",
      difficulty: "Hard"
    },
    {
      id: "eng12_conflict_h8",
      question: "How do technology and social media impact modern conflict dynamics and resolution efforts?",
      options: ["Technology has no impact", "Technology can both escalate conflicts through misinformation and facilitate resolution through communication", "Technology only helps resolution", "Social media prevents all conflict"],
      correct: "Technology can both escalate conflicts through misinformation and facilitate resolution through communication",
      explanation: "Technology and social media can spread misinformation and hatred that escalates conflicts, but can also facilitate communication and coordination for resolution efforts.",
      difficulty: "Hard"
    },
    {
      id: "eng12_conflict_h9",
      question: "Assess the challenges of post-conflict reconciliation and transitional justice processes.",
      options: ["Reconciliation is automatic", "Balancing justice, truth, and reconciliation while addressing victims' needs is complex", "Post-conflict periods are simple", "Justice is not important"],
      correct: "Balancing justice, truth, and reconciliation while addressing victims' needs is complex",
      explanation: "Post-conflict reconciliation involves complex challenges in balancing demands for justice, truth-telling, accountability, and forgiveness while addressing victims' needs.",
      difficulty: "Hard"
    },
    {
      id: "eng12_conflict_h10",
      question: "How does the internationalization of conflicts affect local resolution processes and sovereignty?",
      options: ["Internationalization doesn't affect local processes", "International involvement can provide resources but may undermine local ownership", "International involvement is always helpful", "Sovereignty is not affected"],
      correct: "International involvement can provide resources but may undermine local ownership",
      explanation: "International involvement in conflict resolution can bring valuable resources and expertise but may also undermine local ownership and impose external solutions.",
      difficulty: "Hard"
    }
  ],

  "Unit 10: Robotics": [
    // Easy Questions
    {
      id: "eng12_robot_e1",
      question: "What is a robot?",
      options: ["A human-like machine only", "A programmable machine that can perform tasks autonomously", "A computer program", "A remote control toy"],
      correct: "A programmable machine that can perform tasks autonomously",
      explanation: "A robot is a programmable machine designed to perform tasks automatically, often with some degree of autonomy and physical interaction with the environment.",
      difficulty: "Easy"
    },
    {
      id: "eng12_robot_e2",
      question: "Which is a common use of robots in manufacturing?",
      options: ["Playing games", "Assembly line production", "Writing poetry", "Cooking meals"],
      correct: "Assembly line production",
      explanation: "Robots are widely used in manufacturing for assembly line work, including welding, painting, and assembling products with precision and consistency.",
      difficulty: "Easy"
    },
    {
      id: "eng12_robot_e3",
      question: "What does AI stand for in robotics?",
      options: ["Automatic Intelligence", "Artificial Intelligence", "Advanced Integration", "Assisted Interaction"],
      correct: "Artificial Intelligence",
      explanation: "AI stands for Artificial Intelligence, which enables robots to make decisions, learn, and adapt to different situations.",
      difficulty: "Easy"
    },
    {
      id: "eng12_robot_e4",
      question: "Which component allows a robot to 'see' its environment?",
      options: ["Motors", "Sensors", "Batteries", "Wheels"],
      correct: "Sensors",
      explanation: "Sensors, including cameras and other detection devices, allow robots to gather information about their environment.",
      difficulty: "Easy"
    },
    {
      id: "eng12_robot_e5",
      question: "What is an advantage of using robots in dangerous environments?",
      options: ["They cost less", "They protect human workers from harm", "They work slower", "They need no maintenance"],
      correct: "They protect human workers from harm",
      explanation: "Robots can perform tasks in dangerous environments like nuclear facilities or deep ocean exploration, protecting human workers from potential harm.",
      difficulty: "Easy"
    },
    {
      id: "eng12_robot_e6",
      question: "Which field uses surgical robots?",
      options: ["Agriculture", "Medicine", "Entertainment", "Transportation"],
      correct: "Medicine",
      explanation: "Medical robotics includes surgical robots that assist doctors in performing precise operations with minimal invasiveness.",
      difficulty: "Easy"
    },
    {
      id: "eng12_robot_e7",
      question: "What is automation?",
      options: ["Manual work only", "Using machines to perform tasks without human intervention", "Human supervision only", "Avoiding all technology"],
      correct: "Using machines to perform tasks without human intervention",
      explanation: "Automation involves using machines, including robots, to perform tasks automatically without direct human control.",
      difficulty: "Easy"
    },
    {
      id: "eng12_robot_e8",
      question: "Which is an example of a service robot?",
      options: ["Industrial robot arm", "Vacuum cleaning robot", "Car assembly robot", "Welding robot"],
      correct: "Vacuum cleaning robot",
      explanation: "Service robots like vacuum cleaners perform tasks for humans in domestic or commercial environments, unlike industrial robots used in manufacturing.",
      difficulty: "Easy"
    },
    {
      id: "eng12_robot_e9",
      question: "What programming concept is essential for robotics?",
      options: ["Cooking recipes", "Step-by-step instructions (algorithms)", "Random actions", "Artistic creativity only"],
      correct: "Step-by-step instructions (algorithms)",
      explanation: "Programming robots requires creating algorithms - step-by-step instructions that tell the robot how to perform specific tasks.",
      difficulty: "Easy"
    },
    {
      id: "eng12_robot_e10",
      question: "Which is a limitation of current robots?",
      options: ["They are too fast", "They lack human-like flexibility and adaptability", "They are too intelligent", "They work too long"],
      correct: "They lack human-like flexibility and adaptability",
      explanation: "Current robots, while precise in specific tasks, generally lack the flexibility and adaptability that humans naturally possess in complex, changing environments.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "eng12_robot_m1",
      question: "How does machine learning enhance robot capabilities?",
      options: ["It doesn't enhance capabilities", "It allows robots to improve performance through experience", "It makes robots slower", "It only works in laboratories"],
      correct: "It allows robots to improve performance through experience",
      explanation: "Machine learning enables robots to analyze data from their experiences and improve their performance over time without explicit reprogramming.",
      difficulty: "Medium"
    },
    {
      id: "eng12_robot_m2",
      question: "What ethical concerns arise from increased automation and robotics?",
      options: ["No ethical concerns exist", "Job displacement and decision-making responsibility in autonomous systems", "Only positive effects", "Ethics don't apply to technology"],
      correct: "Job displacement and decision-making responsibility in autonomous systems",
      explanation: "Robotics raises ethical concerns about job displacement for human workers and responsibility for decisions made by autonomous systems.",
      difficulty: "Medium"
    },
    {
      id: "eng12_robot_m3",
      question: "How do robots navigate and move in three-dimensional space?",
      options: ["They cannot move in 3D", "Using sensors, mapping, and path-planning algorithms", "Only through remote control", "Movement is impossible"],
      correct: "Using sensors, mapping, and path-planning algorithms",
      explanation: "Robots navigate 3D space by using various sensors to map their environment and algorithms to plan optimal paths to their destinations.",
      difficulty: "Medium"
    },
    {
      id: "eng12_robot_m4",
      question: "What is human-robot interaction (HRI) and why is it important?",
      options: ["It's not important", "The study of how humans and robots communicate and work together", "Only applies to entertainment", "Humans and robots cannot interact"],
      correct: "The study of how humans and robots communicate and work together",
      explanation: "HRI focuses on designing robots that can effectively communicate and collaborate with humans in various settings, from workplaces to homes.",
      difficulty: "Medium"
    },
    {
      id: "eng12_robot_m5",
      question: "How do collaborative robots (cobots) differ from traditional industrial robots?",
      options: ["No difference exists", "Cobots are designed to work safely alongside humans", "Cobots are always smaller", "Traditional robots are always better"],
      correct: "Cobots are designed to work safely alongside humans",
      explanation: "Collaborative robots are specifically designed with safety features to work alongside human workers, unlike traditional industrial robots that operate in isolation.",
      difficulty: "Medium"
    },
    {
      id: "eng12_robot_m6",
      question: "What role does computer vision play in robotics?",
      options: ["No role in robotics", "Enables robots to process and understand visual information", "Only for entertainment", "Computer vision slows robots down"],
      correct: "Enables robots to process and understand visual information",
      explanation: "Computer vision allows robots to process camera data to recognize objects, navigate environments, and make decisions based on visual input.",
      difficulty: "Medium"
    },
    {
      id: "eng12_robot_m7",
      question: "How does the Internet of Things (IoT) connect with robotics?",
      options: ["IoT and robotics are unrelated", "IoT enables robots to communicate with other devices and systems", "IoT prevents robot operation", "Only computers can use IoT"],
      correct: "IoT enables robots to communicate with other devices and systems",
      explanation: "IoT connectivity allows robots to communicate with other smart devices, share data, and coordinate activities across interconnected systems.",
      difficulty: "Medium"
    },
    {
      id: "eng12_robot_m8",
      question: "What challenges do robots face in unstructured environments?",
      options: ["No challenges in any environment", "Difficulty adapting to unpredictable and changing conditions", "Unstructured environments are easier", "Robots work best in chaos"],
      correct: "Difficulty adapting to unpredictable and changing conditions",
      explanation: "Unstructured environments with changing conditions and unexpected obstacles pose significant challenges for robots designed for predictable, structured tasks.",
      difficulty: "Medium"
    },
    {
      id: "eng12_robot_m9",
      question: "How does robotics contribute to space exploration?",
      options: ["Robotics doesn't help space exploration", "Robots can explore dangerous environments humans cannot reach", "Only humans can explore space", "Robots are too heavy for space"],
      correct: "Robots can explore dangerous environments humans cannot reach",
      explanation: "Space robots like Mars rovers can explore environments too dangerous or distant for human astronauts, gathering valuable scientific data.",
      difficulty: "Medium"
    },
    {
      id: "eng12_robot_m10",
      question: "What is the significance of actuators in robot design?",
      options: ["Actuators are not important", "They enable robots to move and manipulate objects", "They only provide power", "Actuators are just decorative"],
      correct: "They enable robots to move and manipulate objects",
      explanation: "Actuators are the 'muscles' of robots, converting electrical signals into physical movement, allowing robots to move and manipulate their environment.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "eng12_robot_h1",
      question: "Analyze the implications of autonomous weapons systems and the debate over lethal autonomous robots.",
      options: ["No implications exist", "Raises profound ethical and legal questions about machines making life-death decisions", "Autonomous weapons are always beneficial", "The debate is unnecessary"],
      correct: "Raises profound ethical and legal questions about machines making life-death decisions",
      explanation: "Lethal autonomous weapons systems raise critical questions about the ethics of machines making life-and-death decisions and the need for human oversight in warfare.",
      difficulty: "Hard"
    },
    {
      id: "eng12_robot_h2",
      question: "Evaluate the potential for artificial general intelligence (AGI) in robotics and its societal implications.",
      options: ["AGI is impossible", "AGI could revolutionize robotics but raises concerns about control and human relevance", "AGI only benefits society", "Current robots already have AGI"],
      correct: "AGI could revolutionize robotics but raises concerns about control and human relevance",
      explanation: "Artificial General Intelligence in robots could enable human-level reasoning and adaptability but raises fundamental questions about control, safety, and human purpose.",
      difficulty: "Hard"
    },
    {
      id: "eng12_robot_h3",
      question: "How does the uncanny valley phenomenon affect human acceptance of humanoid robots?",
      options: ["Humans always accept robots", "Near-human appearance can create discomfort, affecting robot adoption", "Appearance doesn't matter", "The uncanny valley helps acceptance"],
      correct: "Near-human appearance can create discomfort, affecting robot adoption",
      explanation: "The uncanny valley describes how robots that are almost but not quite human-like can create feelings of unease, potentially hindering acceptance of humanoid robots.",
      difficulty: "Hard"
    },
    {
      id: "eng12_robot_h4",
      question: "Assess the challenges of ensuring robot safety and reliability in critical applications.",
      options: ["Safety is automatically guaranteed", "Requires rigorous testing, redundancy, and fail-safe mechanisms", "Safety is not important", "Robots never fail"],
      correct: "Requires rigorous testing, redundancy, and fail-safe mechanisms",
      explanation: "Critical applications like medical surgery or autonomous vehicles require extensive safety measures, including redundant systems and comprehensive testing protocols.",
      difficulty: "Hard"
    },
    {
      id: "eng12_robot_h5",
      question: "How do swarm robotics principles apply to solving complex problems?",
      options: ["Swarm robotics doesn't work", "Multiple simple robots can collectively solve complex problems through coordination", "Individual robots are always better", "Swarms only create chaos"],
      correct: "Multiple simple robots can collectively solve complex problems through coordination",
      explanation: "Swarm robotics uses coordination between many simple robots to achieve complex collective behaviors, similar to ant colonies or bird flocks.",
      difficulty: "Hard"
    },
    {
      id: "eng12_robot_h6",
      question: "Analyze the economic disruption potential of widespread robotics adoption across industries.",
      options: ["No economic disruption", "Could fundamentally reshape labor markets and economic structures", "Only creates positive economic effects", "Economic systems remain unchanged"],
      correct: "Could fundamentally reshape labor markets and economic structures",
      explanation: "Widespread robotics adoption could transform entire industries, potentially displacing many jobs while creating new ones, requiring significant economic adaptation.",
      difficulty: "Hard"
    },
    {
      id: "eng12_robot_h7",
      question: "Evaluate the role of soft robotics in advancing robot capabilities for complex interactions.",
      options: ["Soft robotics is inferior", "Soft materials enable safer and more adaptable interactions with humans and delicate objects", "Rigid robots are always better", "Soft robotics doesn't advance capabilities"],
      correct: "Soft materials enable safer and more adaptable interactions with humans and delicate objects",
      explanation: "Soft robotics uses flexible materials to create robots that can safely interact with humans and handle delicate objects that rigid robots might damage.",
      difficulty: "Hard"
    },
    {
      id: "eng12_robot_h8",
      question: "How does quantum computing potentially impact future robotics development?",
      options: ["Quantum computing is unrelated", "Could enable vastly more complex AI and optimization for robot decision-making", "Quantum computing makes robotics impossible", "No impact on robotics"],
      correct: "Could enable vastly more complex AI and optimization for robot decision-making",
      explanation: "Quantum computing could revolutionize robotics by enabling much more powerful AI algorithms and solving complex optimization problems in real-time.",
      difficulty: "Hard"
    },
    {
      id: "eng12_robot_h9",
      question: "Assess the philosophical implications of consciousness and sentience in advanced AI robots.",
      options: ["Philosophical questions don't apply", "Raises fundamental questions about consciousness, rights, and moral status", "Robots can never be conscious", "Consciousness is irrelevant"],
      correct: "Raises fundamental questions about consciousness, rights, and moral status",
      explanation: "As robots become more sophisticated, questions arise about whether they could develop consciousness and what rights or moral consideration they might deserve.",
      difficulty: "Hard"
    },
    {
      id: "eng12_robot_h10",
      question: "How might brain-computer interfaces revolutionize human-robot interaction and control?",
      options: ["Brain interfaces won't work with robots", "Could enable direct mental control and seamless human-robot integration", "Only helps disabled individuals", "Brain interfaces are science fiction"],
      correct: "Could enable direct mental control and seamless human-robot integration",
      explanation: "Brain-computer interfaces could allow direct mental control of robots and create unprecedented integration between human cognition and robotic capabilities.",
      difficulty: "Hard"
    }
  ]
};

export interface HistoryQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12HistoryQuestions: { [unit: string]: HistoryQuestion[] } = {
  "Unit 1: Development of Capitalism and Nationalism from 1815 to 1914": [
    // Easy Questions
    {
      id: "hist_cap_e1",
      question: "What economic system emerged prominently in Europe between 1815-1914?",
      options: ["Feudalism", "Capitalism", "Socialism", "Mercantilism"],
      correct: "Capitalism",
      explanation: "Capitalism emerged as the dominant economic system in Europe during this period, characterized by private ownership and free markets.",
      difficulty: "Easy"
    },
    {
      id: "hist_cap_e2",
      question: "What is nationalism?",
      options: ["Love for one's nation", "International cooperation", "Economic trade", "Religious belief"],
      correct: "Love for one's nation",
      explanation: "Nationalism is a political ideology that involves loyalty and devotion to one's nation and its interests.",
      difficulty: "Easy"
    },
    {
      id: "hist_cap_e3",
      question: "Which revolution significantly influenced capitalist development?",
      options: ["Agricultural Revolution", "Industrial Revolution", "Scientific Revolution", "Cultural Revolution"],
      correct: "Industrial Revolution",
      explanation: "The Industrial Revolution transformed production methods and accelerated capitalist development.",
      difficulty: "Easy"
    },
    {
      id: "hist_cap_e4",
      question: "What characterized the factory system?",
      options: ["Home-based production", "Mass production", "Agricultural work", "Craft guilds"],
      correct: "Mass production",
      explanation: "The factory system introduced mass production methods and concentrated workers in industrial facilities.",
      difficulty: "Easy"
    },
    {
      id: "hist_cap_e5",
      question: "Which country is considered the birthplace of modern capitalism?",
      options: ["France", "Germany", "Britain", "Italy"],
      correct: "Britain",
      explanation: "Britain is widely considered the birthplace of modern capitalism due to its early industrial development.",
      difficulty: "Easy"
    },
    {
      id: "hist_cap_e6",
      question: "What was the Congress of Vienna?",
      options: ["A trade agreement", "A peace conference", "A military alliance", "An economic union"],
      correct: "A peace conference",
      explanation: "The Congress of Vienna (1815) was a conference to restore European balance after Napoleon's defeat.",
      difficulty: "Easy"
    },
    {
      id: "hist_cap_e7",
      question: "What does laissez-faire mean?",
      options: ["Government control", "Free market", "Military rule", "Religious authority"],
      correct: "Free market",
      explanation: "Laissez-faire means minimal government intervention in economic affairs, allowing free market operations.",
      difficulty: "Easy"
    },
    {
      id: "hist_cap_e8",
      question: "Which empire was known as the 'sick man of Europe'?",
      options: ["Russian Empire", "Austrian Empire", "Ottoman Empire", "German Empire"],
      correct: "Ottoman Empire",
      explanation: "The Ottoman Empire was called the 'sick man of Europe' due to its declining power in the 19th century.",
      difficulty: "Easy"
    },
    {
      id: "hist_cap_e9",
      question: "What was the dominant political idea of the 19th century?",
      options: ["Socialism", "Nationalism", "Imperialism", "Liberalism"],
      correct: "Nationalism",
      explanation: "Nationalism was the dominant political idea that shaped European politics in the 19th century.",
      difficulty: "Easy"
    },
    {
      id: "hist_cap_e10",
      question: "Which social class emerged during industrial capitalism?",
      options: ["Peasants", "Nobles", "Bourgeoisie", "Clergy"],
      correct: "Bourgeoisie",
      explanation: "The bourgeoisie (middle class) emerged as a powerful social class during the development of industrial capitalism.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "hist_cap_m1",
      question: "What was the significance of the Zollverein in German unification?",
      options: ["Military alliance", "Economic customs union", "Political parliament", "Religious organization"],
      correct: "Economic customs union",
      explanation: "The Zollverein was a German customs union that facilitated economic integration and contributed to German unification.",
      difficulty: "Medium"
    },
    {
      id: "hist_cap_m2",
      question: "How did the railway system contribute to capitalism?",
      options: ["Reduced trade", "Increased transportation costs", "Facilitated market expansion", "Limited industrial growth"],
      correct: "Facilitated market expansion",
      explanation: "Railways expanded markets by reducing transportation costs and time, facilitating capitalist development.",
      difficulty: "Medium"
    },
    {
      id: "hist_cap_m3",
      question: "What was the impact of the Reform Bill of 1832 in Britain?",
      options: ["Extended voting rights", "Abolished slavery", "Established free trade", "Created welfare system"],
      correct: "Extended voting rights",
      explanation: "The Reform Bill of 1832 extended voting rights to the middle class and reformed parliamentary representation.",
      difficulty: "Medium"
    },
    {
      id: "hist_cap_m4",
      question: "Which event sparked widespread nationalist movements in Europe in 1848?",
      options: ["Napoleonic Wars", "February Revolution", "Congress of Vienna", "Industrial Revolution"],
      correct: "February Revolution",
      explanation: "The February Revolution in France (1848) sparked a wave of nationalist and liberal revolutions across Europe.",
      difficulty: "Medium"
    },
    {
      id: "hist_cap_m5",
      question: "What was the Eastern Question?",
      options: ["Asian trade routes", "Ottoman Empire decline", "Russian expansion", "Chinese isolation"],
      correct: "Ottoman Empire decline",
      explanation: "The Eastern Question referred to the diplomatic challenges posed by the declining Ottoman Empire.",
      difficulty: "Medium"
    },
    {
      id: "hist_cap_m6",
      question: "How did banking systems support capitalist development?",
      options: ["Restricted credit", "Provided investment capital", "Limited trade", "Controlled wages"],
      correct: "Provided investment capital",
      explanation: "Banking systems provided crucial investment capital for industrial expansion and capitalist development.",
      difficulty: "Medium"
    },
    {
      id: "hist_cap_m7",
      question: "What was the significance of the Crystal Palace Exhibition (1851)?",
      options: ["Military display", "Industrial showcase", "Political conference", "Religious gathering"],
      correct: "Industrial showcase",
      explanation: "The Crystal Palace Exhibition showcased British industrial supremacy and technological achievements.",
      difficulty: "Medium"
    },
    {
      id: "hist_cap_m8",
      question: "Which principle guided Metternich's foreign policy?",
      options: ["Nationalism", "Liberalism", "Balance of power", "Free trade"],
      correct: "Balance of power",
      explanation: "Metternich's foreign policy was guided by maintaining the balance of power to preserve European stability.",
      difficulty: "Medium"
    },
    {
      id: "hist_cap_m9",
      question: "What was the impact of the Crimean War on European politics?",
      options: ["Strengthened Holy Alliance", "Weakened Russian influence", "United Germany", "Created NATO"],
      correct: "Weakened Russian influence",
      explanation: "The Crimean War significantly weakened Russian influence in European affairs and exposed its military weaknesses.",
      difficulty: "Medium"
    },
    {
      id: "hist_cap_m10",
      question: "How did joint-stock companies contribute to capitalism?",
      options: ["Limited investment", "Concentrated ownership", "Spread investment risk", "Reduced profits"],
      correct: "Spread investment risk",
      explanation: "Joint-stock companies allowed multiple investors to share risks and profits, facilitating capitalist expansion.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "hist_cap_h1",
      question: "Analyze the relationship between imperialism and capitalism in the late 19th century.",
      options: ["Imperialism hindered capitalism", "Capitalism drove imperial expansion", "They were unrelated", "Imperialism replaced capitalism"],
      correct: "Capitalism drove imperial expansion",
      explanation: "Capitalist need for raw materials, markets, and investment opportunities drove European imperial expansion in the late 19th century.",
      difficulty: "Hard"
    },
    {
      id: "hist_cap_h2",
      question: "What was the significance of the Second Industrial Revolution for capitalist development?",
      options: ["Slowed industrial growth", "Introduced new technologies and industries", "Reduced worker productivity", "Limited market expansion"],
      correct: "Introduced new technologies and industries",
      explanation: "The Second Industrial Revolution introduced electricity, chemicals, and steel, transforming capitalist production methods.",
      difficulty: "Hard"
    },
    {
      id: "hist_cap_h3",
      question: "How did the concept of Social Darwinism influence 19th-century capitalism?",
      options: ["Promoted worker rights", "Justified economic inequality", "Supported socialism", "Encouraged government intervention"],
      correct: "Justified economic inequality",
      explanation: "Social Darwinism was used to justify economic inequality and competitive capitalism as natural selection in society.",
      difficulty: "Hard"
    },
    {
      id: "hist_cap_h4",
      question: "What was the impact of the Great Depression of 1873-1896 on European capitalism?",
      options: ["Strengthened laissez-faire policies", "Led to increased government intervention", "Eliminated international trade", "Caused immediate socialism"],
      correct: "Led to increased government intervention",
      explanation: "The Long Depression led to increased government intervention in economies and protective trade policies.",
      difficulty: "Hard"
    },
    {
      id: "hist_cap_h5",
      question: "How did nationalism contribute to the outbreak of World War I?",
      options: ["Promoted international cooperation", "Created alliance system tensions", "Eliminated military conflicts", "Unified European powers"],
      correct: "Created alliance system tensions",
      explanation: "Competing nationalisms created tensions within the alliance system that contributed to World War I's outbreak.",
      difficulty: "Hard"
    },
    {
      id: "hist_cap_h6",
      question: "What was the relationship between liberalism and nationalism in 19th-century Europe?",
      options: ["Always conflicted", "Mutually supportive initially, later diverged", "Identical movements", "Completely separate"],
      correct: "Mutually supportive initially, later diverged",
      explanation: "Liberalism and nationalism initially supported each other but later diverged as nationalism became more exclusive and aggressive.",
      difficulty: "Hard"
    },
    {
      id: "hist_cap_h7",
      question: "How did the development of limited liability companies transform capitalism?",
      options: ["Reduced business risks", "Increased personal liability", "Limited company growth", "Eliminated profits"],
      correct: "Reduced business risks",
      explanation: "Limited liability companies reduced personal financial risks for investors, encouraging greater capital investment and business expansion.",
      difficulty: "Hard"
    },
    {
      id: "hist_cap_h8",
      question: "What was the significance of the Berlin Conference (1878) for European balance of power?",
      options: ["Strengthened Ottoman power", "Redrew Balkan boundaries", "Created German empire", "Ended nationalism"],
      correct: "Redrew Balkan boundaries",
      explanation: "The Berlin Conference redrew Balkan boundaries and temporarily stabilized the European balance of power after the Russo-Turkish War.",
      difficulty: "Hard"
    },
    {
      id: "hist_cap_h9",
      question: "How did technological innovations in communication affect capitalist markets?",
      options: ["Limited market information", "Increased transaction costs", "Integrated global markets", "Reduced trade volume"],
      correct: "Integrated global markets",
      explanation: "Telegraph and improved communication integrated global markets by enabling rapid information exchange and coordination.",
      difficulty: "Hard"
    },
    {
      id: "hist_cap_h10",
      question: "What was the impact of mass production on social class structure?",
      options: ["Eliminated class differences", "Strengthened traditional classes", "Created new class divisions", "Unified all workers"],
      correct: "Created new class divisions",
      explanation: "Mass production created new class divisions between industrial capitalists, skilled workers, and unskilled factory workers.",
      difficulty: "Hard"
    }
  ],

  "Unit 2: Africa and the Colonial Experience (1880s – 1960s)": [
    // Easy Questions
    {
      id: "hist_afr_e1",
      question: "What was the 'Scramble for Africa'?",
      options: ["African civil war", "European colonization race", "Trade competition", "Religious conflict"],
      correct: "European colonization race",
      explanation: "The 'Scramble for Africa' refers to the rapid European colonization of Africa in the late 19th century.",
      difficulty: "Easy"
    },
    {
      id: "hist_afr_e2",
      question: "Which conference divided Africa among European powers?",
      options: ["Berlin Conference", "Vienna Conference", "Paris Conference", "London Conference"],
      correct: "Berlin Conference",
      explanation: "The Berlin Conference (1884-1885) established rules for European colonization and partition of Africa.",
      difficulty: "Easy"
    },
    {
      id: "hist_afr_e3",
      question: "What does colonialism mean?",
      options: ["Trade partnership", "Political control by foreign power", "Cultural exchange", "Military alliance"],
      correct: "Political control by foreign power",
      explanation: "Colonialism is the practice of a country taking political control over another territory and its people.",
      difficulty: "Easy"
    },
    {
      id: "hist_afr_e4",
      question: "Which European country controlled most of West Africa?",
      options: ["Britain", "France", "Germany", "Portugal"],
      correct: "France",
      explanation: "France controlled the largest portion of West Africa during the colonial period.",
      difficulty: "Easy"
    },
    {
      id: "hist_afr_e5",
      question: "What was apartheid?",
      options: ["Economic system", "Racial segregation system", "Education policy", "Military strategy"],
      correct: "Racial segregation system",
      explanation: "Apartheid was a system of institutionalized racial segregation in South Africa.",
      difficulty: "Easy"
    },
    {
      id: "hist_afr_e6",
      question: "When did most African countries gain independence?",
      options: ["1940s", "1950s", "1960s", "1970s"],
      correct: "1960s",
      explanation: "Most African countries gained independence in the 1960s, often called the 'Year of Africa'.",
      difficulty: "Easy"
    },
    {
      id: "hist_afr_e7",
      question: "What was the main economic focus of colonial Africa?",
      options: ["Manufacturing", "Technology", "Raw material extraction", "Banking"],
      correct: "Raw material extraction",
      explanation: "Colonial economies focused primarily on extracting raw materials for export to European markets.",
      difficulty: "Easy"
    },
    {
      id: "hist_afr_e8",
      question: "Which African country was never fully colonized?",
      options: ["Nigeria", "Ethiopia", "Kenya", "Ghana"],
      correct: "Ethiopia",
      explanation: "Ethiopia, except for a brief Italian occupation, was never fully colonized by European powers.",
      difficulty: "Easy"
    },
    {
      id: "hist_afr_e9",
      question: "What was indirect rule?",
      options: ["Direct European administration", "Rule through traditional chiefs", "Military occupation", "Economic control only"],
      correct: "Rule through traditional chiefs",
      explanation: "Indirect rule was a colonial administration method using traditional African rulers as intermediaries.",
      difficulty: "Easy"
    },
    {
      id: "hist_afr_e10",
      question: "What motivated European colonization of Africa?",
      options: ["Cultural exchange", "Economic exploitation", "Scientific research", "Religious purposes only"],
      correct: "Economic exploitation",
      explanation: "Economic motives, including access to raw materials and markets, were primary drivers of African colonization.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "hist_afr_m1",
      question: "How did the discovery of diamonds and gold affect South African colonization?",
      options: ["Reduced European interest", "Intensified colonial control", "Led to immediate independence", "Caused economic decline"],
      correct: "Intensified colonial control",
      explanation: "The discovery of diamonds and gold intensified European colonial control and exploitation of South Africa.",
      difficulty: "Medium"
    },
    {
      id: "hist_afr_m2",
      question: "What was the impact of colonial education on African societies?",
      options: ["Preserved traditional culture", "Created Western-educated elite", "Eliminated literacy", "Strengthened local languages"],
      correct: "Created Western-educated elite",
      explanation: "Colonial education created a Western-educated African elite that would later lead independence movements.",
      difficulty: "Medium"
    },
    {
      id: "hist_afr_m3",
      question: "How did the construction of railways affect colonial Africa?",
      options: ["Connected African communities", "Facilitated resource extraction", "Promoted local trade", "Strengthened traditional economy"],
      correct: "Facilitated resource extraction",
      explanation: "Colonial railways were built primarily to facilitate the extraction and export of African resources.",
      difficulty: "Medium"
    },
    {
      id: "hist_afr_m4",
      question: "What was the significance of the Pan-African movement?",
      options: ["Supported colonialism", "Promoted African unity and independence", "Encouraged European investment", "Created trade barriers"],
      correct: "Promoted African unity and independence",
      explanation: "The Pan-African movement promoted African unity, identity, and the struggle for independence from colonial rule.",
      difficulty: "Medium"
    },
    {
      id: "hist_afr_m5",
      question: "How did World War II affect African independence movements?",
      options: ["Weakened independence movements", "Accelerated decolonization", "Strengthened colonial control", "Had no significant impact"],
      correct: "Accelerated decolonization",
      explanation: "World War II weakened European powers and accelerated African independence movements and decolonization.",
      difficulty: "Medium"
    },
    {
      id: "hist_afr_m6",
      question: "What was the impact of cash crop production on African agriculture?",
      options: ["Improved food security", "Reduced agricultural diversity", "Increased local consumption", "Strengthened subsistence farming"],
      correct: "Reduced agricultural diversity",
      explanation: "Cash crop production reduced agricultural diversity and made African economies dependent on single crops.",
      difficulty: "Medium"
    },
    {
      id: "hist_afr_m7",
      question: "How did missionary activities influence African societies?",
      options: ["Only provided education", "Introduced Christianity and Western values", "Preserved traditional religion", "Had no cultural impact"],
      correct: "Introduced Christianity and Western values",
      explanation: "Missionary activities introduced Christianity and Western values while often undermining traditional African beliefs.",
      difficulty: "Medium"
    },
    {
      id: "hist_afr_m8",
      question: "What was the role of African soldiers in World War II?",
      options: ["Did not participate", "Fought only in Africa", "Served in various theaters", "Only provided supplies"],
      correct: "Served in various theaters",
      explanation: "African soldiers served in various theaters of World War II, contributing significantly to the Allied victory.",
      difficulty: "Medium"
    },
    {
      id: "hist_afr_m9",
      question: "How did colonial borders affect African societies?",
      options: ["Respected ethnic boundaries", "Divided ethnic groups", "United similar peoples", "Had no social impact"],
      correct: "Divided ethnic groups",
      explanation: "Colonial borders often divided ethnic groups and forced different peoples together, creating lasting conflicts.",
      difficulty: "Medium"
    },
    {
      id: "hist_afr_m10",
      question: "What was the significance of the Suez Canal for African colonization?",
      options: ["Reduced European interest", "Increased strategic importance", "Limited trade", "Weakened colonial control"],
      correct: "Increased strategic importance",
      explanation: "The Suez Canal increased Africa's strategic importance as a route to Asia, intensifying colonial competition.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "hist_afr_h1",
      question: "Analyze the long-term economic effects of colonial resource extraction on modern Africa.",
      options: ["Created diversified economies", "Led to structural economic dependency", "Promoted industrial development", "Strengthened local markets"],
      correct: "Led to structural economic dependency",
      explanation: "Colonial resource extraction created structural economic dependency that continues to affect modern African economies.",
      difficulty: "Hard"
    },
    {
      id: "hist_afr_h2",
      question: "How did the concept of 'effective occupation' from the Berlin Conference shape colonial administration?",
      options: ["Required minimal presence", "Demanded comprehensive control", "Focused only on coastal areas", "Ignored interior regions"],
      correct: "Demanded comprehensive control",
      explanation: "'Effective occupation' required European powers to establish comprehensive administrative control over claimed territories.",
      difficulty: "Hard"
    },
    {
      id: "hist_afr_h3",
      question: "What was the relationship between African resistance movements and the development of nationalism?",
      options: ["Resistance weakened nationalism", "Resistance fostered national consciousness", "They were unrelated", "Nationalism preceded resistance"],
      correct: "Resistance fostered national consciousness",
      explanation: "African resistance movements against colonialism fostered the development of national consciousness and identity.",
      difficulty: "Hard"
    },
    {
      id: "hist_afr_h4",
      question: "How did the mandate system after World War I affect African territories?",
      options: ["Granted immediate independence", "Continued colonial control under League oversight", "Eliminated European presence", "Restored traditional rulers"],
      correct: "Continued colonial control under League oversight",
      explanation: "The mandate system continued colonial control under League of Nations oversight, delaying African independence.",
      difficulty: "Hard"
    },
    {
      id: "hist_afr_h5",
      question: "Analyze the impact of colonial land policies on African societies.",
      options: ["Strengthened traditional land tenure", "Displaced communities and created labor migrants", "Had minimal social impact", "Improved agricultural productivity"],
      correct: "Displaced communities and created labor migrants",
      explanation: "Colonial land policies displaced African communities and created systems of migrant labor for European enterprises.",
      difficulty: "Hard"
    },
    {
      id: "hist_afr_h6",
      question: "How did the Atlantic Charter influence African independence movements?",
      options: ["Discouraged independence", "Provided ideological framework for self-determination", "Only applied to Europe", "Strengthened colonial rule"],
      correct: "Provided ideological framework for self-determination",
      explanation: "The Atlantic Charter's principles of self-determination provided ideological framework for African independence movements.",
      difficulty: "Hard"
    },
    {
      id: "hist_afr_h7",
      question: "What was the significance of the Mau Mau uprising in Kenya for African decolonization?",
      options: ["Delayed independence", "Demonstrated costs of maintaining colonial rule", "Strengthened British control", "Had no regional impact"],
      correct: "Demonstrated costs of maintaining colonial rule",
      explanation: "The Mau Mau uprising demonstrated to Britain the high costs and difficulties of maintaining colonial rule by force.",
      difficulty: "Hard"
    },
    {
      id: "hist_afr_h8",
      question: "How did the Cold War affect African decolonization and independence?",
      options: ["Delayed decolonization", "Accelerated independence while creating new dependencies", "Had no significant impact", "Unified African movements"],
      correct: "Accelerated independence while creating new dependencies",
      explanation: "The Cold War accelerated decolonization as superpowers competed for influence, but created new forms of dependency.",
      difficulty: "Hard"
    },
    {
      id: "hist_afr_h9",
      question: "Analyze the role of women in African independence movements.",
      options: ["Had minimal participation", "Played crucial roles in resistance and mobilization", "Only supported male leaders", "Were excluded from politics"],
      correct: "Played crucial roles in resistance and mobilization",
      explanation: "Women played crucial roles in African independence movements through resistance, mobilization, and political organization.",
      difficulty: "Hard"
    },
    {
      id: "hist_afr_h10",
      question: "How did colonial administrative structures influence post-independence African states?",
      options: ["Were completely reformed", "Continued to shape governance patterns", "Had no lasting impact", "Strengthened traditional institutions"],
      correct: "Continued to shape governance patterns",
      explanation: "Colonial administrative structures continued to influence governance patterns and state-society relations in post-independence Africa.",
      difficulty: "Hard"
    }
  ],

  "Unit 3: Social, Economic, and Political Developments in Ethiopia, Mid, 19th C. to 1941": [
    // Easy Questions - 10 questions
    {
      id: "hist_eth_e1",
      question: "Who was the Emperor of Ethiopia during the late 19th century unification?",
      options: ["Tewodros II", "Yohannes IV", "Menelik II", "Haile Selassie"],
      correct: "Menelik II",
      explanation: "Menelik II was the Emperor who unified modern Ethiopia and defeated Italy at the Battle of Adwa.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_e2",
      question: "In which year did the Battle of Adwa take place?",
      options: ["1885", "1896", "1900", "1905"],
      correct: "1896",
      explanation: "The Battle of Adwa took place in 1896, where Ethiopian forces defeated the Italian army.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_e3",
      question: "What was the capital city established by Menelik II?",
      options: ["Gondar", "Axum", "Addis Ababa", "Harar"],
      correct: "Addis Ababa",
      explanation: "Menelik II established Addis Ababa as the capital of modern Ethiopia in the 1880s.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_e4",
      question: "Which European country first attempted to colonize Ethiopia?",
      options: ["Britain", "France", "Italy", "Germany"],
      correct: "Italy",
      explanation: "Italy was the first European country to attempt to colonize Ethiopia, leading to the Battle of Adwa.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_e5",
      question: "What was the primary religion in 19th century Ethiopia?",
      options: ["Islam", "Ethiopian Orthodox Christianity", "Traditional religion", "Catholicism"],
      correct: "Ethiopian Orthodox Christianity",
      explanation: "Ethiopian Orthodox Christianity was the dominant religion in the Ethiopian highlands during this period.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_e6",
      question: "What type of political system existed in 19th century Ethiopia?",
      options: ["Republic", "Democracy", "Feudal monarchy", "Colonial rule"],
      correct: "Feudal monarchy",
      explanation: "Ethiopia had a feudal monarchical system with the Emperor at the top and regional nobles below.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_e7",
      question: "What was the main economic activity in 19th century Ethiopia?",
      options: ["Manufacturing", "Agriculture", "Mining", "Trade only"],
      correct: "Agriculture",
      explanation: "Agriculture was the main economic activity, with most Ethiopians engaged in farming and pastoralism.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_e8",
      question: "Who succeeded Menelik II as ruler?",
      options: ["Tewodros II", "Yohannes IV", "Haile Selassie", "Iyasu V"],
      correct: "Iyasu V",
      explanation: "Iyasu V (Lij Iyasu) succeeded Menelik II, though his reign was brief and controversial.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_e9",
      question: "What was the Zemene Mesafint?",
      options: ["A religious festival", "Era of Princes/regional rulers", "A trade agreement", "A military campaign"],
      correct: "Era of Princes/regional rulers",
      explanation: "The Zemene Mesafint (Era of Princes) was a period when regional rulers had more power than the emperor.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_e10",
      question: "When did Italy invade Ethiopia for the second time?",
      options: ["1935", "1936", "1940", "1941"],
      correct: "1935",
      explanation: "Italy invaded Ethiopia for the second time in 1935, leading to a five-year occupation.",
      difficulty: "Easy"
    },

    // Medium Questions - 10 questions
    {
      id: "hist_eth_m1",
      question: "How did Menelik II modernize Ethiopia's military?",
      options: ["Hired foreign mercenaries", "Imported modern weapons", "Created a navy", "Used only traditional weapons"],
      correct: "Imported modern weapons",
      explanation: "Menelik II modernized Ethiopia's military by importing modern rifles and artillery from Europe.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_m2",
      question: "What was the significance of the Treaty of Wuchale (1889)?",
      options: ["Established trade relations", "Created boundary disputes", "Led to Italian claims over Ethiopia", "Ended slavery"],
      correct: "Led to Italian claims over Ethiopia",
      explanation: "The Treaty of Wuchale led to Italian claims over Ethiopia due to differences in the Amharic and Italian versions.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_m3",
      question: "How did the construction of the railway affect Ethiopian development?",
      options: ["Connected the highlands to the sea", "Reduced trade", "Isolated regions", "Only served military purposes"],
      correct: "Connected the highlands to the sea",
      explanation: "The Addis Ababa-Djibouti railway connected the Ethiopian highlands to the Red Sea, facilitating trade.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_m4",
      question: "What was the role of slavery in 19th century Ethiopian society?",
      options: ["Completely abolished", "Major economic institution", "Limited to border areas", "Only for domestic work"],
      correct: "Major economic institution",
      explanation: "Slavery was a major economic institution in 19th century Ethiopia, providing labor for agriculture and households.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_m5",
      question: "How did Emperor Tewodros II attempt to modernize Ethiopia?",
      options: ["Focused only on military", "Centralized administration and promoted education", "Isolated from outside world", "Maintained traditional systems"],
      correct: "Centralized administration and promoted education",
      explanation: "Tewodros II attempted to centralize administration, promote education, and modernize the military.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_m6",
      question: "What was the impact of the Great Famine of 1888-1892?",
      options: ["Minimal impact", "Severe population decline and social disruption", "Led to increased agriculture", "Strengthened the economy"],
      correct: "Severe population decline and social disruption",
      explanation: "The Great Famine caused severe population decline and social disruption across Ethiopia.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_m7",
      question: "How did regional diversity affect Ethiopian unification?",
      options: ["Made unification impossible", "Required careful negotiation and accommodation", "Had no significant impact", "Led to immediate unity"],
      correct: "Required careful negotiation and accommodation",
      explanation: "Ethiopia's regional diversity required careful negotiation and accommodation during the unification process.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_m8",
      question: "What was the significance of the Battle of Metema (1889)?",
      options: ["Defeated Italian forces", "Established Sudanese border", "United northern regions", "Created trade agreements"],
      correct: "Established Sudanese border",
      explanation: "The Battle of Metema helped establish Ethiopia's western border with Sudan.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_m9",
      question: "How did coffee cultivation affect Ethiopian economy?",
      options: ["Reduced agricultural income", "Became a major export crop", "Was limited to domestic use", "Caused environmental problems only"],
      correct: "Became a major export crop",
      explanation: "Coffee cultivation became increasingly important as a major export crop for the Ethiopian economy.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_m10",
      question: "What was the role of the Ethiopian Orthodox Church in politics?",
      options: ["Completely separated from state", "Played major role in legitimizing rulers", "Only concerned with religious matters", "Opposed all emperors"],
      correct: "Played major role in legitimizing rulers",
      explanation: "The Ethiopian Orthodox Church played a major role in legitimizing rulers and influencing political decisions.",
      difficulty: "Medium"
    },

    // Hard Questions - 10 questions
    {
      id: "hist_eth_h1",
      question: "Analyze the complex factors that led to Ethiopia's victory at Adwa.",
      options: ["Superior numbers only", "Combination of unity, strategy, and modern weapons", "European support", "Geographic advantages only"],
      correct: "Combination of unity, strategy, and modern weapons",
      explanation: "Ethiopia's victory at Adwa resulted from national unity, effective military strategy, access to modern weapons, and strong leadership.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_h2",
      question: "How did the gult system affect land tenure and social relations?",
      options: ["Promoted equality", "Created hierarchical relationships and land concentration", "Had minimal impact", "Benefited peasants primarily"],
      correct: "Created hierarchical relationships and land concentration",
      explanation: "The gult system created hierarchical social relationships and concentrated land ownership among the nobility and church.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_h3",
      question: "What was the impact of firearms on Ethiopian society and politics?",
      options: ["Democratized power", "Strengthened central authority and changed warfare", "Had no significant effect", "Only affected external relations"],
      correct: "Strengthened central authority and changed warfare",
      explanation: "Firearms strengthened central authority by giving the emperor military advantage and fundamentally changed Ethiopian warfare.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_h4",
      question: "How did Ethiopia's unique position during the Scramble for Africa affect its development?",
      options: ["Prevented all modernization", "Allowed autonomous modernization while facing external pressures", "Isolated from global changes", "Guaranteed easy development"],
      correct: "Allowed autonomous modernization while facing external pressures",
      explanation: "Ethiopia's independence allowed autonomous modernization efforts while facing constant external pressures and threats.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_h5",
      question: "Analyze the relationship between state formation and ethnic integration in 19th century Ethiopia.",
      options: ["Complete assimilation occurred", "Complex process of accommodation and resistance", "Total segregation maintained", "No interaction between groups"],
      correct: "Complex process of accommodation and resistance",
      explanation: "State formation involved complex processes of ethnic accommodation, resistance, and gradual integration under imperial rule.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_h6",
      question: "How did the salt trade routes affect Ethiopian political and economic development?",
      options: ["Had minimal importance", "Provided crucial revenue and influenced political alliances", "Only affected coastal regions", "Led to economic decline"],
      correct: "Provided crucial revenue and influenced political alliances",
      explanation: "Salt trade routes provided crucial revenue for the state and influenced political alliances between highland and lowland peoples.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_h7",
      question: "What was the significance of the Italian occupation (1936-1941) for Ethiopian society?",
      options: ["Brought only positive changes", "Disrupted traditional structures while spurring resistance", "Had no lasting impact", "Completely destroyed Ethiopian culture"],
      correct: "Disrupted traditional structures while spurring resistance",
      explanation: "The Italian occupation disrupted traditional structures and relationships while spurring widespread resistance and national consciousness.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_h8",
      question: "How did linguistic diversity affect Ethiopian administration and governance?",
      options: ["Created unified administration", "Required complex multilingual governance systems", "Led to administrative collapse", "Was easily resolved"],
      correct: "Required complex multilingual governance systems",
      explanation: "Linguistic diversity required complex governance systems accommodating multiple languages while promoting Amharic as an official language.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_h9",
      question: "Analyze the role of women in 19th century Ethiopian society and politics.",
      options: ["Complete exclusion from public life", "Significant influence through religious and court positions", "Equal participation with men", "Only involved in agriculture"],
      correct: "Significant influence through religious and court positions",
      explanation: "Women exercised significant influence through religious institutions, court positions, and as regents, despite formal male dominance.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_h10",
      question: "How did external trade relationships affect internal Ethiopian development patterns?",
      options: ["Isolated internal development", "Created uneven development favoring trade routes", "Promoted equal development", "Had no internal effects"],
      correct: "Created uneven development favoring trade routes",
      explanation: "External trade relationships created uneven internal development patterns that favored regions along major trade routes.",
      difficulty: "Hard"
    }
  ],

  "Unit 4: Society and Politics in the Age of World Wars, 1914 - 1945": [
    // Easy Questions
    {
      id: "hist_war_e1",
      question: "When did World War I begin?",
      options: ["1914", "1915", "1916", "1917"],
      correct: "1914",
      explanation: "World War I began in 1914 following the assassination of Archduke Franz Ferdinand.",
      difficulty: "Easy"
    },
    {
      id: "hist_war_e2",
      question: "What event triggered World War I?",
      options: ["German invasion of Belgium", "Assassination of Archduke Franz Ferdinand", "Sinking of Lusitania", "Russian revolution"],
      correct: "Assassination of Archduke Franz Ferdinand",
      explanation: "The assassination of Archduke Franz Ferdinand in Sarajevo triggered the start of World War I.",
      difficulty: "Easy"
    },
    {
      id: "hist_war_e3",
      question: "When did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correct: "1945",
      explanation: "World War II ended in 1945 with the surrender of Japan in September.",
      difficulty: "Easy"
    },
    {
      id: "hist_war_e4",
      question: "Who led Nazi Germany during World War II?",
      options: ["Wilhelm II", "Adolf Hitler", "Heinrich Himmler", "Hermann Göring"],
      correct: "Adolf Hitler",
      explanation: "Adolf Hitler led Nazi Germany as Führer from 1933 until his death in 1945.",
      difficulty: "Easy"
    },
    {
      id: "hist_war_e5",
      question: "What was the Russian Revolution?",
      options: ["Military coup", "Overthrow of Tsarist rule", "Industrial reform", "Religious movement"],
      correct: "Overthrow of Tsarist rule",
      explanation: "The Russian Revolution of 1917 overthrew the Tsarist autocracy and led to the establishment of the Soviet Union.",
      difficulty: "Easy"
    },
    {
      id: "hist_war_e6",
      question: "What was fascism?",
      options: ["Democratic ideology", "Authoritarian nationalist ideology", "Economic theory", "Religious movement"],
      correct: "Authoritarian nationalist ideology",
      explanation: "Fascism was an authoritarian nationalist political ideology that emerged in early 20th century Europe.",
      difficulty: "Easy"
    },
    {
      id: "hist_war_e7",
      question: "Which countries formed the main Allied powers in WWII?",
      options: ["Germany, Italy, Japan", "Britain, France, USA, USSR", "Austria, Hungary, Turkey", "Spain, Portugal, Greece"],
      correct: "Britain, France, USA, USSR",
      explanation: "The main Allied powers in WWII were Britain, France, the United States, and the Soviet Union.",
      difficulty: "Easy"
    },
    {
      id: "hist_war_e8",
      question: "What was the Great Depression?",
      options: ["Military conflict", "Global economic crisis", "Political revolution", "Natural disaster"],
      correct: "Global economic crisis",
      explanation: "The Great Depression was a severe global economic crisis that began in 1929 and lasted through the 1930s.",
      difficulty: "Easy"
    },
    {
      id: "hist_war_e9",
      question: "What was the Holocaust?",
      options: ["Military battle", "Systematic genocide by Nazi Germany", "Economic policy", "Peace treaty"],
      correct: "Systematic genocide by Nazi Germany",
      explanation: "The Holocaust was the systematic genocide of six million Jews and millions of others by Nazi Germany.",
      difficulty: "Easy"
    },
    {
      id: "hist_war_e10",
      question: "Which treaty ended World War I?",
      options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Vienna", "Treaty of Berlin"],
      correct: "Treaty of Versailles",
      explanation: "The Treaty of Versailles was the main treaty that ended World War I between Germany and the Allied powers.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "hist_war_m1",
      question: "How did the alliance system contribute to the outbreak of World War I?",
      options: ["Prevented conflict", "Created a domino effect of declarations", "Had no significant impact", "Promoted peaceful resolution"],
      correct: "Created a domino effect of declarations",
      explanation: "The alliance system created a domino effect where local conflicts escalated into a world war through treaty obligations.",
      difficulty: "Medium"
    },
    {
      id: "hist_war_m2",
      question: "What was the significance of the Bolshevik Revolution for World War I?",
      options: ["Strengthened Russian war effort", "Led to Russia's withdrawal from the war", "Had no impact", "Brought America into the war"],
      correct: "Led to Russia's withdrawal from the war",
      explanation: "The Bolshevik Revolution led to Russia's withdrawal from WWI through the Treaty of Brest-Litovsk.",
      difficulty: "Medium"
    },
    {
      id: "hist_war_m3",
      question: "How did new military technologies affect World War I combat?",
      options: ["Made war more mobile", "Created deadly stalemate", "Reduced casualties", "Shortened the conflict"],
      correct: "Created deadly stalemate",
      explanation: "New military technologies like machine guns and chemical weapons created a deadly stalemate in trench warfare.",
      difficulty: "Medium"
    },
    {
      id: "hist_war_m4",
      question: "What was the impact of the Treaty of Versailles on Germany?",
      options: ["Strengthened German economy", "Imposed harsh reparations and territorial losses", "Had minimal effect", "Promoted German recovery"],
      correct: "Imposed harsh reparations and territorial losses",
      explanation: "The Treaty of Versailles imposed harsh reparations, territorial losses, and military restrictions on Germany.",
      difficulty: "Medium"
    },
    {
      id: "hist_war_m5",
      question: "How did the Great Depression contribute to the rise of fascism?",
      options: ["Strengthened democracy", "Created conditions for extremist movements", "Had no political impact", "Promoted international cooperation"],
      correct: "Created conditions for extremist movements",
      explanation: "The Great Depression created economic desperation and social instability that extremist movements exploited.",
      difficulty: "Medium"
    },
    {
      id: "hist_war_m6",
      question: "What was the significance of the Munich Agreement (1938)?",
      options: ["Prevented war successfully", "Demonstrated appeasement policy failure", "Strengthened collective security", "Resolved all disputes"],
      correct: "Demonstrated appeasement policy failure",
      explanation: "The Munich Agreement demonstrated the failure of appeasement policy and encouraged Hitler's further aggression.",
      difficulty: "Medium"
    },
    {
      id: "hist_war_m7",
      question: "How did World War II differ from World War I in terms of civilian involvement?",
      options: ["Less civilian involvement", "Greater civilian casualties and total war", "Same level of involvement", "Only military casualties"],
      correct: "Greater civilian casualties and total war",
      explanation: "WWII involved greater civilian casualties and represented 'total war' with entire societies mobilized for conflict.",
      difficulty: "Medium"
    },
    {
      id: "hist_war_m8",
      question: "What was the role of propaganda during the world wars?",
      options: ["Limited importance", "Crucial for maintaining morale and support", "Only used by dictatorships", "Had no significant effect"],
      correct: "Crucial for maintaining morale and support",
      explanation: "Propaganda was crucial for maintaining civilian morale, military support, and justifying war efforts.",
      difficulty: "Medium"
    },
    {
      id: "hist_war_m9",
      question: "How did women's roles change during the world wars?",
      options: ["Remained unchanged", "Entered workforce in unprecedented numbers", "Were excluded from war effort", "Only served in traditional roles"],
      correct: "Entered workforce in unprecedented numbers",
      explanation: "Women entered the workforce in unprecedented numbers, taking on roles previously reserved for men.",
      difficulty: "Medium"
    },
    {
      id: "hist_war_m10",
      question: "What was the impact of the atomic bomb on World War II?",
      options: ["Prolonged the war", "Led to Japan's immediate surrender", "Had no military impact", "Only affected civilian morale"],
      correct: "Led to Japan's immediate surrender",
      explanation: "The atomic bombings of Hiroshima and Nagasaki led to Japan's immediate surrender, ending WWII.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "hist_war_h1",
      question: "Analyze the relationship between the interwar economic crisis and the rise of totalitarian regimes.",
      options: ["No connection existed", "Economic crisis created conditions for totalitarian exploitation", "Totalitarianism prevented economic crisis", "Only affected democratic states"],
      correct: "Economic crisis created conditions for totalitarian exploitation",
      explanation: "The interwar economic crisis created social instability and desperation that totalitarian movements exploited to gain power.",
      difficulty: "Hard"
    },
    {
      id: "hist_war_h2",
      question: "How did the concept of 'total war' reshape society and politics during WWII?",
      options: ["Had minimal social impact", "Transformed entire societies for war production", "Only affected military structures", "Strengthened traditional hierarchies"],
      correct: "Transformed entire societies for war production",
      explanation: "Total war transformed entire societies, breaking down traditional barriers and mobilizing all resources for war production.",
      difficulty: "Hard"
    },
    {
      id: "hist_war_h3",
      question: "What was the significance of the Eastern Front in determining WWII's outcome?",
      options: ["Had minimal importance", "Decisive in depleting German resources", "Only affected Soviet Union", "Secondary to Western Front"],
      correct: "Decisive in depleting German resources",
      explanation: "The Eastern Front was decisive in depleting German military resources and ultimately determining WWII's outcome.",
      difficulty: "Hard"
    },
    {
      id: "hist_war_h4",
      question: "How did the League of Nations' failure influence the path to World War II?",
      options: ["Prevented the war", "Demonstrated weakness of collective security", "Strengthened international law", "Had no significant impact"],
      correct: "Demonstrated weakness of collective security",
      explanation: "The League's failure to stop aggression demonstrated the weakness of collective security and encouraged further aggression.",
      difficulty: "Hard"
    },
    {
      id: "hist_war_h5",
      question: "Analyze the role of ideology in shaping the conduct and objectives of World War II.",
      options: ["Ideology was irrelevant", "Ideological conflict intensified brutality and objectives", "Only affected propaganda", "Limited to racial policies"],
      correct: "Ideological conflict intensified brutality and objectives",
      explanation: "Ideological conflicts between fascism, communism, and democracy intensified the war's brutality and shaped its objectives.",
      difficulty: "Hard"
    },
    {
      id: "hist_war_h6",
      question: "How did the wartime alliance between capitalist and communist powers affect post-war relations?",
      options: ["Created permanent unity", "Contained seeds of Cold War conflict", "Had no lasting impact", "Eliminated ideological differences"],
      correct: "Contained seeds of Cold War conflict",
      explanation: "The wartime alliance contained fundamental ideological tensions that became the basis for post-war Cold War conflict.",
      difficulty: "Hard"
    },
    {
      id: "hist_war_h7",
      question: "What was the impact of resistance movements on occupied territories during WWII?",
      options: ["Had minimal effect", "Significantly hampered Axis war efforts", "Only provided moral support", "Weakened Allied operations"],
      correct: "Significantly hampered Axis war efforts",
      explanation: "Resistance movements significantly hampered Axis war efforts by tying down troops and disrupting supply lines.",
      difficulty: "Hard"
    },
    {
      id: "hist_war_h8",
      question: "How did the experience of genocide during WWII influence international law?",
      options: ["Had no legal impact", "Led to development of international human rights law", "Only affected national laws", "Weakened legal protections"],
      correct: "Led to development of international human rights law",
      explanation: "The Holocaust and other genocides led to the development of international human rights law and genocide conventions.",
      difficulty: "Hard"
    },
    {
      id: "hist_war_h9",
      question: "Analyze the role of technology and science in determining the outcomes of both world wars.",
      options: ["Technology was irrelevant", "Technological superiority often determined outcomes", "Only affected communication", "Reduced war's effectiveness"],
      correct: "Technological superiority often determined outcomes",
      explanation: "Technological and scientific superiority, from radar to atomic weapons, often determined military and strategic outcomes.",
      difficulty: "Hard"
    },
    {
      id: "hist_war_h10",
      question: "How did the world wars accelerate decolonization processes globally?",
      options: ["Strengthened colonial rule", "Weakened colonial powers and inspired independence movements", "Had no impact on colonies", "Delayed independence movements"],
      correct: "Weakened colonial powers and inspired independence movements",
      explanation: "The world wars weakened colonial powers financially and militarily while inspiring colonized peoples with ideas of self-determination.",
      difficulty: "Hard"
    }
  ],

  "Unit 5: Global and Regional Developments Since 1945": [
    // Easy Questions
    {
      id: "hist_global_e1",
      question: "What was the Cold War?",
      options: ["A war in Antarctica", "Ideological conflict between USA and USSR", "Economic depression", "World War III"],
      correct: "Ideological conflict between USA and USSR",
      explanation: "The Cold War was an ideological and geopolitical conflict between the United States and Soviet Union.",
      difficulty: "Easy"
    },
    {
      id: "hist_global_e2",
      question: "When was the United Nations established?",
      options: ["1944", "1945", "1946", "1947"],
      correct: "1945",
      explanation: "The United Nations was established in 1945 to promote international cooperation and peace.",
      difficulty: "Easy"
    },
    {
      id: "hist_global_e3",
      question: "What does NATO stand for?",
      options: ["North American Trade Organization", "North Atlantic Treaty Organization", "National Army Training Organization", "New Alliance Treaty Organization"],
      correct: "North Atlantic Treaty Organization",
      explanation: "NATO stands for North Atlantic Treaty Organization, a military alliance formed in 1949.",
      difficulty: "Easy"
    },
    {
      id: "hist_global_e4",
      question: "When did the Berlin Wall fall?",
      options: ["1987", "1988", "1989", "1990"],
      correct: "1989",
      explanation: "The Berlin Wall fell in 1989, symbolizing the end of the Cold War division of Europe.",
      difficulty: "Easy"
    },
    {
      id: "hist_global_e5",
      question: "What was decolonization?",
      options: ["Building new colonies", "Process of colonies gaining independence", "Economic cooperation", "Military alliance"],
      correct: "Process of colonies gaining independence",
      explanation: "Decolonization was the process by which colonial territories gained independence from European powers.",
      difficulty: "Easy"
    },
    {
      id: "hist_global_e6",
      question: "What was the Marshall Plan?",
      options: ["Military strategy", "US economic aid to rebuild Europe", "Peace treaty", "Trade agreement"],
      correct: "US economic aid to rebuild Europe",
      explanation: "The Marshall Plan was a US program of economic aid to help rebuild Western Europe after WWII.",
      difficulty: "Easy"
    },
    {
      id: "hist_global_e7",
      question: "When did the Soviet Union collapse?",
      options: ["1989", "1990", "1991", "1992"],
      correct: "1991",
      explanation: "The Soviet Union collapsed in 1991, ending the Cold War and leading to the independence of many republics.",
      difficulty: "Easy"
    },
    {
      id: "hist_global_e8",
      question: "What was apartheid?",
      options: ["Economic policy", "Racial segregation system in South Africa", "Military strategy", "Religious practice"],
      correct: "Racial segregation system in South Africa",
      explanation: "Apartheid was a system of institutionalized racial segregation in South Africa from 1948 to 1994.",
      difficulty: "Easy"
    },
    {
      id: "hist_global_e9",
      question: "What does EU stand for?",
      options: ["European Union", "Eastern Union", "Economic Union", "Educational Union"],
      correct: "European Union",
      explanation: "EU stands for European Union, a political and economic union of European countries.",
      difficulty: "Easy"
    },
    {
      id: "hist_global_e10",
      question: "Who was the first Secretary-General of the United Nations?",
      options: ["Dag Hammarskjöld", "Trygve Lie", "U Thant", "Kurt Waldheim"],
      correct: "Trygve Lie",
      explanation: "Trygve Lie of Norway was the first Secretary-General of the United Nations from 1946 to 1952.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "hist_global_m1",
      question: "How did the Cuban Missile Crisis affect Cold War tensions?",
      options: ["Escalated to nuclear war", "Brought superpowers closer to nuclear war but led to détente", "Had no significant impact", "Ended the Cold War"],
      correct: "Brought superpowers closer to nuclear war but led to détente",
      explanation: "The Cuban Missile Crisis brought the world close to nuclear war but ultimately led to improved communication and détente.",
      difficulty: "Medium"
    },
    {
      id: "hist_global_m2",
      question: "What was the significance of the Non-Aligned Movement?",
      options: ["Military alliance", "Countries avoiding Cold War alignment", "Economic cooperation", "Religious organization"],
      correct: "Countries avoiding Cold War alignment",
      explanation: "The Non-Aligned Movement represented countries that chose not to align with either superpower during the Cold War.",
      difficulty: "Medium"
    },
    {
      id: "hist_global_m3",
      question: "How did the Suez Crisis (1956) affect global politics?",
      options: ["Strengthened European power", "Marked decline of European colonial influence", "Had no lasting impact", "Started World War III"],
      correct: "Marked decline of European colonial influence",
      explanation: "The Suez Crisis marked the decline of European colonial influence and the rise of American and Soviet power.",
      difficulty: "Medium"
    },
    {
      id: "hist_global_m4",
      question: "What was the impact of the Cultural Revolution in China?",
      options: ["Modernized Chinese society", "Caused social upheaval and economic disruption", "Had minimal impact", "Strengthened traditional culture"],
      correct: "Caused social upheaval and economic disruption",
      explanation: "The Cultural Revolution (1966-1976) caused massive social upheaval and economic disruption in China.",
      difficulty: "Medium"
    },
    {
      id: "hist_global_m5",
      question: "How did the Vietnam War affect American society and foreign policy?",
      options: ["Strengthened American confidence", "Led to social division and foreign policy reassessment", "Had no domestic impact", "Unified American society"],
      correct: "Led to social division and foreign policy reassessment",
      explanation: "The Vietnam War led to deep social divisions in America and a reassessment of interventionist foreign policy.",
      difficulty: "Medium"
    },
    {
      id: "hist_global_m6",
      question: "What was the significance of the Prague Spring (1968)?",
      options: ["Successful democratization", "Failed attempt at reform in Czechoslovakia", "Economic miracle", "Religious revival"],
      correct: "Failed attempt at reform in Czechoslovakia",
      explanation: "The Prague Spring was a failed attempt at political liberalization in Czechoslovakia, crushed by Soviet intervention.",
      difficulty: "Medium"
    },
    {
      id: "hist_global_m7",
      question: "How did oil crises of the 1970s affect global economy?",
      options: ["Lowered energy costs", "Caused global recession and inflation", "Had minimal economic impact", "Strengthened industrial growth"],
      correct: "Caused global recession and inflation",
      explanation: "The oil crises of 1973 and 1979 caused global recession, inflation, and shifts in economic power.",
      difficulty: "Medium"
    },
    {
      id: "hist_global_m8",
      question: "What was the impact of Gorbachev's reforms on the Soviet Union?",
      options: ["Strengthened communist control", "Led to liberalization and eventual collapse", "Had no significant effect", "Created economic prosperity"],
      correct: "Led to liberalization and eventual collapse",
      explanation: "Gorbachev's reforms (glasnost and perestroika) led to liberalization but ultimately contributed to Soviet collapse.",
      difficulty: "Medium"
    },
    {
      id: "hist_global_m9",
      question: "How did the Iranian Revolution (1979) affect Middle Eastern politics?",
      options: ["Strengthened secular governments", "Increased Islamic influence in regional politics", "Had no regional impact", "Promoted Western values"],
      correct: "Increased Islamic influence in regional politics",
      explanation: "The Iranian Revolution increased Islamic influence in Middle Eastern politics and challenged secular Arab nationalism.",
      difficulty: "Medium"
    },
    {
      id: "hist_global_m10",
      question: "What was the significance of the Camp David Accords?",
      options: ["Ended Cold War", "Peace agreement between Egypt and Israel", "Created Palestinian state", "Unified Arab world"],
      correct: "Peace agreement between Egypt and Israel",
      explanation: "The Camp David Accords (1978) established a peace agreement between Egypt and Israel, brokered by the United States.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "hist_global_h1",
      question: "Analyze the role of nuclear deterrence in preventing major conflicts during the Cold War.",
      options: ["Nuclear weapons increased conflicts", "Mutual assured destruction prevented major wars", "Had no impact on conflict", "Only affected superpower relations"],
      correct: "Mutual assured destruction prevented major wars",
      explanation: "The doctrine of mutual assured destruction created a nuclear balance that prevented direct major power conflicts during the Cold War.",
      difficulty: "Hard"
    },
    {
      id: "hist_global_h2",
      question: "How did decolonization reshape the global political and economic order?",
      options: ["Maintained colonial structures", "Created new nations and shifted global power dynamics", "Had minimal global impact", "Strengthened European dominance"],
      correct: "Created new nations and shifted global power dynamics",
      explanation: "Decolonization created dozens of new nations, shifted global power dynamics, and challenged existing economic structures.",
      difficulty: "Hard"
    },
    {
      id: "hist_global_h3",
      question: "What was the relationship between economic development and political stability in post-colonial states?",
      options: ["Economic growth guaranteed stability", "Complex relationship with multiple factors affecting outcomes", "No relationship existed", "Political stability prevented development"],
      correct: "Complex relationship with multiple factors affecting outcomes",
      explanation: "The relationship between development and stability in post-colonial states was complex, influenced by colonial legacies, governance, and external factors.",
      difficulty: "Hard"
    },
    {
      id: "hist_global_h4",
      question: "How did technological advances during the Cold War affect both military strategy and civilian life?",
      options: ["Only affected military sphere", "Transformed both warfare and daily life through innovation", "Had minimal civilian impact", "Reduced technological progress"],
      correct: "Transformed both warfare and daily life through innovation",
      explanation: "Cold War technological competition transformed both military strategy and civilian life through innovations like computers and satellites.",
      difficulty: "Hard"
    },
    {
      id: "hist_global_h5",
      question: "Analyze the impact of proxy wars on regional stability during the Cold War.",
      options: ["Promoted regional peace", "Destabilized regions while avoiding direct superpower conflict", "Had no regional effects", "Strengthened local governments"],
      correct: "Destabilized regions while avoiding direct superpower conflict",
      explanation: "Proxy wars allowed superpowers to compete without direct conflict but often destabilized entire regions for decades.",
      difficulty: "Hard"
    },
    {
      id: "hist_global_h6",
      question: "How did the rise of multinational corporations affect national sovereignty and global economics?",
      options: ["Strengthened national control", "Created new challenges to state sovereignty", "Had no political impact", "Eliminated international trade"],
      correct: "Created new challenges to state sovereignty",
      explanation: "Multinational corporations created new challenges to national sovereignty by operating across borders and influencing domestic policies.",
      difficulty: "Hard"
    },
    {
      id: "hist_global_h7",
      question: "What was the significance of the Helsinki Accords for human rights and international relations?",
      options: ["Had no practical impact", "Established human rights as legitimate international concern", "Only affected European relations", "Weakened human rights protections"],
      correct: "Established human rights as legitimate international concern",
      explanation: "The Helsinki Accords established human rights as a legitimate international concern and provided tools for monitoring compliance.",
      difficulty: "Hard"
    },
    {
      id: "hist_global_h8",
      question: "How did environmental consciousness emerge as a global political issue in the post-1945 period?",
      options: ["Remained a local issue", "Evolved from local concerns to global political movement", "Was ignored by governments", "Only affected developed countries"],
      correct: "Evolved from local concerns to global political movement",
      explanation: "Environmental consciousness evolved from local concerns to a global political movement requiring international cooperation and treaties.",
      difficulty: "Hard"
    },
    {
      id: "hist_global_h9",
      question: "Analyze the role of international organizations in managing global conflicts since 1945.",
      options: ["Successfully prevented all conflicts", "Mixed record with some successes and notable failures", "Completely ineffective", "Only successful in Europe"],
      correct: "Mixed record with some successes and notable failures",
      explanation: "International organizations have had a mixed record, achieving some successes in conflict resolution while failing in others.",
      difficulty: "Hard"
    },
    {
      id: "hist_global_h10",
      question: "How did the information revolution transform global politics and social movements?",
      options: ["Had no political impact", "Enabled rapid communication and coordination of global movements", "Only affected business", "Reduced political participation"],
      correct: "Enabled rapid communication and coordination of global movements",
      explanation: "The information revolution enabled rapid global communication and coordination, transforming how social movements and politics operate.",
      difficulty: "Hard"
    }
  ],

  "Unit 6: Ethiopia: Internal Developments and External Influences from 1941 to 1991": [
    // Easy Questions
    {
      id: "hist_eth_mod_e1",
      question: "Who was the Emperor of Ethiopia from 1941 to 1974?",
      options: ["Menelik II", "Haile Selassie", "Zara Yaqob", "Tewodros II"],
      correct: "Haile Selassie",
      explanation: "Haile Selassie ruled Ethiopia from 1941 (restoration after Italian occupation) until 1974.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_mod_e2",
      question: "In which year was Haile Selassie overthrown?",
      options: ["1973", "1974", "1975", "1976"],
      correct: "1974",
      explanation: "Haile Selassie was overthrown by the Derg military committee in 1974.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_mod_e3",
      question: "What was the Derg?",
      options: ["Religious organization", "Military government", "Political party", "Economic committee"],
      correct: "Military government",
      explanation: "The Derg was a military committee that ruled Ethiopia from 1974 to 1987.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_mod_e4",
      question: "Who led the Derg government?",
      options: ["Haile Selassie", "Mengistu Haile Mariam", "Meles Zenawi", "Aman Andom"],
      correct: "Mengistu Haile Mariam",
      explanation: "Mengistu Haile Mariam emerged as the leader of the Derg and ruled Ethiopia from 1977 to 1991.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_mod_e5",
      question: "What ideology did the Derg adopt?",
      options: ["Capitalism", "Socialism", "Fascism", "Feudalism"],
      correct: "Socialism",
      explanation: "The Derg adopted Marxist-Leninist socialism as its official ideology.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_mod_e6",
      question: "When did Ethiopia experience a major famine that gained international attention?",
      options: ["1983-1984", "1984-1985", "1985-1986", "1986-1987"],
      correct: "1984-1985",
      explanation: "The major famine of 1984-1985 gained widespread international attention and prompted global humanitarian response.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_mod_e7",
      question: "What was the Ogaden War?",
      options: ["Civil war", "Conflict with Somalia", "War with Sudan", "Internal rebellion"],
      correct: "Conflict with Somalia",
      explanation: "The Ogaden War (1977-1978) was a conflict between Ethiopia and Somalia over the Ogaden region.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_mod_e8",
      question: "Which superpower supported Ethiopia during the Cold War?",
      options: ["United States", "Soviet Union", "China", "Britain"],
      correct: "Soviet Union",
      explanation: "The Soviet Union supported the Derg government with military aid and advisors during the Cold War.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_mod_e9",
      question: "What was the Red Terror?",
      options: ["Natural disaster", "Economic policy", "Political purge campaign", "Military operation"],
      correct: "Political purge campaign",
      explanation: "The Red Terror was a violent political purge campaign conducted by the Derg against opponents.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_mod_e10",
      question: "When did the Derg government fall?",
      options: ["1990", "1991", "1992", "1993"],
      correct: "1991",
      explanation: "The Derg government fell in 1991 when the Ethiopian People's Revolutionary Democratic Front (EPRDF) took power.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "hist_eth_mod_m1",
      question: "How did the 1973 famine contribute to Haile Selassie's downfall?",
      options: ["Strengthened his rule", "Exposed government incompetence and triggered unrest", "Had no political impact", "Led to international support"],
      correct: "Exposed government incompetence and triggered unrest",
      explanation: "The 1973 famine exposed government incompetence and secrecy, contributing to student protests and military unrest.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_mod_m2",
      question: "What was the significance of the 1974 student movement?",
      options: ["Supported the monarchy", "Played key role in challenging imperial rule", "Had minimal impact", "Only focused on education"],
      correct: "Played key role in challenging imperial rule",
      explanation: "The 1974 student movement played a crucial role in challenging imperial rule and paving the way for the revolution.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_mod_m3",
      question: "How did land reform affect Ethiopian society under the Derg?",
      options: ["Had no significant impact", "Redistributed land but caused agricultural disruption", "Only benefited nobles", "Improved productivity immediately"],
      correct: "Redistributed land but caused agricultural disruption",
      explanation: "Land reform redistributed land from landlords to peasants but caused significant agricultural disruption and conflict.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_mod_m4",
      question: "What was the impact of villagization on rural Ethiopia?",
      options: ["Improved rural development", "Forced resettlement caused significant hardship", "Had minimal effect", "Only affected urban areas"],
      correct: "Forced resettlement caused significant hardship",
      explanation: "The villagization program involved forced resettlement that caused significant hardship and resistance among rural populations.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_mod_m5",
      question: "How did the Eritrean liberation struggle affect Ethiopian politics?",
      options: ["Strengthened central government", "Created ongoing military burden and political pressure", "Was easily resolved", "Had no significant impact"],
      correct: "Created ongoing military burden and political pressure",
      explanation: "The Eritrean liberation struggle created an ongoing military burden and political pressure that weakened the Derg government.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_mod_m6",
      question: "What role did drought and famine play in Ethiopian politics during this period?",
      options: ["Were purely natural disasters", "Became politicized and affected government legitimacy", "Strengthened government support", "Had no political consequences"],
      correct: "Became politicized and affected government legitimacy",
      explanation: "Drought and famine became highly politicized issues that significantly affected government legitimacy and international relations.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_mod_m7",
      question: "How did Cold War dynamics influence Ethiopian foreign policy?",
      options: ["Ethiopia remained neutral", "Shifted from Western to Soviet alignment", "Only affected military matters", "Had no significant influence"],
      correct: "Shifted from Western to Soviet alignment",
      explanation: "Ethiopia shifted from Western to Soviet alignment after the 1974 revolution, affecting its foreign policy and international relations.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_mod_m8",
      question: "What was the significance of the Ethiopian Orthodox Church's role during this period?",
      options: ["Maintained dominant position", "Lost significant influence and property", "Gained more power", "Was unaffected by political changes"],
      correct: "Lost significant influence and property",
      explanation: "The Ethiopian Orthodox Church lost significant influence and property under the socialist Derg government.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_mod_m9",
      question: "How did urbanization affect Ethiopian society during this period?",
      options: ["Decreased significantly", "Accelerated despite political instability", "Remained unchanged", "Only affected the capital"],
      correct: "Accelerated despite political instability",
      explanation: "Urbanization accelerated during this period despite political instability, changing Ethiopian social structures.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_mod_m10",
      question: "What was the impact of the literacy campaign under the Derg?",
      options: ["Had no success", "Significantly increased literacy rates", "Only targeted urban areas", "Focused only on political education"],
      correct: "Significantly increased literacy rates",
      explanation: "The Derg's literacy campaign significantly increased literacy rates across Ethiopia, though it included political indoctrination.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "hist_eth_mod_h1",
      question: "Analyze the relationship between modernization efforts and traditional structures in imperial Ethiopia (1941-1974).",
      options: ["Modernization replaced traditional structures", "Complex tension between modern and traditional elements", "Traditional structures remained unchanged", "Complete harmony existed"],
      correct: "Complex tension between modern and traditional elements",
      explanation: "There was complex tension between Haile Selassie's modernization efforts and Ethiopia's traditional feudal structures, creating contradictions that contributed to instability.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_mod_h2",
      question: "How did the Derg's nationalization policies affect Ethiopia's economic development?",
      options: ["Promoted rapid growth", "Created mixed results with some gains and significant problems", "Completely destroyed the economy", "Had no significant impact"],
      correct: "Created mixed results with some gains and significant problems",
      explanation: "Nationalization policies created mixed results: some improvements in education and health, but significant economic problems and reduced productivity.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_mod_h3",
      question: "What was the relationship between ethnic politics and state formation during the Derg period?",
      options: ["Ethnicity became irrelevant", "Centralization increased ethnic tensions", "Perfect ethnic harmony achieved", "Only class mattered"],
      correct: "Centralization increased ethnic tensions",
      explanation: "The Derg's centralized socialist approach often ignored or suppressed ethnic concerns, increasing tensions that would later destabilize the state.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_mod_h4",
      question: "How did international humanitarian aid during famines affect Ethiopian sovereignty and politics?",
      options: ["Strengthened sovereignty", "Created dependence and influenced domestic politics", "Had no political effects", "Only provided material benefits"],
      correct: "Created dependence and influenced domestic politics",
      explanation: "International humanitarian aid created complex dependencies and influenced domestic politics, sometimes strengthening the government while exposing its weaknesses.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_mod_h5",
      question: "Analyze the role of the military in Ethiopian politics from 1941 to 1991.",
      options: ["Remained subordinate to civilians", "Evolved from subordinate to dominant political force", "Was completely apolitical", "Only affected security matters"],
      correct: "Evolved from subordinate to dominant political force",
      explanation: "The military evolved from a subordinate institution under Haile Selassie to the dominant political force under the Derg, fundamentally altering Ethiopian governance.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_mod_h6",
      question: "How did the concept of revolutionary transformation under the Derg compare with actual outcomes?",
      options: ["Completely successful", "Significant gap between rhetoric and reality", "Exceeded expectations", "Only focused on rhetoric"],
      correct: "Significant gap between rhetoric and reality",
      explanation: "There was a significant gap between the Derg's revolutionary rhetoric and actual outcomes, with many promises of transformation remaining unfulfilled.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_mod_h7",
      question: "What was the impact of regional liberation movements on Ethiopian state cohesion?",
      options: ["Strengthened central authority", "Severely challenged state territorial integrity", "Had minimal impact", "Only affected border regions"],
      correct: "Severely challenged state territorial integrity",
      explanation: "Regional liberation movements in Eritrea, Tigray, and other areas severely challenged Ethiopian state territorial integrity and central authority.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_mod_h8",
      question: "How did the transition from monarchy to military socialism affect Ethiopia's international relations?",
      options: ["Maintained same relationships", "Completely realigned international partnerships", "Only affected regional relations", "Isolated Ethiopia internationally"],
      correct: "Completely realigned international partnerships",
      explanation: "The transition led to complete realignment: from Western-oriented monarchy to Soviet-aligned socialist state, affecting all international relationships.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_mod_h9",
      question: "Analyze the role of ideology in shaping Derg policies and their implementation.",
      options: ["Ideology was irrelevant", "Marxist-Leninist ideology significantly influenced policies", "Only affected propaganda", "Policies were purely pragmatic"],
      correct: "Marxist-Leninist ideology significantly influenced policies",
      explanation: "Marxist-Leninist ideology significantly shaped Derg policies on land reform, nationalization, and social transformation, though implementation often differed from theory.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_mod_h10",
      question: "How did environmental factors interact with political and social changes during this period?",
      options: ["Environment was irrelevant", "Environmental crises amplified political and social tensions", "Only affected rural areas", "Environmental factors determined everything"],
      correct: "Environmental crises amplified political and social tensions",
      explanation: "Environmental crises like droughts and famines amplified existing political and social tensions, contributing to government instability and social unrest.",
      difficulty: "Hard"
    }
  ],

  "Unit 7: Africa since the 1960s": [
    // Easy Questions
    {
      id: "hist_africa_e1",
      question: "When did most African countries gain independence?",
      options: ["1950s", "1960s", "1970s", "1980s"],
      correct: "1960s",
      explanation: "Most African countries gained independence in the 1960s, with 1960 often called the 'Year of Africa'.",
      difficulty: "Easy"
    },
    {
      id: "hist_africa_e2",
      question: "What was the Organization of African Unity (OAU)?",
      options: ["Economic union", "Pan-African political organization", "Military alliance", "Trade bloc"],
      correct: "Pan-African political organization",
      explanation: "The OAU was a pan-African political organization established in 1963 to promote African unity and cooperation.",
      difficulty: "Easy"
    },
    {
      id: "hist_africa_e3",
      question: "Who was Nelson Mandela?",
      options: ["Nigerian president", "South African anti-apartheid leader", "Ethiopian emperor", "Kenyan independence leader"],
      correct: "South African anti-apartheid leader",
      explanation: "Nelson Mandela was a South African anti-apartheid revolutionary and politician who became the country's first black president.",
      difficulty: "Easy"
    },
    {
      id: "hist_africa_e4",
      question: "When did apartheid end in South Africa?",
      options: ["1990", "1992", "1994", "1996"],
      correct: "1994",
      explanation: "Apartheid officially ended in 1994 with South Africa's first multiracial democratic elections.",
      difficulty: "Easy"
    },
    {
      id: "hist_africa_e5",
      question: "What is the African Union (AU)?",
      options: ["Trade organization", "Military alliance", "Continental organization promoting integration", "Religious group"],
      correct: "Continental organization promoting integration",
      explanation: "The African Union, established in 2001, is a continental organization promoting African integration and development.",
      difficulty: "Easy"
    },
    {
      id: "hist_africa_e6",
      question: "What was the main economic challenge facing newly independent African states?",
      options: ["Too much industrialization", "Dependency on primary commodity exports", "Excessive foreign investment", "Over-diversified economy"],
      correct: "Dependency on primary commodity exports",
      explanation: "Newly independent African states faced economic dependency on primary commodity exports inherited from colonial times.",
      difficulty: "Easy"
    },
    {
      id: "hist_africa_e7",
      question: "What type of government became common in many African countries after independence?",
      options: ["Multi-party democracy", "One-party rule", "Military democracy", "Federal systems"],
      correct: "One-party rule",
      explanation: "Many African countries adopted one-party rule after independence, often justified as necessary for national unity.",
      difficulty: "Easy"
    },
    {
      id: "hist_africa_e8",
      question: "What was structural adjustment?",
      options: ["Political reform", "Economic reform programs", "Military reorganization", "Educational policy"],
      correct: "Economic reform programs",
      explanation: "Structural adjustment programs were economic reform policies imposed by international financial institutions.",
      difficulty: "Easy"
    },
    {
      id: "hist_africa_e9",
      question: "Which disease became a major health crisis in Africa from the 1980s?",
      options: ["Malaria", "HIV/AIDS", "Tuberculosis", "Cholera"],
      correct: "HIV/AIDS",
      explanation: "HIV/AIDS became a major health crisis in Africa from the 1980s, severely affecting many countries.",
      difficulty: "Easy"
    },
    {
      id: "hist_africa_e10",
      question: "What does NEPAD stand for?",
      options: ["New Economic Partnership for African Development", "National Education Program for African Development", "New Environmental Protection for African Development", "Northern European Partnership for African Development"],
      correct: "New Economic Partnership for African Development",
      explanation: "NEPAD stands for New Economic Partnership for African Development, launched in 2001.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "hist_africa_m1",
      question: "How did the Cold War affect African politics after independence?",
      options: ["Had no significant impact", "Led to superpower proxy conflicts and alignment pressures", "Promoted African unity", "Only affected North Africa"],
      correct: "Led to superpower proxy conflicts and alignment pressures",
      explanation: "The Cold War led to superpower proxy conflicts in Africa and pressured African states to align with either the US or USSR.",
      difficulty: "Medium"
    },
    {
      id: "hist_africa_m2",
      question: "What was the significance of the Lagos Plan of Action (1980)?",
      options: ["Military strategy", "African economic development strategy", "Education reform", "Health program"],
      correct: "African economic development strategy",
      explanation: "The Lagos Plan of Action was an African-designed economic development strategy emphasizing self-reliance and regional integration.",
      difficulty: "Medium"
    },
    {
      id: "hist_africa_m3",
      question: "How did debt crisis affect African development in the 1980s?",
      options: ["Accelerated development", "Severely constrained development and led to austerity", "Had minimal impact", "Only affected oil-producing countries"],
      correct: "Severely constrained development and led to austerity",
      explanation: "The debt crisis severely constrained African development and led to painful austerity measures under structural adjustment programs.",
      difficulty: "Medium"
    },
    {
      id: "hist_africa_m4",
      question: "What was the impact of military coups on African governance?",
      options: ["Improved democratic governance", "Destabilized institutions and hindered development", "Had no significant effect", "Only occurred in West Africa"],
      correct: "Destabilized institutions and hindered development",
      explanation: "Military coups destabilized democratic institutions and often hindered long-term political and economic development.",
      difficulty: "Medium"
    },
    {
      id: "hist_africa_m5",
      question: "How did the end of the Cold War affect African politics?",
      options: ["Increased superpower involvement", "Reduced external support and promoted democratization", "Had no significant impact", "Led to more conflicts"],
      correct: "Reduced external support and promoted democratization",
      explanation: "The end of the Cold War reduced external support for authoritarian regimes and promoted democratization pressures in Africa.",
      difficulty: "Medium"
    },
    {
      id: "hist_africa_m6",
      question: "What was the significance of the Rwandan genocide (1994)?",
      options: ["Had minimal regional impact", "Highlighted failure of international intervention", "Strengthened African institutions", "Only affected Rwanda"],
      correct: "Highlighted failure of international intervention",
      explanation: "The Rwandan genocide highlighted the failure of international intervention and led to reforms in peacekeeping approaches.",
      difficulty: "Medium"
    },
    {
      id: "hist_africa_m7",
      question: "How did globalization affect African economies?",
      options: ["Uniformly benefited all countries", "Created mixed results with opportunities and challenges", "Had no significant impact", "Only harmed African economies"],
      correct: "Created mixed results with opportunities and challenges",
      explanation: "Globalization created mixed results for African economies, offering new opportunities while also creating new challenges and vulnerabilities.",
      difficulty: "Medium"
    },
    {
      id: "hist_africa_m8",
      question: "What was the role of regional economic communities in African integration?",
      options: ["Completely unsuccessful", "Promoted gradual economic integration", "Only existed on paper", "Hindered development"],
      correct: "Promoted gradual economic integration",
      explanation: "Regional economic communities like ECOWAS and SADC promoted gradual economic integration and cooperation among African states.",
      difficulty: "Medium"
    },
    {
      id: "hist_africa_m9",
      question: "How did natural resource discoveries affect African politics?",
      options: ["Always promoted development", "Often led to conflicts and governance challenges", "Had no political impact", "Only benefited the people"],
      correct: "Often led to conflicts and governance challenges",
      explanation: "Natural resource discoveries often led to conflicts over control and created governance challenges known as the 'resource curse.'",
      difficulty: "Medium"
    },
    {
      id: "hist_africa_m10",
      question: "What was the impact of brain drain on African development?",
      options: ["Improved local capacity", "Reduced human capital and development capacity", "Had no significant effect", "Only affected education sector"],
      correct: "Reduced human capital and development capacity",
      explanation: "Brain drain significantly reduced African human capital and development capacity as educated professionals migrated to developed countries.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "hist_africa_h1",
      question: "Analyze the relationship between democratization and economic development in post-independence Africa.",
      options: ["Democracy always promoted development", "Complex relationship with varying outcomes across countries", "Authoritarianism was always better for development", "No relationship existed"],
      correct: "Complex relationship with varying outcomes across countries",
      explanation: "The relationship between democratization and development in Africa has been complex, with varying outcomes depending on institutional quality, leadership, and external factors.",
      difficulty: "Hard"
    },
    {
      id: "hist_africa_h2",
      question: "How did colonial legacies continue to shape African politics and economics after independence?",
      options: ["Completely overcome after independence", "Continued to significantly influence institutions and development patterns", "Only affected former French colonies", "Had minimal lasting impact"],
      correct: "Continued to significantly influence institutions and development patterns",
      explanation: "Colonial legacies continued to significantly influence African institutions, development patterns, and international relationships long after independence.",
      difficulty: "Hard"
    },
    {
      id: "hist_africa_h3",
      question: "What has been the impact of ethnic diversity on African state-building?",
      options: ["Always led to conflict", "Created both challenges and opportunities for inclusive governance", "Had no significant impact", "Prevented all development"],
      correct: "Created both challenges and opportunities for inclusive governance",
      explanation: "Ethnic diversity has created both challenges for national unity and opportunities for inclusive governance, with outcomes varying by country and leadership approach.",
      difficulty: "Hard"
    },
    {
      id: "hist_africa_h4",
      question: "How have African states attempted to balance sovereignty with international integration?",
      options: ["Completely rejected integration", "Sought selective integration while protecting key sovereign rights", "Abandoned sovereignty completely", "Only pursued bilateral relations"],
      correct: "Sought selective integration while protecting key sovereign rights",
      explanation: "African states have sought selective integration through continental and regional organizations while attempting to protect key aspects of national sovereignty.",
      difficulty: "Hard"
    },
    {
      id: "hist_africa_h5",
      question: "Analyze the role of civil society in African democratization processes.",
      options: ["Had no significant role", "Played crucial role in demanding accountability and reform", "Only supported authoritarian regimes", "Was completely controlled by government"],
      correct: "Played crucial role in demanding accountability and reform",
      explanation: "Civil society organizations played crucial roles in African democratization by demanding accountability, monitoring elections, and advocating for reform.",
      difficulty: "Hard"
    },
    {
      id: "hist_africa_h6",
      question: "How has climate change affected African development and governance challenges?",
      options: ["Had no significant impact", "Exacerbated existing vulnerabilities and created new governance challenges", "Only affected agriculture", "Improved development prospects"],
      correct: "Exacerbated existing vulnerabilities and created new governance challenges",
      explanation: "Climate change has exacerbated existing vulnerabilities in Africa and created new governance challenges related to resource scarcity and population displacement.",
      difficulty: "Hard"
    },
    {
      id: "hist_africa_h7",
      question: "What has been the evolution of African approaches to conflict resolution?",
      options: ["Remained completely dependent on external intervention", "Developed increasingly sophisticated continental mechanisms", "Abandoned all conflict resolution efforts", "Only used traditional methods"],
      correct: "Developed increasingly sophisticated continental mechanisms",
      explanation: "Africa has developed increasingly sophisticated continental and regional mechanisms for conflict prevention, management, and resolution through the AU and RECs.",
      difficulty: "Hard"
    },
    {
      id: "hist_africa_h8",
      question: "How have gender dynamics evolved in African politics and society since independence?",
      options: ["Remained completely unchanged", "Shown gradual progress with significant variations across countries", "Achieved complete equality everywhere", "Deteriorated compared to pre-independence"],
      correct: "Shown gradual progress with significant variations across countries",
      explanation: "Gender dynamics have shown gradual progress in many African countries, with increasing women's political participation, though significant variations and challenges remain.",
      difficulty: "Hard"
    },
    {
      id: "hist_africa_h9",
      question: "Analyze the impact of technology and digital transformation on contemporary African development.",
      options: ["Had minimal impact", "Created new opportunities while highlighting digital divides", "Only benefited urban elites", "Solved all development challenges"],
      correct: "Created new opportunities while highlighting digital divides",
      explanation: "Technology and digital transformation have created new opportunities for African development in areas like mobile banking and e-governance, while also highlighting digital divides.",
      difficulty: "Hard"
    },
    {
      id: "hist_africa_h10",
      question: "How have African states navigated relationships with emerging global powers (China, India, Brazil)?",
      options: ["Rejected all new partnerships", "Diversified partnerships while seeking better terms", "Completely replaced Western partnerships", "Only maintained traditional relationships"],
      correct: "Diversified partnerships while seeking better terms",
      explanation: "African states have diversified their international partnerships with emerging powers while attempting to negotiate better terms and reduce dependency on traditional partners.",
      difficulty: "Hard"
    }
  ],

  "Unit 8: Post-1991 Developments in Ethiopia": [
    // Easy Questions
    {
      id: "hist_eth_post91_e1",
      question: "Which political coalition came to power in Ethiopia in 1991?",
      options: ["DERG", "EPRDF", "CUD", "UEDF"],
      correct: "EPRDF",
      explanation: "The Ethiopian People's Revolutionary Democratic Front (EPRDF) came to power in 1991 after overthrowing the Derg.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_post91_e2",
      question: "Who was the Prime Minister of Ethiopia from 1995 to 2012?",
      options: ["Mengistu Haile Mariam", "Meles Zenawi", "Hailemariam Desalegn", "Abiy Ahmed"],
      correct: "Meles Zenawi",
      explanation: "Meles Zenawi served as Prime Minister of Ethiopia from 1995 until his death in 2012.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_post91_e3",
      question: "What new political system was introduced in Ethiopia after 1991?",
      options: ["Unitary system", "Federal system", "Confederal system", "Military rule"],
      correct: "Federal system",
      explanation: "Ethiopia adopted a federal system in 1995, organized along ethnic lines with regional states.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_post91_e4",
      question: "When did Eritrea gain independence from Ethiopia?",
      options: ["1991", "1993", "1995", "1998"],
      correct: "1993",
      explanation: "Eritrea gained independence from Ethiopia in 1993 following a referendum supervised by the UN.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_post91_e5",
      question: "What was the Ethiopian constitution adopted in 1995 known for?",
      options: ["Centralized government", "Ethnic federalism", "Military rule", "Monarchy restoration"],
      correct: "Ethnic federalism",
      explanation: "The 1995 constitution established ethnic federalism, organizing the country into ethnically-based regional states.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_post91_e6",
      question: "Who became Prime Minister after Meles Zenawi's death?",
      options: ["Abiy Ahmed", "Hailemariam Desalegn", "Girma Wolde-Giorgis", "Mulatu Teshome"],
      correct: "Hailemariam Desalegn",
      explanation: "Hailemariam Desalegn became Prime Minister after Meles Zenawi's death in 2012.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_post91_e7",
      question: "When did Abiy Ahmed become Prime Minister?",
      options: ["2016", "2017", "2018", "2019"],
      correct: "2018",
      explanation: "Abiy Ahmed became Prime Minister of Ethiopia in April 2018.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_post91_e8",
      question: "What major conflict occurred between Ethiopia and Eritrea?",
      options: ["Border War (1998-2000)", "Civil War", "Independence War", "Cold War proxy conflict"],
      correct: "Border War (1998-2000)",
      explanation: "The Ethiopia-Eritrea Border War occurred from 1998 to 2000 over disputed border territories.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_post91_e9",
      question: "What economic policy did the EPRDF government pursue?",
      options: ["Pure market economy", "Socialist economy", "Developmental state model", "Traditional economy"],
      correct: "Developmental state model",
      explanation: "The EPRDF government pursued a developmental state model with significant state involvement in the economy.",
      difficulty: "Easy"
    },
    {
      id: "hist_eth_post91_e10",
      question: "What was the Millennium Dam project?",
      options: ["Agricultural project", "Large hydroelectric dam on Blue Nile", "Urban development", "Mining project"],
      correct: "Large hydroelectric dam on Blue Nile",
      explanation: "The Grand Ethiopian Renaissance Dam (GERD) is a large hydroelectric dam project on the Blue Nile River.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "hist_eth_post91_m1",
      question: "How did the ethnic federal system affect Ethiopian politics?",
      options: ["Eliminated ethnic tensions", "Created new dynamics of ethnic competition and cooperation", "Had no significant impact", "Caused immediate dissolution"],
      correct: "Created new dynamics of ethnic competition and cooperation",
      explanation: "Ethnic federalism created new dynamics of ethnic competition and cooperation, both accommodating diversity and creating new tensions.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_post91_m2",
      question: "What was the significance of the 2005 elections?",
      options: ["EPRDF lost power", "Marked increased political competition and post-election crisis", "Were completely peaceful", "Had low voter turnout"],
      correct: "Marked increased political competition and post-election crisis",
      explanation: "The 2005 elections marked increased political competition but resulted in a post-election crisis with government crackdown on opposition.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_post91_m3",
      question: "How did Ethiopia's economic growth pattern change after 1991?",
      options: ["Remained stagnant", "Achieved sustained high growth but with inequality", "Only agriculture grew", "Declined significantly"],
      correct: "Achieved sustained high growth but with inequality",
      explanation: "Ethiopia achieved sustained high economic growth after 2000 but with persistent inequality and poverty in many areas.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_post91_m4",
      question: "What was the impact of the Eritrea-Ethiopia border conflict?",
      options: ["Strengthened bilateral relations", "Led to prolonged hostile relations and economic costs", "Was quickly resolved", "Had no lasting effects"],
      correct: "Led to prolonged hostile relations and economic costs",
      explanation: "The border conflict led to prolonged hostile relations between Ethiopia and Eritrea with significant economic and human costs.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_post91_m5",
      question: "How did civil society develop in post-1991 Ethiopia?",
      options: ["Flourished without restrictions", "Grew but faced increasing restrictions over time", "Was completely suppressed", "Remained unchanged"],
      correct: "Grew but faced increasing restrictions over time",
      explanation: "Civil society initially grew after 1991 but faced increasing restrictions, particularly after 2005.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_post91_m6",
      question: "What was the role of the diaspora in Ethiopian politics?",
      options: ["Had no involvement", "Played active role in political debate and opposition", "Only supported government", "Was completely excluded"],
      correct: "Played active role in political debate and opposition",
      explanation: "The Ethiopian diaspora played an active role in political debates and often supported opposition movements.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_post91_m7",
      question: "How did the EPRDF approach private sector development?",
      options: ["Completely rejected private sector", "Promoted private sector within state-led framework", "Adopted pure free market", "Maintained socialist ownership"],
      correct: "Promoted private sector within state-led framework",
      explanation: "The EPRDF promoted private sector development within a state-led developmental framework, maintaining significant government control.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_post91_m8",
      question: "What challenges did urban development face in post-1991 Ethiopia?",
      options: ["No significant challenges", "Rapid growth with infrastructure and housing challenges", "Urban decline", "Complete stagnation"],
      correct: "Rapid growth with infrastructure and housing challenges",
      explanation: "Urban areas experienced rapid growth but faced significant challenges in infrastructure provision and affordable housing.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_post91_m9",
      question: "How did Ethiopia's international relations change after 1991?",
      options: ["Became completely isolated", "Diversified partnerships while maintaining strategic autonomy", "Only aligned with Western powers", "Remained unchanged"],
      correct: "Diversified partnerships while maintaining strategic autonomy",
      explanation: "Ethiopia diversified its international partnerships, working with various powers while maintaining strategic autonomy.",
      difficulty: "Medium"
    },
    {
      id: "hist_eth_post91_m10",
      question: "What was the impact of the Anti-Terrorism Proclamation?",
      options: ["Improved security without controversy", "Enhanced security but raised human rights concerns", "Had no significant effect", "Only affected foreign terrorists"],
      correct: "Enhanced security but raised human rights concerns",
      explanation: "The Anti-Terrorism Proclamation enhanced security capabilities but raised significant human rights and press freedom concerns.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "hist_eth_post91_h1",
      question: "Analyze the tensions between democratic aspirations and developmental imperatives in post-1991 Ethiopia.",
      options: ["No tensions existed", "Complex balancing act with periodic tensions", "Democracy always prevailed", "Development ignored democracy completely"],
      correct: "Complex balancing act with periodic tensions",
      explanation: "Post-1991 Ethiopia experienced complex tensions between democratic aspirations and developmental imperatives, with the government often prioritizing development over democratic governance.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_post91_h2",
      question: "How did the ethnic federal system address Ethiopia's diversity while creating new challenges?",
      options: ["Perfectly solved all ethnic issues", "Accommodated diversity but created new inter-ethnic tensions", "Failed completely", "Only benefited dominant groups"],
      correct: "Accommodated diversity but created new inter-ethnic tensions",
      explanation: "Ethnic federalism accommodated Ethiopia's diversity and provided group rights but also institutionalized ethnic divisions and created new forms of inter-ethnic competition.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_post91_h3",
      question: "What was the relationship between rapid economic growth and political liberalization in Ethiopia?",
      options: ["Growth automatically led to liberalization", "Growth often took precedence over political liberalization", "No relationship existed", "Liberalization preceded growth"],
      correct: "Growth often took precedence over political liberalization",
      explanation: "In Ethiopia, rapid economic growth often took precedence over political liberalization, with the government arguing that development required political stability and control.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_post91_h4",
      question: "How did generational changes affect Ethiopian politics, particularly after 2015?",
      options: ["Had no significant impact", "Young generation demanded greater political participation and reform", "Only affected urban areas", "Strengthened existing system"],
      correct: "Young generation demanded greater political participation and reform",
      explanation: "Generational changes, particularly among educated youth, led to demands for greater political participation and reform, contributing to protests and political change.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_post91_h5",
      question: "Analyze the role of regional states in Ethiopian federalism and their relationship with the federal government.",
      options: ["Complete autonomy achieved", "Complex relationship with varying degrees of autonomy", "Total federal control maintained", "Regional states had no real power"],
      correct: "Complex relationship with varying degrees of autonomy",
      explanation: "Regional states in Ethiopian federalism had a complex relationship with the federal government, with varying degrees of autonomy depending on their political alignment and capacity.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_post91_h6",
      question: "How did Ethiopia's approach to regional integration balance national sovereignty with continental cooperation?",
      options: ["Completely rejected integration", "Selective engagement prioritizing national interests", "Full integration without conditions", "Only bilateral relations"],
      correct: "Selective engagement prioritizing national interests",
      explanation: "Ethiopia pursued selective regional integration, participating in continental initiatives while carefully protecting national sovereignty and prioritizing national interests.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_post91_h7",
      question: "What was the impact of infrastructure development on Ethiopian society and politics?",
      options: ["Only positive outcomes", "Significant development but uneven distribution and displacement", "No social impact", "Completely negative"],
      correct: "Significant development but uneven distribution and displacement",
      explanation: "Infrastructure development brought significant improvements but also created uneven distribution of benefits and displacement of communities, affecting social and political dynamics.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_post91_h8",
      question: "How did the transition from Meles Zenawi to subsequent leaders affect Ethiopian politics?",
      options: ["Smooth transition with no changes", "Gradual loosening of control leading to political opening", "Immediate democratization", "Return to military rule"],
      correct: "Gradual loosening of control leading to political opening",
      explanation: "The transition from Meles Zenawi led to gradual loosening of political control, culminating in significant political opening under Abiy Ahmed.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_post91_h9",
      question: "Analyze the relationship between agricultural transformation and rural-urban migration in post-1991 Ethiopia.",
      options: ["No relationship existed", "Agricultural changes drove migration patterns and urbanization", "Migration had no rural impact", "Agriculture prevented all migration"],
      correct: "Agricultural changes drove migration patterns and urbanization",
      explanation: "Agricultural transformation and rural development challenges drove significant migration patterns and rapid urbanization, reshaping Ethiopian society.",
      difficulty: "Hard"
    },
    {
      id: "hist_eth_post91_h10",
      question: "How did competing visions of Ethiopian identity and nationalism evolve in the post-1991 period?",
      options: ["Single unified vision emerged", "Multiple competing visions of identity and nationalism coexisted", "All identity questions were resolved", "Nationalism disappeared completely"],
      correct: "Multiple competing visions of identity and nationalism coexisted",
      explanation: "Post-1991 Ethiopia saw multiple competing visions of Ethiopian identity and nationalism, from civic nationalism to ethnic nationalism, creating ongoing political debates.",
      difficulty: "Hard"
    }
  ],

  "Unit 9: Indigenous Knowledge Systems and Heritages of Ethiopia": [
    // Easy Questions
    {
      id: "hist_heritage_e1",
      question: "What is indigenous knowledge?",
      options: ["Foreign knowledge", "Traditional knowledge of local communities", "Modern scientific knowledge", "Government policies"],
      correct: "Traditional knowledge of local communities",
      explanation: "Indigenous knowledge refers to the traditional knowledge, practices, and beliefs of local communities developed over generations.",
      difficulty: "Easy"
    },
    {
      id: "hist_heritage_e2",
      question: "Which ancient civilization existed in northern Ethiopia?",
      options: ["Egyptian", "Aksumite", "Roman", "Persian"],
      correct: "Aksumite",
      explanation: "The Aksumite civilization was an ancient trading empire that existed in northern Ethiopia from approximately 100-960 CE.",
      difficulty: "Easy"
    },
    {
      id: "hist_heritage_e3",
      question: "What is the traditional Ethiopian calendar based on?",
      options: ["Lunar cycles", "Solar cycles", "Christian calendar", "Islamic calendar"],
      correct: "Solar cycles",
      explanation: "The Ethiopian calendar is based on solar cycles and has 13 months, with 12 months of 30 days and one month of 5 or 6 days.",
      difficulty: "Easy"
    },
    {
      id: "hist_heritage_e4",
      question: "What are the famous rock-hewn churches of Lalibela known for?",
      options: ["Modern architecture", "Being carved from solid rock", "Golden decorations", "Tallest structures"],
      correct: "Being carved from solid rock",
      explanation: "The Lalibela churches are famous for being carved directly from solid volcanic rock in the 12th and 13th centuries.",
      difficulty: "Easy"
    },
    {
      id: "hist_heritage_e5",
      question: "What is traditional Ethiopian medicine based on?",
      options: ["Only modern science", "Herbal remedies and traditional practices", "Foreign practices only", "Industrial chemicals"],
      correct: "Herbal remedies and traditional practices",
      explanation: "Traditional Ethiopian medicine is based on herbal remedies, spiritual practices, and knowledge passed down through generations.",
      difficulty: "Easy"
    },
    {
      id: "hist_heritage_e6",
      question: "What is the traditional Ethiopian coffee ceremony?",
      options: ["Quick coffee break", "Elaborate cultural ritual", "Religious service", "Business meeting"],
      correct: "Elaborate cultural ritual",
      explanation: "The Ethiopian coffee ceremony is an elaborate cultural ritual involving roasting, brewing, and serving coffee with social significance.",
      difficulty: "Easy"
    },
    {
      id: "hist_heritage_e7",
      question: "What is the Ge'ez script?",
      options: ["Modern alphabet", "Ancient Ethiopian writing system", "Foreign language", "Mathematical system"],
      correct: "Ancient Ethiopian writing system",
      explanation: "Ge'ez is an ancient Ethiopian writing system and liturgical language of the Ethiopian Orthodox Church.",
      difficulty: "Easy"
    },
    {
      id: "hist_heritage_e8",
      question: "What are the stelae of Aksum?",
      options: ["Modern monuments", "Ancient stone obelisks", "Religious buildings", "Military fortifications"],
      correct: "Ancient stone obelisks",
      explanation: "The stelae of Aksum are ancient stone obelisks that served as grave markers and symbols of power in the Aksumite kingdom.",
      difficulty: "Easy"
    },
    {
      id: "hist_heritage_e9",
      question: "What is the traditional Ethiopian system of conflict resolution called?",
      options: ["Court system", "Shimglina (elder mediation)", "Police action", "Military intervention"],
      correct: "Shimglina (elder mediation)",
      explanation: "Shimglina is the traditional Ethiopian system of conflict resolution involving elder mediation and community participation.",
      difficulty: "Easy"
    },
    {
      id: "hist_heritage_e10",
      question: "What is the significance of the Ark of the Covenant in Ethiopian tradition?",
      options: ["Modern invention", "Believed to be housed in Aksum", "Foreign legend", "Recent discovery"],
      correct: "Believed to be housed in Aksum",
      explanation: "Ethiopian Orthodox tradition believes that the original Ark of the Covenant is housed in the Church of St. Mary of Zion in Aksum.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "hist_heritage_m1",
      question: "How do traditional Ethiopian agricultural practices demonstrate indigenous knowledge?",
      options: ["Use only modern techniques", "Combine traditional terracing, crop rotation, and local varieties", "Ignore environmental factors", "Rely only on imports"],
      correct: "Combine traditional terracing, crop rotation, and local varieties",
      explanation: "Traditional Ethiopian agriculture demonstrates indigenous knowledge through terracing, crop rotation, indigenous seed varieties, and sustainable farming practices.",
      difficulty: "Medium"
    },
    {
      id: "hist_heritage_m2",
      question: "What role do traditional healers play in Ethiopian society?",
      options: ["Are completely replaced by modern medicine", "Continue to provide healthcare using traditional knowledge", "Only treat foreigners", "Work only in cities"],
      correct: "Continue to provide healthcare using traditional knowledge",
      explanation: "Traditional healers continue to play important roles in Ethiopian healthcare, especially in rural areas, using indigenous medicinal knowledge.",
      difficulty: "Medium"
    },
    {
      id: "hist_heritage_m3",
      question: "How does the Ethiopian Orthodox Church preserve ancient traditions?",
      options: ["Rejects all old traditions", "Maintains ancient liturgy, art, and manuscripts", "Only uses modern practices", "Follows foreign traditions"],
      correct: "Maintains ancient liturgy, art, and manuscripts",
      explanation: "The Ethiopian Orthodox Church preserves ancient traditions through its liturgy, religious art, illuminated manuscripts, and traditional practices.",
      difficulty: "Medium"
    },
    {
      id: "hist_heritage_m4",
      question: "What is the significance of oral traditions in Ethiopian heritage?",
      options: ["Have no importance", "Preserve history, values, and knowledge across generations", "Are only for entertainment", "Replace written records"],
      correct: "Preserve history, values, and knowledge across generations",
      explanation: "Oral traditions play crucial roles in preserving Ethiopian history, cultural values, and traditional knowledge across generations.",
      difficulty: "Medium"
    },
    {
      id: "hist_heritage_m5",
      question: "How do traditional Ethiopian governance systems contribute to modern administration?",
      options: ["Are completely irrelevant", "Provide models for participatory governance and conflict resolution", "Only create problems", "Replace modern systems"],
      correct: "Provide models for participatory governance and conflict resolution",
      explanation: "Traditional governance systems provide valuable models for participatory governance, conflict resolution, and community-based administration.",
      difficulty: "Medium"
    },
    {
      id: "hist_heritage_m6",
      question: "What is the relationship between Ethiopian traditional music and cultural identity?",
      options: ["No connection exists", "Music expresses and preserves cultural identity and values", "Only modern music matters", "Traditional music is disappearing"],
      correct: "Music expresses and preserves cultural identity and values",
      explanation: "Traditional Ethiopian music serves as a vehicle for expressing and preserving cultural identity, values, and historical narratives.",
      difficulty: "Medium"
    },
    {
      id: "hist_heritage_m7",
      question: "How do traditional Ethiopian architectural styles reflect local knowledge?",
      options: ["Copy foreign designs only", "Adapt to local climate, materials, and social needs", "Ignore environmental factors", "Use only imported materials"],
      correct: "Adapt to local climate, materials, and social needs",
      explanation: "Traditional Ethiopian architecture demonstrates local knowledge by adapting to climate, using local materials, and reflecting social and cultural needs.",
      difficulty: "Medium"
    },
    {
      id: "hist_heritage_m8",
      question: "What challenges face the preservation of Ethiopian indigenous knowledge?",
      options: ["No challenges exist", "Modernization, urbanization, and cultural change", "Too much government support", "Excessive documentation"],
      correct: "Modernization, urbanization, and cultural change",
      explanation: "Ethiopian indigenous knowledge faces challenges from modernization, urbanization, generational change, and loss of traditional lifestyles.",
      difficulty: "Medium"
    },
    {
      id: "hist_heritage_m9",
      question: "How do traditional Ethiopian festivals preserve cultural heritage?",
      options: ["Have no cultural significance", "Maintain traditions, values, and community bonds", "Only serve economic purposes", "Are purely modern inventions"],
      correct: "Maintain traditions, values, and community bonds",
      explanation: "Traditional Ethiopian festivals preserve cultural heritage by maintaining traditional practices, values, and strengthening community bonds.",
      difficulty: "Medium"
    },
    {
      id: "hist_heritage_m10",
      question: "What is the role of traditional ecological knowledge in Ethiopian environmental conservation?",
      options: ["Damages the environment", "Provides sustainable practices for resource management", "Is completely outdated", "Only applies to modern technology"],
      correct: "Provides sustainable practices for resource management",
      explanation: "Traditional ecological knowledge provides valuable sustainable practices for natural resource management and environmental conservation.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "hist_heritage_h1",
      question: "Analyze the relationship between Ethiopian indigenous knowledge systems and contemporary development challenges.",
      options: ["Indigenous knowledge is irrelevant to development", "Indigenous knowledge can inform sustainable development approaches", "Development must reject all traditional knowledge", "Only modern knowledge matters"],
      correct: "Indigenous knowledge can inform sustainable development approaches",
      explanation: "Ethiopian indigenous knowledge systems contain valuable insights for sustainable development, offering alternative approaches to health, agriculture, and environmental management.",
      difficulty: "Hard"
    },
    {
      id: "hist_heritage_h2",
      question: "How do traditional Ethiopian legal systems compare with modern legal frameworks?",
      options: ["Are completely incompatible", "Offer complementary approaches to justice and conflict resolution", "Are superior to modern law", "Should replace all modern law"],
      correct: "Offer complementary approaches to justice and conflict resolution",
      explanation: "Traditional Ethiopian legal systems offer complementary approaches to modern legal frameworks, particularly in community-based justice and restorative conflict resolution.",
      difficulty: "Hard"
    },
    {
      id: "hist_heritage_h3",
      question: "What is the significance of Ethiopian manuscript traditions for global heritage?",
      options: ["Have only local importance", "Represent unique contributions to world literary and religious heritage", "Are inferior to European traditions", "Have no historical value"],
      correct: "Represent unique contributions to world literary and religious heritage",
      explanation: "Ethiopian manuscript traditions represent unique contributions to world literary and religious heritage, preserving ancient texts and distinctive artistic styles.",
      difficulty: "Hard"
    },
    {
      id: "hist_heritage_h4",
      question: "How do gender roles in traditional Ethiopian society reflect indigenous knowledge about social organization?",
      options: ["Show no organizational knowledge", "Demonstrate complex understanding of social roles and community function", "Are purely oppressive", "Have no social significance"],
      correct: "Demonstrate complex understanding of social roles and community function",
      explanation: "Traditional gender roles reflect complex indigenous knowledge about social organization, resource management, and community function, though they also require critical examination.",
      difficulty: "Hard"
    },
    {
      id: "hist_heritage_h5",
      question: "Analyze the role of Ethiopian traditional education systems in knowledge transmission.",
      options: ["Were completely informal", "Developed sophisticated methods for knowledge preservation and transmission", "Only taught religious subjects", "Were inferior to modern education"],
      correct: "Developed sophisticated methods for knowledge preservation and transmission",
      explanation: "Ethiopian traditional education systems developed sophisticated methods for preserving and transmitting knowledge across generations through oral traditions, apprenticeships, and institutional learning.",
      difficulty: "Hard"
    },
    {
      id: "hist_heritage_h6",
      question: "How do Ethiopian traditional astronomical and mathematical knowledge systems compare with other ancient civilizations?",
      options: ["Were completely primitive", "Demonstrated sophisticated understanding comparable to other ancient civilizations", "Only copied foreign knowledge", "Had no scientific content"],
      correct: "Demonstrated sophisticated understanding comparable to other ancient civilizations",
      explanation: "Ethiopian traditional astronomical and mathematical knowledge demonstrated sophisticated understanding, including calendar systems and architectural calculations comparable to other ancient civilizations.",
      difficulty: "Hard"
    },
    {
      id: "hist_heritage_h7",
      question: "What is the relationship between Ethiopian traditional craft knowledge and contemporary economic development?",
      options: ["Crafts have no economic value", "Traditional crafts can contribute to cultural tourism and sustainable livelihoods", "Only modern industry matters", "Crafts prevent development"],
      correct: "Traditional crafts can contribute to cultural tourism and sustainable livelihoods",
      explanation: "Ethiopian traditional craft knowledge can contribute significantly to cultural tourism, sustainable livelihoods, and economic development while preserving cultural heritage.",
      difficulty: "Hard"
    },
    {
      id: "hist_heritage_h8",
      question: "How do Ethiopian traditional environmental management practices address contemporary climate challenges?",
      options: ["Are irrelevant to climate issues", "Offer valuable strategies for climate adaptation and mitigation", "Only cause environmental problems", "Have no environmental content"],
      correct: "Offer valuable strategies for climate adaptation and mitigation",
      explanation: "Ethiopian traditional environmental management practices offer valuable strategies for climate adaptation and mitigation, including water conservation, soil management, and biodiversity preservation.",
      difficulty: "Hard"
    },
    {
      id: "hist_heritage_h9",
      question: "Analyze the impact of globalization on Ethiopian indigenous knowledge preservation and transmission.",
      options: ["Globalization has no impact", "Creates both opportunities and threats for knowledge preservation", "Only benefits indigenous knowledge", "Completely destroys all traditional knowledge"],
      correct: "Creates both opportunities and threats for knowledge preservation",
      explanation: "Globalization creates both opportunities (documentation, international recognition) and threats (cultural homogenization, loss of traditional lifestyles) for Ethiopian indigenous knowledge preservation.",
      difficulty: "Hard"
    },
    {
      id: "hist_heritage_h10",
      question: "How can Ethiopian indigenous knowledge systems contribute to building resilient and sustainable communities?",
      options: ["They cannot contribute anything", "Provide frameworks for community resilience and sustainable resource management", "Only apply to rural areas", "Are obstacles to sustainability"],
      correct: "Provide frameworks for community resilience and sustainable resource management",
      explanation: "Ethiopian indigenous knowledge systems provide valuable frameworks for building community resilience and sustainable resource management through traditional institutions, environmental practices, and social organization.",
      difficulty: "Hard"
    }
  ]
};

// Helper function to get questions by difficulty
export const getGrade12HistoryQuestions = (unit: string, difficulty: 'Easy' | 'Medium' | 'Hard', count: number = 10): HistoryQuestion[] => {
  const unitQuestions = grade12HistoryQuestions[unit] || [];
  const filteredQuestions = unitQuestions.filter(q => q.difficulty === difficulty);
  
  // Shuffle and return the requested count
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

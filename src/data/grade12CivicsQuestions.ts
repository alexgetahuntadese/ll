
export interface CivicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  explanation: string;
}

export const grade12CivicsQuestions: { [unit: string]: CivicsQuestion[] } = {
  "Unit 1: Building a Democratic System": [
    // Easy Questions
    {
      id: "civ_u1_e1",
      question: "What is the primary purpose of democracy?",
      options: ["To ensure majority rule", "To guarantee individual freedoms", "To provide government by the people", "To maintain social order"],
      correct: "To provide government by the people",
      difficulty: "Easy",
      explanation: "Democracy means government by the people, where citizens participate in decision-making processes either directly or through elected representatives."
    },
    {
      id: "civ_u1_e2",
      question: "What is the difference between authority and power?",
      options: ["Authority is legal, power is force", "They are the same thing", "Power is legal, authority is force", "Authority is temporary, power is permanent"],
      correct: "Authority is legal, power is force",
      difficulty: "Easy",
      explanation: "Authority is the legitimate right to exercise power, while power is the ability to influence or control behavior, which may or may not be legitimate."
    },
    {
      id: "civ_u1_e3",
      question: "Which document outlines the fundamental rights of Ethiopian citizens?",
      options: ["The Criminal Code", "The Constitution", "The Civil Code", "The Labor Law"],
      correct: "The Constitution",
      difficulty: "Easy",
      explanation: "The Ethiopian Constitution is the supreme law that outlines fundamental rights, freedoms, and obligations of citizens."
    },
    {
      id: "civ_u1_e4",
      question: "What is a constitutional right?",
      options: ["A privilege granted by government", "A fundamental entitlement protected by law", "A temporary permission", "A cultural tradition"],
      correct: "A fundamental entitlement protected by law",
      difficulty: "Easy",
      explanation: "Constitutional rights are fundamental entitlements that are protected by the constitution and cannot be easily taken away by the government."
    },
    {
      id: "civ_u1_e5",
      question: "What does sovereignty mean in a democratic context?",
      options: ["Rule by the wealthy", "Rule by the military", "Rule by the people", "Rule by religious leaders"],
      correct: "Rule by the people",
      difficulty: "Easy",
      explanation: "In a democracy, sovereignty belongs to the people who are the ultimate source of political authority."
    },
    {
      id: "civ_u1_e6",
      question: "What is the main principle of diplomatic relations?",
      options: ["Military strength", "Economic dominance", "Mutual respect", "Cultural superiority"],
      correct: "Mutual respect",
      difficulty: "Easy",
      explanation: "Diplomatic relations are based on mutual respect, equality, and peaceful coexistence between nations."
    },
    {
      id: "civ_u1_e7",
      question: "What is a civic obligation?",
      options: ["A personal choice", "A legal duty of citizens", "A government privilege", "A cultural practice"],
      correct: "A legal duty of citizens",
      difficulty: "Easy",
      explanation: "Civic obligations are legal duties that citizens must fulfill, such as paying taxes, obeying laws, and serving on juries."
    },
    {
      id: "civ_u1_e8",
      question: "What is the purpose of separation of powers?",
      options: ["To create confusion", "To prevent abuse of power", "To slow down government", "To increase bureaucracy"],
      correct: "To prevent abuse of power",
      difficulty: "Easy",
      explanation: "Separation of powers divides government authority among different branches to prevent any single branch from becoming too powerful."
    },
    {
      id: "civ_u1_e9",
      question: "What is federalism?",
      options: ["Central government control", "Division of power between levels of government", "Military rule", "One-party system"],
      correct: "Division of power between levels of government",
      difficulty: "Easy",
      explanation: "Federalism is a system where power is divided between central and regional governments, each having authority in specific areas."
    },
    {
      id: "civ_u1_e10",
      question: "What is the role of civil society in democracy?",
      options: ["To replace government", "To monitor and participate in governance", "To create laws", "To enforce regulations"],
      correct: "To monitor and participate in governance",
      difficulty: "Easy",
      explanation: "Civil society organizations play a crucial role in monitoring government actions and facilitating citizen participation in democratic processes."
    },

    // Medium Questions
    {
      id: "civ_u1_m1",
      question: "How does Ethiopia's federal system balance regional autonomy with national unity?",
      options: ["Through military control", "Through constitutional division of powers", "Through economic centralization", "Through cultural assimilation"],
      correct: "Through constitutional division of powers",
      difficulty: "Medium",
      explanation: "Ethiopia's federal system constitutionally divides powers between federal and regional governments, allowing regional autonomy while maintaining national unity."
    },
    {
      id: "civ_u1_m2",
      question: "What is the relationship between democracy and economic development?",
      options: ["Democracy hinders development", "They are unrelated", "Democracy can promote sustainable development", "Development requires authoritarianism"],
      correct: "Democracy can promote sustainable development",
      difficulty: "Medium",
      explanation: "Democratic governance, with its emphasis on accountability and participation, can contribute to more sustainable and inclusive economic development."
    },
    {
      id: "civ_u1_m3",
      question: "How do constitutional amendments protect democratic principles?",
      options: ["By making changes impossible", "By requiring broad consensus for changes", "By allowing easy modifications", "By preventing all reforms"],
      correct: "By requiring broad consensus for changes",
      difficulty: "Medium",
      explanation: "Constitutional amendment processes typically require broad consensus, protecting democratic principles from hasty or partisan changes."
    },
    {
      id: "civ_u1_m4",
      question: "What role does Ethiopia play in African Union diplomacy?",
      options: ["Minimal participation", "Host and active member", "Observer only", "Occasional participant"],
      correct: "Host and active member",
      difficulty: "Medium",
      explanation: "Ethiopia hosts the African Union headquarters in Addis Ababa and plays an active role in continental diplomacy and peacekeeping."
    },
    {
      id: "civ_u1_m5",
      question: "How do democratic institutions ensure accountability?",
      options: ["Through secrecy", "Through checks and balances", "Through centralization", "Through intimidation"],
      correct: "Through checks and balances",
      difficulty: "Medium",
      explanation: "Democratic institutions use systems of checks and balances, transparency, and oversight to ensure government accountability to citizens."
    },
    {
      id: "civ_u1_m6",
      question: "What is the significance of Ethiopia's non-aligned foreign policy?",
      options: ["Isolation from world affairs", "Independence in international relations", "Dependence on superpowers", "Aggressive expansion"],
      correct: "Independence in international relations",
      difficulty: "Medium",
      explanation: "Ethiopia's non-aligned foreign policy emphasizes independence and sovereignty in international relations, avoiding dominance by major powers."
    },
    {
      id: "civ_u1_m7",
      question: "How does democratic participation differ from mere voting?",
      options: ["There is no difference", "Participation includes ongoing civic engagement", "Voting is more important", "Participation is less important"],
      correct: "Participation includes ongoing civic engagement",
      difficulty: "Medium",
      explanation: "Democratic participation encompasses voting, civic engagement, advocacy, and continuous involvement in democratic processes beyond elections."
    },
    {
      id: "civ_u1_m8",
      question: "What challenges face democratic consolidation in developing countries?",
      options: ["Too much education", "Poverty, weak institutions, and ethnic divisions", "Excessive wealth", "Strong institutions"],
      correct: "Poverty, weak institutions, and ethnic divisions",
      difficulty: "Medium",
      explanation: "Democratic consolidation in developing countries faces challenges including poverty, weak institutions, ethnic divisions, and limited civic education."
    },
    {
      id: "civ_u1_m9",
      question: "How do international relations affect domestic democracy?",
      options: ["No effect at all", "External pressures can influence democratic development", "Only positive effects", "Only negative effects"],
      correct: "External pressures can influence democratic development",
      difficulty: "Medium",
      explanation: "International relations, including trade, aid, and diplomatic pressure, can significantly influence domestic democratic development and consolidation."
    },
    {
      id: "civ_u1_m10",
      question: "What is the role of constitutional courts in democracy?",
      options: ["To make laws", "To interpret and protect constitutional principles", "To execute policies", "To conduct elections"],
      correct: "To interpret and protect constitutional principles",
      difficulty: "Medium",
      explanation: "Constitutional courts interpret the constitution and protect constitutional principles, serving as guardians of democratic rule of law."
    },

    // Hard Questions
    {
      id: "civ_u1_h1",
      question: "Analyze the tension between majority rule and minority rights in democratic systems.",
      options: ["Majority should always prevail", "Constitutional protections balance both", "Minorities should rule", "There is no tension"],
      correct: "Constitutional protections balance both",
      difficulty: "Hard",
      explanation: "Democratic systems use constitutional protections, bills of rights, and institutional safeguards to balance majority rule with minority rights protection."
    },
    {
      id: "civ_u1_h2",
      question: "How does Ethiopia's ethnic federalism model address diversity while maintaining unity?",
      options: ["Through assimilation", "Through constitutional recognition and power-sharing", "Through separation", "Through domination"],
      correct: "Through constitutional recognition and power-sharing",
      difficulty: "Hard",
      explanation: "Ethiopia's ethnic federalism constitutionally recognizes diversity while creating power-sharing mechanisms to maintain national unity and accommodate different groups."
    },
    {
      id: "civ_u1_h3",
      question: "Evaluate the effectiveness of international law in regulating state behavior.",
      options: ["Completely effective", "Limited effectiveness due to enforcement challenges", "Totally ineffective", "Only effective for small states"],
      correct: "Limited effectiveness due to enforcement challenges",
      difficulty: "Hard",
      explanation: "International law has limited effectiveness due to sovereignty principles, lack of central enforcement, and reliance on state compliance and international pressure."
    },
    {
      id: "civ_u1_h4",
      question: "What are the implications of globalization for national sovereignty?",
      options: ["No implications", "Creates tensions between global integration and autonomy", "Eliminates sovereignty", "Strengthens sovereignty"],
      correct: "Creates tensions between global integration and autonomy",
      difficulty: "Hard",
      explanation: "Globalization creates complex tensions between economic integration, international cooperation, and maintaining national autonomy and sovereignty."
    },
    {
      id: "civ_u1_h5",
      question: "How do democratic transitions navigate the relationship between stability and change?",
      options: ["By avoiding all change", "Through gradual institutional reform", "By revolutionary transformation", "By maintaining status quo"],
      correct: "Through gradual institutional reform",
      difficulty: "Hard",
      explanation: "Successful democratic transitions typically balance stability and change through gradual institutional reforms, consensus-building, and evolutionary transformation."
    },
    {
      id: "civ_u1_h6",
      question: "Assess the role of civil society in democratic consolidation.",
      options: ["Irrelevant to democracy", "Essential for accountability and participation", "Harmful to stability", "Only important during elections"],
      correct: "Essential for accountability and participation",
      difficulty: "Hard",
      explanation: "Civil society is essential for democratic consolidation by promoting accountability, facilitating participation, and serving as intermediary between citizens and government."
    },
    {
      id: "civ_u1_h7",
      question: "How do constitutional design choices affect democratic outcomes?",
      options: ["No significant effect", "Institutional arrangements shape political behavior", "Only personalities matter", "Economic factors are decisive"],
      correct: "Institutional arrangements shape political behavior",
      difficulty: "Hard",
      explanation: "Constitutional design choices regarding electoral systems, federal arrangements, and institutional structures significantly shape political behavior and democratic outcomes."
    },
    {
      id: "civ_u1_h8",
      question: "What is the relationship between democratic legitimacy and effective governance?",
      options: ["They are unrelated", "Legitimacy enhances governance effectiveness", "Effectiveness undermines legitimacy", "They are contradictory"],
      correct: "Legitimacy enhances governance effectiveness",
      difficulty: "Hard",
      explanation: "Democratic legitimacy, derived from consent and participation, enhances governance effectiveness by increasing compliance and public cooperation."
    },
    {
      id: "civ_u1_h9",
      question: "How do economic inequalities challenge democratic equality?",
      options: ["No challenge exists", "Wealth concentrates political power", "Inequality strengthens democracy", "Economics and politics are separate"],
      correct: "Wealth concentrates political power",
      difficulty: "Hard",
      explanation: "Economic inequalities can challenge democratic equality by concentrating political influence among wealthy elites and limiting meaningful participation by disadvantaged groups."
    },
    {
      id: "civ_u1_h10",
      question: "Analyze the concept of popular sovereignty in federal systems.",
      options: ["Impossible in federalism", "Exercised through multiple levels of government", "Only at national level", "Only at local level"],
      correct: "Exercised through multiple levels of government",
      difficulty: "Hard",
      explanation: "In federal systems, popular sovereignty is exercised through multiple levels of government, with citizens participating in both national and subnational democratic processes."
    }
  ],

  "Unit 2: Rule of Law": [
    // Easy Questions
    {
      id: "civ_u2_e1",
      question: "What is the rule of law?",
      options: ["Rule by the strongest", "Equal application of laws to all", "Rule by the wealthy", "Rule by tradition"],
      correct: "Equal application of laws to all",
      difficulty: "Easy",
      explanation: "Rule of law means that laws apply equally to all people, including government officials, and that no one is above the law."
    },
    {
      id: "civ_u2_e2",
      question: "What is the highest law in Ethiopia?",
      options: ["Religious law", "Traditional law", "The Constitution", "International law"],
      correct: "The Constitution",
      difficulty: "Easy",
      explanation: "The Constitution is the supreme law of Ethiopia, and all other laws must conform to its principles and provisions."
    },
    {
      id: "civ_u2_e3",
      question: "What is corruption?",
      options: ["Legal business practice", "Abuse of power for personal gain", "Political disagreement", "Cultural difference"],
      correct: "Abuse of power for personal gain",
      difficulty: "Easy",
      explanation: "Corruption involves the abuse of entrusted power for private gain, undermining fairness, justice, and public trust."
    },
    {
      id: "civ_u2_e4",
      question: "What is good governance?",
      options: ["Rule by force", "Effective, accountable, and transparent leadership", "Wealthy leadership", "Religious leadership"],
      correct: "Effective, accountable, and transparent leadership",
      difficulty: "Easy",
      explanation: "Good governance involves effective, accountable, transparent, and responsive leadership that serves the public interest."
    },
    {
      id: "civ_u2_e5",
      question: "What is conflict resolution?",
      options: ["Avoiding all conflicts", "Peaceful settlement of disputes", "Using force to win", "Ignoring problems"],
      correct: "Peaceful settlement of disputes",
      difficulty: "Easy",
      explanation: "Conflict resolution involves finding peaceful, fair, and sustainable solutions to disputes and disagreements."
    },
    {
      id: "civ_u2_e6",
      question: "What is the purpose of laws?",
      options: ["To punish people", "To maintain order and protect rights", "To benefit the rich", "To create fear"],
      correct: "To maintain order and protect rights",
      difficulty: "Easy",
      explanation: "Laws serve to maintain social order, protect individual rights, and provide a framework for peaceful coexistence."
    },
    {
      id: "civ_u2_e7",
      question: "What is due process?",
      options: ["Quick punishment", "Fair legal procedures", "Expensive lawyers", "Secret trials"],
      correct: "Fair legal procedures",
      difficulty: "Easy",
      explanation: "Due process ensures fair legal procedures, including the right to a fair trial, legal representation, and protection from arbitrary government action."
    },
    {
      id: "civ_u2_e8",
      question: "What is transparency in government?",
      options: ["Keeping everything secret", "Open access to government information", "Only telling friends", "Hiding mistakes"],
      correct: "Open access to government information",
      difficulty: "Easy",
      explanation: "Transparency means that government information and decision-making processes are open and accessible to the public."
    },
    {
      id: "civ_u2_e9",
      question: "What is accountability?",
      options: ["Avoiding responsibility", "Being answerable for actions", "Blaming others", "Making excuses"],
      correct: "Being answerable for actions",
      difficulty: "Easy",
      explanation: "Accountability means being responsible and answerable for one's actions, decisions, and their consequences."
    },
    {
      id: "civ_u2_e10",
      question: "What is the role of courts in rule of law?",
      options: ["To make laws", "To interpret and apply laws fairly", "To collect taxes", "To build roads"],
      correct: "To interpret and apply laws fairly",
      difficulty: "Easy",
      explanation: "Courts interpret and apply laws fairly and impartially, ensuring that justice is served and rights are protected."
    },

    // Medium Questions
    {
      id: "civ_u2_m1",
      question: "How does constitutional supremacy support rule of law?",
      options: ["By making constitution changeable", "By ensuring all laws conform to constitutional principles", "By ignoring the constitution", "By replacing the constitution"],
      correct: "By ensuring all laws conform to constitutional principles",
      difficulty: "Medium",
      explanation: "Constitutional supremacy ensures that all laws, policies, and government actions must conform to constitutional principles, maintaining legal consistency and protecting rights."
    },
    {
      id: "civ_u2_m2",
      question: "What are the main components of anti-corruption strategies?",
      options: ["Hiding information", "Prevention, detection, and punishment", "Accepting corruption", "Ignoring the problem"],
      correct: "Prevention, detection, and punishment",
      difficulty: "Medium",
      explanation: "Effective anti-corruption strategies involve prevention through transparency, detection through monitoring, and punishment through legal consequences."
    },
    {
      id: "civ_u2_m3",
      question: "How do traditional and modern conflict resolution mechanisms complement each other?",
      options: ["They cannot work together", "They provide diverse approaches to justice", "Traditional methods are obsolete", "Modern methods are unnecessary"],
      correct: "They provide diverse approaches to justice",
      difficulty: "Medium",
      explanation: "Traditional and modern conflict resolution mechanisms can complement each other by providing culturally appropriate and legally sound approaches to justice."
    },
    {
      id: "civ_u2_m4",
      question: "What is the relationship between rule of law and economic development?",
      options: ["No relationship", "Rule of law creates predictable business environment", "Rule of law hinders business", "Only culture matters"],
      correct: "Rule of law creates predictable business environment",
      difficulty: "Medium",
      explanation: "Rule of law creates a predictable legal environment that protects property rights, enforces contracts, and promotes investment and economic development."
    },
    {
      id: "civ_u2_m5",
      question: "How does judicial independence support rule of law?",
      options: ["By following political orders", "By making decisions based on law, not politics", "By avoiding difficult cases", "By consulting politicians"],
      correct: "By making decisions based on law, not politics",
      difficulty: "Medium",
      explanation: "Judicial independence ensures that courts make decisions based on law and evidence rather than political pressure, maintaining impartial justice."
    },
    {
      id: "civ_u2_m6",
      question: "What role does civil society play in promoting good governance?",
      options: ["No role", "Monitoring government and advocating for accountability", "Replacing government", "Creating confusion"],
      correct: "Monitoring government and advocating for accountability",
      difficulty: "Medium",
      explanation: "Civil society organizations monitor government performance, advocate for accountability, and provide channels for citizen participation in governance."
    },
    {
      id: "civ_u2_m7",
      question: "How do checks and balances prevent abuse of power?",
      options: ["By concentrating power", "By dividing power among branches", "By eliminating government", "By creating chaos"],
      correct: "By dividing power among branches",
      difficulty: "Medium",
      explanation: "Checks and balances divide power among different branches of government, ensuring that each can limit the others and prevent concentration of power."
    },
    {
      id: "civ_u2_m8",
      question: "What is the importance of legal education for rule of law?",
      options: ["Unnecessary expense", "Creates informed citizens who understand their rights", "Only for lawyers", "Wastes time"],
      correct: "Creates informed citizens who understand their rights",
      difficulty: "Medium",
      explanation: "Legal education helps citizens understand their rights and responsibilities, enabling them to participate effectively in a rule-of-law society."
    },
    {
      id: "civ_u2_m9",
      question: "How does corruption undermine rule of law?",
      options: ["It doesn't affect law", "It creates unequal treatment and erodes trust", "It improves efficiency", "It helps the poor"],
      correct: "It creates unequal treatment and erodes trust",
      difficulty: "Medium",
      explanation: "Corruption undermines rule of law by creating unequal treatment before the law, eroding public trust, and distorting justice."
    },
    {
      id: "civ_u2_m10",
      question: "What is the role of media in supporting rule of law?",
      options: ["Entertainment only", "Investigating and reporting on legal issues", "Supporting government always", "Creating controversy"],
      correct: "Investigating and reporting on legal issues",
      difficulty: "Medium",
      explanation: "Media supports rule of law by investigating legal issues, reporting on government accountability, and informing citizens about their rights."
    },

    // Hard Questions
    {
      id: "civ_u2_h1",
      question: "Analyze the tension between security measures and constitutional rights in modern democracies.",
      options: ["Security always trumps rights", "Rights must be balanced with legitimate security needs", "Rights are absolute", "Security is unnecessary"],
      correct: "Rights must be balanced with legitimate security needs",
      difficulty: "Hard",
      explanation: "Modern democracies must carefully balance legitimate security needs with constitutional rights, ensuring that security measures are proportionate, necessary, and subject to judicial oversight."
    },
    {
      id: "civ_u2_h2",
      question: "Evaluate the effectiveness of international anti-corruption initiatives.",
      options: ["Completely successful", "Mixed results due to implementation challenges", "Total failure", "Only work in rich countries"],
      correct: "Mixed results due to implementation challenges",
      difficulty: "Hard",
      explanation: "International anti-corruption initiatives show mixed results due to implementation challenges, varying political will, and differences in legal systems and cultures."
    },
    {
      id: "civ_u2_h3",
      question: "How do customary laws interact with formal legal systems in pluralistic societies?",
      options: ["They cannot coexist", "Through constitutional recognition and harmonization", "Customary law must disappear", "Formal law is irrelevant"],
      correct: "Through constitutional recognition and harmonization",
      difficulty: "Hard",
      explanation: "In pluralistic societies, customary and formal laws can coexist through constitutional recognition, harmonization processes, and institutional arrangements that respect legal diversity."
    },
    {
      id: "civ_u2_h4",
      question: "Assess the challenges of establishing rule of law in post-conflict societies.",
      options: ["Easy to establish", "Requires rebuilding institutions and restoring trust", "Impossible to achieve", "Only needs police"],
      correct: "Requires rebuilding institutions and restoring trust",
      difficulty: "Hard",
      explanation: "Establishing rule of law in post-conflict societies requires rebuilding legal institutions, restoring public trust, addressing past injustices, and creating inclusive governance systems."
    },
    {
      id: "civ_u2_h5",
      question: "How does legal pluralism affect the coherence of the rule of law?",
      options: ["Eliminates rule of law", "Creates complexity requiring careful coordination", "Simplifies everything", "Has no effect"],
      correct: "Creates complexity requiring careful coordination",
      difficulty: "Hard",
      explanation: "Legal pluralism creates complexity that requires careful coordination between different legal systems to maintain coherence while respecting diversity."
    },
    {
      id: "civ_u2_h6",
      question: "What is the relationship between transitional justice and rule of law?",
      options: ["They are unrelated", "Transitional justice helps establish rule of law", "They contradict each other", "Only one is needed"],
      correct: "Transitional justice helps establish rule of law",
      difficulty: "Hard",
      explanation: "Transitional justice mechanisms help establish rule of law by addressing past violations, providing accountability, and building institutional trust in legal systems."
    },
    {
      id: "civ_u2_h7",
      question: "How do economic inequalities challenge equal treatment under law?",
      options: ["No challenge exists", "Wealth can buy better legal representation", "Poor people prefer inequality", "Law is completely neutral"],
      correct: "Wealth can buy better legal representation",
      difficulty: "Hard",
      explanation: "Economic inequalities can challenge equal treatment under law by providing wealthy individuals better access to legal representation and resources."
    },
    {
      id: "civ_u2_h8",
      question: "Analyze the role of legal culture in shaping rule of law outcomes.",
      options: ["Culture is irrelevant", "Legal culture significantly influences implementation", "Only institutions matter", "Culture prevents rule of law"],
      correct: "Legal culture significantly influences implementation",
      difficulty: "Hard",
      explanation: "Legal culture, including attitudes toward law, authority, and justice, significantly influences how rule of law is understood, implemented, and experienced."
    },
    {
      id: "civ_u2_h9",
      question: "How do technological advances affect rule of law and governance?",
      options: ["No impact", "Create new challenges and opportunities", "Only negative effects", "Eliminate need for law"],
      correct: "Create new challenges and opportunities",
      difficulty: "Hard",
      explanation: "Technological advances create new challenges for privacy and regulation while offering opportunities for transparency, efficiency, and access to justice."
    },
    {
      id: "civ_u2_h10",
      question: "What is the relationship between federalism and constitutional supremacy?",
      options: ["They cannot coexist", "Federal constitution serves as supreme law", "Regional laws are supreme", "No hierarchy exists"],
      correct: "Federal constitution serves as supreme law",
      difficulty: "Hard",
      explanation: "In federal systems, the federal constitution serves as the supreme law, providing framework for power distribution while ensuring constitutional supremacy over all levels of government."
    }
  ],

  "Unit 3: Equality": [
    // Easy Questions
    {
      id: "civ_u3_e1",
      question: "What is equality?",
      options: ["Everyone being identical", "Equal treatment and opportunities", "Everyone earning the same", "Everyone thinking the same"],
      correct: "Equal treatment and opportunities",
      difficulty: "Easy",
      explanation: "Equality means equal treatment before the law and equal opportunities for all people, regardless of their background or characteristics."
    },
    {
      id: "civ_u3_e2",
      question: "What is discrimination?",
      options: ["Making choices", "Unfair treatment based on group membership", "Personal preferences", "Following traditions"],
      correct: "Unfair treatment based on group membership",
      difficulty: "Easy",
      explanation: "Discrimination is unfair treatment of individuals based on their membership in particular groups, such as race, gender, religion, or ethnicity."
    },
    {
      id: "civ_u3_e3",
      question: "What is affirmative action?",
      options: ["Positive thinking", "Policies to help disadvantaged groups", "Military action", "Economic policy"],
      correct: "Policies to help disadvantaged groups",
      difficulty: "Easy",
      explanation: "Affirmative action refers to policies designed to help disadvantaged groups overcome the effects of past discrimination and achieve equality."
    },
    {
      id: "civ_u3_e4",
      question: "What does 'unity in diversity' mean?",
      options: ["Everyone must be the same", "Different groups living together harmoniously", "Separation of groups", "Conflict between groups"],
      correct: "Different groups living together harmoniously",
      difficulty: "Easy",
      explanation: "Unity in diversity means that different cultural, ethnic, and religious groups can live together harmoniously while maintaining their distinct identities."
    },
    {
      id: "civ_u3_e5",
      question: "What is oppression?",
      options: ["Gentle guidance", "Cruel or unjust treatment", "Fair competition", "Mutual agreement"],
      correct: "Cruel or unjust treatment",
      difficulty: "Easy",
      explanation: "Oppression is the cruel or unjust treatment or control of individuals or groups, often by those in positions of power."
    },
    {
      id: "civ_u3_e6",
      question: "What is a civil right?",
      options: ["Political privilege", "Basic freedom guaranteed by law", "Economic benefit", "Social custom"],
      correct: "Basic freedom guaranteed by law",
      difficulty: "Easy",
      explanation: "Civil rights are basic freedoms and protections guaranteed by law, ensuring equal treatment and participation in society."
    },
    {
      id: "civ_u3_e7",
      question: "What is gender equality?",
      options: ["Men and women being identical", "Equal rights and opportunities for all genders", "Women ruling over men", "Ignoring gender differences"],
      correct: "Equal rights and opportunities for all genders",
      difficulty: "Easy",
      explanation: "Gender equality means equal rights, opportunities, and treatment for people of all genders, without discrimination or prejudice."
    },
    {
      id: "civ_u3_e8",
      question: "What is cultural diversity?",
      options: ["Cultural confusion", "Variety of cultures in a society", "Cultural uniformity", "Cultural conflict"],
      correct: "Variety of cultures in a society",
      difficulty: "Easy",
      explanation: "Cultural diversity refers to the variety of different cultures, traditions, languages, and ways of life present in a society."
    },
    {
      id: "civ_u3_e9",
      question: "What is tolerance?",
      options: ["Accepting differences", "Ignoring others", "Forcing conformity", "Creating conflict"],
      correct: "Accepting differences",
      difficulty: "Easy",
      explanation: "Tolerance is the willingness to accept and respect differences in opinions, beliefs, practices, and identities of others."
    },
    {
      id: "civ_u3_e10",
      question: "What is social inclusion?",
      options: ["Excluding certain groups", "Ensuring everyone can participate fully", "Creating elite groups", "Maintaining divisions"],
      correct: "Ensuring everyone can participate fully",
      difficulty: "Easy",
      explanation: "Social inclusion means ensuring that all people have the opportunity to participate fully in economic, social, and political life."
    },

    // Medium Questions
    {
      id: "civ_u3_m1",
      question: "How does Ethiopia's constitution address equality among diverse ethnic groups?",
      options: ["By ignoring diversity", "Through recognition of equal rights and self-determination", "By favoring one group", "By forced assimilation"],
      correct: "Through recognition of equal rights and self-determination",
      difficulty: "Medium",
      explanation: "Ethiopia's constitution recognizes the equality of all ethnic groups and their right to self-determination within the federal framework."
    },
    {
      id: "civ_u3_m2",
      question: "What are the challenges of implementing affirmative action policies?",
      options: ["No challenges exist", "Balancing fairness with historical redress", "They always work perfectly", "They are easy to implement"],
      correct: "Balancing fairness with historical redress",
      difficulty: "Medium",
      explanation: "Implementing affirmative action involves balancing the need to redress historical injustices with concerns about fairness and merit in contemporary contexts."
    },
    {
      id: "civ_u3_m3",
      question: "How do economic inequalities intersect with other forms of discrimination?",
      options: ["They don't intersect", "Poverty can compound discrimination effects", "Economics is separate from discrimination", "Only one factor matters"],
      correct: "Poverty can compound discrimination effects",
      difficulty: "Medium",
      explanation: "Economic inequalities often intersect with and compound other forms of discrimination, creating multiple disadvantages for affected groups."
    },
    {
      id: "civ_u3_m4",
      question: "What role does education play in promoting equality?",
      options: ["No role", "Provides equal opportunities and reduces prejudice", "Creates more inequality", "Only benefits the rich"],
      correct: "Provides equal opportunities and reduces prejudice",
      difficulty: "Medium",
      explanation: "Education promotes equality by providing equal opportunities for advancement and helping reduce prejudice through exposure to diverse perspectives."
    },
    {
      id: "civ_u3_m5",
      question: "How can societies balance individual rights with group rights?",
      options: ["Impossible to balance", "Through constitutional frameworks and dialogue", "Individual rights always win", "Group rights always win"],
      correct: "Through constitutional frameworks and dialogue",
      difficulty: "Medium",
      explanation: "Societies balance individual and group rights through constitutional frameworks, democratic dialogue, and institutions that protect both."
    },
    {
      id: "civ_u3_m6",
      question: "What is the difference between equality of opportunity and equality of outcome?",
      options: ["No difference", "Opportunity focuses on access, outcome on results", "They are the same thing", "One is better than the other"],
      correct: "Opportunity focuses on access, outcome on results",
      difficulty: "Medium",
      explanation: "Equality of opportunity ensures equal access to opportunities, while equality of outcome aims for equal results or achievements across groups."
    },
    {
      id: "civ_u3_m7",
      question: "How do cultural practices sometimes conflict with equality principles?",
      options: ["They never conflict", "Traditional practices may disadvantage some groups", "Culture always promotes equality", "Equality destroys culture"],
      correct: "Traditional practices may disadvantage some groups",
      difficulty: "Medium",
      explanation: "Some traditional cultural practices may conflict with equality principles by disadvantaging certain groups, requiring careful navigation between cultural respect and equal rights."
    },
    {
      id: "civ_u3_m8",
      question: "What is intersectionality in understanding discrimination?",
      options: ["Traffic concept", "Multiple forms of discrimination interact", "Simple addition of problems", "Unrelated issues"],
      correct: "Multiple forms of discrimination interact",
      difficulty: "Medium",
      explanation: "Intersectionality recognizes that multiple forms of discrimination (based on race, gender, class, etc.) interact and compound each other in complex ways."
    },
    {
      id: "civ_u3_m9",
      question: "How do international human rights standards influence domestic equality policies?",
      options: ["No influence", "Provide frameworks and pressure for compliance", "Only affect foreign countries", "Are completely ignored"],
      correct: "Provide frameworks and pressure for compliance",
      difficulty: "Medium",
      explanation: "International human rights standards provide frameworks for equality policies and create pressure for domestic compliance through various mechanisms."
    },
    {
      id: "civ_u3_m10",
      question: "What role do civil society organizations play in promoting equality?",
      options: ["No role", "Advocacy, monitoring, and education", "Create more divisions", "Only cause problems"],
      correct: "Advocacy, monitoring, and education",
      difficulty: "Medium",
      explanation: "Civil society organizations promote equality through advocacy, monitoring government actions, educating the public, and supporting affected communities."
    },

    // Hard Questions
    {
      id: "civ_u3_h1",
      question: "Analyze the tension between collective rights and individual autonomy in multicultural societies.",
      options: ["No tension exists", "Requires careful balancing through democratic deliberation", "Collective rights always win", "Individual rights always win"],
      correct: "Requires careful balancing through democratic deliberation",
      difficulty: "Hard",
      explanation: "Multicultural societies must carefully balance collective rights of groups with individual autonomy through democratic deliberation, constitutional protections, and institutional arrangements."
    },
    {
      id: "civ_u3_h2",
      question: "How do structural inequalities persist despite formal equality laws?",
      options: ["They don't persist", "Through institutional practices and social norms", "Laws eliminate all inequality", "Inequality is natural"],
      correct: "Through institutional practices and social norms",
      difficulty: "Hard",
      explanation: "Structural inequalities persist through institutional practices, social norms, economic systems, and cultural attitudes that continue to disadvantage certain groups despite formal equality."
    },
    {
      id: "civ_u3_h3",
      question: "Evaluate the effectiveness of different models of multiculturalism in promoting equality.",
      options: ["All models are identical", "Different models have varying success rates", "Multiculturalism always fails", "Multiculturalism always succeeds"],
      correct: "Different models have varying success rates",
      difficulty: "Hard",
      explanation: "Different models of multiculturalism (assimilation, pluralism, interculturalism) have varying degrees of success in promoting equality, depending on context and implementation."
    },
    {
      id: "civ_u3_h4",
      question: "How do global economic forces affect local equality efforts?",
      options: ["No effect", "Can both help and hinder equality efforts", "Only positive effects", "Only negative effects"],
      correct: "Can both help and hinder equality efforts",
      difficulty: "Hard",
      explanation: "Global economic forces can both help equality efforts through development opportunities and hinder them through increased competition and inequality."
    },
    {
      id: "civ_u3_h5",
      question: "Assess the relationship between democratization and equality outcomes.",
      options: ["Democracy automatically ensures equality", "Democracy can promote but doesn't guarantee equality", "Democracy prevents equality", "They are unrelated"],
      correct: "Democracy can promote but doesn't guarantee equality",
      difficulty: "Hard",
      explanation: "Democracy provides mechanisms for promoting equality through participation and accountability, but doesn't automatically guarantee equal outcomes without additional measures."
    },
    {
      id: "civ_u3_h6",
      question: "How do competing equality claims get resolved in democratic societies?",
      options: ["Violence", "Through democratic deliberation and judicial review", "By ignoring conflicts", "By favoring majority"],
      correct: "Through democratic deliberation and judicial review",
      difficulty: "Hard",
      explanation: "Democratic societies resolve competing equality claims through democratic deliberation, constitutional interpretation, judicial review, and compromise-building processes."
    },
    {
      id: "civ_u3_h7",
      question: "What is the role of recognition politics in achieving substantive equality?",
      options: ["Recognition is irrelevant", "Recognition of identity and dignity is crucial", "Only material equality matters", "Recognition creates division"],
      correct: "Recognition of identity and dignity is crucial",
      difficulty: "Hard",
      explanation: "Recognition politics, which acknowledges the identity and dignity of different groups, is crucial for achieving substantive equality beyond mere formal equality."
    },
    {
      id: "civ_u3_h8",
      question: "How do historical injustices affect contemporary equality efforts?",
      options: ["History is irrelevant", "Past injustices create ongoing disadvantages", "History only benefits", "Past injustices automatically disappear"],
      correct: "Past injustices create ongoing disadvantages",
      difficulty: "Hard",
      explanation: "Historical injustices create ongoing disadvantages through intergenerational effects, structural inequalities, and institutional legacies that contemporary equality efforts must address."
    },
    {
      id: "civ_u3_h9",
      question: "Analyze the limits of legal approaches to achieving equality.",
      options: ["Law solves everything", "Law is necessary but insufficient for full equality", "Law is completely ineffective", "Only law matters"],
      correct: "Law is necessary but insufficient for full equality",
      difficulty: "Hard",
      explanation: "Legal approaches are necessary for establishing equality frameworks but insufficient alone; they must be accompanied by social, economic, and cultural changes."
    },
    {
      id: "civ_u3_h10",
      question: "How does the concept of equality evolve in response to social changes?",
      options: ["Equality never changes", "Evolves through social movements and changing understandings", "Only goes backward", "Changes randomly"],
      correct: "Evolves through social movements and changing understandings",
      difficulty: "Hard",
      explanation: "The concept of equality evolves through social movements, changing social understandings, new challenges, and expanding recognition of different forms of inequality."
    }
  ],

  "Unit 4: Justice": [
    // Easy Questions
    {
      id: "civ_u4_e1",
      question: "What is justice?",
      options: ["Getting revenge", "Fair treatment according to what is deserved", "Winning at all costs", "Following traditions"],
      correct: "Fair treatment according to what is deserved",
      difficulty: "Easy",
      explanation: "Justice involves fair treatment of individuals according to what they deserve, based on their actions, needs, and rights."
    },
    {
      id: "civ_u4_e2",
      question: "What is distributive justice?",
      options: ["Punishing criminals", "Fair distribution of resources and opportunities", "Quick decision making", "Following orders"],
      correct: "Fair distribution of resources and opportunities",
      difficulty: "Easy",
      explanation: "Distributive justice concerns the fair allocation of resources, wealth, opportunities, and privileges among members of society."
    },
    {
      id: "civ_u4_e3",
      question: "What is procedural justice?",
      options: ["Fast procedures", "Fair processes in decision-making", "Complex rules", "Expensive procedures"],
      correct: "Fair processes in decision-making",
      difficulty: "Easy",
      explanation: "Procedural justice focuses on the fairness of the processes and procedures used to make decisions and resolve disputes."
    },
    {
      id: "civ_u4_e4",
      question: "What is restorative justice?",
      options: ["Building new courts", "Repairing harm and rebuilding relationships", "Destroying evidence", "Avoiding responsibility"],
      correct: "Repairing harm and rebuilding relationships",
      difficulty: "Easy",
      explanation: "Restorative justice emphasizes repairing the harm caused by crime and rebuilding relationships between offenders, victims, and the community."
    },
    {
      id: "civ_u4_e5",
      question: "What is the golden rule of justice?",
      options: ["Might makes right", "Treat others as you would like to be treated", "Winner takes all", "Follow the majority"],
      correct: "Treat others as you would like to be treated",
      difficulty: "Easy",
      explanation: "The golden rule reflects a fundamental principle of justice: treating others with the same fairness and respect you would want for yourself."
    },
    {
      id: "civ_u4_e6",
      question: "What is impartiality in justice?",
      options: ["Favoring friends", "Treating all parties fairly without bias", "Taking sides", "Ignoring evidence"],
      correct: "Treating all parties fairly without bias",
      difficulty: "Easy",
      explanation: "Impartiality means treating all parties fairly without favoritism, prejudice, or bias, based solely on relevant facts and law."
    },
    {
      id: "civ_u4_e7",
      question: "What is social justice?",
      options: ["Individual achievement", "Fair treatment and opportunities for all in society", "Competition between groups", "Elite privileges"],
      correct: "Fair treatment and opportunities for all in society",
      difficulty: "Easy",
      explanation: "Social justice seeks fair treatment, equal opportunities, and equal rights for all members of society, regardless of their background."
    },
    {
      id: "civ_u4_e8",
      question: "What is corrective justice?",
      options: ["Preventing mistakes", "Correcting wrongs and providing remedies", "Hiding problems", "Ignoring victims"],
      correct: "Correcting wrongs and providing remedies",
      difficulty: "Easy",
      explanation: "Corrective justice involves correcting wrongs, compensating victims, and providing appropriate remedies for injustices."
    },
    {
      id: "civ_u4_e9",
      question: "What is the purpose of punishment in justice?",
      options: ["Revenge only", "Deterrence, rehabilitation, and protection", "Entertainment", "Profit making"],
      correct: "Deterrence, rehabilitation, and protection",
      difficulty: "Easy",
      explanation: "Punishment serves multiple purposes: deterring future crimes, rehabilitating offenders, and protecting society from dangerous individuals."
    },
    {
      id: "civ_u4_e10",
      question: "What is legal aid?",
      options: ["Money for lawyers", "Free or low-cost legal help for those who cannot afford it", "Law school scholarships", "Court building funds"],
      correct: "Free or low-cost legal help for those who cannot afford it",
      difficulty: "Easy",
      explanation: "Legal aid provides free or affordable legal services to people who cannot afford private lawyers, ensuring access to justice for all."
    },

    // Medium Questions
    {
      id: "civ_u4_m1",
      question: "How does the Ethiopian justice system incorporate traditional conflict resolution methods?",
      options: ["By ignoring them", "Through integration with formal courts", "By replacing formal courts", "By banning them"],
      correct: "Through integration with formal courts",
      difficulty: "Medium",
      explanation: "Ethiopia's justice system recognizes and integrates traditional conflict resolution methods alongside formal courts to provide culturally appropriate justice."
    },
    {
      id: "civ_u4_m2",
      question: "What is the relationship between justice and human rights?",
      options: ["They are unrelated", "Justice protects and enforces human rights", "They conflict with each other", "Human rights prevent justice"],
      correct: "Justice protects and enforces human rights",
      difficulty: "Medium",
      explanation: "Justice systems exist to protect and enforce human rights, ensuring that individuals receive fair treatment and their fundamental rights are respected."
    },
    {
      id: "civ_u4_m3",
      question: "How do economic inequalities affect access to justice?",
      options: ["No effect on access", "Wealth can determine quality of legal representation", "Poor people get better justice", "Money is irrelevant to justice"],
      correct: "Wealth can determine quality of legal representation",
      difficulty: "Medium",
      explanation: "Economic inequalities can affect access to justice by determining the quality of legal representation and resources available to different individuals."
    },
    {
      id: "civ_u4_m4",
      question: "What is transitional justice?",
      options: ["Temporary courts", "Justice mechanisms for societies recovering from conflict", "Moving courthouses", "Changing judges"],
      correct: "Justice mechanisms for societies recovering from conflict",
      difficulty: "Medium",
      explanation: "Transitional justice refers to mechanisms used by societies transitioning from periods of conflict or repression to address past violations and build peace."
    },
    {
      id: "civ_u4_m5",
      question: "How does gender affect access to justice?",
      options: ["Gender has no impact", "Women often face barriers to justice", "Men are always disadvantaged", "Gender only matters in family law"],
      correct: "Women often face barriers to justice",
      difficulty: "Medium",
      explanation: "Women often face cultural, economic, and institutional barriers that limit their access to justice and fair treatment in legal systems."
    },
    {
      id: "civ_u4_m6",
      question: "What is environmental justice?",
      options: ["Justice for animals only", "Fair treatment in environmental matters", "Ignoring pollution", "Exploiting natural resources"],
      correct: "Fair treatment in environmental matters",
      difficulty: "Medium",
      explanation: "Environmental justice ensures fair treatment and meaningful involvement of all people in environmental decisions, regardless of race, color, or income."
    },
    {
      id: "civ_u4_m7",
      question: "How do cultural differences affect perceptions of justice?",
      options: ["Culture doesn't matter", "Different cultures may have different concepts of fairness", "All cultures have identical views", "Culture prevents justice"],
      correct: "Different cultures may have different concepts of fairness",
      difficulty: "Medium",
      explanation: "Cultural backgrounds influence how people perceive fairness, punishment, and resolution of disputes, requiring culturally sensitive approaches to justice."
    },
    {
      id: "civ_u4_m8",
      question: "What is victim-centered justice?",
      options: ["Ignoring victims", "Focusing on victims' needs and rights", "Punishing victims", "Blaming victims"],
      correct: "Focusing on victims' needs and rights",
      difficulty: "Medium",
      explanation: "Victim-centered justice prioritizes the needs, rights, and participation of victims in the justice process, ensuring their voices are heard and needs addressed."
    },
    {
      id: "civ_u4_m9",
      question: "How does corruption undermine justice?",
      options: ["Corruption helps justice", "Corruption creates unfair advantages", "Corruption is irrelevant", "Corruption improves efficiency"],
      correct: "Corruption creates unfair advantages",
      difficulty: "Medium",
      explanation: "Corruption undermines justice by creating unfair advantages for those who can pay bribes and denying equal treatment under the law."
    },
    {
      id: "civ_u4_m10",
      question: "What is the role of civil society in promoting justice?",
      options: ["No role in justice", "Advocating for fair laws and monitoring courts", "Replacing courts", "Creating confusion"],
      correct: "Advocating for fair laws and monitoring courts",
      difficulty: "Medium",
      explanation: "Civil society organizations advocate for fair laws, monitor court proceedings, provide legal aid, and ensure accountability in the justice system."
    },

    // Hard Questions
    {
      id: "civ_u4_h1",
      question: "Analyze the tension between collective harmony and individual rights in traditional justice systems.",
      options: ["No tension exists", "Requires balancing community needs with individual rights", "Collective always wins", "Individual always wins"],
      correct: "Requires balancing community needs with individual rights",
      difficulty: "Hard",
      explanation: "Traditional justice systems often emphasize collective harmony, creating tension with individual rights that requires careful balancing and contextual solutions."
    },
    {
      id: "civ_u4_h2",
      question: "How do international justice mechanisms complement domestic systems?",
      options: ["They replace domestic systems", "They provide oversight and fill gaps", "They are unnecessary", "They only create conflicts"],
      correct: "They provide oversight and fill gaps",
      difficulty: "Hard",
      explanation: "International justice mechanisms complement domestic systems by providing oversight, addressing gaps, and handling cases where domestic systems are unwilling or unable to act."
    },
    {
      id: "civ_u4_h3",
      question: "Evaluate the effectiveness of truth and reconciliation commissions.",
      options: ["Always effective", "Mixed results depending on context and design", "Always ineffective", "Only work in Africa"],
      correct: "Mixed results depending on context and design",
      difficulty: "Hard",
      explanation: "Truth and reconciliation commissions have shown mixed results, with effectiveness depending on political context, design, resources, and follow-up mechanisms."
    },
    {
      id: "civ_u4_h4",
      question: "How does globalization affect concepts of justice?",
      options: ["No effect on justice", "Creates new challenges and opportunities", "Eliminates local justice", "Only benefits rich countries"],
      correct: "Creates new challenges and opportunities",
      difficulty: "Hard",
      explanation: "Globalization creates new challenges for justice through transnational crimes while offering opportunities for international cooperation and human rights protection."
    },
    {
      id: "civ_u4_h5",
      question: "Assess the relationship between development and justice.",
      options: ["Development prevents justice", "Development and justice can be mutually reinforcing", "They are unrelated", "Justice prevents development"],
      correct: "Development and justice can be mutually reinforcing",
      difficulty: "Hard",
      explanation: "Development and justice can reinforce each other when development is rights-based and just institutions support sustainable development."
    },
    {
      id: "civ_u4_h6",
      question: "How do power structures affect the delivery of justice?",
      options: ["Power has no effect", "Power imbalances can distort justice outcomes", "Power always improves justice", "Only formal power matters"],
      correct: "Power imbalances can distort justice outcomes",
      difficulty: "Hard",
      explanation: "Power structures can distort justice by creating advantages for powerful actors and disadvantaging marginalized groups, requiring institutional safeguards."
    },
    {
      id: "civ_u4_h7",
      question: "What is the role of technology in modern justice systems?",
      options: ["Technology hinders justice", "Technology can improve access and efficiency", "Technology is irrelevant", "Technology replaces human judgment"],
      correct: "Technology can improve access and efficiency",
      difficulty: "Hard",
      explanation: "Technology can enhance justice systems by improving access, efficiency, and transparency while requiring careful consideration of privacy and equity concerns."
    },
    {
      id: "civ_u4_h8",
      question: "How do historical injustices affect contemporary justice efforts?",
      options: ["History is irrelevant", "Past injustices shape current challenges and solutions", "History only creates problems", "History solves all problems"],
      correct: "Past injustices shape current challenges and solutions",
      difficulty: "Hard",
      explanation: "Historical injustices create ongoing effects that shape contemporary justice challenges and require targeted responses to address their legacies."
    },
    {
      id: "civ_u4_h9",
      question: "Analyze the concept of universal versus relative justice.",
      options: ["Only universal justice exists", "Justice combines universal principles with cultural sensitivity", "Only relative justice exists", "They cannot coexist"],
      correct: "Justice combines universal principles with cultural sensitivity",
      difficulty: "Hard",
      explanation: "Justice combines universal human rights principles with cultural sensitivity, requiring balance between global standards and local contexts."
    },
    {
      id: "civ_u4_h10",
      question: "How does climate change challenge traditional concepts of justice?",
      options: ["No challenge to justice", "Creates new forms of injustice requiring innovative responses", "Climate change is unrelated to justice", "Traditional justice is sufficient"],
      correct: "Creates new forms of injustice requiring innovative responses",
      difficulty: "Hard",
      explanation: "Climate change creates new forms of injustice affecting vulnerable populations disproportionately, requiring innovative legal and institutional responses."
    }
  ],

  "Unit 5: Patriotism": [
    // Easy Questions
    {
      id: "civ_u5_e1",
      question: "What is patriotism?",
      options: ["Hatred of other countries", "Love and devotion to one's country", "Blind obedience to government", "Military service only"],
      correct: "Love and devotion to one's country",
      difficulty: "Easy",
      explanation: "Patriotism is love, devotion, and loyalty to one's country, including its people, culture, values, and institutions."
    },
    {
      id: "civ_u5_e2",
      question: "What is the difference between patriotism and nationalism?",
      options: ["They are identical", "Patriotism is love of country, nationalism can be extreme", "Patriotism is bad, nationalism is good", "Only nationalism matters"],
      correct: "Patriotism is love of country, nationalism can be extreme",
      difficulty: "Easy",
      explanation: "Patriotism involves healthy love of country, while nationalism can become extreme and exclude or hostile toward other nations."
    },
    {
      id: "civ_u5_e3",
      question: "How can citizens show patriotism?",
      options: ["Only through military service", "Through civic participation and service", "By criticizing everything", "By avoiding politics"],
      correct: "Through civic participation and service",
      difficulty: "Easy",
      explanation: "Citizens show patriotism through civic participation, community service, respecting laws, and working to improve their country."
    },
    {
      id: "civ_u5_e4",
      question: "What is national identity?",
      options: ["Government ID card", "Shared sense of belonging to a nation", "Geographic location", "Language only"],
      correct: "Shared sense of belonging to a nation",
      difficulty: "Easy",
      explanation: "National identity is the shared sense of belonging, common values, culture, and history that unite people as members of a nation."
    },
    {
      id: "civ_u5_e5",
      question: "What are national symbols?",
      options: ["Mathematical symbols", "Objects representing national identity", "Religious symbols only", "Commercial brands"],
      correct: "Objects representing national identity",
      difficulty: "Easy",
      explanation: "National symbols like flags, anthems, and emblems represent a nation's identity, values, and history, fostering unity and pride."
    },
    {
      id: "civ_u5_e6",
      question: "What is constructive patriotism?",
      options: ["Building construction", "Working to improve one's country", "Destroying everything", "Avoiding responsibility"],
      correct: "Working to improve one's country",
      difficulty: "Easy",
      explanation: "Constructive patriotism involves actively working to improve one's country through positive contributions and addressing its challenges."
    },
    {
      id: "civ_u5_e7",
      question: "Can patriotism include criticism of government?",
      options: ["Never", "Yes, when aimed at improvement", "Only during elections", "Only by politicians"],
      correct: "Yes, when aimed at improvement",
      difficulty: "Easy",
      explanation: "True patriotism can include constructive criticism of government policies and actions when aimed at improving the country."
    },
    {
      id: "civ_u5_e8",
      question: "What is civic duty?",
      options: ["Optional activity", "Responsibilities of citizens to their country", "Government job", "Military obligation only"],
      correct: "Responsibilities of citizens to their country",
      difficulty: "Easy",
      explanation: "Civic duty refers to the responsibilities and obligations citizens have toward their country and fellow citizens."
    },
    {
      id: "civ_u5_e9",
      question: "How does education promote patriotism?",
      options: ["By teaching hatred", "By fostering understanding of national heritage", "By avoiding history", "By isolating students"],
      correct: "By fostering understanding of national heritage",
      difficulty: "Easy",
      explanation: "Education promotes patriotism by teaching about national history, values, achievements, and responsibilities of citizenship."
    },
    {
      id: "civ_u5_e10",
      question: "What is the role of culture in patriotism?",
      options: ["Culture is irrelevant", "Culture strengthens national identity", "Culture divides people", "Culture is only entertainment"],
      correct: "Culture strengthens national identity",
      difficulty: "Easy",
      explanation: "Culture strengthens patriotism by preserving traditions, values, and shared experiences that bind people together as a nation."
    },

    // Medium Questions
    {
      id: "civ_u5_m1",
      question: "How can Ethiopia's diverse ethnic groups maintain patriotism while preserving their identities?",
      options: ["By choosing one or the other", "Through unity in diversity", "By ignoring differences", "By separation"],
      correct: "Through unity in diversity",
      difficulty: "Medium",
      explanation: "Ethiopia's diverse ethnic groups can maintain patriotism through unity in diversity, celebrating both their unique identities and shared Ethiopian heritage."
    },
    {
      id: "civ_u5_m2",
      question: "What is the relationship between patriotism and global citizenship?",
      options: ["They are contradictory", "They can complement each other", "Global citizenship is impossible", "Patriotism prevents global thinking"],
      correct: "They can complement each other",
      difficulty: "Medium",
      explanation: "Patriotism and global citizenship can complement each other, as love of country can coexist with concern for humanity and global cooperation."
    },
    {
      id: "civ_u5_m3",
      question: "How does economic development relate to patriotism?",
      options: ["No relationship", "Development can strengthen national pride", "Development weakens patriotism", "Only military matters"],
      correct: "Development can strengthen national pride",
      difficulty: "Medium",
      explanation: "Economic development can strengthen patriotism by improving living standards and creating reasons for national pride and optimism."
    },
    {
      id: "civ_u5_m4",
      question: "What role does history play in shaping patriotism?",
      options: ["History is irrelevant", "Historical awareness creates deeper patriotism", "History only causes conflicts", "Only recent events matter"],
      correct: "Historical awareness creates deeper patriotism",
      difficulty: "Medium",
      explanation: "Understanding national history, including struggles and achievements, creates deeper and more informed patriotism based on appreciation of sacrifices and progress."
    },
    {
      id: "civ_u5_m5",
      question: "How can patriotism be expressed in a democratic society?",
      options: ["Only through military service", "Through civic participation and democratic engagement", "By avoiding politics", "Through blind obedience"],
      correct: "Through civic participation and democratic engagement",
      difficulty: "Medium",
      explanation: "In democratic societies, patriotism is expressed through active civic participation, voting, community service, and constructive engagement in democratic processes."
    },
    {
      id: "civ_u5_m6",
      question: "What is the difference between healthy and unhealthy patriotism?",
      options: ["No difference exists", "Healthy patriotism is inclusive, unhealthy is exclusive", "All patriotism is healthy", "All patriotism is unhealthy"],
      correct: "Healthy patriotism is inclusive, unhealthy is exclusive",
      difficulty: "Medium",
      explanation: "Healthy patriotism is inclusive and allows for criticism and diversity, while unhealthy patriotism becomes exclusive, aggressive, and intolerant."
    },
    {
      id: "civ_u5_m7",
      question: "How do diaspora communities maintain patriotism?",
      options: ["Impossible outside the country", "Through cultural preservation and connections", "By forgetting their homeland", "Only through return"],
      correct: "Through cultural preservation and connections",
      difficulty: "Medium",
      explanation: "Diaspora communities maintain patriotism by preserving cultural traditions, maintaining connections with home, and contributing to their country's development."
    },
    {
      id: "civ_u5_m8",
      question: "What is the role of sports in fostering patriotism?",
      options: ["Sports have no role", "Sports create shared pride and unity", "Sports only cause division", "Sports are just entertainment"],
      correct: "Sports create shared pride and unity",
      difficulty: "Medium",
      explanation: "Sports foster patriotism by creating shared experiences, national pride in achievements, and unity across different social groups."
    },
    {
      id: "civ_u5_m9",
      question: "How does language policy affect patriotism in multilingual countries?",
      options: ["Language is irrelevant", "Inclusive language policies promote unity", "Only one language should exist", "Language always divides"],
      correct: "Inclusive language policies promote unity",
      difficulty: "Medium",
      explanation: "Inclusive language policies that respect linguistic diversity while promoting national languages can strengthen patriotism by making all groups feel included."
    },
    {
      id: "civ_u5_m10",
      question: "What is the relationship between patriotism and environmental protection?",
      options: ["No relationship", "Protecting the environment shows love of country", "Environment is separate from patriotism", "Development is more important"],
      correct: "Protecting the environment shows love of country",
      difficulty: "Medium",
      explanation: "Environmental protection demonstrates patriotism by preserving the country's natural heritage for future generations and ensuring sustainable development."
    },

    // Hard Questions
    {
      id: "civ_u5_h1",
      question: "Analyze how patriotism can both unite and divide society.",
      options: ["Patriotism only unites", "Patriotism can create in-groups and out-groups", "Patriotism only divides", "Patriotism has no social effects"],
      correct: "Patriotism can create in-groups and out-groups",
      difficulty: "Hard",
      explanation: "Patriotism can unite people around shared identity but may also create divisions by defining who belongs and who doesn't, requiring careful balance."
    },
    {
      id: "civ_u5_h2",
      question: "How do competing historical narratives affect national patriotism?",
      options: ["History doesn't matter", "Different narratives can create competing loyalties", "Only one narrative should exist", "All narratives are equal"],
      correct: "Different narratives can create competing loyalties",
      difficulty: "Hard",
      explanation: "Competing historical narratives can create different understandings of national identity and patriotism, requiring inclusive approaches to national storytelling."
    },
    {
      id: "civ_u5_h3",
      question: "Evaluate the tension between patriotism and human rights.",
      options: ["They always conflict", "They can be balanced through constitutional patriotism", "Human rights don't matter", "Patriotism trumps rights"],
      correct: "They can be balanced through constitutional patriotism",
      difficulty: "Hard",
      explanation: "Constitutional patriotism allows balance between love of country and respect for human rights by emphasizing shared democratic values and institutions."
    },
    {
      id: "civ_u5_h4",
      question: "How does globalization challenge traditional forms of patriotism?",
      options: ["No challenge exists", "Creates need for more inclusive patriotism", "Eliminates patriotism completely", "Makes patriotism obsolete"],
      correct: "Creates need for more inclusive patriotism",
      difficulty: "Hard",
      explanation: "Globalization challenges traditional patriotism by increasing interconnectedness, requiring more inclusive forms that balance national identity with global citizenship."
    },
    {
      id: "civ_u5_h5",
      question: "Assess the role of education in constructing national identity.",
      options: ["Education has no role", "Education shapes understanding of national identity", "Only family matters", "Identity is natural"],
      correct: "Education shapes understanding of national identity",
      difficulty: "Hard",
      explanation: "Education plays a crucial role in constructing national identity by shaping how people understand their history, values, and place in the nation."
    },
    {
      id: "civ_u5_h6",
      question: "How do social movements affect expressions of patriotism?",
      options: ["Movements are unpatriotic", "Movements can redefine patriotic expression", "Movements have no effect", "Only government defines patriotism"],
      correct: "Movements can redefine patriotic expression",
      difficulty: "Hard",
      explanation: "Social movements can challenge and redefine patriotism by proposing alternative visions of what it means to serve and improve the country."
    },
    {
      id: "civ_u5_h7",
      question: "What is the relationship between patriotism and political dissent?",
      options: ["Dissent is always unpatriotic", "Dissent can be the highest form of patriotism", "They are unrelated", "Dissent is illegal"],
      correct: "Dissent can be the highest form of patriotism",
      difficulty: "Hard",
      explanation: "Political dissent can represent the highest form of patriotism when it aims to improve the country and hold it accountable to its highest ideals."
    },
    {
      id: "civ_u5_h8",
      question: "How do economic inequalities affect patriotic feelings?",
      options: ["No effect on patriotism", "Inequality can undermine patriotic unity", "Inequality strengthens patriotism", "Only culture matters"],
      correct: "Inequality can undermine patriotic unity",
      difficulty: "Hard",
      explanation: "Economic inequalities can undermine patriotism by creating different experiences of citizenship and reducing trust in national institutions."
    },
    {
      id: "civ_u5_h9",
      question: "Analyze the concept of constitutional patriotism in diverse societies.",
      options: ["Impossible in diverse societies", "Focuses on shared democratic values", "Requires cultural uniformity", "Only works in homogeneous societies"],
      correct: "Focuses on shared democratic values",
      difficulty: "Hard",
      explanation: "Constitutional patriotism in diverse societies focuses on shared democratic values, institutions, and procedures rather than cultural or ethnic homogeneity."
    },
    {
      id: "civ_u5_h10",
      question: "How do international conflicts affect domestic patriotism?",
      options: ["No effect on domestic patriotism", "Can strengthen or challenge patriotic narratives", "Always strengthen patriotism", "Always weaken patriotism"],
      correct: "Can strengthen or challenge patriotic narratives",
      difficulty: "Hard",
      explanation: "International conflicts can both strengthen patriotism through unity against external threats and challenge it when conflicts reveal contradictions in national values."
    }
  ],

  "Unit 6: Responsibility": [
    // Easy Questions
    {
      id: "civ_u6_e1",
      question: "What is civic responsibility?",
      options: ["Government's job only", "Citizens' duties to their community", "Optional behavior", "Business responsibility"],
      correct: "Citizens' duties to their community",
      difficulty: "Easy",
      explanation: "Civic responsibility refers to the duties and obligations citizens have toward their community and society."
    },
    {
      id: "civ_u6_e2",
      question: "What is personal responsibility?",
      options: ["Blaming others", "Being accountable for one's actions", "Avoiding decisions", "Following others blindly"],
      correct: "Being accountable for one's actions",
      difficulty: "Easy",
      explanation: "Personal responsibility means being accountable for one's own actions, decisions, and their consequences."
    },
    {
      id: "civ_u6_e3",
      question: "What is environmental responsibility?",
      options: ["Ignoring pollution", "Protecting and preserving the environment", "Using all resources quickly", "Only government's job"],
      correct: "Protecting and preserving the environment",
      difficulty: "Easy",
      explanation: "Environmental responsibility involves protecting and preserving the environment for current and future generations."
    },
    {
      id: "civ_u6_e4",
      question: "What is social responsibility?",
      options: ["Only socializing", "Caring for the welfare of society", "Avoiding social contact", "Individual success only"],
      correct: "Caring for the welfare of society",
      difficulty: "Easy",
      explanation: "Social responsibility involves caring for the welfare of society and contributing to the common good."
    },
    {
      id: "civ_u6_e5",
      question: "What is moral responsibility?",
      options: ["Following laws only", "Acting according to ethical principles", "Doing whatever benefits you", "Avoiding moral questions"],
      correct: "Acting according to ethical principles",
      difficulty: "Easy",
      explanation: "Moral responsibility involves acting according to ethical principles and standards of right and wrong."
    },
    {
      id: "civ_u6_e6",
      question: "What is collective responsibility?",
      options: ["Individual action only", "Shared responsibility of a group", "Avoiding group activities", "Leadership responsibility only"],
      correct: "Shared responsibility of a group",
      difficulty: "Easy",
      explanation: "Collective responsibility is the shared responsibility of a group for the actions and outcomes that result from group decisions or activities."
    },
    {
      id: "civ_u6_e7",
      question: "What is professional responsibility?",
      options: ["Personal preferences", "Ethical obligations in one's profession", "Making maximum profit", "Avoiding work"],
      correct: "Ethical obligations in one's profession",
      difficulty: "Easy",
      explanation: "Professional responsibility involves meeting the ethical obligations and standards expected in one's profession or career."
    },
    {
      id: "civ_u6_e8",
      question: "What is intergenerational responsibility?",
      options: ["Ignoring future generations", "Considering the impact on future generations", "Only caring about the present", "Past only matters"],
      correct: "Considering the impact on future generations",
      difficulty: "Easy",
      explanation: "Intergenerational responsibility involves considering the impact of current actions on future generations."
    },
    {
      id: "civ_u6_e9",
      question: "What is legal responsibility?",
      options: ["Optional compliance", "Obligation to follow laws", "Making laws", "Ignoring laws"],
      correct: "Obligation to follow laws",
      difficulty: "Easy",
      explanation: "Legal responsibility is the obligation to comply with laws and face consequences for legal violations."
    },
    {
      id: "civ_u6_e10",
      question: "What is community service?",
      options: ["Paid employment", "Voluntary work to help the community", "Government job", "Business activity"],
      correct: "Voluntary work to help the community",
      difficulty: "Easy",
      explanation: "Community service involves voluntary work undertaken to help and benefit the community."
    },

    // Medium Questions
    {
      id: "civ_u6_m1",
      question: "How does individual responsibility contribute to democratic governance?",
      options: ["It doesn't contribute", "Responsible citizens make democracy work", "Only leaders matter", "Responsibility hinders democracy"],
      correct: "Responsible citizens make democracy work",
      difficulty: "Medium",
      explanation: "Individual responsibility is essential for democratic governance because responsible citizens participate actively and hold leaders accountable."
    },
    {
      id: "civ_u6_m2",
      question: "What is the relationship between rights and responsibilities?",
      options: ["They are unrelated", "Rights and responsibilities are interconnected", "Rights are more important", "Responsibilities are more important"],
      correct: "Rights and responsibilities are interconnected",
      difficulty: "Medium",
      explanation: "Rights and responsibilities are interconnected - enjoying rights requires fulfilling responsibilities, and having responsibilities enables the exercise of rights."
    },
    {
      id: "civ_u6_m3",
      question: "How do cultural values influence concepts of responsibility?",
      options: ["Culture has no influence", "Cultural values shape understanding of responsibility", "Responsibility is universal", "Only laws matter"],
      correct: "Cultural values shape understanding of responsibility",
      difficulty: "Medium",
      explanation: "Cultural values significantly influence how societies and individuals understand and practice different forms of responsibility."
    },
    {
      id: "civ_u6_m4",
      question: "What is corporate social responsibility?",
      options: ["Profit maximization only", "Companies' obligation to benefit society", "Government regulation only", "Avoiding business ethics"],
      correct: "Companies' obligation to benefit society",
      difficulty: "Medium",
      explanation: "Corporate social responsibility involves companies considering their impact on society and taking actions to benefit stakeholders beyond shareholders."
    },
    {
      id: "civ_u6_m5",
      question: "How does technology affect personal responsibility?",
      options: ["No effect on responsibility", "Creates new forms of responsibility", "Eliminates responsibility", "Only creates problems"],
      correct: "Creates new forms of responsibility",
      difficulty: "Medium",
      explanation: "Technology creates new forms of responsibility related to digital citizenship, privacy, information sharing, and the ethical use of technological tools."
    },
    {
      id: "civ_u6_m6",
      question: "What is the role of education in developing responsibility?",
      options: ["Education is irrelevant", "Education helps develop responsible citizenship", "Only experience matters", "Responsibility is innate"],
      correct: "Education helps develop responsible citizenship",
      difficulty: "Medium",
      explanation: "Education plays a crucial role in developing responsible citizenship by teaching values, critical thinking, and civic knowledge."
    },
    {
      id: "civ_u6_m7",
      question: "How does globalization affect concepts of responsibility?",
      options: ["No effect on responsibility", "Creates global responsibilities", "Only local matters", "Eliminates responsibility"],
      correct: "Creates global responsibilities",
      difficulty: "Medium",
      explanation: "Globalization creates new forms of global responsibility as actions in one place can affect people worldwide, requiring broader thinking about consequences."
    },
    {
      id: "civ_u6_m8",
      question: "What is the difference between accountability and responsibility?",
      options: ["They are identical", "Responsibility is proactive, accountability is reactive", "Only accountability matters", "Only responsibility matters"],
      correct: "Responsibility is proactive, accountability is reactive",
      difficulty: "Medium",
      explanation: "Responsibility is proactive engagement with duties and obligations, while accountability is reactive answering for actions after they occur."
    },
    {
      id: "civ_u6_m9",
      question: "How do economic conditions affect the exercise of responsibility?",
      options: ["No relationship exists", "Economic hardship can limit ability to fulfill responsibilities", "Economics strengthens responsibility", "Only wealth matters"],
      correct: "Economic hardship can limit ability to fulfill responsibilities",
      difficulty: "Medium",
      explanation: "Economic conditions can affect the ability to fulfill responsibilities, as poverty may limit access to resources needed for civic participation."
    },
    {
      id: "civ_u6_m10",
      question: "What is the role of civil society in promoting responsibility?",
      options: ["No role in responsibility", "Civil society teaches and models responsibility", "Only government matters", "Civil society prevents responsibility"],
      correct: "Civil society teaches and models responsibility",
      difficulty: "Medium",
      explanation: "Civil society organizations play a crucial role in teaching, modeling, and promoting various forms of civic and social responsibility."
    },

    // Hard Questions
    {
      id: "civ_u6_h1",
      question: "Analyze the tension between individual responsibility and systemic factors.",
      options: ["Only individuals matter", "Both individual and systemic factors shape outcomes", "Only systems matter", "There is no tension"],
      correct: "Both individual and systemic factors shape outcomes",
      difficulty: "Hard",
      explanation: "Understanding responsibility requires recognizing how individual choices interact with systemic factors like poverty, discrimination, and institutional barriers."
    },
    {
      id: "civ_u6_h2",
      question: "How do power structures affect the distribution of responsibility?",
      options: ["Power has no effect", "Power affects who bears responsibility", "Everyone has equal responsibility", "Power eliminates responsibility"],
      correct: "Power affects who bears responsibility",
      difficulty: "Hard",
      explanation: "Power structures can affect how responsibility is distributed, with those having more power often bearing greater responsibility for outcomes."
    },
    {
      id: "civ_u6_h3",
      question: "Evaluate the concept of collective responsibility in addressing historical injustices.",
      options: ["Past doesn't matter", "Collective responsibility can address historical harm", "Only individuals are responsible", "History cannot be changed"],
      correct: "Collective responsibility can address historical harm",
      difficulty: "Hard",
      explanation: "Collective responsibility can play a role in addressing historical injustices through acknowledgment, reparations, and systemic changes."
    },
    {
      id: "civ_u6_h4",
      question: "How does the concept of responsibility evolve in response to global challenges?",
      options: ["Responsibility never changes", "Global challenges expand concepts of responsibility", "Local responsibility only matters", "Challenges eliminate responsibility"],
      correct: "Global challenges expand concepts of responsibility",
      difficulty: "Hard",
      explanation: "Global challenges like climate change and pandemics are expanding concepts of responsibility to include global citizenship and intergenerational duties."
    },
    {
      id: "civ_u6_h5",
      question: "Assess the relationship between freedom and responsibility.",
      options: ["They are opposites", "Greater freedom requires greater responsibility", "Freedom eliminates responsibility", "They are unrelated"],
      correct: "Greater freedom requires greater responsibility",
      difficulty: "Hard",
      explanation: "Freedom and responsibility are interconnected - greater freedom often requires greater responsibility for the consequences of one's choices."
    },
    {
      id: "civ_u6_h6",
      question: "How do competing moral frameworks affect concepts of responsibility?",
      options: ["All frameworks are identical", "Different frameworks create different concepts", "Only one framework matters", "Frameworks are irrelevant"],
      correct: "Different frameworks create different concepts",
      difficulty: "Hard",
      explanation: "Different moral and ethical frameworks can lead to different understandings of what constitutes responsible behavior and decision-making."
    },
    {
      id: "civ_u6_h7",
      question: "What is the role of intention in moral responsibility?",
      options: ["Intention is irrelevant", "Intention affects moral responsibility", "Only outcomes matter", "Intention eliminates responsibility"],
      correct: "Intention affects moral responsibility",
      difficulty: "Hard",
      explanation: "Intention plays a significant role in moral responsibility - the motivation behind actions affects how we evaluate their moral weight."
    },
    {
      id: "civ_u6_h8",
      question: "How does uncertainty affect responsible decision-making?",
      options: ["Uncertainty eliminates responsibility", "Uncertainty requires careful consideration", "Perfect knowledge is needed", "Uncertainty doesn't matter"],
      correct: "Uncertainty requires careful consideration",
      difficulty: "Hard",
      explanation: "Uncertainty doesn't eliminate responsibility but requires careful consideration of potential outcomes and taking reasonable precautions."
    },
    {
      id: "civ_u6_h9",
      question: "Analyze the concept of shared responsibility in addressing social problems.",
      options: ["Individual solutions only", "Social problems require shared responsibility", "Government solutions only", "Problems solve themselves"],
      correct: "Social problems require shared responsibility",
      difficulty: "Hard",
      explanation: "Complex social problems typically require shared responsibility among individuals, communities, organizations, and governments working together."
    },
    {
      id: "civ_u6_h10",
      question: "How do emerging technologies challenge traditional concepts of responsibility?",
      options: ["No challenge to responsibility", "Create new ethical dilemmas", "Eliminate need for responsibility", "Only create solutions"],
      correct: "Create new ethical dilemmas",
      difficulty: "Hard",
      explanation: "Emerging technologies create new ethical dilemmas about responsibility, including questions about AI decision-making, privacy, and unintended consequences."
    }
  ],

  // Continuing with remaining units...
  "Unit 7: Industriousness": [
    // Easy Questions
    {
      id: "civ_u7_e1",
      question: "What is industriousness?",
      options: ["Working in factories only", "Hard work and diligence", "Avoiding work", "Working slowly"],
      correct: "Hard work and diligence",
      difficulty: "Easy",
      explanation: "Industriousness refers to the quality of working hard and being diligent in one's efforts and responsibilities."
    },
    {
      id: "civ_u7_e2",
      question: "What is the work ethic?",
      options: ["Avoiding responsibility", "Commitment to work and achievement", "Working minimal hours", "Focusing only on pay"],
      correct: "Commitment to work and achievement",
      difficulty: "Easy",
      explanation: "Work ethic is a commitment to work hard, be reliable, and take pride in one's work and achievements."
    },
    {
      id: "civ_u7_e3",
      question: "What is productivity?",
      options: ["Working slowly", "Efficiency in producing results", "Avoiding tasks", "Working without purpose"],
      correct: "Efficiency in producing results",
      difficulty: "Easy",
      explanation: "Productivity refers to the efficiency of producing desired results or outputs from work and effort."
    },
    {
      id: "civ_u7_e4",
      question: "What is entrepreneurship?",
      options: ["Only big business", "Starting and managing business ventures", "Government employment", "Avoiding risks"],
      correct: "Starting and managing business ventures",
      difficulty: "Easy",
      explanation: "Entrepreneurship involves starting, managing, and taking risks in business ventures to create value and opportunities."
    },
    {
      id: "civ_u7_e5",
      question: "What is innovation?",
      options: ["Repeating old methods", "Creating new ideas and solutions", "Avoiding change", "Following traditions only"],
      correct: "Creating new ideas and solutions",
      difficulty: "Easy",
      explanation: "Innovation involves creating new ideas, methods, or solutions to improve existing processes or solve problems."
    },
    {
      id: "civ_u7_e6",
      question: "What is skill development?",
      options: ["Staying the same", "Improving abilities and competencies", "Avoiding learning", "Natural talent only"],
      correct: "Improving abilities and competencies",
      difficulty: "Easy",
      explanation: "Skill development involves continuously improving abilities, competencies, and knowledge to enhance performance and opportunities."
    },
    {
      id: "civ_u7_e7",
      question: "What is teamwork?",
      options: ["Working alone", "Collaborating effectively with others", "Competing with colleagues", "Avoiding cooperation"],
      correct: "Collaborating effectively with others",
      difficulty: "Easy",
      explanation: "Teamwork involves collaborating effectively with others to achieve common goals and objectives."
    },
    {
      id: "civ_u7_e8",
      question: "What is professional development?",
      options: ["Staying in one position", "Advancing skills and career", "Avoiding challenges", "Working less"],
      correct: "Advancing skills and career",
      difficulty: "Easy",
      explanation: "Professional development involves advancing one's skills, knowledge, and career through learning and experience."
    },
    {
      id: "civ_u7_e9",
      question: "What is quality control?",
      options: ["Accepting poor work", "Ensuring standards are met", "Rushing through tasks", "Ignoring mistakes"],
      correct: "Ensuring standards are met",
      difficulty: "Easy",
      explanation: "Quality control involves ensuring that work meets established standards and specifications for excellence."
    },
    {
      id: "civ_u7_e10",
      question: "What is time management?",
      options: ["Wasting time", "Using time effectively and efficiently", "Ignoring deadlines", "Working without planning"],
      correct: "Using time effectively and efficiently",
      difficulty: "Easy",
      explanation: "Time management involves planning and using time effectively and efficiently to accomplish goals and tasks."
    },

    // Medium Questions
    {
      id: "civ_u7_m1",
      question: "How does industriousness contribute to national development?",
      options: ["It doesn't contribute", "Hard work drives economic growth and progress", "Only government matters", "Natural resources are sufficient"],
      correct: "Hard work drives economic growth and progress",
      difficulty: "Medium",
      explanation: "Industriousness contributes to national development by driving economic growth, innovation, and progress through collective hard work and productivity."
    },
    {
      id: "civ_u7_m2",
      question: "What is the relationship between education and industriousness?",
      options: ["No relationship", "Education enhances ability to work effectively", "Education reduces work", "Only experience matters"],
      correct: "Education enhances ability to work effectively",
      difficulty: "Medium",
      explanation: "Education enhances industriousness by providing knowledge, skills, and critical thinking abilities that improve work effectiveness and opportunities."
    },
    {
      id: "civ_u7_m3",
      question: "How does technology affect industriousness?",
      options: ["Reduces need for work", "Can enhance productivity and efficiency", "Eliminates human work", "Has no effect"],
      correct: "Can enhance productivity and efficiency",
      difficulty: "Medium",
      explanation: "Technology can enhance industriousness by increasing productivity, efficiency, and creating new opportunities while requiring adaptation and skill development."
    },
    {
      id: "civ_u7_m4",
      question: "What role does culture play in work attitudes?",
      options: ["Culture is irrelevant", "Cultural values shape attitudes toward work", "Only individual choice matters", "Work attitudes are universal"],
      correct: "Cultural values shape attitudes toward work",
      difficulty: "Medium",
      explanation: "Cultural values significantly influence attitudes toward work, including concepts of diligence, cooperation, and the meaning of work in society."
    },
    {
      id: "civ_u7_m5",
      question: "How does industriousness relate to economic inequality?",
      options: ["No relationship", "Can both reduce and be affected by inequality", "Always increases inequality", "Always reduces inequality"],
      correct: "Can both reduce and be affected by inequality",
      difficulty: "Medium",
      explanation: "Industriousness can help reduce inequality by creating opportunities, but inequality can also affect access to opportunities for industrious work."
    },
    {
      id: "civ_u7_m6",
      question: "What is the importance of work-life balance?",
      options: ["Balance is unnecessary", "Sustainable productivity requires balance", "Only work matters", "Only life matters"],
      correct: "Sustainable productivity requires balance",
      difficulty: "Medium",
      explanation: "Work-life balance is important for sustainable productivity, mental health, and overall well-being while maintaining industriousness."
    },
    {
      id: "civ_u7_m7",
      question: "How does globalization affect work opportunities?",
      options: ["No effect on work", "Creates both opportunities and challenges", "Only creates opportunities", "Only creates problems"],
      correct: "Creates both opportunities and challenges",
      difficulty: "Medium",
      explanation: "Globalization creates new work opportunities through expanded markets while also creating challenges through increased competition and changing skill requirements."
    },
    {
      id: "civ_u7_m8",
      question: "What is the role of government in promoting industriousness?",
      options: ["No role for government", "Creating enabling environment for work", "Doing all the work", "Preventing private initiative"],
      correct: "Creating enabling environment for work",
      difficulty: "Medium",
      explanation: "Government promotes industriousness by creating enabling environments through education, infrastructure, policies, and protecting workers' rights."
    },
    {
      id: "civ_u7_m9",
      question: "How does unemployment affect social cohesion?",
      options: ["No effect on society", "Can undermine social stability", "Strengthens society", "Only affects individuals"],
      correct: "Can undermine social stability",
      difficulty: "Medium",
      explanation: "High unemployment can undermine social cohesion by creating economic hardship, reducing opportunities, and increasing social tensions."
    },
    {
      id: "civ_u7_m10",
      question: "What is the importance of vocational training?",
      options: ["Unnecessary for work", "Provides practical skills for employment", "Only academic education matters", "Reduces opportunities"],
      correct: "Provides practical skills for employment",
      difficulty: "Medium",
      explanation: "Vocational training is important for providing practical skills that match job market needs and create pathways to employment and entrepreneurship."
    },

    // Hard Questions
    {
      id: "civ_u7_h1",
      question: "Analyze the relationship between industriousness and social mobility.",
      options: ["No relationship exists", "Hard work can improve social position", "Only background determines mobility", "Mobility is random"],
      correct: "Hard work can improve social position",
      difficulty: "Hard",
      explanation: "Industriousness can contribute to social mobility by creating opportunities for advancement, though structural factors also play important roles."
    },
    {
      id: "civ_u7_h2",
      question: "How do changing economic structures affect concepts of work?",
      options: ["Work concepts never change", "Economic changes transform work meanings", "Only traditional work matters", "Structure is irrelevant"],
      correct: "Economic changes transform work meanings",
      difficulty: "Hard",
      explanation: "Changing economic structures from agricultural to industrial to service economies transform concepts of work, skills needed, and career patterns."
    },
    {
      id: "civ_u7_h3",
      question: "Evaluate the tension between automation and employment.",
      options: ["No tension exists", "Automation creates both displacement and opportunities", "Automation only destroys jobs", "Automation only creates jobs"],
      correct: "Automation creates both displacement and opportunities",
      difficulty: "Hard",
      explanation: "Automation creates tension by displacing some jobs while creating new opportunities, requiring adaptation and reskilling of the workforce."
    },
    {
      id: "civ_u7_h4",
      question: "How does the informal economy relate to industriousness?",
      options: ["Informal work isn't real work", "Informal economy demonstrates industriousness", "Only formal work matters", "Informal economy is always illegal"],
      correct: "Informal economy demonstrates industriousness",
      difficulty: "Hard",
      explanation: "The informal economy often demonstrates significant industriousness and entrepreneurship, providing livelihoods where formal opportunities are limited."
    },
    {
      id: "civ_u7_h5",
      question: "Assess the role of women's work in economic development.",
      options: ["Women's work is irrelevant", "Women's work is crucial for development", "Only men's work matters", "Gender doesn't affect work"],
      correct: "Women's work is crucial for development",
      difficulty: "Hard",
      explanation: "Women's work, both paid and unpaid, is crucial for economic development, requiring recognition and support for full economic participation."
    },
    {
      id: "civ_u7_h6",
      question: "How do environmental concerns affect industriousness?",
      options: ["Environment is irrelevant to work", "Environmental sustainability shapes future work", "Environment prevents development", "Only short-term matters"],
      correct: "Environmental sustainability shapes future work",
      difficulty: "Hard",
      explanation: "Environmental concerns are shaping industriousness by requiring sustainable practices and creating new green jobs and industries."
    },
    {
      id: "civ_u7_h7",
      question: "What is the relationship between dignity and work?",
      options: ["Work has no dignity", "Dignified work is essential for human development", "Only certain jobs have dignity", "Dignity is irrelevant"],
      correct: "Dignified work is essential for human development",
      difficulty: "Hard",
      explanation: "Dignified work that provides fair wages, safety, and respect is essential for human development and social cohesion."
    },
    {
      id: "civ_u7_h8",
      question: "How do generational differences affect work values?",
      options: ["Generations are identical", "Different generations have varying work values", "Only age matters", "Values never change"],
      correct: "Different generations have varying work values",
      difficulty: "Hard",
      explanation: "Different generations often have varying work values regarding career goals, work-life balance, and organizational loyalty, requiring adaptive management."
    },
    {
      id: "civ_u7_h9",
      question: "Analyze the impact of migration on labor markets.",
      options: ["Migration has no impact", "Migration affects both sending and receiving areas", "Migration only helps", "Migration only harms"],
      correct: "Migration affects both sending and receiving areas",
      difficulty: "Hard",
      explanation: "Migration affects labor markets in both sending and receiving areas through remittances, brain drain/gain, and changing workforce composition."
    },
    {
      id: "civ_u7_h10",
      question: "How does industriousness relate to innovation in developing countries?",
      options: ["No relationship exists", "Industriousness can drive context-appropriate innovation", "Innovation only happens in rich countries", "Hard work prevents innovation"],
      correct: "Industriousness can drive context-appropriate innovation",
      difficulty: "Hard",
      explanation: "Industriousness in developing countries often drives context-appropriate innovation and adaptation, creating solutions suited to local conditions and needs."
    }
  ],

  // Continue with remaining units following the same pattern
  "Unit 8: Self-Reliance": [
    // Easy Questions (10)
    {
      id: "civ_u8_e1",
      question: "What is self-reliance?",
      options: ["Complete isolation", "Depending on one's own abilities", "Avoiding all help", "Being selfish"],
      correct: "Depending on one's own abilities",
      difficulty: "Easy",
      explanation: "Self-reliance means depending on one's own abilities and resources while still maintaining healthy relationships and cooperation with others."
    },
    {
      id: "civ_u8_e2",
      question: "What is economic independence?",
      options: ["Being wealthy", "Not needing financial support from others", "Avoiding all economic activity", "Only saving money"],
      correct: "Not needing financial support from others",
      difficulty: "Easy",
      explanation: "Economic independence means being able to meet one's financial needs without depending on others for support."
    },
    {
      id: "civ_u8_e3",
      question: "What is self-sufficiency?",
      options: ["Never asking for help", "Ability to provide for one's own needs", "Living alone", "Avoiding society"],
      correct: "Ability to provide for one's own needs",
      difficulty: "Easy",
      explanation: "Self-sufficiency is the ability to provide for one's own needs without external assistance."
    },
    {
      id: "civ_u8_e4",
      question: "What is personal empowerment?",
      options: ["Having power over others", "Gaining control over one's own life", "Avoiding responsibility", "Following others"],
      correct: "Gaining control over one's own life",
      difficulty: "Easy",
      explanation: "Personal empowerment involves gaining control over one's own life and having the confidence to make independent decisions."
    },
    {
      id: "civ_u8_e5",
      question: "What is financial literacy?",
      options: ["Being rich", "Understanding money management", "Avoiding banks", "Only spending money"],
      correct: "Understanding money management",
      difficulty: "Easy",
      explanation: "Financial literacy is understanding how to manage money, including saving, spending, and investing wisely."
    },
    {
      id: "civ_u8_e6",
      question: "What is self-discipline?",
      options: ["Being harsh on others", "Control over one's own behavior", "Avoiding challenges", "Following rules blindly"],
      correct: "Control over one's own behavior",
      difficulty: "Easy",
      explanation: "Self-discipline is the ability to control one's own behavior and make choices that lead to positive outcomes."
    },
    {
      id: "civ_u8_e7",
      question: "What is initiative?",
      options: ["Waiting for instructions", "Taking action independently", "Avoiding responsibility", "Following others"],
      correct: "Taking action independently",
      difficulty: "Easy",
      explanation: "Initiative is the ability to take action independently and proactively to achieve goals or solve problems."
    },
    {
      id: "civ_u8_e8",
      question: "What is resourcefulness?",
      options: ["Having many resources", "Using available resources creatively", "Wasting resources", "Avoiding challenges"],
      correct: "Using available resources creatively",
      difficulty: "Easy",
      explanation: "Resourcefulness is the ability to find creative solutions and make the best use of available resources."
    },
    {
      id: "civ_u8_e9",
      question: "What is self-confidence?",
      options: ["Being arrogant", "Belief in one's own abilities", "Never making mistakes", "Avoiding challenges"],
      correct: "Belief in one's own abilities",
      difficulty: "Easy",
      explanation: "Self-confidence is having reasonable belief in one's own abilities and judgment."
    },
    {
      id: "civ_u8_e10",
      question: "What is personal responsibility?",
      options: ["Blaming others", "Taking ownership of one's actions", "Avoiding decisions", "Following others"],
      correct: "Taking ownership of one's actions",
      difficulty: "Easy",
      explanation: "Personal responsibility means taking ownership of one's actions, decisions, and their consequences."
    },

    // Medium Questions (10)
    {
      id: "civ_u8_m1",
      question: "How does self-reliance contribute to national development?",
      options: ["It hinders development", "Reduces dependency and builds capacity", "Only individual benefit", "Creates isolation"],
      correct: "Reduces dependency and builds capacity",
      difficulty: "Medium",
      explanation: "Self-reliance contributes to national development by reducing dependency on external aid and building domestic capacity and resilience."
    },
    {
      id: "civ_u8_m2",
      question: "What is the relationship between self-reliance and interdependence?",
      options: ["They are opposites", "Self-reliant people can cooperate better", "Interdependence prevents self-reliance", "They are unrelated"],
      correct: "Self-reliant people can cooperate better",
      difficulty: "Medium",
      explanation: "Self-reliance and interdependence complement each other - self-reliant individuals can engage in healthier, more equal relationships and cooperation."
    },
    {
      id: "civ_u8_m3",
      question: "How does education promote self-reliance?",
      options: ["Education creates dependency", "Provides knowledge and skills for independence", "Only practical skills matter", "Education is irrelevant"],
      correct: "Provides knowledge and skills for independence",
      difficulty: "Medium",
      explanation: "Education promotes self-reliance by providing knowledge, skills, and critical thinking abilities that enable individuals to be more independent."
    },
    {
      id: "civ_u8_m4",
      question: "What role does entrepreneurship play in self-reliance?",
      options: ["Entrepreneurship creates dependency", "Enables economic independence", "Only benefits the wealthy", "Increases risk only"],
      correct: "Enables economic independence",
      difficulty: "Medium",
      explanation: "Entrepreneurship enables self-reliance by creating opportunities for economic independence and control over one's livelihood."
    },
    {
      id: "civ_u8_m5",
      question: "How does self-reliance affect community development?",
      options: ["Weakens communities", "Strengthens communities through capable members", "Has no effect", "Creates selfish individuals"],
      correct: "Strengthens communities through capable members",
      difficulty: "Medium",
      explanation: "Self-reliant individuals strengthen communities by contributing their capabilities and reducing the burden on community resources."
    },
    {
      id: "civ_u8_m6",
      question: "What is the role of savings in self-reliance?",
      options: ["Savings are unnecessary", "Provides financial security and independence", "Only for the wealthy", "Prevents spending"],
      correct: "Provides financial security and independence",
      difficulty: "Medium",
      explanation: "Savings contribute to self-reliance by providing financial security, emergency funds, and resources for future opportunities."
    },
    {
      id: "civ_u8_m7",
      question: "How does technology affect self-reliance?",
      options: ["Technology creates dependency", "Can enhance individual capabilities", "Technology is irrelevant", "Only creates problems"],
      correct: "Can enhance individual capabilities",
      difficulty: "Medium",
      explanation: "Technology can enhance self-reliance by providing tools, information, and opportunities that increase individual capabilities and independence."
    },
    {
      id: "civ_u8_m8",
      question: "What is the importance of skill diversification for self-reliance?",
      options: ["Specialization is better", "Multiple skills increase adaptability", "Skills are not important", "One skill is sufficient"],
      correct: "Multiple skills increase adaptability",
      difficulty: "Medium",
      explanation: "Skill diversification increases self-reliance by providing multiple options for income generation and problem-solving."
    },
    {
      id: "civ_u8_m9",
      question: "How does cultural context affect concepts of self-reliance?",
      options: ["Culture is irrelevant", "Cultural values shape understanding of independence", "All cultures are the same", "Only individual choice matters"],
      correct: "Cultural values shape understanding of independence",
      difficulty: "Medium",
      explanation: "Cultural context significantly influences how societies understand and value self-reliance versus community support and interdependence."
    },
    {
      id: "civ_u8_m10",
      question: "What is the role of planning in achieving self-reliance?",
      options: ["Planning is unnecessary", "Planning helps achieve independence goals", "Only luck matters", "Planning prevents flexibility"],
      correct: "Planning helps achieve independence goals",
      difficulty: "Medium",
      explanation: "Planning is essential for self-reliance as it helps individuals set goals, identify resources needed, and develop strategies for independence."
    },

    // Hard Questions (10)
    {
      id: "civ_u8_h1",
      question: "Analyze the tension between individual self-reliance and social solidarity.",
      options: ["They cannot coexist", "Requires balancing individual and collective needs", "Self-reliance always wins", "Solidarity always wins"],
      correct: "Requires balancing individual and collective needs",
      difficulty: "Hard",
      explanation: "Societies must balance promoting individual self-reliance with maintaining social solidarity and support systems for those who need help."
    },
    {
      id: "civ_u8_h2",
      question: "How do structural inequalities affect the ability to achieve self-reliance?",
      options: ["Structure doesn't matter", "Inequalities create barriers to self-reliance", "Everyone has equal opportunities", "Only effort matters"],
      correct: "Inequalities create barriers to self-reliance",
      difficulty: "Hard",
      explanation: "Structural inequalities in education, capital access, and opportunities can create significant barriers to achieving self-reliance for certain groups."
    },
    {
      id: "civ_u8_h3",
      question: "Evaluate the relationship between self-reliance and social safety nets.",
      options: ["Safety nets prevent self-reliance", "Well-designed safety nets can promote self-reliance", "They are unrelated", "Safety nets are unnecessary"],
      correct: "Well-designed safety nets can promote self-reliance",
      difficulty: "Hard",
      explanation: "Well-designed social safety nets can actually promote self-reliance by providing security that enables people to take risks and invest in their development."
    },
    {
      id: "civ_u8_h4",
      question: "How does globalization affect national self-reliance?",
      options: ["Prevents all self-reliance", "Creates complex interdependencies", "Makes self-reliance easy", "Has no effect"],
      correct: "Creates complex interdependencies",
      difficulty: "Hard",
      explanation: "Globalization creates complex interdependencies that challenge traditional concepts of national self-reliance while creating new opportunities for development."
    },
    {
      id: "civ_u8_h5",
      question: "Assess the role of gender in achieving self-reliance.",
      options: ["Gender is irrelevant", "Gender roles and barriers affect self-reliance opportunities", "Only affects women", "Only affects men"],
      correct: "Gender roles and barriers affect self-reliance opportunities",
      difficulty: "Hard",
      explanation: "Gender roles and barriers can significantly affect opportunities for achieving self-reliance, requiring targeted approaches to ensure equal access."
    },
    {
      id: "civ_u8_h6",
      question: "How do psychological factors affect self-reliance?",
      options: ["Psychology is irrelevant", "Mental health and confidence affect capability", "Only external factors matter", "Psychology prevents success"],
      correct: "Mental health and confidence affect capability",
      difficulty: "Hard",
      explanation: "Psychological factors like mental health, self-esteem, and confidence significantly affect an individual's ability to develop and maintain self-reliance."
    },
    {
      id: "civ_u8_h7",
      question: "What is the relationship between self-reliance and innovation?",
      options: ["No relationship exists", "Self-reliance often drives innovation", "Innovation prevents self-reliance", "Only external support creates innovation"],
      correct: "Self-reliance often drives innovation",
      difficulty: "Hard",
      explanation: "The need for self-reliance often drives innovation as individuals and communities develop creative solutions to their challenges and needs."
    },
    {
      id: "civ_u8_h8",
      question: "How does environmental degradation affect self-reliance?",
      options: ["No effect on self-reliance", "Reduces available resources and opportunities", "Improves self-reliance", "Only affects agriculture"],
      correct: "Reduces available resources and opportunities",
      difficulty: "Hard",
      explanation: "Environmental degradation can undermine self-reliance by reducing available natural resources and economic opportunities, particularly affecting rural communities."
    },
    {
      id: "civ_u8_h9",
      question: "Analyze the concept of collective self-reliance.",
      options: ["Contradiction in terms", "Communities can achieve group independence", "Only individuals can be self-reliant", "Impossible to achieve"],
      correct: "Communities can achieve group independence",
      difficulty: "Hard",
      explanation: "Collective self-reliance involves communities or nations working together to reduce external dependencies while building internal capacity and cooperation."
    },
    {
      id: "civ_u8_h10",
      question: "How do technological dependencies challenge self-reliance?",
      options: ["Technology has no effect", "Creates new forms of dependency", "Eliminates all dependency", "Only helps self-reliance"],
      correct: "Creates new forms of dependency",
      difficulty: "Hard",
      explanation: "While technology can enhance capabilities, it can also create new forms of dependency on external systems, infrastructure, and expertise."
    }
  ],

  "Unit 9: Saving": [
    // Easy Questions (10)
    {
      id: "civ_u9_e1",
      question: "What is saving?",
      options: ["Spending money quickly", "Setting aside money for future use", "Borrowing money", "Wasting resources"],
      correct: "Setting aside money for future use",
      difficulty: "Easy",
      explanation: "Saving means setting aside money or resources for future use rather than spending everything immediately."
    },
    {
      id: "civ_u9_e2",
      question: "Why is saving important?",
      options: ["To show off wealth", "For financial security and emergencies", "To avoid spending", "To make others jealous"],
      correct: "For financial security and emergencies",
      difficulty: "Easy",
      explanation: "Saving is important for financial security, preparing for emergencies, and achieving future goals."
    },
    {
      id: "civ_u9_e3",
      question: "What is a budget?",
      options: ["Unlimited spending", "A plan for income and expenses", "Only for businesses", "Avoiding money management"],
      correct: "A plan for income and expenses",
      difficulty: "Easy",
      explanation: "A budget is a plan that shows how income will be allocated among different expenses and savings."
    },
    {
      id: "civ_u9_e4",
      question: "What is an emergency fund?",
      options: ["Money for vacations", "Savings for unexpected expenses", "Business investment", "Money for shopping"],
      correct: "Savings for unexpected expenses",
      difficulty: "Easy",
      explanation: "An emergency fund is money saved specifically for unexpected expenses like medical bills or job loss."
    },
    {
      id: "civ_u9_e5",
      question: "What is the difference between needs and wants?",
      options: ["They are the same", "Needs are essential, wants are desirable", "Wants are more important", "Needs don't matter"],
      correct: "Needs are essential, wants are desirable",
      difficulty: "Easy",
      explanation: "Needs are essential for survival and well-being, while wants are things we desire but can live without."
    },
    {
      id: "civ_u9_e6",
      question: "What is compound interest?",
      options: ["Simple addition", "Interest earned on interest", "Bank fees", "Government tax"],
      correct: "Interest earned on interest",
      difficulty: "Easy",
      explanation: "Compound interest is interest earned not only on the original amount saved but also on the interest previously earned."
    },
    {
      id: "civ_u9_e7",
      question: "What is a savings account?",
      options: ["Spending account", "Bank account for storing money", "Credit account", "Investment portfolio"],
      correct: "Bank account for storing money",
      difficulty: "Easy",
      explanation: "A savings account is a bank account specifically designed for storing money safely while earning some interest."
    },
    {
      id: "civ_u9_e8",
      question: "What does 'pay yourself first' mean?",
      options: ["Buy yourself gifts", "Save money before spending on other things", "Pay your salary", "Avoid paying bills"],
      correct: "Save money before spending on other things",
      difficulty: "Easy",
      explanation: "'Pay yourself first' means setting aside money for savings before paying other expenses."
    },
    {
      id: "civ_u9_e9",
      question: "What is financial planning?",
      options: ["Avoiding money decisions", "Setting and working toward financial goals", "Only for rich people", "Gambling with money"],
      correct: "Setting and working toward financial goals",
      difficulty: "Easy",
      explanation: "Financial planning involves setting financial goals and creating strategies to achieve them through saving and spending decisions."
    },
    {
      id: "civ_u9_e10",
      question: "What is delayed gratification?",
      options: ["Immediate satisfaction", "Waiting for rewards to get better outcomes", "Never enjoying anything", "Avoiding decisions"],
      correct: "Waiting for rewards to get better outcomes",
      difficulty: "Easy",
      explanation: "Delayed gratification means waiting for immediate rewards to achieve better long-term outcomes."
    },

    // Medium Questions (10)
    {
      id: "civ_u9_m1",
      question: "How does individual saving contribute to national economic development?",
      options: ["It doesn't contribute", "Provides capital for investment and growth", "Only benefits individuals", "Reduces economic activity"],
      correct: "Provides capital for investment and growth",
      difficulty: "Medium",
      explanation: "Individual saving contributes to national development by providing capital that banks can lend for investments in businesses and infrastructure."
    },
    {
      id: "civ_u9_m2",
      question: "What factors affect people's ability to save?",
      options: ["Only willpower", "Income level, expenses, and economic conditions", "Only age", "Only education"],
      correct: "Income level, expenses, and economic conditions",
      difficulty: "Medium",
      explanation: "The ability to save is affected by income level, necessary expenses, economic conditions, and access to financial services."
    },
    {
      id: "civ_u9_m3",
      question: "How do cultural attitudes affect saving behavior?",
      options: ["Culture has no effect", "Cultural values influence saving habits", "Only individual choice matters", "All cultures save the same way"],
      correct: "Cultural values influence saving habits",
      difficulty: "Medium",
      explanation: "Cultural values regarding money, future planning, and family obligations significantly influence individual and community saving behaviors."
    },
    {
      id: "civ_u9_m4",
      question: "What is the relationship between saving and investment?",
      options: ["They are unrelated", "Savings provide funds for investment", "Investment prevents saving", "Only one is needed"],
      correct: "Savings provide funds for investment",
      difficulty: "Medium",
      explanation: "Savings provide the capital needed for investment in businesses, education, and other productive activities that generate future returns."
    },
    {
      id: "civ_u9_m5",
      question: "How does inflation affect saving?",
      options: ["Inflation helps savers", "Reduces the purchasing power of saved money", "Has no effect on savings", "Only affects spending"],
      correct: "Reduces the purchasing power of saved money",
      difficulty: "Medium",
      explanation: "Inflation reduces the purchasing power of saved money over time, making it important to consider inflation when making saving decisions."
    },
    {
      id: "civ_u9_m6",
      question: "What role do financial institutions play in promoting saving?",
      options: ["No role in saving", "Provide safe storage and incentives", "Discourage saving", "Only serve the wealthy"],
      correct: "Provide safe storage and incentives",
      difficulty: "Medium",
      explanation: "Financial institutions promote saving by providing safe storage, paying interest, and offering various saving products and services."
    },
    {
      id: "civ_u9_m7",
      question: "How does access to credit affect saving behavior?",
      options: ["Credit has no effect", "Easy credit can reduce saving motivation", "Credit always increases saving", "They are unrelated"],
      correct: "Easy credit can reduce saving motivation",
      difficulty: "Medium",
      explanation: "Easy access to credit can reduce the motivation to save, as people may rely on borrowing rather than using their own saved money."
    },
    {
      id: "civ_u9_m8",
      question: "What is the importance of financial literacy for saving?",
      options: ["Literacy is irrelevant", "Helps people make better saving decisions", "Only experts need literacy", "Prevents saving"],
      correct: "Helps people make better saving decisions",
      difficulty: "Medium",
      explanation: "Financial literacy helps people understand the importance of saving, compare options, and make informed decisions about their money."
    },
    {
      id: "civ_u9_m9",
      question: "How do government policies affect national saving rates?",
      options: ["Government has no influence", "Policies can encourage or discourage saving", "Only individuals control saving", "Policies always help"],
      correct: "Policies can encourage or discourage saving",
      difficulty: "Medium",
      explanation: "Government policies regarding taxes, interest rates, and financial regulation can significantly influence national saving rates."
    },
    {
      id: "civ_u9_m10",
      question: "What is the role of education in promoting saving habits?",
      options: ["Education hinders saving", "Teaches importance and methods of saving", "Only experience matters", "Saving is instinctive"],
      correct: "Teaches importance and methods of saving",
      difficulty: "Medium",
      explanation: "Education plays a crucial role in teaching the importance of saving and providing practical skills for financial management."
    },

    // Hard Questions (10)
    {
      id: "civ_u9_h1",
      question: "Analyze the paradox of thrift in economic development.",
      options: ["Saving always helps the economy", "Excessive saving can reduce economic activity", "Saving never affects the economy", "The paradox doesn't exist"],
      correct: "Excessive saving can reduce economic activity",
      difficulty: "Hard",
      explanation: "The paradox of thrift suggests that while individual saving is beneficial, if everyone saves too much simultaneously, it can reduce demand and slow economic growth."
    },
    {
      id: "civ_u9_h2",
      question: "How do behavioral biases affect saving decisions?",
      options: ["People always save rationally", "Cognitive biases can impede saving", "Bias only helps saving", "Behavior is irrelevant"],
      correct: "Cognitive biases can impede saving",
      difficulty: "Hard",
      explanation: "Behavioral biases like present bias, mental accounting, and overconfidence can lead to suboptimal saving decisions and reduced financial security."
    },
    {
      id: "civ_u9_h3",
      question: "Evaluate the effectiveness of mandatory versus voluntary saving schemes.",
      options: ["Voluntary is always better", "Each has advantages depending on context", "Mandatory is always better", "Neither works effectively"],
      correct: "Each has advantages depending on context",
      difficulty: "Hard",
      explanation: "Both mandatory and voluntary saving schemes have advantages and disadvantages, with effectiveness depending on economic conditions, institutions, and cultural factors."
    },
    {
      id: "civ_u9_h4",
      question: "How does income inequality affect national saving patterns?",
      options: ["Inequality doesn't affect saving", "High inequality can reduce overall saving rates", "Inequality always increases saving", "Only individual income matters"],
      correct: "High inequality can reduce overall saving rates",
      difficulty: "Hard",
      explanation: "High income inequality can reduce national saving rates because lower-income groups have lower saving capacity, even though high earners may save more."
    },
    {
      id: "civ_u9_h5",
      question: "Assess the relationship between demographic changes and saving behavior.",
      options: ["Demographics don't matter", "Age structure affects saving patterns", "Only income affects saving", "Demographics only affect spending"],
      correct: "Age structure affects saving patterns",
      difficulty: "Hard",
      explanation: "Demographic changes, particularly age structure, significantly affect national saving patterns as different age groups have different saving and spending behaviors."
    },
    {
      id: "civ_u9_h6",
      question: "How do technological innovations affect traditional saving methods?",
      options: ["Technology doesn't affect saving", "Creates new opportunities and challenges", "Technology only helps saving", "Technology eliminates saving"],
      correct: "Creates new opportunities and challenges",
      difficulty: "Hard",
      explanation: "Technological innovations create new saving opportunities through digital platforms while also presenting challenges like cybersecurity and digital divides."
    },
    {
      id: "civ_u9_h7",
      question: "What is the role of social security systems in personal saving decisions?",
      options: ["Social security doesn't affect saving", "Can reduce or complement personal saving", "Always reduces saving", "Always increases saving"],
      correct: "Can reduce or complement personal saving",
      difficulty: "Hard",
      explanation: "Social security systems can either reduce personal saving by providing security or complement it by encouraging additional retirement planning."
    },
    {
      id: "civ_u9_h8",
      question: "How do environmental concerns influence saving and investment patterns?",
      options: ["Environment doesn't affect saving", "Growing influence on sustainable finance", "Environment only affects spending", "Prevents all saving"],
      correct: "Growing influence on sustainable finance",
      difficulty: "Hard",
      explanation: "Environmental concerns are increasingly influencing saving and investment patterns through sustainable finance and green investment options."
    },
    {
      id: "civ_u9_h9",
      question: "Analyze the intergenerational aspects of saving behavior.",
      options: ["Each generation saves independently", "Saving patterns transfer across generations", "Only current generation matters", "Generations don't influence each other"],
      correct: "Saving patterns transfer across generations",
      difficulty: "Hard",
      explanation: "Saving behaviors and attitudes often transfer across generations through family education, wealth transfers, and cultural transmission of financial habits."
    },
    {
      id: "civ_u9_h10",
      question: "How does globalization affect domestic saving and capital flows?",
      options: ["No effect on domestic saving", "Creates complex international capital movements", "Only helps domestic saving", "Eliminates need for saving"],
      correct: "Creates complex international capital movements",
      difficulty: "Hard",
      explanation: "Globalization creates complex relationships between domestic saving and international capital flows, affecting interest rates, investment opportunities, and financial stability."
    }
  ],

  "Unit 10: Active Community Participation": [
    // Easy Questions (10)
    {
      id: "civ_u10_e1",
      question: "What is community participation?",
      options: ["Avoiding community activities", "Active involvement in community affairs", "Only attending meetings", "Government responsibility only"],
      correct: "Active involvement in community affairs",
      difficulty: "Easy",
      explanation: "Community participation involves actively engaging in community affairs, decision-making, and activities that benefit the community."
    },
    {
      id: "civ_u10_e2",
      question: "What is civic engagement?",
      options: ["Only voting in elections", "Active participation in civic life", "Avoiding political activities", "Government work only"],
      correct: "Active participation in civic life",
      difficulty: "Easy",
      explanation: "Civic engagement involves active participation in the civic life of one's community through various forms of involvement and contribution."
    },
    {
      id: "civ_u10_e3",
      question: "What is volunteering?",
      options: ["Paid community work", "Unpaid service to help others", "Government requirement", "Only for unemployed people"],
      correct: "Unpaid service to help others",
      difficulty: "Easy",
      explanation: "Volunteering is unpaid service undertaken willingly to help others and benefit the community."
    },
    {
      id: "civ_u10_e4",
      question: "What is social capital?",
      options: ["Money in banks", "Networks and relationships in community", "Government funding", "Individual wealth"],
      correct: "Networks and relationships in community",
      difficulty: "Easy",
      explanation: "Social capital refers to the networks, relationships, and trust that exist within a community, enabling cooperation and collective action."
    },
    {
      id: "civ_u10_e5",
      question: "What is community development?",
      options: ["Government construction projects", "Collective efforts to improve community conditions", "Individual success only", "Business development only"],
      correct: "Collective efforts to improve community conditions",
      difficulty: "Easy",
      explanation: "Community development involves collective efforts by community members to improve social, economic, and environmental conditions."
    },
    {
      id: "civ_u10_e6",
      question: "What is grassroots organizing?",
      options: ["Agricultural work", "Community-level mobilization", "Government programs", "Corporate initiatives"],
      correct: "Community-level mobilization",
      difficulty: "Easy",
      explanation: "Grassroots organizing involves mobilizing community members from the ground up to address local issues and create change."
    },
    {
      id: "civ_u10_e7",
      question: "What is participatory democracy?",
      options: ["Only representatives decide", "Citizens directly involved in decision-making", "No citizen involvement", "Elite control only"],
      correct: "Citizens directly involved in decision-making",
      difficulty: "Easy",
      explanation: "Participatory democracy involves citizens being directly involved in political decision-making processes beyond just voting."
    },
    {
      id: "civ_u10_e8",
      question: "What is community organizing?",
      options: ["Organizing events only", "Building collective power for change", "Individual activism", "Government coordination"],
      correct: "Building collective power for change",
      difficulty: "Easy",
      explanation: "Community organizing involves bringing people together to build collective power and work for social and political change."
    },
    {
      id: "civ_u10_e9",
      question: "What is public consultation?",
      options: ["Private meetings", "Seeking citizen input on public matters", "Government announcements", "Expert advice only"],
      correct: "Seeking citizen input on public matters",
      difficulty: "Easy",
      explanation: "Public consultation involves seeking input and feedback from citizens on public policies and decisions that affect them."
    },
    {
      id: "civ_u10_e10",
      question: "What is collective action?",
      options: ["Individual effort", "Group effort to achieve common goals", "Government action", "Business cooperation"],
      correct: "Group effort to achieve common goals",
      difficulty: "Easy",
      explanation: "Collective action involves groups of people working together to achieve common goals that benefit the community or society."
    },

    // Medium Questions (10)
    {
      id: "civ_u10_m1",
      question: "How does community participation strengthen democracy?",
      options: ["It weakens democracy", "Increases citizen engagement and accountability", "Has no effect on democracy", "Only benefits politicians"],
      correct: "Increases citizen engagement and accountability",
      difficulty: "Medium",
      explanation: "Community participation strengthens democracy by increasing citizen engagement, promoting accountability, and ensuring that diverse voices are heard in decision-making."
    },
    {
      id: "civ_u10_m2",
      question: "What are the barriers to community participation?",
      options: ["No barriers exist", "Time, resources, and access limitations", "Only laziness", "Government prevention"],
      correct: "Time, resources, and access limitations",
      difficulty: "Medium",
      explanation: "Barriers to community participation include lack of time, financial resources, access to information, and institutional obstacles that prevent meaningful involvement."
    },
    {
      id: "civ_u10_m3",
      question: "How does technology affect community participation?",
      options: ["Technology hinders participation", "Creates new opportunities and challenges", "Has no effect", "Only benefits young people"],
      correct: "Creates new opportunities and challenges",
      difficulty: "Medium",
      explanation: "Technology creates new opportunities for community participation through digital platforms while also creating challenges like digital divides and online manipulation."
    },
    {
      id: "civ_u10_m4",
      question: "What is the role of civil society organizations in community participation?",
      options: ["No role in participation", "Facilitate and organize community involvement", "Replace government", "Only serve their members"],
      correct: "Facilitate and organize community involvement",
      difficulty: "Medium",
      explanation: "Civil society organizations play a crucial role in facilitating community participation by organizing activities, providing information, and advocating for citizen involvement."
    },
    {
      id: "civ_u10_m5",
      question: "How does education affect community participation?",
      options: ["Education hinders participation", "Increases awareness and skills for participation", "Has no effect", "Only helps elites"],
      correct: "Increases awareness and skills for participation",
      difficulty: "Medium",
      explanation: "Education increases community participation by raising awareness of issues, developing civic skills, and building confidence to engage in community affairs."
    },
    {
      id: "civ_u10_m6",
      question: "What is the importance of local knowledge in community development?",
      options: ["Local knowledge is irrelevant", "Essential for effective and sustainable solutions", "Only expert knowledge matters", "Creates confusion"],
      correct: "Essential for effective and sustainable solutions",
      difficulty: "Medium",
      explanation: "Local knowledge is essential for community development because it provides understanding of local conditions, needs, and resources necessary for effective solutions."
    },
    {
      id: "civ_u10_m7",
      question: "How do cultural factors influence community participation?",
      options: ["Culture has no influence", "Cultural values shape participation patterns", "Only individual choice matters", "Culture prevents participation"],
      correct: "Cultural values shape participation patterns",
      difficulty: "Medium",
      explanation: "Cultural factors significantly influence community participation through values about collective action, hierarchy, gender roles, and civic responsibility."
    },
    {
      id: "civ_u10_m8",
      question: "What is the relationship between community participation and social cohesion?",
      options: ["They are unrelated", "Participation builds social cohesion", "Participation divides communities", "Only government builds cohesion"],
      correct: "Participation builds social cohesion",
      difficulty: "Medium",
      explanation: "Community participation builds social cohesion by bringing people together, creating shared experiences, and fostering trust and cooperation among community members."
    },
    {
      id: "civ_u10_m9",
      question: "How does economic inequality affect community participation?",
      options: ["Inequality doesn't affect participation", "Can create barriers to equal participation", "Inequality increases participation", "Only helps the wealthy"],
      correct: "Can create barriers to equal participation",
      difficulty: "Medium",
      explanation: "Economic inequality can create barriers to community participation by limiting time, resources, and opportunities for those with lower incomes to engage actively."
    },
    {
      id: "civ_u10_m10",
      question: "What is the role of youth in community participation?",
      options: ["Youth should not participate", "Bring energy and new perspectives", "Only adults should participate", "Youth only cause problems"],
      correct: "Bring energy and new perspectives",
      difficulty: "Medium",
      explanation: "Youth play a vital role in community participation by bringing energy, new perspectives, technological skills, and fresh ideas to community initiatives."
    },

    // Hard Questions (10)
    {
      id: "civ_u10_h1",
      question: "Analyze the tension between expert knowledge and citizen participation in policy-making.",
      options: ["Only experts should decide", "Both expertise and citizen input are valuable", "Only citizens should decide", "They cannot work together"],
      correct: "Both expertise and citizen input are valuable",
      difficulty: "Hard",
      explanation: "Effective policy-making requires balancing expert knowledge with citizen participation, combining technical expertise with democratic legitimacy and local insight."
    },
    {
      id: "civ_u10_h2",
      question: "How does globalization affect local community participation?",
      options: ["No effect on local communities", "Creates both opportunities and challenges", "Only negative effects", "Eliminates local communities"],
      correct: "Creates both opportunities and challenges",
      difficulty: "Hard",
      explanation: "Globalization affects local participation by creating new networks and resources while also potentially undermining local autonomy and traditional forms of community engagement."
    },
    {
      id: "civ_u10_h3",
      question: "Evaluate the effectiveness of different models of citizen participation.",
      options: ["All models are equally effective", "Effectiveness depends on context and implementation", "Only one model works", "No model is effective"],
      correct: "Effectiveness depends on context and implementation",
      difficulty: "Hard",
      explanation: "The effectiveness of citizen participation models varies depending on political context, institutional design, cultural factors, and quality of implementation."
    },
    {
      id: "civ_u10_h4",
      question: "How do power structures affect meaningful community participation?",
      options: ["Power has no effect", "Power imbalances can limit meaningful participation", "Power always helps participation", "Only formal power matters"],
      correct: "Power imbalances can limit meaningful participation",
      difficulty: "Hard",
      explanation: "Power structures can limit meaningful community participation by creating barriers for marginalized groups and concentrating influence among elites."
    },
    {
      id: "civ_u10_h5",
      question: "Assess the relationship between community participation and sustainable development.",
      options: ["They are unrelated", "Participation is essential for sustainable development", "Development doesn't need participation", "Participation prevents development"],
      correct: "Participation is essential for sustainable development",
      difficulty: "Hard",
      explanation: "Community participation is essential for sustainable development because it ensures local ownership, incorporates local knowledge, and promotes environmentally and socially sustainable solutions."
    },
    {
      id: "civ_u10_h6",
      question: "How do institutional arrangements affect the quality of participation?",
      options: ["Institutions don't matter", "Institutional design shapes participation quality", "Only individual will matters", "Institutions prevent participation"],
      correct: "Institutional design shapes participation quality",
      difficulty: "Hard",
      explanation: "Institutional arrangements significantly affect participation quality by determining access, representation, decision-making processes, and accountability mechanisms."
    },
    {
      id: "civ_u10_h7",
      question: "What is the role of conflict in community participation processes?",
      options: ["Conflict always destroys participation", "Conflict can be constructive if managed well", "Conflict should be avoided", "Conflict has no role"],
      correct: "Conflict can be constructive if managed well",
      difficulty: "Hard",
      explanation: "Conflict in participation processes can be constructive when managed well, as it can reveal different perspectives, improve solutions, and strengthen democratic engagement."
    },
    {
      id: "civ_u10_h8",
      question: "How does the digital divide affect equitable community participation?",
      options: ["Technology doesn't affect participation", "Creates new inequalities in participation", "Only helps participation", "Eliminates all barriers"],
      correct: "Creates new inequalities in participation",
      difficulty: "Hard",
      explanation: "The digital divide creates new inequalities in community participation by limiting access to online platforms and digital tools for those without technology access or skills."
    },
    {
      id: "civ_u10_h9",
      question: "Analyze the concept of participatory governance in diverse societies.",
      options: ["Impossible in diverse societies", "Requires inclusive mechanisms for all groups", "Only works in homogeneous societies", "Diversity prevents governance"],
      correct: "Requires inclusive mechanisms for all groups",
      difficulty: "Hard",
      explanation: "Participatory governance in diverse societies requires carefully designed inclusive mechanisms that ensure all groups can participate meaningfully despite cultural, linguistic, or other differences."
    },
    {
      id: "civ_u10_h10",
      question: "How do gender dynamics affect community participation patterns?",
      options: ["Gender doesn't affect participation", "Gender roles and norms shape participation", "Only women's participation matters", "Only men's participation matters"],
      correct: "Gender roles and norms shape participation",
      difficulty: "Hard",
      explanation: "Gender dynamics significantly affect community participation through cultural norms, role expectations, and structural barriers that may limit equal participation by all genders."
    }
  ],

  "Unit 11: The Pursuit of Wisdom": [
    // Easy Questions (10)
    {
      id: "civ_u11_e1",
      question: "What is wisdom?",
      options: ["Memorizing facts", "Good judgment and understanding", "Being clever", "Having degrees"],
      correct: "Good judgment and understanding",
      difficulty: "Easy",
      explanation: "Wisdom involves having good judgment, deep understanding, and the ability to make sound decisions based on experience and knowledge."
    },
    {
      id: "civ_u11_e2",
      question: "What is the difference between knowledge and wisdom?",
      options: ["They are the same", "Knowledge is information, wisdom is applying it well", "Wisdom is useless", "Knowledge is better"],
      correct: "Knowledge is information, wisdom is applying it well",
      difficulty: "Easy",
      explanation: "Knowledge is information and facts, while wisdom is the ability to use knowledge effectively and make good judgments."
    },
    {
      id: "civ_u11_e3",
      question: "What is critical thinking?",
      options: ["Criticizing everything", "Analyzing information carefully", "Accepting all information", "Avoiding difficult questions"],
      correct: "Analyzing information carefully",
      difficulty: "Easy",
      explanation: "Critical thinking involves carefully analyzing information, evaluating evidence, and making reasoned judgments."
    },
    {
      id: "civ_u11_e4",
      question: "What is lifelong learning?",
      options: ["Only learning in school", "Continuing to learn throughout life", "Learning only when young", "Avoiding new information"],
      correct: "Continuing to learn throughout life",
      difficulty: "Easy",
      explanation: "Lifelong learning means continuing to acquire new knowledge, skills, and understanding throughout one's entire life."
    },
    {
      id: "civ_u11_e5",
      question: "What is intellectual humility?",
      options: ["Pretending to be stupid", "Recognizing the limits of one's knowledge", "Knowing everything", "Avoiding learning"],
      correct: "Recognizing the limits of one's knowledge",
      difficulty: "Easy",
      explanation: "Intellectual humility involves recognizing the limits of one's knowledge and being open to learning from others and new experiences."
    },
    {
      id: "civ_u11_e6",
      question: "What is reflection?",
      options: ["Looking in a mirror", "Thinking carefully about experiences", "Avoiding deep thought", "Quick decisions"],
      correct: "Thinking carefully about experiences",
      difficulty: "Easy",
      explanation: "Reflection involves thinking carefully about experiences, actions, and their consequences to gain insight and understanding."
    },
    {
      id: "civ_u11_e7",
      question: "What is the purpose of education?",
      options: ["Only getting jobs", "Developing human potential and understanding", "Making money", "Following rules"],
      correct: "Developing human potential and understanding",
      difficulty: "Easy",
      explanation: "Education's purpose is to develop human potential, foster understanding, and prepare people to contribute meaningfully to society."
    },
    {
      id: "civ_u11_e8",
      question: "What is open-mindedness?",
      options: ["Believing everything", "Being willing to consider new ideas", "Having no opinions", "Changing views constantly"],
      correct: "Being willing to consider new ideas",
      difficulty: "Easy",
      explanation: "Open-mindedness involves being willing to consider new ideas, perspectives, and evidence, even when they challenge existing beliefs."
    },
    {
      id: "civ_u11_e9",
      question: "What is moral reasoning?",
      options: ["Following rules blindly", "Thinking about right and wrong", "Avoiding ethical questions", "Doing whatever benefits you"],
      correct: "Thinking about right and wrong",
      difficulty: "Easy",
      explanation: "Moral reasoning involves thinking carefully about ethical issues to determine what is right and wrong in specific situations."
    },
    {
      id: "civ_u11_e10",
      question: "What is curiosity?",
      options: ["Being nosy", "Desire to learn and understand", "Avoiding questions", "Accepting everything as given"],
      correct: "Desire to learn and understand",
      difficulty: "Easy",
      explanation: "Curiosity is the desire to learn, understand, and explore new ideas and experiences."
    },

    // Medium Questions (10)
    {
      id: "civ_u11_m1",
      question: "How does the pursuit of wisdom contribute to good citizenship?",
      options: ["It doesn't help citizenship", "Enables better decision-making and civic engagement", "Only helps personal success", "Creates confusion"],
      correct: "Enables better decision-making and civic engagement",
      difficulty: "Medium",
      explanation: "The pursuit of wisdom contributes to good citizenship by developing critical thinking, moral reasoning, and judgment needed for effective civic participation."
    },
    {
      id: "civ_u11_m2",
      question: "What is the relationship between wisdom and cultural understanding?",
      options: ["Wisdom ignores culture", "Wisdom includes understanding diverse perspectives", "Culture prevents wisdom", "Only one culture has wisdom"],
      correct: "Wisdom includes understanding diverse perspectives",
      difficulty: "Medium",
      explanation: "True wisdom includes understanding and appreciating diverse cultural perspectives, recognizing that different cultures contribute valuable insights."
    },
    {
      id: "civ_u11_m3",
      question: "How does wisdom relate to ethical decision-making?",
      options: ["Wisdom is unrelated to ethics", "Wisdom guides ethical reasoning and choices", "Ethics prevents wisdom", "Only rules matter in ethics"],
      correct: "Wisdom guides ethical reasoning and choices",
      difficulty: "Medium",
      explanation: "Wisdom provides the foundation for ethical decision-making by combining knowledge, experience, and moral reasoning to make good choices."
    },
    {
      id: "civ_u11_m4",
      question: "What role does experience play in developing wisdom?",
      options: ["Experience is irrelevant", "Experience provides practical insights", "Only theoretical knowledge matters", "Experience prevents learning"],
      correct: "Experience provides practical insights",
      difficulty: "Medium",
      explanation: "Experience plays a crucial role in developing wisdom by providing practical insights and lessons that complement theoretical knowledge."
    },
    {
      id: "civ_u11_m5",
      question: "How does wisdom differ across cultures?",
      options: ["Wisdom is identical everywhere", "Different cultures emphasize different aspects", "Only Western wisdom exists", "Culture prevents wisdom"],
      correct: "Different cultures emphasize different aspects",
      difficulty: "Medium",
      explanation: "While wisdom has universal elements, different cultures emphasize different aspects and approaches to understanding and applying wisdom."
    },
    {
      id: "civ_u11_m6",
      question: "What is the importance of asking questions in the pursuit of wisdom?",
      options: ["Questions show ignorance", "Questions drive learning and understanding", "Answers are more important", "Questions waste time"],
      correct: "Questions drive learning and understanding",
      difficulty: "Medium",
      explanation: "Asking questions is essential for pursuing wisdom because it drives inquiry, challenges assumptions, and opens new avenues for learning."
    },
    {
      id: "civ_u11_m7",
      question: "How does technology affect the pursuit of wisdom?",
      options: ["Technology prevents wisdom", "Provides tools but requires discernment", "Technology equals wisdom", "Has no effect on wisdom"],
      correct: "Provides tools but requires discernment",
      difficulty: "Medium",
      explanation: "Technology provides powerful tools for accessing information and connecting with others, but pursuing wisdom requires discernment in using these tools effectively."
    },
    {
      id: "civ_u11_m8",
      question: "What is the relationship between wisdom and leadership?",
      options: ["Leaders don't need wisdom", "Wisdom enhances leadership effectiveness", "Wisdom prevents leadership", "Only power matters in leadership"],
      correct: "Wisdom enhances leadership effectiveness",
      difficulty: "Medium",
      explanation: "Wisdom enhances leadership effectiveness by providing the judgment, understanding, and moral compass needed to make good decisions and inspire others."
    },
    {
      id: "civ_u11_m9",
      question: "How does the pursuit of wisdom relate to solving social problems?",
      options: ["Wisdom doesn't help social problems", "Provides insights for addressing complex issues", "Only technical solutions matter", "Wisdom creates more problems"],
      correct: "Provides insights for addressing complex issues",
      difficulty: "Medium",
      explanation: "The pursuit of wisdom provides valuable insights for addressing complex social problems by combining multiple perspectives, ethical reasoning, and practical understanding."
    },
    {
      id: "civ_u11_m10",
      question: "What is the role of dialogue in developing wisdom?",
      options: ["Dialogue is unnecessary", "Enables learning from different perspectives", "Only individual thinking matters", "Dialogue creates confusion"],
      correct: "Enables learning from different perspectives",
      difficulty: "Medium",
      explanation: "Dialogue plays a crucial role in developing wisdom by enabling us to learn from different perspectives, test our ideas, and deepen our understanding."
    },

    // Hard Questions (10)
    {
      id: "civ_u11_h1",
      question: "Analyze the tension between traditional wisdom and modern knowledge.",
      options: ["They are incompatible", "Both contribute valuable insights", "Only modern knowledge matters", "Only traditional wisdom matters"],
      correct: "Both contribute valuable insights",
      difficulty: "Hard",
      explanation: "Traditional wisdom and modern knowledge can complement each other, with traditional wisdom offering time-tested insights and modern knowledge providing new understanding and tools."
    },
    {
      id: "civ_u11_h2",
      question: "How does the pursuit of wisdom relate to democratic governance?",
      options: ["Wisdom threatens democracy", "Informed citizens strengthen democracy", "Only experts should govern", "Democracy doesn't need wisdom"],
      correct: "Informed citizens strengthen democracy",
      difficulty: "Hard",
      explanation: "The pursuit of wisdom strengthens democratic governance by creating informed, thoughtful citizens capable of making good decisions and holding leaders accountable."
    },
    {
      id: "civ_u11_h3",
      question: "Evaluate the role of uncertainty in the pursuit of wisdom.",
      options: ["Uncertainty prevents wisdom", "Accepting uncertainty is part of wisdom", "Wisdom eliminates all uncertainty", "Uncertainty is irrelevant"],
      correct: "Accepting uncertainty is part of wisdom",
      difficulty: "Hard",
      explanation: "Accepting uncertainty is an important aspect of wisdom, as it involves recognizing the limits of knowledge while still making thoughtful decisions."
    },
    {
      id: "civ_u11_h4",
      question: "How does globalization affect the pursuit of wisdom?",
      options: ["No effect on wisdom", "Creates opportunities and challenges for learning", "Prevents local wisdom", "Only helps wealthy countries"],
      correct: "Creates opportunities and challenges for learning",
      difficulty: "Hard",
      explanation: "Globalization creates both opportunities for accessing diverse wisdom traditions and challenges in maintaining local knowledge while engaging with global perspectives."
    },
    {
      id: "civ_u11_h5",
      question: "Assess the relationship between wisdom and scientific thinking.",
      options: ["Science and wisdom are opposites", "Scientific thinking contributes to wisdom", "Science replaces wisdom", "Wisdom prevents science"],
      correct: "Scientific thinking contributes to wisdom",
      difficulty: "Hard",
      explanation: "Scientific thinking contributes to wisdom by providing methods for testing ideas, understanding evidence, and approaching problems systematically."
    },
    {
      id: "civ_u11_h6",
      question: "How do power structures affect the pursuit and application of wisdom?",
      options: ["Power doesn't affect wisdom", "Power can both help and hinder wisdom", "Power always corrupts wisdom", "Wisdom eliminates power"],
      correct: "Power can both help and hinder wisdom",
      difficulty: "Hard",
      explanation: "Power structures can provide resources for pursuing wisdom while also creating incentives to suppress or distort wisdom that challenges existing arrangements."
    },
    {
      id: "civ_u11_h7",
      question: "What is the role of wisdom in addressing intergenerational challenges?",
      options: ["Wisdom is irrelevant", "Helps balance present needs with future consequences", "Only focuses on the present", "Prevents progress"],
      correct: "Helps balance present needs with future consequences",
      difficulty: "Hard",
      explanation: "Wisdom helps address intergenerational challenges by considering long-term consequences and balancing the needs of current and future generations."
    },
    {
      id: "civ_u11_h8",
      question: "How does the commodification of knowledge affect the pursuit of wisdom?",
      options: ["No effect on wisdom", "Can distort priorities in learning", "Always helps wisdom", "Eliminates all problems"],
      correct: "Can distort priorities in learning",
      difficulty: "Hard",
      explanation: "The commodification of knowledge can distort the pursuit of wisdom by emphasizing marketable skills over deeper understanding and critical thinking."
    },
    {
      id: "civ_u11_h9",
      question: "Analyze the concept of collective wisdom in decision-making.",
      options: ["Groups cannot be wise", "Diverse groups can generate better insights", "Only individuals can be wise", "Groups always make poor decisions"],
      correct: "Diverse groups can generate better insights",
      difficulty: "Hard",
      explanation: "Collective wisdom can emerge when diverse groups combine their knowledge, perspectives, and insights to generate better understanding and solutions."
    },
    {
      id: "civ_u11_h10",
      question: "How does the pursuit of wisdom relate to addressing environmental challenges?",
      options: ["Wisdom is irrelevant to environment", "Provides holistic understanding for sustainable solutions", "Prevents environmental action", "Only technology matters"],
      correct: "Provides holistic understanding for sustainable solutions",
      difficulty: "Hard",
      explanation: "The pursuit of wisdom contributes to environmental solutions by providing holistic understanding that considers interconnections, long-term consequences, and ethical obligations to future generations."
    }
  ]
};

export const getGrade12CivicsQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10) => {
  const unitQuestions = grade12CivicsQuestions[unit] || [];
  
  const difficultyMap = {
    'easy': 'Easy',
    'medium': 'Medium', 
    'hard': 'Hard'
  };
  
  const targetDifficulty = difficultyMap[difficulty];
  const filteredQuestions = unitQuestions.filter(q => q.difficulty === targetDifficulty);
  
  // Shuffle and return requested count
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation
  }));
};


export interface CivicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  explanation: string;
}

export const grade11CivicsQuestions: { [unit: string]: CivicsQuestion[] } = {
  "Unit 1: Building a Democratic System": [
    // Easy Questions
    {
      id: "g11_civ_u1_e1",
      question: "What is democracy?",
      options: ["Rule by the military", "Government by the people", "Rule by the wealthy", "Government by religious leaders"],
      correct: "Government by the people",
      difficulty: "Easy",
      explanation: "Democracy literally means 'rule by the people' — a system where citizens participate in governance directly or through elected representatives."
    },
    {
      id: "g11_civ_u1_e2",
      question: "Which of the following is a feature of a democratic system?",
      options: ["One-party rule", "Free and fair elections", "Hereditary leadership", "Censorship of the press"],
      correct: "Free and fair elections",
      difficulty: "Easy",
      explanation: "Free and fair elections are a cornerstone of democracy, allowing citizens to choose their leaders."
    },
    {
      id: "g11_civ_u1_e3",
      question: "What does 'rule of law' mean?",
      options: ["The king makes the law", "Everyone is above the law", "Laws apply equally to all", "Only judges follow the law"],
      correct: "Laws apply equally to all",
      difficulty: "Easy",
      explanation: "Rule of law means no one is above the law and legal rules apply equally to every citizen, including government officials."
    },
    {
      id: "g11_civ_u1_e4",
      question: "What is the role of citizens in a democracy?",
      options: ["Obey without question", "Participate in governance", "Pay taxes only", "Follow the leader blindly"],
      correct: "Participate in governance",
      difficulty: "Easy",
      explanation: "In a democracy, citizens actively participate in governance through voting, civic engagement, and holding leaders accountable."
    },
    {
      id: "g11_civ_u1_e5",
      question: "Which body is responsible for making laws in Ethiopia?",
      options: ["The courts", "The House of Peoples' Representatives", "The military", "The Prime Minister alone"],
      correct: "The House of Peoples' Representatives",
      difficulty: "Easy",
      explanation: "The House of Peoples' Representatives (HPR) is the legislative body responsible for making federal laws in Ethiopia."
    },
    {
      id: "g11_civ_u1_e6",
      question: "What is political pluralism?",
      options: ["Having only one political party", "Existence of multiple political parties", "Banning opposition", "Military governance"],
      correct: "Existence of multiple political parties",
      difficulty: "Easy",
      explanation: "Political pluralism refers to the existence of multiple political parties competing for power in a democratic system."
    },
    {
      id: "g11_civ_u1_e7",
      question: "What is the main purpose of a constitution?",
      options: ["To give unlimited power to leaders", "To organize and limit government power", "To control citizens", "To declare war"],
      correct: "To organize and limit government power",
      difficulty: "Easy",
      explanation: "A constitution establishes the framework of government, defines powers, and limits governmental authority to protect citizens' rights."
    },
    {
      id: "g11_civ_u1_e8",
      question: "What does separation of powers mean?",
      options: ["All power in one branch", "Dividing government into branches", "Military controls everything", "Citizens have no power"],
      correct: "Dividing government into branches",
      difficulty: "Easy",
      explanation: "Separation of powers divides government into legislative, executive, and judicial branches to prevent concentration of power."
    },
    {
      id: "g11_civ_u1_e9",
      question: "Which of the following is an example of civic duty?",
      options: ["Tax evasion", "Voting in elections", "Ignoring laws", "Corruption"],
      correct: "Voting in elections",
      difficulty: "Easy",
      explanation: "Voting is a fundamental civic duty that allows citizens to participate in the democratic process."
    },
    {
      id: "g11_civ_u1_e10",
      question: "What is transparency in governance?",
      options: ["Hiding government actions", "Openness in government decisions", "Secret meetings", "Classified budgets"],
      correct: "Openness in government decisions",
      difficulty: "Easy",
      explanation: "Transparency means government operations and decisions are open and accessible to public scrutiny."
    },
    // Medium Questions
    {
      id: "g11_civ_u1_m1",
      question: "How does federalism support democracy in Ethiopia?",
      options: ["By centralizing all power", "By allowing regional self-governance", "By eliminating local governments", "By imposing one language"],
      correct: "By allowing regional self-governance",
      difficulty: "Medium",
      explanation: "Ethiopia's federal system allows regional states to govern themselves, respecting ethnic and cultural diversity while maintaining national unity."
    },
    {
      id: "g11_civ_u1_m2",
      question: "What is the difference between direct and representative democracy?",
      options: ["No difference exists", "In direct democracy citizens vote on issues; in representative, they elect leaders", "Direct means military rule", "Representative means one-party rule"],
      correct: "In direct democracy citizens vote on issues; in representative, they elect leaders",
      difficulty: "Medium",
      explanation: "Direct democracy involves citizens voting on laws directly, while representative democracy involves electing officials to make decisions on their behalf."
    },
    {
      id: "g11_civ_u1_m3",
      question: "Why is an independent judiciary important for democracy?",
      options: ["To support the ruling party", "To ensure impartial interpretation of laws", "To create new laws", "To collect taxes"],
      correct: "To ensure impartial interpretation of laws",
      difficulty: "Medium",
      explanation: "An independent judiciary interprets laws without political pressure, ensuring justice and protecting constitutional rights."
    },
    {
      id: "g11_civ_u1_m4",
      question: "What role does civil society play in a democracy?",
      options: ["Replacing the government", "Holding government accountable", "Controlling the military", "Issuing currency"],
      correct: "Holding government accountable",
      difficulty: "Medium",
      explanation: "Civil society organizations monitor government actions, advocate for rights, and help hold leaders accountable."
    },
    {
      id: "g11_civ_u1_m5",
      question: "What is the significance of periodic elections in a democracy?",
      options: ["They are unnecessary", "They ensure peaceful transfer of power", "They weaken governance", "They create instability"],
      correct: "They ensure peaceful transfer of power",
      difficulty: "Medium",
      explanation: "Periodic elections provide a mechanism for peaceful, orderly transition of power and keep leaders accountable to the electorate."
    },
    {
      id: "g11_civ_u1_m6",
      question: "How does checks and balances work in a democratic system?",
      options: ["One branch dominates others", "Each branch monitors and limits the others", "Citizens check each other", "The military checks the government"],
      correct: "Each branch monitors and limits the others",
      difficulty: "Medium",
      explanation: "Checks and balances ensure no single branch of government becomes too powerful by giving each branch the ability to limit the others."
    },
    {
      id: "g11_civ_u1_m7",
      question: "What is the role of opposition parties in a democracy?",
      options: ["To create chaos", "To provide alternative policies and hold the ruling party accountable", "To support the government unconditionally", "To boycott all elections"],
      correct: "To provide alternative policies and hold the ruling party accountable",
      difficulty: "Medium",
      explanation: "Opposition parties offer alternative governance ideas, scrutinize government policies, and provide checks on ruling party power."
    },
    {
      id: "g11_civ_u1_m8",
      question: "Why is freedom of the press important in a democracy?",
      options: ["To spread propaganda", "To inform citizens and hold government accountable", "To entertain only", "To support one party"],
      correct: "To inform citizens and hold government accountable",
      difficulty: "Medium",
      explanation: "A free press informs citizens about government actions, exposes corruption, and enables informed public participation in democracy."
    },
    {
      id: "g11_civ_u1_m9",
      question: "What is meant by 'majority rule with minority rights'?",
      options: ["The majority can do anything", "Decisions follow majority vote but minority rights are protected", "Minorities rule the majority", "Rights only for the majority"],
      correct: "Decisions follow majority vote but minority rights are protected",
      difficulty: "Medium",
      explanation: "Democracy follows majority decisions while ensuring fundamental rights of minorities are constitutionally protected."
    },
    {
      id: "g11_civ_u1_m10",
      question: "How does political participation strengthen democracy?",
      options: ["It doesn't affect democracy", "Active participation ensures government represents the people's will", "Only elite participation matters", "Participation weakens democracy"],
      correct: "Active participation ensures government represents the people's will",
      difficulty: "Medium",
      explanation: "When citizens actively participate through voting, advocacy, and civic engagement, government becomes more responsive and legitimate."
    },
    // Hard Questions
    {
      id: "g11_civ_u1_h1",
      question: "How does Ethiopia's ethnic federalism attempt to balance unity and diversity?",
      options: ["By eliminating ethnic identities", "By creating ethnically-based regional states with shared federal governance", "By imposing one ethnic group's dominance", "By separating ethnic groups completely"],
      correct: "By creating ethnically-based regional states with shared federal governance",
      difficulty: "Hard",
      explanation: "Ethiopia's ethnic federalism grants regional autonomy to ethnically-defined states while maintaining federal unity through shared institutions and constitution."
    },
    {
      id: "g11_civ_u1_h2",
      question: "What are the potential challenges of implementing democracy in a multi-ethnic society like Ethiopia?",
      options: ["There are no challenges", "Ethnic tensions, resource competition, and ensuring equitable representation", "Democracy works perfectly in diverse societies", "Only language barriers matter"],
      correct: "Ethnic tensions, resource competition, and ensuring equitable representation",
      difficulty: "Hard",
      explanation: "Multi-ethnic democracies face challenges of inter-ethnic competition, fair resource distribution, and ensuring all groups have meaningful political representation."
    },
    {
      id: "g11_civ_u1_h3",
      question: "Analyze the relationship between democratic consolidation and economic development.",
      options: ["They are unrelated", "Democratic institutions can promote economic growth, but poverty can undermine democratic consolidation", "Economic development prevents democracy", "Democracy always causes economic decline"],
      correct: "Democratic institutions can promote economic growth, but poverty can undermine democratic consolidation",
      difficulty: "Hard",
      explanation: "Stable democratic institutions attract investment and promote development, but extreme poverty and inequality can destabilize democratic processes."
    },
    {
      id: "g11_civ_u1_h4",
      question: "How does the concept of popular sovereignty differ from parliamentary sovereignty?",
      options: ["They are identical", "Popular sovereignty vests ultimate authority in the people; parliamentary sovereignty places it in the legislature", "Popular sovereignty means mob rule", "Parliamentary sovereignty means dictatorship"],
      correct: "Popular sovereignty vests ultimate authority in the people; parliamentary sovereignty places it in the legislature",
      difficulty: "Hard",
      explanation: "Popular sovereignty means ultimate political authority resides with the people, while parliamentary sovereignty grants supreme legal authority to the legislature."
    },
    {
      id: "g11_civ_u1_h5",
      question: "Evaluate the effectiveness of Ethiopia's bicameral legislature in representing diverse interests.",
      options: ["It has no effect", "The HPR handles legislation while the House of Federation addresses ethnic and constitutional matters", "Both houses do the same thing", "Only one house is needed"],
      correct: "The HPR handles legislation while the House of Federation addresses ethnic and constitutional matters",
      difficulty: "Hard",
      explanation: "Ethiopia's bicameral system allows the HPR to focus on lawmaking while the House of Federation resolves constitutional disputes and represents nations, nationalities, and peoples."
    },
    {
      id: "g11_civ_u1_h6",
      question: "What is the tension between national security and civil liberties in a democratic state?",
      options: ["No tension exists", "Security measures may restrict freedoms; democracies must balance both", "Security always overrides rights", "Civil liberties prevent security"],
      correct: "Security measures may restrict freedoms; democracies must balance both",
      difficulty: "Hard",
      explanation: "Democracies face the challenge of maintaining national security while protecting individual rights, requiring careful legal frameworks and oversight."
    },
    {
      id: "g11_civ_u1_h7",
      question: "How do informal institutions affect democratic governance in Ethiopia?",
      options: ["They have no impact", "Traditional governance structures can complement or conflict with formal democratic institutions", "They replace democracy entirely", "Only formal institutions matter"],
      correct: "Traditional governance structures can complement or conflict with formal democratic institutions",
      difficulty: "Hard",
      explanation: "Ethiopia's traditional conflict resolution, elder councils, and customary practices interact with formal democratic structures, sometimes supporting and sometimes challenging them."
    },
    {
      id: "g11_civ_u1_h8",
      question: "Critically assess the role of elections alone as a measure of democratic quality.",
      options: ["Elections are the only measure needed", "Elections are necessary but insufficient; democratic quality also requires rule of law, free press, and civic culture", "Elections are unnecessary", "Only economic growth measures democracy"],
      correct: "Elections are necessary but insufficient; democratic quality also requires rule of law, free press, and civic culture",
      difficulty: "Hard",
      explanation: "While elections are essential, true democracy also requires independent judiciary, free media, active civil society, protection of rights, and democratic culture."
    },
    {
      id: "g11_civ_u1_h9",
      question: "What is the concept of 'democratic deficit' and how might it apply to developing nations?",
      options: ["A budget shortfall", "A gap between democratic ideals and actual practice in governance", "Too much democracy", "A trade deficit"],
      correct: "A gap between democratic ideals and actual practice in governance",
      difficulty: "Hard",
      explanation: "Democratic deficit refers to the gap between formal democratic structures and their effective functioning, often seen in developing nations where institutions may lack capacity or independence."
    },
    {
      id: "g11_civ_u1_h10",
      question: "How does the concept of subsidiarity relate to Ethiopia's federal democratic system?",
      options: ["It doesn't apply", "Decisions should be made at the lowest competent level of government, supporting regional autonomy", "All decisions must be centralized", "Only the federal government decides"],
      correct: "Decisions should be made at the lowest competent level of government, supporting regional autonomy",
      difficulty: "Hard",
      explanation: "Subsidiarity means governance should occur at the most local level possible, aligning with Ethiopia's federal structure of empowering regional and local governments."
    }
  ],

  "Unit 2: Democratic Rights of Citizens": [
    // Easy Questions
    {
      id: "g11_civ_u2_e1",
      question: "What are human rights?",
      options: ["Privileges given by the government", "Rights earned through work", "Fundamental rights inherent to all people", "Rights only for citizens"],
      correct: "Fundamental rights inherent to all people",
      difficulty: "Easy",
      explanation: "Human rights are universal, inherent rights that belong to every person regardless of nationality, ethnicity, gender, or other status."
    },
    {
      id: "g11_civ_u2_e2",
      question: "Which document is known as the universal standard for human rights?",
      options: ["The Ethiopian Constitution", "The Universal Declaration of Human Rights", "The African Charter", "The Geneva Convention"],
      correct: "The Universal Declaration of Human Rights",
      difficulty: "Easy",
      explanation: "The UDHR, adopted by the UN in 1948, is the foundational document setting universal standards for human rights."
    },
    {
      id: "g11_civ_u2_e3",
      question: "What is the right to life?",
      options: ["Right to luxury", "Right to not be killed arbitrarily", "Right to wealth", "Right to travel"],
      correct: "Right to not be killed arbitrarily",
      difficulty: "Easy",
      explanation: "The right to life means every person has the right not to be deprived of life arbitrarily by the state or others."
    },
    {
      id: "g11_civ_u2_e4",
      question: "What is freedom of speech?",
      options: ["The right to insult others", "The right to express opinions without censorship", "The right to lie", "The right to slander"],
      correct: "The right to express opinions without censorship",
      difficulty: "Easy",
      explanation: "Freedom of speech is the right to express ideas and opinions without government censorship or punishment."
    },
    {
      id: "g11_civ_u2_e5",
      question: "What is the right to education?",
      options: ["Optional privilege", "Right of every person to access education", "Only for the wealthy", "Only for adults"],
      correct: "Right of every person to access education",
      difficulty: "Easy",
      explanation: "The right to education guarantees that every person has access to quality education, as recognized by the Ethiopian Constitution and international law."
    },
    {
      id: "g11_civ_u2_e6",
      question: "What are civil rights?",
      options: ["Military rights", "Rights related to personal freedom and equality", "Religious rights only", "Economic rights only"],
      correct: "Rights related to personal freedom and equality",
      difficulty: "Easy",
      explanation: "Civil rights protect individuals from discrimination and ensure personal freedoms such as freedom of expression, assembly, and religion."
    },
    {
      id: "g11_civ_u2_e7",
      question: "What is the right to vote called?",
      options: ["Economic right", "Suffrage", "Civil duty", "Legal obligation"],
      correct: "Suffrage",
      difficulty: "Easy",
      explanation: "Suffrage is the right to vote in political elections, a fundamental democratic right."
    },
    {
      id: "g11_civ_u2_e8",
      question: "What does equality before the law mean?",
      options: ["Rich people get better treatment", "All people are treated equally by the legal system", "Only citizens have rights", "Judges decide who has rights"],
      correct: "All people are treated equally by the legal system",
      difficulty: "Easy",
      explanation: "Equality before the law means every person receives equal treatment in the legal system regardless of their status."
    },
    {
      id: "g11_civ_u2_e9",
      question: "What is religious freedom?",
      options: ["Everyone must follow one religion", "The right to practice any religion or none", "Only traditional religions are allowed", "Religion is banned"],
      correct: "The right to practice any religion or none",
      difficulty: "Easy",
      explanation: "Religious freedom guarantees the right to practice, change, or abstain from religion without government interference."
    },
    {
      id: "g11_civ_u2_e10",
      question: "What is the right to privacy?",
      options: ["Government can monitor everything", "Protection from unreasonable interference in personal life", "Only for government officials", "No such right exists"],
      correct: "Protection from unreasonable interference in personal life",
      difficulty: "Easy",
      explanation: "The right to privacy protects individuals from arbitrary government surveillance and interference in their personal affairs."
    },
    // Medium Questions
    {
      id: "g11_civ_u2_m1",
      question: "How does the Ethiopian Constitution categorize fundamental rights?",
      options: ["It doesn't categorize them", "Into human rights and democratic rights", "Only economic rights", "Only political rights"],
      correct: "Into human rights and democratic rights",
      difficulty: "Medium",
      explanation: "The FDRE Constitution distinguishes between human rights (inherent to all persons) and democratic rights (specific to citizens in a democratic system)."
    },
    {
      id: "g11_civ_u2_m2",
      question: "What is the relationship between rights and responsibilities?",
      options: ["They are unrelated", "Rights come with corresponding duties and responsibilities", "Only responsibilities matter", "Only rights matter"],
      correct: "Rights come with corresponding duties and responsibilities",
      difficulty: "Medium",
      explanation: "In a democratic society, the exercise of rights carries corresponding responsibilities, such as respecting others' rights and obeying laws."
    },
    {
      id: "g11_civ_u2_m3",
      question: "Under what circumstances can rights be limited in Ethiopia?",
      options: ["Never", "When prescribed by law for legitimate purposes like national security", "Whenever the government wants", "Only during elections"],
      correct: "When prescribed by law for legitimate purposes like national security",
      difficulty: "Medium",
      explanation: "Rights may be limited only when prescribed by law and necessary for purposes such as public safety, national security, or protecting others' rights."
    },
    {
      id: "g11_civ_u2_m4",
      question: "What are economic, social, and cultural rights?",
      options: ["Only about money", "Rights to adequate living standards, education, health, and cultural participation", "Rights for the elite", "Optional government programs"],
      correct: "Rights to adequate living standards, education, health, and cultural participation",
      difficulty: "Medium",
      explanation: "ESC rights include rights to work, education, health, housing, and cultural life, requiring governments to progressively realize them."
    },
    {
      id: "g11_civ_u2_m5",
      question: "How does the African Charter on Human and Peoples' Rights differ from the UDHR?",
      options: ["They are identical", "The African Charter emphasizes peoples' rights and duties alongside individual rights", "The African Charter only covers economic rights", "The UDHR is for Africa only"],
      correct: "The African Charter emphasizes peoples' rights and duties alongside individual rights",
      difficulty: "Medium",
      explanation: "The African Charter uniquely includes collective (peoples') rights and individual duties to community, family, and state alongside individual rights."
    },
    {
      id: "g11_civ_u2_m6",
      question: "What is due process of law?",
      options: ["Speedy conviction", "Legal procedures that protect individual rights during legal proceedings", "Skipping trials", "Military tribunals"],
      correct: "Legal procedures that protect individual rights during legal proceedings",
      difficulty: "Medium",
      explanation: "Due process ensures fair legal procedures are followed, including the right to a fair trial, legal representation, and presumption of innocence."
    },
    {
      id: "g11_civ_u2_m7",
      question: "What is the role of the Ethiopian Human Rights Commission?",
      options: ["To make laws", "To investigate human rights violations and promote rights awareness", "To punish criminals", "To collect taxes"],
      correct: "To investigate human rights violations and promote rights awareness",
      difficulty: "Medium",
      explanation: "The EHRC investigates complaints of human rights violations, monitors conditions, and promotes human rights education and awareness."
    },
    {
      id: "g11_civ_u2_m8",
      question: "What is the difference between negative and positive rights?",
      options: ["Negative rights are bad", "Negative rights require non-interference; positive rights require action", "They are the same", "Positive rights are better"],
      correct: "Negative rights require non-interference; positive rights require action",
      difficulty: "Medium",
      explanation: "Negative rights (e.g., freedom from torture) require the state to refrain from action, while positive rights (e.g., right to education) require the state to provide services."
    },
    {
      id: "g11_civ_u2_m9",
      question: "How does the right to assembly function in a democracy?",
      options: ["People can gather anytime anywhere", "Citizens can peacefully assemble to express views, subject to reasonable regulations", "Assembly is always prohibited", "Only government supporters can assemble"],
      correct: "Citizens can peacefully assemble to express views, subject to reasonable regulations",
      difficulty: "Medium",
      explanation: "The right to peaceful assembly allows citizens to gather for protests, meetings, and demonstrations, subject to reasonable time, place, and manner restrictions."
    },
    {
      id: "g11_civ_u2_m10",
      question: "What is habeas corpus?",
      options: ["A type of punishment", "The right to be brought before a court to determine if detention is lawful", "A criminal charge", "A legal document"],
      correct: "The right to be brought before a court to determine if detention is lawful",
      difficulty: "Medium",
      explanation: "Habeas corpus protects against unlawful detention by requiring authorities to bring a detained person before a court to justify their imprisonment."
    },
    // Hard Questions
    {
      id: "g11_civ_u2_h1",
      question: "How do international human rights treaties interact with Ethiopian domestic law?",
      options: ["They don't interact", "International treaties ratified by Ethiopia form part of the law of the land", "Domestic law always overrides treaties", "Treaties replace the constitution"],
      correct: "International treaties ratified by Ethiopia form part of the law of the land",
      difficulty: "Hard",
      explanation: "Article 9(4) of the FDRE Constitution states that international agreements ratified by Ethiopia are an integral part of the law of the land."
    },
    {
      id: "g11_civ_u2_h2",
      question: "Analyze the tension between cultural relativism and universal human rights.",
      options: ["No tension exists", "Some cultural practices may conflict with universal rights standards, requiring careful balancing", "Culture always overrides rights", "Universal rights eliminate culture"],
      correct: "Some cultural practices may conflict with universal rights standards, requiring careful balancing",
      difficulty: "Hard",
      explanation: "Cultural relativism argues rights are context-dependent, while universalism holds certain rights apply everywhere, creating tension when cultural practices violate international standards."
    },
    {
      id: "g11_civ_u2_h3",
      question: "What are the challenges of enforcing socioeconomic rights in developing countries?",
      options: ["No challenges exist", "Limited resources, institutional capacity, and competing priorities make progressive realization difficult", "Developing countries don't have these rights", "Only wealthy nations face challenges"],
      correct: "Limited resources, institutional capacity, and competing priorities make progressive realization difficult",
      difficulty: "Hard",
      explanation: "Developing countries face resource constraints, weak institutions, and competing development priorities that make full realization of socioeconomic rights challenging."
    },
    {
      id: "g11_civ_u2_h4",
      question: "How does the principle of non-derogable rights apply during states of emergency?",
      options: ["All rights can be suspended", "Certain fundamental rights cannot be suspended even during emergencies", "Emergencies eliminate all rights", "Non-derogable rights don't exist"],
      correct: "Certain fundamental rights cannot be suspended even during emergencies",
      difficulty: "Hard",
      explanation: "Non-derogable rights such as the right to life, prohibition of torture, and freedom from slavery cannot be suspended even during declared states of emergency."
    },
    {
      id: "g11_civ_u2_h5",
      question: "Evaluate the effectiveness of international human rights mechanisms in protecting rights in Africa.",
      options: ["They are perfectly effective", "Mechanisms exist but face challenges of enforcement, political will, and resource limitations", "They are completely ineffective", "Africa has no mechanisms"],
      correct: "Mechanisms exist but face challenges of enforcement, political will, and resource limitations",
      difficulty: "Hard",
      explanation: "African human rights mechanisms including the African Commission and Court exist but face challenges of limited enforcement power, state cooperation, and resource constraints."
    },
    {
      id: "g11_civ_u2_h6",
      question: "How does the concept of 'margin of appreciation' affect human rights implementation?",
      options: ["It has no effect", "It allows states discretion in implementing rights based on local conditions", "It eliminates rights entirely", "It applies only in Europe"],
      correct: "It allows states discretion in implementing rights based on local conditions",
      difficulty: "Hard",
      explanation: "The margin of appreciation doctrine gives states some latitude in implementing human rights obligations, recognizing that cultural and social contexts may require different approaches."
    },
    {
      id: "g11_civ_u2_h7",
      question: "What is the relationship between transitional justice and human rights?",
      options: ["They are unrelated", "Transitional justice addresses past human rights violations during political transitions", "Transitional justice prevents human rights", "Only applies to wealthy nations"],
      correct: "Transitional justice addresses past human rights violations during political transitions",
      difficulty: "Hard",
      explanation: "Transitional justice mechanisms like truth commissions and reparations address past human rights abuses to promote reconciliation and prevent recurrence."
    },
    {
      id: "g11_civ_u2_h8",
      question: "How do group rights and individual rights sometimes conflict?",
      options: ["They never conflict", "Collective rights of a group may restrict individual members' freedoms", "Individual rights always prevail", "Group rights don't exist"],
      correct: "Collective rights of a group may restrict individual members' freedoms",
      difficulty: "Hard",
      explanation: "Tensions arise when group rights (e.g., cultural practices) limit individual freedoms (e.g., gender equality), requiring careful balancing by courts and legislators."
    },
    {
      id: "g11_civ_u2_h9",
      question: "Critically assess the right to self-determination as enshrined in the Ethiopian Constitution.",
      options: ["It's purely symbolic", "It grants nations and nationalities the right to self-governance including secession, raising sovereignty questions", "It only applies to one region", "It has been removed"],
      correct: "It grants nations and nationalities the right to self-governance including secession, raising sovereignty questions",
      difficulty: "Hard",
      explanation: "Article 39 grants nations, nationalities, and peoples the right to self-determination including secession, making Ethiopia unique and raising debates about sovereignty and unity."
    },
    {
      id: "g11_civ_u2_h10",
      question: "How does digital technology create new challenges for protecting privacy rights?",
      options: ["Technology has no impact on privacy", "Digital surveillance, data collection, and social media create new threats requiring updated legal frameworks", "Privacy is no longer relevant", "Only hackers threaten privacy"],
      correct: "Digital surveillance, data collection, and social media create new threats requiring updated legal frameworks",
      difficulty: "Hard",
      explanation: "Technological advances enable mass surveillance, data mining, and digital tracking, challenging traditional privacy protections and requiring new legal and regulatory responses."
    }
  ],

  "Unit 3: Nations, Nationalities and Peoples of Ethiopia": [
    // Easy Questions
    {
      id: "g11_civ_u3_e1",
      question: "What does 'nations, nationalities, and peoples' refer to in the Ethiopian context?",
      options: ["Foreign countries", "Ethnic and cultural groups within Ethiopia", "Political parties", "Government departments"],
      correct: "Ethnic and cultural groups within Ethiopia",
      difficulty: "Easy",
      explanation: "In Ethiopia, 'nations, nationalities, and peoples' refers to the diverse ethnic and cultural communities that make up the country."
    },
    {
      id: "g11_civ_u3_e2",
      question: "How many ethnic groups are approximately recognized in Ethiopia?",
      options: ["About 10", "About 80", "About 200", "About 5"],
      correct: "About 80",
      difficulty: "Easy",
      explanation: "Ethiopia recognizes approximately 80 different ethnic groups, making it one of the most ethnically diverse countries in Africa."
    },
    {
      id: "g11_civ_u3_e3",
      question: "What is cultural diversity?",
      options: ["Everyone being the same", "The existence of different cultures and traditions", "Having one national culture", "Eliminating traditions"],
      correct: "The existence of different cultures and traditions",
      difficulty: "Easy",
      explanation: "Cultural diversity refers to the variety of cultural groups and their traditions, languages, beliefs, and practices within a society."
    },
    {
      id: "g11_civ_u3_e4",
      question: "What is the working language of the Ethiopian federal government?",
      options: ["English", "Amharic", "Oromo", "Tigrinya"],
      correct: "Amharic",
      difficulty: "Easy",
      explanation: "Amharic serves as the working language of the Ethiopian federal government, though regional states may use their own languages."
    },
    {
      id: "g11_civ_u3_e5",
      question: "What is multiculturalism?",
      options: ["Rejecting other cultures", "Recognizing and respecting cultural diversity", "Having only one culture", "Cultural isolation"],
      correct: "Recognizing and respecting cultural diversity",
      difficulty: "Easy",
      explanation: "Multiculturalism is the policy of recognizing, respecting, and celebrating cultural diversity within a society."
    },
    {
      id: "g11_civ_u3_e6",
      question: "What is the largest ethnic group in Ethiopia?",
      options: ["Amhara", "Oromo", "Tigray", "Somali"],
      correct: "Oromo",
      difficulty: "Easy",
      explanation: "The Oromo are the largest ethnic group in Ethiopia, comprising approximately 34% of the population."
    },
    {
      id: "g11_civ_u3_e7",
      question: "What is ethnic identity?",
      options: ["A political party membership", "A sense of belonging to a particular ethnic group", "A government classification", "A passport requirement"],
      correct: "A sense of belonging to a particular ethnic group",
      difficulty: "Easy",
      explanation: "Ethnic identity is an individual's identification with and sense of belonging to a particular ethnic group based on shared culture, language, or ancestry."
    },
    {
      id: "g11_civ_u3_e8",
      question: "What does 'unity in diversity' mean?",
      options: ["Everyone must be the same", "Different groups coming together while maintaining their identities", "Eliminating differences", "Only one group matters"],
      correct: "Different groups coming together while maintaining their identities",
      difficulty: "Easy",
      explanation: "'Unity in diversity' means maintaining national cohesion while respecting and preserving the distinct identities of various cultural groups."
    },
    {
      id: "g11_civ_u3_e9",
      question: "What is a nation's right to use its own language?",
      options: ["Not recognized in Ethiopia", "A constitutional right for all nations and nationalities", "Only for the majority", "A privilege, not a right"],
      correct: "A constitutional right for all nations and nationalities",
      difficulty: "Easy",
      explanation: "The Ethiopian Constitution guarantees every nation, nationality, and people the right to develop and use their own language."
    },
    {
      id: "g11_civ_u3_e10",
      question: "What is inter-ethnic tolerance?",
      options: ["Ignoring other ethnic groups", "Accepting and respecting people of different ethnic backgrounds", "Forced assimilation", "Ethnic segregation"],
      correct: "Accepting and respecting people of different ethnic backgrounds",
      difficulty: "Easy",
      explanation: "Inter-ethnic tolerance involves accepting, respecting, and peacefully coexisting with people from different ethnic backgrounds."
    },
    // Medium Questions
    {
      id: "g11_civ_u3_m1",
      question: "How does the Ethiopian Constitution protect the rights of nations, nationalities, and peoples?",
      options: ["It doesn't protect them", "Through Article 39 guaranteeing self-determination, language, and cultural rights", "Only through economic provisions", "Through military protection only"],
      correct: "Through Article 39 guaranteeing self-determination, language, and cultural rights",
      difficulty: "Medium",
      explanation: "Article 39 of the FDRE Constitution grants nations, nationalities, and peoples rights to self-determination, language use, cultural expression, and equitable representation."
    },
    {
      id: "g11_civ_u3_m2",
      question: "What is the purpose of the House of Federation in representing Ethiopia's diverse groups?",
      options: ["To make ordinary laws", "To represent nations, nationalities, and peoples and interpret the constitution", "To collect taxes", "To command the military"],
      correct: "To represent nations, nationalities, and peoples and interpret the constitution",
      difficulty: "Medium",
      explanation: "The House of Federation represents all nations, nationalities, and peoples, interprets the constitution, and determines federal subsidy allocations."
    },
    {
      id: "g11_civ_u3_m3",
      question: "How does language policy affect national unity in Ethiopia?",
      options: ["Language has no effect", "Language policy must balance promoting a common language with protecting minority language rights", "Only one language should be used", "Languages divide people permanently"],
      correct: "Language policy must balance promoting a common language with protecting minority language rights",
      difficulty: "Medium",
      explanation: "Ethiopia's language policy must balance the need for a common working language with the constitutional right of each group to develop and use its own language."
    },
    {
      id: "g11_civ_u3_m4",
      question: "What role does cultural heritage play in national identity formation?",
      options: ["No role at all", "Shared cultural heritage creates common bonds while distinct heritages maintain group identities", "Only ancient heritage matters", "Cultural heritage is irrelevant to identity"],
      correct: "Shared cultural heritage creates common bonds while distinct heritages maintain group identities",
      difficulty: "Medium",
      explanation: "Cultural heritage contributes to both national identity through shared elements (e.g., coffee ceremony) and group identity through distinct traditions."
    },
    {
      id: "g11_civ_u3_m5",
      question: "What is the significance of Nations, Nationalities, and Peoples' Day in Ethiopia?",
      options: ["A regular holiday", "A day celebrating Ethiopia's ethnic and cultural diversity and unity", "Only for one ethnic group", "A government work day"],
      correct: "A day celebrating Ethiopia's ethnic and cultural diversity and unity",
      difficulty: "Medium",
      explanation: "This national holiday celebrates Ethiopia's diverse ethnic groups, promotes inter-cultural understanding, and affirms the constitutional recognition of all peoples."
    },
    {
      id: "g11_civ_u3_m6",
      question: "How does ethnic federalism differ from geographic federalism?",
      options: ["No difference", "Ethnic federalism organizes states by ethnicity while geographic federalism uses territorial boundaries", "Geographic federalism uses ethnicity", "Ethnic federalism uses geography"],
      correct: "Ethnic federalism organizes states by ethnicity while geographic federalism uses territorial boundaries",
      difficulty: "Medium",
      explanation: "Ethiopia's ethnic federalism creates regional states based on ethnic settlement patterns, unlike geographic federalism which divides territory without ethnic considerations."
    },
    {
      id: "g11_civ_u3_m7",
      question: "What challenges do minority ethnic groups face within regional states?",
      options: ["No challenges", "Potential marginalization in representation, language use, and resource access", "They have more rights than the majority", "They control all resources"],
      correct: "Potential marginalization in representation, language use, and resource access",
      difficulty: "Medium",
      explanation: "Minorities within ethnically-defined regions may face challenges in political representation, using their own language in education, and accessing equitable resources."
    },
    {
      id: "g11_civ_u3_m8",
      question: "How do inter-ethnic marriages contribute to social cohesion?",
      options: ["They create conflict", "They build bridges between communities and promote understanding", "They weaken ethnic identity", "They have no social effect"],
      correct: "They build bridges between communities and promote understanding",
      difficulty: "Medium",
      explanation: "Inter-ethnic marriages create family bonds across ethnic lines, fostering mutual understanding, tolerance, and social cohesion between different communities."
    },
    {
      id: "g11_civ_u3_m9",
      question: "What is the concept of equitable representation?",
      options: ["Only majority representation", "Fair inclusion of all groups in governance proportional to their population", "Excluding minorities", "Random selection"],
      correct: "Fair inclusion of all groups in governance proportional to their population",
      difficulty: "Medium",
      explanation: "Equitable representation ensures all nations, nationalities, and peoples are fairly included in government institutions, reflecting the country's diversity."
    },
    {
      id: "g11_civ_u3_m10",
      question: "What is assimilation policy and why is it rejected in Ethiopia's system?",
      options: ["A welcome policy", "Forcing minorities to adopt the dominant culture, rejected because Ethiopia values diversity", "An economic policy", "A trade agreement"],
      correct: "Forcing minorities to adopt the dominant culture, rejected because Ethiopia values diversity",
      difficulty: "Medium",
      explanation: "Assimilation forces minority groups to abandon their identity and adopt the dominant culture. Ethiopia's constitution rejects this by guaranteeing cultural and linguistic rights."
    },
    // Hard Questions
    {
      id: "g11_civ_u3_h1",
      question: "Evaluate the strengths and weaknesses of Ethiopia's ethnic federal model for managing diversity.",
      options: ["It has only strengths", "It empowers ethnic groups but risks ethnic polarization and territorial conflicts", "It has only weaknesses", "It is irrelevant to diversity management"],
      correct: "It empowers ethnic groups but risks ethnic polarization and territorial conflicts",
      difficulty: "Hard",
      explanation: "Ethnic federalism grants self-governance rights but can deepen ethnic divisions, create boundary disputes, and marginalize minorities within ethnically-defined regions."
    },
    {
      id: "g11_civ_u3_h2",
      question: "How do competing narratives of Ethiopian history affect inter-ethnic relations?",
      options: ["History has no effect", "Different groups' interpretations of historical events can fuel grievances or promote understanding", "Only one narrative exists", "History is irrelevant today"],
      correct: "Different groups' interpretations of historical events can fuel grievances or promote understanding",
      difficulty: "Hard",
      explanation: "Competing historical narratives about state formation, conquest, and resistance shape ethnic group perceptions and can either fuel conflict or, when reconciled, promote understanding."
    },
    {
      id: "g11_civ_u3_h3",
      question: "What is the relationship between ethnic identity and citizenship in Ethiopia's constitutional framework?",
      options: ["They are identical", "Ethiopian citizenship is universal but ethnic identity determines regional belonging and certain group rights", "Citizenship overrides ethnicity completely", "Only ethnicity matters"],
      correct: "Ethiopian citizenship is universal but ethnic identity determines regional belonging and certain group rights",
      difficulty: "Hard",
      explanation: "While Ethiopian citizenship grants universal rights, ethnic identity determines regional state membership, language of education, and access to certain group-specific rights."
    },
    {
      id: "g11_civ_u3_h4",
      question: "Analyze the challenges of creating a shared national identity in a diverse federation.",
      options: ["No challenges exist", "Balancing inclusive national symbols, narratives, and institutions while respecting diverse identities", "National identity is unnecessary", "Only ethnic identity matters"],
      correct: "Balancing inclusive national symbols, narratives, and institutions while respecting diverse identities",
      difficulty: "Hard",
      explanation: "Creating shared national identity requires inclusive symbols, equitable institutions, and narratives that all groups can relate to without erasing ethnic identities."
    },
    {
      id: "g11_civ_u3_h5",
      question: "How does urbanization affect ethnic relations in Ethiopia?",
      options: ["No effect", "Cities become multi-ethnic spaces that can promote integration or competition depending on governance", "Urbanization eliminates ethnicity", "Cities are mono-ethnic"],
      correct: "Cities become multi-ethnic spaces that can promote integration or competition depending on governance",
      difficulty: "Hard",
      explanation: "Urban areas bring diverse ethnic groups together, potentially fostering integration and shared identity, but also creating competition for resources and opportunities."
    },
    {
      id: "g11_civ_u3_h6",
      question: "What is the impact of internal displacement on nations, nationalities, and peoples' rights?",
      options: ["No impact", "Displacement disrupts ethnic communities, creates minority populations in new areas, and challenges federal structure", "Displacement strengthens rights", "Only economic impacts matter"],
      correct: "Displacement disrupts ethnic communities, creates minority populations in new areas, and challenges federal structure",
      difficulty: "Hard",
      explanation: "Internal displacement due to conflict or development disrupts ethnic communities, creates new minority populations, and challenges the ethnic basis of federal organization."
    },
    {
      id: "g11_civ_u3_h7",
      question: "Compare Ethiopia's approach to managing diversity with another African country's approach.",
      options: ["All African countries use the same approach", "Countries like South Africa use non-ethnic federalism while Ethiopia uses ethnic federalism, each with distinct advantages", "No other country manages diversity", "Africa has no diversity"],
      correct: "Countries like South Africa use non-ethnic federalism while Ethiopia uses ethnic federalism, each with distinct advantages",
      difficulty: "Hard",
      explanation: "South Africa's non-racial federalism contrasts with Ethiopia's ethnic model; each addresses diversity differently with distinct strengths and challenges."
    },
    {
      id: "g11_civ_u3_h8",
      question: "How does the concept of 'homeland politics' affect democratic governance in Ethiopia?",
      options: ["It has no effect", "Linking ethnic groups to specific territories can create exclusionary tendencies and complicate governance of mixed areas", "It always strengthens democracy", "Homeland politics don't exist in Ethiopia"],
      correct: "Linking ethnic groups to specific territories can create exclusionary tendencies and complicate governance of mixed areas",
      difficulty: "Hard",
      explanation: "Homeland politics, where ethnic groups claim territorial ownership, can marginalize non-indigenous residents, create boundary disputes, and challenge democratic inclusivity."
    },
    {
      id: "g11_civ_u3_h9",
      question: "What role should education play in promoting inter-ethnic harmony in Ethiopia?",
      options: ["Education is irrelevant", "Education should develop inclusive curricula, promote multilingualism, and teach shared values alongside diverse histories", "Only teach one perspective", "Education should ignore ethnicity"],
      correct: "Education should develop inclusive curricula, promote multilingualism, and teach shared values alongside diverse histories",
      difficulty: "Hard",
      explanation: "Education can promote inter-ethnic harmony through inclusive curricula, exchange programs, multilingual education, and teaching shared values and mutual respect."
    },
    {
      id: "g11_civ_u3_h10",
      question: "Critically examine how globalization impacts ethnic identities in Ethiopia.",
      options: ["Globalization has no impact", "Globalization can both threaten traditional identities through cultural homogenization and strengthen them through diaspora connections", "Globalization eliminates ethnicity", "Only positive impacts exist"],
      correct: "Globalization can both threaten traditional identities through cultural homogenization and strengthen them through diaspora connections",
      difficulty: "Hard",
      explanation: "Globalization introduces dominant cultural influences that may erode local identities, while simultaneously enabling diaspora communities to maintain and revive ethnic identities."
    }
  ],

  "Unit 4: Constitutionalism and the Ethiopian Constitution": [
    // Easy
    {
      id: "g11_civ_u4_e1",
      question: "What is constitutionalism?",
      options: ["Rule without limits", "Government limited by a constitution", "Military rule", "Absolute monarchy"],
      correct: "Government limited by a constitution",
      difficulty: "Easy",
      explanation: "Constitutionalism is the principle that government authority is derived from and limited by a body of fundamental law (constitution)."
    },
    {
      id: "g11_civ_u4_e2",
      question: "When was the current Ethiopian Constitution (FDRE) adopted?",
      options: ["1987", "1991", "1995", "2000"],
      correct: "1995",
      difficulty: "Easy",
      explanation: "The Constitution of the Federal Democratic Republic of Ethiopia was adopted in 1995."
    },
    {
      id: "g11_civ_u4_e3",
      question: "What does FDRE stand for?",
      options: ["Federal Democratic Republic of Ethiopia", "First Democratic Republic of Ethiopia", "Federal Department of Regional Education", "Free Democratic Rights of Ethiopia"],
      correct: "Federal Democratic Republic of Ethiopia",
      difficulty: "Easy",
      explanation: "FDRE stands for the Federal Democratic Republic of Ethiopia, the official name of the country under the 1995 Constitution."
    },
    {
      id: "g11_civ_u4_e4",
      question: "What is the supreme law of Ethiopia?",
      options: ["Criminal code", "The Constitution", "Presidential decree", "Traditional law"],
      correct: "The Constitution",
      difficulty: "Easy",
      explanation: "The Constitution is the supreme law of the land; all laws, practices, and decisions must conform to it."
    },
    {
      id: "g11_civ_u4_e5",
      question: "How many regional states does Ethiopia currently have?",
      options: ["9", "10", "11", "12"],
      correct: "12",
      difficulty: "Easy",
      explanation: "Ethiopia currently has 12 regional states following constitutional amendments and the establishment of new regions."
    },
    {
      id: "g11_civ_u4_e6",
      question: "What is a written constitution?",
      options: ["Unwritten rules", "A formal document outlining government structure and rights", "Oral traditions", "Military orders"],
      correct: "A formal document outlining government structure and rights",
      difficulty: "Easy",
      explanation: "A written constitution is a single, formal document that codifies the fundamental laws, government structure, and citizens' rights."
    },
    {
      id: "g11_civ_u4_e7",
      question: "Who has the power to interpret the constitution in Ethiopia?",
      options: ["The courts", "The House of Federation", "The Prime Minister", "The military"],
      correct: "The House of Federation",
      difficulty: "Easy",
      explanation: "In Ethiopia, constitutional interpretation is the power of the House of Federation, advised by the Council of Constitutional Inquiry."
    },
    {
      id: "g11_civ_u4_e8",
      question: "What is sovereignty?",
      options: ["Foreign control", "Supreme authority of a state over its territory", "Economic wealth", "Military strength"],
      correct: "Supreme authority of a state over its territory",
      difficulty: "Easy",
      explanation: "Sovereignty is the supreme, independent authority of a state to govern itself without external interference."
    },
    {
      id: "g11_civ_u4_e9",
      question: "What does the preamble of a constitution state?",
      options: ["Tax rates", "The fundamental purposes, values, and principles of the constitution", "Criminal penalties", "Trade agreements"],
      correct: "The fundamental purposes, values, and principles of the constitution",
      difficulty: "Easy",
      explanation: "The preamble introduces the constitution's guiding principles, aspirations, and the authority under which it is established."
    },
    {
      id: "g11_civ_u4_e10",
      question: "What is constitutional amendment?",
      options: ["Ignoring the constitution", "A formal change to the constitution through a specified process", "Rewriting laws daily", "Executive orders"],
      correct: "A formal change to the constitution through a specified process",
      difficulty: "Easy",
      explanation: "Constitutional amendment is the formal process of modifying the constitution, typically requiring supermajority approval."
    },
    // Medium
    {
      id: "g11_civ_u4_m1",
      question: "How does the Ethiopian Constitution balance federal and regional powers?",
      options: ["All power is federal", "It enumerates federal powers and reserves residual powers to regional states", "Regions have no power", "Power is shared equally in all areas"],
      correct: "It enumerates federal powers and reserves residual powers to regional states",
      difficulty: "Medium",
      explanation: "The Constitution lists specific federal government powers while reserving all unspecified (residual) powers to the regional states."
    },
    {
      id: "g11_civ_u4_m2",
      question: "What is the role of the Council of Constitutional Inquiry?",
      options: ["To make laws", "To investigate constitutional disputes and advise the House of Federation", "To elect the President", "To command the military"],
      correct: "To investigate constitutional disputes and advise the House of Federation",
      difficulty: "Medium",
      explanation: "The CCI examines constitutional disputes and submits recommendations to the House of Federation for final constitutional interpretation."
    },
    {
      id: "g11_civ_u4_m3",
      question: "What is the difference between rigid and flexible constitutions?",
      options: ["No difference", "Rigid constitutions require special procedures to amend; flexible ones use ordinary legislation", "Rigid means unwritten", "Flexible means no amendments allowed"],
      correct: "Rigid constitutions require special procedures to amend; flexible ones use ordinary legislation",
      difficulty: "Medium",
      explanation: "Rigid constitutions need supermajorities or special processes for amendment, while flexible constitutions can be changed through regular legislative procedures."
    },
    {
      id: "g11_civ_u4_m4",
      question: "How does the FDRE Constitution address the relationship between state and religion?",
      options: ["It establishes a state religion", "It separates state and religion, prohibiting state interference in religion and vice versa", "Religion controls the state", "It bans all religions"],
      correct: "It separates state and religion, prohibiting state interference in religion and vice versa",
      difficulty: "Medium",
      explanation: "Article 11 establishes separation of state and religion, ensuring the state doesn't interfere with religion and religious organizations don't interfere in state affairs."
    },
    {
      id: "g11_civ_u4_m5",
      question: "What constitutional mechanisms exist for resolving disputes between regional states?",
      options: ["Military intervention", "The House of Federation mediates and the Constitution provides legal frameworks", "No mechanisms exist", "Citizens vote on disputes"],
      correct: "The House of Federation mediates and the Constitution provides legal frameworks",
      difficulty: "Medium",
      explanation: "The House of Federation handles inter-state disputes, boundary issues, and constitutional matters affecting regional states."
    },
    {
      id: "g11_civ_u4_m6",
      question: "What is the significance of Article 9 of the FDRE Constitution?",
      options: ["It's about taxation", "It establishes the supremacy of the Constitution and the sovereignty of the people", "It defines borders", "It creates the military"],
      correct: "It establishes the supremacy of the Constitution and the sovereignty of the people",
      difficulty: "Medium",
      explanation: "Article 9 declares the Constitution supreme, sovereignty resides in the nations, nationalities, and peoples, and any law contrary to the Constitution is void."
    },
    {
      id: "g11_civ_u4_m7",
      question: "How do state constitutions relate to the federal constitution in Ethiopia?",
      options: ["They can contradict it", "State constitutions must conform to the federal constitution but can address regional matters", "They replace the federal constitution", "State constitutions don't exist"],
      correct: "State constitutions must conform to the federal constitution but can address regional matters",
      difficulty: "Medium",
      explanation: "Regional state constitutions must align with the FDRE Constitution but can include provisions addressing specific regional governance, language, and cultural matters."
    },
    {
      id: "g11_civ_u4_m8",
      question: "What is the process for amending the Ethiopian Constitution?",
      options: ["Simple majority vote", "Requires approval by two-thirds of both houses and majority of regional state councils", "The Prime Minister decides", "No amendment is possible"],
      correct: "Requires approval by two-thirds of both houses and majority of regional state councils",
      difficulty: "Medium",
      explanation: "Amending the FDRE Constitution requires a two-thirds majority in both parliamentary chambers and approval by a majority of regional state councils."
    },
    {
      id: "g11_civ_u4_m9",
      question: "What is constitutional supremacy?",
      options: ["The president is supreme", "The constitution is the highest law and all other laws must conform to it", "Parliament is above the constitution", "Traditional law overrides the constitution"],
      correct: "The constitution is the highest law and all other laws must conform to it",
      difficulty: "Medium",
      explanation: "Constitutional supremacy means the constitution is the highest authority; any law, decision, or practice that contradicts it is invalid."
    },
    {
      id: "g11_civ_u4_m10",
      question: "How does the Ethiopian Constitution protect minority rights within regional states?",
      options: ["It doesn't address minorities", "It guarantees equitable representation and the right to establish self-governance at various levels", "Minorities must assimilate", "Only the majority has rights"],
      correct: "It guarantees equitable representation and the right to establish self-governance at various levels",
      difficulty: "Medium",
      explanation: "The Constitution provides for equitable representation of minorities and their right to self-governance within regional states, including special woreda (district) status."
    },
    // Hard
    {
      id: "g11_civ_u4_h1",
      question: "Compare the Ethiopian constitutional review system with judicial review in other countries.",
      options: ["They are identical", "Ethiopia uses a political body (House of Federation) rather than courts for constitutional interpretation, unlike most systems", "Other countries don't have constitutional review", "Ethiopia's system is universally adopted"],
      correct: "Ethiopia uses a political body (House of Federation) rather than courts for constitutional interpretation, unlike most systems",
      difficulty: "Hard",
      explanation: "Unlike most countries where courts exercise judicial review, Ethiopia assigns constitutional interpretation to the House of Federation, a political body, raising questions about judicial independence."
    },
    {
      id: "g11_civ_u4_h2",
      question: "Evaluate the argument that the right to secession in Article 39 strengthens Ethiopian unity.",
      options: ["It clearly weakens unity", "By acknowledging groups' right to leave, it encourages voluntary unity rather than forced coexistence", "Secession has nothing to do with unity", "Article 39 doesn't mention secession"],
      correct: "By acknowledging groups' right to leave, it encourages voluntary unity rather than forced coexistence",
      difficulty: "Hard",
      explanation: "Proponents argue that recognizing the right to secession makes unity voluntary and meaningful, as groups choose to stay rather than being forced, potentially strengthening commitment to the federation."
    },
    {
      id: "g11_civ_u4_h3",
      question: "How does the Ethiopian Constitution's approach to land ownership reflect its political philosophy?",
      options: ["Land is privately owned", "State and public ownership of land reflects socialist influences and aims to prevent exploitation", "Land ownership is not addressed", "Only foreigners own land"],
      correct: "State and public ownership of land reflects socialist influences and aims to prevent exploitation",
      difficulty: "Hard",
      explanation: "The Constitution vests land ownership in the state and peoples, reflecting socialist influences and aiming to prevent land concentration, though it grants use rights to citizens."
    },
    {
      id: "g11_civ_u4_h4",
      question: "What are the implications of vesting sovereignty in 'nations, nationalities, and peoples' rather than individual citizens?",
      options: ["No implications", "It emphasizes group rights over individual rights and shapes the ethnic federal structure", "It means individual rights don't exist", "It's purely symbolic"],
      correct: "It emphasizes group rights over individual rights and shapes the ethnic federal structure",
      difficulty: "Hard",
      explanation: "Vesting sovereignty in collective entities rather than individual citizens emphasizes communal identity, underpins ethnic federalism, and can create tensions between group and individual rights."
    },
    {
      id: "g11_civ_u4_h5",
      question: "Analyze the effectiveness of the constitutional provision for a state of emergency in Ethiopia.",
      options: ["It's perfectly designed", "It provides necessary emergency powers but requires robust safeguards against abuse", "Emergency provisions don't exist", "It's always abused"],
      correct: "It provides necessary emergency powers but requires robust safeguards against abuse",
      difficulty: "Hard",
      explanation: "Emergency provisions allow government response to crises but must include time limits, parliamentary oversight, and protection of non-derogable rights to prevent authoritarian overreach."
    },
    {
      id: "g11_civ_u4_h6",
      question: "How does the lack of judicial constitutional review affect the protection of individual rights in Ethiopia?",
      options: ["It has no effect", "It may weaken rights protection since the political body interpreting the constitution may prioritize political over legal considerations", "It strengthens rights protection", "Courts still have full review power"],
      correct: "It may weaken rights protection since the political body interpreting the constitution may prioritize political over legal considerations",
      difficulty: "Hard",
      explanation: "Having a political body rather than independent courts interpret constitutional rights raises concerns about impartial protection, as political considerations may influence decisions."
    },
    {
      id: "g11_civ_u4_h7",
      question: "What constitutional challenges arise from Ethiopia's commitment to both individual and group rights?",
      options: ["No challenges arise", "Tensions between individual freedoms and collective rights require careful balancing by institutions", "Only group rights matter", "Individual rights always win"],
      correct: "Tensions between individual freedoms and collective rights require careful balancing by institutions",
      difficulty: "Hard",
      explanation: "Individual rights (e.g., freedom of movement) may conflict with group rights (e.g., regional self-determination), requiring institutional mechanisms to balance competing claims."
    },
    {
      id: "g11_civ_u4_h8",
      question: "Assess the role of constitutional design in preventing ethnic conflict in federated states.",
      options: ["Constitution design is irrelevant to conflict", "Constitutional provisions for power-sharing, representation, and self-governance can reduce but not eliminate conflict potential", "Constitutions always prevent conflict", "Only military prevents conflict"],
      correct: "Constitutional provisions for power-sharing, representation, and self-governance can reduce but not eliminate conflict potential",
      difficulty: "Hard",
      explanation: "Well-designed constitutional provisions for power-sharing, equitable representation, and autonomy can mitigate ethnic tensions, but implementation and political culture are equally important."
    },
    {
      id: "g11_civ_u4_h9",
      question: "How does the constitutional treatment of natural resources affect inter-regional relations?",
      options: ["Natural resources aren't mentioned", "Resource allocation between federal and regional governments creates competition and requires equitable sharing mechanisms", "Resources belong only to one region", "The constitution ignores resource distribution"],
      correct: "Resource allocation between federal and regional governments creates competition and requires equitable sharing mechanisms",
      difficulty: "Hard",
      explanation: "Constitutional provisions on resource ownership and revenue sharing between federal and regional governments significantly affect inter-regional equity and potential for conflict."
    },
    {
      id: "g11_civ_u4_h10",
      question: "Critically evaluate the effectiveness of Ethiopia's Constitution in promoting democratic governance over the past decades.",
      options: ["It has been perfectly effective", "The Constitution provides a strong framework but implementation has faced challenges of political will, institutional capacity, and competing interests", "It has completely failed", "Constitutional governance hasn't been attempted"],
      correct: "The Constitution provides a strong framework but implementation has faced challenges of political will, institutional capacity, and competing interests",
      difficulty: "Hard",
      explanation: "While the FDRE Constitution provides comprehensive democratic provisions, its effectiveness has been limited by implementation gaps, institutional weaknesses, and political dynamics."
    }
  ],

  "Unit 5: Ethics and Ethical Conduct": [
    // Easy
    {
      id: "g11_civ_u5_e1",
      question: "What is ethics?",
      options: ["The study of science", "The study of moral principles and values", "The study of economics", "The study of politics"],
      correct: "The study of moral principles and values",
      difficulty: "Easy",
      explanation: "Ethics is the branch of philosophy dealing with moral principles, values, and standards of right and wrong conduct."
    },
    {
      id: "g11_civ_u5_e2",
      question: "What is the difference between ethics and morals?",
      options: ["They are exactly the same", "Ethics are societal standards; morals are personal values", "Morals are laws", "Ethics are feelings"],
      correct: "Ethics are societal standards; morals are personal values",
      difficulty: "Easy",
      explanation: "Ethics refers to socially accepted standards of behavior, while morals are personal beliefs about right and wrong."
    },
    {
      id: "g11_civ_u5_e3",
      question: "What is integrity?",
      options: ["Being dishonest", "Consistency between one's values and actions", "Following others blindly", "Seeking personal gain only"],
      correct: "Consistency between one's values and actions",
      difficulty: "Easy",
      explanation: "Integrity means aligning one's actions with moral principles, being honest and consistent in behavior."
    },
    {
      id: "g11_civ_u5_e4",
      question: "What is corruption?",
      options: ["Good governance", "Abuse of public power for private gain", "Following the law", "Community service"],
      correct: "Abuse of public power for private gain",
      difficulty: "Easy",
      explanation: "Corruption is the misuse of entrusted power or public office for personal benefit, undermining public trust and governance."
    },
    {
      id: "g11_civ_u5_e5",
      question: "What is honesty?",
      options: ["Telling lies", "Being truthful and sincere", "Hiding information", "Deceiving others"],
      correct: "Being truthful and sincere",
      difficulty: "Easy",
      explanation: "Honesty involves being truthful, transparent, and sincere in one's words and actions."
    },
    {
      id: "g11_civ_u5_e6",
      question: "What is accountability?",
      options: ["Avoiding responsibility", "Being answerable for one's actions and decisions", "Blaming others", "Hiding mistakes"],
      correct: "Being answerable for one's actions and decisions",
      difficulty: "Easy",
      explanation: "Accountability means being responsible for one's actions and willing to explain and justify them."
    },
    {
      id: "g11_civ_u5_e7",
      question: "What is a code of ethics?",
      options: ["A secret code", "A set of guidelines for ethical behavior in a profession or organization", "A computer code", "A lock combination"],
      correct: "A set of guidelines for ethical behavior in a profession or organization",
      difficulty: "Easy",
      explanation: "A code of ethics provides guidelines and standards for ethical conduct within a profession, organization, or institution."
    },
    {
      id: "g11_civ_u5_e8",
      question: "What is fairness?",
      options: ["Favoring friends", "Treating people justly and without bias", "Giving everything to one person", "Ignoring rules"],
      correct: "Treating people justly and without bias",
      difficulty: "Easy",
      explanation: "Fairness involves treating all people equitably, without favoritism or discrimination."
    },
    {
      id: "g11_civ_u5_e9",
      question: "What is respect for others?",
      options: ["Looking down on people", "Recognizing the dignity and worth of every person", "Only respecting the wealthy", "Fear of authority"],
      correct: "Recognizing the dignity and worth of every person",
      difficulty: "Easy",
      explanation: "Respect involves acknowledging the inherent dignity, rights, and worth of every person regardless of their background."
    },
    {
      id: "g11_civ_u5_e10",
      question: "What is a moral dilemma?",
      options: ["An easy decision", "A situation where one must choose between two conflicting moral principles", "A math problem", "A legal dispute"],
      correct: "A situation where one must choose between two conflicting moral principles",
      difficulty: "Easy",
      explanation: "A moral dilemma is a situation where a person faces a choice between two morally valid but conflicting options."
    },
    // Medium
    {
      id: "g11_civ_u5_m1",
      question: "How does ethical leadership differ from authoritarian leadership?",
      options: ["No difference", "Ethical leaders guide through moral example and inclusivity; authoritarian leaders rule through fear", "Authoritarian is always ethical", "Ethical leaders are weak"],
      correct: "Ethical leaders guide through moral example and inclusivity; authoritarian leaders rule through fear",
      difficulty: "Medium",
      explanation: "Ethical leaders lead by example, seek input, and act with integrity, while authoritarian leaders rely on coercion and unilateral decision-making."
    },
    {
      id: "g11_civ_u5_m2",
      question: "What is the relationship between ethics and the law?",
      options: ["They are identical", "Laws set minimum standards while ethics often demand higher standards of behavior", "Ethics replace laws", "Laws are always ethical"],
      correct: "Laws set minimum standards while ethics often demand higher standards of behavior",
      difficulty: "Medium",
      explanation: "Laws establish legal minimums, but ethical standards often go beyond legal requirements, demanding higher levels of integrity and moral behavior."
    },
    {
      id: "g11_civ_u5_m3",
      question: "How does nepotism affect governance?",
      options: ["It improves governance", "It undermines merit-based systems and erodes public trust", "It has no effect", "It only affects private companies"],
      correct: "It undermines merit-based systems and erodes public trust",
      difficulty: "Medium",
      explanation: "Nepotism—favoring relatives in appointments—undermines competence-based hiring, reduces institutional effectiveness, and erodes public confidence in government."
    },
    {
      id: "g11_civ_u5_m4",
      question: "What role does whistleblowing play in promoting ethical conduct?",
      options: ["It creates chaos", "It exposes wrongdoing and promotes accountability when internal mechanisms fail", "It's always wrong", "It only applies to sports"],
      correct: "It exposes wrongdoing and promotes accountability when internal mechanisms fail",
      difficulty: "Medium",
      explanation: "Whistleblowing serves as an important check against corruption and unethical behavior by exposing wrongdoing to authorities or the public."
    },
    {
      id: "g11_civ_u5_m5",
      question: "How does ethical relativism differ from moral universalism?",
      options: ["No difference", "Relativism holds ethics vary by culture; universalism holds some ethical principles are universal", "Relativism is always right", "Universalism rejects all cultures"],
      correct: "Relativism holds ethics vary by culture; universalism holds some ethical principles are universal",
      difficulty: "Medium",
      explanation: "Ethical relativism argues moral standards differ across cultures, while moral universalism asserts certain ethical principles apply to all humans regardless of culture."
    },
    {
      id: "g11_civ_u5_m6",
      question: "What is the importance of transparency in ethical governance?",
      options: ["It's unnecessary", "Transparency allows public scrutiny, reduces corruption, and builds trust", "It creates confusion", "It only benefits the government"],
      correct: "Transparency allows public scrutiny, reduces corruption, and builds trust",
      difficulty: "Medium",
      explanation: "Transparent governance enables citizens to monitor government actions, reduces opportunities for corruption, and builds public trust in institutions."
    },
    {
      id: "g11_civ_u5_m7",
      question: "How do ethical values develop in individuals?",
      options: ["They are innate only", "Through family, education, culture, religion, and personal experience", "Only through religion", "Only through laws"],
      correct: "Through family, education, culture, religion, and personal experience",
      difficulty: "Medium",
      explanation: "Ethical development is shaped by multiple influences including family upbringing, formal education, cultural norms, religious teachings, and personal experiences."
    },
    {
      id: "g11_civ_u5_m8",
      question: "What is the concept of civic virtue?",
      options: ["Personal selfishness", "The moral qualities necessary for effective citizenship and community life", "Military courage only", "Religious piety only"],
      correct: "The moral qualities necessary for effective citizenship and community life",
      difficulty: "Medium",
      explanation: "Civic virtue encompasses the moral qualities—like integrity, responsibility, and concern for public good—that enable effective participation in community and political life."
    },
    {
      id: "g11_civ_u5_m9",
      question: "How does corruption undermine development?",
      options: ["It doesn't affect development", "It diverts resources, discourages investment, and weakens institutions", "It speeds up development", "It only affects wealthy countries"],
      correct: "It diverts resources, discourages investment, and weakens institutions",
      difficulty: "Medium",
      explanation: "Corruption diverts public resources from development, discourages domestic and foreign investment, weakens institutions, and increases poverty."
    },
    {
      id: "g11_civ_u5_m10",
      question: "What is professional ethics?",
      options: ["Making maximum profit", "Moral standards and principles governing professional conduct", "Working long hours", "Following orders without question"],
      correct: "Moral standards and principles governing professional conduct",
      difficulty: "Medium",
      explanation: "Professional ethics are the moral principles and standards that guide behavior and decision-making within specific professions."
    },
    // Hard
    {
      id: "g11_civ_u5_h1",
      question: "Analyze the ethical implications of resource allocation decisions in a developing country.",
      options: ["No ethical implications exist", "Decisions about distributing limited resources raise issues of justice, equity, and the balance between present needs and future development", "Only economic factors matter", "Ethics are irrelevant to economics"],
      correct: "Decisions about distributing limited resources raise issues of justice, equity, and the balance between present needs and future development",
      difficulty: "Hard",
      explanation: "Resource allocation in developing countries involves complex ethical trade-offs between regions, sectors, present consumption and future investment, and different social groups."
    },
    {
      id: "g11_civ_u5_h2",
      question: "How does the utilitarian ethical framework apply to public policy decisions?",
      options: ["It doesn't apply", "It advocates for policies that maximize overall well-being, but may sacrifice minority interests", "It always supports the majority", "It focuses only on individual rights"],
      correct: "It advocates for policies that maximize overall well-being, but may sacrifice minority interests",
      difficulty: "Hard",
      explanation: "Utilitarianism guides policy toward maximizing aggregate welfare, but raises concerns when the majority's benefit comes at the cost of minority rights or interests."
    },
    {
      id: "g11_civ_u5_h3",
      question: "Evaluate the effectiveness of anti-corruption institutions in Ethiopia.",
      options: ["They are perfectly effective", "Institutions exist but face challenges of independence, capacity, political will, and enforcement", "No institutions exist", "Corruption isn't a problem in Ethiopia"],
      correct: "Institutions exist but face challenges of independence, capacity, political will, and enforcement",
      difficulty: "Hard",
      explanation: "Ethiopia has anti-corruption bodies including the Ethics and Anti-Corruption Commission, but they face challenges of institutional independence, limited capacity, and political interference."
    },
    {
      id: "g11_civ_u5_h4",
      question: "How do different ethical theories (deontological, consequentialist, virtue ethics) approach the same moral issue differently?",
      options: ["All theories give the same answer", "Deontology focuses on duty, consequentialism on outcomes, and virtue ethics on character", "Only one theory is correct", "Ethical theories are irrelevant"],
      correct: "Deontology focuses on duty, consequentialism on outcomes, and virtue ethics on character",
      difficulty: "Hard",
      explanation: "Different ethical frameworks analyze moral issues differently: deontological ethics judges actions by their adherence to rules, consequentialism by outcomes, and virtue ethics by character."
    },
    {
      id: "g11_civ_u5_h5",
      question: "What is the ethical tension between economic development and environmental protection?",
      options: ["No tension exists", "Development may require resource exploitation that harms the environment, creating intergenerational justice issues", "Development always protects the environment", "Environment doesn't matter for ethics"],
      correct: "Development may require resource exploitation that harms the environment, creating intergenerational justice issues",
      difficulty: "Hard",
      explanation: "Economic development often requires natural resource use that may harm the environment, raising ethical questions about obligations to future generations and sustainable development."
    },
    {
      id: "g11_civ_u5_h6",
      question: "How does systemic corruption differ from individual corruption, and why does it matter?",
      options: ["No difference", "Systemic corruption is embedded in institutions and requires structural reforms, not just individual punishment", "Individual corruption is worse", "Systemic corruption doesn't exist"],
      correct: "Systemic corruption is embedded in institutions and requires structural reforms, not just individual punishment",
      difficulty: "Hard",
      explanation: "Systemic corruption is embedded in institutional practices and cultures, requiring comprehensive structural reforms beyond punishing individual offenders."
    },
    {
      id: "g11_civ_u5_h7",
      question: "Analyze the relationship between poverty and ethical behavior.",
      options: ["Poverty causes immorality", "Poverty can create pressures that challenge ethical behavior, but ethical standards apply regardless of economic status", "Wealthy people are always ethical", "Ethics only apply to the poor"],
      correct: "Poverty can create pressures that challenge ethical behavior, but ethical standards apply regardless of economic status",
      difficulty: "Hard",
      explanation: "Poverty creates survival pressures that can challenge ethical behavior, but it doesn't excuse unethical conduct; simultaneously, addressing poverty is itself an ethical imperative."
    },
    {
      id: "g11_civ_u5_h8",
      question: "What ethical considerations should guide the use of technology in governance?",
      options: ["Technology has no ethical implications", "Issues of privacy, surveillance, digital divide, and algorithmic bias must be addressed", "Technology always improves governance", "Only cost matters"],
      correct: "Issues of privacy, surveillance, digital divide, and algorithmic bias must be addressed",
      difficulty: "Hard",
      explanation: "Technology in governance raises ethical questions about citizen privacy, mass surveillance, equitable access (digital divide), and potential biases in automated decision-making."
    },
    {
      id: "g11_civ_u5_h9",
      question: "How does ethical pluralism challenge the creation of universal ethical standards?",
      options: ["It doesn't create any challenge", "Diverse ethical traditions make consensus difficult but dialogue can identify shared core values", "Universal standards are impossible", "Only one ethical tradition matters"],
      correct: "Diverse ethical traditions make consensus difficult but dialogue can identify shared core values",
      difficulty: "Hard",
      explanation: "The existence of multiple ethical traditions and frameworks makes universal consensus challenging, but cross-cultural dialogue can identify overlapping values like human dignity and justice."
    },
    {
      id: "g11_civ_u5_h10",
      question: "Critically assess the role of education in building an ethical society.",
      options: ["Education is irrelevant to ethics", "Education shapes moral reasoning but must be complemented by institutional accountability and social norms", "Education alone is sufficient", "Only religious education matters"],
      correct: "Education shapes moral reasoning but must be complemented by institutional accountability and social norms",
      difficulty: "Hard",
      explanation: "Education develops moral reasoning and ethical awareness, but an ethical society also requires accountable institutions, just laws, and social norms that reinforce ethical behavior."
    }
  ],

  "Unit 6: Patriotism and National Identity": [
    // Easy
    {
      id: "g11_civ_u6_e1",
      question: "What is patriotism?",
      options: ["Hatred of other countries", "Love and devotion to one's country", "Blind obedience", "Nationalism"],
      correct: "Love and devotion to one's country",
      difficulty: "Easy",
      explanation: "Patriotism is the feeling of love, devotion, and sense of attachment to one's country and its values."
    },
    {
      id: "g11_civ_u6_e2",
      question: "What is national identity?",
      options: ["A passport number", "A shared sense of belonging to a nation", "An ID card", "A government program"],
      correct: "A shared sense of belonging to a nation",
      difficulty: "Easy",
      explanation: "National identity is the collective sense of belonging to a nation, based on shared history, culture, values, and territory."
    },
    {
      id: "g11_civ_u6_e3",
      question: "What is the Ethiopian national flag's significance?",
      options: ["It has no meaning", "It represents the nation's identity, sovereignty, and values", "It's just decoration", "It belongs to one ethnic group"],
      correct: "It represents the nation's identity, sovereignty, and values",
      difficulty: "Easy",
      explanation: "The Ethiopian flag with green, yellow, and red stripes and the national emblem represents the nation's sovereignty, unity, and values."
    },
    {
      id: "g11_civ_u6_e4",
      question: "What is the Ethiopian national anthem?",
      options: ["A folk song", "A hymn symbolizing national unity and pride", "A military march", "A religious chant"],
      correct: "A hymn symbolizing national unity and pride",
      difficulty: "Easy",
      explanation: "The national anthem 'March Forward, Dear Mother Ethiopia' symbolizes unity, pride, and the aspirations of the Ethiopian people."
    },
    {
      id: "g11_civ_u6_e5",
      question: "How can citizens show patriotism?",
      options: ["By evading taxes", "By contributing to national development and respecting laws", "By leaving the country", "By criticizing everything"],
      correct: "By contributing to national development and respecting laws",
      difficulty: "Easy",
      explanation: "Citizens demonstrate patriotism through constructive contributions like paying taxes, voting, community service, and upholding laws."
    },
    {
      id: "g11_civ_u6_e6",
      question: "What is national sovereignty?",
      options: ["Foreign rule", "A nation's right to govern itself independently", "Colonial control", "Economic dependence"],
      correct: "A nation's right to govern itself independently",
      difficulty: "Easy",
      explanation: "National sovereignty is the right of a nation to govern itself without external interference, making independent decisions about its affairs."
    },
    {
      id: "g11_civ_u6_e7",
      question: "What role do national holidays play in building identity?",
      options: ["They are just days off", "They commemorate important events and reinforce shared national narratives", "They have no significance", "They only benefit businesses"],
      correct: "They commemorate important events and reinforce shared national narratives",
      difficulty: "Easy",
      explanation: "National holidays commemorate significant events, celebrate shared heritage, and reinforce collective memory and national identity."
    },
    {
      id: "g11_civ_u6_e8",
      question: "What is the Battle of Adwa known for?",
      options: ["A trade agreement", "Ethiopia's victory against Italian colonial invasion in 1896", "A religious event", "A natural disaster"],
      correct: "Ethiopia's victory against Italian colonial invasion in 1896",
      difficulty: "Easy",
      explanation: "The Battle of Adwa (1896) was Ethiopia's decisive victory against Italian colonial forces, preserving Ethiopian independence and inspiring anti-colonial movements globally."
    },
    {
      id: "g11_civ_u6_e9",
      question: "What is civic patriotism?",
      options: ["Ethnic loyalty only", "Patriotism based on shared democratic values rather than ethnic identity", "Military service only", "Government propaganda"],
      correct: "Patriotism based on shared democratic values rather than ethnic identity",
      difficulty: "Easy",
      explanation: "Civic patriotism is loyalty to the nation based on shared values, institutions, and democratic principles rather than ethnic or cultural ties."
    },
    {
      id: "g11_civ_u6_e10",
      question: "Why is respecting national symbols important?",
      options: ["It's not important", "It shows recognition of shared identity and respect for the nation", "Only for government officials", "It's mandatory by force"],
      correct: "It shows recognition of shared identity and respect for the nation",
      difficulty: "Easy",
      explanation: "Respecting national symbols demonstrates recognition of collective identity, shared history, and commitment to the nation's values."
    },
    // Medium
    {
      id: "g11_civ_u6_m1",
      question: "What is the difference between patriotism and nationalism?",
      options: ["They are identical", "Patriotism involves love of country; nationalism can include feelings of superiority over others", "Nationalism is better", "Patriotism means isolation"],
      correct: "Patriotism involves love of country; nationalism can include feelings of superiority over others",
      difficulty: "Medium",
      explanation: "Patriotism is healthy love of country, while extreme nationalism can involve claims of national superiority and hostility toward other nations."
    },
    {
      id: "g11_civ_u6_m2",
      question: "How can constructive criticism be a form of patriotism?",
      options: ["Criticism is unpatriotic", "Identifying problems and proposing solutions shows commitment to improving the nation", "Only praise is patriotic", "Citizens should never criticize"],
      correct: "Identifying problems and proposing solutions shows commitment to improving the nation",
      difficulty: "Medium",
      explanation: "Constructive criticism demonstrates genuine concern for the country's well-being by identifying weaknesses and working toward improvement."
    },
    {
      id: "g11_civ_u6_m3",
      question: "How does Ethiopia's history of independence contribute to national identity?",
      options: ["It has no effect", "Being one of the few African countries never colonized creates a unique source of pride", "It creates division", "Only recent history matters"],
      correct: "Being one of the few African countries never colonized creates a unique source of pride",
      difficulty: "Medium",
      explanation: "Ethiopia's exceptional status as one of the few African nations never colonized is a powerful source of national pride and a key element of national identity."
    },
    {
      id: "g11_civ_u6_m4",
      question: "What is the role of cultural heritage in patriotism?",
      options: ["Heritage is irrelevant", "Shared cultural heritage builds pride and emotional connection to the nation", "Only modern culture matters", "Heritage creates division"],
      correct: "Shared cultural heritage builds pride and emotional connection to the nation",
      difficulty: "Medium",
      explanation: "Cultural heritage sites, traditions, and practices create emotional bonds with the nation and serve as sources of collective pride and identity."
    },
    {
      id: "g11_civ_u6_m5",
      question: "How does diaspora involvement contribute to national development?",
      options: ["Diaspora has no role", "Through remittances, knowledge transfer, investment, and cultural preservation", "Diaspora weakens the nation", "Only residents can contribute"],
      correct: "Through remittances, knowledge transfer, investment, and cultural preservation",
      difficulty: "Medium",
      explanation: "The Ethiopian diaspora contributes through financial remittances, professional expertise, investment, advocacy, and maintaining cultural connections."
    },
    {
      id: "g11_civ_u6_m6",
      question: "What is the concept of 'Ethiopianism' in African history?",
      options: ["A trade policy", "A pan-African movement inspired by Ethiopia's independence symbolizing black freedom", "A religious denomination", "An economic theory"],
      correct: "A pan-African movement inspired by Ethiopia's independence symbolizing black freedom",
      difficulty: "Medium",
      explanation: "Ethiopianism was a pan-African movement drawing inspiration from Ethiopia's independence as a symbol of African sovereignty and black liberation."
    },
    {
      id: "g11_civ_u6_m7",
      question: "How does national service contribute to patriotic values?",
      options: ["It doesn't contribute", "It builds discipline, shared experience, and commitment to national development", "It only benefits the military", "It creates resentment"],
      correct: "It builds discipline, shared experience, and commitment to national development",
      difficulty: "Medium",
      explanation: "National service programs can foster patriotism by creating shared experiences, building discipline, promoting inter-ethnic understanding, and contributing to development."
    },
    {
      id: "g11_civ_u6_m8",
      question: "What is the relationship between patriotism and respect for diversity?",
      options: ["They conflict", "True patriotism embraces and celebrates the nation's diversity as a strength", "Patriotism requires uniformity", "Diversity weakens patriotism"],
      correct: "True patriotism embraces and celebrates the nation's diversity as a strength",
      difficulty: "Medium",
      explanation: "Genuine patriotism in a diverse nation like Ethiopia involves celebrating diversity as a national asset and finding unity in shared values and goals."
    },
    {
      id: "g11_civ_u6_m9",
      question: "How do sports contribute to national identity and pride?",
      options: ["Sports are irrelevant to identity", "International sporting success creates shared pride and unity across ethnic lines", "Only ethnic sports matter", "Sports create division"],
      correct: "International sporting success creates shared pride and unity across ethnic lines",
      difficulty: "Medium",
      explanation: "Sporting achievements, like Ethiopian distance runners' Olympic successes, create moments of shared national pride that transcend ethnic and regional boundaries."
    },
    {
      id: "g11_civ_u6_m10",
      question: "What is cosmopolitan patriotism?",
      options: ["Rejecting one's country", "Loving one's country while also recognizing obligations to the global community", "Living in cities only", "Only caring about other countries"],
      correct: "Loving one's country while also recognizing obligations to the global community",
      difficulty: "Medium",
      explanation: "Cosmopolitan patriotism combines national loyalty with recognition of global citizenship, respecting other nations and contributing to humanity's well-being."
    },
    // Hard
    {
      id: "g11_civ_u6_h1",
      question: "How can patriotism be promoted in a multi-ethnic state without privileging one group's narrative?",
      options: ["It's impossible", "By developing inclusive national narratives that acknowledge all groups' contributions and shared achievements", "By choosing the majority's narrative", "By ignoring all histories"],
      correct: "By developing inclusive national narratives that acknowledge all groups' contributions and shared achievements",
      difficulty: "Hard",
      explanation: "Inclusive patriotism requires creating narratives that recognize diverse contributions, shared achievements, and collective aspirations without privileging any single ethnic perspective."
    },
    {
      id: "g11_civ_u6_h2",
      question: "Analyze the tension between ethnic identity and national identity in contemporary Ethiopia.",
      options: ["No tension exists", "Strong ethnic identities can compete with national identity, requiring institutions that bridge both", "Ethnic identity should be eliminated", "National identity doesn't matter"],
      correct: "Strong ethnic identities can compete with national identity, requiring institutions that bridge both",
      difficulty: "Hard",
      explanation: "The tension between ethnic and national identities requires political institutions, education, and cultural practices that allow people to hold both identities simultaneously."
    },
    {
      id: "g11_civ_u6_h3",
      question: "Evaluate the role of historical memory in shaping patriotic sentiments across different Ethiopian communities.",
      options: ["History has no role", "Different groups' historical experiences create varying patriotic narratives that must be reconciled", "All groups share identical history", "Only recent events matter"],
      correct: "Different groups' historical experiences create varying patriotic narratives that must be reconciled",
      difficulty: "Hard",
      explanation: "Different Ethiopian communities have distinct historical experiences of state formation, creating diverse patriotic narratives that require dialogue and reconciliation."
    },
    {
      id: "g11_civ_u6_h4",
      question: "How does globalization challenge traditional concepts of patriotism and national identity?",
      options: ["Globalization strengthens patriotism", "It creates competing loyalties between national and global identities, requiring adaptation", "It eliminates patriotism entirely", "Globalization has no effect"],
      correct: "It creates competing loyalties between national and global identities, requiring adaptation",
      difficulty: "Hard",
      explanation: "Globalization introduces global cultural influences, economic interdependence, and transnational identities that challenge traditional patriotism and require redefining national loyalty."
    },
    {
      id: "g11_civ_u6_h5",
      question: "What is the relationship between democratic citizenship and patriotism?",
      options: ["They are unrelated", "Democratic citizenship grounds patriotism in shared civic values rather than ethnic or cultural homogeneity", "Only authoritarian regimes produce patriots", "Democracy weakens patriotism"],
      correct: "Democratic citizenship grounds patriotism in shared civic values rather than ethnic or cultural homogeneity",
      difficulty: "Hard",
      explanation: "Democratic patriotism is based on commitment to shared democratic values, rights, and institutions rather than ethnic, religious, or cultural uniformity."
    },
    {
      id: "g11_civ_u6_h6",
      question: "How might the concept of 'constitutional patriotism' address Ethiopia's diversity challenges?",
      options: ["It's irrelevant", "It bases national loyalty on shared constitutional principles rather than ethnic or cultural identity", "It replaces the constitution", "It only works in Europe"],
      correct: "It bases national loyalty on shared constitutional principles rather than ethnic or cultural identity",
      difficulty: "Hard",
      explanation: "Constitutional patriotism, proposed by Habermas, suggests basing national loyalty on shared democratic and constitutional principles, potentially bridging ethnic divides."
    },
    {
      id: "g11_civ_u6_h7",
      question: "Critically assess how state-sponsored narratives of patriotism can be both unifying and exclusionary.",
      options: ["State narratives are always inclusive", "Official narratives may unite the majority while marginalizing groups whose experiences differ from the dominant story", "State narratives have no effect", "All narratives are equally valid"],
      correct: "Official narratives may unite the majority while marginalizing groups whose experiences differ from the dominant story",
      difficulty: "Hard",
      explanation: "State-promoted patriotic narratives can create unity but may exclude groups whose historical experiences or perspectives differ from the officially promoted version."
    },
    {
      id: "g11_civ_u6_h8",
      question: "How does the concept of 'banal nationalism' shape everyday patriotic sentiments?",
      options: ["It has no effect", "Everyday reminders of the nation through flags, currency, and media subtly reinforce national identity", "Only dramatic events create patriotism", "Banal nationalism doesn't exist"],
      correct: "Everyday reminders of the nation through flags, currency, and media subtly reinforce national identity",
      difficulty: "Hard",
      explanation: "Banal nationalism refers to the routine, everyday expressions of nationhood (flags, anthems, national media) that continuously reinforce national identity in subtle ways."
    },
    {
      id: "g11_civ_u6_h9",
      question: "What role should education play in fostering inclusive patriotism?",
      options: ["Education should promote one group's perspective", "Education should present multiple perspectives, critical thinking, and shared values to build inclusive patriotism", "Education is irrelevant to patriotism", "Only military training builds patriotism"],
      correct: "Education should present multiple perspectives, critical thinking, and shared values to build inclusive patriotism",
      difficulty: "Hard",
      explanation: "Education for inclusive patriotism should present diverse historical perspectives, develop critical thinking, and emphasize shared democratic values and achievements."
    },
    {
      id: "g11_civ_u6_h10",
      question: "Analyze how mega-projects (like the Grand Ethiopian Renaissance Dam) function as symbols of national pride.",
      options: ["They have no symbolic value", "They create shared national achievement narratives but can also mask internal divisions", "They only serve economic purposes", "Only military victories build pride"],
      correct: "They create shared national achievement narratives but can also mask internal divisions",
      difficulty: "Hard",
      explanation: "Mega-projects like GERD serve as powerful symbols of national capability and unity, generating cross-ethnic pride, while potentially overshadowing domestic challenges."
    }
  ],

  "Unit 7: Gender Equality and Development": [
    // Easy
    {
      id: "g11_civ_u7_e1",
      question: "What is gender equality?",
      options: ["Men and women being identical", "Equal rights, opportunities, and treatment for all genders", "Women having more rights", "Only about employment"],
      correct: "Equal rights, opportunities, and treatment for all genders",
      difficulty: "Easy",
      explanation: "Gender equality means all genders have equal rights, responsibilities, opportunities, and access to resources."
    },
    {
      id: "g11_civ_u7_e2",
      question: "What is the difference between sex and gender?",
      options: ["They mean the same thing", "Sex is biological; gender is a social construct", "Gender is biological; sex is social", "Neither exists"],
      correct: "Sex is biological; gender is a social construct",
      difficulty: "Easy",
      explanation: "Sex refers to biological differences, while gender refers to socially constructed roles, behaviors, and expectations associated with being male or female."
    },
    {
      id: "g11_civ_u7_e3",
      question: "What are gender stereotypes?",
      options: ["Scientific facts", "Oversimplified beliefs about what men and women should be like", "Legal requirements", "Biological differences"],
      correct: "Oversimplified beliefs about what men and women should be like",
      difficulty: "Easy",
      explanation: "Gender stereotypes are generalized, oversimplified beliefs about the characteristics, roles, and behaviors expected of men and women."
    },
    {
      id: "g11_civ_u7_e4",
      question: "What is gender-based violence?",
      options: ["Any violence", "Violence directed at someone because of their gender", "Only physical violence", "Only verbal abuse"],
      correct: "Violence directed at someone because of their gender",
      difficulty: "Easy",
      explanation: "Gender-based violence is any harmful act perpetrated against a person based on their gender, including physical, sexual, psychological, and economic harm."
    },
    {
      id: "g11_civ_u7_e5",
      question: "What does the Ethiopian Constitution say about gender equality?",
      options: ["It doesn't address it", "It guarantees equal rights for men and women", "It only protects men", "It only addresses economic rights"],
      correct: "It guarantees equal rights for men and women",
      difficulty: "Easy",
      explanation: "Article 35 of the FDRE Constitution guarantees women equal rights with men in all aspects including political, social, and economic spheres."
    },
    {
      id: "g11_civ_u7_e6",
      question: "What is women's empowerment?",
      options: ["Giving women control over men", "Enabling women to have equal access to resources, opportunities, and decision-making", "A government department", "Only about employment"],
      correct: "Enabling women to have equal access to resources, opportunities, and decision-making",
      difficulty: "Easy",
      explanation: "Women's empowerment means enabling women to participate equally in economic, political, and social life through access to education, resources, and decision-making."
    },
    {
      id: "g11_civ_u7_e7",
      question: "What is a harmful traditional practice?",
      options: ["All traditions", "Cultural practices that cause physical or psychological harm, often to women and girls", "Modern practices", "Government policies"],
      correct: "Cultural practices that cause physical or psychological harm, often to women and girls",
      difficulty: "Easy",
      explanation: "Harmful traditional practices are customs that cause physical or psychological harm, such as child marriage and female genital mutilation."
    },
    {
      id: "g11_civ_u7_e8",
      question: "What is affirmative action for women?",
      options: ["Discrimination against men", "Special measures to address historical disadvantages and promote equality", "Giving women more rights than men", "A temporary policy that harms men"],
      correct: "Special measures to address historical disadvantages and promote equality",
      difficulty: "Easy",
      explanation: "Affirmative action involves temporary special measures designed to accelerate equality by addressing historical disadvantages faced by women."
    },
    {
      id: "g11_civ_u7_e9",
      question: "What is the gender gap?",
      options: ["A geographic feature", "The measurable difference between men's and women's conditions in areas like education and income", "A clothing style", "A communication barrier"],
      correct: "The measurable difference between men's and women's conditions in areas like education and income",
      difficulty: "Easy",
      explanation: "The gender gap measures disparities between men and women in areas such as education, employment, income, health, and political participation."
    },
    {
      id: "g11_civ_u7_e10",
      question: "Why is girls' education important for development?",
      options: ["It's not important", "Educated girls contribute to economic growth, healthier families, and community development", "Only boys' education matters", "Education has no effect on development"],
      correct: "Educated girls contribute to economic growth, healthier families, and community development",
      difficulty: "Easy",
      explanation: "Girls' education leads to higher economic productivity, lower child mortality, smaller family sizes, and improved community health and development."
    },
    // Medium
    {
      id: "g11_civ_u7_m1",
      question: "How does gender inequality affect economic development?",
      options: ["It has no effect", "It reduces productivity by underutilizing half the population's potential", "It improves economic efficiency", "Only in developed countries"],
      correct: "It reduces productivity by underutilizing half the population's potential",
      difficulty: "Medium",
      explanation: "Gender inequality limits economic development by preventing women from fully contributing to the workforce, entrepreneurship, and innovation."
    },
    {
      id: "g11_civ_u7_m2",
      question: "What is gender mainstreaming?",
      options: ["Focusing only on women", "Integrating gender perspectives into all policies, programs, and activities", "A media strategy", "Separating men and women"],
      correct: "Integrating gender perspectives into all policies, programs, and activities",
      difficulty: "Medium",
      explanation: "Gender mainstreaming is the strategy of incorporating gender analysis and perspectives into all aspects of policy-making, planning, and programming."
    },
    {
      id: "g11_civ_u7_m3",
      question: "What are the barriers to women's political participation in Ethiopia?",
      options: ["No barriers exist", "Cultural norms, limited education access, economic dependence, and institutional barriers", "Women don't want to participate", "Only legal barriers"],
      correct: "Cultural norms, limited education access, economic dependence, and institutional barriers",
      difficulty: "Medium",
      explanation: "Women face multiple barriers including cultural expectations, lower educational access, economic dependence, and male-dominated political institutions."
    },
    {
      id: "g11_civ_u7_m4",
      question: "How does the concept of 'double burden' affect women?",
      options: ["It doesn't exist", "Women bear both productive work and unpaid domestic/care work responsibilities", "Men face the double burden", "It only applies to wealthy women"],
      correct: "Women bear both productive work and unpaid domestic/care work responsibilities",
      difficulty: "Medium",
      explanation: "The 'double burden' refers to women managing both paid employment and unpaid household and caregiving responsibilities, limiting their opportunities."
    },
    {
      id: "g11_civ_u7_m5",
      question: "What international instruments promote gender equality?",
      options: ["None exist", "CEDAW, Beijing Platform for Action, and SDG 5", "Only national laws matter", "Only the UN Charter"],
      correct: "CEDAW, Beijing Platform for Action, and SDG 5",
      difficulty: "Medium",
      explanation: "Key instruments include CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women), the Beijing Platform for Action, and SDG 5 on gender equality."
    },
    {
      id: "g11_civ_u7_m6",
      question: "How does child marriage affect girls' development?",
      options: ["It has positive effects", "It limits education, health, and economic opportunities and increases vulnerability", "It only affects boys", "It has no significant effects"],
      correct: "It limits education, health, and economic opportunities and increases vulnerability",
      difficulty: "Medium",
      explanation: "Child marriage forces girls out of school, increases health risks from early pregnancy, limits economic independence, and perpetuates cycles of poverty."
    },
    {
      id: "g11_civ_u7_m7",
      question: "What is the role of men in promoting gender equality?",
      options: ["Men have no role", "Men should be allies and partners in challenging gender norms and promoting equality", "Only women should advocate", "Men should resist changes"],
      correct: "Men should be allies and partners in challenging gender norms and promoting equality",
      difficulty: "Medium",
      explanation: "Men play a crucial role as allies in challenging harmful masculinity norms, supporting women's rights, and modeling equitable behavior."
    },
    {
      id: "g11_civ_u7_m8",
      question: "How does gender-responsive budgeting work?",
      options: ["Giving all money to women", "Analyzing government budgets for their impact on gender equality", "A separate budget for women", "Reducing government spending"],
      correct: "Analyzing government budgets for their impact on gender equality",
      difficulty: "Medium",
      explanation: "Gender-responsive budgeting analyzes how government spending affects men and women differently and adjusts allocations to promote gender equality."
    },
    {
      id: "g11_civ_u7_m9",
      question: "What is the relationship between women's economic empowerment and poverty reduction?",
      options: ["No relationship", "Economically empowered women invest more in families and communities, reducing poverty", "Women's empowerment increases poverty", "Only men can reduce poverty"],
      correct: "Economically empowered women invest more in families and communities, reducing poverty",
      difficulty: "Medium",
      explanation: "Research shows women invest a higher proportion of earnings in family health, education, and nutrition, creating multiplier effects for poverty reduction."
    },
    {
      id: "g11_civ_u7_m10",
      question: "How do gender norms affect health outcomes?",
      options: ["No effect on health", "Gender norms influence health-seeking behavior, nutrition access, and exposure to risks differently for men and women", "Only biological sex affects health", "Gender norms only affect mental health"],
      correct: "Gender norms influence health-seeking behavior, nutrition access, and exposure to risks differently for men and women",
      difficulty: "Medium",
      explanation: "Gender norms affect health through dietary preferences, healthcare access, risk-taking behavior, reproductive health decisions, and exposure to violence."
    },
    // Hard
    {
      id: "g11_civ_u7_h1",
      question: "Analyze how intersectionality affects women's experiences of inequality in Ethiopia.",
      options: ["Intersectionality is irrelevant", "Women experience compounded disadvantage based on the intersection of gender with ethnicity, class, disability, and location", "All women have identical experiences", "Only gender matters"],
      correct: "Women experience compounded disadvantage based on the intersection of gender with ethnicity, class, disability, and location",
      difficulty: "Hard",
      explanation: "Intersectionality reveals that women's experiences vary based on overlapping identities — rural, disabled, or minority women may face compounded forms of discrimination."
    },
    {
      id: "g11_civ_u7_h2",
      question: "Evaluate the effectiveness of legal reforms in achieving substantive gender equality in Ethiopia.",
      options: ["Laws are completely effective", "Legal reforms are necessary but insufficient without cultural change, enforcement, and institutional support", "Laws have no effect", "Only cultural change matters"],
      correct: "Legal reforms are necessary but insufficient without cultural change, enforcement, and institutional support",
      difficulty: "Hard",
      explanation: "While legal reforms establish formal equality, achieving substantive equality requires complementary cultural transformation, effective enforcement, and institutional capacity."
    },
    {
      id: "g11_civ_u7_h3",
      question: "How does the feminization of poverty manifest in developing countries like Ethiopia?",
      options: ["Poverty affects men and women equally", "Women disproportionately experience poverty due to unequal access to resources, employment, and education", "Only men experience poverty", "Feminization of poverty is a myth"],
      correct: "Women disproportionately experience poverty due to unequal access to resources, employment, and education",
      difficulty: "Hard",
      explanation: "The feminization of poverty refers to women's disproportionate representation among the poor, driven by unequal resource access, unpaid care work, and limited opportunities."
    },
    {
      id: "g11_civ_u7_h4",
      question: "What is the relationship between gender equality and democratic governance?",
      options: ["No relationship exists", "Gender equality strengthens democracy by ensuring full participation and representation of all citizens", "Democracy doesn't need gender equality", "Gender equality weakens democracy"],
      correct: "Gender equality strengthens democracy by ensuring full participation and representation of all citizens",
      difficulty: "Hard",
      explanation: "Gender equality enhances democratic quality by ensuring women's full political participation, diverse representation, and policies that serve the entire population."
    },
    {
      id: "g11_civ_u7_h5",
      question: "How do patriarchal structures interact with ethnic federalism to affect women's rights?",
      options: ["No interaction exists", "Patriarchal norms within ethnic communities may be reinforced by ethnic self-governance structures", "Ethnic federalism eliminates patriarchy", "Patriarchy only exists at the federal level"],
      correct: "Patriarchal norms within ethnic communities may be reinforced by ethnic self-governance structures",
      difficulty: "Hard",
      explanation: "Ethnic self-governance may reinforce local patriarchal practices, and cultural autonomy claims can sometimes be used to resist gender equality reforms."
    },
    {
      id: "g11_civ_u7_h6",
      question: "Critically assess the impact of microfinance on women's empowerment in Ethiopia.",
      options: ["Microfinance always empowers women", "It can increase economic autonomy but may also increase debt burden without accompanying support systems", "Microfinance has no effect on women", "Only large loans empower women"],
      correct: "It can increase economic autonomy but may also increase debt burden without accompanying support systems",
      difficulty: "Hard",
      explanation: "Microfinance can empower women economically but requires complementary training, market access, and support to avoid creating debt traps or increasing household tensions."
    },
    {
      id: "g11_civ_u7_h7",
      question: "How does climate change disproportionately affect women in agricultural communities?",
      options: ["Climate change affects everyone equally", "Women's agricultural roles, limited resources, and restricted mobility make them more vulnerable to climate impacts", "Only men are affected by climate change", "Climate change improves women's conditions"],
      correct: "Women's agricultural roles, limited resources, and restricted mobility make them more vulnerable to climate impacts",
      difficulty: "Hard",
      explanation: "Women in agricultural communities bear greater climate change impacts due to their dependence on natural resources, limited adaptive capacity, and restricted access to information and mobility."
    },
    {
      id: "g11_civ_u7_h8",
      question: "Analyze the tension between cultural rights and women's rights in the context of harmful traditional practices.",
      options: ["No tension exists", "Protecting cultural practices may conflict with eliminating harmful traditions, requiring rights-based approaches that respect culture while protecting individuals", "Culture always overrides individual rights", "All traditions should be eliminated"],
      correct: "Protecting cultural practices may conflict with eliminating harmful traditions, requiring rights-based approaches that respect culture while protecting individuals",
      difficulty: "Hard",
      explanation: "The tension between cultural rights and women's rights requires nuanced approaches that engage communities, promote dialogue, and prioritize individual protection."
    },
    {
      id: "g11_civ_u7_h9",
      question: "What structural changes are needed to achieve gender parity in Ethiopian political institutions?",
      options: ["No changes needed", "Electoral reforms, party quotas, capacity building, and addressing cultural barriers to women's political participation", "Only quotas are needed", "Women don't want political roles"],
      correct: "Electoral reforms, party quotas, capacity building, and addressing cultural barriers to women's political participation",
      difficulty: "Hard",
      explanation: "Achieving political gender parity requires multi-pronged approaches including electoral system reform, mandatory quotas, leadership training, and cultural norm transformation."
    },
    {
      id: "g11_civ_u7_h10",
      question: "How does the digital gender divide affect women's access to opportunities in Ethiopia?",
      options: ["No digital gender divide exists", "Women's lower access to technology limits their educational, economic, and civic participation opportunities", "Women use more technology than men", "Technology has no effect on gender equality"],
      correct: "Women's lower access to technology limits their educational, economic, and civic participation opportunities",
      difficulty: "Hard",
      explanation: "The digital gender divide means women have less access to internet, phones, and digital literacy, limiting their ability to access information, services, and economic opportunities."
    }
  ],

  "Unit 8: Conflict Resolution and Peace Building": [
    // Easy
    {
      id: "g11_civ_u8_e1",
      question: "What is conflict?",
      options: ["Agreement between parties", "A disagreement or clash between individuals or groups", "A type of law", "A peaceful process"],
      correct: "A disagreement or clash between individuals or groups",
      difficulty: "Easy",
      explanation: "Conflict is a disagreement or incompatibility between individuals, groups, or nations regarding interests, values, or needs."
    },
    {
      id: "g11_civ_u8_e2",
      question: "What is peace?",
      options: ["Absence of war only", "A state of harmony, security, and the absence of violence", "Military dominance", "Isolation from others"],
      correct: "A state of harmony, security, and the absence of violence",
      difficulty: "Easy",
      explanation: "Peace is a state of harmony characterized by the absence of violence, the presence of justice, and conditions for human flourishing."
    },
    {
      id: "g11_civ_u8_e3",
      question: "What is negotiation?",
      options: ["Fighting", "Discussion between parties to reach an agreement", "Avoiding the problem", "Court proceedings"],
      correct: "Discussion between parties to reach an agreement",
      difficulty: "Easy",
      explanation: "Negotiation is a dialogue between conflicting parties aimed at reaching a mutually acceptable agreement."
    },
    {
      id: "g11_civ_u8_e4",
      question: "What is mediation?",
      options: ["A court trial", "A process where a neutral third party helps resolve conflict", "Military intervention", "Ignoring the conflict"],
      correct: "A process where a neutral third party helps resolve conflict",
      difficulty: "Easy",
      explanation: "Mediation involves a neutral third party facilitating communication and negotiation between conflicting parties to help them reach agreement."
    },
    {
      id: "g11_civ_u8_e5",
      question: "What is a compromise?",
      options: ["One side winning completely", "Both sides making concessions to reach agreement", "Avoiding the issue", "Using force"],
      correct: "Both sides making concessions to reach agreement",
      difficulty: "Easy",
      explanation: "Compromise is a resolution where each party makes concessions, meeting somewhere in the middle to reach a mutually acceptable outcome."
    },
    {
      id: "g11_civ_u8_e6",
      question: "What is tolerance?",
      options: ["Accepting everything without question", "Willingness to accept differences and coexist peacefully", "Weakness", "Ignoring problems"],
      correct: "Willingness to accept differences and coexist peacefully",
      difficulty: "Easy",
      explanation: "Tolerance is the willingness to accept and respect differences in opinions, beliefs, and practices, enabling peaceful coexistence."
    },
    {
      id: "g11_civ_u8_e7",
      question: "What is arbitration?",
      options: ["A friendly discussion", "A process where a third party makes a binding decision to resolve a dispute", "Avoiding conflict", "A political campaign"],
      correct: "A process where a third party makes a binding decision to resolve a dispute",
      difficulty: "Easy",
      explanation: "Arbitration involves a neutral third party hearing both sides and making a binding decision to resolve the dispute."
    },
    {
      id: "g11_civ_u8_e8",
      question: "What causes most conflicts?",
      options: ["Bad weather", "Competition over resources, power, identity, and values", "Too much peace", "Natural disasters only"],
      correct: "Competition over resources, power, identity, and values",
      difficulty: "Easy",
      explanation: "Conflicts commonly arise from competition over scarce resources, power struggles, identity differences, and clashes in values or beliefs."
    },
    {
      id: "g11_civ_u8_e9",
      question: "What is dialogue?",
      options: ["Shouting at each other", "Open and honest conversation between parties to understand each other", "A type of punishment", "Writing letters"],
      correct: "Open and honest conversation between parties to understand each other",
      difficulty: "Easy",
      explanation: "Dialogue is a constructive conversation aimed at understanding different perspectives and finding common ground."
    },
    {
      id: "g11_civ_u8_e10",
      question: "What is peacebuilding?",
      options: ["Building military bases", "Activities aimed at preventing conflict and creating lasting peace", "Temporary ceasefire", "Ignoring past conflicts"],
      correct: "Activities aimed at preventing conflict and creating lasting peace",
      difficulty: "Easy",
      explanation: "Peacebuilding encompasses activities designed to reduce the risk of conflict, strengthen institutions, and create conditions for sustainable peace."
    },
    // Medium
    {
      id: "g11_civ_u8_m1",
      question: "What is the difference between positive peace and negative peace?",
      options: ["No difference", "Negative peace is absence of violence; positive peace includes justice, equity, and social well-being", "Positive peace means no conflict ever", "Negative peace is worse"],
      correct: "Negative peace is absence of violence; positive peace includes justice, equity, and social well-being",
      difficulty: "Medium",
      explanation: "Negative peace is simply the absence of direct violence, while positive peace includes social justice, equity, and conditions that address root causes of conflict."
    },
    {
      id: "g11_civ_u8_m2",
      question: "What are traditional Ethiopian conflict resolution mechanisms?",
      options: ["They don't exist", "Systems like Shimglina, Jaarsummaa, and elder councils that resolve disputes through customary practices", "Only modern courts", "Foreign mediation only"],
      correct: "Systems like Shimglina, Jaarsummaa, and elder councils that resolve disputes through customary practices",
      difficulty: "Medium",
      explanation: "Ethiopia has rich traditional conflict resolution mechanisms including Shimglina (Amhara), Jaarsummaa (Oromo), and other elder-based systems that complement formal justice."
    },
    {
      id: "g11_civ_u8_m3",
      question: "What is conflict transformation?",
      options: ["Making conflict worse", "Changing the conditions that cause conflict and building constructive relationships", "Ending all disagreements", "Military victory"],
      correct: "Changing the conditions that cause conflict and building constructive relationships",
      difficulty: "Medium",
      explanation: "Conflict transformation goes beyond resolution to address underlying causes, change destructive patterns, and build new, constructive relationships between parties."
    },
    {
      id: "g11_civ_u8_m4",
      question: "How does poverty contribute to conflict?",
      options: ["Poverty doesn't cause conflict", "Poverty creates competition for scarce resources, grievances, and vulnerability to manipulation", "Only wealthy societies have conflict", "Poverty prevents conflict"],
      correct: "Poverty creates competition for scarce resources, grievances, and vulnerability to manipulation",
      difficulty: "Medium",
      explanation: "Poverty intensifies resource competition, creates social grievances, reduces opportunity costs of violence, and makes populations vulnerable to conflict entrepreneurs."
    },
    {
      id: "g11_civ_u8_m5",
      question: "What is the role of education in peace building?",
      options: ["Education doesn't affect peace", "Education develops critical thinking, empathy, and conflict resolution skills", "Only military training ensures peace", "Education creates conflict"],
      correct: "Education develops critical thinking, empathy, and conflict resolution skills",
      difficulty: "Medium",
      explanation: "Peace education develops critical thinking, empathy, intercultural understanding, and non-violent conflict resolution skills essential for sustainable peace."
    },
    {
      id: "g11_civ_u8_m6",
      question: "What is early warning and early response in conflict prevention?",
      options: ["Weather forecasting", "Systems that detect signs of impending conflict and trigger preventive action", "Military intelligence", "Economic forecasting"],
      correct: "Systems that detect signs of impending conflict and trigger preventive action",
      difficulty: "Medium",
      explanation: "Early warning systems monitor indicators of rising tension and trigger timely responses to prevent conflict escalation."
    },
    {
      id: "g11_civ_u8_m7",
      question: "How do religious institutions contribute to peace building in Ethiopia?",
      options: ["They cause all conflicts", "They promote interfaith dialogue, moral values, and community reconciliation", "They have no role", "They only support one group"],
      correct: "They promote interfaith dialogue, moral values, and community reconciliation",
      difficulty: "Medium",
      explanation: "Religious institutions in Ethiopia promote peace through interfaith dialogue, moral teaching, community mediation, and providing neutral spaces for reconciliation."
    },
    {
      id: "g11_civ_u8_m8",
      question: "What is restorative justice?",
      options: ["Punishing offenders severely", "A approach focusing on healing victims, rehabilitating offenders, and restoring community relationships", "Ignoring crimes", "Revenge-based justice"],
      correct: "A approach focusing on healing victims, rehabilitating offenders, and restoring community relationships",
      difficulty: "Medium",
      explanation: "Restorative justice focuses on repairing harm through dialogue between victims and offenders, accountability, and community healing rather than purely punitive measures."
    },
    {
      id: "g11_civ_u8_m9",
      question: "What is the role of women in peace building?",
      options: ["Women have no role in peace", "Women play crucial roles as mediators, community builders, and advocates for non-violent solutions", "Only men can build peace", "Women only suffer in conflict"],
      correct: "Women play crucial roles as mediators, community builders, and advocates for non-violent solutions",
      difficulty: "Medium",
      explanation: "Women contribute to peacebuilding through community mediation, cross-conflict-line networking, advocacy for peace agreements that address social needs, and post-conflict reconstruction."
    },
    {
      id: "g11_civ_u8_m10",
      question: "How does misinformation contribute to conflict?",
      options: ["Misinformation doesn't affect conflict", "False information inflames tensions, dehumanizes opponents, and prevents rational dialogue", "Only true information causes conflict", "Media has no role in conflict"],
      correct: "False information inflames tensions, dehumanizes opponents, and prevents rational dialogue",
      difficulty: "Medium",
      explanation: "Misinformation and hate speech can escalate tensions, create fear and distrust between groups, and undermine peaceful conflict resolution efforts."
    },
    // Hard
    {
      id: "g11_civ_u8_h1",
      question: "Analyze the effectiveness of Ethiopia's traditional conflict resolution in addressing modern inter-ethnic conflicts.",
      options: ["Traditional methods are always effective", "They have strengths in community acceptance but may lack enforcement power and may not address systemic causes", "They are completely ineffective", "Only formal courts can resolve ethnic conflicts"],
      correct: "They have strengths in community acceptance but may lack enforcement power and may not address systemic causes",
      difficulty: "Hard",
      explanation: "Traditional mechanisms offer cultural legitimacy and community acceptance but may struggle with power imbalances, enforcement, and addressing structural causes of modern conflicts."
    },
    {
      id: "g11_civ_u8_h2",
      question: "How does the concept of structural violence relate to peace building in Ethiopia?",
      options: ["Structural violence doesn't exist", "Inequitable social structures that harm people constitute violence and must be addressed for lasting peace", "Only physical violence matters", "Structural issues are natural"],
      correct: "Inequitable social structures that harm people constitute violence and must be addressed for lasting peace",
      difficulty: "Hard",
      explanation: "Structural violence—harm caused by unjust social, political, and economic structures—must be addressed alongside direct violence for genuine, positive peace."
    },
    {
      id: "g11_civ_u8_h3",
      question: "Evaluate the role of power asymmetry in conflict resolution processes.",
      options: ["Power differences don't matter", "Power imbalances can lead to unfair outcomes unless the process explicitly addresses them", "The stronger party should always win", "Power is irrelevant to peace"],
      correct: "Power imbalances can lead to unfair outcomes unless the process explicitly addresses them",
      difficulty: "Hard",
      explanation: "Power asymmetries between conflicting parties can lead to coerced agreements that don't address legitimate grievances, requiring mediators to level the playing field."
    },
    {
      id: "g11_civ_u8_h4",
      question: "What is the relationship between justice and reconciliation in post-conflict societies?",
      options: ["They are always compatible", "Pursuing justice may complicate reconciliation; both must be balanced for sustainable peace", "Justice prevents reconciliation", "Reconciliation means ignoring justice"],
      correct: "Pursuing justice may complicate reconciliation; both must be balanced for sustainable peace",
      difficulty: "Hard",
      explanation: "Post-conflict societies face tensions between pursuing accountability for past wrongs and building reconciliation, requiring careful balancing through mechanisms like truth commissions."
    },
    {
      id: "g11_civ_u8_h5",
      question: "How do natural resources contribute to conflict dynamics in the Horn of Africa?",
      options: ["Resources don't cause conflict", "Competition over land, water, and minerals drives conflicts, complicated by climate change and population growth", "Resource abundance prevents conflict", "Only political factors cause conflict"],
      correct: "Competition over land, water, and minerals drives conflicts, complicated by climate change and population growth",
      difficulty: "Hard",
      explanation: "Resource scarcity, particularly land and water, drives conflicts in the Horn of Africa, exacerbated by climate change, population growth, and weak governance."
    },
    {
      id: "g11_civ_u8_h6",
      question: "Critically assess the role of international organizations in Ethiopian conflict resolution.",
      options: ["International organizations solve all conflicts", "They provide resources and mediation but may lack contextual understanding and face sovereignty concerns", "They have no role", "They always make conflicts worse"],
      correct: "They provide resources and mediation but may lack contextual understanding and face sovereignty concerns",
      difficulty: "Hard",
      explanation: "International organizations offer valuable resources and expertise but may face challenges of local context understanding, sovereignty sensitivities, and competing geopolitical interests."
    },
    {
      id: "g11_civ_u8_h7",
      question: "How does the politicization of identity contribute to conflict escalation?",
      options: ["Identity is never political", "When political actors mobilize ethnic or religious identities for political gain, it can deepen divisions and escalate conflict", "Political identity always promotes peace", "Only economic factors escalate conflict"],
      correct: "When political actors mobilize ethnic or religious identities for political gain, it can deepen divisions and escalate conflict",
      difficulty: "Hard",
      explanation: "Political exploitation of identity—using ethnic, religious, or clan differences for political mobilization—can transform manageable differences into violent confrontations."
    },
    {
      id: "g11_civ_u8_h8",
      question: "What are the challenges of implementing disarmament, demobilization, and reintegration (DDR) programs?",
      options: ["DDR is simple and always works", "Challenges include trust deficits, economic reintegration of former combatants, and community acceptance", "DDR is unnecessary", "Only disarmament matters"],
      correct: "Challenges include trust deficits, economic reintegration of former combatants, and community acceptance",
      difficulty: "Hard",
      explanation: "DDR programs face challenges including building trust, creating economic opportunities for ex-combatants, community reconciliation, and preventing re-recruitment."
    },
    {
      id: "g11_civ_u8_h9",
      question: "How does the concept of human security expand traditional approaches to peace building?",
      options: ["It narrows the focus", "It broadens security from state-centered military concerns to include economic, food, health, environmental, and community security", "Human security is identical to national security", "Only military security matters"],
      correct: "It broadens security from state-centered military concerns to include economic, food, health, environmental, and community security",
      difficulty: "Hard",
      explanation: "Human security expands peace building beyond military concerns to address economic insecurity, food insecurity, health threats, and environmental degradation as peace threats."
    },
    {
      id: "g11_civ_u8_h10",
      question: "Analyze how social media both enables and challenges peace building efforts.",
      options: ["Social media only helps peace", "It can facilitate peace communication and coordination but also spread misinformation and hate speech rapidly", "Social media only causes conflict", "Technology is irrelevant to peace"],
      correct: "It can facilitate peace communication and coordination but also spread misinformation and hate speech rapidly",
      difficulty: "Hard",
      explanation: "Social media enables rapid peace mobilization, cross-community dialogue, and awareness, but also facilitates misinformation, hate speech, and conflict incitement at scale."
    }
  ],

  "Unit 9: Good Governance": [
    // Easy
    {
      id: "g11_civ_u9_e1",
      question: "What is good governance?",
      options: ["Any form of government", "Governing that is accountable, transparent, responsive, and follows rule of law", "Military rule", "Hereditary leadership"],
      correct: "Governing that is accountable, transparent, responsive, and follows rule of law",
      difficulty: "Easy",
      explanation: "Good governance encompasses accountability, transparency, responsiveness, rule of law, participation, and effectiveness in managing public affairs."
    },
    {
      id: "g11_civ_u9_e2",
      question: "What is accountability in governance?",
      options: ["Hiding information from citizens", "Government officials being answerable for their actions and decisions", "Counting money", "Writing reports only"],
      correct: "Government officials being answerable for their actions and decisions",
      difficulty: "Easy",
      explanation: "Accountability means government officials must explain and justify their decisions and actions to the public and face consequences for failures."
    },
    {
      id: "g11_civ_u9_e3",
      question: "What is public participation in governance?",
      options: ["Only voting", "Citizens' involvement in decision-making processes that affect them", "Watching TV news", "Paying taxes only"],
      correct: "Citizens' involvement in decision-making processes that affect them",
      difficulty: "Easy",
      explanation: "Public participation includes various ways citizens engage in governance beyond voting, such as public hearings, consultations, and community involvement."
    },
    {
      id: "g11_civ_u9_e4",
      question: "What is efficiency in governance?",
      options: ["Spending as much as possible", "Using resources wisely to achieve maximum results", "Moving slowly", "Creating bureaucracy"],
      correct: "Using resources wisely to achieve maximum results",
      difficulty: "Easy",
      explanation: "Efficiency in governance means using public resources optimally to produce the best possible outcomes for citizens."
    },
    {
      id: "g11_civ_u9_e5",
      question: "What is responsiveness in governance?",
      options: ["Ignoring citizens' needs", "Government addressing the needs and concerns of citizens in a timely manner", "Only responding to the wealthy", "Responding to international pressure"],
      correct: "Government addressing the needs and concerns of citizens in a timely manner",
      difficulty: "Easy",
      explanation: "Responsiveness means government institutions serve citizens' needs and concerns promptly and effectively."
    },
    {
      id: "g11_civ_u9_e6",
      question: "What is a public service?",
      options: ["Private business", "Services provided by the government for the benefit of citizens", "Military operations", "Personal favors"],
      correct: "Services provided by the government for the benefit of citizens",
      difficulty: "Easy",
      explanation: "Public services are services provided by government or government-funded entities for the benefit of all citizens, such as education, health, and infrastructure."
    },
    {
      id: "g11_civ_u9_e7",
      question: "What is bureaucracy?",
      options: ["A type of democracy", "The administrative system of government with organized hierarchy and procedures", "A political party", "A form of corruption"],
      correct: "The administrative system of government with organized hierarchy and procedures",
      difficulty: "Easy",
      explanation: "Bureaucracy is the system of administration through government departments managed by appointed officials following established procedures."
    },
    {
      id: "g11_civ_u9_e8",
      question: "What is the Ombudsman institution?",
      options: ["A court of law", "An independent body that investigates citizen complaints against government", "A political party", "A military unit"],
      correct: "An independent body that investigates citizen complaints against government",
      difficulty: "Easy",
      explanation: "The Ombudsman (Institution of the Ombudsman in Ethiopia) investigates citizen complaints against government maladministration and protects citizens' rights."
    },
    {
      id: "g11_civ_u9_e9",
      question: "What does 'equity' mean in governance?",
      options: ["Everyone gets the same thing", "Fair treatment considering different needs and circumstances", "Only majority interests matter", "Economic equality only"],
      correct: "Fair treatment considering different needs and circumstances",
      difficulty: "Easy",
      explanation: "Equity in governance means treating people fairly by considering their different needs, circumstances, and historical disadvantages."
    },
    {
      id: "g11_civ_u9_e10",
      question: "What is the purpose of auditing in government?",
      options: ["To collect taxes", "To examine and verify government financial records and activities", "To punish officials", "To create budgets"],
      correct: "To examine and verify government financial records and activities",
      difficulty: "Easy",
      explanation: "Government auditing examines financial records and activities to ensure public funds are used properly, legally, and efficiently."
    },
    // Medium
    {
      id: "g11_civ_u9_m1",
      question: "How does decentralization contribute to good governance?",
      options: ["It doesn't contribute", "It brings government closer to people, improves responsiveness, and allows local solutions", "It creates chaos", "It only benefits the capital city"],
      correct: "It brings government closer to people, improves responsiveness, and allows local solutions",
      difficulty: "Medium",
      explanation: "Decentralization brings decision-making closer to citizens, enables locally appropriate solutions, improves service delivery, and enhances democratic participation."
    },
    {
      id: "g11_civ_u9_m2",
      question: "What is the role of the Auditor General in Ethiopia?",
      options: ["To make laws", "To audit government accounts and report to parliament on the use of public funds", "To elect officials", "To command the military"],
      correct: "To audit government accounts and report to parliament on the use of public funds",
      difficulty: "Medium",
      explanation: "The Auditor General independently examines government financial operations and reports findings to the House of Peoples' Representatives to ensure accountability."
    },
    {
      id: "g11_civ_u9_m3",
      question: "How does e-governance improve public service delivery?",
      options: ["It has no effect", "It increases efficiency, reduces corruption, and improves citizen access to services", "It only benefits the wealthy", "It replaces government entirely"],
      correct: "It increases efficiency, reduces corruption, and improves citizen access to services",
      difficulty: "Medium",
      explanation: "E-governance uses technology to improve service delivery efficiency, reduce face-to-face corruption opportunities, and increase citizen access to government services."
    },
    {
      id: "g11_civ_u9_m4",
      question: "What is the relationship between good governance and economic development?",
      options: ["No relationship", "Good governance creates a stable, predictable environment that attracts investment and promotes development", "Good governance slows development", "Only economic growth matters"],
      correct: "Good governance creates a stable, predictable environment that attracts investment and promotes development",
      difficulty: "Medium",
      explanation: "Good governance provides rule of law, reduces corruption, ensures stable institutions, and creates the predictable environment necessary for sustainable economic development."
    },
    {
      id: "g11_civ_u9_m5",
      question: "What are the key indicators of poor governance?",
      options: ["High economic growth", "Corruption, lack of transparency, weak institutions, and unresponsive services", "Democratic elections", "Free press"],
      correct: "Corruption, lack of transparency, weak institutions, and unresponsive services",
      difficulty: "Medium",
      explanation: "Poor governance is characterized by corruption, lack of accountability, weak rule of law, unresponsive institutions, and exclusion of citizens from decision-making."
    },
    {
      id: "g11_civ_u9_m6",
      question: "How does citizen feedback improve governance?",
      options: ["It doesn't improve anything", "It provides information about service quality and helps government adjust policies", "Only experts should provide feedback", "Feedback creates confusion"],
      correct: "It provides information about service quality and helps government adjust policies",
      difficulty: "Medium",
      explanation: "Citizen feedback mechanisms help government identify service gaps, adjust policies, measure satisfaction, and continuously improve public service delivery."
    },
    {
      id: "g11_civ_u9_m7",
      question: "What is the concept of 'governance' versus 'government'?",
      options: ["They are identical", "Government is the institution; governance is the broader process involving government, civil society, and the private sector", "Government is a process", "Governance only involves officials"],
      correct: "Government is the institution; governance is the broader process involving government, civil society, and the private sector",
      difficulty: "Medium",
      explanation: "Government refers to formal state institutions, while governance encompasses the broader process of decision-making involving government, civil society, and private sector actors."
    },
    {
      id: "g11_civ_u9_m8",
      question: "How does consensus-oriented governance differ from majoritarian decision-making?",
      options: ["No difference", "Consensus seeks broad agreement among all stakeholders rather than simple majority rule", "Consensus means everyone agrees completely", "Majoritarian is always better"],
      correct: "Consensus seeks broad agreement among all stakeholders rather than simple majority rule",
      difficulty: "Medium",
      explanation: "Consensus-oriented governance seeks the broadest possible agreement through dialogue and negotiation, ensuring minority viewpoints are considered alongside majority preferences."
    },
    {
      id: "g11_civ_u9_m9",
      question: "What is the significance of freedom of information for good governance?",
      options: ["Information should be secret", "It enables citizen oversight, reduces corruption, and promotes informed participation", "Only government needs information", "Freedom of information causes instability"],
      correct: "It enables citizen oversight, reduces corruption, and promotes informed participation",
      difficulty: "Medium",
      explanation: "Freedom of information allows citizens to access government records, enabling oversight, reducing corruption, and supporting informed civic participation."
    },
    {
      id: "g11_civ_u9_m10",
      question: "What is the role of independent regulatory bodies in good governance?",
      options: ["They are unnecessary", "They provide impartial oversight of specific sectors, preventing abuse and ensuring standards", "They only help businesses", "They replace the government"],
      correct: "They provide impartial oversight of specific sectors, preventing abuse and ensuring standards",
      difficulty: "Medium",
      explanation: "Independent regulatory bodies provide specialized, impartial oversight of sectors like banking, telecoms, and utilities, ensuring fair practices and protecting public interest."
    },
    // Hard
    {
      id: "g11_civ_u9_h1",
      question: "Analyze the challenges of implementing good governance in a developing federal system like Ethiopia.",
      options: ["No challenges exist", "Capacity limitations, coordination between levels of government, corruption, and balancing autonomy with accountability", "Good governance is impossible in developing countries", "Only wealthy countries face challenges"],
      correct: "Capacity limitations, coordination between levels of government, corruption, and balancing autonomy with accountability",
      difficulty: "Hard",
      explanation: "Challenges include building institutional capacity at all levels, coordinating federal-regional relations, combating corruption, and ensuring accountability within decentralized structures."
    },
    {
      id: "g11_civ_u9_h2",
      question: "How does the concept of 'developmental state' interact with principles of good governance?",
      options: ["They are fully compatible", "Developmental state approaches may prioritize economic growth over democratic governance principles, creating tensions", "They are completely opposed", "Developmental states don't need governance"],
      correct: "Developmental state approaches may prioritize economic growth over democratic governance principles, creating tensions",
      difficulty: "Hard",
      explanation: "Developmental state models, emphasizing state-led economic growth, may sometimes conflict with governance principles like full transparency and civil liberties, requiring careful balancing."
    },
    {
      id: "g11_civ_u9_h3",
      question: "Evaluate the effectiveness of anti-corruption strategies in improving governance outcomes.",
      options: ["All strategies are equally effective", "Effective strategies combine prevention, enforcement, and institutional reform; piecemeal approaches often fail", "Only punishment works", "Anti-corruption efforts are unnecessary"],
      correct: "Effective strategies combine prevention, enforcement, and institutional reform; piecemeal approaches often fail",
      difficulty: "Hard",
      explanation: "Successful anti-corruption requires comprehensive approaches combining preventive measures, effective enforcement, institutional reforms, and cultural change rather than isolated interventions."
    },
    {
      id: "g11_civ_u9_h4",
      question: "How does fiscal federalism affect the quality of governance at subnational levels?",
      options: ["Fiscal arrangements don't affect governance", "Revenue allocation and fiscal autonomy significantly impact regional governments' capacity and accountability", "Only federal governance matters", "Subnational governments don't need resources"],
      correct: "Revenue allocation and fiscal autonomy significantly impact regional governments' capacity and accountability",
      difficulty: "Hard",
      explanation: "Fiscal federalism—how revenue is collected, shared, and spent across government levels—directly affects subnational capacity, accountability, and service delivery quality."
    },
    {
      id: "g11_civ_u9_h5",
      question: "What is the relationship between governance quality and social trust?",
      options: ["No relationship exists", "Good governance builds social trust, which in turn enables better governance in a virtuous cycle", "Trust doesn't affect governance", "Only economic factors build trust"],
      correct: "Good governance builds social trust, which in turn enables better governance in a virtuous cycle",
      difficulty: "Hard",
      explanation: "Good governance builds citizen trust in institutions, which increases cooperation, tax compliance, and civic participation, further improving governance in a positive feedback loop."
    },
    {
      id: "g11_civ_u9_h6",
      question: "Critically assess the role of civil service reform in improving governance in Ethiopia.",
      options: ["Civil service reform is unnecessary", "Reform must address meritocracy, capacity building, compensation, and political neutrality to improve governance", "Only structural changes matter", "The civil service is functioning perfectly"],
      correct: "Reform must address meritocracy, capacity building, compensation, and political neutrality to improve governance",
      difficulty: "Hard",
      explanation: "Civil service reform requires merit-based recruitment, continuous capacity building, competitive compensation, and ensuring political neutrality to improve governance effectiveness."
    },
    {
      id: "g11_civ_u9_h7",
      question: "How do informal governance networks affect formal governance institutions in Ethiopia?",
      options: ["Informal networks don't exist", "Patron-client networks and traditional authorities can undermine or complement formal institutions depending on context", "Informal networks always help", "Only formal institutions matter"],
      correct: "Patron-client networks and traditional authorities can undermine or complement formal institutions depending on context",
      difficulty: "Hard",
      explanation: "Informal networks including patronage systems, kinship ties, and traditional authorities can either undermine formal governance through corruption or complement it through local legitimacy."
    },
    {
      id: "g11_civ_u9_h8",
      question: "What are the governance implications of rapid urbanization in Ethiopia?",
      options: ["Urbanization has no governance implications", "It creates demands for expanded services, land management, environmental protection, and inclusive planning", "Urbanization improves governance automatically", "Only rural governance matters"],
      correct: "It creates demands for expanded services, land management, environmental protection, and inclusive planning",
      difficulty: "Hard",
      explanation: "Rapid urbanization requires governance responses including expanded service delivery, land use management, environmental protection, and inclusive urban planning and governance."
    },
    {
      id: "g11_civ_u9_h9",
      question: "How does the quality of governance affect the achievement of Sustainable Development Goals?",
      options: ["Governance doesn't affect SDGs", "Good governance is a prerequisite for achieving SDGs through effective resource management and inclusive policies", "Only economic growth achieves SDGs", "SDGs don't require governance"],
      correct: "Good governance is a prerequisite for achieving SDGs through effective resource management and inclusive policies",
      difficulty: "Hard",
      explanation: "SDG achievement requires good governance for effective resource mobilization, equitable distribution, policy implementation, and monitoring—making SDG 16 foundational for all others."
    },
    {
      id: "g11_civ_u9_h10",
      question: "Analyze the paradox of building capable state institutions while also limiting state power.",
      options: ["No paradox exists", "Effective governance requires strong institutions with the capacity to deliver, but also checks to prevent abuse of that capacity", "States should have unlimited power", "Weak states are always better"],
      correct: "Effective governance requires strong institutions with the capacity to deliver, but also checks to prevent abuse of that capacity",
      difficulty: "Hard",
      explanation: "The governance paradox requires building institutions strong enough to deliver services and maintain order, while simultaneously establishing checks and balances to prevent authoritarian overreach."
    }
  ],

  "Unit 10: Economic Rights and Financial Literacy": [
    // Easy
    {
      id: "g11_civ_u10_e1",
      question: "What are economic rights?",
      options: ["Rights to govern others", "Rights related to work, livelihood, and economic well-being", "Military rights", "Only property rights"],
      correct: "Rights related to work, livelihood, and economic well-being",
      difficulty: "Easy",
      explanation: "Economic rights include rights to work, fair wages, social security, adequate standard of living, and other conditions for economic well-being."
    },
    {
      id: "g11_civ_u10_e2",
      question: "What is financial literacy?",
      options: ["Being wealthy", "Understanding how to manage money and make informed financial decisions", "Reading financial newspapers", "Working in a bank"],
      correct: "Understanding how to manage money and make informed financial decisions",
      difficulty: "Easy",
      explanation: "Financial literacy is the ability to understand and effectively use financial skills including budgeting, saving, investing, and managing debt."
    },
    {
      id: "g11_civ_u10_e3",
      question: "What is a budget?",
      options: ["A type of bank", "A plan for how to spend and save money", "A government building", "A type of tax"],
      correct: "A plan for how to spend and save money",
      difficulty: "Easy",
      explanation: "A budget is a financial plan that outlines expected income and planned expenditures over a specific period."
    },
    {
      id: "g11_civ_u10_e4",
      question: "What is saving?",
      options: ["Spending all income", "Setting aside money for future use", "Borrowing money", "Wasting resources"],
      correct: "Setting aside money for future use",
      difficulty: "Easy",
      explanation: "Saving is the practice of setting aside a portion of income for future needs, emergencies, or investment."
    },
    {
      id: "g11_civ_u10_e5",
      question: "What is the right to work?",
      options: ["Forced labor", "The right to freely choose employment and receive fair wages", "Working without pay", "Only government jobs"],
      correct: "The right to freely choose employment and receive fair wages",
      difficulty: "Easy",
      explanation: "The right to work includes the right to freely choose or accept employment, receive fair compensation, and have safe working conditions."
    },
    {
      id: "g11_civ_u10_e6",
      question: "What is a tax?",
      options: ["A voluntary donation", "A compulsory payment to the government to fund public services", "A bank fee", "A type of investment"],
      correct: "A compulsory payment to the government to fund public services",
      difficulty: "Easy",
      explanation: "A tax is a mandatory financial charge imposed by the government on income, goods, or activities to fund public services and infrastructure."
    },
    {
      id: "g11_civ_u10_e7",
      question: "Why is paying taxes a civic responsibility?",
      options: ["It's not a responsibility", "Taxes fund public services like roads, schools, and healthcare that benefit everyone", "Only to avoid punishment", "Taxes go to individuals"],
      correct: "Taxes fund public services like roads, schools, and healthcare that benefit everyone",
      difficulty: "Easy",
      explanation: "Tax payment is a civic responsibility because taxes fund essential public services, infrastructure, and social programs that benefit all citizens."
    },
    {
      id: "g11_civ_u10_e8",
      question: "What is inflation?",
      options: ["Prices going down", "A general increase in prices and decrease in purchasing power", "More money in the economy", "A type of investment"],
      correct: "A general increase in prices and decrease in purchasing power",
      difficulty: "Easy",
      explanation: "Inflation is the rate at which the general level of prices for goods and services rises, reducing the purchasing power of money."
    },
    {
      id: "g11_civ_u10_e9",
      question: "What is entrepreneurship?",
      options: ["Working for the government", "Starting and running a business, taking financial risks for profit", "Being unemployed", "Only large companies"],
      correct: "Starting and running a business, taking financial risks for profit",
      difficulty: "Easy",
      explanation: "Entrepreneurship involves identifying business opportunities, creating and managing businesses, and taking calculated financial risks to generate profit."
    },
    {
      id: "g11_civ_u10_e10",
      question: "What is a bank account?",
      options: ["A loan", "A secure place to deposit and manage money at a financial institution", "A type of tax", "A government program"],
      correct: "A secure place to deposit and manage money at a financial institution",
      difficulty: "Easy",
      explanation: "A bank account is an arrangement with a financial institution to deposit, save, and manage money while earning interest."
    },
    // Medium
    {
      id: "g11_civ_u10_m1",
      question: "How does financial literacy contribute to poverty reduction?",
      options: ["It doesn't help", "It enables informed financial decisions, savings, and investment that build economic resilience", "Only income matters", "Financial literacy is only for the wealthy"],
      correct: "It enables informed financial decisions, savings, and investment that build economic resilience",
      difficulty: "Medium",
      explanation: "Financial literacy empowers individuals to budget effectively, save for emergencies, avoid predatory lending, and make investments that can lift them out of poverty."
    },
    {
      id: "g11_civ_u10_m2",
      question: "What is the relationship between economic rights and human development?",
      options: ["No relationship", "Economic rights enable access to resources needed for education, health, and full human development", "Only civil rights matter", "Economic growth automatically ensures rights"],
      correct: "Economic rights enable access to resources needed for education, health, and full human development",
      difficulty: "Medium",
      explanation: "Economic rights to adequate living standards, work, and social security provide the material foundation necessary for realizing other human rights and achieving development."
    },
    {
      id: "g11_civ_u10_m3",
      question: "What is consumer protection and why is it important?",
      options: ["It's unnecessary", "Laws and measures that safeguard buyers from fraudulent or unsafe products and practices", "Only businesses need protection", "Protection from competition"],
      correct: "Laws and measures that safeguard buyers from fraudulent or unsafe products and practices",
      difficulty: "Medium",
      explanation: "Consumer protection involves laws and organizations ensuring fair trade practices, product safety, and truthful advertising to protect buyers from exploitation."
    },
    {
      id: "g11_civ_u10_m4",
      question: "How do cooperatives promote economic rights in Ethiopia?",
      options: ["They don't help", "They pool resources, share risks, and provide members access to markets and services", "They only benefit the government", "Cooperatives are outdated"],
      correct: "They pool resources, share risks, and provide members access to markets and services",
      difficulty: "Medium",
      explanation: "Cooperatives enable members to pool resources, access credit, share risks, reach markets collectively, and exercise economic self-determination."
    },
    {
      id: "g11_civ_u10_m5",
      question: "What is the difference between formal and informal economy?",
      options: ["No difference", "Formal economy is regulated and taxed; informal economy operates outside official regulations", "Informal is always illegal", "Formal economy is always better"],
      correct: "Formal economy is regulated and taxed; informal economy operates outside official regulations",
      difficulty: "Medium",
      explanation: "The formal economy operates within government regulations and taxation, while the informal economy consists of unregistered, unregulated economic activities."
    },
    {
      id: "g11_civ_u10_m6",
      question: "What is microfinance and how does it support economic empowerment?",
      options: ["Large corporate loans", "Small-scale financial services for low-income individuals who lack access to traditional banking", "Government grants", "International aid only"],
      correct: "Small-scale financial services for low-income individuals who lack access to traditional banking",
      difficulty: "Medium",
      explanation: "Microfinance provides small loans, savings, and insurance services to low-income individuals, enabling them to start businesses and build economic independence."
    },
    {
      id: "g11_civ_u10_m7",
      question: "What is the role of government in protecting economic rights?",
      options: ["Government has no role", "Setting minimum wages, regulating working conditions, and providing social safety nets", "Government should control all economic activity", "Only the market protects rights"],
      correct: "Setting minimum wages, regulating working conditions, and providing social safety nets",
      difficulty: "Medium",
      explanation: "Government protects economic rights through minimum wage laws, labor regulations, social security systems, anti-discrimination policies, and safety net programs."
    },
    {
      id: "g11_civ_u10_m8",
      question: "How does investment differ from saving?",
      options: ["They are identical", "Saving preserves money; investment puts money to work for potentially higher returns with risk", "Investment is always better", "Saving has higher returns"],
      correct: "Saving preserves money; investment puts money to work for potentially higher returns with risk",
      difficulty: "Medium",
      explanation: "Saving stores money safely with low returns, while investment allocates money to assets or ventures with potential for higher returns but also carrying risk of loss."
    },
    {
      id: "g11_civ_u10_m9",
      question: "What are the economic implications of youth unemployment in Ethiopia?",
      options: ["No significant implications", "It wastes human potential, increases social instability, and slows economic growth", "Youth unemployment is natural", "Only adults need employment"],
      correct: "It wastes human potential, increases social instability, and slows economic growth",
      difficulty: "Medium",
      explanation: "Youth unemployment wastes productive potential, creates social frustration, may lead to instability, and prevents the demographic dividend from being realized."
    },
    {
      id: "g11_civ_u10_m10",
      question: "What is sustainable economic development?",
      options: ["Maximum growth at any cost", "Development that meets present needs without compromising future generations' ability to meet theirs", "Only environmental protection", "No economic growth"],
      correct: "Development that meets present needs without compromising future generations' ability to meet theirs",
      difficulty: "Medium",
      explanation: "Sustainable development balances economic growth, social inclusion, and environmental protection to ensure current and future generations can thrive."
    },
    // Hard
    {
      id: "g11_civ_u10_h1",
      question: "Analyze the challenges of progressive realization of economic rights in Ethiopia's development context.",
      options: ["No challenges exist", "Limited resources, competing priorities, institutional capacity, and the need to balance growth with equity", "Economic rights don't need progressive realization", "Only political rights matter"],
      correct: "Limited resources, competing priorities, institutional capacity, and the need to balance growth with equity",
      difficulty: "Hard",
      explanation: "Progressive realization of economic rights faces challenges of resource scarcity, competing development demands, limited institutional capacity, and balancing growth with equitable distribution."
    },
    {
      id: "g11_civ_u10_h2",
      question: "How does the informal economy both support and undermine economic rights?",
      options: ["It only supports rights", "It provides livelihoods but often lacks worker protections, fair wages, and social security", "It only undermines rights", "The informal economy doesn't exist in Ethiopia"],
      correct: "It provides livelihoods but often lacks worker protections, fair wages, and social security",
      difficulty: "Hard",
      explanation: "The informal economy provides income for millions but typically lacks labor protections, minimum wages, social security, and safe working conditions."
    },
    {
      id: "g11_civ_u10_h3",
      question: "Evaluate the impact of trade liberalization on economic rights in developing countries.",
      options: ["Always positive", "It can create economic opportunities but may also displace workers and increase inequality without proper safeguards", "Always negative", "Trade has no effect on rights"],
      correct: "It can create economic opportunities but may also displace workers and increase inequality without proper safeguards",
      difficulty: "Hard",
      explanation: "Trade liberalization can stimulate growth and create jobs but may also harm vulnerable sectors, increase inequality, and undermine local industries without transitional support."
    },
    {
      id: "g11_civ_u10_h4",
      question: "What is the relationship between financial inclusion and democratic participation?",
      options: ["No relationship", "Financial inclusion enables economic independence, which supports meaningful political participation", "Only political freedom matters", "Financial inclusion reduces political engagement"],
      correct: "Financial inclusion enables economic independence, which supports meaningful political participation",
      difficulty: "Hard",
      explanation: "Financial inclusion provides economic security and independence, which enables citizens to participate more freely in political processes without economic coercion."
    },
    {
      id: "g11_civ_u10_h5",
      question: "How do intellectual property rights balance innovation incentives with public access to knowledge?",
      options: ["They only benefit inventors", "They must balance rewarding creators with ensuring public access to knowledge and technology", "Public access should be unlimited", "IP rights are unnecessary"],
      correct: "They must balance rewarding creators with ensuring public access to knowledge and technology",
      difficulty: "Hard",
      explanation: "Intellectual property rights must balance incentivizing innovation through creator protections with ensuring public access to knowledge, medicines, and technology for development."
    },
    {
      id: "g11_civ_u10_h6",
      question: "Critically assess the role of foreign direct investment in realizing economic rights in Ethiopia.",
      options: ["FDI always helps economic rights", "FDI can create jobs and transfer technology but may also exploit workers and resources without proper regulation", "FDI has no effect", "Ethiopia doesn't receive FDI"],
      correct: "FDI can create jobs and transfer technology but may also exploit workers and resources without proper regulation",
      difficulty: "Hard",
      explanation: "FDI can promote economic rights through employment creation and technology transfer but requires strong regulation to prevent labor exploitation and resource extraction."
    },
    {
      id: "g11_civ_u10_h7",
      question: "How does climate change threaten economic rights, particularly in agricultural economies?",
      options: ["Climate change doesn't affect economic rights", "It threatens livelihoods through crop failure, displacement, and resource scarcity, disproportionately affecting the poor", "It only affects industrial economies", "Climate change improves agriculture"],
      correct: "It threatens livelihoods through crop failure, displacement, and resource scarcity, disproportionately affecting the poor",
      difficulty: "Hard",
      explanation: "Climate change threatens economic rights through agricultural disruption, water scarcity, displacement, and increased poverty, with the poorest and most vulnerable most affected."
    },
    {
      id: "g11_civ_u10_h8",
      question: "What are the ethical dimensions of debt and lending in the context of economic rights?",
      options: ["Debt has no ethical dimensions", "Predatory lending can trap people in poverty while responsible credit can promote development", "All debt is bad", "All lending is ethical"],
      correct: "Predatory lending can trap people in poverty while responsible credit can promote development",
      difficulty: "Hard",
      explanation: "The ethics of lending involve protecting borrowers from predatory practices while ensuring responsible credit access that promotes economic empowerment rather than debt traps."
    },
    {
      id: "g11_civ_u10_h9",
      question: "Analyze the impact of digital financial services on economic inclusion in Ethiopia.",
      options: ["Digital services have no impact", "They can expand access to financial services but may exclude those without digital literacy or connectivity", "They solve all financial inclusion problems", "Digital services only benefit banks"],
      correct: "They can expand access to financial services but may exclude those without digital literacy or connectivity",
      difficulty: "Hard",
      explanation: "Digital financial services (mobile banking, digital payments) can dramatically expand financial inclusion but may create a new digital divide excluding those without technology access."
    },
    {
      id: "g11_civ_u10_h10",
      question: "How should economic policy balance economic growth with equitable distribution of wealth?",
      options: ["Growth always trickles down", "Policies must intentionally promote both growth and equitable distribution through progressive taxation, social spending, and inclusive institutions", "Only distribution matters", "Growth and equity are always in conflict"],
      correct: "Policies must intentionally promote both growth and equitable distribution through progressive taxation, social spending, and inclusive institutions",
      difficulty: "Hard",
      explanation: "Effective economic policy requires deliberate measures to ensure growth benefits are broadly shared through progressive taxation, social protection, and inclusive economic institutions."
    }
  ],

  "Unit 11: Environmental Ethics and Sustainable Development": [
    // Easy
    {
      id: "g11_civ_u11_e1",
      question: "What is environmental ethics?",
      options: ["Ignoring the environment", "The study of moral relationships between humans and the natural environment", "Only about recycling", "A government department"],
      correct: "The study of moral relationships between humans and the natural environment",
      difficulty: "Easy",
      explanation: "Environmental ethics examines the moral relationship between humans and the natural world, including our responsibilities to protect the environment."
    },
    {
      id: "g11_civ_u11_e2",
      question: "What is sustainable development?",
      options: ["Unlimited economic growth", "Development meeting present needs without compromising future generations", "No development at all", "Only industrial development"],
      correct: "Development meeting present needs without compromising future generations",
      difficulty: "Easy",
      explanation: "Sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs."
    },
    {
      id: "g11_civ_u11_e3",
      question: "What is deforestation?",
      options: ["Planting trees", "The clearing of forests for other land uses", "Forest conservation", "A type of farming"],
      correct: "The clearing of forests for other land uses",
      difficulty: "Easy",
      explanation: "Deforestation is the permanent removal of trees and forests, typically for agriculture, logging, or urban development."
    },
    {
      id: "g11_civ_u11_e4",
      question: "What is pollution?",
      options: ["Clean air", "The introduction of harmful substances into the environment", "Natural weather", "A type of energy"],
      correct: "The introduction of harmful substances into the environment",
      difficulty: "Easy",
      explanation: "Pollution is the contamination of the natural environment by harmful substances including chemicals, waste, and emissions."
    },
    {
      id: "g11_civ_u11_e5",
      question: "What is biodiversity?",
      options: ["Having one type of plant", "The variety of living organisms in an ecosystem", "Only animal species", "A type of pollution"],
      correct: "The variety of living organisms in an ecosystem",
      difficulty: "Easy",
      explanation: "Biodiversity refers to the variety of life forms—plants, animals, and microorganisms—in a particular ecosystem or on Earth."
    },
    {
      id: "g11_civ_u11_e6",
      question: "What is recycling?",
      options: ["Throwing things away", "Converting waste materials into new products", "Burning trash", "Dumping in rivers"],
      correct: "Converting waste materials into new products",
      difficulty: "Easy",
      explanation: "Recycling is the process of collecting and processing waste materials to create new products, reducing waste and conserving resources."
    },
    {
      id: "g11_civ_u11_e7",
      question: "What is climate change?",
      options: ["Daily weather changes", "Long-term changes in global temperature and weather patterns", "A seasonal event", "Only affects polar regions"],
      correct: "Long-term changes in global temperature and weather patterns",
      difficulty: "Easy",
      explanation: "Climate change refers to significant, long-term changes in global average temperatures and weather patterns, largely driven by human activities."
    },
    {
      id: "g11_civ_u11_e8",
      question: "What are renewable energy sources?",
      options: ["Coal and oil", "Energy sources that naturally replenish like solar, wind, and hydropower", "Nuclear energy only", "Fossil fuels"],
      correct: "Energy sources that naturally replenish like solar, wind, and hydropower",
      difficulty: "Easy",
      explanation: "Renewable energy comes from naturally replenishing sources such as sunlight, wind, water, and geothermal heat."
    },
    {
      id: "g11_civ_u11_e9",
      question: "What is soil erosion?",
      options: ["Soil improvement", "The wearing away of topsoil by water, wind, or human activity", "Soil fertilization", "Building with soil"],
      correct: "The wearing away of topsoil by water, wind, or human activity",
      difficulty: "Easy",
      explanation: "Soil erosion is the removal of fertile topsoil by water, wind, or human activities like overgrazing and deforestation."
    },
    {
      id: "g11_civ_u11_e10",
      question: "Why should we protect the environment?",
      options: ["It's not important", "The environment provides essential resources for human survival and well-being", "Only for scenic beauty", "Protection is too expensive"],
      correct: "The environment provides essential resources for human survival and well-being",
      difficulty: "Easy",
      explanation: "Environmental protection is essential because the natural environment provides clean air, water, food, and other resources necessary for human survival and quality of life."
    },
    // Medium
    {
      id: "g11_civ_u11_m1",
      question: "What is the concept of intergenerational equity in environmental ethics?",
      options: ["Only current generation matters", "The responsibility to preserve the environment for future generations", "Future generations can solve their own problems", "An economic theory"],
      correct: "The responsibility to preserve the environment for future generations",
      difficulty: "Medium",
      explanation: "Intergenerational equity holds that the current generation has an ethical obligation to manage resources and protect the environment for the benefit of future generations."
    },
    {
      id: "g11_civ_u11_m2",
      question: "How does the 'polluter pays' principle work?",
      options: ["Taxpayers pay for pollution", "Those who cause pollution bear the costs of managing it and its environmental damage", "Pollution is free", "Only the government pays"],
      correct: "Those who cause pollution bear the costs of managing it and its environmental damage",
      difficulty: "Medium",
      explanation: "The polluter pays principle holds that those responsible for pollution should bear the costs of cleaning it up and compensating for environmental damage."
    },
    {
      id: "g11_civ_u11_m3",
      question: "What is the Green Legacy Initiative in Ethiopia?",
      options: ["A political party", "A national tree-planting campaign aimed at reforestation and environmental restoration", "An economic policy", "A military program"],
      correct: "A national tree-planting campaign aimed at reforestation and environmental restoration",
      difficulty: "Medium",
      explanation: "The Green Legacy Initiative is Ethiopia's national reforestation program aiming to plant billions of trees to combat deforestation and climate change."
    },
    {
      id: "g11_civ_u11_m4",
      question: "How does population growth affect environmental sustainability?",
      options: ["No effect", "Increasing population creates greater demand for resources and produces more waste and emissions", "More people always means better environment", "Only urbanization matters"],
      correct: "Increasing population creates greater demand for resources and produces more waste and emissions",
      difficulty: "Medium",
      explanation: "Population growth increases demand for food, water, energy, and land, leading to greater environmental pressure through resource extraction and waste generation."
    },
    {
      id: "g11_civ_u11_m5",
      question: "What are the Sustainable Development Goals (SDGs)?",
      options: ["National goals only", "17 global goals adopted by the UN to achieve a better and more sustainable future by 2030", "Only environmental goals", "Goals for wealthy countries only"],
      correct: "17 global goals adopted by the UN to achieve a better and more sustainable future by 2030",
      difficulty: "Medium",
      explanation: "The SDGs are 17 interconnected goals adopted by all UN member states in 2015 addressing poverty, inequality, climate change, and other global challenges."
    },
    {
      id: "g11_civ_u11_m6",
      question: "What is environmental impact assessment (EIA)?",
      options: ["A type of tax", "An evaluation of potential environmental effects of a proposed project before it is approved", "An environmental crime", "A cleaning process"],
      correct: "An evaluation of potential environmental effects of a proposed project before it is approved",
      difficulty: "Medium",
      explanation: "EIA is a systematic process for evaluating the environmental consequences of proposed projects or developments before they are undertaken."
    },
    {
      id: "g11_civ_u11_m7",
      question: "How does traditional ecological knowledge contribute to environmental conservation?",
      options: ["It's outdated and useless", "Indigenous knowledge about ecosystems can complement scientific approaches to conservation", "Only modern science matters", "Traditional knowledge harms the environment"],
      correct: "Indigenous knowledge about ecosystems can complement scientific approaches to conservation",
      difficulty: "Medium",
      explanation: "Traditional ecological knowledge accumulated over generations offers valuable insights about local ecosystems, sustainable practices, and biodiversity management."
    },
    {
      id: "g11_civ_u11_m8",
      question: "What is the concept of ecological footprint?",
      options: ["A shoe print in mud", "A measure of human demand on Earth's ecosystems and natural resources", "Only about carbon emissions", "A type of animal track"],
      correct: "A measure of human demand on Earth's ecosystems and natural resources",
      difficulty: "Medium",
      explanation: "Ecological footprint measures the amount of natural resources a person, community, or nation consumes relative to the Earth's capacity to regenerate those resources."
    },
    {
      id: "g11_civ_u11_m9",
      question: "How does waste management relate to environmental protection?",
      options: ["Waste management is unnecessary", "Proper waste management prevents pollution, conserves resources, and protects public health", "All waste should be burned", "Only industrial waste matters"],
      correct: "Proper waste management prevents pollution, conserves resources, and protects public health",
      difficulty: "Medium",
      explanation: "Effective waste management through reduction, reuse, recycling, and proper disposal prevents environmental contamination and conserves natural resources."
    },
    {
      id: "g11_civ_u11_m10",
      question: "What is the role of international environmental agreements?",
      options: ["They are meaningless", "They provide frameworks for countries to cooperate on addressing global environmental challenges", "Only rich countries participate", "They replace national laws"],
      correct: "They provide frameworks for countries to cooperate on addressing global environmental challenges",
      difficulty: "Medium",
      explanation: "International environmental agreements like the Paris Agreement create frameworks for global cooperation on issues like climate change, biodiversity loss, and pollution."
    },
    // Hard
    {
      id: "g11_civ_u11_h1",
      question: "Analyze the tension between economic development and environmental conservation in Ethiopia.",
      options: ["No tension exists", "Development projects may damage ecosystems; policies must find pathways that advance both economic and environmental goals", "Development always harms the environment", "Conservation prevents all development"],
      correct: "Development projects may damage ecosystems; policies must find pathways that advance both economic and environmental goals",
      difficulty: "Hard",
      explanation: "Ethiopia faces tensions between development needs (industrialization, agriculture expansion) and conservation, requiring integrated policies that pursue green growth pathways."
    },
    {
      id: "g11_civ_u11_h2",
      question: "How does the concept of environmental justice apply to developing countries?",
      options: ["It doesn't apply", "Developing countries often bear disproportionate environmental burdens despite contributing less to global environmental problems", "All countries face equal environmental challenges", "Only developed countries face environmental issues"],
      correct: "Developing countries often bear disproportionate environmental burdens despite contributing less to global environmental problems",
      difficulty: "Hard",
      explanation: "Environmental justice highlights that developing countries, despite contributing less to pollution and climate change, often suffer the most from environmental degradation and climate impacts."
    },
    {
      id: "g11_civ_u11_h3",
      question: "Evaluate the ethical arguments for and against anthropocentric versus ecocentric environmental ethics.",
      options: ["Only one view is correct", "Anthropocentrism values nature for human benefit; ecocentrism values nature intrinsically; each has strengths and limitations", "Ethics doesn't apply to nature", "Humans have no obligations to nature"],
      correct: "Anthropocentrism values nature for human benefit; ecocentrism values nature intrinsically; each has strengths and limitations",
      difficulty: "Hard",
      explanation: "Anthropocentric ethics values nature instrumentally for human benefit, while ecocentric ethics grants intrinsic value to all living beings and ecosystems, with implications for policy."
    },
    {
      id: "g11_civ_u11_h4",
      question: "How does the 'tragedy of the commons' concept apply to environmental resource management?",
      options: ["It doesn't apply", "Shared resources face overexploitation when individuals pursue self-interest without collective management", "Common resources are always well-managed", "Private ownership solves all environmental problems"],
      correct: "Shared resources face overexploitation when individuals pursue self-interest without collective management",
      difficulty: "Hard",
      explanation: "The tragedy of the commons shows how shared resources (forests, fisheries, atmosphere) are overexploited when individuals maximize personal benefit without collective governance."
    },
    {
      id: "g11_civ_u11_h5",
      question: "What are the ethical implications of climate change for developing nations like Ethiopia?",
      options: ["No ethical implications", "Nations contributing least to climate change suffer most, raising issues of global justice, responsibility, and compensation", "All nations are equally responsible", "Climate change only affects wealthy nations"],
      correct: "Nations contributing least to climate change suffer most, raising issues of global justice, responsibility, and compensation",
      difficulty: "Hard",
      explanation: "Climate ethics highlights the injustice of developing nations bearing the greatest climate impacts despite minimal contributions to greenhouse gas emissions, demanding global equity."
    },
    {
      id: "g11_civ_u11_h6",
      question: "Critically assess the concept of 'green economy' and its applicability to Ethiopia.",
      options: ["Green economy is impossible in developing countries", "It offers opportunities for sustainable industrialization but requires significant investment and policy reform", "Green economy means no industry", "It only applies to wealthy nations"],
      correct: "It offers opportunities for sustainable industrialization but requires significant investment and policy reform",
      difficulty: "Hard",
      explanation: "A green economy offers Ethiopia opportunities for sustainable growth through renewable energy, sustainable agriculture, and eco-tourism but requires investment and supportive policies."
    },
    {
      id: "g11_civ_u11_h7",
      question: "How do property rights regimes affect environmental conservation outcomes?",
      options: ["Property rights don't affect conservation", "Different property regimes (common, private, state) create different incentives for resource conservation", "Only private ownership protects the environment", "All property systems have identical effects"],
      correct: "Different property regimes (common, private, state) create different incentives for resource conservation",
      difficulty: "Hard",
      explanation: "Different property rights systems—communal, private, and state ownership—create varying incentives for environmental conservation, with no single system universally superior."
    },
    {
      id: "g11_civ_u11_h8",
      question: "Analyze the relationship between gender and environmental sustainability.",
      options: ["Gender has no connection to the environment", "Women are disproportionately affected by environmental degradation and play crucial roles in conservation", "Only men can manage the environment", "Gender considerations slow environmental progress"],
      correct: "Women are disproportionately affected by environmental degradation and play crucial roles in conservation",
      difficulty: "Hard",
      explanation: "Women are often more vulnerable to environmental degradation but also serve as key agents of conservation through their roles in agriculture, water management, and community resource use."
    },
    {
      id: "g11_civ_u11_h9",
      question: "How should the concept of 'common but differentiated responsibilities' guide global environmental governance?",
      options: ["All countries should have identical obligations", "Countries should contribute to environmental protection based on their historical emissions and economic capacity", "Only developing countries should act", "The concept is meaningless"],
      correct: "Countries should contribute to environmental protection based on their historical emissions and economic capacity",
      difficulty: "Hard",
      explanation: "This principle recognizes that while all countries share environmental responsibility, developed nations should bear greater obligations due to their historical emissions and greater resources."
    },
    {
      id: "g11_civ_u11_h10",
      question: "Evaluate the effectiveness of community-based natural resource management in Ethiopian contexts.",
      options: ["Community management always fails", "It can be effective when communities have genuine authority, capacity, and incentives, but faces challenges of scale and external pressures", "Only government management works", "Community management is always superior"],
      correct: "It can be effective when communities have genuine authority, capacity, and incentives, but faces challenges of scale and external pressures",
      difficulty: "Hard",
      explanation: "Community-based management succeeds when communities have real authority and benefit from conservation, but faces challenges from external pressures, capacity gaps, and scaling up."
    }
  ]
};

export const getGrade11CivicsQuestions = (unit: string, difficulty?: 'easy' | 'medium' | 'hard', count?: number) => {
  const unitData = grade11CivicsQuestions[unit];
  if (!unitData) return [];
  
  let questions = [...unitData];
  
  if (difficulty) {
    questions = questions.filter(q => q.difficulty.toLowerCase() === difficulty);
  }
  
  // Shuffle
  questions.sort(() => Math.random() - 0.5);
  
  if (count) {
    questions = questions.slice(0, count);
  }
  
  return questions;
};

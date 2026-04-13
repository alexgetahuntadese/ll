import { MatricExamQuestion } from "./matricExams";

const raw2015CivicsQuestions = [
  {
    "sectionDirection": "Choose the correct answer.",
    "question": "Among the following one is a major feature of autocratic governments. Which one?",
    "options": [
      "Exercising unlimited power",
      "Protection of human rights and freedom",
      "The absence of written constitution",
      "The prevalence of the rule of law"
    ]
  },
  {
    "question": "The tendency to promote an ethnocentric point of view affects cultural equality and weakens the unity of a country, if it",
    "options": [
      "fails to consider the cultural and religious practices of others",
      "views any particular sets of customs, norms and values as relative",
      "creates a common economic and political space",
      "promotes the common interest that is in conflict with the personal"
    ]
  },
  {
    "question": "How the federal principle in Ethiopia devolves power between the regional state and the federal?",
    "options": [
      "There exists nominal devolution of power not the actual one",
      "The federal government has devolved power to the regional states",
      "Regional states and the federal government have no properly defined power sharing schemes",
      "The federal principle exists on paper not reality in the world"
    ]
  },
  {
    "question": "The basic necessity behind the promulgation and compliance of tax law is",
    "options": [
      "monitoring the fair collection of tax to maintain income equality",
      "alleviating poverty and bringing inclusive development",
      "to control the private sector from tax evasion and fraud",
      "assisting government projects to become planned and executed"
    ]
  },
  {
    "question": "Which one of the following is among the qualities of patriotic citizens?",
    "options": [
      "Promoting the public interest at local and national levels",
      "Inconsistent to implement government policies and strategies",
      "Helping the government in its good and bad work",
      "Criticizing blindly the government policies and strategies"
    ]
  },
  {
    "question": "Mr.X is a well-respected man living in a small town of Y Regional State. Though he is well known and respected, he usually beats his wife at home. Mr.X, Mrs.Z's wife, sued her husband for beating her badly. The first court that sees Mrs. Z's case is",
    "options": [
      "Federal Higher Court",
      "State First Instance Court",
      "Federal First Instance Court",
      "State Supreme Court"
    ]
  },
  {
    "question": "Which one of the following describes the ways through which common good could be promoted?",
    "options": [
      "Promoting one's own personal interest prior to others",
      "Failing to appreciate and tolerate differences",
      "Discouraging chauvinism and safeguarding our sovereignty",
      "Favoring and disfavoring individuals and groups subjectively"
    ]
  },
  {
    "question": "Which one of the following alternatives states the quality of a patriotic citizen?",
    "options": [
      "A journalist who keeps the secret of the national defense and military strategy",
      "A chauvinist who thinks that his/her nation is superior to others",
      "A nationalist who uses different tactics to achieve his/her political goals",
      "A freedom fighter who destroys public property and civilian lives"
    ]
  },
  {
    "question": "Among the following one is different from the rest in terms of responsibility. Which one?",
    "options": [
      "Punctuality at work and elsewhere",
      "Respecting the norms and values of society",
      "Choosing a way of life that could help one to be successful",
      "Honesty and keeping a promise"
    ]
  },
  {
    "question": "A responsibility that involves respecting the constitution, fighting the aggression of invaders, and resolving conflicts is",
    "options": [
      "Social Responsibility",
      "National Responsibility",
      "Personal Responsibility",
      "Organizational Responsibility"
    ]
  },
  {
    "question": "Ato Bekele has given some amount of money for a human resource director of a certain construction company to let his son who graduated from a university be selected as a candidate for employment. The form of corruption which is committed in this way is",
    "options": [
      "nepotism",
      "abuse of power",
      "embezzlement",
      "bribery"
    ]
  },
  {
    "question": "One of the following cannot be classified as gender inequality in the case of contemporary Ethiopia?",
    "options": [
      "The denial of women's right to vote",
      "Denial of equal access for women to land and other resources",
      "Women and girls suffering from harmful cultural practices",
      "Lack of encouragement of women in decision making"
    ]
  },
  {
    "question": "Which one of the following can be distinguished best as a struggle for justice?",
    "options": [
      "A struggle for empowering women in development activities and poverty reduction",
      "A struggle for a fair treatment of students with disability to those who are not",
      "A struggle for the access of resources and opportunities without discrimination",
      "A struggle to get equal payment with other citizens with similar ability"
    ]
  },
  {
    "question": "In democratic countries, courts are legal institutions which are entrusted to",
    "options": [
      "maintains the power of a certain political party",
      "ensures a political order based on the interest of a single ethnic group",
      "interprets the law and decides whether or not a person broke the law",
      "protects the interest of the rulers"
    ]
  },
  {
    "question": "What was the main cause of an inefficient collection of taxes during the Socialist Derg regime?",
    "options": [
      "A disorder that is caused by the free market economy that has been set in place",
      "Monopoly of market system controlled by a single ethnic group",
      "It collected most of the product from the farmers as taxes",
      "The suppression of private initiative and low production"
    ]
  },
  {
    "question": "Which one of the following can be taken as a major cause for all types of corruption?",
    "options": [
      "The personal interest of rulers",
      "The weakness of religious institutions",
      "The breakdown of the rule of law",
      "The moral decadence of the society"
    ]
  },
  {
    "question": "Which one of the following clearly explains the concept of equality?",
    "options": [
      "Equality is not about rights and benefits but also sharing burdens equally",
      "Equality may not imply that your guaranteed rights are guaranteed to others",
      "Equality refers to the provision of identical treatment and benefits",
      "Equality necessarily means an absolutely similar rights, benefits and opportunities"
    ]
  },
  {
    "question": "Article 35 of the constitution of the Federal Democratic Republic of Ethiopia (FDRE) has recognized equality of women in that",
    "options": [
      "women have more rights than men in marriage",
      "laws, customs and practices that oppress women are prohibited",
      "religious practices which discriminate women are prohibited",
      "affirmative measures regarding women are prohibited"
    ]
  },
  {
    "question": "Which one of the following describes best the principle of equity of taxation?",
    "options": [
      "All activities which citizens do should be subjected to taxations",
      "Those who have less money should pay more taxes",
      "The government shall collect taxes equally from every citizen",
      "Those who have more money should pay more taxes"
    ]
  },
  {
    "question": "All activities that we do that are subjected to taxation are known as",
    "options": [
      "business profit tax",
      "tariffs and duties",
      "tax rate",
      "tax base"
    ]
  },
  {
    "question": "All are factors which affect the selection of an appropriate economic system except",
    "options": [
      "the ethno-linguistic composition of the country",
      "the global economic trends which others are using",
      "the economic potential of the country",
      "the local man power and the climate condition"
    ]
  },
  {
    "question": "Which one of the following facts described as the impact of the Ethiopian student movement?",
    "options": [
      "The process of answering the religious question",
      "Establishing federal government",
      "The process of answering the land question",
      "The process of answering the ethnic equality question"
    ]
  },
  {
    "question": "Self-reliance and decision making process are closely related in that;",
    "options": [
      "self-reliant people do not feel inferior to others",
      "a self-reliant person knows that he/she is capable of promoting the public interest",
      "self-reliant people engage in constructive criticism and self-criticism",
      "a self-reliant person has a good relationship with other people"
    ]
  },
  {
    "question": "The quality of a self-reliant person that involves the process of evaluating one's own achievements and weaknesses in a fair way is",
    "options": [
      "self-Criticism",
      "dependability",
      "open-mindedness",
      "civility"
    ]
  },
  {
    "question": "Which one of the following describes the main feature of dependability?",
    "options": [
      "It is to be receptive to different ideas and arguments",
      "It refers to those who always act to appease their friends and other people",
      "It is a quality of oneself who always does what he says",
      "It refers to a polite way of treating others"
    ]
  },
  {
    "question": "Among the following one can be classified as the role of civic societies in a democratic country. Which one?",
    "options": [
      "Safeguarding the interest of the ruling party and controlling antigovernment resistance",
      "Serving the government in order to develop policies",
      "Creating the opportunity to coordinate antigovernment agents",
      "Creating access to information and lobbying to influence legislation"
    ]
  },
  {
    "question": "Which one of the following is true concerning civic societies?",
    "options": [
      "Institutions which have no role in the political independence of society",
      "Voluntary organizations run by the community regardless of the political system",
      "Institutions that are run by the government and serve the purpose of the government",
      "Community organizations determined by the political system"
    ]
  },
  {
    "question": "One among the following choices is different from the others. Which one?",
    "options": [
      "Environmental protection associations",
      "Professional associations",
      "Charity Organizations",
      "Political Parties"
    ]
  },
  {
    "question": "Which one of the following is true concerning the relationship between information and decision making?",
    "options": [
      "Reliability, right representation the amount of data and the analysis process are needed to make right decisions",
      "In order to make right decisions, looking for the right source to ensure accuracy is the only criterion",
      "The nature and type of study cannot determine the amount of data needed",
      "Considering right representation and sample size necessarily lead to right decision"
    ]
  },
  {
    "question": "Which one of the following can be classified as the definition of wisdom than knowledge?",
    "options": [
      "A mature understanding of things to make sensible decisions",
      "An ability to determine alternative ways of doing things",
      "Skills that can be gained through education or experience",
      "Learning about particular facts, ideas or situations"
    ]
  },
  {
    "question": "The skill to care and consider issues related to right and wrong decisions and actions is known as",
    "options": [
      "self-assertiveness",
      "independence",
      "self-awareness",
      "moral sensitivity"
    ]
  },
  {
    "question": "All are major reasons behind the fact that the poor countries are getting poorer while the rich ones are getting richer except",
    "options": [
      "debt and dependency",
      "drought aid",
      "international market",
      "profit extraction"
    ]
  },
  {
    "question": "The non-consequential theory in that an action that determines the decision but whether the action itself is perceived to be right, is",
    "options": [
      "ethical relativism",
      "ethical egoism",
      "utilitarianism",
      "Kantian ethics"
    ]
  },
  {
    "question": "Which one of the following belongs to the area of micro-economics?",
    "options": [
      "The analysis of inputs and exports",
      "The behavior of consumers and producers",
      "The analysis of investment",
      "The level of saving and investment"
    ]
  },
  {
    "question": "An international economic principle which is taken from the market economy principle that countries should produce those products which bear a minimum cost and should not produce those products which cost more is",
    "options": [
      "global welfare",
      "sustainable development",
      "distributive justice",
      "comparative advantage"
    ]
  },
  {
    "question": "Which one of the following is correct about traditional instruments of justice?",
    "options": [
      "Traditional courts may not reflect the values and norms of society",
      "Traditional courts are not expected to function side by side with modern courts",
      "In some cases, they may not be locally established by the people",
      "Traditional instruments of justice are vary from place to place"
    ]
  },
  {
    "question": "An elements which affects negatively the proper functioning of courts with respect to carrying out their duties is",
    "options": [
      "the promotion of religious prejudices",
      "the objectivity of the court",
      "avoidance of discrimination",
      "treatment of every person as individual"
    ]
  },
  {
    "question": "Which one of the following is correct about the permanent tendency to lead one's life on outside support?",
    "options": [
      "Dependency syndrome",
      "Dependency fatigue",
      "Relative dependency",
      "Donor fatigue"
    ]
  },
  {
    "question": "Which one of the following refers to a disposition that can be taken as the manifestation of a patriotic citizen?",
    "options": [
      "Behaviors which disrespect or hurt others, such as lying and stealing",
      "Breaking rules and laws which govern the society",
      "Looking after the well-being of one's own self at the expense of others",
      "An attitude of openness and respect for differences which exist among people"
    ]
  },
  {
    "question": "The failure to be behave responsibly in the affairs of the society and the state will result in",
    "options": [
      "strengthening the bond of trust",
      "paving the way for dictatorship",
      "greater responsibility in the future",
      "enhancement of democracy"
    ]
  },
  {
    "question": "Which one of the following is different concerning the new perspective of patriotism in Ethiopia?",
    "options": [
      "Increasing productivity and fighting poverty",
      "Defending the country from enemies",
      "Inventing a new medicine or machine",
      "Respecting law of the country"
    ]
  },
  {
    "question": "Acting to promote the common good is a quality of patriots that requires",
    "options": [
      "actions which frighten or force the government",
      "commitment to support political objectives of a specific ethnic group",
      "a commitment to perform one's own duty and take moral responsibility",
      "consideration of the private prior to public interest"
    ]
  },
  {
    "question": "Which one of the following cases of poverty demonstrates societies",
    "options": [
      "Some people have very small income compared to others",
      "Many parents are unable to provide their family with proper clothing",
      "Many families being unable to send their children to schools",
      "Almost half of the people are unable to eat three times a day"
    ]
  },
  {
    "question": "Among the following one can be classified as a group responsibility. Which one?",
    "options": [
      "Traveling a long distance to and from school",
      "Making sure that the teaching-learning process works smoothly",
      "To participate actively in a weekly or monthly sanitation",
      "Obeying orders from teachers and other staff"
    ]
  },
  {
    "question": "Ato Kassa is an engineer who believes that he has a responsibility to be honest and truthful in every course of his life. This responsibility of Ato Kassa arises from his",
    "options": [
      "custom and tradition",
      "law",
      "occupation",
      "moral principles"
    ]
  },
  {
    "question": "Which one of the following is correct about the correlation between national and global security?",
    "options": [
      "Terrorist attacks on western countries will not affect the economy of poor countries",
      "Fighting against terrorism at the national level is a contribution to the wellbeing of the global community",
      "National security can be achieved fully in the absence of global security",
      "The prevalence of security in Ethiopia has a zero impact on the Middle East"
    ]
  },
  {
    "question": "Which one of the following states correctly the major duty of patriotic citizens?",
    "options": [
      "Using the state's secrets for political interest",
      "Fighting against the government and its policies",
      "Criticizing the government for political gain",
      "Playing an exemplary role in defending national security"
    ]
  },
  {
    "question": "Which one of the following can be considered the most important contribution of Ethiopia globally?",
    "options": [
      "Poverty reduction",
      "Global warming",
      "Peace keeping",
      "Democratization process"
    ]
  },
  {
    "question": "Which one of the following is correct concerning ethical standards and the working environment?",
    "options": [
      "A smooth working environment can be maintained without ethical standards",
      "A harmonious working environment requires respecting some ethical rules",
      "Ethical standards are the same in all professions and organizations",
      "The necessity of ethical standards is to keep the interest of the company"
    ]
  },
  {
    "question": "Among the following one is the major principle of democracy. Which one?",
    "options": [
      "Censorship of the press",
      "Free, fair and periodic election",
      "Lack of transparency and accountability",
      "Limited public participation"
    ]
  },
  {
    "question": "Which one of the following summarizes the interdependence between human and democratic rights?",
    "options": [
      "There is no limitation attached to human right as well as democratic rights",
      "Human rights arise independent from democratic rights",
      "It is the prevalence of democratic right that ensures human rights",
      "It is the prevalence of human rights that guarantees democratic rights"
    ]
  },
  {
    "question": "Which one of the following is different from the rest in terms of protecting the abuse of power?",
    "options": [
      "The Check and Balance System",
      "Ethics and Anti-Corruption Commission",
      "The Human Rights Commission",
      "The office of Ombudsman"
    ]
  },
  {
    "question": "Which one of the following explains the core value of Ethiopia's foreign relation?",
    "options": [
      "Importing new technologies",
      "Developing cultural relations",
      "Attracting foreign investment",
      "Promoting the sovereignty of the country"
    ]
  },
  {
    "question": "What was the main reason for the ratification of the first written constitution of Ethiopia?",
    "options": [
      "Protection and enforcement of rights and liberties of the people",
      "Promotion of the equality of nations, nationalities and peoples of Ethiopia",
      "Legalizing and strengthening the Emperor's absolute power",
      "Upholding socialist values and protecting territorial integrity"
    ]
  },
  {
    "question": "What is the ultimate purpose of the protection of the environment from any damage?",
    "options": [
      "Generating income that would promote economic growth",
      "Enriching the topsoil and maintaining its fertility",
      "Replant trees and where they are sparse",
      "Decreasing health risks and improving the living standards of the people"
    ]
  },
  {
    "question": "Which of the following is a major impact of sexism on the world of work?",
    "options": [
      "Attaining of sustainable development",
      "Encouraging women to get involved in their jobs actively",
      "Empowering women on raising children",
      "Limiting the potential of women to benefit society"
    ]
  },
  {
    "question": "What is the consequence of dependency on national development?",
    "options": [
      "Scientific and technological advancement",
      "Development of democratic culture",
      "Economic growth and poverty reduction",
      "Economic and social disparity"
    ]
  },
  {
    "question": "Which one of the following is true about the risks of dependency?",
    "options": [
      "It promotes environmental governance and sustainable development",
      "Wealthy nations can have multifaceted influence on poor nations",
      "Poor nations provide market access to wealthy nations",
      "Foreign-owned companies can use cheap labour"
    ]
  },
  {
    "question": "A traditional saving method where people living in a community contribute a fixed amount every month so that it would ease the cost of funeral ceremony in case a family member dies",
    "options": [
      "Equb",
      "Insurance",
      "Iddir",
      "Bank"
    ]
  },
  {
    "question": "Which one of the following describes the concept of civic participation?",
    "options": [
      "Citizens' obligation to enhance social development and support",
      "A voluntary cooperation and activity to promote the common good",
      "An effort towards government reforms in order to attain political goal",
      "Any activity that has a political, religious and military activity"
    ]
  },
  {
    "question": "Which one of the following is correct regarding the ultimate purpose of reading?",
    "options": [
      "Reading essentially benefits the writer than the reader",
      "Reading helps acquire new knowledge continuously and contributes to the well-being of society",
      "The objective of reading is only to acquire knowledge",
      "The main aim of reading is to spend one's time extravagantly"
    ]
  },
  {
    "question": "An individual who dismantles high-tension transmission tower his/her selfish interest has",
    "options": [
      "executed his/her personal interest for the public good",
      "acted to promote the greatest happiness to the greatest number of people",
      "destroyed his/her own property and the public property at large",
      "kept the balance between his/her personal interest and public interest"
    ]
  },
  {
    "question": "Which one of the following alternatives is correct regarding the necessity of respect for work?",
    "options": [
      "Respect for work shall be determined by the type of job that one does",
      "Any work should be respected if and only if it generates money to the individual",
      "Lack of respect for work tends to push people to see an easy way for getting money",
      "Every profession should be honoured for it benefits the doer"
    ]
  },
  {
    "question": "Which one of the following choices can best be classified as the negative impact of globalization on the Ethiopian economy?",
    "options": [
      "Increased dependency on cheaper goods and services",
      "Close relationship with other countries",
      "Increased flow of goods and services",
      "Sharing of ideas and policies"
    ]
  },
  {
    "question": "Which one of the following is a reflection of relying on others?",
    "options": [
      "Not prepared to face the truth about oneself",
      "Being realistic and not excusing your weaknesses",
      "Not exaggerating one's weaknesses and looking down on one's own self confidently",
      "Not thinking one-self more than he/she should"
    ]
  },
  {
    "question": "What will happen if one fails to discharge his/her own constitutional obligation?",
    "options": [
      "It will enable the government to be more accountable and transparent",
      "It will limit the power of the government and prevents its abuse of power",
      "A democratic culture shall flourish in the society",
      "One's constitutional rights shall be compromised"
    ]
  },
  {
    "question": "Which one of the following is an area in which both the federal and regional governments exercise concurrent power in the Federal Democratic Republic of Ethiopia?",
    "options": [
      "National defense and security",
      "Financial policy matters",
      "Revenue and tax collection",
      "Conducting foreign policy matters"
    ]
  },
  {
    "question": "What is the main aim of promoting political tolerance in a democratic system of governance?",
    "options": [
      "To unify differences among ethnic, religious and political groups",
      "To check the abuse of power in governments",
      "To enforce the government to conduct its affairs in a transparent way",
      "To hold public officials accountable for any failure in official duties"
    ]
  },
  {
    "question": "Which one of the following explains best the democratic notion of keeping the balance between rights and duties of citizens?",
    "options": [
      "Failure to respect constitutional obligation is punishable by law",
      "Not to perform constitutional duty implies not use constitutional right",
      "The use of every right requires an obligation to be fulfilled",
      "The idea of equal number of constitutional rights and duties"
    ]
  },
  {
    "question": "Which one of the following describes best the characteristics of an unlimited form of government?",
    "options": [
      "Prevalence of basic rights and freedoms",
      "Utter power and ignorance of the rule of law",
      "Absence of arbitrary power",
      "Power emanates from the people"
    ]
  },
  {
    "question": "Which one of the following is correct regarding an individual responsibility?",
    "options": [
      "A farmer and a factory worker can have the same personal responsibilities",
      "Personal responsibility does not involve a balance between your personal and social interests",
      "Individual responsibilities do not vary from person to person",
      "Different occupations determine the type and extent of personal responsibility"
    ]
  },
  {
    "question": "An economic system in which individuals decide what to produce and how it is distributed in line with priorities set by the government",
    "options": [
      "Mixed Economic System",
      "Planned Economic System",
      "Command Economic System",
      "Free Market Economic System"
    ]
  },
  {
    "question": "Woizero Almaz is personnel in one of the land administration offices of Addis Ababa city administration. She usually spends too much time talking to her friends over tea and coffee while her office is loaded with customers. Such an attitude of the personnel violates an ethical principle of",
    "options": [
      "loyalty",
      "honesty",
      "punctuality",
      "willingness to learn"
    ]
  },
  {
    "question": "Which one of the following explains the impact of dependency?",
    "options": [
      "It can cause a loss of political will and encourage belief on outside help",
      "It nurtures one's ability to support and take care of his/her-self",
      "It enables oneself to make decisions free from influence and control of others",
      "It develops one's self confidence in taking initiatives and benefit society"
    ]
  },
  {
    "question": "Which one of the following demonstrates the best way to combat the habit of dependency?",
    "options": [
      "Prohibiting any act of begging which needs the help of others",
      "To enable citizens develop self-reliance through understanding their good qualities",
      "Totally cutting off the food aid that rich countries give to poor countries",
      "Training citizens how great and perfect they are"
    ]
  },
  {
    "question": "What are the criteria that can qualify a government as having a legitimate power and authority?",
    "options": [
      "Existence of rule of men than rule of law",
      "Having the power to rule which lacks moral authority",
      "Receiving its mandate to govern from the people",
      "Having constitution, but not constitutional rule"
    ]
  },
  {
    "question": "Which one of the following listed alternatives states the exclusive power of the central government in federal Ethiopia?",
    "options": [
      "To have their own constitutions together with FDRE constitution",
      "To conduct foreign relations and recruit armed forces",
      "Recruiting and managing their own police force",
      "To create enabling conditions for investment"
    ]
  },
  {
    "question": "Which one of the following statements is correct about Ethiopian foreign relation?",
    "options": [
      "It is based on coexistence and cooperation states and people",
      "Its core value is dominating the region and redefining the order",
      "It is consistent or not geographically determined with some countries",
      "A change in government will not affect the foreign relation and policy"
    ]
  },
  {
    "question": "A conflict resolution mechanism through formally established procedural rules, customs or practices which involves a process of carrying on a suit before the law is called",
    "options": [
      "negotiation",
      "mediation",
      "litigation",
      "arbitration"
    ]
  },
  {
    "question": "Which one of the following choices can be classified as an instance of the curative approach employed in the fight against corruption?",
    "options": [
      "Laws and rules related to financial administration",
      "Bringing the corrupt officials to justice",
      "Registration of property",
      "Ethical Regulation"
    ]
  },
  {
    "question": "Among the following, one is the role of institutions than individuals regarding the fight against corruption and abuse of power. Which one?",
    "options": [
      "Making activities transparent and holding officials accountable for any fault",
      "Respecting the religious and customary values",
      "Exposing corrupt people and turn away from any corrupt practices",
      "Being honest and truthful in day-to-day activities"
    ]
  },
  {
    "question": "In countries where there is no rule of law,",
    "options": [
      "people are prohibited from violating the rights of others",
      "those who govern shall exercise limited power",
      "basic rights of individuals and groups will be respected",
      "political and social order shall break out"
    ]
  },
  {
    "question": "Which one of the following is correct concerning the equality of Nations, Nationalities and Peoples of Ethiopia?",
    "options": [
      "It does not involve a restorative justice to repair damages done in the past",
      "The federal structure of government limited the equality of the people",
      "The constitution guaranteed equal protection and the rights given to the people",
      "The right to self-government is an ingredient for insuring equal political participation"
    ]
  },
  {
    "question": "Among the following one is different with regard to the relationship between individual and public interests. Which one?",
    "options": [
      "Individual rights should always precede the public interest",
      "Both individual and public interests should always be equally promoted in every action of a government",
      "Personal interests are protected only to the extent that they do not affect the public",
      "Individual interests might not be given up even to promote the benefit of the society"
    ]
  },
  {
    "question": "Ato Kinde is a resident in Addis Ababa who is engaged in a retail business sector. He complained to the Wereda Income and Revenue Authority that he is requested to pay more amount of tax than those who have the same amount of earning with him. Accordingly, which principle of taxation is violated by the Wereda Income and Revenue Authority in this case?",
    "options": [
      "Tax avoidance",
      "Vertical Equity",
      "Ability to pay",
      "Horizontal equity"
    ]
  },
  {
    "question": "Which one of the following is the negative impact of international monetary organizations on the development of third world countries?",
    "options": [
      "Influencing a country politically and culturally",
      "Financing the development efforts of a country",
      "Stimulating the economy to produce more",
      "Making funds available for investment"
    ]
  },
  {
    "question": "Among the following one is correct concerning the main goal of the International Monetary Fund (IMF) and the World Bank. Which one?",
    "options": [
      "Mobilization of capital in the local area",
      "Liberalization of economies for Western products",
      "They working mainly in response to what happens in the economy",
      "Increasing production and employment rate"
    ]
  },
  {
    "question": "An individual who is charismatic, attractive, appealing, charming and influential is said to possess the personal quality of a leader, which is",
    "options": [
      "engaging",
      "versatile",
      "a motivator",
      "realistic"
    ]
  },
  {
    "question": "Freedom of the press is vital to enhance the public participation and public responsibility for the reason that",
    "options": [
      "citizens can write whatever pleases them",
      "it obliges the government to have a limited power",
      "it is an information channel between the government and the people",
      "it serves as citizen's instrument of opposition"
    ]
  },
  {
    "question": "Which one of the following is correct about the concept of judicial review?",
    "options": [
      "Judicial review is limited to declaring laws and decisions unlawful",
      "In Ethiopia federal supreme court the only responsible organ to declare a given law or action unconstitutional",
      "It is a courts power to review the ministerial office of the government but not to review legislative and executive branch of government",
      "It is a courts power to invalidate legislative and executive actions as being unconstitutional"
    ]
  },
  {
    "question": "The overall purpose of learning to plan and to save time is to develop the habit of",
    "options": [
      "paying back what one owes to others",
      "saving for spending excessive amount of money on funerals",
      "living within the limits of your capacity",
      "saving to buy extravagant items"
    ]
  },
  {
    "question": "Which one of the following can be classified as an extravagant practice?",
    "options": [
      "Equb, a traditional way of saving to fulfill one's future dreams",
      "Tezkar, a large expenditure on funeral ceremony after a person passes away",
      "Iddir, a traditional saving for funeral purposes",
      "A simple wedding ceremony which costs a small amount of money"
    ]
  },
  {
    "question": "Which one of the following can be distinguished best as a political participation?",
    "options": [
      "Taking part in voting",
      "Joining the struggle against drug abuse",
      "Involvement in the fight against corruption",
      "Active participation to combat the spread of HIV/AIDS"
    ]
  },
  {
    "question": "What are the main distinguishing features of wisdom in contrast to knowledge?",
    "options": [
      "It does not involve questioning what exists around us",
      "It is not a life-time process",
      "It is handling acquired knowledge for good use",
      "It is not acquired, rather inborn"
    ]
  },
  {
    "question": "Which one of the following explains the virtue of truthfulness in contrast with falsehood?",
    "options": [
      "Truthfulness and honesty are mutually exclusive",
      "Social norms and religions are expected to uphold truthfulness",
      "Knowledge serves as a tool of falsehood rather than truthfulness",
      "Truthfulness should be upheld to gain respect from others"
    ]
  },
  {
    "question": "Which one of the following explains the right to privacy of human rights?",
    "options": [
      "The right to the free development of one's own personality",
      "The right to respect for human dignity, reputation and honor",
      "The right not to be deprived of one's life",
      "The right not to be subjected to searches of one's personal property"
    ]
  },
  {
    "question": "Among the following one can be classified as a human right abuse than democratic one in Ethiopia. Which one?",
    "options": [
      "Forcing children to perform work in hazardous or harmful to their health",
      "The denial of women to enjoy equal treatment in the inheritance of property",
      "The cruel and inhuman treatment of children in schools and other institutions",
      "The seizure of one's own property which is under his/her personal possession"
    ]
  },
  {
    "question": "All are distinctive features of Ethiopian society after the establishment of the democratic system except one. Which one?",
    "options": [
      "The provision of all cultural groups' equal opportunities for their development",
      "The treatment of some cultures superior over others",
      "The equality of Nations, Nationalities and Peoples of Ethiopia",
      "The right to promote and develop one's cultural identity"
    ]
  },
  {
    "question": "Which one of the following organs of the federal government of Ethiopia mainly involved in the enforcement of the various policies and strategies designed for administering the country?",
    "options": [
      "The Parliament",
      "The Legislative branch",
      "The Executive Branch",
      "The Judiciary branch"
    ]
  }
] as const;

const raw2015CivicsAnswerKey = [
  {
    "correctAnswer": 0,
    "explanation": "Autocratic governments are characterized by concentration of power and exercise of unlimited authority."
  },
  {
    "correctAnswer": 0,
    "explanation": "Ethnocentrism weakens unity when people fail to respect and consider the cultural and religious practices of others."
  },
  {
    "correctAnswer": 1,
    "explanation": "Under the federal principle, powers are constitutionally devolved from the federal government to regional states."
  },
  {
    "correctAnswer": 3,
    "explanation": "Tax laws are fundamentally needed to raise revenue so government projects can be planned and implemented."
  },
  {
    "correctAnswer": 0,
    "explanation": "A patriotic citizen promotes the public interest at both local and national levels."
  },
  {
    "correctAnswer": 1,
    "explanation": "Ordinary personal injury and family violence cases first go to the competent state first instance court."
  },
  {
    "correctAnswer": 2,
    "explanation": "Promoting the common good requires discouraging chauvinism and safeguarding the country's common interests and sovereignty."
  },
  {
    "correctAnswer": 0,
    "explanation": "Patriotic citizens protect national interests, including keeping legitimate national defense secrets."
  },
  {
    "correctAnswer": 2,
    "explanation": "Choosing a personally successful way of life is different from the other listed moral and social responsibilities."
  },
  {
    "correctAnswer": 1,
    "explanation": "Respecting the constitution, defending the country, and helping resolve conflicts are national responsibilities."
  },
  {
    "correctAnswer": 3,
    "explanation": "Giving money so someone is selected for employment is bribery."
  },
  {
    "correctAnswer": 0,
    "explanation": "Women in Ethiopia already have the constitutional right to vote, so that choice is not a feature of contemporary gender inequality."
  },
  {
    "correctAnswer": 2,
    "explanation": "Justice is best captured by ensuring equal access to resources and opportunities without discrimination."
  },
  {
    "correctAnswer": 2,
    "explanation": "Courts are entrusted to interpret the law and decide whether a person has broken it."
  },
  {
    "correctAnswer": 3,
    "explanation": "During the Derg period, suppression of private initiative reduced production and weakened effective tax collection."
  },
  {
    "correctAnswer": 2,
    "explanation": "A major underlying cause of corruption is the breakdown of the rule of law."
  },
  {
    "correctAnswer": 0,
    "explanation": "Equality includes not only equal rights and benefits but also equal sharing of social burdens."
  },
  {
    "correctAnswer": 1,
    "explanation": "Article 35 prohibits laws, customs, and practices that oppress or cause bodily or mental harm to women."
  },
  {
    "correctAnswer": 3,
    "explanation": "The equity principle of taxation means those with greater ability to pay should contribute more."
  },
  {
    "correctAnswer": 3,
    "explanation": "The set of activities, incomes, or transactions subject to tax is called the tax base."
  },
  {
    "correctAnswer": 0,
    "explanation": "Ethno-linguistic composition is not normally treated as a core economic criterion for choosing an economic system."
  },
  {
    "correctAnswer": 2,
    "explanation": "A major impact of the Ethiopian student movement was its role in raising and popularizing the land question."
  },
  {
    "correctAnswer": 0,
    "explanation": "Self-reliant people do not feel inferior to others and therefore are better able to make independent decisions."
  },
  {
    "correctAnswer": 0,
    "explanation": "Evaluating one's own achievements and weaknesses fairly is self-criticism."
  },
  {
    "correctAnswer": 2,
    "explanation": "Dependability means being someone who does what he or she says."
  },
  {
    "correctAnswer": 3,
    "explanation": "Civil society helps create access to information and can lobby to influence legislation in a democratic system."
  },
  {
    "correctAnswer": 1,
    "explanation": "Civic societies are voluntary community organizations that exist independently of direct state control."
  },
  {
    "correctAnswer": 3,
    "explanation": "Political parties are different from the others because they compete for political power rather than serving as civic associations."
  },
  {
    "correctAnswer": 0,
    "explanation": "Good decisions require reliable data, proper representation, enough information, and sound analysis."
  },
  {
    "correctAnswer": 0,
    "explanation": "Wisdom is a mature understanding that helps people make sensible decisions."
  },
  {
    "correctAnswer": 3,
    "explanation": "The ability to recognize right and wrong issues in actions and decisions is moral sensitivity."
  },
  {
    "correctAnswer": 1,
    "explanation": "Drought aid is not one of the standard structural reasons usually given for why poor countries remain poorer."
  },
  {
    "correctAnswer": 3,
    "explanation": "Kantian ethics is a non-consequential theory that judges actions by whether they are right in themselves."
  },
  {
    "correctAnswer": 1,
    "explanation": "Microeconomics studies the behavior of individual consumers and producers."
  },
  {
    "correctAnswer": 3,
    "explanation": "Comparative advantage means countries should specialize in goods they can produce at lower relative cost."
  },
  {
    "correctAnswer": 3,
    "explanation": "Traditional justice institutions differ from place to place because they reflect local customs and community values."
  },
  {
    "correctAnswer": 0,
    "explanation": "Religious prejudice undermines the impartial functioning of courts."
  },
  {
    "correctAnswer": 0,
    "explanation": "A permanent tendency to rely on outside support is called dependency syndrome."
  },
  {
    "correctAnswer": 3,
    "explanation": "Patriotic behavior includes openness and respect for the differences that exist among people."
  },
  {
    "correctAnswer": 1,
    "explanation": "When citizens fail to behave responsibly, democratic culture weakens and the ground for dictatorship is strengthened."
  },
  {
    "correctAnswer": 1,
    "explanation": "In the new perspective of patriotism, productivity, innovation, and respect for law are emphasized more than the older military-centered view."
  },
  {
    "correctAnswer": 2,
    "explanation": "Promoting the common good requires commitment to one's duty and willingness to take moral responsibility."
  },
  {
    "correctAnswer": 0,
    "explanation": "Having very small income compared with others is an example of relative poverty."
  },
  {
    "correctAnswer": 2,
    "explanation": "Community sanitation work is best understood as a group responsibility."
  },
  {
    "correctAnswer": 3,
    "explanation": "Responsibility grounded in honesty and truthfulness arises from moral principles."
  },
  {
    "correctAnswer": 1,
    "explanation": "National efforts against terrorism contribute to the security and wellbeing of the global community."
  },
  {
    "correctAnswer": 3,
    "explanation": "Patriotic citizens are expected to play an exemplary role in defending national security."
  },
  {
    "correctAnswer": 2,
    "explanation": "Ethiopia is widely recognized globally for its contribution to peacekeeping."
  },
  {
    "correctAnswer": 1,
    "explanation": "A harmonious workplace requires observance of ethical standards and rules."
  },
  {
    "correctAnswer": 1,
    "explanation": "Free, fair, and periodic elections are among the core principles of democracy."
  },
  {
    "correctAnswer": 2,
    "explanation": "Democratic rights help create the conditions in which broader human rights are protected and practiced."
  },
  {
    "correctAnswer": 0,
    "explanation": "The system of checks and balances is different from the others because it is a constitutional mechanism rather than a specific institution."
  },
  {
    "correctAnswer": 3,
    "explanation": "A core value of Ethiopia's foreign relations is promotion and protection of national sovereignty."
  },
  {
    "correctAnswer": 2,
    "explanation": "The first written Ethiopian constitution was mainly intended to legalize and strengthen the emperor's power."
  },
  {
    "correctAnswer": 3,
    "explanation": "Environmental protection ultimately aims at improving people's health and living standards."
  },
  {
    "correctAnswer": 3,
    "explanation": "Sexism harms the world of work by limiting women's potential contribution to society."
  },
  {
    "correctAnswer": 3,
    "explanation": "Dependency contributes to widening economic and social disparity."
  },
  {
    "correctAnswer": 1,
    "explanation": "A major risk of dependency is that wealthy nations can exercise broad influence over poorer countries."
  },
  {
    "correctAnswer": 2,
    "explanation": "Iddir is the traditional association in which members contribute to help cover funeral-related costs."
  },
  {
    "correctAnswer": 1,
    "explanation": "Civic participation is voluntary cooperation and activity intended to promote the common good."
  },
  {
    "correctAnswer": 1,
    "explanation": "The ultimate purpose of reading is continuous acquisition of knowledge that benefits both the individual and society."
  },
  {
    "correctAnswer": 2,
    "explanation": "Destroying transmission towers harms both public property and the destroyer's own broader social interests."
  },
  {
    "correctAnswer": 2,
    "explanation": "Lack of respect for work pushes people to look for easy and improper ways of getting money."
  },
  {
    "correctAnswer": 0,
    "explanation": "A negative economic effect of globalization is increased dependency on imported cheap goods and services."
  },
  {
    "correctAnswer": 0,
    "explanation": "Inability to face the truth about oneself reflects reliance on others rather than self-reliance."
  },
  {
    "correctAnswer": 3,
    "explanation": "Failure to discharge constitutional obligations can weaken the practical enjoyment and protection of one's rights."
  },
  {
    "correctAnswer": 2,
    "explanation": "In Ethiopia, both federal and regional governments exercise concurrent powers in some areas of revenue and tax collection."
  },
  {
    "correctAnswer": 0,
    "explanation": "Political tolerance helps unify diverse ethnic, religious, and political groups within one democratic framework."
  },
  {
    "correctAnswer": 2,
    "explanation": "Rights and duties are balanced because exercising a right also requires fulfillment of corresponding obligations."
  },
  {
    "correctAnswer": 1,
    "explanation": "Unlimited government is marked by arbitrary power and disregard for the rule of law."
  },
  {
    "correctAnswer": 3,
    "explanation": "Occupation influences the kind and extent of personal responsibility a person has."
  },
  {
    "correctAnswer": 0,
    "explanation": "A mixed economy combines individual decision-making with priorities and regulation set by government."
  },
  {
    "correctAnswer": 2,
    "explanation": "Neglecting work duties while spending office time on coffee and conversation violates punctuality and proper use of working time."
  },
  {
    "correctAnswer": 0,
    "explanation": "Dependency weakens initiative and political will by encouraging reliance on outside help."
  },
  {
    "correctAnswer": 1,
    "explanation": "The best remedy for dependency is to build self-reliance by helping citizens recognize and develop their own capacities."
  },
  {
    "correctAnswer": 2,
    "explanation": "A government has legitimate authority when it receives its mandate to govern from the people."
  },
  {
    "correctAnswer": 1,
    "explanation": "Conducting foreign relations and organizing national armed forces are exclusive powers of the federal government."
  },
  {
    "correctAnswer": 0,
    "explanation": "Ethiopian foreign relations are officially based on coexistence and cooperation with states and peoples."
  },
  {
    "correctAnswer": 2,
    "explanation": "Formal court-based resolution of disputes through established legal procedures is litigation."
  },
  {
    "correctAnswer": 1,
    "explanation": "A curative anti-corruption approach focuses on prosecuting and bringing corrupt officials to justice."
  },
  {
    "correctAnswer": 0,
    "explanation": "Institutions fight corruption by making activities transparent and holding officials accountable."
  },
  {
    "correctAnswer": 3,
    "explanation": "Where there is no rule of law, political and social order tends to break down."
  },
  {
    "correctAnswer": 3,
    "explanation": "The right to self-government helps ensure equal political participation for nations, nationalities, and peoples."
  },
  {
    "correctAnswer": 0,
    "explanation": "This choice is different because democratic governance does not hold that individual rights should always come before public interest."
  },
  {
    "correctAnswer": 3,
    "explanation": "If taxpayers with the same level of income are treated differently, the principle of horizontal equity is violated."
  },
  {
    "correctAnswer": 0,
    "explanation": "International monetary organizations can negatively affect third world development by exerting political and cultural influence."
  },
  {
    "correctAnswer": 3,
    "explanation": "A central stated goal of institutions like the IMF and World Bank is to support growth, production, and employment."
  },
  {
    "correctAnswer": 0,
    "explanation": "A charismatic, appealing, and influential leader is often described as engaging."
  },
  {
    "correctAnswer": 2,
    "explanation": "Freedom of the press serves as an information channel between government and the public, which strengthens participation and accountability."
  },
  {
    "correctAnswer": 3,
    "explanation": "Judicial review is the power of courts to invalidate legislative and executive acts that violate the constitution."
  },
  {
    "correctAnswer": 2,
    "explanation": "Planning and saving time helps develop the habit of living within the limits of one's capacity."
  },
  {
    "correctAnswer": 1,
    "explanation": "A lavish tezkar ceremony is an example of extravagant spending."
  },
  {
    "correctAnswer": 0,
    "explanation": "Voting is one of the clearest examples of direct political participation."
  },
  {
    "correctAnswer": 2,
    "explanation": "Wisdom differs from knowledge because it is the good use and application of what one has learned."
  },
  {
    "correctAnswer": 1,
    "explanation": "Truthfulness is supported and encouraged by social norms and religions."
  },
  {
    "correctAnswer": 3,
    "explanation": "The right to privacy includes protection against arbitrary searches of one's person, home, or property."
  },
  {
    "correctAnswer": 0,
    "explanation": "Forcing children into hazardous labor is a clear human rights abuse rather than a specifically democratic-rights issue."
  },
  {
    "correctAnswer": 1,
    "explanation": "Treating some cultures as superior to others contradicts the democratic system established in Ethiopia."
  },
  {
    "correctAnswer": 2,
    "explanation": "The executive branch is primarily responsible for implementing and enforcing government policies and strategies."
  }
] as const;

export const matric2015CivicsQuestions: MatricExamQuestion[] = raw2015CivicsQuestions.map((item, index) => ({
  id: `m2015-civ-${index + 1}`,
  question: item.question,
  options: [...item.options],
  correctAnswer: raw2015CivicsAnswerKey[index].correctAnswer,
  explanation: raw2015CivicsAnswerKey[index].explanation,
}));

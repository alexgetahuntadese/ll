import { MatricExamQuestion } from "./matricExams";

const raw2017SocialEconomicsQuestions = [
  {
    "question": "Which one of the following is a determinant of aggregate demand?",
    "options": [
      "Availability of credit",
      "Cost of inputs",
      "State of technology",
      "Change in productivity"
    ]
  },
  {
    "question": "What is the effect of an exogenous increase in government spending?",
    "options": [
      "Aggregate demand shifts to the right increasing both output and price level.",
      "Aggregate demand shifts to the left increasing both output and price level",
      "Aggregate demand shifts to the left decreasing output and increasing price level.",
      "Aggregate demand shifts to the right increasing output but decreasing price level."
    ]
  },
  {
    "question": "Which one of the following is correct about factors affecting aggregate supply?",
    "options": [
      "Higher price of imported raw materials leads to firms to produce more.",
      "Lower demand for commodities in the market initiates firms to produce more.",
      "Subsidizing domestic industry in technology leads to decrease production.",
      "Qualified high managerial ability leads to firms to produce more production."
    ]
  },
  {
    "question": "Among the following statements, which one is correct about the short-run aggregate supply curve?",
    "options": [
      "It shows the quantity demanded at different price levels, ceteris paribus.",
      "It reveals that as price level rises, firms decrease the quantity supplied of goods.",
      "It shows the quantity supplied of output at various price levels, ceteris paribus.",
      "It reveals that as price level drops, firms increase the quantity supplied of goods."
    ]
  },
  {
    "question": "Which one of the following is true about short-run equilibrium in the economy?",
    "options": [
      "The occurrence of a shortage of goods leads to firms decrease output and consumption decrease consumption.",
      "It is the intersection of aggregate demand and aggregate supply.",
      "The occurrence of a surplus of goods leads to firms decrease output and consumption increase consumption.",
      "It is the intersection of long-run and short-run aggregate supply curves."
    ]
  },
  {
    "question": "Suppose the price level changed from the equilibrium of aggregate demand and short run aggregate supply in an economy. Which of the following is true about the result?",
    "options": [
      "At a lower price level, there will be surplus, and the price level decreases.",
      "At a higher price level there will be shortage, and the price level increases.",
      "At a lower price level, there will be shortage and the price level rises.",
      "At a higher price level there will be surplus, and the price level increases"
    ]
  },
  {
    "question": "Which one of the following is a solution for the market failure caused by a firm that pollutes a river?",
    "options": [
      "Taxing the polluting firm",
      "Subsidizing the polluting firm",
      "Encouraging the polluting firm",
      "Renting the polluted river"
    ]
  },
  {
    "question": "Which one of the following explains the free rider problem in an economy?",
    "options": [
      "Free ridership is a problem that arises due to the excludable nature of public goods.",
      "Individuals get the benefits of public goods without contributing anything to the cost.",
      "All individuals have the incentive to pay for the public good.",
      "The free rider problem enables the markets operate efficiently for public goods."
    ]
  },
  {
    "question": "Among the following alternatives, which one represents a positive externality?",
    "options": [
      "Playing loud music in the neighborhood",
      "Smoking in public places",
      "Vaccination program in the neighborhood",
      "Overgrazing cows in the common pasture lands"
    ]
  },
  {
    "question": "Asymmetric information is a situation when;",
    "options": [
      "buyers and sellers have different types of information.",
      "buyers and sellers have the same type of information.",
      "buyers and sellers want to be free riders.",
      "buyers and sellers lack agreement on the price."
    ]
  },
  {
    "question": "When an individual builds on their skills by acquiring more education/training, the individual is trying to",
    "options": [
      "free ride the employer.",
      "screen the employer.",
      "create externality for the employer.",
      "signal to the employer."
    ]
  },
  {
    "question": "Why is it necessary the need for consumer protection?",
    "options": [
      "Consumers often do not exercise their rights.",
      "Sellers compete with each other aggressively.",
      "Consumers' interest and business survival are unrelated.",
      "Consumers have the same information as sellers."
    ]
  },
  {
    "question": "Which one of the following is among the general objectives of macroeconomic policy?",
    "options": [
      "Cost minimization",
      "Income inequality",
      "Healthy balance of payment",
      "Profit maximization"
    ]
  },
  {
    "question": "Among the following alternatives, which one is a monetary policy tool?",
    "options": [
      "Taxation",
      "Discount rate",
      "Transfer payments",
      "Grants in aid"
    ]
  },
  {
    "question": "Which one of the following is NOT a financial sector reform component of the macroeconomic reforms of the Home Grown Economic Reforms?",
    "options": [
      "Reduce the supply of credit to the private sector",
      "Promote market based interest rate",
      "Strengthen the capacity of the National Bank of Ethiopia",
      "Establish and expand capital markets"
    ]
  },
  {
    "question": "Which one of the following is an advantage of fiscal decentralization?",
    "options": [
      "Local externalities",
      "Inefficient tax system",
      "Ineffectiveness of redistributing program",
      "Fostering intergovernmental competition"
    ]
  },
  {
    "question": "Which one of the following is true regarding the link between population growth and the environment?",
    "options": [
      "Rapid population growth reduces disguised unemployment and increases per capita productivity.",
      "Rapid population growth accompanied by heavy rural-urban migration could lead to urban pollution.",
      "Rapid population growth leads to capital formation and accelerated rural development due to high propensity to save and invest",
      "Rapid population growth enables improvement in land to man ratio due to the elastic supply of land."
    ]
  },
  {
    "question": "Rural development is a strategy focused on",
    "options": [
      "capital intensive resources",
      "technology intensive resources",
      "increasing rural-urban migration",
      "the utilization of natural resources"
    ]
  },
  {
    "question": "Which one of the following best describe climate change?",
    "options": [
      "Persistent variation in the mean state of climate",
      "A short lived change in the weather from day to day",
      "A decline in forest coverage through deforestation",
      "Release of greenhouse gases in to the atmosphere"
    ]
  },
  {
    "question": "Which one of the following is true about income policy?",
    "options": [
      "It stabilizes wages and prices.",
      "It facilitates money supply.",
      "It stabilizes the interest rate.",
      "It encourages reduction of taxes."
    ]
  },
  {
    "question": "Consider the market for teff, what will be the impact of a government imposition of a price floor?",
    "options": [
      "The price floor is below the equilibrium price of teff resulting in shortage of teff.",
      "The price floor is above the equilibrium price of teff resulting in shortage of teff.",
      "The price floor is below the equilibrium price of teff resulting in surplus of teff.",
      "The price floor is above the equilibrium price of teff resulting in surplus of teff."
    ]
  },
  {
    "question": "In a free market for labor, the wage rate is determined such that",
    "options": [
      "the demand of labor is greater than the supply of labor.",
      "perfect, costless information and labour mobility.",
      "the government sets the minimum wage.",
      "the supply of labor is greater than the demand for labor."
    ]
  },
  {
    "question": "Which one of the following is the disadvantage of the floating exchange rate regime?",
    "options": [
      "Correction of balance of payments deficits",
      "Protection from external shocks",
      "Governments are free to pursue other policies",
      "Instability and uncertainty facing firms and consumers"
    ]
  },
  {
    "question": "What is the correct name for a decrease in the exchange rate due to market forces?",
    "options": [
      "Depreciation",
      "Devaluation",
      "Appreciation",
      "Revaluation"
    ]
  },
  {
    "question": "Among the following statements, which one is correct about taxation?",
    "options": [
      "It is payment made to government to obtain direct benefit in return.",
      "It is the compulsory, unrequited payments to general government.",
      "It is payments that individuals make to government if they want.",
      "It is the only source of revenue for the government for personal use."
    ]
  },
  {
    "question": "Which one of the following is the main objective of taxation?",
    "options": [
      "Stabilizing the economy",
      "Minimizing income equalities",
      "Encouraging import",
      "Reducing regional balance"
    ]
  },
  {
    "question": "In United Kingdom (UK), what is the main objective of a \"sin tax\" on products like tobacco?",
    "options": [
      "Encouraging administrative efficiency",
      "Encouraging consumption",
      "Reducing consumption",
      "Stabilizing the economy"
    ]
  },
  {
    "question": "Which one of the following correctly states about tax incidence?",
    "options": [
      "It relates to the way the burden of tax is distributed among economic units.",
      "It points out who is illegally responsible for paying the tax from the income.",
      "It is imposing high taxes on high-income earners without any consideration.",
      "It is the way of discouraging low-income earners from paying taxes."
    ]
  },
  {
    "question": "Which one of the following is the characteristic feature of a good tax system?",
    "options": [
      "It creates income inequalities.",
      "It is complex and financially inelastic.",
      "It enables optimum allocation of resources.",
      "It is narrow based-tax and is levied only on income."
    ]
  },
  {
    "question": "Which one of the following is the focus area of macroeconomics?",
    "options": [
      "Profit maximization of a corporation",
      "The growth of a firm in the economy",
      "Cost minimization of a specific company",
      "Inflation caused by different factors"
    ]
  },
  {
    "question": "In which of the following macroeconomics is different from microeconomics?",
    "options": [
      "Studying about the performance of individual firm",
      "Studying about the behavior of the aggregate economy",
      "Analyzing about the actions of individual company",
      "Focusing on the specific price of products"
    ]
  },
  {
    "question": "Which one of the following is a key challenge of macroeconomics?",
    "options": [
      "Income and consumption pattern of a given household",
      "The total amount of laborers hired by a given industry",
      "The amount of profit earned by a given firm",
      "The number of unemployed people in a given country"
    ]
  },
  {
    "question": "Balance of trade of a country is the difference between",
    "options": [
      "gross domestic product and gross national product.",
      "private and public businesses and transfers.",
      "trade surplus and trade deficit.",
      "export and import earning from goods and services."
    ]
  },
  {
    "question": "Which one of the following school of macroeconomic thought was predominant until the occurrence of the Great Depression?",
    "options": [
      "Monetarist",
      "Classical",
      "Keynesian",
      "New Keynesian"
    ]
  },
  {
    "question": "Which one of the following is the view of Classical theory?",
    "options": [
      "Fiscal policy is useful to influence output.",
      "Recession is a temporary phenomenon.",
      "Monetary policy can influence output.",
      "There is a need of cutting government spending."
    ]
  },
  {
    "question": "Which one of the following macroeconomic school stressed the existence of nominal rigidities arising from nominal wage contracts?",
    "options": [
      "The new Classical",
      "Keynesian",
      "The classical",
      "The monetarist"
    ]
  },
  {
    "question": "Which one of the following is true about the differences between monetarist and Keynesian school of thought?",
    "options": [
      "Keynesians argued that aggregate demand is always automatically high.",
      "Monetarists argued that fiscal policy addresses macroeconomic problems.",
      "Keynesians argued that monetary policy stimulates aggregate demand.",
      "Monetarist argued that monetary policy addresses macroeconomic problems."
    ]
  },
  {
    "question": "Which one of the following best describes about aggregate demand in a given country?",
    "options": [
      "It is the total expenditure of households and government on goods and services in a given period.",
      "It is the total amount that households and firms willingly spend on the country's goods and services in a given period.",
      "It is total demand by households, firms and government on the goods and services in a given period.",
      "It is total spending by firms and government on the economy's goods and services in a given period."
    ]
  },
  {
    "question": "Which one of the following is correct about factors affecting household consumption expenditure?",
    "options": [
      "Expectation of a lower future income increases consumption.",
      "Decreases in wealth lead to increase in consumption.",
      "Increases in interest rate increases consumption.",
      "Increases in income taxes decreases consumption."
    ]
  },
  {
    "question": "What type of policy that aims at changing government spending?",
    "options": [
      "Exchange rate policy",
      "Monetary policy",
      "Fiscal policy",
      "Property rights policy"
    ]
  },
  {
    "question": "In a situation when an economy is facing the problem of deficient demand, what will happen to the economy?",
    "options": [
      "Depression marked by a decline in unemployment",
      "Depression marked by underproduction",
      "Depression marked by fall in incomes",
      "Enjoyment marked by a fall in prices"
    ]
  },
  {
    "question": "Which one of the following is important role of fiscal policy in an economy?",
    "options": [
      "Increasing people's income by increasing taxes",
      "Increasing government expenditure to solve recession",
      "Solving trade deficit by increasing imports",
      "Increasing government expenditure to control inflation"
    ]
  },
  {
    "question": "Which one of the following is true regarding the impact of monetary policy on aggregate demand?",
    "options": [
      "Lowering interest rate decreases aggregate demand.",
      "Increasing the discount rote increases aggregate demand.",
      "An increase in money supply decreases aggregate demand.",
      "An increase in money supply increases aggregate demand."
    ]
  },
  {
    "question": "Which one of the following is the main issue of macroeconomic policy?",
    "options": [
      "Maximizing firm's profit",
      "Controlling inflation",
      "Encouraging firm's competition",
      "Restructuring the market"
    ]
  },
  {
    "question": "Which one of the following is the objective of the national long-term plan after the reform of 2021 â€“ 2030?",
    "options": [
      "Expanding access to education and health services and achieving MDGs",
      "Launching strategy of Agricultural Development Led Industrialization",
      "Maintaining macroeconomic stability, ensuring rapid sustainable economic growth and creating decent job",
      "Speed up and catalyze transformation of the domestic private sector and render them a capable development force"
    ]
  },
  {
    "question": "Which one of the following was a crucial component of the second five year plan during the monarchy regime?",
    "options": [
      "Enhancement of technical and vocational education",
      "Overvalued currency and implemented pricing policies",
      "Transition from an agricultural economy to an agro-industry",
      "Strengthened a political system that guaranteed administrative justice"
    ]
  },
  {
    "question": "Which one of the following was the challenges Ethiopia encountered with during its implementation of the Growth and Transformation Plans I and II?",
    "options": [
      "Sluggish structural transformation and weak sectorial linkages",
      "Actual growth performance was higher than the annual target rate.",
      "The contribution of the service sector to the overall GDP was the highest.",
      "The contribution of each sector to the overall economy was uniformly low."
    ]
  },
  {
    "question": "Which one of the following is correct about the key strategic pillars of the ten-year development plan after reform?",
    "options": [
      "Building regional monopoly power and economy",
      "Quality economic growth and shared prosperity",
      "Public sector-led economic growth",
      "Gender and social exclusion"
    ]
  },
  {
    "question": "Among the followings, which one is the objective of the Home Grown Economic Reform?",
    "options": [
      "Encouraging debt vulnerabilities.",
      "Creating inadequate job opportunities",
      "Transition from private to public sector-led growth",
      "Maintaining macroeconomic stability"
    ]
  },
  {
    "question": "One of the following correctly describes weather. Which one is it?",
    "options": [
      "It is unpredictable atmospheric conditions.",
      "It is short-term atmospheric conditions.",
      "It is rainy season occurs for long period of time.",
      "It is long-term atmospheric conditions."
    ]
  },
  {
    "question": "Which one of the following is true regarding the link between global warming and climate change?",
    "options": [
      "Greenhouse gases raise atmospheric temperatures and produce other changes in the climate system.",
      "Global warming is unrelated to human activities emitting greenhouse gases",
      "There is no link between economic activity and energy emission through the green house effect.",
      "Burning of fossil fuels and reductions of forests that sink carbon dioxide decreases green house gases."
    ]
  },
  {
    "question": "Which one of the following shows the impact of environmental degradation and climate change on economic growth?",
    "options": [
      "Improvement of food security due to length of growing seasons in arid areas",
      "Long-term changes influencing agriculture, water, health and other sectors",
      "Use of biologically renewable resources and renewable physical stock",
      "Improvement in the economic well-being of the rural people"
    ]
  },
  {
    "question": "Which one of the following is an example of mitigation strategy to tackle climate change?",
    "options": [
      "Subsidizing the use of fossil fuels",
      "Reducing the role of indigenous communities",
      "Destabilizing greenhouse gases",
      "Reducing the release of carbon dioxide (CO2)"
    ]
  },
  {
    "question": "Which one of the following is responsible for an active economic activity and emission link resulting in global warming?",
    "options": [
      "Green growth strategies",
      "Mitigation policies",
      "Greenhouse gases",
      "Carbon taxes"
    ]
  },
  {
    "question": "Among the following statements, which one is correct about mitigation strategy to address climate change?",
    "options": [
      "It adjusts to the potential impacts of climate change.",
      "It emits the same amount of pollution across all countries.",
      "It involves long-term limits on the amount of greenhouse emissions.",
      "It intensives use of non-renewable resources of energy."
    ]
  },
  {
    "question": "Which one of the following describes green economy?",
    "options": [
      "It is characterized by loss of biodiversity and ecosystem services.",
      "It emits higher percentage of greenhouse gas than other economies.",
      "It uses high carbon, is resource inefficient and socially exclusive.",
      "It reduces environmental risk and ecological scarcity to improve well-being."
    ]
  },
  {
    "question": "Which one of the following is NOT a sources of renewable energy?",
    "options": [
      "Solar energy",
      "Fossil fuel energy",
      "Wind energy",
      "Thermal energy"
    ]
  },
  {
    "question": "Which one of the following is correct about green growth?",
    "options": [
      "It relies on eroding the natural capital.",
      "It is a carbon intensive growth strategy.",
      "It employs renewable energy and low carbon.",
      "It exacerbates environmental related risks."
    ]
  },
  {
    "question": "Which one of the following is NOT a key cause of Ethiopia's vulnerability to climate change as indicated in the policy documents of the country?",
    "options": [
      "High population growth",
      "Dependence on rain-fed agriculture",
      "Carbon emission from rapid industrialization",
      "Poor water resource development"
    ]
  },
  {
    "question": "Which of the following tax approach has the advantage of linking tax equity with the expenditure side of the public budget?",
    "options": [
      "The benefits approach",
      "The ability to pay approach",
      "The approach Bansed on vertical equity",
      "The approach based on horizontal equity"
    ]
  },
  {
    "question": "Which one of the following statements is correct about the nature of tax system in Ethiopia?",
    "options": [
      "The regional governments are solely responsible for tax collection.",
      "The federal government is solely responsible for tax collection.",
      "The federal and regional governments share tax revenue and manage their budgets.",
      "The federal government levies taxes on behalf of the regional governments."
    ]
  },
  {
    "question": "In Ethiopia, which of the following is correct regarding to the turnover tax?",
    "options": [
      "A tax levied on persons unregistered for value added tax.",
      "A tax imposed on goods that are hazardous to harmful products.",
      "A tax levied on the values added at every stage.",
      "A tax imposed on income from employment."
    ]
  },
  {
    "question": "Which one of the following is the correct definition of tax evasion?",
    "options": [
      "Falsifying information on tax return to reduce one's tax liability",
      "Taking full advantage of tax provisions to reduce one's tax obligations",
      "Paying the same share of tax regardless of income",
      "The degree of complexity in the tax administration system"
    ]
  },
  {
    "question": "What is the reason for poverty to be considered as a multidimensional concept?",
    "options": [
      "It is based on a single dimension.",
      "It is adequately measured with income.",
      "It only measures quantitative related difference.",
      "It depends on several related deprivations."
    ]
  },
  {
    "question": "In the steps listed for measuring poverty, what does the first step says that 'defining an indicator of welfare' describe?",
    "options": [
      "Specifying a minimal socially acceptable level of income or consumption",
      "Implementing a representative survey in which consumption is measured",
      "Taking the first step of measurement to know which people are rich",
      "Choosing and calculating a specific poverty measurement"
    ]
  },
  {
    "question": "Which one of the following is in comparison to other people's standing in the economy?",
    "options": [
      "Poverty headcount index",
      "Absolute poverty",
      "Relative poverty",
      "Multidimensional poverty"
    ]
  },
  {
    "question": "Among the following statements, which one is correct regarding to absolute poverty?",
    "options": [
      "The comparison of an individual to other people's standing in the economy",
      "The situation of someone being unable to meet the subsistence basic needs",
      "The explanation of matter of failure of distributive justice",
      "The description of an individual able to command sufficient resources"
    ]
  },
  {
    "question": "Which one of the following deals with households and the total incomes they receive regardless of the way in which they received that income?",
    "options": [
      "Social inequality of community",
      "Size distribution of income",
      "Functional distribution of income",
      "Factor share distribution of income"
    ]
  },
  {
    "question": "Which one of the following is true about the status of women in relation to men in development?",
    "options": [
      "Women have stable sources of income.",
      "Women's earning potential is higher.",
      "Intra-household resource allocation favors women.",
      "Women are much less likely to be in formal jobs."
    ]
  },
  {
    "question": "Which one of the following country made significant progress in reducing poverty over the past half century?",
    "options": [
      "China",
      "Eritrea",
      "India",
      "Bangladesh"
    ]
  },
  {
    "question": "Which one of the following is true about the poverty in Sub-Saharan Africa?",
    "options": [
      "The majority of people on less than $1.90 a day live in the region.",
      "The region experienced significant reduction in poverty in the past 50 years.",
      "The region has managed to escape the problem of poverty.",
      "The region has lifted millions of citizens out of poverty in the last decade."
    ]
  },
  {
    "question": "What is the main advantage of cottage industries in reducing poverty?",
    "options": [
      "It employs capital intensive techniques.",
      "It has insignificant contribution to economies.",
      "It offers self-development exclusively for women.",
      "It employs labor intensive techniques."
    ]
  },
  {
    "question": "What was the goal of sustainable development and poverty reduction program (SDPRP) assigned by Ethiopian Peoples' Revolutionary Democratic Front?",
    "options": [
      "Building all-inclusive implementation capacity",
      "Capacity building in the public and private sector",
      "A massive push to accelerate economic growth",
      "Unleashing the potentials of Ethiopia's women"
    ]
  },
  {
    "question": "Which one of the following was the objective of the third five year plan during the imperial period (1968 â€“ 1973)?",
    "options": [
      "Establishment of cadre of skilled and semi-skilled personnel to work in processing industries.",
      "Development of a strong infrastructure (transportation, construction, communication)",
      "Expansion of educational opportunities and improvement in peasant agriculture.",
      "Acceleration of agricultural development by promoting commercial agricultural venture."
    ]
  },
  {
    "question": "The unemployment rate for an economy is 4 %. The labor force is estimated to be 55 million. What is the number of unemployed people in millions?",
    "options": [
      "2.2 million",
      "220 million",
      "20 million",
      "22 million"
    ]
  },
  {
    "question": "What is an income tax of an employee works in the one of Ethiopian government development organization with salary of Birr 36,000?",
    "options": [
      "Birr 12,600",
      "Birr 11,100",
      "Birr 26,400",
      "Birr 24,900"
    ]
  },
  {
    "question": "Suppose the area between the line of complete equality (45 degree) and the Lorenz curve is 60 units. Additionally the whole area below the line of equality (45 degree) is 150 units. What is the Gini-coefficient?",
    "options": [
      "0.4",
      "0.6",
      "0.2",
      "0.3"
    ]
  },
  {
    "question": "Suppose the adult population in a given country is estimated at 105 million. The total number of employed and unemployed individuals is estimated at 55 million and 8 million respectively. What is the labor force participation rate?",
    "options": [
      "66%",
      "7%",
      "11%",
      "60 %"
    ]
  },
  {
    "question": "In November 2010, the Consumer Price Index (CPI) for a country was 100. In November 2011 the Consumer Price Index CPI for the same country was 130. What was the inflation rate for 2011?",
    "options": [
      "13%",
      "30%",
      "10%",
      "23%"
    ]
  }
] as const;

const answerKey = [
  0, 0, 3, 2, 1, 2, 0, 1, 2, 0,
  3, 0, 2, 1, 0, 3, 1, 3, 0, 0,
  3, 1, 3, 0, 1, 0, 2, 0, 2, 3,
  1, 3, 3, 2, 1, 1, 3, 2, 3, 2,
  1, 1, 3, 1, 2, 2, 0, 1, 3, 1,
  0, 1, 3, 1, 2, 3, 1, 2, 2, 0,
  2, 0, 0, 3, 0, 2, 1, 1, 3, 0,
  0, 3, 2, 2, 0, 1, 0, 3, 1,
] as const;

const explanations = [
  "Credit conditions affect households' and firms' willingness and ability to spend, so they influence aggregate demand.",
  "Higher government spending raises total expenditure, so aggregate demand shifts right and usually raises output and prices in the short run.",
  "Better managerial ability improves efficiency and output, so it supports higher aggregate supply.",
  "The short-run aggregate supply curve shows how much output firms will supply at different price levels, other things equal.",
  "Short-run equilibrium occurs where aggregate demand and aggregate supply intersect.",
  "If price falls below equilibrium, quantity demanded exceeds quantity supplied, creating shortage and upward pressure on price.",
  "A pollution tax makes the firm internalize the external cost it imposes on others.",
  "The free rider problem exists when people enjoy public goods without helping pay for them.",
  "Vaccination benefits both the person vaccinated and the wider community, so it creates a positive externality.",
  "Asymmetric information means one side of the market knows more than the other.",
  "Extra education and training signal productivity and ability to potential employers.",
  "Consumer protection is needed partly because consumers often lack power, awareness, or full information in the market.",
  "A healthy balance of payments is a standard macroeconomic policy objective.",
  "The discount rate is controlled by the central bank, so it is a monetary policy instrument.",
  "Reducing credit to the private sector is the opposite of a reform meant to deepen and strengthen the financial sector.",
  "Fiscal decentralization can improve performance by fostering competition among local governments.",
  "Rapid population growth plus rural-urban migration can intensify congestion and urban pollution.",
  "Rural development mainly centers on improving and using rural natural and productive resources.",
  "Climate change refers to persistent long-term changes in the average state of climate.",
  "Income policy aims to restrain or stabilize wages and prices.",
  "A binding price floor is set above equilibrium and creates surplus.",
  "A free labor market assumes mobility and good information rather than government wage fixing.",
  "Floating exchange rates can create instability and uncertainty for firms and consumers.",
  "A market-driven fall in the exchange rate is called depreciation.",
  "Taxation is a compulsory, unrequited payment to government.",
  "Among the given choices, taxation is used as a macro tool to help stabilize the economy.",
  "Sin taxes are imposed mainly to discourage consumption of harmful goods like tobacco.",
  "Tax incidence describes how the burden of a tax is shared across economic agents.",
  "A good tax system should support efficient allocation of resources rather than distort it unnecessarily.",
  "Macroeconomics studies economy-wide issues such as inflation, unemployment, and growth.",
  "Unlike microeconomics, macroeconomics focuses on aggregate economic behavior.",
  "Countrywide unemployment is a macroeconomic challenge, not a firm-level issue.",
  "Balance of trade compares export earnings with import earnings.",
  "Classical economics dominated before the Great Depression challenged its assumptions.",
  "Classical economists generally saw recessions as temporary and self-correcting.",
  "Keynesian economics emphasizes nominal rigidities such as sticky wages.",
  "Monetarists give a stronger role to monetary policy in addressing macroeconomic problems.",
  "Aggregate demand is the total demand for goods and services by households, firms, and government.",
  "Higher income taxes reduce disposable income and therefore reduce household consumption.",
  "Government spending is changed through fiscal policy.",
  "Deficient demand leads firms to cut production, creating underproduction and recessionary conditions.",
  "Fiscal policy can fight recession by increasing government expenditure.",
  "An increase in money supply tends to raise aggregate demand.",
  "Controlling inflation is one of the main concerns of macroeconomic policy.",
  "One major objective of the 2021-2030 development plan is maintaining macroeconomic stability while achieving rapid sustainable growth and jobs.",
  "The second five-year plan aimed to transform Ethiopia from a mainly agricultural economy into an agro-industrial one.",
  "A major challenge during GTP I and II was weak structural transformation and poor sectoral linkages.",
  "Quality economic growth and shared prosperity is one of the strategic pillars of the post-reform ten-year plan.",
  "Maintaining macroeconomic stability is a core objective of the Home Grown Economic Reform.",
  "Weather refers to short-term atmospheric conditions rather than long-term climate averages.",
  "Greenhouse gases warm the atmosphere and trigger wider changes in the climate system.",
  "Climate and environmental damage affects growth through agriculture, water, health, and related sectors over time.",
  "Mitigation includes actions that reduce carbon dioxide and other greenhouse-gas emissions.",
  "Greenhouse gases are the key link between economic activity and global warming.",
  "Mitigation is about limiting greenhouse-gas emissions over the long term.",
  "A green economy improves wellbeing while lowering environmental risk and ecological scarcity.",
  "Fossil fuel is non-renewable, unlike solar, wind, and geothermal or thermal renewable sources.",
  "Green growth relies on low-carbon production and wider use of renewable energy.",
  "Ethiopia's vulnerability is not mainly due to rapid industrial carbon emissions, since its industrial base and emissions are relatively low.",
  "The benefits approach links the tax burden to the benefits people receive from public spending.",
  "In Ethiopia, tax powers and revenues are shared between federal and regional governments.",
  "Turnover tax applies mainly to persons not registered for VAT.",
  "Tax evasion involves illegal actions such as falsifying returns to reduce tax liability.",
  "Poverty is multidimensional because it involves several related forms of deprivation, not income alone.",
  "The first practical step described here is setting a minimum acceptable level of income or consumption, that is, the poverty line.",
  "Relative poverty is judged in comparison with other people's position in the economy.",
  "Absolute poverty means failing to meet basic subsistence needs.",
  "Size distribution of income looks at total household income regardless of source.",
  "Women are generally less likely than men to be in formal jobs in many developing economies.",
  "China is widely cited for making major progress in poverty reduction over the past half century.",
  "A very large share of the world's extremely poor people live in Sub-Saharan Africa.",
  "Cottage industries help reduce poverty because they use labor-intensive methods and create employment.",
  "PASDEP was designed as a major push to accelerate economic growth after SDPRP.",
  "The third imperial five-year plan emphasized expanding educational opportunities and improving peasant agriculture.",
  "Four percent of a 55 million labor force is 2.2 million unemployed people.",
  "Using the relevant Ethiopian tax schedule for the stated salary gives Birr 11,100.",
  "The Gini coefficient here is 60 divided by 150, which equals 0.4.",
  "Labor force participation rate = labor force divided by adult population = 63/105, which is 60 percent.",
  "Inflation rate = (130 - 100) / 100 x 100 = 30 percent.",
] as const;

export const matric2017SocialEconomicsQuestions: MatricExamQuestion[] = raw2017SocialEconomicsQuestions.map((item, index) => ({
  id: `m2017-social-econ-${index + 1}`,
  question: item.question,
  options: [...item.options],
  correctAnswer: answerKey[index] ?? -1,
  explanation: explanations[index] ?? "Answer key was not provided in the Kehulum source.",
}));

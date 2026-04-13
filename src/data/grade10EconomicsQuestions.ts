const baseGrade10EconomicsQuestions: Record<string, any[]> = {
  "Unit 1: Theory of Consumer Behaviour": [
    // Easy
    {
      question: "What is utility in economics?",
      options: ["The price of a product", "The satisfaction derived from consuming a good or service", "The cost of production", "The supply of goods"],
      correct: "The satisfaction derived from consuming a good or service",
      explanation: "Utility refers to the satisfaction or pleasure a consumer derives from consuming a good or service.",
      difficulty: "Easy"
    },
    {
      question: "What does the law of diminishing marginal utility state?",
      options: ["Utility always increases", "As consumption increases, additional satisfaction from each unit decreases", "Prices always fall over time", "Supply creates its own demand"],
      correct: "As consumption increases, additional satisfaction from each unit decreases",
      explanation: "The law of diminishing marginal utility states that as a person consumes more of a good, the marginal (additional) utility from each extra unit decreases.",
      difficulty: "Easy"
    },
    {
      question: "What is total utility?",
      options: ["The utility from the last unit consumed", "The sum of all utility gained from consuming all units of a good", "The average utility per unit", "The cost of all goods consumed"],
      correct: "The sum of all utility gained from consuming all units of a good",
      explanation: "Total utility is the aggregate satisfaction obtained from consuming all units of a good or service.",
      difficulty: "Easy"
    },
    {
      question: "What is marginal utility?",
      options: ["Total satisfaction from all goods", "The additional satisfaction from consuming one more unit", "The average cost of production", "The price of the last unit"],
      correct: "The additional satisfaction from consuming one more unit",
      explanation: "Marginal utility is the extra satisfaction gained from consuming one additional unit of a good or service.",
      difficulty: "Easy"
    },
    {
      question: "A consumer maximizes utility when:",
      options: ["They buy the cheapest goods", "They spend all their income", "The marginal utility per birr spent is equal across all goods", "They consume only one type of good"],
      correct: "The marginal utility per birr spent is equal across all goods",
      explanation: "Consumer equilibrium is reached when the marginal utility per unit of money spent is equalized across all goods purchased.",
      difficulty: "Easy"
    },
    // Medium
    {
      question: "If the marginal utility of a good becomes zero, what happens to total utility?",
      options: ["It decreases", "It is at its maximum", "It becomes zero", "It doubles"],
      correct: "It is at its maximum",
      explanation: "When marginal utility equals zero, total utility is at its peak. Consuming more would cause total utility to decline.",
      difficulty: "Medium"
    },
    {
      question: "Which assumption underlies cardinal utility theory?",
      options: ["Utility cannot be measured", "Utility can be measured in numerical units", "Consumers are irrational", "All goods provide equal utility"],
      correct: "Utility can be measured in numerical units",
      explanation: "Cardinal utility theory assumes utility can be quantified and measured in units called 'utils'.",
      difficulty: "Medium"
    },
    {
      question: "What is the difference between cardinal and ordinal utility?",
      options: ["There is no difference", "Cardinal measures utility numerically; ordinal ranks preferences", "Ordinal is more precise than cardinal", "Cardinal only applies to luxury goods"],
      correct: "Cardinal measures utility numerically; ordinal ranks preferences",
      explanation: "Cardinal utility assigns numerical values to satisfaction, while ordinal utility only ranks preferences without assigning specific numbers.",
      difficulty: "Medium"
    },
    {
      question: "An indifference curve shows:",
      options: ["Different prices of goods", "Combinations of two goods that give equal satisfaction", "The supply of goods", "The cost of production"],
      correct: "Combinations of two goods that give equal satisfaction",
      explanation: "An indifference curve represents all combinations of two goods that provide the consumer with the same level of utility.",
      difficulty: "Medium"
    },
    {
      question: "Why do indifference curves slope downward?",
      options: ["Because prices always fall", "Because to maintain the same utility, consuming more of one good requires less of another", "Because of inflation", "Because supply exceeds demand"],
      correct: "Because to maintain the same utility, consuming more of one good requires less of another",
      explanation: "The negative slope reflects the trade-off between goods: to stay on the same utility level, gaining more of one good requires giving up some of the other.",
      difficulty: "Medium"
    },
    // Hard
    {
      question: "How does the marginal rate of substitution (MRS) relate to indifference curves?",
      options: ["MRS is constant along an indifference curve", "MRS is the slope of the indifference curve and diminishes along it", "MRS equals price ratio only at equilibrium", "MRS has no relation to indifference curves"],
      correct: "MRS is the slope of the indifference curve and diminishes along it",
      explanation: "The MRS is the rate at which a consumer is willing to trade one good for another while maintaining the same utility. It diminishes as we move along the curve, reflecting the convexity of indifference curves.",
      difficulty: "Hard"
    },
    {
      question: "In the ordinal utility approach, consumer equilibrium occurs where:",
      options: ["Total utility is zero", "The budget line is tangent to the highest attainable indifference curve", "Marginal utility equals price", "All income is saved"],
      correct: "The budget line is tangent to the highest attainable indifference curve",
      explanation: "Consumer equilibrium in ordinal theory is where the budget line touches the highest possible indifference curve, meaning MRS equals the price ratio.",
      difficulty: "Hard"
    },
    {
      question: "What is the income effect of a price change?",
      options: ["The change in quantity demanded due to a change in relative prices", "The change in quantity demanded due to a change in real purchasing power", "The total change in demand", "A shift in the supply curve"],
      correct: "The change in quantity demanded due to a change in real purchasing power",
      explanation: "The income effect refers to the change in consumption resulting from the change in real income (purchasing power) caused by a price change.",
      difficulty: "Hard"
    },
    {
      question: "What distinguishes a Giffen good from a normal good?",
      options: ["Giffen goods have upward-sloping supply curves", "For Giffen goods, the income effect outweighs the substitution effect, causing demand to rise when price increases", "Giffen goods are luxury items", "There is no difference"],
      correct: "For Giffen goods, the income effect outweighs the substitution effect, causing demand to rise when price increases",
      explanation: "A Giffen good is an inferior good where the income effect is so strong that it dominates the substitution effect, leading to an upward-sloping demand curve.",
      difficulty: "Hard"
    },
    {
      question: "How does the budget line shift when consumer income increases, ceteris paribus?",
      options: ["It rotates around one axis", "It shifts outward parallel to the original line", "It shifts inward", "It becomes steeper"],
      correct: "It shifts outward parallel to the original line",
      explanation: "An increase in income shifts the budget line outward (away from the origin) while maintaining the same slope, since relative prices have not changed.",
      difficulty: "Hard"
    },
    {
      question: "Why does the law of diminishing marginal utility help explain a downward-sloping demand curve?",
      options: ["Because each extra unit gives less additional satisfaction, consumers buy more only at lower prices", "Because utility always rises at the same rate", "Because supply determines all consumer choices", "Because consumers never compare price and utility"],
      correct: "Because each extra unit gives less additional satisfaction, consumers buy more only at lower prices",
      explanation: "As marginal utility falls, consumers are willing to pay less for additional units, which helps explain why demand generally slopes downward.",
      difficulty: "Hard"
    },
    {
      question: "If the price of one good falls while income stays constant, why might the consumer buy both more of that good and less of another good?",
      options: ["Because substitution and income effects can alter the consumption bundle", "Because preferences disappear", "Because all prices fall together automatically", "Because the budget line does not change"],
      correct: "Because substitution and income effects can alter the consumption bundle",
      explanation: "A lower price changes relative prices and real purchasing power, so consumers often substitute toward the cheaper good and adjust the whole bundle.",
      difficulty: "Hard"
    },
    {
      question: "What does a consumer's choice reveal if they stay on the same indifference curve after a price change?",
      options: ["Their overall satisfaction level is unchanged even though the bundle may differ", "Their income must have doubled", "They are irrational", "The demand curve has disappeared"],
      correct: "Their overall satisfaction level is unchanged even though the bundle may differ",
      explanation: "An indifference curve represents equal satisfaction, so different bundles on the same curve are equally preferred by the consumer.",
      difficulty: "Hard"
    },
    {
      question: "Why are indifference curves usually convex to the origin?",
      options: ["Because consumers are willing to give up less and less of one good as they get less of it", "Because prices are fixed by government", "Because marginal utility is always constant", "Because all goods are perfect substitutes"],
      correct: "Because consumers are willing to give up less and less of one good as they get less of it",
      explanation: "Convexity reflects diminishing marginal rate of substitution: the scarcer a good becomes in the bundle, the more valuable it becomes relative to the other good.",
      difficulty: "Hard"
    },
    {
      question: "A student's transport fare rises sharply, so they start walking and spend the saved money on lunch. Which idea best explains this behavior?",
      options: ["Consumer choice adjusts to changing prices under a budget constraint", "Demand is unrelated to price", "Only producers respond to incentives", "Utility theory applies only to luxury goods"],
      correct: "Consumer choice adjusts to changing prices under a budget constraint",
      explanation: "Consumers reallocate spending when prices change, choosing combinations that still maximize satisfaction within limited income.",
      difficulty: "Hard"
    },
    {
      question: "Why can two consumers with the same income choose very different bundles of goods at the same prices?",
      options: ["Because preferences differ even when budget constraints are identical", "Because income has no role in choice", "Because prices affect everyone identically in taste", "Because indifference analysis forbids different outcomes"],
      correct: "Because preferences differ even when budget constraints are identical",
      explanation: "The budget line may be the same, but the highest attainable indifference curve depends on each consumer's preferences and priorities.",
      difficulty: "Hard"
    },
    {
      question: "What is the strongest reason economists separate total utility from marginal utility?",
      options: ["Because decision-making at the margin often explains actual consumer choices better", "Because total utility is never useful", "Because marginal utility measures production cost", "Because consumers maximize total spending rather than satisfaction"],
      correct: "Because decision-making at the margin often explains actual consumer choices better",
      explanation: "Consumers usually decide whether one more unit is worth buying, so marginal utility is central to understanding real choice behavior.",
      difficulty: "Hard"
    },
    {
      question: "If the price ratio changes but preferences do not, what must happen at the new consumer equilibrium in ordinal analysis?",
      options: ["The tangency condition must adjust so MRS equals the new price ratio", "The consumer stays at the old equilibrium regardless", "The indifference curves change shape automatically", "Income becomes irrelevant"],
      correct: "The tangency condition must adjust so MRS equals the new price ratio",
      explanation: "At equilibrium, the slope of the highest attainable indifference curve must match the slope of the budget line, which is determined by relative prices.",
      difficulty: "Hard"
    },
    {
      question: "Why might a very poor household still buy a lower-quality staple when a preferred alternative exists?",
      options: ["Because the budget constraint can dominate preference, forcing practical compromise", "Because poor households never have preferences", "Because cheaper goods always give more utility", "Because quality has no economic meaning"],
      correct: "Because the budget constraint can dominate preference, forcing practical compromise",
      explanation: "Consumer theory recognizes that people maximize satisfaction subject to income limits, so constrained households may choose affordable rather than ideal bundles.",
      difficulty: "Hard"
    },
    {
      question: "What insight does consumer equilibrium provide to businesses and policymakers?",
      options: ["It helps explain how people respond to changes in prices and income", "It proves all consumers make the same decision", "It removes the need for market research", "It applies only in perfectly planned economies"],
      correct: "It helps explain how people respond to changes in prices and income",
      explanation: "Understanding equilibrium helps predict demand patterns, welfare effects, and how households adjust consumption when circumstances change.",
      difficulty: "Hard"
    }
  ],
  "Unit 2: Theories of Demand and Supply": [
    // Easy
    {
      question: "What does the law of demand state?",
      options: ["As price increases, quantity demanded increases", "As price increases, quantity demanded decreases, ceteris paribus", "Demand and supply are always equal", "Price has no effect on demand"],
      correct: "As price increases, quantity demanded decreases, ceteris paribus",
      explanation: "The law of demand states that there is an inverse relationship between the price of a good and the quantity demanded, all else being equal.",
      difficulty: "Easy"
    },
    {
      question: "What does the law of supply state?",
      options: ["As price increases, quantity supplied decreases", "As price increases, quantity supplied increases, ceteris paribus", "Supply is always constant", "Supply determines demand"],
      correct: "As price increases, quantity supplied increases, ceteris paribus",
      explanation: "The law of supply states that there is a direct relationship between price and quantity supplied, all other factors remaining constant.",
      difficulty: "Easy"
    },
    {
      question: "What is market equilibrium?",
      options: ["When government sets prices", "When quantity demanded equals quantity supplied", "When all goods are sold", "When prices are at their lowest"],
      correct: "When quantity demanded equals quantity supplied",
      explanation: "Market equilibrium occurs at the price where the quantity consumers want to buy equals the quantity producers want to sell.",
      difficulty: "Easy"
    },
    {
      question: "What causes a movement along the demand curve?",
      options: ["A change in consumer income", "A change in the price of the good itself", "A change in tastes", "A change in population"],
      correct: "A change in the price of the good itself",
      explanation: "A movement along the demand curve is caused only by a change in the good's own price, not by other factors.",
      difficulty: "Easy"
    },
    {
      question: "What is a surplus in a market?",
      options: ["Quantity demanded exceeds quantity supplied", "Quantity supplied exceeds quantity demanded", "The market is in equilibrium", "There are no goods available"],
      correct: "Quantity supplied exceeds quantity demanded",
      explanation: "A surplus (excess supply) occurs when the price is above equilibrium, causing producers to supply more than consumers demand.",
      difficulty: "Easy"
    },
    // Medium
    {
      question: "What is price elasticity of demand?",
      options: ["The total revenue from sales", "A measure of how responsive quantity demanded is to a change in price", "The slope of the supply curve", "The equilibrium price"],
      correct: "A measure of how responsive quantity demanded is to a change in price",
      explanation: "Price elasticity of demand measures the percentage change in quantity demanded resulting from a percentage change in price.",
      difficulty: "Medium"
    },
    {
      question: "If a good has price elasticity of demand greater than 1, demand is said to be:",
      options: ["Inelastic", "Elastic", "Unit elastic", "Perfectly inelastic"],
      correct: "Elastic",
      explanation: "When elasticity is greater than 1, demand is elastic — meaning quantity demanded changes by a larger percentage than the price change.",
      difficulty: "Medium"
    },
    {
      question: "Which factor causes a shift in the supply curve?",
      options: ["A change in the price of the good", "A change in production technology", "A movement along the curve", "Consumer preferences"],
      correct: "A change in production technology",
      explanation: "Changes in technology, input costs, government policies, or number of sellers cause the supply curve to shift, as opposed to movements along it.",
      difficulty: "Medium"
    },
    {
      question: "What are substitute goods?",
      options: ["Goods consumed together", "Goods that can replace each other in consumption", "Goods with no relation", "Goods that are always expensive"],
      correct: "Goods that can replace each other in consumption",
      explanation: "Substitute goods are products that can be used in place of each other. When the price of one rises, demand for its substitute increases.",
      difficulty: "Medium"
    },
    {
      question: "What happens to the equilibrium price when demand increases and supply remains constant?",
      options: ["Price decreases", "Price increases", "Price stays the same", "Price becomes zero"],
      correct: "Price increases",
      explanation: "An increase in demand with constant supply creates excess demand at the original price, pushing the equilibrium price upward.",
      difficulty: "Medium"
    },
    // Hard
    {
      question: "How does cross-price elasticity help classify goods as substitutes or complements?",
      options: ["Positive cross elasticity means complements", "Negative cross elasticity means substitutes", "Positive cross elasticity means substitutes; negative means complements", "Cross elasticity has no use"],
      correct: "Positive cross elasticity means substitutes; negative means complements",
      explanation: "If the cross-price elasticity is positive, the goods are substitutes (price of one rises, demand for the other rises). If negative, they are complements.",
      difficulty: "Hard"
    },
    {
      question: "Why might a price ceiling cause a shortage in the market?",
      options: ["It increases supply", "It sets the price below equilibrium, increasing demand and decreasing supply", "It has no effect", "It raises prices"],
      correct: "It sets the price below equilibrium, increasing demand and decreasing supply",
      explanation: "A binding price ceiling is set below the equilibrium price, which increases the quantity demanded while reducing the quantity supplied, creating a shortage.",
      difficulty: "Hard"
    },
    {
      question: "What is the incidence of a tax on a good with perfectly inelastic demand?",
      options: ["Producers bear the entire tax", "Consumers bear the entire tax burden", "The tax is shared equally", "No one pays the tax"],
      correct: "Consumers bear the entire tax burden",
      explanation: "When demand is perfectly inelastic, consumers cannot reduce their quantity demanded in response to price changes, so they absorb the full tax burden.",
      difficulty: "Hard"
    },
    {
      question: "Explain how the concept of consumer surplus relates to the demand curve.",
      options: ["Consumer surplus is the area above the demand curve", "Consumer surplus is the area between the demand curve and the market price, above the price line", "Consumer surplus equals total revenue", "Consumer surplus is always zero at equilibrium"],
      correct: "Consumer surplus is the area between the demand curve and the market price, above the price line",
      explanation: "Consumer surplus represents the difference between what consumers are willing to pay (shown by the demand curve) and what they actually pay (the market price).",
      difficulty: "Hard"
    },
    {
      question: "In the Ethiopian context, how might government intervention in the teff market affect equilibrium?",
      options: ["It has no effect", "Price controls below equilibrium could create shortages and black markets", "It always improves efficiency", "It only affects supply"],
      correct: "Price controls below equilibrium could create shortages and black markets",
      explanation: "If the government sets teff prices below market equilibrium, demand exceeds supply, leading to shortages. This can result in rationing, queues, or black market activity.",
      difficulty: "Hard"
    }
  ],
  "Unit 3: Theories of Production and Cost": [
    // Easy
    {
      question: "What is production in economics?",
      options: ["Only manufacturing goods", "The process of transforming inputs into outputs", "Selling goods in the market", "Importing raw materials"],
      correct: "The process of transforming inputs into outputs",
      explanation: "Production refers to the process of combining various inputs (land, labor, capital) to create goods and services (outputs).",
      difficulty: "Easy"
    },
    {
      question: "What are the factors of production?",
      options: ["Only labor and capital", "Land, labor, capital, and entrepreneurship", "Money and technology", "Government and businesses"],
      correct: "Land, labor, capital, and entrepreneurship",
      explanation: "The four factors of production are land (natural resources), labor (human effort), capital (tools and machinery), and entrepreneurship (organization and risk-taking).",
      difficulty: "Easy"
    },
    {
      question: "What is fixed cost?",
      options: ["Cost that changes with output", "Cost that remains constant regardless of output level", "The total cost of production", "The cost of raw materials"],
      correct: "Cost that remains constant regardless of output level",
      explanation: "Fixed costs do not change with the level of output in the short run, such as rent, insurance, and salaries of permanent staff.",
      difficulty: "Easy"
    },
    {
      question: "What is variable cost?",
      options: ["Cost that stays the same", "Cost that changes with the level of output", "The cost of land", "Fixed overhead expenses"],
      correct: "Cost that changes with the level of output",
      explanation: "Variable costs change as production levels change, such as costs of raw materials, wages of temporary workers, and electricity for machines.",
      difficulty: "Easy"
    },
    {
      question: "Total cost equals:",
      options: ["Fixed cost minus variable cost", "Fixed cost plus variable cost", "Revenue minus cost", "Only variable cost"],
      correct: "Fixed cost plus variable cost",
      explanation: "Total cost (TC) is the sum of total fixed cost (TFC) and total variable cost (TVC): TC = TFC + TVC.",
      difficulty: "Easy"
    },
    // Medium
    {
      question: "What does the law of diminishing marginal returns state?",
      options: ["Returns always increase", "As more of a variable input is added to fixed inputs, the additional output eventually decreases", "Fixed costs always decrease", "All inputs have equal productivity"],
      correct: "As more of a variable input is added to fixed inputs, the additional output eventually decreases",
      explanation: "The law of diminishing returns states that in the short run, as more units of a variable input are added to fixed inputs, the marginal product of the variable input eventually declines.",
      difficulty: "Medium"
    },
    {
      question: "What is average total cost (ATC)?",
      options: ["Total cost divided by total revenue", "Total cost divided by quantity of output", "Fixed cost divided by variable cost", "Marginal cost times quantity"],
      correct: "Total cost divided by quantity of output",
      explanation: "Average total cost is calculated by dividing total cost by the quantity produced: ATC = TC / Q.",
      difficulty: "Medium"
    },
    {
      question: "When marginal cost equals average total cost, what happens?",
      options: ["ATC is rising", "ATC is at its minimum point", "ATC is at its maximum", "Production should stop"],
      correct: "ATC is at its minimum point",
      explanation: "When MC = ATC, average total cost is at its minimum. If MC is below ATC, ATC falls; if MC is above ATC, ATC rises.",
      difficulty: "Medium"
    },
    {
      question: "What is the short run in production theory?",
      options: ["Less than one year", "A period when at least one input is fixed", "When all inputs can be changed", "When the firm makes losses"],
      correct: "A period when at least one input is fixed",
      explanation: "The short run is defined as a period during which at least one factor of production cannot be changed (is fixed).",
      difficulty: "Medium"
    },
    {
      question: "What are economies of scale?",
      options: ["Increasing costs as output grows", "Cost advantages gained by increasing the scale of production", "Decreasing output over time", "Government subsidies to firms"],
      correct: "Cost advantages gained by increasing the scale of production",
      explanation: "Economies of scale occur when increasing the scale of production leads to a lower average cost per unit, due to factors like specialization and bulk purchasing.",
      difficulty: "Medium"
    },
    // Hard
    {
      question: "How do isoquant curves relate to production theory?",
      options: ["They show cost levels", "They show combinations of two inputs that produce the same level of output", "They show profit maximization", "They show demand schedules"],
      correct: "They show combinations of two inputs that produce the same level of output",
      explanation: "An isoquant curve represents all combinations of two inputs (e.g., labor and capital) that yield the same quantity of output, similar to indifference curves in consumer theory.",
      difficulty: "Hard"
    },
    {
      question: "What is the marginal rate of technical substitution (MRTS)?",
      options: ["The rate of profit growth", "The rate at which one input can be substituted for another while maintaining the same output", "The price ratio of inputs", "The elasticity of supply"],
      correct: "The rate at which one input can be substituted for another while maintaining the same output",
      explanation: "MRTS measures how much of one input can be reduced when one more unit of another input is used, keeping output constant. It is the slope of the isoquant.",
      difficulty: "Hard"
    },
    {
      question: "A firm minimizes cost where:",
      options: ["It produces the least output", "The isocost line is tangent to the isoquant", "Marginal cost equals zero", "Fixed costs are eliminated"],
      correct: "The isocost line is tangent to the isoquant",
      explanation: "Cost minimization occurs where the isocost line (showing combinations of inputs for a given cost) is tangent to the isoquant, meaning MRTS equals the input price ratio.",
      difficulty: "Hard"
    },
    {
      question: "What causes diseconomies of scale?",
      options: ["Lower input prices", "Management inefficiencies, communication problems, and coordination difficulties as the firm grows too large", "Government regulations only", "Increased demand"],
      correct: "Management inefficiencies, communication problems, and coordination difficulties as the firm grows too large",
      explanation: "Diseconomies of scale arise when a firm becomes so large that coordination, communication, and management become increasingly difficult, raising average costs.",
      difficulty: "Hard"
    },
    {
      question: "In the context of Ethiopian agriculture, how does the law of diminishing returns apply?",
      options: ["It doesn't apply to agriculture", "Adding more labor to a fixed plot of land eventually yields smaller increases in crop output", "More land always means more output", "Technology eliminates diminishing returns"],
      correct: "Adding more labor to a fixed plot of land eventually yields smaller increases in crop output",
      explanation: "In Ethiopian smallholder farming, land is often fixed. Adding more workers initially increases output, but beyond a point, additional workers contribute less and less due to limited land and tools.",
      difficulty: "Hard"
    }
  ],
  "Unit 4: Market Structure": [
    // Easy
    {
      question: "What is a market in economics?",
      options: ["Only a physical marketplace", "Any arrangement where buyers and sellers interact to exchange goods and services", "A government institution", "A type of business"],
      correct: "Any arrangement where buyers and sellers interact to exchange goods and services",
      explanation: "A market is any arrangement that brings buyers and sellers together to exchange goods, services, or resources, whether physical or virtual.",
      difficulty: "Easy"
    },
    {
      question: "How many sellers exist in a perfectly competitive market?",
      options: ["One", "A few", "Many", "Two"],
      correct: "Many",
      explanation: "Perfect competition is characterized by a large number of buyers and sellers, none of whom can individually influence the market price.",
      difficulty: "Easy"
    },
    {
      question: "What is a monopoly?",
      options: ["Many sellers of identical products", "A single seller that controls the entire market for a product", "Two competing firms", "A market with free entry"],
      correct: "A single seller that controls the entire market for a product",
      explanation: "A monopoly is a market structure where only one firm supplies the entire market, with no close substitutes and significant barriers to entry.",
      difficulty: "Easy"
    },
    {
      question: "What type of product is sold in perfect competition?",
      options: ["Differentiated products", "Homogeneous (identical) products", "Luxury products only", "Only services"],
      correct: "Homogeneous (identical) products",
      explanation: "In perfect competition, firms sell identical (homogeneous) products, so consumers see no difference between products from different sellers.",
      difficulty: "Easy"
    },
    {
      question: "What is oligopoly?",
      options: ["Many small firms", "A market dominated by a few large firms", "One firm only", "Perfect competition"],
      correct: "A market dominated by a few large firms",
      explanation: "An oligopoly is a market structure where a small number of large firms dominate the market, and each firm's decisions affect the others.",
      difficulty: "Easy"
    },
    // Medium
    {
      question: "In perfect competition, the firm is a:",
      options: ["Price maker", "Price taker", "Price regulator", "Price eliminator"],
      correct: "Price taker",
      explanation: "In perfect competition, individual firms are price takers — they must accept the market price because they are too small to influence it.",
      difficulty: "Medium"
    },
    {
      question: "What are barriers to entry?",
      options: ["Low prices", "Obstacles that prevent new firms from entering a market", "Government subsidies", "Free trade agreements"],
      correct: "Obstacles that prevent new firms from entering a market",
      explanation: "Barriers to entry are factors that make it difficult for new firms to enter a market, such as patents, high startup costs, and government regulations.",
      difficulty: "Medium"
    },
    {
      question: "What is monopolistic competition?",
      options: ["A pure monopoly", "Many firms selling differentiated products with free entry and exit", "Only two firms competing", "Government-owned businesses"],
      correct: "Many firms selling differentiated products with free entry and exit",
      explanation: "Monopolistic competition features many firms selling similar but differentiated products, with relatively easy entry and exit from the market.",
      difficulty: "Medium"
    },
    {
      question: "A profit-maximizing firm produces where:",
      options: ["Total revenue is highest", "Marginal revenue equals marginal cost", "Average cost is lowest", "Price is highest"],
      correct: "Marginal revenue equals marginal cost",
      explanation: "A firm maximizes profit by producing at the quantity where marginal revenue (MR) equals marginal cost (MC).",
      difficulty: "Medium"
    },
    {
      question: "Why can a monopolist earn abnormal (supernormal) profits in the long run?",
      options: ["Because of perfect competition", "Because high barriers to entry prevent new firms from entering", "Because they produce at minimum cost", "Because government guarantees their profits"],
      correct: "Because high barriers to entry prevent new firms from entering",
      explanation: "Unlike in competitive markets, barriers to entry in a monopoly prevent other firms from entering and competing away the monopolist's profits.",
      difficulty: "Medium"
    },
    // Hard
    {
      question: "What is the deadweight loss associated with monopoly?",
      options: ["The monopolist's total profit", "The loss of economic efficiency when the monopolist restricts output below the competitive level", "The fixed costs of the monopolist", "Government tax revenue"],
      correct: "The loss of economic efficiency when the monopolist restricts output below the competitive level",
      explanation: "Deadweight loss represents the reduction in total surplus (consumer + producer surplus) that occurs because the monopolist produces less and charges more than would occur under perfect competition.",
      difficulty: "Hard"
    },
    {
      question: "How does game theory apply to oligopoly behavior?",
      options: ["It doesn't apply", "It models strategic interactions where each firm's optimal decision depends on what rivals do", "It only applies to monopolies", "It predicts perfect competition outcomes"],
      correct: "It models strategic interactions where each firm's optimal decision depends on what rivals do",
      explanation: "Game theory analyzes strategic decision-making in oligopolies, where firms must consider competitors' potential responses when making pricing, output, or advertising decisions.",
      difficulty: "Hard"
    },
    {
      question: "What is price discrimination and what conditions are necessary for it?",
      options: ["Charging the same price to everyone", "Charging different prices to different consumers for the same product, requiring market power, market segmentation, and prevention of resale", "Only government can practice it", "It occurs in perfect competition"],
      correct: "Charging different prices to different consumers for the same product, requiring market power, market segmentation, and prevention of resale",
      explanation: "Price discrimination involves charging different prices for the same good to different consumers. It requires: market power, ability to segment the market, and ability to prevent resale between groups.",
      difficulty: "Hard"
    },
    {
      question: "Give an example of an oligopoly in Ethiopia and explain its characteristics.",
      options: ["Street food vendors", "The banking sector, where a few major banks dominate with interdependent pricing and high entry barriers", "Subsistence farming", "Local retail shops"],
      correct: "The banking sector, where a few major banks dominate with interdependent pricing and high entry barriers",
      explanation: "Ethiopia's banking sector is an oligopoly dominated by a few large banks (like CBE). They exhibit interdependent behavior, face high regulatory barriers to entry, and their decisions on interest rates and services affect each other.",
      difficulty: "Hard"
    },
    {
      question: "Compare the efficiency of perfect competition and monopoly in terms of allocative and productive efficiency.",
      options: ["Both are equally efficient", "Perfect competition achieves both allocative efficiency (P = MC) and productive efficiency (minimum ATC) in the long run; monopoly achieves neither", "Monopoly is more efficient", "Efficiency cannot be compared"],
      correct: "Perfect competition achieves both allocative efficiency (P = MC) and productive efficiency (minimum ATC) in the long run; monopoly achieves neither",
      explanation: "In long-run perfect competition, firms produce where P = MC (allocative efficiency) and at minimum ATC (productive efficiency). Monopolies produce where P > MC and typically not at minimum ATC, resulting in inefficiency.",
      difficulty: "Hard"
    }
  ],
  "Unit 5: Banking and Finance": [
    // Easy
    {
      question: "What is the primary function of a bank?",
      options: ["Manufacturing goods", "Accepting deposits and providing loans", "Setting government policy", "Producing currency"],
      correct: "Accepting deposits and providing loans",
      explanation: "The primary function of banks is financial intermediation — accepting deposits from savers and providing loans to borrowers.",
      difficulty: "Easy"
    },
    {
      question: "What is the central bank of Ethiopia?",
      options: ["Commercial Bank of Ethiopia", "National Bank of Ethiopia", "Dashen Bank", "Awash Bank"],
      correct: "National Bank of Ethiopia",
      explanation: "The National Bank of Ethiopia (NBE) is Ethiopia's central bank, responsible for monetary policy, regulating banks, and issuing currency.",
      difficulty: "Easy"
    },
    {
      question: "What is interest in banking?",
      options: ["A fee for using someone else's money", "A type of bank account", "The total amount deposited", "A government tax"],
      correct: "A fee for using someone else's money",
      explanation: "Interest is the cost of borrowing money or the reward for saving money. Banks charge interest on loans and pay interest on deposits.",
      difficulty: "Easy"
    },
    {
      question: "What is a savings account?",
      options: ["An account for business transactions only", "A bank account that earns interest on deposited money", "A loan account", "A government bond"],
      correct: "A bank account that earns interest on deposited money",
      explanation: "A savings account is a deposit account that earns interest, encouraging people to save money while keeping it safe and accessible.",
      difficulty: "Easy"
    },
    {
      question: "What is inflation?",
      options: ["A decrease in prices", "A general increase in the price level over time", "An increase in production", "A decrease in money supply"],
      correct: "A general increase in the price level over time",
      explanation: "Inflation is the sustained increase in the general price level of goods and services in an economy over a period of time.",
      difficulty: "Easy"
    },
    // Medium
    {
      question: "What is monetary policy?",
      options: ["Government spending decisions", "The central bank's actions to control money supply and interest rates", "Trade policy with other countries", "Taxation policy"],
      correct: "The central bank's actions to control money supply and interest rates",
      explanation: "Monetary policy involves actions by the central bank to influence the money supply, interest rates, and credit availability to achieve economic objectives.",
      difficulty: "Medium"
    },
    {
      question: "What is the difference between a commercial bank and a central bank?",
      options: ["There is no difference", "Commercial banks serve the public; the central bank regulates the banking system and implements monetary policy", "Central banks give loans to individuals", "Commercial banks print money"],
      correct: "Commercial banks serve the public; the central bank regulates the banking system and implements monetary policy",
      explanation: "Commercial banks deal directly with the public (deposits, loans), while the central bank (NBE in Ethiopia) oversees the banking system, controls money supply, and implements monetary policy.",
      difficulty: "Medium"
    },
    {
      question: "What is the role of microfinance institutions in Ethiopia?",
      options: ["They only serve large corporations", "They provide financial services to low-income individuals and small businesses who lack access to traditional banking", "They replace the central bank", "They only operate in Addis Ababa"],
      correct: "They provide financial services to low-income individuals and small businesses who lack access to traditional banking",
      explanation: "Microfinance institutions in Ethiopia provide small loans, savings, and insurance services to people who are typically excluded from the formal banking sector.",
      difficulty: "Medium"
    },
    {
      question: "What is a budget deficit?",
      options: ["When revenue exceeds expenditure", "When government expenditure exceeds its revenue", "When imports equal exports", "When inflation is zero"],
      correct: "When government expenditure exceeds its revenue",
      explanation: "A budget deficit occurs when a government's total expenditures exceed its total revenues, requiring borrowing to cover the gap.",
      difficulty: "Medium"
    },
    {
      question: "How does mobile banking benefit Ethiopia's financial inclusion?",
      options: ["It only helps wealthy people", "It extends banking services to rural and unbanked populations through mobile phones", "It replaces all physical banks", "It has no impact"],
      correct: "It extends banking services to rural and unbanked populations through mobile phones",
      explanation: "Mobile banking services like telebirr allow millions of Ethiopians without access to traditional bank branches to save, transfer, and receive money using mobile phones.",
      difficulty: "Medium"
    },
    // Hard
    {
      question: "How does the money multiplier work in the banking system?",
      options: ["Banks can only lend what they receive", "Through fractional reserve banking, an initial deposit can lead to a multiple expansion of the money supply", "Money multiplier only applies to the central bank", "It decreases the money supply"],
      correct: "Through fractional reserve banking, an initial deposit can lead to a multiple expansion of the money supply",
      explanation: "The money multiplier shows how an initial deposit can create a larger increase in total money supply. If the reserve ratio is 10%, a 1000 Birr deposit can theoretically create up to 10,000 Birr in the banking system.",
      difficulty: "Hard"
    },
    {
      question: "What are the main tools of monetary policy available to the National Bank of Ethiopia?",
      options: ["Only printing more money", "Open market operations, reserve requirements, and interest rate adjustments", "Only taxation", "Only foreign exchange controls"],
      correct: "Open market operations, reserve requirements, and interest rate adjustments",
      explanation: "The NBE uses tools including open market operations (buying/selling government securities), adjusting reserve requirements, and setting benchmark interest rates to control money supply and credit.",
      difficulty: "Hard"
    },
    {
      question: "What is the relationship between interest rates and investment in an economy?",
      options: ["They are unrelated", "Higher interest rates generally discourage investment as borrowing becomes more expensive", "Higher interest rates always increase investment", "Interest rates only affect savings"],
      correct: "Higher interest rates generally discourage investment as borrowing becomes more expensive",
      explanation: "There is generally an inverse relationship between interest rates and investment. Higher rates increase the cost of borrowing, making fewer investment projects profitable, thus reducing overall investment spending.",
      difficulty: "Hard"
    }
  ],
  "Unit 6: Economic Growth": [
    // Easy
    {
      question: "What is economic growth?",
      options: ["An increase in government spending", "An increase in the real output of goods and services over time", "A decrease in unemployment", "An increase in population"],
      correct: "An increase in the real output of goods and services over time",
      explanation: "Economic growth refers to an increase in the production of goods and services in an economy over a period of time, typically measured by GDP growth.",
      difficulty: "Easy"
    },
    {
      question: "What is GDP?",
      options: ["Government Development Plan", "Gross Domestic Product — the total value of goods and services produced in a country", "General Domestic Pricing", "Growth and Development Program"],
      correct: "Gross Domestic Product — the total value of goods and services produced in a country",
      explanation: "GDP (Gross Domestic Product) measures the total monetary value of all final goods and services produced within a country's borders in a specific time period.",
      difficulty: "Easy"
    },
    {
      question: "Which sector dominates Ethiopia's economy?",
      options: ["Manufacturing", "Agriculture", "Technology", "Mining"],
      correct: "Agriculture",
      explanation: "Agriculture is the dominant sector of Ethiopia's economy, employing the majority of the population and contributing significantly to GDP and export earnings.",
      difficulty: "Easy"
    },
    {
      question: "What is per capita income?",
      options: ["Total government revenue", "Total national income divided by the population", "Income from exports only", "Income from taxes"],
      correct: "Total national income divided by the population",
      explanation: "Per capita income is calculated by dividing the total national income by the total population, giving an average income per person.",
      difficulty: "Easy"
    },
    {
      question: "What is economic development?",
      options: ["Only an increase in GDP", "Improvement in living standards, reduction in poverty, and structural change alongside economic growth", "Only industrialization", "Only foreign investment"],
      correct: "Improvement in living standards, reduction in poverty, and structural change alongside economic growth",
      explanation: "Economic development is broader than growth — it includes improvements in health, education, income distribution, and quality of life, along with structural economic transformation.",
      difficulty: "Easy"
    },
    // Medium
    {
      question: "What is the difference between economic growth and economic development?",
      options: ["They are the same thing", "Growth is quantitative (increase in GDP) while development is qualitative (improved living standards and structural change)", "Development comes before growth", "Growth is more important"],
      correct: "Growth is quantitative (increase in GDP) while development is qualitative (improved living standards and structural change)",
      explanation: "Economic growth measures the increase in output (GDP), while development encompasses broader improvements including health, education, equality, and institutional changes.",
      difficulty: "Medium"
    },
    {
      question: "What is the Human Development Index (HDI)?",
      options: ["A measure of GDP only", "A composite index measuring life expectancy, education, and per capita income", "A measure of industrial output", "A population growth indicator"],
      correct: "A composite index measuring life expectancy, education, and per capita income",
      explanation: "HDI is a summary measure of average achievement in key dimensions of human development: health (life expectancy), education (years of schooling), and standard of living (GNI per capita).",
      difficulty: "Medium"
    },
    {
      question: "What role does human capital play in economic growth?",
      options: ["No role at all", "Education and skills improvement increase productivity and drive economic growth", "It only matters in rich countries", "It decreases growth"],
      correct: "Education and skills improvement increase productivity and drive economic growth",
      explanation: "Human capital — the knowledge, skills, and health of workers — is a key driver of economic growth. Better-educated and healthier workers are more productive and innovative.",
      difficulty: "Medium"
    },
    {
      question: "What is GTP in the Ethiopian context?",
      options: ["General Tax Policy", "Growth and Transformation Plan — Ethiopia's national development strategy", "Government Trade Program", "Gross Tax Product"],
      correct: "Growth and Transformation Plan — Ethiopia's national development strategy",
      explanation: "The Growth and Transformation Plan (GTP) was Ethiopia's national development strategy aimed at achieving rapid economic growth and transformation toward a middle-income country.",
      difficulty: "Medium"
    },
    {
      question: "What are the main challenges to Ethiopia's economic growth?",
      options: ["Only lack of natural resources", "Infrastructure gaps, limited foreign exchange, rapid population growth, and vulnerability to climate shocks", "Too much foreign investment", "Overindustrialization"],
      correct: "Infrastructure gaps, limited foreign exchange, rapid population growth, and vulnerability to climate shocks",
      explanation: "Ethiopia faces multiple growth challenges including infrastructure deficits, foreign exchange shortages, high population growth, climate vulnerability, and the need for structural transformation.",
      difficulty: "Medium"
    },
    // Hard
    {
      question: "How does the Solow growth model explain long-run economic growth?",
      options: ["Growth comes only from labor", "Long-run growth is driven by technological progress, as capital accumulation faces diminishing returns", "Government spending is the only factor", "Population growth alone drives growth"],
      correct: "Long-run growth is driven by technological progress, as capital accumulation faces diminishing returns",
      explanation: "The Solow model shows that while capital accumulation drives growth in the short run, diminishing returns to capital mean that sustained long-run growth requires technological progress.",
      difficulty: "Hard"
    },
    {
      question: "Analyze how Ethiopia's agricultural sector can contribute to industrial development.",
      options: ["Agriculture has no link to industry", "Through providing raw materials, food for workers, a market for industrial goods, and surplus labor for factories", "Only through exports", "Agriculture must be eliminated for industry to grow"],
      correct: "Through providing raw materials, food for workers, a market for industrial goods, and surplus labor for factories",
      explanation: "Agriculture contributes to industrialization by supplying raw materials for agro-processing, food for urban workers, purchasing power for industrial products, export earnings for capital imports, and releasing surplus labor.",
      difficulty: "Hard"
    },
    {
      question: "What is the significance of structural transformation for Ethiopia's economic growth?",
      options: ["It is not important", "Shifting resources from low-productivity agriculture to higher-productivity manufacturing and services increases overall economic output and incomes", "It means only building more roads", "It only applies to developed countries"],
      correct: "Shifting resources from low-productivity agriculture to higher-productivity manufacturing and services increases overall economic output and incomes",
      explanation: "Structural transformation involves the reallocation of economic activity from agriculture to manufacturing and services, which typically have higher productivity, leading to sustained increases in per capita income.",
      difficulty: "Hard"
    }
  ],
  "Unit 7: The Ethiopian Economy": [
    // Easy
    {
      question: "What is Ethiopia's main export commodity?",
      options: ["Gold", "Coffee", "Oil", "Electronics"],
      correct: "Coffee",
      explanation: "Coffee is Ethiopia's most important export commodity, contributing significantly to export earnings and employing millions in its production.",
      difficulty: "Easy"
    },
    {
      question: "What type of economic system does Ethiopia primarily follow?",
      options: ["Pure market economy", "Mixed economy with significant government involvement", "Pure command economy", "Traditional economy only"],
      correct: "Mixed economy with significant government involvement",
      explanation: "Ethiopia operates a mixed economic system where both the private sector and government play important roles, with the government heavily involved in infrastructure and key industries.",
      difficulty: "Easy"
    },
    {
      question: "What is the Ethiopian currency?",
      options: ["Dollar", "Birr", "Shilling", "Rand"],
      correct: "Birr",
      explanation: "The Ethiopian Birr (ETB) is the official currency of Ethiopia, managed by the National Bank of Ethiopia.",
      difficulty: "Easy"
    },
    {
      question: "Which sector employs the most people in Ethiopia?",
      options: ["Industry", "Services", "Agriculture", "Mining"],
      correct: "Agriculture",
      explanation: "Agriculture employs approximately 70-80% of Ethiopia's workforce, making it the largest employer in the country.",
      difficulty: "Easy"
    },
    {
      question: "What is Ethiopia's largest trading partner region?",
      options: ["South America", "Asia (particularly China)", "Australia", "Antarctica"],
      correct: "Asia (particularly China)",
      explanation: "China and other Asian countries are among Ethiopia's largest trading partners, both for imports and as sources of foreign direct investment.",
      difficulty: "Easy"
    },
    // Medium
    {
      question: "What are the main pillars of Ethiopia's economic growth strategy?",
      options: ["Only mining", "Agriculture-led industrialization, infrastructure development, and human capital improvement", "Only foreign aid", "Only oil exports"],
      correct: "Agriculture-led industrialization, infrastructure development, and human capital improvement",
      explanation: "Ethiopia's growth strategy focuses on transforming agriculture to drive industrialization, massive infrastructure investment (roads, railways, dams), and improving education and healthcare.",
      difficulty: "Medium"
    },
    {
      question: "What is the significance of the Grand Ethiopian Renaissance Dam (GERD)?",
      options: ["It's a road project", "It's Africa's largest hydroelectric dam, aimed at generating electricity for domestic use and export", "It's a mining project", "It's a railway"],
      correct: "It's Africa's largest hydroelectric dam, aimed at generating electricity for domestic use and export",
      explanation: "GERD is a massive hydroelectric project on the Blue Nile that aims to generate over 5,000 MW of electricity, supporting Ethiopia's industrialization and potentially exporting power to neighboring countries.",
      difficulty: "Medium"
    },
    {
      question: "What is the role of industrial parks in Ethiopia's economic development?",
      options: ["They serve as tourist attractions", "They attract foreign investment, create jobs, and promote export-oriented manufacturing", "They are only for agriculture", "They have no economic impact"],
      correct: "They attract foreign investment, create jobs, and promote export-oriented manufacturing",
      explanation: "Ethiopia has developed industrial parks (like Hawassa and Bole Lemi) to attract foreign manufacturers, create employment, develop manufacturing capacity, and increase exports, particularly in textiles and garments.",
      difficulty: "Medium"
    },
    {
      question: "What is Ethiopia's trade balance typically characterized by?",
      options: ["Trade surplus", "Trade deficit — imports exceed exports", "Balanced trade", "No international trade"],
      correct: "Trade deficit — imports exceed exports",
      explanation: "Ethiopia typically runs a trade deficit, importing more (machinery, fuel, consumer goods) than it exports (coffee, oilseeds, flowers), which creates foreign exchange challenges.",
      difficulty: "Medium"
    },
    {
      question: "How has the services sector grown in Ethiopia?",
      options: ["It has not grown", "Services including telecom, banking, and tourism have expanded rapidly, contributing increasingly to GDP", "Only government services have grown", "Services have declined"],
      correct: "Services including telecom, banking, and tourism have expanded rapidly, contributing increasingly to GDP",
      explanation: "Ethiopia's services sector has grown significantly, driven by expansion in telecommunications (Ethio Telecom), banking, airlines (Ethiopian Airlines), and tourism, becoming an increasingly important part of GDP.",
      difficulty: "Medium"
    },
    // Hard
    {
      question: "Analyze the challenges and opportunities of Ethiopia's foreign exchange management.",
      options: ["There are no challenges", "Challenges include chronic shortages due to trade deficits and limited export diversification; opportunities include growing manufacturing exports and remittances", "Ethiopia has unlimited foreign exchange", "Only tourism generates foreign exchange"],
      correct: "Challenges include chronic shortages due to trade deficits and limited export diversification; opportunities include growing manufacturing exports and remittances",
      explanation: "Ethiopia faces foreign exchange shortages due to persistent trade deficits and reliance on few export commodities. Opportunities include diversifying exports through industrial parks, growing diaspora remittances, and expanding services exports.",
      difficulty: "Hard"
    },
    {
      question: "How does Ethiopia's demographic profile present both challenges and opportunities for economic growth?",
      options: ["Demographics don't matter", "A young, growing population creates a potential demographic dividend through a large workforce, but requires massive investment in education, health, and job creation", "Population growth only creates problems", "Ethiopia's population is declining"],
      correct: "A young, growing population creates a potential demographic dividend through a large workforce, but requires massive investment in education, health, and job creation",
      explanation: "Ethiopia's young population (median age ~19) offers a demographic dividend if properly harnessed through education and job creation. However, rapid growth strains resources and infrastructure, requiring careful planning.",
      difficulty: "Hard"
    },
    {
      question: "Evaluate the impact of climate change on Ethiopia's agricultural economy and potential adaptation strategies.",
      options: ["Climate change doesn't affect Ethiopia", "Climate change threatens rain-fed agriculture through droughts and unpredictable rainfall; adaptation includes irrigation, drought-resistant crops, and diversification", "Only floods are a concern", "Technology solves all climate issues"],
      correct: "Climate change threatens rain-fed agriculture through droughts and unpredictable rainfall; adaptation includes irrigation, drought-resistant crops, and diversification",
      explanation: "As most Ethiopian agriculture is rain-fed, climate change poses severe risks through changing rainfall patterns and increased droughts. Adaptation strategies include expanding irrigation, developing resistant crop varieties, crop diversification, and strengthening early warning systems.",
      difficulty: "Hard"
    }
  ],
  "Unit 8: Business Startups and Innovation": [
    // Easy
    {
      question: "What is an entrepreneur?",
      options: ["Only a wealthy person", "A person who starts and manages a business, taking on financial risks", "A government official", "A factory worker"],
      correct: "A person who starts and manages a business, taking on financial risks",
      explanation: "An entrepreneur is an individual who identifies business opportunities, organizes resources, and takes on the risks of starting and running a business.",
      difficulty: "Easy"
    },
    {
      question: "What is a business plan?",
      options: ["A list of employees", "A document outlining a business's goals, strategies, market analysis, and financial projections", "A tax form", "A product catalog"],
      correct: "A document outlining a business's goals, strategies, market analysis, and financial projections",
      explanation: "A business plan is a comprehensive document that describes the business concept, target market, competition, operations plan, and financial forecasts.",
      difficulty: "Easy"
    },
    {
      question: "What is innovation?",
      options: ["Copying existing products", "Introducing new ideas, methods, or products that create value", "Only inventing technology", "Reducing the workforce"],
      correct: "Introducing new ideas, methods, or products that create value",
      explanation: "Innovation is the process of creating and implementing new ideas, products, services, or processes that add value to businesses, consumers, or society.",
      difficulty: "Easy"
    },
    {
      question: "What is startup capital?",
      options: ["Monthly salary", "The initial funding needed to start a business", "Government tax revenue", "Bank profit"],
      correct: "The initial funding needed to start a business",
      explanation: "Startup capital is the money required to launch a new business, covering initial expenses like equipment, inventory, rent, and operating costs until the business becomes profitable.",
      difficulty: "Easy"
    },
    {
      question: "What is a small business?",
      options: ["Any business that makes profit", "A privately owned business with limited employees and revenue", "Only a street vendor", "A government agency"],
      correct: "A privately owned business with limited employees and revenue",
      explanation: "A small business is typically a privately owned enterprise with a relatively small number of employees and lower revenue compared to larger corporations.",
      difficulty: "Easy"
    },
    // Medium
    {
      question: "What are the key elements of a successful business plan?",
      options: ["Only financial projections", "Executive summary, market analysis, product/service description, marketing strategy, operations plan, and financial projections", "Only the product description", "Only the company name"],
      correct: "Executive summary, market analysis, product/service description, marketing strategy, operations plan, and financial projections",
      explanation: "A comprehensive business plan includes an executive summary, description of products/services, market analysis, marketing and sales strategy, operations plan, management team, and detailed financial projections.",
      difficulty: "Medium"
    },
    {
      question: "What is the role of market research for a startup?",
      options: ["It is unnecessary", "It helps understand customer needs, competition, and market size to make informed business decisions", "It only measures advertising effectiveness", "It replaces the business plan"],
      correct: "It helps understand customer needs, competition, and market size to make informed business decisions",
      explanation: "Market research provides critical information about target customers, competitors, market trends, and demand, helping entrepreneurs make informed decisions and reduce risks.",
      difficulty: "Medium"
    },
    {
      question: "What sources of funding are available for Ethiopian entrepreneurs?",
      options: ["Only personal savings", "Personal savings, microfinance, bank loans, government programs, angel investors, and cooperative financing", "Only foreign investment", "Only government grants"],
      correct: "Personal savings, microfinance, bank loans, government programs, angel investors, and cooperative financing",
      explanation: "Ethiopian entrepreneurs can access various funding sources including personal savings, microfinance institutions, commercial bank loans, government youth enterprise programs, and increasingly, angel investors and cooperative financing.",
      difficulty: "Medium"
    },
    {
      question: "What is a SWOT analysis?",
      options: ["A type of financial statement", "An analysis of a business's Strengths, Weaknesses, Opportunities, and Threats", "A marketing technique", "A pricing strategy"],
      correct: "An analysis of a business's Strengths, Weaknesses, Opportunities, and Threats",
      explanation: "SWOT analysis is a strategic planning tool that evaluates internal factors (Strengths and Weaknesses) and external factors (Opportunities and Threats) to help businesses make informed decisions.",
      difficulty: "Medium"
    },
    {
      question: "Why is intellectual property protection important for innovation?",
      options: ["It is not important", "It encourages innovation by giving creators exclusive rights to profit from their inventions", "It only applies to large companies", "It discourages creativity"],
      correct: "It encourages innovation by giving creators exclusive rights to profit from their inventions",
      explanation: "Intellectual property rights (patents, trademarks, copyrights) protect creators' innovations, incentivizing investment in research and development by ensuring inventors can benefit from their work.",
      difficulty: "Medium"
    },
    // Hard
    {
      question: "How can technology-based startups contribute to solving Ethiopia's development challenges?",
      options: ["They cannot help", "Through innovations in agriculture (precision farming apps), healthcare (telemedicine), education (e-learning), and financial services (fintech)", "Only by creating manufacturing jobs", "Only through exporting software"],
      correct: "Through innovations in agriculture (precision farming apps), healthcare (telemedicine), education (e-learning), and financial services (fintech)",
      explanation: "Tech startups can address Ethiopian challenges through agricultural apps improving farmer productivity, telemedicine reaching rural health needs, e-learning platforms expanding education access, and fintech solutions improving financial inclusion.",
      difficulty: "Hard"
    },
    {
      question: "Evaluate the entrepreneurial ecosystem in Ethiopia — what are its strengths and weaknesses?",
      options: ["It is perfect", "Strengths include a large young population and growing markets; weaknesses include limited access to finance, bureaucratic regulations, and infrastructure gaps", "There is no entrepreneurial ecosystem", "Only weaknesses exist"],
      correct: "Strengths include a large young population and growing markets; weaknesses include limited access to finance, bureaucratic regulations, and infrastructure gaps",
      explanation: "Ethiopia's entrepreneurial ecosystem has strengths (young demographic, growing consumer market, government support programs) but faces challenges (limited credit access, complex regulations, unreliable infrastructure, and skills gaps).",
      difficulty: "Hard"
    },
    {
      question: "How does social entrepreneurship differ from traditional entrepreneurship, and why is it relevant to Ethiopia?",
      options: ["There is no difference", "Social entrepreneurship prioritizes solving social problems alongside financial sustainability, addressing issues like poverty, healthcare, and education that are critical in Ethiopia", "Social entrepreneurship is not profitable", "It only applies to NGOs"],
      correct: "Social entrepreneurship prioritizes solving social problems alongside financial sustainability, addressing issues like poverty, healthcare, and education that are critical in Ethiopia",
      explanation: "Social entrepreneurs create businesses that address social challenges while remaining financially viable. In Ethiopia, this is particularly relevant for tackling poverty, improving healthcare access, expanding education, and promoting environmental sustainability.",
      difficulty: "Hard"
    }
  ]
};

type EconomicsDifficulty = "Easy" | "Medium" | "Hard";

type EconomicsQuestion = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: EconomicsDifficulty;
};

type EconomicsDescriptor = {
  focus: string;
  application: string;
  evidence: string;
  challenge: string;
  method: string;
};

const economicsDescriptors: Record<string, EconomicsDescriptor> = {
  "Unit 1: Theory of Consumer Behaviour": {
    focus: "consumer choice, utility, and preference",
    application: "explaining how households choose under limited income",
    evidence: "utility ideas, indifference analysis, and budget constraints",
    challenge: "confusing satisfaction, income limits, and price incentives",
    method: "connect preferences to budget-constrained decision-making",
  },
  "Unit 2: Theories of Demand and Supply": {
    focus: "demand, supply, elasticity, and market equilibrium",
    application: "explaining how prices and quantities change in markets",
    evidence: "curves, elasticity reasoning, and equilibrium examples",
    challenge: "mixing up movement along a curve with a shift of the curve",
    method: "trace how incentives and conditions affect market outcomes",
  },
  "Unit 3: Theories of Production and Cost": {
    focus: "production decisions, inputs, and costs",
    application: "explaining how firms combine resources efficiently",
    evidence: "cost concepts, output relationships, and firm examples",
    challenge: "assuming more production always lowers cost",
    method: "compare short-run and long-run production decisions",
  },
  "Unit 4: Market Structure": {
    focus: "competition, monopoly, and different market forms",
    application: "analyzing how firms behave under different market conditions",
    evidence: "firm behavior, pricing power, and market characteristics",
    challenge: "treating all markets as if they have the same level of competition",
    method: "compare seller numbers, entry conditions, and pricing behavior",
  },
  "Unit 5: Banking and Finance": {
    focus: "banking systems, financial services, and money management",
    application: "explaining saving, lending, credit, and financial intermediation",
    evidence: "bank functions, financial instruments, and policy examples",
    challenge: "confusing the role of banks with the role of money itself",
    method: "link financial institutions to household and business activity",
  },
  "Unit 6: Economic Growth": {
    focus: "growth, development, productivity, and structural change",
    application: "explaining why some economies grow faster than others",
    evidence: "growth factors, development indicators, and policy examples",
    challenge: "treating growth and development as exactly the same concept",
    method: "connect production, technology, policy, and welfare outcomes",
  },
  "Unit 7: The Ethiopian Economy": {
    focus: "the structure and current features of Ethiopia's economy",
    application: "analyzing sectors, trade, infrastructure, and development strategy",
    evidence: "sector contributions, policy examples, and current challenges",
    challenge: "describing the economy without linking sectors to development goals",
    method: "connect national structure, policy, and economic performance",
  },
  "Unit 8: Business Startups and Innovation": {
    focus: "entrepreneurship, startups, planning, and innovation",
    application: "explaining how new businesses identify opportunities and create value",
    evidence: "business plans, funding sources, market research, and innovation cases",
    challenge: "thinking entrepreneurship is only about having capital",
    method: "link opportunity recognition, planning, and sustainable execution",
  },
};

const buildSupplementQuestions = (
  chapter: string,
  difficulty: EconomicsDifficulty,
  count: number,
): EconomicsQuestion[] => {
  const descriptor = economicsDescriptors[chapter];
  const title = chapter.replace(/^Unit\s+\d+:\s*/i, "");

  const templates: Record<EconomicsDifficulty, Omit<EconomicsQuestion, "difficulty">[]> = {
    Easy: [
      {
        question: `What is the main focus of "${title}"?`,
        options: [descriptor.focus, "Only map reading", "Only literary criticism", "Only chemical reaction rules"],
        correct: descriptor.focus,
        explanation: `This unit focuses on ${descriptor.focus}.`,
      },
      {
        question: `Which activity best matches "${title}"?`,
        options: [descriptor.application, "Ignoring prices and incentives", "Studying grammar only", "Avoiding real-life examples"],
        correct: descriptor.application,
        explanation: `The unit is best applied through ${descriptor.application}.`,
      },
      {
        question: `Which type of evidence is most useful in "${title}"?`,
        options: [descriptor.evidence, "Random opinions with no economic basis", "Poetry alone", "Historical dates only"],
        correct: descriptor.evidence,
        explanation: `Strong answers in this unit use ${descriptor.evidence}.`,
      },
      {
        question: `What is a common misunderstanding in "${title}"?`,
        options: [descriptor.challenge, "Using examples carefully", "Comparing alternatives", "Explaining trade-offs"],
        correct: descriptor.challenge,
        explanation: `That misunderstanding weakens economic reasoning in this unit.`,
      },
      {
        question: `Which study strategy is strongest for "${title}"?`,
        options: [descriptor.method, "Memorize terms without application", "Ignore incentives and constraints", "Avoid case examples"],
        correct: descriptor.method,
        explanation: `The best way to study this unit is to ${descriptor.method}.`,
      },
    ],
    Medium: [
      {
        question: `Why do economists use ${descriptor.evidence} in "${title}"?`,
        options: [
          `To explain ${descriptor.focus} more clearly`,
          "To avoid all analysis",
          "To replace reasoning with guessing",
          "To study unrelated social issues only",
        ],
        correct: `To explain ${descriptor.focus} more clearly`,
        explanation: `Economic evidence helps explain the unit's core ideas and applications.`,
      },
      {
        question: `A strong answer in "${title}" should mainly do what?`,
        options: [
          descriptor.method,
          "List disconnected facts only",
          "Repeat definitions with no example",
          "Ignore incentives, trade-offs, or constraints",
        ],
        correct: descriptor.method,
        explanation: `Good economics answers explain relationships, not just terms.`,
      },
      {
        question: `Which task best measures understanding of "${title}"?`,
        options: [
          `Use ${descriptor.evidence} to explain ${descriptor.application}`,
          "Copy the unit title repeatedly",
          "Avoid real-world examples",
          "Write unrelated notes from another subject",
        ],
        correct: `Use ${descriptor.evidence} to explain ${descriptor.application}`,
        explanation: `That task connects theory, evidence, and practical application.`,
      },
      {
        question: `Why is "${title}" important in Grade 10 Economics?`,
        options: [
          `Because it helps learners understand ${descriptor.focus} in real economic contexts`,
          "Because it removes the need for analysis",
          "Because it is unrelated to choice or markets",
          "Because it matters only for memorization",
        ],
        correct: `Because it helps learners understand ${descriptor.focus} in real economic contexts`,
        explanation: `The unit matters because it builds applied economic reasoning.`,
      },
      {
        question: `Which weakness would lower a student's score in "${title}" most?`,
        options: [
          descriptor.challenge,
          "Using examples and evidence",
          "Comparing alternatives",
          "Explaining incentives clearly",
        ],
        correct: descriptor.challenge,
        explanation: `That mistake shows a weak grasp of the unit's central logic.`,
      },
    ],
    Hard: [
      {
        question: `Which conclusion best fits "${title}"?`,
        options: [
          `Economic understanding improves when learners ${descriptor.method} using ${descriptor.evidence}`,
          "The unit is mastered by memorizing one sentence",
          "Economics never needs evidence",
          "Real-world application weakens theory",
        ],
        correct: `Economic understanding improves when learners ${descriptor.method} using ${descriptor.evidence}`,
        explanation: `That conclusion combines method and evidence, which are both essential in economics.`,
      },
      {
        question: `A student says "${title}" is only about memorizing definitions. What is the best response?`,
        options: [
          `No. It also requires explaining ${descriptor.focus} through ${descriptor.application}`,
          "Yes. Definitions alone are always enough in economics",
          "Yes. Application does not matter in this unit",
          "No. The unit should be skipped entirely",
        ],
        correct: `No. It also requires explaining ${descriptor.focus} through ${descriptor.application}`,
        explanation: `Strong economics answers use concepts to explain how actual economic situations work.`,
      },
      {
        question: `Which task would best reveal deep misunderstanding in "${title}"?`,
        options: [
          `A learner repeats ${descriptor.challenge} while ignoring ${descriptor.evidence}`,
          "A learner supports claims with examples",
          "A learner links theory to economic behavior",
          "A learner compares alternatives carefully",
        ],
        correct: `A learner repeats ${descriptor.challenge} while ignoring ${descriptor.evidence}`,
        explanation: `That combination shows both conceptual weakness and poor evidence use.`,
      },
      {
        question: `What is the strongest reason to teach "${title}" in Grade 10?`,
        options: [
          `It helps students analyze ${descriptor.focus} in practical economic contexts`,
          "It avoids all real-world issues",
          "It replaces every other economics topic",
          "It matters only for copying notes",
        ],
        correct: `It helps students analyze ${descriptor.focus} in practical economic contexts`,
        explanation: `The unit matters because it strengthens real economic reasoning and decision analysis.`,
      },
      {
        question: `Which answer best matches high-level reasoning in "${title}"?`,
        options: [
          `Use ${descriptor.evidence} to evaluate how ${descriptor.application}`,
          "Repeat isolated definitions only",
          "Ignore incentives and constraints",
          "Describe one term with no analysis",
        ],
        correct: `Use ${descriptor.evidence} to evaluate how ${descriptor.application}`,
        explanation: `High-level economics combines evidence, application, and evaluation.`,
      },
      {
        question: `Which classroom investigation best strengthens understanding of "${title}"?`,
        options: [
          `Compare real examples and explain ${descriptor.focus} using ${descriptor.evidence}`,
          "Avoid real cases and rely only on memorized words",
          "Ignore all constraints and incentives",
          "Use unrelated facts from another subject",
        ],
        correct: `Compare real examples and explain ${descriptor.focus} using ${descriptor.evidence}`,
        explanation: `Applied comparison helps learners move from theory to economic reasoning.`,
      },
      {
        question: `What would a top-performing student most likely do in "${title}"?`,
        options: [
          `Explain ${descriptor.focus} clearly, avoid ${descriptor.challenge}, and apply ${descriptor.method}`,
          "Memorize one formula and stop there",
          "Describe terms without linking them to any case",
          "Ignore evidence and rely on intuition only",
        ],
        correct: `Explain ${descriptor.focus} clearly, avoid ${descriptor.challenge}, and apply ${descriptor.method}`,
        explanation: `High performance in economics comes from clear explanation, accurate concepts, and applied reasoning.`,
      },
    ],
  };

  return templates[difficulty].slice(0, count).map((item) => ({
    ...item,
    difficulty,
  }));
};

const augmentEconomicsQuestionBank = (bank: Record<string, EconomicsQuestion[]>) =>
  Object.fromEntries(
    Object.entries(bank).map(([chapter, questions]) => {
      const counts = { Easy: 0, Medium: 0, Hard: 0 } as Record<EconomicsDifficulty, number>;
      for (const question of questions) counts[question.difficulty] += 1;

      const supplemented = [
        ...questions,
        ...buildSupplementQuestions(chapter, "Easy", Math.max(0, 10 - counts.Easy)),
        ...buildSupplementQuestions(chapter, "Medium", Math.max(0, 10 - counts.Medium)),
        ...buildSupplementQuestions(chapter, "Hard", Math.max(0, 10 - counts.Hard)),
      ];

      return [chapter, supplemented];
    }),
  ) as Record<string, EconomicsQuestion[]>;

export const grade10EconomicsQuestions = augmentEconomicsQuestionBank(
  baseGrade10EconomicsQuestions as Record<string, EconomicsQuestion[]>,
);

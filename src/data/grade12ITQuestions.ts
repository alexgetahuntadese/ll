
export interface ITQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12ITQuestions: { [unit: string]: ITQuestion[] } = {
  "Unit 1: Information Systems and Their Applications": [
    // Easy Questions
    {
      id: "it_u1_e1",
      question: "What does E-learning stand for?",
      options: ["Electronic learning", "Easy learning", "Extended learning", "Enhanced learning"],
      correct: "Electronic learning",
      explanation: "E-learning refers to electronic learning, which uses digital technologies to deliver educational content and training programs.",
      difficulty: "Easy"
    },
    {
      id: "it_u1_e2",
      question: "Which of the following is an example of E-government service?",
      options: ["Online tax filing", "Social media", "Video games", "Music streaming"],
      correct: "Online tax filing",
      explanation: "Online tax filing is a digital government service that allows citizens to submit tax returns electronically.",
      difficulty: "Easy"
    },
    {
      id: "it_u1_e3",
      question: "What is the primary purpose of E-banking?",
      options: ["To provide banking services online", "To store data", "To play games", "To send emails"],
      correct: "To provide banking services online",
      explanation: "E-banking enables customers to access banking services through digital platforms without visiting physical branches.",
      difficulty: "Easy"
    },
    {
      id: "it_u1_e4",
      question: "What does E-commerce primarily involve?",
      options: ["Buying and selling online", "Reading books", "Watching movies", "Playing games"],
      correct: "Buying and selling online",
      explanation: "E-commerce refers to commercial transactions conducted electronically over the internet.",
      difficulty: "Easy"
    },
    {
      id: "it_u1_e5",
      question: "What is an E-library?",
      options: ["A digital collection of books and resources", "A physical library", "A computer store", "A gaming center"],
      correct: "A digital collection of books and resources",
      explanation: "An E-library provides digital access to books, journals, and other educational resources online.",
      difficulty: "Easy"
    },
    {
      id: "it_u1_e6",
      question: "What is the first step in system analysis?",
      options: ["Problem identification", "System design", "Implementation", "Testing"],
      correct: "Problem identification",
      explanation: "System analysis begins with identifying and understanding the problem that needs to be solved.",
      difficulty: "Easy"
    },
    {
      id: "it_u1_e7",
      question: "Which component is essential for any information system?",
      options: ["Data", "Games", "Music", "Videos"],
      correct: "Data",
      explanation: "Data is the fundamental component of any information system, providing the raw material for processing.",
      difficulty: "Easy"
    },
    {
      id: "it_u1_e8",
      question: "What does MIS stand for?",
      options: ["Management Information System", "Multiple Information System", "Modern Information System", "Manual Information System"],
      correct: "Management Information System",
      explanation: "MIS stands for Management Information System, which provides information to support managerial decision-making.",
      difficulty: "Easy"
    },
    {
      id: "it_u1_e9",
      question: "What is a key benefit of E-government services?",
      options: ["24/7 accessibility", "Higher costs", "Slower processing", "Limited access"],
      correct: "24/7 accessibility",
      explanation: "E-government services provide round-the-clock access to government services and information.",
      difficulty: "Easy"
    },
    {
      id: "it_u1_e10",
      question: "What type of system helps in decision making?",
      options: ["Decision Support System", "Gaming System", "Entertainment System", "Communication System"],
      correct: "Decision Support System",
      explanation: "Decision Support Systems (DSS) are designed to help managers make informed decisions by analyzing data.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "it_u1_m1",
      question: "Which of the following best describes the system development life cycle (SDLC)?",
      options: ["A structured approach to system development", "A programming language", "A database system", "A networking protocol"],
      correct: "A structured approach to system development",
      explanation: "SDLC is a structured methodology that guides the development of information systems through defined phases.",
      difficulty: "Medium"
    },
    {
      id: "it_u1_m2",
      question: "What is the primary advantage of cloud-based E-learning platforms?",
      options: ["Scalability and accessibility", "Higher costs", "Limited storage", "Offline only access"],
      correct: "Scalability and accessibility",
      explanation: "Cloud-based E-learning platforms offer scalable resources and can be accessed from anywhere with internet connectivity.",
      difficulty: "Medium"
    },
    {
      id: "it_u1_m3",
      question: "In E-banking, what does two-factor authentication provide?",
      options: ["Enhanced security", "Faster transactions", "Lower fees", "Better graphics"],
      correct: "Enhanced security",
      explanation: "Two-factor authentication adds an extra layer of security by requiring two different forms of verification.",
      difficulty: "Medium"
    },
    {
      id: "it_u1_m4",
      question: "What is B2B in E-commerce?",
      options: ["Business to Business", "Buyer to Buyer", "Bank to Bank", "Book to Book"],
      correct: "Business to Business",
      explanation: "B2B (Business to Business) refers to commercial transactions between businesses rather than between business and consumers.",
      difficulty: "Medium"
    },
    {
      id: "it_u1_m5",
      question: "Which protocol is commonly used for secure E-commerce transactions?",
      options: ["HTTPS", "HTTP", "FTP", "SMTP"],
      correct: "HTTPS",
      explanation: "HTTPS (HTTP Secure) uses SSL/TLS encryption to secure data transmission in E-commerce transactions.",
      difficulty: "Medium"
    },
    {
      id: "it_u1_m6",
      question: "What is data mining in the context of information systems?",
      options: ["Extracting patterns from large datasets", "Mining for minerals", "Deleting old data", "Creating new databases"],
      correct: "Extracting patterns from large datasets",
      explanation: "Data mining involves analyzing large datasets to discover patterns, relationships, and insights for decision-making.",
      difficulty: "Medium"
    },
    {
      id: "it_u1_m7",
      question: "What is the purpose of a feasibility study in system analysis?",
      options: ["To determine if a project is viable", "To write code", "To test software", "To train users"],
      correct: "To determine if a project is viable",
      explanation: "A feasibility study evaluates the technical, economic, and operational viability of a proposed system.",
      difficulty: "Medium"
    },
    {
      id: "it_u1_m8",
      question: "Which model describes the relationship between data, information, knowledge, and wisdom?",
      options: ["DIKW pyramid", "OSI model", "TCP/IP model", "ER model"],
      correct: "DIKW pyramid",
      explanation: "The DIKW pyramid (Data, Information, Knowledge, Wisdom) shows the hierarchical relationship between these concepts.",
      difficulty: "Medium"
    },
    {
      id: "it_u1_m9",
      question: "What is enterprise resource planning (ERP)?",
      options: ["Integrated business management software", "A programming language", "A database type", "A networking protocol"],
      correct: "Integrated business management software",
      explanation: "ERP systems integrate various business processes and functions into a unified system for efficient management.",
      difficulty: "Medium"
    },
    {
      id: "it_u1_m10",
      question: "What is the main purpose of business intelligence systems?",
      options: ["To support strategic decision making", "To play games", "To store files", "To send emails"],
      correct: "To support strategic decision making",
      explanation: "Business intelligence systems analyze business data to provide insights that support strategic decision-making.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "it_u1_h1",
      question: "Which architectural pattern is most suitable for large-scale E-commerce platforms?",
      options: ["Microservices architecture", "Monolithic architecture", "Client-server architecture", "Peer-to-peer architecture"],
      correct: "Microservices architecture",
      explanation: "Microservices architecture provides scalability, flexibility, and fault tolerance needed for large E-commerce platforms.",
      difficulty: "Hard"
    },
    {
      id: "it_u1_h2",
      question: "What is the primary challenge in implementing interoperability in E-government systems?",
      options: ["Standardizing data formats and protocols", "Hiring more staff", "Buying new computers", "Installing software"],
      correct: "Standardizing data formats and protocols",
      explanation: "Interoperability requires standardized data formats and communication protocols to enable seamless data exchange between systems.",
      difficulty: "Hard"
    },
    {
      id: "it_u1_h3",
      question: "In system analysis, what is the difference between logical and physical design?",
      options: ["Logical focuses on what the system does, physical on how it's implemented", "Logical is theoretical, physical is practical", "Logical uses diagrams, physical uses code", "No difference"],
      correct: "Logical focuses on what the system does, physical on how it's implemented",
      explanation: "Logical design defines system functionality and requirements, while physical design specifies implementation details and technology choices.",
      difficulty: "Hard"
    },
    {
      id: "it_u1_h4",
      question: "What is the most critical factor in ensuring E-banking system reliability?",
      options: ["Redundancy and fault tolerance", "User interface design", "Marketing strategy", "Cost reduction"],
      correct: "Redundancy and fault tolerance",
      explanation: "Redundancy and fault tolerance ensure that E-banking systems remain operational even when components fail.",
      difficulty: "Hard"
    },
    {
      id: "it_u1_h5",
      question: "Which methodology combines agile and traditional approaches in system development?",
      options: ["Hybrid methodology", "Waterfall", "Spiral", "RAD"],
      correct: "Hybrid methodology",
      explanation: "Hybrid methodologies combine the structure of traditional approaches with the flexibility of agile methods.",
      difficulty: "Hard"
    },
    {
      id: "it_u1_h6",
      question: "What is the primary purpose of API management in E-commerce ecosystems?",
      options: ["To control and monitor API access and usage", "To design user interfaces", "To manage databases", "To handle payments"],
      correct: "To control and monitor API access and usage",
      explanation: "API management ensures secure, controlled access to E-commerce services while monitoring usage and performance.",
      difficulty: "Hard"
    },
    {
      id: "it_u1_h7",
      question: "In complex information systems, what is the role of middleware?",
      options: ["To facilitate communication between different software components", "To store data", "To design interfaces", "To test software"],
      correct: "To facilitate communication between different software components",
      explanation: "Middleware acts as a bridge between different software components, enabling them to communicate and work together.",
      difficulty: "Hard"
    },
    {
      id: "it_u1_h8",
      question: "What is the significance of ACID properties in transaction processing systems?",
      options: ["They ensure data consistency and reliability", "They improve performance", "They reduce costs", "They enhance security"],
      correct: "They ensure data consistency and reliability",
      explanation: "ACID (Atomicity, Consistency, Isolation, Durability) properties guarantee reliable transaction processing in database systems.",
      difficulty: "Hard"
    },
    {
      id: "it_u1_h9",
      question: "What is the primary advantage of using service-oriented architecture (SOA) in enterprise systems?",
      options: ["Reusability and loose coupling of services", "Faster development", "Lower costs", "Better graphics"],
      correct: "Reusability and loose coupling of services",
      explanation: "SOA promotes service reusability and loose coupling, making systems more flexible and maintainable.",
      difficulty: "Hard"
    },
    {
      id: "it_u1_h10",
      question: "What is the most important consideration when designing real-time information systems?",
      options: ["Latency and response time requirements", "User interface design", "Color scheme", "File storage"],
      correct: "Latency and response time requirements",
      explanation: "Real-time systems must meet strict timing constraints, making latency and response time critical design factors.",
      difficulty: "Hard"
    }
  ],

  "Unit 2: Emerging Technologies": [
    // Easy Questions
    {
      id: "it_u2_e1",
      question: "What is cloud computing?",
      options: ["Computing services delivered over the internet", "Weather prediction", "Sky observation", "Air travel planning"],
      correct: "Computing services delivered over the internet",
      explanation: "Cloud computing provides on-demand access to computing resources over the internet without direct management by users.",
      difficulty: "Easy"
    },
    {
      id: "it_u2_e2",
      question: "Which of the following is an example of big data?",
      options: ["Social media posts from millions of users", "A single document", "A small spreadsheet", "A personal photo"],
      correct: "Social media posts from millions of users",
      explanation: "Big data refers to extremely large datasets that require special tools and techniques to process and analyze.",
      difficulty: "Easy"
    },
    {
      id: "it_u2_e3",
      question: "What does AI stand for?",
      options: ["Artificial Intelligence", "Automatic Information", "Advanced Internet", "Applied Innovation"],
      correct: "Artificial Intelligence",
      explanation: "AI stands for Artificial Intelligence, which refers to machines or systems that can perform tasks requiring human-like intelligence.",
      difficulty: "Easy"
    },
    {
      id: "it_u2_e4",
      question: "What is digital identity?",
      options: ["Electronic representation of a person or entity", "Physical ID card", "Handwritten signature", "Fingerprint"],
      correct: "Electronic representation of a person or entity",
      explanation: "Digital identity is the electronic representation of information about an individual or organization used for authentication.",
      difficulty: "Easy"
    },
    {
      id: "it_u2_e5",
      question: "Which cloud service model provides the most control to users?",
      options: ["IaaS", "PaaS", "SaaS", "FaaS"],
      correct: "IaaS",
      explanation: "Infrastructure as a Service (IaaS) provides users with the most control over the underlying computing infrastructure.",
      difficulty: "Easy"
    },
    {
      id: "it_u2_e6",
      question: "What is machine learning?",
      options: ["Systems that learn from data", "Manual programming", "Hardware manufacturing", "Software installation"],
      correct: "Systems that learn from data",
      explanation: "Machine learning is a subset of AI that enables systems to learn and improve automatically from experience without explicit programming.",
      difficulty: "Easy"
    },
    {
      id: "it_u2_e7",
      question: "What is the primary characteristic of big data?",
      options: ["Volume, velocity, and variety", "Small size", "Simple structure", "Single source"],
      correct: "Volume, velocity, and variety",
      explanation: "Big data is characterized by the 3 Vs: Volume (large amounts), Velocity (high speed), and Variety (different types).",
      difficulty: "Easy"
    },
    {
      id: "it_u2_e8",
      question: "What is blockchain technology primarily known for?",
      options: ["Secure, decentralized record-keeping", "Video games", "Photo editing", "Music production"],
      correct: "Secure, decentralized record-keeping",
      explanation: "Blockchain is a distributed ledger technology that maintains a secure, transparent, and tamper-resistant record of transactions.",
      difficulty: "Easy"
    },
    {
      id: "it_u2_e9",
      question: "What is the Internet of Things (IoT)?",
      options: ["Connected devices that communicate over the internet", "A social network", "A search engine", "An email service"],
      correct: "Connected devices that communicate over the internet",
      explanation: "IoT refers to the network of physical devices embedded with sensors and connectivity to exchange data over the internet.",
      difficulty: "Easy"
    },
    {
      id: "it_u2_e10",
      question: "What is virtual reality (VR)?",
      options: ["Computer-generated simulation of 3D environment", "Real-world photography", "Audio recording", "Text messaging"],
      correct: "Computer-generated simulation of 3D environment",
      explanation: "VR creates immersive, computer-generated environments that users can interact with using specialized equipment.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "it_u2_m1",
      question: "What is the difference between public and private cloud?",
      options: ["Public is shared, private is dedicated", "Public is free, private is paid", "Public is slow, private is fast", "No difference"],
      correct: "Public is shared, private is dedicated",
      explanation: "Public clouds are shared among multiple users, while private clouds are dedicated to a single organization.",
      difficulty: "Medium"
    },
    {
      id: "it_u2_m2",
      question: "Which algorithm is commonly used in machine learning for classification?",
      options: ["Decision Tree", "Bubble Sort", "Linear Search", "Hash Table"],
      correct: "Decision Tree",
      explanation: "Decision trees are popular machine learning algorithms used for classification tasks by creating decision rules.",
      difficulty: "Medium"
    },
    {
      id: "it_u2_m3",
      question: "What is edge computing?",
      options: ["Processing data closer to its source", "Computing at the center", "Cloud computing", "Offline computing"],
      correct: "Processing data closer to its source",
      explanation: "Edge computing brings computation and data storage closer to the data source to reduce latency and bandwidth usage.",
      difficulty: "Medium"
    },
    {
      id: "it_u2_m4",
      question: "What ethical concern is most associated with AI systems?",
      options: ["Bias and fairness", "Color preferences", "Font choices", "Screen size"],
      correct: "Bias and fairness",
      explanation: "AI systems can perpetuate or amplify existing biases in data, leading to unfair treatment of certain groups.",
      difficulty: "Medium"
    },
    {
      id: "it_u2_m5",
      question: "What is deep learning?",
      options: ["Machine learning using neural networks", "Learning underwater", "Studying geology", "Reading books"],
      correct: "Machine learning using neural networks",
      explanation: "Deep learning is a subset of machine learning that uses artificial neural networks with multiple layers.",
      difficulty: "Medium"
    },
    {
      id: "it_u2_m6",
      question: "What is the primary purpose of data encryption in digital identity systems?",
      options: ["To protect sensitive information", "To compress data", "To speed up processing", "To organize files"],
      correct: "To protect sensitive information",
      explanation: "Encryption protects sensitive identity information from unauthorized access during storage and transmission.",
      difficulty: "Medium"
    },
    {
      id: "it_u2_m7",
      question: "What is natural language processing (NLP)?",
      options: ["AI that understands human language", "Learning new languages", "Natural speech", "Language translation"],
      correct: "AI that understands human language",
      explanation: "NLP is a branch of AI that helps computers understand, interpret, and generate human language.",
      difficulty: "Medium"
    },
    {
      id: "it_u2_m8",
      question: "What is the main advantage of containerization in cloud computing?",
      options: ["Application portability and efficiency", "Larger file sizes", "Slower deployment", "Higher costs"],
      correct: "Application portability and efficiency",
      explanation: "Containerization packages applications with their dependencies, making them portable and efficient across different environments.",
      difficulty: "Medium"
    },
    {
      id: "it_u2_m9",
      question: "What is augmented reality (AR)?",
      options: ["Overlaying digital content on real world", "Complete virtual environment", "Audio enhancement", "Text editing"],
      correct: "Overlaying digital content on real world",
      explanation: "AR overlays digital information and objects onto the real world, enhancing user perception of their environment.",
      difficulty: "Medium"
    },
    {
      id: "it_u2_m10",
      question: "What is quantum computing?",
      options: ["Computing using quantum mechanical phenomena", "Fast traditional computing", "Cloud computing", "Mobile computing"],
      correct: "Computing using quantum mechanical phenomena",
      explanation: "Quantum computing leverages quantum mechanical phenomena like superposition and entanglement for processing information.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "it_u2_h1",
      question: "What is the primary challenge in implementing federated learning?",
      options: ["Maintaining privacy while sharing model updates", "Hardware costs", "Software installation", "User interface design"],
      correct: "Maintaining privacy while sharing model updates",
      explanation: "Federated learning faces the challenge of training models collaboratively while preserving data privacy across distributed systems.",
      difficulty: "Hard"
    },
    {
      id: "it_u2_h2",
      question: "Which consensus algorithm is most energy-efficient for blockchain networks?",
      options: ["Proof of Stake", "Proof of Work", "Proof of Authority", "Proof of Burn"],
      correct: "Proof of Stake",
      explanation: "Proof of Stake is more energy-efficient than Proof of Work as it doesn't require intensive computational mining.",
      difficulty: "Hard"
    },
    {
      id: "it_u2_h3",
      question: "What is the explainability problem in AI?",
      options: ["Difficulty in understanding how AI makes decisions", "AI speaking different languages", "AI being too slow", "AI consuming too much power"],
      correct: "Difficulty in understanding how AI makes decisions",
      explanation: "AI explainability refers to the challenge of understanding and interpreting how complex AI systems arrive at their decisions.",
      difficulty: "Hard"
    },
    {
      id: "it_u2_h4",
      question: "What is zero-trust architecture in digital identity management?",
      options: ["Never trust, always verify", "Trust everyone", "No verification needed", "Trust by default"],
      correct: "Never trust, always verify",
      explanation: "Zero-trust architecture assumes no implicit trust and continuously validates every transaction and interaction.",
      difficulty: "Hard"
    },
    {
      id: "it_u2_h5",
      question: "What is the primary legal challenge with AI decision-making systems?",
      options: ["Accountability and liability", "Performance speed", "Data storage", "User interface"],
      correct: "Accountability and liability",
      explanation: "Determining legal responsibility when AI systems make autonomous decisions poses significant challenges for existing legal frameworks.",
      difficulty: "Hard"
    },
    {
      id: "it_u2_h6",
      question: "What is the difference between supervised and unsupervised learning?",
      options: ["Supervised uses labeled data, unsupervised doesn't", "Supervised is faster", "Supervised is newer", "No difference"],
      correct: "Supervised uses labeled data, unsupervised doesn't",
      explanation: "Supervised learning uses labeled training data, while unsupervised learning finds patterns in unlabeled data.",
      difficulty: "Hard"
    },
    {
      id: "it_u2_h7",
      question: "What is the main challenge in big data privacy protection?",
      options: ["Balancing utility with privacy preservation", "Storage costs", "Processing speed", "User interfaces"],
      correct: "Balancing utility with privacy preservation",
      explanation: "The challenge is extracting useful insights from big data while protecting individual privacy and sensitive information.",
      difficulty: "Hard"
    },
    {
      id: "it_u2_h8",
      question: "What is differential privacy?",
      options: ["A mathematical framework for quantifying privacy", "Different types of privacy", "Private computing", "Encrypted storage"],
      correct: "A mathematical framework for quantifying privacy",
      explanation: "Differential privacy provides mathematical guarantees about privacy protection when releasing statistical information about datasets.",
      difficulty: "Hard"
    },
    {
      id: "it_u2_h9",
      question: "What is the primary concern with deepfake technology?",
      options: ["Potential for misinformation and fraud", "High computational cost", "Slow processing", "Limited applications"],
      correct: "Potential for misinformation and fraud",
      explanation: "Deepfakes can create convincing fake audio and video content, raising concerns about misinformation and identity fraud.",
      difficulty: "Hard"
    },
    {
      id: "it_u2_h10",
      question: "What is neuromorphic computing?",
      options: ["Computing inspired by brain architecture", "Fast traditional computing", "Quantum computing", "Cloud computing"],
      correct: "Computing inspired by brain architecture",
      explanation: "Neuromorphic computing mimics the architecture and functioning of biological neural networks for energy-efficient processing.",
      difficulty: "Hard"
    }
  ],

  "Unit 3: Database Management System": [
    // Easy Questions
    {
      id: "it_u3_e1",
      question: "What is a database?",
      options: ["Organized collection of data", "Computer hardware", "Software program", "Network protocol"],
      correct: "Organized collection of data",
      explanation: "A database is a structured collection of data that is organized and stored electronically for easy access and management.",
      difficulty: "Easy"
    },
    {
      id: "it_u3_e2",
      question: "What does DBMS stand for?",
      options: ["Database Management System", "Data Base Management Software", "Digital Base Management System", "Database Monitoring System"],
      correct: "Database Management System",
      explanation: "DBMS stands for Database Management System, which is software that manages and organizes databases.",
      difficulty: "Easy"
    },
    {
      id: "it_u3_e3",
      question: "What is a table in a database?",
      options: ["Collection of related records", "Physical furniture", "Software tool", "Network connection"],
      correct: "Collection of related records",
      explanation: "A table is a database object that stores data in rows and columns, representing a collection of related records.",
      difficulty: "Easy"
    },
    {
      id: "it_u3_e4",
      question: "What is SQL?",
      options: ["Structured Query Language", "System Quality Language", "Software Query Logic", "Simple Query Language"],
      correct: "Structured Query Language",
      explanation: "SQL is a programming language designed for managing and querying relational databases.",
      difficulty: "Easy"
    },
    {
      id: "it_u3_e5",
      question: "What is a primary key?",
      options: ["Unique identifier for records", "Main password", "Important data", "First column"],
      correct: "Unique identifier for records",
      explanation: "A primary key is a unique identifier that distinguishes each record in a database table.",
      difficulty: "Easy"
    },
    {
      id: "it_u3_e6",
      question: "What does CREATE do in SQL?",
      options: ["Creates database objects", "Deletes data", "Updates records", "Selects data"],
      correct: "Creates database objects",
      explanation: "The CREATE statement in SQL is used to create database objects like tables, databases, or indexes.",
      difficulty: "Easy"
    },
    {
      id: "it_u3_e7",
      question: "What is a record in a database?",
      options: ["A row of data", "A column of data", "Database software", "Storage device"],
      correct: "A row of data",
      explanation: "A record represents a single row in a database table, containing all the data for one entity.",
      difficulty: "Easy"
    },
    {
      id: "it_u3_e8",
      question: "What is a field in a database?",
      options: ["A column that stores specific type of data", "A row of data", "Database name", "File storage"],
      correct: "A column that stores specific type of data",
      explanation: "A field is a column in a database table that stores a specific type of data for all records.",
      difficulty: "Easy"
    },
    {
      id: "it_u3_e9",
      question: "Which SQL command is used to retrieve data?",
      options: ["SELECT", "CREATE", "DELETE", "UPDATE"],
      correct: "SELECT",
      explanation: "The SELECT statement is used to query and retrieve data from database tables.",
      difficulty: "Easy"
    },
    {
      id: "it_u3_e10",
      question: "What is data modeling?",
      options: ["Process of creating data structure representation", "Physical data storage", "Data encryption", "Data compression"],
      correct: "Process of creating data structure representation",
      explanation: "Data modeling is the process of creating a visual representation of data structure and relationships in a system.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "it_u3_m1",
      question: "What is normalization in database design?",
      options: ["Organizing data to reduce redundancy", "Making data bigger", "Encrypting data", "Backing up data"],
      correct: "Organizing data to reduce redundancy",
      explanation: "Normalization is the process of organizing database tables to minimize data redundancy and improve data integrity.",
      difficulty: "Medium"
    },
    {
      id: "it_u3_m2",
      question: "What is a foreign key?",
      options: ["Reference to primary key in another table", "Password for database", "External storage device", "Network key"],
      correct: "Reference to primary key in another table",
      explanation: "A foreign key is a field that references the primary key of another table, establishing relationships between tables.",
      difficulty: "Medium"
    },
    {
      id: "it_u3_m3",
      question: "What is the purpose of indexing in databases?",
      options: ["To improve query performance", "To backup data", "To encrypt data", "To compress data"],
      correct: "To improve query performance",
      explanation: "Database indexes improve query performance by providing faster access paths to data in tables.",
      difficulty: "Medium"
    },
    {
      id: "it_u3_m4",
      question: "What is a one-to-many relationship?",
      options: ["One record relates to multiple records", "Multiple records relate to one record", "One-to-one relationship", "No relationship"],
      correct: "One record relates to multiple records",
      explanation: "A one-to-many relationship means one record in a table can be related to multiple records in another table.",
      difficulty: "Medium"
    },
    {
      id: "it_u3_m5",
      question: "What does the WHERE clause do in SQL?",
      options: ["Filters records based on conditions", "Creates new tables", "Deletes databases", "Updates all records"],
      correct: "Filters records based on conditions",
      explanation: "The WHERE clause filters records that meet specific conditions in SQL queries.",
      difficulty: "Medium"
    },
    {
      id: "it_u3_m6",
      question: "What is an Entity-Relationship (ER) diagram?",
      options: ["Visual representation of database structure", "Database backup", "Query result", "Data encryption method"],
      correct: "Visual representation of database structure",
      explanation: "An ER diagram visually represents entities, attributes, and relationships in a database design.",
      difficulty: "Medium"
    },
    {
      id: "it_u3_m7",
      question: "What is the difference between DELETE and DROP in SQL?",
      options: ["DELETE removes records, DROP removes tables", "DELETE removes tables, DROP removes records", "They are the same", "Neither removes anything"],
      correct: "DELETE removes records, DROP removes tables",
      explanation: "DELETE removes specific records from a table, while DROP removes the entire table structure and data.",
      difficulty: "Medium"
    },
    {
      id: "it_u3_m8",
      question: "What is a composite key?",
      options: ["Primary key made of multiple columns", "Single column key", "Foreign key", "Index key"],
      correct: "Primary key made of multiple columns",
      explanation: "A composite key is a primary key that consists of two or more columns to uniquely identify records.",
      difficulty: "Medium"
    },
    {
      id: "it_u3_m9",
      question: "What is database integrity?",
      options: ["Accuracy and consistency of data", "Database speed", "Storage capacity", "User interface"],
      correct: "Accuracy and consistency of data",
      explanation: "Database integrity ensures that data is accurate, consistent, and valid according to defined rules and constraints.",
      difficulty: "Medium"
    },
    {
      id: "it_u3_m10",
      question: "What is the GROUP BY clause used for?",
      options: ["Grouping rows with same values", "Creating new groups", "Deleting groups", "Updating groups"],
      correct: "Grouping rows with same values",
      explanation: "GROUP BY groups rows that have the same values in specified columns and is often used with aggregate functions.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "it_u3_h1",
      question: "What is the ACID property in database transactions?",
      options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Completeness, Integrity, Dependability", "Access, Create, Insert, Delete", "Advanced, Complex, Integrated, Distributed"],
      correct: "Atomicity, Consistency, Isolation, Durability",
      explanation: "ACID properties ensure reliable database transactions: Atomicity (all-or-nothing), Consistency (valid state), Isolation (concurrent access), and Durability (permanent changes).",
      difficulty: "Hard"
    },
    {
      id: "it_u3_h2",
      question: "What is the difference between clustered and non-clustered indexes?",
      options: ["Clustered sorts table data, non-clustered creates separate structure", "Clustered is faster, non-clustered is slower", "Clustered is newer, non-clustered is older", "No difference"],
      correct: "Clustered sorts table data, non-clustered creates separate structure",
      explanation: "Clustered indexes sort and store table data rows based on key values, while non-clustered indexes create a separate structure pointing to data rows.",
      difficulty: "Hard"
    },
    {
      id: "it_u3_h3",
      question: "What is third normal form (3NF)?",
      options: ["No transitive dependencies on non-key attributes", "All attributes are atomic", "No partial dependencies", "All tables are related"],
      correct: "No transitive dependencies on non-key attributes",
      explanation: "Third normal form requires that no non-key attribute is transitively dependent on the primary key.",
      difficulty: "Hard"
    },
    {
      id: "it_u3_h4",
      question: "What is a stored procedure?",
      options: ["Precompiled SQL code stored in database", "Data backup method", "Query result", "Database table"],
      correct: "Precompiled SQL code stored in database",
      explanation: "A stored procedure is a precompiled collection of SQL statements stored in the database for reuse and better performance.",
      difficulty: "Hard"
    },
    {
      id: "it_u3_h5",
      question: "What is database deadlock?",
      options: ["Two transactions waiting for each other's resources", "Database corruption", "Slow query performance", "Network failure"],
      correct: "Two transactions waiting for each other's resources",
      explanation: "A deadlock occurs when two or more transactions are waiting for each other to release resources, creating a circular dependency.",
      difficulty: "Hard"
    },
    {
      id: "it_u3_h6",
      question: "What is the difference between UNION and UNION ALL?",
      options: ["UNION removes duplicates, UNION ALL keeps them", "UNION is faster, UNION ALL is slower", "UNION creates tables, UNION ALL deletes them", "No difference"],
      correct: "UNION removes duplicates, UNION ALL keeps them",
      explanation: "UNION combines result sets and removes duplicate rows, while UNION ALL combines all rows including duplicates.",
      difficulty: "Hard"
    },
    {
      id: "it_u3_h7",
      question: "What is optimistic vs pessimistic locking?",
      options: ["Optimistic assumes no conflicts, pessimistic locks immediately", "Optimistic is faster, pessimistic is slower", "Optimistic is newer, pessimistic is older", "They are the same"],
      correct: "Optimistic assumes no conflicts, pessimistic locks immediately",
      explanation: "Optimistic locking assumes conflicts are rare and checks for conflicts before committing, while pessimistic locking locks resources immediately.",
      difficulty: "Hard"
    },
    {
      id: "it_u3_h8",
      question: "What is database sharding?",
      options: ["Horizontal partitioning across multiple databases", "Vertical partitioning within one database", "Data backup strategy", "Query optimization technique"],
      correct: "Horizontal partitioning across multiple databases",
      explanation: "Sharding is a database scaling technique that horizontally partitions data across multiple database instances.",
      difficulty: "Hard"
    },
    {
      id: "it_u3_h9",
      question: "What is the CAP theorem?",
      options: ["Consistency, Availability, Partition tolerance trade-off", "Create, Alter, Partition commands", "Centralized, Automated, Partitioned systems", "Complex, Advanced, Professional databases"],
      correct: "Consistency, Availability, Partition tolerance trade-off",
      explanation: "CAP theorem states that a distributed database can only guarantee two of three properties: Consistency, Availability, and Partition tolerance.",
      difficulty: "Hard"
    },
    {
      id: "it_u3_h10",
      question: "What is eventual consistency in distributed databases?",
      options: ["System becomes consistent over time", "Immediate consistency always", "Never becomes consistent", "Consistency is not important"],
      correct: "System becomes consistent over time",
      explanation: "Eventual consistency means that the system will become consistent over time, but may not be consistent immediately after an update.",
      difficulty: "Hard"
    }
  ],

  "Unit 4: Web Authoring": [
    // Easy Questions
    {
      id: "it_u4_e1",
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Management Language"],
      correct: "HyperText Markup Language",
      explanation: "HTML stands for HyperText Markup Language, which is used to create and structure web pages.",
      difficulty: "Easy"
    },
    {
      id: "it_u4_e2",
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      correct: "Cascading Style Sheets",
      explanation: "CSS stands for Cascading Style Sheets, which is used to style and layout web pages.",
      difficulty: "Easy"
    },
    {
      id: "it_u4_e3",
      question: "Which HTML tag is used for headings?",
      options: ["<h1> to <h6>", "<head>", "<title>", "<header>"],
      correct: "<h1> to <h6>",
      explanation: "HTML uses <h1> through <h6> tags for headings, with <h1> being the largest and <h6> being the smallest.",
      difficulty: "Easy"
    },
    {
      id: "it_u4_e4",
      question: "What is the purpose of the <p> tag?",
      options: ["To create paragraphs", "To create pictures", "To create programs", "To create passwords"],
      correct: "To create paragraphs",
      explanation: "The <p> tag is used to define paragraphs of text in HTML documents.",
      difficulty: "Easy"
    },
    {
      id: "it_u4_e5",
      question: "Which attribute is used to specify a link destination?",
      options: ["href", "src", "alt", "class"],
      correct: "href",
      explanation: "The href attribute specifies the URL of the page or resource that the link goes to.",
      difficulty: "Easy"
    },
    {
      id: "it_u4_e6",
      question: "What is the first step in website planning?",
      options: ["Defining purpose and goals", "Choosing colors", "Writing code", "Testing"],
      correct: "Defining purpose and goals",
      explanation: "Website planning should begin with clearly defining the purpose, goals, and target audience of the website.",
      difficulty: "Easy"
    },
    {
      id: "it_u4_e7",
      question: "What does web accessibility mean?",
      options: ["Making websites usable for people with disabilities", "Making websites faster", "Making websites prettier", "Making websites smaller"],
      correct: "Making websites usable for people with disabilities",
      explanation: "Web accessibility ensures that websites are usable by people with various disabilities and limitations.",
      difficulty: "Easy"
    },
    {
      id: "it_u4_e8",
      question: "Which HTML tag is used to include CSS?",
      options: ["<link>", "<css>", "<style>", "<format>"],
      correct: "<link>",
      explanation: "The <link> tag is used to link external CSS files to HTML documents.",
      difficulty: "Easy"
    },
    {
      id: "it_u4_e9",
      question: "What is a wireframe in web design?",
      options: ["Basic layout structure", "Website code", "Color scheme", "Font selection"],
      correct: "Basic layout structure",
      explanation: "A wireframe is a basic visual layout that shows the structure and placement of elements on a web page.",
      difficulty: "Easy"
    },
    {
      id: "it_u4_e10",
      question: "Which HTML tag creates a bulleted list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correct: "<ul>",
      explanation: "The <ul> tag creates an unordered (bulleted) list in HTML.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "it_u4_m1",
      question: "What is the box model in CSS?",
      options: ["Content, padding, border, margin", "Header, body, footer", "HTML, CSS, JavaScript", "Text, images, links"],
      correct: "Content, padding, border, margin",
      explanation: "The CSS box model describes how elements are structured with content, padding, border, and margin areas.",
      difficulty: "Medium"
    },
    {
      id: "it_u4_m2",
      question: "What is responsive web design?",
      options: ["Design that adapts to different screen sizes", "Fast-loading websites", "Interactive websites", "Colorful websites"],
      correct: "Design that adapts to different screen sizes",
      explanation: "Responsive web design creates websites that automatically adjust and look good on various devices and screen sizes.",
      difficulty: "Medium"
    },
    {
      id: "it_u4_m3",
      question: "What is the purpose of semantic HTML?",
      options: ["To provide meaning to content structure", "To make pages faster", "To add styling", "To include scripts"],
      correct: "To provide meaning to content structure",
      explanation: "Semantic HTML uses elements that clearly describe their meaning and content structure for better accessibility and SEO.",
      difficulty: "Medium"
    },
    {
      id: "it_u4_m4",
      question: "What is CSS specificity?",
      options: ["Rules for determining which CSS styles apply", "CSS file size", "Number of CSS properties", "CSS loading speed"],
      correct: "Rules for determining which CSS styles apply",
      explanation: "CSS specificity determines which styles are applied when multiple CSS rules target the same element.",
      difficulty: "Medium"
    },
    {
      id: "it_u4_m5",
      question: "What is the difference between padding and margin?",
      options: ["Padding is inside border, margin is outside", "Padding is outside border, margin is inside", "They are the same", "Neither affects spacing"],
      correct: "Padding is inside border, margin is outside",
      explanation: "Padding creates space inside an element's border, while margin creates space outside the border.",
      difficulty: "Medium"
    },
    {
      id: "it_u4_m6",
      question: "What is the alt attribute used for?",
      options: ["Alternative text for images", "Alignment of elements", "Alternative colors", "Alternative fonts"],
      correct: "Alternative text for images",
      explanation: "The alt attribute provides alternative text for images, important for accessibility and when images cannot be displayed.",
      difficulty: "Medium"
    },
    {
      id: "it_u4_m7",
      question: "What is a CSS selector?",
      options: ["Pattern used to select HTML elements", "CSS property", "HTML tag", "Website template"],
      correct: "Pattern used to select HTML elements",
      explanation: "CSS selectors are patterns used to select and style HTML elements based on various criteria.",
      difficulty: "Medium"
    },
    {
      id: "it_u4_m8",
      question: "What is the purpose of meta tags?",
      options: ["Provide metadata about the HTML document", "Create visible content", "Add styling", "Include scripts"],
      correct: "Provide metadata about the HTML document",
      explanation: "Meta tags provide metadata about the HTML document, including description, keywords, and viewport settings.",
      difficulty: "Medium"
    },
    {
      id: "it_u4_m9",
      question: "What is CSS flexbox?",
      options: ["Layout method for arranging elements", "Image format", "Color scheme", "Font family"],
      correct: "Layout method for arranging elements",
      explanation: "CSS flexbox is a layout method that makes it easy to arrange elements in rows or columns with flexible sizing.",
      difficulty: "Medium"
    },
    {
      id: "it_u4_m10",
      question: "What is the difference between ID and class in HTML?",
      options: ["ID is unique, class can be reused", "ID can be reused, class is unique", "They are the same", "Neither can be reused"],
      correct: "ID is unique, class can be reused",
      explanation: "IDs should be unique on a page and used once, while classes can be applied to multiple elements.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "it_u4_h1",
      question: "What is the critical rendering path in web performance?",
      options: ["Steps browser takes to render a page", "CSS animation sequence", "JavaScript execution order", "HTML parsing method"],
      correct: "Steps browser takes to render a page",
      explanation: "The critical rendering path is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on screen.",
      difficulty: "Hard"
    },
    {
      id: "it_u4_h2",
      question: "What is Progressive Web App (PWA)?",
      options: ["Web app with native app-like features", "Advanced CSS framework", "JavaScript library", "HTML version"],
      correct: "Web app with native app-like features",
      explanation: "PWAs are web applications that use modern web capabilities to provide native app-like experiences including offline functionality.",
      difficulty: "Hard"
    },
    {
      id: "it_u4_h3",
      question: "What is the Shadow DOM?",
      options: ["Encapsulated DOM subtree", "Dark theme styling", "Hidden HTML elements", "CSS property"],
      correct: "Encapsulated DOM subtree",
      explanation: "Shadow DOM allows encapsulation of DOM subtrees, enabling component isolation and style scoping.",
      difficulty: "Hard"
    },
    {
      id: "it_u4_h4",
      question: "What is Cross-Site Scripting (XSS) prevention in web development?",
      options: ["Sanitizing user input and output encoding", "Using HTTPS only", "Blocking all JavaScript", "Requiring user login"],
      correct: "Sanitizing user input and output encoding",
      explanation: "XSS prevention involves validating and sanitizing user input, and properly encoding output to prevent malicious script injection.",
      difficulty: "Hard"
    },
    {
      id: "it_u4_h5",
      question: "What is the difference between server-side and client-side rendering?",
      options: ["Server-side renders on server, client-side in browser", "Server-side is faster, client-side is slower", "Server-side uses HTML, client-side uses CSS", "No difference"],
      correct: "Server-side renders on server, client-side in browser",
      explanation: "Server-side rendering generates HTML on the server, while client-side rendering generates content in the browser using JavaScript.",
      difficulty: "Hard"
    },
    {
      id: "it_u4_h6",
      question: "What is CSS Grid compared to Flexbox?",
      options: ["Grid is 2D layout, Flexbox is 1D layout", "Grid is older, Flexbox is newer", "Grid is faster, Flexbox is slower", "They are identical"],
      correct: "Grid is 2D layout, Flexbox is 1D layout",
      explanation: "CSS Grid is designed for two-dimensional layouts (rows and columns), while Flexbox excels at one-dimensional layouts.",
      difficulty: "Hard"
    },
    {
      id: "it_u4_h7",
      question: "What is Web Assembly (WASM)?",
      options: ["Binary instruction format for web browsers", "New HTML version", "CSS framework", "JavaScript library"],
      correct: "Binary instruction format for web browsers",
      explanation: "WebAssembly is a binary instruction format that enables near-native performance for web applications.",
      difficulty: "Hard"
    },
    {
      id: "it_u4_h8",
      question: "What is Content Security Policy (CSP)?",
      options: ["Security standard to prevent code injection", "Content management system", "CSS styling guideline", "HTML validation tool"],
      correct: "Security standard to prevent code injection",
      explanation: "CSP is a security standard that helps prevent cross-site scripting and other code injection attacks.",
      difficulty: "Hard"
    },
    {
      id: "it_u4_h9",
      question: "What is the difference between graceful degradation and progressive enhancement?",
      options: ["Graceful degrades from full features, progressive builds up", "Graceful is newer, progressive is older", "Graceful is faster, progressive is slower", "They are the same"],
      correct: "Graceful degrades from full features, progressive builds up",
      explanation: "Graceful degradation starts with full functionality and degrades for older browsers, while progressive enhancement starts basic and adds features.",
      difficulty: "Hard"
    },
    {
      id: "it_u4_h10",
      question: "What is lazy loading in web development?",
      options: ["Loading content only when needed", "Slow website loading", "Loading all content at once", "Disabling loading"],
      correct: "Loading content only when needed",
      explanation: "Lazy loading defers loading of non-critical resources until they are needed, improving initial page load performance.",
      difficulty: "Hard"
    }
  ],

  "Unit 5: Maintenance and Troubleshooting": [
    // Easy Questions
    {
      id: "it_u5_e1",
      question: "What is computer maintenance?",
      options: ["Regular care to keep systems running properly", "Buying new computers", "Playing games", "Browsing internet"],
      correct: "Regular care to keep systems running properly",
      explanation: "Computer maintenance involves regular activities to keep computer systems functioning efficiently and prevent problems.",
      difficulty: "Easy"
    },
    {
      id: "it_u5_e2",
      question: "What is the purpose of antivirus software?",
      options: ["To protect against malware", "To speed up computer", "To create documents", "To browse internet"],
      correct: "To protect against malware",
      explanation: "Antivirus software detects, prevents, and removes malicious software from computer systems.",
      difficulty: "Easy"
    },
    {
      id: "it_u5_e3",
      question: "What should you do first when a computer won't start?",
      options: ["Check power connections", "Format hard drive", "Buy new computer", "Call manufacturer"],
      correct: "Check power connections",
      explanation: "The first step in troubleshooting a computer that won't start is to verify all power connections are secure.",
      difficulty: "Easy"
    },
    {
      id: "it_u5_e4",
      question: "What is disk cleanup?",
      options: ["Removing unnecessary files from storage", "Cleaning computer screen", "Washing keyboard", "Dusting computer case"],
      correct: "Removing unnecessary files from storage",
      explanation: "Disk cleanup removes temporary files, cache, and other unnecessary data to free up storage space.",
      difficulty: "Easy"
    },
    {
      id: "it_u5_e5",
      question: "Why is it important to backup data?",
      options: ["To prevent data loss", "To speed up computer", "To save money", "To use less power"],
      correct: "To prevent data loss",
      explanation: "Regular data backups protect against data loss from hardware failure, software corruption, or other disasters.",
      difficulty: "Easy"
    },
    {
      id: "it_u5_e6",
      question: "What is a common cause of slow computer performance?",
      options: ["Too many programs running", "Large monitor", "Loud speakers", "Bright screen"],
      correct: "Too many programs running",
      explanation: "Running too many programs simultaneously can consume system resources and slow down computer performance.",
      difficulty: "Easy"
    },
    {
      id: "it_u5_e7",
      question: "What is the purpose of system updates?",
      options: ["To fix bugs and improve security", "To make computer slower", "To delete files", "To change colors"],
      correct: "To fix bugs and improve security",
      explanation: "System updates provide bug fixes, security patches, and feature improvements for operating systems and software.",
      difficulty: "Easy"
    },
    {
      id: "it_u5_e8",
      question: "What is preventive maintenance?",
      options: ["Regular maintenance to prevent problems", "Fixing problems after they occur", "Buying insurance", "Replacing all parts"],
      correct: "Regular maintenance to prevent problems",
      explanation: "Preventive maintenance involves regular activities performed to prevent problems before they occur.",
      difficulty: "Easy"
    },
    {
      id: "it_u5_e9",
      question: "What should you do before installing new software?",
      options: ["Check system requirements", "Delete all files", "Restart computer", "Disconnect internet"],
      correct: "Check system requirements",
      explanation: "Always verify that your system meets the software's minimum requirements before installation.",
      difficulty: "Easy"
    },
    {
      id: "it_u5_e10",
      question: "What is malware?",
      options: ["Malicious software", "Hardware component", "Internet service", "Computer game"],
      correct: "Malicious software",
      explanation: "Malware is software designed to harm, disrupt, or gain unauthorized access to computer systems.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "it_u5_m1",
      question: "What is the difference between hardware and software problems?",
      options: ["Hardware is physical, software is logical", "Hardware is expensive, software is cheap", "Hardware is new, software is old", "No difference"],
      correct: "Hardware is physical, software is logical",
      explanation: "Hardware problems involve physical components, while software problems involve programs, code, or data issues.",
      difficulty: "Medium"
    },
    {
      id: "it_u5_m2",
      question: "What is the purpose of a diagnostic tool?",
      options: ["To identify system problems", "To create documents", "To play media", "To browse web"],
      correct: "To identify system problems",
      explanation: "Diagnostic tools analyze system components and performance to identify problems and potential issues.",
      difficulty: "Medium"
    },
    {
      id: "it_u5_m3",
      question: "What is memory fragmentation?",
      options: ["Scattered allocation of memory space", "Physical damage to RAM", "Too little memory", "Memory overflow"],
      correct: "Scattered allocation of memory space",
      explanation: "Memory fragmentation occurs when memory is allocated and deallocated in a way that leaves small, unusable gaps.",
      difficulty: "Medium"
    },
    {
      id: "it_u5_m4",
      question: "What is the boot sequence?",
      options: ["Steps computer follows during startup", "Shutting down computer", "Installing software", "Connecting to internet"],
      correct: "Steps computer follows during startup",
      explanation: "The boot sequence is the ordered process a computer follows when starting up, from power-on to loading the operating system.",
      difficulty: "Medium"
    },
    {
      id: "it_u5_m5",
      question: "What is driver software?",
      options: ["Software that controls hardware devices", "Software for car navigation", "Web browser", "Game software"],
      correct: "Software that controls hardware devices",
      explanation: "Device drivers are software programs that enable the operating system to communicate with specific hardware components.",
      difficulty: "Medium"
    },
    {
      id: "it_u5_m6",
      question: "What causes registry errors in Windows?",
      options: ["Improper software installation/removal", "Too much RAM", "Fast processor", "Large hard drive"],
      correct: "Improper software installation/removal",
      explanation: "Registry errors often result from incomplete software installations or removals that leave orphaned entries.",
      difficulty: "Medium"
    },
    {
      id: "it_u5_m7",
      question: "What is thermal throttling?",
      options: ["CPU reducing speed to prevent overheating", "Network speed limitation", "Hard drive slowing down", "Monitor dimming"],
      correct: "CPU reducing speed to prevent overheating",
      explanation: "Thermal throttling is when a processor automatically reduces its speed to prevent damage from excessive heat.",
      difficulty: "Medium"
    },
    {
      id: "it_u5_m8",
      question: "What is the purpose of a UPS (Uninterruptible Power Supply)?",
      options: ["To provide backup power during outages", "To speed up computer", "To cool components", "To clean power"],
      correct: "To provide backup power during outages",
      explanation: "A UPS provides emergency power to connected devices during power outages, preventing data loss and damage.",
      difficulty: "Medium"
    },
    {
      id: "it_u5_m9",
      question: "What is disk defragmentation?",
      options: ["Reorganizing data for better performance", "Deleting all files", "Encrypting data", "Backing up data"],
      correct: "Reorganizing data for better performance",
      explanation: "Disk defragmentation rearranges fragmented files to improve storage efficiency and access speed.",
      difficulty: "Medium"
    },
    {
      id: "it_u5_m10",
      question: "What is a blue screen of death (BSOD)?",
      options: ["Windows system crash error screen", "Monitor color problem", "Software installation screen", "Internet connection error"],
      correct: "Windows system crash error screen",
      explanation: "BSOD is a critical system error screen that appears when Windows encounters a fatal error and must restart.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "it_u5_h1",
      question: "What is the difference between firmware and software?",
      options: ["Firmware is low-level code in hardware, software runs on OS", "Firmware is expensive, software is free", "Firmware is new, software is old", "No difference"],
      correct: "Firmware is low-level code in hardware, software runs on OS",
      explanation: "Firmware is low-level software stored in hardware that controls basic device operations, while software runs on the operating system.",
      difficulty: "Hard"
    },
    {
      id: "it_u5_h2",
      question: "What is the root cause analysis in troubleshooting?",
      options: ["Identifying underlying cause of problems", "Finding surface symptoms", "Replacing all components", "Restarting system"],
      correct: "Identifying underlying cause of problems",
      explanation: "Root cause analysis involves systematically identifying the fundamental reason for a problem rather than just addressing symptoms.",
      difficulty: "Hard"
    },
    {
      id: "it_u5_h3",
      question: "What is memory leak in software?",
      options: ["Program not releasing allocated memory", "Physical RAM damage", "Memory running too fast", "Memory overheating"],
      correct: "Program not releasing allocated memory",
      explanation: "A memory leak occurs when a program allocates memory but fails to release it, gradually consuming available memory.",
      difficulty: "Hard"
    },
    {
      id: "it_u5_h4",
      question: "What is POST (Power-On Self-Test)?",
      options: ["Hardware diagnostic during startup", "Software installation process", "Internet connection test", "User authentication"],
      correct: "Hardware diagnostic during startup",
      explanation: "POST is a diagnostic testing sequence run by firmware during startup to verify that hardware components are functioning properly.",
      difficulty: "Hard"
    },
    {
      id: "it_u5_h5",
      question: "What is the difference between cold boot and warm boot?",
      options: ["Cold boot powers on from off, warm boot restarts", "Cold boot is slower, warm boot is faster", "Cold boot uses less power, warm boot uses more", "No difference"],
      correct: "Cold boot powers on from off, warm boot restarts",
      explanation: "Cold boot starts from completely powered off state, while warm boot restarts the system without complete power cycling.",
      difficulty: "Hard"
    },
    {
      id: "it_u5_h6",
      question: "What is kernel panic?",
      options: ["Critical operating system error", "Hardware overheating", "Network failure", "User interface crash"],
      correct: "Critical operating system error",
      explanation: "Kernel panic is a critical error condition where the operating system kernel cannot safely continue operation and must halt.",
      difficulty: "Hard"
    },
    {
      id: "it_u5_h7",
      question: "What is the purpose of system profiling in troubleshooting?",
      options: ["To analyze system performance and resource usage", "To create user accounts", "To install software", "To backup data"],
      correct: "To analyze system performance and resource usage",
      explanation: "System profiling involves monitoring and analyzing system performance, resource usage, and behavior to identify issues.",
      difficulty: "Hard"
    },
    {
      id: "it_u5_h8",
      question: "What is firmware corruption?",
      options: ["Damaged or modified firmware code", "Slow firmware execution", "Outdated firmware version", "Missing firmware"],
      correct: "Damaged or modified firmware code",
      explanation: "Firmware corruption occurs when firmware code becomes damaged or modified, potentially causing hardware malfunction.",
      difficulty: "Hard"
    },
    {
      id: "it_u5_h9",
      question: "What is the significance of event logs in troubleshooting?",
      options: ["They record system events and errors for analysis", "They store user documents", "They manage network connections", "They control hardware"],
      correct: "They record system events and errors for analysis",
      explanation: "Event logs maintain records of system events, errors, and warnings that are crucial for diagnosing problems.",
      difficulty: "Hard"
    },
    {
      id: "it_u5_h10",
      question: "What is dependency hell in software maintenance?",
      options: ["Complex software dependency conflicts", "Hardware compatibility issues", "Network connectivity problems", "User interface errors"],
      correct: "Complex software dependency conflicts",
      explanation: "Dependency hell refers to the frustrating situation where software packages have conflicting or circular dependencies.",
      difficulty: "Hard"
    }
  ],

  "Unit 6: Fundamentals of Programming": [
    // Easy Questions
    {
      id: "it_u6_e1",
      question: "What is programming?",
      options: ["Writing instructions for computers", "Using computer applications", "Playing computer games", "Browsing the internet"],
      correct: "Writing instructions for computers",
      explanation: "Programming is the process of creating instructions (code) that tell a computer what to do and how to do it.",
      difficulty: "Easy"
    },
    {
      id: "it_u6_e2",
      question: "What is an algorithm?",
      options: ["Step-by-step solution to a problem", "Computer hardware", "Software application", "Internet protocol"],
      correct: "Step-by-step solution to a problem",
      explanation: "An algorithm is a finite sequence of well-defined instructions for solving a problem or completing a task.",
      difficulty: "Easy"
    },
    {
      id: "it_u6_e3",
      question: "What is pseudocode?",
      options: ["Informal description of program logic", "Encrypted code", "Broken code", "Machine code"],
      correct: "Informal description of program logic",
      explanation: "Pseudocode is a plain language description of programming logic that uses programming-like structure without syntax.",
      difficulty: "Easy"
    },
    {
      id: "it_u6_e4",
      question: "What is a flowchart?",
      options: ["Visual representation of program flow", "Type of programming language", "Computer component", "Software tool"],
      correct: "Visual representation of program flow",
      explanation: "A flowchart is a diagram that represents the flow of control in a program using symbols and arrows.",
      difficulty: "Easy"
    },
    {
      id: "it_u6_e5",
      question: "What is a variable in programming?",
      options: ["Container for storing data", "Programming error", "Computer hardware", "Internet connection"],
      correct: "Container for storing data",
      explanation: "A variable is a named storage location in memory that can hold different values during program execution.",
      difficulty: "Easy"
    },
    {
      id: "it_u6_e6",
      question: "What is syntax in programming?",
      options: ["Rules for writing code", "Program output", "Computer speed", "Memory usage"],
      correct: "Rules for writing code",
      explanation: "Syntax refers to the set of rules that define valid constructs in a programming language.",
      difficulty: "Easy"
    },
    {
      id: "it_u6_e7",
      question: "What is debugging?",
      options: ["Finding and fixing errors in code", "Writing new code", "Running programs", "Installing software"],
      correct: "Finding and fixing errors in code",
      explanation: "Debugging is the process of identifying, analyzing, and fixing bugs or errors in computer programs.",
      difficulty: "Easy"
    },
    {
      id: "it_u6_e8",
      question: "What is a programming language?",
      options: ["Formal language for writing programs", "Human language", "Computer hardware", "Internet protocol"],
      correct: "Formal language for writing programs",
      explanation: "A programming language is a formal language with specific syntax and semantics used to write computer programs.",
      difficulty: "Easy"
    },
    {
      id: "it_u6_e9",
      question: "What does 'print' typically do in programming?",
      options: ["Display output to screen", "Create physical printout", "Save file", "Delete data"],
      correct: "Display output to screen",
      explanation: "The print function typically displays output or information to the screen or console.",
      difficulty: "Easy"
    },
    {
      id: "it_u6_e10",
      question: "What is a comment in code?",
      options: ["Text that explains code but doesn't execute", "Error message", "Program output", "User input"],
      correct: "Text that explains code but doesn't execute",
      explanation: "Comments are explanatory text in code that help humans understand the program but are ignored during execution.",
      difficulty: "Easy"
    },

    // Medium Questions
    {
      id: "it_u6_m1",
      question: "What is the difference between compilation and interpretation?",
      options: ["Compilation translates before execution, interpretation during", "Compilation is slower, interpretation is faster", "Compilation is newer, interpretation is older", "No difference"],
      correct: "Compilation translates before execution, interpretation during",
      explanation: "Compilation translates source code to machine code before execution, while interpretation translates and executes code line by line.",
      difficulty: "Medium"
    },
    {
      id: "it_u6_m2",
      question: "What is a loop in programming?",
      options: ["Repeated execution of code block", "Programming error", "Data storage", "Network connection"],
      correct: "Repeated execution of code block",
      explanation: "A loop is a programming construct that repeats a block of code until a specified condition is met.",
      difficulty: "Medium"
    },
    {
      id: "it_u6_m3",
      question: "What is conditional statement?",
      options: ["Code that executes based on conditions", "Always executed code", "Error handling code", "Loop termination"],
      correct: "Code that executes based on conditions",
      explanation: "Conditional statements allow programs to make decisions and execute different code paths based on specified conditions.",
      difficulty: "Medium"
    },
    {
      id: "it_u6_m4",
      question: "What is a function in programming?",
      options: ["Reusable block of code", "Programming error", "Data type", "Computer hardware"],
      correct: "Reusable block of code",
      explanation: "A function is a named, reusable block of code that performs a specific task and can be called from other parts of the program.",
      difficulty: "Medium"
    },
    {
      id: "it_u6_m5",
      question: "What is an array?",
      options: ["Collection of similar data elements", "Single variable", "Programming error", "Computer component"],
      correct: "Collection of similar data elements",
      explanation: "An array is a data structure that stores multiple elements of the same type in a single variable.",
      difficulty: "Medium"
    },
    {
      id: "it_u6_m6",
      question: "What is the purpose of indentation in programming?",
      options: ["To show code structure and hierarchy", "To make code colorful", "To reduce file size", "To increase speed"],
      correct: "To show code structure and hierarchy",
      explanation: "Indentation visually represents code structure and hierarchy, making programs easier to read and understand.",
      difficulty: "Medium"
    },
    {
      id: "it_u6_m7",
      question: "What is a data type?",
      options: ["Classification of data values", "Programming language", "Computer hardware", "Software tool"],
      correct: "Classification of data values",
      explanation: "Data types define the kind of data that can be stored and manipulated in a program, such as integers, strings, or booleans.",
      difficulty: "Medium"
    },
    {
      id: "it_u6_m8",
      question: "What is the difference between = and == in many programming languages?",
      options: ["= assigns value, == compares values", "= compares values, == assigns value", "They are identical", "Neither is used"],
      correct: "= assigns value, == compares values",
      explanation: "The single equals (=) is used for assignment, while double equals (==) is used for comparison in many programming languages.",
      difficulty: "Medium"
    },
    {
      id: "it_u6_m9",
      question: "What is scope in programming?",
      options: ["Visibility and accessibility of variables", "Program execution speed", "Code file size", "Error frequency"],
      correct: "Visibility and accessibility of variables",
      explanation: "Scope determines where in a program a variable can be accessed and used.",
      difficulty: "Medium"
    },
    {
      id: "it_u6_m10",
      question: "What is an IDE?",
      options: ["Integrated Development Environment", "Internet Data Exchange", "Internal Database Engine", "Interactive Design Editor"],
      correct: "Integrated Development Environment",
      explanation: "An IDE is a software application that provides comprehensive tools for software development including editor, compiler, and debugger.",
      difficulty: "Medium"
    },

    // Hard Questions
    {
      id: "it_u6_h1",
      question: "What is object-oriented programming (OOP)?",
      options: ["Programming paradigm using objects and classes", "Outdated programming method", "Hardware programming", "Network programming"],
      correct: "Programming paradigm using objects and classes",
      explanation: "OOP is a programming paradigm that organizes code into objects containing both data (attributes) and methods (functions).",
      difficulty: "Hard"
    },
    {
      id: "it_u6_h2",
      question: "What is recursion in programming?",
      options: ["Function calling itself", "Repeating code manually", "Error handling", "Data storage method"],
      correct: "Function calling itself",
      explanation: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.",
      difficulty: "Hard"
    },
    {
      id: "it_u6_h3",
      question: "What is the difference between pass by value and pass by reference?",
      options: ["Value copies data, reference passes memory address", "Value is faster, reference is slower", "Value is newer, reference is older", "No difference"],
      correct: "Value copies data, reference passes memory address",
      explanation: "Pass by value creates a copy of the data, while pass by reference passes the memory address allowing direct modification.",
      difficulty: "Hard"
    },
    {
      id: "it_u6_h4",
      question: "What is Big O notation?",
      options: ["Measure of algorithm efficiency", "Programming language", "Data structure", "Error type"],
      correct: "Measure of algorithm efficiency",
      explanation: "Big O notation describes the computational complexity and efficiency of algorithms in terms of time and space requirements.",
      difficulty: "Hard"
    },
    {
      id: "it_u6_h5",
      question: "What is polymorphism in programming?",
      options: ["Same interface for different data types", "Multiple inheritance", "Error handling", "Variable naming"],
      correct: "Same interface for different data types",
      explanation: "Polymorphism allows objects of different types to be treated as instances of the same type through a common interface.",
      difficulty: "Hard"
    },
    {
      id: "it_u6_h6",
      question: "What is exception handling?",
      options: ["Managing runtime errors gracefully", "Preventing all errors", "Ignoring errors", "Creating errors"],
      correct: "Managing runtime errors gracefully",
      explanation: "Exception handling is a programming construct that allows programs to respond to exceptional circumstances during execution.",
      difficulty: "Hard"
    },
    {
      id: "it_u6_h7",
      question: "What is the difference between stack and heap memory?",
      options: ["Stack is automatic, heap is manual allocation", "Stack is larger, heap is smaller", "Stack is slower, heap is faster", "No difference"],
      correct: "Stack is automatic, heap is manual allocation",
      explanation: "Stack memory is automatically managed for local variables, while heap memory requires manual allocation and deallocation.",
      difficulty: "Hard"
    },
    {
      id: "it_u6_h8",
      question: "What is a design pattern in programming?",
      options: ["Reusable solution to common problems", "Visual code layout", "Error prevention method", "Hardware configuration"],
      correct: "Reusable solution to common problems",
      explanation: "Design patterns are reusable solutions to commonly occurring problems in software design and architecture.",
      difficulty: "Hard"
    },
    {
      id: "it_u6_h9",
      question: "What is the difference between compiled and interpreted languages?",
      options: ["Compiled translates before run, interpreted during run", "Compiled is faster, interpreted is slower", "Compiled is newer, interpreted is older", "No significant difference"],
      correct: "Compiled translates before run, interpreted during run",
      explanation: "Compiled languages are translated to machine code before execution, while interpreted languages are translated during execution.",
      difficulty: "Hard"
    },
    {
      id: "it_u6_h10",
      question: "What is concurrent programming?",
      options: ["Multiple processes executing simultaneously", "Sequential code execution", "Error-free programming", "Fast programming"],
      correct: "Multiple processes executing simultaneously",
      explanation: "Concurrent programming involves designing programs where multiple processes or threads can execute simultaneously and coordinate their actions.",
      difficulty: "Hard"
    }
  ]
};

export const getGrade12ITQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): ITQuestion[] => {
  const questions = grade12ITQuestions[unit];
  if (!questions) {
    console.log('No questions found for unit:', unit);
    return [];
  }

  const difficultyMap: { [key: string]: 'Easy' | 'Medium' | 'Hard' } = {
    'easy': 'Easy',
    'medium': 'Medium',
    'hard': 'Hard'
  };

  const targetDifficulty = difficultyMap[difficulty];
  const filteredQuestions = questions.filter(q => q.difficulty === targetDifficulty);
  
  // Shuffle and return the requested count
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

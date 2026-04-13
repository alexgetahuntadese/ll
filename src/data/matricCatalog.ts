export interface MatricSubjectSource {
  modulePath?: string;
  questionCount: number;
}

export interface MatricCatalogSubject {
  subject: string;
  questionCount: number;
  modulePath?: string;
}

export interface MatricCatalogStream {
  key: string;
  label: string;
  subjects: MatricCatalogSubject[];
}

export interface MatricCatalogYear {
  year: number;
  streams: MatricCatalogStream[];
}

export const matricCatalog: MatricCatalogYear[] = [
  {
    year: 2017,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", questionCount: 53, modulePath: "./matric2017MathQuestions.ts" },
          { subject: "Physics", questionCount: 59, modulePath: "./matric2017PhysicsQuestions.ts" },
          { subject: "Chemistry", questionCount: 78, modulePath: "./matric2017ChemistryQuestions.ts" },
          { subject: "Biology", questionCount: 60, modulePath: "./matric2017BiologyQuestions.ts" },
          { subject: "English", questionCount: 95, modulePath: "./matric2017EnglishQuestions.ts" },
          { subject: "Scholastic Aptitude Test", questionCount: 60, modulePath: "./matric2017ScholasticAptitudeQuestions.ts" },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", questionCount: 64, modulePath: "./matric2017SocialMathQuestions.ts" },
          { subject: "English", questionCount: 100, modulePath: "./matric2017SocialEnglishQuestions.ts" },
          { subject: "History", questionCount: 100, modulePath: "./matric2017SocialHistoryQuestions.ts" },
          { subject: "Geography", questionCount: 100, modulePath: "./matric2017SocialGeographyQuestions.ts" },
          { subject: "Economics", questionCount: 80, modulePath: "./matric2017SocialEconomicsQuestions.ts" },
          { subject: "Scholastic Aptitude Test", questionCount: 60, modulePath: "./matric2017SocialScholasticAptitudeQuestions.ts" },
        ],
      },
    ],
  },
  {
    year: 2016,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", questionCount: 60, modulePath: "./matric2016MathQuestions.ts" },
          { subject: "Physics", questionCount: 50, modulePath: "./matric2016PhysicsQuestions.ts" },
          { subject: "Chemistry", questionCount: 80, modulePath: "./matric2016ChemistryQuestions.ts" },
          { subject: "Biology", questionCount: 100, modulePath: "./matric2016BiologyQuestions.ts" },
          { subject: "English", questionCount: 100, modulePath: "./matric2016EnglishQuestions.ts" },
          { subject: "Scholastic Aptitude Test", questionCount: 60, modulePath: "./matric2016ScholasticAptitudeQuestions.ts" },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", questionCount: 52, modulePath: "./matric2016SocialMathQuestions.ts" },
          { subject: "English", questionCount: 95, modulePath: "./matric2016SocialEnglishQuestions.ts" },
          { subject: "History", questionCount: 100, modulePath: "./matric2016SocialHistoryQuestions.ts" },
          { subject: "Geography", questionCount: 100, modulePath: "./matric2016SocialGeographyQuestions.ts" },
          { subject: "Economics", questionCount: 80, modulePath: "./matric2016SocialEconomicsQuestions.ts" },
          { subject: "Scholastic Aptitude Test", questionCount: 60, modulePath: "./matric2016SocialScholasticAptitudeQuestions.ts" },
        ],
      },
    ],
  },
  {
    year: 2015,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", questionCount: 65, modulePath: "./matric2015MathQuestions.ts" },
          { subject: "Physics", questionCount: 50, modulePath: "./matric2015PhysicsQuestions.ts" },
          { subject: "Chemistry", questionCount: 78, modulePath: "./matric2015ChemistryQuestions.ts" },
          { subject: "Biology", questionCount: 98, modulePath: "./matric2015BiologyQuestions.ts" },
          { subject: "English", questionCount: 107, modulePath: "./matric2015EnglishQuestions.ts" },
          { subject: "Civics", questionCount: 50, modulePath: "./matric2015CivicsQuestions.ts" },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", questionCount: 65, modulePath: "./matric2015MathQuestions.ts" },
          { subject: "English", questionCount: 50, modulePath: "./matric2015EnglishQuestions.ts" },
          { subject: "Civics", questionCount: 50, modulePath: "./matric2015SocialCivicsQuestions.ts" },
          { subject: "History", questionCount: 50, modulePath: "./matric2015SocialHistoryQuestions.ts" },
          { subject: "Geography", questionCount: 50, modulePath: "./matric2015SocialGeographyQuestions.ts" },
          { subject: "Scholastic Aptitude Test", questionCount: 50, modulePath: "./matric2015SocialScholasticAptitudeQuestions.ts" },
        ],
      },
    ],
  },
  {
    year: 2014,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", questionCount: 65, modulePath: "./matric2014MathQuestions.ts" },
          { subject: "Physics", questionCount: 50, modulePath: "./matric2014PhysicsQuestions.ts" },
          { subject: "Chemistry", questionCount: 70, modulePath: "./matric2014ChemistryQuestions.ts" },
          { subject: "Biology", questionCount: 99, modulePath: "./matric2014BiologyQuestions.ts" },
          { subject: "English", questionCount: 50, modulePath: "./matric2014EnglishQuestions.ts" },
          { subject: "Civics", questionCount: 50, modulePath: "./matric2014CivicsQuestions.ts" },
          { subject: "Scholastic Aptitude Test", questionCount: 50, modulePath: "./matric2014SatQuestions.ts" },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", questionCount: 50, modulePath: "./matric2014SocialMathQuestions.ts" },
          { subject: "English", questionCount: 50, modulePath: "./matric2014SocialEnglishQuestions.ts" },
          { subject: "Civics", questionCount: 50, modulePath: "./matric2014SocialCivicsQuestions.ts" },
          { subject: "History", questionCount: 50, modulePath: "./matric2014SocialHistoryQuestions.ts" },
          { subject: "Geography", questionCount: 50, modulePath: "./matric2014SocialGeographyQuestions.ts" },
          { subject: "Scholastic Aptitude Test", questionCount: 50, modulePath: "./matric2014SocialSatQuestions.ts" },
        ],
      },
    ],
  },
  {
    year: 2013,
    streams: [
      {
        key: "natural",
        label: "Natural Science",
        subjects: [
          { subject: "Mathematics", questionCount: 50, modulePath: "./matric2013MathQuestions.ts" },
          { subject: "Physics", questionCount: 50, modulePath: "./matric2013PhysicsQuestions.ts" },
          { subject: "Chemistry", questionCount: 50, modulePath: "./matric2013ChemistryQuestions.ts" },
          { subject: "Biology", questionCount: 50, modulePath: "./matric2013BiologyQuestions.ts" },
          { subject: "English", questionCount: 50, modulePath: "./matric2013EnglishQuestions.ts" },
          { subject: "Civics", questionCount: 50, modulePath: "./matric2013CivicsQuestions.ts" },
        ],
      },
      {
        key: "social",
        label: "Social Science",
        subjects: [
          { subject: "Mathematics", questionCount: 50, modulePath: "./matric2013SocialMathQuestions.ts" },
          { subject: "English", questionCount: 50, modulePath: "./matric2013SocialEnglishQuestions.ts" },
          { subject: "Civics", questionCount: 50, modulePath: "./matric2013SocialCivicsQuestions.ts" },
          { subject: "History", questionCount: 50, modulePath: "./matric2013SocialHistoryQuestions.ts" },
          { subject: "Geography", questionCount: 50, modulePath: "./matric2013SocialGeographyQuestions.ts" },
          { subject: "Economics", questionCount: 50, modulePath: "./matric2013SocialEconomicsQuestions.ts" },
        ],
      },
    ],
  },
];

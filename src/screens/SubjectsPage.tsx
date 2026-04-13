
import type { ComponentType } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, Target, Sparkles, GraduationCap } from 'lucide-react';
import TopBar from "@/components/TopBar";
import StarField from '@/components/StarField';
import { grade9Subjects } from '@/data/grade9Subjects';
import { grade10Subjects } from '@/data/grade10Subjects';
import { grade11Subjects } from '@/data/grade11Subjects';
import { 
  Calculator, 
  Atom, 
  Globe, 
  Book, 
  Palette, 
  Music, 
  Heart, 
  Zap,
  TreePine,
  Languages,
  Users,
  Briefcase,
  Wheat,
  ScrollText,
  Monitor
} from 'lucide-react';

type SubjectCardData = {
  name: string;
  description: string;
  chapters: number;
  estimatedTime: string;
  difficulty: 'Advanced' | 'Intermediate' | 'Beginner';
  icon: ComponentType<{ className?: string }>;
  category: 'Natural Sciences' | 'Social Sciences' | 'Languages' | 'Mathematics' | 'Applied Sciences';
};

type CurriculumCategory = 'Natural Sciences' | 'Social Sciences' | 'Mathematics' | 'Languages' | 'Other';

const categoryMeta = {
  'Mathematics': {
    description: 'Quantitative reasoning, abstraction, proof, and formal problem solving.',
    badgeClass: 'bg-cyan-500/15 text-cyan-200 border-cyan-400/20',
  },
  'Natural Sciences': {
    description: 'Empirical sciences grounded in observation, experiment, models, and causal explanation.',
    badgeClass: 'bg-emerald-500/15 text-emerald-200 border-emerald-400/20',
  },
  'Social Sciences': {
    description: 'Human systems, institutions, development, policy, and evidence-based social analysis.',
    badgeClass: 'bg-amber-500/15 text-amber-100 border-amber-400/20',
  },
  'Languages': {
    description: 'Communication, interpretation, expression, literature, and disciplinary writing.',
    badgeClass: 'bg-fuchsia-500/15 text-fuchsia-100 border-fuchsia-400/20',
  },
  'Applied Sciences': {
    description: 'Technical and practice-oriented fields that connect scientific knowledge to real systems.',
    badgeClass: 'bg-violet-500/15 text-violet-100 border-violet-400/20',
  },
} as const;

const categoryOrder: SubjectCardData['category'][] = [
  'Mathematics',
  'Natural Sciences',
  'Social Sciences',
  'Languages',
  'Applied Sciences',
];

const SubjectsPage = () => {
  const navigate = useNavigate();
  const { grade } = useParams();

  const subjectIcons = {
    'Mathematics': Calculator,
    'Physics': Atom,
    'Chemistry': Zap,
    'Biology': TreePine,
    'Geography': Globe,
    'History': ScrollText,
    'English': Languages,
    'Amharic': Book,
    'Art': Palette,
    'Music': Music,
    'Physical Education': Heart,
    'Health and Physical Education': Heart,
    'Civic Education': Users,
    'Citizenship Education': Users,
    'Economics': Briefcase,
    'General Science': Atom,
    'Agriculture': Wheat,
    'Information Technology': Monitor,
  };

  const normalizeCategory = (category: CurriculumCategory): SubjectCardData['category'] =>
    category === 'Other' ? 'Applied Sciences' : category;

  const buildGrade10Subjects = (): SubjectCardData[] =>
    grade10Subjects.map((subject) => ({
      name: subject.name,
      description: subject.description,
      chapters: subject.chapters.length,
      estimatedTime: `${Math.max(subject.chapters.length * 3, 18)} hours`,
      difficulty: subject.category === 'Mathematics' || subject.name === 'Physics' || subject.name === 'Chemistry'
        ? 'Advanced'
        : 'Intermediate',
      icon: subjectIcons[subject.name as keyof typeof subjectIcons] || BookOpen,
      category: normalizeCategory(subject.category as CurriculumCategory),
    }));

  const buildGrade11Subjects = (): SubjectCardData[] =>
    grade11Subjects.map((subject) => ({
      name: subject.name === 'Civics' ? 'Civic Education' : subject.name,
      description: subject.description,
      chapters: subject.chapters.length,
      estimatedTime: `${Math.max(subject.chapters.length * 3, 18)} hours`,
      difficulty: subject.category === 'Mathematics' || subject.name === 'Physics' || subject.name === 'Chemistry'
        ? 'Advanced'
        : 'Intermediate',
      icon: subjectIcons[(subject.name === 'Civics' ? 'Civic Education' : subject.name) as keyof typeof subjectIcons] || BookOpen,
      category: normalizeCategory(subject.category as CurriculumCategory),
    }));

  const buildGrade9Subjects = (): SubjectCardData[] =>
    grade9Subjects.map((subject) => ({
      name: subject.name,
      description: subject.description,
      chapters: subject.chapters.length,
      estimatedTime: `${Math.max(subject.chapters.length * 3, 18)} hours`,
      difficulty: subject.category === 'Mathematics' || subject.name === 'Physics' || subject.name === 'Chemistry'
        ? 'Advanced'
        : 'Intermediate',
      icon: subjectIcons[subject.name as keyof typeof subjectIcons] || BookOpen,
      category: normalizeCategory(subject.category as CurriculumCategory),
    }));

  // Grade-specific subjects configuration
  const getSubjectsForGrade = (gradeNum: string): SubjectCardData[] => {
    if (gradeNum === '12') {
      return [
        {
          name: 'Mathematics',
          description: 'Sequences, calculus, statistics, linear programming, and business applications',
          chapters: 5,
          estimatedTime: '13 hours',
          difficulty: 'Advanced',
          icon: subjectIcons.Mathematics,
          category: 'Mathematics',
        },
        {
          name: 'Physics',
          description: 'Applications of physics, motion, fluids, electromagnetism, and electronics',
          chapters: 5,
          estimatedTime: '19 hours',
          difficulty: 'Advanced',
          icon: subjectIcons.Physics,
          category: 'Natural Sciences',
        },
        {
          name: 'Chemistry',
          description: 'Acid-base equilibrium, electrochemistry, industrial chemistry, and polymers',
          chapters: 5,
          estimatedTime: '19 hours',
          difficulty: 'Advanced',
          icon: subjectIcons.Chemistry,
          category: 'Natural Sciences',
        },
        {
          name: 'Biology',
          description: 'Applications of biology, microorganisms, evolution, human systems, and climate change',
          chapters: 6,
          estimatedTime: '23 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons.Biology,
          category: 'Natural Sciences',
        },
        {
          name: 'English',
          description: 'Theme-based language study covering sustainability, management, health, and robotics',
          chapters: 10,
          estimatedTime: '38 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons.English,
          category: 'Languages',
        },
        {
          name: 'History',
          description: 'Capitalism, colonialism, world wars, modern Ethiopia, and post-1991 developments',
          chapters: 9,
          estimatedTime: '34 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons.History,
          category: 'Social Sciences',
        },
        {
          name: 'Geography',
          description: 'Plate tectonics, climate change, resources, development, sustainability, and geographic enquiry',
          chapters: 8,
          estimatedTime: '30 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons.Geography,
          category: 'Social Sciences',
        },
        {
          name: 'Civic Education',
          description: 'Democracy, rule of law, equality, justice, patriotism, participation, and civic responsibility',
          chapters: 11,
          estimatedTime: '26 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons['Civic Education'],
          category: 'Social Sciences',
        },
        {
          name: 'Economics',
          description: 'Macroeconomics, demand and supply analysis, public policy, tax, inequality, and reform',
          chapters: 8,
          estimatedTime: '20 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons.Economics,
          category: 'Social Sciences',
        },
        {
          name: 'Amharic',
          description: 'Language, literature, criticism, poetry, research writing, and decision-focused communication',
          chapters: 9,
          estimatedTime: '23 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons.Amharic,
          category: 'Languages',
        },
        {
          name: 'Agriculture',
          description: 'Crop and livestock management, agroforestry, conservation, nutrition, and agricultural ICT',
          chapters: 17,
          estimatedTime: '39 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons.Agriculture,
          category: 'Applied Sciences',
        },
        {
          name: 'Information Technology',
          description: 'Information systems, emerging technologies, databases, web authoring, and programming',
          chapters: 6,
          estimatedTime: '23 hours',
          difficulty: 'Intermediate',
          icon: subjectIcons['Information Technology'],
          category: 'Applied Sciences',
        },
      ];
    }

    if (gradeNum === '11') {
      return buildGrade11Subjects();
    }

    if (gradeNum === '10') {
      return buildGrade10Subjects();
    }

    return buildGrade9Subjects();
  };

  const subjects = getSubjectsForGrade(grade || '12');
  const groupedSubjects = categoryOrder
    .map((category) => ({
      category,
      subjects: subjects.filter((subject) => subject.category === category),
    }))
    .filter((group) => group.subjects.length > 0);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Advanced': return 'bg-red-500 text-white';
      case 'Intermediate': return 'bg-yellow-500 text-black';
      case 'Beginner': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleSubjectSelect = (subject: SubjectCardData) => {
    navigate(`/grade/${grade}/subject/${encodeURIComponent(subject.name)}/chapters`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={4} />
      <TopBar />

      <div className="max-w-6xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="text-white/70 hover:text-white hover:bg-white/5 mb-8 transition-colors"
          onClick={() => navigate('/grades')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Grades
        </Button>

        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <GraduationCap className="h-4 w-4" />
            Grade {grade} • Ethiopian Curriculum
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Choose a Quiz Subject
          </h1>
          <p className="text-lg text-white/50 max-w-md mx-auto">
            Quiz chapters live here. Notes stay in the separate notes section.
          </p>
        </div>

        <div className="space-y-10">
          {groupedSubjects.map((group, groupIndex) => (
            <section
              key={group.category}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + 0.08 * groupIndex}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-white">{group.category}</h2>
                    <Badge variant="outline" className={categoryMeta[group.category].badgeClass}>
                      {group.subjects.length} subjects
                    </Badge>
                  </div>
                  <p className="text-sm text-white/45 max-w-3xl">
                    {categoryMeta[group.category].description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.subjects.map((subject) => {
                  const IconComponent = subject.icon;
                  return (
                    <div
                      key={subject.name}
                      onClick={() => handleSubjectSelect(subject)}
                      className="group relative cursor-pointer"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500" />

                      <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.15] group-hover:scale-[1.02] shadow-2xl h-full">
                        <Sparkles className="absolute top-4 right-4 h-4 w-4 text-white/10 group-hover:text-white/30 transition-colors duration-500" />

                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg group-hover:shadow-violet-500/30 transition-shadow duration-500">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">{subject.name}</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge className={`${getDifficultyColor(subject.difficulty)} text-xs`}>
                                {subject.difficulty}
                              </Badge>
                              <Badge variant="outline" className={categoryMeta[group.category].badgeClass}>
                                {subject.category}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <p className="text-white/40 text-sm mb-5">{subject.description}</p>

                        <div className="flex items-center gap-4 text-white/40 text-sm mb-5">
                          <div className="flex items-center gap-1.5">
                            <BookOpen className="h-3.5 w-3.5" />
                            <span>{subject.chapters} chapters</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{subject.estimatedTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center text-white/30 group-hover:text-violet-300 text-sm transition-colors duration-300">
                          <span>Explore quiz chapters</span>
                          <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;

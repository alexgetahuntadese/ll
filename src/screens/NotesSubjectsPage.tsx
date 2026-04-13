import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import TopBar from "@/components/TopBar";
import StarField from "@/components/StarField";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getNotesGrade } from "@/lib/notesData";

const subjectCategoryMap: Record<string, 'Natural Sciences' | 'Social Sciences' | 'Languages' | 'Mathematics' | 'Applied Sciences'> = {
  Mathematics: 'Mathematics',
  Physics: 'Natural Sciences',
  Chemistry: 'Natural Sciences',
  Biology: 'Natural Sciences',
  Geography: 'Social Sciences',
  History: 'Social Sciences',
  Economics: 'Social Sciences',
  'Civic Education': 'Social Sciences',
  'Citizenship Education': 'Social Sciences',
  English: 'Languages',
  Amharic: 'Languages',
  Agriculture: 'Applied Sciences',
  'Health and Physical Education': 'Applied Sciences',
  'Information Technology': 'Applied Sciences',
};

const categoryMeta = {
  'Mathematics': {
    description: 'Quantitative structures, proof, and formal reasoning.',
    badgeClass: 'bg-cyan-500/15 text-cyan-200 border-cyan-400/20',
  },
  'Natural Sciences': {
    description: 'Observation, experiment, models, and causal explanation in the natural world.',
    badgeClass: 'bg-emerald-500/15 text-emerald-200 border-emerald-400/20',
  },
  'Social Sciences': {
    description: 'Human systems, institutions, development, policy, and social evidence.',
    badgeClass: 'bg-amber-500/15 text-amber-100 border-amber-400/20',
  },
  'Languages': {
    description: 'Communication, interpretation, literature, and disciplined expression.',
    badgeClass: 'bg-fuchsia-500/15 text-fuchsia-100 border-fuchsia-400/20',
  },
  'Applied Sciences': {
    description: 'Technical and practice-facing subjects that apply knowledge to real systems.',
    badgeClass: 'bg-violet-500/15 text-violet-100 border-violet-400/20',
  },
} as const;

const categoryOrder = ['Mathematics', 'Natural Sciences', 'Social Sciences', 'Languages', 'Applied Sciences'] as const;

const NotesSubjectsPage = () => {
  const navigate = useNavigate();
  const { grade } = useParams();
  const gradeNumber = Number(grade);
  const gradeData = getNotesGrade(gradeNumber);

  if (!gradeData) {
    return <Navigate to="/notes" replace />;
  }

  const groupedSubjects = categoryOrder
    .map((category) => ({
      category,
      subjects: gradeData.subjects.filter(
        (subject) => (subjectCategoryMap[subject.name] ?? 'Applied Sciences') === category
      ),
    }))
    .filter((group) => group.subjects.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={4} />
      <TopBar />

      <div className="max-w-6xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="text-white/70 hover:text-white hover:bg-white/5 mb-8 transition-colors"
          onClick={() => navigate("/notes")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Notes
        </Button>

        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <GraduationCap className="h-4 w-4" />
            Grade {gradeNumber} Notes
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Choose a Notes Subject
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Notes stay separate from quizzes here. Open any subject to read short chapter notes only.
          </p>
        </div>

        <div className="space-y-10">
          {groupedSubjects.map((group, groupIndex) => (
            <section
              key={group.category}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + 0.08 * groupIndex}s`, animationFillMode: "forwards" }}
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
                {group.subjects.map((subject) => (
                  <div
                    key={subject.name}
                    onClick={() => navigate(`/notes/${gradeNumber}/${encodeURIComponent(subject.name)}`)}
                    className="group relative cursor-pointer"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${gradeData.accent} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.15] group-hover:scale-[1.02] shadow-2xl h-full">
                      <Sparkles className="absolute top-4 right-4 h-4 w-4 text-white/10 group-hover:text-white/30 transition-colors duration-500" />
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className="bg-white/10 text-white border-0">
                              Grade {gradeNumber}
                            </Badge>
                            <Badge variant="outline" className={categoryMeta[group.category].badgeClass}>
                              {group.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">{subject.name}</h3>
                          <p className="text-white/40 text-sm">{subject.description}</p>
                        </div>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradeData.accent} shadow-lg ring-4 ring-white/10`}>
                          <BookOpen className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="text-sm text-white/40 mb-5">
                        {subject.chapters.length} chapters
                      </div>
                      <div className="flex items-center text-white/30 group-hover:text-white/60 text-sm transition-colors duration-300">
                        <span>Open chapter notes</span>
                        <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesSubjectsPage;

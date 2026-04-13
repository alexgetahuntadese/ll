import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap, NotebookPen, Sparkles } from "lucide-react";
import TopBar from "@/components/TopBar";
import StarField from "@/components/StarField";
import { Button } from "@/components/ui/button";
import { notesByGrade } from "@/lib/notesData";

const NotesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={50} shootingCount={4} />
      <TopBar />

      <div className="max-w-5xl mx-auto relative z-10">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-white/70 hover:text-white hover:bg-white/5 mb-8 transition-colors"
        >
          Home
        </Button>

        <div className="text-center mb-14 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <NotebookPen className="h-4 w-4" />
            Chapter Notes
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Notes by Grade
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            This area is for notes only. Choose a grade, then open any subject to read short chapter focus notes on dedicated pages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notesByGrade.map((grade, index) => (
            <div
              key={grade.grade}
              onClick={() => navigate(`/notes/${grade.grade}`)}
              className="group relative cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${grade.accent} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.15] group-hover:scale-[1.02] shadow-2xl">
                <Sparkles className="absolute top-4 right-4 h-5 w-5 text-white/10 group-hover:text-white/30 transition-colors duration-500" />
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${grade.accent} shadow-lg ring-4 ring-white/10 group-hover:ring-8 transition-all duration-500`}>
                    <span className="text-3xl font-black text-white">{grade.grade}</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Grade {grade.grade}
                </h2>
                <p className="text-white/40 text-sm mb-6">{grade.description}</p>
                <div className="flex items-center gap-4 text-white/50 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{grade.subjects.length} subjects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Chapter notes</span>
                  </div>
                </div>
                <div className="mt-8 flex items-center text-white/30 group-hover:text-white/60 text-sm transition-colors duration-300">
                  <span>Open notes</span>
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;

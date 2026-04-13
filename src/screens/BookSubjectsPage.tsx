import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, Eye, GraduationCap, Sparkles } from "lucide-react";
import TopBar from "@/components/TopBar";
import StarField from "@/components/StarField";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookSubject, getBooksGrade } from "@/lib/booksData";

const getKehulumBookUrl = (gradeNumber: number, pdfPath: string) => {
  const match = pdfPath.match(/grade-\d+-(.+)\.pdf$/);
  const slug = match?.[1];

  if (!slug) {
    return `https://kehulum.com/student-textbook/new/grade-${gradeNumber}`;
  }

  return `https://kehulum.com/student-textbook/new/grade-${gradeNumber}/${slug}`;
};

const BookSubjectsPage = () => {
  const navigate = useNavigate();
  const { grade } = useParams();
  const gradeNumber = Number(grade);
  const gradeData = getBooksGrade(gradeNumber);
  const [previewBook, setPreviewBook] = useState<BookSubject | null>(null);

  if (!gradeData) {
    return <Navigate to="/books" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={4} />
      <TopBar />

      <div className="max-w-6xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="text-white/70 hover:text-white hover:bg-white/5 mb-8 transition-colors"
          onClick={() => navigate("/books")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Books
        </Button>

        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <GraduationCap className="h-4 w-4" />
            Grade {gradeNumber} Textbooks
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Choose a Subject
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Preview each textbook cover on this page and download the PDF directly without leaving the books section.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gradeData.subjects.map((subject, index) => {
            const sourceUrl = getKehulumBookUrl(gradeNumber, subject.pdf);

            return (
              <div
                key={subject.name}
                className="group relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 + index * 0.08}s`, animationFillMode: "forwards" }}
              >
              <div className={`absolute -inset-1 bg-gradient-to-r ${gradeData.accent} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.08]">
                <Sparkles className="absolute top-4 right-4 h-4 w-4 text-white/10 group-hover:text-white/30 transition-colors duration-500" />
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    onClick={() => setPreviewBook(subject)}
                    className="relative shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/10 transition hover:border-white/30"
                  >
                    <img
                      src={subject.image}
                      alt={`Grade ${gradeNumber} ${subject.name} textbook cover`}
                      className="h-40 w-28 object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 bg-slate-950/80 py-1 text-xs font-medium text-white">
                      <Eye className="h-3.5 w-3.5" />
                      Preview
                    </div>
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-white/10 text-white border-0">
                        Grade {gradeNumber}
                      </Badge>
                      <Badge variant="outline" className="border-white/15 text-white/70">
                        {subject.pages}
                      </Badge>
                      <Badge variant="outline" className="border-white/15 text-white/70">
                        {subject.size}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{subject.name}</h3>
                    <p className="text-sm leading-6 text-white/55">{subject.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={subject.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/90"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setPreviewBook(subject)}
                    className="rounded-xl border border-white/15 bg-transparent px-4 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Show Details
                  </Button>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!previewBook} onOpenChange={(open) => !open && setPreviewBook(null)}>
        <DialogContent className="border-white/15 bg-slate-950 text-white sm:max-w-3xl">
          {previewBook ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">
                  Grade {gradeNumber} {previewBook.name} Textbook Preview
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 md:grid-cols-[220px,1fr]">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                  <img
                    src={previewBook.image}
                    alt={`Grade ${gradeNumber} ${previewBook.name} textbook preview`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm leading-7 text-white/75">{previewBook.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                    <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1">Grade {gradeNumber}</span>
                    <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1">{previewBook.name}</span>
                    <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1">{previewBook.pages}</span>
                    <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1">{previewBook.size}</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={previewBook.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/90"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                    <a
                      href={getKehulumBookUrl(gradeNumber, previewBook.pdf)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open Source Page
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookSubjectsPage;

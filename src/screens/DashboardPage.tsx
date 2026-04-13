import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Library,
  NotebookPen,
  Trophy,
  User,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import AppLogo from "@/components/AppLogo";
import {
  getPerformanceData,
  getOverallAverageScore,
  getRecentAttempts,
  getTotalQuizCount,
} from "@/lib/performanceUtils";
import { getProfileKey } from "@/lib/profileUtils";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { displayName, profile, user } = useAuth();
  const profileKey = getProfileKey(profile, user);
  const performanceData = getPerformanceData(profileKey);
  const totalQuizzes = getTotalQuizCount(profileKey);
  const averageScore = getOverallAverageScore(profileKey);
  const recentAttempts = getRecentAttempts(2, profileKey);
  const activeSubjects = new Set(performanceData.attempts.map((attempt) => attempt.subject)).size;

  const quickActions = [
    {
      title: "Learning",
      description: "Continue your study sessions",
      icon: GraduationCap,
      route: "/grades",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Notes",
      description: "Review your saved notes",
      icon: NotebookPen,
      route: "/notes",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Books",
      description: "Browse study materials",
      icon: Library,
      route: "/books",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Matric Prep",
      description: "Practice exam questions",
      icon: Trophy,
      route: "/matric",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Live Call",
      description: "Start a tutor/student video room",
      icon: Video,
      route: "/webrtc",
      color: "from-fuchsia-500 to-pink-500",
    },
  ];

  const recentActivity = recentAttempts.map((attempt) => ({
    title: `${attempt.subject} - ${attempt.chapter}`,
    type: "Quiz",
    score: `${attempt.score}%`,
    date: new Date(attempt.attempted_at).toLocaleDateString(),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <AppLogo compact />
            <span className="text-lg font-semibold text-white">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/profile")}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 text-cyan-400 mb-2">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">Welcome back</span>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Hello, {displayName || "Student"}
          </h1>
          <p className="mt-2 text-white/60">
            {profile?.grade ? `Grade ${profile.grade} study plan is ready for you.` : "Ready to continue your learning journey?"}
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 grid gap-4 sm:grid-cols-3"
        >
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-cyan-500/20 p-3">
                <TrendingUp className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{totalQuizzes}</p>
                <p className="text-sm text-white/60">Quizzes Completed</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-emerald-500/20 p-3">
                <Target className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{averageScore}%</p>
                <p className="text-sm text-white/60">Average Score</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-amber-500/20 p-3">
                <BookOpen className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{activeSubjects}</p>
                <p className="text-sm text-white/60">Subjects Active</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="mb-4 text-xl font-semibold text-white">Quick Actions</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className="cursor-pointer border-white/10 bg-white/5 backdrop-blur-xl transition-colors hover:bg-white/10"
                    onClick={() => navigate(action.route)}
                  >
                    <CardContent className="p-6">
                      <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${action.color} p-3`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-white">{action.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{action.description}</p>
                      <div className="mt-4 flex items-center text-sm text-cyan-400">
                        <span>Go to {action.title}</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription className="text-white/60">
                Your latest learning sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.length > 0 ? recentActivity.map((activity) => (
                  <div
                    key={activity.title}
                    className="flex items-center justify-between rounded-xl bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-cyan-500/20 p-2">
                        <BookOpen className="h-4 w-4 text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{activity.title}</p>
                        <p className="text-sm text-white/60">{activity.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">
                        {activity.score || activity.duration}
                      </p>
                      <p className="text-xs text-white/60">{activity.date}</p>
                    </div>
                  </div>
                )) : (
                  <div className="rounded-xl bg-white/5 p-4 text-sm text-white/60">
                    No profile activity yet. Complete a quiz to start building your dashboard.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardPage;


import { useState, useEffect } from 'react';
import StarField from '@/components/StarField';
import { Navigate, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, Save, School, Trash2, User } from 'lucide-react';
import { clearPerformanceData, getPerformanceData, updateStudentName } from '@/lib/performanceUtils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from 'sonner';
import { useLanguage } from '@/i18n/LanguageContext';
import TopBar from "@/components/TopBar";
import { useAuth } from '@/hooks/useAuth';
import { getProfileDisplayName, getProfileKey } from '@/lib/profileUtils';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isAuthenticated, isLoading: isAuthLoading, profile, refreshProfile, user, updateProfile } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [school, setSchool] = useState('');
  const [quizCount, setQuizCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const profileKey = getProfileKey(profile, user);
  const displayName = getProfileDisplayName(profile, user);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const loadProfile = () => {
      const data = getPerformanceData(profileKey);
      setName(profile?.name || displayName || data.profile.student_name || '');
      setEmail(profile?.email || '');
      setGrade(profile?.grade || '');
      setSchool(profile?.school || '');
      setQuizCount(data.attempts.length);
    };

    loadProfile();
  }, [displayName, isAuthenticated, profile?.email, profile?.grade, profileKey, profile?.name, profile?.school]);

  const handleSave = async () => {
    if (!name.trim()) {
      toast.error(t('profile.enterValidName'));
      return;
    }

    setIsSaving(true);

    try {
      await updateProfile({
        name: name.trim(),
        email: email?.trim() || null,
        grade: grade.trim() || null,
        school: school.trim() || null,
      });
      updateStudentName(name.trim(), profileKey);
      await refreshProfile();
      toast.success(t('profile.profileUpdated'));
    } catch (error) {
      console.error('Error saving profile:', error);
      toast.error('Could not save your profile right now.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleClearData = () => {
    clearPerformanceData(profileKey);
    setName(displayName);
    setQuizCount(0);
    toast.success(t('profile.dataCleared'));
  };

  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">{t('profile.studentProfile')}</h1>
            <p className="text-white/50">{t('profile.manageProfile')}</p>
          </div>
        </div>

        <Card className="bg-white/[0.04] border-white/[0.08] mb-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-violet-500/20 rounded-full">
                <User className="h-8 w-8 text-violet-400" />
              </div>
              <div>
                <CardTitle className="text-white text-xl">{t('profile.profileSettings')}</CardTitle>
                <CardDescription className="text-white/50">
                  {t('profile.nameAppears')}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">{t('profile.studentName')}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('host.enterName')}
                className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="bg-white/[0.04] border-white/[0.08] pl-10 text-white placeholder:text-white/30"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="grade" className="text-white">Grade</Label>
                <Input
                  id="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder="9, 10, 11, 12"
                  className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school" className="text-white">School</Label>
                <div className="relative">
                  <School className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <Input
                    id="school"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="Your school"
                    className="bg-white/[0.04] border-white/[0.08] pl-10 text-white placeholder:text-white/30"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone</Label>
              <Input
                id="phone"
                value={profile?.phone || user?.phone || ''}
                readOnly
                className="bg-white/[0.03] border-white/[0.08] text-white/60"
              />
            </div>
            
            <Button onClick={handleSave} disabled={isSaving} className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white">
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? 'Saving...' : t('profile.saveProfile')}
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/[0.04] border-white/[0.08] mb-6">
          <CardHeader>
            <CardTitle className="text-white text-lg">{t('profile.performanceStats')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center p-4 bg-white/[0.04] rounded-lg border border-white/[0.08]">
              <span className="text-white/60">{t('profile.totalQuizzes')}</span>
              <span className="text-2xl font-bold text-white">{quizCount}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-500/[0.06] border-red-500/20">
          <CardHeader>
            <CardTitle className="text-red-400 text-lg">{t('profile.dangerZone')}</CardTitle>
            <CardDescription className="text-white/40">
              {t('profile.cannotBeUndone')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full">
                  <Trash2 className="mr-2 h-4 w-4" />
                  {t('profile.clearAllData')}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-slate-950 border-white/[0.08]">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white">{t('profile.areYouSure')}</AlertDialogTitle>
                  <AlertDialogDescription className="text-white/50">
                    {t('profile.deleteWarning')}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-white/[0.04] text-white border-white/[0.08] hover:bg-white/[0.08]">
                    {t('common.cancel')}
                  </AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleClearData}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    {t('profile.yesDelete')}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;

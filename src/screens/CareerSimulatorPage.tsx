import { useState } from 'react';
import StarField from '@/components/StarField';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles, Loader2, ChevronRight, RotateCcw, GraduationCap, Banknote, Brain, TrendingUp } from 'lucide-react';
import { simulatorCareers, SimulatorCareer } from '@/lib/careerSimulatorData';
import { careerSimulatorService } from '@/services/firebaseService';
import type { CareerStage } from '@/lib/firebase/functions';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/i18n/LanguageContext';
import TopBar from "@/components/TopBar";

type Stage = 'select' | 'loading' | 'intro' | 'scenario' | 'final';

interface Choice {
  id: string;
  text: string;
  consequence: string;
}

const CareerSimulatorPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { language } = useLanguage();
  const [stage, setStage] = useState<Stage>('select');
  const [selectedCareer, setSelectedCareer] = useState<SimulatorCareer | null>(null);
  const [introData, setIntroData] = useState<any>(null);
  const [scenarioData, setScenarioData] = useState<any>(null);
  const [finalData, setFinalData] = useState<any>(null);
  const [previousChoices, setPreviousChoices] = useState<string[]>([]);
  const [scenarioCount, setScenarioCount] = useState(0);

  const callSimulator = async (stageType: CareerStage, career: SimulatorCareer, choices: string[] = []) => {
    const data = await careerSimulatorService.invoke({
      career,
      stage: stageType,
      previousChoices: choices,
      language,
    });
    if ((data as { error?: string })?.error) throw new Error((data as { error?: string }).error);
    return data;
  };

  const handleSelectCareer = async (career: SimulatorCareer) => {
    setSelectedCareer(career);
    setStage('loading');
    setPreviousChoices([]);
    setScenarioCount(0);
    try {
      const data = await callSimulator('intro', career);
      setIntroData(data);
      setStage('intro');
    } catch (e: any) {
      toast({ title: 'Error', description: e.message || 'Failed to start simulation', variant: 'destructive' });
      setStage('select');
    }
  };

  const handleChoice = async (choice: Choice) => {
    const newChoices = [...previousChoices, `${choice.text}`];
    setPreviousChoices(newChoices);
    const newCount = scenarioCount + 1;
    setScenarioCount(newCount);
    setStage('loading');

    try {
      if (newCount >= 3) {
        const data = await callSimulator('final', selectedCareer!, newChoices);
        setFinalData(data);
        setStage('final');
      } else {
        const data = await callSimulator('consequence', selectedCareer!, newChoices);
        setScenarioData(data);
        setStage('scenario');
      }
    } catch (e: any) {
      toast({ title: 'Error', description: e.message || 'Failed to continue simulation', variant: 'destructive' });
      setStage('select');
    }
  };

  const handleRestart = () => {
    setStage('select');
    setSelectedCareer(null);
    setIntroData(null);
    setScenarioData(null);
    setFinalData(null);
    setPreviousChoices([]);
    setScenarioCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="text-white hover:bg-white/10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-yellow-400" />
              Future Me Mode
            </h1>
            <p className="text-pwwwhite/5sm">AI-Powered Career Simulator</p>
          </div>
        </div>

        {/* Career Selection */}
        {stage === 'select' && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-purwhiwhite/6enter text-lg mb-6">Choose a career to experience a day in their life ✨</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {simulatorCareers.map((career) => (
                <Card
                  key={career.id}
                  className="bg-white/5 border-white/10 hover:bg-white/15 cursor-pointer transition-all hover:scale-105 group"
                  onClick={() => handleSelectCareer(career)}
                >
                  <CardContent className="p-4 text-center">
                    <span className="text-4xl block mb-2">{career.icon}</span>
                    <h3 className="text-white font-semibold text-sm">{career.name}</h3>
                    <Badge variant="outline" className="mt-1 text-[10px] border-white/[0.08] text-white/40">{career.field}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Loading */}
        {stage === 'loading' && (
          <div className="flex flex-col items-center justify-center py-24 animate-fade-in">
            <Loader2 className="h-12 w-12 text-purple-400 animate-spin mb-4" />
            <p className="text-white/60 text-lg">Generating your scenario...</p>
            <p className="text-white/30 text-sm mt-1">AI is crafting a unique experience for you</p>
          </div>
        )}

        {/* Intro Scene */}
        {stage === 'intro' && introData && selectedCareer && (
          <div className="space-y-6 animate-fade-in">
            <Card className={`bg-gradient-to-br ${selectedCareer.color} border-0 shadow-2xl`}>
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-3">
                  <span className="text-4xl">{selectedCareer.icon}</span>
                  {introData.title || `A Day as a ${selectedCareer.name}`}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90 space-y-3">
                <p className="text-lg leading-relaxed">{introData.setting}</p>
                <div className="bg-black/20 rounded-lg p-4 mt-4">
                  <p className="font-semibold mb-1">⚡ Scenario:</p>
                  <p>{introData.scenario}</p>
                </div>
              </CardContent>
            </Card>

            {/* Career Info Panel */}
            {introData.careerInfo && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-yellow-400"><Banknote className="h-5 w-5" /><span className="font-semibold text-white">Salary</span></div>
                    <p className="text-white/60 text-sm">{introData.careerInfo.salaryRange}</p>
                    <div className="flex items-center gap-2 text-blue-400 mt-3"><GraduationCap className="h-5 w-5" /><span className="font-semibold text-white">Universities</span></div>
                    <div className="flex flex-wrap gap-1">
                      {introData.careerInfo.universities?.map((u: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs border-white/[0.08] text-white/60">{u}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-green-400"><Brain className="h-5 w-5" /><span className="font-semibold text-white">Key Skills</span></div>
                    <div className="flex flex-wrap gap-1">
                      {introData.careerInfo.requiredSkills?.map((s: string, i: number) => (
                        <Badge key={i} className="bg-white/[0.08] text-white/60 text-xs">{s}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 mt-3"><TrendingUp className="h-5 w-5" /><span className="font-semibold text-white">Growth</span></div>
                    <p className="text-white/60 text-sm">{introData.careerInfo.growthOutlook}</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Choices */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-lg">What do you do?</h3>
              {introData.choices?.map((choice: Choice) => (
                <Button
                  key={choice.id}
                  variant="outline"
                  className="w-full justify-between text-left h-auto py-4 px-5 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-purple-400 transition-all"
                  onClick={() => handleChoice(choice)}
                >
                  <span>{choice.text}</span>
                  <ChevronRight className="h-5 w-5 shrink-0 ml-2" />
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Consequence / Next Scenario */}
        {stage === 'scenario' && scenarioData && selectedCareer && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-purple-500/30 text-purple-200">Round {scenarioCount} of 3</Badge>
            </div>

            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6 space-y-4">
                {scenarioData.outcome && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <p className="text-green-300 text-sm font-medium mb-1">📌 What happened:</p>
                    <p className="text-white/70">{scenarioData.outcome}</p>
                  </div>
                )}
                {scenarioData.progressNote && (
                   <p className="text-violet-300 text-sm italic">💡 {scenarioData.progressNote}</p>
                )}
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="font-semibold text-white mb-1">⚡ New Challenge:</p>
                  <p className="text-white/70">{scenarioData.newScenario}</p>
                </div>
                {scenarioData.skillsUsed && (
                  <div className="flex gap-2 items-center">
                    <span className="text-white/40 text-sm">Skills used:</span>
                    {scenarioData.skillsUsed.map((s: string, i: number) => (
                      <Badge key={i} className="bg-blue-500/20 text-blue-300 text-xs">{s}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-3">
              <h3 className="text-white font-semibold text-lg">What do you do next?</h3>
              {scenarioData.choices?.map((choice: Choice) => (
                <Button
                  key={choice.id}
                  variant="outline"
                  className="w-full justify-between text-left h-auto py-4 px-5 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-purple-400 transition-all"
                  onClick={() => handleChoice(choice)}
                >
                  <span>{choice.text}</span>
                  <ChevronRight className="h-5 w-5 shrink-0 ml-2" />
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Final Summary */}
        {stage === 'final' && finalData && selectedCareer && (
          <div className="space-y-6 animate-fade-in">
            <Card className={`bg-gradient-to-br ${selectedCareer.color} border-0 shadow-2xl`}>
              <CardHeader>
                <CardTitle className="text-white text-2xl">🎯 Simulation Complete!</CardTitle>
              </CardHeader>
              <CardContent className="text-white/90 space-y-4">
                <p className="text-lg">{finalData.summary}</p>
                {finalData.fitScore && (
                  <div className="bg-black/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-white/70 mb-1">Career Fit Score</p>
                    <p className="text-5xl font-bold text-white">{finalData.fitScore}%</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <h3 className="text-green-400 font-semibold mb-3">💪 Your Strengths</h3>
                  <ul className="space-y-2">
                    {finalData.strengths?.map((s: string, i: number) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <h3 className="text-orange-400 font-semibold mb-3">📈 Areas to Improve</h3>
                  <ul className="space-y-2">
                    {finalData.areasToImprove?.map((s: string, i: number) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-orange-400 mt-0.5">→</span> {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {finalData.advice && (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <h3 className="text-purple-400 font-semibold mb-2">🎓 Advice</h3>
                  <p className="text-white/60">{finalData.advice}</p>
                </CardContent>
              </Card>
            )}

            {finalData.nextSteps && (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <h3 className="text-blue-400 font-semibold mb-3">🚀 Next Steps</h3>
                  <ol className="space-y-2">
                    {finalData.nextSteps.map((step: string, i: number) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-blue-400 font-bold">{i + 1}.</span> {step}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )}

            <div className="flex gap-3 justify-center pt-4">
              <Button onClick={handleRestart} className="bg-white/10 hover:bg-white/20 text-white">
                <RotateCcw className="h-4 w-4 mr-2" /> Try Another Career
              </Button>
              <Button onClick={() => navigate('/')} variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerSimulatorPage;

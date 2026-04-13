import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal } from "lucide-react";

interface Participant {
  id: string;
  player_name: string;
  score: number;
  is_host: boolean;
}

interface SessionLeaderboardProps {
  participants: Participant[];
}

const SessionLeaderboard = ({ participants }: SessionLeaderboardProps) => {
  const sorted = [...participants].sort((a, b) => b.score - a.score);

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="h-5 w-5 text-yellow-400" />;
    if (index === 1) return <Medal className="h-5 w-5 text-gray-300" />;
    if (index === 2) return <Medal className="h-5 w-5 text-amber-600" />;
    return <span className="w-5 h-5 flex items-center justify-center text-white/60">{index + 1}</span>;
  };

  const getRankStyle = (index: number) => {
    if (index === 0) return "bg-yellow-500/20 border-yellow-500/30";
    if (index === 1) return "bg-gray-400/20 border-gray-400/30";
    if (index === 2) return "bg-amber-600/20 border-amber-600/30";
    return "bg-white/5 border-white/10";
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-white flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-400" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {sorted.map((participant, index) => (
          <div
            key={participant.id}
            className={`flex items-center justify-between p-3 rounded-lg border ${getRankStyle(index)}`}
          >
            <div className="flex items-center gap-3">
              {getRankIcon(index)}
              <span className="text-white font-medium">{participant.player_name}</span>
            </div>
            <span className="text-white font-bold">{participant.score}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SessionLeaderboard;

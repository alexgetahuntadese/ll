import { useNavigate } from 'react-router-dom';
import StarField from '@/components/StarField';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const GradeSelection = () => {
  const navigate = useNavigate();

  const grades = [
    { number: 9, students: '5,200+', subjects: 10 },
    { number: 10, students: '6,100+', subjects: 10 },
    { number: 11, students: '8,600+', subjects: 12 },
    { number: 12, students: '8,300+', subjects: 14 },
  ];

  const handleGradeSelect = (grade: number) => {
    navigate(`/grade/${grade}/subjects`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-6 overflow-hidden relative">
      <StarField starCount={40} shootingCount={3} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Select Your Grade
          </h1>
          <p className="text-xl text-blue-200 mb-2">
            Choose your current grade level to access relevant study materials
          </p>
          <div className="flex items-center justify-center text-purple-200">
            <GraduationCap className="mr-2 h-5 w-5" />
            <span>Ethiopian Curriculum • Grades 5-12</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {grades.map((grade) => (
            <Card 
              key={grade.number}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              onClick={() => handleGradeSelect(grade.number)}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{grade.number}</span>
                </div>
                <CardTitle className="text-white text-xl">
                  Grade {grade.number}
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Ethiopian Curriculum
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>{grade.subjects} subjects</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>{grade.students}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGradeSelect(grade.number);
                  }}
                >
                  Enter Grade {grade.number}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GradeSelection;

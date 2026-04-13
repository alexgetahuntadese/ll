export interface SimulatorCareer {
  id: string;
  name: string;
  icon: string;
  description: string;
  field: string;
  color: string;
}

export const simulatorCareers: SimulatorCareer[] = [
  { id: 'doctor', name: 'Doctor', icon: '🩺', description: 'Diagnose and treat patients in hospitals and clinics', field: 'Healthcare', color: 'from-emerald-500 to-teal-600' },
  { id: 'software-engineer', name: 'Software Engineer', icon: '💻', description: 'Design and build software applications and systems', field: 'Technology', color: 'from-blue-500 to-indigo-600' },
  { id: 'civil-engineer', name: 'Civil Engineer', icon: '🏗️', description: 'Design and oversee construction of infrastructure', field: 'Engineering', color: 'from-amber-500 to-orange-600' },
  { id: 'journalist', name: 'Journalist', icon: '📰', description: 'Investigate and report news stories to the public', field: 'Media', color: 'from-rose-500 to-pink-600' },
  { id: 'agronomist', name: 'Agronomist', icon: '🌾', description: 'Improve crop production and farming techniques', field: 'Agriculture', color: 'from-green-500 to-lime-600' },
  { id: 'lawyer', name: 'Lawyer', icon: '⚖️', description: 'Represent clients and advocate for justice in courts', field: 'Law', color: 'from-purple-500 to-violet-600' },
  { id: 'teacher', name: 'Teacher', icon: '📚', description: 'Educate and inspire the next generation of leaders', field: 'Education', color: 'from-cyan-500 to-sky-600' },
  { id: 'architect', name: 'Architect', icon: '🏛️', description: 'Design buildings and urban spaces', field: 'Design', color: 'from-slate-500 to-gray-600' },
  { id: 'pharmacist', name: 'Pharmacist', icon: '💊', description: 'Dispense medications and advise on drug interactions', field: 'Healthcare', color: 'from-red-500 to-rose-600' },
  { id: 'data-scientist', name: 'Data Scientist', icon: '📊', description: 'Analyze data to discover insights and drive decisions', field: 'Technology', color: 'from-violet-500 to-purple-600' },
  { id: 'veterinarian', name: 'Veterinarian', icon: '🐄', description: 'Care for animals and support livestock health', field: 'Agriculture', color: 'from-yellow-500 to-amber-600' },
  { id: 'accountant', name: 'Accountant', icon: '🧮', description: 'Manage finances and ensure regulatory compliance', field: 'Business', color: 'from-indigo-500 to-blue-600' },
];

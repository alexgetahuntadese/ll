import { addDoc, collection } from "firebase/firestore";

import { firebaseReady, firestore } from "@/lib/firebase/client";
import type { SimulatorCareer } from "@/lib/careerSimulatorData";

export type CareerStage = "intro" | "consequence" | "final";

export type CareerPayload = {
  career: SimulatorCareer;
  stage: CareerStage;
  previousChoices?: string[];
  language?: string;
};

const CAREER_SIMULATION_COLLECTION = "career_simulations";

const getRandomItem = <T,>(items: T[], seed: number) => items[(seed + items.length) % items.length];

const makeIntro = (career: SimulatorCareer) => ({
  title: `A Day as a ${career.name}`,
  setting: `You arrive early for a busy day in the world of ${career.field.toLowerCase()}.`,
  scenario: `${career.description}. Your first challenge is to make a strong impression while handling real responsibilities.`,
  careerInfo: {
    salaryRange: "Varies by experience and location",
    universities: ["Addis Ababa University", "Jimma University", "Mekelle University"],
    requiredSkills: ["Communication", "Problem Solving", "Consistency", "Curiosity"],
    growthOutlook: `The ${career.field.toLowerCase()} field continues to grow and rewards resilient learners.`,
  },
  choices: [
    { id: "plan", text: "Review priorities and organize your day", consequence: "You choose structure first, which keeps the rest of the day calm." },
    { id: "collaborate", text: "Ask a teammate for advice", consequence: "You learn faster by leaning on experience around you." },
    { id: "act", text: "Jump straight into the first task", consequence: "You build momentum quickly and discover what matters most." },
  ],
});

const makeConsequence = (career: SimulatorCareer, previousChoices: string[], step: number) => {
  const isStepTwo = step === 1;
  const outcomes = [
    "Your first decision creates a little more confidence and clarity.",
    "A challenge appears, but your preparation helps you respond well.",
    "A client, patient, or project owner notices your steady work.",
  ];

  const nextScenarios = [
    "A new request comes in and you need to balance speed with quality.",
    "You must adapt to a surprise obstacle while keeping the team informed.",
    "Your next assignment is bigger than expected, but you are ready to learn.",
  ];

  return {
    outcome: getRandomItem(outcomes, previousChoices.length + step),
    progressNote: isStepTwo
      ? "You are building practical judgment and learning to stay calm under pressure."
      : "Each choice is shaping your career instincts.",
    newScenario: `${getRandomItem(nextScenarios, previousChoices.length)} in the ${career.field.toLowerCase()} field.`,
    skillsUsed: ["Adaptability", "Listening", "Focus"],
    choices: [
      { id: "careful", text: "Choose the careful path", consequence: "You protect quality and reduce mistakes." },
      { id: "bold", text: "Take a bold step", consequence: "You gain speed and confidence." },
      { id: "balanced", text: "Blend caution and initiative", consequence: "You find a strong middle ground." },
    ],
  };
};

const makeFinal = (career: SimulatorCareer, previousChoices: string[]) => ({
  summary: `You handled the simulation with ${previousChoices.length} meaningful decisions. That is a solid start toward becoming a ${career.name.toLowerCase()}.`,
  fitScore: Math.min(100, 60 + previousChoices.length * 10),
  strengths: ["Consistency", "Adaptability", "Learning fast"],
  areasToImprove: ["Depth of experience", "Confidence under pressure", "Speed of decision-making"],
  advice: `Keep practicing the habits that matter in ${career.field.toLowerCase()}: stay curious, ask questions, and keep building skills.`,
  nextSteps: [
    "Review subjects that support this career path.",
    "Talk to someone already in the field if possible.",
    "Practice with real projects and small goals.",
  ],
});

export const careerSimulatorService = {
  async invoke(payload: CareerPayload) {
    const { career, stage, previousChoices = [], language } = payload;
    const response = stage === "intro"
      ? makeIntro(career)
      : stage === "consequence"
        ? makeConsequence(career, previousChoices, previousChoices.length)
        : makeFinal(career, previousChoices);

    if (firebaseReady && firestore) {
      void addDoc(collection(firestore, CAREER_SIMULATION_COLLECTION), {
        career_id: career.id,
        career_name: career.name,
        stage,
        previous_choices: previousChoices,
        language: language || "en",
        created_at: new Date().toISOString(),
      }).catch((error) => {
        console.error("Failed to log career simulation event:", error);
      });
    }

    return response;
  },
};


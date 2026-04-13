import {
  buildGrade12QuestionBank,
  type GeneratedGrade12Question,
  type Grade12ChapterBlueprint,
} from './grade12QuestionFactory';

const grade12EconomicsBlueprints: Grade12ChapterBlueprint[] = [
  {
    chapter: 'Unit 1: The Fundamental Concepts Of Macroeconomics',
    primary: 'macroeconomic objectives',
    secondary: 'national income indicators',
    application: 'interpreting economy-wide performance',
    mastery: 'The chapter builds the language needed to evaluate inflation, growth, employment, and output at national scale.',
  },
  {
    chapter: 'Unit 2: Aggregate Demand And Aggregate Supply Analysis',
    primary: 'aggregate demand',
    secondary: 'aggregate supply',
    application: 'analyzing equilibrium in the whole economy',
    mastery: 'The chapter explains how shifts in aggregate demand and aggregate supply affect output, prices, and stabilization policy.',
  },
  {
    chapter: 'Unit 3: Market Failure And Consumer Protection',
    primary: 'market failure',
    secondary: 'consumer rights and regulation',
    application: 'evaluating when public intervention is justified',
    mastery: 'The chapter connects inefficient market outcomes to consumer protection, regulation, and public accountability.',
  },
  {
    chapter: 'Unit 4: Macroeconomic Policy Instruments',
    primary: 'fiscal policy',
    secondary: 'monetary policy',
    application: 'stabilizing inflation and unemployment',
    mastery: 'The chapter compares the major policy tools used by governments and central banks to guide macroeconomic performance.',
  },
  {
    chapter: 'Unit 5: Tax Theory And Practice',
    primary: 'tax principles',
    secondary: 'public revenue systems',
    application: 'linking taxation to equity and development',
    mastery: 'The chapter shows how tax design affects fairness, public finance, incentives, and state capacity.',
  },
  {
    chapter: 'Unit 6: Poverty And Inequality',
    primary: 'poverty measurement',
    secondary: 'income inequality',
    application: 'assessing inclusive development',
    mastery: 'The chapter helps learners distinguish absolute and relative deprivation while evaluating policy responses to inequality.',
  },
  {
    chapter: 'Unit 7: Macroeconomic Reforms In Ethiopia',
    primary: 'economic reform agenda',
    secondary: 'structural transformation',
    application: 'studying Ethiopian reform experience',
    mastery: 'The chapter links macroeconomic theory to Ethiopia by examining reform, liberalization, and sectoral restructuring.',
  },
  {
    chapter: 'Unit 8: Economy, Environment And Climate Change',
    primary: 'environment-economy interactions',
    secondary: 'climate-related economic risk',
    application: 'planning sustainable growth',
    mastery: 'The chapter integrates development economics with environmental stewardship and climate resilience.',
  },
];

export const grade12EconomicsQuestions: Record<string, GeneratedGrade12Question[]> =
  buildGrade12QuestionBank('Economics', 'g12eco', grade12EconomicsBlueprints);

export const getGrade12EconomicsQuestions = (
  chapter: string,
  difficulty?: string,
  count?: number,
) => {
  const chapterQuestions = grade12EconomicsQuestions[chapter] || [];
  const filtered = difficulty
    ? chapterQuestions.filter((question) => question.difficulty === difficulty)
    : chapterQuestions;

  return typeof count === 'number' ? filtered.slice(0, count) : filtered;
};

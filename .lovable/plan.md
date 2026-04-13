

# Add Afan Oromo Language Support

## Overview
Add bilingual support (English / Afan Oromo) to the EthioQuiz platform, allowing users to switch the entire UI to Afan Oromo (Oromiffa). This involves creating a translation system and translating all user-facing text.

## Approach
Create a lightweight custom i18n system using React Context (no external library needed) with translation files for English and Afan Oromo.

## New Files

| File | Purpose |
|------|---------|
| `src/i18n/translations/en.ts` | English translation strings |
| `src/i18n/translations/om.ts` | Afan Oromo translation strings |
| `src/i18n/LanguageContext.tsx` | React context provider for language state and translation function |
| `src/components/LanguageSwitcher.tsx` | Toggle button/dropdown to switch between English and Afan Oromo |

## Translation Structure

Translations will be organized by page/feature area:

```text
translations = {
  common: { back, home, loading, ... },
  index: { title, subtitle, exploreSubjects, browseQuizzes, ... },
  grades: { selectGrade, chooseGrade, hostSession, joinSession, ... },
  quiz: { question, next, previous, submit, checkAnswer, ... },
  results: { complete, score, correct, incorrect, retake, ... },
  performance: { dashboard, overallGrade, averageScore, ... },
  host: { hostQuiz, yourName, createSession, ... },
  join: { joinQuiz, enterCode, ... },
  career: { careerSuggestions, matchScore, ... },
  subjects: { mathematics, physics, chemistry, biology, ... }
}
```

## Key Afan Oromo Translations (Sample)

| English | Afan Oromo |
|---------|------------|
| EthioQuiz 2050 | EthioQuiz 2050 |
| Select Your Grade | Sadarkaa Kee Filadhu |
| Browse Quizzes | Qormaata Ilaali |
| My Performance | Gahee Koo |
| Host Session | Waldaa Qopheessi |
| Join Session | Waldaa Makamii |
| Quiz Complete! | Qormaanni Xumurameera! |
| Score | Qabxii |
| Question | Gaaffii |
| Next | Itti Aanee |
| Previous | Kan Dura |
| Submit | Galchi |
| Back | Duubatti |
| Correct | Sirrii |
| Incorrect | Dogoggora |

## Modified Files

| File | Changes |
|------|---------|
| `src/App.tsx` | Wrap app in `LanguageProvider` |
| `src/pages/Index.tsx` | Replace hardcoded text with `t()` calls |
| `src/pages/GradesPage.tsx` | Replace hardcoded text with `t()` calls |
| `src/pages/PerformancePage.tsx` | Replace hardcoded text with `t()` calls |
| `src/pages/HostPage.tsx` | Replace hardcoded text with `t()` calls |
| `src/pages/JoinPage.tsx` | Replace hardcoded text with `t()` calls |
| `src/pages/SessionPage.tsx` | Replace hardcoded text with `t()` calls |
| `src/pages/ProfilePage.tsx` | Replace hardcoded text with `t()` calls |
| `src/components/QuizInterface.tsx` | Replace hardcoded text with `t()` calls |
| `src/components/Results.tsx` | Replace hardcoded text with `t()` calls |
| `src/components/QuizDashboard.tsx` | Replace hardcoded text with `t()` calls |
| `src/components/performance/*.tsx` | Replace hardcoded text with `t()` calls |

## Language Switcher UI

- A floating button or header toggle on every page showing "EN / OM"
- Selected language saved to `localStorage` so it persists across sessions
- Placed in the top-right corner of the main layout

## Implementation Order

1. Create translation files (`en.ts` and `om.ts`) with all UI strings
2. Create `LanguageContext.tsx` with provider, `useLanguage` hook, and `t()` function
3. Create `LanguageSwitcher.tsx` component
4. Wrap `App.tsx` in `LanguageProvider`
5. Update all pages and components to use `t()` for text rendering
6. Test language switching across all pages

## Technical Details

- Language preference stored in `localStorage` key `preferred_language`
- Default language: English (`en`)
- The `t()` function takes a dot-notation key (e.g., `t('quiz.next')`) and returns the translated string
- Falls back to English if a translation key is missing in Afan Oromo
- Quiz question content stays in English (translating question banks is a separate effort)
- Only UI chrome/labels are translated


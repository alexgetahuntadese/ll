export const TRIAL_STORAGE_KEY = "studentTrialAccess";
export const FREE_CHAPTER_LIMIT = 100;
export const FREE_MATRIC_SUBJECT_LIMIT = 1;

export interface TrialAccess {
  studentName: string;
  startedAt: string;
  endsAt: string;
  used: boolean;
}

export const getTrialAccess = (): TrialAccess | null => {
  try {
    const raw = localStorage.getItem(TRIAL_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as TrialAccess;
  } catch (error) {
    console.error("Failed to read trial access:", error);
    return null;
  }
};

export const isTrialExpired = (trial: TrialAccess | null) => {
  if (!trial) {
    return false;
  }

  return new Date(trial.endsAt).getTime() < Date.now();
};

export const getTrialDaysRemaining = (trial: TrialAccess | null) => {
  if (!trial) {
    return 0;
  }

  const diff = new Date(trial.endsAt).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

export const isFreeChapter = (chapterIndex: number) => chapterIndex < FREE_CHAPTER_LIMIT;
export const isFreeMatricSubject = (subjectIndex: number) => subjectIndex < FREE_MATRIC_SUBJECT_LIMIT;

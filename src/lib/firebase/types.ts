export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserProfile = {
  id: string;
  auth_id: string | null;
  name: string | null;
  mobile: string | null;
  email: string | null;
  phone: string;
  grade: string | null;
  school: string | null;
  profile_image_url: string | null;
  date_of_birth: string | null;
  gender: string | null;
  preferences: Json | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  last_login: string | null;
};

export type PaymentSubmission = {
  id: string;
  user_id: string;
  user_name: string | null;
  user_phone: string | null;
  amount: number;
  bank_name: string;
  account_number: string;
  transaction_ref: string;
  payment_method: "cbe" | "telebirr";
  status: "pending" | "verified" | "rejected" | "approved";
  receipt_path: string | null;
  receipt_url: string | null;
  receipt_content_type: string | null;
  receipt_size_bytes: number | null;
  submitted_at: string;
  verified_at: string | null;
  reviewer_notes: string | null;
  submitter_notes: string | null;
  verified_by: string | null;
  created_at: string;
  updated_at: string;
};

export type SavedQuestion = {
  id: string;
  user_id: string;
  question_id: string;
  question_data: Json;
  note: string | null;
  created_at: string;
  updated_at: string;
};

export type SearchHistory = {
  id: string;
  user_id: string;
  search_term: string;
  result_count: number;
  created_at: string;
};

export type AppSession = {
  accessToken: string | null;
  expiresAt: string | null;
  user: {
    id: string;
    phone: string;
    email: string | null;
    user_metadata: {
      name?: string | null;
      mobile?: string | null;
    };
  };
};

export type QuestionDataPayload = {
  id?: string;
  [key: string]: Json | undefined;
};


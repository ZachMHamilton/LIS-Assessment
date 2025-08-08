import type { Submission } from "./submission";

export interface SubmissionStore {
  createSubmission(data: Submission): Promise<Submission>;
  getAllSubmissions(): Promise<Submission[]>;
}

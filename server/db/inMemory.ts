import type { SubmissionStore } from "../models/submissionStore";
import type { Submission } from "../models/submission";

let submissions: Submission[] = [];
let idCounter = 1;

export const inMemory: SubmissionStore = {
  async getAllSubmissions(): Promise<Submission[]> {
    return submissions;
  },

  async createSubmission(data: Submission): Promise<Submission> {
    const newSubmission: Submission = {
      ...data,
      id: idCounter++,
      created_at: new Date()
    };
    submissions.push(newSubmission);
    return newSubmission;
  }
};
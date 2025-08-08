import type { Submission } from "./submissionModel";

let submissions: Submission[] = [];
let idCounter = 1;

export async function getAllSubmissions(): Promise<Submission[]> {
  return submissions;
}

export async function createSubmission(data: Submission): Promise<Submission> {
  const newSubmission: Submission = {
    id: idCounter++,
    created_at: new Date(),
    ...data,
  };
  submissions.push(newSubmission);
  return newSubmission;
}
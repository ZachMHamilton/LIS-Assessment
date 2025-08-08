import type { SubmissionStore } from "../models/submissionStore";
import type { Request, Response } from "express";

export function createSubmissionController(store: SubmissionStore) {
  return {
    async addSubmission(req: Request, res: Response) {
      try {
        const submission = await store.createSubmission(req.body);
        return res.status(201).json(submission);
      } catch (err) {
        return res.status(500).json({ error: "Failed to add submission"} );
      }
    },

    async getSubmissions(_req: Request, res: Response) {
      try {
        const all = await store.getAllSubmissions();
        return res.status(200).json(all);
      } catch (err) {
        return res.status(500).json({ error: "Failed to get submissions"} );
      }
    }
  };
}

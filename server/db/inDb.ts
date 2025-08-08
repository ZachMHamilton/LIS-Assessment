import type { Submission } from "../models/submission";
import type { SubmissionStore } from "../models/submissionStore";
import pool from "./index";

export const inDb: SubmissionStore = {
    async getAllSubmissions(): Promise<Submission[]> {
      const query = `
      SELECT id, name, age, title, hometown, created_at
      FROM submissions
      ORDER BY created_at DESC
      `;
      const result = await pool.query(query);
      return result.rows;
    },
    async createSubmission(data: Submission): Promise<Submission> {
      const query = `
      INSERT INTO submissions (name, age, title, hometown)
      VALUES ($1, $2, $3, $4)
      `;
      const values = [data.name, data.age ?? null, data.title, data.hometown ?? null];
      await pool.query(query, values);
      return data;
    }
};

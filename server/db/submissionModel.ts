import pool from "./index";

export interface Submission {
  id?: number;
  name: string;
  age?: string;
  title: string;
  hometown?: string;
  created_at?: Date;
}

export async function createSubmission(data: Submission): Promise<void> {
  const query = `
    INSERT INTO submissions (name, age, title, hometown)
    VALUES ($1, $2, $3, $4)
  `;
  const values = [data.name, data.age ?? null, data.title, data.hometown ?? null];
  await pool.query(query, values);
}

export async function getAllSubmissions(): Promise<Submission[]> {
  const query = `
    SELECT id, name, age, title, hometown, created_at
    FROM submissions
    ORDER BY created_at DESC
  `;
  const result = await pool.query(query);
  return result.rows;
}

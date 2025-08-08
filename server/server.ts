import express from 'express';
import pool from "./db";

const app = express();
const PORT = 3000;
const useDb = "true";

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json({
      message: "connected",
      currentTime: result.rows[0].now,
    });
  } catch (error) {
    console.error("connection error:", error);
    res.status(500).json({ error: "failed to connect" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

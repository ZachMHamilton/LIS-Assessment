import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config(); 

const pool = new Pool({
  host: process.env.HOST,
  port: Number(process.env.PORT),
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

pool
  .query("SELECT NOW()")
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error:", err));

export default pool;

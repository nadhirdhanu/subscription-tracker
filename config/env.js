import { config } from "dotenv";

// Load environment variables from .env file
config({ path: `.env.${process.env.NODE_END || 'development'}.local` });

export const { PORT, NODE_ENV } = process.env;
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config(); // 👈 THIS LINE IS CRITICAL

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default supabase;

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Prefer server-side service role when available, otherwise fall back to anon key.
const key = serviceKey ?? anonKey;

if (!url || !key) {
  throw new Error(
    "Missing Supabase env vars: ensure NEXT_PUBLIC_SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY are set",
  );
}

export const supabase = createClient(url, key);
export default supabase;

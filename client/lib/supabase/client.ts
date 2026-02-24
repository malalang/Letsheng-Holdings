import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // If in server environment, throw to fail-fast; in browser, log a warning.
  if (typeof window === "undefined") {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  } else {
    // Graceful fallback for dev-time when envs are not present in the browser.
    // Avoid creating client with undefined values.
    console.warn(
      "Supabase public envs missing: client may not function as expected.",
    );
  }
}

export const supabase = createClient(url ?? "", anonKey ?? "");
export default supabase;

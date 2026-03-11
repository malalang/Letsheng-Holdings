"use client";
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/lib/types/database.types";
import { getSupabaseConfig } from "./config";

export function createClient() {
  return createBrowserClient<Database>(getSupabaseConfig().url, getSupabaseConfig().anonKey)
}



export type SupabaseBrowserClient = ReturnType<
  typeof createClient
>;
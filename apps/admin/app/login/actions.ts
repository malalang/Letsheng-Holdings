"use server";

import { createSupabaseServerClient } from "@repo/supabase/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export async function login(values: LoginFormValues) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (error) {
    return {
      ok: false,
      error: error.message,
    };
  } else if (data.user) {
    return {
      ok: true,
    };
  }
  return {
    ok: false,
    error: "An unknown error occurred.",
  };
}

export async function logout() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}

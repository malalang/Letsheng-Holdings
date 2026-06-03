import type { User } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "./server";

function getAdminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function hasAdminRole(user: User) {
  const role = user.app_metadata?.role;
  const roles = user.app_metadata?.roles;

  return (
    role === "admin" ||
    (Array.isArray(roles) && roles.includes("admin"))
  );
}

export async function requireAdminUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized");
  }

  const adminEmails = getAdminEmails();
  const email = user.email?.toLowerCase();

  if (adminEmails.length > 0) {
    const emailAllowed = email ? adminEmails.includes(email) : false;
    if (!emailAllowed && !hasAdminRole(user)) {
      throw new Error("Forbidden");
    }
  }

  return user;
}

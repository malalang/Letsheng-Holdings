import { createSupabaseProxyClient } from "@letsheng-holdings/supabase/session";
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { supabase, response } = await createSupabaseProxyClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const pathname = request.nextUrl.pathname;

  const redirect = (to: string) => {
    const res = NextResponse.redirect(new URL(to, request.url));
    response.cookies.getAll().forEach((cookie) => res.cookies.set(cookie));
    return res;
  };

  if (!user && pathname !== "/login") {
    return redirect("/login");
  }

  if (!user) {
    return response;
  }

  const { data: isAdmin, error: adminError } = await supabase.rpc("is_admin");
  const hasAdminAccess = !adminError && isAdmin === true;

  if (!hasAdminAccess && pathname !== "/login") {
    return redirect("/login?error=unauthorized");
  }

  if (hasAdminAccess && pathname === "/login") {
    return redirect("/dashboard");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

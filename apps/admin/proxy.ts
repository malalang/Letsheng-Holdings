import { createSupabaseProxyClient } from "@repo/supabase/proxy";
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { supabase, response } = await createSupabaseProxyClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const pathname = request.nextUrl.pathname;

  if (!user && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!user) {
    return response;
  }

  const { data: isAdmin, error: adminError } = await supabase.rpc("is_admin");
  const hasAdminAccess = !adminError && isAdmin === true;

  if (!hasAdminAccess && pathname !== "/login") {
    return NextResponse.redirect(
      new URL("/login?error=unauthorized", request.url),
    );
  }

  if (hasAdminAccess && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

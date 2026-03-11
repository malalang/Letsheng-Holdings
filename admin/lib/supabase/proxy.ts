import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseConfig } from "@/lib/supabase/config";

const AUTH_ROUTES = ["/login", "/register"];

export async function updateSession(request: NextRequest) {
  console.log('proxy started')
  let supabaseResponse = NextResponse.next({
    request,
  })

  const { url, anonKey } = getSupabaseConfig();

  const supabase = createServerClient(
    url, anonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    }
  )
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  const pathname = request.nextUrl.pathname;
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));



  if (!user && pathname !== "/login" ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/login";
    // redirectUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(new URL("/login", request.url));
  
  }

  if (user && pathname == "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return supabaseResponse ;
}


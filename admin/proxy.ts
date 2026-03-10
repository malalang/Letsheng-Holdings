// admin/proxy.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Using 'export default' or 'export async function middleware' 
// solves the "missing expected function export" error.
export default async function proxy(request: NextRequest) {
  console.log("Checking Proxy Auth...")
  
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // Update request cookies for the current execution context
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          
          // Re-instantiate the response to include the new cookie headers
          supabaseResponse = NextResponse.next({
            request,
          })
          
          // Set cookies on the response to be sent to the browser
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Use getUser() for secure, server-side validation
  const { data: { user } } = await supabase.auth.getUser()
  console.log("Current User:", user?.email ?? "Guest")

  const url = request.nextUrl.clone()

  // 1. If user is logged in and trying to access /login, send them to dashboard
  if (user && url.pathname === '/login') {
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  // 2. If user is NOT logged in and trying to access protected routes
  if (!user && url.pathname.startsWith('/dashboard')) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

// Ensure the matcher covers your protected routes
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
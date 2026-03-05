import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { /* same as server.ts logic */ } }
  )

  const { data: { user } } = await supabase.auth.getUser()

  // Redirect to login if no session
  if (!user && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Mandatory Role Check for Admin App
  if (user && user.app_metadata.role !== 'admin') {
    return NextResponse.redirect(new URL('https://client-domain.com', request.url))
  }

  return response
}

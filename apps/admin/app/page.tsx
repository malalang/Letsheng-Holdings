import { createSupabaseServerClient } from '@repo/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminHomePage() {
  const supabase = await createSupabaseServerClient()

  const { data } = await supabase.auth.getUser()
  console.log("home page", data.user)
  if (data.user) {
    redirect('/dashboard')
  } else {
    redirect('/login')
  }
}

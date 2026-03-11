import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminHomePage() {
  const supabase = await createClient()

  const { data } = await supabase.auth.getUser()
  console.log("home page", data.user)
  if (data.user) {
    redirect('/dashboard')
  } else {
    redirect('/login')
  }
}

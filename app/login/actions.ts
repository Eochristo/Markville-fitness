'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await createClient()

  // Sign in the user
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (authError || !authData.user) {
    console.error('Login Error:', authError)
    redirect('/login?error=' + encodeURIComponent(authError?.message || 'Failed to sign in'))
  }

  // Check the user's role in the public.users table
  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('role')
    .eq('id', authData.user.id)
    .single()

  if (userError || !userData) {
    console.error('Role Fetch Error:', userError)
    redirect('/login?error=' + encodeURIComponent('Failed to fetch user profile'))
  }

  // Redirect based on role
  if (userData.role === 'ADMIN') {
    redirect('/admin')
  } else {
    redirect('/dashboard')
  }
}

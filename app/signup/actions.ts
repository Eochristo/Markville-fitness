'use server'

import { createClient } from '@/lib/supabase/server'

export async function signupUser(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const phone = formData.get('phone') as string
  const dob = formData.get('dob') as string
  const gymExperience = formData.get('gymExperience') as string
  const planName = formData.get('planName') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  const supabase = await createClient()

  // Sign up the user and store extra info in user metadata
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        phone,
        dob,
        gym_experience: gymExperience,
        plan_name: planName
      }
    }
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

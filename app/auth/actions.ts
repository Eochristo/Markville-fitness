'use server'

import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const loginSchema = z.object({
  identifier: z.string().min(1, 'Email or phone number is required'),
  password: z.string().min(1, 'Password is required'),
})

const signupSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required (min 10 characters)'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export async function loginAction(formData: FormData) {
  const identifier = formData.get('identifier') as string
  const password = formData.get('password') as string

  const result = loginSchema.safeParse({ identifier, password })
  if (!result.success) {
    return { error: result.error.errors[0].message }
  }

  const supabase = await createClient()
  let loginEmail = identifier

  // Check if identifier is a phone number (mostly digits and some symbols)
  const isPhoneNumber = /^[\d\+\-\(\)\s]+$/.test(identifier) && identifier.replace(/\D/g, '').length >= 10

  if (isPhoneNumber) {
    // Look up email by phone using Service Role to bypass RLS
    const adminSupabase = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    
    const { data: userData, error: userError } = await adminSupabase
      .from('users')
      .select('email')
      .eq('phone', identifier)
      .single()

    if (userError || !userData?.email) {
      return { error: 'No account found with this phone number.' }
    }
    
    loginEmail = userData.email
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginEmail,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true }
}

export async function signupAction(formData: FormData) {
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const password = formData.get('password') as string

  const result = signupSchema.safeParse({ firstName, lastName, email, phone, password })
  if (!result.success) {
    return { error: result.error.errors[0].message }
  }

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        phone,
      }
    }
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true }
}

export async function logoutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  return { success: true }
}

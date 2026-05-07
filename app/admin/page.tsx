import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('users')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'ADMIN') {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="p-6 bg-card rounded-lg border border-border">
          <p className="text-card-foreground">
            Welcome to the secure admin panel, <strong>{user.email}</strong>!
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            This page is strictly protected. Only users with the ADMIN role can view this.
          </p>
        </div>
      </div>
    </div>
  )
}

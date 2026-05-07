import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Member Dashboard</h1>
        <div className="p-6 bg-card rounded-lg border border-border">
          <p className="text-card-foreground">
            Welcome back, <strong>{user.email}</strong>!
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            This is the standard dashboard for clients.
          </p>
        </div>
      </div>
    </div>
  )
}

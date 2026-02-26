import { Suspense } from "react"
import { SignupForm } from "@/components/signup/signup-form"

export const metadata = {
  title: "Create Account - Markville Fitness",
  description:
    "Sign up for a Markville Fitness membership. Choose from Starter, Pro, or Elite plans.",
}

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <SignupForm />
    </Suspense>
  )
}

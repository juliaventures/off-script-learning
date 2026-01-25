"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Loader2 } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"

const steps = [
  { id: 1, name: "Account" },
  { id: 2, name: "Profile" },
  { id: 3, name: "Goals" },
]

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    studentType: "",
    name: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    goals: "",
    level: "",
    schedule: "",
  })

  const handleGoogleSignup = async () => {
    setLoading(true)
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/signup`,
      },
    })

    if (error) {
      console.error("Signup error:", error)
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 items-center justify-center bg-gradient-to-b from-cream to-white px-4 py-20">
        <div className="w-full max-w-lg">
          {/* Progress Steps */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                      currentStep >= step.id
                        ? "bg-navy text-cream"
                        : "bg-cream-dark text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`ml-2 text-sm ${
                      currentStep >= step.id ? "text-navy" : "text-muted-foreground"
                    }`}
                  >
                    {step.name}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`mx-4 h-0.5 w-12 ${
                        currentStep > step.id ? "bg-navy" : "bg-cream-dark"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader className="text-center">
              <Badge variant="gold" className="mx-auto mb-4 w-fit">
                Free Consultation
              </Badge>
              <CardTitle className="heading-serif text-2xl">
                {currentStep === 1 && "Get Started"}
                {currentStep === 2 && "Tell Us About Yourself"}
                {currentStep === 3 && "Your Goals"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Create your account to begin"}
                {currentStep === 2 && "Help us personalize your experience"}
                {currentStep === 3 && "What do you want to achieve?"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Account Creation */}
              {currentStep === 1 && (
                <>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={handleGoogleSignup}
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    )}
                    Continue with Google
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-muted-foreground">
                        After signing in
                      </span>
                    </div>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    You'll complete a brief intake form to help us understand your goals
                    and preferences before booking your free consultation.
                  </p>
                </>
              )}

              {/* Step 2: Profile */}
              {currentStep === 2 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-navy">
                        I am signing up for:
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant={formData.studentType === "adult" ? "default" : "outline"}
                          onClick={() => handleInputChange("studentType", "adult")}
                          className="h-auto py-4"
                        >
                          <div className="text-center">
                            <div className="text-lg">👔</div>
                            <div className="mt-1">Myself (Adult)</div>
                          </div>
                        </Button>
                        <Button
                          variant={formData.studentType === "kid" ? "default" : "outline"}
                          onClick={() => handleInputChange("studentType", "kid")}
                          className="h-auto py-4"
                        >
                          <div className="text-center">
                            <div className="text-lg">👶</div>
                            <div className="mt-1">My Child</div>
                          </div>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-navy">
                        Your Name
                      </label>
                      <Input
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>

                    {formData.studentType === "kid" && (
                      <>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-navy">
                            Child's Name
                          </label>
                          <Input
                            placeholder="Enter your child's name"
                            value={formData.childName}
                            onChange={(e) => handleInputChange("childName", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-navy">
                            Child's Age
                          </label>
                          <Input
                            placeholder="e.g., 8"
                            value={formData.childAge}
                            onChange={(e) => handleInputChange("childAge", e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <label className="mb-2 block text-sm font-medium text-navy">
                        Phone Number (optional)
                      </label>
                      <Input
                        placeholder="For consultation reminders"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={prevStep} className="flex-1">
                      Back
                    </Button>
                    <Button
                      variant="gold"
                      onClick={nextStep}
                      className="flex-1"
                      disabled={!formData.studentType || !formData.name}
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}

              {/* Step 3: Goals */}
              {currentStep === 3 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-navy">
                        Current English Level
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Beginner", "Intermediate", "Advanced"].map((level) => (
                          <Button
                            key={level}
                            variant={formData.level === level ? "default" : "outline"}
                            onClick={() => handleInputChange("level", level)}
                            size="sm"
                          >
                            {level}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-navy">
                        Preferred Schedule
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Morning", "Lunch", "Evening", "Weekends"].map((time) => (
                          <Button
                            key={time}
                            variant={formData.schedule === time ? "default" : "outline"}
                            onClick={() => handleInputChange("schedule", time)}
                            size="sm"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-navy">
                        What do you want to achieve?
                      </label>
                      <textarea
                        className="flex min-h-[100px] w-full rounded-lg border border-border bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                        placeholder="Tell us about your goals..."
                        value={formData.goals}
                        onChange={(e) => handleInputChange("goals", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={prevStep} className="flex-1">
                      Back
                    </Button>
                    <Button variant="gold" className="flex-1">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-gold hover:underline">
                  Log in
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}

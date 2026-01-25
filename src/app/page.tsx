import Link from "next/link"
import { ArrowRight, Clock, GraduationCap, Shield, Sparkles, Users } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const valueProps = [
  {
    icon: Clock,
    title: "Credits Never Expire",
    description: "Life happens. Your credits wait. No pressure, no deadlines.",
  },
  {
    icon: GraduationCap,
    title: "UC Berkeley Educated",
    description: "World-class instruction from a tutor who understands your journey.",
  },
  {
    icon: Users,
    title: "Private Club Experience",
    description: "Intimate sessions, not mass lectures. Your progress is personal.",
  },
  {
    icon: Shield,
    title: "No Recording Policy",
    description: "Speak freely. Make mistakes. Your sessions are a safe space.",
  },
]

const testimonials = [
  {
    quote: "Finally, English lessons that don't feel like school. I actually look forward to my sessions now.",
    name: "Jiyeon K.",
    role: "Marketing Director",
  },
  {
    quote: "My daughter went from dreading English to requesting extra sessions. That says everything.",
    name: "Sunghee P.",
    role: "Parent",
  },
  {
    quote: "The personalized approach made all the difference for my business presentations.",
    name: "Minho L.",
    role: "Tech Entrepreneur",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-navy/5 blur-3xl" />

          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="gold" className="mb-6">
              Premium English Tutoring
            </Badge>

            <h1 className="heading-display text-4xl text-navy sm:text-5xl lg:text-6xl">
              Master English.
              <br />
              <span className="text-gradient-gold">Off Script.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Real English. No scripts. A private club for discerning learners who value
              luxury, personal attention, and graceful progress.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="gold" size="xl" asChild>
                <Link href="/signup">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">View Programs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="border-y border-border bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-serif text-2xl text-navy sm:text-3xl">
              You've memorized 10,000 words.
              <br />
              But conversation still feels impossible.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Traditional English education teaches you to pass tests, not to connect with people.
              Off Script is different. We focus on real conversations, real confidence, real results.
            </p>
          </div>
        </section>

        {/* Value Props */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="heading-serif text-3xl text-navy sm:text-4xl">
                Why Off Script?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A premium experience designed for discerning learners
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {valueProps.map((prop) => (
                <Card key={prop.title} className="border-none bg-cream-dark/50">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-navy">
                      <prop.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-navy">
                      {prop.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {prop.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="bg-navy px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="heading-serif text-3xl text-cream sm:text-4xl">
                Choose Your Path
              </h2>
              <p className="mt-4 text-lg text-cream/70">
                Tailored programs for every stage of your English journey
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Adults Card */}
              <Card className="group overflow-hidden border-none bg-white/10 backdrop-blur transition-all hover:bg-white/15">
                <CardContent className="p-8">
                  <Badge variant="gold" className="mb-4">
                    Adults
                  </Badge>
                  <h3 className="heading-serif text-2xl text-cream">
                    English for Ambitious Professionals
                  </h3>
                  <p className="mt-4 text-cream/70">
                    Elevate your career with confident English. From presentations to negotiations,
                    master the language of global success.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-cream/80">
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" />
                      Business English & presentations
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" />
                      Pronunciation refinement
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" />
                      Natural conversation flow
                    </li>
                  </ul>
                  <Button variant="gold" className="mt-8 w-full" asChild>
                    <Link href="/adults">
                      Explore Adult Programs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Kids Card */}
              <Card className="group overflow-hidden border-none bg-white/10 backdrop-blur transition-all hover:bg-white/15">
                <CardContent className="p-8">
                  <Badge variant="gold" className="mb-4">
                    Kids
                  </Badge>
                  <h3 className="heading-serif text-2xl text-cream">
                    Not Another Hakwon
                  </h3>
                  <p className="mt-4 text-cream/70">
                    A club where English is play. We nurture genuine love for the language,
                    not just test scores.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-cream/80">
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" />
                      Play-based learning
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" />
                      Parents welcome to monitor
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" />
                      Age-appropriate progression
                    </li>
                  </ul>
                  <Button variant="gold" className="mt-8 w-full" asChild>
                    <Link href="/kids">
                      Explore Kids Programs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="heading-serif text-3xl text-navy sm:text-4xl">
                What Our Students Say
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none bg-cream-dark/50">
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed text-navy">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-gold" />
                      <div>
                        <p className="font-semibold text-navy">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-cream-dark px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-serif text-3xl text-navy sm:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a free 15-minute consultation and discover how Off Script can transform
              your English.
            </p>
            <Button variant="gold" size="xl" className="mt-8" asChild>
              <Link href="/signup">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

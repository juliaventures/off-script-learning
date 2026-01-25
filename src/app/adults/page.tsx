import Link from "next/link"
import { ArrowRight, Briefcase, Clock, MessageCircle, Mic, Sparkles, Target, Users } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Briefcase,
    title: "Business English",
    description: "Master presentations, negotiations, and professional communication with confidence.",
  },
  {
    icon: Mic,
    title: "Pronunciation Refinement",
    description: "Reduce accent barriers and speak with clarity that commands attention.",
  },
  {
    icon: MessageCircle,
    title: "Natural Conversation",
    description: "Move beyond textbook phrases to authentic, flowing dialogue.",
  },
  {
    icon: Target,
    title: "Goal-Focused Sessions",
    description: "Every session is tailored to your specific professional and personal goals.",
  },
]

const sessionTypes = [
  {
    duration: "30",
    name: "Intensive Session",
    description: "Perfect for focused practice on specific skills or quick check-ins.",
    price: "$40",
  },
  {
    duration: "60",
    name: "Deep Dive Session",
    description: "Extended time for comprehensive conversation practice and feedback.",
    price: "$75",
  },
]

const memberships = [
  {
    name: "Signature",
    price: "$199",
    sessions: "4 sessions/month",
    description: "Perfect for maintaining steady progress",
    features: ["30-min sessions", "Flexible scheduling", "Credits never expire"],
    highlighted: false,
  },
  {
    name: "Atelier",
    price: "$349",
    sessions: "8 sessions/month",
    description: "For serious learners accelerating their growth",
    features: ["30-min sessions", "Priority booking", "2 session rollover", "Progress reports"],
    highlighted: true,
  },
  {
    name: "Private Circle",
    price: "$549",
    sessions: "12 sessions/month",
    description: "The ultimate immersive experience",
    features: ["30-min sessions", "VIP scheduling", "4 session rollover", "Quarterly reviews", "Event priority"],
    highlighted: false,
  },
]

export default function AdultsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="gold" className="mb-6">
              Adult Programs
            </Badge>

            <h1 className="heading-display text-4xl text-navy sm:text-5xl">
              English for
              <br />
              <span className="text-gradient-gold">Ambitious Professionals</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Elevate your career with confident, natural English. From boardroom presentations
              to casual networking, master the language of global success.
            </p>

            <Button variant="gold" size="xl" className="mt-10" asChild>
              <Link href="/signup">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Who It's For */}
        <section className="border-y border-border bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="heading-serif text-center text-2xl text-navy sm:text-3xl">
              Perfect For
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Business professionals",
                "Graduate students",
                "Entrepreneurs",
                "Career changers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-cream-dark/50 p-4">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span className="text-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="heading-serif text-3xl text-navy">What You'll Learn</h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive English training for professional success
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="border-none bg-cream-dark/50">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-navy">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-navy">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Session Types */}
        <section className="bg-cream-dark px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="heading-serif text-3xl text-navy">Session Types</h2>
              <p className="mt-4 text-muted-foreground">
                Choose the format that fits your schedule
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {sessionTypes.map((session) => (
                <Card key={session.name} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-cream">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-navy">{session.duration} min</p>
                        <p className="text-sm text-muted-foreground">{session.name}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">{session.description}</p>
                    <p className="mt-4 text-2xl font-bold text-navy">{session.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="heading-serif text-3xl text-navy">Membership Tiers</h2>
              <p className="mt-4 text-muted-foreground">
                Commit to your growth with a monthly membership
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {memberships.map((tier) => (
                <Card
                  key={tier.name}
                  className={tier.highlighted ? "border-2 border-gold bg-white shadow-gold" : "bg-white"}
                >
                  <CardHeader>
                    {tier.highlighted && (
                      <Badge variant="gold" className="mb-2 w-fit">
                        Most Popular
                      </Badge>
                    )}
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-navy">{tier.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="mb-4 font-medium text-navy">{tier.sessions}</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Sparkles className="h-4 w-4 text-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={tier.highlighted ? "gold" : "outline"}
                      className="mt-6 w-full"
                      asChild
                    >
                      <Link href="/signup">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Or purchase individual sessions à la carte.{" "}
              <Link href="/pricing" className="text-gold hover:underline">
                View all pricing →
              </Link>
            </p>
          </div>
        </section>

        {/* Group Sessions */}
        <section className="bg-navy px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Users className="mx-auto h-12 w-12 text-gold" />
            <h2 className="mt-4 heading-serif text-3xl text-cream">Group Sessions</h2>
            <p className="mt-4 text-lg text-cream/80">
              Join our community events for additional practice: Book Club, Office Hours,
              Watch Party, Speed Talking, and more. Members attend free!
            </p>
            <Button variant="gold" className="mt-8" asChild>
              <Link href="/community">
                Explore Community Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-serif text-3xl text-navy">Ready to Elevate Your English?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a free 15-minute consultation and discover the Off Script difference.
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

import Link from "next/link"
import { ArrowRight, BookOpen, Eye, Gamepad2, Heart, MessageCircle, Palette, Shield, Sparkles, Star, Users } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activities = [
  { icon: Gamepad2, name: "Play", description: "Games and interactive activities" },
  { icon: Palette, name: "Create", description: "Art projects and storytelling" },
  { icon: BookOpen, name: "Read", description: "Stories and picture books" },
  { icon: MessageCircle, name: "Chat", description: "Natural conversation practice" },
]

const ageTiers = [
  {
    name: "Sprouts",
    ages: "5-7",
    description: "Foundation building through play and songs",
  },
  {
    name: "Explorers",
    ages: "8-10",
    description: "Expanding vocabulary through stories and games",
  },
  {
    name: "Navigators",
    ages: "11-13",
    description: "Building confidence in conversation",
  },
  {
    name: "Pathfinders",
    ages: "14-17",
    description: "Advanced discussion and critical thinking",
  },
]

const memberships = [
  {
    name: "Explorer",
    price: "$149",
    sessions: "4 sessions/month",
    description: "A steady introduction to English",
    features: ["30-min sessions", "Age-appropriate activities", "Progress notes for parents"],
    highlighted: false,
  },
  {
    name: "Builder",
    price: "$249",
    sessions: "6 sessions/month",
    description: "Accelerated growth and confidence",
    features: ["30-min sessions", "Priority booking", "Bi-weekly progress updates", "Free group events"],
    highlighted: true,
  },
  {
    name: "Creator",
    price: "$399",
    sessions: "8 sessions/month",
    description: "The immersive club experience",
    features: ["30-min sessions", "VIP scheduling", "Weekly progress updates", "All group events", "Custom curriculum"],
    highlighted: false,
  },
]

const trustSignals = [
  {
    icon: Eye,
    title: "Parents Welcome to Monitor",
    description: "Join any session until you're comfortable. Your presence is always welcome.",
  },
  {
    icon: Shield,
    title: "No Recording Policy",
    description: "Sessions are never recorded, creating a safe space for your child to learn freely.",
  },
  {
    icon: Heart,
    title: "UC Berkeley Educated",
    description: "World-class education background with years of experience teaching Korean children.",
  },
]

export default function KidsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="gold" className="mb-6">
              Kids Programs
            </Badge>

            <h1 className="heading-display text-4xl text-navy sm:text-5xl">
              Not Another
              <br />
              <span className="text-gradient-gold">Hakwon</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A club where English is play. We nurture genuine love for the language,
              not just test scores. Your child will actually want to practice.
            </p>

            <Button variant="gold" size="xl" className="mt-10" asChild>
              <Link href="/signup">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Trust Signals for Parents */}
        <section className="border-y border-border bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {trustSignals.map((signal) => (
                <div key={signal.title} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-dark">
                      <signal.icon className="h-6 w-6 text-navy" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{signal.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{signal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-serif text-3xl text-navy">Our Philosophy</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Traditional English academies focus on drilling grammar and memorizing vocabulary.
              We believe children learn best when they're having fun, when they're engaged,
              when they forget they're even studying.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Off Script creates an environment where English becomes natural—through games,
              stories, art, and genuine conversation. No homework pressure. No test anxiety.
              Just real learning.
            </p>
          </div>
        </section>

        {/* Activities */}
        <section className="bg-cream-dark px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="heading-serif text-3xl text-navy">How We Learn</h2>
              <p className="mt-4 text-muted-foreground">
                Activities designed to make English feel like adventure
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {activities.map((activity) => (
                <Card key={activity.name} className="bg-white text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold text-navy">
                      <activity.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy">{activity.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Age Tiers */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="heading-serif text-3xl text-navy">Age-Appropriate Progression</h2>
              <p className="mt-4 text-muted-foreground">
                Curriculum designed for each developmental stage
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ageTiers.map((tier) => (
                <Card key={tier.name} className="border-none bg-cream-dark/50">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      Ages {tier.ages}
                    </Badge>
                    <h3 className="font-serif text-xl font-semibold text-navy">{tier.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="bg-navy px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="heading-serif text-3xl text-cream">Club Memberships</h2>
              <p className="mt-4 text-cream/70">
                Join the club for consistent progress and community
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
                          <Star className="h-4 w-4 text-gold" />
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

            <p className="mt-8 text-center text-sm text-cream/70">
              Or purchase individual sessions.{" "}
              <Link href="/pricing" className="text-gold hover:underline">
                View all pricing →
              </Link>
            </p>
          </div>
        </section>

        {/* Group Sessions */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Users className="mx-auto h-12 w-12 text-navy" />
            <h2 className="mt-4 heading-serif text-3xl text-navy">Kids Group Events</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Game Hour, Show & Tell, Build Together, and more! Fun group activities
              where kids practice English with peers. Members attend free!
            </p>
            <Button variant="gold" className="mt-8" asChild>
              <Link href="/community">
                Explore Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA for Parents */}
        <section className="bg-cream-dark px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-serif text-3xl text-navy">
              Give Your Child the Gift of Confident English
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a free consultation and see if Off Script is right for your family.
              You're welcome to observe—we have nothing to hide.
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

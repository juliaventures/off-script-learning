import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Coffee, Film, Gamepad2, MessageCircle, Mic, Sparkles, Users, Zap } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const eventTypes = [
  {
    icon: BookOpen,
    name: "Book Club",
    audience: "Adults",
    description: "Discuss a book in English. Perfect for building vocabulary and expressing complex ideas.",
    price: "Free for members / $15 for non-members",
  },
  {
    icon: Coffee,
    name: "Office Hours",
    audience: "All",
    description: "Drop in with your English questions. Get help with pronunciation, grammar, or conversation practice.",
    price: "Free for members / $10 for non-members",
  },
  {
    icon: Film,
    name: "Watch Party",
    audience: "Adults",
    description: "Watch a film or show together and discuss. Learn natural expressions and cultural context.",
    price: "Free for members / $15 for non-members",
  },
  {
    icon: Zap,
    name: "Speed Talking",
    audience: "Adults",
    description: "Rapid-fire conversation practice. Meet new people and sharpen your spontaneous speaking.",
    price: "Free for members / $15 for non-members",
  },
  {
    icon: Gamepad2,
    name: "Game Hour",
    audience: "Kids",
    description: "Fun games in English. Kids practice without even realizing they're learning.",
    price: "Free for members / $12 for non-members",
  },
  {
    icon: MessageCircle,
    name: "Show & Tell",
    audience: "Kids",
    description: "Kids share something special and practice describing and presenting in English.",
    price: "Free for members / $12 for non-members",
  },
  {
    icon: Users,
    name: "Build Together",
    audience: "Kids",
    description: "Collaborative projects where kids work together, communicating in English.",
    price: "Free for members / $12 for non-members",
  },
  {
    icon: Mic,
    name: "News Club",
    audience: "Adults",
    description: "Discuss current events and practice expressing opinions on complex topics.",
    price: "Free for members / $15 for non-members",
  },
]

const upcomingEvents = [
  {
    title: "Book Club: The Great Gatsby",
    date: "Saturday, Feb 8",
    time: "10:00 AM PST",
    audience: "Adults",
    spotsLeft: 3,
  },
  {
    title: "Game Hour: Word Games",
    date: "Sunday, Feb 9",
    time: "9:00 AM PST",
    audience: "Kids",
    spotsLeft: 2,
  },
  {
    title: "Speed Talking",
    date: "Tuesday, Feb 11",
    time: "7:00 PM PST",
    audience: "Adults",
    spotsLeft: 4,
  },
  {
    title: "Office Hours",
    date: "Thursday, Feb 13",
    time: "6:00 PM PST",
    audience: "All",
    spotsLeft: 5,
  },
]

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-cream to-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="gold" className="mb-6">
              Community Events
            </Badge>

            <h1 className="heading-display text-4xl text-navy sm:text-5xl">
              Practice Together,
              <br />
              <span className="text-gradient-gold">Grow Together</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Join our community events for additional practice in a fun, social setting.
              Members attend free—non-members welcome too!
            </p>

            {/* Member Benefit */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold/10 px-6 py-3">
              <Sparkles className="h-5 w-5 text-gold" />
              <span className="font-semibold text-navy">Members Get Priority Registration</span>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="border-y border-border bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="heading-serif text-2xl text-navy">Upcoming Events</h2>
                <p className="mt-1 text-muted-foreground">Reserve your spot today</p>
              </div>
              <Calendar className="h-8 w-8 text-muted-foreground" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-none bg-cream-dark/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {event.audience}
                        </Badge>
                        <h3 className="font-semibold text-navy">{event.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {event.date} • {event.time}
                        </p>
                      </div>
                      <Badge variant="secondary">{event.spotsLeft} spots left</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4" asChild>
                      <Link href="/login">Register</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              <Link href="/login" className="text-gold hover:underline">
                Log in
              </Link>{" "}
              to see more events and register
            </p>
          </div>
        </section>

        {/* Event Types */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="heading-serif text-3xl text-navy">Event Types</h2>
              <p className="mt-4 text-muted-foreground">
                Something for everyone—adults and kids
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {eventTypes.map((event) => (
                <Card key={event.name} className="border-none bg-cream-dark/50">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-navy">
                      <event.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="mb-2">
                      {event.audience}
                    </Badge>
                    <h3 className="font-semibold text-navy">{event.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                    <p className="mt-3 text-xs font-medium text-gold">{event.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Member Benefits */}
        <section className="bg-navy px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-serif text-3xl text-cream">Member Benefits</h2>
            <p className="mt-4 text-lg text-cream/80">
              Club members enjoy exclusive perks for community events
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card className="border-none bg-white/10">
                <CardContent className="p-6 text-center">
                  <Sparkles className="mx-auto h-8 w-8 text-gold" />
                  <h3 className="mt-4 font-semibold text-cream">Free Attendance</h3>
                  <p className="mt-2 text-sm text-cream/70">
                    All community events are free for active members
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-white/10">
                <CardContent className="p-6 text-center">
                  <Calendar className="mx-auto h-8 w-8 text-gold" />
                  <h3 className="mt-4 font-semibold text-cream">Priority Registration</h3>
                  <p className="mt-2 text-sm text-cream/70">
                    Get first access to sign up before non-members
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-white/10">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto h-8 w-8 text-gold" />
                  <h3 className="mt-4 font-semibold text-cream">Exclusive Events</h3>
                  <p className="mt-2 text-sm text-cream/70">
                    Access member-only events and activities
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button variant="gold" size="lg" className="mt-12" asChild>
              <Link href="/pricing">
                View Membership Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* No-Show Policy */}
        <section className="bg-cream-dark px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Attendance Policy:</strong> We keep groups small for quality interaction.
              Please cancel at least 24 hours in advance if you can't attend.
              Repeated no-shows may result in temporary suspension from free events.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-serif text-3xl text-navy">Join Our Community</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with a free consultation and discover the Off Script experience.
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

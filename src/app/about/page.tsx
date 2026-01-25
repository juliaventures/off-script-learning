import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Heart, MapPin, Shield } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const credentials = [
  {
    icon: GraduationCap,
    title: "UC Berkeley Graduate",
    description: "Educated at one of the world's top public universities",
  },
  {
    icon: MapPin,
    title: "Taught in Korea",
    description: "Years of experience teaching Korean speakers",
  },
  {
    icon: Heart,
    title: "Based in Santa Monica",
    description: "Currently serving students worldwide from California",
  },
]

const favorites = [
  { category: "Books", items: "Coraline, Mary Poppins, The Cat in the Hat" },
  { category: "Films", items: "My Neighbor Totoro, Studio Ghibli classics" },
  { category: "Teaching", items: "Real conversation, cultural exchange, genuine connection" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-cream to-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Badge variant="gold" className="mb-6">
              Meet Your Tutor
            </Badge>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 className="heading-display text-4xl text-navy sm:text-5xl">
                  Hi, I'm Julia Yoo.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Your guide to confident, natural English. I believe that language learning
                  should feel like a conversation with a friend, not a test to pass.
                </p>
                <Button variant="gold" size="lg" className="mt-8" asChild>
                  <Link href="/signup">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Placeholder for tutor photo */}
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-cream-dark to-cream">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto h-32 w-32 rounded-full bg-gradient-gold" />
                      <p className="mt-4 text-sm text-muted-foreground">Tutor Photo</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="border-y border-border bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {credentials.map((cred) => (
                <div key={cred.title} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream-dark">
                    <cred.icon className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="font-semibold text-navy">{cred.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-serif text-3xl text-navy">My Story</h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I graduated from UC Berkeley with a passion for languages and teaching.
                After graduation, I moved to Korea where I spent years teaching English
                to students of all ages—from curious children to ambitious professionals.
              </p>
              <p>
                Living in Korea transformed my understanding of what language learners
                truly need. I saw brilliant people struggle with English not because they
                lacked intelligence or effort, but because traditional methods failed them.
              </p>
              <p>
                Now based in Santa Monica, California, I work with Korean speakers worldwide
                who are ready for a different approach. One that values real conversation
                over rote memorization, confidence over perfection, and genuine connection
                over test scores.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-navy px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-serif text-3xl text-cream">Teaching Philosophy</h2>
            <p className="mt-6 text-xl leading-relaxed text-cream/80">
              "Real English isn't scripted. It's messy, spontaneous, and beautifully imperfect.
              My goal is to help you feel comfortable in that beautiful mess."
            </p>

            <Separator className="mx-auto my-12 max-w-xs bg-cream/20" />

            <div className="grid gap-6 text-left sm:grid-cols-2">
              <Card className="border-none bg-white/10">
                <CardContent className="p-6">
                  <BookOpen className="mb-4 h-8 w-8 text-gold" />
                  <h3 className="font-semibold text-cream">Conversation First</h3>
                  <p className="mt-2 text-sm text-cream/70">
                    Every session is a real conversation, not a lecture. You'll speak more
                    in one session than in a month of traditional classes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-white/10">
                <CardContent className="p-6">
                  <Shield className="mb-4 h-8 w-8 text-gold" />
                  <h3 className="font-semibold text-cream">Safe Space to Fail</h3>
                  <p className="mt-2 text-sm text-cream/70">
                    No recordings, no judgment. Make mistakes freely—that's how real
                    learning happens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Personal Touches */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-serif text-3xl text-navy">A Few of My Favorites</h2>
            <p className="mt-4 text-muted-foreground">
              Because great teaching is about connection, not just curriculum.
            </p>

            <div className="mt-8 space-y-6">
              {favorites.map((fav) => (
                <div key={fav.category} className="flex gap-4">
                  <div className="w-24 shrink-0 font-semibold text-navy">{fav.category}</div>
                  <div className="text-muted-foreground">{fav.items}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* No Recording Policy */}
        <section className="bg-cream-dark px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto h-12 w-12 text-navy" />
            <h2 className="mt-4 heading-serif text-2xl text-navy">No Recording Policy</h2>
            <p className="mt-4 text-muted-foreground">
              Your sessions are never recorded. This creates a safe space where you can
              speak freely, make mistakes, and truly practice without fear. Your privacy
              and comfort are paramount.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-serif text-3xl text-navy">Ready to Start?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a free 15-minute consultation and let's see if we're a good fit.
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

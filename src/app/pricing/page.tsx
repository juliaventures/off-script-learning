"use client"

import Link from "next/link"
import { ArrowRight, Check, Clock, HelpCircle, Sparkles } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const adultALaCarte = [
  { name: "30-Minute Session", price: "$40", credits: "30 min", description: "Quick, focused practice" },
  { name: "60-Minute Session", price: "$75", credits: "60 min", description: "Deep conversation practice" },
  { name: "4-Pack", price: "$140", credits: "120 min", savings: "Save $20", description: "4 × 30-min sessions" },
  { name: "8-Pack", price: "$250", credits: "240 min", savings: "Save $70", description: "8 × 30-min sessions" },
]

const adultMemberships = [
  {
    name: "Signature",
    price: "$199",
    sessions: "4 sessions/month",
    description: "Consistent progress",
    features: ["4 × 30-min sessions", "Flexible scheduling", "Credits never expire", "Priority booking"],
    highlighted: false,
  },
  {
    name: "Atelier",
    price: "$349",
    sessions: "8 sessions/month",
    description: "Accelerated growth",
    features: ["8 × 30-min sessions", "Priority booking", "2 session rollover", "Quarterly progress reports", "Free community events"],
    highlighted: true,
  },
  {
    name: "Private Circle",
    price: "$549",
    sessions: "12 sessions/month",
    description: "The ultimate experience",
    features: ["12 × 30-min sessions", "VIP scheduling", "4 session rollover", "Monthly progress reviews", "Event priority access", "Custom curriculum"],
    highlighted: false,
  },
]

const kidALaCarte = [
  { name: "30-Minute Session", price: "$35", credits: "30 min", description: "Single session" },
  { name: "4-Pack", price: "$120", credits: "120 min", savings: "Save $20", description: "4 × 30-min sessions" },
  { name: "8-Pack", price: "$220", credits: "240 min", savings: "Save $60", description: "8 × 30-min sessions" },
]

const kidMemberships = [
  {
    name: "Explorer",
    price: "$149",
    sessions: "4 sessions/month",
    description: "Introduction to English",
    features: ["4 × 30-min sessions", "Age-appropriate curriculum", "Progress notes for parents", "Flexible scheduling"],
    highlighted: false,
  },
  {
    name: "Builder",
    price: "$249",
    sessions: "6 sessions/month",
    description: "Building confidence",
    features: ["6 × 30-min sessions", "Priority booking", "Bi-weekly progress updates", "Free group events", "Custom learning path"],
    highlighted: true,
  },
  {
    name: "Creator",
    price: "$399",
    sessions: "8 sessions/month",
    description: "The full club experience",
    features: ["8 × 30-min sessions", "VIP scheduling", "Weekly progress updates", "All group events", "Custom curriculum", "Parent consultations"],
    highlighted: false,
  },
]

const faqs = [
  {
    question: "Do credits expire?",
    answer: "No! Your credits never expire. Life happens, and we understand. Use your credits whenever you're ready.",
  },
  {
    question: "Can I cancel my membership?",
    answer: "Yes, you can cancel anytime. Unused session credits for the current month remain available. No long-term contracts.",
  },
  {
    question: "What if I need to reschedule?",
    answer: "Reschedule with 24 hours notice at no charge. Late cancellations may forfeit the session credit.",
  },
  {
    question: "How do I book sessions?",
    answer: "After purchase, you'll have access to our booking system where you can see available times and schedule at your convenience.",
  },
  {
    question: "Can parents observe kids' sessions?",
    answer: "Absolutely! Parents are always welcome to join and observe. We believe in complete transparency.",
  },
  {
    question: "What's the difference between packs and memberships?",
    answer: "Packs are one-time purchases with no recurring charges. Memberships offer better value with monthly sessions and exclusive perks like priority booking and progress reports.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-cream to-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="gold" className="mb-6">
              Transparent Pricing
            </Badge>

            <h1 className="heading-display text-4xl text-navy sm:text-5xl">
              Invest in Your
              <br />
              <span className="text-gradient-gold">English Journey</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Premium tutoring with flexible options. No hidden fees, no surprises.
              Credits never expire.
            </p>

            {/* Credits Never Expire Badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold/10 px-6 py-3">
              <Clock className="h-5 w-5 text-gold" />
              <span className="font-semibold text-navy">Credits Never Expire</span>
            </div>
          </div>
        </section>

        {/* Pricing Tabs */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Tabs defaultValue="adults" className="w-full">
              <TabsList className="mx-auto mb-12 grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="adults">Adults</TabsTrigger>
                <TabsTrigger value="kids">Kids</TabsTrigger>
              </TabsList>

              {/* Adults Tab */}
              <TabsContent value="adults">
                {/* A La Carte */}
                <div className="mb-16">
                  <h2 className="heading-serif text-2xl text-navy">À La Carte</h2>
                  <p className="mt-2 text-muted-foreground">
                    Purchase individual sessions or packs—no commitment required
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {adultALaCarte.map((item) => (
                      <Card key={item.name} className="bg-white">
                        <CardContent className="p-6">
                          {item.savings && (
                            <Badge variant="success" className="mb-3">
                              {item.savings}
                            </Badge>
                          )}
                          <h3 className="font-semibold text-navy">{item.name}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                          <p className="mt-4 text-3xl font-bold text-navy">{item.price}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Memberships */}
                <div>
                  <h2 className="heading-serif text-2xl text-navy">Monthly Memberships</h2>
                  <p className="mt-2 text-muted-foreground">
                    Commit to consistent progress with exclusive member benefits
                  </p>

                  <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    {adultMemberships.map((tier) => (
                      <Card
                        key={tier.name}
                        className={tier.highlighted ? "border-2 border-gold shadow-gold" : ""}
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
                                <Check className="h-4 w-4 text-gold" />
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
                </div>
              </TabsContent>

              {/* Kids Tab */}
              <TabsContent value="kids">
                {/* A La Carte */}
                <div className="mb-16">
                  <h2 className="heading-serif text-2xl text-navy">À La Carte</h2>
                  <p className="mt-2 text-muted-foreground">
                    Purchase individual sessions or packs—no commitment required
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {kidALaCarte.map((item) => (
                      <Card key={item.name} className="bg-white">
                        <CardContent className="p-6">
                          {item.savings && (
                            <Badge variant="success" className="mb-3">
                              {item.savings}
                            </Badge>
                          )}
                          <h3 className="font-semibold text-navy">{item.name}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                          <p className="mt-4 text-3xl font-bold text-navy">{item.price}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Memberships */}
                <div>
                  <h2 className="heading-serif text-2xl text-navy">Club Memberships</h2>
                  <p className="mt-2 text-muted-foreground">
                    Join the club for consistent progress and community
                  </p>

                  <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    {kidMemberships.map((tier) => (
                      <Card
                        key={tier.name}
                        className={tier.highlighted ? "border-2 border-gold shadow-gold" : ""}
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
                                <Check className="h-4 w-4 text-gold" />
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
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream-dark px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <HelpCircle className="mx-auto h-10 w-10 text-navy" />
              <h2 className="mt-4 heading-serif text-3xl text-navy">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-navy">{faq.question}</h3>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-serif text-3xl text-navy">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a free 15-minute consultation and find the perfect plan for you.
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

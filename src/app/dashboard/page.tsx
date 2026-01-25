import Link from "next/link"
import { ArrowRight, Calendar, Clock, CreditCard, FileText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="heading-serif text-3xl text-navy">Welcome back!</h1>
        <p className="mt-1 text-muted-foreground">
          Here's an overview of your English journey
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-navy">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Credits</p>
                <p className="text-2xl font-bold text-navy">120 min</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-dark text-navy">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Upcoming</p>
                <p className="text-2xl font-bold text-navy">2 sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-dark text-navy">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold text-navy">4 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-dark text-navy">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Notes</p>
                <p className="text-2xl font-bold text-navy">12 reminders</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Session */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Next Session</CardTitle>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/schedule">View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between rounded-lg bg-cream-dark/50 p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-navy text-cream">
                <span className="text-xs">FEB</span>
                <span className="text-lg font-bold">8</span>
              </div>
              <div>
                <p className="font-semibold text-navy">30-Minute Session</p>
                <p className="text-sm text-muted-foreground">
                  Saturday, Feb 8 • 10:00 AM PST
                </p>
              </div>
            </div>
            <Badge variant="gold">Upcoming</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="group cursor-pointer transition-all hover:shadow-medium">
          <CardContent className="p-6">
            <Link href="/dashboard/schedule" className="block">
              <Calendar className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-semibold text-navy">Book a Session</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Schedule your next lesson
              </p>
              <ArrowRight className="mt-4 h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </CardContent>
        </Card>

        <Card className="group cursor-pointer transition-all hover:shadow-medium">
          <CardContent className="p-6">
            <Link href="/dashboard/credits" className="block">
              <CreditCard className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-semibold text-navy">Buy Credits</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Purchase more session time
              </p>
              <ArrowRight className="mt-4 h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </CardContent>
        </Card>

        <Card className="group cursor-pointer transition-all hover:shadow-medium">
          <CardContent className="p-6">
            <Link href="/dashboard/events" className="block">
              <Sparkles className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-semibold text-navy">Join Events</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Browse community events
              </p>
              <ArrowRight className="mt-4 h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Notes */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Pocket Reminders</CardTitle>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/notes">View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: "Feb 5, 2025",
                phrases: ["Let me think about that", "I see what you mean", "That's a good point"],
              },
              {
                date: "Feb 1, 2025",
                phrases: ["I'd rather...", "It depends on...", "Generally speaking..."],
              },
            ].map((reminder, index) => (
              <div key={index} className="rounded-lg border border-border p-4">
                <p className="text-sm text-muted-foreground">{reminder.date}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {reminder.phrases.map((phrase, i) => (
                    <Badge key={i} variant="secondary">
                      {phrase}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

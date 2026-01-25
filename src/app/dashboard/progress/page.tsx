import { Award, BookOpen, Calendar, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Total Sessions", value: "24", icon: Calendar },
  { label: "Hours Practiced", value: "18", icon: Clock },
  { label: "Phrases Learned", value: "72", icon: BookOpen },
  { label: "Current Streak", value: "4 weeks", icon: TrendingUp },
]

const monthlyProgress = [
  { month: "February", sessions: 4, hours: 2 },
  { month: "January", sessions: 8, hours: 6 },
  { month: "December", sessions: 6, hours: 5 },
  { month: "November", sessions: 6, hours: 5 },
]

const milestones = [
  { name: "First Session", date: "October 15, 2024", achieved: true },
  { name: "10 Sessions", date: "November 20, 2024", achieved: true },
  { name: "20 Sessions", date: "January 10, 2025", achieved: true },
  { name: "50 Sessions", date: null, achieved: false },
  { name: "100 Sessions", date: null, achieved: false },
]

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-serif text-3xl text-navy">Your Progress</h1>
        <p className="mt-1 text-muted-foreground">
          Track your English learning journey
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-navy">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-navy">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Monthly Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyProgress.map((month) => (
              <div
                key={month.month}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div>
                  <p className="font-semibold text-navy">{month.month}</p>
                  <p className="text-sm text-muted-foreground">
                    {month.sessions} sessions • {month.hours} hours
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">{month.sessions} sessions</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-gold" />
            Milestones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.name}
                className={`flex items-center justify-between rounded-lg p-4 ${
                  milestone.achieved
                    ? "bg-gold/10 border border-gold/30"
                    : "bg-cream-dark/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      milestone.achieved
                        ? "bg-gradient-gold text-navy"
                        : "bg-cream-dark text-muted-foreground"
                    }`}
                  >
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className={milestone.achieved ? "font-semibold text-navy" : "text-muted-foreground"}>
                      {milestone.name}
                    </p>
                    {milestone.date && (
                      <p className="text-sm text-muted-foreground">{milestone.date}</p>
                    )}
                  </div>
                </div>
                {milestone.achieved ? (
                  <Badge variant="gold">Achieved</Badge>
                ) : (
                  <Badge variant="outline">In Progress</Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Encouragement */}
      <Card className="bg-gradient-navy text-cream">
        <CardContent className="p-6 text-center">
          <p className="text-lg font-semibold">
            You're making great progress!
          </p>
          <p className="mt-2 text-cream/70">
            Keep up the momentum. Consistency is the key to fluency.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

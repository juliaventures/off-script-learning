import { Calendar, Clock, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const upcomingSessions = [
  {
    id: 1,
    date: "Saturday, Feb 8",
    time: "10:00 AM PST",
    duration: 30,
    status: "scheduled",
    meetLink: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: 2,
    date: "Wednesday, Feb 12",
    time: "6:00 PM PST",
    duration: 30,
    status: "scheduled",
    meetLink: "https://meet.google.com/abc-defg-hij",
  },
]

const pastSessions = [
  {
    id: 3,
    date: "Saturday, Feb 1",
    time: "10:00 AM PST",
    duration: 30,
    status: "completed",
  },
  {
    id: 4,
    date: "Wednesday, Jan 29",
    time: "6:00 PM PST",
    duration: 60,
    status: "completed",
  },
]

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-serif text-3xl text-navy">Schedule</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your upcoming and past sessions
          </p>
        </div>
        <Button variant="gold">
          <Calendar className="mr-2 h-4 w-4" />
          Book Session
        </Button>
      </div>

      {/* Credit Balance */}
      <Card className="bg-gradient-navy text-cream">
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <p className="text-cream/70">Available Credits</p>
            <p className="text-3xl font-bold">120 minutes</p>
          </div>
          <div className="text-right">
            <p className="text-cream/70">Enough for</p>
            <p className="text-xl font-semibold">4 × 30-min sessions</p>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-navy text-cream">
                      <span className="text-xs">
                        {session.date.split(" ")[1].slice(0, 3).toUpperCase()}
                      </span>
                      <span className="text-lg font-bold">
                        {session.date.split(" ")[2]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy">
                        {session.duration}-Minute Session
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {session.date} • {session.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="gold">Upcoming</Badge>
                    <Button variant="outline" size="sm" asChild>
                      <a href={session.meetLink} target="_blank" rel="noopener noreferrer">
                        <Video className="mr-2 h-4 w-4" />
                        Join
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <Clock className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">No upcoming sessions</p>
              <Button variant="gold" className="mt-4">
                Book Your First Session
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Past Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Past Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastSessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between rounded-lg bg-cream-dark/50 p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-cream-dark text-navy">
                    <span className="text-xs">
                      {session.date.split(" ")[1].slice(0, 3).toUpperCase()}
                    </span>
                    <span className="text-lg font-bold">
                      {session.date.split(" ")[2]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">
                      {session.duration}-Minute Session
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {session.date} • {session.time}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">Completed</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

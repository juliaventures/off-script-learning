import { Calendar, Check, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const upcomingEvents = [
  {
    id: 1,
    title: "Book Club: The Great Gatsby",
    date: "Saturday, Feb 8",
    time: "10:00 AM PST",
    type: "book_club",
    audience: "Adults",
    registered: true,
    spotsLeft: 2,
  },
  {
    id: 2,
    title: "Speed Talking",
    date: "Tuesday, Feb 11",
    time: "7:00 PM PST",
    type: "speed_talking",
    audience: "Adults",
    registered: false,
    spotsLeft: 4,
  },
  {
    id: 3,
    title: "Office Hours",
    date: "Thursday, Feb 13",
    time: "6:00 PM PST",
    type: "office_hours",
    audience: "All",
    registered: false,
    spotsLeft: 5,
  },
]

const registeredEvents = [
  {
    id: 1,
    title: "Book Club: The Great Gatsby",
    date: "Saturday, Feb 8",
    time: "10:00 AM PST",
    type: "book_club",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Watch Party: The Office",
    date: "Saturday, Feb 1",
    status: "attended",
  },
  {
    id: 5,
    title: "News Club",
    date: "Thursday, Jan 30",
    status: "attended",
  },
]

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-serif text-3xl text-navy">Community Events</h1>
        <p className="mt-1 text-muted-foreground">
          Join group events to practice with others
        </p>
      </div>

      {/* Your Registered Events */}
      <Card className="bg-gradient-navy text-cream">
        <CardHeader>
          <CardTitle className="text-cream">Your Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          {registeredEvents.length > 0 ? (
            <div className="space-y-3">
              {registeredEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between rounded-lg bg-white/10 p-4"
                >
                  <div>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-sm text-cream/70">
                      {event.date} • {event.time}
                    </p>
                  </div>
                  <Badge variant="gold">Registered</Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-cream/70">You haven't registered for any events yet</p>
          )}
        </CardContent>
      </Card>

      {/* Browse Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-cream-dark text-navy">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-navy">{event.title}</p>
                      <Badge variant="outline" className="text-xs">
                        {event.audience}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {event.date} • {event.time}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {event.spotsLeft} spots left
                    </p>
                  </div>
                </div>
                {event.registered ? (
                  <Badge variant="gold">
                    <Check className="mr-1 h-3 w-3" />
                    Registered
                  </Badge>
                ) : (
                  <Button variant="outline" size="sm">
                    Register
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Past Events */}
      <Card>
        <CardHeader>
          <CardTitle>Past Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between rounded-lg bg-cream-dark/50 p-4"
              >
                <div>
                  <p className="font-semibold text-navy">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <Badge variant="secondary">
                  <Check className="mr-1 h-3 w-3" />
                  Attended
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Member Benefits Note */}
      <Card className="border-gold/30 bg-gold/5">
        <CardContent className="flex items-center gap-4 p-6">
          <Users className="h-8 w-8 text-gold" />
          <div>
            <p className="font-semibold text-navy">Member Benefit</p>
            <p className="text-sm text-muted-foreground">
              As a member, you attend all community events for free and get priority registration!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

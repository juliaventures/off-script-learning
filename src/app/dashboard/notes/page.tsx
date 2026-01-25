import { FileText, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const pocketReminders = [
  {
    id: 1,
    date: "February 5, 2025",
    sessionType: "30-min",
    phrases: ["Let me think about that", "I see what you mean", "That's a good point"],
    challenge: "Use 'Let me think about that' at least once this week when someone asks you a question.",
    culturalTidbit: "Americans often use filler phrases like 'um' or 'you know' - this is normal in casual conversation!",
  },
  {
    id: 2,
    date: "February 1, 2025",
    sessionType: "30-min",
    phrases: ["I'd rather...", "It depends on...", "Generally speaking..."],
    challenge: "Practice expressing preferences using 'I'd rather' in at least 3 situations.",
    culturalTidbit: "In American business culture, it's common to start with small talk before getting to the main topic.",
  },
  {
    id: 3,
    date: "January 29, 2025",
    sessionType: "60-min",
    phrases: ["Could you elaborate on that?", "If I understand correctly...", "What I mean is..."],
    challenge: "Use 'Could you elaborate?' when you want someone to explain more in detail.",
    culturalTidbit: "Eye contact is important in American culture - it shows you're engaged and listening.",
  },
  {
    id: 4,
    date: "January 25, 2025",
    sessionType: "30-min",
    phrases: ["As far as I know...", "From my perspective...", "The way I see it..."],
    challenge: "Practice giving your opinion using 'From my perspective' in a conversation.",
    culturalTidbit: "Americans appreciate directness, but softening phrases like 'From my perspective' make opinions sound less confrontational.",
  },
]

export default function NotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-serif text-3xl text-navy">Pocket Reminders</h1>
        <p className="mt-1 text-muted-foreground">
          Review key phrases and challenges from your sessions
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search notes..."
          className="pl-10"
        />
      </div>

      {/* Notes List */}
      <div className="space-y-6">
        {pocketReminders.map((reminder) => (
          <Card key={reminder.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{reminder.date}</CardTitle>
                <Badge variant="secondary">{reminder.sessionType}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Key Phrases */}
              <div>
                <h4 className="mb-2 text-sm font-semibold text-navy">Key Phrases</h4>
                <div className="flex flex-wrap gap-2">
                  {reminder.phrases.map((phrase, i) => (
                    <Badge key={i} variant="gold">
                      {phrase}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Challenge */}
              <div className="rounded-lg bg-cream-dark/50 p-4">
                <h4 className="mb-1 text-sm font-semibold text-navy">Weekly Challenge</h4>
                <p className="text-sm text-muted-foreground">{reminder.challenge}</p>
              </div>

              {/* Cultural Tidbit */}
              <div className="rounded-lg border border-gold/30 bg-gold/5 p-4">
                <h4 className="mb-1 text-sm font-semibold text-navy">Cultural Insight</h4>
                <p className="text-sm text-muted-foreground">{reminder.culturalTidbit}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {pocketReminders.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">No pocket reminders yet</p>
            <p className="text-sm text-muted-foreground">
              After each session, you'll receive personalized notes here
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

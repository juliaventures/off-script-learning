import { Clock, CreditCard, Plus, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const purchaseOptions = [
  { name: "30-Minute Session", price: "$40", credits: "30 min" },
  { name: "60-Minute Session", price: "$75", credits: "60 min" },
  { name: "4-Pack", price: "$140", credits: "120 min", savings: "Save $20" },
  { name: "8-Pack", price: "$250", credits: "240 min", savings: "Save $70" },
]

const purchaseHistory = [
  { date: "Jan 15, 2025", type: "4-Pack", amount: "$140", credits: "+120 min" },
  { date: "Dec 10, 2024", type: "Single 30-min", amount: "$40", credits: "+30 min" },
  { date: "Nov 20, 2024", type: "8-Pack", amount: "$250", credits: "+240 min" },
]

export default function CreditsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-serif text-3xl text-navy">Credits</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your session credits and purchases
        </p>
      </div>

      {/* Current Balance */}
      <Card className="bg-gradient-gold text-navy">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-navy/70">Current Balance</p>
              <p className="text-5xl font-bold">120 min</p>
              <p className="mt-2 text-navy/70">Credits never expire</p>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/30">
              <CreditCard className="h-10 w-10" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Membership Status */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-dark">
                <Sparkles className="h-6 w-6 text-navy" />
              </div>
              <div>
                <p className="font-semibold text-navy">No Active Membership</p>
                <p className="text-sm text-muted-foreground">
                  Upgrade to a membership for better value and perks
                </p>
              </div>
            </div>
            <Button variant="outline">View Memberships</Button>
          </div>
        </CardContent>
      </Card>

      {/* Purchase Options */}
      <Card>
        <CardHeader>
          <CardTitle>Buy More Credits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {purchaseOptions.map((option) => (
              <div
                key={option.name}
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-cream-dark/30"
              >
                <div>
                  {option.savings && (
                    <Badge variant="success" className="mb-2">
                      {option.savings}
                    </Badge>
                  )}
                  <p className="font-semibold text-navy">{option.name}</p>
                  <p className="text-sm text-muted-foreground">{option.credits}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-navy">{option.price}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Plus className="mr-1 h-4 w-4" />
                    Buy
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Purchase History */}
      <Card>
        <CardHeader>
          <CardTitle>Purchase History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {purchaseHistory.map((purchase, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-cream-dark/50 p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <Clock className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{purchase.type}</p>
                    <p className="text-sm text-muted-foreground">{purchase.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-navy">{purchase.amount}</p>
                  <p className="text-sm text-gold">{purchase.credits}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

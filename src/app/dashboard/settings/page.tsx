"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bell, Globe, Lock, User, Loader2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { supabase } from "@/lib/supabase"

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })
  }, [])

  const handleDeleteAccount = async () => {
    setIsDeleting(true)
    try {
      const { data: sessionData } = await supabase.auth.getSession()
      if (!sessionData.session) {
        throw new Error('Not authenticated')
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/delete-account`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${sessionData.session.access_token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to delete account')
      }

      localStorage.clear()
      router.push('/')
    } catch (error: any) {
      console.error('Delete account error:', error)
      alert(error.message || 'Failed to delete account')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-serif text-3xl text-navy">Settings</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile
          </CardTitle>
          <CardDescription>
            Your personal information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-navy">
                Name
              </label>
              <Input defaultValue={user?.user_metadata?.full_name || ""} placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-navy">
                Email
              </label>
              <Input defaultValue={user?.email || ""} disabled />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-navy">
                Phone
              </label>
              <Input placeholder="+1 (555) 123-4567" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-navy">
                Time Zone
              </label>
              <Input defaultValue="Pacific Time (PT)" />
            </div>
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Learning Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Learning Preferences
          </CardTitle>
          <CardDescription>
            Customize your learning experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Feedback Style
            </label>
            <div className="flex flex-wrap gap-2">
              {["Direct", "Encouraging", "Written", "Real-time"].map((style) => (
                <Badge
                  key={style}
                  variant={style === "Encouraging" ? "gold" : "outline"}
                  className="cursor-pointer"
                >
                  {style}
                </Badge>
              ))}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              How would you like to receive feedback during sessions?
            </p>
          </div>

          <Separator />

          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Session Focus
            </label>
            <div className="flex flex-wrap gap-2">
              {["Conversation", "Pronunciation", "Business English", "Grammar", "Vocabulary"].map((focus) => (
                <Badge
                  key={focus}
                  variant={focus === "Conversation" || focus === "Business English" ? "gold" : "outline"}
                  className="cursor-pointer"
                >
                  {focus}
                </Badge>
              ))}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Select areas you want to focus on
            </p>
          </div>

          <Separator />

          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Preferred Schedule
            </label>
            <div className="flex flex-wrap gap-2">
              {["Morning", "Lunch", "Evening", "Weekends"].map((time) => (
                <Badge
                  key={time}
                  variant={time === "Evening" ? "gold" : "outline"}
                  className="cursor-pointer"
                >
                  {time}
                </Badge>
              ))}
            </div>
          </div>

          <Button>Update Preferences</Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
          <CardDescription>
            Manage how we contact you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Session Reminders", description: "Get reminded before upcoming sessions", enabled: true },
            { name: "New Events", description: "Be notified about new community events", enabled: true },
            { name: "Pocket Reminders", description: "Get notified when new notes are available", enabled: true },
            { name: "Promotional Updates", description: "Receive news about special offers", enabled: false },
          ].map((notification) => (
            <div
              key={notification.name}
              className="flex items-center justify-between rounded-lg border border-border p-4"
            >
              <div>
                <p className="font-semibold text-navy">{notification.name}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
              <Button variant={notification.enabled ? "default" : "outline"} size="sm">
                {notification.enabled ? "On" : "Off"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Account */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Account
          </CardTitle>
          <CardDescription>
            Manage your account settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div>
              <p className="font-semibold text-navy">Connected Accounts</p>
              <p className="text-sm text-muted-foreground">Google Account connected</p>
            </div>
            <Badge variant="success">Connected</Badge>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div>
              <p className="font-semibold text-navy">Billing</p>
              <p className="text-sm text-muted-foreground">Manage your subscription and payment methods</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>

          <Separator />

          <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-destructive">Delete Account</p>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-destructive border-destructive/50 hover:bg-destructive/10">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account,
                      subscription, and all your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDeleteAccount}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      disabled={isDeleting}
                    >
                      {isDeleting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                      Delete Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

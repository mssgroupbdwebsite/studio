
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Users, PlusCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    role: "Administrator",
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-4 md:p-6">
       <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Settings</h1>
            <p className="text-muted-foreground">Manage your account and application settings.</p>
        </div>
      <Card>
        <CardHeader>
          <CardTitle>Users & Roles</CardTitle>
          <CardDescription>
            Manage who has access to the admin panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.email}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="space-y-0.5">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <div className="text-sm font-medium text-muted-foreground">{user.role}</div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
           <Button disabled>
            <PlusCircle className="mr-2 h-4 w-4" /> Invite User
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>
            Customize the appearance of the application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
              <p className="font-medium">Toggle Light / Dark Mode</p>
              <ThemeToggle />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AdminSettingsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your application settings.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-center py-16 border-2 border-dashed rounded-lg">
                    <h3 className="text-lg font-semibold">Coming Soon</h3>
                    <p className="text-sm text-muted-foreground">User and role management will be available here.</p>
                </div>
            </CardContent>
        </Card>
    );
}

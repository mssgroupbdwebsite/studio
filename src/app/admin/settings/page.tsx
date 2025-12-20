
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserManagementTable } from './_components/user-management-table';
import { getAdminServices } from '@/firebase/server-init';

async function getUsers() {
    const { firestore } = getAdminServices();
    const usersSnapshot = await firestore.collection('users').get();
    const users = usersSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            uid: doc.id,
            email: data.email || 'N/A',
            role: data.role || 'user',
        };
    });
    return users;
}


export default async function AdminSettingsPage() {
    const users = await getUsers();

    return (
        <div className="grid gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                        Manage user roles and permissions. The first user is automatically designated as an admin and their role cannot be changed.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <UserManagementTable users={users} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Site Configuration</CardTitle>
                    <CardDescription>
                        Manage general site settings. (Coming soon)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <p className="text-sm text-muted-foreground">
                        Theme customization, site metadata, and other general settings will be available here in a future update.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

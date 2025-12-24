
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AdminHeader } from '@/components/admin/admin-header';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // This layout no longer needs a Firebase provider
  return (
    <div className="flex h-screen w-full bg-muted/40">
      <AdminSidebar />
      <div className="flex flex-col flex-1">
        <AdminHeader />
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
            {children}
        </main>
      </div>
    </div>
  );
}

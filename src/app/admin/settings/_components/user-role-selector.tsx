
"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { updateUserRole } from "../actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface UserRoleSelectorProps {
    userId: string;
    currentRole: 'admin' | 'user';
    disabled?: boolean;
}

export function UserRoleSelector({ userId, currentRole, disabled }: UserRoleSelectorProps) {
    const { toast } = useToast();
    const router = useRouter();
    const [isUpdating, setIsUpdating] = useState(false);

    const handleRoleChange = async (newRole: 'admin' | 'user') => {
        if (newRole === currentRole) return;
        
        setIsUpdating(true);

        const result = await updateUserRole(userId, newRole);

        if (result.success) {
            toast({
                title: 'Role Updated',
                description: `User role has been changed to ${newRole}.`,
            });
            router.refresh(); // Re-fetches server-side props for the page
        } else {
            toast({
                variant: 'destructive',
                title: 'Update Failed',
                description: result.error || 'An unexpected error occurred.',
            });
        }
        setIsUpdating(false);
    }

    return (
        <div className="flex items-center gap-2 justify-end">
            {isUpdating && <Loader2 className="h-4 w-4 animate-spin" />}
            <Select
                onValueChange={handleRoleChange}
                defaultValue={currentRole}
                disabled={disabled || isUpdating}
            >
                <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

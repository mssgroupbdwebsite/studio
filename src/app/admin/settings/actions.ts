
'use server';

import { getAdminServices } from "@/firebase/server-init";
import { revalidatePath } from "next/cache";

export async function updateUserRole(userId: string, newRole: 'admin' | 'user') {
    if (!userId) {
        return { success: false, error: 'User ID is required.' };
    }
    if (!['admin', 'user'].includes(newRole)) {
        return { success: false, error: 'Invalid role specified.' };
    }

    try {
        const { firestore } = getAdminServices();
        const userRef = firestore.collection('users').doc(userId);
        
        await userRef.update({ role: newRole });

        revalidatePath('/admin/settings');
        return { success: true };
    } catch (error) {
        console.error('Error updating user role:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}

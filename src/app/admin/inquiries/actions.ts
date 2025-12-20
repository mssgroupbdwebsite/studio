
'use server';

import { revalidatePath } from 'next/cache';
import { getAdminServices } from '@/firebase/server-init';

export async function deleteInquiry(inquiryId: string) {
    if (!inquiryId) {
        return { success: false, error: 'Inquiry ID is required.' };
    }

    try {
        const { firestore } = getAdminServices();
        await firestore.collection('inquiries').doc(inquiryId).delete();

        revalidatePath('/admin/inquiries');
        return { success: true };
    } catch (error) {
        console.error('Error deleting inquiry:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}

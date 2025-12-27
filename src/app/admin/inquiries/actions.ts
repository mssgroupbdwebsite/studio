
'use server';

import { deleteDoc, doc } from 'firebase/firestore';
import { getAdminServices } from '@/firebase/server-init';
import { revalidatePath } from 'next/cache';

export async function deleteInquiry(inquiryId: string) {
    if (!inquiryId) {
        return { success: false, error: 'Inquiry ID is required.' };
    }

    try {
        const { firestore } = getAdminServices();
        await firestore.collection('inquiries').doc(inquiryId).delete();
        revalidatePath('/admin/inquiries');
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to delete inquiry.' };
    }
}

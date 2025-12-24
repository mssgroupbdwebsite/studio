
'use server';

import { deleteInquiry as deleteInquiryFromFile } from '@/lib/inquiries';
import { revalidatePath } from 'next/cache';

export async function deleteInquiry(inquiryId: string) {
    if (!inquiryId) {
        return { success: false, error: 'Inquiry ID is required.' };
    }
    
    try {
        await deleteInquiryFromFile(inquiryId);
        revalidatePath('/admin/inquiries');
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to delete inquiry.' };
    }
}

    

'use server';

import { saveInquiry, Inquiry } from '@/lib/inquiries';
import { revalidatePath } from 'next/cache';

export async function submitInquiry(formData: Omit<Inquiry, 'id' | 'submittedAt'>) {
    try {
        const newInquiry: Inquiry = {
            ...formData,
            id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            submittedAt: new Date().toISOString(),
        };

        await saveInquiry(newInquiry);

        // Revalidate the inquiries page to show the new submission
        revalidatePath('/admin/inquiries');

        return { success: true };
    } catch (e: any) {
        console.error("Failed to save inquiry:", e);
        return { success: false, error: 'An error occurred while submitting your inquiry.' };
    }
}

    
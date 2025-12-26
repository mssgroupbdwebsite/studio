
'use server';

import { saveInquiry } from '@/lib/inquiries';
import { revalidatePath } from 'next/cache';

// The Inquiry type needs to be defined for the form data
interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export async function submitInquiry(formData: InquiryFormData) {
    try {
        const newInquiry = {
            ...formData,
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

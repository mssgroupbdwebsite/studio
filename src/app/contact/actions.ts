
"use server";

import { getAdminServices } from "@/firebase/server-init";
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
        const { firestore } = getAdminServices();

        const newInquiry = {
            ...formData,
            submittedAt: new Date().toISOString(),
        };

        await firestore.collection('inquiries').add(newInquiry);

        // Optionally revalidate the admin page if needed, but since it's admin only, maybe not necessary
        // revalidatePath('/admin/inquiries');

        return { success: true };
    } catch (e: any) {
        console.error("Failed to save inquiry:", e);
        return { success: false, error: 'An error occurred while submitting your inquiry.' };
    }
}

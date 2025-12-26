
"use client";

import { collection, addDoc } from "firebase/firestore";
import { getSdks } from "@/firebase";

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
        const { firestore } = getSdks();
        const inquiriesCollection = collection(firestore, 'inquiries');
        
        const newInquiry = {
            ...formData,
            submittedAt: new Date().toISOString(),
        };

        await addDoc(inquiriesCollection, newInquiry);

        return { success: true };
    } catch (e: any) {
        console.error("Failed to save inquiry:", e);
        return { success: false, error: 'An error occurred while submitting your inquiry.' };
    }
}

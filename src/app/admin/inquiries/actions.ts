
'use client';

import { deleteDoc, doc } from 'firebase/firestore';
import { getSdks } from '@/firebase';

export async function deleteInquiry(inquiryId: string) {
    if (!inquiryId) {
        return { success: false, error: 'Inquiry ID is required.' };
    }
    
    try {
        const { firestore } = getSdks();
        const inquiryRef = doc(firestore, 'inquiries', inquiryId);
        await deleteDoc(inquiryRef);
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to delete inquiry.' };
    }
}


'use server';

import { getAdminServices } from '@/firebase/server-init';
import { revalidatePath } from 'next/cache';
import type { FieldValue } from 'firebase-admin/firestore';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface PaginatedInquiries {
    inquiries: Inquiry[];
    total: number;
    page: number;
    totalPages: number;
}

const { firestore } = getAdminServices();
const inquiriesCollection = firestore.collection('inquiries');


export async function getInquiries({ page = 1, limit = 10 } : { page: number, limit: number }): Promise<PaginatedInquiries> {
    const inquiriesRef = inquiriesCollection.orderBy('submittedAt', 'desc');
    const totalSnapshot = await inquiriesRef.count().get();
    const total = totalSnapshot.data().count;
    const totalPages = Math.ceil(total / limit);

    const snapshot = await inquiriesRef.limit(limit).offset((page - 1) * limit).get();
    
    const inquiries: Inquiry[] = [];
    snapshot.forEach(doc => {
        inquiries.push({ id: doc.id, ...(doc.data() as Omit<Inquiry, 'id'>) });
    });

    return {
        inquiries,
        total,
        page,
        totalPages
    };
}

export async function saveInquiry(inquiry: Omit<Inquiry, 'id'>): Promise<void> {
    await inquiriesCollection.add(inquiry);
    revalidatePath('/admin/inquiries');
}

export async function deleteInquiry(inquiryId: string): Promise<void> {
    await inquiriesCollection.doc(inquiryId).delete();
    revalidatePath('/admin/inquiries');
}

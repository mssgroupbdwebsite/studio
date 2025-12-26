
'use server';
import { getAdminServices } from '@/firebase/server-init';
import type { Query } from 'firebase-admin/firestore';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  submittedAt: string; // ISO 8601 string
}

export interface PaginatedInquiries {
    inquiries: Inquiry[];
    total: number;
    page: number;
    totalPages: number;
}

const { firestore: db } = getAdminServices();
const inquiriesCollection = db.collection('inquiries');

export async function getInquiries({ page = 1, limit = 10 } : { page: number, limit: number }): Promise<PaginatedInquiries> {
    const inquiriesRef = inquiriesCollection;
    const countSnapshot = await inquiriesRef.count().get();
    const total = countSnapshot.data().count;
    const totalPages = Math.ceil(total / limit);

    let query: Query = inquiriesRef.orderBy('submittedAt', 'desc');
    
    if (page > 1) {
        const lastVisibleSnapshot = await inquiriesRef.orderBy('submittedAt', 'desc').limit((page - 1) * limit).get();
        const lastVisible = lastVisibleSnapshot.docs[lastVisibleSnapshot.docs.length - 1];
        if (lastVisible) {
            query = query.startAfter(lastVisible);
        }
    }
    
    const snapshot = await query.limit(limit).get();
    const paginatedInquiries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Inquiry));
    
    return {
        inquiries: paginatedInquiries,
        total,
        page,
        totalPages
    };
}

export async function saveInquiry(inquiryData: Omit<Inquiry, 'id'>): Promise<Inquiry> {
    const docRef = await inquiriesCollection.add(inquiryData);
    return {
        id: docRef.id,
        ...inquiryData
    };
}

export async function deleteInquiry(inquiryId: string): Promise<boolean> {
    const docRef = inquiriesCollection.doc(inquiryId);
    await docRef.delete();
    return true;
}

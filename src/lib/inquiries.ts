
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
    // Fetch all inquiries and paginate in memory to avoid count() issues
    const snapshot = await inquiriesCollection.orderBy('submittedAt', 'desc').get();
    const allInquiries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Inquiry));

    const total = allInquiries.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedInquiries = allInquiries.slice(startIndex, endIndex);

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

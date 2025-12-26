
'use server';
import { promises as fs } from 'fs';
import path from 'path';

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


const inquiriesFilePath = path.join(process.cwd(), 'data', 'inquiries.json');

async function readInquiriesFromFile(): Promise<Inquiry[]> {
    try {
        const fileContent = await fs.readFile(inquiriesFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error: any) {
        if (error.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}

async function writeInquiriesToFile(inquiries: Inquiry[]): Promise<void> {
    inquiries.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
    await fs.writeFile(inquiriesFilePath, JSON.stringify(inquiries, null, 2), 'utf-8');
}

export async function getInquiries({ page = 1, limit = 10 } : { page: number, limit: number }): Promise<PaginatedInquiries> {
    const allInquiries = await readInquiriesFromFile();
    const total = allInquiries.length;
    const totalPages = Math.ceil(total / limit);
    const paginatedInquiries = allInquiries.slice((page - 1) * limit, page * limit);
    
    return {
        inquiries: paginatedInquiries,
        total,
        page,
        totalPages
    };
}

export async function saveInquiry(inquiryData: Omit<Inquiry, 'id'>): Promise<Inquiry> {
    const inquiries = await readInquiriesFromFile();
    const newInquiry: Inquiry = {
        id: `inq_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        ...inquiryData
    };
    inquiries.push(newInquiry);
    await writeInquiriesToFile(inquiries);
    return newInquiry;
}

export async function deleteInquiry(inquiryId: string): Promise<boolean> {
    let inquiries = await readInquiriesFromFile();
    const initialLength = inquiries.length;
    inquiries = inquiries.filter(inq => inq.id !== inquiryId);

    if (inquiries.length < initialLength) {
        await writeInquiriesToFile(inquiries);
        return true;
    }
    return false;
}

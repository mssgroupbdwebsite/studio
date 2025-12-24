
import fs from 'fs/promises';
import path from 'path';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  submittedAt: string;
}

const dataFilePath = path.join(process.cwd(), 'data', 'inquiries.json');

// Ensure the data directory and file exist
async function ensureFileExists() {
    try {
        await fs.access(dataFilePath);
    } catch {
        try {
            await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
            await fs.writeFile(dataFilePath, JSON.stringify([]), 'utf-8');
        } catch (error) {
            console.error("Could not create inquiries data file:", error);
        }
    }
}

export async function getInquiries(): Promise<Inquiry[]> {
    await ensureFileExists();
    try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        const inquiries = JSON.parse(fileContent) as Inquiry[];
        // Sort by most recent first
        return inquiries.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
    } catch (error) {
        console.error("Error reading inquiries:", error);
        return [];
    }
}

export async function saveInquiry(inquiry: Inquiry): Promise<void> {
    await ensureFileExists();
    const inquiries = await getInquiries();
    inquiries.push(inquiry);
    await fs.writeFile(dataFilePath, JSON.stringify(inquiries, null, 2), 'utf-8');
}

export async function deleteInquiry(inquiryId: string): Promise<void> {
    await ensureFileExists();
    let inquiries = await getInquiries();
    inquiries = inquiries.filter(inq => inq.id !== inquiryId);
    // Re-sort after filtering before writing
    const sortedInquiries = inquiries.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
    await fs.writeFile(dataFilePath, JSON.stringify(sortedInquiries, null, 2), 'utf-8');
}

    
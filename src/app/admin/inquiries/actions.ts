
'use server';

export async function deleteInquiry(inquiryId: string) {
    if (!inquiryId) {
        return { success: false, error: 'Inquiry ID is required.' };
    }
    console.log(`Deleting inquiry ${inquiryId} (no-op)`);
    return { success: true };
}

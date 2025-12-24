
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getInquiries, Inquiry } from '@/lib/inquiries';
import { formatDistanceToNow } from 'date-fns';
import { Mail, Trash2 } from 'lucide-react';
import { DeleteInquiryButton } from './delete-inquiry-button';

export const revalidate = 0; // Don't cache this page

export default async function AdminInquiriesPage() {
    const inquiries = await getInquiries();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Inquiries</CardTitle>
                <CardDescription>View and manage contact form submissions.</CardDescription>
            </CardHeader>
            <CardContent>
                {inquiries.length > 0 ? (
                    <div className="space-y-4">
                        {inquiries.map((inquiry) => (
                            <Card key={inquiry.id} className="p-4">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <p className="font-semibold">{inquiry.name} <span className="text-muted-foreground font-normal">{`<${inquiry.email}>`}</span></p>
                                        <p className="text-sm text-muted-foreground">{inquiry.company}</p>
                                        <p className="text-sm font-bold">{inquiry.subject}</p>
                                    </div>
                                    <div className="text-right flex-shrink-0 ml-4">
                                        <p className="text-xs text-muted-foreground">{formatDistanceToNow(new Date(inquiry.submittedAt), { addSuffix: true })}</p>
                                        <DeleteInquiryButton inquiryId={inquiry.id} />
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t">
                                    <p className="text-sm whitespace-pre-wrap">{inquiry.message}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 border-2 border-dashed rounded-lg">
                        <Mail className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-semibold">No Inquiries Yet</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            New submissions from the contact form will appear here.
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

    
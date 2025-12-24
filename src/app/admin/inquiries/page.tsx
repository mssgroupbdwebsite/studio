
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getInquiries, Inquiry } from '@/lib/inquiries';
import { formatDistanceToNow } from 'date-fns';
import { Mail, Briefcase, User, Clock, Inbox } from 'lucide-react';
import { DeleteInquiryButton } from './delete-inquiry-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export const revalidate = 0; // Don't cache this page

function InquiryCard({ inquiry }: { inquiry: Inquiry }) {
    const initial = inquiry.name.charAt(0).toUpperCase();

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                <Avatar className="h-10 w-10 border">
                    <AvatarFallback>{initial}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className='flex-1'>
                            <p className="font-semibold">{inquiry.name}</p>
                            <Link href={`mailto:${inquiry.email}`} className="text-sm text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors w-fit">
                                <Mail className="h-3 w-3" />
                                <span>{inquiry.email}</span>
                            </Link>
                        </div>
                         <div className="text-xs text-muted-foreground flex items-center gap-2 flex-shrink-0">
                           <Clock className="h-3 w-3" />
                           {formatDistanceToNow(new Date(inquiry.submittedAt), { addSuffix: true })}
                        </div>
                    </div>
                     {inquiry.company && (
                        <p className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                            <Briefcase className="h-3 w-3" />
                            {inquiry.company}
                        </p>
                    )}
                </div>
                 <DeleteInquiryButton inquiryId={inquiry.id} />
            </CardHeader>
            <CardContent>
                <div className="border-t pt-4">
                    <Badge variant="secondary" className="mb-2">{inquiry.subject}</Badge>
                    <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                        {inquiry.message}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}


export default async function AdminInquiriesPage() {
    const inquiries = await getInquiries();

    return (
        <Card className="border-0 md:border">
            <CardHeader>
                <CardTitle>Inbox</CardTitle>
                <CardDescription>View and manage contact form submissions.</CardDescription>
            </CardHeader>
            <CardContent>
                {inquiries.length > 0 ? (
                    <div className="space-y-4">
                        {inquiries.map((inquiry) => (
                           <InquiryCard key={inquiry.id} inquiry={inquiry} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 border-2 border-dashed rounded-lg">
                        <Inbox className="mx-auto h-12 w-12 text-muted-foreground" />
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

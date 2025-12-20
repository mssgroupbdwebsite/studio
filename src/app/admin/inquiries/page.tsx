
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

interface Inquiry {
    id: string;
    name: string;
    email: string;
    company?: string;
    subject?: string;
    message: string;
    submissionDate: Timestamp;
    status: 'new' | 'read' | 'archived';
}

function InquiryRow({ inquiry }: { inquiry: Inquiry }) {
    const submissionDate = inquiry.submissionDate?.toDate ? format(inquiry.submissionDate.toDate(), "PPpp") : 'N/A';
    return (
        <TableRow>
            <TableCell>
                <div className="font-medium">{inquiry.name}</div>
                <div className="text-sm text-muted-foreground">{inquiry.email}</div>
            </TableCell>
            <TableCell>
                <div>{inquiry.subject || 'N/A'}</div>
                {inquiry.company && <div className="text-sm text-muted-foreground">{inquiry.company}</div>}
            </TableCell>
            <TableCell className="max-w-[300px] truncate">
                {inquiry.message}
            </TableCell>
            <TableCell>{submissionDate}</TableCell>
            <TableCell>
                <Badge variant={inquiry.status === 'new' ? 'default' : 'secondary'}>{inquiry.status}</Badge>
            </TableCell>
        </TableRow>
    )
}

export default function AdminInquiriesPage() {
    const firestore = useFirestore();

    const inquiriesQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'inquiries'), orderBy('submissionDate', 'desc'));
    }, [firestore]);

    const { data: inquiries, isLoading } = useCollection<Inquiry>(inquiriesQuery);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Inquiries</CardTitle>
                <CardDescription>View and manage contact form submissions.</CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading && (
                    <div className="space-y-2">
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                    </div>
                )}
                {!isLoading && inquiries && (
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>From</TableHead>
                                <TableHead>Subject</TableHead>
                                <TableHead>Message</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {inquiries.map(inquiry => <InquiryRow key={inquiry.id} inquiry={inquiry} />)}
                        </TableBody>
                    </Table>
                )}
                 {!isLoading && (!inquiries || inquiries.length === 0) && (
                    <div className="text-center py-12">
                        <h3 className="text-lg font-semibold">No Inquiries Found</h3>
                        <p className="text-muted-foreground">Contact form submissions will appear here.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

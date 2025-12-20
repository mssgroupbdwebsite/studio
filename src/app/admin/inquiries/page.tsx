
'use client';
import React, 'useState';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Copy, Mail, Trash2, Check, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { deleteInquiry } from './actions';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

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
    const { toast } = useToast();
    const [isDeleting, setIsDeleting] = useState(false);
    const submissionDate = inquiry.submissionDate?.toDate ? format(inquiry.submissionDate.toDate(), "PPpp") : 'N/A';

    const copyToClipboard = (text: string, fieldName: string) => {
        navigator.clipboard.writeText(text);
        toast({
            title: "Copied to Clipboard",
            description: `${fieldName} has been copied.`,
            duration: 3000,
        });
    };

    const handleDelete = async () => {
        setIsDeleting(true);
        const result = await deleteInquiry(inquiry.id);
        if (result.success) {
            toast({
                title: 'Inquiry Deleted',
                description: 'The inquiry has been successfully removed.',
            });
            // The revalidation in the action will handle the UI update
        } else {
            toast({
                variant: 'destructive',
                title: 'Deletion Failed',
                description: result.error || 'An unexpected error occurred.',
            });
            setIsDeleting(false);
        }
    }

    return (
        <Collapsible asChild>
            <React.Fragment>
                <TableRow className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="w-1/4">
                        <div className="font-medium">{inquiry.name}</div>
                        <div className="text-sm text-muted-foreground">{inquiry.email}</div>
                    </TableCell>
                    <TableCell className="w-1/4">
                        <div>{inquiry.subject || 'N/A'}</div>
                        {inquiry.company && <div className="text-sm text-muted-foreground">{inquiry.company}</div>}
                    </TableCell>
                    <TableCell className="w-1/4 max-w-[300px] truncate">
                        {inquiry.message}
                    </TableCell>
                    <TableCell className="w-1/4 text-right">
                        <div className='flex items-center justify-end gap-4'>
                            {submissionDate}
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <ChevronDown className="h-4 w-4 transition-transform [&[data-state=open]]:rotate-180" />
                                    <span className="sr-only">Toggle details</span>
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                    </TableCell>
                </TableRow>
                <CollapsibleContent asChild>
                    <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-muted/30"
                    >
                        <TableCell colSpan={4} className="p-0">
                            <div className="p-6 space-y-4">
                                <h4 className="font-semibold">Full Message:</h4>
                                <p className="text-muted-foreground text-sm whitespace-pre-wrap leading-relaxed">{inquiry.message}</p>
                                <div className='flex items-center gap-2 pt-4 border-t'>
                                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(inquiry.email, 'Email')}>
                                        <Mail className="mr-2 h-4 w-4" /> Copy Email
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(inquiry.message, 'Message')}>
                                        <Copy className="mr-2 h-4 w-4" /> Copy Message
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                             <Button variant="destructive" size="sm" className="ml-auto" disabled={isDeleting}>
                                                <Trash2 className="mr-2 h-4 w-4" /> {isDeleting ? 'Deleting...' : 'Delete'}
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete this inquiry.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
                                                    Yes, delete inquiry
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>
                        </TableCell>
                    </motion.tr>
                </CollapsibleContent>
            </React.Fragment>
        </Collapsible>
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
                <CardDescription>View and manage contact form submissions. Click a row to expand.</CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading && (
                    <div className="space-y-2">
                        {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
                    </div>
                )}
                {!isLoading && inquiries && (
                     <div className="rounded-md border">
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>From</TableHead>
                                    <TableHead>Subject / Company</TableHead>
                                    <TableHead>Message Snippet</TableHead>
                                    <TableHead className="text-right">Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <AnimatePresence>
                                {inquiries.map(inquiry => <InquiryRow key={inquiry.id} inquiry={inquiry} />)}
                                </AnimatePresence>
                            </TableBody>
                        </Table>
                    </div>
                )}
                 {!isLoading && (!inquiries || inquiries.length === 0) && (
                    <div className="text-center py-16 border-2 border-dashed rounded-lg">
                        <Mail className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-semibold">No Inquiries Found</h3>
                        <p className="mt-2 text-sm text-muted-foreground">When new contact form submissions arrive, they will appear here.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

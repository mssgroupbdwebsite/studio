
'use client';

import { collection, getDocs, query, orderBy, limit, startAfter, type QueryDocumentSnapshot } from 'firebase/firestore';
import { useFirebase } from '@/firebase';
import type { DocumentData } from 'firebase/firestore';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  submittedAt: string;
}
import { formatDistanceToNow } from 'date-fns';
import { Mail, Briefcase, Clock, Inbox, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { DeleteInquiryButton } from './delete-inquiry-button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function InquiryCard({ inquiry }: { inquiry: Inquiry }) {
    const initial = inquiry.name.charAt(0).toUpperCase();

    return (
        <Card className="group relative transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary/50">
             <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-75 blur"></div>
            <div className="relative bg-card rounded-lg">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-b-0">
                        <div className="flex items-center p-4">
                            <Avatar className="h-10 w-10 border">
                                <AvatarFallback>{initial}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 flex-1">
                                <p className="font-semibold text-foreground">{inquiry.name}</p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <Link href={`mailto:${inquiry.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                        <Mail className="h-3 w-3" />
                                        <span>{inquiry.email}</span>
                                    </Link>
                                    {inquiry.company && (
                                        <span className="flex items-center gap-1.5">
                                            <Briefcase className="h-3 w-3" />
                                            {inquiry.company}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-2 flex-shrink-0 mx-4">
                                <Clock className="h-3 w-3" />
                                <span>{formatDistanceToNow(new Date(inquiry.submittedAt), { addSuffix: true })}</span>
                            </div>
                            <AccordionTrigger className="p-2 rounded-full hover:bg-accent [&[data-state=open]]:-rotate-180 transition-transform duration-300">
                                <ChevronDown className="h-5 w-5" />
                            </AccordionTrigger>
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href={`mailto:${inquiry.email}`}>Reply via Email</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem disabled>Mark as Read</DropdownMenuItem>
                                     <DropdownMenuSeparator />
                                     <DropdownMenuItem className="p-0">
                                         <DeleteInquiryButton inquiryId={inquiry.id} />
                                     </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <AccordionContent>
                            <div className="prose prose-sm dark:prose-invert max-w-none px-6 pb-4 border-t pt-4">
                                <h4 className="font-semibold text-primary">{inquiry.subject}</h4>
                                <p className="text-muted-foreground">{inquiry.message}</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </Card>
    )
}

function PaginationControls({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page:number) => void }) {
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    return (
        <div className="flex items-center justify-center gap-6 mt-8">
            <Button variant="outline" disabled={!hasPrev} onClick={() => onPageChange(currentPage - 1)}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
            </Button>
            <span className="text-sm font-medium text-muted-foreground">
                Page {currentPage} of {totalPages}
            </span>
            <Button variant="outline" disabled={!hasNext} onClick={() => onPageChange(currentPage + 1)}>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}

export default function AdminInquiriesPage() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const { firestore } = useFirebase();

    useEffect(() => {
        const fetchInquiries = async () => {
            if (!firestore) return;

            setIsLoading(true);
            try {
                const inquiriesRef = collection(firestore, 'inquiries');

                // Fetch all inquiries and sort by submittedAt desc
                const q = query(inquiriesRef, orderBy('submittedAt', 'desc'));
                const querySnapshot = await getDocs(q);

                const allInquiries: Inquiry[] = [];
                querySnapshot.forEach((doc) => {
                    allInquiries.push({ id: doc.id, ...doc.data() } as Inquiry);
                });

                // Simple pagination
                const total = allInquiries.length;
                const totalPages = Math.ceil(total / 10);
                const startIndex = (currentPage - 1) * 10;
                const endIndex = startIndex + 10;
                const paginatedInquiries = allInquiries.slice(startIndex, endIndex);

                setInquiries(paginatedInquiries);
                setTotalPages(totalPages);
            } catch (error) {
                console.error("Failed to fetch inquiries:", error);
                // Optionally, show a toast or error message to the user
            } finally {
                setIsLoading(false);
            }
        };

        fetchInquiries();
    }, [currentPage, firestore]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="relative min-h-full">
            <div className="absolute inset-0 bg-grid-slate-100/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] dark:bg-grid-slate-900/[0.05]"></div>
            
            <div className="relative p-4 sm:p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight font-headline">Inbox</h1>
                    <p className="text-muted-foreground">View and manage contact form submissions.</p>
                </div>
                
                {isLoading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                    </div>
                ) : inquiries.length > 0 ? (
                    <>
                        <div className="space-y-4">
                            {inquiries.map((inquiry) => (
                               <InquiryCard key={inquiry.id} inquiry={inquiry} />
                            ))}
                        </div>
                        {totalPages > 1 && (
                            <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                        )}
                    </>
                ) : (
                    <div className="text-center py-24 border-2 border-dashed rounded-lg bg-card/50">
                        <Inbox className="mx-auto h-16 w-16 text-muted-foreground/50" strokeWidth={1}/>
                        <h3 className="mt-6 text-xl font-semibold">Inbox Zero</h3>
                        <p className="mt-2 text-muted-foreground">
                            New submissions from the contact form will appear here.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}


'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, Bot, AlertTriangle, ChevronsRight } from 'lucide-react';
import { Inquiry } from '@/lib/inquiries';
import { analyzeInquiry, AnalyzeInquiryOutput } from '@/ai/flows/analyze-inquiries';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface InquiryAnalysisProps {
  inquiry: Inquiry;
}

export function InquiryAnalysis({ inquiry }: InquiryAnalysisProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<AnalyzeInquiryOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setIsLoading(true);
    setAnalysis(null);
    setError(null);
    setIsOpen(true);

    try {
      const result = await analyzeInquiry({
        inquiryText: inquiry.message,
        userType: inquiry.company, // Approximate
        productInterest: inquiry.subject, // Approximate
        companyDetails: inquiry.company,
      });
      setAnalysis(result);
    } catch (e: any) {
      console.error('AI analysis failed:', e);
      setError('The AI analysis could not be completed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const priorityColor = analysis?.priorityScore ?? 0 > 7 ? 'bg-green-500' : analysis?.priorityScore ?? 0 > 4 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="h-8 gap-2 text-primary border-primary/50 hover:bg-primary/10 hover:text-primary"
        onClick={handleAnalyze}
      >
        <Sparkles className="h-4 w-4" />
        <span className="hidden sm:inline">Analyze</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <span>AI Inquiry Analysis</span>
            </DialogTitle>
            <DialogDescription>
              An AI-powered summary of the inquiry from {inquiry.name}.
            </DialogDescription>
          </DialogHeader>

          {isLoading && (
            <div className="flex flex-col items-center justify-center gap-4 py-8">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="text-muted-foreground">Analyzing inquiry...</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center bg-destructive/10 p-4 rounded-md">
              <AlertTriangle className="h-10 w-10 text-destructive" />
              <p className="font-semibold text-destructive">Analysis Failed</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          )}

          {analysis && (
            <div className="space-y-6 py-4">
                <div>
                    <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Summary</h3>
                    <p className="text-base text-foreground bg-secondary/50 p-3 rounded-md border">{analysis.summary}</p>
                </div>
                 <div>
                    <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Key Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        {analysis.keyTopics.map(topic => (
                            <Badge key={topic} variant="secondary">{topic}</Badge>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                         <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Lead Priority</h3>
                         <div className="flex items-center gap-2">
                            <Progress value={(analysis.priorityScore / 10) * 100} className="h-3" />
                            <span className="font-bold text-lg text-primary">{analysis.priorityScore}/10</span>
                         </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Suggested Action</h3>
                        <p className="flex items-center gap-2 font-semibold">
                            <ChevronsRight className="h-5 w-5 text-primary" />
                            {analysis.suggestedAction}
                        </p>
                    </div>
                </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

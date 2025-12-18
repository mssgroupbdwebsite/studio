
"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast"
// import { saveInquiry } from '@/lib/firebase/firestore'; // Will be used later

const contactInfo = [
    {
        icon: <MapPin size={24} className="text-primary" />,
        title: 'Headquarters',
        value: 'Uttara, Dhaka-1230, Bangladesh',
    },
    {
        icon: <Phone size={24} className="text-primary" />,
        title: 'Phone',
        value: '+880 1234-567890',
    },
    {
        icon: <Mail size={24} className="text-primary" />,
        title: 'Email',
        value: 'info@mssgroupbd.com',
    },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleValueChange = (name: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Temporarily simulate saving to localStorage
      const submissions = JSON.parse(localStorage.getItem('inquiries') || '[]');
      const newInquiry = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        status: 'new'
      };
      localStorage.setItem('inquiries', JSON.stringify([...submissions, newInquiry]));
      
      // await saveInquiry(formData); // This will be used when Firebase is configured
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Could not submit your inquiry. Please try again.",
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen">
       <header className="bg-secondary/50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
             <span className="text-primary font-semibold uppercase tracking-wider font-headline">Contact Us</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">
                Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Have a question or a project in mind? We'd love to hear from you.
            </p>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info Side */}
          <div className="flex flex-col gap-8">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-secondary/30">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-3">
                    <CheckCircle className="text-primary" />
                    <span>Quick Sourcing Guide</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Standard lead times for bulk orders range from 45 to 90 days depending on fabric and trim availability.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><span className="font-semibold text-foreground w-36">Minimum Order:</span> 1000 Pcs/Style</li>
                  <li className="flex items-center"><span className="font-semibold text-foreground w-36">Sample Lead Time:</span> 7-14 Days</li>
                  <li className="flex items-center"><span className="font-semibold text-foreground w-36">Payment Terms:</span> L/C at sight, TT</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Form Side */}
          <Card className="p-6 sm:p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center flex flex-col items-center justify-center h-full animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-headline font-bold text-foreground mb-2">Inquiry Received!</h2>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">Thank you for reaching out. A member of our team will be in contact with you within 24 business hours.</p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="link"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                 <h2 className="text-2xl font-headline font-bold text-foreground mb-1">Send us a message</h2>
                 <p className="text-muted-foreground -mt-5">Fill out the form and we'll get back to you.</p>

                <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => handleValueChange('name', e.target.value)}
                    />
                    <Input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleValueChange('email', e.target.value)}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      placeholder="Company Name (Optional)"
                      value={formData.company}
                      onChange={(e) => handleValueChange('company', e.target.value)}
                    />
                    <Select onValueChange={(value) => handleValueChange('subject', value)} value={formData.subject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New Inquiry">New Manufacturing Inquiry</SelectItem>
                        <SelectItem value="Sample Request">Sample Request</SelectItem>
                        <SelectItem value="Sourcing Partnership">Sourcing Partnership</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                </div>

                <Textarea
                    required
                    rows={6}
                    placeholder="Describe your requirements (e.g., MOQ, Style, Fabric, etc.)"
                    value={formData.message}
                    onChange={(e) => handleValueChange('message', e.target.value)}
                  />

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry <Send />
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

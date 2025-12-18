import { Handshake, Package, Search, Factory } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const journeySteps = [
  {
    icon: <Search />,
    title: '1. Inquiry & Consultation',
    description: "It all starts with your vision. Reach out to us with your requirements, and our team will schedule a consultation to understand your brand, design needs, and target market.",
  },
  {
    icon: <Factory />,
    title: '2. Sourcing & Development',
    description: "We leverage our vast network to source the perfect materials and manufacturers. We'll develop samples, ensuring every detail aligns with your specifications before mass production.",
  },
  {
    icon: <Package />,
    title: '3. Production & Quality Assurance',
    description: "Our on-the-ground teams monitor production closely. Rigorous quality checks are performed at every stage to guarantee your standards are met and exceeded.",
  },
  {
    icon: <Handshake />,
    title: '4. Logistics & Delivery',
    description: "We handle all the complexities of logistics and shipping, ensuring a smooth and timely delivery of your finished products right to your doorstep. Your success is our final step.",
  },
];

export function BuyerJourney() {
  return (
    <section className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary tracking-tight">
                Your Journey to Success with Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We've streamlined the apparel sourcing process into a seamless, transparent, and efficient experience for our partners.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((step, index) => (
            <Card key={index} className="text-center shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="items-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {step.icon}
                    </div>
                    <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                    <CardDescription className="pt-2">{step.description}</CardDescription>
                </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

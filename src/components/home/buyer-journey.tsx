import { Handshake, Package, Search, Factory, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const journeySteps = [
  {
    icon: <Search />,
    title: 'Inquiry & Consultation',
    description: "It all starts with your vision. Reach out with your requirements, and we'll understand your brand, design needs, and target market.",
  },
  {
    icon: <Factory />,
    title: 'Sourcing & Development',
    description: "We leverage our vast network to source the perfect materials and develop samples, ensuring every detail aligns with your vision.",
  },
  {
    icon: <Package />,
    title: 'Production & QA',
    description: "Our on-the-ground teams monitor production closely with rigorous quality checks at every stage to guarantee your standards.",
  },
  {
    icon: <Handshake />,
    title: 'Logistics & Delivery',
    description: "We handle all complexities of logistics and shipping, ensuring a smooth and timely delivery of your finished products to your doorstep.",
  },
];

export function BuyerJourney() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
             <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Process</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
                Your Journey to Success, Simplified
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We've streamlined the apparel sourcing process into a seamless, transparent, and efficient experience for our partners.
            </p>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-7 hidden h-px w-full max-w-3xl -translate-x-1/2 bg-border lg:block" aria-hidden="true" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-background text-primary ring-8 ring-background shadow-md">
                      {step.icon}
                  </div>
                  <h3 className="font-headline text-xl font-bold">{`Step ${index+1}`}</h3>
                  <h4 className="mt-1 text-lg font-semibold">{step.title}</h4>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

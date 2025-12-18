import { CheckCircle2, Users, ShieldCheck, Truck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const capabilitiesList = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Expert Merchandising',
    description:
      'Our experienced merchandisers work closely with you to translate your vision into reality, managing the entire product lifecycle.',
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    title: 'Rigorous Quality Assurance',
    description:
      'We implement multi-stage quality control processes to ensure every product meets the highest standards of excellence.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Ethical & Sustainable Sourcing',
    description:
      'We are committed to responsible sourcing, partnering with factories that adhere to strict ethical and environmental standards.',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Streamlined Logistics',
    description:
      'From factory floor to your warehouse, we manage all logistics, ensuring timely and cost-effective delivery of your goods.',
  },
];

export function Capabilities() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
           <span className="text-primary font-semibold uppercase tracking-wider font-headline">What We Do Best</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
            Our Core Capabilities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide an end-to-end solution, covering every aspect of the
            apparel supply chain with precision and expertise.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilitiesList.map((capability, index) => (
            <div key={index} className="flex items-start gap-6 p-6">
              <div className="flex-shrink-0 mt-1">{capability.icon}</div>
              <div>
                <h3 className="font-headline text-xl font-bold">
                  {capability.title}
                </h3>
                <p className="pt-2 text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

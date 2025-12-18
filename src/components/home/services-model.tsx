import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Factory, GitFork } from 'lucide-react';

const serviceModels = [
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: 'Full-Service Manufacturing',
    description: 'Leverage our state-of-the-art manufacturing facilities. We manage the entire production process from yarn to finished garment, ensuring quality, efficiency, and timely delivery for large-scale orders.',
  },
  {
    icon: <GitFork className="h-10 w-10 text-primary" />,
    title: 'Flexible Sourcing Agent',
    description: 'Utilize our extensive network of trusted partner factories. We act as your on-the-ground sourcing team, finding the perfect match for your specific product needs, whether it\'s a niche item or a smaller batch.',
  },
];

export function ServicesModel() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
           <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Services</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
            Flexible Models for Your Business
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We adapt to your business needs, offering both direct manufacturing and agile sourcing solutions to bring your apparel concepts to life.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceModels.map((model, index) => (
            <Card key={index} className="p-8 text-center shadow-lg hover:shadow-xl transition-shadow group border-2 border-transparent hover:border-primary/50">
                <CardHeader className="items-center">
                    <div className="mb-6 bg-primary/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {model.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">{model.title}</CardTitle>
                    <CardDescription className="pt-4 text-base">{model.description}</CardDescription>
                </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

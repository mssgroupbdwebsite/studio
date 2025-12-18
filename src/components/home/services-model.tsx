
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Factory, GitFork } from 'lucide-react';

const serviceModels = [
  {
    icon: <Factory className="h-8 w-8 text-primary" />,
    title: 'Full-Service Manufacturing Partner',
    description: 'Leverage our state-of-the-art manufacturing facilities. We manage the entire production process from yarn to finished garment, ensuring quality, efficiency, and timely delivery for large-scale orders.',
  },
  {
    icon: <GitFork className="h-8 w-8 text-primary" />,
    title: 'Flexible Sourcing Agent',
    description: 'Utilize our extensive network of trusted partner factories. We act as your on-the-ground sourcing team, finding the perfect match for your specific product needs, whether it\'s a niche item or a smaller batch.',
  },
];

export function ServicesModel() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary tracking-tight">
            Our Flexible Service Models
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We adapt to your business needs, offering both direct manufacturing and agile sourcing solutions to bring your apparel concepts to life.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceModels.map((model, index) => (
            <Card key={index} className="p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="items-center">
                    <div className="mb-4">
                        {model.icon}
                    </div>
                    <CardTitle className="font-headline text-xl">{model.title}</CardTitle>
                    <CardDescription className="pt-2">{model.description}</CardDescription>
                </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

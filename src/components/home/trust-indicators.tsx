
import { Globe, Award, ShieldCheck, TrendingUp } from 'lucide-react';

const indicators = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    text: 'Global Sourcing Network',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    text: 'Decades of Experience',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    text: 'Commitment to Quality',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    text: 'Trusted by Leading Brands',
  },
];

export function TrustIndicators() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 justify-items-center py-12">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-center"
            >
              {indicator.icon}
              <p className="font-semibold text-sm text-secondary-foreground">
                {indicator.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

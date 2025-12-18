
import { Globe, Award, ShieldCheck, TrendingUp } from 'lucide-react';

const indicators = [
  {
    icon: <Globe className="h-8 w-8 text-muted-foreground" />,
    text: 'Global Sourcing Network',
  },
  {
    icon: <Award className="h-8 w-8 text-muted-foreground" />,
    text: 'Decades of Experience',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-muted-foreground" />,
    text: 'Commitment to Quality',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-muted-foreground" />,
    text: 'Trusted by Leading Brands',
  },
];

export function TrustIndicators() {
  return (
    <section className="bg-muted/30 border-y">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 justify-items-center py-8">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              {indicator.icon}
              <p className="font-semibold text-sm text-muted-foreground">
                {indicator.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

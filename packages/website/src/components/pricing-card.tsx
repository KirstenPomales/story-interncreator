import { Sparkle } from "lucide-react";

import { Card } from "@/components/ui/card";
import { PricingFeatureItem } from "@/components/pricing-feature-item";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  isMostPopular: boolean;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  className?: string;
}

export function PricingCard({
  name,
  description,
  price,
  isMostPopular,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col justify-between gap-7 rounded-2xl border px-7 py-8 shadow-none",
        className,
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h4 className="font-heading text-2xl font-semibold text-foreground">
            {name}
          </h4>
          {isMostPopular === true && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-center text-sm font-semibold text-primary-foreground">
              <Sparkle size={16} className="fill-primary-foreground" />
              Popular
            </span>
          )}
        </div>
        <div>
          <span className="font-heading text-5xl font-semibold">{price}</span>
          <span className="ml-2 font-heading text-xl font-semibold text-muted-foreground"></span>
        </div>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col gap-8">
        <ul className="space-y-2">
          <PricingFeatureItem text={feature1} />
          <PricingFeatureItem text={feature2} />
          <PricingFeatureItem text={feature3} />
          <PricingFeatureItem text={feature4} />
          <PricingFeatureItem text={feature5} />
        </ul>
        <Button asChild size="lg" className="gap-2 font-semibold">
          <a
            href="https://tally.so/r/mDZZy5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the waitlist
          </a>
        </Button>
      </div>
    </Card>
  );
}

import { Zap, LineChart, DollarSign, Sparkle } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="relative mx-2 flex flex-col items-center gap-6 border border-t-0 pt-20 md:mx-10">
          <Badge variant="outline" className="bg-card text-secondary-foreground rounded-md pl-1">
            <span className="bg-primary text-primary-foreground mr-2 rounded-sm px-1.5 py-0.5">
              New
            </span>
            Automate your socials →
          </Badge>
          <h1 className="font-heading max-w-3xl text-balance text-center text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Meet your AI marketing intern
          </h1>
          <p className="text-muted-foreground max-w-md text-center text-lg sm:text-xl">
            Automate your community engagement on X with The Intern: your fully autonamous marketing
            assistant
          </p>
          <div className="mb-16 flex grid-cols-2 items-center gap-4">
            <Button asChild size="lg" className="gap-2 font-semibold">
              <a href="/form" rel="noopener noreferrer">
                Create Your Intern
              </a>
            </Button>
          </div>
        </div>
        <div className="bg-primary mb-20 rounded-2xl p-5">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="w-full">
              <Image
                alt="Feature 1"
                src="/images/intern-hero-1.png"
                width={400}
                height={250}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                alt="Feature 2"
                src="/images/intern-hero-2.png"
                width={400}
                height={250}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                alt="Feature 3"
                src="/images/intern-hero-3.png"
                width={400}
                height={250}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

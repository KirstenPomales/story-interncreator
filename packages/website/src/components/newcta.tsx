import { Zap, LineChart, DollarSign, Sparkle } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Newcta() {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="relative mx-2 flex flex-col items-center gap-6 border border-t-0 pt-20 md:mx-10">
          <h3 className="max-w-3xl text-balance text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Your intern is excited to meet you!
          </h3>
          <p className="max-w-md text-center text-lg text-muted-foreground sm:text-xl">
            Onboard an intern and boost your organic engagement on X
          </p>
          <div className="mb-16 flex grid-cols-2 items-center gap-4">
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
        </div>
      </div>
    </section>
  );
}

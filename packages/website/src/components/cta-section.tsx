import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center rounded-2xl border bg-card px-10 py-20 md:flex-row">
          <div className="flex basis-3/5 flex-col items-start gap-6">
            <h2 className="text-left font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              The smarter way to grow your startup
            </h2>
            <p className=" text-left text-lg text-muted-foreground sm:text-xl">
              Analyze with ease. Export to dashboards and custom insights&nbsp;
              reports. Visualize without limits.
            </p>
            <Button
              size="lg"
              asChild={false}
              variant="default"
              className="cursor-pointer gap-2 font-semibold"
            >
              <Link href="#">Get Started</Link>
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

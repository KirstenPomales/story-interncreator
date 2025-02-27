import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Callout() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-x-6 gap-y-14 rounded-2xl border bg-card px-10 py-20 md:flex-row">
          <div className="flex basis-3/5 flex-col items-start gap-6">
            <h2 className="max-w-2xl text-balance text-left font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              An embedded community member
            </h2>
            <p className="max-w-lg text-left text-lg text-muted-foreground sm:text-xl">
              Your intern creates thoughtful engagement with existing community
              members and brand accounts. They&apos;re a valued part of your
              community: with a customizable personality and knowledge of
              current events.
            </p>
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
          <div className="relative basis-2/5 rounded-2xl ">
            <Image
              alt="Image"
              src="/images/community-things.png"
              width={1000}
              height={698}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

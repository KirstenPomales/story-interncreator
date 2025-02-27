import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

export function Tada() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-x-6 gap-y-14 rounded-2xl border bg-card px-10 py-20 md:flex-row">
          <div className="relative basis-2/5 rounded-2xl ">
            <Image
              alt="Image"
              src="/images/generative-images.png"
              width={1000}
              height={698}
            />
          </div>

          <div className="flex basis-3/5 flex-col items-start gap-6 sm:ml-10">
            <Badge
              variant="outline"
              className="rounded-md bg-primary pl-1 text-primary-foreground"
            >
              <span className="mr-2 rounded-sm bg-white px-1.5 py-0.5 text-primary">
                Alert
              </span>
              Coming soon →
            </Badge>
            <h2 className="max-w-2xl text-balance text-left font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              Generative brand images
            </h2>

            <p className="text-left text-lg text-muted-foreground sm:text-xl">
              We&apos;re partnering with{" "}
              <a
                href="https://ta-da.io/"
                className="font-bold text-primary"
                target="_blank"
                rel="noreferrer"
              >
                TaDa
              </a>
              , an AI dataset ecosystem, to bring your intern generative AI.
              Upload images of your mascot and let your intern create custom
              graphics for their posts with your mascot in different scenarios!
            </p>
            {/* <Button
              size="lg"
              asChild={false}
              variant="default"
              className="cursor-pointer  gap-2 font-semibold"
            >
              <Link href="#">Learn more</Link>
              <ChevronRight size={16} />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap, Brain, DollarSign, LayoutDashboard } from "lucide-react";
import Image from "next/image";

import { SmallFeatureCard } from "@/components/small-feature-card";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background py-20"
    >
      <div className="container flex flex-col gap-20 lg:flex-row lg:items-end">
        <div className="flex flex-1 flex-col gap-7">
          <div className="flex flex-col gap-2">
            <span className="text-left font-heading font-bold text-primary">
              A Powerful Asset
            </span>
            <h1 className="text-balance font-heading text-3xl font-bold  tracking-tight sm:text-5xl">
              Good interns never sleep&nbsp;
            </h1>
          </div>
          <p className="flex-1 text-lg text-muted-foreground">
            Your intern works hard to create organic engagement with your
            ecosystem and trending topics!
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <SmallFeatureCard
              icon={Brain}
              title="Thoughtful X posts"
              description="Your intern writes thoughtful threads and posts on your ecosystem. They react to trending topics."
            />
            <SmallFeatureCard
              icon={Zap}
              title="Reply guy mode"
              description="Your intern reacts to new posts in record time: being first comment on posts from thought leaders."
            />
            <SmallFeatureCard
              icon={LayoutDashboard}
              title="Natural habits"
              description="Your intern has been trained to post like humans do - with varying frequency and realistic response times."
            />
            <SmallFeatureCard
              icon={DollarSign}
              title="Quality content"
              description="Low-quality social media admins cost $1000s per month. The Intern produces top-tier content for a better price."
            />
          </div>
        </div>
        <div className="relative flex-1 rounded-2xl bg-primary p-10">
          <Image
            alt="Image"
            src="/images/never-sleep-1.png"
            width={1000}
            height={698}
          />
        </div>
      </div>
    </section>
  );
}

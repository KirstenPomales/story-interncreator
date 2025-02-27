import { FeatureCard } from "@/components/feature-card";

export function Features() {
  return (
    <section id="about" className="relative bg-background py-20">
      <div className="container mx-auto flex flex-col gap-12">
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <h2 className="flex-1 text-balance text-left font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
            Built for <br></br>busy teams
          </h2>
          <p className="flex-1 text-lg text-muted-foreground">
            Hiring social media managers and managing community advocates is
            time consuming. Automate your community engagement with The Intern.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          <FeatureCard
            image="/images/features-1.png"
            title="Configure your intern's personality & interests"
          />
          <FeatureCard
            image="/images/features-2.png"
            title="Choose specific topics & accounts to engage with"
          />
          <FeatureCard
            image="/images/features-3.png"
            title="Connect your intern to X, and watch them engage"
          />
        </div>
      </div>
    </section>
  );
}

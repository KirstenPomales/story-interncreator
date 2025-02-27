import { PricingCard } from "@/components/pricing-card";

export function Pricing() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center gap-6 container">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-primary text-center">Pricing</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance text-center sm:text-5xl max-w-2xl">
            Automate your marketing for less
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-lg text-center sm:text-xl">
          s
        </p>
        <div className="mt-7 grid w-full grid-cols-1 lg:grid-cols-2 gap-5">
          <PricingCard
            name="Junior Intern"
            price="$2000/month"
            feature1="Custom personality & interests"
            feature2="Unlimited posts"
            feature3="Unlimited replies"
            feature4="Trending news awareness"
            feature5="Manage one X account"
            description="For creating autonamous ambassadors for your community, to create organic engagement."
            isMostPopular
          />
          <PricingCard
            name="Senior Intern"
            price="Coming Soon"
            feature1="Optimized for personal & brand accounts"
            feature2="Priority support"
            feature3="Intern analytics"
            feature4="Generative images"
            feature5="Manage multiple X accounts"
            description="For managing brand accounts and personal X profiles, where you'd normally hire a social media manager."
            isMostPopular={false}
          />
          {/* <PricingCard
            name="Enterprise"
            price={99}
            feature1="Everything in Pro"
            feature2="Single sign-on"
            feature3="Custom SLA"
            feature4="Custom integrations"
            feature5="Custom reporting"
            description="For big companies and enterprises with high traffic and custom needs."
            isMostPopular={false}
          /> */}
        </div>
      </div>
    </section>
  );
}

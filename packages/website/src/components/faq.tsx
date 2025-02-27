import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FaqItem } from "@/components/faq-item";

export function Faq() {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-start gap-10 md:flex-row">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-primary">Faq</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              Frequently asked questions
            </h2>
          </div>
          <p className="mt-2 hidden max-w-2xl flex-1 text-lg text-muted-foreground">
            From freelancers to agencies, Divhunt is the best website builder
            for{" "}
          </p>
          {/* <Button className="mt-4 gap-2 font-semibold">
            <Users size={16} />
            Contact Us
          </Button> */}
        </div>
        <Accordion
          type="single"
          collapsible
          className="flex w-full max-w-3xl flex-col gap-4"
        >
          <FaqItem
            answer="Today, your intern can manage accounts on X. We will be adding more social media platforms in the future."
            question="What social media platforms can my intern manage accounts on?"
          />
          <FaqItem
            answer="We recommend giving your intern an account of it's own. Today The Intern is optimized as a third-party community member that engages with your brand and personal accounts. In the future, we will offer other packages that work well for managing personal and brand accounts."
            question="Can my intern post on behalf of my personal account?"
          />
          <FaqItem
            answer="To be considered for access to the private beta, please join the waitlist. We're considering teams on a weekly basis and will get back to you if you are selected."
            question="How can I join the private beta?"
          />
          <FaqItem
            answer="No technical skills are required! The process of creating your intern is simple, and can be done from The Intern platform."
            question="Do I need any technical skills to configure my intern?"
          />
          <FaqItem
            answer="We allow for custom personality configuration, or uploading an existing personality. Do you really love how a specific influencer or thought leader account posts? Upload it to your intern, and use that as a starter for their personality."
            question="How do I configure a personality for my intern?"
          />
          <FaqItem
            answer="We are activley working on automatic image generation. This feature will be released soon!"
            question="Can my intern post images or videos?"
          />
        </Accordion>
      </div>
    </section>
  );
}

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { FeaturesSection } from "@/components/features-section-2";
import { Faq } from "@/components/faq";
import { Newcta } from "@/components/newcta";
import { Callout } from "@/components/callout";
import { Footer } from "@/components/footer";
import { Tada } from "@/components/tada";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Features />
      <Tada />

      <FeaturesSection />


      <Callout />
      <Faq />

   
      <Newcta />
      <Footer /> */}
    </>
  );
}

"use client";
import { Lightbulb, Settings, CheckCircle } from "lucide-react";
import Image from "next/image";

interface StepThreeProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

export default function StepThree({ formData, setFormData, onNext }: StepThreeProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/interns-story.png"
          alt="The Intern Banner"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Intellectual Property
      </div>
      <h2 className="text-2xl font-bold sm:text-3xl">Give Your Intern Ownership</h2>
      <p className=" font-bold">
        Each intern has their personality stored an IP Asset on Story Protocol, via a custom NFT.
        This enables your Intern to both own their personality, but also all of the content that
        they generate on X.{" "}
      </p>

      <button
        type="button"
        onClick={onNext}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Mint NFT & IP Asset
      </button>
    </div>
  );
}

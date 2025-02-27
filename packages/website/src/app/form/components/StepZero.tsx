"use client";
import { Lightbulb, Settings, CheckCircle } from "lucide-react";
import Image from "next/image";

interface StepZeroProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

export default function StepZero({ formData, setFormData, onNext }: StepZeroProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/interns-together.webp"
          alt="The Intern Banner"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <h2 className="text-2xl font-bold sm:text-3xl">Create Your Intern</h2>
      <p className=" font-bold">
        Welcome to The Intern: your launchpad for fully autonamous X interns.{" "}
      </p>
      <p className="">
        Your intern can post, reply, and make informed commentary on X to boost engagement for your
        ecosystem.
      </p>

      <button
        type="button"
        onClick={onNext}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Get Started
      </button>
    </div>
  );
}

"use client";
import { Lightbulb, Settings, CheckCircle } from "lucide-react";
import Image from "next/image";

interface StepFiveProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

export default function StepFive({ formData, setFormData, onNext }: StepFiveProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/interns-awake.webp"
          alt="The Intern Banner"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="text-sm font-bold uppercase tracking-wide text-blue-600">Success!</div>
      <h2 className="text-2xl font-bold sm:text-3xl">Your Intern Is Awake!</h2>
      <p className=" font-bold">
        Your intern is live on X. They Should start posting in the next few minutes. Get ready to
        say hello!{" "}
      </p>

      <a
        href="https://x.com/AiMickie68623"
        target="_blank"
        rel="noopener noreferrer"
        className="m-2 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        View My Intern on X
      </a>
      <a
        href="/"
        rel="noopener noreferrer"
        className="m-2 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
}

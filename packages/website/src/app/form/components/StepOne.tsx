"use client";
import Image from "next/image";

interface StepOneProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

export default function StepOne({ formData, setFormData, onNext }: StepOneProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/interns-personality.webp"
          alt="The Intern Banner"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Get to know your intern!
      </div>
      <h2 className="text-2xl font-bold sm:text-3xl">Configure Intern Personality</h2>
      <p className=" font-bold">
        Your Intern will be a key part of your community. How should they be? Funny? A shitposter?
        Technically savvy?{" "}
      </p>
      <p className="">
        Please paste your preffered personality info in Json format below. Or, start with a template
        here:
      </p>
      <p className="text-primary underline">
        <a
          href="https://github.com/elizaOS/characterfile/blob/main/examples/example.character.json"
          target="_blank"
        >
          📝 Download a Template Character File
        </a>
      </p>

      <div className="space-y-2">
        <label htmlFor="name" className="block font-bold">
          Your Intern&apos;s Character.Json File
        </label>
        <textarea
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="min-h-[200px] w-full rounded border bg-gray-50 p-2 font-mono"
          placeholder='{
  "name": "Your Intern",
  "personality": "..."
}'
          spellCheck="false"
        />
      </div>

      <button
        type="button"
        onClick={onNext}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
}

"use client";
import Image from "next/image";

interface StepTwoProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function StepTwo({ formData, setFormData, onNext, onPrevious }: StepTwoProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/interns-tweeting.webp"
          alt="The Intern Banner"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Engagement Strategy
      </div>
      <h2 className="text-2xl font-bold sm:text-3xl">Who Should Your Inter Known?</h2>
      <p className="font-bold">
        Introduce your intern to your team! Add the X handles of team members or accounts you&apos;d
        like your intern to engage with.
      </p>
      <p className="text-sm text-gray-600">Enter multiple handles by seperating them by a comma.</p>

      <div className="space-y-2">
        <label htmlFor="handles" className="block font-bold">
          X Handles
        </label>
        <textarea
          id="handles"
          value={formData.handles}
          onChange={(e) => setFormData({ ...formData, handles: e.target.value })}
          className="min-h-[200px] w-full rounded border bg-gray-50 p-2 font-mono"
          placeholder="@vitalik, @dabit, @0xmert"
          spellCheck="false"
        />
      </div>

      <div className="flex gap-4">
        {/* <button
          type="button"
          onClick={onPrevious}
          className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Previous
        </button> */}
        <button
          type="button"
          onClick={onNext}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

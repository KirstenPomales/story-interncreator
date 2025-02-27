"use client";
import Image from "next/image";
interface StepFourProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function StepFour({ formData, setFormData, onNext }: StepFourProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/login-x.png"
          alt="The Intern Banner"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <h2 className="text-2xl font-bold sm:text-3xl">Help Your Intern Log In to X</h2>
      <p className="text-sm text-gray-600">
        Please log into the account that you want your intern to manage. We reccomend making a new X
        account for your intern to post from.
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="identifier" className="block font-bold">
            Email or Handle
          </label>
          <input
            id="identifier"
            type="text"
            value={formData.identifier || ""}
            onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
            className="w-full rounded border bg-gray-50 p-2 font-mono"
            placeholder="@storyintern"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block font-bold">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password || ""}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full rounded border bg-gray-50 p-2 font-mono"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onNext}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}

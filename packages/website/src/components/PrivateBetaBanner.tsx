"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface BannerProps {
  message: string;
  link?: {
    text: string;
    href: string;
  };
}

export const PrivateBetaBanner: React.FC<BannerProps> = ({ message, link }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground sticky top-0 z-50 px-4 py-3 text-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex grow items-center justify-center">
          <p className="text-sm font-medium">
            👀 We&apos;re building The Intern for real! →
            {link && (
              <Link href={link.href} className="hover:text-primary-foreground/90 ml-2 underline">
                {link.text}
              </Link>
            )}
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-primary-foreground/90 hover:text-primary-foreground"
        ></button>
      </div>
    </div>
  );
};

export const defaultBannerProps: BannerProps = {
  message: "The Intern is in private beta! Join the waitlist for early access.",
  link: {
    text: "Join waitlist",
    href: "/waitlist",
  },
};

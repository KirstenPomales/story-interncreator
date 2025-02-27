import Link from "next/link";
import { Zap } from "lucide-react";

import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem } from "@/components/mobile-nav-item";
import Image from "next/image";

export function Header() {
  return (
    <header>
      <div className="container md:mt-4">
        <div className="mx-2 border-x px-6 md:mx-10">
          <div className="flex w-full items-center justify-between border-b py-4">
            <div className="flex-1">
              <Link href="/" className="flex items-center gap-3">
                <Image alt="Image" src="/images/the-intern-hat.png" width={50} height={50} />
                <Image alt="Image" src="/images/theinternblue.png" width={100} height={100} />
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-center gap-6">
              <nav className="hidden items-center justify-end gap-10 md:flex">
                {/* <NavItem href="#about" label="About" />
                <NavItem href="#features" label="Features" /> */}
                {/* <NavItem href="@pricing" label="Pricing" /> */}
                {/* <NavItem href="/form" label="Create an Intern" /> */}
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-end gap-10">
              <div className="hidden items-center gap-2 md:flex">
                {/* <Button asChild variant="ghost" className="font-semibold">
                  <Link href="#" className="cursor-pointer">
                    Log In
                  </Link>
                </Button> */}
                <Button asChild size="lg" className="gap-2 font-semibold">
                  <a href="/form" rel="noopener noreferrer">
                    Create an Intern
                  </a>
                </Button>
              </div>
            </div>
            <MobileNavbar>
              <div className="bg-background text-foreground container mt-6 rounded-b-lg py-4 shadow-xl">
                <nav className="flex flex-col gap-1 pt-2">
                  {/* <MobileNavItem href="#about" label="About" />
                  <MobileNavItem href="#features" label="Features" /> */}
                  {/* <MobileNavItem href="@pricing" label="Pricing" /> */}
                  {/* <MobileNavItem href="https://x.com/theinterndotfun" label="Socials" /> */}
                  <Button asChild size="lg" className="gap-2 font-semibold">
                    <a href="/form" rel="noopener noreferrer">
                      Create an Intern
                    </a>
                  </Button>
                </nav>
              </div>
            </MobileNavbar>
          </div>
        </div>
      </div>
    </header>
  );
}

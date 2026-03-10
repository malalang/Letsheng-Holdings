'use client';

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavLink = ({
  href,
  children,
  onLinkClick,
}: {
  href: string;
  children: React.ReactNode;
  onLinkClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onLinkClick}
    className="block md:inline-block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary/80 backdrop-blur-lg border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Letsheng Holdings Logo"
              width={48}
              height={48}
              className="rounded-full shadow-md"
            />
            <span className="text-2xl font-bold text-white hidden sm:block">
              Letsheng Holdings
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink href="/" onLinkClick={onLinkClick}>
              Home
            </NavLink>
            <NavLink href="/properties" onLinkClick={onLinkClick}>
              Estates
            </NavLink>
            <NavLink href="/branding" onLinkClick={onLinkClick}>
              Branding
            </NavLink>
            <NavLink href="/about" onLinkClick={onLinkClick}>
              About
            </NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-primary text-secondary font-bold hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  className="text-white border-white/50 hover:bg-white/10 hover:text-white"
                >
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-secondary/80 backdrop-blur-lg text-white border-l-primary/30"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 pt-10">
                  <NavLink href="/" onLinkClick={onLinkClick}>
                    Home
                  </NavLink>
                  <NavLink href="/properties" onLinkClick={onLinkClick}>
                    Estates
                  </NavLink>
                  <NavLink href="/branding" onLinkClick={onLinkClick}>
                    Branding
                  </NavLink>
                  <NavLink href="/about" onLinkClick={onLinkClick}>
                    About Us
                  </NavLink>
                  <Link href="/contact" className="mt-4">
                    <Button className="w-full bg-primary text-secondary font-bold hover:bg-primary/90">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

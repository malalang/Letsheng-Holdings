"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLink = ({ href, children, onLinkClick }: { href: string; children: React.ReactNode; onLinkClick: () => void }) => (
    <Link href={href}>
        <span onClick={onLinkClick} className="block md:inline-block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">
            {children}
        </span>
    </Link>
);

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const onLinkClick = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-brand-navy/80 backdrop-blur-lg border-b border-brand-gold/20 shadow-lg">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="bg-brand-gold text-brand-navy font-bold rounded-full h-12 w-12 flex items-center justify-center text-lg shadow-md">
                            LH
                        </div>
                        <span className="text-2xl font-bold text-white hidden sm:block">Letsheng Holdings</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-2">
                        <NavLink href="/" onLinkClick={onLinkClick}>Home</NavLink>
                        <NavLink href="/properties" onLinkClick={onLinkClick}>Estates</NavLink>
                        <NavLink href="/printing" onLinkClick={onLinkClick}>Printing</NavLink>
                        <NavLink href="/about" onLinkClick={onLinkClick}>About</NavLink>
                    </nav>
                    <div className="flex items-center gap-4">
                         <Link href="/contact" className="hidden md:block">
                           <Button className="bg-brand-gold text-brand-navy font-bold hover:bg-brand-gold/90">Contact Us</Button>
                        </Link>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="outline" size="icon" className="text-white border-white/50 hover:bg-white/10 hover:text-white">
                                    <Menu />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-brand-navy text-white border-l-brand-gold/30">
                                <div className="flex flex-col space-y-4 pt-10">
                                    <NavLink href="/" onLinkClick={onLinkClick}>Home</NavLink>
                                    <NavLink href="/properties" onLinkClick={onLinkClick}>Estates</NavLink>
                                    <NavLink href="/printing" onLinkClick={onLinkClick}>Printing</NavLink>
                                    <NavLink href="/about" onLinkClick={onLinkClick}>About Us</NavLink>
                                    <Link href="/contact" className="mt-4">
                                        <Button className="w-full bg-brand-gold text-brand-navy font-bold hover:bg-brand-gold/90">Contact Us</Button>
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

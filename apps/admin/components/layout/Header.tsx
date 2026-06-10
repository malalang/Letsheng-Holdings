"use client";

import {
  Archive,
  BookUser,
  Building2,
  CircleUser,
  Home,
  LogOut,
  Menu,
  Package2,
  PlusCircle,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { logout } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-secondary px-4 lg:h-[60px] lg:px-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col bg-secondary text-white"
        >
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              <Package2 className="h-6 w-6 text-primary" />
              <span className="sr-only">Letsheng Inc</span>
            </Link>
            <Link
              href="/dashboard"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              href="/dashboard/properties"
              onClick={() => setIsOpen(false)}
            >
              <Building2 className="h-4 w-4" /> Estates
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              href="/dashboard/tenants"
              onClick={() => setIsOpen(false)}
            >
              <BookUser className="h-4 w-4" />
              Tenants
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              href="/dashboard/branding"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="h-4 w-4" />
              Branding Shop
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              href="/dashboard/submissions"
              onClick={() => setIsOpen(false)}
            >
              <Archive className="h-4 w-4" />
              Submissions
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1"></div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Quick Add
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Create New</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href="/dashboard/properties/new"
              className="flex items-center w-full"
            >
              <Building2 className="h-4 w-4 mr-2" />
              Property
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/dashboard/branding/new"
              className="flex items-center w-full"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Branding Product
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => logout()}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;

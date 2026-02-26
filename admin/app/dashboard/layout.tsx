"use client";

import { Briefcase, LayoutDashboard, LogOut, Printer } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/admin/dashboard/properties",
    icon: Briefcase,
    label: "Properties",
  },
  {
    href: "/admin/dashboard/printing-orders",
    icon: Printer,
    label: "Print Orders",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-brand-navy text-white flex flex-col p-4 fixed h-full">
        <div className="text-center py-4 mb-8">
          <h1 className="text-2xl font-bold text-brand-Blue">LETSHENG</h1>
          <p className="text-sm text-gray-300">Admin Portal</p>
        </div>
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/admin/dashboard"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-brand-Blue text-brand-navy font-semibold"
                    : "hover:bg-white/10"
                }`}
              >
                <link.icon className="mr-3 h-5 w-5"></link.icon>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto">
          <Button
            className="w-full justify-start flex items-center"
            variant="ghost"
            onClick={() => {
              localStorage.removeItem("admin-token");
              window.location.href = "/admin/login";
            }}
          >
            <LogOut className="mr-3 h-5 w-5"></LogOut>
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-8 ml-64">{children}</main>
    </div>
  );
}

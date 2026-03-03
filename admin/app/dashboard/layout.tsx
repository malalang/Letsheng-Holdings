"use client";

import { Briefcase, LayoutDashboard, LogOut, Printer, FileText, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/dashboard/properties",
    icon: Briefcase,
    label: "Properties",
  },
  {
    href: "/dashboard/branding",
    icon: Palette,
    label: "Branding",
  },
  {
    href: "/dashboard/submissions",
    icon: FileText,
    label: "Submissions",
  },
  {
    href: "/dashboard/printing-orders",
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
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4 fixed h-full">
        <div className="text-center py-4 mb-8">
          <h1 className="text-2xl font-bold text-brand-navy">LETSHENG</h1>
          <p className="text-sm text-gray-500">Admin Portal</p>
        </div>
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/dashboard"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-brand-Blue text-white font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto">
          <Button
            className="w-full justify-start flex items-center text-gray-600 hover:bg-gray-100"
            variant="ghost"
            onClick={() => {
              // In a real app, you'd call an auth service here.
              localStorage.removeItem("admin-token");
              window.location.href = "/login";
            }}
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-8 ml-64">{children}</main>
    </div>
  );
}

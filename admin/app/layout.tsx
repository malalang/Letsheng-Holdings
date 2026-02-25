import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Placeholder for Lucide icons - in a real scenario, you'd import these
const Icon = ({ name, className }: { name: string; className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {/* Basic placeholder icon shape - replace with actual Lucide icon paths */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export const metadata: Metadata = {
  title: "Letsheng Holdings | Admin Portal",
  description: "Administrative Command Center for Letsheng Holdings",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <div className="flex h-screen">
          {/* Glassmorphic Sidebar */}
          <aside className="w-64 bg-brand-navy text-white flex flex-col shrink-0 backdrop-blur-lg bg-opacity-90 border-r border-brand-gold/20">
            <div className="flex items-center justify-center h-20 border-b border-brand-gold/20">
              <div className="bg-brand-gold text-brand-navy font-bold rounded-full h-10 w-10 flex items-center justify-center text-md">
                LH
              </div>
              <h1 className="ml-3 text-xl font-bold">Admin Portal</h1>
            </div>

            <nav className="flex-grow px-4 py-6 space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
              >
                <Icon name="LayoutDashboard" className="h-5 w-5 mr-3" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/properties"
                className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
              >
                <Icon name="Building2" className="h-5 w-5 mr-3" />
                Properties
              </Link>
              <Link
                href="/dashboard/printing-orders"
                className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
              >
                <Icon name="Printer" className="h-5 w-5 mr-3" />
                Printing Orders
              </Link>
            </nav>

            <div className="px-4 py-6 border-t border-brand-gold/20">
              <Button
                asChild
                className="w-full justify-center border-2 border-brand-gold text-brand-gold px-4 py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
              >
                <Link href="/login">Logout</Link>
              </Button>
            </div>
          </aside>

          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header with Breadcrumbs and User Profile */}
            <header className="bg-white shadow-sm border-b border-gray-200 z-10">
              <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div>
                  {/* Breadcrumb would be dynamically generated here */}
                  <p className="text-sm text-gray-500">Dashboard /</p>
                  <h2 className="text-xl font-bold text-brand-navy">
                    Overview
                  </h2>
                </div>
                <div className="flex items-center">
                  <div className="relative">
                    <Icon name="Bell" className="h-6 w-6 text-gray-500" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-brand-gold rounded-full"></span>
                  </div>
                  <div className="ml-6 flex items-center">
                    <img
                      src="/path-to-admin-avatar.jpg"
                      alt="Admin User"
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-brand-navy">
                        Admin User
                      </p>
                      <p className="text-xs text-gray-500">
                        System Administrator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-auto p-6 bg-gray-50">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

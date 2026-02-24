import "./globals.css";
import type React from "react";

export const metadata = {
  title: "Letsheng Holdings - Admin",
  description: "Admin Dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex h-screen">
          {/* Sidebar Navigation - Command Center Style */}
          <aside className="w-64 bg-brand-navy text-brand-white shadow-xl flex flex-col">
            <div className="px-6 py-8 border-b border-opacity-20 border-brand-gold">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-10 w-10 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-brand-navy">
                  LH
                </div>
                <h1 className="text-xl font-bold text-brand-white">Letsheng</h1>
              </div>
              <p className="text-xs text-brand-gold font-semibold">
                ADMIN DASHBOARD
              </p>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
              <a
                href="/dashboard"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-brand-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                Dashboard
              </a>
              <a
                href="/dashboard/estates"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-brand-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                Estates
              </a>
              <a
                href="/dashboard/orders"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-brand-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                Orders
              </a>
              <a
                href="/dashboard/users"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-brand-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                Users
              </a>
            </nav>

            <div className="px-6 py-4 border-t border-opacity-20 border-brand-gold">
              <a
                href="/login"
                className="block w-full px-4 py-2 rounded-lg text-sm font-medium text-brand-navy bg-brand-gold hover:opacity-90 transition-opacity text-center"
              >
                Logout
              </a>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="bg-brand-white border-b border-brand-muted px-8 py-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-brand-navy">
                  Control Center
                </h2>
                <div className="text-sm text-brand-navy opacity-70">
                  Welcome, Administrator
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-auto bg-brand-muted px-8 py-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Letsheng Holdings",
  description: "Building Spaces. Creating Impressions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="bg-brand-navy text-brand-white shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-brand-navy">
                LH
              </div>
              <h1 className="text-2xl font-bold text-brand-white">
                Letsheng Holdings
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-sm font-medium text-brand-white hover:text-brand-gold transition-colors"
              >
                Home
              </a>
              <a
                href="/properties"
                className="text-sm font-medium text-brand-white hover:text-brand-gold transition-colors"
              >
                Estates
              </a>
              <a
                href="/printing"
                className="text-sm font-medium text-brand-white hover:text-brand-gold transition-colors"
              >
                Printing
              </a>
              <a
                href="/about"
                className="text-sm font-medium text-brand-white hover:text-brand-gold transition-colors"
              >
                About
              </a>
              <button
                type="button"
                className="bg-brand-gold text-brand-navy px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Contact
              </button>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto py-8 px-4">{children}</main>

        <footer className="border-t border-brand-muted bg-brand-muted mt-16">
          <div className="max-w-6xl mx-auto text-center py-8 text-sm text-brand-navy">
            <p>
              © {new Date().getFullYear()} Letsheng Holdings. All rights
              reserved.
            </p>
            <p className="mt-2 text-xs opacity-70">
              Building Spaces. Creating Impressions.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

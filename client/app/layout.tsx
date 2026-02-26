import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Letsheng Holdings | Premium Estates & Corporate Branding",
  description:
    "Your strategic partner for premium residential estates and high-fidelity corporate branding. We build environments and create identities that empower success.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50/80 text-gray-800`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 md:px-8 py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

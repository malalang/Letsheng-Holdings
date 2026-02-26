import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Letsheng Holdings | Premium Estates & Corporate Branding",
  description:
    "Your strategic partner for premium residential estates and high-fidelity corporate branding. We build environments and create identities that empower success.",
};

const WhatsAppButton = () => (
  <Link
    href="https://wa.me/27763489454"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
    style={{ backgroundColor: '#49b3e0' }}
  >
    <FaWhatsapp className="h-8 w-8 text-white" />
  </Link>
);


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
        <WhatsAppButton />
      </body>
    </html>
  );
}

import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/toaster";
import { businessInfo } from "@/lib/business";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: businessInfo.seoTitle,
    template: `%s | ${businessInfo.name}`,
  },
  description: businessInfo.seoDescription,
  metadataBase: new URL(businessInfo.domain),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: businessInfo.domain,
    siteName: businessInfo.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WhatsAppButton = () => (
  <Link
    href={businessInfo.whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
    style={{ backgroundColor: "#49b3e0" }}
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
          <main className="flex-grow container mx-auto px-2 md:px-8 py-12">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}

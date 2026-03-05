import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Admin Command Center | Letsheng Holdings",
    template: "%s | Letsheng Holdings",
  },
  description: "Manage properties, printing orders, and system settings.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://your-domain.com",
    siteName: "Letsheng Holdings",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={cn(
          "h-full bg-brand-white font-sans antialiased",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}

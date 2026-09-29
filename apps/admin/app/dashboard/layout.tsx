import type { Metadata, Viewport } from "next";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import {
  SidebarInset as Inset,
  SidebarProvider as Provider,
} from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Portfolio performance and operational overview for Letsheng Holdings.",
};

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <Sidebar />
      <Inset className="min-w-0">
        <Header />
        <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </Inset>
    </Provider>
  );
}

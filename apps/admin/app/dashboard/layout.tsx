import { createSupabaseServerClient } from "@letsheng-holdings/supabase/server";
import type { Metadata, Viewport } from "next";

import Header, { type AdminUser } from "@/components/layout/Header";
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
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The proxy has already redirected anyone without a session or admin access
  // away from /dashboard, so the user here is always present and permitted. The
  // read is server-side so the header's identity block is rendered, not
  // hydrated, and so the user menu's accessible name is a real name.
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const adminUser: AdminUser = {
    email: user?.email ?? "",
    name:
      (user?.user_metadata?.full_name as string | undefined) ||
      (user?.user_metadata?.name as string | undefined) ||
      user?.email ||
      "Admin",
    avatarUrl:
      (user?.user_metadata?.avatar_url as string | undefined) ??
      (user?.user_metadata?.profile_image as string | undefined),
  };

  return (
    <Provider>
      <Sidebar />
      <Inset className="min-w-0">
        <Header user={adminUser} />
        <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </Inset>
    </Provider>
  );
}

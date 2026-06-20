import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { SidebarInset as Inset, SidebarProvider as Provider } from "@/components/ui/sidebar";

export const dynamic = "force-dynamic";

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
        <main className="flex-1 overflow-x-hidden p-4 sm:p-5 lg:p-6">
          {children}
        </main>
      </Inset>
    </Provider>
  );
}

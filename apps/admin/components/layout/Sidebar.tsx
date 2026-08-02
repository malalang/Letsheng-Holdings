"use client";

import {
  Archive,
  BookUser,
  Building2,
  Home,
  Package2,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar as Shell,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from 'next/link';
const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/dashboard/properties", icon: Building2, label: "Estates" },
  { href: "/dashboard/tenants", icon: BookUser, label: "Tenants" },
  { href: "/dashboard/payments", icon: Package2, label: "Payments" },
  { href: "/dashboard/branding", icon: ShoppingCart, label: "Branding Shop" },
  { href: "/dashboard/submissions", icon: Archive, label: "Submissions" },
];

function isActivePath(pathname: string, href: string) {
  return href === "/dashboard" ? pathname === href : pathname.startsWith(href);
}

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <Shell variant="inset" collapsible="icon" className="z-30">
      <SidebarHeader className="group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center"
        >
          <Image
            src="/logo.jpg"
            alt="Letsheng Holdings logo"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 rounded-full object-cover shadow-md"
            priority
          />
          <span className="text-lg font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            Letsheng Admin
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={isActivePath(pathname, item.href)}
                className="w-full justify-start transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[active=true]:font-semibold"
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <Link href="/about"  target="_blank" rel="noopener noreferrer">Emails</Link>
        </SidebarMenu>
      </SidebarContent>
    </Shell>
  );
};

export default Sidebar;

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
import {
  Sidebar as Shell,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/dashboard/properties", icon: Building2, label: "Estates" },
  { href: "/dashboard/tenants", icon: BookUser, label: "Tenants" },
  { href: "/dashboard/payments", icon: Package2, label: "Payments" },
  { href: "/dashboard/branding", icon: ShoppingCart, label: "Branding Shop" },
  { href: "/dashboard/submissions", icon: Archive, label: "Submissions" },
];

const Sidebar = () => {
  return (
    <Shell variant="inset" collapsible="icon" className="z-30">
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Letsheng Holdings logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover shadow-md"
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
              <SidebarMenuButton asChild className="w-full justify-start">
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Shell>
  );
};

export default Sidebar;

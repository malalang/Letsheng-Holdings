"use client";

import { ChevronDown, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { logout } from "@/app/login/actions";
import { CommandMenu } from "@/components/layout/CommandMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { breadcrumbsFor } from "@/lib/admin-nav";

/**
 * The identity the server layout resolved. Kept to the fields the menu renders
 * so the server-to-client boundary stays small.
 */
export type AdminUser = {
  email: string;
  name: string;
  avatarUrl?: string;
};

function getInitials(name: string) {
  return (
    name
      .split(/[\s._-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("") || "AD"
  );
}

/**
 * The admin header.
 *
 * One row, three zones, in order: trigger + breadcrumb, command trigger, then the
 * contextual action and the user menu. Height reads `--header-height` so the bar
 * and the sidebar sheet cannot drift. Sign-out lives here and only here. See
 * `docs/ARCHITECTURE/frontend-blueprint/02-admin-ui-grammar/05-admin-header-standard.md`.
 */
const Header = ({ user }: { user: AdminUser }) => {
  const pathname = usePathname();
  const crumbs = React.useMemo(() => breadcrumbsFor(pathname), [pathname]);

  // Below the mobile breakpoint keep the last two segments; the parent stays
  // reachable through the sidebar Sheet, so truncation costs nothing.
  const visibleCrumbs = crumbs.length > 2 ? crumbs.slice(-2) : crumbs;

  const initials = getInitials(user.name || user.email);

  return (
    <header className="sticky top-0 z-20 flex h-(--header-height) items-center gap-2 border-b bg-background px-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-2">
        <SidebarTrigger className="-ml-1 size-11 sm:size-8" />
        <Separator orientation="vertical" className="mr-2 hidden h-4 sm:block" />

        {visibleCrumbs.length > 0 ? (
          <Breadcrumb className="min-w-0">
            <BreadcrumbList>
              {visibleCrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {crumb.isLast ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={crumb.href}>{crumb.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < visibleCrumbs.length - 1 ? (
                    <BreadcrumbSeparator />
                  ) : null}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        ) : null}
      </div>

      {/* Zone 2 is the only flexible zone: it shrinks before the breadcrumb or the
          sign-out do, because a truncated crumb is more recoverable than a
          missing sign-out. */}
      <div className="ml-auto flex min-w-0 flex-1 justify-end gap-2 sm:justify-center">
        <CommandMenu />
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              aria-label={user.name}
              className="inline-flex size-11 items-center justify-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Avatar className="h-8 w-8 border">
                {user.avatarUrl ? (
                  <AvatarImage src={user.avatarUrl} alt="" />
                ) : null}
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <span className="hidden max-w-32 truncate text-sm font-medium md:inline">
                {user.name}
              </span>
              <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel className="font-normal">
              <span className="block truncate text-sm font-medium">
                {user.name}
              </span>
              <span className="block truncate text-xs text-muted-foreground">
                {user.email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* Not `DropdownMenuItem`s: these have no destination yet, and a
                focusable row that does nothing on activation is a promise the
                menu cannot keep. They stay as inert muted rows until the routes
                exist, at which point they become real items. */}
            <p className="px-2 py-1.5 text-sm text-muted-foreground">Settings</p>
            <p className="px-2 py-1.5 text-sm text-muted-foreground">Support</p>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => {
                void logout();
              }}
              className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;

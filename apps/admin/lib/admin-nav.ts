import {
  Archive,
  BookUser,
  Building2,
  Home,
  Mail,
  Package2,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export type AdminNavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  /** Off-app links open in a new tab instead of being routed to. */
  external?: boolean;
};

/**
 * The admin task groups.
 *
 * Single source of truth for the sidebar, the command overlay, and the breadcrumb
 * labels, so `/dashboard/properties` is "Estates" in all three - never
 * "Properties" in the breadcrumb and "Estates" in the sidebar. The repo's own
 * vocabulary wins over the URL's.
 */
export const adminNavItems: AdminNavItem[] = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/dashboard/properties", icon: Building2, label: "Estates" },
  { href: "/dashboard/tenants", icon: BookUser, label: "Tenants" },
  { href: "/dashboard/payments", icon: Package2, label: "Payments" },
  { href: "/dashboard/branding", icon: ShoppingCart, label: "Branding Shop" },
  { href: "/dashboard/submissions", icon: Archive, label: "Submissions" },
  {
    href: "https://emails.letsheng-holdings.com",
    icon: Mail,
    label: "Emails",
    external: true,
  },
];

/** Nav labels keyed by path, for breadcrumb resolution. */
const navLabels = new Map(
  adminNavItems
    .filter((item) => !item.external)
    .map((item) => [item.href, item.label]),
);

/** Labels for fixed leaf routes. */
const leafLabels: Record<string, string> = {
  new: "New",
  edit: "Edit",
};

/**
 * Grouping segments that restate the collection they sit under, e.g.
 * `/dashboard/properties/property/[id]`. The collection page is already the
 * parent crumb, so keeping these would render "Estates / Estates / Details".
 */
const groupingSegments = new Set(["property", "brand", "tenant"]);

function isDynamicSegment(segment: string) {
  return segment.startsWith("[") && segment.endsWith("]");
}

function humanize(segment: string) {
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export type Crumb = {
  href: string;
  label: string;
  isLast: boolean;
};

/**
 * Build the breadcrumb trail for a pathname.
 *
 * A root-level route yields an empty array on purpose: a single segment is noise
 * and the page heading already says where you are. See
 * `docs/ARCHITECTURE/frontend-blueprint/02-admin-ui-grammar/05-admin-header-standard.md`
 * -> "Zone 1 - Breadcrumb".
 */
export function breadcrumbsFor(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);

  // "/dashboard" is the shell root: one level, so no trail.
  if (segments.length < 2) {
    return [];
  }

  const kept: { segment: string; href: string }[] = [];

  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;

    // Drop a grouping segment when a dynamic id follows it directly.
    const next = segments[index + 1];
    if (groupingSegments.has(segment) && next && isDynamicSegment(next)) {
      return;
    }

    kept.push({ segment, href });
  });

  return kept.map((entry, index) => {
    const navLabel = navLabels.get(entry.href);

    let label = navLabel;
    if (!label) {
      if (isDynamicSegment(entry.segment)) {
        label = "Details";
      } else {
        label = leafLabels[entry.segment] ?? humanize(entry.segment);
      }
    }

    return {
      href: entry.href,
      label,
      isLast: index === kept.length - 1,
    };
  });
}

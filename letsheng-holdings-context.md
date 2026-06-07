This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitattributes
.gitignore
.repomixignore
apps/admin/.gitignore
apps/admin/app/dashboard/actions.ts
apps/admin/app/dashboard/branding/actions.ts
apps/admin/app/dashboard/branding/brand/[id]/edit/page.tsx
apps/admin/app/dashboard/branding/brand/[id]/page.tsx
apps/admin/app/dashboard/branding/branding-form.tsx
apps/admin/app/dashboard/branding/data.ts
apps/admin/app/dashboard/branding/new/page.tsx
apps/admin/app/dashboard/branding/page.tsx
apps/admin/app/dashboard/layout.tsx
apps/admin/app/dashboard/page.tsx
apps/admin/app/dashboard/properties/actions.ts
apps/admin/app/dashboard/properties/data.ts
apps/admin/app/dashboard/properties/new/page.tsx
apps/admin/app/dashboard/properties/page.tsx
apps/admin/app/dashboard/properties/property-form.tsx
apps/admin/app/dashboard/properties/property/[id]/edit/page.tsx
apps/admin/app/dashboard/properties/property/[id]/page.tsx
apps/admin/app/dashboard/submissions/actions.ts
apps/admin/app/dashboard/submissions/BrandingInquiriesTable.tsx
apps/admin/app/dashboard/submissions/data.ts
apps/admin/app/dashboard/submissions/LeaseApplicationsTable.tsx
apps/admin/app/dashboard/submissions/page.tsx
apps/admin/app/dashboard/tenants/actions.ts
apps/admin/app/dashboard/tenants/data.ts
apps/admin/app/dashboard/tenants/new/page.tsx
apps/admin/app/dashboard/tenants/page.tsx
apps/admin/app/dashboard/tenants/tenant-form.tsx
apps/admin/app/dashboard/tenants/tenant/[id]/edit/page.tsx
apps/admin/app/dashboard/tenants/tenant/[id]/page.tsx
apps/admin/app/globals.css
apps/admin/app/layout.tsx
apps/admin/app/login/actions.ts
apps/admin/app/login/page.tsx
apps/admin/app/page.tsx
apps/admin/biome.json
apps/admin/components/ClientDate.tsx
apps/admin/components/layout/Header.tsx
apps/admin/components/layout/Sidebar.tsx
apps/admin/components/terms/TermsOfTenancy.tsx
apps/admin/components/ui/avatar.tsx
apps/admin/components/ui/badge.tsx
apps/admin/components/ui/button.tsx
apps/admin/components/ui/card.tsx
apps/admin/components/ui/dialog.tsx
apps/admin/components/ui/dropdown-menu.tsx
apps/admin/components/ui/form.tsx
apps/admin/components/ui/input.tsx
apps/admin/components/ui/label.tsx
apps/admin/components/ui/select.tsx
apps/admin/components/ui/separator.tsx
apps/admin/components/ui/sheet.tsx
apps/admin/components/ui/switch.tsx
apps/admin/components/ui/table.tsx
apps/admin/components/ui/tabs.tsx
apps/admin/components/ui/textarea.tsx
apps/admin/components/ui/toaster.tsx
apps/admin/components/ui/use-toast.ts
apps/admin/components/upload-image.tsx
apps/admin/eslint.config.js
apps/admin/lib/env.ts
apps/admin/lib/revalidation.ts
apps/admin/lib/utils.ts
apps/admin/next.config.mts
apps/admin/package.json
apps/admin/postcss.config.mjs
apps/admin/proxy.ts
apps/admin/public/logo.jpg
apps/admin/public/Mug.png
apps/admin/public/T-shirt.png
apps/admin/README.md
apps/admin/supabase/migrations/20260603000000_repair_schema_rls.sql
apps/admin/supabase/migrations/20260604000000_harden_rls_policies.sql
apps/admin/supabase/migrations/20260604010000_admin_users_rls.sql
apps/admin/supabase/migrations/20260605000000_reset_rls_policies.sql
apps/admin/supabase/migrations/currentDB.sql
apps/admin/tsconfig.json
apps/client/.gitignore
apps/client/app/about/page.tsx
apps/client/app/api/revalidate/route.ts
apps/client/app/branding/[productID]/gallery/page.tsx
apps/client/app/branding/[productID]/order/page.tsx
apps/client/app/branding/[productID]/page.tsx
apps/client/app/branding/actions.ts
apps/client/app/branding/data.ts
apps/client/app/branding/page.tsx
apps/client/app/contact/actions.ts
apps/client/app/contact/contact-form.tsx
apps/client/app/contact/page.tsx
apps/client/app/globals.css
apps/client/app/layout.tsx
apps/client/app/manifest.ts
apps/client/app/not-found.tsx
apps/client/app/page.tsx
apps/client/app/privacy/page.tsx
apps/client/app/properties/[id]/apply-to-lease/page.tsx
apps/client/app/properties/[id]/gallery/page.tsx
apps/client/app/properties/[id]/page.tsx
apps/client/app/properties/actions.ts
apps/client/app/properties/data.ts
apps/client/app/properties/page.tsx
apps/client/app/robots.ts
apps/client/app/services/page.tsx
apps/client/app/sitemap.ts
apps/client/app/terms/page.tsx
apps/client/app/waterDetergents/page.tsx
apps/client/biome.json
apps/client/components/branding/BrandingOrderForm.tsx
apps/client/components/branding/waterDetergents.tsx
apps/client/components/layout/Footer.tsx
apps/client/components/layout/Header.tsx
apps/client/components/terms/TermsOfTenancy.tsx
apps/client/components/ui/avatar.tsx
apps/client/components/ui/badge.tsx
apps/client/components/ui/button.tsx
apps/client/components/ui/card.tsx
apps/client/components/ui/dropdown-menu.tsx
apps/client/components/ui/form.tsx
apps/client/components/ui/input.tsx
apps/client/components/ui/label.tsx
apps/client/components/ui/select.tsx
apps/client/components/ui/sheet.tsx
apps/client/components/ui/switch.tsx
apps/client/components/ui/table.tsx
apps/client/components/ui/tabs.tsx
apps/client/components/ui/textarea.tsx
apps/client/components/ui/toaster.tsx
apps/client/eslint.config.js
apps/client/lib/business.ts
apps/client/lib/env.ts
apps/client/lib/utils.ts
apps/client/next.config.ts
apps/client/package.json
apps/client/postcss.config.mjs
apps/client/public/Detergents.jpg
apps/client/public/Letsheng.mp4
apps/client/public/Letsheng.zip
apps/client/public/logo.jpg
apps/client/public/Mug.png
apps/client/public/Printing-Services.png
apps/client/public/services/Brandings.png
apps/client/public/services/properties.png
apps/client/public/services/WaterAndDetergents.png
apps/client/public/T-shirt.png
apps/client/public/water.jpg
apps/client/README.md
apps/client/supabase/.gitignore
apps/client/supabase/config.toml
apps/client/tailwind.config.ts
apps/client/tsconfig.json
media/1.png
media/2.png
media/3.png
media/4.png
media/5.png
media/Brandings.png
media/IMG-20260223-WA0020.jpg
media/IMG-20260223-WA0037.jpg
media/LETSHENG  Business Plan.pdf.pdf
media/LETSHENG HOLDINGS COMPANY PROFILE (2).pdf
media/properties.png
media/WaterAndDetergents.png
package.json
packages/eslint-config/base.js
packages/eslint-config/next.js
packages/eslint-config/package.json
packages/supabase/package.json
packages/supabase/src/auth.ts
packages/supabase/src/client.ts
packages/supabase/src/index.ts
packages/supabase/src/middleware.ts
packages/supabase/src/server.ts
packages/supabase/src/services/branding.ts
packages/supabase/src/services/contact.ts
packages/supabase/src/services/dashboard.ts
packages/supabase/src/services/properties.ts
packages/supabase/src/services/tenants.ts
packages/supabase/src/types/database.types.ts
packages/supabase/src/validations.ts
packages/supabase/tsconfig.json
packages/typescript-config/base.json
packages/typescript-config/nextjs.json
packages/typescript-config/package.json
pnpm-workspace.yaml
repomix.config.json
turbo.json
```

# Files

## File: .gitattributes
````
# Auto detect text files and perform LF normalization
* text=auto
````

## File: apps/admin/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: apps/admin/app/dashboard/branding/data.ts
````typescript
import {
  Coffee,
  File,
  type LucideIcon,
  Megaphone,
  Shirt,
  Wind,
} from "lucide-react";

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  icon?: LucideIcon;
  image: string;
  specs: { label: string; value: string }[];
  is_featured : boolean;
  gallery: { title: string; description: string; imageUrl: string }[];
  reviews: { id: string; author: string; rating: number; comment: string }[];
}

export interface ComingSoonProduct {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

export const products: Product[] = [
  {
    id: "t-shirt",
    title: "Executive Crewneck T-Shirt",
    category: "Corporate Apparel",
    description:
      "The cornerstone of a professional wardrobe. Woven from ultra-soft, 180gsm combed cotton for superior comfort and a premium feel. Features a classic fit with a reinforced collar and shoulder-to-shoulder taping for lasting durability. Ideal for team uniforms and corporate events.",
    icon: Shirt,
    image: "/T-shirt.png",
    specs: [
      { label: "Material", value: "100% Combed Cotton" },
      { label: "Weight", value: "180gsm" },
      { label: "Fit", value: "Unisex Classic" },
    ],
    is_featured : true,
    gallery: [
      {
        title: "Front View",
        description: "Clean and professional look",
        imageUrl: "/T-shirt.png",
      },
      {
        title: "Material Detail",
        description: "Close-up of the premium fabric",
        imageUrl:
          "https://images.unsplash.com/photo-1581655353564-df123a1642b1?q=80&w=2574&auto=format&fit=crop",
      },
      {
        title: "Team Set",
        description: "Uniforms for a cohesive brand image",
        imageUrl:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop",
      },
    ],
    reviews: [
      {
        id: "review-tshirt-1",
        author: "Marketing Manager, ABC Corp",
        rating: 5,
        comment:
          "Excellent quality and our logo looks fantastic. The team loves them.",
      },
      {
        id: "review-tshirt-2",
        author: "Event Coordinator",
        rating: 4,
        comment: "Great shirts for our annual conference. Very comfortable.",
      },
    ],
  },
  {
    id: "mug",
    title: "Ceramic Branding Mug",
    category: "Promotional Merchandise",
    description:
      "A powerful statement piece for any desk. This 11oz ceramic mug is finished with a high-gloss, scratch-resistant coating, ensuring your branding remains vibrant and pristine. Dishwasher and microwave safe. Perfect for client gifts and internal brand reinforcement.",
    icon: Coffee,
    image: "/Mug.png",
    specs: [
      { label: "Capacity", value: "11oz (325ml)" },
      { label: "Material", value: "AAA Grade Ceramic" },
      { label: "Printing", value: "Full-Color Dye-Sublimation" },
    ],
    is_featured : true,
    gallery: [
      {
        title: "Mug in Hand",
        description: "Perfect size and comfortable grip",
        imageUrl: "/Mug.png",
      },
      {
        title: "Glossy Finish",
        description: "Detail of the scratch-resistant coating",
        imageUrl:
          "https://images.unsplash.com/photo-1617290139191-285679a3194a?q=80&w=2574&auto=format&fit=crop",
      },
      {
        title: "Office Ready",
        description: "A great addition to any workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2670&auto=format&fit=crop",
      },
    ],
    reviews: [
      {
        id: "review-mug-1",
        author: "Office Manager",
        rating: 5,
        comment:
          "The print quality is outstanding. Our new favorite office mugs.",
      },
      {
        id: "review-mug-2",
        author: "Client Relations",
        rating: 5,
        comment:
          "We sent these as client gifts and got great feedback. Very professional.",
      },
    ],
  },
  {
    id: "posters",
    title: "High-Resolution Posters",
    category: "Promotional Merchandise",
    description:
      "Make a statement with vibrant, high-resolution posters. Perfect for events, promotions, and interior branding. Available in a variety of sizes and finishes.",
    icon: File,
    image:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2574&auto=format&fit=crop",
    specs: [
      { label: "Paper", value: "200gsm Satin Finish" },
      { label: "Sizes", value: "A3, A2, A1" },
      { label: "Printing", value: "Full-Color" },
    ],
    is_featured : false,
    gallery: [],
    reviews: [],
  },
  {
    id: "banners",
    title: "Large-Format Banners",
    category: "Promotional Merchandise",
    description:
      "Command attention with durable, large-format banners. Ideal for outdoor advertising, trade shows, and events. Weather-resistant and built to last.",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1542182312-799434b79339?q=80&w=2670&auto=format&fit=crop",
    specs: [
      { label: "Material", value: "Heavy-Duty PVC" },
      { label: "Sizes", value: "Custom" },
      { label: "Features", value: "Weather-Resistant, Eyelets" },
    ],
    is_featured : false,
    gallery: [],
    reviews: [],
  },
];

export const comingSoonProducts: ComingSoonProduct[] = [
  {
    title: "Large-Format Banners & Posters",
    category: "Coming Q3 2024",
    description:
      "Command attention at trade shows, events, and in-store with our upcoming large-format printing services. From vibrant, weather-resistant PVC banners to high-resolution posters, we will provide the scale and quality your message deserves.",
    icon: Megaphone,
  },
];
````

## File: apps/admin/app/dashboard/branding/new/page.tsx
````typescript
import BrandingForm from "../branding-form";

export default function NewBrandingPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold mb-4">Create New Branding Product</h1>
      <BrandingForm />
    </div>
  );
}
````

## File: apps/admin/app/dashboard/branding/page.tsx
````typescript
import { Edit, Eye, MoreVertical, PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getBrandingProducts } from "./actions";

export default async function AdminBrandingPage() {
  const products = await getBrandingProducts();
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Branding Command</h1>
          <p className="text-muted-foreground">
            Manage your branding portfolio.
          </p>
        </div>
        <Link href="/dashboard/branding/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col"
          >
            <div className="relative aspect-square overflow-hidden">
              <Link href={`/dashboard/branding/brand/${p.id}`}>
                <Image
                  src={p.image ?? ''}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/branding/brand/${p.id}/edit`}
                        className="flex items-center w-full"
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/branding/brand/${p.id}`}
                        className="flex items-center w-full"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-secondary leading-tight">
                  {p.title}
                </CardTitle>
                <Badge
                  variant={p.is_featured ? "default" : "secondary"}
                  className="shrink-0"
                >
                  {p.is_featured ? "Featured" : "Standard"}
                </Badge>
              </div>
              <CardDescription>{p.category}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-gray-700 leading-relaxed truncate">
                {p.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
````

## File: apps/admin/app/dashboard/page.tsx
````typescript
import {
    AlertCircle,
    ArrowUpRight,
    DollarSign,
    Edit,
    MoreHorizontal,
    Package,
    Percent,
    Trash2,
  } from "lucide-react";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { getDashboardKpis, getRecentLeases } from "./actions";
  import type { LucideIcon } from "lucide-react";
  
  interface KpiData {
    title: string;
    value: string;
    icon: LucideIcon;
    change: string;
  }
  
  const KpiCard = ({ item }: { item: KpiData }) => (
    <Card className="bg-brand-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
        <item.icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{item.value}</div>
        <p className="text-xs text-muted-foreground">{item.change}</p>
      </CardContent>
    </Card>
  );
  
  export default async function DashboardPage() {
    const kpis = await getDashboardKpis();
    const recentLeases = await getRecentLeases();
  
    const kpiData: KpiData[] = kpis
      ? [
          {
            title: "Total Monthly Revenue",
            value: `R${kpis.totalRevenue.toLocaleString()}`,
            icon: DollarSign,
            change: "Based on occupied properties",
          },
          {
            title: "Occupancy Rate",
            value: `${kpis.occupancyRate.toFixed(2)}%`,
            icon: Percent,
            change: "Across all properties",
          },
          {
            title: "Pending Branding Inquiries",
            value: kpis.pendingOrders.toString(),
            icon: Package,
            change: "Newly submitted inquiries",
          },
          {
            title: "Overdue Payments",
            value: `R${kpis.overdueAmount.toLocaleString()}`,
            icon: AlertCircle,
            change: `${kpis.overdueCount} tenants overdue`,
          },
        ]
      : [];
  
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {kpiData.map((item) => (
            <KpiCard key={item.title} item={item} />
          ))}
        </div>
        <Card className="xl:col-span-2 bg-brand-card">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Lease Agreements</CardTitle>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1 bg-primary">
              <a href="/dashboard/properties">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Tenant</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentLeases.map((lease) => (
                  <TableRow key={lease.id}>
                    <TableCell>
                      <div className="font-medium">{lease.property}</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{lease.tenant}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          lease.status === "Late Payment"
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                        }
                      >
                        {lease.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{lease.amount}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    );
  }
````

## File: apps/admin/app/dashboard/properties/data.ts
````typescript
export const sampleProperties = [
  {
    id: "1",
    title: "Executive Waterfront Residence, Harbour View",
    description:
      "Experience unparalleled luxury in our executive waterfront suite. Offering breathtaking panoramic views of the marina, this residence features state-of-the-art amenities and bespoke furnishings. Ideal for the discerning professional.",
    price: 35000,
    location: "V&A Waterfront, Cape Town",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    type: "Apartment",
    features: ["24/7 Security", "Concierge", "Pool", "Gym", "Secure Parking"],
    is_featured: true,
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
        title: "Living Area",
        description: "Spacious and modern living area with ocean views.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
        title: "Bedroom",
        description:
          "Elegant bedroom with a king-size bed and en-suite bathroom.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
        title: "Kitchen",
        description: "Fully-equipped gourmet kitchen with high-end appliances.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1596701062953-b45a1a1d3b2c?q=80&w=2070&auto=format&fit=crop",
        title: "Bathroom",
        description:
          "Modern bathroom with a walk-in shower and premium toiletries.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2070&auto=format&fit=crop",
        title: "Dining Area",
        description: "Elegant dining area with seating for six.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
        title: "Exterior",
        description: "Stunning exterior view of the property.",
      },
    ],
    reviews: [
      {
        id: "review-1",
        author: "John Doe",
        rating: 5,
        comment:
          "Absolutely stunning property with breathtaking views. The amenities are top-notch and the service is exceptional.",
      },
      {
        id: "review-2",
        author: "Jane Smith",
        rating: 4,
        comment:
          "A luxurious and comfortable stay. The location is perfect for exploring the city. I would highly recommend it.",
      },
    ],
    virtualTourUrl: "https://my.matterport.com/show/?m=JgWn9mJ4Z4N",
  },
  {
    id: "2",
    title: "Metropolitan Loft, Financial District",
    description:
      "A chic, fully-serviced loft situated in the heart of the financial district. With soaring ceilings and industrial-luxe design, this space is crafted for productivity and style. Includes access to our resident's lounge.",
    price: 22000,
    location: "Sandton, Johannesburg",
    availability: false,
    image_url:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    type: "Loft",
    features: [
      "High-speed Internet",
      "Resident's Lounge",
      "Housekeeping",
      "City Views",
    ],
    is_featured: false,
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14aa?q=80&w=2070&auto=format&fit=crop",
        title: "Living Area",
        description:
          "Stylish living area with a comfortable sofa and a flat-screen TV.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1595526114035-0d45ab29c649?q=80&w=2070&auto=format&fit=crop",
        title: "Bedroom",
        description:
          "Cozy bedroom with a queen-size bed and a dedicated workspace.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1600122313623-167e42938a16?q=80&w=2070&auto=format&fit=crop",
        title: "Bathroom",
        description:
          "Modern bathroom with a walk-in shower and premium toiletries.",
      },
    ],
    reviews: [
      {
        id: "review-3",
        author: "Peter Jones",
        rating: 4,
        comment:
          "A great place to stay for business travelers. The location is very convenient and the apartment is well-equipped.",
      },
    ],
    virtualTourUrl: null,
  },
  {
    id: "3",
    title: "Tranquil Garden Cottage",
    description:
      "A serene and private garden cottage nestled in a quiet suburban neighbourhood. Perfect for those seeking peace and quiet with easy access to city amenities. Features a private garden and modern finishes.",
    price: 12500,
    location: "Constantia, Cape Town",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    type: "Cottage",
    features: [
      "Private Garden",
      "Pet-friendly",
      "Fibre Internet",
      "Secure Parking",
    ],
    is_featured: true,
    gallery: [],
    reviews: [],
    virtualTourUrl: null,
  },
  {
    id: "soshanguve-south-modern-home",
    title: "Soshanguve South Modern Home",
    description:
      "A beautiful and modern family home located in a vibrant community. Spacious and perfect for a growing family.",
    price: 1200000,
    location: "Soshanguve, Pretoria",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    type: "House",
    features: ["Garden", "Garage", "Modern Kitchen", "Security System"],
    is_featured: true,
    gallery: [],
    reviews: [],
    virtualTourUrl: null,
  },
  {
    id: "pretoria-east-family-house",
    title: "Pretoria East Family House",
    description:
      "A large and welcoming family house in the suburbs of Pretoria East. Features a large garden and swimming pool.",
    price: 2500000,
    location: "Pretoria East, Pretoria",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070&auto=format&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    type: "House",
    features: ["Swimming Pool", "Large Garden", "Braai Area", "Double Garage"],
    is_featured: false,
    gallery: [],
    reviews: [],
    virtualTourUrl: null,
  },
  {
    id: "centurion-luxury-villa",
    title: "Centurion Luxury Villa",
    description:
      "An exquisite luxury villa in the heart of Centurion. Offers premium finishes and a sophisticated lifestyle.",
    price: 3800000,
    location: "Centurion, Pretoria",
    availability: false,
    image_url:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    bedrooms: 5,
    bathrooms: 4,
    type: "Villa",
    features: [
      "Home Theatre",
      "Infinity Pool",
      "Gourmet Kitchen",
      "Landscaped Gardens",
    ],
    is_featured: false,
    gallery: [],
    reviews: [],
    virtualTourUrl: null,
  },
];
````

## File: apps/admin/app/dashboard/properties/new/page.tsx
````typescript
import PropertyForm from "../property-form";

export default function NewPropertyPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold mb-4">Create New Property</h1>
      <PropertyForm />
    </div>
  );
}
````

## File: apps/admin/app/dashboard/properties/page.tsx
````typescript
import {
  Bath,
  Bed,
  CircleDollarSign,
  Edit,
  Eye,
  Home,
  MoreVertical,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getProperties } from "./actions";

export default async function AdminPropertiesPage() {
  const properties = await getProperties();

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Estates Command</h1>
          <p className="text-muted-foreground">
            Manage your real estate portfolio.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {properties.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col"
          >
            <div className="relative h-48">
              <Link href={`/dashboard/properties/property/${p.id}`}>
                <Image
                  src={p.image_url || ""}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="default" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link
                        href={`/dashboard/properties/property/${p.id}/edit`}
                        className="flex items-center w-full"
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-secondary leading-tight">
                  {p.title}
                </CardTitle>
                <Badge
                  variant={p.availability ? "default" : "destructive"}
                  className="shrink-0"
                >
                  {p.availability ? "Available" : "Occupied"}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 pt-1">{p.location}</p>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="flex items-center text-gray-600 space-x-4 mb-4">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2" />
                  <span>{p.bedrooms}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2" />
                  <span>{p.bathrooms}</span>
                </div>
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  <span>{p.type}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed truncate">
                {p.description}
              </p>
              <div className="mt-6 flex items-center text-2xl font-bold text-secondary">
                <CircleDollarSign className="h-6 w-6 mr-2 text-primary" />R
                {p.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-500 ml-2">
                  / month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
````

## File: apps/admin/app/dashboard/properties/property/[id]/edit/page.tsx
````typescript
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPropertyById } from "../../../actions";
import PropertyForm from "../../../property-form";

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Property not found</h1>
        <Link href="/dashboard/properties">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 flex items-center gap-4">
        <Link href={`/dashboard/properties/property/${property.id}`}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Cancel Edit
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Edit Property</CardTitle>
          <CardDescription>
            You are currently editing the details for:{" "}
            <span className="font-semibold text-foreground">
              {property.title}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PropertyForm property={property} />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/dashboard/submissions/BrandingInquiriesTable.tsx
````typescript
'use client';

import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner'; 

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { BrandingInquiry } from '@repo/supabase';

import { deleteBrandingInquiry, updateBrandingInquiryStatus } from './actions';

const statusVariantMap: {
  [key: string]: 'default' | 'secondary' | 'destructive';
} = {
  New: 'secondary',
  Contacted: 'default',
};

// Extends the base BrandingInquiry to include database-specific fields
interface BrandingInquiryWithProduct {
  id: string;
  created_at: string;
  status: string;
  customer_name: string;
  email: string;
  company: string | null;
  quantity: number;
  message: string | null;
  product_title: string;
  product_id: string;
}

interface BrandingInquiriesTableProps {
  inquiries: BrandingInquiryWithProduct[];
}

export function BrandingInquiriesTable({ inquiries }: BrandingInquiriesTableProps) {
  const [selectedInquiry, setSelectedInquiry] =
    useState<BrandingInquiryWithProduct | null>(null);

  const handleStatusUpdate = async (id: string, status: string) => {
    const result = await updateBrandingInquiryStatus(id, status);
    if (result.success) {
      toast.success(`Inquiry marked as ${status}.`);
    } else {
      toast.error(result.error || 'Failed to update status.');
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      const result = await deleteBrandingInquiry(id);
      if (result.success) {
        toast.success('Inquiry has been deleted.');
      } else {
        toast.error(result.error || 'Failed to delete inquiry.');
      }
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Branding Inquiries</CardTitle>
          <CardDescription>
            Review and manage all branding project inquiries.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted On</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell className="font-medium">
                    <Link
                      href={`/dashboard/branding/brand/${inquiry.product_id}`}
                      className="hover:underline"
                    >
                      {inquiry.product_title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{inquiry.customer_name}</div>
                    <div className="text-sm text-muted-foreground">
                      {inquiry.email}
                    </div>
                  </TableCell>
                  <TableCell>{inquiry.company || 'N/A'}</TableCell>
                  <TableCell className="text-center">
                    {inquiry.quantity}
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariantMap[inquiry.status]}>
                      {inquiry.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(inquiry.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onSelect={() => setSelectedInquiry(inquiry)}
                        >
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusUpdate(inquiry.id, 'Contacted')
                          }
                        >
                          Mark as Contacted
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(inquiry.id)}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedInquiry && (
        <Dialog
          open={!!selectedInquiry}
          onOpenChange={(isOpen: boolean) => !isOpen && setSelectedInquiry(null)}
        >
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Inquiry for {selectedInquiry.product_title}</DialogTitle>
              <DialogDescription>
                Submitted on{' '}
                {new Date(selectedInquiry.created_at).toLocaleString()}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-1">
                <h4 className="font-semibold">Contact Information</h4>
                <p>Name: {selectedInquiry.customer_name}</p>
                <p>Email: {selectedInquiry.email}</p>
                <p>Company: {selectedInquiry.company || 'Not provided'}</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">Project Details</h4>
                <p>Quantity: {selectedInquiry.quantity}</p>
                <div>
                  <h5 className="font-semibold">Message:</h5>
                  <p className="text-sm text-gray-700 mt-1">
                    {selectedInquiry.message || 'No message provided.'}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
````

## File: apps/admin/app/dashboard/submissions/data.ts
````typescript
export const leaseApplications = [
  {
    id: "lease-1",
    propertyTitle: "Executive Waterfront Residence, Harbour View",
    applicantName: "Alice Johnson",
    email: "alice.j@example.com",
    phone: "+27 82 123 4567",
    status: "Pending",
    submittedAt: new Date("2024-07-20T10:00:00Z"),
  },
  {
    id: "lease-2",
    propertyTitle: "Metropolitan Loft, Financial District",
    applicantName: "Bob Williams",
    email: "bob.w@example.com",
    phone: "+27 71 987 6543",
    status: "Reviewed",
    submittedAt: new Date("2024-07-19T15:30:00Z"),
  },
];

export const brandingInquiries = [
  {
    id: "brand-1",
    productTitle: "Executive Crewneck T-Shirt",
    customerName: "Charlie Brown",
    email: "charlie.b@example.com",
    company: "Snoopy Inc.",
    quantity: 100,
    status: "New",
    submittedAt: new Date("2024-07-21T09:00:00Z"),
  },
  {
    id: "brand-2",
    productTitle: "Ceramic Branding Mug",
    customerName: "Diana Prince",
    email: "diana.p@example.com",
    company: "Themyscira Corp.",
    quantity: 500,
    status: "Contacted",
    submittedAt: new Date("2024-07-18T12:00:00Z"),
  },
];
````

## File: apps/admin/app/dashboard/submissions/LeaseApplicationsTable.tsx
````typescript
'use client';

import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

import { ClientDate } from '@/components/ClientDate';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { LeaseApplication } from '@repo/supabase';

import {
  deleteLeaseApplication,
  updateLeaseApplicationStatus,
} from './actions';

const statusVariantMap: {
  [key: string]: 'default' | 'secondary' | 'destructive';
} = {
  Pending: 'secondary',
  Reviewed: 'default',
};

// Extends the base LeaseApplication to include database-specific fields
interface LeaseApplicationWithDetails {
  id: string;
  created_at: string;
  status: string;
  applicant_name: string;
  email: string;
  phone: string | null;
  employment: "employed" | "self-employed" | "unemployed" | "student" | null;
  message: string | null;
  property_title: string;
  property_id: string;
}

interface LeaseApplicationsTableProps {
  applications: LeaseApplicationWithDetails[];
}

export function LeaseApplicationsTable({
  applications,
}: LeaseApplicationsTableProps) {
  const router = useRouter();
  const [selectedApplication, setSelectedApplication] =
    useState<LeaseApplicationWithDetails | null>(null);

  const handleAddTenant = (applicantName: string, email: string, propertyId: string) => {
    const params = new URLSearchParams({
      name: applicantName,
      email,
      property_id: propertyId,
    });
    router.push(`/dashboard/tenants/new?${params.toString()}`);
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    const result = await updateLeaseApplicationStatus(id, status);
    if (result.success) {
      toast.success(`Application marked as ${status}.`);
    } else {
      toast.error(result.error || 'Failed to update status.');
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this application?')) {
      const result = await deleteLeaseApplication(id);
      if (result.success) {
        toast.success('Application has been deleted.');
      } else {
        toast.error(result.error || 'Failed to delete application.');
      }
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Lease Applications</CardTitle>
          <CardDescription>
            Review and manage all property lease applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Applicant</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted On</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">
                    <Link
                      href={`/dashboard/properties/property/${app.property_id}`}
                      className="hover:underline"
                    >
                      {app.property_title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{app.applicant_name}</div>
                    <div className="text-sm text-muted-foreground">
                      {app.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariantMap[app.status]}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <ClientDate dateString={app.created_at} />
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onSelect={() => setSelectedApplication(app)}
                        >
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleStatusUpdate(app.id, 'Reviewed')}
                        >
                          Mark as Reviewed
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleAddTenant(app.applicant_name, app.email, app.property_id)}
                        >
                          Add as Tenant
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(app.id)}>
                          Decline
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {selectedApplication && (
        <Dialog
          open={!!selectedApplication}
          onOpenChange={(isOpen: boolean) => !isOpen && setSelectedApplication(null)}
        >
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>
                Lease Application for {selectedApplication.property_title}
              </DialogTitle>
              <DialogDescription>
                Submitted by {selectedApplication.applicant_name} on{' '}
                <ClientDate dateString={selectedApplication.created_at} format="datetime" />
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-1">
                <h4 className="font-semibold">Applicant Details</h4>
                <p>Name: {selectedApplication.applicant_name}</p>
                <p>Email: {selectedApplication.email}</p>
                <p>Phone: {selectedApplication.phone || 'Not provided'}</p>
                <p>
                  Employment:{' '}
                  {selectedApplication.employment || 'Not specified'}
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">Additional Information</h4>
                <p className="text-sm text-gray-700">
                  {selectedApplication.message || 'No message provided.'}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
````

## File: apps/admin/app/dashboard/submissions/page.tsx
````typescript
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrandingInquiriesTable } from "./BrandingInquiriesTable";
import { LeaseApplicationsTable } from "./LeaseApplicationsTable";
import { getLeaseApplications, getBrandingInquiries } from "./actions";

export default async function SubmissionsPage() {
  const applications = await getLeaseApplications();
  const inquiries = await getBrandingInquiries();

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Submissions Hub</h1>
          <p className="text-muted-foreground">
            Review and manage all incoming requests.
          </p>
        </div>
      </div>
      <Tabs defaultValue="leases">
        <TabsList>
          <TabsTrigger value="leases">Lease Applications</TabsTrigger>
          <TabsTrigger value="branding">Branding Inquiries</TabsTrigger>
        </TabsList>
        <TabsContent value="leases">
          <LeaseApplicationsTable applications={applications} />
        </TabsContent>
        <TabsContent value="branding">
          <BrandingInquiriesTable inquiries={inquiries} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
````

## File: apps/admin/app/dashboard/tenants/data.ts
````typescript
export type TenantStatus = "Active" | "Inactive" | "Pending";
export type PaymentStatus = "Paid" | "Pending" | "Late";

export type Tenant = {
  id: string;
  name: string;
  property: string;
  propertyId: string;
  status: TenantStatus;
  leaseEndDate: string;
  avatarUrl: string;
};

export type Payment = {
  id: string;
  tenantId: string;
  amount: number;
  date: string;
  status: PaymentStatus;
};

export const sampleTenants: Tenant[] = [
  {
    id: "tenant-001",
    name: "John Doe",
    property: "Executive Waterfront Residence",
    propertyId: "prop-001",
    status: "Active",
    leaseEndDate: "2024-12-31",
    avatarUrl: "/avatars/01.png",
  },
  {
    id: "tenant-002",
    name: "Jane Smith",
    property: "Penthouse in the Sky",
    propertyId: "prop-002",
    status: "Active",
    leaseEndDate: "2025-06-30",
    avatarUrl: "/avatars/02.png",
  },
  {
    id: "tenant-003",
    name: "Michael Johnson",
    property: "The Urban Oasis",
    propertyId: "prop-003",
    status: "Inactive",
    leaseEndDate: "2023-11-30",
    avatarUrl: "/avatars/03.png",
  },
  {
    id: "tenant-004",
    name: "Emily Davis",
    property: "Serene Suburban Sanctuary",
    propertyId: "prop-004",
    status: "Pending",
    leaseEndDate: "2024-08-31",
    avatarUrl: "/avatars/04.png",
  },
  {
    id: "tenant-005",
    name: "Chris Brown",
    property: "Modern Downtown Loft",
    propertyId: "prop-005",
    status: "Active",
    leaseEndDate: "2025-02-28",
    avatarUrl: "/avatars/05.png",
  },
];

export const samplePayments: Payment[] = [
  {
    id: "payment-001",
    tenantId: "tenant-001",
    amount: 1200,
    date: "2024-03-01",
    status: "Paid",
  },
  {
    id: "payment-002",
    tenantId: "tenant-001",
    amount: 1200,
    date: "2024-02-01",
    status: "Paid",
  },
  {
    id: "payment-003",
    tenantId: "tenant-001",
    amount: 1200,
    date: "2024-01-01",
    status: "Late",
  },
  {
    id: "payment-004",
    tenantId: "tenant-002",
    amount: 1500,
    date: "2024-03-05",
    status: "Paid",
  },
  {
    id: "payment-005",
    tenantId: "tenant-003",
    amount: 950,
    date: "2024-03-10",
    status: "Pending",
  },
];
````

## File: apps/admin/app/dashboard/tenants/new/page.tsx
````typescript
import TenantForm from "../tenant-form";

export default function NewTenantPage() {
  return <TenantForm />;
}
````

## File: apps/admin/app/dashboard/tenants/tenant/[id]/page.tsx
````typescript
import { ArrowLeft, Edit } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  type PaymentStatus,
  samplePayments,
  sampleTenants,
  type TenantStatus,
} from "../../data";

const getStatusBadgeClass = (status: TenantStatus | PaymentStatus) => {
  switch (status) {
    case "Active":
      return "bg-green-500 text-white";
    case "Inactive":
      return "bg-red-500 text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
    case "Paid":
      return "bg-green-100 text-green-800";
    case "Late":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tenant = sampleTenants.find((t) => t.id === id);

  if (!tenant) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Tenant not found</h1>
        <Link href="/dashboard/tenants">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tenants
          </Button>
        </Link>
      </div>
    );
  }

  const payments = samplePayments.filter((p) => p.tenantId === id);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 flex items-center justify-between">
        <Link href="/dashboard/tenants">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tenants
          </Button>
        </Link>
        <Link href={`/dashboard/tenants/tenant/${tenant.id}/edit`}>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Tenant
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={tenant.avatarUrl} alt={tenant.name} />
                <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className=" font-bold">{tenant.name}</CardTitle>
                <CardDescription className="text-lg">
                  {tenant.id}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Property</p>
                <p className="font-semibold">{tenant.property}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <Badge className={getStatusBadgeClass(tenant.status)}>
                  {tenant.status}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Lease End Date
                </p>
                <p className="font-semibold">{tenant.leaseEndDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>${payment.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeClass(payment.status)}>
                        {payment.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
````

## File: apps/admin/app/globals.css
````css
@import "tailwindcss";

@theme {
  /* Core Colors */
  --color-background: #f0f2f5; /* Light gray background for content area */
  --color-foreground: #002147; /* Default text color (Navy) */
  --color-primary: #49b3e0;      /* Primary action color (Light Blue) */
  --color-primary-foreground: #002147; /* Text on primary color */
  --color-secondary: #002147;    /* Secondary color (Navy) */
  --color-secondary-foreground: #ffffff; /* Text on secondary color */
  --color-destructive: #ef4444;  /* Red for destructive actions */
  --color-destructive-foreground: #ffffff;

  /* Component Colors */
  --color-card: #ffffff;
  --color-card-foreground: #002147;
  --color-popover: #ffffff;
  --color-popover-foreground: #002147;
  --color-muted: #f3f4f6;
  --color-muted-foreground: #6b7280; /* Gray text */
  --color-accent: #eef8fd;       /* Light blue for hover/active states */
  --color-accent-foreground: #002147;
  --color-border: #e5e7eb;       /* Light gray for borders */
  --color-input: #e5e7eb;
  --color-ring: #49b3e0;         /* Primary color for focus rings */
}

@layer base {
  :root {
    --background: 220 14% 96%;
    --foreground: 210 100% 14%;
    --primary: 198 71% 60%;
    --primary-foreground: 210 100% 14%;
    --secondary: 210 100% 14%;
    --secondary-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --card: 0 0% 100%;
    --card-foreground: 210 100% 14%;
    --popover: 0 0% 100%;
    --popover-foreground: 210 100% 14%;
    --muted: 220 14% 96%;
    --muted-foreground: 220 9% 46%;
    --accent: 199 83% 96%;
    --accent-foreground: 210 100% 14%;
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 198 71% 60%;
  }

  body {
    @apply bg-background text-foreground;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold;
  }
}

/* Custom utilities */
.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.06);
}
````

## File: apps/admin/app/login/page.tsx
````typescript
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LogIn, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { login } from './actions';

const loginSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: LoginFormValues) {
    const result = await login(values);

    if (result.error) {
      toast.error('Login Failed', {
        description: result.error,
      });
    } else if (result.success) {
      toast.success('Login Successful', {
        description: 'Redirecting to dashboard...',
      });
      router.push('/dashboard');
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-4xl font-bold text-white">
            Admin Secure Login
          </h1>
          <p className="mt-2 text-gray-400">Letsheng Holdings Command Center</p>
        </div>
        <Card className="border-gray-700 bg-gray-900/50 text-white">
          <CardHeader>
            <CardTitle>Enter Credentials</CardTitle>
            <CardDescription className="text-gray-400">
              Provide your administrative credentials to proceed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="admin@letsheng.co.za"
                          {...field}
                          className="border-gray-600 bg-gray-800 text-white placeholder:text-gray-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••••••••"
                          {...field}
                          className="border-gray-600 bg-gray-800 text-white placeholder:text-gray-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary text-secondary hover:bg-primary/90"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? 'Authenticating...'
                    : 'Authenticate'}
                  <LogIn className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
````

## File: apps/admin/biome.json
````json
{
  "$schema": "https://biomejs.dev/schemas/2.2.0/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": true,
    "includes": ["**", "!node_modules", "!.next", "!dist", "!build"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "suspicious": {
        "noUnknownAtRules": "off"
      }
    },
    "domains": {
      "next": "recommended",
      "react": "recommended"
    }
  },
  "assist": {
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  }
}
````

## File: apps/admin/components/ClientDate.tsx
````typescript
'use client';

import { useEffect, useState } from 'react';

interface ClientDateProps {
  dateString: string | null | undefined;
  format?: 'date' | 'datetime';
}

export function ClientDate({ dateString, format = 'date' }: ClientDateProps) {
  const [formatted, setFormatted] = useState('');

  useEffect(() => {
    // This effect runs only on the client, after the initial render,
    // which prevents a hydration mismatch.
    if (dateString) {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        setFormatted('Invalid Date');
        return;
      }
      
      if (format === 'datetime') {
        // Using a consistent, non-locale-specific format
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        setFormatted(`${year}-${month}-${day} ${hours}:${minutes}`);
      } else {
        // Just the date part, in a consistent YYYY-MM-DD format
        const isoString = date.toISOString().split('T')[0];
        setFormatted(isoString ?? 'Invalid Date');
      }
    } else {
      setFormatted('N/A');
    }
  }, [dateString, format]);

  // Return empty string on server and initial client render
  // to prevent mismatch. The actual value is populated via useEffect.
  return <>{formatted}</>;
}
````

## File: apps/admin/components/terms/TermsOfTenancy.tsx
````typescript
export default function TermsOfTenancy() {
  return (
    <section className="glass-card rounded-lg p-5">
      <h4 className="text-lg font-bold text-white">Terms of Tenancy</h4>
      <div className="mt-3 text-gray-200 space-y-2">
        <p>
          Payments are due on or before the <strong>7th</strong> of each month.
          To maintain equity and operational predictability, this policy is
          strictly enforced.
        </p>
        <p>
          Leases that lapse for a continuous <strong>three-month</strong>
          period without payment or renewal will be considered for termination
          and repossession processes.
        </p>
        <p className="text-sm text-gray-300">
          Administrators should follow documented recovery and communication
          procedures when applying these terms.
        </p>
      </div>
    </section>
  );
}
````

## File: apps/admin/components/ui/avatar.tsx
````typescript
"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
````

## File: apps/admin/components/ui/badge.tsx
````typescript
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-primary/30 bg-primary text-secondary font-semibold",
        secondary: "bg-secondary text-white border border-primary/10",
        destructive: "bg-red-600 text-white border-red-500/30",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
````

## File: apps/admin/components/ui/button.tsx
````typescript
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-secondary text-white hover:bg-secondary/90",
        destructive: "bg-red-600 text-white hover:bg-red-600/90",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-secondary hover:text-white",
        secondary: "bg-white/10 text-white hover:bg-white/20",
        ghost: "hover:bg-white/5 hover:text-white",
        link: "text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
````

## File: apps/admin/components/ui/card.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-white/60 text-card-foreground shadow-sm glass-card",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
````

## File: apps/admin/components/ui/dialog.tsx
````typescript
'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ ...props }) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      props.className,
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ ...props }) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      props.className,
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      props.className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', props.className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
````

## File: apps/admin/components/ui/dropdown-menu.tsx
````typescript
"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border text-white bg-secondary p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-white text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-white focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
````

## File: apps/admin/components/ui/form.tsx
````typescript
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error ? "text-red-400" : "text-secondary", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
````

## File: apps/admin/components/ui/input.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
````

## File: apps/admin/components/ui/label.tsx
````typescript
"use client";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-secondary",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
````

## File: apps/admin/components/ui/select.tsx
````typescript
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white/95 text-secondary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
````

## File: apps/admin/components/ui/separator.tsx
````typescript
"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
````

## File: apps/admin/components/ui/sheet.tsx
````typescript
"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/60  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-secondary p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=closed]:duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  children?: React.ReactNode;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        sheetVariants({ side }),
        "bg-secondary border-primary/20",
        className,
      )}
      {...props}
    >
      <div className="sr-only">
        <SheetPrimitive.Title />
        <SheetPrimitive.Description />
      </div>
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
````

## File: apps/admin/components/ui/switch.tsx
````typescript
"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
````

## File: apps/admin/components/ui/table.tsx
````typescript
import React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
````

## File: apps/admin/components/ui/tabs.tsx
````typescript
"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
````

## File: apps/admin/components/ui/textarea.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
````

## File: apps/admin/components/ui/toaster.tsx
````typescript
'use client';

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
````

## File: apps/admin/components/ui/use-toast.ts
````typescript
import { toast } from "sonner";

export { toast };
````

## File: apps/admin/components/upload-image.tsx
````typescript
'use client';

import { createSupabaseBrowserClient } from '@repo/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useState, useRef, useEffect } from 'react';
import { Loader2, Pencil, Trash2, Upload } from 'lucide-react';
import Image from 'next/image';

interface UploadImageProps {
  onUploadSuccess: (url: string) => void;
  initialUrl?: string | null;
  folder?: string;
}

export function UploadImage({
  onUploadSuccess,
  initialUrl,
  folder,
}: UploadImageProps) {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(initialUrl || null);
  const supabase = createSupabaseBrowserClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync state with external changes to initialUrl
  useEffect(() => {
    setImageUrl(initialUrl || null);
  }, [initialUrl]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const bucketName = 'letshengHoldings';
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (uploadError) {
      toast.error(`Upload failed: ${uploadError.message}`);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);

    if (data.publicUrl) {
      setImageUrl(data.publicUrl);
      onUploadSuccess(data.publicUrl);
      toast.success('Image uploaded successfully!');
    } else {
      toast.error('Image uploaded, but failed to retrieve public URL.');
    }

    setUploading(false);
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    onUploadSuccess(''); // Notify parent form to clear the value
    toast.info('Image removed.');
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <Input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        disabled={uploading}
        accept="image/*"
        className="hidden"
      />

      {imageUrl ? (
        <div className="relative w-full max-w-lg overflow-hidden rounded-lg border aspect-video">
          <Image
            src={imageUrl}
            alt="Uploaded image preview"
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={triggerFileInput}
              disabled={uploading}
              aria-label="Change image"
            >
              {uploading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Pencil className="h-4 w-4" />
              )}
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={handleRemoveImage}
              disabled={uploading}
              aria-label="Remove image"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="flex w-full max-w-lg justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-6 py-10 text-center cursor-pointer hover:border-primary/50 transition-colors"
          onClick={triggerFileInput}
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="mx-auto h-10 w-10 text-muted-foreground animate-spin" />
              <p className="mt-2 text-sm font-medium text-primary">Uploading...</p>
              <p className="text-xs text-muted-foreground">Please wait.</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
              <span className="mt-2 font-medium text-primary">
                Click to upload an image
              </span>
              <p className="text-xs text-muted-foreground">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
````

## File: apps/admin/eslint.config.js
````javascript
import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
export default nextJsConfig;
````

## File: apps/admin/lib/env.ts
````typescript
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});
````

## File: apps/admin/lib/revalidation.ts
````typescript
export async function triggerRevalidation(options: { path?: string; tag?: string }) {
  const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
  const secret = process.env.REVALIDATION_SECRET;

  if (!clientUrl || !secret) {
    console.warn('REVALIDATION_SECRET or NEXT_PUBLIC_CLIENT_URL not set. Skipping revalidation.');
    return;
  }

  try {
    const response = await fetch(`${clientUrl}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-revalidate-secret': secret,
      },
      body: JSON.stringify(options),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to trigger revalidation:', errorData);
    }
  } catch (error) {
    console.error('Error triggering revalidation:', error);
  }
}
````

## File: apps/admin/lib/utils.ts
````typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: apps/admin/next.config.mts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }, {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'qjrvfgxyjflcwnfupxcy.supabase.co',
      },
{
        protocol: 'https',
        hostname: 'acdkpkpsamqrqonkbbag.supabase.co',
      }, {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
````

## File: apps/admin/package.json
````json
{
  "name": "admin",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "format": "biome format --write"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-icons": "^1.3.2",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@repo/supabase": "workspace:*",
    "@supabase/ssr": "^0.9.0",
    "@supabase/supabase-js": "^2.99.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.575.0",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.2",
    "sonner": "^2.0.7",
    "supabase": "^2.77.0",
    "tailwind-merge": "^3.5.0",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@biomejs/biome": "2.2.0",
    "@repo/eslint-config": "workspace:*",
    "@repo/typescript-config": "workspace:*",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20.19.35",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: apps/admin/postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: apps/admin/README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: apps/admin/supabase/migrations/20260603000000_repair_schema_rls.sql
````sql
create extension if not exists "pgcrypto";

create table if not exists public.properties (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  title text not null,
  description text,
  price numeric not null,
  location text,
  availability boolean not null default true,
  image_url text,
  bedrooms integer,
  bathrooms integer,
  type text,
  features jsonb default '[]'::jsonb,
  is_featured boolean not null default false,
  gallery jsonb default '[]'::jsonb,
  reviews jsonb default '[]'::jsonb
);

create table if not exists public.branding (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  title text not null,
  description text,
  category text not null,
  image text,
  is_featured boolean not null default false,
  specs jsonb default '[]'::jsonb,
  gallery jsonb default '[]'::jsonb,
  reviews jsonb default '[]'::jsonb
);

create table if not exists public.tenants (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  name text not null,
  email text,
  property_id text references public.properties(id) on delete set null,
  status text not null default 'Pending'
    check (status in ('Active', 'Inactive', 'Pending')),
  lease_end_date timestamptz,
  avatar_url text
);

create table if not exists public.payments (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  tenant_id text references public.tenants(id) on delete cascade,
  amount numeric not null,
  date timestamptz not null,
  status text not null default 'Pending'
    check (status in ('Paid', 'Pending', 'Late'))
);

create table if not exists public.branding_inquiries (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  product_id text references public.branding(id) on delete set null,
  customer_name text not null,
  email text not null,
  company text,
  quantity integer not null check (quantity > 0),
  message text,
  status text not null default 'New'
    check (status in ('New', 'In Progress', 'Completed', 'Archived'))
);

create table if not exists public.lease_applications (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  property_id text references public.properties(id) on delete set null,
  applicant_name text not null,
  email text not null,
  phone text,
  employment text,
  message text,
  status text not null default 'Pending'
    check (status in ('Pending', 'Approved', 'Rejected', 'Archived'))
);

create table if not exists public.contact_messages (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status text not null default 'New'
    check (status in ('New', 'In Progress', 'Resolved', 'Archived'))
);

alter table public.properties enable row level security;
alter table public.branding enable row level security;
alter table public.tenants enable row level security;
alter table public.payments enable row level security;
alter table public.branding_inquiries enable row level security;
alter table public.lease_applications enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "Allow public property reads" on public.properties;
create policy "Allow public property reads"
  on public.properties for select
  to anon, authenticated
  using (true);

drop policy if exists "Allow authenticated property management" on public.properties;
create policy "Allow authenticated property management"
  on public.properties for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow public branding reads" on public.branding;
create policy "Allow public branding reads"
  on public.branding for select
  to anon, authenticated
  using (true);

drop policy if exists "Allow authenticated branding management" on public.branding;
create policy "Allow authenticated branding management"
  on public.branding for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow authenticated tenant management" on public.tenants;
create policy "Allow authenticated tenant management"
  on public.tenants for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow authenticated payment management" on public.payments;
create policy "Allow authenticated payment management"
  on public.payments for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow public branding inquiry inserts" on public.branding_inquiries;
create policy "Allow public branding inquiry inserts"
  on public.branding_inquiries for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow authenticated branding inquiry management" on public.branding_inquiries;
create policy "Allow authenticated branding inquiry management"
  on public.branding_inquiries for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow public lease application inserts" on public.lease_applications;
create policy "Allow public lease application inserts"
  on public.lease_applications for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow authenticated lease application management" on public.lease_applications;
create policy "Allow authenticated lease application management"
  on public.lease_applications for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow public contact message inserts" on public.contact_messages;
create policy "Allow public contact message inserts"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow authenticated contact message management" on public.contact_messages;
create policy "Allow authenticated contact message management"
  on public.contact_messages for all
  to authenticated
  using (true)
  with check (true);
````

## File: apps/admin/supabase/migrations/20260604000000_harden_rls_policies.sql
````sql
-- Harden the public/admin data boundary.
-- Anonymous users may browse public catalog data and submit lead forms.
-- Authenticated users are treated as admin users by the current admin app.

alter table public.branding enable row level security;
alter table public.branding force row level security;
alter table public.branding_inquiries enable row level security;
alter table public.branding_inquiries force row level security;
alter table public.contact_messages enable row level security;
alter table public.contact_messages force row level security;
alter table public.lease_applications enable row level security;
alter table public.lease_applications force row level security;
alter table public.payments enable row level security;
alter table public.payments force row level security;
alter table public.properties enable row level security;
alter table public.properties force row level security;
alter table public.tenants enable row level security;
alter table public.tenants force row level security;

do $$
declare
  existing_policy record;
begin
  for existing_policy in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in (
        'branding',
        'branding_inquiries',
        'contact_messages',
        'lease_applications',
        'payments',
        'properties',
        'tenants'
      )
  loop
    execute format(
      'drop policy if exists %I on %I.%I',
      existing_policy.policyname,
      existing_policy.schemaname,
      existing_policy.tablename
    );
  end loop;
end $$;

grant usage on schema public to anon, authenticated;

grant select on public.branding to anon, authenticated;
grant select on public.properties to anon, authenticated;
grant insert on public.branding_inquiries to anon, authenticated;
grant insert on public.contact_messages to anon, authenticated;
grant insert on public.lease_applications to anon, authenticated;

grant all on public.branding to authenticated;
grant all on public.branding_inquiries to authenticated;
grant all on public.contact_messages to authenticated;
grant all on public.lease_applications to authenticated;
grant all on public.payments to authenticated;
grant all on public.properties to authenticated;
grant all on public.tenants to authenticated;

create index if not exists branding_created_at_idx
on public.branding (created_at desc);

create index if not exists branding_featured_idx
on public.branding (is_featured, created_at desc);

create index if not exists branding_inquiries_status_created_at_idx
on public.branding_inquiries (status, created_at desc);

create index if not exists contact_messages_status_created_at_idx
on public.contact_messages (status, created_at desc);

create index if not exists lease_applications_status_created_at_idx
on public.lease_applications (status, created_at desc);

create index if not exists lease_applications_property_id_idx
on public.lease_applications (property_id);

create index if not exists payments_tenant_id_date_idx
on public.payments (tenant_id, date desc);

create index if not exists properties_availability_created_at_idx
on public.properties (availability, created_at desc);

create index if not exists properties_featured_idx
on public.properties (is_featured, created_at desc);

create index if not exists tenants_property_id_idx
on public.tenants (property_id);

create index if not exists tenants_status_idx
on public.tenants (status);

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'branding_inquiries_quantity_positive'
  ) then
    alter table public.branding_inquiries
    add constraint branding_inquiries_quantity_positive
    check (quantity > 0) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint where conname = 'payments_amount_positive'
  ) then
    alter table public.payments
    add constraint payments_amount_positive
    check (amount > 0) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint where conname = 'properties_price_positive'
  ) then
    alter table public.properties
    add constraint properties_price_positive
    check (price > 0) not valid;
  end if;
end $$;

drop policy if exists "Public can read branding products" on public.branding;
create policy "Public can read branding products"
on public.branding
for select
to anon, authenticated
using (true);

drop policy if exists "Admins can manage branding products" on public.branding;
create policy "Admins can manage branding products"
on public.branding
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can create branding inquiries" on public.branding_inquiries;
create policy "Public can create branding inquiries"
on public.branding_inquiries
for insert
to anon, authenticated
with check (lower(status) in ('new', 'pending', 'submitted', 'open', 'unread'));

drop policy if exists "Admins can manage branding inquiries" on public.branding_inquiries;
create policy "Admins can manage branding inquiries"
on public.branding_inquiries
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can create contact messages" on public.contact_messages;
create policy "Public can create contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (lower(status) in ('new', 'pending', 'submitted', 'open', 'unread'));

drop policy if exists "Admins can manage contact messages" on public.contact_messages;
create policy "Admins can manage contact messages"
on public.contact_messages
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can create lease applications" on public.lease_applications;
create policy "Public can create lease applications"
on public.lease_applications
for insert
to anon, authenticated
with check (lower(status) in ('new', 'pending', 'submitted', 'open', 'unread'));

drop policy if exists "Admins can manage lease applications" on public.lease_applications;
create policy "Admins can manage lease applications"
on public.lease_applications
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Admins can manage payments" on public.payments;
create policy "Admins can manage payments"
on public.payments
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read available properties" on public.properties;
create policy "Public can read available properties"
on public.properties
for select
to anon, authenticated
using (availability = true or auth.role() = 'authenticated');

drop policy if exists "Admins can manage properties" on public.properties;
create policy "Admins can manage properties"
on public.properties
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Admins can manage tenants" on public.tenants;
create policy "Admins can manage tenants"
on public.tenants
for all
to authenticated
using (true)
with check (true);
````

## File: apps/admin/supabase/migrations/20260604010000_admin_users_rls.sql
````sql
-- Make admin access a database-backed authorization decision.
-- Bootstrap the first admin manually after applying this migration:
-- insert into public.admin_users (user_id) values ('<supabase-auth-user-id>');

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
alter table public.admin_users force row level security;

revoke all on public.admin_users from public;
revoke all on public.admin_users from anon;
revoke all on public.admin_users from authenticated;

create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

do $$
declare
  existing_policy record;
begin
  for existing_policy in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in (
        'branding',
        'branding_inquiries',
        'contact_messages',
        'lease_applications',
        'payments',
        'properties',
        'tenants'
      )
  loop
    execute format(
      'drop policy if exists %I on %I.%I',
      existing_policy.policyname,
      existing_policy.schemaname,
      existing_policy.tablename
    );
  end loop;
end $$;

create policy "Public can read branding products"
on public.branding
for select
to anon, authenticated
using (true);

create policy "Admins can manage branding products"
on public.branding
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can create branding inquiries"
on public.branding_inquiries
for insert
to anon, authenticated
with check (status = 'New');

create policy "Admins can manage branding inquiries"
on public.branding_inquiries
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can create contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (status = 'New');

create policy "Admins can manage contact messages"
on public.contact_messages
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can create lease applications"
on public.lease_applications
for insert
to anon, authenticated
with check (status = 'Pending');

create policy "Admins can manage lease applications"
on public.lease_applications
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins can manage payments"
on public.payments
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can read available properties"
on public.properties
for select
to anon, authenticated
using (availability = true or public.is_admin());

create policy "Admins can manage properties"
on public.properties
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins can manage tenants"
on public.tenants
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());
````

## File: apps/admin/supabase/migrations/20260605000000_reset_rls_policies.sql
````sql
-- Reset and recreate all Row-Level Security policies to ensure consistency and correctness.

-- 1. Drop all existing policies in the public schema dynamically
do $$
declare
  pol record;
begin
  for pol in (
    select policyname, tablename, schemaname
    from pg_policies
    where schemaname = 'public'
  ) loop
    execute format('drop policy if exists %I on %I.%I', pol.policyname, pol.schemaname, pol.tablename);
  end loop;
end $$;

-- 2. Make sure RLS is enabled on all tables
alter table public.properties enable row level security;
alter table public.properties force row level security;

alter table public.branding enable row level security;
alter table public.branding force row level security;

alter table public.tenants enable row level security;
alter table public.tenants force row level security;

alter table public.payments enable row level security;
alter table public.payments force row level security;

alter table public.branding_inquiries enable row level security;
alter table public.branding_inquiries force row level security;

alter table public.lease_applications enable row level security;
alter table public.lease_applications force row level security;

alter table public.contact_messages enable row level security;
alter table public.contact_messages force row level security;

alter table public.admin_users enable row level security;
alter table public.admin_users force row level security;

-- 3. Recreate the policies

-- PROPERTIES Policies
create policy "Public can read available properties"
on public.properties for select
to anon, authenticated
using (availability = true or public.is_admin());

create policy "Admins can manage properties"
on public.properties for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- BRANDING Policies
create policy "Public can read branding products"
on public.branding for select
to anon, authenticated
using (true);

create policy "Admins can manage branding products"
on public.branding for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- LEASE APPLICATIONS Policies
create policy "Public can create lease applications"
on public.lease_applications for insert
to anon, authenticated
with check (status = 'Pending');

create policy "Admins can manage lease applications"
on public.lease_applications for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- BRANDING INQUIRIES Policies
create policy "Public can create branding inquiries"
on public.branding_inquiries for insert
to anon, authenticated
with check (status = 'New');

create policy "Admins can manage branding inquiries"
on public.branding_inquiries for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- CONTACT MESSAGES Policies
create policy "Public can create contact messages"
on public.contact_messages for insert
to anon, authenticated
with check (status = 'New');

create policy "Admins can manage contact messages"
on public.contact_messages for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- TENANTS Policies
create policy "Admins can manage tenants"
on public.tenants for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- PAYMENTS Policies
create policy "Admins can manage payments"
on public.payments for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- ADMIN USERS Policies
create policy "Admins can manage admin_users"
on public.admin_users for all
to authenticated
using (public.is_admin())
with check (public.is_admin());
````

## File: apps/admin/supabase/migrations/currentDB.sql
````sql
-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.branding (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category text NOT NULL,
  image text,
  specs jsonb,
  gallery jsonb,
  reviews jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  is_featured boolean NOT NULL DEFAULT false,
  CONSTRAINT branding_pkey PRIMARY KEY (id)
);
CREATE TABLE public.properties (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  price numeric NOT NULL CHECK (price > 0::numeric) NOT VALI),
  location text,
  image_url text,
  bedrooms integer,
  bathrooms integer,
  type text,
  features jsonb,
  gallery jsonb,
  reviews jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  availability boolean NOT NULL DEFAULT true,
  is_featured boolean NOT NULL DEFAULT false,
  CONSTRAINT properties_pkey PRIMARY KEY (id)
);
CREATE TABLE public.lease_applications (
  property_id uuid,
  applicant_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'Pending'::text,
  employment text CHECK (employment = ANY (ARRAY['employed'::text, 'self-employed'::text, 'unemployed'::text, 'student'::text])),
  CONSTRAINT lease_applications_pkey PRIMARY KEY (id),
  CONSTRAINT lease_applications_product_id_fkey FOREIGN KEY (property_id) REFERENCES public.properties(id)
);
CREATE TABLE public.branding_inquiries (
  product_id uuid,
  customer_name text NOT NULL,
  email text NOT NULL,
  company text,
  quantity integer NOT NULL CHECK (quantity > 0) NOT VALI),
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'New'::text,
  message text,
  CONSTRAINT branding_inquiries_pkey PRIMARY KEY (id),
  CONSTRAINT branding_inquiries_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.branding(id)
);
CREATE TABLE public.tenants (
  name text NOT NULL,
  email text,
  lease_end_date timestamp with time zone,
  avatar_url text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'Pending'::text,
  property_id uuid,
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  CONSTRAINT tenants_pkey PRIMARY KEY (id),
  CONSTRAINT tenants_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.properties(id)
);
CREATE TABLE public.payments (
  amount numeric NOT NULL CHECK (amount > 0::numeric) NOT VALI),
  date timestamp with time zone NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'Pending'::text,
  tenant_id uuid,
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  CONSTRAINT payments_pkey PRIMARY KEY (id),
  CONSTRAINT payments_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id)
);
CREATE TABLE public.contact_messages (
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  id text NOT NULL DEFAULT (gen_random_uuid())::text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'New'::text CHECK (status = ANY (ARRAY['New'::text, 'In Progress'::text, 'Resolved'::text, 'Archived'::text])),
  CONSTRAINT contact_messages_pkey PRIMARY KEY (id)
);
CREATE TABLE public.admin_users (
  user_id uuid NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT admin_users_pkey PRIMARY KEY (user_id),
  CONSTRAINT admin_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
````

## File: apps/admin/tsconfig.json
````json
{
  "extends": "@repo/typescript-config/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "next-env.d.ts",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "next.config.mts"
  ],
  "exclude": [
    "node_modules"
  ]
}
````

## File: apps/client/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: apps/client/app/branding/[productID]/order/page.tsx
````typescript
import BrandingOrderForm from "@/components/branding/BrandingOrderForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBrandingProduct } from "../../actions";

// --- Sidebar Component --- //
const NextStepsInfo = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-lg font-semibold">Next Steps</CardTitle>
    </CardHeader>
    <CardContent>
      <ol className="space-y-4 text-sm">
        <li className="flex items-start">
          <strong className="bg-primary text-secondary rounded-full h-8 w-8 text-center shrink-0 leading-8 font-bold mr-4">
            1
          </strong>
          <div>
            <strong>Consultation & Quote:</strong> We review your submission and
            provide a tailored quote.
          </div>
        </li>
        <li className="flex items-start">
          <strong className="bg-primary text-secondary rounded-full h-8 w-8 text-center shrink-0 leading-8 font-bold mr-4">
            2
          </strong>
          <div>
            <strong>Review & Approval:</strong> You will receive proofs for
            approval before production.
          </div>
        </li>
        <li className="flex items-start">
          <strong className="bg-primary text-secondary rounded-full h-8 w-8 text-center shrink-0 leading-8 font-bold mr-4">
            3
          </strong>
          <div>
            <strong>Production & Fulfillment:</strong> We manage production and
            fulfillment end-to-end.
          </div>
        </li>
      </ol>
    </CardContent>
  </Card>
);

// --- Server Component: The Page --- //
export default async function BrandingOrderPage({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;
  const product = await getBrandingProduct(productID);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-secondary tracking-tight">
          Inquiry: {product.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Complete the form below to begin the consultation process for your
          custom branding project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <BrandingOrderForm product={product} />
        </div>
        <div className="lg:sticky lg:top-24 h-fit">
          <NextStepsInfo />
        </div>
      </div>
    </div>
  );
}
````

## File: apps/client/app/branding/data.ts
````typescript
import {
  Coffee,
  File,
  type LucideIcon,
  Megaphone,
  Shirt,
  Wind,
} from "lucide-react";

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  icon?: LucideIcon;
  image: string;
  specs: { label: string; value: string }[];
  is_featured : boolean;
  gallery: { title: string; description: string; imageUrl: string }[];
  reviews: { author: string; rating: number; comment: string }[];
}

export interface ComingSoonProduct {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

export const products: Product[] = [
  {
    id: "t-shirt",
    title: "Executive Crewneck T-Shirt",
    category: "Corporate Apparel",
    description:
      "The cornerstone of a professional wardrobe. Woven from ultra-soft, 180gsm combed cotton for superior comfort and a premium feel. Features a classic fit with a reinforced collar and shoulder-to-shoulder taping for lasting durability. Ideal for team uniforms and corporate events.",
    icon: Shirt,
    image: "/T-shirt.png",
    specs: [
      { label: "Material", value: "100% Combed Cotton" },
      { label: "Weight", value: "180gsm" },
      { label: "Fit", value: "Unisex Classic" },
    ],
    is_featured : true,
    gallery: [
      {
        title: "Front View",
        description: "Clean and professional look",
        imageUrl: "/T-shirt.png",
      },
      {
        title: "Material Detail",
        description: "Close-up of the premium fabric",
        imageUrl:
          "https://images.unsplash.com/photo-1581655353564-df123a1642b1?q=80&w=2574&auto=format&fit=crop",
      },
      {
        title: "Team Set",
        description: "Uniforms for a cohesive brand image",
        imageUrl:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop",
      },
    ],
    reviews: [
      {
        author: "Marketing Manager, ABC Corp",
        rating: 5,
        comment:
          "Excellent quality and our logo looks fantastic. The team loves them.",
      },
      {
        author: "Event Coordinator",
        rating: 4,
        comment: "Great shirts for our annual conference. Very comfortable.",
      },
    ],
  },
  {
    id: "mug",
    title: "Ceramic Branding Mug",
    category: "Promotional Merchandise",
    description:
      "A powerful statement piece for any desk. This 11oz ceramic mug is finished with a high-gloss, scratch-resistant coating, ensuring your branding remains vibrant and pristine. Dishwasher and microwave safe. Perfect for client gifts and internal brand reinforcement.",
    icon: Coffee,
    image: "/Mug.png",
    specs: [
      { label: "Capacity", value: "11oz (325ml)" },
      { label: "Material", value: "AAA Grade Ceramic" },
      { label: "Printing", value: "Full-Color Dye-Sublimation" },
    ],
    is_featured : true,
    gallery: [
      {
        title: "Mug in Hand",
        description: "Perfect size and comfortable grip",
        imageUrl: "/Mug.png",
      },
      {
        title: "Glossy Finish",
        description: "Detail of the scratch-resistant coating",
        imageUrl:
          "https://images.unsplash.com/photo-1617290139191-285679a3194a?q=80&w=2574&auto=format&fit=crop",
      },
      {
        title: "Office Ready",
        description: "A great addition to any workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2670&auto=format&fit=crop",
      },
    ],
    reviews: [
      {
        author: "Office Manager",
        rating: 5,
        comment:
          "The print quality is outstanding. Our new favorite office mugs.",
      },
      {
        author: "Client Relations",
        rating: 5,
        comment:
          "We sent these as client gifts and got great feedback. Very professional.",
      },
    ],
  },
  {
    id: "posters",
    title: "High-Resolution Posters",
    category: "Promotional Merchandise",
    description:
      "Make a statement with vibrant, high-resolution posters. Perfect for events, promotions, and interior branding. Available in a variety of sizes and finishes.",
    icon: File,
    image:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2574&auto=format&fit=crop",
    specs: [
      { label: "Paper", value: "200gsm Satin Finish" },
      { label: "Sizes", value: "A3, A2, A1" },
      { label: "Printing", value: "Full-Color" },
    ],
    is_featured : false,
    gallery: [],
    reviews: [],
  },
  {
    id: "banners",
    title: "Large-Format Banners",
    category: "Promotional Merchandise",
    description:
      "Command attention with durable, large-format banners. Ideal for outdoor advertising, trade shows, and events. Weather-resistant and built to last.",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1542182312-799434b79339?q=80&w=2670&auto=format&fit=crop",
    specs: [
      { label: "Material", value: "Heavy-Duty PVC" },
      { label: "Sizes", value: "Custom" },
      { label: "Features", value: "Weather-Resistant, Eyelets" },
    ],
    is_featured : false,
    gallery: [],
    reviews: [],
  },
];

export const comingSoonProducts: ComingSoonProduct[] = [
  {
    title: "Large-Format Banners & Posters",
    category: "Coming Q3 2024",
    description:
      "Command attention at trade shows, events, and in-store with our upcoming large-format printing services. From vibrant, weather-resistant PVC banners to high-resolution posters, we will provide the scale and quality your message deserves.",
    icon: Megaphone,
  },
];
````

## File: apps/client/app/globals.css
````css
@import "tailwindcss";

@theme {
  --color-secondary: #002147;
  --color-primary: #49b3e0;
  --color-brand-muted: #f3f4f6;
  --color-brand-white: #ffffff;
}

@layer base {
  body {
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
      "Helvetica Neue", Arial;
    @apply bg-brand-white text-secondary;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply text-secondary font-bold;
  }
}

/* Brand utilities and glassmorphism helpers */
:root {
  --secondary: rgb(0, 33, 71);
  --primary: #49b3e0;
}

.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.btn-gold-outline {
  border: 2px solid var(--primary);
  color: var(--primary);
  background: transparent;
}
.btn-gold-outline:hover {
  background: var(--secondary);
  color: white;
}

.hero-navy {
  background-color: var(--secondary);
  color: white;
}

.glass-overlay {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 215, 0, 0.12);
  backdrop-filter: blur(6px);
}
````

## File: apps/client/app/manifest.ts
````typescript
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Letsheng Holdings",
    short_name: "Letsheng",
    description:
      "Property rentals, branding, water, and detergents from Letsheng Holdings.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111827",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
````

## File: apps/client/app/not-found.tsx
````typescript
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary text-white p-6">
      <h1 className="text-9xl font-bold text-primary animate-pulse">404</h1>
      <h2 className="text-2xl mt-4 font-semibold uppercase tracking-widest">
        Room Not Found / Page Misprinted
      </h2>
      <p className="mt-4 text-gray-300 max-w-md text-center">
        Even the best blueprints have errors. Let's get you back to the main
        holding area.
      </p>
      <a
        href="/"
        className="mt-8 px-8 py-3 bg-primary text-secondary font-bold rounded-full"
      >
        RETURN TO HOME
      </a>
    </div>
  );
}
````

## File: apps/client/app/privacy/page.tsx
````typescript
import type { Metadata } from "next";

import { businessInfo } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy information for ${businessInfo.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl animate-fade-in space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-extrabold text-secondary">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          {businessInfo.name} collects only the information needed to respond to
          property applications, branding inquiries, and contact requests.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-secondary">Information We Use</h2>
        <p className="text-gray-600">
          We may collect your name, email address, phone number, message content,
          and the property or branding product you asked about.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-secondary">How We Use It</h2>
        <p className="text-gray-600">
          We use submitted details to respond to inquiries, process lease
          applications, prepare quotes, and maintain customer records.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-secondary">Contact</h2>
        <p className="text-gray-600">
          For privacy requests, contact {businessInfo.emails.join(" or ")}.
        </p>
      </section>
    </div>
  );
}
````

## File: apps/client/app/properties/data.ts
````typescript
export const sampleProperties = [
  {
    id: "1",
    title: "Executive Waterfront Residence, Harbour View",
    description:
      "Experience unparalleled luxury in our executive waterfront suite. Offering breathtaking panoramic views of the marina, this residence features state-of-the-art amenities and bespoke furnishings. Ideal for the discerning professional.",
    price: 35000,
    location: "V&A Waterfront, Cape Town",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    type: "Apartment",
    features: ["24/7 Security", "Concierge", "Pool", "Gym", "Secure Parking"],
    is_featured : true,
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
        title: "Living Area",
        description: "Spacious and modern living area with ocean views.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
        title: "Bedroom",
        description:
          "Elegant bedroom with a king-size bed and en-suite bathroom.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
        title: "Kitchen",
        description: "Fully-equipped gourmet kitchen with high-end appliances.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1596701062953-b45a1a1d3b2c?q=80&w=2070&auto=format&fit=crop",
        title: "Bathroom",
        description:
          "Modern bathroom with a walk-in shower and premium toiletries.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2070&auto=format&fit=crop",
        title: "Dining Area",
        description: "Elegant dining area with seating for six.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
        title: "Exterior",
        description: "Stunning exterior view of the property.",
      },
    ],
    reviews: [
      {
        author: "John Doe",
        rating: 5,
        comment:
          "Absolutely stunning property with breathtaking views. The amenities are top-notch and the service is exceptional.",
      },
      {
        author: "Jane Smith",
        rating: 4,
        comment:
          "A luxurious and comfortable stay. The location is perfect for exploring the city. I would highly recommend it.",
      },
    ],
    virtualTourUrl: "https://my.matterport.com/show/?m=JgWn9mJ4Z4N",
  },
  {
    id: "2",
    title: "Metropolitan Loft, Financial District",
    description:
      "A chic, fully-serviced loft situated in the heart of the financial district. With soaring ceilings and industrial-luxe design, this space is crafted for productivity and style. Includes access to our resident's lounge.",
    price: 22000,
    location: "Sandton, Johannesburg",
    availability: false,
    image_url:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    type: "Loft",
    features: [
      "High-speed Internet",
      "Resident's Lounge",
      "Housekeeping",
      "City Views",
    ],
    is_featured : false,
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14aa?q=80&w=2070&auto=format&fit=crop",
        title: "Living Area",
        description:
          "Stylish living area with a comfortable sofa and a flat-screen TV.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1595526114035-0d45ab29c649?q=80&w=2070&auto=format&fit=crop",
        title: "Bedroom",
        description:
          "Cozy bedroom with a queen-size bed and a dedicated workspace.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1600122313623-167e42938a16?q=80&w=2070&auto=format&fit=crop",
        title: "Bathroom",
        description:
          "Modern bathroom with a walk-in shower and premium toiletries.",
      },
    ],
    reviews: [
      {
        author: "Peter Jones",
        rating: 4,
        comment:
          "A great place to stay for business travelers. The location is very convenient and the apartment is well-equipped.",
      },
    ],
    virtualTourUrl: null,
  },
  {
    id: "3",
    title: "Tranquil Garden Cottage",
    description:
      "A serene and private garden cottage nestled in a quiet suburban neighbourhood. Perfect for those seeking peace and quiet with easy access to city amenities. Features a private garden and modern finishes.",
    price: 12500,
    location: "Constantia, Cape Town",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    type: "Cottage",
    features: [
      "Private Garden",
      "Pet-friendly",
      "Fibre Internet",
      "Secure Parking",
    ],
    is_featured : true,
    gallery: [],
    reviews: [],
    virtualTourUrl: null,
  },
  {
    id: "soshanguve-south-modern-home",
    title: "Soshanguve South Modern Home",
    description:
      "A beautiful and modern family home located in a vibrant community. Spacious and perfect for a growing family.",
    price: 1200000,
    location: "Soshanguve, Pretoria",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    type: "House",
    features: ["Garden", "Garage", "Modern Kitchen", "Security System"],
    is_featured : true,
    gallery: [],
    reviews: [],
    virtualTourUrl: null,
  },
  {
    id: "pretoria-east-family-house",
    title: "Pretoria East Family House",
    description:
      "A large and welcoming family house in the suburbs of Pretoria East. Features a large garden and swimming pool.",
    price: 2500000,
    location: "Pretoria East, Pretoria",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070&auto=format&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    type: "House",
    features: ["Swimming Pool", "Large Garden", "Braai Area", "Double Garage"],
    is_featured : false,
    gallery: [],
    reviews: [],
    virtualTourUrl: null,
  },
  {
    id: "centurion-luxury-villa",
    title: "Centurion Luxury Villa",
    description:
      "An exquisite luxury villa in the heart of Centurion. Offers premium finishes and a sophisticated lifestyle.",
    price: 3800000,
    location: "Centurion, Pretoria",
    availability: false,
    image_url:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    bedrooms: 5,
    bathrooms: 4,
    type: "Villa",
    features: [
      "Home Theatre",
      "Infinity Pool",
      "Gourmet Kitchen",
      "Landscaped Gardens",
    ],
    is_featured : false,
    gallery: [],
    reviews: [],
    virtualTourUrl: null,
  },
];
````

## File: apps/client/app/robots.ts
````typescript
import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://letshengholdings.co.za";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
````

## File: apps/client/app/sitemap.ts
````typescript
import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://letshengholdings.co.za";

const routes = [
  "",
  "/about",
  "/branding",
  "/contact",
  "/privacy",
  "/properties",
  "/terms",
  "/waterDetergents",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));
}
````

## File: apps/client/app/terms/page.tsx
````typescript
import type { Metadata } from "next";

import { businessInfo } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Service terms for ${businessInfo.name}.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl animate-fade-in space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-extrabold text-secondary">
          Terms of Service
        </h1>
        <p className="text-gray-600">
          These terms outline how {businessInfo.name} handles property,
          branding, water, detergent, and general service inquiries.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-secondary">Inquiries</h2>
        <p className="text-gray-600">
          Submitting an inquiry does not create a confirmed lease, booking, or
          order. Our team will contact you to confirm availability, pricing,
          timelines, and next steps.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-secondary">Quotes and Services</h2>
        <p className="text-gray-600">
          Quotes, production timelines, and service availability are confirmed
          directly by {businessInfo.name}. Final terms may vary by project,
          location, and supplier availability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-secondary">Contact</h2>
        <p className="text-gray-600">
          For questions about these terms, contact {businessInfo.emails.join(" or ")}.
        </p>
      </section>
    </div>
  );
}
````

## File: apps/client/app/waterDetergents/page.tsx
````typescript
import { 
    Droplet, 
    Sparkles, 
    ShieldCheck, 
    Truck, 
    Factory, 
    FlaskConical, 
    Waves, 
    CheckCircle2,
    ArrowRight,
    PhoneCall
  } from "lucide-react";
  import Image from "next/image";
  import Link from "next/link";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import { Card, CardContent } from "@/components/ui/card";
  
  const FeaturePoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-center gap-3 text-gray-300">
      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
      <span className="text-sm text-primary md:text-base">{children}</span>
    </li>
  );
  
  export default function WaterDetergentsPage() {
    return (
      <div className="animate-fade-in space-y-24 pb-20">
        {/* --- Hero Section --- */}
        <header className="relative min-h-[85vh] flex items-center bg-secondary rounded-[3rem] shadow-2xl overflow-hidden mx-4 mt-2 border border-white/5">
          <Image
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
            alt="Clean water and detergents"
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
          <div className="relative z-10 container mx-auto px-8">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1 uppercase tracking-widest font-bold">
                Essential Services Division
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                Pure Water. <br />
                <span className="text-primary italic">Absolute Clean.</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                Providing high-standard cleaning solutions and reliable bulk water supply 
                to households, businesses, and industrial sites across South Africa.
              </p>
            </div>
          </div>
        </header>
  
        {/* --- Division 1: Bulk Water Supply --- */}
        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/water.jpg"
                alt="Water delivery truck"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <p className="text-white font-bold flex items-center gap-2">
                    <Waves className="text-primary h-5 w-5" /> 
                    SABS Standard Compliant
                  </p>
                </div>
              </div>
            </div>
  
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-secondary tracking-tight">
                  Bulk Water <span className="text-primary">&</span> Distribution
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Addressing South Africa's water security challenges with reliable, 
                  purified, and bulk water delivery solutions for various applications.
                </p>
              </div>
  
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeaturePoint>Potable Drinking Water</FeaturePoint>
                <FeaturePoint>Industrial Site Supply</FeaturePoint>
                <FeaturePoint>Agricultural Irrigation</FeaturePoint>
                <FeaturePoint>Emergency Jojo Tank Refills</FeaturePoint>
                <FeaturePoint>Purified Bottled Solutions</FeaturePoint>
                <FeaturePoint>Event Water Logistics</FeaturePoint>
              </ul>
  
              <div className="pt-6">
                <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                  <Link href="/contact?service=water">
                    Request Bulk Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
  
        {/* --- Division 2: Cleaning Detergents --- */}
        <section className="bg-secondary py-24 mx-4 rounded-[3rem]">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-primary text-primary font-bold">
                    Manufacturing Division
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    High-Fidelity <br />
                    <span className="text-primary">Cleaning Detergents</span>
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Formulated for maximum efficiency and environmental safety. 
                    Our detergent line serves hospitals, schools, and professional cleaning firms.
                  </p>
                </div>
  
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <FlaskConical />, title: "Concentrated", desc: "Industrial strength formulas" },
                    { icon: <ShieldCheck />, title: "Safe & Green", desc: "Biodegradable ingredients" },
                    { icon: <Truck />, title: "Wholesale", desc: "Bulk 25L & 50L options" },
                    { icon: <Factory />, title: "Direct Supply", desc: "Factory-to-door pricing" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-primary h-6 w-6 shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.title}</h4>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
  
                <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white hover:text-secondary rounded-full px-8" asChild>
                  <Link href="/contact?service=detergents">Get Product Catalog</Link>
                </Button>
              </div>
  
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/Detergents.jpg"
                  alt="Detergent manufacturing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-secondary/20" />
              </div>
            </div>
          </div>
        </section>
  
        {/* --- Featured Product Categories --- */}
        <section className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-secondary tracking-tight">Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Available for both retail and wholesale distribution.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dishwashing Liquids",
                desc: "Grease-cutting formulas for commercial kitchens and homes.",
                icon: <Sparkles className="h-8 w-8 text-primary" />,
              },
              {
                title: "All-Purpose Cleaners",
                desc: "Versatile solutions for floors, surfaces, and industrial areas.",
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
              },
              {
                title: "Bulk Water Supply",
                desc: "From 500L to 10,000L deliveries for various needs.",
                icon: <Droplet className="h-8 w-8 text-primary" />,
              },
            ].map((cat, i) => (
              <Card key={i} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-[2rem]">
                <CardContent className="pt-10 pb-10 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary">{cat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
  
        {/* --- Call to Action --- */}
        <section className="container mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 text-center space-y-8 shadow-2xl shadow-primary/20">
            <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight">
              Ready to scale your <br /> supply chain?
            </h2>
            <p className="text-secondary/80 font-medium text-lg max-w-xl mx-auto">
              Contact our logistics team today for a custom quote on bulk detergents or water delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-10 h-16 rounded-full font-bold text-lg">
                <Link href="/contact" className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5" /> Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
````

## File: apps/client/biome.json
````json
{
  "$schema": "https://biomejs.dev/schemas/2.2.0/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": true,
    "includes": ["**", "!node_modules", "!.next", "!dist", "!build"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "suspicious": {
        "noUnknownAtRules": "off"
      }
    },
    "domains": {
      "next": "recommended",
      "react": "recommended"
    }
  },
  "assist": {
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  }
}
````

## File: apps/client/components/branding/waterDetergents.tsx
````typescript
import { Droplet, Sparkles, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WaterDetergentsSpotlight() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <div className="relative overflow-hidden bg-secondary rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
        {/* Decorative Background Element - Hidden on mobile for cleaner look */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-1/3 z-0 hidden lg:block" />

        <div className="relative z-10 grid lg:grid-cols-2 items-stretch">
          {/* Image Side: Visual Split */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-auto group overflow-hidden">
            <div className="absolute inset-4 z-20 flex flex-col justify-between pointer-events-none">
              <Badge className="w-fit bg-primary text-secondary font-bold px-4 py-1 self-end shadow-lg">
                New Division
              </Badge>
              <div className="bg-secondary/60 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-2xl transform group-hover:translate-y-[-5px] transition-transform duration-500 max-w-[280px] md:max-w-none">
                <p className="text-white font-bold text-base md:text-lg mb-1 italic">"Where cleanliness meets serenity"</p>
                <p className="text-gray-300 text-[10px] tracking-widest uppercase">The Letsheng Standard</p>
              </div>
            </div>
            
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
              alt="Industrial cleaning solutions and water supply"
              fill
              className="object-cover opacity-60 lg:opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Mobile Overlay: Darkens the bottom of the image for better text transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent lg:hidden" />
            {/* Desktop Overlay: Side gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent hidden lg:block" />
          </div>

          {/* Content Side */}
          <div className="p-6 sm:p-10 lg:p-16 space-y-8 flex flex-col justify-center">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                Essential <span className="text-primary italic">Resources</span> <br />
                <span className="lg:block">& Cleaning Solutions</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Expanding our commitment to quality through reliable bulk water distribution 
                and high-performance industrial detergents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: <Droplet />, title: "Bulk Water", desc: "Potable & Industrial" },
                { icon: <Sparkles />, title: "Detergents", desc: "High-fidelity gear" },
                { icon: <Truck />, title: "Logistics", desc: "Nationwide reach" },
                { icon: <ShieldCheck />, title: "SABS Quality", desc: "Safety guaranteed" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-center lg:items-start p-3 lg:p-0 rounded-xl bg-white/5 lg:bg-transparent border border-white/5 lg:border-none">
                  <div className="p-3 bg-white/5 rounded-xl text-primary shrink-0">
                    {cloneElement(item.icon, { className: "h-5 w-5 md:h-6 md:w-6" })}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-10 font-bold group h-14" asChild>
                <Link href="/waterDetergents">
                  View Solutions 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper to handle icon sizing in the map
import { cloneElement } from "react";
````

## File: apps/client/components/terms/TermsOfTenancy.tsx
````typescript
export default function TermsOfTenancy() {
  return (
    <section className="glass-overlay border-primary/30 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-secondary">Terms of Tenancy</h3>
      <p className="mt-3 text-gray-700">
        Letsheng Holdings operates a strict and transparent tenancy policy to
        protect both residents and the integrity of our portfolio. The following
        terms apply to all residential leases unless explicitly amended in
        writing:
      </p>

      <ol className="mt-4 list-decimal pl-5 text-gray-700 space-y-3">
        <li>
          Monthly Payments: Rent is due on or before the <strong>7th</strong>{" "}
          day of each calendar month. Late payments may incur administrative
          fees and affect the standing of the lease.
        </li>
        <li>
          Lapse & Termination: A lease will be considered lapsed and subject to
          termination if payments or renewal documentation are not received
          within a continuous <strong>three-month</strong> period.
        </li>
        <li>
          Communication: All breaches and notices will be delivered in
          accordance with the signed agreement. Tenants are required to keep
          contact details current to receive important notices.
        </li>
        <li>
          Enforcement: Letsheng Holdings reserves the right to pursue
          repossession and recover outstanding balances where appropriate and in
          accordance with applicable law.
        </li>
      </ol>

      <p className="mt-4 text-sm text-gray-500">
        These terms are intended to provide clarity and operational consistency
        across the Letsheng portfolio. If you have questions, contact the
        property management team for assistance.
      </p>
    </section>
  );
}
````

## File: apps/client/components/ui/avatar.tsx
````typescript
"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
````

## File: apps/client/components/ui/badge.tsx
````typescript
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-primary/30 bg-primary text-secondary font-semibold",
        secondary: "bg-secondary text-white border border-primary/10",
        destructive: "bg-red-600 text-white border-red-500/30",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
````

## File: apps/client/components/ui/button.tsx
````typescript
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-secondary text-white hover:bg-secondary/90",
        destructive: "bg-red-600 text-white hover:bg-red-600/90",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-secondary hover:text-white",
        secondary: "bg-white/10 text-white hover:bg-white/20",
        ghost: "hover:bg-white/5 hover:text-white",
        link: "text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
````

## File: apps/client/components/ui/card.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-white/60 text-card-foreground shadow-sm glass-card",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
````

## File: apps/client/components/ui/dropdown-menu.tsx
````typescript
"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
````

## File: apps/client/components/ui/form.tsx
````typescript
"use client";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error ? "text-red-400" : "text-secondary", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
````

## File: apps/client/components/ui/input.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
````

## File: apps/client/components/ui/label.tsx
````typescript
"use client";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-secondary",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
````

## File: apps/client/components/ui/select.tsx
````typescript
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white/95 text-secondary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
````

## File: apps/client/components/ui/sheet.tsx
````typescript
"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/60  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=closed]:duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  children?: React.ReactNode;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        sheetVariants({ side }),
        " border-primary/20",
        className,
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
````

## File: apps/client/components/ui/switch.tsx
````typescript
"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
````

## File: apps/client/components/ui/table.tsx
````typescript
import React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
````

## File: apps/client/components/ui/tabs.tsx
````typescript
"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
````

## File: apps/client/components/ui/textarea.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
````

## File: apps/client/components/ui/toaster.tsx
````typescript
'use client';

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
````

## File: apps/client/eslint.config.js
````javascript
import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
export default nextJsConfig;
````

## File: apps/client/lib/business.ts
````typescript
export const businessInfo = {
  name: "Letsheng Holdings",
  legalName: "LETSHENG HOLDINGS (Pty) Ltd.",
  domain: "https://www.letshengholdings.co.za",
  tagline: "Where comfort meets cleanliness and serenity.",
  description:
    "Providing premium residential spaces and high-fidelity branding solutions across South Africa.",
  address: "1294 Mahamba Street, Phola, Ogies, Mpumalanga 2233",
  phones: ["+27 83 753 5424", "+27 83 222 692"],
  emails: ["kgotso@letshengholdings.co.za", "elsie@letshengholdings.co.za"],
  whatsappHref: "https://wa.me/27837535424",
  social: {
    linkedin: "https://www.linkedin.com/company/letsheng-holdings",
    facebook: "https://www.facebook.com/profile.php?id=100088899263799",
  },
} as const;
````

## File: apps/client/lib/env.ts
````typescript
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});
````

## File: apps/client/lib/utils.ts
````typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: apps/client/next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }, {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'qjrvfgxyjflcwnfupxcy.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'acdkpkpsamqrqonkbbag.supabase.co',
      }, {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
````

## File: apps/client/postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: apps/client/README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: apps/client/supabase/.gitignore
````
# Supabase
.branches
.temp

# dotenvx
.env.keys
.env.local
.env.*.local
````

## File: apps/client/supabase/config.toml
````toml
# For detailed configuration reference documentation, visit:
# https://supabase.com/docs/guides/local-development/cli/config
# A string used to distinguish different Supabase projects on the same host. Defaults to the
# working directory name when running `supabase init`.
project_id = "client"

[api]
enabled = true
# Port to use for the API URL.
port = 54321
# Schemas to expose in your API. Tables, views and stored procedures in this schema will get API
# endpoints. `public` and `graphql_public` schemas are included by default.
schemas = ["public", "graphql_public"]
# Extra schemas to add to the search_path of every request.
extra_search_path = ["public", "extensions"]
# The maximum number of rows returns from a view, table, or stored procedure. Limits payload size
# for accidental or malicious requests.
max_rows = 1000

[api.tls]
# Enable HTTPS endpoints locally using a self-signed certificate.
enabled = false
# Paths to self-signed certificate pair.
# cert_path = "../certs/my-cert.pem"
# key_path = "../certs/my-key.pem"

[db]
# Port to use for the local database URL.
port = 54322
# Port used by db diff command to initialize the shadow database.
shadow_port = 54320
# Maximum amount of time to wait for health check when starting the local database.
health_timeout = "2m"
# The database major version to use. This has to be the same as your remote database's. Run `SHOW
# server_version;` on the remote database to check.
major_version = 17

[db.pooler]
enabled = false
# Port to use for the local connection pooler.
port = 54329
# Specifies when a server connection can be reused by other clients.
# Configure one of the supported pooler modes: `transaction`, `session`.
pool_mode = "transaction"
# How many server connections to allow per user/database pair.
default_pool_size = 20
# Maximum number of client connections allowed.
max_client_conn = 100

# [db.vault]
# secret_key = "env(SECRET_VALUE)"

[db.migrations]
# If disabled, migrations will be skipped during a db push or reset.
enabled = true
# Specifies an ordered list of schema files that describe your database.
# Supports glob patterns relative to supabase directory: "./schemas/*.sql"
schema_paths = []

[db.seed]
# If enabled, seeds the database after migrations during a db reset.
enabled = true
# Specifies an ordered list of seed files to load during db reset.
# Supports glob patterns relative to supabase directory: "./seeds/*.sql"
sql_paths = ["./seed.sql"]

[db.network_restrictions]
# Enable management of network restrictions.
enabled = false
# List of IPv4 CIDR blocks allowed to connect to the database.
# Defaults to allow all IPv4 connections. Set empty array to block all IPs.
allowed_cidrs = ["0.0.0.0/0"]
# List of IPv6 CIDR blocks allowed to connect to the database.
# Defaults to allow all IPv6 connections. Set empty array to block all IPs.
allowed_cidrs_v6 = ["::/0"]

# Uncomment to reject non-secure connections to the database.
# [db.ssl_enforcement]
# enabled = true

[realtime]
enabled = true
# Bind realtime via either IPv4 or IPv6. (default: IPv4)
# ip_version = "IPv6"
# The maximum length in bytes of HTTP request headers. (default: 4096)
# max_header_length = 4096

[studio]
enabled = true
# Port to use for Supabase Studio.
port = 54323
# External URL of the API server that frontend connects to.
api_url = "http://127.0.0.1"
# OpenAI API Key to use for Supabase AI in the Supabase Studio.
openai_api_key = "env(OPENAI_API_KEY)"

# Email testing server. Emails sent with the local dev setup are not actually sent - rather, they
# are monitored, and you can view the emails that would have been sent from the web interface.
[inbucket]
enabled = true
# Port to use for the email testing server web interface.
port = 54324
# Uncomment to expose additional ports for testing user applications that send emails.
# smtp_port = 54325
# pop3_port = 54326
# admin_email = "admin@email.com"
# sender_name = "Admin"

[storage]
enabled = true
# The maximum file size allowed (e.g. "5MB", "500KB").
file_size_limit = "50MiB"

# Uncomment to configure local storage buckets
# [storage.buckets.images]
# public = false
# file_size_limit = "50MiB"
# allowed_mime_types = ["image/png", "image/jpeg"]
# objects_path = "./images"

# Allow connections via S3 compatible clients
[storage.s3_protocol]
enabled = true

# Image transformation API is available to Supabase Pro plan.
# [storage.image_transformation]
# enabled = true

# Store analytical data in S3 for running ETL jobs over Iceberg Catalog
# This feature is only available on the hosted platform.
[storage.analytics]
enabled = false
max_namespaces = 5
max_tables = 10
max_catalogs = 2

# Analytics Buckets is available to Supabase Pro plan.
# [storage.analytics.buckets.my-warehouse]

# Store vector embeddings in S3 for large and durable datasets
# This feature is only available on the hosted platform.
[storage.vector]
enabled = false
max_buckets = 10
max_indexes = 5

# Vector Buckets is available to Supabase Pro plan.
# [storage.vector.buckets.documents-openai]

[auth]
enabled = true
# The base URL of your website. Used as an allow-list for redirects and for constructing URLs used
# in emails.
site_url = "http://127.0.0.1:3000"
# A list of *exact* URLs that auth providers are permitted to redirect to post authentication.
additional_redirect_urls = ["https://127.0.0.1:3000"]
# How long tokens are valid for, in seconds. Defaults to 3600 (1 hour), maximum 604,800 (1 week).
jwt_expiry = 3600
# JWT issuer URL. If not set, defaults to the local API URL (http://127.0.0.1:<port>/auth/v1).
# jwt_issuer = ""
# Path to JWT signing key. DO NOT commit your signing keys file to git.
# signing_keys_path = "./signing_keys.json"
# If disabled, the refresh token will never expire.
enable_refresh_token_rotation = true
# Allows refresh tokens to be reused after expiry, up to the specified interval in seconds.
# Requires enable_refresh_token_rotation = true.
refresh_token_reuse_interval = 10
# Allow/disallow new user signups to your project.
enable_signup = true
# Allow/disallow anonymous sign-ins to your project.
enable_anonymous_sign_ins = false
# Allow/disallow testing manual linking of accounts
enable_manual_linking = false
# Passwords shorter than this value will be rejected as weak. Minimum 6, recommended 8 or more.
minimum_password_length = 6
# Passwords that do not meet the following requirements will be rejected as weak. Supported values
# are: `letters_digits`, `lower_upper_letters_digits`, `lower_upper_letters_digits_symbols`
password_requirements = ""

[auth.rate_limit]
# Number of emails that can be sent per hour. Requires auth.email.smtp to be enabled.
email_sent = 2
# Number of SMS messages that can be sent per hour. Requires auth.sms to be enabled.
sms_sent = 30
# Number of anonymous sign-ins that can be made per hour per IP address. Requires enable_anonymous_sign_ins = true.
anonymous_users = 30
# Number of sessions that can be refreshed in a 5 minute interval per IP address.
token_refresh = 150
# Number of sign up and sign-in requests that can be made in a 5 minute interval per IP address (excludes anonymous users).
sign_in_sign_ups = 30
# Number of OTP / Magic link verifications that can be made in a 5 minute interval per IP address.
token_verifications = 30
# Number of Web3 logins that can be made in a 5 minute interval per IP address.
web3 = 30

# Configure one of the supported captcha providers: `hcaptcha`, `turnstile`.
# [auth.captcha]
# enabled = true
# provider = "hcaptcha"
# secret = ""

[auth.email]
# Allow/disallow new user signups via email to your project.
enable_signup = true
# If enabled, a user will be required to confirm any email change on both the old, and new email
# addresses. If disabled, only the new email is required to confirm.
double_confirm_changes = true
# If enabled, users need to confirm their email address before signing in.
enable_confirmations = false
# If enabled, users will need to reauthenticate or have logged in recently to change their password.
secure_password_change = false
# Controls the minimum amount of time that must pass before sending another signup confirmation or password reset email.
max_frequency = "1s"
# Number of characters used in the email OTP.
otp_length = 6
# Number of seconds before the email OTP expires (defaults to 1 hour).
otp_expiry = 3600

# Use a production-ready SMTP server
# [auth.email.smtp]
# enabled = true
# host = "smtp.sendgrid.net"
# port = 587
# user = "apikey"
# pass = "env(SENDGRID_API_KEY)"
# admin_email = "admin@email.com"
# sender_name = "Admin"

# Uncomment to customize email template
# [auth.email.template.invite]
# subject = "You have been invited"
# content_path = "./supabase/templates/invite.html"

# Uncomment to customize notification email template
# [auth.email.notification.password_changed]
# enabled = true
# subject = "Your password has been changed"
# content_path = "./templates/password_changed_notification.html"

[auth.sms]
# Allow/disallow new user signups via SMS to your project.
enable_signup = false
# If enabled, users need to confirm their phone number before signing in.
enable_confirmations = false
# Template for sending OTP to users
template = "Your code is {{ .Code }}"
# Controls the minimum amount of time that must pass before sending another sms otp.
max_frequency = "5s"

# Use pre-defined map of phone number to OTP for testing.
# [auth.sms.test_otp]
# 4152127777 = "123456"

# Configure logged in session timeouts.
# [auth.sessions]
# Force log out after the specified duration.
# timebox = "24h"
# Force log out if the user has been inactive longer than the specified duration.
# inactivity_timeout = "8h"

# This hook runs before a new user is created and allows developers to reject the request based on the incoming user object.
# [auth.hook.before_user_created]
# enabled = true
# uri = "pg-functions://postgres/auth/before-user-created-hook"

# This hook runs before a token is issued and allows you to add additional claims based on the authentication method used.
# [auth.hook.custom_access_token]
# enabled = true
# uri = "pg-functions://<database>/<schema>/<hook_name>"

# Configure one of the supported SMS providers: `twilio`, `twilio_verify`, `messagebird`, `textlocal`, `vonage`.
[auth.sms.twilio]
enabled = false
account_sid = ""
message_service_sid = ""
# DO NOT commit your Twilio auth token to git. Use environment variable substitution instead:
auth_token = "env(SUPABASE_AUTH_SMS_TWILIO_AUTH_TOKEN)"

# Multi-factor-authentication is available to Supabase Pro plan.
[auth.mfa]
# Control how many MFA factors can be enrolled at once per user.
max_enrolled_factors = 10

# Control MFA via App Authenticator (TOTP)
[auth.mfa.totp]
enroll_enabled = false
verify_enabled = false

# Configure MFA via Phone Messaging
[auth.mfa.phone]
enroll_enabled = false
verify_enabled = false
otp_length = 6
template = "Your code is {{ .Code }}"
max_frequency = "5s"

# Configure MFA via WebAuthn
# [auth.mfa.web_authn]
# enroll_enabled = true
# verify_enabled = true

# Use an external OAuth provider. The full list of providers are: `apple`, `azure`, `bitbucket`,
# `discord`, `facebook`, `github`, `gitlab`, `google`, `keycloak`, `linkedin_oidc`, `notion`, `twitch`,
# `twitter`, `x`, `slack`, `spotify`, `workos`, `zoom`.
[auth.external.apple]
enabled = false
client_id = ""
# DO NOT commit your OAuth provider secret to git. Use environment variable substitution instead:
secret = "env(SUPABASE_AUTH_EXTERNAL_APPLE_SECRET)"
# Overrides the default auth redirectUrl.
redirect_uri = ""
# Overrides the default auth provider URL. Used to support self-hosted gitlab, single-tenant Azure,
# or any other third-party OIDC providers.
url = ""
# If enabled, the nonce check will be skipped. Required for local sign in with Google auth.
skip_nonce_check = false
# If enabled, it will allow the user to successfully authenticate when the provider does not return an email address.
email_optional = false

# Allow Solana wallet holders to sign in to your project via the Sign in with Solana (SIWS, EIP-4361) standard.
# You can configure "web3" rate limit in the [auth.rate_limit] section and set up [auth.captcha] if self-hosting.
[auth.web3.solana]
enabled = false

# Use Firebase Auth as a third-party provider alongside Supabase Auth.
[auth.third_party.firebase]
enabled = false
# project_id = "my-firebase-project"

# Use Auth0 as a third-party provider alongside Supabase Auth.
[auth.third_party.auth0]
enabled = false
# tenant = "my-auth0-tenant"
# tenant_region = "us"

# Use AWS Cognito (Amplify) as a third-party provider alongside Supabase Auth.
[auth.third_party.aws_cognito]
enabled = false
# user_pool_id = "my-user-pool-id"
# user_pool_region = "us-east-1"

# Use Clerk as a third-party provider alongside Supabase Auth.
[auth.third_party.clerk]
enabled = false
# Obtain from https://clerk.com/setup/supabase
# domain = "example.clerk.accounts.dev"

# OAuth server configuration
[auth.oauth_server]
# Enable OAuth server functionality
enabled = false
# Path for OAuth consent flow UI
authorization_url_path = "/oauth/consent"
# Allow dynamic client registration
allow_dynamic_registration = false

[edge_runtime]
enabled = true
# Supported request policies: `oneshot`, `per_worker`.
# `per_worker` (default) — enables hot reload during local development.
# `oneshot` — fallback mode if hot reload causes issues (e.g. in large repos or with symlinks).
policy = "per_worker"
# Port to attach the Chrome inspector for debugging edge functions.
inspector_port = 8083
# The Deno major version to use.
deno_version = 2

# [edge_runtime.secrets]
# secret_key = "env(SECRET_VALUE)"

[analytics]
enabled = true
port = 54327
# Configure one of the supported backends: `postgres`, `bigquery`.
backend = "postgres"

# Experimental features may be deprecated any time
[experimental]
# Configures Postgres storage engine to use OrioleDB (S3)
orioledb_version = ""
# Configures S3 bucket URL, eg. <bucket_name>.s3-<region>.amazonaws.com
s3_host = "env(S3_HOST)"
# Configures S3 bucket region, eg. us-east-1
s3_region = "env(S3_REGION)"
# Configures AWS_ACCESS_KEY_ID for S3 bucket
s3_access_key = "env(S3_ACCESS_KEY)"
# Configures AWS_SECRET_ACCESS_KEY for S3 bucket
s3_secret_key = "env(S3_SECRET_KEY)"
````

## File: apps/client/tailwind.config.ts
````typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#002147",
        "brand-Blue": "#FFD700",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
````

## File: apps/client/tsconfig.json
````json
{
  "extends": "@repo/typescript-config/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "next-env.d.ts",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
````

## File: packages/eslint-config/base.js
````javascript
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";

export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];
````

## File: packages/eslint-config/next.js
````javascript
import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import pluginNext from "@next/eslint-plugin-next";
import { config as baseConfig } from "./base.js";

export const nextJsConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.distinguishable,
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
````

## File: packages/eslint-config/package.json
````json
{
  "name": "@repo/eslint-config",
  "version": "0.0.0",
  "private": true,
  "exports": {
    "./base": "./base.js",
    "./next-js": "./next.js"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@next/eslint-plugin-next": "^16.2.0",
    "eslint": "^9.39.1",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-only-warn": "^1.1.0",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-turbo": "^2.7.1",
    "globals": "^16.5.0",
    "typescript": "^5",
    "typescript-eslint": "^8.50.0"
  }
}
````

## File: packages/supabase/src/client.ts
````typescript
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types/database.types";

export function createSupabaseBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}
````

## File: packages/supabase/tsconfig.json
````json
{
  "extends": "@repo/typescript-config/nextjs.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
````

## File: packages/typescript-config/base.json
````json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "incremental": false,
    "isolatedModules": true,
    "lib": ["es2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleDetection": "force",
    "moduleResolution": "bundler",
    "noUncheckedIndexedAccess": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "ES2022"
  }
}
````

## File: packages/typescript-config/nextjs.json
````json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./base.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowJs": true,
    "jsx": "preserve",
    "noEmit": true
  }
}
````

## File: packages/typescript-config/package.json
````json
{
  "name": "@repo/typescript-config",
  "version": "0.0.0",
  "private": true,
  "license": "MIT"
}
````

## File: pnpm-workspace.yaml
````yaml
packages:
  - "apps/*"
  - "packages/*"
````

## File: repomix.config.json
````json
{
  "$schema": "https://repomix.com/schemas/latest/schema.json",
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "letsheng-holdings-context.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "truncateBase64": false,
    "copyToClipboard": false,
    "includeFullDirectoryStructure": false,
    "tokenCountTree": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100,
      "includeDiffs": false,
      "includeLogs": false,
      "includeLogsCount": 50
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDotIgnore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
````

## File: turbo.json
````json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "typecheck": {
      "dependsOn": ["^typecheck"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
````

## File: .repomixignore
````
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/

letsheng.xml
context.md
malalang.md
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: apps/admin/app/dashboard/actions.ts
````typescript
'use server';

import {
  getDashboardKpis as getDashboardKpisService,
  getRecentLeases as getRecentLeasesService,
} from "@repo/supabase/services/dashboard";

export async function getDashboardKpis() {
    return await getDashboardKpisService();
}

export async function getRecentLeases() {
    return await getRecentLeasesService();
}
````

## File: apps/admin/app/dashboard/branding/brand/[id]/edit/page.tsx
````typescript
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BrandingForm from "../../../branding-form";
import { getBrandingProduct } from "../../../actions";
import {
  galleryItemSchema,
  reviewSchema,
  specItemSchema,
} from "@repo/supabase";

export default async function EditBrandingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productData = await getBrandingProduct(id);

  if (!productData) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/dashboard/branding">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Branding
          </Button>
        </Link>
      </div>
    );
  }

  const specs = specItemSchema.array().safeParse(productData.specs);
  const gallery = galleryItemSchema.array().safeParse(productData.gallery);
  const reviews = reviewSchema.array().safeParse(productData.reviews);

  const product = {
    ...productData,
    specs: specs.success ? specs.data : null,
    gallery: gallery.success ? gallery.data : null,
    reviews: reviews.success ? reviews.data : null,
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 flex items-center gap-4">
        <Link href={`/dashboard/branding/brand/${product.id}`}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Cancel Edit
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Edit Product</CardTitle>
          <CardDescription>
            You are currently editing the details for:{" "}
            <span className="font-semibold text-foreground">
              {product.title}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BrandingForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/dashboard/branding/brand/[id]/page.tsx
````typescript
import { ArrowLeft, CheckCircle, Edit, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { galleryItemSchema, reviewSchema, specItemSchema } from "@repo/supabase";
import { getBrandingProduct } from "../../actions";

export default async function BrandingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getBrandingProduct(id);

  if (!product) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <p className="text-gray-600">
          The product you are looking for does not exist.
        </p>
        <Link href="/dashboard/branding">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Branding
          </Button>
        </Link>
      </div>
    );
  }

  const parsedSpecs = specItemSchema.array().safeParse(product.specs ?? []);
  const parsedGallery = galleryItemSchema
    .array()
    .safeParse(product.gallery ?? []);
  const parsedReviews = reviewSchema.array().safeParse(product.reviews ?? []);
  const specs = parsedSpecs.success ? parsedSpecs.data : [];
  const gallery = parsedGallery.success ? parsedGallery.data : [];
  const reviews = parsedReviews.success ? parsedReviews.data : [];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-4 flex items-center justify-between">
        <Link href="/dashboard/branding">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Branding
          </Button>
        </Link>
        <Link href={`/dashboard/branding/brand/${product.id}/edit`}>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Product
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_350px]">
        <div className="grid auto-rows-max items-start gap-8">
          <Card>
            <CardHeader className="p-0">
              <div className="relative h-96">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center rounded-t-lg bg-muted text-sm text-muted-foreground">
                    No product image
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle className="text-3xl font-bold">
                {product.title}
              </CardTitle>
              <div className="text-lg text-muted-foreground mt-2">
                {product.category}
              </div>
              <Separator className="my-4" />
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </CardContent>
          </Card>

          {specs.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {specs.map((spec) => (
                    <li key={spec.label} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>
                        <strong>{spec.label}:</strong> {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {gallery.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Product Gallery</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((image) => (
                  <div key={image.imageUrl} className="relative h-48">
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid auto-rows-max items-start gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Featured</span>
                <Badge variant={product.is_featured ? "default" : "secondary"}>
                  {product.is_featured ? "Yes" : "No"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {reviews.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Client Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews.map((review, reviewIndex) => (
                  <div
                    key={review.id ?? `${review.author}-${reviewIndex}`}
                    className="p-4 rounded-lg border"
                  >
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={`${review.id ?? review.author}-${reviewIndex}-star-${i}`}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="ml-2 font-semibold">{review.author}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: apps/admin/app/dashboard/branding/branding-form.tsx
````typescript
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, PlusCircle, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from "@/components/ui/use-toast";
import type { z } from 'zod';

import { UploadImage } from "@/components/upload-image";
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { type Branding, brandingSchema } from '@repo/supabase';
import {
  createBrandingProduct,
  deleteBrandingProduct,
  updateBrandingProduct,
} from './actions';

interface BrandingFormProps {
  product?: Branding;
}

type BrandingFormValues = z.input<typeof brandingSchema>;

export default function BrandingForm({ product }: BrandingFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const form = useForm<BrandingFormValues, unknown, Branding>({
    resolver: zodResolver(brandingSchema),
    defaultValues: product
      ? {
          ...product,
          specs: product.specs ?? [],
          gallery: product.gallery ?? [],
        }
      : {
          title: '',
          category: '',
          description: '',
          image: '',
          specs: [],
          is_featured: false,
          gallery: [],
        },
  });

  useEffect(() => {
    if (product) {
      form.reset({
        ...product,
        specs: product.specs ?? [],
        gallery: product.gallery ?? [],
      });
    }
  }, [product, form.reset]);

  const { fields: galleryFields, append: appendGallery, remove: removeGallery } =
    useFieldArray({
      control: form.control,
      name: 'gallery',
    });

  const { fields: specFields, append: appendSpec, remove: removeSpec } =
    useFieldArray({
      control: form.control,
      name: 'specs',
    });

    async function onSubmit(data: Branding) {
      setIsLoading(true);
      try {
        if (product && product.id) {
          const result = await updateBrandingProduct(product.id, data);
          if (result.success) {
            toast.success('Branding product has been updated successfully.');
            router.push(`/dashboard/branding`);
          } else {
            toast.error(
              result.error || 'An unexpected error occurred. Please try again.',
            );
          }
        } else {
          const result = await createBrandingProduct(data);
          if (result.success) {
            toast.success('New branding product has been created.');
            router.push('/dashboard/branding');
          } else {
            toast.error(
              result.error || 'An unexpected error occurred. Please try again.',
            );
          }
        }
        router.refresh();
      } catch (error) {
        console.error('Failed to save product:', error);
        toast.error(
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred. Please try again.',
        );
      } finally {
        setIsLoading(false);
      }
    }

    async function onDelete() {
      if (!product || !product.id) return;
  
      setIsDeleting(true);
      try {
        const result = await deleteBrandingProduct(product.id);
        if (result.success) {
          toast.success('Branding product has been deleted.');
          router.push('/dashboard/branding');
        } else {
          toast.error(
            result.error || 'An unexpected error occurred while deleting. Please try again.',
          );
        }
        router.refresh();
      } catch (error) {
        console.error('Failed to delete product:', error);
        toast.error(
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred while deleting. Please try again.',
        );
      } finally {
        setIsDeleting(false);
      }
    }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8"
      >
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Tabs defaultValue="general">
            <TabsList>
              <TabsTrigger value="general">General Info</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>Core Product Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Executive Crewneck T-Shirt"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Corporate Apparel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detailed Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Provide a compelling description of the product..."
                            rows={5}
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="media">
              <Card>
                <CardHeader>
                  <CardTitle>Product Media</CardTitle>
                  <CardDescription>
                    Manage main image and gallery.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Main Product Image</FormLabel>
                        <FormControl>
                          <UploadImage
                            folder="branding"
                            onUploadSuccess={(url) => {
                              form.setValue("image", url, {
                                shouldValidate: true,
                                shouldDirty: true,
                              });
                            }}
                            initialUrl={field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium">Image Gallery</h3>
                    <div className="space-y-6 mt-4">
                      {galleryFields.map((field, index) => (
                        <Card key={field.id} className="overflow-hidden">
                          <CardHeader className="flex flex-row items-center justify-between py-4">
                            <CardTitle className="text-lg">
                              Gallery Item {index + 1}
                            </CardTitle>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600"
                              onClick={() => removeGallery(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <FormField
                              control={form.control}
                              name={`gallery.${index}.imageUrl`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Image</FormLabel>
                                  <FormControl>
                                    <UploadImage
                                      folder="branding/gallery"
                                      onUploadSuccess={(url) => {
                                        form.setValue(
                                          `gallery.${index}.imageUrl`,
                                          url,
                                          {
                                            shouldValidate: true,
                                            shouldDirty: true,
                                          },
                                        );
                                      }}
                                      initialUrl={field.value}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`gallery.${index}.title`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Title</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`gallery.${index}.description`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Description</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      rows={2}
                                      {...field}
                                      value={field.value ?? ''}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-6"
                      onClick={() =>
                        appendGallery({
                          imageUrl: '',
                          title: '',
                          description: '',
                        })
                      }
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Gallery Item
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specs">
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                  <CardDescription>
                    Manage the technical specifications for this product.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {specFields.map((field, index) => (
                      <Card key={field.id} className="p-4">
                        <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-4">
                          <FormField
                            control={form.control}
                            name={`specs.${index}.label`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Label</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="e.g., Material"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`specs.${index}.value`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Value</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="e.g., 100% Cotton"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeSpec(index)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => appendSpec({ label: '', value: '' })}
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Specification
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Visibility</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="is_featured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Status</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange(value === 'true')
                      }
                      defaultValue={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select featured status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Featured</SelectItem>
                        <SelectItem value="false">Not Featured</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <div className="flex flex-col gap-2">
            <Button type="submit" variant="default" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {product ? 'Save Changes' : 'Create Product'}
            </Button>
            {product && (
              <Button
                variant="destructive"
                type="button"
                onClick={onDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="mr-2 h-4 w-4" />
                )}
                Delete Product
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
````

## File: apps/admin/app/dashboard/layout.tsx
````typescript
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col relative ">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
````

## File: apps/admin/app/dashboard/properties/property-form.tsx
````typescript
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, PlusCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import type { z } from "zod";

import { UploadImage } from "@/components/upload-image";
import { createProperty, deleteProperty, updateProperty } from "./actions";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { type Property, propertySchema } from "@repo/supabase";

interface PropertyFormProps {
  property?: Property;
}

type PropertyFormValues = z.input<typeof propertySchema>;

export default function PropertyForm({ property }: PropertyFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const form = useForm<PropertyFormValues, unknown, Property>({
    resolver: zodResolver(propertySchema),
    defaultValues: property
      ? {
          ...property,
          features: property.features || [],
          gallery: property.gallery || [],
          reviews: property.reviews || [],
        }
      : {
          title: "",
          description: "",
          price: 0,
          location: "",
          availability: true,
          image_url: "",
          bedrooms: 1,
          bathrooms: 1,
          type: "Apartment",
          features: [],
          is_featured: false,
          gallery: [],
          reviews: [],
        },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "gallery",
  });

  const { fields: reviewFields, append: appendReview, remove: removeReview, } = useFieldArray({
    control: form.control,
    name: "reviews",
  });


  async function onSubmit(data: Property) {
    setIsLoading(true);
    try {
      if (property && property.id) {
        const result = await updateProperty(property.id, data);
        if (result.success) {
          toast.success("Property has been updated successfully.");
          router.push(`/dashboard/properties/property/${property.id}`);
        } else {
          toast.error(
            result.error || "An unexpected error occurred. Please try again.",
          );
        }
      } else {
        await createProperty(data);
        toast.success("New property has been created.");
        router.push("/dashboard/properties");
      }
    } catch (error) {
      console.error("Failed to save property:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function onDelete() {
    if (!property || !property.id) return;

    setIsDeleting(true);
    try {
      await deleteProperty(property.id);
      toast.success("Property has been deleted.");
      router.push("/dashboard/properties");
      router.refresh();
    } catch (error) {
      console.error("Failed to delete property:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred while deleting. Please try again.",
      );
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8"
      >
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Tabs defaultValue="general">
            <TabsList>
              <TabsTrigger value="general">General Info</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="details">Details & Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Core Property Details</CardTitle>
                  <CardDescription>
                    Basic information about the property.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Executive Waterfront Residence"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detailed Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Provide a compelling, sales-ready description of the property..."
                            rows={5}
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lease & Location</CardTitle>
                  <CardDescription>
                    Rent is due by the 7th of each month. Leases are subject to
                    termination after 3 months of non-payment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Rate (ZAR)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 22000"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value, 10) || 0)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Sandton, Johannesburg"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="media">
              <Card>
                <CardHeader>
                  <CardTitle>Property Media</CardTitle>
                  <CardDescription>
                    Manage main image and gallery.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Main Image Section */}
                  <FormField
                    control={form.control}
                    name="image_url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Main Property Image</FormLabel>
                        <FormControl>
                          <UploadImage
                            folder="properties"
                            onUploadSuccess={(url) => {
                              form.setValue("image_url", url, {
                                shouldValidate: true,
                                shouldDirty: true,
                              });
                            }}
                            initialUrl={field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Separator />

                  {/* Image Gallery Section */}
                  <div>
                    <h3 className="text-lg font-medium">Image Gallery</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage the collection of images for the property.
                    </p>
                    <div className="space-y-6 mt-4">
                      {fields.map((field, index) => (
                        <Card key={field.id} className="overflow-hidden">
                          <CardHeader className="flex flex-row items-center justify-between py-4">
                            <CardTitle className="text-lg">
                              Gallery Item {index + 1}
                            </CardTitle>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600"
                              onClick={() => remove(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <FormField
                              control={form.control}
                              name={`gallery.${index}.imageUrl`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Image</FormLabel>
                                  <FormControl>
                                    <UploadImage
                                      folder="properties/gallery"
                                      onUploadSuccess={(url) => {
                                        form.setValue(
                                          `gallery.${index}.imageUrl`,
                                          url,
                                          {
                                            shouldValidate: true,
                                            shouldDirty: true,
                                          },
                                        );
                                      }}
                                      initialUrl={field.value}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`gallery.${index}.title`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Title</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`gallery.${index}.description`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Description</FormLabel>
                                  <FormControl>
                                    <Textarea rows={2} {...field} value={field.value ?? ''} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-6"
                      onClick={() =>
                        append({ imageUrl: "", title: "", description: "" })
                      }
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Gallery Item
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="details">
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Property Specifications</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="bedrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            value={field.value ?? 0}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value, 10))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bathrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            value={field.value ?? 0}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value, 10))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ?? "Apartment"}
                          defaultValue={field.value ?? "Apartment"}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a property type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Apartment">Apartment</SelectItem>
                            <SelectItem value="House">House</SelectItem>
                            <SelectItem value="Villa">Villa</SelectItem>
                            <SelectItem value="Loft">Loft</SelectItem>
                            <SelectItem value="Cottage">Cottage</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Property Features</CardTitle>
                  <CardDescription>Enter one feature per line.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="features"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder={"e.g., 24/7 Security\nConcierge\nPool"}
                            rows={5}
                            {...field}
                            onChange={(e) =>
                              field.onChange(e.target.value.split("\n"))
                            }
                            value={
                              Array.isArray(field.value)
                                ? field.value.join("\n")
                                : ""
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Property Reviews</CardTitle>
                  <CardDescription>
                    Manage customer reviews for this property.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="space-y-6 mt-4">
                      {reviewFields.map((field, index) => (
                        <Card key={field.id}>
                          <CardHeader className="flex flex-row items-center justify-between py-4">
                            <CardTitle className="text-lg">
                              Review {index + 1}
                            </CardTitle>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600"
                              onClick={() => removeReview(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <FormField
                              control={form.control}
                              name={`reviews.${index}.author`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Author</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`reviews.${index}.rating`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Rating</FormLabel>
                                  <FormControl>
                                    <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value, 10) || 0)} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`reviews.${index}.comment`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Comment</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      rows={2}
                                      {...field}
                                      value={field.value ?? ""}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-6"
                      onClick={() =>
                        appendReview({ author: "", rating: 5, comment: "" })
                      }
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Status & Visibility</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange(value === "true")
                      }
                      defaultValue={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Available</SelectItem>
                        <SelectItem value="false">
                          Occupied / Unavailable
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="is_featured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Status</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange(value === "true")
                      }
                      defaultValue={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select featured status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Featured</SelectItem>
                        <SelectItem value="false">Not Featured</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <div className="flex flex-col gap-2">
            <Button type="submit" variant="default" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {property ? "Save Changes" : "Create Property"}
            </Button>
            {property && (
              <Button
                variant="destructive"
                type="button"
                onClick={onDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="mr-2 h-4 w-4" />
                )}
                Delete Property
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
````

## File: apps/admin/app/dashboard/properties/property/[id]/page.tsx
````typescript
import {
  ArrowLeft,
  Bath,
  Bed,
  CheckCircle,
  Edit,
  Home,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { featureSchema, galleryItemSchema, reviewSchema } from "@repo/supabase";
import { getPropertyById } from "../../actions";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Property not found</h1>
        <p className="text-gray-600">
          The property you are looking for does not exist.
        </p>
        <p className="text-gray-600">here is the id: {id}</p>
      </div>
    );
  }

  const parsedFeatures = featureSchema.array().safeParse(property.features ?? []);
  const parsedGallery = galleryItemSchema
    .array()
    .safeParse(property.gallery ?? []);
  const parsedReviews = reviewSchema.array().safeParse(property.reviews ?? []);
  const features = parsedFeatures.success ? parsedFeatures.data : [];
  const gallery = parsedGallery.success ? parsedGallery.data : [];
  const reviews = parsedReviews.success ? parsedReviews.data : [];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-4 flex items-center justify-between">
        <Link href="/dashboard/properties">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Button>
        </Link>
        <Link href={`/dashboard/properties/property/${property.id}/edit`}>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Property
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_350px]">
        <div className="grid auto-rows-max items-start gap-8">
          {/* Main Property Card */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative h-96">
                {property.image_url ? (
                  <Image
                    src={property.image_url}
                    alt={property.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center rounded-t-lg bg-muted text-sm text-muted-foreground">
                    No property image
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle className="text-3xl font-bold">
                {property.title}
              </CardTitle>
              <div className="flex items-center text-lg text-muted-foreground mt-2">
                <MapPin className="h-5 w-5 mr-2" />
                {property.location}
              </div>
              <Separator className="my-4" />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  <span>{property.type}</span>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </CardContent>
          </Card>

          {/* Features Card */}
          {features.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Gallery Card */}
          {gallery.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Property Gallery</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((image) => (
                  <div key={image.imageUrl} className="relative h-48">
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid auto-rows-max items-start gap-8">
          {/* Status & Price Card */}
          <Card>
            <CardHeader>
              <CardTitle>Status & Pricing</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Availability</span>
                <Badge
                  variant={property.availability ? "default" : "destructive"}
                >
                  {property.availability ? "Available" : "Occupied"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Featured</span>
                <Badge variant={property.is_featured ? "default" : "secondary"}>
                  {property.is_featured ? "Yes" : "No"}
                </Badge>
              </div>
              <Separator />
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Monthly Rate</span>
                <p className="text-2xl font-bold">
                  R {property.price.toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reviews Card */}
          {reviews.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Client Reviews</CardTitle>
                <CardDescription>
                  What previous tenants are saying.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews.map((review, reviewIndex) => (
                  <div
                    key={review.id ?? `${review.author}-${reviewIndex}`}
                    className="p-4 rounded-lg border"
                  >
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={`${review.id ?? review.author}-${reviewIndex}-star-${i}`}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="ml-2 font-semibold">{review.author}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: apps/admin/app/dashboard/submissions/actions.ts
````typescript
'use server';

import { revalidatePath } from 'next/cache';
import {
  updateBrandingInquiryStatus as updateBrandingInquiryStatusService,
  deleteBrandingInquiry as deleteBrandingInquiryService,
  getBrandingInquiries as getBrandingInquiriesService,
} from "@repo/supabase/services/branding";
import {
  updateLeaseApplicationStatus as updateLeaseApplicationStatusService,
  deleteLeaseApplication as deleteLeaseApplicationService,
  getLeaseApplications as getLeaseApplicationsService,
} from "@repo/supabase/services/properties";

// Action to update the status of a branding inquiry
export async function updateBrandingInquiryStatus(id: string, status: string) {
  try {
    await updateBrandingInquiryStatusService(id, status);
    revalidatePath('/dashboard/submissions');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Action to delete a branding inquiry
export async function deleteBrandingInquiry(id: string) {
  try {
    await deleteBrandingInquiryService(id);
    revalidatePath('/dashboard/submissions');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Action to update the status of a lease application
export async function updateLeaseApplicationStatus(id: string, status: string) {
  try {
    await updateLeaseApplicationStatusService(id, status);
    revalidatePath('/dashboard/submissions');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Action to delete a lease application
export async function deleteLeaseApplication(id: string) {
  try {
    await deleteLeaseApplicationService(id);
    revalidatePath('/dashboard/submissions');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Fetches all lease applications with property titles
export async function getLeaseApplications() {
  try {
    const data = await getLeaseApplicationsService();
    return data.map((app: any) => ({
      ...app,
      property_title: app.properties?.title ?? 'Property Not Found',
      property_id: app.properties?.id ?? '',
    }));
  } catch (error) {
    console.error('Error fetching lease applications:', error);
    return [];
  }
}

// Fetches all branding inquiries with product titles
export async function getBrandingInquiries() {
  try {
    const data = await getBrandingInquiriesService();
    return data.map((inquiry: any) => ({
      ...inquiry,
      product_title: inquiry.branding?.title ?? 'Product Not Found',
      product_id: inquiry.branding?.id ?? '',
    }));
  } catch (error) {
    console.error('Error fetching branding inquiries:', error);
    return [];
  }
}
````

## File: apps/admin/app/dashboard/tenants/page.tsx
````typescript
import { Edit, Eye, MoreHorizontal, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTenants } from "./actions";
import { type Tenant } from "@repo/supabase";

const getStatusBadgeClass = (status: Tenant["status"]) => {
  switch (status) {
    case "Active":
      return "bg-green-500 text-white";
    case "Inactive":
      return "bg-red-500 text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default async function AdminTenantsPage() {
  const tenants = await getTenants();
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Tenant Management</h1>
          <p className="text-muted-foreground">
            View and manage all tenants in your properties.
          </p>
        </div>
        <Link href="/dashboard/tenants/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Tenant
          </Button>
        </Link>
      </div>
      <Card className="bg-brand-card">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tenant</TableHead>
                <TableHead>Property</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-right">Lease End Date</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={tenant.avatar_url ?? undefined} alt={tenant.name} />
                        <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                        <p className="font-bold">{tenant.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {tenant.id}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {tenant.property_id ? (
                      <Link
                        href={`/dashboard/properties/property/${tenant.property_id}`}
                        className="hover:underline"
                      >
                        {tenant.property?.title ?? 'N/A'}
                      </Link>
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={getStatusBadgeClass(tenant.status as Tenant["status"])}>
                      {tenant.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {tenant.lease_end_date ? new Date(tenant.lease_end_date).toLocaleDateString() : 'N/A'}
                  </TableCell>
                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/dashboard/tenants/tenant/${tenant.id}`}
                            className="flex items-center w-full"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/dashboard/tenants/tenant/${tenant.id}/edit`}
                            className="flex items-center w-full"
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/admin/app/dashboard/tenants/tenant/[id]/edit/page.tsx
````typescript
import { type Tenant } from "@repo/supabase";
import { getTenantById } from "../../../actions";
import TenantForm from "../../../tenant-form";

export default async function EditTenantPage({ params }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const tenant = await getTenantById(id);

    if (!tenant) {
        return <div>Tenant not found</div>;
    }

    return (
        <TenantForm tenant={tenant as Tenant & { id: string }} />
    );
}
````

## File: apps/admin/app/layout.tsx
````typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage your properties and tenants with ease.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
````

## File: apps/admin/app/login/actions.ts
````typescript
'use server';

import { createSupabaseServerClient } from '@repo/supabase/server';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export async function login(values: LoginFormValues) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (error) {
    return {
      error: error.message,
    };
  } else if (data.user) {
    return {
      success: true,
    };
  }
  return {
    error: 'An unknown error occurred.',
  };
}

export async function logout() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect('/login');
}
````

## File: apps/admin/app/page.tsx
````typescript
import { createSupabaseServerClient } from '@repo/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminHomePage() {
  const supabase = await createSupabaseServerClient()

  const { data } = await supabase.auth.getUser()
  console.log("home page", data.user)
  if (data.user) {
    redirect('/dashboard')
  } else {
    redirect('/login')
  }
}
````

## File: apps/admin/components/layout/Header.tsx
````typescript
'use client';

import {
  Archive,
  BookUser,
  Building2,
  CircleUser,
  Home,
  LogOut,
  Menu,
  Package2,
  PlusCircle,
  ShoppingCart,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { logout } from '@/app/login/actions';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-secondary px-4 lg:h-[60px] lg:px-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col bg-secondary text-white"
        >
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              <Package2 className="h-6 w-6 text-primary" />
              <span className="sr-only">Letsheng Inc</span>
            </Link>
            <Link
              href="/dashboard"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              href="/dashboard/properties"
              onClick={() => setIsOpen(false)}
            >
              <Building2 className="h-4 w-4" /> Estates
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              href="/dashboard/tenants"
              onClick={() => setIsOpen(false)}
            >
              <BookUser className="h-4 w-4" />
              Tenants
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              href="/dashboard/branding"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="h-4 w-4" />
              Branding Shop
            </Link>
            <Link
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-300 hover:text-white hover:bg-primary/20"
              href="/dashboard/submissions"
              onClick={() => setIsOpen(false)}
            >
              <Archive className="h-4 w-4" />
              Submissions
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1"></div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Quick Add
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Create New</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href="/dashboard/properties/new"
              className="flex items-center w-full"
            >
              <Building2 className="h-4 w-4 mr-2" />
              Property
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/dashboard/branding/new"
              className="flex items-center w-full"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Branding Product
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => logout()}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
````

## File: apps/admin/components/layout/Sidebar.tsx
````typescript
import {
  Archive,
  BookUser,
  Building2,
  Home,
  Package2,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-secondary text-white md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b border-primary/30 px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-white"
          >
            <Package2 className="h-6 w-6 text-primary" />
            <span>Letsheng Inc.</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <SidebarSection title="Core" />
            <SidebarLink href="/dashboard" icon={<Home className="h-4 w-4" />}>
              Dashboard
            </SidebarLink>

            <SidebarSection title="Operations" />
            <SidebarLink
              href="/dashboard/properties"
              icon={<Building2 className="h-4 w-4" />}
            >
              Estates
            </SidebarLink>
            <SidebarLink
              href="/dashboard/tenants"
              icon={<BookUser className="h-4 w-4" />}
            >
              Tenants
            </SidebarLink>
            <SidebarLink
              href="/dashboard/branding"
              icon={<ShoppingCart className="h-4 w-4" />}
            >
              Branding Shop
            </SidebarLink>

            <SidebarSection title="Admin" />
            <SidebarLink
              href="/dashboard/submissions"
              icon={<Archive className="h-4 w-4" />}
            >
              Submissions
            </SidebarLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

const SidebarSection = ({ title }: { title: string }) => (
  <h3 className="px-3 py-2 text-xs font-semibold uppercase text-primary/50 tracking-wider">
    {title}
  </h3>
);

const SidebarLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white hover:bg-primary/20"
  >
    {icon}
    {children}
  </Link>
);

export default Sidebar;
````

## File: apps/client/app/about/page.tsx
````typescript
import { 
  Building, 
  Droplet, 
  Lightbulb, 
  Printer, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Target, 
  Users, 
  ChevronRight, 
  Zap,
  Globe,
  MapPin,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ==============================================
// Page-Specific Components
// ==============================================

const Pillar = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="text-center group">
    <div className="w-16 h-16 bg-primary/10 text-secondary rounded-full mx-auto flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-secondary">{title}</h4>
    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{children}</p>
  </div>
);

const LeadershipCard = ({
  name,
  title,
  bio,
}: {
  name: string;
  title: string;
  bio: string;
}) => (
  <Card className="text-center pt-6 shadow-md border-none bg-white/50 backdrop-blur-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-secondary text-2xl">{name}</CardTitle>
      <p className="text-primary font-semibold">{title}</p>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </CardContent>
  </Card>
);

const InfoSection = ({ title, subtitle, children, className = "" }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) => (
  <section className={`space-y-12 ${className}`}>
    <div className="text-center space-y-4">
      <h2 className="text-4xl font-extrabold text-secondary tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
    {children}
  </section>
);

// ==============================================
// Main Page Component
// ==============================================

export default function AboutPage() {
  return (
    <div className="animate-fade-in space-y-24 pb-20">
      {/* Hero Header */}
      <header className="text-center pt-10 px-4">
        <Badge variant="outline" className="mb-4 py-1 px-4 text-primary border-primary/30 uppercase tracking-widest text-xs">
          Est. 2023 • Mpumalanga, SA
        </Badge>
        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6">
          The Letsheng Standard
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Letsheng Holdings is an innovative South African enterprise providing 
          premium housing, high-fidelity branding, and essential community services. 
          We are driven by a simple philosophy: <span className="text-secondary font-semibold italic">"Where comfort meets cleanliness and serenity."</span>
        </p>
      </header>

      <main className="space-y-32">

        {/* Vision & Mission */}
        <section className="px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-xl border-none bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="flex-row items-center space-x-4 pb-2">
                <div className="p-3 bg-secondary/10 rounded-xl">
                    <Target className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold text-secondary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To deliver innovative, affordable, and reliable services that address the growing demand for housing, cleanliness, and water security, while simultaneously empowering businesses through high-quality branding materials. We prioritize customer satisfaction and community wellbeing above all else.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-xl border-none bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="flex-row items-center space-x-4 pb-2">
                <div className="p-3 bg-primary/10 rounded-xl">
                    <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-secondary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To become South Africa's most trusted provider of modern living spaces, impactful corporate branding, and reliable essential services. We envision a future where our integrated solutions make our clients' lives easier, more secure, and highly successful.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Synergy Story - NEW */}
        <InfoSection 
          title="Integrated Excellence" 
          subtitle="How our divisions work together to elevate your lifestyle and business."
          className="max-w-6xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">One Company, Complete Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                At Letsheng Holdings, we believe that quality of life and business success are built on the same foundation: reliability. 
                Whether we are providing a private sanctuary for a young professional or crafting the corporate identity for a growing firm, 
                our approach remains the same—combining modern technology with genuine craftsmanship.
              </p>
              <ul className="space-y-3">
                {[
                  "Properties managed with tenant-first technology",
                  "Branding produced with high-fidelity accuracy",
                  "Logistics infrastructure supporting nationwide delivery",
                  "Future-proof utility security (Jojo tanks & solar)"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/5 p-8 rounded-3xl border border-secondary/10">
              <div className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Reach</p>
                  <p className="text-lg font-bold text-secondary">National</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Focus</p>
                  <p className="text-lg font-bold text-secondary">Community</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Growth</p>
                  <p className="text-lg font-bold text-secondary">200% YoY</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Base</p>
                  <p className="text-lg font-bold text-secondary">Mpumalanga</p>
                </div>
              </div>
            </div>
          </div>
        </InfoSection>

        {/* Why Choose Us / Differentiators */}
        <InfoSection title="The Letsheng Advantage" subtitle="What sets our integrated divisions apart from the rest.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Unmatched Privacy</h4>
              <p className="text-sm text-gray-600">Our rental units prioritize your personal space with en-suite bathrooms and private facilities as standard.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Utility Security</h4>
              <p className="text-sm text-gray-600">Equipped with Jojo tanks and backup systems, we ensure municipal outages don't disrupt your daily life.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Printer className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">High-Fidelity Branding</h4>
              <p className="text-sm text-gray-600">Our digital proofing and premium inks ensure 100% brand accuracy for your corporate identity.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Globe className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">National Logistics</h4>
              <p className="text-sm text-gray-600">We maintain the infrastructure to deliver branding projects and services across all nine provinces.</p>
            </div>
          </div>
        </InfoSection>

        {/* Synergistic Divisions */}
        <section className="bg-secondary/5 rounded-[3rem] py-20 px-6 mx-4">
          <InfoSection title="Our Strategic Pillars" subtitle="Four divisions, one commitment to excellence.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Building className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Letsheng Estates</CardTitle>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none w-fit">Active Division</Badge>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Modern, secure rental units tailored for the working class. Includes en-suite bathrooms, carports, and consistent water supply.
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Printer className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Letsheng Print</CardTitle>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none w-fit">Active Division</Badge>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Precision branding and marketing materials. We combine technology and craftsmanship to deliver apparel, banners, and more.
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg opacity-80">
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-gray-400 mb-2" />
                  <CardTitle>Cleaning Solutions</CardTitle>
                  <Badge variant="secondary" className="w-fit">Upcoming</Badge>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Industrial-grade bulk detergents for schools and offices. Promoting nationwide hygiene at an affordable price point.
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg opacity-80">
                <CardHeader>
                  <Droplet className="h-10 w-10 text-gray-400 mb-2" />
                  <CardTitle>Bulk Water Supply</CardTitle>
                  <Badge variant="secondary" className="w-fit">Upcoming</Badge>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Safe, purified water distribution for rural communities and businesses to ensure consistent water security.
                </CardContent>
              </Card>
            </div>
          </InfoSection>
        </section>

        {/* Future Outlook / Timeline */}
        <InfoSection title="Our Growth Roadmap" subtitle="Strategic expansion plans through 2029.">
          <div className="max-w-4xl mx-auto relative px-6">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            
            <div className="space-y-12">
              {[
                { 
                  title: "Facility Expansion", 
                  desc: "Acquiring more properties and increasing the count of affordable rental units across new provinces." 
                },
                { 
                  title: "Premium Housing Launch", 
                  desc: "Developing semi-luxury units for professionals seeking higher-end living solutions in urban hubs." 
                },
                { 
                  title: "Digital Transformation", 
                  desc: "Launching a tenant portal for payments and an e-commerce platform for our branding and supply services." 
                },
                { 
                  title: "Sustainable Infrastructure", 
                  desc: "Implementing solar-powered water systems and eco-friendly manufacturing for our industrial products." 
                }
              ].map((step, i) => (
                <div key={i} className="relative md:pl-16">
                  <div className="hidden md:block absolute left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                  <h4 className="font-bold text-xl text-secondary">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InfoSection>

        {/* Core Values */}
        <InfoSection title="Our Core Values">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-4">
            <Pillar icon={<ShieldCheck className="h-8 w-8" />} title="Honesty">
              Building long-lasting trust through total transparency in every lease and every print project.
            </Pillar>
            <Pillar icon={<Lightbulb className="h-8 w-8" />} title="Innovation">
              Constantly upgrading our facilities and print technology to stay ahead of market demands.
            </Pillar>
            <Pillar icon={<Users className="h-8 w-8" />} title="Team Work">
              Uplifting South African communities through the collective effort of our diverse, talented team.
            </Pillar>
          </div>
        </InfoSection>

        {/* Leadership Section - Text Focused */}
        <InfoSection title="Strategic Leadership" subtitle="The minds behind our national expansion.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            <LeadershipCard
              name="Kgotso Sondo"
              title="CEO & Founder"
              bio="Directing the strategic vision and scaling Letsheng Holdings as a national force in property and industrial sectors."
            />
            <LeadershipCard
              name="Operations Team"
              title="Service Coordination"
              bio="Ensuring quality control across our estates and high-fidelity accuracy in our branding production house."
            />
            <LeadershipCard
              name="Admin & Client Support"
              title="Compliance & Support"
              bio="Dedicated to handling tenant relations, branding inquiries, and maintaining our high regulatory standards."
            />
          </div>
        </InfoSection>

        {/* Split CTA Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-secondary rounded-[2.5rem] p-12 text-white flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Building className="h-32 w-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl text-primary font-bold mb-4 tracking-tight">Looking for a Home?</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-sm leading-relaxed">Secure your spot in one of our private, modern rental units today. Explore our latest vacancies.</p>
              </div>
              <Link href="/properties" className="relative z-10 inline-flex items-center text-primary text-xl font-bold hover:gap-3 transition-all">
                Browse Properties <ChevronRight className="ml-1 h-6 w-6" />
              </Link>
            </div>
            
            <div className="group bg-primary rounded-[2.5rem] p-12 text-white flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Printer className="h-32 w-32 text-secondary" />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4 tracking-tight text-secondary">Need Branding?</h3>
                <p className="text-blue-100 text-lg mb-8 max-w-sm leading-relaxed">From apparel to large scale signage, we bring your corporate vision to life with high-fidelity printing.</p>
              </div>
              <Link href="/branding" className="relative z-10 inline-flex items-center text-secondary text-xl font-bold hover:gap-3 transition-all">
                Start a Project <ChevronRight className="ml-1 h-6 w-6" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
````

## File: apps/client/app/api/revalidate/route.ts
````typescript
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const { path, tag } = await request.json();

  if (path) {
    revalidatePath(path, 'layout');
    return NextResponse.json({ revalidated: true, now: Date.now(), path });
  }

  if (tag) {
    revalidateTag(tag, 'max');
    return NextResponse.json({ revalidated: true, now: Date.now(), tag });
  }

  return NextResponse.json({ message: 'Missing path or tag' }, { status: 400 });
}
````

## File: apps/client/app/branding/[productID]/gallery/page.tsx
````typescript
import Image from "next/image";
import { galleryItemSchema } from "@repo/supabase";

import { Card } from "@/components/ui/card";
import { getBrandingProduct } from "../../actions";

export default async function ProductGalleryPage({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;
  const product = await getBrandingProduct(productID);

  if (!product) {
    return <div>Product not found</div>;
  }

  const parsedGallery = galleryItemSchema
    .array()
    .safeParse(product.gallery ?? []);
  const gallery = parsedGallery.success ? parsedGallery.data : [];

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl font-extrabold text-secondary tracking-tight mb-2">
        Gallery: {product.title}
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        A closer look at our craftsmanship.
      </p>

      {gallery.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((image, index) => (
            <Card
              key={image.imageUrl}
              className="overflow-hidden shadow-lg rounded-2xl"
            >
              <div className="relative h-80">
                <Image
                  src={image.imageUrl}
                  alt={`${product.title} - Gallery Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center text-muted-foreground">
          No gallery images are available for this product yet.
        </Card>
      )}
    </div>
  );
}
````

## File: apps/client/app/branding/[productID]/page.tsx
````typescript
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { galleryItemSchema, reviewSchema, specItemSchema } from "@repo/supabase";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBrandingProduct } from "../actions";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;
  const product = await getBrandingProduct(productID);

  if (!product) {
    return <div>Product not found</div>;
  }

  const parsedSpecs = specItemSchema.array().safeParse(product.specs ?? []);
  const parsedGallery = galleryItemSchema
    .array()
    .safeParse(product.gallery ?? []);
  const parsedReviews = reviewSchema.array().safeParse(product.reviews ?? []);
  const specs = parsedSpecs.success ? parsedSpecs.data : [];
  const gallery = parsedGallery.success ? parsedGallery.data : [];
  const reviews = parsedReviews.success ? parsedReviews.data : [];

  return (
    <div className="animate-fade-in">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-96 rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={product.image ?? "/logo.jpg"}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge variant="default" className="font-semibold mb-2">
                {product.category}
              </Badge>
              <h1 className="text-5xl font-extrabold text-secondary tracking-tight">
                {product.title}
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                {product.description}
              </p>

              {specs.length > 0 && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between text-sm"
                      >
                        <span className="font-semibold text-gray-600">
                          {spec.label}:
                        </span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              <div className="mt-8 flex gap-4">
                <Link href={`/branding/${product.id}/order`} className="flex-1">
                  <Button size="lg" className="w-full font-bold text-lg">
                    <ShoppingCart className="h-5 w-5 mr-3" />
                    Order
                  </Button>
                </Link>

              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          {gallery.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Product Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.slice(0, 3).map((image) => (
                  <div key={image.imageUrl} className="relative h-48">
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 bg-secondary/70 text-white p-2 w-full rounded-b-lg">
                      <h4 className="font-bold text-primary">
                        {image.title}
                      </h4>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                ))}
                {gallery.length > 3 && (
                  <Link
                    href={`/branding/${product.id}/gallery`}
                    className="relative h-48 flex items-center justify-center bg-gray-200 rounded-lg"
                  >
                    <Button>Show More</Button>
                  </Link>
                )}
              </div>
            </div>
          )}

          {reviews.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Reviews
              </h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <Card
                    key={`${review.author}-${index}`}
                    className="bg-gray-50/50"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={`${review.author}-${index}-star-${i}`}
                              className="h-5 w-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="ml-2 font-bold text-secondary">
                          {review.author}
                        </p>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          <div className="mt-8 flex gap-4">
            <Link href={`/branding/${product.id}/order`} className="flex-1">
              <Button size="lg" className="w-full font-bold text-lg">
                <ShoppingCart className="h-5 w-5 mr-3" />
                Order Now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/client/app/branding/page.tsx
````typescript
import {
  Paintbrush,
  Tag,
  Clock,
  CheckCircle2,
  CircleDollarSign,
  ArrowRight,
  Zap,
  Layers
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getBrandingProducts } from "./actions";

export const dynamic = "force-dynamic";

function BrandingHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="absolute top-0 left-0 -translate-y-12 -translate-x-12 blur-3xl opacity-10 pointer-events-none">
        <div className="aspect-square h-[500px] rounded-full bg-primary" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
          <Layers className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
            Custom Corporate Identity
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6">
          Letsheng <span className="text-primary">Branding</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          We translate your vision into tangible professional assets. From high-quality
          apparel to full-scale corporate identity kits, we build the visual
          tools for your business growth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <Paintbrush className="h-5 w-5 text-primary" />
            <span>Custom Design</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>Rapid Production</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function BrandingPage() {
  const products = await getBrandingProducts();

  return (
    <div className="animate-fade-in">
      <BrandingHero />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {products.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col transition-all hover:shadow-xl"
          >
            <div className="relative aspect-square overflow-hidden">
              <Link href={`/branding/${p.id}`}>
                <Image
                  src={p.image ?? "/logo.jpg"}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                {p.is_featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-secondary font-bold">
                      Featured
                    </Badge>
                  </div>
                )}
              </Link>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-secondary leading-tight">
                  {p.title}
                </CardTitle>
                <Badge variant="outline" className="shrink-0 border-primary text-primary bg-primary/5">
                  {p.category}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 pt-1">Professional Identity Solutions</p>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="flex items-center text-gray-600 space-x-4 mb-4">
                <div className="flex items-center text-sm">
                  <Tag className="h-4 w-4 mr-2 text-primary" />
                  <span>Premium</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>Quick</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Bulk Ready</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed line-clamp-2 mb-6">
                {p.description}
              </p>

              {/* Simplified Specifications List */}
              <div className="space-y-2 pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Specifications</p>
                {(p.specs as any[]).slice(0, 3).map((spec) => (
                  <div key={spec.label} className="flex justify-between text-sm border-b border-gray-50 pb-1">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-medium text-secondary">{spec.value}</span>
                  </div>
                ))}
              </div>


            </CardContent>

            <CardFooter className="bg-gray-50/50 px-6 py-4 flex items-center justify-between mt-auto ">
              <Link href={`/branding/${p.id}`}>
                <Button size="sm" variant="outline">View Catalog</Button>
              </Link>
              <Link href={`/branding/${p.id}/order`}>
                <Button size="sm" variant="default">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Trust Banner */}
      <section className="mt-20 p-8 rounded-2xl bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl text-primary font-bold">Custom Branding Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div>
              <div className="text-primary font-black text-xl mb-1">01. Quote</div>
              <p className="text-sm text-gray-400">Tailored estimate in 24 hours.</p>
            </div>
            <div>
              <div className="text-primary font-black text-xl mb-1">02. Proof</div>
              <p className="text-sm text-gray-400">Approve designs before we print.</p>
            </div>
            <div>
              <div className="text-primary font-black text-xl mb-1">03. Deliver</div>
              <p className="text-sm text-gray-400">Fast nationwide delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
````

## File: apps/client/app/contact/actions.ts
````typescript
'use server';

import {
  contactMessageSchema,
  type ContactMessage,
} from "@repo/supabase";
import { submitContactMessage } from "@repo/supabase/services/contact";

export async function sendContactMessage(
  data: ContactMessage,
): Promise<{ success: boolean; error?: string }> {
  const validatedFields = contactMessageSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid contact details provided.",
    };
  }

  try {
    await submitContactMessage(validatedFields.data);
    return { success: true };
  } catch (error) {
    console.error("Contact submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
````

## File: apps/client/app/contact/contact-form.tsx
````typescript
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactMessageSchema,
  type ContactMessage,
} from "@repo/supabase";
import { sendContactMessage } from "./actions";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactMessage>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactMessage) {
    setIsSubmitting(true);
    try {
      const result = await sendContactMessage(data);
      if (result.success) {
        toast.success("Message sent successfully.");
        form.reset();
      } else {
        toast.error(result.error ?? "Unable to send your message.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+27..." {...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="How can we help?"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Tell us what you need"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size="lg"
          className="w-full font-bold"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Send Message
        </Button>
      </form>
    </Form>
  );
}
````

## File: apps/client/app/contact/page.tsx
````typescript
import { Mail, MapPin, Phone } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businessInfo } from "@/lib/business";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div className="animate-fade-in space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-secondary tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help. Whether you have a question about our services or
          want to discuss a partnership, we'd love to hear from you.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-secondary">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-secondary">
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Our Office</h4>
                <p>{businessInfo.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                {businessInfo.phones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                {businessInfo.emails.map((email) => (
                  <p key={email}>{email}</p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
````

## File: apps/client/app/layout.tsx
````typescript
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
    default: "Letsheng Holdings | Premium Estates & Corporate Branding",
    template: "%s | Letsheng Holdings",
  },
  description:
    "Your strategic partner for premium residential estates and high-fidelity corporate branding. We build environments and create identities that empower success.",
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
````

## File: apps/client/app/page.tsx
````typescript
import {
  ArrowRight,
  Bath,
  Bed,
  FileText,
  Search,
  Star,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBrandingProducts } from "./branding/actions";
import { getProperties } from "./properties/actions";
import WaterDetergentsSpotlight from "@/components/branding/waterDetergents";

export const dynamic = "force-dynamic";

// ==============================================
// Sub-Components
// ==============================================

const FeaturedPropertyCard = ({
  id,
  imageUrl,
  title,
  price,
  bedrooms,
  bathrooms,
  description,
}: {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  bedrooms: number | null;
  bathrooms: number | null;
  description: string;
}) => (
  <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-none bg-white flex flex-col">
    <div className="relative h-64 overflow-hidden"> {/* Consistent Height */}
              <Link href={`/properties/${id}`}>
                <Image
                  src={imageUrl || "/logo.jpg"}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </Link>
          
      <div className="absolute top-4 right-4">
        <Badge className="bg-primary text-secondary font-bold px-3 py-1">Featured Estate</Badge>
      </div>
    </div>
    <CardHeader className="pb-2">
      <div >
        <CardTitle className="text-secondary text-xl font-bold">{title}</CardTitle>

      </div>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed flex-grow">{description}</p>
      <p className="font-black text-primary">{price}</p>
      <div className="flex items-center text-gray-500 gap-4 mb-6 py-4 border-y border-gray-50">
        <div className="flex items-center text-xs font-medium">
          <Bed className="h-4 w-4 mr-1.5 text-primary" />
          <span>{bedrooms ?? 0} Bedrooms</span>
        </div>
        <div className="flex items-center text-xs font-medium">
          <Bath className="h-4 w-4 mr-1.5 text-primary" />
          <span>{bathrooms ?? 0} bathrooms</span>
        </div>
      </div>
      <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
        <Link href={`/properties/${id}`}>View Property</Link>
      </Button>
    </CardContent>
  </Card>
);

const FeaturedProductCard = ({
  id,
  image,
  title,
  category,
  description,
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}) => (
  <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-none flex flex-col">
    <div className="relative aspect-square bg-gray-100 overflow-hidden">
  <Link href={`/branding/${id}`}>
      <Image
      src={image || "/logo.jpg"}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
    />
     <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <p className="text-white text-sm font-medium">High-Fidelity Branding Solutions</p>
      </div>
  </Link>
</div>
    
    <CardHeader>
      <Badge variant="outline" className="border-primary text-primary font-bold mb-2 w-fit uppercase text-[10px] tracking-widest">
        {category}
      </Badge>
      <CardTitle className="text-secondary font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">{description}</p>
      <Button variant="outline" asChild className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
        <Link href={`/branding/${id}`}>Request Quote</Link>
      </Button>
    </CardContent>
  </Card>
);

const TestimonialCard = ({
  quote,
  author,
  authorRole,
}: {
  quote: string;
  author: string;
  authorRole: string;
}) => (
  <Card className="bg-white/60 backdrop-blur-md p-8 border-none shadow-sm hover:shadow-md transition-shadow">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 italic mb-6 leading-relaxed">"{quote}"</p>
    <div>
      <p className="font-bold text-secondary">{author}</p>
      <p className="text-xs text-primary font-semibold uppercase tracking-wider">{authorRole}</p>
    </div>
  </Card>
);

const NextStep = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start group">
    <div className="w-14 h-14 bg-white shadow-sm text-primary rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-xl text-secondary mb-1">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

// ==============================================
// Main Page Component
// ==============================================

export default async function HomePage() {
  const properties = await getProperties();
  const featuredProperties = properties.filter((p) => p.is_featured).slice(0, 3);
  const products = await getBrandingProducts();
  const featuredProducts = products.filter((p) => p.is_featured).slice(0, 3);

  return (
    <div className="animate-fade-in space-y-32 pb-20">
      <header className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center bg-secondary rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden mx-2 md:mx-4 mt-2 border border-white/5">
        {/* Background Layer: Image + Gradient Mesh */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Property Background"
            fill
            className="object-cover grayscale-[50%] select-none opacity-40 lg:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,61,68,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/50 to-secondary" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-8 py-12 md:py-24 grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Column: Copy & Actions */}
          <div className="space-y-6 md:space-y-10 text-center lg:text-left">
            {/* Badge - Responsive padding and text size */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-300">
                Est. 2023 • Leading South African Enterprise
              </span>
            </div>

            {/* Heading - Responsive font sizes */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] lg:leading-[0.9]">
                Elevating <br />
                <span className="text-primary italic drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">Ambitions</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Your strategic partner for <span className="text-white font-medium">premium residential estates</span> and
                <span className="text-white font-medium"> high-fidelity corporate branding</span>.
              </p>
            </div>

            {/* Buttons - Stack on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-bold shadow-[0_10px_20px_-10px_rgba(var(--primary),0.5)] transition-transform hover:scale-105 active:scale-95 hover:bg-white hover:text-secondary transition-all bg-primary text-secondary" asChild>
                <Link href="/properties">Explore Estates</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-bold border-white/10 bg-primary/10 text-white hover:bg-white hover:text-secondary transition-all backdrop-blur-sm" asChild>
                <Link href="/branding">Branding Solutions</Link>
              </Button>
            </div>

            {/* Stats - Responsive borders and alignment */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 md:gap-8 text-gray-500 border-t border-white/5 w-full lg:w-fit">
              <div className="text-center lg:text-left">
                <p className="text-white font-bold text-lg md:text-xl">100%</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest">Reliability</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white font-bold text-lg md:text-xl">24/7</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest">Support</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white font-bold text-lg md:text-xl">ZA</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest">National</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Elements (Hidden on mobile for better focus) */}
          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
            {/* Your visual grid of cards go here as previously designed */}
          </div>
        </div>
      </header>

      {/* Featured Estates - FIRST Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
              Featured Estates
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Discover our premier properties in Mpumalanga and Gauteng, offering unparalleled comfort,
              private en-suites, and reliable utility security.
            </p>
          </div>
          <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 hover:text-secondary" asChild>
            <Link href="/properties" className="flex items-center">
              View All Properties <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((p) => (
            <FeaturedPropertyCard
              key={p.id}
              id={p.id}
              imageUrl={p.image_url ?? "/logo.jpg"}
              title={p.title}
              price={`R ${p.price.toLocaleString()}`}
              bedrooms={p.bedrooms}
              bathrooms={p.bathrooms}
              description={p.description ?? ""}
            />
          ))}
        </div>
      </section>

      {/* Featured Products - SECOND Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
              High-Fidelity Branding
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Elevate your corporate identity with precision-crafted apparel, signage, and marketing
              materials designed for national impact.
            </p>
          </div>
          <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 hover:text-secondary" asChild>
            <Link href="/branding" className="flex items-center">
              Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((p) => (
            <FeaturedProductCard
              key={p.id}
              id={p.id}
              image={p.image ?? "/logo.jpg"}
              title={p.title}
              category={p.category ?? ""}
              description={p.description ?? ""}
            />
          ))}
        </div>
      </section>
      <WaterDetergentsSpotlight />
      {/* Testimonials */}
      <section className="bg-secondary/5 py-24 mx-4 rounded-[3rem]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-secondary tracking-tight">
              Trusted Across South Africa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our success is defined by the satisfaction of the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              quote="The leasing process was transparent and the property management is top-notch. Truly a sanctuary for professionals."
              author="Thabo Ndlovu"
              authorRole="Tenant, Soshanguve South"
            />
            <TestimonialCard
              quote="Letsheng Branding delivered our corporate gear ahead of schedule with impeccable color accuracy. Incredible partners."
              author="Sarah Mokoena"
              authorRole="Operations Director"
            />
            <TestimonialCard
              quote="A seamless experience. The attention to detail in their estates—from the Jojo tanks to the en-suite finishes—is evident."
              author="Priya Patel"
              authorRole="Resident, Mpumalanga"
            />
          </div>
        </div>
      </section>

      {/* Next Steps Guide */}
      <section className="container mx-auto px-6">
        <div className="bg-primary/5 rounded-[3rem] p-8 md:p-20 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
                Your Path to Partnership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're looking for a modern home or professional branding,
                our process is designed for speed and transparency.
              </p>
              <Button size="lg" asChild className="h-14 px-10">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="space-y-12">
              <NextStep
                icon={<Search className="w-6 h-6" />}
                title="1. Explore"
                description="Browse our verified property listings or our comprehensive branding product catalog."
              />
              <NextStep
                icon={<FileText className="w-6 h-6" />}
                title="2. Consult"
                description="Submit a viewing request or a branding brief. Our team will provide a tailored proposal within 24 hours."
              />
              <NextStep
                icon={<CheckCircle2 className="w-6 h-6" />}
                title="3. Deliver"
                description="Finalize your lease or approve your brand proofs. We handle the logistics and final execution."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
````

## File: apps/client/app/properties/[id]/apply-to-lease/page.tsx
````typescript
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getPropertyById, submitLeaseApplication, type PropertyRecord } from "../../actions";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leaseApplicationSchema, LeaseApplication } from "@repo/supabase";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';

function ApplyToLeaseForm({ propertyId, propertyTitle, propertyPrice }: { propertyId: string, propertyTitle: string, propertyPrice: number }) {
  const { register, handleSubmit, formState: { errors }, control } = useForm<LeaseApplication>({
    resolver: zodResolver(leaseApplicationSchema),
    defaultValues: {
      property_id: propertyId,
    },
  });

  const onSubmit = async (data: LeaseApplication) => {
    const result = await submitLeaseApplication(data);
    if (result.success) {
      toast.success("Application submitted successfully!");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">
          Apply to Lease
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          You are applying for the following property:
        </p>
        <h2 className="mt-4 text-2xl font-bold text-secondary">
          {propertyTitle}
        </h2>
        <p className="text-lg text-gray-600">
          Price: R{propertyPrice.toLocaleString()} / month
        </p>
      </div>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Lease Application Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="applicant_name">Full Name</Label>
                <Input id="applicant_name" placeholder="Enter your full name" {...register("applicant_name")} />
                {errors.applicant_name && <p className="text-red-500 text-sm">{errors.applicant_name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" {...register("email")} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" {...register("phone")} />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="employment">Employment Status</Label>
                <Controller
                  name="employment"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your employment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.employment && <p className="text-red-500 text-sm">{errors.employment.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea id="message" placeholder="Tell us about yourself and your leasing needs" {...register("message")} />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ApplyToLeasePage() {
  const params = useParams();
  const id = params.id as string;
  const [property, setProperty] = useState<PropertyRecord | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProperty = async () => {
      const propertyData = await getPropertyById(id);
      setProperty(propertyData);
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return <ApplyToLeaseForm propertyId={property.id} propertyTitle={property.title} propertyPrice={property.price} />;
}
````

## File: apps/client/app/properties/[id]/gallery/page.tsx
````typescript
import Image from "next/image";
import Link from "next/link";
import { galleryItemSchema } from "@repo/supabase";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { getPropertyById } from "../../actions";

export default async function PropertyGalleryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    return <div>Property not found</div>;
  }

  const parsedGallery = galleryItemSchema
    .array()
    .safeParse(property.gallery ?? []);
  const gallery = parsedGallery.success ? parsedGallery.data : [];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">
          {property.title} - Gallery
        </h1>
        <Link href={`/properties/${id}`} className="mt-4 inline-block">
          <Button variant="outline">Back to Property Details</Button>
        </Link>
      </div>
      {gallery.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((image) => (
          <Card
            key={image.imageUrl}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64">
              <Image
                src={image.imageUrl}
                alt={image.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-secondary">
                {image.title}
              </h3>
              <p className="text-gray-600">{image.description}</p>
            </CardContent>
          </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center text-muted-foreground">
          No gallery images are available for this property yet.
        </Card>
      )}
    </div>
  );
}
````

## File: apps/client/app/properties/[id]/page.tsx
````typescript
import {
  Bath,
  Bed,
  CheckCircle,
  CircleDollarSign,
  Home,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featureSchema, galleryItemSchema, reviewSchema } from "@repo/supabase";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getPropertyById } from "../actions";

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    return <div>Property not found</div>;
  }

  const parsedFeatures = featureSchema.array().safeParse(property.features ?? []);
  const parsedGallery = galleryItemSchema
    .array()
    .safeParse(property.gallery ?? []);
  const parsedReviews = reviewSchema.array().safeParse(property.reviews ?? []);
  const features = parsedFeatures.success ? parsedFeatures.data : [];
  const gallery = parsedGallery.success ? parsedGallery.data : [];
  const reviews = parsedReviews.success ? parsedReviews.data : [];

  return (
    <div className="animate-fade-in">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="relative h-96">
            <Image
              src={property.image_url ?? "/logo.jpg"}
              alt={property.title}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>
          <CardTitle className="mt-6 text-4xl font-extrabold text-secondary">
            {property.title}
          </CardTitle>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center text-lg text-gray-500">
              <MapPin className="h-5 w-5 mr-2" />
              {property.location}
            </div>
            <Badge
              variant={property.availability ? "default" : "destructive"}
              className="shrink-0"
            >
              {property.availability ? "Available" : "Occupied"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="flex flex-wrap items-center text-gray-600 space-x-4 mb-4">
            <div className="flex items-center">
              <Bed className="h-5 w-5 mr-2" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-5 w-5 mr-2" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center">
              <Home className="h-5 w-5 mr-2" />
              <span>{property.type}</span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            {property.description}
          </p>

          <h3 className="text-2xl font-bold text-secondary mb-4">Features</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>

          {gallery.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Property Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.slice(0, 3).map((image) => (
                  <div key={image.imageUrl} className="relative h-48">
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 bg-secondary/70 text-white p-2 w-full rounded-b-lg">
                      <h4 className="font-bold text-primary">
                        {image.title}
                      </h4>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                ))}
                {gallery.length > 3 && (
                  <Link
                    href={`/properties/${property.id}/gallery`}
                    className="relative h-48 flex items-center justify-center bg-gray-200 rounded-lg"
                  >
                    <Button>Show More</Button>
                  </Link>
                )}
              </div>
            </div>
          )}

          {reviews.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Reviews
              </h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <Card
                    key={`${review.author}-${index}`}
                    className="bg-gray-50/50"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={`${review.author}-${index}-star-${i}`}
                              className="h-5 w-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="ml-2 font-bold text-secondary">
                          {review.author}
                        </p>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center text-4xl font-bold text-secondary">
            <CircleDollarSign className="h-8 w-8 mr-2 text-primary" />R
            {property.price.toLocaleString()}
            <span className="text-lg font-normal text-gray-500 ml-2">
              / month
            </span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {property.availability && (
              <Link href={`/properties/${property.id}/apply-to-lease`}>
                <Button size="lg" className="w-full">
                  Apply to Lease
                </Button>
              </Link>
            )}
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full"
              >
                Request a Viewing
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
````

## File: apps/client/app/properties/actions.ts
````typescript
'use server';

import { z } from "zod";
import {
  leaseApplicationSchema,
  propertySchema,
  type Property,
} from "@repo/supabase";
import {
  getProperties as getPropertiesService,
  getPropertyById as getPropertyByIdService,
  submitLeaseApplication as submitLeaseApplicationService,
} from "@repo/supabase/services/properties";

export type PropertyRecord = Property & { id: string };

function parsePropertyRecord(data: unknown): PropertyRecord {
  const property = propertySchema.parse(data);
  if (!property.id) {
    throw new Error("Property record is missing an id.");
  }
  return property as PropertyRecord;
}

export async function getProperties(): Promise<PropertyRecord[]>{
  const properties = await getPropertiesService();
  return properties.map(parsePropertyRecord);
}

export async function getPropertyById(id: string): Promise<PropertyRecord>{
  return parsePropertyRecord(await getPropertyByIdService(id));
}

export async function submitLeaseApplication(data: z.infer<typeof leaseApplicationSchema>) {
    const validatedData = leaseApplicationSchema.safeParse(data);

    if (!validatedData.success) {
        return { success: false, error: 'Invalid data' };
    }

    try {
        await submitLeaseApplicationService(validatedData.data);
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
````

## File: apps/client/app/properties/page.tsx
````typescript
import { Bath, Bed, CircleDollarSign, Home, MapPin, ShieldCheck, Stars } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import TermsOfTenancy from "@/components/terms/TermsOfTenancy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getProperties } from "./actions";

export const dynamic = "force-dynamic";

function EstatesHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-10 pointer-events-none">
        <div className="aspect-square h-[500px] rounded-full bg-primary" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
          <Stars className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
            Premium Property Management
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6">
          Letsheng <span className="text-primary">Estates</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          Discover curated living spaces designed for comfort, security, and
          discerning taste. Our portfolio combines premium locations with
          attentive, professional management.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>Secure Rentals</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Prime Locations</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="animate-fade-in">
      <EstatesHero />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {properties.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col transition-all hover:shadow-xl"
          >
           <div className="relative h-64"> {/* Consistent Height */}
              <Link href={`/properties/${p.id}`}>
                <Image
                  src={p.image_url ?? "/logo.jpg"}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </Link>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-secondary leading-tight">
                  {p.title}
                </CardTitle>
                <Badge
                  variant={p.availability ? "default" : "destructive"}
                  className="shrink-0"
                >
                  {p.availability ? "Available" : "Occupied"}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 pt-1 flex items-center">
                <MapPin className="h-3 w-3 mr-1" /> {p.location}
              </p>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="flex items-center text-gray-600 space-x-4 mb-4">
                <div className="flex items-center text-sm">
                  <Bed className="h-4 w-4 mr-2 text-primary" />
                  <span>{p.bedrooms}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Bath className="h-4 w-4 mr-2 text-primary" />
                  <span>{p.bathrooms}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Home className="h-4 w-4 mr-2 text-primary" />
                  <span>{p.type}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed line-clamp-2">{p.description}</p>

              <div className="mt-6 flex items-center text-2xl font-bold text-secondary">
                <CircleDollarSign className="h-6 w-6 mr-2 text-primary" />R
                {p.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-500 ml-2">/ month</span>
              </div>
            </CardContent>

            <CardFooter className="bg-gray-50/50 px-6 py-4 flex items-center justify-between mt-auto ">
              <Link href={`/properties/${p.id}`}>
                <Button size="sm" variant="outline">View Details</Button>
              </Link>
              <Link href={`/properties/${p.id}/apply-to-lease`}>
                <Button size="sm" variant="default">Apply to Lease</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <TermsOfTenancy />
    </div>
  );
}
````

## File: apps/client/components/layout/Footer.tsx
````typescript
import {
  Building2,
  Droplet,
  ExternalLink,
  Facebook,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/lib/business";

const FooterLink = ({
  href,
  icon,
  children,
  isExternal = false,
}: {
  href: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  isExternal?: boolean;
}) => (
  <Link
    href={href}
    target={isExternal ? "_blank" : undefined}
    className="flex items-center text-gray-400 hover:text-primary transition-colors group text-sm"
  >
    {icon}
    {children}
  </Link>
);

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactElement;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-white/10 transition-all"
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 px-6 pb-8 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="flex flex-col items-center md:items-start group">
              <div className="relative mb-4">
                <Image
                  src="/logo.jpg"
                  alt="Letsheng Holdings Logo"
                  width={70}
                  height={70}
                  className="rounded-full shadow-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                />
              </div>
              <h3 className="text-xl font-black tracking-tighter text-white">
                LETSHENG<span className="text-primary"> HOLDINGS</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed max-w-xs">
              "{businessInfo.tagline}" {businessInfo.description}
            </p>
            <div className="flex space-x-3">
              <SocialIcon href={businessInfo.social.linkedin}>
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={businessInfo.social.facebook}>
                <Facebook className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>

          {/* Business Divisions */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Our Divisions
            </h3>
            <ul className="space-y-4">
              <li>
                <FooterLink href="/properties" icon={<Building2 className="h-4 w-4 mr-3 text-primary/60" />}>
                  Letsheng Estates
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/branding" icon={<Printer className="h-4 w-4 mr-3 text-primary/60" />}>
                  Letsheng Print & Brand
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/waterDetergents" icon={<Droplet className="h-4 w-4 mr-3 text-primary/60" />}>
                  Water and Detergents
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <FooterLink href="/about" icon={<Info className="h-4 w-4 mr-3 text-primary/60" />}>
                  Our Story & Vision
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/contact" icon={<Phone className="h-4 w-4 mr-3 text-primary/60" />}>
                  Get in Touch
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/waterDetergents" icon={<ExternalLink className="h-4 w-4 mr-3 text-primary/60" />}>
                Water and Detergents
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Headquarters
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {businessInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {businessInfo.phones.join(" / ")}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm break-all">
                  {businessInfo.emails.join(" / ")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} {businessInfo.legalName}. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
````

## File: apps/client/package.json
````json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "format": "biome format --write"
  },
  "dependencies": {
    "@repo/supabase": "workspace:*",
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-icons": "^1.3.2",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@supabase/ssr": "^0.9.0",
    "@supabase/supabase-js": "^2.99.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.575.0",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.2",
    "react-icons": "^5.5.0",
    "sonner": "^2.0.7",
    "supabase": "^2.77.0",
    "tailwind-merge": "^3.5.0",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",
    "@repo/typescript-config": "workspace:*",
    "@biomejs/biome": "2.2.0",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20.19.35",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: packages/supabase/src/auth.ts
````typescript
import { createSupabaseServerClient } from "./server";

export async function requireAdminUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized");
  }

  const { data: isAdmin, error: adminError } = await supabase.rpc("is_admin");

  if (adminError || isAdmin !== true) {
    throw new Error("Forbidden");
  }

  return user;
}
````

## File: packages/supabase/src/middleware.ts
````typescript
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function createSupabaseProxyClient(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        request.cookies.set({
          name,
          value,
          ...options,
        });
        response = NextResponse.next({
          request: {
            headers: request.headers,
          },
        });
        response.cookies.set({
          name,
          value,
          ...options,
        });
      },
      remove(name: string, options: CookieOptions) {
        request.cookies.set({
          name,
          value: "",
          ...options,
        });
        response = NextResponse.next({
          request: {
            headers: request.headers,
          },
        });
        response.cookies.set({
          name,
          value: "",
          ...options,
        });
      },
    },
  });

  return { supabase, response };
}

export const createSupabaseMiddlewareClient = createSupabaseProxyClient;
````

## File: packages/supabase/src/server.ts
````typescript
import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./types/database.types";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch {
          // The `remove` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}
````

## File: packages/supabase/src/services/dashboard.ts
````typescript
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export async function getDashboardKpis() {
    await requireAdminUser();
    const supabase = await createSupabaseServerClient();

    const { data: properties, error: propertiesError } = await supabase
        .from('properties')
        .select('price, availability');

    if (propertiesError) {
        console.error('Error fetching properties:', propertiesError);
        return null;
    }

    const { data: brandingInquiries, error: inquiriesError } = await supabase
        .from('branding_inquiries')
        .select('id, status');

    if (inquiriesError) {
        console.error('Error fetching branding inquiries:', inquiriesError);
        return null;
    }

    const { data: payments, error: paymentsError } = await supabase
        .from('payments')
        .select('amount, status');

    if (paymentsError) {
        console.error('Error fetching payments:', paymentsError);
        return null;
    }

    // Calculate KPIs
    const totalRevenue = properties
        .filter(p => !p.availability) // Assumes occupied properties generate revenue
        .reduce((sum, p) => sum + p.price, 0);

    const occupiedCount = properties.filter(p => !p.availability).length;
    const occupancyRate = properties.length > 0 ? (occupiedCount / properties.length) * 100 : 0;

    const pendingOrders = brandingInquiries.filter(i => i.status === 'New').length;

    const overduePayments = payments.filter(p => p.status === 'Late');
    const overdueAmount = overduePayments.reduce((sum, p) => sum + p.amount, 0);

    return {
        totalRevenue,
        occupancyRate,
        pendingOrders,
        overdueAmount,
        overdueCount: overduePayments.length,
    };
}

export async function getRecentLeases() {
    await requireAdminUser();
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
        .from('tenants')
        .select(`
            id,
            name,
            status,
            properties(title, price)
        `)
        .order('created_at', { ascending: false })
        .limit(5);

    if (error) {
        console.error('Error fetching recent leases:', error);
        return [];
    }

    return data.map((lease) => {
        const property = Array.isArray(lease.properties)
            ? lease.properties[0]
            : lease.properties;

        return {
            id: lease.id,
            tenant: lease.name,
            property: property?.title || 'N/A',
            amount: property?.price ? `R${property.price.toLocaleString()}/mo` : 'N/A',
            status: lease.status,
        };
    });
}
````

## File: packages/supabase/src/services/tenants.ts
````typescript
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";
import { TablesInsert, TablesUpdate } from "../types/database.types";

export async function getTenants() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .select("*, properties(title)");
  if (error) throw new Error(error.message);
  return data;
}

export async function getTenantById(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .select("*, properties(title)")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function createTenant(tenant: TablesInsert<"tenants">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .insert(tenant)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateTenant(id: string, tenant: TablesUpdate<"tenants">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .update(tenant)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteTenant(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("tenants").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function getPayments() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("payments")
    .select("*, tenants(name)");
  if (error) throw new Error(error.message);
  return data;
}

export async function createPayment(payment: TablesInsert<"payments">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("payments")
    .insert(payment)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}
````

## File: apps/admin/app/dashboard/branding/actions.ts
````typescript
'use server';

import { revalidatePath } from 'next/cache';

import { triggerRevalidation } from '@/lib/revalidation';
import {
  type Branding,
  type Json,
  type TablesInsert,
  type TablesUpdate,
} from "@repo/supabase";
import {
  createBranding as createBrandingProductService,
  deleteBranding as deleteBrandingProductService,
  getBrandingById as getBrandingProductService,
  getBranding as getBrandingProductsService,
  updateBranding as updateBrandingProductService,
} from "@repo/supabase/services/branding";

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "An unexpected error occurred.";
}

function toJson(value: unknown): Json | null {
  return value === undefined ? null : (value as Json | null);
}

function toBrandingInsert(product: Branding): TablesInsert<"branding"> {
  return {
    id: product.id,
    title: product.title,
    category: product.category,
    description: product.description,
    image: product.image,
    is_featured: product.is_featured,
    specs: toJson(product.specs),
    gallery: toJson(product.gallery),
    reviews: toJson(product.reviews),
  };
}

function toBrandingUpdate(product: Partial<Branding>): TablesUpdate<"branding"> {
  const payload: TablesUpdate<"branding"> = {};

  if (product.title !== undefined) payload.title = product.title;
  if (product.category !== undefined) payload.category = product.category;
  if (product.description !== undefined) payload.description = product.description;
  if (product.image !== undefined) payload.image = product.image;
  if (product.is_featured !== undefined) payload.is_featured = product.is_featured;
  if (product.specs !== undefined) payload.specs = toJson(product.specs);
  if (product.gallery !== undefined) payload.gallery = toJson(product.gallery);
  if (product.reviews !== undefined) payload.reviews = toJson(product.reviews);

  return payload;
}

// Action to fetch all branding products
export async function getBrandingProducts() {
  try {
    return await getBrandingProductsService();
  } catch (error) {
    console.error('Error fetching branding products:', error);
    return [];
  }
}

// Action to fetch a single branding product by its ID
export async function getBrandingProduct(id: string) {
  try {
    return await getBrandingProductService(id);
  } catch (error) {
    console.error('Error fetching branding product:', error);
    return null;
  }
}

// Action to create a new branding product
export async function createBrandingProduct(
  product: Branding,
): Promise<{ success: boolean; error?: string }> {
  try {
    await createBrandingProductService(toBrandingInsert(product));
    revalidatePath('/dashboard/branding');
    await triggerRevalidation({ path: '/branding' });
    return { success: true };
  } catch (error: unknown) {
    console.error('Error creating branding product:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

// Action to update an existing branding product
export async function updateBrandingProduct(
  id: string,
  product: Partial<Branding>,
): Promise<{ success: boolean; error?: string }> {
  try {
    await updateBrandingProductService(id, toBrandingUpdate(product));
    revalidatePath('/dashboard/branding');
    revalidatePath(`/dashboard/branding/brand/${id}`);
    await triggerRevalidation({ path: `/branding/${id}` });
    await triggerRevalidation({ path: '/branding' });
    return { success: true };
  } catch (error: unknown) {
    console.error('Error updating branding product:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}

// Action to delete a branding product
export async function deleteBrandingProduct(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    await deleteBrandingProductService(id);
    revalidatePath('/dashboard/branding');
    await triggerRevalidation({ path: '/branding' });
    return { success: true };
  } catch (error: unknown) {
    console.error('Error deleting branding product:', error);
    return { success: false, error: getErrorMessage(error) };
  }
}
````

## File: apps/admin/app/dashboard/properties/actions.ts
````typescript
'use server';

import { revalidatePath } from "next/cache";

import { triggerRevalidation } from "@/lib/revalidation";
import {
  propertySchema,
  type Json,
  type Property,
  type TablesInsert,
  type TablesUpdate,
} from "@repo/supabase";
import {
  createProperty as createPropertyService,
  deleteProperty as deletePropertyService,
  getProperties as getPropertiesService,
  getPropertyById as getPropertyByIdService,
  updateProperty as updatePropertyService,
} from "@repo/supabase/services/properties";

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "An unexpected error occurred.";
}

function toJson(value: unknown): Json | null {
  return value === undefined ? null : (value as Json | null);
}

function toPropertyInsert(property: Property): TablesInsert<"properties"> {
  return {
    id: property.id,
    title: property.title,
    description: property.description,
    price: property.price,
    location: property.location,
    availability: property.availability,
    image_url: property.image_url,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    type: property.type,
    features: toJson(property.features),
    is_featured: property.is_featured,
    gallery: toJson(property.gallery),
    reviews: toJson(property.reviews),
  };
}

function toPropertyUpdate(property: Omit<Property, "id">): TablesUpdate<"properties"> {
  return {
    title: property.title,
    description: property.description,
    price: property.price,
    location: property.location,
    availability: property.availability,
    image_url: property.image_url,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    type: property.type,
    features: toJson(property.features),
    is_featured: property.is_featured,
    gallery: toJson(property.gallery),
    reviews: toJson(property.reviews),
  };
}

export async function getProperties() {
  try {
    return await getPropertiesService() as Property[];
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function getPropertyById(id: string) {
  try {
    return await getPropertyByIdService(id) as Property;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function createProperty(data: Property) {
  const validatedData = propertySchema.parse(data);

  try {
    await createPropertyService(toPropertyInsert(validatedData));
    revalidatePath("/dashboard/properties");
    await triggerRevalidation({ path: '/properties' });
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function updateProperty(
  id: string,
  data: Property,
): Promise<{ success: boolean; error: string | null }> {
  try {
    const validatedData = propertySchema.parse(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _, ...updateData } = validatedData;

    await updatePropertyService(id, toPropertyUpdate(updateData));

    revalidatePath("/dashboard/properties");
    revalidatePath(`/dashboard/properties/property/${id}`);
    await triggerRevalidation({ path: `/properties/${id}` });
    await triggerRevalidation({ path: '/properties' });
    return { success: true, error: null };
  } catch (e: unknown) {
    console.error("Validation or unexpected error:", e);
    return { success: false, error: getErrorMessage(e) };
  }
}

export async function deleteProperty(id: string) {
  try {
    await deletePropertyService(id);
    revalidatePath("/dashboard/properties");
    await triggerRevalidation({ path: '/properties' });
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}
````

## File: apps/admin/app/dashboard/tenants/actions.ts
````typescript
'use server';

import { revalidatePath } from "next/cache";

import {
  tenantSchema,
  type TablesInsert,
  type TablesUpdate,
  type Tenant,
} from "@repo/supabase";
import {
  createTenant as createTenantService,
  deleteTenant as deleteTenantService,
  getTenants as getTenantsService,
  getTenantById as getTenantByIdService,
  updateTenant as updateTenantService,
} from "@repo/supabase/services/tenants";

type TenantRow = Omit<Tenant, "lease_end_date"> & {
  lease_end_date: string | null;
};

export type TenantWithProperty = TenantRow & {
  property: { title: string } | null;
};

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "An unexpected error occurred.";
}

function toLeaseEndDate(value: Tenant["lease_end_date"] | undefined) {
  if (value === undefined) return undefined;
  return value ? value.toISOString() : null;
}

function toTenantInsert(
  tenant: Omit<Tenant, "id" | "avatar_url">,
): TablesInsert<"tenants"> {
  return {
    name: tenant.name,
    email: tenant.email,
    property_id: tenant.property_id,
    status: tenant.status,
    lease_end_date: toLeaseEndDate(tenant.lease_end_date),
  };
}

function toTenantUpdate(
  tenant: Partial<Omit<Tenant, "id" | "avatar_url">>,
): TablesUpdate<"tenants"> {
  const payload: TablesUpdate<"tenants"> = {};

  if (tenant.name !== undefined) payload.name = tenant.name;
  if (tenant.email !== undefined) payload.email = tenant.email;
  if (tenant.property_id !== undefined) payload.property_id = tenant.property_id;
  if (tenant.status !== undefined) payload.status = tenant.status;
  if (tenant.lease_end_date !== undefined) {
    payload.lease_end_date = toLeaseEndDate(tenant.lease_end_date);
  }

  return payload;
}

export async function getTenants() {
  try {
    const tenants = await getTenantsService();
    return tenants.map((tenant) => ({
      ...tenant,
      property: tenant.properties ?? null,
    })) as TenantWithProperty[];
  } catch (error) {
    console.error("Error fetching tenants:", error);
    return [];
  }
}

export async function createTenant(formData: Omit<Tenant, "id" | "avatar_url">) {
  const insertSchema = tenantSchema.omit({ id: true, avatar_url: true });
  const validatedData = insertSchema.parse(formData);

  try {
    const data = await createTenantService(toTenantInsert(validatedData));
    revalidatePath("/dashboard/tenants");
    return { success: true, data };
  } catch (error: unknown) {
    console.error("Error creating tenant:", error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function updateTenant(
  id: string,
  formData: Partial<Omit<Tenant, "id" | "avatar_url">>
) {
  const partialTenantSchema = tenantSchema.partial().omit({ id: true, avatar_url: true });
  const validatedData = partialTenantSchema.parse(formData);

  try {
    const data = await updateTenantService(id, toTenantUpdate(validatedData));
    revalidatePath("/dashboard/tenants");
    revalidatePath(`/dashboard/tenants/${id}/edit`);
    return { success: true, data };
  } catch (error: unknown) {
    console.error("Error updating tenant:", error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function deleteTenant(id: string) {
  try {
    const data = await deleteTenantService(id);
    revalidatePath("/dashboard/tenants");
    return { success: true, data };
  } catch (error: unknown) {
    console.error("Error deleting tenant:", error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function getTenantById(id: string) {
  try {
    return await getTenantByIdService(id);
  } catch (error) {
    console.error("Error fetching tenant:", error);
    return null;
  }
}
````

## File: apps/admin/app/dashboard/tenants/tenant-form.tsx
````typescript
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Tenant, type Payment } from "@repo/supabase";
import { createTenant, deleteTenant, updateTenant } from "./actions";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@repo/supabase";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.union([z.string().email("Invalid email address"), z.literal("")]),
  property_id: z.string().optional().nullable(),
  status: z.enum(["Active", "Inactive", "Pending"]),
  lease_end_date: z.string().optional().nullable(),
});
type FormValues = z.infer<typeof formSchema>;

type TenantRecord = Tenant & { id: string };

interface TenantFormProps {
  tenant?: TenantRecord;
  payments?: (Payment & { id: string })[];
}

// Helper to format date for input
const formatDateForInput = (date: Date | string | null | undefined): string => {
    if (!date) return '';
    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) return '';
      return dateObj.toISOString().split('T')[0] ?? '';
    } catch (e) {
      return '';
    }
  };

export default function TenantForm({ tenant, payments }: TenantFormProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [properties, setProperties] = useState<{ id: string; title: string }[]>([]);
    
    const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: tenant
        ? {
            name: tenant.name,
            email: tenant.email ?? "",
            property_id: tenant.property_id ?? "",
            status: tenant.status,
            lease_end_date: formatDateForInput(tenant.lease_end_date),
          }
        : {
            name: searchParams.get('name') || "",
            email: searchParams.get('email') || "",
            property_id: searchParams.get('property_id') || "",
            status: "Pending",
            lease_end_date: "",
          },
  });

  useEffect(() => {
    const fetchProperties = async () => {
      const supabase = createSupabaseBrowserClient();
      const { data, error } = await supabase.from('properties').select('id, title');
      if (error) {
        console.error('Error fetching properties:', error);
      } else if (data) {
        setProperties(data);
      }
    };

    fetchProperties();
  }, []);

  async function onSubmit(data: FormValues) {
    const dataForAction: Omit<Tenant, "id" | "avatar_url"> = {
      name: data.name,
      email: data.email || null,
      property_id: data.property_id || null,
      status: data.status,
      lease_end_date: data.lease_end_date ? new Date(data.lease_end_date) : null,
    };

    const action = tenant
    ? await updateTenant(tenant.id, dataForAction)
    : await createTenant(dataForAction);

  if (action.success) {
    router.push("/dashboard/tenants");
    router.refresh();
  } else {
    console.error(action.error);
  }
  }

  async function handleDelete() {
    if (tenant) {
      const action = await deleteTenant(tenant.id);
      if (action.success) {
        router.push("/dashboard/tenants");
        router.refresh();
      } else {
        console.error(action.error);
      }
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4">
        <Link href="/dashboard/tenants">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tenants
          </Button>
        </Link>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>
                {tenant ? "Edit Tenant" : "Create New Tenant"}
              </CardTitle>
              <CardDescription>
                Fill out the details below to manage a tenant.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tenant Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., john.doe@example.com" {...field} value={field.value ?? ''}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="property_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ''}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a property" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {properties.map((property) => (
                            <SelectItem key={property.id} value={property.id}>
                                {property.title}
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lease_end_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lease End Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {tenant && payments && (
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>
                  A record of all payments made by the tenant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                        <TableCell>${payment.amount.toFixed(2)}</TableCell>
                        <TableCell>{payment.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end gap-2">
            {tenant && (
              <Button variant="destructive" type="button" onClick={handleDelete}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Tenant
              </Button>
            )}
            <Button type="submit" variant="default" className="bg-primary">
              {tenant ? "Save Changes" : "Create Tenant"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
````

## File: apps/admin/proxy.ts
````typescript
import { createSupabaseProxyClient } from "@repo/supabase/proxy";
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { supabase, response } = await createSupabaseProxyClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const pathname = request.nextUrl.pathname;

  if (!user && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!user) {
    return response;
  }

  const { data: isAdmin, error: adminError } = await supabase.rpc("is_admin");
  const hasAdminAccess = !adminError && isAdmin === true;

  if (!hasAdminAccess && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login?error=unauthorized", request.url));
  }

  if (hasAdminAccess && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
````

## File: apps/client/app/branding/actions.ts
````typescript
'use server';

import {
  brandingSchema,
  brandingInquirySchema,
  type Branding,
  type BrandingInquiry,
} from "@repo/supabase";
import {
  getBranding as getBrandingProductsService,
  getBrandingById as getBrandingProductService,
  submitBrandingInquiry as submitBrandingInquiryService,
} from "@repo/supabase/services/branding";

export type BrandingRecord = Branding & { id: string };

function parseBrandingRecord(data: unknown): BrandingRecord {
  const product = brandingSchema.parse(data);
  if (!product.id) {
    throw new Error("Branding record is missing an id.");
  }
  return product as BrandingRecord;
}

export async function getBrandingProducts(): Promise<BrandingRecord[]> {
  try {
    const products = await getBrandingProductsService();
    return products.map(parseBrandingRecord);
  } catch (error) {
    console.error('Error fetching branding products:', error);
    return [];
  }
}

export async function getBrandingProduct(id: string): Promise<BrandingRecord | null> {
  try {
    return parseBrandingRecord(await getBrandingProductService(id));
  } catch (error) {
    console.error('Error fetching branding product:', error);
    return null;
  }
}

export async function submitBrandingInquiry(
  data: BrandingInquiry,
): Promise<{ success: boolean; error?: string }> {
  const validatedFields = brandingInquirySchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid data provided.',
    };
  }

  try {
    await submitBrandingInquiryService(validatedFields.data);
    return { success: true };
  } catch (error) {
    console.error('Supabase error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
````

## File: apps/client/app/services/page.tsx
````typescript
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Our Services | Letsheng Holdings",
  description: "Discover the professional services offered by Letsheng Holdings, including print & branding, property management, and water & detergents division.",
};

const ServiceCard = ({
  title,
  description,
  link,
  badgeText,
  features,
  imageUrl,
}: {
  title: string;
  description: string;
  link: string;
  badgeText: string;
  features: string[];
  imageUrl: string;
}) => (
  <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-none bg-white flex flex-col justify-between rounded-[2rem]">
    <div>
      <div className="relative aspect-square bg-secondary/5 flex items-center justify-center overflow-hidden">
        <Image
          src={imageUrl || "/logo.jpg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-secondary font-bold px-3 py-1 border-none">
            {badgeText}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-secondary text-2xl font-bold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <ul className="space-y-2 pt-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-xs font-semibold text-gray-500">
              <CheckCircle2 className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </div>
    <CardFooter className="pt-4 pb-6">
      <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
        <Link href={link} className="flex items-center justify-center gap-2">
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

export default function ServicesPage() {
  return (
    <div className="animate-fade-in space-y-24 pb-20">
      {/* Hero Header */}
      <header className="relative min-h-[50vh] flex items-center bg-secondary rounded-[3rem] shadow-2xl overflow-hidden mx-4 mt-2 border border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Services Background"
            fill
            className="object-cover opacity-15 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary" />
        </div>

        <div className="relative z-10 container mx-auto px-8 py-16 text-center md:text-left">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1 uppercase tracking-widest font-bold">
              Letsheng Holdings
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.1]">
              Our Professional <br />
              <span className="text-primary italic">Services & Divisions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Explore our core business divisions dedicated to high-fidelity printing,
              premium property management, and essential water and detergents supply.
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Comprehensive Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering national impact with professional property management,
            high-fidelity products, and absolute reliability across South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Letsheng Print & Brand"
            description="Elevate your corporate identity with precision-crafted apparel, signage, corporate gifts, and high-fidelity marketing materials."
            link="/branding"
            badgeText="Branding & Print"
            imageUrl="/services/Brandings.png"
            features={[
              "Custom Corporate Clothing",
              "High-Fidelity Screen Printing",
              "Signage & Banners",
              "Corporate Gift Packaging",
            ]}
          />
          <ServiceCard
            title="Letsheng Estates"
            description="Premium residential properties and professional estate management services focused on comfort, security, and quality living."
            link="/properties"
            badgeText="Property Management"
            imageUrl="/services/properties.png"
            features={[
              "Premium Residential Estates",
              "Secure Rental Properties",
              "Professional Management",
              "Prime Locations",
            ]}
          />
          <ServiceCard
            title="Water and Detergents"
            description="Pure SABS-standard bulk water delivery and premium-strength biodegradable cleaning detergents for commercial and industrial settings."
            link="/waterDetergents"
            badgeText="Utilities & Chemicals"
            imageUrl="/services/WaterAndDetergents.png"
            features={[
              "Potable Bulk Water Trucking",
              "Emergency Tank Refills",
              "Biodegradable Detergents",
              "Industrial-Strength Formulation",
            ]}
          />
        </div>
      </section>

      {/* Trust & Operations Section */}
      <section className="bg-secondary/5 py-20 mx-4 rounded-[3rem] border border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-secondary tracking-tight">
                Our Operational Standards
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Letsheng Holdings, each division operates under stringent quality controls
                designed to meet industry regulations and customer expectations. Whether managing
                large-scale print runs or supplying thousands of liters of clean water,
                our promise remains reliability and absolute precision.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-base">Modern Production</h4>
                    <p className="text-gray-500 text-sm">State-of-the-art print and formulation machinery.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-base">Regulatory Alignment</h4>
                    <p className="text-gray-500 text-sm">Strict adherence to South African chemical and water standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
````

## File: apps/client/components/branding/BrandingOrderForm.tsx
````typescript
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Loader2, Package, Upload, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

import { submitBrandingInquiry } from '@/app/branding/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  type Branding,
  type BrandingInquiry,
  brandingInquirySchema,
} from '@repo/supabase';

interface BrandingOrderFormProps {
  product: Branding;
}

type BrandingInquiryFormValues = z.input<typeof brandingInquirySchema>;

export default function BrandingOrderForm({ product }: BrandingOrderFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<BrandingInquiryFormValues, unknown, BrandingInquiry>({
    resolver: zodResolver(brandingInquirySchema),
    defaultValues: {
      customer_name: '',
      email: '',
      company: '',
      quantity: 1,
      message: '',
      product_id: product.id ?? '',
    },
  });

  async function onSubmit(data: BrandingInquiry) {
    setIsLoading(true);
    try {
      const result = await submitBrandingInquiry(data);
      if (result.success) {
        toast.success('Your inquiry has been submitted successfully.');
        router.push('/branding');
      } else {
        toast.error(result.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <input type="hidden" {...form.register('product_id')} />
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-secondary">
              <User className="mr-3" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="customer_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jane.doe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Company Name (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Acme Corporation"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-secondary">
              <Package className="mr-3" />
              Project Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      placeholder="Minimum 1"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Brief & Design Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder="Please describe your project, including desired colors, branding placement, and any critical deadlines..."
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Artwork & Logo Files</FormLabel>
              <FormControl>
                <Card className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-700 font-semibold mb-2">
                    Drag & drop your vector artwork, or
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    Paste artwork links in the project brief. Recommended formats: PDF, AI, EPS, SVG.
                  </p>
                </Card>
              </FormControl>
              <FormMessage />
            </FormItem>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Project Inquiry
            <ArrowRight className="h-5 w-5 ml-3" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
````

## File: apps/client/components/layout/Header.tsx
````typescript
'use client';

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavLink = ({
  href,
  children,
  onLinkClick,
}: {
  href: string;
  children: React.ReactNode;
  onLinkClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onLinkClick}
    className="block md:inline-block px-3 py-2 rounded-md text-base font-medium md:text-primary hover:bg-primary/10 hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary/80 backdrop-blur-lg border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Letsheng Holdings Logo"
              width={48}
              height={48}
              className="rounded-full shadow-md"
            />
            <span className="text-2xl font-bold text-white hidden sm:block">
              Letsheng Holdings
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink href="/" onLinkClick={onLinkClick}>
              Home
            </NavLink>
            <NavLink href="/properties" onLinkClick={onLinkClick}>
              Estates
            </NavLink>
            <NavLink href="/branding" onLinkClick={onLinkClick}>
              Branding
            </NavLink>
            <NavLink href="/services" onLinkClick={onLinkClick}>
              services
            </NavLink>

            <NavLink href="/about" onLinkClick={onLinkClick}>
              About
            </NavLink>

          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-primary text-secondary font-bold hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  className="text-white border-white/50 hover:bg-white/10 hover:text-white"
                >
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-secondary/80 backdrop-blur-lg text-white border-l-primary/30"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 pt-10">
                  <NavLink href="/" onLinkClick={onLinkClick}>
                    Home
                  </NavLink>
                  <NavLink href="/properties" onLinkClick={onLinkClick}>
                    Estates
                  </NavLink>
                  <NavLink href="/branding" onLinkClick={onLinkClick}>
                    Branding
                  </NavLink>
                  <NavLink href="/services" onLinkClick={onLinkClick}>
                    services
                  </NavLink>
                  <NavLink href="/about" onLinkClick={onLinkClick}>
                    About
                  </NavLink>
                  <Link href="/contact" className="mt-4">
                    <Button className="w-full bg-primary text-secondary font-bold hover:bg-primary/90">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
````

## File: packages/supabase/package.json
````json
{
  "name": "@repo/supabase",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./src/index.ts"
    },
    "./client": {
      "types": "./src/client.ts",
      "default": "./src/client.ts"
    },
    "./server": {
      "types": "./src/server.ts",
      "default": "./src/server.ts"
    },
    "./proxy": {
      "types": "./src/middleware.ts",
      "default": "./src/middleware.ts"
    },
    "./middleware": {
      "types": "./src/middleware.ts",
      "default": "./src/middleware.ts"
    },
    "./auth": {
      "types": "./src/auth.ts",
      "default": "./src/auth.ts"
    },
    "./validations": {
      "types": "./src/validations.ts",
      "default": "./src/validations.ts"
    },
    "./types": {
      "types": "./src/types/database.types.ts",
      "default": "./src/types/database.types.ts"
    },
    "./services/*": {
      "types": "./src/services/*.ts",
      "default": "./src/services/*.ts"
    }
  },
  "dependencies": {
    "@supabase/ssr": "^0.9.0",
    "@supabase/supabase-js": "^2.99.0",
    "next": "16.1.6",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@repo/typescript-config": "workspace:*",
    "typescript": "^5"
  }
}
````

## File: packages/supabase/src/index.ts
````typescript
export * from "./client";
export * from "./types/database.types";
export * from "./validations";
````

## File: packages/supabase/src/services/contact.ts
````typescript
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";
import type { TablesInsert } from "../types/database.types";

export async function submitContactMessage(
  message: TablesInsert<"contact_messages">,
) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("contact_messages")
    .insert({ ...message, status: "New" });

  if (error) throw new Error(error.message);
}

export async function getContactMessages() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}
````

## File: packages/supabase/src/types/database.types.ts
````typescript
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      branding: {
        Row: {
          category: string
          created_at: string
          description: string | null
          gallery: Json | null
          id: string
          image: string | null
          is_featured: boolean
          reviews: Json | null
          specs: Json | null
          title: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          gallery?: Json | null
          id?: string
          image?: string | null
          is_featured?: boolean
          reviews?: Json | null
          specs?: Json | null
          title: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          gallery?: Json | null
          id?: string
          image?: string | null
          is_featured?: boolean
          reviews?: Json | null
          specs?: Json | null
          title?: string
        }
        Relationships: []
      }
      branding_inquiries: {
        Row: {
          company: string | null
          created_at: string
          customer_name: string
          email: string
          id: string
          message: string | null
          product_id: string | null
          quantity: number
          status: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          customer_name: string
          email: string
          id?: string
          message?: string | null
          product_id?: string | null
          quantity: number
          status?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          customer_name?: string
          email?: string
          id?: string
          message?: string | null
          product_id?: string | null
          quantity?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "branding_inquiries_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "branding"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string
          subject?: string | null
        }
        Relationships: []
      }
      lease_applications: {
        Row: {
          applicant_name: string
          created_at: string
          email: string
          employment: string | null
          id: string
          message: string | null
          phone: string | null
          property_id: string | null
          status: string
        }
        Insert: {
          applicant_name: string
          created_at?: string
          email: string
          employment?: string | null
          id?: string
          message?: string | null
          phone?: string | null
          property_id?: string | null
          status?: string
        }
        Update: {
          applicant_name?: string
          created_at?: string
          email?: string
          employment?: string | null
          id?: string
          message?: string | null
          phone?: string | null
          property_id?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "lease_applications_product_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          date: string
          id: string
          status: string
          tenant_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          date: string
          id?: string
          status?: string
          tenant_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          date?: string
          id?: string
          status?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      properties: {
        Row: {
          availability: boolean
          bathrooms: number | null
          bedrooms: number | null
          created_at: string
          description: string | null
          features: Json | null
          gallery: Json | null
          id: string
          image_url: string | null
          is_featured: boolean
          location: string | null
          price: number
          reviews: Json | null
          title: string
          type: string | null
        }
        Insert: {
          availability?: boolean
          bathrooms?: number | null
          bedrooms?: number | null
          created_at?: string
          description?: string | null
          features?: Json | null
          gallery?: Json | null
          id?: string
          image_url?: string | null
          is_featured?: boolean
          location?: string | null
          price: number
          reviews?: Json | null
          title: string
          type?: string | null
        }
        Update: {
          availability?: boolean
          bathrooms?: number | null
          bedrooms?: number | null
          created_at?: string
          description?: string | null
          features?: Json | null
          gallery?: Json | null
          id?: string
          image_url?: string | null
          is_featured?: boolean
          location?: string | null
          price?: number
          reviews?: Json | null
          title?: string
          type?: string | null
        }
        Relationships: []
      }
      tenants: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          id: string
          lease_end_date: string | null
          name: string
          property_id: string | null
          status: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id?: string
          lease_end_date?: string | null
          name: string
          property_id?: string | null
          status?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id?: string
          lease_end_date?: string | null
          name?: string
          property_id?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenants_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      product_category: "Corporate Apparel" | "Promotional Merchandise"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      product_category: ["Corporate Apparel", "Promotional Merchandise"],
    },
  },
} as const
````

## File: package.json
````json
{
  "name": "letsheng-holdings",
  "private": true,
  "scripts": {
    "build": "turbo build",
    "dev": "turbo dev",
    "lint": "turbo lint",
    "typecheck": "turbo typecheck",
    "format": "turbo format"
  },
  "devDependencies": {
    "turbo": "^2.7.1"
  },
  "packageManager": "pnpm@9.1.0"
}
````

## File: packages/supabase/src/services/branding.ts
````typescript
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";
import { TablesInsert, TablesUpdate } from "../types/database.types";

export async function getBranding() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("branding").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getFeaturedBranding() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding")
    .select("*")
    .eq("is_featured", true);
  if (error) throw new Error(error.message);
  return data;
}

export async function getBrandingById(id: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function createBranding(branding: TablesInsert<"branding">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding")
    .insert(branding)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateBranding(id: string, branding: TablesUpdate<"branding">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding")
    .update(branding)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteBranding(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("branding").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function submitBrandingInquiry(inquiry: TablesInsert<"branding_inquiries">) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("branding_inquiries")
    .insert({ ...inquiry, status: "New" });
  if (error) throw new Error(error.message);
}

export async function getBrandingInquiries() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding_inquiries")
    .select("*, branding(id, title)");
  if (error) throw new Error(error.message);
  return data;
}

export async function updateBrandingInquiryStatus(id: string, status: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("branding_inquiries")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
}

export async function deleteBrandingInquiry(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("branding_inquiries")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
}
````

## File: packages/supabase/src/services/properties.ts
````typescript
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";
import { TablesInsert, TablesUpdate } from "../types/database.types";

export async function getProperties() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("properties").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getFeaturedProperties() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("is_featured", true);
  if (error) throw new Error(error.message);
  return data;
}

export async function getPropertyById(id: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function createProperty(property: TablesInsert<"properties">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .insert(property)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateProperty(id: string, property: TablesUpdate<"properties">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .update(property)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteProperty(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("properties").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function submitLeaseApplication(application: TablesInsert<"lease_applications">) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .insert({ ...application, status: "Pending" });
  if (error) throw new Error(error.message);
}

export async function getLeaseApplications() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("lease_applications")
    .select("*, properties(id, title)");
  if (error) throw new Error(error.message);
  return data;
}

export async function updateLeaseApplicationStatus(id: string, status: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
}

export async function deleteLeaseApplication(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
}
````

## File: packages/supabase/src/validations.ts
````typescript
import { z } from "zod";

const addSchemaIssue = (ctx: z.RefinementCtx, error: z.ZodError) => {
  ctx.addIssue({
    code: "custom",
    message: error.issues[0]?.message ?? "Invalid value",
  });
};

const parseWithSchema = <Schema extends z.ZodTypeAny>(
  schema: Schema,
  value: unknown,
  ctx: z.RefinementCtx,
): z.output<Schema> => {
  const parsed = schema.safeParse(value);
  if (!parsed.success) {
    addSchemaIssue(ctx, parsed.error);
    return z.NEVER;
  }

  return parsed.data;
};

const nullableStringSchema = <Schema extends z.ZodTypeAny>(schema: Schema) =>
  z.union([
    z.string().transform((value, ctx) => {
      const trimmedValue = value.trim();
      if (trimmedValue === "") {
        return null;
      }

      return parseWithSchema(schema, trimmedValue, ctx);
    }),
    z.null(),
  ]);

const optionalNullableStringSchema = <Schema extends z.ZodTypeAny>(
  schema: Schema,
) =>
  nullableStringSchema(schema).optional();

const emailSchema = z.string().trim().email("Invalid email address");
const optionalNullableEmailSchema = optionalNullableStringSchema(emailSchema);

const nullableNumberSchema = (schema: z.ZodNumber) =>
  z.union([
    z.string().trim().length(0).transform(() => null),
    z.null(),
    z.number().transform((value, ctx) => parseWithSchema(schema, value, ctx)),
    z.string().trim().transform((value, ctx) => {
      const numericValue = Number(value);
      if (!Number.isFinite(numericValue)) {
        ctx.addIssue({
          code: "custom",
          message: "Please enter a valid number.",
        });
        return z.NEVER;
      }

      return parseWithSchema(schema, numericValue, ctx);
    }),
  ]);

const dateInputSchema = z.union([
  z.date(),
  z.string().trim().transform((value, ctx) => {
    if (value === "") {
      ctx.addIssue({
        code: "custom",
        message: "Date is required.",
      });
      return z.NEVER;
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter a valid date.",
      });
      return z.NEVER;
    }

    return date;
  }),
]);

const nullableDateSchema = z.union([
  z.string().trim().length(0).transform(() => null),
  z.null(),
  dateInputSchema,
]);

const numberInputSchema = (schema: z.ZodNumber) =>
  z.union([
    z.number().transform((value, ctx) => parseWithSchema(schema, value, ctx)),
    z.string().trim().transform((value, ctx) => {
      const numericValue = Number(value);
      if (!Number.isFinite(numericValue)) {
        ctx.addIssue({
          code: "custom",
          message: "Please enter a valid number.",
        });
        return z.NEVER;
      }

      return parseWithSchema(schema, numericValue, ctx);
    }),
  ]);

const isValidImageSource = (value: string) => {
  if (value.startsWith("/") && !value.startsWith("//")) {
    return value.length > 1;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const imageSourceSchema = (message: string) =>
  z.string().trim().min(1, message).refine(isValidImageSource, message);

const nullableImageSourceSchema = (message: string) =>
  nullableStringSchema(imageSourceSchema(message));

// Schema for a single gallery item
export const galleryItemSchema = z.object({
  imageUrl: imageSourceSchema("Please enter a valid image URL or app path."),
  title: z.string().trim().min(1, "Title is required"),
  description: optionalNullableStringSchema(z.string().trim()),
});
export type GalleryItem = z.infer<typeof galleryItemSchema>;
export type galleryItem = GalleryItem;

// Schema for a single review
export const reviewSchema = z.object({
  id: z.string().optional(),
  author: z.string().trim().min(1, "Author is required"),
  rating: numberInputSchema(z.number().int().min(1).max(5)),
  comment: z.string().trim().min(1, "Comment is required"),
});
export type Review = z.infer<typeof reviewSchema>;

// Schema for a single feature, which is just a string
export const featureSchema = z.string().trim().min(1, "Feature is required");

// Schema for a property
export const propertySchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(3, "Title must be at least 3 characters"),
  description: optionalNullableStringSchema(z.string().trim()),
  price: numberInputSchema(
    z.number().positive("Price must be a positive number"),
  ),
  location: nullableStringSchema(
    z.string().trim().min(3, "Location is required"),
  ),
  availability: z.boolean(),
  image_url: nullableImageSourceSchema("Must be a valid image URL or app path"),
  bedrooms: nullableNumberSchema(
    z.number().int().min(1, "Must have at least one bedroom"),
  ),
  bathrooms: nullableNumberSchema(
    z.number().int().min(1, "Must have at least one bathroom"),
  ),
  type: nullableStringSchema(z.string().trim().min(1, "Type is required")),
  features: z.array(featureSchema).optional().nullable(),
  is_featured: z.boolean(),
  gallery: z.array(galleryItemSchema).optional().nullable(),
  reviews: z.array(reviewSchema).optional().nullable(),
});

export type Property = z.infer<typeof propertySchema>;

// Schema for a branding product specification
export const specItemSchema = z.object({
  label: z.string().trim().min(1, "Label is required"),
  value: z.string().trim().min(1, "Value is required"),
});
export type SpecItem = z.infer<typeof specItemSchema>;

// Schema for a branding product. Note: `image` is used for the main image URL.
export const brandingSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(3, "Title must be at least 3 characters"),
  category: z.string().trim().min(3, "Category is required"),
  description: optionalNullableStringSchema(z.string().trim()),
  image: nullableImageSourceSchema("Must be a valid image URL or app path"),
  specs: z.array(specItemSchema).optional().nullable(),
  is_featured: z.boolean(),
  gallery: z.array(galleryItemSchema).optional().nullable(),
  reviews: z.array(reviewSchema).optional().nullable(),
});

export type Branding = z.infer<typeof brandingSchema>;

// Schema for a tenant
export const tenantSchema = z.object({
    id: z.string().optional(),
    name: z.string().trim().min(1, "Name is required"),
    email: optionalNullableEmailSchema,
    property_id: nullableStringSchema(z.string()),
    status: z.enum(["Active", "Inactive", "Pending"]),
    lease_end_date: nullableDateSchema,
    avatar_url: nullableImageSourceSchema(
      "Must be a valid image URL or app path.",
    ).optional(),
  });

export type Tenant = z.infer<typeof tenantSchema>;

// Schema for a payment
export const paymentSchema = z.object({
  id: z.string().optional(),
  amount: numberInputSchema(
    z.number().positive("Amount must be a positive number"),
  ),
  date: dateInputSchema,
  status: z.enum(["Paid", "Pending", "Late"]),
  tenant_id: optionalNullableStringSchema(z.string()),
});

export type Payment = z.infer<typeof paymentSchema>;

// Schema for a branding inquiry
export const brandingInquirySchema = z.object({
  customer_name: z.string().trim().min(1, "Name is required"),
  email: emailSchema,
  company: optionalNullableStringSchema(z.string().trim()),
  quantity: numberInputSchema(
    z
      .number()
      .int("Quantity must be a whole number")
      .positive("Quantity must be a positive number"),
  ),
  message: optionalNullableStringSchema(z.string().trim()),
  product_id: z.string().min(1, "Product is required"),
});

export type BrandingInquiry = z.infer<typeof brandingInquirySchema>;

// Schema for a general contact message
export const contactMessageSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: emailSchema,
  phone: optionalNullableStringSchema(z.string().trim()),
  subject: optionalNullableStringSchema(z.string().trim()),
  message: z.string().trim().min(1, "Message is required"),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;

// Schema for a lease application
export const leaseApplicationSchema = z.object({
  applicant_name: z.string().trim().min(1, "Name is required"),
  email: emailSchema,
  phone: optionalNullableStringSchema(z.string().trim()),
  employment: z.enum(["employed", "self-employed", "unemployed", "student"]),
  message: optionalNullableStringSchema(z.string().trim()),
  property_id: z.string(),
});

export type LeaseApplication = z.infer<typeof leaseApplicationSchema>;
````

## File: .gitignore
````
letsheng.xml
context.md
malalang.md
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem
.turbo
**/supabase/.temp/

# debug
npm-debug.log*
package-lock.json
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

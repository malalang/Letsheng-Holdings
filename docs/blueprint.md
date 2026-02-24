This is the **Ultimate Repository Blueprint**. It is designed to scale across your 6 current projects and any future ventures. It enforces a "Mirror" architecture where **Client** and **Admin** are twins in logic but independent in deployment.

# 📘 Master Blueprint: Mirrored Dual-App Architecture

## 1. Core Philosophy

* **Standalone Power**: Every `client` and `admin` folder is a complete Next.js project. You can deploy them to different domains (e.g., `shop.com` and `staff.shop.com`) without shared-folder dependency errors.
* **Logic Mirroring**: We treat the `lib` folder as a sacred "source of truth." Code is copied between apps to ensure that if a user submits an order on the client, the admin processes it using the exact same validation rules.

* **Zero-Dependency Deployment**: Each app (`client/` and `admin/`) is self-contained for standalone deployment.
* **Logic Mirroring**: Business-critical logic in `lib/` is identical across projects to ensure data integrity.
* **Type Safety**: Mandatory end-to-end type safety from Supabase to the UI.
---

## 2. Standardized Folder Structure

## 1. Mirrored Core Logic
To support standalone deployment while maintaining a single source of truth, both the `client/` and `admin/` projects must maintain mirrored `lib/` directories.
* **Parity Requirement**: The code within `lib/supabase/`, `lib/validations/`, and `lib/types/` must be identical in both projects.
* **Synchronized Updates**: Any change to a Zod schema or TypeScript interface in one project must be immediately reflected in the other to prevent integration errors.

## 2. Shared UI Usage
* **Primitive Consistency**: Both projects must use identical Radix UI and Tailwind CSS configurations within their respective `components/ui/` folders.
* **Visual Parity**: Buttons, inputs, and modals must share the same design language across the customer and management platforms.

## 3. Unified Quality Control
* **Toolchain**: Every project directory maintains its own `package.json`, `turbo.json`, and `biome.json`.
* **Standardization**: These configuration files must be identical to enforce the same linting, formatting (via Biome), and build rules across the entire repository.
* **Deployment**: This structure allows each project to be set as a standalone "Root Directory" in deployment platforms like Vercel for independent scaling and environment management.

```text
root/
├── client/                       # Customer-facing Project (e.g., Vercel Project A)
│   ├── app/                      # App Router (Routes, Layouts, Server Actions)
│   ├── components/               # Client-specific UI components
│   │   └── ui/                   # Standard Radix + Tailwind primitives
│   ├── lib/                      # [MIRRORED] Core Business Logic
│   │   ├── supabase/             # SSR Auth (client.ts, server.ts, middleware.ts)
│   │   ├── validations/          # Zod Schemas (Shared)
│   │   ├── types/                # TypeScript Interfaces (Shared)
│   │   └── utils.ts              # 'cn' helper and formatters
│   ├── public/                   # Client static assets
│   ├── .env.local                # Client-specific API Keys
│   ├── package.json              # Standardized Package Stack
│   └── biome.json                # Unified Linting config
│
└── admin/                        # Management Project (e.g., Vercel Project B)
    ├── app/                      # Dashboard & Protected Routes
    ├── components/               # Admin-specific UI (Charts, Tables)
    │   └── ui/                   # [MIRRORED] Same primitives as Client
    ├── lib/                      # [MIRRORED] Identical to Client/lib
    │   ├── supabase/             # SSR Auth
    │   ├── validations/          # Same Zod Schemas
    │   ├── types/                # Same TS Interfaces
    │   └── utils.ts              # Same utility helpers
    ├── public/                   # Admin icons/assets
    ├── .env.local                # Admin-specific API Keys (e.g., Service Role)
    ├── package.json              # Standardized Package Stack
    └── biome.json                # Unified Linting config

```

---

## 3. The Technical Stack (Standardized)

### 🛠 Framework & Tooling

* **Framework**: Next.js 15+ (App Router).
* **Language**: TypeScript (Strict Mode).
* **Engine**: Turbopack (`next dev --turbopack`).
* **Lint/Format**: Biome (3x faster than ESLint/Prettier).

### 🏗 Data & Backend

* **Auth & Database**: Supabase with `@supabase/ssr`.
* **State Management**: React Server Components (RSC) + Server Actions.
* **Revalidation**: `revalidatePath()` or `revalidateTag()` after every mutation.

### 📋 Forms & UI

* **Forms**: React Hook Form.
* **Validation**: Zod (Schema-first development).
* **Styling**: Tailwind CSS + `tailwind-merge`.
* **Components**: Radix UI (Headless) primitives.

---
## 📦 Standardized `package.json` Template

```json
{
  "name": "project-template",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "check": "biome check --apply .",
    "format": "biome format --write .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "zod": "latest", 
    "typescript": "latest",
    "@supabase/supabase-js": "latest",
    "@supabase/ssr": "latest",
    "lucide-react": "latest",
    "framer-motion": "latest",
    "react-hook-form": "latest",
    "@hookform/resolvers": "latest",
    "date-fns": "latest",
    "slugify": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest",
    "radix-ui": "latest"
  },
  "devDependencies": {
    "@biomejs/biome": "latest",
    "@tailwindcss/postcss": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "tailwindcss": "latest",
    "typescript": "latest",
    "cross-env": "latest",
  }
}

```

---

## 4. Governance & Synchronization Rules

### Rule 1: The Validation Lock

Any form schema (e.g., `OrderSchema`) must be defined in `lib/validations/`. If you update a field in the **Client**, you MUST copy that file to the **Admin**. This ensures the Admin never receives data that it doesn't know how to validate.

### Rule 2: Shared UI Parity

The `components/ui/` folder should contain your "Atomic" components (Buttons, Inputs, Modals). Both projects must use the same `ui/` code to ensure the brand looks the same for both customers and staff.

### Rule 3: Unified Quality Check

Before a deployment is considered "Ready," both projects must pass the following root commands:

1. `npm run check` (Biome linting/formatting).
2. `npm run typecheck` (`tsc --noEmit`).

---

## 5. Deployment Blueprint (Vercel)

Since these are separate projects:

1. **Project A (Client)**:
* **Root Directory**: `client/`
* **Build Command**: `next build`


2. **Project B (Admin)**:
* **Root Directory**: `admin/`
* **Build Command**: `next build`


3. **Environment Variables**:
* Client uses `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

---

This is the **Master Technical Blueprint 2026**. This document serves as the absolute "Source of Truth" for your 6 current projects and all future developments. It integrates advanced SEO (Metatags), secure Role-Based Authentication, and performance-first configurations.

---

# 📘 Master Blueprint: Mirrored Enterprise Architecture



---

## 2. Advanced Global Metadata (SEO)

To ensure high performance and SEO visibility for businesses, every page must implement dynamic metadata.

**Implementation Standard (`app/layout.tsx`):**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Project Name | Professional Services",
    template: "%s | Project Name",
  },
  description: "Advanced service delivery platform.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://your-domain.com",
    siteName: "Project Name",
  },
  robots: {
    index: true,
    follow: true,
  },
};

```

---

## 3. Mirrored Core Logic: The "Self-Contained" Files

These files are the engine of the apps. They must be mirrored exactly in both `client/lib/` and `admin/lib/`.

### A. Supabase Browser Client (`lib/supabase/client.ts`)

```typescript
import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/lib/types/database.types'

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

```

### B. Supabase Server Client (`lib/supabase/server.ts`)

```typescript
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from '@/lib/types/database.types'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value },
        set(name: string, value: string, options: CookieOptions) {
          try { cookieStore.set({ name, value, ...options }) } catch (error) {}
        },
        remove(name: string, options: CookieOptions) {
          try { cookieStore.set({ name, value: '', ...options }) } catch (error) {}
        },
      },
    }
  )
}

```

---

## 4. Advanced Authentication & RBAC

For the **Admin** app, security is enforced via Role-Based Access Control (RBAC).

**Standard Admin Middleware (`admin/lib/supabase/middleware.ts`):**

```typescript
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { /* same as server.ts logic */ } }
  )

  const { data: { user } } = await supabase.auth.getUser()

  // Redirect to login if no session
  if (!user && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Mandatory Role Check for Admin App
  if (user && user.app_metadata.role !== 'admin') {
    return NextResponse.redirect(new URL('https://client-domain.com', request.url))
  }

  return response
}

```

---

## 5. Standardized Configuration (Unified Quality Control)

### A. The "Performance" `package.json`

```json
{
  "name": "project-root",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "check": "biome check --apply .",
    "format": "biome format --write .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "15.0.0",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "@supabase/ssr": "latest",
    "@supabase/supabase-js": "latest",
    "zod": "latest",
    "react-hook-form": "latest",
    "@hookform/resolvers": "latest",
    "lucide-react": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  },
  "devDependencies": {
    "@biomejs/biome": "latest",
    "typescript": "latest",
    "tailwindcss": "latest",
    "@types/node": "latest",
    "cross-env": "latest"
  }
}

```

### B. The "Zero-Latency" `biome.json`

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": { "noUnusedVariables": "warn" }
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "lineWidth": 80
  }
}

```

## 7. Execution Strategy (Where to from here?)

1. **Initialize**: Run the `biome init` and `package.json` setup in both project roots.
2. **Auth Wall**: Implement the `middleware.ts` in the Admin project immediately to block non-staff access.
3. **Metadata Sync**: Ensure `client/app/layout.tsx` has the correct `metadataBase` for SEO.
4. **Schema Sync**: When creating new services (like "Grocery Benefits" for Tlou), define the Zod schema in `client/lib/validations` first, then copy to `admin/`.







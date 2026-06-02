This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where comments have been removed, line numbers have been added.

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
- Code comments have been removed from supported file types
- Line numbers have been added to the beginning of each line
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
.npmrc
.repomixignore
apps/admin/app/_components/ConfirmDialog.tsx
apps/admin/app/_components/FormInput.tsx
apps/admin/app/_components/FormSelect.tsx
apps/admin/app/_components/FormTextarea.tsx
apps/admin/app/_components/MeetingWrapper.tsx
apps/admin/app/_components/PexelsImagePicker.tsx
apps/admin/app/_components/PostValidator.tsx
apps/admin/app/_components/Sidebar.tsx
apps/admin/app/_components/ui/button.tsx
apps/admin/app/_components/ui/card.tsx
apps/admin/app/_components/ui/form.tsx
apps/admin/app/_components/ui/input.tsx
apps/admin/app/_components/ui/textarea.tsx
apps/admin/app/_lib/actions.ts
apps/admin/app/_lib/revalidation.ts
apps/admin/app/_lib/validation.ts
apps/admin/app/api/pexels/route.ts
apps/admin/app/api/stream-token/route.ts
apps/admin/app/blog/[id]/edit/page.tsx
apps/admin/app/blog/[id]/page.tsx
apps/admin/app/blog/BlogDetails.tsx
apps/admin/app/blog/BlogEditor.tsx
apps/admin/app/blog/BlogForm.tsx
apps/admin/app/blog/create/page.tsx
apps/admin/app/blog/page.tsx
apps/admin/app/blog/schema.ts
apps/admin/app/clients/page.tsx
apps/admin/app/content/categories/page.tsx
apps/admin/app/content/faqs/page.tsx
apps/admin/app/content/GEMINI.md
apps/admin/app/content/page.tsx
apps/admin/app/content/portfolio/page.tsx
apps/admin/app/content/testimonials/page.tsx
apps/admin/app/globals.css
apps/admin/app/layout.tsx
apps/admin/app/login/page.tsx
apps/admin/app/meetings/[callId]/page.tsx
apps/admin/app/meetings/page.tsx
apps/admin/app/messages/[id]/page.tsx
apps/admin/app/messages/page.tsx
apps/admin/app/page.tsx
apps/admin/app/services/[id]/page.tsx
apps/admin/app/services/create/page.tsx
apps/admin/app/services/page.tsx
apps/admin/app/settings/page.tsx
apps/admin/eslint.config.js
apps/admin/next-env.d.ts
apps/admin/next.config.ts
apps/admin/package.json
apps/admin/postcss.config.js
apps/admin/proxy.ts
apps/admin/tsconfig.json
apps/client/app/_components/AddClient.tsx
apps/client/app/_components/ColorPalettePage.tsx
apps/client/app/_components/Cta.tsx
apps/client/app/_components/Footer.tsx
apps/client/app/_components/Header.tsx
apps/client/app/_components/HeroBackground.tsx
apps/client/app/_components/ImageColorPicker.tsx
apps/client/app/_components/MeetingWrapper.tsx
apps/client/app/_components/ServiceCategory.tsx
apps/client/app/_components/SkipToContent.tsx
apps/client/app/_components/SouthAfricanPhoneNumberInput.tsx
apps/client/app/_components/ui/button.tsx
apps/client/app/_components/ui/card.tsx
apps/client/app/_components/ui/dialog.tsx
apps/client/app/_components/ui/input.tsx
apps/client/app/_components/ui/scroll-area.tsx
apps/client/app/_components/ui/slider.tsx
apps/client/app/_components/ui/tabs.tsx
apps/client/app/_components/ui/textarea.tsx
apps/client/app/_components/ui/toaster.tsx
apps/client/app/_components/VideoPlayer.tsx
apps/client/app/_lib/actions.ts
apps/client/app/_lib/aiSupport/ai/dev.ts
apps/client/app/_lib/aiSupport/ai/flows/enhanceAnswerFlow.ts
apps/client/app/_lib/aiSupport/ai/flows/generateVideoFlow.ts
apps/client/app/_lib/aiSupport/ai/flows/suggestAnswerFlow.ts
apps/client/app/_lib/aiSupport/ai/genkit.ts
apps/client/app/_lib/Cloudinary/config.ts
apps/client/app/_lib/Cloudinary/MainVideo/createFinalVideo.ts
apps/client/app/_lib/Cloudinary/MainVideo/getVideos.ts
apps/client/app/_lib/Cloudinary/MainVideo/processfinalVideo.ts
apps/client/app/_lib/Cloudinary/MainVideo/processfulllVideo.ts
apps/client/app/_lib/Cloudinary/MainVideo/processVideoSegments.ts
apps/client/app/_lib/constants/about.tsx
apps/client/app/_lib/constants/blog.tsx
apps/client/app/_lib/constants/faqs.ts
apps/client/app/_lib/constants/navigation.ts
apps/client/app/_lib/constants/portfolio.ts
apps/client/app/_lib/constants/process.tsx
apps/client/app/_lib/constants/services.tsx
apps/client/app/_lib/constants/site.ts
apps/client/app/_lib/constants/testimonials.ts
apps/client/app/_lib/data.ts
apps/client/app/_lib/og-image-utils.tsx
apps/client/app/_lib/pexels/pexels.ts
apps/client/app/_lib/unrealspeech/cloudinaryFullSegmentAudio.ts
apps/client/app/_lib/unrealspeech/unrealspeech.ts
apps/client/app/_lib/utils.ts
apps/client/app/_lib/validation.ts
apps/client/app/about/components/AboutHero.tsx
apps/client/app/about/components/FeaturedProjects.tsx
apps/client/app/about/components/LocalExpertise.tsx
apps/client/app/about/components/OurCoreValues.tsx
apps/client/app/about/components/OurGuarantee.tsx
apps/client/app/about/components/OurMission.tsx
apps/client/app/about/components/OurProcess.tsx
apps/client/app/about/components/OurStory.tsx
apps/client/app/about/components/OurTeam.tsx
apps/client/app/about/components/TheMalalangDifference.tsx
apps/client/app/about/opengraph-image.tsx
apps/client/app/about/page.tsx
apps/client/app/api/generate-audio/route.ts
apps/client/app/api/generate-script/route.ts
apps/client/app/api/questionnaire/route.ts
apps/client/app/api/revalidate/route.ts
apps/client/app/api/sign-image/route.ts
apps/client/app/api/stream-token/route.ts
apps/client/app/api/video/route.ts
apps/client/app/blog/[slug]/components/CommentsSection.tsx
apps/client/app/blog/[slug]/components/SocialShareButtons.tsx
apps/client/app/blog/[slug]/opengraph-image.tsx
apps/client/app/blog/[slug]/page.tsx
apps/client/app/blog/components/BlogClient.tsx
apps/client/app/blog/opengraph-image.tsx
apps/client/app/blog/page.tsx
apps/client/app/bookings/layout.tsx
apps/client/app/bookings/opengraph-image.tsx
apps/client/app/bookings/page.tsx
apps/client/app/contact/components/ContactForm.tsx
apps/client/app/contact/opengraph-image.tsx
apps/client/app/contact/page.tsx
apps/client/app/email-setup/EmailSetupClient.tsx
apps/client/app/email-setup/page.tsx
apps/client/app/globals.css
apps/client/app/home/components/About.tsx
apps/client/app/home/components/Faq.tsx
apps/client/app/home/components/Guarantee.tsx
apps/client/app/home/components/Hero.tsx
apps/client/app/home/components/Portfolio.tsx
apps/client/app/home/components/Process.tsx
apps/client/app/home/components/RecentPosts.tsx
apps/client/app/home/components/Testimonials.tsx
apps/client/app/home/page.tsx
apps/client/app/layout.tsx
apps/client/app/manifest.ts
apps/client/app/opengraph-image.tsx
apps/client/app/page.tsx
apps/client/app/pricing/opengraph-image.tsx
apps/client/app/pricing/page.tsx
apps/client/app/privacy-policy/opengraph-image.tsx
apps/client/app/privacy-policy/page.tsx
apps/client/app/questionnaire/components/AIActions.tsx
apps/client/app/questionnaire/components/constants.ts
apps/client/app/questionnaire/components/FileUploadWidget.tsx
apps/client/app/questionnaire/components/NavigationButtons.tsx
apps/client/app/questionnaire/components/ProgressBar.tsx
apps/client/app/questionnaire/components/Question.tsx
apps/client/app/questionnaire/components/QuestionnaireForm.tsx
apps/client/app/questionnaire/components/ReviewStep.tsx
apps/client/app/questionnaire/components/Step.tsx
apps/client/app/questionnaire/components/types.ts
apps/client/app/questionnaire/layout.tsx
apps/client/app/questionnaire/opengraph-image.tsx
apps/client/app/questionnaire/page.tsx
apps/client/app/robots.ts
apps/client/app/services/domain-registration/page.tsx
apps/client/app/services/email-hosting/page.tsx
apps/client/app/services/GEMINI.md
apps/client/app/services/graphic-design/page.tsx
apps/client/app/services/opengraph-image.tsx
apps/client/app/services/page.tsx
apps/client/app/services/website-design/[service]/[bookings]/components/BookingForm.tsx
apps/client/app/services/website-design/[service]/[bookings]/layout.tsx
apps/client/app/services/website-design/[service]/[bookings]/page.tsx
apps/client/app/services/website-design/[service]/layout.tsx
apps/client/app/services/website-design/[service]/page.tsx
apps/client/app/services/website-design/page.tsx
apps/client/app/sitemap.ts
apps/client/app/tools/color-palette-generator/layout.tsx
apps/client/app/tools/color-palette-generator/opengraph-image.tsx
apps/client/app/tools/color-palette-generator/page.tsx
apps/client/app/tools/create-script/components/media-selection-dialog.tsx
apps/client/app/tools/create-script/components/script-panel.tsx
apps/client/app/tools/create-script/components/script-segment-item.tsx
apps/client/app/tools/create-script/components/ScriptFooter.tsx
apps/client/app/tools/create-script/components/ScriptGeneratorForm.tsx
apps/client/app/tools/create-script/components/ScriptHeader.tsx
apps/client/app/tools/create-script/components/video-preview-player.tsx
apps/client/app/tools/create-script/components/Videos.tsx
apps/client/app/tools/create-script/opengraph-image.tsx
apps/client/app/tools/create-script/page.tsx
apps/client/app/tools/meetings/page.tsx
apps/client/app/tools/page.tsx
apps/client/app/tools/QRCodeGenerator/page.tsx
apps/client/components.json
apps/client/eslint.config.js
apps/client/next-env.d.ts
apps/client/next.config.ts
apps/client/package.json
apps/client/postcss.config.js
apps/client/public/robots.txt
apps/client/tsconfig.json
GEMINI.md
package.json
packages/ai/package.json
packages/ai/src/flows/enhanceAnswerFlow.ts
packages/ai/src/flows/generateVideoFlow.ts
packages/ai/src/flows/suggestAnswerFlow.ts
packages/ai/src/genkit.ts
packages/ai/src/index.ts
packages/ai/tsconfig.json
packages/eslint-config/base.js
packages/eslint-config/next.js
packages/eslint-config/package.json
packages/shared/package.json
packages/shared/src/hooks/useCreateChatClient.ts
packages/shared/src/supabase/client.ts
packages/shared/src/supabase/server.ts
packages/shared/src/supabase/services/blogs.ts
packages/shared/src/supabase/services/clients.ts
packages/shared/src/supabase/services/comments.ts
packages/shared/src/supabase/services/composite.ts
packages/shared/src/supabase/services/content.ts
packages/shared/src/supabase/services/meetings.ts
packages/shared/src/supabase/services/messages.ts
packages/shared/src/supabase/services/questionnaires.ts
packages/shared/src/supabase/services/services.ts
packages/shared/src/supabase/services/stream.ts
packages/shared/src/types/index.ts
packages/shared/src/types/supabase.ts
packages/shared/src/utils/formatters.ts
packages/shared/src/validation/schemas.ts
packages/shared/tsconfig.json
packages/typescript-config/base.json
packages/typescript-config/nextjs.json
packages/typescript-config/package.json
pnpm-workspace.yaml
README.md
repomix.config.json
t.md
turbo.json
```

# Files

## File: apps/admin/app/blog/schema.ts
````typescript
 1: import * as z from "zod";
 2: 
 3: export const blogSchema = z.object({
 4:   id: z.string().optional(),
 5:   title: z.string().min(1, "Title is required"),
 6:   slug: z.string().min(1, "Slug is required"),
 7:   htmlContent: z.string().min(1, "Content is required."),
 8:   excerpt: z.string().max(160, "Excerpt must be max 160 characters").min(1, "Excerpt is required"),
 9:   metaTitle: z.string().min(1, "Meta title is required"),
10:   metaDescription: z.string().max(160, "Meta description must be max 160 characters").min(1, "Meta description is required"),
11:   publishedAt: z.string().min(1, "Publish date is required"),
12:   tags: z.string().min(1, "At least one tag is required"),
13:   imageUrl: z.string().min(1, "Image URL is required"),
14:   readingTimeMinutes: z.number().int().min(1, "Reading time must be at least 1 minute"),
15:   keywords: z.string().min(1, "Keywords are required"),
16:   source: z.literal("malalang"),
17:   status: z.enum(["published", "draft"]),
18:   author: z.object({
19:     id: z.string(),
20:     name: z.string(),
21:     avatarUrl: z.string(),
22:     imageUrl: z.string(),
23:     bio: z.string(),
24:   }),
25: });
26: 
27: export type BlogFormValues = z.infer<typeof blogSchema>;
````

## File: apps/admin/app/content/GEMINI.md
````markdown
 1: # Global Content Management
 2: 
 3: This directory manages "Market-Driven" content that appears across multiple pages of the public website but isn't strictly part of the Blog or Services catalog.
 4: 
 5: ## Managed Entities
 6: 
 7: 1.  **FAQs**: Common questions for Home and Pricing pages.
 8: 2.  **Testimonials**: Social proof and client quotes.
 9: 3.  **Portfolio**: Showcase projects and project categories.
10: 4.  **Service Categories**: High-level groupings (Website Design, Domain Registration, etc.) used on the Services Hub.
11: 
12: ## Data Mapping
13: 
14: All items here are fetched from their respective Supabase tables via the `@malalang/shared` package.
15: 
16: | Page | Table | Service (in @malalang/shared) |
17: | :--- | :--- | :--- |
18: | `/faqs` | `faqs` | `getFaqs`, `createFaq`, etc. |
19: | `/testimonials` | `testimonials` | `getTestimonials`, etc. |
20: | `/portfolio` | `portfolio_items` | `getPortfolioItems`, etc. |
21: | `/categories` | `service_categories` | `getServiceCategories` |
22: 
23: ## UI Standards
24: 
25: - **Tables/Lists**: Used for high-volume content like FAQs.
26: - **Grids/Cards**: Used for visual content like Portfolio.
27: - **Modals/Inline Edit**: Used for quick updates.
28: 
29: ## How to Extend
30: To add a new content type (e.g., "Team Members"):
31: 1.  Add the table in a new Supabase migration.
32: 2.  Add types and CRUD services to `@malalang/shared`.
33: 3.  Create a new directory here (`/app/content/team`).
34: 4.  Add a link to the main Content Hub (`/app/content/page.tsx`).
35: 5.  Add the link to the Sidebar.
````

## File: apps/admin/app/content/page.tsx
````typescript
 1: import Link from "next/link";
 2: import {
 3:   HelpCircle,
 4:   MessageCircle,
 5:   Briefcase,
 6:   Layout,
 7:   Layers,
 8:   Sparkles
 9: } from "lucide-react";
10: 
11: const sections = [
12:   {
13:     title: "FAQs",
14:     description: "Manage frequently asked questions on the home and pricing pages.",
15:     href: "/content/faqs",
16:     icon: HelpCircle,
17:     color: "text-blue-600",
18:     bg: "bg-blue-100",
19:   },
20:   {
21:     title: "Testimonials",
22:     description: "Manage client testimonials and success stories.",
23:     href: "/content/testimonials",
24:     icon: MessageCircle,
25:     color: "text-purple-600",
26:     bg: "bg-purple-100",
27:   },
28:   {
29:     title: "Portfolio",
30:     description: "Showcase your best projects and case studies.",
31:     href: "/content/portfolio",
32:     icon: Briefcase,
33:     color: "text-orange-600",
34:     bg: "bg-orange-100",
35:   },
36:   {
37:     title: "Service Categories",
38:     description: "Configure high-level service categories and icons.",
39:     href: "/content/categories",
40:     icon: Layers,
41:     color: "text-emerald-600",
42:     bg: "bg-emerald-100",
43:   },
44:   {
45:     title: "Add-ons",
46:     description: "Manage à la carte services and extra features.",
47:     href: "/content/addons",
48:     icon: Sparkles,
49:     color: "text-yellow-600",
50:     bg: "bg-yellow-100",
51:   },
52: ];
53: 
54: export default function ContentPage() {
55:   return (
56:     <div>
57:       <div className="mb-8">
58:         <h1 className="text-2xl font-bold text-gray-900">Global Content</h1>
59:         <p className="text-gray-500 text-sm mt-1">
60:           Manage shared content that appears across multiple pages.
61:         </p>
62:       </div>
63: 
64:       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
65:         {sections.map((section) => (
66:           <Link
67:             key={section.href}
68:             href={section.href}
69:             className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all duration-300"
70:           >
71:             <div className={`w-12 h-12 rounded-lg ${section.bg} ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
72:               <section.icon size={24} />
73:             </div>
74:             <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
75:             <p className="text-gray-500 text-sm leading-relaxed">
76:               {section.description}
77:             </p>
78:           </Link>
79:         ))}
80:       </div>
81:     </div>
82:   );
83: }
````

## File: apps/admin/app/globals.css
````css
 1: @import "tailwindcss";
 2: 
 3: :root {
 4:   --sidebar-width: 240px;
 5: }
 6: 
 7: * {
 8:   box-sizing: border-box;
 9: }
10: 
11: body {
12:   margin: 0;
13:   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
14:   background-color: #f9fafb;
15:   color: #111827;
16: }
````

## File: apps/admin/app/settings/page.tsx
````typescript
 1: export default function SettingsPage() {
 2:   return (
 3:     <div>
 4:       <h1 className="text-2xl font-bold text-gray-900 mb-1">Settings</h1>
 5:       <p className="text-gray-500 text-sm mb-8">Configure your admin preferences.</p>
 6:       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
 7:         <p className="text-sm text-gray-400">Settings coming soon.</p>
 8:       </div>
 9:     </div>
10:   );
11: }
````

## File: apps/admin/eslint.config.js
````javascript
1: import { nextJsConfig } from "@malalang/eslint-config/next-js";
2: 
3: 
4: export default nextJsConfig;
````

## File: apps/admin/next.config.ts
````typescript
 1: import type { NextConfig } from "next";
 2: 
 3: const nextConfig: NextConfig = {
 4:   allowedDevOrigins: [
 5:     'ef6341ba-b045-488c-9854-15dc53aa765e-00-1pmrkw2tpgkz3.spock.replit.dev',
 6:     '*.spock.replit.dev',
 7:     '*.replit.dev',
 8:   ],
 9:   images: {
10:     remotePatterns: [
11:       { protocol: "https", hostname: "images.unsplash.com" },
12:       { protocol: "https", hostname: "images.pexels.com" },
13:       { protocol: "https", hostname: "picsum.photos" },
14:       { protocol: "https", hostname: "placehold.co" },
15:     ],
16:   },
17: };
18: 
19: export default nextConfig;
````

## File: apps/admin/postcss.config.js
````javascript
1: module.exports = {
2:   plugins: {
3:     "@tailwindcss/postcss": {},
4:   },
5: };
````

## File: apps/client/app/about/components/LocalExpertise.tsx
````typescript
 1: import React from 'react';
 2: import Image from 'next/image';
 3: 
 4: const LocalExpertise: React.FC = () => {
 5:   return (
 6:     <section className="py-20 md:py-32 relative overflow-hidden">
 7:       <div className="absolute inset-0 z-0">
 8:         <Image
 9:           src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
10:           alt="Digital connectivity"
11:           fill
12:           className="object-cover opacity-20"
13:         />
14:         <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
15:       </div>
16: 
17:       <div className="container mx-auto px-6 relative z-10">
18:         <div className="max-w-4xl mx-auto text-center">
19:           <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8">
20:             Phalaborwa's Trusted <span className="text-brand-primary">Digital Architects</span>
21:           </h2>
22:           <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12">
23:             We combine world-class technology with deep local understanding. Being based in Phalaborwa means we're not just your developers—we're your neighbors. We understand the unique challenges and opportunities of the Limpopo business landscape.
24:           </p>
25: 
26:           <div className="grid md:grid-cols-3 gap-8 text-left">
27:             <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800">
28:               <div className="text-brand-primary text-4xl font-bold mb-4">01</div>
29:               <h3 className="text-xl font-bold text-white mb-2">Face-to-Face</h3>
30:               <p className="text-slate-400">We prefer meeting in person to truly grasp your vision and business goals.</p>
31:             </div>
32:             <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800">
33:               <div className="text-brand-primary text-4xl font-bold mb-4">02</div>
34:               <h3 className="text-xl font-bold text-white mb-2">Local SEO</h3>
35:               <p className="text-slate-400">We optimize your site specifically to rank in Phalaborwa and surrounding areas.</p>
36:             </div>
37:             <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800">
38:               <div className="text-brand-primary text-4xl font-bold mb-4">03</div>
39:               <h3 className="text-xl font-bold text-white mb-2">Rapid Support</h3>
40:               <p className="text-slate-400">Quick response times and local support whenever you need a hand.</p>
41:             </div>
42:           </div>
43:         </div>
44:       </div>
45:     </section>
46:   );
47: };
48: 
49: export default LocalExpertise;
````

## File: apps/client/app/about/components/OurGuarantee.tsx
````typescript
 1: import React from 'react';
 2: 
 3: const OurGuarantee: React.FC = () => {
 4:   return (
 5:     <section id="guarantee" className="py-20 md:py-28 bg-background">
 6:       <div className="container mx-auto px-6">
 7:         <div className="relative text-center bg-slate-900 rounded-2xl p-8 md:p-12 border-t-4 border-brand-primary shadow-2xl">
 8:             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-primary h-16 w-16 rounded-full flex items-center justify-center border-4 border-background">
 9:                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
10:                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 21a12.02 12.02 0 009-8.056c.32-1.178.524-2.41.524-3.676 0-3.322-1.34-6.32-3.524-8.516z" />
11:                 </svg>
12:             </div>
13:           <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-8">Our 100% Satisfaction Guarantee</h2>
14:           <p className="text-xl md:text-2xl text-brand-primary font-semibold mt-4">
15:             You Don't Pay a Cent Until You're Completely Happy.
16:           </p>
17:           <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
18:             We are so confident in our ability to deliver a website you'll love that we operate on a trust-first model. We build your entire website on a private link for you to review. If you aren't 100% satisfied with the final result, you walk away with no questions asked and no payment required. We invest in you first.
19:           </p>
20:         </div>
21:       </div>
22:     </section>
23:   );
24: };
25: 
26: export default OurGuarantee;
````

## File: apps/client/app/about/components/OurMission.tsx
````typescript
 1: import React from 'react';
 2: import Image from 'next/image';
 3: 
 4: const OurMission: React.FC = () => {
 5:   return (
 6:     <section className="py-20 md:py-28 bg-background">
 7:       <div className="container mx-auto px-6">
 8:         <div className="flex flex-col md:flex-row items-center justify-between">
 9: 
10:           <div className="md:w-5/12 mb-10 md:mb-0">
11:             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-left">
12:               Our Mission
13:             </h2>
14:             <p className="text-xl text-slate-300 leading-relaxed">
15:               To empower local businesses with affordable, high-quality websites through a transparent, collaborative, and risk-free process. We aim to be a catalyst for their growth in the digital economy.
16:             </p>
17:           </div>
18: 
19:           <div className="md:w-6/12">
20:             <Image
21:               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
22:               alt="Our Mission - A team collaborating"
23:               width={600}
24:               height={400}
25:               className="rounded-lg shadow-2xl"
26:             />
27:           </div>
28: 
29:         </div>
30:       </div>
31:     </section>
32:   );
33: };
34: 
35: export default OurMission;
````

## File: apps/client/app/about/components/OurStory.tsx
````typescript
 1: import React from 'react';
 2: import Image from 'next/image';
 3: 
 4: const OurStory: React.FC = () => {
 5:   return (
 6:     <section className="py-20 md:py-28 bg-background">
 7:       <div className="container mx-auto px-6">
 8:         <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
 9: 
10:           <div className="md:w-6/12">
11:             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-left">
12:               Our Story: A Local Solution for Local Businesses
13:             </h2>
14:             <div className="text-lg text-slate-300 space-y-4 leading-relaxed text-left">
15:               <p>
16:                 Malalang Pty Ltd was born from a simple observation: local businesses in Phalaborwa needed a better way to get online. Founder Abram Ntsako saw entrepreneurs being underserved by expensive, complicated web solutions. He decided to create a studio that operated differently.
17:               </p>
18:               <p>
19:                 The name "Malalang" comes from the Sepedi word for thatching reed. It symbolizes our approach: using local understanding and foundational strength to build something protective and essential for your business—your online home.
20:               </p>
21:                <p>
22:                 Our model is built on trust and a shared goal: your complete satisfaction.
23:               </p>
24:             </div>
25:           </div>
26: 
27:           <div className="md:w-4/12 flex justify-center">
28:             <div className="relative text-center">
29:                 <Image
30:                   src="/assets/profile.jpg"
31:                   alt="Abram Ntsako - Founder of Malalang"
32:                   width={300}
33:                   height={300}
34:                   className="rounded-full shadow-2xl object-cover mx-auto"
35:                 />
36:                 <div className="mt-4">
37:                     <p className="font-bold text-white text-xl">Abram Ntsako</p>
38:                     <p className="text-slate-400">Founder & Lead Developer</p>
39:                 </div>
40:             </div>
41:           </div>
42: 
43:         </div>
44:       </div>
45:     </section>
46:   );
47: };
48: 
49: export default OurStory;
````

## File: apps/client/app/api/generate-audio/route.ts
````typescript
 1: import { NextResponse } from "next/server";
 2: 
 3: export async function POST(req: Request) {
 4:   try {
 5:     const body = await req.json();
 6:     const text = typeof body?.text === "string" ? body.text : null;
 7:     if (!text) {
 8:       return NextResponse.json({ error: "text required" }, { status: 400 });
 9:     }
10: 
11:     const UNREAL_API_KEY = process.env.UNREAL_API_KEY;
12:     const UNREAL_VOICE_ID = process.env.UNREAL_VOICE_ID || "Sierra";
13: 
14:     if (!UNREAL_API_KEY) {
15:       console.error("[generate-audio] UNREAL_API_KEY is not set");
16: 
17:       return NextResponse.json(
18:         { error: "Server configuration error" },
19:         { status: 500 }
20:       );
21:     }
22:     const endpoint = "https://api.v8.unrealspeech.com/speech";
23: 
24:     const bodyPayload = {
25:       Text: text,
26:       VoiceId: UNREAL_VOICE_ID,
27:       Bitrate: process.env.UNREAL_BITRATE || "320k",
28:       AudioFormat: "mp3",
29:       OutputFormat: "uri",
30:       TimestampType: "sentence",
31:       sync: true,
32:     };
33:     const resp = await fetch(endpoint, {
34:       method: "POST",
35:       headers: {
36:         "Content-Type": "application/json",
37:         Authorization: `Bearer ${UNREAL_API_KEY}`,
38:       },
39:       body: JSON.stringify(bodyPayload),
40:     });
41: 
42:     if (!resp.ok) {
43:       const text = await resp.text();
44:       const msg = `UnrealSpeech failed: ${resp.status} ${text}`;
45:       return NextResponse.json({ error: msg }, { status: 500 });
46:     }
47: 
48:     const data = await resp.json();
49:     const audioUrl: string | null = data?.OutputUri || data?.audioUrl || null;
50:     if (!audioUrl) {
51:       return NextResponse.json(
52:         { error: "UnrealSpeech did not return audio URL" },
53:         { status: 500 }
54:       );
55:     }
56:     return NextResponse.json({ audioUrl });
57:   } catch (err: any) {
58:     console.error("[generate-audio] unexpected error", err);
59:     return NextResponse.json(
60:       { error: "An unexpected error occurred" },
61:       { status: 500 }
62:     );
63:   }
64: }
````

## File: apps/client/app/blog/[slug]/components/SocialShareButtons.tsx
````typescript
 1: 'use client';
 2: 
 3: import React from 'react';
 4: import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
 5: 
 6: interface SocialShareButtonsProps {
 7:   postUrl: string;
 8:   title: string;
 9: }
10: 
11: const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ postUrl, title }) => {
12:   const encodedUrl = encodeURIComponent(postUrl);
13:   const encodedTitle = encodeURIComponent(title);
14: 
15:   const socialLinks = [
16:     { name: 'Facebook', icon: <FaFacebook />, url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
17:     { name: 'Twitter', icon: <FaTwitter />, url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
18:     { name: 'LinkedIn', icon: <FaLinkedin />, url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}` },
19:     { name: 'WhatsApp', icon: <FaWhatsapp />, url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}` }
20:   ];
21: 
22:   return (
23:     <div className="flex items-center gap-3">
24:       <p className="text-slate-300 font-semibold">Share:</p>
25:       {socialLinks.map(social => (
26:         <a
27:           key={social.name}
28:           href={social.url}
29:           target="_blank"
30:           rel="noopener noreferrer"
31:           referrerPolicy="no-referrer"
32:           className="text-slate-400 hover:text-brand-primary transition-colors duration-300"
33:           aria-label={`Share on ${social.name}`}
34:         >
35:           {React.cloneElement(social.icon, { size: 24 })}
36:         </a>
37:       ))}
38:     </div>
39:   );
40: };
41: 
42: export default SocialShareButtons;
````

## File: apps/client/app/contact/components/ContactForm.tsx
````typescript
  1: 'use client';
  2: 
  3: import React, { useState } from 'react';
  4: import { createMessage } from '@malalang/shared/services/messages';
  5: 
  6: const ContactForm: React.FC = () => {
  7:   const [formData, setFormData] = useState({
  8:     name: '',
  9:     email: '',
 10:     message: '',
 11:   });
 12:   const [isSubmitting, setIsSubmitting] = useState(false);
 13:   const [isSubmitted, setIsSubmitted] = useState(false);
 14:   const [error, setError] = useState<string | null>(null);
 15:   const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
 16: 
 17:   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 18:     const { name, value } = e.target;
 19:     setFormData(prev => ({ ...prev, [name]: value }));
 20:     if (fieldErrors[name]) {
 21:       setFieldErrors(prev => ({ ...prev, [name]: '' }));
 22:     }
 23:   };
 24: 
 25:   const validateForm = (): boolean => {
 26:     const errors: {[key: string]: string} = {};
 27: 
 28:     if (!formData.name.trim()) {
 29:       errors.name = 'Full name is required';
 30:     }
 31: 
 32:     if (!formData.email.trim()) {
 33:       errors.email = 'Email address is required';
 34:     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
 35:       errors.email = 'Please enter a valid email address';
 36:     }
 37: 
 38:     if (!formData.message.trim()) {
 39:       errors.message = 'Message is required';
 40:     } else if (formData.message.trim().length < 10) {
 41:       errors.message = 'Message must be at least 10 characters long';
 42:     }
 43: 
 44:     setFieldErrors(errors);
 45:     return Object.keys(errors).length === 0;
 46:   };
 47: 
 48:   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 49:     e.preventDefault();
 50:     setError(null);
 51: 
 52:     if (!validateForm()) {
 53:       return;
 54:     }
 55: 
 56:     setIsSubmitting(true);
 57: 
 58:     try {
 59:       await createMessage(formData);
 60:       setIsSubmitting(false);
 61:       setIsSubmitted(true);
 62:       setFormData({ name: '', email: '', message: '' });
 63: 
 64:       setTimeout(() => setIsSubmitted(false), 5000);
 65:     } catch (error) {
 66:         console.error("Error adding message: ", error);
 67:         setError("There was an error sending your message. Please try again.");
 68:         setIsSubmitting(false);
 69:     }
 70:   };
 71: 
 72:   if (isSubmitted) {
 73:     return (
 74:       <div
 75:         className="bg-background p-8 rounded-lg border border-brand-secondary/50 h-full flex flex-col justify-center items-center text-center"
 76:         role="status"
 77:         aria-live="polite"
 78:       >
 79:          <div className="text-brand-secondary mb-4" aria-hidden="true">
 80:             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 81:                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
 82:             </svg>
 83:         </div>
 84:         <h2 className="text-2xl font-bold text-white">Thank You!</h2>
 85:         <p className="text-slate-300 mt-2">Your message has been sent successfully. We will get back to you shortly.</p>
 86:       </div>
 87:     );
 88:   }
 89: 
 90:   return (
 91:     <div className="bg-background p-8 rounded-lg border border-slate-800">
 92:       <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
 93:       <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
 94:         <div className="mb-4">
 95:           <label htmlFor="name" className="block text-slate-300 font-semibold mb-2">
 96:             Full Name <span className="text-red-400" aria-label="required">*</span>
 97:           </label>
 98:           <input
 99:             type="text"
100:             id="name"
101:             name="name"
102:             value={formData.name}
103:             onChange={handleChange}
104:             className={`w-full bg-slate-800 border text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-primary ${
105:               fieldErrors.name ? 'border-red-400' : 'border-slate-700'
106:             }`}
107:             required
108:             aria-required="true"
109:             aria-invalid={!!fieldErrors.name}
110:             aria-describedby={fieldErrors.name ? 'name-error' : undefined}
111:             autoComplete="name"
112:           />
113:           {fieldErrors.name && (
114:             <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">
115:               {fieldErrors.name}
116:             </p>
117:           )}
118:         </div>
119:         <div className="mb-4">
120:           <label htmlFor="email" className="block text-slate-300 font-semibold mb-2">
121:             Email Address <span className="text-red-400" aria-label="required">*</span>
122:           </label>
123:           <input
124:             type="email"
125:             id="email"
126:             name="email"
127:             value={formData.email}
128:             onChange={handleChange}
129:             className={`w-full bg-slate-800 border text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-primary ${
130:               fieldErrors.email ? 'border-red-400' : 'border-slate-700'
131:             }`}
132:             required
133:             aria-required="true"
134:             aria-invalid={!!fieldErrors.email}
135:             aria-describedby={fieldErrors.email ? 'email-error' : undefined}
136:             autoComplete="email"
137:           />
138:           {fieldErrors.email && (
139:             <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
140:               {fieldErrors.email}
141:             </p>
142:           )}
143:         </div>
144:         <div className="mb-6">
145:           <label htmlFor="message" className="block text-slate-300 font-semibold mb-2">
146:             Message <span className="text-red-400" aria-label="required">*</span>
147:           </label>
148:           <textarea
149:             id="message"
150:             name="message"
151:             rows={5}
152:             value={formData.message}
153:             onChange={handleChange}
154:             className={`w-full bg-slate-800 border text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-primary ${
155:               fieldErrors.message ? 'border-red-400' : 'border-slate-700'
156:             }`}
157:             required
158:             aria-required="true"
159:             aria-invalid={!!fieldErrors.message}
160:             aria-describedby={fieldErrors.message ? 'message-error' : undefined}
161:           ></textarea>
162:           {fieldErrors.message && (
163:             <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">
164:               {fieldErrors.message}
165:             </p>
166:           )}
167:         </div>
168:          {error && (
169:            <div className="text-red-400 text-center mb-4 p-3 bg-red-400/10 rounded-lg" role="alert" aria-live="assertive">
170:              {error}
171:            </div>
172:          )}
173:         <div className="text-right">
174:             <button
175:                 type="submit"
176:                 disabled={isSubmitting}
177:                 className="w-full bg-brand-primary hover:bg-brand-primary/80 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
178:                 aria-label={isSubmitting ? 'Sending your message' : 'Send message'}
179:             >
180:                 {isSubmitting ? 'Sending...' : 'Send Message'}
181:             </button>
182:         </div>
183:         <p className="mt-4 text-xs text-slate-400 text-center">
184:           By sending this message, you agree to our{' '}
185:           <a href="/privacy-policy" className="text-brand-primary hover:underline">
186:             Privacy Policy
187:           </a>.
188:         </p>
189:       </form>
190:     </div>
191:   );
192: };
193: 
194: export default ContactForm;
````

## File: apps/client/app/globals.css
````css
  1: @import "tailwindcss";
  2: 
  3: @custom-variant dark (&:is(.dark *));
  4: 
  5: @theme {
  6:   --color-brand-primary: #00D26A;
  7:   --color-brand-secondary: #3B82F6;
  8:   --color-brand-navy: #0C1E3A;
  9:   --color-brand-dark: #070E1A;
 10:   --color-brand-light: #E8EDF5;
 11:   --color-brand-steel: #1E3A5F;
 12: }
 13: 
 14: .sr-only {
 15:   position: absolute;
 16:   width: 1px;
 17:   height: 1px;
 18:   padding: 0;
 19:   margin: -1px;
 20:   overflow: hidden;
 21:   clip: rect(0, 0, 0, 0);
 22:   white-space: nowrap;
 23:   border-width: 0;
 24: }
 25: 
 26: .focus\:not-sr-only:focus {
 27:   position: static;
 28:   width: auto;
 29:   height: auto;
 30:   padding: 0;
 31:   margin: 0;
 32:   overflow: visible;
 33:   clip: auto;
 34:   white-space: normal;
 35: }
 36: 
 37: *:focus-visible {
 38:   outline: 3px solid #00D26A;
 39:   outline-offset: 2px;
 40: }
 41: 
 42: 
 43: .circuit-bg {
 44:   background-color: #070E1A;
 45:   background-image:
 46:     linear-gradient(rgba(0, 210, 106, 0.04) 1px, transparent 1px),
 47:     linear-gradient(90deg, rgba(0, 210, 106, 0.04) 1px, transparent 1px),
 48:     linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
 49:     linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
 50:   background-size: 60px 60px, 60px 60px, 12px 12px, 12px 12px;
 51: }
 52: 
 53: 
 54: .code-chip {
 55:   font-family: 'Courier New', Courier, monospace;
 56:   font-size: 0.7rem;
 57:   color: #00D26A;
 58:   background: rgba(0, 210, 106, 0.08);
 59:   border: 1px solid rgba(0, 210, 106, 0.2);
 60:   border-radius: 4px;
 61:   padding: 2px 8px;
 62:   letter-spacing: 0.02em;
 63: }
 64: 
 65: .code-chip-blue {
 66:   color: #93C5FD;
 67:   background: rgba(59, 130, 246, 0.08);
 68:   border-color: rgba(59, 130, 246, 0.2);
 69: }
 70: 
 71: 
 72: .glow-green {
 73:   text-shadow: 0 0 20px rgba(0, 210, 106, 0.4), 0 0 40px rgba(0, 210, 106, 0.2);
 74: }
 75: 
 76: 
 77: .circuit-line {
 78:   position: relative;
 79: }
 80: .circuit-line::after {
 81:   content: '';
 82:   position: absolute;
 83:   bottom: -2px;
 84:   left: 0;
 85:   width: 100%;
 86:   height: 2px;
 87:   background: linear-gradient(90deg, transparent, #00D26A, transparent);
 88: }
 89: 
 90: @theme inline {
 91:   --radius-sm: calc(var(--radius) - 4px);
 92:   --radius-md: calc(var(--radius) - 2px);
 93:   --radius-lg: var(--radius);
 94:   --radius-xl: calc(var(--radius) + 4px);
 95:   --color-background: var(--background);
 96:   --color-foreground: var(--foreground);
 97:   --color-card: var(--card);
 98:   --color-card-foreground: var(--card-foreground);
 99:   --color-popover: var(--popover);
100:   --color-popover-foreground: var(--popover-foreground);
101:   --color-primary: var(--primary);
102:   --color-primary-foreground: var(--primary-foreground);
103:   --color-secondary: var(--secondary);
104:   --color-secondary-foreground: var(--secondary-foreground);
105:   --color-muted: var(--muted);
106:   --color-muted-foreground: var(--muted-foreground);
107:   --color-accent: var(--accent);
108:   --color-accent-foreground: var(--accent-foreground);
109:   --color-destructive: var(--destructive);
110:   --color-border: var(--border);
111:   --color-input: var(--input);
112:   --color-ring: var(--ring);
113:   --color-chart-1: var(--chart-1);
114:   --color-chart-2: var(--chart-2);
115:   --color-chart-3: var(--chart-3);
116:   --color-chart-4: var(--chart-4);
117:   --color-chart-5: var(--chart-5);
118:   --color-sidebar: var(--sidebar);
119:   --color-sidebar-foreground: var(--sidebar-foreground);
120:   --color-sidebar-primary: var(--sidebar-primary);
121:   --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
122:   --color-sidebar-accent: var(--sidebar-accent);
123:   --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
124:   --color-sidebar-border: var(--sidebar-border);
125:   --color-sidebar-ring: var(--sidebar-ring);
126: }
127: 
128: :root {
129:   --radius: 0.625rem;
130:   --background: #070E1A;
131:   --foreground: #E8EDF5;
132:   --card: #0C1E3A;
133:   --card-foreground: #E8EDF5;
134:   --popover: #0C1E3A;
135:   --popover-foreground: #E8EDF5;
136:   --primary: #00D26A;
137:   --primary-foreground: #070E1A;
138:   --secondary: #1E3A5F;
139:   --secondary-foreground: #E8EDF5;
140:   --muted: #1E3A5F;
141:   --muted-foreground: #94A3B8;
142:   --accent: #3B82F6;
143:   --accent-foreground: #E8EDF5;
144:   --destructive: oklch(0.577 0.245 27.325);
145:   --border: rgba(0, 210, 106, 0.12);
146:   --input: #1E3A5F;
147:   --ring: #00D26A;
148:   --chart-1: #00D26A;
149:   --chart-2: #3B82F6;
150:   --chart-3: #8B5CF6;
151:   --chart-4: #F59E0B;
152:   --chart-5: #EC4899;
153:   --sidebar: #0C1E3A;
154:   --sidebar-foreground: #E8EDF5;
155:   --sidebar-primary: #00D26A;
156:   --sidebar-primary-foreground: #070E1A;
157:   --sidebar-accent: #3B82F6;
158:   --sidebar-accent-foreground: #E8EDF5;
159:   --sidebar-border: rgba(0, 210, 106, 0.12);
160:   --sidebar-ring: #00D26A;
161: }
162: 
163: @layer base {
164:   * {
165:     @apply border-border outline-ring/50;
166:   }
167:   body {
168:     @apply bg-background text-foreground;
169:   }
170: }
````

## File: apps/client/app/home/components/About.tsx
````typescript
 1: import React from 'react';
 2: import Link from 'next/link';
 3: 
 4: const values = [
 5:   {
 6:     icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
 7:     title: 'Trust',
 8:     description: 'Our no-deposit policy is our promise. We build trust by reversing the financial risk for our clients.',
 9:   },
10:   {
11:     icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
12:     title: 'Partnership',
13:     description: 'We work with you, face-to-face. We\'re a local partner invested in your success, not a distant vendor.',
14:   },
15:   {
16:     icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
17:     title: 'Quality',
18:     description: 'We deliver modern, responsive, and effective websites that help you stand out and achieve your goals.',
19:   },
20:    {
21:     icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 017.743-5.743z" /></svg>,
22:     title: 'Accessibility',
23:     description: 'We make professional web development accessible to all local businesses, removing cost and complexity.',
24:   },
25: ];
26: 
27: const About: React.FC = () => {
28:   return (
29:     <section id="about" className="py-20" style={{ background: 'linear-gradient(180deg, #0C1E3A 0%, #070E1A 100%)' }}>
30:       <div className="container mx-auto px-4 sm:px-6">
31:         <div className="text-center mb-12">
32:           <h2 className="text-3xl md:text-4xl font-bold text-white">Your Local Digital Partner in Phalaborwa</h2>
33:           <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
34:             We are a Phalaborwa-based web development studio dedicated to empowering local businesses. We build relationships on trust, transparency, and a shared goal: your complete satisfaction.
35:           </p>
36:         </div>
37: 
38:         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
39:           {values.map((value) => (
40:             <div key={value.title} className="bg-background p-6 rounded-lg text-center">
41:               <div className="text-brand-primary inline-block p-4 bg-brand-primary/10 rounded-full mb-4">
42:                 {value.icon}
43:               </div>
44:               <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
45:               <p className="text-slate-400">{value.description}</p>
46:             </div>
47:           ))}
48:         </div>
49:         <div className="text-center mt-12">
50:             <Link href="/about" className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300">
51:                 Learn More About Us
52:             </Link>
53:         </div>
54:       </div>
55:     </section>
56:   );
57: };
58: 
59: export default About;
````

## File: apps/client/app/home/components/Faq.tsx
````typescript
 1: 'use client';
 2: import React, { useState } from 'react';
 3: import type { FaqItem } from '@malalang/shared/types';
 4: 
 5: const FaqItemComponent: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void; id: string }> = ({ item, isOpen, onClick, id }) => {
 6:     const handleKeyDown = (e: React.KeyboardEvent) => {
 7:         if (e.key === 'Enter' || e.key === ' ') {
 8:             e.preventDefault();
 9:             onClick();
10:         }
11:     };
12: 
13:     return (
14:         <div className="border-b border-slate-800">
15:             <button
16:                 onClick={onClick}
17:                 onKeyDown={handleKeyDown}
18:                 className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-white hover:text-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-secondary rounded px-2"
19:                 aria-expanded={isOpen}
20:                 aria-controls={`faq-answer-${id}`}
21:                 id={`faq-question-${id}`}
22:             >
23:                 <span>{item.question}</span>
24:                 <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} flex-shrink-0 ml-4`} aria-hidden="true">
25:                     <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
26:                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
27:                     </svg>
28:                 </span>
29:             </button>
30:             <div
31:                 id={`faq-answer-${id}`}
32:                 role="region"
33:                 aria-labelledby={`faq-question-${id}`}
34:                 className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
35:                 hidden={!isOpen}
36:             >
37:                 <p className="pt-2 pb-5 text-slate-300 px-2">
38:                     {item.answer}
39:                 </p>
40:             </div>
41:         </div>
42:     );
43: };
44: 
45: 
46: const Faq: React.FC<{ faqs: FaqItem[] }> = ({ faqs }) => {
47:     const [openIndex, setOpenIndex] = useState<number | null>(null);
48: 
49:     const handleToggle = (index: number) => {
50:         setOpenIndex(openIndex === index ? null : index);
51:     };
52: 
53:     return (
54:         <section id="faq" className="py-20 bg-slate-900" aria-labelledby="faq-heading">
55:             <div className="container mx-auto px-6">
56:                 <div className="text-center mb-12">
57:                     <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
58:                     <p className="mt-4 text-lg text-slate-300">
59:                         Have questions? We have answers.
60:                     </p>
61:                 </div>
62:                 <div className="max-w-3xl mx-auto">
63:                     {faqs.map((item, index) => (
64:                         <FaqItemComponent
65:                             key={index}
66:                             item={item}
67:                             isOpen={openIndex === index}
68:                             onClick={() => handleToggle(index)}
69:                             id={`${index}`}
70:                         />
71:                     ))}
72:                 </div>
73:             </div>
74:         </section>
75:     );
76: };
77: 
78: export default Faq;
````

## File: apps/client/app/home/components/Guarantee.tsx
````typescript
 1: import React from 'react';
 2: import Link from 'next/link';
 3: 
 4: const Guarantee: React.FC = () => {
 5:   return (
 6:     <section id="guarantee" className="py-20 bg-slate-900">
 7:       <div className="container mx-auto px-6">
 8:         <div className="bg-background rounded-lg p-8 md:p-12 border border-brand-primary/30 text-center">
 9:             <div className="inline-block bg-brand-primary/10 text-brand-primary p-4 rounded-full mb-4">
10:                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
11:                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 21a12.02 12.02 0 009-8.056c.32-1.178.524-2.41.524-3.676 0-3.322-1.34-6.32-3.524-8.516z" />
12:                 </svg>
13:             </div>
14:           <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our No-Risk Guarantee</h2>
15:           <p className="text-xl md:text-2xl text-brand-primary font-semibold mt-4">
16:             You Don't Pay a Cent Until You're 100% Satisfied.
17:           </p>
18:           <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
19:             We operate on a trust-first model. We build your website and you only pay when you are completely happy. This is our promise to you.
20:           </p>
21:           <div className="text-center mt-8">
22:             <Link href="/about#guarantee" className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300">
23:                 Learn More About Our Guarantee
24:             </Link>
25:           </div>
26:         </div>
27:       </div>
28:     </section>
29:   );
30: };
31: 
32: export default Guarantee;
````

## File: apps/client/app/home/components/Portfolio.tsx
````typescript
 1: import React from 'react';
 2: import type { PortfolioItem } from '@malalang/shared/types';
 3: 
 4: const Portfolio: React.FC<{ items: PortfolioItem[] }> = ({ items }) => {
 5:   return (
 6:     <section id="portfolio" className="py-24 bg-slate-900" aria-labelledby="portfolio-heading">
 7:       <div className="container mx-auto px-4 sm:px-6">
 8:         <div className="text-center mb-16">
 9:           <h2 id="portfolio-heading" className="text-3xl md:text-5xl font-extrabold text-white mb-6">Our Work</h2>
10:           <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">Helping local businesses stand out with professional digital solutions.</p>
11:         </div>
12: 
13:         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
14:           {items.map((item, index) => (
15:             <div
16:               key={index}
17:               className="group bg-background rounded-3xl overflow-hidden border border-slate-800 hover:border-brand-primary/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
18:             >
19:               <div className="relative h-64 md:h-80 overflow-hidden">
20:                 <img
21:                   src={item.imageUrl}
22:                   alt={item.title}
23:                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
24:                 />
25:                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
26:                 <div className="absolute bottom-6 left-6">
27:                     <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary border border-brand-primary/30 rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
28:                         {item.category}
29:                     </span>
30:                 </div>
31:               </div>
32: 
33:               <div className="p-8">
34:                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
35:                 <p className="text-slate-400 leading-relaxed">{item.description}</p>
36:               </div>
37:             </div>
38:           ))}
39:         </div>
40: 
41:         <div className="mt-16 text-center">
42:             <p className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-8">Ready to be our next success story?</p>
43:             <a href="/contact" className="inline-block bg-white hover:bg-brand-primary text-black font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105">
44:                 Start Your Project &rarr;
45:             </a>
46:         </div>
47:       </div>
48:     </section>
49:   );
50: };
51: 
52: export default Portfolio;
````

## File: apps/client/app/home/components/RecentPosts.tsx
````typescript
 1: import React from "react";
 2: import Link from "next/link";
 3: import { getBlogPostsWithAuthors } from "@malalang/shared/services/blogs";
 4: 
 5: const RecentPosts: React.FC = async () => {
 6: 
 7: 
 8:   const { posts } = await getBlogPostsWithAuthors({ limit: 3 });
 9:   const recentPosts = posts;
10:   return (
11:     <section id="recent-posts" className="py-20 bg-background">
12:       <div className="container mx-auto px-6">
13:         <div className="text-center mb-12">
14:           <h2 className="text-3xl md:text-4xl font-bold text-white">
15:             Latest Insights
16:           </h2>
17:           <p className="mt-4 text-lg text-slate-400">
18:             Check out the latest articles from our blog.
19:           </p>
20:         </div>
21: 
22:         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
23:           {recentPosts.map((post) => {
24: 
25:             return (
26:               <div
27:                 key={post.slug}
28:                 className="bg-slate-900 rounded-lg overflow-hidden shadow-lg flex flex-col group"
29:               >
30:                 <Link href={`/blog/${post.slug}`} className="block">
31:                   <img
32:                     src={post.imageUrl}
33:                     alt={post.title}
34:                     className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
35:                   />
36:                 </Link>
37:                 <div className="p-6 flex flex-col grow">
38:                   <p className="text-sm text-slate-400">
39:                     {new Date(post.publishedAt).toLocaleDateString("en-US", {
40:                       year: "numeric",
41:                       month: "long",
42:                       day: "numeric",
43:                       timeZone: "UTC",
44:                     })} &bull; {post.author?.name || "Unknown Author"}
45:                   </p>
46:                   <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-brand-primary transition-colors duration-300">
47:                     <Link href={`/blog/${post.slug}`}>{post.title}</Link>
48:                   </h3>
49:                   <p className="text-slate-300 grow text-base">
50:                     {post.excerpt}
51:                   </p>
52:                   <div className="mt-4">
53:                     <Link
54:                       href={`/blog/${post.slug}`}
55:                       className="font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-300"
56:                     >
57:                       Read More &rarr;
58:                     </Link>
59:                   </div>
60:                 </div>
61:               </div>
62:             );
63:           })}
64:         </div>
65: 
66:         <div className="text-center mt-12">
67:           <Link
68:             href="/blog"
69:             className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
70:           >
71:             View All Posts
72:           </Link>
73:         </div>
74:       </div>
75:     </section>
76:   );
77: };
78: 
79: export default RecentPosts;
````

## File: apps/client/app/home/components/Testimonials.tsx
````typescript
 1: import React from 'react';
 2: import type { Testimonial } from '@malalang/shared/types';
 3: 
 4: const Testimonials: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
 5:   return (
 6:     <section id="testimonials" className="py-20 bg-background" aria-labelledby="testimonials-heading">
 7:       <div className="container mx-auto px-6">
 8:         <div className="text-center mb-16">
 9:           <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
10:           <p className="text-lg text-slate-400">Trusted by local businesses in Phalaborwa and beyond.</p>
11:         </div>
12: 
13:         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
14:           {testimonials.map((testimonial, index) => (
15:             <div
16:               key={index}
17:               className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-brand-primary/30 transition-all duration-300"
18:             >
19:               <div className="text-brand-primary mb-6">
20:                 <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 32 32">
21:                   <path d="M10 8v8H6v2a2 2 0 002 2h2v4H8a6 6 0 01-6-6v-8a2 2 0 012-2h4zm14 0v8h-4v2a2 2 0 002 2h2v4h-2a6 6 0 01-6-6v-8a2 2 0 012-2h4z" />
22:                 </svg>
23:               </div>
24:               <p className="text-slate-300 italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
25:               <div className="border-t border-slate-800 pt-6">
26:                 <p className="font-bold text-white">{testimonial.author}</p>
27:                 <p className="text-sm text-brand-primary font-mono uppercase tracking-wider">{testimonial.company}</p>
28:               </div>
29:             </div>
30:           ))}
31:         </div>
32:       </div>
33:     </section>
34:   );
35: };
36: 
37: export default Testimonials;
````

## File: apps/client/app/manifest.ts
````typescript
 1: import { MetadataRoute } from 'next'
 2: 
 3: export default function manifest(): MetadataRoute.Manifest {
 4:   return {
 5:     name: 'Malalang - Web Development Solutions',
 6:     short_name: 'Malalang',
 7:     description: 'Malalang offers professional web development services, specializing in creating fast, responsive, and SEO-friendly websites for businesses of all sizes.',
 8:     start_url: '/',
 9:     display: 'standalone',
10:     background_color: '#0F172A',
11:     theme_color: '#0F172A',
12:     icons: [
13:       {
14:         src: '/favicon.ico',
15:         sizes: 'any',
16:         type: 'image/x-icon',
17:       },
18:       {
19:         src: '/favicon.png',
20:         sizes: 'any',
21:         type: 'image/png',
22:       },
23:       {
24:         src: '/favicon.png',
25:         sizes: 'any',
26:         type: 'image/png',
27: 
28:       },
29:     ],
30:   }
31: }
````

## File: apps/client/app/questionnaire/components/AIActions.tsx
````typescript
 1: import React from "react";
 2: import { Question } from "./types";
 3: 
 4: interface AIActionsProps {
 5:   value: FormData;
 6:   question: Question;
 7:   aiLoading: string | null;
 8:   onEnhance: (questionId: string, questionText: string) => void;
 9:   onSuggest: (questionId: string, questionText: string) => void;
10: }
11: 
12: const AIActions: React.FC<AIActionsProps> = ({
13:   question,
14:   aiLoading,
15:   onEnhance,
16:   onSuggest,
17:   value
18: }) => {
19:   return (
20:     <div className="flex space-x-2 pt-2">
21:       <button
22:         type="button"
23:         onClick={() => onEnhance(question.id, question.text)}
24:         disabled={!!aiLoading || !value}
25:         className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:bg-slate-600 transition-colors"
26:       >
27:         {aiLoading === question.id ? "Enhancing..." : "Enhance with AI"}
28:       </button>
29:       <button
30:         type="button"
31:         onClick={() => onSuggest(question.id, question.text)}
32:         disabled={!!aiLoading}
33:         className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md disabled:bg-slate-600 transition-colors"
34:       >
35:         {aiLoading === question.id ? "Suggesting..." : "Suggest Answers"}
36:       </button>
37:     </div>
38:   );
39: };
40: 
41: export default AIActions;
````

## File: apps/client/app/questionnaire/components/FileUploadWidget.tsx
````typescript
  1: "use client";
  2: import React, { useState } from "react";
  3: 
  4: interface FileUploadWidgetProps {
  5:   id: string;
  6:   label: string;
  7:   description: string;
  8:   onUploadComplete: (id: string, url: string) => void;
  9:   cloudinaryApiKey: string;
 10:   cloudinaryCloudName: string;
 11: }
 12: 
 13: const FileUploadWidget: React.FC<FileUploadWidgetProps> = ({
 14:   id,
 15:   label,
 16:   description,
 17:   onUploadComplete,cloudinaryApiKey,
 18:   cloudinaryCloudName,
 19: }) => {
 20:   const [file, setFile] = useState<File | null>(null);
 21:   const [isUploading, setIsUploading] = useState(false);
 22:   const [uploadProgress, setUploadProgress] = useState(0);
 23:   const [uploadUrl, setUploadUrl] = useState<string | null>(null);
 24:   const [error, setError] = useState<string | null>(null);
 25: 
 26:   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 27:     if (event.target.files && event.target.files[0]) {
 28:       setFile(event.target.files[0]);
 29:       setUploadUrl(null);
 30:       setError(null);
 31:     }
 32:   };
 33: 
 34:   const handleUpload = async () => {
 35:     if (!file) {
 36:       setError("Please select a file first.");
 37:       return;
 38:     }
 39: 
 40:     setIsUploading(true);
 41:     setError(null);
 42:     setUploadProgress(0);
 43: 
 44:     try {
 45:       const timestamp = Math.round(new Date().getTime() / 1000);
 46:       const paramsToSign = {
 47:         timestamp,
 48:         eager: "w_400,h_300,c_pad|w_260,h_200,c_crop",
 49:         public_id: `questionnaire/${id}_${file.name}`,
 50:       };
 51: 
 52: 
 53:       const signResponse = await fetch("/api/sign-image", {
 54:         method: "POST",
 55:         headers: { "Content-Type": "application/json" },
 56:         body: JSON.stringify({ paramsToSign }),
 57:       });
 58: 
 59:       if (!signResponse.ok) {
 60:         const errorData = await signResponse.json();
 61:         setError(
 62:           `Failed to get upload signature: ${
 63:             errorData.error || signResponse.statusText
 64:           }`
 65:         );
 66:         setIsUploading(false);
 67:         return;
 68:       }
 69: 
 70:       const { signature } = await signResponse.json();
 71:      if (!cloudinaryApiKey) {
 72:         setError("Configuration error: Cloudinary API key is not set.");
 73:         setIsUploading(false);
 74:         return;
 75:       }
 76: 
 77:       const formData = new FormData();
 78:       formData.append("file", file);
 79:       formData.append("api_key", cloudinaryApiKey);
 80:       formData.append("timestamp", timestamp.toString());
 81:       formData.append("public_id", paramsToSign.public_id);
 82:       formData.append("eager", paramsToSign.eager);
 83:       formData.append("signature", signature);
 84: 
 85:       const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`;
 86: 
 87:       const xhr = new XMLHttpRequest();
 88:       xhr.open("POST", uploadUrl, true);
 89: 
 90:       xhr.upload.onprogress = (event) => {
 91:         if (event.lengthComputable) {
 92:           const percentCompleted = Math.round(
 93:             (event.loaded * 100) / event.total
 94:           );
 95:           setUploadProgress(percentCompleted);
 96:         }
 97:       };
 98: 
 99:       xhr.onload = () => {
100:         setIsUploading(false);
101:         if (xhr.status === 200) {
102:           const response = JSON.parse(xhr.responseText);
103:           const secureUrl = response.secure_url;
104:           setUploadUrl(secureUrl);
105:           onUploadComplete(id, secureUrl);
106:         } else {
107:           setError(`Upload failed: ${xhr.statusText}`);
108:         }
109:       };
110: 
111:       xhr.onerror = () => {
112:         setIsUploading(false);
113:         setError("An unknown error occurred during upload.");
114:       };
115: 
116:       xhr.send(formData);
117:     } catch (err: any) {
118:       setIsUploading(false);
119:       setError(`Upload failed: ${err.message}`);
120:     }
121:   };
122: 
123:   return (
124:     <div className="bg-slate-900/50 p-4 rounded-md border border-slate-700/50">
125:       <label htmlFor={id} className="block text-slate-300 font-semibold mb-2">
126:         {label}
127:       </label>
128:       <p id={`${id}-description`} className="text-sm text-slate-400 mt-1 mb-3">{description}</p>
129: 
130:       <div className="flex items-center space-x-4">
131:         <input
132:           type="file"
133:           id={id}
134:           onChange={handleFileChange}
135:           className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20"
136:           disabled={isUploading}
137:           aria-describedby={`${id}-description ${error ? `${id}-error` : ""} ${uploadUrl ? `${id}-success` : ""}`}
138:           aria-invalid={!!error}
139:         />
140:         <button
141:           onClick={handleUpload}
142:           disabled={!file || isUploading}
143:           className="bg-brand-primary hover:bg-brand-primary/80 disabled:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm whitespace-nowrap"
144:         >
145:           {isUploading ? "Uploading..." : "Upload"}
146:         </button>
147:       </div>
148: 
149:       {isUploading && (
150:         <div className="mt-3 w-full bg-slate-700 rounded-full h-2.5" role="progressbar" aria-valuenow={uploadProgress} aria-valuemin={0} aria-valuemax={100}>
151:           <div
152:             className="bg-brand-primary h-2.5 rounded-full"
153:             style={{ width: `${uploadProgress}%` }}
154:           ></div>
155:         </div>
156:       )}
157: 
158:       {error && <p id={`${id}-error`} className="text-red-400 text-sm mt-2" role="alert">{error}</p>}
159: 
160:       {uploadUrl && (
161:         <div id={`${id}-success`} className="mt-3 text-sm text-green-400 bg-green-900/20 p-3 rounded-md border border-green-700/50" role="status">
162:           <p>
163:             Upload successful!{" "}
164:             <a
165:               href={uploadUrl}
166:               target="_blank"
167:               rel="noopener noreferrer"
168:               className="underline hover:text-green-300"
169:             >
170:               View File
171:             </a>
172:           </p>
173:         </div>
174:       )}
175:     </div>
176:   );
177: };
178: 
179: export default FileUploadWidget;
````

## File: apps/client/app/questionnaire/components/ProgressBar.tsx
````typescript
 1: import React from 'react';
 2: 
 3: interface ProgressBarProps {
 4:   currentStep: number;
 5:   totalSteps: number;
 6: }
 7: 
 8: const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
 9:   const progressPercentage = (currentStep / (totalSteps - 1)) * 100;
10: 
11:   return (
12:     <div className="mb-8" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={totalSteps} aria-valuetext={`Step ${currentStep + 1} of ${totalSteps}${steps[currentStep] ? `: ${steps[currentStep].title}` : ''}`}>
13:         <div className="flex justify-between items-center mb-2">
14:             <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-brand-primary bg-brand-primary/20">
15:               Step {currentStep + 1} of {totalSteps}
16:             </span>
17:             <span className='text-sm text-slate-400'>
18:                 {steps[currentStep]?.title}
19:             </span>
20:         </div>
21:       <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-700">
22:         <div
23:           style={{ width: `${progressPercentage}%` }}
24:           className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-primary transition-all duration-500"
25:         ></div>
26:       </div>
27:     </div>
28:   );
29: };
30: 
31: 
32: import { steps } from './constants';
33: 
34: export default ProgressBar;
````

## File: apps/client/app/questionnaire/components/ReviewStep.tsx
````typescript
 1: import React from 'react';
 2: import { Step, FormData } from './types';
 3: 
 4: interface ReviewStepProps {
 5:   steps: Step[];
 6:   formData: FormData;
 7:   onEdit: (stepIndex: number) => void;
 8: }
 9: 
10: const ReviewStep: React.FC<ReviewStepProps> = ({ steps, formData, onEdit }) => {
11:   return (
12:     <div className="space-y-6">
13:         <div className="text-center">
14:             <h2 className="text-3xl font-bold text-white">Review Your Answers</h2>
15:             <p className="text-slate-400 mt-2">Please review your answers before submitting. You can edit any section by clicking the 'Edit' button.</p>
16:         </div>
17: 
18:       {steps.map((step, stepIndex) => {
19:         if (step.id === 'review') return null;
20:         return (
21:           <div key={step.id} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
22:             <div className="flex justify-between items-center mb-4">
23:               <h3 className="text-xl font-semibold text-white">{step.title}</h3>
24:               <button
25:                 onClick={() => onEdit(stepIndex)}
26:                 className="text-sm text-brand-primary hover:underline"
27:                 aria-label={`Edit ${step.title} section`}
28:               >
29:                 Edit
30:               </button>
31:             </div>
32:             <dl className="space-y-4">
33:               {step.questions?.map((q) => (
34:                 <div key={q.id}>
35:                   <dt className="text-sm font-medium text-slate-300">{q.text.replace('{businessName}', formData.businessName || 'your business')}</dt>
36:                   <dd className="text-white mt-1">
37:                     {Array.isArray(formData[q.id])
38:                       ? (formData[q.id] as string[]).join(', ')
39:                       : (formData[q.id] || <span className='text-slate-400 italic font-normal'>Not answered</span>)
40:                     }
41:                   </dd>
42:                 </div>
43:               ))}
44:             </dl>
45:           </div>
46:         );
47:       })}
48:     </div>
49:   );
50: };
51: 
52: export default ReviewStep;
````

## File: apps/client/app/questionnaire/components/Step.tsx
````typescript
 1: import React from "react";
 2: import { Step as StepType, FormData } from "./types";
 3: import Question from "./Question";
 4: 
 5: interface StepProps {
 6:   step: StepType;
 7:   formData: FormData;
 8:   aiLoading: string | null;
 9:   onChange: (
10:     e: React.ChangeEvent<
11:       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
12:     >
13:   ) => void;
14:   onCheckboxChange: (id: string, value: string, checked: boolean) => void;
15:   onFileUpload: (id: string, url: string) => void;
16:   onEnhance: (questionId: string, questionText: string) => void;
17:   onSuggest: (questionId: string, questionText: string) => void;
18:   onPhoneNumberChange: (value: string) => void;
19:   cloudinaryApiKey: string;
20:   cloudinaryCloudName: string;
21: }
22: 
23: const Step: React.FC<StepProps> = ({
24:   onPhoneNumberChange,
25:   step,
26:   formData,
27:   aiLoading,
28:   onChange,
29:   onCheckboxChange,
30:   onFileUpload,
31:   onEnhance,
32:   onSuggest,
33:   cloudinaryApiKey,
34:   cloudinaryCloudName,
35: }) => {
36:   const visibleQuestions = step.questions.filter((q) => {
37:     if (q.dependsOn) {
38:       const dependsVal = formData[q.dependsOn];
39:       if (q.showIf) return q.showIf(dependsVal);
40:       return !!dependsVal;
41:     }
42:     return true;
43:   });
44: 
45:   return (
46:     <fieldset>
47:       <legend className="text-xl font-semibold text-white mb-4">
48:         {step.title}
49:       </legend>
50:       <div className="space-y-6">
51:         {visibleQuestions.map((q) => (
52:           <Question
53:             cloudinaryApiKey={cloudinaryApiKey}
54:             cloudinaryCloudName={cloudinaryCloudName}
55:             key={q.id}
56:             question={q}
57:             formData={formData}
58:             aiLoading={aiLoading}
59:             onChange={onChange}
60:             onPhoneNumberChange={onPhoneNumberChange}
61:             onCheckboxChange={onCheckboxChange}
62:             onFileUpload={onFileUpload}
63:             onEnhance={onEnhance}
64:             onSuggest={onSuggest}
65:           />
66:         ))}
67:       </div>
68:     </fieldset>
69:   );
70: };
71: 
72: export default Step;
````

## File: apps/client/app/questionnaire/components/types.ts
````typescript
1: import { QuestionnaireFormData } from "@malalang/shared/types";
2: 
3: export type { QuestionOption, Question, QuestionnaireStep as Step } from "@malalang/shared/types";
4: 
5: export type FormData = QuestionnaireFormData;
````

## File: apps/client/app/robots.ts
````typescript
 1: import { MetadataRoute } from "next";
 2: 
 3: 
 4: const siteUrl =
 5:   process.env.NEXT_PUBLIC_SITE_URL || "https://malalang.co.za";
 6: 
 7: export default function robots(): MetadataRoute.Robots {
 8:   return {
 9:     rules: {
10:       userAgent: "*",
11:       allow: "/",
12:       disallow: ["/questionnaire/", "/privacy-policy/"],
13:     },
14:     sitemap: `${siteUrl}/sitemap.xml`,
15:   };
16: }
````

## File: apps/client/app/services/GEMINI.md
````markdown
 1: # Services & Pricing System
 2: 
 3: This directory manages the core service catalog and pricing display for Malalang. It is fully dynamic and controlled via the Admin Panel.
 4: 
 5: ## Directory Structure
 6: 
 7: - `page.tsx`: The Services Hub. Displays high-level categories (Website Design, Domain Registration, etc.) fetched from the `service_categories` table.
 8: - `[service]/page.tsx`: Dynamic detail page for specific packages.
 9: - `pricing/page.tsx`: The main Pricing table. Fetches packages, addon categories, and care plans.
10: 
11: ## Dynamic Data Model
12: 
13: The system uses a two-tier model for services:
14: 1.  **`services` table**: Core info (title, price, category).
15: 2.  **`service_details` table**: Deep marketing data (long description, target audience, feature list).
16: 
17: When a service is fetched via `@malalang/shared`, these tables are automatically joined to provide a complete `ServicePackage` object.
18: 
19: ## Adding New Services
20: 1.  **Admin Panel**: Go to the "Services" section and click "New Service".
21: 2.  **Required Info**: Title, Price, and a unique `serviceUrl` (slug).
22: 3.  **Deep Details**: Add long descriptions and features to make the public page informative.
23: 
24: ## Pricing Customization
25: The Pricing page is composed of:
26: - **Service Packages**: (Filtered by `is_combo`).
27: - **Addon Categories**: (e.g., "SEO & Performance").
28: - **Launch Pack**: Bundled essential services.
29: - **Web Care Plan**: Monthly recurring maintenance.
30: 
31: All these can be modified in the database without code changes.
````

## File: apps/client/components.json
````json
 1: {
 2:   "$schema": "https://ui.shadcn.com/schema.json",
 3:   "style": "default",
 4:   "rsc": true,
 5:   "tsx": true,
 6:   "tailwind": {
 7:     "config": "tailwind.config.ts",
 8:     "css": "app/globals.css",
 9:     "baseColor": "slate",
10:     "cssVariables": true
11:   },
12:   "aliases": {
13:     "components": "@/components",
14:     "utils": "@/lib/utils"
15:   }
16: }
````

## File: apps/client/eslint.config.js
````javascript
1: import { nextJsConfig } from "@malalang/eslint-config/next-js";
2: 
3: 
4: export default nextJsConfig;
````

## File: apps/client/next.config.ts
````typescript
 1: import type {NextConfig} from 'next';
 2: 
 3: const nextConfig: NextConfig = {
 4: 
 5: 
 6: 
 7: 
 8: 
 9:   images: {
10:     remotePatterns: [
11:       {
12:         protocol: 'https',
13:         hostname: 'placehold.co',
14:         port: '',
15:         pathname: '
````

## File: apps/client/postcss.config.js
````javascript
1: module.exports = {
2:   plugins: {
3:     '@tailwindcss/postcss': {},
4:     autoprefixer: {},
5:   },
6: }
````

## File: apps/client/public/robots.txt
````
1: User-agent: *
2: Allow: /
3: Sitemap: https://malalang.co.za/sitemap.xml
````

## File: package.json
````json
 1: {
 2:   "name": "malalang-monorepo",
 3:   "version": "1.0.0",
 4:   "private": true,
 5:   "scripts": {
 6:     "dev": "turbo run dev",
 7:     "build": "turbo run build",
 8:     "lint": "turbo run lint",
 9:     "format": "prettier --write \"**/*.{ts,tsx,md}\"",
10:     "check-types": "turbo run check-types",
11:     "gen:types": "supabase gen types typescript --local > packages/shared/src/types/supabase.ts"
12:   },
13:   "devDependencies": {
14:     "prettier": "^3.8.3",
15:     "turbo": "^2.9.14",
16:     "typescript": "5.9.2"
17:   },
18:   "packageManager": "pnpm@9.0.0",
19:   "engines": {
20:     "node": ">=18"
21:   }
22: }
````

## File: packages/eslint-config/base.js
````javascript
 1: import js from "@eslint/js";
 2: import eslintConfigPrettier from "eslint-config-prettier";
 3: import turboPlugin from "eslint-plugin-turbo";
 4: import tseslint from "typescript-eslint";
 5: import onlyWarn from "eslint-plugin-only-warn";
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: export const config = [
13:   js.configs.recommended,
14:   eslintConfigPrettier,
15:   ...tseslint.configs.recommended,
16:   {
17:     plugins: {
18:       turbo: turboPlugin,
19:     },
20:     rules: {
21:       "turbo/no-undeclared-env-vars": "warn",
22:     },
23:   },
24:   {
25:     plugins: {
26:       onlyWarn,
27:     },
28:   },
29:   {
30:     ignores: ["dist/**"],
31:   },
32: ];
````

## File: packages/eslint-config/next.js
````javascript
 1: import js from "@eslint/js";
 2: import { globalIgnores } from "eslint/config";
 3: import eslintConfigPrettier from "eslint-config-prettier";
 4: import tseslint from "typescript-eslint";
 5: import pluginReactHooks from "eslint-plugin-react-hooks";
 6: import pluginReact from "eslint-plugin-react";
 7: import globals from "globals";
 8: import pluginNext from "@next/eslint-plugin-next";
 9: import { config as baseConfig } from "./base.js";
10: 
11: 
12: 
13: 
14: 
15: 
16: export const nextJsConfig = [
17:   ...baseConfig,
18:   js.configs.recommended,
19:   eslintConfigPrettier,
20:   ...tseslint.configs.recommended,
21:   globalIgnores([
22: 
23:     ".next/**",
24:     "out/**",
25:     "build/**",
26:     "next-env.d.ts",
27:   ]),
28:   {
29:     ...pluginReact.configs.flat.recommended,
30:     languageOptions: {
31:       ...pluginReact.configs.flat.recommended.languageOptions,
32:       globals: {
33:         ...globals.serviceworker,
34:       },
35:     },
36:   },
37:   {
38:     plugins: {
39:       "@next/next": pluginNext,
40:     },
41:     rules: {
42:       ...pluginNext.configs.recommended.rules,
43:       ...pluginNext.configs["core-web-vitals"].rules,
44:     },
45:   },
46:   {
47:     plugins: {
48:       "react-hooks": pluginReactHooks,
49:     },
50:     settings: { react: { version: "detect" } },
51:     rules: {
52:       ...pluginReactHooks.configs.recommended.rules,
53: 
54:       "react/react-in-jsx-scope": "off",
55:     },
56:   },
57: ];
````

## File: packages/shared/src/utils/formatters.ts
````typescript
 1: export function formatCurrency(amount: number | string): string {
 2:   const value = typeof amount === 'string' ? parseFloat(amount) : amount;
 3:   return new Intl.NumberFormat('en-ZA', {
 4:     style: 'currency',
 5:     currency: 'ZAR',
 6:   }).format(value);
 7: }
 8: 
 9: 
10: 
11: 
12: export function formatDate(dateString: string): string {
13:   if (!dateString) return 'N/A';
14:   return new Date(dateString).toLocaleDateString('en-ZA', {
15:     year: 'numeric',
16:     month: 'long',
17:     day: 'numeric',
18:   });
19: }
20: 
21: 
22: 
23: 
24: export function generateSlug(title: string): string {
25:   return title
26:     .toLowerCase()
27:     .trim()
28:     .replace(/[^\w\s-]/g, '')
29:     .replace(/[\s_-]+/g, '-')
30:     .replace(/^-+|-+$/g, '');
31: }
````

## File: packages/typescript-config/nextjs.json
````json
 1: {
 2:   "$schema": "https://json.schemastore.org/tsconfig",
 3:   "extends": "./base.json",
 4:   "compilerOptions": {
 5:     "plugins": [{ "name": "next" }],
 6:     "module": "ESNext",
 7:     "moduleResolution": "bundler",
 8:     "allowJs": true,
 9:     "jsx": "preserve",
10:     "noEmit": true
11:   }
12: }
````

## File: packages/typescript-config/package.json
````json
1: {
2:   "name": "@malalang/typescript-config",
3:   "version": "0.0.0",
4:   "private": true,
5:   "license": "MIT"
6: }
````

## File: .npmrc
````
1: 
````

## File: apps/admin/app/_components/ConfirmDialog.tsx
````typescript
 1: "use client";
 2: 
 3: interface ConfirmDialogProps {
 4:   isOpen: boolean;
 5:   title: string;
 6:   message: string;
 7:   onConfirm: () => void;
 8:   onCancel: () => void;
 9:   isLoading?: boolean;
10: }
11: 
12: export default function ConfirmDialog({
13:   isOpen,
14:   title,
15:   message,
16:   onConfirm,
17:   onCancel,
18:   isLoading,
19: }: ConfirmDialogProps) {
20:   if (!isOpen) return null;
21: 
22:   return (
23:     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
24:       <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
25:         <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
26:         <p className="text-gray-600 text-sm mb-6">{message}</p>
27:         <div className="flex gap-3 justify-end">
28:           <button
29:             onClick={onCancel}
30:             disabled={isLoading}
31:             className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
32:           >
33:             Cancel
34:           </button>
35:           <button
36:             onClick={onConfirm}
37:             disabled={isLoading}
38:             className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 disabled:opacity-50"
39:           >
40:             {isLoading ? "Deleting..." : "Delete"}
41:           </button>
42:         </div>
43:       </div>
44:     </div>
45:   );
46: }
````

## File: apps/admin/app/_components/FormInput.tsx
````typescript
 1: "use client";
 2: 
 3: interface FormInputProps {
 4:   label: string;
 5:   name: string;
 6:   type?: string;
 7:   placeholder?: string;
 8:   value: string;
 9:   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
10:   error?: string;
11:   required?: boolean;
12: }
13: 
14: export default function FormInput({
15:   label,
16:   name,
17:   type = "text",
18:   placeholder,
19:   value,
20:   onChange,
21:   error,
22:   required,
23: }: FormInputProps) {
24:   return (
25:     <div className="mb-4">
26:       <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
27:         {label}
28:         {required && <span className="text-red-500 ml-1">*</span>}
29:       </label>
30:       <input
31:         id={name}
32:         type={type}
33:         name={name}
34:         placeholder={placeholder}
35:         value={value}
36:         onChange={onChange}
37:         className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
38:           error
39:             ? "border-red-300 focus:ring-red-500"
40:             : "border-gray-300 focus:ring-emerald-500"
41:         }`}
42:       />
43:       {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
44:     </div>
45:   );
46: }
````

## File: apps/admin/app/_components/FormSelect.tsx
````typescript
 1: "use client";
 2: 
 3: interface FormSelectProps {
 4:   label: string;
 5:   name: string;
 6:   value: string;
 7:   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
 8:   options: { label: string; value: string }[];
 9:   error?: string;
10:   required?: boolean;
11: }
12: 
13: export default function FormSelect({
14:   label,
15:   name,
16:   value,
17:   onChange,
18:   options,
19:   error,
20:   required,
21: }: FormSelectProps) {
22:   return (
23:     <div className="mb-4">
24:       <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
25:         {label}
26:         {required && <span className="text-red-500 ml-1">*</span>}
27:       </label>
28:       <select
29:         id={name}
30:         name={name}
31:         value={value}
32:         onChange={onChange}
33:         className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
34:           error
35:             ? "border-red-300 focus:ring-red-500"
36:             : "border-gray-300 focus:ring-emerald-500"
37:         }`}
38:       >
39:         <option value="">Select {label.toLowerCase()}</option>
40:         {options.map((opt) => (
41:           <option key={opt.value} value={opt.value}>
42:             {opt.label}
43:           </option>
44:         ))}
45:       </select>
46:       {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
47:     </div>
48:   );
49: }
````

## File: apps/admin/app/_components/FormTextarea.tsx
````typescript
 1: "use client";
 2: 
 3: interface FormTextareaProps {
 4:   label: string;
 5:   name: string;
 6:   placeholder?: string;
 7:   value: string;
 8:   onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
 9:   error?: string;
10:   required?: boolean;
11:   rows?: number;
12: }
13: 
14: export default function FormTextarea({
15:   label,
16:   name,
17:   placeholder,
18:   value,
19:   onChange,
20:   error,
21:   required,
22:   rows = 4,
23: }: FormTextareaProps) {
24:   return (
25:     <div className="mb-4">
26:       <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
27:         {label}
28:         {required && <span className="text-red-500 ml-1">*</span>}
29:       </label>
30:       <textarea
31:         id={name}
32:         name={name}
33:         placeholder={placeholder}
34:         value={value}
35:         onChange={onChange}
36:         rows={rows}
37:         className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 resize-none ${
38:           error
39:             ? "border-red-300 focus:ring-red-500"
40:             : "border-gray-300 focus:ring-emerald-500"
41:         }`}
42:       />
43:       {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
44:     </div>
45:   );
46: }
````

## File: apps/admin/app/_components/PexelsImagePicker.tsx
````typescript
  1: "use client";
  2: 
  3: import React, { useState, useEffect, useCallback } from "react";
  4: import { Search, Loader2, Check, ExternalLink, Image as ImageIcon } from "lucide-react";
  5: import Image from "next/image";
  6: 
  7: interface PexelsImage {
  8:   id: number;
  9:   width: number;
 10:   height: number;
 11:   url: string;
 12:   photographer: string;
 13:   photographer_url: string;
 14:   photographer_id: number;
 15:   avg_color: string;
 16:   src: {
 17:     original: string;
 18:     large2x: string;
 19:     large: string;
 20:     medium: string;
 21:     small: string;
 22:     portrait: string;
 23:     landscape: string;
 24:     tiny: string;
 25:   };
 26:   alt: string;
 27: }
 28: 
 29: interface PexelsImagePickerProps {
 30:   onSelect: (url: string) => void;
 31:   currentImageUrl?: string;
 32:   suggestions?: string[];
 33: }
 34: 
 35: const PexelsImagePicker: React.FC<PexelsImagePickerProps> = ({ onSelect, currentImageUrl, suggestions = [] }) => {
 36:   const [query, setQuery] = useState("");
 37:   const [images, setImages] = useState<PexelsImage[]>([]);
 38:   const [loading, setLoading] = useState(false);
 39:   const [error, setError] = useState<string | null>(null);
 40:   const [selectedUrl, setSelectedUrl] = useState(currentImageUrl || "");
 41:   const [showSearch, setShowSearch] = useState(false);
 42: 
 43:   const loadInitialPhotos = useCallback(async () => {
 44:     setLoading(true);
 45:     setError(null);
 46:     try {
 47:       const response = await fetch('/api/pexels');
 48:       if (!response.ok) throw new Error("Failed to fetch curated photos");
 49:       const data = await response.json();
 50:       setImages(data.photos || []);
 51:     } catch (err: any) {
 52:       setError(err.message);
 53:     } finally {
 54:       setLoading(false);
 55:     }
 56:   }, []);
 57: 
 58:   const searchImages = useCallback(async (searchQuery?: string) => {
 59:     const q = searchQuery || query;
 60:     if (!q.trim()) {
 61:       loadInitialPhotos();
 62:       return;
 63:     }
 64: 
 65:     setLoading(true);
 66:     setError(null);
 67: 
 68:     try {
 69:       const response = await fetch(`/api/pexels?query=${encodeURIComponent(q)}`);
 70:       if (!response.ok) {
 71:         throw new Error("Failed to fetch images from Pexels");
 72:       }
 73:       const data = await response.json();
 74:       setImages(data.photos || []);
 75:     } catch (err: any) {
 76:       setError(err.message || "An error occurred while searching");
 77:     } finally {
 78:       setLoading(false);
 79:     }
 80:   }, [query, loadInitialPhotos]);
 81: 
 82: 
 83:   useEffect(() => {
 84:     if (showSearch && images.length === 0) {
 85: 
 86:       if (suggestions.length > 0 && suggestions[0]) {
 87:         setQuery(suggestions[0]);
 88:         searchImages(suggestions[0]);
 89:       } else {
 90:         loadInitialPhotos();
 91:       }
 92:     }
 93:   }, [showSearch, images.length, suggestions, searchImages, loadInitialPhotos]);
 94: 
 95:   const handleKeyDown = (e: React.KeyboardEvent) => {
 96:     if (e.key === "Enter") {
 97:       e.preventDefault();
 98:       searchImages();
 99:     }
100:   };
101: 
102:   const handleSuggestionClick = (suggestion: string) => {
103:     setQuery(suggestion);
104:     searchImages(suggestion);
105:   };
106: 
107:   const handleSelect = (image: PexelsImage, size: keyof PexelsImage['src']) => {
108:     const url = image.src[size];
109:     setSelectedUrl(url);
110:     onSelect(url);
111:     setShowSearch(false);
112:   };
113: 
114:   return (
115:     <div className="space-y-4 mb-6">
116:       <div className="flex items-center justify-between">
117:         <label className="block text-sm font-medium text-gray-700">
118:           Blog Image
119:         </label>
120:         {}
121:         <a
122:           href="https://www.pexels.com"
123:           target="_blank"
124:           rel="noopener noreferrer"
125:           className="text-[10px] text-gray-400 hover:text-emerald-600 flex items-center gap-1"
126:         >
127:           Photos provided by Pexels
128:         </a>
129:       </div>
130: 
131:       {}
132:       <div className="relative aspect-video w-full max-w-md rounded-lg overflow-hidden border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center group">
133:         {selectedUrl ? (
134:           <>
135:             <Image
136:               src={selectedUrl}
137:               alt="Preview"
138:               fill
139:               className="object-cover"
140:               unoptimized={selectedUrl.includes('pexels.com')}
141:             />
142:             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
143:               <button
144:                 type="button"
145:                 onClick={() => setShowSearch(!showSearch)}
146:                 className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 flex items-center gap-2"
147:               >
148:                 <ImageIcon size={16} />
149:                 Change Image
150:               </button>
151:             </div>
152:           </>
153:         ) : (
154:           <button
155:             type="button"
156:             onClick={() => setShowSearch(true)}
157:             className="flex flex-col items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors"
158:           >
159:             <ImageIcon size={48} strokeWidth={1} />
160:             <span className="font-medium">Click to select an image from Pexels</span>
161:           </button>
162:         )}
163:       </div>
164: 
165:       {}
166:       {selectedUrl && (
167:         <button
168:           type="button"
169:           onClick={() => setShowSearch(!showSearch)}
170:           className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
171:         >
172:           {showSearch ? "Hide Pexels Search" : "Search Pexels for new image"}
173:         </button>
174:       )}
175: 
176:       {}
177:       {showSearch && (
178:         <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
179:           <div className="flex gap-2">
180:             <div className="relative flex-1">
181:               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
182:               <input
183:                 type="text"
184:                 value={query}
185:                 onChange={(e) => setQuery(e.target.value)}
186:                 onKeyDown={handleKeyDown}
187:                 placeholder="Search Pexels (e.g. 'coding', 'business', 'tech')..."
188:                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
189:               />
190:             </div>
191:             <button
192:               type="button"
193:               onClick={() => searchImages()}
194:               disabled={loading}
195:               className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 disabled:opacity-50 flex items-center gap-2"
196:             >
197:               {loading ? <Loader2 size={18} className="animate-spin" /> : "Search"}
198:             </button>
199:           </div>
200: 
201:           {suggestions.length > 0 && (
202:             <div className="flex flex-wrap gap-2">
203:               <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold w-full mb-1">Suggestions from tags:</span>
204:               {suggestions.map((tag) => (
205:                 <button
206:                   key={tag}
207:                   type="button"
208:                   onClick={() => handleSuggestionClick(tag)}
209:                   className={`text-xs px-3 py-1 rounded-full border transition-all ${
210:                     query.toLowerCase() === tag.toLowerCase()
211:                       ? "bg-emerald-600 border-emerald-600 text-white"
212:                       : "bg-white border-gray-200 text-gray-600 hover:border-emerald-500 hover:text-emerald-600"
213:                   }`}
214:                 >
215:                   {tag}
216:                 </button>
217:               ))}
218:             </div>
219:           )}
220: 
221:           {error && <p className="text-sm text-red-600">{error}</p>}
222: 
223:           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
224:             {images.map((image) => (
225:               <div key={image.id} className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:border-emerald-500 transition-colors">
226:                 <div className="relative aspect-square">
227:                   <Image
228:                     src={image.src.small}
229:                     alt={image.alt}
230:                     fill
231:                     className="object-cover"
232:                     unoptimized
233:                   />
234:                 </div>
235:                 <div className="p-2 space-y-2">
236:                   <div className="flex flex-col gap-1">
237:                     <button
238:                       type="button"
239:                       onClick={() => handleSelect(image, 'large')}
240:                       className="text-[10px] w-full bg-emerald-50 text-emerald-700 py-1 rounded hover:bg-emerald-100 font-bold"
241:                     >
242:                       SELECT LARGE
243:                     </button>
244:                     <button
245:                       type="button"
246:                       onClick={() => handleSelect(image, 'medium')}
247:                       className="text-[10px] w-full bg-blue-50 text-blue-700 py-1 rounded hover:bg-blue-100 font-bold"
248:                     >
249:                       SELECT MEDIUM
250:                     </button>
251:                   </div>
252:                   <div className="flex items-center justify-between text-[10px] text-gray-500 border-t pt-2">
253:                     {}
254:                     <span className="truncate max-w-[80px]">By {image.photographer}</span>
255:                     <div className="flex items-center gap-1.5">
256:                       <a
257:                         href={image.url}
258:                         target="_blank"
259:                         rel="noopener noreferrer"
260:                         className="hover:text-emerald-600"
261:                         title="View photo on Pexels"
262:                       >
263:                         <ImageIcon size={12} />
264:                       </a>
265:                       <a
266:                         href={image.photographer_url}
267:                         target="_blank"
268:                         rel="noopener noreferrer"
269:                         className="hover:text-emerald-600"
270:                         title={`View ${image.photographer}'s profile`}
271:                       >
272:                         <ExternalLink size={12} />
273:                       </a>
274:                     </div>
275:                   </div>
276:                 </div>
277:               </div>
278:             ))}
279:             {!loading && images.length === 0 && (
280:               <div className="col-span-full py-8 text-center text-gray-500">
281:                 {query ? `No images found for "${query}"` : "No photos available."}
282:               </div>
283:             )}
284:           </div>
285: 
286:           <div className="pt-2 border-t border-gray-100 flex justify-center">
287:             <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">
288:               <Image
289:                 src="https://images.pexels.com/lib/api/pexels.png"
290:                 alt="Pexels Logo"
291:                 width={100}
292:                 height={24}
293:                 className="h-6 w-auto opacity-50 hover:opacity-100 transition-opacity"
294:                 unoptimized
295:               />
296:             </a>
297:           </div>
298:         </div>
299:       )}
300:     </div>
301:   );
302: };
303: 
304: export default PexelsImagePicker;
````

## File: apps/admin/app/_components/PostValidator.tsx
````typescript
  1: "use client";
  2: 
  3: import { useState } from "react";
  4: import { blogPostSchema } from "@/app/_lib/validation";
  5: import type { BlogPost } from "@malalang/shared/types";
  6: import { updateBlogPostAction } from "@/app/_lib/actions";
  7: import { AlertCircle, CheckCircle, Save, Loader2, X, AlertTriangle } from "lucide-react";
  8: 
  9: interface PostValidatorProps {
 10:   posts: BlogPost[];
 11:   onUpdate: () => void;
 12: }
 13: 
 14: interface AuditResult {
 15:   post: BlogPost;
 16:   errors: Record<string, string>;
 17:   formData: Record<string, string>;
 18: }
 19: 
 20: export default function PostValidator({ posts, onUpdate }: PostValidatorProps) {
 21:   const [auditResults, setAuditResults] = useState<AuditResult[]>([]);
 22:   const [isScanning, setIsScanning] = useState(false);
 23:   const [savingField, setSavingField] = useState<{ postId: string; field: string } | null>(null);
 24: 
 25:   const scanPosts = () => {
 26:     setIsScanning(true);
 27:     const results: AuditResult[] = [];
 28: 
 29:     posts.forEach((post) => {
 30:       const data = {
 31:         title: post.title || "",
 32:         slug: post.slug || "",
 33:         htmlContent: post.htmlContent || "",
 34:         excerpt: post.excerpt || "",
 35:         metaTitle: post.metaTitle || "",
 36:         metaDescription: post.metaDescription || "",
 37:         publishedAt: post.publishedAt || "",
 38:         tags: post.tags || [],
 39:         imageUrl: post.imageUrl || "",
 40:         readingTimeMinutes: post.readingTimeMinutes || 0,
 41:         keywords: post.keywords || "",
 42:         source: post.source || "malalang",
 43:         status: post.status || "published",
 44:         author: post.author || {
 45:           id: "abram-ntsako",
 46:           name: "AEN Nyathi",
 47:           avatarUrl: "/assets/profile.jpg",
 48:           imageUrl: "/assets/profile.jpg",
 49:           bio: "Abram Ntsako is the founder of Malalang Pty Ltd, a web development studio dedicated to empowering local businesses in Phalaborwa. With a passion for clean code and user-centric design, he helps SMEs build a strong online presence without breaking the bank."
 50:         },
 51:       };
 52: 
 53:       const result = blogPostSchema.safeParse(data);
 54:       if (!result.success) {
 55:         const formattedErrors: Record<string, string> = {};
 56:         result.error.issues.forEach((issue) => {
 57:           const path = issue.path.join(".");
 58:           formattedErrors[path] = issue.message;
 59:         });
 60:         results.push({
 61:           post,
 62:           errors: formattedErrors,
 63:           formData: data as any,
 64:         });
 65:       }
 66:     });
 67: 
 68:     setAuditResults(results);
 69:     setIsScanning(false);
 70:   };
 71: 
 72:   const handleFieldChange = (postId: string, field: string, value: string) => {
 73:     setAuditResults((prev) =>
 74:       prev.map((res) =>
 75:         res.post.id === postId
 76:           ? { ...res, formData: { ...res.formData, [field]: value } }
 77:           : res
 78:       )
 79:     );
 80:   };
 81: 
 82:   const handleUpdateField = async (postId: string, field: string) => {
 83:     const result = auditResults.find((r) => r.post.id === postId);
 84:     if (!result) return;
 85: 
 86:     setSavingField({ postId, field });
 87:     try {
 88:       const value = result.formData[field];
 89:       const res = await updateBlogPostAction(postId, { [field]: value });
 90: 
 91:       if (res.success) {
 92: 
 93:         setAuditResults((prev) =>
 94:           prev.map((r) => {
 95:             if (r.post.id === postId) {
 96:               const newErrors = { ...r.errors };
 97:               delete newErrors[field];
 98:               return { ...r, errors: newErrors };
 99:             }
100:             return r;
101:           }).filter((r) => Object.keys(r.errors).length > 0)
102:         );
103:         onUpdate();
104:       } else {
105:         alert("Update failed: " + res.error);
106:       }
107:     } finally {
108:       setSavingField(null);
109:     }
110:   };
111: 
112:   return (
113:     <div className="mb-8">
114:       <div className="flex items-center justify-between mb-6">
115:         <button
116:           onClick={scanPosts}
117:           disabled={isScanning}
118:           className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm disabled:opacity-50"
119:         >
120:           {isScanning ? <Loader2 className="animate-spin" size={16} /> : <AlertTriangle size={16} />}
121:           Scan Posts for Errors
122:         </button>
123: 
124:         {auditResults.length > 0 && (
125:           <button
126:             onClick={() => setAuditResults([])}
127:             className="text-gray-400 hover:text-gray-600 transition-colors"
128:           >
129:             <X size={20} />
130:           </button>
131:         )}
132:       </div>
133: 
134:       {auditResults.length > 0 && (
135:         <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
136:           <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center gap-3 text-amber-800">
137:             <AlertCircle size={20} />
138:             <p className="text-sm font-medium">
139:               Found {auditResults.length} posts with data integrity issues. Fix them below.
140:             </p>
141:           </div>
142: 
143:           <div className="grid grid-cols-1 gap-6">
144:             {auditResults.map((result) => (
145:               <div key={result.post.id} className="bg-white rounded-xl border-2 border-red-100 shadow-md overflow-hidden">
146:                 <div className="bg-red-50 px-5 py-3 border-b border-red-100 flex items-center justify-between">
147:                   <h3 className="font-bold text-red-900">{result.post.title}</h3>
148:                   <span className="text-xs font-bold bg-red-200 text-red-800 px-2 py-0.5 rounded-full uppercase">
149:                     {Object.keys(result.errors).length} Issues
150:                   </span>
151:                 </div>
152: 
153:                 <div className="p-5 space-y-4">
154:                   {Object.entries(result.errors).map(([field, message]) => (
155:                     <div key={field} className="flex flex-col md:flex-row md:items-end gap-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
156:                       <div className="flex-1">
157:                         <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
158:                           {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
159:                           <span className="ml-2 text-red-500 normal-case font-medium italic">({message})</span>
160:                         </label>
161: 
162:                         {field === "publishedAt" ? (
163:                           <input
164:                             type="date"
165:                             value={(result.formData[field] || "").split("T")[0]}
166:                             onChange={(e) => handleFieldChange(result.post.id, field, e.target.value)}
167:                             className="w-full bg-white border border-red-200 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
168:                           />
169:                         ) : (
170:                           <input
171:                             type="text"
172:                             value={result.formData[field] || ""}
173:                             onChange={(e) => handleFieldChange(result.post.id, field, e.target.value)}
174:                             className="w-full bg-white border border-red-200 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
175:                           />
176:                         )}
177:                       </div>
178: 
179:                       <button
180:                         onClick={() => handleUpdateField(result.post.id, field)}
181:                         disabled={savingField?.postId === result.post.id && savingField?.field === field}
182:                         className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-4 rounded shadow-sm disabled:opacity-50 transition-colors h-9"
183:                       >
184:                         {savingField?.postId === result.post.id && savingField?.field === field ? (
185:                           <Loader2 className="animate-spin" size={14} />
186:                         ) : (
187:                           <Save size={14} />
188:                         )}
189:                         Update
190:                       </button>
191:                     </div>
192:                   ))}
193:                 </div>
194:               </div>
195:             ))}
196:           </div>
197:         </div>
198:       )}
199:     </div>
200:   );
201: }
````

## File: apps/admin/app/_components/ui/button.tsx
````typescript
 1: import * as React from "react"
 2: import { Slot } from "@radix-ui/react-slot"
 3: import { clsx, type ClassValue } from "clsx"
 4: import { twMerge } from "tailwind-merge"
 5: 
 6: function cn(...inputs: ClassValue[]) {
 7:   return twMerge(clsx(inputs))
 8: }
 9: 
10: export interface ButtonProps
11:   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
12:   asChild?: boolean
13:   variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
14:   size?: "default" | "sm" | "lg" | "icon"
15: }
16: 
17: const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
18:   ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
19:     const Comp = asChild ? Slot : "button"
20: 
21:     const variants = {
22:       default: "bg-emerald-600 text-white hover:bg-emerald-700",
23:       destructive: "bg-red-500 text-white hover:bg-red-600",
24:       outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
25:       secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
26:       ghost: "hover:bg-gray-100 text-gray-700",
27:       link: "text-emerald-600 underline-offset-4 hover:underline",
28:     }
29: 
30:     const sizes = {
31:       default: "h-10 px-4 py-2",
32:       sm: "h-9 rounded-md px-3",
33:       lg: "h-11 rounded-md px-8",
34:       icon: "h-10 w-10",
35:     }
36: 
37:     return (
38:       <Comp
39:         className={cn(
40:           "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
41:           variants[variant],
42:           sizes[size],
43:           className
44:         )}
45:         ref={ref}
46:         {...props}
47:       />
48:     )
49:   }
50: )
51: Button.displayName = "Button"
52: 
53: export { Button }
````

## File: apps/admin/app/_components/ui/card.tsx
````typescript
 1: import * as React from "react"
 2: import { clsx, type ClassValue } from "clsx"
 3: import { twMerge } from "tailwind-merge"
 4: 
 5: function cn(...inputs: ClassValue[]) {
 6:   return twMerge(clsx(inputs))
 7: }
 8: 
 9: const Card = React.forwardRef<
10:   HTMLDivElement,
11:   React.HTMLAttributes<HTMLDivElement>
12: >(({ className, ...props }, ref) => (
13:   <div
14:     ref={ref}
15:     className={cn(
16:       "rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm",
17:       className
18:     )}
19:     {...props}
20:   />
21: ))
22: Card.displayName = "Card"
23: 
24: const CardHeader = React.forwardRef<
25:   HTMLDivElement,
26:   React.HTMLAttributes<HTMLDivElement>
27: >(({ className, ...props }, ref) => (
28:   <div
29:     ref={ref}
30:     className={cn("flex flex-col space-y-1.5 p-6", className)}
31:     {...props}
32:   />
33: ))
34: CardHeader.displayName = "CardHeader"
35: 
36: const CardTitle = React.forwardRef<
37:   HTMLParagraphElement,
38:   React.HTMLAttributes<HTMLHeadingElement>
39: >(({ className, ...props }, ref) => (
40:   <h3
41:     ref={ref}
42:     className={cn(
43:       "text-2xl font-semibold leading-none tracking-tight",
44:       className
45:     )}
46:     {...props}
47:   />
48: ))
49: CardTitle.displayName = "CardTitle"
50: 
51: const CardDescription = React.forwardRef<
52:   HTMLParagraphElement,
53:   React.HTMLAttributes<HTMLParagraphElement>
54: >(({ className, ...props }, ref) => (
55:   <p
56:     ref={ref}
57:     className={cn("text-sm text-gray-500", className)}
58:     {...props}
59:   />
60: ))
61: CardDescription.displayName = "CardDescription"
62: 
63: const CardContent = React.forwardRef<
64:   HTMLDivElement,
65:   React.HTMLAttributes<HTMLDivElement>
66: >(({ className, ...props }, ref) => (
67:   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
68: ))
69: CardContent.displayName = "CardContent"
70: 
71: const CardFooter = React.forwardRef<
72:   HTMLDivElement,
73:   React.HTMLAttributes<HTMLDivElement>
74: >(({ className, ...props }, ref) => (
75:   <div
76:     ref={ref}
77:     className={cn("flex items-center p-6 pt-0", className)}
78:     {...props}
79:   />
80: ))
81: CardFooter.displayName = "CardFooter"
82: 
83: export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
````

## File: apps/admin/app/_components/ui/form.tsx
````typescript
  1: import * as React from "react"
  2: import { Slot } from "@radix-ui/react-slot"
  3: import {
  4:   Controller,
  5:   ControllerProps,
  6:   FieldPath,
  7:   FieldValues,
  8:   FormProvider,
  9:   useFormContext,
 10: } from "react-hook-form"
 11: import { clsx, type ClassValue } from "clsx"
 12: import { twMerge } from "tailwind-merge"
 13: 
 14: function cn(...inputs: ClassValue[]) {
 15:   return twMerge(clsx(inputs))
 16: }
 17: 
 18: const Form = FormProvider
 19: 
 20: type FormFieldContextValue<
 21:   TFieldValues extends FieldValues = FieldValues,
 22:   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
 23: > = {
 24:   name: TName
 25: }
 26: 
 27: const FormFieldContext = React.createContext<FormFieldContextValue>(
 28:   {} as FormFieldContextValue
 29: )
 30: 
 31: const FormField = <
 32:   TFieldValues extends FieldValues = FieldValues,
 33:   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
 34: >({
 35:   ...props
 36: }: ControllerProps<TFieldValues, TName>) => {
 37:   return (
 38:     <FormFieldContext.Provider value={{ name: props.name }}>
 39:       <Controller {...props} />
 40:     </FormFieldContext.Provider>
 41:   )
 42: }
 43: 
 44: const useFormField = () => {
 45:   const fieldContext = React.useContext(FormFieldContext)
 46:   const itemContext = React.useContext(FormItemContext)
 47:   const { getFieldState, formState } = useFormContext()
 48: 
 49:   const fieldState = getFieldState(fieldContext.name, formState)
 50: 
 51:   if (!fieldContext) {
 52:     throw new Error("useFormField should be used within <FormField>")
 53:   }
 54: 
 55:   const { id } = itemContext
 56: 
 57:   return {
 58:     id,
 59:     name: fieldContext.name,
 60:     formItemId: `${id}-form-item`,
 61:     formDescriptionId: `${id}-form-item-description`,
 62:     formMessageId: `${id}-form-item-message`,
 63:     ...fieldState,
 64:   }
 65: }
 66: 
 67: type FormItemContextValue = {
 68:   id: string
 69: }
 70: 
 71: const FormItemContext = React.createContext<FormItemContextValue>(
 72:   {} as FormItemContextValue
 73: )
 74: 
 75: const FormItem = React.forwardRef<
 76:   HTMLDivElement,
 77:   React.HTMLAttributes<HTMLDivElement>
 78: >(({ className, ...props }, ref) => {
 79:   const id = React.useId()
 80: 
 81:   return (
 82:     <FormItemContext.Provider value={{ id }}>
 83:       <div ref={ref} className={cn("space-y-2", className)} {...props} />
 84:     </FormItemContext.Provider>
 85:   )
 86: })
 87: FormItem.displayName = "FormItem"
 88: 
 89: const FormLabel = React.forwardRef<
 90:   HTMLLabelElement,
 91:   React.LabelHTMLAttributes<HTMLLabelElement>
 92: >(({ className, ...props }, ref) => {
 93:   const { error, formItemId } = useFormField()
 94: 
 95:   return (
 96:     <label
 97:       ref={ref}
 98:       className={cn(
 99:         "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
100:         error && "text-red-500",
101:         className
102:       )}
103:       htmlFor={formItemId}
104:       {...props}
105:     />
106:   )
107: })
108: FormLabel.displayName = "FormLabel"
109: 
110: const FormControl = React.forwardRef<
111:   React.ElementRef<typeof Slot>,
112:   React.ComponentPropsWithoutRef<typeof Slot>
113: >(({ ...props }, ref) => {
114:   const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
115: 
116:   return (
117:     <Slot
118:       ref={ref}
119:       id={formItemId}
120:       aria-describedby={
121:         !error
122:           ? `${formDescriptionId}`
123:           : `${formDescriptionId} ${formMessageId}`
124:       }
125:       aria-invalid={!!error}
126:       {...props}
127:     />
128:   )
129: })
130: FormControl.displayName = "FormControl"
131: 
132: const FormDescription = React.forwardRef<
133:   HTMLParagraphElement,
134:   React.HTMLAttributes<HTMLParagraphElement>
135: >(({ className, ...props }, ref) => {
136:   const { formDescriptionId } = useFormField()
137: 
138:   return (
139:     <p
140:       ref={ref}
141:       id={formDescriptionId}
142:       className={cn("text-sm text-gray-500", className)}
143:       {...props}
144:     />
145:   )
146: })
147: FormDescription.displayName = "FormDescription"
148: 
149: const FormMessage = React.forwardRef<
150:   HTMLParagraphElement,
151:   React.HTMLAttributes<HTMLParagraphElement>
152: >(({ className, children, ...props }, ref) => {
153:   const { error, formMessageId } = useFormField()
154:   const body = error ? String(error?.message) : children
155: 
156:   if (!body) {
157:     return null
158:   }
159: 
160:   return (
161:     <p
162:       ref={ref}
163:       id={formMessageId}
164:       className={cn("text-sm font-medium text-red-500", className)}
165:       {...props}
166:     >
167:       {body}
168:     </p>
169:   )
170: })
171: FormMessage.displayName = "FormMessage"
172: 
173: export {
174:   useFormField,
175:   Form,
176:   FormItem,
177:   FormLabel,
178:   FormControl,
179:   FormDescription,
180:   FormMessage,
181:   FormField,
182: }
````

## File: apps/admin/app/_components/ui/input.tsx
````typescript
 1: import * as React from "react"
 2: import { clsx, type ClassValue } from "clsx"
 3: import { twMerge } from "tailwind-merge"
 4: 
 5: function cn(...inputs: ClassValue[]) {
 6:   return twMerge(clsx(inputs))
 7: }
 8: 
 9: export interface InputProps
10:   extends React.InputHTMLAttributes<HTMLInputElement> {}
11: 
12: const Input = React.forwardRef<HTMLInputElement, InputProps>(
13:   ({ className, type, ...props }, ref) => {
14:     return (
15:       <input
16:         type={type}
17:         className={cn(
18:           "flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-50",
19:           className
20:         )}
21:         ref={ref}
22:         {...props}
23:       />
24:     )
25:   }
26: )
27: Input.displayName = "Input"
28: 
29: export { Input }
````

## File: apps/admin/app/_components/ui/textarea.tsx
````typescript
 1: import * as React from "react"
 2: import { clsx, type ClassValue } from "clsx"
 3: import { twMerge } from "tailwind-merge"
 4: 
 5: function cn(...inputs: ClassValue[]) {
 6:   return twMerge(clsx(inputs))
 7: }
 8: 
 9: export interface TextareaProps
10:   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
11: 
12: const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
13:   ({ className, ...props }, ref) => {
14:     return (
15:       <textarea
16:         className={cn(
17:           "flex min-h-[80px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-50",
18:           className
19:         )}
20:         ref={ref}
21:         {...props}
22:       />
23:     )
24:   }
25: )
26: Textarea.displayName = "Textarea"
27: 
28: export { Textarea }
````

## File: apps/admin/app/_lib/revalidation.ts
````typescript
 1: export async function triggerClientRevalidation(tag: string, mode: 'swr' | 'immediate' = 'swr') {
 2:   const clientUrl = process.env.NEXT_PUBLIC_CLIENT_SITE_URL;
 3:   const secret = process.env.INTERNAL_REVALIDATION_SECRET;
 4: 
 5:   if (!clientUrl || !secret) {
 6:     console.warn('[Revalidation] Trigger skipped: NEXT_PUBLIC_CLIENT_SITE_URL or INTERNAL_REVALIDATION_SECRET not set.');
 7:     return;
 8:   }
 9: 
10:   try {
11:     const modeParam = mode === 'immediate' ? '&mode=immediate' : '';
12:     const target = `${clientUrl}/api/revalidate?token=${secret}&tag=${tag}${modeParam}`;
13: 
14:     console.log(`[Revalidation] Firing trigger for tag: ${tag} (${mode})`);
15: 
16:     const response = await fetch(target, {
17:       method: 'POST',
18:       headers: {
19:         'Content-Type': 'application/json'
20:       }
21:     });
22: 
23:     if (!response.ok) {
24:       const errorText = await response.text();
25:       console.error(`[Revalidation] Trigger failed for ${tag}: ${response.status} ${errorText}`);
26:     } else {
27:       console.log(`[Revalidation] Success: ${tag} invalidated.`);
28:     }
29:   } catch (error: any) {
30: 
31:     console.error(`[Revalidation] Resiliency catch for ${tag}: ${error.message}`);
32:   }
33: }
````

## File: apps/admin/app/_lib/validation.ts
````typescript
 1: import { z } from "zod";
 2: 
 3: export const blogPostSchema = z.object({
 4:   title: z.string().min(1, "Title is required"),
 5:   slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Invalid slug format"),
 6:   htmlContent: z.string()
 7:     .min(1, "HTML content is required")
 8:     .refine(
 9:       (val) => {
10:         const h2Count = (val.match(/<h2/g) || []).length;
11:         return h2Count >= 3 && h2Count <= 6;
12:       },
13:       { message: "Content must have between 3 and 6 H2 sections" }
14:     ),
15:   excerpt: z.string().max(160, "Excerpt must be max 160 characters").min(1, "Excerpt is required"),
16:   metaTitle: z.string().min(1, "Meta title is required"),
17:   metaDescription: z.string()
18:     .min(150, "Meta description should be at least 150 characters")
19:     .max(160, "Meta description must be max 160 characters"),
20:   publishedAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
21:     message: "Invalid date format",
22:   }),
23:   tags: z.array(z.string()).min(1, "At least one tag is required"),
24:   imageUrl: z.string().min(1, "Image URL is required"),
25:   reading_time_minutes: z.number().int().min(1, "Reading time must be at least 1 minute"),
26:   keywords: z.string().min(1, "Keywords are required"),
27:   source: z.literal("malalang"),
28:   status: z.enum(["published", "draft"]),
29:   author: z.object({
30:     id: z.string(),
31:     name: z.literal("AEN Nyathi"),
32:     avatarUrl: z.string(),
33:     imageUrl: z.string(),
34:     bio: z.string(),
35:   }),
36: });
37: 
38: export type BlogPostInput = z.infer<typeof blogPostSchema>;
````

## File: apps/admin/app/api/pexels/route.ts
````typescript
 1: import { NextResponse } from "next/server";
 2: 
 3: export async function GET(request: Request) {
 4:   const { searchParams } = new URL(request.url);
 5:   const query = searchParams.get("query");
 6: 
 7:   const accessKey = process.env.PEXELS_API_KEY;
 8: 
 9:   if (!accessKey) {
10:     console.error("PEXELS_API_KEY is not set in environment variables");
11:     return NextResponse.json(
12:       { error: "Pexels API key is not configured" },
13:       { status: 500 }
14:     );
15:   }
16: 
17: 
18:   const url = query
19:     ? `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=21`
20:     : `https://api.pexels.com/v1/curated?per_page=21`;
21: 
22:   try {
23:     const response = await fetch(url, {
24:       headers: {
25:         Authorization: accessKey,
26:       },
27:     });
28: 
29:     if (!response.ok) {
30:       const errorData = await response.json();
31:       return NextResponse.json(
32:         { error: errorData.error || "Failed to fetch from Pexels" },
33:         { status: response.status }
34:       );
35:     }
36: 
37:     const data = await response.json();
38:     return NextResponse.json(data);
39:   } catch (error: any) {
40:     return NextResponse.json(
41:       { error: error.message || "Internal server error" },
42:       { status: 500 }
43:     );
44:   }
45: }
````

## File: apps/admin/app/blog/[id]/edit/page.tsx
````typescript
 1: import { getBlogById } from "@malalang/shared/services/blogs";
 2: import { notFound } from "next/navigation";
 3: import BlogForm from "../../BlogForm";
 4: import { Button } from "@/app/_components/ui/button";
 5: import Link from "next/link";
 6: import { ArrowLeft } from "lucide-react";
 7: 
 8: export default async function EditBlogPage({
 9:   params,
10: }: {
11:   params: Promise<{ id: string }>;
12: }) {
13:   const { id } = await params;
14:   const blog = await getBlogById(id);
15: 
16:   if (!blog) {
17:     notFound();
18:   }
19: 
20:   return (
21:     <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
22:       <div className="flex items-center gap-4">
23:         <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900 rounded-xl">
24:           <Link href={`/blog/${id}`}>
25:             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Details
26:           </Link>
27:         </Button>
28:         <h1 className="text-2xl font-black text-gray-900 truncate">
29:           Editing: {blog.title}
30:         </h1>
31:       </div>
32: 
33:       <BlogForm blog={blog} />
34:     </div>
35:   );
36: }
````

## File: apps/admin/app/blog/[id]/page.tsx
````typescript
 1: import { getBlogById } from "@malalang/shared/services/blogs";
 2: import { notFound } from "next/navigation";
 3: import BlogDetails from "../BlogDetails";
 4: 
 5: export default async function BlogDetailsPage({
 6:   params,
 7: }: {
 8:   params: Promise<{ id: string }>;
 9: }) {
10:   const { id } = await params;
11:   const blog = await getBlogById(id);
12: 
13:   if (!blog) {
14:     notFound();
15:   }
16: 
17:   return <BlogDetails blog={blog} />;
18: }
````

## File: apps/admin/app/blog/BlogEditor.tsx
````typescript
  1: 'use client';
  2: import React, { useState, useEffect } from "react";
  3: import dynamic from "next/dynamic";
  4: import DOMPurify from "isomorphic-dompurify";
  5: import "react-quill-new/dist/quill.snow.css";
  6: import { Card, CardHeader } from "@/app/_components/ui/card";
  7: import Image from "next/image";
  8: 
  9: const ReactQuill = dynamic(() => import("react-quill-new"), {
 10:   ssr: false,
 11:   loading: () => (
 12:     <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
 13:       Loading Editor...
 14:     </div>
 15:   ),
 16: });
 17: 
 18: const modules = {
 19:   toolbar: [
 20:     [{ header: [1, 2, 3, false] }],
 21:     ["bold", "italic", "underline", "strike"],
 22:     [{ list: "ordered" }, { list: "bullet" }],
 23:     ["link", "image", "video"],
 24:     ["clean"],
 25:   ],
 26: };
 27: 
 28: interface BlogEditorProps {
 29:   value: string;
 30:   onChange: (value: string) => void;
 31:   title: string;
 32:   imageUrl: string | null|undefined;
 33: }
 34: 
 35: export default function BlogEditor({
 36:   value,
 37:   onChange,
 38:   title,
 39:   imageUrl,
 40: }: BlogEditorProps) {
 41:   const [view, setView] = useState<"edit" | "preview">("edit");
 42:   const [sanitized, setSanitized] = useState("");
 43: 
 44:   useEffect(() => {
 45:     setSanitized(DOMPurify.sanitize(value));
 46:   }, [value]);
 47: 
 48:   return (
 49:     <div className="space-y-4">
 50:       <div className="flex bg-gray-100 p-1 rounded-xl w-fit">
 51:         <button
 52:           type="button"
 53:           onClick={() => setView("edit")}
 54:           className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
 55:             view === "edit"
 56:               ? "bg-white shadow-sm text-emerald-600"
 57:               : "text-gray-500 hover:text-gray-700"
 58:           }`}
 59:         >
 60:           Edit
 61:         </button>
 62:         <button
 63:           type="button"
 64:           onClick={() => setView("preview")}
 65:           className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
 66:             view === "preview"
 67:               ? "bg-white shadow-sm text-emerald-600"
 68:               : "text-gray-500 hover:text-gray-700"
 69:           }`}
 70:         >
 71:           Preview
 72:         </button>
 73:       </div>
 74: 
 75:       <div className="w-full">
 76:         {view === "edit" ? (
 77:           <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
 78:             <style>{`
 79:               .ql-container {
 80:                 font-size: 16px;
 81:                 border-bottom-left-radius: 12px;
 82:                 border-bottom-right-radius: 12px;
 83:               }
 84:               .ql-toolbar {
 85:                 z-index: 9;
 86:                 border-top-left-radius: 12px;
 87:                 border-top-right-radius: 12px;
 88:                 border-color: #f1f5f9 !important;
 89:                 background: #f8fafc;
 90:                 border-bottom: 1px solid #f1f5f9;
 91:               }
 92:               .ql-editor {
 93:                 min-height: 400px;
 94:                 background: white;
 95:               }
 96:             `}</style>
 97:             <ReactQuill
 98:               theme="snow"
 99:               value={value}
100:               onChange={onChange}
101:               modules={modules}
102:               className="border-none"
103:             />
104:           </div>
105:         ) : (
106:           <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm animate-in fade-in duration-300">
107:             {imageUrl && (
108:               <div className="mb-8 relative aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md">
109:                 <Image
110:                   src={imageUrl}
111:                   alt="Featured Image Preview"
112:                   fill
113:                   className="object-cover"
114:                 />
115:               </div>
116:             )}
117:             <div className="mb-8 border-b border-gray-100 pb-8">
118:               <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
119:                 {title || "Untitled Post"}
120:               </h1>
121:               <div className="flex items-center gap-3 text-gray-400 text-sm">
122:                 <span className="bg-gray-100 px-2 py-1 rounded text-emerald-700 font-medium">Preview Mode</span>
123:                 <span>•</span>
124:                 <span>{new Date().toLocaleDateString("en-ZA")}</span>
125:               </div>
126:             </div>
127: 
128:             <article
129:               className="prose prose-slate max-w-none
130:                          break-words overflow-wrap-anywhere
131:                          prose-headings:font-bold prose-headings:tracking-tight
132:                          prose-a:text-emerald-600 prose-img:rounded-2xl prose-img:shadow-lg
133:                          [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl"
134:               dangerouslySetInnerHTML={{
135:                 __html:
136:                   sanitized ||
137:                   '<p class="text-gray-400 italic">No content to display yet...</p>',
138:               }}
139:             />
140:           </div>
141:         )}
142:       </div>
143:     </div>
144:   );
145: }
````

## File: apps/admin/app/blog/BlogForm.tsx
````typescript
  1: 'use client';
  2: 
  3: import { useForm } from 'react-hook-form';
  4: import { zodResolver } from '@hookform/resolvers/zod';
  5: import { Button } from '@/app/_components/ui/button';
  6: import {
  7:   Form,
  8:   FormControl,
  9:   FormDescription,
 10:   FormField,
 11:   FormItem,
 12:   FormLabel,
 13:   FormMessage,
 14: } from '@/app/_components/ui/form';
 15: import { Input } from '@/app/_components/ui/input';
 16: import { Textarea } from '@/app/_components/ui/textarea';
 17: import type { BlogPost } from "@malalang/shared/types";
 18: import { useEffect, useTransition } from 'react';
 19: import { Loader2, Save, X, Sparkles } from 'lucide-react';
 20: import { useRouter } from 'next/navigation';
 21: import Link from 'next/link';
 22: import { Card, CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card';
 23: import { blogSchema, BlogFormValues } from './schema';
 24: import { upsertBlog } from '@/app/_lib/actions';
 25: import BlogEditor from './BlogEditor';
 26: import PexelsImagePicker from '@/app/_components/PexelsImagePicker';
 27: 
 28: interface BlogFormProps {
 29:   blog?: BlogPost | null;
 30: }
 31: 
 32: const slugify = (str: string) =>
 33:   str
 34:     .toLowerCase()
 35:     .trim()
 36:     .replace(/[^\w\s-]/g, '')
 37:     .replace(/[\s_-]+/g, '-')
 38:     .replace(/^-+|-+$/g, '');
 39: 
 40: export default function BlogForm({ blog }: BlogFormProps) {
 41:   const router = useRouter();
 42:   const [isPending, startTransition] = useTransition();
 43: 
 44:   const form = useForm<BlogFormValues>({
 45:     resolver: zodResolver(blogSchema),
 46:     defaultValues: {
 47:       title: '',
 48:       slug: '',
 49:       tags: '',
 50:       excerpt: '',
 51:       htmlContent: '',
 52:       imageUrl: '/logo.png',
 53:       publishedAt: new Date().toISOString().split('T')[0],
 54:       metaTitle: '',
 55:       metaDescription: '',
 56:       readingTimeMinutes: 5,
 57:       keywords: '',
 58:       source: 'malalang',
 59:       status: 'published',
 60:       author: {
 61:         id: "abram-ntsako",
 62:         name: "AEN Nyathi",
 63:         avatarUrl: "/assets/profile.jpg",
 64:         imageUrl: "/assets/profile.jpg",
 65:         bio: "Abram Ntsako is the founder of Malalang Pty Ltd, a web development studio dedicated to empowering local businesses in Phalaborwa. With a passion for clean code and user-centric design, he helps SMEs build a strong online presence without breaking the bank."
 66:       }
 67:     },
 68:   });
 69: 
 70:   const { handleSubmit, reset, watch, setValue } = form;
 71: 
 72:   const title = watch('title');
 73:   const imageUrl = watch('imageUrl');
 74:   const tagsStr = watch('tags') || '';
 75:   const isEditing = !!blog;
 76: 
 77:   useEffect(() => {
 78:     if (!isEditing && title) {
 79:       setValue('slug', slugify(title), { shouldValidate: true });
 80:     }
 81:   }, [title, setValue, isEditing]);
 82: 
 83:   useEffect(() => {
 84:     if (blog) {
 85:       reset({
 86:         id: blog.id,
 87:         title: blog.title || '',
 88:         slug: blog.slug || '',
 89:         tags: blog.tags?.join(', ') || '',
 90:         excerpt: blog.excerpt || '',
 91:         htmlContent: blog.htmlContent || '',
 92:         imageUrl: blog.imageUrl || '/logo.png',
 93:         publishedAt: blog.publishedAt ? new Date(blog.publishedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
 94:         metaTitle: blog.metaTitle || '',
 95:         metaDescription: blog.metaDescription || '',
 96:         readingTimeMinutes: blog.readingTimeMinutes || 5,
 97:         keywords: blog.keywords || '',
 98:         source: 'malalang',
 99:         status: (blog.status as any) || 'published',
100:         author: blog.author || {
101:           id: "abram-ntsako",
102:           name: "AEN Nyathi",
103:           avatarUrl: "/assets/profile.jpg",
104:           imageUrl: "/assets/profile.jpg",
105:           bio: "Abram Ntsako is the founder of Malalang Pty Ltd, a web development studio dedicated to empowering local businesses in Phalaborwa. With a passion for clean code and user-centric design, he helps SMEs build a strong online presence without breaking the bank."
106:         }
107:       });
108:     }
109:   }, [blog, reset]);
110: 
111:   const generateSlug = () => {
112:     if (title) {
113:       setValue('slug', slugify(title), { shouldValidate: true });
114:     }
115:   };
116: 
117:   const onSubmit = (values: BlogFormValues) => {
118:     startTransition(async () => {
119:       const result = await upsertBlog(values);
120:       if (result.error) {
121:         alert(result.error);
122:       } else {
123:         router.push('/blog');
124:         router.refresh();
125:       }
126:     });
127:   };
128: 
129:   return (
130:     <Form {...form}>
131:       <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 pb-20">
132:         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
133:           <div className="space-y-6 lg:col-span-2">
134:             <Card className="border-gray-200 shadow-sm">
135:               <CardHeader className="border-b border-gray-100 bg-gray-50/50">
136:                 <CardTitle className="text-gray-900 text-lg">Article Content</CardTitle>
137:               </CardHeader>
138:               <CardContent className="pt-6">
139:                 <FormField
140:                   control={form.control}
141:                   name="htmlContent"
142:                   render={({ field }) => (
143:                     <FormItem>
144:                       <FormControl>
145:                         <BlogEditor
146:                           imageUrl={imageUrl}
147:                           value={field.value ?? ''}
148:                           onChange={field.onChange}
149:                           title={title}
150:                         />
151:                       </FormControl>
152:                       <FormMessage />
153:                     </FormItem>
154:                   )}
155:                 />
156:               </CardContent>
157:             </Card>
158: 
159:             <Card className="border-gray-200 shadow-sm">
160:               <CardHeader className="border-b border-gray-100 bg-gray-50/50">
161:                 <CardTitle className="text-gray-900 text-lg">SEO & Social Metadata</CardTitle>
162:               </CardHeader>
163:               <CardContent className="space-y-4 pt-6">
164:                 <FormField
165:                   control={form.control}
166:                   name="metaTitle"
167:                   render={({ field }) => (
168:                     <FormItem>
169:                       <FormLabel className="text-gray-700">Meta Title</FormLabel>
170:                       <FormControl>
171:                         <Input {...field} placeholder="Optimised title for search results" />
172:                       </FormControl>
173:                       <FormMessage />
174:                     </FormItem>
175:                   )}
176:                 />
177:                 <FormField
178:                   control={form.control}
179:                   name="metaDescription"
180:                   render={({ field }) => (
181:                     <FormItem>
182:                       <FormLabel className="text-gray-700">Meta Description</FormLabel>
183:                       <FormControl>
184:                         <Textarea {...field} rows={3} placeholder="Engaging summary for search snippets" className="resize-none" />
185:                       </FormControl>
186:                       <FormMessage />
187:                     </FormItem>
188:                   )}
189:                 />
190:               </CardContent>
191:             </Card>
192:           </div>
193: 
194:           <div className="space-y-6 lg:col-span-1">
195:             <Card className="border-gray-200 shadow-sm">
196:               <CardHeader className="border-b border-gray-100 bg-gray-50/50">
197:                 <CardTitle className="text-gray-900 text-lg">Article Configuration</CardTitle>
198:               </CardHeader>
199:               <CardContent className="space-y-4 pt-6">
200:                 <FormField
201:                   control={form.control}
202:                   name="title"
203:                   render={({ field }) => (
204:                     <FormItem>
205:                       <FormLabel className="text-gray-700">Title</FormLabel>
206:                       <div className="flex gap-2">
207:                         <FormControl>
208:                           <Input
209:                             placeholder="Post title"
210:                             {...field}
211:                           />
212:                         </FormControl>
213:                         <Button
214:                           type="button"
215:                           variant="outline"
216:                           size="icon"
217:                           onClick={generateSlug}
218:                           className="shrink-0"
219:                           title="Generate Slug"
220:                         >
221:                           <Sparkles size={18} />
222:                         </Button>
223:                       </div>
224:                       <FormMessage />
225:                     </FormItem>
226:                   )}
227:                 />
228:                 <FormField
229:                   control={form.control}
230:                   name="slug"
231:                   render={({ field }) => (
232:                     <FormItem>
233:                       <FormLabel className="text-gray-700">Slug</FormLabel>
234:                       <FormControl>
235:                         <Input
236:                           placeholder="url-slug-here"
237:                           {...field}
238:                           className="font-mono text-sm"
239:                         />
240:                       </FormControl>
241:                       <FormMessage />
242:                     </FormItem>
243:                   )}
244:                 />
245:                 <FormField
246:                   control={form.control}
247:                   name="publishedAt"
248:                   render={({ field }) => (
249:                     <FormItem>
250:                       <FormLabel className="text-gray-700">Publish Date</FormLabel>
251:                       <FormControl>
252:                         <Input type="date" {...field} />
253:                       </FormControl>
254:                       <FormMessage />
255:                     </FormItem>
256:                   )}
257:                 />
258: 
259:                 <div className="space-y-2 pt-2">
260:                   <FormLabel className="text-gray-700">Featured Image</FormLabel>
261:                   <PexelsImagePicker
262:                     onSelect={(url) => setValue('imageUrl', url, { shouldDirty: true })}
263:                     currentImageUrl={imageUrl}
264:                     suggestions={tagsStr.split(',').map(t => t.trim()).filter(Boolean)}
265:                   />
266:                   <FormField
267:                     control={form.control}
268:                     name="imageUrl"
269:                     render={({ field }) => (
270:                       <FormItem>
271:                         <FormControl>
272:                           <Input placeholder="Direct Image URL" {...field} className="text-xs font-mono" />
273:                         </FormControl>
274:                         <FormMessage />
275:                       </FormItem>
276:                     )}
277:                   />
278:                 </div>
279: 
280:                 <FormField
281:                   control={form.control}
282:                   name="excerpt"
283:                   render={({ field }) => (
284:                     <FormItem>
285:                       <FormLabel className="text-gray-700">Excerpt</FormLabel>
286:                       <FormControl>
287:                         <Textarea {...field} rows={3} placeholder="Short teaser for the post grid" className="resize-none text-sm" />
288:                       </FormControl>
289:                       <FormMessage />
290:                     </FormItem>
291:                   )}
292:                 />
293:                 <FormField
294:                   control={form.control}
295:                   name="tags"
296:                   render={({ field }) => (
297:                     <FormItem>
298:                       <FormLabel className="text-gray-700">Tags</FormLabel>
299:                       <FormControl>
300:                         <Input placeholder="tag1, tag2, tag3" {...field} />
301:                       </FormControl>
302:                       <FormDescription>Comma-separated list</FormDescription>
303:                       <FormMessage />
304:                     </FormItem>
305:                   )}
306:                 />
307:                 <FormField
308:                   control={form.control}
309:                   name="keywords"
310:                   render={({ field }) => (
311:                     <FormItem>
312:                       <FormLabel className="text-gray-700">Keywords</FormLabel>
313:                       <FormControl>
314:                         <Input placeholder="SEO keywords; separated by; semicolon" {...field} />
315:                       </FormControl>
316:                       <FormMessage />
317:                     </FormItem>
318:                   )}
319:                 />
320:                 <FormField
321:                   control={form.control}
322:                   name="readingTimeMinutes"
323:                   render={({ field }) => (
324:                     <FormItem>
325:                       <FormLabel className="text-gray-700">Reading Time (min)</FormLabel>
326:                       <FormControl>
327:                         <Input
328:                           type="number"
329:                           {...field}
330:                           onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
331:                         />
332:                       </FormControl>
333:                       <FormMessage />
334:                     </FormItem>
335:                   )}
336:                 />
337:                 <FormField
338:                   control={form.control}
339:                   name="status"
340:                   render={({ field }) => (
341:                     <FormItem>
342:                       <FormLabel className="text-gray-700">Status</FormLabel>
343:                       <FormControl>
344:                         <select
345:                           {...field}
346:                           className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
347:                         >
348:                           <option value="published">Published</option>
349:                           <option value="draft">Draft</option>
350:                         </select>
351:                       </FormControl>
352:                       <FormMessage />
353:                     </FormItem>
354:                   )}
355:                 />
356:               </CardContent>
357:             </Card>
358:           </div>
359:         </div>
360: 
361:         <div className="flex items-center justify-end gap-4 sticky bottom-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-xl z-20">
362:           <Button type="button" variant="ghost" asChild className="text-gray-500 hover:text-gray-900">
363:             <Link href="/blog">
364:               <X className="mr-2 h-4 w-4" /> Cancel
365:             </Link>
366:           </Button>
367:           <Button type="submit" disabled={isPending} className="min-w-[160px] shadow-lg shadow-emerald-600/20">
368:             {isPending ? (
369:               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
370:             ) : (
371:               <Save className="mr-2 h-4 w-4" />
372:             )}
373:             {isEditing ? 'Save Changes' : 'Create Article'}
374:           </Button>
375:         </div>
376:       </form>
377:     </Form>
378:   );
379: }
````

## File: apps/admin/app/blog/create/page.tsx
````typescript
 1: import BlogForm from "../BlogForm";
 2: import { Button } from "@/app/_components/ui/button";
 3: import Link from "next/link";
 4: import { ArrowLeft } from "lucide-react";
 5: 
 6: export default function CreateBlogPage() {
 7:   return (
 8:     <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
 9:       <div className="flex items-center gap-4">
10:         <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900 rounded-xl">
11:           <Link href="/blog">
12:             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
13:           </Link>
14:         </Button>
15:         <h1 className="text-2xl font-black text-gray-900">
16:           Create New Article
17:         </h1>
18:       </div>
19: 
20:       <BlogForm />
21:     </div>
22:   );
23: }
````

## File: apps/admin/app/blog/page.tsx
````typescript
  1: "use client";
  2: 
  3: import { useState, useEffect } from "react";
  4: import { getBlogs, deleteBlog } from "@malalang/shared/services/blogs";
  5: import type { BlogPost } from "@malalang/shared/types";
  6: import Link from "next/link";
  7: import Image from "next/image";
  8: import { Edit, Trash2, Plus, Calendar, Tag, Eye, Globe } from "lucide-react";
  9: import ConfirmDialog from "@/app/_components/ConfirmDialog";
 10: import PostValidator from "@/app/_components/PostValidator";
 11: import { Button } from "@/app/_components/ui/button";
 12: 
 13: function fmt(iso: string) {
 14:   if (!iso) return "—";
 15:   return new Date(iso).toLocaleDateString("en-ZA", {
 16:     day: "numeric", month: "short", year: "numeric",
 17:   });
 18: }
 19: 
 20: export default function BlogPage() {
 21:   const [posts, setPosts] = useState<BlogPost[]>([]);
 22:   const [loading, setLoading] = useState(true);
 23:   const [deleteId, setDeleteId] = useState<string | null>(null);
 24:   const [deleting, setDeleting] = useState(false);
 25: 
 26:   const fetchPosts = async () => {
 27:     try {
 28:       const data = await getBlogs();
 29:       setPosts(data);
 30:     } catch (error) {
 31:       console.error("Failed to load blogs:", error);
 32:     } finally {
 33:       setLoading(false);
 34:     }
 35:   };
 36: 
 37:   useEffect(() => {
 38:     fetchPosts();
 39:   }, []);
 40: 
 41:   const handleDelete = async () => {
 42:     if (!deleteId) return;
 43:     setDeleting(true);
 44:     try {
 45:       await deleteBlog(deleteId);
 46:       setPosts((prev) => prev.filter((p) => p.id !== deleteId));
 47:       setDeleteId(null);
 48:     } catch (error) {
 49:       console.error("Failed to delete blog:", error);
 50:     } finally {
 51:       setDeleting(false);
 52:     }
 53:   };
 54: 
 55:   if (loading) {
 56:     return (
 57:       <div className="flex items-center justify-center py-20">
 58:         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-600"></div>
 59:         <p className="ml-3 text-gray-500 font-medium">Loading blog articles...</p>
 60:       </div>
 61:     );
 62:   }
 63: 
 64:   return (
 65:     <div className="max-w-7xl mx-auto px-4 sm:px-6">
 66:       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
 67:         <div>
 68:           <h1 className="text-3xl font-black text-gray-900 tracking-tight">Blog Articles</h1>
 69:           <p className="text-gray-500 text-sm mt-1">
 70:             Publish and manage insights for your audience
 71:           </p>
 72:         </div>
 73:         <Button asChild className="shadow-lg shadow-emerald-600/20 rounded-xl h-11 px-6">
 74:           <Link href="/blog/create">
 75:             <Plus size={18} className="mr-2" />
 76:             New Article
 77:           </Link>
 78:         </Button>
 79:       </div>
 80: 
 81:       <PostValidator posts={posts} onUpdate={fetchPosts} />
 82: 
 83:       {posts.length === 0 ? (
 84:         <div className="bg-white rounded-3xl border border-dashed border-gray-300 p-20 text-center shadow-sm">
 85:           <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 text-gray-400 mb-6">
 86:             <Plus size={40} strokeWidth={1.5} />
 87:           </div>
 88:           <h2 className="text-xl font-bold text-gray-900 mb-2">Start your publication</h2>
 89:           <p className="text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">No blog posts found. Share your first story or expert guide with the world.</p>
 90:           <Button asChild className="rounded-xl px-8 h-12">
 91:             <Link href="/blog/create">Create First Post</Link>
 92:           </Button>
 93:         </div>
 94:       ) : (
 95:         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 96:           {posts.map((post) => (
 97:             <div key={post.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-emerald-600/5 transition-all duration-500 hover:-translate-y-1">
 98:               {}
 99:               <div className="relative h-60 bg-gray-100 overflow-hidden">
100:                 {post.imageUrl ? (
101:                   <Image
102:                     src={post.imageUrl}
103:                     alt={post.title}
104:                     fill
105:                     className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
106:                   />
107:                 ) : (
108:                   <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
109:                     <Globe size={48} className="opacity-10" strokeWidth={1} />
110:                   </div>
111:                 )}
112: 
113:                 {}
114:                 <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
115:                    <Link
116:                     href={`/blog/${post.id}`}
117:                     className="p-3 bg-white text-gray-900 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-105 shadow-xl font-bold flex items-center"
118:                     title="View Details"
119:                   >
120:                     <Eye size={20} className="mr-2" /> Details
121:                   </Link>
122:                   <Link
123:                     href={`/blog/${post.id}/edit`}
124:                     className="p-3 bg-white text-gray-900 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-105 shadow-xl"
125:                     title="Quick Edit"
126:                   >
127:                     <Edit size={20} />
128:                   </Link>
129:                   <button
130:                     onClick={() => setDeleteId(post.id)}
131:                     className="p-3 bg-white text-red-600 rounded-2xl hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 shadow-xl"
132:                     title="Delete"
133:                   >
134:                     <Trash2 size={20} />
135:                   </button>
136:                 </div>
137:               </div>
138: 
139:               {}
140:               <div className="p-7 flex-1 flex flex-col">
141:                 <div className="mb-4">
142:                   <h3 className="text-xl font-extrabold text-gray-900 line-clamp-2 leading-tight tracking-tight group-hover:text-emerald-700 transition-colors">
143:                     {post.title}
144:                   </h3>
145:                   <div className="flex items-center gap-2 mt-2.5">
146:                     <code className="text-[10px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded border border-gray-100 uppercase font-mono tracking-tighter">
147:                       {post.slug}
148:                     </code>
149:                   </div>
150:                 </div>
151: 
152:                 {post.excerpt && (
153:                   <p className="text-sm text-gray-500 line-clamp-2 mb-6 italic leading-relaxed">
154:                     &quot;{post.excerpt}&quot;
155:                   </p>
156:                 )}
157: 
158:                 <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-bold uppercase tracking-wider">
159:                   <div className="flex items-center gap-2">
160:                     <Calendar size={14} className="text-gray-300" />
161:                     <span>{fmt(post.publishedAt)}</span>
162:                   </div>
163: 
164:                   <div className="flex items-center gap-2">
165:                     <Tag size={14} className="text-gray-300" />
166:                     <span>{post.tags?.length || 0} Tags</span>
167:                   </div>
168:                 </div>
169:               </div>
170:             </div>
171:           ))}
172:         </div>
173:       )}
174: 
175:       <ConfirmDialog
176:         isOpen={deleteId !== null}
177:         title="Delete Article"
178:         message="Are you sure you want to permanently delete this article? All reader comments will also be removed from the view. This action cannot be undone."
179:         onConfirm={handleDelete}
180:         onCancel={() => setDeleteId(null)}
181:         isLoading={deleting}
182:       />
183:     </div>
184:   );
185: }
````

## File: apps/admin/app/messages/[id]/page.tsx
````typescript
  1: "use client";
  2: 
  3: import { useState, useEffect } from "react";
  4: import { useRouter, useParams } from "next/navigation";
  5: import { getMessageById, updateMessage, deleteMessage } from "@malalang/shared/services/messages";
  6: import type { ContactMessage } from "@malalang/shared/types";
  7: import Link from "next/link";
  8: import { ArrowLeft, Trash2, CheckCircle } from "lucide-react";
  9: import ConfirmDialog from "@/app/_components/ConfirmDialog";
 10: 
 11: export default function MessageDetailPage() {
 12:   const router = useRouter();
 13:   const params = useParams();
 14:   const id = params?.id as string;
 15: 
 16:   const [loading, setLoading] = useState(true);
 17:   const [error, setError] = useState<string | null>(null);
 18:   const [message, setMessage] = useState<ContactMessage | null>(null);
 19:   const [marking, setMarking] = useState(false);
 20:   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
 21:   const [deleting, setDeleting] = useState(false);
 22: 
 23:   useEffect(() => {
 24:     const fetchMessage = async () => {
 25:       try {
 26:         const data = await getMessageById(id);
 27:         if (!data) {
 28:           setError("Message not found");
 29:           return;
 30:         }
 31: 
 32:         if (!data.read) {
 33:           await updateMessage(id, { read: true });
 34:           data.read = true;
 35:         }
 36:         setMessage(data);
 37:       } catch (err: any) {
 38:         setError(err.message || "Failed to load message");
 39:       } finally {
 40:         setLoading(false);
 41:       }
 42:     };
 43:     fetchMessage();
 44:   }, [id]);
 45: 
 46:   const handleMarkResponded = async () => {
 47:     if (!message) return;
 48:     setMarking(true);
 49:     try {
 50:       await updateMessage(id, { responded: !message.responded });
 51:       setMessage({ ...message, responded: !message.responded });
 52:     } catch (err: any) {
 53:       setError(err.message || "Failed to update message");
 54:     } finally {
 55:       setMarking(false);
 56:     }
 57:   };
 58: 
 59:   const handleDelete = async () => {
 60:     setDeleting(true);
 61:     try {
 62:       await deleteMessage(id);
 63:       router.push("/messages");
 64:     } catch (err: any) {
 65:       setError(err.message || "Failed to delete message");
 66:     } finally {
 67:       setDeleting(false);
 68:     }
 69:   };
 70: 
 71:   if (loading) {
 72:     return (
 73:       <div className="flex items-center justify-center py-20">
 74:         <p className="text-gray-400">Loading message...</p>
 75:       </div>
 76:     );
 77:   }
 78: 
 79:   if (error || !message) {
 80:     return (
 81:       <div>
 82:         <Link
 83:           href="/messages"
 84:           className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 mb-6"
 85:         >
 86:           <ArrowLeft size={18} />
 87:           Back
 88:         </Link>
 89:         <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-700">
 90:           {error || "Message not found"}
 91:         </div>
 92:       </div>
 93:     );
 94:   }
 95: 
 96:   const createdAt = new Date(message.createdAt).toLocaleDateString("en-ZA", {
 97:     day: "numeric",
 98:     month: "short",
 99:     year: "numeric",
100:     hour: "2-digit",
101:     minute: "2-digit",
102:   });
103: 
104:   return (
105:     <div>
106:       <Link
107:         href="/messages"
108:         className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 mb-6"
109:       >
110:         <ArrowLeft size={18} />
111:         Back
112:       </Link>
113: 
114:       <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
115:         <div className="flex items-start justify-between mb-6">
116:           <div>
117:             <h1 className="text-2xl font-bold text-gray-900 mb-1">Message from {message.name}</h1>
118:             <p className="text-gray-500 text-sm">Received {createdAt}</p>
119:           </div>
120:           <div className="flex gap-2">
121:             <button
122:               onClick={handleMarkResponded}
123:               disabled={marking}
124:               className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
125:                 message.responded
126:                   ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
127:                   : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
128:               }`}
129:             >
130:               <CheckCircle size={16} />
131:               {message.responded ? "Responded" : "Mark Responded"}
132:             </button>
133:             <button
134:               onClick={() => setShowDeleteDialog(true)}
135:               className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 px-4 py-2 border border-red-200 rounded-lg"
136:             >
137:               <Trash2 size={16} />
138:               Delete
139:             </button>
140:           </div>
141:         </div>
142: 
143:         <div className="space-y-6">
144:           <div>
145:             <h2 className="text-lg font-semibold text-gray-900 mb-4">Sender Information</h2>
146:             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
147:               <div>
148:                 <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Name</p>
149:                 <p className="text-gray-900 font-medium">{message.name}</p>
150:               </div>
151:               <div>
152:                 <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Email</p>
153:                 <p className="text-gray-900 break-all">
154:                   <a href={`mailto:${message.email}`} className="text-emerald-600 hover:underline">
155:                     {message.email}
156:                   </a>
157:                 </p>
158:               </div>
159:             </div>
160:           </div>
161: 
162:           <div>
163:             <h2 className="text-lg font-semibold text-gray-900 mb-4">Message</h2>
164:             <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
165:               <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
166:                 {message.message}
167:               </p>
168:             </div>
169:           </div>
170: 
171:           {message.responded && (
172:             <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
173:               <p className="text-sm text-emerald-800">
174:                 ✓ You marked this message as responded
175:               </p>
176:             </div>
177:           )}
178:         </div>
179:       </div>
180: 
181:       <ConfirmDialog
182:         isOpen={showDeleteDialog}
183:         title="Delete Message"
184:         message="Are you sure you want to delete this message? This action cannot be undone."
185:         onConfirm={handleDelete}
186:         onCancel={() => setShowDeleteDialog(false)}
187:         isLoading={deleting}
188:       />
189:     </div>
190:   );
191: }
````

## File: apps/admin/app/messages/page.tsx
````typescript
  1: "use client";
  2: 
  3: import { useState, useEffect } from "react";
  4: import { getMessages, deleteMessage, updateMessage } from "@malalang/shared/services/messages";
  5: import type { ContactMessage } from "@malalang/shared/types";
  6: import Link from "next/link";
  7: import { Eye, Trash2, CheckCircle } from "lucide-react";
  8: import ConfirmDialog from "@/app/_components/ConfirmDialog";
  9: 
 10: function fmt(iso: string) {
 11:   if (!iso) return "—";
 12:   return new Date(iso).toLocaleDateString("en-ZA", {
 13:     day: "numeric", month: "short", year: "numeric",
 14:     hour: "2-digit", minute: "2-digit",
 15:   });
 16: }
 17: 
 18: export default function MessagesPage() {
 19:   const [messages, setMessages] = useState<ContactMessage[]>([]);
 20:   const [loading, setLoading] = useState(true);
 21:   const [deleteId, setDeleteId] = useState<string | null>(null);
 22:   const [deleting, setDeleting] = useState(false);
 23: 
 24:   useEffect(() => {
 25:     const fetchMessages = async () => {
 26:       try {
 27:         const data = await getMessages();
 28:         setMessages(data);
 29:       } catch (error) {
 30:         console.error("Failed to load messages:", error);
 31:       } finally {
 32:         setLoading(false);
 33:       }
 34:     };
 35:     fetchMessages();
 36:   }, []);
 37: 
 38:   const handleDelete = async () => {
 39:     if (!deleteId) return;
 40:     setDeleting(true);
 41:     try {
 42:       await deleteMessage(deleteId);
 43:       setMessages((prev) => prev.filter((m) => m.id !== deleteId));
 44:       setDeleteId(null);
 45:     } catch (error) {
 46:       console.error("Failed to delete message:", error);
 47:     } finally {
 48:       setDeleting(false);
 49:     }
 50:   };
 51: 
 52:   const handleMarkResponded = async (id: string, responded: boolean) => {
 53:     try {
 54:       await updateMessage(id, { responded: !responded });
 55:       setMessages((prev) =>
 56:         prev.map((m) => (m.id === id ? { ...m, responded: !responded } : m))
 57:       );
 58:     } catch (error) {
 59:       console.error("Failed to update message:", error);
 60:     }
 61:   };
 62: 
 63:   if (loading) {
 64:     return (
 65:       <div className="flex items-center justify-center py-20">
 66:         <p className="text-gray-400">Loading messages...</p>
 67:       </div>
 68:     );
 69:   }
 70: 
 71:   return (
 72:     <div>
 73:       <h1 className="text-2xl font-bold text-gray-900 mb-1">Messages</h1>
 74:       <p className="text-gray-500 text-sm mb-8">
 75:         {messages.length} message{messages.length !== 1 ? "s" : ""} received
 76:       </p>
 77: 
 78:       {messages.length === 0 ? (
 79:         <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
 80:           <p className="text-sm text-gray-400">No messages yet.</p>
 81:         </div>
 82:       ) : (
 83:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
 84:           <table className="w-full text-sm">
 85:             <thead className="bg-gray-50 border-b border-gray-200">
 86:               <tr>
 87:                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</th>
 88:                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</th>
 89:                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Received</th>
 90:                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
 91:                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
 92:               </tr>
 93:             </thead>
 94:             <tbody className="divide-y divide-gray-100">
 95:               {messages.map((m) => (
 96:                 <tr
 97:                   key={m.id}
 98:                   className={`hover:bg-gray-50 transition-colors ${!m.read ? "bg-blue-50" : ""}`}
 99:                 >
100:                   <td className="px-5 py-3">
101:                     <p className="font-medium text-gray-900">{m.name}</p>
102:                   </td>
103:                   <td className="px-5 py-3">
104:                     <a href={`mailto:${m.email}`} className="text-emerald-600 hover:underline break-all">
105:                       {m.email}
106:                     </a>
107:                   </td>
108:                   <td className="px-5 py-3 text-gray-600">{fmt(m.createdAt)}</td>
109:                   <td className="px-5 py-3">
110:                     {m.responded ? (
111:                       <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-medium">
112:                         <CheckCircle size={14} />
113:                         Responded
114:                       </span>
115:                     ) : (
116:                       <span className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
117:                         Pending
118:                       </span>
119:                     )}
120:                   </td>
121:                   <td className="px-5 py-3">
122:                     <div className="flex items-center gap-2">
123:                       <Link
124:                         href={`/messages/${m.id}`}
125:                         className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 p-1 rounded"
126:                         title="View message"
127:                       >
128:                         <Eye size={16} />
129:                         <span className="sr-only">View</span>
130:                       </Link>
131:                       <button
132:                         onClick={() => handleMarkResponded(m.id, m.responded ?? false)}
133:                         className={`inline-flex items-center gap-1 p-1 rounded ${
134:                           m.responded
135:                             ? "text-gray-400"
136:                             : "text-blue-600 hover:text-blue-700"
137:                         }`}
138:                         title={m.responded ? "Mark as not responded" : "Mark as responded"}
139:                       >
140:                         <CheckCircle size={16} />
141:                         <span className="sr-only">{m.responded ? "Not responded" : "Responded"}</span>
142:                       </button>
143:                       <button
144:                         onClick={() => setDeleteId(m.id)}
145:                         className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 p-1 rounded"
146:                         title="Delete message"
147:                       >
148:                         <Trash2 size={16} />
149:                         <span className="sr-only">Delete</span>
150:                       </button>
151:                     </div>
152:                   </td>
153:                 </tr>
154:               ))}
155:             </tbody>
156:           </table>
157:         </div>
158:       )}
159: 
160:       <ConfirmDialog
161:         isOpen={deleteId !== null}
162:         title="Delete Message"
163:         message="Are you sure you want to delete this message? This action cannot be undone."
164:         onConfirm={handleDelete}
165:         onCancel={() => setDeleteId(null)}
166:         isLoading={deleting}
167:       />
168:     </div>
169:   );
170: }
````

## File: apps/admin/tsconfig.json
````json
 1: {
 2:   "extends": "@malalang/typescript-config/nextjs.json",
 3:   "compilerOptions": {
 4:     "incremental": true,
 5:     "plugins": [{ "name": "next" }],
 6:     "types": ["node", "react", "react-dom"],
 7:     "paths": {
 8:       "@/*": ["./*"]
 9:     }
10:   },
11:   "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
12:   "exclude": ["node_modules"]
13: }
````

## File: apps/client/app/_components/ColorPalettePage.tsx
````typescript
1: export {};
````

## File: apps/client/app/_components/Cta.tsx
````typescript
 1: import React from 'react';
 2: import { WHATSAPP_LINK } from '@/app/_lib/constants/site';
 3: 
 4: const Cta: React.FC = () => {
 5:   return (
 6:     <section id="cta" className="py-20 bg-brand-primary/10" aria-labelledby="cta-heading">
 7:       <div className="container mx-auto px-6 text-center">
 8:         <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
 9:           Ready to Grow Your Business?
10:         </h2>
11:         <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
12:           Let's build a website that gets you results. Our process is risk-free, and our focus is on your success. Get in touch for a free, no-obligation consultation.
13:         </p>
14:         <a
15:           href={WHATSAPP_LINK}
16:           target="_blank"
17:           rel="noopener noreferrer"
18:           className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary min-h-[56px]"
19:           aria-label="Get your free quote via WhatsApp - Opens in a new window"
20:         >
21:           Get My Free Quote
22:         </a>
23:       </div>
24:     </section>
25:   );
26: };
27: 
28: export default Cta;
````

## File: apps/client/app/_components/Footer.tsx
````typescript
 1: import React from 'react';
 2: import Link from 'next/link';
 3: import { FOOTER_LINKS } from '@/app/_lib/constants/navigation';
 4: import Image from 'next/image';
 5: 
 6: const Footer: React.FC = () => {
 7:   const currentYear = new Date().getFullYear();
 8:   const footerLinks = FOOTER_LINKS.filter(link => link.name !== 'Home');
 9: 
10:   return (
11:     <footer className="border-t" style={{ background: '#0C1E3A', borderColor: 'rgba(0,210,106,0.15)' }} role="contentinfo">
12:       <div className="container mx-auto px-6 py-8 text-center text-slate-400">
13:         <div className="mb-6">
14:          <Link href="/" aria-label="Malalang Pty Ltd - Return to homepage">
15:             <Image
16:               src="/logo.jpg"
17:               alt="Malalang Pty Ltd - Professional Web Development"
18:               width={64}
19:               height={64}
20:               className="h-16 w-auto mx-auto rounded-md"
21:             />
22:           </Link>
23:         </div>
24:         <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6" aria-label="Footer navigation">
25:             {footerLinks.map(link => (
26:                 <Link
27:                   key={link.name}
28:                   href={link.href}
29:                   className="text-sm text-slate-300 hover:text-brand-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:rounded px-2 py-1"
30:                 >
31:                     {link.name}
32:                 </Link>
33:             ))}
34:         </nav>
35:         <p>&copy; {currentYear} Malalang Pty Ltd. All Rights Reserved.</p>
36:         <p className="text-sm mt-1 font-mono">
37:           <span className="text-brand-primary">{"{"}</span> Your Trusted Web Development Partner in Phalaborwa, Limpopo. <span className="text-brand-primary">{"}"}</span>
38:         </p>
39:       </div>
40:     </footer>
41:   );
42: };
43: 
44: export default Footer;
````

## File: apps/client/app/_components/Header.tsx
````typescript
  1: "use client";
  2: 
  3: import React, { useState } from "react";
  4: import Link from "next/link";
  5: import { HEADER_LINKS } from "@/app/_lib/constants/navigation";
  6: import { WHATSAPP_LINK } from "@/app/_lib/constants/site";
  7: import Image from "next/image";
  8: 
  9: const Header: React.FC = () => {
 10:   const [isOpen, setIsOpen] = useState(false);
 11: 
 12:   return (
 13:     <header
 14:       className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-slate-300/10"
 15:       role="banner"
 16:     >
 17:       <div className="container mx-auto px-4 sm:px-6 py-4">
 18:         <div className="flex items-center justify-between">
 19:           <Link
 20:             href="/"
 21:             aria-label="Malalang Pty Ltd - Return to homepage"
 22:             className="flex items-center gap-2"
 23:           >
 24:             <Image
 25:               src="/logo.jpg"
 26:               alt="Malalang Pty Ltd - Professional Web Development"
 27:               width={48}
 28:               height={48}
 29:               className="h-12 w-12 rounded-lg bg-white p-0.5"
 30:               priority
 31:             />
 32:             <span className="text-2xl sm:text-3xl font-bold text-white">Malalang</span>
 33:           </Link>
 34: 
 35:           <nav
 36:             className="hidden md:flex items-center space-x-6"
 37:             aria-label="Main navigation"
 38:           >
 39:             {HEADER_LINKS.map((link) => (
 40:               <Link
 41:                 key={link.name}
 42:                 href={link.href}
 43:                 className="text-slate-300 hover:text-brand-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:rounded px-2 py-1"
 44:               >
 45:                 {link.name}
 46:               </Link>
 47:             ))}
 48:             <Link
 49:               href="/questionnaire"
 50:               className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
 51:               aria-label="Get a free quote - Start the project questionnaire"
 52:             >
 53:               Get a Free Quote
 54:             </Link>
 55:           </nav>
 56: 
 57:           <div className="md:hidden">
 58:             <button
 59:               onClick={() => setIsOpen(!isOpen)}
 60:               className="text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary rounded p-2"
 61:               aria-expanded={isOpen}
 62:               aria-controls="mobile-menu"
 63:               aria-label={
 64:                 isOpen ? "Close navigation menu" : "Open navigation menu"
 65:               }
 66:             >
 67:               <svg
 68:                 className="w-6 h-6"
 69:                 fill="none"
 70:                 stroke="currentColor"
 71:                 viewBox="0 0 24 24"
 72:                 xmlns="http://www.w3.org/2000/svg"
 73:                 aria-hidden="true"
 74:               >
 75:                 <path
 76:                   strokeLinecap="round"
 77:                   strokeLinejoin="round"
 78:                   strokeWidth="2"
 79:                   d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
 80:                 ></path>
 81:               </svg>
 82:             </button>
 83:           </div>
 84:         </div>
 85: 
 86:         {isOpen && (
 87:           <nav
 88:             id="mobile-menu"
 89:             className="md:hidden mt-4"
 90:             aria-label="Mobile navigation"
 91:           >
 92:             <div className="flex flex-col space-y-4">
 93:               {HEADER_LINKS.map((link) => (
 94:                 <Link
 95:                   key={link.name}
 96:                   href={link.href}
 97:                   onClick={() => setIsOpen(false)}
 98:                   className="text-slate-300 hover:text-brand-primary transition-colors duration-300 text-center py-3 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-secondary min-h-[44px] flex items-center justify-center"
 99:                 >
100:                   {link.name}
101:                 </Link>
102:               ))}
103:               <Link
104:                 href="/questionnaire"
105:                 className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-center focus:outline-none focus:ring-2 focus:ring-brand-secondary min-h-[44px] flex items-center justify-center"
106:                 aria-label="Get a free quote - Start the project questionnaire"
107:               >
108:                 Get a Free Quote
109:               </Link>
110:             </div>
111:           </nav>
112:         )}
113:       </div>
114:     </header>
115:   );
116: };
117: 
118: export default Header;
````

## File: apps/client/app/_components/HeroBackground.tsx
````typescript
 1: import React from 'react';
 2: 
 3: const codeKeywords = [
 4:   { text: '{interface}', x: '5%',  y: '12%', color: 'text-blue-400',     delay: '0s'   },
 5:   { text: '{typerface}', x: '75%', y: '8%',  color: 'text-blue-300',     delay: '0.3s' },
 6:   { text: 'TypeScript',  x: '38%', y: '6%',  color: 'text-brand-primary', delay: '0.6s' },
 7:   { text: 'const',       x: '4%',  y: '58%', color: 'text-brand-primary', delay: '0.9s' },
 8:   { text: 'function()',  x: '80%', y: '55%', color: 'text-brand-primary', delay: '1.2s' },
 9:   { text: '.tsx',        x: '20%', y: '78%', color: 'text-brand-primary', delay: '1.8s' },
10:   { text: 'async/await', x: '68%', y: '78%', color: 'text-blue-300',     delay: '2.1s' },
11: ];
12: 
13: const HeroBackground: React.FC = () => {
14:   return (
15:     <>
16:       {}
17:       <div
18:         className="pointer-events-none absolute inset-0"
19:         style={{
20:           background:
21:             'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,210,106,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(59,130,246,0.06) 0%, transparent 60%)',
22:         }}
23:       />
24: 
25:       {}
26:       {codeKeywords.map(({ text, x, y, color, delay }) => (
27:         <span
28:           key={text + x}
29:           aria-hidden="true"
30:           className={`pointer-events-none absolute font-mono text-xs font-semibold opacity-30 select-none hidden md:inline ${color}`}
31:           style={{ left: x, top: y, animationDelay: delay }}
32:         >
33:           {text}
34:         </span>
35:       ))}
36: 
37:       {}
38:       <svg
39:         className="pointer-events-none absolute inset-0 w-full h-full opacity-10"
40:         aria-hidden="true"
41:         preserveAspectRatio="none"
42:       >
43:         <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#00D26A" strokeWidth="0.5" strokeDasharray="8 16" />
44:         <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="8 16" />
45:         <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#00D26A" strokeWidth="0.5" strokeDasharray="6 20" />
46:         <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="6 20" />
47:         <circle cx="15%" cy="30%" r="3" fill="#00D26A" />
48:         <circle cx="85%" cy="70%" r="3" fill="#3B82F6" />
49:         <circle cx="15%" cy="70%" r="2" fill="#3B82F6" />
50:         <circle cx="85%" cy="30%" r="2" fill="#00D26A" />
51:       </svg>
52:     </>
53:   );
54: };
55: 
56: export default HeroBackground;
````

## File: apps/client/app/_components/ImageColorPicker.tsx
````typescript
  1: 'use client';
  2: import React, { useState, useRef, useCallback } from 'react';
  3: 
  4: interface Color {
  5:   r: number;
  6:   g: number;
  7:   b: number;
  8: }
  9: 
 10: const rgbToHex = (r: number, g: number, b: number): string => {
 11:   const toHex = (c: number) => `0${c.toString(16)}`.slice(-2);
 12:   return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
 13: };
 14: 
 15: const ImageColorPicker: React.FC = () => {
 16:   const [imageSrc, setImageSrc] = useState<string | null>(null);
 17:   const [palette, setPalette] = useState<string[]>([]);
 18:   const [isLoading, setIsLoading] = useState<boolean>(false);
 19:   const [error, setError] = useState<string | null>(null);
 20:   const [copiedColor, setCopiedColor] = useState<string | null>(null);
 21:   const canvasRef = useRef<HTMLCanvasElement>(null);
 22:   const fileInputRef = useRef<HTMLInputElement>(null);
 23: 
 24:   const handleImageUpload = (file: File) => {
 25:     if (!file.type.startsWith('image/')) {
 26:       setError('Please upload a valid image file (PNG, JPG, etc.).');
 27:       return;
 28:     }
 29:     setError(null);
 30:     setIsLoading(true);
 31:     setPalette([]);
 32:     const reader = new FileReader();
 33:     reader.onload = (e) => {
 34:       const result = e.target?.result as string;
 35:       setImageSrc(result);
 36:       generatePalette(result);
 37:     };
 38:     reader.readAsDataURL(file);
 39:   };
 40: 
 41:   const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 42:     const file = e.target.files?.[0];
 43:     if (file) {
 44:       handleImageUpload(file);
 45:     }
 46:   };
 47: 
 48:   const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
 49:     e.preventDefault();
 50:     e.stopPropagation();
 51:     const file = e.dataTransfer.files?.[0];
 52:     if (file) {
 53:       handleImageUpload(file);
 54:     }
 55:   }, []);
 56: 
 57:   const generatePalette = (src: string) => {
 58:     const canvas = canvasRef.current;
 59:     const ctx = canvas?.getContext('2d', { willReadFrequently: true });
 60:     if (!canvas || !ctx) {
 61:         setError('Could not process the image.');
 62:         setIsLoading(false);
 63:         return;
 64:     }
 65: 
 66:     const img = new Image();
 67:     img.crossOrigin = "Anonymous";
 68:     img.onload = () => {
 69:       const MAX_WIDTH = 100;
 70:       const scale = MAX_WIDTH / img.width;
 71:       canvas.width = MAX_WIDTH;
 72:       canvas.height = img.height * scale;
 73:       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
 74: 
 75:       try {
 76:         const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
 77:         const colorCounts: { [key: string]: { color: Color, count: number } } = {};
 78:         const step = 4 * 5;
 79: 
 80:         for (let i = 0; i < imageData.length; i += step) {
 81:             const r = imageData[i];
 82:             const g = imageData[i + 1];
 83:             const b = imageData[i + 2];
 84:             const a = imageData[i + 3];
 85: 
 86: 
 87:             if (r === undefined || g === undefined || b === undefined || a === undefined) continue;
 88: 
 89:             if (a < 125 || (r > 250 && g > 250 && b > 250) || (r < 10 && g < 10 && b < 10)) {
 90:                 continue;
 91:             }
 92: 
 93:             const key = `${r},${g},${b}`;
 94:             const existing = colorCounts[key];
 95:             if (existing) {
 96:               existing.count++;
 97:             } else {
 98:               colorCounts[key] = { color: { r, g, b }, count: 1 };
 99:             }
100:         }
101: 
102:         const sortedColors = Object.values(colorCounts).sort((a, b) => b.count - a.count);
103:         const topColors = sortedColors.slice(0, 5).map(c => rgbToHex(c.color.r, c.color.g, c.color.b));
104: 
105:         setPalette(topColors);
106: 
107: 
108:       } catch (e) {
109:           setError('Could not process the image. It might be from a protected source.');
110:           console.error(e);
111:       } finally {
112:           setIsLoading(false);
113:       }
114:     };
115:     img.onerror = () => {
116:         setError('Could not load the image file.');
117:         setIsLoading(false);
118:     }
119:     img.src = src;
120:   };
121: 
122:   const copyToClipboard = (color: string) => {
123:     navigator.clipboard.writeText(color);
124:     setCopiedColor(color);
125:     setTimeout(() => setCopiedColor(null), 2000);
126:   };
127: 
128:   const handleDropZoneKeyDown = (e: React.KeyboardEvent) => {
129:     if (e.key === 'Enter' || e.key === ' ') {
130:       e.preventDefault();
131:       fileInputRef.current?.click();
132:     }
133:   };
134: 
135:   return (
136:     <div className="bg-slate-900/50 p-4 rounded-lg">
137:       <div
138:         className="bg-background border-2 border-dashed border-slate-700 rounded-lg p-8 text-center cursor-pointer hover:border-brand-primary transition-colors focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-secondary"
139:         onDrop={onDrop}
140:         onDragOver={(e) => e.preventDefault()}
141:         onClick={() => fileInputRef.current?.click()}
142:         onKeyDown={handleDropZoneKeyDown}
143:         tabIndex={0}
144:         role="button"
145:         aria-label="Upload an image to generate color palette. Click or press Enter to browse files, or drag and drop an image here"
146:       >
147:         <input
148:           ref={fileInputRef}
149:           type="file"
150:           className="sr-only"
151:           accept="image/*"
152:           onChange={onFileChange}
153:           id="image-upload"
154:           aria-label="Upload image file"
155:         />
156:         <div className="flex flex-col items-center justify-center">
157:             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
158:               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
159:             </svg>
160:             <p className="text-slate-300 font-semibold">Drop an image here</p>
161:             <p className="text-slate-500">or click to browse</p>
162:         </div>
163:       </div>
164: 
165:       {error && (
166:         <div className="text-red-400 text-center mt-4 p-3 bg-red-400/10 rounded-lg" role="alert" aria-live="assertive">
167:           {error}
168:         </div>
169:       )}
170: 
171:       <div className="mt-8">
172:           {isLoading && (
173:               <div className="text-center" role="status" aria-live="polite">
174:                   <p className="text-slate-300 text-lg">Generating palette...</p>
175:               </div>
176:           )}
177:           {imageSrc && !isLoading && (
178:               <div className="bg-background p-6 rounded-lg border border-slate-800">
179:                   <img src={imageSrc} alt="Uploaded image for color palette extraction" className="rounded-lg max-w-full max-h-80 mx-auto shadow-lg" />
180:               </div>
181:           )}
182:           {palette.length > 0 && (
183:               <div className="mt-8">
184:                   <h3 className="text-white text-xl font-bold mb-4 text-center">Generated Color Palette</h3>
185:                   <div className="grid grid-cols-2 md:grid-cols-5 gap-0 overflow-hidden rounded-lg" role="list" aria-label="Color palette">
186:                       {palette.map((color, index) => (
187:                           <div
188:                             key={index}
189:                             style={{ backgroundColor: color }}
190:                             className="h-40 flex flex-col justify-end p-3 text-white font-mono text-sm shadow-inner"
191:                             role="listitem"
192:                             aria-label={`Color ${index + 1}: ${color}`}
193:                           >
194:                               <span className="bg-black/40 px-2 py-1 rounded" aria-hidden="true">{color}</span>
195:                           </div>
196:                       ))}
197:                   </div>
198:                   <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
199:                       {palette.map((color, index) => (
200:                           <button
201:                             key={`${index}-btn`}
202:                             onClick={() => copyToClipboard(color)}
203:                             className="w-full bg-slate-700 text-white font-semibold py-3 px-3 rounded-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors min-h-[44px]"
204:                             aria-label={copiedColor === color ? `Color ${color} copied to clipboard` : `Copy color ${color} to clipboard`}
205:                           >
206:                               {copiedColor === color ? 'Copied!' : color}
207:                           </button>
208:                       ))}
209:                   </div>
210:               </div>
211:           )}
212:       </div>
213:       <canvas ref={canvasRef} className="sr-only" aria-hidden="true"></canvas>
214:     </div>
215:   );
216: };
217: 
218: export default ImageColorPicker;
````

## File: apps/client/app/_components/SkipToContent.tsx
````typescript
 1: import React from 'react';
 2: 
 3: const SkipToContent: React.FC = () => {
 4:   return (
 5:     <a
 6:       href="#main-content"
 7:       className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-bold focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-secondary"
 8:     >
 9:       Skip to main content
10:     </a>
11:   );
12: };
13: 
14: export default SkipToContent;
````

## File: apps/client/app/_components/SouthAfricanPhoneNumberInput.tsx
````typescript
 1: "use client";
 2: 
 3: import React from "react";
 4: 
 5: interface Props {
 6:   value: string;
 7:   onPhoneNumberChange: (value: string) => void;
 8:   error?: string;
 9:   name: string;
10:   id: string;
11:   placeholder?: string;
12: }
13: 
14: const inputClass =
15:   "block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-brand-primary focus:border-brand-primary";
16: 
17: const PhoneNumberInput: React.FC<Props> = ({
18:   value,
19:   onPhoneNumberChange,
20:   error,
21:   name,
22:   id,
23:   placeholder,
24: }) => {
25:   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
26: 
27:     let numericValue = e.target.value.replace(/[^0-9]/g, ""); // Step 2a: Strip the common international prefix '27' if present
28: 
29:     // --- Normalization Logic ---
30:     // We prioritize stripping international codes first to normalize the number.
31: 
32:     if (numericValue.startsWith("27")) {
33: 
34:       numericValue = numericValue.substring(2);
35:     }
36: 
37:     if (numericValue.startsWith("0")) {
38: 
39:       numericValue = numericValue.substring(1);
40:     }
41:     const finalValue = numericValue.substring(0, 9);
42:     onPhoneNumberChange(finalValue);
43:   };
44: 
45:   return (
46:     <div>
47:       <div className="mt-1 flex rounded-md shadow-sm">
48:         <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-600 bg-slate-700 text-slate-300 text-sm">
49:           +27
50:         </span>
51:         <input
52:           type="tel"
53:           name={name}
54:           id={id}
55:           value={value}
56:           onChange={handleChange}
57:           className={`${inputClass} rounded-l-none`}
58:           placeholder={placeholder}
59:           aria-invalid={!!error}
60:           aria-describedby={error ? `${id}-error` : undefined}
61:         />
62:       </div>
63:       {error && <p id={`${id}-error`} className="text-red-500 text-sm mt-1" role="alert">{error}</p>}
64:     </div>
65:   );
66: };
67: 
68: export default PhoneNumberInput;
````

## File: apps/client/app/_components/ui/button.tsx
````typescript
 1: import * as React from "react"
 2: import { Slot } from "@radix-ui/react-slot"
 3: import { cva, type VariantProps } from "class-variance-authority"
 4: 
 5: import { cn } from "@/app/_lib/utils"
 6: 
 7: const buttonVariants = cva(
 8:   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
 9:   {
10:     variants: {
11:       variant: {
12:         default:
13:           "bg-primary text-primary-foreground hover:bg-primary/90",
14:         destructive:
15:           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
16:         outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
17:         secondary:
18:           "bg-secondary text-white hover:bg-secondary/80",
19:         ghost: "hover:bg-accent hover:text-accent-foreground",
20:         link: "text-primary underline-offset-4 hover:underline",
21:       },
22:       size: {
23:         default: "h-10 px-4 py-2",
24:         sm: "h-9 rounded-md px-3",
25:         lg: "h-11 rounded-md px-8",
26:         icon: "h-10 w-10",
27:       },
28:     },
29:     defaultVariants: {
30:       variant: "default",
31:       size: "default",
32:     },
33:   }
34: )
35: 
36: export interface ButtonProps
37:   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
38:     VariantProps<typeof buttonVariants> {
39:   asChild?: boolean
40: }
41: 
42: const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
43:   ({ className, variant, size, asChild = false, ...props }, ref) => {
44:     const Comp = asChild ? Slot : "button"
45:     return (
46:       <Comp
47:         className={cn(buttonVariants({ variant, size, className }))}
48:         ref={ref}
49:         {...props}
50:       />
51:     )
52:   }
53: )
54: Button.displayName = "Button"
55: 
56: export { Button, buttonVariants }
````

## File: apps/client/app/_components/ui/card.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: import { cn } from "@/app/_lib/utils"
 4: 
 5: const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
 6:   <div
 7:     ref={ref}
 8:     className={cn(
 9:    "rounded-lg border bg-card text-card-foreground shadow-sm",
10:       className
11:     )}
12:     {...props}
13:   />
14: ))
15: Card.displayName = "Card"
16: 
17: const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
18:   <div
19:     ref={ref}
20:     className={cn("flex flex-col space-y-1.5 p-6", className)}
21:     {...props}
22:   />
23: ))
24: CardHeader.displayName = "CardHeader"
25: 
26: const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
27:   <h3
28:     ref={ref}
29:     className={cn(
30:       "text-2xl font-semibold leading-none tracking-tight",
31:       className
32:     )}
33:     {...props}
34:   />
35: ))
36: CardTitle.displayName = "CardTitle"
37: 
38: const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
39:   <p
40:     ref={ref}
41:     className={cn("text-sm text-muted-foreground", className)}
42:     {...props}
43:   />
44: ))
45: CardDescription.displayName = "CardDescription"
46: 
47: const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
48:   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
49: ))
50: CardContent.displayName = "CardContent"
51: 
52: const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
53:   <div
54:     ref={ref}
55:     className={cn("flex items-center p-6 pt-0", className)}
56:     {...props}
57:   />
58: ))
59: CardFooter.displayName = "CardFooter"
60: 
61: export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
````

## File: apps/client/app/_components/ui/dialog.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as DialogPrimitive from "@radix-ui/react-dialog"
  5: import { X } from "lucide-react"
  6: 
  7: import { cn } from "@/app/_lib/utils"
  8: 
  9: const Dialog = DialogPrimitive.Root
 10: 
 11: const DialogTrigger = DialogPrimitive.Trigger
 12: 
 13: const DialogPortal = DialogPrimitive.Portal
 14: 
 15: const DialogClose = DialogPrimitive.Close
 16: 
 17: const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
 18:   <DialogPrimitive.Overlay
 19:     ref={ref}
 20:     className={cn(
 21:       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
 22:       className
 23:     )}
 24:     {...props}
 25:   />
 26: ))
 27: DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
 28: 
 29: const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
 30:   <DialogPortal>
 31:     <DialogOverlay />
 32:     <DialogPrimitive.Content
 33:       ref={ref}
 34:       className={cn(
 35:         "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
 36:         className
 37:       )}
 38:       {...props}
 39:     >
 40:       {children}
 41:       <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
 42:         <X className="h-4 w-4" />
 43:         <span className="sr-only">Close</span>
 44:       </DialogPrimitive.Close>
 45:     </DialogPrimitive.Content>
 46:   </DialogPortal>
 47: ))
 48: DialogContent.displayName = DialogPrimitive.Content.displayName
 49: 
 50: const DialogHeader = ({
 51:   className,
 52:   ...props
 53: }: React.HTMLAttributes<HTMLDivElement>) => (
 54:   <div
 55:     className={cn(
 56:       "flex flex-col space-y-1.5 text-center sm:text-left",
 57:       className
 58:     )}
 59:     {...props}
 60:   />
 61: )
 62: DialogHeader.displayName = "DialogHeader"
 63: 
 64: const DialogFooter = ({
 65:   className,
 66:   ...props
 67: }: React.HTMLAttributes<HTMLDivElement>) => (
 68:   <div
 69:     className={cn(
 70:       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
 71:       className
 72:     )}
 73:     {...props}
 74:   />
 75: )
 76: DialogFooter.displayName = "DialogFooter"
 77: 
 78: const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
 79:   <DialogPrimitive.Title
 80:     ref={ref}
 81:     className={cn(
 82:       "text-lg font-semibold leading-none tracking-tight",
 83:       className
 84:     )}
 85:     {...props}
 86:   />
 87: ))
 88: DialogTitle.displayName = DialogPrimitive.Title.displayName
 89: 
 90: const DialogDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
 91:   <DialogPrimitive.Description
 92:     ref={ref}
 93:     className={cn("text-sm text-muted-foreground", className)}
 94:     {...props}
 95:   />
 96: ))
 97: DialogDescription.displayName = DialogPrimitive.Description.displayName
 98: 
 99: export {
100:   Dialog,
101:   DialogPortal,
102:   DialogOverlay,
103:   DialogClose,
104:   DialogTrigger,
105:   DialogContent,
106:   DialogHeader,
107:   DialogFooter,
108:   DialogTitle,
109:   DialogDescription,
110: }
````

## File: apps/client/app/_components/ui/input.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: import { cn } from "@/app/_lib/utils"
 4: 
 5: export interface InputProps
 6:   extends React.InputHTMLAttributes<HTMLInputElement> {}
 7: 
 8: const Input = React.forwardRef<HTMLInputElement, InputProps>(
 9:   ({ className, type, ...props }, ref) => {
10:     return (
11:       <input
12:         type={type}
13:         className={cn(
14:           "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
15:           className
16:         )}
17:         ref={ref}
18:         {...props}
19:       />
20:     )
21:   }
22: )
23: Input.displayName = "Input"
24: 
25: export { Input }
````

## File: apps/client/app/_components/ui/scroll-area.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
 5: 
 6: import { cn } from "@/app/_lib/utils"
 7: 
 8: const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>>(({ className, children, ...props }, ref) => (
 9:   <ScrollAreaPrimitive.Root
10:     ref={ref}
11:     className={cn("relative overflow-hidden", className)}
12:     {...props}
13:   >
14:     <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
15:       {children}
16:     </ScrollAreaPrimitive.Viewport>
17:     <ScrollBar />
18:     <ScrollAreaPrimitive.Corner />
19:   </ScrollAreaPrimitive.Root>
20: ))
21: ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
22: 
23: const ScrollBar = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>>(({ className, orientation = "vertical", ...props }, ref) => (
24:   <ScrollAreaPrimitive.Scrollbar
25:     ref={ref}
26:     orientation={orientation}
27:     className={cn(
28:       "flex touch-none select-none transition-colors",
29:       orientation === "vertical" &&
30:         "h-full w-2.5 border-l border-l-transparent p-[1px]",
31:       orientation === "horizontal" &&
32:         "h-2.5 flex-col border-t border-t-transparent p-[1px]",
33:       className
34:     )}
35:     {...props}
36:   >
37:     <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
38:   </ScrollAreaPrimitive.Scrollbar>
39: ))
40: ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName
41: 
42: export { ScrollArea, ScrollBar }
````

## File: apps/client/app/_components/ui/slider.tsx
````typescript
 1: "use client"
 2: 
 3: 
 4: import * as React from "react"
 5: import * as SliderPrimitive from "@radix-ui/react-slider"
 6: 
 7: import { cn } from "@/app/_lib/utils"
 8: 
 9: const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(({ className, ...props }, ref) => (
10:   <SliderPrimitive.Root
11:     ref={ref}
12:     className={cn(
13:       "relative flex w-full touch-none select-none items-center",
14:       className
15:     )}
16:     {...props}
17:   >
18:     <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
19:       <SliderPrimitive.Range className="absolute h-full bg-primary" />
20:     </SliderPrimitive.Track>
21:     <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
22:   </SliderPrimitive.Root>
23: ))
24: Slider.displayName = SliderPrimitive.Root.displayName
25: 
26: export { Slider }
````

## File: apps/client/app/_components/ui/tabs.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as TabsPrimitive from "@radix-ui/react-tabs"
 5: 
 6: import { cn } from "@/app/_lib/utils"
 7: 
 8: const Tabs = TabsPrimitive.Root
 9: 
10: const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, ref) => (
11:   <TabsPrimitive.List
12:     ref={ref}
13:     className={cn(
14:       "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
15:       className
16:     )}
17:     {...props}
18:   />
19: ))
20: TabsList.displayName = TabsPrimitive.List.displayName
21: 
22: const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => (
23:   <TabsPrimitive.Trigger
24:     ref={ref}
25:     className={cn(
26:       "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
27:       className
28:     )}
29:     {...props}
30:   />
31: ))
32: TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
33: 
34: const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => (
35:   <TabsPrimitive.Content
36:     ref={ref}
37:     className={cn(
38:       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
39:       className
40:     )}
41:     {...props}
42:   />
43: ))
44: TabsContent.displayName = TabsPrimitive.Content.displayName
45: 
46: export { Tabs, TabsList, TabsTrigger, TabsContent }
````

## File: apps/client/app/_components/ui/textarea.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: import { cn } from "@/app/_lib/utils"
 4: 
 5: export interface TextareaProps
 6:   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
 7: 
 8: const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
 9:   ({ className, ...props }, ref) => {
10:     return (
11:       <textarea
12:         className={cn(
13:           "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
14:           className
15:         )}
16:         ref={ref}
17:         {...props}
18:       />
19:     )
20:   }
21: )
22: Textarea.displayName = "Textarea"
23: 
24: export { Textarea }
````

## File: apps/client/app/_components/ui/toaster.tsx
````typescript
 1: "use client"
 2: 
 3: import { useTheme } from "next-themes"
 4: import { Toaster as Sonner } from "sonner"
 5: 
 6: type ToasterProps = React.ComponentProps<typeof Sonner>
 7: 
 8: const Toaster = ({ ...props }: ToasterProps) => {
 9:   const { theme = "system" } = useTheme()
10:   console.log("ToasterProps",props)
11:   return (
12:     <Sonner
13: 
14:       className="toaster group"
15:       toastOptions={{
16:         classNames: {
17:           toast:
18:             "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
19:           description: "group-[.toast]:text-muted-foreground",
20:           actionButton:
21:             "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
22:           cancelButton:
23:             "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
24:             info: "group-[.toast]:bg-blue-600 group-[.toast]:text-white",
25:             success: "group-[.toast]:bg-green-600 group-[.toast]:text-white",
26:             error: "group-[.toast]:bg-red-600 group-[.toast]:text-white",
27:         },
28:       }}
29:       {...props}
30:     />
31:   )
32: }
33: 
34: export { Toaster }
````

## File: apps/client/app/_components/VideoPlayer.tsx
````typescript
 1: const VideoPlayer = ({
 2:   public_id = "mainVideo",
 3:   width = 640,
 4:   height = 360,
 5: }: {
 6:   public_id?: string;
 7:   width?: number;
 8:   height?: number;
 9: }) => {
10:   return (
11:     <div className="flex flex-col items-center justify-center mt-20 text-center text-gray-500">
12:       <iframe
13:         src={`https://player.cloudinary.com/embed/?cloud_name=dkzfz43wr&public_id=${public_id}&profile=malalang`}
14:         width={width}
15:         height={height}
16: 
17:         allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
18:         allowFullScreen
19:         frameBorder="0"
20:       ></iframe>
21:     </div>
22:   );
23: };
24: 
25: export default VideoPlayer;
````

## File: apps/client/app/_lib/actions.ts
````typescript
 1: 'use server';
 2: 
 3: 
 4: 
 5: 
 6: import { createClient, type Videos, type Video } from 'pexels';
 7: import { z } from 'zod';
 8: import type { ScriptSegment } from '@malalang/shared/types';
 9: const getBestVideoFile = (video: Video) => {
10: 
11:     const mp4File = video.video_files.find(f => (f.file_type as string) === 'video/mp4' && f.quality !== 'hls');
12:     if (mp4File) return mp4File;
13: 
14:     return video.video_files[0];
15: };
16: const generateScriptSchema = z.object({
17:   topic: z.string().min(3, 'Topic must be at least 3 characters long.'),
18: });
19: type GenerateScriptState = {
20:   message?: string | null;
21:   errors?: {
22:     topic?: string[] | undefined;
23:   } | null;
24:   segments?: ScriptSegment[] | null;
25: };
26: 
27: 
28: 
29: 
30: 
31: export async function generateCombinedAudioForSegmentsAction(segments: ScriptSegment[]): Promise<{combinedAudioUrl: string | null, timestampsUrl?: string | null, taskId?: string | null, error: string | null}> {
32:   try {
33: 
34:     const combinedText = segments.map(s => s.text.trim()).filter(Boolean).join('\n\n');
35:     if (!combinedText) {
36:       return { combinedAudioUrl: null, timestampsUrl: null, taskId: null, error: 'No text to synthesize' };
37:     }
38:     const UNREAL_API_KEY = process.env.UNREAL_API_KEY || 'sjQyafkkpLiAO0QprRuClqeoQIRfFNNP4E55DgDIB2xZYLKzUpavyy';
39:     const UNREAL_VOICE_ID = process.env.UNREAL_VOICE_ID || 'Sierra';
40:     const endpoint = 'https://api.v8.unrealspeech.com/speech';
41:     const body = {
42:       Text: combinedText,
43:       VoiceId: UNREAL_VOICE_ID,
44:       Bitrate: process.env.UNREAL_BITRATE || '192k',
45:       AudioFormat: 'mp3',
46:       OutputFormat: 'uri',
47:       TimestampType: 'sentence',
48:       sync: true,
49:     } as any;
50:     const resp = await fetch(endpoint, {
51:       method: 'POST',
52:       headers: {
53:         'Content-Type': 'application/json',
54:         Authorization: `Bearer ${UNREAL_API_KEY}`,
55:       },
56:       body: JSON.stringify(body),
57:     });
58:     const text = await resp.text();
59:     if (!resp.ok) {
60: 
61:       return { combinedAudioUrl: null, timestampsUrl: null, taskId: null, error: text || `UnrealSpeech error: ${resp.status}` };
62:     }
63:     let data: any = null;
64:     try {
65:       data = JSON.parse(text || '{}');
66:     } catch (e) {
67:       return { combinedAudioUrl: null, timestampsUrl: null, taskId: null, error: 'Invalid response from UnrealSpeech' };
68:     }
69: 
70:     const outputUri = data.OutputUri || data.audioUrl || null;
71:     const timestampsUri = data.TimestampsUri || data.timestampsUrl || null;
72:     const taskId = data.TaskId || null;
73:     return { combinedAudioUrl: outputUri, timestampsUrl: timestampsUri, taskId, error: null };
74:   } catch (e: any) {
75:     console.error('Failed to generate combined audio', e);
76:     return { combinedAudioUrl: null, timestampsUrl: null, taskId: null, error: e.message || 'Failed to generate combined audio' };
77:   }
78: }
````

## File: apps/client/app/_lib/aiSupport/ai/dev.ts
````typescript
1: import { config } from 'dotenv';
2: config();
3: import '@/app/_lib/aiSupport/ai/flows/generateVideoFlow';
4: import '@/app/_lib/aiSupport/ai/flows/enhanceAnswerFlow';
5: import '@/app/_lib/aiSupport/ai/flows/suggestAnswerFlow';
````

## File: apps/client/app/_lib/aiSupport/ai/flows/enhanceAnswerFlow.ts
````typescript
 1: 'use server";'
 2: import { z } from "genkit";
 3: import { ai } from "../genkit";
 4: 
 5: export const enhanceAnswerFlow = ai.defineFlow(
 6:   {
 7:     name: 'enhanceAnswerFlow',
 8:     inputSchema: z.object({
 9:       question: z.string(),
10:       answer: z.string(),
11:       businessName: z.string(),
12:       userName: z.string(),
13:     }),
14:     outputSchema: z.string(),
15:   },
16:   async ({ question, answer, businessName, userName }) => {
17:     const prompt = `As an expert copywriter, enhance the following answer for a questionnaire.
18:       The user's name is ${userName} and their business is called ${businessName}.
19:       Question: "${question}"
20:       User's Answer: "${answer}"
21:       Enhanced Answer:`;
22: 
23:     const llmResponse = await ai.generate({
24:       prompt: prompt,
25:       config: {
26:         temperature: 0.5,
27:       },
28:     });
29: 
30:     return llmResponse.text || answer;
31:   }
32: );
````

## File: apps/client/app/_lib/aiSupport/ai/flows/generateVideoFlow.ts
````typescript
 1: "use server";
 2: 
 3: import { ai } from "@malalang/ai";
 4: import { z } from "genkit";
 5: 
 6: 
 7: 
 8: const SegmentSchema = z.object({
 9:   text: z.string().describe("The text of the script segment."),
10:   videoSearchQuery: z
11:     .string()
12:     .describe(
13:       "A concise search query for a stock video that visually represents the segment text."
14:     ),
15: });
16: 
17: const InputSchema = z.object({
18:   topic: z
19:     .string()
20:     .describe("The topic for which to generate script segments."),
21: });
22: 
23: const OutputSchema = z.object({
24:   segments: z
25:     .array(SegmentSchema)
26:     .describe(
27:       "An array of script segments, each with text and a video search query."
28:     ),
29: });
30: 
31: 
32: const videoContentPrompt = ai.definePrompt({
33:   name: "videoContent",
34:   input: { schema: InputSchema },
35:   output: { schema: OutputSchema },
36:   prompt: `You are a script writer for video content.
37:   Generate a list of script segments based on the following topic:
38:   {{topic}}
39:   Each segment should be concise and focus on a specific subtopic.
40:   For each segment, also provide a short, effective search query (3-5 words) for finding a relevant stock video.
41:   Return the segments as a list of objects, each containing the text and the videoSearchQuery.
42:   `,
43: });
44: 
45: const generateVideoFlow = ai.defineFlow(
46:   {
47:     name: "generateVideoFlow",
48:     inputSchema: InputSchema,
49:     outputSchema: OutputSchema,
50:   },
51:   async (input) => {
52:     const { output } = await videoContentPrompt(input);
53:     return output!;
54:   }
55: );
56: 
57: 
58: 
59: 
60: export { generateVideoFlow };
````

## File: apps/client/app/_lib/aiSupport/ai/flows/suggestAnswerFlow.ts
````typescript
 1: "use server";
 2: import { z } from "genkit";
 3: import { ai } from "../genkit";
 4: 
 5: 
 6: 
 7: const SuggestAnswerInputSchema = z.object({
 8:   question: z.string(),
 9:   businessName: z.string(),
10:   userName: z.string(),
11: });
12: 
13: const SuggestAnswerOutputSchema = z.array(z.string());
14: 
15: 
16: 
17: const suggestAnswerPrompt = ai.definePrompt({
18:   name: "suggestAnswerPrompt",
19:   input: { schema: SuggestAnswerInputSchema },
20:   output: { schema: SuggestAnswerOutputSchema },
21:   prompt: `As an expert business consultant, suggest 3-5 concise and creative answers for the following questionnaire question.
22:     The user's name is {{userName}} and their business is called {{businessName}}.
23:     Question: "{{question}}"
24:     Suggestions (comma-separated):`,
25: });
26: 
27: 
28: 
29: export const suggestAnswerFlow = ai.defineFlow(
30:   {
31:     name: "suggestAnswerFlow",
32: 
33:     inputSchema: SuggestAnswerInputSchema,
34:     outputSchema: SuggestAnswerOutputSchema,
35:   },
36:   async (input) => {
37: 
38:     const { output } = await suggestAnswerPrompt(input);
39: 
40:     return output!;
41:   }
42: );
````

## File: apps/client/app/_lib/aiSupport/ai/genkit.ts
````typescript
1: import {genkit} from 'genkit';
2: import {googleAI} from '@genkit-ai/google-genai';
3: export const ai = genkit({
4:   plugins: [googleAI()],
5:   model: 'googleai/gemini-2.5-flash',
6: 
7: });
````

## File: apps/client/app/_lib/Cloudinary/config.ts
````typescript
 1: import { v2 as cloudinary } from "cloudinary";
 2: import "dotenv/config";
 3: 
 4: 
 5: cloudinary.config({
 6:   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
 7:   api_key: process.env.CLOUDINARY_API_KEY,
 8:   api_secret: process.env.CLOUDINARY_API_SECRET,
 9:   secure: true,
10: });
11: export { cloudinary };
````

## File: apps/client/app/_lib/Cloudinary/MainVideo/createFinalVideo.ts
````typescript
 1: import { ScriptSegment } from "@malalang/shared/types";
 2: import { cloudinaryFullSegmentAudio } from "../../unrealspeech/cloudinaryFullSegmentAudio";
 3: import { processfinalVideo } from "./processfinalVideo";
 4: import { processFullVideo } from "./processfulllVideo";
 5: import { processVideoSegments } from "./processVideoSegments";
 6: 
 7: export const createFinalVideo = async (segments: ScriptSegment[]) => {
 8:   try {
 9:     const uploadedAssets = await processVideoSegments(segments);
10: 
11:     const AudioID = await cloudinaryFullSegmentAudio(segments);
12: 
13:     const fullVideo = await processFullVideo(uploadedAssets);
14: 
15:     const finalVideo = await processfinalVideo({
16:       video: fullVideo,
17:       audio: AudioID,
18:     });
19: 
20: 
21:     console.log(
22:       "Final video process complete. URL is available on the returned object."
23:     );
24:     return finalVideo;
25:   } catch (error) {
26:     console.error("Error in createFinalVideo:", error);
27:     throw error;
28:   }
29: };
````

## File: apps/client/app/_lib/Cloudinary/MainVideo/getVideos.ts
````typescript
 1: import { cloudinary } from "../config";
 2: 
 3: export const getVideosByFolder = async (folder: string) => {
 4:   try {
 5:     const response = await cloudinary.api.resources_by_asset_folder(folder, {
 6:       resource_type: "video",
 7:       type: "upload",
 8:       tags: "final",
 9:       max_results: 500,
10:     });
11:     return response.resources.filter((video) => video.format === "mp4");
12:   } catch (error) {
13:     console.error("Error fetching videos from Cloudinary:", error);
14:     return [];
15:   }
16: };
````

## File: apps/client/app/_lib/Cloudinary/MainVideo/processfinalVideo.ts
````typescript
 1: import { UploadApiResponse } from "cloudinary";
 2: import { cloudinary } from "../config";
 3: 
 4: interface UploadedAsset {
 5:   video: UploadApiResponse;
 6:   audio: UploadApiResponse;
 7: }
 8: export const processfinalVideo = async ({ video, audio }: UploadedAsset) => {
 9:   try {
10:     const finalVideo = await cloudinary.uploader.upload(video.secure_url, {
11:       resource_type: "video",
12:       tags: "final",
13:       folder: "final_videos",
14:       auto_transcription: true,
15:       public_id: `final_video_${Date.now()}`,
16:       transformation: [
17:         {
18:           overlay: `video:${audio.public_id}`,
19:           flags: "layer_apply",
20:         },
21:         { effect: "vignette" },
22:       ],
23:       format: "mp4",
24:     });
25: 
26:     const Cleanup = await cloudinary.api.delete_resources_by_tag("raw", {
27:       resource_type: "video",
28:     });
29:     console.log("Cleanup of raw assets completed:", Cleanup);
30:     return finalVideo;
31:   } catch (error) {
32:     console.error("Error creating final video:", error);
33:     throw error;
34:   }
35: };
````

## File: apps/client/app/_lib/Cloudinary/MainVideo/processfulllVideo.ts
````typescript
 1: import { cloudinary } from "../config";
 2: 
 3: export const processFullVideo = async (
 4:   uploadedAssets: {
 5:     id: string;
 6:     uploadedAudioUrl: string;
 7:     uploadedVideoUrl: string;
 8:     videoPublic_id: string;
 9:     audioPublic_id: string;
10:   }[]
11: ) => {
12:   try {
13:     let concatTransformation = [];
14:     for (let i = 1; i < uploadedAssets.length; i++) {
15:       const asset = uploadedAssets[i];
16:       if (asset) {
17:         concatTransformation.push({
18:           overlay: `video:${asset.videoPublic_id}`,
19:           flags: "splice",
20:         });
21:       }
22:     }
23: 
24:     console.log("Final concatenation transformation:", concatTransformation);
25:     const finalPublicId = `final/video-full-${Date.now()}`;
26: 
27:     if (!uploadedAssets[0]) throw new Error("No assets uploaded");
28: 
29:     const fulllVideo = await cloudinary.uploader.upload(
30:       uploadedAssets[0].uploadedVideoUrl,
31:       {
32:         resource_type: "video",
33:         tags: "raw",
34:         auto_transcription: true,
35:         public_id: finalPublicId,
36:         transformation: concatTransformation,
37:         format: "mp4",
38:       }
39:     );
40:     console.log("Full video URL after concatenation:", fulllVideo.secure_url);
41: 
42:     return fulllVideo;
43:   } catch (error) {
44:     console.error("Error creating full video:", error);
45:     throw error;
46:   }
47: };
````

## File: apps/client/app/_lib/Cloudinary/MainVideo/processVideoSegments.ts
````typescript
 1: import { ScriptSegment } from "@malalang/shared/types";
 2: import { cloudinary } from "../config";
 3: 
 4: export const processVideoSegments = async (
 5:   segments: ScriptSegment[]
 6: ) => {
 7:   try {
 8: 
 9:     console.log("Uploading video segments to Cloudinary...");
10:      const uploadedAssets = await Promise.all(
11:       segments.map(async (seg) => {
12:         const audioUpload = await cloudinary.uploader.upload(seg.audioSrc, {
13:           resource_type: "video",
14:           public_id: `audio_${seg.id}`,
15:           tags: "raw",
16:         });
17: 
18: 
19: 
20:         const videoUpload = await cloudinary.uploader.upload(seg.visualSrc, {
21:           resource_type: "video",
22:           public_id: `video_${seg.id}`,
23:           tags: "raw",
24:           transformation: [
25:             { width: 1920, height: 1080, crop: "fill" },
26:             {
27:               overlay: {
28:                 text: seg.text,
29:                 font_family: "Roboto",
30:                 font_size: 50,
31:                 font_weight: "bold",
32:                 width: 750,
33:                 crop: "fit",
34:               },
35:               color: "#0F172A",
36:               y: 200,
37:               gravity: "south",
38:               width: 1000,
39:             },
40:             { duration: audioUpload.duration },
41:             { effect: "fade:1000" },
42:             { effect: "fade:-2000" },
43:           ],
44:         });
45:         return {
46:           id: seg.id,
47:           uploadedAudioUrl: audioUpload.secure_url,
48:           uploadedVideoUrl: videoUpload.secure_url,
49:           videoPublic_id: videoUpload.public_id,
50:           audioPublic_id: audioUpload.public_id,
51: 
52:         };
53:       })
54:     );
55:     console.log("All video segments uploaded:", uploadedAssets);
56: 
57:     return uploadedAssets;
58:   } catch (error) {
59:     console.error("Error processing video segments:", error);
60:     throw error;
61:   }
62: }
````

## File: apps/client/app/_lib/constants/about.tsx
````typescript
  1: import React from 'react';
  2: import { AUTHORS } from './blog';
  3: import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaUser, FaImage, FaVectorSquare, FaVideo, FaFilm } from 'react-icons/fa';
  4: import { SiNextdotjs, SiSupabase } from 'react-icons/si';
  5: import { PiMicrosoftExcelLogo, PiMicrosoftPowerpointLogo, PiMicrosoftWordLogo } from 'react-icons/pi';
  6: import type { Value, Difference, TeamMember, MalalangProject } from '@malalang/shared/types';
  7: 
  8: export const values: Value[] = [
  9:   {
 10:     icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
 11:     title: 'Trust First',
 12:     description: "Our 'no deposit' policy is the cornerstone of our business. We build your website first, ensuring you are 100% happy before any payment is made. Your success is our success.",
 13:   },
 14:   {
 15:     icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
 16:     title: 'Local Partnership',
 17:     description: "We're not just a service provider; we're your local partner in Phalaborwa. We believe in face-to-face meetings and a collaborative process to truly understand your business.",
 18:   },
 19:   {
 20:     icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
 21:     title: 'Uncompromising Quality',
 22:     description: 'We are committed to delivering modern, high-performance, and visually appealing websites that are not just beautiful, but also effective tools for business growth.',
 23:   },
 24:    {
 25:     icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 017.743-5.743z" /></svg>,
 26:     title: 'Genuine Accessibility',
 27:     description: 'We demystify the web development process. Our goal is to make professional websites accessible and affordable for every small business in our community.',
 28:   },
 29: ];
 30: 
 31: export const malalangDifference: Difference[] = [
 32:     {
 33:         icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 21a12.02 12.02 0 009-8.056c.32-1.178.524-2.41.524-3.676 0-3.322-1.34-6.32-3.524-8.516z" /></svg>,
 34:         title: "Risk-Free Model",
 35:         description: "We reverse the financial risk completely. You see your finished website and are 100% satisfied before paying a cent. Our success is directly tied to your happiness."
 36:     },
 37:     {
 38:         icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
 39:         title: "Hyper-Local Partnership",
 40:         description: "We're part of the Phalaborwa community. We meet you face-to-face to understand your business and the local market in a way no remote agency ever could."
 41:     },
 42:     {
 43:         icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
 44:         title: "Simplicity & Clarity",
 45:         description: "We provide a jargon-free, guided process with simple, fixed-price packages. No hidden fees, no technical headaches—just a professional website that works."
 46:     }
 47: ];
 48: 
 49: export const teamMembers: TeamMember[] = [
 50:   {
 51:     ...(AUTHORS.find(a => a.id === 'abram-ntsako') || {
 52:       id: 'abram-ntsako',
 53:       name: 'Abram Ntsako',
 54:       imageUrl: '/assets/profile.jpg',
 55:       bio: 'A Phalaborwa native and a student of Industrial Engineering at Vaal University of Technology, Abram Elton Ntsako Nyathi is a passionate entrepreneur with a diverse skillset. He founded Malalang Pty Ltd to empower local businesses with the digital tools they need to succeed. With expertise in a wide range of technologies, from web development (HTML, CSS, JavaScript, React, Next.js) to design (Photoshop, Illustrator, After Effects), Abram is a hands-on leader who is committed to delivering high-quality, affordable websites. His passion for problem-solving, honed through his engineering studies and love for chess, is evident in his meticulous approach to every project. Abram’s vision is to bridge the gap between local businesses and the digital world, one website at a time.',
 56:       avatarUrl: '/assets/profile.jpg',
 57:     }),
 58:     title: 'Founder & Managing Director',
 59:     imageUrl: '/assets/profile.jpg',
 60:     bio: 'A Phalaborwa native and a student of Industrial Engineering at Vaal University of Technology, Abram Elton Ntsako Nyathi is a passionate entrepreneur with a diverse skillset. He founded Malalang Pty Ltd to empower local businesses with the digital tools they need to succeed. With expertise in a wide range of technologies, from web development (HTML, CSS, JavaScript, React, Next.js) to design (Photoshop, Illustrator, After Effects), Abram is a hands-on leader who is committed to delivering high-quality, affordable websites. His passion for problem-solving, honed through his engineering studies and love for chess, is evident in his meticulous approach to every project. Abram’s vision is to bridge the gap between local businesses and the digital world, one website at a time.',
 61:     skills: [
 62:       { name: 'HTML', icon: <FaHtml5 /> },
 63:       { name: 'CSS', icon: <FaCss3 /> },
 64:       { name: 'JavaScript', icon: <FaJs /> },
 65:       { name: 'React.js', icon: <FaReact /> },
 66:       { name: 'Next.js', icon: <SiNextdotjs /> },
 67:       { name: 'Supabase', icon: <SiSupabase /> },
 68:       { name: 'Photoshop', icon: <FaImage /> },
 69:       { name: 'Illustrator', icon: <FaVectorSquare /> },
 70:       { name: 'After Effects', icon: <FaVideo /> },
 71:       { name: 'Fusion 360', icon: <FaFigma /> },
 72:       { name: 'Word', icon: <PiMicrosoftWordLogo /> },
 73:       { name: 'Excel', icon: <PiMicrosoftExcelLogo /> },
 74:       { name: 'PowerPoint', icon: <PiMicrosoftPowerpointLogo /> },
 75:       { name: 'Premiere Pro', icon: <FaFilm /> },
 76:     ],
 77:     contacts: [
 78:       { name: 'phone', value: '079-113-8480', icon: <FaPhone /> },
 79:       { name: 'whatsapp', value: '079-113-8480', icon: <FaWhatsapp /> },
 80:       { name: 'facebook', value: 'Abram Nyathi', link: 'https://www.facebook.com/abram.nyathi.1/', icon: <FaFacebook /> },
 81:       { name: 'instagram', value: '@drchrisntsako', link: 'https://www.instagram.com/drchrisntsako/', icon: <FaInstagram /> },
 82:       { name: 'twitter', value: '@NtsakoDr', link: 'https://twitter.com/NtsakoDr', icon: <FaTwitter /> },
 83:       { name: 'linkedin', value: '@abram-elton-ntsako', link: 'https://www.linkedin.com/in/abram-elton-ntsako/', icon: <FaLinkedin /> },
 84:       { name: 'github', value: '@AEN-Nyathi', link: 'https://github.com/AEN-Nyathi', icon: <FaGithub /> },
 85:       { name: 'portfolio', value: 'abrameltonntsako.web.app', link: 'https://abrameltonntsako.web.app/', icon: <FaUser /> },
 86:       { name: 'email', value: 'drchrsntsako@gmail.com', icon: <FaEnvelope /> },
 87:       { name: 'address', value: 'limpopo, Phalaborwa, lulekani, tututu street 235B', icon: <FaMapMarkerAlt /> },
 88:     ]
 89:   },
 90:   {
 91:     id: 'agreement-mongwe',
 92:     name: 'Agreement Mongwe Assistant',
 93:     title: 'Operations',
 94:     imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
 95:     bio: 'Will handle administrative tasks, scheduling, and lead follow-up to streamline our operations.',
 96:     avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
 97:     skills: [
 98:       { name: 'Word', icon: <PiMicrosoftWordLogo /> },
 99:       { name: 'Excel', icon: <PiMicrosoftExcelLogo /> },
100:       { name: 'PowerPoint', icon: <PiMicrosoftPowerpointLogo /> },
101:     ],
102:     contacts: [
103:       { name: 'phone', value: '079-113-8480', icon: <FaPhone /> },
104:       { name: 'whatsapp', value: '079-113-8480', icon: <FaWhatsapp /> }]
105:   },
106: 
107: ];
108: 
109: export const projects: MalalangProject[] = [
110:     {
111:         id: 'letshuntcrypto',
112:         name: "Let’s Hunt Crypto",
113:         description: "Let’s Hunt Crypto offers a comprehensive analysis of the cryptocurrency market. Besides monitoring price, volume, and market capitalization, it also tracks community growth, learning development, events, and family engagement.",
114:         image: "/assets/letshuntcrypto_Logo.png",
115:         link: "https://letshuntcrypto.web.app/"
116:     },
117:     {
118:         id: 'worldclub',
119:         name: "World Club",
120:         description: "The World Club is an innovative savings scheme that leverages a hierarchical structure to maximize savings and earnings. Members join by paying a small fee and can recruit up to four new members, earning interest as their network grows.",
121:         image: "/assets/worldclub_Logo.png",
122:         link: "https://world-club.web.app/About"
123:     },
124:     {
125:         id: 'sallysigma',
126:         name: "Sally Sigma",
127:         description: "Discover unforgettable destinations and seamless Service with Sally M Travels & Tours. Specializing in group travel experiences across Southern Africa.",
128:         image: "/assets/Sally_Logo.jpg",
129:         link: "https://sally-omega.vercel.app/"
130:     },
131:     {
132:         id: 'vuxaka',
133:         name: "Vuxaka",
134:         description: "Vuxaka is a compassionate catering service that provides dignified and respectful culinary experiences for funerals and memorial services.",
135:         image: "/assets/vuxaka_Logo.png",
136:         link: "https://vuxaka.vercel.app/"
137:     },
138:     {
139:         id: 'centraleatery',
140:         name: "Central Eatery",
141:         description: "Experience the unique convenience of delicious food and a state-of-the-art car wash, all in one place in Lulekani.",
142:         image: "/assets/central_eatery_Logo.png",
143:         link: "https://central-eatery.vercel.app/about"
144:     },
145:     {
146:         id: 'lethokuhle',
147:         name: "Lethokuhle",
148:         description: "Nurturing Minds, Elevating Grades: Affordable After-School Care with a Heart.",
149:         image: "/assets/lethokuhle_Logo.png",
150:         link: "https://lethokuhle.vercel.app/"
151:     },
152:     {
153:         id: 'bilacert',
154:         name: "Bilacert",
155:         description: "Bilacert is a platform for creating and managing digital certificates.",
156:         image: "/assets/bilacert_Logo.jpg",
157:         link: "https://bilacert.co.za/"
158:     },
159:     {
160:         id: 'bilacore',
161:         name: "Bila Core Petroleums",
162:         description: "Your trusted diesel & lubricants partner in Limpopo, delivering excellence through innovation.",
163:         image: "/assets/BILACORE_LOGO.jpg",
164:         link: "https://www.bilacorepetroleums.co.za/"
165:     },
166:     {
167:         id: 'daybyday',
168:         name: "Day by Day with God",
169:         description: "Day by Day with God Care Center is a nurturing and faith-based environment for children's growth and development.",
170:         image: "/assets/daybyday_Logo.png",
171:         link: "https://day-by-day-with-god.web.app/"
172:     }
173: ]
````

## File: apps/client/app/_lib/constants/blog.tsx
````typescript
 1: import React from "react";
 2: import type { BlogPost, Author } from "@malalang/shared/types";
 3: import { getBlogPostsWithAuthors } from "@malalang/shared/services/blogs";
 4: 
 5: export const AUTHORS: Author[] = [
 6:   {
 7:     id: "abram-ntsako",
 8:     name: "Abram Ntsako",
 9:     imageUrl:
10:       "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDEyfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzI0NTU2ODUwfDA&ixlib=rb-4.0.3&q=80&w=200",
11:     bio: "Abram Ntsako is the founder of Malalang Pty Ltd, a web development studio dedicated to empowering local businesses in Phalaborwa. With a passion for clean code and user-centric design, he helps SMEs build a strong online presence without breaking the bank.",
12:     avatarUrl: "/assets/profile.jpg",
13:   },
14: ];
15: 
16: const { posts } = await getBlogPostsWithAuthors();
17: export const BLOG_POSTS: BlogPost[] = posts;
````

## File: apps/client/app/_lib/constants/faqs.ts
````typescript
 1: import type { FaqItem } from '@malalang/shared/types';
 2: 
 3: export const FAQ_ITEMS: FaqItem[] = [
 4:     {
 5:         question: "Why don't you require a deposit?",
 6:         answer: "Our 'no deposit' policy is the foundation of our business. We believe in building trust first. We're confident in the quality of our work and want to remove any financial risk for you, our client. You only pay when you are 100% happy with the website."
 7:     },
 8:     {
 9:         question: "How long does it take to build a website?",
10:         answer: "A standard 5-page website typically takes 1 to 2 weeks from our initial meeting to launch. E-commerce sites or more complex projects may take longer. We'll provide a clear timeline in our proposal."
11:     },
12:     {
13:         question: "Do I need to buy a domain and hosting first?",
14:         answer: "No, you don't need to worry about that initially. We develop your site on a private staging link. You will only need to purchase your domain name (e.g., yourbusiness.com) right before we launch the site. We can guide you through this process and handle the technical setup for you."
15:     },
16:     {
17:         question: "What happens after the website is launched?",
18:         answer: "Once launched, the website is fully yours. We transfer all ownership and access to you. We then recommend our 'Complete Launch Pack' to boost your new site's visibility, and our affordable 'Web Care Plan' for ongoing maintenance, security, and support."
19:     }
20: ];
````

## File: apps/client/app/_lib/constants/portfolio.ts
````typescript
 1: import type { PortfolioItem } from '@malalang/shared/types';
 2: 
 3: export const PORTFOLIO_ITEMS: PortfolioItem[] = [
 4:   {
 5:     title: "Let’s Hunt Crypto",
 6:     description: "Let’s Hunt Crypto offers a comprehensive analysis of the cryptocurrency market. Besides monitoring price, volume, and market capitalization, it also tracks community growth, learning development, events, and family engagement.",
 7:     imageUrl: "/assets/letshuntcrypto_Logo.png",
 8:     category: "Crypto Analysis"
 9:   },
10:   {
11:     title: "World Club",
12:     description: "The World Club is an innovative savings scheme that leverages a hierarchical structure to maximize savings and earnings. Members join by paying a small fee and can recruit up to four new members, earning interest as their network grows.",
13:     imageUrl: "/assets/worldclub_Logo.png",
14:     category: "Savings Scheme"
15:   },
16:   {
17:     title: "Sally Sigma",
18:     description: "Discover unforgettable destinations and seamless Service with Sally M Travels & Tours. Specializing in group travel experiences across Southern Africa.",
19:     imageUrl: "/assets/Sally_Logo.jpg",
20:     category: "Travel & Tours"
21:   },
22:   {
23:     title: "Vuxaka",
24:     description: "Vuxaka is a compassionate catering service that provides dignified and respectful culinary experiences for funerals and memorial services.",
25:     imageUrl: "/assets/vuxaka_Logo.png",
26:     category: "Catering Services"
27:   }
28: ];
````

## File: apps/client/app/_lib/constants/process.tsx
````typescript
 1: import React from 'react';
 2: import type { ProcessStep } from '@malalang/shared/types';
 3: 
 4: const ProcessStepIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
 5:     <div className="flex items-center justify-center w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-full ring-8 ring-background">
 6:         {children}
 7:     </div>
 8: );
 9: 
10: export const PROCESS_STEPS: ProcessStep[] = [
11:     { step: 1, title: 'Intake & Agreement', description: 'We start with a face-to-face meeting to understand your needs. A simple WhatsApp confirmation is all we need to begin—no deposit required.', icon: <ProcessStepIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002 2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></ProcessStepIcon> },
12:     { step: 2, title: 'Development', description: 'We build your website on a private staging link (e.g., yourname.vercel.app), so you can watch the progress live.', icon: <ProcessStepIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></ProcessStepIcon> },
13:     { step: 3, title: 'Review & Feedback', description: 'You review the site and provide feedback. We include up to two rounds of revisions to get everything just right.', icon: <ProcessStepIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></ProcessStepIcon> },
14:     { step: 4, title: 'Launch & Handover', description: 'After a final face-to-face sign-off, we handle all the technical details to launch your site. Payment is only due now.', icon: <ProcessStepIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></ProcessStepIcon> },
15:     { step: 5, title: 'Upsell & Support', description: 'We present our "Complete Launch Pack" to boost your online presence from day one and offer ongoing support.', icon: <ProcessStepIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></ProcessStepIcon> }
16: ];
````

## File: apps/client/app/_lib/constants/site.ts
````typescript
 1: export const WHATSAPP_LINK = "https://wa.me/27622840835";
 2: export const WHATSAPP_NUMBER = "27622840835";
 3: 
 4: 
 5: export const SITE_URL = "https://malalang.co.za";
 6: export const SITE_NAME = "Malalang";
 7: export const SITE_DESCRIPTION = "Professional web design and digital services for businesses in Phalaborwa. We create stunning, fast, and affordable websites to help you grow your business.";
 8: 
 9: 
10: export const TWITTER_HANDLE = "@malalang_za";
11: export const TWITTER_CREATOR = "@malalang_za";
12: 
13: 
14: export const OG_IMAGE_DEFAULT = "/opengraph-image";
15: export const OG_IMAGE_SERVICES = "/services/opengraph-image";
````

## File: apps/client/app/_lib/constants/testimonials.ts
````typescript
 1: import type { Testimonial } from '@malalang/shared/types';
 2: 
 3: export const TESTIMONIALS: Testimonial[] = [
 4:     {
 5:         quote: "Malalang Pty Ltd delivered a fantastic website that exceeded our expectations. The no-deposit model gave us complete peace of mind. Highly recommended for any local business!",
 6:         author: "Mr Salvation",
 7:         company: "Sally M Travels & Tours"
 8:     },
 9:     {
10:         quote: "The process was so simple and transparent. Abram was a pleasure to work with, always listening to our needs and delivering quality work. Our online presence has never been stronger.",
11:         author: "Vuxaka Catering",
12:         company: "Vuxaka Catering Services"
13:     },
14:     {
15:         quote: "Finally, a web developer who understands the challenges of small businesses in Phalaborwa. The face-to-face meetings made all the difference. We're thrilled with the final product.",
16:         author: "Mr Molapo",
17:         company: "Central Eatery"
18:     }
19: ];
````

## File: apps/client/app/_lib/data.ts
````typescript
 1: import { unstable_cache } from 'next/cache';
 2: import {
 3:   getServices,
 4:   getServiceCategories
 5: } from '@malalang/shared/services/services';
 6: import {
 7:   getFaqs,
 8:   getTestimonials,
 9:   getPortfolioItems
10: } from '@malalang/shared/services/content';
11: import {
12:   getBlogBySlug,
13:   getBlogPostsWithAuthors
14: } from '@malalang/shared/services/blogs';
15: 
16: 
17: 
18: 
19: 
20: 
21: 
22: 
23: export const getCachedServices = unstable_cache(
24:   async () => getServices(),
25:   ['all-services-hub-cache-key'],
26:   { tags: ['services-list-tag'] }
27: );
28: 
29: export const getCachedServiceCategories = unstable_cache(
30:   async () => getServiceCategories(),
31:   ['all-categories-cache-key'],
32:   { tags: ['categories-cache-tag'] }
33: );
34: 
35: export const getCachedFaqs = unstable_cache(
36:   async () => getFaqs(),
37:   ['all-faqs-cache-key'],
38:   { tags: ['faqs-cache-tag'] }
39: );
40: 
41: export const getCachedTestimonials = unstable_cache(
42:   async () => getTestimonials(),
43:   ['all-testimonials-cache-key'],
44:   { tags: ['testimonials-cache-tag'] }
45: );
46: 
47: export const getCachedPortfolioItems = unstable_cache(
48:   async () => getPortfolioItems(),
49:   ['all-portfolio-cache-key'],
50:   { tags: ['portfolio-cache-tag'] }
51: );
52: 
53: export const getCachedBlogBySlug = (slug: string) => unstable_cache(
54:   async () => getBlogBySlug(slug),
55:   ['single-blog-post-cache-key', slug],
56:   { tags: ['blogs-list-tag', `blog-detail-${slug}`] }
57: )();
58: 
59: export const getCachedBlogs = unstable_cache(
60:   async () => getBlogPostsWithAuthors(),
61:   ['all-blog-posts-cache-key'],
62:   { tags: ['blogs-list-tag'] }
63: );
````

## File: apps/client/app/_lib/og-image-utils.tsx
````typescript
  1: import { ImageResponse } from 'next/og';
  2: import { SITE_URL } from '@/app/_lib/constants/site';
  3: 
  4: export const size = { width: 1200, height: 630 };
  5: export const contentType = 'image/png';
  6: 
  7: 
  8: const colors = {
  9:   primary: '#00d26a',
 10:   secondary: '#00b4d8',
 11:   dark: '#0b1220',
 12:   darker: '#0a0f1c',
 13:   white: '#ffffff',
 14:   gray: '#64748b',
 15:   blue: '#3B82F6',
 16:   lightBlue: '#93C5FD',
 17: };
 18: 
 19: 
 20: interface BaseOGImageProps {
 21:   title: string;
 22:   titleSecondary?: string;
 23:   description?: string;
 24:   logo?: boolean;
 25:   imageUrl?: string;
 26:   backgroundColor?: string;
 27:   textColor?: string;
 28:   customSize?: { width: number; height: number };
 29: }
 30: 
 31: 
 32: function optimizeImageUrl(url: string) {
 33:   if (!url) return url;
 34: 
 35: 
 36:   if (url.includes('cloudinary.com')) {
 37:     if (url.includes('/upload/')) {
 38:       return url.replace('/upload/', '/upload/w_1200,h_630,c_fill,q_auto,f_jpg/');
 39:     }
 40:   }
 41: 
 42: 
 43:   if (url.includes('images.unsplash.com')) {
 44:     try {
 45:       const u = new URL(url);
 46:       u.searchParams.set('w', '1200');
 47:       u.searchParams.set('h', '630');
 48:       u.searchParams.set('fit', 'crop');
 49:       u.searchParams.set('q', '80');
 50:       u.searchParams.set('fm', 'jpg');
 51: 
 52:       u.searchParams.delete('crop');
 53:       return u.toString();
 54:     } catch (e) {
 55: 
 56:       const baseUrl = url.split('?')[0];
 57:       return `${baseUrl}?w=1200&h=630&fit=crop&q=80&fm=jpg`;
 58:     }
 59:   }
 60: 
 61:   return url;
 62: }
 63: 
 64: export async function createOGImage({
 65:   title,
 66:   titleSecondary,
 67:   description,
 68:   logo = true,
 69:   imageUrl,
 70:   backgroundColor = colors.dark,
 71:   textColor = colors.white,
 72:   customSize,
 73: }: BaseOGImageProps) {
 74:   const finalSize = customSize || size;
 75:   const optimizedBg = imageUrl ? optimizeImageUrl(imageUrl) : null;
 76: 
 77:   return new ImageResponse(
 78:     (
 79:       <div
 80:         style={{
 81:           width: '100%',
 82:           height: '100%',
 83:           display: 'flex',
 84:           flexDirection: 'column',
 85:           alignItems: 'center',
 86:           justifyContent: 'center',
 87:           background: backgroundColor,
 88:           fontFamily: 'sans-serif',
 89:           padding: 60,
 90:           position: 'relative',
 91:           overflow: 'hidden',
 92:         }}
 93:       >
 94:         {}
 95:         {optimizedBg && (
 96:           <img
 97:             src={optimizedBg}
 98:             style={{
 99:               position: 'absolute',
100:               top: 0,
101:               left: 0,
102:               width: '100%',
103:               height: '100%',
104:               objectFit: 'cover',
105:             }}
106:             alt=""
107:           />
108:         )}
109: 
110:         {/* Dark overlay for background image */}
111:         {imageUrl && (
112:           <div
113:             style={{
114:               position: 'absolute',
115:               top: 0,
116:               left: 0,
117:               right: 0,
118:               bottom: 0,
119:               background: 'rgba(11, 18, 32, 0.85)',
120:             }}
121:           />
122:         )}
123: 
124:         {/* Hero-style Radial glow center - Simplified when image is present to reduce file size */}
125:         {!imageUrl && (
126:           <div
127:             style={{
128:               position: 'absolute',
129:               top: 0,
130:               left: 0,
131:               right: 0,
132:               bottom: 0,
133:               background: 'radial-gradient(ellipse at center, rgba(0, 210, 106, 0.15) 0%, transparent 70%)',
134:             }}
135:           />
136:         )}
137: 
138:         {/* Hero-style Radial glow bottom left - Simplified when image is present */}
139:         {!imageUrl && (
140:           <div
141:             style={{
142:               position: 'absolute',
143:               top: '60%',
144:               left: '10%',
145:               width: '80%',
146:               height: '80%',
147:               background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
148:             }}
149:           />
150:         )}
151: 
152:         {/* Circuit-style decorative lines - Removed when image is present to reduce complexity/size */}
153:         {!imageUrl && (
154:           <>
155:             <div
156:               style={{
157:                 position: 'absolute',
158:                 top: '30%',
159:                 left: 0,
160:                 right: 0,
161:                 height: '1px',
162:                 background: 'rgba(0, 210, 106, 0.1)',
163:                 borderTop: '1px dashed rgba(0, 210, 106, 0.2)',
164:               }}
165:             />
166:             <div
167:               style={{
168:                 position: 'absolute',
169:                 top: '70%',
170:                 left: 0,
171:                 right: 0,
172:                 height: '1px',
173:                 background: 'rgba(59, 130, 246, 0.1)',
174:                 borderTop: '1px dashed rgba(59, 130, 246, 0.2)',
175:               }}
176:             />
177:           </>
178:         )}
179: 
180:         {/* Logo and Company Name Header */}
181:         <div
182:           style={{
183:             position: 'absolute',
184:             top: 40,
185:             left: 60,
186:             display: 'flex',
187:             alignItems: 'center',
188:           }}
189:         >
190:           {logo && (
191:             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', marginRight: 15 }}>
192:               <img
193:                 src={`${SITE_URL}/logo.png`}
194:                 width="80"
195:                 height="80"
196:                 style={{
197:                   objectFit: 'contain',
198:                 }}
199:                 alt="Malalang Logo"
200:               />
201:             </div>
202:           )}
203:           <div style={{ display: 'flex', flexDirection: 'column' }}>
204:             <span style={{ color: colors.white, fontSize: 24, fontWeight: 900, letterSpacing: '1px' }}>MALALANG</span>
205:             <span style={{ color: colors.primary, fontSize: 12, fontWeight: 'bold', letterSpacing: '3px' }}>PTY LTD</span>
206:           </div>
207:         </div>
208: 
209:         {}
210:         <div
211:           style={{
212:             display: 'flex',
213:             flexDirection: 'column',
214:             alignItems: 'center',
215:             justifyContent: 'center',
216:             textAlign: 'center',
217:             zIndex: 1,
218:             maxWidth: '90%',
219:             marginTop: 80,
220:           }}
221:         >
222:           {}
223:           <div
224:             style={{
225:               display: 'flex',
226:               gap: 10,
227:               marginBottom: 30,
228:             }}
229:           >
230:             <div style={{ background: 'rgba(0, 210, 106, 0.1)', border: '1px solid rgba(0, 210, 106, 0.3)', color: colors.primary, padding: '4px 12px', borderRadius: 20, fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
231:               Digital Solutions
232:             </div>
233:             <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', color: colors.lightBlue, padding: '4px 12px', borderRadius: 20, fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
234:               Built for Growth
235:             </div>
236:           </div>
237: 
238:           {}
239:           <div
240:             style={{
241:               fontSize: title.length > 50 ? 54 : 72,
242:               fontWeight: 900,
243:               color: textColor,
244:               textAlign: 'center',
245:               lineHeight: 1.1,
246:               marginBottom: 10,
247:               display: 'flex',
248:               flexDirection: 'column',
249:               alignItems: 'center',
250:             }}
251:           >
252:             <span>{title}</span>
253:             {titleSecondary && (
254:               <span style={{ color: colors.primary, marginTop: 5 }}>{titleSecondary}</span>
255:             )}
256:           </div>
257: 
258:           {}
259:           {description && (
260:             <div
261:               style={{
262:                 fontSize: 28,
263:                 color: colors.lightBlue,
264:                 fontWeight: 600,
265:                 marginTop: 10,
266:                 textAlign: 'center',
267:                 lineHeight: 1.4,
268:                 maxWidth: '80%',
269:               }}
270:             >
271:               {description}
272:             </div>
273:           )}
274:         </div>
275: 
276:         {}
277:         <div
278:           style={{
279:             position: 'absolute',
280:             bottom: 40,
281:             display: 'flex',
282:             gap: 20,
283:             fontSize: 14,
284:             color: colors.gray,
285:             fontWeight: 'bold',
286:             textTransform: 'uppercase',
287:             letterSpacing: '2px',
288:           }}
289:         >
290:           <div style={{ display: 'flex', alignItems: 'center' }}>
291:             <span style={{ color: colors.primary, marginRight: 8 }}>✓</span> Local Expertise
292:           </div>
293:           <div style={{ display: 'flex', alignItems: 'center' }}>
294:             <span style={{ color: colors.primary, marginRight: 8 }}>✓</span> Modern Design
295:           </div>
296:           <div style={{ display: 'flex', alignItems: 'center' }}>
297:             <span style={{ color: colors.primary, marginRight: 8 }}>✓</span> Phalaborwa-based
298:           </div>
299:         </div>
300:       </div>
301:     ),
302:     {
303:       ...finalSize,
304:     }
305:   );
306: }
````

## File: apps/client/app/_lib/pexels/pexels.ts
````typescript
  1: "use server";
  2: import { createClient, Video } from "pexels";
  3: import { z } from "zod";
  4: 
  5: const pexelsClient = createClient(
  6:   "NhEmLCtLjsAqQNN6QRpJGrRRJ5wGUE5FbaFy0Hl829i9ooV6yC9362SN"
  7: );
  8: 
  9: export const getVideo = async ({ query }: { query: string }) => {
 10:   try {
 11:     const videoSearch = await pexelsClient.videos.search({
 12:       query,
 13:       per_page: 1,
 14:     });
 15: 
 16: 
 17: 
 18:     if (
 19:       !("error" in videoSearch) &&
 20:       videoSearch.videos &&
 21:       videoSearch.videos.length > 0
 22:     ) {
 23: 
 24:       const randomIndexvideoSearch = Math.floor(
 25:         Math.random() * videoSearch.videos.length
 26:       );
 27:       const firstVideo = videoSearch.videos[randomIndexvideoSearch];
 28: 
 29:       if (!firstVideo) return;
 30: 
 31: 
 32:       const mp4File = firstVideo.video_files.filter(
 33:         (f: any) =>
 34:           (f.file_type as string) === "video/mp4" && f.quality !== "hls"
 35:       );
 36: 
 37:       if (mp4File) {
 38:         const randomIndexMp4File = Math.floor(
 39:           Math.random() * videoSearch.videos.length
 40:         );
 41: 
 42:         return mp4File[randomIndexMp4File];
 43:       }
 44:     }
 45:   } catch (e) {
 46:     console.error("Pexels lookup failed", e);
 47:   }
 48: };
 49: export const getVideos = async ({ query }: { query: string }) => {
 50:   try {
 51:     const videoSearch = await pexelsClient.videos.search({
 52:       query,
 53:       per_page: 10,
 54:     });
 55: 
 56: 
 57: 
 58:     if (
 59:       !("error" in videoSearch) &&
 60:       videoSearch.videos &&
 61:       videoSearch.videos.length > 0
 62:     ) {
 63: 
 64:       const randomIndexvideoSearch = Math.floor(
 65:         Math.random() * videoSearch.videos.length
 66:       );
 67:       const firstVideo = videoSearch.videos[randomIndexvideoSearch];
 68: 
 69:       if (!firstVideo) return;
 70: 
 71: 
 72:       const mp4File = firstVideo.video_files.filter(
 73:         (f) => (f.file_type as string) === "video/mp4" && f.quality !== "hls"
 74:       );
 75: 
 76:       return mp4File;
 77:     }
 78:   } catch (e) {
 79:     console.error("Pexels lookup failed", e);
 80:   }
 81: };
 82: const searchPexelsSchema = z.object({
 83:   prompt: z.string().min(1, "Prompt must be at least 3 characters long."),
 84: });
 85: export async function searchPexelsVideosAction(prompt: string) {
 86:   try {
 87:     const validatedFields = searchPexelsSchema.safeParse({ prompt });
 88:     if (!validatedFields.success) {
 89:       return { success: false, videos: null, error: "Invalid prompt." };
 90:     }
 91: 
 92:     const response = await pexelsClient.videos.search({
 93:       query: validatedFields.data.prompt,
 94:       per_page: 10,
 95:     });
 96:     if ("error" in response) {
 97:       throw new Error(response.error);
 98:     }
 99:     return { success: true, videos: response.videos, error: null };
100:   } catch (e: any) {
101:     console.error(e);
102:     return {
103:       success: false,
104:       videos: null,
105:       error: e.message || "Failed to search for videos.",
106:     };
107:   }
108: }
````

## File: apps/client/app/_lib/unrealspeech/cloudinaryFullSegmentAudio.ts
````typescript
 1: import { cloudinary } from "../Cloudinary/config";
 2: import { ScriptSegment } from "@malalang/shared/types";
 3: import { getAudioUrl } from "./unrealspeech";
 4: 
 5: export const cloudinaryFullSegmentAudio = async (segments: ScriptSegment[]) => {
 6: 
 7:   const allText = segments.map((segment) => segment.text);
 8:   const audioUrlPromise = await getAudioUrl(allText.join(" "));
 9: 
10:   const audioUpload = await cloudinary.uploader.upload(audioUrlPromise, {
11:     resource_type: "video",
12:     public_id: `audio-full-${Date.now()}`,
13:     tags: "raw",
14:   });
15: 
16:   return audioUpload;
17: };
````

## File: apps/client/app/_lib/unrealspeech/unrealspeech.ts
````typescript
 1: export const getAudioUrl = async (text: string): Promise<string> => {
 2:   const UNREAL_API_KEY = process.env.UNREAL_API_KEY || "";
 3:   if (!UNREAL_API_KEY) {
 4:     throw new Error("UnrealSpeech API key missing");
 5:   }
 6: 
 7:   const endpoint = "https://api.v8.unrealspeech.com/speech";
 8: 
 9:   const bodyPayload = {
10:     Text: text,
11:     VoiceId: "Sierra",
12:     Bitrate: "320k",
13:     AudioFormat: "mp3",
14:     OutputFormat: "uri",
15:     TimestampType: "sentence",
16:     sync: false,
17:   };
18: 
19:   try {
20:     const resp = await fetch(endpoint, {
21:       method: "POST",
22:       headers: {
23:         "Content-Type": "application/json",
24:         Authorization: `Bearer ${UNREAL_API_KEY}`,
25:       },
26:       body: JSON.stringify(bodyPayload),
27:     });
28: 
29:     if (!resp.ok) {
30:       const errorText = await resp.text();
31:       throw new Error(`UnrealSpeech failed: ${resp.status} ${errorText}`);
32:     }
33: 
34:     const data = await resp.json();
35:     const audioUrl: string = data?.OutputUri || data?.audioUrl || null;
36: 
37:     if (!audioUrl) {
38:       throw new Error("Failed to generate audio.");
39:     }
40: 
41:     return audioUrl;
42:   } catch (err) {
43:     throw new Error(`UnrealSpeech failed: ${err} `);
44:   }
45: };
````

## File: apps/client/app/_lib/utils.ts
````typescript
1: import { type ClassValue, clsx } from "clsx"
2: import { twMerge } from "tailwind-merge"
3: 
4: export function cn(...inputs: ClassValue[]) {
5:   return twMerge(clsx(inputs))
6: }
````

## File: apps/client/app/_lib/validation.ts
````typescript
 1: import { z } from 'zod';
 2: 
 3: export const bookingFormSchema = z.object({
 4:     userName: z.string().min(1, { message: 'Full name is required' }),
 5:     email: z.string().email({ message: 'Invalid email address' }),
 6:     phone: z.string().min(9, { message: 'Phone number must be a valid 9-digit South African number' }),
 7:     businessName: z.string().optional(),
 8:     meetingType: z.string(),
 9:     meetingLocation: z.string().optional(),
10:     officeLocation: z.string().optional(),
11:     preferredDate: z.string().optional(),
12:     preferredTime: z.string().optional(),
13:     servicePackage: z.string(),
14:     additionalNotes: z.string().optional(),
15: });
16: 
17: export const websiteBlueprintSchema = z.object({
18:     business_name: z.string().min(1, { message: 'Business name is required' }),
19:     business_summary: z.string().min(1, { message: 'Business summary is required' }),
20:     target_audience: z.string().min(1, { message: 'Target audience is required' }),
21: });
````

## File: apps/client/app/about/components/AboutHero.tsx
````typescript
 1: import Link from "next/link";
 2: import React from "react";
 3: import HeroBackground from "@/app/_components/HeroBackground";
 4: import { Button } from "@/app/_components/ui/button";
 5: 
 6: const AboutHero: React.FC = () => {
 7:   return (
 8:     <section className="circuit-bg relative overflow-hidden py-32 md:py-48 text-center">
 9:       <HeroBackground />
10: 
11:       <div className="container mx-auto px-6 relative z-10">
12:         {}
13:         <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
14:           <span className="code-chip">TypeScript</span>
15:           <span className="code-chip code-chip-blue">Next.js</span>
16:           <span className="code-chip">React 19</span>
17:         </div>
18: 
19:         <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
20:           We Build Digital Experiences
21:           <br />
22:           <span className="text-brand-primary glow-green">That Drive Results</span>
23:         </h1>
24: 
25:         <p className="text-xl md:text-2xl text-blue-300 font-semibold max-w-3xl mx-auto mb-10">
26:           A team of passionate developers and designers dedicated to
27:           helping businesses succeed in the digital world.
28:         </p>
29: 
30:         <div className="flex flex-col sm:flex-row justify-center gap-4">
31:           <Link href="/contact" passHref className="w-full sm:w-auto">
32:             <Button
33:               size="lg"
34:               className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 bg-brand-primary hover:bg-brand-primary/85 text-brand-dark font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(0,210,106,0.5)]"
35:             >
36:               Let's Work Together
37:             </Button>
38:           </Link>
39: 
40:           <Link href="/services" passHref className="w-full sm:w-auto">
41:             <Button
42:               variant="outline"
43:               size="lg"
44:               className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
45:             >
46:               View Our Services
47:             </Button>
48:           </Link>
49:         </div>
50:       </div>
51:     </section>
52:   );
53: };
54: 
55: export default AboutHero;
````

## File: apps/client/app/about/components/FeaturedProjects.tsx
````typescript
 1: import React from 'react';
 2: import { projects } from '@/app/_lib/constants/about';
 3: import Image from 'next/image';
 4: import { ArrowRight } from 'lucide-react';
 5: import type { MalalangProject } from '@malalang/shared/types';
 6: 
 7: const FeaturedProjects: React.FC = () => {
 8:   return (
 9:     <section className="py-20 md:py-28 bg-background">
10:       <div className="container mx-auto px-6">
11:           <div className="text-center mb-16">
12:               <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Our Work in Action</h2>
13:               <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">Take a look at some of the solutions we've delivered for local businesses in Phalaborwa and beyond.</p>
14:           </div>
15:           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
16:               {projects.map((project: MalalangProject) => (
17:                 <div key={project.id} className="bg-slate-900 rounded-2xl shadow-lg hover:shadow-brand-primary/10 transition-all duration-500 overflow-hidden border border-slate-800 hover:border-brand-primary/50 group flex flex-col">
18:                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="block flex-grow">
19:                     <div className="relative h-56 w-full bg-white overflow-hidden">
20:                         <Image
21:                             src={project.image}
22:                             alt={project.name}
23:                             fill
24:                             className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
25:                         />
26:                         <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
27:                     </div>
28:                     <div className="p-8">
29:                         <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{project.name}</h3>
30:                         <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
31:                         <span className="font-bold text-brand-primary flex items-center group-hover:translate-x-2 transition-transform duration-300">
32:                             View Live Project <ArrowRight className="ml-2 h-5 w-5" />
33:                         </span>
34:                     </div>
35:                   </a>
36:                 </div>
37:               ))}
38:           </div>
39:       </div>
40:     </section>
41:   );
42: };
43: 
44: export default FeaturedProjects;
````

## File: apps/client/app/about/components/OurCoreValues.tsx
````typescript
 1: import React from 'react';
 2: import { values } from '@/app/_lib/constants/about';
 3: import type { Value } from '@malalang/shared/types';
 4: 
 5: const OurCoreValues: React.FC = () => {
 6:   return (
 7:     <section className="py-20 bg-slate-900">
 8:       <div className="container mx-auto px-6">
 9:         <div className="text-center mb-12">
10:           <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h2>
11:           <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
12:             These principles are the promises we make to every client. They guide every decision we make.
13:           </p>
14:         </div>
15: 
16:         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
17:           {values.map((value: Value) => (
18:             <div key={value.title} className="bg-slate-900 p-6 rounded-lg text-center transform transition duration-500 hover:-translate-y-2 hover:bg-slate-800">
19:               <div className="text-brand-primary inline-block p-4 bg-brand-primary/10 rounded-full mb-4">
20:                 {value.icon}
21:               </div>
22:               <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
23:               <p className="text-slate-400">{value.description}</p>
24:             </div>
25:           ))}
26:         </div>
27:       </div>
28:     </section>
29:   );
30: };
31: 
32: export default OurCoreValues;
````

## File: apps/client/app/about/components/OurProcess.tsx
````typescript
 1: import React from 'react';
 2: import Image from 'next/image';
 3: import { PROCESS_STEPS } from '@/app/_lib/constants/process';
 4: 
 5: const OurProcess: React.FC = () => {
 6:   return (
 7:     <section id="process" className="py-20 md:py-28 bg-background">
 8:       <div className="container mx-auto px-6">
 9:         <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
10:           <div className="lg:w-1/2">
11:             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Our Client-Friendly Process</h2>
12:             <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
13:               A structured, transparent journey from idea to launch. We guide you every step of the way, ensuring your vision is brought to life with precision and care.
14:             </p>
15:             <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
16:               <Image
17:                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
18:                 alt="Our collaborative process"
19:                 fill
20:                 className="object-cover"
21:               />
22:               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
23:             </div>
24:           </div>
25: 
26:           <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
27:             {PROCESS_STEPS.map((step) => (
28:               <div
29:                 key={step.step}
30:                 className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-900 border border-slate-800 hover:border-brand-primary/30 group"
31:               >
32:                 <div className="flex items-center justify-center h-14 w-14 mb-5 bg-brand-primary/10 text-brand-primary rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
33:                   {step.icon}
34:                 </div>
35:                 <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
36:                 <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
37:               </div>
38:             ))}
39:           </div>
40:         </div>
41:       </div>
42:     </section>
43:   );
44: };
45: 
46: export default OurProcess;
````

## File: apps/client/app/about/components/OurTeam.tsx
````typescript
 1: import React from 'react';
 2: import { teamMembers } from '@/app/_lib/constants/about';
 3: import Image from 'next/image';
 4: import type { TeamMemberSkill, TeamMemberContact } from '@malalang/shared/types';
 5: 
 6: const OurTeam: React.FC = () => {
 7:   return (
 8:     <section className="py-20 bg-slate-900">
 9:       <div className="container mx-auto px-6">
10:         <div className="text-center mb-16">
11:           <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Our Team</h2>
12:           <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
13:             The people dedicated to bringing your digital vision to life.
14:           </p>
15:         </div>
16:         <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
17:           {teamMembers.map((member) => (
18:             <div key={member.name} className="bg-background rounded-lg p-6 text-center border border-slate-800 transform transition duration-500 hover:-translate-y-2 hover:border-brand-primary/50">
19:               <Image
20:                 src={member.imageUrl}
21:                 alt={`Photo of ${member.name}`}
22:                 width={128}
23:                 height={128}
24:                 className="w-32 h-32 rounded-full object-cover mx-auto mb-4 ring-4 ring-slate-700"
25:               />
26:               <h3 className="text-2xl font-bold text-white">{member.name}</h3>
27:               <p className="text-brand-primary font-semibold mb-3">{member.title}</p>
28:               <p className="text-slate-400">{member.bio}</p>
29: 
30:                 <div className="mt-4">
31:                   <h4 className="text-xl font-bold text-white mb-2">Skills</h4>
32:                   <div className="flex flex-wrap justify-center">
33:                     {member.skills.map((skill: TeamMemberSkill) => (
34:                       <span key={skill.name} className="bg-slate-700 text-slate-300 px-2 py-1 rounded-md text-sm m-1 flex items-center">
35:                         {skill.icon} <span className="ml-2">{skill.name}</span>
36:                       </span>
37:                     ))}
38:                   </div>
39:                 </div>
40: 
41: 
42:                   <div className="mt-4">
43:                       <h4 className="text-xl font-bold text-white mb-2">Contact</h4>
44:                       <div className="flex flex-wrap justify-center">
45:                           {member.contacts.map((contact: TeamMemberContact) => (
46:                               <a href={contact.link || (contact.name === 'email' ? `mailto:${contact.value}` : `tel:${contact.value}`)} key={contact.name} className="bg-slate-700 text-slate-300 px-2 py-1 rounded-md text-sm m-1 flex items-center">
47:                                 {contact.icon} <span className="ml-2">{contact.name}: {contact.value}</span>
48:                               </a>
49:                           ))}
50:                       </div>
51:                   </div>
52: 
53:             </div>
54:           ))}
55:         </div>
56:       </div>
57:     </section>
58:   );
59: };
60: 
61: export default OurTeam;
````

## File: apps/client/app/about/components/TheMalalangDifference.tsx
````typescript
 1: import React from 'react';
 2: import { malalangDifference } from '@/app/_lib/constants/about';
 3: import type { Difference } from '@malalang/shared/types';
 4: 
 5: const TheMalalangDifference: React.FC = () => {
 6:   return (
 7:     <section className="py-20 md:py-28 bg-background">
 8:       <div className="container mx-auto px-6">
 9:           <div className="text-center mb-16">
10:               <h2 className="text-3xl md:text-4xl font-bold text-white">The Malalang Difference</h2>
11:               <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">What sets us apart from DIY builders and distant agencies.</p>
12:           </div>
13:           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
14:               {malalangDifference.map((item: Difference) => (
15:                   <div
16:                     key={item.title}
17:                     className="bg-slate-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-700"
18:                   >
19:                       <div className="flex items-center justify-center h-16 w-16 mb-6 bg-brand-secondary/10 text-brand-secondary rounded-full">
20:                           {item.icon}
21:                       </div>
22:                       <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
23:                       <p className="text-slate-400 leading-relaxed">{item.description}</p>
24:                   </div>
25:               ))}
26:           </div>
27:       </div>
28:     </section>
29:   );
30: };
31: 
32: export default TheMalalangDifference;
````

## File: apps/client/app/about/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'About Malalang';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Phalaborwa\'s Trusted',
12:     titleSecondary: 'Digital Architects',
13:     description: 'We combine world-class technology with deep local understanding.',
14:     logo: true,
15:   });
16: }
````

## File: apps/client/app/api/generate-script/route.ts
````typescript
 1: import { NextResponse } from "next/server";
 2: import { z } from "zod";
 3: import { generateVideoFlow } from "@malalang/ai";
 4: import { createClient } from "pexels";
 5: import type { ScriptSegment } from "@malalang/shared/types";
 6: import { getVideo } from "@/app/_lib/pexels/pexels";
 7: import { getAudioUrl } from "@/app/_lib/unrealspeech/unrealspeech";
 8: 
 9: const schema = z.object({ topic: z.string().min(3) });
10: 
11: const getBestVideoFile = (video: any) => {
12:   const mp4File = video.video_files.find(
13:     (f: any) => (f.file_type as string) === "video/mp4" && f.quality !== "hls"
14:   );
15:   if (mp4File) return mp4File;
16:   return video.video_files[0];
17: };
18: 
19: export async function POST(req: Request) {
20:   try {
21:     const body = await req.json();
22:     const parsed = schema.safeParse(body);
23:     if (!parsed.success) {
24:       return NextResponse.json(
25:         { success: false, error: "Invalid topic" },
26:         { status: 400 }
27:       );
28:     }
29: 
30:     const result = await generateVideoFlow({ topic: parsed.data.topic });
31: 
32:     const newSegments: ScriptSegment[] = await Promise.all(
33:       result.segments.map(async (segment: any, index: number) => {
34:         let visualSrc: string | null = null;
35:         let audioSrc: string | null = null;
36:         let initialDuration = Math.ceil(segment.text.length / 15) || 3;
37: 
38: 
39:         const videoFilePromise = getVideo({ query: segment.videoSearchQuery });
40: 
41: 
42: 
43:         const audioUrlPromise = getAudioUrl(segment.text);
44: 
45: 
46:         const [videoFile, audioUrl] = await Promise.all([
47:           videoFilePromise,
48:           audioUrlPromise,
49:         ]);
50: 
51:         if (videoFile) {
52:           visualSrc = videoFile.link;
53:         }
54: 
55:         if (audioUrl) {
56:           audioSrc = audioUrl;
57:         }
58: 
59:         return {
60:           id: `new-seg-${Date.now()}-${index}`,
61:           text: segment.text,
62:           visualSrc,
63:           audioSrc,
64:           duration: initialDuration,
65:           videoSearchQuery: segment.videoSearchQuery,
66:         } as ScriptSegment;
67:       })
68:     );
69: 
70:     return NextResponse.json({ success: true, segments: newSegments });
71:   } catch (e: any) {
72:     console.error(e);
73:     return NextResponse.json(
74:       { success: false, error: e.message || "Failed to generate script" },
75:       { status: 500 }
76:     );
77:   }
78: }
````

## File: apps/client/app/api/questionnaire/route.ts
````typescript
 1: import { enhanceAnswerFlow } from "@malalang/ai";
 2: import { suggestAnswerFlow } from "@malalang/ai";
 3: import { NextRequest, NextResponse } from "next/server";
 4: 
 5: const corsHeaders = {
 6:   "Access-Control-Allow-Origin": "*",
 7:   "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
 8:   "Access-Control-Allow-Headers": "Content-Type, Authorization",
 9: };
10: 
11: export async function OPTIONS(req: NextRequest) {
12:   return new Response(null, {
13:     status: 204,
14:     headers: corsHeaders,
15:   });
16: }
17: 
18: export async function POST(req: NextRequest) {
19:   const body = await req.json();
20:   const { action, payload } = body;
21: 
22:   if (!action || !payload) {
23:     return NextResponse.json(
24:       { error: "Invalid request" },
25:       { status: 400, headers: corsHeaders }
26:     );
27:   }
28: 
29:   try {
30:     if (action === "enhance") {
31:       const enhancedAnswer = await enhanceAnswerFlow(payload);
32:       return NextResponse.json(
33:         { result: enhancedAnswer },
34:         { headers: corsHeaders }
35:       );
36:     } else if (action === "suggest") {
37:       const suggestions = await suggestAnswerFlow(payload);
38:       return NextResponse.json(
39:         { result: suggestions },
40:         { headers: corsHeaders }
41:       );
42:     }
43: 
44:     return NextResponse.json(
45:       { error: "Invalid action" },
46:       { status: 400, headers: corsHeaders }
47:     );
48:   } catch (error) {
49:     console.error(`Error in ${action} action:`, error);
50:     return NextResponse.json(
51:       { error: "An error occurred on the server." },
52:       { status: 500, headers: corsHeaders }
53:     );
54:   }
55: }
````

## File: apps/client/app/api/revalidate/route.ts
````typescript
 1: import { revalidateTag, revalidatePath } from 'next/cache';
 2: import { NextRequest, NextResponse } from 'next/server';
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: export async function POST(request: NextRequest) {
14:   const secret = process.env.REVALIDATION_WEBHOOK_SECRET;
15: 
16:   if (!secret) {
17:     console.error('[Revalidate] secret not configured');
18:     return NextResponse.json({ message: 'Revalidation secret not configured' }, { status: 500 });
19:   }
20: 
21: 
22:   const authHeader = request.headers.get('authorization');
23:   const queryToken = request.nextUrl.searchParams.get('token');
24: 
25:   if (authHeader !== `Bearer ${secret}` && queryToken !== secret) {
26:     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
27:   }
28: 
29:   try {
30: 
31:     let tag = request.nextUrl.searchParams.get('tag');
32:     let path = request.nextUrl.searchParams.get('path');
33:     let modeParam = request.nextUrl.searchParams.get('mode');
34: 
35:     if (!tag && !path) {
36:       const body = await request.json().catch(() => ({}));
37:       tag = body.tag;
38:       path = body.path;
39:       modeParam = modeParam || body.mode;
40:     }
41: 
42: 
43: 
44:     const mode = modeParam === 'immediate' ? { expire: 0 } : 'max';
45: 
46:     if (tag) {
47:       console.log(`[Revalidate] Purging tag: ${tag} with mode: ${JSON.stringify(mode)}`);
48: 
49:       revalidateTag(tag, mode as any);
50:     }
51: 
52:     if (path) {
53:       console.log(`[Revalidate] Purging path: ${path}`);
54:       revalidatePath(path);
55:     }
56: 
57:     return NextResponse.json({
58:       revalidated: true,
59:       tag: tag || null,
60:       path: path || null,
61:       strategy: mode === 'max' ? 'swr' : 'immediate',
62:       now: Date.now()
63:     });
64:   } catch (err: any) {
65:     console.error(`[Revalidate] Error: ${err.message}`);
66:     return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
67:   }
68: }
````

## File: apps/client/app/api/sign-image/route.ts
````typescript
 1: import { cloudinary } from "@/app/_lib/Cloudinary/config";
 2: import { NextResponse } from "next/server";
 3: 
 4: export async function POST(request: Request) {
 5:   const { paramsToSign } = await request.json();
 6:   const apiSecret = process.env.CLOUDINARY_API_SECRET;
 7: 
 8:   if (!apiSecret) {
 9:     console.error("Error: CLOUDINARY_API_SECRET is not set.");
10:     return NextResponse.json(
11:       { error: "Internal server error: Missing configuration." },
12:       { status: 500 }
13:     );
14:   }
15: 
16:   try {
17:     const signature = cloudinary.utils.api_sign_request(
18:       paramsToSign,
19:       apiSecret
20:     );
21:     return NextResponse.json({ signature });
22:   } catch (error) {
23:     console.error("Error signing upload:", error);
24:     return NextResponse.json(
25:       { error: "Failed to sign upload" },
26:       { status: 500 }
27:     );
28:   }
29: }
````

## File: apps/client/app/api/video/route.ts
````typescript
 1: import { NextResponse } from "next/server";
 2: import type { ScriptSegment } from "@malalang/shared/types";
 3: import { createFinalVideo } from "@/app/_lib/Cloudinary/MainVideo/createFinalVideo";
 4: 
 5: export async function POST(request: Request) {
 6:   try {
 7:     const body = await request.json();
 8:     const segments: ScriptSegment[] = body.segments;
 9: 
10:     if (!segments || !Array.isArray(segments) || segments.length === 0) {
11:       return NextResponse.json(
12:         { error: "No segments provided." },
13:         { status: 400 }
14:       );
15:     }
16: 
17: 
18:     for (const segment of segments) {
19:       if (!segment.audioSrc || !segment.visualSrc || !segment.text) {
20:         return NextResponse.json(
21:           { error: `Incomplete segment data. Segment with text "${segment.text.substring(0, 20)}..." is missing a value.` },
22:           { status: 400 }
23:         );
24:       }
25:     }
26: 
27:     console.log("Received segments for video generation:", segments);
28:     console.log("API Route called: Triggering MediaFlows...");
29: 
30:     const response = await createFinalVideo(segments);
31: 
32: 
33:     console.log("MediaFlows Complete: Video generation succeeded.", response);
34:     console.log("Final video URL:", response);
35:     return NextResponse.json({ response: response  }, { status: 200 });
36:   } catch (e) {
37:     console.error("Video Generation API Failed:", e);
38: 
39:     let errorMessage =
40:       "Video generation failed due to an internal server error.";
41:     if (e instanceof Error) {
42:       errorMessage = e.message;
43:     } else if (typeof e === "string") {
44:       errorMessage = e;
45:     }
46: 
47:     return NextResponse.json(
48:       { error: `Video Generation Failed: ${errorMessage}` },
49:       { status: 500 }
50:     );
51:   }
52: }
````

## File: apps/client/app/blog/[slug]/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: import { getBlogBySlug } from '@malalang/shared/services/blogs';
 4: 
 5: export const alt = 'Malalang Blog Post';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: interface BlogOGImageProps {
10:   params: Promise<{ slug: string }>;
11: }
12: 
13: export default async function Image({ params }: BlogOGImageProps) {
14:   const { slug } = await params;
15: 
16:   try {
17:     const post = await getBlogBySlug(slug);
18: 
19:     if (!post) {
20: 
21:       return createOGImage({
22:         title: 'Malalang Blog',
23:         description: 'Web design insights and digital marketing tips',
24:         logo: true,
25:         customSize: size,
26:       });
27:     }
28: 
29: 
30:     const displayTitle = post.title.length > 60 ? post.title.substring(0, 57) + '...' : post.title;
31:     const displayExcerpt = post.excerpt.length > 120 ? post.excerpt.substring(0, 117) + '...' : post.excerpt;
32: 
33:     return createOGImage({
34:       title: displayTitle,
35:       description: displayExcerpt,
36:       logo: true,
37:       imageUrl: post.imageUrl,
38:       customSize: size,
39:     });
40:   } catch (error) {
41:     console.error('Error generating blog OG image:', error);
42: 
43:     return createOGImage({
44:       title: 'Malalang Blog',
45:       description: 'Web design insights and digital marketing tips',
46:       logo: true,
47:       customSize: size,
48:     });
49:   }
50: }
````

## File: apps/client/app/blog/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const alt = 'Malalang Blog';
 5: export const size = { width: 1200, height: 630 };
 6: export const contentType = 'image/png';
 7: 
 8: export default async function Image() {
 9:   return createOGImage({
10:     title: 'The Malalang Blog',
11:     description: 'Insights, tutorials, and stories on web development and design for local businesses.',
12:     logo: true,
13:   });
14: }
````

## File: apps/client/app/bookings/layout.tsx
````typescript
 1: import { Metadata } from 'next';
 2: import { OG_IMAGE_DEFAULT, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 3: 
 4: export const metadata: Metadata = {
 5:   title: 'Book Your Web Design Project - Malalang',
 6:   description: 'Schedule your web design project with Malalang. No deposit required. Pay only when you\'re completely satisfied with your new website.',
 7:   keywords: ['web design booking', 'book web designer', 'website design service', 'Phalaborwa'],
 8:   alternates: {
 9:     canonical: `${SITE_URL}/bookings`,
10:   },
11:   robots: {
12:     index: true,
13:     follow: true,
14:   },
15:   openGraph: {
16:     title: 'Book Your Web Design Project - Malalang',
17:     description: 'Schedule your web design project with Malalang. No deposit required. Pay only when you\'re completely satisfied.',
18:     url: `${SITE_URL}/bookings`,
19:     type: 'website',
20:     images: [
21:       {
22:         url: OG_IMAGE_DEFAULT,
23:         width: 1200,
24:         height: 630,
25:         alt: 'Book Your Web Design Project',
26:       },
27:     ],
28:   },
29:   twitter: {
30:     card: 'summary_large_image',
31:     title: 'Book Your Web Design Project - Malalang',
32:     description: 'No deposit. Pay on completion. Schedule your project today.',
33:     images: [OG_IMAGE_DEFAULT],
34:     creator: TWITTER_CREATOR,
35:   },
36: };
37: 
38: export default function BookingsLayout({
39:   children,
40: }: {
41:   children: React.ReactNode;
42: }) {
43:   return children;
44: }
````

## File: apps/client/app/bookings/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'Book with Malalang';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Book a Consultation',
12:     description: 'Schedule a meeting with our web design and digital marketing experts',
13:     logo: true,
14:   });
15: }
````

## File: apps/client/app/bookings/page.tsx
````typescript
 1: 'use client';
 2: 
 3: import React from 'react';
 4: import { SERVICE_PACKAGES } from '@/app/_lib/constants/services';
 5: 
 6: import BookingForm from '@/app/services/website-design/[service]/[bookings]/components/BookingForm';
 7: 
 8: import HeroBackground from '@/app/_components/HeroBackground';
 9: 
10: const StandaloneBookingPage: React.FC = () => {
11: 
12:   const defaultService = SERVICE_PACKAGES[0];
13: 
14:   if (!defaultService) {
15:     return <p>Error: No services configured.</p>;
16:   }
17: 
18:   return (
19:     <main>
20:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
21:         <HeroBackground />
22:         <div className="container mx-auto px-6 relative z-10">
23:           <div className="text-center mb-12">
24:             <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
25:               Book Your <span className="text-brand-primary glow-green">Project</span>
26:             </h1>
27:             <p className="text-xl text-blue-300 font-semibold max-w-3xl mx-auto">
28:               Schedule your first meeting. Let's discuss your vision and goals.
29:             </p>
30:           </div>
31:         </div>
32:       </section>
33: 
34:       <div className="container mx-auto px-6 py-12 md:py-20">
35:         {}
36:         <BookingForm service={defaultService} />
37:       </div>
38:     </main>
39:   );
40: };
41: 
42: export default StandaloneBookingPage;
````

## File: apps/client/app/contact/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'Contact Malalang';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Contact Malalang',
12:     description: 'Get in touch with us for your web design and digital marketing needs',
13:     logo: true,
14:   });
15: }
````

## File: apps/client/app/contact/page.tsx
````typescript
  1: import React from 'react';
  2: import { Metadata } from 'next';
  3: import { OG_IMAGE_DEFAULT, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
  4: import ContactForm from '@/app/contact/components/ContactForm';
  5: import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/app/_lib/constants/site';
  6: 
  7: export const metadata: Metadata = {
  8:   title: 'Contact Malalang - Web Design in Phalaborwa',
  9:   description: 'Contact Malalang for a free consultation on your web design project. We are a local web design company in Phalaborwa, ready to help your business succeed online. Reach out via our contact form, email, or WhatsApp.',
 10:   keywords: 'contact malalang, web design consultation, phalaborwa web designer, free quote',
 11:   alternates: {
 12:     canonical: `${SITE_URL}/contact`,
 13:   },
 14:   robots: {
 15:     index: true,
 16:     follow: true,
 17:   },
 18:   openGraph: {
 19:     title: 'Contact Malalang - Get Your Free Consultation',
 20:     description: 'Ready to grow your business? Contact Malalang for a free web design consultation in Phalaborwa.',
 21:     url: `${SITE_URL}/contact`,
 22:     type: 'website',
 23:     images: [
 24:       {
 25:         url: OG_IMAGE_DEFAULT,
 26:         width: 1200,
 27:         height: 630,
 28:         alt: 'Contact Malalang',
 29:       },
 30:     ],
 31:   },
 32:   twitter: {
 33:     card: 'summary_large_image',
 34:     title: 'Contact Malalang - Free Consultation',
 35:     description: 'Ready to grow your business? Contact us for a free web design consultation.',
 36:     images: [OG_IMAGE_DEFAULT],
 37:     creator: TWITTER_CREATOR,
 38:   },
 39: };
 40: 
 41: import HeroBackground from '@/app/_components/HeroBackground';
 42: 
 43: const ContactPage: React.FC = () => {
 44:   return (
 45:     <>
 46:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center" aria-labelledby="contact-heading">
 47:         <HeroBackground />
 48:         <div className="container mx-auto px-6 relative z-10">
 49:           <div className="text-center mb-12">
 50:             <h1 id="contact-heading" className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
 51:               Get in <span className="text-brand-primary glow-green">Touch</span>
 52:             </h1>
 53:             <p className="text-xl text-blue-300 font-semibold max-w-2xl mx-auto">
 54:               We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
 55:             </p>
 56:           </div>
 57: 
 58:           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
 59:             <div className="bg-background p-8 rounded-lg border border-slate-800">
 60:               <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
 61:               <div className="space-y-4 text-slate-300">
 62:                 <div className="flex items-start">
 63:                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
 64:                   <div>
 65:                     <h3 className="font-semibold text-white">Our Location</h3>
 66:                     <p className="text-slate-300">Phalaborwa, 1390, Limpopo</p>
 67:                     <p className="text-slate-300">South Africa</p>
 68:                   </div>
 69:                 </div>
 70:                  <div className="flex items-start">
 71:                     <svg className="w-6 h-6 mr-4 mt-1 text-brand-primary flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.3-8.8-98.1-25.4l-7-4.2-72.5 19.1 19.4-70.6-4.6-7.4c-18.7-29.9-28.7-65.4-28.7-102.1 0-108.7 88.4-197.1 197.1-197.1 53.3 0 104.1 20.8 142.3 58.9 38.2 38.2 58.9 89 58.9 142.3 0 108.7-88.4 197.1-197.1 197.1zm105.9-161.5c-5.9-3-35.1-17.3-40.6-19.3s-9.7-3-13.7 3c-4 6-15.4 19.3-18.9 23.3-3.5 4-7 4.5-13 1.5-6-3-25.3-9.3-48.1-29.6-17.8-15.8-29.8-35.3-33.3-41.3s-.3-9.3 2.7-12.3c2.7-2.7 5.9-7 8.9-10.5 3-3.5 4-5.9 6-9.9s3-6 1.5-11.4c-1.5-5.4-13.7-33.1-18.8-45.3-5.1-12.2-10.2-10.5-13.7-10.7-3.3-.2-7.2-.2-11.2-.2-4 0-10.7 1.5-16.2 7.5-5.6 6-21.5 21-21.5 51.3s22 59.5 25 63.5c3 4 43.1 65.6 105.2 93.2 14.9 6.9 28.6 11.1 38.5 14.1 16.4 5.1 31.4 4.4 43.2 2.7 12.9-1.9 39.8-16.3 45.4-32.1 5.6-15.8 5.6-29.2 3.9-32.1-1.7-2.9-5.7-4.5-11.7-7.5z"/></svg>
 72:                    <div>
 73:                     <h3 className="font-semibold text-white">WhatsApp</h3>
 74:                     <a
 75:                       href={WHATSAPP_LINK}
 76:                       target="_blank"
 77:                       rel="noopener noreferrer"
 78:                       className="text-slate-300 hover:text-brand-primary transition-colors duration-300 focus:outline-none focus:underline"
 79:                       aria-label="Contact us on WhatsApp - Opens in a new window"
 80:                     >
 81:                       {WHATSAPP_NUMBER}
 82:                     </a>
 83:                   </div>
 84:                 </div>
 85:                 <div className="flex items-start">
 86:                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
 87:                   <div>
 88:                     <h3 className="font-semibold text-white">Email Us</h3>
 89:                     <a
 90:                       href="mailto:info@malalang.co.za"
 91:                       className="text-slate-300 hover:text-brand-primary transition-colors duration-300 focus:outline-none focus:underline"
 92:                     >
 93:                       info@malalang.co.za
 94:                     </a>
 95:                   </div>
 96:                 </div>
 97:               </div>
 98:             </div>
 99:             <div>
100:               <ContactForm />
101:             </div>
102:           </div>
103:         </div>
104:       </section>
105:     </>
106:   );
107: };
108: 
109: export default ContactPage;
````

## File: apps/client/app/email-setup/EmailSetupClient.tsx
````typescript
  1: "use client";
  2: 
  3: import React, { useState } from 'react';
  4: import { Mail, Globe, Cloud, Repeat, CheckCircle, ExternalLink, Lock, Send, Inbox, ShieldCheck, Copy, Check } from 'lucide-react';
  5: import HeroBackground from '@/app/_components/HeroBackground';
  6: 
  7: const SECRET_LINK = "https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp";
  8: 
  9: const StepCard = ({ number, title, icon: Icon, children }: { number: number, title: string, icon: any, children: React.ReactNode }) => (
 10:   <section className="bg-brand-steel/30 border border-brand-primary/10 rounded-2xl p-8 mb-8 hover:border-brand-primary/30 transition-all">
 11:     <div className="flex items-center gap-4 mb-6">
 12:       <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/20 text-brand-primary font-bold text-xl border border-brand-primary/30">
 13:         {number}
 14:       </div>
 15:       <div className="flex items-center gap-3">
 16:         <Icon className="w-6 h-6 text-brand-primary" />
 17:         <h2 className="text-2xl font-semibold text-white">{title}</h2>
 18:       </div>
 19:     </div>
 20:     <div className="text-slate-300 space-y-4">
 21:       {children}
 22:     </div>
 23:     <div className="mt-8 bg-slate-800/50 aspect-video rounded-xl border border-slate-700 flex items-center justify-center text-slate-500 italic">
 24:       <div className="flex flex-col items-center gap-2">
 25:         <span>Image Placeholder: {title}</span>
 26:         <span className="text-sm">(Coming soon)</span>
 27:       </div>
 28:     </div>
 29:   </section>
 30: );
 31: 
 32: const EmailSetupClient = () => {
 33:   const [copied, setCopied] = useState(false);
 34: 
 35:   const copyToClipboard = () => {
 36:     navigator.clipboard.writeText(SECRET_LINK);
 37:     setCopied(true);
 38:     setTimeout(() => setCopied(false), 2000);
 39:   };
 40: 
 41:   return (
 42:     <main className="min-h-screen bg-brand-dark">
 43:       {}
 44:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
 45:         <HeroBackground />
 46:         <div className="container mx-auto px-6 relative z-10">
 47:           <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-2xl mb-6 border border-brand-primary/20">
 48:             <Mail className="w-10 h-10 text-brand-primary" />
 49:           </div>
 50:           <p className="text-brand-primary font-mono text-sm mb-3 tracking-widest uppercase">Tutorial Guide</p>
 51:           <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-6">
 52:             Professional <span className="text-brand-primary glow-green">Email Setup</span>
 53:           </h1>
 54:           <p className="text-xl text-blue-300 font-semibold max-w-2xl mx-auto leading-relaxed">
 55:             Set up a professional email like <span className="text-white">you@yourdomain.com</span> using Gmail with <span className="text-brand-primary">no monthly fees</span> and no Google Workspace subscription.
 56:           </p>
 57:         </div>
 58:       </section>
 59: 
 60:       <div className="container mx-auto px-6 max-w-4xl py-16">
 61:         <div className="space-y-4">
 62:           <StepCard number={1} title="Buy a Domain" icon={Globe}>
 63:             <p>
 64:               Purchase a domain name (e.g. <code className="text-brand-primary">yourdomain.com</code>) from any registrar like Namecheap, Google Domains, or GoDaddy.
 65:             </p>
 66:           </StepCard>
 67: 
 68:           <StepCard number={2} title="Connect Domain to Cloudflare" icon={Cloud}>
 69:             <ul className="list-disc pl-6 space-y-2">
 70:               <li>Add your domain to Cloudflare.</li>
 71:               <li>Select the <strong className="text-white">Free plan</strong>.</li>
 72:               <li>Replace your registrar&apos;s nameservers with Cloudflare nameservers provided during setup.</li>
 73:               <li>Wait for activation (can take up to 24 hours, but usually faster).</li>
 74:             </ul>
 75:           </StepCard>
 76: 
 77:           <StepCard number={3} title="Enable Email Routing" icon={Repeat}>
 78:             <ul className="list-disc pl-6 space-y-2">
 79:               <li>Go to <strong className="text-white">Email &rarr; Email Routing</strong> in your Cloudflare dashboard.</li>
 80:               <li>Add your Gmail as a <strong className="text-white">Destination Address</strong>.</li>
 81:               <li>Check your Gmail inbox and verify the address.</li>
 82:               <li>Enable <strong className="text-white">Catch-all</strong> (optional) to receive mail sent to any address on your domain.</li>
 83:               <li>Create custom addresses (e.g., <code className="text-brand-primary">hello@</code>, <code className="text-brand-primary">support@</code>, <code className="text-brand-primary">you@</code>).</li>
 84:             </ul>
 85:           </StepCard>
 86: 
 87:           <StepCard number={4} title="Test Receiving Emails" icon={Inbox}>
 88:             <ul className="list-disc pl-6 space-y-2">
 89:               <li>Send a test email from a different account to your new custom address.</li>
 90:               <li>Confirm it arrives in your Gmail inbox.</li>
 91:             </ul>
 92:           </StepCard>
 93: 
 94:           <StepCard number={5} title="Send Emails from Your Domain" icon={Send}>
 95:             <ul className="list-disc pl-6 space-y-2">
 96:               <li>In Gmail, go to <strong className="text-white">Settings &rarr; See all settings &rarr; Accounts & Import</strong>.</li>
 97:               <li>Find <strong className="text-white">&ldquo;Send mail as&rdquo;</strong> and click <strong className="text-white">&ldquo;Add another email address&rdquo;</strong>.</li>
 98:               <li>Use SMTP Server: <code className="text-brand-primary">smtp.gmail.com</code></li>
 99:               <li>Generate and use a <strong className="text-white">Google App Password</strong> (requires 2FA enabled on your Google account).</li>
100:               <li>Verify ownership using the code sent to your inbox.</li>
101:             </ul>
102:           </StepCard>
103: 
104:           <section className="bg-gradient-to-br from-brand-primary/10 to-transparent border border-brand-primary/20 rounded-2xl p-8 mb-8 mt-12">
105:             <div className="flex items-center gap-3 mb-6">
106:               <Lock className="w-6 h-6 text-brand-primary" />
107:               <h2 className="text-2xl font-semibold text-white">Secret Create Account Link</h2>
108:             </div>
109:             <p className="text-slate-300 mb-6">
110:               Hidden by Google, this link allows you to add your custom domain while creating your Google account.
111:             </p>
112:             <div className="flex flex-wrap gap-4">
113:               <a
114:                 href={SECRET_LINK}
115:                 target="_blank"
116:                 rel="noopener noreferrer"
117:                 className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-black font-bold rounded-xl hover:bg-white transition-colors"
118:               >
119:                 Create Google Account <ExternalLink className="w-4 h-4" />
120:               </a>
121:               <button
122:                 onClick={copyToClipboard}
123:                 className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
124:               >
125:                 {copied ? (
126:                   <>Link Copied <Check className="w-4 h-4 text-brand-primary" /></>
127:                 ) : (
128:                   <>Copy Link <Copy className="w-4 h-4" /></>
129:                 )}
130:               </button>
131:             </div>
132:           </section>
133: 
134:           <section className="bg-brand-steel/50 border border-green-500/30 rounded-2xl p-8">
135:             <div className="flex items-center gap-3 mb-6">
136:               <ShieldCheck className="w-8 h-8 text-green-500" />
137:               <h2 className="text-2xl font-semibold text-white">Final Result</h2>
138:             </div>
139:             <div className="grid md:grid-cols-3 gap-6">
140:               <div className="flex items-start gap-3">
141:                 <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
142:                 <p className="text-slate-300">Receive emails at <span className="text-white">you@yourdomain.com</span></p>
143:               </div>
144:               <div className="flex items-start gap-3">
145:                 <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
146:                 <p className="text-slate-300">Send emails from <span className="text-white">you@yourdomain.com</span></p>
147:               </div>
148:               <div className="flex items-start gap-3">
149:                 <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
150:                 <p className="text-slate-300">Manage everything <span className="text-white">inside Gmail</span></p>
151:               </div>
152:             </div>
153:           </section>
154:         </div>
155:       </div>
156:     </main>
157:   );
158: };
159: 
160: export default EmailSetupClient;
````

## File: apps/client/app/email-setup/page.tsx
````typescript
 1: import React from 'react';
 2: import { Metadata } from 'next';
 3: import { OG_IMAGE_DEFAULT, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 4: import EmailSetupClient from './EmailSetupClient';
 5: 
 6: export const metadata: Metadata = {
 7:   title: 'Professional Email Setup Guide | Malalang',
 8:   description: 'Learn how to set up a professional email (you@yourdomain.com) for free using Cloudflare Email Routing and Gmail. No Google Workspace subscription needed.',
 9:   keywords: 'professional email, free custom email, cloudflare email routing, gmail custom domain, malalang guide',
10:   alternates: {
11:     canonical: `${SITE_URL}/email-setup`,
12:   },
13:   openGraph: {
14:     title: 'Professional Email Setup Guide | Malalang',
15:     description: 'Step-by-step guide to setting up a custom domain email with Gmail for free.',
16:     url: `${SITE_URL}/email-setup`,
17:     type: 'website',
18:     images: [
19:       {
20:         url: OG_IMAGE_DEFAULT,
21:         width: 1200,
22:         height: 630,
23:         alt: 'Professional Email Setup',
24:       },
25:     ],
26:   },
27:   twitter: {
28:     card: 'summary_large_image',
29:     title: 'Professional Email Setup Guide | Malalang',
30:     description: 'Set up your professional email for free with our step-by-step guide.',
31:     images: [OG_IMAGE_DEFAULT],
32:     creator: TWITTER_CREATOR,
33:   },
34: };
35: 
36: const EmailSetUpPage = () => {
37:   return <EmailSetupClient />;
38: };
39: 
40: export default EmailSetUpPage;
````

## File: apps/client/app/home/components/Hero.tsx
````typescript
 1: import React from 'react';
 2: import Link from 'next/link';
 3: import { Button } from '@/app/_components/ui/button';
 4: import { FaArrowRight } from 'react-icons/fa';
 5: 
 6: import HeroBackground from '@/app/_components/HeroBackground';
 7: 
 8: const Hero: React.FC = () => {
 9:   return (
10:     <section
11:       id="home"
12:       className="circuit-bg relative overflow-hidden py-24 md:py-52"
13:       aria-labelledby="hero-heading"
14:     >
15:       <HeroBackground />
16: 
17:       <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
18:         {}
19:         <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
20:           <span className="code-chip">TypeScript</span>
21:           <span className="code-chip code-chip-blue">Next.js</span>
22:           <span className="code-chip">React 19</span>
23:         </div>
24: 
25:         <h1
26:           id="hero-heading"
27:           className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-brand-light"
28:         >
29:           Grow Your Local Business
30:           <br />
31:           <span className="text-brand-primary glow-green">with a Professional Website</span>
32:         </h1>
33: 
34:         <p className="text-lg sm:text-xl md:text-2xl text-blue-300 font-semibold mb-10 max-w-2xl mx-auto">
35:           No Deposit Required. You Only Pay When You&apos;re 100% Satisfied.
36:         </p>
37: 
38:         <div
39:           className="flex flex-col sm:flex-row justify-center gap-4"
40:           role="group"
41:           aria-label="Call to action buttons"
42:         >
43:           <Link href="/bookings" passHref className="w-full sm:w-auto">
44:             <Button
45:               size="lg"
46:               className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 bg-brand-primary hover:bg-brand-primary/85 text-brand-dark font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(0,210,106,0.5)]"
47:             >
48:               Book Now &amp; Start Your Project
49:             </Button>
50:           </Link>
51: 
52:           <Link href="/services" passHref className="w-full sm:w-auto">
53:             <Button
54:               variant="outline"
55:               size="lg"
56:               className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
57:             >
58:               View All Services
59:               <FaArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
60:             </Button>
61:           </Link>
62:         </div>
63: 
64:         {}
65:         <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-500 font-mono">
66:           <span><span className="text-brand-primary">✓</span> Phalaborwa-based</span>
67:           <span><span className="text-brand-primary">✓</span> Mobile-friendly</span>
68:           <span><span className="text-brand-primary">✓</span> SEO-optimised</span>
69:         </div>
70:       </div>
71:     </section>
72:   );
73: };
74: 
75: export default Hero;
````

## File: apps/client/app/home/components/Process.tsx
````typescript
 1: import React from 'react';
 2: import Link from 'next/link';
 3: import { PROCESS_STEPS } from '@/app/_lib/constants/process';
 4: 
 5: const Process: React.FC = () => {
 6:   return (
 7:     <section id="process" className="py-20 bg-background">
 8:       <div className="container mx-auto px-6">
 9:         <div className="text-center mb-16">
10:           <h2 className="text-3xl md:text-4xl font-bold text-white">Our Client-Friendly Process</h2>
11:           <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
12:             A structured, transparent journey from idea to launch. We guide you every step of the way.
13:           </p>
14:         </div>
15: 
16:         <div className="relative">
17:           {}
18:           <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-slate-700 hidden md:block" />
19: 
20:           {PROCESS_STEPS.slice(0, 3).map((step, index) => (
21:             <div key={step.step} className="mb-6 md:mb-0 md:pb-12 last:mb-0 last:pb-0">
22: 
23:               {}
24:               <div className="flex items-start gap-4 md:hidden">
25:                 <div className="flex-shrink-0 mt-1">{step.icon}</div>
26:                 <div className="bg-slate-900 p-5 rounded-lg border border-slate-800 flex-1">
27:                   <h3 className="text-base font-bold text-brand-primary mb-1">
28:                     Step {step.step}: {step.title}
29:                   </h3>
30:                   <p className="text-slate-400 text-sm">{step.description}</p>
31:                 </div>
32:               </div>
33: 
34:               {}
35:               <div className="hidden md:flex items-center">
36:                 <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-3 text-right'}`}>
37:                   <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
38:                     <h3 className="text-xl font-bold text-brand-primary mb-2">
39:                       Step {step.step}: {step.title}
40:                     </h3>
41:                     <p className="text-slate-400">{step.description}</p>
42:                   </div>
43:                 </div>
44:                 <div className="w-2/12 flex justify-center order-2">
45:                   <div className="z-10">{step.icon}</div>
46:                 </div>
47:                 <div className="w-5/12 order-1" />
48:               </div>
49: 
50:             </div>
51:           ))}
52:         </div>
53: 
54:         <div className="text-center mt-12 md:mt-16">
55:           <Link href="/about#process" className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300">
56:             See Our Full Process
57:           </Link>
58:         </div>
59:       </div>
60:     </section>
61:   );
62: };
63: 
64: export default Process;
````

## File: apps/client/app/layout.tsx
````typescript
  1: import './globals.css';
  2: import React from 'react';
  3: import Header from '@/app/_components/Header';
  4: import Footer from '@/app/_components/Footer';
  5: import Cta from '@/app/_components/Cta';
  6: import SkipToContent from '@/app/_components/SkipToContent';
  7: import { SITE_URL, WHATSAPP_LINK, SITE_DESCRIPTION } from '@/app/_lib/constants/site';
  8: import { Toaster } from '@/app/_components/ui/toaster';
  9: import { Analytics } from "@vercel/analytics/next"
 10: import { SpeedInsights } from "@vercel/speed-insights/next"
 11: import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
 12: import { Metadata } from 'next';
 13: import Script from 'next/script';
 14: 
 15: export const metadata: Metadata = {
 16:   title: {
 17:     default: 'Malalang - Web Development Solutions',
 18:     template: '%s | Malalang',
 19:   },
 20:   description: SITE_DESCRIPTION,
 21:   openGraph: {
 22:     title: 'Malalang - Web Development Solutions',
 23:     description: 'Professional web development services to elevate your online presence.',
 24:     url: SITE_URL,
 25:     siteName: 'Malalang',
 26:     images: [
 27:       {
 28:         url: '/og-image.png',
 29:         width: 1200,
 30:         height: 630,
 31:       },
 32:     ],
 33:     locale: 'en_US',
 34:     type: 'website',
 35:   },
 36:   twitter: {
 37:     card: 'summary_large_image',
 38:     title: 'Malalang - Web Development Solutions',
 39:     description: 'Professional web development services to elevate your online presence.',
 40:     creator: '@malalang',
 41:     images: ['/og-image.png'],
 42:   },
 43:   robots: {
 44:     index: true,
 45:     follow: true,
 46:     googleBot: {
 47:       index: true,
 48:       follow: true,
 49:       'max-video-preview': -1,
 50:       'max-image-preview': 'large',
 51:       'max-snippet': -1,
 52:     },
 53:   },
 54:   icons: {
 55:     icon: 'favicon.ico',
 56:     shortcut: '/favicon.png',
 57:     apple: '/favicon.png',
 58:   },
 59:   alternates: {
 60:     canonical: SITE_URL,
 61:     types: {
 62:       'application/rss+xml': 'https://malalang.co.za/rss.xml',
 63:     }}
 64: };
 65: 
 66: 
 67: 
 68: 
 69: const RootLayout = ({ children }: { children: React.ReactNode }) => {
 70:   const jsonLd = {
 71:     '@context': 'https://schema.org',
 72:     '@type': 'LocalBusiness',
 73:     '@id': `${SITE_URL}/#organization`,
 74:     name: 'Malalang',
 75:     url: SITE_URL,
 76:     logo: `${SITE_URL}/logo.png`,
 77:     image: `${SITE_URL}/logo.png`,
 78:     description: SITE_DESCRIPTION,
 79:     telephone: '+27 62 284 0835',
 80:     email: 'info@malalang.co.za',
 81:     address: {
 82:       '@type': 'PostalAddress',
 83:       streetAddress: 'Phalaborwa',
 84:       addressLocality: 'Phalaborwa',
 85:       addressRegion: 'Limpopo',
 86:       postalCode: '1390',
 87:       addressCountry: 'ZA',
 88:     },
 89:     geo: {
 90:       '@type': 'GeoCoordinates',
 91:       latitude: -23.943,
 92:       longitude: 31.141,
 93:     },
 94:     priceRange: 'R1000 - R5000',
 95:     openingHoursSpecification: [
 96:       {
 97:         '@type': 'OpeningHoursSpecification',
 98:         dayOfWeek: [
 99:           'Monday',
100:           'Tuesday',
101:           'Wednesday',
102:           'Thursday',
103:           'Friday'
104:         ],
105:         opens: '08:00',
106:         closes: '17:00'
107:       }
108:     ],
109:     sameAs: [
110:       WHATSAPP_LINK
111:     ]
112:   };
113: 
114:   return (
115:     <html lang="en">
116:       <GoogleTagManager gtmId="GTM-WX9XR4V3" />
117:       <body className="bg-background text-brand-light font-sans antialiased">
118:         <Toaster />
119:         <SkipToContent />
120:         <script
121:           type="application/ld+json"
122:           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
123:         />
124:         <Header />
125:         <main id="main-content" role="main">{children}</main>
126:         <Cta />
127:         <Footer />
128:         <a
129:           href={WHATSAPP_LINK}
130:           target="_blank"
131:           rel="noopener noreferrer"
132:           className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-brand-secondary"
133:           aria-label="Contact us on WhatsApp - Opens in a new window"
134:         >
135:           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
136:             <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.3-8.8-98.1-25.4l-7-4.2-72.5 19.1 19.4-70.6-4.6-7.4c-18.7-29.9-28.7-65.4-28.7-102.1 0-108.7 88.4-197.1 197.1-197.1 53.3 0 104.1 20.8 142.3 58.9 38.2 38.2 58.9 89 58.9 142.3 0 108.7-88.4 197.1-197.1 197.1zm105.9-161.5c-5.9-3-35.1-17.3-40.6-19.3s-9.7-3-13.7 3c-4 6-15.4 19.3-18.9 23.3-3.5 4-7 4.5-13 1.5-6-3-25.3-9.3-48.1-29.6-17.8-15.8-29.8-35.3-33.3-41.3s-.3-9.3 2.7-12.3c2.7-2.7 5.9-7 8.9-10.5 3-3.5 4-5.9 6-9.9s3-6 1.5-11.4c-1.5-5.4-13.7-33.1-18.8-45.3-5.1-12.2-10.2-10.5-13.7-10.7-3.3-.2-7.2-.2-11.2-.2-4 0-10.7 1.5-16.2 7.5-5.6 6-21.5 21-21.5 51.3s22 59.5 25 63.5c3 4 43.1 65.6 105.2 93.2 14.9 6.9 28.6 11.1 38.5 14.1 16.4 5.1 31.4 4.4 43.2 2.7 12.9-1.9 39.8-16.3 45.4-32.1 5.6-15.8 5.6-29.2 3.9-32.1-1.7-2.9-5.7-4.5-11.7-7.5z"/>
137:           </svg>
138:         </a>
139:         <SpeedInsights/>
140:         <Analytics/>
141:         <GoogleAnalytics gaId="G-FBF2W8FRZ9" />
142:         <Script
143:           src="https://static.cloudflareinsights.com/beacon.min.js"
144:           data-cf-beacon='{"token": "5365df6679d14fe8a9c760a311aecd99"}'
145:         />
146:       </body>
147:     </html>
148:   );
149: };
150: 
151: export default RootLayout;
````

## File: apps/client/app/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'Malalang - Web Design in Phalaborwa';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Grow Your Local Business',
12:     titleSecondary: 'with a Professional Website',
13:     description: 'No Deposit Required. You Only Pay When You\'re 100% Satisfied. Phalaborwa-based web design.',
14:     logo: true,
15:   });
16: }
````

## File: apps/client/app/pricing/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'Malalang Pricing';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Malalang Pricing',
12:     description: 'Affordable web design and digital marketing packages for South African businesses',
13:     logo: true,
14:   });
15: }
````

## File: apps/client/app/privacy-policy/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'Malalang Privacy Policy';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Privacy Policy',
12:     description: 'Learn how Malalang protects your privacy and handles your data',
13:     logo: true,
14:   });
15: }
````

## File: apps/client/app/privacy-policy/page.tsx
````typescript
  1: import React from 'react';
  2: import { Metadata } from 'next';
  3: import { OG_IMAGE_DEFAULT, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
  4: 
  5: export const metadata: Metadata = {
  6:   title: 'Privacy Policy | Malalang Pty Ltd',
  7:   description: 'Our policies and procedures on the collection, use and disclosure of Your information when You use Malalang services.',
  8:   keywords: 'privacy policy, data protection, POPIA compliance',
  9:   alternates: {
 10:     canonical: `${SITE_URL}/privacy-policy`,
 11:   },
 12:   robots: {
 13:     index: false,
 14:     follow: true,
 15:   },
 16:   openGraph: {
 17:     title: 'Privacy Policy | Malalang',
 18:     description: 'Learn about our privacy policies and how we protect your data.',
 19:     url: `${SITE_URL}/privacy-policy`,
 20:     type: 'website',
 21:     images: [
 22:       {
 23:         url: OG_IMAGE_DEFAULT,
 24:         width: 1200,
 25:         height: 630,
 26:         alt: 'Privacy Policy',
 27:       },
 28:     ],
 29:   },
 30:   twitter: {
 31:     card: 'summary_large_image',
 32:     title: 'Privacy Policy | Malalang',
 33:     description: 'Learn about our privacy policies and data protection.',
 34:     images: [OG_IMAGE_DEFAULT],
 35:     creator: TWITTER_CREATOR,
 36:   },
 37: };
 38: 
 39: const PrivacyPolicyPage = () => {
 40:   return (
 41:     <main className="min-h-screen bg-brand-dark pt-24 pb-16">
 42:       <div className="container mx-auto px-6 max-w-4xl">
 43:         <header className="mb-12 border-b border-brand-primary/20 pb-8">
 44:           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white glow-green">
 45:             Privacy Policy
 46:           </h1>
 47:           <p className="text-slate-400 italic">Last updated: 2026/04/14 01:02:19</p>
 48:         </header>
 49: 
 50:         <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
 51:           <section>
 52:             <p>
 53:               This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You respond to our advertisements and tells You about Your privacy rights and how the law protects You.
 54:             </p>
 55:             <p>
 56:               We use Your Personal Data to contact and support you, as well as to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
 57:             </p>
 58:           </section>
 59: 
 60:           <section>
 61:             <h2 className="text-2xl font-semibold text-brand-primary mb-4 border-l-4 border-brand-primary pl-4">Interpretation and Definitions</h2>
 62:             <h3 className="text-xl font-medium text-white mb-2">Interpretation</h3>
 63:             <p>
 64:               The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
 65:             </p>
 66:             <h3 className="text-xl font-medium text-white mb-2 mt-6">Definitions</h3>
 67:             <p>For the purposes of this Privacy Policy:</p>
 68:             <ul className="list-disc pl-6 space-y-2">
 69:               <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to malalang.</li>
 70:               <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
 71:               <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
 72:               <li><strong>Service</strong> refers to the advertisement, website, or application.</li>
 73:               <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
 74:               <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
 75:               <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
 76:             </ul>
 77:           </section>
 78: 
 79:           <section>
 80:             <h2 className="text-2xl font-semibold text-brand-primary mb-4 border-l-4 border-brand-primary pl-4">Collecting and Using Your Personal Data</h2>
 81:             <h3 className="text-xl font-medium text-white mb-2">Types of Data Collected</h3>
 82:             <h4 className="text-lg font-medium text-slate-200 mb-2">Personal Data</h4>
 83:             <p>
 84:               While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
 85:             </p>
 86:             <ul className="list-disc pl-6 space-y-1">
 87:               <li>First name and last name</li>
 88:               <li>Email address</li>
 89:               <li>Phone number</li>
 90:               <li>Location details such as your address, city, or country</li>
 91:               <li>Any other data such as personal preferences, requirements, or comments</li>
 92:             </ul>
 93:           </section>
 94: 
 95:           <section>
 96:             <h2 className="text-2xl font-semibold text-brand-primary mb-4 border-l-4 border-brand-primary pl-4">Use of Your Personal Data</h2>
 97:             <p>The Company may use Personal Data for the following purposes:</p>
 98:             <ul className="list-disc pl-6 space-y-2">
 99:               <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
100:               <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
101:               <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
102:               <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
103:               <li><strong>To provide You with news, special offers and general information</strong> about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
104:               <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
105:               <li><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
106:               <li><strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
107:             </ul>
108:             <p className="mt-6">We may share Your personal information in the following situations:</p>
109:             <ul className="list-disc pl-6 space-y-2">
110:               <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
111:               <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
112:               <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
113:               <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
114:               <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
115:               <li><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
116:             </ul>
117:           </section>
118: 
119:           <section>
120:             <h2 className="text-2xl font-semibold text-brand-primary mb-4 border-l-4 border-brand-primary pl-4">Retention of Your Personal Data</h2>
121:             <p>
122:               The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
123:             </p>
124:             <p>
125:               The Company will also retain Usage Data for internal analysis purposes.
126:             </p>
127:           </section>
128: 
129:           <section>
130:             <h2 className="text-2xl font-semibold text-brand-primary mb-4 border-l-4 border-brand-primary pl-4">Transfer of Your Personal Data</h2>
131:             <p>
132:               Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
133:             </p>
134:             <p>
135:               Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
136:             </p>
137:             <p>
138:               The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
139:             </p>
140:           </section>
141: 
142:           <section>
143:             <h2 className="text-2xl font-semibold text-brand-primary mb-4 border-l-4 border-brand-primary pl-4">Disclosure of Your Personal Data</h2>
144:             <h3 className="text-xl font-medium text-white mb-2">Law enforcement</h3>
145:             <p>
146:               Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
147:             </p>
148:             <h3 className="text-xl font-medium text-white mb-2 mt-6">Other legal requirements</h3>
149:             <p>
150:               The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
151:             </p>
152:             <ul className="list-disc pl-6 space-y-1">
153:               <li>Comply with a legal obligation</li>
154:               <li>Protect and defend the rights or property of the Company</li>
155:               <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
156:               <li>Protect the personal safety of Users of the Service or the public</li>
157:               <li>Protect against legal liability</li>
158:             </ul>
159:           </section>
160: 
161:           <section>
162:             <h2 className="text-2xl font-semibold text-brand-primary mb-4 border-l-4 border-brand-primary pl-4">Security of Your Personal Data</h2>
163:             <p>
164:               The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
165:             </p>
166:           </section>
167: 
168:           <section>
169:             <h2 className="text-2xl font-semibold text-brand-primary mb-4 border-l-4 border-brand-primary pl-4">Links to Other Websites</h2>
170:             <p>
171:               Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
172:             </p>
173:             <p>
174:               We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
175:             </p>
176:           </section>
177: 
178:           <section>
179:             <h2 className="text-2xl font-semibold text-brand-primary mb-4 border-l-4 border-brand-primary pl-4">Changes to this Privacy Policy</h2>
180:             <p>
181:               We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
182:             </p>
183:             <p>
184:               You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
185:             </p>
186:           </section>
187: 
188:           <section className="bg-brand-steel p-8 rounded-xl border border-brand-primary/20">
189:             <h2 className="text-2xl font-semibold text-brand-primary mb-4">Contact Us</h2>
190:             <p className="mb-4">If you have any questions about this Privacy Policy, You can contact us via email:</p>
191:             <a
192:               href="mailto:malalangptyltd@gmail.com"
193:               className="text-xl text-white hover:text-brand-primary transition-colors underline decoration-brand-primary/50 underline-offset-4"
194:             >
195:               malalangptyltd@gmail.com
196:             </a>
197:           </section>
198:         </div>
199:       </div>
200:     </main>
201:   );
202: };
203: 
204: export default PrivacyPolicyPage;
````

## File: apps/client/app/questionnaire/components/constants.ts
````typescript
  1: import { Step } from './types';
  2: 
  3: export const steps: Step[] = [
  4:   {
  5:     id: 'business-identity',
  6:     title: 'Business & Brand Identity',
  7:     description: 'Tell us about your business.',
  8:     questions: [
  9:       { id: 'userName', text: 'Contact Person', type: 'text', required: true },
 10:       { id: 'email', text: 'Email Address', type: 'email', required: true },
 11:       { id: 'phone', text: 'Phone Number', type: 'tel' },
 12:       { id: 'businessName', text: 'Business Name', type: 'text', required: true },
 13:       { id: 'businessDescription', text: 'Briefly describe your business and the services/products you offer.', type: 'textarea', required: true, aiSupport: 'enhancement' },
 14:       {
 15:         id: 'competitorAnalysis',
 16:         text: 'Competitor Analysis',
 17:         type: 'textarea',
 18:         subQuestions: [
 19:           { id: 'competitor1_name', text: 'Competitor 1 Website', type: 'text', placeholder: 'www.competitor.com' },
 20:           { id: 'competitor1_likes', text: 'What do you LIKE about their website?', type: 'textarea' },
 21:           { id: 'competitor1_dislikes', text: 'What do you DISLIKE about their website?', type: 'textarea' },
 22:         ],
 23:       },
 24:     ],
 25:   },
 26:   {
 27:     id: 'project-goals',
 28:     title: 'Project Goals & Scope',
 29:     description: 'What do you want to achieve?',
 30:     questions: [
 31:       { id: 'primaryGoal', text: 'What is the single most important goal for this website?', type: 'text' },
 32:       { id: 'successMetrics', text: 'How will you measure the success of the new website?', type: 'textarea' },
 33:       { id: 'requiredPages', text: "What are the key pages you think you'll need?", type: 'checkbox', options: ['Home', 'About Us', 'Our Team', 'Services', 'Pricing', 'Portfolio/Gallery', 'Testimonials', 'Blog', 'Contact', 'FAQ', 'Privacy Policy'] },
 34:       {
 35:         id: 'budget',
 36:         text: 'What is your approximate budget for this project?',
 37:         type: 'select',
 38:         options: [
 39:           { value: '', label: 'Please select a range' },
 40:           { value: '<1500', label: '< R1,500' },
 41:           { value: '1500-2000', label: 'R1,500 - R2,000' },
 42:           { value: '2000-5000', label: 'R2,000 - R5,000' },
 43:           { value: '5000-10000', label: 'R5,000 - R10,000' },
 44:           { value: '>10000', label: '> R10,000' },
 45:         ],
 46:       },
 47:     ],
 48:   },
 49:   {
 50:     id: 'design-aesthetics',
 51:     title: 'Design & Aesthetics',
 52:     description: 'How should your website look and feel?',
 53:     questions: [
 54:       { id: 'brandWords', text: "List 3-5 words that describe your brand's desired feel.", type: 'text' },
 55:       {
 56:         id: 'designStyle',
 57:         text: 'Which design style best fits your brand?',
 58:         type: 'select',
 59:         options: [
 60:           { value: '', label: 'Please select' },
 61:           { value: 'minimalist', label: 'Minimalist & Clean' },
 62:           { value: 'bold', label: 'Bold & Modern' },
 63:           { value: 'playful', label: 'Playful & Creative' },
 64:           { value: 'corporate', label: 'Corporate & Professional' },
 65:           { value: 'elegant', label: 'Elegant & Sophisticated' },
 66:           { value: 'other', label: 'Other' },
 67:         ],
 68:       },
 69:       { id: 'designStyleOther', text: 'Please describe the style:', type: 'text', dependsOn: 'designStyle', showIf: (v: any) => v === 'other' },
 70:       { id: 'hasLogo', text: 'Do you have an existing logo?', type: 'select', options: [ { value: '', label: 'Please select' }, { value: 'yes', label: 'Yes, I have a logo.' }, { value: 'no', label: 'No, I need one created.' } ] },
 71:       { id: 'logoUpload', text: 'Upload Your Logo', type: 'file-upload', dependsOn: 'hasLogo', showIf: (v: any) => v === 'yes' },
 72:       { id: 'brandColors', text: 'Brand Colors (HEX codes)', type: 'text', placeholder: '#1a2b3c, #d4e5f6, ...' },
 73:       { id: 'likedWebsites', text: 'Please list 2-3 websites you like and explain what you like about them.', type: 'textarea' },
 74:     ],
 75:   },
 76:   {
 77:     id: 'content-functionality',
 78:     title: 'Content & Functionality',
 79:     description: 'What should your website do?',
 80:     questions: [
 81:       {
 82:         id: 'contentProvider',
 83:         text: 'Who will be providing the written content (text) and images for the website?',
 84:         type: 'select',
 85:         options: [
 86:           { value: '', label: 'Please select' },
 87:           { value: 'client-all', label: 'I will provide all text and images.' },
 88:           { value: 'client-some', label: 'I will provide some, but I need help.' },
 89:           { value: 'developer-all', label: 'I need you to source/create all content.' },
 90:         ],
 91:       },
 92:       { id: 'needsBlog', text: 'Do you require a blog or news section on your website?', type: 'select', options: [ { value: '', label: 'Please select' }, { value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }, { value: 'not-sure', label: 'Not sure yet' } ] },
 93:       {
 94:         id: 'features',
 95:         text: 'Do you need any of the following special features?',
 96:         type: 'checkbox',
 97:         options: {
 98:           'Content Display': ['Photo Gallery', 'Testimonials Section', 'Social Media Feed Integration', 'Embedded Maps'],
 99:           'User Interaction': ['Advanced Forms', 'Newsletter Signup', 'Live Chat', 'Customer Login Area'],
100:           'Business Logic': ['E-commerce / Online Store', 'Booking / Appointment System'],
101:         },
102:       },
103:     ],
104:   },
105:   {
106:     id: 'technical-logistics',
107:     title: 'Technical & Logistics',
108:     description: "Let's get technical.",
109:     questions: [
110:       { id: 'domainStatus', text: 'Do you already own a domain name (e.g., yourbusiness.co.za)?', type: 'select', options: [ { value: '', label: 'Please select' }, { value: 'yes', label: 'Yes' }, { value: 'no', label: 'No, I need help getting one' } ] },
111:       { id: 'maintenanceInterest', text: 'Are you interested in an ongoing website maintenance plan?', type: 'select', options: [ { value: '', label: 'Please select' }, { value: 'yes', label: 'Yes, tell me more' }, { value: 'no', label: 'No, not at this time' }, { value: 'not-sure', label: "I'm not sure yet" } ] },
112:       { id: 'additionalInfo', text: 'Is there anything else we should know about your project?', type: 'textarea' },
113:     ],
114:   },
115:   {
116:     id: 'review',
117:     title: 'Review & Submit',
118:     description: 'Review your answers before submitting.',
119:     questions: [],
120:   },
121: ];
````

## File: apps/client/app/questionnaire/components/NavigationButtons.tsx
````typescript
 1: import { Button } from '@/app/_components/ui/button';
 2: import React from 'react';
 3: 
 4: interface NavigationButtonsProps {
 5:   currentStep: number;
 6:   totalSteps: number;
 7:   isSubmitting: boolean;
 8:   onPrev: () => void;
 9:   onNext: () => void;
10:   onSubmit: () => void;
11: }
12: 
13: const NavigationButtons: React.FC<NavigationButtonsProps> = ({ currentStep, totalSteps, isSubmitting, onPrev, onNext, onSubmit }) => {
14:   return (
15:     <div className="flex justify-between mt-8">
16:       {currentStep > 0 ? (
17:         <Button type="button" onClick={onPrev} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
18:           Previous
19:         </Button>
20:       ) : ( <div></div> )}
21:       {currentStep < totalSteps - 1 ? (
22:         <Button type="button" onClick={onNext} className="px-6 py-2 bg-brand-primary hover:bg-brand-primary/80 text-white font-bold rounded-lg transition-colors">
23:           Next
24:         </Button>
25:       ) : (
26:         <Button onClick={onSubmit} disabled={isSubmitting} className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 px-4 rounded-lg disabled:opacity-50 transition-colors duration-300 text-lg">
27:             {isSubmitting ? 'Submitting...' : 'Submit Questionnaire'}
28:         </Button>
29:       )}
30:     </div>
31:   );
32: };
33: 
34: export default NavigationButtons;
````

## File: apps/client/app/questionnaire/components/Question.tsx
````typescript
  1: import React from "react";
  2: import { Question as QuestionType, FormData, QuestionOption } from "./types";
  3: import AIActions from "./AIActions";
  4: import FileUploadWidget from "./FileUploadWidget";
  5: import PhoneNumberInput from "@/app/_components/SouthAfricanPhoneNumberInput";
  6: 
  7: interface QuestionProps {
  8:   question: QuestionType;
  9:   formData: FormData;
 10:   aiLoading: string | null;
 11:   onChange: (
 12:     e: React.ChangeEvent<
 13:       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
 14:     >
 15:   ) => void;
 16:   onPhoneNumberChange: (value: string) => void;
 17:   onCheckboxChange: (id: string, value: string, checked: boolean) => void;
 18:   onFileUpload: (id: string, url: string) => void;
 19:   onEnhance: (questionId: string, questionText: string) => void;
 20:   onSuggest: (questionId: string, questionText: string) => void;
 21:   cloudinaryApiKey: string;
 22:   cloudinaryCloudName: string;
 23: }
 24: const inputClass =
 25:   "block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-brand-primary focus:border-brand-primary";
 26: const labelClass = "block text-sm font-medium text-slate-300";
 27: 
 28: const Question: React.FC<QuestionProps> = ({
 29:   question,
 30:   formData,
 31:   aiLoading,
 32:   onChange,
 33:   onCheckboxChange,
 34:   onFileUpload,
 35:   onEnhance,
 36:   onSuggest,
 37:   onPhoneNumberChange,
 38:   cloudinaryApiKey,
 39:   cloudinaryCloudName,
 40: }) => {
 41:   const questionText = question.text
 42:     .replace("{businessName}", formData.businessName || "your business")
 43:     .replace("{userName}", formData.userName || "User");
 44: 
 45:   const renderQuestion = () => {
 46:     const commonProps = {
 47:       id: question.id,
 48:       name: question.id,
 49:       "aria-required": question.required,
 50:       "aria-describedby": question.description ? `${question.id}-description` : undefined,
 51:     };
 52: 
 53:     switch (question.type) {
 54:       case "textarea":
 55:         return (
 56:           <textarea
 57:             {...commonProps}
 58:             value={formData[question.id] || ""}
 59:             onChange={onChange}
 60:             className={inputClass}
 61:             rows={4}
 62:           />
 63:         );
 64:       case "tel":
 65:         return (
 66:           <PhoneNumberInput
 67:             {...commonProps}
 68:             value={formData[question.id]}
 69:             onPhoneNumberChange={onPhoneNumberChange}
 70:             placeholder="e.g., 712345678"
 71:           />
 72:         );
 73:       case "select":
 74:         return (
 75:           <select
 76:             {...commonProps}
 77:             value={formData[question.id] || ""}
 78:             onChange={onChange}
 79:             className={inputClass}
 80:           >
 81:             {(question.options as QuestionOption[]).map((opt) => (
 82:               <option key={opt.value} value={opt.value}>
 83:                 {opt.label}
 84:               </option>
 85:             ))}
 86:           </select>
 87:         );
 88:       case "checkbox": {
 89:         if (Array.isArray(question.options)) {
 90:           return (
 91:             <div className="grid grid-cols-2 gap-2" role="group" aria-labelledby={`${question.id}-label`}>
 92:               {(question.options as string[]).map((opt) => (
 93:                 <label
 94:                   key={opt}
 95:                   className="flex items-center gap-2 p-2 bg-slate-800 rounded-md border border-slate-700"
 96:                 >
 97:                   <input
 98:                     type="checkbox"
 99:                     checked={
100:                       Array.isArray(formData[question.id]) &&
101:                       formData[question.id].includes(opt)
102:                     }
103:                     onChange={(e) =>
104:                       onCheckboxChange(question.id, opt, e.target.checked)
105:                     }
106:                     aria-required={question.required}
107:                   />
108:                   <span className="text-sm">{opt}</span>
109:                 </label>
110:               ))}
111:             </div>
112:           );
113:         } else {
114:           const groups = question.options as { [k: string]: string[] };
115:           return (
116:             <div className="space-y-3" role="group" aria-labelledby={`${question.id}-label`}>
117:               {Object.entries(groups).map(([groupTitle, opts]) => (
118:                 <div key={groupTitle}>
119:                   <div className="text-xs text-slate-400 font-semibold mb-1">
120:                     {groupTitle}
121:                   </div>
122:                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
123:                     {opts.map((opt) => (
124:                       <label
125:                         key={opt}
126:                         className="flex items-center gap-2 p-2 bg-slate-800 rounded-md border border-slate-700"
127:                       >
128:                         <input
129:                           type="checkbox"
130:                           checked={
131:                             Array.isArray(formData[question.id]) &&
132:                             formData[question.id].includes(opt)
133:                           }
134:                           onChange={(e) =>
135:                             onCheckboxChange(question.id, opt, e.target.checked)
136:                           }
137:                           aria-required={question.required}
138:                         />
139:                         <span className="text-sm">{opt}</span>
140:                       </label>
141:                     ))}
142:                   </div>
143:                 </div>
144:               ))}
145:             </div>
146:           );
147:         }
148:       }
149:       case "radio":
150:         return (
151:           <div className="flex items-center space-x-4 pt-2" role="radiogroup" aria-labelledby={`${question.id}-label`}>
152:             {(question.options as QuestionOption[])?.map((option: QuestionOption) => (
153:               <label
154:                 key={option.value}
155:                 className="flex items-center space-x-2 text-slate-300"
156:               >
157:                 <input
158:                   type="radio"
159:                   name={question.id}
160:                   value={option.value}
161:                   checked={formData[question.id] === option.value}
162:                   onChange={onChange}
163:                   className="h-4 w-4 rounded-full border-slate-500 bg-slate-700 text-brand-primary focus:ring-brand-primary"
164:                   aria-required={question.required}
165:                 />
166:                 <span>{option.label}</span>
167:               </label>
168:             ))}
169:           </div>
170:         );
171:       case "file-upload":
172:         return (
173:           <FileUploadWidget
174:             cloudinaryApiKey={cloudinaryApiKey}
175:             cloudinaryCloudName={cloudinaryCloudName}
176:             id={question.id}
177:             onUploadComplete={onFileUpload}
178:             label={question.text}
179:             description={question.description || ""}
180:           />
181:         );
182:       default:
183:         return (
184:           <input
185:             {...commonProps}
186:             value={formData[question.id] || ""}
187:             onChange={onChange}
188:             className={inputClass}
189:             type={question.type}
190:           />
191:         );
192:     }
193:   };
194: 
195:   return (
196:     <div key={question.id} className="space-y-2">
197:       <label id={`${question.id}-label`} htmlFor={question.id} className={labelClass}>
198:         {questionText} {question.required && <span className="text-red-400" aria-hidden="true">*</span>}
199:       </label>
200:       {question.description && (
201:         <p id={`${question.id}-description`} className="text-sm text-slate-400 mb-2">
202:           {question.description}
203:         </p>
204:       )}
205:       {renderQuestion()}
206:       {question.aiSupport && (
207:         <AIActions
208:           question={question}
209:           value={formData[question.id] || ""}
210:           aiLoading={aiLoading}
211:           onEnhance={() => onEnhance(question.id, questionText)}
212:           onSuggest={() => onSuggest(question.id, questionText)}
213:         />
214:       )}
215:     </div>
216:   );
217: };
218: 
219: export default Question;
````

## File: apps/client/app/questionnaire/layout.tsx
````typescript
 1: import { Metadata } from 'next';
 2: import { OG_IMAGE_DEFAULT, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 3: 
 4: export const metadata: Metadata = {
 5:   title: 'Web Design Discovery Questionnaire - Malalang',
 6:   description: 'Tell us about your business vision. Our questionnaire helps us understand your goals so we can create the perfect website for your needs.',
 7:   keywords: ['questionnaire', 'web design consultation', 'business discovery', 'Phalaborwa'],
 8:   alternates: {
 9:     canonical: `${SITE_URL}/questionnaire`,
10:   },
11:   robots: {
12:     index: true,
13:     follow: true,
14:   },
15:   openGraph: {
16:     title: 'Web Design Discovery Questionnaire - Malalang',
17:     description: 'Share your business vision. Let\'s discover what makes your business unique.',
18:     url: `${SITE_URL}/questionnaire`,
19:     type: 'website',
20:     images: [
21:       {
22:         url: OG_IMAGE_DEFAULT,
23:         width: 1200,
24:         height: 630,
25:         alt: 'Web Design Discovery Questionnaire',
26:       },
27:     ],
28:   },
29:   twitter: {
30:     card: 'summary_large_image',
31:     title: 'Web Design Discovery Questionnaire - Malalang',
32:     description: 'Tell us about your business and your vision for your website.',
33:     images: [OG_IMAGE_DEFAULT],
34:     creator: TWITTER_CREATOR,
35:   },
36: };
37: 
38: export default function QuestionnaireLayout({
39:   children,
40: }: {
41:   children: React.ReactNode;
42: }) {
43:   return children;
44: }
````

## File: apps/client/app/questionnaire/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'Malalang Questionnaire';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Project Questionnaire',
12:     description: 'Tell us about your project and get a personalized quote',
13:     logo: true,
14:   });
15: }
````

## File: apps/client/app/questionnaire/page.tsx
````typescript
  1: 'use client';
  2: 
  3: import React, { useEffect, useState } from "react";
  4: import QuestionnaireForm from "./components/QuestionnaireForm";
  5: import { getClientByPhone } from "@malalang/shared/services/clients";
  6: import type { Client } from "@malalang/shared/types";
  7: import PhoneNumberInput from "@/app/_components/SouthAfricanPhoneNumberInput";
  8: 
  9: import HeroBackground from "@/app/_components/HeroBackground";
 10: 
 11: const QuestionnairePage: React.FC = () => {
 12:   type FlowState = "initial" | "prompt-phone" | "loading" | "form-loaded";
 13:   const [flowState, setFlowState] = useState<FlowState>("initial");
 14:   const [clientData, setClientData] = useState<Client | null>(null);
 15:   const [phone, setPhone] = useState("");
 16:   const [error, setError] = useState<string | null>(null);
 17:   const cloudinaryApiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "";
 18:   const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
 19:   useEffect(() => {
 20:     if (!cloudinaryApiKey || !cloudinaryCloudName) {
 21:       setError(
 22:         "Cloudinary configuration is missing. Please set NEXT_PUBLIC_CLOUDINARY_API_KEY and NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in your environment variables."
 23:       );
 24:     }
 25:   }, [cloudinaryApiKey, cloudinaryCloudName]);
 26:   const handleFetchClientData = async () => {
 27:     if (!phone) {
 28:       setError("Please enter your phone number.");
 29:       return;
 30:     }
 31:     setFlowState("loading");
 32:     setError(null);
 33: 
 34:     const fullPhoneNumber = `+27${phone}`;
 35: 
 36:     let foundData: Client | null = null;
 37: 
 38:     try {
 39:       foundData = await getClientByPhone(fullPhoneNumber);
 40: 
 41:       if (foundData) {
 42:         setClientData(foundData);
 43:         setFlowState("form-loaded");
 44:       } else {
 45:         setError(
 46:           'No booking found for this phone number. You can proceed as a new client by clicking "No".'
 47:         );
 48:         setFlowState("initial");
 49:       }
 50:     } catch (e) {
 51:       console.error("Error fetching client data:", e);
 52:       setError(
 53:         "An error occurred while looking up your booking. Please try again."
 54:       );
 55:       setFlowState("initial");
 56:     }
 57:   };
 58: 
 59:   const renderInitialStep = () => (
 60:     <div className="text-center bg-background p-8 rounded-lg max-w-2xl mx-auto border border-slate-700">
 61:       {error && (
 62:         <p className="text-red-400 bg-red-900/20 p-3 rounded-md mb-6">
 63:           {error}
 64:         </p>
 65:       )}
 66:       <h2 className="text-2xl font-bold text-white mb-4">
 67:         Have you booked an initial session with us before?
 68:       </h2>
 69:       <p className="text-slate-400 mb-6">
 70:         If so, we can pre-fill some of your information.
 71:       </p>
 72:       <div className="flex justify-center gap-4">
 73:         <button
 74:           onClick={() => {
 75:             setError(null);
 76:             setFlowState("prompt-phone");
 77:           }}
 78:           className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-2 px-6 rounded-lg transition-colors"
 79:         >
 80:           Yes, I Have
 81:         </button>
 82:         <button
 83:           onClick={() => {
 84:             setError(null);
 85:             setClientData(null);
 86:             setFlowState("form-loaded");
 87:           }}
 88:           className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
 89:         >
 90:           No, I'm New
 91:         </button>
 92:       </div>
 93:     </div>
 94:   );
 95: 
 96:   const renderPhonePrompt = () => (
 97:     <div className="text-center bg-background p-8 rounded-lg max-w-2xl mx-auto border border-slate-700">
 98:       <h2 className="text-2xl font-bold text-white mb-2">Find Your Booking</h2>
 99:       <p className="text-slate-400 mb-6">
100:         Please enter the phone number you used during your booking.
101:       </p>
102:       <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
103:         <PhoneNumberInput
104:           id="phone-lookup"
105:           name="phone-lookup"
106:           value={phone}
107:           onPhoneNumberChange={setPhone}
108:           placeholder="e.g., 712345678"
109:         />
110:         <button
111:           onClick={handleFetchClientData}
112:           className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-2 px-8 rounded-lg transition-colors w-full"
113:         >
114:           Find My Booking
115:         </button>
116:         <button
117:           onClick={() => setFlowState("initial")}
118:           className="text-slate-400 hover:text-white text-sm mt-2"
119:         >
120:           Back
121:         </button>
122:       </div>
123:     </div>
124:   );
125: 
126:   const renderLoading = () => (
127:     <div className="text-center bg-background p-8 rounded-lg max-w-2xl mx-auto border border-slate-700">
128:       <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">
129:         Finding your booking...
130:       </h2>
131:     </div>
132:   );
133: 
134:   const renderContent = () => {
135:     switch (flowState) {
136:       case "initial":
137:         return renderInitialStep();
138:       case "prompt-phone":
139:         return renderPhonePrompt();
140:       case "loading":
141:         return renderLoading();
142:       case "form-loaded":
143:         return (
144:           <QuestionnaireForm
145:             cloudinaryCloudName={cloudinaryCloudName}
146:             cloudinaryApiKey={cloudinaryApiKey}
147:             clientData={clientData}
148:           />
149:         );
150:       default:
151:         return renderInitialStep();
152:     }
153:   };
154: 
155:   return (
156:     <main>
157:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
158:         <HeroBackground />
159:         <div className="container mx-auto px-6 relative z-10">
160:           <div className="text-center mb-12">
161:             <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
162:               Website Project <span className="text-brand-primary glow-green">Questionnaire</span>
163:             </h1>
164:             <p className="text-xl text-blue-300 font-semibold max-w-3xl mx-auto">
165:               {flowState === "form-loaded"
166:                 ? "Please fill out this form to the best of your ability. The more detail you provide, the better we can understand your vision."
167:                 : "Let's get started by identifying you."}
168:             </p>
169:           </div>
170:           <div className="max-w-4xl mx-auto">{renderContent()}</div>
171:         </div>
172:       </section>
173:     </main>
174:   );
175: };
176: 
177: export default QuestionnairePage;
````

## File: apps/client/app/services/domain-registration/page.tsx
````typescript
  1: import React from 'react';
  2: import Link from 'next/link';
  3: import { Metadata } from 'next';
  4: import { OG_IMAGE_SERVICES, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
  5: import { DOMAIN_PACKAGES } from '@/app/_lib/constants/services';
  6: import { WHATSAPP_LINK } from '@/app/_lib/constants/site';
  7: import type { ServicePackage } from "@malalang/shared/types";
  8: 
  9: export const metadata: Metadata = {
 10:   title: 'Domain Registration | Malalang Phalaborwa',
 11:   description: 'Register your .co.za or .com domain with full ownership transfer, DNS setup, and email forwarding. Affordable domain registration for South African businesses.',
 12:   keywords: 'domain registration, .co.za domain, .com domain, web hosting, DNS setup, South Africa',
 13:   alternates: {
 14:     canonical: `${SITE_URL}/services/domain-registration`,
 15:   },
 16:   robots: {
 17:     index: true,
 18:     follow: true,
 19:   },
 20:   openGraph: {
 21:     title: 'Domain Registration | Malalang',
 22:     description: 'Register your .co.za or .com domain with full ownership transfer and DNS setup.',
 23:     url: `${SITE_URL}/services/domain-registration`,
 24:     type: 'website',
 25:     images: [
 26:       {
 27:         url: OG_IMAGE_SERVICES,
 28:         width: 1200,
 29:         height: 630,
 30:         alt: 'Domain Registration Services',
 31:       },
 32:     ],
 33:   },
 34:   twitter: {
 35:     card: 'summary_large_image',
 36:     title: 'Domain Registration | Malalang',
 37:     description: 'Register your .co.za or .com domain with full ownership transfer.',
 38:     images: [OG_IMAGE_SERVICES],
 39:     creator: TWITTER_CREATOR,
 40:   },
 41: };
 42: 
 43: const CheckIcon = () => (
 44:   <svg className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 45:     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
 46:   </svg>
 47: );
 48: 
 49: const PackageCard: React.FC<{ pkg: ServicePackage }> = ({ pkg }) => (
 50:   <div className={`relative bg-background rounded-xl border flex flex-col transition-all duration-300 ${pkg.isFeatured ? 'border-brand-primary shadow-[0_0_30px_rgba(0,210,106,0.12)]' : 'border-slate-800 hover:border-slate-600'}`}>
 51:     {pkg.isFeatured && (
 52:       <div className="absolute -top-3 left-1/2 -translate-x-1/2">
 53:         <span className="bg-brand-primary text-brand-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Recommended</span>
 54:       </div>
 55:     )}
 56:     <div className="p-6 sm:p-8 flex flex-col flex-grow">
 57:       <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{pkg.title}</h3>
 58:       <p className="text-3xl font-extrabold text-brand-primary mb-3">{pkg.price}</p>
 59:       <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{pkg.description}</p>
 60:       <ul className="space-y-2 mb-8">
 61:         {pkg.features.map(f => (
 62:           <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
 63:             <CheckIcon />
 64:             <span>{f}</span>
 65:           </li>
 66:         ))}
 67:       </ul>
 68:       <a
 69:         href={WHATSAPP_LINK}
 70:         target="_blank"
 71:         rel="noopener noreferrer"
 72:         className="mt-auto w-full text-center bg-brand-primary hover:bg-brand-primary/85 text-brand-dark font-bold py-3 px-4 rounded-lg transition-all duration-300 text-sm"
 73:       >
 74:         Register My Domain
 75:       </a>
 76:     </div>
 77:   </div>
 78: );
 79: 
 80: import HeroBackground from '@/app/_components/HeroBackground';
 81: 
 82: export default function DomainRegistrationPage() {
 83:   return (
 84:     <main>
 85:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
 86:         <HeroBackground />
 87:         <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
 88:           <Link href="/services" className="text-blue-400 hover:text-brand-primary text-sm font-mono mb-4 inline-flex items-center gap-1 transition-colors">
 89:             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
 90:             All Services
 91:           </Link>
 92:           <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4 mt-2">
 93:             Domain <span className="text-brand-primary glow-green">Registration</span>
 94:           </h1>
 95:           <p className="text-xl text-blue-300 font-semibold max-w-2xl mx-auto">
 96:             Own your name on the internet. We register your domain, set up DNS, and hand over full credentials — so your business address is truly yours.
 97:           </p>
 98:         </div>
 99:       </section>
100: 
101:       <section className="py-16 bg-background">
102:         <div className="container mx-auto px-4 sm:px-6">
103:           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-start">
104:             {DOMAIN_PACKAGES.map(pkg => (
105:               <PackageCard key={pkg.serviceUrl} pkg={pkg} />
106:             ))}
107:           </div>
108:         </div>
109:       </section>
110: 
111:       {}
112:       <section className="py-12 bg-slate-900">
113:         <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
114:           <div className="bg-background rounded-xl border border-slate-800 p-6 sm:p-8">
115:             <h2 className="text-xl font-bold text-white mb-4">Why does owning your domain matter?</h2>
116:             <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
117:               <p>Many web agencies register domains <span className="text-white font-semibold">in their own name</span>, which means if you ever want to move to a different provider, you don't control your web address.</p>
118:               <p>At Malalang, we register every domain <span className="text-brand-primary font-semibold">in your name with full credentials</span> handed over to you. You stay in control — always.</p>
119:             </div>
120:           </div>
121:         </div>
122:       </section>
123: 
124:       <section className="py-14 bg-background text-center">
125:         <div className="container mx-auto px-4 sm:px-6">
126:           <h2 className="text-2xl font-bold text-white mb-3">Already have a domain?</h2>
127:           <p className="text-slate-400 mb-6 max-w-xl mx-auto">We can also help you transfer a domain you already own, or configure DNS for an existing domain to point to your new website.</p>
128:           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
129:             className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
130:             Chat on WhatsApp
131:           </a>
132:         </div>
133:       </section>
134:     </main>
135:   );
136: }
````

## File: apps/client/app/services/email-hosting/page.tsx
````typescript
  1: import React from 'react';
  2: import Link from 'next/link';
  3: import { Metadata } from 'next';
  4: import { OG_IMAGE_SERVICES, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
  5: import { EMAIL_PACKAGES } from '@/app/_lib/constants/services';
  6: import { WHATSAPP_LINK } from '@/app/_lib/constants/site';
  7: import type { ServicePackage } from "@malalang/shared/types";
  8: 
  9: export const metadata: Metadata = {
 10:   title: 'Business Email Hosting | Malalang Phalaborwa',
 11:   description: 'Professional business email accounts like info@yourdomain.co.za. Hosted, secured, and accessible on any device. Plans from R99/month.',
 12:   keywords: 'business email, email hosting, professional email, domain email, R99/month',
 13:   alternates: {
 14:     canonical: `${SITE_URL}/services/email-hosting`,
 15:   },
 16:   robots: {
 17:     index: true,
 18:     follow: true,
 19:   },
 20:   openGraph: {
 21:     title: 'Business Email Hosting | Malalang',
 22:     description: 'Professional business email accounts like info@yourdomain.co.za. Secure and accessible on any device. From R99/month.',
 23:     url: `${SITE_URL}/services/email-hosting`,
 24:     type: 'website',
 25:     images: [
 26:       {
 27:         url: OG_IMAGE_SERVICES,
 28:         width: 1200,
 29:         height: 630,
 30:         alt: 'Business Email Hosting',
 31:       },
 32:     ],
 33:   },
 34:   twitter: {
 35:     card: 'summary_large_image',
 36:     title: 'Business Email Hosting | Malalang',
 37:     description: 'Professional business email accounts from R99/month.',
 38:     images: [OG_IMAGE_SERVICES],
 39:     creator: TWITTER_CREATOR,
 40:   },
 41: };
 42: 
 43: const CheckIcon = () => (
 44:   <svg className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 45:     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
 46:   </svg>
 47: );
 48: 
 49: const PackageCard: React.FC<{ pkg: ServicePackage }> = ({ pkg }) => (
 50:   <div className={`relative bg-background rounded-xl border flex flex-col transition-all duration-300 ${pkg.isFeatured ? 'border-brand-primary shadow-[0_0_30px_rgba(0,210,106,0.12)]' : 'border-slate-800 hover:border-slate-600'}`}>
 51:     {pkg.isFeatured && (
 52:       <div className="absolute -top-3 left-1/2 -translate-x-1/2">
 53:         <span className="bg-brand-primary text-brand-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
 54:       </div>
 55:     )}
 56:     <div className="p-6 sm:p-8 flex flex-col flex-grow">
 57:       <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{pkg.title}</h3>
 58:       <p className="text-3xl font-extrabold text-brand-primary mb-1">{pkg.price}</p>
 59:       <p className="text-slate-500 text-xs mb-4">Billed monthly. Cancel any time.</p>
 60:       <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{pkg.description}</p>
 61:       <ul className="space-y-2 mb-8">
 62:         {pkg.features.map(f => (
 63:           <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
 64:             <CheckIcon />
 65:             <span>{f}</span>
 66:           </li>
 67:         ))}
 68:       </ul>
 69:       <a
 70:         href={WHATSAPP_LINK}
 71:         target="_blank"
 72:         rel="noopener noreferrer"
 73:         className="mt-auto w-full text-center bg-brand-primary hover:bg-brand-primary/85 text-brand-dark font-bold py-3 px-4 rounded-lg transition-all duration-300 text-sm"
 74:       >
 75:         Get This Plan
 76:       </a>
 77:     </div>
 78:   </div>
 79: );
 80: 
 81: import HeroBackground from '@/app/_components/HeroBackground';
 82: 
 83: export default function EmailHostingPage() {
 84:   return (
 85:     <main>
 86:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
 87:         <HeroBackground />
 88:         <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
 89:           <Link href="/services" className="text-blue-400 hover:text-brand-primary text-sm font-mono mb-4 inline-flex items-center gap-1 transition-colors">
 90:             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
 91:             All Services
 92:           </Link>
 93:           <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4 mt-2">
 94:             Business <span className="text-brand-primary glow-green">Email Hosting</span>
 95:           </h1>
 96:           <p className="text-xl text-blue-300 font-semibold max-w-2xl mx-auto">
 97:             Stop using Gmail for business. A professional address like <span className="text-brand-primary font-mono">info@yourdomain.co.za</span> builds credibility from the first email you send.
 98:           </p>
 99:         </div>
100:       </section>
101: 
102:       <section className="py-16 bg-background">
103:         <div className="container mx-auto px-4 sm:px-6">
104:           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-start">
105:             {EMAIL_PACKAGES.map(pkg => (
106:               <PackageCard key={pkg.serviceUrl} pkg={pkg} />
107:             ))}
108:           </div>
109:         </div>
110:       </section>
111: 
112:       {}
113:       <section className="py-12 bg-slate-900">
114:         <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
115:           <h2 className="text-2xl font-bold text-white text-center mb-8">Everything is included</h2>
116:           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
117:             {[
118:               { title: 'Works on Any Device', desc: 'Access your email on your phone, tablet, or computer using any email app or via webmail.' },
119:               { title: 'Spam & Virus Protected', desc: 'Incoming mail is automatically filtered to keep your inbox clean and your business safe.' },
120:               { title: 'We Handle the Setup', desc: 'We configure everything and migrate any existing emails — no technical knowledge required from you.' },
121:             ].map(item => (
122:               <div key={item.title} className="bg-background rounded-xl border border-slate-800 p-5">
123:                 <h3 className="text-brand-primary font-bold mb-2 text-sm">{item.title}</h3>
124:                 <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
125:               </div>
126:             ))}
127:           </div>
128:         </div>
129:       </section>
130: 
131:       <section className="py-14 bg-background text-center">
132:         <div className="container mx-auto px-4 sm:px-6">
133:           <h2 className="text-2xl font-bold text-white mb-3">Need a custom number of mailboxes?</h2>
134:           <p className="text-slate-400 mb-6 max-w-xl mx-auto">We can tailor any plan to fit your exact team size and storage needs. Just send us a message.</p>
135:           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
136:             className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
137:             Chat on WhatsApp
138:           </a>
139:         </div>
140:       </section>
141:     </main>
142:   );
143: }
````

## File: apps/client/app/services/graphic-design/page.tsx
````typescript
  1: import React from 'react';
  2: import Link from 'next/link';
  3: import { Metadata } from 'next';
  4: import { OG_IMAGE_SERVICES, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
  5: import { GRAPHIC_DESIGN_PACKAGES } from '@/app/_lib/constants/services';
  6: import { WHATSAPP_LINK } from '@/app/_lib/constants/site';
  7: import type { ServicePackage } from "@malalang/shared/types";
  8: 
  9: export const metadata: Metadata = {
 10:   title: 'Graphic Design Services | Malalang Phalaborwa',
 11:   description: 'Professional graphic design for local businesses — flyers, business cards, social media kits, and full brand identities. Starting from R300.',
 12:   keywords: 'graphic design, logo design, branding, flyers, business cards, social media design, Phalaborwa',
 13:   alternates: {
 14:     canonical: `${SITE_URL}/services/graphic-design`,
 15:   },
 16:   robots: {
 17:     index: true,
 18:     follow: true,
 19:   },
 20:   openGraph: {
 21:     title: 'Professional Graphic Design Services | Malalang',
 22:     description: 'Custom graphic design for your business — logos, flyers, branding, and more. Starting from R300.',
 23:     url: `${SITE_URL}/services/graphic-design`,
 24:     type: 'website',
 25:     images: [
 26:       {
 27:         url: OG_IMAGE_SERVICES,
 28:         width: 1200,
 29:         height: 630,
 30:         alt: 'Graphic Design Services',
 31:       },
 32:     ],
 33:   },
 34:   twitter: {
 35:     card: 'summary_large_image',
 36:     title: 'Professional Graphic Design | Malalang',
 37:     description: 'Custom graphic design for your business starting from R300.',
 38:     images: [OG_IMAGE_SERVICES],
 39:     creator: TWITTER_CREATOR,
 40:   },
 41: };
 42: 
 43: const CheckIcon = () => (
 44:   <svg className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 45:     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
 46:   </svg>
 47: );
 48: 
 49: const PackageCard: React.FC<{ pkg: ServicePackage }> = ({ pkg }) => (
 50:   <div className={`relative bg-background rounded-xl border flex flex-col transition-all duration-300 ${pkg.isFeatured ? 'border-brand-primary shadow-[0_0_30px_rgba(0,210,106,0.12)]' : 'border-slate-800 hover:border-slate-600'}`}>
 51:     {pkg.isFeatured && (
 52:       <div className="absolute -top-3 left-1/2 -translate-x-1/2">
 53:         <span className="bg-brand-primary text-brand-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Popular</span>
 54:       </div>
 55:     )}
 56:     <div className="p-6 sm:p-8 flex flex-col flex-grow">
 57:       <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{pkg.title}</h3>
 58:       <p className="text-3xl font-extrabold text-brand-primary mb-3">{pkg.price}</p>
 59:       <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{pkg.description}</p>
 60:       <ul className="space-y-2 mb-8">
 61:         {pkg.features.map(f => (
 62:           <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
 63:             <CheckIcon />
 64:             <span>{f}</span>
 65:           </li>
 66:         ))}
 67:       </ul>
 68:       <a
 69:         href={WHATSAPP_LINK}
 70:         target="_blank"
 71:         rel="noopener noreferrer"
 72:         className="mt-auto w-full text-center bg-brand-primary hover:bg-brand-primary/85 text-brand-dark font-bold py-3 px-4 rounded-lg transition-all duration-300 text-sm"
 73:       >
 74:         Order This Design
 75:       </a>
 76:     </div>
 77:   </div>
 78: );
 79: 
 80: import HeroBackground from '@/app/_components/HeroBackground';
 81: 
 82: export default function GraphicDesignPage() {
 83:   return (
 84:     <main>
 85:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
 86:         <HeroBackground />
 87:         <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
 88:           <Link href="/services" className="text-blue-400 hover:text-brand-primary text-sm font-mono mb-4 inline-flex items-center gap-1 transition-colors">
 89:             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
 90:             All Services
 91:           </Link>
 92:           <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4 mt-2">
 93:             Graphic <span className="text-brand-primary glow-green">Design</span>
 94:           </h1>
 95:           <p className="text-xl text-blue-300 font-semibold max-w-2xl mx-auto">
 96:             Stand out with visuals that mean business. From a quick flyer to a full brand identity — designed to make your business look professional and memorable.
 97:           </p>
 98:         </div>
 99:       </section>
100: 
101:       <section className="py-16 bg-background">
102:         <div className="container mx-auto px-4 sm:px-6">
103:           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 items-start">
104:             {GRAPHIC_DESIGN_PACKAGES.map(pkg => (
105:               <PackageCard key={pkg.serviceUrl} pkg={pkg} />
106:             ))}
107:           </div>
108:         </div>
109:       </section>
110: 
111:       {}
112:       <section className="py-12 bg-slate-900">
113:         <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
114:           <h2 className="text-2xl font-bold text-white text-center mb-8">How it works</h2>
115:           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
116:             {[
117:               { step: '01', title: 'Brief Us', desc: 'Tell us what you need via WhatsApp — your business name, colours, and what the design is for.' },
118:               { step: '02', title: 'We Design', desc: 'We create a first draft within 2 business days using your brand identity.' },
119:               { step: '03', title: 'Revise & Deliver', desc: 'You review the design, request changes, and we deliver the final file in all formats you need.' },
120:             ].map(item => (
121:               <div key={item.step} className="bg-background rounded-xl border border-slate-800 p-5">
122:                 <p className="text-brand-primary font-mono text-xs font-bold mb-2">{item.step}</p>
123:                 <h3 className="text-white font-bold mb-2">{item.title}</h3>
124:                 <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
125:               </div>
126:             ))}
127:           </div>
128:         </div>
129:       </section>
130: 
131:       <section className="py-14 bg-background text-center">
132:         <div className="container mx-auto px-4 sm:px-6">
133:           <h2 className="text-2xl font-bold text-white mb-3">Need something not listed here?</h2>
134:           <p className="text-slate-400 mb-6 max-w-xl mx-auto">We design letterheads, menus, banners, posters, certificates, presentations, and more. Get in touch and we'll give you a custom quote.</p>
135:           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
136:             className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
137:             Request a Custom Quote
138:           </a>
139:         </div>
140:       </section>
141:     </main>
142:   );
143: }
````

## File: apps/client/app/services/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'Malalang Digital Services';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Professional Digital Services',
12:     titleSecondary: 'Built for Growth',
13:     description: 'Website design, domain registration, email hosting, and graphic design with no deposit required.',
14:     logo: true,
15:   });
16: }
````

## File: apps/client/app/services/website-design/[service]/[bookings]/components/BookingForm.tsx
````typescript
 1: 'use client';
 2: import React, { useState } from 'react';
 3: import type { ServicePackage, Client } from '@malalang/shared/types';
 4: import AddClient from '@/app/_components/AddClient';
 5: import { motion, AnimatePresence } from 'motion/react';
 6: import { CheckCircle } from 'lucide-react';
 7: 
 8: interface BookingFormProps {
 9:   service: ServicePackage;
10: }
11: 
12: export default function BookingForm({ service }: BookingFormProps) {
13:   const [bookedClient, setBookedClient] = useState<Client | null>(null);
14: 
15:   if (bookedClient) {
16:     return (
17:       <motion.div
18:         initial={{ opacity: 0, scale: 0.9 }}
19:         animate={{ opacity: 1, scale: 1 }}
20:         className="max-w-xl mx-auto bg-slate-900/50 p-12 rounded-3xl border border-brand-primary/20 text-center shadow-2xl"
21:       >
22:         <div className="bg-brand-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
23:           <CheckCircle className="text-brand-primary w-10 h-10" />
24:         </div>
25:         <h2 className="text-3xl font-bold text-white mb-4">Request Received!</h2>
26:         <p className="text-slate-300 text-lg leading-relaxed mb-8">
27:           Thank you, <span className="text-white font-bold">{bookedClient.userName}</span>.
28:           We've noted your interest in the <span className="text-brand-primary font-bold">{service.title}</span>.
29:           Our team will reach out to you at <span className="text-white font-medium">{bookedClient.phone}</span> shortly to schedule our first consultation.
30:         </p>
31:         <button
32:           onClick={() => window.location.href = '/'}
33:           className="bg-brand-primary hover:bg-brand-primary/80 text-brand-dark font-black px-8 py-3 rounded-xl transition-all"
34:         >
35:           Return Home
36:         </button>
37:       </motion.div>
38:     );
39:   }
40: 
41:   return (
42:     <div className="max-w-2xl mx-auto">
43:       <AddClient
44:         onSuccess={setBookedClient}
45:         serviceId={service.id}
46:         title={`Inquire about ${service.title}`}
47:       />
48:     </div>
49:   );
50: }
````

## File: apps/client/app/services/website-design/[service]/[bookings]/layout.tsx
````typescript
 1: import { Metadata } from 'next';
 2: import { SERVICE_PACKAGES } from '@/app/_lib/constants/services';
 3: import { SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 4: import type React from 'react';
 5: 
 6: export async function generateMetadata({
 7:   params,
 8: }: {
 9:   params: Promise<{ service: string; bookings: string }>;
10: }): Promise<Metadata> {
11:   const { service, bookings } = await params;
12:   const servicePackage = SERVICE_PACKAGES.find(s => s.serviceUrl === bookings);
13: 
14:   if (!servicePackage) {
15:     return {
16:       title: 'Booking Form | Malalang',
17:       description: 'Schedule your consultation with our team.',
18:       robots: { index: false, follow: false },
19:     };
20:   }
21: 
22:   const url = `${SITE_URL}/services/website-design/${service}/${bookings}`;
23: 
24:   return {
25:     title: `Book ${servicePackage.title} | Malalang Phalaborwa`,
26:     description: `Schedule your consultation for the ${servicePackage.title}. Let's discuss your project and business goals.`,
27:     keywords: `booking, consultation, ${servicePackage.title}, web design`,
28:     alternates: { canonical: url },
29:     robots: { index: true, follow: true },
30:     openGraph: {
31:       title: `Book ${servicePackage.title} | Malalang`,
32:       description: `Schedule your consultation for the ${servicePackage.title}.`,
33:       url,
34:       type: 'website',
35:       images: [
36:         {
37:           url: '/services/opengraph-image',
38:           width: 1200,
39:           height: 630,
40:           alt: `Book ${servicePackage.title}`,
41:         },
42:       ],
43:     },
44:     twitter: {
45:       card: 'summary_large_image',
46:       title: `Book ${servicePackage.title} | Malalang`,
47:       description: `Schedule your consultation for the ${servicePackage.title}.`,
48:       images: ['/services/opengraph-image'],
49:       creator: TWITTER_CREATOR,
50:     },
51:   };
52: }
53: 
54: export default function Layout({ children }: { children: React.ReactNode }) {
55:   return children;
56: }
````

## File: apps/client/app/services/website-design/[service]/[bookings]/page.tsx
````typescript
 1: "use client";
 2: 
 3: import React from "react";
 4: import { notFound, useParams } from "next/navigation";
 5: import BookingForm from "./components/BookingForm";
 6: import { SERVICE_PACKAGES } from "@/app/_lib/constants/services";
 7: 
 8: const QuestionnairePage: React.FC = () => {
 9:   const params = useParams();
10:   const bookingUrl = params.bookings as string;
11:   const service = SERVICE_PACKAGES.find((s) => s.serviceUrl === bookingUrl);
12: 
13:   if (!service) {
14:     notFound();
15:   }
16: 
17:   return (
18:     <main className="container mx-auto px-6 py-12 md:py-20">
19:       <div className="text-center max-w-3xl mx-auto mb-12">
20:         <h1 className="text-3xl md:text-4xl font-bold text-white">
21:           Let's Start with a Conversation
22:         </h1>
23:         <p className="mt-4 text-lg text-slate-300">
24:           You've selected the{" "}
25:           <span className="font-semibold text-brand-primary">
26:             {service.title}
27:           </span>
28:           . The first step is a one-on-one meeting where we'll discuss your
29:           business, goals, and vision for the new website.
30:         </p>
31:         <p className="mt-4 text-slate-400">
32:           After our chat, we'll move on to a detailed questionnaire and then a
33:           project kick-off. Use the form below to find a time that works for
34:           you.
35:         </p>
36:       </div>
37:       <BookingForm service={service} />
38:     </main>
39:   );
40: };
41: 
42: export default QuestionnairePage;
````

## File: apps/client/app/services/website-design/[service]/layout.tsx
````typescript
 1: import { Metadata } from 'next';
 2: import { SERVICE_PACKAGES } from '@/app/_lib/constants/services';
 3: import { SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 4: import type React from 'react';
 5: 
 6: export async function generateMetadata({
 7:   params,
 8: }: {
 9:   params: Promise<{ service: string }>;
10: }): Promise<Metadata> {
11:   const { service } = await params;
12:   const servicePackage = SERVICE_PACKAGES.find(s => s.serviceUrl === service);
13: 
14:   if (!servicePackage) {
15:     return {
16:       title: 'Service Not Found | Malalang',
17:       description: 'The requested service package could not be found.',
18:       robots: { index: false, follow: false },
19:     };
20:   }
21: 
22:   const url = `${SITE_URL}/services/website-design/${service}`;
23: 
24:   return {
25:     title: `${servicePackage.title} | Malalang Phalaborwa`,
26:     description: servicePackage.description,
27:     keywords: `${servicePackage.title}, web design package, website design, Phalaborwa`,
28:     alternates: { canonical: url },
29:     robots: { index: true, follow: true },
30:     openGraph: {
31:       title: `${servicePackage.title} | Malalang`,
32:       description: servicePackage.description,
33:       url,
34:       type: 'website',
35:       images: [
36:         {
37:           url: '/services/opengraph-image',
38:           width: 1200,
39:           height: 630,
40:           alt: `${servicePackage.title}`,
41:         },
42:       ],
43:     },
44:     twitter: {
45:       card: 'summary_large_image',
46:       title: `${servicePackage.title} | Malalang`,
47:       description: servicePackage.description,
48:       images: ['/services/opengraph-image'],
49:       creator: TWITTER_CREATOR,
50:     },
51:   };
52: }
53: 
54: export default function Layout({ children }: { children: React.ReactNode }) {
55:   return children;
56: }
````

## File: apps/client/app/services/website-design/[service]/page.tsx
````typescript
  1: 'use client';
  2: import React, { useEffect } from 'react';
  3: import { useParams } from 'next/navigation';
  4: import Link from 'next/link';
  5: import { SERVICE_PACKAGES } from '@/app/_lib/constants/services';
  6: 
  7: import HeroBackground from '@/app/_components/HeroBackground';
  8: 
  9: const ServiceDetailPage: React.FC = () => {
 10:   const params = useParams();
 11:   const ServiceName = params.service as string;
 12:   const servicePackage = SERVICE_PACKAGES.find(s => s.serviceUrl === ServiceName);
 13: 
 14:   useEffect(() => {
 15:     window.scrollTo(0, 0);
 16:   }, [ServiceName]);
 17: 
 18:   if (!servicePackage) {
 19:     return (
 20:       <div className="py-20 bg-background min-h-[60vh] flex items-center justify-center">
 21:         <div className="text-center">
 22:           <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
 23:           <p className="text-slate-400 mb-8">Sorry, we couldn't find the service package you're looking for.</p>
 24:           <Link href="/services" className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300">
 25:             Back to All Services
 26:           </Link>
 27:         </div>
 28:       </div>
 29:     );
 30:   }
 31: 
 32:   const CheckIcon = () => (
 33:     <svg className="w-6 h-6 text-brand-secondary mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 34:       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
 35:     </svg>
 36:   );
 37: 
 38:   return (
 39:     <main>
 40:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
 41:         <HeroBackground />
 42:         <div className="container mx-auto px-6 relative z-10">
 43:           <header className="text-center max-w-4xl mx-auto">
 44:             <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
 45:               {servicePackage.title.split(' ').slice(0, -1).join(' ')} <span className="text-brand-primary glow-green">{servicePackage.title.split(' ').slice(-1)}</span>
 46:             </h1>
 47:             <p className="text-3xl text-brand-primary font-extrabold mb-6 glow-green">{servicePackage.price}</p>
 48:             <p className="text-xl text-blue-300 font-semibold max-w-2xl mx-auto">{servicePackage.description}</p>
 49:           </header>
 50:         </div>
 51:       </section>
 52: 
 53:       <section className="py-20 bg-background">
 54:         <div className="container mx-auto px-6">
 55: 
 56:           <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
 57:             <div className="lg:col-span-2 bg-background p-8 rounded-lg border border-slate-800">
 58:               <h2 className="text-3xl font-bold text-white mb-6">Package Details</h2>
 59:               <p className="text-slate-300 leading-relaxed mb-8">{servicePackage.longDescription}</p>
 60: 
 61:               <h3 className="text-2xl font-bold text-white mb-4">Key Features Included:</h3>
 62:               <ul className="space-y-4">
 63:                 {servicePackage.features.map(feature => (
 64:                   <li key={feature} className="flex items-start text-slate-200 text-lg">
 65:                     <CheckIcon />
 66:                     <span>{feature}</span>
 67:                   </li>
 68:                 ))}
 69:               </ul>
 70:             </div>
 71: 
 72:             <aside className="lg:col-span-1 space-y-8">
 73:               <div className="bg-background p-8 rounded-lg border border-slate-800">
 74:                 <h3 className="text-2xl font-bold text-white mb-4">Who is this for?</h3>
 75:                 <p className="text-slate-300 leading-relaxed">{servicePackage.idealFor}</p>
 76:               </div>
 77:               <div className="bg-brand-primary/10 p-8 rounded-lg border border-brand-primary/30 text-center">
 78:                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
 79:                  <p className="text-slate-300 mb-6">Let's get some details about your project.</p>
 80:                  <Link
 81:                     href={`/services/website-design/${servicePackage.serviceUrl}/${servicePackage.serviceUrl}`}
 82:                     className="w-full block bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
 83:                  >
 84:                     Get Started
 85:                  </Link>
 86:               </div>
 87:               <div className="text-center">
 88:                 <Link href="/services/website-design" className="font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-300">
 89:                     &larr; Back to Website Design
 90:                 </Link>
 91:               </div>
 92:             </aside>
 93:           </div>
 94:         </div>
 95:       </section>
 96:     </main>
 97:   );
 98: };
 99: 
100: export default ServiceDetailPage;
````

## File: apps/client/app/services/website-design/page.tsx
````typescript
  1: import React from 'react';
  2: import Link from 'next/link';
  3: import { Metadata } from 'next';
  4: import { OG_IMAGE_SERVICES, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
  5: import { SERVICE_PACKAGES } from '@/app/_lib/constants/services';
  6: import { WHATSAPP_LINK } from '@/app/_lib/constants/site';
  7: import type { ServicePackage } from "@malalang/shared/types";
  8: 
  9: export const metadata: Metadata = {
 10:   title: 'Website Design Packages | Malalang Phalaborwa',
 11:   description: 'Professional website design packages for local businesses in Phalaborwa. From R1,000 landing pages to full e-commerce stores. No deposit required.',
 12:   keywords: 'website design, web design packages, affordable websites, Phalaborwa web design, e-commerce design',
 13:   alternates: {
 14:     canonical: `${SITE_URL}/services/website-design`,
 15:   },
 16:   robots: {
 17:     index: true,
 18:     follow: true,
 19:   },
 20:   openGraph: {
 21:     title: 'Website Design Packages | Malalang',
 22:     description: 'Professional website design packages starting from R1,000. Custom, responsive websites for your business.',
 23:     url: `${SITE_URL}/services/website-design`,
 24:     type: 'website',
 25:     images: [
 26:       {
 27:         url: OG_IMAGE_SERVICES,
 28:         width: 1200,
 29:         height: 630,
 30:         alt: 'Website Design Packages',
 31:       },
 32:     ],
 33:   },
 34:   twitter: {
 35:     card: 'summary_large_image',
 36:     title: 'Website Design Packages | Malalang',
 37:     description: 'Professional website design packages starting from R1,000.',
 38:     images: [OG_IMAGE_SERVICES],
 39:     creator: TWITTER_CREATOR,
 40:   },
 41: };
 42: 
 43: const CheckIcon = () => (
 44:   <svg className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 45:     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
 46:   </svg>
 47: );
 48: 
 49: const PackageCard: React.FC<{ pkg: ServicePackage }> = ({ pkg }) => (
 50:   <div className={`relative bg-background rounded-xl border flex flex-col transition-all duration-300 ${pkg.isFeatured ? 'border-brand-primary shadow-[0_0_30px_rgba(0,210,106,0.12)]' : 'border-slate-800 hover:border-slate-600'}`}>
 51:     {pkg.isFeatured && (
 52:       <div className="absolute -top-3 left-1/2 -translate-x-1/2">
 53:         <span className="bg-brand-primary text-brand-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
 54:       </div>
 55:     )}
 56:     {pkg.isCombo && (
 57:       <div className="absolute -top-3 left-1/2 -translate-x-1/2">
 58:         <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Best Value</span>
 59:       </div>
 60:     )}
 61:     <div className="p-6 sm:p-8 flex flex-col flex-grow">
 62:       <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{pkg.title}</h3>
 63:       <p className="text-3xl font-extrabold text-brand-primary mb-3">{pkg.price}</p>
 64:       <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{pkg.description}</p>
 65:       {pkg.savingsNote && (
 66:         <p className="text-blue-400 text-xs font-semibold mb-4 bg-blue-500/10 border border-blue-500/20 rounded px-3 py-2">
 67:           {pkg.savingsNote}
 68:         </p>
 69:       )}
 70:       <ul className="space-y-2 mb-8">
 71:         {pkg.features.map(f => (
 72:           <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
 73:             <CheckIcon />
 74:             <span>{f}</span>
 75:           </li>
 76:         ))}
 77:       </ul>
 78:       <div className="flex flex-col sm:flex-row gap-3 mt-auto">
 79:         <Link
 80:           href={`/services/website-design/${pkg.serviceUrl}`}
 81:           className="flex-1 text-center border border-brand-primary text-brand-primary hover:bg-brand-primary/10 font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
 82:         >
 83:           Full Details
 84:         </Link>
 85:         <Link
 86:           href={`/services/website-design/${pkg.serviceUrl}/${pkg.serviceUrl}`}
 87:           className="flex-1 text-center bg-brand-primary hover:bg-brand-primary/85 text-brand-dark font-bold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm"
 88:         >
 89:           Get Started
 90:         </Link>
 91:       </div>
 92:     </div>
 93:   </div>
 94: );
 95: 
 96: import HeroBackground from '@/app/_components/HeroBackground';
 97: 
 98: export default function WebsiteDesignPage() {
 99:   return (
100:     <main>
101:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
102:         <HeroBackground />
103:         <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
104:           <Link href="/services" className="text-blue-400 hover:text-brand-primary text-sm font-mono mb-4 inline-flex items-center gap-1 transition-colors">
105:             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
106:             All Services
107:           </Link>
108:           <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4 mt-2">
109:             Website Design <span className="text-brand-primary glow-green">Packages</span>
110:           </h1>
111:           <p className="text-xl text-blue-300 font-semibold max-w-2xl mx-auto">
112:             Professional websites built for Phalaborwa businesses. No deposit — you only pay when you are 100% satisfied.
113:           </p>
114:         </div>
115:       </section>
116: 
117:       <section className="py-16 bg-background">
118:         <div className="container mx-auto px-4 sm:px-6">
119:           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 items-start">
120:             {SERVICE_PACKAGES.map(pkg => (
121:               <PackageCard key={pkg.serviceUrl} pkg={pkg} />
122:             ))}
123:           </div>
124:         </div>
125:       </section>
126: 
127:       <section className="py-14 bg-slate-900 text-center">
128:         <div className="container mx-auto px-4 sm:px-6">
129:           <h2 className="text-2xl font-bold text-white mb-3">Need something custom?</h2>
130:           <p className="text-slate-400 mb-6 max-w-xl mx-auto">Every business is different. Message us on WhatsApp and we'll build a package around your exact needs and budget.</p>
131:           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
132:             className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
133:             Chat on WhatsApp
134:           </a>
135:         </div>
136:       </section>
137:     </main>
138:   );
139: }
````

## File: apps/client/tsconfig.json
````json
 1: {
 2:   "extends": "@malalang/typescript-config/nextjs.json",
 3:   "compilerOptions": {
 4:     "incremental": true,
 5:     "downlevelIteration": true, 
 6:     "plugins": [
 7:       {
 8:         "name": "next"
 9:       }
10:     ],
11:     "types": ["node", "react", "react-dom"],
12:     "paths": {
13:       "@/*": [
14:         "./*"
15:       ]
16:     }
17:   },
18:   "include": [
19:     "next-env.d.ts",
20:     "**/*.ts",
21:     "**/*.tsx",
22:     ".next/types/**/*.ts",
23:     ".next/dev/types/**/*.ts"
24:   ],
25:   "exclude": [
26:     "node_modules"
27:   ]
28: }
````

## File: packages/ai/package.json
````json
 1: {
 2:   "name": "@malalang/ai",
 3:   "version": "0.0.1",
 4:   "private": true,
 5:   "type": "module",
 6:   "exports": {
 7:     ".": "./src/index.ts"
 8:   },
 9:   "scripts": {
10:     "build": "tsc",
11:     "check-types": "tsc --noEmit"
12:   },
13:   "dependencies": {
14:     "@genkit-ai/google-genai": "1.34.0",
15:     "genkit": "1.34.0",
16:     "zod": "catalog:"
17:   },
18:   "devDependencies": {
19:     "@malalang/typescript-config": "workspace:*",
20:     "@types/node": "^22.19.19",
21:     "typescript": "catalog:"
22:   }
23: }
````

## File: packages/ai/src/flows/enhanceAnswerFlow.ts
````typescript
 1: 'use server';
 2: import { z } from "genkit";
 3: import { ai } from "../genkit";
 4: 
 5: export const enhanceAnswerFlow = ai.defineFlow(
 6:   {
 7:     name: 'enhanceAnswerFlow',
 8:     inputSchema: z.object({
 9:       question: z.string(),
10:       answer: z.string(),
11:       businessName: z.string(),
12:       userName: z.string(),
13:     }),
14:     outputSchema: z.string(),
15:   },
16:   async ({ question, answer, businessName, userName }) => {
17:     const prompt = `As an expert copywriter, enhance the following answer for a questionnaire.
18:       The user's name is ${userName} and their business is called ${businessName}.
19:       Question: "${question}"
20:       User's Answer: "${answer}"
21:       Enhanced Answer:`;
22: 
23:     const llmResponse = await ai.generate({
24:       prompt: prompt,
25:       config: {
26:         temperature: 0.5,
27:       },
28:     });
29: 
30:     return llmResponse.text || answer;
31:   }
32: );
````

## File: packages/ai/src/flows/generateVideoFlow.ts
````typescript
 1: 'use server';
 2: 
 3: import { ai } from "../genkit";
 4: import { z } from "genkit";
 5: 
 6: 
 7: 
 8: const SegmentSchema = z.object({
 9:   text: z.string().describe("The text of the script segment."),
10:   videoSearchQuery: z
11:     .string()
12:     .describe(
13:       "A concise search query for a stock video that visually represents the segment text."
14:     ),
15: });
16: 
17: const InputSchema = z.object({
18:   topic: z
19:     .string()
20:     .describe("The topic for which to generate script segments."),
21: });
22: 
23: const OutputSchema = z.object({
24:   segments: z
25:     .array(SegmentSchema)
26:     .describe(
27:       "An array of script segments, each with text and a video search query."
28:     ),
29: });
30: 
31: 
32: const videoContentPrompt = ai.definePrompt({
33:   name: "videoContent",
34:   input: { schema: InputSchema },
35:   output: { schema: OutputSchema },
36:   prompt: `You are a script writer for video content.
37:   Generate a list of script segments based on the following topic:
38:   {{topic}}
39:   Each segment should be concise and focus on a specific subtopic.
40:   For each segment, also provide a short, effective search query (3-5 words) for finding a relevant stock video.
41:   Return the segments as a list of objects, each containing the text and the videoSearchQuery.
42:   `,
43: });
44: 
45: const generateVideoFlow = ai.defineFlow(
46:   {
47:     name: "generateVideoFlow",
48:     inputSchema: InputSchema,
49:     outputSchema: OutputSchema,
50:   },
51:   async (input) => {
52:     const { output } = await videoContentPrompt(input);
53:     return output!;
54:   }
55: );
56: 
57: export { generateVideoFlow };
````

## File: packages/ai/src/flows/suggestAnswerFlow.ts
````typescript
 1: 'use server';
 2: 
 3: import { z } from "genkit";
 4: import { ai } from "../genkit";
 5: 
 6: 
 7: 
 8: const SuggestAnswerInputSchema = z.object({
 9:   question: z.string(),
10:   businessName: z.string(),
11:   userName: z.string(),
12: });
13: 
14: const SuggestAnswerOutputSchema = z.array(z.string());
15: 
16: 
17: 
18: const suggestAnswerPrompt = ai.definePrompt({
19:   name: "suggestAnswerPrompt",
20:   input: { schema: SuggestAnswerInputSchema },
21:   output: { schema: SuggestAnswerOutputSchema },
22:   prompt: `As an expert business consultant, suggest 3-5 concise and creative answers for the following questionnaire question.
23:     The user's name is {{userName}} and their business is called {{businessName}}.
24:     Question: "{{question}}"
25:     Suggestions (comma-separated):`,
26: });
27: 
28: 
29: 
30: export const suggestAnswerFlow = ai.defineFlow(
31:   {
32:     name: "suggestAnswerFlow",
33:     inputSchema: SuggestAnswerInputSchema,
34:     outputSchema: SuggestAnswerOutputSchema,
35:   },
36:   async (input) => {
37:     const { output } = await suggestAnswerPrompt(input);
38:     return output!;
39:   }
40: );
````

## File: packages/ai/src/genkit.ts
````typescript
1: import { genkit } from 'genkit';
2: import { googleAI } from '@genkit-ai/google-genai';
3: 
4: export const ai = genkit({
5:   plugins: [googleAI()],
6:   model: 'googleai/gemini-2.5-flash',
7: });
````

## File: packages/ai/src/index.ts
````typescript
1: export * from './genkit';
2: export * from './flows/enhanceAnswerFlow';
3: export * from './flows/generateVideoFlow';
4: export * from './flows/suggestAnswerFlow';
````

## File: packages/ai/tsconfig.json
````json
1: {
2:   "extends": "@malalang/typescript-config/base.json",
3:   "compilerOptions": {
4:     "outDir": "dist",
5:     "rootDir": "src"
6:   },
7:   "include": ["src/**/*"],
8:   "exclude": ["node_modules", "dist"]
9: }
````

## File: packages/eslint-config/package.json
````json
 1: {
 2:   "name": "@malalang/eslint-config",
 3:   "version": "0.0.0",
 4:   "type": "module",
 5:   "private": true,
 6:   "exports": {
 7:     "./base": "./base.js",
 8:     "./next-js": "./next.js"
 9:   },
10:   "devDependencies": {
11:     "@eslint/js": "^9.39.1",
12:     "@next/eslint-plugin-next": "^16.2.0",
13:     "eslint": "^9.39.1",
14:     "eslint-config-prettier": "^10.1.1",
15:     "eslint-plugin-only-warn": "^1.1.0",
16:     "eslint-plugin-react": "^7.37.5",
17:     "eslint-plugin-react-hooks": "^5.2.0",
18:     "eslint-plugin-turbo": "^2.7.1",
19:     "globals": "^16.5.0",
20:     "typescript": "catalog:",
21:     "typescript-eslint": "^8.50.0"
22:   }
23: }
````

## File: packages/shared/src/supabase/server.ts
````typescript
 1: import { createServerClient, type CookieOptions } from '@supabase/ssr';
 2: import { Database } from '@malalang/shared/types';
 3: import { cookies } from 'next/headers';
 4: 
 5: export async function createSupabaseServerClient() {
 6:   const cookieStore = await cookies();
 7: 
 8:   return createServerClient<Database>(
 9:     process.env.NEXT_PUBLIC_SUPABASE_URL!,
10:     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
11:     {
12:       cookies: {
13:         getAll() {
14:           return cookieStore.getAll();
15:         },
16:         setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
17:           try {
18:             cookiesToSet.forEach(({ name, value, options }) =>
19:               cookieStore.set(name, value, options)
20:             );
21:           } catch {
22: 
23:           }
24:         },
25:       },
26:     }
27:   );
28: }
````

## File: packages/shared/src/supabase/services/blogs.ts
````typescript
  1: import { supabase, handleResponse } from "../client";
  2: import type { BlogPost, Author } from "../../types";
  3: import type { Database } from "../../types/supabase";
  4: 
  5: type BlogRow = Database['public']['Tables']['blogs']['Row'];
  6: type ProfileRow = Database['public']['Tables']['profiles']['Row'];
  7: 
  8: interface BlogWithProfile extends BlogRow {
  9:   profiles: ProfileRow | null;
 10: }
 11: 
 12: function mapBlogPost(d: BlogWithProfile): BlogPost {
 13:   return {
 14:     id: d.id,
 15:     title: d.title,
 16:     slug: d.slug,
 17:     htmlContent: d.html_content,
 18:     excerpt: d.excerpt || "",
 19:     metaTitle: d.meta_title || "",
 20:     metaDescription: d.meta_description || "",
 21:     publishedAt: d.published_at || new Date().toISOString(),
 22:     tags: [],
 23:     imageUrl: d.image_url || "",
 24:     readingTimeMinutes: d.reading_time_minutes || 0,
 25:     keywords: d.keywords || "",
 26:     source: d.source || "malalang",
 27:     status: d.status as 'draft' | 'published' | 'archived',
 28:     author: d.profiles ? {
 29:       id: d.profiles.id,
 30:       name: d.profiles.name,
 31:       avatarUrl: d.profiles.avatar_url || "",
 32:       imageUrl: d.profiles.image_url || "",
 33:       bio: d.profiles.bio || "",
 34:     } : {
 35:       id: "abram-ntsako",
 36:       name: "AEN Nyathi",
 37:       avatarUrl: "/assets/profile.jpg",
 38:       imageUrl: "/assets/profile.jpg",
 39:       bio: "Abram Ntsako is the founder of Malalang Pty Ltd, a web development studio dedicated to empowering local businesses in Phalaborwa. With a passion for clean code and user-centric design, he helps SMEs build a strong online presence without breaking the bank."
 40:     },
 41:   };
 42: }
 43: 
 44: export async function getBlogs(options?: { status?: 'draft' | 'published' | 'archived'; limit?: number }): Promise<BlogPost[]> {
 45:   let query = supabase
 46:     .from("blogs")
 47:     .select("*, profiles(*)")
 48:     .order("published_at", { ascending: false });
 49: 
 50:   if (options?.status) {
 51:     query = query.eq("status", options.status);
 52:   }
 53:   if (options?.limit) {
 54:     query = query.limit(options.limit);
 55:   }
 56: 
 57:   const data = await handleResponse(query);
 58:   return ((data as BlogWithProfile[]) || []).map(mapBlogPost);
 59: }
 60: 
 61: export async function getBlogPostsWithAuthors(options?: { status?: 'draft' | 'published' | 'archived'; limit?: number }): Promise<{
 62:   posts: BlogPost[];
 63:   authors: Author[];
 64: }> {
 65:   const posts = await getBlogs(options);
 66:   const authors = Array.from(
 67:     new Map(posts.map((p) => [p.author.id, p.author])).values()
 68:   );
 69: 
 70:   return { posts, authors };
 71: }
 72: 
 73: export async function getBlogById(id: string): Promise<BlogPost | null> {
 74:   const data = await handleResponse(
 75:     supabase
 76:       .from("blogs")
 77:       .select("*, profiles(*)")
 78:       .eq("id", id)
 79:       .single()
 80:   );
 81:   return data ? mapBlogPost(data as BlogWithProfile) : null;
 82: }
 83: 
 84: export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
 85:   const data = await handleResponse(
 86:     supabase
 87:       .from("blogs")
 88:       .select("*, profiles(*)")
 89:       .eq("slug", slug)
 90:       .single()
 91:   );
 92:   return data ? mapBlogPost(data as BlogWithProfile) : null;
 93: }
 94: 
 95: export async function createBlog(data: Omit<BlogPost, "id">): Promise<string> {
 96:   const insertData: Database['public']['Tables']['blogs']['Insert'] = {
 97:     title: data.title,
 98:     slug: data.slug,
 99:     html_content: data.htmlContent,
100:     excerpt: data.excerpt,
101:     meta_title: data.metaTitle,
102:     meta_description: data.metaDescription,
103:     image_url: data.imageUrl,
104:     reading_time_minutes: data.readingTimeMinutes,
105:     keywords: data.keywords,
106:     source: data.source,
107:     status: data.status,
108:     author_id: data.author.id === 'abram-ntsako' ? null : data.author.id,
109:     published_at: data.publishedAt,
110:   };
111: 
112:   const result = await handleResponse(
113:     supabase.from("blogs").insert(insertData).select("id").single()
114:   );
115:   return (result as unknown as { id: string }).id;
116: }
117: 
118: export async function updateBlog(id: string, data: Partial<BlogPost>): Promise<void> {
119:   const updateData: Database['public']['Tables']['blogs']['Update'] = {};
120:   if (data.title !== undefined) updateData.title = data.title;
121:   if (data.slug !== undefined) updateData.slug = data.slug;
122:   if (data.htmlContent !== undefined) updateData.html_content = data.htmlContent;
123:   if (data.excerpt !== undefined) updateData.excerpt = data.excerpt;
124:   if (data.metaTitle !== undefined) updateData.meta_title = data.metaTitle;
125:   if (data.metaDescription !== undefined) updateData.meta_description = data.metaDescription;
126:   if (data.imageUrl !== undefined) updateData.image_url = data.imageUrl;
127:   if (data.readingTimeMinutes !== undefined) updateData.reading_time_minutes = data.readingTimeMinutes;
128:   if (data.keywords !== undefined) updateData.keywords = data.keywords;
129:   if (data.status !== undefined) updateData.status = data.status;
130:   if (data.publishedAt !== undefined) updateData.published_at = data.publishedAt;
131: 
132:   await handleResponse(
133:     supabase.from("blogs").update(updateData).eq("id", id)
134:   );
135: }
136: 
137: export async function deleteBlog(id: string): Promise<void> {
138:   await handleResponse(supabase.from("blogs").delete().eq("id", id));
139: }
````

## File: packages/shared/src/supabase/services/content.ts
````typescript
 1: import { supabase, handleResponse } from "../client";
 2: import type { PortfolioItem, Testimonial, FaqItem } from "../../types";
 3: import type { Database } from "../../types/supabase";
 4: 
 5: type PortfolioRow = Database['public']['Tables']['portfolio_items']['Row'];
 6: type TestimonialRow = Database['public']['Tables']['testimonials']['Row'];
 7: type FaqRow = Database['public']['Tables']['faqs']['Row'];
 8: 
 9: 
10: 
11: export async function getPortfolioItems(): Promise<PortfolioItem[]> {
12:   const data = await handleResponse<PortfolioRow[]>(
13:     supabase.from("portfolio_items").select("*").order("display_order", { ascending: true })
14:   );
15:   return ((data as PortfolioRow[]) || []).map((p) => ({
16:     id: p.id,
17:     title: p.title,
18:     description: p.description || "",
19:     imageUrl: p.image_url || "",
20:     category: p.category || "",
21:   }));
22: }
23: 
24: export async function createPortfolioItem(data: Database['public']['Tables']['portfolio_items']['Insert']) {
25:   return await handleResponse(supabase.from("portfolio_items").insert(data).select().single());
26: }
27: 
28: export async function updatePortfolioItem(id: string, data: Database['public']['Tables']['portfolio_items']['Update']) {
29:   return await handleResponse(supabase.from("portfolio_items").update(data).eq("id", id));
30: }
31: 
32: export async function deletePortfolioItem(id: string) {
33:   return await handleResponse(supabase.from("portfolio_items").delete().eq("id", id));
34: }
35: 
36: 
37: 
38: export async function getTestimonials(): Promise<Testimonial[]> {
39:   const data = await handleResponse<TestimonialRow[]>(
40:     supabase.from("testimonials").select("*").order("display_order", { ascending: true })
41:   );
42:   return ((data as TestimonialRow[]) || []).map((t) => ({
43:     id: t.id,
44:     quote: t.quote,
45:     author: t.author,
46:     company: t.company || "",
47:   }));
48: }
49: 
50: export async function createTestimonial(data: Database['public']['Tables']['testimonials']['Insert']) {
51:   return await handleResponse(supabase.from("testimonials").insert(data).select().single());
52: }
53: 
54: export async function updateTestimonial(id: string, data: Database['public']['Tables']['testimonials']['Update']) {
55:   return await handleResponse(supabase.from("testimonials").update(data).eq("id", id));
56: }
57: 
58: export async function deleteTestimonial(id: string) {
59:   return await handleResponse(supabase.from("testimonials").delete().eq("id", id));
60: }
61: 
62: 
63: 
64: export async function getFaqs(): Promise<FaqItem[]> {
65:   const data = await handleResponse<FaqRow[]>(
66:     supabase.from("faqs").select("*").order("display_order", { ascending: true })
67:   );
68:   return ((data as FaqRow[]) || []).map((f) => ({
69:     id: f.id,
70:     question: f.question,
71:     answer: f.answer,
72:   }));
73: }
74: 
75: export async function createFaq(data: Database['public']['Tables']['faqs']['Insert']) {
76:   return await handleResponse(supabase.from("faqs").insert(data).select().single());
77: }
78: 
79: export async function updateFaq(id: string, data: Database['public']['Tables']['faqs']['Update']) {
80:   return await handleResponse(supabase.from("faqs").update(data).eq("id", id));
81: }
82: 
83: export async function deleteFaq(id: string) {
84:   return await handleResponse(supabase.from("faqs").delete().eq("id", id));
85: }
````

## File: packages/shared/src/supabase/services/messages.ts
````typescript
 1: import { supabase, handleResponse } from "../client";
 2: import type { ContactMessage } from "../../types";
 3: import type { Database } from "../../types/supabase";
 4: 
 5: type ContactRow = Database['public']['Tables']['contacts']['Row'];
 6: 
 7: export async function getMessages(count = 50): Promise<ContactMessage[]> {
 8:   const data = await handleResponse<ContactRow[]>(
 9:     supabase
10:       .from("contacts")
11:       .select("*")
12:       .order("created_at", { ascending: false })
13:       .limit(count)
14:   );
15:   return ((data as ContactRow[]) || []).map((d) => ({
16:     id: d.id,
17:     name: d.name,
18:     email: d.email,
19:     message: d.message,
20:     createdAt: d.created_at || new Date().toISOString(),
21:     read: d.is_read || false,
22:     responded: d.is_responded || false,
23:   }));
24: }
25: 
26: export async function getMessageById(id: string): Promise<ContactMessage | null> {
27:   const data = await handleResponse<ContactRow>(
28:     supabase.from("contacts").select("*").eq("id", id).single()
29:   );
30:   if (!data) return null;
31:   const d = data as ContactRow;
32:   return {
33:     id: d.id,
34:     name: d.name,
35:     email: d.email,
36:     message: d.message,
37:     createdAt: d.created_at || new Date().toISOString(),
38:     read: d.is_read || false,
39:     responded: d.is_responded || false,
40:   };
41: }
42: 
43: export async function createMessage(data: Omit<ContactMessage, "id" | "createdAt" | "read" | "responded">): Promise<string> {
44:   const result = await handleResponse(
45:     supabase.from("contacts").insert({
46:       name: data.name,
47:       email: data.email,
48:       message: data.message
49:     }).select("id").single()
50:   );
51:   if (!result || !('id' in result)) throw new Error("Failed to create message");
52:   return (result as { id: string }).id;
53: }
54: 
55: export async function updateMessage(id: string, data: Partial<ContactMessage>): Promise<void> {
56:   const updateData: Database['public']['Tables']['contacts']['Update'] = {};
57:   if (data.read !== undefined) updateData.is_read = data.read;
58:   if (data.responded !== undefined) updateData.is_responded = data.responded;
59: 
60:   await handleResponse(
61:     supabase.from("contacts").update(updateData).eq("id", id)
62:   );
63: }
64: 
65: export async function deleteMessage(id: string): Promise<void> {
66:   await handleResponse(supabase.from("contacts").delete().eq("id", id));
67: }
````

## File: packages/shared/src/supabase/services/questionnaires.ts
````typescript
 1: import { supabase, handleResponse } from "../client";
 2: import type { Database } from "../../types/supabase";
 3: 
 4: export async function createQuestionnaire(data: any): Promise<string> {
 5:   const result = await handleResponse(
 6:     supabase.from("questionnaires").insert({ data: data }).select("id").single()
 7:   );
 8:   if (!result || !('id' in result)) throw new Error("Failed to create questionnaire");
 9:   return (result as { id: string }).id;
10: }
11: 
12: export async function getQuestionnaires(): Promise<Database['public']['Tables']['questionnaires']['Row'][]> {
13:   const data = await handleResponse(
14:     supabase.from("questionnaires").select("*").order("created_at", { ascending: false })
15:   );
16:   return (data as Database['public']['Tables']['questionnaires']['Row'][]) || [];
17: }
````

## File: packages/typescript-config/base.json
````json
 1: {
 2:   "$schema": "https://json.schemastore.org/tsconfig",
 3:   "compilerOptions": {
 4:     "declaration": true,
 5:     "declarationMap": true,
 6:     "esModuleInterop": true,
 7:     "allowSyntheticDefaultImports": true,
 8:     "incremental": false,
 9:     "isolatedModules": true,
10:     "lib": ["es2022", "DOM", "DOM.Iterable"],
11:     "module": "ESNext",
12:     "moduleDetection": "force",
13:     "moduleResolution": "bundler",
14:     "noUncheckedIndexedAccess": true,
15:     "resolveJsonModule": true,
16:     "skipLibCheck": true,
17:     "strict": true,
18:     "target": "ES2022"
19:   }
20: }
````

## File: README.md
````markdown
  1: # Malalang — Web Development for Phalaborwa SMEs
  2: 
  3: Malalang is a boutique web design and development studio focused on helping small and medium-sized businesses in Phalaborwa and the surrounding Limpopo region get online quickly, affordably, and with zero upfront risk.
  4: 
  5: This repository contains the codebase for the public site (malalang.co.za) which documents services, pricing, portfolio, and the "no deposit — pay on completion" offering.
  6: 
  7: ---
  8: 
  9: ## Table of contents
 10: 
 11: - [Vision](#vision)
 12: - [Key features](#key-features)
 13: - [Technology stack](#technology-stack)
 14: - [Pricing & business model (public site)](#pricing--business-model-public-site)
 15: - [Project workflow (how we work with clients)](#project-workflow-how-we-work-with-clients)
 16: - [Getting started (local development)](#getting-started-local-development)
 17: - [Build & deployment](#build--deployment)
 18: - [Important files / where to edit content](#important-files--where-to-edit-content)
 19: - [SEO, Local SEO and structured data](#seo-local-seo-and-structured-data)
 20: - [Accessibility & performance](#accessibility--performance)
 21: - [Contributing](#contributing)
 22: - [Contact](#contact)
 23: - [License & credits](#license--credits)
 24: 
 25: ---
 26: 
 27: ## Vision
 28: 
 29: Malalang exists to lower the financial and technical barriers that often stop small businesses from having an effective online presence. We champion a trust-first model — no deposit and payment only on client satisfaction — and combine in-person onboarding with transparent, collaborative development via live Vercel preview links.
 30: 
 31: ---
 32: 
 33: ## Key features (site highlights)
 34: 
 35: - Clear, local-first messaging targeted at Phalaborwa SMEs
 36: - Transparent fixed-price packages (Landing page, Base, Standard)
 37: - No deposit / pay-on-completion business model
 38: - Live staging links (Vercel preview URLs) so clients can follow progress
 39: - Portfolio, testimonials and blog / insights authored by the founder
 40: - Mobile-first responsive design
 41: - SEO-friendly metadata and structured content
 42: - WhatsApp click-to-chat CTA for fast onboarding
 43: 
 44: ---
 45: 
 46: ## Technology stack
 47: 
 48: - Framework: Next.js (App Router)
 49: - UI: React + Tailwind CSS
 50: - Language: TypeScript
 51: - Hosting / Deployment: Vercel
 52: - Analytics: Vercel Web Analytics (optional) / GA
 53: - Content: Static + possible headless CMS (Sanity or similar) patterns used in the repo
 54: - Repo & CI: GitHub (automated deployments to Vercel)
 55: 
 56: ---
 57: 
 58: ## Pricing & business model (public site)
 59: 
 60: Public-facing pricing (for reference on the website):
 61: 
 62: - Landing Page — R1,000
 63: - Base Package (5 pages) — R1,500
 64: - Standard Package (feature-rich site) — R2,500
 65: - Add-ons: SEO, ongoing maintenance, launch packs, etc.
 66: 
 67: No upfront fees; payment requested only after client approval of the finished site.
 68: 
 69: ---
 70: 
 71: ## Project workflow (as documented on the site)
 72: 
 73: 1. Intro / intake — face-to-face meeting or WhatsApp to gather requirements
 74: 2. Agreement & scope confirmation
 75: 3. Live staging development — client receives a private Vercel preview URL
 76: 4. Review & two rounds of revisions (included)
 77: 5. Final sign-off and payment
 78: 6. Handover of credentials, assets, and optional care plan for post-launch support
 79: 
 80: ---
 81: 
 82: ## Getting started (local development)
 83: 
 84: These commands assume a typical Next.js / TypeScript project. Adjust the package manager to your preference (npm, pnpm, yarn).
 85: 
 86: 1. Clone the repository
 87:    ```bash
 88:    git clone https://github.com/AEN-Nyathi/Malalang.git
 89:    cd Malalang
 90:    ```
 91: 
 92: 2. Install dependencies
 93:    ```bash
 94:    # pnpm install
 95:  
 96:    ```
 97: 
 98: 3. Run the dev server
 99:    ```bash
100:    turbo run dev
101:    # typically: next dev
102:    ```
103: 
104: 4. Build for production
105:    ```bash
106:    turbo run build
107:    npm start
108:    ```
109: 
110: Notes:
111: - The project uses the Next.js App Router (app directory). The root layout is at `app/layout.tsx`.
112: - If any environment variables are required for integrations (analytics, CMS, WhatsApp API), they should be defined in `.env.local`. Check the `lib/constants` folder for any constants used by the app.
113: 
114: ---
115: 
116: ## Build & deployment
117: 
118: This project is designed for Vercel:
119: 
120: - Connect the GitHub repository to Vercel.
121: - Vercel will create Preview URLs for branches and PRs automatically.
122: - Production deploys occur when you push to the `main` branch (or whichever branch is configured as production).
123: - Vercel handles SSL/TLS, CDN, and fast rollbacks.
124: 
125: Deployment checklist:
126: - Verify `NEXT_PUBLIC_` environment variables on Vercel (analytics IDs, CMS tokens).
127: - Confirm OG and SEO images are present under `public/images/` and accessible at `https://malalang.co.za/images/`.
128: - Confirm WhatsApp link constant is set correctly (see `lib/constants/site`).
129: 
130: ---
131: 
132: ## Important files / where to edit content
133: 
134: - app/layout.tsx — global layout, site metadata (title, openGraph, twitter), and JSON-LD Organization snippet.
135:   - Current path: `app/layout.tsx`
136: - components/ — site UI components (Header, Footer, Cta, SkipToContent, Toaster, etc.)
137: - public/images/ — OG images, logo, favicon
138: - lib/constants/ — site-level constants (e.g., `WHATSAPP_LINK`)
139: - pages or app/* — route content and pages (home, about, pricing, portfolio, blog)
140: - README and Research Report — documentation and strategy
141: 
142: If you want to change global metadata, edit `app/layout.tsx`. The JSON-LD script currently injects Organization schema — consider replacing or augmenting with LocalBusiness schema for improved local SEO.
143: 
144: ---
145: 
146: ## SEO, Local SEO and structured data (recommendations)
147: 
148: - Add LocalBusiness schema (schema.org/LocalBusiness) with:
149:   - official business name, street address, city (Phalaborwa), postal code, region, country
150:   - telephone and contactPoint
151:   - openingHours (if available)
152:   - geo coordinates (latitude / longitude)
153:   - sameAs links (social profiles)
154: - Ensure canonical URLs and hreflang if you add additional locales
155: - Provide descriptive alt text for portfolio images
156: - Maintain and publish local-focus blog posts, e.g.,:
157:   - "Why every Phalaborwa business needs a website in 2025"
158:   - "Choosing the right website package for your restaurant or tour business"
159: - Validate structured data using Google Rich Results test
160: 
161: Example: `app/layout.tsx` currently includes an Organization JSON-LD. Consider changing it to LocalBusiness and filling accurate address/phone details.
162: 
163: ---
164: 
165: ## Accessibility & performance
166: 
167: - The project already follows mobile-first responsive patterns and includes a skip-to-content component.
168: - Run Lighthouse audits and address top issues:
169:   - Improve first contentful paint / largest contentful paint if images are heavy
170:   - Ensure sufficient color contrast (WCAG AA)
171:   - Ensure all interactive elements are keyboard-accessible and have focus styles
172: - Optimize images (use next/image or ensure appropriately compressed assets)
173: 
174: ---
175: 
176: ## Contributing
177: 
178: We welcome improvements. Typical workflow:
179: 
180: 1. Fork the repo
181: 2. Create a feature branch
182: 3. Run tests and linting (if configured)
183: 4. Open a pull request with a clear description of the change
184: 5. Link any related issues for tracking
185: 
186: Suggested issues to start:
187: - Add LocalBusiness JSON-LD (fill with accurate address and hours)
188: - Add or update OG/Twitter preview images for portfolio items
189: - Lighthouse: fix top 3 accessibility/performance issues
190: - Add CI linting and TypeScript checks (if missing)
191: 
192: If you'd like, I can draft those issues for you.
193: 
194: ---
195: 
196: ## Contact
197: 
198: Founder & maintainer: Abram Ntsako  
199: GitHub: https://github.com/AEN-Nyathi  
200: Website: https://malalang.co.za  
201: WhatsApp: (link in site constants)
202: 
203: ---
204: 
205: ## License & credits
206: 
207: This repository is maintained by Malalang Pty Ltd. Check the LICENSE file in the repo for details (add one if absent—MIT is a common choice for public web content).
208: 
209: ---
210: 
211: If you'd like, I can:
212: - Add a LocalBusiness JSON-LD snippet and a ready-to-apply patch to `app/layout.tsx`.
213: - Draft GitHub issues for the SEO, accessibility, and image work.
214: - Produce a short "handover checklist" for client launches (DNS steps, credentials, and maintenance suggestions).
215: 
216: Which would you like me to do next?
````

## File: t.md
````markdown
1: 
````

## File: .gitignore
````
 1: # Logs
 2: logs
 3: *.log
 4: npm-debug.log*
 5: yarn-debug.log*
 6: yarn-error.log*
 7: pnpm-debug.log*
 8: lerna-debug.log*
 9: 
10: # Next.js & Build Outputs
11: .next/
12: out/
13: build/
14: dist/
15: dist-ssr/
16: .turbo/
17: 
18: # Dependencies
19: node_modules/
20: .pnp
21: .pnp.js
22: 
23: # Testing
24: coverage/
25: 
26: # Environment Variables & Secrets
27: .env
28: .env.local
29: .env.development.local
30: .env.test.local
31: .env.production.local
32: *.local
33: *.pem
34: *.key
35: 
36: # Vercel
37: .vercel/
38: 
39: # Repomix & AI/IDE Tools
40: repomix-output.*
41: .repomix/
42: skills-lock.json
43: .cursor/
44: 
45: # Editor directories and files
46: .vscode/*
47: !.vscode/extensions.json
48: .idea/
49: .DS_Store
50: Thumbs.db
51: *.suo
52: *.ntvs*
53: *.njsproj
54: *.sln
55: *.sw?
56: .vs/
57: 
58: # Project Specific
59: attached_assets/
````

## File: .repomixignore
````
 1: # Repomix Ignore Patterns
 2: # This file prevents large, binary, temporary, or generated files from bloating the AI context.
 3: 
 4: # Output & Generated Context Files
 5: codebase-context.md
 6: repomix-output.*
 7: .repomix/
 8: 
 9: # Version Control & IDEs
10: .git/
11: .github/
12: .vscode/*
13: !.vscode/extensions.json
14: .idea/
15: .cursor/
16: .DS_Store
17: Thumbs.db
18: 
19: # Dependencies
20: node_modules/
21: .pnp
22: .pnp.js
23: pnpm-lock.yaml
24: package-lock.json
25: yarn.lock
26: 
27: # Build Outputs & Cache
28: .next/
29: out/
30: build/
31: dist/
32: dist-ssr/
33: .turbo/
34: .cache/
35: *.tsbuildinfo
36: 
37: # Environment Variables & Secrets
38: .env
39: .env.local
40: .env.development.local
41: .env.test.local
42: .env.production.local
43: *.local
44: *.pem
45: *.key
46: 
47: # Logs & Debugging
48: logs/
49: *.log
50: npm-debug.log*
51: yarn-debug.log*
52: yarn-error.log*
53: pnpm-debug.log*
54: lerna-debug.log*
55: 
56: # Testing & Coverage
57: coverage/
58: .nyc_output/
59: 
60: # Assets & Media (Usually not helpful to read as text in AI prompt)
61: attached_assets/
62: *.png
63: *.jpg
64: *.jpeg
65: *.gif
66: *.svg
67: *.ico
68: *.pdf
69: *.zip
70: *.tar.gz
71: *.mp4
72: *.mp3
73: *.wav
74: *.woff
75: *.woff2
76: *.eot
77: *.ttf
````

## File: apps/admin/app/_components/Sidebar.tsx
````typescript
 1: "use client";
 2: 
 3: import Link from "next/link";
 4: import { usePathname } from "next/navigation";
 5: import {
 6:   LayoutDashboard,
 7:   CalendarCheck,
 8:   FileText,
 9:   Briefcase,
10:   Users,
11:   MessageSquare,
12:   Settings,
13:   Layers,
14:   Video,
15: } from "lucide-react";
16: import clsx from "clsx";
17: 
18: const navItems = [
19:   { label: "Dashboard", href: "/", icon: LayoutDashboard },
20:   { label: "Blog Posts", href: "/blog", icon: FileText },
21:   { label: "Services", href: "/services", icon: Briefcase },
22:   { label: "Content", href: "/content", icon: Layers },
23:   { label: "Clients", href: "/clients", icon: Users },
24:   { label: "Messages", href: "/messages", icon: MessageSquare },
25:   { label: "Meetings", href: "/meetings", icon: Video },
26:   { label: "Settings", href: "/settings", icon: Settings },
27: ];
28: 
29: export default function Sidebar() {
30:   const pathname = usePathname();
31: 
32:   return (
33:     <aside className="w-60 min-h-screen bg-gray-900 text-white flex flex-col shrink-0">
34:       <div className="px-6 py-5 border-b border-gray-700">
35:         <span className="text-xl font-bold tracking-tight text-white">
36:           Malalang
37:         </span>
38:         <span className="ml-2 text-xs text-emerald-400 font-medium uppercase tracking-widest">
39:           Admin
40:         </span>
41:       </div>
42: 
43:       <nav className="flex-1 px-3 py-4 space-y-1">
44:         {navItems.map(({ label, href, icon: Icon }) => {
45:           const active = pathname === href;
46:           return (
47:             <Link
48:               key={href}
49:               href={href}
50:               className={clsx(
51:                 "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
52:                 active
53:                   ? "bg-emerald-600 text-white"
54:                   : "text-gray-300 hover:bg-gray-800 hover:text-white"
55:               )}
56:             >
57:               <Icon size={18} />
58:               {label}
59:             </Link>
60:           );
61:         })}
62:       </nav>
63: 
64:       <div className="px-6 py-4 border-t border-gray-700 text-xs text-gray-500">
65:         Malalang &copy; {new Date().getFullYear()}
66:       </div>
67:     </aside>
68:   );
69: }
````

## File: apps/admin/app/blog/BlogDetails.tsx
````typescript
  1: 'use client';
  2: 
  3: import { useState, useEffect } from "react";
  4: import type { BlogPost, BlogComment } from "@malalang/shared/types";
  5: import { format } from "date-fns";
  6: import {
  7:   Card,
  8:   CardContent,
  9:   CardHeader,
 10:   CardTitle,
 11: } from "@/app/_components/ui/card";
 12: import { Button } from "@/app/_components/ui/button";
 13: import Link from "next/link";
 14: import { ArrowLeft, Edit, Trash2, MessageSquare, Clock, Globe, Calendar } from "lucide-react";
 15: import { useRouter } from "next/navigation";
 16: import Image from "next/image";
 17: import { getCommentsByBlogId, deleteComment } from "@malalang/shared/services/comments";
 18: import ConfirmDialog from "@/app/_components/ConfirmDialog";
 19: 
 20: interface BlogDetailsProps {
 21:   blog: BlogPost;
 22: }
 23: 
 24: export default function BlogDetails({ blog }: BlogDetailsProps) {
 25:   const router = useRouter();
 26:   const [comments, setComments] = useState<BlogComment[]>([]);
 27:   const [loadingComments, setLoadingComments] = useState(true);
 28:   const [deleteCommentId, setDeleteCommentId] = useState<string | null>(null);
 29:   const [deletingComment, setDeletingComment] = useState(false);
 30: 
 31:   useEffect(() => {
 32:     const fetchComments = async () => {
 33:       try {
 34:         const data = await getCommentsByBlogId(blog.id);
 35:         setComments(data);
 36:       } catch (error) {
 37:         console.error("Failed to load comments:", error);
 38:       } finally {
 39:         setLoadingComments(false);
 40:       }
 41:     };
 42:     fetchComments();
 43:   }, [blog.slug]);
 44: 
 45:   const handleDeleteComment = async () => {
 46:     if (!deleteCommentId) return;
 47:     setDeletingComment(true);
 48:     try {
 49:       await deleteComment(deleteCommentId);
 50:       setComments((prev) => prev.filter((c) => c.id !== deleteCommentId));
 51:       setDeleteCommentId(null);
 52:     } catch (error) {
 53:       console.error("Failed to delete comment:", error);
 54:     } finally {
 55:       setDeletingComment(false);
 56:     }
 57:   };
 58: 
 59:   return (
 60:     <div className="space-y-8 max-w-7xl mx-auto pb-20">
 61:       <div className="flex items-center justify-between">
 62:         <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
 63:           <Link href="/blog">
 64:             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
 65:           </Link>
 66:         </Button>
 67:         <div className="flex gap-3">
 68:           <Button variant="outline" asChild>
 69:             <Link href={`/blog/${blog.id}/edit`}>
 70:               <Edit className="mr-2 h-4 w-4" /> Edit Article
 71:             </Link>
 72:           </Button>
 73:           <Button variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50" asChild>
 74:             <a href={`https://malalang.co.za/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
 75:               <Globe className="mr-2 h-4 w-4" /> View Live
 76:             </a>
 77:           </Button>
 78:         </div>
 79:       </div>
 80: 
 81:       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 82:         <div className="lg:col-span-2 space-y-8">
 83:           {}
 84:           <Card className="overflow-hidden border-gray-200 shadow-sm">
 85:             <div className="relative h-[400px] w-full bg-gray-100">
 86:               {blog.imageUrl ? (
 87:                 <Image
 88:                   src={blog.imageUrl}
 89:                   alt={blog.title}
 90:                   fill
 91:                   className="object-cover"
 92:                 />
 93:               ) : (
 94:                 <div className="w-full h-full flex items-center justify-center text-gray-300">
 95:                   <Globe size={64} className="opacity-20" />
 96:                 </div>
 97:               )}
 98:             </div>
 99:             <CardHeader className="p-8">
100:               <div className="flex flex-wrap gap-2 mb-4">
101:                 {blog.tags?.map(tag => (
102:                   <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
103:                     #{tag}
104:                   </span>
105:                 ))}
106:               </div>
107:               <CardTitle className="text-4xl font-black text-gray-900 leading-tight">
108:                 {blog.title}
109:               </CardTitle>
110:               <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
111:                 <div className="flex items-center gap-2">
112:                   <Calendar size={16} />
113:                   <span>{blog.publishedAt ? format(new Date(blog.publishedAt), "PPP") : "Not published"}</span>
114:                 </div>
115:                 <div className="flex items-center gap-2">
116:                   <Clock size={16} />
117:                   <span>{blog.readingTimeMinutes} min read</span>
118:                 </div>
119:               </div>
120:             </CardHeader>
121:             <CardContent className="px-8 pb-8 prose prose-slate max-w-none border-t border-gray-100 pt-8">
122:               <div dangerouslySetInnerHTML={{ __html: blog.htmlContent || '' }} />
123:             </CardContent>
124:           </Card>
125: 
126:           {}
127:           <Card className="border-gray-200 shadow-sm overflow-hidden">
128:             <CardHeader className="bg-gray-50/50 border-b border-gray-100 p-6">
129:               <div className="flex items-center justify-between">
130:                 <div className="flex items-center gap-3">
131:                   <MessageSquare className="text-emerald-600" />
132:                   <CardTitle className="text-xl">Reader Discussion</CardTitle>
133:                 </div>
134:                 <span className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold text-gray-700 shadow-sm">
135:                   {comments.length} Comments
136:                 </span>
137:               </div>
138:             </CardHeader>
139:             <CardContent className="p-0">
140:               {loadingComments ? (
141:                 <div className="p-12 text-center text-gray-400">Loading comments...</div>
142:               ) : comments.length === 0 ? (
143:                 <div className="p-12 text-center text-gray-400 italic">No comments on this article yet.</div>
144:               ) : (
145:                 <div className="divide-y divide-gray-100">
146:                   {comments.map((comment) => (
147:                     <div key={comment.id} className="p-6 hover:bg-gray-50 transition-colors group">
148:                       <div className="flex justify-between items-start mb-3">
149:                         <div className="flex items-center gap-3">
150:                           <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
151:                             {comment.userId.charAt(0).toUpperCase()}
152:                           </div>
153:                           <div>
154:                             <h4 className="text-sm font-bold text-gray-900">{comment.userId}</h4>
155:                             <div className="flex items-center gap-2 text-xs text-gray-500">
156:                               <span className="font-mono">{comment.phone}</span>
157:                               <span>•</span>
158:                               <span>{format(new Date(comment.createdAt), "PPp")}</span>
159:                             </div>
160:                           </div>
161:                         </div>
162:                         <button
163:                           onClick={() => setDeleteCommentId(comment.id)}
164:                           className="opacity-0 group-hover:opacity-100 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
165:                         >
166:                           <Trash2 size={16} />
167:                         </button>
168:                       </div>
169:                       <p className="text-sm text-gray-700 pl-13 leading-relaxed whitespace-pre-wrap">
170:                         {comment.content}
171:                       </p>
172:                     </div>
173:                   ))}
174:                 </div>
175:               )}
176:             </CardContent>
177:           </Card>
178:         </div>
179: 
180:         <div className="space-y-8">
181:           {}
182:           <Card className="border-gray-200 shadow-sm">
183:             <CardHeader className="bg-gray-50/50 border-b border-gray-100">
184:               <CardTitle className="text-lg">SEO & Logistics</CardTitle>
185:             </CardHeader>
186:             <CardContent className="p-6 space-y-6">
187:               <div>
188:                 <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Meta Title</label>
189:                 <p className="text-sm text-gray-900 font-medium">{blog.metaTitle}</p>
190:               </div>
191:               <div className="border-t border-gray-100 pt-6">
192:                 <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Meta Description</label>
193:                 <p className="text-sm text-gray-600 italic leading-relaxed">&quot;{blog.metaDescription}&quot;</p>
194:               </div>
195:               <div className="border-t border-gray-100 pt-6">
196:                 <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Keywords</label>
197:                 <p className="text-sm text-gray-600 leading-relaxed">{blog.keywords}</p>
198:               </div>
199:               <div className="border-t border-gray-100 pt-6">
200:                 <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Internal Slug</label>
201:                 <code className="text-xs bg-gray-100 px-2 py-1 rounded text-emerald-700 font-mono">{blog.slug}</code>
202:               </div>
203:             </CardContent>
204:           </Card>
205: 
206:           {}
207:           <Card className="border-gray-200 shadow-sm">
208:             <CardHeader className="bg-gray-50/50 border-b border-gray-100">
209:               <CardTitle className="text-lg">Search Preview Excerpt</CardTitle>
210:             </CardHeader>
211:             <CardContent className="p-6">
212:               <p className="text-sm text-gray-600 leading-relaxed italic">
213:                 {blog.excerpt || "No excerpt provided for this article."}
214:               </p>
215:             </CardContent>
216:           </Card>
217:         </div>
218:       </div>
219: 
220:       <ConfirmDialog
221:         isOpen={deleteCommentId !== null}
222:         title="Delete Comment"
223:         message="Are you sure you want to delete this comment? This action cannot be undone."
224:         onConfirm={handleDeleteComment}
225:         onCancel={() => setDeleteCommentId(null)}
226:         isLoading={deletingComment}
227:       />
228:     </div>
229:   );
230: }
````

## File: apps/admin/app/content/categories/page.tsx
````typescript
 1: "use client";
 2: 
 3: import { useEffect, useState } from "react";
 4: import { getServiceCategories } from "@malalang/shared/services/services";
 5: import type { ServiceCategory } from "@malalang/shared/types";
 6: import { Plus, Edit, Globe, Mail, Shield, Palette } from "lucide-react";
 7: 
 8: const ICON_MAP: Record<string, any> = {
 9:   'website-design': Globe,
10:   'domain-registration': Shield,
11:   'email-hosting': Mail,
12:   'graphic-design': Palette,
13: };
14: 
15: export default function CategoriesPage() {
16:   const [categories, setCategories] = useState<ServiceCategory[]>([]);
17:   const [loading, setLoading] = useState(true);
18: 
19:   useEffect(() => {
20:     async function fetch() {
21:       try {
22:         const data = await getServiceCategories();
23:         setCategories(data);
24:       } catch (e) {
25:         console.error(e);
26:       } finally {
27:         setLoading(false);
28:       }
29:     }
30:     fetch();
31:   }, []);
32: 
33:   return (
34:     <div>
35:       <div className="flex items-center justify-between mb-8">
36:         <div>
37:           <h1 className="text-2xl font-bold text-gray-900">Service Categories</h1>
38:           <p className="text-gray-500 text-sm mt-1">Configure high-level service groupings.</p>
39:         </div>
40:       </div>
41: 
42:       {loading ? (
43:         <p className="text-gray-400 text-center py-20">Loading categories...</p>
44:       ) : (
45:         <div className="grid md:grid-cols-2 gap-6">
46:           {categories.map((cat) => {
47:             const Icon = ICON_MAP[cat.slug] || Globe;
48:             return (
49:               <div key={cat.slug} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex gap-5 group hover:border-emerald-500/50 transition-colors">
50:                 <div className="w-14 h-14 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 overflow-hidden relative border border-gray-100">
51:                   {cat.imageUrl ? (
52:                     <img
53:                       src={cat.imageUrl}
54:                       alt={cat.name}
55:                       className="w-full h-full object-cover"
56:                     />
57:                   ) : (
58:                     <Icon size={28} />
59:                   )}
60:                 </div>
61:                 <div className="flex-1">
62:                   <div className="flex items-center justify-between mb-1">
63:                     <h3 className="font-bold text-gray-900">{cat.name}</h3>
64:                     <button className="text-gray-400 hover:text-emerald-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
65:                       <Edit size={16} />
66:                     </button>
67:                   </div>
68:                   <p className="text-xs text-emerald-600 font-mono uppercase tracking-widest mb-3">{cat.tagline}</p>
69:                   <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{cat.description}</p>
70:                   <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
71:                     <span className="bg-gray-100 px-2 py-0.5 rounded-full">{cat.packageCount} Packages</span>
72:                     <span>From {cat.priceFrom}</span>
73:                   </div>
74:                 </div>
75:               </div>
76:             );
77:           })}
78:         </div>
79:       )}
80: 
81:       <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-700">
82:         Note: Category editing is currently view-only. Use migrations or direct DB access to change slugs or icons for now.
83:       </div>
84:     </div>
85:   );
86: }
````

## File: apps/admin/app/layout.tsx
````typescript
 1: import type { Metadata } from "next";
 2: import "./globals.css";
 3: import Sidebar from "@/app/_components/Sidebar";
 4: import Script from 'next/script';
 5: import { Toaster } from 'sonner';
 6: 
 7: export const metadata: Metadata = {
 8:   title: "Malalang Admin",
 9:   description: "Malalang admin panel",
10: };
11: 
12: export default function RootLayout({
13:   children,
14: }: {
15:   children: React.ReactNode;
16: }) {
17:   return (
18:     <html lang="en">
19:       <body>
20:         <div className="flex min-h-screen">
21:           <Sidebar />
22:           <main className="flex-1 p-8 overflow-auto">{children}</main>
23:         </div>
24:         <Toaster position="top-right" richColors />
25:         <Script
26:           src="https://static.cloudflareinsights.com/beacon.min.js"
27:           data-cf-beacon='{"token": "4eea4d7f60ce4eab8bb1379f11aa4429"}'
28:         />
29:       </body>
30:     </html>
31:   );
32: }
````

## File: apps/admin/app/page.tsx
````typescript
 1: import { CalendarCheck, FileText, Users, MessageSquare } from "lucide-react";
 2: import { getDashboardStats } from "@malalang/shared/services/composite";
 3: 
 4: function fmt(iso: string) {
 5:   if (!iso) return "—";
 6:   return new Date(iso).toLocaleDateString("en-ZA", {
 7:     day: "numeric", month: "short", year: "numeric",
 8:   });
 9: }
10: 
11: export default async function DashboardPage() {
12:   const { blogs, clients, messages, allBookings } = await getDashboardStats();
13: 
14:   const stats = [
15:     { label: "Total Bookings", value: allBookings.length, icon: CalendarCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
16:     { label: "Blog Posts", value: blogs.length, icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
17:     { label: "Clients", value: clients.length, icon: Users, color: "text-violet-600", bg: "bg-violet-50" },
18:     { label: "Messages", value: messages.length, icon: MessageSquare, color: "text-amber-600", bg: "bg-amber-50" },
19:   ];
20: 
21:   const recentBookings = allBookings.slice(0, 5);
22:   const recentMessages = messages.slice(0, 5);
23: 
24:   return (
25:     <div>
26:       <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
27:       <p className="text-gray-500 text-sm mb-8">Welcome to the Malalang admin panel.</p>
28: 
29:       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
30:         {stats.map(({ label, value, icon: Icon, color, bg }) => (
31:           <div key={label} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4 shadow-sm">
32:             <div className={`${color} ${bg} p-3 rounded-lg`}>
33:               <Icon size={22} />
34:             </div>
35:             <div>
36:               <div className="text-2xl font-bold text-gray-900">{value}</div>
37:               <div className="text-xs text-gray-500 mt-0.5">{label}</div>
38:             </div>
39:           </div>
40:         ))}
41:       </div>
42: 
43:       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
44:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
45:           <div className="px-6 py-4 border-b border-gray-100">
46:             <h2 className="text-sm font-semibold text-gray-700">Recent Bookings</h2>
47:           </div>
48:           {recentBookings.length === 0 ? (
49:             <p className="text-sm text-gray-400 p-6">No bookings yet.</p>
50:           ) : (
51:             <ul className="divide-y divide-gray-100">
52:               {recentBookings.map((b, i) => (
53:                 <li key={i} className="px-6 py-3 flex items-center justify-between">
54:                   <div>
55:                     <p className="text-sm font-medium text-gray-800">{b.clientName}</p>
56:                     <p className="text-xs text-gray-400">{b.serviceTitle ?? "—"}</p>
57:                   </div>
58:                   <span className="text-xs text-gray-400">{fmt(b.submittedAt)}</span>
59:                 </li>
60:               ))}
61:             </ul>
62:           )}
63:         </div>
64: 
65:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
66:           <div className="px-6 py-4 border-b border-gray-100">
67:             <h2 className="text-sm font-semibold text-gray-700">Recent Messages</h2>
68:           </div>
69:           {recentMessages.length === 0 ? (
70:             <p className="text-sm text-gray-400 p-6">No messages yet.</p>
71:           ) : (
72:             <ul className="divide-y divide-gray-100">
73:               {recentMessages.map((m) => (
74:                 <li key={m.id} className="px-6 py-3">
75:                   <div className="flex items-center justify-between mb-0.5">
76:                     <p className="text-sm font-medium text-gray-800">{m.name}</p>
77:                     <span className="text-xs text-gray-400">{fmt(m.createdAt)}</span>
78:                   </div>
79:                   <p className="text-xs text-gray-500 truncate">{m.message}</p>
80:                 </li>
81:               ))}
82:             </ul>
83:           )}
84:         </div>
85:       </div>
86:     </div>
87:   );
88: }
````

## File: apps/admin/app/services/create/page.tsx
````typescript
  1: "use client";
  2: 
  3: import { useState } from "react";
  4: import { useRouter } from "next/navigation";
  5: import { createServiceAction } from "@/app/_lib/actions";
  6: import type { ServicePackage } from "@malalang/shared/types";
  7: import FormInput from "@/app/_components/FormInput";
  8: import FormTextarea from "@/app/_components/FormTextarea";
  9: import FormSelect from "@/app/_components/FormSelect";
 10: import Link from "next/link";
 11: import { ArrowLeft, Plus, X } from "lucide-react";
 12: 
 13: const CATEGORIES = [
 14:   { label: "Website Design", value: "Website Design" },
 15:   { label: "Domain Registration", value: "Domain Registration" },
 16:   { label: "Email Hosting", value: "Email Hosting" },
 17:   { label: "Graphic Design", value: "Graphic Design" },
 18: ];
 19: 
 20: export default function CreateServicePage() {
 21:   const router = useRouter();
 22:   const [loading, setLoading] = useState(false);
 23:   const [error, setError] = useState<string | null>(null);
 24: 
 25:   const [formData, setFormData] = useState({
 26:     title: "",
 27:     price: "",
 28:     category: "",
 29:     description: "",
 30:     serviceUrl: "",
 31:     longDescription: "",
 32:     idealFor: "",
 33:     bestFor: "",
 34:     savingsNote: "",
 35:     isFeatured: false,
 36:     isCombo: false,
 37:     type: "static" as "static" | "dynamic",
 38:   });
 39: 
 40:   const [features, setFeatures] = useState<string[]>([]);
 41:   const [newFeature, setNewFeature] = useState("");
 42: 
 43:   const handleChange = (
 44:     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
 45:   ) => {
 46:     const { name, value, type } = e.target;
 47:     if (type === "checkbox") {
 48:       const checked = (e.target as HTMLInputElement).checked;
 49:       setFormData((prev) => ({ ...prev, [name]: checked }));
 50:     } else {
 51:       setFormData((prev) => ({ ...prev, [name]: value }));
 52:     }
 53:   };
 54: 
 55:   const addFeature = () => {
 56:     if (newFeature.trim()) {
 57:       setFeatures([...features, newFeature.trim()]);
 58:       setNewFeature("");
 59:     }
 60:   };
 61: 
 62:   const removeFeature = (index: number) => {
 63:     setFeatures(features.filter((_, i) => i !== index));
 64:   };
 65: 
 66:   const handleSubmit = async (e: React.FormEvent) => {
 67:     e.preventDefault();
 68:     setError(null);
 69:     setLoading(true);
 70: 
 71:     try {
 72:       if (!formData.title.trim()) throw new Error("Title is required");
 73:       if (!formData.price.trim()) throw new Error("Price is required");
 74:       if (!formData.category) throw new Error("Category is required");
 75:       if (!formData.serviceUrl.trim()) throw new Error("Service URL (Slug) is required");
 76: 
 77:       const res = await createServiceAction({
 78:         ...formData,
 79:         features,
 80:         active: true,
 81:       });
 82: 
 83:       if (res.success) {
 84:         router.push("/services");
 85:       } else {
 86:         setError(res.error);
 87:       }
 88:     } catch (err: any) {
 89:       setError(err.message || "Failed to create service");
 90:     } finally {
 91:       setLoading(false);
 92:     }
 93:   };
 94: 
 95:   return (
 96:     <div className="max-w-4xl pb-20">
 97:       <div className="flex items-center gap-2 mb-6">
 98:         <Link href="/services" className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700">
 99:           <ArrowLeft size={18} />
100:           Back to Services
101:         </Link>
102:       </div>
103: 
104:       <form onSubmit={handleSubmit} className="space-y-8">
105:         {error && (
106:           <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
107:             {error}
108:           </div>
109:         )}
110: 
111:         {}
112:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
113:           <div className="px-8 py-5 border-b border-gray-100 bg-gray-50/50">
114:             <h2 className="text-lg font-bold text-gray-900">Basic Information</h2>
115:           </div>
116:           <div className="p-8 grid md:grid-cols-2 gap-6">
117:             <FormInput label="Service Title" name="title" value={formData.title} onChange={handleChange} required />
118:             <FormSelect label="Category" name="category" value={formData.category} onChange={handleChange} options={CATEGORIES} required />
119:             <FormInput label="Price Display" name="price" value={formData.price} onChange={handleChange} placeholder="e.g. R1,000 or R199/month" required />
120:             <FormInput label="Service URL / Slug" name="serviceUrl" value={formData.serviceUrl} onChange={handleChange} placeholder="e.g. landing-page" required />
121:             <div className="md:col-span-2">
122:               <FormTextarea label="Short Description" name="description" value={formData.description} onChange={handleChange} rows={2} />
123:             </div>
124:           </div>
125:         </div>
126: 
127:         {}
128:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
129:           <div className="px-8 py-5 border-b border-gray-100 bg-gray-50/50">
130:             <h2 className="text-lg font-bold text-gray-900">Marketing & Details</h2>
131:           </div>
132:           <div className="p-8 space-y-6">
133:             <FormTextarea label="Long Description" name="longDescription" value={formData.longDescription} onChange={handleChange} rows={4} />
134:             <div className="grid md:grid-cols-2 gap-6">
135:               <FormInput label="Ideal For" name="idealFor" value={formData.idealFor} onChange={handleChange} placeholder="Who is this for?" />
136:               <FormInput label="Best For" name="bestFor" value={formData.bestFor} onChange={handleChange} placeholder="Key selling point" />
137:             </div>
138: 
139:             <div className="flex gap-8 py-4 px-4 bg-gray-50 rounded-lg">
140:               <label className="flex items-center gap-2 cursor-pointer">
141:                 <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="w-4 h-4 text-emerald-600 rounded" />
142:                 <span className="text-sm font-medium text-gray-700">Featured Package</span>
143:               </label>
144:               <label className="flex items-center gap-2 cursor-pointer">
145:                 <input type="checkbox" name="isCombo" checked={formData.isCombo} onChange={handleChange} className="w-4 h-4 text-emerald-600 rounded" />
146:                 <span className="text-sm font-medium text-gray-700">Special Combo</span>
147:               </label>
148:             </div>
149: 
150:             {formData.isCombo && (
151:               <FormInput label="Savings Note" name="savingsNote" value={formData.savingsNote} onChange={handleChange} placeholder="e.g. Save R500" />
152:             )}
153:           </div>
154:         </div>
155: 
156:         {}
157:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
158:           <div className="px-8 py-5 border-b border-gray-100 bg-gray-50/50">
159:             <h2 className="text-lg font-bold text-gray-900">Features List</h2>
160:           </div>
161:           <div className="p-8 space-y-4">
162:             <div className="flex gap-2">
163:               <input
164:                 type="text"
165:                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-emerald-500"
166:                 placeholder="Add a feature..."
167:                 value={newFeature}
168:                 onChange={(e) => setNewFeature(e.target.value)}
169:                 onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
170:               />
171:               <button type="button" onClick={addFeature} className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700">
172:                 <Plus size={24} />
173:               </button>
174:             </div>
175:             <ul className="space-y-2">
176:               {features.map((f, i) => (
177:                 <li key={i} className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
178:                   <span className="text-sm text-gray-700">{f}</span>
179:                   <button type="button" onClick={() => removeFeature(i)} className="text-gray-400 hover:text-red-500">
180:                     <X size={18} />
181:                   </button>
182:                 </li>
183:               ))}
184:             </ul>
185:           </div>
186:         </div>
187: 
188:         <div className="flex gap-4">
189:           <button
190:             type="submit"
191:             disabled={loading}
192:             className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 disabled:opacity-50 shadow-lg shadow-emerald-200 transition-all"
193:           >
194:             {loading ? "Creating..." : "Create Service Package"}
195:           </button>
196:           <Link
197:             href="/services"
198:             className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-all"
199:           >
200:             Cancel
201:           </Link>
202:         </div>
203:       </form>
204:     </div>
205:   );
206: }
````

## File: apps/client/app/_components/ServiceCategory.tsx
````typescript
 1: import React from 'react';
 2: import Image from 'next/image';
 3: import Link from 'next/link';
 4: import { getCachedServiceCategories } from '@/app/_lib/data';
 5: 
 6: const ServiceCategory: React.FC = async () => {
 7:   const categories = await getCachedServiceCategories();
 8: 
 9:   const categoryFallbackImages: Record<string, string> = {
10:     'website-design': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
11:     'domain-registration': 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
12:     'email-hosting': 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop',
13:     'graphic-design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
14:   };
15: 
16:   return (
17:     <section className="py-20 md:py-28 bg-slate-900">
18:       <div className="container mx-auto px-6">
19:         <div className="text-center mb-16">
20:           <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Our Full Suite of Digital Services</h2>
21:           <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
22:             We provide everything a business needs to establish a professional, high-impact presence online.
23:           </p>
24:         </div>
25: 
26:         <div className="grid lg:grid-cols-2 gap-12">
27:           {categories.map((category) => (
28:             <div
29:               key={category.slug}
30:               className="flex flex-col md:flex-row bg-background rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-primary/50 transition-all duration-300 group shadow-xl hover:shadow-brand-primary/10"
31:             >
32:               <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
33:                 <Image
34:                   src={category.imageUrl || categoryFallbackImages[category.slug] || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop'}
35:                   alt={category.name}
36:                   fill
37:                   className="object-cover group-hover:scale-110 transition-transform duration-500"
38:                 />
39:                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
40:               </div>
41: 
42:               <div className="md:w-3/5 p-8 flex flex-col">
43:                 <div className="mb-4">
44:                   <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
45:                   <p className="text-brand-primary font-mono text-xs uppercase tracking-widest">{category.tagline}</p>
46:                 </div>
47:                 <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
48:                   {category.description}
49:                 </p>
50:                 <div className="flex items-center justify-between mt-auto">
51:                   <div className="text-sm">
52:                     <span className="text-slate-500 uppercase tracking-tighter">Starting From</span>
53:                     <p className="text-xl font-bold text-white">{category.priceFrom}</p>
54:                   </div>
55:                   <Link
56:                     href={`/services/${category.slug}`}
57:                     className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-6 py-2 rounded-full font-bold transition-all duration-300 border border-brand-primary/20"
58:                   >
59:                     Details &rarr;
60:                   </Link>
61:                 </div>
62:               </div>
63:             </div>
64:           ))}
65:         </div>
66:       </div>
67:     </section>
68:   );
69: };
70: 
71: export default ServiceCategory;
````

## File: apps/client/app/_lib/constants/navigation.ts
````typescript
 1: interface linkType {
 2:   name: string;
 3:   href: '/' | '/about' | '/services' | '/pricing' | '/blog' | '/contact' | '/tools' | '/questionnaire' | '/privacy-policy' | "/email-setup";
 4: };
 5: export const HEADER_LINKS: linkType[] = [
 6:   { name: 'Home', href: '/' },
 7:   { name: 'About Us', href: '/about' },
 8:   { name: 'Services', href: '/services' },
 9:   { name: 'Pricing', href: '/pricing' },
10:   { name: 'Blog', href: '/blog' },
11:   { name: 'Contact', href: '/contact' },
12: ];
13: 
14: export const FOOTER_LINKS: linkType[] = [
15:   { name: 'Home', href: '/' },
16:   { name: 'About Us', href: '/about' },
17:   { name: 'Services', href: '/services' },
18:   { name: 'Pricing', href: '/pricing' },
19:   { name: 'Blog', href: '/blog' },
20:   { name: 'Tools', href: '/tools' },
21:   { name: 'Questionnaire', href: '/questionnaire' },
22:   { name: 'Contact', href: '/contact' },
23:   { name: 'Privacy Policy', href: '/privacy-policy' },
24:   { name: 'Email Setup', href: '/email-setup' },
25: ];
````

## File: apps/client/app/blog/page.tsx
````typescript
 1: import { getCachedBlogs } from "@/app/_lib/data";
 2: import BlogClient from "./components/BlogClient";
 3: import { Metadata } from "next";
 4: import { SITE_URL, TWITTER_CREATOR } from "@/app/_lib/constants/site";
 5: import HeroBackground from "../_components/HeroBackground";
 6: 
 7: export const metadata: Metadata = {
 8: 
 9:   title: "Malalang Blog - Web Design Insights for Phalaborwa Businesses",
10:   description:
11:     "Explore the Malalang blog for articles on web design, SEO, and digital marketing, tailored for businesses in Phalaborwa. Get tips to improve your online presence.",
12:   keywords: "web design blog, SEO tips, digital marketing, web design articles, Phalaborwa business",
13:   alternates: {
14:     canonical: `${SITE_URL}/blog`,
15:   },
16:   robots: {
17:     index: true,
18:     follow: true,
19:   },
20:   openGraph: {
21:     title: "Malalang Blog - Web Design Tips & Insights",
22:     description: "Read our latest articles on web design, SEO, and digital marketing for local businesses.",
23:     url: `${SITE_URL}/blog`,
24:     type: 'website',
25:   },
26:   twitter: {
27:     card: 'summary_large_image',
28:     title: "Malalang Blog - Web Design Tips & Insights",
29:     description: "Read our latest articles on web design and digital marketing.",
30:     creator: TWITTER_CREATOR,
31:   },
32: };
33: 
34: const BlogPage: React.FC = async () => {
35:   try {
36:     const { posts } = await getCachedBlogs();
37:     return (
38:       <main>
39:         {}
40:         <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
41:           <HeroBackground />
42:           <div className="container mx-auto px-6 relative z-10">
43:             <p className="text-brand-primary font-mono text-sm mb-3 tracking-widest uppercase">Articles & Insights</p>
44:             <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-6">
45:               The Malalang <span className="text-brand-primary glow-green">Blog</span>
46:             </h1>
47:             <p className="text-xl text-blue-300 font-semibold max-w-3xl mx-auto leading-relaxed">
48:               Insights, tutorials, and stories on web development, design, and the digital world.
49:             </p>
50:           </div>
51:         </section>
52:         <BlogClient initialPosts={posts} />
53:       </main >)
54:   } catch (error) {
55:     console.error("Failed to fetch blog posts:", error);
56:     return <BlogClient initialPosts={[]} />;
57:   }
58: };
59: 
60: export default BlogPage;
````

## File: apps/client/app/pricing/page.tsx
````typescript
  1: import React from 'react';
  2: import Link from 'next/link';
  3: import { Metadata } from 'next';
  4: import { OG_IMAGE_SERVICES, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
  5: import { getPricingData } from '@malalang/shared/services/composite';
  6: import { getCachedFaqs } from '@/app/_lib/data';
  7: import type { ServicePackage, AddonCategory, AddonService, FaqItem } from '@malalang/shared/types';
  8: import HeroBackground from '@/app/_components/HeroBackground';
  9: 
 10: export const metadata: Metadata = {
 11: 
 12:   title: 'Website Pricing in Phalaborwa | Malalang Packages',
 13:   description: 'Transparent pricing for web design in Phalaborwa. Explore our packages, from the Starter Site to the Advanced Business Solution. Find the perfect fit for your budget and business goals.',
 14:   keywords: 'website pricing, web design cost, affordable website packages, Phalaborwa pricing, domain registration, email hosting',
 15:   alternates: {
 16:     canonical: `${SITE_URL}/pricing`,
 17:   },
 18:   robots: {
 19:     index: true,
 20:     follow: true,
 21:   },
 22:   openGraph: {
 23:     title: 'Website Pricing | Malalang Packages',
 24:     description: 'Transparent, affordable pricing for web design and digital services. Find the perfect package for your business.',
 25:     url: `${SITE_URL}/pricing`,
 26:     type: 'website',
 27:     images: [
 28:       {
 29:         url: OG_IMAGE_SERVICES,
 30:         width: 1200,
 31:         height: 630,
 32:         alt: 'Malalang Pricing',
 33:       },
 34:     ],
 35:   },
 36:   twitter: {
 37:     card: 'summary_large_image',
 38:     title: 'Website Pricing | Malalang',
 39:     description: 'Transparent, affordable pricing for web design and digital services.',
 40:     images: [OG_IMAGE_SERVICES],
 41:     creator: TWITTER_CREATOR,
 42:   },
 43: };
 44: 
 45: const CheckIcon = () => (
 46:     <svg className="w-6 h-6 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 47:         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
 48:     </svg>
 49: );
 50: 
 51: const ServiceDetail: React.FC<{ servicePackage: ServicePackage }> = ({ servicePackage }) => (
 52:     <div id={servicePackage.serviceUrl} className="bg-background p-8 rounded-lg border border-slate-700/50 mb-12 scroll-mt-20">
 53:         <div className="grid md:grid-cols-2 gap-8">
 54:             <div>
 55:                 <h3 className="text-3xl font-bold text-white">{servicePackage.title}</h3>
 56:                 <p className="text-5xl font-extrabold text-brand-primary my-4">{servicePackage.price}</p>
 57:                 <p className="text-slate-300 mb-4">{servicePackage.longDescription}</p>
 58:                 {servicePackage.isCombo && servicePackage.savingsNote && (
 59:                     <p className="text-green-400 font-bold mb-4">{servicePackage.savingsNote}</p>
 60:                 )}
 61:                 <Link
 62:                     href={`/services/${servicePackage.serviceUrl}/${servicePackage.serviceUrl}`}
 63:                     className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 mt-4"
 64:                 >
 65:                     Get Started
 66:                 </Link>
 67:             </div>
 68:             <div>
 69:                 <h4 className="text-xl font-semibold text-white mb-2">What's Included:</h4>
 70:                 <ul className="space-y-3 text-slate-300">
 71:                     {servicePackage.features.map(feature => (
 72:                         <li key={feature} className="flex items-start">
 73:                             <CheckIcon />
 74:                             <span className="ml-3">{feature}</span>
 75:                         </li>
 76:                     ))}
 77:                 </ul>
 78:                  <div className="mt-6 bg-slate-800/50 p-4 rounded-lg">
 79:                     <p className="font-semibold text-slate-200">Ideal for: <span className="font-normal text-slate-400">{servicePackage.idealFor}</span></p>
 80:                 </div>
 81:             </div>
 82:         </div>
 83:     </div>
 84: );
 85: 
 86: const PricingPage: React.FC = async () => {
 87:   const [{
 88:     servicePackages,
 89:     addonCategories,
 90:     recurringService,
 91:     launchPackServices
 92:   }, faqs] = await Promise.all([
 93:     getPricingData(),
 94:     getCachedFaqs()
 95:   ]);
 96: 
 97:   return (
 98:     <main>
 99:         <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
100:             <HeroBackground />
101:             <div className="container mx-auto px-6 relative z-10 text-center">
102:                 <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
103:                   Pricing & <span className="text-brand-primary glow-green">Packages</span>
104:                 </h1>
105:                 <p className="text-xl text-blue-300 font-semibold max-w-3xl mx-auto">
106:                     Clear, upfront pricing for every stage of your business. Let's build something great together.
107:                 </p>
108:             </div>
109:         </section>
110: 
111:         <section className="py-20 bg-slate-900">
112:             <div className="container mx-auto px-6">
113:                 {servicePackages.filter((p: ServicePackage) => !p.isCombo).map((servicePackage: ServicePackage) => (
114:                     <ServiceDetail key={servicePackage.title} servicePackage={servicePackage} />
115:                 ))}
116:             </div>
117:         </section>
118: 
119:         <section className="py-20 bg-background">
120:             <div className="container mx-auto px-6">
121:                  <div className="text-center mb-16">
122:                     <h2 className="text-3xl md:text-4xl font-bold text-white">Special Combo Package</h2>
123:                 </div>
124:                 {servicePackages.filter((p: ServicePackage) => p.isCombo).map((servicePackage: ServicePackage) => (
125:                     <ServiceDetail key={servicePackage.title} servicePackage={servicePackage} />
126:                 ))}
127:             </div>
128:         </section>
129: 
130:         <section className="py-20 bg-slate-900">
131:             <div className="container mx-auto px-6">
132:                  <div className="text-center mb-16">
133:                     <h2 className="text-3xl md:text-4xl font-bold text-white">Enhance Your Website</h2>
134:                     <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Add extra functionality to any package with our à la carte services.</p>
135:                 </div>
136: 
137:                 <div className="grid lg:grid-cols-12 gap-12 items-start">
138:                     <div className="lg:col-span-8">
139:                         <h3 className="text-2xl font-bold text-white mb-6">Service Add-ons</h3>
140:                          <div className="space-y-8">
141:                             {addonCategories.map((category: AddonCategory) => (
142:                             <div key={category.name} className="bg-background p-6 rounded-lg border border-slate-700/50">
143:                                 <h4 className="text-xl font-semibold text-brand-primary mb-4">{category.name}</h4>
144:                                 <ul className="space-y-4">
145:                                 {category.addons.map((addon: AddonService) => (
146:                                     <li key={addon.title} className="flex justify-between items-start text-slate-300 border-t border-slate-800 pt-4 first:pt-0 first:border-t-0">
147:                                     <span className="flex-1 pr-4">{addon.title}</span>
148:                                     <span className="font-bold text-white text-right whitespace-nowrap">{addon.price}</span>
149:                                     </li>
150:                                 ))}
151:                                 </ul>
152:                             </div>
153:                             ))}
154:                         </div>
155:                     </div>
156:                     <div className="lg:col-span-4 sticky top-24">
157:                         <div className="bg-slate-800 p-6 rounded-lg border border-brand-secondary/50">
158:                              <div className="text-center border-b border-slate-700 pb-4 mb-4">
159:                                 <h3 className="text-2xl font-bold text-brand-secondary">The Complete Launch Pack</h3>
160:                                 <p className="font-bold text-white text-4xl">R900 <span className="text-lg font-normal text-slate-400">(Save R200)</span></p>
161:                             </div>
162:                             <p className="text-slate-400 text-center text-sm mb-4">Bundle our most essential launch services for the best value.</p>
163:                             <ul className="space-y-3">
164:                                 {launchPackServices.map((service: AddonService) => (
165:                                     <li key={service.title} className="flex justify-between items-center text-slate-300">
166:                                         <span>{service.title}</span>
167:                                         <span className="font-bold text-white text-sm bg-slate-700 px-2 py-1 rounded">{service.price}</span>
168:                                     </li>
169:                                 ))}
170:                             </ul>
171:                         </div>
172:                          {recurringService && (
173:                            <div className="mt-8 bg-brand-primary/10 p-6 rounded-lg border border-brand-primary/30 text-center">
174:                               <h3 className="text-2xl font-bold text-white">{recurringService.title}</h3>
175:                                <p className="text-3xl font-bold text-white my-2">{recurringService.price}</p>
176:                                <p className="text-slate-400">{recurringService.description}</p>
177:                                <Link href="#" className="text-brand-primary hover:underline mt-3 inline-block font-semibold">Learn more &rarr;</Link>
178:                           </div>
179:                          )}
180:                     </div>
181:                 </div>
182:             </div>
183:         </section>
184: 
185:          <section id="faq" className="py-20 bg-background">
186:             <div className="container mx-auto px-6 max-w-4xl">
187:                 <div className="text-center mb-12">
188:                     <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
189:                 </div>
190:                 <div className="space-y-4">
191:                     {faqs.map((faq: FaqItem, index: number) => (
192:                         <details key={index} className="bg-slate-900 p-4 rounded-lg cursor-pointer open:bg-slate-800 transition-colors">
193:                             <summary className="font-semibold text-lg text-white list-none flex justify-between items-center">
194:                                 {faq.question}
195:                                 <svg className="w-5 h-5 transition-transform transform rotate-0 open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
196:                             </summary>
197:                             <div className="mt-3 text-slate-300">
198:                                 <p>{faq.answer}</p>
199:                             </div>
200:                         </details>
201:                     ))}
202:                 </div>
203:             </div>
204:         </section>
205:     </main>
206:   );
207: };
208: 
209: export default PricingPage;
````

## File: apps/client/app/sitemap.ts
````typescript
 1: import { MetadataRoute } from "next";
 2: import { BLOG_POSTS } from "@/app/_lib/constants/blog";
 3: import { SERVICE_PACKAGES, SERVICE_CATEGORIES } from "@/app/_lib/constants/services";
 4: 
 5: const BASE_URL = "https://malalang.co.za";
 6: 
 7: 
 8: export default function sitemap(): MetadataRoute.Sitemap {
 9:   const staticRoutes = [
10:     "/",
11:     "/about",
12:     "/blog",
13:     "/contact",
14:     "/pricing",
15:     "/services",
16:     "/questionnaire",
17:     "/tools",
18:     "/tools/color-palette-generator",
19:     "/tools/create-script",
20:     "/tools/QRCodeGenerator",
21:     "/privacy-policy",
22:   ].map((route) => ({
23:     url: `${BASE_URL}${route}`,
24:     lastModified: new Date(),
25:     changeFrequency: "monthly" as const,
26:     priority: route === "/" ? 1 : 0.8,
27:   }));
28: 
29:   const blogPostRoutes = BLOG_POSTS.map((post) => ({
30:     url: `${BASE_URL}/blog/${post.slug}`,
31:     lastModified: new Date(),
32:     changeFrequency: "monthly" as const,
33:     priority: 0.7,
34:   }));
35: 
36: 
37:   const serviceCategoryRoutes = SERVICE_CATEGORIES.map((category) => ({
38:     url: `${BASE_URL}/services/${category.slug}`,
39:     lastModified: new Date(),
40:     changeFrequency: "monthly" as const,
41:     priority: 0.85,
42:   }));
43: 
44: 
45:   const websiteDesignDetailRoutes = SERVICE_PACKAGES.map((service) => ({
46:     url: `${BASE_URL}/services/website-design/${service.serviceUrl}`,
47:     lastModified: new Date(),
48:     changeFrequency: "monthly" as const,
49:     priority: 0.8,
50:   }));
51: 
52: 
53:   const websiteDesignBookingRoutes = SERVICE_PACKAGES.map((service) => ({
54:     url: `${BASE_URL}/services/website-design/${service.serviceUrl}/${service.serviceUrl}`,
55:     lastModified: new Date(),
56:     changeFrequency: "monthly" as const,
57:     priority: 0.7,
58:   }));
59: 
60:   return [
61:     ...staticRoutes,
62:     ...blogPostRoutes,
63:     ...serviceCategoryRoutes,
64:     ...websiteDesignDetailRoutes,
65:     ...websiteDesignBookingRoutes,
66:   ];
67: }
````

## File: apps/client/app/tools/color-palette-generator/layout.tsx
````typescript
 1: import { Metadata } from 'next';
 2: import { OG_IMAGE_DEFAULT, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 3: 
 4: export const metadata: Metadata = {
 5:   title: 'Color Palette Generator - Design Inspiration Tool',
 6:   description: 'Upload an image to automatically generate a beautiful color palette. Perfect for finding color inspiration for your brand, website, or design project.',
 7:   keywords: ['color palette', 'color generator', 'design inspiration', 'brand colors'],
 8:   alternates: {
 9:     canonical: `${SITE_URL}/color-palette-generator`,
10:   },
11:   robots: {
12:     index: true,
13:     follow: true,
14:   },
15:   openGraph: {
16:     title: 'Color Palette Generator - Design Inspiration',
17:     description: 'Generate stunning color palettes from images. Find the perfect colors for your brand.',
18:     url: `${SITE_URL}/color-palette-generator`,
19:     type: 'website',
20:     images: [
21:       {
22:         url: OG_IMAGE_DEFAULT,
23:         width: 1200,
24:         height: 630,
25:         alt: 'Color Palette Generator Tool',
26:       },
27:     ],
28:   },
29:   twitter: {
30:     card: 'summary_large_image',
31:     title: 'Color Palette Generator - Design Inspiration Tool',
32:     description: 'Generate color palettes from images. Get inspired for your brand design.',
33:     images: [OG_IMAGE_DEFAULT],
34:     creator: TWITTER_CREATOR,
35:   },
36: };
37: 
38: export default function ColorPaletteLayout({
39:   children,
40: }: {
41:   children: React.ReactNode;
42: }) {
43:   return children;
44: }
````

## File: apps/client/app/tools/color-palette-generator/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'Color Palette Generator';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Color Palette Generator',
12:     description: 'Generate beautiful color palettes for your design projects',
13:     logo: true,
14:   });
15: }
````

## File: apps/client/app/tools/color-palette-generator/page.tsx
````typescript
 1: import React from 'react';
 2: import ImageColorPicker from '@/app/_components/ImageColorPicker';
 3: import HeroBackground from '@/app/_components/HeroBackground';
 4: 
 5: const ColorPalettePage: React.FC = () => {
 6:   return (
 7:     <main>
 8:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
 9:         <HeroBackground />
10:         <div className="container mx-auto px-6 relative z-10">
11:           <div className="text-center mb-12">
12:             <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
13:               Color Palette <span className="text-brand-primary glow-green">Generator</span>
14:             </h1>
15:             <p className="text-xl text-blue-300 font-semibold max-w-3xl mx-auto">
16:               Upload an image to automatically generate a color palette. Perfect for finding inspiration for your brand.
17:             </p>
18:           </div>
19: 
20:           <div className="max-w-3xl mx-auto">
21:             <ImageColorPicker  />
22:           </div>
23:         </div>
24:       </section>
25:     </main>
26:   );
27: };
28: 
29: export default ColorPalettePage;
````

## File: apps/client/app/tools/create-script/components/media-selection-dialog.tsx
````typescript
  1: "use client";
  2: import { useEffect, useRef, useState } from "react";
  3: import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
  4: import { ScrollArea } from "@/app/_components/ui/scroll-area";
  5: import { Input } from "@/app/_components/ui/input";
  6: import { Button } from "@/app/_components/ui/button";
  7: 
  8: import { LoaderCircle, Clapperboard, Video as VideoIcon } from "lucide-react";
  9: 
 10: import type { Video } from "pexels";
 11: import {
 12:   getVideo,
 13:   getVideos,
 14:   searchPexelsVideosAction,
 15: } from "@/app/_lib/pexels/pexels";
 16: import { toast } from "sonner";
 17: type MediaSelectionDialogProps = {
 18:   onSelect: (src: string) => void;
 19:   initialSearchQuery?: string;
 20:   topic: string;
 21: };
 22: const generateSuggestions = (topic: string, initialQuery?: string) => {
 23:   const baseSuggestions = [
 24:     "abstract",
 25:     "city",
 26:     "nature",
 27:     "tech",
 28:     "business",
 29:     "food",
 30:     "travel",
 31:     "art",
 32:     "ai",
 33:   ];
 34:   const suggestions = new Set<string>();
 35:   if (topic) {
 36:     topic.split(" ").forEach((word) => suggestions.add(word.toLowerCase()));
 37:   }
 38:   if (initialQuery) {
 39:     initialQuery
 40:       .split(" ")
 41:       .forEach((word) => suggestions.add(word.toLowerCase()));
 42:   }
 43:   baseSuggestions.forEach((s) => suggestions.add(s));
 44:   return Array.from(suggestions).slice(0, 10);
 45: };
 46: export default function MediaSelectionDialog({
 47:   onSelect,
 48:   initialSearchQuery,
 49:   topic,
 50: }: MediaSelectionDialogProps) {
 51: 
 52:   const [searchQuery, setSearchQuery] = useState(initialSearchQuery || "");
 53:   const [isSearching, setIsSearching] = useState(false);
 54:   const [searchResults, setSearchResults] = useState<{
 55:     id: number;
 56:     quality: "hd" | "sd" | "hls";
 57:     file_type: "string";
 58:     width: number | null;
 59:     height: number | null;
 60:     link: string;
 61:     fps: number | null;
 62: }[]>([]);
 63:   const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
 64:   const suggestionKeywords = generateSuggestions(topic, initialSearchQuery);
 65:   const handleSearch = async (query: string) => {
 66:     if (!query) return;
 67:     setIsSearching(true);
 68:     setSearchResults([]);
 69:     try {
 70:       const Videos = await getVideos({ query });
 71:       if (Videos?.length && Videos?.length > 0) {
 72:         setSearchResults(Videos);
 73:         if (Videos.length === 0) {
 74:           toast("No results", { description: "Try a different search term." });
 75:         }
 76:       } else {
 77:         toast.error("Failed to search for videos");
 78:       }
 79:     } catch (error: any) {
 80:       toast.error("Search Failed", {
 81:         description: error.message || "An unknown error occurred.",
 82:       });
 83:     } finally {
 84:       setIsSearching(false);
 85:     }
 86:   };
 87:   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
 88:     e.preventDefault();
 89:     handleSearch(searchQuery);
 90:   };
 91:   useEffect(() => {
 92:     if (initialSearchQuery) {
 93:       handleSearch(initialSearchQuery);
 94:     }
 95: 
 96:   }, [initialSearchQuery]);
 97:   const getBestVideoFile = (video: Video) => {
 98:     const mp4Files = video.video_files.filter(
 99:       (f: any) => (f.file_type as string) === "video/mp4" && f.quality !== "hls"
100:     );
101: 
102:     if (mp4Files.length === 0) return video.video_files[0];
103: 
104:     const randomIndex = Math.floor(Math.random() * mp4Files.length);
105:     return mp4Files[randomIndex];
106:   };
107:   return (
108:     <div className="flex flex-col h-full overflow-hidden">
109:       <Tabs
110:         defaultValue="stock-media"
111:         className="flex flex-col flex-1 overflow-hidden"
112:       >
113:         <TabsList className="grid w-full grid-cols-2">
114:           <TabsTrigger value="my-media">My Media</TabsTrigger>
115:           <TabsTrigger value="stock-media">Stock Video</TabsTrigger>
116:         </TabsList>
117:         <div className="flex-1 overflow-auto mt-4">
118:           <ScrollArea className="h-full pr-4">
119:             <TabsContent value="my-media">
120:               <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
121:                 {
122: 
123: 
124: 
125: 
126: 
127: 
128: }
129:               </div>
130:             </TabsContent>
131:             <TabsContent value="stock-media" className="space-y-4">
132:               <form onSubmit={handleFormSubmit} className="flex gap-2">
133:                 <Input
134:                   placeholder="e.g. 'A cat riding a skateboard'"
135:                   value={searchQuery}
136:                   onChange={(e) => setSearchQuery(e.target.value)}
137:                   disabled={isSearching}
138:                 />
139:                 <Button type="submit" disabled={isSearching || !searchQuery}>
140:                   {isSearching ? (
141:                     <LoaderCircle className="animate-spin" />
142:                   ) : (
143:                     "Search"
144:                   )}
145:                 </Button>
146:               </form>
147:               <div className="flex flex-wrap gap-2">
148:                 {suggestionKeywords.map((keyword) => (
149:                   <Button
150:                     key={keyword}
151:                     variant="outline"
152:                     size="sm"
153:                     className="rounded-full capitalize"
154:                     onClick={() => {
155:                       setSearchQuery(keyword);
156:                       handleSearch(keyword);
157:                     }}
158:                     disabled={isSearching}
159:                   >
160:                     {keyword}
161:                   </Button>
162:                 ))}
163:               </div>
164:               <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
165:                 {isSearching &&
166:                   Array.from({ length: 8 }).map((_, i) => (
167:                     <div
168:                       key={i}
169:                       className="aspect-video bg-muted rounded-md flex flex-col items-center justify-center gap-2 text-muted-foreground animate-pulse"
170:                     >
171:                       <VideoIcon className="w-8 h-8" />
172:                     </div>
173:                   ))}
174:                 {searchResults.map((video) => {
175: 
176:                   return video ? (
177:                     <div
178:                       key={video.id}
179:                       className="aspect-video relative rounded-md overflow-hidden group cursor-pointer bg-muted"
180:                       onClick={() => onSelect(video.link)}
181:                       onMouseEnter={() => videoRefs.current[video.link]?.play()}
182:                       onMouseLeave={() => {
183:                         const vid = videoRefs.current[video.link];
184:                         if (vid) {
185:                           vid.pause();
186:                           vid.currentTime = 0;
187:                         }
188:                       }}
189:                     >
190:                       <video
191:                         ref={(el) => {
192:                           videoRefs.current[video.link] = el;
193:                         }}
194:                         src={video.link}
195:                         className="object-cover w-full h-full"
196:                         loop
197:                         muted
198:                         playsInline
199:                       />
200:                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
201:                         <p className="text-white text-xs font-bold text-center p-1">
202:                           Select this video
203:                         </p>
204:                       </div>
205:                     </div>
206:                   ) : null;
207:                 })}
208:                 {!isSearching && searchResults.length === 0 && (
209:                   <div className="aspect-video bg-muted/50 rounded-md flex flex-col items-center justify-center gap-2 text-muted-foreground col-span-full text-center p-4">
210:                     <Clapperboard className="w-10 h-10" />
211:                     <p className="text-sm">Search for stock videos</p>
212:                     <p className="text-xs">
213:                       Enter a search term above to find videos from Pexels.
214:                     </p>
215:                   </div>
216:                 )}
217:               </div>
218:             </TabsContent>
219:           </ScrollArea>
220:         </div>
221:       </Tabs>
222:     </div>
223:   );
224: }
````

## File: apps/client/app/tools/create-script/components/script-panel.tsx
````typescript
 1: "use client";
 2: import { useEffect, useRef, useState, useCallback } from "react";
 3: import { ScrollArea } from "@/app/_components/ui/scroll-area";
 4: import { CardContent } from "@/app/_components/ui/card";
 5: import ScriptSegmentItem from "./script-segment-item";
 6: import VideoPreviewPlayer from "./video-preview-player";
 7: import type { ScriptSegment } from "@malalang/shared/types";
 8: import ScriptGeneratorForm from "./ScriptGeneratorForm";
 9: import ScriptFooter from "./ScriptFooter";
10: import VideoPlayer from "@/app/_components/VideoPlayer";
11: 
12: export default function ScriptPanel() {
13:   const [Segments, setSegments] = useState<ScriptSegment[]>([]);
14: 
15:   const [isPreview, setIsPreview] = useState(false);
16: 
17:   const scrollAreaRef = useRef<HTMLDivElement>(null);
18: 
19:   return (
20:     <CardContent className="flex flex-col gap-4 flex-1 overflow-hidden">
21:       <ScriptGeneratorForm
22:         setIsPreview={setIsPreview}
23:         setSegments={setSegments}
24:       />
25: 
26:       <div className="flex-1 overflow-auto min-h-0 ">
27:         <ScrollArea className="h-full pr-4">
28:           <div className="space-y-4">
29:             {Segments.length === 0 ? (
30:               <VideoPlayer />
31:             ) : (
32:               Segments.map((segment, index) => (
33:                 <ScriptSegmentItem
34:                   key={segment.id}
35:                   segment={segment}
36:                   index={index}
37:                   setSegments={setSegments}
38:                   topic={segment.videoSearchQuery}
39:                 />
40:               ))
41:             )}
42:           </div>
43:         </ScrollArea>
44:       </div>
45:       <ScriptFooter
46:         Segments={Segments}
47:         setIsPreview={setIsPreview}
48:         setSegments={setSegments}
49:       />
50:     </CardContent>
51:   );
52: }
````

## File: apps/client/app/tools/create-script/components/script-segment-item.tsx
````typescript
  1: "use client";
  2: import { useRef, useState } from "react";
  3: import Image from "next/image";
  4: import { Textarea } from "@/app/_components/ui/textarea";
  5: import { Button } from "@/app/_components/ui/button";
  6: import {
  7:   Trash2,
  8:   Pencil,
  9:   Video,
 10:   Volume2,
 11:   Download,
 12:   RefreshCcw,
 13: } from "lucide-react";
 14: import type { ScriptSegment } from "@malalang/shared/types";
 15: import {
 16:   Dialog,
 17:   DialogContent,
 18:   DialogHeader,
 19:   DialogTitle,
 20:   DialogTrigger,
 21: } from "@/app/_components/ui/dialog";
 22: import MediaSelectionDialog from "./media-selection-dialog";
 23: import Link from "next/link";
 24: 
 25: type ScriptSegmentItemProps = {
 26:   segment: ScriptSegment;
 27:   index: number;
 28:   setSegments: React.Dispatch<React.SetStateAction<ScriptSegment[]>>;
 29:   topic: string;
 30: };
 31: 
 32: export default function ScriptSegmentItem({
 33:   segment,
 34:   index,
 35:   setSegments,
 36:   topic,
 37: }: ScriptSegmentItemProps) {
 38:   const [isMediaDialogOpen, setIsMediaDialogOpen] = useState(false);
 39:   const videoRef = useRef<HTMLVideoElement | null>(null);
 40: 
 41:   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
 42:     const newText = e.target.value;
 43:     setSegments((prev) => {
 44:       const newSegments = [...prev];
 45:       if (newSegments[index]) {
 46:         newSegments[index].text = newText;
 47:       }
 48:       return newSegments;
 49:     });
 50:   };
 51: 
 52:   const handleDelete = () => {
 53:     setSegments((prev) => prev.filter((_, i) => i !== index));
 54:   };
 55: 
 56:   const handleSelectVisual = (visualSrc: string) => {
 57:     setSegments((prev) => {
 58:       const newSegments = [...prev];
 59:       if (newSegments[index]) {
 60:         newSegments[index].visualSrc = visualSrc;
 61:       }
 62:       return newSegments;
 63:     });
 64:     setIsMediaDialogOpen(false);
 65:   };
 66: 
 67:   const isVideo =
 68:     segment.visualSrc &&
 69:     (segment.visualSrc.includes(".mp4") ||
 70:       segment.visualSrc.includes("pexels.com"));
 71: 
 72:   return (
 73:     <div className="p-4 rounded-lg border bg-brand-primary/10 space-y-3 relative group/segment">
 74:       <div className="flex justify-between items-center ">
 75:         <span className="text-sm font-bold text-primary pt-2">
 76:           {index + 1}.
 77:         </span>
 78:         {}
 79:         <div className="opacity-0 group-hover/segment:opacity-100 transition-opacity flex">
 80:           <Button
 81:             size="icon"
 82:             variant="ghost"
 83:             className="text-muted-foreground   "
 84:             onClick={handleDelete}
 85:             aria-label="Delete segment"
 86:           >
 87:             <Trash2 className="w-4 h-4" />
 88:           </Button>
 89:           <Button
 90:             size="icon"
 91:             variant="ghost"
 92:             className="text-muted-foreground   "
 93:           >
 94:             <Link
 95:               href={segment.visualSrc || "#"}
 96:               target="_blank"
 97:               rel="noopener noreferrer"
 98:               className="text-muted-foreground inline-flex items-center"
 99:             >
100:               {" "}
101:               <Download />
102:             </Link>
103:           </Button>
104:         </div>
105:       </div>
106:       <div className="flex flex-col md:flex-row items-start gap-4">
107:         {}
108: 
109:         <span className="sr-only">download video</span>
110: 
111:         <Dialog open={isMediaDialogOpen} onOpenChange={setIsMediaDialogOpen}>
112:           <DialogTrigger asChild>
113:             <div
114:               className="aspect-video w-full md:w-48 bg-primary rounded-md overflow-hidden relative group/preview cursor-pointer"
115:               onMouseEnter={() => videoRef.current?.play().catch(() => {})}
116:               onMouseLeave={() => {
117:                 if (videoRef.current) {
118:                   videoRef.current.pause();
119:                   videoRef.current.currentTime = 0;
120:                 }
121:               }}
122:             >
123:               {segment.visualSrc ? (
124:                 isVideo ? (
125:                   <video
126:                     ref={videoRef}
127:                     key={segment.visualSrc}
128:                     src={segment.visualSrc}
129:                     className="object-cover w-full h-full"
130:                     loop
131:                     muted
132:                     playsInline
133:                   />
134:                 ) : (
135:                   <Image
136:                     src={segment.visualSrc}
137:                     alt={`Visual for segment ${index + 1}`}
138:                     fill
139:                     className="object-cover"
140:                   />
141:                 )
142:               ) : (
143:                 <div className="w-full h-full flex items-center justify-center">
144:                   <Video className="w-8 h-8 text-muted-foreground" />
145:                 </div>
146:               )}
147:               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center gap-2">
148:                 <Button
149:                   size="icon"
150:                   variant="ghost"
151:                   className="text-white hover:bg-white/20 hover:text-white"
152:                 >
153:                   <Pencil />
154:                   <span className="sr-only">Edit video</span>
155:                 </Button>
156:               </div>
157:             </div>
158:           </DialogTrigger>
159:           <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
160:             <DialogHeader>
161:               <DialogTitle>Select Media</DialogTitle>
162:             </DialogHeader>
163:             <MediaSelectionDialog
164:               onSelect={handleSelectVisual}
165:               initialSearchQuery={segment.videoSearchQuery}
166:               topic={topic}
167:             />
168:           </DialogContent>
169:         </Dialog>
170:         <div className="font-code text-sm flex-1 w-full">
171:           {}
172: 
173:           <Textarea
174:             value={segment.text}
175:             onChange={handleTextChange}
176:             className="font-code text-sm flex-1 bg-card w-full"
177:             rows={4}
178:           />
179:           {segment.audioSrc ? (
180:             <div className="flex items-center mt-2 gap-2 text-sm text-muted-foreground">
181:               <Volume2 className="w-4 h-4" />
182:               <span className="font-medium">Voiceover Preview:</span>
183:               <audio
184:                 key={segment.audioSrc}
185:                 src={segment.audioSrc}
186:                 controls
187:                 className="w-full max-w-xs h-8"
188:                 preload="metadata"
189:               >
190:                 Your browser does not support the audio element.
191:               </audio>
192:               <Button
193:                 size="icon"
194:                 variant="ghost"
195:                 className="text-muted-foreground opacity-0 group-hover/segment:opacity-100 transition-opacity"
196:                 onClick={handleDelete}
197:                 aria-label="Delete segment"
198:               >
199:                 <RefreshCcw />
200:               </Button>
201:             </div>
202:           ) : (
203:             <div className="text-sm text-muted-foreground italic">
204:               Audio source is not yet available.
205:             </div>
206:           )}
207:         </div>
208:       </div>
209:     </div>
210:   );
211: }
````

## File: apps/client/app/tools/create-script/components/ScriptFooter.tsx
````typescript
  1: import { Button } from "@/app/_components/ui/button";
  2: import type { ScriptSegment } from "@malalang/shared/types";
  3: import { LoaderCircle, PlayCircle, PlusCircle } from "lucide-react";
  4: import { Dispatch, SetStateAction, useCallback, useState } from "react";
  5: import { toast } from "sonner";
  6: import VideoPreviewPlayer from "./video-preview-player";
  7: import VideoPlayer from "@/app/_components/VideoPlayer";
  8: import { UploadApiResponse } from "cloudinary";
  9: import { fa } from "zod/v4/locales";
 10: 
 11: interface ScriptFooterProps {
 12:   setSegments: Dispatch<SetStateAction<ScriptSegment[]>>;
 13:   setIsPreview: Dispatch<SetStateAction<boolean>>;
 14:   Segments: ScriptSegment[];
 15: }
 16: export default function ScriptFooter({
 17:   setIsPreview,
 18:   setSegments,
 19:   Segments,
 20: }: ScriptFooterProps) {
 21:   const [VideoUrl, setVideoUrl] = useState<UploadApiResponse | null>(null);
 22:   const [isGenerating, setIsGenerating] = useState(false);
 23: 
 24:   const handleAddSegment = useCallback(() => {
 25:     const newSegment: ScriptSegment = {
 26:       id: `seg-${Date.now()}`,
 27:       text: "New segment text...",
 28:       audioSrc: "",
 29:       visualSrc: "",
 30:       duration: 3, // default duration
 31:       videoSearchQuery: "business",
 32:     };
 33:     setSegments((prev: ScriptSegment[]) => [...prev, newSegment]);
 34:   }, [setSegments]);
 35: 
 36: 
 37:   const handlePreview = async () => {
 38:     setIsGenerating(true);
 39:     toast.info("Generating video preview...", { duration: 5000 });
 40:     try {
 41:       const response = await fetch("/api/video", {
 42:         method: "POST",
 43:         headers: {
 44:           "Content-Type": "application/json",
 45:         },
 46:         body: JSON.stringify({ segments: Segments }),
 47:       });
 48:       const data = await response.json();
 49:       if (response.ok) {
 50: 
 51:         const finalUrl = data.response as UploadApiResponse;
 52:         console.log("Final video URL:", finalUrl);
 53:         setVideoUrl(finalUrl);
 54:         setIsPreview(true);
 55:         setIsGenerating(false);
 56:         toast.success("Video Preview Ready!");
 57:       } else {
 58: 
 59:         setIsGenerating(false);
 60:         console.error("API Error:", data.error);
 61:         toast.error(`Video generation failed: ${data.error}`);
 62:       }
 63:     } catch (error) {
 64:       setIsGenerating(false);
 65:       setIsPreview(false);
 66:       toast.error("An unexpected error occurred while contacting the server.");
 67:     }
 68:   };
 69: 
 70:   return (
 71:     <div className="pt-4 sticky bottom-0 bg-gray-900 z-10 p-2 -mx-2 border-t">
 72:       <div className="flex flex-1 gap-2 mb-4">
 73:         <Button variant="outline" className="flex-1" onClick={handleAddSegment}>
 74:           <PlusCircle className="mr-2 h-5 w-5" />
 75:           <span>Add Segment</span>
 76:         </Button>
 77:         <Button
 78:           className="flex-1"
 79:           onClick={() => handlePreview()}
 80:           disabled={Segments.length === 0 || isGenerating}
 81:         >
 82:           {isGenerating ? (
 83:             <LoaderCircle className="animate-spin mr-2 h-5 w-5" />
 84:           ) : (
 85:             <PlayCircle className="mr-2 h-5 w-5" />
 86:           )}
 87: 
 88:           <span>{"Preview Video"}</span>
 89:         </Button>
 90:       </div>
 91: 
 92:       {VideoUrl?.public_id && (
 93:         <VideoPreviewPlayer
 94:           VideoUrl={VideoUrl}
 95:           onExit={() => {
 96:             setIsPreview(false);
 97:             setVideoUrl(null);
 98:           }}
 99:         />
100:       )}
101:       {}
102:     </div>
103:   );
104: }
````

## File: apps/client/app/tools/create-script/components/ScriptGeneratorForm.tsx
````typescript
 1: "use client";
 2: import { Button } from "@/app/_components/ui/button";
 3: import { Input } from "@/app/_components/ui/input";
 4: import type { ScriptSegment } from "@malalang/shared/types";
 5: import { LoaderCircle, WandSparkles } from "lucide-react";
 6: import { Dispatch, SetStateAction, useCallback, useState } from "react";
 7: import { toast } from "sonner";
 8: 
 9: interface ScriptGeneratorFormProps {
10:   setSegments: Dispatch<SetStateAction<ScriptSegment[]>>;
11:   setIsPreview: Dispatch<SetStateAction<boolean>>;
12: }
13: 
14: export default function ScriptGeneratorForm({
15:   setSegments,
16:   setIsPreview,
17: }: ScriptGeneratorFormProps) {
18:   const [isGeneratingScript, setIsGeneratingScript] = useState(false);
19:   const [Topic, setTopic] = useState<string>(
20:     "Grow Your Local Business with a Professional Website No Deposit Required. Malalang is the best platform to create stunning websites easily."
21:   );
22:   const handleGenerateScript = useCallback(
23:     async (e: React.FormEvent) => {
24:       e.preventDefault();
25:       setIsGeneratingScript(true);
26:       try {
27:         const resp = await fetch("/api/generate-script", {
28:           method: "POST",
29:           headers: { "Content-Type": "application/json" },
30:           body: JSON.stringify({ topic: Topic }),
31:         });
32:         const json = await resp.json();
33:         if (!resp.ok || !json.success) {
34:           toast.error(json.error || "Failed to generate script");
35:         } else if (json.segments) {
36:           setSegments(json.segments);
37:           toast.success("Script generated successfully.");
38:           setIsPreview(false);
39:         }
40:       } catch (err: any) {
41:         console.error(err);
42:         toast.error(err?.message || "Failed to generate script");
43:       } finally {
44:         setIsGeneratingScript(false);
45:       }
46:     },
47:     [Topic, setSegments]
48:   );
49:   return (
50:     <form onSubmit={handleGenerateScript} className="space-y-4">
51:       <div className="space-y-2">
52:         <Input
53:           id="topic"
54:           name="topic"
55:           placeholder="e.g., 'The Future of Renewable Energy'"
56:           required
57:           value={Topic}
58:           onChange={(e) => setTopic(e.target.value)}
59:           disabled={isGeneratingScript}
60:         />
61:       </div>
62:       <Button type="submit" className="w-full" disabled={isGeneratingScript}>
63:         {isGeneratingScript ? (
64:           <LoaderCircle className="animate-spin mr-2 h-5 w-5" />
65:         ) : (
66:           <WandSparkles className="mr-2 h-5 w-5" />
67:         )}
68:         <span>Generate Script</span>
69:       </Button>
70:     </form>
71:   );
72: }
````

## File: apps/client/app/tools/create-script/components/ScriptHeader.tsx
````typescript
 1: import { CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
 2: import { Bot } from "lucide-react";
 3: 
 4: export default function ScriptHeader() {
 5:   return (
 6:     <CardHeader>
 7:       <div className="flex items-center gap-2">
 8:         <Bot className="w-6 h-6" />
 9:         <CardTitle className="font-headline">Script & Preview</CardTitle>
10:       </div>
11:       <CardDescription>
12:         Enter a topic to create your script, then generate a full video preview.
13:       </CardDescription>
14:     </CardHeader>
15:   );
16: }
````

## File: apps/client/app/tools/create-script/components/video-preview-player.tsx
````typescript
  1: "use client";
  2: 
  3: import { useEffect, useMemo, useRef, useState } from "react";
  4: 
  5: import { Button } from "@/app/_components/ui/button";
  6: import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";
  7: import { Slider } from "@/app/_components/ui/slider";
  8: import Link from "next/link";
  9: import { UploadApiResponse } from "cloudinary";
 10: 
 11: type VideoPreviewPlayerProps = {
 12:   onExit: () => void;
 13:   VideoUrl: UploadApiResponse;
 14: };
 15: 
 16: export default function VideoPreviewPlayer({
 17:   onExit,
 18:   VideoUrl,
 19: }: VideoPreviewPlayerProps) {
 20:   const [isPlaying, setIsPlaying] = useState(false);
 21:   const [isMuted, setIsMuted] = useState(false);
 22:   const [currentTime, setCurrentTime] = useState(0);
 23:   const videoRef = useRef<HTMLVideoElement | null>(null);
 24: 
 25:   const [totalDuration, setTotalDuration] = useState<number>(0);
 26: 
 27: 
 28:   const handleTimeUpdate = () => {
 29:     const v = videoRef.current;
 30:     if (!v) return;
 31:     const global = v.currentTime || 0;
 32:     setCurrentTime(global);
 33:   };
 34: 
 35:   useEffect(() => {
 36: 
 37:     const v = videoRef.current;
 38:     if (!v) return;
 39:     const onMeta = () => {
 40:       if (v.duration && !isNaN(v.duration)) setTotalDuration(v.duration);
 41:     };
 42:     v.addEventListener("loadedmetadata", onMeta);
 43:     return () => v.removeEventListener("loadedmetadata", onMeta);
 44:   }, []);
 45: 
 46:   const handlePlayPause = () => {
 47:     const v = videoRef.current;
 48:     if (!v) return;
 49:     if (isPlaying) {
 50:       v.pause();
 51:       setIsPlaying(false);
 52:       return;
 53:     }
 54:     v.play().catch(() => {});
 55:     setIsPlaying(true);
 56:   };
 57: 
 58: 
 59: 
 60:   const handleSeek = (value: number[]) => {
 61:     const newTime = value[0];
 62:     if (newTime === undefined) return;
 63:     const v = videoRef.current;
 64:     if (!v) return;
 65:     try {
 66:       v.currentTime = newTime;
 67:     } catch {}
 68:     setCurrentTime(newTime);
 69:     if (isPlaying) v.play().catch(() => {});
 70:   };
 71: 
 72:   const toggleMute = () => {
 73:     const v = videoRef.current;
 74:     if (!v) return;
 75:     v.muted = !isMuted;
 76:     setIsMuted(!isMuted);
 77:   };
 78: 
 79:   const formatTime = (t: number) => {
 80:     const m = Math.floor(t / 60);
 81:     const s = Math.floor(t % 60)
 82:       .toString()
 83:       .padStart(2, "0");
 84:     return `${m}:${s}`;
 85:   };
 86: 
 87:   const hasAnyVideo = !!VideoUrl;
 88:   if (!hasAnyVideo) {
 89:     return (
 90:       <div className="p-4 rounded-lg bg-destructive text-destructive-foreground">
 91:         Error: Preview source is missing. Cannot play preview.
 92:       </div>
 93:     );
 94:   }
 95: 
 96:   return (
 97:     <div className="aspect-video flex-1 w-full bg-black rounded-lg overflow-hidden relative group/player">
 98:       <video
 99:         ref={videoRef}
100:         className="w-full h-full object-cover absolute inset-0"
101:         src={VideoUrl.secure_url}
102:         playsInline
103:         preload="auto"
104:         muted={isMuted}
105:         onTimeUpdate={handleTimeUpdate}
106:         onPlay={() => setIsPlaying(true)}
107:         onPause={() => setIsPlaying(false)}
108:         onEnded={() => {
109:           setIsPlaying(false);
110:         }}
111:       />
112: 
113:       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 transition-opacity flex flex-col justify-between p-4 opacity-100">
114:         <div className="flex justify-between items-start">
115:           <h3 className="text-white font-bold text-lg">Preview</h3>
116:           <Button
117:             size="icon"
118:             variant="ghost"
119:             className="text-white hover:bg-white/20"
120:             onClick={onExit}
121:           >
122:             <X />
123:             <span className="sr-only">Exit Preview</span>
124:           </Button>
125:         </div>
126: 
127:         <div>
128:           <Slider
129:             value={[currentTime]}
130:             max={totalDuration}
131:             step={0.1}
132:             onValueChange={handleSeek}
133:             className="w-full"
134:             disabled={false}
135:           />
136:           <div className="flex items-center justify-between mt-2">
137:             <div className="flex items-center gap-4">
138:               <Button
139:                 size="icon"
140:                 variant="ghost"
141:                 className="text-white hover:bg-white/20"
142:                 onClick={handlePlayPause}
143:               >
144:                 {isPlaying ? <Pause /> : <Play />}
145:               </Button>
146: 
147:               <Link href={VideoUrl.secure_url} className="text-white hover:bg-white/20">
148:                 Download
149:               </Link>
150: 
151:               <Button
152:                 size="icon"
153:                 variant="ghost"
154:                 className="text-white hover:bg-white/20"
155:                 onClick={toggleMute}
156:               >
157:                 {isMuted ? <VolumeX /> : <Volume2 />}
158:               </Button>
159:               <span className="text-white text-xs font-mono">
160:                 {formatTime(currentTime)} / {formatTime(totalDuration)}
161:               </span>
162:             </div>
163:           </div>
164:         </div>
165:       </div>
166:     </div>
167:   );
168: }
````

## File: apps/client/app/tools/create-script/components/Videos.tsx
````typescript
 1: import VideoPlayer from "@/app/_components/VideoPlayer";
 2: import { getVideosByFolder } from "@/app/_lib/Cloudinary/MainVideo/getVideos";
 3: import Link from "next/link";
 4: 
 5: export const Videos = async () => {
 6:   const videos = await getVideosByFolder("final_videos");
 7:   return videos.length !== 0 ? (
 8:     <div className="mb-4 flex flex-wrap justify-center gap-2">
 9:       {videos.map((video) => (
10:         <VideoPlayer
11:           key={video.public_id}
12:           width={300}
13:           height={170}
14:           public_id={video.public_id}
15:         />
16:       ))}
17:     </div>
18:   ) : (
19:     <div className="text-center p-10">
20:       <p className="mb-4 text-slate-300">
21:         No videos found. Generate a video using the form above to see your final videos here.
22:       </p>
23:     </div>
24:   );
25: };
````

## File: apps/client/app/tools/create-script/opengraph-image.tsx
````typescript
 1: import { ImageResponse } from 'next/og';
 2: import { createOGImage } from '@/app/_lib/og-image-utils';
 3: 
 4: export const runtime = 'edge';
 5: export const alt = 'Create Script with Malalang';
 6: export const size = { width: 1200, height: 630 };
 7: export const contentType = 'image/png';
 8: 
 9: export default async function Image() {
10:   return createOGImage({
11:     title: 'Create Script',
12:     description: 'Generate professional scripts for your videos and content with AI assistance',
13:     logo: true,
14:   });
15: }
````

## File: apps/client/app/tools/QRCodeGenerator/page.tsx
````typescript
  1: 'use client';
  2: 
  3: import { useState, useRef } from 'react';
  4: import { QRCodeCanvas } from 'qrcode.react';
  5: import { Download, Link as LinkIcon, QrCode, Image as ImageIcon } from 'lucide-react';
  6: import { motion, AnimatePresence } from 'motion/react';
  7: import { Button } from '@/app/_components/ui/button';
  8: 
  9: import HeroBackground from '@/app/_components/HeroBackground';
 10: 
 11: export default function QRCodeGenerator() {
 12:   const [url, setUrl] = useState('');
 13:   const [logoUrl, setLogoUrl] = useState<string | null>(null);
 14:   const fileInputRef = useRef<HTMLInputElement>(null);
 15: 
 16:   const downloadQR = () => {
 17:     const canvas = document.getElementById('qr-canvas') as HTMLCanvasElement;
 18:     if (!canvas) return;
 19:     const pngUrl = canvas.toDataURL('image/png');
 20:     const downloadLink = document.createElement('a');
 21:     downloadLink.href = pngUrl;
 22:     downloadLink.download = 'qrcode.png';
 23:     document.body.appendChild(downloadLink);
 24:     downloadLink.click();
 25:     document.body.removeChild(downloadLink);
 26:   };
 27: 
 28:   const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
 29:     const file = e.target.files?.[0];
 30:     if (file) {
 31:       const reader = new FileReader();
 32:       reader.onload = (event) => {
 33:         setLogoUrl(event.target?.result as string);
 34:       };
 35:       reader.readAsDataURL(file);
 36:     }
 37:   };
 38: 
 39:   return (
 40:     <main>
 41:       {}
 42:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
 43:         <HeroBackground />
 44:         <div className="container mx-auto px-6 relative z-10">
 45:           <div className="text-center mb-12">
 46:             <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
 47:               QR Code <span className="text-brand-primary glow-green">Generator</span>
 48:             </h1>
 49:             <p className="text-xl text-blue-300 font-semibold max-w-3xl mx-auto">
 50:               Create custom QR codes with optional logo overlays. Generated securely in your browser with no data sent to servers.
 51:             </p>
 52:           </div>
 53:         </div>
 54:       </section>
 55: 
 56:       {}
 57:       <section className="py-12 md:py-16 bg-background">
 58:         <div className="container mx-auto px-6">
 59:           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
 60:             {}
 61:             <div className="md:col-span-1">
 62:               <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6 sticky top-20">
 63:                 {}
 64:                 <div>
 65:                   <label htmlFor="url-input" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
 66:                     Link Destination
 67:                   </label>
 68:                   <div className="relative group">
 69:                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
 70:                       <LinkIcon className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
 71:                     </div>
 72:                     <input
 73:                       id="url-input"
 74:                       type="url"
 75:                       value={url}
 76:                       onChange={(e) => setUrl(e.target.value)}
 77:                       placeholder="https://example.com"
 78:                       className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all shadow-sm"
 79:                     />
 80:                   </div>
 81:                 </div>
 82: 
 83:                 {}
 84:                 <div>
 85:                   <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
 86:                     Logo Overlay (Optional)
 87:                   </label>
 88:                   <input
 89:                     type="file"
 90:                     accept="image/*"
 91:                     ref={fileInputRef}
 92:                     className="hidden"
 93:                     onChange={handleLogoUpload}
 94:                   />
 95:                   <div className="flex flex-col sm:flex-row gap-3">
 96:                     <button
 97:                       onClick={() => fileInputRef.current?.click()}
 98:                       className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
 99:                     >
100:                       <ImageIcon className="w-4 h-4 text-slate-400" />
101:                       <span className="hidden xs:inline">Upload Logo</span>
102:                       <span className="xs:hidden">Upload</span>
103:                     </button>
104:                     {logoUrl && (
105:                       <button
106:                         onClick={() => setLogoUrl(null)}
107:                         className="px-3 sm:px-4 py-3 bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-800 rounded-lg text-sm font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors shadow-sm"
108:                       >
109:                         Remove
110:                       </button>
111:                     )}
112:                   </div>
113:                 </div>
114: 
115:                 {}
116:                 <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-xl border border-blue-100 dark:border-blue-900">
117:                   <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed font-medium">
118:                     <span className="block font-bold mb-1">Pro Tip:</span>
119:                     Your QR codes are generated securely directly in your browser. No data is sent to our servers.
120:                   </p>
121:                 </div>
122:               </div>
123:             </div>
124: 
125:             {}
126:             <div className="md:col-span-2">
127:               <div className="flex flex-col items-center justify-center min-h-96 md:min-h-full">
128:                 <AnimatePresence mode="wait">
129:                   {url.trim() ? (
130:                     <motion.div
131:                       key="qr"
132:                       initial={{ opacity: 0, scale: 0.95 }}
133:                       animate={{ opacity: 1, scale: 1 }}
134:                       exit={{ opacity: 0, scale: 0.95 }}
135:                       transition={{ duration: 0.3 }}
136:                       className="flex flex-col items-center w-full gap-8"
137:                     >
138:                       <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-slate-950/60 border border-slate-100 dark:border-slate-700 relative">
139:                         <QRCodeCanvas
140:                           id="qr-canvas"
141:                           value={url}
142:                           size={256}
143:                           level="H"
144:                           includeMargin={true}
145:                           imageSettings={logoUrl ? {
146:                             src: logoUrl,
147:                             x: undefined,
148:                             y: undefined,
149:                             height: 48,
150:                             width: 48,
151:                             excavate: true,
152:                           } : undefined}
153:                           className="rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm"
154:                         />
155:                       </div>
156: 
157:                       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto sm:justify-center">
158:                         <button
159:                           onClick={downloadQR}
160:                           className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
161:                         >
162:                           <Download className="w-5 h-5 opacity-70 flex-shrink-0" />
163:                           <span>Export PNG</span>
164:                         </button>
165:                       </div>
166:                     </motion.div>
167:                   ) : (
168:                     <motion.div
169:                       key="empty"
170:                       initial={{ opacity: 0 }}
171:                       animate={{ opacity: 1 }}
172:                       exit={{ opacity: 0 }}
173:                       className="flex flex-col items-center justify-center text-slate-400 text-center w-full"
174:                     >
175:                       <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-slate-950/60 border border-slate-100 dark:border-slate-700 relative flex items-center justify-center mb-6 w-full aspect-square max-w-xs">
176:                         <div className="w-48 h-48 sm:w-56 sm:h-56 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-900">
177:                           <QrCode className="w-12 h-12 text-slate-300 dark:text-slate-600 opacity-50" />
178:                         </div>
179:                       </div>
180:                       <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400">Enter a valid URL to generate your QR code</p>
181:                     </motion.div>
182:                   )}
183:                 </AnimatePresence>
184:               </div>
185:             </div>
186:           </div>
187:         </div>
188:       </section>
189:     </main>
190:   );
191: }
````

## File: apps/client/next-env.d.ts
````typescript
1: import "./.next/dev/types/routes.d.ts";
````

## File: packages/shared/src/hooks/useCreateChatClient.ts
````typescript
 1: "use client";
 2: 
 3: import { useEffect, useRef, useState } from "react";
 4: import { StreamChat } from "stream-chat";
 5: 
 6: interface UseCreateChatClientArgs {
 7:   apiKey: string;
 8:   tokenOrProvider: string;
 9:   userData: { id: string; name: string };
10: }
11: 
12: export const useCreateChatClient = ({
13:   apiKey,
14:   tokenOrProvider,
15:   userData,
16: }: UseCreateChatClientArgs) => {
17:   const [chatClient, setChatClient] = useState<StreamChat | null>(null);
18: 
19: 
20:   const userIdRef = useRef(userData.id);
21:   const userNameRef = useRef(userData.name);
22: 
23:   useEffect(() => {
24: 
25:     if (!apiKey || !tokenOrProvider) return;
26: 
27:     let didCancel = false;
28:     const client = StreamChat.getInstance(apiKey);
29: 
30:     const connect = async () => {
31:       try {
32: 
33:         if (
34:           client.userID &&
35:           client.userID === userIdRef.current &&
36:           client.wsConnection?.isHealthy
37:         ) {
38:           if (!didCancel) setChatClient(client);
39:           return;
40:         }
41: 
42: 
43:         if (client.userID) {
44:           await client.disconnectUser();
45:         }
46: 
47:         await client.connectUser(
48:           { id: userIdRef.current, name: userNameRef.current },
49:           tokenOrProvider
50:         );
51: 
52:         if (!didCancel) setChatClient(client);
53:       } catch (err) {
54:         if (!didCancel) {
55:           console.error("[useCreateChatClient] connectUser failed:", err);
56:         }
57:       }
58:     };
59: 
60:     connect();
61: 
62:     return () => {
63:       didCancel = true;
64:       setChatClient(null);
65:       if (client.userID) {
66:         client.disconnectUser().catch(() => {});
67:       }
68:     };
69: 
70: 
71:   }, [apiKey, tokenOrProvider]);
72: 
73:   return chatClient;
74: };
````

## File: packages/shared/src/supabase/client.ts
````typescript
 1: import { createClient } from '@supabase/supabase-js';
 2: import { createBrowserClient } from '@supabase/ssr';
 3: import type { Database } from '../types/supabase';
 4: 
 5: const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
 6: const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
 7: 
 8: if (!supabaseUrl || !supabaseAnonKey) {
 9:   console.warn('Supabase URL or Anon Key is missing. Check your environment variables.');
10: }
11: 
12: // Typed Supabase client for shared server-side services
13: export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
14: 
15: export const createSupabaseClient = () =>
16:   createClient<Database>(supabaseUrl, supabaseAnonKey);
17: 
18: export const createSupabaseBrowserClient = () =>
19:   createBrowserClient<Database>(
20:     supabaseUrl,
21:     supabaseAnonKey
22:   );
23: 
24: /**
25:  * Standardized error handling for Supabase responses.
26:  */
27: export async function handleResponse<T>(queryBuilder: PromiseLike<{ data: T | null; error: any }>, allowEmpty = false): Promise<T> {
28:   const { data, error } = await queryBuilder;
29:   if (error) {
30:     console.error('Supabase Error:', error);
31:     throw new Error(error.message);
32:   }
33:   if (data === null && !allowEmpty) {
34:     throw new Error('No data returned from Supabase');
35:   }
36:   return data as T;
37: }
````

## File: packages/shared/tsconfig.json
````json
 1: {
 2:   "extends": "@malalang/typescript-config/base.json",
 3:   "compilerOptions": {
 4:     "rootDir": "src",
 5:     "outDir": "dist",
 6:     "types": ["node"],
 7:     "jsx": "react-jsx"
 8:   },
 9:   "include": ["src/**/*"]
10: }
````

## File: pnpm-workspace.yaml
````yaml
 1: packages:
 2:   - "apps/*"
 3:   - "packages/*"
 4: 
 5: 
 6: catalog:
 7:   "next": "16.2.0"
 8:   "react": "^19.2.0"
 9:   "react-dom": "^19.2.0"
10:   "eslint": "^9.39.1"
11:   "typescript": "5.9.2"
12:   "postcss": "^8.5.14"
13:   "prettier": "^3.8.3"
14:   "zod": "^4.4.3"
15:   "lucide-react": "^0.545.0"
16:   "tailwindcss": "^4.3.0"
17:   "@supabase/supabase-js": "^2.105.4"
18:   "@supabase/ssr": "^0.6.1"
````

## File: apps/admin/app/_components/MeetingWrapper.tsx
````typescript
  1: "use client";
  2: 
  3: import React, { useEffect, useState } from 'react';
  4: import { useRouter } from 'next/navigation';
  5: import {
  6:   StreamVideo,
  7:   StreamVideoClient,
  8:   StreamCall,
  9:   CallControls,
 10:   StreamTheme,
 11:   Call,
 12:   useCallStateHooks,
 13:   ParticipantView,
 14:   StreamVideoParticipant,
 15:   hasScreenShare,
 16: } from "@stream-io/video-react-sdk";
 17: import "@stream-io/video-react-sdk/dist/css/styles.css";
 18: import { Chat, Channel, ChannelHeader, MessageList, MessageComposer, Window } from "stream-chat-react";
 19: import "stream-chat-react/dist/css/index.css";
 20: import { useCreateChatClient } from "@malalang/shared/hooks/useCreateChatClient";
 21: import { AlertCircle, Loader2 } from 'lucide-react';
 22: 
 23: interface MeetingWrapperProps {
 24:   callId: string;
 25:   userName: string;
 26:   userId: string;
 27: }
 28: 
 29: 
 30: const MeetingLayout = ({ onLeave }: { onLeave: () => void }) => {
 31:   const { useParticipants } = useCallStateHooks();
 32:   const participants = useParticipants() as StreamVideoParticipant[];
 33: 
 34: 
 35:   const screenSharer = participants.find((p) => hasScreenShare(p));
 36: 
 37: 
 38:   const cols = participants.length <= 1 ? 1 : participants.length <= 4 ? 2 : 3;
 39: 
 40:   return (
 41:     <div className="flex flex-col h-full">
 42:       <div className="flex-1 overflow-hidden min-h-0">
 43:         {screenSharer ? (
 44: 
 45:           <div style={{ display: 'flex', height: '100%', backgroundColor: '#050d18' }}>
 46:             <div style={{ flex: 1, minWidth: 0 }}>
 47:               <ParticipantView participant={screenSharer} trackType="screenShareTrack" />
 48:             </div>
 49:             <div style={{
 50:               width: '164px',
 51:               display: 'flex',
 52:               flexDirection: 'column',
 53:               gap: '6px',
 54:               padding: '8px',
 55:               overflowY: 'auto',
 56:               backgroundColor: 'rgba(0,0,0,0.7)',
 57:               borderLeft: '1px solid rgba(0,210,106,0.12)',
 58:             }}>
 59:               {participants.map((p) => (
 60:                 <div key={p.sessionId} style={{
 61:                   height: '110px',
 62:                   borderRadius: '10px',
 63:                   overflow: 'hidden',
 64:                   flexShrink: 0,
 65:                   border: '1px solid rgba(255,255,255,0.07)',
 66:                 }}>
 67:                   <ParticipantView participant={p} trackType="videoTrack" />
 68:                 </div>
 69:               ))}
 70:             </div>
 71:           </div>
 72:         ) : (
 73: 
 74:           <div style={{
 75:             display: 'grid',
 76:             gridTemplateColumns: `repeat(${cols}, 1fr)`,
 77:             gap: '6px',
 78:             padding: '6px',
 79:             height: '100%',
 80:             backgroundColor: '#000',
 81:             boxSizing: 'border-box',
 82:           }}>
 83:             {participants.map((p) => (
 84:               <div key={p.sessionId} style={{
 85:                 borderRadius: '12px',
 86:                 overflow: 'hidden',
 87:                 minHeight: 0,
 88:                 position: 'relative',
 89:                 border: '1px solid rgba(255,255,255,0.06)',
 90:               }}>
 91:                 <ParticipantView participant={p} trackType="videoTrack" />
 92:               </div>
 93:             ))}
 94:           </div>
 95:         )}
 96:       </div>
 97: 
 98:       {}
 99:       <CallControls onLeave={onLeave} />
100:     </div>
101:   );
102: };
103: 
104: 
105: const VIDEO_STYLES = `
106:   .str-video {
107:     --str-video__primary-color:       #00D26A;
108:     --str-video__secondary-color:     #3B82F6;
109:     --str-video__text-color1:         #F1F5F9;
110:     --str-video__text-color2:         #CBD5E1;
111:     --str-video__background-color:    #050d18;
112:     --str-video__active-video-border: 2px solid #00D26A;
113:   }
114:   .str-video.dark {
115:     --str-video__background-color: #000000;
116:     --str-video__surface-color:    #0C1E3A;
117:     --str-video__border-radius-sm: 10px;
118:     --str-video__border-radius-md: 18px;
119:   }
120: 
121:   /* Controls bar */
122:   .str-video__call-controls {
123:     background:      rgba(5, 13, 24, 0.92) !important;
124:     backdrop-filter: blur(16px)            !important;
125:     border-top:      1px solid rgba(0,210,106,0.15) !important;
126:     padding:         16px 24px             !important;
127:     gap:             12px                  !important;
128:   }
129:   .str-video__call-controls__button {
130:     background:    rgba(30,58,95,0.8) !important;
131:     border:        1px solid rgba(255,255,255,0.12) !important;
132:     box-shadow:    0 4px 14px rgba(0,0,0,0.35) !important;
133:     border-radius: 14px !important;
134:     transition:    all 0.18s ease !important;
135:     color:         #F1F5F9 !important;
136:   }
137:   .str-video__call-controls__button svg {
138:     color:  #00D26A !important;
139:     stroke: #00D26A !important;
140:   }
141:   .str-video__call-controls__button:hover {
142:     background:   #00D26A    !important;
143:     border-color: transparent !important;
144:     transform:    translateY(-2px) !important;
145:     box-shadow:   0 8px 20px rgba(0,210,106,0.35) !important;
146:   }
147:   .str-video__call-controls__button:hover svg {
148:     color:  #050d18 !important;
149:     stroke: #050d18 !important;
150:   }
151:   .str-video__hang-up-call-button,
152:   .str-video__hang-up-call-button:hover {
153:     background:   #EF4444 !important;
154:     border-color: transparent !important;
155:     box-shadow:   0 8px 20px rgba(239,68,68,0.4) !important;
156:   }
157:   .str-video__hang-up-call-button svg {
158:     color:  #fff !important;
159:     stroke: #fff !important;
160:   }
161:   .str-video__call-controls__button--active {
162:     background:   rgba(0,210,106,0.18) !important;
163:     border-color: rgba(0,210,106,0.4)  !important;
164:   }
165: 
166:   /* Participant name / stats — always high contrast */
167:   .str-video__participant-details,
168:   .str-video__participant-details * {
169:     color:       #F1F5F9 !important;
170:     text-shadow: 0 1px 6px rgba(0,0,0,0.95) !important;
171:     font-weight: 600 !important;
172:   }
173:   .str-video__participant-view--active-speaker {
174:     box-shadow: 0 0 0 2px #00D26A !important;
175:   }
176: 
177:   /* "..." participant action popover — fix dark-on-dark text */
178:   [class*="str-video__participant-actions"],
179:   [class*="str-video__participant-action-menu"],
180:   [class*="str-video__generic-menu"],
181:   [class*="str-video__composite-button__menu"],
182:   [class*="str-video__base-popover"],
183:   [class*="str-video__popover"] {
184:     background:    #1E293B !important;
185:     border:        1px solid rgba(255,255,255,0.14) !important;
186:     box-shadow:    0 8px 32px rgba(0,0,0,0.65) !important;
187:     border-radius: 12px !important;
188:   }
189:   [class*="str-video__participant-actions"] *,
190:   [class*="str-video__participant-action-menu"] *,
191:   [class*="str-video__generic-menu"] *,
192:   [class*="str-video__composite-button__menu"] *,
193:   [class*="str-video__base-popover"] *,
194:   [class*="str-video__popover"] * {
195:     color: #F1F5F9 !important;
196:   }
197:   [class*="str-video__participant-actions"] button:hover,
198:   [class*="str-video__participant-action-menu"] button:hover,
199:   [class*="str-video__generic-menu"] button:hover,
200:   [class*="str-video__composite-button__menu"] button:hover,
201:   [class*="str-video__base-popover"] button:hover,
202:   [class*="str-video__popover"] button:hover {
203:     background: rgba(0,210,106,0.12) !important;
204:   }
205: `;
206: 
207: 
208: export const MeetingWrapper: React.FC<MeetingWrapperProps> = ({ callId, userName, userId }) => {
209:   const router = useRouter();
210:   const [client, setClient] = useState<StreamVideoClient | null>(null);
211:   const [call, setCall] = useState<Call | null>(null);
212:   const [error, setError] = useState<string | null>(null);
213:   const [isInitializing, setIsInitializing] = useState(true);
214: 
215:   const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
216:   const [token, setToken] = useState("");
217: 
218:   const chatClient = useCreateChatClient({
219:     apiKey,
220:     tokenOrProvider: token,
221:     userData: { id: userId, name: userName },
222:   });
223: 
224:   useEffect(() => {
225:     if (!apiKey) {
226:       setError("Stream API Key is missing.");
227:       setIsInitializing(false);
228:       return;
229:     }
230: 
231:     const initStream = async () => {
232:       try {
233:         // Pass callId so the server registers this admin user as a channel
234:         // member before the chat UI mounts — prevents Error 17 (ReadChannel).
235:         const res = await fetch(`/api/stream-token?userId=${userId}&callId=${callId}`);
236:         if (!res.ok) throw new Error("Failed to fetch stream token");
237:         const { token: fetchedToken } = await res.json();
238:         setToken(fetchedToken);
239: 
240:         const activeClient = new StreamVideoClient({
241:           apiKey,
242:           user: { id: userId, name: userName },
243:           token: fetchedToken,
244:         });
245: 
246:         const videoCall = activeClient.call("default", callId);
247:         await videoCall.join({ create: true });
248: 
249:         setClient(activeClient);
250:         setCall(videoCall);
251:         setIsInitializing(false);
252:       } catch (err: any) {
253:         setError(err.message || "Failed to connect to the meeting.");
254:         setIsInitializing(false);
255:       }
256:     };
257: 
258:     initStream();
259:   }, [callId, userId, userName, apiKey]);
260: 
261:   if (error) {
262:     return (
263:       <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col items-center justify-center text-center p-8 text-rose-500 shadow-sm">
264:         <AlertCircle className="w-12 h-12 mb-4" />
265:         <h3 className="text-xl font-bold mb-2">Connection Error</h3>
266:         <p className="max-w-md text-slate-600">{error}</p>
267:         <button
268:           onClick={() => window.location.reload()}
269:           className="mt-6 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
270:         >
271:           Try Again
272:         </button>
273:       </div>
274:     );
275:   }
276: 
277:   if (isInitializing || !client || !call || !chatClient) {
278:     return (
279:       <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-center p-8 text-slate-500 shadow-sm">
280:         <Loader2 className="w-12 h-12 mb-4 animate-spin text-emerald-600" />
281:         <h3 className="text-xl font-bold mb-2">Initializing Meeting</h3>
282:         <p className="max-w-md">Connecting to Stream services...</p>
283:       </div>
284:     );
285:   }
286: 
287:   const safeChannelId = callId.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
288: 
289:   return (
290:     <div className="flex flex-col gap-6">
291:       <style>{VIDEO_STYLES}</style>
292: 
293:       {}
294:       <div
295:         className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-xl"
296:         style={{ height: 'calc(100vh - 200px)', minHeight: '520px' }}
297:       >
298:         <StreamVideo client={client}>
299:           <StreamTheme className="dark h-full">
300:             <StreamCall call={call}>
301:               <MeetingLayout onLeave={() => router.push('/meetings')} />
302:             </StreamCall>
303:           </StreamTheme>
304:         </StreamVideo>
305:       </div>
306: 
307:       {}
308:       <div className="w-full h-[35vh] min-h-[280px] bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
309:         <Chat client={chatClient}>
310:           <Channel channel={chatClient.channel('messaging', safeChannelId)}>
311:             <Window>
312:               <ChannelHeader />
313:               <MessageList />
314:               <MessageComposer />
315:             </Window>
316:           </Channel>
317:         </Chat>
318:       </div>
319:     </div>
320:   );
321: };
````

## File: apps/admin/app/content/faqs/page.tsx
````typescript
  1: "use client";
  2: 
  3: import { useEffect, useState } from "react";
  4: import {
  5:   createFaqAction,
  6:   updateFaqAction,
  7:   deleteFaqAction
  8: } from "@/app/_lib/actions";
  9: import { getFaqs } from "@malalang/shared/services/content";
 10: import type { FaqItem } from "@malalang/shared/types";
 11: import { Plus, Trash2, Edit2, Save, X } from "lucide-react";
 12: 
 13: export default function FaqsPage() {
 14:   const [faqs, setFaqs] = useState<FaqItem[]>([]);
 15:   const [loading, setLoading] = useState(true);
 16:   const [editingId, setEditingId] = useState<string | null>(null);
 17:   const [editForm, setEditForm] = useState({ question: "", answer: "" });
 18:   const [isAdding, setIsAdding] = useState(false);
 19: 
 20:   const fetchFaqs = async () => {
 21:     setLoading(true);
 22:     try {
 23:       const data = await getFaqs();
 24:       setFaqs(data);
 25:     } catch (e) {
 26:       console.error(e);
 27:     } finally {
 28:       setLoading(false);
 29:     }
 30:   };
 31: 
 32:   useEffect(() => {
 33:     fetchFaqs();
 34:   }, []);
 35: 
 36:   const handleSave = async (id?: string) => {
 37:     try {
 38:       let res;
 39:       if (id) {
 40:         res = await updateFaqAction(id, editForm);
 41:       } else {
 42:         res = await createFaqAction({ ...editForm, display_order: faqs.length + 1 });
 43:       }
 44: 
 45:       if (res.success) {
 46:         setEditingId(null);
 47:         setIsAdding(false);
 48:         setEditForm({ question: "", answer: "" });
 49:         fetchFaqs();
 50:       } else {
 51:         alert("Failed to save: " + res.error);
 52:       }
 53:     } catch (e) {
 54:       console.error(e);
 55:     }
 56:   };
 57: 
 58:   const handleDelete = async (id?: string) => {
 59:     if (!id || !confirm("Delete this FAQ?")) return;
 60:     try {
 61:       const res = await deleteFaqAction(id);
 62:       if (res.success) {
 63:         fetchFaqs();
 64:       } else {
 65:         alert("Failed to delete: " + res.error);
 66:       }
 67:     } catch (e) {
 68:       console.error(e);
 69:     }
 70:   };
 71: 
 72:   const startEdit = (faq: FaqItem) => {
 73:     setEditingId(faq.id || null);
 74:     setEditForm({ question: faq.question, answer: faq.answer });
 75:   };
 76: 
 77:   return (
 78:     <div className="max-w-4xl">
 79:       <div className="flex items-center justify-between mb-8">
 80:         <div>
 81:           <h1 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h1>
 82:           <p className="text-gray-500 text-sm mt-1">Manage the FAQs displayed on the website.</p>
 83:         </div>
 84:         <button
 85:           onClick={() => setIsAdding(true)}
 86:           className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
 87:         >
 88:           <Plus size={16} />
 89:           Add FAQ
 90:         </button>
 91:       </div>
 92: 
 93:       <div className="space-y-4">
 94:         {isAdding && (
 95:           <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm">
 96:             <h3 className="font-bold text-emerald-900 mb-4">New FAQ</h3>
 97:             <div className="space-y-4">
 98:               <input
 99:                 type="text"
100:                 placeholder="Question"
101:                 className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
102:                 value={editForm.question}
103:                 onChange={(e) => setEditForm({ ...editForm, question: e.target.value })}
104:               />
105:               <textarea
106:                 placeholder="Answer"
107:                 rows={3}
108:                 className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
109:                 value={editForm.answer}
110:                 onChange={(e) => setEditForm({ ...editForm, answer: e.target.value })}
111:               />
112:               <div className="flex justify-end gap-3">
113:                 <button
114:                   onClick={() => setIsAdding(false)}
115:                   className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
116:                 >
117:                   Cancel
118:                 </button>
119:                 <button
120:                   onClick={() => handleSave()}
121:                   className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700"
122:                 >
123:                   Save FAQ
124:                 </button>
125:               </div>
126:             </div>
127:           </div>
128:         )}
129: 
130:         {loading ? (
131:           <p className="text-gray-400 text-center py-12">Loading FAQs...</p>
132:         ) : faqs.length === 0 ? (
133:           <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
134:             <p className="text-gray-500">No FAQs found. Add your first one above.</p>
135:           </div>
136:         ) : (
137:           faqs.map((faq) => (
138:             <div key={faq.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
139:               {editingId === faq.id ? (
140:                 <div className="space-y-4">
141:                   <input
142:                     type="text"
143:                     className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-emerald-500"
144:                     value={editForm.question}
145:                     onChange={(e) => setEditForm({ ...editForm, question: e.target.value })}
146:                   />
147:                   <textarea
148:                     rows={3}
149:                     className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-emerald-500"
150:                     value={editForm.answer}
151:                     onChange={(e) => setEditForm({ ...editForm, answer: e.target.value })}
152:                   />
153:                   <div className="flex justify-end gap-2">
154:                     <button onClick={() => setEditingId(null)} className="p-2 text-gray-400 hover:text-gray-600">
155:                       <X size={20} />
156:                     </button>
157:                     <button onClick={() => handleSave(faq.id)} className="p-2 text-emerald-600 hover:text-emerald-700">
158:                       <Save size={20} />
159:                     </button>
160:                   </div>
161:                 </div>
162:               ) : (
163:                 <div className="flex justify-between items-start gap-4">
164:                   <div className="flex-1">
165:                     <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
166:                     <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
167:                   </div>
168:                   <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
169:                     <button
170:                       onClick={() => startEdit(faq)}
171:                       className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
172:                     >
173:                       <Edit2 size={18} />
174:                     </button>
175:                     <button
176:                       onClick={() => handleDelete(faq.id)}
177:                       className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
178:                     >
179:                       <Trash2 size={18} />
180:                     </button>
181:                   </div>
182:                 </div>
183:               )}
184:             </div>
185:           ))
186:         )}
187:       </div>
188:     </div>
189:   );
190: }
````

## File: apps/admin/app/content/portfolio/page.tsx
````typescript
  1: "use client";
  2: 
  3: import { useEffect, useState } from "react";
  4: import {
  5:   createPortfolioItemAction,
  6:   updatePortfolioItemAction,
  7:   deletePortfolioItemAction
  8: } from "@/app/_lib/actions";
  9: import { getPortfolioItems } from "@malalang/shared/services/content";
 10: import type { PortfolioItem } from "@malalang/shared/types";
 11: import { Plus, Trash2, Edit2, Save, X, ExternalLink, Image as ImageIcon } from "lucide-react";
 12: 
 13: export default function PortfolioPage() {
 14:   const [items, setItems] = useState<PortfolioItem[]>([]);
 15:   const [loading, setLoading] = useState(true);
 16:   const [editingId, setEditingId] = useState<string | null>(null);
 17:   const [editForm, setEditForm] = useState({ title: "", description: "", imageUrl: "", category: "" });
 18:   const [isAdding, setIsAdding] = useState(false);
 19: 
 20:   const fetchItems = async () => {
 21:     setLoading(true);
 22:     try {
 23:       const data = await getPortfolioItems();
 24:       setItems(data);
 25:     } catch (e) {
 26:       console.error(e);
 27:     } finally {
 28:       setLoading(false);
 29:     }
 30:   };
 31: 
 32:   useEffect(() => {
 33:     fetchItems();
 34:   }, []);
 35: 
 36:   const handleSave = async (id?: string) => {
 37:     try {
 38:       let res;
 39:       if (id) {
 40:         res = await updatePortfolioItemAction(id, {
 41:           title: editForm.title,
 42:           description: editForm.description,
 43:           image_url: editForm.imageUrl,
 44:           category: editForm.category
 45:         });
 46:       } else {
 47:         res = await createPortfolioItemAction({
 48:           title: editForm.title,
 49:           description: editForm.description,
 50:           image_url: editForm.imageUrl,
 51:           category: editForm.category,
 52:           display_order: items.length + 1
 53:         });
 54:       }
 55: 
 56:       if (res.success) {
 57:         setEditingId(null);
 58:         setIsAdding(false);
 59:         setEditForm({ title: "", description: "", imageUrl: "", category: "" });
 60:         fetchItems();
 61:       } else {
 62:         alert("Failed to save: " + res.error);
 63:       }
 64:     } catch (e) {
 65:       console.error(e);
 66:     }
 67:   };
 68: 
 69:   const handleDelete = async (id?: string) => {
 70:     if (!id || !confirm("Delete this portfolio item?")) return;
 71:     try {
 72:       const res = await deletePortfolioItemAction(id);
 73:       if (res.success) {
 74:         fetchItems();
 75:       } else {
 76:         alert("Failed to delete: " + res.error);
 77:       }
 78:     } catch (e) {
 79:       console.error(e);
 80:     }
 81:   };
 82: 
 83:   return (
 84:     <div className="max-w-6xl">
 85:       <div className="flex items-center justify-between mb-8">
 86:         <div>
 87:           <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
 88:           <p className="text-gray-500 text-sm mt-1">Showcase your best projects and client work.</p>
 89:         </div>
 90:         <button
 91:           onClick={() => setIsAdding(true)}
 92:           className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
 93:         >
 94:           <Plus size={16} />
 95:           Add Project
 96:         </button>
 97:       </div>
 98: 
 99:       <div className="grid gap-8">
100:         {isAdding && (
101:           <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-sm">
102:             <h3 className="font-bold text-emerald-900 mb-4 text-lg">New Project</h3>
103:             <div className="grid md:grid-cols-2 gap-6">
104:               <div className="space-y-4">
105:                 <input
106:                   type="text"
107:                   placeholder="Project Title"
108:                   className="w-full px-4 py-2 border border-emerald-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
109:                   value={editForm.title}
110:                   onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
111:                 />
112:                 <input
113:                   type="text"
114:                   placeholder="Category (e.g. E-commerce, Travel)"
115:                   className="w-full px-4 py-2 border border-emerald-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
116:                   value={editForm.category}
117:                   onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
118:                 />
119:                 <input
120:                   type="text"
121:                   placeholder="Image URL"
122:                   className="w-full px-4 py-2 border border-emerald-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
123:                   value={editForm.imageUrl}
124:                   onChange={(e) => setEditForm({ ...editForm, imageUrl: e.target.value })}
125:                 />
126:               </div>
127:               <div className="space-y-4">
128:                 <textarea
129:                   placeholder="Description"
130:                   rows={5}
131:                   className="w-full px-4 py-2 border border-emerald-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
132:                   value={editForm.description}
133:                   onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
134:                 />
135:                 <div className="flex justify-end gap-3 pt-2">
136:                   <button onClick={() => setIsAdding(false)} className="px-4 py-2 text-sm text-gray-600">Cancel</button>
137:                   <button onClick={() => handleSave()} className="bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm">Save Project</button>
138:                 </div>
139:               </div>
140:             </div>
141:           </div>
142:         )}
143: 
144:         {loading ? (
145:           <p className="text-center py-20 text-gray-400">Loading portfolio...</p>
146:         ) : items.length === 0 ? (
147:           <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
148:              <ImageIcon className="mx-auto text-gray-300 mb-4" size={48} />
149:             <p className="text-gray-500">No portfolio items found.</p>
150:           </div>
151:         ) : (
152:           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
153:             {items.map((item) => (
154:               <div key={item.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
155:                 <div className="relative h-48 bg-gray-100">
156:                   {item.imageUrl ? (
157:                     <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
158:                   ) : (
159:                     <div className="w-full h-full flex items-center justify-center text-gray-300">
160:                       <ImageIcon size={40} />
161:                     </div>
162:                   )}
163:                   <div className="absolute top-3 left-3">
164:                     <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-emerald-600 rounded-md border border-emerald-100">
165:                       {item.category}
166:                     </span>
167:                   </div>
168:                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
169:                      <button onClick={() => { setEditingId(item.id || null); setEditForm(item); }} className="p-2 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform"><Edit2 size={18}/></button>
170:                      <button onClick={() => handleDelete(item.id)} className="p-2 bg-white rounded-full text-red-600 hover:scale-110 transition-transform"><Trash2 size={18}/></button>
171:                   </div>
172:                 </div>
173:                 <div className="p-5">
174:                   <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
175:                   <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{item.description}</p>
176:                 </div>
177:               </div>
178:             ))}
179:           </div>
180:         )}
181:       </div>
182:     </div>
183:   );
184: }
````

## File: apps/admin/app/content/testimonials/page.tsx
````typescript
  1: "use client";
  2: 
  3: import { useEffect, useState } from "react";
  4: import {
  5:   createTestimonialAction,
  6:   updateTestimonialAction,
  7:   deleteTestimonialAction
  8: } from "@/app/_lib/actions";
  9: import { getTestimonials } from "@malalang/shared/services/content";
 10: import type { Testimonial } from "@malalang/shared/types";
 11: import { Plus, Trash2, Edit2, Save, X, Quote } from "lucide-react";
 12: 
 13: export default function TestimonialsPage() {
 14:   const [items, setItems] = useState<Testimonial[]>([]);
 15:   const [loading, setLoading] = useState(true);
 16:   const [editingId, setEditingId] = useState<string | null>(null);
 17:   const [editForm, setEditForm] = useState({ quote: "", author: "", company: "" });
 18:   const [isAdding, setIsAdding] = useState(false);
 19: 
 20:   const fetchItems = async () => {
 21:     setLoading(true);
 22:     try {
 23:       const data = await getTestimonials();
 24:       setItems(data);
 25:     } catch (e) {
 26:       console.error(e);
 27:     } finally {
 28:       setLoading(false);
 29:     }
 30:   };
 31: 
 32:   useEffect(() => {
 33:     fetchItems();
 34:   }, []);
 35: 
 36:   const handleSave = async (id?: string) => {
 37:     try {
 38:       let res;
 39:       if (id) {
 40:         res = await updateTestimonialAction(id, editForm);
 41:       } else {
 42:         res = await createTestimonialAction({ ...editForm, display_order: items.length + 1 });
 43:       }
 44: 
 45:       if (res.success) {
 46:         setEditingId(null);
 47:         setIsAdding(false);
 48:         setEditForm({ quote: "", author: "", company: "" });
 49:         fetchItems();
 50:       } else {
 51:         alert("Failed to save: " + res.error);
 52:       }
 53:     } catch (e) {
 54:       console.error(e);
 55:     }
 56:   };
 57: 
 58:   const handleDelete = async (id?: string) => {
 59:     if (!id || !confirm("Delete this testimonial?")) return;
 60:     try {
 61:       const res = await deleteTestimonialAction(id);
 62:       if (res.success) {
 63:         fetchItems();
 64:       } else {
 65:         alert("Failed to delete: " + res.error);
 66:       }
 67:     } catch (e) {
 68:       console.error(e);
 69:     }
 70:   };
 71: 
 72:   return (
 73:     <div className="max-w-5xl">
 74:       <div className="flex items-center justify-between mb-8">
 75:         <div>
 76:           <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
 77:           <p className="text-gray-500 text-sm mt-1">Manage what clients are saying about Malalang.</p>
 78:         </div>
 79:         <button
 80:           onClick={() => setIsAdding(true)}
 81:           className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
 82:         >
 83:           <Plus size={16} />
 84:           Add Testimonial
 85:         </button>
 86:       </div>
 87: 
 88:       <div className="grid gap-6">
 89:         {isAdding && (
 90:           <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm">
 91:             <h3 className="font-bold text-emerald-900 mb-4">New Testimonial</h3>
 92:             <div className="space-y-4">
 93:               <textarea
 94:                 placeholder="Quote"
 95:                 rows={3}
 96:                 className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
 97:                 value={editForm.quote}
 98:                 onChange={(e) => setEditForm({ ...editForm, quote: e.target.value })}
 99:               />
100:               <div className="grid md:grid-cols-2 gap-4">
101:                 <input
102:                   type="text"
103:                   placeholder="Author Name"
104:                   className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
105:                   value={editForm.author}
106:                   onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
107:                 />
108:                 <input
109:                   type="text"
110:                   placeholder="Company/Title"
111:                   className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
112:                   value={editForm.company}
113:                   onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
114:                 />
115:               </div>
116:               <div className="flex justify-end gap-3">
117:                 <button onClick={() => setIsAdding(false)} className="px-4 py-2 text-sm text-gray-600">Cancel</button>
118:                 <button onClick={() => handleSave()} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Save</button>
119:               </div>
120:             </div>
121:           </div>
122:         )}
123: 
124:         {loading ? (
125:           <p className="text-center py-12 text-gray-400">Loading testimonials...</p>
126:         ) : items.length === 0 ? (
127:           <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
128:             <p className="text-gray-500">No testimonials yet.</p>
129:           </div>
130:         ) : (
131:           <div className="grid md:grid-cols-2 gap-6">
132:             {items.map((t) => (
133:               <div key={t.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm relative group">
134:                 {editingId === t.id ? (
135:                   <div className="space-y-4">
136:                     <textarea
137:                       rows={3}
138:                       className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-emerald-500"
139:                       value={editForm.quote}
140:                       onChange={(e) => setEditForm({ ...editForm, quote: e.target.value })}
141:                     />
142:                     <input
143:                       type="text"
144:                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
145:                       value={editForm.author}
146:                       onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
147:                     />
148:                     <input
149:                       type="text"
150:                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
151:                       value={editForm.company}
152:                       onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
153:                     />
154:                     <div className="flex justify-end gap-2">
155:                       <button onClick={() => setEditingId(null)} className="p-1"><X size={18}/></button>
156:                       <button onClick={() => handleSave(t.id)} className="p-1 text-emerald-600"><Save size={18}/></button>
157:                     </div>
158:                   </div>
159:                 ) : (
160:                   <>
161:                     <Quote className="text-emerald-100 absolute top-4 right-6" size={40} />
162:                     <p className="text-gray-600 italic mb-6 text-sm leading-relaxed relative z-10">"{t.quote}"</p>
163:                     <div className="border-t border-gray-50 pt-4">
164:                       <p className="font-bold text-gray-900">{t.author}</p>
165:                       <p className="text-xs text-emerald-600 font-medium uppercase tracking-wider">{t.company}</p>
166:                     </div>
167:                     <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
168:                        <button onClick={() => { setEditingId(t.id || null); setEditForm({ quote: t.quote, author: t.author, company: t.company }); }} className="p-2 bg-white shadow-sm border border-gray-100 rounded-lg text-blue-600"><Edit2 size={14}/></button>
169:                        <button onClick={() => handleDelete(t.id)} className="p-2 bg-white shadow-sm border border-gray-100 rounded-lg text-red-600"><Trash2 size={14}/></button>
170:                     </div>
171:                   </>
172:                 )}
173:               </div>
174:             ))}
175:           </div>
176:         )}
177:       </div>
178:     </div>
179:   );
180: }
````

## File: apps/admin/app/services/[id]/page.tsx
````typescript
  1: "use client";
  2: 
  3: import { useEffect, useState, use } from "react";
  4: import { useRouter } from "next/navigation";
  5: import { getServiceById } from "@malalang/shared/services/services";
  6: import { updateServiceAction } from "@/app/_lib/actions";
  7: import type { ServicePackage } from "@malalang/shared/types";
  8: import FormInput from "@/app/_components/FormInput";
  9: import FormTextarea from "@/app/_components/FormTextarea";
 10: import FormSelect from "@/app/_components/FormSelect";
 11: import Link from "next/link";
 12: import { ArrowLeft, Plus, X, Save } from "lucide-react";
 13: 
 14: const CATEGORIES = [
 15:   { label: "Website Design", value: "Website Design" },
 16:   { label: "Domain Registration", value: "Domain Registration" },
 17:   { label: "Email Hosting", value: "Email Hosting" },
 18:   { label: "Graphic Design", value: "Graphic Design" },
 19: ];
 20: 
 21: export default function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
 22:   const { id } = use(params);
 23:   const router = useRouter();
 24:   const [loading, setLoading] = useState(true);
 25:   const [saving, setSaving] = useState(false);
 26:   const [error, setError] = useState<string | null>(null);
 27: 
 28:   const [formData, setFormData] = useState({
 29:     title: "",
 30:     price: "",
 31:     category: "",
 32:     description: "",
 33:     serviceUrl: "",
 34:     longDescription: "",
 35:     idealFor: "",
 36:     bestFor: "",
 37:     savingsNote: "",
 38:     isFeatured: false,
 39:     isCombo: false,
 40:     type: "static" as "static" | "dynamic",
 41:     active: true,
 42:   });
 43: 
 44:   const [features, setFeatures] = useState<string[]>([]);
 45:   const [newFeature, setNewFeature] = useState("");
 46: 
 47:   useEffect(() => {
 48:     async function fetchService() {
 49:       try {
 50:         const data = await getServiceById(id);
 51:         if (data) {
 52:           setFormData({
 53:             title: data.title || "",
 54:             price: data.price || "",
 55:             category: data.category || "",
 56:             description: data.description || "",
 57:             serviceUrl: data.serviceUrl || "",
 58:             longDescription: data.longDescription || "",
 59:             idealFor: data.idealFor || "",
 60:             bestFor: data.bestFor || "",
 61:             savingsNote: data.savingsNote || "",
 62:             isFeatured: data.isFeatured || false,
 63:             isCombo: data.isCombo || false,
 64:             type: (data.type as any) || "static",
 65:             active: data.active ?? true,
 66:           });
 67:           setFeatures(data.features || []);
 68:         }
 69:       } catch (e: any) {
 70:         setError(e.message);
 71:       } finally {
 72:         setLoading(false);
 73:       }
 74:     }
 75:     fetchService();
 76:   }, [id]);
 77: 
 78:   const handleChange = (
 79:     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
 80:   ) => {
 81:     const { name, value, type } = e.target;
 82:     if (type === "checkbox") {
 83:       const checked = (e.target as HTMLInputElement).checked;
 84:       setFormData((prev) => ({ ...prev, [name]: checked }));
 85:     } else {
 86:       setFormData((prev) => ({ ...prev, [name]: value }));
 87:     }
 88:   };
 89: 
 90:   const addFeature = () => {
 91:     if (newFeature.trim()) {
 92:       setFeatures([...features, newFeature.trim()]);
 93:       setNewFeature("");
 94:     }
 95:   };
 96: 
 97:   const removeFeature = (index: number) => {
 98:     setFeatures(features.filter((_, i) => i !== index));
 99:   };
100: 
101:   const handleSubmit = async (e: React.FormEvent) => {
102:     e.preventDefault();
103:     setError(null);
104:     setSaving(true);
105: 
106:     try {
107:       const res = await updateServiceAction(id, {
108:         ...formData,
109:         features,
110:       });
111: 
112:       if (res.success) {
113:         router.push("/services");
114:       } else {
115:         setError(res.error);
116:       }
117:     } catch (err: any) {
118:       setError(err.message || "Failed to update service");
119:     } finally {
120:       setSaving(false);
121:     }
122:   };
123: 
124:   if (loading) return <div className="text-center py-20 text-gray-400">Loading service details...</div>;
125: 
126:   return (
127:     <div className="max-w-4xl pb-20">
128:       <div className="flex items-center gap-2 mb-6">
129:         <Link href="/services" className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700">
130:           <ArrowLeft size={18} />
131:           Back to Services
132:         </Link>
133:       </div>
134: 
135:       <form onSubmit={handleSubmit} className="space-y-8">
136:         <div className="flex items-center justify-between">
137:             <h1 className="text-2xl font-bold text-gray-900">Edit Service Package</h1>
138:             <div className="flex gap-3">
139:                 <Link href="/services" className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</Link>
140:                 <button type="submit" disabled={saving} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold disabled:opacity-50">
141:                     <Save size={18} />
142:                     {saving ? "Saving..." : "Save Changes"}
143:                 </button>
144:             </div>
145:         </div>
146: 
147:         {error && (
148:           <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
149:             {error}
150:           </div>
151:         )}
152: 
153:         {}
154:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
155:           <div className="px-8 py-5 border-b border-gray-100 bg-gray-50/50">
156:             <h2 className="text-lg font-bold text-gray-900">Basic Information</h2>
157:           </div>
158:           <div className="p-8 grid md:grid-cols-2 gap-6">
159:             <FormInput label="Service Title" name="title" value={formData.title} onChange={handleChange} required />
160:             <FormSelect label="Category" name="category" value={formData.category} onChange={handleChange} options={CATEGORIES} required />
161:             <FormInput label="Price Display" name="price" value={formData.price} onChange={handleChange} required />
162:             <FormInput label="Service URL / Slug" name="serviceUrl" value={formData.serviceUrl} onChange={handleChange} required />
163:             <div className="md:col-span-2">
164:               <FormTextarea label="Short Description" name="description" value={formData.description} onChange={handleChange} rows={2} />
165:             </div>
166:           </div>
167:         </div>
168: 
169:         {}
170:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
171:           <div className="px-8 py-5 border-b border-gray-100 bg-gray-50/50">
172:             <h2 className="text-lg font-bold text-gray-900">Marketing & Details</h2>
173:           </div>
174:           <div className="p-8 space-y-6">
175:             <FormTextarea label="Long Description" name="longDescription" value={formData.longDescription} onChange={handleChange} rows={4} />
176:             <div className="grid md:grid-cols-2 gap-6">
177:               <FormInput label="Ideal For" name="idealFor" value={formData.idealFor} onChange={handleChange} />
178:               <FormInput label="Best For" name="bestFor" value={formData.bestFor} onChange={handleChange} />
179:             </div>
180: 
181:             <div className="flex gap-8 py-4 px-4 bg-gray-50 rounded-lg">
182:               <label className="flex items-center gap-2 cursor-pointer">
183:                 <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="w-4 h-4 text-emerald-600 rounded" />
184:                 <span className="text-sm font-medium text-gray-700">Featured Package</span>
185:               </label>
186:               <label className="flex items-center gap-2 cursor-pointer">
187:                 <input type="checkbox" name="isCombo" checked={formData.isCombo} onChange={handleChange} className="w-4 h-4 text-emerald-600 rounded" />
188:                 <span className="text-sm font-medium text-gray-700">Special Combo</span>
189:               </label>
190:               <label className="flex items-center gap-2 cursor-pointer ml-auto">
191:                 <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} className="w-4 h-4 text-emerald-600 rounded" />
192:                 <span className="text-sm font-medium text-gray-700">Active / Visible</span>
193:               </label>
194:             </div>
195: 
196:             {formData.isCombo && (
197:               <FormInput label="Savings Note" name="savingsNote" value={formData.savingsNote} onChange={handleChange} />
198:             )}
199:           </div>
200:         </div>
201: 
202:         {}
203:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
204:           <div className="px-8 py-5 border-b border-gray-100 bg-gray-50/50">
205:             <h2 className="text-lg font-bold text-gray-900">Features List</h2>
206:           </div>
207:           <div className="p-8 space-y-4">
208:             <div className="flex gap-2">
209:               <input
210:                 type="text"
211:                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-emerald-500"
212:                 placeholder="Add a feature..."
213:                 value={newFeature}
214:                 onChange={(e) => setNewFeature(e.target.value)}
215:                 onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
216:               />
217:               <button type="button" onClick={addFeature} className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700">
218:                 <Plus size={24} />
219:               </button>
220:             </div>
221:             <ul className="space-y-2">
222:               {features.map((f, i) => (
223:                 <li key={i} className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
224:                   <span className="text-sm text-gray-700">{f}</span>
225:                   <button type="button" onClick={() => removeFeature(i)} className="text-gray-400 hover:text-red-500">
226:                     <X size={18} />
227:                   </button>
228:                 </li>
229:               ))}
230:             </ul>
231:           </div>
232:         </div>
233:       </form>
234:     </div>
235:   );
236: }
````

## File: apps/client/app/_lib/constants/services.tsx
````typescript
  1: import React from 'react';
  2: import type { ServicePackage, AddonService, AddonCategory, RecurringService, ServiceCategory } from "@malalang/shared/types";
  3: 
  4: 
  5: 
  6: export const SERVICE_PACKAGES: ServicePackage[] = [
  7:   {
  8:     title: 'Landing Page',
  9:     serviceUrl: 'landing-page',
 10:     price: 'R1,000',
 11:     description: 'A focused single-page website to convert visitors for a specific campaign or goal.',
 12:     longDescription: "Perfect for marketing campaigns, product launches, or events, a landing page is a highly focused, single-page website designed for one purpose: to convert visitors into leads or customers. We craft a compelling narrative with a clear call-to-action to maximise your campaign's effectiveness.",
 13:     idealFor: "Marketing campaigns, event promotion, new product launches, or any business needing a focused, high-conversion web page without the complexity of a full multi-page site.",
 14:     bestFor: "Marketing campaigns and product launches.",
 15:     features: [
 16:       "Single-Page Focused Design (up to 5 sections)",
 17:       "Clear Call-to-Action",
 18:       "Mobile Responsive",
 19:       "Contact/Lead Form Integration",
 20:       "Basic Security Setup (SSL/HTTPS)",
 21:       "Database Integration (Supabase only)",
 22:       "Hosting Configuration (Vercel, Supabase, or your own choice)",
 23:     ],
 24:   },
 25:   {
 26:     title: 'Base Package',
 27:     serviceUrl: 'economic-package',
 28:     price: 'R1,500',
 29:     description: 'A professional 5-page website, perfect for building a strong and comprehensive online presence.',
 30:     longDescription: "Our Base Package is the perfect choice for businesses needing a complete and professional online footprint. With up to 5 pages, you have the space to detail your services, introduce your team, and provide essential information to your customers. This package focuses on creating a clean, functional, and mobile-friendly website that establishes your credibility and serves as a digital hub for your business.",
 31:     idealFor: "Small businesses, service providers, and startups who need more than a basic brochure site and want to present a comprehensive view of their offerings.",
 32:     bestFor: "Small businesses needing a comprehensive site.",
 33:     features: [
 34:       "Up to 5 Pages",
 35:       "Professionally Styled Design",
 36:       "Clear Call-to-Action",
 37:       "Mobile Responsive",
 38:       "Basic Security Setup (SSL/HTTPS)",
 39:       "Forms Integration (up to 5 forms)",
 40:       "Database Integration (Supabase only)",
 41:       "Hosting Configuration (Vercel or Supabase)",
 42:       "Basic Search Engine Setup (SEO) On-page",
 43:       "Simple Admin Panel (View and Sort Form Submissions)",
 44:     ],
 45:     isFeatured: true,
 46:   },
 47:   {
 48:     title: 'Standard Package',
 49:     serviceUrl: 'standard-package',
 50:     price: 'R2,500',
 51:     description: 'Our most popular option for a complete, custom-designed online presence with advanced features.',
 52:     longDescription: "This is our flagship offering and the ideal choice for most small to medium-sized businesses looking to make a serious impact. The Standard Package moves beyond templates to provide a fully custom-designed website that reflects your unique brand identity and business goals. With up to 8 pages, we can build a comprehensive site that details your services, showcases your work, and is optimised from the ground up to attract and convert visitors.",
 53:     idealFor: "Established businesses, service providers, and companies looking for a unique digital storefront that sets them apart from the competition and provides a solid foundation for future growth.",
 54:     bestFor: "Established businesses wanting a custom brand presence.",
 55:     features: [
 56:       "Up to 8 Main Pages plus 10 Extra Pages (for services or blog posts)",
 57:       "Unique Design Tailored to Your Brand",
 58:       "Clear Call-to-Action",
 59:       "Mobile Responsive",
 60:       "Basic Security Setup (SSL/HTTPS)",
 61:       "Advanced Forms (unlimited forms)",
 62:       "Database Integration (Supabase)",
 63:       "Optimised Hosting Configuration (Vercel only)",
 64:       "Basic Site Performance Optimisation",
 65:       "Advanced On-Page Search Engine Setup (SEO)",
 66:       "Advanced Admin Panel (Separate website to manage content and forms)",
 67:       "1 Hour of Content Upload Training",
 68:       "Google Analytics & Search Console Integration",
 69:     ],
 70:   },
 71:   {
 72:     title: 'E-commerce Package',
 73:     serviceUrl: 'e-commerce-package',
 74:     price: 'From R5,000',
 75:     description: 'A fully functional online store to sell your products. Price scales with complexity.',
 76:     longDescription: "Ready to sell your products online? The E-commerce Package is your all-in-one solution for launching a powerful and secure online store. We handle everything from the initial setup and design to product management systems and secure payment gateway integration (like Paystack or Yoco). The design is fully customised to create an enjoyable shopping experience for your customers, encouraging sales and repeat business.",
 77:     idealFor: "Retail businesses, artisans, and anyone wanting to sell physical or digital products directly to customers online. The platform is scalable to grow with your product line and sales volume.",
 78:     bestFor: "Businesses ready to sell products online.",
 79:     features: [
 80:       'Full Online Store Setup',
 81:       'Product Management System',
 82:       'Full Order & Inventory Management System',
 83:       'Secure Payment Gateway Integration',
 84:       'Custom Design Tailored for Sales',
 85:       'Mobile-Optimised Checkout',
 86:       'Basic Security Setup (SSL/HTTPS)',
 87:       'Database Integration (Supabase or custom)',
 88:       'Hosting Configuration (hosting provider of your choice)',
 89:       'Advanced On-Page Search Engine Setup (SEO)',
 90:       'Technical SEO for Products (Schema Markup)',
 91:       'Advanced Admin Panel (Manage products, orders, and content)',
 92:       '1 Hour of Content Upload Training',
 93:       'Google Analytics & Search Console Integration',
 94:       'Customer Accounts Setup',
 95:     ],
 96:   },
 97:   {
 98:     title: 'Local Visibility Starter',
 99:     serviceUrl: 'local-startup',
100:     price: 'R2,000',
101:     description: 'The Base Package plus all the tools needed to rank locally and track performance.',
102:     longDescription: "This special package combines the full features of our Base Package with the top add-ons needed to get your business found on Google Maps and track customer behaviour. It's the most cost-effective way to get a comprehensive site that is ready to attract local customers.",
103:     idealFor: "Restaurants, service providers, or any local business that needs a comprehensive site plus a clear path to ranking on Google Maps and local search results.",
104:     bestFor: "Local service businesses and physical stores.",
105:     features: [
106:       "All Base Package Features Included",
107:       "Basic Security Setup (SSL/HTTPS)",
108:       "Google Business Profile Setup",
109:       "Google Analytics & Search Console Setup",
110:       "Enhanced Basic On-Page SEO",
111:     ],
112:     isCombo: true,
113:     savingsNote: 'Saves R750 compared to buying the Base Package and add-ons separately!',
114:   },
115: ];
116: 
117: 
118: 
119: export const DOMAIN_PACKAGES: ServicePackage[] = [
120:   {
121:     title: '.co.za Domain',
122:     serviceUrl: 'coza-domain',
123:     price: 'R200/year',
124:     description: 'A trusted South African domain name — the best choice for local credibility.',
125:     longDescription: "A .co.za domain signals to customers and search engines that you're a legitimate South African business. We handle the full registration process, point it to your hosting, and ensure you have full ownership of your domain.",
126:     idealFor: "Any South African business wanting a professional, locally recognised web address.",
127:     bestFor: "Local businesses and service providers.",
128:     features: [
129:       "1-Year .co.za Registration",
130:       "Full Domain Ownership (transferred to you)",
131:       "DNS Configuration & Pointing",
132:       "WHOIS Privacy Protection",
133:       "Renewal Reminder Notifications",
134:     ],
135:     isFeatured: true,
136:   },
137:   {
138:     title: '.com Domain',
139:     serviceUrl: 'com-domain',
140:     price: 'R250/year',
141:     description: 'The globally recognised domain extension — ideal for businesses with an international reach.',
142:     longDescription: "The .com extension is the most recognised domain suffix in the world. It works for any business and carries instant credibility with customers anywhere. We handle registration, DNS setup, and ensure you retain full ownership.",
143:     idealFor: "Businesses targeting an international audience or wanting the globally trusted .com extension.",
144:     bestFor: "Businesses with international or online reach.",
145:     features: [
146:       "1-Year .com Registration",
147:       "Full Domain Ownership (transferred to you)",
148:       "DNS Configuration & Pointing",
149:       "WHOIS Privacy Protection",
150:       "Renewal Reminder Notifications",
151:     ],
152:   },
153:   {
154:     title: 'Domain + Full Setup',
155:     serviceUrl: 'domain-full-setup',
156:     price: 'R500 once-off',
157:     description: 'Domain registration plus complete DNS configuration, email forwarding, and handover.',
158:     longDescription: "Get your domain working end-to-end from day one. We register your chosen domain, configure all DNS records, set up email forwarding (so info@yourdomain.co.za goes to your inbox), and hand over full credentials with a full walkthrough.",
159:     idealFor: "Business owners who want everything done correctly from the start — no technical headaches.",
160:     bestFor: "First-time domain owners who want a hassle-free setup.",
161:     features: [
162:       "Domain Registration (.co.za or .com)",
163:       "Full DNS Configuration",
164:       "Email Forwarding Setup (e.g., info@yourdomain.co.za)",
165:       "Full Credential Handover",
166:       "Setup Walkthrough Call",
167:       "WHOIS Privacy Protection",
168:     ],
169:   },
170: ];
171: 
172: 
173: 
174: export const EMAIL_PACKAGES: ServicePackage[] = [
175:   {
176:     title: 'Starter Email',
177:     serviceUrl: 'starter-email',
178:     price: 'R99/month',
179:     description: 'One professional business email address — perfect for a sole trader or small business.',
180:     longDescription: "Stop using Gmail or Hotmail for business. A professional email like info@yourbusiness.co.za builds instant credibility with clients. Our Starter plan gives you 1 fully hosted mailbox with 5 GB of storage, accessible on any device.",
181:     idealFor: "Sole traders, freelancers, or very small businesses that need one professional email address.",
182:     bestFor: "Solo business owners wanting a professional email.",
183:     features: [
184:       "1 Business Mailbox (e.g., info@yourdomain.co.za)",
185:       "5 GB Mailbox Storage",
186:       "Works on Any Device (phone, tablet, desktop)",
187:       "Spam & Virus Filtering",
188:       "Webmail Access",
189:       "Setup & Migration Assistance",
190:     ],
191:   },
192:   {
193:     title: 'Business Email',
194:     serviceUrl: 'business-email',
195:     price: 'R199/month',
196:     description: 'Up to 5 professional mailboxes for your growing team — includes shared calendar.',
197:     longDescription: "Give every member of your team a professional email address under your business domain. Up to 5 mailboxes with 10 GB each, shared calendar, and contact syncing — everything a small team needs to communicate professionally.",
198:     idealFor: "Small businesses with a team of up to 5 people who all need branded email addresses.",
199:     bestFor: "Small teams needing multiple business email accounts.",
200:     features: [
201:       "Up to 5 Business Mailboxes",
202:       "10 GB Storage per Mailbox",
203:       "Shared Team Calendar",
204:       "Contact Syncing",
205:       "Works on Any Device",
206:       "Spam & Virus Filtering",
207:       "Webmail Access",
208:       "Setup & Migration Assistance",
209:     ],
210:     isFeatured: true,
211:   },
212:   {
213:     title: 'Enterprise Email',
214:     serviceUrl: 'enterprise-email',
215:     price: 'R399/month',
216:     description: 'Unlimited mailboxes, 25 GB per box, archiving, and priority support for larger organisations.',
217:     longDescription: "Scale your email infrastructure without limits. The Enterprise plan gives your entire organisation professional email with up to 20 mailboxes, 25 GB of storage each, email archiving for compliance, and priority support from our team.",
218:     idealFor: "Medium-sized businesses or organisations with large teams that require professional email at scale, including archiving for compliance.",
219:     bestFor: "Larger organisations with many staff members.",
220:     features: [
221:       "Up to 20 Business Mailboxes",
222:       "25 GB Storage per Mailbox",
223:       "Email Archiving (POPIA/compliance)",
224:       "Shared Calendar & Contacts",
225:       "Works on Any Device",
226:       "Advanced Spam & Threat Filtering",
227:       "Webmail Access",
228:       "Priority Setup & Support",
229:       "Monthly Usage Report",
230:     ],
231:   },
232: ];
233: 
234: 
235: 
236: export const GRAPHIC_DESIGN_PACKAGES: ServicePackage[] = [
237:   {
238:     title: 'Flyer / Poster',
239:     serviceUrl: 'flyer-design',
240:     price: 'R300',
241:     description: 'A professionally designed A5 or A4 flyer or poster for print or digital sharing.',
242:     longDescription: "A great flyer grabs attention instantly and communicates your message clearly. We design print-ready or digital flyers and posters in your brand colours, ready for WhatsApp, social media, or printing at any local print shop.",
243:     idealFor: "Businesses promoting events, specials, new products, or any campaign that needs a visually striking single-page design.",
244:     bestFor: "Promotions, events, and announcements.",
245:     features: [
246:       "A5 or A4 Format (print or digital)",
247:       "Custom Brand-Matched Design",
248:       "2 Revision Rounds",
249:       "High-Resolution Print-Ready File (PDF/PNG)",
250:       "Digital Version for Social Media & WhatsApp",
251:       "Source File on Request",
252:     ],
253:   },
254:   {
255:     title: 'Business Card Set',
256:     serviceUrl: 'business-card-design',
257:     price: 'R500',
258:     description: 'A professional double-sided business card design — print-ready and in your brand.',
259:     longDescription: "First impressions count. A well-designed business card tells clients you're serious before you say a word. We design a double-sided card in your brand colours and fonts, delivered as a print-ready file you can take to any printer.",
260:     idealFor: "Business owners, professionals, and freelancers who network and want to leave a memorable, professional impression.",
261:     bestFor: "Professionals and entrepreneurs.",
262:     features: [
263:       "Double-Sided Design (front & back)",
264:       "Custom Brand-Matched Layout",
265:       "Standard Business Card Size (85mm × 55mm)",
266:       "2 Revision Rounds",
267:       "High-Resolution Print-Ready File (PDF)",
268:       "Digital Version (PNG)",
269:     ],
270:   },
271:   {
272:     title: 'Social Media Kit',
273:     serviceUrl: 'social-media-kit',
274:     price: 'R800',
275:     description: 'A complete set of branded social media assets — profile image, cover, and 5 post templates.',
276:     longDescription: "Look consistent and professional across all your social platforms. We create a full branded kit including your profile picture, Facebook/Instagram cover photo, and 5 post templates — all editable so you can update them yourself.",
277:     idealFor: "Businesses that actively use social media and want a consistent, professional look across all their platforms without hiring a full-time designer.",
278:     bestFor: "Businesses active on social media.",
279:     features: [
280:       "Branded Profile Picture (all platforms)",
281:       "Facebook & Instagram Cover Photo",
282:       "5 Branded Post Templates (editable)",
283:       "Consistent Colour & Font Scheme",
284:       "2 Revision Rounds",
285:       "All Files Delivered (PNG + editable source)",
286:     ],
287:     isFeatured: true,
288:   },
289:   {
290:     title: 'Full Brand Identity',
291:     serviceUrl: 'brand-identity',
292:     price: 'R1,500',
293:     description: 'Logo, colour palette, typography, and stationery — everything you need to launch a brand.',
294:     longDescription: "Build a brand that customers recognise and trust. We design a complete identity from scratch: primary logo, alternate logo versions, colour palette, typography selection, and a basic stationery set (business card + letterhead). Delivered as a Brand Guide document so anyone can apply your identity consistently.",
295:     idealFor: "New businesses or existing businesses that have outgrown their original look and need a cohesive, professional brand identity to carry them forward.",
296:     bestFor: "New or rebranding businesses.",
297:     features: [
298:       "Primary Logo Design (3 concepts)",
299:       "Alternate Logo Versions (horizontal, stacked, icon)",
300:       "Colour Palette (primary, secondary, neutral)",
301:       "Typography Selection & Usage Guide",
302:       "Business Card Design (print-ready)",
303:       "Letterhead Template",
304:       "3 Revision Rounds",
305:       "Brand Style Guide (PDF)",
306:       "All Source Files Delivered",
307:     ],
308:   },
309: ];
310: 
311: 
312: 
313: export const SERVICE_CATEGORIES: ServiceCategory[] = [
314:   {
315:     slug: 'website-design',
316:     name: 'Website Design',
317:     tagline: 'Your business online — built to convert.',
318:     description: 'From a simple landing page to a full e-commerce store. We build fast, mobile-friendly websites tailored to Phalaborwa businesses.',
319:     packageCount: SERVICE_PACKAGES.length,
320:     priceFrom: 'R1,000',
321:     imageUrl: ""
322:   },
323:   {
324:     slug: 'domain-registration',
325:     name: 'Domain Registration',
326:     tagline: 'Own your name on the internet.',
327:     description: 'Affordable .co.za and .com domains with full ownership transfer, DNS setup, and email forwarding configuration.',
328:     packageCount: DOMAIN_PACKAGES.length,
329:     priceFrom: 'R200/year',
330:     imageUrl: ""
331:   },
332:   {
333:     slug: 'email-hosting',
334:     name: 'Email Hosting',
335:     tagline: 'Look professional with every email you send.',
336:     description: 'Business email accounts like info@yourcompany.co.za — hosted, secured, and accessible on any device.',
337:     imageUrl: "",
338:     packageCount: EMAIL_PACKAGES.length,
339:     priceFrom: 'R99/month',
340:   },
341:   {
342:     slug: 'graphic-design',
343:     name: 'Graphic Design',
344:     tagline: 'Stand out with visuals that mean business.',
345:     description: 'Flyers, business cards, social media kits, and full brand identities designed to elevate your business presence.',
346:     imageUrl: "",
347:     packageCount: GRAPHIC_DESIGN_PACKAGES.length,
348:     priceFrom: 'R300',
349:   },
350: ];
351: 
352: 
353: 
354: export const ADDON_CATEGORIES: AddonCategory[] = [
355:   {
356:     name: 'Content & Presentation',
357:     addons: [
358:       { title: 'Additional Page', price: 'R250/page' },
359:       { title: 'Photo Gallery / Portfolio', price: 'R200' },
360:       { title: 'Charts, Graphs, and Advanced Visuals', price: 'R150' },
361:       { title: 'Social Media Feed Integration', price: 'R150' },
362:       { title: 'Embedded Maps', price: 'R50' },
363:       { title: 'Professional Content Creation (Per Page)', price: 'From R500' },
364:       { title: 'Design Revision Round (Extra)', price: 'R300/round' },
365:     ],
366:   },
367:   {
368:     name: 'User & Business Interaction',
369:     addons: [
370:       { title: 'Advanced Forms (Multi-step, Quizzes)', price: 'R250' },
371:       { title: 'Newsletter Signup & Integration', price: 'R200' },
372:       { title: 'Live Chat Integration', price: 'R250' },
373:       { title: 'Customer Login Area/Basic Portal', price: 'From R1,000' },
374:       { title: 'Booking / Appointment System Setup', price: 'R500' },
375:     ],
376:   },
377:   {
378:     name: 'E-commerce & Data',
379:     addons: [
380:       { title: 'E-commerce / Online Store', price: 'See Package' },
381:       { title: 'Initial Product Data Import (Up to 20 Items)', price: 'R500' },
382:       { title: 'Additional Payment Gateway Setup', price: 'R300' },
383:       { title: 'Shipping & Tax Configuration', price: 'R300' },
384:     ],
385:   },
386:   {
387:     name: 'SEO & Performance',
388:     addons: [
389:       { title: 'Technical SEO Audit & Setup', price: 'R750' },
390:       { title: 'Schema Markup Implementation', price: 'R250/page' },
391:       { title: 'Website Speed Optimisation', price: 'R350' },
392:     ],
393:   },
394:   {
395:     name: 'Security & Maintenance',
396:     addons: [
397:       { title: 'Automated Daily Backup Setup', price: 'R350' },
398:       { title: 'Advanced WAF/DDoS Protection Setup', price: 'R400' },
399:       { title: 'Cookie Consent Banner (POPIA/GDPR Compliant)', price: 'R200' },
400:       { title: 'Privacy Policy / T&C Template Setup', price: 'R100' },
401:     ],
402:   },
403:   {
404:     name: 'Training & Support',
405:     addons: [
406:       { title: 'Additional Content Training', price: 'R200/hour' },
407:     ],
408:   },
409: ];
410: 
411: export const LAUNCH_PACK_SERVICES: AddonService[] = [
412:   { title: 'Google Business Profile Setup', price: 'R300' },
413:   { title: 'Google Analytics & Search Console Setup', price: 'R300' },
414:   { title: 'Basic On-Page SEO', price: 'R500' },
415: ];
416: 
417: export const RECURRING_SERVICE: RecurringService = {
418:   title: 'Web Care Plan',
419:   price: 'R199/month',
420:   description: 'Monthly maintenance including core software updates, security checks, off-site backup storage, and up to 15 minutes of minor content/text edits.',
421: };
````

## File: apps/client/app/about/page.tsx
````typescript
 1: import React from 'react';
 2: import Link from 'next/link';
 3: import { Metadata } from 'next';
 4: import { OG_IMAGE_DEFAULT, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 5: import AboutHero from './components/AboutHero';
 6: import OurStory from './components/OurStory';
 7: import OurMission from './components/OurMission';
 8: import { getCachedServiceCategories } from '@/app/_lib/data';
 9: import ServiceCategory from '@/app/_components/ServiceCategory';
10: 
11: import OurProcess from './components/OurProcess';
12: import OurGuarantee from './components/OurGuarantee';
13: import TheMalalangDifference from './components/TheMalalangDifference';
14: import OurTeam from './components/OurTeam';
15: import FeaturedProjects from './components/FeaturedProjects';
16: import OurCoreValues from './components/OurCoreValues';
17: import { WHATSAPP_LINK } from '@/app/_lib/constants/site';
18: 
19: export const metadata: Metadata = {
20:   title: 'About Malalang - Our Story, Mission, and Team',
21:   description: 'Learn about Malalang Pty Ltd, a Phalaborwa-based web design studio. Discover our unique trust-first approach, our mission to empower local businesses, and meet the team dedicated to your success.',
22:   keywords: 'about us, web design studio, Phalaborwa, web design team',
23:   alternates: {
24:     canonical: `${SITE_URL}/about`,
25:   },
26:   robots: {
27:     index: true,
28:     follow: true,
29:   },
30:   openGraph: {
31:     title: 'About Malalang - Web Design Studio in Phalaborwa',
32:     description: 'Discover Malalang\'s story, mission, and the passionate team behind your web design success. Building trust-first relationships with local businesses.',
33:     url: `${SITE_URL}/about`,
34:     type: 'website',
35:     images: [
36:       {
37:         url: OG_IMAGE_DEFAULT,
38:         width: 1200,
39:         height: 630,
40:         alt: 'About Malalang - Web Design Studio',
41:       },
42:     ],
43:   },
44:   twitter: {
45:     card: 'summary_large_image',
46:     title: 'About Malalang - Web Design Studio',
47:     description: 'Learn about our story, mission, and the team behind Malalang.',
48:     images: [OG_IMAGE_DEFAULT],
49:     creator: TWITTER_CREATOR,
50:   },
51: };
52: 
53: const AboutPage: React.FC = () => {
54:   return (
55:     <main>
56:       <AboutHero />
57:       <OurStory />
58:       <OurMission />
59:       <ServiceCategory />
60:       <OurProcess />
61:       <OurGuarantee />
62:       <TheMalalangDifference />
63:       <OurTeam />
64:       <FeaturedProjects />
65:       <OurCoreValues />
66:       <section className="py-20 bg-slate-900">
67:         <div className="container mx-auto px-6 text-center">
68:             <p className="text-lg text-slate-300 mb-4">Ready to start your project?</p>
69:             <a
70:               href={WHATSAPP_LINK}
71:               target="_blank"
72:               rel="noopener noreferrer"
73:               className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300"
74:             >
75:               Get a Free Consultation
76:             </a>
77:             <p className="mt-4">
78:               <Link href="/pricing" className="text-brand-primary hover:underline">
79:                 Or view our detailed pricing page &rarr;
80:               </Link>
81:             </p>
82:         </div>
83:       </section>
84:     </main>
85:   );
86: };
87: 
88: export default AboutPage;
````

## File: apps/client/app/blog/[slug]/page.tsx
````typescript
  1: import React from "react";
  2: import Image from "next/image";
  3: import { notFound } from "next/navigation";
  4: import { Metadata, ResolvingMetadata } from "next";
  5: import Link from "next/link";
  6: import { ArrowLeft, User } from "lucide-react";
  7: import { unstable_cache } from "next/cache";
  8: 
  9: 
 10: import CommentsSection from "./components/CommentsSection";
 11: import SocialShareButtons from "./components/SocialShareButtons";
 12: 
 13: import { getCachedBlogBySlug, getCachedBlogs } from "@/app/_lib/data";
 14: import { SITE_URL, TWITTER_CREATOR } from "@/app/_lib/constants/site";
 15: 
 16: 
 17: type Props = {
 18:   params: Promise<{ slug: string | undefined }>;
 19: };
 20: 
 21: 
 22: export const dynamicParams = true;
 23: 
 24: 
 25: 
 26: 
 27: export async function generateStaticParams() {
 28:   const { posts } = await getCachedBlogs();
 29:   return posts.map((post) => ({
 30:     slug: post.slug,
 31:   }));
 32: }
 33: 
 34: 
 35: 
 36: export async function generateMetadata(
 37:   { params }: Props,
 38:   parent: ResolvingMetadata
 39: ): Promise<Metadata> {
 40:   const slug = (await params).slug;
 41:   if (!slug) return {};
 42: 
 43:   const post = await getCachedBlogBySlug(slug);
 44: 
 45:   if (!post) {
 46:     return {
 47:        title: 'This blog was not found',
 48:        description: 'The blog post you are looking for does not exist.',
 49:     };
 50:   }
 51: 
 52:   const title = post.metaTitle || post.title;
 53:   const description = post.metaDescription || post.excerpt;
 54:   const postUrl = `${SITE_URL}/blog/${slug}`;
 55:   const author = post.author?.name || "Malalang Team";
 56: 
 57:   return {
 58:     title: title,
 59:     description: description,
 60:     keywords: `${post.tags?.join(", ") || "web design, digital marketing"}`,
 61:     authors: [{ name: author, url: SITE_URL }],
 62:     alternates: {
 63:       canonical: postUrl,
 64:     },
 65:     robots: {
 66:       index: true,
 67:       follow: true,
 68:     },
 69:     openGraph: {
 70:       title: title,
 71:       description: description,
 72:       url: postUrl,
 73:       type: 'article',
 74:       publishedTime: post.publishedAt,
 75:       authors: [author],
 76:       tags: post.tags || [],
 77:     },
 78:     twitter: {
 79:       card: 'summary_large_image',
 80:       title: title,
 81:       description: description,
 82:       creator: TWITTER_CREATOR,
 83:     },
 84:   };
 85: }
 86: 
 87: 
 88: 
 89: const BlogSubpage: React.FC<Props> = async ({ params }) => {
 90:   const slug = (await params).slug;
 91:   if (!slug) notFound();
 92: 
 93:   const post = await getCachedBlogBySlug(slug);
 94:   if (!post) notFound();
 95: 
 96:   const postDate = new Date(post.publishedAt);
 97:   const displayDate = postDate.toLocaleDateString("en-US", {
 98:     year: "numeric",
 99:     month: "long",
100:     day: "numeric",
101:     timeZone: "UTC",
102:   });
103: 
104:   const postUrl = `${SITE_URL}/blog/${post.slug}`;
105:   const jsonLd = {
106:     '@context': 'https://schema.org',
107:     '@type': 'Article',
108:     mainEntityOfPage: {
109:       '@type': 'WebPage',
110:       '@id': postUrl,
111:     },
112:     headline: post.title,
113:     description: post.metaDescription || post.excerpt,
114:     image: post.imageUrl,
115:     author: {
116:       '@type': 'Person',
117:       name: post.author?.name || "Malalang Team",
118:     },
119:     publisher: {
120:       '@type': 'LocalBusiness',
121:       name: 'Malalang',
122:       logo: {
123:         '@type': 'ImageObject',
124:         url: `${SITE_URL}/logo.png`,
125:       },
126:     },
127:     datePublished: post.publishedAt,
128:     dateModified: post.publishedAt,
129:   };
130: 
131:   return (
132:     <main>
133:       <script
134:         type="application/ld+json"
135:         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
136:       />
137:       <section className="py-20 bg-slate-900">
138:         <div className="container mx-auto px-6">
139:           <div className="max-w-4xl mx-auto">
140:             <Link
141:               href="/blog"
142:               className="flex items-center text-brand-primary hover:text-brand-secondary transition-colors duration-300 mb-8"
143:             >
144:               <ArrowLeft className="w-5 h-5 mr-2" />
145:               Back to All Posts
146:             </Link>
147: 
148:             <header className="mb-10 text-center">
149:               <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
150:                 {post.title}
151:               </h1>
152:               <div className="flex items-center justify-center text-slate-400 text-lg flex-wrap gap-y-2">
153:                 <User className="w-5 h-5 mr-2" />
154:                 <span className="font-semibold text-brand-primary mr-4">
155:                   {post.author?.name || "Malalang Team"}
156:                 </span>
157:                 <span className="hidden sm:inline">&bull;</span>
158:                 <time dateTime={post.publishedAt} className="sm:ml-4 mr-4">
159:                   {displayDate}
160:                 </time>
161:                 <span className="hidden sm:inline">&bull;</span>
162:                 <span className="sm:ml-4 text-emerald-500 font-medium">
163:                   {post.readingTimeMinutes || 5} min read                </span>
164:               </div>
165:             </header>
166: 
167:             <div className="relative w-full h-96 rounded-lg overflow-hidden mb-12 shadow-xl">
168:               <Image
169:                 src={post.imageUrl}
170:                 alt={post.title}
171:                 fill
172:                 sizes="(max-width: 1024px) 100vw, 896px"
173:                 style={{ objectFit: "cover" }}
174:                 priority
175:               />
176:             </div>
177: 
178:             <div className="mt-8 pt-6 w-full max-w-full overflow-hidden">
179:               <article
180:                 className="prose prose-invert max-w-none text-base sm:text-lg text-slate-300
181:                            break-words overflow-wrap-anywhere
182:                            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
183:                            prose-a:text-brand-primary hover:prose-a:text-brand-secondary transition-colors duration-300
184:                            prose-img:rounded-2xl prose-img:shadow-xl
185:                            prose-pre:bg-slate-800/80 prose-pre:border prose-pre:border-slate-700 prose-pre:shadow-lg
186:                            prose-code:text-emerald-400 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
187:                            [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl
188:                            [&>h1]:text-3xl sm:[&>h1]:text-4xl [&>h1]:font-extrabold [&>h1]:mb-6 [&>h1]:mt-10
189:                            [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-8 [&>h2]:border-b [&>h2]:border-slate-800 [&>h2]:pb-2
190:                            [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mb-3 [&>h3]:mt-6
191:                            [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-slate-300
192:                            [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li]:marker:text-emerald-500
193:                            [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6 [&>ol>li]:mb-2 [&>ol>li]:marker:text-emerald-500
194:                            [&>pre]:max-w-full [&>pre]:overflow-x-auto [&>pre]:p-4 sm:[&>pre]:p-6 [&>pre]:rounded-xl [&>pre]:mb-8 [&>pre]:scrollbar-thin [&>pre]:scrollbar-thumb-slate-700 [&>pre]:scrollbar-track-transparent
195:                            [&>pre>code]:block [&>pre>code]:min-w-max [&>pre>code]:text-sm sm:[&>pre>code]:text-base [&>pre>code]:leading-relaxed
196:                            [&>img]:rounded-xl [&>img]:mx-auto [&>img]:my-8 [&>img]:shadow-2xl
197:                            [&>blockquote]:border-l-4 [&>blockquote]:border-emerald-500 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-slate-400 [&>blockquote]:my-8"
198:                 dangerouslySetInnerHTML={{
199:                   __html:
200:                     post.htmlContent ||
201:                     '<p class="text-slate-500 italic">No content to display yet...</p>',
202:                 }}
203:               />
204:             </div>
205: 
206:             <div className="mt-12 pt-8 border-t border-slate-700 flex justify-between items-center">
207:               <SocialShareButtons title={post.title} postUrl={post.slug} />
208:             </div>
209: 
210:             <CommentsSection blogId={post.id} />
211:           </div>
212:         </div>
213:       </section>
214:     </main>
215:   );
216: };
217: 
218: export default BlogSubpage;
````

## File: apps/client/app/blog/components/BlogClient.tsx
````typescript
  1: "use client";
  2: 
  3: import React, { useMemo, useState } from 'react';
  4: import Link from 'next/link';
  5: 
  6: import { BlogPost } from '@malalang/shared/types';
  7: 
  8: 
  9: interface BlogClientProps {
 10:   initialPosts: BlogPost[];
 11: }
 12: 
 13: const BlogClient: React.FC<BlogClientProps> = ({ initialPosts }) => {
 14:   const [searchQuery, setSearchQuery] = useState('');
 15:   const [selectedTag, setSelectedTag] = useState<string | null>(null);
 16:   const [showAllTags, setShowAllTags] = useState(false);
 17:   const [currentPage, setCurrentPage] = useState(1);
 18:   const postsPerPage = 6;
 19: 
 20:   // Extract tags from the passed-down initialPosts
 21:   const allTags = Array.from(new Set(initialPosts.flatMap(post => post.tags || []))).sort();
 22: 
 23:   const filteredPosts = useMemo(() => initialPosts.filter(post => {
 24:     const tagMatch = selectedTag ? post.tags?.includes(selectedTag) : true;
 25: 
 26:     const searchMatch = searchQuery
 27:       ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
 28:       post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
 29:       : true;
 30: 
 31:     return tagMatch && searchMatch;
 32:   }), [initialPosts, selectedTag, searchQuery]);
 33: 
 34:   // Reset to page 1 when filters change
 35:   useMemo(() => {
 36:     setCurrentPage(1);
 37:   }, [searchQuery, selectedTag]);
 38: 
 39:   // Pagination logic
 40:   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
 41:   const paginatedPosts = filteredPosts.slice(
 42:     (currentPage - 1) * postsPerPage,
 43:     currentPage * postsPerPage
 44:   );
 45: 
 46:   const handleTagClick = (tag: string | null) => {
 47:     setSelectedTag(tag);
 48:   };
 49: 
 50:   const handlePageChange = (page: number) => {
 51:     setCurrentPage(page);
 52:     window.scrollTo({ top: 0, behavior: 'smooth' });
 53:   };
 54: 
 55: 
 56:   const visibleTags = allTags.slice(0, 5);
 57:   const hasMoreTags = allTags.length > 5;
 58: 
 59: 
 60:   return (
 61: 
 62: 
 63:     <section className="py-16 bg-background">
 64:       <div className="container mx-auto px-6">
 65: 
 66:         <div className="mb-12 max-w-2xl mx-auto">
 67:           <input
 68:             type="text"
 69:             value={searchQuery}
 70:             onChange={e => setSearchQuery(e.target.value)}
 71:             placeholder="Search articles..."
 72:             className="w-full px-5 py-3 rounded-lg bg-slate-800 text-white border-2 border-slate-700 focus:border-brand-primary focus:ring-0 transition-colors duration-300"
 73:           />
 74:         </div>
 75: 
 76:         <div className="flex flex-wrap justify-center gap-3 mb-12">
 77:           <button
 78:             onClick={() => handleTagClick(null)}
 79:             className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${!selectedTag ? 'bg-brand-primary text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
 80:           >
 81:             All Posts
 82:           </button>
 83: 
 84:           {}
 85:           <div className="flex flex-wrap justify-center gap-3 lg:hidden">
 86:             {visibleTags.map(tag => (
 87:               <button
 88:                 key={tag}
 89:                 onClick={() => handleTagClick(tag)}
 90:                 className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${selectedTag === tag ? 'bg-brand-primary text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
 91:               >
 92:                 {tag}
 93:               </button>
 94:             ))}
 95:             {hasMoreTags && (
 96:               <button
 97:                 onClick={() => setShowAllTags(true)}
 98:                 className="px-4 py-2 text-sm font-semibold rounded-full bg-slate-600 text-slate-200 hover:bg-slate-500 transition-colors duration-300"
 99:               >
100:                 +{allTags.length - 5} More
101:               </button>
102:             )}
103:           </div>
104: 
105:           {}
106:           <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-3">
107:             {allTags.slice(0, 20).map(tag => (
108:               <button
109:                 key={tag}
110:                 onClick={() => handleTagClick(tag)}
111:                 className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${selectedTag === tag ? 'bg-brand-primary text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
112:               >
113:                 {tag}
114:               </button>
115:             ))}
116:             {allTags.length > 20 && (
117:               <button
118:                 onClick={() => setShowAllTags(true)}
119:                 className="px-4 py-2 text-sm font-semibold rounded-full bg-slate-600 text-slate-200 hover:bg-slate-500 transition-colors duration-300"
120:               >
121:                 +{allTags.length - 20} More
122:               </button>
123:             )}
124:           </div>
125:         </div>
126: 
127:         {}
128:         {showAllTags && (
129:           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
130:             <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
131:               <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-center">
132:                 <h2 className="text-2xl font-bold text-white">All Tags ({allTags.length})</h2>
133:                 <button
134:                   onClick={() => setShowAllTags(false)}
135:                   className="text-slate-400 hover:text-white transition-colors text-2xl"
136:                   aria-label="Close modal"
137:                 >
138:                   ×
139:                 </button>
140:               </div>
141:               <div className="p-6">
142:                 <div className="flex flex-wrap gap-3">
143:                   <button
144:                     onClick={() => {
145:                       handleTagClick(null);
146:                       setShowAllTags(false);
147:                     }}
148:                     className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${!selectedTag ? 'bg-brand-primary text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
149:                   >
150:                     All Posts
151:                   </button>
152:                   {allTags.map(tag => (
153:                     <button
154:                       key={tag}
155:                       onClick={() => {
156:                         handleTagClick(tag);
157:                         setShowAllTags(false);
158:                       }}
159:                       className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${selectedTag === tag ? 'bg-brand-primary text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
160:                     >
161:                       {tag}
162:                     </button>
163:                   ))}
164:                 </div>
165:               </div>
166:             </div>
167:           </div>
168:         )}
169: 
170:         {paginatedPosts.length > 0 ? (
171:           <>
172:             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
173:               {paginatedPosts.map(post => {
174: 
175:                 const displayDate = (post).publishedAt
176:                   ? new Date((post).publishedAt).toLocaleDateString('en-US', {
177:                     year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
178:                   })
179:                   : 'Date Unknown';
180: 
181: 
182:                 const postSlug = (post).slug;
183: 
184:                 return (
185:                   <Link
186:                     key={postSlug}
187:                     href={`/blog/${postSlug}`}
188:                     className="block bg-background rounded-lg overflow-hidden shadow-lg group"
189:                   >
190:                     <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300" />
191:                     <div className="p-6">
192:                       <p className="text-sm text-slate-400 mb-2">{displayDate} &bull; {post.author?.name || 'Malalang teams'}</p>
193:                       <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">{post.title}</h3>
194:                       <p className="text-slate-400 text-base grow">{post.excerpt}</p>
195:                     </div>
196:                   </Link>
197:                 );
198:               })}
199:             </div>
200: 
201:             {}
202:             {totalPages > 1 && (
203:               <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
204:                 <button
205:                   onClick={() => handlePageChange(currentPage - 1)}
206:                   disabled={currentPage === 1}
207:                   className="px-6 py-2 rounded-full font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
208:                 >
209:                   Previous
210:                 </button>
211: 
212:                 <div className="flex items-center gap-2">
213:                   {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
214:                     <button
215:                       key={page}
216:                       onClick={() => handlePageChange(page)}
217:                       className={`w-10 h-10 rounded-full font-bold transition-all duration-300 border ${currentPage === page
218:                           ? 'bg-brand-primary text-white border-brand-primary glow-green'
219:                           : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
220:                         }`}
221:                     >
222:                       {page}
223:                     </button>
224:                   ))}
225:                 </div>
226: 
227:                 <button
228:                   onClick={() => handlePageChange(currentPage + 1)}
229:                   disabled={currentPage === totalPages}
230:                   className="px-6 py-2 rounded-full font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-brand-primary text-white hover:bg-white hover:text-black shadow-lg"
231:                 >
232:                   Next
233:                 </button>
234:               </div>
235:             )}
236:           </>
237:         ) : (
238:           <div className="text-center py-12">
239:             <p className="text-2xl text-white font-semibold mb-4">No posts found</p>
240:             <p className="text-slate-400">Try adjusting your search or selecting a different tag.</p>
241:           </div>
242:         )}
243:       </div>
244:     </section>
245: 
246:   );
247: };
248: 
249: export default BlogClient;
````

## File: apps/client/app/home/page.tsx
````typescript
 1: import React from 'react';
 2: import { Metadata } from 'next';
 3: import { SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 4: import {
 5:   getCachedPortfolioItems,
 6:   getCachedTestimonials,
 7:   getCachedFaqs
 8: } from '@/app/_lib/data';
 9: import Hero from './components/Hero';
10: import About from './components/About';
11: import Services from "@/app/_components/ServiceCategory";
12: import Process from './components/Process';
13: import Portfolio from './components/Portfolio';
14: import Guarantee from './components/Guarantee';
15: import Testimonials from './components/Testimonials';
16: import RecentPosts from './components/RecentPosts';
17: import Faq from './components/Faq';
18: 
19: export const metadata: Metadata = {
20: 
21:   title: 'Web Design in Phalaborwa | Malalang - Local Website Development',
22:   description: 'Looking for a web designer in Phalaborwa? Malalang builds affordable, professional websites for local businesses. We help you get online, attract more customers, and grow your business with a stunning, mobile-friendly site. Contact us for a free quote!',
23:   keywords: 'web designer Phalaborwa, website development Phalaborwa, local web designer, affordable websites, professional web design, mobile-friendly websites, small business web design, Malalang web design',
24:   openGraph: {
25:     title: 'Web Design in Phalaborwa | Malalang',
26:     description: 'Professional, affordable website design for businesses in Phalaborwa. Get online and attract more customers today.',
27:     url: SITE_URL,
28:     type: 'website',
29:   },
30:   twitter: {
31:     card: 'summary_large_image',
32:     title: 'Web Design in Phalaborwa | Malalang',
33:     description: 'Professional, affordable website design for businesses in Phalaborwa.',
34:     creator: TWITTER_CREATOR,
35:   },
36: };
37: 
38: export default async function HomePage() {
39:   const [portfolioItems, testimonials, faqs] = await Promise.all([
40:     getCachedPortfolioItems(),
41:     getCachedTestimonials(),
42:     getCachedFaqs()
43:   ]);
44: 
45:   return (
46:     <main>
47:       <Hero />
48:       <About />
49:       <Guarantee />
50:       <Testimonials testimonials={testimonials} />
51:       <Services />
52:       <Process />
53:       <Portfolio items={portfolioItems} />
54:       <RecentPosts />
55:       <Faq faqs={faqs} />
56:     </main>
57:   );
58: }
````

## File: apps/client/app/page.tsx
````typescript
 1: import { Metadata } from 'next';
 2: import { SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 3: import Faq from "./home/components/Faq";
 4: import Guarantee from "./home/components/Guarantee";
 5: import Hero from "./home/components/Hero";
 6: import Portfolio from "./home/components/Portfolio";
 7: import Process from "./home/components/Process";
 8: import RecentPosts from "./home/components/RecentPosts";
 9: import ServiceCategory from "./_components/ServiceCategory";
10: import Testimonials from "./home/components/Testimonials";
11: import {
12:   getCachedServiceCategories,
13:   getCachedPortfolioItems,
14:   getCachedTestimonials,
15:   getCachedFaqs
16: } from '@/app/_lib/data';
17: 
18: export const metadata: Metadata = {
19: 
20:   title: 'Web Design in Phalaborwa | Malalang - Local Website Development',
21:   description: 'Looking for a web designer in Phalaborwa? Malalang builds affordable, professional websites for local businesses. We help you get online, attract more customers, and grow your business with a stunning, mobile-friendly site. Contact us for a free quote!',
22:   keywords: 'web design Phalaborwa, website development Phalaborwa, local web designer, affordable websites, professional web design, mobile-friendly websites, small business web design, Malalang web design',
23:   alternates: {
24:     canonical: SITE_URL,
25:   },
26:   robots: {
27:     index: true,
28:     follow: true,
29:   },
30:   openGraph: {
31:     title: 'Web Design in Phalaborwa | Malalang',
32:     description: 'Professional, affordable website design for businesses in Phalaborwa. Get online and attract more customers today.',
33:     url: SITE_URL,
34:     type: 'website',
35:   },
36:   twitter: {
37:     card: 'summary_large_image',
38:     title: 'Web Design in Phalaborwa | Malalang',
39:     description: 'Professional, affordable website design for businesses in Phalaborwa.',
40:     creator: TWITTER_CREATOR,
41:   },
42: };
43: 
44: const HomePage: React.FC = async () => {
45:   const [serviceCategories, portfolioItems, testimonials, faqs] = await Promise.all([
46:     getCachedServiceCategories(),
47:     getCachedPortfolioItems(),
48:     getCachedTestimonials(),
49:     getCachedFaqs()
50:   ]);
51: 
52:   return (
53:     <main>
54:       <Hero />
55:       <ServiceCategory />
56:       <Testimonials testimonials={testimonials} />
57:       <Guarantee />
58:       <Process />
59:       <Portfolio items={portfolioItems} />
60:       <Faq faqs={faqs} />
61:       <RecentPosts />
62:     </main>
63:   );
64: };
65: 
66: export default HomePage;
````

## File: apps/client/app/services/page.tsx
````typescript
  1: import React from 'react';
  2: import Link from 'next/link';
  3: import { Metadata } from 'next';
  4: import { OG_IMAGE_SERVICES, SITE_URL, TWITTER_CREATOR, WHATSAPP_LINK } from '@/app/_lib/constants/site';
  5: import { getHomeData, getPricingData } from '@malalang/shared/services/composite';
  6: import ServiceCategory from '@/app/_components/ServiceCategory';
  7: import HeroBackground from '@/app/_components/HeroBackground';
  8: import { getCachedServiceCategories } from '../_lib/data';
  9: 
 10: export const metadata: Metadata = {
 11:   title: 'Digital Services in Phalaborwa | Malalang',
 12:   description: 'Website design, domain registration, email hosting, and graphic design for local businesses in Phalaborwa. Affordable packages with no deposit required.',
 13:   keywords: 'digital services, web design, domain registration, email hosting, graphic design, Phalaborwa',
 14:   alternates: {
 15:     canonical: `${SITE_URL}/services`,
 16:   },
 17:   robots: {
 18:     index: true,
 19:     follow: true,
 20:   },
 21:   openGraph: {
 22:     title: 'Digital Services in Phalaborwa | Malalang',
 23:     description: 'Website design, domain registration, email hosting, and graphic design. Affordable packages with no deposit required.',
 24:     url: `${SITE_URL}/services`,
 25:     type: 'website',
 26:     images: [
 27:       {
 28:         url: OG_IMAGE_SERVICES,
 29:         width: 1200,
 30:         height: 630,
 31:         alt: 'Malalang Services',
 32:       },
 33:     ],
 34:   },
 35:   twitter: {
 36:     card: 'summary_large_image',
 37:     title: 'Digital Services in Phalaborwa | Malalang',
 38:     description: 'Website design, domain registration, email hosting, and more.',
 39:     images: [OG_IMAGE_SERVICES],
 40:     creator: TWITTER_CREATOR,
 41:   },
 42: };
 43: 
 44: const iconMap: Record<string, React.ReactNode> = {
 45:   web: (
 46:     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 47:       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 48:     </svg>
 49:   ),
 50:   domain: (
 51:     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 52:       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
 53:     </svg>
 54:   ),
 55:   email: (
 56:     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 57:       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 58:     </svg>
 59:   ),
 60:   design: (
 61:     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 62:       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
 63:     </svg>
 64:   ),
 65: };
 66: 
 67: const ServicesPage: React.FC = async () => {
 68:   const [serviceCategories, { recurringService }] = await Promise.all([
 69:     getCachedServiceCategories(),
 70:     getPricingData()
 71:   ]);
 72: 
 73:   return (
 74:     <main>
 75:       {}
 76:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
 77:         <HeroBackground />
 78:         <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
 79:           <p className="text-brand-primary font-mono text-sm mb-3 tracking-widest uppercase">What We Offer</p>
 80:           <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
 81:             Full-Service <span className="text-brand-primary glow-green">Digital Solutions</span>
 82:           </h1>
 83:           <p className="text-xl text-blue-300 font-semibold max-w-2xl mx-auto">
 84:             Everything your business needs online — from a stunning website to professional email, domain ownership, and stand-out design. All from one local team in Phalaborwa.
 85:           </p>
 86:         </div>
 87:       </section>
 88: 
 89:       <ServiceCategory />
 90: 
 91:       {}
 92:       <section className="py-14 bg-slate-900">
 93:         <div className="container mx-auto px-4 sm:px-6">
 94:           <div className="max-w-4xl mx-auto text-center mb-10">
 95:             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Add-ons & Extra Services</h2>
 96:             <p className="text-slate-400">
 97:               Enhance any package with powerful extras. Mix and match to build exactly what your business needs.
 98:             </p>
 99:           </div>
100:           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
101:             {['SEO Audit', 'Live Chat', 'Booking System', 'Google Business Setup', 'Analytics Setup', 'Extra Pages'].map(s => (
102:               <div key={s} className="bg-background rounded-lg p-3 text-center border border-slate-800">
103:                 <p className="text-slate-300 text-xs sm:text-sm font-medium">{s}</p>
104:               </div>
105:             ))}
106:           </div>
107:           <div className="text-center mt-8">
108:             <Link href="/pricing" className="inline-block text-brand-primary hover:underline font-semibold">
109:               View full pricing and add-ons &rarr;
110:             </Link>
111:           </div>
112:         </div>
113:       </section>
114: 
115:       {}
116:       {recurringService && (
117:         <section className="py-14 bg-background">
118:           <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
119:             <div className="bg-brand-primary/10 border border-brand-primary/30 rounded-xl p-6 sm:p-10 text-center">
120:               <div className="inline-flex bg-brand-primary/20 text-brand-primary p-3 rounded-full mb-4">
121:                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
122:                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9.384a11.955 11.955 0 009 12.616 11.955 11.955 0 009-12.616 12.02 12.02 0 00-.382-2.44z" />
123:                 </svg>
124:               </div>
125:               <h2 className="text-2xl sm:text-3xl font-bold text-white">{recurringService.title}</h2>
126:               <p className="text-3xl font-extrabold text-brand-primary my-2">{recurringService.price}</p>
127:               <p className="text-slate-400 max-w-xl mx-auto">{recurringService.description}</p>
128:               <a
129:                 href={WHATSAPP_LINK}
130:                 target="_blank"
131:                 rel="noopener noreferrer"
132:                 className="mt-6 inline-block bg-brand-primary hover:bg-brand-primary/80 text-brand-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
133:               >
134:                 Get the Care Plan
135:               </a>
136:             </div>
137:           </div>
138:         </section>
139:       )}
140: 
141:       {}
142:       <section className="py-14 bg-slate-900 text-center">
143:         <div className="container mx-auto px-4 sm:px-6">
144:           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Not sure where to start?</h2>
145:           <p className="text-slate-400 mb-6 max-w-xl mx-auto">Chat with us on WhatsApp and we'll recommend the right package for your budget and goals — no obligation.</p>
146:           <a
147:             href={WHATSAPP_LINK}
148:             target="_blank"
149:             rel="noopener noreferrer"
150:             className="inline-block bg-brand-primary hover:bg-brand-primary/80 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
151:           >
152:             Get a Free Consultation
153:           </a>
154:         </div>
155:       </section>
156:     </main>
157:   );
158: };
159: 
160: export default ServicesPage;
````

## File: apps/client/app/tools/create-script/page.tsx
````typescript
 1: import { Metadata } from 'next';
 2: import { OG_IMAGE_DEFAULT, SITE_URL, TWITTER_CREATOR } from '@/app/_lib/constants/site';
 3: 
 4: export const metadata: Metadata = {
 5:   title: 'AI Video Script Generator | Malalang',
 6:   description: 'Create engaging video scripts powered by AI. Generate scripts, add media, and produce professional videos for your business.',
 7:   keywords: 'video script generator, AI script creation, video creation, content generation',
 8:   alternates: {
 9:     canonical: `${SITE_URL}/tools/create-script`,
10:   },
11:   robots: {
12:     index: true,
13:     follow: true,
14:   },
15:   openGraph: {
16:     title: 'AI Video Script Generator | Malalang',
17:     description: 'Create engaging video scripts with AI and produce professional videos for your business.',
18:     url: `${SITE_URL}/tools/create-script`,
19:     type: 'website',
20:     images: [
21:       {
22:         url: OG_IMAGE_DEFAULT,
23:         width: 1200,
24:         height: 630,
25:         alt: 'AI Video Script Generator',
26:       },
27:     ],
28:   },
29:   twitter: {
30:     card: 'summary_large_image',
31:     title: 'AI Video Script Generator | Malalang',
32:     description: 'Create engaging video scripts with AI.',
33:     images: [OG_IMAGE_DEFAULT],
34:     creator: TWITTER_CREATOR,
35:   },
36: };
37: 
38: export const dynamic = "force-dynamic";
39: 
40: import ScriptPanel from "./components/script-panel";
41: import { Card } from "@/app/_components/ui/card";
42: import ScriptHeader from "./components/ScriptHeader";
43: import { Videos } from "./components/Videos";
44: 
45: import HeroBackgroundComp from '@/app/_components/HeroBackground';
46: 
47: export default function CreateScriptPage() {
48:   return (
49:     <main>
50:       <section className="circuit-bg relative overflow-hidden py-12 md:py-20 text-center">
51:         <HeroBackgroundComp />
52:         <div className="container mx-auto px-4 relative z-10">
53:           <div className="max-w-5xl mx-auto">
54:             <Card className="flex flex-col h-full overflow-hidden bg-brand-navy/90 border-brand-primary/20 backdrop-blur-sm">
55:               <ScriptHeader />
56:               <ScriptPanel />
57:             </Card>
58:           </div>
59:         </div>
60:       </section>
61:       <Videos />
62:     </main>
63:   );
64: }
````

## File: packages/shared/src/supabase/services/comments.ts
````typescript
 1: import { supabase, handleResponse } from "../client";
 2: import type { BlogComment } from "../../types";
 3: import type { Database } from "../../types/supabase";
 4: 
 5: type CommentRow = Database['public']['Tables']['comments']['Row'];
 6: 
 7: interface CommentWithClient extends CommentRow {
 8:   clients: { user_name: string | null } | null;
 9: }
10: 
11: export async function getCommentsByBlogId(blogId: string): Promise<BlogComment[]> {
12:   const data = await handleResponse<CommentWithClient[]>(
13:     supabase
14:       .from("comments")
15:       .select("*, clients(user_name)")
16:       .eq("blog_id", blogId)
17:       .order("created_at", { ascending: false })
18:   );
19:   return ((data as CommentWithClient[]) || []).map((c) => ({
20:     id: c.id,
21:     blogId: c.blog_id,
22:     userId: c.user_id,
23:     userName: c.clients?.user_name || "Anonymous",
24:     email: c.email || "",
25:     phone: c.phone || "",
26:     content: c.content,
27:     createdAt: c.created_at || new Date().toISOString(),
28:   }));
29: }
30: 
31: export async function createComment(data: Omit<BlogComment, "id" | "createdAt" | "userName">): Promise<string> {
32:   const result = await handleResponse(
33:     supabase.from("comments").insert({
34:       blog_id: data.blogId,
35:       user_id: data.userId,
36:       email: data.email,
37:       phone: data.phone,
38:       content: data.content,
39:     }).select("id").single()
40:   );
41:   if (!result || !('id' in result)) throw new Error("Failed to create comment");
42:   return (result as { id: string }).id;
43: }
44: 
45: export async function deleteComment(id: string): Promise<void> {
46:   await handleResponse(supabase.from("comments").delete().eq("id", id));
47: }
````

## File: packages/shared/src/supabase/services/services.ts
````typescript
  1: import { supabase, handleResponse } from "../client";
  2: import type { ServicePackage, ServiceCategory } from "../../types";
  3: import type { Database } from "../../types/supabase";
  4: 
  5: type ServiceRow = Database['public']['Tables']['services']['Row'];
  6: type ServiceDetailRow = Database['public']['Tables']['service_details']['Row'];
  7: 
  8: interface ServiceWithDetails extends ServiceRow {
  9:   service_details: ServiceDetailRow[] | null;
 10: }
 11: 
 12: export async function getServices(): Promise<ServicePackage[]> {
 13:   const data = await handleResponse(
 14:     supabase
 15:       .from("services")
 16:       .select("*, service_details(*)")
 17:       .order("created_at", { ascending: true })
 18:   );
 19:   return ((data as ServiceWithDetails[]) || []).map((s) => {
 20:     const detail = s.service_details?.[0];
 21:     return {
 22:       id: s.id,
 23:       title: s.title,
 24:       price: s.price || "",
 25:       category: s.category || "",
 26:       description: s.description || "",
 27:       active: s.active || false,
 28:       serviceUrl: detail?.service_url || "",
 29:       longDescription: detail?.long_description || "",
 30:       idealFor: detail?.ideal_for || "",
 31:       bestFor: detail?.best_for || "",
 32:       features: detail?.features || [],
 33:       isFeatured: detail?.is_featured || false,
 34:       isCombo: detail?.is_combo || false,
 35:       savingsNote: detail?.savings_note || "",
 36:       type: (detail?.type as ServicePackage['type']) || "static",
 37:     };
 38:   });
 39: }
 40: 
 41: export async function getServiceById(id: string): Promise<ServicePackage | null> {
 42:   const data = await handleResponse(
 43:     supabase
 44:       .from("services")
 45:       .select("*, service_details(*)")
 46:       .eq("id", id)
 47:       .single()
 48:   );
 49:   if (!data) return null;
 50:   const s = data as ServiceWithDetails;
 51:   const detail = s.service_details?.[0];
 52:   return {
 53:     id: s.id,
 54:     title: s.title,
 55:     price: s.price || "",
 56:     category: s.category || "",
 57:     description: s.description || "",
 58:     active: s.active || false,
 59:     serviceUrl: detail?.service_url || "",
 60:     longDescription: detail?.long_description || "",
 61:     idealFor: detail?.ideal_for || "",
 62:     bestFor: detail?.best_for || "",
 63:     features: detail?.features || [],
 64:     isFeatured: detail?.is_featured || false,
 65:     isCombo: detail?.is_combo || false,
 66:     savingsNote: detail?.savings_note || "",
 67:     type: (detail?.type as ServicePackage['type']) || "static",
 68:   };
 69: }
 70: 
 71: export async function createService(data: Omit<ServicePackage, "id">): Promise<string> {
 72:   const {
 73:     serviceUrl = "",
 74:     longDescription = "",
 75:     idealFor = "",
 76:     bestFor = "",
 77:     features = [],
 78:     isFeatured = false,
 79:     isCombo = false,
 80:     savingsNote = "",
 81:     type = "static",
 82:     ...baseData
 83:   } = data;
 84: 
 85:   const result = await handleResponse(
 86:     supabase.from("services").insert({
 87:       title: baseData.title,
 88:       price: baseData.price,
 89:       category: baseData.category || "",
 90:       description: baseData.description,
 91:       active: baseData.active
 92:     }).select("id").single()
 93:   );
 94:   const serviceId = (result as unknown as { id: string }).id;
 95: 
 96:   await handleResponse(
 97:     supabase.from("service_details").insert({
 98:       service_id: serviceId,
 99:       service_url: serviceUrl,
100:       long_description: longDescription,
101:       ideal_for: idealFor,
102:       best_for: bestFor,
103:       features: features as string[],
104:       is_featured: isFeatured,
105:       is_combo: isCombo,
106:       savings_note: savingsNote,
107:       type
108:     })
109:   );
110: 
111:   return serviceId;
112: }
113: 
114: export async function updateService(id: string, data: Partial<ServicePackage>): Promise<void> {
115:   const {
116:     serviceUrl, longDescription, idealFor, bestFor,
117:     features, isFeatured, isCombo, savingsNote, type,
118:     id: _id,
119:     ...baseData
120:   } = data;
121: 
122:   if (Object.keys(baseData).length > 0) {
123:     const updateBase: Database['public']['Tables']['services']['Update'] = {};
124:     if (baseData.title !== undefined) updateBase.title = baseData.title;
125:     if (baseData.price !== undefined) updateBase.price = baseData.price;
126:     if (baseData.category !== undefined) updateBase.category = baseData.category;
127:     if (baseData.description !== undefined) updateBase.description = baseData.description;
128:     if (baseData.active !== undefined) updateBase.active = baseData.active;
129: 
130:     await handleResponse(
131:       supabase.from("services").update(updateBase).eq("id", id)
132:     );
133:   }
134: 
135:   const detailUpdate: Database['public']['Tables']['service_details']['Update'] = {};
136:   if (serviceUrl !== undefined) detailUpdate.service_url = serviceUrl;
137:   if (longDescription !== undefined) detailUpdate.long_description = longDescription;
138:   if (idealFor !== undefined) detailUpdate.ideal_for = idealFor;
139:   if (bestFor !== undefined) detailUpdate.best_for = bestFor;
140:   if (features !== undefined) detailUpdate.features = features as string[];
141:   if (isFeatured !== undefined) detailUpdate.is_featured = isFeatured;
142:   if (isCombo !== undefined) detailUpdate.is_combo = isCombo;
143:   if (savingsNote !== undefined) detailUpdate.savings_note = savingsNote;
144:   if (type !== undefined) detailUpdate.type = type;
145: 
146:   if (Object.keys(detailUpdate).length > 0) {
147:     await handleResponse(
148:       supabase.from("service_details").update(detailUpdate).eq("service_id", id)
149:     );
150:   }
151: }
152: 
153: export async function deleteService(id: string): Promise<void> {
154:   await handleResponse(supabase.from("services").delete().eq("id", id));
155: }
156: 
157: export async function getServiceCategories(): Promise<ServiceCategory[]> {
158:     const data = await handleResponse(
159:       supabase.from("service_categories").select("*").order("display_order", { ascending: true })
160:     );
161:     return ((data as Database['public']['Tables']['service_categories']['Row'][]) || []).map((c) => ({
162:       id: c.id,
163:       slug: c.slug,
164:       name: c.name,
165:       tagline: c.tagline || "",
166:       description: c.description || "",
167:       imageUrl: c.image_url || "",
168:       packageCount: c.package_count || 0,
169:       priceFrom: c.price_from || "",
170:     }));
171: }
````

## File: packages/shared/src/validation/schemas.ts
````typescript
  1: import { z } from 'zod';
  2: 
  3: 
  4: export const ProfileSchema = z.object({
  5:   id: z.string().uuid(),
  6:   name: z.string(),
  7:   avatarUrl: z.string().nullable().optional(),
  8:   imageUrl: z.string().nullable().optional(),
  9:   bio: z.string().nullable().optional(),
 10:   createdAt: z.string().optional(),
 11:   updatedAt: z.string().optional(),
 12: });
 13: 
 14: 
 15: export const ServiceSchema = z.object({
 16:   id: z.string().uuid(),
 17:   title: z.string(),
 18:   price: z.string().nullable().optional(),
 19:   category: z.string().nullable().optional(),
 20:   description: z.string().nullable().optional(),
 21:   active: z.boolean().default(true),
 22:   createdAt: z.string().optional(),
 23:   updatedAt: z.string().optional(),
 24: });
 25: 
 26: 
 27: export const BlogSchema = z.object({
 28:   id: z.string().uuid(),
 29:   title: z.string(),
 30:   slug: z.string(),
 31:   htmlContent: z.string(),
 32:   excerpt: z.string().nullable().optional(),
 33:   metaTitle: z.string().nullable().optional(),
 34:   metaDescription: z.string().nullable().optional(),
 35:   imageUrl: z.string().nullable().optional(),
 36:   readingTimeMinutes: z.number().default(0),
 37:   keywords: z.string().nullable().optional(),
 38:   source: z.string().default('malalang'),
 39:   status: z.enum(['draft', 'published', 'archived']).default('draft'),
 40:   authorId: z.string().uuid().nullable().optional(),
 41:   publishedAt: z.string().optional(),
 42:   createdAt: z.string().optional(),
 43:   updatedAt: z.string().optional(),
 44: });
 45: 
 46: 
 47: export const ClientSchema = z.object({
 48:   id: z.string().uuid(),
 49:   userName: z.string().nullable().optional(),
 50:   fullName: z.string(),
 51:   businessName: z.string().nullable().optional(),
 52:   email: z.string().email().nullable().optional(),
 53:   phone: z.string().nullable().optional(),
 54:   serviceId: z.string().nullable().optional(),
 55:   createdAt: z.string().optional(),
 56:   updatedAt: z.string().optional(),
 57: });
 58: 
 59: 
 60: export const ContactSchema = z.object({
 61: 
 62:   id: z.string().uuid(),
 63:   name: z.string(),
 64:   email: z.string().email(),
 65:   message: z.string(),
 66:   isRead: z.boolean().default(false),
 67:   isResponded: z.boolean().default(false),
 68:   createdAt: z.string().optional(),
 69: });
 70: 
 71: 
 72: export const CommentSchema = z.object({
 73:   id: z.string().uuid(),
 74:   blogSlug: z.string(),
 75:   userName: z.string(),
 76:   email: z.string().email().nullable().optional(),
 77:   phone: z.string().nullable().optional(),
 78:   content: z.string(),
 79:   createdAt: z.string().optional(),
 80: });
 81: 
 82: 
 83: export const ServiceDetailSchema = z.object({
 84:   id: z.string().uuid(),
 85:   serviceId: z.string().uuid(),
 86:   serviceUrl: z.string(),
 87:   longDescription: z.string().nullable().optional(),
 88:   idealFor: z.string().nullable().optional(),
 89:   bestFor: z.string().nullable().optional(),
 90:   features: z.array(z.string()).default([]),
 91:   isFeatured: z.boolean().default(false),
 92:   isCombo: z.boolean().default(false),
 93:   savingsNote: z.string().nullable().optional(),
 94:   type: z.enum(['static', 'dynamic']).default('static'),
 95: });
 96: 
 97: 
 98: export const AddonCategorySchema = z.object({
 99:   id: z.string().uuid(),
100:   name: z.string(),
101:   displayOrder: z.number().default(0),
102: });
103: 
104: 
105: export const AddonServiceSchema = z.object({
106:   id: z.string().uuid(),
107:   categoryId: z.string().uuid(),
108:   title: z.string(),
109:   price: z.string(),
110:   displayOrder: z.number().default(0),
111: });
112: 
113: 
114: export const FaqSchema = z.object({
115:   id: z.string().uuid(),
116:   question: z.string(),
117:   answer: z.string(),
118:   displayOrder: z.number().default(0),
119: });
120: 
121: 
122: export const RecurringServiceSchema = z.object({
123:   id: z.string().uuid(),
124:   title: z.string(),
125:   price: z.string(),
126:   description: z.string().nullable().optional(),
127: });
128: 
129: 
130: export const MeetingRoomSchema = z.object({
131:   id: z.string().uuid(),
132:   callId: z.string(),
133:   createdBy: z.string().uuid().nullable().optional(),
134:   status: z.enum(['active', 'archived', 'cancelled']).default('active'),
135:   metadata: z.any().default({}),
136:   createdAt: z.string().optional(),
137: });
138: 
139: 
140: export const LaunchPackServiceSchema = z.object({
141:   id: z.string().uuid(),
142:   title: z.string(),
143:   price: z.string(),
144:   displayOrder: z.number().default(0),
145: });
146: 
147: 
148: export const ServiceCategorySchema = z.object({
149:   id: z.string().uuid(),
150:   slug: z.string(),
151:   name: z.string(),
152:   tagline: z.string().nullable().optional(),
153:   description: z.string().nullable().optional(),
154:   icon: z.string().nullable().optional(),
155:   packageCount: z.number().default(0),
156:   priceFrom: z.string().nullable().optional(),
157:   displayOrder: z.number().default(0),
158: });
159: 
160: 
161: export const PortfolioItemSchema = z.object({
162:   id: z.string().uuid(),
163:   title: z.string(),
164:   description: z.string().nullable().optional(),
165:   imageUrl: z.string().nullable().optional(),
166:   category: z.string().nullable().optional(),
167:   displayOrder: z.number().default(0),
168: });
169: 
170: 
171: export const TestimonialSchema = z.object({
172:   id: z.string().uuid(),
173:   quote: z.string(),
174:   author: z.string(),
175:   company: z.string().nullable().optional(),
176:   displayOrder: z.number().default(0),
177: });
178: 
179: 
180: export const TeamMemberSkillSchema = z.object({
181:   name: z.string(),
182:   icon: z.any(),
183: });
184: 
185: export const TeamMemberContactSchema = z.object({
186:   name: z.string(),
187:   value: z.string(),
188:   icon: z.any(),
189:   link: z.string().optional(),
190: });
191: 
192: export const TeamMemberSchema = z.object({
193:   id: z.string(),
194:   name: z.string(),
195:   title: z.string(),
196:   imageUrl: z.string(),
197:   bio: z.string(),
198:   avatarUrl: z.string(),
199:   skills: z.array(TeamMemberSkillSchema),
200:   contacts: z.array(TeamMemberContactSchema),
201: });
202: 
203: export const ValueSchema = z.object({
204:   icon: z.any(),
205:   title: z.string(),
206:   description: z.string(),
207: });
208: 
209: export const DifferenceSchema = z.object({
210:   icon: z.any(),
211:   title: z.string(),
212:   description: z.string(),
213: });
214: 
215: export const MalalangProjectSchema = z.object({
216:   id: z.string(),
217:   name: z.string(),
218:   description: z.string(),
219:   image: z.string(),
220:   link: z.string(),
221: });
````

## File: repomix.config.json
````json
 1: {
 2:   "$schema": "https://repomix.com/schemas/latest/schema.json",
 3:   "input": {
 4:     "maxFileSize": 52428800
 5:   },
 6:   "output": {
 7:     "filePath": "codebase-context.md",
 8:     "style": "markdown",
 9:     "parsableStyle": false,
10:     "fileSummary": true,
11:     "directoryStructure": true,
12:     "files": true,
13:     "removeComments": true,
14:     "removeEmptyLines": false,
15:     "compress": false,
16:     "topFilesLength": 5,
17:     "showLineNumbers": true,
18:     "truncateBase64": false,
19:     "copyToClipboard": false,
20:     "includeFullDirectoryStructure": false,
21:     "tokenCountTree": false,
22:     "git": {
23:       "sortByChanges": true,
24:       "sortByChangesMaxCommits": 100,
25:       "includeDiffs": false,
26:       "includeLogs": false,
27:       "includeLogsCount": 50
28:     }
29:   },
30:   "include": [],
31:   "ignore": {
32:     "useGitignore": true,
33:     "useDotIgnore": true,
34:     "useDefaultPatterns": true,
35:     "customPatterns": []
36:   },
37:   "security": {
38:     "enableSecurityCheck": true
39:   },
40:   "tokenCount": {
41:     "encoding": "o200k_base"
42:   }
43: }
````

## File: turbo.json
````json
 1: {
 2:   "$schema": "https://turborepo.dev/schema.json",
 3:   "ui": "tui",
 4:   "globalEnv": ["Facebook_token", "STREAM_API_KEY", "STREAM_API_SECRET", "NEXT_PUBLIC_STREAM_API_KEY", "ENABLE_EXPERIMENTAL_COREPACK", "REVALIDATION_WEBHOOK_SECRET", "NEXT_PUBLIC_CLIENT_SITE_URL"],
 5:   "tasks": {
 6:     "build": {
 7:       "dependsOn": ["^build"],
 8:       "inputs": ["$TURBO_DEFAULT$", ".env*"],
 9:       "outputs": [".next/**", "!.next/cache/**", "dist/**"]
10:     },
11:     "lint": {
12:       "dependsOn": ["^lint"]
13:     },
14:     "check-types": {
15:       "dependsOn": ["^check-types"]
16:     },
17:     "dev": {
18:       "cache": false,
19:       "persistent": true
20:     }
21:   }
22: }
````

## File: apps/admin/app/_lib/actions.ts
````typescript
  1: "use server";
  2: 
  3: import { revalidatePath } from "next/cache";
  4: import { createBlog, updateBlog, deleteBlog as dbDeleteBlog } from "@malalang/shared/services/blogs";
  5: import { blogPostSchema, type BlogPostInput } from "./validation";
  6: import { blogSchema } from "@/app/blog/schema";
  7: 
  8: import { triggerClientRevalidation } from "./revalidation";
  9: import {
 10:   createService,
 11:   updateService,
 12:   deleteService as dbDeleteService
 13: } from "@malalang/shared/services/services";
 14: import {
 15:   createFaq,
 16:   updateFaq,
 17:   deleteFaq as dbDeleteFaq,
 18:   createTestimonial,
 19:   updateTestimonial,
 20:   deleteTestimonial as dbDeleteTestimonial,
 21:   createPortfolioItem,
 22:   updatePortfolioItem,
 23:   deletePortfolioItem as dbDeletePortfolioItem
 24: } from "@malalang/shared/services/content";
 25: import { createMeetingRoom } from "@malalang/shared/services/meetings";
 26: import { upsertStreamChatChannel } from "@malalang/shared/services/stream";
 27: import { createSupabaseServerClient } from "@malalang/shared/supabase/server";
 28: 
 29: 
 30: 
 31: 
 32: export async function updateBlogPostAction(id: string, data: any) {
 33:   try {
 34:     const updateData: any = { ...data };
 35: 
 36: 
 37:     if (data.authorName) {
 38:       updateData.author = {
 39:         id: "abram-ntsako",
 40:         name: "AEN Nyathi",
 41:         avatarUrl: "/assets/profile.jpg",
 42:         imageUrl: "/assets/profile.jpg",
 43:         bio: "Abram Ntsako is the founder of Malalang Pty Ltd, a web development studio dedicated to empowering local businesses in Phalaborwa. With a passion for clean code and user-centric design, he helps SMEs build a strong online presence without breaking the bank."
 44:       };
 45:       delete updateData.authorName;
 46:     }
 47: 
 48:     await updateBlog(id, updateData);
 49: 
 50:     await triggerClientRevalidation('blogs-list-tag', 'immediate');
 51:     if (updateData.slug) {
 52:       await triggerClientRevalidation(`blog-detail-${updateData.slug}`, 'immediate');
 53:     }
 54: 
 55:     revalidatePath("/blog");
 56:     revalidatePath(`/blog/${id}`);
 57:     revalidatePath("/admin/blog");
 58:     return { success: true };
 59:   } catch (error: any) {
 60:     return { success: false, error: error.message };
 61:   }
 62: }
 63: 
 64: export async function upsertBlog(values: unknown) {
 65:   const parsedValues = blogSchema.safeParse(values);
 66: 
 67:   if (!parsedValues.success) {
 68:     return { error: parsedValues.error.message };
 69:   }
 70: 
 71:   const { id, ...rest } = parsedValues.data;
 72: 
 73: 
 74:   const blogData = {
 75:     ...rest,
 76:     tags: typeof rest.tags === 'string'
 77:       ? rest.tags.split(",").map(t => t.trim()).filter(Boolean)
 78:       : rest.tags,
 79:     reading_time_minutes: Math.ceil(rest.readingTimeMinutes),
 80:     source: "malalang" as const,
 81:     author: {
 82:       id: "abram-ntsako",
 83:       name: "AEN Nyathi",
 84:       avatarUrl: "/assets/profile.jpg",
 85:       imageUrl: "/assets/profile.jpg",
 86:       bio: "Abram Ntsako is the founder of Malalang Pty Ltd, a web development studio dedicated to empowering local businesses in Phalaborwa. With a passion for clean code and user-centric design, he helps SMEs build a strong online presence without breaking the bank."
 87:     }
 88:   };
 89: 
 90:   try {
 91:     if (id) {
 92:       await updateBlog(id, blogData);
 93:       await triggerClientRevalidation(`blog-detail-${rest.slug}`, 'immediate');
 94:     } else {
 95:       await createBlog(blogData as any);
 96:     }
 97: 
 98: 
 99:     await triggerClientRevalidation('blogs-list-tag', 'immediate');
100: 
101:     revalidatePath("/blog");
102:     revalidatePath(`/blog/${rest.slug}`);
103:     revalidatePath("/admin/blog");
104: 
105:     return { error: null };
106:   } catch (error: any) {
107:     return { error: `Database error: ${error.message}` };
108:   }
109: }
110: 
111: export async function deleteBlogAction(blogId: string) {
112:   try {
113:     await dbDeleteBlog(blogId);
114: 
115: 
116:     await triggerClientRevalidation('blogs-list-tag');
117: 
118:     revalidatePath("/blog");
119:     revalidatePath("/admin/blog");
120:     return { error: null };
121:   } catch (error: any) {
122:     return { error: `Database error: ${error.message}` };
123:   }
124: }
125: 
126: 
127: 
128: export async function createServiceAction(data: any) {
129:   try {
130:     await createService(data);
131:     await triggerClientRevalidation('services-list-tag');
132:     revalidatePath("/services");
133:     return { success: true };
134:   } catch (error: any) {
135:     return { success: false, error: error.message };
136:   }
137: }
138: 
139: export async function updateServiceAction(id: string, data: any) {
140:   try {
141:     await updateService(id, data);
142:     await triggerClientRevalidation('services-list-tag');
143:     revalidatePath("/services");
144:     revalidatePath(`/services/${id}`);
145:     return { success: true };
146:   } catch (error: any) {
147:     return { success: false, error: error.message };
148:   }
149: }
150: 
151: export async function deleteServiceAction(id: string) {
152:   try {
153:     await dbDeleteService(id);
154:     await triggerClientRevalidation('services-list-tag');
155:     revalidatePath("/services");
156:     return { success: true };
157:   } catch (error: any) {
158:     return { success: false, error: error.message };
159:   }
160: }
161: 
162: 
163: 
164: export async function createFaqAction(data: any) {
165:   try {
166:     await createFaq(data);
167:     await triggerClientRevalidation('faqs-cache-tag');
168:     return { success: true };
169:   } catch (error: any) {
170:     return { success: false, error: error.message };
171:   }
172: }
173: 
174: export async function updateFaqAction(id: string, data: any) {
175:   try {
176:     await updateFaq(id, data);
177:     await triggerClientRevalidation('faqs-cache-tag');
178:     return { success: true };
179:   } catch (error: any) {
180:     return { success: false, error: error.message };
181:   }
182: }
183: 
184: export async function deleteFaqAction(id: string) {
185:   try {
186:     await dbDeleteFaq(id);
187:     await triggerClientRevalidation('faqs-cache-tag');
188:     return { success: true };
189:   } catch (error: any) {
190:     return { success: false, error: error.message };
191:   }
192: }
193: 
194: export async function createTestimonialAction(data: any) {
195:   try {
196:     await createTestimonial(data);
197:     await triggerClientRevalidation('testimonials-cache-tag');
198:     return { success: true };
199:   } catch (error: any) {
200:     return { success: false, error: error.message };
201:   }
202: }
203: 
204: export async function updateTestimonialAction(id: string, data: any) {
205:   try {
206:     await updateTestimonial(id, data);
207:     await triggerClientRevalidation('testimonials-cache-tag');
208:     return { success: true };
209:   } catch (error: any) {
210:     return { success: false, error: error.message };
211:   }
212: }
213: 
214: export async function deleteTestimonialAction(id: string) {
215:   try {
216:     await dbDeleteTestimonial(id);
217:     await triggerClientRevalidation('testimonials-cache-tag');
218:     return { success: true };
219:   } catch (error: any) {
220:     return { success: false, error: error.message };
221:   }
222: }
223: 
224: export async function createPortfolioItemAction(data: any) {
225:   try {
226:     await createPortfolioItem(data);
227:     await triggerClientRevalidation('portfolio-cache-tag');
228:     return { success: true };
229:   } catch (error: any) {
230:     return { success: false, error: error.message };
231:   }
232: }
233: 
234: export async function updatePortfolioItemAction(id: string, data: any) {
235:   try {
236:     await updatePortfolioItem(id, data);
237:     await triggerClientRevalidation('portfolio-cache-tag');
238:     return { success: true };
239:   } catch (error: any) {
240:     return { success: false, error: error.message };
241:   }
242: }
243: 
244: export async function deletePortfolioItemAction(id: string) {
245:   try {
246:     await dbDeletePortfolioItem(id);
247:     await triggerClientRevalidation('portfolio-cache-tag');
248:     return { success: true };
249:   } catch (error: any) {
250:     return { success: false, error: error.message };
251:   }
252: }
253: 
254: 
255: 
256: 
257: 
258: 
259: 
260: 
261: 
262: 
263: 
264: 
265: 
266: 
267: 
268: export async function createMeetingRoomAction(payload: {
269:   callId: string;
270:   title: string;
271:   clientId?: string;
272: }) {
273: 
274:   if (!payload.callId || !/^[a-z0-9_-]+$/i.test(payload.callId)) {
275:     return { success: false, error: 'Invalid Call ID format. Use letters, numbers, underscores and hyphens only.' };
276:   }
277: 
278:   if (!payload.title?.trim()) {
279:     return { success: false, error: 'Meeting title is required.' };
280:   }
281: 
282:   try {
283: 
284:     const supabase = await createSupabaseServerClient();
285:     const { data: { user }, error: authError } = await supabase.auth.getUser();
286: 
287:     if (authError || !user) {
288:       return { success: false, error: 'You must be logged in to create a meeting room.' };
289:     }
290: 
291:     const userName = user.user_metadata?.full_name || user.email || 'Admin Host';
292: 
293: 
294:     await createMeetingRoom({
295:       callId: payload.callId,
296:       title: payload.title,
297:       createdBy: user.id,
298:       clientId: payload.clientId || undefined,
299:       metadata: { title: payload.title, createdAt: new Date().toISOString() },
300:     });
301: 
302: 
303: 
304:     await upsertStreamChatChannel(payload.callId, [{ id: user.id, name: userName }]);
305: 
306:     return { success: true };
307:   } catch (error: any) {
308:     console.error('[createMeetingRoomAction] error:', error);
309:     return { success: false, error: error.message || 'An unexpected error occurred.' };
310:   }
311: }
````

## File: apps/admin/app/clients/page.tsx
````typescript
 1: import { getClients } from "@malalang/shared/services/clients";
 2: 
 3: function fmt(iso: string) {
 4:   if (!iso) return "—";
 5:   return new Date(iso).toLocaleDateString("en-ZA", {
 6:     day: "numeric", month: "short", year: "numeric",
 7:   });
 8: }
 9: 
10: export default async function ClientsPage() {
11:   const clients = await getClients();
12: 
13:   return (
14:     <div>
15:       <h1 className="text-2xl font-bold text-gray-900 mb-1">Clients</h1>
16:       <p className="text-gray-500 text-sm mb-8">
17:         {clients.length} client{clients.length !== 1 ? "s" : ""} on record
18:       </p>
19: 
20:       {clients.length === 0 ? (
21:         <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
22:           <p className="text-sm text-gray-400">No clients yet.</p>
23:         </div>
24:       ) : (
25:         <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
26:           <table className="w-full text-sm">
27:             <thead className="bg-gray-50 border-b border-gray-200">
28:               <tr>
29:                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</th>
30:                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</th>
31:                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Bookings</th>
32:                 <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Joined</th>
33:               </tr>
34:             </thead>
35:             <tbody className="divide-y divide-gray-100">
36:               {clients.map((c) => (
37:                 <tr key={c.id} className="hover:bg-gray-50 transition-colors">
38:                   <td className="px-5 py-3">
39:                     <p className="font-medium text-gray-800">{c.userName || "—"}</p>
40:                     {c.businessName && (
41:                       <p className="text-xs text-gray-400">{c.businessName}</p>
42:                     )}
43:                     {c.email && (
44:                       <p className="text-xs text-gray-400">{c.email}</p>
45:                     )}
46:                   </td>
47:                   <td className="px-5 py-3 text-gray-500">{c.phone}</td>
48:                   <td className="px-5 py-3">
49:                     {c.serviceTitle ? (
50:                       <span className="inline-block bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium">
51:                         {c.serviceTitle}
52:                       </span>
53:                     ) : (
54:                       <span className="text-xs text-gray-400">None</span>
55:                     )}
56:                   </td>
57:                   <td className="px-5 py-3 text-gray-400">{fmt(c.createdAt)}</td>
58:                 </tr>
59:               ))}
60:             </tbody>
61:           </table>
62:         </div>
63:       )}
64:     </div>
65:   );
66: }
````

## File: apps/admin/next-env.d.ts
````typescript
1: import "./.next/types/routes.d.ts";
````

## File: apps/admin/proxy.ts
````typescript
 1: import { createServerClient, type CookieOptions } from '@supabase/ssr';
 2: import { NextResponse, type NextRequest } from 'next/server';
 3: 
 4: export async function proxy(request: NextRequest) {
 5:   console.log("proxy running")
 6:   let response = NextResponse.next({
 7:     request: {
 8:       headers: request.headers,
 9:     },
10:   });
11: 
12:   const supabase = createServerClient(
13:     process.env.NEXT_PUBLIC_SUPABASE_URL!,
14:     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
15:     {
16:       cookies: {
17:         get(name: string) {
18:           return request.cookies.get(name)?.value;
19:         },
20:         set(name: string, value: string, options: CookieOptions) {
21:           request.cookies.set({
22:             name,
23:             value,
24:             ...options,
25:           });
26:           response = NextResponse.next({
27:             request: {
28:               headers: request.headers,
29:             },
30:           });
31:           response.cookies.set({
32:             name,
33:             value,
34:             ...options,
35:           });
36:         },
37:         remove(name: string, options: CookieOptions) {
38:           request.cookies.set({
39:             name,
40:             value: '',
41:             ...options,
42:           });
43:           response = NextResponse.next({
44:             request: {
45:               headers: request.headers,
46:             },
47:           });
48:           response.cookies.set({
49:             name,
50:             value: '',
51:             ...options,
52:           });
53:         },
54:       },
55:     }
56:   );
57: 
58:   const { data: { user } } = await supabase.auth.getUser();
59:   console.log(`[Auth Proxy] Path: ${request.nextUrl.pathname} | User: ${user?.email || 'No user'}`);
60: 
61:   // If there is no user and the route is not /login, redirect to /login
62:   if (!user && !request.nextUrl.pathname.startsWith('/login')) {
63:     console.log(`[Auth Proxy] Redirecting to /login from: ${request.nextUrl.pathname}`);
64:     const redirectRes = NextResponse.redirect(new URL('/login', request.url));
65:     response.cookies.getAll().forEach((cookie) => {
66:       redirectRes.cookies.set(cookie.name, cookie.value);
67:     });
68:     return redirectRes;
69:   }
70: 
71:   // If there is a user and the route is /login, redirect to /
72:   if (user && request.nextUrl.pathname.startsWith('/login')) {
73:     console.log(`[Auth Proxy] Redirecting to / from: ${request.nextUrl.pathname}`);
74:     const redirectRes = NextResponse.redirect(new URL('/', request.url));
75:     response.cookies.getAll().forEach((cookie) => {
76:       redirectRes.cookies.set(cookie.name, cookie.value);
77:     });
78:     return redirectRes;
79:   }
80: 
81:   return response;
82: }
83: 
84: export const config = {
85:   matcher: [
86: 
87: 
88: 
89: 
90: 
91: 
92: 
93:     '/((?!api|_next/static|_next/image|favicon.ico).*)',
94:   ],
95: };
````

## File: apps/client/app/_components/AddClient.tsx
````typescript
  1: 'use client';
  2: 
  3: import React, { useState, useEffect } from 'react';
  4: import PhoneNumberInput from '@/app/_components/SouthAfricanPhoneNumberInput';
  5: import { getClientByPhone, upsertClientByPhone } from '@malalang/shared/services/clients';
  6: import { getServices } from '@malalang/shared/services/services';
  7: import { toast } from 'sonner';
  8: import { Loader2, User, CheckCircle2, UserPlus, Briefcase } from 'lucide-react';
  9: import { motion, AnimatePresence } from 'motion/react';
 10: import type { Client, ServicePackage } from '@malalang/shared/types';
 11: 
 12: interface AddClientProps {
 13:   onSuccess: (client: Client) => void;
 14:   initialPhone?: string;
 15:   title?: string;
 16:   serviceId?: string | null;
 17: }
 18: 
 19: 
 20: 
 21: 
 22: 
 23: 
 24: export default function AddClient({
 25:   onSuccess,
 26:   initialPhone = '',
 27:   title = 'Tell us about yourself',
 28:   serviceId = null,
 29: }: AddClientProps) {
 30:   const [form, setForm] = useState({
 31:     userName: '',
 32:     businessName: '',
 33:     email: '',
 34:     phone: initialPhone,
 35:   });
 36: 
 37:   const [services, setServices] = useState<ServicePackage[]>([]);
 38:   const [selectedServiceId, setSelectedServiceId] = useState<string | null>(serviceId);
 39:   const [loading, setLoading] = useState(false);
 40:   const [userState, setUserState] = useState<'prompt-phone' | 'checking' | 'found' | 'new'>('prompt-phone');
 41:   const [error, setError] = useState<string | null>(null);
 42: 
 43:   useEffect(() => {
 44:     if (!serviceId) {
 45:       getServices()
 46:         .then((data) => setServices(data.filter(s => s.active)))
 47:         .catch(err => console.error("Failed to fetch services:", err));
 48:     }
 49:   }, [serviceId]);
 50: 
 51:   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
 52:     const { name, value } = e.target;
 53:     if (name === 'serviceId') {
 54:       setSelectedServiceId(value || null);
 55:     } else {
 56:       setForm((prev) => ({ ...prev, [name]: value }));
 57:     }
 58:   };
 59: 
 60:   const handlePhoneChange = async (phoneValue: string) => {
 61:     setForm(prev => ({ ...prev, phone: phoneValue }));
 62:     setError(null);
 63: 
 64:     if (phoneValue.length === 9) {
 65:       setUserState('checking');
 66:       const fullPhoneNumber = `+27${phoneValue}`;
 67:       try {
 68:         const client = await getClientByPhone(fullPhoneNumber);
 69: 
 70:         if (client) {
 71:           setUserState('found');
 72: 
 73: 
 74:           const finalServiceId = serviceId || selectedServiceId;
 75: 
 76:           let finalClient = client;
 77: 
 78: 
 79:           if (finalServiceId) {
 80:              finalClient = await upsertClientByPhone(fullPhoneNumber, {
 81:                 userName: client.userName,
 82:                 businessName: client.businessName,
 83:                 email: client.email,
 84:                 serviceId: finalServiceId
 85:              });
 86:           }
 87: 
 88:           setForm(prev => ({
 89:             ...prev,
 90:             userName: finalClient.userName || '',
 91:             email: finalClient.email || '',
 92:             businessName: finalClient.businessName || '',
 93:           }));
 94: 
 95:           // Auto-trigger success if found? Maybe wait a second.
 96:           setTimeout(() => onSuccess(finalClient), 1000);
 97:         } else {
 98:           setUserState('new');
 99:         }
100:       } catch (err) {
101:         console.error("Error looking up user:", err);
102:         setUserState('new');
103:       }
104:     } else {
105:       setUserState('prompt-phone');
106:     }
107:   };
108: 
109:   const handleSubmit = async (e: React.FormEvent) => {
110:     e.preventDefault();
111:     if (!form.phone || form.phone.length !== 9) {
112:       toast.error('Valid phone number is required');
113:       return;
114:     }
115: 
116:     if (!form.userName) {
117:       toast.error('Name is required');
118:       return;
119:     }
120: 
121:     const finalServiceId = serviceId || selectedServiceId;
122:     if (!finalServiceId && services.length > 0) {
123:       toast.error('Please select a service');
124:       return;
125:     }
126: 
127:     setLoading(true);
128:     const fullPhoneNumber = `+27${form.phone}`;
129:     try {
130:       const client = await upsertClientByPhone(fullPhoneNumber, {
131:         userName: form.userName,
132:         businessName: form.businessName || undefined,
133:         email: form.email || undefined,
134:         serviceId: finalServiceId,
135:       });
136: 
137:       toast.success('Information saved');
138:       onSuccess(client);
139:     } catch (err) {
140:       console.error(err);
141:       toast.error('Failed to save information');
142:     } finally {
143:       setLoading(false);
144:     }
145:   };
146: 
147:   return (
148:     <div className="space-y-6 p-6 bg-slate-900/70 rounded-xl border border-slate-700 shadow-2xl">
149:       <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
150: 
151:       <div className="space-y-4">
152:         {}
153:         <div className="space-y-2">
154:           <label className="text-sm font-semibold text-slate-400 ml-1">Phone Number</label>
155:           <div className="relative">
156:             <PhoneNumberInput
157:               name="phone"
158:               id="client-phone"
159:               value={form.phone}
160:               onPhoneNumberChange={handlePhoneChange}
161:               placeholder="71 234 5678"
162:             />
163:             <div className="absolute right-3 top-1/2 -translate-y-1/2">
164:               <AnimatePresence mode="wait">
165:                 {userState === 'checking' && (
166:                   <motion.div key="checking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
167:                     <Loader2 className="w-5 h-5 text-brand-primary animate-spin" />
168:                   </motion.div>
169:                 )}
170:                 {userState === 'found' && (
171:                   <motion.div key="found" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
172:                     <CheckCircle2 className="w-5 h-5 text-brand-primary" />
173:                   </motion.div>
174:                 )}
175:               </AnimatePresence>
176:             </div>
177:           </div>
178:         </div>
179: 
180:         <AnimatePresence>
181:           {userState === 'found' && (
182:             <motion.div
183:               initial={{ opacity: 0, y: -10 }}
184:               animate={{ opacity: 1, y: 0 }}
185:               className="bg-brand-primary/10 border border-brand-primary/20 rounded-lg p-4 flex items-center gap-3"
186:             >
187:               <User className="text-brand-primary w-6 h-6" />
188:               <div>
189:                 <p className="text-sm text-brand-primary font-medium">Welcome back, <span className="font-bold text-white">{form.userName}</span>!</p>
190:                 <p className="text-xs text-slate-400">Connecting you now...</p>
191:               </div>
192:             </motion.div>
193:           )}
194: 
195:           {userState === 'new' && (
196:             <motion.form
197:               key="new-client-form"
198:               initial={{ height: 0, opacity: 0 }}
199:               animate={{ height: 'auto', opacity: 1 }}
200:               exit={{ height: 0, opacity: 0 }}
201:               onSubmit={handleSubmit}
202:               className="space-y-4 overflow-hidden pt-2"
203:             >
204:               <div className="flex items-center gap-2 mb-2 p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
205:                 <UserPlus className="text-blue-400 w-4 h-4" />
206:                 <span className="text-xs text-blue-300 font-medium">We don't recognize this number. Please introduce yourself:</span>
207:               </div>
208: 
209:               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
210:                 <div className="space-y-2">
211:                   <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
212:                   <input
213:                     type="text"
214:                     name="userName"
215:                     value={form.userName}
216:                     onChange={handleChange}
217:                     placeholder="John Doe"
218:                     required
219:                     className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition outline-none"
220:                   />
221:                 </div>
222:                 <div className="space-y-2">
223:                   <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
224:                   <input
225:                     type="email"
226:                     name="email"
227:                     value={form.email}
228:                     onChange={handleChange}
229:                     placeholder="email@example.com"
230:                     className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition outline-none"
231:                   />
232:                 </div>
233: 
234:                 {!serviceId && services.length > 0 && (
235:                   <div className="md:col-span-2 space-y-2">
236:                     <label className="text-sm font-semibold text-slate-400 ml-1">Service Interested In</label>
237:                     <div className="relative">
238:                       <select
239:                         name="serviceId"
240:                         value={selectedServiceId || ''}
241:                         onChange={handleChange}
242:                         required
243:                         className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition outline-none appearance-none"
244:                       >
245:                         <option value="">Select a service</option>
246:                         {services.map((s) => (
247:                           <option key={s.id} value={s.id}>
248:                             {s.title} ({s.price})
249:                           </option>
250:                         ))}
251:                       </select>
252:                       <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
253:                         <Briefcase size={16} />
254:                       </div>
255:                     </div>
256:                   </div>
257:                 )}
258: 
259:                 <div className="md:col-span-2 space-y-2">
260:                   <label className="text-sm font-semibold text-slate-400 ml-1">Business Name (Optional)</label>
261:                   <input
262:                     type="text"
263:                     name="businessName"
264:                     value={form.businessName}
265:                     onChange={handleChange}
266:                     placeholder="Acme Ltd."
267:                     className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition outline-none"
268:                   />
269:                 </div>
270:               </div>
271: 
272:               <button
273:                 type="submit"
274:                 disabled={loading}
275:                 className="w-full bg-brand-primary hover:bg-brand-primary/80 text-brand-dark font-black py-3 rounded-lg transition disabled:opacity-50 mt-4 shadow-lg shadow-brand-primary/20"
276:               >
277:                 {loading ? <Loader2 className="animate-spin w-5 h-5 inline-block mr-2" /> : null}
278:                 {loading ? 'Saving...' : 'Save & Continue'}
279:               </button>
280:             </motion.form>
281:           )}
282:         </AnimatePresence>
283:       </div>
284:     </div>
285:   );
286: }
````

## File: apps/client/app/blog/[slug]/components/CommentsSection.tsx
````typescript
  1: 'use client';
  2: 
  3: import React, { useState, useEffect } from 'react';
  4: import {
  5:   getCommentsByBlogId,
  6:   createComment,
  7: } from '@malalang/shared/services/comments';
  8: import { BlogComment, Client } from '@malalang/shared/types';
  9: import AddClient from '@/app/_components/AddClient';
 10: import { MessageSquare, Clock, User as UserIcon } from 'lucide-react';
 11: import { toast } from "sonner";
 12: 
 13: interface CommentsSectionProps {
 14:   blogId: string;
 15: }
 16: 
 17: const CommentsSection: React.FC<CommentsSectionProps> = ({ blogId }) => {
 18:   const [comments, setComments] = useState<BlogComment[]>([]);
 19:   const [activeClient, setActiveClient] = useState<Client | null>(null);
 20:   const [commentContent, setCommentContent] = useState('');
 21:   const [isSubmitting, setIsSubmitting] = useState(false);
 22:   const [isLoadingComments, setIsLoadingComments] = useState(true);
 23:   const [error, setError] = useState<string | null>(null);
 24: 
 25:   // 1. Fetch comments
 26:   useEffect(() => {
 27:     const fetchComments = async () => {
 28:       try {
 29:         const data = await getCommentsByBlogId(blogId);
 30:         setComments(data);
 31:       } catch (err) {
 32:         console.error("Supabase load error:", err);
 33:         setError("Could not load comments. Please try again later.");
 34:       } finally {
 35:         setIsLoadingComments(false);
 36:       }
 37:     };
 38: 
 39:     fetchComments();
 40:   }, [blogId]);
 41: 
 42:   const handleClientIdentified = (client: Client) => {
 43:     setActiveClient(client);
 44:   };
 45: 
 46:   const handleSubmit = async (e: React.FormEvent) => {
 47:     e.preventDefault();
 48:     if (!activeClient || !commentContent) return;
 49: 
 50:     setIsSubmitting(true);
 51: 
 52:     try {
 53:       // 2. Add the comment
 54:       await createComment({
 55:         blogId: blogId,
 56:         userId: activeClient.id,
 57:         email: activeClient.email,
 58:         phone: activeClient.phone,
 59:         content: commentContent,
 60:       });
 61: 
 62:       // Refresh comments
 63:       const updatedComments = await getCommentsByBlogId(blogId);
 64:       setComments(updatedComments);
 65: 
 66:       setCommentContent('');
 67:       toast.success("Comment posted successfully!");
 68:     } catch (err) {
 69:       console.error("Error posting comment:", err);
 70:       toast.error("Failed to post comment. Please try again.");
 71:     } finally {
 72:       setIsSubmitting(false);
 73:     }
 74:   };
 75: 
 76:   return (
 77:     <div className="mt-16 border-t border-slate-800 pt-12">
 78:       <div className="flex items-center gap-3 mb-8">
 79:         <MessageSquare className="text-brand-primary w-8 h-8" />
 80:         <h2 className="text-3xl font-bold text-white">Discussion ({comments.length})</h2>
 81:       </div>
 82: 
 83:       <div className="grid grid-cols-1 gap-8 mb-12">
 84:         {!activeClient ? (
 85:           <AddClient
 86:             onSuccess={handleClientIdentified}
 87:             title="Identify yourself to join the discussion"
 88:           />
 89:         ) : (
 90:           <div className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl overflow-hidden">
 91:             <div className="flex justify-between items-center mb-6">
 92:                <div className="flex items-center gap-3">
 93:                   <div className="bg-brand-primary/10 p-2 rounded-full">
 94:                     <UserIcon className="text-brand-primary w-5 h-5" />
 95:                   </div>
 96:                   <h3 className="text-xl font-bold text-white">Posting as {activeClient.userName}</h3>
 97:                </div>
 98:                <button
 99:                 onClick={() => setActiveClient(null)}
100:                 className="text-xs text-slate-500 hover:text-brand-primary underline"
101:                >
102:                  Switch Account
103:                </button>
104:             </div>
105: 
106:             <form onSubmit={handleSubmit} className="space-y-6">
107:               <div className="space-y-2">
108:                 <label className="text-sm font-semibold text-slate-400 ml-1">Your Message</label>
109:                 <textarea
110:                   value={commentContent}
111:                   onChange={(e) => setCommentContent(e.target.value)}
112:                   placeholder="What are your thoughts?"
113:                   rows={4}
114:                   required
115:                   className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-300 outline-none resize-none"
116:                 ></textarea>
117:               </div>
118: 
119:               <div className="text-right">
120:                 <button
121:                   type="submit"
122:                   disabled={isSubmitting || !commentContent}
123:                   className="bg-brand-primary hover:bg-brand-primary/80 text-brand-dark font-bold py-3 px-10 rounded-lg text-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/20"
124:                 >
125:                   {isSubmitting ? 'Posting...' : 'Post Comment'}
126:                 </button>
127:               </div>
128:             </form>
129:           </div>
130:         )}
131:       </div>
132: 
133:       {}
134:       <div className="space-y-8">
135:         {isLoadingComments ? (
136:           <div className="flex flex-col items-center justify-center py-20 gap-4">
137:             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
138:             <p className="text-slate-500 font-medium animate-pulse">Loading discussion...</p>
139:           </div>
140:         ) : comments.length > 0 ? (
141:           comments.map((comment) => (
142:             <div key={comment.id} className="bg-slate-800/30 rounded-2xl p-6 border border-slate-800 group hover:border-slate-700 transition-all duration-300">
143:               <div className="flex justify-between items-start mb-4">
144:                 <div className="flex items-center gap-3">
145:                   <div className="bg-brand-primary/10 p-2 rounded-full">
146:                     <UserIcon className="text-brand-primary w-5 h-5" />
147:                   </div>
148:                   <div>
149:                     <h4 className="text-white font-bold">{comment.userName || 'Anonymous'}</h4>
150:                     <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
151:                       <Clock className="w-3 h-3" />
152:                       <span>
153:                         {typeof comment.createdAt === 'string'
154:                           ? new Date(comment.createdAt).toLocaleDateString('en-ZA', {
155:                               year: 'numeric',
156:                               month: 'long',
157:                               day: 'numeric',
158:                               hour: '2-digit',
159:                               minute: '2-digit'
160:                             })
161:                           : 'Just now'}
162:                       </span>
163:                     </div>
164:                   </div>
165:                 </div>
166:               </div>
167:               <p className="text-slate-300 leading-relaxed pl-12">
168:                 {comment.content}
169:               </p>
170:             </div>
171:           ))
172:         ) : (
173:           <div className="text-center py-12 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
174:             <p className="text-slate-500">No comments yet. Be the first to share your thoughts!</p>
175:           </div>
176:         )}
177:       </div>
178:     </div>
179:   );
180: };
181: 
182: export default CommentsSection;
````

## File: apps/client/app/tools/page.tsx
````typescript
  1: import React from 'react';
  2: import { Metadata } from 'next';
  3: import Link from 'next/link';
  4: import { Palette, QrCode, Video, ArrowRight, Mic } from 'lucide-react';
  5: import HeroBackground from '@/app/_components/HeroBackground';
  6: import { SITE_URL, TWITTER_CREATOR, OG_IMAGE_DEFAULT } from '@/app/_lib/constants/site';
  7: 
  8: export const metadata: Metadata = {
  9:   title: 'Digital Growth Tools | Malalang',
 10:   description: 'Free utility tools to help local businesses grow. Color palette generator, AI script creator, QR code generator, and meeting tool.',
 11:   alternates: {
 12:     canonical: `${SITE_URL}/tools`,
 13:   },
 14:   openGraph: {
 15:     title: 'Digital Growth Tools | Malalang',
 16:     description: 'Free utility tools for local businesses.',
 17:     url: `${SITE_URL}/tools`,
 18:     images: [{ url: OG_IMAGE_DEFAULT }],
 19:   },
 20:   twitter: {
 21:     card: 'summary_large_image',
 22:     title: 'Digital Growth Tools | Malalang',
 23:     creator: TWITTER_CREATOR,
 24:   },
 25: };
 26: 
 27: const tools = [
 28:   {
 29:     title: 'Color Palette Generator',
 30:     description: 'Extract beautiful color schemes from your images for branding and design inspiration.',
 31:     icon: <Palette className="w-8 h-8 text-brand-primary" />,
 32:     href: '/tools/color-palette-generator',
 33:     color: 'bg-emerald-500/10',
 34:   },
 35:   {
 36:     title: 'AI Script Creator',
 37:     description: 'Create engaging video scripts and previews powered by AI for your marketing campaigns.',
 38:     icon: <Video className="w-8 h-8 text-blue-500" />,
 39:     href: '/tools/create-script',
 40:     color: 'bg-blue-500/10',
 41:   },
 42:   {
 43:     title: 'QR Code Generator',
 44:     description: 'Generate custom QR codes with your brand logo to connect with your customers offline.',
 45:     icon: <QrCode className="w-8 h-8 text-purple-500" />,
 46:     href: '/tools/QRCodeGenerator',
 47:     color: 'bg-purple-500/10',
 48:   },
 49:   {
 50:     title: 'Meetings',
 51:     description: 'Launch or join secure video meetings for your project discussions.',
 52:     icon: <Mic className="w-8 h-8 text-amber-500" />,
 53:     href: '/tools/meetings',
 54:     color: 'bg-amber-500/10',
 55:   },
 56: ];
 57: 
 58: export default function ToolsDashboard() {
 59:   return (
 60:     <main>
 61:       <section className="circuit-bg relative overflow-hidden py-24 md:py-32 text-center">
 62:         <HeroBackground />
 63:         <div className="container mx-auto px-6 relative z-10">
 64:           <div className="text-center mb-12">
 65:             <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
 66:               Digital Growth <span className="text-brand-primary glow-green">Tools</span>
 67:             </h1>
 68:             <p className="text-xl text-blue-300 font-semibold max-w-3xl mx-auto">
 69:               Free utility tools designed to help you build a professional brand and streamline your content creation.
 70:             </p>
 71:           </div>
 72:         </div>
 73:       </section>
 74: 
 75:       <section className="py-16 bg-background">
 76:         <div className="container mx-auto px-6">
 77:           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
 78:             {tools.map((tool) => (
 79:               <Link
 80:                 key={tool.title}
 81:                 href={tool.href}
 82:                 className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-brand-primary/50 transition-all duration-300 flex flex-col h-full shadow-xl hover:shadow-brand-primary/10"
 83:               >
 84:                 <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
 85:                   {tool.icon}
 86:                 </div>
 87:                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
 88:                   {tool.title}
 89:                 </h3>
 90:                 <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
 91:                   {tool.description}
 92:                 </p>
 93:                 <div className="flex items-center text-brand-primary font-bold">
 94:                   Open Tool <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
 95:                 </div>
 96:               </Link>
 97:             ))}
 98:           </div>
 99:         </div>
100:       </section>
101:     </main>
102:   );
103: }
````

## File: apps/admin/app/login/page.tsx
````typescript
 1: "use client";
 2: 
 3: import { useState } from "react";
 4: import { createSupabaseBrowserClient } from "@malalang/shared/supabase";
 5: import { useRouter } from "next/navigation";
 6: 
 7: export default function LoginPage() {
 8:   const [email, setEmail] = useState("");
 9:   const [password, setPassword] = useState("");
10:   const [loading, setLoading] = useState(false);
11:   const [error, setError] = useState<string | null>(null);
12:   const router = useRouter();
13:   const supabase = createSupabaseBrowserClient();
14: 
15:   const handleLogin = async (e: React.FormEvent) => {
16:     e.preventDefault();
17:     setLoading(true);
18:     setError(null);
19:     console.log('[Login Page] Attempting sign-in for:', email);
20: 
21:     const { error, data } = await supabase.auth.signInWithPassword({
22:       email,
23:       password,
24:     });
25: 
26:     if (error) {
27:       console.error('[Login Page] Sign-in error:', error.message);
28:       setError(error.message);
29:       setLoading(false);
30:     } else {
31:       console.log('[Login Page] Sign-in successful:', data);
32:       router.push("/");
33:       router.refresh();
34:     }
35:   };
36: 
37:   return (
38:     <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
39:       <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
40:         <div className="text-center mb-8">
41:           <h1 className="text-3xl font-bold text-gray-900">Malalang Admin</h1>
42:           <p className="text-gray-500 mt-2">Sign in to manage your website</p>
43:         </div>
44: 
45:         <form onSubmit={handleLogin} className="space-y-6">
46:           {error && (
47:             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
48:               {error}
49:             </div>
50:           )}
51: 
52:           <div>
53:             <label className="block text-sm font-medium text-gray-700 mb-1">
54:               Email Address
55:             </label>
56:             <input
57:               type="email"
58:               required
59:               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
60:               placeholder="admin@malalang.co.za"
61:               value={email}
62:               onChange={(e) => setEmail(e.target.value)}
63:             />
64:           </div>
65: 
66:           <div>
67:             <label className="block text-sm font-medium text-gray-700 mb-1">
68:               Password
69:             </label>
70:             <input
71:               type="password"
72:               required
73:               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
74:               placeholder="••••••••"
75:               value={password}
76:               onChange={(e) => setPassword(e.target.value)}
77:             />
78:           </div>
79: 
80:           <button
81:             type="submit"
82:             disabled={loading}
83:             className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-emerald-200 transition-all disabled:opacity-50"
84:           >
85:             {loading ? "Signing in..." : "Sign In"}
86:           </button>
87:         </form>
88:       </div>
89:     </div>
90:   );
91: }
````

## File: apps/admin/app/services/page.tsx
````typescript
  1: "use client";
  2: 
  3: import { useEffect, useState } from "react";
  4: import {
  5:   updateServiceAction,
  6:   deleteServiceAction,
  7:   createServiceAction
  8: } from "@/app/_lib/actions";
  9: import { getServices } from "@malalang/shared/services/services";
 10: import type { ServiceDoc } from "@malalang/shared/types";
 11: import Link from "next/link";
 12: import { Edit, Trash2, Plus, ToggleRight, ToggleLeft } from "lucide-react";
 13: import ConfirmDialog from "@/app/_components/ConfirmDialog";
 14: 
 15: const SEED_PACKAGES = [
 16: 
 17:   { title: "Landing Page", price: "R1,000", category: "Website Design", description: "A focused single-page website to convert visitors for a specific campaign or goal.", active: true },
 18:   { title: "Base Package", price: "R1,500", category: "Website Design", description: "A professional 5-page website, perfect for a strong and comprehensive online presence.", active: true },
 19:   { title: "Standard Package", price: "R2,500", category: "Website Design", description: "A complete, custom-designed online presence with advanced features.", active: true },
 20:   { title: "E-commerce Package", price: "From R5,000", category: "Website Design", description: "A fully functional online store to sell your products.", active: true },
 21:   { title: "Local Visibility Starter", price: "R2,000", category: "Website Design", description: "The Base Package plus all the tools needed to rank locally.", active: true },
 22:   { title: ".co.za Domain", price: "R200/year", category: "Domain Registration", description: "A trusted South African domain with full ownership transfer and DNS setup.", active: true },
 23:   { title: ".com Domain", price: "R250/year", category: "Domain Registration", description: "The globally recognised domain extension with full ownership transfer.", active: true },
 24:   { title: "Domain + Full Setup", price: "R500 once-off", category: "Domain Registration", description: "Domain registration plus complete DNS, email forwarding, and handover.", active: true },
 25:   { title: "Starter Email", price: "R99/month", category: "Email Hosting", description: "One professional business email address for a sole trader or small business.", active: true },
 26:   { title: "Business Email", price: "R199/month", category: "Email Hosting", description: "Up to 5 professional mailboxes for your growing team.", active: true },
 27:   { title: "Enterprise Email", price: "R399/month", category: "Email Hosting", description: "Unlimited mailboxes, 25 GB per box, archiving, and priority support.", active: true },
 28:   { title: "Flyer / Poster", price: "R300", category: "Graphic Design", description: "A professionally designed A5 or A4 flyer or poster for print or digital.", active: true },
 29:   { title: "Business Card Set", price: "R500", category: "Graphic Design", description: "A professional double-sided business card design — print-ready.", active: true },
 30:   { title: "Social Media Kit", price: "R800", category: "Graphic Design", description: "A full set of branded social media assets — profile, cover, and 5 post templates.", active: true },
 31:   { title: "Full Brand Identity", price: "R1,500", category: "Graphic Design", description: "Logo, colour palette, typography, and stationery — everything to launch a brand.", active: true },
 32: ];
 33: 
 34: const CATEGORY_COLORS: Record<string, string> = {
 35:   "Website Design": "bg-green-100 text-green-800",
 36:   "Domain Registration": "bg-blue-100 text-blue-800",
 37:   "Email Hosting": "bg-purple-100 text-purple-800",
 38:   "Graphic Design": "bg-orange-100 text-orange-800",
 39: };
 40: 
 41: export default function ServicesPage() {
 42:   const [services, setServices] = useState<ServiceDoc[]>([]);
 43:   const [loading, setLoading] = useState(true);
 44:   const [seeding, setSeeding] = useState(false);
 45:   const [seedDone, setSeedDone] = useState(false);
 46:   const [error, setError] = useState<string | null>(null);
 47:   const [deleteId, setDeleteId] = useState<string | null>(null);
 48:   const [deleting, setDeleting] = useState(false);
 49: 
 50:   const fetchServices = async () => {
 51:     setLoading(true);
 52:     setError(null);
 53:     try {
 54:       const data = await getServices();
 55:       setServices(data);
 56:     } catch (e: any) {
 57:       setError(e.message ?? "Failed to load services.");
 58:     } finally {
 59:       setLoading(false);
 60:     }
 61:   };
 62: 
 63:   useEffect(() => {
 64:     fetchServices();
 65:   }, []);
 66: 
 67:   const handleSeed = async () => {
 68:     if (!confirm(`This will add ${SEED_PACKAGES.length} packages to Supabase. Continue?`)) return;
 69:     setSeeding(true);
 70:     setError(null);
 71:     try {
 72:       for (const pkg of SEED_PACKAGES) {
 73:         await createServiceAction(pkg as any);
 74:       }
 75:       setSeedDone(true);
 76:       await fetchServices();
 77:     } catch (e: any) {
 78:       setError(e.message ?? "Seed failed.");
 79:     } finally {
 80:       setSeeding(false);
 81:     }
 82:   };
 83: 
 84:   const handleToggleActive = async (id: string | undefined, current: boolean | undefined) => {
 85:     if (!id) return;
 86:     const isActive = !!current;
 87:     try {
 88:       const res = await updateServiceAction(id, { active: !isActive });
 89:       if (res.success) {
 90:         setServices((prev) =>
 91:           prev.map((s) => (s.id === id ? { ...s, active: !isActive } : s))
 92:         );
 93:       } else {
 94:         setError(res.error);
 95:       }
 96:     } catch (e: any) {
 97:       setError(e.message);
 98:     }
 99:   };
100: 
101:   const handleDelete = async () => {
102:     if (!deleteId) return;
103:     setDeleting(true);
104:     try {
105:       const res = await deleteServiceAction(deleteId);
106:       if (res.success) {
107:         setServices((prev) => prev.filter((s) => s.id !== deleteId));
108:         setDeleteId(null);
109:       } else {
110:         setError(res.error);
111:       }
112:     } catch (e: any) {
113:       setError(e.message);
114:     } finally {
115:       setDeleting(false);
116:     }
117:   };
118: 
119:   const grouped = services.reduce<Record<string, ServiceDoc[]>>((acc, s) => {
120:     const cat = s.category || "Uncategorised";
121:     if (!acc[cat]) acc[cat] = [];
122:     acc[cat].push(s);
123:     return acc;
124:   }, {});
125: 
126:   return (
127:     <div>
128:       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
129:         <div>
130:           <h1 className="text-2xl font-bold text-gray-900">Services</h1>
131:           <p className="text-gray-500 text-sm mt-1">Manage your service packages across all categories.</p>
132:         </div>
133:         <div className="flex gap-3 flex-wrap">
134:           <Link
135:             href="/services/create"
136:             className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
137:           >
138:             <Plus size={16} />
139:             New Service
140:           </Link>
141:           {services.length === 0 && !loading && (
142:             <button
143:               onClick={handleSeed}
144:               disabled={seeding || seedDone}
145:               className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
146:             >
147:               {seeding ? "Seeding…" : seedDone ? "Done ✓" : `Seed ${SEED_PACKAGES.length} Packages`}
148:             </button>
149:           )}
150:           <button
151:             onClick={fetchServices}
152:             className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
153:           >
154:             Refresh
155:           </button>
156:         </div>
157:       </div>
158: 
159:       {error && (
160:         <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-sm text-red-700">
161:           {error}
162:         </div>
163:       )}
164: 
165:       {loading ? (
166:         <div className="text-center py-20 text-gray-400 text-sm">Loading services…</div>
167:       ) : services.length === 0 ? (
168:         <div className="bg-white rounded-xl border border-gray-200 p-10 text-center shadow-sm">
169:           <p className="text-gray-700 font-semibold mb-1">No services in Supabase yet.</p>
170:           <p className="text-gray-400 text-sm mb-4">
171:             Click <strong>Seed Packages</strong> to push your full catalogue or{" "}
172:             <strong>New Service</strong> to create one manually.
173:           </p>
174:           <div className="flex gap-3 justify-center">
175:             <Link
176:               href="/services/create"
177:               className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg text-sm"
178:             >
179:               <Plus size={16} />
180:               Create Service
181:             </Link>
182:             {!seedDone && (
183:               <button
184:                 onClick={handleSeed}
185:                 disabled={seeding}
186:                 className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg text-sm"
187:               >
188:                 Seed Packages
189:               </button>
190:             )}
191:           </div>
192:         </div>
193:       ) : (
194:         <div className="space-y-8">
195:           {Object.entries(grouped).map(([category, pkgs]) => (
196:             <div key={category}>
197:               <div className="flex items-center gap-3 mb-3">
198:                 <h2 className="text-base font-bold text-gray-800">{category}</h2>
199:                 <span
200:                   className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
201:                     CATEGORY_COLORS[category] ?? "bg-gray-100 text-gray-600"
202:                   }`}
203:                 >
204:                   {pkgs.length}
205:                 </span>
206:               </div>
207:               <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
208:                 <table className="w-full text-sm">
209:                   <thead className="bg-gray-50 border-b border-gray-200">
210:                     <tr>
211:                       <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
212:                         Package
213:                       </th>
214:                       <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
215:                         Price
216:                       </th>
217:                       <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">
218:                         Description
219:                       </th>
220:                       <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
221:                         Status
222:                       </th>
223:                       <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
224:                         Actions
225:                       </th>
226:                     </tr>
227:                   </thead>
228:                   <tbody className="divide-y divide-gray-100">
229:                     {pkgs.map((svc) => (
230:                       <tr key={svc.id} className="hover:bg-gray-50 transition-colors">
231:                         <td className="px-5 py-3 font-semibold text-gray-900 whitespace-nowrap">
232:                           {svc.title}
233:                         </td>
234:                         <td className="px-5 py-3 text-gray-700 font-mono text-xs whitespace-nowrap">
235:                           {svc.price}
236:                         </td>
237:                         <td className="px-5 py-3 text-gray-500 hidden md:table-cell max-w-xs">
238:                           <span className="line-clamp-1">{svc.description}</span>
239:                         </td>
240:                         <td className="px-5 py-3">
241:                           <button
242:                             onClick={() => handleToggleActive(svc.id, svc.active)}
243:                             className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
244:                               svc.active
245:                                 ? "bg-green-100 text-green-700 hover:bg-green-200"
246:                                 : "bg-gray-100 text-gray-500 hover:bg-gray-200"
247:                             }`}
248:                           >
249:                             {svc.active ? (
250:                               <ToggleRight size={14} />
251:                             ) : (
252:                               <ToggleLeft size={14} />
253:                             )}
254:                             {svc.active ? "Active" : "Hidden"}
255:                           </button>
256:                         </td>
257:                         <td className="px-5 py-3">
258:                           <div className="flex items-center gap-2">
259:                             <Link
260:                               href={`/services/${svc.id}`}
261:                               className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 p-1 rounded"
262:                               title="Edit service"
263:                             >
264:                               <Edit size={16} />
265:                               <span className="sr-only">Edit</span>
266:                             </Link>
267:                             <button
268:                               onClick={() => setDeleteId(svc.id || null)}
269:                               className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 p-1 rounded"
270:                               title="Delete service"
271:                             >
272:                               <Trash2 size={16} />
273:                               <span className="sr-only">Delete</span>
274:                             </button>
275:                           </div>
276:                         </td>
277:                       </tr>
278:                     ))}
279:                   </tbody>
280:                 </table>
281:               </div>
282:             </div>
283:           ))}
284:         </div>
285:       )}
286: 
287:       <ConfirmDialog
288:         isOpen={deleteId !== null}
289:         title="Delete Service"
290:         message="Are you sure you want to delete this service package? This action cannot be undone."
291:         onConfirm={handleDelete}
292:         onCancel={() => setDeleteId(null)}
293:         isLoading={deleting}
294:       />
295:     </div>
296:   );
297: }
````

## File: apps/client/app/_components/MeetingWrapper.tsx
````typescript
  1: "use client";
  2: 
  3: import React, { useEffect, useState } from 'react';
  4: import { useRouter } from 'next/navigation';
  5: import {
  6:     StreamVideo,
  7:     StreamVideoClient,
  8:     StreamCall,
  9:     CallControls,
 10:     StreamTheme,
 11:     Call,
 12:     useCallStateHooks,
 13:     ParticipantView,
 14:     StreamVideoParticipant,
 15:     hasScreenShare,
 16: } from "@stream-io/video-react-sdk";
 17: import "@stream-io/video-react-sdk/dist/css/styles.css";
 18: import { Chat, Channel, ChannelHeader, MessageList, MessageComposer, Window } from "stream-chat-react";
 19: import "stream-chat-react/dist/css/index.css";
 20: import { useCreateChatClient } from "@malalang/shared/hooks/useCreateChatClient";
 21: import { AlertCircle, Loader2 } from 'lucide-react';
 22: import HeroBackground from './HeroBackground';
 23: 
 24: interface MeetingWrapperProps {
 25:     callId: string;
 26:     userName: string;
 27:     userId: string;
 28: }
 29: 
 30: 
 31: const MeetingLayout = ({ onLeave }: { onLeave: () => void }) => {
 32:     const { useParticipants } = useCallStateHooks();
 33:     const participants = useParticipants() as StreamVideoParticipant[];
 34: 
 35: 
 36:     const screenSharer = participants.find((p) => hasScreenShare(p));
 37: 
 38: 
 39:     const cols = participants.length <= 1 ? 1 : participants.length <= 4 ? 2 : 3;
 40: 
 41:     return (
 42:         <div className="flex flex-col h-full">
 43:             <div className="flex-1 overflow-hidden min-h-0">
 44:                 {screenSharer ? (
 45: 
 46:                     <div style={{ display: 'flex', height: '100%', backgroundColor: '#070E1A' }}>
 47:                         <div style={{ flex: 1, minWidth: 0 }}>
 48:                             <ParticipantView participant={screenSharer} trackType="screenShareTrack" />
 49:                         </div>
 50:                         <div style={{
 51:                             width: '164px',
 52:                             display: 'flex',
 53:                             flexDirection: 'column',
 54:                             gap: '6px',
 55:                             padding: '8px',
 56:                             overflowY: 'auto',
 57:                             backgroundColor: 'rgba(0,0,0,0.75)',
 58:                             borderLeft: '1px solid rgba(0,210,106,0.15)',
 59:                         }}>
 60:                             {participants.map((p) => (
 61:                                 <div key={p.sessionId} style={{
 62:                                     height: '110px',
 63:                                     borderRadius: '10px',
 64:                                     overflow: 'hidden',
 65:                                     flexShrink: 0,
 66:                                     border: '1px solid rgba(255,255,255,0.07)',
 67:                                 }}>
 68:                                     <ParticipantView participant={p} trackType="videoTrack" />
 69:                                 </div>
 70:                             ))}
 71:                         </div>
 72:                     </div>
 73:                 ) : (
 74: 
 75:                     <div style={{
 76:                         display: 'grid',
 77:                         gridTemplateColumns: `repeat(${cols}, 1fr)`,
 78:                         gap: '6px',
 79:                         padding: '6px',
 80:                         height: '100%',
 81:                         backgroundColor: '#000',
 82:                         boxSizing: 'border-box',
 83:                     }}>
 84:                         {participants.map((p) => (
 85:                             <div key={p.sessionId} style={{
 86:                                 borderRadius: '12px',
 87:                                 overflow: 'hidden',
 88:                                 minHeight: 0,
 89:                                 position: 'relative',
 90:                                 border: '1px solid rgba(255,255,255,0.06)',
 91:                             }}>
 92:                                 <ParticipantView participant={p} trackType="videoTrack" />
 93:                             </div>
 94:                         ))}
 95:                     </div>
 96:                 )}
 97:             </div>
 98: 
 99:             {}
100:             <CallControls onLeave={onLeave} />
101:         </div>
102:     );
103: };
104: 
105: 
106: const VIDEO_STYLES = `
107:   .str-video {
108:     --str-video__primary-color:       #00D26A;
109:     --str-video__secondary-color:     #3B82F6;
110:     --str-video__text-color1:         #F1F5F9;
111:     --str-video__text-color2:         #CBD5E1;
112:     --str-video__background-color:    #070E1A;
113:     --str-video__active-video-border: 2px solid #00D26A;
114:   }
115:   .str-video.dark {
116:     --str-video__background-color: #000000;
117:     --str-video__surface-color:    #0C1E3A;
118:     --str-video__border-radius-sm: 12px;
119:     --str-video__border-radius-md: 20px;
120:   }
121:   .str-video__call-controls {
122:     background:      rgba(7,14,26,0.92) !important;
123:     backdrop-filter: blur(16px)         !important;
124:     border-top:      1px solid rgba(0,210,106,0.18) !important;
125:     padding:         18px 24px          !important;
126:     gap:             12px               !important;
127:   }
128:   .str-video__call-controls__button {
129:     background:    rgba(30,58,95,0.8) !important;
130:     border:        1px solid rgba(255,255,255,0.12) !important;
131:     box-shadow:    0 4px 14px rgba(0,0,0,0.3) !important;
132:     border-radius: 14px !important;
133:     transition:    all 0.18s ease !important;
134:     color:         #F1F5F9 !important;
135:   }
136:   .str-video__call-controls__button svg {
137:     color:  #00D26A !important;
138:     stroke: #00D26A !important;
139:   }
140:   .str-video__call-controls__button:hover {
141:     background:   #00D26A    !important;
142:     border-color: transparent !important;
143:     transform:    translateY(-2px) !important;
144:     box-shadow:   0 8px 24px rgba(0,210,106,0.4) !important;
145:   }
146:   .str-video__call-controls__button:hover svg {
147:     color:  #070E1A !important;
148:     stroke: #070E1A !important;
149:   }
150:   .str-video__hang-up-call-button,
151:   .str-video__hang-up-call-button:hover {
152:     background:   #EF4444 !important;
153:     border-color: transparent !important;
154:     box-shadow:   0 8px 20px rgba(239,68,68,0.4) !important;
155:   }
156:   .str-video__hang-up-call-button svg {
157:     color:  #fff !important;
158:     stroke: #fff !important;
159:   }
160:   .str-video__call-controls__button--active {
161:     background:   rgba(0,210,106,0.18) !important;
162:     border-color: rgba(0,210,106,0.4)  !important;
163:   }
164:   .str-video__participant-details,
165:   .str-video__participant-details * {
166:     color:       #F1F5F9 !important;
167:     text-shadow: 0 1px 6px rgba(0,0,0,0.95) !important;
168:     font-weight: 600 !important;
169:   }
170:   .str-video__participant-view--active-speaker {
171:     box-shadow: 0 0 0 2px #00D26A !important;
172:   }
173:   [class*="str-video__participant-actions"],
174:   [class*="str-video__participant-action-menu"],
175:   [class*="str-video__generic-menu"],
176:   [class*="str-video__composite-button__menu"],
177:   [class*="str-video__base-popover"],
178:   [class*="str-video__popover"] {
179:     background:    #1E293B !important;
180:     border:        1px solid rgba(255,255,255,0.14) !important;
181:     box-shadow:    0 8px 32px rgba(0,0,0,0.65) !important;
182:     border-radius: 12px !important;
183:   }
184:   [class*="str-video__participant-actions"] *,
185:   [class*="str-video__participant-action-menu"] *,
186:   [class*="str-video__generic-menu"] *,
187:   [class*="str-video__composite-button__menu"] *,
188:   [class*="str-video__base-popover"] *,
189:   [class*="str-video__popover"] * {
190:     color: #F1F5F9 !important;
191:   }
192:   [class*="str-video__participant-actions"] button:hover,
193:   [class*="str-video__participant-action-menu"] button:hover,
194:   [class*="str-video__generic-menu"] button:hover,
195:   [class*="str-video__composite-button__menu"] button:hover,
196:   [class*="str-video__base-popover"] button:hover,
197:   [class*="str-video__popover"] button:hover {
198:     background: rgba(0,210,106,0.12) !important;
199:   }
200: `;
201: 
202: 
203: export const MeetingWrapper: React.FC<MeetingWrapperProps> = ({ callId, userName, userId: initialUserId }) => {
204:     const router = useRouter();
205:     const [client, setClient] = useState<StreamVideoClient | null>(null);
206:     const [call, setCall] = useState<Call | null>(null);
207:     const [error, setError] = useState<string | null>(null);
208:     const [isInitializing, setIsInitializing] = useState(true);
209: 
210:     const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
211:     const [token, setToken] = useState("");
212: 
213:     const chatClient = useCreateChatClient({
214:         apiKey,
215:         tokenOrProvider: token,
216:         userData: { id: initialUserId, name: userName },
217:     });
218: 
219:     useEffect(() => {
220:         if (!apiKey) {
221:             setError("Stream API Key is missing.");
222:             setIsInitializing(false);
223:             return;
224:         }
225: 
226:         const initStream = async () => {
227:             try {
228:                 // Pass callId so the server can pre-add this user as a channel member
229:                 const res = await fetch(`/api/stream-token?userId=${initialUserId}&callId=${callId}`);
230:                 if (!res.ok) throw new Error("Failed to fetch stream token");
231:                 const { token: fetchedToken, userId } = await res.json();
232:                 setToken(fetchedToken);
233: 
234:                 const activeClient = new StreamVideoClient({
235:                     apiKey,
236:                     user: { id: userId, name: userName },
237:                     token: fetchedToken,
238:                 });
239: 
240:                 const videoCall = activeClient.call("default", callId);
241:                 await videoCall.join({ create: false });
242: 
243:                 setClient(activeClient);
244:                 setCall(videoCall);
245:                 setIsInitializing(false);
246:             } catch (err: any) {
247:                 setError(err.message || "Failed to connect to the meeting.");
248:                 setIsInitializing(false);
249:             }
250:         };
251: 
252:         initStream();
253:     }, [callId, initialUserId, userName, apiKey]);
254: 
255:     if (error) {
256:         return (
257:             <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden border border-white/5 bg-brand-dark flex flex-col items-center justify-center text-center p-8 text-rose-500 shadow-2xl">
258:                 <HeroBackground />
259:                 <div className="relative z-10 flex flex-col items-center">
260:                     <div className="bg-rose-500/10 p-6 rounded-full mb-6 border border-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.1)]">
261:                         <AlertCircle className="w-12 h-12" />
262:                     </div>
263:                     <h3 className="text-3xl font-black mb-3 text-white tracking-tight">System Offline</h3>
264:                     <p className="max-w-md text-slate-400 mb-10 leading-relaxed">{error}</p>
265:                     <button
266:                         onClick={() => window.location.reload()}
267:                         className="px-10 py-4 bg-brand-primary text-brand-dark font-black rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_10px_30px_rgba(0,210,106,0.3)] active:scale-95 uppercase tracking-widest text-xs"
268:                     >
269:                         Re-establish Link
270:                     </button>
271:                 </div>
272:             </div>
273:         );
274:     }
275: 
276:     if (isInitializing || !client || !call || !chatClient) {
277:         return (
278:             <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden border border-white/5 bg-brand-dark flex flex-col items-center justify-center text-center p-8 shadow-2xl">
279:                 <HeroBackground />
280:                 <div className="relative z-10 flex flex-col items-center">
281:                     <div className="relative mb-10">
282:                         <div className="absolute inset-0 bg-brand-primary/20 blur-2xl rounded-full animate-pulse" />
283:                         <div className="absolute -inset-4 border border-brand-primary/10 rounded-full animate-[ping_3s_linear_infinite]" />
284:                         <div className="absolute -inset-8 border border-brand-primary/5 rounded-full animate-[ping_5s_linear_infinite]" />
285:                         <div className="bg-brand-dark/80 backdrop-blur-sm p-8 rounded-full border border-white/5 shadow-2xl relative">
286:                             <Loader2 className="w-12 h-12 animate-spin text-brand-primary" />
287:                         </div>
288:                     </div>
289:                     <h3 className="text-3xl font-black mb-3 text-white tracking-tight glow-green">Initializing Stream</h3>
290:                     <p className="max-w-md text-slate-400 leading-relaxed">Securing encrypted connection to the Malalang network...</p>
291:                 </div>
292:             </div>
293:         );
294:     }
295: 
296:     const safeChannelId = callId.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
297: 
298:     return (
299:         <div className="flex flex-col gap-6">
300:             <style>{VIDEO_STYLES}</style>
301: 
302:             {}
303:             <div
304:                 className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
305:                 style={{ height: 'calc(100svh - 300px)', minHeight: '520px' }}
306:             >
307:                 <StreamVideo client={client}>
308:                     <StreamTheme className="dark h-full">
309:                         <StreamCall call={call}>
310:                             <MeetingLayout onLeave={() => router.push('/tools/meetings')} />
311:                         </StreamCall>
312:                     </StreamTheme>
313:                 </StreamVideo>
314:             </div>
315: 
316:             {}
317:             <style>{`
318:         /* Stream Chat brand overrides */
319:         .str-chat__container, .str-chat, .str-chat__main-panel {
320:           background: transparent !important;
321:           color: #F1F5F9 !important;
322:           font-family: inherit !important;
323:         }
324:         .str-chat__channel-header {
325:           background: rgba(0,210,106,0.06) !important;
326:           border-bottom: 1px solid rgba(0,210,106,0.15) !important;
327:           padding: 12px 20px !important;
328:         }
329:         .str-chat__channel-header-title {
330:           color: #00D26A !important;
331:           font-weight: 700 !important;
332:           letter-spacing: 0.04em !important;
333:         }
334:         .str-chat__list {
335:           background: transparent !important;
336:           padding: 16px !important;
337:         }
338:         /* Sent messages (right side) */
339:         .str-chat__message--me .str-chat__message-bubble {
340:           background: linear-gradient(135deg, #00D26A, #00b85a) !important;
341:           color: #050d18 !important;
342:           border-radius: 18px 18px 4px 18px !important;
343:           box-shadow: 0 4px 16px rgba(0,210,106,0.25) !important;
344:           font-weight: 600 !important;
345:         }
346:         /* Received messages (left side) */
347:         .str-chat__message:not(.str-chat__message--me) .str-chat__message-bubble {
348:           background: rgba(30,58,95,0.85) !important;
349:           color: #F1F5F9 !important;
350:           border-radius: 18px 18px 18px 4px !important;
351:           border: 1px solid rgba(255,255,255,0.08) !important;
352:         }
353:         /* Timestamp / meta text */
354:         .str-chat__message-metadata, .str-chat__message-data {
355:           color: #64748B !important;
356:           font-size: 11px !important;
357:         }
358:         /* Date separator */
359:         .str-chat__date-separator-date {
360:           background: rgba(0,210,106,0.08) !important;
361:           color: #00D26A !important;
362:           border-radius: 99px !important;
363:           padding: 2px 12px !important;
364:           font-size: 11px !important;
365:           font-weight: 700 !important;
366:           letter-spacing: 0.06em !important;
367:           border: 1px solid rgba(0,210,106,0.2) !important;
368:         }
369:         .str-chat__date-separator-line {
370:           border-color: rgba(0,210,106,0.1) !important;
371:         }
372:         /* Message composer */
373:         .str-chat__message-composer,
374:         [class*="str-chat__message-composer"] {
375:           background: rgba(5,13,24,0.9) !important;
376:           border-top: 1px solid rgba(0,210,106,0.15) !important;
377:           padding: 12px 16px !important;
378:         }
379:         .str-chat__message-composer-input,
380:         .str-chat__message-composer textarea,
381:         .str-chat__message-composer input {
382:           background: rgba(30,58,95,0.5) !important;
383:           border: 1px solid rgba(0,210,106,0.2) !important;
384:           border-radius: 12px !important;
385:           color: #F1F5F9 !important;
386:           padding: 10px 14px !important;
387:         }
388:         .str-chat__message-composer-input::placeholder,
389:         .str-chat__message-composer textarea::placeholder {
390:           color: #475569 !important;
391:         }
392:         .str-chat__send-button svg {
393:           fill: #00D26A !important;
394:         }
395:         .str-chat__avatar {
396:           background: linear-gradient(135deg,#00D26A,#3B82F6) !important;
397:           color: #050d18 !important;
398:           font-weight: 800 !important;
399:         }
400:         /* System / error messages */
401:         .str-chat__system-message {
402:           color: #94A3B8 !important;
403:           font-size: 11px !important;
404:         }
405:         .str-chat__error-notification {
406:           background: rgba(239,68,68,0.1) !important;
407:           border: 1px solid rgba(239,68,68,0.25) !important;
408:           border-radius: 10px !important;
409:           color: #FCA5A5 !important;
410:           padding: 10px 16px !important;
411:           font-size: 12px !important;
412:         }
413:       `}</style>
414:             <div
415:                 className="w-full min-h-[280px] rounded-3xl overflow-hidden border border-white/10 flex flex-col"
416:                 style={{ height: '35vh', background: 'linear-gradient(180deg, #0C1E3A 0%, #050d18 100%)' }}
417:             >
418:                 <Chat client={chatClient}>
419:                     <Channel channel={chatClient.channel('messaging', safeChannelId)}>
420:                         <Window>
421:                             <ChannelHeader />
422:                             <MessageList />
423:                             <MessageComposer />
424:                         </Window>
425:                     </Channel>
426:                 </Chat>
427:             </div>
428:         </div>
429:     );
430: };
````

## File: apps/client/app/api/stream-token/route.ts
````typescript
 1: import { NextResponse } from 'next/server';
 2: import { generateStreamToken, upsertStreamChatChannel } from '@malalang/shared/services/stream';
 3: import { createSupabaseServerClient } from "@malalang/shared/supabase/server";
 4: 
 5: export async function GET(request: Request) {
 6:   try {
 7:     const { searchParams } = new URL(request.url);
 8:     const requestedUserId = searchParams.get('userId');
 9:     const callId = searchParams.get('callId');
10: 
11:     const supabase = await createSupabaseServerClient();
12:     const { data: { user } } = await supabase.auth.getUser();
13: 
14:     let userId = '';
15:     let userName = 'Guest User';
16: 
17:     if (user) {
18:       userId = user.id;
19:       userName = user.user_metadata?.full_name || user.email || 'Client User';
20:     } else if (requestedUserId) {
21:       userId = requestedUserId;
22:     } else {
23:       userId = `guest-${Math.random().toString(36).substring(2, 11)}`;
24:     }
25: 
26: 
27:     const token = await generateStreamToken(userId);
28: 
29: 
30: 
31:     if (callId) {
32:       try {
33:         await upsertStreamChatChannel(callId, [{ id: userId, name: userName }]);
34:       } catch (channelErr) {
35: 
36:         console.error('[stream-token] Failed to upsert channel member:', channelErr);
37:       }
38:     }
39: 
40:     return NextResponse.json({ token, userId });
41:   } catch (error: any) {
42:     console.error('Stream Token API Error (Client):', error);
43:     return NextResponse.json({ error: error.message }, { status: 500 });
44:   }
45: }
````

## File: apps/client/app/questionnaire/components/QuestionnaireForm.tsx
````typescript
  1: "use client";
  2: 
  3: import React, { useState, useMemo, useCallback } from "react";
  4: import { createQuestionnaire } from "@malalang/shared/services/questionnaires";
  5: import ProgressBar from "./ProgressBar";
  6: import NavigationButtons from "./NavigationButtons";
  7: import ReviewStep from "./ReviewStep";
  8: import Step from "./Step";
  9: import { steps } from "./constants";
 10: import { FormData } from "./types";
 11: import { toast } from "sonner";
 12: 
 13: interface QuestionnaireFormProps {
 14:   clientData?: {
 15:     userName: string;
 16:     businessName: string;
 17:     email: string;
 18:     phone: string;
 19:     serviceId: string | null;
 20:   } | null;
 21:   cloudinaryApiKey: string;
 22:   cloudinaryCloudName: string;
 23: }
 24: 
 25: 
 26: const isValidEmail = (email: string): boolean => {
 27: 
 28:   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 29:   return emailRegex.test(email);
 30: };
 31: 
 32: export default function QuestionnaireForm({
 33:   clientData,
 34:   cloudinaryApiKey,
 35:   cloudinaryCloudName,
 36: }: QuestionnaireFormProps) {
 37:   const initialFormData = useMemo(() => {
 38:     const base: Record<string, any> = {};
 39:     steps.forEach((step) => {
 40:       step.questions.forEach((q) => {
 41:         if (q.type === "checkbox") base[q.id] = q.default ?? [];
 42:         else base[q.id] = q.default ?? "";
 43:         if (q.subQuestions) {
 44:           q.subQuestions.forEach((sq) => {
 45:             base[sq.id] = sq.default ?? "";
 46:           });
 47:         }
 48:       });
 49:     });
 50: 
 51:     if (clientData) {
 52:       base.userName = clientData.userName ?? base.userName;
 53:       base.email = clientData.email ?? base.email;
 54:       base.phone = clientData.phone ?? base.phone;
 55:       base.businessName = clientData.businessName ?? base.businessName;
 56:       base.serviceId = clientData.serviceId ?? base.serviceId;
 57:     }
 58: 
 59:     return base;
 60:   }, [clientData]);
 61: 
 62:   const [currentStep, setCurrentStep] = useState(0);
 63:   const [formData, setFormData] = useState<FormData>(initialFormData);
 64:   const [aiLoading, setAiLoading] = useState<string | null>(null);
 65:   const [isSubmitting, setIsSubmitting] = useState(false);
 66:   const [isSubmitted, setIsSubmitted] = useState(false);
 67:   const [error, setError] = useState<string | null>(null);
 68: 
 69:   const handleChange = useCallback(
 70:     (
 71:       e: React.ChangeEvent<
 72:         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
 73:       >
 74:     ) => {
 75:       const { name, value } = e.target;
 76:       setFormData((prev) => ({ ...prev, [name]: value }));
 77:     },
 78:     []
 79:   );
 80:   // This handles updates for custom components like SouthAfricanPhoneNumberInput (String Value)
 81:   const onPhoneNumberChange = useCallback((value: string) => {
 82:     setFormData((prev) => ({ ...prev, phone: value }));
 83:   }, []);
 84:   const handleCheckboxChange = useCallback(
 85:     (id: string, option: string, checked: boolean) => {
 86:       setFormData((prev) => {
 87:         const current = [...(prev[id] || [])];
 88:         if (checked) {
 89:           if (!current.includes(option)) current.push(option);
 90:         } else {
 91:           const idx = current.indexOf(option);
 92:           if (idx >= 0) current.splice(idx, 1);
 93:         }
 94:         return { ...prev, [id]: current };
 95:       });
 96:     },
 97:     [setFormData]
 98:   );
 99: 
100:   const handleFileUpload = useCallback((id: string, url: string) => {
101:     setFormData((prev) => ({ ...prev, [id]: url }));
102:   }, []);
103: 
104:   const handleNext = () => {
105:     const step = steps[currentStep];
106:     if (!step) return;
107: 
108:     // Check all required questions within the current step
109:     for (const question of step.questions) {
110:       // Assuming the 'required' property is on the Question type, not the Step type
111:       if (question.required) {
112:         const currentValue = formData[question.id];
113: 
114:         // Check if value is null/undefined or an empty string/array
115:         if (
116:           !currentValue ||
117:           (typeof currentValue === "string" && currentValue.trim() === "") ||
118:           (Array.isArray(currentValue) && currentValue.length === 0)
119:         ) {
120:           setError(
121:             `The field '${question.text}' is required and cannot be empty.`
122:           );
123:           return;
124:         }
125: 
126:         // Specific validation for email field
127:         if (question.id === "contactEmail" || question.id === "email") {
128:           if (!isValidEmail(currentValue as string)) {
129:             setError("Please enter a valid email address.");
130:             return;
131:           }
132:         }
133:       }
134:     }
135: 
136: 
137:     setError(null);
138:     setCurrentStep((prev) => prev + 1);
139:   };
140: 
141:   const handlePrev = () => {
142:     setCurrentStep((prev) => Math.max(prev - 1, 0));
143:   };
144: 
145:   const handleEdit = (stepIndex: number) => {
146:     setCurrentStep(stepIndex);
147:   };
148: 
149:   const handleEnhance = async (questionId: string, questionText: string) => {
150:     setAiLoading(questionId);
151:     try {
152:       const response = await fetch("/api/questionnaire", {
153:         method: "POST",
154:         headers: {
155:           "Content-Type": "application/json",
156:         },
157:         body: JSON.stringify({
158:           action: "enhance",
159:           payload: {
160:             question: questionText,
161:             answer: formData[questionId] || "",
162:             businessName: formData.businessName || "",
163:             userName: formData.userName || "there",
164:           },
165:         }),
166:       });
167:       const data = await response.json();
168:       setFormData((prev) => ({ ...prev, [questionId]: data.result }));
169:     } catch (error) {
170:       toast.error("Failed to enhance answer via AI.");
171:     }
172:     setAiLoading(null);
173:   };
174: 
175:   const handleSuggest = async (questionId: string, questionText: string) => {
176:     setAiLoading(questionId);
177:     try {
178:       const response = await fetch("/api/questionnaire", {
179:         method: "POST",
180:         headers: {
181:           "Content-Type": "application/json",
182:         },
183:         body: JSON.stringify({
184:           action: "suggest",
185:           payload: {
186:             question: questionText,
187:             businessName: formData.businessName || "",
188:             userName: formData.userName || "there",
189:           },
190:         }),
191:       });
192:       const data = await response.json();
193:       if (data.result) {
194:         setFormData((prev) => ({ ...prev, [questionId]: data.result }));
195:       }
196:     } catch (error) {
197:       toast.error("Failed to get suggestions from AI.");
198:     }
199:     setAiLoading(null);
200:   };
201: 
202:   const handleSubmit = async () => {
203:     setIsSubmitting(true);
204:     setError(null);
205:     try {
206:       await createQuestionnaire(formData);
207:       setIsSubmitted(true);
208:     } catch (error) {
209:       console.error("Error submitting questionnaire:", error);
210:       setError("Failed to submit questionnaire. Please try again later.");
211:     }
212:     setIsSubmitting(false);
213:   };
214: 
215:   if (isSubmitted) {
216:     return (
217:       <div className="text-center bg-background p-8 rounded-lg max-w-3xl mx-auto border border-slate-700" role="status">
218:         <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
219:           Thank you for your submission!
220:         </h2>
221:         <p className="text-slate-300 text-lg mb-6">
222:           We have received your project details and will be in touch shortly to
223:           discuss the next steps.
224:         </p>
225:       </div>
226:     );
227:   }
228: 
229:   const renderStep = () => {
230:     const step = steps[currentStep];
231:     if (!step) return null;
232: 
233:     if (step.id === "review") {
234:       return (
235:         <ReviewStep
236:           key="review-step"
237:           steps={steps}
238:           formData={formData}
239:           onEdit={handleEdit}
240:         />
241:       );
242:     }
243: 
244:     return (
245:       <Step
246:         key={step.id}
247:         cloudinaryApiKey={cloudinaryApiKey}
248:         cloudinaryCloudName={cloudinaryCloudName}
249:         step={step}
250:         formData={formData}
251:         aiLoading={aiLoading}
252:         onChange={handleChange}
253:         onPhoneNumberChange={onPhoneNumberChange}
254:         onCheckboxChange={handleCheckboxChange}
255:         onFileUpload={handleFileUpload}
256:         onEnhance={handleEnhance}
257:         onSuggest={handleSuggest}
258:       />
259:     );
260:   };
261: 
262:   return (
263:     <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg border border-slate-800 space-y-8">
264:       <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
265:       {renderStep()}
266:       {error && (
267:         <p className="text-red-500 text-center bg-red-900/20 p-3 rounded-md" role="alert">
268:           {error}
269:         </p>
270:       )}
271:       <NavigationButtons
272:         currentStep={currentStep}
273:         totalSteps={steps.length}
274:         onPrev={handlePrev}
275:         onNext={handleNext}
276:         onSubmit={handleSubmit}
277:         isSubmitting={isSubmitting}
278:       />
279:     </div>
280:   );
281: }
````

## File: GEMINI.md
````markdown
  1: # Complete Codebase Context Reference
  2: You have full access to the file directory mapping, shared packages, schemas, and configurations. Rely completely on the attached packed codebase representation context:
  3: @codebase-context.md
  4: ---
  5: 
  6: ### 1. Project Overview & Business Purpose
  7: 
  8: **Malalang** is a specialized, boutique web design and development studio focused on empowering small and medium-sized enterprises (SMEs) in the **Phalaborwa and Limpopo region of South Africa**.
  9: The business operates under a disruptive, trust-first "Gold Standard" model:
 10: 
 11: * **Zero Upfront Risk:** No deposits are required from local businesses.
 12: * **Pay on Completion:** Clients only pay once they are completely satisfied with the live site.
 13: * **Collaborative Transparency:** Uses live staging links (Vercel preview URLs) so less tech-savvy local business owners can follow along with the progression of their build.
 14: 
 15: ---
 16: 
 17: ### 2. Architecture & Directory Structure
 18: 
 19: The repository is structured as a modern, unified, full-stack **Monorepo** managed using **pnpm Workspaces** and orchestrated by **Turborepo (Turbo)**.
 20: 
 21: ```text
 22: / (Root)
 23: ├── pnpm-workspace.yaml      # Tracks distinct app and package boundaries
 24: ├── turbo.json               # Pipeline management, execution caching, and filtering
 25: ├── apps/                    # Application layer
 26: │   ├── client/              # Public-facing customer website (malalang.co.za)
 27: │   └── admin/               # Administrative studio dashboard 
 28: ├── packages/                # Shared internal workspaces
 29: │   ├── shared/              # Central database logic, Supabase services, schemas, and types
 30: │   ├── ai/                  # Dedicated Genkit & Streaming Engine Package (@malalang/ai)
 31: │   ├── eslint-config/       # Unified code quality rules
 32: │   └── typescript-config/   # Centralized TS compiler options
 33: └── supabase/                # Database migrations, configuration, and seed data
 34: ```
 35: 
 36: #### Monorepo Enforcement Rules:
 37: 
 38: * **The `workspace:*` Protocol:** Internal dependencies (such as `@malalang/shared`) are linked across application domains dynamically without using deep relative paths (e.g., `../../packages/shared`).
 39: * **Single Version Policy (pnpm Catalogs):** Third-party packages like `react`, `next`, and `@supabase/supabase-js` are locked using the global `catalog:` structure to ensure uniform platform runtimes.
 40: * **Bundle Isolation:** Heavy production tools (like complex rich text editors utilized in the admin panel) are strictly isolated away from the client application folder to minimize final user bundle sizes.
 41: 
 42: ---
 43: 
 44: ### 3. Core Technology Stack
 45: 
 46: * **Frontend Framework:** Next.js 16 (App Router) leveraging React 19 concurrent features.
 47: * **Styling Framework:** Tailwind CSS v4 providing responsive utility designs.
 48: * **Primary Language:** Strict TypeScript ensuring type-safety from database rows up to UI layers.
 49: * **Database & Auth Engine:** Supabase (PostgreSQL) handling relational data and backend migrations.
 50: * **Deployment Platform:** Vercel for continuous integration and automated staging branch previews.
 51: 
 52: ---
 53: 
 54: ### 4. Detailed Component Analysis
 55: 
 56: #### A. The Client Application (`apps/client`)
 57: 
 58: This represents the storefront (`malalang.co.za`) optimized for speed, local SEO, and client onboarding.
 59: 
 60: * **Marketing Pages:** Contains sections describing the studio's core values, "The Malalang Difference", fixed-price packages, and an interactive pricing table.
 61: * **Interactive Onboarding Questionnaire:** A multi-step structured intake form (`/questionnaire`) that gathers business names, logos, requirements, and information from prospective clients.
 62: * **AI Capabilities (Genkit Integration):** Built-in AI assistants enhance customer answers on the fly or provide copy suggestions if the small business owner struggles with writing text about their company.
 63: * **Advanced Content & Tools:** Includes multimedia tools like a custom video segment processor using Cloudinary and UnrealSpeech, alongside small utilities like a QR Code and Color Palette Generator.
 64: 
 65: #### B. The Admin Application (`apps/admin`)
 66: 
 67: The secure backend cockpit used by the studio's managers to manage daily operations.
 68: 
 69: * **Content Management System (CMS):** Form modules supporting rich-text blog post editing (via `react-quill-new`), portfolio management, client testimonials, and FAQ listings.
 70: * **Operations Tracking:** Monitors client records, explicit onboarding questionnaire submissions, real-time message boards, and bookings.
 71: * **Third-Party API Integrations:** Injects external services such as the **Pexels API** via proxy routes for royalty-free photography selection during content generation.
 72: * **Virtual Collaboration:** Integrated video conference room structures allowing managers to spin up meetings directly with remote clients.
 73: 
 74: #### C. Shared Packages (`packages/shared`)
 75: 
 76: The brain of the operation. By isolating everything into `@malalang/shared`, the codebase prevents duplicate business logic across the client and admin websites.
 77: 
 78: * **Database Layers:** Hosts the central Supabase server and client setup files.
 79: * **Domain Sub-services:** Individual query handlers mapped out cleanly for tables like `blogs`, `clients`, `comments`, `meetings`, `messages`, and `questionnaires`.
 80: * **Data Schemas:** Shared validation objects (Zod) ensuring incoming payloads are properly formatted before hitting storage.
 81: 
 82: #### D. Database & Migrations (`supabase/`)
 83: 
 84: The persistence infrastructure utilizes direct SQL tracking.
 85: 
 86: * **Schema Evolution:** Controlled sequentially through chronological files (e.g., creating base tables, injecting pricing details, and configuring virtual meeting rooms).
 87: * **Data Isolation:** Enforces PostgreSQL Row-Level Security (RLS) to ensure customer information remains locked and accessible only to verified administrators.
 88: 
 89: ---
 90: 
 91: ### 5. Strengths and Architecture Wins
 92: 
 93: 1. **Highly Performant Monorepo Orchestration:** Using Turborepo eliminates duplicate build times by caching unchanged packages, speeding up developer workflows.
 94: 2. **Excellent Localization Strategy:** Tailored with explicit Local SEO keywords, clear South African phone inputs, and tailored value propositions for Limpopo-based businesses.
 95: 3. **Decoupled Business Logic:** Keeping service code out of the Next.js apps means adding a mobile app or another framework in the future would require minimal database refactoring.
 96: 4. **Thoughtful Customer Support Tooling:** Utilizing AI text-enhancers directly addresses a common hurdle for small business owners who face writer's block when providing initial website copy.
 97: 
 98: Monorepo Project Structure:
 99: ```text
100: / (Root)
101: ├── pnpm-workspace.yaml   # Defines apps/* and packages/* as workspaces
102: ├── turbo.json            # Handles task pipeline & caching
103: ├── /apps                 # Multi-App Container
104: │   ├── /client           # Consumer Website (Next.js 16, Tailwind v4)
105: │   └── /admin            # Admin Dashboard (Next.js 16, Supabase Auth)
106: ├── /packages             # Shared Workspace Packages
107: │   ├── /shared           # Core business logic, Supabase services, & types (@malalang/shared)
108: │   ├── /ai               # Dedicated Genkit & Streaming Engine Package (@malalang/ai)
109: │   ├── /eslint-config    # Standardized linting rules (@malalang/eslint-config)
110: │   └── /typescript-config # Shared TS configurations (@malalang/typescript-config)
111: └── /supabase             # Database Configuration & Migrations
112:     ├── config.toml       # Supabase project config
113:     ├── migrations/       # SQL schema migrations
114:     └── seed.sql          # Development seed data
115: ```
116: please study @codebase-context.md to understand the current Project Structure.
117: 
118: Code Quality Guidelines:
119: 1. Ensure absolute type safety between the shared library and the apps.
120: 2. Avoid deep relative paths (e.g., '../../../../shared'); always resolve via the workspace package reference.
121: 3. Keep the bundle size of the client app optimized by ensuring Admin-specific dependencies (like heavy editors) are never leaked into shared directories.
122: 
123: ## 2. Key Technologies
124: 
125: - **Framework**: Next.js 16 (App Router, React 19)
126: - **Database**: Supabase (PostgreSQL)
127: - **Authentication**: Supabase Auth (Admin Dashboard only)
128: - **Styling**: Tailwind CSS v4
129: - **Shared Logic**: Monolithic `@malalang/shared` package for all business logic.
130: 
131: ---
132: 
133: 
134: ### 3. Dependency & Linking Rules (Crucial)
135: 1. Single Version Policy (pnpm Catalogs): Never provide hardcoded version numbers for core third-party dependencies (like react, react-dom, next, @supabase/supabase-js, lucide-react). Always use the "catalog:" protocol.
136: 2. Internal Linking: Local modules from the shared library must be safely referenced using the name "@malalang/shared" combined with the "workspace:*" protocol. Never use relative paths targeting files outside an app's directory.
137: 3. Bundle Isolation: Keep the client application light. Heavy admin-specific items (such as complex text editors, analytics graphing tools, or management components) must never be imported into or leaked into the `/shared` folder.
138: 
139: ---
140: 
141: ## 4. Documentation Strategy
142: Each major directory contains a `Gemini.md` file explaining its internal logic, structure, and maintenance procedures. Always consult these files before making architectural changes.
143: 
144: ┌───────────────────────────────────────────────────────────────────────────────┐
145: │                   MONOREPO STRATEGY                                           │
146: │  (Single repository containing multiple apps (client and admin) & packages)   │
147: │  └───────────────────────────┬────────────────────────────────────────────────┘
148: │                              ▼                                                │
149: │                   pnpm WORKSPACES                                             │
150: │  (Manages linking, node_modules, & strict dependencies)                       │
151: │  └───────────────────────────┬────────────────────────────────────────────────┘
152: │                              ▼                                                │
153: │                   TURBOBUILD SYSTEM                                           │
154: │  (Orchestrates tasks, parallelizes execution, caches)                         │
155: └───────────────────────────────────────────────────────────────────────────────┘
156: 
157: Important Rules & Architecture Lessons
158: Use the workspace:* Protocol: When referencing internal packages (like @shared/utils), always pin them in package.json using "@shared/utils": "workspace:*". This guarantees pnpm never accidentally pulls a version down from the public internet.
159: 
160: Explicitly Declare Task Inputs/Outputs: In turbo.json, you must let Turbo know exactly what files create a build output (e.g., source files, .env configs) and where it saves them (e.g., .next/). Failing to configure outputs correctly results in "ghost caches" where Turbo thinks it built your project, but the production build files are missing.
161: 
162: Prefer Package Tasks over Root Tasks: Never write a script in your root package.json that manually triggers individual directories sequentially (e.g., cd apps/admin && npm run build). Always let the root script pass execution directly to Turbo (turbo run build), allowing Turbo to figure out the parallel math.
163: 
164: Keep Shared Packages Lean: Avoid dumping everything into a single, massive shared folder. Split it logically (e.g., @malalang/ui, @malalang/types, @malalang/supabase-utils). Otherwise, minor tweaks to a utility function can cause Turbo to bust the cache and completely rebuild unrelated consumer apps.
165: 
166: make sure that you study @codebase-context.md
167: 
168: 
169: 
170: ## Below is our plan to refector system. you have to make sure you try and fit in and if there is something we have active then you will have to tick it and update the old folder structuer on this Gemini.md fill. 
171: 
172: You must be a expert Principal Solutions Architect specializing in Next.js 16+ (App Router), React 19, Turborepo, and pnpm Workspaces. Your objective is to perform a rigorous code cleanup of the Malalang monorepo to maximize code organization, performance, and boundaries.
173: 
174: Follow these strict rules for the codebase cleanup and restructuring:
175: 
176: ### 1. APPLICATION BOUNDARIES (apps/client & apps/admin)
177: - **Single Source of Truth for Routing & Views:** ALL pages, dynamic routes, layout wraps, API handlers, and features must live strictly inside the `app/` folder of their respective applications (`apps/client/app/*` or `apps/admin/app/*`). Do not abstract sub-features into root-level application components.
178: - **App-Specific Logic & UI Storage:** If a component, utility, hook, or schema is used *exclusively* within one application (e.g., `SouthAfricanPhoneNumberInput` or a custom client-facing intake form element only needed on `apps/client`), it MUST remain inside that application's `app/` tree (using a localized layout strategy like `app/_components/`, `app/_hooks/`, or inline to the route folder). Do not pollute global packages with single-use files.
179: 
180: ### 2. THE MULTI-PACKAGE REUSE STRATEGY (packages/*)
181: Instead of forcing everything into a single package, distribute code across domain-specific, immutable workspaces utilizing the pnpm `workspace:*` protocol:
182: 
183: #### A. `packages/shared/src/` (True Multi-Platform Sharing Only)
184: This folder is strictly reserved for assets shared *between* both the client and admin portals. If a file isn't imported by both workspaces, it doesn't belong here.
185: - `components/`: Cross-app blocks like `MeetingWrapper`, unified video call interfaces, and true platform integrations.
186: - `hooks/`: Shared React hooks (e.g., `useCreateChatClient`).
187: - `supabase/`: Unified client/server database initialization factories and shared Data Access Object (DAO) services (CRUD operations for blogs, clients, questionnaires, and meetings).
188: - `types/`: Shared global domain types and auto-generated database schemas.
189: - `utils/`: Shared utility functions (formatters).
190: - `validation/`: Shared validation schemas (Zod validation).
191: 
192: #### B. `packages/ai/src/` (Isolated Generative AI Infrastructure)
193: - Houses all heavy AI features, including Genkit orchestration layers, script generation flows, prompts, and streaming pipelines. This isolates heavy AI text-processing bundles away from standard applications to prevent dependency bloat.
194: 
195: #### C. Config Packages (Unified Platform Tooling)
196: - `packages/eslint-config/`: Global linting and standard code quality rules.
197: - `packages/typescript-config/`: Centralized compiler configurations extended by local applications.
198: 
199: ---
200: 
201: ### MANDATED DIRECTORY TREE BLUEPRINT
202: 
203: Enforce this exact architecture map during your analysis, planning, and code output:
204: 
205: / (Monorepo Root)
206: ├── apps/
207: │   ├── admin/
208: │   │   └── app/                      # EXCLUSIVE routing & core view layer for Admin Panel
209: │   │       ├── _components/          # Admin-ONLY specific components (e.g., Heavy CMS Editors, PexelsImagePicker)
210: │   │       ├── _lib/                 # Admin-ONLY specific libraries (actions.ts, validation.ts)
211: │   │       ├── api/                  # Admin proxy endpoints (e.g., Pexels API proxy)
212: │   │       ├── blog/                 # Blog post CMS dashboard
213: │   │       │   ├── [id]/             # Blog detail view and edit pages
214: │   │       │   ├── create/           # Create new blog post page
215: │   │       │   └── page.tsx          # Blog listing page
216: │   │       ├── bookings/             # Meeting/client booking tracking pages
217: │   │       ├── clients/              # Client records tracking page
218: │   │       ├── content/              # General CMS pages (faqs, portfolio, testimonials, categories)
219: │   │       ├── meetings/             # Virtual meeting room routes
220: │   │       ├── messages/             # Client contact messages page
221: │   │       ├── services/             # Admin services catalog CRUD pages
222: │   │       ├── settings/             # Dashboard settings page
223: │   │       ├── layout.tsx
224: │   │       └── page.tsx
225: │   │
226: │   └── client/
227: │       └── app/                      # EXCLUSIVE routing & core view layer for malalang.co.za
228: │           ├── _components/          # Client-ONLY specific elements (e.g., SouthAfricanPhoneNumberInput)
229: │           ├── _lib/                 # Client-ONLY specific utilities (actions.ts, utils.ts, unrealspeech, Cloudinary)
230: │           ├── api/                  # Client proxy endpoints (generate-audio, generate-script, questionnaire, sign-image, stream-token, video)
231: │           ├── about/                # Public studio team & story view
232: │           ├── blog/                 # Front-facing public blog listing
233: │           │   └── [slug]/page.tsx   # Individual public blog post detail page
234: │           ├── bookings/             # Public consultation scheduling page
235: │           ├── contact/              # Public lead contact form page
236: │           ├── email-setup/          # Client domain email onboarding guide
237: │           ├── home/                 # Secondary marketing sections
238: │           ├── questionnaire/        # Multi-step intake form page
239: │           ├── services/             # Services detail and booking checkout routes
240: │           ├── tools/                # Interactive utilities (color-palette-generator, QRCodeGenerator, create-script)
241: │           ├── layout.tsx
242: │           └── page.tsx              # Public marketing home page
243: │
244: ├── packages/
245: │   ├── shared/                       # ONLY True Cross-Platform Common Logic
246: │   │   ├── src/
247: │   │   │   ├── components/           # UI elements used by both Admin & Client (e.g., MeetingWrapper)
248: │   │   │   ├── hooks/                # Shared React hooks (e.g., useCreateChatClient)
249: │   │   │   ├── supabase/             # Central DB clients & global services (blogs, clients, meetings)
250: │   │   │   ├── types/                # Centralized TS types and database models (index.ts, supabase.ts)
251: │   │   │   ├── utils/                # General utility functions (formatters.ts)
252: │   │   │   ├── validation/           # Shared Zod schemas (schemas.ts)
253: │   │   │   └── index.ts              # Entrypoint forwarding shared exports
254: │   │   └── package.json
255: │   │
256: │   ├── ai/                           # Dedicated Genkit & Streaming Engine Package
257: │   │   ├── src/
258: │   │   │   ├── flows/                # AI flows (enhanceAnswer, suggestAnswer, generateVideo)
259: │   │   │   ├── genkit.ts             # Genkit initialization configuration
260: │   │   │   └── index.ts              # Entrypoint exporting flows and runners
261: │   │   └── package.json
262: │   │
263: │   ├── eslint-config/                # Standardized linting rules
264: │   └── typescript-config/            # Shared TS configurations
265: │
266: └── supabase/                         # Core relational migration tracking engine
267: 
268: ---
269: 
270: ### Refactoring & Code Output Deliverables:
271: 
272: 1. **Extraction Audit:** Analyze the codebase and outline exactly which components should be extracted into `packages/shared/src/`, which belong in `packages/ai/src/`, and which must stay strictly local to their respective Next.js `app/` sub-folders.
273: 2. **Page Architecture Example:** Write out the complete clean code layout file for `apps/client/app/questionnaire/page.tsx`. Show how it consumes a localized input field like `SouthAfricanPhoneNumberInput` from its own app tree, while cleanly loading the global `MeetingWrapper` or core data models using:
274:    ```typescript
275:    import { MeetingWrapper } from '@malalang/shared';
276:    import { runGenkitFlow } from '@malalang/ai';
277: 
278: 
279: Here is your complete structural checklist to execute the refactoring. You can use this checklist to track your progress 
280: 
281: ---
282: 
283: ## Things to Achieve
284: 
285: ### 1. Next.js App Router Enclosure (`apps/client` & `apps/admin`)
286: 
287: * [x] **Enforce strict routing boundaries:** Verify that all active pages, API proxy routes, and layout wrappers sit exclusively inside the `app/` folder.
288: * [x] **Isolate application-specific components:** Retain items like `SouthAfricanPhoneNumberInput` inside `apps/client/app/_components/` because they are unique to the client experience.
289: * [x] **Clean up loose files:** Remove any root-level directories like `/components` or `/features` outside of the Next.js `app/` folder within the individual application packages.
290: * [x] **Strip data handling hooks:** Ensure individual apps do not manage baseline database communication directly; offload all mutual data requests to shared configurations.
291: 
292: ---
293: 
294: ### 2. Multi-Package Distribution Tier (`packages/*`)
295: 
296: #### `@malalang/shared` (Strict Multi-Platform Intersections Only)
297: 
298: * [x] **Migrate dual-use layout interfaces:** Shift joint operational systems like `MeetingWrapper` and unified stream layouts into `packages/shared/src/components/`.
299: * [x] **Consolidate Supabase query operations:** Place your backend client factories and specific query utilities (`blogs.ts`, `clients.ts`, `questionnaires.ts`) under `packages/shared/src/supabase/`.
300: * [x] **Centralize global type contracts:** Ensure database row structures and mutual UI types are cleanly exported out of `packages/shared/src/types/`.
301: * [x] **Build clean barrel entry points:** Verify that `packages/shared/src/index.ts` cleanly forwards all modules using explicit export declarations.
302: 
303: #### `@malalang/ai` (Generative Feature Isolation)
304: 
305: * [x] **Decouple Genkit orchestration layers:** Move prompt engineering collections, AI streaming components, and text-enhancers out of standard application spaces.
306: * [x] **Protect bundle size metrics:** Confirm that heavy AI libraries do not load inside consumer marketing spaces unless explicitly queried.
307: 
308: #### `@malalang/config` (Workspace Linting and Platform Standards)
309: 
310: * [x] **Isolate compilation definitions:** Standardize global TypeScript inheritance trees and Eslint syntax targets into strict, internal configuration workspaces.
311: 
312: ---
313: 
314: ### 3. Monorepo Integration & Workspace Graph
315: 
316: * [x] **Eliminate dirty pathing structures:** Replace all deep relative references (e.g., `../../packages/shared/src/...`) with smooth monorepo references (`@malalang/shared`).
317: * [x] **Implement the `workspace:*` dependency model:** Configure local development manifests to bind local packages using active workspace linking markers.
318: * [x] **Leverage central versioning tools:** Lock third-party components (such as `react` or `@supabase/supabase-js`) through global matching catalogs.
319: * [x] **Validate pipeline caches:** Execute a clean `turbo run build` command to make sure your dependency tree builds successfully across all code boundaries without throwing errors.
````

## File: packages/shared/src/supabase/services/composite.ts
````typescript
  1: import { handleResponse, supabase } from "../client";
  2: import type {
  3:   ServiceCategory,
  4:   PortfolioItem,
  5:   Testimonial,
  6:   FaqItem,
  7:   ServicePackage,
  8:   AddonCategory,
  9:   RecurringService,
 10:   AddonService
 11: } from "../../types";
 12: import type { Database } from "../../types/supabase";
 13: 
 14: import { getBlogs } from "./blogs";
 15: import { getClients } from "./clients";
 16: import { getMessages } from "./messages";
 17: 
 18: 
 19: 
 20: 
 21: export async function getDashboardStats() {
 22:   const [blogs, clients, messages] = await Promise.all([
 23:     getBlogs(),
 24:     getClients(),
 25:     getMessages(),
 26:   ]);
 27: 
 28: 
 29:   const allBookings = clients
 30:     .filter(c => !!c.serviceId)
 31:     .map((c) => ({
 32:       clientId: c.id,
 33:       clientName: c.userName || c.phone,
 34:       serviceTitle: c.serviceTitle || "Service Interested",
 35:       submittedAt: c.createdAt,
 36:     }));
 37: 
 38:   return { blogs, clients, messages, allBookings };
 39: }
 40: 
 41: 
 42: 
 43: 
 44: export async function getHomeData() {
 45:   try {
 46:     const [categoriesData, portfolioData, testimonialsData, faqsData] = await Promise.all([
 47:       handleResponse(supabase.from("service_categories").select("*").order("display_order", { ascending: true })),
 48:       handleResponse(supabase.from("portfolio_items").select("*").order("display_order", { ascending: true })),
 49:       handleResponse(supabase.from("testimonials").select("*").order("display_order", { ascending: true })),
 50:       handleResponse(supabase.from("faqs").select("*").order("display_order", { ascending: true }).limit(4))
 51:     ]);
 52: 
 53:     const serviceCategories: ServiceCategory[] = ((categoriesData as Database['public']['Tables']['service_categories']['Row'][]) || []).map((c) => ({
 54:       id: c.id,
 55:       slug: c.slug,
 56:       name: c.name,
 57:       tagline: c.tagline || "",
 58:       description: c.description || "",
 59:       imageUrl: c.image_url || "",
 60:       packageCount: c.package_count || 0,
 61:       priceFrom: c.price_from || "",
 62:     }));
 63: 
 64:     const portfolioItems: PortfolioItem[] = ((portfolioData as Database['public']['Tables']['portfolio_items']['Row'][]) || []).map((p) => ({
 65:       id: p.id,
 66:       title: p.title,
 67:       description: p.description || "",
 68:       imageUrl: p.image_url || "",
 69:       category: p.category || "",
 70:     }));
 71: 
 72:     const testimonials: Testimonial[] = ((testimonialsData as Database['public']['Tables']['testimonials']['Row'][]) || []).map((t) => ({
 73:       id: t.id,
 74:       quote: t.quote,
 75:       author: t.author,
 76:       company: t.company || "",
 77:     }));
 78: 
 79:     const faqs: FaqItem[] = ((faqsData as Database['public']['Tables']['faqs']['Row'][]) || []).map((f) => ({
 80:       id: f.id,
 81:       question: f.question,
 82:       answer: f.answer,
 83:     }));
 84: 
 85:     return {
 86:       serviceCategories,
 87:       portfolioItems,
 88:       testimonials,
 89:       faqs,
 90:     };
 91:   } catch (error) {
 92:     console.error("Error fetching home data from Supabase:", error);
 93:     return {
 94:       serviceCategories: [],
 95:       portfolioItems: [],
 96:       testimonials: [],
 97:       faqs: [],
 98:     };
 99:   }
100: }
101: 
102: /**
103:  * Fetches all data required for the pricing page.
104:  */
105: export async function getPricingData() {
106:   try {
107:     const [packagesData, categoriesWithAddonsData, faqsData, recurringServicesData, launchPackData] = await Promise.all([
108:       handleResponse(supabase.from("services").select("*, service_details(*)").eq("active", true)),
109:       handleResponse(supabase.from("service_categories").select("*, addon_services(*)").order("display_order", { ascending: true })),
110:       handleResponse(supabase.from("faqs").select("*").order("display_order", { ascending: true })),
111:       handleResponse(supabase.from("recurring_services").select("*").limit(1).maybeSingle()),
112:       handleResponse(supabase.from("launch_pack_services").select("*").order("display_order", { ascending: true }))
113:     ]);
114: 
115:     const servicePackages: ServicePackage[] = (packagesData as any[] || []).map((s) => {
116:       const detail = s.service_details?.[0];
117:       return {
118:         id: s.id,
119:         title: s.title,
120:         price: s.price || "",
121:         category: s.category || "",
122:         description: s.description || "",
123:         active: s.active || false,
124:         serviceUrl: detail?.service_url || s.id,
125:         longDescription: detail?.long_description || "",
126:         idealFor: detail?.ideal_for || "",
127:         bestFor: detail?.best_for || "",
128:         features: detail?.features || [],
129:         isFeatured: detail?.is_featured || false,
130:         isCombo: detail?.is_combo || false,
131:         savingsNote: detail?.savings_note || "",
132:         type: (detail?.type as ServicePackage['type']) || "static",
133:       };
134:     });
135: 
136:     const addonCategories: AddonCategory[] = (categoriesWithAddonsData as any[] || []).map((c) => ({
137:       id: c.id,
138:       name: c.name,
139:       addons: (c.addon_services || []).map((a: any) => ({
140:         id: a.id,
141:         title: a.title,
142:         price: a.price,
143:       })),
144:     })).filter((c) => c.addons.length > 0);
145: 
146:     const recurringService: RecurringService | null = recurringServicesData ? {
147:       id: (recurringServicesData as any).id,
148:       title: (recurringServicesData as any).title,
149:       price: (recurringServicesData as any).price,
150:       description: (recurringServicesData as any).description || "",
151:     } : null;
152: 
153:     const launchPackServices: AddonService[] = (launchPackData as any[] || []).map((s) => ({
154:       id: s.id,
155:       title: s.title,
156:       price: s.price,
157:     }));
158: 
159:     return {
160:       servicePackages,
161:       addonCategories,
162:       faqs: ((faqsData as Database['public']['Tables']['faqs']['Row'][]) || []).map((f) => ({ id: f.id, question: f.question, answer: f.answer })),
163:       recurringService,
164:       launchPackServices,
165:     };
166:   } catch (error) {
167:     console.error("Error fetching pricing data from Supabase:", error);
168:     return {
169:       servicePackages: [],
170:       addonCategories: [],
171:       faqs: [],
172:       recurringService: null,
173:       launchPackServices: [],
174:     };
175:   }
176: }
````

## File: apps/admin/app/meetings/[callId]/page.tsx
````typescript
 1: 'use client';
 2: 
 3: import React, { useEffect, useState, useMemo } from 'react';
 4: import { useParams } from 'next/navigation';
 5: import { MeetingWrapper } from "@/app/_components/MeetingWrapper";
 6: import { createSupabaseBrowserClient } from "@malalang/shared/supabase";
 7: import { Loader2 } from 'lucide-react';
 8: 
 9: export default function AdminMeetingRoom() {
10:   const params = useParams();
11:   const callId = params.callId as string;
12:   const supabase = useMemo(() => createSupabaseBrowserClient(), []);
13:   const [user, setUser] = useState<{ id: string; name: string } | null>(null);
14:   const [isLoading, setIsLoading] = useState(true);
15: 
16:   useEffect(() => {
17:     const getUser = async () => {
18:       const { data: { session } } = await supabase.auth.getSession();
19:       if (session?.user) {
20:         setUser({
21:           id: session.user.id,
22:           name: session.user.user_metadata?.name || session.user.email || 'Admin Host'
23:         });
24:       }
25:       setIsLoading(false);
26:     };
27:     getUser();
28:   }, [supabase]);
29: 
30:   if (isLoading) {
31:     return (
32:       <div className="flex justify-center items-center h-screen text-slate-900">
33:         <Loader2 className="animate-spin w-8 h-8" />
34:       </div>
35:     );
36:   }
37: 
38:   if (!user) {
39:     return <div className="p-8 text-rose-500">You must be logged in to host a meeting.</div>;
40:   }
41: 
42:   return (
43:     <div className="p-8">
44:       <h1 className="text-slate-900 text-2xl mb-4 font-bold">Hosting Meeting: {callId}</h1>
45:       <MeetingWrapper
46:         callId={callId}
47:         userName={user.name}
48:         userId={user.id}
49:       />
50:     </div>
51:   );
52: }
````

## File: packages/shared/package.json
````json
 1: {
 2:   "name": "@malalang/shared",
 3:   "version": "0.0.1",
 4:   "private": true,
 5:   "type": "module",
 6:   "exports": {
 7:     "./types": "./src/types/index.ts",
 8:     "./hooks/*": "./src/hooks/*",
 9:     "./utils": "./src/utils/formatters.ts",
10:     "./supabase": "./src/supabase/client.ts",
11:     "./supabase/server": "./src/supabase/server.ts",
12:     "./services/blogs": "./src/supabase/services/blogs.ts",
13:     "./services/clients": "./src/supabase/services/clients.ts",
14:     "./services/comments": "./src/supabase/services/comments.ts",
15:     "./services/composite": "./src/supabase/services/composite.ts",
16:     "./services/content": "./src/supabase/services/content.ts",
17:     "./services/meetings": "./src/supabase/services/meetings.ts",
18:     "./services/messages": "./src/supabase/services/messages.ts",
19:     "./services/questionnaires": "./src/supabase/services/questionnaires.ts",
20:     "./services/services": "./src/supabase/services/services.ts",
21:     "./services/stream": "./src/supabase/services/stream.ts",
22:     "./components/MeetingWrapper": "./src/components/MeetingWrapper.tsx",
23:     "./hooks/useCreateChatClient": "./src/hooks/useCreateChatClient.ts"
24:   },
25:   "scripts": {
26:     "build": "tsc",
27:     "check-types": "tsc --noEmit"
28:   },
29:   "dependencies": {
30:     "@supabase/ssr": "catalog:",
31:     "@supabase/supabase-js": "catalog:",
32:     "jose": "^6.2.3",
33:     "lucide-react": "catalog:",
34:     "@stream-io/video-react-sdk": "^1.36.1",
35:     "stream-chat": "^9.44.2",
36:     "stream-chat-react": "^14.2.0",
37:     "zod": "catalog:"
38:   },
39:   "devDependencies": {
40:     "@malalang/typescript-config": "workspace:*",
41:     "@types/node": "^22.19.19",
42:     "@types/react": "19.2.2",
43:     "@types/react-dom": "19.2.2",
44:     "next": "catalog:",
45:     "typescript": "catalog:"
46:   }
47: }
````

## File: packages/shared/src/supabase/services/clients.ts
````typescript
 1: import { supabase, handleResponse } from "../client";
 2: import type { Client } from "../../types";
 3: import type { Database } from "../../types/supabase";
 4: 
 5: 
 6: type ClientRow = Database['public']['Tables']['clients']['Row'];
 7: type ClientWithService = ClientRow & { services: { title: string } | null };
 8: 
 9: function mapClientRow(d: ClientWithService): Client {
10:   return {
11:     id: d.id,
12:     userName: d.user_name || "",
13:     businessName: d.business_name || "",
14:     email: d.email || "",
15:     phone: d.phone || "",
16:     createdAt: d.created_at || new Date().toISOString(),
17:     updatedAt: d.updated_at || new Date().toISOString(),
18:     serviceId: d.service_id || null,
19:     serviceTitle: d.services?.title || null,
20:   };
21: }
22: 
23: export async function getClients(): Promise<Client[]> {
24:   const data = await handleResponse<ClientWithService[]>(
25:     supabase.from("clients").select("*, services(title)")
26:   );
27:   return (data || []).map(mapClientRow);
28: }
29: 
30: export async function getClientByPhone(phone: string): Promise<Client | null> {
31:   const data = await handleResponse<ClientWithService | null>(
32:     supabase
33:       .from("clients")
34:       .select("*, services(title)")
35:       .eq("phone", phone)
36:       .maybeSingle(),
37:     true
38:   );
39:   return data ? mapClientRow(data) : null;
40: }
41: 
42: export async function upsertClientByPhone(
43:   phone: string,
44:   data: Partial<Client> & { serviceId?: string | null }
45: ): Promise<Client> {
46:   const upsertData: Database['public']['Tables']['clients']['Insert'] = {
47:     phone,
48:     user_name: data.userName || null,
49:     email: data.email || null,
50:     business_name: data.businessName || null,
51:     service_id: data.serviceId || null,
52:     updated_at: new Date().toISOString(),
53:   };
54: 
55:   const result = await handleResponse<ClientWithService>(
56:     supabase
57:       .from("clients")
58:       .upsert(upsertData, { onConflict: 'phone' })
59:       .select("*, services(title)")
60:       .single()
61:   );
62: 
63:   return mapClientRow(result);
64: }
65: 
66: export async function updateClient(id: string, data: Database['public']['Tables']['clients']['Update']): Promise<void> {
67:   await handleResponse(
68:     supabase.from("clients").update(data).eq("id", id)
69:   );
70: }
71: 
72: export async function deleteClient(id: string): Promise<void> {
73:   await handleResponse(supabase.from("clients").delete().eq("id", id));
74: }
````

## File: packages/shared/src/types/index.ts
````typescript
  1: import React from 'react';
  2: export * from './supabase';
  3: 
  4: export interface Author {
  5:   id: string;
  6:   name: string;
  7:   avatarUrl: string;
  8:   imageUrl: string;
  9:   bio: string;
 10: }
 11: 
 12: export interface BlogPost {
 13:   id: string;
 14:   title: string;
 15:   slug: string;
 16:   htmlContent: string;
 17:   excerpt: string;
 18:   metaTitle: string;
 19:   metaDescription: string;
 20:   publishedAt: string;
 21:   tags: string[];
 22:   imageUrl: string;
 23:   readingTimeMinutes: number;
 24:   keywords: string;
 25:   source: string;
 26:   status: 'draft' | 'published' | 'archived';
 27:   author: Author;
 28: }
 29: 
 30: export interface Client {
 31:   id: string;
 32:   userName: string;
 33:   businessName: string;
 34:   email: string;
 35:   phone: string;
 36:   serviceId: string | null;
 37:   serviceTitle?: string | null;
 38:   createdAt: string;
 39:   updatedAt: string;
 40: }
 41: 
 42: export interface ContactMessage {
 43:   id: string;
 44:   name: string;
 45:   email: string;
 46:   message: string;
 47:   createdAt: string;
 48:   read?: boolean;
 49:   responded?: boolean;
 50: }
 51: 
 52: export interface ServiceDoc {
 53:   id?: string;
 54:   title: string;
 55:   price: string;
 56:   category?: string;
 57:   description: string;
 58:   active?: boolean;
 59: }
 60: 
 61: export interface ServicePackage extends ServiceDoc {
 62:   serviceUrl: string;
 63:   longDescription: string;
 64:   idealFor: string;
 65:   bestFor: string;
 66:   features: string[];
 67:   isFeatured?: boolean;
 68:   isCombo?: boolean;
 69:   savingsNote?: string;
 70:   type?: 'static' | 'dynamic';
 71: }
 72: 
 73: export interface AddonService {
 74:   id?: string;
 75:   title: string;
 76:   price: string;
 77: }
 78: 
 79: export interface AddonCategory {
 80:   id?: string;
 81:   name: string;
 82:   addons: AddonService[];
 83: }
 84: 
 85: export interface FaqItem {
 86:   id?: string;
 87:   question: string;
 88:   answer: string;
 89: }
 90: 
 91: export interface ServiceCategory {
 92:   id?: string;
 93:   slug: string;
 94:   name: string;
 95:   tagline: string;
 96:   description: string;
 97:   imageUrl: string;
 98:   packageCount: number;
 99:   priceFrom: string;
100: }
101: 
102: export interface RecurringService {
103:   id?: string;
104:   title: string;
105:   price: string;
106:   description: string;
107: }
108: 
109: export interface MeetingRoom {
110:   id: string;
111:   callId: string;
112:   title: string;
113:   createdBy: string | null;
114:   clientId: string | null;
115:   status: 'active' | 'archived' | 'cancelled' | null;
116:   metadata: any;
117:   createdAt: string;
118: }
119: 
120: export interface BlogComment {
121:   id: string;
122:   blogId: string;
123:   userId: string;
124:   userName?: string;
125:   email: string;
126:   phone: string;
127:   content: string;
128:   createdAt: string;
129: }
130: 
131: export interface PortfolioItem {
132:   id?: string;
133:   title: string;
134:   category: string;
135:   imageUrl: string;
136:   description: string;
137: }
138: 
139: export interface Testimonial {
140:   id?: string;
141:   quote: string;
142:   author: string;
143:   company: string;
144: }
145: 
146: export interface ProcessStep {
147:   step: number;
148:   title: string;
149:   description: string;
150:   icon: React.ReactNode;
151: }
152: 
153: export interface ScriptSegment {
154:   id: string;
155:   text: string;
156:   audioSrc: string;
157:   visualSrc: string;
158:   duration: number;
159:   videoSearchQuery: string;
160: }
161: 
162: export interface MediaAsset {
163:   id: string;
164:   name: string;
165:   type: 'image' | 'video';
166:   src: string;
167:   thumbnail: string;
168:   hint: string;
169: }
170: 
171: export interface TeamMemberSkill {
172:   name: string;
173:   icon: React.ReactNode;
174: }
175: 
176: export interface TeamMemberContact {
177:   name: string;
178:   value: string;
179:   icon: React.ReactNode;
180:   link?: string;
181: }
182: 
183: export interface TeamMember {
184:   id: string;
185:   name: string;
186:   title: string;
187:   imageUrl: string;
188:   bio: string;
189:   avatarUrl: string;
190:   skills: TeamMemberSkill[];
191:   contacts: TeamMemberContact[];
192: }
193: 
194: export interface Value {
195:   icon: React.ReactNode;
196:   title: string;
197:   description: string;
198: }
199: 
200: export interface Difference {
201:   icon: React.ReactNode;
202:   title: string;
203:   description: string;
204: }
205: 
206: export interface MalalangProject {
207:   id: string;
208:   name: string;
209:   description: string;
210:   image: string;
211:   link: string;
212: }
213: 
214: 
215: 
216: export type QuestionOption = {
217:   value: string;
218:   label: string;
219: };
220: 
221: export interface Question {
222:   id: string;
223:   text: string;
224:   description?: string;
225:   type:
226:     | 'text'
227:     | 'email'
228:     | 'tel'
229:     | 'textarea'
230:     | 'select'
231:     | 'checkbox'
232:     | 'radio'
233:     | 'file-upload'
234:     | 'color-picker';
235:   options?: string[] | QuestionOption[] | { [key: string]: string[] };
236:   placeholder?: string;
237:   required?: boolean;
238:   subQuestions?: Question[];
239:   dependsOn?: string;
240:   showIf?: (value: any) => boolean;
241:   aiSupport?: 'suggestion' | 'enhancement';
242:   default?: any;
243: }
244: 
245: export interface QuestionnaireStep {
246:   id: string;
247:   title: string;
248:   description?: string;
249:   questions: Question[];
250: }
251: 
252: export interface QuestionnaireFormData {
253:   [key: string]: any;
254: }
````

## File: apps/admin/package.json
````json
 1: {
 2:   "name": "admin",
 3:   "version": "0.1.0",
 4:   "private": true,
 5:   "scripts": {
 6:     "dev": "next dev -p 3001",
 7:     "build": "next build",
 8:     "start": "next start -p 3001",
 9:     "lint": "eslint . --max-warnings 0",
10:     "check-types": "tsc --noEmit"
11:   },
12:   "dependencies": {
13:     "@hookform/resolvers": "^3.9.0",
14:     "@malalang/shared": "workspace:*",
15:     "@radix-ui/react-slot": "^1.1.0",
16:     "@stream-io/audio-filters-web": "^0.7.3",
17:     "@stream-io/video-react-sdk": "^1.36.1",
18:     "@supabase/ssr": "catalog:",
19:     "@supabase/supabase-js": "catalog:",
20:     "clsx": "^2.1.1",
21:     "date-fns": "^4.1.0",
22:     "isomorphic-dompurify": "^2.15.0",
23:     "lucide-react": "catalog:",
24:     "next": "catalog:",
25:     "react": "catalog:",
26:     "react-dom": "catalog:",
27:     "react-hook-form": "^7.53.0",
28:     "react-quill-new": "^3.3.3",
29:     "sonner": "^2.0.7",
30:     "stream-chat": "^9.44.2",
31:     "stream-chat-react": "^14.2.0",
32:     "tailwind-merge": "^2.5.2",
33:     "zod": "catalog:"
34:   },
35:   "devDependencies": {
36:     "@malalang/eslint-config": "workspace:*",
37:     "@malalang/typescript-config": "workspace:*",
38:     "@tailwindcss/postcss": "^4.1.14",
39:     "@types/node": "^22.19.19",
40:     "@types/react": "19.2.2",
41:     "@types/react-dom": "19.2.2",
42:     "eslint": "catalog:",
43:     "postcss": "catalog:",
44:     "tailwindcss": "catalog:",
45:     "typescript": "catalog:"
46:   }
47: }
````

## File: apps/client/package.json
````json
 1: {
 2:   "name": "client",
 3:   "version": "0.1.0",
 4:   "private": true,
 5:   "scripts": {
 6:     "dev": "next dev -p 3000",
 7:     "build": "next build",
 8:     "start": "next start -p 3000",
 9:     "lint": "eslint . --max-warnings 0",
10:     "check-types": "tsc --noEmit"
11:   },
12:   "dependencies": {
13:     "@genkit-ai/google-genai": "1.34.0",
14:     "@genkit-ai/googleai": "1.28.0",
15:     "@malalang/ai": "workspace:*",
16:     "@malalang/shared": "workspace:*",
17:     "@next/third-parties": "^16.0.1",
18:     "@radix-ui/react-dialog": "^1.1.15",
19:     "@radix-ui/react-label": "^2.1.0",
20:     "@radix-ui/react-scroll-area": "^1.2.10",
21:     "@radix-ui/react-slider": "^1.3.6",
22:     "@radix-ui/react-slot": "^1.2.3",
23:     "@radix-ui/react-tabs": "^1.1.13",
24:     "@radix-ui/react-toast": "^1.2.1",
25:     "@stream-io/audio-filters-web": "^0.7.3",
26:     "@stream-io/video-react-sdk": "^1.36.1",
27:     "@supabase/ssr": "catalog:",
28:     "@supabase/supabase-js": "catalog:",
29:     "@tailwindcss/postcss": "^4.1.14",
30:     "@vercel/analytics": "^1.5.0",
31:     "@vercel/speed-insights": "^1.2.0",
32:     "autoprefixer": "^10.4.21",
33:     "class-variance-authority": "^0.7.1",
34:     "cloudinary": "^2.2.0",
35:     "clsx": "^2.1.1",
36:     "dotenv": "^17.2.3",
37:     "geist": "^1.3.0",
38:     "genkit": "1.34.0",
39:     "lucide-react": "catalog:",
40:     "motion": "^12.23.24",
41:     "next": "catalog:",
42:     "next-cloudinary": "^6.17.0",
43:     "next-themes": "^0.4.6",
44:     "pexels": "^1.4.0",
45:     "qrcode.react": "^4.2.0",
46:     "react": "catalog:",
47:     "react-dom": "catalog:",
48:     "react-icons": "^5.5.0",
49:     "sonner": "^2.0.7",
50:     "stream-chat": "^9.44.2",
51:     "stream-chat-react": "^14.2.0",
52:     "tailwind-merge": "^3.3.1",
53:     "tailwindcss-animate": "^1.0.7",
54:     "wav": "^1.0.2",
55:     "zod": "catalog:"
56:   },
57:   "devDependencies": {
58:     "@malalang/eslint-config": "workspace:*",
59:     "@malalang/typescript-config": "workspace:*",
60:     "@types/node": "^22.19.19",
61:     "@types/react": "19.2.2",
62:     "@types/react-dom": "19.2.2",
63:     "@types/wav": "^1.0.3",
64:     "eslint": "catalog:",
65:     "postcss": "catalog:",
66:     "tailwindcss": "catalog:",
67:     "typescript": "catalog:"
68:   }
69: }
````

## File: packages/shared/src/types/supabase.ts
````typescript
  1: export type Json =
  2:   | string
  3:   | number
  4:   | boolean
  5:   | null
  6:   | { [key: string]: Json | undefined }
  7:   | Json[]
  8: 
  9: export interface Database {
 10:   public: {
 11:     Tables: {
 12:       addon_services: {
 13:         Row: {
 14:           category_id: string
 15:           display_order: number | null
 16:           id: string
 17:           price: string
 18:           title: string
 19:         }
 20:         Insert: {
 21:           category_id: string
 22:           display_order?: number | null
 23:           id?: string
 24:           price: string
 25:           title: string
 26:         }
 27:         Update: {
 28:           category_id?: string
 29:           display_order?: number | null
 30:           id?: string
 31:           price?: string
 32:           title?: string
 33:         }
 34:         Relationships: [
 35:           {
 36:             foreignKeyName: "addon_services_category_id_fkey"
 37:             columns: ["category_id"]
 38:             isOneToOne: false
 39:             referencedRelation: "service_categories"
 40:             referencedColumns: ["id"]
 41:           }
 42:         ]
 43:       }
 44:       blogs: {
 45:         Row: {
 46:           author_id: string | null
 47:           created_at: string | null
 48:           excerpt: string | null
 49:           html_content: string
 50:           id: string
 51:           image_url: string | null
 52:           keywords: string | null
 53:           meta_description: string | null
 54:           meta_title: string | null
 55:           published_at: string | null
 56:           reading_time_minutes: number | null
 57:           slug: string
 58:           source: string | null
 59:           status: 'draft' | 'published' | 'archived' | null
 60:           title: string
 61:           updated_at: string | null
 62:         }
 63:         Insert: {
 64:           author_id?: string | null
 65:           created_at?: string | null
 66:           excerpt?: string | null
 67:           html_content: string
 68:           id?: string
 69:           image_url?: string | null
 70:           keywords?: string | null
 71:           meta_description?: string | null
 72:           meta_title?: string | null
 73:           published_at?: string | null
 74:           reading_time_minutes?: number | null
 75:           slug: string
 76:           source?: string | null
 77:           status?: 'draft' | 'published' | 'archived' | null
 78:           title: string
 79:           updated_at?: string | null
 80:         }
 81:         Update: {
 82:           author_id?: string | null
 83:           created_at?: string | null
 84:           excerpt?: string | null
 85:           html_content?: string
 86:           id?: string
 87:           image_url?: string | null
 88:           keywords?: string | null
 89:           meta_description?: string | null
 90:           meta_title?: string | null
 91:           published_at?: string | null
 92:           reading_time_minutes?: number | null
 93:           slug?: string
 94:           source?: string | null
 95:           status?: 'draft' | 'published' | 'archived' | null
 96:           title?: string
 97:           updated_at?: string | null
 98:         }
 99:         Relationships: [
100:           {
101:             foreignKeyName: "blogs_author_id_fkey"
102:             columns: ["author_id"]
103:             isOneToOne: false
104:             referencedRelation: "profiles"
105:             referencedColumns: ["id"]
106:           }
107:         ]
108:       }
109:       clients: {
110:         Row: {
111:           business_name: string | null
112:           created_at: string | null
113:           email: string | null
114:           id: string
115:           phone: string | null
116:           updated_at: string | null
117:           user_name: string | null
118:           service_id: string | null
119:         }
120:         Insert: {
121:           business_name?: string | null
122:           created_at?: string | null
123:           email?: string | null
124:           id?: string
125:           phone?: string | null
126:           updated_at?: string | null
127:           user_name?: string | null
128:           service_id?: string | null
129:         }
130:         Update: {
131:           business_name?: string | null
132:           created_at?: string | null
133:           email?: string | null
134:           id?: string
135:           phone?: string | null
136:           updated_at?: string | null
137:           user_name?: string | null
138:           service_id?: string | null
139:         }
140:         Relationships: [
141:           {
142:             foreignKeyName: "clients_service_id_fkey"
143:             columns: ["service_id"]
144:             isOneToOne: false
145:             referencedRelation: "services"
146:             referencedColumns: ["id"]
147:           }
148:         ]
149:       }
150:       comments: {
151:         Row: {
152:           blog_id: string
153:           content: string
154:           created_at: string | null
155:           email: string | null
156:           id: string
157:           phone: string | null
158:           user_id: string
159:         }
160:         Insert: {
161:           blog_id: string
162:           content: string
163:           created_at?: string | null
164:           email?: string | null
165:           id?: string
166:           phone?: string | null
167:           user_id: string
168:         }
169:         Update: {
170:           blog_id?: string
171:           content?: string
172:           created_at?: string | null
173:           email?: string | null
174:           id?: string
175:           phone?: string | null
176:           user_id?: string
177:         }
178:         Relationships: [
179:           {
180:             foreignKeyName: "comments_blog_id_fkey"
181:             columns: ["blog_id"]
182:             isOneToOne: false
183:             referencedRelation: "blogs"
184:             referencedColumns: ["id"]
185:           },
186:           {
187:             foreignKeyName: "comments_user_id_fkey"
188:             columns: ["user_id"]
189:             isOneToOne: false
190:             referencedRelation: "clients"
191:             referencedColumns: ["id"]
192:           }
193:         ]
194:       }
195:       contacts: {
196:         Row: {
197:           created_at: string | null
198:           email: string
199:           id: string
200:           is_read: boolean | null
201:           is_responded: boolean | null
202:           message: string
203:           name: string
204:         }
205:         Insert: {
206:           created_at?: string | null
207:           email: string
208:           id?: string
209:           is_read?: boolean | null
210:           is_responded?: boolean | null
211:           message: string
212:           name: string
213:         }
214:         Update: {
215:           created_at?: string | null
216:           email?: string
217:           id?: string
218:           is_read?: boolean | null
219:           is_responded?: boolean | null
220:           message?: string
221:           name?: string
222:         }
223:         Relationships: []
224:       }
225:       faqs: {
226:         Row: {
227:           answer: string
228:           category_id: string | null
229:           display_order: number | null
230:           id: string
231:           question: string
232:           service_id: string | null
233:         }
234:         Insert: {
235:           answer: string
236:           category_id?: string | null
237:           display_order?: number | null
238:           id?: string
239:           question: string
240:           service_id?: string | null
241:         }
242:         Update: {
243:           answer?: string
244:           category_id?: string | null
245:           display_order?: number | null
246:           id?: string
247:           question?: string
248:           service_id?: string | null
249:         }
250:         Relationships: [
251:           {
252:             foreignKeyName: "faqs_category_id_fkey"
253:             columns: ["category_id"]
254:             isOneToOne: false
255:             referencedRelation: "service_categories"
256:             referencedColumns: ["id"]
257:           },
258:           {
259:             foreignKeyName: "faqs_service_id_fkey"
260:             columns: ["service_id"]
261:             isOneToOne: false
262:             referencedRelation: "services"
263:             referencedColumns: ["id"]
264:           }
265:         ]
266:       }
267:       launch_pack_services: {
268:         Row: {
269:           category_id: string | null
270:           display_order: number | null
271:           id: string
272:           price: string
273:           title: string
274:         }
275:         Insert: {
276:           category_id?: string | null
277:           display_order?: number | null
278:           id?: string
279:           price: string
280:           title: string
281:         }
282:         Update: {
283:           category_id?: string | null
284:           display_order?: number | null
285:           id?: string
286:           price?: string
287:           title?: string
288:         }
289:         Relationships: [
290:           {
291:             foreignKeyName: "launch_pack_services_category_id_fkey"
292:             columns: ["category_id"]
293:             isOneToOne: false
294:             referencedRelation: "service_categories"
295:             referencedColumns: ["id"]
296:           }
297:         ]
298:       }
299:       meeting_rooms: {
300:         Row: {
301:           call_id: string
302:           client_id: string | null
303:           created_at: string
304:           created_by: string | null
305:           id: string
306:           metadata: Json | null
307:           status: 'active' | 'archived' | 'cancelled' | null
308:           title: string
309:         }
310:         Insert: {
311:           call_id: string
312:           client_id?: string | null
313:           created_at?: string
314:           created_by?: string | null
315:           id?: string
316:           metadata?: Json | null
317:           status?: 'active' | 'archived' | 'cancelled' | null
318:           title: string
319:         }
320:         Update: {
321:           call_id?: string
322:           client_id?: string | null
323:           created_at?: string
324:           created_by?: string | null
325:           id?: string
326:           metadata?: Json | null
327:           status?: 'active' | 'archived' | 'cancelled' | null
328:           title?: string
329:         }
330:         Relationships: [
331:           {
332:             foreignKeyName: "meeting_rooms_client_id_fkey"
333:             columns: ["client_id"]
334:             isOneToOne: false
335:             referencedRelation: "clients"
336:             referencedColumns: ["id"]
337:           },
338:           {
339:             foreignKeyName: "meeting_rooms_created_by_fkey1"
340:             columns: ["created_by"]
341:             isOneToOne: false
342:             referencedRelation: "profiles"
343:             referencedColumns: ["id"]
344:           }
345:         ]
346:       }
347:       portfolio_items: {
348:         Row: {
349:           category: string | null
350:           description: string | null
351:           display_order: number | null
352:           id: string
353:           image_url: string | null
354:           title: string
355:         }
356:         Insert: {
357:           category?: string | null
358:           description?: string | null
359:           display_order?: number | null
360:           id?: string
361:           image_url?: string | null
362:           title: string
363:         }
364:         Update: {
365:           category?: string | null
366:           description?: string | null
367:           display_order?: number | null
368:           id?: string
369:           image_url?: string | null
370:           title?: string
371:         }
372:         Relationships: []
373:       }
374:       profiles: {
375:         Row: {
376:           avatar_url: string | null
377:           bio: string | null
378:           created_at: string | null
379:           id: string
380:           image_url: string | null
381:           name: string
382:           updated_at: string | null
383:         }
384:         Insert: {
385:           avatar_url?: string | null
386:           bio?: string | null
387:           created_at?: string | null
388:           id?: string
389:           image_url?: string | null
390:           name: string
391:           updated_at?: string | null
392:         }
393:         Update: {
394:           avatar_url?: string | null
395:           bio?: string | null
396:           created_at?: string | null
397:           id?: string
398:           image_url?: string | null
399:           name?: string
400:           updated_at?: string | null
401:         }
402:         Relationships: []
403:       }
404:       questionnaires: {
405:         Row: {
406:           created_at: string | null
407:           data: Json
408:           id: string
409:         }
410:         Insert: {
411:           created_at?: string | null
412:           data: Json
413:           id?: string
414:         }
415:         Update: {
416:           created_at?: string | null
417:           data?: Json
418:           id?: string
419:         }
420:         Relationships: []
421:       }
422:       recurring_services: {
423:         Row: {
424:           category_id: string | null
425:           description: string | null
426:           id: string
427:           price: string
428:           title: string
429:         }
430:         Insert: {
431:           category_id?: string | null
432:           description?: string | null
433:           id?: string
434:           price: string
435:           title: string
436:         }
437:         Update: {
438:           category_id?: string | null
439:           description?: string | null
440:           id?: string
441:           price?: string
442:           title?: string
443:         }
444:         Relationships: [
445:           {
446:             foreignKeyName: "recurring_services_category_id_fkey"
447:             columns: ["category_id"]
448:             isOneToOne: false
449:             referencedRelation: "service_categories"
450:             referencedColumns: ["id"]
451:           }
452:         ]
453:       }
454:       service_categories: {
455:         Row: {
456:           description: string | null
457:           display_order: number | null
458:           id: string
459:           image_url: string | null
460:           name: string
461:           package_count: number | null
462:           price_from: string | null
463:           slug: string
464:           tagline: string | null
465:         }
466:         Insert: {
467:           description?: string | null
468:           display_order?: number | null
469:           id?: string
470:           image_url?: string | null
471:           name: string
472:           package_count?: number | null
473:           price_from?: string | null
474:           slug: string
475:           tagline?: string | null
476:         }
477:         Update: {
478:           description?: string | null
479:           display_order?: number | null
480:           id?: string
481:           image_url?: string | null
482:           name?: string
483:           package_count?: number | null
484:           price_from?: string | null
485:           slug?: string
486:           tagline?: string | null
487:         }
488:         Relationships: []
489:       }
490:       service_details: {
491:         Row: {
492:           best_for: string | null
493:           features: string[] | null
494:           id: string
495:           ideal_for: string | null
496:           is_combo: boolean | null
497:           is_featured: boolean | null
498:           long_description: string | null
499:           savings_note: string | null
500:           service_id: string | null
501:           service_url: string
502:           type: 'static' | 'dynamic' | null
503:         }
504:         Insert: {
505:           best_for?: string | null
506:           features?: string[] | null
507:           id?: string
508:           ideal_for?: string | null
509:           is_combo?: boolean | null
510:           is_featured?: boolean | null
511:           long_description?: string | null
512:           savings_note?: string | null
513:           service_id?: string | null
514:           service_url: string
515:           type?: 'static' | 'dynamic' | null
516:         }
517:         Update: {
518:           best_for?: string | null
519:           features?: string[] | null
520:           id?: string
521:           ideal_for?: string | null
522:           is_combo?: boolean | null
523:           is_featured?: boolean | null
524:           long_description?: string | null
525:           savings_note?: string | null
526:           service_id?: string | null
527:           service_url?: string
528:           type?: 'static' | 'dynamic' | null
529:         }
530:         Relationships: [
531:           {
532:             foreignKeyName: "service_details_service_id_fkey"
533:             columns: ["service_id"]
534:             isOneToOne: false
535:             referencedRelation: "services"
536:             referencedColumns: ["id"]
537:           }
538:         ]
539:       }
540:       services: {
541:         Row: {
542:           active: boolean | null
543:           category: string
544:           category_id: string | null
545:           created_at: string | null
546:           description: string | null
547:           id: string
548:           price: string | null
549:           title: string
550:           updated_at: string | null
551:         }
552:         Insert: {
553:           active?: boolean | null
554:           category: string
555:           category_id?: string | null
556:           created_at?: string | null
557:           description?: string | null
558:           id?: string
559:           price?: string | null
560:           title: string
561:           updated_at?: string | null
562:         }
563:         Update: {
564:           active?: boolean | null
565:           category?: string
566:           category_id?: string | null
567:           created_at?: string | null
568:           description?: string | null
569:           id?: string
570:           price?: string | null
571:           title?: string
572:           updated_at?: string | null
573:         }
574:         Relationships: [
575:           {
576:             foreignKeyName: "services_category_id_fkey"
577:             columns: ["category_id"]
578:             isOneToOne: false
579:             referencedRelation: "service_categories"
580:             referencedColumns: ["id"]
581:           }
582:         ]
583:       }
584:       testimonials: {
585:         Row: {
586:           author: string
587:           company: string | null
588:           display_order: number | null
589:           id: string
590:           quote: string
591:         }
592:         Insert: {
593:           author: string
594:           company?: string | null
595:           display_order?: number | null
596:           id?: string
597:           quote: string
598:         }
599:         Update: {
600:           author?: string
601:           company?: string | null
602:           display_order?: number | null
603:           id?: string
604:           quote?: string
605:         }
606:         Relationships: []
607:       }
608:     }
609:     Views: {
610:       [_ in never]: never
611:     }
612:     Functions: {
613:       [_ in never]: never
614:     }
615:     Enums: {
616:       [_ in never]: never
617:     }
618:     CompositeTypes: {
619:       [_ in never]: never
620:     }
621:   }
622: }
````

## File: apps/admin/app/api/stream-token/route.ts
````typescript
 1: import { NextResponse } from 'next/server';
 2: import { generateStreamToken, upsertStreamChatChannel } from '@malalang/shared/services/stream';
 3: import { createSupabaseServerClient } from "@malalang/shared/supabase/server";
 4: 
 5: export async function GET(request: Request) {
 6:   try {
 7:     const { searchParams } = new URL(request.url);
 8:     const callId = searchParams.get('callId');
 9: 
10:     const supabase = await createSupabaseServerClient();
11:     const { data: { user } } = await supabase.auth.getUser();
12: 
13: 
14:     if (!user) {
15:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
16:     }
17: 
18:     const userName = user.user_metadata?.full_name || user.email || 'Admin Host';
19: 
20:     const token = await generateStreamToken(user.id);
21: 
22: 
23: 
24: 
25:     if (callId) {
26:       try {
27:         await upsertStreamChatChannel(callId, [{ id: user.id, name: userName }]);
28:       } catch (channelErr) {
29: 
30:         console.error('[admin/stream-token] Failed to upsert channel member:', channelErr);
31:       }
32:     }
33: 
34:     return NextResponse.json({ token, userId: user.id });
35:   } catch (error: any) {
36:     console.error('Stream Token API GET Error:', error);
37:     return NextResponse.json({ error: error.message }, { status: 500 });
38:   }
39: }
````

## File: apps/client/app/tools/meetings/page.tsx
````typescript
  1: 'use client';
  2: 
  3: import React, { useState, useMemo } from 'react';
  4: import { MeetingWrapper } from "@/app/_components/MeetingWrapper";
  5: import { getActiveMeetingForClient } from '@malalang/shared/services/meetings';
  6: import { Shield, Video, Users, Info } from 'lucide-react';
  7: import HeroBackground from '@/app/_components/HeroBackground';
  8: import AddClient from '@/app/_components/AddClient';
  9: import { Client } from '@malalang/shared/types';
 10: 
 11: export default function MeetingRoomPage() {
 12:   const [activeClient, setActiveClient] = useState<Client | null>(null);
 13:   const [activeCallId, setActiveCallId] = useState<string>("malalang");
 14: 
 15:   const handleClientIdentified = async (client: Client) => {
 16:     setActiveClient(client);
 17:     try {
 18:       const activeMeeting = await getActiveMeetingForClient(client.id);
 19:       if (activeMeeting) {
 20:         setActiveCallId(activeMeeting.callId);
 21:       }
 22:     } catch (err) {
 23:       console.error("Error fetching active meeting:", err);
 24:     }
 25:   };
 26: 
 27:   return (
 28:     <main className="min-h-screen bg-brand-dark relative pt-20 pb-6 overflow-hidden">
 29:       <HeroBackground />
 30: 
 31:       <div className="container mx-auto px-4 relative z-10">
 32:         <div className="max-w-6xl mx-auto">
 33: 
 34:           <div className="text-center mb-12">
 35:             <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light leading-tight mb-4">
 36:               Virtual <span className="text-brand-primary glow-green">Consultation</span>
 37:             </h1>
 38:             <p className="text-xl text-blue-300 font-semibold max-w-2xl mx-auto">
 39:               Secure, encrypted video meeting room for our project discussions.
 40:             </p>
 41:           </div>
 42: 
 43:           {!activeClient ? (
 44:             <div className="max-w-xl mx-auto">
 45:               <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-8 flex gap-4 items-start shadow-xl">
 46:                 <Info className="text-blue-400 shrink-0 w-6 h-6" />
 47:                 <p className="text-sm text-blue-200 leading-relaxed">
 48:                   To enter the meeting, please identify yourself with the phone number used during your booking. If you haven't booked yet, you can still join by providing your details.
 49:                 </p>
 50:               </div>
 51:               <AddClient
 52:                 onSuccess={handleClientIdentified}
 53:                 title="Enter your details to join"
 54:               />
 55:             </div>
 56:           ) : (
 57:             <div className="space-y-6 animate-in fade-in duration-700">
 58:               {}
 59:               <div className="flex items-center justify-between mb-4 gap-4">
 60:                 <div className="flex items-center gap-3">
 61:                   <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand-primary/20">
 62:                     Live
 63:                   </span>
 64:                   <span className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
 65:                     <Shield className="w-3 h-3 text-emerald-500" />
 66:                     Encrypted
 67:                   </span>
 68:                   <span className="text-slate-400 font-medium text-sm">
 69:                     Meeting as: <span className="text-white font-bold">{activeClient.userName}</span>
 70:                   </span>
 71:                 </div>
 72: 
 73:                 <button
 74:                   onClick={() => setActiveClient(null)}
 75:                   className="text-xs text-slate-500 hover:text-brand-primary underline"
 76:                 >
 77:                   Switch Account
 78:                 </button>
 79:               </div>
 80: 
 81:               {}
 82:               <div className="group relative">
 83:                 <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 blur-3xl opacity-50 group-hover:opacity-75 transition duration-1000" />
 84: 
 85:                 <div className="relative">
 86:                   <MeetingWrapper
 87:                     callId={activeCallId}
 88:                     userName={activeClient.userName}
 89:                     userId={activeClient.id}
 90:                   />
 91:                 </div>
 92: 
 93:                 {}
 94:                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
 95:                   <div className="p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 flex gap-4">
 96:                     <div className="p-2 bg-emerald-500/10 rounded-lg h-fit">
 97:                       <Video className="w-5 h-5 text-emerald-500" />
 98:                     </div>
 99:                     <div>
100:                       <h4 className="text-white font-bold text-sm mb-1">High Quality</h4>
101:                       <p className="text-slate-500 text-xs leading-relaxed">Automatic bandwidth optimization enabled.</p>
102:                     </div>
103:                   </div>
104:                   <div className="p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 flex gap-4">
105:                     <div className="p-2 bg-blue-500/10 rounded-lg h-fit">
106:                       <Users className="w-5 h-5 text-blue-500" />
107:                     </div>
108:                     <div>
109:                       <h4 className="text-white font-bold text-sm mb-1">Interactive</h4>
110:                       <p className="text-slate-500 text-xs leading-relaxed">Screen sharing and chat controls available below.</p>
111:                     </div>
112:                   </div>
113:                   <div className="p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 flex gap-4">
114:                     <div className="p-2 bg-purple-500/10 rounded-lg h-fit">
115:                       <Shield className="w-5 h-5 text-purple-500" />
116:                     </div>
117:                     <div>
118:                       <h4 className="text-white font-bold text-sm mb-1">Secure</h4>
119:                       <p className="text-slate-500 text-xs leading-relaxed">Your privacy is protected with E2E encryption.</p>
120:                     </div>
121:                   </div>
122:                 </div>
123:               </div>
124:             </div>
125:           )}
126:         </div>
127:       </div>
128:     </main>
129:   );
130: }
````

## File: packages/shared/src/supabase/services/meetings.ts
````typescript
  1: import { supabase, handleResponse } from '../client';
  2: import { MeetingRoom } from '../../types';
  3: import type { Database } from '../../types/supabase';
  4: 
  5: type MeetingRoomRow = Database['public']['Tables']['meeting_rooms']['Row'];
  6: 
  7: 
  8: 
  9: 
 10: export async function createMeetingRoom(
 11:   data: { callId: string; title: string; createdBy: string; clientId?: string; metadata?: any }
 12: ): Promise<MeetingRoom> {
 13: 
 14:   const result = await handleResponse<MeetingRoomRow>(
 15:     supabase
 16:       .from('meeting_rooms')
 17:       .insert([
 18:         {
 19:           call_id: data.callId,
 20:           title: data.title,
 21:           created_by: data.createdBy,
 22:           client_id: data.clientId,
 23:           metadata: data.metadata || {},
 24:         },
 25:       ])
 26:       .select()
 27:       .single()
 28:   );
 29: 
 30:   return {
 31:     id: result.id,
 32:     callId: result.call_id,
 33:     title: result.title,
 34:     createdBy: result.created_by,
 35:     clientId: result.client_id,
 36:     status: result.status,
 37:     metadata: result.metadata,
 38:     createdAt: result.created_at,
 39:   };
 40: }
 41: 
 42: 
 43: 
 44: 
 45: export async function getMeetingRoomByCallId(callId: string,): Promise<MeetingRoom> {
 46: 
 47:   const result = await handleResponse<MeetingRoomRow>(
 48:     supabase
 49:       .from('meeting_rooms')
 50:       .select('*')
 51:       .eq('call_id', callId)
 52:       .single()
 53:   );
 54: 
 55:   return {
 56:     id: result.id,
 57:     callId: result.call_id,
 58:     title: result.title,
 59:     createdBy: result.created_by,
 60:     clientId: result.client_id,
 61:     status: result.status,
 62:     metadata: result.metadata,
 63:     createdAt: result.created_at,
 64:   };
 65: }
 66: 
 67: 
 68: 
 69: 
 70: export async function getActiveMeetingForClient(clientId: string,): Promise<MeetingRoom | null> {
 71: 
 72:   const { data, error } = await supabase
 73:     .from('meeting_rooms')
 74:     .select('*')
 75:     .eq('client_id', clientId)
 76:     .eq('status', 'active')
 77:     .order('created_at', { ascending: false })
 78:     .maybeSingle();
 79: 
 80:   if (error || !data) return null;
 81: 
 82:   return {
 83:     id: data.id,
 84:     callId: data.call_id,
 85:     title: data.title,
 86:     createdBy: data.created_by,
 87:     clientId: data.client_id,
 88:     status: data.status,
 89:     metadata: data.metadata,
 90:     createdAt: data.created_at,
 91:   };
 92: }
 93: 
 94: 
 95: 
 96: 
 97: export async function archiveMeetingRoom(callId: string): Promise<MeetingRoom> {
 98: 
 99:   const result = await handleResponse<MeetingRoomRow>(
100:     supabase
101:       .from('meeting_rooms')
102:       .update({ status: 'archived' })
103:       .eq('call_id', callId)
104:       .select()
105:       .single()
106:   );
107: 
108:   return {
109:     id: result.id,
110:     callId: result.call_id,
111:     title: result.title,
112:     createdBy: result.created_by,
113:     clientId: result.client_id,
114:     status: result.status,
115:     metadata: result.metadata,
116:     createdAt: result.created_at,
117:   };
118: }
119: 
120: 
121: 
122: 
123: export async function getActiveMeetings(): Promise<MeetingRoom[]> {
124: 
125:   const data = await handleResponse<MeetingRoomRow[]>(
126:     supabase
127:       .from('meeting_rooms')
128:       .select('*')
129:       .eq('status', 'active')
130:       .order('created_at', { ascending: false })
131:   );
132: 
133:   return (data || []).map((m: MeetingRoomRow) => ({
134:     id: m.id,
135:     callId: m.call_id,
136:     title: m.title,
137:     createdBy: m.created_by,
138:     clientId: m.client_id,
139:     status: m.status,
140:     metadata: m.metadata,
141:     createdAt: m.created_at,
142:   }));
143: }
````

## File: packages/shared/src/supabase/services/stream.ts
````typescript
  1: import { SignJWT } from 'jose';
  2: 
  3: 
  4: 
  5: 
  6: export async function generateStreamToken(userId: string): Promise<string> {
  7:   const secret = process.env.STREAM_API_SECRET;
  8: 
  9:   if (!secret) {
 10:     console.error('STREAM_API_SECRET is not configured in the environment.');
 11:     throw new Error('STREAM_API_SECRET is not configured');
 12:   }
 13: 
 14:   const secretKey = new TextEncoder().encode(secret);
 15: 
 16: 
 17: 
 18:   const now = Math.floor(Date.now() / 1000);
 19:   const issuedAt = now - 60;
 20:   const expiration = now + 3600;
 21: 
 22:   const token = await new SignJWT({ user_id: userId })
 23:     .setProtectedHeader({ alg: 'HS256' })
 24:     .setIssuedAt(issuedAt)
 25:     .setExpirationTime(expiration)
 26:     .sign(secretKey);
 27: 
 28:   return token;
 29: }
 30: 
 31: 
 32: 
 33: 
 34: 
 35: 
 36: 
 37: 
 38: 
 39: 
 40: 
 41: 
 42: 
 43: export async function upsertStreamChatChannel(
 44:   callId: string,
 45:   members: { id: string; name?: string }[]
 46: ): Promise<void> {
 47:   const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
 48:   const secret = process.env.STREAM_API_SECRET;
 49: 
 50:   if (!apiKey || !secret) {
 51:     throw new Error('Stream API key or secret is not configured');
 52:   }
 53: 
 54: 
 55:   const secretKey = new TextEncoder().encode(secret);
 56:   const now = Math.floor(Date.now() / 1000);
 57:   const serverToken = await new SignJWT({ server: true })
 58:     .setProtectedHeader({ alg: 'HS256' })
 59:     .setIssuedAt(now - 60)
 60:     .setExpirationTime(now + 3600)
 61:     .sign(secretKey);
 62: 
 63:   const channelId = callId.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
 64:   const memberIds = members.map((m) => m.id);
 65: 
 66: 
 67:   const userRes = await fetch(`https://chat.stream-io-api.com/users?api_key=${apiKey}`, {
 68:     method: 'POST',
 69:     headers: {
 70:       'Content-Type': 'application/json',
 71:       Authorization: serverToken,
 72:       'stream-auth-type': 'jwt',
 73:     },
 74:     body: JSON.stringify({
 75:       users: Object.fromEntries(
 76:         members.map((m) => [m.id, { id: m.id, name: m.name ?? m.id, role: 'user' }])
 77:       ),
 78:     }),
 79:   });
 80: 
 81:   if (!userRes.ok) {
 82:     const err = await userRes.text();
 83:     throw new Error(`Failed to upsert Stream users: ${err}`);
 84:   }
 85: 
 86: 
 87:   const channelRes = await fetch(
 88:     `https://chat.stream-io-api.com/channels/messaging/${channelId}/query?api_key=${apiKey}`,
 89:     {
 90:       method: 'POST',
 91:       headers: {
 92:         'Content-Type': 'application/json',
 93:         Authorization: serverToken,
 94:         'stream-auth-type': 'jwt',
 95:       },
 96:       body: JSON.stringify({
 97:         state: true,
 98:         watch: false,
 99:         data: {
100:           members: memberIds,
101:           created_by_id: memberIds[0] ?? 'server',
102:         },
103:       }),
104:     }
105:   );
106: 
107:   if (!channelRes.ok) {
108:     const err = await channelRes.text();
109:     throw new Error(`Failed to get/create Stream channel: ${err}`);
110:   }
111: }
````

## File: apps/admin/app/meetings/page.tsx
````typescript
  1: 'use client';
  2: 
  3: import React, { useState, useEffect } from 'react';
  4: import { getActiveMeetings, archiveMeetingRoom } from '@malalang/shared/services/meetings';
  5: import { getClients } from '@malalang/shared/services/clients';
  6: import { MeetingRoom, Client } from '@malalang/shared/types';
  7: import { createMeetingRoomAction } from '@/app/_lib/actions';
  8: import { Button } from '@/app/_components/ui/button';
  9: import { Input } from '@/app/_components/ui/input';
 10: import { Card, CardContent } from '@/app/_components/ui/card';
 11: import { toast } from 'sonner';
 12: import { Loader2, Trash2, Video, ArrowRight, Plus } from 'lucide-react';
 13: import Link from 'next/link';
 14: 
 15: export default function AdminMeetingsPage() {
 16:   const [rooms, setRooms] = useState<MeetingRoom[]>([]);
 17:   const [clients, setClients] = useState<Client[]>([]);
 18:   const [newCallId, setNewCallId] = useState('');
 19:   const [newTitle, setNewTitle] = useState('');
 20:   const [selectedClientId, setSelectedClientId] = useState('');
 21:   const [isLoading, setIsLoading] = useState(true);
 22:   const [isCreating, setIsCreating] = useState(false);
 23: 
 24:   useEffect(() => {
 25:     fetchData();
 26:   }, []);
 27: 
 28:   const fetchData = async () => {
 29:     setIsLoading(true);
 30:     try {
 31:       const [activeRooms, clientList] = await Promise.all([
 32:         getActiveMeetings(),
 33:         getClients()
 34:       ]);
 35:       setRooms(activeRooms);
 36:       setClients(clientList);
 37:     } catch (error) {
 38:       console.error('Fetch data error:', error);
 39:       toast.error('Failed to fetch data');
 40:     } finally {
 41:       setIsLoading(false);
 42:     }
 43:   };
 44: 
 45:   const handleCreate = async () => {
 46:     const callId = newCallId.trim();
 47:     const title = newTitle.trim();
 48: 
 49:     if (!callId || !title) {
 50:       toast.error('Please enter both a Call ID and a Title');
 51:       return;
 52:     }
 53: 
 54:     const callIdRegex = /^[a-z0-9_-]+$/i;
 55:     if (!callIdRegex.test(callId)) {
 56:       toast.error('Call ID can only contain letters, numbers, underscores (_), and hyphens (-)');
 57:       return;
 58:     }
 59: 
 60:     setIsCreating(true);
 61:     try {
 62: 
 63: 
 64:       const result = await createMeetingRoomAction({
 65:         callId,
 66:         title,
 67:         clientId: selectedClientId || undefined,
 68:       });
 69: 
 70:       if (!result.success) {
 71:         toast.error(`Failed to create room: ${result.error}`);
 72:         return;
 73:       }
 74: 
 75:       toast.success('Room created successfully!');
 76:       setNewCallId('');
 77:       setNewTitle('');
 78:       setSelectedClientId('');
 79:       fetchData();
 80:     } catch (error: any) {
 81:       console.error('Full creation error:', error);
 82:       toast.error(`Failed to create room: ${error.message || 'Unknown error'}`);
 83:     } finally {
 84:       setIsCreating(false);
 85:     }
 86:   };
 87: 
 88: 
 89:   const handleArchive = async (callId: string) => {
 90:     try {
 91:       await archiveMeetingRoom(callId);
 92:       toast.success('Room archived');
 93:       fetchData();
 94:     } catch (error) {
 95:       toast.error('Failed to archive room');
 96:     }
 97:   };
 98: 
 99:   return (
100:     <div className="p-8 max-w-6xl mx-auto">
101:       <div className="flex justify-between items-center mb-8">
102:         <div>
103:           <h1 className="text-3xl font-bold text-slate-900">Meeting Rooms</h1>
104:           <p className="text-slate-500">Manage your video consultations and internal meetings.</p>
105:         </div>
106:         <Button asChild variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
107:           <Link href="/meetings/default-room">
108:             <Video className="w-4 h-4 mr-2" /> Join Default Room
109:           </Link>
110:         </Button>
111:       </div>
112: 
113:       <Card className="mb-8 border-slate-200 shadow-sm overflow-hidden">
114:         <div className="bg-emerald-600 px-6 py-3">
115:           <h2 className="text-white font-semibold flex items-center gap-2">
116:             <Plus className="w-4 h-4" /> Create New Room
117:           </h2>
118:         </div>
119:         <CardContent className="p-6">
120:           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
121:             <div className="space-y-2">
122:               <label className="text-sm font-medium text-slate-700">Call ID</label>
123:               <Input
124:                 value={newCallId}
125:                 onChange={(e) => setNewCallId(e.target.value)}
126:                 placeholder="e.g. daily-sync-123"
127:                 className="border-slate-300 focus:ring-emerald-500"
128:               />
129:             </div>
130:             <div className="space-y-2">
131:               <label className="text-sm font-medium text-slate-700">Meeting Title</label>
132:               <Input
133:                 value={newTitle}
134:                 onChange={(e) => setNewTitle(e.target.value)}
135:                 placeholder="e.g. Team Daily Sync"
136:                 className="border-slate-300 focus:ring-emerald-500"
137:               />
138:             </div>
139:             <div className="space-y-2">
140:               <label className="text-sm font-medium text-slate-700">Client (Optional)</label>
141:               <select
142:                 value={selectedClientId}
143:                 onChange={(e) => setSelectedClientId(e.target.value)}
144:                 className="w-full h-10 border border-slate-300 rounded-lg px-3 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
145:               >
146:                 <option value="">None</option>
147:                 {clients.map(c => (
148:                   <option key={c.id} value={c.id}>{c.userName} ({c.businessName})</option>
149:                 ))}
150:               </select>
151:             </div>
152:           </div>
153:           <Button
154:             onClick={handleCreate}
155:             disabled={isCreating || !newCallId.trim() || !newTitle.trim()}
156:             className="w-full md:w-auto px-8"
157:           >
158:             {isCreating ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <Video className="w-4 h-4 mr-2" />}
159:             {isCreating ? 'Creating...' : 'Create Meeting'}
160:           </Button>
161:         </CardContent>
162:       </Card>
163: 
164:       <Card className="border-slate-200 shadow-sm overflow-hidden">
165:         <div className="bg-slate-900 px-6 py-3">
166:           <h2 className="text-white font-semibold">Active Meeting Rooms</h2>
167:         </div>
168:         <CardContent className="p-0">
169:           {isLoading ? (
170:             <div className="flex justify-center py-24"><Loader2 className="animate-spin text-emerald-600 h-12 w-12" /></div>
171:           ) : rooms.length === 0 ? (
172:             <div className="text-center py-24 text-slate-500 bg-slate-50">
173:               <Video className="w-16 h-16 mx-auto mb-4 text-slate-300" />
174:               <p className="text-lg font-medium">No active rooms found</p>
175:               <p className="text-sm">Create a new room above to start a meeting.</p>
176:             </div>
177:           ) : (
178:             <div className="divide-y divide-slate-100">
179:               {rooms.map((room) => (
180:                 <div key={room.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-slate-50 transition-colors">
181:                   <div className="flex items-start gap-4 mb-4 md:mb-0">
182:                     <div className="p-3 bg-emerald-100 rounded-xl">
183:                       <Video className="text-emerald-600 h-6 w-6" />
184:                     </div>
185:                     <div>
186:                       <h3 className="font-bold text-slate-900 text-lg leading-tight">{room.title}</h3>
187:                       <div className="flex items-center gap-2 mt-1">
188:                         <span className="font-mono text-xs px-2 py-0.5 bg-slate-200 text-slate-700 rounded uppercase tracking-wider">ID: {room.callId}</span>
189:                         <span className="text-xs text-slate-500">• Created {new Date(room.createdAt).toLocaleDateString()}</span>
190:                       </div>
191:                     </div>
192:                   </div>
193:                   <div className="flex items-center gap-3">
194:                     <Button asChild variant="default" className="bg-emerald-600 hover:bg-emerald-700 shadow-sm">
195:                       <Link href={`/meetings/${room.callId}`}>
196:                         Join Room <ArrowRight className="w-4 h-4 ml-2" />
197:                       </Link>
198:                     </Button>
199:                     <Button variant="ghost" size="icon" onClick={() => handleArchive(room.callId)} className="text-slate-400 hover:text-rose-500 hover:bg-rose-50">
200:                       <Trash2 className="w-5 h-5" />
201:                     </Button>
202:                   </div>
203:                 </div>
204:               ))}
205:             </div>
206:           )}
207:         </CardContent>
208:       </Card>
209:     </div>
210:   );
211: }
````

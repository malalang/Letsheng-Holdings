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
        <h2 className="text-2xl font-bold text-secondary">
          Quotes and Services
        </h2>
        <p className="text-gray-600">
          Quotes, production timelines, and service availability are confirmed
          directly by {businessInfo.name}. Final terms may vary by project,
          location, and supplier availability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-secondary">Contact</h2>
        <p className="text-gray-600">
          For questions about these terms, contact{" "}
          {businessInfo.emails.join(" or ")}.
        </p>
      </section>
    </div>
  );
}

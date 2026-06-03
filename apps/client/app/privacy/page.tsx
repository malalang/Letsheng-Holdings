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

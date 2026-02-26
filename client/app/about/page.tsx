import {
  Briefcase,
  Building,
  Printer,
  ShieldCheck,
  Gem,
  Clock,
} from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Pillar = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-brand-Blue/10 text-brand-navy rounded-full mx-auto flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-brand-navy">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{children}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="animate-fade-in space-y-20">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-brand-navy tracking-tight">
          Our Philosophy: The Letsheng Standard
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Letsheng Holdings is built on a foundation of unwavering discipline and
          operational excellence, delivering unparalleled reliability and value
          across our synergistic divisions.
        </p>
      </header>

      <main className="space-y-20">
        <section>
          <h2 className="text-4xl font-extrabold text-brand-navy text-center mb-12">
            Two Divisions, One Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center">
                <Building className="h-8 w-8 text-brand-navy" />
                <CardTitle className="ml-4 text-2xl font-semibold text-brand-navy">
                  Letsheng Estates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our Estates division is dedicated to curating and managing
                  premium residential properties. We believe that a home is a
                  sanctuary, and our commitment is to provide secure,
                  well-maintained, and desirable living spaces. Our transparent
                  tenancy terms and proactive management ensure peace of mind for
                  all our residents.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center">
                <Printer className="h-8 w-8 text-brand-navy" />
                <CardTitle className="ml-4 text-2xl font-semibold text-brand-navy">
                  Letsheng Printing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The Printing division provides high-fidelity branding and
                  marketing materials for discerning businesses. From corporate
                  apparel to promotional merchandise, we combine state-of-the-art
                  technology with meticulous craftsmanship to bring your brand's
                  vision to life with precision and impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gray-50/80 rounded-2xl py-16">
          <h3 className="text-4xl font-extrabold text-brand-navy text-center mb-12">
            The Pillars of Our Growth
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <Pillar icon={<ShieldCheck className="h-8 w-8" />} title="Disciplined Execution">
              Every project, from a lease agreement to a large-scale print run,
              is managed through a structured, predictable workflow. We don't
              believe in surprises—only in consistent, on-time delivery.
            </Pillar>
            <Pillar icon={<Gem className="h-8 w-8" />} title="Transparent Partnerships">
              We build trust through clarity. Our terms are explicit, our pricing
              is straightforward, and our communication is proactive. No
              ambiguity, no fine print.
            </Pillar>
            <Pillar icon={<Clock className="h-8 w-8" />} title="Sustainable Growth">
              Our strategy is focused on long-term value creation. We invest in
              quality assets, cutting-edge technology, and enduring
              relationships to ensure stability and excellence.
            </Pillar>
          </div>
        </section>

        <section>
          <Card className="bg-brand-navy text-white rounded-2xl p-6 md:p-12 shadow-2xl text-center">
            <CardTitle className="text-4xl font-bold">
              Partner with Excellence
            </CardTitle>
            <CardContent className="max-w-2xl mx-auto pt-6">
              <p className="text-brand-navy text-lg">
                For enterprise-level print programs, property management
                inquiries, or strategic partnerships, please connect with our
                Business Development office.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className=" md:mt-8 font-bold text-white border-white hover:bg-white hover:text-brand-navy transition-transform transform hover:scale-105"
                >
                  Contact Business Services
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

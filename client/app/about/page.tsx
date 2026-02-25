import { Briefcase, Printer, Building } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Re-usable FeatureCard, now built with the official Card component
const FeatureCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="bg-white/5 backdrop-blur-sm border-brand-gold/20 text-white shadow-md">
    <CardHeader className="flex-row items-center text-brand-gold">
      {icon}
      <CardTitle className="ml-3 text-xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-200">{children}</p>
    </CardContent>
  </Card>
);

export default function AboutPage() {
  return (
    <div className="animate-fade-in space-y-12 text-white">
      <header
        className="bg-brand-navy p-12 rounded-2xl shadow-2xl"
        style={{
          backgroundImage: `radial-gradient(circle at top right, #FFD70020, transparent), radial-gradient(circle at bottom left, #002147, #001a38)`,
        }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-gold/80 drop-shadow-lg">
          Our Philosophy: The Letsheng Standard
        </h1>
        <p className="mt-4 text-xl text-gray-200 max-w-4xl">
          Letsheng Holdings is built on a foundation of unwavering discipline
          and operational excellence. We operate two synergistic divisions,
          Estates and Printing, united by a singular commitment: to deliver
          unparalleled reliability and value to our partners and clients.
        </p>
      </header>

      <main className="space-y-12">
        <section className="p-8 bg-brand-navy/90 rounded-2xl border border-brand-gold/30 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Two Divisions, One Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Refactored to use the Card component */}
            <Card className="bg-white/10 border-0 text-white">
              <CardHeader className="flex-row items-center">
                <Building className="h-8 w-8 text-brand-gold" />
                <CardTitle className="ml-4 text-2xl font-semibold">
                  Letsheng Estates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our Estates division is dedicated to curating and managing
                  premium residential properties. We believe that a home is a
                  sanctuary, and our commitment is to provide secure,
                  well-maintained, and desirable living spaces. Our transparent
                  tenancy terms and proactive management ensure peace of mind for
                  all our residents.
                </p>
              </CardContent>
            </Card>
            {/* Refactored to use the Card component */}
            <Card className="bg-white/10 border-0 text-white">
              <CardHeader className="flex-row items-center">
                <Printer className="h-8 w-8 text-brand-gold" />
                <CardTitle className="ml-4 text-2xl font-semibold">
                  Letsheng Printing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
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

        <section className="p-8 bg-brand-navy/90 rounded-2xl border border-brand-gold/30 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            The Pillars of Our Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Briefcase className="h-7 w-7" />}
              title="Disciplined Execution"
            >
              Every project, from a lease agreement to a large-scale print run,
              is managed through a structured, predictable workflow. We don't
              believe in surprises—only in consistent, on-time delivery. Our
              operational frameworks are designed for clarity and
              accountability.
            </FeatureCard>
            <FeatureCard
              icon={<Briefcase className="h-7 w-7" />}
              title="Transparent Partnerships"
            >
              We build trust through clarity. Our terms are explicit, our
              pricing is straightforward, and our communication is proactive.
              Whether it's our Terms of Tenancy or a detailed print quote, you
              will always know where you stand. No ambiguity, no fine print.
            </FeatureCard>
            <FeatureCard
              icon={<Briefcase className="h-7 w-7" />}
              title="Sustainable Growth"
            >
              Our strategy is focused on long-term value creation. We invest in
              quality assets, cutting-edge technology, and enduring
              relationships. By prioritizing stability and excellence over
              fleeting trends, we ensure a reliable and prosperous future for
              our company and our partners.
            </FeatureCard>
          </div>
        </section>

        <footer className="text-center mt-12 p-8 bg-brand-navy rounded-2xl text-white">
          <h3 className="text-2xl font-bold">Partner with Excellence</h3>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            For enterprise-level print programs, property management inquiries,
            or strategic partnerships, please connect with our Business
            Development office.
          </p>
          {/* Refactored to use the default button variant */}
          <Button
            size="lg"
            variant="default"
            className="mt-6 font-bold transition-transform transform hover:scale-105"
          >
            Contact Business Services
          </Button>
        </footer>
      </main>
    </div>
  );
}

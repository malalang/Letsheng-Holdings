import {
  ArrowRight,
  Building2,
  Clock,
  Gem,
  Printer,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Re-usable ServiceCard now fully relies on UI components
const ServiceCard = ({
  icon,
  title,
  description,
  link,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  cta: string;
}) => (
  <Card className="bg-white/60 backdrop-blur-lg border-black/10 shadow-lg h-full flex flex-col">
    <CardHeader className="flex-row items-center">
      {icon}
      <CardTitle className="ml-4 text-brand-navy">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <p className="text-gray-600 flex-grow">{description}</p>
      <Link href={link} className="mt-6">
        {/* secondary action button using outline variant */}
        <Button variant="outline" className="w-full">
          {cta} <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    </CardContent>
  </Card>
);

// Re-usable StandardPillar - structure maintained
const StandardPillar = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-brand-Blue/10 text-brand-Blue rounded-full mx-auto flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-brand-navy">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

export default function HomePage() {
  return (
    <div className="animate-fade-in space-y-20">
      <header
        className="relative bg-brand-navy rounded-2xl shadow-2xl overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle at top right, #FFD70020, transparent), radial-gradient(circle at bottom left, #002147, #001a38)`,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
          alt="Modern architectural home at dusk"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative max-w-4xl mx-auto p-12 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-Blue/80">
            Elevating Ambitions
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Letsheng Holdings is your strategic partner for premium residential
            estates and high-fidelity corporate branding. We build environments
            and create identities that empower success.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              {/* Primary action button using default variant */}
              <Button
                size="lg"
                variant="default"
                className="w-full sm:w-auto font-bold transition-transform transform hover:scale-105"
              >
                Explore Residential Estates
              </Button>
            </Link>
            <Link href="/printing/order">
              {/* Secondary action on dark background */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-brand-Blue text-white hover:bg-brand-Blue hover:text-brand-navy transition-transform transform hover:scale-105"
              >
                Initiate a Branding Project
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-navy">
            Integrated Services for Modern Enterprise
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Two divisions, one standard of excellence. We provide the physical
            and brand assets you need to thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            icon={<Building2 className="w-10 h-10 text-brand-Blue" />}
            title="Letsheng Estates"
            description="Secure, premium residential properties designed for professionals seeking comfort and convenience. Our portfolio offers thoughtfully managed living spaces in prime locations."
            link="/properties"
            cta="View Portfolio"
          />
          <ServiceCard
            icon={<Printer className="w-10 h-10 text-brand-Blue" />}
            title="Letsheng Print"
            description="High-fidelity printing for corporate apparel and promotional merchandise. We translate your brand identity into tangible assets with precision and professional quality."
            link="/printing"
            cta="Discover Services"
          />
        </div>
      </section>

      <section className="bg-gray-50/80 rounded-2xl py-16 -mx-4 md:-mx-8 px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-brand-navy">
            The Letsheng Standard
          </h3>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Our operational pillars ensure reliability and quality across all
            our ventures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <StandardPillar
            icon={<ShieldCheck className="w-8 h-8" />}
            title="Uncompromising Quality"
            description="From property maintenance to print production, we enforce rigorous quality controls to deliver a premium, defect-free experience."
          />
          <StandardPillar
            icon={<Gem className="w-8 h-8" />}
            title="Transparent Operations"
            description="Clear contracts, upfront pricing, and open communication are the cornerstones of our client relationships. No surprises, just results."
          />
          <StandardPillar
            icon={<Clock className="w-8 h-8" />}
            title="Reliable Delivery"
            description="We respect your time. Our documented processes and dedicated teams ensure that all timelines are met with professional consistency."
          />
        </div>
      </section>
    </div>
  );
}

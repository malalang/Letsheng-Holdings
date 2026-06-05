import {
  Printer,
  Droplet,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileText,
  ExternalLink,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Our Services | Letsheng Holdings",
  description: "Discover the professional services offered by Letsheng Holdings, including print & branding, water & detergents division, and our client data privacy policy.",
};

const ServiceCard = ({
  title,
  description,
  link,
  icon: Icon,
  badgeText,
  features,
}: {
  title: string;
  description: string;
  link: string;
  icon: any;
  badgeText: string;
  features: string[];
}) => (
  <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-none bg-white flex flex-col justify-between rounded-[2rem]">
    <div>
      <div className="relative h-48 bg-secondary/5 flex items-center justify-center overflow-hidden">
        {/* Animated background circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent group-hover:scale-110 transition-transform duration-500" />
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8" />
        </div>
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
              essential water and detergents supply, and our robust privacy commitment.
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
            Delivering national impact with high-fidelity products, safety compliance, 
            and absolute reliability across South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Letsheng Print & Brand"
            description="Elevate your corporate identity with precision-crafted apparel, signage, corporate gifts, and high-fidelity marketing materials."
            link="/branding"
            icon={Printer}
            badgeText="Branding & Print"
            features={[
              "Custom Corporate Clothing",
              "High-Fidelity Screen Printing",
              "Signage & Banners",
              "Corporate Gift Packaging",
            ]}
          />
          <ServiceCard
            title="Water and Detergents"
            description="Pure SABS-standard bulk water delivery and premium-strength biodegradable cleaning detergents for commercial and industrial settings."
            link="/waterDetergents"
            icon={Droplet}
            badgeText="Utilities & Chemicals"
            features={[
              "Potable Bulk Water Trucking",
              "Emergency Tank Refills",
              "Biodegradable Detergents",
              "Industrial-Strength Formulation",
            ]}
          />
          <ServiceCard
            title="Privacy Policy"
            description="Our formal compliance framework and data governance commitment to protecting customer, tenant, and stakeholder information."
            link="/privacy"
            icon={ShieldCheck}
            badgeText="Security & Compliance"
            features={[
              "POPIA Compliant Governance",
              "Strict Data Security",
              "Transparent Information Audit",
              "Secure Application Portals",
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

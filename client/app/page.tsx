
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building2, Printer, ShieldCheck, Gem, Clock } from "lucide-react";
import React from 'react';

const ServiceCard = ({ icon, title, description, link, cta }: { icon: React.ReactNode; title: string; description: string; link: string; cta: string }) => (
    <Card className="bg-white/60 backdrop-blur-lg border-black/10 shadow-lg h-full flex flex-col">
        <CardHeader className="flex-row items-center">
            {icon}
            <CardTitle className="ml-4 text-brand-navy">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
            <p className="text-gray-600 flex-grow">{description}</p>
            <Link href={link} className="mt-6">
                <Button variant="outline" className="w-full border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy">
                    {cta} <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
            </Link>
        </CardContent>
    </Card>
);

const StandardPillar = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="text-center">
        <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full mx-auto flex items-center justify-center mb-4">
            {icon}
        </div>
        <h4 className="font-bold text-lg text-brand-navy">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
)

export default function HomePage() {
  return (
    <div className="animate-fade-in space-y-20">

      <section className="text-center pt-16 pb-20 bg-gradient-to-br from-brand-navy via-black to-brand-navy/90 rounded-3xl text-white shadow-2xl -mx-4 md:-mx-8">
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-gold/80">
                Elevating Ambitions
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Letsheng Holdings is your strategic partner for premium residential estates and high-fidelity corporate branding. We build environments and create identities that empower success.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/properties">
                    <Button size="lg" className="w-full sm:w-auto bg-brand-gold text-brand-navy font-bold hover:bg-brand-gold/90 transition-transform transform hover:scale-105">
                        Explore Residential Estates
                    </Button>
                </Link>
                <Link href="/printing/order">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/50 hover:bg-white/10 hover:text-white transition-transform transform hover:scale-105">
                        Initiate a Branding Project
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-brand-navy">Integrated Services for Modern Enterprise</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Two divisions, one standard of excellence. We provide the physical and brand assets you need to thrive.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             <ServiceCard 
                icon={<Building2 className="w-10 h-10 text-brand-gold"/>} 
                title="Letsheng Estates" 
                description="Secure, premium residential properties designed for professionals seeking comfort and convenience. Our portfolio offers thoughtfully managed living spaces in prime locations."
                link="/properties"
                cta="View Portfolio"
            />
             <ServiceCard 
                icon={<Printer className="w-10 h-10 text-brand-gold"/>} 
                title="Letsheng Print"
                description="High-fidelity printing for corporate apparel and promotional merchandise. We translate your brand identity into tangible assets with precision and professional quality."
                link="/printing"
                cta="Discover Services"
            />
        </div>
      </section>
      
      <section className="bg-gray-50/80 rounded-2xl py-16 -mx-4 md:-mx-8 px-4">
        <div className="text-center mb-12">
            <h3 className="text-4xl font-extrabold text-brand-navy">The Letsheng Standard</h3>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Our operational pillars ensure reliability and quality across all our ventures.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
           <StandardPillar 
                icon={<ShieldCheck className="w-8 h-8"/>} 
                title="Uncompromising Quality"
                description="From property maintenance to print production, we enforce rigorous quality controls to deliver a premium, defect-free experience."
            />
            <StandardPillar 
                icon={<Gem className="w-8 h-8"/>} 
                title="Transparent Operations"
                description="Clear contracts, upfront pricing, and open communication are the cornerstones of our client relationships. No surprises, just results."
            />
            <StandardPillar 
                icon={<Clock className="w-8 h-8"/>} 
                title="Reliable Delivery"
                description="We respect your time. Our documented processes and dedicated teams ensure that all timelines are met with professional consistency."
            />
        </div>
      </section>

    </div>
  );
}

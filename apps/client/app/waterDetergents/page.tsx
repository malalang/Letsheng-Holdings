import {
  ArrowRight,
  CheckCircle2,
  Droplet,
  Factory,
  FlaskConical,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Truck,
  Waves,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
              Providing high-standard cleaning solutions and reliable bulk water
              supply to households, businesses, and industrial sites across
              South Africa.
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
                Addressing South Africa's water security challenges with
                reliable, purified, and bulk water delivery solutions for
                various applications.
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
                <Badge
                  variant="outline"
                  className="border-primary text-primary font-bold"
                >
                  Manufacturing Division
                </Badge>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  High-Fidelity <br />
                  <span className="text-primary">Cleaning Detergents</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Formulated for maximum efficiency and environmental safety.
                  Our detergent line serves hospitals, schools, and professional
                  cleaning firms.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FlaskConical />,
                    title: "Concentrated",
                    desc: "Industrial strength formulas",
                  },
                  {
                    icon: <ShieldCheck />,
                    title: "Safe & Green",
                    desc: "Biodegradable ingredients",
                  },
                  {
                    icon: <Truck />,
                    title: "Wholesale",
                    desc: "Bulk 25L & 50L options",
                  },
                  {
                    icon: <Factory />,
                    title: "Direct Supply",
                    desc: "Factory-to-door pricing",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div className="text-primary h-6 w-6 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white hover:text-secondary rounded-full px-8"
                asChild
              >
                <Link href="/contact?service=detergents">
                  Get Product Catalog
                </Link>
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
          <h2 className="text-4xl font-black text-secondary tracking-tight">
            Product Categories
          </h2>
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
            <Card
              key={i}
              className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-[2rem]"
            >
              <CardContent className="pt-10 pb-10 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cat.desc}
                </p>
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
            Contact our logistics team today for a custom quote on bulk
            detergents or water delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 px-10 h-16 rounded-full font-bold text-lg"
            >
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

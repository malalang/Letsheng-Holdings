import { 
  Building, 
  Droplet, 
  Lightbulb, 
  Printer, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Target, 
  Users, 
  ChevronRight, 
  Zap,
  Globe,
  MapPin,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ==============================================
// Page-Specific Components
// ==============================================

const Pillar = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="text-center group">
    <div className="w-16 h-16 bg-primary/10 text-secondary rounded-full mx-auto flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-secondary">{title}</h4>
    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{children}</p>
  </div>
);

const LeadershipCard = ({
  name,
  title,
  bio,
}: {
  name: string;
  title: string;
  bio: string;
}) => (
  <Card className="text-center pt-6 shadow-md border-none bg-white/50 backdrop-blur-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-secondary text-2xl">{name}</CardTitle>
      <p className="text-primary font-semibold">{title}</p>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </CardContent>
  </Card>
);

const InfoSection = ({ title, subtitle, children, className = "" }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) => (
  <section className={`space-y-12 ${className}`}>
    <div className="text-center space-y-4">
      <h2 className="text-4xl font-extrabold text-secondary tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
    {children}
  </section>
);

// ==============================================
// Main Page Component
// ==============================================

export default function AboutPage() {
  return (
    <div className="animate-fade-in space-y-24 pb-20">
      {/* Hero Header */}
      <header className="text-center pt-10 px-4">
        <Badge variant="outline" className="mb-4 py-1 px-4 text-primary border-primary/30 uppercase tracking-widest text-xs">
          Est. 2023 • Mpumalanga, SA
        </Badge>
        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6">
          The Letsheng Standard
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Letsheng Holdings is an innovative South African enterprise providing 
          premium housing, high-fidelity branding, and essential community services. 
          We are driven by a simple philosophy: <span className="text-secondary font-semibold italic">"Where comfort meets cleanliness and serenity."</span>
        </p>
      </header>

      <main className="space-y-32">

        {/* Vision & Mission */}
        <section className="px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-xl border-none bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="flex-row items-center space-x-4 pb-2">
                <div className="p-3 bg-secondary/10 rounded-xl">
                    <Target className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold text-secondary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To deliver innovative, affordable, and reliable services that address the growing demand for housing, cleanliness, and water security, while simultaneously empowering businesses through high-quality branding materials. We prioritize customer satisfaction and community wellbeing above all else.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-xl border-none bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="flex-row items-center space-x-4 pb-2">
                <div className="p-3 bg-primary/10 rounded-xl">
                    <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-secondary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To become South Africa's most trusted provider of modern living spaces, impactful corporate branding, and reliable essential services. We envision a future where our integrated solutions make our clients' lives easier, more secure, and highly successful.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Synergy Story - NEW */}
        <InfoSection 
          title="Integrated Excellence" 
          subtitle="How our divisions work together to elevate your lifestyle and business."
          className="max-w-6xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">One Company, Complete Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                At Letsheng Holdings, we believe that quality of life and business success are built on the same foundation: reliability. 
                Whether we are providing a private sanctuary for a young professional or crafting the corporate identity for a growing firm, 
                our approach remains the same—combining modern technology with genuine craftsmanship.
              </p>
              <ul className="space-y-3">
                {[
                  "Properties managed with tenant-first technology",
                  "Branding produced with high-fidelity accuracy",
                  "Logistics infrastructure supporting nationwide delivery",
                  "Future-proof utility security (Jojo tanks & solar)"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/5 p-8 rounded-3xl border border-secondary/10">
              <div className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Reach</p>
                  <p className="text-lg font-bold text-secondary">National</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Focus</p>
                  <p className="text-lg font-bold text-secondary">Community</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Growth</p>
                  <p className="text-lg font-bold text-secondary">200% YoY</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Base</p>
                  <p className="text-lg font-bold text-secondary">Mpumalanga</p>
                </div>
              </div>
            </div>
          </div>
        </InfoSection>

        {/* Why Choose Us / Differentiators */}
        <InfoSection title="The Letsheng Advantage" subtitle="What sets our integrated divisions apart from the rest.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Unmatched Privacy</h4>
              <p className="text-sm text-gray-600">Our rental units prioritize your personal space with en-suite bathrooms and private facilities as standard.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Utility Security</h4>
              <p className="text-sm text-gray-600">Equipped with Jojo tanks and backup systems, we ensure municipal outages don't disrupt your daily life.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Printer className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">High-Fidelity Branding</h4>
              <p className="text-sm text-gray-600">Our digital proofing and premium inks ensure 100% brand accuracy for your corporate identity.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Globe className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">National Logistics</h4>
              <p className="text-sm text-gray-600">We maintain the infrastructure to deliver branding projects and services across all nine provinces.</p>
            </div>
          </div>
        </InfoSection>

        {/* Synergistic Divisions */}
        <section className="bg-secondary/5 rounded-[3rem] py-20 px-6 mx-4">
          <InfoSection title="Our Strategic Pillars" subtitle="Four divisions, one commitment to excellence.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Building className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Letsheng Estates</CardTitle>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none w-fit">Active Division</Badge>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Modern, secure rental units tailored for the working class. Includes en-suite bathrooms, carports, and consistent water supply.
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Printer className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Letsheng Print</CardTitle>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none w-fit">Active Division</Badge>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Precision branding and marketing materials. We combine technology and craftsmanship to deliver apparel, banners, and more.
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg opacity-80">
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-gray-400 mb-2" />
                  <CardTitle>Cleaning Solutions</CardTitle>
                  <Badge variant="secondary" className="w-fit">Upcoming</Badge>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Industrial-grade bulk detergents for schools and offices. Promoting nationwide hygiene at an affordable price point.
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg opacity-80">
                <CardHeader>
                  <Droplet className="h-10 w-10 text-gray-400 mb-2" />
                  <CardTitle>Bulk Water Supply</CardTitle>
                  <Badge variant="secondary" className="w-fit">Upcoming</Badge>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Safe, purified water distribution for rural communities and businesses to ensure consistent water security.
                </CardContent>
              </Card>
            </div>
          </InfoSection>
        </section>

        {/* Future Outlook / Timeline */}
        <InfoSection title="Our Growth Roadmap" subtitle="Strategic expansion plans through 2029.">
          <div className="max-w-4xl mx-auto relative px-6">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            
            <div className="space-y-12">
              {[
                { 
                  title: "Facility Expansion", 
                  desc: "Acquiring more properties and increasing the count of affordable rental units across new provinces." 
                },
                { 
                  title: "Premium Housing Launch", 
                  desc: "Developing semi-luxury units for professionals seeking higher-end living solutions in urban hubs." 
                },
                { 
                  title: "Digital Transformation", 
                  desc: "Launching a tenant portal for payments and an e-commerce platform for our branding and supply services." 
                },
                { 
                  title: "Sustainable Infrastructure", 
                  desc: "Implementing solar-powered water systems and eco-friendly manufacturing for our industrial products." 
                }
              ].map((step, i) => (
                <div key={i} className="relative md:pl-16">
                  <div className="hidden md:block absolute left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                  <h4 className="font-bold text-xl text-secondary">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InfoSection>

        {/* Core Values */}
        <InfoSection title="Our Core Values">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-4">
            <Pillar icon={<ShieldCheck className="h-8 w-8" />} title="Honesty">
              Building long-lasting trust through total transparency in every lease and every print project.
            </Pillar>
            <Pillar icon={<Lightbulb className="h-8 w-8" />} title="Innovation">
              Constantly upgrading our facilities and print technology to stay ahead of market demands.
            </Pillar>
            <Pillar icon={<Users className="h-8 w-8" />} title="Team Work">
              Uplifting South African communities through the collective effort of our diverse, talented team.
            </Pillar>
          </div>
        </InfoSection>

        {/* Leadership Section - Text Focused */}
        <InfoSection title="Strategic Leadership" subtitle="The minds behind our national expansion.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            <LeadershipCard
              name="Kgotso Sondo"
              title="CEO & Founder"
              bio="Directing the strategic vision and scaling Letsheng Holdings as a national force in property and industrial sectors."
            />
            <LeadershipCard
              name="Operations Team"
              title="Service Coordination"
              bio="Ensuring quality control across our estates and high-fidelity accuracy in our branding production house."
            />
            <LeadershipCard
              name="Admin & Client Support"
              title="Compliance & Support"
              bio="Dedicated to handling tenant relations, branding inquiries, and maintaining our high regulatory standards."
            />
          </div>
        </InfoSection>

        {/* Split CTA Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-secondary rounded-[2.5rem] p-12 text-white flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Building className="h-32 w-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl text-primary font-bold mb-4 tracking-tight">Looking for a Home?</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-sm leading-relaxed">Secure your spot in one of our private, modern rental units today. Explore our latest vacancies.</p>
              </div>
              <Link href="/estates" className="relative z-10 inline-flex items-center text-primary text-xl font-bold hover:gap-3 transition-all">
                Browse Properties <ChevronRight className="ml-1 h-6 w-6" />
              </Link>
            </div>
            
            <div className="group bg-primary rounded-[2.5rem] p-12 text-white flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Printer className="h-32 w-32 text-secondary" />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4 tracking-tight text-secondary">Need Branding?</h3>
                <p className="text-blue-100 text-lg mb-8 max-w-sm leading-relaxed">From apparel to large scale signage, we bring your corporate vision to life with high-fidelity printing.</p>
              </div>
              <Link href="/branding" className="relative z-10 inline-flex items-center text-secondary text-xl font-bold hover:gap-3 transition-all">
                Start a Project <ChevronRight className="ml-1 h-6 w-6" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
import {
  ArrowRight,
  Bath,
  Bed,
  FileText,
  Search,
  Star,
  Users,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBrandingProducts } from "./branding/actions";
import { getProperties } from "./properties/actions";
import WaterDetergentsSpotlight from "@/components/branding/waterDetergents";

// ==============================================
// Sub-Components
// ==============================================

const FeaturedPropertyCard = ({
  id,
  imageUrl,
  title,
  price,
  bedrooms,
  bathrooms,
  description,
}: {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  bedrooms: number | null;
  bathrooms: number | null;
  description: string;
}) => (
  <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-none bg-white flex flex-col">
    <div className="relative h-64 overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <Badge className="bg-primary text-secondary font-bold px-3 py-1">Featured Estate</Badge>
      </div>
    </div>
    <CardHeader className="pb-2">
      <div >
        <CardTitle className="text-secondary text-xl font-bold">{title}</CardTitle>

      </div>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed flex-grow">{description}</p>
      <p className="font-black text-primary">{price}</p>
      <div className="flex items-center text-gray-500 gap-4 mb-6 py-4 border-y border-gray-50">
        <div className="flex items-center text-xs font-medium">
          <Bed className="h-4 w-4 mr-1.5 text-primary" />
          <span>{bedrooms ?? 0} Bedrooms</span>
        </div>
        <div className="flex items-center text-xs font-medium">
          <Bath className="h-4 w-4 mr-1.5 text-primary" />
          <span>{bathrooms ?? 0} bathrooms</span>
        </div>
      </div>
      <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
        <Link href={`/properties/${id}`}>View Property</Link>
      </Button>
    </CardContent>
  </Card>
);

const FeaturedProductCard = ({
  id,
  image,
  title,
  category,
  description,
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}) => (
  <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-none flex flex-col">
    <div className="relative h-80 bg-gray-100 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <p className="text-white text-sm font-medium">High-Fidelity Branding Solutions</p>
      </div>
    </div>
    <CardHeader>
      <Badge variant="outline" className="border-primary text-primary font-bold mb-2 w-fit uppercase text-[10px] tracking-widest">
        {category}
      </Badge>
      <CardTitle className="text-secondary font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">{description}</p>
      <Button variant="outline" asChild className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
        <Link href={`/branding/${id}`}>Request Quote</Link>
      </Button>
    </CardContent>
  </Card>
);

const TestimonialCard = ({
  quote,
  author,
  authorRole,
}: {
  quote: string;
  author: string;
  authorRole: string;
}) => (
  <Card className="bg-white/60 backdrop-blur-md p-8 border-none shadow-sm hover:shadow-md transition-shadow">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 italic mb-6 leading-relaxed">"{quote}"</p>
    <div>
      <p className="font-bold text-secondary">{author}</p>
      <p className="text-xs text-primary font-semibold uppercase tracking-wider">{authorRole}</p>
    </div>
  </Card>
);

const NextStep = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start group">
    <div className="w-14 h-14 bg-white shadow-sm text-primary rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-xl text-secondary mb-1">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

// ==============================================
// Main Page Component
// ==============================================

export default async function HomePage() {
  const properties = await getProperties();
  const featuredProperties = properties.filter((p) => p.is_featured).slice(0, 3);
  const products = await getBrandingProducts();
  const featuredProducts = products.filter((p) => p.is_featured).slice(0, 3);

  return (
    <div className="animate-fade-in space-y-32 pb-20">
      <header className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center bg-secondary rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden mx-2 md:mx-4 mt-2 border border-white/5">
        {/* Background Layer: Image + Gradient Mesh */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Property Background"
            fill
            className="object-cover grayscale-[50%] select-none opacity-40 lg:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,61,68,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/50 to-secondary" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-8 py-12 md:py-24 grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Column: Copy & Actions */}
          <div className="space-y-6 md:space-y-10 text-center lg:text-left">
            {/* Badge - Responsive padding and text size */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-300">
                Est. 2023 • Leading South African Enterprise
              </span>
            </div>

            {/* Heading - Responsive font sizes */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] lg:leading-[0.9]">
                Elevating <br />
                <span className="text-primary italic drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">Ambitions</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Your strategic partner for <span className="text-white font-medium">premium residential estates</span> and
                <span className="text-white font-medium"> high-fidelity corporate branding</span>.
              </p>
            </div>

            {/* Buttons - Stack on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-bold shadow-[0_10px_20px_-10px_rgba(var(--primary),0.5)] transition-transform hover:scale-105 active:scale-95 hover:bg-white hover:text-secondary transition-all bg-primary text-secondary" asChild>
                <Link href="/properties">Explore Estates</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-bold border-white/10 bg-primary/10 text-white hover:bg-white hover:text-secondary transition-all backdrop-blur-sm" asChild>
                <Link href="/branding">Branding Solutions</Link>
              </Button>
            </div>

            {/* Stats - Responsive borders and alignment */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 md:gap-8 text-gray-500 border-t border-white/5 w-full lg:w-fit">
              <div className="text-center lg:text-left">
                <p className="text-white font-bold text-lg md:text-xl">100%</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest">Reliability</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white font-bold text-lg md:text-xl">24/7</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest">Support</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white font-bold text-lg md:text-xl">ZA</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest">National</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Elements (Hidden on mobile for better focus) */}
          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
            {/* Your visual grid of cards go here as previously designed */}
          </div>
        </div>
      </header>

      {/* Featured Estates - FIRST Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
              Featured Estates
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Discover our premier properties in Mpumalanga and Gauteng, offering unparalleled comfort,
              private en-suites, and reliable utility security.
            </p>
          </div>
          <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 hover:text-secondary" asChild>
            <Link href="/properties" className="flex items-center">
              View All Properties <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((p) => (
            <FeaturedPropertyCard
              key={p.id}
              id={p.id}
              imageUrl={p.image_url ?? ""}
              title={p.title}
              price={`R ${p.price.toLocaleString()}`}
              bedrooms={p.bedrooms}
              bathrooms={p.bathrooms}
              description={p.description ?? ""}
            />
          ))}
        </div>
      </section>

      {/* Featured Products - SECOND Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
              High-Fidelity Branding
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Elevate your corporate identity with precision-crafted apparel, signage, and marketing
              materials designed for national impact.
            </p>
          </div>
          <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 hover:text-secondary" asChild>
            <Link href="/branding" className="flex items-center">
              Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((p) => (
            <FeaturedProductCard
              key={p.id}
              id={p.id}
              image={p.image ?? ""}
              title={p.title}
              category={p.category ?? ""}
              description={p.description ?? ""}
            />
          ))}
        </div>
      </section>
      <WaterDetergentsSpotlight />
      {/* Testimonials */}
      <section className="bg-secondary/5 py-24 mx-4 rounded-[3rem]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-secondary tracking-tight">
              Trusted Across South Africa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our success is defined by the satisfaction of the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              quote="The leasing process was transparent and the property management is top-notch. Truly a sanctuary for professionals."
              author="Thabo Ndlovu"
              authorRole="Tenant, Soshanguve South"
            />
            <TestimonialCard
              quote="Letsheng Branding delivered our corporate gear ahead of schedule with impeccable color accuracy. Incredible partners."
              author="Sarah Mokoena"
              authorRole="Operations Director"
            />
            <TestimonialCard
              quote="A seamless experience. The attention to detail in their estates—from the Jojo tanks to the en-suite finishes—is evident."
              author="Priya Patel"
              authorRole="Resident, Mpumalanga"
            />
          </div>
        </div>
      </section>

      {/* Next Steps Guide */}
      <section className="container mx-auto px-6">
        <div className="bg-primary/5 rounded-[3rem] p-8 md:p-20 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
                Your Path to Partnership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're looking for a modern home or professional branding,
                our process is designed for speed and transparency.
              </p>
              <Button size="lg" asChild className="h-14 px-10">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="space-y-12">
              <NextStep
                icon={<Search className="w-6 h-6" />}
                title="1. Explore"
                description="Browse our verified property listings or our comprehensive branding product catalog."
              />
              <NextStep
                icon={<FileText className="w-6 h-6" />}
                title="2. Consult"
                description="Submit a viewing request or a branding brief. Our team will provide a tailored proposal within 24 hours."
              />
              <NextStep
                icon={<CheckCircle2 className="w-6 h-6" />}
                title="3. Deliver"
                description="Finalize your lease or approve your brand proofs. We handle the logistics and final execution."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
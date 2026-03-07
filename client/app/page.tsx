import {
  ArrowRight,
  Bath,
  Bed,
  FileText,
  Search,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBrandingProducts } from "./branding/actions";
import { getProperties } from "./properties/actions";

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
  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <div className="relative h-56">
      <Image src={imageUrl} alt={title} fill className="object-cover" />
    </div>
    <CardHeader>
      <CardTitle className="text-brand-navy">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{description}</p>
      <div className="flex items-center text-gray-600 space-x-4 mb-4">
        <div className="flex items-center">
          <Bed className="h-5 w-5 mr-2" />
          <span>{bedrooms ?? 0} Beds</span>
        </div>
        <div className="flex items-center">
          <Bath className="h-5 w-5 mr-2" />
          <span>{bathrooms ?? 0} Baths</span>
        </div>
      </div>
      <p className="font-bold text-lg text-brand-Blue mb-4">{price}</p>
      <Link href={`/properties/${id}`} className="mt-auto block">
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </Link>
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
  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <div className="relative h-80 lg:h-auto lg:w-1/2">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <CardHeader>
      <Badge variant="default" className="font-semibold mb-2 w-fit">
        {category}
      </Badge>
      <CardTitle className="text-brand-navy">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <p className="text-gray-600 line-clamp-3 flex-grow">{description}</p>
      <Link href={`/branding/${id}`} className="mt-4 block">
        <Button variant="outline" className="w-full">
          View Product Details
        </Button>
      </Link>
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
  <Card className="bg-white/60 p-6 text-center">
    <div className="flex justify-center mb-4">
      <Star
        key={`${author}-${quote}-${authorRole}-star-1`}
        className="h-5 w-5 text-yellow-400 fill-current"
      />
      <Star
        key={`${author}-${quote}-${authorRole}-star-2`}
        className="h-5 w-5 text-yellow-400 fill-current"
      />
      <Star
        key={`${author}-${quote}-${authorRole}-star-3`}
        className="h-5 w-5 text-yellow-400 fill-current"
      />
      <Star
        key={`${author}-${quote}-${authorRole}-star-4`}
        className="h-5 w-5 text-yellow-400 fill-current"
      />
      <Star
        key={`${author}-${quote}-${authorRole}-star-5`}
        className="h-5 w-5 text-yellow-400 fill-current"
      />
    </div>
    <p className="text-gray-600 italic mb-4">\"{quote}\"</p>
    <p className="font-bold text-brand-navy">{author}</p>
    <p className="text-sm text-gray-500">{authorRole}</p>
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
  <div className="flex items-start">
    <div className="w-12 h-12 bg-brand-Blue/10 text-brand-Blue rounded-full flex items-center justify-center mr-6 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg text-brand-navy">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default async function HomePage() {
  const properties = await getProperties();
  const featuredProperties = properties.filter((p) => p.is_featured);
  const products = await getBrandingProducts();
  const featuredProducts = products.filter((p) => p.is_featured);

  return (
    <div className="animate-fade-in space-y-24">
      {/* Header */}
      <header
        className="relative bg-brand-navy rounded-2xl shadow-2xl overflow-hidden -mt-4"
        style={{
          backgroundImage: `radial-gradient(circle at top right,rgba(6, 61, 68, 0.6), transparent), radial-gradient(circle at bottom left, #002147, #001a38)`,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
          alt="Modern architectural home at dusk"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative text-center p-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-Blue/80">
            Elevating Ambitions
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your strategic partner for premium residential estates and
            high-fidelity corporate branding.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/properties">Explore Residential Estates</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-Blue text-white hover:bg-brand-Blue hover:text-brand-navy"
              asChild
            >
              <Link href="/branding">Discover Branding Solutions</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Featured Estates */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-navy">
            Featured Estates
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premier properties, offering unparalleled comfort and
            modern living.
          </p>
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
        <div className="text-center mt-12">
          <Link href="/properties">
            <Button>
              Explore All Properties <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-navy">
            Featured Products
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our flagship branded products, crafted with quality and
            precision.
          </p>
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
        <div className="text-center mt-12">
          <Link href="/branding">
            <Button>
              Discover All Products <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-navy">
            Partnerships Rooted in Quality
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Our success is measured by the success of our clients and tenants.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            quote="The leasing process was transparent and the property management is top-notch. Highly recommended for professionals."
            author="Thabo Ndlovu"
            authorRole="Tenant, Soshanguve South"
          />
          <TestimonialCard
            quote="Letsheng Branding delivered our branded merchandise ahead of schedule with impeccable quality. A reliable partner."
            author="Jane Smith"
            authorRole="Marketing Manager, ABC Corp"
          />
          <TestimonialCard
            quote="A seamless experience from start to finish. The attention to detail in their properties is evident."
            author="Priya Patel"
            authorRole="Resident, Centurion"
          />
        </div>
      </section>

      {/* Next Steps Guide */}
      <section className="bg-gray-50/80 rounded-2xl py-16 -mx-4 md:-mx-8 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-navy">
            Your Path to Partnership
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Engaging with us is a straightforward process. Here\'s how you can
            get started.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-10">
          <NextStep
            icon={<Search className="w-6 h-6" />}
            title="1. Explore"
            description="Browse our available properties or review our corporate branding services to identify what fits your needs."
          />
          <NextStep
            icon={<FileText className="w-6 h-6" />}
            title="2. Inquire"
            description="Request a property viewing through our contact form or submit a detailed brief for your branding project."
          />
          <NextStep
            icon={<Users className="w-6 h-6" />}
            title="3. Partner"
            description="We finalize the lease agreement or execute the branding project, welcoming you as a valued partner."
          />
        </div>
      </section>
    </div>
  );
}

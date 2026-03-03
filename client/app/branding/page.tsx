import { ArrowRight, Paintbrush } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  type ComingSoonProduct,
  comingSoonProducts,
  type Product,
  products,
} from "./data";

const ProductCard = ({
  product,
  isFeatured,
}: {
  product: Product;
  isFeatured?: boolean;
}) => (
  <Card
    className={`overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${isFeatured ? "lg:flex-row" : ""}`}
  >
    <div
      className={`relative ${isFeatured ? "h-80 lg:h-auto lg:w-1/2" : "h-56"}`}
    >
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-cover"
      />
    </div>
    <div
      className={`p-6 flex flex-col justify-between ${isFeatured ? "lg:w-1/2" : ""}`}
    >
      <div>
        <Badge variant="default" className="font-semibold mb-2">
          {product.category}
        </Badge>
        <h3 className="text-2xl font-bold text-brand-navy">{product.title}</h3>
        <p className="text-gray-600 mt-2 line-clamp-3">{product.description}</p>
      </div>
      <div className="mt-6">
        <Link href={`/branding/${product.id}`}>
          <Button variant="outline" className="w-full font-semibold">
            View Product <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  </Card>
);

const ComingSoonCard = ({ product }: { product: ComingSoonProduct }) => (
  <Card className="overflow-hidden shadow-lg bg-gray-50 flex flex-col p-6">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-brand-Blue/10 text-brand-Blue rounded-full flex items-center justify-center mr-4">
        <product.icon className="w-6 h-6" />
      </div>
      <div>
        <Badge variant="secondary" className="font-semibold">
          {product.category}
        </Badge>
        <h3 className="text-xl font-bold text-brand-navy">{product.title}</h3>
      </div>
    </div>
    <p className="text-gray-600 mt-2 flex-grow">{product.description}</p>
  </Card>
);

export default function BrandingPage() {
  const featuredProducts = products.filter((p) => p.isFeatured);
  const otherProducts = products.filter((p) => !p.isFeatured);

  return (
    <div className="animate-fade-in space-y-16">
      {/* Header */}
      <header
        className="relative bg-brand-navy rounded-2xl shadow-2xl overflow-hidden -mt-4"
        style={{
          backgroundImage: `radial-gradient(circle at top right, #FFD70020, transparent), radial-gradient(circle at bottom left, #002147, #001a38)`,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
          alt="Professional working on a branding project"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative text-center p-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-Blue/80">
            Letsheng Branding
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We translate your brand identity into tangible, professional-grade
            assets that make an impact.
          </p>
          <div className="mt-10">
            <Link href="/branding/t-shirt/order">
              <Button size="lg" className="font-bold text-lg">
                <Paintbrush className="h-5 w-5 mr-3" />
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Products */}
      <section>
        <h2 className="text-4xl font-extrabold text-brand-navy mb-8 text-center">
          Featured Products
        </h2>
        <div className="space-y-8">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} isFeatured />
          ))}
        </div>
      </section>

      {/* Other Products */}
      <section>
        <h2 className="text-4xl font-extrabold text-brand-navy mb-8 text-center">
          Our Full Catalog
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {otherProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
          {comingSoonProducts.map((p) => (
            <ComingSoonCard key={p.title} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

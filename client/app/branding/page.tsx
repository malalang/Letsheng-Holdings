import {
  Paintbrush,
  Tag,
  Clock,
  CheckCircle2,
  CircleDollarSign,
  ArrowRight, Zap, Layers
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getBrandingProducts } from "./actions";


function BrandingHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-20">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 -translate-y-12 -translate-x-12 blur-3xl opacity-10 pointer-events-none">
        <div className="aspect-square h-[500px] rounded-full bg-primary" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
          <Layers className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
            Custom Corporate Identity
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6">
          Letsheng <span className="text-primary">Branding</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          We translate your vision into tangible professional assets. From high-quality
          apparel to full-scale corporate identity kits, we build the visual
          tools for your business growth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <Paintbrush className="h-5 w-5 text-primary" />
            <span>Custom Design</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>Rapid Production</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function BrandingPage() {
  const products = await getBrandingProducts();

  return (
    <div className="animate-fade-in">
      <BrandingHero />


      {/* Product Grid - 1 col mobile, 2 col md */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {products.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col transition-hover duration-300 hover:shadow-xl"
          >
            {/* Image Section */}
            <div className="relative h-80 bg-gray-100 overflow-hidden">
              <Link href={`/branding/${p.id}`}>
                <Image
                  src={p.image ?? "/placeholder-branding.jpg"}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.is_featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-secondary font-bold">
                      Featured
                    </Badge>
                  </div>)}
              </Link>
            </div>


            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg md:text-2xl font-bold text-secondary leading-tight">
                  {p.title}
                </CardTitle>
                <Badge variant="outline" className="shrink-0 border-primary text-primary bg-primary/5">
                  {p.category}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 pt-1">Professional Solutions</p>
            </CardHeader>

            <CardContent className="flex-grow">
              {/* Branding Info Row - Matching the Bed/Bath/Home style */}
              <div className="flex items-center text-gray-600 space-x-4 mb-4">
                <div className="flex items-center text-sm">
                  <Tag className="h-4 w-4 mr-2 text-primary" />
                  <span>Premium</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>Quick</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Bulk Ready</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed line-clamp-3">
                {p.description}
              </p>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {(p.specs as any[]).map((spec) => (
                    <div
                      key={spec.label}
                      className="flex border-b mb-2 border-primary justify-between text-sm"
                    >
                      <span className="font-semibold flex gap text-gray-600">
                        <Tag className="h-4 w-4 mr-2 text-primary" />
                        {spec.label}:
                      </span>
                      <span className="text-gray-800">{spec.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </CardContent>

            <CardFooter className="bg-gray-50/50 px-6 py-4 flex items-center justify-between mt-auto border-t border-gray-100">
              <Link href={`/branding/${p.id}`}>
                <Button variant="outline" className="font-semibold">
                  View Catalog
                </Button>
              </Link>
              <Link href={`/branding/${p.id}/order`}>
                <Button variant="default" className="font-semibold">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* High-Fidelity Trust Banner - Replaces Terms of Tenancy */}
      <section className="mt-20 p-8 rounded-2xl bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl text-primary font-bold">Custom Branding Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-primary font-black text-xl">01. Quote</div>
              <p className="text-sm text-gray-300">Submit your brief and receive a tailored estimate within 24 hours.</p>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-black text-xl">02. Proof</div>
              <p className="text-sm text-gray-300">Review digital mockups and approve your design before production.</p>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-black text-xl">03. Deliver</div>
              <p className="text-sm text-gray-300">Fast production and nationwide delivery to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
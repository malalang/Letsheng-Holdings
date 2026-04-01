import {
  Paintbrush,
  Tag,
  Clock,
  CheckCircle2,
  CircleDollarSign,
  ArrowRight,
  Zap,
  Layers
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {products.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col transition-all hover:shadow-xl"
          >
            <div className="relative h-64 bg-gray-100 overflow-hidden">
              <Link href={`/branding/${p.id}`}>
                <Image
                  src={p.image ?? "/placeholder-branding.jpg"}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {p.is_featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-secondary font-bold">
                      Featured
                    </Badge>
                  </div>
                )}
              </Link>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-secondary leading-tight">
                  {p.title}
                </CardTitle>
                <Badge variant="outline" className="shrink-0 border-primary text-primary bg-primary/5">
                  {p.category}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 pt-1">Professional Identity Solutions</p>
            </CardHeader>

            <CardContent className="flex-grow">
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

              <p className="text-gray-700 leading-relaxed line-clamp-2 mb-6">
                {p.description}
              </p>

              {/* Simplified Specifications List */}
              <div className="space-y-2 border-t pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Specifications</p>
                {(p.specs as any[]).slice(0, 3).map((spec) => (
                  <div key={spec.label} className="flex justify-between text-sm border-b border-gray-50 pb-1">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-medium text-secondary">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* PRICE ALIGNMENT - Matching Properties style */}
              <div className="mt-8 flex items-center text-2xl font-bold text-secondary">
                <CircleDollarSign className="h-6 w-6 mr-2 text-primary" />
                <span className="text-sm font-normal text-gray-500 mr-2">Starts at</span>
                R ---
              </div>
            </CardContent>

            <CardFooter className="bg-gray-50/50 px-6 py-4 flex items-center justify-between mt-auto border-t">
              <Link href={`/branding/${p.id}`}>
                <Button size="sm" variant="outline">View Catalog</Button>
              </Link>
              <Link href={`/branding/${p.id}/order`}>
                <Button size="sm" variant="default">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Trust Banner */}
      <section className="mt-20 p-8 rounded-2xl bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl text-primary font-bold">Custom Branding Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div>
              <div className="text-primary font-black text-xl mb-1">01. Quote</div>
              <p className="text-sm text-gray-400">Tailored estimate in 24 hours.</p>
            </div>
            <div>
              <div className="text-primary font-black text-xl mb-1">02. Proof</div>
              <p className="text-sm text-gray-400">Approve designs before we print.</p>
            </div>
            <div>
              <div className="text-primary font-black text-xl mb-1">03. Deliver</div>
              <p className="text-sm text-gray-400">Fast nationwide delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
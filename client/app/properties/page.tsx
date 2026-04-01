import { Bath, Bed, CircleDollarSign, Home, MapPin, ShieldCheck, Stars } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import TermsOfTenancy from "@/components/terms/TermsOfTenancy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getProperties } from "./actions";

function EstatesHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-20">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-10 pointer-events-none">
        <div className="aspect-square h-[500px] rounded-full bg-primary" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
          <Stars className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
            Premium Property Management
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6">
          Letsheng <span className="text-primary">Estates</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          Discover curated living spaces designed for comfort, security, and
          discerning taste. Our portfolio combines premium locations with
          attentive, professional management.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>Secure Rentals</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Prime Locations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="animate-fade-in">
      <EstatesHero />


      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-12">
        {properties.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col"
          >
            <div className="relative h-48">
              <Link href={`/properties/${p.id}`}>
                <Image
                  src={p.image_url ?? ""}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </Link>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-secondary leading-tight">
                  {p.title}
                </CardTitle>
                <Badge
                  variant={p.availability ? "default" : "destructive"}
                  className="shrink-0"
                >
                  {p.availability ? "Available" : "Occupied"}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 pt-1">{p.location}</p>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="flex items-center text-gray-600 space-x-4 mb-4">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2" />
                  <span>{p.bedrooms}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2" />
                  <span>{p.bathrooms}</span>
                </div>
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  <span>{p.type}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{p.description}</p>
              <div className="mt-6 flex items-center text-2xl font-bold text-secondary">
                <CircleDollarSign className="h-6 w-6 mr-2 text-primary" />R
                {p.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-500 ml-2">
                  / month
                </span>
              </div>
            </CardContent>

            <CardFooter className="bg-gray-50/50 px-6 py-4 flex items-center justify-between mt-auto">
              <Link href={`/properties/${p.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
              <Link href={`/properties/${p.id}/apply-to-lease`}>
                <Button variant="default">Apply to Lease</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <TermsOfTenancy />
    </div>
  );
}

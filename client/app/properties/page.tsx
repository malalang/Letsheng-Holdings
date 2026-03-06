import { Bath, Bed, CircleDollarSign, Home } from "lucide-react";
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

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy">
          Letsheng Estates
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Discover curated living spaces designed for comfort, security, and
          discerning taste. Our portfolio combines premium locations with
          attentive management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                <CardTitle className="text-2xl font-bold text-brand-navy leading-tight">
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
              <div className="mt-6 flex items-center text-2xl font-bold text-brand-navy">
                <CircleDollarSign className="h-6 w-6 mr-2 text-brand-Blue" />R
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

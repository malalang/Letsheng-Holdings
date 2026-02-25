import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  BedDouble,
  Bath,
  Car,
  Ruler,
  MapPin,
  DollarSign,
  Eye,
  FileText,
} from "lucide-react";
import Link from "next/link";
import type React from "react";

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  availability: boolean;
  images: string[];
  details: {
    bedrooms: number;
    bathrooms: number;
    garages: number;
    size: string;
  };
  longDescription: string;
}

const getPropertyDetails = (id: string): Property | null => {
  const properties: { [key: string]: Property } = {
    "1": {
      id: "1",
      title: "Executive Waterfront Residence, Harbour View",
      price: 35000,
      location: "V&A Waterfront, Cape Town",
      availability: true,
      images: [
        "/placeholders/stock-real-estate-1.jpg",
        "/placeholders/stock-interior-1.jpg",
        "/placeholders/stock-interior-2.jpg",
        "/placeholders/stock-interior-3.jpg",
      ],
      details: {
        bedrooms: 3,
        bathrooms: 3,
        garages: 2,
        size: "280m²",
      },
      longDescription:
        "Indulge in an unparalleled lifestyle of luxury and sophistication. This executive suite, perched above the vibrant V&A Waterfront, offers breathtaking panoramic views of the marina, the city skyline, and the iconic Table Mountain. Appointed with state-of-the-art amenities, bespoke Italian furnishings, and floor-to-ceiling windows, this residence is an exclusive address for the discerning professional seeking the pinnacle of secure, stylish city living.",
    },
  };
  return properties[id] || null;
};

const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => (
  <div className="flex items-center space-x-3">
    <div className="bg-brand-navy/10 p-3 rounded-lg">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="text-lg font-bold text-brand-navy">{value}</p>
    </div>
  </div>
);

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = getPropertyDetails(params.id);

  if (!property) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Property Not Found</h2>
        <p className="text-gray-600">
          The requested property could not be found.
        </p>
        <Link href="/properties">
          <Button className="mt-4">Back to Properties</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <Link href="/properties">
        <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Properties
        </Button>
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-brand-navy tracking-tight">
          {property.title}
        </h1>
        <div className="flex items-center text-gray-500 mt-2">
          <MapPin className="h-5 w-5 mr-2" />
          <p className="text-lg">{property.location}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[500px]">
            <div className="col-span-3 row-span-2 bg-gray-300 rounded-xl overflow-hidden">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-lg border-gray-200/50 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Lease Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline text-4xl font-bold text-brand-navy mb-4">
                <DollarSign className="h-8 w-8 mr-2 text-brand-gold" />
                {property.price.toLocaleString()}
                <span className="text-lg font-medium text-gray-500 ml-2">
                  / month
                </span>
              </div>
              <Badge
                variant={property.availability ? "default" : "destructive"}
                className="w-full text-center justify-center py-2 text-md font-bold"
              >
                {property.availability
                  ? "Available for Immediate Lease"
                  : "Currently Occupied"}
              </Badge>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Request Viewing
                </Button>
                <Button
                  variant="default"
                  className="w-full"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Proceed to Application
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/60 backdrop-blur-lg border-gray-200/50 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Property Specifications
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-6">
              <DetailItem
                icon={<BedDouble className="h-6 w-6 text-brand-gold" />}
                label="Bedrooms"
                value={`${property.details.bedrooms} Rooms`}
              />
              <DetailItem
                icon={<Bath className="h-6 w-6 text-brand-gold" />}
                label="Bathrooms"
                value={`${property.details.bathrooms} Full`}
              />
              <DetailItem
                icon={<Car className="h-6 w-6 text-brand-gold" />}
                label="Garages"
                value={`${property.details.garages} Vehicles`}
              />
              <DetailItem
                icon={<Ruler className="h-6 w-6 text-brand-gold" />}
                label="Living Area"
                value={property.details.size}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-brand-navy mb-4">
          Property Description
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
          {property.longDescription}
        </p>
      </section>
    </div>
  );
}

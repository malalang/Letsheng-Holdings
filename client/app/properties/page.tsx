import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
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

const sampleProperties = [
  {
    id: "1",
    title: "Executive Waterfront Residence, Harbour View",
    description:
      "Experience unparalleled luxury in our executive waterfront suite. Offering breathtaking panoramic views of the marina, this residence features state-of-the-art amenities and bespoke furnishings. Ideal for the discerning professional.",
    price: 35000,
    location: "V&A Waterfront, Cape Town",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Metropolitan Loft, Financial District",
    description:
      'A chic, fully-serviced loft situated in the heart of the financial district. With soaring ceilings and industrial-luxe design, this space is crafted for productivity and style. Includes access to our resident"s lounge.',
    price: 22000,
    location: "Sandton, Johannesburg",
    availability: false,
    image_url:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Tranquil Garden Cottage",
    description:
      "A serene and private garden cottage nestled in a quiet suburban neighbourhood. Perfect for those seeking peace and quiet with easy access to city amenities. Features a private garden and modern finishes.",
    price: 12500,
    location: "Constantia, Cape Town",
    availability: true,
    image_url:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
  },
];

// Using shared TermsOfTenancy component (imported above)

export default function PropertiesPage() {
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
        {sampleProperties.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col"
          >
            <div className="relative h-48">
              <Image
                src={p.image_url}
                alt={p.title}
                fill
                className="object-cover"
              />
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
              <Button variant="outline">Request a Viewing</Button>
              <Button variant="default">Apply to Lease</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <TermsOfTenancy />
    </div>
  );
}

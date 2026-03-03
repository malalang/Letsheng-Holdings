import {
  Bath,
  Bed,
  Camera,
  CheckCircle,
  CircleDollarSign,
  Home,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { sampleProperties } from "../data";

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = sampleProperties.find((p) => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="animate-fade-in">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="relative h-96">
            <Image
              src={property.image_url}
              alt={property.title}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>
          <CardTitle className="mt-6 text-4xl font-extrabold text-brand-navy">
            {property.title}
          </CardTitle>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center text-lg text-gray-500">
              <MapPin className="h-5 w-5 mr-2" />
              {property.location}
            </div>
            <Badge
              variant={property.availability ? "default" : "destructive"}
              className="shrink-0"
            >
              {property.availability ? "Available" : "Occupied"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="flex flex-wrap items-center text-gray-600 space-x-4 mb-4">
            <div className="flex items-center">
              <Bed className="h-5 w-5 mr-2" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-5 w-5 mr-2" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center">
              <Home className="h-5 w-5 mr-2" />
              <span>{property.type}</span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            {property.description}
          </p>

          <h3 className="text-2xl font-bold text-brand-navy mb-4">Features</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-8">
            {property.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>

          {property.gallery && property.gallery.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Property Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.gallery.slice(0, 3).map((image) => (
                  <div key={image.imageUrl} className="relative h-48">
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 bg-brand-navy/70 text-white p-2 w-full rounded-b-lg">
                      <h4 className="font-bold text-brand-Blue">
                        {image.title}
                      </h4>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                ))}
                {property.gallery.length > 5 && (
                  <Link
                    href={`/properties/${property.id}/gallery`}
                    className="relative h-48 flex items-center justify-center bg-gray-200 rounded-lg"
                  >
                    <Button>Show More</Button>
                  </Link>
                )}
              </div>
            </div>
          )}

          {property.reviews && property.reviews.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Reviews
              </h3>
              <div className="space-y-4">
                {property.reviews.map((review, index) => (
                  <Card
                    key={`${review.author}-${index}`}
                    className="bg-gray-50/50"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={`${review.author}-${index}-star-${i}`}
                              className="h-5 w-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="ml-2 font-bold text-brand-navy">
                          {review.author}
                        </p>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {property.virtualTourUrl && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                More Details
              </h3>
              <div className="flex items-center">
                <Camera className="h-5 w-5 mr-2" />
                <a
                  href={property.virtualTourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-Blue hover:underline"
                >
                  Virtual Tour
                </a>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center text-4xl font-bold text-brand-navy">
            <CircleDollarSign className="h-8 w-8 mr-2 text-brand-Blue" />R
            {property.price.toLocaleString()}
            <span className="text-lg font-normal text-gray-500 ml-2">
              / month
            </span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Link href={`/properties/${property.id}/apply-to-lease`}>
              <Button size="lg" className="w-full">
                Apply to Lease
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full">
                Request a Viewing
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

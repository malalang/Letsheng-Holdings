import {
  ArrowLeft,
  Bath,
  Bed,
  Camera,
  CheckCircle,
  Edit,
  Home,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPropertyById } from "../../actions";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Property not found</h1>
        <p className="text-gray-600">
          The property you are looking for does not exist.
        </p>
        <p className="text-gray-600">here is the id: {id}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-4 flex items-center justify-between">
        <Link href="/dashboard/properties">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Button>
        </Link>
        <Link href={`/dashboard/properties/property/${property.id}/edit`}>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Property
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_350px]">
        <div className="grid auto-rows-max items-start gap-8">
          {/* Main Property Card */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative h-96">
                <Image
                  src={property.image_url || ""}
                  alt={property.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle className="text-3xl font-bold">
                {property.title}
              </CardTitle>
              <div className="flex items-center text-lg text-muted-foreground mt-2">
                <MapPin className="h-5 w-5 mr-2" />
                {property.location}
              </div>
              <Separator className="my-4" />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  <span>{property.type}</span>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </CardContent>
          </Card>

          {/* Features Card */}
          {property.features && property.features.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {property.features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Gallery Card */}
          {property.gallery && property.gallery.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Property Gallery</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.gallery.map((image: { imageUrl: string; title: string }) => (
                  <div key={image.imageUrl} className="relative h-48">
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid auto-rows-max items-start gap-8">
          {/* Status & Price Card */}
          <Card>
            <CardHeader>
              <CardTitle>Status & Pricing</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Availability</span>
                <Badge
                  variant={property.availability ? "default" : "destructive"}
                >
                  {property.availability ? "Available" : "Occupied"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Featured</span>
                <Badge variant={property.is_featured ? "default" : "secondary"}>
                  {property.is_featured ? "Yes" : "No"}
                </Badge>
              </div>
              <Separator />
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Monthly Rate</span>
                <p className="text-2xl font-bold">
                  R {property.price.toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reviews Card */}
          {property.reviews && property.reviews.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Client Reviews</CardTitle>
                <CardDescription>
                  What previous tenants are saying.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {property.reviews.map((review: { id: string; rating: number; author: string; comment: string }) => (
                  <div key={review.id} className="p-4 rounded-lg border">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={`${review.id}-star-${i}`}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="ml-2 font-semibold">{review.author}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Virtual Tour */}
          {property.virtual_tour_url && (
            <Card>
              <CardHeader>
                <CardTitle>Virtual Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <Link href={property.virtual_tour_url} target="_blank">
                  <Button variant="outline" className="w-full">
                    <Camera className="mr-2 h-4 w-4" />
                    Open Virtual Tour
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

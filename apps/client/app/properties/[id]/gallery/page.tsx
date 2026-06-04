import Image from "next/image";
import Link from "next/link";
import { galleryItemSchema } from "@repo/supabase";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { getPropertyById } from "../../actions";

export default async function PropertyGalleryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    return <div>Property not found</div>;
  }

  const parsedGallery = galleryItemSchema
    .array()
    .safeParse(property.gallery ?? []);
  const gallery = parsedGallery.success ? parsedGallery.data : [];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">
          {property.title} - Gallery
        </h1>
        <Link href={`/properties/${id}`} className="mt-4 inline-block">
          <Button variant="outline">Back to Property Details</Button>
        </Link>
      </div>
      {gallery.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((image) => (
          <Card
            key={image.imageUrl}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64">
              <Image
                src={image.imageUrl}
                alt={image.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-secondary">
                {image.title}
              </h3>
              <p className="text-gray-600">{image.description}</p>
            </CardContent>
          </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center text-muted-foreground">
          No gallery images are available for this property yet.
        </Card>
      )}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { sampleProperties } from "../../data";

export default async function PropertyGalleryPage({
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
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy">
          {property.title} - Gallery
        </h1>
        <Link href={`/properties/${id}`} className="mt-4 inline-block">
          <Button variant="outline">Back to Property Details</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {property.gallery.map((image) => (
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
              <h3 className="text-lg font-bold text-brand-navy">
                {image.title}
              </h3>
              <p className="text-gray-600">{image.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

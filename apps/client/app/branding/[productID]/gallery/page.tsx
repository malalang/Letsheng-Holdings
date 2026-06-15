import { galleryItemSchema } from "@repo/contracts/property";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { getBrandingProduct } from "../../actions";

export default async function ProductGalleryPage({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;
  const product = await getBrandingProduct(productID);

  if (!product) {
    return <div>Product not found</div>;
  }

  const parsedGallery = galleryItemSchema
    .array()
    .safeParse(product.gallery ?? []);
  const gallery = parsedGallery.success ? parsedGallery.data : [];

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl font-extrabold text-secondary tracking-tight mb-2">
        Gallery: {product.title}
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        A closer look at our craftsmanship.
      </p>

      {gallery.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((image, index) => (
            <Card
              key={image.imageUrl}
              className="overflow-hidden shadow-lg rounded-2xl"
            >
              <div className="relative h-80">
                <Image
                  src={image.imageUrl}
                  alt={`${product.title} - Gallery Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center text-muted-foreground">
          No gallery images are available for this product yet.
        </Card>
      )}
    </div>
  );
}

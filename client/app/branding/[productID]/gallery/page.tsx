import Image from "next/image";

import { Card } from "@/components/ui/card";

import { products } from "../../data";

export default async function ProductGalleryPage({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;
  const product = products.find((p) => p.id === productID);

  if (!product) {
    return <div>Product not found</div>;
  }

  // For now, we'll just display the main product image.
  // This can be expanded to a full gallery later.
  const images = [product.image];

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl font-extrabold text-brand-navy tracking-tight mb-2">
        Gallery: {product.title}
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        A closer look at our craftsmanship.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <Card key={image} className="overflow-hidden shadow-lg rounded-2xl">
            <div className="relative h-80">
              <Image
                src={image}
                alt={`${product.title} - Gallery Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

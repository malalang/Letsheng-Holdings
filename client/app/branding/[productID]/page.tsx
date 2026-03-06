import { Eye, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBrandingProduct } from "../actions";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;
  const product = await getBrandingProduct(productID);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="animate-fade-in">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-96 rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={product.image ?? ''}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge variant="default" className="font-semibold mb-2">
                {product.category}
              </Badge>
              <h1 className="text-5xl font-extrabold text-brand-navy tracking-tight">
                {product.title}
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                {product.description}
              </p>

              {product.specs && (product.specs as any[]).length > 0 && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {(product.specs as any[]).map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between text-sm"
                      >
                        <span className="font-semibold text-gray-600">
                          {spec.label}:
                        </span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              <div className="mt-8 flex gap-4">
                <Link href={`/branding/${product.id}/order`} className="flex-1">
                  <Button size="lg" className="w-full font-bold text-lg">
                    <ShoppingCart className="h-5 w-5 mr-3" />
                    Initiate Inquiry
                  </Button>
                </Link>
                <Link
                  href={`/branding/${product.id}/gallery`}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full font-bold text-lg"
                  >
                    <Eye className="h-5 w-5 mr-3" />
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          {product.gallery && (product.gallery as any[]).length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Product Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {(product.gallery as any[]).slice(0, 3).map((image) => (
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
                {(product.gallery as any[]).length > 3 && (
                  <Link
                    href={`/branding/${product.id}/gallery`}
                    className="relative h-48 flex items-center justify-center bg-gray-200 rounded-lg"
                  >
                    <Button>Show More</Button>
                  </Link>
                )}
              </div>
            </div>
          )}

          {product.reviews && (product.reviews as any[]).length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Reviews
              </h3>
              <div className="space-y-4">
                {(product.reviews as any[]).map((review, index) => (
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
        </CardContent>
      </Card>
    </div>
  );
}

import { specItemSchema } from "@letsheng-holdings/contracts/branding";
import { galleryItemSchema } from "@letsheng-holdings/contracts/gallery";
import { reviewSchema } from "@letsheng-holdings/contracts/property";
import { ArrowLeft, CheckCircle, Edit, Star } from "lucide-react";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getBrandingProduct } from "../../actions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getBrandingProduct(id);

  if (!product) {
    return {};
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};
export default async function BrandingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getBrandingProduct(id);

  if (!product) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <p className="text-muted-foreground">
          The product you are looking for does not exist.
        </p>
        <Button asChild variant="outline" className="mt-4">
          <Link href="/dashboard/branding">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Branding
          </Link>
        </Button>
      </div>
    );
  }

  const parsedSpecs = specItemSchema.array().safeParse(product.specs ?? []);
  const parsedGallery = galleryItemSchema
    .array()
    .safeParse(product.gallery ?? []);
  const parsedReviews = reviewSchema.array().safeParse(product.reviews ?? []);
  const specs = parsedSpecs.success ? parsedSpecs.data : [];
  const gallery = parsedGallery.success ? parsedGallery.data : [];
  const reviews = parsedReviews.success ? parsedReviews.data : [];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-4 flex items-center justify-between">
        <Button asChild variant="outline" size="sm">
          <Link href="/dashboard/branding">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Branding
          </Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link href={`/dashboard/branding/brand/${product.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Product
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_350px]">
        <div className="grid auto-rows-max items-start gap-4">
          <Card>
            <CardHeader className="p-0">
              <div className="relative h-96">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center rounded-t-lg bg-muted text-sm text-muted-foreground">
                    No product image
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle className="text-3xl font-bold">
                {product.title}
              </CardTitle>
              <div className="text-lg text-muted-foreground mt-2">
                {product.category}
              </div>
              <Separator className="my-4" />
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </CardContent>
          </Card>

          {specs.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {specs.map((spec) => (
                    <li key={spec.label} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>
                        <strong>{spec.label}:</strong> {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {gallery.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Product Gallery</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((image) => (
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

        <div className="grid auto-rows-max items-start gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Featured</span>
                <Badge variant={product.isFeatured ? "default" : "secondary"}>
                  {product.isFeatured ? "Yes" : "No"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {reviews.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Client Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews.map((review, reviewIndex) => (
                  <div
                    key={review.id ?? `${review.author}-${reviewIndex}`}
                    className="p-4 rounded-lg border border-border"
                  >
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={`${review.id ?? review.author}-${reviewIndex}-star-${i}`}
                            className="h-4 w-4 text-warning-foreground fill-current"
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
        </div>
      </div>
    </div>
  );
}

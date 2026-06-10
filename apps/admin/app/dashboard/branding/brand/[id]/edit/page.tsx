import {
  galleryItemSchema,
  reviewSchema,
  specItemSchema,
} from "@repo/supabase";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBrandingProduct } from "../../../actions";
import BrandingForm from "../../../branding-form";

export default async function EditBrandingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productData = await getBrandingProduct(id);

  if (!productData) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/dashboard/branding">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Branding
          </Button>
        </Link>
      </div>
    );
  }

  const specs = specItemSchema.array().safeParse(productData.specs);
  const gallery = galleryItemSchema.array().safeParse(productData.gallery);
  const reviews = reviewSchema.array().safeParse(productData.reviews);

  const product = {
    ...productData,
    specs: specs.success ? specs.data : null,
    gallery: gallery.success ? gallery.data : null,
    reviews: reviews.success ? reviews.data : null,
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 flex items-center gap-4">
        <Link href={`/dashboard/branding/brand/${product.id}`}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Cancel Edit
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Edit Product</CardTitle>
          <CardDescription>
            You are currently editing the details for:{" "}
            <span className="font-semibold text-foreground">
              {product.title}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BrandingForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}

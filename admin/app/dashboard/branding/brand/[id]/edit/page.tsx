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
import BrandingForm from "../../../branding-form";
import { products } from "../../../data";

export default async function EditBrandingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
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

  // The 'product' object from 'data.ts' contains an 'icon' property which is a React Component.
  // React Components (functions) are not serializable and cannot be passed from a Server Component to a Client Component.
  // To fix this, we create a new object that omits the 'icon' property and any other properties not defined in the 'Branding' schema.
  const { id: _, icon: __, reviews: ___, ...productForForm } = product;

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
          <BrandingForm product={productForForm} />
        </CardContent>
      </Card>
    </div>
  );
}

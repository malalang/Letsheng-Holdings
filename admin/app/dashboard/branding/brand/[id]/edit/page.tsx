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
import { getBrandingProduct } from "../../../actions";

export default async function EditBrandingPage({
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
        <Link href="/dashboard/branding">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Branding
          </Button>
        </Link>
      </div>
    );
  }

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

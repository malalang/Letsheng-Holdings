import BrandingOrderForm from "@/components/branding/BrandingOrderForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBrandingProduct } from "../../actions";

// --- Sidebar Component --- //
const NextStepsInfo = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-lg font-semibold">Next Steps</CardTitle>
    </CardHeader>
    <CardContent>
      <ol className="space-y-4 text-sm">
        <li className="flex items-start">
          <strong className="bg-primary text-secondary rounded-full h-8 w-8 text-center shrink-0 leading-8 font-bold mr-4">
            1
          </strong>
          <div>
            <strong>Consultation & Quote:</strong> We review your submission and
            provide a tailored quote.
          </div>
        </li>
        <li className="flex items-start">
          <strong className="bg-primary text-secondary rounded-full h-8 w-8 text-center shrink-0 leading-8 font-bold mr-4">
            2
          </strong>
          <div>
            <strong>Review & Approval:</strong> You will receive proofs for
            approval before production.
          </div>
        </li>
        <li className="flex items-start">
          <strong className="bg-primary text-secondary rounded-full h-8 w-8 text-center shrink-0 leading-8 font-bold mr-4">
            3
          </strong>
          <div>
            <strong>Production & Fulfillment:</strong> We manage production and
            fulfillment end-to-end.
          </div>
        </li>
      </ol>
    </CardContent>
  </Card>
);

// --- Server Component: The Page --- //
export default async function BrandingOrderPage({
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
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-secondary tracking-tight">
          Inquiry: {product.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Complete the form below to begin the consultation process for your
          custom branding project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <BrandingOrderForm product={product} />
        </div>
        <div className="lg:sticky lg:top-24 h-fit">
          <NextStepsInfo />
        </div>
      </div>
    </div>
  );
}

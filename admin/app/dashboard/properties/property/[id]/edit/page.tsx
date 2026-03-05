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
import { sampleProperties } from "../../../data";
import PropertyForm from "../../../property-form";

export default async function EditPropertyPage({params}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = sampleProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Property not found</h1>
        <Link href="/dashboard/properties">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 flex items-center gap-4">
        <Link href={`/dashboard/properties/property/${property.id}`}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Cancel Edit
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Edit Property</CardTitle>
          <CardDescription>
            You are currently editing the details for:{" "}
            <span className="font-semibold text-foreground">{property.title}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PropertyForm property={property} />
        </CardContent>
      </Card>
    </div>
  );
}

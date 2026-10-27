import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { viewportThemeColor } from "@/lib/theme";
import { getPropertyById } from "../../actions";
import LeaseApplicationForm from "./LeaseApplicationForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const property = await getPropertyById(id);
    return {
      title: `Apply to Lease: ${property.title}`,
    };
  } catch {
    return {};
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: viewportThemeColor,
};
export default async function ApplyToLeasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const property = await getPropertyById(id);

    return (
      <LeaseApplicationForm
        propertyId={property.id}
        propertyTitle={property.title}
        propertyPrice={property.price}
      />
    );
  } catch {
    notFound();
  }
}

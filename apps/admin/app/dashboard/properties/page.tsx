import { Bath, Bed, CircleDollarSign, Home } from "lucide-react";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { RecordActionsMenu } from "@/components/admin/RecordActionsMenu";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { deleteProperty, getProperties } from "./actions";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Manage the Letsheng Holdings real estate portfolio and lease assignments.",
};

const PROPERTY_IMAGE_FALLBACK = "/logo.jpg";

const statusOptions = [
  { value: "all", label: "All" },
  { value: "available", label: "Available" },
  { value: "unavailable", label: "Unavailable" },
] as const;

type StatusOption = (typeof statusOptions)[number]["value"];

function getStatusFilter(status: string | string[] | undefined): StatusOption {
  if (Array.isArray(status)) {
    status = status[0];
  }

  if (status === "available" || status === "unavailable") {
    return status;
  }

  return "all";
}

function getStatusHref(status: StatusOption) {
  return status === "all"
    ? "/dashboard/properties"
    : `/dashboard/properties?status=${status}`;
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
export default async function AdminPropertiesPage({
  searchParams,
}: {
  searchParams?: Promise<{ status?: string | string[] }>;
}) {
  const resolvedSearchParams = await searchParams;
  const result = await getProperties();
  const selectedStatus = getStatusFilter(resolvedSearchParams?.status);

  const allProperties = result.ok && result.data ? result.data.properties : [];
  const availableProperties = allProperties.filter(
    (property) => property.availability,
  );
  const unavailableProperties = allProperties.filter(
    (property) => !property.availability,
  );

  const statusProperties =
    selectedStatus === "available"
      ? availableProperties
      : selectedStatus === "unavailable"
        ? unavailableProperties
        : allProperties;

  return (
    <div>
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Estates Command</h1>
          <p className="text-muted-foreground">
            Manage your real estate portfolio.
          </p>
        </div>
      </div>

      <Tabs value={selectedStatus}>
        <TabsList className="space-x-2">
          {statusOptions.map((option) => {
            const count =
              option.value === "all"
                ? allProperties.length
                : option.value === "available"
                  ? availableProperties.length
                  : unavailableProperties.length;

            return (
              <TabsTrigger key={option.value} value={option.value} asChild>
                <Link
                  href={getStatusHref(option.value)}
                  className="inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium"
                >
                  {option.label} ({count})
                </Link>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>

      {statusProperties.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-muted p-12 text-center">
          <h2 className="text-xl font-semibold">
            No{" "}
            {selectedStatus === "all"
              ? "properties"
              : `${selectedStatus} properties`}{" "}
            found.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Adjust the filter or add a new property to see it appear here.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {statusProperties.map((p) => {
            const propertyId = p.id;

            if (!propertyId) {
              return null;
            }

            return (
              <Card
                key={propertyId}
                className="flex flex-col overflow-hidden rounded-lg border-border"
              >
                <div className="relative h-48">
                  <Link href={`/dashboard/properties/property/${propertyId}`}>
                    <Image
                      src={p.imageUrl || PROPERTY_IMAGE_FALLBACK}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <div className="absolute top-2 right-2">
                    <RecordActionsMenu
                      recordName={p.title}
                      recordType="property"
                      editHref={`/dashboard/properties/property/${propertyId}/edit`}
                      viewHref={`/dashboard/properties/property/${propertyId}`}
                      deleteId={propertyId}
                      deleteAction={deleteProperty}
                    />
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="truncate font-bold text-2xl text-secondary leading-tight">
                      {p.title}
                    </CardTitle>
                    <Badge
                      variant={p.availability ? "default" : "destructive"}
                      className="shrink-0"
                    >
                      {p.availability ? "Available" : "Occupied"}
                    </Badge>
                  </div>
                  <p className="pt-1 text-muted-foreground text-sm">
                    {p.location}
                  </p>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="mb-4 flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="mr-2 h-5 w-5" />
                      <span>{p.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="mr-2 h-5 w-5" />
                      <span>{p.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="mr-2 h-5 w-5" />
                      <span>{p.type}</span>
                    </div>
                  </div>
                  <p className="truncate text-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-6 flex items-center font-bold text-2xl text-secondary">
                    <CircleDollarSign className="mr-2 h-6 w-6 text-primary" />R
                    {p.price.toLocaleString()}
                    <span className="ml-2 font-normal text-muted-foreground text-sm">
                      / month
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

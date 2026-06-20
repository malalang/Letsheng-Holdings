import {
  Bath,
  Bed,
  CircleDollarSign,
  Edit,
  Eye,
  Home,
  MoreVertical,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { getProperties } from "./actions";

const statusOptions = [
  { value: "all", label: "All" },
  { value: "available", label: "Available" },
  { value: "unavailable", label: "Unavailable" },
] as const;

type StatusOption = (typeof statusOptions)[number]["value"];

function getStatusFilter(
  status: string | string[] | undefined,
): StatusOption {
  if (Array.isArray(status)) {
    status = status[0];
  }

  if (status === "available" || status === "unavailable") {
    return status;
  }

  return "all";
}

export default async function AdminPropertiesPage({
  searchParams,
}: {
  searchParams?: { status?: string | string[] };
}) {
  const properties = await getProperties();
  const selectedStatus = getStatusFilter(searchParams?.status);

  const allProperties = properties;
  const availableProperties = properties.filter((property) => property.availability);
  const unavailableProperties = properties.filter(
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
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Estates Command</h1>
          <p className="text-muted-foreground">
            Manage your real estate portfolio.
          </p>
        </div>
      </div>

      <Tabs defaultValue={selectedStatus}>
        <TabsList className="space-x-2">
          {statusOptions.map((option) => {
            const count =
              option.value === "all"
                ? allProperties.length
                : option.value === "available"
                ? availableProperties.length
                : unavailableProperties.length;

            return (
              <TabsTrigger
                key={option.value}
                value={option.value}
                asChild
              >
                <Link
                  href={`/dashboard/properties?status=${option.value}`}
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
        <div className="rounded-2xl border border-dashed border-muted p-12 text-center mt-8">
          <h2 className="text-xl font-semibold">
            No {selectedStatus === "all" ? "properties" : `${selectedStatus} properties`} found.
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Adjust the filter or add a new property to see it appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {statusProperties.map((p) => (
            <Card
              key={p.id}
              className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Link href={`/dashboard/properties/property/${p.id}`}>
                  <Image
                    src={p.imageUrl || ""}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </Link>
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="default" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link
                          href={`/dashboard/properties/property/${p.id}/edit`}
                          className="flex items-center w-full"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-bold text-secondary leading-tight">
                    {p.title}
                  </CardTitle>
                  <Badge
                    variant={p.availability ? "default" : "destructive"}
                    className="shrink-0"
                  >
                    {p.availability ? "Available" : "Occupied"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 pt-1">{p.location}</p>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex items-center text-gray-600 space-x-4 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-2" />
                    <span>{p.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2" />
                    <span>{p.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="h-5 w-5 mr-2" />
                    <span>{p.type}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed truncate">
                  {p.description}
                </p>
                <div className="mt-6 flex items-center text-2xl font-bold text-secondary">
                  <CircleDollarSign className="h-6 w-6 mr-2 text-primary" />R
                  {p.price.toLocaleString()}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    / month
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

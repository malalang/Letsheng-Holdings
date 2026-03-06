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
import { getProperties } from "./actions";

export default async function AdminPropertiesPage() {
  const properties = await getProperties();

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Estates Command</h1>
          <p className="text-muted-foreground">
            Manage your real estate portfolio.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {properties.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col"
          >
            <div className="relative h-48">
              <Link href={`/dashboard/properties/property/${p.id}`}>
                <Image
                  src={p.image_url}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon">
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
                <CardTitle className="text-2xl font-bold text-brand-navy leading-tight">
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
              <div className="mt-6 flex items-center text-2xl font-bold text-brand-navy">
                <CircleDollarSign className="h-6 w-6 mr-2 text-brand-Blue" />R
                {p.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-500 ml-2">
                  / month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

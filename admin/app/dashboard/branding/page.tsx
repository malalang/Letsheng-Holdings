import { Edit, Eye, MoreVertical, PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getBrandingProducts } from "./actions";

export default async function AdminBrandingPage() {
  const products = await getBrandingProducts();
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Branding Command</h1>
          <p className="text-muted-foreground">
            Manage your branding portfolio.
          </p>
        </div>
        <Link href="/dashboard/branding/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map((p) => (
          <Card
            key={p.id}
            className="rounded-xl shadow-lg border-gray-200/50 overflow-hidden flex flex-col"
          >
            <div className="relative h-48">
              <Link href={`/dashboard/branding/brand/${p.id}`}>
                <Image
                  src={p.image ?? ''}
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
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/branding/brand/${p.id}/edit`}
                        className="flex items-center w-full"
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/branding/brand/${p.id}`}
                        className="flex items-center w-full"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Link>
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
                  variant={p.is_featured ? "default" : "secondary"}
                  className="shrink-0"
                >
                  {p.is_featured ? "Featured" : "Standard"}
                </Badge>
              </div>
              <CardDescription>{p.category}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-gray-700 leading-relaxed truncate">
                {p.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

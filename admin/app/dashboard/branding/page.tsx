import { Edit, ListFilter, PlusCircle } from "lucide-react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { brandingData } from "./data";

export default function AdminBrandingPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl">Branding Command Center</CardTitle>
          <CardDescription className="mt-1">
            Manage your entire branding portfolio from this centralized
            dashboard.
          </CardDescription>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <ListFilter className="mr-2 h-4 w-4"></ListFilter> Filter Branding
          </Button>
          <Link href="/dashboard/branding/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4"></PlusCircle>
              Add New Branding
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Branding Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-center">Featured</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brandingData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell className="text-gray-600">{item.category}</TableCell>
                <TableCell className="text-center">
                  <Badge variant={item.isFeatured ? "default" : "secondary"}>
                    {item.isFeatured ? "Yes" : "No"}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`/dashboard/branding/${item.id}`}>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-3 w-3"></Edit> Manage
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

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
import { PlusCircle, Edit, ListFilter } from "lucide-react";

const sampleProperties = [
  {
    id: "PROP-001",
    title: "Executive Waterfront Residence",
    location: "V&A Waterfront, Cape Town",
    status: "Occupied",
    monthly_rate: 35000,
  },
  {
    id: "PROP-002",
    title: "Metropolitan Loft",
    location: "Sandton, Johannesburg",
    status: "Under Maintenance",
    monthly_rate: 22000,
  },
  {
    id: "PROP-003",
    title: "Tranquil Garden Cottage",
    location: "Constantia, Cape Town",
    status: "Available",
    monthly_rate: 12500,
  },
  {
    id: "PROP-004",
    title: "Luxury Penthouse",
    location: "Clifton, Cape Town",
    status: "Available",
    monthly_rate: 65000,
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "Available":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
    case "Occupied":
      return "bg-red-500/20 text-red-400 border-red-500/50";
    case "Under Maintenance":
      return "bg-amber-500/20 text-amber-400 border-amber-500/50";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/50";
  }
};

export default function AdminPropertiesPage() {
  return (
    <Card className="bg-brand-navy/50 text-white border-brand-gold/20 shadow-lg backdrop-blur-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl">Estates Command Center</CardTitle>
          <CardDescription className="text-gray-400 mt-1">
            Manage your entire real estate portfolio from this centralized
            dashboard.
          </CardDescription>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 hover:bg-white/20"
          >
            <ListFilter className="mr-2 h-4 w-4" /> Filter Properties
          </Button>
          <Link href="/dashboard/properties/new">
            <Button className="bg-brand-gold text-brand-navy font-bold hover:bg-brand-gold/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Property
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-b-white/10">
              <TableHead className="text-white/80">Property ID</TableHead>
              <TableHead className="text-white/80">Property Title</TableHead>
              <TableHead className="text-white/80">Location</TableHead>
              <TableHead className="text-white/80 text-center">
                Status
              </TableHead>
              <TableHead className="text-white/80 text-right">
                Monthly Rate (ZAR)
              </TableHead>
              <TableHead className="text-white/80 text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleProperties.map((prop) => (
              <TableRow
                key={prop.id}
                className="border-b-white/10 hover:bg-white/5"
              >
                <TableCell className="font-mono text-sm text-gray-300">
                  {prop.id}
                </TableCell>
                <TableCell className="font-medium text-white">
                  {prop.title}
                </TableCell>
                <TableCell className="text-gray-400">{prop.location}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant="outline"
                    className={`font-semibold ${getStatusBadge(prop.status)}`}
                  >
                    {prop.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold text-white">
                  R {prop.monthly_rate.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`/dashboard/properties/${prop.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-bold"
                    >
                      <Edit className="mr-2 h-3 w-3" /> Manage
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

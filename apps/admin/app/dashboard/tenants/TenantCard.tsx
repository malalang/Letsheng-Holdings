"use client";

import {
  Calendar,
  CreditCard,
  Edit,
  Eye,
  MapPin,
  MoreVertical,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TenantCardProps {
  tenant: any; // Using any for now to handle Joined types
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return <Badge className="bg-green-500 text-white">Active</Badge>;
    case "Inactive":
      return <Badge variant="destructive">Inactive</Badge>;
    case "Pending":
      return <Badge className="bg-yellow-500 text-white">Pending</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function TenantCard({ tenant }: TenantCardProps) {
  const leaseEnd = tenant.leaseEndDate
    ? new Date(tenant.leaseEndDate).toLocaleDateString("en-ZA", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  return (
    <Card className="hover:shadow-md transition-shadow border-muted">
      <CardContent className="p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-muted">
                <AvatarImage
                  src={tenant.avatarUrl ?? undefined}
                  alt={tenant.name}
                />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  {tenant.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <p className="font-bold text-lg leading-none">{tenant.name}</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {tenant.id.slice(0, 8)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {getStatusBadge(tenant.status)}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/dashboard/tenants/tenant/${tenant.id}`}
                      className="cursor-pointer"
                    >
                      <Eye className="h-4 w-4 mr-2" /> View Details
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/dashboard/tenants/tenant/${tenant.id}/edit`}
                      className="cursor-pointer"
                    >
                      <Edit className="h-4 w-4 mr-2" /> Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer">
                    <Trash2 className="h-4 w-4 mr-2" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">
                Property / Unit
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {tenant.property?.title ? (
                  <Link
                    href={`/dashboard/properties/property/${tenant.propertyId}`}
                    className="hover:underline truncate"
                  >
                    {tenant.property.title}
                  </Link>
                ) : (
                  <span className="text-muted-foreground italic text-xs font-normal">
                    Not assigned
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">
                Lease Ends
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>{leaseEnd}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-medium">Account Status</span>
            </div>
            {tenant.status === "Active" ? (
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                Up to Date
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="bg-muted text-muted-foreground border-muted"
              >
                N/A
              </Badge>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full font-bold group"
            asChild
          >
            <Link href={`/dashboard/tenants/tenant/${tenant.id}`}>
              Manage Tenancy{" "}
              <ArrowUpRight className="ml-2 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

import { ArrowUpRight } from "lucide-react";

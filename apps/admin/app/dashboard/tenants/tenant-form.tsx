'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Tenant, type Payment } from "@repo/supabase";
import { createTenant, deleteTenant, updateTenant } from "./actions";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@repo/supabase";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.union([z.string().email("Invalid email address"), z.literal("")]),
  property_id: z.string().optional().nullable(),
  status: z.enum(["Active", "Inactive", "Pending"]),
  lease_end_date: z.string().optional().nullable(),
});
type FormValues = z.infer<typeof formSchema>;

type TenantRecord = Tenant & { id: string };

interface TenantFormProps {
  tenant?: TenantRecord;
  payments?: (Payment & { id: string })[];
}

// Helper to format date for input
const formatDateForInput = (date: Date | string | null | undefined): string => {
    if (!date) return '';
    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) return '';
      return dateObj.toISOString().split('T')[0];
    } catch (e) {
      return '';
    }
  };

export default function TenantForm({ tenant, payments }: TenantFormProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [properties, setProperties] = useState<{ id: string; title: string }[]>([]);
    
    const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: tenant
        ? {
            name: tenant.name,
            email: tenant.email ?? "",
            property_id: tenant.property_id ?? "",
            status: tenant.status,
            lease_end_date: formatDateForInput(tenant.lease_end_date),
          }
        : {
            name: searchParams.get('name') || "",
            email: searchParams.get('email') || "",
            property_id: searchParams.get('property_id') || "",
            status: "Pending",
            lease_end_date: "",
          },
  });

  useEffect(() => {
    const fetchProperties = async () => {
      const supabase = createSupabaseBrowserClient();
      const { data, error } = await supabase.from('properties').select('id, title');
      if (error) {
        console.error('Error fetching properties:', error);
      } else if (data) {
        setProperties(data);
      }
    };

    fetchProperties();
  }, []);

  async function onSubmit(data: FormValues) {
    const dataForAction: Omit<Tenant, "id" | "avatar_url"> = {
      name: data.name,
      email: data.email || null,
      property_id: data.property_id || null,
      status: data.status,
      lease_end_date: data.lease_end_date ? new Date(data.lease_end_date) : null,
    };

    const action = tenant
    ? await updateTenant(tenant.id, dataForAction)
    : await createTenant(dataForAction);

  if (action.success) {
    router.push("/dashboard/tenants");
    router.refresh();
  } else {
    console.error(action.error);
  }
  }

  async function handleDelete() {
    if (tenant) {
      const action = await deleteTenant(tenant.id);
      if (action.success) {
        router.push("/dashboard/tenants");
        router.refresh();
      } else {
        console.error(action.error);
      }
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4">
        <Link href="/dashboard/tenants">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tenants
          </Button>
        </Link>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>
                {tenant ? "Edit Tenant" : "Create New Tenant"}
              </CardTitle>
              <CardDescription>
                Fill out the details below to manage a tenant.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tenant Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., john.doe@example.com" {...field} value={field.value ?? ''}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="property_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ''}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a property" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {properties.map((property) => (
                            <SelectItem key={property.id} value={property.id}>
                                {property.title}
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lease_end_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lease End Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {tenant && payments && (
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>
                  A record of all payments made by the tenant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                        <TableCell>${payment.amount.toFixed(2)}</TableCell>
                        <TableCell>{payment.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end gap-2">
            {tenant && (
              <Button variant="destructive" type="button" onClick={handleDelete}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Tenant
              </Button>
            )}
            <Button type="submit" variant="default" className="bg-primary">
              {tenant ? "Save Changes" : "Create Tenant"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

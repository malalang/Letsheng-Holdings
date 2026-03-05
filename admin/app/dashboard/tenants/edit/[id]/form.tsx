'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, PlusCircle, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Payment, Tenant } from '../../data';
import { z } from 'zod';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const tenantSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    propertyId: z.string().min(1, 'Property is required'),
    status: z.enum(["Active", "Inactive", "Pending"]),
    leaseEndDate: z.string().min(1, 'Lease end date is required'),
});

interface TenantFormProps {
  tenant: Tenant | undefined;
  payments: Payment[];
}

export function TenantForm({ tenant, payments }: TenantFormProps) {
  const form = useForm<Omit<Tenant, 'id' | 'avatarUrl' | 'property'>>({
    resolver: zodResolver(tenantSchema),
    defaultValues: tenant ? {
      name: tenant.name,
      propertyId: tenant.propertyId,
      status: tenant.status,
      leaseEndDate: tenant.leaseEndDate,
    } : {
      name: '',
      propertyId: '',
      status: 'Pending',
      leaseEndDate: '',
    },
  });

  function onSubmit(data: Omit<Tenant, 'id' | 'avatarUrl' | 'property'>) {
    console.log('Form submitted with data:', data);
    // Here you would typically send the data to your backend API
  }

  return (
    <div className="mx-auto max-w-2xl">
        <div className="mb-4">
            <Link href="/dashboard/tenants">
                <Button variant="outline" size='sm'>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Tenants
                </Button>
            </Link>
        </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>{tenant ? 'Edit Tenant' : 'Create New Tenant'}</CardTitle>
                    <CardDescription>Fill out the details below to manage a tenant.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tenant Name</FormLabel>
                                <FormControl>
                                <Input
                                    placeholder="e.g., John Doe"
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="propertyId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Property</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a property" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="prop-001">Executive Waterfront Residence</SelectItem>
                                        <SelectItem value="prop-002">Penthouse in the Sky</SelectItem>
                                        <SelectItem value="prop-003">The Urban Oasis</SelectItem>
                                        <SelectItem value="prop-004">Serene Suburban Sanctuary</SelectItem>
                                        <SelectItem value="prop-005">Modern Downtown Loft</SelectItem>
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        name="leaseEndDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Lease End Date</FormLabel>
                                <FormControl>
                                <Input
                                    type='date'
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
            </Card>

            {tenant && (
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Payment History</CardTitle>
                            <CardDescription>A record of all payments made by the tenant.</CardDescription>
                        </div>
                        <Link href={`/dashboard/tenants/edit/${tenant.id}/payments/new`}>
                            <Button size="sm" variant="outline">
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add Payment
                            </Button>
                        </Link>
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
                                    <TableCell>{payment.date}</TableCell>
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
                <Button variant="destructive" type="button">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Tenant
                </Button>
            )}
            <Button type="submit" variant="default" className='bg-brand-blue'>
                {tenant ? 'Save Changes' : 'Create Tenant'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
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
import { z } from 'zod';

const paymentSchema = z.object({
    amount: z.coerce.number().positive('Amount must be a positive number'),
    date: z.string().min(1, 'Payment date is required'),
    status: z.enum(["Paid", "Pending", "Late"]),
});

export default function NewPaymentPage({ params }: { params: { id: string } }) {
  const form = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      amount: 0,
      date: '',
      status: 'Pending',
    },
  });

  function onSubmit(data: any) {
    console.log('New payment submitted with data:', data);
    // Here you would typically send the data to your backend API
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4">
        <Link href={`/dashboard/tenants/edit/${params.id}`}>
          <Button variant="outline" size='sm'>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tenant
          </Button>
        </Link>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Add New Payment</CardTitle>
              <CardDescription>Fill out the details below to add a new payment.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} value={String(field.value)} onChange={e => field.onChange(parseInt(e.target.value, 10) || 0)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
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
                        <SelectItem value="Paid">Paid</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Late">Late</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" variant="default" className='bg-brand-blue'>
              Add Payment
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

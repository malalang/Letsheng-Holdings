'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
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
import { type Tenant, tenantSchema } from '@/lib/validations/schemas';
import { useSearchParams } from 'next/navigation';

interface TenantFormProps {
    tenant?: Tenant;
}

export default function TenantForm({ tenant }: TenantFormProps) {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const email = searchParams.get('email');

  const form = useForm<Tenant>({
    resolver: zodResolver(tenantSchema),
    defaultValues: tenant || {
      name: name || '',
      email: email || '',
      phone: '',
    },
  });

  function onSubmit(data: Tenant) {
    console.log('Form submitted with data:', data);
    // Here you would typically send the data to your backend API
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card>
              <CardHeader>
                  <CardTitle>Tenant Details</CardTitle>
              </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., john.doe@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., 082 123 4567"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <div className="flex flex-col gap-2">
                 <Button type="submit" variant="default" className='bg-brand-blue'>
                    {tenant ? 'Save Changes' : 'Create Tenant'}
                </Button>
            </div>
        </div>
      </form>
    </Form>
  );
}

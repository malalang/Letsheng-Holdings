'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Loader2, Package, Upload, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

import { submitBrandingInquiry } from '@/app/branding/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  type Branding,
  type BrandingInquiry,
  brandingInquirySchema,
} from '@repo/supabase';

interface BrandingOrderFormProps {
  product: Branding;
}

type BrandingInquiryFormValues = z.input<typeof brandingInquirySchema>;

export default function BrandingOrderForm({ product }: BrandingOrderFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<BrandingInquiryFormValues, unknown, BrandingInquiry>({
    resolver: zodResolver(brandingInquirySchema),
    defaultValues: {
      customer_name: '',
      email: '',
      company: '',
      quantity: 1,
      message: '',
      product_id: product.id ?? '',
    },
  });

  async function onSubmit(data: BrandingInquiry) {
    setIsLoading(true);
    try {
      const result = await submitBrandingInquiry(data);
      if (result.success) {
        toast.success('Your inquiry has been submitted successfully.');
        router.push('/branding');
      } else {
        toast.error(result.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <input type="hidden" {...form.register('product_id')} />
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-secondary">
              <User className="mr-3" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="customer_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} />
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
                      type="email"
                      placeholder="jane.doe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Company Name (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Acme Corporation"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-secondary">
              <Package className="mr-3" />
              Project Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      placeholder="Minimum 1"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Brief & Design Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder="Please describe your project, including desired colors, branding placement, and any critical deadlines..."
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Artwork & Logo Files</FormLabel>
              <FormControl>
                <Card className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-700 font-semibold mb-2">
                    Drag & drop your vector artwork, or
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    Paste artwork links in the project brief. Recommended formats: PDF, AI, EPS, SVG.
                  </p>
                </Card>
              </FormControl>
              <FormMessage />
            </FormItem>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Project Inquiry
            <ArrowRight className="h-5 w-5 ml-3" />
          </Button>
        </div>
      </form>
    </Form>
  );
}

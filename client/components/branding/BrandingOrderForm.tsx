'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Package, Upload, User } from "lucide-react";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { getBrandingProducts } from "@/app/branding/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import { type Branding } from "@/lib/validations/schemas";

// --- Zod Schema --- //
const projectInquirySchema = z.object({
  customer_name: z.string().min(2, "A name is required."),
  company_name: z.string().optional(),
  email: z.string().email("Invalid email address."),
  product_type: z.string(),
  quantity: z.number().int().positive("Quantity must be at least 1."),
  project_details: z.string().min(10, "Please provide more details."),
});
type InquiryFormData = z.infer<typeof projectInquirySchema>;

// --- Client Component: The Form --- //
export default function BrandingOrderForm({ product }: { product: Branding }) {
  const [products, setProducts] = React.useState<Branding[]>([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const allProducts = await getBrandingProducts();
      setProducts(allProducts);
    }
    fetchProducts();
  }, []);

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(projectInquirySchema),
    defaultValues: {
      customer_name: "",
      company_name: "",
      email: "",
      product_type: product.id ?? "",
      quantity: 1,
      project_details: "",
    },
  });

  const onSubmit: SubmitHandler<InquiryFormData> = (data) => {
    console.log("Project Inquiry Submitted:", data);
    alert(
      "Thank you. Your project inquiry has been successfully submitted. Our team will be in touch shortly.",
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-brand-navy">
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
              name="company_name"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Company Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Acme Corporation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-brand-navy">
              <Package className="mr-3" />
              Project Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="product_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {products.map((p) => (
                        <SelectItem key={p.id} value={p.id ?? ""}>
                          {p.title}
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
                      onChange={(e) => field.onChange(+e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="project_details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Brief & Design Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder="Please describe your project, including desired colors, branding placement, and any critical deadlines..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Artwork & Logo Files</FormLabel>
              <FormControl>
                <Card className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-brand-Blue transition-colors duration-300">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-700 font-semibold mb-2">
                    Drag & drop your vector artwork, or
                  </p>
                  <Button type="button" variant="outline">
                    Browse Files
                  </Button>
                  <p className="text-xs text-gray-500 mt-4">
                    Recommended formats: PDF, AI, EPS, SVG.
                  </p>
                </Card>
              </FormControl>
              <FormMessage />
            </FormItem>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Submit Project Inquiry
            <ArrowRight className="h-5 w-5 ml-3" />
          </Button>
        </div>
      </form>
    </Form>
  );
}

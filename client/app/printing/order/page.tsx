"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, ArrowRight, User, Package } from "lucide-react";

const projectInquirySchema = z.object({
  customer_name: z.string().min(2, "A name is required."),
  company_name: z.string().optional(),
  email: z.string().email("Invalid email address."),
  product_type: z.enum(["t-shirt", "mug"], { error: "Please select a product." }),
  quantity: z.number().int().positive("Quantity must be at least 1."),
  project_details: z.string().min(10, "Please provide more details."),
});

type InquiryFormData = z.infer<typeof projectInquirySchema>;

const NextStepsInfo = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-lg font-semibold">Next Steps</CardTitle>
    </CardHeader>
    <CardContent>
      <ol className="space-y-4 text-sm">
        <li className="flex items-start">
          <strong className="bg-brand-gold text-brand-navy rounded-full h-8 w-8 text-center shrink-0 leading-8 font-bold mr-4">1</strong>
          <div>
            <strong>Consultation & Quote:</strong> We review your submission and provide a tailored quote and timeline.
          </div>
        </li>
        <li className="flex items-start">
          <strong className="bg-brand-gold text-brand-navy rounded-full h-8 w-8 text-center shrink-0 leading-8 font-bold mr-4">2</strong>
          <div>
            <strong>Review & Approval:</strong> You will receive proofs for approval and can request final adjustments before production.
          </div>
        </li>
        <li className="flex items-start">
          <strong className="bg-brand-gold text-brand-navy rounded-full h-8 w-8 text-center shrink-0 leading-8 font-bold mr-4">3</strong>
          <div>
            <strong>Production & Fulfillment:</strong> After approval and payment, we move into production and manage fulfillment end-to-end.
          </div>
        </li>
      </ol>
    </CardContent>
  </Card>
);

export default function PrintOrderPage() {
  const form = useForm<InquiryFormData>({
    resolver: zodResolver(projectInquirySchema),
    defaultValues: {
      customer_name: "",
      company_name: "",
      email: "",
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
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-brand-navy tracking-tight">
          Initiate a Printing Project
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Complete the form below to begin the consultation process for your
          custom branding project. A dedicated project manager will be assigned
          to guide you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
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
                            <Input
                                placeholder="e.g., Acme Corporation"
                                {...field}
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
                                <SelectItem value="t-shirt">
                                Executive Crewneck T-Shirt
                                </SelectItem>
                                <SelectItem value="mug">
                                Ceramic Branding Mug
                                </SelectItem>
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
                            <Card className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-brand-gold transition-colors duration-300">
                                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                                <p className="text-gray-700 font-semibold mb-2">
                                Drag & drop your vector artwork, or
                                </p>
                                <Button type="button" variant="outline">
                                Browse Files
                                </Button>
                                <p className="text-xs text-gray-500 mt-4">
                                Recommended formats: PDF, AI, EPS, SVG.
                                High-resolution raster images (PNG) are also accepted.
                                </p>
                            </Card>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  className="w-full md:w-auto"
                >
                  Submit Project Inquiry
                  <ArrowRight className="h-5 w-5 ml-3" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="lg:sticky lg:top-24 h-fit">
          <NextStepsInfo />
        </div>
      </div>
    </div>
  );
}

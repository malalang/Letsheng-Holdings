"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { type Branding, brandingSchema } from "@/lib/validations/schemas";
import { brandingData } from "../data";

export default function BrandingFormPage({ 
    params 
}: {
    params: { id: string };
}) {
  const brandingItem = brandingData.find((p) => p.id === params.id);

  const form = useForm<Branding>({
    resolver: zodResolver(brandingSchema),
    defaultValues: brandingItem || {
      title: "",
      description: "",
      category: "",
      isFeatured: false,
    },
  });

  function onSubmit(data: Branding) {
    console.log("Form submitted with data:", data);
    // Here you would typically send the data to your backend API
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/dashboard/branding">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Branding
          </Button>
        </Link>
        <CardTitle>
          {brandingItem ? "Edit Branding Item" : "Create a New Branding Item"}
        </CardTitle>
        <CardDescription>
          {brandingItem
            ? "Edit the details of the branding item below."
            : "Fill out the details below to add a new branding item to the portfolio."}
        </CardDescription>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Core Details</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Executive Crewneck T-Shirt"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide a compelling description of the branding item..."
                        rows={5}
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
              <h3 className="text-lg font-semibold">Categorization</h3>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Corporate Apparel"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Featured</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Featured items will be displayed prominently.
                      </p>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => form.reset()}
            >
              Reset Form
            </Button>
            <Button type="submit" variant="default">
              {brandingItem ? "Save Changes" : "Create Branding Item"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

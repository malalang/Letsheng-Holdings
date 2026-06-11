"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type Branding, brandingSchema } from "@repo/supabase";
import { Loader2, PlusCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import type { z } from "zod";
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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { UploadImage } from "@/components/upload-image";
import {
  createBrandingProduct,
  deleteBrandingProduct,
  updateBrandingProduct,
} from "./actions";

interface BrandingFormProps {
  product?: Branding;
}

type BrandingFormValues = z.input<typeof brandingSchema>;

export default function BrandingForm({ product }: BrandingFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const form = useForm<BrandingFormValues, unknown, Branding>({
    resolver: zodResolver(brandingSchema),
    defaultValues: product
      ? {
          ...product,
          specs: product.specs ?? [],
          gallery: product.gallery ?? [],
        }
      : {
          title: "",
          category: "",
          description: "",
          image: "",
          specs: [],
          is_featured: false,
          gallery: [],
        },
  });

  useEffect(() => {
    if (product) {
      form.reset({
        ...product,
        specs: product.specs ?? [],
        gallery: product.gallery ?? [],
      });
    }
  }, [product, form.reset]);

  const {
    fields: galleryFields,
    append: appendGallery,
    remove: removeGallery,
  } = useFieldArray({
    control: form.control,
    name: "gallery",
  });

  const {
    fields: specFields,
    append: appendSpec,
    remove: removeSpec,
  } = useFieldArray({
    control: form.control,
    name: "specs",
  });

  async function onSubmit(data: Branding) {
    setIsLoading(true);
    try {
      if (product?.id) {
        const result = await updateBrandingProduct(product.id, data);
        if (result.success) {
          toast.success("Branding product has been updated successfully.");
          router.push(`/dashboard/branding`);
        } else {
          toast.error(
            result.error || "An unexpected error occurred. Please try again.",
          );
        }
      } else {
        const result = await createBrandingProduct(data);
        if (result.success) {
          toast.success("New branding product has been created.");
          router.push("/dashboard/branding");
        } else {
          toast.error(
            result.error || "An unexpected error occurred. Please try again.",
          );
        }
      }
      router.refresh();
    } catch (error) {
      console.error("Failed to save product:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function onDelete() {
    if (!product || !product.id) return;

    setIsDeleting(true);
    try {
      const result = await deleteBrandingProduct(product.id);
      if (result.success) {
        toast.success("Branding product has been deleted.");
        router.push("/dashboard/branding");
      } else {
        toast.error(
          result.error ||
            "An unexpected error occurred while deleting. Please try again.",
        );
      }
      router.refresh();
    } catch (error) {
      console.error("Failed to delete product:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred while deleting. Please try again.",
      );
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8"
      >
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Tabs defaultValue="general">
            <TabsList>
              <TabsTrigger value="general">General Info</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>Core Product Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Title</FormLabel>
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
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Corporate Apparel"
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
                        <FormLabel>Detailed Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Provide a compelling description of the product..."
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
            </TabsContent>
            <TabsContent value="media">
              <Card>
                <CardHeader>
                  <CardTitle>Product Media</CardTitle>
                  <CardDescription>
                    Manage main image and gallery.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Main Product Image</FormLabel>
                        <FormControl>
                          <UploadImage
                            folder="branding"
                            onUploadSuccess={(url) => {
                              form.setValue("image", url, {
                                shouldValidate: true,
                                shouldDirty: true,
                              });
                            }}
                            initialUrl={field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium">Image Gallery</h3>
                    <div className="space-y-6 mt-4">
                      {galleryFields.map((field, index) => (
                        <Card key={field.id} className="overflow-hidden">
                          <CardHeader className="flex flex-row items-center justify-between py-4">
                            <CardTitle className="text-lg">
                              Gallery Item {index + 1}
                            </CardTitle>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600"
                              onClick={() => removeGallery(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <FormField
                              control={form.control}
                              name={`gallery.${index}.imageUrl`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Image</FormLabel>
                                  <FormControl>
                                    <UploadImage
                                      folder="branding/gallery"
                                      onUploadSuccess={(url) => {
                                        form.setValue(
                                          `gallery.${index}.imageUrl`,
                                          url,
                                          {
                                            shouldValidate: true,
                                            shouldDirty: true,
                                          },
                                        );
                                      }}
                                      initialUrl={field.value}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`gallery.${index}.title`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Title</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`gallery.${index}.description`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Description</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      rows={2}
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
                      ))}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-6"
                      onClick={() =>
                        appendGallery({
                          imageUrl: "",
                          title: "",
                          description: "",
                        })
                      }
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Gallery Item
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specs">
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                  <CardDescription>
                    Manage the technical specifications for this product.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {specFields.map((field, index) => (
                      <Card key={field.id} className="p-4">
                        <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-4">
                          <FormField
                            control={form.control}
                            name={`specs.${index}.label`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Label</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="e.g., Material"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`specs.${index}.value`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Value</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="e.g., 100% Cotton"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeSpec(index)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => appendSpec({ label: "", value: "" })}
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Specification
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Visibility</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="is_featured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Status</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange(value === "true")
                      }
                      defaultValue={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select featured status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Featured</SelectItem>
                        <SelectItem value="false">Not Featured</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <div className="flex flex-col gap-2">
            <Button type="submit" variant="default" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {product ? "Save Changes" : "Create Product"}
            </Button>
            {product && (
              <Button
                variant="destructive"
                type="button"
                onClick={onDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="mr-2 h-4 w-4" />
                )}
                Delete Product
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}

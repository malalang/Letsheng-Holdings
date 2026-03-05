"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle, Trash2, Upload } from "lucide-react";
import Image from "next/image";
import { useFieldArray, useForm } from "react-hook-form";

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
import { type Branding, brandingSchema } from "@/lib/validations/schemas";

interface BrandingFormProps {
  product?: Branding;
}

export default function BrandingForm({ product }: BrandingFormProps) {
  const form = useForm<Branding>({
    resolver: zodResolver(brandingSchema),
    defaultValues: product || {
      title: "",
      category: "",
      description: "",
      image: "",
      specs: [],
      isFeatured: false,
      gallery: [],
    },
  });

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

  function onSubmit(data: Branding) {
    console.log("Form submitted with data:", data);
    // Here you would typically send the data to your backend API
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
                          <div className="w-full">
                            {form.watch("image") ? (
                              <div className="relative aspect-video w-full max-w-lg overflow-hidden rounded-lg border">
                                <Image
                                  src={form.watch("image") || ""}
                                  alt="Main product preview"
                                  fill
                                  className="object-cover"
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="icon"
                                  className="absolute top-2 right-2"
                                  onClick={() =>
                                    form.setValue("image", "", {
                                      shouldValidate: true,
                                      shouldDirty: true,
                                    })
                                  }
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex w-full max-w-lg justify-center rounded-lg border border-dashed px-6 py-10">
                                <div className="text-center">
                                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                  <p className="mt-4 text-sm">
                                    No main image provided.
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Paste an image URL below.
                                  </p>
                                </div>
                              </div>
                            )}
                            <Input
                              placeholder="https://example.com/image.png"
                              {...field}
                              className="mt-4"
                            />
                          </div>
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
                                  <FormLabel>Image URL</FormLabel>
                                  <FormControl>
                                    <div className="w-full">
                                      {form.watch(
                                        `gallery.${index}.imageUrl`,
                                      ) ? (
                                        <div className="relative aspect-video w-full max-w-md mx-auto overflow-hidden rounded-lg border">
                                          <Image
                                            src={
                                              form.watch(
                                                `gallery.${index}.imageUrl`,
                                              ) || ""
                                            }
                                            alt={`Gallery item ${index + 1}`}
                                            fill
                                            className="object-cover"
                                          />
                                        </div>
                                      ) : (
                                        <div className="flex w-full max-w-md mx-auto justify-center rounded-lg border border-dashed px-6 py-10">
                                          <div className="text-center">
                                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                            <p className="mt-4 text-sm">
                                              No image for this item.
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                              Paste an image URL below.
                                            </p>
                                          </div>
                                        </div>
                                      )}
                                      <Input
                                        placeholder="https://example.com/gallery-image.png"
                                        {...field}
                                        className="mt-4"
                                      />
                                    </div>
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
                                    <Textarea rows={2} {...field} />
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
                name="isFeatured"
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
            <Button type="submit" variant="default">
              {product ? "Save Changes" : "Create Product"}
            </Button>
            {product && (
              <Button variant="destructive" type="button">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Product
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}

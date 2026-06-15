"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type Property, propertySchema } from "@repo/supabase/validations";
import { Loader2, PlusCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
import { toast } from "@/components/ui/use-toast";
import { UploadImage } from "@/components/upload-image";
import { createProperty, deleteProperty, updateProperty } from "./actions";

interface PropertyFormProps {
  property?: Property;
}

type PropertyFormValues = Property;

export default function PropertyForm({ property }: PropertyFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const form = useForm<PropertyFormValues, unknown, Property>({
    resolver: zodResolver(propertySchema),
    defaultValues: property
      ? {
          ...property,
          features: property.features || [],
          gallery: property.gallery || [],
          reviews: property.reviews || [],
        }
      : {
          title: "",
          description: "",
          price: 0,
          location: "",
          availability: true,
          imageUrl: "",
          bedrooms: 1,
          bathrooms: 1,
          type: "Apartment",
          features: [],
          is_featured: false,
          gallery: [],
          reviews: [],
        },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "gallery",
  });

  const {
    fields: reviewFields,
    append: appendReview,
    remove: removeReview,
  } = useFieldArray({
    control: form.control,
    name: "reviews",
  });

  async function onSubmit(data: Property) {
    setIsLoading(true);
    try {
      if (property?.id) {
        const result = await updateProperty(property.id, data);
        if (result.ok) {
          toast.success("Property has been updated successfully.");
          router.push(`/dashboard/properties/property/${property.id}`);
        } else {
          toast.error(
            result.error || "An unexpected error occurred. Please try again.",
          );
        }
      } else {
        await createProperty(data);
        toast.success("New property has been created.");
        router.push("/dashboard/properties");
      }
    } catch (error) {
      console.error("Failed to save property:", error);
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
    if (!property || !property.id) return;

    setIsDeleting(true);
    try {
      await deleteProperty(property.id);
      toast.success("Property has been deleted.");
      router.push("/dashboard/properties");
      router.refresh();
    } catch (error) {
      console.error("Failed to delete property:", error);
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
              <TabsTrigger value="details">Details & Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Core Property Details</CardTitle>
                  <CardDescription>
                    Basic information about the property.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Executive Waterfront Residence"
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
                            placeholder="Provide a compelling, sales-ready description of the property..."
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
                  <CardTitle>Lease & Location</CardTitle>
                  <CardDescription>
                    Rent is due by the 7th of each month. Leases are subject to
                    termination after 3 months of non-payment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Rate (ZAR)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 22000"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value, 10) || 0)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Sandton, Johannesburg"
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
                  <CardTitle>Property Media</CardTitle>
                  <CardDescription>
                    Manage main image and gallery.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Main Image Section */}
                  <FormField
                    control={form.control}
                    name="image_url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Main Property Image</FormLabel>
                        <FormControl>
                          <UploadImage
                            folder="properties"
                            onUploadSuccess={(url) => {
                              form.setValue("image_url", url, {
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

                  {/* Image Gallery Section */}
                  <div>
                    <h3 className="text-lg font-medium">Image Gallery</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage the collection of images for the property.
                    </p>
                    <div className="space-y-6 mt-4">
                      {fields.map((field, index) => (
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
                              onClick={() => remove(index)}
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
                                      folder="properties/gallery"
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
                        append({ imageUrl: "", title: "", description: "" })
                      }
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Gallery Item
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="details">
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Property Specifications</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="bedrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            value={field.value ?? 0}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value, 10))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bathrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            value={field.value ?? 0}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value, 10))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ?? "Apartment"}
                          defaultValue={field.value ?? "Apartment"}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a property type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Apartment">Apartment</SelectItem>
                            <SelectItem value="House">House</SelectItem>
                            <SelectItem value="Villa">Villa</SelectItem>
                            <SelectItem value="Loft">Loft</SelectItem>
                            <SelectItem value="Cottage">Cottage</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Property Features</CardTitle>
                  <CardDescription>Enter one feature per line.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="features"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder={"e.g., 24/7 Security\nConcierge\nPool"}
                            rows={5}
                            {...field}
                            onChange={(e) =>
                              field.onChange(e.target.value.split("\n"))
                            }
                            value={
                              Array.isArray(field.value)
                                ? field.value.join("\n")
                                : ""
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Property Reviews</CardTitle>
                  <CardDescription>
                    Manage customer reviews for this property.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="space-y-6 mt-4">
                      {reviewFields.map((field, index) => (
                        <Card key={field.id}>
                          <CardHeader className="flex flex-row items-center justify-between py-4">
                            <CardTitle className="text-lg">
                              Review {index + 1}
                            </CardTitle>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600"
                              onClick={() => removeReview(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <FormField
                              control={form.control}
                              name={`reviews.${index}.author`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Author</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`reviews.${index}.rating`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Rating</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      {...field}
                                      onChange={(e) =>
                                        field.onChange(
                                          parseInt(e.target.value, 10) || 0,
                                        )
                                      }
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`reviews.${index}.comment`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Comment</FormLabel>
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
                        appendReview({ author: "", rating: 5, comment: "" })
                      }
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Status & Visibility</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability</FormLabel>
                    <Select
                      onValueChange={(value) =>
                        field.onChange(value === "true")
                      }
                      defaultValue={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Available</SelectItem>
                        <SelectItem value="false">
                          Occupied / Unavailable
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              {property ? "Save Changes" : "Create Property"}
            </Button>
            {property && (
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
                Delete Property
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}

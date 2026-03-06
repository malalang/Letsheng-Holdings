import { z } from "zod";

// Schema for a single gallery item
export const galleryItemSchema = z.object({
  imageUrl: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .min(1, "Image URL is required."),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
});

// Schema for a single review
export const reviewSchema = z.object({
  id: z.string(),
  author: z.string().min(1, "Author is required"),
  rating: z.number().min(1).max(5),
  comment: z.string().min(1, "Comment is required"),
});

// Schema for a property
export const propertySchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  price: z.number().positive("Price must be a positive number"),
  location: z.string().min(3, "Location is required"),
  availability: z.boolean(),
  image_url: z.string().url("Must be a valid URL").or(z.literal("")).optional(),
  bedrooms: z.number().int().min(1, "Must have at least one bedroom"),
  bathrooms: z.number().int().min(1, "Must have at least one bathroom"),
  type: z.string().min(1, "Type is required"),
  features: z.array(z.string()).optional(),
  is_featured: z.boolean(),
  gallery: z.array(galleryItemSchema).optional(),
  reviews: z.array(reviewSchema).optional(),
  virtual_tour_url: z.string().url().optional().nullable(),
});

export type Property = z.infer<typeof propertySchema>;

// Schema for a branding product specification
export const specItemSchema = z.object({
  label: z.string().min(1, "Label is required"),
  value: z.string().min(1, "Value is required"),
});

// Schema for a branding product. Note: `image` is used for the main image URL.
export const brandingSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().min(3, "Category is required"),
  description: z.string().optional(),
  image: z.string().url("Must be a valid URL").optional().nullable(),
  specs: z.array(specItemSchema).optional().nullable(),
  is_featured: z.boolean(),
  gallery: z.array(galleryItemSchema).optional().nullable(),
  reviews: z.array(reviewSchema).optional().nullable(),
});

export type Branding = z.infer<typeof brandingSchema>;

// Schema for a tenant
export const tenantSchema = z.object({
  name: z.string().min(1, "Name is required"),
  propertyId: z.string().min(1, "Property is required"),
  status: z.enum(["Active", "Inactive", "Pending"]),
  leaseEndDate: z.string().min(1, "Lease end date is required"),
});

export type Tenant = z.infer<typeof tenantSchema>;

// Schema for a payment
export const paymentSchema = z.object({
  amount: z.coerce.number().positive("Amount must be a positive number"),
  date: z.date(),
  status: z.enum(["Paid", "Pending", "Late"]),
});

export type Payment = z.infer<typeof paymentSchema>;

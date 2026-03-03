import { z } from "zod";

export const propertySchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3),
  description: z.string().nullable().optional(),
  price: z.number().positive(),
  location: z.string().nullable().optional(),
  availability: z.boolean().optional(),
  image_urls: z.array(z.string().url()).nullable().optional(),
  created_at: z.string().optional(),
});

export const printingOrderSchema = z.object({
  id: z.string().optional(),
  customer_name: z.string().min(1),
  email: z.string().email(),
  product_type: z.enum(["t-shirt", "mug", "banner", "poster"]),
  quantity: z.number().int().positive(),
  design_url: z.string().url().nullable().optional(),
  status: z.enum(["pending", "processing", "completed"]).default("pending"),
  total_price: z.number().nonnegative(),
  created_at: z.string().optional(),
});

export const brandingSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(3),
    description: z.string().nullable().optional(),
    category: z.string(),
    image: z.string().url().optional(),
    isFeatured: z.boolean(),
    specs: z.array(z.object({
        label: z.string(),
        value: z.string(),
    })).optional(),
    gallery: z.array(z.object({
        title: z.string(),
        description: z.string(),
        imageUrl: z.string().url(),
    })).optional(),
    reviews: z.array(z.object({
        author: z.string(),
        rating: z.number(),
        comment: z.string(),
    })).optional(),
});

export type Property = z.infer<typeof propertySchema>;
export type PrintingOrder = z.infer<typeof printingOrderSchema>;
export type Branding = z.infer<typeof brandingSchema>;

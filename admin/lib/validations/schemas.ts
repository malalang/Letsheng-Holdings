import { z } from "zod";

export const propertySchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(3),
  description: z.string().nullable().optional(),
  price: z.number().positive(),
  location: z.string().nullable().optional(),
  availability: z.boolean().optional(),
  image_urls: z.array(z.string().url()).nullable().optional(),
  created_at: z.string().optional(),
});

export const printingOrderSchema = z.object({
  id: z.string().uuid().optional(),
  customer_name: z.string().min(1),
  email: z.string().email(),
  product_type: z.enum(["t-shirt", "mug", "banner", "poster"]),
  quantity: z.number().int().positive(),
  design_url: z.string().url().nullable().optional(),
  status: z.enum(["pending", "processing", "completed"]).default("pending"),
  total_price: z.number().nonnegative(),
  created_at: z.string().optional(),
});

export type Property = z.infer<typeof propertySchema>;
export type PrintingOrder = z.infer<typeof printingOrderSchema>;

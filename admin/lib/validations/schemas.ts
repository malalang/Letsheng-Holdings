import { z } from 'zod';

// Schema for a review
const reviewSchema = z.object({
  author: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string(),
});

// Schema for a gallery image
const galleryImageSchema = z.object({
  imageUrl: z.string().url(),
  title: z.string(),
  description: z.string(),
});

// Main schema for a property
export const propertySchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required.'),
  description: z.string().optional().nullable(),
  price: z.number().positive('Price must be a positive number.'),
  location: z.string().optional().nullable(),
  availability: z.boolean().optional(),
  image_url: z.string().url('Invalid URL format.'),
  bedrooms: z.number().int().positive(),
  bathrooms: z.number().int().positive(),
  type: z.string(),
  features: z.array(z.string()).optional(),
  isFeatured: z.boolean().optional(),
  gallery: z.array(galleryImageSchema).optional().nullable(),
  reviews: z.array(reviewSchema).optional().nullable(),
  virtualTourUrl: z.string().url().nullable().optional(),
});

// Infer the TypeScript type from the schema
export type Property = z.infer<typeof propertySchema>;

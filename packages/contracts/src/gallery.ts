import { z } from "zod";

export const galleryItemSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  imageUrl: z.string().url(),
  description: z.string().optional(),
  createdAt: z.string().optional(),
});

export type GalleryItemType = z.infer<typeof galleryItemSchema>;

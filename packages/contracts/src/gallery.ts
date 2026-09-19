import { z } from "zod";
import { imageSourceSchema, optionalNullableStringSchema } from "./utils";

export const galleryItemSchema = z.object({
  imageUrl: imageSourceSchema("Please enter a valid image URL or app path."),
  title: z.string().trim().min(1, "Title is required"),
  description: optionalNullableStringSchema(z.string().trim()),
});

export type GalleryItemType = z.infer<typeof galleryItemSchema>;

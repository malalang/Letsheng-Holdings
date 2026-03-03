import { sampleProperties } from "../properties/data";

export const brandingData = sampleProperties.map((p) => ({
  id: p.id,
  title: p.title,
  category: p.type,
  description: p.description,
  image: p.image_url,
  specs: [
    { label: "Bedrooms", value: p.bedrooms.toString() },
    { label: "Bathrooms", value: p.bathrooms.toString() },
    { label: "Type", value: p.type },
  ],
  isFeatured: p.isFeatured,
  gallery: p.gallery,
  reviews: p.reviews,
}));

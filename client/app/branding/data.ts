import {
  Coffee,
  File,
  type LucideIcon,
  Megaphone,
  Shirt,
  Wind,
} from "lucide-react";

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  icon?: LucideIcon;
  image: string;
  specs: { label: string; value: string }[];
  isFeatured: boolean;
  gallery: { title: string; description: string; imageUrl: string }[];
  reviews: { author: string; rating: number; comment: string }[];
}

export interface ComingSoonProduct {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

export const products: Product[] = [
  {
    id: "t-shirt",
    title: "Executive Crewneck T-Shirt",
    category: "Corporate Apparel",
    description:
      "The cornerstone of a professional wardrobe. Woven from ultra-soft, 180gsm combed cotton for superior comfort and a premium feel. Features a classic fit with a reinforced collar and shoulder-to-shoulder taping for lasting durability. Ideal for team uniforms and corporate events.",
    icon: Shirt,
    image: "/T-shirt.png",
    specs: [
      { label: "Material", value: "100% Combed Cotton" },
      { label: "Weight", value: "180gsm" },
      { label: "Fit", value: "Unisex Classic" },
    ],
    isFeatured: true,
    gallery: [
      {
        title: "Front View",
        description: "Clean and professional look",
        imageUrl: "/T-shirt.png",
      },
      {
        title: "Material Detail",
        description: "Close-up of the premium fabric",
        imageUrl:
          "https://images.unsplash.com/photo-1581655353564-df123a1642b1?q=80&w=2574&auto=format&fit=crop",
      },
      {
        title: "Team Set",
        description: "Uniforms for a cohesive brand image",
        imageUrl:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop",
      },
    ],
    reviews: [
      {
        author: "Marketing Manager, ABC Corp",
        rating: 5,
        comment:
          "Excellent quality and our logo looks fantastic. The team loves them.",
      },
      {
        author: "Event Coordinator",
        rating: 4,
        comment: "Great shirts for our annual conference. Very comfortable.",
      },
    ],
  },
  {
    id: "mug",
    title: "Ceramic Branding Mug",
    category: "Promotional Merchandise",
    description:
      "A powerful statement piece for any desk. This 11oz ceramic mug is finished with a high-gloss, scratch-resistant coating, ensuring your branding remains vibrant and pristine. Dishwasher and microwave safe. Perfect for client gifts and internal brand reinforcement.",
    icon: Coffee,
    image: "/Mug.png",
    specs: [
      { label: "Capacity", value: "11oz (325ml)" },
      { label: "Material", value: "AAA Grade Ceramic" },
      { label: "Printing", value: "Full-Color Dye-Sublimation" },
    ],
    isFeatured: true,
    gallery: [
      {
        title: "Mug in Hand",
        description: "Perfect size and comfortable grip",
        imageUrl: "/Mug.png",
      },
      {
        title: "Glossy Finish",
        description: "Detail of the scratch-resistant coating",
        imageUrl:
          "https://images.unsplash.com/photo-1617290139191-285679a3194a?q=80&w=2574&auto=format&fit=crop",
      },
      {
        title: "Office Ready",
        description: "A great addition to any workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2670&auto=format&fit=crop",
      },
    ],
    reviews: [
      {
        author: "Office Manager",
        rating: 5,
        comment:
          "The print quality is outstanding. Our new favorite office mugs.",
      },
      {
        author: "Client Relations",
        rating: 5,
        comment:
          "We sent these as client gifts and got great feedback. Very professional.",
      },
    ],
  },
  {
    id: "posters",
    title: "High-Resolution Posters",
    category: "Promotional Merchandise",
    description:
      "Make a statement with vibrant, high-resolution posters. Perfect for events, promotions, and interior branding. Available in a variety of sizes and finishes.",
    icon: File,
    image:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2574&auto=format&fit=crop",
    specs: [
      { label: "Paper", value: "200gsm Satin Finish" },
      { label: "Sizes", value: "A3, A2, A1" },
      { label: "Printing", value: "Full-Color" },
    ],
    isFeatured: false,
    gallery: [],
    reviews: [],
  },
  {
    id: "banners",
    title: "Large-Format Banners",
    category: "Promotional Merchandise",
    description:
      "Command attention with durable, large-format banners. Ideal for outdoor advertising, trade shows, and events. Weather-resistant and built to last.",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1542182312-799434b79339?q=80&w=2670&auto=format&fit=crop",
    specs: [
      { label: "Material", value: "Heavy-Duty PVC" },
      { label: "Sizes", value: "Custom" },
      { label: "Features", value: "Weather-Resistant, Eyelets" },
    ],
    isFeatured: false,
    gallery: [],
    reviews: [],
  },
];

export const comingSoonProducts: ComingSoonProduct[] = [
  {
    title: "Large-Format Banners & Posters",
    category: "Coming Q3 2024",
    description:
      "Command attention at trade shows, events, and in-store with our upcoming large-format printing services. From vibrant, weather-resistant PVC banners to high-resolution posters, we will provide the scale and quality your message deserves.",
    icon: Megaphone,
  },
];

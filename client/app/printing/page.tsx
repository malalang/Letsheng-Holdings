import {
  ArrowRight,
  Coffee,
  type LucideIcon,
  Megaphone,
  Shirt,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Product {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  image: string;
  specs: { label: string; value: string }[];
}

interface ComingSoonProduct {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

const products: Product[] = [
  {
    title: "Executive Crewneck T-Shirt",
    category: "Corporate Apparel",
    description:
      "The cornerstone of a professional wardrobe. Woven from ultra-soft, 180gsm combed cotton for superior comfort and a premium feel. Features a classic fit with a reinforced collar and shoulder-to-shoulder taping for lasting durability. Ideal for team uniforms and corporate events.",
    icon: Shirt,
    image: "/placeholders/stock-printing-1.jpg",
    specs: [
      { label: "Material", value: "100% Combed Cotton" },
      { label: "Weight", value: "180gsm" },
      { label: "Fit", value: "Unisex Classic" },
    ],
  },
  {
    title: "Ceramic Branding Mug",
    category: "Promotional Merchandise",
    description:
      "A powerful statement piece for any desk. This 11oz ceramic mug is finished with a high-gloss, scratch-resistant coating, ensuring your branding remains vibrant and pristine. Dishwasher and microwave safe. Perfect for client gifts and internal brand reinforcement.",
    icon: Coffee,
    image: "/placeholders/stock-printing-2.jpg",
    specs: [
      { label: "Capacity", value: "11oz (325ml)" },
      { label: "Material", value: "AAA Grade Ceramic" },
      { label: "Printing", value: "Full-Color Dye-Sublimation" },
    ],
  },
];

const comingSoonProducts: ComingSoonProduct[] = [
  {
    title: "Large-Format Banners & Posters",
    category: "Coming Q3 2024",
    description:
      "Command attention at trade shows, events, and in-store with our upcoming large-format printing services. From vibrant, weather-resistant PVC banners to high-resolution posters, we will provide the scale and quality your message deserves.",
    icon: Megaphone,
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-black/10 overflow-hidden group flex flex-col">
    <div className="relative h-64 bg-gray-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <Badge className="bg-brand-gold text-brand-navy font-semibold">
          {product.category}
        </Badge>
        <h3 className="text-2xl font-bold text-white mt-2 drop-shadow-lg">
          {product.title}
        </h3>
      </div>
    </div>
    <div className="p-6 flex-grow">
      <p className="text-gray-700 leading-relaxed">{product.description}</p>
      <div className="mt-4 space-y-2">
        {product.specs.map((spec: { label: string; value: string }) => (
          <div key={spec.label} className="flex justify-between text-sm">
            <span className="font-semibold text-gray-600">{spec.label}:</span>
            <span className="text-gray-800">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-gray-50/50 px-6 py-4 mt-auto">
      <Link href="/printing/order">
        <Button className="w-full bg-brand-navy text-white hover:bg-opacity-90 font-bold transition-transform transform hover:scale-105">
          Initiate a Project Inquiry
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    </div>
  </div>
);

const ComingSoonCard = ({ product }: { product: ComingSoonProduct }) => (
  <div className="bg-brand-navy/80 backdrop-blur-lg rounded-2xl shadow-xl border-2 border-brand-gold/50 p-8 flex flex-col items-center text-center text-white h-full">
    <Badge className="bg-brand-gold/20 text-brand-gold font-bold border border-brand-gold/50">
      {product.category}
    </Badge>
    <product.icon className="h-16 w-16 text-brand-gold my-6" />
    <h3 className="text-2xl font-bold">{product.title}</h3>
    <p className="mt-4 text-gray-300 leading-relaxed flex-grow">
      {product.description}
    </p>
    <Button
      disabled
      variant="outline"
      className="mt-6 w-full border-gray-500 text-gray-400 cursor-not-allowed"
    >
      Services Launching Soon
    </Button>
  </div>
);

export default function PrintingPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-brand-navy tracking-tight">
          Letsheng Print Division
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Precision, quality, and brand consistency. We are your strategic
          partner for premium corporate branding and high-impact promotional
          merchandise.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-brand-navy mb-8">
          Product & Service Showcase
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
          {comingSoonProducts.map((p) => (
            <ComingSoonCard key={p.title} product={p} />
          ))}
        </div>
      </div>

      <div className="bg-brand-navy text-white rounded-2xl p-12 shadow-2xl">
        <h2 className="text-center text-4xl font-bold mb-10">
          A Partnership Rooted in Quality
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border-r border-brand-gold/20 md:pr-8">
            <h4 className="text-2xl font-bold text-brand-gold">
              Uncompromising Color Accuracy
            </h4>
            <p className="text-gray-300 mt-2">
              We employ advanced color calibration and Pantone matching systems
              to ensure your brand's visual identity is reproduced with flawless
              precision, every single time.
            </p>
          </div>
          <div className="md:border-r border-brand-gold/20 md:pr-8">
            <h4 className="text-2xl font-bold text-brand-gold">
              Investment-Grade Materials
            </h4>
            <p className="text-gray-300 mt-2">
              Our curated selection of garments, substrates, and products
              guarantees a high-end finish and lasting durability, reflecting
              the quality and prestige of your brand.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-brand-gold">
              Dedicated Project Management
            </h4>
            <p className="text-gray-300 mt-2">
              From initial consultation to final delivery, you receive a
              dedicated project manager to ensure a seamless, transparent, and
              successful outcome for your branding initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

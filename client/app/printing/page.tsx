import {
  ArrowRight,
  Coffee,
  type LucideIcon,
  Megaphone,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

// Product data remains the same...
const products: Product[] = [
  {
    title: "Executive Crewneck T-Shirt",
    category: "Corporate Apparel",
    description:
      "The cornerstone of a professional wardrobe. Woven from ultra-soft, 180gsm combed cotton for superior comfort and a premium feel. Features a classic fit with a reinforced collar and shoulder-to-shoulder taping for lasting durability. Ideal for team uniforms and corporate events.",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
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
  <Card className="rounded-2xl shadow-lg overflow-hidden group flex flex-col">
    <div className="relative h-64 bg-gray-300">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <CardHeader className="absolute bottom-0 left-0 p-6">
        <Badge variant="default" className="font-semibold">
          {product.category}
        </Badge>
        <CardTitle className="text-2xl font-bold text-white mt-2 drop-shadow-lg">
          {product.title}
        </CardTitle>
      </CardHeader>
    </div>
    <CardContent className="p-6 flex-grow">
      <p className="text-gray-700 leading-relaxed">{product.description}</p>
      <div className="mt-4 space-y-2">
        {product.specs.map((spec) => (
          <div key={spec.label} className="flex justify-between text-sm">
            <span className="font-semibold text-gray-600">{spec.label}:</span>
            <span className="text-gray-800">{spec.value}</span>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter className="bg-gray-50/50 px-6 py-4 mt-auto">
      <Link href="/printing/order" className="w-full">
        <Button variant="default" className="w-full font-bold">
          Initiate a Project Inquiry
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

const ComingSoonCard = ({ product }: { product: ComingSoonProduct }) => (
  <Card className="bg-brand-navy/80 backdrop-blur-lg rounded-2xl shadow-xl border-2 border-brand-Blue/50 p-8 flex flex-col items-center text-center text-white h-full">
    <CardHeader className="items-center">
      <Badge variant="secondary" className="font-bold">
        {product.category}
      </Badge>
    </CardHeader>
    <CardContent className="flex flex-col items-center flex-grow">
      <product.icon className="h-16 w-16 text-brand-Blue my-6" />
      <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
      <p className="mt-4 text-gray-600 leading-relaxed">
        {product.description}
      </p>
    </CardContent>
    <CardFooter className="w-full">
      <Button
        disabled
        variant="outline"
        className="mt-6 w-full cursor-not-allowed"
      >
        Services Launching Soon
      </Button>
    </CardFooter>
  </Card>
);

// ... Gallery images remain the same

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

      {/* ... Image gallery section remains the same */}

      <Card className="bg-brand-navy text-white rounded-2xl p-12 shadow-2xl">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-4xl font-bold">
            A Partnership Rooted in Quality
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3  md:gap-8 text-center">
          <div className="border-r border-brand-Blue/20 md:pr-8">
            <h4 className="text-2xl font-bold text-white">
              Uncompromising Color Accuracy
            </h4>
            <p className="text-gray-600 mt-2">
              We employ advanced color calibration and Pantone matching systems
              to ensure your brand's visual identity is reproduced with flawless
              precision, every single time.
            </p>
          </div>
          <div className="md:border-r border-brand-Blue/20 md:pr-8">
            <h4 className="text-2xl font-bold text-white">
              Investment-Grade Materials
            </h4>
            <p className="text-gray-600 mt-2">
              Our curated selection of garments, substrates, and products
              guarantees a high-end finish and lasting durability, reflecting
              the quality and prestige of your brand.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white">
              Dedicated Project Management
            </h4>
            <p className="text-gray-600 mt-2">
              From initial consultation to final delivery, you receive a
              dedicated project manager to ensure a seamless, transparent, and
              successful outcome for your branding initiatives.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

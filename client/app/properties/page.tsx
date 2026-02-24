
import type { Property } from "@/lib/types/database.types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, Landmark, AlertTriangle } from "lucide-react";


const sampleProperties: Omit<Property, "created_at" | "image_urls" | "owner_id">[] = [
  {
    id: "1",
    title: "Executive Waterfront Residence, Harbour View",
    description: "Experience unparalleled luxury in our executive waterfront suite. Offering breathtaking panoramic views of the marina, this residence features state-of-the-art amenities and bespoke furnishings. Ideal for the discerning professional.",
    price: 35000,
    location: "V&A Waterfront, Cape Town",
    availability: true,
  },
  {
    id: "2",
    title: "Metropolitan Loft, Financial District",
    description: "A chic, fully-serviced loft situated in the heart of the financial district. With soaring ceilings and industrial-luxe design, this space is crafted for productivity and style. Includes access to our resident's lounge.",
    price: 22000,
    location: "Sandton, Johannesburg",
    availability: false,
  },
  {
      id: "3",
      title: "Tranquil Garden Cottage",
      description: "A serene and private garden cottage nestled in a quiet suburban neighbourhood. Perfect for those seeking peace and quiet with easy access to city amenities. Features a private garden and modern finishes.",
      price: 12500,
      location: "Constantia, Cape Town",
      availability: true,
  }
];

const TermsOfTenancy = () => (
    <div className="bg-brand-navy/5 border-2 border-brand-gold/50 rounded-lg p-6 my-12 backdrop-blur-sm shadow-lg">
        <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-brand-gold mr-4" />
            <h2 className="text-2xl font-bold text-brand-navy">Terms of Tenancy Agreement</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
                <h4 className="font-semibold text-lg text-brand-navy">Monthly Payment Obligation</h4>
                <p className="mt-1">
                    All lease payments are due on or before the <strong className="text-brand-navy">7th day of each calendar month.</strong> This policy is strictly enforced to ensure operational consistency across our portfolio.
                </p>
            </div>
            <div>
                <h4 className="font-semibold text-lg text-brand-navy">Lease Lapse & Renewal Policy</h4>
                <p className="mt-1">
                    Lease agreements that lapse beyond a continuous <strong className="text-brand-navy">three-month period</strong> without renewal or payment will be subject to termination and repossession protocols as per the signed contract.
                </p>
            </div>
        </div>
    </div>
);


export default function PropertiesPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy">Letsheng Estates</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Discover curated living spaces designed for comfort, security, and discerning taste. Our portfolio combines premium locations with attentive management.
        </p>
      </div>

      <TermsOfTenancy />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProperties.map((p) => (
          <div key={p.id} className="bg-white/60 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 bg-gray-200">
                 {/* Placeholder for an image gallery */}
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-brand-navy leading-tight">{p.title}</h3>
                    <Badge variant={p.availability ? "default" : "destructive"} className={`shrink-0 ${p.availability ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                        {p.availability ? "Available" : "Occupied"}
                    </Badge>
                </div>
                <p className="text-sm text-gray-500 mt-1">{p.location}</p>
                <p className="mt-4 text-gray-700 leading-relaxed">{p.description}</p>
                <div className="mt-6 flex items-center text-2xl font-bold text-brand-navy">
                    <CircleDollarSign className="h-6 w-6 mr-2 text-brand-gold" />
                    R{p.price.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500 ml-2">/ month</span>
                </div>
            </div>
             <div className="bg-gray-50/50 px-6 py-4 flex items-center justify-between">
                <Button variant="outline" className="border-2 border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
                  Request a Viewing
                </Button>
                 <Button variant="default" className="bg-brand-navy text-white hover:bg-opacity-90 transition-opacity">
                  Apply to Lease
                </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

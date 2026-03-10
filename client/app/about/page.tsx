import { Building, Printer, Recycle, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ==============================================
// Page-Specific Components
// ==============================================

const Pillar = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-primary/10 text-secondary rounded-full mx-auto flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-secondary">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{children}</p>
  </div>
);

const LeadershipCard = ({
  imageUrl,
  name,
  title,
  bio,
}: {
  imageUrl: string;
  name: string;
  title: string;
  bio: string;
}) => (
  <Card className="text-center">
    <div className="relative h-48 w-48 rounded-full mx-auto mt-6 overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={name} fill className="object-cover" />
    </div>
    <CardHeader>
      <CardTitle className="text-secondary">{name}</CardTitle>
      <p className="text-primary font-semibold">{title}</p>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 text-sm">{bio}</p>
    </CardContent>
  </Card>
);

const TimelineEvent = ({
  year,
  title,
  description,
  last = false,
}: {
  year: string;
  title: string;
  description: string;
  last?: boolean;
}) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-6">
      <div className="w-4 h-4 bg-primary rounded-full" />
      {!last && <div className="w-px h-full bg-primary/30" />}
    </div>
    <div className="pb-12">
      <p className="font-bold text-primary">{year}</p>
      <h4 className="font-semibold text-lg text-secondary">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <div className="border-b border-gray-200 py-4">
    <h5 className="font-semibold text-lg text-secondary">{question}</h5>
    <p className="text-gray-600 mt-2">{answer}</p>
  </div>
);

// ==============================================
// Main Page Component
// ==============================================

export default function AboutPage() {
  return (
    <div className="animate-fade-in space-y-24">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-secondary tracking-tight">
          Our Philosophy: The Letsheng Standard
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Built on unwavering discipline and operational excellence, we deliver
          unparalleled reliability and value across our synergistic divisions.
        </p>
      </header>

      <main className="space-y-24">
        <section>
          <h2 className="text-4xl font-extrabold text-secondary text-center mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <LeadershipCard
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
              name="Mr Kgotso Sondo"
              title="CEO & Founder"
              bio="Visionary leader with 20+ years in real estate development and strategic investment."
            />
            <LeadershipCard
              imageUrl="https://images.unsplash.com/photo-1581093458791-9a7ca5a61cdb?q=80&w=2070&auto=format&fit=crop"
              name="Jane Smith"
              title="Head of Estates"
              bio="Expert in property management, ensuring all our residential spaces meet the highest standards of quality."
            />
            <LeadershipCard
              imageUrl="https://images.unsplash.com/photo-1554774853-7f2182d3a3c9?q=80&w=1974&auto=format&fit=crop"
              name="Sam Wilson"
              title="Director of Print Services"
              bio="Master of print production, committed to delivering branding materials with uncompromising accuracy."
            />
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-extrabold text-secondary text-center mb-12">
            Timeline of Excellence
          </h2>
          <div className="max-w-2xl mx-auto">
            <TimelineEvent
              year="2015"
              title="Founding of Letsheng Holdings"
              description="Established with a vision to create integrated value in property and business services."
            />
            <TimelineEvent
              year="2018"
              title="Acquisition of First Major Residential Estate"
              description="Expanded into premium property management with the acquisition of the Soshanguve South complex."
            />
            <TimelineEvent
              year="2020"
              title="Launch of High-Fidelity Printing Division"
              description="Diversified our service portfolio by launching Letsheng Print, offering state-of-the-art corporate branding solutions."
            />
            <TimelineEvent
              year="2023"
              title="Reached 500+ Residential Units Under Management"
              description="A major milestone reflecting our commitment to quality and tenant satisfaction."
              last
            />
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-extrabold text-secondary text-center mb-12">
            Two Divisions, One Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center">
                <Building className="h-8 w-8 text-secondary" />
                <CardTitle className="ml-4 text-2xl font-semibold text-secondary">
                  Letsheng Estates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our Estates division is dedicated to curating and managing
                  premium residential properties for peace of mind and long-term
                  value.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center">
                <Printer className="h-8 w-8 text-secondary" />
                <CardTitle className="ml-4 text-2xl font-semibold text-secondary">
                  Letsheng Print
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our Printing division provides high-fidelity branding and
                  marketing materials, combining technology and craftsmanship.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gray-50/80 rounded-2xl py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-extrabold text-secondary mb-6">
              Synergy in Action: A Case Study
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              A leading construction firm partnered with us to lease a block of
              residential units for their executive team. Impressed by our
              professionalism, they entrusted Letsheng Print with a complete
              re-brand of their corporate apparel and on-site banners, ensuring
              brand consistency and quality across the board.
            </p>
            <Link href="/contact">
              <Button variant="default">Explore Our Integrated Services</Button>
            </Link>
          </div>
        </section>

        <section>
          <h3 className="text-4xl font-extrabold text-secondary text-center mb-12">
            Sustainability and Community Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <Pillar
              icon={<Recycle className="h-8 w-8" />}
              title="Eco-Friendly Materials"
            >
              We prioritize the use of recycled and sustainable materials in our
              print production, minimizing our environmental footprint.
            </Pillar>
            <Pillar
              icon={<Building className="h-8 w-8" />}
              title="Energy-Efficient Properties"
            >
              Our estates are managed with a focus on energy efficiency, from
              smart lighting to water-saving fixtures.
            </Pillar>
            <Pillar
              icon={<Users className="h-8 w-8" />}
              title="Local Partnerships"
            >
              We actively partner with local suppliers and contractors,
              contributing to the economic growth of our communities.
            </Pillar>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-extrabold text-secondary text-center mb-12">
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/60 p-6">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <p className="font-bold text-secondary">
                  Exceptional Management
                </p>
              </div>
              <p className="text-gray-600 italic">
                \"The management team\'s unwavering discipline is evident in how
                well the property is maintained. It’s a pleasure to live here.\"
              </p>
              <p className="text-right mt-4 font-semibold">
                - Residential Tenant
              </p>
            </Card>
            <Card className="bg-white/60 p-6">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <p className="font-bold text-secondary">
                  Uncompromising Color Accuracy
                </p>
              </div>
              <p className="text-gray-600 italic">
                \"We rely on Letsheng for all our corporate branding. Their
                color accuracy is second to none, which is critical for our
                brand integrity.\"
              </p>
              <p className="text-right mt-4 font-semibold">
                - Corporate Client
              </p>
            </Card>
          </div>
        </section>

        <section className="bg-gray-50/80 rounded-2xl py-16">
          <h2 className="text-4xl font-extrabold text-secondary text-center mb-12">
            The Letsheng Standard Explained (FAQ)
          </h2>
          <div className="max-w-4xl mx-auto">
            <FaqItem
              question="What are the standard lease terms for your properties?"
              answer="Our standard lease is for 12 months, but we offer flexible terms based on client needs. All terms are clearly outlined in our transparent tenancy agreements."
            />
            <FaqItem
              question="What is the average timeline for a corporate apparel order?"
              answer="Timelines vary by order size, but a standard order is typically completed within 7-10 business days after digital proof approval."
            />
            <FaqItem
              question="How does the 'Digital Proof' process work?"
              answer="Before any production begins, we provide a detailed digital mock-up of your design for your approval. This ensures complete satisfaction with the final product."
            />
          </div>
        </section>

        <section>
          <Card className="bg-secondary text-white rounded-2xl p-6 md:p-12 shadow-2xl text-center">
            <CardTitle className="text-4xl font-bold">
              Partner with Excellence
            </CardTitle>
            <CardContent className="max-w-2xl mx-auto pt-6">
              <p className="text-gray-300 text-lg">
                For enterprise-level print programs, property management
                inquiries, or strategic partnerships, connect with our Business
                Development office.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="mt-8 font-bold text-white border-white hover:bg-white hover:text-secondary transition-transform transform hover:scale-105"
                >
                  Contact Business Services
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

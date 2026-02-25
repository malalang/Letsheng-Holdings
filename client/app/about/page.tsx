import { Briefcase, Printer, Building } from "lucide-react";
import type React from "react";

const FeatureCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white/10 backdrop-blur-lg border border-brand-gold/20 rounded-xl p-6 shadow-lg">
    <div className="flex items-center text-brand-gold mb-4">
      {icon}
      <h3 className="text-xl font-bold ml-3">{title}</h3>
    </div>
    <p className="text-gray-300">{children}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="animate-fade-in space-y-12">
      <header
        className="bg-brand-navy text-white p-12 rounded-2xl shadow-2xl"
        style={{
          backgroundImage: `radial-gradient(circle at top right, #FFD70020, transparent), radial-gradient(circle at bottom left, #002147, #001a38)`,
        }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight">
          Our Philosophy: The Letsheng Standard
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-4xl">
          Letsheng Holdings is built on a foundation of unwavering discipline
          and operational excellence. We operate two synergistic divisions,
          Estates and Printing, united by a singular commitment: to deliver
          unparalleled reliability and value to our partners and clients.
        </p>
      </header>

      <main className="space-y-12">
        <section className="p-8 bg-brand-navy/90 text-white rounded-2xl border border-brand-gold/30 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Two Divisions, One Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Building className="h-8 w-8 text-brand-gold" />
                <h3 className="text-2xl font-semibold ml-4">
                  Letsheng Estates
                </h3>
              </div>
              <p className="text-gray-400">
                Our Estates division is dedicated to curating and managing
                premium residential properties. We believe that a home is a
                sanctuary, and our commitment is to provide secure,
                well-maintained, and desirable living spaces. Our transparent
                tenancy terms and proactive management ensure peace of mind for
                all our residents.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Printer className="h-8 w-8 text-brand-gold" />
                <h3 className="text-2xl font-semibold ml-4">
                  Letsheng Printing
                </h3>
              </div>
              <p className="text-gray-400">
                The Printing division provides high-fidelity branding and
                marketing materials for discerning businesses. From corporate
                apparel to promotional merchandise, we combine state-of-the-art
                technology with meticulous craftsmanship to bring your brand's
                vision to life with precision and impact.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center text-brand-navy mb-8">
            The Pillars of Our Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Briefcase className="h-7 w-7" />}
              title="Disciplined Execution"
            >
              Every project, from a lease agreement to a large-scale print run,
              is managed through a structured, predictable workflow. We don't
              believe in surprises—only in consistent, on-time delivery. Our
              operational frameworks are designed for clarity and
              accountability.
            </FeatureCard>
            <FeatureCard
              icon={<Briefcase className="h-7 w-7" />}
              title="Transparent Partnerships"
            >
              We build trust through clarity. Our terms are explicit, our
              pricing is straightforward, and our communication is proactive.
              Whether it's our Terms of Tenancy or a detailed print quote, you
              will always know where you stand. No ambiguity, no fine print.
            </FeatureCard>
            <FeatureCard
              icon={<Briefcase className="h-7 w-7" />}
              title="Sustainable Growth"
            >
              Our strategy is focused on long-term value creation. We invest in
              quality assets, cutting-edge technology, and enduring
              relationships. By prioritizing stability and excellence over
              fleeting trends, we ensure a reliable and prosperous future for
              our company and our partners.
            </FeatureCard>
          </div>
        </section>

        <footer className="text-center mt-12 p-8 bg-brand-navy rounded-2xl text-white">
          <h3 className="text-2xl font-bold">Partner with Excellence</h3>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            For enterprise-level print programs, property management inquiries,
            or strategic partnerships, please connect with our Business
            Development office.
          </p>
          <button type="button" className="mt-6 bg-brand-gold text-brand-navy font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg">
            Contact Business Services
          </button>
        </footer>
      </main>
    </div>
  );
}

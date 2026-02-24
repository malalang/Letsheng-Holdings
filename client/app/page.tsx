import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="p-8 bg-brand-navy text-white rounded-lg">
          <h1 className="text-4xl font-bold">
            Where Exceptional Living Meets Distinctive Branding
          </h1>
          <p className="mt-4 text-lg text-gray-100">
            Premium residences and custom print experiences—one trusted partner
            for spaces and expressions.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/properties"
              className="inline-block px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded"
            >
              Explore Estates
            </Link>
            <Link
              href="/printing"
              className="inline-block px-6 py-3 border-2 border-brand-gold text-brand-gold font-semibold rounded"
            >
              Visit Print Studio
            </Link>
          </div>
        </div>

        <div className="p-8 bg-white rounded-lg border">
          <div>
            <h2 className="text-2xl font-semibold">
              Estates — Premium Room Rentals & Management
            </h2>
            <p className="mt-3 text-gray-700">
              Thoughtful homes, transparent terms, and concierge support for
              comfortable living.
            </p>
            <Link
              href="/properties"
              className="inline-block mt-4 px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded"
            >
              Browse Available Rooms
            </Link>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">
              Print Studio — T‑shirts, Mugs & Custom Goods
            </h2>
            <p className="mt-3 text-gray-700">
              Fast proofs, precise color control, and dependable delivery for
              your brand or event.
            </p>
            <Link
              href="/printing"
              className="inline-block mt-4 px-6 py-3 border-2 border-brand-gold text-brand-gold font-semibold rounded"
            >
              Start a Print Order
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">The Holdings Standard</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded text-center">
            <h4 className="font-bold">Seamless Contracts</h4>
            <p className="text-sm text-gray-600">
              Transparent terms, reliable payment cycles, and clear move‑in
              guidelines.
            </p>
          </div>
          <div className="p-4 border rounded text-center">
            <h4 className="font-bold">Quality & Fidelity</h4>
            <p className="text-sm text-gray-600">
              Premium fixtures for homes and color‑accurate proofs for prints.
            </p>
          </div>
          <div className="p-4 border rounded text-center">
            <h4 className="font-bold">Predictable Service</h4>
            <p className="text-sm text-gray-600">
              Documented workflows and timely responses across both divisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

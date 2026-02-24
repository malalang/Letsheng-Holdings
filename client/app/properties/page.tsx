import type { Property } from "../../lib/validations/schemas";

const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Beachfront Villa",
    description: "Ocean view room",
    price: 100000,
    location: "Coast",
    availability: true,
    image_urls: null,
    created_at: "",
  },
  {
    id: "2",
    title: "Urban Loft",
    description: "City center studio",
    price: 50000,
    location: "City",
    availability: true,
    image_urls: null,
    created_at: "",
  },
];

export default function PropertiesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Estates</h1>

      <section className="mb-6">
        <p className="text-gray-700">
          Letsheng Estates pairs premium room offerings with clear, enforceable
          terms and attentive property management. Each listing includes upfront
          rent details, move-in checklists, and streamlined support so you can
          settle in quickly and confidently.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">Quick Facts</h2>
        <ul className="mt-3 list-disc list-inside text-gray-700">
          <li>Move‑in Ready: Furnished and unfurnished options available.</li>
          <li>
            Transparent Pricing: Monthly rent, deposit, and included utilities
            listed per room.
          </li>
          <li>
            Concierge Support: Maintenance requests and account management via
            your dashboard.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <div className="p-4 border rounded">
          <h3 className="font-bold">Terms of Tenancy — Payment Policy</h3>
          <p className="mt-2 text-gray-700">
            Rent is due strictly by the 7th of every month. Late fees and
            account actions follow the Terms of Tenancy agreed at lease signing.
            For questions, contact Estates Support.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleProperties.map((p) => (
          <article key={p.id} className="border rounded p-4">
            <h3 className="font-bold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-semibold">R{p.price.toLocaleString()}</span>
              <span
                className={`px-2 py-1 text-xs rounded ${p.availability ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}
              >
                {p.availability ? "Available" : "Unavailable"}
              </span>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                className="px-4 py-2 bg-brand-gold text-brand-navy font-semibold rounded"
              >
                Apply to Lease
              </button>
              <button type="button" className="px-4 py-2 border rounded">
                Request a Viewing
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

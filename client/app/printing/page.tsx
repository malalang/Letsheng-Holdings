const _products = [
  {
    id: "tshirt",
    title: "T-Shirt",
    desc: "Premium cotton T-shirt",
    available: true,
  },
  {
    id: "mug",
    title: "Mug",
    desc: "Ceramic mug, dishwasher safe",
    available: true,
  },
  {
    id: "banner",
    title: "Banner",
    desc: "Large format printing (coming soon)",
    available: false,
  },
  {
    id: "poster",
    title: "Poster",
    desc: "High-res posters (coming soon)",
    available: false,
  },
];

export default function PrintingPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Print Studio</h1>

      <section className="mb-6">
        <p className="text-gray-700">
          Our Print Studio delivers professional-quality T-shirts and Mugs
          today, with Banners and Posters arriving soon. We prioritize color
          fidelity, clear proofs, and predictable turnaround so your brand looks
          as intended—every time.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <h3 className="font-bold">Custom T‑shirts</h3>
          <p className="text-sm text-gray-600">
            Premium cotton and blended fabrics; full‑color direct‑to‑garment and
            screen‑print options. Select size ranges, fit, and placement, then
            review a digital proof.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Turnaround: Standard fulfillment in 5–7 business days after proof
            approval.
          </p>
          <div className="mt-4">
            <a
              href="/printing/order"
              className="px-4 py-2 bg-brand-gold text-brand-navy rounded font-semibold"
            >
              Order T‑shirts
            </a>
          </div>
        </div>

        <div className="border rounded p-4">
          <h3 className="font-bold">Custom Mugs</h3>
          <p className="text-sm text-gray-600">
            Ceramic, dishwasher‑safe imprinting with vibrant, long‑lasting
            color. Choose wrap or single‑side layouts and confirm finish options
            on your proof.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Turnaround: Standard fulfillment in 4–6 business days after proof
            approval.
          </p>
          <div className="mt-4">
            <a
              href="/printing/order"
              className="px-4 py-2 bg-brand-gold text-brand-navy rounded font-semibold"
            >
              Order Mugs
            </a>
          </div>
        </div>

        <div className="border rounded p-4 col-span-1 md:col-span-2">
          <h3 className="font-bold">Banners & Posters — Coming Soon</h3>
          <p className="text-sm text-gray-600">
            Banners and Posters are coming soon. Sign up to be notified when
            large‑format printing is available.
          </p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Order Process — 3 Steps</h2>
        <ol className="mt-3 list-decimal list-inside text-gray-700">
          <li>
            <strong>Step 1: Choose Canvas</strong>
            <div className="text-sm">
              Select product (T‑shirt or Mug), choose size/format, and set
              quantity.
            </div>
          </li>
          <li className="mt-2">
            <strong>Step 2: Upload Artwork & Select Options</strong>
            <div className="text-sm">
              Upload your file (PNG, JPG, PDF). Choose print method, color
              profile, and optional extras (bleed, white ink). For best results
              upload 300 DPI at final print size.
            </div>
          </li>
          <li className="mt-2">
            <strong>Step 3: Review Proof & Checkout</strong>
            <div className="text-sm">
              Review the digital proof, approve or request one revision, then
              complete payment. One complimentary revision included.
            </div>
          </li>
        </ol>
        <p className="mt-3 text-sm text-gray-500">
          Orders confirmed after payment and proof approval. Shipping estimates
          apply to business days only.
        </p>
      </section>
    </div>
  );
}

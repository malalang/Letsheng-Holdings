export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="p-8 rounded-lg bg-brand-navy text-white">
        <h1 className="text-4xl font-bold">About Letsheng Holdings</h1>
        <p className="mt-4 text-lg text-gray-100">
          Two focused divisions. One disciplined standard for delivery and
          transparency.
        </p>
      </header>

      <section className="bg-white p-6 rounded-lg border">
        <h2 className="text-2xl font-semibold">Holdings Philosophy</h2>
        <p className="mt-3 text-gray-700">
          Letsheng Holdings combines disciplined operations with a commitment to
          clarity. We run two focused divisions—Estates and Print Studio—each
          governed by consistent standards, predictable timelines, and
          transparent terms so customers and partners always know what to
          expect.
        </p>

        <p className="mt-3 text-gray-700">
          Operational excellence means measurable reliability: clear payment
          policies, documented workflows, and proactive communication. We treat
          every lease and every print order as an extension of our promise to
          deliver on time, every time.
        </p>

        <p className="mt-3 text-gray-700">
          Our approach centers on trust: straightforward agreements, clear
          service‑level expectations, and a responsive support system. Whether
          furnishing a home or producing a campaign piece, Letsheng delivers
          quality and accountability at every step.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold">Operational Excellence</h4>
            <p className="text-sm text-gray-600">
              Measured workflows, clear SLAs, and consistent delivery.
            </p>
          </div>
          <div>
            <h4 className="font-bold">Transparent Terms</h4>
            <p className="text-sm text-gray-600">
              Explicit policies like the Terms of Tenancy and clear order
              proofs.
            </p>
          </div>
          <div>
            <h4 className="font-bold">Reliable Support</h4>
            <p className="text-sm text-gray-600">
              Responsive teams for Estates and Print Studio to resolve issues
              quickly.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold">
            For partnership inquiries or enterprise print programs, contact
            Business Services.
          </p>
        </div>
      </section>
    </div>
  );
}

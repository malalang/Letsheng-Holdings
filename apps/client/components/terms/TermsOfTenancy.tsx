export default function TermsOfTenancy() {
  return (
    <section className="glass-overlay border-primary/30 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-secondary">Terms of Tenancy</h3>
      <p className="mt-3 text-gray-700">
        Letsheng Holdings operates a strict and transparent tenancy policy to
        protect both residents and the integrity of our portfolio. The following
        terms apply to all residential leases unless explicitly amended in
        writing:
      </p>

      <ol className="mt-4 list-decimal pl-5 text-gray-700 space-y-3">
        <li>
          Monthly Payments: Rent is due on or before the <strong>7th</strong>{" "}
          day of each calendar month. Late payments may incur administrative
          fees and affect the standing of the lease.
        </li>
        <li>
          Lapse & Termination: A lease will be considered lapsed and subject to
          termination if payments or renewal documentation are not received
          within a continuous <strong>three-month</strong> period.
        </li>
        <li>
          Communication: All breaches and notices will be delivered in
          accordance with the signed agreement. Tenants are required to keep
          contact details current to receive important notices.
        </li>
        <li>
          Enforcement: Letsheng Holdings reserves the right to pursue
          repossession and recover outstanding balances where appropriate and in
          accordance with applicable law.
        </li>
      </ol>

      <p className="mt-4 text-sm text-gray-500">
        These terms are intended to provide clarity and operational consistency
        across the Letsheng portfolio. If you have questions, contact the
        property management team for assistance.
      </p>
    </section>
  );
}

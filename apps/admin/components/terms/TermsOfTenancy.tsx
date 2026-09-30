export default function TermsOfTenancy() {
  return (
    <section className="glass-card rounded-lg p-5">
      <h4 className="text-lg font-bold text-secondary-foreground">Terms of Tenancy</h4>
      <div className="mt-3 text-muted-foreground space-y-2">
        <p>
          Payments are due on or before the <strong>7th</strong> of each month.
          To maintain equity and operational predictability, this policy is
          strictly enforced.
        </p>
        <p>
          Leases that lapse for a continuous <strong>three-month</strong>
          period without payment or renewal will be considered for termination
          and repossession processes.
        </p>
        <p className="text-sm text-muted-foreground">
          Administrators should follow documented recovery and communication
          procedures when applying these terms.
        </p>
      </div>
    </section>
  );
}

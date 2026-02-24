export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Summary</h1>
      <p className="text-gray-700 mb-6">
        Key operational metrics for Estates and Print Studio.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Current Occupancy Rate</h3>
          <p className="text-sm text-gray-600">
            Percentage of occupied rooms vs. total rentable units.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Pending Rent Collections</h3>
          <p className="text-sm text-gray-600">
            Total pending rental payments awaiting processing.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Overdue Accounts</h3>
          <p className="text-sm text-gray-600">
            Count of tenant accounts with past‑due rent beyond the grace period.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Pending Lease Applications</h3>
          <p className="text-sm text-gray-600">
            Number of incomplete or pending tenant applications.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Pending Print Approvals</h3>
          <p className="text-sm text-gray-600">
            Print orders awaiting artwork approval from customers.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Fulfillment Backlog</h3>
          <p className="text-sm text-gray-600">
            Count of print orders not yet shipped that exceed standard
            turnaround.
          </p>
        </div>
      </div>
    </div>
  );
}

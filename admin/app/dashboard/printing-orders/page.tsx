import Link from "next/link";

export default function PrintingOrders() {
  const sample: { id: string; customer: string; status: string }[] = [
    { id: "a1", customer: "Alice", status: "pending" },
    { id: "b2", customer: "Bob", status: "processing" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Printing Orders</h1>
      <ul className="space-y-3">
        {sample.map((o: { id: string; customer: string; status: string }) => (
          <li
            key={o.id}
            className="p-3 border rounded flex items-center justify-between"
          >
            <div>
              <div className="font-semibold">{o.customer}</div>
              <div className="text-sm text-gray-600">{o.status}</div>
            </div>
            <Link
              href={`/dashboard/printing-orders/${o.id}`}
              className="text-sm text-brand-navy"
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

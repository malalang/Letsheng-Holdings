import Link from "next/link";

export default function AdminProperties() {
  const sample = [
    { id: "1", title: "Beachfront Villa" },
    { id: "2", title: "Urban Loft" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Properties</h1>
        <Link
          href="/dashboard/properties/new"
          className="px-3 py-2 bg-brand-gold text-brand-navy rounded"
        >
          New
        </Link>
      </div>

      <ul className="space-y-3">
        {sample.map((p) => (
          <li
            key={p.id}
            className="p-3 border rounded flex items-center justify-between"
          >
            <span>{p.title}</span>
            <div className="space-x-2">
              <Link
                href={`/dashboard/properties/${p.id}`}
                className="text-sm text-brand-navy"
              >
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

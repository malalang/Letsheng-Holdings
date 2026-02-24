export default function PropertyDetail({ params }: { params: { id: string } }) {
  const id = params?.id ?? "unknown";
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Property {id}</h1>
      <p className="text-gray-700">
        Detailed view for property {id}. Replace with real data fetching.
      </p>
    </div>
  );
}

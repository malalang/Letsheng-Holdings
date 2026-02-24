export default function EditProperty({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Property {params.id}</h1>
      <p className="text-gray-700">Property edit form goes here (admin).</p>
    </div>
  );
}

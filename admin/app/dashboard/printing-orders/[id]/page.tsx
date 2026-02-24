export default function OrderDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Order {params.id}</h1>
      <p className="text-gray-700">Order details and actions (admin).</p>
    </div>
  );
}

"use client";
import type React from "react";
import { useState } from "react";

export default function PrintOrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("t-shirt");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order submitted: ${product} x ${quantity} for ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg p-6 border rounded">
      <h2 className="text-xl font-semibold mb-4">Place an Order</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full p-2 border rounded mb-3"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border rounded mb-3"
      />
      <select
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      >
        <option value="t-shirt">T-Shirt</option>
        <option value="mug">Mug</option>
      </select>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min={1}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-brand-gold text-brand-navy font-semibold rounded"
      >
        Submit Order
      </button>
    </form>
  );
}

"use client";
import type React from "react";
import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "password") {
      localStorage.setItem("admin-token", "secret");
      alert("Logged in (demo)");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded">
      <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-brand-navy text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

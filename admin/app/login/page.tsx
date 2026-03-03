"use client";
import { useState } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // IMPORTANT: This is a mock authentication for front-end demo purposes only.
    // In a real application, this logic would be handled securely on the server.
    if (password === "letcheng-admin-2024") {
      localStorage.setItem("admin-token", "__mock_secure_token__");
      window.location.href = "/dashboard";
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Administrator Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your administrative password"
            />
            <Button type="submit" className="w-full bg-brand-navy text-white">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";
import { LogIn, Shield } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-4xl font-bold text-white">
            Admin Secure Login
          </h1>
          <p className="mt-2 text-gray-400">Letsheng Holdings Command Center</p>
        </div>
        <Card className="border-gray-700 bg-gray-900/50 text-white">
          <CardHeader>
            <CardTitle>Enter Access Code</CardTitle>
            <CardDescription className="text-gray-400">
              Provide the administrative password to proceed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••••••••"
                className="border-gray-600 bg-gray-800 text-white placeholder:text-gray-500"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Authenticate
                <LogIn className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";
import type React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="max-w-md mx-auto p-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Administrator Login</CardTitle>
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

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminHome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-5xl font-extrabold text-brand-navy mb-4">
          Admin Console
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Operational overview and shortcuts for Estates and Print Studio.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg">Go to Dashboard</Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              Admin Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

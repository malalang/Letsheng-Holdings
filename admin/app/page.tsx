import { LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminHomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary text-white">
      <div className="text-center p-8 max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4">Admin Command Center</h1>
        <p className="text-lg text-gray-300 mb-8">
          Manage Letsheng Holdings' estates and print studio operations with
          precision and efficiency.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Access Dashboard
              <LogIn className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          You will be redirected to the login page if not authenticated.
        </p>
      </div>
    </div>
  );
}

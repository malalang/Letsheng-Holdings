"use client";

import { RotateCcw } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
          <div>
            <h2 className="text-lg font-semibold">
              Something went wrong loading this page
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The page failed to load. Your data is safe — try again, and if the
              problem persists, sign out and back in.
            </p>
            {error.digest && (
              <p className="mt-3 font-mono text-xs text-muted-foreground tabular-nums">
                Reference: {error.digest}
              </p>
            )}
          </div>
          <Button onClick={reset} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Try again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

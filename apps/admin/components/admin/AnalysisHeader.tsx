import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface AnalysisHeaderItem {
  title: string;
  value: string;
  icon: LucideIcon;
  /** Supporting line under the title, e.g. "Awaiting response". */
  description: string;
  href?: string;
  /** Pass `destructive` for a warning KPI (overdue, errors). */
  color?: "destructive";
}

interface AnalysisHeaderProps {
  items: AnalysisHeaderItem[];
  className?: string;
}

export default function AnalysisHeader({
  items,
  className = "",
}: AnalysisHeaderProps) {
  return (
    <div
      className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 ${className}`.trim()}
    >
      {items.map((item) => {
        const body = (
          <Card
            className={`h-full transition-colors duration-150 ${item.color === "destructive" ? "border-destructive/20" : ""}`}
          >
            <CardHeader className="flex flex-row items-start justify-between gap-3 pb-2">
              <div className="min-w-0 space-y-1">
                <CardTitle className="truncate">{item.title}</CardTitle>
                <CardDescription className="truncate">
                  {item.description}
                </CardDescription>
              </div>
              <item.icon
                className={`h-4 w-4 shrink-0 ${item.color === "destructive" ? "text-destructive" : "text-primary"}`}
                aria-hidden="true"
              />
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold tabular-nums ${item.color === "destructive" ? "text-destructive" : ""}`}
              >
                {item.value}
              </div>
            </CardContent>
          </Card>
        );

        if (!item.href) return <div key={item.title}>{body}</div>;

        return (
          <Link
            key={item.title}
            href={item.href}
            className="block h-full cursor-pointer rounded-lg transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {body}
          </Link>
        );
      })}
    </div>
  );
}
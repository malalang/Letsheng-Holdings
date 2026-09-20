import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface EmptyProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Empty({
  icon: Icon,
  title,
  description,
  children,
  className,
}: EmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed py-20 text-center",
        className,
      )}
    >
      {Icon && <Icon className="mb-4 h-12 w-12 text-muted-foreground/30" />}
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && (
        <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
          {description}
        </p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

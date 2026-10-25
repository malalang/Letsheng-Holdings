"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface LedgerRow {
  date: string | null;
  tenant: string;
  amount: number;
  status: string;
}

interface ExportLedgerButtonProps {
  rows: LedgerRow[];
}

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function ExportLedgerButton({ rows }: ExportLedgerButtonProps) {
  const handleExport = () => {
    const header = "Date,Tenant,Amount (ZAR),Status";
    const lines = rows.map((row) => {
      const date = row.date
        ? new Date(row.date).toISOString().slice(0, 10)
        : "";
      return [
        date,
        csvEscape(row.tenant),
        row.amount.toFixed(2),
        csvEscape(row.status),
      ].join(",");
    });
    const csv = [header, ...lines].join("\n");
    const blob = new Blob([`${csv}\n`], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `letsheng-payment-ledger-${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      variant="outline"
      className="gap-2"
      onClick={handleExport}
      disabled={rows.length === 0}
    >
      <Download className="h-4 w-4" /> Export Ledger
    </Button>
  );
}

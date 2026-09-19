const STATUS_BADGE_CLASSES: Record<string, string> = {
  New: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Contacted: "bg-blue-50 text-blue-700 border-blue-200",
  Reviewed: "bg-blue-50 text-blue-700 border-blue-200",
  "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
  Approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Resolved: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Paid: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Late: "bg-red-50 text-red-700 border-red-200",
  Rejected: "bg-red-50 text-red-700 border-red-200",
  "Late Payment": "bg-red-50 text-red-700 border-red-200",
  Inactive: "bg-gray-100 text-gray-700 border-gray-200",
  Archived: "bg-gray-100 text-gray-700 border-gray-200",
};

export function statusBadgeClass(status: string): string {
  return STATUS_BADGE_CLASSES[status] ?? "bg-muted text-muted-foreground";
}

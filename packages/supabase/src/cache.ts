export const CACHE_TAGS = {
  properties: "properties",
  property: (id: string) => `property:${id}`,
  branding: "branding",
  brandingItem: (id: string) => `branding:${id}`,
  tenants: "tenants",
  payments: "payments",
  leaseApplications: "lease-applications",
  brandingInquiries: "branding-inquiries",
  contactMessages: "contact-messages",
} as const;

export const CACHE_PATHS = {
  home: "/",
  properties: "/properties",
  property: (id: string) => `/properties/${id}`,
  branding: "/branding",
  brandingItem: (id: string) => `/branding/${id}`,
  contact: "/contact",
} as const;

export type RevalidationMode = "max" | "immediate";

export interface RevalidationRequest {
  tags?: readonly string[];
  paths?: readonly string[];
  mode?: RevalidationMode;
}

export interface MutationResult<T> {
  data: T;
  revalidate: RevalidationRequest;
}

export function mutationResult<T>(
  data: T,
  revalidate: RevalidationRequest,
): MutationResult<T> {
  return { data, revalidate };
}

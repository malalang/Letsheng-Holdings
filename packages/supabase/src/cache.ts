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
  propertyGallery: (id: string) => `/properties/${id}/gallery`,
  propertyLeaseApplication: (id: string) => `/properties/${id}/apply-to-lease`,
  branding: "/branding",
  brandingItem: (id: string) => `/branding/${id}`,
  brandingGallery: (id: string) => `/branding/${id}/gallery`,
  brandingOrder: (id: string) => `/branding/${id}/order`,
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

import { z } from "zod";

// The single storage bucket the admin image uploader writes to. It is never
// client-supplied: the server resolves it from this contract.
export const adminImageBucket = "letshengHoldings";

// Object folders the admin image uploader may write into, taken from the
// `folder` props of every `UploadImage` call site in apps/admin. An empty
// string is the caller's "no folder" case and writes to the bucket root.
export const adminImageFolders = [
  "branding",
  "branding/gallery",
  "properties",
  "properties/gallery",
] as const;

export const adminImageFolderSchema = z.union([
  z.enum(adminImageFolders),
  z.literal(""),
]);

export type AdminImageFolderType = z.infer<typeof adminImageFolderSchema>;

export const adminImageUploadSchema = z.object({
  folder: adminImageFolderSchema,
});

export type AdminImageUploadType = z.infer<typeof adminImageUploadSchema>;

// Limits for one admin image object. The browser `accept` attribute is
// advisory, so the server enforces both of these against the received bytes.
// 4 MB is the documented per-image ceiling and stays under the 4.5 MB
// request-body cap of the deployment platform's serverless functions: an
// upload is a server action, so a larger body is rejected at the platform edge
// before the action runs, where the uploader cannot report it.
export const adminImageMaxBytes = 4 * 1024 * 1024;

export const adminImageMimeTypes = [
  "image/png",
  "image/jpeg",
  "image/gif",
] as const;

export type AdminImageMimeTypeType = (typeof adminImageMimeTypes)[number];

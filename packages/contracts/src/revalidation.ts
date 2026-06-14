import { z } from "zod";

export const revalidationPayloadSchema = z.object({
  tags: z.array(z.string()).optional(),
  paths: z.array(z.string()).optional(),
});

export type RevalidationPayload = z.infer<typeof revalidationPayloadSchema>;
export type RevalidationRequest = RevalidationPayload;

import { CACHE_TAGS } from "@repo/supabase/cache";
import { getBranding, getBrandingById } from "@repo/supabase/Queries/branding";
import {
  getProperties,
  getPropertyById,
} from "@repo/supabase/Queries/properties";
import { unstable_cache } from "next/cache";

export const getCachedPropertyRows = unstable_cache(
  getProperties,
  ["properties"],
  { tags: [CACHE_TAGS.properties] },
);

export const getCachedPropertyRowById = (id: string) =>
  unstable_cache(() => getPropertyById(id), ["property", id], {
    tags: [CACHE_TAGS.properties, CACHE_TAGS.property(id)],
  })();

export const getCachedBrandingRows = unstable_cache(getBranding, ["branding"], {
  tags: [CACHE_TAGS.branding],
});

export const getCachedBrandingRowById = (id: string) =>
  unstable_cache(() => getBrandingById(id), ["branding-item", id], {
    tags: [CACHE_TAGS.branding, CACHE_TAGS.brandingItem(id)],
  })();

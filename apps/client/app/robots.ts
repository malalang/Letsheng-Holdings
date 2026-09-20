import { getEnv } from "@letsheng-holdings/contracts/env";
import type { MetadataRoute } from "next";

const siteUrl =
  getEnv().NEXT_PUBLIC_SITE_URL ?? "https://letshengholdings.co.za";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

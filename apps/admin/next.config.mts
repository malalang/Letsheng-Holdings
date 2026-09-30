import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      // Admin image uploads travel to the server action as multipart FormData.
      // Just above the 4 MB per-image ceiling in @letsheng-holdings/contracts
      // /imageUpload, and still under the platform's 4.5 MB request-body cap.
      bodySizeLimit: "5mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "qjrvfgxyjflcwnfupxcy.supabase.co",
      },
      {
        protocol: "https",
        hostname: "acdkpkpsamqrqonkbbag.supabase.co",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;

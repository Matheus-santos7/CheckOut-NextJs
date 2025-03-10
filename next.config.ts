import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "drive.google.com" },
      { hostname: "u9a6wmr3as.ufs.sh" },
    ],
  },
};

export default nextConfig;
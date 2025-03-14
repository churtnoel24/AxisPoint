import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // Increase body size limit to 5MB (adjust as needed)
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "media.istockphoto.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "i.sstatic.net",
        protocol: "https",
        port: "",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;

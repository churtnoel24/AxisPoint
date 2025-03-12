import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'media.istockphoto.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        port: '',
      }
    ]
  }
};

export default nextConfig;

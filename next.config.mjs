/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.devnextbd.com",
      },
    ],
  },
};

export default nextConfig;

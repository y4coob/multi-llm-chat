/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // Ensure we handle API requests correctly
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "")}/:path*`,
        // Remove trailing slash (if any) to prevent double slashes
      },
    ];
  },
};

module.exports = nextConfig;

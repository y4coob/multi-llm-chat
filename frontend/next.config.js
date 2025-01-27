/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}auth/:path*`,
      },
      {
        source: "/chat/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}chat/:path*`,
      },
      {
        source: "/user/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}user/:path*`,
      },
    ]
  },
}

module.exports = nextConfig


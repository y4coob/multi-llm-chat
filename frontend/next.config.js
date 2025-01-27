/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // async rewrites() {
  //   const apiUrl = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "") : ""
  //   return [
  //     {
  //       source: "/auth/:path*",
  //       destination: `${apiUrl}/auth/:path*`,
  //     },
  //     {
  //       source: "/chat/:path*",
  //       destination: `${apiUrl}/chat/:path*`,
  //     },
  //     {
  //       source: "/user/:path*",
  //       destination: `${apiUrl}/user/:path*`,
  //     },
  //   ]
  // }
}

module.exports = nextConfig


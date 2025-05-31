/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/doc/eduardo_calvo_lopez_curriculum_vitae.pdf",
        permanent: true,
      },
      {
        source: "/articles/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

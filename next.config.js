/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chambers-consulting.dev',
      },
    ],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Suppress specific warnings
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: true },
      { source: '/services', destination: '/#services', permanent: true },
      { source: '/start-project', destination: '/contact', permanent: true },
      { source: '/audit', destination: '/contact', permanent: true },
      { source: '/audit/report', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig 
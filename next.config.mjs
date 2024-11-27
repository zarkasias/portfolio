/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/:path*",
      destination: "/:path*",
    },
  ],
};

export default nextConfig;

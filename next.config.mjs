/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/:path*",
      destination: "/pages/:path*",
    },
  ],
};

export default nextConfig;

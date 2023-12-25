/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "api.hiita.vn", "hiita.vn"],
  },
};

module.exports = nextConfig;

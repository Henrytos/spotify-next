/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com", "cdn.example.com", "other-domain.com"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "bit.ly", "material-ui.com"],
  },
};

module.exports = nextConfig;

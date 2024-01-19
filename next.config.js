/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    UNSPLASH_API_KEY: "g8UTDbNZxrAEce_J6qZrDs8MDLhIQAZHTLruQMeupoU",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};

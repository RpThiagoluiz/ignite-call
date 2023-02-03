/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
}

module.exports = nextConfig

// pageExtensions - all files and in page.tsx now is a route path.

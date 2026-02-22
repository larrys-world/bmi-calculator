/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bmi-calculator',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
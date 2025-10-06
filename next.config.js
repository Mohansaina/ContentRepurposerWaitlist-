/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // GitHub Pages compatibility
  basePath: '/ContentRepurposerWaitlist-',
  assetPrefix: '/ContentRepurposerWaitlist-',
};

module.exports = nextConfig;

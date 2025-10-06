#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Configuring GitHub Pages deployment...');

// Create or update next.config.js to support static export
const nextConfigContent = `/** @type {import('next').NextConfig} */
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
`;

try {
  fs.writeFileSync('next.config.js', nextConfigContent);
  console.log('✅ Updated next.config.js for GitHub Pages');
} catch (error) {
  console.error('❌ Failed to update next.config.js:', error.message);
}

// Update package.json to add export script
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Add export script if it doesn't exist
if (!packageJson.scripts.export) {
  packageJson.scripts.export = "next build && next export";
  
  try {
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
    console.log('✅ Added export script to package.json');
  } catch (error) {
    console.error('❌ Failed to update package.json:', error.message);
  }
}

console.log('✅ GitHub Pages configuration completed');
console.log('📝 To deploy to GitHub Pages, run:');
console.log('   npm run export');
console.log('   npx gh-pages -d out');
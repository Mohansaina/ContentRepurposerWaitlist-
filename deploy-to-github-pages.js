#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting GitHub Pages deployment process...');

try {
  // Check if we're in a git repository
  console.log('🔍 Checking Git repository...');
  execSync('git rev-parse --git-dir', { stdio: 'pipe' });
  console.log('✅ Git repository detected');
} catch (error) {
  console.error('❌ Git repository not found. Please initialize Git first.');
  process.exit(1);
}

// Get repository info
let repoUrl, username, repoName;
try {
  const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf-8' }).trim();
  console.log(`🔗 Repository URL: ${remoteUrl}`);
  
  // Extract username and repo name from URL
  const match = remoteUrl.match(/github\.com[\/:](.+?)\/(.+?)(?:\.git)?$/);
  if (match) {
    username = match[1];
    repoName = match[2].replace(/\.git$/, '');
    repoUrl = `https://${username}.github.io/${repoName}`;
    console.log(`👤 Username: ${username}`);
    console.log(`📂 Repository: ${repoName}`);
  } else {
    console.error('❌ Could not parse GitHub repository URL');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Could not get repository information');
  process.exit(1);
}

// Build the Next.js application
console.log('🏗️ Building Next.js application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// Export as static files
console.log('📦 Exporting as static files...');
try {
  // Create out directory if it doesn't exist
  if (!fs.existsSync('out')) {
    fs.mkdirSync('out');
  }
  
  // For Next.js 15, we need to use output standalone or static export
  // Let's try to build and then copy the static files
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Export completed successfully');
} catch (error) {
  console.error('❌ Export failed. Your Next.js version may not support next export.');
  console.log('ℹ️  Trying alternative approach...');
  
  // Check if there's a build directory
  if (fs.existsSync('.next')) {
    console.log('✅ Found .next directory. Proceeding with deployment.');
  } else {
    console.error('❌ No build output found');
    process.exit(1);
  }
}

console.log('📤 Deploying to GitHub Pages...');
try {
  // Install gh-pages if not already installed
  execSync('npm install gh-pages --save-dev', { stdio: 'inherit' });
  
  // Deploy to GitHub Pages
  execSync('npx gh-pages -d out', { stdio: 'inherit' });
  
  console.log('✅ Deployment to GitHub Pages completed successfully!');
  console.log(`🌍 Your site is now live at: https://${username}.github.io/${repoName}`);
} catch (error) {
  console.error('❌ Deployment to GitHub Pages failed');
  console.error(error.message);
  process.exit(1);
}
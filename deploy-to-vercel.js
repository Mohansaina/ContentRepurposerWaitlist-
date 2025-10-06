#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

try {
  // Check if vercel is installed
  console.log('🔍 Checking for Vercel CLI...');
  execSync('vercel --version', { stdio: 'pipe' });
  console.log('✅ Vercel CLI found');
} catch (error) {
  console.log('⚠️ Vercel CLI not found. Installing...');
  try {
    execSync('npm install -g vercel', { stdio: 'inherit' });
    console.log('✅ Vercel CLI installed successfully');
  } catch (installError) {
    console.error('❌ Failed to install Vercel CLI');
    process.exit(1);
  }
}

// Check if we're in a git repository
try {
  execSync('git rev-parse --git-dir', { stdio: 'pipe' });
  console.log('✅ Git repository detected');
} catch (error) {
  console.log('⚠️ Initializing Git repository...');
  try {
    execSync('git init', { stdio: 'inherit' });
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "Initial commit"', { stdio: 'inherit' });
    console.log('✅ Git repository initialized');
  } catch (gitError) {
    console.error('❌ Failed to initialize Git repository');
    process.exit(1);
  }
}

// Deploy to Vercel
console.log('🚀 Deploying to Vercel...');
try {
  // Run vercel deploy
  const deployOutput = execSync('vercel --prod --yes --token=', {
    stdio: ['pipe', 'pipe', 'pipe'],
    encoding: 'utf-8'
  });
  
  console.log(deployOutput);
  console.log('✅ Deployment completed!');
  
  // Try to extract the URL from the output
  const urlMatch = deployOutput.match(/https?:\/\/[^\s]+\.vercel\.app/);
  if (urlMatch) {
    console.log(`🌍 Your site is live at: ${urlMatch[0]}`);
  }
} catch (deployError) {
  console.error('❌ Deployment failed:');
  console.error(deployError.message);
  
  // Provide manual instructions
  console.log('\n📋 Manual deployment instructions:');
  console.log('1. Run: vercel login');
  console.log('2. Follow the authentication prompts in your browser');
  console.log('3. Run: vercel --prod');
  console.log('4. Follow the prompts to deploy your project');
}
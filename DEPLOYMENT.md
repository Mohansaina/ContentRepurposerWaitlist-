# Deployment Guide for YouTube to Social Posts Landing Page

## Option 1: Deploy to Vercel (Recommended)

### Prerequisites
- A GitHub account
- A Vercel account

### Steps

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name your repository (e.g., "youtube-to-social-posts")
   - Don't initialize with a README
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/youtube-to-social-posts.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to https://vercel.com/new
   - Connect your GitHub account
   - Select your repository
   - Vercel will automatically detect it's a Next.js app
   - Click "Deploy"
   - Wait for the deployment to complete
   - Your site will be live at the provided URL

## Option 2: Deploy as Static Files

If you prefer to deploy as static files to any static hosting service:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **The static files will be in the `.next` directory**

3. **Upload these files to any static hosting service:**
   - Netlify
   - GitHub Pages
   - AWS S3
   - Firebase Hosting
   - Any other static hosting provider

## Option 3: Deploy with Docker (Advanced)

If you want to containerize your application:

1. Create a Dockerfile in your project root:
   ```dockerfile
   FROM node:18-alpine AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package.json package-lock.json ./
   RUN npm ci

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. Build and run the Docker container:
   ```bash
   docker build -t youtube-to-social-posts .
   docker run -p 3000:3000 youtube-to-social-posts
   ```

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. Check that the build completes successfully:
   ```bash
   npm run build
   ```

3. For Vercel deployment issues, check the build logs in the Vercel dashboard.
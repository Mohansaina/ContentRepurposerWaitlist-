# YouTube to Social Posts Converter

A landing page for converting YouTube videos into social media posts.

## Features

- Clean, responsive design with TailwindCSS
- Google Form integration for waitlist signup
- Mobile-friendly layout
- Dark mode support

## Technologies Used

- Next.js 15
- TailwindCSS
- TypeScript

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

#### Option 1: One-Click Deployment (Easiest)
Double-click the **[one-click-deploy.bat](file:///c:/Users/svssw/Downloads/autoyoutue/one-click-deploy.bat)** file to automatically open the Vercel deployment page.

#### Option 2: Automated Deployment (Windows)
Double-click the **[deploy.bat](file:///c:/Users/svssw/Downloads/autoyoutue/deploy.bat)** file to automatically deploy to Vercel.

#### Option 3: Using npm script
```bash
npm run deploy
```

#### Option 4: Manual Deployment
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

## How It Works

When users click the "Join Waitlist" button, they are redirected to a Google Form where they can submit their information.

The Google Form link is: https://forms.gle/EmzC6BKKVnS5eJYZA

## Customization

To customize the Google Form link, edit the `src/app/page.tsx` file and update the URL in the `handleJoinWaitlist` function.
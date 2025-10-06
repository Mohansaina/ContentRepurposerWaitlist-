@echo off
TITLE YouTube to Social Posts - One Click Deployment
COLOR 0A

echo ================================
echo  YouTube to Social Posts Deploy
echo ================================
echo.

echo 1. Opening Vercel import page...
echo Please log in to your Vercel account when prompted.
timeout /t 3 /nobreak >nul

start "" "https://vercel.com/new/import?framework=other&hasTrialAvailable=1&project-name=content-repurposer-waitlist&remainingProjects=1&s=https%3A%2F%2Fgithub.com%2FMohansaina%2FContentRepurposerWaitlist-&teamSlug=mohansais-projects-5c0d74f2&totalProjects=1"

echo.
echo 2. Deployment steps:
echo    a. Log in to Vercel (if not already logged in)
echo    b. Click "Deploy" on the import page
echo    c. Wait for build to complete (1-3 minutes)
echo    d. Your site will be live!
echo.

echo 3. This window will close in 10 seconds...
timeout /t 10 /nobreak >nul
exit
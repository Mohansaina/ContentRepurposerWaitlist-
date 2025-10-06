@echo off
echo 🚀 Deploying YouTube to Social Posts Landing Page to Vercel
echo.

echo 🔍 Checking for Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js first.
    pause
    exit /b 1
)
echo ✅ Node.js found

echo 🔍 Checking for Vercel CLI...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️ Vercel CLI not found. Installing...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo ❌ Failed to install Vercel CLI
        pause
        exit /b 1
    )
    echo ✅ Vercel CLI installed
) else (
    echo ✅ Vercel CLI found
)

echo 🔍 Checking Git status...
git rev-parse --git-dir >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️ Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit"
    if %errorlevel% neq 0 (
        echo ❌ Failed to initialize Git repository
        pause
        exit /b 1
    )
    echo ✅ Git repository initialized
) else (
    echo ✅ Git repository found
)

echo 🚀 Deploying to Vercel...
echo You will need to authenticate with your Vercel account.
echo Press any key to continue...
pause >nul

vercel --prod --yes

echo.
echo 🎉 Deployment process completed!
echo Check the output above for your deployment URL.
pause
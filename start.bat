@echo off
echo ========================================
echo Siper Logistics Website - Startup Script
echo ========================================
echo.

echo [1/3] Installing dependencies...
echo Please wait, this may take a few minutes...
echo.
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: npm install failed!
    echo Please make sure Node.js is installed.
    echo.
    pause
    exit /b 1
)

echo.
echo [2/3] Installing completed successfully!
echo.

echo [3/3] Starting development server...
echo.
echo Website will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev

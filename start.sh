#!/bin/bash

echo "========================================"
echo "Siper Logistics Website - Startup Script"
echo "========================================"
echo ""

echo "[1/3] Installing dependencies..."
echo "Please wait, this may take a few minutes..."
echo ""
npm install

if [ $? -ne 0 ]; then
    echo ""
    echo "ERROR: npm install failed!"
    echo "Please make sure Node.js is installed."
    echo ""
    exit 1
fi

echo ""
echo "[2/3] Installation completed successfully!"
echo ""

echo "[3/3] Starting development server..."
echo ""
echo "Website will be available at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""
echo "========================================"
echo ""

npm run dev

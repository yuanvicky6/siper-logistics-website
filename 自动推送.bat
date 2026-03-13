@echo off
chcp 65001 >nul
echo ========================================
echo 自动推送到 GitHub
echo ========================================
echo.

REM 进入项目目录
cd /d "C:\Users\HUAWEI\WorkBuddy\20260313155948"

REM 设置 Git 路径
set "GIT_PATH=C:\Program Files\Git\bin\git.exe"

REM 设置 Token（请将下方占位符替换为你的 GitHub Personal Access Token）
set "TOKEN=YOUR_GITHUB_TOKEN_HERE"

REM 设置仓库 URL（带 Token）
set "REPO_URL=https://yuanvicky6:%TOKEN%@github.com/yuanvicky6/siper-logistics-website.git"

echo 📂 当前目录:
cd
echo.

echo 🔄 更新远程仓库地址...
"%GIT_PATH%" remote set-url origin "%REPO_URL%"
echo ✅ 远程仓库已配置
echo.

echo 🚀 开始推送...
echo.

"%GIT_PATH%" push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ 推送成功！
    echo ========================================
    echo.
    echo 您的代码已上传到 GitHub
    echo 访问: https://github.com/yuanvicky6/siper-logistics-website
    echo.
    echo 下一步：访问 https://vercel.com 部署网站
    echo.
) else (
    echo.
    echo ========================================
    echo ❌ 推送失败
    echo ========================================
    echo.
    echo 可能的原因：
    echo 1. GitHub 仓库未创建
    echo 2. Token 无效或过期
    echo 3. 网络连接问题
    echo.
    echo 请检查：
    echo - 仓库地址: https://github.com/yuanvicky6/siper-logistics-website
    echo - 如果仓库未创建，请先创建
    echo.
)

echo.
pause

@echo off
chcp 65001 >nul
echo ========================================
echo 网站部署快速设置脚本
echo ========================================
echo.

echo [步骤 1] 检查 Git 是否已安装...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git 未安装，请先访问 https://git-scm.com/download/win 下载安装
    pause
    exit /b 1
)
echo ✅ Git 已安装
echo.

echo [步骤 2] 配置 Git 用户信息...
set /p GIT_NAME="请输入您的 GitHub 用户名: "
set /p GIT_EMAIL="请输入您的邮箱: "
git config --global user.name "%GIT_NAME%"
git config --global user.email "%GIT_EMAIL%"
echo ✅ Git 配置完成
echo.

echo [步骤 3] 初始化 Git 仓库...
cd /d c:\Users\HUAWEI\WorkBuddy\20260313155948
if exist .git (
    echo ⚠️  Git 仓库已存在，跳过初始化
) else (
    git init
    echo ✅ Git 仓库初始化完成
)
echo.

echo [步骤 4] 添加所有文件到 Git...
git add .
echo ✅ 文件已添加
echo.

echo [步骤 5] 提交代码...
git commit -m "Initial commit: Shenzhen Spider Logistics website"
echo ✅ 代码已提交
echo.

echo [步骤 6] 配置远程仓库地址...
set /p GITHUB_USERNAME="请输入您的 GitHub 用户名（用于创建仓库URL）: "
set GITHUB_URL=https://github.com/%GITHUB_USERNAME%/siper-logistics-website.git
echo 远程仓库地址: %GITHUB_URL%
echo.

echo ⚠️  重要提示：
echo 1. 请先访问 https://github.com/new 创建新仓库
echo 2. 仓库名称必须是: siper-logistics-website
echo 3. 设置为 Public（公开）
echo 4. 创建后再继续此脚本
echo.

pause
git remote add origin %GITHUB_URL%
git branch -M main
echo ✅ 远程仓库已配置
echo.

echo [步骤 7] 推送代码到 GitHub...
echo.
echo ⚠️  如果是第一次推送，会弹出登录窗口
echo    请输入您的 GitHub 账号和密码
echo    （注意：GitHub 现在使用 Personal Access Token）
echo.
pause
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ 部署前准备完成！
    echo ========================================
    echo.
    echo 下一步操作：
    echo 1. 访问您的 GitHub 仓库查看代码
    echo 2. 访问 https://vercel.com 部署网站
    echo 3. 按照 DEPLOY_STEPS.md 中的详细步骤操作
    echo.
    echo GitHub 仓库地址: %GITHUB_URL%
    echo.
) else (
    echo.
    echo ❌ 推送失败，请检查：
    echo 1. GitHub 仓库是否已创建
    echo 2. 仓库地址是否正确
    echo 3. 网络连接是否正常
    echo 4. 身份验证是否正确（需要使用 Personal Access Token）
    echo.
    echo 可以手动重试: git push -u origin main
    echo.
)

pause

@echo off
chcp 65001 >nul
echo ========================================
echo 推送代码到 GitHub
echo ========================================
echo.

REM 设置环境变量，让 git 使用完整路径
set PATH=%PATH%;C:\Program Files\Git\bin;C:\Program Files\Git\cmd

REM 进入项目目录
cd /d "C:\Users\HUAWEI\WorkBuddy\20260313155948"

echo 📂 当前目录:
cd
echo.

echo 📊 Git 状态:
git status
echo.

echo ========================================
echo 准备推送到 GitHub...
echo ========================================
echo.
echo ⚠️  如果提示需要身份验证：
echo    用户名: yuanvicky6
echo    密码: Personal Access Token（不是 GitHub 密码）
echo.
echo    如何获取 Token:
echo    1. 访问 https://github.com/settings/tokens
echo    2. 点击 "Generate new token (classic)"
echo    3. 勾选 repo 权限
echo    4. 复制生成的 token
echo.
echo ========================================
echo.

pause

echo.
echo 🚀 开始推送...
echo.

git push -u origin main

echo.
if %errorlevel% equ 0 (
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
    echo ========================================
    echo ❌ 推送失败
    echo ========================================
    echo.
    echo 可能的原因：
    echo 1. GitHub 仓库未创建
    echo 2. 身份验证失败（需要使用 Personal Access Token）
    echo 3. 网络连接问题
    echo.
    echo 请检查后重试
    echo.
)

echo.
pause

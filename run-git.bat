@echo off
chcp 65001 >nul
echo ========================================
echo Git 代码推送脚本
echo ========================================
echo.

REM 进入项目目录
cd /d "C:\Users\HUAWEI\WorkBuddy\20260313155948"

echo [1/7] 配置 Git 用户信息...
"C:\Program Files\Git\bin\git.exe" config --global user.name "yuanvicky6"
"C:\Program Files\Git\bin\git.exe" config --global user.email "yuanvicky6@gmail.com"
echo ✅ Git 配置完成
echo.

echo [2/7] 初始化 Git 仓库...
if exist .git (
    echo ⚠️  Git 仓库已存在
) else (
    "C:\Program Files\Git\bin\git.exe" init
    echo ✅ Git 仓库初始化完成
)
echo.

echo [3/7] 添加所有文件...
"C:\Program Files\Git\bin\git.exe" add .
echo ✅ 文件已添加
echo.

echo [4/7] 提交代码...
"C:\Program Files\Git\bin\git.exe" commit -m "Initial commit: Shenzhen Spider Logistics website"
if %errorlevel% equ 0 (
    echo ✅ 代码已提交
) else (
    echo ⚠️  没有新的更改需要提交
)
echo.

echo [5/7] 添加远程仓库...
"C:\Program Files\Git\bin\git.exe" remote remove origin >nul 2>&1
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/yuanvicky6/siper-logistics-website.git
echo ✅ 远程仓库已配置
echo.

echo [6/7] 设置主分支...
"C:\Program Files\Git\bin\git.exe" branch -M main
echo ✅ 主分支已设置
echo.

echo [7/7] 推送代码到 GitHub...
echo.
echo ⚠️  重要提示：
echo 如果提示需要身份验证，GitHub 现在使用 Personal Access Token
echo 1. 访问 https://github.com/settings/tokens 生成新 token
echo 2. 用户名输入: yuanvicky6
echo 3. 密码输入: token（不是 GitHub 密码）
echo.
pause

"C:\Program Files\Git\bin\git.exe" push -u origin main

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
    echo 2. 身份验证失败（需要使用 Personal Access Token）
    echo 3. 网络连接问题
    echo.
    echo 请检查后重试，或手动执行:
    echo git push -u origin main
    echo.
)

pause

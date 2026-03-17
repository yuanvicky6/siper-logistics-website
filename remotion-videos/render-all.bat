@echo off
cd /d c:\Users\HUAWEI\WorkBuddy\20260313155948\remotion-videos

echo ========================================
echo 正在渲染唐朝英雄视频系列...
echo ========================================

echo [2/10] 渲染 李世民...
npx remotion render src/index.ts tang-hero-lishimin output/02-lishimin.mp4
if errorlevel 1 echo 李世民渲染失败 && goto :error

echo [3/10] 渲染 武则天...
npx remotion render src/index.ts tang-hero-wuzetian output/03-wuzetian.mp4
if errorlevel 1 echo 武则天渲染失败 && goto :error

echo [4/10] 渲染 玄奘...
npx remotion render src/index.ts tang-hero-xuanzang output/04-xuanzang.mp4
if errorlevel 1 echo 玄奘渲染失败 && goto :error

echo [5/10] 渲染 李白...
npx remotion render src/index.ts tang-hero-libai output/05-libai.mp4
if errorlevel 1 echo 李白渲染失败 && goto :error

echo [6/10] 渲染 杜甫...
npx remotion render src/index.ts tang-hero-dufu output/06-dufu.mp4
if errorlevel 1 echo 杜甫渲染失败 && goto :error

echo [7/10] 渲染 魏征...
npx remotion render src/index.ts tang-hero-weizheng output/07-weizheng.mp4
if errorlevel 1 echo 魏征渲染失败 && goto :error

echo [8/10] 渲染 王维...
npx remotion render src/index.ts tang-hero-wangwei output/08-wangwei.mp4
if errorlevel 1 echo 王维渲染失败 && goto :error

echo [9/10] 渲染 鉴真...
npx remotion render src/index.ts tang-hero-jianzhen output/09-jianzhen.mp4
if errorlevel 1 echo 鉴真渲染失败 && goto :error

echo [10/10] 渲染 李龟年...
npx remotion render src/index.ts tang-hero-liguinian output/10-liguinian.mp4
if errorlevel 1 echo 李龟年渲染失败 && goto :error

echo ========================================
echo 全部10个视频渲染完成！
echo 输出目录: output\
dir output\*.mp4
echo ========================================
goto :end

:error
echo 渲染过程中出现错误！
:end

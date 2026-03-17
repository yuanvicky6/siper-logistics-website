@echo off
chcp 65001 > nul
echo 渲染带配音的唐朝英雄视频...

npx remotion render src/index.ts tang-hero-lishimin output/voiced/02-lishimin.mp4 2>nul && echo OK_02 || echo FAIL_02
npx remotion render src/index.ts tang-hero-wuzetian output/voiced/03-wuzetian.mp4 2>nul && echo OK_03 || echo FAIL_03
npx remotion render src/index.ts tang-hero-xuanzang output/voiced/04-xuanzang.mp4 2>nul && echo OK_04 || echo FAIL_04
npx remotion render src/index.ts tang-hero-libai output/voiced/05-libai.mp4 2>nul && echo OK_05 || echo FAIL_05
npx remotion render src/index.ts tang-hero-dufu output/voiced/06-dufu.mp4 2>nul && echo OK_06 || echo FAIL_06
npx remotion render src/index.ts tang-hero-weizheng output/voiced/07-weizheng.mp4 2>nul && echo OK_07 || echo FAIL_07
npx remotion render src/index.ts tang-hero-wangwei output/voiced/08-wangwei.mp4 2>nul && echo OK_08 || echo FAIL_08
npx remotion render src/index.ts tang-hero-jianzhen output/voiced/09-jianzhen.mp4 2>nul && echo OK_09 || echo FAIL_09
npx remotion render src/index.ts tang-hero-liguinian output/voiced/10-liguinian.mp4 2>nul && echo OK_10 || echo FAIL_10

echo.
echo 全部渲染完成！
dir output\voiced\*.mp4

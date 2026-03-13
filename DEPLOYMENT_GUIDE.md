# 部署指南 - Siper Logistics Website

## 🚀 推荐部署方式：Vercel

Vercel 是 Next.js 官方推荐的部署平台，免费且易用。

### 方法1：使用 Vercel CLI（推荐）

#### 步骤1：安装 Vercel CLI
```bash
npm install -g vercel
```

#### 步骤2：登录 Vercel
```bash
vercel login
```
这会打开浏览器，让你用 GitHub、GitLab 或 Email 登录。

#### 步骤3：部署项目
在项目根目录运行：
```bash
cd c:/Users/HUAWEI/WorkBuddy/20260313155948
vercel
```

按照提示操作：
1. "Set up and deploy?" → **Yes**
2. "Which scope?" → 选择你的账号
3. "Link to existing project?" → **No**（首次部署）
4. "What's your project's name?" → 输入项目名称（如：siper-logistics）
5. "In which directory is your code located?" → 按 Enter（使用当前目录）
6. "Want to override the settings?" → **No**

部署完成后，Vercel 会给你一个测试 URL，如：
`https://siper-logistics.vercel.app`

#### 步骤4：部署到生产环境
```bash
vercel --prod
```

### 方法2：使用 Vercel 网站界面

#### 步骤1：推送到 GitHub
1. 在 GitHub 创建新仓库
2. 在项目目录初始化 Git：
```bash
cd c:/Users/HUAWEI/WorkBuddy/20260313155948
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin master
```

#### 步骤2：连接到 Vercel
1. 访问 https://vercel.com
2. 登录账号
3. 点击 "Add New" → "Project"
4. 选择你的 GitHub 仓库
5. 点击 "Import"
6. 配置项目设置（使用默认即可）
7. 点击 "Deploy"

### 方法3：配置自定义域名

#### 在 Vercel 上绑定域名
1. 登录 Vercel 控制台
2. 选择你的项目
3. 点击 "Settings" → "Domains"
4. 输入你的域名：`siperlogisticsinc.cn`
5. 按照提示配置 DNS

#### DNS 配置选项

**选项1：推荐（自动）**
```
类型: CNAME
名称: @
值: cname.vercel-dns.com
```

**选项2：A记录（如果CNAME不行）
```
类型: A
名称: @
值: 76.76.21.21
```

**子域名（如 www）**
```
类型: CNAME
名称: www
值: cname.vercel-dns.com
```

---

## 🌐 其他部署方式

### 部署到 Netlify

#### 步骤1：构建项目
```bash
cd c:/Users/HUAWEI/WorkBuddy/20260313155948
npm run build
```

#### 步骤2：拖放部署
1. 访问 https://netlify.com
2. 登录或注册
3. 将 `.next` 文件夹拖到 "Sites" 区域

#### 步骤3：配置自定义域名
1. 在 Netlify 控制台选择你的站点
2. 点击 "Domain settings"
3. 添加自定义域名

### 部署到传统服务器

#### 步骤1：构建项目
```bash
npm run build
```

#### 步骤2：上传到服务器
使用 FTP 或 SCP 上传以下文件：
- `.next` 文件夹
- `package.json`
- `public` 文件夹
- `next.config.js`

#### 步骤3：在服务器上安装依赖
```bash
npm install --production
```

#### 步骤4：使用 PM2 运行
```bash
npm install -g pm2
pm2 start npm --name "siper-logistics" -- start
pm2 save
pm2 startup
```

#### 步骤5：配置 Nginx（反向代理）
```nginx
server {
    listen 80;
    server_name siperlogisticsinc.cn;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔧 生产环境配置

### 环境变量

创建 `.env.local` 文件：

```env
# 网站URL
NEXT_PUBLIC_SITE_URL=https://siperlogisticsinc.cn

# 联系表单API（如果需要）
NEXT_PUBLIC_CONTACT_API_URL=https://your-api.com/contact

# 图片存储（如果使用云存储）
NEXT_PUBLIC_IMAGE_BUCKET=your-bucket-name

# 分析工具（可选）
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

### 优化构建配置

编辑 `next.config.js`：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['siperlogisticsinc.cn'],
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
```

---

## 📊 监控和分析

### 添加 Google Analytics

1. 创建 Google Analytics 账号
2. 获取跟踪 ID（如：UA-XXXXXXXXX-X）
3. 添加到环境变量：`NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X`
4. 创建 `components/Analytics.tsx`：

```typescript
'use client'
import { useEffect } from 'react'
import Script from 'next/script'

export default function Analytics() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_ID) {
      window.gtag('js', new Date())
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID)
    }
  }, [])

  if (!process.env.NEXT_PUBLIC_GA_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  )
}
```

5. 在 `app/layout.tsx` 中导入：
```typescript
import Analytics from '@/components/Analytics'

// 在 <body> 中添加
<Analytics />
```

---

## 🔒 安全配置

### SSL 证书

**使用 Vercel/Netlify** - 自动提供免费 SSL

**传统服务器**：
```bash
# 使用 Let's Encrypt
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d siperlogisticsinc.cn
```

### 安全头

编辑 `next.config.js`：

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

---

## 📈 性能优化

### 图片优化

使用 Next.js Image 组件：
```typescript
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority  // 首屏图片使用
/>
```

### 代码分割

Next.js 自动处理代码分割，无需手动配置。

### 缓存策略

Vercel 自动提供 CDN 缓存，无需额外配置。

---

## 🔄 更新部署

### Vercel 更新
```bash
git add .
git commit -m "Update website"
git push
# Vercel 会自动部署
```

### 手动重新部署
```bash
vercel --prod
```

---

## 📞 部署后检查清单

部署后，检查以下内容：

- [ ] 所有页面都能正常访问
- [ ] 导航链接工作正常
- [ ] 联系表单可以提交
- [ ] 图片正常显示
- [ ] 移动端正常显示
- [ ] HTTPS 正常工作
- [ ] 域名解析正确
- [ ] 页面加载速度正常
- [ ] 404 页面设置正确

---

## 🆘 故障排除

### 常见问题

**问题1：部署失败**
- 检查 `package.json` 中的脚本是否正确
- 确保所有依赖都正确安装
- 查看 Vercel 构建日志

**问题2：样式不显示**
- 确保 Tailwind CSS 配置正确
- 清除浏览器缓存
- 检查构建是否成功

**问题3：图片不显示**
- 检查图片路径是否正确
- 确保 `next.config.js` 中配置了域名
- 使用 Next.js Image 组件

**问题4：API 路由不工作**
- 检查路由文件是否在 `app/api/` 目录
- 确保导出正确的函数

---

## 📞 获取帮助

- Vercel 文档：https://vercel.com/docs
- Next.js 文档：https://nextjs.org/docs
- 社区论坛：https://github.com/vercel/vercel/discussions

---

**快速部署命令总结：**

```bash
# 首次部署
npm install -g vercel
vercel login
vercel

# 生产部署
vercel --prod

# 更新部署
git push  # Vercel 自动部署
```

**推荐流程：**
1. 使用 Vercel CLI 快速部署
2. 配置自定义域名
3. 设置环境变量
4. 测试所有功能
5. 配置监控和分析

祝你部署顺利！🚀

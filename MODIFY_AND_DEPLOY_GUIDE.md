# 网站修改和部署完整指南

本指南将帮助您：
1. 将网站内容修改为您的实际信息
2. 部署网站到互联网
3. 让 Google 搜索收录您的网站

---

## 第一步：修改公司信息

### 1.1 修改联系信息（最重要）

编辑 `config/contact-info.ts` 文件，将以下内容替换为您的实际信息：

```typescript
export const CONTACT_INFO = {
  // 公司基本信息
  company: {
    name: '您的公司名称',  // 例如：Siper Logistics Inc.
    domain: 'siperlogisticsinc.cn',  // 您的域名
    foundedYear: '成立年份',  // 例如：2010
  },

  // 联系方式
  contact: {
    phone: '+86 755 您的电话号码',  // 客户可拨打的国际电话
    email: 'info@siperlogisticsinc.cn',  // 主要邮箱
    supportEmail: 'support@siperlogisticsinc.cn',  // 客服邮箱
    address: '您的详细地址',  // 公司地址
  },

  // 工作时间
  workingHours: {
    weekday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 2:00 PM',
    sunday: 'Closed',
  },

  // 社交媒体（如果有）
  socialMedia: {
    twitter: 'https://twitter.com/您的账号',
    linkedin: 'https://linkedin.com/company/您的公司',
    instagram: 'https://instagram.com/您的账号',
  },

  // 统计数据（根据实际情况修改）
  statistics: {
    years: '15+',  // 成立年限
    countries: '50+',  // 服务国家数量
    clients: '1000+',  // 客户数量
    onTime: '99%',  // 准时率
    team: '200+',  // 团队人数
    shipments: '50,000+',  // 货运单数
  },
}
```

### 1.2 修改网站标题和描述

编辑 `app/layout.tsx` 文件：

```typescript
export const metadata: Metadata = {
  title: '您的公司名称 - International Logistics Solutions',  // 搜索引擎显示的标题
  description: '您的公司简介，包含关键词如 international logistics, air freight, sea freight, China to Bangladesh 等',  // 搜索引擎显示的描述
}
```

### 1.3 修改服务内容

编辑 `config/services.ts` 文件，修改服务描述和特点。

### 1.4 修改航线信息

编辑 `config/routes.ts` 文件，更新航线详情和运输时间。

---

## 第二步：上传和替换公司图片

### 方法1：通过管理后台上传（推荐）

1. 访问 `http://localhost:3000/admin`
2. 点击"上传图片"按钮选择您的公司图片
3. 填写图片描述并上传
4. 网站会自动使用新上传的图片

### 方法2：手动替换图片文件

将您的公司图片放到以下目录：
- `public/images/` - 公司Logo、轮播图等
- `public/routes/` - 航线相关图片

支持的图片格式：JPG、PNG、GIF、WebP
建议尺寸：
- Logo: 200x80 像素
- 轮播图: 1920x800 像素
- 服务图片: 600x400 像素

---

## 第三步：部署网站到 Vercel（免费）

### 3.1 准备工作

1. 注册 GitHub 账号（如果没有）：https://github.com
2. 注册 Vercel 账号（免费）：https://vercel.com

### 3.2 上传代码到 GitHub

1. 访问 https://github.com/new 创建新仓库
2. 仓库名：`siper-logistics-website`
3. 设置为 Public（公开）
4. 点击"Create repository"

然后在项目目录执行以下命令：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/您的用户名/siper-logistics-website.git
git push -u origin main
```

### 3.3 部署到 Vercel

1. 登录 Vercel：https://vercel.com
2. 点击"Add New" → "Project"
3. 选择您的 GitHub 仓库 `siper-logistics-website`
4. 点击"Deploy"
5. 等待2-3分钟，网站将自动部署完成

部署完成后，您会得到一个免费的网址，类似：`https://siper-logistics-website.vercel.app`

### 3.4 配置自定义域名

1. 在 Vercel 项目中，点击"Settings" → "Domains"
2. 输入您的域名：`siperlogisticsinc.cn`
3. Vercel 会显示DNS配置信息
4. 登录您的域名提供商（如阿里云、腾讯云等）
5. 添加DNS记录：
   - 类型：CNAME
   - 主机记录：@
   - 记录值：cname.vercel-dns.com
6. 等待DNS生效（通常需要10分钟到24小时）
7. 在 Vercel 中点击"Verify"验证域名

---

## 第四步：让 Google 搜索收录您的网站

### 4.1 验证网站所有权

1. 访问 Google Search Console：https://search.google.com/search-console
2. 登录您的 Google 账号
3. 点击"添加资源" → "网址前缀"
4. 输入您的网站地址：`https://siperlogisticsinc.cn`
5. 选择"HTML 标记"验证方式
6. 复制 Google 提供的 meta 标签
7. 编辑 `app/layout.tsx`，在 `<head>` 中添加该标签

示例：
```tsx
<head>
  <meta name="google-site-verification" content="您的验证码" />
</head>
```

8. 在 Google Search Console 中点击"验证"

### 4.2 提交网站地图

创建网站地图文件 `app/sitemap.ts``：

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siperlogisticsinc.cn'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
```

然后在 Google Search Console 中提交网站地图。

### 4.3 手动提交网址

1. 在 Google Search Console 中，点击"网址检查"
2. 输入您的网站首页：`https://siperlogisticsinc.cn`
3. 点击"请求编入索引"
4. 重复此步骤提交其他重要页面

### 4.4 优化 SEO（搜索引擎优化）

为了提高 Google 排名，建议：

1. **添加关键词**：在页面标题、描述、内容中使用相关关键词
   - air freight china
   - sea freight china
   - china to bangladesh logistics
   - china to israel shipping
   - china to africa freight

2. **添加 alt 标签**：为所有图片添加描述性的 alt 属性

3. **创建博客/新闻页面**（可选）：定期更新内容有助于 SEO

4. **添加反向链接**：在其他网站链接到您的网站

5. **确保网站速度快**：Vercel 已经优化了性能

### 4.5 注册 Google Business Profile（可选但推荐）

1. 访问：https://business.google.com
2. 创建商家资料
3. 添加您的公司信息、地址、电话等
4. 这有助于本地搜索排名

---

## 第五步：监控和维护

### 5.1 监控网站性能

在 Vercel 控制台中查看：
- 访问量统计
- 页面加载速度
- 错误日志

### 5.2 Google Search Console

定期查看：
- 搜索查询报告（哪些搜索词带来了流量）
- 索引覆盖率
- 移动设备可用性

### 5.3 更新网站内容

定期更新：
- 公司新闻/博客
- 新增服务
- 价格调整（如有）
- 图片和案例

### 5.4 备份数据

定期备份：
- GitHub 代码仓库
- 上传的图片（在 `public/uploads/` 目录）
- 配置文件

---

## 常见问题

### Q1: 部署后图片不显示怎么办？
A: 检查图片路径是否正确，确保图片已提交到 GitHub。

### Q2: 如何修改网站样式？
A: 编辑 `app/globals.css` 或各页面的 CSS 类名。

### Q3: 域名解析需要多长时间？
A: 通常需要10分钟到24小时，最长可能需要48小时。

### Q4: Google 搜索多久能收录我的网站？
A: 通常需要几天到几周，取决于网站质量和优化程度。

### Q5: 如何联系客户支持？
A: 编辑 `config/contact-info.ts` 中的联系信息，会自动更新到网站上。

---

## 快速检查清单

部署前检查：
- [ ] 已修改所有联系信息
- [ ] 已上传公司图片
- [ ] 已测试所有页面链接
- [ ] 已检查手机端显示效果
- [ ] 已填写 SEO 标题和描述

部署后检查：
- [ ] 网站可以正常访问
- [ ] 域名解析成功
- [ ] 图片全部正常显示
- [ ] 表单功能正常
- [ ] 已提交到 Google Search Console

---

## 联系支持

如果您在修改或部署过程中遇到问题，可以：
1. 查看 Next.js 官方文档：https://nextjs.org/docs
2. 查看 Vercel 文档：https://vercel.com/docs
3. 查看 Google Search Console 帮助：https://support.google.com/webmasters

祝您部署成功！🚀

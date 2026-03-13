# 项目结构说明

```
siper-logistics-website/
│
├── 📁 app/                              # Next.js App Router 页面
│   ├── 📁 about/                        # 关于我们页面
│   │   └── 📄 page.tsx                 # 关于我们页面组件
│   │
│   ├── 📁 admin/                        # 管理后台
│   │   └── 📄 page.tsx                 # 图片上传管理
│   │
│   ├── 📁 contact/                      # 联系页面
│   │   └── 📄 page.tsx                 # 联系表单和信息
│   │
│   ├── 📁 routes/                       # 航线页面
│   │   └── 📄 page.tsx                 # 航线展示
│   │
│   ├── 📁 services/                     # 服务页面
│   │   └── 📄 page.tsx                 # 服务详情
│   │
│   ├── 📄 globals.css                   # 全局样式
│   ├── 📄 layout.tsx                    # 根布局组件
│   └── 📄 page.tsx                      # 首页
│
├── 📁 components/                       # 可重用组件
│   ├── 📄 Navbar.tsx                   # 导航栏组件
│   └── 📄 Footer.tsx                   # 页脚组件
│
├── 📁 config/                          # 配置文件 ⭐
│   ├── 📄 contact-info.ts              # 联系信息配置
│   ├── 📄 services.ts                  # 服务内容配置
│   └── 📄 routes.ts                    # 航线信息配置
│
├── 📁 public/                          # 静态资源
│   └── (上传的图片会放在这里)
│
├── 📄 .gitignore                       # Git 忽略文件
├── 📄 DEPLOYMENT_GUIDE.md             # 部署指南
├── 📄 GET_STARTED_CN.md               # 中文快速开始
├── 📄 next.config.js                  # Next.js 配置
├── 📄 package.json                    # 项目依赖
├── 📄 postcss.config.js               # PostCSS 配置
├── 📄 PROJECT_STRUCTURE.md            # 本文件
├── 📄 QUICK_EDIT_GUIDE.md             # 快速编辑指南
├── 📄 README.md                       # 项目说明
├── 📄 SET_START.md                    # 设置指南
├── 📄 start.bat                       # Windows 启动脚本
├── 📄 start.sh                        # Linux/Mac 启动脚本
├── 📄 tailwind.config.js              # Tailwind CSS 配置
└── 📄 tsconfig.json                   # TypeScript 配置
```

## 📄 文件功能说明

### 核心页面文件

| 文件 | 功能 | 路由 | 说明 |
|------|------|------|------|
| `app/page.tsx` | 首页 | `/` | 网站主页面，包含英雄区、服务概览等 |
| `app/about/page.tsx` | 关于我们 | `/about` | 公司介绍、使命愿景、团队信息 |
| `app/services/page.tsx` | 服务 | `/services` | 空运、海运、附加服务详情 |
| `app/routes/page.tsx` | 航线 | `/routes` | 孟加拉、以色列、非洲航线 |
| `app/contact/page.tsx` | 联系 | `/contact` | 联系表单和联系信息 |
| `app/admin/page.tsx` | 管理 | `/admin` | 图片上传和管理 |

### 组件文件

| 文件 | 功能 | 使用位置 |
|------|------|----------|
| `components/Navbar.tsx` | 导航栏 | 所有页面 |
| `components/Footer.tsx` | 页脚 | 所有页面 |

### 配置文件

| 文件 | 功能 | 编辑建议 |
|------|------|----------|
| `config/contact-info.ts` | 联系信息 | ⭐ 优先编辑 |
| `config/services.ts` | 服务内容 | 根据需要编辑 |
| `config/routes.ts` | 航线信息 | 根据需要编辑 |

### 技术配置文件

| 文件 | 功能 | 说明 |
|------|------|------|
| `package.json` | 依赖管理 | 包含所有 npm 包 |
| `tsconfig.json` | TypeScript 配置 | TypeScript 设置 |
| `tailwind.config.js` | 样式配置 | Tailwind CSS 设置 |
| `next.config.js` | Next.js 配置 | Next.js 设置 |
| `postcss.config.js` | PostCSS 配置 | CSS 处理设置 |

### 文档文件

| 文件 | 功能 | 使用场景 |
|------|------|----------|
| `GET_STARTED_CN.md` | 中文操作指南 | ⭐ 新手必读 |
| `DEPLOYMENT_GUIDE.md` | 部署指南 | 部署时参考 |
| `QUICK_EDIT_GUIDE.md` | 快速编辑指南 | 修改内容时参考 |
| `README.md` | 项目说明 | 了解项目概览 |
| `PROJECT_STRUCTURE.md` | 本文件 | 了解项目结构 |

### 启动脚本

| 文件 | 功能 | 使用方法 |
|------|------|----------|
| `start.bat` | Windows 启动脚本 | 双击运行 |
| `start.sh` | Linux/Mac 启动脚本 | `bash start.sh` |

## 🎯 快速定位

### 想修改联系信息？
→ 打开 `config/contact-info.ts`

### 想修改服务内容？
→ 打开 `config/services.ts`

### 想修改航线信息？
→ 打开 `config/routes.ts`

### 想修改首页内容？
→ 打开 `app/page.tsx`

### 想修改导航菜单？
→ 打开 `components/Navbar.tsx`

### 想修改页脚信息？
→ 打开 `components/Footer.tsx`

### 想添加图片？
→ 访问 `http://localhost:3000/admin`

### 想部署网站？
→ 参考 `GET_STARTED_CN.md`

### 想了解如何部署？
→ 参考 `DEPLOYMENT_GUIDE.md`

## 📊 页面路由图

```
/ (首页)
├── /about (关于我们)
├── /services (服务)
├── /routes (航线)
├── /contact (联系)
└── /admin (管理后台)
```

## 🔧 技术栈说明

### 前端框架
- **Next.js 14** - React 框架
- **React 18** - UI 库
- **TypeScript** - 类型安全

### 样式
- **Tailwind CSS** - 实用优先的 CSS 框架
- **PostCSS** - CSS 处理器

### 动画
- **Framer Motion** - React 动画库

## 🎨 设计系统

### 颜色
- **主色调**: 蓝色渐变 (#2563eb → #1e40af)
- **辅助色**: 白色、灰色系
- **强调色**: 蓝色、绿色（成功状态）

### 字体
- 默认使用系统字体栈
- 可在 `globals.css` 中自定义

### 组件
- **圆角**: rounded-xl, rounded-2xl, rounded-3xl
- **阴影**: shadow-lg, shadow-xl
- **过渡**: duration-200, duration-300

## 📝 代码风格

### 组件结构
```typescript
'use client'  // 如果使用客户端功能

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PageName() {
  // 状态
  const [state, setState] = useState()

  // 事件处理
  const handleSomething = () => {}

  return (
    <div className="min-h-screen bg-white">
      {/* 页面内容 */}
    </div>
  )
}
```

### 样式类命名
- 使用 Tailwind 实用类
- 优先使用语义化的颜色
- 保持一致性

## 🚀 开发流程

### 1. 修改内容
1. 找到对应的配置文件或页面文件
2. 修改代码
3. 保存文件
4. 浏览器自动刷新

### 2. 添加新页面
1. 在 `app/` 下创建新文件夹
2. 创建 `page.tsx` 文件
3. 在 `Navbar.tsx` 添加链接

### 3. 添加新组件
1. 在 `components/` 下创建新文件
2. 导出组件
3. 在页面中导入使用

## 📦 部署流程

### 开发 → 生产
```
本地开发 (npm run dev)
    ↓
本地测试
    ↓
Git 提交
    ↓
推送到 GitHub
    ↓
Vercel 自动部署
    ↓
生产环境
```

## 🎓 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [React 文档](https://react.dev)

---

**需要帮助？**
- 查看 `GET_STARTED_CN.md` 获取操作指南
- 查看 `QUICK_EDIT_GUIDE.md` 获取编辑指南
- 查看 `DEPLOYMENT_GUIDE.md` 获取部署指南

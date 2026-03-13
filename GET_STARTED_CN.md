# 网站上线完整操作步骤

## 📋 操作清单

按照以下顺序完成所有步骤：

---

## ✅ 步骤1：安装 Node.js

### 下载和安装
1. 访问：https://nodejs.org/
2. 点击绿色的 "Download" 按钮
3. 选择 "LTS" 版本（长期支持版，推荐 18.x 或 20.x）
4. 下载 `.msi` 文件（Windows）
5. 双击运行安装程序
6. 点击 "Next" 按照提示完成安装
7. 安装完成后，**重启电脑**

### 验证安装
打开命令提示符（按 Win+R，输入 `cmd`，回车），运行：

```bash
node --version
npm --version
```

如果显示版本号（如 v20.10.0 和 10.x.x），说明安装成功！

---

## ✅ 步骤2：安装依赖和启动服务器

### Windows 用户
1. 打开文件夹：`c:/Users/HUAWEI/WorkBuddy/20260313155948`
2. 双击运行 `start.bat` 文件
3. 等待依赖安装完成（可能需要几分钟）
4. 服务器会自动启动

### 或使用命令行
打开命令提示符，运行：

```bash
cd c:/Users/HUAWEI/WorkBuddy/20260313155948
npm install
npm run dev
```

### 查看网站
在浏览器中打开：**http://localhost:3000**

---

## ✅ 步骤3：查看网站效果

### 测试所有页面
在浏览器中依次访问：

1. **首页**: http://localhost:3000
2. **关于我们**: http://localhost:3000/about
3. **服务**: http://localhost:3000/services
4. **航线**: http://localhost:3000/routes
5. **联系**: http://localhost:3000/contact
6. **管理后台**: http://localhost:3000/admin

### 测试功能
- [ ] 导航菜单可以点击
- [ ] 移动端菜单可以打开/关闭
- [ ] 联系表单可以填写和提交
- [ ] 图片上传功能正常
- [ ] 页面动画流畅
- [ ] 响应式布局正常（调整浏览器窗口大小测试）

---

## ✅ 步骤4：修改联系信息

### 编辑配置文件
打开文件：`config/contact-info.ts`

修改以下内容：

```typescript
export const CONTACT_INFO = {
  company: {
    name: 'Siper Logistics Inc.',           // 改成你的公司名
    domain: 'siperlogisticsinc.cn',           // 域名
    foundedYear: '2010',                     // 成立时间
  },

  contact: {
    phone: '+86 755 1234 5678',             // 改成你的电话
    email: 'info@siperlogisticsinc.cn',      // 改成你的邮箱
    supportEmail: 'support@siperlogisticsinc.cn', // 改成支持邮箱
    address: 'Shenzhen, Guangdong Province, China', // 改成你的地址
  },
}
```

### 应用修改
保存文件后，浏览器会自动刷新，修改立即生效！

---

## ✅ 步骤5：修改服务内容（可选）

### 修改航线信息
打开：`config/routes.ts`

可以修改：
- 航线时间
- 出发地和目的地
- 特别说明

### 修改服务内容
打开：`config/services.ts`

可以修改：
- 服务描述
- 服务特性
- 行业领域

### 详细指南
参考：`QUICK_EDIT_GUIDE.md`

---

## ✅ 步骤6：部署到服务器

### 推荐方式：Vercel（免费且简单）

#### 方法A：使用 GitHub（推荐）

**6.1 创建 GitHub 仓库**
1. 访问 https://github.com
2. 登录或注册账号
3. 点击右上角 "+" → "New repository"
4. 仓库名：`siper-logistics`
5. 点击 "Create repository"

**6.2 上传代码到 GitHub**
在命令提示符中运行：

```bash
cd c:/Users/HUAWEI/WorkBuddy/20260313155948

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 连接到 GitHub（替换为你的用户名）
git remote add origin https://github.com/你的用户名/siper-logistics.git

# 推送代码
git branch -M main
git push -u origin main
```

如果提示需要输入密码，使用 GitHub Personal Access Token：
1. GitHub 设置 → Developer settings → Personal access tokens → Generate new token
2. 勾选 `repo` 权限
3. 生成并复制 token
4. 粘贴作为密码

**6.3 连接到 Vercel**
1. 访问 https://vercel.com
2. 点击 "Sign Up" 或 "Log In"
3. 选择 "Continue with GitHub"
4. 授权 Vercel 访问你的 GitHub

**6.4 导入项目**
1. 在 Vercel 控制台点击 "Add New" → "Project"
2. 找到并点击 `siper-logistics` 仓库
3. 点击 "Import"

**6.5 配置部署**
1. Project Name: `siper-logistics`（或自定义）
2. Framework Preset: `Next.js`（自动检测）
3. 点击 "Deploy"

**6.6 等待部署**
等待约 1-2 分钟，部署完成！你会看到：
- 测试 URL: `https://siper-logistics.vercel.app`
- 生产 URL: 相同

#### 方法B：使用 Vercel CLI

**6.1 安装 Vercel CLI**
```bash
npm install -g vercel
```

**6.2 登录**
```bash
vercel login
```
这会打开浏览器，选择 "Continue with GitHub"

**6.3 部署项目**
```bash
cd c:/Users/HUAWEI/WorkBuddy/20260313155948
vercel
```
按照提示操作，所有选项按默认值即可。

**6.4 部署到生产环境**
```bash
vercel --prod
```

---

## ✅ 步骤7：配置自定义域名

### 在 Vercel 上绑定域名

**7.1 添加域名**
1. 登录 Vercel 控制台
2. 选择你的项目
3. 点击 "Settings" 标签
4. 左侧菜单点击 "Domains"
5. 输入域名：`siperlogisticsinc.cn`
6. 点击 "Add"

**7.2 配置 DNS**
Vercel 会显示需要配置的 DNS 记录，通常是：
```
类型: CNAME
名称: @
值: cname.vercel-dns.com
```

**7.3 到域名注册商配置 DNS**
1. 登录你的域名注册商（如阿里云、腾讯云等）
2. 找到域名管理
3. 添加 CNAME 记录
4. 等待 DNS 生效（通常需要几分钟到几小时）

**7.4 验证**
等待 DNS 生效后，访问 `http://siperlogisticsinc.cn`

---

## ✅ 步骤8：测试上线网站

### 最终测试清单
访问你的网站：`https://siperlogisticsinc.cn`

- [ ] 首页正常显示
- [ ] 所有页面都能访问
- [ ] 导航菜单工作正常
- [ ] 移动端适配正常（用手机访问）
- [ ] 联系表单可以提交
- [ ] 图片正常显示
- [ ] HTTPS 正常工作（绿色锁图标）
- [ ] 页面加载速度正常

---

## 🎉 完成！

恭喜！你的网站已经成功上线！

### 后续维护

**更新内容**
1. 修改对应的配置文件
2. 提交到 GitHub：`git push`
3. Vercel 会自动重新部署

**查看日志**
- 登录 Vercel 控制台
- 选择项目 → "Deployments"
- 查看部署历史和日志

**监控性能**
- 在 Vercel 控制台查看访问统计
- 添加 Google Analytics（参考 `DEPLOYMENT_GUIDE.md`）

---

## 📞 需要帮助？

### 常见问题

**Q: npm install 失败**
A: 检查 Node.js 是否正确安装，尝试重新安装

**Q: 网站打不开**
A: 检查开发服务器是否运行，访问 http://localhost:3000

**Q: Git 推送失败**
A: 检查 GitHub 用户名和密码（使用 Personal Access Token）

**Q: Vercel 部署失败**
A: 查看 Vercel 控制台的错误日志，通常有详细提示

**Q: 域名无法访问**
A: DNS 生效需要时间，通常 10 分钟到 24 小时

### 文档参考
- **快速编辑**: `QUICK_EDIT_GUIDE.md`
- **部署指南**: `DEPLOYMENT_GUIDE.md`
- **设置指南**: `SETUP_GUIDE.md`
- **项目说明**: `README.md`

---

## 📊 项目文件说明

```
siper-logistics-website/
├── app/                    # 网站页面
│   ├── about/             # 关于我们
│   ├── admin/             # 管理后台
│   ├── contact/           # 联系页面
│   ├── routes/            # 航线页面
│   ├── services/          # 服务页面
│   └── page.tsx          # 首页
├── components/            # 组件
│   ├── Navbar.tsx        # 导航栏
│   └── Footer.tsx        # 页脚
├── config/               # 配置文件 ⭐
│   ├── contact-info.ts   # 联系信息
│   ├── services.ts       # 服务内容
│   └── routes.ts         # 航线信息
├── start.bat            # Windows 启动脚本
├── start.sh             # Linux/Mac 启动脚本
├── GET_STARTED_CN.md    # 本文件（中文操作指南）
├── QUICK_EDIT_GUIDE.md  # 快速编辑指南
├── DEPLOYMENT_GUIDE.md  # 部署指南
└── README.md            # 项目说明
```

---

## 💡 重要提示

1. **先测试再部署** - 确保本地测试无误再上线
2. **备份数据** - 修改重要文件前先备份
3. **使用 Git** - 方便追踪修改和回退
4. **定期更新** - 及时更新依赖包保证安全
5. **监控性能** - 定期检查网站性能和安全

---

## 🚀 快速命令参考

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# Git 操作
git add .
git commit -m "描述"
git push

# Vercel 部署
vercel login
vercel
vercel --prod
```

---

**祝你部署顺利！有任何问题随时查看文档或提问。** 🎉

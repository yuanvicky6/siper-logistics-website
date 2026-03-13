# 网站部署详细步骤 - siperlogisticsinc.cn

## 📋 部署前准备检查清单

- [x] 公司信息已更新
- [x] 本地测试正常
- [x] 域名 siperlogisticsinc.cn 已购买
- [ ] 注册 GitHub 账号
- [ ] 注册 Vercel 账号
- [ ] 代码上传到 GitHub
- [ ] 部署到 Vercel
- [ ] 配置域名 DNS
- [ ] 提交 Google 收录

---

## 第一步：准备 Git（5分钟）

### 1.1 检查 Git 是否已安装

打开 PowerShell 或命令提示符，输入：
```bash
git --version
```

如果显示版本号（如 git version 2.x.x），说明已安装。
如果没有安装，访问 https://git-scm.com/download/win 下载安装。

### 1.2 配置 Git

首次使用需要配置用户信息：
```bash
git config --global user.name "您的用户名"
git config --global user.email "您的邮箱"
```

---

## 第二步：注册 GitHub 账号（3分钟）

1. 访问 https://github.com/signup
2. 填写注册信息：
   - Username（用户名）：建议使用 `spider-logistics` 或类似的
   - Email：可以使用您的邮箱 yuanvicky6@gmail.com
   - Password：创建强密码
3. 验证邮箱
4. 完成注册

---

## 第三步：创建 GitHub 仓库（2分钟）

1. 登录 GitHub 后，访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `siper-logistics-website`
   - **Description**: `Official website for Shenzhen Spider Logistics Technology Co., Ltd.`
   - 选择 **Public**（公开）
   - **不要**勾选 "Add a README file"
   - **不要**勾选其他选项
3. 点击 **Create repository** 按钮

创建成功后，您会看到仓库的地址，类似：
```
https://github.com/您的用户名/siper-logistics-website.git
```

---

## 第四步：上传代码到 GitHub（5分钟）

### 4.1 打开项目目录

在 PowerShell 中执行：
```bash
cd c:\Users\HUAWEI\WorkBuddy\20260313155948
```

### 4.2 初始化 Git 仓库

```bash
git init
```

### 4.3 添加所有文件

```bash
git add .
```

### 4.4 提交代码

```bash
git commit -m "Initial commit: Shenzhen Spider Logistics website"
```

### 4.5 连接到 GitHub 仓库

将下面的命令中的 `您的用户名` 替换为实际的 GitHub 用户名：

```bash
git remote add origin https://github.com/您的用户名/siper-logistics-website.git
```

### 4.6 推送代码到 GitHub

```bash
git branch -M main
git push -u origin main
```

**注意**：如果是第一次推送到 GitHub，会弹出登录窗口，输入您的 GitHub 账号密码即可。

推送成功后，访问您的 GitHub 仓库页面，应该能看到所有文件。

---

## 第五步：注册并登录 Vercel（3分钟）

### 5.1 注册 Vercel

1. 访问 https://vercel.com/signup
2. 点击 **Continue with GitHub**（推荐使用 GitHub 账号登录）
3. 授权 Vercel 访问您的 GitHub 账号
4. 填写用户名（建议使用：`spider-logistics`）
5. 选择 **Hobby** 计划（免费）
6. 完成注册

### 5.2 验证邮箱

Vercel 会发送验证邮件到您的邮箱，点击链接验证。

---

## 第六步：部署到 Vercel（3分钟）

### 6.1 导入项目

1. 登录 Vercel 后，点击 **Add New...** → **Project**
2. 在 "Import Git Repository" 部分，找到 `siper-logistics-website`
3. 点击 **Import** 按钮

### 6.2 配置项目

Vercel 会自动识别这是 Next.js 项目，配置如下：

- **Project Name**: `siper-logistics-website`（自动填充）
- **Framework Preset**: Next.js（自动检测）
- **Root Directory**: `./`（保持默认）
- **Build Command**: `npm run build`（自动填充）
- **Output Directory**: `.next`（自动填充）
- **Install Command**: `npm install`（自动填充）

所有配置保持默认，直接点击 **Deploy** 按钮。

### 6.3 等待部署

Vercel 会自动：
1. 安装依赖
2. 构建项目
3. 部署到 CDN

这个过程通常需要 1-3 分钟。

### 6.4 部署完成

部署成功后，您会看到：
- ✅ Build successful
- 🌐 一个免费的临时网址，类似：`https://siper-logistics-website.vercel.app`

点击这个网址，您的网站就上线了！

---

## 第七步：绑定自定义域名（10分钟）

### 7.1 添加域名

1. 在 Vercel 项目页面，点击 **Settings** 标签
2. 左侧菜单点击 **Domains**
3. 在 "Add Domain" 输入框中输入：`siperlogisticsinc.cn`
4. 点击 **Add** 按钮

Vercel 会显示两种配置方式：
- **Option A**: A Record（如果您的域名支持 A 记录）
- **Option B**: CNAME（推荐）

### 7.2 配置 DNS（根据您的域名提供商）

#### 如果您的域名在阿里云：

1. 登录 https://domains.console.aliyun.com/
2. 找到域名 `siperlogisticsinc.cn`
3. 点击 **解析**
4. 添加以下 DNS 记录：

**记录1**:
- 记录类型：`CNAME`
- 主机记录：`@`
- 记录值：`cname.vercel-dns.com`
- TTL：`600`

**记录2**:
- 记录类型：`CNAME`
- 主机记录：`www`
- 记录值：`cname.vercel-dns.com`
- TTL：`600`

#### 如果您的域名在腾讯云：

1. 登录 https://console.cloud.tencent.com/cns
2. 找到域名 `siperlogisticsinc.cn`
3. 点击 **解析**
4. 添加记录：

**记录1**:
- 主机记录：`@`
- 记录类型：`CNAME`
- 线路类型：`默认`
- 记录值：`cname.vercel-dns.com`
- TTL：`600`

**记录2**:
- 主机记录：`www`
- 记录类型：`CNAME`
- 线路类型：`默认`
- 记录值：`cname.vercel-dns.com`
- TTL：`600`

#### 如果您的域名在其他平台：

请使用以下信息配置：
```
类型：CNAME
主机记录：@
记录值：cname.vercel-dns.com

类型：CNAME
主机记录：www
记录值：cname.vercel-dns.com
```

### 7.3 验证域名

1. 回到 Vercel 的 Domains 页面
2. 等待 1-2 分钟后，点击 **Refresh** 按钮
3. 当状态显示为 ✅ **Valid Configuration** 时，说明配置成功

### 7.4 测试域名

在浏览器中访问：
- `https://siperlogisticsinc.cn`
- `https://www.siperlogisticsinc.cn`

两个都应该能正常访问您的网站！

**注意**：DNS 生效通常需要 10 分钟到 2 小时，最长可能需要 48 小时。如果立即访问不了，请耐心等待。

---

## 第八步：启用 HTTPS（自动完成）

Vercel 会自动为您的域名配置 SSL 证书（HTTPS），无需手动操作。
证书通常在域名验证后 1-24 小时内签发。

---

## 第九步：提交 Google 搜索收录（15分钟）

### 9.1 添加网站到 Google Search Console

1. 访问 https://search.google.com/search-console
2. 登录您的 Google 账号（如果没有需要注册）
3. 点击 **添加资源**
4. 选择 **网址前缀**
5. 输入：`https://siperlogisticsinc.cn`
6. 点击 **继续**

### 9.2 验证网站所有权

**推荐方法：HTML 标记**

1. 在验证方式中选择 **HTML 标记**
2. 复制显示的 meta 标签，类似：
   ```html
   <meta name="google-site-verification" content="您的验证码" />
   ```

3. 编辑项目中的 `app/layout.tsx` 文件，在 `<head>` 中添加这个标签：
   ```tsx
   <head>
     <meta name="google-site-verification" content="您的验证码" />
   </head>
   ```

4. 保存文件

5. 将修改后的代码推送到 GitHub：
   ```bash
   cd c:\Users\HUAWEI\WorkBuddy\20260313155948
   git add .
   git commit -m "Add Google site verification"
   git push
   ```

6. 等待 Vercel 自动部署完成后（约1分钟）

7. 回到 Google Search Console，点击 **验证**

验证成功后，您就可以开始提交网站地图了。

### 9.3 提交网站地图

我已经为您创建了网站地图文件 `app/sitemap.ts`，Vercel 会自动生成。

在 Google Search Console 中：
1. 点击左侧菜单的 **网站地图**
2. 在"添加新的网站地图"输入框中输入：`sitemap.xml`
3. 点击 **提交**

### 9.4 手动请求索引

1. 在 Google Search Console 中，点击 **网址检查**
2. 输入：`https://siperlogisticsinc.cn`
3. 点击 **请求编入索引**
4. 重复此步骤提交其他重要页面：
   - `https://siperlogisticsinc.cn/contact`
   - `https://siperlogisticsinc.cn/services`
   - `https://siperlogisticsinc.cn/routes`

---

## 🎉 部署完成！

您的网站现在已经：
- ✅ 部署到 Vercel（免费托管）
- ✅ 绑定域名 siperlogisticsinc.cn
- ✅ 启用 HTTPS（SSL 证书）
- ✅ 提交到 Google 搜索收录

### 访问您的网站：
- **主域名**: https://siperlogisticsinc.cn
- **带 www**: https://www.siperlogisticsinc.cn

### 后续维护：

1. **更新内容**：
   - 修改 `config/` 目录下的配置文件
   - 推送到 GitHub，Vercel 会自动部署

2. **查看访问统计**：
   - Vercel Dashboard - Analytics
   - Google Search Console - 性能报告

3. **定期检查**：
   - 网站正常运行
   - Google 收录情况
   - 域名续费

---

## 🆘 常见问题

### Q1: Git push 失败，提示身份验证失败
A: GitHub 现在使用 Personal Access Token，需要：
1. 访问 GitHub Settings → Developer settings → Personal access tokens
2. 生成新 token
3. 使用 token 作为密码

### Q2: DNS 配置后无法访问
A: DNS 生效需要时间，通常 10 分钟到 2 小时，最多 48 小时。可以等待后重试。

### Q3: Vercel 部署失败
A: 检查：
- 代码是否成功推送到 GitHub
- Next.js 版本是否兼容
- 查看 Vercel 的错误日志

### Q4: Google 搜索不到我的网站
A: 正常情况，Google 收录需要几天到几周时间。继续更新内容有助于提高排名。

---

## 📞 需要帮助？

如果在部署过程中遇到问题：
- 查看 Vercel 文档：https://vercel.com/docs
- 查看 GitHub 文档：https://docs.github.com
- 查看 Google Search Console 帮助：https://support.google.com/webmasters

祝您部署成功！🚀

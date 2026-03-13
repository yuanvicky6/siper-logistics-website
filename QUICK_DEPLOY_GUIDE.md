# 快速部署指南 - Shenzhen Spider Logistics

## 🚀 完整部署步骤（约30分钟）

### 第一步：找到并打开 Git（5分钟）

#### 方法A：使用 Git Bash（推荐）

1. 按 `Win + R` 键，输入 `git bash`，回车
2. 如果弹出 Git Bash 窗口，说明 Git 已正确安装
3. 在 Git Bash 中执行以下命令

#### 方法B：使用 GitHub Desktop

1. 如果安装了 GitHub Desktop，打开它
2. 使用 GitHub Desktop 的图形界面操作

#### 方法C：配置 Git PATH

如果找不到 Git，需要配置环境变量：
1. 找到 Git 安装目录（通常在 `C:\Program Files\Git\bin`）
2. 右键"此电脑" → 属性 → 高级系统设置 → 环境变量
3. 在"系统变量"中找到 `Path`，点击"编辑"
4. 点击"新建"，添加 Git 的 bin 路径
5. 重启命令提示符

---

### 第二步：创建 GitHub 仓库（3分钟）

#### 2.1 登录 GitHub

1. 访问 https://github.com/login
2. 输入您的邮箱：`yuanvicky6@gmail.com`
3. 输入密码

#### 2.2 创建新仓库

1. 登录后，点击右上角的 `+` 号，选择 `New repository`
2. 填写仓库信息：

   ```
   Repository name: siper-logistics-website
   Description: Official website for Shenzhen Spider Logistics Technology Co., Ltd.
   Public ☑️ (勾选，选择公开)
   ```

3. **不要**勾选以下选项：
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license

4. 点击绿色按钮 `Create repository`

创建成功后，复制仓库的 HTTPS 地址，类似：
```
https://github.com/yuanvicky6/siper-logistics-website.git
```

---

### 第三步：上传代码到 GitHub（10分钟）

#### 3.1 打开命令行

使用 Git Bash 或 PowerShell，进入项目目录：

```bash
cd /c/Users/HUAWEI/WorkBuddy/20260313155948
```

#### 3.2 配置 Git 用户信息

```bash
git config --global user.name "yuanvicky6"
git config --global user.email "yuanvicky6@gmail.com"
```

#### 3.3 初始化 Git 仓库

```bash
git init
```

#### 3.4 添加所有文件

```bash
git add .
```

#### 3.5 提交代码

```bash
git commit -m "Initial commit: Shenzhen Spider Logistics website"
```

#### 3.6 连接到 GitHub 仓库

```bash
git remote add origin https://github.com/yuanvicky6/siper-logistics-website.git
```

#### 3.7 推送代码

```bash
git branch -M main
git push -u origin main
```

**注意**：如果提示需要身份验证，GitHub 现在使用 Personal Access Token：
1. 访问 https://github.com/settings/tokens
2. 点击 `Generate new token (classic)`
3. 勾选 `repo` 权限
4. 点击 `Generate token`
5. 复制生成的 token
6. 推送时，用户名输入您的 GitHub 用户名，密码输入 token

---

### 第四步：部署到 Vercel（5分钟）

#### 4.1 注册 Vercel

1. 访问 https://vercel.com/signup
2. 点击 `Continue with GitHub`
3. 使用 GitHub 账号登录
4. 填写用户名：`spider-logistics`（或您喜欢的）
5. 选择 `Hobby` 计划（免费）
6. 完成注册

#### 4.2 导入项目

1. 登录后，点击 `Add New...` → `Project`
2. 在仓库列表中找到 `siper-logistics-website`
3. 点击 `Import` 按钮
4. 点击 `Deploy` 按钮

等待 1-3 分钟，部署完成！

部署成功后，您会得到一个网址，类似：
```
https://siper-logistics-website.vercel.app
```

点击访问，网站已经上线了！

---

### 第五步：绑定域名（10分钟）

#### 5.1 添加域名

1. 在 Vercel 项目页面，点击 `Settings` → `Domains`
2. 在输入框中输入：`siperlogisticsinc.cn`
3. 点击 `Add` 按钮

#### 5.2 配置 DNS

登录您的域名管理平台（阿里云、腾讯云或其他），添加以下 DNS 记录：

**记录 1：**
```
类型：CNAME
主机记录：@
记录值：cname.vercel-dns.com
TTL：600
```

**记录 2：**
```
类型：CNAME
主机记录：www
记录值：cname.vercel-dns.com
TTL：600
```

#### 5.3 验证配置

1. 回到 Vercel 的 Domains 页面
2. 点击 `Refresh` 按钮
3. 等待 1-2 分钟
4. 当状态显示为 ✅ **Valid Configuration** 时，配置成功

#### 5.4 测试访问

在浏览器中访问：
- https://siperlogisticsinc.cn
- https://www.siperlogisticsinc.cn

如果都能正常访问，恭喜您，网站部署成功！🎉

---

## 🎉 部署完成！

您的网站现在已经：
- ✅ 部署到 Vercel（免费托管）
- ✅ 绑定域名 siperlogisticsinc.cn
- ✅ 启用 HTTPS（SSL 证书自动配置）
- ✅ 全球 CDN 加速
- ✅ 自动部署（代码更新后自动上线）

---

## 📱 后续维护

### 更新网站内容

1. 修改项目文件（如 config/contact-info.ts）
2. 提交并推送到 GitHub：
   ```bash
   git add .
   git commit -m "Update contact info"
   git push
   ```
3. Vercel 会自动部署更新

### 查看访问统计

- Vercel Dashboard → Analytics
- 查看访问量、页面浏览量等

---

## 🆘 常见问题

### Q1: 找不到 git 命令
A: 使用 Git Bash（按 Win+R，输入 git bash）

### Q2: Git push 失败
A: GitHub 现在使用 Personal Access Token，需要生成 token 作为密码

### Q3: DNS 配置后无法访问
A: DNS 生效需要时间，等待 10 分钟到 2 小时

### Q4: Vercel 部署失败
A: 检查代码是否成功推送到 GitHub，查看 Vercel 的错误日志

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 DEPLOY_STEPS.md 详细文档
2. 查看 Vercel 文档：https://vercel.com/docs
3. 查看 GitHub 文档：https://docs.github.com

祝您部署成功！🚀

# 快速编辑指南 - Siper Logistics Website

## 📝 如何修改网站内容

### 1. 修改联系信息

**文件位置**: `config/contact-info.ts`

打开这个文件，修改以下信息：

```typescript
export const CONTACT_INFO = {
  company: {
    name: 'Siper Logistics Inc.',           // 公司名称
    domain: 'siperlogisticsinc.cn',           // 域名
    foundedYear: '2010',                     // 成立时间
  },

  contact: {
    phone: '+86 755 1234 5678',             // 电话号码
    email: 'info@siperlogisticsinc.cn',      // 主邮箱
    supportEmail: 'support@siperlogisticsinc.cn', // 支持邮箱
    address: 'Shenzhen, Guangdong Province, China', // 地址
  },

  workingHours: {
    weekday: '9:00 AM - 6:00 PM',          // 工作日时间
    saturday: '10:00 AM - 2:00 PM',        // 周六时间
    sunday: 'Closed',                        // 周日
  },
}
```

**修改后保存文件，网站会自动更新**

---

### 2. 修改服务内容

**文件位置**: `config/services.ts`

#### 修改空运服务
```typescript
export const AIR_FREIGHT_SERVICES = {
  title: 'Air Freight Services',
  description: '修改这里的描述文字...',
  features: [
    '特性1',
    '特性2',
    // 添加或删除特性
  ],
  routes: [
    { from: '出发地', to: '目的地', time: '运输时间' },
    // 添加或修改路线
  ],
}
```

#### 修改海运服务
```typescript
export const SEA_FREIGHT_SERVICES = {
  // 同上
}
```

#### 修改附加服务
```typescript
export const ADDITIONAL_SERVICES = [
  {
    icon: '📋',  // 可以替换为其他表情符号
    title: '服务名称',
    description: '服务描述',
    features: ['特性1', '特性2', '特性3'],
  },
  // 添加或删除服务
]
```

---

### 3. 修改航线信息

**文件位置**: `config/routes.ts`

#### 修改孟加拉航线
```typescript
export const ROUTES = {
  bangladesh: {
    title: 'Bangladesh Routes',
    description: '航线描述',
    routes: [
      {
        from: '出发地机场/港口',
        to: '目的地机场/港口',
        airTime: '空运时间（如：3-5 days）',
        seaTime: '海运时间（如：15-20 days）',
        frequency: '航班频率',
      },
      // 添加或修改路线
    ],
    specialNotes: [
      '特别说明1',
      '特别说明2',
    ],
  },
  // 以色列和非洲航线类似
}
```

---

### 4. 修改页面文字内容

如果你想修改特定页面的文字内容，直接编辑对应的页面文件：

#### 首页
**文件**: `app/page.tsx`
- 英雄区标题和描述
- 统计数据
- 服务卡片内容

#### 关于我们
**文件**: `app/about/page.tsx`
- 公司故事
- 使命和愿景
- 核心价值观
- 团队信息

#### 服务页
**文件**: `app/services/page.tsx`
- 服务详情
- 行业专业领域

#### 航线页
**文件**: `app/routes/page.tsx`
- 航线展示表格
- 特别说明

#### 联系页
**文件**: `app/contact/page.tsx`
- 表单字段
- 常见问题

---

### 5. 修改导航栏

**文件**: `components/Navbar.tsx`

找到这一行修改导航菜单：
```typescript
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Routes', href: '/routes' },
  { name: 'Contact', href: '/contact' },
]
```

修改 `name` 可以改变菜单文字
修改 `href` 可以改变链接地址

---

### 6. 修改页脚

**文件**: `components/Footer.tsx`

可以修改：
- 公司名称
- 社交媒体链接
- 快速链接
- 服务列表
- 联系信息

---

### 7. 修改颜色主题

**文件**: `tailwind.config.js`

修改颜色配置：
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',  // 最浅的蓝色
        100: '#dbeafe',
        // ... 其他色阶
        600: '#2563eb',  // 主色调
        900: '#1e3a8a',  // 最深的蓝色
      },
    },
  },
}
```

如果想换成其他颜色，可以用这个工具生成色阶：
https://uicolors.app/create

---

### 8. 添加图片

#### 方法1：使用管理后台
1. 访问 `http://localhost:3000/admin`
2. 点击上传区域选择图片
3. 点击"Upload Image"按钮

#### 方法2：手动添加
1. 将图片放入 `public/` 文件夹
2. 在代码中使用：
```typescript
import Image from 'next/image'

<Image src="/你的图片名称.jpg" alt="描述" width={800} height={600} />
```

---

### 9. 常见修改场景

#### 场景1：修改公司logo
1. 将logo图片放入 `public/` 文件夹
2. 编辑 `components/Navbar.tsx`
3. 找到 logo 部分，替换为你的logo

#### 场景2：修改统计数据
编辑 `config/contact-info.ts` 中的 `statistics` 部分

#### 场景3：添加新的航线
编辑 `config/routes.ts`，在对应国家的 `routes` 数组中添加新对象

#### 场景4：修改FAQ问题
编辑 `app/contact/page.tsx` 中的 `faqs` 数组

---

### 10. 测试修改

每次修改后：
1. 保存文件
2. 浏览器会自动刷新（开发模式下）
3. 检查修改是否正确显示

---

### 11. 备份建议

在修改重要文件前：
1. 复制原文件作为备份
2. 或者使用 Git 进行版本控制

---

## 🆘 遇到问题？

### 网站显示错误
- 检查文件语法是否正确
- 确保所有引号都闭合
- 检查逗号是否正确

### 修改不生效
- 确保保存了文件
- 刷新浏览器（Ctrl+F5 强制刷新）
- 检查开发服务器是否正在运行

### 样式不正确
- 检查 Tailwind 类名是否正确
- 确认文件保存后重新加载

---

## 💡 小贴士

1. **使用VS Code编辑器** - 有语法高亮和自动完成
2. **保存前预览** - 可以在VS Code中安装Tailwind CSS IntelliSense插件
3. **逐步修改** - 一次只修改一个部分，测试后再继续
4. **使用Git** - 可以随时回退到之前的版本

---

需要帮助？查看 `SETUP_GUIDE.md` 获取更多详细信息。

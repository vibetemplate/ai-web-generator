# 公司官网示例 - VibeGen

这是一个使用智能网站生成器创建的现代化公司官网示例。展示了如何为科技公司创建专业、现代的企业网站。

## 📋 网站特点

- **现代化设计** - 渐变背景、卡片式布局、动画效果
- **响应式设计** - 适配所有设备和屏幕尺寸
- **SEO优化** - 完整的元数据和结构化数据
- **性能优化** - 图片懒加载、代码分割、CDN加速
- **用户体验** - 流畅的交互和直观的导航

## 🎨 包含的页面模块

### ✅ 已启用的模块

1. **Hero 首屏** - 渐变背景，突出主要价值主张
2. **Features 功能特性** - 3列网格布局展示核心功能
3. **About 关于我们** - 公司介绍和数据统计
4. **Pricing 定价方案** - 3种定价方案对比
5. **Testimonials 用户评价** - 客户反馈和评价
6. **FAQ 常见问题** - 常见问题解答
7. **Contact 联系我们** - 联系表单和公司信息

### ❌ 未启用的模块

- **Team 团队成员** - 可根据需要启用
- **Blog 博客** - 可根据需要启用

## 🛠️ 技术栈

- **框架**: Next.js 14
- **UI组件**: Tailwind CSS + shadcn/ui
- **语言**: TypeScript
- **部署**: Vercel
- **分析**: Google Analytics

## 🚀 快速使用

### 方法1：AI生成（推荐）

将以下提示词复制到Cursor或Claude Code中：

```
我想基于这个公司官网示例生成代码。请阅读配置文件：
https://github.com/vibetemplate/vibetemplate/tree/master/web/examples/company-website/website-config.json

按照网站生成器规范生成完整的Next.js项目代码。
```

### 方法2：手动创建

1. 复制配置文件到你的项目根目录
2. 运行网站生成器工具
3. 按照生成的代码进行开发

## ⚙️ 配置说明

### 关键配置项

```json
{
  "website": {
    "type": "company",           // 网站类型：公司官网
    "title": "VibeGen - AI驱动的开发工具"
  },
  "business": {
    "industry": "technology",    // 行业：科技
    "tagline": "AI驱动的下一代开发工具"
  },
  "design": {
    "theme": "modern",          // 主题：现代化
    "colors": {
      "primary": "#6366f1",     // 主色：蓝紫色
      "secondary": "#8b5cf6"    // 辅助色：紫色
    }
  }
}
```

### 自定义修改

1. **公司信息**：修改 `business` 部分的公司名称、标语、联系方式
2. **功能特性**：在 `sections.features.items` 中添加或修改功能点
3. **定价方案**：调整 `sections.pricing.plans` 中的价格和功能
4. **设计风格**：修改 `design.colors` 和 `design.theme`
5. **联系信息**：更新 `business.contact` 中的联系方式

## 📁 生成的项目结构

```
company-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx          # 首页
│   ├── globals.css       # 全局样式
│   └── components/       # 页面组件
├── components/            # 可复用组件
│   ├── ui/               # UI基础组件
│   ├── Hero.tsx          # 首屏组件
│   ├── Features.tsx      # 功能特性组件
│   ├── Pricing.tsx       # 定价组件
│   └── Contact.tsx       # 联系组件
├── lib/                  # 工具函数
├── public/               # 静态资源
│   ├── images/          # 图片文件
│   └── icons/           # 图标文件
├── styles/              # 样式文件
├── package.json         # 项目依赖
├── tailwind.config.js   # Tailwind配置
├── next.config.js       # Next.js配置
└── website-config.json  # 网站配置
```

## 🎯 使用场景

这个示例适合以下类型的公司：

- 🏢 **科技公司** - SaaS产品、开发工具、AI服务
- 🚀 **初创企业** - 展示产品和团队
- 💼 **B2B服务** - 专业服务、咨询公司
- 🛠️ **工具产品** - 开发工具、设计工具

## 🔧 进一步定制

### 添加新功能模块

1. 在配置文件中启用模块：
```json
{
  "sections": {
    "team": { "enabled": true },
    "blog": { "enabled": true }
  }
}
```

2. 重新生成代码或手动添加组件

### 修改设计风格

1. 更改主题：
```json
{
  "design": {
    "theme": "minimal",  // 改为极简风格
    "colors": {
      "primary": "#000000"  // 改为黑色主题
    }
  }
}
```

### 集成第三方服务

1. 添加分析工具：
```json
{
  "website": {
    "analytics": {
      "google_analytics": "G-YOUR-ID"
    }
  }
}
```

## 📞 技术支持

如果在使用过程中遇到问题：

1. 查看[完整文档](../../docs/)
2. 参考[最佳实践指南](../../docs/最佳实践.md)
3. 在[GitHub Issues](https://github.com/vibetemplate/vibetemplate/issues)提交问题

## 📄 许可证

MIT License - 可自由使用和修改
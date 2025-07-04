# 智能网站生成器 🚀

> 借鉴DXT设计理念，为AI工具提供标准化的网站生成模板和规范

一个专为Cursor、Claude Code等AI开发工具设计的网站生成器库。用户只需复制标准提示词，AI即可自动生成完整的现代化网站代码。

## ✨ 核心特性

- 🎯 **标准化提示词** - 一键复制，AI直接理解
- 📋 **结构化配置** - JSON驱动的网站定义
- 🎨 **丰富模板** - 公司官网、作品集、餐厅、博客等
- ⚡ **现代技术栈** - Next.js 14 + TypeScript + Tailwind CSS
- 🚀 **即用即部署** - 生成即可部署到Vercel/Netlify

## 🚀 快速开始

### 1. 复制AI提示词

将以下提示词复制到Cursor、Claude Code或其他AI工具中：

```
我想生成一个现代化的网站。请按照以下步骤操作：

1. **仔细阅读规范文档：**
   - https://github.com/vibetemplate/ai-web-generator/blob/main/README.md - 网站生成器概述和架构模式
   - https://github.com/vibetemplate/ai-web-generator/blob/main/WEBSITE-SPEC.md - 完整的网站配置规范和字段定义
   - https://github.com/vibetemplate/ai-web-generator/blob/main/examples - 参考实现，包括公司官网、作品集、餐厅等示例

2. **创建合适的网站结构：**
   - 根据WEBSITE-SPEC.md生成有效的website-config.json配置文件
   - 实现现代化的React/Next.js网站，包含合理的组件结构
   - 包含SEO优化、性能优化和响应式设计

3. **遵循最佳开发实践：**
   - 使用现代技术栈 (Next.js 14, Tailwind CSS, TypeScript)
   - 组件结构清晰，关注点分离
   - 包含适当的错误处理、加载状态和无障碍设计
   - 添加完整的文档和部署说明

4. **生成生产级代码：**
   - 验证所有组件正确渲染
   - 确保响应式设计在所有设备上正常工作
   - 包含Vercel/Netlify的部署配置

请生成完整的、可立即部署的网站代码。专注于现代设计、干净的代码和遵循Web开发最佳实践。
```

### 2. 与AI交互

AI会自动：
1. 📖 读取项目规范和示例
2. 🤖 询问你的网站需求
3. ⚙️ 生成website-config.json配置
4. 💻 创建完整的网站代码
5. 📝 提供部署说明

### 3. 部署上线

生成的代码包含完整的部署配置，支持：
- ▲ **Vercel** - 推荐，零配置部署
- 🌐 **Netlify** - 简单快速
- 🐳 **Docker** - 容器化部署

## 📁 项目结构

```
web/
├── README.md                    # 项目介绍+AI提示词模板
├── WEBSITE-SPEC.md             # 网站配置规范文档
├── AI-PROMPT-TEMPLATE.md       # 标准AI提示词模板
├── schemas/
│   └── website-config.schema.json  # JSON Schema验证
├── examples/                   # 示例项目
│   ├── company-website/        # 🏢 公司官网示例
│   ├── personal-portfolio/     # 👨‍💻 个人作品集示例  
│   ├── restaurant-website/     # 🍽️ 餐厅网站示例
│   └── blog-website/          # 📝 博客网站示例
├── templates/                  # 组件模板库
│   ├── components/            # React组件模板
│   ├── layouts/               # 布局模板
│   └── styles/                # 样式模板
└── docs/                      # 详细文档
    ├── 快速开始.md
    ├── 配置说明.md
    └── 最佳实践.md
```

## 🎨 支持的网站类型

| 类型 | 描述 | 适用场景 | 示例 |
|------|------|----------|------|
| 🏢 **公司官网** | 现代化企业展示网站 | 科技公司、初创企业 | [查看示例](examples/company-website/) |
| 👨‍💻 **个人作品集** | 专业的个人品牌网站 | 设计师、开发者 | [查看示例](examples/personal-portfolio/) |
| 🍽️ **餐厅网站** | 餐饮业展示网站 | 餐厅、咖啡厅 | [查看示例](examples/restaurant-website/) |
| 📝 **博客网站** | 内容驱动的博客 | 个人博客、技术分享 | [查看示例](examples/blog-website/) |

## ⚙️ 配置示例

```json
{
  "website": {
    "name": "vibegen-official",
    "type": "company",
    "title": "VibeGen - AI驱动的开发工具",
    "description": "让每个人都能轻松创建应用"
  },
  "business": {
    "name": "VibeGen",
    "tagline": "AI驱动的下一代开发工具",
    "industry": "technology",
    "contact": {
      "email": "hello@vibegen.com",
      "phone": "+86 138-0013-8000"
    }
  },
  "sections": {
    "hero": { "enabled": true, "style": "gradient" },
    "features": { "enabled": true, "layout": "grid" },
    "pricing": { "enabled": true },
    "contact": { "enabled": true }
  },
  "design": {
    "theme": "modern",
    "primary_color": "#6366f1",
    "layout": "single-page"
  }
}
```

## 🛠️ 技术栈

- ⚛️ **React 18** - 现代化UI库
- 🎯 **Next.js 14** - 全栈React框架
- 🎨 **Tailwind CSS** - 实用优先的CSS框架
- 🧩 **shadcn/ui** - 高质量组件库
- 📝 **TypeScript** - 类型安全
- 🚀 **Vercel** - 零配置部署

## 📖 详细文档

- 📋 [网站配置规范](WEBSITE-SPEC.md) - 完整的配置字段说明
- 🚀 [快速开始指南](docs/快速开始.md) - 详细使用教程
- ⚙️ [配置说明](docs/配置说明.md) - 高级配置选项
- 🎯 [最佳实践](docs/最佳实践.md) - 开发建议和技巧

## 🤝 贡献

欢迎贡献新的模板、示例或改进建议！

1. Fork 项目
2. 创建功能分支
3. 提交改动
4. 发起 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙋‍♂️ 支持

- 📧 Email: support@vibegen.com
- 💬 GitHub Issues: [提交问题](https://github.com/vibetemplate/vibetemplate/issues)
- 📖 文档: [在线文档](https://docs.vibegen.com)

---

> 💡 **提示**: 这个项目借鉴了Anthropic DXT的设计理念，通过标准化的规范和模板，让AI工具能够快速生成高质量的网站代码。
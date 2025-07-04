# 网站配置规范 (Website Specification)

**版本**: 1.0  
**最后更新**: 2025-07-04

## 概述

`website-config.json` 文件是网站生成器的核心配置文件，包含网站的所有元数据和配置信息。该文件采用声明式配置，AI工具可以基于此规范生成完整的网站代码。

## 基础配置格式

一个最基本的 `website-config.json` 配置如下：

```json
{
  "spec_version": "1.0",
  "website": {
    "name": "my-website",
    "type": "company",
    "title": "我的公司",
    "description": "专业的企业服务"
  },
  "business": {
    "name": "我的公司",
    "tagline": "专业、可靠、创新"
  },
  "sections": {
    "hero": { "enabled": true },
    "contact": { "enabled": true }
  },
  "tech_stack": {
    "framework": "next.js",
    "ui_library": "tailwind-shadcn"
  }
}
```

## 完整配置示例

```json
{
  "spec_version": "1.0",
  "website": {
    "name": "vibegen-official",
    "type": "company",
    "title": "VibeGen - AI驱动的开发工具",
    "description": "让每个人都能轻松创建应用",
    "domain": "vibegen.com",
    "language": "zh-CN",
    "analytics": {
      "google_analytics": "G-XXXXXXXXXX",
      "plausible": false
    }
  },
  "business": {
    "name": "VibeGen",
    "tagline": "AI驱动的下一代开发工具",
    "industry": "technology",
    "founded": "2024",
    "description": "我们致力于让每个人都能轻松创建应用，无论技术背景如何。",
    "logo": {
      "light": "/images/logo-light.svg",
      "dark": "/images/logo-dark.svg"
    },
    "contact": {
      "email": "hello@vibegen.com",
      "phone": "+86 138-0013-8000",
      "address": "北京市朝阳区科技园区",
      "social": {
        "github": "https://github.com/vibegen",
        "twitter": "https://twitter.com/vibegen",
        "linkedin": "https://linkedin.com/company/vibegen"
      }
    }
  },
  "sections": {
    "hero": {
      "enabled": true,
      "style": "gradient",
      "layout": "center",
      "background": {
        "type": "gradient",
        "colors": ["#6366f1", "#8b5cf6"]
      },
      "content": {
        "headline": "AI驱动的下一代开发工具",
        "subtitle": "让每个人都能轻松创建应用，无论技术背景如何",
        "cta_primary": {
          "text": "立即体验",
          "href": "#features",
          "style": "primary"
        },
        "cta_secondary": {
          "text": "了解更多",
          "href": "#about",
          "style": "outline"
        }
      },
      "media": {
        "type": "image",
        "src": "/images/hero-dashboard.png",
        "alt": "VibeGen产品界面"
      }
    },
    "features": {
      "enabled": true,
      "layout": "grid",
      "columns": 3,
      "title": "核心功能",
      "subtitle": "强大的功能，简单的使用",
      "items": [
        {
          "title": "AI驱动生成",
          "description": "基于先进的AI技术，智能生成高质量代码",
          "icon": "🤖",
          "color": "#6366f1"
        },
        {
          "title": "零技术门槛",
          "description": "直观的界面设计，非程序员也能轻松上手",
          "icon": "🎯",
          "color": "#8b5cf6"
        },
        {
          "title": "一键部署",
          "description": "集成主流部署平台，项目生成即可上线",
          "icon": "🚀",
          "color": "#06b6d4"
        }
      ]
    },
    "about": {
      "enabled": true,
      "title": "关于我们",
      "content": "VibeGen致力于降低应用开发的门槛，让每个人都能实现自己的创意想法。",
      "image": "/images/team.jpg",
      "stats": [
        { "number": "10K+", "label": "用户数量" },
        { "number": "50K+", "label": "生成项目" },
        { "number": "99.9%", "label": "成功率" }
      ]
    },
    "pricing": {
      "enabled": true,
      "title": "定价方案",
      "subtitle": "灵活的定价，满足不同需求",
      "plans": [
        {
          "name": "免费版",
          "price": "¥0",
          "period": "永久",
          "description": "适合个人学习和小项目",
          "features": [
            "每月3个项目",
            "基础模板",
            "社区支持"
          ],
          "cta": "立即开始",
          "popular": false
        },
        {
          "name": "专业版",
          "price": "¥99",
          "period": "月",
          "description": "适合专业开发者和小团队",
          "features": [
            "无限项目",
            "所有模板",
            "优先支持",
            "高级功能"
          ],
          "cta": "选择专业版",
          "popular": true
        }
      ]
    },
    "team": {
      "enabled": false,
      "title": "团队成员",
      "members": []
    },
    "testimonials": {
      "enabled": true,
      "title": "用户评价",
      "items": [
        {
          "content": "VibeGen让我在30分钟内就创建了一个专业的公司官网，太神奇了！",
          "author": "张三",
          "role": "创业者",
          "avatar": "/images/testimonial-1.jpg"
        }
      ]
    },
    "blog": {
      "enabled": false
    },
    "faq": {
      "enabled": true,
      "title": "常见问题",
      "items": [
        {
          "question": "VibeGen适合非程序员使用吗？",
          "answer": "是的，VibeGen专为非程序员设计，提供直观的界面和智能的生成功能。"
        }
      ]
    },
    "contact": {
      "enabled": true,
      "title": "联系我们",
      "subtitle": "有问题？我们随时为您解答",
      "form": {
        "enabled": true,
        "fields": ["name", "email", "message"]
      },
      "info": {
        "enabled": true,
        "address": "北京市朝阳区科技园区",
        "phone": "+86 138-0013-8000",
        "email": "hello@vibegen.com"
      }
    }
  },
  "design": {
    "theme": "modern",
    "layout": "single-page",
    "colors": {
      "primary": "#6366f1",
      "secondary": "#8b5cf6",
      "accent": "#06b6d4",
      "background": "#ffffff",
      "text": "#1f2937"
    },
    "typography": {
      "font_family": "Inter",
      "headings": "Space Grotesk"
    },
    "spacing": "comfortable",
    "border_radius": "medium",
    "animations": true
  },
  "tech_stack": {
    "framework": "next.js",
    "ui_library": "tailwind-shadcn",
    "deployment": "vercel",
    "analytics": "google-analytics",
    "cms": "none"
  },
  "seo": {
    "meta_title": "VibeGen - AI驱动的开发工具",
    "meta_description": "让每个人都能轻松创建应用的AI开发工具",
    "keywords": ["AI", "开发工具", "网站生成", "应用开发"],
    "open_graph": {
      "title": "VibeGen - AI驱动的开发工具",
      "description": "让每个人都能轻松创建应用",
      "image": "/images/og-image.jpg"
    },
    "structured_data": true
  },
  "performance": {
    "lazy_loading": true,
    "image_optimization": true,
    "code_splitting": true,
    "caching": "aggressive"
  },
  "security": {
    "https_only": true,
    "content_security_policy": true,
    "xss_protection": true
  }
}
```

## 字段定义

### 基础信息 (website)

| 字段 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `spec_version` | string | ✅ | 规范版本号 |
| `website.name` | string | ✅ | 网站唯一标识，用于文件名 |
| `website.type` | enum | ✅ | 网站类型：`company`、`portfolio`、`restaurant`、`blog` |
| `website.title` | string | ✅ | 网站标题，用于HTML title |
| `website.description` | string | ✅ | 网站描述 |
| `website.domain` | string | ❌ | 网站域名 |
| `website.language` | string | ❌ | 语言代码，默认 `zh-CN` |

### 业务信息 (business)

| 字段 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `business.name` | string | ✅ | 企业/个人名称 |
| `business.tagline` | string | ✅ | 宣传语/标语 |
| `business.industry` | string | ❌ | 行业分类 |
| `business.founded` | string | ❌ | 成立时间 |
| `business.description` | string | ❌ | 详细描述 |
| `business.logo` | object | ❌ | Logo配置 |
| `business.contact` | object | ❌ | 联系信息 |

### 页面模块 (sections)

每个模块包含以下基础字段：
- `enabled`: boolean - 是否启用该模块
- `title`: string - 模块标题  
- `subtitle`: string - 模块副标题

#### Hero 首屏模块

```json
{
  "hero": {
    "enabled": true,
    "style": "gradient|minimal|video|image",
    "layout": "center|left|right",
    "background": {
      "type": "gradient|image|video|color",
      "colors": ["#start", "#end"],
      "image": "/path/to/bg.jpg",
      "video": "/path/to/bg.mp4"
    },
    "content": {
      "headline": "主标题",
      "subtitle": "副标题",
      "cta_primary": {
        "text": "按钮文字",
        "href": "链接",
        "style": "primary|secondary|outline"
      }
    }
  }
}
```

#### Features 功能特性模块

```json
{
  "features": {
    "enabled": true,
    "layout": "grid|list|carousel",
    "columns": 2|3|4,
    "items": [
      {
        "title": "功能标题",
        "description": "功能描述",
        "icon": "图标或emoji",
        "color": "#颜色代码"
      }
    ]
  }
}
```

#### Pricing 定价模块

```json
{
  "pricing": {
    "enabled": true,
    "plans": [
      {
        "name": "方案名称",
        "price": "价格",
        "period": "计费周期",
        "description": "方案描述",
        "features": ["功能1", "功能2"],
        "cta": "按钮文字",
        "popular": true
      }
    ]
  }
}
```

### 设计配置 (design)

| 字段 | 类型 | 可选值 | 说明 |
|------|------|--------|------|
| `theme` | string | `modern`、`minimal`、`corporate`、`creative` | 设计主题 |
| `layout` | string | `single-page`、`multi-page` | 页面布局 |
| `colors.primary` | string | 十六进制颜色 | 主色调 |
| `colors.secondary` | string | 十六进制颜色 | 辅助色 |
| `typography.font_family` | string | 字体名称 | 正文字体 |
| `typography.headings` | string | 字体名称 | 标题字体 |
| `animations` | boolean | true/false | 是否启用动画 |

### 技术栈 (tech_stack)

| 字段 | 类型 | 可选值 | 说明 |
|------|------|--------|------|
| `framework` | string | `next.js`、`astro`、`vue`、`nuxt` | 前端框架 |
| `ui_library` | string | `tailwind-shadcn`、`tailwind-radix`、`mui`、`antd` | UI组件库 |
| `deployment` | string | `vercel`、`netlify`、`aws`、`static` | 部署平台 |
| `analytics` | string | `google-analytics`、`plausible`、`none` | 统计分析 |
| `cms` | string | `strapi`、`contentful`、`sanity`、`none` | 内容管理 |

## 网站类型说明

### company (公司官网)
适用于企业、初创公司、B2B服务。
**典型模块**: hero, features, about, pricing, testimonials, contact

### portfolio (个人作品集)  
适用于设计师、开发者、创意工作者。
**典型模块**: hero, about, portfolio, services, testimonials, contact

### restaurant (餐厅网站)
适用于餐厅、咖啡厅、食品服务。
**典型模块**: hero, menu, about, gallery, contact, reservation

### blog (博客网站)
适用于个人博客、企业博客、内容站点。
**典型模块**: hero, recent_posts, categories, about, newsletter, contact

## 最佳实践

### 1. 配置命名
- 使用 `kebab-case` 命名文件和字段
- 保持名称简洁但有意义
- 避免使用中文字符作为标识符

### 2. 内容组织
- 合理规划页面模块顺序
- 突出核心业务价值
- 保持内容精简有力

### 3. 设计一致性
- 选择合适的主题风格
- 保持颜色搭配协调
- 确保响应式设计

### 4. 性能优化
- 启用图片懒加载
- 使用适当的缓存策略
- 优化资源加载

### 5. SEO优化
- 设置完整的meta信息
- 使用语义化的内容结构
- 配置Open Graph数据

## 验证规则

配置文件必须符合以下规则：

1. **必需字段**: `spec_version`、`website`、`business`、`sections`、`tech_stack`
2. **网站类型**: 必须是支持的类型之一
3. **颜色格式**: 必须是有效的十六进制颜色代码
4. **URL格式**: 所有URL必须是有效格式
5. **模块依赖**: 某些模块可能依赖其他模块的配置

## 示例配置

详细的示例配置请参考 [examples](examples/) 目录：

- [公司官网示例](examples/company-website/website-config.json)
- [个人作品集示例](examples/personal-portfolio/website-config.json)  
- [餐厅网站示例](examples/restaurant-website/website-config.json)
- [博客网站示例](examples/blog-website/website-config.json)

## 版本历史

### v1.0 (2025-07-04)
- 初始版本发布
- 支持4种基础网站类型
- 完整的配置字段定义
- JSON Schema验证支持
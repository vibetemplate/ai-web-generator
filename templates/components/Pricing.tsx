import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

interface PricingProps {
  title?: string
  subtitle?: string
  plans: PricingPlan[]
}

export default function Pricing({ 
  title = "定价方案",
  subtitle = "选择适合您的方案",
  plans
}: PricingProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 定价卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500 scale-105 shadow-lg' 
                  : 'border-gray-200 hover:scale-105'
              }`}
            >
              {/* 热门标签 */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>最受欢迎</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* 功能列表 */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA按钮 */}
                <Button 
                  className={`w-full py-6 text-lg font-semibold ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 补充说明 */}
        <div className="text-center mt-12 text-gray-600">
          <p>所有方案都包含14天免费试用期 • 随时可以取消订阅</p>
        </div>
      </div>
    </section>
  )
}

// 使用示例：
/*
const pricingPlans = [
  {
    name: "免费版",
    price: "¥0",
    period: "永久",
    description: "适合个人学习和小项目",
    features: [
      "每月3个项目",
      "基础模板",
      "社区支持",
      "基础功能"
    ],
    cta: "立即开始",
    popular: false
  },
  {
    name: "专业版",
    price: "¥99",
    period: "月",
    description: "适合专业开发者和小团队",
    features: [
      "无限项目数量",
      "所有高级模板",
      "优先技术支持",
      "高级功能解锁",
      "团队协作功能"
    ],
    cta: "选择专业版",
    popular: true
  },
  {
    name: "企业版",
    price: "¥299",
    period: "月",
    description: "适合大型团队和企业客户",
    features: [
      "专业版所有功能",
      "专属客户经理",
      "SLA保障",
      "私有化部署",
      "定制开发服务"
    ],
    cta: "联系销售",
    popular: false
  }
]

<Pricing 
  title="定价方案"
  subtitle="灵活的定价，满足不同需求"
  plans={pricingPlans}
/>
*/
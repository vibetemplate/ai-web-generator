import { Card, CardContent } from "@/components/ui/card"

interface Feature {
  title: string
  description: string
  icon: string
  color?: string
}

interface FeaturesProps {
  title?: string
  subtitle?: string
  features: Feature[]
  layout?: 'grid' | 'list' | 'carousel'
  columns?: 2 | 3 | 4
}

export default function Features({ 
  title = "核心功能",
  subtitle = "强大的功能特性",
  features,
  layout = 'grid',
  columns = 3
}: FeaturesProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  if (layout === 'list') {
    return (
      <section className="py-16 bg-gray-50">
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

          {/* 列表布局 */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                  style={{ backgroundColor: feature.color || '#6366f1' }}
                >
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
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

        {/* 网格布局 */}
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div 
                  className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: feature.color || '#6366f1' }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// 使用示例：
/*
const features = [
  {
    title: "AI智能生成",
    description: "基于先进的AI技术，智能生成高质量的代码和项目结构。",
    icon: "🤖",
    color: "#6366f1"
  },
  {
    title: "零技术门槛", 
    description: "直观的界面设计，非程序员也能轻松上手创建应用。",
    icon: "🎯",
    color: "#8b5cf6"
  },
  {
    title: "一键部署",
    description: "集成主流部署平台，项目生成即可快速部署上线。",
    icon: "🚀", 
    color: "#06b6d4"
  }
]

<Features 
  title="核心功能"
  subtitle="强大的功能，简单的使用"
  features={features}
  layout="grid"
  columns={3}
/>
*/
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

interface ContactInfo {
  address?: string
  phone?: string
  email?: string
}

interface ContactProps {
  title?: string
  subtitle?: string
  form?: {
    enabled: boolean
    fields: string[]
  }
  info?: {
    enabled: boolean
  } & ContactInfo
}

export default function Contact({ 
  title = "联系我们",
  subtitle = "有任何问题？我们很乐意为您解答",
  form = { enabled: true, fields: ["name", "email", "message"] },
  info = { enabled: true }
}: ContactProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理表单提交逻辑
    console.log('表单提交')
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 联系表单 */}
          {form.enabled && (
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  发送消息
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 姓名字段 */}
                  {form.fields.includes('name') && (
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        姓名 *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        className="mt-1 block w-full"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                  )}

                  {/* 邮箱字段 */}
                  {form.fields.includes('email') && (
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        邮箱 *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="mt-1 block w-full"
                        placeholder="请输入您的邮箱地址"
                      />
                    </div>
                  )}

                  {/* 电话字段 */}
                  {form.fields.includes('phone') && (
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        电话
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="mt-1 block w-full"
                        placeholder="请输入您的电话号码"
                      />
                    </div>
                  )}

                  {/* 公司字段 */}
                  {form.fields.includes('company') && (
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        公司
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        className="mt-1 block w-full"
                        placeholder="请输入您的公司名称"
                      />
                    </div>
                  )}

                  {/* 消息字段 */}
                  {form.fields.includes('message') && (
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        消息 *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        className="mt-1 block w-full"
                        placeholder="请详细描述您的需求或问题..."
                      />
                    </div>
                  )}

                  {/* 提交按钮 */}
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    发送消息
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* 联系信息 */}
          {info.enabled && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  联系信息
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  我们很乐意回答您的任何问题。请随时通过以下方式联系我们，我们会尽快回复您。
                </p>
              </div>

              <div className="space-y-6">
                {/* 地址 */}
                {info.address && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        地址
                      </h4>
                      <p className="text-gray-600">
                        {info.address}
                      </p>
                    </div>
                  </div>
                )}

                {/* 电话 */}
                {info.phone && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        电话
                      </h4>
                      <p className="text-gray-600">
                        <a href={`tel:${info.phone}`} className="hover:text-blue-600 transition-colors">
                          {info.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* 邮箱 */}
                {info.email && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        邮箱
                      </h4>
                      <p className="text-gray-600">
                        <a href={`mailto:${info.email}`} className="hover:text-blue-600 transition-colors">
                          {info.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* 营业时间 */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    工作时间
                  </h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>周一 - 周五</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>周六</span>
                      <span>10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>周日</span>
                      <span>休息</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// 使用示例：
/*
<Contact 
  title="联系我们"
  subtitle="有项目想法？让我们聊聊如何实现它"
  form={{
    enabled: true,
    fields: ["name", "email", "company", "message"]
  }}
  info={{
    enabled: true,
    address: "北京市朝阳区科技园区创新大厦8层",
    phone: "+86 138-0013-8000",
    email: "hello@vibegen.com"
  }}
/>
*/
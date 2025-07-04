import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUp } from "lucide-react"

interface NavigationItem {
  label: string
  href: string
}

interface SinglePageLayoutProps {
  children: React.ReactNode
  navigation?: NavigationItem[]
  logo?: string
  brand?: string
  footer?: React.ReactNode
}

export default function SinglePageLayout({
  children,
  navigation = [
    { label: "首页", href: "#hero" },
    { label: "功能", href: "#features" },
    { label: "关于", href: "#about" },
    { label: "定价", href: "#pricing" },
    { label: "联系", href: "#contact" }
  ],
  logo,
  brand = "VibeGen",
  footer
}: SinglePageLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
      setShowBackToTop(scrollTop > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 平滑滚动到指定位置
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // 回到顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/品牌 */}
            <div className="flex items-center space-x-2">
              {logo && (
                <img src={logo} alt={brand} className="h-8 w-auto" />
              )}
              <span className={`text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                {brand}
              </span>
            </div>

            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant={isScrolled ? "default" : "outline"}
                className={isScrolled ? "" : "border-white text-white hover:bg-white hover:text-gray-900"}
              >
                立即开始
              </Button>
            </div>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-medium text-gray-700 hover:text-blue-600 py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button className="w-full mt-4">
                立即开始
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* 主内容 */}
      <main>
        {children}
      </main>

      {/* 默认页脚 */}
      {footer || (
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* 品牌信息 */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  {logo && (
                    <img src={logo} alt={brand} className="h-8 w-auto" />
                  )}
                  <span className="text-xl font-bold">{brand}</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  AI驱动的下一代开发工具，让每个人都能轻松创建应用。
                </p>
                <div className="flex space-x-4">
                  {/* 社交媒体链接 */}
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* 快速链接 */}
              <div>
                <h3 className="font-semibold mb-4">产品</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">功能</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">定价</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">更新日志</a></li>
                </ul>
              </div>

              {/* 支持 */}
              <div>
                <h3 className="font-semibold mb-4">支持</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">文档</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
                </ul>
              </div>
            </div>

            {/* 版权信息 */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 {brand}. 保留所有权利。</p>
            </div>
          </div>
        </footer>
      )}

      {/* 回到顶部按钮 */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center z-40"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  )
}

// 使用示例：
/*
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <SinglePageLayout
      brand="VibeGen"
      navigation={[
        { label: "首页", href: "#hero" },
        { label: "功能", href: "#features" },
        { label: "关于", href: "#about" },
        { label: "定价", href: "#pricing" },
        { label: "联系", href: "#contact" }
      ]}
    >
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Contact />
    </SinglePageLayout>
  )
}
*/
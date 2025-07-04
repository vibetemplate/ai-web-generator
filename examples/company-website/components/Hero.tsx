import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400" />
      
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* 主标题 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            AI驱动的
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              下一代开发工具
            </span>
          </h1>
          
          {/* 副标题 */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            让每个人都能轻松创建应用，无论技术背景如何。智能生成代码，快速构建项目，实现你的创意想法。
          </p>
          
          {/* CTA按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-white/90 text-lg px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              立即体验
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3 rounded-full font-semibold backdrop-blur-sm group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              了解更多
            </Button>
          </div>
          
          {/* 产品界面展示 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white/10">
              <Image
                src="/images/hero-dashboard.png"
                alt="VibeGen产品界面展示"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-4 left-20 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          </div>
        </div>
      </div>
      
      {/* 向下滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

// 添加到全局CSS中的动画样式
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.bg-grid {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
*/
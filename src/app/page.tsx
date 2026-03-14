'use client'

import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getHotTemplates, categoryConfig } from '@/lib/templates'
import { Sparkles, Zap, BookOpen, TrendingUp } from 'lucide-react'

export default function Home() {
  const hotTemplates = getHotTemplates()

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Prompt Generator
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          一键生成高质量 AI 提示词，让每个人都能成为 Prompt 工程师
        </p>
        
        {/* Quick Actions */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/generator">
            <Button size="lg" className="gap-2">
              <Zap className="w-4 h-4" />
              快速生成
            </Button>
          </Link>
          <Link href="/templates">
            <Button size="lg" variant="outline" className="gap-2">
              <BookOpen className="w-4 h-4" />
              浏览模板库
            </Button>
          </Link>
          <Link href="/optimizer">
            <Button size="lg" variant="outline" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              优化提示词
            </Button>
          </Link>
        </div>
      </section>

      {/* Hot Templates Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-bold">热门模板</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotTemplates.map((template) => (
            <Link key={template.id} href={`/generator?template=${template.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-3xl mb-2">{template.icon}</div>
                    <Badge className={categoryConfig[template.category].color}>
                      {categoryConfig[template.category].name}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">核心功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">📚</div>
              <CardTitle>50+ 模板库</CardTitle>
              <CardDescription>
                覆盖写作、编程、营销、学习等多个场景
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">⚡</div>
              <CardTitle>智能生成</CardTitle>
              <CardDescription>
                输入需求，自动生成结构化提示词
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">🎯</div>
              <CardTitle>效果优化</CardTitle>
              <CardDescription>
                优化现有提示词，提升AI输出质量
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-slate-500">
        <p>Made with ❤️ by AI Prompt Generator</p>
      </footer>
    </main>
  )
}

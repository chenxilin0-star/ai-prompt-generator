'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { TrendingUp, Copy, Check, Loader2, Sparkles, ArrowRight } from 'lucide-react'

export default function OptimizerPage() {
  const [originalPrompt, setOriginalPrompt] = useState('')
  const [result, setResult] = useState<{
    optimized: string
    improvements: string[]
    score: number
  } | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleOptimize = async () => {
    if (!originalPrompt.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: originalPrompt })
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Optimization error:', error)
      alert('优化失败，请检查网络连接或 API 配置')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    if (result?.optimized) {
      await navigator.clipboard.writeText(result.optimized)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return '优秀'
    if (score >= 60) return '良好'
    return '需改进'
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-purple-500" />
            提示词优化器
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            输入现有提示词，AI 帮你优化，提升效果
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Input */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle>原始提示词</CardTitle>
              <CardDescription>
                粘贴你想要优化的提示词
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={originalPrompt}
                onChange={(e) => setOriginalPrompt(e.target.value)}
                placeholder="例如：帮我写一篇文章..."
                rows={10}
                className="resize-none"
              />

              <Button
                onClick={handleOptimize}
                disabled={loading || !originalPrompt.trim()}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    优化中...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    开始优化
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Right: Result */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>优化结果</CardTitle>
                {result?.optimized && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    className="gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        已复制
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        复制
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {!result ? (
                <div className="text-center text-slate-400 py-12">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>输入提示词并点击优化，结果将显示在这里</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Score */}
                  <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">优化评分</div>
                      <div className={`text-3xl font-bold ${getScoreColor(result.score)}`}>
                        {result.score} 分
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-medium ${getScoreColor(result.score)}`}>
                        {getScoreLabel(result.score)}
                      </div>
                    </div>
                  </div>

                  {/* Optimized Prompt */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      优化后的提示词
                    </h4>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg whitespace-pre-wrap text-sm">
                      {result.optimized}
                    </div>
                  </div>

                  {/* Improvements */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      改进点
                    </h4>
                    <ul className="space-y-2">
                      {result.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">💡 优化建议</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">1.</span>
                <span>明确角色：告诉 AI 它应该扮演什么角色</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">2.</span>
                <span>具体任务：清晰描述你想要什么输出</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">3.</span>
                <span>格式约束：指定输出格式和长度</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

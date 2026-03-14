'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { templates, getTemplateById, categoryConfig } from '@/lib/templates'
import { Sparkles, Copy, Check, Loader2 } from 'lucide-react'

function GeneratorContent() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get('template')
  
  const [selectedTemplate, setSelectedTemplate] = useState(
    templateId ? getTemplateById(templateId) : null
  )
  const [variables, setVariables] = useState<Record<string, string>>({})
  const [result, setResult] = useState<{
    prompt: string
    instructions: string
    expectedEffect: string
  } | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (templateId) {
      const template = getTemplateById(templateId)
      setSelectedTemplate(template)
      if (template) {
        const initialVars: Record<string, string> = {}
        template.variables.forEach(v => initialVars[v] = '')
        setVariables(initialVars)
      }
    }
  }, [templateId])

  const handleGenerate = async () => {
    if (!selectedTemplate) return
    
    setLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          template: selectedTemplate.promptTemplate,
          variables
        })
      })
      
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Generation error:', error)
      alert('生成失败，请检查网络连接或 API 配置')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    if (result?.prompt) {
      await navigator.clipboard.writeText(result.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-blue-500" />
            提示词生成器
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            选择模板，填写信息，一键生成专业提示词
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Template Selection & Input */}
          <div className="space-y-6">
            {/* Template Selection */}
            {!selectedTemplate && (
              <Card>
                <CardHeader>
                  <CardTitle>选择模板</CardTitle>
                  <CardDescription>从模板库中选择一个开始</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => {
                          setSelectedTemplate(template)
                          const initialVars: Record<string, string> = {}
                          template.variables.forEach(v => initialVars[v] = '')
                          setVariables(initialVars)
                          setResult(null)
                        }}
                        className="p-3 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-left transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{template.icon}</span>
                          <span className="font-medium text-sm">{template.name}</span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {template.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Variable Inputs */}
            {selectedTemplate && (
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{selectedTemplate.icon}</span>
                        <CardTitle>{selectedTemplate.name}</CardTitle>
                      </div>
                      <CardDescription>{selectedTemplate.description}</CardDescription>
                    </div>
                    <Badge className={categoryConfig[selectedTemplate.category].color}>
                      {categoryConfig[selectedTemplate.category].name}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedTemplate.variables.map((variable) => (
                    <div key={variable}>
                      <label className="block text-sm font-medium mb-2">
                        {variable}
                      </label>
                      <Textarea
                        value={variables[variable] || ''}
                        onChange={(e) => setVariables({
                          ...variables,
                          [variable]: e.target.value
                        })}
                        placeholder={`请输入 ${variable}...`}
                        rows={2}
                        className="resize-none"
                      />
                    </div>
                  ))}
                  
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handleGenerate}
                      disabled={loading || Object.values(variables).some(v => !v.trim())}
                      className="flex-1"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          生成中...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 mr-2" />
                          生成提示词
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedTemplate(null)
                        setVariables({})
                        setResult(null)
                      }}
                    >
                      重新选择
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right: Generated Result */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>生成结果</CardTitle>
                  {result?.prompt && (
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
                    <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>选择模板并填写信息，生成的提示词将显示在这里</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        生成的提示词
                      </h4>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg whitespace-pre-wrap text-sm">
                        {result.prompt}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        使用说明
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {result.instructions}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        预期效果
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {result.expectedEffect}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function GeneratorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">加载中...</div>}>
      <GeneratorContent />
    </Suspense>
  )
}

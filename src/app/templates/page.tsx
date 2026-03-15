'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { templates, categoryConfig } from '@/lib/templates'
import { Category } from '@/lib/types'
import { Search } from 'lucide-react'

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories: Category[] = ['writing', 'coding', 'marketing', 'learning', 'general']

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            模板库
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            50+ 精选模板，覆盖各种场景
          </p>
          <p className="text-sm text-slate-500">
            点击模板卡片即可快速开始生成
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索模板名称或描述..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 text-lg"
            />
          </div>
        </div>

        {/* Templates by Category */}
        {searchTerm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Link key={template.id} href={`/generator?template=${template.id}`}>
                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="text-4xl mb-2">{template.icon}</div>
                      <Badge className={categoryConfig[template.category].color}>
                        {categoryConfig[template.category].name}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-2">{template.name}</CardTitle>
                    <CardDescription className="mt-1">{template.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Tabs defaultValue="writing" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat} 
                  className="px-4 py-2 rounded-md data-[state=inactive]:bg-transparent data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
                >
                  <span className="text-lg">{categoryConfig[cat].icon}</span>
                  <span className="ml-1">{categoryConfig[cat].name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => {
              const categoryTemplates = filteredTemplates.filter(t => t.category === category)
              return (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryTemplates.length > 0 ? (
                      categoryTemplates.map((template) => (
                        <Link key={template.id} href={`/generator?template=${template.id}`}>
                          <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full hover:-translate-y-1">
                            <CardHeader>
                              <div className="flex items-start justify-between mb-2">
                                <div className="text-4xl">{template.icon}</div>
                                {template.isHot && (
                                  <Badge variant="destructive" className="animate-pulse">热门</Badge>
                                )}
                              </div>
                              <CardTitle className="text-lg">{template.name}</CardTitle>
                              <CardDescription>{template.description}</CardDescription>
                            </CardHeader>
                          </Card>
                        </Link>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12 text-slate-400">
                        该分类下暂无模板
                      </div>
                    )}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        )}
      </div>
    </main>
  )
}

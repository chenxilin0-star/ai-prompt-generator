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
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">模板库</h1>
          <p className="text-slate-600 dark:text-slate-300">
            50+ 精选模板，覆盖各种场景
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="搜索模板..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800"
            />
          </div>
        </div>

        {/* Templates by Category */}
        {searchTerm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
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
        ) : (
          <Tabs defaultValue="writing" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="gap-2">
                  <span>{categoryConfig[cat].icon}</span>
                  <span className="hidden sm:inline">{categoryConfig[cat].name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => {
              const categoryTemplates = filteredTemplates.filter(t => t.category === category)
              return (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryTemplates.map((template) => (
                      <Link key={template.id} href={`/generator?template=${template.id}`}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <div className="text-3xl">{template.icon}</div>
                              {template.isHot && (
                                <Badge variant="destructive">热门</Badge>
                              )}
                            </div>
                            <CardTitle className="text-lg">{template.name}</CardTitle>
                            <CardDescription>{template.description}</CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
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

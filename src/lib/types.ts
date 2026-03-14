// 类型定义

export interface Template {
  id: string
  name: string
  description: string
  category: Category
  promptTemplate: string
  variables: string[]
  icon: string
  isHot?: boolean
}

export type Category = 'writing' | 'coding' | 'marketing' | 'learning' | 'general'

export interface GeneratedPrompt {
  prompt: string
  instructions: string
  expectedEffect: string
  score?: number
}

export interface OptimizedPrompt {
  original: string
  optimized: string
  improvements: string[]
  score: number
}

import { NextRequest, NextResponse } from 'next/server'
import { optimizePrompt } from '@/lib/openai'

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()
    
    if (!prompt) {
      return NextResponse.json(
        { error: '缺少提示词' },
        { status: 400 }
      )
    }

    const result = await optimizePrompt(prompt)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Optimize API Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '优化失败' },
      { status: 500 }
    )
  }
}

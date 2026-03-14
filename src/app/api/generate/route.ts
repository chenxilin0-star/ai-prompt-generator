import { NextRequest, NextResponse } from 'next/server'
import { generatePrompt } from '@/lib/openai'

export async function POST(request: NextRequest) {
  try {
    const { template, variables } = await request.json()
    
    if (!template || !variables) {
      return NextResponse.json(
        { error: '缺少必要参数' },
        { status: 400 }
      )
    }

    const result = await generatePrompt(template, variables)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Generate API Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '生成失败' },
      { status: 500 }
    )
  }
}

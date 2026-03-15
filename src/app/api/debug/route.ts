import { NextResponse } from 'next/server'

export async function GET() {
  const deepseekKey = process.env.DEEPSEEK_API_KEY
  
  return NextResponse.json({
    hasDeepseekKey: !!deepseekKey,
    deepseekKeyPrefix: deepseekKey ? deepseekKey.substring(0, 10) + '...' : null,
    allEnvKeys: Object.keys(process.env).filter(k => 
      k.includes('DEEPSEEK') || k.includes('OPENAI') || k.includes('API')
    )
  })
}

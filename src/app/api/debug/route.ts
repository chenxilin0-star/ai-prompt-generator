import { NextResponse } from 'next/server'

export async function GET() {
  const geminiKey = process.env.GEMINI_API_KEY
  const googleKey = process.env.GOOGLE_AI_KEY
  
  return NextResponse.json({
    hasGeminiKey: !!geminiKey,
    hasGoogleKey: !!googleKey,
    geminiKeyPrefix: geminiKey ? geminiKey.substring(0, 10) + '...' : null,
    googleKeyPrefix: googleKey ? googleKey.substring(0, 10) + '...' : null,
    allEnvKeys: Object.keys(process.env).filter(k => 
      k.includes('GEMINI') || k.includes('GOOGLE') || k.includes('API')
    )
  })
}

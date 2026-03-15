import OpenAI from 'openai'

const apiKey = process.env.DEEPSEEK_API_KEY || ''
console.log('[DeepSeek] API Key configured:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT SET')

const client = new OpenAI({
  apiKey: apiKey,
  baseURL: 'https://api.deepseek.com/v1',
})

// 模型配置
const MODEL_NAME = 'deepseek-chat'

// 生成提示词
export async function generatePrompt(
  template: string,
  variables: Record<string, string>
): Promise<{ prompt: string; instructions: string; expectedEffect: string }> {
  // 替换模板变量
  let finalPrompt = template
  Object.entries(variables).forEach(([key, value]) => {
    finalPrompt = finalPrompt.replace(new RegExp(`{{${key}}}`, 'g'), value)
  })

  try {
    const response = await client.chat.completions.create({
      model: MODEL_NAME,
      messages: [
        {
          role: 'system',
          content: `你是一个专业的 Prompt 工程师。你的任务是帮助用户生成高质量、结构化的 AI 提示词。

原则：
1. 清晰明确：提示词应该易于理解
2. 结构化：使用角色-任务-格式-约束的框架
3. 可复用：生成的提示词应该适用于类似场景
4. 迭代优化：根据反馈持续改进

输出格式（JSON）：
{
  "prompt": "生成的完整提示词",
  "instructions": "使用说明",
  "expectedEffect": "预期效果"
}`
        },
        {
          role: 'user',
          content: `请根据以下需求生成专业的提示词：\n\n${finalPrompt}`
        }
      ],
      response_format: { type: 'json_object' }
    })

    const content = response.choices[0]?.message?.content
    if (typeof content === 'string') {
      try {
        const parsed = JSON.parse(content)
        return {
          prompt: parsed.prompt || finalPrompt,
          instructions: parsed.instructions || '直接使用生成的提示词即可',
          expectedEffect: parsed.expectedEffect || '将获得高质量的AI输出'
        }
      } catch {
        // 解析失败
      }
    }

    return {
      prompt: finalPrompt,
      instructions: '直接使用生成的提示词即可',
      expectedEffect: '将获得高质量的AI输出'
    }
  } catch (error) {
    console.error('DeepSeek API Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    throw new Error(`生成失败: ${errorMessage}`)
  }
}

// 优化提示词
export async function optimizePrompt(
  originalPrompt: string
): Promise<{ optimized: string; improvements: string[]; score: number }> {
  try {
    const response = await client.chat.completions.create({
      model: MODEL_NAME,
      messages: [
        {
          role: 'user',
          content: `请优化以下提示词，使其更加清晰、有效：

${originalPrompt}

请返回JSON格式：
{
  "optimized": "优化后的提示词",
  "improvements": ["改进点1", "改进点2"],
  "score": 85
}`
        }
      ],
      response_format: { type: 'json_object' }
    })

    const content = response.choices[0]?.message?.content
    if (typeof content === 'string') {
      try {
        const parsed = JSON.parse(content)
        return {
          optimized: parsed.optimized || originalPrompt,
          improvements: parsed.improvements || ['保持原有结构'],
          score: parsed.score || 70
        }
      } catch {
        // 解析失败
      }
    }

    return {
      optimized: originalPrompt,
      improvements: ['保持原有结构'],
      score: 70
    }
  } catch (error) {
    console.error('DeepSeek API Error:', error)
    throw new Error('优化失败，请检查 API 配置')
  }
}

// 评分提示词
export async function scorePrompt(promptText: string): Promise<number> {
  try {
    const response = await client.chat.completions.create({
      model: MODEL_NAME,
      messages: [
        {
          role: 'user',
          content: `请为以下提示词打分（0-100分），只返回数字：

${promptText}`
        }
      ]
    })

    const text = response.choices[0]?.message?.content?.trim() || '70'
    const score = parseInt(text)
    return isNaN(score) ? 70 : Math.min(100, Math.max(0, score))
  } catch (error) {
    console.error('DeepSeek API Error:', error)
    return 70
  }
}

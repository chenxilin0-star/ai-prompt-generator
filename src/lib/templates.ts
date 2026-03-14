import { Template, Category } from './types'

// 分类配置
export const categoryConfig: Record<Category, { name: string; icon: string; color: string }> = {
  writing: { name: '写作', icon: '✍️', color: 'bg-blue-500' },
  coding: { name: '编程', icon: '💻', color: 'bg-green-500' },
  marketing: { name: '营销', icon: '📢', color: 'bg-purple-500' },
  learning: { name: '学习', icon: '📚', color: 'bg-yellow-500' },
  general: { name: '通用', icon: '🎯', color: 'bg-gray-500' }
}

// 50个模板
export const templates: Template[] = [
  // 写作类（10个）
  {
    id: 'blog-post',
    name: '博客文章生成',
    description: '根据主题生成结构化的博客文章',
    category: 'writing',
    promptTemplate: `你是一位专业的博客作家。请根据以下信息撰写一篇高质量的博客文章：

主题：{{topic}}
目标读者：{{audience}}
文章风格：{{style}}

要求：
1. 文章长度约1500字
2. 包含引人入胜的开头
3. 使用小标题组织内容
4. 提供实用的例子和建议
5. 结尾要有行动号召

请直接输出文章内容。`,
    variables: ['topic', 'audience', 'style'],
    icon: '📝',
    isHot: true
  },
  {
    id: 'xiaohongshu',
    name: '小红书文案',
    description: '生成吸睛的小红书种草文案',
    category: 'writing',
    promptTemplate: `你是一位小红书爆款文案达人。请为以下产品/服务创作一篇种草文案：

产品/服务：{{product}}
核心卖点：{{features}}
目标用户：{{targetUser}}

要求：
1. 标题要吸引眼球，使用emoji
2. 正文300-500字，分段清晰
3. 使用3-5个相关话题标签
4. 语气亲切自然，像朋友推荐
5. 结尾要有互动引导

请按以下格式输出：
【标题】
【正文】
【标签】`,
    variables: ['product', 'features', 'targetUser'],
    icon: '📱',
    isHot: true
  },
  {
    id: 'email-compose',
    name: '邮件撰写',
    description: '生成专业的商务邮件',
    category: 'writing',
    promptTemplate: `你是一位商务沟通专家。请根据以下信息撰写一封专业的邮件：

邮件目的：{{purpose}}
收件人：{{recipient}}
关键信息：{{keyInfo}}
语气：{{tone}}

要求：
1. 邮件主题简洁明了
2. 开头礼貌得体
3. 正文条理清晰
4. 结尾有明确的行动号召
5. 签名专业

请直接输出邮件内容。`,
    variables: ['purpose', 'recipient', 'keyInfo', 'tone'],
    icon: '📧'
  },
  {
    id: 'product-description',
    name: '产品描述',
    description: '撰写吸引人的产品介绍文案',
    category: 'writing',
    promptTemplate: `你是一位资深的电商文案策划。请为以下产品撰写描述：

产品名称：{{productName}}
产品特点：{{features}}
适用场景：{{scenarios}}
价格定位：{{priceRange}}

要求：
1. 突出产品核心卖点
2. 使用感性语言激发购买欲
3. 包含使用场景描述
4. 100-200字
5. 符合电商规范

请直接输出产品描述。`,
    variables: ['productName', 'features', 'scenarios', 'priceRange'],
    icon: '🏷️'
  },
  {
    id: 'press-release',
    name: '新闻稿',
    description: '生成标准格式的新闻稿',
    category: 'writing',
    promptTemplate: `你是一位公关文案专家。请根据以下信息撰写新闻稿：

新闻主题：{{topic}}
公司/组织：{{organization}}
关键事件：{{event}}
发布日期：{{date}}

要求：
1. 标题要新闻性强
2. 导语包含5W要素
3. 正文层次分明
4. 引用相关人士发言
5. 符合新闻稿格式

请按标准新闻稿格式输出。`,
    variables: ['topic', 'organization', 'event', 'date'],
    icon: '📰'
  },
  {
    id: 'story-creation',
    name: '故事创作',
    description: '创作引人入胜的故事',
    category: 'writing',
    promptTemplate: `你是一位创意写作专家。请根据以下元素创作一个故事：

故事主题：{{theme}}
主要角色：{{characters}}
故事背景：{{setting}}
故事长度：{{length}}

要求：
1. 开头要吸引人
2. 情节跌宕起伏
3. 人物性格鲜明
4. 结尾有感染力
5. 语言生动形象

请直接输出故事内容。`,
    variables: ['theme', 'characters', 'setting', 'length'],
    icon: '📖'
  },
  {
    id: 'poetry',
    name: '诗歌生成',
    description: '创作优美的诗歌作品',
    category: 'writing',
    promptTemplate: `你是一位诗人。请根据以下要求创作一首诗：

诗歌主题：{{theme}}
诗歌风格：{{style}}
诗歌形式：{{form}}
情感基调：{{mood}}

要求：
1. 意象生动
2. 韵律优美
3. 情感真挚
4. 富有哲思

请直接输出诗歌内容。`,
    variables: ['theme', 'style', 'form', 'mood'],
    icon: '🎭'
  },
  {
    id: 'title-optimization',
    name: '标题优化',
    description: '生成吸引人的标题变体',
    category: 'writing',
    promptTemplate: `你是一位标题优化专家。请为以下内容生成10个优化标题：

内容主题：{{topic}}
目标平台：{{platform}}
目标效果：{{goal}}

要求：
1. 每个标题风格不同
2. 包含数字、疑问、对比等元素
3. 符合平台调性
4. 长度适中
5. 具有点击吸引力

请以列表形式输出10个标题。`,
    variables: ['topic', 'platform', 'goal'],
    icon: '🎯',
    isHot: true
  },
  {
    id: 'summary',
    name: '摘要生成',
    description: '生成简洁准确的内容摘要',
    category: 'writing',
    promptTemplate: `你是一位内容摘要专家。请为以下内容生成摘要：

原始内容：{{content}}
摘要长度：{{length}}
摘要风格：{{style}}

要求：
1. 提取核心信息
2. 保留关键数据
3. 语言简洁明了
4. 逻辑通顺
5. 字数符合要求

请直接输出摘要。`,
    variables: ['content', 'length', 'style'],
    icon: '📋'
  },
  {
    id: 'translation-polish',
    name: '翻译润色',
    description: '翻译并润色文本内容',
    category: 'writing',
    promptTemplate: `你是一位翻译专家。请翻译并润色以下内容：

原文：{{text}}
源语言：{{sourceLang}}
目标语言：{{targetLang}}
润色程度：{{level}}

要求：
1. 翻译准确
2. 符合目标语言习惯
3. 保留原文风格
4. 语言流畅自然
5. 适当润色

请直接输出翻译结果。`,
    variables: ['text', 'sourceLang', 'targetLang', 'level'],
    icon: '🌐'
  },

  // 编程类（10个）
  {
    id: 'code-generation',
    name: '代码生成',
    description: '根据需求生成代码',
    category: 'coding',
    promptTemplate: `你是一位资深软件工程师。请根据以下需求生成代码：

需求描述：{{requirement}}
编程语言：{{language}}
框架/库：{{framework}}
代码风格：{{style}}

要求：
1. 代码功能完整
2. 遵循最佳实践
3. 包含必要注释
4. 考虑边界情况
5. 提供使用示例

请直接输出代码。`,
    variables: ['requirement', 'language', 'framework', 'style'],
    icon: '⚡',
    isHot: true
  },
  {
    id: 'code-explanation',
    name: '代码解释',
    description: '详细解释代码逻辑',
    category: 'coding',
    promptTemplate: `你是一位编程导师。请详细解释以下代码：

代码片段：{{code}}
编程语言：{{language}}
解释深度：{{depth}}

要求：
1. 逐行解释代码逻辑
2. 说明关键概念
3. 指出潜在问题
4. 提供改进建议
5. 使用通俗易懂的语言

请以教学的方式解释代码。`,
    variables: ['code', 'language', 'depth'],
    icon: '🔍'
  },
  {
    id: 'bug-fix',
    name: 'Bug 修复',
    description: '诊断并修复代码问题',
    category: 'coding',
    promptTemplate: `你是一位调试专家。请诊断并修复以下代码问题：

代码片段：{{code}}
问题描述：{{issue}}
错误信息：{{error}}
编程语言：{{language}}

要求：
1. 分析问题原因
2. 提供修复方案
3. 解释修复原理
4. 给出优化建议
5. 提供修复后的完整代码

请按以下格式输出：
【问题分析】
【修复方案】
【修复后代码】`,
    variables: ['code', 'issue', 'error', 'language'],
    icon: '🐛',
    isHot: true
  },
  {
    id: 'code-refactor',
    name: '代码重构',
    description: '优化代码结构和质量',
    category: 'coding',
    promptTemplate: `你是一位代码重构专家。请重构以下代码：

原始代码：{{code}}
编程语言：{{language}}
重构目标：{{goals}}

要求：
1. 提高代码可读性
2. 优化性能
3. 减少重复
4. 遵循设计模式
5. 保持功能不变

请按以下格式输出：
【重构要点】
【重构后代码】
【改进说明】`,
    variables: ['code', 'language', 'goals'],
    icon: '🔧'
  },
  {
    id: 'unit-test',
    name: '单元测试',
    description: '生成完整的单元测试',
    category: 'coding',
    promptTemplate: `你是一位测试工程师。请为以下代码生成单元测试：

代码片段：{{code}}
编程语言：{{language}}
测试框架：{{framework}}
覆盖率要求：{{coverage}}

要求：
1. 测试所有功能点
2. 包含边界测试
3. 测试异常情况
4. 代码覆盖率>80%
5. 测试命名清晰

请直接输出测试代码。`,
    variables: ['code', 'language', 'framework', 'coverage'],
    icon: '✅'
  },
  {
    id: 'api-doc',
    name: 'API 文档',
    description: '生成规范的API文档',
    category: 'coding',
    promptTemplate: `你是一位技术文档专家。请为以下API生成文档：

API描述：{{description}}
端点信息：{{endpoint}}
请求参数：{{params}}
响应格式：{{response}}

要求：
1. 符合OpenAPI规范
2. 包含请求示例
3. 包含响应示例
4. 说明错误码
5. 提供使用说明

请按标准API文档格式输出。`,
    variables: ['description', 'endpoint', 'params', 'response'],
    icon: '📄'
  },
  {
    id: 'sql-generation',
    name: 'SQL 生成',
    description: '根据需求生成SQL查询',
    category: 'coding',
    promptTemplate: `你是一位数据库专家。请根据需求生成SQL查询：

需求描述：{{requirement}}
表结构：{{schema}}
数据库类型：{{dbType}}
性能要求：{{performance}}

要求：
1. SQL语法正确
2. 考虑性能优化
3. 添加必要注释
4. 处理NULL值
5. 提供多种实现方案

请直接输出SQL语句。`,
    variables: ['requirement', 'schema', 'dbType', 'performance'],
    icon: '🗃️'
  },
  {
    id: 'regex',
    name: '正则表达式',
    description: '生成复杂的正则表达式',
    category: 'coding',
    promptTemplate: `你是一位正则表达式专家。请根据需求生成正则：

匹配需求：{{requirement}}
匹配示例：{{examples}}
排除情况：{{exclude}}
编程语言：{{language}}

要求：
1. 正则表达式准确
2. 性能优化
3. 提供测试用例
4. 详细解释语法
5. 提供多种方案

请按以下格式输出：
【正则表达式】
【解释】
【测试用例】`,
    variables: ['requirement', 'examples', 'exclude', 'language'],
    icon: '🔢'
  },
  {
    id: 'algorithm-optimization',
    name: '算法优化',
    description: '优化算法性能和复杂度',
    category: 'coding',
    promptTemplate: `你是一位算法专家。请优化以下算法：

原始算法：{{algorithm}}
问题描述：{{problem}}
性能瓶颈：{{bottleneck}}
目标复杂度：{{complexity}}

要求：
1. 分析当前复杂度
2. 提供优化方案
3. 实现优化代码
4. 对比性能提升
5. 解释优化原理

请按以下格式输出：
【复杂度分析】
【优化方案】
【优化后代码】
【性能对比】`,
    variables: ['algorithm', 'problem', 'bottleneck', 'complexity'],
    icon: '🚀'
  },
  {
    id: 'code-review',
    name: '代码审查',
    description: '全面的代码质量审查',
    category: 'coding',
    promptTemplate: `你是一位资深代码审查专家。请审查以下代码：

代码片段：{{code}}
编程语言：{{language}}
审查重点：{{focus}}

要求：
1. 检查代码规范
2. 发现潜在bug
3. 评估性能
4. 检查安全性
5. 提供改进建议

请按以下格式输出：
【总体评价】
【问题列表】
【改进建议】
【优化后代码】`,
    variables: ['code', 'language', 'focus'],
    icon: '👁️'
  },

  // 营销类（10个）
  {
    id: 'ad-copy',
    name: '广告文案',
    description: '创作高转化的广告文案',
    category: 'marketing',
    promptTemplate: `你是一位广告文案大师。请为以下产品创作广告文案：

产品/服务：{{product}}
核心卖点：{{usp}}
目标受众：{{audience}}
广告平台：{{platform}}

要求：
1. 标题要吸引眼球
2. 突出产品优势
3. 激发购买欲望
4. 包含行动号召
5. 符合平台规范

请创作3个不同风格的文案版本。`,
    variables: ['product', 'usp', 'audience', 'platform'],
    icon: '📣',
    isHot: true
  },
  {
    id: 'social-media-post',
    name: '社交媒体帖子',
    description: '生成适合各平台的社媒内容',
    category: 'marketing',
    promptTemplate: `你是一位社交媒体运营专家。请创作社媒帖子：

内容主题：{{topic}}
目标平台：{{platform}}
发布目的：{{purpose}}
受众特征：{{audience}}

要求：
1. 符合平台调性
2. 包含emoji和话题标签
3. 引导互动
4. 视觉化描述
5. 最佳发布时机建议

请直接输出帖子内容。`,
    variables: ['topic', 'platform', 'purpose', 'audience'],
    icon: '💬'
  },
  {
    id: 'seo-article',
    name: 'SEO 文章',
    description: '生成搜索引擎友好的文章',
    category: 'marketing',
    promptTemplate: `你是一位SEO内容专家。请创作SEO优化文章：

目标关键词：{{keyword}}
次要关键词：{{secondaryKeywords}}
文章长度：{{length}}
目标排名：{{goal}}

要求：
1. 关键词密度2-3%
2. 标题包含主关键词
3. 使用H2/H3标签
4. 内链建议
5. 元描述优化

请按SEO最佳实践输出文章。`,
    variables: ['keyword', 'secondaryKeywords', 'length', 'goal'],
    icon: '🔎'
  },
  {
    id: 'landing-page',
    name: '着陆页文案',
    description: '创作高转化的着陆页文案',
    category: 'marketing',
    promptTemplate: `你是一位转化率优化专家。请创作着陆页文案：

产品/服务：{{product}}
核心价值：{{value}}
目标用户：{{audience}}
转化目标：{{goal}}

要求：
1. 吸引人的标题
2. 清晰的价值主张
3. 社会证明元素
4. 痛点解决方案
5. 强有力的CTA

请按着陆页结构输出文案。`,
    variables: ['product', 'value', 'audience', 'goal'],
    icon: '🎯'
  },
  {
    id: 'email-marketing',
    name: '邮件营销',
    description: '创作高效的营销邮件',
    category: 'marketing',
    promptTemplate: `你是一位邮件营销专家。请创作营销邮件：

营销目标：{{goal}}
产品/服务：{{product}}
目标受众：{{audience}}
邮件类型：{{type}}

要求：
1. 高打开率的主题行
2. 个性化开头
3. 清晰的价值传递
4. 紧迫感营造
5. 明确的CTA

请创作3个版本的主题行+正文。`,
    variables: ['goal', 'product', 'audience', 'type'],
    icon: '📬'
  },
  {
    id: 'brand-story',
    name: '品牌故事',
    description: '创作打动人心的品牌故事',
    category: 'marketing',
    promptTemplate: `你是一位品牌叙事专家。请创作品牌故事：

品牌名称：{{brand}}
品牌使命：{{mission}}
创始历程：{{history}}
核心价值观：{{values}}

要求：
1. 情感共鸣
2. 真实可信
3. 差异化定位
4. 易于传播
5. 体现品牌价值

请创作一个完整的品牌故事。`,
    variables: ['brand', 'mission', 'history', 'values'],
    icon: '📖'
  },
  {
    id: 'review-reply',
    name: '用户评价回复',
    description: '专业回复各类用户评价',
    category: 'marketing',
    promptTemplate: `你是一位客户关系专家。请回复用户评价：

用户评价：{{review}}
评价类型：{{type}}
产品/服务：{{product}}
回复目标：{{goal}}

要求：
1. 态度真诚
2. 感谢用户反馈
3. 解决问题（如有）
4. 引导二次消费
5. 体现品牌调性

请直接输出回复内容。`,
    variables: ['review', 'type', 'product', 'goal'],
    icon: '⭐'
  },
  {
    id: 'event-planning',
    name: '活动策划',
    description: '策划完整的营销活动',
    category: 'marketing',
    promptTemplate: `你是一位活动策划专家。请策划营销活动：

活动目标：{{goal}}
目标受众：{{audience}}
预算范围：{{budget}}
活动周期：{{duration}}

要求：
1. 创意主题
2. 活动流程
3. 推广渠道
4. 预期效果
5. 风险预案

请输出完整的活动策划方案。`,
    variables: ['goal', 'audience', 'budget', 'duration'],
    icon: '🎉'
  },
  {
    id: 'competitor-analysis',
    name: '竞品分析',
    description: '深度分析竞争对手',
    category: 'marketing',
    promptTemplate: `你是一位市场分析师。请分析竞争对手：

行业领域：{{industry}}
主要竞品：{{competitors}}
分析维度：{{dimensions}}
分析目的：{{purpose}}

要求：
1. 产品功能对比
2. 定价策略分析
3. 营销策略分析
4. SWOT分析
5. 差异化建议

请输出完整的竞品分析报告。`,
    variables: ['industry', 'competitors', 'dimensions', 'purpose'],
    icon: '🔬'
  },
  {
    id: 'market-research',
    name: '市场调研',
    description: '系统性的市场调研方案',
    category: 'marketing',
    promptTemplate: `你是一位市场调研专家。请设计调研方案：

调研目标：{{goal}}
目标市场：{{market}}
调研范围：{{scope}}
预算限制：{{budget}}

要求：
1. 调研方法论
2. 样本设计
3. 问卷设计
4. 数据分析计划
5. 报告框架

请输出完整的调研方案。`,
    variables: ['goal', 'market', 'scope', 'budget'],
    icon: '📊'
  },

  // 学习类（10个）
  {
    id: 'knowledge-explanation',
    name: '知识点解释',
    description: '通俗易懂地解释复杂概念',
    category: 'learning',
    promptTemplate: `你是一位知识讲解专家。请解释以下概念：

知识点：{{concept}}
学科领域：{{field}}
听众水平：{{level}}
解释目标：{{goal}}

要求：
1. 从基础开始讲解
2. 使用类比和例子
3. 避免专业术语堆砌
4. 循序渐进
5. 提供实际应用场景

请用通俗易懂的方式解释。`,
    variables: ['concept', 'field', 'level', 'goal'],
    icon: '💡',
    isHot: true
  },
  {
    id: 'study-plan',
    name: '学习计划',
    description: '制定系统的学习计划',
    category: 'learning',
    promptTemplate: `你是一位学习规划师。请制定学习计划：

学习目标：{{goal}}
当前水平：{{level}}
可用时间：{{time}}
学习周期：{{duration}}

要求：
1. 分阶段目标
2. 每日/周任务
3. 学习资源推荐
4. 检验点设置
5. 复习安排

请输出完整的学习计划。`,
    variables: ['goal', 'level', 'time', 'duration'],
    icon: '📅'
  },
  {
    id: 'note-organization',
    name: '笔记整理',
    description: '将内容整理成结构化笔记',
    category: 'learning',
    promptTemplate: `你是一位笔记整理专家。请整理以下内容：

原始内容：{{content}}
学科领域：{{field}}
笔记风格：{{style}}
重点标记：{{focus}}

要求：
1. 结构清晰
2. 重点突出
3. 层次分明
4. 易于复习
5. 包含总结

请输出整理后的笔记。`,
    variables: ['content', 'field', 'style', 'focus'],
    icon: '📝'
  },
  {
    id: 'exam-prep',
    name: '考试复习',
    description: '制定高效的考试复习策略',
    category: 'learning',
    promptTemplate: `你是一位考试辅导专家。请制定复习策略：

考试科目：{{subject}}
考试时间：{{date}}
当前水平：{{level}}
目标分数：{{goal}}

要求：
1. 重点知识点
2. 复习时间分配
3. 练习建议
4. 记忆技巧
5. 考前冲刺计划

请输出完整的复习策略。`,
    variables: ['subject', 'date', 'level', 'goal'],
    icon: '📚'
  },
  {
    id: 'essay-writing',
    name: '论文写作',
    description: '指导学术论文写作',
    category: 'learning',
    promptTemplate: `你是一位学术写作专家。请指导论文写作：

论文主题：{{topic}}
学科领域：{{field}}
论文类型：{{type}}
字数要求：{{length}}

要求：
1. 论文结构
2. 文献综述建议
3. 研究方法推荐
4. 写作时间规划
5. 常见问题提醒

请输出详细的写作指导。`,
    variables: ['topic', 'field', 'type', 'length'],
    icon: '🎓'
  },
  {
    id: 'literature-review',
    name: '文献综述',
    description: '系统梳理研究文献',
    category: 'learning',
    promptTemplate: `你是一位文献综述专家。请梳理文献：

研究领域：{{field}}
研究问题：{{question}}
文献范围：{{scope}}
综述目的：{{purpose}}

要求：
1. 文献分类
2. 研究脉络
3. 主要观点
4. 研究缺口
5. 未来方向

请输出文献综述框架。`,
    variables: ['field', 'question', 'scope', 'purpose'],
    icon: '📖'
  },
  {
    id: 'research-method',
    name: '研究方法',
    description: '设计研究方法论',
    category: 'learning',
    promptTemplate: `你是一位研究方法专家。请设计研究方法：

研究问题：{{question}}
研究类型：{{type}}
数据来源：{{data}}
限制条件：{{constraints}}

要求：
1. 方法论选择
2. 数据收集方案
3. 分析框架
4. 信效度保障
5. 伦理考虑

请输出完整的研究方法设计。`,
    variables: ['question', 'type', 'data', 'constraints'],
    icon: '🔬'
  },
  {
    id: 'data-analysis',
    name: '数据分析',
    description: '指导数据分析方法',
    category: 'learning',
    promptTemplate: `你是一位数据分析专家。请分析数据：

数据描述：{{data}}
分析目标：{{goal}}
数据类型：{{type}}
工具限制：{{tools}}

要求：
1. 数据预处理
2. 分析方法选择
3. 可视化建议
4. 结果解读
5. 结论推导

请输出数据分析方案。`,
    variables: ['data', 'goal', 'type', 'tools'],
    icon: '📈'
  },
  {
    id: 'speech-writing',
    name: '演讲稿',
    description: '创作有感染力的演讲稿',
    category: 'learning',
    promptTemplate: `你是一位演讲稿写作专家。请创作演讲稿：

演讲主题：{{topic}}
演讲场合：{{occasion}}
听众特征：{{audience}}
时长限制：{{duration}}

要求：
1. 吸引人的开头
2. 清晰的逻辑线
3. 生动的例子
4. 情感共鸣点
5. 有力的结尾

请输出完整的演讲稿。`,
    variables: ['topic', 'occasion', 'audience', 'duration'],
    icon: '🎤'
  },
  {
    id: 'interview-prep',
    name: '面试准备',
    description: '全面的面试准备指导',
    category: 'learning',
    promptTemplate: `你是一位面试辅导专家。请提供面试准备：

应聘岗位：{{position}}
公司信息：{{company}}
面试类型：{{type}}
个人背景：{{background}}

要求：
1. 常见问题及答案
2. 行为面试准备
3. 技术问题准备
4. 提问环节建议
5. 面试技巧

请输出完整的面试准备方案。`,
    variables: ['position', 'company', 'type', 'background'],
    icon: '💼'
  },

  // 通用类（10个）
  {
    id: 'role-play',
    name: '角色扮演',
    description: '扮演特定角色进行对话',
    category: 'general',
    promptTemplate: `你现在要扮演以下角色：

角色身份：{{role}}
性格特点：{{personality}}
专业背景：{{background}}
对话场景：{{scene}}

要求：
1. 完全沉浸在角色中
2. 符合角色身份的语言风格
3. 展现角色特点
4. 保持角色一致性
5. 自然对话

请开始角色扮演。`,
    variables: ['role', 'personality', 'background', 'scene'],
    icon: '🎭'
  },
  {
    id: 'brainstorm',
    name: '头脑风暴',
    description: '生成创意想法和解决方案',
    category: 'general',
    promptTemplate: `你是一位创意专家。请进行头脑风暴：

问题/主题：{{topic}}
创意方向：{{direction}}
数量要求：{{quantity}}
创新程度：{{level}}

要求：
1. 数量优先
2. 不批判想法
3. 鼓励疯狂想法
4. 组合和改进
5. 可实施性评估

请输出创意清单。`,
    variables: ['topic', 'direction', 'quantity', 'level'],
    icon: '💭',
    isHot: true
  },
  {
    id: 'decision-analysis',
    name: '决策分析',
    description: '系统分析决策选项',
    category: 'general',
    promptTemplate: `你是一位决策分析专家。请分析决策：

决策问题：{{problem}}
备选方案：{{options}}
决策标准：{{criteria}}
限制条件：{{constraints}}

要求：
1. 方案对比
2. 优劣势分析
3. 风险评估
4. 决策矩阵
5. 推荐建议

请输出决策分析报告。`,
    variables: ['problem', 'options', 'criteria', 'constraints'],
    icon: '⚖️'
  },
  {
    id: 'schedule-planning',
    name: '日程规划',
    description: '制定高效的时间安排',
    category: 'general',
    promptTemplate: `你是一位时间管理专家。请规划日程：

任务清单：{{tasks}}
可用时间：{{time}}
优先级：{{priority}}
特殊要求：{{requirements}}

要求：
1. 时间块分配
2. 优先级排序
3. 缓冲时间
4. 效率优化
5. 灵活调整

请输出日程安排。`,
    variables: ['tasks', 'time', 'priority', 'requirements'],
    icon: '⏰'
  },
  {
    id: 'creative-ideas',
    name: '创意生成',
    description: '生成原创创意想法',
    category: 'general',
    promptTemplate: `你是一位创意总监。请生成创意：

创意领域：{{field}}
创意目标：{{goal}}
目标受众：{{audience}}
创新要求：{{innovation}}

要求：
1. 原创性
2. 可执行性
3. 差异化
4. 吸引力
5. 扩展空间

请输出10个创意想法。`,
    variables: ['field', 'goal', 'audience', 'innovation'],
    icon: '✨'
  },
  {
    id: 'problem-diagnosis',
    name: '问题诊断',
    description: '系统化诊断问题根因',
    category: 'general',
    promptTemplate: `你是一位问题分析专家。请诊断问题：

问题描述：{{problem}}
问题背景：{{context}}
已尝试方案：{{tried}}
期望结果：{{expected}}

要求：
1. 问题拆解
2. 根因分析
3. 影响评估
4. 解决思路
5. 行动建议

请输出问题诊断报告。`,
    variables: ['problem', 'context', 'tried', 'expected'],
    icon: '🔍'
  },
  {
    id: 'solution-comparison',
    name: '方案对比',
    description: '多维度对比不同方案',
    category: 'general',
    promptTemplate: `你是一位方案评估专家。请对比方案：

决策问题：{{problem}}
方案列表：{{solutions}}
评估维度：{{dimensions}}
权重分配：{{weights}}

要求：
1. 维度评分
2. 加权计算
3. 优劣势分析
4. 适用场景
5. 推荐结论

请输出方案对比分析。`,
    variables: ['problem', 'solutions', 'dimensions', 'weights'],
    icon: '📊'
  },
  {
    id: 'summarization',
    name: '总结归纳',
    description: '提炼核心要点',
    category: 'general',
    promptTemplate: `你是一位总结专家。请总结归纳：

原始内容：{{content}}
总结类型：{{type}}
详细程度：{{detail}}
目标读者：{{audience}}

要求：
1. 提取核心观点
2. 结构化呈现
3. 突出重点
4. 简洁明了
5. 易于理解

请输出总结内容。`,
    variables: ['content', 'type', 'detail', 'audience'],
    icon: '📋'
  },
  {
    id: 'question-optimization',
    name: '提问优化',
    description: '优化问题以获得更好答案',
    category: 'general',
    promptTemplate: `你是一位提问专家。请优化问题：

原始问题：{{question}}
提问背景：{{context}}
期望答案：{{expected}}
提问对象：{{target}}

要求：
1. 问题清晰
2. 背景充分
3. 避免歧义
4. 引导深度回答
5. 多角度提问

请输出优化后的问题。`,
    variables: ['question', 'context', 'expected', 'target'],
    icon: '❓'
  },
  {
    id: 'conversation-simulation',
    name: '对话模拟',
    description: '模拟特定场景的对话',
    category: 'general',
    promptTemplate: `你是一位对话模拟专家。请模拟对话：

对话场景：{{scene}}
参与者：{{participants}}
对话目标：{{goal}}
对话风格：{{style}}

要求：
1. 符合场景
2. 角色鲜明
3. 自然流畅
4. 达成目标
5. 真实感强

请输出对话内容。`,
    variables: ['scene', 'participants', 'goal', 'style'],
    icon: '💬'
  }
]

// 获取热门模板
export const getHotTemplates = () => templates.filter(t => t.isHot)

// 按分类获取模板
export const getTemplatesByCategory = (category: Category) => 
  templates.filter(t => t.category === category)

// 根据ID获取模板
export const getTemplateById = (id: string) => 
  templates.find(t => t.id === id)

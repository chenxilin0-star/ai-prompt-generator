# AI Prompt Generator

一键生成高质量 AI 提示词，让每个人都能成为 Prompt 工程师

## 功能特性

- ✅ **50+ 模板库** - 覆盖写作、编程、营销、学习等场景
- ✅ **智能生成** - 输入需求，自动生成结构化提示词
- ✅ **效果优化** - 优化现有提示词，提升AI输出质量
- ✅ **中英文支持** - 支持中英文提示词生成

## 技术栈

- **框架**：Next.js 14 (App Router)
- **样式**：Tailwind CSS + shadcn/ui
- **AI**：OpenAI API (GPT-4o-mini)
- **部署**：Vercel

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

创建 `.env.local` 文件：

```
OPENAI_API_KEY=your_api_key_here
```

### 3. 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

### 4. 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── app/
│   ├── page.tsx          # 首页
│   ├── generator/        # 生成器页面
│   ├── templates/        # 模板库页面
│   ├── optimizer/        # 优化器页面
│   └── api/
│       ├── generate/     # 生成 API
│       └── optimize/     # 优化 API
├── components/
│   └── ui/               # shadcn/ui 组件
└── lib/
    ├── templates.ts      # 50+ 模板定义
    ├── types.ts          # 类型定义
    └── utils.ts          # 工具函数
```

## API 接口

### POST /api/generate

生成提示词

```json
{
  "template": "模板ID",
  "variables": {
    "变量名": "值"
  }
}
```

### POST /api/optimize

优化提示词

```json
{
  "prompt": "原始提示词"
}
```

## 部署到 Vercel

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量 `OPENAI_API_KEY`
4. 部署

## 相关文档

- [技术方案](/root/.openclaw/workspace/agents/dev/knowledge/技术方案-20260314.md)
- [MVP需求](/root/.openclaw/workspace/agents/product/knowledge/mvp-requirement-20260314.md)
- [定位分析](/root/.openclaw/workspace/agents/positioning/knowledge/定位分析-20260314.md)

## License

MIT

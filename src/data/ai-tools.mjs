export const AI_TOOL_CATEGORIES = [
  {
    id: 'chat',
    name: '对话与搜索大模型',
    desc: '日常问答、深度写作、学术检索与多模态推理主力工具',
    tools: [
      {
        name: 'ChatGPT (OpenAI)',
        tag: '全能对话标杆',
        url: 'https://chatgpt.com',
        regionTip: '需美 / 日 / 新 / 台节点（不支持香港）',
        risk: '中等风控',
        price: '免费 / Plus $20/月',
        desc: '综合生态最全的 AI 助手，支持深度思考、实时联网搜索、语音对话与 GPTs 插件。'
      },
      {
        name: 'Claude (Anthropic)',
        tag: '写作与代码天花板',
        url: 'https://claude.ai',
        regionTip: '强依赖纯净美/日原生 IP（严禁频繁跳区）',
        risk: '高风控 · 推荐光年梯IP',
        price: '免费 / Pro $20/月',
        desc: '公认代码能力与长文本中文语感最自然的大模型，Artifacts 实时预览极好用。'
      },
      {
        name: 'Google Gemini',
        tag: '超长上下文 · 免费额度高',
        url: 'https://gemini.google.com',
        regionTip: '需美 / 日 / 新 / 台节点（不支持香港）',
        risk: '低风控',
        price: '免费 / Advanced $19.99/月',
        desc: '深度集成 Google Workspace 与百万级上下文，搭配 AI Studio 免费调用体验极佳。'
      },
      {
        name: 'Perplexity AI',
        tag: 'AI 搜索引擎',
        url: 'https://www.perplexity.ai',
        regionTip: '常规海外节点直连友好',
        risk: '低风控',
        price: '免费 / Pro $20/月',
        desc: '带实时引用来源的 AI 搜索引擎，查资料、做行业调研和竞品分析效率翻倍。'
      },
      {
        name: 'Grok (xAI)',
        tag: '实时 X 资讯',
        url: 'https://grok.com',
        regionTip: '需美 / 日 / 欧节点',
        risk: '低风控',
        price: '免费额度 / SuperGrok',
        desc: '直连 X（Twitter）实时动态，风格犀利幽默，适合追踪海外科技与币圈一手热点。'
      },
      {
        name: 'Poe (Quora)',
        tag: '多模型聚合',
        url: 'https://poe.com',
        regionTip: '港 / 日 / 新 / 美节点均可',
        risk: '极低风控',
        price: '免费额度 / $19.99/月',
        desc: '一个账号同时用 GPT、Claude、Gemini、Flux 等主流模型，适合不想折腾多账号的用户。'
      }
    ]
  },
  {
    id: 'coding',
    name: 'AI 编程与全栈开发',
    desc: '程序员与独立开发者的生产力核武器，建议配合 Clash TUN 模式',
    tools: [
      {
        name: 'Cursor',
        tag: 'AI IDE 霸主',
        url: 'https://www.cursor.com',
        regionTip: '建议美 / 日 / 新低延迟专线 + TUN 模式',
        risk: '低风控',
        price: '免费 / Pro $20/月',
        desc: '基于 VS Code 深度重构的 AI 编辑器，Composer 多文件联动改代码极度丝滑。'
      },
      {
        name: 'Windsurf',
        tag: 'Agentic IDE',
        url: 'https://codeium.com/windsurf',
        regionTip: '常规日 / 新 / 美节点',
        risk: '低风控',
        price: '免费 / Pro $15/月',
        desc: 'Cascade 代理式编程体验出色，对大型代码库上下文理解深，性价比高。'
      },
      {
        name: 'GitHub Copilot',
        tag: '老牌代码补全',
        url: 'https://github.com/features/copilot',
        regionTip: '港 / 日 / 新专线拉取极快',
        risk: '极低风控',
        price: '免费版 / Pro $10/月',
        desc: '与 GitHub 生态无缝衔接，支持多模型切换与 PR 自动审查，学生认证可免费用。'
      },
      {
        name: 'v0 by Vercel',
        tag: 'AI 生成前端 UI',
        url: 'https://v0.dev',
        regionTip: '常规海外节点即可',
        risk: '低风控',
        price: '免费额度 / $20/月',
        desc: '一句话生成高颜值 React / Tailwind / Shadcn UI 组件并一键部署到 Vercel。'
      },
      {
        name: 'Bolt.new',
        tag: '浏览器全栈建站',
        url: 'https://bolt.new',
        regionTip: '常规海外节点即可',
        risk: '低风控',
        price: '免费额度 / $20/月',
        desc: '无需本地配环境，直接在浏览器里从零生成、运行并部署全栈 Web 应用。'
      }
    ]
  },
  {
    id: 'image',
    name: 'AI 绘图与视觉设计',
    desc: '商业海报、电商配图、博客封面与品牌视觉创作',
    tools: [
      {
        name: 'Midjourney',
        tag: '审美天花板',
        url: 'https://www.midjourney.com',
        regionTip: '需海外节点（支持网页版与 Discord）',
        risk: '低风控',
        price: '$10/月起',
        desc: '目前艺术质感、光影构图和风格一致性最强的 AI 绘画工具，网页端已全面开放。'
      },
      {
        name: 'Ideogram',
        tag: '文字排版神器',
        url: 'https://ideogram.ai',
        regionTip: '常规海外节点',
        risk: '低风控',
        price: '免费额度 / $8/月起',
        desc: '在图片里精准渲染英文与艺术字体的王者，做 Logo、海报和封面极省心。'
      },
      {
        name: 'Recraft',
        tag: '矢量图与品牌设计',
        url: 'https://www.recraft.ai',
        regionTip: '常规海外节点',
        risk: '低风控',
        price: '免费额度 / $12/月起',
        desc: '支持直接生成可编辑 SVG 矢量图标与成套品牌插画，设计师与独立开发者最爱。'
      }
    ]
  },
  {
    id: 'media',
    name: 'AI 视频、音乐与语音',
    desc: '短视频创作、影视分镜、配音与无版权背景音乐',
    tools: [
      {
        name: 'Sora (OpenAI)',
        tag: '文生视频旗舰',
        url: 'https://sora.com',
        regionTip: '需美 / 日原生 IP（不支持香港）',
        risk: '中等风控',
        price: '包含于 ChatGPT Plus/Pro',
        desc: 'OpenAI 出品的高画质视频生成平台，物理规律与镜头语言表现惊艳。'
      },
      {
        name: 'Runway',
        tag: '专业影视 AI',
        url: 'https://runwayml.com',
        regionTip: '常规海外节点',
        risk: '低风控',
        price: '免费额度 / $15/月起',
        desc: '影视后期与广告级视频生成标杆，支持运镜控制、局部重绘与视频风格迁移。'
      },
      {
        name: 'Suno',
        tag: 'AI 作曲唱歌',
        url: 'https://suno.com',
        regionTip: '常规海外节点',
        risk: '低风控',
        price: '免费额度 / $10/月起',
        desc: '输入歌词和曲风几十秒生成广播级完整人声歌曲，短视频配乐神器。'
      },
      {
        name: 'ElevenLabs',
        tag: '逼真 AI 配音',
        url: 'https://elevenlabs.io',
        regionTip: '常规海外节点',
        risk: '低风控',
        price: '免费额度 / $5/月起',
        desc: '情感和停顿最接近真人的多语种语音合成与声音克隆工具，出海视频必用。'
      }
    ]
  },
  {
    id: 'productivity',
    name: 'AI 效率、知识库与科研',
    desc: '长文档阅读、播客生成、PPT 制作与笔记整理',
    tools: [
      {
        name: 'NotebookLM (Google)',
        tag: '免费神级知识库',
        url: 'https://notebooklm.google.com',
        regionTip: '需美 / 日 / 新 / 台节点',
        risk: '低风控',
        price: '免费使用',
        desc: '丢进几十篇 PDF/网页就能基于原文精准问答，还能一键生成双人中文/英文播客音频。'
      },
      {
        name: 'Gamma',
        tag: '一键生成 PPT',
        url: 'https://gamma.app',
        regionTip: '常规海外节点',
        risk: '低风控',
        price: '免费额度 / $10/月起',
        desc: '输入大纲自动排版出高颜值演示文稿与网页，支持导出 PPTX 和 PDF。'
      }
    ]
  }
];

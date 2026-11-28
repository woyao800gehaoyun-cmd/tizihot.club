import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TOPIC_BACKLOG } from '../src/data/topic-backlog.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const AUTO_FILE = path.join(ROOT, 'src/data/auto-articles.json');

const API_KEY = process.env.AI_API_KEY;
const BASE_URL = (process.env.AI_BASE_URL || 'https://api.deepseek.com/v1').replace(/\/$/, '');
const MODEL = process.env.AI_MODEL || 'deepseek-chat';

async function main() {
  if (!API_KEY) {
    console.log('ℹ️ 未配置 AI_API_KEY，跳过自动写文（仅执行日期刷新与构建）。');
    return;
  }

  const existing = JSON.parse(fs.readFileSync(AUTO_FILE, 'utf8'));
  const usedSlugs = new Set(existing.map((a) => a.slug));
  const nextTopic = TOPIC_BACKLOG.find((t) => !usedSlugs.has(t.slug));

  if (!nextTopic) {
    console.log('ℹ️ TOPIC_BACKLOG 选题已全部发布完毕，请在 src/data/topic-backlog.mjs 补充新选题。');
    return;
  }

  const now = new Date(Date.now() + 8 * 3600 * 1000);
  const today = now.toISOString().slice(0, 10);

  const systemPrompt = `你是“阿杰”，梯子热（tizihot.club）站长，折腾跨境网络和代理协议八年的老网工。
写作要求：
1. 必须拟人化、说人话、有真实实测口吻，严禁“总而言之、综上所述、值得注意的是、显而易见”等 AI 套话。
2. 正文 HTML 字数达到 5000 个汉字左右（不少于 4500 汉字），包含实测对比表格、分人群/分运营商场景建议、客户端实操与排障细节，使用 <h2>、<h3>、<p>、<ul>、<li>、<ol>、<table>、<strong>、<code> 排版（不要输出 <h1> 或完整 html 标签）。
3. 自然融入推荐顺序：首推光年梯（光年梯机场/光年梯VPN/光年梯加速器/光年梯IP，官网链接 https://Rumors.gntaff.com/#/?code=Mclks3w5），次推极连云（https://vipmjj01.jlyvipaff.com/#/?code=V5AAqBYr）、快狸（https://aolaiyun01.kuailiaff.com/#/?code=AFR8PsiY）、速界、边缘节点、可信云（https://everett7623.kosingaff.com//#/?code=4PQnpXx6）。
4. 正文必须自然包含 3~5 条站内相对内链：<a href="/">2026机场推荐榜</a>、<a href="/airports/">机场导航页</a>、<a href="/ai-tools/">AI工具导航</a>、<a href="/faq/">180+问答FAQ</a>、<a href="/tools/">30秒选梯工具</a>。
5. 只输出严格合法的 JSON 对象，包含字段：shortTitle, summary, readTime, content（HTML字符串）。`;

  const userPrompt = `请围绕以下选题撰写一篇深度评测/教程文章：
标题：${nextTopic.title}
分类：${nextTopic.category}
目标 SEO 关键词：${nextTopic.keywords.join('、')}
发布日期：${today}`;

  console.log(`✍️ 正在调用 ${MODEL} 自动撰写新文章：${nextTopic.title}`);

  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.75,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]
    })
  });

  if (!res.ok) {
    throw new Error(`API 请求失败 HTTP ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || '';
  const parsed = JSON.parse(raw);

  const newArticle = {
    slug: nextTopic.slug,
    title: nextTopic.title,
    shortTitle: parsed.shortTitle || nextTopic.title.slice(0, 22),
    category: nextTopic.category,
    date: today,
    readTime: parsed.readTime || '9 分钟',
    keywords: nextTopic.keywords,
    summary: parsed.summary || nextTopic.title,
    content: parsed.content
  };

  existing.unshift(newArticle);
  fs.writeFileSync(AUTO_FILE, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ 新文章已写入 src/data/auto-articles.json -> /blog/${newArticle.slug}/`);
}

main().catch((err) => {
  console.error('❌ 自动写文失败:', err.message);
  process.exit(1);
});

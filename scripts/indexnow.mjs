import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from '../src/data/site.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITEMAP_PATH = path.resolve(__dirname, '../dist/sitemap.xml');

async function submitIndexNow() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ dist/sitemap.xml 不存在，请先运行 npm run build');
    process.exit(1);
  }

  const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());

  if (!urlList.length) {
    console.error('❌ 未在 sitemap.xml 中解析到 URL');
    process.exit(1);
  }

  const payload = {
    host: SITE.domain,
    key: SITE.indexNowKey,
    keyLocation: `${SITE.url}/${SITE.indexNowKey}.txt`,
    urlList
  };

  console.log(`🚀 正在向 Bing IndexNow 推送 ${urlList.length} 个 URL...`);

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload)
  });

  if (res.ok || res.status === 202) {
    console.log(`✅ IndexNow 推送成功！HTTP ${res.status} (${urlList.length} URLs)`);
  } else {
    const text = await res.text();
    console.error(`⚠️ IndexNow 返回 HTTP ${res.status}: ${text}`);
    process.exitCode = 1;
  }
}

submitIndexNow().catch((err) => {
  console.error('❌ IndexNow 推送异常:', err.message);
  process.exit(1);
});

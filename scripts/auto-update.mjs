import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_FILE = path.join(ROOT, 'src/data/site.mjs');

// 获取北京时间 YYYY-MM-DD
const now = new Date(Date.now() + 8 * 3600 * 1000);
const today = now.toISOString().slice(0, 10);

// 1. 更新 src/data/site.mjs 中的 updatedAt
let siteContent = fs.readFileSync(SITE_FILE, 'utf8');
siteContent = siteContent.replace(/updatedAt:\s*'[^']+'/, `updatedAt: '${today}'`);
fs.writeFileSync(SITE_FILE, siteContent, 'utf8');
console.log(`📅 已更新全站实测日期 updatedAt -> ${today}`);

// 2. 重新构建静态站点与 sitemap.xml
execSync('node scripts/build.mjs', { cwd: ROOT, stdio: 'inherit' });

// 3. 若传入 --push 参数，则自动提交并推送到 GitHub
if (process.argv.includes('--push')) {
  const run = (cmd) => execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
  try {
    run('git add -A');
    const status = execSync('git status --porcelain', { cwd: ROOT }).toString().trim();
    if (!status) {
      console.log('ℹ️ 内容无变更，跳过 git commit');
    } else {
      run(`git commit -m "chore(seo): auto refresh benchmark date ${today}"`);
      run('git push origin main');
      console.log('✅ 已自动推送到 GitHub 仓库');
    }
  } catch (err) {
    console.error('⚠️ Git 推送失败（请确认已初始化仓库并配置认证）:', err.message);
    process.exitCode = 1;
  }
}

// 4. 若传入 --indexnow 参数，则自动推送 Bing IndexNow
if (process.argv.includes('--indexnow')) {
  execSync('node scripts/indexnow.mjs', { cwd: ROOT, stdio: 'inherit' });
}

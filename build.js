import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const slidesDir = path.join(process.cwd(), 'slides');
const distDir = path.join(process.cwd(), 'dist');

console.log('==========================================');
console.log(' 🚀 开始多课程 Slidev 云端构建程序');
console.log('==========================================');

// 1. 确保目录准备就绪
if (!fs.existsSync(slidesDir)) {
  console.error('❌ 未找到 slides/ 目录，构建中止。');
  process.exit(1);
}

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// 2. 扫描课件目录
const items = fs.readdirSync(slidesDir);
const courses = [];

for (const item of items) {
  const itemPath = path.join(slidesDir, item);
  if (fs.statSync(itemPath).isDirectory()) {
    const slidesFile = path.join(itemPath, 'slides.md');
    if (fs.existsSync(slidesFile)) {
      courses.push({
        id: item,
        path: slidesFile,
        dir: itemPath
      });
    }
  }
}

console.log(`📂 发现 ${courses.length} 个幻灯片课件:`);
courses.forEach(c => console.log(`  - [${c.id}]`));

// 3. 逐个编译 Slidev 幻灯片
const builtCourses = [];

for (const course of courses) {
  console.log(`\n------------------------------------------`);
  console.log(`🛠 正在构建课件: ${course.id}...`);
  console.log(`------------------------------------------`);
  
  const courseOutDir = path.join(distDir, course.id);
  const baseHref = `/${course.id}/`;
  
  // 执行 slidev build
  const cmd = `npx slidev build "${course.path}" --out "${courseOutDir}" --base "${baseHref}"`;
  console.log(`运行指令: ${cmd}`);
  
  try {
    execSync(cmd, { stdio: 'inherit' });
    
    // 成功后，尝试提取标题和副标题作为门户展示
    const content = fs.readFileSync(course.path, 'utf-8');
    let title = course.id;
    let subtitle = '';
    
    // 正则提取首个 H1（过滤掉注释）
    const cleanContent = content.replace(/<!--[\s\S]*?-->/g, '');
    const h1Match = cleanContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || cleanContent.match(/^#\s+(.+)$/m);
    if (h1Match) {
      title = h1Match[1].replace(/<[^>]+>/g, '').trim();
    }
    
    // 正则提取首个 H2
    const h2Match = cleanContent.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || cleanContent.match(/^##\s+(.+)$/m);
    if (h2Match) {
      subtitle = h2Match[1].replace(/<[^>]+>/g, '').trim();
    }
    
    builtCourses.push({
      id: course.id,
      title: title,
      subtitle: subtitle || '点击进入播放演示',
      link: `./${course.id}/`
    });
    
    console.log(`✅ 课件 [${course.id}] 构建成功！`);
  } catch (err) {
    console.error(`❌ 课件 [${course.id}] 构建失败:`, err.message);
  }
}

// 4. 生成精美的门户 Portal 页面
console.log('\n==========================================');
console.log(' 🎨 正在生成多课程门户导航首页 (index.html)');
console.log('==========================================');

const portalHtml = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slidev 幻灯片演示托管中心</title>
  <!-- 引入 Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --bg-gradient: linear-gradient(135deg, #0f172a 0%, #020617 100%);
      --card-bg: rgba(30, 41, 59, 0.4);
      --card-border: rgba(255, 255, 255, 0.08);
      --text-main: #f8fafc;
      --text-sub: #94a3b8;
      --primary: #3b82f6;
      --primary-glow: rgba(59, 130, 246, 0.35);
      --purple: #8b5cf6;
      --purple-glow: rgba(139, 92, 246, 0.25);
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Outfit', 'Inter', 'Noto Sans SC', sans-serif;
      background: var(--bg-gradient);
      min-height: 100vh;
      color: var(--text-main);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      overflow-x: hidden;
    }

    /* 装饰性背景光晕 */
    .glow-1 {
      position: absolute;
      top: -10%;
      left: -10%;
      width: 50vw;
      height: 50vw;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .glow-2 {
      position: absolute;
      bottom: -10%;
      right: -10%;
      width: 50vw;
      height: 50vw;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .container {
      max-width: 1000px;
      width: 100%;
      position: relative;
      z-index: 10;
    }

    header {
      text-align: center;
      margin-bottom: 4rem;
    }

    header .tag {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      color: var(--primary);
      background: rgba(59, 130, 246, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      border: 1px solid rgba(59, 130, 246, 0.2);
      margin-bottom: 1.25rem;
    }

    header h1 {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      background: linear-gradient(to right, #ffffff, #94a3b8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }

    header p {
      font-size: 1.1rem;
      color: var(--text-sub);
      font-weight: 300;
      max-width: 600px;
      margin: 0 auto;
    }

    /* 网格卡片布局 */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      width: 100%;
    }

    .card {
      background: var(--card-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--card-border);
      border-radius: 24px;
      padding: 2.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
      min-height: 250px;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--primary), var(--purple));
      opacity: 0;
      transition: opacity 0.4s;
    }

    .card:hover {
      transform: translateY(-8px);
      border-color: rgba(255, 255, 255, 0.15);
      box-shadow: 
        0 20px 40px -15px rgba(0, 0, 0, 0.5),
        0 0 50px -10px var(--primary-glow);
    }

    .card:hover::before {
      opacity: 1;
    }

    .card-body {
      margin-bottom: 2rem;
    }

    .card-meta {
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--text-sub);
      margin-bottom: 0.75rem;
      opacity: 0.6;
    }

    .card h2 {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--text-main);
      line-height: 1.35;
      margin-bottom: 0.75rem;
    }

    .card p {
      font-size: 0.9rem;
      color: var(--text-sub);
      line-height: 1.5;
    }

    .card-action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-main);
      transition: color 0.3s;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary);
      text-decoration: none;
      transition: all 0.3s;
    }

    .card:hover .btn {
      color: #60a5fa;
      transform: translateX(4px);
    }

    .btn svg {
      width: 18px;
      height: 18px;
      transition: transform 0.3s;
    }

    .card:hover .btn svg {
      transform: translateX(4px);
    }

    footer {
      text-align: center;
      margin-top: 6rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      width: 100%;
      font-size: 0.85rem;
      color: rgba(148, 163, 184, 0.4);
    }

    /* 空状态 */
    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
      background: var(--card-bg);
      border: 1px dashed var(--card-border);
      border-radius: 24px;
      color: var(--text-sub);
    }

    @media (max-width: 640px) {
      header h1 {
        font-size: 2.25rem;
      }
      body {
        padding: 3rem 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="glow-1"></div>
  <div class="glow-2"></div>

  <div class="container">
    <header>
      <div class="tag">Knowledge Hub</div>
      <h1>幻灯片演示托管中心</h1>
      <p>精美、交互、高品质的在线幻灯片，任何人使用浏览器即可轻松访问</p>
    </header>

    <main>
      ${builtCourses.length === 0 ? `
        <div class="empty-state">
          <h3>暂无课件</h3>
          <p class="mt-2">请使用 sync.ps1 同步课件到 slides 文件夹后重新构建。</p>
        </div>
      ` : `
        <div class="grid">
          ${builtCourses.map(course => `
            <article class="card">
              <div class="card-body">
                <div class="card-meta">Course / Presentation</div>
                <h2>${course.title}</h2>
                <p>${course.subtitle}</p>
              </div>
              <div class="card-action">
                <span></span>
                <a href="${course.link}" class="btn">
                  进入播放
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      `}
    </main>

    <footer>
      <p>&copy; ${new Date().getFullYear()} Built with Slidev & Vercel. All rights reserved.</p>
    </footer>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'index.html'), portalHtml);
console.log('✅ 门户导航首页生成成功！位置: dist/index.html');
console.log('\n==========================================');
console.log(' 🎉 所有幻灯片构建完成！可进行发布。');
console.log('==========================================');

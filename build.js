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

// 4. 生成默认的 404 页面作为首页（防止用户探测到其他课程链接，保证隐私隔离）
console.log('\n==========================================');
console.log(' 🔒 正在生成默认的隐私保护首页 (404 index.html)');
console.log('==========================================');

const portalHtml = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 Not Found</title>
  <style>
    body {
      background-color: #0b0f19;
      color: #475569;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      text-align: center;
    }
    h1 {
      color: #cbd5e1;
      font-size: 2.5rem;
      font-weight: 400;
      margin: 0 0 0.5rem 0;
      letter-spacing: 0.05em;
    }
    p {
      font-size: 1rem;
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'index.html'), portalHtml);
console.log('✅ 隐私保护首页生成成功！位置: dist/index.html');
console.log('\n==========================================');
console.log(' 🎉 所有幻灯片构建完成！可进行发布。');
console.log('==========================================');


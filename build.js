import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

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

// 4. 生成默认的 Slides Hub 双模门户首页
console.log('\n==========================================');
console.log(' 🔒 正在生成 Slides Hub 双模门户首页 (index.html)');
console.log('==========================================');

const adminPasswordHash = crypto.createHash('sha256').update('slidevadmin').digest('hex');

const portalHtml = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slides Hub</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-main: #070a13;
      --card-bg: rgba(15, 23, 42, 0.55);
      --card-border: rgba(255, 255, 255, 0.08);
      --card-hover-border: rgba(99, 102, 241, 0.45);
      --text-primary: #f8fafc;
      --text-secondary: #94a3b8;
      --text-muted: #64748b;
      --accent: #6366f1;
      --accent-hover: #4f46e5;
      --accent-glow: rgba(99, 102, 241, 0.3);
      --error: #ef4444;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-main);
      color: var(--text-primary);
      font-family: 'Plus Jakarta Sans', 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-x: hidden;
      position: relative;
    }

    /* Iframe Background */
    .bg-iframe {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      z-index: -2;
      pointer-events: none;
      opacity: 0.5;
      filter: blur(2px) brightness(0.8);
      transform: scale(1.02);
    }

    .bg-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(7, 10, 19, 0.3) 0%, rgba(7, 10, 19, 0.9) 100%);
      z-index: -1;
      pointer-events: none;
    }

    /* Decorative Glow Blobs */
    .glow-blob {
      position: absolute;
      width: 450px;
      height: 450px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(168, 85, 247, 0.04) 50%, transparent 100%);
      filter: blur(80px);
      pointer-events: none;
      border-radius: 50%;
      z-index: -1;
      animation: float 25s infinite alternate ease-in-out;
    }
    .blob-1 {
      top: 10%;
      left: 10%;
    }
    .blob-2 {
      bottom: 10%;
      right: 10%;
      animation-delay: -6s;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 100%);
    }

    @keyframes float {
      0% { transform: translate(0, 0) scale(1); }
      100% { transform: translate(60px, 40px) scale(1.15); }
    }

    /* Lock Screen / Gateway Card */
    .gateway-container {
      background: rgba(10, 15, 30, 0.65);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: 28px;
      padding: 3.5rem 3rem;
      width: 90%;
      max-width: 480px;
      box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.6), 
                  inset 0 1px 0 rgba(255, 255, 255, 0.1);
      text-align: center;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 10;
    }

    .logo-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }

    .logo-icon {
      width: 64px;
      height: 64px;
      border-radius: 18px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
      border: 1px solid rgba(99, 102, 241, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent);
      margin-bottom: 1.25rem;
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
      animation: pulseGlow 3s infinite alternate ease-in-out;
    }

    @keyframes pulseGlow {
      0% {
        box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
        border-color: rgba(99, 102, 241, 0.3);
      }
      100% {
        box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
        border-color: rgba(168, 85, 247, 0.5);
      }
    }

    .logo-icon svg {
      width: 32px;
      height: 32px;
    }

    .portal-title {
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      font-size: 2.5rem;
      background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.03em;
    }

    /* Input Field Group */
    .input-group {
      position: relative;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 4px 6px 4px 18px;
      margin-top: 1.5rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .input-group:focus-within {
      border-color: var(--accent);
      box-shadow: 0 0 0 4px var(--accent-glow);
      background: rgba(255, 255, 255, 0.07);
    }

    .input-group input {
      flex: 1;
      background: transparent;
      border: none;
      color: var(--text-primary);
      font-size: 1.05rem;
      outline: none;
      padding: 12px 0;
      font-family: inherit;
    }

    .input-group input::placeholder {
      color: var(--text-muted);
    }

    .input-icon-btn {
      background: transparent;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s;
      margin-right: 4px;
      border-radius: 8px;
    }

    .input-icon-btn:hover {
      color: var(--text-primary);
      background: rgba(255, 255, 255, 0.05);
    }

    .input-icon-btn svg {
      width: 20px;
      height: 20px;
    }

    .submit-btn {
      background: var(--accent);
      color: white;
      border: none;
      border-radius: 12px;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .submit-btn:hover {
      background: var(--accent-hover);
      transform: scale(1.04);
      box-shadow: 0 4px 12px var(--accent-glow);
    }

    .submit-btn svg {
      width: 20px;
      height: 20px;
    }

    /* Error Message and Tips */
    .error-message {
      color: var(--error);
      font-size: 0.875rem;
      margin-top: 1rem;
      min-height: 20px;
      opacity: 0;
      transition: opacity 0.3s;
      font-weight: 500;
    }

    .tip-text {
      color: var(--text-secondary);
      font-size: 0.8rem;
      margin-top: 2rem;
      line-height: 1.6;
      opacity: 0.7;
    }

    /* Shake Animation for incorrect entries */
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-6px); }
      40%, 80% { transform: translateX(6px); }
    }

    .shake {
      animation: shake 0.4s ease-in-out;
      border-color: var(--error) !important;
      box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15) !important;
    }

    /* Dashboard Style */
    .dashboard-container {
      width: 90%;
      max-width: 1200px;
      margin: 4rem auto;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      margin-bottom: 2.5rem;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .dashboard-title {
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      font-size: 2.2rem;
      background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.02em;
    }

    .badge {
      background: rgba(99, 102, 241, 0.15);
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: #a5b4fc;
      padding: 4px 12px;
      border-radius: 99px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: var(--text-primary);
      padding: 10px 18px;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.15);
    }

    .btn-secondary svg {
      width: 16px;
      height: 16px;
    }

    /* Stats bar */
    .stats-bar {
      margin-bottom: 2rem;
    }

    .stat-item {
      display: inline-flex;
      align-items: baseline;
      gap: 8px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.04);
      padding: 8px 16px;
      border-radius: 12px;
    }

    .stat-value {
      font-family: 'Outfit', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent);
    }

    .stat-label {
      color: var(--text-secondary);
      font-size: 0.85rem;
    }

    /* Course Cards Grid */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .course-card {
      position: relative;
      background: var(--card-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 1.75rem;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.3);
    }

    .course-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(800px circle at var(--x, 0px) var(--y, 0px), rgba(99, 102, 241, 0.08), transparent 40%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s;
    }

    .course-card:hover::before {
      opacity: 1;
    }

    .course-card:hover {
      transform: translateY(-5px);
      border-color: var(--card-hover-border);
      box-shadow: 0 20px 40px -15px rgba(99, 102, 241, 0.2);
    }

    .card-id {
      font-family: 'Outfit', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--accent);
      letter-spacing: 0.1em;
      margin-bottom: 0.75rem;
    }

    .card-title {
      color: var(--text-primary);
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      line-height: 1.4;
      transition: color 0.2s;
    }

    .course-card:hover .card-title {
      color: #fff;
    }

    .card-subtitle {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: 1.75rem;
      line-height: 1.5;
      flex-grow: 1;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.875rem;
      color: var(--text-secondary);
      font-weight: 500;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding-top: 1rem;
      transition: color 0.2s;
    }

    .course-card:hover .card-footer {
      color: var(--accent);
    }

    .card-footer svg {
      width: 18px;
      height: 18px;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .course-card:hover .card-footer svg {
      transform: translate(3px, -3px);
      color: var(--accent);
    }

    /* Card Entrance Animation */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .fade-in-up {
      opacity: 0;
      animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  </style>
</head>
<body>
  <!-- Embedded https://cover.sli.dev for dynamic aesthetic background -->
  <iframe src="https://cover.sli.dev" class="bg-iframe" tabindex="-1"></iframe>
  <div class="bg-overlay"></div>

  <!-- Ambient Glow -->
  <div class="glow-blob blob-1"></div>
  <div class="glow-blob blob-2"></div>

  <!-- Gateway Lock Screen -->
  <div id="lockScreen" class="gateway-container fade-in-up">
    <div class="logo-area">
      <div class="logo-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
      </div>
      <h1 class="portal-title">Slides Hub</h1>
    </div>
    
    <div class="input-group" id="inputWrapper">
      <input type="password" id="gateInput" placeholder="输入课件代码或管理密码..." autocomplete="off">
      <button id="toggleVisibleBtn" type="button" class="input-icon-btn" title="显示/隐藏输入内容">
        <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
      </button>
      <button id="gateBtn" class="submit-btn" aria-label="验证">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
    </div>
    <p id="errorMsg" class="error-message"></p>
    <div class="tip-text">提示：输入课程ID（如 knowledge_sharing）直接访问，或输入密码解锁所有课件</div>
  </div>

  <!-- Admin Dashboard -->
  <div id="adminDashboard" class="dashboard-container" style="display: none;">
    <header class="dashboard-header">
      <div class="header-left">
        <h1 class="dashboard-title">Slides Hub</h1>
        <span class="badge">管理面板</span>
      </div>
      <button id="logoutBtn" class="btn-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
        安全退出
      </button>
    </header>
    
    <div class="dashboard-content">
      <div class="stats-bar">
        <div class="stat-item">
          <span class="stat-value" id="courseCount">0</span>
          <span class="stat-label">已部署幻灯片</span>
        </div>
      </div>
      
      <div class="grid-container" id="coursesGrid">
        <!-- JS Dynamic rendering -->
      </div>
    </div>
  </div>

  <script>
    const builtCourses = ${JSON.stringify(builtCourses)};
    const adminHash = "${adminPasswordHash}";

    // SHA-256 helper
    async function sha256(message) {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      return hashHex;
    }

    const inputEl = document.getElementById('gateInput');
    const inputWrapper = document.getElementById('inputWrapper');
    const btnEl = document.getElementById('gateBtn');
    const errorEl = document.getElementById('errorMsg');
    const lockScreen = document.getElementById('lockScreen');
    const adminDashboard = document.getElementById('adminDashboard');
    const coursesGrid = document.getElementById('coursesGrid');
    const courseCountEl = document.getElementById('courseCount');
    const toggleVisibleBtn = document.getElementById('toggleVisibleBtn');
    const eyeIcon = document.getElementById('eyeIcon');

    // Update stats
    courseCountEl.textContent = builtCourses.length;

    // Toggle Input visibility (password / text)
    toggleVisibleBtn.addEventListener('click', () => {
      if (inputEl.type === 'password') {
        inputEl.type = 'text';
        // Eye Open SVG
        eyeIcon.innerHTML = '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>';
      } else {
        inputEl.type = 'password';
        // Eye Closed SVG
        eyeIcon.innerHTML = '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>';
      }
    });

    function showError(msg) {
      errorEl.textContent = msg;
      errorEl.style.opacity = 1;
      inputWrapper.classList.add('shake');
      inputEl.focus();
      setTimeout(() => inputWrapper.classList.remove('shake'), 400);
    }

    function clearError() {
      errorEl.textContent = '';
      errorEl.style.opacity = 0;
    }

    async function handleVerify() {
      const value = inputEl.value.trim();
      if (!value) return;
      
      // 1. Check if matches any course id (exact or case-insensitive)
      const matchedCourse = builtCourses.find(c => c.id.toLowerCase() === value.toLowerCase());
      if (matchedCourse) {
        window.location.href = matchedCourse.link;
        return;
      }
      
      // 2. Check if password matches admin
      const hashedValue = await sha256(value);
      if (hashedValue === adminHash) {
        sessionStorage.setItem('slides-hub-admin', 'true');
        revealDashboard();
        return;
      }
      
      // 3. Not found
      showError('未找到对应的幻灯片或密码错误');
    }

    function revealDashboard() {
      lockScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      lockScreen.style.opacity = '0';
      lockScreen.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        lockScreen.style.display = 'none';
        adminDashboard.style.display = 'block';
        adminDashboard.style.opacity = '0';
        
        renderCards();
        
        setTimeout(() => {
          adminDashboard.style.opacity = '1';
        }, 50);
      }, 400);
    }

    function renderCards() {
      coursesGrid.innerHTML = '';
      builtCourses.forEach((course, idx) => {
        const card = document.createElement('a');
        card.href = course.link;
        card.className = 'course-card fade-in-up';
        card.style.animationDelay = \`\${idx * 0.08}s\`;
        card.innerHTML = \`
          <div class="card-id">\${course.id}</div>
          <h3 class="card-title">\${course.title}</h3>
          <p class="card-subtitle">\${course.subtitle || '点击进入播放演示'}</p>
          <div class="card-footer">
            <span>进入演示</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
        \`;
        
        // Add spotlight effect
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--x', \`\${x}px\`);
          card.style.setProperty('--y', \`\${y}px\`);
        });
        
        coursesGrid.appendChild(card);
      });
    }

    function logout() {
      sessionStorage.removeItem('slides-hub-admin');
      adminDashboard.style.opacity = '0';
      setTimeout(() => {
        adminDashboard.style.display = 'none';
        lockScreen.style.display = 'block';
        setTimeout(() => {
          lockScreen.style.opacity = '1';
          lockScreen.style.transform = 'scale(1)';
        }, 50);
        inputEl.value = '';
        clearError();
      }, 500);
    }

    // Listeners
    btnEl.addEventListener('click', handleVerify);
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleVerify();
    });
    inputEl.addEventListener('input', clearError);
    document.getElementById('logoutBtn').addEventListener('click', logout);

    // Session auto-auth
    if (sessionStorage.getItem('slides-hub-admin') === 'true') {
      lockScreen.style.display = 'none';
      adminDashboard.style.display = 'block';
      adminDashboard.style.opacity = '1';
      renderCards();
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'index.html'), portalHtml);
console.log('✅ Slides Hub 双模门户首页生成成功！位置: dist/index.html');
console.log('\n==========================================');
console.log(' 🎉 所有幻灯片构建完成！可进行发布。');
console.log('==========================================');


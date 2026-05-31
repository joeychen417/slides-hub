# Slidev Multi-Course Hub (多课程幻灯片托管中心)

该项目用于管理和托管多个独立的 Slidev 演示文稿，并自动部署到 Cloudflare Pages。

## 本地工作流

### 1. 同步与推送
当您在 Obsidian 中编辑完幻灯片课件（位于 `d:\AI\Joey\06output\<course-name>\deck-outline.md`）后，只需在本项目根目录下双击运行：
```powershell
.\sync.ps1
```
脚本会自动：
*   将课件同步到 `slides/<course-name>/slides.md`。
*   安全隔离您的 Obsidian 隐私库（仅上传课件）。
*   检测改动并提示您自动 Git 提交并推送至 GitHub。

### 2. 本地构建与预览测试
在根目录下运行以下命令可以模拟云端的多课程打包构建：
```bash
node build.js
```
编译结果将输出至 `dist/` 文件夹下，其中：
*   `dist/index.html`：**默认的隐私保护页面**（只返回 404，防止他人扫描或探测您的课件列表）。
*   `dist/<course-name>/`：各个独立的课件展示网页。

---

## Cloudflare Pages 云端构建配置

在 Cloudflare Pages 导入 GitHub 仓库后，请配置以下参数以确保顺利构建：

| 配置项 | 填写值 | 说明 |
| :--- | :--- | :--- |
| **Framework preset** | `None` / `Other` | 保持默认即可 |
| **Build command** | `npm run build` | 运行多课程打包脚本 |
| **Build output directory** | `dist` | 静态资源输出路径 |
| **NODE_VERSION** (环境变量) | `20` | 指定 Node.js 版本（在 Environment variables 中添加） |

---

## 访问与隐私说明
由于安全和隐私考虑，项目取消了全局课程列表：
*   访问 `https://your-domain.pages.dev/` 将展示标准的 **404 Not Found**。
*   访问具体分享链接（如 `https://your-domain.pages.dev/ai-training-for-teachers/`）即可正常播放对应的 PPT。

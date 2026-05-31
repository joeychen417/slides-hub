---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  应对信息过载：如何打造具有"高实时性"特备课库
drawings:
  persist: false
transition: fade-out
title: 知识引擎分享
mdc: false
layout: cover
background: https://cover.sli.dev
---

<div class="enter-animation">
  <h1 class="mt-20">信息过载时代</h1>
  <h2 class="text-4xl mt-4">如何打造 <span class="shimmer-text">"高实时性"</span> 的备课库</h2>
</div>


<!--
各位老师大家下午好。今年3月，我有幸参加了集团领导干部在中央党校培训的支持工作。在那边绝大部分是事务性工作，主要是做一些签到考勤的工作，我就简单谈一谈我的一些观察和思考。我选的的题目是信息过载时代如何打造高实时性的备课库。
-->

---
layout: center
---

<div class="enter-animation h-full flex flex-col justify-center items-center">
  <h1 class="text-5xl font-black mb-12">一个现场观察...</h1>
  <div class="glass-card w-full max-w-4xl p-10 flex flex-col md:flex-row items-center justify-between gap-10">
    <div class="text-left flex-1">
      <h2 class="text-4xl font-black leading-tight text-gray-800">
        中央党校教授的课件 <br>
        竟然实现了 <span class="text-blue-600">极高实时性</span>
      </h2>
    </div>
    <div class="flex items-center gap-6">
      <div class="h-24 w-1 bg-blue-500/20 rounded-full"></div>
      <div class="text-left">
        <div class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">最后更新截至</div>
        <div class="text-8xl font-black shimmer-text tracking-tighter">昨天</div>
      </div>
    </div>
  </div>
<div class="mt-12 flex items-center gap-2 opacity-50 italic">
    <span class="text-xl">这是如何实现的？</span>
  </div>
</div>

<!--
原因是因为，我在现场观察到，所有老师讲授的内容都有极强的实时性，基本都是以开讲的前一天数据。这就让我在想，他们是如何实现的？
我们正处于一个前所未有的“数据爆炸”时代。信息的获取都十分方便。但随之而来的是“供给无限膨胀与人类注意力刚性之间的结构性缺口”。
-->

---
layout: default
---

<div class="h-full flex flex-col justify-center px-12 enter-animation">
  <div class="grid grid-cols-2 gap-16 items-center">
    <!-- 左侧：传统混乱 -->
    <div class="text-center p-12 rounded-3xl bg-gray-50 border border-dashed border-gray-300 relative group">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-400 text-white text-xs font-black rounded-full uppercase">Traditional</div>
      <div class="flex justify-center gap-2 mb-10 opacity-30 group-hover:opacity-100 transition-opacity">
        <div class="text-6xl">📁</div><div class="text-6xl translate-y-4">📁</div><div class="text-6xl -translate-x-4">📁</div>
      </div>
      <h2 class="text-3xl font-black text-gray-400 mb-4">囤积的“文件”</h2>
      <p class="text-gray-400 font-medium">Garbage In, Garbage Out.</p>
    </div>
    <!-- 右侧：现代原子 -->
    <div class="text-center p-12 rounded-3xl bg-blue-600 border border-blue-400 relative shadow-[0_20px_50px_-15px_rgba(37,99,235,0.5)] transform hover:scale-105 transition-transform duration-500">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-blue-600 text-xs font-black rounded-full uppercase">The Forge</div>
      <div class="flex justify-center mb-10">
        <div class="text-7xl relative">
          <div class="absolute inset-0 bg-white blur-3xl opacity-40 animate-pulse"></div>
          💎
        </div>
      </div>
      <h2 class="text-3xl font-black text-white mb-4">人工筛选的“卡片”</h2>
      <p class="text-blue-100 font-medium tracking-widest">High Confidence Asset.</p>
    </div>
  </div>
  <div class="mt-16 text-center opacity-40 italic text-lg">“ 机器负责扫描广度，我负责定义深度。”</div>
</div>

<!--
尤其是大语言模型出现后，一键收集，一键整理要点更方便了，这也是很多人现在做的，让AI收集过去一天某个领域发生的事，然后需要制作材料的时候让AI去从资料库中抓取生成。通过这种方式来解决注意力不够，信息获取不足的问题。但我发现这些东西没经过我的脑子，直接进入硬盘里。然后当我们需要输出产品时，会不自觉的依赖这些生成的文件，结果就是：garbage in garbage out。因为内容中缺少自己的思考，所以就无法判定资料的可靠性，转而还需要回头去验证资料时效，准确性等问题，反而浪费了时间。AI 虽然看似节省了我们的时间，却把我们推入了“跑步机陷阱”——我们被更多、更杂的信息包裹，导致“判断力”的成本变得异常昂贵。

所以我就重构了我的学习流程，这些原始资料必须经过中间这个“知识熔炉”的加工。只有经过人工筛选、提纯后的“卡片”，才是真正有价值的资产。
-->

---
layout: default
---
<div class="h-full flex flex-col justify-center px-12 enter-animation">
  <h1 class="text-5xl font-black mb-16 leading-tight text-gray-800">将 Vault 内容 <span class="shimmer-text">"炼化"</span> 为原子 <br>真正化为己用</h1>
  <div class="flex items-center justify-between gap-8 bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-xl">
    <div v-click class="flex-1 text-center">
      <div class="w-24 h-24 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner mb-6">📁</div>
      <h3 class="text-2xl font-bold mb-2">原始资料库</h3>
      <p class="opacity-50 text-sm">人工筛选后的高潜长文</p>
    </div>
    <div v-click class="text-gray-300 text-4xl animate-pulse">→</div>
    <div v-click class="flex-1 text-center relative">
      <div class="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg mb-6 transform hover:scale-110 transition-transform">🔥</div>
      <h3 class="text-2xl font-bold text-purple-700 mb-2">人工冶炼加工</h3>
      <p class="opacity-50 text-sm">提纯观点/ 案例</p>
    </div>
    <div v-click class="text-gray-300 text-4xl animate-pulse" style="animation-delay: 0.5s">→</div>
    <div v-click class="flex-1 text-center">
      <div class="w-24 h-24 mx-auto bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center text-4xl shadow-md mb-6 relative overflow-hidden">
        <div class="absolute inset-0 bg-blue-400 opacity-20 blur-xl"></div>
        💎
      </div>
      <h3 class="text-2xl font-bold text-blue-700 mb-2">知识原子库</h3>
      <p class="opacity-50 text-sm">属于自己的最小化知识资产</p>
    </div>
  </div>
</div>
<!--
具体怎么做？分为三步。
第一步，建立原始资料库，只存放你亲自筛选过的高潜力文章；
第二步，进入人工冶炼，在这个阶段，我们会利用 AI 工具快速提取观点和案例；
最终，这些精华会进入我们的知识原子库。这些“原子”就是我们备课库的最小单位，它们可以被无限次地、跨平台地调用。
-->

---
layout: default
---

<div class="h-full flex flex-col justify-center px-12 enter-animation">
  <div class="grid grid-cols-5 gap-12 items-center">
    <div class="col-span-3">
      <h1 class="text-5xl font-black mb-8 leading-tight text-gray-800">内容与版式彻底解耦 <br>实现 <span class="text-green-600">实时热更新</span></h1>
      <div class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">1</div>
          <span class="text-xl font-medium">随时调用库内原子，像搭乐高一样组装</span>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">2</div>
          <span class="text-xl font-medium">只要底层资料更新，演示页面瞬间同步</span>
        </div>
      </div>
    </div>
    <div class="col-span-2">
       <div class="glass-card bg-gray-900 border-gray-700 text-green-400 font-mono p-8 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
         <div class="text-xs opacity-50 mb-4 border-b border-gray-700 pb-2">Terminal // Ready to Run</div>
         <p v-click class="mb-2">> <span class="typewriter-text">Atoms</span></p>
         <p v-click class="mb-2 cursor-pointer group" @click="$slidev.nav.go(8)">
           > <span class="typewriter-text group-hover:text-blue-400 transition-colors">MOC</span>
           <span class="text-[10px] opacity-0 group-hover:opacity-100 ml-2 text-blue-400 italic">Click to Play Demo</span>
         </p>
         <p v-click class="mb-2">> <span class="typewriter-text">Paragraphs</span></p>
         <p v-click class="mb-2">> <span class="typewriter-text">Project</span></p>
         <p v-click class="mt-6 text-xl font-bold text-white animate-pulse">>>> Ready for Slides</p>
       </div>
    </div>
  </div>
</div>

---
layout: center
---

<div class="text-center enter-animation">
  <p class="text-3xl mb-8 opacity-60 uppercase tracking-widest">Live Demonstration</p>
  <h1 class="text-7xl font-black mb-12">从原子到大屏的 3 分钟进化</h1>
  <div class="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8">
    <div class="bg-white rounded-full px-12 py-5 shadow-lg">
      <h2 class="text-4xl font-bold shimmer-text">实操演示</h2>
    </div>
  </div>
</div>

---
layout: two-cols
---

<script setup>
import { ref } from 'vue'
const targetUrl = ref('https://www.xuexi.cn/26d28f3e53f9533c50b9ddd94ae5d79a/a86870b30c3994f155fb3c2aa2838fb9.html')
</script>
<div class="h-full flex flex-col justify-center pr-8 enter-animation">
  <h1 class="text-4xl font-black mb-6 text-gray-800">内容源引用：<br>学习强国</h1>
  <div class="space-y-4">
    <!-- 人民日报测试按钮 -->
    <div @click="targetUrl = 'http://paper.people.com.cn/rmrb/index.html'" 
         class="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 cursor-pointer transition-all group border border-transparent hover:border-red-100">
      <div class="w-2 h-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform"></div>
      <div class="flex flex-col">
        <span class="font-bold text-gray-700">切换至：人民日报</span>
      </div>
    </div>
    <!-- 还原按钮 -->
    <div @click="targetUrl = 'https://www.xuexi.cn/26d28f3e53f9533c50b9ddd94ae5d79a/a86870b30c3994f155fb3c2aa2838fb9.html'"
         class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-200">
      <div class="w-2 h-2 rounded-full bg-gray-400"></div>
      <span class="font-medium text-gray-500">切换至：学习强国</span>
    </div>
  </div>
</div>

::right::

<div class="h-full p-4 enter-animation" style="animation-delay: 0.3s">
  <div class="glass-card p-0 overflow-hidden flex flex-col h-full border-gray-200/50 shadow-2xl">
    <!-- 模拟浏览器顶部控制条 -->
    <div class="bg-gray-100/80 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-red-400"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div class="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div class="flex-1 mx-10 bg-white/50 rounded-lg py-1 px-3 text-[10px] text-gray-400 truncate text-center">
        {{ targetUrl }}
      </div>
    </div>
    <!-- 缩放容器 -->
    <div class="flex-1 relative overflow-hidden bg-white">
      <iframe 
        :src="targetUrl" 
        style="width: 200%; height: 200%; transform: scale(0.5); transform-origin: top left; border: none;"
      ></iframe>
    </div>
  </div>
</div>

<!--
实操环节。大家请看这个实时交互界面。左侧是我们的内容源导航，右侧就是直接调取的权威信源。
（点击‘人民日报’）
看，我们不需要切出窗口，不需要粘贴截图，直接在演示环境中调取最及时的原刊排版。这意味着，如果底层政策更新了，你的课件内容永远是‘最新版’，这就是高实时性的威力。
-->

---
layout: center
---
<div class="enter-animation w-full max-w-5xl relative">
  <!-- 返回按钮：指定跳回 Page 5 的第 5 个 click 状态 -->
  <button @click="$slidev.nav.go(5, 5)" class="absolute -top-12 right-0 flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors group">
    <span class="text-sm font-bold uppercase tracking-widest">Back to Forge</span>
    <div class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-blue-500">←</div>
  </button>
   <div class="bg-black rounded-3xl overflow-hidden shadow-[0_30px_80px_-15px_rgba(0,0,0,0.3)] border border-gray-800">
    <!-- 提示：播完自动跳回 Page 5 的完成态 -->
    <video 
      controls 
      @ended="$slidev.nav.go(5, 5)"
      class="w-full aspect-video"
      poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    >
      <source src="/MOC-Obsidian.mp4" type="video/mp4">
      您的浏览器不支持 HTML5 视频。
    </video>
  </div>
</div>

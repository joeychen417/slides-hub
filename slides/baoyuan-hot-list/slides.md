---
theme: default
title: 保院热榜
titleTemplate: '%s'
favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>'
canvasWidth: 1280
aspectRatio: '16/9'
transition: fade
fonts:
  sans: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "SF
    Pro Text", "Microsoft YaHei", sans-serif'
---

<!-- Slide 1: 封面 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 0.25, scale: 1, transition: { duration: 1500, delay: 200 } }" class="absolute rounded-full" style="left: 902px; top: 0px; width: 378px; height: 378px; background: #2E6BE6; filter: blur(80px);"></div>
<div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 0.25, scale: 1, transition: { duration: 1500, delay: 400 } }" class="absolute rounded-full" style="left: 1060px; top: 157px; width: 220px; height: 220px; background: #6E6AD6; filter: blur(80px);"></div>

<div v-motion :initial="{ opacity: 0, height: 0 }" :enter="{ opacity: 1, height: 248, transition: { duration: 800 } }" class="absolute" style="left: 86px; top: 181px; width: 8px; background: linear-gradient(to bottom, #2E6BE6, #6E6AD6);"></div>

<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }" class="absolute font-bold" style="left: 102px; top: 172px; font-size: 60px;">
  <span style="color: #232A33">保院</span><span style="color: #2E6BE6">热榜</span>
</div>

<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400 } }" class="absolute font-bold" style="left: 102px; top: 296px; font-size: 32px;">
  <span style="color: #232A33">让行业资讯，</span><span style="color: #2E6BE6">自己走向课堂</span>
</div>

<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 600 } }" class="absolute" style="left: 102px; top: 374px; font-size: 20px; color: #5A6675;">
  面向保险培训场景的 AI 资讯聚合与备课辅助平台。
</div>

<div v-motion :initial="{ opacity: 0, width: 0 }" :enter="{ opacity: 1, width: 403, transition: { duration: 800, delay: 800 } }" class="absolute" style="left: 102px; top: 451px; height: 1px; background: #2E6BE6;"></div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } }" class="absolute" style="left: 102px; top: 472px; font-size: 18px; color  : #8A94A3;">
    赛道五：协同发展
</div>

<!--
各位评委、各位领导好。我选择的赛道是“赛道五：协同发展”方向，向大家汇报的项目是：保院热榜——面向保险培训场景的 AI 资讯聚合与备课辅助平台。
-->

---

<!-- Slide 2: 问题引入 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #EAEEF2, #EAEEF2); z-index: -1;"></div>
<div v-motion :initial="{ opacity: 0, height: 0 }" :enter="{ opacity: 1, height: 226, transition: { duration: 600 } }" class="absolute" style="left: 86px; top: 186px; width: 7px; background: #2E6BE6;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }" class="absolute font-bold" style="left: 102px; top: 177px; font-size: 50px; color: #232A33; line-height: 1.2;">
  每天都有新资讯，<br>但备课时间<br><span style="color: #2E6BE6;">不会变多。</span>
</div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }" class="absolute" style="left: 103px; top: 458px; font-size: 18px; color: #5A6675;">
  公众号 · 行业媒体 · 研究报告 · 监管动态 · 同业案例，信息持续涌入。
</div>

<!-- 右侧瀑布卡片 -->
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 82px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 1;">公众号</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 162px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.85;">行业媒体</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 241px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.7;">研究报告</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 321px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.5;">监管动态</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 401px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.3;">同业案例</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 481px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.15;">自媒体</div>

<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 123px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.9;">党建培训</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 203px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.75;">保险业务</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 282px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.6;">专业能力</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 362px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.4;">综合素养</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 442px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.25;">数智变革</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 522px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05); opacity: 0.1;">传统文化</div>

<!--
选择这个方向的原因是，目前学院正在向两基建设转型，大部分老师都在做课程开发，在日常的资料收集中，我们发现一个痛点：每天都有大量的新资讯涌入，从公众号、行业媒体到监管动态，但讲师们的备课时间是极其有限的，他们往往在海量信息中感到疲于奔命。
-->

---

<!-- Slide 3: AI 把时间还给讲师 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #FAF6EF, #E6ECF5); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="absolute font-bold" style="left: 95px; top: 123px; font-size: 44px; color: #232A33;">
  AI 不替代讲师，它<br><span style="color: #2E6BE6;">把时间还给讲师。</span>
</div>

<div v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }" class="absolute rounded-xl bg-white transition-all duration-500 hover:shadow-2xl cursor-default" style="left: 96px; top: 248px; width: 500px; height: 395px; background: linear-gradient(to bottom right, #F4ECDD, #E4ECF7); border: 1px solid #FFFFFF; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
  <div class="absolute" style="left: 60px; top: 50px; font-size: 32px; line-height: 2;">
    <span style="color: #A0937D">少一点</span> <span style="color: #232A33; font-weight: bold;">资料筛选</span><br>
    <span style="color: #2E6BE6">多一点</span> <span style="color: #232A33; font-weight: bold;">课程设计</span><br>
    <br>
    <span style="color: #A0937D">少一点</span> <span style="color: #232A33; font-weight: bold;">重复搜索</span><br>
    <span style="color: #2E6BE6">多一点</span> <span style="color: #232A33; font-weight: bold;">课堂互动</span>
  </div>
</div>

<div v-click="1" class="absolute rounded-xl bg-white flex flex-col justify-center px-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#2E6BE6] cursor-default" style="left: 646px; top: 248px; width: 538px; height: 183px; border: 1px solid #CBD6E4; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
  <div style="font-size: 20px; color: #8A94A3;">从 搜索资料</div>
  <div style="font-size: 30px; font-weight: bold; color: #2E6BE6; margin-top: 10px;">到 设计课程</div>
</div>

<div v-click="2" class="absolute rounded-xl bg-white flex flex-col justify-center px-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#2E6BE6] cursor-default" style="left: 646px; top: 460px; width: 538px; height: 183px; border: 1px solid #CBD6E4; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
  <div style="font-size: 20px; color: #8A94A3;">从 浏览长文</div>
  <div style="font-size: 30px; font-weight: bold; color: #2E6BE6; margin-top: 10px;">到 选择案例</div>
</div>

<!--
我们的解法是：用 AI 把时间还给讲师。让讲师少花点时间去搜集和筛选资料，多一点时间来设计课程和课堂互动。我们要做的，就是帮助讲师完成“从浏览长文到选择案例”的转变。
-->

---

<!-- Slide 6: 使用体验 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EEF5); z-index: -1;"></div>


<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  先看 <span style="color: #2E6BE6;">价值</span> ，再看全文。
</div>

<div v-motion :initial="{ opacity: 0, height: 0 }" :enter="{ opacity: 1, height: 321, transition: { duration: 800, delay: 300 } }" class="absolute" style="left: 124px; top: 281px; width: 2px; background: #E2E8F2;"></div>

<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }" class="absolute rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default" style="left: 96px; top: 252px; width: 59px; height: 59px; background: #2E6BE6; font-size: 20px; z-index: 10;">01</div>
<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 500 } }" class="absolute" style="left: 180px; top: 255px;">
  <div style="font-size: 28px; font-weight: bold; color: #232A33;">看标题</div>
  <div style="font-size: 16px; color: #5A6675; margin-top: 5px;">是否感兴趣</div>
</div>

<div v-click="1" class="absolute rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default" style="left: 96px; top: 362px; width: 59px; height: 59px; background: #2E6BE6; font-size: 20px; z-index: 10;">02</div>
<div v-click="1" class="absolute" style="left: 180px; top: 365px;">
  <div style="font-size: 28px; font-weight: bold; color: #232A33;">看标签</div>
  <div style="font-size: 16px; color: #5A6675; margin-top: 5px;">判断主题领域</div>
</div>

<div v-click="2" class="absolute rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default" style="left: 96px; top: 472px; width: 59px; height: 59px; background: #2E6BE6; font-size: 20px; z-index: 10;">03</div>
<div v-click="2" class="absolute" style="left: 180px; top: 475px;">
  <div style="font-size: 28px; font-weight: bold; color: #232A33;">看推荐理由</div>
  <div style="font-size: 16px; color: #5A6675; margin-top: 5px;"><span style="color: #2E6BE6;">是否值得讲</span></div>
</div>

<div v-click="3" class="absolute rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default" style="left: 96px; top: 583px; width: 59px; height: 59px; background: #2E6BE6; font-size: 20px; z-index: 10;">04</div>
<div v-click="3" class="absolute" style="left: 180px; top: 586px;">
  <div style="font-size: 28px; font-weight: bold; color: #232A33;">看原文</div>
  <div style="font-size: 16px; color: #5A6675; margin-top: 5px;">一键深入细节</div>
</div>

<div v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }" class="absolute rounded-[36px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(46,107,230,0.3)]" style="left: 780px; top: 60px; width: 330px; height: 600px; background: #1C2433; padding: 8px; box-shadow: 0 25px 50px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2); border: 2px solid #3A4A66;">
<div class="absolute rounded-[28px] overflow-hidden bg-[#FBF9F6]" style="left: 8px; top: 8px; right: 8px; bottom: 8px;">
<div style="height: 100%; overflow-y: auto;">
<!-- 顶栏 -->
<div style="padding: 16px 12px 10px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #EFECE6; background: #FBF9F6; position: sticky; top: 0; z-index: 10;">
<div style="display: flex; align-items: center; gap: 8px;">
<div style="width: 24px; height: 24px; background: #C8785A; border-radius: 6px; display: flex; justify-content: center; align-items: center;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
</div>
<div style="font-size: 16px; font-weight: bold; color: #232A33;">保院热榜</div>
</div>
<div style="display: flex; align-items: center; gap: 8px;">
<div style="width: 28px; height: 28px; background: #F2EFEA; border-radius: 14px; display: flex; justify-content: center; align-items: center; color: #8A94A3;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
</div>
</div>
</div>
<!-- 内容列表 -->
<div style="padding: 12px; display: flex; flex-direction: column; gap: 12px;">
<!-- 卡片 1 -->
<div style="background: white; border-radius: 12px; padding: 12px; border: 1px solid #F0ECE6; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
<div style="font-size: 15px; font-weight: bold; color: #232A33; line-height: 1.4; margin-bottom: 8px;">
学习手记 | 信仰强基 理论固本 思想铸魂 <svg style="display:inline-block; margin-left:2px; color:#A0937D;" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</div>
<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
<div style="display: flex; flex-direction: column; gap: 8px;">
<div style="border: 1px solid #E8A88E; color: #CD8160; padding: 2px 8px; border-radius: 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; width: fit-content;">
<span>🎙️</span> 收听解读
</div>
<div style="display: flex; gap: 6px;">
<span style="background: #C8785A; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: bold;">党性教育</span>
</div>
</div>
<div style="display: flex; flex-direction: column; align-items: flex-end; font-size: 11px; color: #8A94A3; line-height: 1.6;">
<span>06-24</span>
<span>网信中国</span>
</div>
</div>
<div style="background: #FBF8F1; border-radius: 8px; padding: 10px; font-size: 12px; line-height: 1.5; color: #3A4A66;">
<span style="color: #C8785A; font-weight: bold;">💡 AI 推荐：</span>资讯聚焦信仰、理论与思想建设，对提升保险职场学员的党性修养具有直接教学价值...
</div>
</div>
<!-- 卡片 2 -->
<div style="background: white; border-radius: 12px; padding: 12px; border: 1px solid #F0ECE6; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
<div style="font-size: 15px; font-weight: bold; color: #232A33; line-height: 1.4; margin-bottom: 8px;">
深刻认识习近平党建思想的特殊重要地位
</div>
<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
<div style="display: flex; flex-direction: column; gap: 8px;">
<div style="border: 1px solid #E8A88E; color: #CD8160; padding: 2px 8px; border-radius: 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; width: fit-content;">
<span>🎙️</span> 收听解读
</div>
<div style="display: flex; gap: 6px;">
<span style="background: #C8785A; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: bold;">党性教育</span>
</div>
</div>
<div style="display: flex; flex-direction: column; align-items: flex-end; font-size: 11px; color: #8A94A3; line-height: 1.6;">
<span>06-24</span>
<span>共产党员网</span>
</div>
</div>
<div style="background: #FBF8F1; border-radius: 8px; padding: 10px; font-size: 12px; line-height: 1.5; color: #3A4A66;">
<span style="color: #C8785A; font-weight: bold;">💡 AI 推荐：</span>该资讯阐释习近平党建思想，对强化学员党性修养、坚定理想信念具有教学价值...
</div>
</div>
<!-- 卡片 3 -->
<div style="background: white; border-radius: 12px; padding: 12px; border: 1px solid #F0ECE6; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
<div style="font-size: 15px; font-weight: bold; color: #232A33; line-height: 1.4; margin-bottom: 8px;">
重要时刻，不要输在表达上
</div>
<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
<div style="display: flex; flex-direction: column; gap: 8px;">
<div style="border: 1px solid #E8A88E; color: #CD8160; padding: 2px 8px; border-radius: 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; width: fit-content;">
<span>🎙️</span> 收听解读
</div>
<div style="display: flex; gap: 6px;">
<span style="background: #C8785A; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: bold;">领导艺术</span>
</div>
</div>
<div style="display: flex; flex-direction: column; align-items: flex-end; font-size: 11px; color: #8A94A3; line-height: 1.6;">
<span>06-24</span>
<span>刘润</span>
</div>
</div>
<div style="background: #FBF8F1; border-radius: 8px; padding: 10px; font-size: 12px; line-height: 1.5; color: #3A4A66;">
<span style="color: #C8785A; font-weight: bold;">💡 AI 推荐：</span>资讯聚焦关键时刻的表达技巧，可强化职场学员的沟通与决策能力...
</div>
</div>
</div>
<div style="height: 20px;"></div>
</div>
<div class="absolute pointer-events-none" style="bottom: 6px; left: 50%; transform: translateX(-50%); width: 100px; height: 4px; background: #232A33; border-radius: 2px; opacity: 0.4; z-index: 20;"></div>
</div>
</div>

<!--
在产品体验上，我们主打“先看价值，再看全文”。讲师在使用时，首先看标题判断是否感兴趣；接着看标签判断主题领域，我们依据学院下发的课程开发大纲设置了党建、业务、综合素养三大主题，老师可以找到对应的主题去学习；最核心的是看 AI 生成的推荐理由，判断这个资讯是否值得在课堂上讲；最后才是一键点击去深入阅读原文。
-->

---

<!-- Slide 7: 智能推荐 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  <span style="color: #2E6BE6;">推荐理由</span> ，是 AI 与教学场景的 <span style="color: #2E6BE6;">连接点</span> 。
</div>

<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-default" style="left: 95px; top: 247px; width: 530px; height: 367px; border: 1px solid #2E6BE6; padding: 30px; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
  <div style="font-size: 20px; font-weight: bold; color: #9B6CE8; margin-bottom: 20px;">✦ AI 推荐理由</div>
  <div style="font-size: 24px; color: #232A33; line-height: 1.6;">
    本文深入分析了近期监管政策对保险资金运用的影响。适合在 <span style="color: #2E6BE6; font-weight: bold;">《利率与产品定价》</span> 课程中作为补充案例，帮助学员理解宏观环境变化与保险产品形态演进的必然联系。建议在讲解“预定利率”章节前，发给学员作为课前阅读材料。
  </div>
</div>

<div v-click="1" class="absolute flex items-center transition-all duration-300 hover:scale-105 cursor-default" style="left: 680px; top: 248px;">
  <div class="flex items-center justify-center rounded-lg shadow-md" style="width: 65px; height: 65px; background: #2E6BE6;">
    <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>
  </div>
  <div style="margin-left: 20px;">
    <div style="font-size: 24px; font-weight: bold; color: #232A33;">适用课程</div>
    <div style="font-size: 20px; color: #5A6675; margin-top: 4px;">这篇适合讲哪门课</div>
  </div>
</div>

<div v-click="2" class="absolute flex items-center transition-all duration-300 hover:scale-105 cursor-default" style="left: 680px; top: 339px;">
  <div class="flex items-center justify-center rounded-lg shadow-md" style="width: 65px; height: 65px; background: #2E6BE6; color: white; font-size: 24px; font-weight: bold;">+</div>
  <div style="margin-left: 20px;">
    <div style="font-size: 24px; font-weight: bold; color: #232A33;">可补充知识点</div>
    <div style="font-size: 20px; color: #5A6675; margin-top: 4px;">能延伸哪些概念</div>
  </div>
</div>

<div v-click="3" class="absolute flex items-center transition-all duration-300 hover:scale-105 cursor-default" style="left: 680px; top: 430px;">
  <div class="flex items-center justify-center rounded-lg shadow-md" style="width: 65px; height: 65px; background: #2E6BE6;">
    <div style="width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 18px solid white;"></div>
  </div>
  <div style="margin-left: 20px;">
    <div style="font-size: 24px; font-weight: bold; color: #232A33;">可作为课堂案例</div>
    <div style="font-size: 20px; color: #5A6675; margin-top: 4px;">拿来当真实案例</div>
  </div>
</div>

<div v-click="4" class="absolute flex items-center transition-all duration-300 hover:scale-105 cursor-default" style="left: 680px; top: 522px;">
  <div class="flex items-center justify-center rounded-lg shadow-md" style="width: 65px; height: 65px; background: #2E6BE6;">
    <div style="width: 24px; height: 12px; border-radius: 6px; border: 2px solid white;"></div>
  </div>
  <div style="margin-left: 20px;">
    <div style="font-size: 24px; font-weight: bold; color: #232A33;">建议阅读对象</div>
    <div style="font-size: 20px; color: #5A6675; margin-top: 4px;">适合谁先读</div>
  </div>
</div>

<!--
推荐理由，是我们平台最关键的连接点。比如一篇文章，AI 推荐理由可以告知适用哪些课程，可以补充的知识点、“可作为课堂案例”、“建议阅读对象”清晰地展示出来。
-->

---

<!-- Slide 8: 语音与移动 -->


<!--
考虑到讲师的工作场景，我们还提供了语音摘要和移动端的支持。讲师可以在通勤路上、课前预习或者会议间隙，随时随地点开听几句话的要点总结。让碎片时间也能被温和且高效地利用起来。
-->

<style scoped>
@keyframes audio-play {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.4); }
}
.audio-bar {
  animation: audio-play 1.2s infinite ease-in-out;
  transform-origin: bottom;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "SF Pro Text", "Microsoft YaHei", sans-serif !important;
  letter-spacing: 0.5px;
  line-height: 1.6;
}

</style>

<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  看不方便时， <span style="color: #2E6BE6;">也可以听</span> 。
</div>

<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-default" style="left: 95px; top: 241px; width: 514px; height: 373px; border: 1px solid #2E6BE6; padding: 30px; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
  <div style="font-size: 14px; font-weight: bold; color: #5A6675; margin-bottom: 15px;"><span style="color: #E0701F;">◆</span> 语音摘要</div>
  <div style="font-size: 22px; font-weight: bold; color: #232A33; margin-bottom: 25px;">LPR 下调对寿险定价的影响</div>
  <div style="width: 100%; height: 1px; background: #E2E8F2; margin-bottom: 40px;"></div>
  <div class="flex items-center justify-center gap-6">
    <div class="rounded-full flex items-center justify-center relative cursor-pointer transition-all duration-300 hover:scale-110" style="width: 97px; height: 97px; background: linear-gradient(to bottom right, #FFA552, #F5752B); box-shadow: 0 8px 16px rgba(245,117,43,0.3);">
      <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 16px solid white; margin-left: 6px;"></div>
    </div>
    <div class="flex items-end gap-2" style="height: 60px;">
      <div class="audio-bar" style="width: 6px; height: 20px; background: #5B8DEF; border-radius: 3px; animation-delay: 0.1s;"></div>
      <div class="audio-bar" style="width: 6px; height: 40px; background: #2E6BE6; border-radius: 3px; animation-delay: 0.3s;"></div>
      <div class="audio-bar" style="width: 6px; height: 25px; background: #5B8DEF; border-radius: 3px; animation-delay: 0.5s;"></div>
      <div class="audio-bar" style="width: 6px; height: 50px; background: #2E6BE6; border-radius: 3px; animation-delay: 0.2s;"></div>
      <div class="audio-bar" style="width: 6px; height: 30px; background: #5B8DEF; border-radius: 3px; animation-delay: 0.6s;"></div>
      <div class="audio-bar" style="width: 6px; height: 60px; background: #2E6BE6; border-radius: 3px; animation-delay: 0.1s;"></div>
      <div class="audio-bar" style="width: 6px; height: 35px; background: #5B8DEF; border-radius: 3px; animation-delay: 0.4s;"></div>
      <div class="audio-bar" style="width: 6px; height: 15px; background: #5B8DEF; border-radius: 3px; animation-delay: 0.7s;"></div>
      <div class="audio-bar" style="width: 6px; height: 45px; background: #2E6BE6; border-radius: 3px; animation-delay: 0.2s;"></div>
    </div>
  </div>
  <div style="margin-top: 40px; font-size: 14px; color: #8A94A3; text-align: center;">点开即听 · 几句话听懂当天要点</div>
</div>

<div v-click="1" class="absolute bg-white rounded-xl flex items-center px-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-default" style="left: 650px; top: 241px; width: 541px; height: 110px; border: 1px solid #E2E8F2;">
  <div class="rounded-lg flex items-center justify-center text-white shadow-md" style="width: 69px; height: 69px; background: #F5752B; font-size: 24px;">🎧</div>
  <div class="ml-6">
    <div style="font-size: 24px; font-weight: bold; color: #232A33;">通勤路上</div>
    <div style="font-size: 18px; color: #5A6675; margin-top: 4px;">用语音摘要听懂当天要点</div>
  </div>
</div>

<div v-click="2" class="absolute bg-white rounded-xl flex items-center px-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-400 cursor-default" style="left: 650px; top: 373px; width: 541px; height: 110px; border: 1px solid #E2E8F2;">
  <div class="rounded-lg flex items-center justify-center text-white shadow-md" style="width: 69px; height: 69px; background: #2E6BE6; font-size: 24px;">📱</div>
  <div class="ml-6">
    <div style="font-size: 24px; font-weight: bold; color: #232A33;">课前预习</div>
    <div style="font-size: 18px; color: #5A6675; margin-top: 4px;">移动端几分钟快速了解背景</div>
  </div>
</div>

<div v-click="3" class="absolute bg-white rounded-xl flex items-center px-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-default" style="left: 650px; top: 504px; width: 541px; height: 110px; border: 1px solid #E2E8F2;">
  <div class="rounded-lg flex items-center justify-center text-white shadow-md" style="width: 69px; height: 69px; background: #F5752B; font-size: 24px;">☕</div>
  <div class="ml-6">
    <div style="font-size: 24px; font-weight: bold; color: #232A33;">会议间隙</div>
    <div style="font-size: 18px; color: #5A6675; margin-top: 4px;">碎片时间也能浏览资讯</div>
  </div>
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }" class="absolute" style="left: 95px; top: 645px; font-size: 15px; color: #5A6675;">
  语音摘要 · 移动端浏览，让 <span style="color: #232A33; font-weight: bold;">碎片时间</span> 也能被温和地利用起来。
</div>

---

<!-- Slide 4: 后台处理 / 前台价值 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E3EAF3); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  AI 在后台完成筛选，讲师在<br><span style="color: #2E6BE6;">前台看到价值。</span><br>
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }" class="absolute rounded-xl transition-all duration-500 hover:shadow-2xl" style="left: 64px; top: 304px; width: 577px; height: 215px; background: linear-gradient(to bottom right, #232E40, #1A2230);"></div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }" class="absolute rounded-xl bg-white transition-all duration-500 hover:shadow-2xl" style="left: 640px; top: 304px; width: 576px; height: 215px; border: 1px solid #CBD6E4;"></div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }" class="absolute font-bold" style="left: 95px; top: 328px; font-size: 14px; color: #8FA0BC;">后台 · 看不见的处理</div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }" class="absolute font-bold" style="left: 672px; top: 328px; font-size: 14px; color: #2E6BE6;">前台 · 看得见的结果</div>

<div v-click="1" class="absolute" style="left: 205px; top: 425px; width: 73px; height: 2px; background: #5B8DEF;"></div>
<div v-click="1" class="absolute" style="left: 404px; top: 425px; width: 74px; height: 2px; background: #5B8DEF;"></div>
<div v-click="2" class="absolute" style="left: 604px; top: 425px; width: 73px; height: 2px; background: #5B8DEF;"></div>
<div v-click="3" class="absolute" style="left: 803px; top: 425px; width: 74px; height: 2px; background: #2E6BE6;"></div>
<div v-click="3" class="absolute" style="left: 1003px; top: 425px; width: 73px; height: 2px; background: #2E6BE6;"></div>

<div v-click="1" class="absolute rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-default" style="left: 79px; top: 362px; width: 126px; height: 126px; background: #2E3A50; border: 2px solid #2E6BE6; font-size: 20px;">采集</div>
<div v-click="1" class="absolute rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-default" style="left: 278px; top: 362px; width: 126px; height: 126px; background: #2E3A50; border: 2px solid #2E6BE6; font-size: 20px;">清洗</div>
<div v-click="1" class="absolute rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-default" style="left: 478px; top: 362px; width: 126px; height: 126px; background: #2E3A50; border: 2px solid #2E6BE6; font-size: 20px;">摘要</div>
<div v-click="2" class="absolute rounded-full flex items-center justify-center font-bold transition-all duration-300 hover:scale-110 cursor-default" style="left: 677px; top: 362px; width: 126px; height: 126px; background: #FFFFFF; border: 2px solid #2E6BE6; color: #232A33; font-size: 20px;">分类</div>
<div v-click="3" class="absolute rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 cursor-default" style="left: 877px; top: 362px; width: 126px; height: 126px; background: #2E6BE6; font-size: 20px; box-shadow: 0 0 15px rgba(46,107,230,0.5);">推荐</div>
<div v-click="3" class="absolute rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 cursor-default" style="left: 1076px; top: 362px; width: 126px; height: 126px; background: #2E6BE6; font-size: 20px; box-shadow: 0 0 15px rgba(46,107,230,0.5);">导流</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 800 } }" class="absolute" style="left: 95px; top: 572px; font-size: 16px; color: #232A33;">
  复杂处理留在后台，讲师只面对清晰的 <span style="font-weight: bold;">推荐理由</span> 与 <span style="font-weight: bold;">原文导流</span>。
</div>

<!--
这里我想展示一下系统的前后台逻辑。我们将所有复杂的处理——包括采集、清洗、摘要、分类等——全部留在后台。而在前台，讲师面对的仅仅是清晰可见的推荐理由和原文导流，极大地降低了使用门槛。
-->

---

<!-- Slide 5: 先讲师后学员 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #ECEAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  先让 <span style="color: #2E6BE6;">讲师</span> 用起来，再让 <span style="color: #7C5CE0;">学员</span> 学起来。
</div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default" style="left: 70px; top: 237px; width: 360px; height: 387px; border: 1px solid #2E6BE6; box-shadow: 0 10px 24px rgba(46,107,230,0.08);"></div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }" class="absolute rounded-full text-white flex items-center justify-center font-bold" style="left: 95px; top: 265px; width: 120px; height: 44px; background: #2E6BE6; font-size: 20px;">当前</div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }" class="absolute rounded-lg transition-all duration-300 hover:shadow-md" style="left: 95px; top: 325px; width: 310px; height: 167px; background: #F7F9FC; border: 1px solid #E2E8F2;">
  <div style="height: 56px; border-bottom: 1px solid #E2E8F2; padding: 12px 20px; font-size: 22px; font-weight: bold; color: #2E6BE6;">备课工作台</div>
  <div style="padding: 16px 20px;">
    <div style="display: flex; gap: 12px; margin-bottom: 12px;">
      <div style="background: #EAF1FF; color: #2E6BE6; padding: 6px 10px; border-radius: 6px; font-size: 16px; font-weight: bold;">📰 每日资讯</div>
      <div style="background: #EAF1FF; color: #2E6BE6; padding: 6px 10px; border-radius: 6px; font-size: 16px; font-weight: bold;">📝 课程素材</div>
    </div>
    <div style="font-size: 16px; color: #5A6675; line-height: 1.5;">将精选资讯一键转化为教学案例。</div>
  </div>
</div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }" class="absolute" style="left: 95px; top: 514px;">
  <div style="font-size: 24px; font-weight: bold; color: #232A33;">讲师备课入口</div>
  <div style="font-size: 20px; color: #8A94A3; margin-top: 8px;">辅助教学设计</div>
</div>

<div v-click="1" class="absolute" style="left: 430px; top: 430px; width: 40px; height: 2px; background: #6E6AD6;"></div>
<div v-click="1" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default" style="left: 470px; top: 237px; width: 360px; height: 387px; border: 1px solid #6E6AD6; box-shadow: 0 10px 24px rgba(110,106,214,0.08);"></div>
<div v-click="1" class="absolute rounded-full text-white flex items-center justify-center font-bold" style="left: 495px; top: 265px; width: 120px; height: 44px; background: #6E6AD6; font-size: 20px;">沉淀</div>
<div v-click="1" class="absolute rounded-lg transition-all duration-300 hover:shadow-md" style="left: 495px; top: 325px; width: 310px; height: 167px; background: #F7F9FC; border: 1px solid #E2E8F2;">
  <div style="height: 56px; border-bottom: 1px solid #E2E8F2; padding: 12px 20px; font-size: 22px; font-weight: bold; color: #6E6AD6;">内容标签库</div>
  <div style="padding: 16px 20px;">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
      <div style="border: 1px solid #D9D6F2; background: white; color: #6E6AD6; padding: 4px 10px; border-radius: 12px; font-size: 14px; font-weight: bold;"># 宏观经济</div>
      <div style="border: 1px solid #D9D6F2; background: white; color: #6E6AD6; padding: 4px 10px; border-radius: 12px; font-size: 14px; font-weight: bold;"># 营销技巧</div>
      <div style="border: 1px solid #D9D6F2; background: white; color: #6E6AD6; padding: 4px 10px; border-radius: 12px; font-size: 14px; font-weight: bold;"># 监管合规</div>
    </div>
  </div>
</div>
<div v-click="1" class="absolute" style="left: 495px; top: 514px;">
  <div style="font-size: 24px; font-weight: bold; color: #232A33;">内容标签沉淀</div>
  <div style="font-size: 20px; color: #8A94A3; margin-top: 8px;">知识体系化</div>
</div>

<div v-click="2" class="absolute" style="left: 830px; top: 430px; width: 40px; height: 2px; background: #9B86EE;"></div>
<div v-click="2" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default" style="left: 870px; top: 237px; width: 360px; height: 387px; border: 1px solid #9B86EE; box-shadow: 0 10px 24px rgba(155,134,238,0.08);"></div>
<div v-click="2" class="absolute rounded-full text-white flex items-center justify-center font-bold" style="left: 895px; top: 265px; width: 120px; height: 44px; background: #9B86EE; font-size: 20px;">未来</div>
<div v-click="2" class="absolute rounded-lg transition-all duration-300 hover:shadow-md" style="left: 895px; top: 325px; width: 310px; height: 167px; background: #F7F9FC; border: 1px solid #E2E8F2;">
  <div style="height: 56px; border-bottom: 1px solid #E2E8F2; padding: 12px 20px; font-size: 22px; font-weight: bold; color: #9B86EE;">学员学习台</div>
  <div style="padding: 16px 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 32px; height: 32px; background: #9B86EE; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">👤</div>
        <div style="font-size: 16px; font-weight: bold; color: #232A33;">专属学习计划</div>
      </div>
    </div>
  </div>
</div>
<div v-click="2" class="absolute" style="left: 895px; top: 514px;">
  <div style="font-size: 24px; font-weight: bold; color: #5A4FB0;">学员学习入口</div>
  <div style="font-size: 20px; color: #8A94A3; margin-top: 8px;">个性化推荐</div>
</div>


<!--
在业务落地上，我们采取“先讲师后学员”的策略。当前，它是一个强大的“备课工作台”，帮助讲师将精选资讯一键转化为教学案例；沉淀下来的内容标签会不断丰富知识体系；未来，它会演进为一个“学员学习台”，为每个学员提供个性化的资讯流。
-->
---

<!-- Slide 9: 信源采集 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  一套信源库，把好内容 <span style="color: #E0701F;">半自动</span> 收进来。
</div>

<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-default" style="left: 95px; top: 220px; width: 556px; height: 380px; border: 1px solid #2E6BE6; padding: 30px;">
  <div class="flex items-center gap-4 mb-4">
    <div style="width: 24px; height: 24px; background: #2E6BE6; border-radius: 4px;"></div>
    <div style="font-size: 18px; font-weight: bold; color: #2E6BE6;">信息源库</div>
  </div>
  <div style="font-size: 12px; color: #8A94A3; margin-bottom: 30px;">覆盖 宏观财经 · 行业研究 · 管理思想 · 健康人文</div>
  
  <div class="flex gap-4 mb-5">
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 400 } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">虎嗅</div>
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 500 } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">慧保天下</div>
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 600 } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">保观</div>
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 700 } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">麦肯锡中国</div>
  </div>
  <div class="flex gap-4 mb-5">
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 800 } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">哈佛商业评论</div>
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 900 } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">中国金融四十人论坛</div>
  </div>
  <div class="flex gap-4 mb-5">
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 1000 } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">吴晓波频道</div>
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 1100 } }" class="rounded-full font-bold transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">共产党员网</div>
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 1200 } }" class="rounded-full font-bold transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">人民日报评论</div>
  </div>
  <div class="flex gap-4 mb-5">
    <div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 1300 } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 16px; padding: 10px 24px;">南方人物周刊</div>
  </div>
  
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }" class="absolute flex items-center gap-4" style="left: 700px; top: 220px;">
  <div style="width: 24px; height: 24px; background: #F5752B; border-radius: 4px;"></div>
  <div style="font-size: 18px; font-weight: bold; color: #F5752B;">半自动采集流程</div>
</div>

<div v-motion :initial="{ opacity: 0, height: 0 }" :enter="{ opacity: 1, height: 320, transition: { duration: 800, delay: 500 } }" class="absolute" style="left: 734px; top: 280px; width: 2px; background: #E2E8F2;"></div>

<div v-click="1" class="absolute bg-white rounded-xl flex items-center px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default" style="left: 710px; top: 304px; width: 508px; height: 67px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <div class="rounded-full flex items-center justify-center text-white font-bold" style="width: 50px; height: 50px; background: linear-gradient(to right, #2E6BE6, #5B8DEF);">1</div>
  <div class="ml-4">
    <span style="font-size: 24px; font-weight: bold; color: #232A33;">发现</span>
    <span style="font-size: 16px; color: #5A6675; margin-left: 10px;">日常发现需要补充的优质内容</span>
  </div>
</div>

<div v-click="2" class="absolute bg-white rounded-xl flex items-center px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default" style="left: 710px; top: 388px; width: 508px; height: 67px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <div class="rounded-full flex items-center justify-center text-white font-bold" style="width: 50px; height: 50px; background: linear-gradient(to right, #2E6BE6, #5B8DEF);">2</div>
  <div class="ml-4">
    <span style="font-size: 24px; font-weight: bold; color: #232A33;">反馈</span>
    <span style="font-size: 16px; color: #5A6675; margin-left: 10px;">网页一键反馈，填写信源链接</span>
  </div>
</div>

<div v-click="3" class="absolute bg-white rounded-xl flex items-center px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default" style="left: 710px; top: 472px; width: 508px; height: 67px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <div class="rounded-full flex items-center justify-center text-white font-bold" style="width: 50px; height: 50px; background: linear-gradient(to right, #2E6BE6, #5B8DEF);">3</div>
  <div class="ml-4">
    <span style="font-size: 24px; font-weight: bold; color: #232A33;">审核</span>
    <span style="font-size: 16px; color: #5A6675; margin-left: 10px;">后台人工审核来源质量</span>
  </div>
</div>

<div v-click="4" class="absolute bg-white rounded-xl flex items-center px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-orange-300 border border-transparent cursor-default" style="left: 710px; top: 556px; width: 508px; height: 67px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <div class="rounded-full flex items-center justify-center text-white font-bold shadow-md" style="width: 50px; height: 50px; background: linear-gradient(to right, #F5944B, #F5752B);">4</div>
  <div class="ml-4">
    <span style="font-size: 24px; font-weight: bold; color: #232A33;">触发</span>
    <span style="font-size: 16px; color: #5A6675; margin-left: 10px;">自动触发 AI 处理，无需复制正文</span>
  </div>
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }" class="absolute" style="left: 95px; top: 660px; font-size: 15px; color: #5A6675;">
  信源库 + 一键反馈，<span style="font-weight: bold; color: #232A33;">半自动采集</span>，极大降低采编门槛。
</div>


<!--
那么好内容是从哪来的呢？我们建立了一套覆盖宏观财经、行业研究等领域的优质信源库，结合一键反馈插件，实现了半自动的采集流程：发现好内容、一键反馈、后台审核、触发 AI 处理。这种模式极大降低了采编门槛。
-->
---

<!-- Slide 10: 质量机制 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  智能可以 <span style="color: #2E6BE6;">提速</span> ，专业必须 <span style="color: #E0701F;">把关</span> 。
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }" class="absolute flex items-center px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default" style="left: 95px; top: 486px; width: 1092px; height: 113px; background: white; border: 1px solid #DCE3EE; border-radius: 12px;">
  <div style="width: 32px; height: 32px; background: #8A94A3; border-radius: 6px;"></div>
  <div style="font-size: 24px; font-weight: bold; color: #232A33; margin-left: 20px; width: 200px;">底层 信源</div>
  <div style="font-size: 18px; color: #5A6675; margin-left: 30px;"><span style="font-weight: bold; color: #232A33;">信源管理</span> ｜ 公众号 · 行业媒体 · 研究报告 · 监管动态 · 同业案例</div>
</div>

<div v-click="1" class="absolute text-[#2E6BE6] font-bold transition-all duration-500" style="left: 141px; top: 465px; font-size: 24px;">↑</div>
<div v-click="1" class="absolute flex items-center px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default" style="left: 95px; top: 351px; width: 1092px; height: 113px; background: #EAF1FF; border: 1px solid #B7CEF5; border-radius: 12px;">
  <div style="width: 32px; height: 32px; background: #2E6BE6; border-radius: 6px;"></div>
  <div style="font-size: 24px; font-weight: bold; color: #232A33; margin-left: 20px; width: 220px;">中层 审核与发布</div>
  <div style="font-size: 18px; color: #5A6675; margin-left: 10px;"><span style="font-weight: bold; color: #232A33;">人工守门</span> ｜ 内容审核 · 人工投稿 · 趋势简报 · 反馈迭代</div>
</div>

<div v-click="2" class="absolute text-[#F5752B] font-bold transition-all duration-500" style="left: 141px; top: 329px; font-size: 24px;">↑</div>
<div v-click="2" class="absolute flex items-center px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-300 cursor-default" style="left: 95px; top: 215px; width: 1092px; height: 113px; background: #FFF4EA; border: 1px solid #F3CFAE; border-radius: 12px;">
  <div style="width: 32px; height: 32px; background: #F5752B; border-radius: 6px;"></div>
  <div style="font-size: 24px; font-weight: bold; color: #232A33; margin-left: 20px; width: 200px;">顶层 AI 引擎</div>
  <div style="font-size: 18px; color: #5A6675; margin-left: 30px;"><span style="font-weight: bold; color: #232A33;">智能提效</span> ｜ 采集 · 清洗 · 摘要 · 分类 · 推荐</div>
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }" class="absolute" style="left: 95px; top: 620px; font-size: 15px; color: #5A6675;">
  AI 不完全自动发布，关键内容仍保留 <span style="font-weight: bold; color: #232A33;">人工审核</span>，保证专业性与可控性。
</div>


<!--
虽然 AI 极大地提速了处理流程，但专业内容必须有人工把关。我们设计了一套严格的质量机制，底层是智能提效引擎，中层由专人负责内容审核、把关和发布，以此确保最终推送到讲师面前的资讯既有时效性，又有不可妥协的专业性和安全性。
-->
---

<!-- Slide 11: 技术底座 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  小切口应用， <span style="color: #2E6BE6;">也要有可扩展底座</span> 。
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }" class="absolute flex rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default" style="left: 95px; top: 218px; width: 1092px; height: 90px; background: white; border: 1px solid #E2E8F2; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
  <div class="flex flex-col justify-center px-6 text-white" style="width: 268px; background: #2E6BE6;">
    <div style="font-size: 24px; font-weight: bold;">应用层</div>
    <div style="font-size: 12px; opacity: 0.8;">Application</div>
  </div>
  <div class="flex items-center px-8" style="font-size: 20px; color: #232A33;">
    小切口应用 · Next.js+React+TailwindCSS
  </div>
</div>

<div v-click="1" class="absolute flex rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default" style="left: 95px; top: 321px; width: 1092px; height: 90px; background: white; border: 1px solid #E2E8F2; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
  <div class="flex flex-col justify-center px-6 text-white" style="width: 268px; background: #3E7BEA;">
    <div style="font-size: 24px; font-weight: bold;">能力层</div>
    <div style="font-size: 12px; opacity: 0.8;">Capability</div>
  </div>
  <div class="flex items-center px-8" style="font-size: 20px; color: #232A33;">
    标准 AI 接口 · 模型可替换
  </div>
</div>

<div v-click="2" class="absolute flex rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default" style="left: 95px; top: 424px; width: 1092px; height: 90px; background: white; border: 1px solid #E2E8F2; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
  <div class="flex flex-col justify-center px-6 text-white" style="width: 268px; background: #5B8DEF;">
    <div style="font-size: 24px; font-weight: bold;">数据层</div>
    <div style="font-size: 12px; opacity: 0.8;">Data</div>
  </div>
  <div class="flex items-center px-8" style="font-size: 20px; color: #232A33;">
    轻量采集 · JSON 结构化存储
  </div>
</div>

<div v-click="3" class="absolute flex rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default" style="left: 95px; top: 527px; width: 1092px; height: 90px; background: white; border: 1px solid #E2E8F2; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
  <div class="flex flex-col justify-center px-6 text-white" style="width: 268px; background: #7AA3F2;">
    <div style="font-size: 24px; font-weight: bold;">部署层</div>
    <div style="font-size: 12px; opacity: 0.8;">Deployment</div>
  </div>
  <div class="flex items-center px-8" style="font-size: 20px; color: #232A33;">
    支持内网部署 · Docker 可维护可替换
  </div>
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }" class="absolute" style="left: 95px; top: 640px; font-size: 15px; color: #5A6675;">
  可运行 · 可维护 · 可替换，<span style="font-weight: bold; color: #232A33;">底座随业务持续演进</span>。
</div>

<!--
在技术架构上，我们秉持“小切口应用，也要有可扩展底座”的理念。自上而下分别是：基于 Next.js 与 React 的应用层；对接大模型的标准能力层；轻量结构化的数据层；以及一键自动化发布的部署层。保证底座能够随着业务的需要持续演进。
-->

---

<!-- Slide 12: 变革创新性 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 32px; color: #232A33;">变革创新性</div>

<!-- 左柱 -->
<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default" style="left: 95px; top: 241px; width: 530px; height: 363px; border: 1px solid #2E6BE6; padding: 30px;">
  <div class="inline-block rounded-full text-white text-sm px-4 py-1 mb-4 font-bold" style="background: #2E6BE6;">技术创新</div>
  <div style="font-size: 28px; font-weight: bold; color: #232A33; margin-bottom: 8px;">教学场景适配</div>
  <div style="font-size: 14px; color: #8A94A3; margin-bottom: 20px;">把 AI 用进保险教育的技术创新</div>
  <div style="width: 100%; height: 1px; background: #E2E8F2; margin-bottom: 20px;"></div>
  <div style="font-size: 20px; color: #3A4A66; line-height: 2.2;">
    <span style="color: #2E6BE6;">▸</span> 摘要生成 → 备课与教学价值<br>
    <span style="color: #2E6BE6;">▸</span> 理解知识内核，映射课程知识点<br>
    <span style="color: #2E6BE6;">▸</span> 注入对保险课程体系的深度理解
  </div>
</div>

<!-- 右柱 -->
<div v-click="1" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default" style="left: 655px; top: 241px; width: 530px; height: 363px; border: 1px solid #6E6AD6; padding: 30px;">
  <div class="inline-block rounded-full text-white text-sm px-4 py-1 mb-4 font-bold" style="background: #6E6AD6;">模式创新</div>
  <div style="font-size: 28px; font-weight: bold; color: #232A33; margin-bottom: 8px;">导流型学习</div>
  <div style="font-size: 14px; color: #8A94A3; margin-bottom: 20px;">把每天已在浏览的资讯，变成带目的的阅读</div>
  <div style="width: 100%; height: 1px; background: #E2E8F2; margin-bottom: 20px;"></div>
  <div style="font-size: 20px; color: #3A4A66; line-height: 2.2;">
    <span style="color: #6E6AD6;">▸</span> 不增加讲师备课负担<br>
    <span style="color: #6E6AD6;">▸</span> 刷资讯 → 带着备课目的读文章<br>
    <span style="color: #6E6AD6;">▸</span> 讲师、学员共用同一套机制
  </div>
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }" class="absolute" style="left: 95px; top: 634px; font-size: 15px; color: #5A6675;">
  这是通用推荐引擎做不到的——<span style="font-weight: bold; color: #232A33;">它需要对保险课程体系的深度业务理解。</span>
</div>

<!--
接下来向各位评委汇报我们在变革创新方面的思考。在技术上，这是将 AI 应用于保险教育场景的一次尝试，大模型不再是通用聊天，而是深入理解保险课程体系。在模式上，我们设计了“导流型学习”，不增加讲师负担，带着备课目的去阅读，实现讲师和学员共赢。
-->

---

<!-- Slide 13: 业技融合性 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 32px; color: #232A33;">业技融合性</div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }" class="absolute" style="left: 95px; top: 150px; font-size: 15px; color: #5A6675;">
  全程由业务需求驱动，技术解法精准匹配。
</div>

<div v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 300 } }" class="absolute bg-white rounded-xl flex flex-col p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default" style="left: 95px; top: 248px; width: 479px; height: 215px; border: 1px solid #C9CCEE;">
  <div class="inline-block rounded-full text-white text-sm px-4 py-1 mb-4 font-bold self-start" style="background: #6E6AD6;">业务需求</div>
  <div style="font-size: 20px; color: #232A33; line-height: 1.8;">
    <span style="font-weight: bold;">讲师</span> 用碎片时间，把外部资讯<br>
    沉淀为可直接引用的备课素材<br>
    <span style="font-weight: bold;">未来</span> 学员把资讯与课程学习相连
  </div>
</div>

<div v-click="1" class="absolute bg-white rounded-xl flex flex-col p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default" style="left: 706px; top: 248px; width: 479px; height: 215px; border: 1px solid #C9CCEE;">
  <div class="inline-block rounded-full text-white text-sm px-4 py-1 mb-4 font-bold self-start" style="background: #6E6AD6;">技术解法</div>
  <div style="font-size: 20px; color: #232A33; line-height: 1.8;">
    <span style="font-weight: bold;">大模型</span> 文本理解与生成，弥补<br>
    “资讯学习化”转化缺口<br>
    <span style="font-weight: bold;">讲师与学员</span> 共用同一套底层能力
  </div>
</div>

<div v-click="2" class="absolute flex flex-col items-center justify-center transition-all duration-500 hover:scale-110" style="left: 580px; top: 320px; width: 120px;">
  <div style="width: 100px; height: 20px; background: #6E6AD6; position: relative; border-radius: 4px;">
    <div style="position: absolute; right: -20px; top: -10px; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-left: 20px solid #6E6AD6;"></div>
  </div>
  <div style="font-size: 15px; font-weight: bold; color: #6E6AD6; margin-top: 20px;">精准匹配</div>
</div>

<div v-click="3" class="absolute flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#6E6AD6] cursor-default shadow-sm hover:shadow-md" style="left: 95px; top: 500px; width: 346px; height: 59px; background: #F1F0FB; border: 1px solid #D9D6F2; font-size: 18px; font-weight: bold; color: #3A4A66;">
  <span style="color: #6E6AD6; margin-right: 8px;">◆</span> 推荐理由 30–60 字
</div>
<div v-click="3" class="absolute flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#6E6AD6] cursor-default shadow-sm hover:shadow-md" style="left: 457px; top: 500px; width: 346px; height: 59px; background: #F1F0FB; border: 1px solid #D9D6F2; font-size: 18px; font-weight: bold; color: #3A4A66;">
  <span style="color: #6E6AD6; margin-right: 8px;">◆</span> 分类对齐课程体系
</div>
<div v-click="3" class="absolute flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#6E6AD6] cursor-default shadow-sm hover:shadow-md" style="left: 819px; top: 500px; width: 346px; height: 59px; background: #F1F0FB; border: 1px solid #D9D6F2; font-size: 18px; font-weight: bold; color: #3A4A66;">
  <span style="color: #6E6AD6; margin-right: 8px;">◆</span> 底层能力不重复建设
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }" class="absolute" style="left: 95px; top: 634px; font-size: 15px; color: #5A6675;">
  没有为了用技术而用技术——<span style="font-weight: bold; color: #6E6AD6;">每一处设计，都能在业务需求里找到支点。</span>
</div>


<!--
在业技融合方面，我们做到了全程由业务需求驱动，技术解法精准匹配。业务上，我们需要沉淀资讯为备课素材；技术上，我们就用大模型解决“资讯学习化”的转化缺口。每一处产品设计，都能在业务痛点里找到支点。
-->
---

<!-- Slide 14: 落地实施性 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 32px; color: #232A33;">落地实施性</div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }" class="absolute" style="left: 95px; top: 150px; font-size: 20px; color: #5A6675;">
  平台已部署上线、内容每日更新、审核流程正常运转。
</div>

<div v-click="1" class="absolute bg-white rounded-2xl flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default" style="left: 95px; top: 260px; width: 346px; height: 220px; border: 1px solid #7C5CE0; box-shadow: 0 10px 30px rgba(124,92,224,0.08);">
  <div class="flex items-baseline">
    <span style="font-size: 80px; font-weight: bold; color: #7C5CE0; line-height: 1;">1</span>
    <span style="font-size: 24px; font-weight: bold; color: #232A33; margin-left: 8px;">个多月</span>
  </div>
  <div style="font-size: 18px; color: #8A94A3; margin-top: 20px;">持续收录行业优质文章</div>
</div>

<div v-click="2" class="absolute bg-white rounded-2xl flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default" style="left: 465px; top: 260px; width: 346px; height: 220px; border: 1px solid #7C5CE0; box-shadow: 0 10px 30px rgba(124,92,224,0.08);">
  <div class="flex items-baseline">
    <span style="font-size: 80px; font-weight: bold; color: #7C5CE0; line-height: 1;">3</span>
    <span style="font-size: 24px; font-weight: bold; color: #232A33; margin-left: 8px;">大分类</span>
  </div>
  <div style="font-size: 18px; color: #8A94A3; margin-top: 20px;">党建培训·专业能力·综合素养</div>
</div>

<div v-click="3" class="absolute bg-white rounded-2xl flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default" style="left: 835px; top: 260px; width: 346px; height: 220px; border: 1px solid #7C5CE0; box-shadow: 0 10px 30px rgba(124,92,224,0.08);">
  <div class="flex items-baseline">
    <span style="font-size: 80px; font-weight: bold; color: #7C5CE0; line-height: 1;">多</span>
    <span style="font-size: 24px; font-weight: bold; color: #232A33; margin-left: 8px;">轮评审</span>
  </div>
  <div style="font-size: 18px; color: #8A94A3; margin-top: 20px;">AI 推荐理由人工把关</div>
</div>

<div v-click="4" class="absolute flex items-center justify-center px-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default" style="left: 95px; top: 520px; width: 1086px; height: 100px; background: #F2F0FC; border: 1px solid #7C5CE0;">
  <div class="shadow-[0_0_10px_rgba(124,92,224,0.5)]" style="width: 16px; height: 16px; background: #7C5CE0; border-radius: 50%; margin-right: 20px;"></div>
  <span style="font-size: 24px; font-weight: bold; color: #7C5CE0;">已部署上线</span>
  <span style="font-size: 24px; color: #8A94A3;">&nbsp;· 内容每日更新 · 审核流程正常运转</span>
</div>


<!--
关于落地情况，目前保院热榜平台已经成功部署上线一个多月，并且一直在稳定运行中。我们持续收录了三大分类的优质行业文章，并且经历了多轮人工评审迭代。这不是一个概念，而是一个真正跑起来的生产力工具。
-->
---

<!-- Slide 15: 自主安全性 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 32px; color: #232A33;">自主安全性</div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }" class="absolute" style="left: 95px; top: 150px; font-size: 15px; color: #5A6675;">
  在内容、数据、版权三个层面，保障平台的安全合规。
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }" class="absolute flex rounded-xl overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default" style="left: 95px; top: 248px; width: 1090px; height: 90px; border: 1px solid #F5752B;">
  <div style="width: 8px; height: 100%; background: linear-gradient(to bottom, #F5944B, #F5752B);"></div>
  <div class="flex items-center px-8" style="width: 100%;">
    <div style="font-size: 20px; font-weight: bold; color: #232A33; width: 150px;">内容安全</div>
    <div style="font-size: 20px; color: #5A6675;">公开来源可查可溯 · 人工审核后发布 · AI 推荐理由杜绝幻觉外输</div>
  </div>
</div>

<div v-click="1" class="absolute flex rounded-xl overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default" style="left: 95px; top: 354px; width: 1090px; height: 90px; border: 1px solid #F5752B;">
  <div style="width: 8px; height: 100%; background: linear-gradient(to bottom, #F5944B, #F5752B);"></div>
  <div class="flex items-center px-8" style="width: 100%;">
    <div style="font-size: 20px; font-weight: bold; color: #232A33; width: 150px;">数据安全</div>
    <div style="font-size: 20px; color: #5A6675;">用户数据最小化 · 不采集学员信息 · 提交审核发布全程留痕可审计</div>
  </div>
</div>

<div v-click="2" class="absolute flex rounded-xl overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default" style="left: 95px; top: 460px; width: 1090px; height: 90px; border: 1px solid #F5752B;">
  <div style="width: 8px; height: 100%; background: linear-gradient(to bottom, #F5944B, #F5752B);"></div>
  <div class="flex items-center px-8" style="width: 100%;">
    <div style="font-size: 20px; font-weight: bold; color: #232A33; width: 150px;">版权合规</div>
    <div style="font-size: 20px; color: #5A6675;">只展示标题与推荐理由、不全文转载 · 跳转原文外链 · 版权归原机构、标注免责</div>
  </div>
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }" class="absolute" style="left: 95px; top: 634px; font-size: 15px; color: #5A6675;">
  公开 · 审核 · 合规——<span style="font-weight: bold; color: #F5752B;">AI 输出全程人工把关。</span>
</div>

<!--
在自主安全性上，我们从三个维度把关：内容安全上，所有来源公开可溯，并杜绝 AI 幻觉；数据安全上，做到用户数据最小化，不采集敏感信息，且全程留痕可审计；版权合规上，我们只做摘要和导流，不全文转载。确保平台合法合规地运行。
-->

---

<!-- Slide 16: 协同价值 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #2E6BE6;">协同价值</div>
<div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 36px; color: #232A33;">
  从一个人的发现，到 <span style="color: #2E6BE6;">一群人</span> 的学习。
</div>
<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }" class="absolute" style="left: 95px; top: 160px; font-size: 15px; color: #5A6675;">
  信息员发现 · AI 提炼 · 学院审核 · 讲师共用 · 学员学习
</div>

<!-- 中心 Hub -->
<div v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 300 } }" class="absolute rounded-full flex flex-col items-center justify-center text-white font-bold transition-all duration-500 hover:scale-110 cursor-default" style="left: 548px; top: 359px; width: 185px; height: 185px; background: linear-gradient(to bottom right, #2E6BE6, #6E6AD6); z-index: 10; box-shadow: 0 10px 30px rgba(46,107,230,0.3);">
  <div style="font-size: 28px; margin-bottom: 5px;">保院热榜</div>
  <div style="font-size: 18px; opacity: 0.9;">AI 提炼 · 汇聚</div>
</div>

<!-- 连线与节点 - Step 1 -->
<div v-click="1" class="absolute" style="left: 360px; top: 310px; width: 250px; height: 2px; background: #B9C6E0; transform: rotate(35deg);"></div>
<div v-click="1" class="absolute" style="left: 670px; top: 580px; width: 250px; height: 2px; background: #B9C6E0; transform: rotate(35deg);"></div>
<div v-click="1" class="absolute bg-white rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-default" style="left: 260px; top: 220px; width: 143px; height: 143px; border: 2px solid #2E6BE6; z-index: 10;">
  <div style="font-size: 24px; font-weight: bold; color: #2E6BE6;">信息员</div>
  <div style="font-size: 16px; color: #5A6675; margin-top: 4px; text-align: center; padding: 0 10px;">把一线资讯带回来</div>
</div>
<div v-click="1" class="absolute bg-white rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-default" style="left: 870px; top: 530px; width: 143px; height: 143px; border: 2px solid #EC7C2B; z-index: 10;">
  <div style="font-size: 26px; font-weight: bold; color: #EC7C2B;">讲师</div>
  <div style="font-size: 16px; color: #5A6675; margin-top: 4px; text-align: center; padding: 0 10px;">好内容一起共用</div>
</div>

<!-- 连线与节点 - Step 2 -->
<div v-click="2" class="absolute" style="left: 670px; top: 310px; width: 250px; height: 2px; background: #B9C6E0; transform: rotate(-35deg);"></div>
<div v-click="2" class="absolute" style="left: 360px; top: 580px; width: 250px; height: 2px; background: #B9C6E0; transform: rotate(-35deg);"></div>
<div v-click="2" class="absolute bg-white rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-default" style="left: 870px; top: 220px; width: 143px; height: 143px; border: 2px solid #7C5CE0; z-index: 10;">
  <div style="font-size: 26px; font-weight: bold; color: #7C5CE0;">学员</div>
  <div style="font-size: 16px; color: #5A6675; margin-top: 4px; text-align: center; padding: 0 10px;">随时靠近行业前沿</div>
</div>
<div v-click="2" class="absolute bg-white rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-default" style="left: 260px; top: 530px; width: 143px; height: 143px; border: 2px solid #6E6AD6; z-index: 10;">
  <div style="font-size: 26px; font-weight: bold; color: #6E6AD6;">学院</div>
  <div style="font-size: 16px; color: #5A6675; margin-top: 4px; text-align: center; padding: 0 10px;">替专业内容把关</div>
</div>


<!--
总结来说，这个平台最大的协同价值在于：它将一个信息员的发现，变成了一群人的学习。信息员发现好内容，学院进行专业把关，讲师共享备课资源，最终服务于学员的学习。打通了培训体系内外部的知识流转。
-->
---

<!-- Slide 17: 结尾 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<!-- 顶部装饰圆点 -->
<div v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 0.6, scale: 1, transition: { duration: 1000, delay: 100 } }" class="absolute rounded-full" style="left: 349px; top: 170px; width: 15px; height: 15px; background: #2E6BE6;"></div>
<div v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 0.5, scale: 1, transition: { duration: 1000, delay: 200 } }" class="absolute rounded-full" style="left: 450px; top: 120px; width: 23px; height: 23px; background: #6E6AD6;"></div>
<div v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 0.7, scale: 1, transition: { duration: 1000, delay: 300 } }" class="absolute rounded-full" style="left: 550px; top: 90px; width: 13px; height: 13px; background: #2E6BE6;"></div>
<div v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 0.6, scale: 1, transition: { duration: 1000, delay: 400 } }" class="absolute rounded-full" style="left: 650px; top: 80px; width: 18px; height: 18px; background: #6E6AD6;"></div>
<div v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 0.5, scale: 1, transition: { duration: 1000, delay: 500 } }" class="absolute rounded-full" style="left: 750px; top: 100px; width: 14px; height: 14px; background: #2E6BE6;"></div>
<div v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 0.6, scale: 1, transition: { duration: 1000, delay: 600 } }" class="absolute rounded-full" style="left: 850px; top: 130px; width: 20px; height: 20px; background: #6E6AD6;"></div>
<div v-motion :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 0.7, scale: 1, transition: { duration: 1000, delay: 700 } }" class="absolute rounded-full" style="left: 912px; top: 170px; width: 16px; height: 16px; background: #2E6BE6;"></div>

<!-- 中央入口卡 -->
<div v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }" class="absolute bg-white rounded-[24px] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(46,107,230,0.15)] hover:scale-[1.01] cursor-default" style="left: 262px; top: 226px; width: 756px; height: 281px; border: 1px solid #2E6BE6; box-shadow: 0 20px 40px rgba(46,107,230,0.08);"></div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }" class="absolute text-center font-bold" style="left: 0; right: 0; top: 300px; font-size: 32px; color: #232A33;">
  让讲师 <span style="color: #2E6BE6;">更专注</span> 于教学，<br>
  让学员 <span style="color: #2E6BE6;">更轻松</span> 地接近行业。
</div>

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 800 } }" class="absolute text-center" style="left: 0; right: 0; top: 436px; font-size: 15px; color: #5A6675;">
  保院热榜，从资讯聚合开始，走向学习协同。
</div>



<!--
让讲师更专注于教学，让学员更轻松地接近行业。这就是“保院热榜”的初心与愿景。我的汇报到此结束，感谢各位评委专家的聆听，欢迎批评指正。
-->

<style>
.slidev-vclick-hidden {
  opacity: 0 !important;
  transform: translateY(20px) scale(0.95) !important;
  pointer-events: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "SF Pro Text", "Microsoft YaHei", sans-serif !important;
  letter-spacing: 0.5px;
  line-height: 1.6;
}

</style>

<!--

-->

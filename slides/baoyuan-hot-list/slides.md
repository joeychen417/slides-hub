---
theme: default
title: 保院热榜
canvasWidth: 1280
aspectRatio: '16/9'
transition: fade
fonts:
  sans: 'Microsoft YaHei'
---

<!-- Slide 1: 封面 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 0.25, scale: 1, transition: { duration: 1500, delay: 200 } } }" class="absolute rounded-full" style="left: 902px; top: 0px; width: 378px; height: 378px; background: #2E6BE6; filter: blur(80px);"></div>
<div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 0.25, scale: 1, transition: { duration: 1500, delay: 400 } } }" class="absolute rounded-full" style="left: 1060px; top: 157px; width: 220px; height: 220px; background: #6E6AD6; filter: blur(80px);"></div>

<div v-motion="{ initial: { opacity: 0, height: 0 }, enter: { opacity: 1, height: 248, transition: { duration: 800 } } }" class="absolute" style="left: 86px; top: 181px; width: 8px; background: linear-gradient(to bottom, #2E6BE6, #6E6AD6);"></div>

<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 200 } } }" class="absolute font-bold" style="left: 102px; top: 172px; font-size: 60px;">
  <span style="color: #232A33">保院</span><span style="color: #2E6BE6">热榜</span>
</div>

<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 400 } } }" class="absolute font-bold" style="left: 102px; top: 296px; font-size: 32px;">
  <span style="color: #232A33">让行业资讯，</span><span style="color: #2E6BE6">自己走向课堂</span>
</div>

<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 600 } } }" class="absolute" style="left: 102px; top: 374px; font-size: 20px; color: #5A6675;">
  面向保险培训场景的 AI 资讯聚合与备课辅助平台。
</div>

<div v-motion="{ initial: { opacity: 0, width: 0 }, enter: { opacity: 1, width: 403, transition: { duration: 800, delay: 800 } } }" class="absolute" style="left: 102px; top: 451px; height: 1px; background: #2E6BE6;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } } }" class="absolute" style="left: 102px; top: 472px; font-size: 14px; color: #8A94A3;">
  资讯聚合 · 智能提炼 · 备课辅助
</div>

---

<!-- Slide 2: 问题引入 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #EAEEF2, #EAEEF2); z-index: -1;"></div>
<div v-motion="{ initial: { opacity: 0, height: 0 }, enter: { opacity: 1, height: 226, transition: { duration: 600 } } }" class="absolute" style="left: 86px; top: 186px; width: 7px; background: #2E6BE6;"></div>

<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 100 } } }" class="absolute font-bold" style="left: 102px; top: 177px; font-size: 50px; color: #232A33; line-height: 1.2;">
  每天都有新资讯，<br>但备课时间<br><span style="color: #2E6BE6;">不会变多。</span>
</div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 400 } } }" class="absolute" style="left: 103px; top: 458px; font-size: 18px; color: #5A6675;">
  公众号 · 行业媒体 · 研究报告 · 监管动态 · 同业案例，信息持续涌入。
</div>

<!-- 右侧瀑布卡片 -->
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 82px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">公众号</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 162px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">行业媒体</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 241px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">研究报告</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 321px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">监管动态</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 401px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">同业案例</div>
<div v-click="1" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 733px; top: 481px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">自媒体</div>

<div v-click="2" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 123px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">党建培训</div>
<div v-click="2" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 203px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">保险业务</div>
<div v-click="2" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 282px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">专业能力</div>
<div v-click="2" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 362px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">综合素养</div>
<div v-click="2" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 442px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">数智变革</div>
<div v-click="2" class="absolute bg-white rounded-lg flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-[#2E6BE6] hover:border-[#2E6BE6] cursor-default" style="left: 969px; top: 522px; width: 210px; height: 63px; border: 1px solid #9FB0C4; color: #33414F; font-size: 14px; box-shadow: 0 4px 20px rgba(46,107,230,0.05);">传统文化</div>

---

<!-- Slide 3: AI 把时间还给讲师 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #FAF6EF, #E6ECF5); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 95px; top: 123px; font-size: 44px; color: #232A33;">
  AI 不替代讲师，它<br><span style="color: #2E6BE6;">把时间还给讲师</span><br>。
</div>

<div v-motion="{ initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 200 } } }" class="absolute rounded-xl bg-white transition-all duration-500 hover:shadow-2xl cursor-default" style="left: 96px; top: 248px; width: 500px; height: 395px; background: linear-gradient(to bottom right, #F4ECDD, #E4ECF7); border: 1px solid #FFFFFF; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
  <div class="absolute" style="left: 60px; top: 80px; font-size: 24px; line-height: 2;">
    <span style="color: #A0937D">少一点</span> <span style="color: #232A33; font-weight: bold;">资料筛选</span><br>
    <span style="color: #2E6BE6">多一点</span> <span style="color: #232A33; font-weight: bold;">课程设计</span><br>
    <br>
    <span style="color: #A0937D">少一点</span> <span style="color: #232A33; font-weight: bold;">重复搜索</span><br>
    <span style="color: #2E6BE6">多一点</span> <span style="color: #232A33; font-weight: bold;">课堂互动</span>
  </div>
</div>

<div v-click="1" class="absolute rounded-xl bg-white flex flex-col justify-center px-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#2E6BE6] cursor-default" style="left: 646px; top: 248px; width: 538px; height: 183px; border: 1px solid #CBD6E4; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
  <div style="font-size: 16px; color: #8A94A3;">从 搜索资料</div>
  <div style="font-size: 30px; font-weight: bold; color: #2E6BE6; margin-top: 10px;">到 设计课程</div>
</div>

<div v-click="2" class="absolute rounded-xl bg-white flex flex-col justify-center px-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#2E6BE6] cursor-default" style="left: 646px; top: 460px; width: 538px; height: 183px; border: 1px solid #CBD6E4; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
  <div style="font-size: 16px; color: #8A94A3;">从 浏览长文</div>
  <div style="font-size: 30px; font-weight: bold; color: #2E6BE6; margin-top: 10px;">到 选择案例</div>
</div>

---

<!-- Slide 4: 后台处理 / 前台价值 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E3EAF3); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  AI 在后台完成筛选，讲师在<br><span style="color: #2E6BE6;">前台看到价值</span><br>。
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 200 } } }" class="absolute rounded-xl transition-all duration-500 hover:shadow-2xl" style="left: 64px; top: 304px; width: 577px; height: 215px; background: linear-gradient(to bottom right, #232E40, #1A2230);"></div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 400 } } }" class="absolute rounded-xl bg-white transition-all duration-500 hover:shadow-2xl" style="left: 640px; top: 304px; width: 576px; height: 215px; border: 1px solid #CBD6E4;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 600 } } }" class="absolute font-bold" style="left: 95px; top: 328px; font-size: 14px; color: #8FA0BC;">后台 · 看不见的处理</div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 600 } } }" class="absolute font-bold" style="left: 672px; top: 328px; font-size: 14px; color: #2E6BE6;">前台 · 看得见的结果</div>

<div v-click="1" class="absolute" style="left: 142px; top: 425px; width: 73px; height: 2px; background: #5B8DEF;"></div>
<div v-click="1" class="absolute" style="left: 341px; top: 425px; width: 73px; height: 2px; background: #5B8DEF;"></div>
<div v-click="2" class="absolute" style="left: 541px; top: 425px; width: 73px; height: 2px; background: #5B8DEF;"></div>
<div v-click="3" class="absolute" style="left: 740px; top: 425px; width: 73px; height: 2px; background: #2E6BE6;"></div>
<div v-click="3" class="absolute" style="left: 940px; top: 425px; width: 73px; height: 2px; background: #2E6BE6;"></div>

<div v-click="1" class="absolute rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-default" style="left: 79px; top: 362px; width: 126px; height: 126px; background: #2E3A50; border: 2px solid #2E6BE6; font-size: 20px;">采集</div>
<div v-click="1" class="absolute rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-default" style="left: 278px; top: 362px; width: 126px; height: 126px; background: #2E3A50; border: 2px solid #2E6BE6; font-size: 20px;">清洗</div>
<div v-click="1" class="absolute rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-default" style="left: 478px; top: 362px; width: 126px; height: 126px; background: #2E3A50; border: 2px solid #2E6BE6; font-size: 20px;">摘要</div>
<div v-click="2" class="absolute rounded-full flex items-center justify-center font-bold transition-all duration-300 hover:scale-110 cursor-default" style="left: 677px; top: 362px; width: 126px; height: 126px; background: #FFFFFF; border: 2px solid #2E6BE6; color: #232A33; font-size: 20px;">分类</div>
<div v-click="3" class="absolute rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 cursor-default" style="left: 877px; top: 362px; width: 126px; height: 126px; background: #2E6BE6; font-size: 20px; box-shadow: 0 0 15px rgba(46,107,230,0.5);">推荐</div>
<div v-click="3" class="absolute rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 cursor-default" style="left: 1076px; top: 362px; width: 126px; height: 126px; background: #2E6BE6; font-size: 20px; box-shadow: 0 0 15px rgba(46,107,230,0.5);">导流</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 800 } } }" class="absolute" style="left: 95px; top: 572px; font-size: 16px; color: #232A33;">
  复杂处理留在后台，讲师只面对清晰的 <span style="font-weight: bold;">推荐理由</span> 与 <span style="font-weight: bold;">原文导流</span>。
</div>

---

<!-- Slide 5: 先讲师后学员 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #ECEAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  先让 <span style="color: #2E6BE6;">讲师</span> 用起来，再让 <span style="color: #7C5CE0;">学员</span> 学起来。
</div>

<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default" style="left: 70px; top: 237px; width: 360px; height: 387px; border: 1px solid #2E6BE6; box-shadow: 0 10px 24px rgba(46,107,230,0.08);"></div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 300 } } }" class="absolute rounded-full text-white flex items-center justify-center font-bold" style="left: 95px; top: 265px; width: 120px; height: 44px; background: #2E6BE6; font-size: 20px;">当前</div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 300 } } }" class="absolute rounded-lg transition-all duration-300 hover:shadow-md" style="left: 95px; top: 325px; width: 310px; height: 167px; background: #F7F9FC; border: 1px solid #E2E8F2;">
  <div style="height: 56px; border-bottom: 1px solid #E2E8F2; padding: 12px 20px; font-size: 22px; font-weight: bold; color: #2E6BE6;">备课工作台</div>
  <div style="padding: 16px 20px;">
    <div style="display: flex; gap: 12px; margin-bottom: 12px;">
      <div style="background: #EAF1FF; color: #2E6BE6; padding: 6px 10px; border-radius: 6px; font-size: 16px; font-weight: bold;">📰 每日资讯</div>
      <div style="background: #EAF1FF; color: #2E6BE6; padding: 6px 10px; border-radius: 6px; font-size: 16px; font-weight: bold;">📝 课程素材</div>
    </div>
    <div style="font-size: 16px; color: #5A6675; line-height: 1.5;">将精选资讯一键转化为教学案例。</div>
  </div>
</div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 300 } } }" class="absolute" style="left: 95px; top: 514px;">
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
    <div style="font-size: 16px; color: #5A6675; line-height: 1.5;">沉淀底层资产，构建系统化知识图谱。</div>
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
    <div style="font-size: 16px; color: #5A6675; line-height: 1.5;">根据标签精准推送，连接碎片与系统。</div>
  </div>
</div>
<div v-click="2" class="absolute" style="left: 895px; top: 514px;">
  <div style="font-size: 24px; font-weight: bold; color: #5A4FB0;">学员学习入口</div>
  <div style="font-size: 20px; color: #8A94A3; margin-top: 8px;">个性化推荐</div>
</div>

---

<!-- Slide 6: 使用体验 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EEF5); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #2E6BE6;">使用体验</div>

<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  先看 <span style="color: #2E6BE6;">价值</span> ，再看全文。
</div>

<div v-motion="{ initial: { opacity: 0, height: 0 }, enter: { opacity: 1, height: 321, transition: { duration: 800, delay: 300 } } }" class="absolute" style="left: 124px; top: 281px; width: 2px; background: #E2E8F2;"></div>

<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 600, delay: 400 } } }" class="absolute rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default" style="left: 96px; top: 252px; width: 59px; height: 59px; background: #2E6BE6; font-size: 20px; z-index: 10;">01</div>
<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 600, delay: 500 } } }" class="absolute" style="left: 180px; top: 255px;">
  <div style="font-size: 28px; font-weight: bold; color: #232A33;">看摘要</div>
  <div style="font-size: 16px; color: #5A6675; margin-top: 5px;">几行读懂要点</div>
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

<div v-motion="{ initial: { opacity: 0, x: 50 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 200 } } }" class="absolute rounded-[40px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(46,107,230,0.3)]" style="left: 750px; top: 50px; width: 360px; height: 680px; background: #1C2433; padding: 10px; box-shadow: 0 25px 50px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2); border: 2px solid #3A4A66;">
  <div class="absolute rounded-[32px] bg-[#F7F9FC] overflow-hidden" style="left: 10px; top: 10px; right: 10px; bottom: 10px;">
    <!-- 状态栏 -->
    <div style="height: 44px; display: flex; justify-content: space-between; align-items: center; padding: 0 24px; font-size: 14px; font-weight: bold; color: #232A33; position: relative;">
      <div>09:41</div>
      <!-- 动态岛 -->
      <div class="absolute" style="left: 50%; top: 8px; transform: translateX(-50%); width: 90px; height: 26px; background: #1C2433; border-radius: 14px;"></div>
      <div style="display: flex; gap: 6px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
        <svg width="18" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2 11h20v4H2z"></path><path d="M22 9h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2V9z"></path></svg>
      </div>
    </div>
    
    <!-- 导航栏 -->
    <div style="padding: 10px 20px 15px; display: flex; align-items: center; justify-content: space-between; background: white; border-bottom: 1px solid #E2E8F2;">
      <div style="font-size: 22px; font-weight: bold; color: #2E6BE6;">保院热榜</div>
      <div style="padding: 6px 14px; background: #F0F2F5; border-radius: 20px; font-size: 16px; color: #5A6675; display: flex; align-items: center; gap: 6px;">
        <span>🔍</span> 搜索
      </div>
    </div>
    
    <!-- 内容卡片 -->
    <div style="margin: 15px; background: white; border-radius: 20px; padding: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); height: 490px; display: flex; flex-direction: column;">
      <!-- 头部：来源与分类 -->
      <div style="display: flex; gap: 10px; margin-bottom: 20px; align-items: center;">
        <div style="background: #EAF1FF; color: #2E6BE6; font-size: 20px; font-weight: bold; padding: 6px 12px; border-radius: 6px;">监管动态</div>
        <div style="color: #8A94A3; font-size: 20px;">央行 · 官网</div>
      </div>
      
      <!-- 标题 -->
      <div style="font-size: 24px; font-weight: bold; color: #232A33; margin-bottom: 15px; line-height: 1.4;">LPR 下调对寿险定价的影响</div>
      
      <!-- 标签 -->
      <div style="color: #5B8DEF; font-size: 20px; font-weight: bold; margin-bottom: 25px;"># 行业趋势 &nbsp;&nbsp; # 监管合规</div>
      
      <!-- 推荐理由 -->
      <div style="background: linear-gradient(135deg, #F0F4FF, #E1EBFD); border: 1px solid #C4D7F8; border-radius: 16px; padding: 20px; position: relative; overflow: hidden;">
        <div class="absolute" style="top: -10px; right: -10px; font-size: 60px; opacity: 0.1; color: #2E6BE6;">”</div>
        <div style="font-size: 20px; font-weight: bold; color: #2E6BE6; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
           <span style="font-size: 18px;">💡</span> 推荐理由
        </div>
        <div style="font-size: 20px; color: #3A4A66; line-height: 1.6;">本文深入剖析了利率下行周期中，寿险预定利率的调整逻辑，适合用于课程作补充。</div>
      </div>
      
      <!-- 操作按钮 -->
      <div style="display: flex; flex-direction: column; gap: 12px; margin-top: auto;">
        <div class="cursor-pointer transition-all hover:scale-[1.02]" style="width: 100%; background: linear-gradient(to right, #FFF4EA, #FFEFE0); border: 1px solid #FADCC0; color: #F5752B; font-size: 20px; padding: 14px; border-radius: 12px; text-align: center; font-weight: bold; display: flex; justify-content: center; align-items: center; gap: 8px;">
          <span>🎙️</span> 收听音频解读
        </div>
        <div class="cursor-pointer transition-all hover:scale-[1.02]" style="width: 100%; background: #F3F5F8; border: 1px solid #E2E8F2; color: #5A6675; font-size: 20px; padding: 14px; border-radius: 12px; text-align: center; font-weight: bold; display: flex; justify-content: center; align-items: center; gap: 8px;">
          <span>📄</span> 查看原文
        </div>
      </div>
    </div>
    
    <!-- 底部操作条 -->
    <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 60px; background: white; border-top: 1px solid #E2E8F2; display: flex; justify-content: space-around; align-items: center; padding-bottom: 15px;">
       <div style="width: 32px; height: 32px; border-radius: 50%; background: #EAF1FF; border: 2px solid #2E6BE6;"></div>
       <div style="width: 24px; height: 24px; border-radius: 50%; background: #F0F2F5;"></div>
       <div style="width: 24px; height: 24px; border-radius: 50%; background: #F0F2F5;"></div>
    </div>
    <!-- Home bar -->
    <div class="absolute" style="bottom: 8px; left: 50%; transform: translateX(-50%); width: 120px; height: 4px; background: #232A33; border-radius: 2px;"></div>
  </div>
</div>

<!-- 左侧标签与连线 -->
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 500 } } }" class="absolute" style="left: 640px; top: 165px; width: 135px; height: 1px; background: #B6C2D4;"></div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 500 } } }" class="absolute font-bold" style="left: 580px; top: 150px; font-size: 22px; color: #5A6675;">分类</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 600 } } }" class="absolute" style="left: 640px; top: 515px; width: 135px; height: 1px; background: #B6C2D4;"></div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 600 } } }" class="absolute font-bold" style="left: 580px; top: 500px; font-size: 22px; color: #5A6675;">音频</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 700 } } }" class="absolute" style="left: 640px; top: 585px; width: 135px; height: 1px; background: #B6C2D4;"></div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 700 } } }" class="absolute font-bold" style="left: 530px; top: 570px; font-size: 22px; color: #5A6675;">原文入口</div>

<!-- 右侧标签与连线 -->
<div v-click="1" class="absolute" style="left: 1075px; top: 165px; width: 50px; height: 1px; background: #B6C2D4;"></div>
<div v-click="1" class="absolute font-bold" style="left: 1135px; top: 150px; font-size: 22px; color: #5A6675;">来源</div>

<div v-click="2" class="absolute" style="left: 1075px; top: 225px; width: 50px; height: 1px; background: #B6C2D4;"></div>
<div v-click="2" class="absolute font-bold" style="left: 1135px; top: 210px; font-size: 22px; color: #5A6675;">标题</div>

<div v-click="3" class="absolute" style="left: 1075px; top: 355px; width: 50px; height: 1px; background: #2E6BE6;"></div>
<div v-click="3" class="absolute font-bold" style="left: 1135px; top: 340px; font-size: 24px; color: #2E6BE6;">推荐理由</div>

---

<!-- Slide 7: 智能推荐 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #2E6BE6;">智能推荐</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  <span style="color: #2E6BE6;">推荐理由</span> ，是 AI 与教学场景的 <span style="color: #2E6BE6;">连接点</span> 。
</div>

<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 200 } } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-default" style="left: 95px; top: 247px; width: 530px; height: 367px; border: 1px solid #2E6BE6; padding: 30px; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
  <div style="font-size: 14px; font-weight: bold; color: #9B6CE8; margin-bottom: 20px;">✦ AI 推荐理由</div>
  <div style="font-size: 20px; color: #232A33; line-height: 1.6;">
    本文深入分析了近期监管政策对保险资金运用的影响。适合在 <span style="color: #2E6BE6; font-weight: bold;">《利率与产品定价》</span> 课程中作为补充案例，帮助学员理解宏观环境变化与保险产品形态演进的必然联系。建议在讲解“预定利率”章节前，发给学员作为课前阅读材料。
  </div>
</div>

<div v-click="1" class="absolute flex items-center transition-all duration-300 hover:scale-105 cursor-default" style="left: 680px; top: 248px;">
  <div class="flex items-center justify-center rounded-lg shadow-md" style="width: 65px; height: 65px; background: #2E6BE6;">
    <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>
  </div>
  <div style="margin-left: 20px;">
    <div style="font-size: 18px; font-weight: bold; color: #232A33;">适用课程</div>
    <div style="font-size: 13px; color: #5A6675; margin-top: 4px;">这篇适合讲哪门课</div>
  </div>
</div>

<div v-click="2" class="absolute flex items-center transition-all duration-300 hover:scale-105 cursor-default" style="left: 680px; top: 339px;">
  <div class="flex items-center justify-center rounded-lg shadow-md" style="width: 65px; height: 65px; background: #2E6BE6; color: white; font-size: 24px; font-weight: bold;">+</div>
  <div style="margin-left: 20px;">
    <div style="font-size: 18px; font-weight: bold; color: #232A33;">可补充知识点</div>
    <div style="font-size: 13px; color: #5A6675; margin-top: 4px;">能延伸哪些概念</div>
  </div>
</div>

<div v-click="3" class="absolute flex items-center transition-all duration-300 hover:scale-105 cursor-default" style="left: 680px; top: 430px;">
  <div class="flex items-center justify-center rounded-lg shadow-md" style="width: 65px; height: 65px; background: #2E6BE6;">
    <div style="width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 18px solid white;"></div>
  </div>
  <div style="margin-left: 20px;">
    <div style="font-size: 18px; font-weight: bold; color: #232A33;">可作为课堂案例</div>
    <div style="font-size: 13px; color: #5A6675; margin-top: 4px;">拿来当真实案例</div>
  </div>
</div>

<div v-click="4" class="absolute flex items-center transition-all duration-300 hover:scale-105 cursor-default" style="left: 680px; top: 522px;">
  <div class="flex items-center justify-center rounded-lg shadow-md" style="width: 65px; height: 65px; background: #2E6BE6;">
    <div style="width: 24px; height: 12px; border-radius: 6px; border: 2px solid white;"></div>
  </div>
  <div style="margin-left: 20px;">
    <div style="font-size: 18px; font-weight: bold; color: #232A33;">建议阅读对象</div>
    <div style="font-size: 13px; color: #5A6675; margin-top: 4px;">适合谁先读</div>
  </div>
</div>

---

<!-- Slide 8: 语音与移动 -->
<style scoped>
@keyframes audio-play {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.4); }
}
.audio-bar {
  animation: audio-play 1.2s infinite ease-in-out;
  transform-origin: bottom;
}
</style>

<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #2E6BE6;">语音与移动</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  看不方便时， <span style="color: #2E6BE6;">也可以听</span> 。
</div>

<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 200 } } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-default" style="left: 95px; top: 241px; width: 514px; height: 373px; border: 1px solid #2E6BE6; padding: 30px; box-shadow: 0 10px 24px rgba(46,107,230,0.08);">
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
    <div style="font-size: 18px; font-weight: bold; color: #232A33;">通勤路上</div>
    <div style="font-size: 13px; color: #5A6675; margin-top: 4px;">用语音摘要听懂当天要点</div>
  </div>
</div>

<div v-click="2" class="absolute bg-white rounded-xl flex items-center px-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-400 cursor-default" style="left: 650px; top: 373px; width: 541px; height: 110px; border: 1px solid #E2E8F2;">
  <div class="rounded-lg flex items-center justify-center text-white shadow-md" style="width: 69px; height: 69px; background: #2E6BE6; font-size: 24px;">📱</div>
  <div class="ml-6">
    <div style="font-size: 18px; font-weight: bold; color: #232A33;">课前预习</div>
    <div style="font-size: 13px; color: #5A6675; margin-top: 4px;">移动端几分钟快速了解背景</div>
  </div>
</div>

<div v-click="3" class="absolute bg-white rounded-xl flex items-center px-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-default" style="left: 650px; top: 504px; width: 541px; height: 110px; border: 1px solid #E2E8F2;">
  <div class="rounded-lg flex items-center justify-center text-white shadow-md" style="width: 69px; height: 69px; background: #F5752B; font-size: 24px;">☕</div>
  <div class="ml-6">
    <div style="font-size: 18px; font-weight: bold; color: #232A33;">会议间隙</div>
    <div style="font-size: 13px; color: #5A6675; margin-top: 4px;">碎片时间也能浏览资讯</div>
  </div>
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 500 } } }" class="absolute" style="left: 95px; top: 645px; font-size: 15px; color: #5A6675;">
  语音摘要 · 移动端浏览，让 <span style="color: #232A33; font-weight: bold;">碎片时间</span> 也能被温和地利用起来。
</div>

---

<!-- Slide 9: 信源采集 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #2E6BE6;">信源采集</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  一套信源库，把好内容 <span style="color: #E0701F;">半自动</span> 收进来。
</div>

<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 200 } } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-default" style="left: 95px; top: 220px; width: 556px; height: 420px; border: 1px solid #2E6BE6; padding: 30px;">
  <div class="flex items-center gap-4 mb-4">
    <div style="width: 24px; height: 24px; background: #2E6BE6; border-radius: 4px;"></div>
    <div style="font-size: 18px; font-weight: bold; color: #2E6BE6;">信息源库</div>
  </div>
  <div style="font-size: 12px; color: #8A94A3; margin-bottom: 30px;">覆盖 宏观财经 · 行业研究 · 管理思想 · 健康人文</div>
  
  <div class="flex gap-2 mb-4">
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 400 } } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">虎嗅</div>
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 500 } } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">慧保天下</div>
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 600 } } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">保观</div>
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 700 } } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">麦肯锡中国</div>
  </div>
  <div class="flex gap-2 mb-4">
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 800 } } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">哈佛商业评论</div>
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 900 } } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">中国金融四十人论坛</div>
  </div>
  <div class="flex gap-2 mb-4">
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 1000 } } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">吴晓波频道</div>
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 1100 } } }" class="rounded-full font-bold transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">共产党员网</div>
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 1200 } } }" class="rounded-full font-bold transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">人民日报评论</div>
  </div>
  <div class="flex gap-2 mb-4">
    <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 400, delay: 1300 } } }" class="rounded-full transition-all duration-300 hover:bg-[#D4E0F5] hover:scale-105 cursor-pointer" style="background: #EEF3FC; border: 1px solid #D4E0F5; color: #3A4A66; font-size: 12px; padding: 6px 16px;">南方人物周刊</div>
  </div>
  
  <div style="position: absolute; bottom: 25px; font-size: 12px; color: #8A94A3;">持续收录 · 动态扩充中</div>
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 400 } } }" class="absolute flex items-center gap-4" style="left: 700px; top: 220px;">
  <div style="width: 24px; height: 24px; background: #F5752B; border-radius: 4px;"></div>
  <div style="font-size: 18px; font-weight: bold; color: #F5752B;">半自动采集流程</div>
</div>

<div v-motion="{ initial: { opacity: 0, height: 0 }, enter: { opacity: 1, height: 320, transition: { duration: 800, delay: 500 } } }" class="absolute" style="left: 734px; top: 280px; width: 2px; background: #E2E8F2;"></div>

<div v-click="1" class="absolute bg-white rounded-xl flex items-center px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default" style="left: 710px; top: 304px; width: 508px; height: 67px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <div class="rounded-full flex items-center justify-center text-white font-bold" style="width: 50px; height: 50px; background: linear-gradient(to right, #2E6BE6, #5B8DEF);">1</div>
  <div class="ml-4">
    <span style="font-size: 16px; font-weight: bold; color: #232A33;">发现</span>
    <span style="font-size: 12px; color: #5A6675; margin-left: 10px;">日常发现需要补充的优质内容</span>
  </div>
</div>

<div v-click="2" class="absolute bg-white rounded-xl flex items-center px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default" style="left: 710px; top: 388px; width: 508px; height: 67px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <div class="rounded-full flex items-center justify-center text-white font-bold" style="width: 50px; height: 50px; background: linear-gradient(to right, #2E6BE6, #5B8DEF);">2</div>
  <div class="ml-4">
    <span style="font-size: 16px; font-weight: bold; color: #232A33;">反馈</span>
    <span style="font-size: 12px; color: #5A6675; margin-left: 10px;">网页一键反馈，填写信源链接</span>
  </div>
</div>

<div v-click="3" class="absolute bg-white rounded-xl flex items-center px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default" style="left: 710px; top: 472px; width: 508px; height: 67px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <div class="rounded-full flex items-center justify-center text-white font-bold" style="width: 50px; height: 50px; background: linear-gradient(to right, #2E6BE6, #5B8DEF);">3</div>
  <div class="ml-4">
    <span style="font-size: 16px; font-weight: bold; color: #232A33;">审核</span>
    <span style="font-size: 12px; color: #5A6675; margin-left: 10px;">后台人工审核来源质量</span>
  </div>
</div>

<div v-click="4" class="absolute bg-white rounded-xl flex items-center px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-orange-300 border border-transparent cursor-default" style="left: 710px; top: 556px; width: 508px; height: 67px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <div class="rounded-full flex items-center justify-center text-white font-bold shadow-md" style="width: 50px; height: 50px; background: linear-gradient(to right, #F5944B, #F5752B);">4</div>
  <div class="ml-4">
    <span style="font-size: 16px; font-weight: bold; color: #232A33;">触发</span>
    <span style="font-size: 12px; color: #5A6675; margin-left: 10px;">自动触发 AI 处理，无需复制正文</span>
  </div>
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 600 } } }" class="absolute" style="left: 95px; top: 660px; font-size: 15px; color: #5A6675;">
  信源库 + 一键反馈，<span style="font-weight: bold; color: #232A33;">半自动采集</span>，极大降低采编门槛。
</div>

---

<!-- Slide 10: 质量机制 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #2E6BE6;">质量机制</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  智能可以 <span style="color: #2E6BE6;">提速</span> ，专业必须 <span style="color: #E0701F;">把关</span> 。
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 300 } } }" class="absolute flex items-center px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default" style="left: 95px; top: 486px; width: 1092px; height: 113px; background: white; border: 1px solid #DCE3EE; border-radius: 12px;">
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

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 500 } } }" class="absolute" style="left: 95px; top: 620px; font-size: 15px; color: #5A6675;">
  AI 不完全自动发布，关键内容仍保留 <span style="font-weight: bold; color: #232A33;">人工审核</span>，保证专业性与可控性。
</div>

---

<!-- Slide 11: 技术底座 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #2E6BE6;">技术底座</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 40px; color: #232A33;">
  小切口应用， <span style="color: #2E6BE6;">也要有可扩展底座</span> 。
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } } }" class="absolute flex rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default" style="left: 95px; top: 218px; width: 1092px; height: 90px; background: white; border: 1px solid #E2E8F2; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
  <div class="flex flex-col justify-center px-6 text-white" style="width: 268px; background: #2E6BE6;">
    <div style="font-size: 18px; font-weight: bold;">应用层</div>
    <div style="font-size: 12px; opacity: 0.8;">Application</div>
  </div>
  <div class="flex items-center px-8" style="font-size: 17px; color: #232A33;">
    小切口应用 · Next.js+React+TailwindCSS
  </div>
</div>

<div v-click="1" class="absolute flex rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default" style="left: 95px; top: 321px; width: 1092px; height: 90px; background: white; border: 1px solid #E2E8F2; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
  <div class="flex flex-col justify-center px-6 text-white" style="width: 268px; background: #3E7BEA;">
    <div style="font-size: 18px; font-weight: bold;">能力层</div>
    <div style="font-size: 12px; opacity: 0.8;">Capability</div>
  </div>
  <div class="flex items-center px-8" style="font-size: 17px; color: #232A33;">
    标准 AI 接口 · 模型可替换
  </div>
</div>

<div v-click="2" class="absolute flex rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default" style="left: 95px; top: 424px; width: 1092px; height: 90px; background: white; border: 1px solid #E2E8F2; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
  <div class="flex flex-col justify-center px-6 text-white" style="width: 268px; background: #5B8DEF;">
    <div style="font-size: 18px; font-weight: bold;">数据层</div>
    <div style="font-size: 12px; opacity: 0.8;">Data</div>
  </div>
  <div class="flex items-center px-8" style="font-size: 17px; color: #232A33;">
    轻量采集 · JSON 结构化存储
  </div>
</div>

<div v-click="3" class="absolute flex rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default" style="left: 95px; top: 527px; width: 1092px; height: 90px; background: white; border: 1px solid #E2E8F2; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
  <div class="flex flex-col justify-center px-6 text-white" style="width: 268px; background: #7AA3F2;">
    <div style="font-size: 18px; font-weight: bold;">部署层</div>
    <div style="font-size: 12px; opacity: 0.8;">Deployment</div>
  </div>
  <div class="flex items-center px-8" style="font-size: 17px; color: #232A33;">
    支持内网部署 · Docker 可维护可替换
  </div>
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 400 } } }" class="absolute" style="left: 95px; top: 640px; font-size: 15px; color: #5A6675;">
  可运行 · 可维护 · 可替换，<span style="font-weight: bold; color: #232A33;">底座随业务持续演进</span>。
</div>

---

<!-- Slide 12: 变革创新性 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #2E6BE6;">评审回应</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 32px; color: #232A33;">变革创新性</div>

<!-- 左柱 -->
<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 200 } } }" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default" style="left: 95px; top: 241px; width: 530px; height: 363px; border: 1px solid #2E6BE6; padding: 30px;">
  <div class="inline-block rounded-full text-white text-sm px-4 py-1 mb-4 font-bold" style="background: #2E6BE6;">技术创新</div>
  <div style="font-size: 26px; font-weight: bold; color: #232A33; margin-bottom: 8px;">教学场景适配</div>
  <div style="font-size: 14px; color: #8A94A3; margin-bottom: 20px;">把 AI 用进保险教育的技术创新</div>
  <div style="width: 100%; height: 1px; background: #E2E8F2; margin-bottom: 20px;"></div>
  <div style="font-size: 15px; color: #3A4A66; line-height: 2.2;">
    <span style="color: #2E6BE6;">▸</span> 摘要生成 → 备课与教学价值<br>
    <span style="color: #2E6BE6;">▸</span> 理解知识内核，映射课程知识点<br>
    <span style="color: #2E6BE6;">▸</span> 注入对保险课程体系的深度理解
  </div>
</div>

<!-- 右柱 -->
<div v-click="1" class="absolute bg-white rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default" style="left: 655px; top: 241px; width: 530px; height: 363px; border: 1px solid #6E6AD6; padding: 30px;">
  <div class="inline-block rounded-full text-white text-sm px-4 py-1 mb-4 font-bold" style="background: #6E6AD6;">模式创新</div>
  <div style="font-size: 26px; font-weight: bold; color: #232A33; margin-bottom: 8px;">导流型学习</div>
  <div style="font-size: 14px; color: #8A94A3; margin-bottom: 20px;">把每天已在浏览的资讯，变成带目的的阅读</div>
  <div style="width: 100%; height: 1px; background: #E2E8F2; margin-bottom: 20px;"></div>
  <div style="font-size: 15px; color: #3A4A66; line-height: 2.2;">
    <span style="color: #6E6AD6;">▸</span> 不增加讲师备课负担<br>
    <span style="color: #6E6AD6;">▸</span> 刷资讯 → 带着备课目的读文章<br>
    <span style="color: #6E6AD6;">▸</span> 讲师、学员共用同一套机制
  </div>
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 400 } } }" class="absolute" style="left: 95px; top: 634px; font-size: 15px; color: #5A6675;">
  这是通用推荐引擎做不到的——<span style="font-weight: bold; color: #232A33;">它需要对保险课程体系的深度业务理解。</span>
</div>

---

<!-- Slide 13: 业技融合性 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #6E6AD6;">评审回应</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 32px; color: #232A33;">业技融合性</div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } } }" class="absolute" style="left: 95px; top: 150px; font-size: 15px; color: #5A6675;">
  全程由业务需求驱动，技术解法精准匹配。
</div>

<div v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 800, delay: 300 } } }" class="absolute bg-white rounded-xl flex flex-col p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default" style="left: 95px; top: 248px; width: 479px; height: 215px; border: 1px solid #C9CCEE;">
  <div class="inline-block rounded-full text-white text-sm px-4 py-1 mb-4 font-bold self-start" style="background: #6E6AD6;">业务需求</div>
  <div style="font-size: 15px; color: #232A33; line-height: 1.8;">
    <span style="font-weight: bold;">讲师</span> 用碎片时间，把外部资讯<br>
    沉淀为可直接引用的备课素材<br>
    <span style="font-weight: bold;">未来</span> 学员把资讯与课程学习相连
  </div>
</div>

<div v-click="1" class="absolute bg-white rounded-xl flex flex-col p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default" style="left: 706px; top: 248px; width: 479px; height: 215px; border: 1px solid #C9CCEE;">
  <div class="inline-block rounded-full text-white text-sm px-4 py-1 mb-4 font-bold self-start" style="background: #6E6AD6;">技术解法</div>
  <div style="font-size: 15px; color: #232A33; line-height: 1.8;">
    <span style="font-weight: bold;">大模型</span> 文本理解与生成，弥补<br>
    “资讯学习化”转化缺口<br>
    <span style="font-weight: bold;">讲师与学员</span> 共用同一套底层能力
  </div>
</div>

<div v-click="2" class="absolute flex flex-col items-center justify-center transition-all duration-500 hover:scale-110" style="left: 580px; top: 320px; width: 120px;">
  <div style="width: 100px; height: 20px; background: #6E6AD6; position: relative; border-radius: 4px;">
    <div style="position: absolute; right: -20px; top: -10px; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-left: 20px solid #6E6AD6;"></div>
  </div>
  <div style="font-size: 11px; font-weight: bold; color: #6E6AD6; margin-top: 20px;">精准匹配</div>
</div>

<div v-click="3" class="absolute flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#6E6AD6] cursor-default shadow-sm hover:shadow-md" style="left: 95px; top: 500px; width: 346px; height: 59px; background: #F1F0FB; border: 1px solid #D9D6F2; font-size: 13px; font-weight: bold; color: #3A4A66;">
  <span style="color: #6E6AD6; margin-right: 8px;">◆</span> 推荐理由 30–60 字
</div>
<div v-click="3" class="absolute flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#6E6AD6] cursor-default shadow-sm hover:shadow-md" style="left: 457px; top: 500px; width: 346px; height: 59px; background: #F1F0FB; border: 1px solid #D9D6F2; font-size: 13px; font-weight: bold; color: #3A4A66;">
  <span style="color: #6E6AD6; margin-right: 8px;">◆</span> 分类对齐课程体系
</div>
<div v-click="3" class="absolute flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#6E6AD6] cursor-default shadow-sm hover:shadow-md" style="left: 819px; top: 500px; width: 346px; height: 59px; background: #F1F0FB; border: 1px solid #D9D6F2; font-size: 13px; font-weight: bold; color: #3A4A66;">
  <span style="color: #6E6AD6; margin-right: 8px;">◆</span> 底层能力不重复建设
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 500 } } }" class="absolute" style="left: 95px; top: 634px; font-size: 15px; color: #5A6675;">
  没有为了用技术而用技术——<span style="font-weight: bold; color: #6E6AD6;">每一处设计，都能在业务需求里找到支点。</span>
</div>

---

<!-- Slide 14: 落地实施性 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #7C5CE0;">评审回应</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 32px; color: #232A33;">落地实施性</div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } } }" class="absolute" style="left: 95px; top: 150px; font-size: 15px; color: #5A6675;">
  平台已部署上线、内容每日更新、审核流程正常运转。
</div>

<div v-click="1" class="absolute bg-white rounded-xl flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default" style="left: 95px; top: 244px; width: 346px; height: 157px; border: 1px solid #7C5CE0;">
  <div>
    <span style="font-size: 60px; font-weight: bold; color: #7C5CE0;">1</span>
    <span style="font-size: 18px; font-weight: bold; color: #232A33; margin-left: 5px;">个多月</span>
  </div>
  <div style="font-size: 12px; color: #8A94A3; margin-top: 10px;">持续收录行业优质文章</div>
</div>

<div v-click="2" class="absolute bg-white rounded-xl flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default" style="left: 465px; top: 244px; width: 346px; height: 157px; border: 1px solid #7C5CE0;">
  <div>
    <span style="font-size: 60px; font-weight: bold; color: #7C5CE0;">3</span>
    <span style="font-size: 18px; font-weight: bold; color: #232A33; margin-left: 5px;">大分类</span>
  </div>
  <div style="font-size: 12px; color: #8A94A3; margin-top: 10px;">党建培训·专业能力·综合素养</div>
</div>

<div v-click="3" class="absolute bg-white rounded-xl flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default" style="left: 835px; top: 244px; width: 346px; height: 157px; border: 1px solid #7C5CE0;">
  <div>
    <span style="font-size: 60px; font-weight: bold; color: #7C5CE0;">多</span>
    <span style="font-size: 18px; font-weight: bold; color: #232A33; margin-left: 5px;">轮评审</span>
  </div>
  <div style="font-size: 12px; color: #8A94A3; margin-top: 10px;">AI 推荐理由人工把关</div>
</div>

<div v-click="4" class="absolute flex items-center px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default" style="left: 95px; top: 426px; width: 1090px; height: 63px; background: #F2F0FC; border: 1px solid #7C5CE0;">
  <div class="shadow-[0_0_10px_rgba(124,92,224,0.5)]" style="width: 12px; height: 12px; background: #7C5CE0; border-radius: 50%; margin-right: 15px;"></div>
  <span style="font-size: 15px; font-weight: bold; color: #7C5CE0;">已部署上线</span>
  <span style="font-size: 15px; color: #8A94A3;">&nbsp;· 内容每日更新 · 审核流程正常运转</span>
</div>

---

<!-- Slide 15: 自主安全性 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #F5752B;">评审回应</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 32px; color: #232A33;">自主安全性</div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } } }" class="absolute" style="left: 95px; top: 150px; font-size: 15px; color: #5A6675;">
  在内容、数据、版权三个层面，保障平台的安全合规。
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 300 } } }" class="absolute flex rounded-xl overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default" style="left: 95px; top: 248px; width: 1090px; height: 90px; border: 1px solid #F5752B;">
  <div style="width: 8px; height: 100%; background: linear-gradient(to bottom, #F5944B, #F5752B);"></div>
  <div class="flex items-center px-8" style="width: 100%;">
    <div style="font-size: 17px; font-weight: bold; color: #232A33; width: 150px;">内容安全</div>
    <div style="font-size: 13px; color: #5A6675;">公开来源可查可溯 · 人工审核后发布 · AI 推荐理由人工确认，杜绝幻觉外输</div>
  </div>
</div>

<div v-click="1" class="absolute flex rounded-xl overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default" style="left: 95px; top: 354px; width: 1090px; height: 90px; border: 1px solid #F5752B;">
  <div style="width: 8px; height: 100%; background: linear-gradient(to bottom, #F5944B, #F5752B);"></div>
  <div class="flex items-center px-8" style="width: 100%;">
    <div style="font-size: 17px; font-weight: bold; color: #232A33; width: 150px;">数据安全</div>
    <div style="font-size: 13px; color: #5A6675;">用户数据最小化 · 不采集学员敏感信息 · 提交审核发布全程留痕可审计</div>
  </div>
</div>

<div v-click="2" class="absolute flex rounded-xl overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default" style="left: 95px; top: 460px; width: 1090px; height: 90px; border: 1px solid #F5752B;">
  <div style="width: 8px; height: 100%; background: linear-gradient(to bottom, #F5944B, #F5752B);"></div>
  <div class="flex items-center px-8" style="width: 100%;">
    <div style="font-size: 17px; font-weight: bold; color: #232A33; width: 150px;">版权合规</div>
    <div style="font-size: 13px; color: #5A6675;">只展示摘要与推荐理由、不全文转载 · 跳转原文外链 · 版权归原机构、标注免责</div>
  </div>
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 500 } } }" class="absolute" style="left: 95px; top: 634px; font-size: 15px; color: #5A6675;">
  公开 · 审核 · 合规——<span style="font-weight: bold; color: #F5752B;">AI 输出全程人工把关。</span>
</div>

---

<!-- Slide 16: 协同价值 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }" class="absolute font-bold" style="left: 96px; top: 49px; font-size: 20px; color: #2E6BE6;">协同价值</div>
<div v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }" class="absolute font-bold" style="left: 95px; top: 103px; font-size: 36px; color: #232A33;">
  从一个人的发现，到 <span style="color: #2E6BE6;">一群人</span> 的学习。
</div>
<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } } }" class="absolute" style="left: 95px; top: 160px; font-size: 15px; color: #5A6675;">
  信息员发现 · AI 提炼 · 学院审核 · 讲师共用 · 学员学习
</div>

<!-- 中心 Hub -->
<div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { duration: 800, delay: 300 } } }" class="absolute rounded-full flex flex-col items-center justify-center text-white font-bold transition-all duration-500 hover:scale-110 cursor-default" style="left: 548px; top: 359px; width: 185px; height: 185px; background: linear-gradient(to bottom right, #2E6BE6, #6E6AD6); z-index: 10; box-shadow: 0 10px 30px rgba(46,107,230,0.3);">
  <div style="font-size: 24px; margin-bottom: 5px;">保院热榜</div>
  <div style="font-size: 14px; opacity: 0.9;">AI 提炼 · 汇聚</div>
</div>

<!-- 连线与节点 - Step 1 -->
<div v-click="1" class="absolute" style="left: 360px; top: 310px; width: 250px; height: 2px; background: #B9C6E0; transform: rotate(35deg);"></div>
<div v-click="1" class="absolute" style="left: 670px; top: 580px; width: 250px; height: 2px; background: #B9C6E0; transform: rotate(35deg);"></div>
<div v-click="1" class="absolute bg-white rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-default" style="left: 260px; top: 220px; width: 143px; height: 143px; border: 2px solid #2E6BE6; z-index: 10;">
  <div style="font-size: 18px; font-weight: bold; color: #2E6BE6;">信息员</div>
  <div style="font-size: 12px; color: #5A6675; margin-top: 4px; text-align: center; padding: 0 10px;">把一线资讯带回来</div>
</div>
<div v-click="1" class="absolute bg-white rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-default" style="left: 870px; top: 530px; width: 143px; height: 143px; border: 2px solid #EC7C2B; z-index: 10;">
  <div style="font-size: 18px; font-weight: bold; color: #EC7C2B;">讲师</div>
  <div style="font-size: 12px; color: #5A6675; margin-top: 4px; text-align: center; padding: 0 10px;">好内容一起共用</div>
</div>

<!-- 连线与节点 - Step 2 -->
<div v-click="2" class="absolute" style="left: 670px; top: 310px; width: 250px; height: 2px; background: #B9C6E0; transform: rotate(-35deg);"></div>
<div v-click="2" class="absolute" style="left: 360px; top: 580px; width: 250px; height: 2px; background: #B9C6E0; transform: rotate(-35deg);"></div>
<div v-click="2" class="absolute bg-white rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-default" style="left: 870px; top: 220px; width: 143px; height: 143px; border: 2px solid #7C5CE0; z-index: 10;">
  <div style="font-size: 18px; font-weight: bold; color: #7C5CE0;">学员</div>
  <div style="font-size: 12px; color: #5A6675; margin-top: 4px; text-align: center; padding: 0 10px;">随时靠近行业前沿</div>
</div>
<div v-click="2" class="absolute bg-white rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-default" style="left: 260px; top: 530px; width: 143px; height: 143px; border: 2px solid #6E6AD6; z-index: 10;">
  <div style="font-size: 18px; font-weight: bold; color: #6E6AD6;">学院</div>
  <div style="font-size: 12px; color: #5A6675; margin-top: 4px; text-align: center; padding: 0 10px;">替专业内容把关</div>
</div>

---

<!-- Slide 17: 结尾 -->
<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #F7F9FC, #E9EAF6); z-index: -1;"></div>

<!-- 顶部装饰圆点 -->
<div v-motion="{ initial: { opacity: 0, scale: 0 }, enter: { opacity: 0.6, scale: 1, transition: { duration: 1000, delay: 100 } } }" class="absolute rounded-full" style="left: 349px; top: 170px; width: 15px; height: 15px; background: #2E6BE6;"></div>
<div v-motion="{ initial: { opacity: 0, scale: 0 }, enter: { opacity: 0.5, scale: 1, transition: { duration: 1000, delay: 200 } } }" class="absolute rounded-full" style="left: 450px; top: 120px; width: 23px; height: 23px; background: #6E6AD6;"></div>
<div v-motion="{ initial: { opacity: 0, scale: 0 }, enter: { opacity: 0.7, scale: 1, transition: { duration: 1000, delay: 300 } } }" class="absolute rounded-full" style="left: 550px; top: 90px; width: 13px; height: 13px; background: #2E6BE6;"></div>
<div v-motion="{ initial: { opacity: 0, scale: 0 }, enter: { opacity: 0.6, scale: 1, transition: { duration: 1000, delay: 400 } } }" class="absolute rounded-full" style="left: 650px; top: 80px; width: 18px; height: 18px; background: #6E6AD6;"></div>
<div v-motion="{ initial: { opacity: 0, scale: 0 }, enter: { opacity: 0.5, scale: 1, transition: { duration: 1000, delay: 500 } } }" class="absolute rounded-full" style="left: 750px; top: 100px; width: 14px; height: 14px; background: #2E6BE6;"></div>
<div v-motion="{ initial: { opacity: 0, scale: 0 }, enter: { opacity: 0.6, scale: 1, transition: { duration: 1000, delay: 600 } } }" class="absolute rounded-full" style="left: 850px; top: 130px; width: 20px; height: 20px; background: #6E6AD6;"></div>
<div v-motion="{ initial: { opacity: 0, scale: 0 }, enter: { opacity: 0.7, scale: 1, transition: { duration: 1000, delay: 700 } } }" class="absolute rounded-full" style="left: 912px; top: 170px; width: 16px; height: 16px; background: #2E6BE6;"></div>

<!-- 中央入口卡 -->
<div v-motion="{ initial: { opacity: 0, y: 50 }, enter: { opacity: 1, y: 0, transition: { duration: 1000 } } }" class="absolute bg-white rounded-[24px] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(46,107,230,0.15)] hover:scale-[1.01] cursor-default" style="left: 262px; top: 226px; width: 756px; height: 281px; border: 1px solid #2E6BE6; box-shadow: 0 20px 40px rgba(46,107,230,0.08);"></div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 500 } } }" class="absolute text-center font-bold" style="left: 0; right: 0; top: 300px; font-size: 32px; color: #232A33;">
  让讲师 <span style="color: #2E6BE6;">更专注</span> 于教学，<br>
  让学员 <span style="color: #2E6BE6;">更轻松</span> 地接近行业。
</div>

<div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 800 } } }" class="absolute text-center" style="left: 0; right: 0; top: 436px; font-size: 15px; color: #5A6675;">
  保院热榜，从资讯聚合开始，走向学习协同。
</div>

<style>
.slidev-vclick-hidden {
  opacity: 0 !important;
  transform: translateY(20px) scale(0.95) !important;
  pointer-events: none;
}
</style>

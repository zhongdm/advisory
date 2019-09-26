<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="@/assets/images/business1@2x.png" media="(max-width: 768px)">
      <source class="mobile-img" srcset="@/assets/images/bs-web1.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="@/assets/images/business1@2x.png" alt="pic">
    </picture>
    <!-- <img class="mobile-img" src="@/assets/images/business1@2x.png" alt=""> -->
    <h3 class="detail-title">增长策略顾问</h3>
    <div>
      <h4>管理困局</h4>
      <ul class="qs-list">
        <li>市场竞争激烈，产品同质化严重，如何通过增长策略立于不败之地？</li>
        <li>在经济下行压力下，如何通过区域增长策略实现销售逆势增长？</li>
        <li>传统的促销模式和渠道获客成本不断攀升，如何通过低成本获客实现收入增长？</li>
        <li>产品价格日趋透明，如何通过产品创新的增长策略保证公司的利润增长？</li>
        <li>......</li>
      </ul>
      <p>如果您企业面临着以上有关盈利和增长的困惑，闻动顾问的“增长策略顾问项目”可以有效帮助您。闻动顾问通过实地调研、分析和诊断，基于客户增长潜力和核心团队对于增长的愿望，和客户共同确认“增长基数”和“增量分享计划”并签订不少于一年期的《增长策略顾问项目合作协议》。</p>
    </div>
    <div class="content-container">
      <h4>顾问方法</h4>
      <section>
        <p>闻动顾问将基于客户的“产品创新”、“客户创新”和“区域创新”三条主线的基本增长逻辑，设计并推动实施具体“增长策略”，首先从“收入增长”入手，帮助企业实现增长的目标。</p>
        <img src="@/assets/images/analysis.png" alt="" class="block-img">

      </section>
      <!-- <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">描述战略</a-tag>
        <div class="content-info">帮助客户把战略说清楚，界定企业价值创造路线图，即公司发展路径</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">衡量战略</a-tag>
        <div class="content-info">帮助客户建立指标体系评估战略，设计基于"财务"、"客户"、"内部运营"、"学习成长"四个层面衡量战略的“平衡计分卡”。</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">管理战略</a-tag>
        <div class="content-info">帮助</div>
      </section> -->
    </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="1"></pages>

  </div>
</template>

<script>
export default {
  components: {
    Pages: () => import('./Pages.vue')
    // BottomMenu: () => import('../components/BottomMenu.vue')
  },
  mounted () {
  }
}
</script>

<style scoped>
/* .wrapper {
  padding-bottom: 4rem;
} */
  .detail-wrapper {
    margin-top: 10px;
  }
  .detail-wrapper > div {
    padding: 10px;
  }
  .qs-list {
    margin-left: 20px;
  }
  .content-item {
    display: flex;
    margin: 10px 0;
  }
  .content-item .content-tag {
    flex: 0 0 80px;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: 2rem;
  }
  .content-item .content-info {
    flex: 1;
  }
  .mobile-img {
    width: 100%;
    /* max-width: 10rem; */
    margin: 0 auto;
    display: block;
  }
  .detail-title {
    margin: .8rem 10px;

  }
  p {
    margin-bottom: 5px;
  }
  .qs-list, .content-info, .contact-info {
    font-size: .9rem;
  }

  .block-img {
    display: block;
    margin: 0 auto;
    width: 50%;
  }

@media screen and (max-width: 768px) {
  .block-img {
    width: 60%;
  }
}
@media screen and (max-width: 560px) {
  .block-img {
    width: 70%;
  }
}

</style>

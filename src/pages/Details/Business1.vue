<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="static/assets/images/business1@2x.png" media="(max-width: 768px)">
      <source class="mobile-img" srcset="static/assets/images/bs-web1.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="static/assets/images/business1@2x.png" alt="pic">
    </picture>
    <!-- <img class="mobile-img" src="static/assets/images/business1@2x.png" alt=""> -->
    <h3 class="detail-title">盈利增长顾问</h3>
    <div>
      <h4>管理困局</h4>
      <ul class="qs-list">
        <li>市场竞争激烈，如何立于不败之地？</li>
        <li>经济形势严峻复杂，如何逆势增长？</li>
        <li>促销和渠道成本偏高，如何低成本获客？</li>
        <li>产品价格日趋透明，如何保证利润？</li>
        <li>......</li>
      </ul>
      <p>如果您企业面临着以上有关盈利和增长的困惑，闻动顾问的“企业盈利和增长顾问项目”会帮助您。闻动顾问通过为期一月的免费诊断帮助您找到企业的增长点，并判断未来的增长潜力。在您认同的情况下，双方签订为期一年的顾问协议确定增长指标，协议期满，企业未达指标不必付费，企业增长达标按约定分成。</p>
    </div>
    <div class="content-container">
      <h4>顾问方法</h4>
      <section>
        <p>基于“收入-成本=利润”的增长基本公式，从扩大收入和降低无效成本两方面入手帮助企业实现目标。</p>
        <img src="static/assets/images/analysis.png" alt="" class="block-img">

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
  }
</style>
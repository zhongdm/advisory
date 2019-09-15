<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="@/assets/images/business3@2x.png" media="(max-width: 768px)">
      <source class="mobile-img" srcset="@/assets/images/bs-web3.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="@/assets/images/bs-web3.jpg" alt="pic">
    </picture>
    <h3 class="detail-title">企业文化顾问</h3>
    <div>
      <h4>管理困局</h4>
      <ul class="qs-list">
        <li>企业文化是个啥？为什么要做企业文化？</li>
        <li>企业文化在组织中能发挥多大作用？怎样让企业文化深入人心？</li>
        <li>员工流失率高，忠诚度低怎么办？</li>
        <li>团队成员难融合，观念经常有冲突怎么办？</li>
        <li>企业文化建设怎么做？怎么将企业文化落实到实处，成为组织成员共同的行为模式？</li>
      </ul>
      <p>您有着以上文化迷思么？您渴望您的组织更具吸引力，更有核心竞争力么？闻动公司的企业文化顾问服务，可以帮助客户打造软实力，塑造促进战略实现的组织氛围。</p>
    </div>
    <div class="content-container">
      <h4>顾问内容</h4>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">构建企业文化</a-tag>
        <div class="content-info">帮助客户通过讨论完成“使命、愿景和价值观”为核心的企业文化体系设计。</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">理解企业文化</a-tag>
        <div class="content-info">帮助客户定义企业文化内涵，收集企业文化案例，引导理解并宣贯。</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">实施企业文化</a-tag>
        <div class="content-info">建立企业文化运行制度，策划推广企业文化活动，形成总结、提升和丰富企业文化内涵的机制。</div>
      </section>
    </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="3"></pages>
  </div>
</template>

<script>
export default {
  components: {
    Pages: () => import('./Pages.vue')
    // BottomMenu: () => import('../components/BottomMenu.vue')
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
</style>
<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="static/assets/images/business4@2x.png" media="(max-width: 768px)">
      <source class="mobile-img" srcset="static/assets/images/bs-web4.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="static/assets/images/bs-web4.png" alt="pic">
    </picture>
    <h3 class="detail-title">组织能力顾问</h3>
    <div>
      <h4>管理困局</h4>
      <ul class="qs-list">
        <li>员工为何没有激情？员工为何离开？组织为什么不能吸引和留住优秀的人才？</li>
        <li>员工能力够么？如何判断？管理层能力跟不上怎么办？</li>
        <li>个体优不代表组织优，如何提高组织效能？</li>
        <li>如何发掘企业高潜人才？企业快速发展，组织能力不足怎么办？</li>
        <li>如何提高执行力？如何创造条件帮助员工实现组织目标？</li>
      </ul>
      <p>如果您遇到以上困惑，代表您企业的组织能力需要提升，闻动公司将为您量身定制组织能力提升方案，通过工具和方法，解决战略实施过程中的问题。</p>
    </div>
    <div class="content-container">
      <h4>顾问内容</h4>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">思维模式</a-tag>
        <div class="content-info">解决员工愿不愿意干的问题，引导员工树立和企业发展战略同步的职业发展规划。</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">员工能力</a-tag>
        <div class="content-info">解决员工会不会干的问题，帮助员工提升匹配战略所需的能力。</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">支持条件</a-tag>
        <div class="content-info">理顺员工实现目标所需的管理支持和资源支持条件。</div>
      </section>
    </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="4"></pages>
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
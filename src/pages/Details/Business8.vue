<template>
<div>
  <div class="detail-wrapper wrapper">
    <img class="mobile-img" src="static/assets/images/business1@2x.png" alt="">
    <h3 class="detail-title">发展战略顾问</h3>
    <div>
      <h4>管理困局</h4>
      <ul class="qs-list">
        <li>战略是有，但大家理解都不一样？</li>
        <li>如何实现可持续发展？如何创造更大的价值？</li>
        <li>市场变化太快，要不要转型？</li>
        <li>企业目标如何定？定的合理么？怎样实现？</li>
        <li>企业向何处发展？是做大还是做强？</li>
      </ul>
      <p>以上常见的战略问题，是您的通电么？闻动都可以帮你解决。</p>
    </div>
    <div class="content-container">
      <h4>顾问内容</h4>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">描述战略</a-tag>
        <div class="content-info">帮助客户把战略说清楚，界定企业价值创造路线图，即公司发展路径</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">衡量战略</a-tag>
        <div class="content-info">帮助</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">管理战略</a-tag>
        <div class="content-info">帮助</div>
      </section>
    </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="8"></pages>
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
  .detail-wrapper > div {
    padding: 10px;
  }
  .qs-list {
    margin-left: 20px;
  }
  .content-item {
    display: flex;
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
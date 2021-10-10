<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="@/assets/images/business2@2x.png" media="(max-width: 768px)">
      <source class="mobile-img" srcset="@/assets/images/bs-web2.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="@/assets/images/bs-web2.jpg" alt="pic">
    </picture>
    <h3 class="detail-title">人才驱动</h3>
    <div class="content-container">
      <h4>人才驱动从人才盘点开始</h4>
      <p>人才驱动的实施必须借助人才盘点工作的开展，首先了解人才现状，基于人才战略的需求，构建人才标准，精准识别人才，发现并发展优秀人才，从而提升人才管理的有效性，促进人才战略的落实。</p>
    </div>
    <div class="content-container">
      <h4>关于“人才盘点”项目的简介</h4>
      <section>
        <img src="@/assets/images/newfix/rencaipandian2.png" alt="" class="block-img">
      </section>
    </div>
    <div class="content-container">
      <h4>人才驱动，六个基本人才管理要素</h4>
      <section>
        <img src="@/assets/images/newfix/rencaipandian3.png" alt="" class="block-img">
      </section>
    </div>
    <pages :currentIndex="21"></pages>
  </div>
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

.block-img {
  display: block;
  margin: 0 auto;
  width: 50%;
}
</style>

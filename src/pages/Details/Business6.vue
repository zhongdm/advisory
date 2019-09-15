<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="@/assets/images/business6@2x.png" media="(max-width: 768px)">
      <source class="mobile-img" srcset="@/assets/images/bs-web6.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="@/assets/images/bs-web6.jpg" alt="pic">
    </picture>
    <h3 class="detail-title">闻动私董会</h3>
    <div>
      <!-- <h4>管理困局</h4> -->
      <ul class="qs-list">
        <li>一个高端的商务圈层</li>
        <li>一个坦诚的智囊团队</li>
        <li>一次深刻的思想碰撞</li>
        <li>一次问题的彻底解构</li>
      </ul>
    </div>
  </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="6"></pages>
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
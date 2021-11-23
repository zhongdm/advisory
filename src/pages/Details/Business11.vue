<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/black-3509513_1920_gaitubao_335x250.jpg" media="(max-width: 768px)">
      <source class="mobile-img" srcset="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/black-3509513_1920_gaitubao_503x375.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/black-3509513_1920_gaitubao_503x375.jpg" alt="pic">
    </picture>
    <!-- <img class="mobile-img" src="@/assets/images/business1@2x.png" alt=""> -->
    <h3 class="detail-title">战略引领</h3>
    <div>
      <h4>战略引领的三个核心要素</h4>
      <ul class="qs-list">
        <li>定位：回答的是“我是谁？”即在顾客心智中，针对竞争对手确定最具优势的位置，赢得用户的优先选择，使品牌胜出竞争。</li>
        <li>目标：回答的是“去哪里？”是对行动方向期望成功状态的具体表述。</li>
        <li>路径：回答的是“怎么去？”即达成目标的策略和方法。</li>
      </ul>
    </div>
    <div class="content-container">
      <section>
        <img src="@/assets/images/newfix/zhanlueyinling.png" alt="" class="block-img">
      </section>
    </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="11"></pages>

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

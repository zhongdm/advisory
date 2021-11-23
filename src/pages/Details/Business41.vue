<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/office-1516329_1920_gaitubao_335x250.jpg" media="(max-width: 768px)">
      <source class="mobile-img" srcset="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/office-1516329_1920_gaitubao_503x375.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/office-1516329_1920_gaitubao_335x250.jpg" alt="pic">
    </picture>
    <h3 class="detail-title">闻动私董会</h3>
    <div>
      <!-- <h4>管理困局</h4> -->
      <a-row type="flex" justify="space-around">
        <a-col :span="24">
          <div class="summary-container">
            <p><em>宗旨：</em>修心 悟道 优术</p>
            <p><em>修心：</em>修“利他”之心</p>
            <p><em>悟道：</em>悟“商道”的本质</p>
            <p><em>优术：</em>优化解决问题的“方法”和“工具”</p>
          </div>
        </a-col>
        <!-- <a-col :span="12">
            <div>
              <a-row type="flex" justify="center">
            <a-col :span="24">

          <img src='@/assets/images/logo@2x.png' alt="">
          </a-col>
          <a-col :span="24">
          <span>闻动私董会</span>
          </a-col>
          </a-row>
          </div>
        </a-col> -->
      </a-row>
      <ul class="qs-list">
        <li>一个高端的商务圈层</li>
        <li>一个坦诚的智囊团队</li>
        <li>一次深刻的思想碰撞</li>
        <li>一次问题的彻底解构</li>
      </ul>
    </div>
  </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="41"></pages>
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
  .summary-container {
    margin-bottom: .5rem;
    font-size: .9rem;
  }
  .summary-container em {
    font-weight: bold;
    font-style: normal;
  }
  .summary-container p {
    text-indent: 0;
  }
</style>

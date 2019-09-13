<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="static/assets/images/business7@2x.png" media="(max-width: 768px)">
      <source class="mobile-img" srcset="static/assets/images/bs-web7.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="static/assets/images/bs-web7.jpg" alt="pic">
    </picture>
    <h3 class="detail-title">闻动会员服务介绍</h3>
    <div>
      <h4>会员增值服务</h4>
      <ul class="qs-list">
        <li>获得一次闻动顾问一对一的企业咨询服务</li>
        <li>享受一次价值3980元企业内训课程培训(120分钟)</li>
        <li>参与二次私董会活动或者私享会活动</li>
        <li>组织一次以会员为案主的专属私董会活动</li>
      </ul>
    </div>
    <div>
      <h4>会费标准和相关说明</h4>
      <ul class="qs-list">
        <li>100元/月，全年1200元/年，活动现场加入960元/年 </li>
        <li>加入会员要求：企业家或企业高管</li>
        <li>您可以随时终止闻动会员服务，退还未服务时间费用</li>
      </ul>
      <p>诚挚欢迎您加入闻动大家庭，我们携手奋进，共同学习，共同进步，共创辉煌！</p>
    </div>
    <!-- <div class="content-container">
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
    </div> -->
    </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="7"></pages>
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
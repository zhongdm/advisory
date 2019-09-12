<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="static/assets/images/business5@2x.png" media="(max-width: 768px)">
      <source class="mobile-img" srcset="static/assets/images/bs-web5.jpg" media="(min-width: 769px)">
      <img class="mobile-img" srcset="static/assets/images/bs-web5.png" alt="pic">
    </picture>
    <h3 class="detail-title">高管圆桌汇</h3>
    <div>
      <h4>管理困局</h4>
      <ul class="qs-list">
        <li>作为企业领导者，您是否希望有一双慧眼能够洞察不断变化的时局，找到企业生存和成长的关键？</li>
        <li>为企业管理者，您有否因为企业经营中层出不穷的问题寝食难安？渴望作出高质量的决策？</li>
        <li>怎样才能有效沟通，解决分歧，就解决问题达成一致呢？</li>
        <li>学到的先进管理经验，到了企业为什么水土不服，期望变成失望呢？</li>
      </ul>
      <p>如果您有以上困惑，也许您需要在企业内部组织“圆桌汇”活动，“圆桌”是让高管团队在平等的基础上进行交流，“汇”是取汇集团队集体智慧之意。“圆桌汇”活动由资深管理教练引导高管团队讨论不同观点，最终达成一致，制定行动计划，并以第三方立场监督执行，保证“圆桌汇”的工作成果顺利落地。</p>
    </div>
    <div class="content-container">
      <h4>顾问内容</h4>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">讨论重大决策</a-tag>
        <div class="content-info">充分讨论，汇集高管集体智慧，减少重大决策失误风险。</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">沟通不同观点</a-tag>
        <div class="content-info">引导高管聚焦核心问题的讨论，通过有效沟通达成一致。</div>
      </section>
      <section class="content-item">
        <a-tag class="content-tag" color="#108ee9">形成行动共识</a-tag>
        <div class="content-info">形成行动计划，监督计划执行，评价执行结果。</div>
      </section>
    </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="5"></pages>
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
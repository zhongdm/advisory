<template>
<div>
  <div class="detail-wrapper wrapper">
    <img class="mobile-img" src="static/assets/images/business1@2x.png" alt="">
    <h3 class="detail-title">某大型现代化视频企业人才盘点项目</h3>
    <div>
      <h4>项目背景</h4>
      <p>J公司是一家集生产、 销售于一体的大型现代化食品企业，在欧亚非洲都拥有广泛的客户资源。</p>
      <p>随着J公司业务的不断扩展，J公司需要对营销部门和制造中心两个核心部门的人才状况进行深入评估和分析，以确保当前的人才能够支撑企业未来发展战略的需求。</p>
      
    </div>
    <div class="content-container">
      <h4>解决方法</h4>
      <p>首先以公司战略和新业务拓展需求为核心，为J公司构建了面向未来具有J公司特色的胜任力模型。</p>
      <p>然后利用多种方式手段对营销部门和制造中心管理层和基层人员分别进行了系统的评估，深入了解两部门人员能力及特点； 最后筛选出两个部门的高潜质管理人才，并提出了 有针对性的培养发展建议，并对两个部门的低潜管理人员进行了识别。</p>
    </div>
    <img src="static/assets/images/prjFlow.png" alt="" style="width:100%;margin: 1rem 0;">
    </div>
    <!-- <bottom-menu></bottom-menu> -->
  </div>
</template>

<script>
export default {
  components: {
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
    text-indent: 2em;
  }
  .qs-list, .content-info, .contact-info {
    font-size: .9rem;
  }
</style>
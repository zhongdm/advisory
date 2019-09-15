<template>
<div>
  <div class="detail-wrapper wrapper">
    <picture>
      <source class="mobile-img" srcset="@/assets/images/case2-m.jpg" media="(max-width: 576px)">
      <source class="mobile-img" srcset="@/assets/images/case2-web.jpg" media="(min-width: 577px)">
      <img class="mobile-img" srcset="@/assets/images/case2-web.jpg" alt="pic">
    </picture>
    <!-- <img class="mobile-img" src="@/assets/images/business1@2x.png" alt=""> -->
    <h3 class="detail-title">某宠物用品公司股权激励项目</h3>
    <div>
      <h4>项目背景</h4>
      <p>Y公司是一家集研发、生产、 销售于一体的宠物用品企业，拥有多项产品专利技术和多个自主品牌，产品远销美洲，欧洲及亚洲市场。</p>
      <p>随着Y公司业务的不断扩展，Y公司希望运用股权激励的方式整合内外部合作资源，激发公司活力，从而提升公司业绩。</p>
      
    </div>
    <div class="content-container">
      <h4>解决方法</h4>
      <p>首先对Y公司内影响股权激励成功实施的要素进行了盘点；</p>
      <p>诊断出其股权激励实施的成功概率；</p>
      <img src="@/assets/images/caseTwo.png" alt="" class="case-second">
      <p>然后帮助企业对其不足之处进行了完善；</p>
      <p>最后帮助Y公司制定了股权激励方案及股权激励相关制度和文件，并协助其进行实施落地。</p>
    </div>
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
  .case-second {
    width: 60%;
    margin: 1rem auto;
    display: block;
  }
@media screen and (max-width: 560px) {
  .case-second {
    width: 80%;
  }
}
@media screen and (max-width: 480px) {
  .case-second {
    width: 100%;
  }
}
</style>


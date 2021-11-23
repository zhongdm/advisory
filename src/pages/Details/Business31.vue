<template>
  <div>
    <div class="detail-wrapper wrapper">
      <picture>
        <source class="mobile-img" srcset="@/assets/images/business3@2x.png" media="(max-width: 768px)">
        <source class="mobile-img" srcset="@/assets/images/bs-web3.jpg" media="(min-width: 769px)">
        <img class="mobile-img" srcset="@/assets/images/bs-web3.jpg" alt="pic">
      </picture>
      <h3 class="detail-title">组织赋能</h3>
      <div class="content-container">
        <h4>组织赋能，通过线上、线下、陪伴式、督导式的赋能</h4>
        <p>
          首先，对匹配战略执行的组织能力进行科学“界定”，借助“人才盘点”识别出来的高潜人才（A类人才），运用“教练技术”有效赋能，针对公司《人才战略规划》，分步实施人才梯队内外部组织赋能的行动计划，提升组织的战略执行能力，有效支撑组织战略目标的达成。</p>
      </div>
      <div class="content-container">
        <h4>关于“教练技术”项目的简介</h4>
        <p>
          “人”的问题是决定企业生存和发展的根本性问题，实施“组织赋能”项目，运用“教练技术”帮助客户系统解决人才的招聘、选拔、使用、培育、留存和辞退等六大问题，为企业可持续发展担负人才赋能的重责，有力支撑战略实施及战略目标的达成。</p>
        <img src="@/assets/images/newfix/jiaolianfuneng1.png" alt="" class="block-img">
      </div>
      <div class="content-container">
        <img src="@/assets/images/newfix/jiaolianfuneng2.png" alt="" class="block-img">
      </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
    <pages :currentIndex="31"></pages>
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

<template>
  <div>
    <div class="detail-wrapper wrapper">
      <picture>
        <source class="mobile-img" srcset="@/assets/images/case3-m.png" media="(max-width: 576px)">
        <source class="mobile-img" srcset="@/assets/images/case3-web.png" media="(min-width: 577px)">
        <img class="mobile-img" srcset="@/assets/images/case3-web.png" alt="pic">
      </picture>
      <!-- <img class="mobile-img" src="@/assets/images/business1@2x.png" alt=""> -->
      <h3 class="detail-title">某生产制造型企业人才盘点项目的整体思路</h3>
      <div class="content-container">
        <h4>一、</h4>
        <img src="@/assets/images/case3-1.png" alt="" class="case-second">
      </div>
      <div class="content-container">
        <h4>二、</h4>
        <p>本次项目的胜任力素质建模采取N+X的模式，从过往的优秀行为、外部标杆企业的做法、岗位的关键角色要求、未来的发展战略要求多个角度进行模型要素的输入。</p>
        <img src="@/assets/images/case3-2.png" alt="" class="case-second">
      </div>
      <div class="content-container">
        <h4>三、构建“N+X”胜任力素质模型</h4>
        <p>N代表该层级通用素质指标，X代表不同序列的个性素质指标</p>
        <img src="@/assets/images/case3-3.png" alt="" class="case-second">
      </div>
      <div class="content-container">
        <h4>四、</h4>
        <img src="@/assets/images/case3-4.png" alt="" class="case-second">
      </div>
      <div class="content-container">
        <h4>五、</h4>
        <p>线上测评工具：标准心理测验—DISC性格测验</p>
        <img src="@/assets/images/case3-5.png" alt="" class="case-second">
      </div>
      <div class="content-container">
        <h4>六、</h4>
        <p>线下测评工具：FBEI访谈现场施测流程（辅助个人成就记录表）</p>
        <img src="@/assets/images/case3-6.png" alt="" class="case-second">
      </div>
      <div class="content-container">
        <h4>七、个体综合报告</h4>
        <img src="@/assets/images/case3-7.png" alt="" class="case-second">
      </div>
      <div class="content-container">
        <h4>八、</h4>
        <img src="@/assets/images/case3-8.png" alt="" class="case-second">
      </div>
      <div class="content-container">
        <h4>九、人才九宫格报告为人才的分类管理提供关键的支撑</h4>
        <p>人才九宫格是指以人才能力和业绩为坐标，将人才分布到九个区域中，从而发现业绩好、潜力佳的领军人才。每个类型的管理者都有相应的发展计划。</p>
        <img src="@/assets/images/case3-9.png" alt="" class="case-second">
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

<style lang="stylus" scoped>
.spirit-img
  span
    background url('../../assets/images/caseOne.png') no-repeat
    display block
    // background-position 0 0
    background-size cover
    width 200px
    height 190px
    margin auto

    &.first-img
      background-position 0 0
      height 170px

    &.second-img
      background-position 0 -170px

    &.third-img
      background-position 0 -365px

    // height 170px

    &.forth-img
      background-position 0 -560px
      height 170px

    &.fifth-img
      background-position 0 -725px
      height 110px
</style>



<template>
<div class="reset-padding">
  <div class="about-container">
    <section>
      <h3>企业诊断</h3>
      <article class="text-indent">
        企业诊断，是由具有丰富经营管理理论知识和实践经验的闻动顾问专家，与企业创始人、CEO等有关管理人员密切配合，应用科学的诊断方法（工具），基于企业事实和真实的现状，发现企业经营战略和管理方式上存在的问题，并对问题深入研究，分析产生问题背后的原因，提出改进方案（建议）的整个过程。
      </article>
      <article class="text-indent">
        企业诊断输出的项目成果是：《企业诊断报告》，在诊断报告中，闻动顾问不仅阐述企业现状，提出存在问题，还分析问题背后产生的原因，提出解决问题的方向和策略，明确闻动顾问对解决问题的观点和建议，供客户决策参考。
      </article>
      <div>
      <img class="flex-img" src="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/qiyezhenduan.png" alt="">
      </div>
    </section>
    <section>
      <h3>人才工坊</h3>
      <article class="text-indent">
        人才工坊是人才工作坊的简称，是闻动顾问为大多数企业定制的人才专题教练课程。人才工坊以企业人力资源管理专业为主题，从招人、选人、用人、育人、留人、辞人六个维度，深度解析人才管理的问题和陷阱，并选择现场真实的案例加以解构，让案例的主人真实再现人才管理的困惑，并一步一步剖析人才管理背后深层次的问题，通过两天一夜的特训，不仅当事人，所有参与人才工坊学习的高管都收获良多。
      </article>
      <img src="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/rencaigongfang.png" alt="">
    </section>
    <section>
      <h3>项目顾问</h3>
      <h4>A.商业战略</h4>
      <article class="text-indent">
        商业战略顾问项目是以商业逻辑闭环为目标，从定位、目标和路径三个方面切入，重新梳理客户的商业逻辑，并优化或重建商业逻辑。
      </article>
      <h4>B.人才管理</h4>
      <article class="text-indent">
        人才管理项目首先从“人才盘点”开始，通过人才盘点，识别出高潜人才及关键岗位人才匹配现状，为人才发展寻找培养人才的依据和需求。根据商业战略的需求，重建人才战略规划，构建或完善人才管理的各个系统。
      </article>
      <h4>C.能力模型</h4>
      <article class="text-indent">
        能力模型项目是基于有了清晰的商业战略和人才战略之后，重新制定实现商业战略目标所必须的核心竞争能力，设计核心团队必须具备的能力素质模型，明确战略目标达成所需的能力边界，并不断赋能团队，通过刻意练习强化团队具备设定的核心能力，支持商业战略目标的实现。
      </article>
      <img src="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/xiangmuguwen.png" alt="">
    </section>
  </div>
  <a-row type="flex">
    <a-col :xs="24" :md="0">
    <section class="contact-only">
      <a-row type="flex" justify="center">
        <a-col :span="24">
<!--          <h4>联系热线</h4>-->
          <p>专家微信: ml13813382808</p>
          <!-- <p>客服电话: <a href="tel:025-69904569">025-6990-4569</a></p> -->
          <p>专家直线: <a href="tel:195-3156-2808">195-3156-2808</a></p>
        </a-col>
        <!-- <a-col :span="8">
          <div class="img-container">
            <img src="@/assets/images/logo@2x.png" alt="">
          </div>
        </a-col> -->
      </a-row>
    </section>
    </a-col>
    </a-row>
    </div>
</template>

<style lang="stylus" scoped>
.service-container
  .service-list
    margin-top .5rem
    li
      width 32.5%
      display inline-block
      vertical-align text-top
      font-size .9rem
      &:nth-child(5),&:nth-child(4)
        width 49%
        section
          width 70%
      section
        width 70%
        text-align center
        margin 5px auto
        &:hover
          cursor pointer
        .circle-img
          border-radius 50%
          width 3rem
          height 3rem
          display block
          margin auto
        h4
          text-align center
          margin-top .6rem

.contact-only
  background #000
  font-size .8rem
  color #fff
  padding 1rem 1rem
  margin-left -1rem
  margin-right -1rem
  h4
    color #fff
    // margin-left .5rem
  p
    text-indent 0
    // margin-left .5rem
    margin-bottom 2px
    a
      color #fff
  .img-container
    height 100%
    display flex
    justify-content center
    align-items center

.about-container > section
  margin-bottom 2rem
  h3
    margin-top 1rem
.service-item
  display inline-block
  text-align left
  p
    text-indent 0
.mission-list
  margin-bottom 1rem
  height 33%
  h4
    font-weight bold
@media screen and (max-width: 768px) {
  .service-container .service-list li {
    display block
    width 100% !important
  }
  .service-container .service-list li section {
    width 100% !important
  }
  .service-container .service-list li section .circle-img {
    display inline
  }
  .mission-list {
    height auto
  }
  .content-list {
    margin-top 1rem
  }
}

.text-indent
  text-indent 2em
  line-height 1.7rem

.mission-container
  p
    text-indent 0

.flex-img {
  display: block;
  margin: 0 auto;
  object-fit: none;
}

@media screen and (max-width: 576px) {
  .flex-img {
    width: 100%;
    object-fit: contain;
  }
}
</style>

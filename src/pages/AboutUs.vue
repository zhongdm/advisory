<template>
<div class="reset-padding">
  <div class="about-container">
    <section>
      <h3>公司简介</h3>
      <article class="text-indent">
        金色未来人力资源集团成立于2002年，是一家综合人力资源服务商。总部位于苏州，目前在南京等地设立了分公司，是苏州市人力资源行业第一家新三板挂牌上市企业（股票代码：836062）。
      </article>
      <article class="text-indent">
        集团专注在智能制造、汽车&新能源、化工和环保四大行业，已为上千家客户提供专业的人力资源解决方案。
      </article>
      <article class="text-indent">
        集团致力于打造人力资源服务体系，构建六大能力，包括：企业家私董会、管理咨询培训、中高端人才猎聘、蓝领技术人才外包、智能制造学院+产教融合、线上服务平台，形成独特的行业服务竞争优势。
      </article>
      </br>
      <article class="text-indent">
        闻动管理顾问（南京）有限公司（以下简称“闻动顾问”）是集团管理咨询培训板块的“资深合伙人”，具备“独立”开展管理咨询和培训业务的能力，承接集团对口业务。
      </article>
      <article class="text-indent">
        闻动顾问于2019年由在咨询和培训行业已经从业19年的资深顾问毛雷先生创立，由具备“专业背景”和“实操能力”双重资质的企业教练组成。
      </article>
      <article class="text-indent">
        闻动顾问以“解决人的问题，创造人的价值”为使命，聚焦在“战略引领”、“人才驱动”和“教练赋能”的底层逻辑上服务客户；为客户提供“专业的、贴身的、陪伴式的”人力资源管理问题解决方案，并以教练模式为客户方案落地实施提供全流程赋能服务。
      </article>
    </section>
    <!--<section class="service-container">
      <h3>服务内容</h3>
      <article class="text-indent">
        我们的客户分布在多个行业，顾问服务内容主要聚焦在企业增长项目、高管圆桌汇、发展战略、组织能力和企业文化五个方向。
      </article>
      <ul class="service-list">
        <li>
          <section @click="$router.push('business1')">
          <a-row type="flex">
            <a-col :xs="8" :sm="8" :md="24">
              <img src="@/assets/images/service_icon1.png" class="circle-img" alt="">
              <h4>增长战略顾问</h4>
            </a-col>
            <a-col :xs="16" :sm="16" :md="24">
              <div class="service-item">
                &lt;!&ndash; <h4>增长战略顾问</h4> &ndash;&gt;
                <p>帮助企业梳理商业模式和收入渠道，并同时降本增效从而实现盈利和增长。</p>
              </div>
             </a-col>
          </a-row>
          </section>
        </li>
        <li>
          <section @click="$router.push('business5')">
            <a-row type="flex">
              <a-col :xs="8" :sm="8"  :md="24">
            <img src="@/assets/images/service_icon2.png" class="circle-img" alt="">
            <h4>高管圆桌汇</h4>
          </a-col>
          <a-col :xs="16" :sm="16" :md="24">
          <div class="service-item">
             &lt;!&ndash; <h4>高管圆桌汇</h4> &ndash;&gt;
             <p>主要是发现、讨论组织存在的关键问题，对问题的认知和解决方案达成一致，并协同多部门最终落地解决问题。</p>
          </div>
          </a-col>
          </a-row>
          </section>
        </li>
        <li>
          <section @click="$router.push('business2')">
            <a-row type="flex">
              <a-col :xs="8" :sm="8" :md="24">
          <img src="@/assets/images/service_icon3.png" class="circle-img" alt="">
          <h4>发展战略</h4>
          </a-col>
            <a-col :xs="16" :sm="16" :md="24">
          <div class="service-item">
             <p>我们运用平衡计分卡（BSC）这个工具帮助客户清晰描述企业战略目标和实现目标的路径。</p>
          </div>
          </a-col>
          </a-row>
          </section>
        </li>
        <li>
          <section @click="$router.push('business4')">
            <a-row type="flex">
              <a-col :xs="8" :sm="8"  :md="24">
          <img src="@/assets/images/service_icon4.png" class="circle-img" alt="">
          <h4>组织能力</h4>
          </a-col>
            <a-col :xs="16" :sm="16" :md="24">
          <div class="service-item">

             <p>我们通过定制培训、人才盘点、岗位胜任度模型等工具提升组织匹配战略的能力。</p>
          </div>
          </a-col>
          </a-row>
          </section>
        </li>
        <li>
          <section @click="$router.push('business3')">
            <a-row type="flex">
              <a-col :xs="8" :sm="8"  :md="24">
          <img src="@/assets/images/service_icon5.png" class="circle-img" alt="">
          <h4>企业文化</h4>
          </a-col>
            <a-col :xs="16" :sm="16" :md="24">
          <div class="service-item">

             <p>我们帮助客户构建企业文化体系，宣贯企业文化内涵，并带领员工践行企业文化行动。</p>
          </div>
          </a-col>
          </a-row>
          </section>
        </li>
      </ul>
    </section>-->
<!--    <section class="who-container">
      <h3>我们是谁</h3>
      <article class="text-indent">
        闻动管理顾问公司是一家管理咨询顾问公司，专注于帮助企业解决在实现盈利和增长过程中遇到的问题，涉及发展战略、组织结构、组织能力、运营体系、人力资源管理体系等多方面专业领域。
      </article>
      <a-row type="flex" justify="space-between" :gutter="16">
        <a-col :xs="24" :sm="24" :md="8" :span="8">
          <img src="@/assets/images/service_who1.jpg" alt="">
        </a-col>
        &lt;!&ndash; <a-col :xs="24" :sm="24" :md="8"  :span="8">
          <img src="@/assets/images/service_who2.jpg" alt="">
        </a-col> &ndash;&gt;
        <a-col :xs="24" :sm="24"  :md="8" :span="8">
          <img src="@/assets/images/service_who3.jpg" alt="">
        </a-col>
      </a-row>
    </section>-->
    <section>
      <h3>我们为谁服务</h3>
      <article class="text-indent">
        我们的客户既包括了国有企业也包括上市公司和民营企业，主要分布于江浙沪一带。
      </article>
      <a-row type="flex" justify="space-between" :gutter="16">
        <a-col :xs="24" :sm="24"  :md="12" :span="12">
          <div class="objection-first object-item">
            <span>
              <em>40%</em>国有企业
            </span>
            <img src="@/assets/images/service_country.jpg" alt="">
            <p class="text-indent">
              我们服务的国企客户所在行业包括制造业、电信及石油天然气等。我们帮助国企实施战略、组织和人力资源管理的变革，并基于企业发展战略的需要，设计分子公司的管控体系，防范经营风险，完善人才战略体系，界定核心组织能力；通过“人才盘点”切入，“人才教练”赋能的方式，帮助客户在重要决策事项上达成高度认知一致，确保发展战略得到有效执行。
            </p>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12"  :span="12">
          <div class="objection-first object-item">
            <span>
              <em>60%</em>上市公司和民营企业
            </span>
            <img src="@/assets/images/service_self.jpg" alt="">
            <p class="text-indent">
              快速发展的上市公司和民营企业是我们服务的客户主体，行业涉及建筑业、制造业和服务业等，我们帮助上市公司和民营企业客户梳理并澄清组织未来三年的发展战略规划，设计组织一到三年的人才战略规划，优化或重构企业人才管理体系，基于客户发展战略规划，界定组织的核心能力，以“人才教练”的模式，赋能企业核心团队，全程陪伴客户完成企业战略的落地实施，直至组织战略目标的达成。
            </p>
          </div>
        </a-col>
      </a-row>
    </section>
    <!-- <hr/> -->
    <section class="mission-container">
      <a-row type="flex" justify="space-between" :gutter="16">
        <a-col :xs="24" :sm="24" :md="16" :span="16">
          <img src="@/assets/images/culture.jpg" alt="" class="culture-img">
        </a-col>
        <a-col :xs="24" :sm="24" :md="8" :span="8">
          <div class="content-list mission-list">
            <h4>使命</h4>
            <p>解决人的问题，创造人的价值</p>
          </div>
          <div class="mission-list">
            <h4>愿景</h4>
            <p>成为客户不可缺少的长期合作伙伴</p>
          </div>
          <div class="mission-list">
            <h4>价值观</h4>
            <p>客户价值、员工成长、结果导向</p>
          </div>
        </a-col>
      </a-row>
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

.object-item
  margin-top 1rem
  border-radius 10px
  border 1px solid #ddd
  border-top 10px solid rgb(0, 120, 214)
  span
    display block
    text-align center
    font-size 1.4rem
    margin-bottom 5px
    padding .8rem
    em
      font-size 2.1rem
      color rgb(0, 120, 214)
      margin-right 5px
  img
    display block
    margin auto
    margin-bottom 10px
    width 100%
    max-height 12rem
  p
    padding .8rem
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

.who-container
  img
    width 100%
    display block
    margin-top 1rem

.about-container > section
  margin-bottom 2rem
  h3
    margin-top 1rem

.culture-img
  width 100%
  display block

// .service-container
//   .service-list
//     li
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
  .service-container .service-list li .service-item {
    display inline-block
    text-align left
    p {
      text-indent 0
    }
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
</style>

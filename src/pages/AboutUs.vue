<template>
<div class="reset-padding">
  <div class="about-container">
    <section>
      <h3>公司简介</h3>
      <article class="text-indent">
        闻动顾问管理公司由有咨询行业从业二十年的资深顾问毛雷先生创立，顾问团队由公司CEO等企业经营管理实战经验背景和市场营销管理、人力资源管理、精益生产管理等实战专业背景的资深顾问构成。
      </article>
      <article class="text-indent">
        致力于帮助客户解决盈利和增长问题，追求和客户建立结果导向的长期顾问合作伙伴关系。
      </article>
    </section>
    <section class="service-container">
      <h3>服务内容</h3>
      <article class="text-indent">
        我们的客户分布在多个行业，顾问服务内容主要聚焦在企业增长项目、高管圆桌汇、发展战略、组织能力和企业文化五个方向。
      </article>
      <ul class="service-list">
        <li>
          <section>
          <a-row type="flex">
            <a-col :xs="8" :sm="8" :md="24">
              <img src="@/assets/images/service_icon1.png" class="circle-img" alt="">
              <h4>企业增长项目</h4>
            </a-col>
            <a-col :xs="16" :sm="16" :md="24">
              <div class="service-item">
                <!-- <h4>企业增长项目</h4> -->
                <p>帮助企业梳理商业模式和收入渠道，并同时降本增效从而实现盈利和增长。</p>
              </div>
             </a-col>
          </a-row>
          </section>
        </li>
        <li>
          <section>
            <a-row type="flex">
              <a-col :xs="8" :sm="8"  :md="24">
            <img src="@/assets/images/service_icon2.png" class="circle-img" alt="">
            <h4>高管圆桌汇</h4>
          </a-col>
          <a-col :xs="16" :sm="16" :md="24">
          <div class="service-item">
             <!-- <h4>高管圆桌汇</h4> -->
             <p>主要是发现、讨论组织存在的关键问题，对问题的认知和解决方案达成一致，并协同多部门最终落地解决问题。</p>
          </div>
          </a-col>
          </a-row>
          </section>
        </li>
        <li>
          <section>
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
          <section>
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
          <section>
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
    </section>
    <section class="who-container">
      <h3>我们是谁</h3>
      <article class="text-indent">
        闻动管理顾问公司是一家管理咨询顾问公司，目前有上海和南京两家子公司，专注于帮助企业解决在实现盈利和增长过程中遇到的问题，涉及发展战略、组织结构涉及、组织能力、运营体系、人力资源管理体系等多方面专业领域。
      </article>
      <a-row type="flex" justify="space-between" :gutter="16">
        <a-col :xs="24" :sm="24" :md="8" :span="8">
          <img src="@/assets/images/service_who1.jpg" alt="">
        </a-col>
        <a-col :xs="24" :sm="24" :md="8"  :span="8">
          <img src="@/assets/images/service_who2.jpg" alt="">
        </a-col>
        <a-col :xs="24" :sm="24"  :md="8" :span="8">
          <img src="@/assets/images/service_who3.jpg" alt="">
        </a-col>
      </a-row>
    </section>
    <section>
      <h3>我们为谁服务</h3>
      <article>
        我们的客户既包括了国有企业也包括私营企业，主要分布于江浙沪一带。
      </article>
      <a-row type="flex" justify="space-between" :gutter="16">
        <a-col :xs="24" :sm="24"  :md="12" :span="12">
          <div class="objection-first object-item">
            <span>
              <em>40%</em>国有企业
            </span>
            <img src="@/assets/images/service_country.jpg" alt="">
            <p class="text-indent">
              我们服务的国企行业包括制造业、电信及是有天然气等。我们帮助他们完成对子公司的管控，组织结构及管理流程的变革以适应发展战略的需要。
            </p>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12"  :span="12">
          <div class="objection-first object-item">
            <span>
              <em>60%</em>国有企业
            </span>
            <img src="@/assets/images/service_self.jpg" alt="">
            <p class="text-indent">
              我们服务的国企行业包括制造业、电信及是有天然气等。我们帮助他们完成对子公司的管控，组织结构及管理流程的变革以适应发展战略的需要。
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
          <div class="content-list">
            <h4>我们的使命</h4>
            <p>帮助客户实现盈利和增长</p>
          </div>
          <div>
            <h4>我们的愿景</h4>
            <p>成为客户不可缺少的长期合作伙伴</p>
          </div>
          <div>
            <h4>我们的价值观</h4>
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
        <a-col :span="16">
          <h4>联系热线</h4>
          <p>客服电话：025-68029573</p>
          <p>专家直线：138-133-82808</p>
        </a-col>
        <a-col :span="8">
          <div class="img-container">
            <img src="@/assets/images/logo@2x.png" alt="">
          </div>
        </a-col>
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
}

@media screen and (max-width: 768px) {
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

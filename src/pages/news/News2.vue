<template>
  <div>
    <h3 class="center-title">南京饰家美软装公司增长主题培训活动</h3>
    <article>
      <div class="special-title">
        <!-- <span class="counter">01</span> -->
        <span class="title">活动纪实<i></i></span>
      </div>
      <p>
        7月19号下午，闻动顾问在南京金陵国际家居四楼城市之窗·融阁举办了2019年下半年的首场<em class="red-strong">会员企业增长研习社活动</em>。参与企业有<em class="red-strong">南京以国酒业、南京部落装饰、南京饰家美软装</em>等10余家公司的高层领导。
      </p>
      <!-- <img class="block-img" src="@/assets/images/news2-icon.png" alt=""> -->
      <div>
        <p>
          活动开始，闻动顾问的毛雷先生简单介绍了公司的使命、愿景和价值观，顾问团队的服务逻辑和实践方法
        </p>
        <p>
          毛雷先生从客户增长和利润增长两方面做了经验分享。通过“自行车”的故事，解读了客户增长逻辑的三大法则，通过“驾校”的故事，理清了客户增长的四步流程及其“1+5”模型。
        </p>
        <p>
          从而得出，客户增长的前提是找到与市场匹配的产品，它一定具备不可或缺的“啊哈时刻”。
        </p>
        <div class="img-container">
          <img src="@/assets/images/news2-1.jpeg" alt="">
          <span class="img-title">闻动毛雷在分享</span>
        </div>
        <div>
          <p>
            接下来，他剖析了利润增长的逻辑，突破点就是提升收入，降低支出。分享的第三个案例是亚马逊的增长飞轮，讲解了亚马逊Prime会员计划是如何给其带来持续增长的。
          </p>
        </div>
        <div class="img-container">
          <img src="@/assets/images/news2-2.jpeg" alt="">
          <span class="img-title">会员企业认真听讲</span>
        </div>
        <p>
          宾互动时间，在场嘉宾逐个做了自我介绍，并阐述了他们在经营中遇到的痛点及难点，其余嘉宾则发表了自己的看法和建议，现场讨论氛围很活跃。
        </p>
        <div class="img-container">
          <img src="@/assets/images/news2-3.jpeg" alt="">
          <span class="img-title">嘉宾互动时间</span>
        </div>
      </div>
    </article>
    <article>
      <div class="special-title">
        <!-- <span class="counter">01</span> -->
        <span class="title">嘉宾分享<i></i></span>
      </div>
      <div class="case-share">
        <h4 class="case-share-title">一家别墅智能家居的曾总</h4>
        <p>
          市场不好的时候，还是要坚持跑市场，去挖掘商机、建立客户关系网。简单的事情要重复做，要坚持做，做到极致就会有收获了。
        </p>
      </div>
      <fieldset>
        <legend>总结</legend>
        <div>
          <p>
            通过本次活动，参与企业纷纷表示从中受益匪浅，将自家公司存在的问题拿到台面上，通过群策群智，会听到多角度的看法，这也正是闻动一直强调的为客户解决难题的价值体现。
          </p>
        </div>
      </fieldset>
    </article>
  </div>
</template>

<style lang="stylus" scoped>
.special-title
  position relative
  height 2rem
  text-align center
  margin 2rem auto
  .title
    position relative
    display inline-block
    // margin 0 auto
    text-align center
    &:before
      content ''
      position absolute
      left -34px
      // top 6px
      width 24px
      height 24px
      border-radius 50%
      background-image -webkit-linear-gradient(top, #3de0ad, #d0f2e9)
    i
      position relative
      width 24px
      height 24px
      // display inline-block
      &:before
        content ''
        position absolute
        right -30px
        // top 6px
        width 24px
        height 24px
        border-radius 50%
        background-image -webkit-linear-gradient(left, #3ed4e9, #89edf6)
      &:after
        content ''
        position absolute
        right -35px
        bottom -6px
        width 16px
        height 16px
        border-radius 50%
        background rgba(91, 168, 238, 0.6)

fieldset
  font-size .9rem
  border 1px dashed #333
  margin-bottom 1rem
  padding 4px 1rem
  border-radius 4px
  legend
    display inline
    width auto
    padding 0 .5rem
    margin-left 1rem
    font-size 1.2rem
  div
    padding .5rem
    margin-bottom 1rem
    background-color rgb(239, 247, 246)

.img-title
  display block
  margin 0 auto
  text-align center
  color #7F7F7F
  font-size .9rem
img
  margin .5rem auto
  max-width 500px
  width 100%
  display block
p
  line-height 2rem
.img-container
  margin-bottom 1rem
.red-strong
  font-weight bold
  font-style normal
  color rgb(192, 0, 0)
.block-img
  display block
  margin 4px auto
  width 70px
h3
  text-align center
  margin-bottom 1rem
  font-weight normal
  font-size 1.4rem

.case-share
  .case-share-title
    border-left 10px solid #add1d0
    border-top 1px solid #add1d0
    padding .8rem 10px 5px
    margin-bottom .5rem
  p
    margin-left 20px

.center-title
  text-align center
  margin 2rem auto
</style>


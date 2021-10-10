<template>
  <div>
    <h3>签约湖南省赢在演说家教育机构全国事业合伙人</h3>
    <div class="sub-title">
      <span>闻动顾问</span>
      <a>闻动顾问</a>
      <span>7月3日</span>
    </div>
    <section style="margin-top:1rem;">
      <article class="self-wrapper">
        <section>
          <p>
            闻动顾问创始人毛雷先生于2021年7月3日正式签约湖南省赢在演说家教育机构全国事业合伙人，同时荣获赢在演说领袖学院颁发的“演说影响力”大奖荣誉证书。
          </p>
        </section>
      </article>
      <article class="content-wrapper">
        <img src="@/assets/images/news7/1.jpg" alt="">
        <img src="@/assets/images/news7/2.jpg" alt="">
        <img src="@/assets/images/news7/3.jpg" alt="">
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: require('@/assets/images/news6/1.jpeg')
    }
  }
}
</script>

<style lang="stylus" scoped>
p
  text-indent 0
  margin-bottom 0
img
  display block
  margin 1rem auto
  max-width 556px
  width 100%

.self-wrapper
  margin-top 1rem
  margin-bottom 1rem
  background-image url('../../assets/images/news6/border-img.png')
  background-repeat no-repeat repeat
  background-size 100%
  background-position 0 0
  padding 2px
  section
    background-color #fff
    padding .8rem
    color rgb(78, 56, 56)
    font-size .9rem
    span
      text-align center
      display block
      margin-bottom 5px
      font-weight bold
    p
      margin-bottom 0
      line-height 1.7rem
.theme-container
  .main-title
    color rgb(190, 221, 220)
    font-weight bold
    text-align center
    display block
    margin-bottom 1rem
  .detail-addr
    font-weight bold
    .multi-line
      div
        display inline-block
        vertical-align top
      p
        margin-bottom 1rem

.topic-wrapper
  overflow hidden
  margin 2rem auto
  padding 6px 10px
  & > div
    position relative
    &:before
      position absolute
      content ''
      width 100%
      height 100%
      border 1px solid rgb(194, 185, 185)
      transform rotate(3deg)
    div
      text-align center
      border 1px solid rgb(119, 104, 104)
      padding 1rem 0
      label
        display block
        line-height 2rem
        margin-bottom 1rem
      p
        text-align left
        padding 1rem
        line-height 1.7rem
.content-wrapper
  border-bottom 1px solid rgb(119, 104, 104)
  margin-bottom 2rem
  padding-bottom 2rem
  // border-radius 4px
  &:last-child
    border-bottom none
  label
    background-color rgb(106, 94, 94)
    color #fff
    padding 8px
    font-size .9rem
    display inline-block
    margin-bottom 1rem
    border-radius 4px
  &.no-border
    border-bottom none
.line-icon
  border-bottom 2px solid rgb(106, 94, 94)
  position relative
  margin 30px 10px
  &:before
    content ''
    position absolute
    left -10px
    margin-top -5px
    width 10px
    height 10px
    border 2px solid rgb(106, 94, 94)
    transform rotate(45deg)
  &:after
    content ''
    position absolute
    right -10px
    margin-top -5px
    width 10px
    height 10px
    border 2px solid rgb(106, 94, 94)
    transform rotate(45deg)
  img
    position absolute
    left 50%
    width 50px
    top -38px
    margin-left -25px

.sub-title
  font-size .9rem
  color rgba(0,0,0,0.3)
  margin-bottom 2rem
  a
    color #576b95
    margin 0 10px

h3
  margin-top 2rem
  margin-bottom 0
</style>


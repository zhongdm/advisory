<template>
  <div class="list-container" v-if="newsList.length > 0">
    <div class="main-news list-item" v-for="(list, index) in newsList" :key="index"
      @click="clickCase(list)">
      <a-row type="flex">
        <a-col :span="24">
      <img :src="list.img" alt="" class="icon-img">
      </a-col>
      <a-col :span="24">
      <div class="main-news-detail">
        <h3>{{list.title}}</h3>
        <p>{{list.content}}</p>
      </div>
      </a-col>
      </a-row>
    </div>
    <!-- <div class="news-container">
      <a-row type="flex">
        <a-col :xs="24" :lg="12" :md="12" v-for="(item, index) in newsList.slice(1)" :key="index">
          <div class="news-item list-item"
          @click="clickCase(item)">
            <a-row type="flex">
            <a-col :span="10">
            <img :src="item.img" alt="">
            </a-col>
            <a-col :span="14">
            <div class="news-content">
              <h4>{{item.title}}</h4>
              <p>{{item.content}}</p>
            </div>
            </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: [{
        img: require('@/assets/images/case1-web.jpg'),
        title: '某大型现代化食品企业人才盘点项目',
        content: '需要对营销部门和制造中心两个核心部门的人才状况进行深入评估和分析，以确保当前的人才能够支撑企业未来发展战略的需求。',
        path: 'caseOne'
      },{
        img: require('@/assets/images/case2-web.jpg'),
        title: '某宠物用品公司股权激励项目',
        content: '希望运用股权激励的方式整合内外部合作资源，激发公司活力，从而提升公司业绩。',
        path: 'caseTwo'
      // },
      // {
      //   img: require('@/assets/images/business1@2x.png'),
      //   title: '某宠物用品公司股权激励项目',
      //   content: '希望运用股权激励的方式整合内外部合作资源，激发公司活力，从而提升公司业绩。'
      }]
    }
  },
  methods: {
    clickCase (item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-container
  margin-top 1rem
  .main-news
    .main-news-detail
      margin-top 8px
      text-align left
  .news-container
    font-size 1.2rem
    margin-bottom 1rem
    .news-item
      margin .8rem auto
      img
        width 100%
    .news-content
      display inline-block
      margin 0 10px
      vertical-align middle
      text-align left

h4
  font-size 1rem
  margin-top 5px    

p
  text-indent 0
  display -webkit-inline-box
  -webkit-box-orient vertical
  -webkit-line-clamp 2
  overflow hidden
  font-size .9rem
  color #737373
img
  width 100%
</style>

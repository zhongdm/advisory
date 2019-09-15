<template>
  <div class="list-container">
    <div class="main-news list-item" v-if="newsList.length > 0"
      @click="showMenu(newsList[0])">
      <a-row type="flex">
        <a-col :span="24">
          <img :src="newsList[0].img" alt="" class="icon-img">
          </a-col>
          <a-col :span="24">
          <div class="main-news-detail">
            <h3>{{newsList[0].title}}</h3>
            <p>{{newsList[0].content}}</p>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="news-container">
      <a-row type="flex" :gutter="16">
        <a-col :xs="24" :lg="6" :md="6" v-for="(item, index) in newsList.slice(1)" :key="index">
          <div class="news-item list-item" @click="showMenu(item)">
            <a-row type="flex">
            <a-col :xs="10" :lg="24" :md="24" :span="10">
              <div class="img-container">
              <img :src="item.img" alt="">
              </div>
            </a-col>
            <a-col :xs="14" :lg="24" :md="24" :span="14">
            <div class="news-content">
              <span>{{item.title}}</span>
              <p>{{item.content}}</p>
            </div>
            </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: [
        {
          title: '闻动顾问之江苏益和股权激励项目顺利启动！',
          img: require('@/assets/images/bs-web7.jpg'),
          content: '江苏益和股权激励项目，2019年7月25日在宿迁江山大酒店举行了项目启动会。',
          path: 'hotNews'
        },
        {
          title: '闻动增长研习社之南京天众增长主题研习活动圆满完成',
          img: require('@/assets/images/business1@2x.png'),
          path: 'news1'
        },
        {
          title: '7月[闻动]会员企业增长演习社活动纪实',
          img: require('@/assets/images/business1@2x.png'),
          path: 'news2'
        },
        {
          title: '如何实现客户增长',
          img: require('@/assets/images/news3.jpeg'),
          path: 'news3'
        },
        // {
        //   title: '如何实现客户增长',
        //   img: require('@/assets/images/business1@2x.png'),
        //   path: 'news4'
        // },
        {
          title: '闻动私董会走进苏企联',
          img: require('@/assets/images/news5/4.jpeg'),
          path: 'news5'
        },
        {
          title: '闻动第七期私董会圆满成功！',
          img: require('@/assets/images/news6/2.jpeg'),
          path: 'news6'
        }
      ]
    }
  },
  methods: {
    showMenu (item) {
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
    margin-top 1rem
    margin-bottom 1rem
    .news-item
      margin .8rem auto
      img
        width 100%
    .img-container
      height 7rem
      position relative
      overflow hidden
      img
        // clip: rect(0px 4rem 5rem 0px);
        position absolute
        left 0
        width 100%
    .news-content
      margin 10px 5px
      vertical-align middle
      text-align left
      span
        font-size .9rem
        display block

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

<template>
  <div class="list-container">
    <div class="main-news list-item" v-if="newsList.length > 0"
         @click="showMenu(newsList[0])">
      <a-row type="flex">
        <a-col :span="24">
          <div class="clip-img">
          <!-- <picture>
            <source class="web-clip-img" :srcset="newsList[0].img" media="(max-width: 768px)">
            <source class="mobile-img" :srcset="newsList[0].img" media="(min-width: 769px)">
            <img class="mobile-img" :srcset="newsList[0].img" alt="pic">
          </picture>
          </div> -->
          <img :src="newsList[0].img" alt="" class="icon-img">
          </div>
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
        // {
        //   title: '闻动顾问之江苏益和股权激励项目顺利启动！',
        //   img: require('@/assets/images/hotNew-1.jpeg'),
        //   content: '江苏益和股权激励项目，2019年7月25日在宿迁江山大酒店举行了项目启动会。',
        //   path: 'hotNews'
        // },
        {
          title: '达成2022年闻动顾问和湖南赢在演说家文化传播有限公司的战略合作',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/120904.png',
          content: '受湖南赢在演说家文化传播有限公司总经理刘定先生的邀请，闻动顾问创始人毛雷先生于2021年12月10日~12日前往贵公司考察、交流，双方愉快达成战略合作意向，将共同开启2022年闻动顾问在长沙的“企业诊断”、“人才工坊”和“项目顾问”等专项产品的战略合作。同时，闻动顾问也邀请湖南赢在演说家的成熟产品进军江苏市场，实现双方共赢。',
          path: 'news12'
        },
        {
          title: '实地考察河北上桥生物科技有限公司',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/120901.png',
          content: '2021年12月7~9号，闻动顾问创始人毛雷先生应河北上桥生物科技有限公司总经理郭江辉先生的邀请，前往该公司实地考察项目，和公司相关核心团队负责人沟通公司现状，了解明年发展战略和新业务河北金至诚生物科技有限公司的相关情况。',
          path: 'news11'
        },
        {
          title: '参观西安建工集团建筑装饰工程公司',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/%E5%9B%BE%E7%89%872.png',
          content: '应西安建工集团建筑装饰工程分公司总经理王健先生邀请，闻动管理顾问公司创始人、首席顾问毛雷先生于2021年11月22日实地参观访问了该公司，双方领导人进行了友好、亲切、愉快地交流，共同探讨了关于企业“战略引领、人才驱动和组织赋能”等相关话题。',
          path: 'news10'
        },
        {
          title: '出席西安《演讲口才与领导力提升》活动',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/%E5%9B%BE%E7%89%871.png',
          path: 'news9'
        },
        {
          title: '9月公开课 | 智能制造标杆游学 —人才选用育留教练训练营',
          img: require('@/assets/images/hotNew-11.jpg'),
          path: ''
        },
        {
          title: '人才教练线下客户现场辅导',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/2481635738105_.pic.jpg',
          path: 'news8'
        },
        {
          title: '签约湖南省赢在演说家教育机构全国事业合伙人',
          img: require('@/assets/images/news7/1.jpg'),
          path: 'news7'
        },
        {
          title: '南京天众汽车增长主题培训活动',
          img: require('@/assets/images/news1-3.jpeg'),
          path: 'news1'
        },
        // {
        //   title: '南京饰家美软装公司增长主题培训活动',
        //   img: require('@/assets/images/news2-1.jpeg'),
        //   path: 'news2'
        // },
        // {
        //   title: '如何实现客户增长',
        //   img: require('@/assets/images/news3.jpeg'),
        //   path: 'news3'
        // },
        // {
        //   title: '如何实现客户增长',
        //   img: require('@/assets/images/business1@2x.png'),
        //   path: 'news4'
        // },
        {
          title: '江苏苏企联邀请闻动顾问给会员企业做增长主题私董会活动',
          img: require('@/assets/images/news5/4.jpeg'),
          path: 'news5'
        },
        {
          title: '第七期闻动私董会关于“增长策略”主题活动顺利落下帷幕',
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
      margin auto
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
        height 100%
    .news-content
      margin 10px 5px
      vertical-align middle
      text-align left
      margin-left 15px
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


@media screen and (min-width: 769px) {
  .clip-img {
    position relative
    overflow hidden
    max-height 15rem
    height 15rem
    img {
      position absolute
      left 0
      width 100%
      top -10rem
    }
  }
}
</style>

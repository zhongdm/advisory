<template>
  <div>
    <div class="wrapper">
    <div class="menu-container">

    </div>
    <div class="home-carousel">
      <a-carousel autoplay arrows dotsClass="slick-dots slick-thumb">
        <div
          slot="prevArrow" slot-scope="props"
          class="custom-slick-arrow"
          style="left: 10px;zIndex: 1"
        >
          <a-icon type="left-circle" />
        </div>
        <div
          slot="nextArrow" slot-scope="props"
          class="custom-slick-arrow"
          style="right: 10px"
        >
          <a-icon type="right-circle" />
        </div>
        <div>
          <img src="https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/2731635817947_.pic_hd.jpg" alt="">
        </div>
        <div>
          <img src="@/assets/images/ca2.jpeg" alt="">
        </div>
      </a-carousel>
    </div>
    <div class="home-sub-menu container">
      <a-row type="flex" justify="space-around">
        <a-col :xs="3" :lg="3" v-for="(item, index) in subMenuList" :key="index">
          <div class="list-item bs-nav" @click="subMenuClick(item)">
            <img :src="item.img" alt="" class="">
            <span>{{item.title}}</span>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="seperator home-sub-menu"></div>
    <div class="business-container" id="business">
      <h3>
        <img src="@/assets/images/icon-bs.png" alt="" class="icon-img">顾问内容</h3>
      <div>
        <a-row type="flex" justify="start" :gutter="16">
          <a-col :xs="12" :lg="12" v-for="(item, index) in businessList" :key="index">
            <div class="list-item" @click="clickBusiness(item, index*10 + 11)">
              <img :src="item.img" alt="">
              <span>{{item.title}}</span>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="client-container" id="client">
      <h3><img src="@/assets/images/client@2x.png" alt="" class="icon-img">闻动客户</h3>
      <div>
        <a-row type="flex" justify="start" :gutter="16">
          <a-col :xs="12" :md="6" :lg="4" v-for="(item, index) in clientList" :key="index">
            <div class="list-item client-item">
              <img :src="item.img" alt="" :title="item.name" class="mini-img">
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="seperator"></div>
    <div class="case-container container" id="case">
      <h3><img src="@/assets/images/icon-case@2x.png" alt="" class="icon-img">顾问案例
      <a href="javascript:void(0)" @click="$router.push('caseList')" class="more-link" style="float:right;">更多>></a></h3>
      <div class="case-wrapper">
        <div class="case-info">
          <div
            class="case-item link-page"
            v-for="(item, index) in caseList"
            :key="index"
            @click="caseClick(item)">
            <img :src="item.img" alt="">
            <div class="case-content">
              <p>{{item.title}}</p>
              <span>{{item.content}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="seperator"></div>
    <div class="library-container container" style="display:none;">
      <h3><img src="@/assets/images/icon-zk@2x.png" alt="" class="icon-img">闻动智库</h3>
      <div class="case-wrapper">
        <div class="case-info" :style="{width: libraryWidth}">
          <div
            class="library-item list-item"
            v-for="(item, index) in personList"
            :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
            <span>{{item.professionalTitle}}</span>
          </div>
        </div>
      </div>
      <!-- <div class="case-info">
      <a-row :gutter="32">
        <a-col :xs="8" :lg="8" v-for="(item, index) in personList" :key="index">
          <div
            class="library-item list-item">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
            <span>{{item.professionalTitle}}</span>
          </div>
        </a-col>
      </a-row>
      </div> -->
    </div>
    <div class="seperator"></div>
    <div class="news-container container" id="news">
      <h3><img src="@/assets/images/icon-news@2x.png" alt="" class="icon-img">闻动资讯
      <a href="javascript:void(0)" @click="$router.push('newsList')" class="more-link" style="float:right;">更多>></a></h3>
      <a-row type="flex" :gutter="16">
          <a-col :xs="24" :md="12">
             <div class="hot-news" v-if="newsList.length > 0" @click="showNews(newsList[0])">
              <img :src="newsList[0].img" alt="">
              <h4>{{newsList[0].title}}</h4>
              <p>{{newsList[0].abstract}}</p>
            </div>
<!--            <a href="javascript:" class="hot-news" target="_blank">
              <img :src="newsList[0].img" alt="">
              <h4>{{newsList[0].title}}</h4>
              <p>{{newsList[0].abstract}}</p>
            </a>-->
            <ul class="news-list">
              <li v-for="(item, index) in newsList.slice(1, 3)" :key="index"><a @click="showNews(item)">{{item.title}}</a><a-icon class="icon" type="right" /></li>
            </ul>
          </a-col>
          <a-col :xs="0" :md="12">
            <div class="hot-news" v-if="newsList.length > 0" @click="showNews(newsList[3])">
              <img :src="newsList[3].img" alt="">
              <h4>{{newsList[3].title}}</h4>
              <p>{{newsList[3].abstract}}</p>
            </div>
            <ul class="news-list">
              <li v-for="(item, index) in newsList.slice(4)" :key="index"><a @click="showNews(item)">{{item.title}}</a><a-icon class="icon" type="right" /></li>
            </ul>
          </a-col>
        </a-row>
      <!-- </div> -->
    </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
  </div>
</template>

<script>
import eventBus from '../common/eventBus.js'

export default {
  data () {
    return {
      subMenuList: [
        {
          img: require('@/assets/images/aboutUs@2x.png'),
          title: '关于闻动',
          path: 'about',
          key: 'about',
        },
        {
          img: require('@/assets/images/business@2x.png'),
          title: '顾问内容',
          key: 'business',
          path: 'business11'
        },
        {
          img: require('@/assets/images/business@2x.png'),
          title: '顾问方式',
          key: 'method',
          path: 'method'
        },
        {
          img: require('@/assets/images/classicCase@2x.png'),
          title: '顾问案例',
          path: 'caseList',
          key: 'case',
        },
        {
          img: require('@/assets/images/news@2x.png'),
          title: '闻动资讯',
          path: 'newsList',
          key: 'news',
        }
      ],
      businessList: [
        {
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/black-3509513_1920_gaitubao_335x250.jpg',
          title: '战略引领'
        },
        {
          img: require('@/assets/images/business1@2x.png'),
          title: '人才驱动'
        },
        {
          img: require('@/assets/images/business3@2x.png'),
          title: '组织赋能'
        },
        // {
        //   img: require('@/assets/images/business4@2x.png'),
        //   title: '组织能力顾问'
        // },
        // {
        //   img: require('@/assets/images/business5@2x.png'),
        //   title: '高管圆桌汇'
        // },
        {
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/office-1516329_1920_gaitubao_335x250.jpg',
          title: '闻动私董会'
        }
        // ,
        // {
        //   img: require('@/assets/images/business7@2x.png'),
        //   title: '闻动企业会员'
        // },
        // {
        //   img: require('@/assets/images/business8@2x.png'),
        //   title: '智慧城市与科技信息化'
        // }
      ],
      clientList: [
        {
          name: '绿地集团',
          img: require('@/assets/images/logo/green.jpg')
        },
        {
          name: '南汽集团',
          img: require('@/assets/images/logo/nanqi.jpg')
        },
        {
          name: '罗思韦尔电气/控股集团',
          img: require('@/assets/images/logo/lswe.jpg')
        },
        {
          name: '苏交科-燕宁工科集团',
          img: require('@/assets/images/logo/sujiaoke.jpg')
        },
        {
          name: '中国石化',
          img: require('@/assets/images/logo/zhongshihua.jpg')
        },
        {
          name: '中车集团',
          img: require('@/assets/images/logo/zhongche.jpg')
        },
        {
          name: '上海科瑞物业',
          img: require('@/assets/images/logo/kerui.jpg')
        },
        {
          name: '益和宠物',
          img: require('@/assets/images/logo/yihe.jpg')
        },
        {
          name: '新城股份',
          img: require('@/assets/images/logo/xincheng.jpg')
        },
        {
          name: '中国移动',
          img: require('@/assets/images/logo/yd.jpg')
        },
        {
          name: '中国兵器',
          img: require('@/assets/images/logo/bingqi.jpg')
        },
        {
          name: '苏州佳禾食品',
          img: require('@/assets/images/logo/suzhoujiahe.jpg')
        }
      ],
      caseList: [
        {
          path: 'caseThree',
          img: require('@/assets/images/case3-m.png'),
          webImg: require('@/assets/images/case3-web.png'),
          title: '某生产制造型企业人才盘点项目的整体思路',
          content: '该企业从人才盘点项目切入，上接公司发展战略需求，通过人才驱动机制的构建，明确了公司未来三年人才战略和人才梯队建设方略。下接内外部针对核心团队的组织赋能系统，从而有效提升组织核心能力，为战略落地提供有力支撑。'
        },
        {
          path: 'caseone',
          img: require('@/assets/images/case1-m.jpg'),
          webImg: require('@/assets/images/case1-web.jpg'),
          title: '某大型现代化食品企业人才盘点项目',
          content: '需要对营销部门和制造中心两个核心部门的人才状况进行深入评估和分析，以确保当前的人才能够支撑企业未来发展战略的需求。'
        }
      ],
      personList: [
        {
          img: require('@/assets/images/business1@2x.png'),
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: require('@/assets/images/business1@2x.png'),
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: require('@/assets/images/business1@2x.png'),
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: require('@/assets/images/business1@2x.png'),
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: require('@/assets/images/business1@2x.png'),
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: require('@/assets/images/business1@2x.png'),
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        }
      ],
      newsList: [
        {
          title: '参访深圳换商书院',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/4131640901574_.pic_1640912357877.pic.jpg',
          abstract: '2021年12月28日、29日，闻动管理顾问公司创始人毛雷先生应换商书院高圆圆总经理的邀请，参加书院第五界企业家交流活动，并和书院创始人徐丞功先生深入交流关于换商的新理念。',
          path: 'news13'
        },
        {
          title: '实地考察河北上桥生物科技有限公司',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/120901.png',
          abstract: '2021年12月7~9号，闻动顾问创始人毛雷先生应河北上桥生物科技有限公司总经理郭江辉先生的邀请，前往该公司实地考察项目，和公司相关核心团队负责人沟通公司现状，了解明年发展战略和新业务河北金至诚生物科技有限公司的相关情况。',
          path: 'news11'
        },
        {
          title: '出席西安《演讲口才与领导力提升》活动',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/%E5%9B%BE%E7%89%871.png',
          abstract: '闻动管理顾问公司创始人毛雷先生应邀于2021年11月20、21日，在陕西西安交通大学学术交流中心，出席水木名师主办的《演讲口才与领导力提升》专题模块线下大课。',
          path: 'news9'
        },
        // {
        //   title: '9月公开课 | 智能制造标杆游学 —人才选用育留教练训练营',
        //   img: require('@/assets/images/hotNew-11.jpg'),
        //   abstract: '金色未来人力资源集团咨询培训资深合伙人，闻动顾问创始人毛雷先生于2021年9月24、25日在苏州主训金色未来《9月公开课 | 智能制造标杆游学 —人才选用育留教练训练营》，取得圆满成功！'
        // },
        // {
        //   title: '人才教练线下客户现场辅导',
        //   img: require('@/assets/images/news6/2.jpeg'),
        //   path: 'news8'
        // },
        // {
        //   title: '南京饰家美软装公司增长主题培训活动',
        //   path: 'news2'
        // },
        // {
        //   title: '江苏苏企联邀请闻动顾问给会员企业做增长主题私董会活动',
        //   img: require('@/assets/images/news5/4.jpeg'),
        //   path: 'news5',
        //   abstract: '以“服务江苏企业、发展江苏企业、成就江苏企业”为使命，实现所有企业家成员的共建、共享、共赢。'
        // },
        //  {
        //   title: '如何实现客户增长',
        //   path: 'news3'
        // },
        {
          title: '达成2022年闻动顾问和湖南赢在演说家文化传播有限公司的战略合作',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/120904.png',
          path: 'news12',
          abstract: '受湖南赢在演说家文化传播有限公司总经理刘定先生的邀请，闻动顾问创始人毛雷先生于2021年12月10日~12日前往贵公司考察、交流，双方愉快达成战略合作意向，将共同开启2022年闻动顾问在长沙的“企业诊断”、“人才工坊”和“项目顾问”等专项产品的战略合作。同时，闻动顾问也邀请湖南赢在演说家的成熟产品进军江苏市场，实现双方共赢。'
        },
        {
          title: '参观西安建工集团建筑装饰工程公司',
          img: 'https://myserve.oss-cn-hangzhou.aliyuncs.com/wd/%E5%9B%BE%E7%89%872.png',
          path: 'news10',
          abstract: '应西安建工集团建筑装饰工程分公司总经理王健先生邀请，闻动管理顾问公司创始人、首席顾问毛雷先生于2021年11月22日实地参观访问了该公司，双方领导人进行了友好、亲切、愉快地交流，共同探讨了关于企业“战略引领、人才驱动和组织赋能”等相关话题。'
        },
        {
          title: '签约湖南省赢在演说家教育机构全国事业合伙人',
          img: require('@/assets/images/news7/1.jpg'),
          path: 'news7',
          abstract: '闻动顾问创始人毛雷先生于2021年7月3日正式签约湖南省赢在演说家教育机构全国事业合伙人，同时荣获赢在演说领袖学院颁发的“演说影响力”大奖荣誉证书。'
        },
        // {
        //   title: '第七期闻动私董会关于“增长策略”主题活动顺利落下帷幕',
        //   img: require('@/assets/images/news6/2.jpeg'),
        //   path: 'news6'
        // },
        // {
        //   title: '南京天众汽车增长主题培训活动',
        //   path: 'news1'
        // }
      ]
      // libraryWidth: 8 * this.personList.length + 'rem'
    }
  },
  computed: {
    libraryWidth () {
      return 8 * this.personList.length + 'rem'
    }
  },
  mounted () {
    document.body.scrollTop = 0
    location.hash = ''
  },
  methods: {
    clickBusiness (item, index) {
      this.$router.push('business' + index)
      eventBus.$emit('selectedMenu', 'business')
    },
    caseClick (item) {
      this.$router.push(item.path)
      eventBus.$emit('selectedMenu', 'case')
    },
    showNews (item) {
      // this.$router.push('hotNews')
      this.$router.push(item.path)
      eventBus.$emit('selectedMenu', 'news')
    },
    subMenuClick (item) {
      eventBus.$emit('selectedMenu', item.key)
      this.$router.push(item.path)
    }
  },
  components: {
    BottomMenu: () => import('../components/BottomMenu')
  }
}
</script>


<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 300px;
  line-height: 300px;
  background: #364d79;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .ant-carousel >>> .slick-slide {
    height: 200px;
    line-height: 200px;
  }
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.ant-carousel >>> .slick-slide img {
  width: 100%;
  height: 100%;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31,45,61,.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

</style>

<style lang="stylus" scoped>
.seperator
  width 100%
  height 10px
  background-color #ededed

.container
  margin 1rem auto

.client-container
  padding-bottom 1rem
  .client-item
    border 1px solid #dedede
    border-radius 4px

.link-page
  &:hover
    cursor pointer
    box-shadow: 4px 2px 8px rgba(187,184,184,0.2),
                  -4px 2px 8px rgba(187,184,184,0.2)
.list-item
  text-align center
  margin-top .5rem
  padding .5rem
  &:hover
    cursor pointer
    // border 1px solid #1890ff
    border-radius 4px
    box-shadow: 4px 2px 8px rgba(187,184,184,0.2),
                  -4px 2px 8px rgba(187,184,184,0.2)
  img
    // width 100%
    max-width 100%
    margin auto
    display block
    // width 6rem
  span
    margin-top .5rem
    display block

.bs-nav
  img
    width 3.5rem
  span
    font-size .8rem
.home-sub-menu
  // display none
  margin-top 20px

.case-wrapper
  width 100%
  overflow auto
  -webkit-overflow-scrolling touch
  .case-info
    // display flex
    padding .5rem
    padding-bottom 1rem
    padding-top 0
    .case-item
      // margin-right 1rem
      // display inline
      // width 100%
      margin-top 5px
      .case-content
        margin-left 8px
        p
          text-indent 0
          font-weight bold
          margin 2px 0 6px 0
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
        span
          font-size .9rem
          text-align left
          color #8f8f8f
          display -webkit-inline-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          overflow hidden
    .library-item
      margin-right 1rem
      // box-shadow: 4px 2px 8px rgba(0,0,0,0.2),
      //             -4px 2px 8px rgba(0,0,0,0.2)
      width 6rem
      display inline
      text-align center
      img
        height 6rem
      p
        font-weight bold
        margin 1rem 0 2px 0
      span
        font-size .8rem
        color #8f8f8f
.hot-news
  border-bottom 1px solid #eee
  // padding-bottom 1rem
  &:hover
    cursor pointer
    // border 1px solid #1890ff
    box-shadow: 4px 2px 8px rgba(187,184,184,0.2),
                  -4px 2px 8px rgba(187,184,184,0.2)
  img
    width 100%
    height 15rem
  h4
    margin 1rem 0 6px 5px
  p
    margin-left 5px
    text-indent 0
    font-size .9rem
    color #8f8f8f
    display -webkit-inline-box
    -webkit-box-orient vertical
    -webkit-line-clamp 2
    overflow hidden
.news-list
  list-style none
  li
    border-bottom 1px solid #eee
    position relative
    font-size 0
    color #ddd
    &:before
      content '■'
      color blue
      margin-right 5px
      position absolute
      left 0
      top 50%
      width 14px
      margin-top -.9rem
      font-size .9rem
    &:hover
      background-color #f8f8f8
    a
      color #000
      margin-left 20px
      padding 1rem 0
      display inline-block
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
      width calc(100% - 40px)
      font-size 1rem
    .icon
      font-size 1rem
      position absolute
      top 50%
      right 0
      width 20px
      margin-top -0.5rem
      font-size 1rem
.library-container
  .case-info
    display flex
.more-link
  color #8f8f8f
  font-size .9rem
  &:hover
    cursor pointer
    color #40a9ff
a:hover
  cursor pointer

.business-container
  margin-top 1rem

@media screen and (max-width: 576px) {
  .home-sub-menu {
    display block
  }
  .case-info {
    display: flex;
  }
  .case-info .case-item {
    margin-right 1rem
    display inline
    width 100%
  }
  .case-info .case-item img {
    width 16rem
  }
}
@media screen and (min-width: 577px) {
  .home-sub-menu {
    display: none;
  }
  .case-info .case-item {
    width: 50%;
    display: inline-block;
    padding: 10px;
  }
  .case-item img {
    width: 40%;
    display: inline-block;
    vertical-align: top;
    // height: 6rem;
  }
  .case-item .case-content {
    width: 55%;
    display: -webkit-inline-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .case-info {
    display: inline-block;
  }
}

.icon-img
  width 20px
  height 100%
  vertical-align sub
  margin-right 8px

.home-carousel
  margin-top 10px
  margin-bottom 10px
</style>


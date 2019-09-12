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
          <img src="static/assets/images/ca1.jpeg" alt="">
        </div>
        <div>
          <img src="static/assets/images/ca2.jpeg" alt="">
        </div>
      </a-carousel>
    </div>
    <div class="home-sub-menu container">
      <a-row type="flex" justify="space-around" :gutter="16">
        <a-col :xs="6" :lg="6 " v-for="(item, index) in subMenuList" :key="index">
          <div class="list-item">
            <img :src="item.img" alt="" class="" style="width:4rem;">
            <span>{{item.title}}</span>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="seperator home-sub-menu"></div>
    <div class="business-container" id="business">
      <h3>
        <img src="static/assets/images/icon-bs.png" alt="" class="icon-img">闻动业务</h3>
      <div>
        <a-row type="flex" justify="space-between" :gutter="16">
          <a-col :xs="12" :lg="6" v-for="(item, index) in businessList" :key="index">
            <div class="list-item" @click="clickBusiness(item, index + 1)">
              <img :src="item.img" alt="">
              <span>{{item.title}}</span>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="client-container" id="client">
      <h3><img src="static/assets/images/client@2x.png" alt="" class="icon-img">合作客户</h3>
      <div>
        <a-row type="flex" justify="left" :gutter="16">
          <a-col :xs="4" :lg="4" v-for="(item, index) in clientList" :key="index">
            <div class="list-item client-item">
              <img :src="item.img" alt="" :title="item.name" class="mini-img">
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="seperator"></div>
    <div class="case-container container" id="case">
      <h3><img src="static/assets/images/icon-case@2x.png" alt="" class="icon-img">经典案例
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
      <h3><img src="static/assets/images/icon-zk@2x.png" alt="" class="icon-img">闻动智库</h3>
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
      <h3><img src="static/assets/images/icon-news@2x.png" alt="" class="icon-img">新闻资讯
      <a href="javascript:void(0)" @click="$router.push('newsList')" class="more-link" style="float:right;">更多>></a></h3>
      
      <div class="hot-news" v-if="newsList.length > 0" @click="showNews(newsList[0])">
        <img src="static/assets/images/business1@3x.png" alt="">
        <h4>{{newsList[0].title}}</h4>
        <p>{{newsList[0].abstract}}</p>
      </div>
      <!-- <div class="news-list"> -->
        <ul class="news-list" v-for="(item, index) in newsList.slice(1)" :key="index">
          <li><a>{{item.title}}</a><a-icon class="icon" type="right" /></li>
        </ul>
      <!-- </div> -->
    </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      subMenuList: [
        {
          img: 'static/assets/images/business@2x.png',
          title: '闻动业务'
        },
        {
          img: 'static/assets/images/classicCase@2x.png',
          title: '经典案例'
        },
        {
          img: 'static/assets/images/news@2x.png',
          title: '新闻资讯'
        },
        {
          img: 'static/assets/images/aboutUs@2x.png',
          title: '关于我们'
        }
      ],
      businessList: [
        {
          img: 'static/assets/images/business1@2x.png',
          title: '盈利增长顾问'
        },
        {
          img: 'static/assets/images/business2@2x.png',
          title: '发展战略顾问'
        },
        {
          img: 'static/assets/images/business3@2x.png',
          title: '企业文化顾问'
        },
        {
          img: 'static/assets/images/business4@2x.png',
          title: '组织能力顾问'
        },
        {
          img: 'static/assets/images/business5@2x.png',
          title: '高管圆桌会'
        },
        {
          img: 'static/assets/images/business6@2x.png',
          title: '闻动私董会'
        },
        {
          img: 'static/assets/images/business7@2x.png',
          title: '闻动企业会员'
        },
        {
          img: 'static/assets/images/business8@2x.png',
          title: '智慧城市与科技信息化'
        }
      ],
      clientList: [
        {
          name: 'aa',
          img: 'static/assets/images/logo/green.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/nanqi.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/lswe.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/sujiaoke.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/zhongshihua.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/zhongche.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/kerui.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/yihe.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/xincheng.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/dx.jpg'
        },
        {
          name: 'aa',
          img: 'static/assets/images/logo/bingqi.jpg'
        }
      ],
      caseList: [
        {
          path: 'caseone',
          img: 'static/assets/images/business1@2x.png',
          title: '某大型现代化视频企业人才盘点项目',
          content: '需要对营销部门和制造中心两个核心部门的人才状况进行深入评估和分析，以确保当前的人才能够支撑企业未来发展战略的需求。'
        },
        {
          path: 'casetwo',
          img: 'static/assets/images/business1@2x.png',
          title: '某宠物用品公司股权激励项目',
          content: '希望运用股权激励的方式整合内外部合作资源，激发公司活力，从而提升公司业绩。'
        }
      ],
      personList: [
        {
          img: 'static/assets/images/business1@2x.png',
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: 'static/assets/images/business1@2x.png',
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: 'static/assets/images/business1@2x.png',
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: 'static/assets/images/business1@2x.png',
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: 'static/assets/images/business1@2x.png',
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        },
        {
          img: 'static/assets/images/business1@2x.png',
          name: 'Jack',
          professionalTitle: '专家智慧团队'
        }
      ],
      newsList: [
        {
          title: '闻动顾问之江苏益和股权激励项目顺利启动！',
          img: '',
          abstract: '江苏益和股权激励项目，2019年7月25日在宿迁江山大酒店举行了项目启动会。'
        },
        {
          title: '闻动增长研习社之南京天众增长主题研习活动圆满完成'
        },
        {
          title: '7月[闻动]会员企业增长演习社活动纪实'
        },
         {
          title: '如何实现客户增长'
        }
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
    },
    caseClick (item) {
      this.$router.push(item.path)
    },
    showNews (item) {
      this.$router.push('hotNews')
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
          margin 1rem 0 6px 0
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
        span
          font-size .8rem
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
  padding-bottom 1rem
  &:hover
    cursor pointer
    // border 1px solid #1890ff
    box-shadow: 4px 2px 8px rgba(187,184,184,0.2),
                  -4px 2px 8px rgba(187,184,184,0.2)
  img
    width 100%
  h4
    margin 1rem 0 6px 1rem
  p
    margin-left 1rem
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
    &:before
      content '■'
      color blue
      margin-right 5px
      position absolute
      left 0
      top 50%
      width 20px
      margin-top -.9rem
      font-size 1rem
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

@media screen and (max-width: 576px) {
  .home-sub-menu img {
    width 80%
  }
}

@media screen and (max-width: 768px) {
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
}
@media screen and (min-width: 769px) {
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
    height: 6rem;
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


<template>
  <div class="wrapper-container">
    <div class="nav-bar mobile-bar">
      <img src="static/assets/images/logo@2x.png" class="icon-img" alt="">
      <span class="title">闻动顾问管理有限公司</span>
      <img src="static/assets/images/menu@2x.png" class="menu-list" alt="" @click="showMenu">
      <a-menu
        class="menu-container"
        v-show="menuVisible"
        @click="handleClick"
        v-model="selectedKey"
        style="width: 256px"
        :defaultSelectedKeys="selectedKey"
        mode="inline"
      >
        <a-menu-item :key="item.key" v-for="item in menuList" @click="menuItem(item)">
          <!-- <a :href="'/#'+item.key"> -->
          <a-icon :type="item.type" />
          <span>{{item.name}}</span>
          <!-- </a> -->
        </a-menu-item>
      </a-menu>
    </div>
    <div class="web-bar">
      <div class="web-header web-wrapper">
        <img src="static/assets/images/logo@2x.png" class="icon-img" alt="">
        <div class="web-title">
          <h2 style="margin: 0">闻动顾问管理有限公司</h2>
          <!-- <span>WENDONG ENTERPRISE MANAGEMENT CONSULTANTS LTD.</span> -->
        </div>
      </div>
      
      <div class="menu-sider">
        <a-menu
        mode="horizontal"
        v-model="selectedKey"
        class="menu-container web-wrapper"
        @click="handleClick"
        style="margin-bottom: 10px;"
        :defaultSelectedKeys="selectedKey"
      >
        <a-menu-item :key="item.key" v-for="item in menuList" @click="menuItem(item)">
          <!-- <a :href="'/#' +item.key"> -->
          <a-icon :type="item.type" />
          <!-- <img :src="item.img" alt=""> -->
          <span>{{item.name}}</span>
          <!-- </a> -->
        </a-menu-item>
      </a-menu>
      <!-- <a-anchor class="menu-container web-wrapper" @click="menuItem">
        <a-anchor-link
          v-for="item in menuList"
          :key="item.key"
          :href="'/#' + item.key">
          <template slot="title">
            <a-icon :type="item.type" />
            <span>{{item.name}}</span>
          </template>
          </a-anchor-link>
      </a-anchor> -->
      </div>
    </div>
    <div class="web-wrapper main-container">
    <router-view></router-view>
    </div>
    <div class="footer">
      <div class="web-wrapper footer-wrapper">
      <section class="contact-tel">
        <h4>联系电话</h4>
        <div>
          <span>客服电话: 025-68029573</span>
          <span>专家直线: 138-133-82808</span>
        </div>
      </section>
      <section class="other-footer">
        <div class="footer-item">
          <h4>闻动业务</h4>
          <ul>
            <li><a href="javascript:void(0);">盈利增长顾问</a></li>
            <li><a href="javascript:void(0);">发展战略顾问</a></li>
            <li><a href="javascript:void(0);">组织能力顾问</a></li>
            <li><a href="javascript:void(0);">企业文化顾问</a></li>
            <li><a href="javascript:void(0);">高管圆桌会</a></li>
            <li><a href="javascript:void(0);">闻动私董会</a></li>
            <li><a href="javascript:void(0);">闻动企业会员</a></li>
            <li><a href="javascript:void(0);">智慧城市与科技信息化</a></li>
          </ul>
        </div>
        <div class="footer-item">
          <h4>案例展示</h4>
          <ul>
            <li><a href="javascript:void(0);">合作客户</a></li>
            <li><a href="javascript:void(0);">经典案例</a></li>
          </ul>
        </div>
        <div class="footer-item">
          <h4>资讯中心</h4>
          <ul>
            <li><a href="javascript:void(0);">新闻资讯</a></li>
            <li><a href="javascript:void(0);">闻动智库</a></li>
          </ul>
        </div>
        <div class="footer-item">
          <h4>关于我们</h4>
          <ul>
            <li><a href="javascript:void(0);">关于我们</a></li>
          </ul>
        </div>
      </section>
      <div class="copy-right">
        Copyright Wendong | All Rights Reserved | 苏ICP备19040864号
      </div>
      </div>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      selectedKey: ['home'],
      menuVisible: false
    }
  },
  computed: {
    menuList () {
      return [
        {
          key: 'about',
          name: '关于我们',
          type: 'contacts',
          path: 'about',
          img: 'static/assets/images/bs.png',
          selectedImg: 'static/assets/images/icon-case@2x.png'
        },
        {
          key: 'home',
          name: '首页',
          type: 'home',
          path: '/',
          img: 'static/assets/images/icon-home.png',
          selectedImg: 'static/assets/images/icon-home.png'
        },
        {
          key: 'business',
          name: '闻动业务',
          type: 'schedule',
          path: 'business1',
          img: 'static/assets/images/icon-bs.png',
          selectedImg: 'static/assets/images/icon-bs.png'
        },
        {
          key: 'case',
          name: '经典案例',
          type: 'appstore',
          path: 'caseList',
          img: 'static/assets/images/icon-case@2x.png',
          selectedImg: 'static/assets/images/icon-case@2x.png',
        },
        {
          key: 'news',
          name: '新闻资讯',
          type: 'bars',
          path: 'newsList',
          img: 'static/assets/images/logo/.png',
          selectedImg: 'static/assets/images/icon-news@2x.png'
        },
        
        // {
        //   key: 'emp',
        //   name: '招贤纳士',
        //   type: 'user',
        //   img: 'static/assets/images/bs.png'
        // },
      ]
    }
  },
  components: {
    BottomMenu: () => import('@/components/BottomMenu')
  },
  mounted () {
    console.log(location.href)
    // this.scrollHandler()
    // window.pageYOffset = 0
    // document.documentElement.scrollTop = 0
    // document.body.scrollTop = 0
    window.addEventListener('scroll', this.scrollHandler)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHander)
  },
  methods: {
    scrollHandler () {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      if (width > 768) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // const ele = Array.from(document.querySelectorAll('.menu-container')).filter(item => item.parentNode.className.indexOf('menu-sider') !== -1 )[0]
      const elementTop = document.querySelector('.menu-sider').offsetTop
      if (scrollTop > elementTop) {
        let className = document.querySelector('.menu-sider').className
        if (className.indexOf('menu-fixed') === -1) {
          document.querySelector('.menu-sider').className += ' menu-fixed'
        }
      } else {
        let ele = Array.from(document.querySelectorAll('.menu-container')).filter(item => item.parentNode.className.indexOf('menu-fixed') !== -1)
        if (ele.length > 0) {
          ele = ele[0].parentNode
          ele.className = ele.className.replace(/(\s)*menu-fixed/g, '')
        }
      }
      }
    },
    handleClick () {
      this.menuVisible = false
    },
    showMenu () {
      this.menuVisible = !this.menuVisible
    },
    menuItem (item) {
      // if (link.href.indexOf('about') !== -1) {
      //   this.$router.push(link.href.replace(/\/#/g, ''))
      // } else {
      //   console.log(location)
      // }
      // // .scrollIntoView()
      // let anchor = document.querySelector('#' + item.key)
      // let menuHeight = Array.from(document.querySelectorAll('.menu-container')).filter(item => item.offsetHeight > 0)[0].offsetHeight
      // let total = anchor.offsetTop - menuHeight - 1
      // const distance = document.querySelector('.wrapper-container').offsetTop
      // const step = total / 50
      // console.log(total)
      // if (total > distance) {
      //   this.smoothDown()
      // }
      // // Chrome
      // document.body.scrollTop = total
      // // Firefox
      // document.documentElement.scrollTop = total
      // // Safari
      // window.pageYOffset = total
      this.$router.push(item.path)
      this.selectedKey = [item.key]
    },
    smoothDown () {
      if (distance < total) {
        distance += step
        _this.scrollTop = distance;
        setTimeout(smoothDown, 10);
      } else {
        _this.scrollTop = total
      }
    }
  }
}
</script>

<style>
.el-header {
  padding: 0
}
.ant-menu-horizontal {
  border-bottom: none;
}
.ant-menu-horizontal > .ant-menu-item > a {
  color: #fff;
}
.ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-item-active {
  background: rgb(1, 62, 107);
  color: #fff;
}
.ant-menu-horizontal > .ant-menu-item-selected {
  background: rgb(1, 62, 107);
  color: #fff;
}
.ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu {
  top: 0;
  border-bottom: none;
}
.ant-anchor-link {
  display: inline-block;
  line-height: 25px;
  font-size: .9rem;
  margin-right: 20px;
  /* background: rgb(1, 62, 107);
  color: #fff; */
}
.ant-anchor .ant-anchor-link:last-child {
  margin-right: 0;
}
.ant-anchor-wrapper {
  background: rgb(0, 120,214);
  color: #fff;
}
.ant-anchor {
  padding-left: 0;
}
.ant-anchor .ant-anchor-ink {
  display: none;
}
.ant-anchor-link-title {
  color: #fff;
}
/* .ant-anchor-wrapper {
  height: 40px;
  line-height: 40px;
} */
</style>
<style lang="stylus" scoped>

.nav-bar
  position relative
  height 3rem
  text-align left
  line-height 3rem
  .title
    font-size 1.2rem
  .icon-img
    height 100%
    padding .5rem
  .menu-list
    position absolute 
    right 1rem
    width 1.4rem
    line-height 100%
    top .9rem
    &:hover
      cursor pointer
  .menu-container
    position absolute
    top 3rem
    right 0
    z-index 1000
    text-align left
.web-bar
  margin-top 20px
.web-header
  height 4rem
  .icon-img
    height 100%
    padding .5rem
    vertical-align middle
  .web-title
    display inline-block
    span
      font-size .8rem
.menu-sider
  background rgb(0, 120,214)
  .menu-container
    background inherit
    color #fff
    // height 40px
    // line-height 40px

.footer
  padding-top 1rem
  background #000
  color #fff
  font-size .9rem
  .contact-tel
    border-bottom 1px solid #eee
    padding-bottom 1rem
    h4
      color #fff
    span
      margin-right 3rem
  .other-footer
    margin-top 1rem
    display flex
    .footer-item
      flex 1
      h4
        font-size .9rem
        color #fff
        margin-bottom .8rem
      ul
        list-style none
        font-size .7rem 
        a
          color #ddd
  .copy-right
    border-top 1px solid #eee
    padding 10px
    text-align center


@media screen and (min-width:1201px){
  .mobile-bar {
    display none
  }
  .web-bar {
    display block
  }
}
@media screen and (max-width:1200px){
  .mobile-bar {
    display none
  }
  .web-bar {
    display block
  }
}
@media screen and (max-width:768px){
  .mobile-bar {
    display block
    margin-bottom 1rem
    padding-left 1rem
    position fixed
    top 0
    z-index 1000
    width 100%
    background #fff
  }
  .web-bar {
    display none
  }
  .footer {
    display none
  }
  .main-container {
    margin-top 50px
  }
}

.menu-fixed
  position fixed
  top 0
  left 0
  right 0
  width 100%
  z-index 1000
</style>

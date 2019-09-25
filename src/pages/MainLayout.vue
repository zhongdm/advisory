<template>
  <div class="wrapper-container">
    <div class="nav-bar mobile-bar">
      <img src="@/assets/images/logo@2x.png" class="icon-img" alt="">
      <span class="title">闻动管理顾问（南京）有限公司</span>
      <img src="@/assets/images/menu@2x.png" class="menu-list" alt="" @click="showMenu">
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
        <img src="@/assets/images/logo@2x.png" class="icon-img" alt="">
        <div class="web-title">
          <h2 style="margin: 0">闻动管理顾问（南京）有限公司</h2>
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
        <template v-for="item in menuList">
          <a-sub-menu
            :key="item.key"
            :style="{width: 100/menuList.length + '%'}"
            v-if="item.children && item.children.length > 0"
            @titleClick="menuItem(item)">
            <span slot="title"><a-icon :type="item.type" /><span>{{item.name}}</span></span>
            <a-menu-item v-for="(subItem) in item.children" :key="subItem.key">
              <!-- <a-icon :type="subItem.type" /> -->
              <span>{{subItem.name}}</span>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :key="item.key" :style="{width: 100/menuList.length + '%'}">
            <a-icon :type="item.type" />
            <span>{{item.name}}</span>
          </a-menu-item>
        </template>
      </a-menu>
      </div>
    </div>
    <div class="web-wrapper main-container">
    <router-view></router-view>
    </div>
    <div class="footer">
      <div class="web-wrapper footer-wrapper">
      <a-row type="flex" justify="space-around" align="middle" style="height:100%;">
        <a-col :span="5">
          <a-row>
            <a-col :span="12"><a @click="$router.push('business1')">顾问内容</a></a-col>
            <a-col :span="12"><a @click="$router.push('caseList')">闻动案例</a></a-col>
          </a-row>
          <a-row>
            <a-col :span="12"><a @click="$router.push('newsList')">闻动资讯</a></a-col>
            <a-col :span="12"><a @click="$router.push('about')">关于闻动</a></a-col>
          </a-row>
        </a-col>
        <a-col :span="13">
          <section class="contact-tel">
            <div>
            <h4>联系电话</h4>
            <div>
              <span>客服电话: <a href="tel:025-69904569">025-6990-4569</a></span>
              <span>专家直线: <a href="tel:138-1338-2808">138-1338-2808</a></span>
            </div>
            </div>
          </section>
        </a-col>
        <a-col :span="6">
          <!-- <div class="last-code"> -->
            <a-row type="flex" justify="space-around">
              <a-col :span="12">
          <img src="@/assets/images/qrcode.png" alt="" class="footer-img-qr">
          </a-col>
          <a-col :span="12">
          <img src="@/assets/images/weibo.jpg" alt="" class="footer-img-wb">
          </a-col>
          </a-row>
        <!-- </div> -->
        </a-col>
      </a-row>
      </div>
      <div class="copy-right">
        Copyright Wendong | All Rights Reserved | 苏ICP备19040864号
      </div>
    </div>

    <div class="footer" style="display:none">
      <div class="web-wrapper footer-wrapper">
      <section class="contact-tel">
        <h4>联系电话</h4>
        <div>
          <span>客服电话: <a href="tel:025-69904569">025-6990-4569</a></span>
          <span>专家直线: <a href="tel:138-1338-2808">138-1338-2808</a></span>
        </div>
      </section>
      <section class="other-footer">
        <div class="footer-item">
          <h4>顾问内容</h4>
          <!-- <ul>
            <li><a href="javascript:void(0);" @click="footerClick('business1', 'business')">增长策略顾问</a></li>
            <li><a href="javascript:void(0);" @click="footerClick('business2', 'business')">发展战略顾问</a></li>
            <li><a href="javascript:void(0);" @click="footerClick('business3', 'business')">组织能力顾问</a></li>
            <li><a href="javascript:void(0);" @click="footerClick('business4', 'business')">企业文化顾问</a></li>
            <li><a href="javascript:void(0);" @click="footerClick('business5', 'business')">高管圆桌汇</a></li>
            <li><a href="javascript:void(0);" @click="footerClick('business6', 'business')">闻动私董会</a></li>
            <li><a href="javascript:void(0);" @click="footerClick('business7', 'business')">闻动企业会员</a></li>
          </ul> -->
        </div>
        <div class="footer-item">
          <h4>闻动案例</h4>
          <!-- <ul>
            <li><a href="javascript:void(0);" @click="footerClick('caseList', 'case')">经典案例</a></li>
          </ul> -->
        </div>
        <div class="footer-item">
          <h4>闻动资讯</h4>
          <!-- <ul>
            <li><a href="javascript:void(0);" @click="footerClick('newsList', 'news')">闻动资讯</a></li>
          </ul> -->
        </div>
        <div class="footer-item">
          <h4>关于闻动</h4>
          <!-- <ul>
            <li><a href="javascript:void(0);" @click="footerClick('about', 'about')">关于我们</a></li>
          </ul> -->
        </div>
        <div class="footer-item">
          <img src="@/assets/images/qrcode.png" alt="">
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
import eventBus from '../common/eventBus'

export default {
  data () {
    return {
      selectedKey: ['about'],
      menuVisible: false
    }
  },
  computed: {
    menuList () {
      return [
        {
          key: 'about',
          name: '关于闻动',
          type: 'contacts',
          path: 'about',
          // img: require('@/assets/images/bs.png'),
          // selectedImg: '@/assets/images/icon-case@2x.png'
        },
        {
          key: 'home',
          name: '闻动首页',
          type: 'home',
          path: 'home',
          // img: require('@/assets/images/icon-home.png'),
          // selectedImg: require('@/assets/images/icon-home.png')
        },
        {
          key: 'business1',
          name: '顾问内容',
          type: 'schedule',
          path: 'business1',
          children: [
            {
              type: '',
              key: 'business1',
              name: '增长策略顾问',
              path: 'business1'
            },
            {
              type: '',
              key: 'business2',
              name: '发展战略顾问',
              path: 'business2'
            },
            {
              type: '',
              key: 'business3',
              name: '企业文化顾问',
              path: 'business3'
            },
            {
              type: '',
              key: 'business4',
              name: '组织能力顾问',
              path: 'business4'
            },
            {
              type: '',
              key: 'business5',
              name: '高管圆桌汇',
              path: 'business5'
            },
            {
              type: '',
              key: 'business6',
              name: '闻动私董会',
              path: 'business6'
            }
            // ,
            // {
            //   type: '',
            //   key: 'business7',
            //   name: '闻动企业会员',
            //   path: 'business7'
            // },

          ]
          // img: require('@/assets/images/icon-bs.png'),
          // selectedImg: require('@/assets/images/icon-bs.png')
        },
        {
          key: 'caseList',
          name: '闻动案例',
          type: 'appstore',
          path: 'caseList',
          // img: require('@/assets/images/icon-case@2x.png'),
          // selectedImg: require('@/assets/images/icon-case@2x.png'),
        },
        {
          key: 'newsList',
          name: '闻动资讯',
          type: 'bars',
          path: 'newsList',
          // img: require('@/assets/images/logo/.png'),
          // selectedImg: require('@/assets/images/icon-news@2x.png')
        },

        // {
        //   key: 'emp',
        //   name: '招贤纳士',
        //   type: 'user',
        //   img: '@/assets/images/bs.png'
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
    eventBus.$on('selectedMenu', data => {
      this.selectedKey = [data]
    })
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
    handleClick (item, key, path) {
      console.log(item, key,path)
      this.$router.push(item.key)
      this.selectedKey = [item.key]
      this.menuVisible = false
    },
    showMenu () {
      this.menuVisible = !this.menuVisible
    },
    menuItem (item) {
      console.log('item')
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
      // this.$router.push(item.path)
      // this.selectedKey = [item.key]
    },
    smoothDown () {
      if (distance < total) {
        distance += step
        _this.scrollTop = distance;
        setTimeout(smoothDown, 10);
      } else {
        _this.scrollTop = total
      }
    },
    footerClick (path, key) {
      this.$router.push(path)
      this.selectedKey = [key]
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
  margin: auto !important;
  border-bottom: none;
}
.ant-menu-horizontal > .ant-menu-item > a {
  color: #fff;
}
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal > .ant-menu-item-open,
.ant-menu-horizontal > .ant-menu-submenu-open,
.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-selected,
/* .ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-item-active，
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-selected, */
.ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-open {
  background-color: rgb(1, 62, 107) !important;
  color: #fff !important;
  border-bottom: none;
}
.ant-menu-horizontal > .ant-menu-item-selected {
  background: rgb(1, 62, 107);
  color: #fff !important;
  border-bottom: none;
}
.ant-menu-item:hover,
.ant-menu-item-active,
.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.ant-menu-submenu-active,
{
  color: rgb(0, 120,214);
}
.ant-menu-submenu-title:hover {
  color: #fff;
}
.ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu {
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
    // border-bottom 1px solid #eee
    // padding-bottom 1rem
    display flex
    justify-content center
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
      img
        display block
        max-width 70%
  .copy-right
    border-top 1px solid #eee
    padding 10px
    text-align center

.footer-wrapper
  // padding 1rem !important
  height 7rem
  a
    color #fff
    &:hover
      text-decoration underline
  .footer-img-wb, .footer-img-qr
    max-width 6rem
    display inline

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
    box-shadow: 4px 2px 8px rgba(187,184,184,0.2),
                  -4px 2px 8px rgba(187,184,184,0.2)
  }
  .web-bar {
    display none
  }
  .footer {
    display none
  }
  .main-container {
    margin-top 60px
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

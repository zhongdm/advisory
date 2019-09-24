<template>
  <div>
    <a-menu
      class="menu-container"
      v-show="menuVisible"
      @click="handleClick"
      style="width: 256px"
      :defaultSelectedKeys="selectedKey"
      mode="inline"
    >
      <a-sub-menu :key="item.key" v-for="item in menuList">
        <span slot="title"><a-icon type="setting" /><span>{{item.name}}</span></span>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'menu-bar',
  data () {
    return {
    }
  },
  computed: {
    menuList () {
      return [
        {
          key: 'home',
          name: '闻动首页'
        },
        {
          key: 'business',
          name: '闻动内容'
        },
        {
          key: 'case',
          name: '闻动案例'
        },
        {
          key: 'news',
          name: '闻动资讯'
        },
        {
          key: 'about',
          name: '关于闻动'
        },
        {
          key: 'emp',
          name: '招贤纳士'
        },
      ]
    }
  },
  mounted () {
    // this.getMenuList()
  },
  methods: {
    handleMenu (e) {
      this.activeMenu = e.key
      // this.$router.push(e.domEvent.target.dataset.path)
    },
    goMenu(index, indexPath) {
      this.activeMenu = indexPath[indexPath.length - 1]
      sessionStorage.setItem('active-menu', indexPath[indexPath.length - 1])
      let menu = getCurrentMenu(indexPath[indexPath.length - 1], this.menuList).reverse()
      this.$store.dispatch('changeCurrentMenu', menu)
      this.$emit('floatHidden')
    },
    async getMenuList () {
      // TODO:
      await getMenuList().then(res => {
        if (res.code ===200) {
          this.menuList = res.data
        }
      })
      this.$store.dispatch('getMenuList', this.menuList)
    }
  }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /* min-height: 400px; */
  }
</style>
<style scoped>
.menu-bar {
  border: 1px solid #ddd;
  /* width: 200px; */
  /* float: left; */
}
</style>

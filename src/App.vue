<template>
  <div id="app">
    <main-layout>
      <router-view/>
    </main-layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    MainLayout: () => import('./pages/MainLayout.vue')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  font-size: 1rem;
  scroll-behavior:smooth;
}
p {
  text-indent: 2em;
  /* line-height: 2.5rem; */
}
@media screen and (max-width: 1000px) {
  #app {
    overflow-x: scroll;
    -webkit-overflow-scrolling : touch;
  }
}


@media screen and (max-width: 760px) {
  #app {
    font-size: 16px;
  }
}
@media screen and (max-width: 560px) {
  #app {
    font-size: 16px;
  }
}
@media screen and (max-width: 480px) {
  #app {
    font-size: 15px;
  }
}

/* .wrapper {
  padding-bottom: 4rem;
} */
/* .wrapper-container {
  max-width: 1000px;
  margin: auto;
  width: 100%;
} */
.web-wrapper {
  max-width: 1000px;
  margin: auto;
  width: 100%;
  padding: 0 1rem !important;
  scroll-behavior:smooth;
  /* margin-top: 10px; */
  margin-bottom: 0 !important;
}


</style>

<style lang="stylus">
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
</style>


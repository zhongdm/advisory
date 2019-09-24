<template>
  <div>
    <a-row type="flex" justify="space-between" style="margin:1rem 0;">
      <a-col :span="12">
        <a-button type="link" @click="jumpPage(currentIndex - 1)" v-if="currentIndex > 1"><a-icon type="left" />上一篇</a-button>
      </a-col>
      <a-col :span="12" style="text-align:right">
        <a-button type="link" @click="jumpPage(currentIndex + 1)" v-if="currentIndex < 6">下一篇<a-icon type="right" /></a-button>
        <a-button type="link" @click="$router.push('/home')" v-if="currentIndex === 6">回到首页<a-icon type="right" /></a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    currentIndex: Number
  },
  methods: {
    jumpPage (index) {
      this.$router.push('business' + index)
    }
  }
}
</script>

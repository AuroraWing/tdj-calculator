<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside ref="CommonAsideRef"></common-aside>
    </el-aside>
    <el-container>
      <el-header v-if="false">
        <el-button @click="collapseBtn()"> &lt; </el-button>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
export default {
  name: 'mainVue',
  data () {
    return {}
  },
  components: {
    CommonAside
  },
  methods: {
    collapseBtn () {
      this.$refs.CommonAsideRef.changeCollapse()
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgb(25, 25, 22);
}
</style>

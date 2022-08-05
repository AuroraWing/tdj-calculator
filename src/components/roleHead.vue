<template>
  <div class="heroHeadBox">
    <div class="heroHeadBg">
      <img src="@/assets/ssr_bg.png" alt="" />
    </div>
    <div class="heroHeadImg">
      <img
        src="@/assets/200px-头像_尉迟良.png"
        alt="尉迟"
        title="尉迟"
        @click="chooseRole"
      />
    </div>
    <div class="heroHeadName">
      <font>尉迟</font>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roleHead',
  data () {
    return {}
  },
  methods: {
    chooseRole () {
      console.log('选择')
    }
  }
}
</script>

<style lang="less" scoped>
img {
    width: 100px;
    height: 100px;
    position: absolute;
}
.heroHeadBox {
    width: 100px;
    height: 100px;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 0 2px #000
    // .heroHeadBg {
    //     z-index: 1;
    // }
}
</style>

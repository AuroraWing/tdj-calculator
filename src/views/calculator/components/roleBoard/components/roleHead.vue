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
      <text>尉迟</text>
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
    border-radius: 4px;
    box-sizing: border-box;
    margin: 2px;
    box-shadow: 0 0 2px #000
}
.heroHeadBox:hover {
  box-shadow: 0 0 20px 2px #918f8f;/*盒子阴影*/
  transition: all 0.5s;/*持续时间*/
  cursor:pointer;
}
.heroHeadBg {
  z-index: 1;
}
.heroHeadImg {
  z-index: 2;
}
.heroHeadName {
  width: 100px;
  background: rgba(0, 0, 0, 0.31);
  text-align: center;
  z-index: 3;
  position: absolute;
  bottom: 0;
  color: #fff;
  padding: 2px 0px;
  line-height: 14px;
  font-size: 12px;
  font-weight: bolder;
  text-shadow: #000 -1px 0 0, #763c12 0 -1px 0, #5d2b08 1px 0 0, #1d1515 0 1px 0;
}
</style>

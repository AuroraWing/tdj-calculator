<template>
  <div v-for="item in roleArray" :key="item" class="heroHeadImgPage">
    <div class="heroHeadBox">
      <div class="heroHeadBg">
        <img v-if="item.color === 'n'" class="imgBg" src="@/assets/n_bg.png" alt="" />
        <img v-else-if="item.color === 'r'" class="imgBg" src="@/assets/r_bg.png" alt="" />
        <img v-else-if="item.color === 'sr'" class="imgBg" src="@/assets/sr_bg.png" alt="" />
        <img v-else-if="item.color === 'ssr'" class="imgBg" src="@/assets/ssr_bg.png" alt="" />
      </div>
      <div class="heroHeadImg">
        <img
          :src="item.imgSrc"
          :alt="item.roleName"
          :title="item.roleName"
          @click="chooseRole(item)"
        />
      </div>
      <div class="heroHeadName">
        <text>{{item.roleName}}</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roleHeadImg',
  data () {
    return {}
  },
  emits: ['chooseRole'],
  props: {
    roleArray: Array
  },
  methods: {
    chooseRole (data) {
      this.$emit('chooseRole', data)
    }
  }
}
</script>

<style lang="less" scoped>
.heroHeadImgPage {
  width: 52px;
  height: 52px;
  margin-right: 2px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
}
img {
    width: 50px;
    height: 50px;
    position: absolute;
}
.heroHeadBox {
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 2px;
    box-shadow: 0 0 2px #000;
    transition: all 0.5s;
}
.heroHeadBox:hover {
  margin: 1px;
  box-shadow: 0 0 10px 2px #918f8f;/*盒子阴影*/
  transition: all 0.5s;/*持续时间*/
  cursor:pointer;
}
.heroHeadBg {
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 1;
}
.heroHeadImg {
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 2;
  background: repeating-linear-gradient(-45deg,transparent 0%,rgb(255 255 255 / 0.5) 15%,transparent 50%);
  background-size: 300%;
  background-position: 0% 0%;
  transition: background-position 1s;
}
.heroHeadImg:hover {
  background-size: 300%;
  background-position: 100% 100%;
  transition: background-position 1s;
}
.heroHeadName {
  width: 50px;
  background: rgba(0, 0, 0, 0.31);
  text-align: center;
  z-index: 3;
  position: absolute;
  bottom: 0;
  color: #fff;
  padding: 2px 0px;
  line-height: 7px;
  font-size: 12px;
  font-weight: bolder;
  text-shadow: #000 -1px 0 0, #763c12 0 -1px 0, #5d2b08 1px 0 0, #1d1515 0 1px 0;
}
</style>

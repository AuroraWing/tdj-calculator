<template>
  <div class="cardBox">
    <div>头部饰品</div>
    <div class="circularBox">
      <div class="animationBox">
        <img src="@/assets/ssr_bg.png" alt="">
        <img class="bgAnimation" src="@/assets/饰品_七色缨珞.png" alt="">
      </div>
    </div>
    <div>七色缨珞</div>
  </div>
</template>

<script>
export default {
  name: 'ornamentsCard',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.cardBox {
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.circularBox {
  width: 50px;
  height:50px;
  border-radius: 50%;
  // margin: 2px;
  box-shadow: 0 0 2px #000;
  transition: all 0.5s;
}
.animationBox {
  width: 50px;
  height:50px;
  border-radius: 50%;
  // box-shadow: 0 0 2px #000;
  margin: 0px;
  transition: all 0.5s;
}
.animationBox:hover {
  margin: -1px;
  box-shadow: 0 0 5px 2px #918f8f;/*盒子阴影*/
  transition: all 0.5s;/*持续时间*/
}
.el-card {
  padding: 0;
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 50%;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  cursor:pointer;
}
.bgAnimation {
  background: repeating-linear-gradient(-45deg,transparent 0%,rgb(255 255 255 / 0.3) 15%,transparent 40%);
  background-size: 300%;
  background-position: 0% 0%;
  transition: background-position 1s;
}
.bgAnimation:hover {
  background-size: 300%;
  background-position: 100% 100%;
  transition: background-position 1s;
}
</style>

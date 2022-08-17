<template>
  <div class="circularBox">
    <div class="animationBox">
      <img v-if="data.imgBg !== ''" :src="data.imgBg" alt="" @click="$emit('choose')" />
      <img
        class="bgAnimation"
        :src="data.imgSrc"
        alt=""
        :title="data.title"
        @click="$emit('choose')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'circularImg',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.circularBox {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  margin: 2px;
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

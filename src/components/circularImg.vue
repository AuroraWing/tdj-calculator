<template>
  <div class="circularBox">
    <div class="animationBox">
      <img
        class="bgAnimation"
        :src="data.img"
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

</style>

<template>
  <!-- <div class="cardBox"> -->
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
    <img src="@/assets/ssr_bg.png" alt="">
      <img src="@/assets/饰品_七色缨珞.png" alt="">
    </el-card>
  <!-- </div> -->
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
  width: 50px;
  height:50px;
  border-radius: 50%;
  background-color: #fff;
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
  position: absolute;
  cursor:pointer;
}
</style>

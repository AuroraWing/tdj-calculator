<template>
  <div class="cardBox">
    <div class="textDiv">{{data.label}}</div>
    <div class="circularBox">
      <div class="animationBox">
        <img v-if="data.imgBg !== ''" :src="data.imgBg" alt="">
        <img class="bgAnimation" :src="data.imgSrc" alt="" :title="data.name">
      </div>
    </div>
    <div class="textDiv">{{data.name}}</div>
    <div>
      <el-select v-model="value" class="m-2" placeholder="选择" size="small" fit-input-width>
      <el-option
        class="elOption"
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ornamentsCard',
  props: {
    // 数据格式
    // data: {
    //     label: '战阵',
    //     imgSrc: 'https://patchwiki.biligame.com/images/tdj/thumb/1/1c/pm4ouah0x3yyboawejwio8rkt5pc0ew.png/160px-%E4%B8%87%E5%BF%B5%E8%BD%AE%E5%9B%9E%E9%98%B5.png',
    //     imgBg: '',
    //     lintipName: '万念轮回阵',
    //     option: []
    //   }
    data: {
      type: Object
    }
  },
  data () {
    return {
      value: true,
      options: [
        {
          label: '生效',
          value: true
        },
        {
          label: '不生效',
          value: false
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.cardBox {
  padding: 2px 4px;
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.circularBox {
  width: 50px;
  height: 50px;
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
// .el-card {
//   padding: 0;
//   width: 50px;
//   height: 50px;
//   position: relative;
//   border-radius: 50%;
// }
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
// :deep(.el-select-dropdown__item) {
//   padding: 0;
//   display: flex;
//   align-items: center;
// }
.elOption {
  padding: 0;
  display: flex;
  justify-content: center;
  font-size: 12px;
}
.textDiv {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

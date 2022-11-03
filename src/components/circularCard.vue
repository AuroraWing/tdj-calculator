<template>
  <div class="cardBox">
    <div class="circularBox">
        <img :src="data.img" :alt="data.name" :title="data.description" @click="$emit('choose')">
    </div>
    <div class="textDiv">
      {{data.name}}
    </div>
    <div>
      <el-select v-model="value" class="m-2" placeholder="选择" size="small" fit-input-width>
      <el-option
        class="elOption"
        v-for="item in options"
        :key="item.value"
        :label="item.name"
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
      value: '',
      options: [
        { name: '生效', value: 0 },
        { name: '不生效', value: 0 }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.circularBox {
  width: 50px;
  height: 50px;
  box-shadow: 0 0 2px #000;
  transition: all 0.5s;
}
.circularBox:hover {
  margin: -1px;
  box-shadow: 0 0 5px 2px #918f8f;/*盒子阴影*/
  transition: all 0.5s;/*持续时间*/
}
img {
  width: 50px;
  height: 50px;
  position: absolute;
  cursor:pointer;
}
// .bgAnimation {
//   background: repeating-linear-gradient(-45deg,transparent 0%,rgb(255 255 255 / 0.3) 15%,transparent 40%);
//   background-size: 300%;
//   background-position: 0% 0%;
//   transition: background-position 1s;
// }
// .bgAnimation:hover {
//   background-size: 300%;
//   background-position: 100% 100%;
//   transition: background-position 1s;
// }
.elOption {
  padding: 0;
  display: flex;
  justify-content: center;
  font-size: 12px;
}
.textDiv {
  text-align: center;
  // 超出的文本省略
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

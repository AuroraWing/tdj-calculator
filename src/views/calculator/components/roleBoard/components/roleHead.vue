<template>
<div class="page">
  <div class="heroHeadBox">
    <div class="heroHeadBg">
      <img v-if="role.color === 'n'" class="imgBg" src="@/assets/n_bg.png" alt="" />
      <img v-else-if="role.color === 'r'" class="imgBg" src="@/assets/r_bg.png" alt="" />
      <img v-else-if="role.color === 'sr'" class="imgBg" src="@/assets/sr_bg.png" alt="" />
      <img v-else-if="role.color === 'ssr'" class="imgBg" src="@/assets/ssr_bg.png" alt="" />
    </div>
    <div class="heroHeadImg">
      <el-popover placement="right" :width="400" trigger="click">
        <template #reference>
          <img
            :src="role.imgSrc"
            :alt="role.roleName"
            :title="role.roleName"
          />
        </template>
        <div>
          <role-head-img :roleArray="roleArray" @chooseRole=chooseRole($event,data)></role-head-img>
        </div>
      </el-popover>
    </div>
    <div class="heroHeadName">
      <text>{{role.roleName}}</text>
    </div>
  </div>
</div>
</template>

<script>
import roleHeadImg from '@/components/roleHeadImg.vue'
export default {
  name: 'roleHead',
  components: { roleHeadImg },
  data () {
    return {
      role: {
        roleName: '尉迟',
        color: 'ssr',
        imgSrc: require('@/assets/200px-头像_尉迟良.png')
      },
      roleArray: [
        {
          roleName: '尉迟',
          color: 'ssr',
          imgSrc: require('@/assets/200px-头像_尉迟良.png')
        },
        {
          roleName: '尉迟1',
          color: 'sr',
          imgSrc: require('@/assets/200px-头像_尉迟良.png')
        },
        {
          roleName: '尉迟2',
          color: 'r',
          imgSrc: require('@/assets/200px-头像_尉迟良.png')
        }
      ]
    }
  },
  methods: {
    chooseRole (data) {
      console.log('1', data)
      this.role = data
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  width: 104px;
  height: 104px;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
}
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
  width: 100px;
  height: 100px;
  z-index: 1;
}
.heroHeadImg {
  position: absolute;
  width: 100px;
  height: 100px;
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

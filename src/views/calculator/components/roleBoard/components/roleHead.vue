<template>
  <div class="page">
    <div class="heroHeadBox">
      <div class="heroHeadBg">
        <img
          v-if="role.color === 'n'"
          class="imgBg"
          src="@/assets/n_bg.png"
          alt=""
        />
        <img
          v-else-if="role.color === 'r'"
          class="imgBg"
          src="@/assets/r_bg.png"
          alt=""
        />
        <img
          v-else-if="role.color === 'sr'"
          class="imgBg"
          src="@/assets/sr_bg.png"
          alt=""
        />
        <img
          v-else-if="role.color === 'ssr'"
          class="imgBg"
          src="@/assets/ssr_bg.png"
          alt=""
        />
      </div>
      <div class="heroHeadImg">
        <el-popover placement="right" :width="325" :visible="popoverVisible">
          <template #reference>
            <img
            :src="role.imgSrc"
            :alt="role.roleName"
            :title="role.roleName"
            @click="popoverVisible = !popoverVisible"
            />
          </template>
          <template #default>
            <el-scrollbar height="400px">
              <role-head-img
                :roleArray="roleArray"
                @chooseRole="chooseRole($event, data)"
              ></role-head-img>
            </el-scrollbar>
          </template>
        </el-popover>
      </div>
      <div class="heroHeadName">
        <text>{{ role.roleName }}</text>
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
      popoverVisible: false,
      role: {
        roleName: '冰璃',
        color: 'ssr',
        // imgSrc: require('@/assets/200px-头像_尉迟良.png')
        imgSrc: 'https://patchwiki.biligame.com/images/tdj/thumb/8/89/oc3vwl9xumfajgv9y83raemuri7i2o2.png/200px-%E5%A4%B4%E5%83%8F_%E5%86%B0%E7%92%83.png'
      },
      roleArray: []
    }
  },
  created () {
    this.getHeadImg()
  },
  watch: {
    // role () {
    //   this.$emit('getRole')
    // }
  },
  mounted () {
    // 页面监听，添加鼠标抬起事件，关闭popover窗口
    document.addEventListener('mouseup', (e) => {
      this.popoverVisible = false
    })
  },
  methods: {
    chooseRole (data) {
      this.role = data
      this.popoverVisible = false
    },
    async getHeadImg () {
      const axios = require('axios')
      try {
        const resHeroHead = await axios.get('http://localhost:5050/data/heroHead')
        this.roleArray = resHeroHead.data
      } catch (error) {
        console.error(error)
      }
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
  box-shadow: 0 0 10px 2px #918f8f; /*盒子阴影*/
  transition: all 0.5s; /*持续时间*/
  cursor: pointer;
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
  background: repeating-linear-gradient(
    -45deg,
    transparent 0%,
    rgb(255 255 255 / 0.5) 15%,
    transparent 50%
  );
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

<template>
  战阵
  <choose-popover
    :placement="popover.placement"
    :width="popover.width"
    :visible="lintupVisible"
    :offset="popover.offset"
  >
    <template #reference>
      <circular-card
        :data="lintup"
        @choose="lintupVisible = !lintupVisible"
      ></circular-card>
    </template>
    <template #popUp>
      <circular-img
        v-for="item in lintupArray"
        :key="item"
        :data="item"
      ></circular-img>
    </template>
  </choose-popover>
</template>

<script>
import circularImg from '@/components/circularImg.vue'
import choosePopover from '@/components/choosePopover.vue'
import circularCard from '@/components/circularCard.vue'
export default {
  name: 'lineupPopover',
  components: { circularCard, choosePopover, circularImg },
  data () {
    return {
      popover: {
        placement: 'bottom',
        width: 100,
        offset: -60
      },
      lintupVisible: false,
      lintup: {
        name: '无',
        description: '无战阵触发',
        img: 'https://patchwiki.biligame.com/images/tdj/e/ee/0o2zxftn1vo9evfl0ax4lhx88s16rm3.png'
      },
      lintupArray: []
    }
  },
  created () {
    this.getLintup()
  },
  methods: {
    async getLintup () {
      const axios = require('axios')
      try {
        const res = await axios.get('http://localhost:5050/data/lineup')
        this.lintupArray = res.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
// @import '@/static/chooseCardBox.css';
// .cardBox {
//   padding: 2px 4px;
//   width: 60px;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   font-size: 13px;
// }
</style>

<template>
  <div class="lineupAndSkillBox">
    <div class="cardBox">
      战阵
      <choose-popover
      :placement="popover.placement"
      :width="popover.width"
      :visible="visible.lintup"
      :offset="popover.offset"
      >
        <template #reference>
          <circular-card :data="lintup" @choose="visible.lintup = !visible.lintup"></circular-card>
        </template>
        <template #popUp>
          <circular-img v-for="item in lintupArray" :key="item" :data="item"></circular-img>
        </template>
      </choose-popover>
    </div>

    <div class="cardBox">
      技能1
      <choose-popover
        :placement="popover.placement"
        :width="popover.width"
        :visible="visible.skill_1"
        :offset="popover.offset"
      >
        <template #reference>
          <circular-card :data="skill_1" @choose="visible.skill_1 = !visible.skill_1"></circular-card>
        </template>
        <template #popUp>
          <circular-img v-for="item in lintupArray" :key="item" :data="item"></circular-img>
        </template>
      </choose-popover>
    </div>

    <div class="cardBox">
      技能2
      <choose-popover
        :placement="popover.placement"
        :width="popover.width"
        :visible="visible.skill_2"
        :offset="popover.offset"
      >
        <template #reference>
          <circular-card :data="skill_2" @choose="visible.skill_2 = !visible.skill_2"></circular-card>
        </template>
        <template #popUp> 1 </template>
      </choose-popover>
    </div>

    <div class="cardBox">
      技能3
      <choose-popover
        :placement="popover.placement"
        :width="popover.width"
        :visible="visible.skill_3"
        :offset="popover.offset"
      >
        <template #reference>
          <circular-card :data="skill_3" @choose="visible.skill_3 = !visible.skill_3"></circular-card>
        </template>
        <template #popUp> 1 </template>
      </choose-popover>
    </div>

    <circular-card :data="superWeapon" @choose="visible.superWeapon = !visible.superWeapon"></circular-card>

  </div>
</template>

<script>
import circularImg from '@/components/circularImg.vue'
import choosePopover from '@/components/choosePopover.vue'
import circularCard from '@/components/circularCard.vue'
export default {
  name: 'lineupAndSkill',
  components: { circularCard, choosePopover, circularImg },
  data () {
    return {
      popover: {
        placement: 'bottom',
        width: 100,
        offset: -60
      },
      visible: {
        lintup: false,
        skill_1: false,
        skill_2: false,
        skill_3: false,
        superWeapon: false
      },
      // 全部战阵的数据数组，发请求获取
      lintupArray: [],
      lintup: {
        imgSrc:
          'https://patchwiki.biligame.com/images/tdj/thumb/1/1c/pm4ouah0x3yyboawejwio8rkt5pc0ew.png/160px-%E4%B8%87%E5%BF%B5%E8%BD%AE%E5%9B%9E%E9%98%B5.png',
        name: '万念轮回阵'
      },
      skill_1: {
        label: '技能1',
        imgSrc:
          'https://patchwiki.biligame.com/images/tdj/thumb/1/1c/pm4ouah0x3yyboawejwio8rkt5pc0ew.png/160px-%E4%B8%87%E5%BF%B5%E8%BD%AE%E5%9B%9E%E9%98%B5.png',
        imgBg: '',
        name: '万念轮回阵',
        option: []
      },
      skill_2: {
        label: '技能2',
        imgSrc:
          'https://patchwiki.biligame.com/images/tdj/thumb/1/1c/pm4ouah0x3yyboawejwio8rkt5pc0ew.png/160px-%E4%B8%87%E5%BF%B5%E8%BD%AE%E5%9B%9E%E9%98%B5.png',
        imgBg: '',
        name: '万念轮回阵',
        option: []
      },
      skill_3: {
        label: '技能3',
        imgSrc:
          'https://patchwiki.biligame.com/images/tdj/thumb/1/1c/pm4ouah0x3yyboawejwio8rkt5pc0ew.png/160px-%E4%B8%87%E5%BF%B5%E8%BD%AE%E5%9B%9E%E9%98%B5.png',
        imgBg: '',
        name: '万念轮回阵',
        option: []
      },
      superWeapon: {
        label: '神兵',
        imgSrc: '',
        imgBg: '',
        name: '',
        option: []
      }
    }
  },
  created () {
    this.getLintup()
  },
  mounted () {
    // 页面监听，添加鼠标抬起事件，关闭popover窗口
    document.addEventListener('mouseup', (e) => {
      this.visible = {
        lintup: false,
        skill_1: false,
        skill_2: false,
        skill_3: false,
        superWeapon: false
      }
    })
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
.lineupAndSkillBox {
  padding-bottom: 6px;
  height: 150px;
  background-color: #eaecf0;
  border-bottom: solid 1px #a7aeb5;
  display: flex;
  justify-content: space-around;
}
.cardBox {
  padding: 2px 4px;
  width: 60px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
}
</style>

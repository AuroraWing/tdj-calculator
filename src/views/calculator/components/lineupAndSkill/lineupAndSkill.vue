<template>
  <div class="lineupAndSkillBox">
    <circular-card :data="lintup"></circular-card>
    <circular-card :data="skill_1"></circular-card>
    <circular-card :data="skill_2"></circular-card>
    <circular-card :data="skill_3"></circular-card>
    <circular-card :data="superWeapon"></circular-card>
  </div>
</template>

<script>
import circularCard from '@/components/circularCard.vue'
export default {
  name: 'lineupAndSkill',
  components: { circularCard },
  data () {
    return {
      lintup: {
        label: '战阵',
        imgSrc: 'https://patchwiki.biligame.com/images/tdj/thumb/1/1c/pm4ouah0x3yyboawejwio8rkt5pc0ew.png/160px-%E4%B8%87%E5%BF%B5%E8%BD%AE%E5%9B%9E%E9%98%B5.png',
        imgBg: '',
        name: '万念轮回阵',
        option: []
      },
      skill_1: {
        label: '技能1',
        imgSrc: 'https://patchwiki.biligame.com/images/tdj/thumb/1/1c/pm4ouah0x3yyboawejwio8rkt5pc0ew.png/160px-%E4%B8%87%E5%BF%B5%E8%BD%AE%E5%9B%9E%E9%98%B5.png',
        imgBg: '',
        name: '万念轮回阵',
        option: []
      },
      skill_2: {
        label: '技能2',
        imgSrc: 'https://patchwiki.biligame.com/images/tdj/thumb/1/1c/pm4ouah0x3yyboawejwio8rkt5pc0ew.png/160px-%E4%B8%87%E5%BF%B5%E8%BD%AE%E5%9B%9E%E9%98%B5.png',
        imgBg: '',
        name: '万念轮回阵',
        option: []
      },
      skill_3: {
        label: '技能3',
        imgSrc: 'https://patchwiki.biligame.com/images/tdj/thumb/1/1c/pm4ouah0x3yyboawejwio8rkt5pc0ew.png/160px-%E4%B8%87%E5%BF%B5%E8%BD%AE%E5%9B%9E%E9%98%B5.png',
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
  methods: {

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
</style>

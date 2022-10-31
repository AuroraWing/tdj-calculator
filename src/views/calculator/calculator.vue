<template>
  <div class="calculationBox">
    <role-board ref="boardRef"></role-board>
    <lineup-and-skill></lineup-and-skill>
    <ornaments-used></ornaments-used>
    <buff></buff>
  </div>
  <div>
    <el-button @click="calculate">计算1</el-button>
  </div>
  <div class="calculationBox">
    <role-board ref="boardRef2"></role-board>
    <lineup-and-skill></lineup-and-skill>
    <ornaments-used></ornaments-used>
    <buff></buff>
  </div>
</template>

<script>
import roleBoard from './components/roleBoard/roleBoard.vue'
import lineupAndSkill from './components/lineupAndSkill/lineupAndSkill.vue'
import ornamentsUsed from './components/ornamentsUsed/ornamentsUsed.vue'
import buff from './components/buff/buff.vue'
export default {
  name: 'calculatorVue',
  components: { roleBoard, ornamentsUsed, buff, lineupAndSkill },
  data () {
    return {
      heroName: '',
      form: [],
      star: 6,
      OrnamentsList: []
    }
  },
  created () {
  },
  methods: {
    calculate () {
      this.getBoardData()
    },
    getBoardData () {
      // 通过 $refs 调用子组件方法，更新子组件数据
      this.$refs.boardRef.getRole()
      this.$refs.boardRef.getstar()
      this.$refs.boardRef.getform()
      // 通过 $refs 获取子组件数据
      this.heroName = this.$refs.boardRef.role
      this.star = this.$refs.boardRef.star
      this.form = this.$refs.boardRef.form
      // console.log(this.heroName)
    }
  }
}
</script>

<style lang="less" scoped>
div {
  display: inline-block;
}
.calculationBox {
  width: 400px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #000000;
}
</style>

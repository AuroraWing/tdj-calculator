<template>
  <div class="calculationBox">
    <role-board></role-board>
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
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.calculationBox {
  width: 400px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #000000;
}
</style>

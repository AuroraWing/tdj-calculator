<template>
  <div class="calculationBox">
    <role-board></role-board>
    <ornaments-used></ornaments-used>
  </div>
</template>

<script>
import roleBoard from './components/roleBoard/roleBoard.vue'
import ornamentsUsed from './components/ornamentsUsed/ornamentsUsed.vue'
export default {
  name: 'calculatorVue',
  components: { roleBoard, ornamentsUsed },
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

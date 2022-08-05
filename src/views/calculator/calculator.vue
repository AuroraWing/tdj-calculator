<template>
  <div class="calculationBox">
    <div>
      <role-board></role-board>
    </div>
  </div>
</template>

<script>
import roleBoard from './components/roleBoard.vue'
export default {
  name: 'calculatorVue',
  components: { roleBoard },
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

<template>
  <div class="roleBoardBox">
    <div>
      <role-head></role-head>
      <star-level></star-level>
    </div>
    <div class="numBoardBox">
      <num-board></num-board>
    </div>
  </div>
</template>

<script>
import roleHead from './components/roleHead.vue'
import starLevel from './components/starLevel.vue'
import numBoard from './components/numBoard.vue'

export default {
  name: 'roleBoard',
  components: { roleHead, starLevel, numBoard },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.roleBoardBox {
  display: flex;
  box-sizing: border-box;
  border: 1px solid #a7aeb5;
  height: 140px;
  background-color: #eaecf0;
}
.numBoardBox {
  margin-left: 10px;
  padding: 4px;
  border-left: solid 1px #a7aeb5;
  flex: 1
}
</style>

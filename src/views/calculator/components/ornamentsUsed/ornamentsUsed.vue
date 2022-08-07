<template>
  <div class="ornamentsUsedBox">

    <ornaments-card></ornaments-card>
  </div>
</template>

<script>
import ornamentsCard from './components/ornamentsCard.vue'
export default {
  name: 'ornamentsUsed',
  data () {
    return {}
  },
  methods: {},
  components: { ornamentsCard }
}
</script>

<style lang="less" scoped>
.ornamentsUsedBox {
  padding-top: 5px;
  display: flex;
  box-sizing: border-box;
  // border: 1px solid #a7aeb5;
  height: 140px;
  background-color: #eaecf0;
}
</style>

<template>
  <div class="ornamentsUsedBox">
    <ornaments-card></ornaments-card>
    <ornaments-card></ornaments-card>
    <ornaments-card></ornaments-card>
    <ornaments-card></ornaments-card>
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
  padding: 6px 0px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  border-bottom: 1px solid #a7aeb5;
  height: 110px;
  background-color: #eaecf0;
}
</style>

<template>
  <div class="roleBoardBox">
    <role-head></role-head>
  </div>
</template>

<script>
import roleHead from '@/components/roleHead.vue'
export default {
  name: 'roleBoard',
  components: { roleHead },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.roleBoardBox {
  box-sizing: border-box;
  border: 1px solid #000000;
  height: 150px;
}
</style>

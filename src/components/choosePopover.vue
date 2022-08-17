<template>
  <el-popover :placement="placement" :width="width" :visible="visible" :offset="offset">
    <template #reference>
      <slot name="reference"></slot>
    </template>
    <div>
      <slot name="popUp"></slot>
    </div>
  </el-popover>
</template>

<script>
export default {
  name: 'choosePopover',
  data () {
    return {}
  },
  props: {
    width: Number,
    visible: Boolean,
    placement: String,
    offset: Number
  },
  methods: {}
}
</script>

<style lang="less" scoped>

</style>

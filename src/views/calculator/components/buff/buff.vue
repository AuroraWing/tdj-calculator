<template>
  <div>
    <el-select
      v-model="buff"
      multiple
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in buffOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'buffVue',
  components: { },
  data () {
    return {
      buff: [],
      buffOptions: [
        {
          name: '神睿',
          text: '物攻增加20%',
          value: '0.2'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>

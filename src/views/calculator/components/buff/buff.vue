<template>
  <div class="page">
    <div class="mar-2">
      <div class="half">
        <el-select
          v-model="buff"
          multiple
          collapse-tags
          collapse-tags-tooltip
          placeholder="Select"
        >
          <el-option
            v-for="item in buffOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="half">
        1
      </div>
    </div>
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
          label: '神睿',
          value: 'board',
          qualified: [
            'akt', 'mAkt'
          ],
          type: '+',
          increase: 0.2,
          decrease: 0,
          description: '物攻，法攻增加20%'
        },
        {
          label: '极意I',
          value: 'jiYi1',
          type: 'computing',
          qualified: [
            'akt', 'mAkt'
          ],
          increase: 0.1,
          decrease: 0,
          description: '造成伤害增加10%'
        },
        {
          label: '神睿',
          qualified: [
            'akt', 'mAkt'
          ],
          type: '+',
          increase: 0.2,
          decrease: 0,
          description: '物攻，法攻增加20%'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.page {
  width: 100%;
}
.mar-2 {
  margin: 2px;
}
.half {
  width: 50%;
  border: 1px solid #f2f2f2;
  display: inline-block;
  box-sizing: border-box;
}
</style>

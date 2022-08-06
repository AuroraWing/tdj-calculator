<template>
  <el-form :model="heroNum" :rules="rules">
    <el-row v-for="item in heroNum" :key="item">
      <el-col :span="11">
        <el-col :span="6"
          ><text>{{ item.num1Name }}</text></el-col
        >
        <el-col :span="18">
          <el-form-item :prop="item.num1" :rules="rules.noEmpty">
            <el-input
              size="small"
              type="number"
              v-model.number="item.num1"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-col>
      <el-col :span="11">
        <el-col :span="6"
          ><text>{{ item.num2Name }}</text></el-col
        >
        <el-col :span="18"
          ><el-form-item :prop="item.num2" :rules="rules.noEmpty">
            <el-input
              size="small"
              type="number"
              v-model.number="item.num2"
            ></el-input> </el-form-item
        ></el-col>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'numBoard',
  data () {
    return {
      heroNum: [
        {
          num1: 0,
          num1Name: '气血',
          num2: 0,
          num2Name: '物攻'
        },
        {
          num1: 0,
          num1Name: '物防',
          num2: 0,
          num2Name: '法攻'
        },
        {
          num1: 0,
          num1Name: '法防',
          num2: 0,
          num2Name: '会心'
        }
      ],
      rules: {
        noEmpty: [{ required: true, message: '请输入数值', trigger: 'blur' }]
      }

    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.el-form {
  height: 100%;
}
.el-form-item {
  margin: 0;
}
.el-row {
  height: 33%;
  justify-content: space-around;
}
.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.el-input {
  display: inline-block;
}
/deep/.el-input input[type='number']::-webkit-outer-spin-button,
/deep/.el-input input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/deep/.el-input input[type='number'] {
  -moz-appearance: textfield;
}
/deep/.el-input .el-input__inner {
  line-height: 1px;
}
</style>

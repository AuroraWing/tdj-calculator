<template>
  <el-form :model="form" :rules="rules" label-width="40px">
    <el-row>
      <el-col :span="11">
        <el-form-item prop="hp" label="气血">
          <el-input
            v-model.number="form.hp"
            placeholder="战前白字"
            clearable
            oninput="if(value<0)value=0;if(value>10000)value=9999"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="atk" label="物攻">
          <el-input
            v-model.number="form.atk"
            placeholder="战前白字"
            clearable
            oninput="if(value<0)value=0;if(value>10000)value=9999"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11">
        <el-form-item prop="mAtk" label="法攻">
          <el-input
            v-model.number="form.mAtk"
            placeholder="战前白字"
            clearable
            oninput="if(value<0)value=0;if(value>10000)value=9999"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="def" label="物防">
          <el-input
            v-model.number="form.def"
            placeholder="战前白字"
            clearable
            oninput="if(value<0)value=0;if(value>10000)value=9999"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11">
        <el-form-item prop="mDef" label="法防">
          <el-input
            v-model.number="form.mDef"
            placeholder="战前白字"
            clearable
            oninput="if(value<0)value=0;if(value>10000)value=9999"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="criticalHitRate" label="会心">
          <el-input
            v-model.number="form.criticalHitRate"
            placeholder="战前白字"
            clearable
            oninput="if(value<0)value=0;if(value>10000)value=9999"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'numBoard',
  data () {
    return {
      form: {
        hp: 0,
        atk: 0,
        mAtk: 0,
        def: 0,
        mDef: 0,
        criticalHitRate: 0
      },
      rules: {
        hp: [
          { required: true, message: '不能为空', trigger: 'blur' },
          {
            pattern: /^[0-9]*$/,
            message: '必须为数字',
            trigger: 'blur'
          }
        ],
        atk: [
          { required: true, message: '不能为空', trigger: 'blur' },
          {
            pattern: /^[0-9]*$/,
            message: '必须为数字',
            trigger: 'blur'
          }
        ],
        mAtk: [
          { required: true, message: '不能为空', trigger: 'blur' },
          {
            pattern: /^[0-9]*$/,
            message: '必须为数字',
            trigger: 'blur'
          }
        ],
        def: [
          { required: true, message: '不能为空', trigger: 'blur' },
          {
            pattern: /^[0-9]*$/,
            message: '必须为数字',
            trigger: 'blur'
          }
        ],
        mDef: [
          { required: true, message: '不能为空', trigger: 'blur' },
          {
            pattern: /^[0-9]*$/,
            message: '必须为数字',
            trigger: 'blur'
          }
        ],
        criticalHitRate: [
          { required: true, message: '不能为空', trigger: 'blur' },
          {
            pattern: /^[0-9]*$/,
            message: '必须为数字',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
  }
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
  align-items: center;
}
:deep(.el-form-item__label) {
  font-size: 12px;
  padding-right: 6px;
}
:deep(.el-input .el-input__inner) {
  font-size: 12px
}
</style>

<template>
  <div class="roleBoardBox">
    <div class="leftBox">
      <role-head ref="roleHeadRef" @getRole="getRole"></role-head>
      <star-level ref="starLevelRef" @getstar="getstar"></star-level>
      <div class="textTip">
        <text>更变饰品</text>
      </div>
    </div>
    <div class="numBoardBox">
      <num-board ref="numBoardRef" @getform="getform"></num-board>
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
    return {
      role: '',
      form: [],
      star: 6
    }
  },
  watch: {
  },
  methods: {
    // 获取英灵名称
    getRole () {
      this.role = this.$refs.roleHeadRef.role.roleName
    },
    // 面板
    getform () {
      this.form = this.$refs.numBoardRef.form
    },
    // 星级
    getstar () {
      this.star = this.$refs.starLevelRef.starValue
    }
  }
}
</script>

<style lang="less" scoped>
.roleBoardBox {
  display: flex;
  box-sizing: border-box;
  // border: 1px solid #a7aeb5;
  height: 160px;
  background-color: #eaecf0;
}
.leftBox {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.numBoardBox {
  padding: 4px;
  border: solid 1px #a7aeb5;
  flex: 1
}
.textTip {
  flex: 1;
    display: flex;
    font-size: 14px;
    align-items: center;
}
</style>

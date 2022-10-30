<template>
  <div class="calculationBox">
    <role-board ref="boardRef"></role-board>
    <lineup-and-skill></lineup-and-skill>
    <ornaments-used></ornaments-used>
    <buff></buff>
  </div>
  <div>
    <el-button @click="calculate">计算1</el-button>
  </div>
</template>

<script>
import roleBoard from './components/roleBoard/roleBoard.vue'
import lineupAndSkill from './components/lineupAndSkill/lineupAndSkill.vue'
import ornamentsUsed from './components/ornamentsUsed/ornamentsUsed.vue'
import buff from './components/buff/buff.vue'
export default {
  name: 'calculatorVue',
  components: { roleBoard, ornamentsUsed, buff, lineupAndSkill },
  data () {
    return {
      form: [],
      star: 6,
      OrnamentsList: []
    }
  },
  created () {
    this.axios1()
  },
  methods: {
    calculate () {
      this.getData()
    },
    getData () {
      this.form = this.$refs.boardRef.form
      this.star = this.$refs.boardRef.star
      console.log(this.form)
    },
    async axios1 () {
      const axios = require('axios')
      try {
        const response = await axios.get('http://localhost:5050/heroData')
        this.OrnamentsList = response.data
        // console.log(response)
      } catch (error) {
        console.error(error)
      }
      // axios({
      //   methods: 'get',
      //   url: 'http://localhost:5050/heroData'
      // })
      //   .then(function (response) {
      //     // 处理成功情况
      //     that.OrnamentsList = response.data
      //     console.log(response.data)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
      // this.OrnamentsList =
      console.log(this.OrnamentsList)
    }
  }
}
</script>

<style lang="less" scoped>
div {
  display: inline-block;
}
.calculationBox {
  width: 400px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #000000;
}
</style>

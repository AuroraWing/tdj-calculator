<template>
  <div>
    welcome
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'welcomeVue',
  data () {
    return {

    }
  },
  created () {
    axios.get('/list').then(res => {
      console.log(res)
    })
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>

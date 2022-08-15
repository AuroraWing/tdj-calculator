<template>
  <div class="starBox">
    <span v-for="item in 6" :key="item" :class="(starValue < item ? 'star' : 'activeStar')" @click="changeStarLevel(item)">&#9733;</span>
  </div>
</template>

<script>
export default {
  name: 'starLevel',
  data () {
    return {
      starValue: 6
    }
  },
  props: {},
  watch: {
    starValue () {
      this.$emit('getstar')
    }
  },
  methods: {
    changeStarLevel (item) {
      this.starValue = item
    }
  }
}
</script>

<style lang="less" scoped>
.starBox {
  border-bottom: solid 1px #a7aeb5;
}
.star {
  font-size: 22px;
  color: #666;
  cursor:pointer
}
.activeStar {
  font-size: 22px;
  color: #F78233;
  cursor:pointer
}
</style>

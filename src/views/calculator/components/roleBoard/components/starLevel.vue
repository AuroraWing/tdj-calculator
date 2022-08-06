<template>
  <div>
    <span v-for="item in 6" :key="item" :class="(starValue < item ? 'star' : 'activeStar')" @click="changeStarLevel(item)">&#9733;</span>
  </div>
</template>

<script>
export default {
  name: 'starLevel',
  data () {
    return {
      starValue: 3
    }
  },
  props: {},
  methods: {
    changeStarLevel (item) {
      this.starValue = item
    }
  }
}
</script>

<style lang="less" scoped>
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

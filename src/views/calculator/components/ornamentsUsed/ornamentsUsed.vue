<template>
  <div class="ornamentsUsedBox">
    <circular-card :data="headOrna"></circular-card>
    <circular-card :data="bodyOrna"></circular-card>
    <circular-card :data="waistOrna"></circular-card>
    <circular-card :data="handOrna"></circular-card>
    <circular-card :data="stone"></circular-card>
  </div>
</template>

<script>
import circularCard from '@/components/circularCard.vue'
export default {
  name: 'ornamentsUsed',
  data () {
    return {
      headOrna: {
        label: '头部饰品',
        imgSrc: 'https://patchwiki.biligame.com/images/tdj/thumb/5/5b/r42z88qqi8twd9dui6k7des0rh2r2g1.png/100px-%E9%A5%B0%E5%93%81_%E5%A4%A9%E7%8B%BC%E8%A1%80%E7%9C%BC.png',
        imgBg: require('@/assets/ssr_bg.png'),
        name: '',
        option: []
      },
      bodyOrna: {
        label: '身部饰品',
        imgSrc: '',
        imgBg: '',
        name: '',
        option: []
      },
      waistOrna: {
        label: '腰部饰品',
        imgSrc: '',
        imgBg: '',
        name: '',
        option: []
      },
      handOrna: {
        label: '手部饰品',
        imgSrc: '',
        imgBg: '',
        name: '',
        option: []
      },
      stone: {
        label: '魂石套装',
        imgSrc: '',
        imgBg: '',
        name: '',
        option: []
      }
    }
  },
  methods: {},
  components: { circularCard }
}
</script>

<style lang="less" scoped>
.ornamentsUsedBox {
  padding: 6px 0px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  border-bottom: 1px solid #a7aeb5;
  height: 150px;
  background-color: #eaecf0;
}
</style>

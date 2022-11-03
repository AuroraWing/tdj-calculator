<template>
  <choose-popover
    :placement="popover.placement"
    :width="popover.width"
    :visible="visible.lintup"
    :offset="popover.offset"
  >
    <template #reference>
      <circular-card
        :data="lintup"
        @choose="visible.lintup = !visible.lintup"
      ></circular-card>
    </template>
    <template #popUp>
      <circular-img
        v-for="item in lintupArray"
        :key="item"
        :data="item"
      ></circular-img>
    </template>
  </choose-popover>
</template>

<script>
import circularImg from '@/components/circularImg.vue'
import choosePopover from '@/components/choosePopover.vue'
import circularCard from '@/components/circularCard.vue'
export default {
  name: 'lineupPopover',
  components: { circularCard, choosePopover, circularImg },
  data () {
    return {
      popover: {
        placement: 'bottom',
        width: 100,
        offset: -60
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>

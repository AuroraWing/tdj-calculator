<template>
  <div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'welcomeVue',
  data () {
    return {
    }
  },
  created () {
    this.test()
  },
  methods: {
    init () {
      const ManageBreadcrumbs = this.generateBreadcrumbs({ name: 'Manage', title: '系统管理' })
      const AccountBreadcrumbs = ManageBreadcrumbs({ name: 'AccountManage', title: '操作员管理' })
      // AccountBreadcrumbs()({ title: '添加操作员', name: 'AccountCreate' })
      AccountBreadcrumbs()({ title: '添加操作员', name: 'AccountCreate' })
    },
    generateBreadcrumbs (...baseBreadcrumbs) {
      return function (...breadcrumbs) {
        const totalBreadcrumbs = [...baseBreadcrumbs, ...breadcrumbs]
        if (breadcrumbs.length) {
          return this.generateBreadcrumbs(...totalBreadcrumbs)
        }
        return function (...breadcrumbs) {
          return [...totalBreadcrumbs, ...breadcrumbs]
        }
      }
    },
    forBread (...bread) {
      if (bread.length) {
        return this.forBread
      }
      return bread
    },
    test () {
      const abc = { name: 'sad' }
      this.log1(abc)
    },
    log1 (...parmrs) {
      console.log(parmrs)
    }
  }
}
</script>

<style lang="less" scoped>

</style>

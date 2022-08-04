<template>
    <el-menu default-active="1" :collapse="isCollapse">
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.path" :index="item.path">
            <el-icon>
                <!-- <icon-menu /> -->
            </el-icon>
            <template #title>{{item.label}}</template>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default  {
    data() {
        return {
            isCollapse: false,
            menu: [
                {
                    path: '/welcome',
                    name: 'welcome',
                    label: 'welcome',
                    icon: '',
                    url: ''
                },
                {
                    path: '/calculator',
                    name: 'calculator',
                    label: 'calculator',
                    icon: '',
                    url: ''
                }
            ]
        }
    },
    computed: {
        noChildren() {
            return this.menu.filter(item => !item.children)
        },
        hasChildren() {
            return this.menu.filter(item => item.children)
        }
    },
    methods:{
        changeCollapse () {
            this.isCollapse = !this.isCollapse
        },
        clickMenu (item) {
            this.$router.push({
                name: item.name
            })
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu {
    height: 100%;
}
</style>
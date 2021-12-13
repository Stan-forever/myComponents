<template>
    <div>
        <my-menu >
            
        </my-menu>
        <button @click="test()">
            11
        </button>
    </div>
</template>
<script>
import myMenu from '../components/myMenu.vue'
export default {
    components: {
        myMenu
    },
    name: "myMenu",
    data() {
        return {
            menuList: [
                {
                    id: 1,
                    title: '菜单1',
                    child: [
                        {
                            id: 11,
                            title: '菜单01'
                        },
                        {
                            id: 12,
                            title: '菜单02'
                        },
                        {
                            id: 13,
                            title: '菜单03'
                        }
                    ]
                },
                {
                    id: 2,
                    title: '菜单2',
                    child: [
                        {
                            id: 111,
                            title: '菜单001'
                        },
                        {
                            id: 112,
                            title: '菜单002'
                        },
                        {
                            id: 113,
                            title: '菜单003'
                        }
                    ]
                }
            ]
        }
    },
    props: {
    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style scoped>
</style>

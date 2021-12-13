import Vue from 'vue'
import VueRouter from "vue-router";
const ToolTip = () => import('../views/tooltip.vue')
const Menu = () => import('../views/menu.vue')
Vue.use(VueRouter)
const routes = [
    {
        path: '',
        redirect: '/tooltip'
    },
    {
        path: '/tooltip',
        component: ToolTip
    },
    {
        path: '/menu',
        component: Menu
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router
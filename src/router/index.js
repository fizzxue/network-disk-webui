import Vue from 'vue'
import VueRouter from 'vue-router'
import all from '../views/All'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/all'
    },
    {
        path: '/all',
        component: all
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

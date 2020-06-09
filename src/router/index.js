import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All'
import Picture from "../views/Picture";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/all'
    },
    {
        path: '/all',
        component: All
    },
    {
        path: '/picture',
        component: Picture
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

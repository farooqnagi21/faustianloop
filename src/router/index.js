import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/homepage'
import ServicePage from '../pages/service'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/service-page/:slug',
            name: 'servicePage',
            component: ServicePage,
        },
    ],
})

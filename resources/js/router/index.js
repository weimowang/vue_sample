

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Home from '../components/Home/Home.vue'
import Login from '../components/Login/Login.vue'

//404 errorpath
import Errorpath from '../components/Errorpath/Errorpath.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '*',
            name: 'errorpath',
            component: Errorpath,
        }

    ],
});
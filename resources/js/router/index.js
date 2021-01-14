

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Home from '../components/Home/Home.vue'
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
            path: '*',
            name: 'errorpath',
            component: Errorpath,
        }

    ],
});
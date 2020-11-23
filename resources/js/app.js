require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

import App from './components/App.vue'
import Home from './components/Home/Home.vue'

//404 errorpath
import Errorpath from './components/Errorpath/Errorpath.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'errorpath',
            component: Errorpath,
        }

    ],
});

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router
});

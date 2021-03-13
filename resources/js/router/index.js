

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Home from '../components/Home/Home.vue'
import Login from '../components/Login/Login.vue'
import Profile from '../components/Profile/Profile.vue'
//404 errorpath
import Errorpath from '../components/Errorpath/Errorpath.vue'

import Post from '../components/Post/Post.vue';
import Postdetail from '../components/Home/Postdetail.vue';


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
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/post',
            name: 'Post',
            component: Post
        },
        {
            path: '/postdetail/:postid',
            name: 'Postdetail',
            component: Postdetail
        },
        {
            path: '*',
            name: 'errorpath',
            component: Errorpath,
        }

    ],
});
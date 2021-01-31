import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './authorization.module'
import Posts from './posts.module'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Auth,
        Posts
    }
})
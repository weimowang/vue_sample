require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue'
import Axios from 'axios';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faUser)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false


import App from "./components/App.vue";
import router from './router'
import store from './store'

import { CHECK_AUTH } from "./store/action.type";

// hecked auth before each page load and refresh
router.beforeEach((to, from, next) => {
    store.dispatch(CHECK_AUTH).then(next);
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');



import { SET_AUTH } from "./mutation.type"
import { DO_LOGIN, DO_LOGOUT, CHECK_AUTH } from "./action.type";
import StoreService from "../utility/localstorage"

const state = {
     user: {},
     isAuthenticated: false
}

const getters = {
     currentUser(state) {
          return state.user;
     },
     check_Authenticated(state) {
          return state.isAuthenticated;
     }
}

const mutations = {
     [SET_AUTH](state, user) {
          StoreService.setLocstorage('token', user.auth)
          state.isAuthenticated = user.auth;
          state.user = user.userdata;
     }
}

const actions = {
     [DO_LOGIN](context, payload) {
          return new Promise(resolve => {
               let data = {
                    userdata: {
                         username: 'Vincent',
                         age: '30'
                    }, auth: true
               };
               context.commit(SET_AUTH, data);
               resolve(data);
          })
     },
     [DO_LOGOUT](context, payload) {
          return new Promise(resolve => {
               let data = {
                    userdata: {}, auth: false
               };
               context.commit(SET_AUTH, data);
               resolve(data);
          })
     },
     [CHECK_AUTH](context, payload) {
          // use localstorage token get user data
          const token = StoreService.getLocstorage('token');
          //call api by token
          if (token) {
               return new Promise(resolve => {
                    let data = {
                         userdata: {
                              username: 'Vincent',
                              age: '30'
                         }, auth: true
                    };
                    context.commit(SET_AUTH, data);
                    resolve(data);
               })
          } else {
               return new Promise(resolve => {
                    resolve();
               })
          }
     }
}

export default {
     state,
     actions,
     getters,
     mutations
};
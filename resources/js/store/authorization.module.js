import { SET_AUTH, DESTORY_AUTH } from "./mutation.type"
import { DO_LOGIN, DO_LOGOUT, CHECK_AUTH, DO_REFRESHTOKEN } from "./action.type";
import StoreService from "../utility/localstorage"
import { reject } from "lodash";

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
          StoreService.setLocstorage('token', user.token);
          StoreService.setLocstorage('refreshtoken', user.token);
          state.isAuthenticated = user.auth;
          state.user = user.userdata;
     },
     [DESTORY_AUTH](state, user) {
          StoreService.delLocstorage('token');
          StoreService.delLocstorage('refreshtoken');
          state.isAuthenticated = false;
          state.user = user;
     }
}

const actions = {
     [DO_LOGIN](context, payload) {
          //payload.username
          //payload.password
          return new Promise(resolve => {
               let data = {
                    userdata: {
                         username: 'Vincent',
                         age: '30'
                    }, auth: true, token: '123456', refreshtoken: 'r123'
               };
               context.commit(SET_AUTH, data);
               resolve(data);
          })
     },
     [DO_LOGOUT](context, payload) {
          return new Promise(resolve => {
               let data = {};
               context.commit(DESTORY_AUTH, data);
               resolve(data);
          })
     },
     [CHECK_AUTH](context, payload) {
          // use localstorage token get user data
          let token = StoreService.getLocstorage('token');
          let refreshtoken = StoreService.getLocstorage('refreshtoken');
          //call api by token
          let data = {};
          if (token) {
               return new Promise(resolve => {
                    data = {
                         userdata: {
                              username: 'Vincent',
                              age: '30'
                         },
                         auth: true,
                         token,
                         refreshtoken
                    };
                    context.commit(SET_AUTH, data);
                    resolve(data);
               }, reject => {
                    reject();
               })
          } else {
               context.commit(DESTORY_AUTH, data);
          }
     },
     [DO_REFRESHTOKEN]() {
          let token = StoreService.getLocstorage('refreshtoken');
          //call api by refreshtoken
          return new Promise(resolve => {
               let data = {
                    userdata: {
                         username: 'Vincent',
                         age: '30'
                    }, auth: true, token: '654321', refreshtoken: 'r321'
               };
               context.commit(SET_AUTH, data);
               resolve(data);
          })

     }
}

export default {
     state,
     actions,
     getters,
     mutations
};
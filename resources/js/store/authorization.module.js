
import { SET_AUTH } from "./mutation.type"
import { DO_LOGIN } from "./action.type";

const state = {
     user: {}
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
          state.isAuthenticated = true;
          state.user = user;
     }
}

const actions = {
     [DO_LOGIN](context,payload) {
          return new Promise(resolve => {
               let data = {
                    username: 'Vincent',
                    age: '30'
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
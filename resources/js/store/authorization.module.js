const state = {
     user:{}
}

const actions = {

}

const getters = {
     currentUser(state) {
          return state.user;
     },
     check_Authenticated(state){
          return state.isAuthenticated;
     }
}

const mutations = {
     set_auth(state, user){
          state.isAuthenticated = true;
          state.user = user;
     }
}

export default {
     state,
     actions,
     getters,
     mutations
};
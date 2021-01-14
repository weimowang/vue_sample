const state = {
     user:{}
}

const actions = {

}

const getters = {
     currentUser(state) {
          return state.user;
     }
}

const mutations = {
     SET_AUTH(state, user){
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
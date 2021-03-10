import { SET_POSTS } from "./mutation.type"
import { GET_POSTS, CREATE_POSTS, UPDATE_POSTS, DELETE_POSTS } from "./action.type";
import StoreService from "../utility/localstorage"
import axios from "axios";


const state = {
    posts: []
}

const getters = {
    post_datas() {
        return state.posts;
    },
}

const mutations = {
    [SET_POSTS](state, postdata) {
        state.posts = postdata.data;
    }

}

const actions = {
    [GET_POSTS](context, payload) {
        return new Promise(resolve => {
            axios.get("/api/posts")
                .then((res) => {
                    context.commit(SET_POSTS, res);
                    resolve(res);
                });
        });
    },
    [CREATE_POSTS](context, payload) {
        // create the post content
        return new Promise(resolve => {
            axios.post("/api/posts", payload).then((res) => {
                resolve(res);
            })
        })
    },
    [UPDATE_POSTS](context, payload) {
        //update by post id and content
        return new Promise(resolve => {
            axios.put("/api/posts/" + payload.id, payload)
                .then(function (res) {
                    resolve(res);
                })
        })
    },
    [DELETE_POSTS](context, payload) {
        //delete by post id 
        return new Promise(resolve => {
            axios.delete("/api/posts/" + payload.id)
                .then(function (res) {
                    resolve(res);
                })
        })
    },
}


export default {
    state,
    actions,
    getters,
    mutations
};
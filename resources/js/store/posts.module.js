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
        let url = "/api/posts";
        if (payload) {
            url += '/' + payload.id;
        }
        return new Promise(resolve => {
            axios.get(url)
                .then((res) => {
                    context.commit(SET_POSTS, res);
                    resolve(res);
                });
        });
    },
    [CREATE_POSTS](context, payload) {
        // create the post content
        return new Promise((resolve, reject) => {
            axios.post("/api/posts", payload).then((res) => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    [UPDATE_POSTS](context, payload) {
        //update by post id and content
        return new Promise((resolve, reject) => {
            axios.put("/api/posts/" + payload.id, payload)
                .then(function (res) {
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                })
        })
    },
    [DELETE_POSTS](context, payload) {
        //delete by post id 
        return new Promise((resolve, reject) => {
            axios.delete("/api/posts/" + payload.id)
                .then(function (res) {
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
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
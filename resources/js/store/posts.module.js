import { SET_POSTS, DESTORY_AUTH } from "./mutation.type"
import { GET_POSTS,CREATE_POSTS,UPDATE_POSTS,DELETE_POSTS } from "./action.type";
import StoreService from "../utility/localstorage"


const state = {
    posts: {}
}

const getters = {
    get_posts() {
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
        let token = StoreService.getLocstorage('token');
        return new Promise(resolve => {
            let res = {
                data: [{
                    id: 1,
                    title: 'title1',
                    author: 'vincent',
                    content: 'content smaple1 content smaple1 content smaple1 content smaple1'
                }, {
                    id: 2,
                    title: 'title2',
                    author: 'vincent',
                    content: 'content smaple2 content smaple2 content smaple2 content smaple2 content smaple2'
                }, {
                    id: 3,
                    title: 'title3',
                    author: 'vincent',
                    content: 'content smaple3 content smaple3 content smaple3 content smaple3'
                }, {
                    id: 4,
                    title: 'title4',
                    author: 'vincent',
                    content: 'content smaple4 content smaple4 content smaple4'
                }]
            };
            context.commit(SET_POSTS, res);
            resolve(res);
        })
    },
    [CREATE_POSTS](context, payload) {
    },
    [UPDATE_POSTS](context, payload) {
    },
    [DELETE_POSTS](context, payload) {
    },
}


export default {
    state,
    actions,
    getters,
    mutations
};
<template>
  <div>
    <div class="postmenu_list">
      <div
        class="pt_item"
        id="postlist"
        :class="{ acctive: isactive == 'postlist' }"
        @click="toggleMenu($event)"
      >
        文章列表
      </div>
      <div
        class="pt_item"
        id="postadd"
        :class="{ acctive: isactive == 'postadd' }"
        @click="toggleMenu($event)"
      >
        新增文章
      </div>
    </div>
    <form id="createform" class="createform" v-if="isAdd">
      <div class="form-group" :class="{ 'has-warning': titleWarning }">
        <label class="control-label"
          >標題
          <span class="warring" v-if="titleWarning">*必填</span>
        </label>
        <input class="form-control" v-model="post.title" />
      </div>
      <div class="form-group" :class="{ 'has-warning': bodyWarning }">
        <label class="control-label"
          >內容
          <span class="warring" v-if="bodyWarning">*必填</span>
        </label>
        <textarea class="form-control postbody" v-model="post.body"></textarea>
      </div>
      <div class="form-group">
        <label class="control-label"> 圖片路徑 </label>
        <textarea class="form-control" v-model="post.imageurl"></textarea>
      </div>
      <div class="form-group">
        <label class="control-label"> 作者 </label>
        <textarea class="form-control" v-model="post.author"></textarea>
      </div>
      <div class="addbtnwrap">
        <button class="postpublish" @click.prevent="create">發佈</button>
      </div>
    </form>

    <table class="contentwrap" v-else>
      <thead>
        <tr class="c_lheader">
          <th style="width: 5%">ID</th>
          <th style="width: 10%">作者</th>
          <th style="width: 20%">標題</th>
          <th style="width: 45%">內容</th>
          <th style="width: 10%">修改</th>
          <th style="width: 10%">刪除</th>
        </tr>
      </thead>
      <tbody v-for="(post, index) in post_datas" :key="index" class="c_body">
        <tr class="content_list">
          <td style="width: 5%">{{ index + 1 }}</td>
          <td style="width: 10%">{{ post.author }}</td>
          <td style="width: 20%">{{ post.title }}</td>
          <td style="width: 45%; text-align: left">{{ post.body }}</td>
          <td style="width: 10%">
            <button class="c_btn update" @click="update(post, index)">
              修改
            </button>
          </td>
          <td style="width: 10%">
            <button class="c_btn delete" @click="deletepost(post.id)">
              刪除
            </button>
          </td>
        </tr>
        <tr class="content_list" v-if="isUpdate && Updateindex === index">
          <div id="updateform" class="createform">
            <div class="update-group">
              <label class="update-label">標題</label>
              <input
                class="update-control"
                v-model="update_post.title"
                style="height: 2em"
              />
            </div>
            <div class="update-group">
              <label>內容</label>
              <textarea
                class="update-control"
                rows="7"
                v-model="update_post.body"
              >
              </textarea>
            </div>
            <div>
              <button class="u_btn l" @click.prevent="updatepost(update_post)">
                儲存
              </button>
              <button class="u_btn r" @click.prevent="cancelupdate">
                取消
              </button>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import {
  GET_POSTS,
  CREATE_POSTS,
  UPDATE_POSTS,
  DELETE_POSTS,
  Ｆ,
} from "../../store/action.type";
export default {
  data() {
    return {
      isactive: "postlist",
      posts: [],
      update_post: {
        id: 0,
        title: "",
        body: "",
      },
      post: {
        id: 0,
        title: "",
        body: "",
      },
      titleWarning: false,
      bodyWarning: false,
      isAdd: false,
      isSave: false,
      isUpdate: false,
      Updateindex: 0,
    };
  },

  methods: {
    showAdd: function (bol) {
      this.isAdd = bol;
    },
    init: function () {
      this.$store.dispatch(GET_POSTS).then((res) => {});
    },
    create: function () {
      let _self = this;
      let request_data = this.post;
      this.titleWarning = this.post.title.trim().length == 0;
      this.bodyWarning = this.post.body.trim().length == 0;
      if (this.titleWarning || this.bodyWarning) return;
      this.$store.dispatch(CREATE_POSTS, request_data).then((res) => {
        _self.init();
        _self.titleWarning = false;
        _self.bodyWarning = false;
        _self.isAdd = false;
        _self.isactive = "postlist";
      });
    },
    deletepost: function (id) {
      let _self = this;
      this.$store.dispatch(DELETE_POSTS, { id }).then((res) => {
        if (res.data["ok"]) {
          _self.init();
        }
      });
    },
    updatepost: function (_post) {
      let _self = this;
      this.$store.dispatch(UPDATE_POSTS, _post).then((res) => {
        _self.init();
        _self.isUpdate = false;
        _self.update_post.title = "";
        _self.update_post.body = "";
        _self.update_post.id = 0;
      });
    },
    update: function (post, _index) {
      this.update_post.id = post.id;
      this.update_post.title = post.title;
      this.update_post.body = post.body;
      this.Updateindex = _index;
      this.isUpdate = true;
    },
    cancelupdate: function () {
      this.isUpdate = false;
    },
    toggleMenu: function (ev) {
      let _id = ev.target.id;
      this.isactive = _id;
      this.isAdd = _id == "postlist" ? false : true;
    },
  },

  computed: {
    ...mapGetters(["post_datas"]),
  },

  mounted: function () {
    //init to load the post data from api
    this.init();
  },
};
</script>

<style scoped>
@import "../../../css/postedit.css";
</style>
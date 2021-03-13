<template>
  <div class="postdetail_wrap">
    <div
      class="topbg"
      :style="{ 'background-image': 'url(' + post_datas.imageurl + ')' }"
    >
      <span class="pd_title">{{ post_datas.title }}</span>
    </div>
    <div class="post_content">
      {{ post_datas.body }}
      <div class="p_footer">
        <div class="author_img">
          <img src="/images/aimg.jpg" width="90" height="90" />
        </div>
        <div class="author_content">
          <span> 作者 : {{ post_datas.author }} </span>
          <span> 日期 : {{ post_datas.created_at }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { GET_POSTS } from "../../store/action.type";

export default {
  name: "Postdetail",
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
        imageUrl: "",
        author: "",
      },
    };
  },
  methods: {
    init: function () {
      let _self = this;
      this.$store
        .dispatch(GET_POSTS, { id: _self.$route.params.postid })
        .then((res) => {
          console.log(res);
          //todo
        });
    },
  },
  computed: {
    ...mapGetters(["post_datas"]),
  },
  mounted: function () {
    //get the post by id
    this.init();
  },
};
</script>
<style scoped>
@import "../../../css/postdetail.css";
</style>
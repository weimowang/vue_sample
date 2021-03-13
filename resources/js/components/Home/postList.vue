<template>
  <div>
    <div v-for="(post, key, index) in post_datas" :key="index">
      <div class="post_wrap" @click="togodetail(post)">
        <div class="left_p">
          <div class="left_p_img"></div>
        </div>
        <div class="right_p">
          <div class="p_title">{{ post.title }}</div>
          <div class="content">{{ subbody(post.body) }}</div>
          <div class="todetail">view detail</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  components: {},
  props: {
    post_datas: Array | Object,
  },
  methods: {
    togodetail(post) {
      this.$router.push({ name: "Postdetail", params: { postid: post.id } });
    },
    subbody: function (body) {
      const body_limit = 65;
      body =
        body.length > body_limit ? body.substring(0, body_limit) + "..." : body;
      return body;
    },
  },
};
</script>
<style scoped>
@import "../../../css/postlist.css";
</style>
<template>
  <div>
    <div
      class="post_wrap"
      v-for="(post, key, index) in post_datas"
      :key="index"
    >
      <div class="left_p">
        <div class="left_p_img"></div>
      </div>
      <div class="right_p">
        <div class="p_title">{{ post.title }}</div>
        <div class="content">{{ post.body }}</div>
        <div class="author">{{ post.author }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  components: {},
  props: {
    post_datas: Array,
  },
  methods: {},
};
</script>
<style scoped>
@import "../../../css/post.css";
</style>
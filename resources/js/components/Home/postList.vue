<template>
  <div>
    <div
      class="post_wrap"
      v-for="(post, key, index) in posts_data"
      :key="index"
    >
      <div class="left_p">
           <div class="left_p_img"></div>
      </div>
      <div class="right_p">
        <div class="p_title">{{ post.title }}</div>
        <div class="content">{{ post.content }}</div>
        <div class="author">{{ post.author }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PostList",
  components: {},
  props: {
    posts_data: Array,
  },
  methods: {
    to_p_detail() {
      //this.$router.push({name:'postdetail'})
    },
  },
};
</script>
<style scoped>
@import "../../../css/post.css";
</style>
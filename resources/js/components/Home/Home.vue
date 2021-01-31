<template>
  <div class="home_wrap">
    <PostList :posts_data.sync="posts_data" :class="['left_wrap']"></PostList>
    <Sidetoolbar :class="['right_wrap']"></Sidetoolbar>
  </div>
</template>

<script>
import PostList from "./Postlist";
import Sidetoolbar from "./Sidetoolbar";

import { mapState, mapGetters } from "vuex";
import { GET_POSTS } from "../../store/action.type";

export default {
  name: "Home",
  components: {
    PostList,
    Sidetoolbar,
  },
  data() {
    return {
      posts_data: [],
    };
  },
  computed: {
    ...mapGetters(["currentUser", "check_Authenticated"]),
  },
  mounted: function () {
    this.$store.dispatch(GET_POSTS, {}).then((res) => {
      this.posts_data = res.data;
    });
  },
  methods: {},
};
</script>
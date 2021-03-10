<template>
  <div class="home_wrap">
    <PostList :post_datas.sync="post_datas" :class="['left_wrap']"></PostList>
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
    };
  },
  computed: {
    ...mapGetters(["currentUser", "check_Authenticated", "post_datas"]),
  },
  mounted: function () {
    this.$store.dispatch(GET_POSTS).then((res) => {
      //success todo
    });
  },
};
</script>
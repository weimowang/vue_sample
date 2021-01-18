<template>
  <div>
    首頁
    <!-- <div>{{ this.$store.getters.currentUser.username }}</div> -->
    <div v-if="currentUser.username">{{ currentUser.username }}</div>

    <button @click="check()">check</button>
    <PostList></PostList>
  </div>
</template>

<script>
import PostList from "./postList.vue";
import { mapState ,mapGetters} from "vuex";

export default {
  name: "Home",
  components: {
    PostList,
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    check() {
      debugger;
    },
  },
};
</script>
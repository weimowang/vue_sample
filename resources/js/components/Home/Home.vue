<template>
  <div>
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
    ...mapGetters(["currentUser","check_Authenticated"])
  },
  methods: {
    check() {
      debugger;
    },
  },
};
</script>
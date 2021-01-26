<template>
  <div>
    <h1 class="login-title">Sign In</h1>
    <form class="loginform" @submit.prevent="onSubmit(username, password)">
      <div class="login_input">
        <span>帳號：</span>
        <input type="text" v-model="username" placeholder="username" />
      </div>
      <div class="login_input">
        <span>密碼：</span>
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <div class="login_btnarea">
        <button class="loginbtn">登入</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { DO_LOGIN } from "../../store/action.type";
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit: function (username, password) {
      this.$store
        .dispatch(DO_LOGIN, {
          username,
          password,
        })
        .then((res) => {
          this.$router.push({ name: "Home" });
        });
    },
  },
  computed: {
    ...mapGetters(["check_Authenticated"]),
  },
};
</script>

<template>
  <div>
    <h1 class="login-title">Sign in</h1>
    <form class="loginform" @submit.prevent="onSubmit(username, password)">
      <div>
        <span>帳號：</span>
        <input
          type="text"
          v-model="username"
          placeholder="username"
        />
      </div>
      <div>
        <span>密碼：</span>
        <input
          type="password"
          v-model="password"
          placeholder="password"
        />
      </div>
      <button class="loginbtn">登入</button>
    </form>
    <button @click="check()">check</button>
    <div>{{ currentUser }}</div>
  </div>
</template>
<script >
import { mapState } from "vuex";
import { DO_LOGIN } from "../../store/action.type";
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit: function (username,password) {
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
    ...mapState(["currentUser"]),
  },
};
</script>
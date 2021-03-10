<template>
  <div>
    <nav class="menu">
      <i class="fas fa-user"></i>
      <a id="menubtn" class="toggle-nav" href="#" @click="toggle">&#9776;</a>
      <div class="menu-logo">
        <router-link :to="{ name: 'Home' }" style="text-decoration: none"
          >Sample Blog</router-link
        >
      </div>
      <ul id="menuUl" :class="{ active: showtoggle }">
        <li
          v-for="(item, key, index) in menuList"
          :key="index"
          :class="[{ current_active: item.name == $route.name }]"
          v-show="item.state"
        >
          <router-link :to="{ name: item.type }">{{ item.txt }}</router-link>
        </li>
        <li class="user_info" v-if="check_Authenticated" @click="Logout()">
          <font-awesome-icon icon="user" style="padding-right: 0.4em" />
          <span>{{ currentUser.username }}</span>
          <div class="logout">登出</div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { DO_LOGOUT } from "../../store/action.type";

export default {
  name: "Header",
  data: function () {
    return {
      menuData: [
        {
          id: 0,
          name: "Home",
          type: "Home",
          txt: "首頁",
          state: true,
          // icon: 'fa fa-tag context-menu__title-icon',
        },
        {
          id: 1,
          name: "Profile",
          type: "Profile",
          txt: "帳戶管理",
          state: false,
          // icon: 'fa fa-tag context-menu__title-icon',
        },
        {
          id: 2,
          name: "Post",
          type: "Post",
          txt: "文章管理",
          state: false,
          // icon: 'fa fa-tag context-menu__title-icon',
        },
        {
          id: 3,
          name: "Login",
          type: "Login",
          txt: "登入",
          state: false,
          // icon: 'fa fa-tag context-menu__title-icon',
        },
      ],
      showtoggle: true,
    };
  },
  methods: {
    //click yhe hambuger menu
    toggle: function () {
      this.showtoggle = !this.showtoggle;
    },
    Logout: function () {
      this.$store.dispatch(DO_LOGOUT, {}).then((res) => {
        this.$router.go(0);
      });
    },
  },
  computed: {
    ...mapGetters(["currentUser", "check_Authenticated"]),
    menuList() {
      this.menuData = this.menuData.map((e, i) => {
        if (i === 0) {
          e.state = true;
        } else if (i === 3) {
          e.state = !this.check_Authenticated;
        } else {
          e.state = this.check_Authenticated;
        }
        return e;
      });
      return this.menuData;
    },
  },
};
</script>
<style scoped>
@import "../../../css/menu.css";
</style>
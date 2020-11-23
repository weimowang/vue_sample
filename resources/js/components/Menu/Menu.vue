<template>
  <div>
    <nav class="menu">
      <a id="menubtn" class="toggle-nav" href="#" @click="toggle">&#9776;</a>
      <div class="menu-logo">
        <a>WEI UPWARD</a>
      </div>
      <ul id="menuUl" :class="{ active: showtoggle }">
        <li
          v-for="(item, key, index) in menuData"
          :key="index"
          :class="highlightli(item.type)"
          @click="toggleLi(item.type)"
        >
          <router-link :to="{ name: item.type }">{{ item.txt }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data: function () {
    return {
      menuData: [
        {
          id: 0,
          name: "home",
          type: "home",
          txt: "首頁",
          // icon: 'fa fa-tag context-menu__title-icon',
        },
        {
          id: 1,
          name: "projects",
          type: "projects",
          txt: "專案項目",
          // icon: 'fa fa-tag context-menu__title-icon',
        },
        {
          id: 2,
          name: "contact",
          type: "contact",
          txt: "聯絡我們",
          // icon: 'fa fa-tag context-menu__title-icon',
        },
      ],
      current_li: "home",
      showtoggle: true,
    };
  },
  methods: {
    //click yhe hambuger menu
    toggle: function () {
      this.showtoggle = !this.showtoggle;
    },
    //click the li
    toggleLi: function (name) {
      this.current_li = name;
    },
    //li hightlight
    highlightli: function (name) {
      return {
        "current-active": this.current_li === name,
      };
    },
  },
  computed: {},
};
</script>
<style>
.menu {
  width: 100%;
  display: flex;
  background: #272626;
  /* border-radius: 4px 4px 4px 4px; */
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
}

.menu li {
  float: left;
  list-style: none;
  margin: 0px 50px 0px 0px;
  font-size: 16px;
}

.menu li a {
  text-decoration: none;
  color: rgb(146, 151, 150);
  transition: color linear 0.15s;
  cursor: pointer;
}

.menu .menu-logo {
  margin: auto;
  margin-left: 0px;
  padding: 10px 10px 10px 20px;
}

.menu .menu-logo a {
  color: #fff;
}

.menu a:hover,
.menu .current-active a {
  text-decoration: none;
  color: #337275;
}

.toggle-nav {
  display: none;
}

@media screen and (max-width: 767px) {
  .menu {
    position: relative;
    display: inline-block;
  }
  .toggle-nav {
    position: absolute;
    left: 4%;
    color: #ffffff;
    text-decoration: none;
    line-height: 40px;
  }
  .menu .menu-logo {
    position: relative;
    left: 40%;
  }
  .menu ul.active {
    display: none;
  }
  .menu ul {
    left: 0px;
    padding: 10px 25px;
    margin-top: -5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
    border-radius: 0px 0px 3px 3px;
    background: #272626;
  }
  .menu li {
    margin: 10px 0px 10px 0px;
    float: none;
    display: block;
  }
  .menu a {
    display: block;
  }
}
</style>
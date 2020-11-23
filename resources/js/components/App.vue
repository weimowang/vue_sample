<template>
  <div>
    <Menu></Menu>

    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
//------ menu ------
import Menu from "./Menu/Menu.vue";

export default {
  components: {
    Menu
  }
};

</script>
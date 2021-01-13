<template>
  <div>
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
//------ menu ------
import Header from "./Common/Header.vue";
import Footer from "./Common/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
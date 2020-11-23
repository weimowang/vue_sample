<template>
  <div>
    <div class="head_img"></div>
    <Aboutus></Aboutus>
    <Service></Service>
  </div>
</template>

<script>
import Aboutus from "./Aboutus.vue";
import Service from "./Service.vue";

export default {
  components: {
    Aboutus,
    Service,
  },
  name: "Home",
  data: function () {
    return {
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>

.head_img{
  background-image: url();
}


</style>
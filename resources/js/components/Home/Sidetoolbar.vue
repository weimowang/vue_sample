<template>
  <div class="sidetool_wrap">
    <Calendar color="teal" is-dark :attributes="attributes"></Calendar>
    <Recentpost></Recentpost>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Calendar from "v-calendar/lib/components/calendar.umd";
import Recentpost from "./Recentpost";
export default {
  components: {
    Calendar,
    Recentpost,
  },
  data() {
    return {
      date: new Date(),
      attributes: [
        {
          highlight: true,
          content: "teal",
          dates: new Date(),
        },
      ],
    };
  },
};
</script>
<style scoped>
@import "../../../css/sidetoolbar.css";
</style>
<template>
  <div class="sidetool_wrap">
    <Calendar color="teal" is-dark :attributes="attributes"></Calendar>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Calendar from "v-calendar/lib/components/calendar.umd";

export default {
  components: {
    Calendar,
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
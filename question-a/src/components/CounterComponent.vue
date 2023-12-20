<template>
  <div>
    <!-- we are passing data and method as a props to 
    child component it is a example of parent-child 
    communication -->
    <click-counter :increment="incrementClick" :clickCount="clickCount" />
    <!--     
    Here we are listining to the event emmitted from 
    child component -->
    <hover-counter @increment="incrementHover" :hoverCount="hoverCount" />
  </div>
</template>

<script>
import ClickCounter from "./ClickCounter.vue";
import HoverCounter from "./HoverCounter.vue";

export default {
  components: { ClickCounter, HoverCounter },
  name: "CounterComponent",
  data() {
    return {
      hoverCount: 0,
      clickCount: 0,
    };
  },
  methods: {
    incrementClick(count) {
      console.log(count);
      this.clickCount = count;
    },
    incrementHover(count) {
      console.log(count);
      this.hoverCount = count;
    },
  },
};
</script>

<style scoped>
</style>
<template>
  <div>
    <h1>Click counter - {{ clickCount }}</h1>

    <!-- On button click we are sending data from child 
    component to parent component it is a example of 
    child parent communication. -->
    
    <button @click="increment(++count)">Click</button>

    <!-- Here we are using showInAlert method provided by mixin -->

    <button @click="showInAlert()">Alert</button>
  </div>
</template>

<script>
import mixin from "./mixin/mixin";
export default {
  name: "ClickCounter",
  //In order to use mixin we have to write mixins property
  // and need to mention mixin in array
  mixins: [mixin],
  data() {
    return {
      count: this.$props.clickCount, //here we are
      //storing props in child component data as props are immutable
    };
  },

  props: {
    //here we are defining props
    clickCount: Number,
    increment: Function,
  },
};
</script>

<style>
</style>
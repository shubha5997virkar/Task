<template>
  <div>
    <h1>Hover counter - {{ hoverCount }}</h1>

    <!-- Here we are emmiting event from child component 
    and listen to that event in parent component it 
    is a form of child-parent communication -->

    <button @mouseover="$emit('increment', ++count)">Hover</button>

    <!-- Here we are using showInAlert method provided by mixin -->

    <button @click="showInAlert()">Alert</button>
  </div>
</template>

<script>
import mixin from "./mixin/mixin";
export default {
  name: "HoverCounter",
  //In order to use mixin we have to write mixins property
  // and need to mention mixin in array
  mixins: [mixin],
  data() {
    return {
      //setting props to data as props are immutable
      count: this.$props.hoverCount,
    };
  },

  props: {
    //defining props here
    hoverCount: Number,
  },
};
</script>

<style>
</style>
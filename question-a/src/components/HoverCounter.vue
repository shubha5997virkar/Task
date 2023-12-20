<template>
  <div class="container">
  <div class="card">
    <h1>Hover counter - {{ hoverCount }}</h1>

    <!-- Here we are emmiting event from child component 
    and listen to that event in parent component it 
    is a form of child-parent communication -->

    <button @mouseover="$emit('increment', ++count)">Hover</button>

    <!-- Here we are using showInAlert method provided by mixin -->

    <button @click="showInAlert()" class="alert">Alert</button>
  </div>
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

<style scoped>
.card{
  background-color: cadetblue;
  width:250px;
  height: 250px;
  text-align: center;
  padding:10px;
  margin-top:10px;
  
}
.container{
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
}
button{
  background-color: blue;
  width: 100px;
  height:30px;
  color:white;
  border-radius: 5px;
  margin-top:50px;
  margin-right:5px
}

.alert{
  background-color: red;
  width: 100px;
  height:30px;
  color:white;
  border-radius: 5px;
  margin-top:50px;
  margin-right:5px
}
</style>
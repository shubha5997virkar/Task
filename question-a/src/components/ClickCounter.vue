<template>
  <div class="container">
    <div class="card">
    <h1>Click counter - {{ clickCount }}</h1>

    <!-- On button click we are sending data from child 
    component to parent component it is a example of 
    child parent communication. -->
    
    <button @click="increment(++count)">Click</button>

    <!-- Here we are using showInAlert method provided by mixin -->

    <button @click="showInAlert()" class="alert">Alert</button>
  </div>
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

<style scoped>
.card{
  background-color: cadetblue;
  width:250px;
  height: 250px;
  text-align: center;
  padding:10px
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
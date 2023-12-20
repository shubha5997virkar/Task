<template>
 
 <div class="container">
  <button v-if="$props.page != 1" @click="$props.setPage(--$props.page)">prev</button>
  <div   v-for="user in getArrLength" :key="user">
  
  
  <div @click="setPage(user)" class="pagination" style="font-size: large;font-weight: bold;"  v-if="page==user">{{ user }}</div>
  <div @click="setPage(user)" class="pagination"   v-if="page!=user">{{ user }}</div>
 

</div>
<button v-if="$props.page!= getArrLength" @click="$props.setPage(++$props.page)">next</button>
 </div>
  
  
</template> 

<script>
export default {
  name: "PaginationComponent",
  props: {
    users: Array,
    setPage:Function,
    page:Number
  },
  data(){
  return {
    arrLength:this.$props.users.length
  }
  },
  mounted() {
    console.log("users", this.$props.users);
  },
  computed:{
     getArrLength(){
      return this.arrLength/2
     }
  }
};
</script>

<style scoped>
.pagination {
  width: 20px;
  text-align: center;
  cursor:pointer;
}

.container{
  display: flex;
 flex-direction: row;
 padding-left: 45%;
 margin-top:10px;

}


</style> 
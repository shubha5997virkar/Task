<template>
    <div>
        <input placeholder="Search" @input="searchEnter"/>
    </div>
  
</template>

<script>
export default {
name:'SearchComponent',
props:{
    searchEnter:Function
}
}
</script>

<style>

</style>
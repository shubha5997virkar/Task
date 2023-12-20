<template>
  <div>
    <h1>User Component</h1>
   <div class="form"><input placeholder="Search" v-model="search" /></div>
      

    

    <table border="2px solid black">
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in getUsers" :key="index" v-show="search!=''">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            {{ user?.address?.street }}, {{ user?.address?.suite }} ,
            {{ user?.address?.city }}, {{ user?.address?.zipcode }},
            {{ user?.address?.geo?.lat }},
            {{ user?.address?.geo?.lng }}
          </td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
          <td>
            {{ user.company.name }}{{ user.company.catchPhrase }}
            {{ user.company.bs }}
          </td>
        </tr>
        <tr v-for="(user, index) in getPageResult" :key="index" v-show="search==''">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            {{ user?.address?.street }}, {{ user?.address?.suite }} ,
            {{ user?.address?.city }}, {{ user?.address?.zipcode }},
            {{ user?.address?.geo?.lat }},
            {{ user?.address?.geo?.lng }}
          </td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
          <td>
            {{ user.company.name }}{{ user.company.catchPhrase }}
            {{ user.company.bs }}
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComponent v-if="getUsers.length !=0" :setPage="setPage" :page="page" :users="getUsers"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PaginationComponent from "./PaginationComponent.vue";

export default {
  name: "UsersComponent",
  components: { PaginationComponent },
  data() {
    return {
      page: 1,
      search: "",
      skip: 0,
      limit: 2,
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    getPageResult(){
      const startIndex = (this.page-1)* this.limit;
      const lastIndex = this.page * this.limit;
     return this.$store.getters.getPageResult({startIndex,lastIndex})
    },
    getUsers(){
      return this.$store.getters.getUsers
    }
  },
  watch: {
    search(newValue, oldValue) {
      console.log("oldValue", oldValue);
      console.log("newValue", newValue);
      this.getSearchResult({ search: newValue });
      if (newValue == "") {
        this.$store.dispatch({
          type: "setUsersAction"
        });
      }
    }
  },

  mounted() {
    this.$store.dispatch({
      type: "setUsersAction",
 
    });
  },
  methods: {
    setPage(num) {
        console.log('num',num)
     this.page = num;
    },
    ...mapActions({
      getSearchResult: "getSearchResult",
      setUsersAction: "setUsersAction",
      getPageResult:'getPageResult'
    }),
  },
};
</script>

<style scoped>
th {
  background: black;
  color: white;
  height: 40px;
}
input{
  padding:8px;
  width:20%;
}

.form{
  text-align: end;
  margin-bottom:10px
}

</style>
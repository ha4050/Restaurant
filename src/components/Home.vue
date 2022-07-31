<template>
  <Header />
  <h1>Hello{{ name }}, Welcome to my home page</h1>
  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td><router-link :to="'/Update/' + item.id">update</router-link></td>
      <button v-on:click="deleteR(item.id)">Delete</button>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import Header from "./header.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },
methods: {
    async deleteR(id)
    {
    let result = await axios.delete("http://localhost:3000/restaurant/"+id);
    if(result.status==200)
    {
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurant=result.data;
    }
    }

},
  async mounted() {
    let user = localStorage.getItem("user-info");
   this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    // console.warn(result);
    this.restaurant = result.data;
  },
};
</script>

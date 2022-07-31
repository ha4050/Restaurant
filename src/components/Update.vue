<template>
<Header />
    <h1>Hello, Welcome to my Update Restaurant page</h1>

     <form>
        <input type="text" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" placeholder="Enter Address" v-model="restaurant.address">
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact">
        <router-link to="/Home">
        <button v-on:click="UpdateRestaurant()">Add New Restaurant</button>
        </router-link>
    </form>
    </template>

    <script>
import axios from 'axios';
    import Header from './header.vue'
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Update",
    components:{
        Header
    },
 data() {
        return {
        restaurant:{
            name:'',
            address:'',
            contact:''
        }
    }
    },
    methods: {
        async UpdateRestaurant(){
            console.warn("function called", this.restaurant)
            const result = await axios.put(
                "http://localhost:3000/restaurant" + this.$route.params.id,
                {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact,
                }
            );
            // console.warn(result);
            if(result.status==200)
            {
                this.$router.push({name:'Home'})
            }
        }
    },
        async mounted() {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    const result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id)
    },
    };
    </script>
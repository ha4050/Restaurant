<template>
<Header />
    <h1>Hello, Welcome to my Add Restaurant page</h1>
    <form>
        <input type="text" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" placeholder="Enter Address" v-model="restaurant.address">
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact">
        <router-link to="/Home">
        <button v-on:click="Add01()">Add New Restaurant</button>
        </router-link>
    </form>
    </template>

    <script>
import axios from 'axios';
    import Header from './header.vue'
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Add",
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
    async Add01(){
        console.warn(this.name, this.address, this.contact);
        var result = await axios.post("http://localhost:3000/restaurant",{
            name: this.restaurant.name,
            address: this.restaurant.address,
            contact: this.restaurant.contact
        });
        console.warn(result)
        if(result.status==201)
        {
            this.$router.push({path:'/'})
        }
    }
},

         mounted() {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    },
    };
    </script>
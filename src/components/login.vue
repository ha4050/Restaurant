<template>
    <h1>Login page</h1>
    <div class="register">
        
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="text" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="Login">Login Here</button>
        <p>
            <router-link to="/Sign-up">Signup</router-link>
</p>
    </div>
</template>

<script>

import axios from 'axios';
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'login',
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods: {
       async Login()
        {
            let result = await axios.get(`http://localhost:3000/user?email=$(this.email)&password=$(this.password)`);
      

    if(result.status==200 && result.data.length>0){
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({name: "Home"});
    }
    },
},
mounted()
{
    let user = localStorage.getItem('user-info');
    if(user)
    {
        this.$router.push({name:'Home'})
    }
}
}

</script>
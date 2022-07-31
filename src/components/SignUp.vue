<template>
<img class="logo" src="../assets/ll.jpg" />
    <h1>Sign Up</h1>

    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="text" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Sign Up</button>
<p>
            <router-link to="/login">Login</router-link>
</p>

    </div>
  
</template>

<script>

import axios from 'axios'
export default{
    name:'SignUp',

    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
       async signUp()
        {
            console.warn("signUp",this.name,this.email,this.password)
            let result = await axios.post("http://localhost:3000/user",{
                email:this.email,
                name:this.name,
                password:this.password
        });
    console.warn(result);
    if(result.status==201)
    {
        alert("Sign up done")
     }
     localStorage.setItem("user-info",JSON.stringify(result.data))
     this.$router.push({name:'Home'})
    }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    },
}

</script>

<style>
.logo{
    width: 100px;
}

h1{
    color:darkcyan;
    font-size: 40px;
    font-family: 'Times New Roman', Times, serif;
}
.register input{
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-block: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font:bold;
}
</style>
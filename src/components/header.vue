<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="Add">Add Restaurant</router-link>
       <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'login'})
        }
    }
}

</script>

<style>
.nav{
    background: #333;
    overflow: hidden;
}

.nav a{
    float:left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
</style>
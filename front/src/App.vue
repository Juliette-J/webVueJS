<template>
  <MyHeader/>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/characters">Characters</router-link> | 
    <router-link to="/enemies">Enemies</router-link> 
  </nav>
  <router-view/>
  <MyFooter/>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'HomeView',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(137, 0, 0);
  color: white;
  margin: 1em;
  padding: 1em;
}

nav a {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-decoration: none;
  font-size: 1.3em;
  color: white;
}

nav a.router-link-exact-active {
  color: #7be2b4;
}
</style>

<template>
  <h1>Genshin Impact Galery</h1>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/characters">Characters</router-link> | 
    <router-link to="/enemies">Enemies</router-link> 
  </nav>
</template>

<script>
export default {
  name: 'MyHeader',
}
</script>

<style scoped>
h1 {
  font-size: 3em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>

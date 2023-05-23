<template>
  <h1>Genshin Impact Galery</h1>
  <nav>
    <a href="">Artifacts</a>
    <a href="">Characters</a>
    <a href="">Weapons</a>
  </nav>
  <h2>Welcome to Genshin Impact Galery !</h2>
  <p>Here is a galery for Genshin Impact features.</p>
</template>

<script>
export default {
  name: 'MyHeader',
}
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
}

h2 {
  font-size: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}

nav{
  display: flex;
  justify-content: space-around;
  margin-bottom: 2.3em;
  background-color: rgb(127, 0, 0);
  margin: 1.2em;
  padding: 0.8em;
}

a{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: white;
  color:  rgb(127, 0, 0);
  text-decoration: none;

  border: 1.5px solid black;
  padding: 4px;
  padding-left: 7px;
  padding-right: 7px;
}

p{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  color: rgb(56, 56, 56);
}
</style>

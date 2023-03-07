<template>
  <h1>Welcome to Genshin Impact Galery !</h1>
  <nav>
    <a href="">Artifacts</a>
    <a href="">Characters</a>
    <a href="">Elements</a>
    <a href="">Nations</a>
    <a href="">Weapons</a>
  </nav>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
}

nav{
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
}

a{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(188, 17, 17);
  text-decoration: none;

  border: 1.5px solid black;
  padding: 4px;
  padding-left: 7px;
  padding-right: 7px;
}
</style>

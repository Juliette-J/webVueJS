<template>
  <footer>
    <h3>by Juliette Jeannin</h3>
    <p>Link to <a href="https://genshin.dev/">Genshin Impact API</a></p>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style scoped>
footer {
  background-color:  rgb(127, 0, 0);
  width: 90%;
  margin-left: 5%;
  margin-top: 2em;
  padding: 0.1em;
}

h3 {
  font-size: 1em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  text-align: center;
}

p, a {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  text-align: center;
}

a:hover {
  color: rgb(197, 197, 197);
}
</style>

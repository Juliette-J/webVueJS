<template>
  <div>
    <img alt="" :href="pictureURL">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'CharacterFrame',
  props: {
    name: String,
    pictureURL: String
  }
}
</script>

<style scoped>
div {
  border: 2px solid black;
  padding: 8px;
  margin: 7px;
}

p {
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 30px;
  padding: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

</style>

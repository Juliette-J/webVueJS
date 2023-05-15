<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ title }}</p>
    <p>{{ vision }}</p>
    <p>{{ weapon }}</p>
    <p>{{ rarity }}</p>
    <p>{{ birthday }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CharacterFrame',
  props: {
    name: String,
    title: String,
    vision: String,
    weapon: String,
    rarity: Number,
    birthday: String,
    description: String
  },
}
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 1em;
  margin: 0.6em;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1em;
  padding: 1em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>

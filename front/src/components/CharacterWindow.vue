<template>
  <div class="card">
    <picture>
      <source :srcset="pictureURL" type="image/webp">
      <img :src="pictureURL" alt="">
    </picture>
    <p>{{ name }}</p>
    <p>{{ title }}</p>
    <p>{{ vision }}</p>
    <p>{{ rarity }}</p>
    <!--
    <p>{{ weapon }}</p>
    <p>{{ birthday }}</p>
    <p>{{ description }}</p>
    -->
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
  data() {
    return {
      pictureURL: "https://api.genshin.dev/characters/" + this.name.toLowerCase() + "/icon-big" }
  }
}
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 1em;
  margin: 0.6em;
  max-width: 9em;
  box-shadow: 3px 3px gray;
}

div:hover {
  box-shadow: none;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1em;
  padding: 1em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

img {
  max-width: 8.5em;
}
</style>

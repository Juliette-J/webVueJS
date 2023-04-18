<template>
  <div>
    <picture>
      <source :srcset="pictureURL" type="image/webp">
      <img :src="pictureURL" alt="">
    </picture>

    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'CharacterFrame',
  props: {
    name: String
  },
  data() {
    return {
      pictureURL: "https://api.genshin.dev/characters/" + this.name + "/icon-big"    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  height: 100px;
  width: 260px;
  padding: 1em;
  margin: 0.6em;
}

p {
  text-transform: uppercase;
  font-size: 1.2em;
  padding: 1em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

img {
  max-height: 100px;
}

</style>

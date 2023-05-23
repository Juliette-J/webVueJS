<template>
  <div class="card" v-show="isVisible == false">
    <picture >
      <source :srcset="iconURL" type="image/webp">
        <img class="icon" :src="iconURL" alt="">
    </picture>

    <div class="infos">
      <p>{{ name }}</p>
      <picture >
        <source :srcset="visionURL" type="image/webp">
        <img class="vision" :src="visionURL" alt="">
      </picture>
      <button v-on:click="changeVisibility" value="">+</button>
    </div>
  </div>

  <div class="big-card" v-show="isVisible == true">
    <picture>
      <source :srcset="cardURL" type="image/webp">
      <img class="full-icon" :src="cardURL" alt="">
    </picture>

    <div class="infos">
      <p>Name : {{ name }}</p>
      <p>Vision : {{ vision }}</p>
      <picture >
        <source :srcset="visionURL" type="image/webp">
        <img class="vision" :src="visionURL" alt="">
      </picture>
      <p>Date of birth : {{ birthday }}</p>
      <p>Title : {{ title }}</p>
      <p>Rarity : {{ rarity }} stars</p>
      <p>Weapon : {{ weapon }}</p>
      
      <p>{{ description }}</p>
      <button v-on:click="changeVisibility" value="">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterWindow',
  props: {
    // isVisible: Boolean,
    name: String,
    title: String,
    vision: String,
    weapon: String,
    rarity: Number,
    birthday: String,
    description: String
  },
  // emits: ["update:isVisible"],
  data() {
    return {
      iconURL: "https://api.genshin.dev/characters/" + this.name.toLowerCase() + "/icon-big",
      cardURL: "https://api.genshin.dev/characters/" + this.name.toLowerCase() + "/card",
      visionURL: "https://api.genshin.dev/elements/" + this.vision.toLowerCase() + "/icon",
      isVisible: false
    }
  },
  methods: {
    /*
    onChangeVisibility () {
      this.$emit("update:isVisible", this.isVisible)
    }, */
    changeVisibility: function() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 1em;
  margin: 0.6em;
  width: 12em;
  box-shadow: 3px 3px gray;
}

.big-card {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 1em;
  margin: 0.6em;
  width: 45%;
  box-shadow: 3px 3px gray;
}
.infos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div:hover {
  box-shadow: none;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.icon {
  max-width: 7em;
  margin-right: 1em;
}

.full-icon {
  max-height: 30em;
  margin-right: 1em;
}

button {
  width: 1.5em;
  margin-top: 1em;
}
</style>

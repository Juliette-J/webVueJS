<template>
  <!-- Little card-->
  <div class="card" v-show="isVisible == false">
    <!-- Default picture-->
    <picture v-if="this.name.includes('traveler') == true">
      <source :srcset="defaultURL" type="image/webp">
        <img class="icon" :src="defaultURL" alt="">
    </picture>
    
    <picture v-if="this.name.includes('traveler') == false">
      <source :srcset="iconURL" type="image/webp">
        <img class="icon" :src="iconURL" alt="">
    </picture>

    <div class="infos">
      <p class="name">{{ name.split('|')[0] }}</p>
      <p>{{ rarity }} stars</p>
      <picture >
        <source :srcset="visionURL" type="image/webp">
          <img class="vision" :src="visionURL" alt="">
      </picture>
      <button v-on:click="changeVisibility" value="">+</button>
    </div>
  </div>
  
   <!-- Detailed card-->
  <div class="big-card" v-show="isVisible == true">
    <div class="infos">
      <picture>
        <source :srcset="cardURL" type="image/webp">
          <img class="full-icon" :src="cardURL" alt="">
      </picture>
      <p>Name : {{ name.split('|')[0] }}</p>
      <p>Title : {{ title }}</p>
      <p>Date of birth : {{ birthday }}</p>
      <p>Rarity : {{ rarity }} stars</p>
      <p>Vision : {{ vision }}</p>
      <picture >
        <source :srcset="visionURL" type="image/webp">
          <img class="vision" :src="visionURL" alt="">
      </picture>
      <p>Nation : {{ nation }}</p>
      <p>Affiliation : {{ affiliation }}</p>
      <p>Weapon : {{ weapon }}</p>
      <p>Constellation : {{ constellation }}</p>
      <p>{{ description }}</p>

      <button v-on:click="changeVisibility" value="">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    name: String,
    title: String,
    birthday: String,
    rarity: Number,
    vision: String,
    nation: String,
    affiliation: String,
    weapon: String,
    constellation: String,
    description: String
  },
  data() {
    return {
      iconURL: "https://api.genshin.dev/characters/" + this.name.split('|')[1].toLowerCase() + "/icon-big",
      defaultURL: "https://api.genshin.dev/characters/" + this.name.split('|')[1].toLowerCase() + "/icon",
      cardURL: "https://api.genshin.dev/characters/" + this.name.split('|')[1].toLowerCase() + "/card",
      visionURL: "https://api.genshin.dev/elements/" + this.vision.toLowerCase() + "/icon",
      isVisible: false
    }
  },
  methods: {
    changeVisibility: function() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>
.card, .big-card {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 1em;
  margin: 0.6em;
  width: 12em;
  box-shadow: 3px 3px gray;
}
.big-card {
  width: 40%;
  max-width: 20em;
}
.card:hover, .big-card:hover {
  box-shadow: 5px 5px #7be2b4;
}
.infos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.2em;
  margin: 0;
}
.icon {
  width: 90%;
  margin-right: 1em;
}
.full-icon {
  width: 100%;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.9em;
}

button {
  width: 1.5em;
  margin-top: 1em;
  background-color: rgb(137, 0, 0);
  color: white;
  border: none;
}
</style>

<template>
   <!-- Little card-->
  <div class="card" v-show="isVisible == false">
    <picture>
      <source :srcset="iconURL" type="image/webp">
        <img class="icon" :src="iconURL" alt="">
    </picture>

    <div class="infos">
      <p class="name">{{ name.split('|')[0] }}</p>
      <p>{{ type }}</p>
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
      <p>Type : {{ type }}</p>
      <p>Region : {{ region }}</p>
      <p>Family : {{ family }}</p>
      <p>Elements : {{ elements }}</p>
      <p>{{ description }}</p>

      <button v-on:click="changeVisibility" value="">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnemyCard',
  props: {
    name: String,
    region: String,
    type: String,
    family: String,
    elements: Array,
    description: String
  },
  data() {
    return {
      iconURL: "https://api.genshin.dev/enemies/" + this.name.split('|')[1].toLowerCase() + "/icon",
      cardURL: "https://api.genshin.dev/enemies/" + this.name.split('|')[1].toLowerCase() + "/icon",
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
  font-size: 0.9em;
  
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

button {
  width: 1.5em;
  margin-top: 1em;
  background-color: rgb(137, 0, 0);
  color: white;
  border: none;
}
</style>

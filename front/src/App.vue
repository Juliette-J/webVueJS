<template>
  <MyHeader/>
  <MyHomePage/>
  <div class="chars-gallery">
    <div class="gallery-options">
      <input type="text" v-model="search" placeholder="Chercher un personnage">
      <button v-if="search" @click="cleanSearch">X</button>

      <label for="char-sort">Trier par : </label>
      <select v-model="charsSortType" id="char-sort">
        <option value="AZName">Noms de A à Z</option>
        <option value="ZAName">Noms de Z à A</option>
      </select>
      
      <label for="rarity-sort">Rareté : </label>
      <select v-model="rarity" id="rarity-sort">
        <option value="3">3 étoiles</option>
        <option value="4">4 étoiles</option>
        <option value="5">5 étoiles</option>
      </select>
    </div>

    <div>
      <!--
      <CharacterFrame 
        v-for="character in characters" 
        :key="character" 
        :name="character"/>
      -->

      <CharacterWindow 
        v-show="isVisible == true"
        v-for="character in charactersOrdered"
        :key="character.name + character.vision"
        :name="character.name"
        :title="character.title"
        :vision="character.vision"
        :weapon="character.weapon"
        :rarity="character.rarity"
        :birthday="character.birthday"
        :description="character.description"/>

        <button v-on:click="changeVisibility" value="">+</button> 
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyHomePage from './components/MyHomePage.vue'
//import CharacterFrame from './components/CharacterFrame.vue'
import CharacterWindow from './components/CharacterWindow.vue'

import { getCharacters, getCharactersData } from './services/charAPI.js'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyHomePage,
    //CharacterFrame,
    CharacterWindow
  },
  watch: {
    search: function(newSearch) {
      localStorage.setItem("search", newSearch)
    },
    charsSortType: function(newCharsSortType) {
      localStorage.setItem("charsSortType", newCharsSortType)
    }
  },
  created: function() {
    this.retrieveChars()
  },
  computed: {
    charactersOrdered: function() {
      const reversed = ["ZAName"].includes(this.charsSortType)
      const filterFunc = (a) => a["name"].toLowerCase().includes(this.search.toLowerCase())
      const comparator = (a,b) => a.name.localeCompare(b.name)
      let data = this.charactersData.filter(filterFunc)
      data = data.sort(comparator)
      if (reversed) data = data.reverse()
      return data
    }
  },
  data() {
    return {
      characters: [],
      charactersData: [],
      isVisible: true,
      rarity: "",
      search: localStorage.getItem("search") || "",
      charsSortType: localStorage.getItem("charsSortType") || "AZName"
    }
  },
  methods: {
    async retrieveChars() {
      this.characters = await getCharacters()
      console.log(this.characters) 
      for(let i = 0; i < this.characters.length; i++) {
      this.charactersData.push(await getCharactersData(this.characters[i]))
      }
    },
    cleanSearch: function() { 
      this.search = ""
    },
    changeVisibility : function() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

<template>
  <MyHeader/>
  <MyHomePage/>
  <div>
    <div class="gallery-options">
      <div class="first-bar">
        <input class="search" type="text" v-model="search" placeholder="Chercher un personnage">
        <button v-if="search" @click="cleanSearch">X</button>
      </div>  

      <div class="second-bar">  
        <label for="char-sort">Trier par : </label>
        <select v-model="charsSortType" id="char-sort">
          <option value="AZName">Noms de A à Z</option>
          <option value="ZAName">Noms de Z à A</option>
        </select>
      
        <label for="rarity-filter">Rareté : </label>
        <select v-model="charsRarity" id="rarity-filter">
          <option value="">Toutes</option>
          <option value="4">4 étoiles</option>
          <option value="5">5 étoiles</option>
        </select>

        <label for="nation-filter">Nation : </label>
        <select v-model="charsNation" id="nation-filter">
          <option value="">Toutes</option>
          <option value="Mondstadt">Mondstadt</option>
          <option value="Liyue">Liyue</option>
          <option value="Inazuma">Inazuma</option>
          <option value="Outlander">Autre</option>
        </select>
      </div>
    </div>

    <div class="gallery">
      <!--
      <CharacterFrame 
        v-for="character in characters" 
        :key="character" 
        :name="character"/>
      

      <CharacterWindow 
        v-for="character in charactersOrdered"
        v-model:isVisible="isVisible"
        v-on:update:isVisible="changeVisibility"/>-->
        <CharacterWindow 
        v-for="character in charactersOrdered"
        :key="character.name + character.vision"
        :name="character.name"
        :title="character.title"
        :vision="character.vision"
        :weapon="character.weapon"
        :rarity="character.rarity"
        :birthday="character.birthday"
        :description="character.description"/>
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
    },
    charsRarity: function(newCharsRarity) {
      localStorage.setItem("charsRarity", newCharsRarity)
    },
    charsNation: function(newCharsNation) {
      localStorage.setItem("charsNation", newCharsNation)
    }
  },
  created: function() {
    this.retrieveChars()
  },
  computed: {
    charactersOrdered: function() {
      const reversed = ["ZAName"].includes(this.charsSortType)
      const nameFilterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
      const rarityFilterFunc = (a) => a.rarity.toString().includes(this.charsRarity)
      const nationFilterFunc = (a) => a.nation.includes(this.charsNation)
      const nameComparator = (a,b) => a.name.localeCompare(b.name)
      let data = this.charactersData.filter(nameFilterFunc).filter(rarityFilterFunc).filter(nationFilterFunc)
      data = data.sort(nameComparator)
      if (reversed) data = data.reverse()
      return data
    }
  },
  data() {
    return {
      characters: [],
      charactersData: [],
      search: localStorage.getItem("search") || "",
      charsSortType: localStorage.getItem("charsSortType") || "AZName",
      charsRarity: localStorage.getItem("charsRarity") || "",
      charsNation: localStorage.getItem("charsNation") || ""
      //isVisible: false
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
    } /*,
    changeVisibility: function() {
      this.isVisible = !this.isVisible
    } */
  }
}
</script>

<style scoped>
.gallery-options {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}
.search {
  width: 90%;
  margin-left: 5%;
}
.first-bar, .second-bar {
  margin: 0.7em;
  justify-content: space-around;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

label {
  margin-left: 0.7em;
  margin-right: 0.5em;
}
</style>

<template>
  <MyHeader/>
  <div>
    <div class="gallery-options">
      <div class="first-bar">
        <input class="search" type="text" v-model="search" placeholder="Searching for...">
        <button v-if="search" @click="cleanSearch">X</button>
      </div>  

      <div class="second-bar">  
        <label for="char-sort">Sort by : </label>
        <select v-model="charsSortType" id="char-sort">
          <option value="AZName">Names from A to Z</option>
          <option value="ZAName">Names from Z to A</option>
        </select>
      
        <label for="rarity-filter">Rarity : </label>
        <select v-model="charsRarity" id="rarity-filter">
          <option value="">All</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>

        <label for="vision-filter">Vision : </label>
        <select v-model="charsVision" id="vision-filter">
          <option value="">All</option>
          <option value="Anemo">Anemo</option>
          <option value="Cryo">Cryo</option>
          <option value="Dendro">Dendro</option>
          <option value="Electro">Electro</option>
          <option value="Geo">Geo</option>
          <option value="Hydro">Hydro</option>
          <option value="Pyro">Pyro</option>
        </select>
        
        <label for="nation-filter">Nation : </label>
        <select v-model="charsNation" id="nation-filter">
          <option value="">All</option>
          <option value="Mondstadt">Mondstadt</option>
          <option value="Liyue">Liyue</option>
          <option value="Inazuma">Inazuma</option>
          <option value="Outlander">Autre</option>
        </select>

        <label for="weapon-filter">Weapon : </label>
        <select v-model="charsWeapon" id="weapon-filter">
          <option value="">All</option>
          <option value="Bow">Bow</option>
          <option value="Catalyst">Catalyst</option>
          <option value="Claymore">Claymore</option>
          <option value="Polearm">Polearm</option>
          <option value="Sword">Sword</option>
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
      <CharacterCard
        v-for="character in charactersOrdered"
        :key="character.name + character.vision"
        :name="character.name"
        :title="character.title"
        :birthday="character.birthday"
        :rarity="character.rarity"
        :vision="character.vision"
        :nation="character.nation"
        :affiliation="character.affiliation"
        :weapon="character.weapon"
        :constellation="character.constellation"
        :description="character.description"/>
    </div>
  </div>
  <MyFooter/>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
//import CharacterFrame from './components/CharacterFrame.vue'
import CharacterCard from './components/CharacterCard.vue'

import { getCharacters, getCharactersData } from './services/charAPI.js'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    //CharacterFrame,
    CharacterCard
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
    charsVision: function(newCharsVision) {
      localStorage.setItem("charsVision", newCharsVision)
    },
    charsNation: function(newCharsNation) {
      localStorage.setItem("charsNation", newCharsNation)
    },
    charsWeapon: function(newCharsWeapon) {
      localStorage.setItem("charsWeapon", newCharsWeapon)
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
      const visionFilterFunc = (a) => a.vision.includes(this.charsVision)
      const nationFilterFunc = (a) => a.nation.includes(this.charsNation)
      const weaponFilterFunc = (a) => a.weapon.includes(this.charsWeapon)
      const nameComparator = (a,b) => a.name.localeCompare(b.name)
      let data = this.charactersData.filter(nameFilterFunc).filter(rarityFilterFunc).filter(visionFilterFunc).filter(nationFilterFunc).filter(weaponFilterFunc)
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
      charsVision: localStorage.getItem("charsVision") || "",
      charsNation: localStorage.getItem("charsNation") || "",
      charsWeapon: localStorage.getItem("charsWeapon") || ""
      //isVisible: false
    }
  },
  methods: {
    async retrieveChars() {
      this.characters = await getCharacters()
      console.log(this.characters) 
      for(let i = 0; i < this.characters.length; i++) {
        this.charactersData.push(await getCharactersData(this.characters[i]))
        this.charactersData[i].name += "|" + this.characters[i]
      }
    },
    cleanSearch: function() { 
      this.search = ""
    }/* ,
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

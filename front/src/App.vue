<template>
  <MyHeader/>
  <MyHomePage/>

  <input type="text" v-model="search" placeholder="Search">
  <select v-model="selected">
		<option value="3">3 étoiles</option>
    <option value="4">4 étoiles</option>
    <option value="5">5 étoiles</option>
	</select>

  <div>
    <CharacterFrame 
      v-for="character in characters" 
      :key="character" 
      :name="character"/>

    <button v-on:click="changeVisibility" value="">+</button>

    <CharacterWindow 
      v-show="isVisible == true"
      v-for="character in charactersData"
      :key="character.name"
      :title="character.title"
      :vision="character.vision"
      :weapon="character.weapon"
      :rarity="character.rarity"
      :birthday="character.birthday"
      :description="character.description"/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyHomePage from './components/MyHomePage.vue'
import CharacterFrame from './components/CharacterFrame.vue'
import CharacterWindow from './components/CharacterWindow.vue'

import { getCharactersData, getCharacterData } from './services/charAPI.js'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyHomePage,
    CharacterFrame,
    CharacterWindow
  },
  data() {
    return {
      characters: [],
      charactersData: [],
      isVisible: false,
      search: "",
      selected: ""
    }
  },
  created: function() {
    this.retrieveCharsData()
  },
  methods: {
    async retrieveCharsData() {
      this.characters = await getCharactersData()
      for(let i = 0; i < this.characters.length; i++) {
        this.charactersData.push(await getCharacterData(this.characters[i]))
      }
      /*this.characters.forEach( (element) => {
        this.charactersData.push(getCharacterData(element))
      })*/
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

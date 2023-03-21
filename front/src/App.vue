<template>
  <MyHeader/>
  <MyHomePage/>
  <div>
    <CharacterFrame 
      v-for="character in charactersData" 
      :key="character" 
      :name="character"/>

    {{ characterData }}

  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyHomePage from './components/MyHomePage.vue'
import CharacterFrame from './components/CharacterFrame.vue'

import { getCharactersData, getCharacterData } from './services/charAPI.js'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyHomePage,
    CharacterFrame
  },
  data() {
    return {
      charactersData: [],
      characterData: []
    }
  },
  created: function() {
    this.retrieveData()
  },
  methods: {
    async retrieveData() {
      this.charactersData = await getCharactersData(),
      this.charactersData.forEach(element => {
        this.characterData = getCharacterData(element)
      });
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

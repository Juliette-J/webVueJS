<template>
  <MyHeader/>
  <MyHomePage/>
  <div>
    
    <CharacterFrame 
      v-for="character in charactersData" 
      :key="character" 
      :name="character"
      :pictureURL="characterPicture"/>

    {{ characterPicture }}

  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyHomePage from './components/MyHomePage.vue'
import CharacterFrame from './components/CharacterFrame.vue'

import { getCharactersData , getPicture } from './services/charAPI.js'

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
      characterPicture: []
    }
  },
  created: function() {
    this.retrieveData(),
    this.retrievePic()
  },
  methods: {
    async retrieveData() {
      this.charactersData = await getCharactersData()
    },
    async retrievePic() {
      this.charactersData.forEach(char => {
        this.characterPicture = getPicture(char)
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

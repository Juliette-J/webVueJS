<template>
  <MyHeader/>
  <MyHomePage/>
  <div>
    <CharacterFrame v-bind:name="allCharData[0]"/>
    <CharacterFrame v-bind:name="allCharData[1]"/>
    <CharacterFrame v-bind:name="allCharData[2]"/>
    <CharacterFrame v-bind:name="allCharData[3]"/>
    <CharacterFrame v-bind:name="allCharData[4]"/>
    <CharacterFrame v-bind:name="allCharData[5]"/>
    <CharacterFrame v-bind:name="allCharData[6]"/>
    <CharacterFrame v-bind:name="allCharData[7]"/>
    <CharacterFrame v-bind:name="allCharData[8]"/>
  </div>
  <!--{{ charData }} -->
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyHomePage from './components/MyHomePage.vue'
import CharacterFrame from './components/CharacterFrame.vue'

import { getAllCharData /*, getCharData CONTINUE HERE*/ } from './services/charAPI.js'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyHomePage,
    CharacterFrame
  },
  data() {
    return {
      //charData: [],
      allCharData: []
    }
  },
  created: function() {
    this.retrieveCharData()
  },
  methods: {
    async retrieveCharData() {
      this.allCharData = await getAllCharData()
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

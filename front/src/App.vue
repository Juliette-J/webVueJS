<template>
  <MyHeader/>
  <MyHomePage/>
  <div>
    <CharacterFrame name="Ayato"/>
    <CharacterFrame name="Jean"/>
    <CharacterFrame name="Diluc"/>
    <!-- 
    <CharacterFrame v-bind:name="persosData[0].name"/>
    <CharacterFrame v-bind:name="persosData[1].name"/>
    <CharacterFrame v-bind:name="persosData[2].name"/>
    <CharacterFrame v-bind:name="persosData[3].name"/>
    {{ persosData }}-->
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyHomePage from './components/MyHomePage.vue'
import CharacterFrame from './components/CharacterFrame.vue'

//import { getPersosData } from './services/persoAPI.js'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyHomePage,
    CharacterFrame
  }
  /*
  data() {
    return {
      persosData: []
    }
  },
  created: function() {
    this.retrievePersosData()
  },
  methods: {
    retrievePersosData() {
      this.persosData = getPersosData()
    }
  } */
  
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
}
</style>

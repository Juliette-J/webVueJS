<template>
  <MyHeader/>
  <div>
    <CharacterWindow/>
    <CharacterWindow/>
    <CharacterWindow/>
    <CharacterWindow/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import CharacterWindow from './components/CharacterWindow.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    CharacterWindow
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
}
</style>

<template>
  <div>Hi, I'm {{ name }}</div>
</template>

<script>
export default {
  name: 'CharacterFrame',
  props: {
    name: String
  }
}
</script>

<style scoped>
div {
  font-size: 20px;
  margin-top: 30px;
  padding: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>

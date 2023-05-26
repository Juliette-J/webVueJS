<template>
    <div>
      <h2>Welcome to Genshin Impact Galery !</h2>
      <p>Here is a galery for some Genshin Impact features.</p>
      <p>You can learn more about Genshin characters and enemies through different pages.</p>
      <picture>
      <source :srcset="iconURL" type="image/webp">
        <img class="icon" :src="iconURL" alt="">
      </picture>
    </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      iconURL: "https://play-lh.googleusercontent.com/0nO1yjTCf-aCIiZxEsAI7Hph3RN3BYbgDkWNSclkKM-UHzLGolG6PVkG5ePonl2rPzk=w600-h300-pc0xffffff-pd"
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 1.2em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.9em;
  text-align: center;
}

img {
  max-width: 20em;
  margin: 2em;
}
</style>
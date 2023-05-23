<template>
  <div>
    <CharactersGalleryOptions v-model:search="search" v-model:charsSortType="charsSortType" v-model:charsRarity="charsRarity" v-model:charsVision="charsVision" v-model:charsNation="charsNation" v-model:charsWeapon="charsWeapon"/>

    <div class="gallery">
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
</template>

<script>
import CharactersGalleryOptions from '../components/CharactersGalleryOptions.vue'
import CharacterCard from '../components/CharacterCard.vue'
import { getCharacters, getCharactersData } from '../services/charactersAPI.js'

export default {
  name: 'App',
  components: {
    CharactersGalleryOptions,
    CharacterCard
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
    }
  }
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1.7em;
}

label {
  margin-left: 0.7em;
  margin-right: 0.5em;
}
</style>
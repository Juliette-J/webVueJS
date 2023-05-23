<template>
  <div class="gallery-options">
      <div class="first-bar">
        <input type="text" class="search" :value="search" @input="onSearchChanged" placeholder="Searching for...">
        <button v-if="search" @click="cleanSearch">X</button>
      </div>  

      <div class="second-bar">  
        <label for="char-sort">Sort by : </label>
        <select id="char-sort" :value="charsSortType" @input="onCharsSortTypeChanged">
          <option value="AZName">Names from A to Z</option>
          <option value="ZAName">Names from Z to A</option>
        </select>
      
        <label for="rarity-filter">Rarity : </label>
        <select id="rarity-filter" :value="charsRarity" @input="onRarityFilter">
          <option value="">All</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>

        <label for="vision-filter">Vision : </label>
        <select id="vision-filter" :value="charsVision" @input="onVisionFilter">
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
        <select id="nation-filter" :value="charsNation" @input="onNationFilter">
          <option value="">All</option>
          <option value="Mondstadt">Mondstadt</option>
          <option value="Liyue">Liyue</option>
          <option value="Inazuma">Inazuma</option>
          <option value="Outlander">Autre</option>
        </select>

        <label for="weapon-filter">Weapon : </label>
        <select id="weapon-filter" :value="charsWeapon" @input="onWeaponFilter">
          <option value="">All</option>
          <option value="Bow">Bow</option>
          <option value="Catalyst">Catalyst</option>
          <option value="Claymore">Claymore</option>
          <option value="Polearm">Polearm</option>
          <option value="Sword">Sword</option>
        </select>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CharactersGalleryOptions',
  props: {
    search: String,
    charsSortType: String,
    charsRarity: String,
    charsVision: String,
    charsNation: String,
    charsWeapon: String
  },
  emits: ["update:search", "update:charsSortType", "update:charsRarity", "update:charsVision", "update:charsNation", "update:charsWeapon" ],
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
  methods: {
    cleanSearch: function() { 
      this.$emit('update:search', "")
    },
    onSearchChanged(event) {
      this.$emit('update:search', event.target.value)
    },
    onCharsSortTypeChanged(event) {
      this.$emit('update:charsSortType', event.target.value)
    },
    onRarityFilter(event) {
      this.$emit('update:charsRarity', event.target.value)
    },
    onVisionFilter(event) {
      this.$emit('update:charsVision', event.target.value)
    },
    onNationFilter(event) {
      this.$emit('update:charsNation', event.target.value)
    },
    onWeaponFilter(event) {
      this.$emit('update:charsWeapon', event.target.value)
    }
    
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

label {
  margin-left: 0.7em;
  margin-right: 0.5em;
}
</style>

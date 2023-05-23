<template>
  <div class="gallery-options">
      <div class="first-bar">
        <input type="text" class="search" :value="search" @input="onSearchChanged" placeholder="Searching for...">
        <button v-if="search" @click="cleanSearch">X</button>
      </div>  

      <div class="second-bar">  
        <label for="enemy-sort">Sort by : </label>
        <select id="enemy-sort" :value="enemiesSortType" @input="onEnemiesSortTypeChanged">
          <option value="AZName">Names from A to Z</option>
          <option value="ZAName">Names from Z to A</option>
        </select>
      
        <label for="region-filter">Region : </label>
        <select id="region-filter" :value="enemyRegion" @input="onRegionFilter">
          <option value="">All</option>
          <option value="Global">Global</option>
          <option value="Multiple">Multiple</option>
          <option value="Dragonspine">Dragonspine</option>
          <option value="Monstadt">Mondstadt</option>
          <option value="Liyue">Liyue</option>
        </select>

        <label for="type-filter">Type : </label>
        <select id="type-filter" :value="enemyType" @input="onTypeFilter">
          <option value="">All</option>
          <option value="Elite">Elite</option>
          <option value="Common">Common</option>
        </select>
      </div>
    </div>
</template>

<script>
export default {
  name: 'EnemiesGalleryOptions',
  props: {
    search: String,
    enemiesSortType: String,
    enemyRegion: String,
    enemyType: String
  },
  emits: ["update:search", "update:enemiesSortType", "update:enemyRegion", "update:enemyType" ],
  watch: {
    search: function(newSearch) {
      localStorage.setItem("search", newSearch)
    },
    enemiesSortType: function(newEnemiesSortType) {
      localStorage.setItem("enemiesSortType", newEnemiesSortType)
    },
    enemyRegion: function(newEnemyRegion) {
      localStorage.setItem("enemyRegion", newEnemyRegion)
    },
    enemyType: function(newEnemyType) {
      localStorage.setItem("enemyType", newEnemyType)
    }
  },
  methods: {
    cleanSearch: function() { 
      this.$emit('update:search', "")
    },
    onSearchChanged(event) {
      this.$emit('update:search', event.target.value)
    },
    onEnemiesSortTypeChanged(event) {
      this.$emit('update:enemiesSortType', event.target.value)
    },
    onRegionFilter(event) {
      this.$emit('update:enemyRegion', event.target.value)
    },
    onTypeFilter(event) {
      this.$emit('update:enemyType', event.target.value)
    }
  }
}
</script>

<style scoped>
.gallery-options {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.9em;
  margin-left: 0.7em;
  margin-right: 0.5em;
}
</style>

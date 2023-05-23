<template>
  <div>
    <EnemiesGalleryOptions v-model:search="search" v-model:enemiesSortType="enemiesSortType" v-model:enemyRegion="enemyRegion" v-model:enemyType="enemyType"/>

    <div class="gallery">
     <EnemyCard
        v-for="enemy in enemiesOrdered"
        :key="enemy.id"
        :name="enemy.name"
        :region="enemy.type"
        :type="enemy.region"
        :family="enemy.family"
        :elements="enemy.elements"
        :description="enemy.description"/>
    </div>
  </div>
</template>

<script>
import EnemiesGalleryOptions from '../components/EnemiesGalleryOptions.vue'
import EnemyCard from '../components/EnemyCard.vue'
import { getEnemies, getEnemiesData } from '../services/enemiesAPI.js'

export default {
  name: 'App',
  components: {
    EnemiesGalleryOptions,
    EnemyCard
  },
  created: function() {
    this.retrieveEnemies()
  },
  computed: {
    enemiesOrdered: function() {
      const reversed = ["ZAName"].includes(this.enemiesSortType)
      const nameFilterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
      const regionFilterFunc = (a) => a.region.toString().includes(this.enemyRegion)
      const typeFilterFunc = (a) => a.type.includes(this.enemyType)
      const nameComparator = (a,b) => a.name.localeCompare(b.name)
      let data = this.enemiesData.filter(nameFilterFunc).filter(regionFilterFunc).filter(typeFilterFunc)
      data = data.sort(nameComparator)
      if (reversed) data = data.reverse()
      return data
    }
  },
  data() {
    return {
      enemies: [],
      enemiesData: [],
      search: localStorage.getItem("search") || "",
      enemiesSortType: localStorage.getItem("enemiesSortType") || "AZName",
      enemyRegion: localStorage.getItem("enemyRegion") || "",
      enemyType: localStorage.getItem("enemyType") || ""
    }
  },
  methods: {
    async retrieveEnemies() {
      this.enemies = await getEnemies()
      console.log(this.enemies) 
      for(let i = 0; i < this.enemies.length; i++) {
        this.enemiesData.push(await getEnemiesData(this.enemies[i]))
        this.enemiesData[i].name += "|" + this.enemies[i]
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
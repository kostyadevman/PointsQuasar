<template>
  <yandex-map
  :coords="[54.62896654088406, 39.731893822753904]"
  zoom="10"
  style="width: 100%; height: 100%;"
  :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
  :behaviors="['drag']"
  :controls="['fullscreenControl', 'zoomControl']"
  map-type="map"
>

    <ymap-marker
      v-for="(p, index) in points"
      :key="index"
      :coords="p.coords"
      hint-content="p.name"
      cluster-name="p.name"
      markerId="p.name"
    ></ymap-marker>
</yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import points from '../assets/point_list'
export default {
  name: 'MapP',
  components: {
    yandexMap,
    ymapMarker
  },
  data () {
    return {
      points: points
    }
  }
}
</script>

<style scoped>

</style>

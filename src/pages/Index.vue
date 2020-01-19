<template>
  <q-page class="flex flex-center">
    <q-splitter
      id="photos"
      v-model="splitterModel"
      :limits="[0, 100]"
      style="position: absolute; width: 100%; height: 100%"
      before-class="overflow-hidden"
      after-class="overflow-hidden"
    >

      <template v-slot:before>
        <p-table :points="points"></p-table>
      </template>

      <template v-slot:after>
        <q-resize-observer @resize="onResizeMap"/>
        <p-map :points="points" ref="map"></p-map>
      </template>

    </q-splitter>

  </q-page>
</template>

<script>
import TableP from '../components/TableP.vue'
import MapP from '../components/MapP.vue'
import { getPoints } from '../api'

export default {
  name: 'PageIndex',
  components: {
    'p-table': TableP,
    'p-map': MapP
  },
  data () {
    return {
      splitterModel: 20, // start at 50%
      points: []
    }
  },

  methods: {
    // we are using QResizeObserver to keep
    // this example mobile-friendly
    onResizeMap () {
      this.$refs.map.onSizeChanged()
    }
  },
  mounted () {
    const self = this
    getPoints().then(function (response) {
      self.points = response.data
    })
  }
}
</script>

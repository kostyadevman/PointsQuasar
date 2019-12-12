<template>
  <q-page class="flex flex-center">

    <q-resize-observer @resize="onResize" :debounce="0" />

    <q-splitter
      id="photos"
      v-model="splitterModel"
      :limits="[0, 100]"
      style="position: absolute; width: 100%; height: 100%"
      before-class="overflow-hidden"
      after-class="overflow-hidden"
    >

      <template v-slot:before>
        <p-table></p-table>
      </template>

      <template v-slot:after>
        <p-map></p-map>
      </template>

    </q-splitter>

  </q-page>
</template>

<script>
import TableP from '../components/TableP.vue'
import MapP from '../components/MapP.vue'
export default {
  name: 'PageIndex',
  components: {
    'p-table': TableP,
    'p-map': MapP
  },
  data () {
    return {
      splitterModel: 50 // start at 50%
    }
  },

  methods: {
    // we are using QResizeObserver to keep
    // this example mobile-friendly
    onResize ({ width }) {
      this.width = width
    }
  }
}
</script>

<template>
  <q-table
        title="Treats"
        :data="points"
        :columns="columns"
        row-key="name"
        :visible-columns="visibleColumns"
      >
        <template v-slot:top="props">
          <div class="col-2 q-table__title">Treats</div>
          <q-space ></q-space>
          <div v-if="$q.screen.gt.xs" class="col">
            <q-toggle v-model="visibleColumns" val="coords" label="coords" ></q-toggle>
          </div>
          <q-select
            v-else
            v-model="visibleColumns"
            multiple
            borderless
            dense
            options-dense
            :display-value="$q.lang.table.columns"
            emit-value
            map-options
            :options="columns"
            option-value="name"
            style="min-width: 150px"
          ></q-select>
          <q-btn
            flat round dense
            :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="props.toggleFullscreen"
            class="q-ml-md"
          ></q-btn>
        </template>
      </q-table>
</template>

<script>
export default {
  props: ['points'],
  name: 'TableP',
  data () {
    return {
      visibleColumns: ['pname', 'coords'],
      columns: [
        {
          name: 'pname',
          required: true,
          label: 'Point\'s name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'coords', align: 'center', label: 'Coords', field: 'coords', sortable: true }
      ]
    }
  }
}
</script>

<style scoped>

</style>

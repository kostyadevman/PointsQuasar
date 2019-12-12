<template>
  <q-table
        title="Treats"
        :data="data"
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
      ],
      data: [
        {
          name: 'point_1',
          coords: [54.73, 39.73]
        },
        {
          name: 'Ipoint_2',
          coords: [54.83, 39.93]
        },
        {
          name: 'point_3',
          coords: [54.9, 39.73]
        },
        {
          name: 'point_4',
          coords: [54.73, 39.9]
        },
        {
          name: 'point_5',
          coords: [54.3, 39.2]
        },
        {
          name: 'point_6',
          coords: [54.7, 39.6]
        },
        {
          name: 'point_7',
          coords: [54.1, 39.3]
        },
        {
          name: 'point_8',
          coords: [54.99, 39.26]
        },
        {
          name: 'point_9',
          coords: [54.77, 39.11]
        },
        {
          name: 'point_10',
          coords: [54.55, 39.51]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

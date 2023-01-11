<template>
  <div>
  </div>

  <a-table :data-source="props.dataSource" :columns="props.columns" :pagination="pagination">
    <template
        v-slot:[slot]="item"
        v-for="slot in Object.keys($slots)" >
        <slot :name="slot" v-bind="item"></slot>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
const props = defineProps({
  dataSource: Array,
  columns: Array,
  pagination: Object
})
</script>

<style scoped>

</style>
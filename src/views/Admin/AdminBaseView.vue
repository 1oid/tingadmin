<template>
  <admin-layout>
    <template #content>
      <div style="margin-top: 64px">
        <RouterView />
      </div>
    </template>
  </admin-layout>
</template>

<script lang="ts" setup>
import AdminLayout from "@/layout/AdminLayout.vue";

</script>

<style scoped>

</style>
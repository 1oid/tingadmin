<template>
  <a-layout-header>
    <div :class="['admin-header-right', 'clearfix']">
      <div class="header-item">
      </div>
      <div class="header-item">
      </div>

    </div>
  </a-layout-header>
</template>

<script lang="ts" setup>
import router from "@/router";

const onLogout = () => {
  router.push({
    name: 'login'
  })
}
</script>

<style scoped>
.admin-header-right {
  position: fixed;
  right: 50px;
  display: flex;
}

.admin-header-right .header-item {
  margin-right: 10px;
}
</style>
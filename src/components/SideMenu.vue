<template>
  <div class="side-menu">
    <a-menu
    theme="dark"
    mode="inline"
    :openKeys="openKeys"
    :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu :key="sideMenu.name" v-for="sideMenu in sideMenus">
        <template #icon>
<!--          <user-outlined />-->
        </template>
        <template #title>{{ sideMenu.meta?.title }}</template>
        <a-menu-item class="menu-item" :key="menu.name" v-for="menu in sideMenu.children">
          <router-link :to="{ name: menu.name}">
            <Icon :icon="menu.meta.icon"></Icon> <span>{{ menu.meta.title }}</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>

    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import {Icon} from '@/utils/static'

const openKeys = ref([])
defineComponent({
  components: {
    // UserOutlined
  }
})
const router = useRouter()
const sideMenus = router.getRoutes().filter(item => item.meta.parentMenu)

if(sideMenus.length >= 1) {
  openKeys.value = openKeys.value.concat(sideMenus.map(i => i.name))
}
</script>

<style scoped>
.side-menu {
  height: 100vh;
  width: 256px;
}

.menu-item {
}
</style>
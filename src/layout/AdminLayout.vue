<template>
  <a-layout class="admin-layout">
    <a-layout-sider class="shadow fixed-side" width="256px">
      <div class="logo">
        <img width="45" :src="getAssets('logo.png')" alt="">
        <h1>TingAdmin</h1>
      </div>
      <side-menu :class="['menu']" />
    </a-layout-sider>
    <div class="virtual-side"></div>
    <a-layout>
      <layout-header class="shadow"></layout-header>
      <a-layout-content>
        <div style="position:relative;" class="layout">
          <slot name="content"></slot>
        </div>
      </a-layout-content>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import SideMenu from "@/components/SideMenu.vue";
import {defineComponent} from "vue";
import LayoutHeader from "@/components/LayoutHeader.vue";
import {getAssets} from "@/utils/static";


defineComponent({
  components: {
    SideMenu
  }
})
</script>

<style scoped>
.menu {
  padding: 16px 0;
}
.admin-layout {
  height: 100vh;
}
.fixed-side {
  position: fixed;
  left: 0;
}

.virtual-side {
  width: 256px;
  min-width: 256px;
  max-width: 256px;
}

.layout {
  padding: 24px;
}

.shadow {
  box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
}
.logo {
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  -webkit-transition: all .3s;
  transition: all .3s;
  overflow: hidden;
}

.logo h1 {
  color: white;
  font-size: 20px;
  margin: 0 0 0 12px;
  display: inline-block;
  vertical-align: middle;
}
</style>
<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="state.collapsed" collapsible>
      <Navbar></Navbar>
    </a-layout-sider>
    <a-layout>
      <Breadcrumb></Breadcrumb>
      <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
      <a-layout-content style="margin: 0 16px">
        <router-view />
        <!-- <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div> -->
      </a-layout-content>
      <a-layout-footer style="text-align: center"> alex blog </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./components/navbar/index.vue";
import Breadcrumb from "./components/breadcrumb/index.vue";
import { watch } from "vue";

let state = ref({
  collapsed: false,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});

watch(
  () => state.value.openKeys,
  (_val, oldVal) => {
    state.value.preOpenKeys = oldVal;
  }
);

</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 256px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: dark;
}
</style>

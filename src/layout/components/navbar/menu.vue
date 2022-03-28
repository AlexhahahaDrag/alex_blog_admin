[] as unknown[] as unknown[] as unknown[] as unknown
<template>
  <template v-for="route in p" :key="route.path" :item="route" :base-path="route.path">
    <template v-if="route.children && route.children.length > 0">
      <a-sub-menu>
        <template #icon>
          <PieChartOutlined />
           {{ route.icon }} 
        </template>
        <template #title>{{ route.meta ? route.meta.title : "未知" }}</template>
        <Menu :routes="route.children"></Menu>
      </a-sub-menu>
    </template>
    <template v-else>
      <a-menu-item :key="route.path" :item="route" :base-path="route.path">
        <template #title>{{ route.meta ? route.meta.title : "未知" }}</template>
        <router-link :to="route.path">
          {{ route.meta && route.meta.title }}
        </router-link>
      </a-menu-item>
    </template>
  </template>
</template>
<script setup lang="ts">
import { MenuDataItem } from "@/router/typing";
import { ref } from "vue";
import {  PieChartOutlined } from "@ant-design/icons-vue";
interface Props {
  routes: MenuDataItem[];
}

const props = withDefaults(defineProps<Props>(), {
  routes: () => [],
});

const p = ref<MenuDataItem[]>(props.routes);
</script>
